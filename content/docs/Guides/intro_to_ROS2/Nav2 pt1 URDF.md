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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=087cb9e349f09c8047f0941f17dba5ffe5962e016f29813ff3a45b17eb0642ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=216ce4598f8e419785a6e30de5f218e4024a73a186e5c6d2f731dca4910b22b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=94cc2f0f3a204e3852df4931442d6e38ccbc86b5bcc72467f146bc23b2ab9d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=bbc3cdeb4616bd20a03fcf02cb3856286226968ff02a85a5bda9e7eb95c1b649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=e9977aa3c35cf590ef858689759a1f0ec9cae878536f5a00d6474f3c6f002fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=3404a9f999a4f792c594692dd6fd3a1aae0adc3fab4fa181b977d2f086f0c683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=9720437db058b981639f4f7753728cca36070cb7b55d0fe2eb440330a94fc38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=f2b739a3ba7dc798c3b57f59d8e02f9f05ff8456f071d91695b9db16cc4184cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=7af6690ac33d5bcc6b3608f8ac2b983f2111616a35412098d67c48bb9ef009f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=f039cb72a9253feff4d80334efc8dd51a76fe4d3aa42838e81e7a71379bce0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVEXTPNQ%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEt17WxsvxLKbdU6eMs9NUcapQFnb2cncNINGoUuH6FKAiEAw6orKdGLq7iIVrbpGjQJP7jonZLhQFcHrBHC30LFnqgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGaTUvqIHFNYlB4CCrcA0DqNe7BLXphLUIQ%2Fb6nFHO2m9TNy2RC85crKkLRp7ZuP%2BN%2B8lRIiz81OdxPLvt7VVExKcHHxSjbn%2F5Y9mBRkrFQJArYSj378SGIFP34yYKrUw3SIb5aXYj%2BoIvRNhXVDNmibZpph07quQacTq1FBRCibzAyP6c%2FkMagPlTWd8vxT1HqythHde09%2BRTQsaGLvz7OIFYJZFdSrOZ5Z1LfnquYy%2BJqxRDf78IFZ8p%2BqkdLNJdxFuyZlZaCF0H7WdnsTGQ2LvvCcMC4tQbv2%2BldcaQtoqN%2BcRnrKJ3bsXEmldcTI3TYK9OelUWPf1QCRmowZv9C0PPQ5a%2FaPQmfHiaQB6rOEg0SUmE%2FVGUP1WuyMl06%2B%2F1Ic%2FvBeUbhuIqPt66mUillHTpjuwCRkVKiHetEbqwM9rXtFoqCpQNyoRPUmxaGHKC0ogw%2BMQNat8I74K7HI801tvgL2Yc8m1cNCvZzBrJIOzSWyBFt7rYcyNWDgsnahCePa3HkVW14%2BDeEUbKM72ZKz4b1cQN00atYF%2FPL8wo%2BstuMqX8Yz4V6W8RCpFbAeYjw0xwAsDPv6ySZONGEgdcMKMnl1fkhYuOiDQlnUhSaq7tY9HGLBhPm%2BnyDj%2F9rVTIoG9yyto0do1VlMP%2BFqdQGOqUBhqiv4S8oBfheyCujTxthN94EEufCic6Zj82M5G5khS%2F3sLQPeYk4xTcwY8SbcFi6NAKwKFNwlIOY3s9oL5n%2FULRnJ%2FRX12J0oY2a6GsX6Wb%2B0JGV5lJXZqHht0xrWkDGi%2BjmtRrebyfJuwZZSTtdDIH03c3dCS%2B8kq7R2bN4r%2BfT%2FY0xX7RcVzDT1J6H07YQRVJ5qGht38BbSXzA3Hc2zmPf2Qrj&X-Amz-Signature=0735f04ae6b46e598ce3c2aea5191c0dfc6e9f59f023af49988098c7e9159c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FY4U7E%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICOl49uMC2jydKJ9GHMs%2FR6giX%2FS2HDZYvO9bNl4bWraAiEA2%2BxkGxzTvVV9WlYKOjZHaNeyxhdgEFuahkT0uQFVAHEqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2g%2FRvUUQZvmeHvgyrcA%2F%2BZoLWbzXYtzcxx9f44v8J1eK9c6J59YNj0XvsE4SjtcjnM1nykhaS2EWKWx9wtxI14UruzgLtnHKjydso%2FxfVqzIxnOZHSDJagMTysA8xAyIX1JSmqZICpbqoHMmki%2FPBEJcfpaNMoE89EE%2BBDlyWs%2Bhjf%2BhTEsPqwEb3e7eO27P%2FyF56mnjuxIPLgU7na1GIna8wScsAG7o2nf453KzWsrlDdwU%2Bsg0TkPH3chL71jgP%2BsqNlJqO5J445bj1ycijklXGU%2BrttjRRMSz4NeMI%2BShDXXtbPkHxL1r3n%2FZ%2BouiFW55suYeTa2yOrPvPREvKAuodSADZA0IQhSY3WXkAozYVBU46PailOLn6fSA36U0g2Q3vIY%2FbMtrku3bytQzMdKQhH5OwFwsyALHwssQhgFepPWk6MNG1dxGxZ6hsX%2FBddxBT%2F%2Ftf56fMNUxpnDwwFPyXnq7oj9OMsxMm6acvZXqSojTFAYRCFkbSguDySCVoY4nPpjU6N3YI%2F4Hw5MWgA56uV%2F8MHl4uwFv7moX5lUp7NO6fIpxfRi9DukCRKtLfpwvxhAgG5GS3H3BC38GzDq%2BgLxgHJLe9MPv7IdiS4tU8gWEqQoyRuo1aNYsGfzm3MDfOOZIS0MAMfMN2EqdQGOqUBQ%2Fd0ucYmuUo9ir0L2ypJ6UJa19AvenHO1yFPfYRnCTRxbrfgt1z3Tig1%2B1jBE3O7ioTJE5QIoMks7z3ohhmdCiK2hD7mGSuoXC2ZunAqbLXDDHlW57M7hZncklIxdd0FiE%2FKQ8KsyJduoiA4upq%2FKJCIB36kTg%2FUdT60bSr23bmKjvu977LPtprSGv0WNz1DMnY%2BQ0xIkg6flS2wDff9uR6GkClW&X-Amz-Signature=8c9e2d4cf35397908f85380eabfd34d5ab964b731c385c753949639d023f27ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEYF6W6%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCObm6%2Fdfqau6jdH1JwxKpRG2t5gWyVug6tgmdwCQLGsAIgFgbQvhGCVrKa8xfNvXeA1yHHC7n%2B828i4BvbE37zR0cqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzsLHaDBffli%2BreDCrcA4aaxsVK6xKnPbILC%2FQKE%2FzsUu8QVpS6rA5w%2FyiGaZqxh80Ddh3oTcRBq6li72mIeXAmq8p701yeJGnlzZEn3h%2FY%2FlYpeNrS8di6XbdGIXFAJj7r8xWPxkct1TZ1Mm4dVAIvQ5U05jSucua3XFz%2BQFbkr9JFFCfEvIUsn3OKuY1RfM6NlP0luD7Te6ME5EWnbcKU%2BPG1Y10U6NOmtxQqdoPBRM9lca1EXBlVf90WktNSEZELM9DlXJbQ2Jxfg4TXwhNwkLXqYJ1Z59Wu4dHxN6Qbno8MEwI6rfZoik10vzdoXF5Kv0OYzzzbopbdPZBps2yQYd3LQKewZilxsIgxW5exGfrx9NHED6g5U%2BbGt1x%2FJ2CAJ32xIiOjBv6KPXKwRJ6dACFRdsbuD8Rv9jSYq6eVHYfqA7CTyGpsyIraB0mRrWTPvrJy8YNTRHGWUwJMWBsBNAaYErmHWuDZHOqDJxBpFYh8jmsAdctCSihVghMgyzMyTNX3kQTOsx8RogEU58H8pzc8QADF9lw0jFreSJMUeKhCkp9jPL8devf%2FUEDgqAKlXMDE%2FlN1zRKDGymuublqYnPjS5k4GAEGHKGlPgvBULzuf0W5Ohc18AxytOWgT%2FwcNlIMNDV6nld%2FMI%2BHqdQGOqUBvlluAhegU2tR8oOPlajZEl%2FLfSwKBMZCUPfdQuElBLRs31qYUqg4pBQP%2FZixsf7H53j1AUdzzvtwdGuf02M7G%2FswVBVFjulf42zya71L3zLoMR46IS2dF14vYYm5Ywz3iWPmzN8WoeiNTfa9Va0kNj4iKoXW1cp8qb8TuMg58KJFwkLbEH8TQFI3P9wzOElhhWHd506EH1n3x7GjTJav1J72liez&X-Amz-Signature=71aa590ed2162cffd7863e54a8278769f977c263de4e293dd0643b5b291cae19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=846b3730d679fd55661ce4750bb48c44a1b8139bd7fdb085293331e2e1884d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPRELWOK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDUjI3xrTc5yeAyv0H7WvJMQZm5i4Sk3N1GFHQQurMYMwIhANb9MKm%2BXiSR8HpwI5u3fgb3XXVlGKhghc6%2BDNwbYHawKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznItKJL5ArF4dr5F4q3ANC0ByO3qKUt3jm9hpOU6wZRxC8p3HogfEGUCHHk8%2BL0zt00YM9XMtbg48VOxi8AmLJhmIecHuSzk4qba3cYVReJv4vZdaKTKCEcvIMYRdpOdwb1iylMOyzYvvqeUJbZaqPpdGL3LHW5DkykT%2B30LXKyMC9B6n9gpmkbToD8Y8v0BensMDdyZsG03B0ZzrtbfUodYQvlnBSpofhJomyLvOq%2F51IVADfvwYHnzBJz7Rxo8crlq2VHYp%2BYt1tDAoxsMQjymD45IS2OVxa4N7B5RkzWLPGzMgWAYIZLMrE%2FTpFc3PMpuwBzfgUhvE%2BOReTmjfeSu3yxBk7vjL0yzDo3qFY9svOVhAkNNW8uXrr0wfBRgI8WfYu6SwePadeCN3NU0yongSU%2FJ3y1XQ3t8A%2F82D3IiCFXt2n8efIxl%2BmSSaagrvwwaC1E62%2FgAmxzw1%2BTFsZtXBAMkI8jybYvEWd1A163mWRnBEZdvvsZHd%2Fw7W24pCnXho67I5DEFMUDoYvr%2FIHvbWVfw6h%2FrN9ytAn4LUV2hf6Rz9sVI7%2FCCSn3JopsUus2mr3AiTT1mclouri05Ih1PPSWEQlXguxzEtTGlVDFTlquNETkLyDgIoml7EfrW1aAN7dUQa3SS7WNDDzhKnUBjqkAQTUik9bOJ3Lj7lSCvqAurBlxMMkGJoHoD0XtxZyrXpd7SK4KKHizWYCx5jFfEgjEGFHaU6gnJTx8kv2%2BXkWtAa6NSUSTJ2Z53y%2FE60M1JDv%2B57n1%2Bdbt9G4Y26%2FQpAz48ceuUL8Z1q7zfURFXWxZ83Fto8CgyuJmzIcWXC1%2Fz2AUFGzjlJp4Cpxo0cy02HVLv5w3Is12oX94Bsu4khwS9Hb8meT&X-Amz-Signature=f15de46bfec9ca3285b2fe748af6b47878b606ebf3916b4a6e953422ecf5ec92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=48253fc497db346b34adccd99175e9d54b03558cb92f22a19452df5ee35e3f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALOHMKK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCBnHRHe1DVOFgMYgfFQljFFYhu8dqHykPn8mrxiSK7aAIgW4niCxRUijfYfA0lh9LFNtkA4rLQPFWaSVy13Oa1CgQqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafg2rH5M0SbhGOQSrcAxTUNCS%2F6P56HGdrw02Wk0SsZqnatCh1cBC2gt1k7Ae1OaIL3SUr9SONbZLF4jfWZWv0nFJ05wAu%2B6UrMVhez9OC1P3FRELCoArulFmhPbFpGyilj%2FH96CZN27bavWT895%2F%2BTLjdhVvCPWE0pb6sh23E82RFKaHwei%2B60KPSA9xeciJZE31nF%2B4sjY1KvZTnbB9UsYIH0QNovxLQ0Wos9UoP70mjLARyUaxY758%2BJGe%2F9lF4v00ra%2FMBZaKTYQ%2F%2FPNr%2FmX9RXBPmy5aCUftpJtGxb5M%2FbCydHPfOZzWIa3gLNXSH2Pkwd%2Fb%2Fm7nmXwGX6La9M91hV8MjajcxFfrR2gD10fFB38vkGH9PD2fvlnfMaCtoGNTUymkpeTHfxa4vBFulqLiaANUMO3nsRX3HwdfV7Wp4vESiCLJmjijxRxlV4784Yr0%2FRGFgPo3Cmi1ifP6s%2FovVE2nv62O8Tg%2FbDWYE%2F%2FmGVqP7ln4ycX%2Fe%2FinkLSUkLkjybNZbL5wCJRHl8Pr8t7WowbZ9groDWvYSIWVpDSljC6y3DastPICG2x8%2FnSL3B9nATIvLfWRI0CR7dne06pELPgYPcMVYm5WgspEJ4tkGDMV85McERj8ZhoujlSJ8KajoTobiIpraML2HqdQGOqUBLM9vXjEAvzwDMs%2F65juHM%2FY5gBi8eIrBlHLUtbcQV4iJZbrvbq%2F0f1UBRWFS7Sct1E3CV%2BpAic17YDqahdnKQmzgeqQbJFbu7Mruxk%2BFoY0gXTPVLhjZccAPWO6Bw0dRaJmKFInxQF9aQQmgSx56SduHt3mRgA0EBfqVeXwDg7dJhycUhHnYhTkX7w%2BNN9Huo4hppxApmRgiSZEoWkkjKmFVogLO&X-Amz-Signature=c7131b98628dfbfef44dd2d69baa56b9809219eb014e2cbbb7afdee6512f294d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=84365775011302710bf438c7eb7cdee700be428b1ba22ea215b3f733a75450e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MSP7NH4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCaJhunXdwW5L8ennxkV6iDvsUHB%2BtqYzl61DoUXyGQ2QIhANAqSM2U296DXvTjJVNFHswRiPbWnr8NK%2Bx8E60JmVpRKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVvCX32wK49q05g%2F4q3AM8Y63PS003UY%2BOjroMgbHL6MDYHDUuWAhpoLaNbOkke7N4oiTTgKjcQ5eP%2B0hBFfkv%2FZOp4zbuhLnexPeXju6QWgVSgV%2BmecglJQF%2BwVrNfIagc3S%2F9gbb96ivwKXe3OYx0s78Zvxd34eq%2BTQd9N%2B%2BdsctwOJILpneWjgPamw3jktKIf%2F78bcYjzLouxmEcCdxFUk9GOcONAmokQq3LV8asg8adf5hrxhgAKlyP1%2FaIE7r3U%2BdLx6xdv%2BPFZAkIbD5sOVaDtaUnjbnmQ21TyoujBdgiHyyYHVSy2apQofPC0Yy3fhGKy64DgbaIWD4PRWLdKttD9t1xlYXWrnVGM%2BFbZsvbIjp%2FNw1Yof4gEXdG0rfwyheU6lmu%2BDnTjM6OWdCmJQ1pycZXPGXhAPQNs2H8cjaQexJNdEnlBbMp2vyOfIKFjhZpXrFTSr6YkdL0aBUZW7M0jjm0g5M%2BnLCGUYQ8x%2B0%2BD88D1mztD8BjWlMl4fXuh%2Bu4R3miEofpqZjKQPg%2BebJbEt19u1Ic%2FtF2b2tm8CkSjsfMtgvdQKwoQq%2FspNKLt7UiqRiB72KoynjtHs7vLSFkGbnIGNj8HQiqfZWanxk19w7%2BG6fJefNQLeSVX7iug8eYYnYS0dKBzCkh6nUBjqkAVs7E9vRks0VHCDKA1aXE%2BHU0iErZZFr8RnsTUPxi7K1AV6OnTAkvySmi9%2FQd2%2BThmGOyMPXqkIY4xY5zsDnBylsQOTblLyFRmSRMWZcoRj29wvzqSAnpuepkx7n0N5ZlnTEO%2B7KqwCIbGSalq3SF%2BkBg5zvcMGPsu5IsC3r6X29t9G6u7CZ1BY2PTjArqM%2FOQp%2FfSP98fYfUoI42lkwe3GzwnrN&X-Amz-Signature=649dcea75885257ad71acbf75259b60721449552a747b0246850f70bf784acd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=a704f4d0923956df308606e22c883ea92b70dbcf22cb18a5c5303b07e9d40999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3X2ILV%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCyqem72nQFk9gXkMqwDgU2gxzZpzXpkaPJuR%2BbHQu59AIhAI27rGH7eBP67l0mt1MXNZ4VBY9ztQr0pIG4FqH5z0IqKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4yuPt4G%2BLv%2FbjfnIq3AM6kWwDCP6osuu8xwxnJJpYCQ%2B4YFCghR6FpNA%2BKkTyuat6HrtOmf69sFerSaqHpbD6QjvfVkWJiSo50nN21Tf729k5ykvu0tmbU%2BQX5kuzYdsfnXgfVpsLhZHYdqvAoKkSOPKsOLULJQ2g4tMgVmxOxPKuVPfLG8u3pUGlQR39SRXnnbkEFUhJbFCmSLapwhiagUYeJXOZD7sShOc7LAdS%2FfMvsPnsIlJ5ONWROHCbo5lD%2FrW2YcaiutwY%2BjN%2FXDaLnNmIvQiZ1hUu9NEh4ZqveBYsydGPk7gz2Jp4AiS7YPgNner9KS1VQmrMP7WruZhWcjs7J8dBuRjeOWVXPYxwJWA1PGhIAd1Vy3PFs5NwxGCuR81XutDGRs7C%2BdELAnje3OJLz1ISVYG%2FSVhOIRNEHH7KbDPom44EMu1%2BHB17IrarF5nFFxwvYKn4fyx7ebUtPXhEFHGSpDwpWLiQw%2BrsB9ftOGJNcacK7dVTx6B9bqjxpxLIAhBiSxJbshmjgz7SBcxVDFdVwIkl3TwnurrkglS1dBfU0eVultPHhtoRbCWlAUSBXYLbtCW0A0ytFvDhpmWKE2Sa%2BbhaCRKkKjMr5GfFvrVfNoE02GxxtsggmRC3aqPYLAZjg2YeQDCFh6nUBjqkAX1tza5MehwQy8cGlJ3riy2zu%2FjlS3NWSQAC5UzHkLw2JED4iUAx5ekRKcLyOhzU5R2KaVYZGs79eLlvcE6ht0z%2BfWriFGZs9x0t%2FeFfCGFYl8DO6sKf4KkVt%2Fl2uUQoy8tez1Qx4NT%2B8v9i5R7g6XzjNu9I9UWCstNAdtBzZi%2FCf0O5sVTtZj9Hvnp%2BHRerZLHFvCjtyBpne9gBz8ZCPMDF69ly&X-Amz-Signature=eee26d76c368dbcb4cdd20772e61e612abe74a3fb5e1f35505a629c9a2b2b3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=cb245908f261ab9bffffcfd7dd10de68fcf84fea41bd72e0b11d7f82fc508de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627OGLWPY%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIBGqW3vJxXOhBFJ44EAYwNa7SXWVz%2BwPVLysD08UgnzbAiB6BzBB2KqGDxfa0cRdoDi9kpOyTFOhpiiMNNl2NiAIZyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBo%2FGLWeYaB0pBdtoKtwD%2FzUeKoYqxMvku8PRLPyXtOBEVmE363KoP0S%2B0jElSu1mXq2dHryrhU9LEPglSZ0EtoN39%2BpBl3wVBw4jy45vfz7AiziunjdJ8%2FPDCPM0KuxbqokSPE5v7ubpNk4T9h3bjt1XVws6O%2F3wpFDT2QlM71iNodTonEXgnv80WQrRgm4bPIqkPCANpk8ELjXhUoLYUiOElsr6AeNYWUx%2BeK7MHV9z3lOh%2Ft5jcIR3F5cNBvZzxmC%2Fbkrm8KLWta1rhAXP5jakecjIS9TgZQ5RrIawdTtO7FqGn9GbXOv6TOR5OB69%2Ba9OVbDwKieE6M2wFnPvUOPRYZ%2BjeWtj1Saw4SXyAABY0pkNbhIXwgrbKK0xa%2BBAEv29VwUyDhUabyEh7XVyU%2BgeukVoWkVjFzXk8p84daLguWmKHR8DhpzAXEsMTu0Wb9GvsBpI11EWRwbtf4NSYq2UkCS3POZMF97AZQrK3iHETkozts0HdVxDAox66Jz%2By2sri9IzuRCQCLzSovoT%2Fzkycc0HA8t0JVMg2bP3NUTKXwzRedZF6f7ZcBFgQGQ9VxLVGrdLLxjT9ZyIgsnT6bHNL9zfnHl0Xmn3%2BCVvruQXJ8lPI3XWkneD2RtGpIDqnns70uPrgqeZBtIwtYip1AY6pgEOgRnCpySXwWtRMk4TCdr3RK6hCYPYrJVjeUm%2FBwIPxmsHtbCqQ%2Bxq%2FT2Jgg65db85kY0pBQ3B8Hs8qsRfhfO3TQrzCC0V5Z%2BZOmRjY19h2GebASMvriYfp1660%2BKyU61FpT5OMYGRPkv2BK%2BxpzqsQnyIj1KjIVhdP7fY5Nl03BZQCkw0ZTEEo%2FGnlhSNJRNq7XEzPh%2BLcC9ucKMjrJg00jAo4MId&X-Amz-Signature=382bb3a33c95c99f59749ef13cdd5bc7540f71ac93863dcb338debc4ecaf5e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GF4NSS4%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDYT3xFZJsPti0ORL1oM%2FRtMyqJwo4dpjiJm8WHe8%2FxAQIgdGlbDLeYQFMn6BQDrLB7H1W4AWDIBXaCFHn0PJk8ctYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiIY92RJsSFbG7RuSrcA8nJnmYiatuqvw6vkymrNMc%2BHzh6WbZL6Gq9R74%2FAcQydJKTWnCaJu8mqRy2AvnRSihHQsBew6M2hRY4pjTYsViXpHc2PpcoHUbujZppvXpJB8TQEDTVgpyCHe5OZqUDuJHkNKpob8qJUFiALHljP3HKRIAYFDgHfBxlfhjfAOAbnvvzIqCOgabPoLl0ki4frgYg%2B%2BhVtJgKQAzZIMHjFeUQ0PxFNxRa5vqXpgClge1z1lfXjjTu7OVzSMvy3JDiaxEcdfQG6dACx0PfCyF5FcPtuQWK6%2FoCHT%2FwoqpyYJ%2F6vLtPDLlxGkd6DWA%2B2%2BJXAzMQmWv4wCVKKzhCPREPDWc9xX7eLv0Q8CDYBEuSlugD%2BEOCIqJK1XRHjrOOVasR%2FfR%2F8I9TZFRf2tJMLPjYC5WFFE2jzLbxAL%2BuS99TWn9FDMInL7o5Q2D93UvHW4JJKyKQwrlwbZmv0%2BQwmezhjcV0eXcQT6jVoigO7%2FxR9qHVtN1%2F7tTeBfAfYCcmYZqvL%2Bqg5tAEQ8hoGkGwMf%2FnfazDwkibWiU1v8tVJY5jgrI41uBcEa%2FZkbixqpXozQjAFQ8IcXqCqGrKZyhS%2Bd8hpc5SwU3%2BZ3c3NF%2B2U4kh4MMltQcY%2BVDOGyEZjR5CMOqFqdQGOqUBYEo3brdEfdcOPSWAVAoGTDJsLAGu5GQPJd35QwkTteHbL7D5WNE3VoEWSNCvYGF%2BaEh2200fFsGzUd4oSHMc%2BgizzGjILBY3cQj1cw4a19acGjLPdt4D7XDlLw%2Biw%2B0gT725RU%2Bclkkzjtq8V6kLn95OSEOH1F0Efl2EcJXtzZpnYseyLLBcZI23CRoSVw5RfYhtPHq%2Ba0nsfx%2FbcM02abHo2Jr%2B&X-Amz-Signature=7fa7a08bd168d0013b78312157cd0f6a33250a4db7bdddd6540a164bf9c1ccb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TJCV3XB%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICoGkvtHd5VcAJPx7ya%2BVrG16tQMWgC%2BsCgwxGpArdODAiB%2B2ygSbqWGBnTBur3394ygR3zesg5AmwUbH%2FWe3UL2qSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FChKMiNqjyR9WTyiKtwDeEBLC30Ry9abela%2B2WW7myW3caUvBaupPA%2BLAUWFZ%2BFsciQQMSwAL84RZU4KArV2u2Lxfs%2FmZM27xNZIGfMN8BteQIA6UpnmX9Keh50fYl9hEXwi%2F73d6hc3%2Fg0wIqeVRMOSfMt5r8FMH5JWEPldfYtgag6aoBalAGAxM0ZM%2BozDh4YLDh%2BbNj2MHVsFevIKhVeWKXOi8ZbLIg9qsO9cOhYxwutb5sEfxpk7WLjL49TLWXqsgG3sGUjoHxHsZ36m6dvIStkuphbmthzXsVgPBFHJIURn5p45sVOT2hDss4ISOo2cq875mmnEWG%2FYWN38kNFqJHqrK5P9hxQOj6aEHoghVZwukcU3D1bHbaJzpp2Bj%2FcAQweiR%2BpoMcsHohZYh%2BfdqDFMQFgVoq06qdWYf4OF5ZPqEjmSDF39MmgGWIgG9M9%2BquXDYutgniWozrhTOOCiEMuuKaDtZ7Xver0kt8pyQ1pTHITbVx7No%2F5Mi%2FBOWUzi2tdVa%2By9%2BuubcK2zJycNy5Dq7L0xiM%2B1PlwOfQ0qouo38TdFVTS6KZ85s%2FVLvXTUkV%2FjM4EuaSFqOeEmiH1JRxR2LalVCemI4PI4fa1ZZLU0QTmJhUffwagtb01ma8pXJyVcjRR1AbEw3oSp1AY6pgFsrVFgr7UfPuBRlPwK%2B6XHKkXJfXLaAo%2FK4ADXJ14GOnXIKURNzZlFdQFb29HgZMajHVX4KAuy1OsBS8iunsePfGpTUE71MUomoTchm2D7YIBAseChhhgZCgwq7ZiCa0G6gB20YDg%2Bqt1Fpfj4z60UtVtuUIipJrgfslpGVQe39Cm3n7j5%2ByNQT2QlE9fEbEtFh%2Bsc9bp2YSQMUR9p3Kh2b%2FBnn1ph&X-Amz-Signature=8f2e8f26b4a9681e1fd4353d598050716dbf0c7c6fd268265cd412a9d58cdb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=e1198da47a9c1ebc1ee045994ea4ffd2d42b324f0f0a0c580f02ad1f189652e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI3U5W2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDrpk%2BQXM7xb2GN5LyamV66bLojpLJv5JBDpX6%2BPtVE6wIgZJ5B8bRZWOHeR3HoBSoQR52S8J3GYOzZbLyMyhaiIO0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBYvAMFF96IzrsKCrcA1seB1yhyi4IQqfmcNHA2YWkqMPqv8HF%2Fs1emE3HIgEsmfryNltQ3uI5SKwzjlhI2N1hgwClz14gSax9zdiBgQu2o3dAJOThR175Fnzd9WSrk6SjBxruS9qRAROhgY8kmdWLxhdyp0fAN1Y4AulW%2BXbJEzeY91QPCAwUeDGZiIwFboK%2F9rcKBJinEihfuDuu%2BeClEQjdk2DvLWqLe2%2FKKM6iZTfGOBKi%2FMnax%2BfnzVwtSSP4HIJv8LxsTPhwe%2BBBsWTw2YML1wuNyNaV%2FXuzl1D8jfM84Bjt8ckpzcrkuogV%2BhOJaOBECKbTEnKTsWg9uumtKOXV4cz%2Fo2CWn1JHvAqC6GNifPZtiSI1vv0khPudPUG3XCoJYMOoSHjma95AASqLEojnWJ7o47vyBoV9yBIJwtz7HRwISGqwIJN6f4HJ31k5g4E76BusvXOVjUxYunVvY87QK0VS4XZxvDti9WLKwMwfJyMge4q8cU7Vf0AXbm3tpAYylfmPdohDWZhTwgoHbNVi%2Fhe%2BEvbpgUOiGi96e8kLwACUznGqzPCOE2B8PqOnBhjaUZZ2xd42%2FOHQya4SXqXNRYlVNp%2F%2BkDnveqAOtigLI07Usz4kT1F7eroO2hcqACkoCCKlFlvVMPOEqdQGOqUB95v6C8zJxweGzogaUbfEdSS5a7UZwh%2Fx5GhtaP0kWDFQTCORA17mURjqhNb%2BrUluQqJWrE2AQhgKZ0fCLTF793sDzzhsBZJMOPGtsd7hVB%2BlyXEVKMSvCkdz%2Bp%2F6ibYClajgKKKIpwxvCHdRUQBejWhSQ%2FGKzVSQoKyGT0ec1UTyYQfY3nAv5Mn9mKkW0k63fin4Kv1%2BChcDA7F%2F%2BXRrCoXSljWa&X-Amz-Signature=7a9276ddda425e63a8ffb1340f886ce0ee4ec2f215994e6b420d5deb2a1cb31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=a9c5b284a37daa200a80115ae3755b06d86279fd6a9be920942e9510c9a0c8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=6481f41c97af8732a6223243bf90c1ec5fa04f3a57f7298eb1b1c6d927aa4ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=aa2b9065385e06cd1e3cd9885a92919bccf6e75023b6e7f92e0113cc261c7898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=4f1d2edf8930fbdd2f3e9cb89dd679513e97504a40309f0f26b8af1ee0f86d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LDXR7R%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCKuUxyrpsdF9Q1Hut1KqfYY%2FJ3%2BoQQqP2gDh71aqDr3wIhAI9zVKfcnY%2FWzPj3hVtP3E%2FM2igLxUm5QQeH1vMKWXEhKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGdmBhqFODAH37CHEq3AMQF2UPz8Ooixs%2FCPdSWX%2FAR%2BjuK%2FnT%2Fhm%2BdjLCCBLpVV2iZDZTHkucV8JrXJ7fJ%2B%2Bc5aJUQPpXfZcpi9Jah%2BvpOmOYW0r0L5KZFfLCR6qTc2JiPrdgerESATZ%2Ff4o8UHnmMpwtH8LiTwdZkEggmj77hHKlF2tAVjT9I8PgSX5WSKO0x3Ye%2ByRHCgqwyikNF0pRV%2FkASrSrHdBJ7k6OrSOcEjFezSfQ7m6fcks12RFJj7U4cnSjTh3Y9IMyDopcEBIGy7Iw%2BQQQ0VQEsGhBg6MWFdcaF1Q3Aesna3whQMnpSitlQGMrKz4WbhkxZ5vldvGp4qBoDtqFn%2Bup3GXJNBBAmCRCjmgaP4%2FuQyzvRPLiPohYqDxpZtht3SXRk1H4ONXx39wGJCTdop%2FM7yh1aTFxAtlCSB%2Bi2wrwdnWMYJrYd75roxdvdCe4hDYWcjb2JqaD9PqB53FPhzvbHSfSBAGf65y0WyFGMKvgSwMycX3VW7cswhcrvSzbCyvZxCpf8aj83HERwsiRQmHoOMmHVoz1lt4drjXFF%2F3ZHFDCPXsTGZw%2F6tPwu%2FnYQrYNNj5jCYbgzVbaTAwf0MzLPcIOwLxi6n5LUQR8OcIo%2BG5kbrN96LeDC9jnZeTQ4Jo7tzCOh6nUBjqkAVqdFJqolabQAlaUzg%2FRMaeby87XFMP9A0kWSZ%2FmvSNEi6DC2mkaG4VSQc8pgY%2B7lbF6OFheImXDqk33c%2BacOUm8V69FcES92M%2BDbz%2Fvm3W4%2BaJs5EYupWdcabZYUIQUw0u7drAY%2B44hqNzIopmRnW7ficFq6qaFdCdzSywgyVV20di%2B8WJPtXp2xYa0xgCXSgPFTbV87PNAcpFuaqFx0Y7RTu%2FI&X-Amz-Signature=04af783861aa2b303c9b83d68587509c9e28252ec6e57e8f60b5111186744f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=7b38722b67496d86e5dd9ab0f5289ef3523156a085bd8cc96dde32f13c321af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=03e428a1d9a82ba81dbc5ad41edc7740ad310fc9e0cc3aff0f44ec6dd95fb8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=aa2b9065385e06cd1e3cd9885a92919bccf6e75023b6e7f92e0113cc261c7898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=3b8ddebaeb74db3bb2170c40b9206217a1c831dfcfcc323f04d3d69223ed23be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=d5b64bf36df5cd603fe8426d53f38ec144cc630b8472085407be3a2f0614e380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4PXXTK%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEbINYl5iljf0cTyLmgLzm0amE3ZUBN8mRWph304r33OAiB6OhnhahHtqMyVpGDptBzGsYU4YeL%2BRud6elIyc4%2FttyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwpF9np0gQ0TD8C%2BiKtwD0itymRhmYRKQGB3ptoGpirPewTW63F2yGJdfMIVB9YujPgbrI3AN4a2YwtUa3FBu7zp69WpvcdCj0rjdAv63%2BzUoUf80IK036ja99tMLKSvspjgAX9lHeip1lLE3zaLrnffLBx%2BmFjFe%2FYsPXq1igB9eABx7bFFlNf3uVD%2BfiN78ncmxNlcrxg3nOtwYMIFaTVavZ7OdJJ5YBE3WIx7u8CebgcdD0z4NAutc1iKqptDA0Djbf1Ugf%2FxOAU2QgSeeGYURDNs6Ii%2Bm6sa3IOZGh1Z%2F7TXUbgPQxQRcVwuAApGo3G4MlrD0GS1e1SVD8Hd9WsPm%2B34VToDPheGRN1RppSaiBoeZEXifrL%2BXfY7aCGFXOQ8loPqXQTnDAexhBgw3%2BrwoZ4ewsBhBqnulq1QjL6Wu%2FaRgtYZiqpylBXDFv42vs0IkBaPI0YH5TMq2AoWo6VzPuHa3ybj6Pjnxe0NHQbILD1dBwWjDP%2F0e7LYSx1UlmsIeoWnCH2GX3JMARrUP4Iorhj%2BIsevqz%2FyN2m%2Fd2xE6rxww6%2FPiq82Fz%2BzWyImd5s%2BIlMSn%2BCAG7WxYFn6TjxDF6hYr0dGuY8le0%2FC3O0UhAZFM%2Bdmid5simntqkP5X%2B7v0vuI%2FICKEgFIw4oep1AY6pgENqDTcg0eZAJFgVlyyYDmexST%2BVhPC7iFEpIOYZxxsMcI6SaR6OXURkeY3uejFDF8%2BiZPKe2FNNIDjalIAdea2fMmObTUr4JazBCfh2pVy6gyprLkR4NhfZsF2BlN4AWx7Yv%2Fnv9iZsRuU2tRsQgLluRdjPOfYVAhDdFpfOWZ%2FE3VyOwuFWh7utagN1%2FcPb1X0ayc3T0HBlj2v90adD2J6cTZY217V&X-Amz-Signature=64f10fbada2d99ffd5d91f413206e3f51271e08195e96d47ee519d7de10cff25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


