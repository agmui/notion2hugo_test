---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=7e49b6404804df8ae28cf047d1b61f31631f1d04a29d356ae400989fb528a4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=a3623a30cadfa0a1de13451f898400ab83c9479630538bb51ea05feb113b4167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=b6026a578ccc3d8bca2c6d19f0e283b7ce7cdb8d3aba39961ef181ed1dd76475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=05b5f8fe5e2ec9640a43efda087d8c821e5181a2c5d8f2b40e4f47e5bf374980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=827512138dedd543e7daf1dc57ddc4fddbcf31b436ac74f55f468f684a57282b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=46ce2a492584a872dc338bf6edd60b6f8a9cbec8a1240ee32231f1f39e4c0432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=a9ef8a1f2139b96031647408cac43a01668f10a3b845e5cd1953a20c92c82365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=4a974506076435229f8b47975ba2772417fa99df107103a75394f80c1c1a6cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=d28a8b7e6213764b5c3e50f800f2cfe410c392aff613be92142d35c4b00a0c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=698fa0c836ba888d6c0ef218f21e2c5e5efc64796bcaf9993c98d08d9d03de15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=5249fe61d993a4e4bca33f0824d916571756ecf7824da04a6ee63ae9ea795169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=4bce4357d6c2587935097d500cebfed5d924754f97117ad0d8d39215f358471a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=fc0cc92319d9caabd94a79e5167b61b6f0e3a18cfa3b257c8053e03226496d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSYU6N2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCGR3cIw4dNAtS3cftxcH%2BrE7yxAisA%2F6WgHpiZx3wn5AIhAJJj4o1V9orniT3wrK1%2FwEG7UCSYIKfSXcirlI1VHWl8Kv8DCC0QABoMNjM3NDIzMTgzODA1IgzhaJC5E5l%2F0vRlyxgq3AMASsm4vbIzoCWqS%2BUcVWTI64bk%2BPggk%2F4kWuztgbVqAFiS3wMewPmyAeggIJNpPPMdYzevKBtEsmzEgmRna8d%2B0Lfj%2BJYhsIxIQcqdLLwfbIeJ9vRD9%2FSvRnroeSoFXA%2B5RfSbJPhA8T9INg9FYqfEf%2FiCTQ54rQNPfMQMLXvAaVGjsJWw2DgH5%2Fzy%2F%2F6VIR1ATAmhPBhtE8OuS4XMFFx7SXSCsY1oq2FwmyAacf6pjcyvqrGseo%2FK5Ob2beQ0rMb2XMt7y3ZmNRPH08efIriJZHcMhzL7dM7yKTGnGqo9aZEAhwDjnfc%2Blnx%2BZHILVqNezdJAaV8ZvBlCx1XhprWE0EBKombrEhRk9MCycCcDodTXHU9JMrlXkI46MZ68hJW8rcQXROjIOtZw9JkEkb8tpur5m9jqrMKPTUiqX3SleyuPz%2BWVLVcG1ULYuIahWArIKrbUecgxmh529KmhY%2FeUPWP11NDBaNsF%2Fkq%2FB3SOJpTIXLxht3b2xfMNl1ksb5vk1DM46FeX2EPBpUMqx6EH%2FtRFZIQa8PQYClr3x7JEGbGQJtLA5Jh5LSYDYsUiLKaTJfjXNXjl0SGKim4xbHDXWNTBvqIeYs%2FGm7uXRw0B9dUAT0LJyHp2LLdqPzDgtYjEBjqkAWyTfnWGGfpGAHBfAVOtel50y0hKylcZb6GEnpgft2W2gwpUhERekoNvbhjGZ0IA%2BvXQuMM%2BHWM49DFox4n5%2BRKXB9kfoO8zeVLwtHhCa5Qc3UdxeSQuMV6hD4VFG3%2FD3z3IXeIUBcB0cdqslASdR0pURS3Fz5Y%2BRCq7ml8HrdOTVe2ghLLFHNdo5E6Z75oDd8JmDB1KP%2BNS4XtaNJRnUZ2i6JzU&X-Amz-Signature=6157f232bce3cb003a2d1f58a54be247d081f6ce422a135c2eb46c4774eb0440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZB47JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPOTZvBbL2Q7omyNtSPEwodsQ3OQCzOuXdrX1e8kkhkwIgNnOelGiEIjaXGZbJsLC9FUGsNeMojztdY5M0ExCzU0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKygCzzCsiK7AJKlcyrcAwVttb%2BpVFXyRkyCDCa3pFapnHUqFCY3JkoWeHE30ylwzWzqk6KHUFdxjmL6WgKjKifNNCbXepKudf4QnxSf8zgEJJIPh5VPZugEqg9w4CnmZh%2F6b0eHFN7GcdjBJ3aTC5KGqh7%2B9%2Bf%2FwRjlAe3x076wefjPU1fNv%2BT2CnAjr8zHut3%2FTE1Ps3dWjfg6NrIOb5mbxvnCxr85a4ZxGx2Ykxbwov1GVqGDnIcxsErpwlXaFfVqPhoN3fQQ38szctu3UHay6U5gX0QKAUdQjk43Ts%2FnKgOp4bw%2BCPSf7BlhMO7r5dF7EuaL2Fl36T5mIy5fAwFzjrvpQMFLUky%2FsmPSbpKM%2BJ4P1Qf3q0Sj%2FSfPJ7whUItGGZNrGAo%2BFgu5y%2BnL8Xo6%2FJehH2m6EU%2BWkab0c8qkJVvYYpIV7IxSa%2FnJ0wyiKxLZVjYAuOFOU1Pzuob2sVufzrk2khyWr9zl5P%2BsAAYPHAz3c1Xolh5mIFe6J1scxzzgCci0PdrfiTvgQHoBObgznwsCc1lNW%2BlttQCJJgFc3yIpqXmps4I%2BuFLo9GV%2BYzm7p6vGvvEcG%2B%2BnaQ7OL5Rv7F7o29CWuixWwurgkVKu8RCBQ7FAK57gmC4J0pWzJHC1SEcdTDogeNoDMNi2iMQGOqUBJjfnbFiA0ClokBH72vrZ6CkOICRKkMeaj%2B5BbaUxMCk8gUcTc4DjzkXGz2Z6QrGRUsHjPORL4UrJjoFczqfog137etxcZru%2Fxvh6P8ejvZHsOcQ0q9VV%2Ba1q7rBnYSUcCL3qQ%2F8Cm9ik1SjwuHRI%2FnbZDitE4Pg2kaC%2Fn3NFiobE8jnrRoWSO3JZorJPXC5qm8MPhdpg01Q1gJLQGOZvmulBsocT&X-Amz-Signature=37b8c908e742c05e22b6c3b497e2cdfd5ba0c14a1bd8318461e6e9742b9466f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZB47JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPOTZvBbL2Q7omyNtSPEwodsQ3OQCzOuXdrX1e8kkhkwIgNnOelGiEIjaXGZbJsLC9FUGsNeMojztdY5M0ExCzU0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKygCzzCsiK7AJKlcyrcAwVttb%2BpVFXyRkyCDCa3pFapnHUqFCY3JkoWeHE30ylwzWzqk6KHUFdxjmL6WgKjKifNNCbXepKudf4QnxSf8zgEJJIPh5VPZugEqg9w4CnmZh%2F6b0eHFN7GcdjBJ3aTC5KGqh7%2B9%2Bf%2FwRjlAe3x076wefjPU1fNv%2BT2CnAjr8zHut3%2FTE1Ps3dWjfg6NrIOb5mbxvnCxr85a4ZxGx2Ykxbwov1GVqGDnIcxsErpwlXaFfVqPhoN3fQQ38szctu3UHay6U5gX0QKAUdQjk43Ts%2FnKgOp4bw%2BCPSf7BlhMO7r5dF7EuaL2Fl36T5mIy5fAwFzjrvpQMFLUky%2FsmPSbpKM%2BJ4P1Qf3q0Sj%2FSfPJ7whUItGGZNrGAo%2BFgu5y%2BnL8Xo6%2FJehH2m6EU%2BWkab0c8qkJVvYYpIV7IxSa%2FnJ0wyiKxLZVjYAuOFOU1Pzuob2sVufzrk2khyWr9zl5P%2BsAAYPHAz3c1Xolh5mIFe6J1scxzzgCci0PdrfiTvgQHoBObgznwsCc1lNW%2BlttQCJJgFc3yIpqXmps4I%2BuFLo9GV%2BYzm7p6vGvvEcG%2B%2BnaQ7OL5Rv7F7o29CWuixWwurgkVKu8RCBQ7FAK57gmC4J0pWzJHC1SEcdTDogeNoDMNi2iMQGOqUBJjfnbFiA0ClokBH72vrZ6CkOICRKkMeaj%2B5BbaUxMCk8gUcTc4DjzkXGz2Z6QrGRUsHjPORL4UrJjoFczqfog137etxcZru%2Fxvh6P8ejvZHsOcQ0q9VV%2Ba1q7rBnYSUcCL3qQ%2F8Cm9ik1SjwuHRI%2FnbZDitE4Pg2kaC%2Fn3NFiobE8jnrRoWSO3JZorJPXC5qm8MPhdpg01Q1gJLQGOZvmulBsocT&X-Amz-Signature=6a14d90ab4375bef810872aee4de5274e56c304db35a510e7436bab8ab6497e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZB47JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPOTZvBbL2Q7omyNtSPEwodsQ3OQCzOuXdrX1e8kkhkwIgNnOelGiEIjaXGZbJsLC9FUGsNeMojztdY5M0ExCzU0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKygCzzCsiK7AJKlcyrcAwVttb%2BpVFXyRkyCDCa3pFapnHUqFCY3JkoWeHE30ylwzWzqk6KHUFdxjmL6WgKjKifNNCbXepKudf4QnxSf8zgEJJIPh5VPZugEqg9w4CnmZh%2F6b0eHFN7GcdjBJ3aTC5KGqh7%2B9%2Bf%2FwRjlAe3x076wefjPU1fNv%2BT2CnAjr8zHut3%2FTE1Ps3dWjfg6NrIOb5mbxvnCxr85a4ZxGx2Ykxbwov1GVqGDnIcxsErpwlXaFfVqPhoN3fQQ38szctu3UHay6U5gX0QKAUdQjk43Ts%2FnKgOp4bw%2BCPSf7BlhMO7r5dF7EuaL2Fl36T5mIy5fAwFzjrvpQMFLUky%2FsmPSbpKM%2BJ4P1Qf3q0Sj%2FSfPJ7whUItGGZNrGAo%2BFgu5y%2BnL8Xo6%2FJehH2m6EU%2BWkab0c8qkJVvYYpIV7IxSa%2FnJ0wyiKxLZVjYAuOFOU1Pzuob2sVufzrk2khyWr9zl5P%2BsAAYPHAz3c1Xolh5mIFe6J1scxzzgCci0PdrfiTvgQHoBObgznwsCc1lNW%2BlttQCJJgFc3yIpqXmps4I%2BuFLo9GV%2BYzm7p6vGvvEcG%2B%2BnaQ7OL5Rv7F7o29CWuixWwurgkVKu8RCBQ7FAK57gmC4J0pWzJHC1SEcdTDogeNoDMNi2iMQGOqUBJjfnbFiA0ClokBH72vrZ6CkOICRKkMeaj%2B5BbaUxMCk8gUcTc4DjzkXGz2Z6QrGRUsHjPORL4UrJjoFczqfog137etxcZru%2Fxvh6P8ejvZHsOcQ0q9VV%2Ba1q7rBnYSUcCL3qQ%2F8Cm9ik1SjwuHRI%2FnbZDitE4Pg2kaC%2Fn3NFiobE8jnrRoWSO3JZorJPXC5qm8MPhdpg01Q1gJLQGOZvmulBsocT&X-Amz-Signature=ac71f68d696d4d7192962ab1bdb58dff9cb0e0fd83d1812d5fe0027ea54bb4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZB47JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPOTZvBbL2Q7omyNtSPEwodsQ3OQCzOuXdrX1e8kkhkwIgNnOelGiEIjaXGZbJsLC9FUGsNeMojztdY5M0ExCzU0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKygCzzCsiK7AJKlcyrcAwVttb%2BpVFXyRkyCDCa3pFapnHUqFCY3JkoWeHE30ylwzWzqk6KHUFdxjmL6WgKjKifNNCbXepKudf4QnxSf8zgEJJIPh5VPZugEqg9w4CnmZh%2F6b0eHFN7GcdjBJ3aTC5KGqh7%2B9%2Bf%2FwRjlAe3x076wefjPU1fNv%2BT2CnAjr8zHut3%2FTE1Ps3dWjfg6NrIOb5mbxvnCxr85a4ZxGx2Ykxbwov1GVqGDnIcxsErpwlXaFfVqPhoN3fQQ38szctu3UHay6U5gX0QKAUdQjk43Ts%2FnKgOp4bw%2BCPSf7BlhMO7r5dF7EuaL2Fl36T5mIy5fAwFzjrvpQMFLUky%2FsmPSbpKM%2BJ4P1Qf3q0Sj%2FSfPJ7whUItGGZNrGAo%2BFgu5y%2BnL8Xo6%2FJehH2m6EU%2BWkab0c8qkJVvYYpIV7IxSa%2FnJ0wyiKxLZVjYAuOFOU1Pzuob2sVufzrk2khyWr9zl5P%2BsAAYPHAz3c1Xolh5mIFe6J1scxzzgCci0PdrfiTvgQHoBObgznwsCc1lNW%2BlttQCJJgFc3yIpqXmps4I%2BuFLo9GV%2BYzm7p6vGvvEcG%2B%2BnaQ7OL5Rv7F7o29CWuixWwurgkVKu8RCBQ7FAK57gmC4J0pWzJHC1SEcdTDogeNoDMNi2iMQGOqUBJjfnbFiA0ClokBH72vrZ6CkOICRKkMeaj%2B5BbaUxMCk8gUcTc4DjzkXGz2Z6QrGRUsHjPORL4UrJjoFczqfog137etxcZru%2Fxvh6P8ejvZHsOcQ0q9VV%2Ba1q7rBnYSUcCL3qQ%2F8Cm9ik1SjwuHRI%2FnbZDitE4Pg2kaC%2Fn3NFiobE8jnrRoWSO3JZorJPXC5qm8MPhdpg01Q1gJLQGOZvmulBsocT&X-Amz-Signature=6d079530141dc47189590755853fa7e1f5c33c3580d43abe00a4c983b83cd4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZB47JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPOTZvBbL2Q7omyNtSPEwodsQ3OQCzOuXdrX1e8kkhkwIgNnOelGiEIjaXGZbJsLC9FUGsNeMojztdY5M0ExCzU0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKygCzzCsiK7AJKlcyrcAwVttb%2BpVFXyRkyCDCa3pFapnHUqFCY3JkoWeHE30ylwzWzqk6KHUFdxjmL6WgKjKifNNCbXepKudf4QnxSf8zgEJJIPh5VPZugEqg9w4CnmZh%2F6b0eHFN7GcdjBJ3aTC5KGqh7%2B9%2Bf%2FwRjlAe3x076wefjPU1fNv%2BT2CnAjr8zHut3%2FTE1Ps3dWjfg6NrIOb5mbxvnCxr85a4ZxGx2Ykxbwov1GVqGDnIcxsErpwlXaFfVqPhoN3fQQ38szctu3UHay6U5gX0QKAUdQjk43Ts%2FnKgOp4bw%2BCPSf7BlhMO7r5dF7EuaL2Fl36T5mIy5fAwFzjrvpQMFLUky%2FsmPSbpKM%2BJ4P1Qf3q0Sj%2FSfPJ7whUItGGZNrGAo%2BFgu5y%2BnL8Xo6%2FJehH2m6EU%2BWkab0c8qkJVvYYpIV7IxSa%2FnJ0wyiKxLZVjYAuOFOU1Pzuob2sVufzrk2khyWr9zl5P%2BsAAYPHAz3c1Xolh5mIFe6J1scxzzgCci0PdrfiTvgQHoBObgznwsCc1lNW%2BlttQCJJgFc3yIpqXmps4I%2BuFLo9GV%2BYzm7p6vGvvEcG%2B%2BnaQ7OL5Rv7F7o29CWuixWwurgkVKu8RCBQ7FAK57gmC4J0pWzJHC1SEcdTDogeNoDMNi2iMQGOqUBJjfnbFiA0ClokBH72vrZ6CkOICRKkMeaj%2B5BbaUxMCk8gUcTc4DjzkXGz2Z6QrGRUsHjPORL4UrJjoFczqfog137etxcZru%2Fxvh6P8ejvZHsOcQ0q9VV%2Ba1q7rBnYSUcCL3qQ%2F8Cm9ik1SjwuHRI%2FnbZDitE4Pg2kaC%2Fn3NFiobE8jnrRoWSO3JZorJPXC5qm8MPhdpg01Q1gJLQGOZvmulBsocT&X-Amz-Signature=3680bfd43362bfb4ceff4bc50fa70178e5a9a31d586808e1577b84dfa2827c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZB47JO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDPOTZvBbL2Q7omyNtSPEwodsQ3OQCzOuXdrX1e8kkhkwIgNnOelGiEIjaXGZbJsLC9FUGsNeMojztdY5M0ExCzU0sq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKygCzzCsiK7AJKlcyrcAwVttb%2BpVFXyRkyCDCa3pFapnHUqFCY3JkoWeHE30ylwzWzqk6KHUFdxjmL6WgKjKifNNCbXepKudf4QnxSf8zgEJJIPh5VPZugEqg9w4CnmZh%2F6b0eHFN7GcdjBJ3aTC5KGqh7%2B9%2Bf%2FwRjlAe3x076wefjPU1fNv%2BT2CnAjr8zHut3%2FTE1Ps3dWjfg6NrIOb5mbxvnCxr85a4ZxGx2Ykxbwov1GVqGDnIcxsErpwlXaFfVqPhoN3fQQ38szctu3UHay6U5gX0QKAUdQjk43Ts%2FnKgOp4bw%2BCPSf7BlhMO7r5dF7EuaL2Fl36T5mIy5fAwFzjrvpQMFLUky%2FsmPSbpKM%2BJ4P1Qf3q0Sj%2FSfPJ7whUItGGZNrGAo%2BFgu5y%2BnL8Xo6%2FJehH2m6EU%2BWkab0c8qkJVvYYpIV7IxSa%2FnJ0wyiKxLZVjYAuOFOU1Pzuob2sVufzrk2khyWr9zl5P%2BsAAYPHAz3c1Xolh5mIFe6J1scxzzgCci0PdrfiTvgQHoBObgznwsCc1lNW%2BlttQCJJgFc3yIpqXmps4I%2BuFLo9GV%2BYzm7p6vGvvEcG%2B%2BnaQ7OL5Rv7F7o29CWuixWwurgkVKu8RCBQ7FAK57gmC4J0pWzJHC1SEcdTDogeNoDMNi2iMQGOqUBJjfnbFiA0ClokBH72vrZ6CkOICRKkMeaj%2B5BbaUxMCk8gUcTc4DjzkXGz2Z6QrGRUsHjPORL4UrJjoFczqfog137etxcZru%2Fxvh6P8ejvZHsOcQ0q9VV%2Ba1q7rBnYSUcCL3qQ%2F8Cm9ik1SjwuHRI%2FnbZDitE4Pg2kaC%2Fn3NFiobE8jnrRoWSO3JZorJPXC5qm8MPhdpg01Q1gJLQGOZvmulBsocT&X-Amz-Signature=2dae7c39cd5423cb16e02ced3bdac2610f3028bebab0d518b8bb3e6d90223996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
