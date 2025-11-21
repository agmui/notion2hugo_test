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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=a2a56a4066c4049b5a073b75f8285b8e3b0137a4353e6c8a18951a9e3a655e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=c804bfb08b2674d3fd03a3096b9ad90a15eb72896677aeb0b4484acbb4d520a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=5996fc0908cfadc1704f11a87ec2f010d81f9e21a42143a2790eddd6bc92b6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=e3707a6fe6b3fa95fac782ff6b5b5ac536222ba9b1b5d019303c7d25480938ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=706e61c7bf109b1a5800df1a2915410de7503e7f260ace95f2869767c91eacb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=8de8365b9a1fea78f8f07f4f3c0712ea59c1a9c78b103edc73da420a0dd899d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=81f819e91ce2faa84f828dacca021647dd195f01d55ef703adc47e4d291ca1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=1aae0cceb95e45608a981759abeab790f2f4043ff3706d823198e5b901ebce23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=c901639f3ceb8b7aea7180c38aea6f34dd065e6afd1870bf44d89a9af41d4f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=6159f94c29dd961ce370f0a8799cad7b417b9e54ede509b83413bcd978543dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEQ2GMX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFeR0VyQvlWIZZXxFLohac5GbrzKp3vUbXj0BujjOW8WAiAtxbWmeZ7mTsLYG9bc6UpZL83NQ8%2B6yT0NttfUjo6gOCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMVP8fdgbPW7UIX5M6KtwDEndobg7otHRwtHyL8CptIn%2F31d6DzK57gqWUA1%2FG3fcZAmI7cqL30CIbNvTzRdhNhuL0ZD3skhboivGQ1TVS5biUoFVVS0Dti42LUk8kITdDeSut0XsVmkXfydCI4xqMDAC%2BR3ufx1ojahytsosgvOlyd2hPfJy%2FWyE0BlHi%2FkfMB%2FMYrHUGnnGdG8hjYOkLFViKrBGxpPM9dH8CiFlblDvtf%2BRb7K7Ykv%2Bsjrx4SMeOUsMiXyjR6W3Em5HEizUlnpZ9iaPWvBgqVehd9dqHB6ZpZrwqB3KfGXM22KfOO8F31Nmz8H%2B6Ev2DZuN7ihrIV5uzZumgCza2zV4oM27BXDArxhGWbMmhHkdyYjlvGUr9hMo3LmmvqunMrx1%2F8oLQAhnDc6vlGobByq%2BcklqIjpPBa%2F6AjWm1eoSj3CdUuYQmR98WbcOprJMXFK47wzzP5s1X%2BPidFfSeH67JYZiLJj9rq9uBZa1y7GAhEsIDmUcQIUGTjH7XZbnZ4I4l85DfBLSfvyhj22E5IHCR1guQTxJX2h3%2F8h%2FpvLz4BY7Iizsbw2CgwGYrdZMs3%2FlOSfMiaRUuk2xJgxp9170OUF2BqByHo5zULPUCg12%2BXJEvGr8gf2FEg%2F3V21mIg9IwvP%2F%2ByAY6pgGwHeKgRPiVO5JefGQH0AOJxNPtoxo1GEMBJEv%2Bc7PaBLvTxyqWeQS%2F8C6nqMeUNDDxSjfK45SYMFmjJqaocVq8PY4lG3WjTjlmkMkkGrt8lApt2Z%2Ft0%2FaCINon1sRAnjjurjn%2FWbk1ec407%2BlBfeI0hK00jU4lt%2B2Wpw4zEsAJSKS8Z38P0nrSgRlQXq8tQCqZ9KK1%2Fa1yad7I67qNANmUaMdXtfUR&X-Amz-Signature=ef8e1c922b339e28f8f1c7c30d66116a0163f2d70795da5b7035078737ed0b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBKLHDO%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEFVCNTuXqNOglAG0ihzcZS8m%2B2ecb4%2FBiDYeJh2rzvZAiABy5i5r9S2jPn8wrBCJQnOvhNAHeURxZy9B8FiGl5BnSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMypT7H9rQpfE9gkYNKtwDY4ywuACHWaSaLzenizqi6sOLuKbnzt8jDzfcQd7%2BEwlUcUlW6dpl3E2wgErn2HxqYFekxNcfUF73R%2BzW0mIX7qWwwyVtYkOllTEzssdILc6dAkG3tH1C7a96eoRSa5mcPg6LyPU4jyUKXbzh%2BWhzZxjWl8KvPtFv%2BsQP130OZtNUf6%2Fdh8sky41R5SDmU6fu7oderQigD9O0NHd0ynbeL6vDV%2FmiedcXV6G7qHvTPBczzX8Z1p4eO9vhKWDFyTveIjnsvGbBRZCycKBctGucafz0McQ2xDfs2aNor4NIQVc%2FK9jE%2BgahaTGSq006U2f12oY3r2tZjlwgw3TBnl49iWn5kCWCbN5HKu6gPY3%2BaMsNY2AcofN4ms4wInC99nWKZi4b0Z7yfnwrOJ%2Fqae5KW6qpLIMJj4qLQXVYwSGyH7mUH058ew%2FGj4Bx1Svy0HbbcMuyh2nQ%2F9oPUPebrBxLOB4Hp6qNwCx46EDwFLg2Q9pSAA32zl2L6B5UAEWWMAnA51%2FQOYvsoc%2FXfDZz7nJk5vBjw%2FS6i9sbZnovP0dWcBy15U605WaHcwAiNEKe8WZQc1TKpHxW9S1BrVZ2oWri6VEo4%2BjSFbIihcDNELlYJUHJpZQGjgXk79iaHMMwx4H%2FyAY6pgH%2Fkt0MQlkv11nssZYLfwNbOmnBn%2FSN1RdN7bh8AX%2BbjgUYRbX4dKyu5cIrfsf%2FETVRJsWKDRKPH%2FNBGCcfRSxFHHZy3K1bk4QvdC5C56ALC2405KTk%2Bc9f9nvyvmZfc58DGHx1DTvydunlpyPrcexXCvWoXLkuEJsfF9jYt9FeytMS%2B8xrTJb%2BsPwTYd%2B2Is3MDTO67QxzEc4JViUwNAqHlK4hpiB9&X-Amz-Signature=97447f79af57c91749643e7ee3c683d2eb1335ef1ec865f8e0afedd531bfc092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFQ3DWZ%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCQpD7PzFRqhZd4ufIk9xHJEFOwd56Jh3FYbb%2BFS%2FsnOAIgKCyTKR90dVdL629lVJvaSTf6%2FwXCYoEVtwU0wDqU48Qq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFN49YptFinchgsImircAzU3LdQ9RNuNixAB4SZYwLn%2BOVf0tKfGGhsqbqOO2RALgi78z2at7j61CSpMnjO%2FUfCYXZcZAgha8inAAJvmFLcUwTnsKi%2FjoR2uXOFEmuptQPlVcc7H3%2BO5CKdCw%2BJjOAfXGV5FgrZRGplUTQZcZ%2BIDFY89plA7NtrI3snACKZWDVOaoFtGF0WFTKzem16VW%2FvEVoLOYmZBWs05r6l7IhvOeA%2B50BJYKdh%2Bob%2FehO8CXGvtirbaWcsGAxKuo4BP2JjBb3x89%2FDKEBhH03bZLG4KYU7Mf7G85w%2BMrF5fb6gms%2BNupyg1H6t%2BXXyBD%2FBH4rP2ul9xBSnrwCmzdN9dT8BQllcNok0qmactTZ6qPo7qTO2rY6g7poMVk%2FFsjSvbtTCE1%2B5REb7hlLUjvEnTr7PnFPdB4rqjPi%2BoGbkZkQkBRsvybGm%2BudFjLG66bCn7EXyvmA%2BdADPspVNYBga0voocIp448gZZgp95fap2FF0zVKrcKYfoWwocCS2MMkZmT%2F2qM0F8izmvYcbDmDQ4BdW%2F%2BzFkN6mrKetGVEHoLP%2BYXlqDinoCTXMqK%2FwkK27SMON9dv5VFJ4se%2BuSMutFStxLDjj%2FPY9z3JSEcTSF6WRpQ3e6dx5Lt4HAGDS4MNmB%2F8gGOqUBZE73Jwov7m9836Z0%2BS%2BEwThJcbE0QAo%2FUS%2B6z3yVMhQE8XHw4ZBWmPbt40MjJ%2BhxaZr3ym4LdXyvok03cRTp22UiXmbD6ijJEvVECxJrgrRcYsZHxbY554mfcne3zU6dkAgC3QzjXp3aWZiSMvA1wz0tDpPViNtRYvL86MJL0fqVfAtdoFKNNZ3aht%2BZOrZRmIyqAedryOGZyVU8ZntJAFvEWAXF&X-Amz-Signature=609682db82fd65482730a3e3f22d9b018c5b0d53cae4ca517edc9df23bdebdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=046b10aff687923073a1d53db9c9044ccc99f826d70e3d476e14a394d1e7d593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NPT5YR%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCptvyfmGLsUY1E7rqRBBvNTe6m%2FGdm4Y7ivWHDxWH8kgIgeD%2F7%2FdRhoVr5oAZQbQ2G1FabbcWI7QF3%2FRB6M6Rz%2FHEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDBJsUKO70DuNqU3KLircA6NPieXe8UiXw%2Fgrwa8rnq3YzBaANcdtSt3OXAq5HF85mi4MTR%2BBqXshXablVdouYABulgxv1VhOMCtpC3TuOfW%2Beyn8gyEBwaBrLvc15VZsTYURW3PaLtl8IuZpXiMluGxeUunKjPMBIbIkr7Hc3qnPdxAhP7ui6jNyTyKRTVHL5ue9zuqkX9Uq1W1%2F5%2B5X3rYyZFQBQjAYp37h2oM1Fp0kap21KhJHl87NLs8xzrfYRkeyJyTLyhXgonyAt9AeN3J%2FGWwnx3A9h9%2FAYQFxTeTMVQTQDUjDujw978iSzGQN6FfZBOCRl%2F3sxXAtuVdJQ5bNpycpJMefuQKP9IJAUjnk%2FUf1nI0FAyCyu%2FGLSm%2Fpy09Hy5QE4Yq7BDoDtBP1tWZJPUSzo6Ry8o0n7eHBOP8%2BqY50TbXQb%2B9y4j9Ez0vhddpIiIrHTwz3PPVMgnBT3iGjIZSKhLywmy48pg1QQiJv%2F5qTDgSgWyIVk63dlBHOIJmoT8T3rCKvralbg%2FmBsZYDXMpY8NiS4lOB2XRUZN9%2F2ILW1WwhWmKFyaocB2DwO8WDx%2FAFXgRu2FyUN25ncDGTLBwkaOcjxZL2ht7eC%2FIbhCu1luiqd70la3fzbpyufhb9kPAColn0sNBfMJuB%2F8gGOqUBMUOF1rBoLhxGxWf5oiEuSD%2F1XsSklDN4OxpmxclTG25EzBYq%2FEoPN9kAslGNhtOMbdD%2FPaKKQS%2FjezqpJMY6qhJ1qAVAUE2PzvNIEsUtc5kxdQaPyl46U2at5u3UBI1UZN4O4c1RnV2ZWt4OMuikilJGQCIJq7iy8liX%2B44ULqy2jkDosSxcagU7ggzQCV096hkuSdnAu6aSZZeN4gw7vrrdeDmq&X-Amz-Signature=059444cea893986b393e00d9aa9801eae4c339ac4e834291312ec25aec48b13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=f36fdcfee63cdc77d914e41e0805e5bc1bd9f34a053e67eca016ef7cea2d932f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNVXNZ7D%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDj%2BtH07EZ22A2Mtjv7hyui%2Br4brT0tzAvfhnb63I5YZAIhAJSktjDquEVUUNKQUsmgoy9aoPbR4KqiMQBYdjR2w2d4Kv8DCAMQABoMNjM3NDIzMTgzODA1IgzgKedRKDmaQ9tR77Aq3ANdJx7kDpWxH4BSj1hWYdZAQvkRsotH57pVmWvp2MdRgGqYzqybRp1AQrQ7OVQaedmjpmmt9BBczm76r9dPTKyXrFCUwGS1aP6pzSW023pa9n7tcVUPsKXpoM7U7OtUsgqltntN9%2FLN%2B2tRVGIdAjHddTYcJG4%2FiBlDdkjm%2BLYt6pQsNht3AbIjl5H6sYEqb9dDtCTOuUUFw9L8JGeVQdEUUBXEGiYcEoyZUIck2tGiZf3FmflFUjcHYcYZpvzoe8m17WJ0QDPhl8lU2Y3erOl%2Fl6Q8n7q6YRwkru387O1V9y755qEvOfdxX9RB%2FB6EmvjkVJoV1EvVQA%2Bid9ORAG7A64OSwq2ypBB0zNkoLLs5F34Em7GghNbgwU1Ttnfq79P4QMeW3g5gygOjOXGscPXawWL3JC165XHSGUI747grPXYjYUEfWWJudrTTch6hrk9fquZ5qsc6FIZhKA%2F1bwGydeLsDmPpT2wfoP9sK9YFSoZ5zuWXM2SnYM1TCzT54Up7ulnZgPPfi9Ahhk5EDDpmiMQPdiOOn13ARKuoHJl01hIFQiwEnpPb8Z1UyAwew1frcHTBRkJtOjsAf9aUJ9dRdDoMpY3Tf1vK%2BI4IZZeY4I%2F4zZWumCfhiMY8vzCzgf%2FIBjqkAdqrg7N%2Bm9ZXW1ooLgAAzEi4A2FoehCt%2FnVUiM9ACoh8uQYNHGTYjxJ5bzWAxMvdZOYHR2BVjqcEXNLKAuaPcLpRuzfP5Y5ixKvJZm3goKkkKO5L%2BCNX3%2FcJKzi9BjbW8y3m%2F0qboWq2iY7apQME6r23wiuSlyKqotBcziEJJwo600Dh6IY5ElOf3sWHOXboNN9LNAaaPhLWPDyjeYj4FjY5Chnn&X-Amz-Signature=8bb279fb32d6ef56f53c1e2dc15745103fb5749a2c0029f1eb13a807637cdcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=3fa792a68e86467c43451126ac08725d1548e60da76905d771c2c5cf4d30c9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGBZRDX%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBeXf93RBfClomVjIxhZzqQvivmpLHJI3lYeY88pWnLoAiBFkk0jVOoqFnsxh2J%2BNlhQDQpLHlyi9XkYr%2FSmKNTICSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMnbmuHXgcph4c47Q8KtwDTCuk%2BXDWiOpGlgP9qd3ML456vvOW6R6UVeKDnmh5jPA6PXMJebXK79S9GeJnW991cDDuCpUUqJYk2dFpECWiqOmMA1cVl64xH3uizPT8bPWr3SBq7w%2B8Skomo3RYNAF0RqPzaM%2BjmJlCMv%2B0lE3LMrl6XidBBkoPhG2qO83hRh1lyTyXPmWF8xBs6zh47vQOc5mIMZsgjH2xICGbwMPNlrKcWRmGfYqGF8c1qPyaKW%2B%2FWLP2dq05diX7cJjXCI8cx1jpsmBMjnB%2BUSnPArMrwudb%2BogLSHaQE2yks%2BnX%2F5hk37Asv1K04WNUVST9pevx3ENBtD8INmaa0cjM24PgiFkvjfocVKoFUKEZYBPiC3objpvttNJdqlww7PRQZlbjHNulYRTqigNSa1TmkQGvtuouo08Ac4%2FyvAJQDxMKj%2B05tOHsOpu9VPDz1hAlzSne5F%2BWCcm%2FSiY7fQj44Fhh8JayrrdiyB8iryKgUEVAajYhNIe37VPTWmMqmpjHzcPENVOLBOZ0wm15Ht07JVRuRhAUcU7HFnHnWc2VbumAU0YzZp8rKQNIcE%2B8CaekzIsytTEaecujwNd6Rjr8BtPvvlP9u0V%2B1rn%2Fpm4LHJJ%2FOjoXXe7fXP4BVWCMy%2FUwvoH%2FyAY6pgHu0U5vf9ll97hXKdx7pzpTzXrgYRsQdE3rg7UfVeEx5E9H6jZspchHY3M5m5RYtHOf18f8mnhPL3zWC4Ah8Q1ZDMM0vk4AjjFHPjTcf4bPWz0qhO7lTsQO8jXHBuj%2FspXkz8pJdoriGLcmuyLnsabo0QgcaQQ7VnFIE4L5WCNGrn83Rd2FNjBMm2QobuoYB%2FbvqYTjO0US79M6cNTySjMPn%2B6VR52m&X-Amz-Signature=9f1505d6f9e2f032b1a853981d962c9584500d348a463c1342096423bf9542c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=12e0a249b291ead3485038bd6257538e8dcd5aa69fb3b85aef530f82c1652bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ6BQCNH%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC7uKuGct6yBx3dZf25OnC0coAV8TpZak6ZJaT0Xuo15gIgWGnlNgMtYqBHZ4CTbEnz5RlOCWyEPGi5nXpqvQXvrgwq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJLuetThh3aiiiu9HircA7wqSDVhlPKu7vELyggQWJI4K6tHkHMZpDq%2FEL4tb%2BukLO3FmVp6oVLoHQNKQfbdKS6WCWnO4XuDBPXCdjSspb5FLQZS8Kk0jlZdJt32SOJLm7H1t10T47lMoe%2BzRmXtgFfbJXKUsAq0ypOYELDNL5d4Qz%2BpljPIo6wLOvhzgChaveXKx8y2NTcdlYP4dzjPlxP5XhGeKWJXmlg0LeOCc2Y%2F3SeEDpZP2fXZXsE2Kp1e7SQmY%2FSMCYidyidmiBBdg9bWCqGrs54sQ7O3FtNdd%2FQDlyzRNDCFleCQ%2F7Enab%2B0dkVpUQvIBj9OiWKip1U31W8Xbzjv36s7hKr9m7Rm9ddIFy%2BUrHL0A7WTrkclrRzeJn9RViDRInp9KicPAUysVokAgEs3PIxgBc9avBy8%2BcPK9JP3JhhlOFRAdffb1YcGEWroz3kMBVq3ycUKdY%2Fwjj0ASz26DSg6jEk3EIvAjLFxZHUBhVEj%2FwUBYLFJ0ww0CNF4cjg77w7tsnf5pmF%2BYk31EOknVT0jA3Iw4WWudmUp1Pj2cPxEzn4zetMTnucrH4lZgjDAtHENNE47GSAXK9FwSF%2FjKrE01o1Db3EZvgEjAy%2FEMNpLJRF5eGxJCZ8BMEqlTvNkiHwMW%2BKxMMaA%2F8gGOqUBtVpCElUMZtyJoeZLo5aS0eY4kYvxXxijUXGbzjyR39%2Btoza8QdUTzB7GzVEZY2hSLjQYc8tAfyjh%2B6I%2FNhz9hM%2Ffyj4ucIQPx%2BzczgcJ0aLjjcqLKRsbAooWlcE2fSgWhJTFcu3HYXga9zBwkKKo74bUFZwJv6uPdJw4HYjTLdsQ0cINIEcq%2FsvXbycYaB%2FbmZ%2FO02viOIpYZMpmBtsZ0%2B8W%2BBSM&X-Amz-Signature=365bd2a7a9df45c204c6568e21f7ed46ec50f58dce240f6b136c5d39692d90f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=c3f02bd11e87b7b4cc32831b0a91d11724c06433978f5a5ca870c9b6b1a03552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6YORQG%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC2ddr7wezmpoIbcmBJmmcmysi3%2FhzYA6okeBoTJceLJgIhAMbMFTP5Ky0h5i0uAcdDcyAar41%2BxhSXiOMfNuJNeeggKv8DCAMQABoMNjM3NDIzMTgzODA1Igx5e3JIKMZZF7CPkWMq3APVB3E1SxYszNeTpoiY6kUcqJ2VyOMVM3Uvoj7L2KxbK6pqIf3ZzE%2FvUeIBrurbLN5xy6NsSrzu2XebfnDfw4V6SrypxdYqbxNYZzHZKx1w%2Fci45%2BnRxnpwLwXFXpD8dbdjYjiPv25AgzVrG%2BBQj2t8M32v2xSdI2Cy85nq0vNdO9yPC0600Dq5FDv28a9y1wGcP97djANNMF6hnZq29XOSIxXOcrQVm5quCs5lPGS%2FVT4vZNX8riANlw730VGRW9459lu7c4WOg3Z%2Fi3SMIcW4bVlJyZzp5H%2BJsHcHUK4NjPVbVIq4tyhhV8wRSsphNW%2FJ5YtdoCd0rY%2B72mXBJc7UhxuterglzbXD6y5E%2FXFh3TsSJZrgvO5nVtIIq4gIf7oPVqmF%2FBVSq2iMT8FdVBrGzENAuLICwox8nWTwp5v0ir%2BHzyyIKMsSRi95TvIz3VPlMuAEOzHGMseH120Sfo%2BbtwFskw%2BBL0gaEaT4NUTKpmDSsZRlDOJ2QRbMfbpZ0feY4P3QAQwZONAybPFgjqUPjBQHqmijAejoUS4zaeN9KMUuoa6bboMUA8IH6YtnDE%2BbOBxwKkRZq68kcHNwKIuKEDuOBkxK4ero2P6ID1inpcdLw1WxeeMvmBHx%2FTDn%2F%2F7IBjqkARQCut8wXEUMBhfOw6l%2BA%2FJsoNE%2FYwgSLgpIUkv0vnBDUzpe164%2BiHII2iDgllsqYqWAB1tN3%2BxbCTNPH9hFr0RuDIBlEnE97MV6gQXqHmWP3DCD7Hg08%2FICMBqfSlkM7%2FQ3seC2omWrJUczgXI6FKPiwdCoiJ%2BI2aN5l2JEOJNqZUqwOP6X2u2CLtAM3jz5XWgnomAz8K3xfFmcntk%2FR%2Bx%2BD%2BoD&X-Amz-Signature=485c949364d5dc72d10788208316dbdaf56deeda29f68a384d0cb62b35f2858e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXIL5JA%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFtGSFYHOtcKKUE8rRui5Jc5frwSLM65orJN3ofWyqeGAiAPM%2BoKxiLDVM1YwLqeiyB5UGkeB%2BIRD6BbeaRqlheq6Cr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMiPQJNOfujdrGyElpKtwDmuQUoT22nrh7CmCdtgsBG%2BSbe5UPxk7SPFHzpUMxCiUiJ51dm3KNEweUFfBh%2FNJqQAgEUIa6WIl2GiDMv0ZDm2p5u0M6pDbqpeZLAJYzZvnWgup4J0N5adNNSvJ5Qg71pSl%2BTquiYxh%2F5voq9k2V0tsoMU7J%2BSfDgj1xla015izLUJyD2zayzBrY92EaFgowQeP6Vbe8K8I06%2BWCjo2U3vviNg4vo%2Bn8ZAYSaKT041cMa2TBi%2BUaLmsOCl0QmU0iiTeQ9QPhl582Ij1pPPaQ8s23WK1KQqJ2GtCCtLykp8KQfhQfD02kfMW1baJHBN1gQIdBfclaS9ouIWnQGrK5C7eUc1PmjbjUX4FTWfwY5lfqlnway78fzz8%2FZptMgfvNRygmKLlwt3GrWbRCV5krAgYap7nfMSI6mxxdd0Ifa%2FNpIO8vA1Kmdrm434cIpU8pUYIaaTpX%2BMdfA6ffJnEz1L8k54i6kKWbA71Gxxd3Ts6JV2vPQadlFS7kFPlAI5kUhEKBAig9jMjjofJHeKBBslY%2BEy86XdtgZOlEF3az1wjec2N5MgAwl7rGaDi0Gi193pjZ2UJER1BvYC0Vv5rKVRbHdPqbitG3M54QwdE65FIEqk9VaGe3HRk63Ekw1oH%2FyAY6pgHAAKAiqAZdfcnbveofMcBMDEKy2NZTqYNhIsaB5DVIiubxbkPpUsM4w1HIlo16GxOuRK9At%2BCHsF%2Ff69VvRiZW4ER2PY%2BNgIYs8yuuiXemklbSTn4Y4v2a1h13cH3ST1dMqyQFuA1gmfTWT2Mrwqz%2Be%2BNlMeOWVQwQQ1%2ByWhCDZD1dJBTA%2BtxwvTped787UpTcWjOUGB7dUjvoBFVPbd3LKt6JO%2FCq&X-Amz-Signature=159be13909f126da8cb5d9879ee75d03af1d55c7381f847298d4bd6876e27acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSSUCQZF%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxheJ%2FR6LkJeEBhgCno4Pek47aqhYUKp59kULyUkzVbwIhAJn71fhaVEIn2WRq70Kxu10iPUbOQUyi%2B9tcBim3PT1xKv8DCAMQABoMNjM3NDIzMTgzODA1IgzEV%2F4lkv%2FrW5NmTw8q3APiXO5RmKBQdjnM2YHkC2PaDbID04UoAJreQ8GyUTe1wmu7oTSJKiz7wPHXCewWKqNzJf9ISrAZuxOSiVHKKBTkgXQHJixVMaQffI3zza0zJT01vFacDnMFQ0950OQMKpM33gAtJEdyaAjDhoGJJyLZrQfldfN1IH1Bc88qaNcIS3b%2BwBnAS7k%2Fad8Jl48gAbl03RHrv8hYAKSI%2Fpm%2B4NmQ4IkHSvnzPHCmttZP%2FSoOunyHocrRR8mOqJk5T1g96CuqTbDAJZ1PdhrnD2jQ9tLjBwuJ6FT2VX9FLQBvEsYQm4dERRLbN5silrB3Q3fOdJpizzcX2f7pIZa%2BHDJ5l0sCwWD0FQfd3pmJ4bAb21pqpJ9gBn0jAcick%2F8exP50tb9VtDxr%2FAg3pZ9Cpu5YOlBWDPOe9%2FjVOkGkXwJ0zYc2Q7NgtuR9l2N4rY3EzOE1BBeNFuperi9XGc32MtfxBdv4RcLu1Volt9zjXhxwxNDx48YsNv%2FAurb2lknihaub0wRu%2BkhUM87%2FPCG1Z1t1SmUFdifptpX1Yk%2BCXz4sDRL%2FU436XoXTvpe7oobKzi%2FnvknZ4MDXgoKXSxMU7LULsVeb5s%2Fjz0%2FZvPAto18QJqzetOeUWioxHPqRJRylNTCRgf%2FIBjqkAege9sLL%2FJuC02QOCUITTGwMoiVOl3ASjLbH7JJNNSxPmNA4LLBLsNeRvtHRFj3bka7pc4Fu%2FFQaSCcJlEpVca8Psk5JHBE6mUyB%2FZDFjbjviK9U5aqcgUcmz2Ia39myKYFfs2GtiLffFH%2FFtfl6rekbdMyqvKUBK7fd0V5%2FH8hW17e1%2BVEHvhmU842ga5NkQ8Nf9aY9RVbefxZAoWjCD6w%2BQWYT&X-Amz-Signature=99525a12d62145ea5a80f1dc53e127e6d0c8c8e3c1a9737d57cb9e799f2600b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=80c501ab6a7c13ce634f5d243de735314b305f26fc87c7f02b8d83dcc8231121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BGOZYB%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICxqR7nbPjU7V58F894Q6zFdoZsvXVr4ENx4OjMeBHbVAiEAx0efXP6OFSPu5gIcXLe%2BRMMJ0BJ7KE3GZ1Kx6xKTN%2Fkq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJFnzX83CdwgzXmY6CrcA8Jd0gDg7WycZeQ0Y32R8RPG1t8QYEQK3BWlzCrWYseCLotJXAjX4vlIDiIMUcKupDKTLNczusH15AKoNjRfUGdTCnUH6Iz9Z2I1BOQ1IhVjfQ30aEJvtqGTmIcIew0%2BwSW4Rpru675XfLB6sCJZnAXww7rUZOdUK4ZdM1BrNPST2RiTb%2FGFtgMbbpdZb0rloc3SohaerA1m%2FOGCRYstOWlJ%2F6j1PKBXkNKEXaLWrbVTbMTpW1x%2Bd3HXvqXyCvfFoYnVheL%2Bln9B%2BT3%2FwMT5TxqWC%2BD9UH415L4lwFkxo06EaTJkuzxixTauY7kuCaX5CZshleENsUL7rgEJb9ygqmimklJqK8NCVzfKSFFtF2ue4ztmRSvC51oi4dT5SKAJb9gww5vpHWJQxoAvqQPK4PVV5o0XDiVUQ5hVMg1tInlr9p%2BbHJ%2ByK4gkzPMMot1Q%2BY%2FZoj8mec%2Fv0nHLG7%2BJBmYfKXpMoorwH2jkijVHtoKPVWBelKCJLtFPgBNGw0l8VHRLiM4c%2FZ%2FKB13UrRTucVMc7SIEs8BCQl%2FkiDpZep9dNvxY1d9UMlRQs%2Fh914SHhzWejrgGwDn%2Ftz1cTSIcBAeFhXySTor4W4z5wLPDqGYP%2FZvW3Lvjvs3I0JqYMIGB%2F8gGOqUBwmRSxCvezSLMs4iZGiGJgaBoLg2eZf35AGhdSIYG%2F1lm%2F0ei0ASy4cxt6ENBPFbXxyk3s%2FQvEwp%2B7BoTdVGv6NOW2T4uuEkK1H%2FQjpubMTdQBzcprgVA75ASOS4RPy4lPYpcmetLhqMisEvZpNMgdCW%2BCl9jct1unPiD5yUK1tKEJf25NwpcZKmmkQungDlavBsWP641f4sFIX9MsuQbCAoxLhk0&X-Amz-Signature=e2ee32e54e71476507f63f1acb3f6a0b5dd61b0f5f2161f1a1ef19a357550c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=7a35decb5ce40817491a2c7f4126b916d12b340350369a306c4cea47870b162a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=4576f2f3e6fdb16aaba4fcdb70feb80a634244023cf9acf542b92d246166525f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=590c770b70d23883b055700556cc94a76a24c5a66e35b6e38b8c549149323db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=ae98b0a91d328893416e13247f093ac25163443bca35e32588d874834c41cd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XWDBUT%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBoN7QcRvUS2lp6kU0LDuRaf9fHc9VrLm4gvw%2FAcFHhFAiAKnnxdCmGXHir4HBtMpMJKu%2FyGLS5qfcClPM6t2wS%2BDSr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMNKl2l6nQErGBa2WwKtwDRgfzpxzh1fgcnnWi5w7qPsv%2FjfJyzUB4UBh%2BJxED7DjhbjAL2x0QY4mBCsFVFQjenGHyI3zOUHA8qXu%2BDuGeASuVqbHvs1sg8OIBSlGAEh884EKCG0RrUgr5lqkjfnH31uTS36f%2FzWjUXaMC2b6gn3oILDO%2BJTCs5FNsW%2BxEX0I9jLEKebiJdxw6Wdh13EkitSirgFJnUwVbzFQgp12Rl5l0rn1G8U%2Fxm1XRFoyh%2F%2FojTRtESmtpP2dayFF0NZX7yDkDKSf735BiB07%2B5sLGZMuESNZrqpQOvfU%2BxwHi59KEPcFe5pB3MtBg%2FwfKJ20TeL29KdZL56%2Fuji1kTHVchXjM5JAJ9dAOgLj1rihT2K%2BOzY5VUumrJUj86atUvZUJkhR%2B1abLaplEpkUp7Uea%2B1%2FwtDZ7JThacmoO72JJM0nap7vxiSXYjKR0d%2B9qjnhv9bpqvlDUNc8ia9%2BiJKo15778QcuKM%2FeMkLOg06RVJ4OrLKlzVABM7Rq1xTu5unrMv1D1rnM0QYZJQEdiyNrHp4gz%2FcH3UvQJQ6jbGZzzgKFr0aRsOInO1iLOUjK%2BnxxOG1xStBy7AEHrh5UV8GKSVdvkx1j0ablrRhgRF85hVNEwg6HsyAJToP05VdYwkoD%2FyAY6pgFIQnWZplEI%2FirGhASPF94MAQTs793ZIoXODCFIEC23%2FkfS8cB3fVj0XX6HZQNVl2r%2BFdYtmFBdyweXZuZm1hEvX%2BsE77b5bOaTX3BPx4IDSYTeJJMJ5Xa2BxNzULW5YA09jmAw2CML6v8bq2KrzNxcLgYZM5PMRfIFvaQvlx4PKO1o4PCbU8WqEiSar%2BK46PexqhAmjyPX6aD0dx0DYQ3hxcuG0IzO&X-Amz-Signature=24d4fba87d52966a6fa5a5de73ea0e190eef0c323b0aa16db5061e43dd50f87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=d4b77634b2af67b242f4b1b2a03e441f3381675e9594d57b6be8f7861d1245a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=6d4794345d90918697c542e5c6bbceededd0d335d060070aa0c86f9e55873729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=590c770b70d23883b055700556cc94a76a24c5a66e35b6e38b8c549149323db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=7108bc6d398e2a72ff48804c1604f3789fc3e836759a458056c853b9fd79c6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=219e604c2cfe565c9f640582b19075765f2231467fd29d64bcb609eff3998397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OFVL4S%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDEGaTtMP%2FWKrxjJ5%2FppHOAw48dfadVQsrSu9tIbWo0aQIgR7Ws9kcNV%2FUqcZAq4BEVxovlRLCPSalO59wayIRMpRUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD7EScdLRZnyxf9rxCrcAykj21AOYb1FZ%2FCqKY%2FcD6hsXqJGgru0eYYkUHa6clcBZZE2JPeA4gJWIqNjF0A%2Bc6tGutX21Iv5UI4%2B7lnlimw22WXF57jPa8pmMi6CBILgJrV%2Bu5Py2IL7XbmFKShQF40lehkC%2Fmnb0iXYebshwtldc5nQPZn%2FG2eQPnupMeBsLgtS1U5TzVueBdVfU74R6mcs0ok3ZSyxFTQW1yZJbqw3GBM0%2BsapbaPkvi0dNwpCOPbO8uqXaEJ9%2BSlQzeEVJN73sGGd4YrJCzTQdfOIQZvRwufR6B%2BboJJFFROlubL%2B2GSy2iA7TuFO9e7Lo6p51MLnKgnSwCbW4HqPcr8ZTUhoMh6ccCOkODaitZF9vCPz1wmcrU54FhB%2FQpSyCsACm%2F5v4lkp5F5MdLgTRFwRF6TbWUZd0z9C%2BkbIy8Ech2UjJLIYEwnKV0ivZ%2FQDQEbX4pfdhuk3ezZCL%2Fu9GGs2oEu2sn5XkEvrq9NYZBfhoVXb%2F85OtEW8RytEOgjIGD51qNJyTzSKrJ7a199jBN0hFS3clTEXHm2Z02Dpg%2Bj7fwr%2Bqg5TWQXvpLjvTcXKCa4PUWeBTEh1jsZNJmoC88fiTrxYzo8r4N6eXapQx9ept8X8Xgsy2ZIGPyg1dtBZMLqB%2F8gGOqUB%2FM1EbOUJB9C%2BR11Xs%2Fr6HCvCE6lr0j0AeDQBTkFVPfGbG5vWPG5Ic856I9hqg%2FkG%2FNgocP88Ml%2FoaPLv0fo6I3DmL7VG5IlyGM6Ecl7moRSFJW%2B2dGhPz1O1ea5A%2BNtH%2BceCwh0nTSLfY8zJsa%2B2AFWJ16KmSbh7P7sj7iHxLpXyZxeQyKb%2FLXVF7C4EmEws5TRH2kjknmF5laq1ifdgoFWtOIyh&X-Amz-Signature=1c8082f7ca5f5d648cf3ea7739a8134ee3fa6a2460dec40eca47be95367ab01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


