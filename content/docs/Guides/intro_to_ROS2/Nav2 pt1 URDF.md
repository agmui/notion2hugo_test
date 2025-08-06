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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=80f299034d7a26a46b61893456e842d3baa5741f43fe589d3b0102e454bb2f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=a3a2dab7fdfa133fd088b886bd335cc6a7215af9810d3206c300165ca84209d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=661b5f6b29271d733e081fc016d4828ffcb3fdc4a5b96acc75bd6420c68cce01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=139ff782454099f0ac70c7db2acce9fd72960e1ba83dcf0e5566de4fe35596a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=a4cf2440f8289e3e1eb0a92aed564aeefd367045562678ca1a3402666edaf617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=30d51874df479f8d2c4547b30c732a20ca3c264d15e1b14abcf45396a822d8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=ecc6e477a068af1821cc22b4fc6dbf9e4bed713ac828b952de13164ab22bd676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=be1aeffde7930b40a62c7837b26da1828a58062a422e5122712047c1e35a3f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=7002cd90cf93bd5f5c2919444a67e3e44e9868ccdfdedb979e2068688efd6d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=17f73312e734f0aae5e7e470ec9b7eb6bfc12950769930f3534b62271697c75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX263DKO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCc1OqSv55%2FVKjL8u0flMhAhMXaTqtZFvvpxo5TsFUYCwIhAOdYvEqIGnc7TWV%2FBzbmwDMBY7UPS0f0EO3UrVNHPORYKv8DCHAQABoMNjM3NDIzMTgzODA1IgwOccUBgTMC5eVtY7Iq3AMHlWGOlW%2BG1R80vvFXilHzB8g7a%2BJP%2FPPkKDdDxFXScH%2B36Y%2BLohaV6DzXxk0ewa99y30DKBkCYzafHNrEwrMygdg8NI7iorqblIjmlQAaQrXLJI0BqKIYDAWJzh%2F3XNkn8sc%2FwVPJoLGpO3Wc5xe0tlFSqj4lIjkNQAQO9JuMt3lWbEMrrDo9xkSkWULz1Vf%2BM09RdfaeZupekgQjqGKFh0P1RKtPsmhkEwfY52ZFzgdpXC%2FTLQq0tu17YK8hL4hagjN%2FTzlrWZuSxKX7x5pJ%2Bi24M%2FB1gZec60TStuo%2BwF4ll7fH5dmJPCD6mJQOXMpFl8UGV0aiKb852cuEIH5ky1mSdtL%2FVRfSMmwGIk%2FA5XSrZR048odGvIO96ImlPGB3%2FaoxZlewWAv7jHXmNEqRu7901ZTWJddYujQlp5qRcokutSF0AAp9qsC53W%2FTkhodQGG6E2WM7IuWjtuypQvpcGknznFbRh5WCSfTm1AOm4G5k4IeGHCj1OIn8QK3GMYX5T%2FwHvdlW2U7htu9MgjId%2B%2FDWCCL2AhzX%2FRAL175AKV8v%2FsEjLpKMi0BGHuff%2Bt8KxQtjY7A1RE0nlGz5amwO%2FttlDz%2Fkj9DeWN85GJ%2FoGr6BuvGFNd5qUiQWjDK78vEBjqkAYD3FFElWyzgXJpm1JXcEgijyJvE4pSM64E6mkxQ0dTDCVDdPLGjPRNOXS4Is0As5tWxwd6T5lEha5ta1hQdwJt%2FRpNfAoMASaQ8dEBamb8sMS8WNmO9hZiPwpeiFN%2FDryrfAX64VXkijzaaGkS45ZgZ1E0l71L5ckv2040eNaBP6Biq93PP2E%2FeRmfXkS9RY63uVJwEnP92Sw0b0Rf%2BTvEOAn%2FX&X-Amz-Signature=15b668c583755e3b3a647ddcaa6898a9963c6051919a3eab929ff244a353fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ4KDYKT%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAYykys%2B9yX0XCYI5CEc4UkfSLizdWQDID8EwX6iwic2AiEA8oCKf4IrQHMwH4uTOiNKOmPF3XhsOLCIoQJhKTsw2KUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIfU1iO9eTpfmdIL3yrcA2kqWgnkK1%2BGhk%2BUdfUblLhQMvbzRGwC97up%2BfOOyeDaOOkgkohbAiuIJdYGBGCYjHsNYfzUUC6OmAz5eirdP2HH%2Fb7loOgH4515ehTok1OJ20ev0TeCmyyvO9zIKTGiD6%2BgGEgps8fPigelxkcc3RgkQFJmRFITNNMNu79dn6f6m2eXt7rXSywoqPXDFwXM%2BcH1%2BHjD1tt86VkZrClyk%2F71xIdlzh%2B2npgWYStrDq2WmmiNPNIDvQ%2Fw58%2BUW55aNoh1uO7yVP%2F8P0nxWbPCRbtIvzjFoHJCTdG24rEnXDVEFrZ9mDe9Ax3vMbsNl08Wm25Tp%2BtxgXv%2F15%2FrNEidMqpeeoLjnySqr7UHdAvhkRX9iFTOvHp%2BP6ZdMeXOfAiCaK08oPuKFKn0W91jbDtxoXqU9jbhpJJI%2B8Y%2BeG8u2E23PjD60y5lvX564VLagosdcDGrMjREd9eVYLZFk32pSKsYIej9KUNGR4WAFStaEBJkjE%2BC3WwDkdJRM8X7US%2BQ5egNnclydGpAJh5FOw9pdSdZe26oIukBR0CQfShl5t7V%2Bt0UZ%2FGjVeb0ZHDZmAnzJ3KZ3zOsyhqR6cb1euJLkBw%2Bo%2FJJdprg4EIynp%2BnIz08520VgqK7vnJ%2BrQpFMObwy8QGOqUB5GjqHtFPfo5SUqvMONye645I2hA5iHuA7y0HCoK0PZ%2F83%2BnkMNSoUkQPP78mNn3lKnJFGef%2BbQ6vXC529VefsXsKk9Bafhad00b6IJE0y8cdXuzzdnHGCWw08TdsFb4ACE8BuGhdKwljXbsg5ZEqJJcdPy6Go%2FES%2Fr6c9jwZG823cITR37v0PYEHUVh3%2B5ZqmDLsfMK8rAjQUxfcJVY66JoGjVj1&X-Amz-Signature=98081e49c34cfb309eebf3a89b70d3783f957cbdb829f1ffdb3de9a99a58a3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NXJKV7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHDleNvGENCscfmRdULe2YYAfiojNnL90KxiwJXVucqNAiEAgkNAgNFrsMt9WB8TMz1uoReMYiN169bkAyw86eNudNwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLiOj%2BGFYXtszHvXRyrcAyGaRIZw2cyYtcY5vKBHgkNic7ozQoc1JKHXcFSvg%2Fpm%2Fi%2B0%2FMz0ft7eH19KrmZC%2FSlwpH1hh5OZVlaM3dX%2B8g%2Bu5FgbYrBgPCVAiP%2FCCTaMy4UeZEQFQd5uJynVD2acj7dyGu20mPWJFjjtfg496bLeuGIS6oAOqoZ7zMQI61oaKtOksuW8Udw8xW1c0TWopEclPNSJZbsZANuk52w4IwcJ646wMN9qxh74DoTgdDKotu1QqB6fPoR3HGGk%2F6daONoHCA420usEK9KFbkZgeHtAaN6AuDdGkwTNFLtbudTQvwFN4xfos7XmlXQ8%2BM8vvL2qzdZMpi5dGm6i3fsbYH7DT8VaY5iqA72bSRFRHPxtMlKyiIJlHUEYZgv5aGlJQkQfK72yvb03LhpkXlG1OrdbPoi4Yrh8v3UoK%2BIUIfhh0QzP%2BTpaQUNq0Q41uLkhQtUdgOK4y7u94X%2FpxahLWmGnocJ%2F7sgC%2F3Iab8fAb8JI1SOhK7O3mOZXOfqSIDIs9feU1G445hXNjyVabxBQVvDlEhGjBF9JV8A8f0cSoKdrDGzm2jjv%2BHspC6RrQTIWr9wn91zCYAhYng%2B589iqqWRuf7Z1SdAiu2SJ60gpPTPFnLzg0wU6VoCC0DJqMO%2Fwy8QGOqUBpmgGs%2Fmx6mWjSqxiwhIUklCRlHORjVInpKX%2BWz0NowkDR7sVeOvYcHW6T5auc%2BZpnz%2B6wfETYx4SM0eDwRUHNm64IXguhEn%2BcELWG2gYKBV4jLd0ZlL6Fl7tp0W0BB7peAAECgggadmfl6VMD5UW6AEW39jmeRYSOWlsdBkXMAMDrEBRjNl253uFuAxOcrz9NIr1Yonjib7MXC1%2BRU%2FxsdxqCLyf&X-Amz-Signature=6211ceafb1a93007eb97f75042526fccfd496d5760ab4054174b8efb72f320c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=786ecd6ac6d3477436b596c93205dcae9055dee58ee952b4f08a189afb08302b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7SY7TNG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICdqKSP%2BUE5UXTkr4PmC4wHX%2Fud1Y3TEC5pgEjSzj1mwAiEA5D4u2XIE4o6om5MVJ9zTwn1avq6Z5x2%2BN6FUBvccKgUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJvVG%2B5ye7mUvIdDlCrcAxka4eeUAIYxLdoBceiZoZW2qZWAEe%2Fnkf2QzYZIymQuGq%2B6%2BkCwTPHisynGHAmQYQ0Dbb%2FVOzrt4ctyOp%2FqZvXZAROF%2F2RBS18gIiQLaY%2By30P9K%2FxN8WDkU2eyiuar6RHEO660C0Fi6WxRFGf36QaSZXxRkED7ZnHP%2FuiUr%2BqlyJzo%2Bf2Tz6YMDkPihs6cSv2zs7Wem5mK9%2FwtJyQOBLDzrWC9PPyrixylv3S3VIRfDNYllIZvVOVZuCpwsytye2z1BmFmSPcCfWBdCQ%2Bg%2BOhKEOzVkY47DTLznRm8J5WBaUOFU8h2p5JRUruJjiVS9gbT5YdcGxFNTDo4S%2BmbU97XQuJYShOV1TZlv%2FaMFMS6ysy80NWAZfbEatgJ%2BXUTljonbpVkSgO7oEreMDVWye%2FvR4gai4jlpSocf4t0EeuVzOmVmtS83y9h9yqDxf34m2VgjYnUs86xQDs8hDoH1ZonXMgDJzWCl%2BjCgmpDd7k%2Fenj661QOfoKLOKDy%2Bvjl0y%2Frmg1py1b3OzmI85mS%2FVeeQ0fGgwdEZcuxPrQH6sfERBZxin4QooNSJxNURkjGQyc9oEWwiHW6idqq7Qkt%2BqtlAmOgAM05medw5%2B0ECXEROpzs8%2Fpsoh8xH%2BbEMNfvy8QGOqUBRTjtSreELRTCofbaOeF4K7bwWsCrJkkb5ITEuJijKQAQygr%2B4xZZrYgbKjzFH2fOXEXPdHVq5WYyVvq6yIT4V0oVyYPqRtPUwE6S44YsrPjJG9gy7MchsXglAH5aoNnmnCNl22k3O1Apxnj4sKG5ve6K5lD5xaOxwSX01XPHRJhL0cL%2FJpAPpq%2FphibDrxS7bh2ZQDKy9qpWMPLEa2LfYcIK3szT&X-Amz-Signature=78fa09d79d0fcd9491ac4415e1ef19194db2cbc722af45baddc9586d0379e568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=c7440c000b84c17a2c501c99b94660a9239e7bfb094630621e3a3ca3d0822f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PCDUTX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIGIuyxoLkonPNvibE6%2BppwmcZkNlpWfxjesYxlb0VDOYAiAn%2FeKrnn%2BI9iRDFPE9knVC%2BbVPCrdCgM%2FRfshMM2wthir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMs17vuBssg6RNV8geKtwDwiElSNF9pQQvolWFFDEbmbWmPTIHtvyudsN9GS5IhbDqMp7IHLy72xObzp%2FdWd8pui6MlGQyu8qIaqi5WLq%2Byp1sThDJbhHU1lxi5sodg8V9RoCVaJIhKXNMHbfM3h4FemHfgBP5LXhu%2FtQJvcFnhFERjp5V0G9Lrbl8DVzPk3z5rtXKaqKnLZLywSsjtg%2BWi8dJlc3%2F1tmjIUyB3OzZBozX56%2Ba10Rhg6iYanL8WcP53xxWsXIKEdX%2BDRc2tFQnqyBGfaOivWZwBEm70X2U5Os0IkMytdbFfzZxQKoZCzeiOAWpwBquGG68ETsR0gw6wZLuWFq6ZvueReUz8vRrzWRAC22wPSca90qseTul1ZCa%2F83KpRgUDFdWB5zILhm4%2F6T07H2AEkbO50N8Xsf45mKhpBdnYpKMUbyGs%2B5oOxjrD9oYIiPSWdNpmRlYdb6zznTdJ%2B3R%2FPukhLV0BiNmUB4AaoCXqoepeFrKAw%2Fn3ldUqcPIs1J9llzKenmjMxDFFpZ03BE8KoQz4N1%2FQaS41VABDxAqpMSvnsfW5FmHPBufx8AABWbnHNrLLnZEwVgI2SB9%2FTW2MxxPryqQ02BcnPsokXrjh587pzztRedP3gQx0kE0QpcMxPlzJfgwz%2FDLxAY6pgG996mcAla1b68xJ9V4Hopk1uj2xsdWf89%2BEk8g9B4VssEbNlh%2B6ZaHtak6zvR62H3rq7GfbqNJTVGoOw4QXFyGqvmiRrpE2C4iWP3ErxBL0UI4UIwYe%2BfRvE6S6jsHwlNIipyErhFYCOylBTdsJBgKpE0tD2oVUa2NCnGk9wjPxmbcL4lMCssQxvpO3JCB9IKZ%2BPQnN95guUHDZumH3GOF8SqHa4aI&X-Amz-Signature=fe16806a82db535077ec546de3306688f071272ef95cfcb4a4ff4ed7b18685c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=0f0de175912c0690d94398b2bbd782a91f7ed1b9c62091b3582e98143587ecb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YAT2DX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDTLY3FF2KrqonBwffMbRbnVzK2t7g9H38dA9jiZ0gQYAIhAN%2FTdGJXKPAe3mIqrTJu%2BULjjTWuqTkLFLqrlILJivVsKv8DCHAQABoMNjM3NDIzMTgzODA1IgwpWWY2%2Fskw7xUFwkIq3ANTR91hQSmOGPjGvnyi1O1nu%2FjfZeSaTk5WCC6H8A%2Fuqar0b34KiFwwyQ1MVMlIjsMOjQup%2FA7b9dGFZIq8S1EDNSLUHrQN%2F1LBE3zm2z3tBmcnBWYRxpRyOVKHsGDOyY89xgZRJET%2BHvOMVisOef%2FOHFAbFgdME1z0G8NqnJ6Wk93lx%2F2u4u9TBoSsr2ui03sTciBBdfjT8VNFQz0K1nJ1AzAOsLJYwcN6v8Vep92w12iQuB4RO%2BnCcQlHcGZ7FCeVEMpDgwqiIRPNDyrwor9beIgiIFV2hHFt5qi1F9Ox1P3N9xAoysERIVPUGegbKkf%2BvTg9vBtYnDvpIGufCvlTKjqivWCjmbmnKaTl6LbWJWeqMO3WTbIMIPsM5kfnZnxoAMZWL0zWmv0oJbAUqQzPL4Yq0FkEOms8rt53bFMkBplS4H4cW1jg6UZBPJzJDsRPMB2BrLbWGWt%2F27t%2BD6Pe6gbCkEZ2%2FMr22IGkr2nCvDqXD%2F28fpbnbyJMQLS1QnQ3H6sUh%2BpNdTBPGrBJ8sOOYpj4h95LrxFFQsXcbJw2MXpFr1il956vVh6xPoUlBty%2FM5Ki6m%2FmfcwZKPt3yarCgnxZ3%2B%2BrTRqr8%2FJa5MV3tsl899Zi3jCEonFFDzDH8MvEBjqkAYBo6tGeG6ApVpqlsvZaWj0QT0bCwTCTDaxkkV%2BosCgXSSFZULn%2FOz%2BImuedJv%2Bqk20sgBSe8zQ32zjyziT2gm%2FXZtd0TkBp%2Fu%2F8psExirz%2F%2BD4rUG97GH3PqwLvMmIvYsHs1VcgMuRt0CxffLbzKs03RLJEhFkqN4pttVPV3U7g%2BWFIU%2B9899kQbLWCGwSvQZhcvQ%2BQgHcrr5UmcSFClNaY%2BLfY&X-Amz-Signature=dfaf2a671b1f2a5ad574d71d0edb5ea875f4a8346555cea2e19f69c30e653700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=5f1135108404204b447b9f558472c72b1d07e5473f563040158b14e7dad3fb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEGC6CP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIGEEtBIilkGA385hYb81XppOthfaJ9WY2y1LGHTZ5QO6AiEA29qe%2BdABLHYlqxWoTKx7%2BA0tns2dyM84TNIY9l0A940q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPa6ckkYB0dD0XZe0ircAzwEau8nbFbPKIyrHlNiHd63Qp%2FjwxLC5u%2FlgXg6tlhCA%2FVAmAtaGWV6fdAO3vjcLyKyGYv4%2FOr8SVwoEP81HMwi6eXrYa0xWr0n2OrWCS83lLhi5JeufdtrWDQWw8A4US8BIfBmc7ovHv%2BnbjIYSot7ndagrXMiCY1uBES%2B6uTqU2LJacETYEF0Lb16fTemMRr%2BA%2BXDPYiUOtK7m2AS0iK%2B%2F3n2kcY781sqmBU3ry66m5Gp5gezo5yDQWFkhzzvzEh%2FrH1y%2FfbCILTb7O6n%2BoOBhMmQ2%2Faf5ACj9iMEWPhr4rEAhcW2DbiKVJfxVQu0xVEdz25x9j%2B019NfgxxU7aZtUU8E1n0aIj3ZBwPfILJkkPm8tVtJhMHE8DhePUChDSBWv4uGNwInqp5upizyCRLBH4w5Ww3Dr5dKtbFov8Ii2e2I7Clij7StnPoMpa9OJlZ6bLRFSdrMlBp1XHMOWmMU11sfsN%2FFTwKmz7AtxIP70FrQ5liXE23bhYKzEpSwPb05%2FhJstBThUcL5m7InalB4CWX0D24R57TGunf6T%2B%2BvmO8LOxce1xR7wyTR6GQX4%2BApzY4wMHHIJgl%2FnspaS3k3EUSlYIWo0YRQQNkcfusx%2BLp2%2FJWV5u6ApGSsMO3vy8QGOqUB%2Bkgo3ZnYs5yNU05IA01BKAAcQGApu%2Fadh6v6x2QyuRQQZQ0vgWeps5UslSdJI6lrTTCd3Li0wglSlpucs27ADzK6tZWGwZDhsq%2FarBy5DwMHewkrutmbvOOy53q7n2escZC954d7uaFt58RLUO2TFbkF9UuM3iyApLtE0NzKV%2F90LihofSG2RjjN8ne7byrhUk02K3j9rmWRnKBBPUGnnLlktQqE&X-Amz-Signature=d85403e3e7c444f91224f7c111da4a5a3e4cce4ce1c18c5d61805e44a3adafa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYYL2EKI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIG3xZxQerdRZ8ydW%2Bx9l8zG4L4j4FihG11ht38xwqJGJAiEA%2Bs2wp%2B%2BAroqms1VNRB2dGPXAJ%2FUjLEeolzKSoXLi3N8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCg%2B4GxloYwTsDlqpyrcAxd8QobuDyHxNiPH3yaP7B4V3MsMakPEpTk5hf3FrM8EVTjRnrl%2FRkNVCNsP2EPi5R7TjEJHz8HeIrvJBkbUWnMDPnLbu7h5m5pVWyGXIrPkZ7fx0oSzbQTUxqPXbXJYMIMYpjycUjMakUNy9Gec2S7JetHF%2FaKvDNm%2F%2FY5EsB5USBQ7qRwXYonbqGKFycAM9qr3EK9s53htcFNYLwrwEFPi1jfIcpZvG302e5OJs3AGLvmAFU%2FmqCCKp%2BEbmZgBZRGtvwGBOVKueFPxE%2BDkC9ayi9kN3LeQ1fe8HNzIeE%2FsZcvgCkXL4BaZckadRd9vXQZ2pUgyClG0O%2Ft31DEYUiW5BFyPigNIONrHjNJTvgUF6x1WzUhxpV9VXQyFWQH7vyKHDXCSzSFEKlQ%2FX%2Fy%2FNvhuf64K3wiBT0Y%2BHqg9ozg7AQGIVaQdn3QrzsrX9lwgi8oE%2BrGjGZk%2F144SPpdzkcFZPY8VrcHvIJQqIIv3SZPfCLwtPL4%2FRTDc21WxSEp99EGbU4O9WhG%2BzearwpTFtGGMi3LqCXWR9rL4uDwr8%2BernOTFr%2FRBoEOJDMqHreUCMSWCnKwZq%2F4xN6ZB8G%2ByXHA2yTnNWFJJvRaz%2FeY5iUwvilpnxED7xqIbglMAMN7wy8QGOqUB1MfTFagzUHTyo7%2BbYYUkgV99HVLi%2BUqlALzQb62C8cIl39rcjL22o%2F9BDd2tftk0q%2F5bnUPDzpRzTvp0F0tgAi6u6fJtEO2QaWSJotsgj5KtQ8IVYVPMJCcvc%2BMF12qAmnxoAmY34Lk6Q7F96AIcumiXE5%2Bf8VY1piPxnfPQasYKnX0v1eSYk55NvvJzJ6seClQizYRvreHKLXd2JVyOOTvH5HcW&X-Amz-Signature=a5ea838570e4e84589ff0b16151ac6429b9f07a41db209674d6d8d8e1fc3fad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBELS3VQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIBKyQWDdrhAtivZaDQltQEOikFVWFeWXSqu1xjzEigPXAiEAptfbuP3JMXqbAlQR87uNQBChrS%2F3jlbFj%2F9Ypq5IEBcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDG3352T2yX%2FlpeEmeyrcA8v%2FWdGNUeGF2TaNMXSO2ify8wPmDsgcAQ1%2BLwROZMNu4dDGoqZkQIkfNzrm7Btz5CnM5lkY3CCpnLnF9s7AIKnTdXDkP%2BB%2BZsQglhjY8ujtHrE6PTfRAI3V1JqFSd2XlqwgfirwWLb%2FwbvMR2pz3Ak3FC%2F%2Bk2vpW4xxlkoeXL9KfPr8uwupMfgYnxaiicEgM8LfZlYbSyAI5ImxD4Fd3KgsdCrV9XuZ6B8kHXXKCbKyMn2UvcnI6YgvAi%2FghXX7FgXvjJ0VouCGlNEXxaQg71OyGRgzFJ%2F7O705GqwOgoQsoKTEWl4dK3HviCr6%2BwFcD5BvO6H8czblhRb02fYrbvV87uy56lHHK2dVKu8sRLZhuiho3Fg6ZKtH3fP6C0JT3SfK6sGoU59cmxCY0NTzvujg0Jzn2T5yKB2W3oJKf%2Bv9IOWoHJjBUc175GWUkJkkw5mxD2eh7etb0s8BVou7TL9P9wun3d7mB7u0ePYV%2BQEw%2BkY0T8XOyKLPTex5giUKQ0GUmPRGIkvOGk7UO4RtuIrz8xY93iztBHxu4VZ7uJ4SxjVOXEm3I3g%2B21IQDUyp7i8XKyThVFApUJU7vy%2BVkmlt8vi2LhdyyMz%2BDBgjV6MOXrU7MStLm1IjP4q2MPvvy8QGOqUBgsCynMaZvFZDkDeOaLkYYfUWqNre7KqABEZJ%2FmlfwYzTXlOeL2ELBwYAvkYV0gH9Jb39LscsPpUPvY5xRs%2BjqJa416naQ%2BLeKf%2FSKkY9MXnj8a1JEhfsPFpyDPVPso3ZHz8jQH5VY2D9UKZPHbVMtB9moy8Apz8pCSj%2F4TJk1fgQTvOmR865w3Oyzo%2B%2BobjUjMuLKfaUo8xpOV9yictlJFbYpCRk&X-Amz-Signature=8f3702f3d46b7e4bcf57ca32026f0fa19c32d8c55bb9bf227da3273cd3fbfc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRCGHPZG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC0XZkKksoFwf9zeCNJAIglUizsPprvNZPKv7UqzPzkVwIgPtXb%2B1QCTvY3YOBWo86u2Iy%2BPpoxCRaN42AauxOQqvcq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI2J8Qu5DiP8soIsaircA2O2NvwLedV6m%2BtEoqiz1ESg%2FoETYiLCUhK%2F1vaBLQQOqKzD70bGvBX%2Be3uO%2FGGv8o8FU7SQJiT5HTvlu8crB%2FT0Ue3Ub363rdQX%2FIj1ElVmjbSs%2ByIeNcAxp7mu3OrAO5ob5y%2FgAbuojto8EataoZa0eaX9ii6CPZZWgfl9gwPaAj%2BqpmhsI5UAQNkfmiY25D2bnYY71hE40tf0tvcWGpDfxhPGJ0IiFjvzcLpewyc8TT4uRjomgPi2wZzs5%2FbPUcSA3uhJGT2WoZfB0TELnFgbhFzk8L6ucwijnx7ZgYi8kwIFOcSx5eJ320OyxUNhJ17aGZAoCPpKlnS3L99Ff2WWMbCtIWWxqkkEvAtH%2FIwWNy7kLfmbE7s%2BOp8CgkjRw%2BO4LvGPX5t%2BfQrqNCl5W9IF%2F4CbCjHQJKCCBwXwNgiiGKi8EprHIvH0c7vdgkLdcxaKhA%2BOfyCOrhq6CMEItDIofkSJKZ0USgyMkk%2BQYv3WXD4tgBiIbBMiXGDvotuu2CqWWeztsjD%2B%2BwoWuf%2BsN2daN78hKHbMke%2FUxwpU6DvmyheaXs8nXWodNuE1dAGuDtGRCbSsKMc8sVnbt%2F%2FKaucvV4hhS2LnfiYrB4VxAx1dycCuI5ZpNMnHyxpxMMnvy8QGOqUBdzQ0KODoh%2BSz2xrjUZZu3JkXuQLTqE82UjLfuQ1cirZ3L30z3AWM2Qg4kwXbGj0T0lbcqqySsekjOGalGocg7yyl10jal9FJ3LBXLryud14YkhecuUTDXW3cg9Bx5Dd1nXy0ExAdDi5VDE6pNjoT8NOfGF1pPLfhwb%2BP%2Faj68ZtMgfd49ukh2Xu48jzl%2BDDoImw02WZkbIhfGNAE1r9rOsC2Ty8A&X-Amz-Signature=22cd7ac33588eb1583cc37eda7674b5c461c14453f92c4bdaa2fa6c45c98ad92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSUNANNQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBwzVEu4MX6dfBpV91FS6SJSbDtgdHK4H9ut1mMCsdPAAiBmez%2B%2BtMMJdx%2BqCIP0QmIyhlRX8qyR1wJeby5kxOgd7Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgcYE75dxqocNz5C0KtwD%2FAGIx1XrJEvIep4ajSko3pNbaEMG2VaA59elgPO7tf37qk1R7dLRqQMl5kZ7fJEhWqcRTYajE4y6RzomeEc8QETFSZa86ugongMyO1CLzfXaQMXhlFrveZgLSXwbrp%2BzR7RFAzQJoC%2F9awlX4xwdQqm7v73ZzKwPwIt%2Fz1bHHQqqu8Dl9%2FzT7myX44Vljp2eJc1A2bFNKlJ0DEPvytJpYfWuxLXY2r5t6dQV7Ck0b5BkmfB5vuyP93EySy1V19UHtyRl9GWaLWAVjIf9XbreTyY9zgWizfNKMPaCj8lg6h9xvRZEK5iYky%2B94UPTDR%2Fde22diKiQF7dCE9J41GjoXJQFZFzrVf5g9zfX0mOUsfFmgBHYcs3g8hLCIpC96IIQROcMhnJ7CA7k7YH41iWnaTtun4MO8coIrSXYLTnugV8KfmZkpBN1%2B0J316EyLDpTD4fD9Vebwn05LgGSnvqKwt8P5IKIALcv3cs3bvagX0eKaz1SusL2BSPk%2Bn%2FSVSBKaujHlBpk9PPH9LW9GRV%2Blj6KxMlJacgc2kZzhIMgPiWtUTIAGGxdiWDz1vODBa2bdbZttXqirPEVMHFQq2zunKbgS%2BGm92aD0xIM9DrIqxzNdJ2Ez3DRMEAdu38w1PDLxAY6pgGUH0jn%2FOIIOXS6dsFUnvYAyDqtUQOQ0x0KrHTvDeMFSLccgC4xTC6KZT0yfMptBe3gI7uziBgcZ9AI18jM%2B%2FVGhtNoBG3ymnVW6oMRN5PmSMDIVpn3rJzoip8meqBI3Wkb8jT4Omj%2Fl0u%2FNd6fbU7XXNZCxtDqOwcDKQwF2ehGtSjmhRpTTP%2BKc7L0LD51FKSz%2FwlKqIVHvoU9BkWWk2yhdRI9M%2F7T&X-Amz-Signature=daa36679cd629ec8dfa45c111d594ce8cdd7435501d4b46b6987be5fc34e6461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=00d7dc8456b4788bda3fa074485a5c73267b06090b91eaca6795938685d35c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVC6WNO5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHC8Wn6l3Byv0WDqBBSVin0GSEM1frwYWd7wQ6tKDpL6AiBxlDtlAceLBgGHDa6jDDBtcwM5Yx4LgZF8TIZs7dnD6Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMwya%2BDbZbFsikrGvGKtwDyq1OlEBB%2BIpc1SW329Icx%2Bdrkn7zhSXJH3dHqaGqXz%2BRUajQgCpl9fEabDDuI1lqGSVprZZ6aBU4TebKlNhLMOSendEVPbdLi7igXmEbjbRefQh1W2MoQWh%2Bdo7bO8aCC7ZzcFK5WO9XAne%2FZ4ySvp1TY7VBzARuxPmHtRqNWVFvv72smvg188YG3eoYsK2Vg7eH%2Fx3Y1MAIwHcRyY78g6nzJhKDwqJWe86d46I6Pe%2BubMfnXnNsiir0R6qEezbEwi%2FcOZMCUtCPdS73oz1ZoRvJ83Y4LFvil8Dl6%2FDb4tYFkPUJ4gwHywen6jdsEj%2B7%2F%2Bmhl%2BMmxw1fQf8c16yugEeniwxGWA5xmYF05uzJI8Vl0jIHeAjO41WMrqw%2FbrvYuQg2enJIn26MgzZdg9L5MBM0mvcYKAskwTlUpUN0U%2BItbG0vvXVh4L0QZelXDDcIjVWZroYoZy1W1DrLdPHaYB9oA4JcFdYrbcp2fR6pcDm5hfN7mlCAL9g5whRBd54Z9BZxarHzuPi52hF0u3f0WtzbsDj92XwvQZBQkWFeBqN%2Fq96C5vfXHdpa45UDwzn%2BDZ7oKGnJel97deEcgLIWLKf0JhEl3cjLShUYGx2GPbr1BRxdUf9uhB%2FowPEwqPDLxAY6pgHug336paqpeXa4WjdP7HydS3hKUm6e15DLlWtp4wrg%2BYB47%2FZYzyACdnyLZZTuvyEDqfZtNnjujzKSScolnUQv38aTuw86IfY9M%2FZF2VpCE1Co%2FqV3ZLVOQxWQ2vFcGjPLQh4A8k%2Bmy5gXzc03VAY7d62450x%2F3flawKYlDL5jFHB08OiGYnVN%2BgT%2BQc1SvIfWFf9O3vka%2BVcb9JhW74XcGh%2B64sqp&X-Amz-Signature=7e453be0c05a43e6bea984335b423bac98ebf58ec063821c6f5e1ace12aec96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=83f8249c6b693862767a5c438178d093b5cd65d5ffaee33a72dc1e6f887d9512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=e7858acbe1589a536c340b3a12d871ebf130e5ca0c3e37d404ed2ff4ce5eb9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=3eda4cacb61a6ef8f3b061086d3adfaa219e851f5e5bcae45d6df5e1ed5894df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=e5904def951259d68fc7c3b524049eb71b1a6635b0e286831416ac8230c072b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=d5b7cde6dad7bf6427b6f94a5765b7e00b7bfc25f6867c1536c47a2b88c02d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=b9faf35a92ff7a253544c3c1bb826050820816f807462f620f2f939862bbc11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=fdcc74dc71925987198425acc48377e5b93d6757d03e19f938755955af191695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=e9cf42c9fdcc0af8ffe3f7771c306621b4e534024ceb63a4919d9698c74cc630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=ed6c11609d5f67e050f9a7debc58e16e192d069dafab8f96d76570830fdd9103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFAHQKAJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDgSijFXNlGOaKkLV2WHigSAwEXUDTGjXknHvCTwfBykwIgPEemnIAJFfbmpJGLtyj5kwmWhRL0PGKr9UTZ4Yw2qNUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIJDTTUEmR8k4ELdYCrcA59jR7GK0CS0aWH%2FoIKzCOx0taVJhgn%2B3JaMFVYMNjKTB31skZb9Fb%2F6JPW9vOaY8JQX4S1QOfI6iTMKJvkwYWWUYFZ4Z5ezAP176yp0Yoh4PeR5xFpmbIrEjSG%2FphEGvoyt71ymO%2Fc%2BYw%2FdB73ZplR68czWRkvQCBytbQGhdHfuQzBTze9LiuJFKhjkjHnXapdC4z130qoIlFqcwD3cZIWtF%2F2uGn0ktOH8dewDMOLsn0wW3I5MEL%2BLoZKcB5pfVgb%2Ff%2BuopIjoMzLku6zd0WEsZHzNKj83xXiXt0Ppuic8vcJglbhb%2B7nJlRYg1Dt0Kfkhe9XlntQHF20gDh6RUnSGBcULUmJGHH5p1XTxMBRrtT7xGd%2B42MQkD7sMlO9%2B6JDYhEpMHXC2MxmMHTGxROnqiS1clJaWolKcV%2Bs%2FUEDWb05Bwoi0%2BDxDHUkF8xMQeQNllzDo1nz%2FbbYl75UXzJlDSWaczvHRAewseHgNs9OCDByf4pxijeyWIG3cSHhH2NB6MhUBNlnCXmM1gqt0Hg0hJUMUCoxZ46NnqAvpJhLEyqeFpv6uZq7yAqviwJBCzO522kryrIiiDHrItAW8UD%2FUGkuYuhZ8j%2BKqs415WkGxO2P9SDoTJhf6nE72MMbwy8QGOqUBeI5Gwf%2FLADU8jG1%2FyraUlgA01OrJqGov%2BhHYiZoUYrtAVEC1dwvASJV6QwWz5KHgb8xacAc4In8UjPhQmMe4tFc2IdZFqKCthk1h2JIb2d66DQtuad9wgrtIgTKGbNErWfTU3USBqzU%2BwkOyhZCJ6vbp25aXbAwJf3JZc3kXgu%2BHmWvxPQG%2FSMqhreGgGACUQsfmcE77I7qK7gU9Iy%2BBXmNU9Ouj&X-Amz-Signature=3a1c08e1e35fe9eb4dcb45480c545a2ff1760c68505f518cb2eda2bf86553224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
