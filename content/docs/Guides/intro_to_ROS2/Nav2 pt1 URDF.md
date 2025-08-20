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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=3c27216f4711dfc9a2359609f736dcf3dce47a1c05051f7b7f382aabe5e642fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=d605b71e70268643ac2476730c5083a816750be88058593cef6f7e3f1c2dd2f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=13d1398af2b523884b32aa7231165e8ef49deb460a6483225e384741b62e6497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=4acb98ab27119cb91c7a97361205eb3d3bebe5342d2251625272d806312cf203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=0bf08381d4497e6dfd20e472c72fa5c23c81f642e291724dc14c3aea820ba78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=ef247889545a37b585320335e3fde9f1b570c6ec2082f3cd7aae05a40845a80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=a21cfb066d48be08563fb348521425c8cf7f0882f6af56216260f0427669a68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=8eda3f4e6f19351a1dc371539aea001920bd7630503fb2fdf9484a2d01da5a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=41eefacdd59ecde5fd11a447322edae056e8fb614cc46465c3560ff35e06405d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=ab7d5c5218a8cd226a1a66f50b3888b874a3252aa8339ad5a536caeeeb1bca1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5Q65H2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuIwFJHX85MuWxkjtCfu9EcFuVPRxYh1K0UJK4HwQnlAIhAIoUO6a%2F0WQHtbJhGVhDloawLvjQ9wHYaJDSePWJ0I6rKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQOXTJ9%2Fnik353Ndgq3APTlyj%2FWExEOJDcYUMACXi%2ByMKmYKG%2BSVG%2FrPsbZdlH28dDc%2BLKfT%2BsOSee5XRJG5RFFXAC1Xk6dHGaVi957RA3bkTKbhXx2eL055EMHDn0lLgMezzVNQNw6LfDJAcgvvP5r%2B%2FnESLmPLOqzSj3WbJXlZXl%2BlMy8y3toxeeP7%2BQrhA9CGPXN9OX2Ki2xLBvetjxsWf0xBwKC7GoCWOZbqT0biRyVTeFkHQSw5u9IG7fd8M%2FN5DiQeGDSsS7q%2BfyFPFeG7tEIPBY1U%2BhQn1G2IVV245eFP%2FsHKyNdmjFhf8P%2Fu3QR5z1Z0KXvn8KwnVTFojCSlqi%2Bepp0g9EtalVWP3NNO4pycYU3yDFaMP2N03DR4Pw%2BJpQoXOB6Y8EDYpvbF3gJXKo3l6UTZyeTGkVqWv3hmfUjX7GMYg0dpv7s9%2BT3mROyb06DzSIFxLs%2FqSMqy2xFv4nWwZPAktSg0XDcuxTo41h%2FmQJ%2BNeM49Oxzf3oQiogFI43x8CBvhHGnskgrMo6wAsDfTH7S9KyaFCy9dUoJX9kpByYsueIo98Ps01RvKMH6ZeBxJELnNLdnIKR%2FO6sXRDICi3CWgNvisaKzJIj5vntkK2rcXWsJ0ajKlrykAJPw62MuryI9Tec0TCKp5bFBjqkAYVFw3BLCpWa2h0LVL%2BK%2Bt0opxiYEFU1bUsWb0JpSYZJaFVZYqp2WNaN%2FeUc0URGwbF6OK9mPTxI5W0vErZCad39fAt%2FxdplJpaNaRQaOBogXblfyzO5VtI5PTj9BvzXRneJ6EtBhNGkSkhHKQ%2FENMytHYjF07guzcTBv%2B5sFAqMpgsctiBcPP9QEOqFp%2FwIUO1hcrZe5RypikFZ99AE2TBmI3k1&X-Amz-Signature=2d8ce4b88e6e82e88dfa944d7340cf440abd6172954bcca8334775568b38abd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCDIA4D%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR0PDoKbJR00gLugiTw94C1lZrxTYw7O5tjTfGvh%2F%2FuAiA30pXNJl0aec0D82hY%2Bv9NZoVlWDhB4H%2BBRthEw8icjSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO7V9yofyroWYf1EtKtwD25wN6R%2BeE8sUPtgMoAtl3KQOA8kMLHVFsp0bAMkRUE9onczL0t7KxhplWazsfK%2FAqKWy2RypMbuplQPhxacFHy1qKTU4ECr4JatcihbxvbdRDvXVD4EkuotODleOKqaOoUZ1a0VHDwK%2FHPOq8l2JzL8FZkeFZIw9sze7lgmBLTKoYLrE0cglYetR%2Bv2sJr85ft2j6cNsFoWzPt0F6%2Bknlt72YeMXwyugDye56C7VUQzh5dLIlEZMXZtow2bDTw5ynq32rJxPCoC6xdvJdoYMYqci35F0mPTPna4f3FtCVOuCjOf%2BNz0XfuDy1KKlNxL1AKpdEoo5UG4DFbGGluD%2FXHq2lRkVfryiMwYACNgp6Ex6mqdwe4CsvCDxXpmHO2sljnzHIzUYUkq2swCJ01W34MPF2JZE6sVuUqO%2FHWUWx%2BtpCNFzaABYmR5fLeJdJ4Aty3FFMBNJG5N%2FTIXFxYmHdEN0RJnlrjTMJ1TVRr4%2BbWQf53t87cdJPobIp1RdrdVi%2BdJ3bFFWvRjvq%2FAtqBfem9TaRr7ledqF5mS3aO867oP6HHMLpj7LZHwMS%2Bhmy28U3RQ%2Bp4KvhX%2BSttZOhQLQhnAE%2FkZmef6IYQE9MGeGMgFOP%2B5xjBoSUNqv7mowgqeWxQY6pgEpkdvg4Gb73Ba%2BhWf5frTzFS%2B75QDpUetCCozW6dGxa52VdxNiDpoNEBCCTpmTwOZUdjY4FOPLYp%2FAvZYZYWqM6Ge9AlL7HP0bsukZhlVL5MzUKMUW81YAYXqtkd4uzi1OMOMqb%2FPUA4GtdOX9LPgiIvAG1%2FMaCl8pdA%2BXPfL4a9VWFjuR4FK4F4Ou5eRngFJrRQiaPt%2F%2BIolwywBJAiaMHl6JZ1Lr&X-Amz-Signature=3e59eb060ba0296cf7282d9753dca7e8a36aeb9e04a7fc042b56a26a9b2d52e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTQPA5S%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAJEqU%2Bmh17Nl%2FSA02HxsAR3wv5oVHKAhsbEYj8%2BhddAiEAh5WEZJivS9Gt282A0thNDCBj4CNaqXmZT7uAzOOsB7oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwfD8ng%2FwMpt3BdPCrcA03suLe9Z592QmsGbhUHKLyUyYMlB7ruRJWf3AUbb6vcuJt1pXF1yXZzEsT4gIWVZH2OJ4jXDcmENcGUVs0Tb1Lihvga4%2FsZ33ZbTaibO%2BAOTpIDtodg%2BGqbRGZcvQux9wOYK2OinGVg08cxm6XSFqix4%2F5QRq7wJib2h%2BanHVs5%2FolqABdJhb%2BuoafOZCbeIqrnvPvR8GnLqrLj59Zb7pDkXcRrTbXDf%2FQrEEMIX27ugiBRfB25EoQBiYlooHDEmn1RfsFkr30VKUgJC68iIcorp%2B8xnHBOKtJ3%2FasHFp1TUqV2XnW2DyMb8X2gbXrg1HhLyg0bQuB9ci4I1Ve%2Blz3St44WNIqXwfWBjeKlN4jhXpynvh7UPPXi5mBX1fYwS0b89kEcXuu7JwE0RB%2Bys4%2BvbtjdH3YGYJB46bstWCyTOndY9K5XZCPqawPe3BwMnxGm7nldtuaMiFhLugtLbn1%2FqNonBR2lp%2B1mfTzA04aqJdIiUVLs7bD0Ap%2Fbh%2F6xz0Z7skm%2Bi1BLKFo0Ejigl9yqn4d0YerKQVhWs%2FzWvc8dU2yETZsaGkq4qAFynaltu%2Bt4CmyILlL1MqrcW3RblQ2VXeSSk6t4ncEX3e5BoCX8vajshmnLDQuDQtCkMMGmlsUGOqUBzIYtDvNNQBaiC4V0GvGaRBJYDYl4oODn%2Fx2HqDSaFJ0GYzJWkshV%2BznXs4Vmiq4IyAbK%2BOsR7xih%2FDv9SkKAJNIW0KjMt9CYYZq4e%2FOw8VcaIlzcq3w4ECZLQM9t04pCjZehiHHWtZaxGsPlszxMIkAcfWU3WVVhZzyqZ9cEErDNgqaJhZ2kkWsauP29%2Bk%2FOMYitJe6Jb8FmIK6u2jENACoQu7wr&X-Amz-Signature=97a8b24f78ef0e55e3acdb392054d76c82562635f7d205ef993f451001f6d799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=c61c0dfebb3b8090f6b90ae57a67b2838a6ce5d6cfd80e3c36d1fc825b483809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKW5VCIF%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKG7oe2zPXII67s9J3uJdnEXfD%2FN0j41O9qyxheqhHUwIhAIWu16Hxwpog6S%2B%2FAY9NeSB6GBbypYFuGH2YhlID6qxgKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj4K9%2FvBEPU6dUq5oq3AMypmO2AFtaN5gtLVlwMFwouRTk1W7AZ98PHQ8Jc8Rm%2FakqaCl4HQ7buWBcgwm9%2Fjzts6BwOXGQ45sdWOqyQNtEMRGDZNUXjpwAXcMXWMXKwokACo47Qk3Zz7xtMO%2Bs1f3da%2F7ZlurFNBuHYskJdBur4aZU%2BKmWbtEUuSyg9EIB1cgGolFqExt7Ca7VJ3rZlmk%2Bl%2F%2BpA%2FCeOhDfyjeAxiKm6Vmx41U78rM96zK9gOszVVJFC2Iqhy9alDyn0YhVoVQJ5JOfxsHTsV5mrFZCrwvMXdMsyiUW3jefHNZpLtZZO4EdE0irrsc1Kz8H9lR5xA7XsAY0KfHtph5i20akfwIdSBL%2B7dhiyRY2E%2FthWxwAHeIl0icEQgp2dBCP%2F1uzwzlq%2BV52YvCY2eKAPGg27F637%2F3j3C4PU0f6HyGF74wAqLocoYzvg1CqVtd%2Fb9dxeykYc8dSNc5GbQOmFoToEGW6VVkmXBnBwIT5ijdEgFenl1VwdeZm%2BQ%2Bc%2FC8p6E6NGRbBMWx3xrRwiq%2Bt6hWy40dcMh6PElQ7muRZFqVdFUaoRN2BnC1n5ThF%2Fs0d%2FqPsa85XQxRpFq2HWxYOSCP41i1a1oBquTHjF7AB600rAyWkS4abYcHt62bzf%2BcfDzCqp5bFBjqkAdRnBMKh0Cqbzf4tCDmMCJGNCOUzwKeLJOebcAzvfdcdfDtQUJTogS1VFUJakAIJX9k829IY5Q3CpvuidqpG6cvENuZ8a4r8KRVGMYSiX036%2Fs2U%2B7Sy7Ii%2FLkhdAvjqKbl6VZBvI%2BFspxtJ0M38GaMMMvJF9NCZiaCmfi2KPVdpbonhC5QxrNkywOCGLMm6mcLJADz6hHBSB0gf8B3cCihh%2Br3z&X-Amz-Signature=3ca3fa48b0dd5be570f83b603eed8b64eb2f631d86253fd9bf2bbf2b9dd8bf71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=3d91db6e861a575c4e9cd7382a04d6e193283328abd67360e34890dba4c018b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4NJTUJA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIWp9O0bKrH1MGxhnHi1g%2BPyyBC8wSHSUzGP58j0LCwIhAP2naP4ohurOIKUqUHPswskZi%2BG74O3FayNbw68vjBRNKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2FngT0iH8aZn7SS4q3ANxXIgcFe58zgRuFLp9ObYZUumwVMTaOQ7u4%2FG9pu7q4ZyvRwR87ltFj9ai4rK0j3hgALS2DupzQpScQqMC3RZFDkpJ9khR3tBTeswBjyV74OzR%2BnqgbYlppFcy4xF0N2oAc74AFinq6d55dUI9QZKh8eowrCeYwTwmDHIIPy4YpA3odPEKleS8EZVvlxVxTj6UmziGJE1AJptQVoBLCLi1lLVoldFIw%2BfkF48xC5Pig0hpLkaBH7YwrHKflnAfhGBbFta%2B8onWHwj7a9sznOvZja6km6j6pbvPnZDJIwwkDMrEmhhhWugHuX%2BwqBZ%2Bz5WuKvN0kUK8YcDJAYQgtW9lxSegl7SkmHxHxGX2KLnTBeHd8oIBMHAsBP47tXkKnSeK%2BtAeXcMCjJR2Igns7H6FAc1orp3DahoHKXQZufKqmjhXEFDICCTXE272K9qWYtooQDxFN%2FsEjzaR14jdZMMRYVxAoqnHiH2mz%2BDVrG9KbcyO9Ajic%2FpFQck04Qhsl0XvWZCplgXBEsEeCGRCI25Dxs6gdT4oMMBA%2B2rW21X19vo0%2BU%2BRiV3R4gx%2Bb36gwOQCuyra9dYo4nFYhFmwOYXwpSq9Sjp%2FjM4AZ3OZlKXCONz1OwE20zWA2it4tTDRppbFBjqkAXvb4norPvbcIw%2BAA62a710tvTzvV8uCplDn4iPmopwyeXchJ8yp03BRPuoeeOmCHrKlr6gptbIifUAEZUTR2wjrjPFdjE1RmbQFtF9wPt3FKPTL2iGlciMj6yl%2BgzX32BTqB4ia8IMSMyhMg14V5MV58zZgShu7QXEMKUMk4SaJZKlryGxhPFMEof%2Ba8qPih9gKLQZ%2Flhlas7qqa8OpR18%2Fc0w3&X-Amz-Signature=fa95581a3bda4785c40606f969659eade6550dbf65d83919d2a32811106bd15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=c7a5128a8cde528be5efb856c85e8960fe026ff469d45312912d451b90b0d7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNYOC7H%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf4Nj7Keff80WJOCyyevlGcyZXlmRokpoOqmlqgDGwygIhAP3egQhOXjNqSa5lvMZ0E3Xnt3tPJRO7bvLrw4jStdkVKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaNCq4j395NeL1VAgq3AMRHhjNAumQEe%2FfY4F4xUxrFI6IiI97GTUpR0z2uXyIGP163fntQZ0vLBB2KhSpNU2U2jpob3fH69CC3xso27r7bDRCXuQVo9Pv9o3ag%2F8LI2Koz%2B9nguaIFuxTnrv%2FlrbN2yRFa%2BGKEmLWbGrZUzU45JLLgRiGLPMJZve3O2mS6xBA4Q7vU5FXmTwxWpVd4b4gujbVDOrJzzdttTh8fZvTrl3Nh%2F9xOiD5Sa6VoDVJPvUzvgHpVvnRL8pMmg6MAoywM4o6WqB0GBbsykgVWLaxGkKpGI1XZhoM3Dv4goAK6wEF2sV8VPf4VaDNFjMmWzBjwpu90WQBw0sGiDTPSio%2B77JM8J89GpbYvRpNQPWjeq0GQhcduRy26%2BvZjLr5r5AaqgjkS1nTUgMP36qevmv0MKBMqQ3AIK4ivfPortvBMbW9vt9qx7utV0IFUly2rhZjyTC%2BARtqac37phlcR7LkjJP2wJZArZC3jTOmcbvs1%2F2j2mznEYSTVmYkmLIgG2nZQIjwIRtc1AXYnKGNrK0SU9s3u01S%2BlnyOmCI2qNG1ub1YMdKmXZ83Xp4nZodupn%2BU2Suj9scWfNXLTMA8497MZlgp2EWVevlkVgCC3ChRgNxjDgFN0q9dmduUTCep5bFBjqkARLEykkWcCrF%2BMSzWWy8tWrwQp6qWtYD3GxLwHHc5IF8KfaiHWd79InMevlpFP777vQA45r10zi6Ya28YVcJkJm96Rtft4e%2B%2F6iCEUzFpG5lXhI18cfTYozElWe%2FR1HLJQXjrnEMlTS2zxhe9PFFJXXN0iYyAT2WhHFtwJ8ClDXSciqejscD9O2cyytphISGGF9s1FfTqML8nfAfwLQsf21IG0yS&X-Amz-Signature=f657025674a23825f28084dee049da069eb725f0ffb662797e9b6f8faaa22f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=415070d1fc67fe9d82ae3f91341001950db1225108ae706366deeb7ff9da5054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3IFP2P%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFE6CCo%2BrovvTq9N0oUycwCpMMWKz6ZKCxpE3GALht5gIgcFyVL23pYbAkm0T%2BKYYPylMsm571RIoKRmQ6GWyO24wqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmtlhT76UDZA4%2FTmircA5j3AAoyMhUgKamUqGaiFQ2VsblsEiKfomoN3b2aNob02G1C%2BUixrFRYgbsTYh8r8WSnZIjmsmBFDZnYBIyDohtw6ana64Msj7ig3EGlvQDV3NfDV3RPblt%2BR0HC7EhbQBCOuFZVH7Q7P94xzZEmY1W5rr3lDibHMkPrm0YA6rZ11EDbfG4g0z3du%2BRgOZNIINL03jotojFnB%2BVmKAV%2F%2F1XQcNmC3c1zdO9dwRJfWwaiZt%2FINjO2dW%2BmywzMTHumPwsxeH0Je40nnEgjssG1zjjG6b2pLWbrrybfXXPYG9hmCqdHkr6E0e%2Bb0IuyvjsxXZ8Pvo%2Fb9teGCF%2B7T81ZuqL6zi5OZGF57pdYc2hwO2BomTB8HhfnVldN1JeNEWODVYOXyCZ8pTnuzJZnVwI7P2tib2un6tc%2BLOR71pnD77sqIBQcv2VNiej1WfesDlPk2AZaUpJMMahMIX9l%2FRVl7i7bO8PgnhI%2BKsMDnectwMHuUe%2BVJVuzUBa03hK9w3B6Tcsf6lW38tMyYTQzsKyuuMS%2BYSke55VtI9c1KrfZIA4LYKP185%2BxASSCRTrZOqcgCKWcnFGe22j8DZDime7JH3Shq%2FIgEz2FemGVAzqWgHj2ZVzDsDQnUJdRr2MaMM6mlsUGOqUBCKZXLpEIjEQLccohcevKskTsDx9VrTicu3yzvDUrkoUa%2B2UMinbYAZUMDPne4tXHg%2FTIp3fXhAjUU68Tr51sdfSpL6w5qgebfJsrIOQ3IWrEgLppj7TIiUThlHz6%2BC6OjRxim2YoCfFY1sesEdQHxvhkpBJJr2Lt%2FPoUWXMI%2F6GcuTsEgRmDOKKX8nbsbGRJ4tvaGrASoz9vn0jynjlPafKup8E3&X-Amz-Signature=292a34d957effb0fdf80e37f8b39bc6988df04003d5367e080b76b7ef0673ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=943ea896ec517f47fd34bd5b0dc4e144e0fc275c591a41dbef10ef6dd2c9b97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BBNA6SO%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9COo08PKiHcESFkufTCATi0rndjNHuuxCbZ88fQ%2BT%2BAiAC%2B2TeYIX9mdiq28w0f%2BSg2x7PkjKlB%2FU7EwaJvAJK4iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxUHva1%2BcLMByf28MKtwDuSU0pU1%2B71xnfP%2F6FuoFXxnEmuulzcPpVW77Ms9WR9lI2PcqBrN7JbW%2F%2FCgAWyEhnXkib0QLJe3W7Slu93lBnfNPe9V6heQGZVtGxM38coJQIf%2FTebnpOmUb8%2BctgrTBCiV8UgPfeLSMlXuDGuuyGRvEZ4TzkLzkvk%2BVxQ8t988OociPSOePJ9CmL3CSpz%2BdNjRr6mDvDgB1%2BotsiXDj2W0mKv4yoMmnQg8AnuAnYHSGGbbNt0cxkr0ziv9kmgpTXM%2B8zzHzqjRGZpbNLTcRxlXyrrUAE1WkVhnHtIycjeIa0D9%2Fw05oM%2B2kqt2vFjv1gTdpk4vZuK0%2BNL9JiZR71S%2FfGGtAFM0LwiYBj%2FzHlX%2BtLKZkRc5UF0xxm4T84i7FULWfXgZAvSpFfNVrKCdkfj86Aw%2Fd8I4lRL03yv054fCquiCoHDL348y0ZG%2FjeocayyoPOK9msg1qakwwcgvRUPlRK7ymK1zv8myNyl6anYtc4Hq50f2W2S8rnfmwWTcEnDSYAZT7KtFrdzJmjlp4O7ezklzSP8omVwwWRhaiVA%2FOn%2FRru2vqgi3em1iXL5iLxVVViARMlV9wT4GNCwC51Nf76%2BXV3EMfYCvH5hNJAOjc0K2qnP8w3caqjVQwiqeWxQY6pgEVUuOQUlLIXsQ9toYWOw6QUGtLsuDn95YH0zRjQ6pEWXdb2%2F9TQeuyDFOoCWNSBUREeEmf%2B4yO%2BOEyOPSLYdYdc6EUWlPJvCltnVJT8tn90h%2BXnFvArn8ONzgi1d30TGEZe3oE3tmjev4IYF0HikNJYqbaX0MDJAKDeshISHHGATuPJzEIOlxWe2AQ0GDICqx2rfwi6xsxUpvYA9LLCxeHFVBlvLUN&X-Amz-Signature=b972ab082388173653f984e3b5830b19bbd81cac43b9dd5d1fa05af51bdb6bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2AXVJQD%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMoJoP0giDJ7OOP%2FZZ9Q5T8o8%2BtfNc8fSz8k4V9BcedAiEA4v0z4PU4PtjxsfQqDz8jBmMZSXYl5M%2FvUgTxLimrplYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPBmUioqQXimfMQQircA3bfhMmYHMrAA0lKS%2BeQ0JnVJYfSrvQHBUv40%2Bt2%2FKo8q0xchIu1PFk4oOOSUhvBDp%2BD6XN1TzsroWhU0Vm8LQ4efVP0idDO0U2nZIAFxi%2B0SbVN9OE8ILkmVZ4%2BgyB89Fa1bkvYn6D%2BwvrWbaAIS2Be2AV31dWJZpF332J8JDIcKY7vF%2BlKAp4RkAebz8iB41zamXaLY2ZZT5qLnn5E%2BONbUXPUsE78A5OERINRmKQBSDzfZ0FJbHmDFaXfjXHy6ubv1WWqEA%2B%2B2nGlHudWwV2fOCtXFoCV0NT51ImBBiqqVR%2F0wO8%2BR7FF2XMt6ol5d%2FEbihp0eEp0yIUpmE%2BlyOknM4RMxyKs62T0MfPrpn9ntTtjcLxmlTRhgg2WIof3FlQgSGK7dcdfDS3%2Bp5Cwwsb98zV8MJxymJE70XDUG5RaONEWHnZDDzXc9UHqx326ZdizR05zIy4MRFhWKHwpSsDzM6q9%2F3qKkS0rYK9LytVGQxl8lBZgr8TKYnYRhPFxGmqndtGbypklsGioINNVTZWL%2BjJAxivtBhA37ImXWi90rlU4IVLyj%2Fqs3yxMJNQ5Fv078f5WINNUP%2FJNNcRWE04Bd%2BuqLgMMfSbJ67H6Dj41a%2FVyax3g2qqUKE6IMJanlsUGOqUBe02rlSWPuQjDHYtMdHl6mDHg5w39V8mV65eGKvcWpfQVjOTdmdirv%2F3P2EBaYg1U3zCBiFvaGDyC3nfEnWndoIMN9gjgmgG6clFd20SsIzrYqGxoGVRhyomfoVsp3m7zqXUl1%2BuRFX63uJtZpYQT9li8oNINPCobs8D6rvnWqhuv3dmtu%2FmCHNNnFJidVvexxzT4ua6QF%2FFkuAK25yLVTNTYxIwn&X-Amz-Signature=b1f410e886357044c7f1b7759bf77a28ce3accf5633b5049b116be206ca6967c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKCWTCDP%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXN6b97d06OmQp1DVttkAA8gNxSCWS6BlFMwbzydw6DAiEA3622LKi0QZ0rnUmWpOvJjafD6KI7UkbLqIlEXjPoPNIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFIaoyKqmEkaUqEKSrcA4dOrW9pmfjf%2FEfdteFHtCnAvq8rowkPrWpIwkquEN%2BRWssnttiSHTFDMC5hD%2BM%2F81wnnwoNRVRPPB5IXIo8oqpRnbqJxbleVXbpkeQV24zZrMKfwV1qzIZvv5AYVwYmdWUiXSf3RcS1aCGBtgRHo%2BZPkjYzr9hxOwta4UCTEOxI1JXKaAf%2Fe6OafvlANjwbSZi8sMO8TJ0Xb3qtfVoPsmmT6gfIDwrFuUJlSpVcI4ul2dRbdGhpRu8DhrZwUMm8QwrUkodqscmJ%2BRtxVJbzbCi2O0Xnx7%2Bk0BmENyBxCrKBr7oiCoWSwjwGWviyZqAMFG3ZbbtEkAej5WxQnqDpPehZ5U%2FVQq2v27uapZB9sYS9yLxqek6a6tWX8uZ9LVUcghhP2GedxZ5ldM4Cgi8PdOU2FJW3tCUr3v9XXLGhY1h2CVNe9VgIvxHvVDoKGyaek%2BpftchqUHF4DKPKx6LvY%2BBF97TYJF18FEWwYNFYj3Q2SgEusKbuNSo%2Fm8iujsr4wF%2FTXpiqucQSsntft2lMRs9bokIG5HIloLzAXpP7SK%2F2xHdsUml%2BTQolFtP0Qp7utXR0hkKTXPPCRKhZD8s8PUemhm4VTRagUEcS48XAU0P34j7hLCgeO1ueoqC3MNamlsUGOqUBF0uhdUY4ejMcSiesex4DqtCQgSi5L2jVBzhAIljys8W3cPQG2uqcofCrtNrEssEDDf0mOrOBElvghCixraeX%2BrU81EFDTU4hOVj9iJ%2FCBBmH1hUVaR6MzdYPHiFJ6zCq5cQtuXMlfBmzZcqMB%2B3Owk%2B8uy73o7AN19OQt4f4yDs0ak0Arl9hq%2BwP1yd0tgGM0M%2Fb%2FZJf7LwO%2F6cESpghLpunmhST&X-Amz-Signature=a48d44ed816b3371e0e131564a6871c429ceefa15cede4252c152680b201300f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=7a751a3579fcfea9df6a6d537b2575ff7701b79ede54bda47baa61e7a1b95998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIAKTC6%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxv46l5UIvRm5yje8c4IdXuMKWDPOWRLdo4Cq7%2Bc4YYwIgGkEo%2Bh6TLkgSZx0bXUtrCZPt2X2rpAvesEDZbWBZ%2BxUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr0Dgu5KRPI0tT3myrcA7z%2FilZLNnr52kp3uwFiS52RQQB0BeX4oOEasciLQ8PHXg0sZL6qqajVdoXOjcOQSh0EjONd4990oWHyKu%2F47mlpVxhIEPc1jYFo2U5XEg13UUEcbyp7MbIK0VtiPjGlZAtMJBnLPaa3FAANA8R0UoVoirtl9z4SfLw%2Fmx0jlGc3VBZlGZXUpqOHDNzPgonewyUmZrioYz4U1FsYulfjozXzkr3UhyN%2FaVEIFJ%2FUDpJs1sNcZtXxwHFbSu1OiPERE0trSXC2VoZM%2FuyQlf8qoiO6AXkkplltvfdH3ROsq%2B%2B%2Bq66mDoKQ6aR05fyE8IdXKe%2BBuo1qpjBnykedlYbaRSp849vghAZhgj6HVAxiGVvPzSg2W8rkOJNLkDQ38vV4z4XzYIkzqgMVoriBARbjpIiEYN8o19ePKOOZf7LGuCyedBLOnDJ3UyDeDem1oVdi4aMjqAHwXK%2F297d2%2BLX1IfKxmuKGDVNZ7IlQFGSxhGIOeI%2BbK0AYw9JBQBQPIhPQ1NYToq%2F64P2%2Ba4M5egG3HwHSm7KmHb2eLhzSISHk%2Bpf0etgH2VmXOXZqlAle4IU73QPCpb%2BFkyCeukDjYl1w7Tlt1zc%2Bpl8ZZ2IQXYOIvL0Bns8gt4qhiGAH30MLMPWmlsUGOqUBm%2B5vBRQpxHVKx6prXaBLg7gZ92gI10CUWN3cfcRTJLeDLOgBBQ%2FiVSKx14ZPrkl6qJWGLWQs9F5ld7O2aHSeuKYeI6VDfl497G5pWH7vKlUqfq9kBQkV0RPDA%2BHsUopXaOao845jz5obc4hhfXwaMnoddvtplda9eWYtoNjl3XCTUH%2FoxdnGDiCB4m6mDHA3IVlo8OUfNXsh6sGWScB2J0q64y1b&X-Amz-Signature=f5d3ed59a096b406e65a445646fc9f839dcc7c149f8013c3b74cd6ef9e3c6b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=5e566189991d81aa3ecd7156fd2cc8debc8fa2a317744915e4e8966807bbee5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=f7d5338420e90d3721712ca13f5b5b912163f2c89096c5107482bd2c5e59e7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=b2c54fb0b18cb6d6464cb75fbdea05291bf0e74a5a95b07a8105739e9dbe7e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=380fb0cc13751c8bdfacd0d359e20d5e66454a54b7e269b22402529fd2a67190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXUV3ZU%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrkG99VbyzZxzXOhh%2BedwyYPdHmi2ogjPkNIb46KI6pAiEA%2FILDGCL5TwxBdRN5mPYIKQeI3iU0KpUTG7X%2FXdGThM4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7uf5VIF9v4i8NZaSrcAxzO3APc6mcaKv4s%2FIdlltIc4xs8stq6TH9QA9U%2FKXOVHzi8w5nN9B%2BDk2%2FavnwOv738tyU9yE7E4MBXTrNfh0RK4ieqPWGMr8rjO2IJmegaJSwGe1Fw%2FQRdOa9N%2B57qZPdYV0Q4jElrythodIrjcsCSVBcTSvSjZsJw2q38x92UN1DiFi1AaR%2BxS2jzZjCD%2BPjyidSU%2BPCx8ZG4JA2K96%2FPdLn8KaecAmFbRy%2BfhtnJAoBwiqvH4%2BHpQ%2BN4Vj6K1z61%2Bb8CMNIBmPHSkpuuBCPHbjw92vijy9g3tKkZ2ffOfv3%2BumgEemweG4SrAQdqg2unkk0TDw8An8JOU0nGbo3zYkjSPSBvN2yXZ6optATpa0yPmO2Mz0M1mzmYWoVL%2BBB%2BJL1EjeEUKuAxjrdbZizRFJlAeC22tOYPwBgZ6xbvyTOGOBx7%2FqMrF913mhyMTf7s3RR1dLp2ZUb%2FOayFQJKILZxdPX1254jLMVTYCZJEv5FdwVU2KL5rNPeOB%2FDNNuOtASpZpygZaaH5Ii25%2BZanYMZL%2Bf6QqYuKKsSTHLoP5wMCH%2F%2ByfRsom15VyyWtxwPzvja1ri6X83mHBpM3I0mZYK%2FQatOTc8wf5evYbqdXEb1Z3qLOskWhq5%2FhMNqnlsUGOqUBXRpBxNC6%2BV2V9y6QuCsJi%2BnORC2j6pYtMS5tzwUtmfzEh7ZVM9efUp9eOHdVHTgoL4MolGPqfRmh4Z%2FsgsChA5hEnDzBODLVbJxwMQKMtUsMRlG%2FyomeapObalBykBpkPmBK1JIAFlQnnkrrqNlcqY%2F%2BVCE8qzhUCxzy9NALEAzQ4mMYvzRr%2F8oOp0oIwuvgsRXeE5zHJROnZMiTmWhvNVN9G1So&X-Amz-Signature=559c4bcd556b261c14e2c7f2736fe2a096c8d189fcc6fd232713f9f911bd1510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=9fadcea8956172bc2d31ee6008c1fd0624e9accdd1637cf4d7d2d79ba011e60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=71c1628458057f16c8cecf37dc276141b88207989a379033916668f5947ca157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=b2c54fb0b18cb6d6464cb75fbdea05291bf0e74a5a95b07a8105739e9dbe7e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=90bd60052fc9ec6db9e13be6626564966d508cc53eaede1c7818081ba959d999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=bfe0d923571ab615ed4067e9c4a88c64feedf4313c42e07a6a9c32f109e615e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V663CGS2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfRNZOt2b22eqEXQEvwiAdMsontrOeAUUWjwI4ZClwgAiApyPj2JZzCJhqeCVcHbHPcfnRMRpzi6GtkDRyE2r3B5iqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhEUydEdcCdB%2Fg%2BkKtwDX3uMPPLf0j7IEC%2BREiB2f6eGXwWCNW91ilzT0eZkUqJWIkHrBvD1%2F3xMFR8MmFZUNnSbaZIgy92TJkSY%2FcUqcdwWaWjN2kKoT7vKRsLg95czvN7ivr7z5z6sMHbDIRyKqUa%2B%2FyPCgh9Fux9o3ZsALvmMFafX3kDunQ00QPaMTaKy6G4awZqYv4C7YCrdacSNdAf1VBsCJrY00Z8Ep0QXG3zK4FUGfg%2By7mYIsljSIWGXaYBWFiVc2MbNVeNP4gLo91jyWlVDlxYeiyCvw6Zw6p34r1SJbThfzTc7LWJyJurOkZdFt81vZ43wmZoDkxa78QdglbWFzP9PKOzkV9T4paNOSENR4RUFQ%2BhnXmWM25u8blCm1rk9bNWZVg83c818830riLjiwd58%2FqsYF8m2uzlyJAm304FkecZ33LMP4QgFLc8PopPFVxJXdJ%2BHSbDcbiuTknNGcdXk36nK9J402kxbTQdn7Vi%2Fds9jzY8SkL%2BSyTJEvxTTSGqYHQ1harWWQioBvmP3Y4fTI25fUKCmy%2FhteFW8p7URUbMurCk%2BCaLgKORC3FNOtVBraH3UpvLwwqU1MQYn90khQ84VA1CfJ72uzyFLTyP8GQpolE0rXACOIKHVbpVTdR0W4TUw%2BKaWxQY6pgGtzYomgrmJtwT3w2dQxe2a%2B4Rk4o5kXxKNq9EayzHHj5fNrB30VvNKP58qVhTDW0WJFYyf%2BfWuDRBD6XE46bVnAGJ25Y5erkSi4i%2Fvpzgk4KrhI3NUQ8c1IsDe0Qno8yngcbACwdzOB%2BhJb6J1nYuUYV%2F4Oc1pYTUIVREA4%2FwLt62kWXJ1Lx3pYHiGjtgdGbJf2hfyqET33WatAC6MS7ZZN6LlIavZ&X-Amz-Signature=a2741a045081ac36826caf1139da3d1cbab3fadded013497da3a1e5cbaa65fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


