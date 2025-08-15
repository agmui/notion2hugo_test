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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=ffa626fb2020a5762798a4f4b638765862a5ef046b5f4add5cdcc8fca1a7092e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=478ca9b9aadb42c890c29b5af758c133bd3c5349c7524cab4db9a3169ebaff83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=b69910967025b546a5eedf3e8c24bb5176270cccaa6a41812eaf0e303c332e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=78c10a32606000dd4a7ff2fa6b0c0b8a964bddf6c3ddd89c6d9a2c31c5d2e451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=ca231b0a6ae70e74d8110bd20d525e6e274e8de569934402e4c2ee21bae2166c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=4e4d3b25c6e3a40b4b39ae028470fdd8c59d239ddf1dff9f356ef69f8fa580f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=a1965281c032a6b25cd498ad897aed974e41e9560955d8662b41c220050aafdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=6c24da7661040a9af99ad80610e5075b1f9fbbd98a6760431799855371113c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=0d9ab14b6a7df757ceb2f924321355bca9cbb25b8c6f8701e947f122460c614d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=543884cd489589ce075d138a5045f991ebea73a3530cc79423bc64797ee74994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDLY5KM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCRqn%2B4XfiDWL%2FZgHWE2AGWudHKBjEITBS1nTbjuAw1MwIgTJ%2FLqgNcF5ex1w1otuz1FCS%2B7wf5z1ew0CRIZ9cfN%2Fcq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEWFPPtgAWz8kXVVvSrcA7akp9Lkm77lOw%2BLDxmUDXhfOLxzlyP9FMEs0PFqu4Qf%2Fx%2FZZrIxYLtLnv%2FcotvUsNP93lFlnoJCF8Gx%2BDSt11AXTcHfHCk%2FyblCe7y6sNvLI9eiWpYlVdqw3oQe84MMMqyQCCSTnUSWogR9lisZsmrHRchhACTzOBwhzKzXnYs9IKZsnJDTJGQG%2BNGldmSUlAbWbe4qTVbiipC6tI3HzmMSlbwoNZvw4Vy3RKtB62DTH1l%2FIr1EEuMmoNyn5k0Dgw7CapHdOA5794qvshmNx51pjukBfUkTHigIjR2SYsdvnnKRN%2FHrweV1T8jqdzG51iVfIYdjaJdfKvescWFOcyCjgllUZSNl8fIKF1F4mrkqQTepKUtni0bae9ytBW%2F4Et5w9YrmoecBs10TZSAeuvegF7iVXjYAcFFtHNcVRuDngFOepVAxDaeuh2%2FC%2Bib0vyugKNjwbIv0hUhjZmcuDEhMnwrVdgPRN4Id8h33cEr2z024I4oZdAroFeuMo9DLtDujrqXyx0IdxEXuSd8uPjVY0F8SYtC4zs2Cbqdfa%2BdwaWhPN8qvmMMXyTjogQj7Sya3NzjIutEGxdhdq%2BkY%2Fe3w2RzYDTE1Qs9Q2rsWOe%2B5P2thJ7FpKOhYFGJFMNmj%2B8QGOqUB1GQ1lU48mQN4O92KgaDV3nFDll31rsGPfPZSl8wC3bHxSC9ccLlSMS%2FZsHo7E4W93AId1IfeSoKM5fUi1qor3PHCizovoSCP7oKY9x3vrzT5%2BGAH%2Bn5FvXpUMJ9ItkCnHEwR8Qi5RZKR0XcPt1LbOBD2N9Njg0OBecvBUOhS%2Bzm9%2BqG6h8W8IRoJLKWtDg%2FECSoaG3qLZsG%2FGbCvMyvwjjKEAfel&X-Amz-Signature=68e05e106dbd94d71fb67becef81d19e432533bca34cb579ba76a8f618f1d246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626VNHL32%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIA8Ah7%2BCy4hehwukmTNyNYbqsXSLJDs33u35j5jnxi3IAiAf1TJUoKMILHdDL5DmbRTRB6tuWEO5mS70kRghQbNLSCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMnCmCLywA03AHrgs2KtwD0Z029O7uTO%2BOv9%2FcoGfcG80KuRk8rBHOQN7k8ESx%2BLXiacazN9s%2BJj%2FG97HDmD%2FSRK1Mh1Nuh5lz2B1s%2FC7198ncWgxOs9KEvr0wOWOGZGg1xuPb1kgNEAWD3MpH59OyZhdJIdqPcs29eJtQGhL7kVDL8THEUjF%2B%2FLd6JnULDqefqkGCwZIL%2BSOk0Ukt4ihppiqGpNU1V8FCpJdMH3PdhhAZJJMqk0DjMlgPPymmv2EdhzU83owQptMvvth5Ng0Hu2OImV6UGIBbqaW7KPTdNa%2F9HNUovZj%2FmuyKq97KqrcMQ5r8UdTNexwXME4SU3JbI4Xzw7fICfTYNEMxW%2F9UlBfunh6qnR5x%2FMRBfM0usul3ldoWbRRpJuTbC0WjBHTTHH9%2BQGc%2BlEy7Imcf1H3XffjYKTWccXQ608SXjIk4f5L44%2B1iGTDFjvVtk3s3GP6TsY1b%2Bcl2QQzSmHeA6FBZnHam9nCg%2BIDlIK%2BLaM5%2BsLeeckn2Ks0k0TyRm2HTuim1o%2FNNwbdjGBWGmWpoDxDrhaIzG0EuTprTVxHsNQ4XGtTg9Y3%2F40GLdge5sIFhPumWzvdjGs7TMglCm3o8RtretWvDa8CnnHvi1%2F3%2BRqHvdvztrBJYS5zmQArf9ywwyqP7xAY6pgFhLoxp3e%2Fo3eO8N13CS6oNWoebwppYge7nFZKiK%2BMzcMdNjs8K2ktfOn4%2BH9155dv5Yyw16PekhstGHudauaavoUhPAAu1h8dSfnff6MyR1IpxQIvhIi7dOg4dkwhqNC72ZKIuhqzjpzl1x1xFS%2BMRydrAeTPhHQ30gnjzsg21a2n3wbesiBXMV06UDFTI0oQ5iNbID2l9NiMobHWiJq9DAV5PBjr%2B&X-Amz-Signature=ec0a797956dcb7c47acdbecbcc3b05931a29820540bb98dedb944305cb883651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4E44M3W%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDJzsnJ6ez2Fc7PKWRv%2BL%2FWjepAT%2F%2Botpa7bur75G34PAIhANa8kSfU8m%2F021S5wgW2lEU8GZUP2GCDKe%2BhUuADAuhgKv8DCFcQABoMNjM3NDIzMTgzODA1Igy1%2FgM2dbf9HZiIdpUq3AP738FZpOfsEO5G%2BucCVMPzt2SLfnq0HMn%2Fgv1Xdia3vMeSD%2F3FK1QYY2aCjzQjybQ8KAkNhn9R2QXLG14eS0RwSXFYbySBgwdgpD0NT2ak3yJp%2F4%2B9SMczu%2F6bTn2UtThlaN0GihAy1nr%2FV9Hq6vhDYeViAXjGtuu4BQWajqGRvXovlLIuN4d3wNMAFYrjnqewdXMgG%2BE46z2vAg6gDTh2mxyCKZDT1%2Bfb5bWPWstB0uWNZBphwiynm1Kg7M9Y%2F42xbmrNNfwhHo42ijwouZ2zPpY3bDaai%2BIkZ51H4GvEmLDB8yVzY0BL%2FAmlcMjmeGjPEqZswU5c47pCnShDRrBk0JiG39N%2BozxdKZvXfWl7CxQ7i%2BWDaFoX7yW2v5U1E5ypWd9NljBMTm5c0YfzEbit9O%2BFA4onGnRySHmmyZKQYk1tzCYbFzIaieDy9xL4DeQoIcKNcwP054xY6VnQg1fEKwOuKv76BxAa4w6ie432u6fBy5GSGX5d0cMYC1MLMjfPnSAtD4zs%2Ffo0fpHupOb8ZMsfR6ECMN4tndks8MEmi59LE8nsGXp8vZ3l9awSUbvZNzHfIKSPPbVt%2FSn1dryuledlKTDhvd1ZYMS7KCuDN1J18KcNlYpmnqlWVTDiovvEBjqkAUUiKUEzijQDj6gUi2myhbCEaYILqM57MPP0vGBLG6xXi8XiVFdlF1mFKH2OuOIoS8ngOGXTmSgQlN5tXZzyiRyQwuf9uKWENPhHJbAAYM5xc1dEkh1Y0j1Ss85PPhmCHppYdAA5yddVZmY7u5Ktyhi0FDAiubrw7WxHwipGhcUKhtc%2FOgLDb%2ByXSxgFAEzbwUl6mzYrEh0JJ%2BATxrpSk0wwWoaB&X-Amz-Signature=b1cc038eff08c0ba62ad3df12107d88e9b493b1c958d7fb6e96c9d89801c9b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=25d59ba0041ba29632371ad75ee128ea21317ed13424806933c8606704c9001e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYFHUEO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDv0RR1H65O7ZDZzrLAofK%2B%2BcOO4fVAWo0HHQx%2BB3EvmQIgO7kbO9Jm2%2Bm%2BWDMxhwDzJ4T%2BHhQUFgKYhK%2BiPnGB86Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEw5DYuo%2FAxqZypnByrcA5jhxjoBPaMlAWYMkvwQa0l2LNeqzioKk%2BF6zsjUbgtwif5g2hpiK9J%2FyHxugqepWm2EcVEdQcvEomV1G0scj5bzQwk1rhHijKJKbQr5HeWdkm9jhqFusYjxLJtDop2TGavym5D1gxgcSDb8h4sup6N5ud%2B6rIhaNFZbQsrFWsoamtjialv3sWdEd3LrcvB6grT0ub77o%2B6IQmBoGwR8%2Bd4An%2Bvzec8bd1DrgPEzcA9Bamg8v5Rm0TWxjvBg5UDE3tCOWCzKandjAmobWLG7Ak3c25AAqdP2vbDlN36JDdZgQ8DGw30bblQBpsNKfRT01TSfwND6Yvko6t%2FomssQaHj1ggaTKSLKShl9AB%2BpM5DOZm7ovcZbnvW7b5TDG96kDGEO2xuCw3TvoieoXC0IvlOMebsAWu6KgVRrlpee%2BEnEt7flqoGSA%2B54ImwTl7Rlp80EK7MNIefQFh9Lo2NM00RgzMxdwj7AYgAZxCOygcSyyTbkuicCmsfsqnYZuAU%2F3tqiqajkv8gZ4kgmmklv35DnsNV%2BH1eDbKLcwb0iaVXkCuPlAn9q2ooPzKxKz%2FaQU91hQVCifxkpg%2BEvCuuT%2BOcHd4V1b5rfUv9hRu1wZGikaHmIsuKEKnYLZhMYMP6j%2B8QGOqUBTIwehgPQFeDdIQPH5RJN0m8zniy7yqjNLJq31InzZ3weCqRHEyc05f7t7cFyjnvWfR2z9sQ%2B2tvuiKbPu4nY0Kqgjz%2Bq45DtO9wZtbYzEsYJtmi5wT9IYy2yMkpr%2FgJUBTEeY3IR14i6IEEogU8jhSLyF%2FwOPtV3dDSfRlWIUVMaey9T%2F1H2uVsHWhi9iuoY1ipF%2BFs8I8OQayojbnhcvI3L0cJh&X-Amz-Signature=97c0e1ba5a32fc2b3a0c96632837cb1fc8bd7a1d63414940810466fe0cc56ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=abc88a3d6a3553f521b397a9393486b4520637391f0c4a8fff03053ad3b29bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWNJFGZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIF6bp3l%2FYeJIVcLuOA5V%2FQsYh0qVJ38sSolnpA%2B4PEFpAiB3XeR7w1DNvSXDzaVkHpCaV%2BhpSSUk7P4MjTCTasL5sCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMBpn3spwLFdzx3O7NKtwDf9fad8E%2FqRy8Gvkasmu7tadqH4BtSPaTX1mmI%2B0PRleItpUGl3%2FZnbGNWHQ8Rk5QVpijXJqi4BGYSmv8%2Bj2zP4VcQ%2FAksFg705CaUu0KKQwAXMLOUBySuVATbsj63mB5hnFAeNIVzpqc8YiFI2oUlvK%2BCbVmgnIdleoIQQgps9208YOZUiky%2BJmjcfLz7A2BOvk6MNYdvZN%2FdPL%2BfCH5PvGwXIWc4DaaggeBWJHhvwyjqPKbpyp%2BkQAaopP%2BgjytmYnRicesuDR3ybpR4WFlNP6911lASbrdFt1cut%2FGKlWSE4gl81iY8LLto7gPSc2fvKeKpHze7fEUGkaDoaie1lgSNS5JpCnjZPnNHgOJHyvFKSylmeR4QzGB0wONO3LHDpyuLsbuZ9eZZxBEQlTltGVs6SNXGS4cioK9YudLtj7mt1AqoEzyTe9M5AX8VpqB7ypsVpBkkUeRYvfrl3FNNbRp4yY3MFt8CM%2BcAeFZCy78pSRg%2BhxSEGSZIlPwinAuJMdpM1H9QgY4nZOYmvfzII8%2F%2B0y6OMhhnDQeDIYBnD2lVy9uE%2FdalkyriF2d6TZtPzKr2b2Ut3f%2BpHEnzZwV0C0TxFZdX%2BzwcdAF3aySAUK4UvTXebDehZEHxhYwgKT7xAY6pgEUo8PzsMYbJFv6imRnLdSxBeN61jRZVFOUgj2ODcwyHdDyJ69rER8Nkn8mTtoZUy%2BNGjxJOSCSaMfY40FncGRiLD%2B3B0ha6HDcon%2FXJuheO9kUQTHsGp4YuMGtGMrPYqgLKED9NN6QaA9rm6By%2F9f1XeXQsQFDPTX6I%2FMqEsjCh22xdIkAIlol%2FFBfg6CR7kHVkZ57AyLTfSrU0I6OLq%2BZ54uUdOL0&X-Amz-Signature=b9a8f2a039564918a8e6859add13aea1a06e7b69416323b4b8f420c6f53f9504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=8364ac0ad7837c03143e4839bcac4f6c248c7c84ae9765146882936a5c110851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQA5UDKA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC5MuljaWmCzm9L%2BelhYXYCPQIVRrqATTStQf44SwkkBwIhAL2G%2BMjoPiNYFdFMpU0mzMYkpO8IvKDFwBQycy94jrQtKv8DCFcQABoMNjM3NDIzMTgzODA1IgytBqY0ISb4DAM5z%2FYq3AMLJSOvh7rFhQbvYmIMBd5oblHb9pb5krJIdGBe0TCpv9bWYVia47dX7RUw1nfBuKBKEedprcIziWWnbNSHQbnZViM1xdT%2FGQ8Ko3n0bRznNUICYDwSCooCGY82LWdp6EeHaXrJvPkcDULe0E0I0G91UABBf2NaA%2FIJnwAZHNs1TCn0yrXpeSMsfSLVbwZpCHhO0g9ocsyUSC2rMp2bBVzlE5MnB%2FMHKP43p1I35qgAJ78pYHgVgQHDb9d82BV%2FFC1rmPRN2o6qd%2F%2B031e1kLwINiBBKWpNUrcaKmNhKni4QwGHjxjn9BF8PwfEljCEx3oHXc92Vg%2B0RhpnelYoMzl695CjrmRJsanQYBayZF7SfUqmIMoUsQewpcgAnzHDErUfhjnub1pmKmiSqR1vgpT6hU0XcP9i2wns46ilT0pkoXuDvzhR%2B9iGqjpd4vPynrHvscciYDAUNVxBxdnz%2FQfXdubzvDZRFoD65DnTz%2BaDh%2FGQsK%2FguedcmRZQ3YHgi%2B5S2pAA4kTisb5Y1KS1lqxvpq72L8m8ybKYv2ApdI94jLrS%2B%2B3whSA3hqzL493OxaTr9tcXz431xcoruT%2F4doYceXcpydr%2FKMsYzH2Xy1EaKmq%2BpcvcxkQvGXSSZDD1ovvEBjqkARUgZGS1Q9gUK2tlmyrpfGq%2BFKdxTMFxXGZt8HCyEqS1AWTZc59eKwY%2BCZIgoytIPIXsEivFliykiFtSObF87bI%2FJxrJsoRytrco13My87CIKTKJUj%2BOKO20pJPUIsJnF%2FejI5OvijYwLEb%2FdQ6j38sagOwiTBZm1abQT9znkYEFsgZ7oYHMb8qmDkirxGssWK7OCO9NMl2MegkeP5vtdS89zObd&X-Amz-Signature=87e0db4abf1fba8459000d2cd0b08403349efb20abda2e81bc0de34f98ddd1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=395d069b070a0f04d4239168d4379eeaca3ce5f806a28085045c8bbf9743a67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TCQ7J4A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBmhz30XRwlA5scJe7TXWL5YvozA8b8%2BvcnVes1ubL8YAiEAvIw1dnL1JzfyCUw%2BYySEbMVY4V8u628uXs7VqFDnfwgq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBKg%2FkxRcvmoPzLwiCrcA%2BwWAE2Z0nnr0cVAFpNVihknPmLUiilQ6FMJI%2FEsybKjj16G79q020To0cjfuoXd%2BWo2G27kKg4ZGOQdvig13Lh08%2FUXUb9o7JIp1xzYuqrSW1IfColSIFxYBLAPFw7%2Brn%2FB8n7aTXiXZYzcp%2FUxfBb1YLwDZQTakYMkpNqET8OPMPeOgC4EG3DCAAQk2azCFy9dZQ9i8ANkbqXyY9BKAKf94l5kFZtPMG2QoF5OF2%2FyUo%2BUOr2dM613pX3OaC4MUfSGURtU%2F3OoesJxEfus0P%2BWmjjklcOOThJsoEFDJ6YiftFN%2B%2BWrBg7oKm6w1H1T5vyNlpcJPM4RQzBWQSHAAuZB%2BG%2FeDu94QGhR%2FgyxJC%2B4SEOynny5dWl%2F%2FOd%2BnnbER5ZXieCtn7Gg9H4SA%2FlbODF2tmgP6MYPUImbotV%2BqzsZj21Pfbk8qIU65kkbdf0qKXn6W8O2XAzZa9xwdD6q%2FsYxK45Z8OXhQR9uOBX3LAiKdftB5l0pMwq9toiBJHqPglXPTieX00H5svYiv21P6%2Bi%2FIcZNj3defQjMOVuAqLws%2FwuKEu8RXg5tvbc8%2F4W5%2BPzzptoiUWp3PLl16IzSEB%2BFgIHH99SjLmaUGecqYVcPwaf5D5B%2FlfJnyttvMOOi%2B8QGOqUBZs7kYzfOGreHrGdIJJV3NYmOEE7RtzcN%2Fu7ZVXKjjWZK6bZxhN%2F%2Bbd%2BfYwkNnDEFzg0tDCZJ7ZmsPY49Qw3RjBAiQkvotjH1pQvUU%2FSolWaj5ZMH7Msrn3LBw%2FkAOXkxIQy9Sr%2F9gtvmFIf5%2BXTvUms47fvoR88VTCCYpeg%2B1g5Yy6rchFx29GmVtGUjICYLR0gpq4N3qSyezp1bZ9AKb4WGoIe2&X-Amz-Signature=ab1243392e24c5fa8c75eba43bffafdd30c4f93e1fc0ec028a06f90865e5f87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGTRKIZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCVGD7W2MKWDFz45cbDvdrblm7wwr98UUmB2AOBDYO%2B8QIgPAvZe3gBRsbrgptwMvi2w2ONXJpx63uLz8O8vd45EJYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDJTBl%2BclR6u8uGFH9CrcAwlg8FCe3wom8fDIWQsICGL3H5sIDromWgay%2B84CC%2BXFWVPWHspXjMayk4DaQe%2BwcK81g6g29tKXHPb9ZI1z8dYMr4C2xGnft%2BBVYnl5Oq1yXXE2rkTxF1B3gNi4rYx4iyOLCeo6gdPmt%2FWe7NKHZkOL8V9Tx7kDGqALRqwbt9pkE8jArRJY5M0I%2FsAm7L2xbCprApCGv9mMaHxW1l1%2BcUrTRU93NfoCuhh0FzgjHjQXN0fc4KqewsipC9i5%2FSJEdgr1se1DIKyijm8nGARHtkz4ubiJ3U3fI86EY%2Bbv3T0dO4bbREB9XIfc6EPbZzv6DrM5Uy3r3uSHNTcwTM8s7g7Vp8diccd%2FAWfsz9ma6OWi64NBcoUtgFnxenmhStZL6%2F1AqYYAc3mKpyF016CXH%2F2oV3OKAbHdg31pwJevxjkoncruvWqNsXAqxj7vjYMArL%2BrktoYMYTt2%2F8Tnjmg%2BTCYs7um2OPsW46hZQFaFJ0NquRBVt7mZfXQjWg4aADNDaUKQiMNnOqBIZWvXwRZji27pJDQySMX4ke7hEdOVq7fMpGgrI6jGhNKokp%2BrVadG0pV39czH3ZBpm8lZDbuwpVAsJVgaTRpKlMzzDA6pvul4mChvISNJBBB8REJMOui%2B8QGOqUBQi9hY2ypxQ%2FBAxExwA%2Fc%2BqUMtg4JAGHbvWJ4qeYQObQK%2FvTo%2BoWWEljB4aKrpd%2FFApsC9ULG28V07iwO%2BRmH1yxC4JThUoSguEY0ZIF3RAJZ5597%2BXT7o6md3CX4uce8O3L3KHM78LbWBNjgZxTUIa9CIpl9djRLK6BGaEWGmrUaoifE6qypRheCO5tbJjJNjceppgA%2BmognXK3jpcQqTj7WeDCU&X-Amz-Signature=d3fbaf3c47a73b6faa5e113abfcf8e3174193a5b19b56628decfcbfafd95acec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZNVON5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDf%2FQ4OZ%2Fheg1Yo9nGM5zCmMnFtC36JWIJPnlAFc%2FF5SwIgaSuYlKVlMNJ6WG0viT2XQQkTnP2knaBgSZ5KiBFPAg8q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCx04W4bVokrcTCtKCrcA4up7MXqW9ewqkIrkdP8Z8ZD6F1U3dKuVnUN4gqYIWWFqejhEibTQg7J2W5dkG5mYShXJcN28NzdL7RMxc2LrfNtEJwICYyjcXFtjjEAwGx0P4W7ED8ugpGwZ9X9qi8%2Bh42AHZGDZwdlXPmKYbIOe%2FSyV0jiAdVQXub7%2Fr8fcIGodurN7iQf22QHwKIKvXseMVr1ccBq0vmEqoQtwAJRt802SMtHUhg5V5ABLqa23nw2sxzX8unOJisONek97WWERadho2D%2FPDhNGedJEmHa%2FnsRA9wHuU9FjKDrWqGaaZI3pqEtdPeps2eYrgyWWUuJKab9g9rzpw%2B9nvr0WcOxgTVqFB8WP8k9nkDuSXRFLXqgrn1QLi7xkqX2RXhN9FPslNVctlWZxMSqNTnXSXH9e27UoVZNV5eEVfmPIfO7j5UO5ktsDB92RHRnRBgCEeZJsMVraAJnRK96M5ASIbpwrXAjtxRAAwBVgpY9xJaY%2Fak550F2S6wH%2F7A0n7Y6SFmJDmSodhxBXTY%2BHxhUelBPaPc7v41Yje5INthgFb7HQOMqP07vxGrzswr9JqNNCpodenH3bs1Qj3Ygt6Flh1guzyHMHbsKF7LPnPU0Mc9Bxx8X5LABqTeUAl0vJdGHMOai%2B8QGOqUBP6CiUlo1SWVxSxQJ0AjfbGq0CHs7oqcyE%2BBec75%2FDlPR5d2XihJKy%2FBcNl0ib2TB%2BSVJ1GWt7n35khnyPz28jjRLbi2QG9ygYspfvvzIlKa6Gvpk9ouqkiG9Sf%2Fh039SDe8dZ4RC0rquh9LYKVYu6K%2BsRT3tgmTbDZArgh30GVYn4Xa%2Fft5h4xNs50RXF5ozwvQvOYBUz6PD1Im60WB4V6ojbLfO&X-Amz-Signature=7edf7ba1bdbe958a629dca5692e8c990342c47ee8bc26b661d3ad951102de464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3QOHKU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIDlC37LK4qRhB7%2Bpx56Zt9IZKmCLEruY2IExiiMoOuUzAiBoj8w6gXPj7I2GHLucPb3yMROJIQydzSc1EU%2B2zumPYCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMm6qp35lGuqNPJv8MKtwDPIE2gZJcBHsoSsRY4dEOsVKe%2FqAxbN%2BO6Btcz%2BWwR7CwheaL0P7XMBNZW42RdUgEmYXXUfsuDkGkWVqLhs7fsgymXpVYwP%2FJR20Iq%2FwfudM1y5TvxQ%2FVdbclAhvR2mTEhQV3QTSUpZqDTdNe9lN%2FOKF%2Flqb%2BiojfdKgNx7jiVHdwOFgzfqrqUm0hCFi%2BNnzOECRHMQO7m7LzOwkVQIISvmewJRE1PKB8RosIie%2BSKxc219%2FduTsugOStuqm3XBSr%2FvDswCbJoi2%2FZVC8yNHh1Qs1YEzKegvOeINieBoJCM%2F70T%2FhWUo%2BNVHJ2pObk0G1qaQc02Bh9F598RFkDTBgnTKgHPXxGq4a85WPJMb4TWgNsN68UUDwuliOTjfT3Zi7KdikwHaShiNIH9YYY2Wz9Z%2BeOQGI%2F5sGN1vV0feQflmfEhIQDdRUGpgvRXS7OLcblDcYwzwS%2FI6c%2FBnMlgzYdz1DEJFi5JxtZdRtkikT0mvV6k%2F%2Fk9GBIevvmMiCyFeMttQ%2FOddfAgBYaQck4Z%2FlbzmEQxPYaRGIFcESAWp8w2LVWytNWL6ITMqSRggdQz82Wn6mM3BmsDXhAe4MBn%2FY0BGc%2FsnCt%2FqHBV7uSZMJxGFV%2FkwlGihxWa1LKY0w9KP7xAY6pgEzUnV%2BEsXrYiOcXOP3215XmYz5lnkl1583Cf0N13Y7yBevWlJVV7NmUdGHVLQXJQRO%2FoL%2BAw13Kwo1cbwDzOM9ZIm4ReIUPI1h0JcUOQnIY1Y9rbkHweo%2BYD1%2F2prgGJc83H3K5Ryekledvx7ccpX%2BwkOXYRUg4LVfQTw%2BN1fNi5tRB%2FjhvQPfe9bmqGsNiVwTCFEOIzgkL7kANh%2Bk5YLgtyl0oIZA&X-Amz-Signature=8c6697d211d2b9a3268492e1678cbb0a72c8bd2d24163b004d6b31a94c7d91d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WLGUJY2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD4zwqOVTcBJZHI%2FpIef66a%2BneS5lCbKZHal44QuN5WpAIhAMKTsQUmETpVK59jPJTEpaqC3Eh8ceFUYUcPd9uaglQKKv8DCFcQABoMNjM3NDIzMTgzODA1IgyV5kkK%2B0Qp63mv5Ocq3ANtYcK6Gy%2FtSmipXkQqT6ETK2YzKvek3xJoDziSU8wdB5YtFBRWI4bI%2FymiwTLMGI%2BnMORQdN%2FFBh5JXXBBQgS%2BeRY9pk7Uwp3Lw1PCZ3KZjvuA9xe2EAth199XgA2WZTykTelb1gx5i3AFhMHB3Lizhudru0%2BLq4kX2KtMVo2WDrLX6z9TXFDsWKu5VlrY7X%2FPUa1OQK2tWzB3asPmTGbDI1H2NZ3h0KP8k%2FAlT%2Bz872nqXG%2B7rnuZnMlYBVoRUQB9mYeQgPKeBA%2BgAEz%2BNboEWY2WTnkrTr8DghDNlNiQLOfhyxJkrMwtsGIMzEaOyI1hF%2Btg8nRbPkQBMRsM4K%2FSYDjJkBqXjjOZR3QU1juLr409xmFBbdS9955YyKKzGUEUCgEdbPUl38zDsQ1Oy0XNP7%2B%2B1%2BGNhiijtbOvn9iUj0lw1OQ7FrZhPJ230pqwls6JHvj50fHS5o4UEejq82vEQcbDb8C4FKXip8bQjP3d7ZXMKVYxtqUhsjpOgRfHrCwX0n9SwHIyWA5O78%2BeHeCYO6M2iOXbaw3vfnBibh33T4HlrPZGYXMd8Dw0%2BM9O5Ih2sOLQn4W3Sq1YdZWc6GM0WPRGbpyAkPzUM36j77LVhVWlUV2xyBMPKuiokjDHovvEBjqkAZ5UJSd7MDxusXeIBqeeUZ4HnJwSGLSyBVhsYP5IOpNTMP7GizH1bu%2B%2FjYFK4bSdoq7JWO34HHLWUU35Yd%2Fu%2BQ3E2Hebmns5qEsQNm4ZQ7vwGfL7odPOHC7OO1x6JjWEukKVt5EkkDyDXwahT4AiC6k%2BxN2Vuwbaa%2Bvn5Hz2uJmjcNQkVtcw%2F16C1oU%2F0K%2Fu045qihqEYeQg%2FYdmK8tTzy7bYuwN&X-Amz-Signature=7267a3db06def248b38fb17492af7065da80b6c1c11d91db54d1d369914185da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=7c7ff76f2280707202aabb8b7282c17350021a078cb293217ccf557f326628ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY2WCQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCHcaJsS1aHSCAPvaEA6GlbkgfKyoYVhUuwoZRehND7AQIhAKhpjzucViLN%2FHxmRW2o3%2BPEViAmZVRUXw00skGpC7WDKv8DCFcQABoMNjM3NDIzMTgzODA1IgxAtd2gwpDyqXx7z9oq3AMrypo6kdUQ%2BrIwr5S51sdMlVmJeJpH%2BFRda%2Bh%2B51VMr8DEhc%2BH9yBQcgUpuyeBy1uaNLyN0bKw3uHBB6agQyB%2BmoiDw5GV%2F5hKujvY04IxNOCRx0MggZQGu6kjIXQ7yLImD3C9Ylx0%2FWPtfjQJRLBNQ%2FuLuhgyeIUn%2ByZFaJI6yQ%2BnsdPkknDUEx3Ppr0%2Bg%2FIKIul173A7%2FqG2SKcvqORkHXCwJAR5%2FreJbjEp00WQJA0bzxEZlqdSxeeYy5qOR3UMKO1MV7EFD7O6oBDo8eg4NqpLruVHtqPh0%2B%2Bz8z1FCbDEa2Pwsh6OwJ1dHv8Xl0lmn0RB%2B2ARPwbYSpOFPKgbNuyTDzW5GPHXBmtQ54EJ45%2FfPOxETKklqfudl%2BM3qIi62h76JURsA9czAoigZCSsvpwHg1DokG0Bqa%2BRjf6bVQjfb4NJTH8TODLWZAOxeBL6f3LXRcNAADXSr%2B9y0tj4Ucc0C0Zo5PGkiUskFNY2KpWcmQxjt6tv%2BDaNtdzkO73EenCyurGJDEySoFA1coVeSVWdYfdGo%2BAsguIluc7t3uKzBEqgaSr1ZSxSvV3sbHkgGg0SS4mPmzt1qeN%2By%2FjIHoK0fEQ0G16580seibYLE%2BhKVWSDRCaIoyTbxjDtovvEBjqkARK9Afb%2Bukxsv7Cyxuv%2BQkTuhYn9eh8DHjmPTVsejyS0m8C9%2FXCLHuwd0K%2FCVPp18ODBHXf8HcVyYuv38H3jK8oPyvURaqMPIpM%2F6DzJXyJdgSZR8qqOB6RcRLZnbOZGLdFoFK0BJSWkCEzGG5QgTduWy8M3cEXP979%2FHqqG8O3yumiqz56nBnW9HYlw8fleDiHdTHXz6ayWZaKSPILXmmN01mvJ&X-Amz-Signature=51a0a46f22ce907842473e1176c36bfa58e1b49bcb58d08a43d6772981453e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=719e12bd9fbb98a6dabbafa4726f1cbaeea1074a3b4272e48e5ddb34ea4aa9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=f4659634443c93144ecdf7ae008059011a941081e326219577b268d8973cff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=f69accb5ef3398c090625e62a608fe5af544812d556a48b0b3f1a9224fa8b1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=0c9daf71566083ed5a0b61da988a14457817283d98ea5e65a72f8f8c1a4ab2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=ff291f5c274d860f9611a2c0918faf8830cb704e1f1e35e2d1f4002ebdef69bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=09efe78b5e3b092322f5e1341ef58ebe34e09ff95ec07f23a719b9a68d2987b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=f69accb5ef3398c090625e62a608fe5af544812d556a48b0b3f1a9224fa8b1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=e9181616cb3ac11f7067d234e18b946bf27bfe15720c1e46d68bf42c6637dae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=5122dd9737b402df49c04f1c47419c2cd1eae0b4320dd1d9995658d2b773cf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B32P22L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIEV9MJBda41Xza%2F5JDEgAzVlTfW4fFRaIo68ZYJaResbAiBnSXChvidS83mReA0Bkufy80cSCwFpwRStNSOE7yg5Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM86Kj75IDWviKscRkKtwDTJ1iJN1Nt6AH07SyatQhyK7NPEVvennVnn2SmhQXbCnVNeuXAIevPxMKU6ZKCsjslRWTTqwtJkWyGLt1jLLMiQKpX%2FnydHcm26wzLGcCHjcisZCR1Mu1WWcnEdyi2F3FDueZZuxbA7IbabxUyr7nfP%2FBx5cyu2r7vAqCc5qs5lS%2FOd%2Bgr4YcVaOcdRVqIdxQBH5zXbykkY7V3e7cIr8KFnPYITABxNrIPofUUy5NJQzb6shSn9F5xFy3shiMA3%2FLwij0mmFdP0aPgAkSYlxBdWyV%2FWlLBJV%2BDTaV2fS%2Fsv%2F0UZOLoGhLMveHbzQhkfdUC2wBZ%2BhgVHBy2pHsZVbd4tgWviJIHkwvKsb8dZNlNZEyy2RNHo1yxMCJwzPlHwZBGmF6e%2FGNAaUknWgYOC%2BAIYn7QEtXa2vFy55zfIBuKlrgSv4NDBpoVdPoXXKA4kVxtXg%2Bpg6LLI67JimmQpsVV5DNUZCmdXDO8gLTcdiE%2BCeKkdUXqim938GFUSVoy3yZkhyFOcFc6drT%2BPYn5Y1jXPKJTzOZTd5vK77mKgnrdt6ytCxXNVN%2BpvLKw4tG0%2BkuGtXyr5orRsnw1tQjooJvPbylXWYgvyqY2l7yOf5qI%2BMNZyomS%2BKIovTXgm4wgKT7xAY6pgEtLqTxpumJ0GdBc09Xn4X8rY5QoGPDFNwY05eHyrBtwzta7tHCYPLVStche1DlEc6O5ibquNcOmrx1N%2F11nScKbuvNbRENsyojMCODejlqd5Wk7HBsTX7PMzum2Gg37LBiawuCbo0Oza6zJGBraozrmlo5GhJv0Z%2F9rJcIvyDNv6hWy6YtlRCB0GvooP6Ut1F6d7BnIcq0XMJmm5FWVdioAc0mZUmc&X-Amz-Signature=207b555cc5fbb7567ca5cfe98e0e946ebe70cefcf4509e2d995112cff8938d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
