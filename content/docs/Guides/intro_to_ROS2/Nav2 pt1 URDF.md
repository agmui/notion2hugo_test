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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=5f72378ff3a4082c4961997d0ed0b3c552701dd6fe06c77de992460819911a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=b95cb3e576e7d2f876b15b7247c5374dfc3e9e89bdc47e70a8a4cd12da5562eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=14ccf5131b98dee5415b5ceccf6d66265d2e800c3ac1513b544a9c6538393fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=5678bcd610867d79544bca6578c389cf37239654c4f5d90da1e9ec1185e17c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=4173f4ae2f5efe98574618c16e6d534791a4e1289c219e113aa9e217da42caa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=27526d5f896c60f7a1f4f421ff60af05fd5ffcd855cea508e1ed0fcf04755e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=78f422f59fa00c6580b8fb5af5f8486deeef8706e5d3268df87e810ae27aaa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=6d98f4ee36be4e0043cb571182e42d09e4cf4733b28bbd9653e50dd3c10ca9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=f006f97b275b07ea768ccad105a2c8e1cbe04f42fe0b218e3fba1b37d06956d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=1fb839bc3ec9a75e41b73915cc07058042649ac8fc63b95c27cf23cb2729c90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BAFHV7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3kGYtvSOe1Z%2B%2FxcOXMhrxjT1vHBlfL6u2DpsAV3poRAiBEd9HZmRkWyBQCXnp95wggTIxsBCv5wag1Zq%2FBkuanlyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDezza6OedrnnvroIKtwDydplJcb34M71ujEGaQcgOi%2FK6fGqB7hz2IazTMnszbvs3ui8eADjWEpB9X3vdBnotgtZgf6ABptVjVG5jnnmaP8vTCZk8SpDgCQ8LmDMLhV7v4oEtZRLgBuUdho9BRZQvJlCBIDnz60zh3Xa0DHiHzv2tZWql0d%2BDaJzlBACcKnSEPi%2BQJCR8u6q6uemcQVDnWTXcyEUEvzBiynLZ15sjiHDW2u9qZSY%2FWDXnz%2Fx4R%2BQRNDano8LekQhpr6ypfBc2vb1Bb5DcfgAQqtCEuPixypdC7fIPxUq%2FV4%2BXnbQ7hd7wePnCeIet%2FxX%2F3yXQ80o0BqypJOCGGE9ONDLI%2BdvHivrUyRRWwleL0y4AQhKTS0ZPqaCUkr%2Bok3Cd4ki1SSQE%2Bhrf1Yx%2Bg01p3U0uSkXMMw1fWS%2BJw5s2bOeInIO4e1yFBXJ38UA1P%2B6gXGk7k1vzwx4NJMPqCceTLm2QMdfgahcjT82nZdd8gmnFvUrzYIxmARNOaEWAYp4OmiVVfaW9WzPd9nnlxqRqf8B94YgmOrBPq%2BcbhfdtnyZfB3VJCLfSC1n23vDgijRBdEK5l3Gy8GzyGRB3CmRynEMQrA1A1aKD3vbbLjwEbDU2kO7Zru%2FK3mMPb6XngxMkD8wybLfxAY6pgFXuv7OzYl1ku%2BLE3PI04bPOxVqd9JM1IgWsPe745%2BfxDDwM2Fy7qtMHAzQmFWe2Y6uKZ5pkSNcq3ti6rgFkUlJUvTzMwTbkmNXsMaGEGYh%2F8xmjKVVp8u%2B8NmUTeVq1sYsk86x2wW%2FlrjkOlwecSA7TuVefhlWOxfgT5pNrGYUhsHs0K7%2F3cLAVFgnLkJ3WJtgZpValIUd3QP5K6kLfvB6UFI9KnEJ&X-Amz-Signature=490e70be7cc8fe791481af16ba3c7d447f4a8def8a0ab83fcebef5477561ff1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYU7KJX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFD8IC8Hzd4Z2zCLdj4dpV%2FGinK1p87Lb%2BoOig%2BgXElQIgLJy4WHiV5D%2BBLf5fPsP%2B8P6qKL%2F6TBJQyJadfizkRuAqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhwQzHM2nQfEBnKjyrcA3%2FWZZEa7GmoErC4EF%2FoYk5F%2Fm5FJkBAqfYnBBzfpOJfB3FhbA5a7uwEj78cUGI3%2Fsx%2BshRL850qjpW0NBEkuzoHtYplyb9IpTtN5opEwTMgivDBaPfoehWiLDDDdOstFoQHLHu7lVi5r4T0Z%2BpufX3HKf4HBqLQn34ZkzH%2FSn9lV0NHlJiCvavBkqK8sbzg41p9c80mD9uSpKb2%2BzU32p84Tgk876v18oedhEKL24KBTlDfQObCQwMtgmL1dHoo46vCSUbKKPXImhyiCDxQC3UfTX10%2FhNXOyblQe%2FJhIm6IY2k8hF0tdoO1NtYJQPd6j02r5HQb%2FKF8D1UzruvZtS7m48vnxJBeAMKnU9xcYpKU5sOcz9aKQsI68o6qUQyPeJ2ZhW6pU%2FMH4GUogzCM1UeHYI8AKKH58dWlS8nKsGLhqxlztr4Uu6ZGFmimCYXIJY373chB4C%2Fz3OkV%2BfRHINlRWAIWRegS2XBt%2FznyU39PfjmQ0eEomWayqffkxIB0UZJZ0TMb%2BuuiN6RIG%2BjPezbkJmtcAXU0vVatA6VpsKNpdw4pYw0s4ENNK32f%2FC9W3mSZ2RzTrtEcd10n594Q7K3V9pyihRyZZaoXieF3H%2BXmCSsngxOjdr66Yp1MMKy38QGOqUBZpt3RnEBAkkIeUps2sCflHqFt5B4rrRgpfrPEvy64alLOpb%2BSJ4Z3tayDlYjBvi0XbRlO77hF76Ikvxe8h7E2jqqU5ztS12EH6igsWo4cBlb6TP31WelzVDz7%2BZRi%2FZ24l2Kx%2FZXMqV5itCJTre9LzkgGUHZvgwmAGYLH8gePztaKJPT4hdsr7fncoKBPxjIq%2FwScRrVKV2suwJS2SWC1ZE8osYv&X-Amz-Signature=225337dcb8a856362e40b4c8673e39dfc89a9465a160a02e419717f2a68c049d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLV5TLTX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRUIl6btmjNI74iwnVZ%2FfZZ6Y4ge1U1wZaCQTQEPnPiAiBUBK4ynJHSozvC%2B5EcGsg3pMnvRSFex0vORxbjrDIYlyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1G0OwUNdUJ2ZIYOhKtwDyZzB1IPlKi9%2BdJXPCZZBz%2BEir8QI2Ng2TavsXJaFsbXF9vAY51JiOQhUDks%2Bj1NBr4zch%2FqfokNcVbWMaTWd5i3BR%2BQCPgpZNWaM8HMA4LfTl2x9droykVUxxK7IzOMP1P4qkklH4x9WhLThM5%2FjeqyXnPSQgSqO3Xm%2BFI2OniyP%2BB3bO71oThxH%2FGulI5e1el5t3D6ZRGDX%2BkiFFE8E1wj5JgWsRsgD%2B%2FHlpSUIZOq2CwhQVPRmWHifxpd2%2Fag2fKDK6Wm1VoutPcwW6D%2FKUkKV1JfMJBgT8R4evoY0mH52A9CsMt9F7x8ALNf%2Fzhyq1rqFFFMbxU0fb8mqr0Npxcrij%2BFNjneMpi1uyzT%2BoSjh1tAwhozZ9SSt3IrwZa3TryWzxNstkl3XW0x1i6TxioT5822oiUWYAnCPZ%2Bnz8wA6zKKYU7d9z7GmhQmwAXjmpAlshfq7RmXAXgB9ncg%2FILFtfVngFQHSwwrbgFW0AxSxsiPy6nnz4Gn9nZkc8JjGZV0cc1ZP2uT4TEejj8aiHxiQoS8aMcDSYLFWKoOz92U%2Be1BWAwry3Xi9Xsfv6LWuMckD%2BEtH39a28t4RuuqMr861P1o7TQRyhx%2F7dAw5ieD2tTzB4eABetDhMwUw07LfxAY6pgHZK7Fz6Geh5GCAqO0a5r8QaGaFPmeZTgH%2FKjs4Ujyl%2FGc22CK%2Fh8reGD3x%2FV0sL%2FecD0xhoqF8BjkXd4K49bXJZvewKbkKcgM6iSctf%2BUtoGYhD2dZm%2FbpjkzWH61zftcJqaZoc3cUVlTBKnbmZ53KDtbMXZSXg0bW54W4MCz0VW6BANmyau8xBXUPjC6CX2%2FWrUEZwPkqOQbdaUvSe1JGAozxiza3&X-Amz-Signature=4287691cb037d6cd61967592a66a06ac70372d67d958dcbf43e8c54d0308aedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=68f2cee4be8d52de826bbd9eb440ac9393991cba1a4d57193389835caa54ec37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FTDGSP7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7PGrKK2R2Db0SFs%2BGKLO9vpdWhczd0syGS27f7KT8TwIgT5UBa5aX6IinK%2BrtfHRuUJEgDd17DwHhFPA%2FjdNSjt8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJzfc6mw2TOXgQfKCrcA9nn2yUnNegcREMQreBs3lZ8v4TNd2iqbtOsBxzGhqlzIb61Nj08qfl7l%2BmCcgPE4nxywzm1yTZOqQP8yvQ4dF%2FjC1%2BddoHpP0dwwV9uHbO6oSHvG6x7J%2BbbmGUeAHr%2FPvgWSBsiGa2LHmEPmIcIxDjBw22j1vhoGNx4o9po80UyFlqiobyTHbyql457tgJRoggZ%2BRApU2Xeh6ULPzXIGRm%2Bl%2FfcsYQoAfMEYb5pbpZWEW3WgOdPSOcRJZYL2A1VTUu8ajxzUOZWoUnuLJlmcO2fJ1pqhFMXV4DManS5XbFOTxgFhGtMFFyuyt4YeL%2Flfd16%2BO3SBx8KE9J2N6yD7bVapFlcrRHlS5KjQSKxkbLA13Byr%2FnONZRXnsUaqDyGRqpH%2FFCzPIa2Wc7eOE6O%2FQeF5HuTTbRlema2WhkZhI%2BMNDW%2F2c492rCLdG0fLfimCVq%2BFtDdt9FBpC6qUXnI6XkD1Ehy24%2BVfZKra3BZnAbuoj6yftcz9MVUqlaL2yPNTXwaVXcXH7ljcZt%2BHDnq%2FNhcwRVMzl2RLCD87Ob215C6WbB2vlsoksLKPHsZuykNRv1UL1x%2FyEMizFE9ic%2Fo2OLxfKZ%2B8Ig3dGDc5jyO6rpw84QDt%2BDRpNUliw0oMMOy38QGOqUBuHPgWsRAdvfY6v2sNQpzdgWzbBe%2F0TGlJqM66LBQBIrCxOS9Zr1L7MUgMz1Ioede%2B7iUuezPfagDtL7BLlWLdhYe3nOyoXTUWudPnO1YRaXYkUjFojYKTc35DXQGpcU7Ntc8HdDBTCYG3QjkmBdkDNv%2B7jMxqII%2FvXf%2B7iz0uzGTw8Zh6gRywJMn%2FZK%2BUZs%2FPsX%2B6sYNMtQk2M47%2Brn3n7Z6Uofd&X-Amz-Signature=9fafd7ba9275324d04d27c8b5f03afb54879ef857a975ebdab0462bafbb0f0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=d4e4d7d9bda8e12269609db2986416e4b4ce1038871e24e8e2405064c1f5d9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXMRG3J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEsSEQpvJmPYdD4SLd%2B5Qz1rhrgAi3qHtbwPa7mWUkgFAiEAwZuPk%2BYvFM%2BCXmr5y2lzZbQp3D1Bn6dmLlTo%2Bp4%2BmNkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcWJJht321oqZV9tCrcA3zOUglzi%2FxO7%2F9UnxYKjKcwSdjfFit4ja73tRjycO7pG%2F48XkvpoF5qeNPssrWP4LZ5k6wNbsV1GispVhHooQCunOK24umFv%2B6o4Khmqigpt0s2rG%2BbzRlraiL8oMN44SQaWLghnvDItKBJ1BUkyICmn%2BFB9MphdRtPKWOtAQ98yFZ8zRrA%2FzoHKl6BiXYiFtPJMwYIjnyh4l3o1%2F3oEwLllYzIjJxnWHfWHa%2BmpcZdWT7e3oL%2Fb96vGvFvN6kvbnWqFDA9%2F3QYRe4sI98OkjfsiQ0IjS6XyiiN1T1PzlfYSC5FsckYXn1Q9uC6sexOBamkGwiMD6o4bBW%2FPHsAb7xtzVerXWx84IkSNsYgfPBMBB8KRhXoSK4w8h8llE7MjuF2VSy4JhbSPJm4d%2ByHu1BFcLa4rUHU9Roxu4%2Bj8aQ%2Fbd%2BXaWEdz9EfSolOgBHfDjd7u%2BvWeezp77%2FdP4ha%2FYy7WLsll5f9%2BJmYCJHlC3P2rTQ6VRkLI%2BiiUU4XrXhvwkoIHkvuIxXcb1dk8dE7vo8DznG0L%2FKyYwvww8rDWbDQwRZPTJ0YSd5Qp69yOc8miGmueF1za29vkPRzg3WJvPuzXNGgf44SJYT5%2FiCwE8M9w9PUiEn%2Be9ILU6sNMIaz38QGOqUBHp%2FqlB0tJvh9IV0dofM7%2BJzFeeisvHpFUiVVEnQkTxtITq4RpLEiXFaFZ%2BrrB5AGWQ4F8u59J05fATyshZpZZRscOGQf9mysbjWNqwmxrZ93tc44htfmi3mVlKJc%2FSzjlwbyp9EKg963MRvbXdLeGp2JWME50kDmKHgXP8h8TyGRbiQtIzXUddo97u3DbNZK7XlowbGx8YeJupAe16IjnOFoJbN9&X-Amz-Signature=c8f59eae724a1a7dd541437fc45b63214072cfa73bd3fc8518873078cf2c1baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=176529d65862b2bd65a64dd454fa1578d16c114a42ffb60cac5a0ee68981ca87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW2XOYWQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEC7peDJO93hjn0F5alK1kS1CRIHG8mqIEVgB6gMNylgIgf%2FyEnMqz4gNv6KUXyiFnncKOv63m5hXHYZf5p2Z%2BBcMqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5zc6rvEuQYJN95pSrcA16mkPT3OTM9om3rVjnoFwsONu7Ef4MleiBU%2Fh2Mkheb1HURV60wg1CZQvproxh4qJRwBcOFnVv1UbdFfUjB%2FKp7s%2FaJ1N2ihr7KrAYFaAGBkrR7t6I0T3zv84REX%2BLiVlyoRqw%2BgE2lVbtCJzM5uc1ENQcXUJVLuZE8ItAgP5Adaoi9l%2BScOaCF%2BeU5iUld9lLAh3SDmj%2Bes28SBd7D6g1XDtEVwYq7fYNTDLL%2BPeNTi2L6mOssxur4aEc7tIXn3nDpAvfDMH7oS%2BgOG1U%2BvoiOFht0fwNx%2FBpl1h0jLreR14Lu1lJkud5Z0GtAbl5WkR2LVmI5EVRdOFdYzTqv6kSoXwcCIXVDvOZRAngmxB5yKc7ekfYGU07jJVRS9ulwkSw6VkgC6yn5BQLYEC8R3acfDgLRfcl%2Feqt4OfPYBLSZLcoVpSMg60bJ8L7yW0aJuYwz18D5UyqgdEXHaoRezIiNIa8oXY1kFeX%2FnWR8pXeIWey8y8umodIY317nPeVJdJ55zRvfO22PltMfCE5SM5lgiNsZlTHh%2Fm%2Fbrg2MkMjlK2QPtmZH7uPVIsTuGr5lPm2c4byotQxCO7x9c2ZUIfPhJ0vYZCYa8rQxSP%2BW56eIjh6xmDWXAFI23jE%2FMKyy38QGOqUBhQ%2BNxOL4P%2BN7Gfw5D0TI0Nw3WN17RdczWmVDd8WS%2F0XgOl5KQX2fCE6l226kqOc7WFIpXN5gN7JBEZT%2Fje0iu%2FkDsu80qMmiH7nqx0I8U5Oa9w%2F5SnSs5HFn6Syi7flOCc%2BuZYxrKZD0oaakDKXa%2BdpktAjiIbeUxf4WFgloW5RJAPHU3ozrcs3mr0YKyeRQqk4w0RlYeOtltZT92o2wP1KeFD5n&X-Amz-Signature=fcf119a046e108ebe171b783da795e1fe4cb6506aa567e26261b78a9efb6f693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=da298f0336815e6a8e9af5393c1210a2f9bf803001a17019d07ba91534193a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNRIHPA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5KBIs15%2BbEKfFfd6AEtTfZNY6RVqjdyiavTppTCjMJAiEAuD2u3VthiGxiX28NG466MZfuiL%2BvFQw056E%2FvyqC8UUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FJ4bNQNehfOPGgTSrcA96XPIsGNHiQAroBrZLbtvAV4pXlzlJJ8Go2G45DtaqWR3F8t8jX69M5dst4y0ROzPI315yhmxiIvieO368hKAXkTmU3hyPtfv7T4xmsfLpfSaxz%2Bufhz6kfhKrKI%2Ffx3%2FnkIgfbmWdk%2FUw5UP0TZOKYFuPcFJP4kt%2Fn%2B704%2FwhomCOmuANpFc3ZqCDOdSAbeX0iOZwQpHwteNeJb3zTy%2BfBq065TbbqdqNQJflF03c48K%2Fzqp4qIArPUUJbHzFO2N88dbdZJhXPzNZTJRyF2a2YqTH%2FwtClAGsI2XUunqR8jAY52ThaBDmZJpFDTrzOIi2RaRKXsZiJoUZOTvW6YwK7w%2BxyF%2Bl56FVSEFo3QTqPQqBuTd%2Bh2Fe%2BMdmACrUOfReYV2yk9XAaNvVBIyygr%2B5oFncGi%2BG0uPwQu3pkSO3Dz8dBkHNiz5vJjQcUM6L7Wxym7kZ7x5W1x5HWLYJaEWRIX53lhjY4JfOxz1befwDr2DcMffPuZdwjyy%2BUM6gHNnFTEtQ1a3E4l3pEqgPZlQuDqZkT2Tl4qXB%2B%2Ba%2FwdMn6Tmh4PQSEU2K7KleSql3hNjWHFnRvNehre7xCzlSpSoFVWwdZvgcF%2FlV8YdhZIBUSVmKtYKZID2exKeYrMKGz38QGOqUBMQ31eWvINw%2FVe4IqEpK09xVhi8gsjUSE3GhKT09tTkO7ox2qgxx8AmrNerFvokBHzUfcHc3C%2BBSHDTi4CriPtk%2BObdmqVfOPyJ3R73HjX3Sx%2FSeHjn36FXHuG7a0tlzWjknHTXrCmBn%2FZGfuXwKfjRkwqQkWx0RzyJUqW6Zk8Gv%2Foak9rN43Fsmxothqz%2FCR6JQYW%2F%2FgZpAAcgwk3%2FbhlPnJXejI&X-Amz-Signature=92796a2b0bae76749467202677028cc3a891a2fb0b27b3d38aa7a1ddfa9e4501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRU7AVN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEL2aFn4857%2B0%2FUh2diTYHM7PHDK44RDdXp2NIEqwzz0AiATwhwvZHBPB%2FLMa39ZU8s4j9DrseMxytMuZbWSzPtXaSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqD967XMioLxH1%2FpiKtwDu7fyIv6TR4UeCGoNU7bK8MKo34Mf%2BkXrWgzUJLgAV7ASDISy45pPN9ldjRBdD6%2BL4rMqJ5x1MHcu1EJ0uCReOZcxMLCMzCEmjJ7u%2B0i4TTjQvWy7pYijskuTP%2FJtlx0tA1aknyT15OwWfTNe5qPN749RHtT9g8EhuBP1BTVcKcoBV%2B%2FhVpQ45LIK99ekLl7WYJK7cwk03NkjDydoQOPH9INEJ9SuHvnmmsZ7lwuRwfq4BqrWy%2BiV1T05JQuFhGlwPU1q%2B0rK8DGOVeAwyup3lsBLYGyJ5KYnEgPk0O1HwTc%2Fjupzxai27tP7pL9BaGlywjaVUZSU2xtNRYRh1qNspeQuBQmMfhYzzBh%2FD3r58t1ak0DPPxvNgdhhN6bpegQ2v9biLBpPeCIXTb6JelQ5aOUTrMoCmteV3Usj9GlMzvUs9e1FjRZzqbat%2FK5pc1nAg2lGgCKRosOjuwlw3qHlIFXGIri3V6kKW1tsNOX7t%2FRtBoo3oz%2BbglAys4RmQYd3oMiNUdJlqFParZoaQ1vqw0UosLVRYm9ZfRfJgzcJWv7qwP5XtLfE%2F49Ykjip36X7mDG6GoFHYRnsTxMMLu3p27M0MXXATv%2FqsAaEVqIwSXupB9S3MM8n6ayGtsQwlrPfxAY6pgFujUf46r82pug%2BR3q%2BooDx%2B%2Bb8ShQdGphXDyVuvDor%2FEVesVaXFFhXhEn6rw96CTaMVlK6Q0QVLYC6ZG7wdjUsXwnikLqMcq8DlFAIswA1sTE%2F1fN6lzERFxFM%2BTL2NH2Usxl51pskh%2BlbAsImd6vHoDN6btVskhno2OuVxyJgrg6eG0JbUbgZvvLJCe9Z5WGMspFxwxHXOBqlTaaOd8V0JmFhrcca&X-Amz-Signature=1fe80d04866ed1ccb881b5dadb19f99d7194e96fa60cbdfd804e10310dbea303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZB2TQ3R%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0btEKwGVoWhX0eka4%2BSR%2FcnDCWB82IZlA%2F5V4AG9QTQIgJr9E0MEYKanyQ8pQXGTb%2BPYSxCfCMd3mJUPtcF%2BrQBYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPP9paV75NAWJ2pKrircA6bZ8R0HGYoJ%2BWWUM4GCJHO48FFQbJWpSoeYdglJt69Ay59mhrDb2nhafB0Q2wwpYcNkAN98Ytcg2oXnrSy1bucTxKJx%2Fzdi6j6XihD00mGzXjn3PG%2B%2Br5k8y6Hl0Y3Y1tu4z4WpHDMjiCvgNxHOKhjblcJ1D7QIP77VLwzUWQh%2Bwcj21H6nymdghXIBP7ilaVDIEyKamR9O85eBPeCNgIyHERh6kbMshwpY63HDtGeFGFRiiqq0RCvqFEgR%2Ffo9BUrdO0x9HtbF1YrTw5J9W5M2xyFtgmHcPBF%2FDgdRPgXmNAtatwtvVcucxcpkj%2FmLe2Yh6%2FdIPy8iXhxB%2BUjtIshIdVoKSHWjJcq4qpGce%2BuJLWdt5crxmzeJ2goKGNdGZv%2Fva%2F4%2FKY9p8obRMapZ36D4kYA%2F9%2F2a3jBRsOQM2Clb1zF5iwHboZS8bTxB%2BJZA6MgPhfExrTpSZiGRt0xP8K2jQ%2B2nl8Esz3SBw12Gr4DJdeep9%2B4jSZZx6qtfCf6YgtG2ANgThu0hurq%2F%2FUXYO33ERVfnBeTQvfsSHiZY4zn2X2Q5spvD68Vo2Op1JtP%2BiPqOcEXuMZInWvAiF2OuomnM5E5pY68pp18ThBOKq%2BdrsmNzySCVKQOByiIJMP%2By38QGOqUB78GIuD6r1MEc%2FJXb3Fs%2BGUUJ2L1IF58D%2FsVUA0qfOoazXO%2FS9daogSdg1SB4ROdKapT7MOnuRjLun6Z1nd6RyEXFZxIWqG8YN%2FwZtnkbSVWlybEu3gDISjYvj7UYxVQd1TLkAfOU8XeQoC0QOSIW3WVi%2FcFA4tMec%2B7pPj3O28xTSuezlQhU31ejxxLarJ66xaP%2B8wUSEcY1YF2ErH7joqC%2BnoGe&X-Amz-Signature=66162e0081bdb73d808406f2d50f9d806a0c73f597705bd08359d8960f895a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEFLKWET%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXL5XZLExezFGLZswG0V6qMuj2SNtRtwnbd9FLtgr%2B5AIhAL3UlfbdzdINMs0E9G5GddI0r6AuuepcCDoZdWdOfespKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz19cxlNFVIhzjs1jMq3APvxGQggcly8wlfXUe2VdQrAU%2B7rsK8CL7e5Es4gz%2Bi8fPJKCpNDz6BFt3N6aYVrlLKyATSJPZ%2B9odA22fa%2FZi9q4c0qpGf0WcF88E5TpV%2BPqNAqfl7Nju3lGbVK5Jao5uUbzJAjr8xSWpFrFOHUyTxerFqrc6j6EybPamZJ7BIGIrr1d7%2B%2FBiqrQq1bELpNMFFQlg%2B5NZob2uMfDg4THZs%2FydGS7Oza%2BhlXahEHHnf8pb%2Fv1JzlmrshCZCiDW0oUomx6%2BoKUVzucOf%2BiumEpXVVuJ6PF5we62C1tHxYRs7QKjUxHI272zxJhgCq1BmAG%2FzDo5WjtCsVc%2FeHrH4OOP15Eor2khAcpriEpJ35qapHkdnkIbv7mdWpRtsRjfCCTFcHiga9C8Cz4nuutgZoVoPmfXyBfHqP7EYJycoTmNayYCtIKfEVRtEAUag8bDuU5ca%2BxE9TS4zrt57DygvwDE22JL9dloslfZOYrttJFx6xnjwLCnwdImfzY%2FSa%2FPYNRb6ncfPmTjsY2g8EU10rJw2il17ClhXeMaV9u4xiwb1mZ%2B6QIvD1PCOqlG65g1YjHQQVMArHBE5ossj6FdKGgebxb9gBC5LYt4KzhuGfdFdFqe%2B8Fu9j5AdhZVrUDCWs9%2FEBjqkAWaGyoPnuYAo8CoDYl8k8JhtBibiF8bD4oxUymHWZsVTthPYOq7UU94xzuz7vrGetEWLTm12vfqm3a4zj8gWfzJf9dO9Dtr2doQR6HY0WLYzle5AZ%2BuGcPEMhdrhPgrpU56HN0wVPxWMXQe00AgHZWYsj1GfgvqR%2BLR77b%2BCm69%2Fl1b%2FmKR7ct9sUGhSwTuE3dcpBinVCojBpw1KBq3qQBvck99o&X-Amz-Signature=62788ebc4376f871e8a8df956a015a719a35cdff05e9339a9a0bd95c590210c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTLGO7Y%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAz5IR6ZCwbw3y4c%2F8zUADa4iUZDslsxO9B4%2BwE8hongIhAMkC5K8IOgBfO%2B8F8XM83JKVFFxrwOe3cSsMSqiZHlMbKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQB7%2FBtzYwE6J04Lwq3APferhwYRt5%2B1bW%2F5pAkBuNcDF70AjQtYBMOoAWRDPgL0wK3FLFpqtW%2Be5eUgA8cVXTnKC%2FnFJGUyKhuGKBJreZw5Ls3KR2vreAJCCWByVEVpu7%2FCnohKtSZMYfkBgDqANlRdHWUJpwBNRpbLkeyrFmyAiTjt6ZYC%2FklTlPW19W%2FNRHjqkNSjKYCIP38otQ8S3BCgyz8PWKenw96fAC9ypqXtoO%2B9cXAISBsPdIUEUdpsC5FnfcqGUlFekMaId1VNAiDhvgNsLo8tBcZlre%2BhvmRn3H7ekp%2B6t5acE3L7tDgDBjkNj89RKG9laM7y57wBHJA9wgbsgO0EPv6EQ%2F9aEoAwaMdhk1Q%2Bg2Wb7JmJlxQRRtUURAqLgBmHveDP%2FPUj%2FznIPbmhlYyAcXuJQ0t1pmftlYfJwIE7Oj0fegQfeFvJvfcFqxOE7z9RPVQOQB%2BFMJ4P4Frf4hPUBD3M6K7Bxy4rWUU8dQJ9YpsC4EhzhEU59TsAEqcPcRbUipPX1dxgghjK9E5UmJz2dx7uG0JcWFwZVtpbzWt0lHD8D2SXLS%2BBSY%2FjaS5va25iSZ4oJAYsmxW8i1%2FI9XiVoSo35mmw29v7BAI0NPQ0FjAcxfSDIyHmbQ%2B%2BRkoBRJxmEV8jDvst%2FEBjqkAeZeMx%2Fa%2BJ5OcqQUcQjFXE2lErthi1YQ5OF4faKm%2BWnLFh9r4rmXo3kdGQCr5tPJ6LY%2BlRfMTdhM0YEUTYPaL2uDQfFl3gOLGGzZ1gWvAOvhXdzhtFiuJxLIVoRwUmiHF9LpkLapdPSVMRpl7tMVjfufWizYXBKnEoIR%2FTZKNpkRigaVx86cDFc2ixny6ogeQYE9c5aEqh%2FUSBKRovtVE%2BP19I8a&X-Amz-Signature=d683554e32260db463a50347a214fb58938efc3a68a393e06e1a3d68e2385c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=8d4ac24c922200274e52d96b8b10b718fa80933b6968da680c540cdd07cc214f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUHO6YB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEv%2FhO%2Bow8Sjkp%2Fk7GW%2BsEvlQAEpO7qBeXl21SaUmI10AiEAuurrZfJwk3LUO2E7ow%2B5LR4YvT6BG3NxcCOxU6T4YaAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMetF98CiMR2k2kx%2ByrcA4q0Q%2FvpUM%2FsoyFMn8RD%2BQy8U9wtMlkZM9ZtNIc2xGjO%2FX3VoTiloKymTHtN4FOwGfvqigm5Wqw2rvqZpuS0KUmjjBvY2HTBpG7evmeVss0AZBUS40KDoa6di2jzvJmJ9CaI8AfFS9NIiMeNrG1oYTCZIMG%2ForOLcICCo91wPp5XRSNeBa2SSxP3adcMg0e5Qbh0hijERJMrvlU7yE0V0OVVJh%2FGPFGw41NGEnBctO8jqgfrkspFthgFqbiymMP8DHwlZMotuT0e6uRViOeyRFo886%2BLIffCLyHmGXUaNpjLmQ690n1qg1%2BfV5z6JuYTsV1EG3Srq2Hz5bAzp5KS881DCA1LfaH04VdQ3USfWBQ6sDfkM5OORb7iepE3eoMTtqx1CquytgSL7N9%2BIeu5bfl98Ufq7NtF1uMeuhBTUOEawBwU0gjpohrOUWg1lVr3%2FRQDcTIBXRreLx%2Feo%2FSz%2Fy2y5zHJHtIyaaO7R75919XcY8YBp7QNLwPtk5HQjkuO7XWj0ZNxdAuYW1Mthqebn1faLTVvO5mKogBCT7iEE%2BF5E1OP51icLiHgPhcgzCXH6BiIuBYhLyj64s0ZAQGzALJyEaNAYm30jILpScQhGulLlm5y%2BjZsLs5pciGLMJiz38QGOqUBI%2BB8bUREItrLvVFGh0fZVdXlVQ5L5WQA%2B4qwgc%2FUJMdE8%2BMKqnX7euEvoyXcHA2jC7YJHUli%2B7h%2FrdiPupx6kpzf0x%2BuXZJ3keqyWtZ8aoof8eKo2J%2FnpFdAVnPeTicv%2BCPtaxD0lLcsnmRxWHZLVsJtRxyp7GRlqFHVy8%2BvmkmCGyg1zvCNjWtg4vs%2Bnv1f6C%2BxB9040y7K%2Fe3No1PQ%2Fpr87lHa&X-Amz-Signature=8f1598b8ffc709874295d12eac29e49f136a1bfdc0e45926dbb3a8db0d5afe94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=94b91b2f9d92fe2854af120ee4b568b326c6e480ee7fca0f97feb2b464873750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=e86bb0ad206d247bf48f8507166eba8eaa896af9ba2bb33bb7976a713a0ae038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=5323238d4466708a1f5cb2aeee705817cb3416925282a9fc4db7a29538e82259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=8377d77d7a87bc26022cb20e88629cf52968de2f26107920a117d6b74024b28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=a032a05d49e8689e7527fd32788037f800da54a113ade41ce7721969fbacd1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=9b1db7b48a71bedd9ea1b4df9c8dbc14bf5f1ff3e7442a8070b85a17c7729b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=5323238d4466708a1f5cb2aeee705817cb3416925282a9fc4db7a29538e82259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=5436979ec4c154e93127b600d8eaa195669e3b1cd20fcd9b00b8d03c37db9bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=5f1619b4fc059f3108e0ae14a692e83243beaa1f15391034ee9048de6e346154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257SJCRH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEikyyJr5uAIWqsamg9cFP%2B5OKHsMUmryjvrTaepG2IxAiEA%2BYO%2F9o8e30DoGXptwdmpZ5l38BcWx1bhwx04ORXxiVwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaA88a03tkj4Gmd5yrcAzDocgySNsk5bCXIStwPDMvQ8sk8cBwCwecqdkv%2BSMnsvJju2y4zR%2F5hFnDxsMkFgvQlujbnP8WulCYpgWL0%2BjcbllHUKR77fZT%2BbnLdX9Sk5hxFZxZabO8%2B2WtVgWrYVIIuogDfZEuyLiNb%2Bm69ZekkRdclf%2FTqTTGYJk%2FGYOZB%2B%2F1q5xUhH8zEmgKd4S%2FZafrfX7AFw9AemP09sqpTY%2F1fvSbJx9%2BMf4L3GBD5Po7DHvf0SbITHBOfP8uc0kQKwgmmDTAY1psQ55xcrw4pcAvACLtaYRw2vIO6fj5GjhvN%2BNzyUdQMji2cXtuXvzbgcdGMOviWXdqlGbM61y7jlWSYVqoWXzmkt6U1AMDznq%2F0mAcWepY6EU%2BxBgBu9SihF9c7NCtbyG5cjJK%2BTYN6AYX9i78Bc6nB%2FYqbLbKmVIe2zyOzsckLUqaNPHdtCZ6Hb0txZxdQ2yzxQPolaK0SnsBRupiPsI8OcV5u4pJxzamydItEpMWbqVEYAd2Cf9d%2FpNn1MbKb4iIIsoTOthRSpEYeMGCHyO%2FwpIBci1ncjUEtbq%2Bmmqa2uQeDpJiX1RHsilbK1Ah1TGhUJfX9H2vmAmu4Jy2wHPXVl8ESMJFHNB1rkEARuqx0Hu0TZAwBMP%2By38QGOqUBaPS3y%2BQyB8EXAe14Y%2BRZBOX%2BPoFhiVv2XOPzuhVdse87U4xT8ziSDkFMoE5vekxYCuwEFqtYLsSPbjlZ5BuQQPGVH7qt8Qs%2FK8gD%2FBlnFXwnwy87zHx2Prq00vYRkkFNbRklolktADoswov3rBvf4nuTItkC9rO1EFMquTHURtJLVQU8cNBJFx7B2Arhfe8iNMlyWppvi%2FJWEv3yodAc79cFUPWd&X-Amz-Signature=0fde4535221c937fcd4450a7eecab2ed567031b65c06f81f68d445a4fb92188b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
