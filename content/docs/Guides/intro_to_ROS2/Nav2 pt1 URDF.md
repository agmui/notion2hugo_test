---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=a248c1465df90bbaa9e43683384ada1fc50b46713a3a127d55e4525979697074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=0754931a799c1060e4bbf6fe508dd3a612f360c1988a6877a10eef7ad41501af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=ddeba4c0e189bfe58a5c3437a4bf037cf332cbf79b227e5c9132b47071452e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=95a7bf0a1d2ed192ff76723c5e21eb9b45461ba03543bc3fe5d678d4ea63e043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=7eb02883e6547f6a9b95d3b61ba7bc48030ab722838384384589065c866f3130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=e19f17486ffee11b11f41b1c85dfa77c5cb96140bf1813464ccec9af232d6b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=51eb713eeebd21f9e9b8c85332589ab71e3aa6a155b7cd829acd83d1bf98badd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=1d307a30993be9268c64dbee9c7a8c60d1f84967007110ce967d5a81ba2e5216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=e0808dbe76b6c6941f42ed73b72575219d714cffa67c5b40689b0858683d2465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=c8753fe79ef5a2026694f1e0bd8356cc42276a9ba28672bfa4e4e6856fe4ce4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=3edae1cfe3936afb9630569ceaf1fafe709f0b6d79750c83693faaa16fdabd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=0781a3853b2eb27570e52e6bebf4c4d07547838e273e5e3325710b32bd2e9d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=17b94fdb35af2e0476d1f1028a4563f7a28938498295c2ab35fd1accb57f8a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCG7BLKE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDiHzZv0uF7S0zt9pVIFT%2BKC97%2B9DTaST2Z%2Fl4HDzMUgQIhAOTqW8aNws5dFHKSIMZMVwGKZMtJUVznsxrQJrMxv4FEKv8DCCsQABoMNjM3NDIzMTgzODA1IgwaIJ%2FQr9f54Q2dsOwq3APIph0OgWDhVq406uJT7nEICBtAUZohvonW4UGABhAr2rlRZjxtfHtgac1d72mevQ6o%2FJqJuhk0mFz9tPm44KksyMGD3q5zvvFhvPPQp3nRTu8GE9ChNyP3UyQ03wAxTOq795KcWkSoZl6z%2BRAoG32FQd8C5%2BBgGWLaYEWLIofHKWFQz4E5E3DStanZj9WLq%2BcchXUQNXFFbbo7HaJ%2FcA6OHghNAH0O69sxvCjK7l3kSrc2CjAnScKx0H82Q38lbHliw78KYSAsC4EWCm4m1cfQCgF5CoymCdCIxT30r6ZyzBNAoJcbZUy8JlDKb3G%2BYPqESBinQ1jcsAmGPc%2BlmF3xDtzC%2BEiFVeapG%2F4udsuKhY9MtceAAJYEkSID2dJE0IbnTAVDssPsBE1DkpRXQxVmgToeUzvXfO%2FrBF73TLhzG%2B1OFTT%2FSRXK0yTH0VgDvVUCz4gC0xXbCxeC%2B46Ltv8rgFw8%2BvzDMaAMkzWcOPRwlxVQ34%2FvDj7AdMIVtn0xWumPFY1Ntd1tiAiC43%2FgDqM2f%2FdE0K9ZvYk0ltoeKdcju1MermqeATEA9nPgfRxk%2Bi88Sg%2BGjdwEfUCow8SoekEcvXiwW9DPtHyXFFm0WHd%2FVjPzmWbfV3VjyqMVwDDVj4jEBjqkAUDkCC0LXctYMhihhpnN0ZI%2BuFW4Jt6j1KZ7MXcw3DSm9XWlFJtR6hvYVjwvIm%2FNWamDCkC2FyESslKed4wQmUyo5aneIDOIdGjKWgJfmoS2D3kAFkiv4OI6PcUe9Rpd1RAdxsVgoY8Pru1ggH7Mpr5giLu%2FW5T4z4xwWn6Z4UGZNouF52TnZDefYMuwHJPGJW3jDkMKsqYoZu5EjJMnFJGo7sr2&X-Amz-Signature=dc97c663f5d5a96eda9680d077d12a77b8440b480a170c359d1a6a2cf2ce5c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W554QPOY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnC3qevq%2FF4WTNVNypHlQzxxJXVsdSGVgExOT4FdyAhQIgI4nJCElGDsmgl6k6YaQTO5%2B%2BimYa9cgwZ2sNz0sat9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDChG%2B3LYct3eg8lqcSrcA6P2A%2FRtwwgseyqo97BuS81NefRKqcKeYRXKMbtreZ4c1Rr1b0v7cEGkzOLztRb9HA%2FQ%2Baps4QQQDTZbKJY6LIzBwtzhHJhxh0GUZR5ZNIkzOLTJ5d%2FekwWbNi0%2FO6hQDXD%2Bj0rTLxR9WV5%2FSdqzr25ZWJYVh7TKNACM3A1Leto6H%2F5IbxsukOA1MqwM27ZlentFXb0yZrHmV1Rip9%2B97u3NJ%2F%2FBnm0b2%2B36PxhC5aC8oac91ABb0tl%2FW4z6xXZX5ngRB2PD2MMJoEFsFfMHnqmLjH8fmrHsl3uO7Op2Tch8eZlimtaBBwyPhbmMYQBAC6YHkdUhUJiH8vZHvk3vabkA5HSUnxpfn7WhbqwSJftG8BSdt4IODXGjvqdL37mj9iROzY7ZpX%2FzRaGFhOO0%2F5WOiZGRIJVeQcqvIWnBFxrs5Ab3rIgsXrpmcQKHZb953ZJKec8ztS4BQOPS3SRs%2FMYtp8rOc2nFr1BPoVOwZdKAlywXe1z%2Bp3FLcO7r2zW7Yqb%2BBU3nks%2FnFejsgca9xjkBx9PO4li4pKID%2FyFBhEljjl6ghASOLz16Gg7RFK6jG2U0iHDKzwRwO%2FGKDgXhc4evcXjX48M4JWKJ16Rmo3qvaYXd8lKAohFU5P2fMNaPiMQGOqUBLX2K%2F%2FdQHXq%2Fy5NroxAQnwK%2B2nhFGxh0HkwD5R93p6ltlVFWkODZ044i%2FTTGYN0rFJxdwi6D99LTMiYv46LfC2juOtexmyhSixVhz26aJy%2FVl9SmbsSGZYA9iwV5JjACVs3ykTSSnjwjt%2F8W4CQDGObIM10OfDPol6ao78rSHho6t9hZdYwyD3L3YBe17EtzMparPlMlOFeZZRyRxFnszDMvjiic&X-Amz-Signature=5ee38d13d9a1aa67e2df11974478736c892c5218bee1239baad671a60128b7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W554QPOY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnC3qevq%2FF4WTNVNypHlQzxxJXVsdSGVgExOT4FdyAhQIgI4nJCElGDsmgl6k6YaQTO5%2B%2BimYa9cgwZ2sNz0sat9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDChG%2B3LYct3eg8lqcSrcA6P2A%2FRtwwgseyqo97BuS81NefRKqcKeYRXKMbtreZ4c1Rr1b0v7cEGkzOLztRb9HA%2FQ%2Baps4QQQDTZbKJY6LIzBwtzhHJhxh0GUZR5ZNIkzOLTJ5d%2FekwWbNi0%2FO6hQDXD%2Bj0rTLxR9WV5%2FSdqzr25ZWJYVh7TKNACM3A1Leto6H%2F5IbxsukOA1MqwM27ZlentFXb0yZrHmV1Rip9%2B97u3NJ%2F%2FBnm0b2%2B36PxhC5aC8oac91ABb0tl%2FW4z6xXZX5ngRB2PD2MMJoEFsFfMHnqmLjH8fmrHsl3uO7Op2Tch8eZlimtaBBwyPhbmMYQBAC6YHkdUhUJiH8vZHvk3vabkA5HSUnxpfn7WhbqwSJftG8BSdt4IODXGjvqdL37mj9iROzY7ZpX%2FzRaGFhOO0%2F5WOiZGRIJVeQcqvIWnBFxrs5Ab3rIgsXrpmcQKHZb953ZJKec8ztS4BQOPS3SRs%2FMYtp8rOc2nFr1BPoVOwZdKAlywXe1z%2Bp3FLcO7r2zW7Yqb%2BBU3nks%2FnFejsgca9xjkBx9PO4li4pKID%2FyFBhEljjl6ghASOLz16Gg7RFK6jG2U0iHDKzwRwO%2FGKDgXhc4evcXjX48M4JWKJ16Rmo3qvaYXd8lKAohFU5P2fMNaPiMQGOqUBLX2K%2F%2FdQHXq%2Fy5NroxAQnwK%2B2nhFGxh0HkwD5R93p6ltlVFWkODZ044i%2FTTGYN0rFJxdwi6D99LTMiYv46LfC2juOtexmyhSixVhz26aJy%2FVl9SmbsSGZYA9iwV5JjACVs3ykTSSnjwjt%2F8W4CQDGObIM10OfDPol6ao78rSHho6t9hZdYwyD3L3YBe17EtzMparPlMlOFeZZRyRxFnszDMvjiic&X-Amz-Signature=83010361f5e6191769aaafd5a222218239f1201b5c0a6f7147462afc06bc8856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W554QPOY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnC3qevq%2FF4WTNVNypHlQzxxJXVsdSGVgExOT4FdyAhQIgI4nJCElGDsmgl6k6YaQTO5%2B%2BimYa9cgwZ2sNz0sat9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDChG%2B3LYct3eg8lqcSrcA6P2A%2FRtwwgseyqo97BuS81NefRKqcKeYRXKMbtreZ4c1Rr1b0v7cEGkzOLztRb9HA%2FQ%2Baps4QQQDTZbKJY6LIzBwtzhHJhxh0GUZR5ZNIkzOLTJ5d%2FekwWbNi0%2FO6hQDXD%2Bj0rTLxR9WV5%2FSdqzr25ZWJYVh7TKNACM3A1Leto6H%2F5IbxsukOA1MqwM27ZlentFXb0yZrHmV1Rip9%2B97u3NJ%2F%2FBnm0b2%2B36PxhC5aC8oac91ABb0tl%2FW4z6xXZX5ngRB2PD2MMJoEFsFfMHnqmLjH8fmrHsl3uO7Op2Tch8eZlimtaBBwyPhbmMYQBAC6YHkdUhUJiH8vZHvk3vabkA5HSUnxpfn7WhbqwSJftG8BSdt4IODXGjvqdL37mj9iROzY7ZpX%2FzRaGFhOO0%2F5WOiZGRIJVeQcqvIWnBFxrs5Ab3rIgsXrpmcQKHZb953ZJKec8ztS4BQOPS3SRs%2FMYtp8rOc2nFr1BPoVOwZdKAlywXe1z%2Bp3FLcO7r2zW7Yqb%2BBU3nks%2FnFejsgca9xjkBx9PO4li4pKID%2FyFBhEljjl6ghASOLz16Gg7RFK6jG2U0iHDKzwRwO%2FGKDgXhc4evcXjX48M4JWKJ16Rmo3qvaYXd8lKAohFU5P2fMNaPiMQGOqUBLX2K%2F%2FdQHXq%2Fy5NroxAQnwK%2B2nhFGxh0HkwD5R93p6ltlVFWkODZ044i%2FTTGYN0rFJxdwi6D99LTMiYv46LfC2juOtexmyhSixVhz26aJy%2FVl9SmbsSGZYA9iwV5JjACVs3ykTSSnjwjt%2F8W4CQDGObIM10OfDPol6ao78rSHho6t9hZdYwyD3L3YBe17EtzMparPlMlOFeZZRyRxFnszDMvjiic&X-Amz-Signature=19d9e142d41ddc56f1664153a652fb1b709acd7f30aab2902941fd4504f9bce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W554QPOY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnC3qevq%2FF4WTNVNypHlQzxxJXVsdSGVgExOT4FdyAhQIgI4nJCElGDsmgl6k6YaQTO5%2B%2BimYa9cgwZ2sNz0sat9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDChG%2B3LYct3eg8lqcSrcA6P2A%2FRtwwgseyqo97BuS81NefRKqcKeYRXKMbtreZ4c1Rr1b0v7cEGkzOLztRb9HA%2FQ%2Baps4QQQDTZbKJY6LIzBwtzhHJhxh0GUZR5ZNIkzOLTJ5d%2FekwWbNi0%2FO6hQDXD%2Bj0rTLxR9WV5%2FSdqzr25ZWJYVh7TKNACM3A1Leto6H%2F5IbxsukOA1MqwM27ZlentFXb0yZrHmV1Rip9%2B97u3NJ%2F%2FBnm0b2%2B36PxhC5aC8oac91ABb0tl%2FW4z6xXZX5ngRB2PD2MMJoEFsFfMHnqmLjH8fmrHsl3uO7Op2Tch8eZlimtaBBwyPhbmMYQBAC6YHkdUhUJiH8vZHvk3vabkA5HSUnxpfn7WhbqwSJftG8BSdt4IODXGjvqdL37mj9iROzY7ZpX%2FzRaGFhOO0%2F5WOiZGRIJVeQcqvIWnBFxrs5Ab3rIgsXrpmcQKHZb953ZJKec8ztS4BQOPS3SRs%2FMYtp8rOc2nFr1BPoVOwZdKAlywXe1z%2Bp3FLcO7r2zW7Yqb%2BBU3nks%2FnFejsgca9xjkBx9PO4li4pKID%2FyFBhEljjl6ghASOLz16Gg7RFK6jG2U0iHDKzwRwO%2FGKDgXhc4evcXjX48M4JWKJ16Rmo3qvaYXd8lKAohFU5P2fMNaPiMQGOqUBLX2K%2F%2FdQHXq%2Fy5NroxAQnwK%2B2nhFGxh0HkwD5R93p6ltlVFWkODZ044i%2FTTGYN0rFJxdwi6D99LTMiYv46LfC2juOtexmyhSixVhz26aJy%2FVl9SmbsSGZYA9iwV5JjACVs3ykTSSnjwjt%2F8W4CQDGObIM10OfDPol6ao78rSHho6t9hZdYwyD3L3YBe17EtzMparPlMlOFeZZRyRxFnszDMvjiic&X-Amz-Signature=003e15e02950c4e05b6c0a0f4961517fb83dd394942cb65c303690fafd93ecea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W554QPOY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnC3qevq%2FF4WTNVNypHlQzxxJXVsdSGVgExOT4FdyAhQIgI4nJCElGDsmgl6k6YaQTO5%2B%2BimYa9cgwZ2sNz0sat9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDChG%2B3LYct3eg8lqcSrcA6P2A%2FRtwwgseyqo97BuS81NefRKqcKeYRXKMbtreZ4c1Rr1b0v7cEGkzOLztRb9HA%2FQ%2Baps4QQQDTZbKJY6LIzBwtzhHJhxh0GUZR5ZNIkzOLTJ5d%2FekwWbNi0%2FO6hQDXD%2Bj0rTLxR9WV5%2FSdqzr25ZWJYVh7TKNACM3A1Leto6H%2F5IbxsukOA1MqwM27ZlentFXb0yZrHmV1Rip9%2B97u3NJ%2F%2FBnm0b2%2B36PxhC5aC8oac91ABb0tl%2FW4z6xXZX5ngRB2PD2MMJoEFsFfMHnqmLjH8fmrHsl3uO7Op2Tch8eZlimtaBBwyPhbmMYQBAC6YHkdUhUJiH8vZHvk3vabkA5HSUnxpfn7WhbqwSJftG8BSdt4IODXGjvqdL37mj9iROzY7ZpX%2FzRaGFhOO0%2F5WOiZGRIJVeQcqvIWnBFxrs5Ab3rIgsXrpmcQKHZb953ZJKec8ztS4BQOPS3SRs%2FMYtp8rOc2nFr1BPoVOwZdKAlywXe1z%2Bp3FLcO7r2zW7Yqb%2BBU3nks%2FnFejsgca9xjkBx9PO4li4pKID%2FyFBhEljjl6ghASOLz16Gg7RFK6jG2U0iHDKzwRwO%2FGKDgXhc4evcXjX48M4JWKJ16Rmo3qvaYXd8lKAohFU5P2fMNaPiMQGOqUBLX2K%2F%2FdQHXq%2Fy5NroxAQnwK%2B2nhFGxh0HkwD5R93p6ltlVFWkODZ044i%2FTTGYN0rFJxdwi6D99LTMiYv46LfC2juOtexmyhSixVhz26aJy%2FVl9SmbsSGZYA9iwV5JjACVs3ykTSSnjwjt%2F8W4CQDGObIM10OfDPol6ao78rSHho6t9hZdYwyD3L3YBe17EtzMparPlMlOFeZZRyRxFnszDMvjiic&X-Amz-Signature=27eed699a047ebb561403e500714fb257143a72f0c23d10c963871ed0f731907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W554QPOY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnC3qevq%2FF4WTNVNypHlQzxxJXVsdSGVgExOT4FdyAhQIgI4nJCElGDsmgl6k6YaQTO5%2B%2BimYa9cgwZ2sNz0sat9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDChG%2B3LYct3eg8lqcSrcA6P2A%2FRtwwgseyqo97BuS81NefRKqcKeYRXKMbtreZ4c1Rr1b0v7cEGkzOLztRb9HA%2FQ%2Baps4QQQDTZbKJY6LIzBwtzhHJhxh0GUZR5ZNIkzOLTJ5d%2FekwWbNi0%2FO6hQDXD%2Bj0rTLxR9WV5%2FSdqzr25ZWJYVh7TKNACM3A1Leto6H%2F5IbxsukOA1MqwM27ZlentFXb0yZrHmV1Rip9%2B97u3NJ%2F%2FBnm0b2%2B36PxhC5aC8oac91ABb0tl%2FW4z6xXZX5ngRB2PD2MMJoEFsFfMHnqmLjH8fmrHsl3uO7Op2Tch8eZlimtaBBwyPhbmMYQBAC6YHkdUhUJiH8vZHvk3vabkA5HSUnxpfn7WhbqwSJftG8BSdt4IODXGjvqdL37mj9iROzY7ZpX%2FzRaGFhOO0%2F5WOiZGRIJVeQcqvIWnBFxrs5Ab3rIgsXrpmcQKHZb953ZJKec8ztS4BQOPS3SRs%2FMYtp8rOc2nFr1BPoVOwZdKAlywXe1z%2Bp3FLcO7r2zW7Yqb%2BBU3nks%2FnFejsgca9xjkBx9PO4li4pKID%2FyFBhEljjl6ghASOLz16Gg7RFK6jG2U0iHDKzwRwO%2FGKDgXhc4evcXjX48M4JWKJ16Rmo3qvaYXd8lKAohFU5P2fMNaPiMQGOqUBLX2K%2F%2FdQHXq%2Fy5NroxAQnwK%2B2nhFGxh0HkwD5R93p6ltlVFWkODZ044i%2FTTGYN0rFJxdwi6D99LTMiYv46LfC2juOtexmyhSixVhz26aJy%2FVl9SmbsSGZYA9iwV5JjACVs3ykTSSnjwjt%2F8W4CQDGObIM10OfDPol6ao78rSHho6t9hZdYwyD3L3YBe17EtzMparPlMlOFeZZRyRxFnszDMvjiic&X-Amz-Signature=e9a79b2350394c3910dfdea12bafa150def10a31abd4ee0742e285c38c6eeb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
