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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=18242a4431e655a90d220bb60f97fec7151189624f4016b703fd2ad234181c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=b515aec7aa7331ad4f8207b6f413e90739e9145c3def9c6a82877bd96d6b4047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=3790161c60131f897e0c847b1095ebc4ddf2be72bdb5f4f6892ee392dbbb77ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=0a99dc877387f6e69161f4e41291cfebb7af4ccfbccde7c043280d587979e7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=1a15b45d6fc70bad586601edca5693ba73f0c1cf24aa42a276e30ea34a06d849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=49ff4224d26dff0fd6a7da4b22821e5588fdd9e9320b36b5e6c3be5966e27cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=53111871d81d0c92902d59a191e08b27878f2b703e6d77081e43226e24aa99db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=9cafd92c109d4772d967a66b1d2201a2e7a15618b731c7988d727dee45e02f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=2d929b3da3c412a05a72194f9aa23f4fbd3b852888c1b0e7605c38ae8e2b581d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=fb1adaa2ed802b194219cc3c977e77962ec76e7ecb96d5a7c05f1c28a5c1f858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEAFFIGQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD%2FRwTLIqd64OijhYa2vvl2fLmzE3PsqR8e76I1J7ZhawIgTcfqYpidV18UjNuZ6bF%2B%2BCkjt7K5sJ5Y5VH6aKJyqAgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJYw0vRY5%2B7isAvyircA%2B4zr0I%2BcMsjTYqnqr4CtMITcJHyOlU9%2BqA%2FYkv8XhAIO1bhL8bzGXGbGbigYvRZ0QzCyAJn22fkmHpRKKUIEOFn1U6Vt7pJynBoIGN6oK9dfI7Uo9twdISFIQgwKoX1v%2BIQ9jcmFaAX2XFHQLnjMCayxlIJne%2BmuBL9Ls3oa%2Fka2YbRo4KMwQs%2BTUcSlx47uQ9I7Z%2BM80u8StgeiRRKL7rKStRCcsNlWhcgVsB2QMjUxHdQRauDGsSiTsNNPxA6mh5xV9eM9Gyxd5673a29HgG3yIANgHziU5aed1J6TF3g%2FDk8GPtoG7ECXP6lD48UNpVPoyI9P1nR3V43OY0z7B0o%2BiPE9dUBTUKOo%2F88x1Y43t%2Bw2Ot45UT0JqingfurnwEHeRvBLrxrhCES4NFQX1AmeYasJ0Cu1s8N9vfsAyZFHWi3mw0D2sC1GKgE5HkSKOCINNo3Jc7%2B4xe8Z6Q6EU%2B%2B26aGEpAgfq%2BjBnQkLciVJUXt38Zv1sikb2syAC0PGAtg14aorLlIzMMLSD50LgFWA2lFlh0%2FJcIxuusCcTQVFHWJy%2F7xwtiVzncvz89XQAjkkrLDhTDqyVpzsVdtpiS70c2slMgqHWow7WCWvHF4WTAvMAKpYsk4ksHaMIOu1cQGOqUBsl7bzwARFWyRLoldiY3wSXrXqZXo0glLFrfeaUxHoUiYH%2FAlsyXu%2F0mliGbvOJTtMGldgG57Sc2PAA2IOn4LdG6%2BxpljOycLPjGs59Zr9jIaXB8GCh5OQES6VG2jM%2F3VkFunNRDTH6AX8OO5jA9yYk67B1ilfkBudsYMkDhq7eCtaJ08hoitHq5cVAL7UzM35zPAoZNfq1oIoF6rzXPNKR%2F%2Bgyvd&X-Amz-Signature=c44c649fa90dd0f3fd33a7d7c54afef6c621dd6c9db10025ae99255ccf0d8646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFX4YLL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA%2F1NHrlcCEbuMwaA5gMjRAwhNGdy5fHO2OZ0lTgZ0NgAiEAhiLpNkgRBMuz8eD1s4UORUOd8qerL53hMOuFBMYbSBQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqRWLNh765rC3hOlyrcAxdsgCeLFT9RD9gHbtNM3OeIKZmnEka4omtvTduI9CYwpzKEp3cBff4Cv%2FYzgGo%2BPxiBxEt6znBA8FUjZ5g0jSnWqEOWY1uabegXs7pIyMk%2FyieNb163qGiaUau8Ww39CWVdpxByRCdjGRbkpcxMBZti3WRCwN%2BHtQtzP%2FKyaFYUFtoZ%2BYVTcMtZ%2BHtAd1NI7u4LaHsa5nnXNy%2Bq4rwQTGSv58baV4Nb1FGD4hvqwsWNF%2FvVDmbcpty12azdOHLIZ%2Bf4D8GOrJMhelKIN2TixdXTui47mLAVM4spn6ks9pO4LYfOp%2BIEoPG8sFHsp1g3eQE3VIkUlg9xy%2B9UTQqhPRamBTPV47Fh1%2B3zLIruFhiGfIRRNCk72fu24Xp%2FEgVd5wGt51w80oH9RGv%2BeS%2FeiNK6gXZ24tn6ts9rHbgq4neIl35z%2FCo2VMhdVXf1VFG%2FaLY%2BH%2FL1Kkayog7IQqOKoxzWxlBw3Rs7qcM95APCzuWSFvcq%2Ff5WyD2f5LnPpxh3jTjz6dMdRHHRDogaONLTuyE9onCTSCGsw8z859HK8BTEnN2RPpB1AKclZnUtGXe4gDlMQFl0oX5BNECP2cP9JeJK7XkT2tOoZC8gP362S7Ih%2FIB%2BOplTpK%2BuejRBMKyu1cQGOqUBWcfVtr9ek1GZuTKl49Y911weA%2FxVlix7Com1al6a%2BxiPYHVq4HL9snKroekI6x89sBULlIPij4zOeG%2BA8fe%2BkLvtBkbUWKo0ZM3dXFy6dRl%2FIqOluy8wAuH30uCDE%2F1KvxGBMOXkMvZuQFk4DsfZ1TeDLRX%2BAD9BC1%2Fs6ssKOL3EUWPKwTIEBP8RYoqxpq7sziaJXY7Ax%2BShlIocrCmkFBxLHuo9&X-Amz-Signature=ad23912604f7cd46f6fe20c67e207ecc73a59d61d12ae4b599d78863a2be6da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OK67GP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEf9qZW3IXu1WJti2tF1VqkCijOJoijB71V2LNLb7DEWAiA%2Fpk%2Fs1m%2F%2FG37e6UV2EZQJtqEIxbNq3MQde5NbvZuiRCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTnu5lQR%2BzcVkNLoSKtwDqzFz8Q5BkA5f3se%2FsTFlD5iBRWoBlYP%2FSaXeofpaS08v9HNpSKcRPYl%2FKDPSA4GyjF1cnx9UgFLNFtXljViVCvy%2BhmcD3Ckmg5Vi8Y9HjiFpJTD7dFpqJzQoLms9l07yp%2FzVZQZu18hIQS8mBx%2BTEsnN12sB7mETmbJPtdhoxDNtinfZP67a%2B82vx0m1MUH7d%2BF55g18u9aFK7vDab9P1jc5X2xzT7Tio765XGs9fbudkxwpw6nevqZIltJBzTYTZxef8INzOkZgIq0vhcDZeHMMFFxywC%2FzQvtO9N2z8zk2Gkk885UnpmfljeFgYPi8%2BRJaIZc4xNHY3ToSHn8XNoTVtuxUWhPpz1Vhg%2FysKBlB2l2fRhD1NMXd4D9eZ3zja6zR1B%2FKzqMekjf%2BHQishpr8bIqEa2DfH2MsSfX1S3Ekre%2FEf1YVutyIGgnq46R5G8euAFsfa%2F%2FXLpDDwZk2EAjdlhKYy00Vw%2Bl8HgXTTj%2BrU2C5O64f%2Flry3EIvMriTLOoQeofOtmnyQCL4Dvo759w5p5Ynk3yUDkf%2FqtpAaPhs9tZlFWnaMIaSQFNOEfNKmqK9JsNmZem2wQ%2BJ9kL8IsdxoVTzBp5KhnOq3d8fAkjLswNsm3g3jX%2BNfnowka7VxAY6pgFVeOz39WmUsjRd6g%2Bcfv0RcmyttiTIxNJa5XaOOLIeexomHgv3c5RdttKwLG75c2syPdJoFCHjL2Ch6Raocr5eUuIQZTCks5HxfQleqOEDyPRXbIwMqjk88nE4x4ym7I6mslGflrPz0yOU0Ju9vCam93%2Fq1ehy%2BOkwch1d8E17bwPL3BPcEn4%2BqANkTxyAHFM1B5QffvZCuqKYoz8YdXg3K25y3ZCS&X-Amz-Signature=170a32fbb94a609422db0ddc7dea62e411eed6cbb6b1232c97e09b89615bf8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=cb5c285fccc70c768a6daa38d3cc2c183fe5bb55395d604e7c8ce57c4f7dcec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWPLOBTO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCBcBVOuWa749GT%2B1TYP0zBYDUuAYJ3TEeBd%2B4z8bHK%2BwIhAPI%2Fh1NI%2BV57%2B7tOkAIHy8Oz1RfPmBYkdaVkpBrjvXefKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRIZ0d5n5MosHK39sq3AO5SB%2FqiiizD6NoJoUYZB1JaMdeRX1RnwYHcDTu30o8QP%2B0kz59R3e6TlpDBtly1ZOVgl%2FFanMOz9uiyadc%2BOYjeyBRzz%2BxgUBR%2FH3q5XREB17CZSwZBPNGfn73WnW%2BAgL5ttJLFLQPoJiHrhqMB4qxec5JJuuVwI%2BLDLwVUCMpidJ6h5Ux2JE5gHEIOsiXopxcLyvKg0ZZlw7VAYLm7uglbWSMg9gWhYk6SzRPWZzHOEZ3aFhV4Q3YjQH8O1qnsJZerBL0lf0HgBKDOtGKKmUb%2Fv0NSuwkdfDKkpMeOMw3uPJefj4Kw3irsEn0bwnUGJ8cFghng5yKhvmtNLLC10POCf1Fj5cEHRMxR%2BVO1%2F4iVNye8uqFCO9BuySlCFlmwjFA4gcNnwuzTgZVtFrC3A3j3p1pHHquZ0cte%2FXUAcA%2FQOOW23E9B5dYZIi6SZ2RLNfADOxVVvivmTs5V83fWfCvUB%2BEk%2Br7jjU0P1j3FBZGA%2FCPCACwB1E3auti2vvtM9IDKh2lYLd%2BzXGvrl9Yibga80JXT31xOsOvO6N%2BnKvCfo8ieW%2BvpdAmMT2ANH982Oh63ITDT6Q5tdNY1IwyBnG5T8FyqMzchgsDAexEa0Oha6cbhZQLf6lZ%2FuC6qjCsrtXEBjqkAau18TKk%2FPere%2FR%2F7hBcVv%2BRf4R7pxRN2ojbWfBexTddgYAwXUP8%2FGdY2GLyQIiojXf3AqRFrIAOi7Ew05n2AmG5ataSW9FXt7UdsEit6SzQyJKumcFb9zkDKJokYp6JaKXxbC1KDdsD3GVtr7eC0PQPQ6gPMQkQIVDTlYYQvr%2BUVLpQMXhmJ9qv7J0cCo8NsTLN7wfGpt8T6WHSG2U0xLfNrUdC&X-Amz-Signature=55c113323b96f49e43962c28ab113527b9d8513f7b1a242c3ea1d8e835685f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=f3bb2820fc9170a61e50a2572b0311bf7641472e735643c4479182c8a44826f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KT5EDX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEYkFCDvlIF%2FkiLT6wKhV2bMtyMZ8Np2HLrUtj0t4qXwAiEAxvlULzQ39f53B75%2B709%2B2YSHufChcyyuxri9KLxjx%2F0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2J8fHXnXORost%2BYircA%2BAMZqCJ%2BoH820ljpGm2WCAYyWDuFGf6bOW%2BCZvr81QvGYVqWdup3NwrITI4%2BHO5xtb5nmwVansl%2BADBVX09I%2F%2FGKJ4ga6ifEN4AiZfgHesQslQOfKbG%2FCOlJCZXml52%2F%2B5ZOwr3E5LDVFci%2FgDdCgToj5vhBXwAQ9vR%2FF3RQaWqlCvdyDlyAdm97RM3CkXCGCxlES6wcmqqw6cwgLMcuvX3oFqcwLOxp15gAspaz9e0Hak5XEZS1cEvfC9tZiq412faeKaEs2M9KeKcIEVHFCLyXbOwXtqVeVlfIVGxdNTEa0U8bedZoMzb5N30IBNBHPeVLHqqEbDERe62aNbuY778EqBkDF09IE3a7hsvJUe5zopm9CI%2FFlf4Tg66WfbRX%2FwMmOQGuv7eodPPbuNAv7rCLBTppthhXTjAJT%2FtYWa4LP7DnujL7FKVzIZA9vU26pSwwYXMWkOiAbuXGFNSUnyv7VVEd9Bs4fb8jPzMUQokp5cA3n0Mf0nT6VXKq7%2FSRfynkoJyE8Oao8rQdcPecrr3Fj6n3O0Znv4dYZgwt9B9LjqtStHK827yGfLUTGcI0wti9ufwXAk%2BUdRNV1qHLbsEmu9t%2BCwZVB41eQ9YUdvDyeG1NDWLR44oxoedMImu1cQGOqUB7%2FOhU1jhc9QfrALXnMfR4uAtPPJHyhPoHOkceK2%2FsdTtGUG9tQ%2B%2FHbU%2FCKhuh0Tuf8JH3zN%2FIIdz%2FEx1f0SPXivwduqYkUt4Fx3XM2aVZADfhFdyoh94OxOLb43O9aXpqa1nSoGuCVBdl%2F9iawx%2BzQeozXPhiL1eHopnUVhjYj9Jl9hTeWPfYZANaItNoUxaksbbHC1x0un5X4Z0y41M4SqivVek&X-Amz-Signature=0cbc4d9af87765cf27508505870e93fd5633d53bbe450d936174db9c656bf779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=51cb881a67fcff7bf948357af65c6cf1cc541c7110d5055304b09424b2808faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAG4UU2O%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDUGU96hPBib6nNFUA8vCqM1DQfOFEKJFdPB9WNJSeURwIhAOFeYqTmFe0d%2FDj%2FwHMuL%2BboJCWyHfz34%2BDhFQI4TuloKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3fL3CScQ2MKWsmK4q3AM%2BZXyOCHWaxTTz%2Fg7xkWobosRVSR03p%2FJTacVoRvh2Zp8gRE25hEr24LwYpoiKpBGGwMwQW3kJUgzyCSoToEUuSUoFqSRYIcPYyShnrKzd%2BYIRTEXkLui4qdNuNQ1pC0bqmiN7dvUPcI29Uqw1EKilaFZ0BQvr2s1CzAiBrvkdDf84k7UAGBFVuD97IPkPr2mCZTpt3EZvaDTHM4Y%2BmBjAMs6pdAqYoMaX8lpE1vItpAER%2F4qifPleYxyBpfKly0hW%2FKOVFMbQZpVyGGU2ddG72FGeatPyyr60wREs%2FgZHsJECv45S%2FvKhkkGBMqVz%2FV2jbgPEUTf%2FQTyjG97XHZSmkm6JZzVnCvVRE4VH1fJdUaeVsq1q%2BHfh1uHuR%2Bms8BXhcBiep%2BvlE8AwvoH8%2ByemNVAjxlrl40f1j53TBF20wm%2Fk%2F5uPo5I3cXY25lILq%2BNBmaIiNYcLSgbvJu4o%2BG8jWUWJwwc0kddIEMMblI55E4gqK42IBxlwgwbz9VDOprkxxdJtgGie%2BzXJLvCOyuwJE5O1jmH%2BFalC4VqLCXcz9M2N5eeQjHGvU3ZvnpMZZ9EBETZ%2BvCJK%2FVCHRlno57nWSxOCUgAT7WyvsuhYsep47B%2FsY4Tj7%2BAiazBHkTC%2FrdXEBjqkAfBtsWxXvQ27CagSeEWaYlVmyy%2FGO1WlQb9a%2BAzOZ9P43%2FB8JyEBW7Bz%2BRtlW94sMcbLCHZB1WeLN8ymsJuwGtOquSgSImaacqVdczvDUy82xLzrx50VdJgQXET%2Fapb1wY%2BrBS6DZsmEg8rTgXd%2FYcuOfw1RyNzpiLhlPtH%2FZRnK5iJXL%2Fi9Xz%2BvsaUNZlSpxXrOsvSc1hMY7zERj0zl3MxcWR6x&X-Amz-Signature=6ff4825c55955f060651afd7d0205610ba601f4112f3c900dfa76c43211c06eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=5808419fbc36028e2e1be386b7a3ab769808b0d4ded1f3e92bc88d2d39392cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNYH47F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHueO0mA8CVUJXSepfP7Lne6oFrFz%2Ba39ZE6k5hvwZdOAiEAuTy0JLrChAa4b6dpOA%2BnRB28aUG1MB5KdNbEW%2B7Anj8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv2RsSVl0xnZBOpwyrcA6AwskwLm3o%2FFy1YW80PfUjtFS%2BO5LHYsIpg2SztOv6JIlKcmgr2SIvA7%2BuJi7bf8MZaS8UkxVIeGHWUREfbVnuSzYlQpQu253sB%2FDP5D6HrtlQNVAFoqZCqDCrOYmyH1alt1KB5UEQ%2BHgMPFlqPjgRUzM%2B%2F%2FGMbXXgZu%2Fvoxtbev7e9Ja1fCZofarGfxXy%2FwVgghEq%2FMcEnf8TLAn4vCJ%2BgLGEAFtlby4SX%2FCA35DYaqk5lP3ykyXZd4xMWmxJnF3iqJYjpds1SjrhRRbXd98fJxBSB6Kn0whAKtpO%2BVZL3zZIBo%2FGrjKnXcGKf18vLn33OpYeWy8yjQFqFtg0qu8FN3ch%2B5ffe4rzqJjHtI8Q47hdcD%2F1Ke0wjzQzd8v6jrEv8FQbSWgrIl2YkJABOqgsndW9nwa80YKnxBJGWxC9aFYoEQtpKc99GWEJiKovPfffQZjySpskrsrvTmRn8DtavuVUUW3bIcGnOM8jMEVbaQt9%2FgJ%2B1Lgw6DkT3c4hqJvxnDCVB%2B%2F0NT1xqGkcZ%2FJR40db0Yq5iMDm0uvoXlTDJRVKT2k7RyQfBivLYTIp%2BBrs7dg8KbueRnshjItuiWcHypHRsKURGwN23kCamZ8d436sAZLQE%2FNxtLwc8MN2u1cQGOqUBd9NZQOm2MfdSYKOJ%2BwhIVbhIobyAeYZ3kFh8tzRCsLyM2ptDUhbbwIRppbAFI6xHam%2BhFd%2Bt5MaCSQFQoTo%2BubMmLYLBnx9Z%2FrDstvu6V1q1n%2BrqDkKrvdiDUERT48a6x93gpVtyZU8T9Qe9Lb%2F7kPbhFyHdJxnMiJFOSYN3DrTDUFGE6PG8g86MjJ%2BGyO1AZMFBsmel5AZQirIf0xEuDDh8j4IF&X-Amz-Signature=9083d76b1cf4135a93452874f1ff6a6ac4c543e74560be62ec660c4fc66abbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK6AOOPQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCZS7y9pqblWQqDeVhAcnK9hHtIA0C0mgqT4YXMZxvgaAIhALqNN7l8vxs%2FkV8eZ0mJYSbtxOI4cHN4Wugdi%2Fsz526NKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNappeWUUG2njtD%2Bkq3AOsCxY6tPT78Bl1%2BZdv3EHDQuThVH86UJ0xxSiHhkoPpgko92tzCT7S97KTZik1FGTYhXTc6hwmM1%2FdL2C0hKAEug5KyAaE5O%2FdjWHqYPvTLlq120z%2BVOFhPVBpHo7ibtGhlbo%2BWT7vYLOwEujZbwTBXFVUtK2U3NKdLXJe3wxFZg25QzmSrry1bs5pK2hUKcUUpmeJncsz%2BHvCs0K0A%2FVe%2BeubP%2B735szCtWqAJFJWcDvllWj1QHo2THAaUSRbHNsqWh66%2BGI6YeBBprotBL0Z%2BSx5kgx2I%2BtNwV7afrWqrFTs7xstdrqP2ipyEsq%2BJkKdwhftG4PSKeN0FAWX2xSVWL2mpvz2I1wXdfMFO1yYUJTYj6wqN6lPgFy3L0hyEgXydGUj90oVMj3IEHk2ThDPwv1SsKE6C%2B7zxBwr0zO5FplHBNWXmoMIqNBkuW4tny34%2FlJwhHhtthqIsbvpS65W88cd5UcClE3TSCWuvr7cPixhH4yLO9qgmaBuwzijXnS1WdEfJtmrbxyUrSZhMbQshsCLcotQ71prXnIV3%2BqoQ2iPcDbXviy3ZaAEN2%2FNrOo%2F1DK3LvzEFDqXVB89LvDUcFQh39l9gFQISr1hCUYj2FlYW890vqdykehtoTDFrdXEBjqkAf1a%2FwusGBsmataHrN%2BmfxLNYgRpBKb2KR8tH%2FGdwbxVnUZRgSiHVADCZxvDLw6CBmGRau5yxJpsPze9MzZorSW%2FgieEWdBPac23v0C9%2FIPf8XBOjV2M%2FUY6MZb67Kk%2FFbKFsMSWmTaN708Ihh5FsJV0%2ByJSZbDkEJfNugV1R%2FIm33DI6n3p92d9iUFN52gFRjXBpbDgKiSjwfWd1V7Bqf%2FjxOaP&X-Amz-Signature=52019dfec25ae732faa0af59e08a3830551c96dc98ee79cdce5285a5b1ab5679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPM5ID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHx958e6ExXkiKMX3qCgSu%2FIqYzvY76dqLUScHi%2B%2FpyzAiEAraiMQ%2ByDy8ikDHOp1OAlsYa%2BC%2Bx4mfk3G4R%2FkK05dzwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9K4ujObuPKO39aDircAzo8tGyiUoZtYgLzEnnXeQVe8W1krN5XmMYCqWzSp%2BXFtLrdSF075Ht9ohc8w9%2Fh6fFG1UQfNrw92I%2Btpne68QAqEhdPdfRdi2OJWprSe6SO64IW5%2FhHS1y0y0X4UYnhazZBFW7pP8A4NDFkR0mfoM9SP40DYeo1BXR9TWz8IBSDR8vCYtLkk2wNNQvglbdlxEJRZHl4yvFg8oWzQ7OVqiEMEY%2BnePfuKNLxnt8Fi6xB2HtloEzzNRkancJi34KnamrkTKC5Q65TsMB6SWbcrN9cNm%2BykKmX9iTjz1stAJS1ObWZHYVNk3dmjmcOTIDykCFPIsWU5PGOoh%2FOhzLVqsD3cP6eQ2ajZWpZsfoUQ%2FpAZEbZPJqmdP6Nu%2BmSr%2BxaxmKbESIkfpbsnJbjlf2QpSadId1MQnKIl2Hpff3zPDjpDtpvRPrre1NvYEtlhSD5ZZfLowHggmWr19j26XAKyVvDAPj42ZTjNIlA7T1%2BYTwyBRHmXlnR2WezuJ%2F3pCKepV%2FaGsawNovVum60gTMcIUGnW52kTidMR7%2BWNNdX%2FWWkmPWuDqMgnraaP045Fhio1T48jdhGTWlyLcemDHTKGqNkQCxWOnXfDN0%2BxbXKqirqNAMOmPyi5fJqWv6qMPWu1cQGOqUBDKt%2BTx41khTiW%2F%2FD5qx013BqFltyaOJ%2BV%2BQK5BQCXf2ZdFxdYxz4KwPd8gD9Rx8CutKhijTv%2FiONk8a1SllgZx0ND7QrgDy%2Fula%2Brw5vx6a8%2Bx9hcd%2BuZHXYG8KyYjfqcEi%2B%2Fsq%2FmIhf%2BFXz5qsM%2F%2BUa3BXiaKXfuviJ0%2BJgrSGHYl13Ja1%2BdA4LXdcJO8hiY3Qe9nSQBhnpciWYuZhe4BWogA0%2B&X-Amz-Signature=b71153666af37c94b5e264094bfb7133bf2ff330dd30bf0553f1dbb5150a67b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR5ADX7F%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIECzYMVVjx1mfDact%2FMQ3wLRPOCqEYiGG3NZz4%2FTS91xAiAkrlwe6iD94NDHJ0z%2FS6%2F7caSasrh7BAo8QtBUXEy%2BXyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0xIk9NyO0GWdOJBKtwDawvpE5wvEYmWUxC6lQvyv5UqWjH1A0chPBRX4oIkJT2vtqhEV0Z4euu%2BZdMHKmsGm%2BH7x27D9uptnOad3aFEBp%2Fvj9maHfgw6ZkflLFQdaEq2ld%2BgKHvCSC%2FakOjCIL8UaLdGzCLa2iCzwCkWqYOZmQoXqUAc6BNoAT%2BpmUSWz3aiwnje5tGi4yZuJBmD%2FlW5rVtUiNhqMRBF6Iwgocnt42D0qaspGXigHLKyQEuWVthE1Rtod8PXj2XljFZk4l05PAXgj1r8CnVNMLDYRCZNQdr9EXPVgTM28i%2FFJ%2Bac3g4htvSJ4bUrVWFRD5Ekqx9poFbOKb11kican0PhPsGtI4BsNmUjN%2F5lVjovh3kRiCBbP23RccgpmFz42cWIFg1Aqs%2B%2B7kJcdbaSDk%2BFr4s8iDp7z7ENQOB0y5j1QD4VlmGZy0TiHPUcNdZlPO1ozjGMEIPioKp5rve%2FlR%2FBa2t1aOB3e9uYJw5zgMN94f0F38lxinQsMfZkdkD3DHG6Jz9X%2BXKGoTzP42Q2tSfHnx78Q2dTiyPa3RoAR9C%2BVD5Hku9cw8G0dsS8x91U1FanSNfbfXhGq9YTvJIrboU70jfrLd54lb2WuVLowJ5aQPxDquofKXKGh1%2BNGQ%2BzYswm67VxAY6pgE9JGuWB71RRn3L2RT3BL2EUOOFj0YbwN47hj1E9SG%2BJTw%2F52K3Z1uj8lYB7GZ5mtRTeNxBnhJogLvP8yvOB8zYufRSJlL%2Fz%2B0dc2OegVQeEQvGXGMvp5x%2B%2FhO95423msjsrKsAO1OYaR8GZOXwZe38WlHzRz%2Bm2wO1rTVu1x6ScTypDiclfLqmRmATT1Dt6bccdZKampOh8hRDEJmxNhf%2FyFifQb1J&X-Amz-Signature=97b1d74edefbe96aa2c30d19525eb11be19f0328be5a911c4a71d747c698cd4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKS6PQP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIEGPmBm4qLrzKOeLHN7%2FkwJpqfxTTUWtCk20E0lBXuU8AiEA0N3AUsXUsDbLbX%2BBC6mRATpWVm2ZT4e2BEBKxzE4chgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcS0dUs%2BgCeVdf0ZircA%2Fmvw7Wn30Fw252aZyq2kW3ZFmbEIYJTm6GyRK2yJMyTegnmLG3UeqDW%2B%2FvMBhfGXfGseBbu5YpmUNzyqoweWdM2cOysYZSvHO3kHb9K1zTz8n9z1p%2FJQPViT5BUV0j0dYu0E8uBys4uqTCeInf923izoh1T%2FsAPCXwiwnfukjXxzpsNObKm1O3lkWQ65tfIIJb4fmILed2x1EKKXjeyZD%2F2aBoA%2BxcWrkhlgvjt3ccO%2Btl8DseonTbNRsjJpeOMVzjNE1cSH2atVf%2FdD0dToroRQBhjBlYe%2FehngvNBI580oSrJhFJ6REiQORD%2FAfrVyIfg1QYuaBblCEcYR9HNTSOIuo1KJWBqrqInFWywxmmd456BI7xInYvXuD1uq%2BzUlRMCHilpBabgCLy6DK6nCBVigyByTX1lpplkEHKDfsptW%2FWDoOQEz6dwOspx%2FgQN3lCn2J1Y5wZaX95%2FXbqMboDG%2Fw7%2BO68S3h4asZ2f1bF9cGFnvnYAHt2iwP3AXmvkG4aEht67HtLJ%2BBOuQ7e4QBonXhnqWkzQyoePqLHo%2B%2FXF33I6l%2B430Vl1KHGX97Sblv9%2BhYAHJhLsI1T56gcoNLK6bueXEc6UN6VtYUjUFcw78Qpl6Mfpuig7bgA9MMut1cQGOqUB0v8jwRKcHB%2Bs99ld4v6ipiBn1WQNGqAyYR2PFsShOQheDSeDoUuhPd94DLpw2ulG3Dv%2BHZRZV2fCuw74fuGOAnRH6LeP1kLDR97Bc2ov7lK4%2BbA4pvfmVS1L9sAFVZSdhDLowwF8atAF%2BsoSNLVwdzfHC8C%2FZmgCVLGC4r1XKyR1Fr02ZFAlACbHykQjQjoKSfW43pWwEOBHcF3yZ3WMwpOmxKns&X-Amz-Signature=daf816f1ec1148300dc215e014fe0f8f1e9052a28a6a5f675a798372f9cc728d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=48e5f132be49075659adc3f0db62bbcb5e3a3690f24471f064605ad1047610ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL23AH5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHc7jpSnyY20DEU8CFtwpTLBNX4JowfCAspGrvy2u%2BzkAiEA3f9vGPPc4TAMZHcJujzkLUT18ogv4y%2Bu8f97OvrsccIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfXz8ErLi%2Bu%2FrH%2BPyrcA5XIRDV%2FHnJQl5fbEeKLCAb6%2F7FHzLYtqGyZmtzWiMg1i6pLGZMkmcE%2BOB9tl72RjjDech5Y3VtlR%2BgfXp8XnT%2FxNWQpeQ28HzjbznFyv%2Be33JibWZMUfPLUfqHvz0hfyrma5k8qj7B%2FU%2FAMAPTN71M5d7XB7fJl6ddKjOfb2XyGHUHwiHCITjw5c0RTKTHN884i38mDQ6dyUsEdy8uFazUyu3ZDMSY%2F%2FN4n1yX3CRZPMGSCvu4KjGxs59L5nFiTOKthndfXkF79jWX%2BsyR2QkkEtFLuq3wTFCy%2Fd4%2Fth215N9SXEDX20tuk9KvKjkTqIpxb04JU66QldbkUdsMWAZZzTZ6iRSCt2K2UlvO8jtKQEd6yN8eb1QIXjbLG%2Fv7%2Fm6T%2BMI%2BjF4LDdKXFx%2FFBBuMVNyrD8NxxKcxwCG%2F%2FSshuhkD0Hl8bi%2FJi7iuWU9SHH%2BhSAefhj%2B5UTi%2FWBRRZCqMfXsPEpFQ%2F7UbpDElra3IvEd7oe%2FVENi5F5iUlSRtU6JURbgqLqnOIQCB8bN%2BpLJP1CGkv08sOkitmHwEF4qtgN1gmm53J57xIX3qTsMHs%2F35iva7%2B7%2BuTt4ZBi4XVqonXABMUF66G1Spc9uarhX5BCa4n5yPs1RDXnKALMNyu1cQGOqUBENWsxMpc3KRpr1IbpB5cataRJnS%2Fo6l4KCtMknwTHwKYGjkXgx1Av4JylJS0jYPMxru9sjIaV0d2tOVPbFc11iedjq%2FWYYBj4NqjMveLrj5VCRQsCqdxDOXFOtYBXjmSyKfFeWyba1rLwXHMiGtZlmPQDkx2vJrECDcuk7ekKZkLd3cre%2FbPskK8GBKn543xANNaXQX1cq6E45xHzPPR7ENhidU5&X-Amz-Signature=74d7085f17a5275ccdc84658c6106cb4b34a56bb12b456946d3dcab31ff70ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=3f16e8f8681671ef0c81e91fd3f2f7ed7b700cb24d097e4dfe08ccc00ea3d73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=1e26acd492cb7b70341626c245553861c5ff41eeaa7fac3b19e77ae2fed6c939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=69589fd2e8ef78e1d2e1e72ee3a5453ad356b10d6e731a8f00b8c261235bff5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=a410a4eadde06469c7e9da6776ebd5df8b62759a587775c617ebd8cdb632a9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=827f2fb36e08e5859429eab1d8ab6fa7637c0e70a3797e737bcb6265458b37be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=d2d9b3ac67050d3c9361118f40ad51b3afb96f37e42bd42070bba410389b0c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=fe190908112b5382c411ae786a69f9a12994c8b2836b3c6fe82b2b703b17d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=a1e17eca67003cf29c07e5efc51f163a9fbc14fea54f8131b2bbef4a508aec9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=ec4a45e106ad74852f3578abbb0b034dd39ec5996b73210673da9629ebc6f569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THN5NZKO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDMgzU%2BYdmlX%2B0%2B1thkJKrz04bfgK2%2Bi9xQlMl%2FhzOKlAiEA0uWHgAMxv8wMIhfDMJt%2BFRvZxs38kJigMtIYca%2BCHBAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwN0ASw130ngdlVfCrcAzK7yK9zeDpgJ%2FEPUoe9mhU%2FcW5logYFgR4DFWjZ0Fm9Verad0JPT3Jam501V9gn8IKJ%2BZN2%2FyUFwgHtmipdYggxqsLdwqWEhZw%2BmxZYD%2B%2BwlN835RV6dh2fay19fLBVXq2r8Sj6n9jlQKKko3XHtbLyo2DT0jLrmVj9liQBrVYz9Ih8IOLAbsu7EQPGWvcuXMu%2F5tJ671XpOf0qfS8oUWq1L%2BeA2B6AnL5gavd8OYhY2i9x3ru2DWVnQLl%2BKXuqnZyT8nUkorwm98YSuRAPh4yx7NPxGSqx4OXGu9IUJyIpp4JplArJkLZvzgXPSjn11I0vBj%2F6kUFQfZwh8SY3CCQSSgi7lUh9xl1Jzx3jetbxmDTbjr6%2FQjOH8hd4zltt8IM2ZNtemaidTTlk2BNAll5z%2BoIi8jvBa1DZP831419I5YBgIYlyDJsi9GuHwCJJKV3ktHNQnQEIlGpFWgolTZNU9KRlZ2xyBLJVKXCK6SNspSqnq1zvtkybHx%2BgRX3QesSuie%2BRkRrBAFu5ljQpL7kpEs1k%2FADNF26FePe2Dho4cq5WwTIzrdk9DidNZNGVXtCVbOag2ofLTPW9ww7DGxvbr%2FUu%2FL9IBK5vJBJMY0sj%2Fh8MsAG1joB%2FXDwDMMOt1cQGOqUB%2F24eA6x6vlBgU9eCH7NfAM1ehWTO%2FbBGqCpCONzplQl2OxzX1Vat07P4cLqDvLwgRFNpj1JVzls95ZI%2B47px0%2BPnRBJGDGKZ4OtqE%2FfnZERa33Pgjup%2FUA7MdaJSDf7zHTHkJHX5LcVSB9gRovZA%2BmJSLD4YgzFHqLoHYbeNRwcGJpKQkJJZd83Yv%2B0wUybVlY%2F1At4yfuUPFyksN9lJZOPo2alq&X-Amz-Signature=bd0d86fad6baa39a6f44aa9ffebc67321cde4348450b7baea76f901b6df3a161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
