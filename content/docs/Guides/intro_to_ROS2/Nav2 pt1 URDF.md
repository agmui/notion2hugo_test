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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=6926a521c6d8970ffb1fade159a08343628c7368951d061670ba222058ee268d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=595f24baf677fe2fce8d527edc1f606644613edc301eff3e10bb99a560f0602c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=3db56075665adc36ab5edf83bfd30eebae6ca81327cb8b8780d7712dd4eac9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=1aa626dd65b1e797233c81fb58dae15b14f39feace67bdd416a49cdf42f0f75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=56bfa8c126cb6e31569050f097b7d708790f5d3117317f68e75b131e6b680d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=57c9147728e449da2b55b2a1d855e036cbeaa09c5ad9a3a6edd8f6f664efc193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=9e7c4866a6def08b5a81c9981f5793a38e6eae0fb75ffa261b153ea1964e31d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=a1073ed0b78f4cf8c7a584adb2f5a150ad74c2a8882b12c2b651f69f7d3e0ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=f6ad0add706b88402a5badb6f0af2c28395047bc0f86701af7a366ede9c937de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=100c9f32eda1724c678a6549c075bab06d89905f2ccd4da3adf07675065f9fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDIADIPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGkuteHeouurhIJEX6abBsjlb43UTiU5C1o0pek5G4eAiAHH7cPC0lEXOh%2FDEIthziWplljkXplgH9Z%2FK4vb5C6NCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEQ%2BR5xHXs2bRBXH9KtwDc4IA91tUIYSW3T2E19pHDHBjTDqKvmTLcfKySzJsI0Vv3j9QDTzY%2BZvFqbbNEl1bDl5nDgBI3FZJPv74ySPvDM1JesLnU8oD6FtSKs7QdTT0Uwdh7bdFhqx56JdTxg%2FgRriFbRtzX67DGmnqZ0p8dXaRHHFdeJYUC%2FhpnYqe4L9Y8n8A0V6Xi74v1IIBOJ7g5cYB%2BY5xgz2wjFWaMsvHBytUmXz3LCjAMKKJNz5pElHLVzoHZHZF6%2BelnTLzOdkjTSRrLL%2FdkcZixTT%2BEO9pW%2FjkcOwd8t23yCEUByY5o9o%2FCHjD59q5aTC5mQmmqXFksmB6Fv8%2FnNlXig82kdqFWol7i5tm8gEjE%2BPVnuTRoAjc1I79vXVqwgee1RBRqsef%2BZIFDc8xoLDs2nexaHpz23Q07tX0NoOOHc%2BOQj%2Fy%2BwY1%2BPr2wK3%2FyNJ2Y1FX1lLcDq2arJy9Or7td5tooLi3oeiwlVHQNY%2BwPn7YV76zkT4IuSfA%2BAwpacLs5Qj16Wn66HQwRLEIHNtqkgtqQ7YDUoUOfomEOy2MEn5zrVREb89V7ze%2FaMyvo0PrVdU5Job1Wx%2BEkj3DWAM8iGsJgUSCE5lYB0xj1WCwXZ3YrrNZu4DHVHWhe4yYb05Jj50w%2FdHmxAY6pgF9ec4tSMdTtfCrhwCy9ymagySpz7LsL8%2BKXo1wwQ2z4egU6Xsl0KrUsY5TCoEVOfhXKfAFkIPPr1%2B3PTW%2FIUItU059NFsycPuIx1wGePi1CY29bF5hb1cyZm7ZNPtjIz1wLM2wA71HtskUTeh6%2F00sSPD%2BsQoVCHeVWyqK2i97MsN3ouR5BuisWinovn%2B95L5YvZyy29PnfCQnwMHQx6AyTV0Bpv3C&X-Amz-Signature=9037a899dbec7c8a1619dde27e054357ed6ead11555c939ad7a64af450358dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665763WHWP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC9uWM2ttEGt0fWVY365eKllX7rIJBIiPJUYzD8s%2F5XAiAnoFhgq0ZAUKCop4c9oN%2F2YmN%2FSvboh%2FS2uxqH7n4wcyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgEePBoIQDRLpLdGIKtwDlCfRp6lvaFPDX6avitOZQc58X5H6%2BKm3xjf5Wx7Qo7RUTwMJDr6A9sCyLuPgIsz4m2Odw8mUMqiVXPQR1pWIWkIdpa7aBLdCdqZBe7hUPAc5nzc9xRedNoWDS6bf7SY9hbW2BjP3nkTVTp1EZnsEcM2d3ChJjW4tpo%2FbOTFTB4DFPLN5CMBkJbsjg%2BMuWCGviDo%2FWMpq83NumtB63tUxPNoDvrWqWAPK8ChaDG2GmZsCdUHle94nIAQWkc925SCFcqrZsAFtKIlXNq6iQlT01wUCx8Dd8V3x1EQjAKmWn4cFnQ2IP%2FOqyFlxMx71O%2FJitejHr%2F6lhrdjQtaeJM7VQ9%2BA2xYvT36JD3lL8ptXLYbgiKSS%2FqMSuFoZqThWwpH%2F%2FvDP4u2brrby0ZAzuqCwpOBYYjJU9PuTPxwgDdySCv%2Fg3YPoNV%2B7AGDMOdL3FBoLRTzrvUX6Z6ZmnL8OiIyU44P2o%2BDcHp28ez%2B6pXfX4SIFDG0uwwJbdylSNt6OezjmE52jOj0J2qOrKXvztlrgOEmp9B12iLs9XlL%2Fx5WEAuNGLnvFyaG9T%2FD2JfFLJsSY4XRC90YokYSYWMc8ZcEzPlMOlwahKJ8VEp8evcKKBKJEz8MVbLV2Qai4taMwzdLmxAY6pgHKhx77BGNQ8NipuhONYcHjifEomh3BmQCGbaktaqgQrEHAV8Y5tLiPftdB1COZxmaHN06zCx4aFK%2FNLne%2FwzBy%2BPNQtctoUmu2%2Flb009bGHQYSwqU0KWCAVdK%2F34B%2BNruqBXw%2Be0rteSLlrpCCaqxaJXvX04hCR0Ml7XKYBbAOuFM32A%2Fu46VEyZwg54j7o4wHmNihNhGH3l1AHrpoiG2pngKR78sN&X-Amz-Signature=d13d0517d1b60f95f5dbf6fb6da19bb65d0832c2f3114b2858ddb2d8d7881344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ5GX6XO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOxE05ke%2FO2VmxS8oFtHWp7EeTmC3p9woUuf%2BdVFhLngIhANcmoFNtPtMVAF1x5hf3slG3N7btSsygHplvQ98FpMgbKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhUOTTTYJT8rHPHVIq3AOUfEEIi%2FY0VVfyuWIKIlgJgRLx1gBelJNdcBVAZGL3kCphDAX8njnIdTK8k49X9pbFO3OLTjUtH9fWCM9b1ykNo5V6os59FsN8PpLOZeDraz7%2B1VxzqqP6QuYwZmu5iz9VDRZ9Hc3a74iOGIcVYLIXqjNtRGGfTg96DWa8nzTEbw54TCbpq6bOdy8uGrLguhJzeEPVnd9qNwVBb0f75AUweyRj2E5gYIcNZZm6Darwhc4Cwm0imL0vnryvIKJ0zyW2%2BSWpmkX9z0Ct0Z8lpe%2Bvyb8RgoSxDH16VF%2BrzNzT34SMIz8lsWM%2BO5KffLZQsTdObSRVzY4YkulkRRXWL4ydErhsZgH8qnyTeK2GyZwfjNB8IC2SgnbCBU1mGeqWmB%2FwSa93aoJEo7tNoPcFU07rO%2FfgGQY7hgEUh7jMfaq%2FUSKCzftQVkS0oL6TNbWXOEfYpJ%2Fhq8tyiz44svn7eAgOL%2FQEb%2F30QFdfzrG9dkBeevAY0GeWIyK3dGDsokuVAZJnnz%2BjjxZ4CAFsFyaTca4uwFuHfEql0lLSQxafr6MAV5s%2B9R%2BImofWx07o9t7QRXa67bdcbp6Ea29S6BcGPmTzOBevNrdBWuyGfTCZAZMzezvvGuoYd9X%2BM04YFTDH0ebEBjqkAYcv9g1M8Zex%2FCJNF%2BHCthm1Vq7d7TRJQsguGcpNPoO4pZMhZeuQuXvgk5jWixT1hfTBKblRBDavW1slXHGZHCSETK7dZ1Ehb7zdthXT9Aw0VQzK106ye8sJjL0ObmKwLwpxERINKoHA5rCagkMSC3zYhOF%2Fl4Ll7BmBLUHPCxSmxnx1By%2BiLXC1tZDEi83nhBwnIvcougyDvfdxm2dI6qjgBNNH&X-Amz-Signature=aefc410e31ced5c772b4fb6b20d07aa397cf02db5b98b37ebdc8cc0db3c8d472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=ebe349340068711a77807bf68f93926d002e5a10e0f67e7e20a81b6655cddc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMYJBWI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1P78w83zvzSGVm8dlrTnx0g%2Fz4Pdgr8kf4mWnoCnzhAiEAqq3SDcGSuiL%2BzRkd7LH9Yweg1SJNzNkeRFlrOiWcBa4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOATGwIjN%2BZ2q3fEnCrcA2qLECfnyrlDU2M%2FQGwuVvOThkrc7iZDCFbTeykQ5HCFtmzv7%2FIyf66rRDBav4uGacNGYMS35r%2BvV7EhZkoVdlybYALkgkhDOenesLHfHsIDkTUQtF1eLJ7nRkqRjV8o3d7PBxfPWUCLSXnhfgHlkZBskS5dYi0ca4XU10Pn9oe3GFDDMsVI%2B1VGLgr%2Bq9sqnyTH03GRIsej0u9i1cwPN93uT0ngcB4ZarNHhOKO%2FlJQNCO2hBv6W2kcj4T2ZajvqkyCJFbtyTE0dtOBg3nOfeUOYnYNDWZqITwpKCHp9z4SIjHQYrnaHTvWV4PKcDbtwlIsQ%2BGfY5wxC2YUNRUt4a4lpzQ9QDOJ4K7u%2FYYn9iCfQjO20jFDaFxAWpgHiv2%2FDEJo822wfwY94GwbUi84bo8n%2FXtW%2BxPHqksWu%2B9FnQzuaVmuRexgch4ziql9ve5fid6BxG2kgLAdlgITogJszKjeLV8KCGVNBT6zkp7D7S77yxbPi3KsDgyiO2IIEtdFlsAp4XH9F9wKyStDCo1NhEvDoaCKbBgniWGsGxZGOHE1IhDo0SJWiOCt1QBIouG4ZSZH3c44fuhLRU%2Ft4wsLSknYSeux%2FUuMaBLba2cMt%2BCAHsJc5hsBOVhVImkMMNXR5sQGOqUBN8G%2F57SvpcCVMoBJ0zIq%2FcAacSibWmIkxmxUTD9wi4S4In83mmkrgGCOmbBZV6iPUA7VXCHSLGKTmq7D0t3LoN3KJu1%2FMuTaZOp%2F8rY8RnteQ8nYXDpMUO8Lolm2o8Gz%2Bj6uvnzEWUt4t2pgpcMlcDxVfqsMjVH4iwdtLRDhj7xbNdS5ICkyuP1fXFJkJYV28%2FSxoJTnMf4cAW1SXexcL%2FS%2BlDei&X-Amz-Signature=2b630787b04a6e4c6ed8d626173633212ac61c583364f15d09c3f44b6dad54b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=9b432a5947cd102ced50335bfb7ced821b1efc6b48b3f3e9dc4e45a911d3d706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MTWVQX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi2LXAC9bvlbmxDH8P0szgrcPHuC%2FOnS7jY6lp0hzoKAiBiifzDgYQksyhL6ceBPkOOnrn1RlDVYCIQxRrTd4ya2SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChjp0HUATIBp0PItKtwDGyinsI2mR9atN5f9yII5BM1QGEVlgQExF5lE3C8XOrAqhQkwAnoWcl85DsICGtjrQ%2Fx1%2B%2B5NErdI4mSTtX2RRjAbb5jhKWA9YPZKPeHk5oV6ipOtpuX5EBHFrzGD%2Bife4Mngy%2BtLbdtrXJX86wtxg%2F0%2F8ftFG4Ligc%2BHVTQy1XOe1NXcrOFgjU6zH62asMVVUK5D8ocbbGJmhFEQFb1RmBvBI8ssrCBg3lbv0zfwhCEXDXUZDusvNI9dSVVL1RmBoz%2FFuPw%2BZxXhgIJZyi8YJdgRrVEdBT4ZUt4oBc8%2B%2FlM%2BTipPWpp1lS8WPW%2FQoGvMU61D7yiFvIeGF5rJa0aMIicjAdrWCZ8AUDfwldbrU8zw5Qg%2Fokx%2FHVCP1F1GDub2Xr3HSGuXBjT2DcLfxtJL16E5sb4S6S2hCTJH28%2FUafFuue4vlNf2Vhj7eXK53p1ehI%2B2Ci%2F%2Fsi2nYJKHkI5gzLrg%2Bg8wxhnQ6%2FRxMx9iQG9MOuu4uSSQUaa8jJ03qvTEVkyv32TkGHkXn7y%2B%2FATQdln%2BnStDrJ5qBl%2BbDdRaql7X9zT%2B5SHrM8YCxK0b3u2d7np3Ylqgfc%2FCMnzrz1zSj9RslL9AcnfZuT0oQxlTpSaTutc5TDduIQDkePAwydLmxAY6pgGImXXwvIpSZOfGcpYOrJyDMKajfZuUYlF64g6GDef2PxPswom6%2FE1wlgspIMrWHKymS%2B0ovJG%2F5WOkivYUJRqccVub%2Bum6gnlTzRCPkKjlOReYPxXruylZhJfVbFeo5dEceAas2YjvyQebZhSZCZiy8iRUlV84t1jEP29ZGFowoUZ0BXQd0QHexEy8b2EA%2Bv5jA%2BmD6jEPE4pWa5JmO7%2BY6R%2F7QNcT&X-Amz-Signature=acd1f3a6d63ee6a9bd357cf323cdcec5f2ec5844def588ae7a01513ea3785ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=970b576013b0afa78865d1f72c1570c4fcb1d7a19eeaf565981b2444eda6511b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VB7BKB6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlAej%2F0UJkR3HxdZSfqLWQdkjxChrRo7V%2BOcusgeZcPAiEA%2FpRNo9hnA0UG%2F%2FR8YS%2FjRPeJFxjT9Bl2bIxKFS%2FO%2BgcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8lMsHBj1VFtYDuoCrcA%2Fjkkcecqi225%2BMIV2mXHkcP%2BCtXt7wjYPJR8gnOLbumT8vp7R1OCxcStN%2FXaTed%2Fy8RuHr%2FWeK6dnXWjPQ9QPOU0XtePuUgrepeb6z%2BxvGDz8%2FXp%2FCvR25TcXAIrUyDhDgdHFnqF8ffOhfI1FHz2723Acu448zsqZE9pjNONdtHxfJTISJGeMPS4a1evXfhebsBPp%2FMcogQwz%2B2vtudeNG06zTokxowiwcpOB6SAd6Jf0B76pvDCJD6p%2F91LmbeYJv3zxATSH8FwhwuTEJPdvWFPetNquldmUji%2BXYhBvUO0A1qd20cMqc%2FZ3I3tREJSS0XrCg4hHqDaaIADOTLebA85AUVxq%2F6V1QWMNh2qtpCOjQb%2FeiJnwib2hYNeQL%2Bg6Aa3PvDx%2BZU5KugAJFYKToeOjqx5ZK5u7qWZA8qrIkmiVMKhWZI8VL%2FnDNvLpPVsKoI5XdfdoUsWT4Et5eLdPbzzwnXpjCSVlWH0JmN0PyHXyhG%2F5oUUyRHEqpvi5R9%2BJoloYWcnx6Ic5B7hxMTTKGJY9wCxJ1mBT85KI75tommaAhhLeHpK1AbHP%2FZgTqOWLQ2iNZASy4lQpeKRJ61mXUQ2AlQk6v3IGtfifyQcKs98x2D3kTnVt62cCjWMNnS5sQGOqUBq2GRARquU4%2BxQ65%2BLZcjNu4reMIlcqh%2FchG%2FUvEBX4%2BoPM0pm070nDetLMtQOpFmFyi7PrTHWZU2NVEw7FSZLDl9sxszWnyjkSp%2FXTZFal3QxgHJTVhfn5g7tQsc1WhP5%2BQiGIMXOY74shlDpPXM1D4EujoM1jC%2B1MJMuzbfdt5GV2vJ%2FvHWLbgqthQkYyONhSw3EyrKrW2D0tnKTA%2BDY9miYLAF&X-Amz-Signature=6f0f74ae55031c07fc97f81cfa91e20a0f36d376f924a7da45d24acd367600f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=6efcc6d70b6706284c63afb2329c079582450d6f9d13d07fb3d9673f1eb99e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2W4NLD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbJCHskcTOkxL1iG2Sm3PvOry4%2B6yS5W65OfzWZV1FVAiAkiqu4zYxcu2Jbo0urzzU1EBWPZXtu5gzL3HFN8Od61SqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEE%2BMMALq6Xlf2SzkKtwDI%2FR96g4PsbWk6vp62f9G18%2Fh9QnzhWpUbVCkKKY6637iqEVKIJu9oWFNKOWOROqB%2F1Z0M4QvkM98Mevh%2FQuCiLMdfT6Wl4AWc0xHenSU46d85srCpK19h05S6uaxR95OnIx497b7MEZcJ8FUfXgJZY12SMaLkjUxwSiJNm92ALgtPQ%2Bb8PXqQG3M7tAuyTlpEpCFvin0vDF2CbW7uwb6yVBBrxIZDaMnXvpDYQEjU42XctTF2vCGdXTFfi00s1sL3WivJh0E7mLAIuv8SC9PVvxiG4jRFE7z1LcN%2BoiMR1BnCvehly0J%2FSnFugH8nxRKtMiKTQyR2TF8aU9G6VQbbdpPa2%2B4G82RRr0dsD7noNSfJ6cuE9fCXLkFheTCiCnV%2FkKap55x4SxmziODNbdcm%2F5Wp%2B5tt7p2wEP%2BPoH2AXr26BT7oAcawSnajP7v0OicD7TxJzvUG5PF7kYTzKsJrjiMAZExRUtu5aUAL7TWTtkPUqFMjMLNye0cq1VnG4e3JStqsZzUCd5jN80GF%2FpNv0gjRhHEysRBi5k3raw4Q6RMK9lc%2FFeO0FSpTKS2k3HI8Q0zlXDfIOLnccuIiaRj4v8zDLmZXMhAyMcktZfC1Y9XGc5BCyohEdFhNLUwvNLmxAY6pgEzeOXI3AAEYCrVPRxZ%2FWKn0az6AMif8RZeoesYjWWhKDbOAJwww9gb6te1kcuSzqqAo9dV8U1NW8IjnyA9KjjCHXyxM6mO5qVjkL73f9Q2cdMsiue9U3f4NTGEYAFwTt099YMfHQ9nk0gPqH%2FN3VekI4LbeZ65BZe8WdhDBTUkRTIWC4mDAn7GDvIJqaDPnmhXSrpR13DWQ%2BmbES7ZnuJka9hsOccm&X-Amz-Signature=a28de816695e30bacf1d6b5b704cf929ade28ed3197402d3a5586ac6c7252d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXHZIV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPqKEvoolUq9HKPTjy5xzFLNSSSotFytSPvPDVgpfGJwIgVhf%2Fh04Arah9kgX9lgErqUSQ74mJ2tVZPaR0NBRs1iYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTTOHZ7rscQ8NSL8CrcA6XpVwWrLhpMm0Dkmo%2FsOO%2BVRCfR78ptPGU44uGf7pfs0hTbHPwShrjPAFuafGbyqXIkMUm8eg4xjem3oYJyudG7oOG%2BTtxylXPd9qT1ECxZm7DxptLDDR8evT7Agigk6ji43WcyHE5RdeeEPFSWThjtIxTkUI0KR%2BJ9y3z2wNn86sSvg3S1lJivl%2Fffizfany8BFNYIvqJJeurznV%2FWeClyXdMDGsX0XdgHZnydpmhRLDoVDekya656e3dmGEXkOpfrTRioG7M%2F9zc0cGdjFkdvuSlWhAKjCdZ1YW44yA3Du0ETmzZjFjvnfnwVJZsfsbIcho9hro8klNQLYv%2BMFQhotd9RsCfPgvcHl6vHVQ9lU%2FaDF1NxpQxLlSpW%2FYviLG540vonEBMlhihs%2BGPzMyDk9AAijcmOFpo2dpy57f8vF4GDghPBsGJZ038ALVm5GyUkUxEP%2BgWHHweJGEWX%2Ffpac%2BxCe%2BfY4lpchJ4v1azE9wEDJfxOpJmpZcf3XEnHMI%2FGJr2a%2B%2FDHw1QNLKm9Udsi84tzKeq%2FV0u1k40XNBPJ0RHaE3dL%2BBQwPWz3Ym3pO%2FJAiEaSr6MQGTMx4%2BkvKGZbjcW%2BOh3ya0z1aG1%2B%2BMjHURGeyB%2FCt8CoaM3FMNfR5sQGOqUBrmnmpmN5jqH7kM1O5Lsv55qg3fhcfyuhMqYo0AZ%2BDvi8jahJ7xQ0Iax9s3brrRuyVnUsXjx7zrD5cb9tCQrI4CHoO%2Fc8bB3PnA6KovyYzvb3ntVO73kyYPSv%2FlyPVe1LjRjcps6FVAQr7%2BHaX0Wv1lCEhce0ztAEh3HeCfFo5Dzxmq%2BWMdmXBIf6RKVvKcg9CIwmuI%2F%2FhsPknn5zJ3zrW1Y%2BntiJ&X-Amz-Signature=05b09dab9cafa0c6f8f1c2ba32e7524d5426f5ea6c72e1d68068d85345fa3fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V3IKOT7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbzLT212QzurHZ6n1Vp7lxwyeUzeahE1wKAaEnYEKcyQIgdup3W2KMv6F%2FufP9yxrbDJG%2BAhlN7cy5vkoOZLCtQ5gqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD%2FJ2DwbWWWTKCcbCrcA1me8uAHF6OnebAb7G7VJdwaEfp1cLHfsClc%2FnUZJCsFart50F3hJhcmIdqFw2digFhSiGKqr%2BxLDpXpqUrugGYj6z8iN9S9Q4lXUWSKs1YjxYT6at8wG4h6dwmJwpB3%2B9x5U%2BuyEcYPSMRr5UWNcXDK9nK2OHcADGckNVM0iWWQJ8w9JNlpUTBgsv3JhqWx0%2FSRu2vSGNiBmzrX6usqTB5Ly15G3vZNRmTliChZhe1WSxmFJF1%2BV71cUZpeNsiJDC1eKs9AKucnp9uJ8J8oVvum32pSNmf%2FMriicn1FP76lmcUTKz%2F2lI1c%2BNwKfM62B47fNWlM6FHZf9XlXEgVwBSzy%2BNGmL5C7fGYAc8iJx5GfPFAjVhY8wzKPEs2RdQaRkhutXlDXu6MavacWEzJgxfiCujoGvBLt%2FnkxtVkXSUJxbrzdd%2Fb7evONk2dYZxgZ58gTQtujsGnm7%2F%2FFd7JvknIOCxuKWMXRqlVVqRHPxnsTrG6og%2FfO4Gy7jpUCi%2BIMxF7JqdHwJeDGN2Qj3U5Sfa1EXCI74qQa5HuqpH0MtESVbpZJsDDJMysSURvEoPP1IxGIn5aBj1SZf629OthBOWdl4sDbQ0WfrCFfmnBIDUG5hr7S2v0m8o4CE20MNPR5sQGOqUBL1QoaQReIpL7LRVeeYVHc8tY3JunpV%2Bu436Y24U8duwr4fiCdfTAcef4aS99jza8oNO2bjZ1hENP73FU%2B6u9YYRat8cJMKrBmcFlcPHBZzAsqO6JAv3TjPNT%2BFtuEKhUwbTmsR%2F1mh9DQ6lC8L3pb7EQ2%2BmJpy4%2FpBhGdkRJ4LvWq3ogJvaXTCqKPXQKhZ5mMQiuQrwfJ3RIYzZFw8h6qSL2MxS%2F&X-Amz-Signature=f84a935c8a7e807efbe4f0a1d266f92bd27395945ee429e4005546d23a49fb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2BOJR3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTgIZTVFGiSLW4aHc5%2B4NdpJZvW%2FOuTt1h4OrPgQ4QZAiBJ5XSxKK2h9mwsv9KeUnN1hPmogny1EbDl%2FuKx8ru61yqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZE7BMxNtfJwRA0SWKtwDOnoUjgVaClJwiP6Ve4WT%2B1IvXbUKRIr3KG7vRxmCb3JeXmhpXHKBx1BC%2FzdhjhhW%2Fuh9oz5OTnuSV4GUFTHLwB3NOi5TbYwpC5DkN0rhSRDiv6GREgXDqK%2Fcx2f7C9RtGGxheivCrIfYm4XcFVFh2DBHBqLA48enrHAxlrEzzU4bUbPzlW4d3TY4OvLcBBIjLMtBrc52235z9%2FSrhf62cpE8KtVOMUCIEBPU9b5%2FCLMNPJpwcUReceotVqnKjCwaCiluCICBqzEMuVyKb7BVrHwQPKxXVNX71PIbcNYtX944l8C0Q%2BNhtJ%2FRvynC4XPx%2Fj2uP%2FLGigRHHk%2BC1MuFfp%2Bw7%2BGuu6QJ5jx4far4ZZzq0W8M3Q%2FQHIox%2BXKWIxv5CIwdHX5BmrYZpvf2jDM7rsscPBGFBi%2F7PkVAsKbAObiUJmjnMOVgiQgXuWHhY7m1F%2Bb%2FPP3Qo2l%2BeiP1%2F0fgiybSU1PYGuzl0t6A92aw%2F6T2rcOjewUXIYE72SQWPOrvoWLMvFtTZujNEdwbVoGV6qhBDNYmJA85zokd072uJAQs118hHEPz0X96MJiZGm6MPYlziTHqQSvmnA%2FDzNX8PqwVT3ulsjHEkUC8tQAcYeMPIkBMkMy%2FzqMSKfkw%2F9HmxAY6pgHIok2AN47lgPY%2BPTtEdk5g0BAffA%2FOyMlO2AMh2mEm3aZxRv%2BwLMHMYW27ilG%2BYwtwkbmMqUyuaR640HCiqsDlnc6lfHqo3Jg%2BJUyXK9ZBagAjv0ZR%2FiDrpk6u%2BySe9L949gyQZUs9xtO32ddVEas%2Fcm%2BHnnnboHCHZrRgIh7%2BEotO0Ta%2BeoLw0DJ4%2BvujKgxmdpGOy416QouyQ9XN8DaqO%2FzLKn4k&X-Amz-Signature=cace32035bc057e927fdba373b7594a23227b6480461eb4ea758f419d5cea100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HATKFKO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFmdzJmIO3xLC8PGjMNrNqhbCQzeNdEJndGMjgSyUygAIgUI6%2BKmhFDLhb26vpLuWeM9vXL530VVJW8RSQfAZF0UEqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDq7vz4%2B2iQ37ORQASrcA%2FfqxhyKQfeJWTAxg9g216TLiQL4a46O1xTM3TwxBS%2BtuTb8t2I8Oc82TijH31TaBadlOSgodWFLgwgFUfCv5XgwU87Cv8qjX%2Bg9t0WMoClzmo1iXOAXC4MM81qttHlgcnWpCtFIx%2Bja70F9yHspozoMpF1pqD1zbUzX%2BMRH8tqVFoCj1lIuyeSULoz9pLWUXyZz0Um3yJgMCl9YhH4jE5FiojdrIbQ4BPhG47EN8JJ2vPksz%2F%2FM0B%2B%2B1OmjGX9NSAs2FXPcLg3Ph2qgFr2PT5RDH8F%2FnVxxiSs%2Bk%2FOmxNfvmvErxaAjf%2F8CX7BL5JF8mI7m%2F39ul%2FRHxcye6Vm2ylpZGVShTFZPkb7ozZeCv6eyR5vpERxU1geO7gNyAVH42IdxcdSKv3veE%2BKr6X5KO21mE6sT6uu556nWQVIK3kId7itVNneG8YOOSKSp5%2Fbi9mtdciMQh5KJEg0hilOV6T%2BGsvWvN%2B8Rwo0akHqsaFOj7hexR9ZbY9p22y3wfX%2Fj9jvOUuumJWurAwMvmRE9Uvqcnzv%2BlY5jffwncDxrrXSPN%2FDp%2BA%2Fc%2Bgc2jQke3uMYyzA6JXcqBoqbdwZP2icSsl6%2FEBlPCN3lYcWs0XRNq%2BYZMCvdVGfXs9etxljHMP%2FR5sQGOqUBSKBnhPAPjSuU2%2BU%2FC2xklkpIgqBhwWJy%2B7673a65yCXAsgkIJAwoNHpWdBtCSmu%2BxZQmzEWvzRegNgOJh3ETR5EUjuSeG1pTJhkonzvuvKsX5UELDQz%2FWFOint7ZZruRX5vtGvUg9V2f0LIM0T4jiEUtQbk4WsSs7iWD3ttrNo%2FZmqtxLE9ozqCoEbYYASff79W%2B0c3YEdrflr%2BkNKzvTTVfL%2B8i&X-Amz-Signature=9c356e9343196fbee90b97e952998bbc707137d39d8fb72c024655f956b925c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=253c40c9d890bcf6b1fa0e9a43933c85885a9448f805d638edaf865ff6a7dade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN33UACQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6BONbI9iYbc69C6YLFhkAA9PdjAAmklLLoHheu3qoFAIgdoWNOvO0sl7cDKoRYcrWV7nu25bZR0AG0TwE7oFSikwqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCDfAxqGb80f8JOUyrcAxDxOr%2FSvI5ysWKMkDy7b83e0n6zwRqDZsNl75hbszNg4PVyOvxgxyyfhBIxDYAZunHa%2FzLwjQdlwWEjM9GdCzPZBY9kbPYJs2etOK5KluO4SgBzNiBtmo3FelZlWar34UXY47Sv2GS%2FrHHEgAic7T05Msm8ROKUy5J3msypn7CAgMBL7%2B7YXALhMDDCSzsnOsIQO0WW8Oq88oVudjjlvO%2BGl0bK8pBFNA6WZYIySh%2Ft9P1Mzz1rfRsUjnKuw%2FS2cwJZExY0bSpFQzl%2BxyHd6kYf0Q5OGJXRmz9K9WQdMHCcfKdIYp1Ti32ZnJN5hssw2kJvuz3O%2FI8lBEJAWq2sX7klE2KO2kLr%2BAoIS7r1juW29BbDlFFFg3Eb2ZlzzC04F3zerS%2FJaZWy63Ia2Y37fZv6KlITwm%2FYuDwUarzrbhLDRJyuq5g39nvsabmSVAx08OlujM51qwxd0tGOdoai%2B4w1mUEGEmej9ZCwhgwmQWRiqzgFRNcPDUMjuSRSMjpRLlgFpadQMgWeAdb5ZtQjsBIkR55qdkYgRmKOOOL46vvhTjTcPTVPY9p%2B8SkZNWnszEXixjg2qTplXDpDhqY4lr1qn7W8%2BeHVjCD5FcpBN9R9mv6y8fXwIdXEU0VEMNPR5sQGOqUBIW%2BmMlAqfzJz9WLeLnIymu3DO0A0owlgJddn1n2AJqvy%2FAA%2FkT0E4US4ywp%2FrfCOaiEvfh2%2FTMWqnEVs6WGsBVSckC8PyjGSiXhAgE6%2BpFmNuLPkWkPVGNsXfrGwzkTCOD7yzP%2BcHOiykDXIVVh95yp4qBGIyBrWLVAic65QCpLXJw%2FfoOeHUhUMcLyhHCrvZkjaJS6x3iYrI4pIKrHFXfi4VOO7&X-Amz-Signature=044fc3a514979e9d43f71a49b0f09c481a5e8c919c1685c435ec3c9651682b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=bc54fa064774d0e004b65e1054aa0c3d5e4effb84bd4cd8a42760c88102bed7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=8bf283731fb344d3f0c7603ebbef3ef39b8ef61eb0ec1d6c43c4cb2b5046ce72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=d43c420fb2bc8b6609857d34be807fa8833c5db5be80d12b12666c03dd8da152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=6ba5c9724d4985304d77c509722392e5c55b153ae5aa517335f29d92d550eb78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=3629263ecbd71de020d6b2198fb150b46a94c9873c1a3cc3909f5fe46a2c3bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=5de74dc5fd93b345930843155f0859a10152ec2e6b83438f64f33e833984eaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=d43c420fb2bc8b6609857d34be807fa8833c5db5be80d12b12666c03dd8da152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=fd658cc29677f7abd37f78a0f56fd3d5e60c9e0ea93c8a7b841afa0e021eafd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=1d57546eae5aa2a5a0d8c43b78ca68d9fbce588d4d1663fed4852c9dfb691ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKURQZ3A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQVx1CFQixKkw0tcKHCXChp%2FFEdJSoNex2aLtgG3iFLQIhANY0Z0RodPFRLqATNP8dgGQK9uVwEbI8GgBgl%2FZYCqtrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFtm2FYuFMw4W9twoq3ANK1fNQjxKEmWy3RWG9jdaU6eSc1ChyPR0pChpUcukRVtwvFvhGW712yLxexu7oxb1xhzd3aqs%2FYFDKJm4BO97VQkAuTTDF%2FPN2Dw3AcRkJzgzr067VACkPCc4lxXnVZSJSGwaFekj%2BHkUolJzezgSaKPd3e0Qnaf6EzEB3%2BfLx3GCttb0eH876xIQM1jMdc6uYakXUmoHxcRcxXu8OXoBgI2y2twcWHvRmPXk0Xn64AVDpXGUZ%2BKTR9Baxq17CjQuXy7KzueHBy3vvkdYnbfJ%2BnieDhFLmjed8AZ2lTDSr8%2BgeAMw6boOibDFWbcWnPvBL9wAnzNEtHfrglEcy4Baw1ZBXKyvsIZ2kvVUm1MCPe5HbO7oQlLnb3J935umgqy5o%2BtUffPlfWcaFfCIYH711iaMBuofz%2BpC9KyTEme8ARrnlli2ICJQpNwcqjZIVlalCq8aehsv%2FxQvZ13q0A2xJPqq%2BJK92WCeOyAvKX3%2FRWxqkGVFT%2BndXuMlbPSLtcT9t50Z%2BR2NHXx%2BzmDykyauGfIHlAewnsRQn9rhyIokxurR6NGU44SMagKmvheCZjF7NVn21z9T2Btfoo%2F4oaU7lW9H%2FEF4cWxVw9D8PBUPq0HpuAkCxJroJQbf3KjDa0ebEBjqkAXcpUSdkr6jLSf%2BwJ5%2F3uzLH3SVY699TlqQiAubG6QO9s7rCG3O0ZZBS2l6WNN9QGLPyjx76nPgJ%2F5fQhGlr4hJsXKVtsKGpZkTZma5trzxQoArODeIIUUwBL2K4ruJcc%2FPWBT5LkyiyredLzpSaUV%2F0Kxlh%2BF6cO5VheX0Ek5uaLuH6W%2BydDpfzkRNyyAPCb9z5P7Q8w%2Fk7TKyLjm1YdDDT7SZP&X-Amz-Signature=a22f30ffab01c7da27adca0a6de75284436bb440bb0975d8c037ed0d6e955777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
