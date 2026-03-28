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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=93265606a328bf58276c6fcc80505953966a346adb18cb85321aae7936ad67d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=8a4d3bbb356d2f6e9ee1ce5010077960f84279e890c8897b1ed112f6e12ce5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=935c9db78d7f6964d003173290e3d967e31c7eb962022ea7b755f19c297e869b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=6d521fcc9e7377f907e66a6304cc7f4158be5ad756ca5d35daf1eba953760eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=735caea0f39fcf8a02598a0789e777532d70ab5dab1ad6ddceee73e70ec88234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=046fad7bde683198a18868d81cc80213911ba60110f83f5a02aad9dc8a2c4ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=f30da3c799aa3b220ade0131deaf353ff1f0ef462adeb4da3afbf8b4ce624173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=e559e19fa860d9c9b65c8f18a2050d474526705ba176799cc5eab8c34e3deef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=d321558cbb14f519687af20a8df3cb0b39cd5e3647b757d0d088b9271f3ee313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=c9c671ea52cc2b6af2c30c122715135465070eadb3a7199e644205110a824ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3A27O2%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAsme0vdA%2FTHpMgz6bpPwwo5QrWa5aqSnPRFsXwY1r%2BRAiAapJkY9Lo36Jiv0UqkkNQCQXRUpDIr%2FxHuHFCsCNw9xSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIXd1sMrEkN5XuFW5KtwDYMzPKfe3yhKMlbs96wl44kNd%2Fkxk5lm%2Bhdz9diOkeg8D1kQnqpxh5H6g2to7QMp6sNjnRYI7LD2leGD%2BSSjXLNF%2BxWhPEyXfw1iZpk1PvdvEz15O2wzGkrce33AYLtM5TIaTN8WyLnACRWk6Oi4f9dSF6%2B1v26wchjckUyibzXKUe8%2BvsE73gRKnL%2FKKx%2BCcCqPg2kySG0I9Eio5VSK4I7Ddzs7BvhqZo%2FPcltMa8p7pWLgCZtZjJ1xXUUBxRXYP%2FEHPAfsXupDXynMm5Bhp5xqkYqWud3sf0ufvJLro8zdkzIppaNwkqKOgqSLU0xg9%2BSpGQgVoazNUeD%2FVkuZsYFYN2A57bzBDRVjOHGYzGod%2Fx6pNDwCJlgTHsdsJsEkKE8HNn%2BAw%2FX6B1svRf8Z8rBRiJy8v1sogjeo%2Bb7D4OQZML2J0W9IifyBlIvToz3Edy3yHVrEJKN9zVX0zK8ey9GpJJFLaReOJ%2BxRY5opseRWHGDXJR%2BNiXpy%2FXGZwLIIlonm%2BjQW6TkRtMS23M0eOxGNclBYUajXP79IysxpQZ5o3KC41NbgFS8hx8jqyCwBMAav0VrCqhdyE8Bar3DsIgVJ1CTPRWQ2rEbdlVWrQHQ5nCxIDvyeygAKsqIMw6uuczgY6pgG1iruzlCcHBIANAdS8MO9tju4wlHWKYneBkIxpo0X6AponpX5emfj%2B2XG8fHfyw0VfV8L%2BPBVDLSvWZdr7bnezdElLSKhQRs4xiwCf2R2SMECqDhnUJ8IqmDu7t8SLEEmiEzN2sgWr97MIBMFtBpNrPUqNUcAgQziM1yciDnFw8u5m%2BQQY8iFxNUcmeWK7ai0jCZWuRC3pGE96pFu%2BqY8tVtn%2BAvVE&X-Amz-Signature=4ae83ce6ef2cc473301db4122128d2fb209cee86fe4d667b2cb64010780aff49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKYK5UT4%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGsJv2alJko976qX7jmiVwoqMtoucoOQfXHF4B5%2FySdvAiEA5YLQdaOuxGiTGE7Dkl5zYJL0kqlrjSzt1AjjPmzF2EUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8Z7nPDc3yYirewiyrcAzNUvT2FXSmEc3ezgHpCdYLqDeu3eOxT%2BQy9fhnKvPe9LDATsmlXtxAra9oOSIvcjOJx9mqGu45Ph4M4%2BwZuN%2BNYwt7REmPDvOMi6Pfb3u7l7ZIkS5ANBs0Xw%2F0btKO5fooN0S7Guz7MFyEwEVpBT4aFvMsKu2J2AYRrXMI4vKxuxSv76jZBLlzQEOAW4ccFCgahkqCMdzkLbpKSslGVnsoGlN6W4e6OmLxmkPn8VliRfwLSoYMiMX6LJNeYxBQdTk85sqU8FeSBFMdgd95a69h3ijaWmT4ENAzxATrJKU%2FoyfNaXaAxoGtOuuxrM9cCW4ufGur3HNNokfDKGvoThm8QqtWN5mqPp1v4nt9S%2FXiLcF2aeISsuaflhJ8RrRJwtukdWkPe3hKt14X2ubDOh2iev22y%2F5%2BlBE309K1nGEuv4oGjtdn8cPJsceFEznIqzNoDMgXJxUG4islcnD%2B36z%2BQ5QZFRglYLLSCy3Xj%2FpH73w0rq4H%2Bng0P2Bo3BJY0tBotz6pdO8yyiRgLuLSMzgLLEoE0Og9LAjd19QBqN%2BStWJD3cAL3oNYdcjFVh39wMFBe8oyrJ9VFukZqK0QDAn5%2F%2FfaJbA9%2BAtNY36L3I%2B8i%2B7Lk%2Fll8hoMix6uRMPrrnM4GOqUBm7aHFy%2BCNHyUcvi041AqWNYxzVneT9uc77%2F34MUmbfauo3YroJK2hqVrkNxOev7ZyH62z2XxJueOa%2FnHMsx2MMGwpdsnF9L7ZZFEfFmSh5Fw4z6XJV8k7ht%2B618REyFIQJINhhQJI3aS5mSg0%2B3ilWTmfnJgmW8sMxXmGRmO1PQfwbKUOVhO8GnPl92K712B9XJ9dwuQPgUutOAnSQyRWP86Eau7&X-Amz-Signature=25dc74f98b4097f3000f3d155c3b32ff2e3f35d108508f179d45b2195628e59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z254YCBE%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCZKCFjjRquFdOaIy5NMsz%2BTFHr7%2BzHI%2BA36RafaDmfXAIgANvhNq0rKN90Sd3%2FSJO9mrw6aWrzIUYFgbnZr9%2BClnAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkH8zfgNzPMAkx4dircA1YwtNkCueVsmsXBKIDG2LCyKDDfM8xFJXPQsL5ib%2FiqxGi6MBEuig6M%2B6qcTveLQdpGPwJWkkTtFr3HSoxw%2B7eD3M3KvBmTGOZfTD3KRrZZnIqZ3UiDlqI%2F31H0jnVM70IaQwwrkV%2Ba4noMiwZQtzsk9ompfyZ4eEZSiYNcFu6%2FPv8GctSUSH9pcq0e1bKp%2FZb5MY2H3QtLy%2FwuVLgIY6hmJVZbuaIySnb%2FEZJKUqxWK8vVY3ZeEJEarG4rMaUZrk0ubCD7RexWSlhqh4btAUWtAtIOj5SaC7%2Bg75simiUKhKpsIllTDgEvULLLPm5CmTL8iSdLdRrUo9B5tvYIGKmy2O6QvpUKzfEUVfXWcWjZyT7KRYDa%2FsGkLW6MaaytjiBCxmXlJC9iK68435QySD0VXlVVk1IRY63M0bfce9R4%2BWg%2Fw8UQ9Mrv2W5ybspOYDqKwzcuFVTuUPN1KB1czwrJt8ZBRrjwNCOlyorad%2BzbygkU%2BFpub6%2F3HzYlx1cR9VgwY5t%2BrZF8Y%2Bfcq6nGFwTwr%2Bh99NMEqyzZ1rvkiQZL6OChVpXKp1Lu5HE3J3fROizlX2IgGNbkGw7zHjkuQER%2Bbp7MWPfKnlgpCTGUtXA55NrGEHzT2M8mBv0nMM7tnM4GOqUBNByTw8mHQP9MA5EL0DrS8cMBwMCRK2xmy1vSybB9LraYn0kBDNuPYazbqI87vZ16%2FnpfXXx%2Bcj8yKtBmf1Itl2NdEW67njD7OvatbnwJT%2FCtHXB4f%2BctzTiIGZ7kGtwV4B2myQVQrTyFKa7OO%2BmzPGtiMMJUL7FXRwAjQkWsaxHqqml3dsiBI6GUwuFWQ3vRPvYW3Ag87CsDKbMmEVgOtiOTloEy&X-Amz-Signature=04a91c2188c16d34cd6468e5b12c204f00d0d035e1090816db3322d074a64648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=19d73a3b43f96086d45593ac2f397cfb7a554c4df50d7506050aac4e7624e831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLOEW7B%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIARbj8lntEBDjVnmHjXpIsG%2Bz6UyTZjNUKptS1bxmYksAiEAlhVLoDzrd%2FcJWI%2F6kWwl6j1pFS2Wg1x3mIt3w7%2Bxi%2B8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOWJ%2FzAHb4Sz%2B5wkSrcA%2BDrptASj6gVzk9SVxRizxXZkcHJbgMuNsROjbG6GU0fwxEOYJ7tADFWgEVoNQcsBH2iQOxXAc2qHZgFlzmsRpUxc1cAze1YjgPJwbWoX73zjrgDWSb16E1hcQiCJQQ7OWPPUmZuPV7UlF8qjE49DujQ27Ec72t9sxOzqymOETIgOGj7LmSyyEq4tSpcs1ld%2Bn0XTGW7jotFp%2FWTf2QGIR%2B%2FJYRnIN5bxF44DBOEur9drv7HKnPiwQrydIhZOl2L9ZtGbU%2BRBQSAKhIXPIitugDnUgq1J6O0jkJBk8ciHGlAdijHXiFu3eb3Ie2muY07CjVYPN%2FrKxMgpt7J0lVsQ5ETVDz0TrD9157GcHg5kfr7MISqbprLfItCvvahzPbIMb1pTknOIQj52Nbc6yDLWhpE%2BmLJ0Yx5dWuTcF22FaYxCPcaRWZuVfaeKBeEsCb9qCnpeXxEfh6tzR%2B6IZWDCSqXExlESoiBBjGwJcfa81dwYRQEIvFNCST2UoU%2BiOIfkUwBpXeMSBfhLTF%2FfGabsQSuu%2FGYYtzre5mqp6mWU3CLizyCb761IBMtc0nWxIGNyBa%2BldSELd%2Fdvclc0eEz8bLRqa3UUswRLfOUnZfC31s%2F20SMorpp56nW7n3MMMzsnM4GOqUB9mB%2FOYJoid9lNk1duc9lGbngLxMA0AW5hhOU1Ii72ptOYpZ9k6f%2FDFval62wrbIc4fglguikt3bl9c6Prpuu4VQK6%2F8lgHWG1P0tpBh0yfYgauEBy%2FRydCpFSfi2nIYEV814%2BZQHCyt2GGn%2Fvc89bCxj9h%2BRBgjSI3%2FioXQmgsRgpEPR2VM39QAkejTur13WsFp%2FRLG%2FyA5V1UuE5rmV%2Ffgo%2FWqL&X-Amz-Signature=feaa42fdb61dc9b62290fe4c392783e91a7bfb46b89cb17e0da1a8d7040a95ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=cb7d9bb88503896dce033f2e22922937389e089e1c251555a58f56ebe3c79198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYEXYUI%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDIivDPC3HzHbLCGuuFTlAsRHX6I3Fer4NI6Am%2BQuPsrQIgV6HIrFbEtIizvc%2BmklAicXWwsEZs8%2FR8MeLTbxIqVegqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0tu0Z8C9fnr2ka0yrcA%2BXJmYAPRSgrVuNnnSnNZ%2BlF1KdXyHbj29%2FqrfshHGgzDK9o3y1uCs6PtLtBLL1RmBTkRLZAxaYq%2F%2BsRNOAgmlNSz5T1QN49e6ck%2FzemAJLoa6J9TwoMrjQgY%2FHIO6%2FPjLkOm5BHJfzd%2BLBZE1Fme5gCBziOVSBVKEGWOyrmMfNWcza%2BgB0kZ7m89uxK%2BskIqnoTwu3VPC3DbyWyC7bJMYwVD6zGI%2BYAZmRZNkRaYrsb7UIIH%2FUewp6OF3NDPgoSy0slW5BRUswWoLu2IKwTtkR5WjYafclIgd7SocIzSnj6IaA1%2Fw%2F60Q08FeCGGLSNMgw9VDB5Z%2BMTJPaJT7kbL5SmArKvSYWA%2BsdOi5WKSVTt2Bz8VC1J4uewCYsLiYJXBAvlUJjIPsKxSuUcb06SfRHaoCto4ZSA0cNVd%2BbN7N3ydRbT4lorSWJF9h3VcTdYmeG4eA%2Fho7HC1wxBLCEaQs%2BYB%2Fw0C%2F0Gr3IxoBxV%2FgWsZ3qKsooMAzfdeC%2FWUeJmeukq1cUFWQuEnyGnyHsBoVXUzOnx%2BAaWxvKO8418HxOlNKPvcqG%2BsWscJCoHxtVTEsiWSNqFhzbNB%2FONTiMfn7eDHH%2FNV4oppN%2FpIEuGgabyPfwhOl8OiaC4rlXBMN3snM4GOqUBCSilZQZ%2FtGX0rz%2BwJyqwZ1f6175CWcjMkR0PQ3k6yOCAEsCcd7XlRIB0bMZl3R3FfB410ATiLQCNRe09h0GXuaKEHLwDPRUZljQgMoP95OS553l%2FsZ7k8hpZw4tKnz2LpiXK%2BuDHejNP47NmP4QI8bObIBsElbXfklEXQ4UrZM3lsBzRfIYFxtTfluscnDPr%2B%2Bk0pNJ7f6Svq%2BRnHXLKpI6zYcWj&X-Amz-Signature=53a05f176eb3fbe4d67f20a06f7180080a68bcf5e1bf84c91dc9f913be930e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=704029a2000960ac88833105776cbb5fbace44d8d0722a2dca236567cd94230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652U4N5UC%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIH4TBpgT2pSjOeedzk%2FJ2GwzXCWfqP0oaOJ2PjQXXWsHAiAvtscXqyj325HWx7AIfut7BW%2Bp%2BVwPZjRy%2BK%2Fg13Ah6SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM82OSzeHt7IsrOHPpKtwDOYPfja1LndWpgFbUA%2FkLOmhnLhs7n99Weh%2FdUwIOhCxexT63cEj0ngjv59khE3tLkmOGYSw8ioDS5Yrxg7k9MnubsFIr%2F17RkKLEA0IRlq86EKG0P1VDP%2BYmvd6TrFYiLgi0gytTFyyKf6KP2JRnQbHr4DewlTUbI2vU%2F86alyYMX2eSyxzAzAQn0Fny3hQ0qhdvUNk2yLhVXdaQZJ5%2F42hMSMlU1aY0Jg0oam3EwuvnCR1HSrrx3y9Mvm%2B9Q1YTgUK88s0MpH2pFre4q7vxpqr9SuKGi74bpHU1mjTrQmYMhyzrCt2m%2FRwqQ1TVpKFBKcRHMJHMWyffnaNx%2BulKatrpCg9SvjhwH%2FBhobncVHs9WQpjCkaLoZhTqM2vUpV1xh5pHZkJyVGd27vsoUe5a%2BK571Igetd2EZvVBlZDJtBb0%2BjgCuksJTJMPvXBVAPRv%2BRj3lmuHa%2F7AMWnbFDfWX6zHIyvuqCGb7P1qNErIybq%2BvF95MS0XbLNP30sueVfFrmEm2Ti8jDsdkF9gG76ZDW%2Bvn%2B2yltZdX41tNvOemWR%2F8wIffvYzQHM%2FWCfuQXN7W8UEk3hVQjKCSXw4Cf%2FNHNfVF67sLt1WBUU2Qn4851WdUWPwCcGyGqlYaYw5OuczgY6pgFeA8rKfAhGDnIT%2B%2BG2tqoJlGoqxpmYX%2F6xufSFZqeGT3fh58ouZDeXD7t3YhfHwA7ScKZw4xaoUJWRXFkhuns18lMcIB4kK0VgXbTerv9aC6EDxY4TnghT6BhFn%2Fw9qOrVe63nhWF4pWM%2FJ5yUgWv00p1%2FixnnE2lFvVS7wUWECRPKIy%2F%2FUSNbVQ1w8E4LhNq2d4bsex0QgriqYIXpdZT5%2BMDv4OTQ&X-Amz-Signature=c35f17477e30484db9218eca57c7515e3a725a829641c0dd8e1e899dc032db53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=5ce0d89380531ea189cfe3e1d5a75fbf659cb2291daeb70e549ac274aff2cd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EM7ZPFG%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDMzqEcWHnK7oSsrLjYe6nXwpB87EdtBnIYyTSQtg0otgIgJ3ZPfnmR6bN08NFGMd%2FjGALYsFEMwKvLMLoejRzNGOAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbM0S7Q2PveK%2F6qSCrcA%2BhaDedQbs%2FC9i7iBnau3rA7XP5JqBACyrTvncaBsWfWFq9AUzmnrCMYhkFIjAmVpQ50F93LCQwqkazuGy6GlfPTR8gye73d7VvbVkVWNhTnSivadtVR9tovumihbVMOUdwMv96DgRiy3REU5T9ngSL9iXXU7ly7UWjyJwHckZ7OxS7q4HK4VSAjChV1ER5NxqksAw1nBv4EDzkPXilWmyLHD%2F3iZgcnHqJic7%2BSWzhv9u9xceDPM0RbCACWWR7gkub7pUlA6d3VRdyNWJHKS990oKIvoaAuZ2Sp6vnmuOomhWj76vTT8LP4RCJjrA6vwCH3duV3PRXt%2BJbx4JFGLSfnNqsVfDj7nN%2BIX1%2FTj84cHBxNfzANIDWUeCUOvo%2BltnYiuZFl%2BScRRBatrgnKTkCyn1nRDRZr6Pl6U2mduRKss6vh%2FR9Ys2fB44vX7LQYN92L7r5ZhV%2FSQeeN6ZpWFa%2FqXHxAzKevPj97U3wC2du9rI9nG0oVBByOTWESk3ixziwlX5hNjmdds6Hhiq0TmnH7xQif%2Bh71DpW%2FSFOUbejZxncxspqzMTEqAStDwD384JPsuE%2FbOfz814%2B64rfzA6KjQpbYu7EbrQirVSoCGFHMm24O%2B8M1vOMdRgVoMMLtnM4GOqUBdSIjD9fQT2ApIAImks8jkJIK2L1CauNUPrdAOHQFowZIquUdFB6kn4rcrS9L9otTb85PVr6v1s89bZQCZkCemkU7QGW7BtR%2F8D%2BspjDu0ieZOcHy4PKNCoFGtI36rjIUsonsuVpFcNBRz%2BIKyE2JQ%2Bno3npZJJa6Xu8FA7AafCckXjr%2F0i09wql7bEVqYR5SuqBetZynajEX2nINx3Q0%2BAL9urxE&X-Amz-Signature=8793c721c01958211d3d1caea2b3a8f55fe3e9a9483443668b3e3053bff892f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=96162a474fdf384b4de44d6196a2c935827a5ba395d6358c25f06da123179ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNQPQAE%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIATFpgvgkZVNoCv1GOrGkgCtRHa3jsv%2FguTTVQSNrmGHAiEA6V2IEmLSnAN90n5qfufljtRZvXTWMZe0Pj0t3hW2pLcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODwO5wtV%2FJ%2FpnrbvCrcAx346UxpOeZ%2BDuvGYJrItUPnvPSu9W%2FWYNpJcA4u8bgUG4%2Boy0Hi6I752iZjEFJSpeAzhqNti9OH9B0WM2aAoBwqApwnoYEttmV0mdWXc7XovMMxuoHiwDWnkYM2ZZRDDQVGVu%2F2skGdVAHaVzvlHD5pxbrNJWD%2BeeVNvOm7pi2r3l9EFfu%2FrydWp%2FrB9AOkEFTl7BikTTLNlLSX7RZQbzOU8GV0KeiAke7Pe0V5Hb0Uow9Ri4PHLl1paGBMqhNGknBehIl9emZRl2B6AMze3bbfXcddKO5qswje8TgHh%2FM2np3hjE7HJgeX%2B8UYdXy9vaQIW%2Ff0MX7rwUWR%2FPKMF9dOhbWZRpHGCh3e0RUDvfk7wYG5oMUGMJOiQrLwrnBWhVd6%2FWwN9PRl5vzeSLrlo1zRhJgOqYw4oM2h0xV1mcI%2BS0%2Bc5XgUBTangKKcQOWyI4BzDkj3O%2B9wYxWlfdX%2Ba3wCUIe3osUPpAQwclOxM5mmGRhT2%2BP%2F4yOztroHGRo1BveMTu5eE0bj7A5Pk0U6JpYBhF66Wf9mnGNb88QX%2FHExcxB1l9w80A3%2F8HKKAqFpvzIidg0JKR5JzD4HZxvue%2BQsIOelhS0mvskfd7jm8HIGvwNpxISuKVdVsDw%2FMKTtnM4GOqUBHiE92xaP1YKnwPium59hdzlEhaqn8KKUH4UXzizBNLi5SA5vBL8oGqH0AgLrfkwA7bxg3L3kZAv%2F3K7HWV3La6Q%2Fz5M2kt4U6zdFfmWwB01k%2B8ebvzy2RBwZFvxhZ7z6Zz0dvlzt38U8RjWT0TE0gx7apBHBzMa7gE4FvqYur9C%2BOJgqg7SE%2BdjnnWnLRVus%2Bo2nEc%2B76MzV2HbSkVMNtKH18xhM&X-Amz-Signature=a3fc091cb013e9fcf8a100f5a693800c3670ac8a9675a4573ff7f3dbf0f6c5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJPLL3J%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCU7iqTULPSK4fQq1WGZ%2FWBpvgSYRSfARX2m%2BUoMvTmUwIgWVJpHgxDn8nb7kUGfOXjKj%2BQvrrIDJYI%2BmPGzwMhNPUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuJzL5ZsrlSQpFWLSrcA4TlieimGVsJi1StbaXVWIdp8qGSw%2FM0kWO4hrLQ1wsYO6ZAF7t1UbDTFYEzpO8AZUIj9p0LQUgjrEFY7FZzm45aN2vkRJysjNZgmSN0Y37VSi24HdwfGdtrt9eF9AJFAjqPDkJSmwTSp1VCOJlRbZKP7JymBzDxbiuSEOB2EE3wWFAhUDRCJDkvLp9k0WzohEs4bZ%2FrVz8YrfsK9xzhluLw1CiDl2MTbXxrO92CpK%2B%2BiK3g6OtmCi%2BSlcACBgNrqFM%2FTYk45I7vNnPISRVPN0iUehDcDmr5RbghDJeSrxTleUaThd0J40udTPKEmBNRltKg2JeqKnzSVtiQrR%2BVvcbCgJ25j8gI2nksUt%2BUULQw0OFRdTR3mBlC3%2BrxU8W58zvUNNhynkzijcPgOzCm1eGaPq01gMXbCKZTJIdu6RLjEHx%2Bmj4NZQedG8pLqIqKAdsF4Up%2BiL%2F0Un5uzeFhh%2F1TpUI3pPNKOT%2Bax4zCHAmATsb1X31PYDHfrSv22JfBJjNxzvw%2FgrN5z05cAYDrppbWIYgegqY7gzB1hQJDP8YnPC%2FaLaFNxHNK208zON6Npeiqy2UpIpQbIKConWWxQKRBkSxc55auJ9VqdLp3%2FiL7hndd%2FvCoTECmXrjyMJDsnM4GOqUBCI3IWYqAMR8d51aLZjjvskhDe%2BOCNhI80QkBemXZri9d%2FC%2B5ZiuCXiD6Oa9tQsSUVCxq6dRdCiC%2Bq1lVah%2BPhNBBDZ3SAwIDwBR%2FRDV7ucPy1xULtgTdVQEIZUG4d4zZiQI10iFf37Ch%2FolXp8tfZEXj2oNAyv6vmflWry4PPmCf3mxrh%2FdTwDV1aw2w%2FoqePqSyDni%2BJcz5CtSiwt7az7c86e2K&X-Amz-Signature=f871fbf434fc25f11ad3161a0ff47d800f1c563fd6bc4639141d8884fae26c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVTY37T%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCIMEvLLcyiy6zUf9QrGBtZiyBTpCzuxLhCQJY4SW3ZvwIhALv%2Fpp%2Fv1jRJSInln%2Bbp5JXDRFlaDjdfJenE0g2G1GZUKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp%2Ftu%2BkBIZOH1mcy0q3AMBCpnrNMa9TAOBbHYPLlJb0sMFzCJ9P8%2FiSdc%2FGhsAlNtg2hP4TTyKa7%2BK1IvMp6wvVpq6yxvfH40nhlSHAhUL1D0iXmepcYdjDuV7PqFOaWoKTuGgyVran2C5X80tvuB79vQNMc9Zccbrpx2XVKpqOMDntq0D0zC%2BFkYq2RkaZXNVS3scHjjvuwTvYNdICJnlPfb0DxKHWnAXD5kfMmqcBtP12EcFJHCGwKmf61vHaXJoUgeJ1YRCCewdzXZUy46EFZzNmtPp5o92VNM8B9gGy4uhQ6M3jwA06Rp3k7r0QdJLDCd2Sm0JqKzkWZBmQ7bZZ2borLDdehJ1WyuSEwECnQp6bRtLKkwzZhqGt3zVrwkuIyWc1TPBAKvRs0AxGOfnCMWAffwId6hg6UHAlR8nfNRhJk3bUgKhHQXwGiqjYBVp%2FjcMlQQ1vEq4Fp7d5EG%2FyMjGgDVcgy5u0zlTjzwG3KTHZxicykpZHgGO%2BVEaI66SPaswzxyJvp5xmifezsD%2FPzF14nHb8XjenQjPepo%2BHUcU2pZEphttuYY83HrQNb0Cquf0mF9NwuHeAnJISwNJ1Jd6A3yDHlNAyCvnxjImYtqiqMarpcLXliFlup8%2FLeG2jphYwAYGSnorEjCD7ZzOBjqkAS2cAML%2B97hogoGjf5WtmNGRwh5%2BkwK4m0o0LoJvxpWNLU7nYObrn9sUjIxy6PCvTKDWVCG9ljNi4k8qzMVgHGOYw46ctGQ%2FdWseSrPvZU8pswQ0D91Xn9OKHSXfSAuqGq0W3kJ%2F7FRtTvCpYPHfJnSArwIZdXUiZuJ1uHV5NXtzdPAl1h5nS4buCbi1j2nGlvcDZZNGN22y4NAUa4vNTQrmCFxY&X-Amz-Signature=97b5418e14d7b54eecc2cba6d5bc6a8802e190476d3af7fcd86fbe9f4df301f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=7d413ec85646d1b544e034c86066981001080b6ba5d34769bd1325783d2ee4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HH2HKD%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHw6VbFaH9I1QtLRZdNxevLktsDpmu6lFTCmWfiaEnpsAiEAgQifYRutB7j9FieIiYVtnjTGSofp2av59pz2wfMkYJ0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbR5MUguu4ccO8gOSrcA5SrIrY6VMxI7pq0M12mZmzy1qayZKnXqsM475Cj9XINcazuWgxpamH3AM2TsiXSVBvAuiuUYFRntEmrdVJlfiuEhsN%2BK9YW%2BBnW20zRk29ltK5Q6GXEZqWcVzxhovfqA9MztB65WFBVb8q28EBGIlecwfjKDfGq7QOL2YiMiKRUZGg1uPIg3c9tKAsaaRRkUGoG1gpwFora8bCAcYWNwzonDlWGNkDRM9FTDinkHqU7G7%2FJ87qr4ZR%2B%2BugSqnuo9GdC%2F2ZiQPUpSTpbm0ybT%2Fk24FHdpzydVc%2FD8sWKvSoS28K8N19Wjh9LZnCr8EtuFKjGUAiQb2YKrn5Cj%2Bor3D%2BlvRqLVD1GNcHsKKeiiYu1vXuLfCtMeqQwV0tKrqFhYjB%2F6YfC%2Bcyz2im61h99IzXCCZQqAiD3vjSQz1axQhAebenE96xSIlmIuXiO1jYWVjCExECXQW%2BAVn1VOfucmhuZi%2BvRxN3%2FC0Z6n7ryIzHB4%2BaDlet9AdZmZn8j%2FjriPCIb3Qlh74xnzhK1r4fWrhVviXr6%2BTgiyMkosS62w%2BDQMCY0FFzVxNaa2iGh5jBcCRVHHajvzLCUwcYv5Q0VveQMgF06RNXlZZUg%2B9SmD2D85dSdEq9Zd7f0sCZzMLLsnM4GOqUBhQsUMUbNPX%2FkKYdipC%2FLtKrbL8auDl%2FSkS2cTk2CxgZz%2FUyFfa50kLiHHDobWXMgdFjYvLONHynQcM0o1KSuUwS62Mw0Mb1vEcl1uTXJ%2FRjtzujenv7B4xDtsDm8Yqv5FMJlP2Tgy1O8yMnReeERmvtAQAILmNnMpdovfKVkMYQPNvAYBgEWkNfE2ZlGpoaxjhOocTJoGv41ZgfXhE0ywFSytmGj&X-Amz-Signature=1354abf76693b0bb4aa45747563fa72bd19e56fe1c8a3e5ff1ddd27824278516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=dcd59936117c24a54f40fae5b72406adefdf09207240fe5eaba4430fe42ec2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=abb2484967c089abae256b1f2f915122f33d5c1c3838973f099e0f4a65ccb833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=aae24884919830fd85b8a31ffd0d6a11f58636d83fd2213f968bccbe7f0fa4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=4b0d347d355359b9176d397714d6ba2e786f5e1f273f6f2e793ff707ce70e3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWJ74ZC%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD1umFuoW%2FQcvqdiW%2FyNMRaaczHn1qWkEQKyMzg3kGgggIgNUQyi8eYQcw4Qu5UGzX9WxP4OKC1ByJxwdmrw4638zoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcCvI1cQ4lYN2DjtircA28MB7uYNXHEpYUjXH%2BGebPenUm868n8hzlr5Ti%2B6G%2FT1pBgARvVaWHWHoBi9k%2FL8QUA91e%2FARTfRmqO34Xzp67Yl%2B2q%2B3%2Fj%2BDfGu0ZfWXQLwN4X62psXuJEoOSgLeAOgQBA%2BhoFCpvshfyY81OYCImFOpTLfEgkq1FAUzydXal2eCpcBiaWboMxUb1%2FfXd9UYe1URm8sYwpX0UoyBPrvyU9esv6hmcnc8VI90yZeKt3XrcF6QbLMyc2sHC2osAi73VdR7n0iBSatUnZgTszWzjg6dSvVjJX8pAhkq6xK4bXpDMrvivKd57BrI3jx1dIfopI3XoqJ1qMmLzHp%2FVkIPLalSwpUXYHMZ6V91aEgYB4OVTiXH0u8abkGrKgvBRfo2Y4db3f%2BPA5G8lq6Su1fV%2BWWxirxfEJY5q2mGTVPOqIQ1gIvPJ%2BmGlr70HLyMuCzRusK9SWIXKvs5c%2BUhJVDT%2Fc1wiyvzojtSUYDrEtcoMEZWmaHKc%2FdQXrlTQn%2B1r8py4%2F3RGEpc%2FkaHpCxCmCEHqigme54W%2B2YGf4ls%2BdjIP66Q46lpdF1qW4iA01cAZGdpDnB%2BXFx5JQlcJN8Jrg4yuvz23AHH4gItaWnZJ8KbaNNLHpOGBl0B6JVXlaMITtnM4GOqUB68fHlY2VbFroHRSbRYeki5SBcUimLh9oSGYMWfv1AZoo03hw2TzVoS4FCJxpQYv1%2F6Q84KKu3IH1gIqO7jBg1CUxHTlGmqCnIavd8YmpCYCGcbk37ZzF1%2FRN9AjeD2vX33682CHYOFenRExoYEEz5CsC6BLlQsfdjgu6dUsuqHGJDJVcUVR60T0NvTwokFOh%2BDjasyUjEZwItOIcRE4dh2yToqzV&X-Amz-Signature=83bd3466380d205e83d5da644084f7f43aeda855907275f6b93d0798c3acb044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=7e08e4ab977977e48076109573ec89f32a8f8282afd49c628d277f9195e88100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=3feb20e83d9728c7a427e0cbf087d6f1adb4a2336e2af4c63e593acb32ec9c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=aae24884919830fd85b8a31ffd0d6a11f58636d83fd2213f968bccbe7f0fa4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=88510204a9673adf397798bcda3c1212a0a11956117133d2ad0a990aab25944c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=9f959e05b7d511d802ff8e77c0fefa0bf4d7c556237a2356e912c7a0a4279a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKBB2W%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDPHIB0L0wVhG1gde3gUL4u7pximAnvaKsGfAGYdv2pEwIgU0XVftaDJu%2BecAowC%2B%2BqDFEqbwNMVXZQ0g1eh5RTrg8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnkcLp%2Bch320UOidyrcA90QSXVfV2g1JNYfbNO82j3wdwuugeCbjKD3iGhGnxvtxiEu4t7L4BVYsXI5wdugpZ7Rb83aEhzvg031H037J%2FU%2BYqT%2FspqFBg3D%2Bx7Mde9z0Kj5n8rV2CaA38JN584xbb1gxfMnH3WPhVjFQaENoZBIdSl%2BbtxVh%2BSR9jiBq0fnd7LzIECaU5gfGm77HBI8l%2BkdlHltEYVRB08WEHhbDhtyQwBSmyBKQMfJtnQVlmLmLuJ%2Bm3WvAfLLvk1VqfuNz7H%2BRzXzP1KJxzgpBVQ6ZxJyRpRlp93A7A4bIS6UdLEH%2FRzQdBULsn7vjJKAcUFz0q031OiB3LEvWb7GUK4uqIMvRisEa8LQxvNKSPD%2FVYGxrz988cdpSdWyWDw6vYD2y6WlrKNBFJrlfB6WgnBErMC67c0ATlokvYd49s9pYsDl9iBNy7V1EHVkF5rD4%2FxRZl9JpipgaJQfaL3hd7kAGAWtaHTkU4ox4cZJl6cX3JIB6StlzSTdEgMMu%2F4AD1mr1ZijDR9pcT5ILQuRme6Dt%2FMSYTDDOteptieCb%2FqPCnDcUuiTfMg4ByIsUMdLzxATJw3L%2BYGgms%2BeDdSZ%2FkeSBNR29UM%2FVCk784EJQQWuwQcL1XHzVCJT8zTypft5MP3rnM4GOqUBHi6VtYHTe5p7TFnhlVMJZ1jsy%2Bo8ON8lYuh%2FpDXde8dNkw6PM5%2Fgxv6FPnoNWvoV4bLVISSA2XbR2npsbHs0pet6PL5yJaZsSHhKstRpTZP5zAla8oSdH4QOF1qAspAUOmp6Mrb7QCA7PqLnLAFFYsUMcqddV3QJS%2Bap%2BFuXFpHLFnrRa4AmY5EEabqkATmAx07N7LcOBpO3ZYniyC4PrzCLbGde&X-Amz-Signature=0e293830e5b2de18954ef88d5810ab24b29a8895fc143e8239bdc0557935d7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


