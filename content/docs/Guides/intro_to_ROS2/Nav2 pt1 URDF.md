---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T01:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T01:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=862ccd8aeb49604d4aab712f5745346987701da82b4bf98c7b350c8bc86ac27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=85197f787b38b4527036d677e508a0c62866a33cf92a2e5000bd2625e4afc75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=aa93e902e48e1f55bbdb9cf04c95590028a1e3e597b0d1851e1e0223f517196e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=0a13a60c385b9ec5cd7bf773d72eaf9945c5b6472989cc911ccb5d23ee9e0854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=982cae58862aecdea0da315e4596d58855d062976cbb5b38885b992a19ffb0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=3238b3a2e874bae555e16b2b9a4a8f498a9677361d01e75c6bfd8cb8ef819683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=ca7839a16713eca00e2b7f20ed6934eb83e53ac51f47ee5a01dcbf468ef6990a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=02ae0f21d22929ff7f12b278f36fac67f0cf1d225e365b2292ca253b7d570512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=a36a753440d9289964ea88f70e97c5d86ef37420cf000c8e889a363be0d88256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=f4b382fb55ae0fea977113328745fc7a8d43b12104c67979ce304b77f54b7f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DLXKUMP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoxqYmdDD%2FeDehm09u08qHLUuQ40Imcc04PDW0TgUw4AIgXWGEDWozo%2Ba8zmy8JejV7PpYrVRaXegfEb8LKm0m%2BsoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMpPZjWej%2F8AyLnkCrcA5KSibNopjkxNXigAln%2Fdr9MC1EaVhhL44w0srngtI1FVxsl8I4s5UVKejc%2F2NGZgaOtb0YAtEqIThG1sL00sY1OTDgqmbu%2FNvWdnivX85kTEXjCEHH%2FEAsNiLHSyfp2KkwayGobUGupinbjJ1i3mTiQA4L0FzKzDapwsqDnwOlcvTL2yy%2Bu6D4pMrIpwyuS0GJyiPXmP3XYK%2Bg3qcKC6yDAA9AHg58As93HktzEEayOZf1nATtLIoBUdNFqPNk%2F0i2qVe6Q%2BzC2iZiuVcvgAMlUVEhfxXZmR28csmMT3b9BBO5qVpsb%2BO2wSfoYyLkWNq6lmKECX7xGY5OIVQL3C3t1M3ZETALkxfg0kRuovP6lUTY2UheR9ybGjdbzdsVD6Uqfjcr15qWyRHVDXVpN8fs23PEfZfRnVhH1%2B5J6%2Fyrqjv9vDVuE0errS8XCAQxetZJDRDgD5xHwtLVbLTDu1fx4E2E7P0mZQjiWl%2BgJ093blYsGbTgcaf6uD1cUDRCJbjw4NM%2BvfJAgG4RF1e0ccPB%2B3byzkeF6bUlnd%2BP3pN4QI54ty1cyVQtc3c8r9ZDK1lY32oBOT2egCDbbQLEaFTkmmLN1ICaUjXkXtLI%2F2NjerOq8ZNNGxXdnWbUMMP72tcQGOqUB00FjgJRSGe9AreM21RMK2TdtlarfY%2Fc35ZUhmmUdYdJTJwc79VNr0fuyFRXaW4%2Fr56eNdpImqgfhxWA%2FGVpEMpLif3A1e%2FXKfayGLC8JGMICRJMD8192b%2BTT7D26wNORCbX4FFieMKE4Ja3N7DJwrh8EwuARpj3ByrUt5vBgpeA7YzRZS9ePBMBZjng4YkEXCp%2BgU8kGUNA35hexXzTr7BcQltLt&X-Amz-Signature=d8f85ab0e48c2e0ad3f263aadd5f92826fad1f13821f3df9a3d4f4b96baab108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634UCU6P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkmWoBZp1fQRco%2FraNxYIIvZYcMNEI1%2BYSntTZxWtVIAiA3ORgqYQ5Exss%2BdwJu4QXRyH3Hy0ztdww3fREQP5Q%2FLiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxmUmqLGYdc6E8qhKtwDEfJrPLvXlNECuk1zT%2FNzUvpAbFjCGQ7sOmw4BsyQ%2Bgzqrjtbb8avNfKWUdyRWuoVsVIlAdm9sXNejcaxjVImnnpphjqCv6m9TUUJPkHBjaLJj1qZfP5VbpzJm2BI%2FCo1ypghfHvcn309cBgozIb8g%2BsStAZw2rfEH6SA53v4sq%2FwjY5jqEwryUx4vwXrn%2BTZAkrb3IvCDXmJYs41b0jHAZr36Bx0%2BjafzclvKB%2B8%2FZ8X68Z8HVgpExjM7ZATb90ILHAZSBBUmeZt7lko%2FzxgKce8ZhpleKR4LMZiTPE94GtHr9y9aYmDUjV8FBhzvNRgtNWZs07XCIfme8rW8LDhsXd160z7u8u5eQSdBoZZiq9XdVBLoKqTglso9HvUFE6r%2BIR6Wsc3JOUt6mopvKPSF8f0MY3ZxSoj0xIChVD3hg%2BIxmSQpS2rWTWPDLraMGdNYuk74F%2B%2FqK6dh0vz4VWOxrgvw%2B9Cuh0TOdYtGrpxZewGEwwVoSvdT9NFIvema9aYC2VdpPhwgRx7hgK3o4SdpIqTMKIq8J9G8BsyH3DQQxaQNIa4BBL9PqjF14IwaULbtVOIbV4Osr%2FbP8xLC1Pwp2Kru7cyxQ%2FHIIy0tZebsLqZTWy5cd%2FhZK%2BBceUwuPe1xAY6pgEE0V%2Fu19Il3FNgxgXXco8WyvoAIMciWon6VQ3jUagpaYmwnEhCu17DcuZp%2FDJBgW57FIOk9dgFq%2BhsCaXRr3ILJUmOConxghSvwA14es6LGD2nkQrdCns1BAdITpzFI3n%2BXeIrnNEDdBslmIa7zvqPCwRHE4rXu6y19XoohsTiRzRXljjeFd25qQ7EdkbuzS5jhd%2B%2FNbJaYJBSN64%2BIPrFsLSRdzoP&X-Amz-Signature=13cce22b64ea1a6c4d8a71aaab7c05c427ccc185e4fdc183a2557d9b91d09775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJKEDORV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHaSnSvpxmNT6fyaec4MU%2BDVUqt8htOilvsfZJKTnQQIgDWFYqPXn3YdMPe0Om4iqnJI%2ButJbJC0RqV1DsS0wepYqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm2TfBwYjU2rB2B9CrcA96KdNB995TnHDK82irKzS0KerQK8gxM7sK0URqoffLZciuQypL7YBTxpuKl%2FPL2lmb9aUcPhIpS4cWBgjJo4WUKdxJKLSKUbsjcceNnDxSQc8EkGZMheootIroqP7KGSSMeqWFxH2yV517PaWvfobzBRPSrLAVqdrN7Ma2GKqLjptjcaD02TUNN9G2%2F2ekWUoiKTIlvXZ0lxnqjwK0ErJ3HZmbrI4YEU3jLAIsW9vWHJ0bkVhSXsz1x6RWYz0S0cWhIpIY91VUPt4kv2PiP7Mz2ryT63GYZQmypGqf3gTwrbsFcnkG7nQGHRxP2Ri0DB4GH6byf014hzDgwj3ca9DKxHEGd0uNeKpasg0NvgNfZNpT5OdfI46SJ7zRJY7xAsoOS9FiHNQRScKfbfm4A3H6peD2F3aE5LtpCWv4TDLlDQ0HRWOU6SGcT5wrh89jigA5j9vKOrd%2B2dBngByrA2hJwhdQ3%2BuGLAH170da34fLQgTg9k6AnSENDER1LE84Anp05hSCdQjd5HCVbsqzg1pFkJ9EIrf85hgTenjOAykR7PTL8%2B57BNSU9hBHC9gSFmrBDQ3g%2BmQPQql3j69520GQtbZ2l5v1whcnxBKQSks0wB3IfE9xTdydW93zWMIn3tcQGOqUBXjdNoIlwqKUTocbCwGPT6jVDjPCg8WjvS%2Fjpu2LEJKbz%2Bf5BORtTAdUBNEsgn6q2tQhYZDWOsP6ddie4Ni83WOONeFlMenvE1VRxARmDDytdWwUwA5zdFvFvfPVdB6y6s2KdwvpnpENWX7oNVl2ivd3hYssuzBYFGRnxgsCZKgsQRS%2FGgY%2BNDI2U6L4aZaMl3s4GhjxV5Khf0h2iCi6HnZLfgMsf&X-Amz-Signature=fdd6a27c21c6a6088d72059b46833be78e2050891595b5629117fa8f855c45b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=cab711103c47e87513eba59eb1eb5982134180da044b6b29fc013fca69a12f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654RJTL23%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICw5u6t2G%2ByoGU1ejycPEFcqxro3ey%2Fg2HIC9R4ReNI%2BAiBx%2FmG99XCdJ2B9H4D02et3OL%2BOku37uOoTPHbkOrcUACqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa4a5Idbo%2BwPkokuLKtwD9HUS5dLauM3svBw0UnoEvJ6siL9t5OYvSaI9F%2Fouy5N7QTK6L99wfjQGQgogfytu9hZm%2Bc8881qzFfwtn1aUEtb90LX6VmTnIYMcjE68ZlnUq%2FCMDoVBBi7jk4KAevEgwt3VL0ra9pt7zLwjjGaR0mTBFoqceh%2ByN5cdwExPFVOQj%2FOEgHfj8vShpb%2BROPw0ZMFssJNmhsdKIfG25bBdO77ZC9yACMQDJiTCRhwjh8pEUuzLxYocx6nrQPDWVyAyJnTULGnyh1UWUw%2BE%2F65F9z9F%2FZnJU7vgmxdPcvAtfy%2Fp6VRbVAURBJZNFacZEru0GiPDzUnOLE0qckslXWR9n6g562QjGVFcUzc2%2FOLQxs8MZPRBOVOCqDaHWqt5GOV9SHtS2WIVStdrnWqHwROPDLMEZud6%2Fp9v8ujezsxcTpv0D%2B4SUDinhc7WN9FEBrF76aw%2Fho982thPEgXIJ35mLmTmw5VZwqFMkF5IEb3HiP8WtuPLHzNj6uYuSAneUqxZvxov%2FOyUI33pDzZf%2FFqiTxvvThU4Y385nYWC%2Bk62dEO7ExRnOMufQ1Z0rEoZajMnygom8Ejto8aGpbFN1CJ7kthVv7rBrSfeHd0ap3Ox%2BFL3j%2BuXBvhGlMjFz5Iw8fa1xAY6pgGj%2BKro%2Fk7YbVk1bLVoEKlloaJIYxZWqzFL2tQ0CnmUSauP2T5hSYAMN%2FjVZq8B5DbnuPfvYYcCFaGeCXO0C6GpMtKBSuRSSFkhog3STqvZ6uj540mo1jzPNswQ%2FCiPejCjZ2QTtyjRyt7yF%2FY%2BLVAYu2MY0ktZwSUqjNv%2BTs0bIAwh4wIOWwMJ1J3DQ1%2Fy37Db50o9QEME4Xx29a6M8C2Vz7d7MvvP&X-Amz-Signature=a5d4412007e54f928b0466774f26148e41ba303583667f1faaf6c52a7a941dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=c42cb4af0574f694836151c51fb0b78fb8b8316cb415c09855279cd31c0dde69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMLAXK6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaxmxaDXyHPh%2F%2Fqq4WVwBYHuhob72z64Mgkosw1HdD6AiBO%2BvNM8znY%2BbR9Jth4%2FlCkIbDcJUxA5h5JeqZ01NOQPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BrYLeuIOW6d08SnCKtwDDSR2MaWMoBMQefXxxov5cVMCgVUvVVDLB3q7tIs1JMdev%2BZRFuqDGtMbEJUmPktPdgJwWayAY3AHbQXOBFYcu2je0eCWAkpOXELS0Glx7czDybYH1pYUPjYlzfTDokrozl4Io%2FBJfwaogyxk1P7MDuIj7XzT%2FV83Ql94Zry2ukOslSvl3GQj9qIG1B91JdfwR0jDVQf2yFE7OK7%2FG0hryHHqWDfylPNvnjGCtsCw9yifuFkUfi1jQe83Ng%2FCrchIXAqROnW62hzpzB%2BaEth%2BQVwoH5iSMYN3lXPpqmGNuhV2m6w8mR0aterHENhXW9tJ%2FwaZmlofs%2BW2mKWKbCMwnbc0GqReqSe4Bbws6VZgDwBij8RrVhgQrxK1g1QTgB0dbkc3JoUyTYEYuhg9k54OANMtQ6lXZZql0Gw44BiJDnzCw%2BEsPUZkQYC7VXKZV4dPQMRVPoI8l9bkcwckoyQA61gcCpcqoLZRyASBRsVTodQIxY1%2Bt0dya9vBRMH0suuptTTKW12kSXpsMJnFPjsNWS02PnkDAQ1CSPnrzykFjSGmQPfrK7ABFDMPkpy1VSWJQTR0PLXNwmGD4NnDSzHWN45DA19YFNUt1ioMZER19Q6doEXcpihP7kjvgP8w%2FPa1xAY6pgFL4a0L0ZtgDvy8grRZVx9jO9U%2F%2FMXofsMK7AmrULpyE9FzGPlNtysWb6hpZfTpDMCCzeBupwOfveuDLYduZiBWtRgqK7ArGOAZMqcxOqj3CA0GGqe2orwmIV4ZG6bu5tqOkQwuEq8rtyfXF9A2dzQgAmNhSjsykjrlLb9TcyTsSQ%2Bb%2BAXDrW0o%2BozWKJ2WEXXeJrkNc2h4HqnVRNjwfEBSRqHFRq4f&X-Amz-Signature=861f48bc2e8a694a5381eaa25c9e9b61e20931cb3a1afe909cb10263d3a526b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=ca6c57b6f395cafc6311e568f1e714fb03fb22fdcfc8fc5a4b35aca4f42fe636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VD6KHJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRZJFVMtgr5r%2BwMt8SGIWRVKzLPn5lfZvU4psuWe%2BujgIgXoRaA3S2f6yNzU3NjnEHb3fJV9Lyd%2B3HoqUjbZaJVMwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ2D%2Bi%2FfoxHjv4M2ircA3%2FwOejkFIbJXyVsZQZ3JN01votiG5%2FJWd9NuR5Pqv2S5R6qM9JfN0%2FpGqWoluthiOTK9UpXFWxH5pya%2F%2FWukuH30vZRpwdR%2FS7JPr6EgcM7Kv%2Fd1b%2FdUHq9DMl%2BpBcDZeEP8%2FA%2FpLn8sjcAPNROHeFCY2EA2%2B3vZaUbkwnhOXhwXtaHKChY5vV21N8syvPtL7DCjqOnTi5HxR2e3lZX0RBoZeMl4Kqjbf46WhB6ZmVCLrxQvKV5c7Qflp4EBt9T0yuSU801fO1bzelk5bzSHVMoUOQSkL468avONDf6E71CtVstphmxye5fFp9jeeM26nAlVbzoDxlp02a6ThW5PJIEQZBUz884IAjCf8wwxm1VcNWgkx7JBr1JM1fDdSqWIjz4Nwrm3oo6P86IH9R7jVteDb9xCeOEoNg9Aiw3cSutEcxDCbsswDXMINRKqgR31bX%2FVEs0xzoaGbs18OdfHowZu8%2BjJs2kau%2BQBDj62Yl8BsAuMpUl4ZJK03AWe1aHOB%2B3q5dbl9hCSB36xdN5Z0%2BiA3BGa%2FaC%2B2blWRP60hFQe%2FDSFiA1SRZbVaSxNdAIgeMRO4GFfdj9oYom7yirKAM1xsRf1HpcAzVL0WRqeW8CRTxaINLXEevy%2Bbo%2FMKX3tcQGOqUBFJsGroEvTsrdXHFDjbl3BXoLQl8NRoxpwRLR5TxVBFhM6dtXXj1cLGwzDXC%2FX2eVPFaGVPgKc4MiMnULAwT4IerTF6LZ8K6ZqyoqCpisLKH2CarTGJc7fKMpHO%2FQttrtRiF8nzz2xVhH8uYiX6UOquAMR4gQqUAzpp7ksBnKsoZPg1Me%2BLXb4HniCssYF2KB1MEWWpO1YBmMSkCJ%2BzM2UDs%2BBDEo&X-Amz-Signature=12a8ec01ed508214e83121e57097c2cca5553e51bfcc5a54d4bc6fec22078753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=b202d0d44c73367984cf89b0cc21d5b66fad38e6d694d3f3ac6248cf75d282ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCI6U7LO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv%2Fq1gZTSGL4gWsTKQKrukKin%2FgeE9cqGakgMXKapzuAiEAqysaC3X95nSlbY3H6kte5%2BuUt%2BKSe3ebV45C1pGiE%2BIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXCq2rBtRxNxD1sIircA2aejcuIH%2FQNh%2B53aHe5rUwi1e%2FhGloceIXORjtolYq8s6I66cNDfuDaYZlMkI6BBC7Ik2fMfKnOJRWMRSobjNNm4mkpoo6aIZauD54VjrFf0L7zjVNGHbR6J%2FlGUW8RND3ehZQBjQDZsS3KqyzALewFnSqoNWv8FiW5MQhdQ1WQkmSIerHVSg%2FxsYdGkEFZ%2FjWtrS6oDb5BKj0Xf1opKkAF6Fp2VMi%2FCWEuQ6k7jPROYf0GrXG5a3e5wRSHc9e56SZ4IgcKqeJ9tS0fuds9UJKT2Jkg5hYQ6FvEdHYyVZRIrbnOcYvou%2BuDO1IRk%2FMd5fj3dUwkJsHNGUrAV4SteISaZXcwF0AMv5POlhWPJQ%2F0t2xSHHX1s2pQ8sAZIRj9czzG6gKJPD7ISG9k3nkdHdF8t3KevFfVhTck4b7GXiLYRF9eEEBQmpkA8tTRZ5ijdRJbdYjVYu8xkmmlILP0dAk5KFQlYYynHpiXTbBUzecv4kFSr3cKfi2R1kkDgwSfqw90FOkF7wWJrSolcdqrZndComUpHr474xmRFRoxIptFnfg4XzkrNzJo%2B%2BBYZ4BXVYSXpPopScavKsQLB7GnwHuBTsTFb32tN2T60DAf2na1znfsNwRMtf7Q02OYMPv2tcQGOqUBqQYSze5IXN2Dovb6IxE8ZNQKXgeNijEBjn9zNT%2F1rocNYq%2Bde%2BZLRPZGNYxCuJmVS67ft5HaYWFc1yW5rI3miYmdPaLD3TXsLHNB2y4PXjY4UJHvz9YowGeBl6aZVqwNn5CygOjevwUMhEh7Ch4hY3f0G3wONd93EGpDyBiRjQKFiy7KXl53mp4d3D%2FPBaHFrm7TgzjUgNmt%2B%2Fu51xj0Szj1Cq0%2F&X-Amz-Signature=f7b052a29b2ce4ba861f88097d083dd424cf0c7ac50b6171c00420caa6c73334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52KLDDW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMaCTLugcuE2ZfW1c8rD30kIHlZlNm6TLymAceY5N8QAiEA8IjVGCbTdpJjXAV1EYjeYuxMzQANWMLh84yFlV2ZfnkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMNiJMDZhgxzsvqGSrcA9KDMzcbPf0hkXZNMOTRZbsCm%2BJcaCqLQrdSnmoiX%2B9v6uiYMeibkEzP9EHh1a3W3rP7vn3LHXUT2k%2BOR9E0C3swkjZa2qTmJKVAfvTiBPBt7eai036AvHaBnN7PeUo7HuZJtIs9KHbx6z1buixG1s8AI6jjtmVRGOJr9j6tFxeAco10LJXZLy0T5TquZOabdSjGmXjmPNs7XZVdllzH49LxnVZc%2BknbSzL2rwMcFBvb6MCGxIfWhW5mG2CCJpX2qP83wQDzxlUhjJdWWhObUCX1jCc6l0XHo5isuEjQODSyoOYOs95MN%2BkHRBGwNA7ngRvU5i00Sg%2FVmcaCp9mmyhJJMzz70qM%2F3aTgOGHLo%2B%2B0wPe1aZWUBFC28S8AisGcZYxd7MFXaB1%2F0bPEXWv%2BpRnhPk2z72UbL57KEmqnZ7sBMyyQeItXDqHEYvsdwdFqFjy2Cl9qmWRQ6rCDRnEIMbQ2wMbok7uwGUDJPstpNh5XZzSf9lFtBjtC%2FOQ4chVnxTRMDnCQJdQRb9o5%2FK72Bf5k2NGN1bCKXYte3Nl4mWhbssV0zRswvVbdflgEkW4J4fM%2BmPebXCoSOPtFL%2B5%2BZvNpTH%2FxeOvDEr%2BoP4coC5zURyW6tJThR8C%2B4WAiMJv3tcQGOqUBO%2Bqx2KXiY4R5ODkSQLpfYJg7mInYsRCmE1SR%2Fdt4VQUUD9InEPgopAn1UPbuOLc6rPx1YEuCuPZKWQELKuXwSUXyWqRgfOG%2BKepyTWib%2Fc%2BmYyPWypTVCNySz5o7x3cABX4TOahnfHEIU37qwV0aezATXOFHKPBx6tNQhXpYY4ReCR1V5puFxCK1laa9GKwt3Ynq3Bp%2BsgR7%2Bb6smK12ta6mKiUH&X-Amz-Signature=ca532c0d6a1a5fc1ed51cd745766bdbabb6678c6074b1515baf883d1946f1aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WYE4AGY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEA3ztBOpXzaIRjuE7Nzd5pFnXzBPj5ZfMyiBR%2B9t16AiA%2FvSxJKzKIww5hXBnS%2FJr5APdycYf%2Bqy1C5ncuwIgK0CqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMipVpqRajyiapb%2BwkKtwDOFFuAXMksCdP9YR7xT5xwdfHj4YdvKLkS0FcLRQ%2BSd%2FT9mq8zSjMYTxqRJd64cieRZ%2BxFpfFheKFv9VeyVjwzHgbaon6vqkOytFViBjT3a6NufP4lQ0tjLJuHNFkSMuG2MWBSCcd3qeEMeFFxnI2yjLqQxijVe4my0dx95QbeT%2BuYP2PzS9iEuj0gRlvs0ECnIhB2Tkwwp4GSiD8VFKyUZ%2FecyKgX%2FaD%2FmfbFHanSnAP4ayUfYRm%2F2BTs7V3m5knh6WnEYhBC3QZPMESFpioUrWbEaUiPEURdXSDq%2FYiS6gtTUpUX7jxkjIrGObCFB%2F71JD8iWF70Claprp1O91NfJ9oZQ1zo5WCZsuMxidrC1BusdSXSmbSSu4xlyXBMI0r%2BV3D8bRgm7WM%2FlcVJfKYJNPbdGKCOchXwrGm%2BSJ0MpMD6IcnrrQrNbMzZLIR0xBYAav1q%2BnZ%2B4fW8%2BSut%2BainYYthVPNJRy8dCHsDNQhMQ5uPSUppxJRxM39uIki1IFnufVaA1ctNwDYUnl0FhNF%2FIN4cr86D1UxAshinAohUhwa%2Fws0JUgEbmSsq%2F34g%2BjPtuc%2BNGfR6pf2Gu5deZ%2BTIe7pZivqPlJ6lrEdxRC1ScBdJiBUCARrULHaulIw7fa1xAY6pgEjQk0yCqhwNCbVr2t77f72h1xNDgWAMf3NATq%2Fe6OCcBfedzU5k%2BWZxKMBrwFVvPNRRzyFNHC1K6Wuow5sJEQkjK1ZNXhHYbPiU3y5Ta2W7Srj2VFhGLc1JbpqimtLB0X%2B4Atux2d8eRNRSDWF6FPkwVsoHUFjDFkd0ekstFrEMY5RACSItwFzbtY0Yp25DtUt299gCsoXaBjm9XhMgTbqJxwDzh8g&X-Amz-Signature=835c900f6dc6ec434e3c0ba3ff4eef367c4c179870b4441d9a8d42f855fceb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X4EJD7U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBleuYDpfUuKKifDEOV4LeiAVB1ucFHB8cRUkUTeUd4AAiAti%2BI7vs3si6fzSwjBPfqVWvzMcXYHJuLkeZfKJZ6scSqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNWrkTIOwmuNBJkyKtwDvzZk5g2agMz2rrYZ5zh%2F9yHbZ%2F5cp%2Fu55wJIii7tvqhFvZVnotYdKk%2F8tIgGZxrrkrwPN83EAVETw4LQEYoVULM0zqpeEVefKkOf9fT856C3mdbgWiKWnj1Gnryd0fezxNbMcnPaGQAIHaX3p2sZaJm%2BSW%2B1wNi%2B4mP2NzHhyGGrKUjj3sUIOFQdWnAOLwp%2F4VBWYIof5zDzxSD9FX15IX1A5%2FRGOpijEO%2FH1OesE6oNpWhZUWuHFJerPzVaFQKRqaw9BP2%2FL9nOChfHM8P4qa%2BgGnneoCcLz5zPHQUYBhPgNDR03X2AGg3PBdFGeye8%2BqLBxU8JcyJ4z%2F8DSAxBsl3jDAzh03xVKi2grTFh7YZebL%2BWh8LiefjTNbk1ugbp9YHHJT9LnXzp82AWpbuTbICyxu9Bf7ISPqMI8khLR6CHaYOJV1QfCxFCeoknDgd%2BW680%2BJ%2BmKujfJuSAsh%2FvsS8Kv9hzFZpSTTYN0Uf5%2FlLRx2OwypMd1KUb7EjmFoKNgaLAlqUOWQv2T3PJrpBBbseDMV9pqjZUpCSHj%2F3F3e4Sdh5lOWw9AKemcPTrTcSKnS8li%2FHqUvgvJZACID7d4hNSPTOf%2Fr491T45xCzQZ9qc0dVwVNYXnZHNCIww8fa1xAY6pgEfJMjmmYdhCS8V137AEpHuEcLZwTtrRFT4Yii85nfVz0D7KW8Q7QHORUtNM2jpsZdzDajhNDD2tbwTfDCRWYd3MeTDzBhuWaSbbKRL3287ExcIPUTcVqCqFl%2B5exxR9a4XCK2Ru6paNgykj5UYhaEEXvUWOYXvdEIy2dmq4AVjSqBBpjhudMdO3g9x6vXhzYGF%2Bm3suU0W3WJhI2W2j4ZM%2FWhYW27C&X-Amz-Signature=32cadce24398c58ca3f1b9c872a5c894d131863c1c31bbe1f1b47460afe98cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYPQDLKT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T035056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0xxGwNO8fJsicDxokKiCLFke2TSpO85QXtg3oHiZgMQIhANUZfdJ7t4e7Hl7pnvTAERDzy0wzHE%2FUos6YLuNojKXoKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9lrKpL5DY84rSBV4q3ANeG5jxkqUNwLxx%2BW9Wz3zRDGqpR%2Fp2MxYbIFvni698Y04YMfPDvMYu1uh7BUZ6XrBaHHkMT7swq5JR%2FYfK6%2BcEETstpcaeTszqrM7D%2Fdvh1UgmLjfoE7E3UP%2Bn0saRHiFZfjTaaJWiic3SaGvYxpyXVUfEjUB7tPCOCDNh8aCBjJ0aJugC1tUEftl6DVvCcowa3WTK7fiDQlVt54vkE6bzwsyjdLQSUs32G%2B55ZFQ4SQQTwpC36tsKXu75mwi1y9RcCPDL8f31PlEBQ5tDlitNgjTeCG4fNMMyYXVVgpnyLjsQvTDq0xtJlpadYSjgd8H2LAHEHXTjKtoBlQi8J%2BS8tNGhFpI4DYcYHPkqIYagG43FaLaA44J2Dh6A5kqJ8g2kPIN6bSdaUXh6CF4I43NQlSGQvYsa%2BQHi7%2F1xKVIlaU%2BQckHoccx2COEsXJ%2Fo8OBTO0nUt5gwP75UPfmtFlUVrA3%2BnAVpAvtSj0c1zUjm4w5VDI3%2BKs4Q5i25xbeXUwgKl08ZB2pt7eebARu21sRwoXCf0kbBO4pTefpFsJ%2FwCxw8EsvzdpEKoBYX7EqacM9WhgrdnIDOcJMaAm9dWA7nx0gxRtkMQYV%2F%2BGKht8EZbFE%2F5CAKC9IbLFl9STCf97XEBjqkAeG9y6fdGVE6YNuKu2ELWkj7LMdu8O2Znv6cMPtOws04w1tzQWyrsFHEfqH3jJROi%2Bmt1U6KUQYFQg%2Be%2Fp7r6GviXI7%2F8XMPmD%2FQ4dyjhwlq7zfw%2BNetyVifNhi3vodofY2vu8TbzX9a%2Bwq17CWok7Y8Zf%2FYJOIepOicZ2uYlnLmYqs6O5x9ktCPrTbK1vEwau7LxQ43hO%2B9K5B3cl1j3RDiodTR&X-Amz-Signature=6cebf2d54b7420a62a7b74b00901fdb3b7a5b299de8e51466abd0a29cade9ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBL7X7A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBVbSduGF0VGFyZfOSswjmvzgItpigvyj1hlTCAkvQTAiAoEYIBblgrMI5eDf3ZU8wbdVqsxrtodS%2B%2Fw%2Famulu%2FPCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvnBaRZBkrFNOnf5KtwDN7R6EW7b0BZ%2FHGfsYWWial7KSlNLIrPhxlT976jGlM6%2BVDcl9AxI%2BrTigTfR6poHcXhavA9CRtgn7oHDQdqUIoCJ%2B8tECjq1K%2BOwgtkNb8RegvsbE1dPSoaPGUZISFxz16%2BXIw9MYMmJzvho4zT8UG%2Beg6mx0Rwgw62QYY0%2FQq0jFz%2F7c7mhv8BWQc%2FeWAR2EEG2hpKM6p1XACkqHY4%2F1Kmcv%2BPpCk4caKZ7yYu5PJctfkgyEGOh5C1%2BQA3th4NurdxO3%2BDYvzfw3dZDDryiW%2FFuOEtr9uxP%2FD18lzuaD9PcI8sBBiEe207Dqn5knRaJyIxf78OxO3w%2F6koUhzJ4iWzCcJxZIgpui3q2xhMO3kIVOfKzwrEkC5h8e9PKRev6JIYE9CKLo8RwY2mvdH6UGm7dAOZ5JjG9VdK7Hgx9GEL%2Fgk0teGW0Z%2B0aIvDttVbXlBuPehOJms4WgPGiV9rIaC%2BG01VU41oQorNdgFbtk26k7j6FTtuammggutV%2F5lgtqG6gxRzJSOt1tEujFcS62wQSQ1fQqirzqutbKT81vRMzq8nH%2FdeTpxTAqyMb1K77%2Brn%2FL66fpSe9MQWe8oQvCM7eoKazF7gv5Z%2FvBhjfycS6RgFvXKKK0GwVnwUwufe1xAY6pgGjNRoZruq38KtNWfRvI4QiS%2BybgyJyrQoeFuMVvVl8ym7zhqwYbysu0h8VM8EuLFtNaYsDmwoEQ25fbYRX9bZE43H2syOkzZdcKYIAN%2Bk3CNx0wdV95h%2BKfyX4cbiYjF8PDK1v%2FbSub3DdbPw7RKMaL1%2FVrhn5F%2BQ7LlPyaxaKBf%2BGaT9GBx4VHMCQTc0tFLywqZ%2BUUzJWdCLpiH2MI%2Fg9El6S7cTS&X-Amz-Signature=29f37413f47618f479e302db979ffb8ed6ebb5bb6a081ab301244d038fff996d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=00751f2b12e4251f4d8bb3a524fb7f857f6525d181e671212ff6833cffb2f0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=de356889ea57b5680b4a17037a2ba048a73919c0035413476e8d5bc4ae868482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=a4f2739a3511b8f4e6bbb81d1ed961d9bc941b6c763b6c25f7107ce72af231d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=3bd4b3a86f6ba8e60d4f3de64c303a92f35cf8b1af22e8f7e2b7b30fecfc92ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=0f5a0e4aa9896da05fdca593bfa8e98b3952b2e238da20d1a450d1a04f73f4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=4d340edbb10ae6cfade3bb16974e691302402bbb1f86571210be2a76393dd632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=009e9fc0738afa99961b7bc67058fca53f98bdbbd675b453329f4d427ce4d8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=917ef8ca6108a89260b45e904886d96ee8ecc03f6a7ffcc8fcb824c0561a98e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=de1a612681a6e4eb25150dc0ebbd7f4fe7dcce190dd4c98c484dc09161acda9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TUPSEL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ5pdLqUv3xt09FQZ%2FRU2NkcXcNQPi7RrzF%2FdDtQHccAiEA0B7J67CnkBE78EH2BANmBqom1RqSvpEE%2BExgmI7U7QoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3KKLH9hdNDiC%2FenircA31nrQ3D4vfRA2Lgwev5KBq1glHvUZs%2B4ZbgGvLXgGsNcB%2F8K5RGNJp9sPagw1Y18FXqtaV%2FVwN8pO1AmzizptIGPXpICGv8yHGnpOFHwRdXn3BvxdAStUUhcCf6Um%2FMwCDyup%2F68Sfk8KDAUf6K2rkOE%2BkmvaBDkqhkRYC9CAVLOgseIBWhgy9qRwxXRN1tOFg%2Bsd5x%2FEB0m1umTofLijjlm5U6f2UFbQNKodrfMeghM%2BRBp9yn4mqm0sUxmLNewhKoPnv9E5SQArutTReExPwWrvElyibzg3gGTKStSkGaYas%2BgYKLHVc3qH1Uq9GYKhgQmCDhcWMWYINiMssmnZFhVAyVjHcm64CcVoNTnYCnkqXZg5X2KNLpVsPBJkpeteZtlLxuT7dbz4%2BuOIRyvMqB7VYxT3491w4uIbixIhwZzkUgbQYo83XrZ0nz6KMpCTkc%2FLaiV95usJsaQR0zKbXAFgtCrJNCMAMaBejY084mEl3cCxbVg7o%2F99Hz0LbkJo0sefvCjuUmhA1tJptThUJYMVzrF8Kxz5lkdij1JLf7k7HgPDyw5PA9SHisVKE4zmWtsMbgvbY%2FaN8pK0CCmlZl3UzeEK2g6Lf%2BigyG9lmaLYKzURC7Qw%2BAvU%2FHMLr3tcQGOqUB6MaoXSHI2sBEmEoG%2FzGNDX%2FEeOGntWrFt3oumCRG0pryneGhfp7tyc%2BwAJeSN5ghOReP0nUDj49PzWdM4gO7Co9KQWMoMNdjnu1zyUQI3tx48h4fQkek0wHGIoBK8liKk5fOdTgi6ogklBJ03LczkcZX4fbu89HSfJFiunljUUhHRTrbEv1hf0ICt1M49MGCB43l7MovsX1dKusdY5GoUYN2qIeY&X-Amz-Signature=db9efec064993be3fea6cdc3e72b58ef84ac741d55a74b741344e20a959def90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
