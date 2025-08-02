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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=e3e79b1a54142cb6a08f9998d4e0c3a44bf76084253efe38cc4ef824bc779c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=984a809e87961c89d7e5c4ce532b516d0e02fd9239b0a23315d9a5b9f61aaa1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=80ac861d7de3bb537327eb85c6c9645e37fc83adf41b3a270b3775e51b97c214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=8b2b8cdc6884e1195a02d823f3063d570bb874b289e33e37def5c2773b2da927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=67ed69ea2e705211f23507e7a066afcaadefdafd191181e14ed5c4b2a2af0807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=5ec5f5bd5ccf34bb740a7d4b0611b665c46f031adbcaf499bb4b0a680ae5bdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=5158907a96331ffc10a170a2e61a8991955e65fd862123b982cb6e3e3fc56abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=82fad4e2557edd034eadf18c1ac458d5b0e2df71abb5b0f3f9449820661f9b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=4eb49586030cbc57e2c1bb70f70ce5a41c01654d8aa1d795317e5cea55c787f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=86f0a2816b9054fc179e887da23b0e2c95f83fffe288d875de1738e0b749feb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG3TLSY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ABCOlfB%2FfoZLn1lRvj%2FhcbSK3Kd8%2BCWU9hXSZi7iHwIhAPAWDdWcUg%2BUa8EXrTMNTYcnBlFPk64Z9g9ZpyOokIoNKv8DCBAQABoMNjM3NDIzMTgzODA1Igw%2BASBmeIsV8Bs7arwq3AOIkZvJNgBpjcRC%2FqBCB0tGkQWZJNnT66c72iQYfplmtwcElzurbGYJOnTY7NLnjQ4jfhx0pAl4xNUIDqCOFwV4ZpRTq%2B7DOnNgiLdnFyTn5PQU%2FZ3fQHfOIfQNRt0aJP5Yd2%2BJZU%2Bq3jeiaJOjR3lV5YjvdxxukSom9Mn61HzrKy%2FJMC9ROm503ie5VbZDJLnTYlEkjN3fCvIyebbMb4Ml6BjmApLijWqywn5ZmkKSBJt4kfjazZUNr7XeGwbENbILOUbi%2FOvlFZ%2Fy53Bs6c9esxWFWgMrfFNcSnTrXqtn5X98D0djTMAKF5f3Zw4aU2rrlFijVNLR4cw9LaRi7KMtw6997g1yt%2FwLWzCrlmpcjq7vTrZz0mHSvY3IuC8bSKnmbiW%2FTH3NyQ7mS0qzSC6EcWmw8Z5%2BZqFsj8Cvf%2F8xv3pJ7%2BS5d3oKgUKVDqwfq%2BYHw6xWWbG6%2Fj98LUhr3BrYmqHsR0NU385ktOxjyTcgvBI4EggIU2%2BamtSiwZKltQGH0TmuKMb4U3%2Fx0outZf5acpdhw30hMgEvYTA8HVNwfotES5Gho31abzbJfwiA37UQUVvgfxLrSYdTsSB5Tgqv36PMucg1XrFVCAWKtHN2VWC0HULN1Ma9QPrFczCe8LbEBjqkAXDGC3oa6j6NTzLTXLaFxM%2BG28vFFgHcFoifh8hGwpeOSPYCdQ%2FvWEwTMDqFc5n3CZUhop24ezzoSDelH%2BdHvxyDJBzw%2B0mGarjrn2U2uvrYGWFHr%2FmW14d3s9CSbr1l%2FUwlIyN3wr2qhZiZt7dpxHzPsAyukaY0UgRF49sAl%2FABqGG2Q4JwHbAKx7cYdZ6JN%2BH0uyemlpgSmkSajg6AIRhvMELk&X-Amz-Signature=1937c0780276ca4b300f09a892fcf80293ec86b8ab46dd76d1aaed1b83cc2e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHCWVGU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa9dXJvnK1twKQiv8ZWuSBoFjS3g6Az7nzTgDmM73YLAiEA5kAH6rqDrfzECKxJMgJgg0S9AvD75r3urka%2BMvPjllwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNba3uqLF4VYpS7ShSrcA4JZOn3318mw7963LXjIpwj%2B6%2F0dIjHbIPC4qGGoORni4tZvb0SarFvq%2FauHhWuoilLcxe1XHlx7PUqH0f31hxUfvDXH8lH%2F04gY9IAZc4aABzRh6uw8i9vnoqTl%2BUHLFzBhbJG3KsUZi%2F4UInPY7c1wnIbuBYursA5N2%2B6CkJbR0KF5D60%2FqWXXcCCkDZ4pNKPKOoTiv91fNf1IeNtpMSf7RXEif10YOfEdM7n%2FXYrhD9CRG8ReQGUxko6h4Du7OguVAf0R45NyOHfjeqX%2BIBZLpwrtR0vtwd7xp5Ugt2JGWnuMrq8Y6KAq0GixvaeLoJBGvDYdB23Tn8UUcuXiGPTChMOMUpwEzO6%2FZ%2Fs6hd79GN2EY0loAzsndIPmKl7%2B2EX%2F46DnNXunTbc3ggR%2B9f8TJXk6XnyvZsdapYMRqKRIc0TgJSUF%2BWGYYNWGJO%2BOV65CnVCRDY%2FS9kwDN3o%2BpC6CR%2FjSlYRTDAyJbYj1x9X7p5uCUJu2RkO%2B9ifU2UoKdnQHcMWRco0J7Oqs5CLOvkaMOEmyh30dB4aDS9yvAjC%2BnshBBUg4FL72akYSkEtSdDb6EMTlGk0gdbZtP396LFWEdy3VU%2BYjsjVzfc%2BLrZaSddaumUsgeZyhGHCDMP3vtsQGOqUB9pH7%2BunU8nAGpvjblXDSvdl7%2Fw%2F27dbDA4M4BVFg78n8AJGZKI82dBphrgYsJpbhyDaCwZPnnJazdvx5sTKG4Gh59ecISkFtFMRQdfKEoHmL4MZ0jsLFiI4a5OKXjIpzzHdXaRxXjEWJDhlVAS66NSSXv%2BnfMO%2BODUK4aQPTEQbaoT7vYL99nCbTiqWkGXGq7w3UrTSO2mxMLGd0VWbcZCQaVsth&X-Amz-Signature=03e92e5fe676a1e35d310b7527ea55354e9e9a3219c4628ffa9726f55339e4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCMMFT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVRYkyLb33NQ%2BQipkpdXCAXWB3ZNT67u9c9uYCfNJKSgIhALoRTzqcYCMmytPqeijGXSIZU9m0AI2wivh240LqyiVDKv8DCBAQABoMNjM3NDIzMTgzODA1Igxhn0OU5LHmIRWuyPoq3AMX9hU%2Fiq7uS3AdckRtJoCPabkzSXZFWiJV9cQ2nnby5CngdHqQxb%2FhlqYNnvFGOU4B3n38omfMvZyB3OUzqbUHb15YEuPX4PTAEScWWE0eRMCkgKdGSV4g0LO8Pb7QwUB63jx9uh0NV9%2BDriPS4kmRUywZDBvI2HW0LuvfkFGTzgyRx2xhkF3lRRU%2BqBbLrGjb%2FBx8w49E7YBomlfMCz2diP0Xntw6vCmKbRCpR7Wv6l5ybaKHfolZiBUUcidqiRFYvRyWQYH8ijh8TppDsG%2FfTispPKLENS27U2yqJwF62N6x3%2Bj5yU3JSns%2FhmljuX3floOHB8nl1URQlRny19y26pBYTl%2FjxRhiet3ZCd6LfjC5kO4kJBxk1VtRKsT1ru%2FFkdiNvuRakCI6ROPRdbrCHbWIwqTTlPGqBAHXgkhafmeSgavOlyIWQ9F1mCAW4DyTC9%2ByCtfq4L06zLcR4qh39F2dyalhXUd%2B%2FA8S9RbK%2Be0xnY8HmavITCyR17F1%2B5dRCz3usRiUMD3Mu02hbRzxvMhkVudh1YKALf8HW0GUwAD1U006yR1ahmL23aQkVvuI9PLJFadnesGE97qU7XAtOfj6W%2BaL2Uj6F9VNKSm9C%2FPR8GrKFGdGzo4FjjCo8LbEBjqkAXlU9CNT2GSv3dJRK4W6F1T6Q%2BgUckx8ZmdKgQmzefm8nqOk8RrFnF7OGowQJTvlZ4lI67ADpmMZKSozhHZTL9ho8TOPr1aw%2FeyS46G0OmRNv%2F3%2FGFDtP94bsiYCDiP6jfzAThynmUfScyfvs6N35AdQcm6a%2BROE%2F15%2BnOwV2BHgOvH3z2cvKa%2F%2FpQAIcVMp22lXT40cE3H6OqtMEwmbYO7SniUY&X-Amz-Signature=2c0cc463089e4bf60b87c0216ee45b28bb879fb87c80b502c08474317953319d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=6b9e3ace9b39e12f9f60a12612937727aa3b7f6e22e559d92eca4b4ab55ca4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2YSDO5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz3nEMD5Hq5%2BB7zlYqxkKBIxR5vQZR9UKOyfswvKqoOwIhAOz1NAJwqocLJalNXzK556X9c3FGOucL8oi228ciC7rBKv8DCBAQABoMNjM3NDIzMTgzODA1IgyByb5yD8yOHYC1qKEq3AOc5mMGAIrTOPLCEVppxDHmiGz006CwLsOIOat7KFCb4XFxDgjfYa8BaojDGiLIu%2F%2B6ncKiXGRZAdmA4YWb83SCykC6nzaj7eAUfEAzl%2BLi4FRlZ3VUrvKeJk5%2FbDvxm8bEDZEvxzd2NOIpQju%2B4DL5RglB8wQHBfMnUA9anvcS3yESKOI0d29vmI4oNpQg3fze3yhb%2Fk6b%2F9ta2FHZz5vrehFCvtG6xKkgJpO1W0QY6BS97Sody%2BTftbAn0%2FGtERVEiuCTGVyE7K4MhuN3BoRmyGaw1jrwkbBLU3FCWAdtHsVqXsubF%2F1Q1D2rTa%2FQOVLLum%2FOs1yd20B%2FCZYtPxoJ5Viob%2BixcMb6f%2BIIhmU0LO1KySlfSK%2F6ZBO4wankbmjqpqAuVPUlajcvoYUozGqwU4ebAqR%2BuZLAlP3lPOwvXYeuhHLU8wlmfwyYOIlLv6tmWW9wK5zexzfIqFs2N2s2n11Ana5b%2F8XZPlPehOifne2VmDLVoQjQbOj4FLwyVZf1XS26xMz3pDC30S7IpoHEgJYKuVcBZOR0t%2FBjmmPKnnfVHfEHdtkh565H9McJhRTSG2N8kGsn1lriWypJbNun6oTG7AHFnK5Ln78HQfYO%2BnsmkGqjSZcpxDhrNzCU8LbEBjqkAa%2FP03RXd%2BrcOUW4I8SGBnNJ0zr2P2qADMThOmXxhwpqNi0W6KvNjZGo0Fgnx5%2Bizx01o6siCt1zUb7E11x9TXfGaJPZ3w28j0FUnfP4Nbm9hAYc9fxtj7YNn3CxjKfV3qs0Vzoh000PP%2FvStZJz%2BXgMOWU%2FyD%2FO6dacP7hu3bWRuEskJciZGc9u0f9XHzgcUTjy1wHLgVoaH1D6YYn5F9lgq7Q%2F&X-Amz-Signature=648dcde53d9595de8199e17c6bd4174a0293d62271f8c8538c09a0a2989d52e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=5a3ee8b3b966e1fe809982d6407ba56d9e1fbb5e25c24c3cc87cb6417b31815f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=c5c9003f8c964645165bb2b32d02ef57314375bff885900fca7b6ea8245d38ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=13da60b659b2ff9ce607b8da1a915bffb4144e007d67e9fc6d15b957e0d2dc83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643HRDSUC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGkZ1f6kNu1XX3B2vANg3INREiNaoKQlg0%2BhYUmHr9%2FAiAEQ%2B1276EZAy75rR%2BXzTqk1rx%2Bzwz2th91%2Fjyb%2BcAX7ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1DOGOTNoxLoMYpMdKtwD5Y7FQmZ4YRTfueMxfriiVxBCckSd47aaBe4blP3dd39L6fXcH4Px105W%2F6mTTkyn0AurxwOeY9jJDY1QNWcsHYewiqd4P96ov67KW2L%2BbhkTVsk0OSWWA5qSrQmSvE5LDXIRTwdbLItW8m7knQz6A8PA3bqBiUPrTxEvfZB4zeQaGcydVn59%2BoiKmP94DeXO3jZkfFtvfFKPW%2B8MBID2HeG8eHzSQH%2BKu6V2QhAMrx%2BYPGl%2BivZyam5v3A8vUlCDmlCUpI%2B0fNsRkNNcKqhag0nB7D8EKIZC5441VK%2FDA59DBaz5YEUWEcMn8NFsqc7lXHN00jpfjxBROIoTfE9%2Bs363EC0KITY4eHm2WwHdN6KYEcrUcoZB7y%2FpVkW76lbyZRnqobEIAiqNVD04Ole%2BQAoZu0Lny%2FltZspntmNSHXlHBHJhFlfccGKURrMejM1WQgmcziHr%2BZUYx151Ad9yh80n%2FPJ5PspQ%2B12TlTaFDsWiL5MbX5OgX1%2FeWSRbRto71NDtcQ%2BQ2lG8sWMwhjCCcnuGNGp3ReMNZqq8lbEXbpAqtL8Tfl%2FJzt%2Bci%2Fow0xq6arGluVrLRuw9bHkB7fXAHq6CRITT%2BugtI3j3pZeOWHu4zdy9DLiM73AkChswqPC2xAY6pgHxIR4hKHEePR6%2BQVJ6GHzOXk1FtbiQdMUkoPFNeMbRPIhR%2BzruliGiEby0ZMXA8AUmomGwgwBuAlfmMpfg9TVcRIqYWLf%2FCpfqHvXFl47UPPn8gxTlhLJjf%2F2%2BMfBUXAYK8G2vvGkt%2BztQt58kNnwPBx%2BCiJa2rpsBIhab6iLg8Eprau7VLhFB7CSQL5z%2BOFekBkmGfIOBiTUyE7LJH5%2Fi0dORRLbD&X-Amz-Signature=d39a6ef89b4ad494e389d269cda97dc9066d63e1ae03894109fe3aae0b582912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=ffc2f8ed7d8e26e90869790eef99d3790b8bfa03442e5cfebf2ebfd01f3db921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5GBXZK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSfug8FQHhqq5CytqpHL2qNe2I%2BCopoOqwsp7iSL3kAAiEAyJw2888Osb%2F6X99vcLfmwjfcF95Vy1oF6TcPSUQWFIYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHZHl7zVine23ADMxCrcA4Ozp%2Foz3q5m2w4TI9byvQkpSyp7aFWTta2Sx8w0ZwnbJB2RCcVmI9Hwe3tAmwbyplXqn0S%2FtSwQFNEGpoSpuy%2BmvNMlmg9YZyf2lo1qkcAxva2QbDr0THxMsOTfJNPJw934vkVbSBwqF75Q2FARvjOk97kyi4IEAZnK%2BHqkzduJEMPy5Q5SOVG3pEQ0j0oIITl2J9PlFj1nZjBiKjviIZi%2FiYlFbpLeLNKnCEp1eN2lxgUDF5sSG36hfcj4IyIxJhZtjNTV6Ue%2FQLcCvvxzp5XqBN7vz%2BA8LVgz9CdxiVAXSdi%2BBkJ%2FngePTMeoMpy%2FBCvcENYz4FhAOYHog0JfQHS1DbCsHBP3nKFdlr0%2BhzWXoe4gsO%2FNZ3csfC0XzgGE%2BKcVZvixY6ZN0C9rIAk27%2BRz%2BlUBGtiSW40Ec3vY2MxUN92k1npegjzQUeWFcbQ42KuczXK%2Bh4DFgmR4RKsg%2FaM5VHmKWhtTtIS9LAYOM6uy%2BacRTAvlO%2FOtpze8W2wxvimtaPLbvYpqmatmRo2vXT0MABDbHm%2Fr1C54oI1FwRgQuaXhS0VGyRwNq4TbpwGBBfLgOzbkmAY7G3n3%2BhNOPb%2B30wm8wssJoH9Xnv%2BGUPmDdfnoiVdhBzgJGtMYMIjwtsQGOqUBYtS%2FCvabmBeWrLsUh%2FPfujDwhGMuLYLu9CaNdf%2BgIbuLlD3QpAyt0ZDJ9BI3r84a20tX58V9ghj78bnsMk6EIPYiL3yLAyfNYy5%2BSCCujb7fPKEdv%2FCLvWiHPi%2B6tRWLCqvRitjBo6k9mB2W7m2j2GPN2h5oAH9J0K71%2BMmz6%2BX9rZQKklWE71dtg6SmUPI8E9z1XNwH8qjSk1BYq%2BnDMn3TLLY4&X-Amz-Signature=59a880907e79f597e1c60ff91f2b3d6430f1e1e06664e420f62fab1386b61891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJS4AU3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5N2XVpZP82%2BkIYDi%2FU0KWkuNAiQFKwxymJYHiiL33YQIhAPfchpWmBH8h7NFVSCXrpxuig47QQ7hH%2BM5txWu3928YKv8DCBAQABoMNjM3NDIzMTgzODA1IgwFhTIS3p3gCOo4mKkq3AMyXM4EadaOQF2yJmesRJE1%2FPq0Pnu77oWUL5iHhxhuw4SjNDQ0JyFPslTaFbN4bctxA8pQhBj0%2Fll%2BfnygY1dOD1mJeel1SQpoRJPiVw7j0FO2lJpoCT1qC7r5SRLXttQqZ4uy8D4AXZA6E3bQSyiGWf0GFWVqGBShclODTRm8QqoZoHuV4W2nelgcTl5m%2BZhIAyZ%2B3XMrgPMoHquC1sX4gM2ig87ntoKt%2FnEXtGOx5ADVb6SYJ%2Bu1AcjDcfSO2nlxxxZQFD43ZCENnZ4DjqvzlS%2BvRRP9K1oLZeG4FxkMhAXO7ZNZCo7NnyqDby04%2FoUHORzdOeJSeKj%2FfCpa0C0WW%2B5ZHLx47PNGtjTSR5Lcdo3Yl2%2FZ5Jz1Q7%2Fk%2BEQfePLbAqSC4KmTm22W1%2BZ15RX2zGYID4yXrOrKZCeapruiWfaERkqsvL4fp8qm48gzWQNw5HT3p6EsTxpQdoSYde2XvJRF0ybl2l1EyaYrNyP1dnfuraWXeQ9QuJpRYC72HVin6RkiWiEf%2BnCjrDXsOmG67O7UEhMj8UBqYXyD2EwdEMVL7zSb8nWGPO2TWaBxkjU3FnSlDjFk8QhC9hT2%2B6DUTYQAJU%2FNiMuvSZ%2FgFCxCBaGzOYkX7%2B4oVpQu6TD677bEBjqkAfjZ%2FImNjvKnn0dGMRXytxC5JN4xRThnllllPK%2FJvKpoyUBnShcYzygE%2BrWzVtcwTeHthwHPACSRQHEMkC4CzNx6uL5RTAR9kb733micNopebITLvnJ6KrdcXoNOranyF3hkfYBBGX6wS%2FElT8TMmV59tb%2BAzNbF%2BAEoPeCDlbRSZ7ZigDiAZRafYOlxGEj8egSldlBJtMswA%2B6ECObkX21lCT5f&X-Amz-Signature=904041579d7e4968e964f375f4c32ae369036b1329743d9884ceb9fc5c0d1dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPAXOLF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7CnaM%2BoaF2my%2FKjUUN7cBzqcRcKtyfWvNOK3i57B8jAiEA4i4ee4kDF7u02S8GANI8lpyXCmdw6Iu9YIzArK9jPIUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFLfxpe6g4RrcgQHBircA4zoOZN1hqKCHKUwoZiPi6q59tcDi69fm0R0h2%2Bvb8JG9zbipkSJw5Xyh%2BPGm9Q%2BJ5MsqGbWtsO4iGaahdAW7Q9uDOh7Ldyd96N17m57Me0fNnEuIFuWVJWs7CPjLv%2FZ1SlOOTrOZWBCYdjMw1h06O2mZzVYJd8Qa9AGY5YIRKmmU1Ty9U0M6QllEW4ugKnOXR2zyxHm1%2By5SuP5X7JC0D4jkgagOF%2Fta8u%2FcxYTCop%2FPJSF8BSz03YsSpw0RbExmNsIAugzMcYlnzX%2BIMJ6Hvk9mh3Nt4SvsrPhzkRNTdI%2FrUj072SwRZ9rCVajYmCA1NnTko5%2BZQDKJoy7nH0dfh4CZ0wFXPeK2jBwajMSJfgWZZfXa3HD5IO2Cbx6U4zizHvM6kMDgkmr%2BrGndjytTCH6o%2FY0RNrjdSzCKn9wQWNyVb4Jffl3a99QIfoCd5kFsZq34IcvV7%2BJR%2FMn9ENIpzgwH4fkCwi0qej5pBFOpBQm%2BwQdo8L%2FGpxHgcUPt%2FJ3evPAZofVoIiWn1j5DCgjVGdH4sGhXtxWH87OG5j5LOTBj%2FT%2B6OjsiqbgfOwaQljn1%2Fr2eD%2FXEMVRdSvknFqKTJBhJiwjY0%2FqTPAM3RL21zcUkcSFgRP%2FhWEO8ePwMIjwtsQGOqUBi4xYINoLi3736UWygZWSp1ABhRcr0iQhjFLw%2F0l7aKm8oCwBLCJrIrsDZdXYYR1ddtPeUgs0TwwHGbWjIQRCN3iIBI73hpH5IxIhwFjtSGByiyc%2BiaONISZMKTwlAoHBNe7VSNvUjhM4kHKgppsIJKB9jN%2FXwjXfibBR3if0ie9s78h9C8ikTXOjyCrVi%2FW8XbdJCEy2qKcoDUXea3k89NuVHTn7&X-Amz-Signature=8b0c39f5a1a73a32b199d5e72e5c82e7dfbc668b7668d6bb2941b42b4d9303cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GGZQ62F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjl3E5syFvp5VCTeMI5Xa0iBXJ56m5t%2FWK0SFdpsYyIwIhAOfs%2FGWeiEBdujnUeJAjkk1hNejdHNQoH6ecCIVXeLVzKv8DCBAQABoMNjM3NDIzMTgzODA1Igx7rRJgS7QuQu4O62Yq3AMPLsvx6R1plFErovLZ8YQX%2FPi6CHXqwGFXMvFrb4%2B8LGpWDBMa6GF0aJKgRTS02BtoC0mnOMPtira9N3EpS5MFo3msRsK7Ik0OCOXpYvAu1kw7W2TbTlerl2Q%2F6xSPHUiTA2UNCKpXnZnml1fec5X3x1dgc1WMDQBmLDybds8cl2K7V%2BG6TuaKzbKFCfwsOh68AewIJBDD1%2FnSGcs7f7JXBHR45ADdrAB9OtcX%2BJMKCeKry1YZL9EgDrcxeY4zgD49nmK5mfmtYsgcDde4zk62LFJYSw4hE2do7MQhytvURBVQkWi21U7u%2BArJY07beWApi2%2BgxZebYPcEdgS1TiDK8zIXLbVyN%2BhQph9oWN%2BVItOj%2BbYFUuPpNLja%2BRUNd84fD20rIOwJ%2B1X042ufIqTDEr%2Fbm8qq1vYmJMkuOpUQs2cv0bJeHepVzwa%2B2L24Xzb%2FzSxXeH4B9Xu22GwI5r%2BseGfzg1gxhEiJv9RRIy5idIyDMjavEbfHQJjdO99Pk%2F4DZpiXwEWCl9LIhPExkiTCmmsgoTrogssDhnKMTgmDtW0p9i6uhmSnNcjWYfvMdYeMX2%2BvbGmz0x8ORCYm0uok8lJ1BOaU%2FMuu%2BujMlXGrSJB32qJGS1SdiwxYPzCC8LbEBjqkAZrNfBIPLTTTaK3OcmKbUPWcrtpCwa5uUMqf2OHQ%2FIPyDWZYuIh%2B%2Be07y43fcu38QcvDIjH5Q5lbyDvNC6pfOGW2wyna5Gk40spRqkWZsK7yuN1osBO5Cz8sDe6j17sWm5q8AFVg7b%2B1o1vatsKxODUB44g%2Fwudpg2gy3t9oVOdOJKwmNOF%2BfOgqoGvvDs1110Zfi%2Bq4W2LioCCL8JLvjUnBOnQN&X-Amz-Signature=619a9e0b547f435df75529deff484c722d633215c27ca7f1a6c32518a3cdf365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AG7BTIG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTLsf3RF%2FLcyIBSvnpA%2BazEH9bBdDbRnsD4I0aqRP73AiBK4VPtxv2EHbu0ewqZ9iqmmqyWuFnb2aGHvmiK3H3y%2Fyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMql1hGeomPhwZQ%2F2NKtwDsZfbJPdjqn7ExRc4ZBCvyW2bg26WNeKtlfUqx5fA%2FkFLzNXZWHa0YBxAcI5f3t%2Blo%2Bkj3nirn31Ju%2FCnN8Zu95JXWFU0MgyayX6A5HRwwp4efqy5MSap44FXCiSceRdQIE2vCK91M3ojt2NMJfjPVHthUo9RZUNACfarbevpFUyEYJlYDhQfrWDOpPqV8xiNinzD7%2FHgzIN7p5JlUWYjFHSQhWUPYKYjcdi6gwDZmdukbgaWPaEsPx%2BxNTXaQin9gH%2BV3E7yfcyxyHCiKsl40Zvvt%2FLYxpLduwcLC9T%2BTH%2FVJTRj1KTYx4pPDoMeRpAKAjhVIdMVsoFnxC%2FeX02V7V%2FKy4O4F20zG7pXja6SQbpvwd3RDSjU8KWwtfBroivr7CE8h0y3Py3i3gBk7vBLT1bod9xZrA22PRrqbstGyUxHarIm0X1xZecHEn1vrreopbANaN%2Bcy6LD05NxrVmbn8tUkpBmhm1uzR8ZuyFklq6nFx1XVLz29oYH9U41Phm%2FA3KXEY5r6sy8wVcVIHMKiyw4m6dBVLkW%2F6R7DkCBVzMsd0LA9gsezRYJ9KsZ0vJ7XNHRLOU5o7%2BUcqXJWZzBJNMnYP5OnfouNBV63mEipbO3EpEYQD%2BsMX3pz7kw9e%2B2xAY6pgGPnoETe20kt0sEfIaZeAgVuSk%2BRHGLxcNun6oMBXRBrrsHbP%2F6cv2K2nwv7WAVS5fonaufKtGTtIWrVrZOQe2oHTeiZXV5hg7JgJOk8rY2UPZfAIGoWJf6T3hM20YBBXPJcP0Lh8kKTY8%2Fzi%2B34by9HeFAsJycFJh3zCcNNf4WrZmixdpgiY9W10lgryQ72NxxDwpfST%2F51qhYWLRKBtspEmgCDhOR&X-Amz-Signature=07a316b4c57c1609b43438d6bc6cd9eda3113e83a491eb0faa3a8f44952ec940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=a1e4a5d300a92987617e12e69fc4f91048cd8197599468fbecaec8ad2e6da3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEFYPPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtD%2FpUdY35pLuRF5RU%2Babnn7qzw9%2BwJ%2BPg220S3QeZ%2BAiEA7GTKIt68nhz0HVujP%2BZ%2B16KvNo7b2sl8zj9kYCXguGkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcIn2wtpoEdyacbsircA7dSnQ8HAfrZIZUegLNk79jcBpyP2eq%2BXbkt3gOw6muPxuBwmUyO1wwECZKqrxDI%2FcxPW6V4EPFHDHEPrGsvYNvdayfwggKJCJUAs5mN57%2BMn6b%2BJw4Qatq%2Ff9s3lyvyvJVTHG8xCJI6Hr9yGWHjip5OEEbzgkaXIWvuCndElsaRegH9p7fL0B3m1dfNdu4BfLuFw5tA9gg1fmZrJDsqbcotBGHNBTvet1Sqgo6YtD9%2Feqm4zvuZb%2BXSDnWAgRB4iT2rPrFL7rPjYAVi9%2F%2BmxgJBKz6LDA9nuDuoIwpa8mwnoHWkSa6vQzmfjQP9v5ufADKX7%2Brli%2B%2FKh75owXw%2BSVGkRNI1XKouHh7lneAw2HZcssRN3IGBj4bBB6uSFzUdNCmMh%2BynVrf9%2BmuoC6ViYBV0W5Gg%2FuwWbv0xAlfs0cnzKTYokM53awNkqtiq9tcYI0ojWej9cMPfKmelM%2Bjp%2BdvZzqBmRclGVANUMQkgsqO5uLV9A41OzqCl2jsSFijUGa8g5nWxbFjwUIF2lt%2F%2F9obLONI78Z2tTlgwPo1Df5Cj9TBCdKEPcS4rnkmzd0W5sJ9k332btNmKn1Z6KhLrdeYRnsSlstr9g1LLqOeADcGkA3G3fM%2F%2FwoibKYFxMPPvtsQGOqUBHR2n7rLGawTuFrSafPyUDNWWSKOcZ5eUOxT0KwOm%2FyfWb9eEjqgpykuqgoEKYsDwg28HLVkMz0QfO%2BE8habIerdCBON1SOim7s7tsU%2BFpzKzrDmBzj6Y72M5SDHt4l0i1u0b%2B%2Fojjo116D%2FLWcknzYelSGqurzVR2w5BCs9dHS%2Fif7w2v4Pk7VzINYEiAdTDMgopGALi2WYAqqAOXj0zbINHRpA0&X-Amz-Signature=dcc8e57880a2903858fb7a9d0f29fd55d7c3880deb31be8d0b2eff4c256560b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=d60be6283295bc8cd1d92acbe71acbde0b981df8dc58e4469d452fd9f237169e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=0da7fec2b3525ff6efc5ac749157abff91ff231ff279c8c3950f54b1d0d0ef9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=ba854cc6b92e114b68a353ad9aade780e5b35709039be89874fb064c36e45403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=a7e513f98a82f58481df6e1ae7135e4e8f98a81e267671cc2e5a0e544f0fbaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=717207847c48d5ba83e2de6fcf6ce3a4c3ad4c0759ace167f9674b8ab8380e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=a46d6e6f5f5605cc5e4a4cf0133d872cb46a2742343bb15507e499a84c7436bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=ba854cc6b92e114b68a353ad9aade780e5b35709039be89874fb064c36e45403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=1d3aab0bcddd0d5b785b5403b1db939bc46042b86d4fa70a724ae3f5947fe365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=dadd36baa3f87d60fc1efb88d9f14ed98cb194472ad7c9f251683f9d322c975c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFOQL4RY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXtSr7UGAVT87Y1siTUSeXuMpiygffyjC9aAHJdE%2FrAAiEA0lM4AwlT9LI1flTagczMY3jMOh64eFTpcn9mf3Xt%2BHkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFFaYsXFyOTEZbxT0ircAzK3%2F0jymMXFrvCxyITCFurRYmhzGv5C6O%2BOdKmYUhi%2Fq4nLXhmhzWxqV605lLGcIp3E%2B0QUiutFyQk7nKvNtjZszWUE%2BfxtgIutKSdIIlO0x9XIsxKKLygkPAA%2Froep8OJF0fIUnmp3oLEXWljCNsYXV0S%2FRDERn2i9THSjryYbzANrADEotQcPgsFwHF54GeHMxDoQCdesgdOfKoDGK9i29oTBohRoy4Bj65MpNAsm2Gc2MWT7XGUA%2BZWY4djU85cMsju5y0z7jmB%2BK5yC31Hv53VMug3HGBaA6YNJR26emJBUfLhz9fE0sBoWb8jAbA890g5rgmlHRIuSgx5SavSw81CemmnfF7SRXVUFoMizRZlzKHR%2Ba7ScpkZg6vJ7F8fnny710KLXqwK8ZJtafsVVliO8PVH8obCRpwe8qV%2B7ejRXs5Akk%2FO6P%2F2FjD1M%2B71R2UqifuieHBQc6y9eHd4RVKIwvgFv8jGNGEjs1XCYQX%2F0gRkR8AVrVIY6z8GcS9U%2FYA8Z7gYo56ngnW5rZSf5egf6MU28fTnwq4wC%2FiwOK4OUjHiEXGc1OtrAo2fPgPeAztWXn7qnezQ82VPaqft%2FsrpsY%2BH4MX5COaeBMHJFbclp%2FJtELqPBnNzFMNvvtsQGOqUBxJmkhN8Q5m7ssmcucHTltmGVbxiUhkvYJ2UxyYFN3D%2BqVj8EUQ%2BnRr0Er3coaooNk5QtpABj8xZynnGvRIPlpIeGv10Da7dhSM2Ur8QoqGvi1H%2BMc1j1zOTnssjYPh4NOKswNB%2FbLY7t2q9YgjfKrOlCEPYfY5OGN4UM63%2BtFfPGEr%2FOxsMitEPRa6%2FI9UUj4FpgQReDNnjBCstcs5HSeUly8x1p&X-Amz-Signature=68944ff6a0e64de2e5f23de9e5349e3d48195d27933c0fc88919ceafae282104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
