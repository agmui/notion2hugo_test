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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=15a552b7aa78985ad12a13ef4906989fb2c0d87f2b212628ca3ad1a9651d318c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=063f85d2fc1e885ef74ae5b945f9de6177fe4f7e04f1e882ece997eb819a1fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=30208a6b45eb1da903908aee6910c6faa13394c891867259d7254587b292a222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=fb28da5970e4bbb929dae5631b0381bdd6d1266f8c5618c6d3b96c71178f7a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=73f6c6cba3353560a95ad3a059ac9e5ce9e75abdb4ff6608f820677d857fac70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=b0dbc67e7b306930dd183d893ca9d3afd4a7c71ca0da2f8447aac8c155084167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=7c775acb9003378098c1f2a9ebe6d5f10d642d0b0bbc08538f770dd4a3655262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=1f779dd282ce7984e44c8baf472e7e8cd48bb59fb94f15315e6ad9caf3bf8af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=b4eaa57067661dc64e18123169088d4a03787fa936fbf2d15553957c7205e32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=6552ca8c8c515170d8ae59ef8acd2f2aeea663aee01c0afc07f3c218f572727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAPM36SS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICk6Zz0XZHQU%2Fh2y%2BDNsmqyz4lnENjGyop%2FDabGmizrfAiAyxLkrRSJLfOscOjDOxV7Hgotp2zVAgpbkIz9hCDCfWCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYYL4xuvTAdAeMFpKtwDwtjTJi27pJPTwNaoSF09lZXaXT2MFP3kILiCRQU0ASZLBjTqclo2TZlT8WbBt7glSudOskJU8qhgi02eNb6oZH3McrkD7OzW8vuiiypxUtPeCbR4YjYAMuCMz7gTFGu47%2FFi1j6x0tpNdrb06DcoYRaICu4AuqmM68aF2WyqG5Ku%2FQQTHE0brGJAIles%2FeqQ%2BUFi3ZFzgdXnTwU6dlDOBGKDS1LWQ9tyIgtqBbgqFPrYSWIi5OLOSThZ1mMRvhvoRVuWFGIdP75rXUJEa9aoM7PU1JsnMkdxLrOA4mrSan7akLvVwf4bTcGQa57xYVSYE3C%2FvITsfRi8KA9b4c1Z7uG0wLpUvTMqeiSvHoVmPGOLnv2l3nAQggJ9UdGCES71YXuih%2FnHx9OtFz8%2Fk6ZP%2Fh1eBTpvHo3vw5We3K9I7owcA0adr%2Fk6jaTShLdX%2FrihARKlimaZqLpSMX7Que1%2BMoGIYDirvlI8kAeJ0G84Hv0DMWeH4niydSFIIWOP2GRop4lJHXKb7zalaNsPUxOIGw9de4ViAMOwTVMCpG196jxrrkEwxgLbTK71JE0s9t831Wpwb86rgYT3KlQVIeeG3plbrlZ3xSWnbpiu6m8CM9jOpfKTxZ5HF8BcDy8w2p%2FWxAY6pgFWZ2CUabfEkmNGjohqbDAlMDBAWawb35rpFmDO%2B6mtEDGbm%2FxO2W9%2B9YQR%2FY%2BdSLpvBrty66CIhoiw4Nrtko1RtTDk3mu5KwhHBlUD0Sx1W5AU0hiYHbBTrr9mw4ak4up4HzTNiRW1CB%2Bu7bKT1%2BeH%2F61Xer4YPBB7xPdygLliPdohvUULzpObIsv5wMgqQGCprSMdPmQoLtDE1r1Fvgvytqxr7EmN&X-Amz-Signature=fb2b603dd07db33cb713f52c661a94b75ca4703c7f02942c3f5f7017e16f5117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KB467PE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFUe1CzYPa0WAfM4cQIguTbY9xnR4OsP98JK6%2BhEUtTYAiB5Ox8FWJaQXlV%2FQbDwY2yfSv0WB80wNgBfLlsLGic%2FZSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcqSK5ePbKwglqsIrKtwDUZ8urphULuDKfNvHhga78bs0uvM1kMlJThm%2FFtjJDaBqdGNFAgaK%2B7ukcCKiazVRf4HanMgxAo0BWIecNQHQbYUWUsaNrnYM7P4h3EfhdIOZm17zu8zwy0J0NSc6XJKEimbpjNEEk%2FC3I5VWaRagws5zWntVKlsuIOvDu0oSgrlacTU%2BlpTq39CJySASIAH%2Fm1ysx4BW5TNItW7SDHTyYXqmy61z6Prpp%2Fmdch7ms6k2aQCnQEhnUDwGlsTs03AW7QktQkoDJEjGwtkDKK5MBOcR6vHeIQT%2BT7SA%2BCLlX2p8QWJpXet6NSbpokGSkpV%2F7ZYA0KOUgz8ZJGmyGYvThL3ih%2BDoYkNxYNFrHMWOY68R9qSMHW0M9hvlW6enDEiHf4PZSXn9BVFznqAIXuYUoNI7WQXf5UKYIqMhEfqwbgrVCsisgOPkZiHPdzuNLelP6ShYqER4YI8Px68og09j8K1i2lM5L3cc7lgFEhl665aFd0cvnelPmA5LgF0zvdMni0vv8G9%2FKvqTkLqitPo2mLPn%2B70mcc9wvuxP45X0v8cKrxhjofX%2Bps%2F%2BTDwaeArlUS2YyAWMObkkH7xtSw6zLQNVxOxRKghNW9T1v34gchcIQpGqgIz%2BEUApbkEwkp%2FWxAY6pgGkqNnFP9HsO1MeInpzM6WKBLnY4JOsV4Fvbm746jq0BIdHrPvGaTZ7H7Xu%2B8paH2QQuC5AC5XeBd5W1rvH6kmQampHKMqedQ%2BbkhRjyJSbOo1jtHG502Ke%2BxSI%2FQs%2F4b5jIV56q%2FMHxK1CKACd0Xx0G%2BBcw707DVwBs3GmQ798lzebTPXOVu0Ue%2FQCmnNU6jRYv96IeitRDy5j5xcEgo86khLBsVe7&X-Amz-Signature=ef3b49d194624f942bda09670fc960a8df53fd39bd24898cb37794a0ab1b4a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5F7TLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID6xnfxPuS8lVGRdoTa2jSa%2BXN49MvRc4iHnk5z11yo7AiBe7GvEWC%2BPELpbbHmeHJOjgAXZOMchqoa2n%2BM1n73S5iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7XB1yRiKv4zRpl%2B5KtwD5Ks8PZX2Px0MecNG4e4Xdiytff0LFlnwSxGIy7Z2SC08CAY6Fgoi%2Bvn4gZg79XSmvUiVj87pouKqWpOLxQnjQSkwmyT7G4Fvkmkjm9IneacaL18kq1V0Ev1i2t2t5adVL%2BZonUO2X9vt8JF2a13rt%2FTKjb1CuH6MVa%2BIO7UcfpUena9%2Bna1Pw1XDiZYbt9fgqfL2ial48VxPeYGHKRMUOqTtnx1fT5MyVjQxVugR%2B0WJPbQLoRoBx1WwBv%2BzvgwxN0VWStHl3rir8OWC%2BlicYmfWXT7pLFbjeC67q6X2vDyVEpwXKwlYuJZG5oG%2FaDXdhvbZpA8J2arxjYNi6k0RJteiGPP8HPJE0Kwqgv0Ii7wvRO0R3VQVYSgTmyuWt099PaZW2CbkSwOgbqw5CqVud8%2FG6L4Fr60H6sCE%2FvGe23eq7s3rUsClRUiKv3H7SPlcWbrG9ixIceDxo0iy3JA4AEN2XWeuWOpfEMP7Z%2F3PWGSPuZMbh6wO8yjtPZvsalFMPvO9SuqVdRLlF9Gwt6ByxwrrU0Y0YoB5TGyonDZ3PcsvsS%2BY8%2FFwk3Rwp2bGCHzVdByaQVzfDu2HDUDHR3ifTBDDdrYQfXUdldh3ylqKyST21hRhLH5yJRPov%2BkwyJ%2FWxAY6pgEQgNYjqsXaNcypqjZDnyWEMa%2F2FlEV8J%2BOOnoIL%2FFEjbcY%2BoFt6KGtVvghrs%2FHZuRMOq6gyxqRB9gRJpMR9Qcpq12OcKMw0kZpIq1v6Vv9oX%2BaS3lyxagXN%2B87bAS9f%2FLa29yP5fGx4XW8YkRhBIonIg%2BBvVG1%2FS0f5KcLFiCoa8bS8X0sqmjUmcsdD%2BPWBXfz%2BSvjzvCtdJzu0BS9EYWiMuDllCeX&X-Amz-Signature=7a17e567241a2ece9f417b52af832892e42f5a33a89c0e621320c53243d715ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=a2435567f27a835742370834a8b4c8d2a76d79b4c807f37c518dbb3ed30bdfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVQW6O5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEx208clc8%2FKHml5QWjheplxSUEBtUw%2BPEwXdg6MmQx4AiEAvwUgCCnNCX9%2FxB8qxTPXMPx3Mr1cxBMX1EpXpknwyMUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz5qBxqqkWlTu4jYSrcA7VvcdUpF9nCNhd2S%2BhiRLF0CyJ9aC5WenhWyYx8e7E5obhefhjx%2FvEXEg6E2xT28L7Xb8ZbPGaRZCGGc%2Fs50lqejnVr2TVWULl6yBV0kYtdPDYYkNNLXXQL33eGlnIbwdIRzdnzZABSZfbZjcGuIz7ccSUiBZSAhN%2F2OhiO7eEFvF1zCK%2BSDlvpxKGLF4EkAi0RBRDfiCWhoE9OR55KinFp1mH06QaXqW8PUgBxVXUtxPj2bouxgOfB7d7ntP9SoEXbYQIC3ITCzOPD%2B58u8B%2Fex2M5Qsfm46%2BCNR2NngdTJMre5LQiL6zFt%2BC9Pnr8sJ9fE32CyWhWg1qJRuR81LUEOy2%2BRTbGkV3w7%2FrmQujvktTael8sqEu9dNfaGqW%2By5nv613m8f8fcvnR0IKkiS%2BwM7vRJlFqm%2Fb4stsHn03hDOhw5%2F4q6zVFCo1aNNfwTowGFBezm5rhJA5881pO0DG3FqjxjsevDZUcTqnkCy%2BjYBXaH9teiE4yAztH0kfpXrHKaOsSG3h99BSfsRYbKBgtKcXwfcDf9MqIOGFpAbF5ERYBRdKW0d%2BvwL5u1nRcxFv7ISab1RLvzf%2F9G9zfnLwuhatnifycQIa0hfgh72LEwmFUfRKP0%2F2Afb45MJ2f1sQGOqUBLBOaHdfX7MWztXP2Vojy2%2FqhY8xSYZx3CmujdUGVYX%2BJM%2BJHco%2Fp67Lt4bpCrEKyShWwZXMxOpcFPUg%2BqDFdLoPf03wfNH02gPSfzAh4DPuCd9r6xj0W047BCwk7bWMhZHEwdrXAzTU6HH8141akfhbOrl4SKIK2DKkyOU1Gk%2BLAFTDzubDx6Nqdy93U07Q2TQKgvOShdJ%2Fk%2FRNr%2B4bZfLL3jsdb&X-Amz-Signature=854d9ea8c3cee6323d1270b1494863d234fcf5d0f12e1b19d0d3ca595269fd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=1d703e2bd8cf1530492fca2259ae92355b00d2f4d48a8fc9b153291851564dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7I3D2T2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEu%2BV88F%2B7omQm3I92i3wfbjc3RcYHZuh0p%2Bq1%2FdSVOxAiEAs1KG685%2FlWv%2BU9Pu%2FR3S45jS0d0wOyc%2Fgm9jbLM%2FnqwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3VfwpOqWG066XyhyrcA3RHqXQB8Cs9HH95sLCBNFSXGazDcDUilf3M%2B4fVCul433l7OlTOwCKqU7UKWCNo%2F64YtmNL9Joq6Iz%2FmcQJvanNJqIvpeQ2u5GnySf9f8pEow5t0%2BTE3bzBj9imsAZme4IjCJyjQZABTR05VzLB9JR%2BTjvOsrLPuFmr3DOLdaSREb6Y7w%2BeVi85JpgEpjanVXfiK3TWBwUrPOkRuEq5WfEY23shakVncxcl%2BrKOx6yWklztsprx0s9BGRZYXtg0DXuilm5AJzDshNH6bGwcMqGpt7CZsRh4EArsPE6V2A%2B2ytL100baidb%2F8xKZMhHaXTFImVJDIbgMnO1UPOn%2BTeO4S7%2FjKNw4ntadOSmAua8z361kdyVb3lzp95JzAKj3rcgxN1A1r65N1ibyByRWA5j6xmTbcceCUqgmmDpKpDeUdMVuqPIL8RDCtRLSOYymgZPO5vq9xSfTxcsuHa0ACawr%2FB9m89xxiM0EymouJfdp4n6mlsW3vXhafnR%2FQwvwQImocmG7%2BYh0K7DDX2RNzfUgSj1OcnyT1kjtlVtMUhC7E3F8OUN9cxOZ%2BtOwNlV8dCXRpu51zntPtkyZLu0VMnyalXPg%2FECga2YZ3Z08s9CEs6aBh4bxEocvJuEfMJKg1sQGOqUBt2HBCUNtNUvXqZKWe1jE9DQ08NwudPkP3iIALnxnaabJCyb%2FBxC6G%2B4xxUAyfC1NmYvvLsazPFfCn9Kxou%2FhhVYXWr41AUUSm%2Ffi%2BeZIMo6%2FlW9pWIusmG7Beqd%2F0C5JdGzu8u%2FqDdMGVKW14dRUxvaPln8r3WhOxTLBw8CkETsAdwK19TBY%2B5u0kYm%2BsOmoG0ccIzl%2BvNmuEPihG3HV4%2BXrGGbB&X-Amz-Signature=da2af4e6c58f29027f9dc002ed9aff006c5d87ef881d5e6ef125ef3f7a170711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=c1fc9b4de1014a431152323c9a992770c3972a004ea8e23d595d9c2212a5fe04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRKRSKX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDjpt%2Bfsak23lbXsVsdwY91SzlXmNdMne73gPWKEsFxiAIhALB7kCaodA9BRMxmzH9Yo5GEgfovjOG0nCp8w0GrPjQrKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxuqx4A8cMwk7Yp4s8q3AO%2BMZ6oxayz%2BEyOjWr5BxjB6cbnvcmZ97SBMTlQIGaZC%2BvjlVCO01TJycxC3cYyfon6tdCwI4B8XGlRpW2C2xBqZjGTtfDhmu5N0esoiZ8YNCkzfAJO2TGqIKfqKQlvImgX8rpX9LABqPXktnYzde8Muj8ODRIA3rZQMLFUY8cAYn4hE4B5mgQjcr6UWzyDQYlw9CBiVra2VbY%2BHQ6Lu0XfGg6bzPYvza%2FyGd7Fz7DpK0geX8bxveTYqMtaUOMbob2gCyeF33IItB82I6FNy16I5gfb7ThK2MTAXvwVosRbPzQAMpu5fVHB0IptzjUA8YIeawV%2B2G0uX7cU%2Fj4o238qkPWrVr3M1zCXpamLZnZF1Jiu2%2BFf262pO0vMNUqfyD5BUblUJGKNLBt26usi69aJXCRWcmowYY3r3qcmPRTe7rbbGZGoRwPfM3brIaLu%2Bf6Eg%2Bfw%2BQS2CqFtxnLYNstwbkK238fh2SGZXYWVBhri%2BplvUCjlhk5bC695GqZqOS%2Fw03J0sxDcyH5wMId4rdFMrxpXhtT40JGaHy%2BPOOXn4Y4EG3qQVOQ14AnrcLjmGR0RrmTmncIfmCUOnk8vAYupN7dO0OUZqGKPKeQ5A614hEdgpa%2FnRUPawwjX9zCOn9bEBjqkAUVbRAVWTUsRGw1EYGp4NFvsUDARmCwxNolCFH0%2FQp5Y%2B7QlEOLQ8v5eSPZv4jSsgHllwfC53bX9Kw230Dgs0CGfnqstE4UupOnOqPAqa0sgaY7AIAeP0xBCT5hreKGg%2FmPEIdIiInUw2Q4nWreLLoKlCZBOoGsW0omacoZIMmeI1LuGsNc5rGczUgdaYTG1llDrhVa6uOml7xtDXBkEGn7BBySp&X-Amz-Signature=56b299ce44f40ff1fdbe8f342a486aaadb8d8b5cb3bf42d2e14f5c7aae3fdce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=bf91d3cdba3e751b0a51941bbf79d938b569ec737b67df3d0ad9b4453b5dc459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TERYB54N%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICPWwPoythHP9uvi0KxjIuCasggJ%2BrEUk8qrsQUxnD3KAiBEOuHQ2H47tX3eElE5aXjdWneIz2D92ayNh8g4rBEtuCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNs29m923tB3ftNJcKtwDGoRbh5OMliZjGSU6Iu3pMKzrqHuUvJB8xuriU5V2slBVLWHD3dx9rrm5w1wWcXRZGYMINPjijYzCX0dWB%2FVH9X2yVGX9rlQdxhhTRrejWGHddNN0j%2BNMcGrUoMhG47dxrX4oz%2BURFsencaG5mtwbQT31AzyGRH7iygmWg%2FGngy3PVeyDdOcB5XxQ7kciYg%2Bdi3pCOnMXAeXG7Ipk4TxAH0OlzAr9Rxa4WpwE1vIpHZc%2BbKvSDwLoyTaOO7dGF3oyxVTh9vV6GQN5dvCoyBpnjPxCiqXpB1jUCS6U2YPsn5QIGZBeXkeea4tBdmVy2VmtHWZiKwFbHwrBEEZrDJ1poPNBAsii8c%2BfTXooaXpFL2Lf6zaITSFkwxm0Iao3vuClt12IeP0VDDqKLX6PgefspdI8PEQzt8wsW4VK%2BLcdehqrZYN9a4J2s6xWMrhMRcWatb2psMgJTD9%2Bli3jV38jruMLyNrVKoOFg%2FGdHZMWLO0KIkcJxryq46h%2FUrYboTibfJjtdebVxRW7l2%2BHjzCPTArDUPfJiLnoX1wD6w5m%2FZYzZ9SMHJ3jHTTg57pgJFuETved%2Fl9DXBzYQ2%2B44D0kNeuj5EdzIsLllUj%2B2DioG%2B5tyHyA3T%2FgwXCBjwswmqDWxAY6pgFxO3U43KPKp9bg%2BQop0kOaP2wCm5ZbXQL7UsMSTbrvz3tsonGZFBvLU59QbhFd3Z2X3BLWvUij22KMUENDraqz5cylrxyM8qZogxbPfUOKf%2FY1JHmpqJJBxGFIOPjjhMmrrhZf3DDL5GCrtn0BOVNOK9R4zjnN0DeTL3qrlqIfc08OHF7P5XcrNHi5gMj1eWB%2Fyisc1M%2BpuJ5ddCEk3f9r7cBCfZnf&X-Amz-Signature=6424cafc94e8861efd0b11321a3ecdd2855f5648a9f4404021b153faed7b7ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DXPYZFK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDQPupYgJaQf8jk8xj0PWrlWPoihFEnjATE0M%2BgEsTCNAiA5jP5ggKxoUc8SkvC4SnhwtJ3ePDCAR54Mu7mmw49sZyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2BfToFVOFQ0fqFdxKtwDYOUz95dKuTpRt1FCuHnaLTgsmoQ0PWa2Oll2bPo5XEjH4MEupv5yNfSW5HvRSfizXIftB0cMqO93sOrZlT4Qve5VoCEBUexCI7Ua9HhcVqguSAGxGiAVDLDuJZBFvfPtUsr1cfdFLHkn%2BdttvJDmMjdl3sX%2FRDL8GmeQTMoVejX9LTCcYZNh9lH%2FBLRvOYOdx058tDt3%2FlYdDRpx9Dh%2FpclEom4Ux3jCefThzEtzqLPhKUyabd1HBLXgBjO0BNFIOvQWmpFkWD4h2qSQdyzYNn%2F1EKrfaXd4OgZUkFx%2FsYZwWpu7ovrSeZn6s8zRGxy4xHWOW9E%2FmYYa%2BsCfqu3bQgfwzlU%2F%2Fnu7tYgiC6rQ58xv0HaQGRb4wc4Y%2B1CxUgAxpCYR2WTS9%2Ff3Tn2z%2BSQYq%2FO4X1QT06b3l3TvqfwNhooZqiacX%2FLuZwMB54hxH8Forl2fEeNzpTvA6lxSTNFmcscY4iWbT9AU9U%2BW458bxA0Cj0S3sNTS2HVganZHoDFl5PIocL%2Ffi565GQhJQGSB5pPNVcD2gGKOTWOeQiCbHM0f90pJlcl2gGwliRDp3GSOjkYoe9kmGpdPxG9Rx3YwaUwiMull2yC2ObKHOsdSd%2BHovNJ8cdHhK23ZB9ow3qDWxAY6pgGVmUr6POnJ1f0Km177Eq1AbJSW%2BRhGZPDcoJBD5GlxMUc8s6aFVRo9jnMNUj0jVIU7%2FN9oDJHIj1x9l27QGQ8uQ%2FgPUDZ3v67Q0VaTwCiFVSbtd0YLWXzof6uwNrCcR36fwv1Flv0ciYqJDuvFlDFFipiWYZsnBUKpV5PWNZhWKpWoc3rp%2BQbOW1gwnhtieMm3t0Uhrnp9CAh3C47Byunbm39AOQyt&X-Amz-Signature=59c336ca73caceb273d5a5469c695e702d48be96839d3268469d93cbcba03bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH64L5IE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCJOQWmK4dz8%2Fp8leUwFR22JQtVqTq2m55e4%2FL8a21trgIhAO2yHpugGTROn6bKPxqSjMR8uP3LhAqtQHxvA2PBFa%2BbKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoaKcZ0fQ40H9q0Mwq3AOl5SWahdK2zp1tPXVFbyGcdEroDc711xYr6SL7GjdZ9TjAo%2FumV532H7qGtYTKmd%2Bvhv2TkzwF8KN2qTK8Z0BsDLlW5R3Atrh9i4MYxqFULcd6fU%2BYsdoZL%2BknS84M7UgXPJkaMWs%2BXQ8q0JZV4QKeshNDUREOHALiYTotOgWefkPH5H83nkSlewQOQB20owDlqhJAsmIs8UpC0CpUncW9uE2ULaMLfC%2BTHQ2AcdhYrSZtHF%2BjWMU3JzDYpdVIjgMh3coOE69%2B3QUNurCsALv2MGGaHOOR38QbkTiUoGG0X3pJyL0Q%2BMv9n%2BLZhAjjJnlnIFJMuHrFcvE54OGoBMuUZBcVL0l8BJ47rAxm9vb9o%2FgugJbNWZ3xolBN2YdGiuZurSMBP97fP%2Bzg7iv9BWzeuC3FlMGso0U9QIsITIHem5Al0PmlnnUDf5FPCrgKsot9mB63plb5hYx0iQG0A88XYtFuHIC%2BJEKdNQbUvH%2FkeWbYtSoM9xOM0VWBMI6WLrd1opd8bzJb5bxtyXQfAUwNpyxwLaiaUJd9sAkoz0NnK82yNIpcSY2BudyDH2j63nik%2B9rocuwaV3bSgOEt3A7Y86ppag5tUpNlHdtwVw5J4%2FWIYJ%2BW1rKZDyjxFTDwn9bEBjqkAeVQlKF3okYbMMgCR3ZPsBOkKLEyQkXnC158noXDEEie9guUK16QUT51j4KmD8%2BPE0emQR%2FSaGtqjFMjiOTFiNnvykIT1MDxGCsLIyLbQXm2JqPOry2p3%2BbyzmKA5QbSWBFwofD7esxsrgyxmGSPV3vyI0QjLswGO%2BmvtYwCrFrimVrDgAOkeH%2BtYpS9Cz9CfSj4WmdlpHpqpzuHJSDzrPv%2F6s8b&X-Amz-Signature=47ce9dd2b58fe4ef4e7fdafae8182fe79b6e0d23135e2f00583b52190b095805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CNCDTZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHigjHZ%2F0F7OscufPa1ooJMmPSADGtlQpTAvRtJjhXC9AiEAoO%2FIBqrlMXd46kzVZGxHRXdjAD1o%2FW5XwTE53h%2BYiWQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbc0PTOSXwNr%2Fvk7ircAyghaGi7VfMhYCuu%2FUbFGw0atTLJ5oQfBsQSfSV29%2F8I6LbUGhpufjdM2IZZnHJiejIkjO3lyaYdlTTygLGBcE1nE38Tgi7hglRAYCJwxL3t1jHJmFCipR22G4cO1w0xk6OJYTzBpdq%2Bb164ic4b3amlQX6dsOZxEWdbIUH5cxYk29CZIlNkTTjtxjxAZF3%2Fw1PYJA7ByooI0qZCJRgWUTqiCj8ySLa4GfePw1LTJOGXFRXoS3Me9nDBMFxKXh3jNNdwJDPXdNd6vkagcvglQyRN7FiX6YfXhRXujfCRjrDcgjqRLkI1NNdoSUrpVQvUfTizMT5AuC6uSBKw3rROFZm1CZOQxsGTftdO0n9w3ltKd2GdZcangtevNEEX67KHdlrkA8wiChQlh4%2F%2FuhvlOWSXRY5bqkXSi06InKYjYNZvOxUIfNUMT%2Bj5gyEGaJbfSYls2ePj%2BoVaHlyb1%2BF5WD7z8DCqyLNuDHJq%2B8o42J5aT%2FjINjhZcGZ1HgAe27DPBgw%2FBcZmPoMh9XLxQ0OyNItj7owl04zWOS6WNAg7j9kh8KIlOXPhwqptGkUykxzErOkcfaozdUdjwakez%2FoW5NxS8sc23vUU7zenMISxuiGEd19MZOagfExb4bCSMKqf1sQGOqUB4EbP3uyvGu4yqDbmBGRgA6839zgQi0sJoQiW893U1Dom4cEG7mZiS3CqyYY0GEzhHjVXWkWTDykS68xI35mrv87S3JWkFR6OWFdxtqXCzxUNZfPqkmIuLhD3fwfScDMtlQymLBjlz8dzTQr1KBEOSxs6%2FE35WFQ%2F9PmQ%2BZv9hTFK%2BiNa7Oz5GtI3upWpd7zOa%2B42d4vitOluZfJOeheKt54P7AZT&X-Amz-Signature=94184a6e34831b234284cccbc434b3a3100b800d8d77e89d7e3c30b9962d8298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDKU7GZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICf2JRM8n4PJ0qdj3Lc1BFniLFTGJEUgrbxUURgTpYVKAiAi9h60e5zEtnk2EiVBdiFr6WHpqIH%2F4RqtcauXJjeSpCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA973VfJtHXQKEyBTKtwD7KKMVpzKLRs%2BhXdSWyLfQT3GxsRWvzWIneeiFPldxve1bt%2BGDduu7Ryn%2BSNwAUOZhbDUITmSZteaToRqmK2gc1De%2FbxrHetpNMSBGV9JOlyRNwBlqs53VY%2FEUL9eNAvwRfhC5toKeVvUqGm%2F80UgBl1IZ3%2Be5Kv%2BnfNjhdqoH0Ni1d13QqFqXb27bZrEGyMn1ODHLE6frDncem7qxtPEqeIOn20PcvAGKTm%2BDTf060a1MU26W6sNnWN7iu9LNWoYng2Wj6%2FnnB955IBnU4P%2Fhq765bROvSr5i8u9B80SBAjWMUU%2BEhSQBJovC%2BVgtjumfp7QhmWtJQIYJABklNWVbr0zUA1ZOMwK5DGhKuL8FLtEoVoavFW0KA89ahF2fPaoA2E1N9LFb4itq8gWqNAkxzj5BZW3MPOcc9oeeZO43sMBVhOE2JLbRKKOeEx59VlnQZFUQZReA9XR%2F3O9ebQ7BBRsBoCR%2Fy3OAipipzKM3BUtK4poMacpeHL4AfKh%2Bke0Vw3kHzArpG3wRT5P0a9MePM14KQjcuKiguYzk6DYq8eNEfY9bOMgSIQhhcusj9IgJtawPj32NX5ag3Ec02NUmFc9IpotcSYZEuxsBPqKJ3HOzqvTF0T35fpX3rkwq6DWxAY6pgHnby1si4DYCKT8r0NNo4i6R%2FngbRYNMmUvOyLuPfx4LhO8jzSBowW2%2Bws3390nB%2BcRuhDz%2BogSatSPKdtj15vdh8JFVqV7Ki%2FMc5siZzKkpjJAnlrdiMTz7apw2aCo6sQAyNNo%2Bx7pUhfbM2GC%2BajJY%2Bsp0sET3tk5mVqHyg5ZY46hDnIRhNhNB%2FpvPnfezWHBpWaTR1ofJuiE5sgeIPLqaJTq7kN3&X-Amz-Signature=8bd69d41d89d23fda4c216e848f83664aacb6826c8cc3be719f2df953d927e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=23869d2f70716ca920020dd4ed94f86e040e61240bc433edea930965154f1f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP7NFID%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDArHBAazgdpFxeQFFznjIXmK5i0qMIn3fWLLADL1e3dAiEA0GaCP4zBzIeHpvFPOEPLPXFolwuSUSzFcev5tel%2FQ8cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXZFwaCq4xEf1v61CrcA0ckaYvGHTNF7iTaK9iaTH%2BLkvZVu70%2BQEmqew5oqLgJFpVPnlLACm3a%2F89EBGCFu%2B40mICLgjwxeR3WN8IbU523sHJ2%2B%2FcFInsAMwtVw7DZaTPfgOOM44yQNJ%2BDCDTOh6zGBbeu5qfORKldTNYpJYh%2F2hBu5MT%2FCChu0oz%2Bm%2BI9RmAD%2F3JcRGIcBjpLQJSCbvAEOTdrsAG1osWd%2BhgYgVvBiZc%2BqbrAggq%2BNSSdT4lAn4b9TTkqLYeRDBb55IULrHK9SCuUt0MYSaCyz7WwlMxCI4KUXHULuUaSxp4MqXxhIPoWIKS%2FKm6u766y1sOJI%2BUMQVtlx41q0DbLILHm1RaV5FPsudmsE1x7zFpA1%2B86Mdgqh9NR2%2F2t0RfhYeXX4%2BTLDao0hPlpenSt7qKKRr4SGSPBpqecwlxQi6ep4kg3u9hDS%2B37DCqQ%2FId0J13gueY2SHEhLZBw7puSAKAXysrh5dWHQhyBzURSv0SITwIukvHBZ4Iu2v07z9Ib8hLKS3s47M9UKxL%2BhjfqvEWTavsk7wUcbCQOq5%2F9N%2B7p65IUSf%2BCyE%2BC%2Fage3%2BPckahaptwEwihQXaF1g38yv0zkt5ZhKgYlNmdwYVhXhWxwrFfvFATRQdSPjyLWckmQMI6f1sQGOqUBhLS19onZMSakBvoOx%2Fx%2F1N%2BfPaYs%2FSFE43KEHgEUHO9VgAMCvewLHrdlpWsSvLQHRad69gdQ%2F5m7A0oMsg2dT4%2BMOrowmdyAYyJygSGN2WOsVF6kiBxeUD%2BvcsELHFPmngyN8HuuxzRnJ58r7mu0n9zLRarQOWH8%2FMgTXj7ZxK572V8OxT7mFknP%2B49Rkk0YmQYVTlnz5ugdxPdMGcNRu3%2F5Bezb&X-Amz-Signature=9d68b2abee350683623de4dae78cef141a8cf91f87db0c29ce0e7c0f5b6b8fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=a21c68bfd023bec46f879b220ac1ad67ecce2c82db77fa7460c2f3d416a33a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=d8bc4765788098d49b432b450a27c4691b115107107813fb73b0cd53cf6b828f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=1b21d3bd286af00b787508f5fa3df67ba0612b779ccab97cfa76dfdf0a41b3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=ac52c9d3c03c4fb884f05e71bc5642734c469bbd92cc8684c00ed0b17bc661e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=21f526791f775ba311cfbb438940963a7717deee68d33b6d54522e5dbc4e9a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=146f227f3c72ab2bb8056279a18f230bfd5d90327f6c2a18d70c9cbaefd7c9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=1b21d3bd286af00b787508f5fa3df67ba0612b779ccab97cfa76dfdf0a41b3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=51cad1ada22bf3b31504305a6ed217529a0d7f2523f99f2d59f0792db99065ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=5d8c4111ae6fcf1c5160ff0f26fa8f7d50f9638012aad4920778dc073c6b4cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEUVCPV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDaqb37HdKnlaAfPaLDbTaWn%2Bf%2BM3fgMEfOPOFrtRm8NgIhALVGcRLtosR44Q111MxCVS1WIFZ%2FW5CS6xZ7HyZLBJmaKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BjhaBsborbEUG87Eq3ANWyux33%2B4XizLwgOqTufJ2VAzFZxCJIdXZJR7fyWM9Ara5t9WyOSTHv4xaskG6adGUh%2Fp3SD0C8dWCZ4rNkKz%2BRxOs0%2BHmFvcJwhgof%2FO9imUg3BuBPasihnK9pYf2aPgZiFfEJDZZoIdsVwLl19d%2FYyr1asrOlUg4RmbNzbFqJsRdO4thGczpqn9CtZmj%2BMdQJ7CZojgdVCi0hzmYDUrHFZKvPprKd3seFcJ8UqioYRQuYPtClTkn2D9rve8ywSAxazZizL93qUS3rX8rueehf42MahuwaB7i2v40%2B1Y10CJB7vyCrCUtxmMNYBin64iDVHK5POwFddcud%2BNETLxzvHPewa2sKRW5ccl3Qbw8PQsNc1UsemXwqjHGFNLUsHurkvARjfRNwQ9njlg4MvaS4EYaWuWCS8HTQJaiKQrTCQsOba0Fmc5AvoFcVaMsqvJvpjCaU0EGGBjkKkQphbK19oQjTRs5GN2vEjI0a6QTyksGgLHkEe%2FIySKvOdG5GWd65pmtaSOEomWXce8ocCp%2BmXlXWRNh37g8vgXKzLoX4JT6aJKmJXktjcGsnLB6bMJVX7w2rzdBE%2FzcZykd3V1pTQWWPL23E0Vieangab%2BdEOPeqwJPcfSixGVp%2FDCLoNbEBjqkAQKiftGw1kNNLoXyLoA%2Bjuac2WMqVMSfZbMM9zXhV3I2T0Q0xvgOm0583Fe9FARS%2B0blKsoyJWiepJKZ%2FYl8Y3xqMhzpUonyzKSj7nUNKanwQoLU6VyrZCyZHi1HcyoS5B39JSEBDYoIsYlgOjtIL57LFslNzmyaWmLzWwxK040q%2B2wdC5KxrUMDXafIXJ5aC95A990aD%2FBGsV6UynTftwV%2FZGKB&X-Amz-Signature=267930e51d75805e15ccb5ba7a1f45f34067b1565dff058be89415d970c50a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
