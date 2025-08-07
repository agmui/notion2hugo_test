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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=e416e74af2221efd43e178c801f42b0c36fc36fc09e6c8d2f0bfb1692efd3947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=ed2ad6ea7999fe73d62647510115c32587fa035857e9c1b336a5ca253642e730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=d2fd1f639c2993b87753871d0ad435ea10584f8425a88f82e4f85461427cfa6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=84b9941b1774a8f42336a9b6608bfcad16a1c3f44a5f7a39c83ac0aecdb4efb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=7505209027bba0f40cb152e8044c5c513dafdf41e32a0481706e844efcdef9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=bebe015b33b0b34557464ea876191f78a9077608ff8d07d31274ec5ea4278802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=f0ea555bb2aa308fe3a1b12cb413ca113ee7ec91ba8bbbd138289e9cf47570d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=2ce611c58ae01a1c0f623210355a8b912618c1ebeb19485394db985b0976fcd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=47631741fcb98936850c3406b8999df37df8391360385cf2ed4d261c1c4d1189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=54f2c4f797cde223870ae7957970209c0b4d0401773eabedef1b26b4baf490e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46B2D4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIHOgVFNQGqST%2F%2FZ1lsBHeN0y7egZi4EZ4Vrb7H0L6kQvAiEA7b6z%2F9ny%2F0aGz88JFYTGpuExnAgBAU0TDaMXkEOuw0oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSTxix2CcVG2ffGCyrcA3mlHXe1IKM%2BrXpsLI094226fPeO6ZlrgbaUPbi231Dcz3NfRldaFsDe7Z5Pj%2FwKcEcyjyqlevu0gnS1RM22GxxP1tmHRL%2FmDMJuflbzLeaeeXVR%2BH9lxHo3upZ9nIWhLh11fW%2BI4N%2FpiiwYW%2FyqEBXxdyg8m6A7kT6yG2EKq6SYmrpri38dUTMkHFuWdTu7woDIwAscrk6c4K2gDnIND5Je4s0FUmNJTDVkofDP3rL48%2BLO%2BbA7b8GLe4Ig270D7ML05cC9cxj92qVN8PoCExKA9s16ai9l4mIKjvoXWIUOb06PrCVlVL%2BSavNqH80s%2BwA1mwFA0Ge%2BaZzKG1wvkI1EQ52I9tPJTxhYZ2JAV%2FNjWBWDN1%2B5jiiCPL2IoxZ1aaiwh1NNCZ3ZUKN1RJiet7v0CVwcRX6f74hm8XQ4848l5ojL0p6dSB3Hm%2B67RYlcQL66hNtV%2F4aTb33cZV2S0VHZi%2FXzyBAyMfGIR9xeofmVnmOT%2FKVHF8gsF62fdECKokQfpTnkVCK0MkB0ZerwHY%2FkxXUMYKpi58TC8l2cbexVNFXldeXWHRK8UhEOYtxJD56roHukJs7fReWMdo2XDffvRoe8r1PC0cQZqZ78HEuNsNMc%2FkycLjpkxvhUMIDt0MQGOqUBMdD3PPIqWyMFmvahNyJuqiHJmTvjQ7xtpaG3PXYF%2BTV%2FVm2UwHrdr0vYmQa7Mj34fY9mlXmLcP95FJiyha7pI58Rw7zoYamDXbVjBDrmsLnZQfZ201UwkETIy5rAYFluKf6Ud09KoiLLR3QWFZzA8MUDEHD2SDWX0Xe8VwyQs2Gwpcqy7YYtebVha0KKgX%2Fc4%2F7k6TP1F%2FXwb2SQT2rTvRnxuzah&X-Amz-Signature=eef05b22e57e4f98e0901e18829da1f6ae67bac00a89b2f363cfc8e8c886efb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRSMNBU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDm%2FedBqSztokCaOFwqWFCfjzUHqDOQLTX8uxXwIbxI2QIgEjvfGprt2JgTFX7Ks2%2F2EV1WnuVxV8MDcfqLi5ZXyZYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYWX8fb4JhbSkHjKSrcA%2FQGEsSiB8Meei03P%2BKQv9cRCDCkucXDpOZWa6BY4S%2FLnBSoroNerE8MaKAw88XjVceqCirG9PsaC5dLk86MK2inlT64SSF0qZ26H65IGNfzNRw13KTwJFl5NbjaveHoOrHKKFyNk9S1X9N5nroN5Pb6m1uG8Eu9S4QTz1XpZCWZg3JXWOdvN8blJRWht%2FNk91heamrVU7mVbtEXBoW7rjcuRNwZbbxBIxhaZ%2FVNUIFQ6jBjub31fWA54BeEnJ3KOTvo0H7yTFVkq3QTXerCI1G7SMVLPl0RLUAcI0htCNr%2FXb9eH2ZbyXMRc%2F4HO0Ip7bYX3%2F8Vcuw7CllQoIGAxya35UN%2B9B5L0YtW%2FbLrsUoIg7DmP97SVgbjk5Yxe7XjaJ1ytkFp4yuD3HPAaVwiR8EfUrca3GaBCZpAkXtXb5PAcca5BK6WzbzMO%2FfjSDQ%2BkBfzoAqw3DRFJiztL23rdoNa%2FlOF3COiJNoqGhhp8ypgIHweGo423JXfdfEibINv9h2t5eaudCM5SkSW3VLMBGd3ryeeyR8HG99jfFEmWecKyF7EgnxnmOBEVc4b1Bd41XD6FYM%2FDdgqRn6qkP0oXYEgriJfbbXCF2TNlBXAmw4Tfjc4seh9VmQPQQvIMNjs0MQGOqUB7TzRytMhe2Moe39Gw1vRqDhJjNFgqDCyXCXUaw7qW9B36KkdFlNQhiCSFuBFWWF%2B7LBdn%2Fe5Hppm7zuf%2B%2BXx2bU2FY6niO91L1mfHXAu%2FFsnNmP9fpsDWuA4gtOIQKGseDU%2FRR%2BD6i3ZF2MkneRqr1r2xEWNMwq9VnQKMLyx1WxZVPnBOob%2BCqaWkQLW47xrxBlFm0JEHU7QLT6AD7jqefRTVKeC&X-Amz-Signature=a5718b7d528cf67de66de001b45a2d84c895d091b9b88d36479e049c5697451d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFDWCWY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIEBylN2ppvCJ79fYX7j0gm%2FNj9IHJFuwJEBhwHOoJC9yAiEAhkmT4MwrBHgcmWEoySZAFZldqYamzJusS4lx4EO3rnIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJF1uMHtHnE0z3uAyrcA0X4LS0xlwQzoTTfo5qhBLE47zuVJxGavBzOoKcX0RPfgPU1DUYvIVojWCOz3VxxyvTyZFyVVUjVmXwc0lQsaXysv8mWUHHU2U3u2h2vWjIZZB32ZnZPF8CB6CSCQWQnaX0QHIIA0rJTRw3GCGzavHgZWDxC1ufefPfc413wSmTtx8VK9IPaKF6sCE0igqgvolKDTfrErg52MI8tQxZJsjHMc7n7rz140XqnmrwAUax8SFoQlfwd24hd%2FXhe1SiGaikdvnUh%2FmdREHq5bPMTZJn27v9fzwl6LYr5IPdSrvcgMaqlQzqxVWhwHs95mczu7N25OeRm6kWhJoEgj8KRmm2HBvsby188DVmRtuVtiuaGt25OVD2ptchCPT5EQEAZSKtHdcuW0udJ35FrRAyK28dIalYgr%2FVLADOtIcUfY%2Fm8eU38thrvkmxXbpNFKQ5s6CIJ4Orc6remuDyeotFUvLkpGbHXX3CgEm%2FVYBCPjIeMuj3%2FaZS7j4Ld%2FWqCnyLh9gNCMJgxDednib%2F2U9TSg2CdKmql7D6DedXYCxzWoD1V7q2Bhm43fUGjpxohXlvV6AY0VnXdWzjosYxNyZRNZ5jaceDHGGwIuG3fT4P%2F18nNdiDFkwHT9BrVTRuAMKHt0MQGOqUBBfss5e6S8Fkzg42V%2BaWkT4JIE4ztlx%2FxBZ4CVr3%2FrX6IBSNwmN9b5MpeUB6gVEjTo4eTJE5ATdUY59HcXChVZn7bhaMBIWd3a%2FjU6rJrB%2BPle3cd%2FMgVOzxEGebBAjE6wobQThDjux3gMSOIHV5bo1DULtjXPL4gcCpw6MgPnPUx6JS8UkWAPnW80MxbmHiLJkC7Oe3McTH2xXiJDve503d7rxtE&X-Amz-Signature=0e5a878a06736b4771bfedb1f0d638d414c234f1daffdfd51a64c6a9f5bef4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=389f12325a26736bc0adfa2e59ff51d1eef32f6fd1873c8dec4c858c043740b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NENM5Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCfBuvSmQC64qi6P73PeKtEgXaKCdFxpYgYkg%2B3sLUo5wIhAMN%2FTSyv%2BF84%2FmuCRonvXdHmm4zm8%2FNVjGCVXDSNQVYlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbdVAZCGqVmGy3xyUq3AP7KUCrXq9HFdAeJpXTcEIhvBviJa0Uy3LYrd2n2%2Fmbs7y0NMqnT40FyGg7cB9vKffunPwEWnDCupVeoMV3rlo%2FDkG5eTEhYq3%2B8wHrhCdBRoPCPVsh0NyjY2%2Fl8oIXqi34S2VVE96Jx33aFXfmm6%2FGXU42NGRJf49T1TTmX6LvHO3sLIU2kOXZanAh5WuXK186jyTkzSTCvam9N6C9XBlzXLzeSfvqa%2FKKPztwZ21PJWdlk%2BtMaHA6Aojl3cb3xmbLtcK0hW7FojiBEYWRPbwJAqsph5laBzCcWxuuPsSTbjHcmn33%2Fzyx%2F02oRJ%2B8T0nOcbER1x7N3Ezw2GfuGMUpmhROnj9jYWcOI7bV%2BH8sKM0X2jmbDigBBxIlzCKXSdALTYdFK%2F2rqGk8tioLgztJdtqBO%2FaVMx4UlyzsvykCEhpLo%2BysRKu9ohnMryhda2lD9SyWK5H2YefqZNZiBEQkpI8zJ96s7HeMvBToEfmfw79%2B%2BhKMaouMrS%2FABGK7RFNBFJzrblVu6s7i%2F%2FkoYidYFL%2BeeEPW%2BscuUAOdwU3hvIt40fI48L1C6ILReLlv%2B8vSQ9NsrP8ywILU%2BdvVnnyzpiyshDC1xKhyPxAiBl67uWvueARStaVgupzxRDDY7NDEBjqkAQB%2BEtYterD8zYfmysfVPE%2FPgm%2FBzxV3zUumkV3Y%2BgTa4fTLnMJBaDh%2BtLIEJ9ogkPbd60lBnkCswMbKqPXo2QzCxR82ZTUP3bwxKurx5Xsp34rD81dREU2Yy25%2Bq4eKO46qoKY0UdO7QECtiu92toPTX6UzEz2f7yBB8qPF%2BEXAxMJJO4LyCNucWIcQtbXg5IaVAXpiGJTC2w3XDIzmPKbeU2sY&X-Amz-Signature=ed7bca43d6e0a973b0b09d3c03d5880ea5748110faf71ab772c39e751cba3358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=82c18d81fcf0848e2a78fd37346cd38754fa638708c7d2509444bb7205948001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPJDC5M%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDVDVo5NAIJPigFpxl%2B9JPhVPd8iKDlSrpj6KAhF1yduQIgXMS8c4VhxmxnIazZeUMeTjVpxmBMp6SGlLWsO4HatPEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSmwa62NTQjl%2B%2BN6ircAxUeSZfYop3MDCZ%2Fl1icrp9zo1vu4fh0%2BrH1xM2r709goQaRpzqXFG9mGL0J2x3qXwr2nre8R3ASyvAbRwr9sSiFu%2FPlzxrcngN0DNsyENxB%2F9pnr1AkrYb0k9wpwsSIzi49IfLIGfzgjhHK2Q55QNI4KBqBxvn82lY9sM7ABNPgnajwmCpwIF8hYX9ydwwLrRN7cWO%2Bfz8tgQJcFgJteW0ZS%2FpP7MXdOLwFPMueOcfytrIypzLHe4FGwBdmM1vr5iv1dtNFkAGW%2FeXNqhHbexyRziKzQmDGsCtmhkDBCimXZURD%2BWCxSAT9pESeEeuKElwY5p0nq1EfMGfLFirIMe1FbywOOw6movKFDqsxM3%2BCiXLE08yrQqpBIMrrRxHAf%2Fw8HkbGGgklimx3IBoj2ysHRvI0v7KHxjg7XSUw3ugOf%2BgiFueCfb%2BnaoXWb8Ce3UP18hiiNrX05ORwikYUYdY5HHokUyy2t0dHItKAUn%2Ff7fe5keMLQ9qppHc8S3VDyNo7NlKPqn4z1TCzWwb65PnOAcVFLh3SWxclcX71BhQuRhDej0Rz74vC5Rh6wR9qiddSwrEl%2B%2FF%2BsAA6RzjAKbdw4KldlWpa6jo5Shw4jyJX5Xv5CptTT0bYqE34MNDs0MQGOqUBcAXSLaAOSYNcGxBfFMejPBDabiBIswCe7etwvKuj0TRYjYOAguKDwEhUGztxG%2B%2B6pjm0PYgBtaXO7LfOcyLECMjZISI3ShZq8HBM0hym3HwqAl5GXX8AavWzTRu0qn%2BkJH8np%2F2Bj78R4ssCyKGNbg12UQtH3Lk17o5T8ZfPvvvAH2ehFsjtgxGYpmq8VkSsPYP27TU72EH1JHKInwYsx8Z6dry5&X-Amz-Signature=5e0ab18a204caeffc6288f9a9956e789ef075e0eb659aafa6e835cd06ebdbb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=8754b07acf95da7adf6e2cdd8efe220b3f14870f5224b58a661136640a737a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6H2ROC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHJN4RiUzZlLyQUw8qVYNdpQ4lvC%2BZ64js2l1rRktsfKAiAYjgr3Rm9rzsdh78BhatCOq2kjNQTr2cChiLxRnGB%2BAiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRFTDWM42FeXMIL60KtwDpmeCkyTvCC1XcNa0F8cSgGarnfdyy87e6DrRjI8soSE0yYF8NuRmaYdFfEBPLGKLRyg%2BH6w5KD%2BRekFKE15K2YdeKw15j7fmZ6v%2FC1zjxFCgZLhbAgPid1wSVXLVxsijntgFaHoIrs%2BrqvVHchz0LzWUUFJarFwxm64WvxAoxbrJlkAsTBPqVwHtd%2F%2BVyb73T0lCk3kaVhBZnrq7MRqEmyRUyKdH0zt4%2F9MVUNkbEetjcKgQ%2FNKgUiXHMv2dV0ePgLQXEKaNt3fUhQQ7u8DLRZ8lot0YQ1%2Fgdib9nviNJc61Aopo1EW22E%2BGbtvKpX9hI0es%2BfUUqbkp8%2FFxfytf0zzwe2z1YUxgEpU9fIlNpuDS9hpyVGrU%2F%2Fspu7paqlCsNUJFecKkvcoRL5OqVChb%2BorSPEPXh3PA2eXj5ngYKwcdSCWFG9u8AuIwhGwhd1UgolfOgaeBp2njYrKNy7wbuOMUMZvo39eKligfzOjUhcOkDk1Sg2gKVcL10z3f8GIxFpCBVV9yYEur6AVOjZ2QlGfqsE8lcLLjy7MbyrUDZZvZnJXoOd5rEUw2GLue9Ep8L3q%2BuDNAkO00Uw0iUZhKUBW8y4K%2BgM49VBd4S2xuv2xwDtX21w2J6d%2BSxeQw7uzQxAY6pgH%2B5hCwwOLAOlEMAO7Z%2FJcWRH%2FVmiBAtIHb%2BmGzU8L%2F4pbNZxSdBAi8uU%2BUJybQL1WKyAOKKB%2FCKEeHgfFzyqv%2FpMmdftBUem%2BA%2BShiOM4ySlFZnNH2BHuOdQqeD8eAfgJM%2BkOb9QIU2yH62cxmok8gXluZIdHTNfv5cawirISqGWvzCJiGNvQzRhfVOwP5wxkAswVpuenTW0tPsFao1Tk%2BRTKsiOiH&X-Amz-Signature=fdfba43625eae1e3790b1f1db3b8beff5063e91fd45cbd075e0ed21a2d9f218d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=298b791e5549d99dd97b106e7646852e5fc9283b4bef64ca9ab440c8d489a99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JY25MJ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCIE84XySk4EZe1drYxR8EtpyHGlC4twYQ6LYqRqGtbKgIgJpvMd7VhzXnxuJBkBE0s1PpHCvPRDv8JsLmITrvb0cwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6f5nNnQx9GA5DNBCrcA7ERmLVUGzMwoYrGWstDNUCyG9tbD6rcCgi7wZy2edrS8fLWaYDGcXiFIsgRd6Gn6W6X2JkBpTv1Wh1vhxbnDDai2rr6t%2FZ1tjriwqIIQDt6tJZ%2FTa4%2BLa4pZ3pJRPy2t3Mhgbdk%2FrAoMTkFSghkDpAD3DCuclSyypKj8Mx6BMoJv52sz77NetyJlPxZcYJ6BUaFnJ0EjT%2F%2BQCswYuIJPbQi3Sgxz1NqB82c7%2BCu8MLEa714RHUozCasq7zVIQ95BNAlOf3FY22qjBGQs5MDn%2F1ovJt4Kh%2FPfBTpW72UaUznvclpvZtTOBgbtcF%2BYfcnzoRo%2FtZA6ZolbfYaNP1ZMQmUiNM4bz78lZeb6hRZVOrBY%2F7SJlhHS%2BeaIrtuOMbnpTUwluV%2F8aRCof5t3rxfyrtYSpQYaz9C7PFTG2JVYYrLMznmQbb1FVYTEh5PH%2BSlRf8lxZZI0o%2BdgnAqQa6glJl3hEseuZyHzk4Kni1HTmal6%2BpPs6h8nl0x0znRrJOX7VgGGtHvZ0zSf%2Fk5Y%2FDzwMUgsIY2MqNHIgrIvEnvY6dP8qI0mQ4SXv%2BO%2BwA6eEntqy6B9p6QmZywWJJ%2BP2gPzR%2FnSV%2F4Myb6zPdaryyoYWlTJgfHe61Ij%2FRel5AOMNHs0MQGOqUB0HD76IMQi2Gxk0%2BS6uTC%2F7xwtQ9OsWXCFolFrF4EBS8bp%2BpJIjtlnJzHg%2BA4TqmaG0EbfRtM2yBGbKIo0g%2Fyyur3w63zI6BriXCm9ZzQz1O%2BneKQLEhvorVEQHKcaUeKZIl%2BHZLgm5v8VC15tBPFY%2FlgTqYTQVv9S0DNgU2ngG%2Bw47njL29a31PJ%2Ffrs%2BxBg5pcOqYXGx8x1MDVWpiM3usr%2BbOE5&X-Amz-Signature=f422a0e1edcf8f96a2ee3d5605a1e92f71d23f4c623a5363bafdf3f0743a4bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWNAD5W%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBWRPADJLrq1675zSUDMwuAerwpj1RHPc3Fm96n%2B88%2FjAiBfqO155G9KMfDES%2FKRIxRGGeqY1%2FPBubrZttXTEvCB5CqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM39G0zxY4fdTCUN7DKtwDOrrm8Toi9GkGWDtTVkAWQWPGmivutOhfjrsH6BUS%2FcGsT1ryEOMtZbb1Vp98AiDnMT54XG3aIMd6s14ctxDNuq1R4bv7jiT9y6sB73Dg8AMhTiufxm6Di6kOfJYeAXQlguNEm8kNPayFu%2FIEI5UTS6QoZxMUtbMXzwnSaYv8DacWCbRQ3WD%2BYuiFj21FX5gTntuGyB5wRVI6X4do7L8mEJmXtdY6c5Asr0EI0FJb1gqNoaoXJ7%2Fk%2FeStrkF9XSfM2imjfAngfnjE%2BzHTxM0swh%2FLNlsyGepPag8xYvQVcu67YSpkYHUqGAshnEpDddZsnKPTxOglzD00nydaWCYV3L7Lr0425YmqjtVA6j8G5Z93JGz4OLOmzvNSnnfNHpVnFgHTGCn2TTK%2FlbGd374YxTXBINJ7eNB%2BPT4DRhMAH3cRXB0ugdFc1icr3RL6vDaushXioPHP7IHOT5iBX%2BOiTiDsBzzdF5NMXHtr6MBppcDtirZFgScBcuMjDMCwX58ZQeRjZ64PIBJwK%2FVk0NOommmbe1pm81Yf9Dz1NpgPUmRlwl35dfHL7ughBvUteipD4ESSFJEUy5MdzpF8elKwFWW1YdpbEyNPmAhRCmZviL5ncF4uYjdqgJ5eCgowmO3QxAY6pgG%2FY7FxpMz5bZ1dHbjDis2M5AR4ww6uB6qvBmH1bXSzSEdkIoU9P9Aav7Xo0P0f31BB0GFVSnHaPQJiJc2W7mi410i7haIiRovvv1S4IZw%2BcKfhyOjPesncLBV4w3eTPxdAF5dG0YuNt9AJPsqBSmiyEGJe60eIrMgHUHWdW7d9D27brP3ttcFiZRfr9JaETbPS9%2B58OhCeO05kOnv9eOqFLwuTYa03&X-Amz-Signature=3ebd56ff74c5b3ae6d7e01837a09ee37d98656af6a7b72fcbb02ed6a4390c005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2DLLN5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCFtmXMj%2FxoSDD%2ByQUx7K4MquDAn7ltO9qe32LZ8rs8ogIhAPxdHIV4R1bkbU8XOXMU%2BZb6MWUztmhVaJ4SRH4E6jVQKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDURwgX13jSScUUCMq3AMzCyQNfqI6MznpySbpV69oG1g2QTx5Nh83IkQIVgNNvmbc2Ly3jxUOm0am5LsbPJUwFlbm9wbXdG4J4HXpMvizBltwa%2B1DzVCVBQ%2Fc8uFq0T23%2BguhCrTiuk86hxzUgn%2FM6KsVQgOxwb2rDmqdSn3TM35a1X5pk5tZqXGEdO4XVc3uU3M5WRMa3OGPCU7bAPwik%2Bur2yGJSlXsdyNQd%2Bw5tbWToraL%2BDbABrwNo3Is1Q0AVKtVy9GgCR8BrMT1yY%2Foy5XvHADuTJBomiUcCkN1xnPBbtNk1gpvJLwtOb3FubimCrxKs50VLUUCe4QDVEXG0ZhTHN5RoycGgV7MJELMJ3fexII0s4u1dQchhDQ5lyXrBKQZ97rfFxrH2m7h7Ex%2FFR5pYCO6k8J0pJGLFeTDcDSfaJ2gvH0BavTrlaXcU43t55yqOEqOK3EXSsTLWY67TPjTqdGjf%2BfDnnD2oMB7pznC8evHIZCRIOa8PDwpblqgjJ1lbVyCCHZmLXvlqzB3nQ1b3OewnC5mqRV34BtWeymQ1Xhme2lDbq8vD6UdktwZFOWt4R%2FcmXeY9jYftWf7lrgGFzB5J3TjFdLBw6mIUREWm%2BceA%2FvnkDMA%2BJDhbvfNH1G0hqcRTHwkYTDc7NDEBjqkAYSpPAuF93dY41iIGFsfZJw%2Bwe2ejoou5EBGgeoEkyjWnOSmNcShnkJb4xUoElO66fb6sp9Pd5OClSv1PPum3ZHYeNJ47W8yOerqKpt3xXbZfJEcDxjQR%2BVEdbevhtAWmhjM3MiMmr%2BTJdSxCEZ%2Fwvzr9isR7Bk%2FGyvEaTSwhgKsEp4X4gP%2F8gPR2Ga7touzWFdm%2BMwQi43R7o0htxlaxUvHG%2BS8&X-Amz-Signature=e634084dfae5932bd786faa27dc20020f030bcd4b29fd70d62765d25d56c660e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZEJT55J%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEhKLwRP%2BM65P0s4lxYHTFTwq72lZOP2SoC3I%2BdASnOkAiAtelH6b38sCiWbv%2BvfD%2BHJ7%2BsUNXQw9p1%2BnCjgdXgBUyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMPwsdXiY8ttDh30gKtwDZMEVi19yVzX1SoYZxQS7sJLAcTQWLCZfPbnh1GZN69bzbo9pK5Jsd2ZQks8V37oRv4rStl2Kp%2FElZXtNexbGQ5dkm%2BZ4du%2BEgionCGW0VC%2Bvwiq5tF2NtlWe328gcWR%2Bg8vPB2TTi%2FfTxyCDdnY6X8iwA5B5pEqlK4MIEU2uMAD%2F%2FlwRh0mpSkNyytwIroYIsrndO%2FxNkX1WDrIk9tGMFJEAWk0QJDRLcMtVk1S9GiYFKedcW25IVCdL%2B%2FmBZshsOrBnHF%2FNiSBUfZ39O74xg4Xvjc9Zo510zJ%2FTmmbDFLc9AxXuASNFqroey2%2BH1UDOAVU9WOc%2FLmnjwu8UjllRPPQ7x54ca4RkU%2FWhdZwuqFTbtNUvplvDzFP10XUwZXTeZZC2tNgaYWrY4%2F6gbPOD2%2FxhMFXWfYr6U3KDfXiUDnjROHeBz956bpS%2FNKK1syFMYPZ34lwHYmAeTIQiYS0I8AoDKpC2k4j7huLQ%2FnE3zJgabLFpW4E69bAHhnnZkYneyy2VGPk3%2BSzOm05NQD%2B8YsWGLHfVq%2BITgSVAyIHbr2jP%2BZdrguJ5hplEp%2BwXFa7G62xMZ8WtHDxqRQSCsxuPEjE7RrJxM2HnVt2zOyS6c7cT7HaFAezRj3gZx6gw7uzQxAY6pgHG8qKe6UezEk8FeoO7K%2FWdgKl9q1BruSv4nh3U7tGib1EuO%2Fqu%2FG6a1Ljqr3ieSipfFfi1N6NKEi5uf6ryvcssQjlSZtQWpewhtx740Clesh2IoefCRrRqX4K6xJx%2BDBy%2FXQ5%2FOYX1zfyov%2BPvCR4uU1vLm0DcWvSDMEC4CvQzuX%2FqoZmzyGzCI8XJZfOi4bVBxmu56Or6DmJRctWuKR7FtJaUUCux&X-Amz-Signature=5bf6dc3c6985f3a58803ec4e6c6bb22716e1d915581f7325d8270d353f9a962e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W3W25C%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGe%2F11B9lub5qFGXyaB4Mk9lqxBiGwtagKTX5jYx3AfAAiEA5YBE%2FHxCIMMlzA71fyvoJD2jTocagchVfev1FM9zpn0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FHiZq9WTCri5%2FWWyrcAwT0W5nD1s0Br7oECn%2FTgBV0Ht1Y0G2IesB3E46dAwV25uvZaQ53VLX0sM%2FVxmTMqUbSGv3lVFpUeNjA0z%2B3Jzp1Irs6vr4X9KPgxuWC73LcdspVWoMtwnYuMaN5UJx9d%2BSVPp5EgntBcgYZI3jp5c4j4DvmLaT6qtrLbfOQ6dZNvV02pM%2BXhnFnOqqnfHX%2BSD84UtPC4Y32cIp1OI8kqJvnUPcPvTaVhQ4rldndNhvpcLKfkg1egWhvktVTJupWk%2FbdhrhZ%2BTfGTvZEC0P5xM3cZNNkXi45gdYSN4GmFhv2Vn97h6vvnhDKtgsSpmLBihyttV4TnhT%2FcvcNKHaBSDIYY9SgFRi%2Fe1McivFjEh1jW%2B1tSoPJj32DNXUNPL8nLHnpPS5Km9hYWY9k6ULkxojEeGlpmoYiS70GdNh%2FiBFuebdKfV68iiAlT9YFyVA9aDPASShBT9ObWcRko80KLGs4e5ZWzk3WoUJLHj7PRSjce0n9lKv4C4SAUCZR9NM9C5FiN5VvX1ES%2FnjvZAmRyzkgGOrtWI5vyKKqc48QFDDSZrVL5QaJeeqOOdp4h9FwknChgrwC96j5WNs%2BJOoW%2BP8DjTb2CaCBO4bu1vAuDCXpEoeh7jnjBm5gcVLZMNvs0MQGOqUBlEGwXtZTbIGg1UMwy8fgIDP099SsglIxP7WyejWseS3EX5QJPnAawyGn4isNd8Q9S0NKFyUQDfWHbr1Hr%2BxSulmLqDsc39B%2FhmcIQ9d%2F6q3%2FkUW%2Fh%2Bo57tmo3zTJ3uoug0Ylo%2BUqRFiYQeneQ7kYl9vzM7%2FOkrs8w9eEximbQCeekZJhMoE0BRhGyPzEbm3KphO3IaVgH9ygiji3MrbAmfLDuadI&X-Amz-Signature=3034c541bdad2704dca94a56c84213a6935c1a365d8370c6571d644e74afded9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=bcb526ce4d42ee16760052cacf474a4bcd3fcff4a7c37ee02f8ee5e94d8296e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSIMZGM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHu%2FCS%2FVw7zti1JNpqSBo4Kdqc9cc86%2FXN7N9YsQQpXUAiBfwrzJrPCTGeR55%2FbfiVAcrh9gHFazgHzvJWR%2BILbe%2BCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOq0T203Zux0TNLLKtwDeHJaZnq%2BHgRLvKnbZBTwguI3aOKsh6y4%2Bn0vEynVnXcDGBrCb49LSFUkr7xAFD4oNiNqwYqM0E92rUoUT8wzwcazKfoTqBENs0E5tapV%2B7op5woND9jkVpNLWkFw14G2d7kSgtgA9Whm9kCDEzPRXTiORdezxqwlDb2h85y7385FKRCgh2i%2F%2FLrrRC8HYevFg1W9dSIdhg%2BNtQOYijfzoDKMsw23ILBNSG19V7JX4y7Em0F05%2BanVtGtUeVx5Vwkm8Mp5Ncb1oOcRkgoPxF5tAfgUh0OZJuAGS%2FBg8fSf1Xvnguz4pCVAiiIDhodZ6T8FK%2FG%2BP4Rqs%2FY1NGmC1hgTPwpjpSZZKg6lmXr2It2yTHKYPuvlKOmhCPJMNKWsrXr9Zw9%2BXbzdXvBu%2FexwBVF%2FYUI%2F8GMK6XUqaYSAIxLN7xVa%2BtRLqf0cHKKoFzKooT1uHl0w6IBhOTmnfpPggODa58KLm5zZW4snRF8NMFUD37uyNZZERo4TAenSSWljx8qpe%2Fn8LhD1sKqP2AILVTrJawb5JmW7dFnxruVM84aHt85%2BGpeaZpbYd7%2FYLGVbefkHUiSORpxFQTj%2B4%2FgB7CkPgZvxlsLh4hKVmL%2BG6PWgVsSlJej3UlxrXcQAyIwpe3QxAY6pgEcIy7hGMcNbombGiTVmdg1U8rvlAUNzbF%2BRpDijoE4u%2FLZKUIF9pUSIIM8BZ%2FNl9MVbCVrtsjmDyyqQvNWfzJaSQQ82dnudhZN53dpYQMY%2BNpGkJ13W1IxbLEydIG9iWBmtHaFwyXbYRogco5WwI78NedNkouQyE1hhDb6JFbeHMikFN5hIFNPFeIAoX7i3QpsUmhYG8YY8%2BNt7t4jTWsDtEVJf7L4&X-Amz-Signature=2842db5ac39df7933893cde5341b12b7c07859951104493a748b87b3cad56457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=d99fd8f9b0b854737ef2ef28d36397c712a6cfb850668058e5256fe848239eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=3e8739a35b82492f6fac15c7ec95a309522f0ccd8af2e9ef01a2b78e29a688dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=41004cf47a1cab0771bea081cc2ed62f969f62246807c209d19d7e415d57ecf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=ddca68ac30ff912850208374295bc0457726c49a8dc12ec2613496d00f612f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=7772e64059e9b2030879e8b1e16a4562cb5745e74392db0ace359783291c7c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=662777ab3b8c30ad968c5b1e9bd7229331ebef1d6a2d5a496d2d6bf5b4971b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=41004cf47a1cab0771bea081cc2ed62f969f62246807c209d19d7e415d57ecf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=232615f39fea516758fe74671ec3684546c3376cc79d977477c9759209c195b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=4cdc2e1142358ac0f6afb8bdc04a83d041e436cc4994fc3b17927d1624eeaeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NK5Y7KN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC6nHb8%2FwTznXqY99ZvTVzDmmaLvGXh77sxQ44ydSduPQIgdtp36IY28cP6UGd%2FL%2FNo86rNRhC56UjGP%2FIHDbazXyoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBlr1Ou8TTtT1pJ0ircAwN7CWPfrT5DRPFrONDDkqfXZO2ha7AmF28fIFRvCTlWUEyvmaEBY6sLq9iuS%2FI%2FPuqwSiq1QrdC01W23WvAzV9P1kYnb7Gm%2BS%2FCsacgIyfh3TeEaH7NRS9CNIzcnBZSk8uqZMQ6QIhI5Ei2MBfRYB%2BGpCUldFhJiJj40t4I2BbdLhxVjjZbJVL7sZI80C9j%2BcY0qubreVcqljs3dJLNDSGSxrwOW8kXozuIacOnN%2B0jweu18YvYPceQ%2B3L7V5QVnvz4YaMa2DBc6vm5rPiLPL%2BELH0LJOedzbOMbMwNNzbMqDbIISKl2qluYwL2ApOaRUk4vInzKjs8jiFteu%2FKHhAnDwAh9l5qgj2kPBTdYXbUd6hcuQLgGYsjChIwmQckeCgbjPxNh7NiQ4wLsw7lWJw72bQzJu1De7%2Fel7mEvE7U5xS53cDuB9nBAwhx4TB3yHxNkeUeAjnnlxYpOy%2B7eHMdNaVZeIhheVbGcn5qQQmKUwWDKBSt2Wrlhswgvoo2KSygefIZBXMiFWmKqe936KgwUdiWwPr1YEAtrzFlIGjugrKaK5xEyLXf3G1KXwF26gyCQ2%2Bwdqt0Nxq4enKoURiZTnisF70c0HWAuXpU%2BIird5pmVd3cPFtaFbh%2BMKXt0MQGOqUBy1J1YNKOuqXlJRxhx3fVXUfU1S14J%2BPfslCF33sW1VMtixEtXpiOvBVpbGsZ7vt82F902HKN1JPmPUPguuJiEpT0Y5Sinn%2FUKLbcqGUfJLH8nrL7ZZuN%2Fi3ZHFe5shiVheBPwYxKppphK92h6muUBn6qm2iaIIMC4D9otVKCon0c%2BcYo9nBeSRqnCx2jC9sTwyH89gfVLu0UBaBQ65PvvXOC4yfu&X-Amz-Signature=46c9588bb53cbc135cc2b9217f9cbf79f71d4fbd92ab99d2a4e0d0e0c7c17af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
