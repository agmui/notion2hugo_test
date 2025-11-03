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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=7481f19a218234fabba308b565cac06dce7b4d174228b402da69c4c7ba5f3505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=d23260149bb33c91fc4166549647097f01a93b43a3a59876e960afd24079d874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=5afe91a6fb5dd629159403ed1786f571c7e26ce907e0cfe02ff6e9033fd79552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=05ba95ab7548c3324dd221cddb4690b7d6854d6bf0c7d948c196f7d18e7629b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=6f732592257ab16cbda84190a2badb64ccb2140096584c4fe0ee1965fc926b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=509387f9974e7d38ad834b89ee306f7f0baceff50a850df6cd27ceb41ba71c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=bc26e31fa6407977d36bbba4ae28204c6565e30d7c0f618b53affec1a6557943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=85f34ac8ed45e02625d6d0c0cee1c3d6f7a1d9e504045bf2d3aa5627c19fcb06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=8e1028ddef7d8f04b2b5156f06bae38d9606e1bc6bc50e0c2f0832d0849f86f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=1084a9a72034319fb8a42becb7f276abd83b257f654516b45f8d5ec524de691c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BYWH2J5%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm8t2%2BNuuvsvKIVVYQvzefgugVmckrMlvEbhPITTECIAIhAOdKazQc60sehqKQIn6W6Tftbbeb%2BGz84ch4GRG1Kl8DKv8DCFIQABoMNjM3NDIzMTgzODA1IgxhClFKZGDtCUAhEYcq3AOCK7SDD8gXuSILQUl7%2BEvqOb%2FfuCC7GD1oi1CE988kFZfQyFaq0qfAwLEQjap1KGPEUdYeksYY%2FMhhvNEXnm9dLVyVRpuZX87HfzTZDG%2BDx5%2BbSxGb36PVTaTCydTSHRtlypK4Ax88oMhSQ%2BH5u1O4whJKPnh2MYfW5ZFM1%2BVoS2iniXkwCqVa8E5L1WfR8FPk1WLItY6UyAfhWs0gTEhKikgLYywQdtEy3TsNoUEjTbLkYj87QC1dMBySvGqP%2F%2FdjS7UAVT5CURnT4%2Bh5kgi%2B%2BxQdtIXwAdVn0r1xYEUlONLXCT2iL1FiBzbBLsrhVZ4C9aanYEyBrKY6gVVU64nYIdg7ExVSBKQVF3nm1PKfgEtcdjcsxjgQruuro2y4uM8e0jICBXj66lghS8zyyxUbdd88XDg%2BToQTYX53QscnC98R%2BCSaFw9pl6fEBi2XTK1GOs9BcRT54x%2Fslz%2FwLwuiPHBVpdsIZ1u45BBCLRGdDKfNfxdiTCAH6uemMAz6tgjBokkSxYet5wl6S2hLswzYsCYT%2B%2F7NiqZRfZuixizfRAVmBLdJlai%2BqLGsQWgcUtnIxGAWr%2FFXZ1N9WcuMC7G%2FsW9ptUJijuRTRyBDcr%2BECyo1awBs8xwiJnSpsDDhiKDIBjqkAQkYmGb6Dk%2FRpGC2m%2FKd7xR7LlWk27duHsY%2B3i1%2BnvqtCoVc6%2FoktxHMO3QeozQ8PMXasCPADGwAfWOOHFeVxWAXoADtznhDQzEMQDdF4%2Bz%2Foh%2BG359X9eeGHo%2FC6CB8M6mvgxPleqJi%2FxGY%2B3Fiv5fV6CWeEa%2F8L%2FqWlcHerCj81ZH%2Fa7MZOn%2BHf0UCNa7fF1a2pWocXuW%2BR%2BtQL%2BSy3yOx4DQ6&X-Amz-Signature=71bbbca53d478050849cf96cb5b95a7af9c27e29d8a2855a7254e2c9d02cb07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBBYVAT%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHFHL5f6gpFn1ohFwUP4a2Wwbl7Fcs5nShLckengVXnAiBFtpK30yWkvp12sbYvkeiYUusiDgd%2Bpy0SoQ2niMVrlir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMNqNYvSynypHOZkdzKtwDuO6ISp4R%2BZ8ozM5pBlQibdLbnsTpjUKKh%2BJk5yQWlPQx8oY285Ss9f0%2B1S7WxVzoPZBJW4e3p2eqBDVObxthUP8BZve22UNcNcvWPDFPB5F4DJL%2FEu0dZ7NdTn0D56HIjFbIsAQIyLkdQy8wD9r%2Fz0emuC%2BlxlDeHrnAiErSylivUy76i3DLAyMXYMqC9fXIZqT8xPg5UpPvf%2BNBh6mOUADJcpYNZw2BpVF%2FLQhbj2HzhDZwsD651FFaEt79ZJVZnwgQrALBBXf29p95BiuwsaYXmGmXrrk7FszC3CDj1zuwQyT8ew5b8GGMYrETJ%2Bhvn9CgP60sR3B1XXpYZk3Z5y0Kb%2FfCQQkZUeliFhRXMXulnCD%2FvSXgI9H23AxJ4ZblZpXVWAfRk5dZVcUykEvBrGgMG6FLyW%2BgVXJJpf0VOI1sAbRt7OWhs1HD54OA3CzVvOF9RmzUhC7tMKLTLKN0xpZlvt94FW7OtBOIDukD1vHWReJjbYx7NLLlPBHp6bfadwsjyBvW%2BN9Z2DjG92U46kRi9b%2F%2BXmj6uLAiRMuPfCGVK8bHDS5d4jK9%2FLBjx243YcjUL4Si1qAEZVr3eCE1HDqBH6MaClxugoq2mUf4tABPbKaIpF714Y%2FbiDQwtYigyAY6pgGbFktPoIoZpe6iX0BNiqnldIE4quDa0knqq5Vi3dmMvVZNAWwbqLUVnjPBpEiz%2BXmBrRWgHRXWEhkQQVl6OMxlpKVm6VAUrzHH%2Ba1w31LJRqXxLyAsJTkVLrrPB2UzpHAH6eSL7IOeTggc%2BY5Tsn9YTB%2BTk%2FEADZx%2FvAlvtebW6v3P5AnKs94TqNk02%2BeTdwWQBGa50MAxUIaHI%2B8uosdeeK9FALAB&X-Amz-Signature=848445c6e5c3f1691ed521c3780299a8db016c72b872c62a777d7cd6b6dcfe44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRSFGJV%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJJ3UNF4Bxx2FMVbV4Hb6gNTyhhPuRVwSg3b25r9hlyAiEAjcSmBqWnvPStph%2FXy3soZ8XmAWZO9qoRPmcUOtBQj6oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPWbUrvUH2xa3WgmVircA0XK2qGG8Nd%2F76EtPay63hf29tTsk2VbgQ5rn1srAda8m7VwSkwrPrCv4ePDJ1%2FpyWigWFJyaBbLa7HfDG6DhrSXkSlCaG8PxRA7L%2BrOTTLbD77frJFkCKJs5ZGmqgkcdOBoEyqwwlREAB1UcF84CM8GLfIX%2Bdbp2gmY9hUmNZ1uUxH3is%2F3xq0Skie5K3oiVes79cvdeyoSfYcf0LlNFkPYXKyYbAywh43PRFgvWoCHZ%2BbNhzWE9508gpMVnVQxAO7IKW1dIz7vNl6fiLcMxrZVuDLkTdvK2Zm8byvE68DONNW3PR5C1RmDZUQWTgJq3uQCO6WBJwuO3KcTMiiZWodvj43pRqeIw7nFPLIUpdB5UUcSPhEZ%2FXo%2FYC2GcpOjyWSip58rj5ggDck9RiZceo2gBtToRMnuU7cnei7pqMgbsV7rVlZ3GLwS%2FJ%2Ffsidrji3ypcGlsYxHLQTnPblCthBvQGNpKbooHBMH6RH%2FEZtzff%2Byr3sEl5RAx5FkeJbSfAFpeaxGHdLYGYRwGv7rTDIPAeIFIzf5fJOlBj9xYXZtGi%2FKmsB7%2FPgD%2BQaHSXVb%2Fig0cnADsE%2BS8NzdVI0wmVNWFDe%2FIgjzDK02GSPwEkZI2N7sDlgAgPKM%2F41IMKGJoMgGOqUBTAip8Iqcrczp9D0hb%2FmIOAFOysO%2FYz96O2SrB5%2FtRQoKxGU6sqMstGGuMAAfboVCFHKmD5mL49DvVejC2T81A9vhLDX3hsDUDcLp680hrAecxvGUeN6YO2a7tv50zt9T478gRTK4Mi3nrLd4sTvtVOJ68fAkJqkRRC59IIgcJnfMfZLKFuDq%2B%2B4IutQ8mO9%2Fo8wLcINwtUjVay41npMUAfChcAnd&X-Amz-Signature=c17fba8a7ace5a21c9481b117e9249f5b12cebe10c7ee610edfaa7cab96d08ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=0bebca449e4f533f2451a11fed8b75c8b813b67e8e473c76fa4ce022b4a14992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLIFUXQ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjuH5bBwXPgjybyA4iph9kkm2Bf2r1bXFPtZquWHwzYwIgN8%2F104d5sXyt6UqSQXd282KZF%2BgECKJhFE9VciDw8kkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDBZkeqRMW0kXSX0C9yrcA4adEmZxLbxShNtNZy4Lwe%2FPG4Im3e7I3JOo%2B9NNasGlkLDd9n3DL5%2FzL731TNrq4MLQwXU%2Fr80hR4aH9riGtkHOinY7gXPPSA5ZfzZyhs1ABDRgNrQINlcFgOIR%2BPn2IxBIu4J9mot1PjZ%2F8ikYkfO01VHzvIWtZB2JaFOR1E358kPMXzBCDk6zmnIJ0SvvOswlGWsCt4k5LY9G%2F01UJjunqwKiTzu72tugIToNByE1r1RvMcx%2Bn1vpRin5IxC%2B8AUwXQlIKXIbVKR7%2BjLi6LQm4T%2FdcxtyWgGqE3GBUaZJe%2FeTKqJGKut%2FMilFH3MPlUFPbQF7ikSQa8nBM1ZeCguUejGA9GN1MM42Je80kCcytzjMjrZy81JDEC9DZNA7LzdO9K0t%2BWNKG%2F404%2FUYhB3eDSYf3FlFQwuq42NFs9%2FIglQhES2%2Bu7z8FJXpJh8qiJiLpFwJjDHM5PRSk3PYm43N4SqOK0ON3sKBto%2BTHBRobvtZ6BTazExVE1x1CXDY9Xp0k5TugVF9f0Kb5TAX7cscK503K8Hl0nKwwUwEDjDVdROAXCHEEwdbw93zDqxlIX5M6Oi1hPRYglW0DchFOzAyNc8R11HMMwr9Ce9fZxLOtmXgBwurz61zCljAMICKoMgGOqUBcS9yLAKgnL3YHI0MyYE65YkJihQdLpns6su8sf4bTtuvjaQYkG1QV5RIYz4HLwV6sh07KXP5kJ54QdtCBfUJPHpsJ8mUUEj5KZVHU4z9CaTSinCNaWbTRx6MAzqZY00PzHKmwlYPT3J02B1D5mqAd7qDKOpGD9Bhbpc2%2B495%2FOek2xr%2Bd7UJ7eRvx0u7p%2BoXUnufK6eClOj%2B3GtZbv0Obc0w5b9J&X-Amz-Signature=907cba032fabcdb5e23905080856f34d72a93d7ba0784799b02dd6ce3e5cb23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=ead38d54683a9449d55789e931819da08607712e5afe8709ae1c40ff37793867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2L3NAJU%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpiPBfbPJ3MMxtW6f27d%2FM4h7qcGK6dMRg%2FgLo3Oo47wIhANglm7INb28ZedHTmj3yyfKPenBYzXc%2B4zol4wvAojFnKv8DCFIQABoMNjM3NDIzMTgzODA1Igwr6W3NkTv6Mkj3tpAq3AP2rFJzWsm8S%2B8ZwbcRh5vkw0ljv1nXhQiJqTEFBFHWMhDzWMWECIo%2B3K%2BvNbJjv5f37BMroLFQL1f9V3M0nQNd5DsXpnRQ8x%2BZris%2Bz1h%2FsVOs3ds8o%2F7mm6R462ImPrDKToTEzMw35E2SjDxgIo051XMneBc9iEnSLxxMHHrdgAXhQjdhJZJQ8JOcLim%2FHk4dGaTRDYhI6bcCu666%2BoyikpBRgjhKYzUF0yac4bT1jtO1MoMDpUHkHCucqVS6fhqNeSZrLvlWOzFkDo2CxaHOQj2f2Y15evDyCTvEdSj%2BCCZ9bS6LpnseZsB7%2FljJPTGRCes0WrMJ%2FYbCw5XBLZmmGR3ZD0nzyh4G604cSeMlh348vTeDBGTglENOQFvWyZeJW7uE4rr09gltPQmpth6z8lOAxrA42txcX7ioYiWKWD6eZgj5tqsPNzJ%2F5JzSDYyE62OglOFajRrcVOMaRHQyIf93rpfHyGru7GX%2BbKgwbNV%2BRR81nmLtg3DMAEfD951WxkBT1rLcjtMlIpNpIYOCndsPZcHCFEnvibxtFSSNNm%2FuEgK95FtmCveu5tPtqTWr1%2FVklaUSeDJvsdiMWNTju31Qct%2FrXdnhYh%2FE0uAXbnBAfwmHJqtRaCntUjD%2BiaDIBjqkAf8x8E%2FpWPd%2BSg3NOval%2BhyXURmBDvOoijX1JrYHkoN0VoGkP4%2FD75YsWtlOFGxVttzdISWRR%2B6OyPHP3H13kUadvtIUp1Er9xsylf53jFOAeeqt%2B21q%2BUvbEgIn3%2BBHwlhNlUSaPMpZ057inFQ9zXsa%2Fj4MNcT4f9D8gLnD0%2BimyVGHF3zeB88ha%2FoUNbAo3IJAcMZN0iHWFu%2Bu3qZvSdnRvmbi&X-Amz-Signature=0bdb9aae4b5ecb722dd9067bcfc323d22a15b980a2b33c74262b29e3df11f8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=386a62f3fe74c366fa1549b836510550deb98c357ca627df9de2b8335bb8d2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGHQVU3F%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjwNcLWEFJdGRvTr4dk8lDWQWn9Rz22MJ%2Fa3lXi517KAiA2iNsZtaAJ9AzhE40vOVR12CepsX2gS6DpbSTowm1SGir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMSkyUkvBDtP8oXtqsKtwDZUeL4rBgL%2BJAAFVvc7hYTU82vMoFHxjvnt4fiNXWixVuEGs9MEBK09LT3n8Rl2yls46GfXRc2UuJPVIjDY9L%2F27xvif%2B1XT7IAFNXsElx6qAg7QAJ75cfN1ePHWp2tHI1IEqdVEFxY6yTlbklTje9XHBY%2FLT%2FfO7tO0xjZFu1F6G4q%2BD73r9xcv%2B2164mUKJC%2FgZzTj4u5YavNC35FOyBmdm%2FlN5FAEKH%2FEuFuaSehc4ftYNAOa8APZohbRg9v%2FEyiPAmI13kGt0l4QKmYv8haQytdYBplPbw8E8grsvYtbUJlKhdC4fwcQkj76wvoMr9eDZzBJIE7rwtfSp0d7Q1tYj7MHkBF7bdfmdmem2QghUO6BB%2FaaZuwq8ErYjvu02CLNrRot0Vp1Fwv5BzLeLc%2FB81Aov2UtW0qAiEv9o57RTtn24iwKo%2F8vaJ21JcCbcyVRIQZmmS%2BKz3KDqsycsOt4vBw%2BM1orlX%2FO6uhnMvvovDLLQD2pAxqgrDw8%2FDVOApKxyILZizYmR9R0vqbc1PU6aTSgY191c9kN0EQje4%2Bi7dCxD6HPnIAbd9loKIAQ%2F%2BNuZjBqTNNk4jmxEeWlpuKRs77s0EBoBhpUIkY0%2FExeozdYesu4VTX5h0FwwwImgyAY6pgH%2ByIHkOWGHVutGFJFSBZInCw9NwefOZxDZD6x1r4n5%2Fvil%2FpYo%2F7wGzbqs%2BtTnZMXCmzd8ew9xiDdeIHNHt23WZeiOVIirVoVpI9a8l01l8d043SxxYi0ppIrw3jnscd%2FJoXsq0mS%2B8C%2FR%2Bxq7Ov29bMuZhOe6nt0izZW7C%2B%2F3X%2Bna7K6j5Ht70b9Xu4hOj7HK7JCXDCwIIsAJW7sv2OknilSW8MQL&X-Amz-Signature=e287841af858581bae1bba2eaddee48cd3e260aac4a8303cb35cbc6449845fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=ac884ddd4ec44415f3235d7fcfac8863a78c80cc1511dc70c6578971e8a04d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y63QYLK%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBFVLibgXfUBgCY%2BsWmT64WmUVB6jyCA9fOZRMLMAgKQIhAOUZHXvfLcvgyMLWkr52vdBTDX2Mw0ysxqK9m46hbmPIKv8DCFIQABoMNjM3NDIzMTgzODA1IgxzppJztmAkViZwsb0q3APCGC65k2zh%2BUdmkvfC6%2FAD%2F%2BQ7S7TM%2BiaHY3jr1SvYhNUxMvn1GyKi4Db7RDlYlW%2B2Aj6towYUuJwpgzVhKiR4mGeYHhTwm2%2FB71rS05QBBM5DVEU71CFvA4LmljnXwsBTdoMFcFKRzuDLMIsIA4fQC3jF0Q%2B87kzFUsnoizT%2BHYLRc08TdNykmU8%2FwFxC5lwqjL8lrpHrA1yUxmOZKlyydw8IXB8J6UVXoAJdYPEliUD8mzfxId0Mynth%2Fs0pBwS7GYTulErVuYlNpRim8WL5q37kPuBsgkST5O%2FUaxOa038DjHRuHbuGV%2BZzU88v4roV98zwSbeffFV5TqATCgeK%2FK%2FTGgx0MHsJnITc%2FLzTvH0uZhK9t8d2h8FOrHaflSv9Fy1RDEqNTlgEDYu9sC0nP%2F1JJ8yhI5oHb2CP%2FEaCnwCfKM1k1byazpPy4xgLeo%2F0lyqBhznG5yptcljOPeov85P82hgo3dpgxweh88BOW3FEEG0tsFc1jD127K4eXgJT28850AvJH%2BBaz1bQ5ouPujSY6FtEuz91LSUNbi6qklt2bIsRAmD5lgWA4onRpzUTS%2B3yiG%2BwWBjQXcuG4P9bv%2BzR5mnH4R5m1ZJmfO7kStxx2UXYlH6We9faeDC3iKDIBjqkAXgMVCA3s3XI1en35MLXDPu9v%2BY5CxIi5ocTPuA98ysYg2UpuMYvNSGyTxok5u3oj6xShzSF1XhJukbn6JV843dVo4MGDBLC5TOY5zYqvL7%2F%2F%2BJFuelO3%2B6SCPFmjjuy%2B%2BwjS1kfkN%2F8zOCRX4j1piEPKkNNkUIHz4hl2zZBT6%2FnqPv1k5wfXidiIoVoVz9dKoD4RwVgpr5yHOBILMm5CVFPujnn&X-Amz-Signature=a76b17256b37f924a2e9f5af569f2a292fe285dc4576fe56f3d975c3ca2bd5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=1525156ad03fd29c0c8d1e6e3e031d1ba260455382d97c51e5aa6bcc370f8c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDNZ52Z%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXeGk3ZrjvOPclvBAMjfqKjxDGljUjjUMPt1NfwWc5eAiEA91ENxuFCEFk46PQN%2Fkcr9dy65SWdRdH22qEQaixOCoIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIx1AxmgeOHa1r89FyrcA3%2BLgY7WEezWW413ZX33UcWjrjBuZMu1LUR7ucK24vSCNfomBH3g6CcnGBjhspDY5Cfa8fLmrbDnuJfZCO3%2FGuhBUhjCZFOcZ%2BXzLEImMX9GNNiUIA96gFuRxL3ysaTQsPUfy%2FMMknp0ojb%2BCAGUbB%2FaM96sz2KKipNtojukjhBH0Uebg%2Bb%2Fg4hsvEClwIhVENb3W0UL%2Fc6kmFEKduW8zrn8bE3FJ4VlTgCUd0y1bhN%2BBvGLyTuP%2BW4LLc2xGRo5SslUNeEiqTAZehKuBaCHHswubtX087qm%2FNAMqI%2FC1qkmbWBdG2vpqpb3ZFnrU%2BGWroSDTNs201kd3D8QYlOKZQ78EskOW1da8c5boH25btyxt%2BFs0kUlmGfv8eIIS2mYiCMgJye1HTRRv%2BnvJ3XZ%2BbXbtjideEIT1y7DSX3oeFmtqXJdOJ53L8BXbRPpDWfmROtE9yMHJFfSVjVqQCiYUGdERJM%2BAuLO3HiA7ZDVmjB5Jv9Y573LJQh95YLO6ja2E%2FIM7OwViBbpAaUKjBm9v41KEiELk3DGxkJPOYp7UIRsrOt%2BSCxiK1jUDffXoYcHRObv7%2FuCow65Z%2FCLb7e4WlQTR%2FI%2FSb7fFsNxtwBujAaGqpKAc4ojglSF850YMPSIoMgGOqUBF0wVYx2mFHGCeTT%2BUSim8QxYR4JgRsguYXI79cY%2Bd%2BfsVWzBIOlFyZ2Hwvu%2FWib%2BEg5CaD7O4QADqW%2BZ7JpRne6mk54b30FXU%2FiED9fV9oVkozGI8%2FDIJ4NXYMLRaTuUvqy1rBec14dOEjjzGouZp1Ys6vO%2FQDzPPD8%2FEFHt7bwrvpmmJfHp8gYVTORghbU4SrTpEsOQTwz4J5W1krpMl2Ms77%2Fg&X-Amz-Signature=c34e808f16986e2b6cc20449764f39b908768bc72251ecbe3fd089fba4d16868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL4ZNQK%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6MYHdj767NGCsYe%2BTbRCNXUtJb2phjJ%2FTSxGhC6F9wIgfj4ylyGi%2FVfqpzIDJY9hjCdtbihF5%2FYPIz7Ib4TKqU4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAulaZ9uixVcGnTJPCrcA0OrGzsYhzxBH3Ti%2B2bxL1d%2B1U4UYbLT8BZRPXBSi8Bf%2Fzl3JlkjEA465VeuC7HWcXXR1kK%2F82DqXcsvy9m%2BNMP%2F7gCeNT63MxF1Reya0%2BJ6XuZa33kxiaf85e%2BI%2FcfrDeufM9Q6cCmq79%2Bh3csUwtT1txKWZskF5bZ6NzUE%2B3p0JlfR0T7YOT9u7j4avukC%2Bi1MJzl4u2h7dSW0DVKyZdZ8fkPIXopGEpMv%2FpxzyrxCsDNWsXYSzPz8YpCaHLjS8u3NYLL67uDKHIOg%2B3loBmxMKOO2D%2FHXWwThLBiVOZMM4CxEyk1tIL7fKtsSTxMasx0RlPabMGD7mq1LptMkg3MJi%2F%2B4%2BTgcAeWnMTcO2Z5t%2FqIJ6MTACrlVH4BrttVDw7jClqnfa62YauOSX%2Figdc9rxHHsZXU%2FyeyL2D1da5MWQYS%2BdDu0kmWNObmF%2B%2BVYMDTjZpOtVhHKrziD7RION7MTSvgIB8yOwl0FSgF5fj0PtpPhteWftgHgLgS%2F3W9h8utSMp%2F52YGZlduEBVtSoZ%2FbImbtv0vW2gXrjMlG%2BdyXDWlN%2FbSO8kzRiRfuYJnhK5XcPmuNIevBj6S1JXtsJ8e2GbfRIczFrtLGD8KtVmn9V37sW6fOYBT9CykIMP6JoMgGOqUBunCuU2rid1d1QxtNi0RfHnjM%2B6jcSlbhoVQZqsZpCfRPIXDx0mqJXb1qz4bsnvOqP2mfdOCUglPK5LE8JS8zGEFqdi5cyznTU22QGYNS9GtT5LuqT3icTYGRTMZWMTHhRecnNXIl6bXRwTPXwvkSI9mIHQMQrIHFcpshXTS3K9LIrXFA5r25nfWcm6RzpjCseJyFqYzl7t88W5wTH5uBDF93RfoO&X-Amz-Signature=b985e0c299d539a59b3aa5f6aeecaa00f024b0a02dfb2581ea9e3b4828d51c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6S7EZW%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpxMe4sXBI%2F0F2bspqxyNeriBdgw6T9WL659vqa4bFNAiEA59DRXsEqa3WBR6VoC%2FhAMQ4S3BbTj6MjDoPzH9e7jOMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGOlVPfAuLtHYNSqoircA7JEDAjWjj9d0AmMRVbquVz2VkJxxA6aJpr%2BQRm%2BGSlWX16W%2BgLJCN8v8PbMGD06ycYMbpC6VtuRBMGS%2Ff3sWLmmL5PESm7peGraFG1wE0TrCZ%2FRTy2wJiRSSvZc58QjcnBbyBoMxPcGB7c7DwnK5eoMnZzlAHk%2BiIoE5PQDrHtRHyUnEh7FIbeWtPwFkf4ebpURGaJ0EGWmW1XZ7eSEjAngEIc1QU02mRPzKYg2Sky5bM2wqrLEAx16np9mhSNZez1PVGOo5JwVy5sdC7f7ngvddeNYgxL%2BTB0cVT1kL%2BowFG4ihX4QGkojts0LOhGzz017RQg9bp9y9T0oJVugbFOU%2BY2wdCoEJkjwzmBk7%2FPlq%2FOSjJ%2FvwsicT3Z%2F5PedtwFdnXwe1Y688QJHDYwNuZWUx%2BVhwKKPeK8gepoOuYMWMW9gZ3Tj4nnQBzbqTlxH5iljT7vOYk1xXImtew2m8IS1TsOADV5c%2Bmq%2Bjeg3yP%2BqH%2BbjP%2B4ZIrmr7MLVz4jwshGRAhbaeXWY%2FE%2FkxeAJct3aBHb%2BuMlpuGNXFpSFnwlE5yrZJw4c41hEl00WQro%2B9Ix8U96AedSeP%2BvSGfMvxkuB0q8wGyR1flK2RQaTcXgQvVNH3wB9a4UsSAM9MNmHoMgGOqUB9j5VARIkc0rnORaIc7kZvdj96OX0i7Bn7u0p0hM6fc2d7pxgKUxcEhTjWM5utLZGuTriO37tF5ww43Ubi7mthBNTtW10jdLVu1xJGR8J3jw2G7DrOX8n83cOlplZcyb%2BRSYtr%2BJnbJdVVs4ovi%2FHTLvD6TOUacAmmk%2Fo2hhrLZeTWt%2FG24EcexnTxG14YT4FHIQLNLkaN7FlgnYqABkxkmv8JDKD&X-Amz-Signature=322aaf6f735d4ffc4d4612fbf66874cf38b43975ec2f16a4180f567602626a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=4f0f09d195b23014bcc8d37ddfb799a7c44f471781d24a81d62563c8a55cf0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICY7G44%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFtiSOCiVDhFxoNWCUlQJt1KSOjrvR7nmwbCqWgByDAiEAvYv9JozkbeEvS6EzeBv4qIXYZBI%2Bz4r32F2W5SoNr6wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJsqelZeGg8hSNJZjSrcAyf9RussjDhmzWQ4ESbjf19EuuuBD3Y9n5OvdPtn5UX0onjZGYOtirHpRuog4f5jDyAhjGJoATiV3XcU7cSkT68o7LvI7To8PAQmgQ%2BOlI7f05SDMgb%2FjjxmVCu%2BwDvmGgPJA4roHyKjK2EioEqPekAQcUu7BNcmGS6lEEw4PKglu2jpEXtPbImtgmmil4ab5%2BpFfKXxnYf46HrGs0N5xngnORpxJ%2FUAyLs5ER0iNK1nqhvcyAzZ%2Fq57dubN4xCCj7G89wIGa3MEEKrmg84FI27leoQt6fsJoq%2BVGHDIMLT14SncjXo8qmEG5CML%2BOlqS6H4ggLHwlK0%2Bcj%2Fz1nw5HcPSV6mKIAM0D8sCzrKm1wCXV756uMXI67ol91xPH92M8glUN71ahnQD2VNAwCKeTST%2BSCmFnJtLH8PUgNklE%2FXOir97SqCTK1YewsZr8U5FnjASf6cgN6LS28cxHWndxn1KbbedxXq0UkI8zRf%2FMzMtuqzybWGCRTZiup9osBA2S0oVQbl0TArzuVKkMliNHvbJ2ZGsN1XWf25BqWUNFIxVIfrAnn5%2B57ahs%2FO%2BUjLIQIDv5%2FNRU%2BmlByxcxom2TJc59lccbTMjJJFhD0fj%2B2GRn58qcHuRp7HKKBTMOWIoMgGOqUBmMEzL9EYEzXURoJlkn83%2BiaRHBmHysohtb6Sk1tVVgu%2BcDeuugbCHpynmTPyIaOSGdCw%2FaLvaAzzTciapMBAua%2BWf0QC%2Fxu%2BI83BbLKhTWu2O6j74%2FNawiKolPzhjPSqvzV8KBuud3tPEHZQKRQD92ceZJMpbNGYN2tYzf0ZO84OxaYt4%2BLdnh22Un11qcNfv3Etikxr0h5DSrsU3%2B41nfYZaoA8&X-Amz-Signature=1c0cb05894a344a08aa423c54e3f18105690061a72e428978fb1c38983008d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=8ba2f96cb195b33fa275f42cd36720255023ad82a94d239125dd01531ee08a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=8ef310fdc7421fc2c01f49a8433730b0d63b6e605356e800e1f00608726d052e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=57bb934715c155113f16182b7bad5518a3875cf44c2eb63724b788322646530f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=903be994fb43393b7fbb9971b573dfdc1475d4d54d9244310816f5fefecbc621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMQSMRBC%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1K6ReACwfwqM5Epyzf8SSfGKjLihutZd5hQhq0CoD9QIgHtPZzbixgY5v%2BhJj5O00H7ELtnq18s2EBa6PX8R7wNMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKQeTNB9%2Fz%2B6ojjjmCrcAyfeTEGUjCCKNxZIfgdzcHVkVIyc4GzLW5a3RpCc2UpUBnj5IsVPZJCxfWyhX2P02JnAFbSyw1RRgKFkYS%2BraZqyVfJjJJuNwcIDavPLBdX2AmEgazk03CzTWYSQJxrm4NUcWb5gh%2BoqVONZzRXScqnOjZEf%2FF6A663OHekwoH4UZuU2MO11DVCTIU63ZHWY4d0Lk7sbEl2gBZNUgPWvGMHpYs5%2FREAdCVjvhOypIlKThnunz%2BnLuWE%2BtbwC0WrSreCPVL2Xsd34ln30H8DzBy5Zd2fwURgDFihGpeJCCny8nKPi1wvr1MpkRDqX3NdUj4vn0m5lOR3Kn8lGQ2dpOezQxlgTaXZ2ZjDIiMskCgm%2BMMijziIRBJnA7uZWPm%2BFLfZRq9%2BQOJtDqVxTYu0PF4H3ciH0B%2BGqg%2FjZ%2FLzhAoZcdwReb750qKx7rqI28RdaD%2F4SScI4Yg22rmEo%2FbfIEFTtdU44edPkG3z9gJD6oUzJ43YD0ioZYGfMV3UPyAueuY98ZDzkSpPqrMmbV%2BHKStHeg4HRwJdE31DcgnJSIz0Z%2FNAVmhgYQ%2FEjIQbKn8mW7Xff2YdtQ1O8LRbLy941fXxR7hOvNn0YW%2BjhJsnb%2BQpI%2FyvnoeiCcheiFMl1MPuHoMgGOqUB4gmQgmt0EbwuIeNsLkEgFIroXJL%2Bg1wXGXFwZunNFTQzzbsa%2FR9%2F953a%2FNted2kcwt6mAn9PMgwdJDn389b1%2FtJ6UbRYIgjBYTEhtlNgvndSAx9aAmt0wwn90zxMBolBGCWKBevgaeoXqCkO%2FAUxkX%2FG39FH31Cqkn66HkTwsZwKzCQySbPIRqOA1w%2BNVFOc%2Bs0f1yjRJoEZihKyBOqGyGH6%2BJHR&X-Amz-Signature=cb68c45e91c16c7527503da9c903f3662354932d7da75ea3768cba4b8202dcc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=cac7aea236b6fa7ef53cb7fa816b17c54a79e6999fc89ed53a0408b148aa6c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=c2c16891d256b70b7575a53e8cfc2097f7ae1d2939c07c9aada81c8132d74d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=57bb934715c155113f16182b7bad5518a3875cf44c2eb63724b788322646530f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=5b3311c716afcbf9a4131ca92b56d97d4a3eb925d65eaa1a59c4dafb0746e107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=f948ae6e4abf02a3309159592f9046ff1513a73bfb27fdad8e2d4f886c06d0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGENRLD%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiAGpv9cnbT2HmZmVPpu2zlkoEVoHF%2BUwTUnkDZOGoKQIgUjSxR5o7Wvqggdi58WylgnPBHqL5FqnmPg7v2JRnVrwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMHHWmbXU1S30YmEMCrcA1QO75afIvaY%2FQ7vRYInPybZ08HSNSn%2Be%2BLyvPDRspo6RNqdNSV5YkvuFccn0b7MYZc6LzThjKPlPZMrPexqO5oQOG6aZchEJ3kFnOpqgzEHN57Eqvaf8d6Ed2XSIhoUtLl6uJICtFHTqRW6ztxmJzGRM1LHdU%2FWOAtRxwEE7BQx55ICbqLogFmye%2Bl02emOytB4mF%2Fi%2Bj1lqJXDDAdnuQ5%2BbhWjDzsh2q0WWaC9O3Rj1GHAgTPGMG51ZOtWtdqRq9GJXdHJmWTZQyHo20xvDD80RUQ6Z5MhcJxBNytr6xKqmgJ8crd%2B9SJg0tVFyISB7YP7vJ%2BJEBxSaC8k7CGn1OLLhEY24S7wXyMQOMx6B2zRMDhjIV7RiTUzBbdimRUPe2PzEw0Qz0sSgUpBMwTcHxTQklPjrGqZFRnXI%2FDvhOL4zN4HsoJmKa6dIvRuijSVoaTY7VrJU9UZoHIA5wQ1wqKNMzXkP%2BIYPrRKZzwSLPF7BudlSVXpPWHkZ0pAdyXqaWOc1YMOgm7ovLXrPsEkghEnfk7c8Mo2pT1CE0k32GHGu4R%2Buxfn2lyOsuebcLAx%2BAGFYj8T4RDjNVKjfimqz6ustLWhYVTjHWK0g07mUDIJqiV0n3GyoKmhedV5MPSIoMgGOqUBgcjq2L9mWdyBJggXknRJA0NIXYWMjt7FoJZfpsduAJhXT8rfgnzIpO%2BVKA8B71BgbChBzANg79II4diBmu%2BxPX2wdbbhnWcnDpvMmWoIzKziv8wbpGhzeiCodall18bxCocvJ3Lf4HEQx7WVlqLiUnMOVMyYMZzbJ40ZFHNmBZMczWrviaJu9BJtS8Xk9l8EdZUczQSeWJnXCq4kwlL0zlLPgO47&X-Amz-Signature=f46f129ea0aefa193706d40f563745f16dde228e26973657ea50a1d8adcc2e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


