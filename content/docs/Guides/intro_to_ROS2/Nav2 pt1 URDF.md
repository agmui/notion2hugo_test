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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=43ae63aedd18e7f9c92c15a5a119ed798af28cc9f3e46a9539b173654e9b73ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=788f400dcc8e64cb687f360bc8e937362b4e3535bc37f43870d949c9ad989614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=00b76364af97c09f6727d05972ff616b976628908ce96841092d49f51dabab6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=aedde5e418a1c78c07e9f67c7074c5b861526b69aec17d4304178a2ab740d507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=f43fc74df718e38a17020db2e66691434bec70f0bc30aca5416ea2561d032f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=dbb85143151e1de16b2eaca8183011189044b1e3ba25244fb3cc599b03160abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=0f9e6a0cf718c940001ad10800c5b220a1978836225c22330d1bda2978ed4514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=38b24f663fef818791fe1efe46c4e226fdd10de099245035ffd7c0666c4e5070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=ec7b11d56ac7f3ba2212286a5aad527e7bf53dcc666efc11a6b086b6a9221598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=63a1258bb0bf9af28648a7365c97c0c4925bfaf923564f3123bad1d017432af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMT4K7N4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1KUJio9RWJGIEx8st0GlA5dfBZHCkqrXTH0oRzDeV2QIgBWevNfqmQDXdfuHfR1spT%2B%2B6otOy%2BlXlsdoV3R88QjcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCvQFjKk1hc%2BDgz9ircA44TIui7Ou5XFTSAERPsXetkMjgI6sSViyVczARZLmcLqF8t8RBg22jXHkRpD9BX0vtSrtBFW%2BBE%2BDlLY9PQS5Qxy%2BM%2FaIAU5SuLH0O0CCrFoyw3KkpbIJQMUj8mApM6NXdhHaqXim030VP8mqVWy7RjySix1k4cjOGfSQaWzpu2hHbHCYbXNuIMn2gCtM%2F3E5XR3vq4WtGnGLiUaIx2zv7L%2BfHIuUQPD2BojdvA3TfoWJ0DpB8rw1xJkMkJJtjsSGgjJXPDUxAbSKEsbx76PYDpt9QcbIr123bT1dx%2FlEcxqpwZdCZFpju9LXtNoZ8k7pYd%2Frsx1llWfHiypKBVMf0aIrQ7hn1FxcVoSXdJqweoEHv2pAiMRzZS2IjjnJSd5qzjOIE%2Fq9b7qItlx3o4gGM1ociKy90HMJ9LcVwMfi4qtEq9hG3oXbC4wWiqFqeHv7lrGuR%2FCGQpKJ6mx1VRjahJ4WPsgwNy2Si9DxBmSLQICrW7VrS9TVMMdmQeIELzh96B8JiBkocdYfPHG5O6gZjYzc9LDbpJ2nTCe%2FqrENdAT4RK0M%2FjyN8ZpXl%2BnkkVJQC88p8OAl3F3FTY05EQigQRTL19je6zva55rQNdToaK%2BAcWGDXYSZpvNxRxMMPy%2BcsGOqUBTshA9GQ7rDzO7RsJW3NDUUGvGUZ%2FIYSroig38YFgfFj7Ornga4Axz3NcA7uwNI3fjJkmwpKlp1kTUudW1L8mkld4hJm2XDR62MzM%2BhoNgoGdYzb3eTanG7RFDhQ7UzCOoGRJSmK9sp8wUcuJF%2Fhbm%2Fl0SPCnE5VxArDctbvTXp9CHaH%2FABRCHAO5tRIAoVZ519LV2uM238qRqutWtHwdPAViVzGU&X-Amz-Signature=5f16272e9c7cdc7444a8c454d76905e2a6639842e4fefc2b3b085eb2df934da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3ML5U2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfY3FC5N4wrAGJolQrynzbarqEvBsxsSXIenxozJyu3AiEA%2BaADW7wLQdM3oPcIwTfY866I5jESKtgEAIDt2uK%2FEPQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9X2P1Hea1kKpVPjircA0UwF4dhoVKw0ig94VAzqoVxtttXRgBdoRysVc3cmJ5jZbX%2FNdLxrZyfOR7H%2BCdedBa0RpJDAVRse%2BhW4vTfHdCdEwNufKUv4Y8pnhYA%2FuhJ9CG1N0i4u1bfEIcB4SawMl6HN5kvNhsIL7JYEHchtFcfATVfemxYm8l%2BLLoo1khIOZdfaN61tJNzWUhIZbbeahfFTcFXbI11ARMFiOc3S1zAw9IaJcm6KDmQI5BMsPMREMMRagkbAwIqMQ2CTHGRvRHrj781v3VBW6gQtPvpjhtmKCkhrw%2FURIvr0yogZMsYbB5TtqW4Ywr%2BdE5Q%2BH0%2FpINhMluwkQwoehdPF2WFnXtIWWjIkCj8R6BkBgTt%2Fy4XxyTlrLieceT0kEH5UsDU2QIUBA9Jvw5NUIVLDc7%2FxkG6fdQpSYtufPKrlW2R3ZD%2BzJzNWq4rZ7pv6%2FWqf28zx6pvbVczbxk6XhUNUxG9TVBWAEFWgWMo1vfc8J1zJSwAPXqHOrLqACh5Zayas3U2pizp1tSyzr2avD17fSl%2B%2Bf0oDUcZyhvIZ40O%2BIRElWWJTh0p6P65QkHJavT0VgdPfpB1XRWfk1vAsFdP3zpDE6CKr1PG2If%2BekGbPI4jW1Aq3gAXous90Q3ALpVeMJ3y%2BcsGOqUBkYu%2Fd6x54V6LvFrnxeMk5lwJO2uYtSMLrMt4tuZOi3XAkg2At1PBpTkxl8iAD4UkVsEEikV46dWRHMoGB8cmwqCafWkk4CCxJd1JRUufIVuBPtdJtP5X2PurERjWd6eCXLCjsw5U6dCfc%2FHDgxMKIetUSJndxcJ5kJOrbeMPQWf%2F5ewjZeAL8ZCKZ3Wjk0KJVUGJT4XWZqvcUBZ6HbsFgjNTkJiy&X-Amz-Signature=4dc81c343ac952da3a4b75946918a178d867a50971b3a777ba92d847c3567add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHGOQUR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgx8cr3TcmwaZj%2BZ%2B3Ipds%2BsteHxFFEMvtxFPdSYKrDwIgQ8YmjagBY37KUEhqW23sz5sv3%2FYOQk2vAiwMVwcl8mIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoaTqmKjA70QtU%2B8CrcA%2FSZ1tF9NbaYmfPUntZyh3NGqxnbRujspLcshr9pCTCXrNh6S1Brcw8n%2FvlFjYXnYCcayyF0u%2Bfavo7RZ8VPkkX3P0HoQy7wv6KUkfYeeK5Z%2FD%2BSFuiwmNBjW59Oe%2Bm00BBI9wC%2BpoirSYp9BMVDab64s%2BOQAYDQ8TGijteampPNMtucvBVTOYc8D7qIHvPX4SAtZQVqDuCE7pP%2BEzo2FJbosdaFgsdz8YlObKM7sdYRuiuVuZ6tL%2Fb1ChuRbE0Z4XCuJIXqFEcVBs1yWhBFvlU83Qocxb%2F7yCoyPmQcEXtu0AYDUFaNcANplEh485lkBh560FIyt3bPP%2FzovNR%2Bsh%2BKGYGyXzoTxZXfwSaUFnzHRB0BsF9TIBPXZ1GPqFjWmj4XTpi%2B6sVKHA3Yn1%2B0veMtMsiPbMhp74KIYofZRXxoR8HeBBzTMmIsNaZkGTdMZa7cQN5c33ZDKDXSuWNEl4qLLikE0DIQtO0K3Mpc8xq4fzShiKSiR6JSxB7El7DPRnfiftu%2FwsvXdf6icccM3jasPSe1Bv17WJMvV0OcCjiPa94WLb5W7kyvCUc8Nbsf2VYRuGpy8EaG7L1pVyuNRtxYR34pa%2F%2F6N29cgoSgFFcBSoHRkjVoSWw%2BGvV9MJ%2Fy%2BcsGOqUBtRrtaafMhC0laAf7XGHkn17JVV7ihoVBHu%2FDw58J5VfhVUO9KbyDza3VIF02zXPGHqihhzZR%2F1C2Vf7yy9FNLkz%2BvyEQ%2FLqHonzgEc%2B1F71sJFFgLeMq9RbmOU9247G%2FImf6x8okWulknOYkco9ACxitWfuYZ%2BWs8IBEamT3%2BWWptMvMYLUjnoiGciZeIkgR8NcJ5xY%2BEp6q%2BVxoBke%2Fdfh7KQAu&X-Amz-Signature=8fc83fd0c3bdecab431e49905785e3cd64a914dec8f3f0645c7a6884143a3264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=32db616f8573130454eab1cd45578c4f5ebf5bbff648704845ddc280d612a17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKKSHDE%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkBXjymU2mZZV7Pf7E3k89600dQBKZOZlV%2BGh9jb8JHAiByg4JYPvZkRlW3Pa9lJmxQqlNsqgbU%2B6cgGoylzo66VCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkAOPvjANuNDQHDSSKtwD2BLa6fzF4uxg2l90oAsn4Rzug2%2B%2FE9%2BWtV0oRD5xC3MwS%2FJOXf4dZc2WxxAPSdfXGbU7UKO4eIcnSGz8axBBV3MiRG9O59I3avOXFl4B3in2urYpFexwQmjvdfsX9I%2F2ct2%2Ft1BUdP4nIBJ9lPs%2FKjAOR%2BFMUj89fp22UvkVlcuUHS2C62e8c3a5fwWwwQkVdDWRwzUAQV6bWSb8NV4urLBkdxGWolFz2hv9IoYkoMnm4XYoG6Hw2dUL5dD2VlTzUXUovhUjH1ghGJ4pa%2Ba5Lqf0BekEIXYBcTWNWfP136Q1iN1v5dasZvnqpDarWNDz%2FpPVtpsdc2%2BMKaxqT5doLedARR6Co7HEgRbbdqG%2FAU6vhaDoZS7UJRLvlxkbyNIxdscytnWn91NEKWbsYBx8nj2M7fifyZ16QytrzrzSpMd9OKL3m%2F67YzFodpAMeJq56By4rZJVWrsFtKYSD7IJRRy5uf4bcc%2FoDVhA2qiOCWviZB5P7ZpsdEYuGiK5QqwJw5K2%2BfhAJ8pZAD0umQNSoJQzpQf8S8nyCO0tAdGvZtJc2on%2BYFm3E3HNRwHywnZpiUOvLLMqRglt%2BSjAjtxEflvV8kDUJzZMnD3pArxnvWxrd8oZcOzBnLWSWqkw5fH5ywY6pgGlW9ATnnmKfPqTY6cNYIBuJKXn7HsiZrxGZZWlzkOg4tuayga4bXRk6a6olfagPfzDFdxtJ0Q7rGtn2CUia0dVUOIpfZ3ZIHn%2BaQF6wT5egvRDG9cnpaSWFg0lAEiI82PnnfSsFdda9YJA6CTzCcyl9LqdbmZkBjZ3TfmrKDrnTVQx8rnulLJoLmVrdyovcsL3sgbsRy4HEkhcUoU4UjwM8Qn3wzAi&X-Amz-Signature=13d96bb00c7703b3616817751785799e653815f3a61c5bdb6db32eaecb69f128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=f003f623ba67066e2a5632022e3b3024f03a239e4b4b7506de4b094f3cd5e940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BWSO5WO%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZbf9bKNwzdcLWNJhJfhBJyt10x5zo1HVY0988fycsPAiEA%2Ba5AmX7nZgfO4AUYAxNZBSauENbHAopOoGJo1cgcoWAqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2Mq7drV5Uz%2Bg39VSrcA8p2ib8gimJc2U8fJoHXRUUfhHjXyWhIWAZfZgPi%2BMuvjWHAhbpZUQhp3%2FYWGMTwjvEWW9C8ww65I9SqK%2BxWRsS%2FIcecnmrEwktoq12aBl%2FtSoh%2FLbpfraBfrqrUGls6RuhX6GNtLXzJxFLEeAuQtBrBC1y6llH46pV96EGJqJLxKBlsy5uyZP6OaUj4iLlERPV6kxcyLh2wv34PvM3e6LTKuirkpyMCD3hvzaNV%2BC1miaEteOgz%2FJHm6GO1A3Y2IfjfXA4bbSxFGLvLsYT%2FjBgOWZgB1%2FuPp6%2BfgwgUDRGZgSmAPbXKuqPsb%2BkNwhSt67Yh7dJe3ZhUN8zWrDhdPAmvy2JQoC1C5hIBiCvS5nrqjvrBurx8Fax%2B7RdnSmCb1vgXGB9LNmGT5BIaRFaIHguIlPkwKndn6af%2BuLeBGJ%2B2kPfhpGE3SPBb7fGtOiKEEAo6xGX9rPgia4xJ2hyc4S1%2Be8Vq17%2FPE3U3OU4fuksA%2FK%2BJ7kThoZ4ubDobIdHPBVFPJE5fwsNeglRd%2BTGVLPG9T63Y1bfrOpTrL10TYGLCZoeTyiNL8SnEK7SZl8IFDN5zEX1p9wiTmOhkFOf7Eve170tHM25Ets%2F2izosrW0jx7QfV5781IDF1H3eMM%2Fx%2BcsGOqUBFAT5jYUyW7cTBf9EyIftUbv5he4s1K6dLYG7WajVHrL%2B5ZQoDRIKUyWaP3oLqx8VKnMn%2FDD544oLfCVjSCO0dcD6VcG4%2BmsA0i32DLFWQdE7SW7Bz%2BmT5RnlrBRI4Ls%2BaGQsVov8c%2BMle7zjXYDUQgqHpaAtMluIH8kDKWNamS7hfT15llOZPaG7jgK9C1tx8gDyaa7nvidp8G%2Fgt3Xb7x69Hd69&X-Amz-Signature=345c7c4684b5ad11ce7dcbf5b82d341d9cd1bab2dccc9d1706389ca08b5bc31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=087d26569867c410b856204c28724151ec23052a6ca6fff8d9146c255c5bec77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVU6K7RM%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4qy%2F1Rfo4tVHcIxb2s5oFEioM7upWUW%2B76o2qHv4SAAiEAwXuSktFy5xo7Bq%2F1dBYjeKqNSMkKNNAlvS%2BDmWGaRAIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlofi3w9ARZ0zMeCrcAxJCI3ZoUNYTo9J2BaZvw5d%2FviHP5SqYS4TwQJllDy8jL2%2FbYb%2BL8aGJ%2BYL%2Fx7XzeH09g1vm18UDaRj7FvY%2Fldc7F3KNN2fWdWqkvZr1rKizCq%2BnImln%2FdHXFJFhiU97Epd8RpFZQKutmMcGpISkGLdHW%2BeR2ECP2ZJM8mq6kT5YEUC440mAEt8M9KfdNqlZzYCdavwBAmjAewqMT6eXvcS0YxYoIP%2FIEPSzz%2BSfC1wBSDGeI0BpvSx8nfKVzY3MqcajJ5UHFrCfsv00klIQ%2FlzI6MUrcrSj0qcOz0nFTiFWTw4NP%2Flgvh%2BsQOIBgadgohQMyd6GToNM82eS1WMym9LRX4mMUqNGRo6uUPL5YtCenQN9HybK9pp%2FEwKs1GrnJTCF3pkui%2FjMv7nUfiNT1%2F0xlo%2BudJR%2Bjwcyn9AIK53M%2FQbFIlKw6Mxuneuq5FzeEPxbUj3TTI3Tbt71iAsLYr1fGcCAfnyF3D4AZnQUmpB4Rm2yikN7vLj6JmwqgfLtnXvd%2FPDkS5lYiAVCrIXeMGPYVxu%2F3bx6jt6ElDAoLCqqE%2FVrPxVLVoPrWd2xOB5xmeX8%2FhEkdGhkpyE7Fuu3aj%2FCDCRnDk25%2FuiCk4bbqY3ZaRYcFeJWTE6G%2BszoMM%2Fx%2BcsGOqUBaEDFTUrHpfdiVnUrQCUMzyiag0BJ9xRwh1F6t%2Fsic72E8qo62bOmLn5GZbOc8Vl1oGB6CJZvL1%2BAnxTtSs7KKU1r3cAppw9ycmpqINDbmjZYYUg8kmEc7JClDulI3vLDq8IwD%2BJuREYra1Lp75MbnNfhoFBGujqSQwiLpLlJahvKw0N4pBePjyphQa6V7v8ljjcF0BodFiYT6cefLE75omahwiq4&X-Amz-Signature=e6659dd334fc533d9d3a2e5e54a59772cc405a7b03952d3ee924901fbd7ab453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=dc7db94fb2bf60af185f5e694f847512744dd652013e294cb4b9c433aaeed9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OA4RGP4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTqd4IpCqILaH197OBfixYlHL1nLgDujqPQmQmUP4JvwIhAMK2pioG%2F%2BDi9by5ok8LSPLO42WHK146YLoOogn2Hg4aKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFipGfEoHJa2c6Ke8q3AMolC%2BHTjJrABg6uYyO%2FxmMBjp%2FG1hmWqDqw31ZHuTxsysH0YXIr%2Fia77yIbJe636syaT32bN79afdnxdimmRGj9MX8yt1b9pWlNlMXeUzMllXNuiDJgpL%2FY9wplJCHkv0wWpbkHPL4Jv6YFI3r3Ru9xwl8kEY5H4oBmuivsoRjCGDgyc3v5YXYeoXoA8bbSR82e7W%2Bb5ZSHaCQLlqd4hLSTntpM3mPGG5rfbsCw5NcIclRBio7MztpSlU50CZd%2FD7FwAZv%2FzwbshGGgmSTVVB8k2es%2FsZ%2Bi8c90Yh6gqcXZ%2BUeuLmp7%2Fm%2Fqj06uf9Wc00F6dIyWTbVfkhXS8RCmPM3Lxic7NM9%2Bo4QHrI%2FtO%2Bv4eKptGuQ6yAnQzHFXa7HxtqqMW4ebYrwUNRxRpnbYaZMF0cpxZxxpsEnMD3fyCGitfgDjQZUQnEunBdcKj1%2BHl%2FgFTcfedqnd7ghg6UJQ0brD%2BJ4%2FBPDYHTHqFiyTdGCCH3fI1SAOqMhoeUlC30rtDvtCuA9ml68LD1x5JjR3RAtcyrYk9tHy6pXIQ00CJZUbK3SbldBNq8PQcsTjdiiGJoHpAkOXD781f9nfTf2Q0IugvrFQOSqzrimedvyVXAc%2BG8c%2FcyNSk%2BJ9e08ZTDJsfrLBjqkAe2TEdH6kJ2zzcwMerWEx2iUdbU1FsIBS1IUcNJg6ZnoCMndlXVyFFFHcu6j5ZKSvAoJVzbXLUodSGZDU%2FYoBURsDCAYL2y1BughhYebzdp75GL5fAt5MgfzdIEuzmtnVs3p%2Fa%2FVTfhU99TjzB%2BbYNiOP0od%2FgzNjZPhsenk%2FGCcPdb8DZQNWOGE1bDZ2zuVgX%2FW0QkYXRUzIykV6Joz0J1YE2qT&X-Amz-Signature=a11826f7dae6164bcad31572f429f8613dfcdb5da09f7165e7301f0a6db43e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=e33eaf0f6d2049515c252c9dace97e9d18ed67e87415aac37ae6b3b50eb02105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDW7YRPS%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXGEj5c47RYEwpahI6H0Lrrnsm5%2BxiFo4DH0rjssW1KwIgXNgt6QJeVo2CgXG8t678qQlMGxWeuz6vWJjSgQXQJ74qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxFuZ8d0mHHZHMgSrcAxBluBJMekYDWZJlo0VWoqoQ4STC66vUb7Qox6zCIaMG3Jd2YmTmNPYYs208qpyjR6t4F1bGzCoLwYFb4Q4PR06HbikJlwsKYD%2F2kxPoEZHWoHmOzXmhZxzb8HACm4pznOw0ZKO%2BUPzuMcjGTl33AlX1zsgLSMvYePvTUhCIG3IAa%2FC0DiSE3K%2F59LpYyNGZBH2IK1TiY%2BfBO7YNa3SIleClEOgVILQhURChMVSSs0h%2BCWOapQTfDne80bgDEmgbGk5W065OoUrLF%2BMxGC4DL6aUx%2BSoTR1RM0MmoX%2BccqmSAOZvTrxW2q9ln6klswZ3FWYDXVYk7nQ4L1gpg8zn39ES5Rip%2B2DBa2hl8qyO5%2Bq2Jrop5d3pWU%2BCzBULc4OzvfJd4OAxZsOrZjxVCew%2BRHbm9lbNNjlqvSoj6id3Ew0PnktIiUvqBqQ5W79dgqc2TNmKPWJsR3gofwtZnZXXw90N2yn%2BSyK7k%2FIc0hQN6zYb17rHsfDkOA0YMwaF1VuAqzf90UxUBMwTi9kVzDwcEHw%2B%2BFpIIWY0Pq9hZa%2FNpaGU8Jc9IIMdiqZjIJfzQWcSfDfrwUoLF%2Fn6i8ZJJ%2FBR%2Fct2RSDgOMz0iv3caA%2FzgbYjDaL2X63EFWSDfFmuMLby%2BcsGOqUBubejpRidxGuZQpHM1PrfcElP80JDaQffUCcbY5fLciDHfKxLCj9xhmLl2M9XwnqPqqSeZCb0dfLoXA%2Fqld7amcaHyMZ1u1YNXUhzGf6EfkTysI1bmpiK0s832E8PrBi9SVTe8NX%2BqVJfUtDntCIUECcNSZmowJr9WSqDjXRs5UAsaNCOjbIi5gfPFqdAPiXhOuBx4BhW9INsp0rtMNK4%2BcIeW4Fx&X-Amz-Signature=ba4e154331bba8a2e3c11897b75f334e635686b6465331b9023b9d697f7ea959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZOHAWZ%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn0VjFM%2BdBz9qj8iFg8atmuXsFoVjdj7moiF4XvEmKWgIgSFEd4FV2QYC6VZ4pZXBnIjepvW4baSI8UyR9W3bpn9sqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNvBgcn358cCfXziyrcA73d7kHb3CvGkbojhBkXFPljqYfdL0LfU%2F2XUeFBbX%2BI637kx61dPVHcY0XIYLauBO93azq37NsnWXtnJFA0cuDGpbcqGMacvTgzru66fV8IbDjFKtJ%2F%2B09%2BecNtoBypgH54JQgHxUDpavJcd5IvuhTEUaSCDVGFnehvbyQqLaK2wqAcvD2wlSEyP3cqCgpNREItV8ZT8nX%2FT48vGbl8LD3LOj2GbDqIUXfeRZBrd7GPTBR0HJCBDXpLmz7cxit9XW4yrFSwP08aN2kipcuPKfOdT0O9mvk0cu6Eoz%2FEaRvt2PDiwDUSXPhx%2BL1ftolQ3V7PE3koUn5g4jyoZTBT5PgZbaCQzBqHT0LcxIUI8GIb08k0iA%2FYeYv5%2BhaOQLpGw7GX4PYpnesEK60ZV6qDxERGbp0zK5wSt01aL10q1sBPCz31nicbq31ofeM9Y2VOqS0AtH%2Bb%2BrVQG04jHTpocVsSh8fblHS%2F6l%2FLS8aVNLfo63jjhQGhBgzh7hiKH4NLe9Bmfg4qMvvLo84UUbXOBedIf%2BCeb6omHYlb9YOTiW4fT0Sh6jok77so27mbu9zqGMgTrEmw211CbP0YmMk%2FPY%2BnTJPjtOliyEegBY54GV23BDehh1%2BWMQndga7EMLby%2BcsGOqUBZg7hARzDNW8V%2BYI%2FWIXT93%2FxrG6mvns4SxPSCVz5%2BCJeqAo4IejSHOnEelof58m2KUjjwneQuffr7HR%2F7flnxiune8LkZtp81c09lTl5sqTCnnE3mNO3vQjQdbyoDs3ZxWOaXXf9JvU5j0PxNm9vtds8c95CJx4poGwpUUccTUFCNQnxszKUSkStF8iFosMQypBkTnNDveOS3xUhbU9s8aIbm5v4&X-Amz-Signature=2491aac2e2ace9eb4a2453c6bb82903128987297dae3f893d0ff9554870f5b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZGI7BD%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBaZcn0XyLyJRaG9Ihjxu35NboLPpg%2FarThSm2QP99OwIgG7%2Fr2xnbL1BF0LJyZc9%2FKUWRwv2TlYAbZd81BNfgFLcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfdOeFTH9vYflA9%2BCrcA0%2FvS43uQgc1KwV6kzCqk4cQmjwDQIfaKRbJmbjgsfDBvSQ3Faa6odsa%2F8MZZ82GypH4xt%2BZ13gOYbN6sWbVUJj3%2Fu70cLLwB34gWXWcOQ1PyKBQh7f6%2FSWx2sQUciMsFT3ouq6Rt13EW4evOokIeMMMIR7HtaW064uSRgHLOfFA62W%2BEf93rGv0yEiqaWbvaJHWmIhJh3HZuyxOufi9kAp%2BJaGcqq5Z%2BL944kNQLsQCnqCH%2F9mXk2s4zDk6%2BM93kohRhxgZlHPF65MPGQuMcsQtIgtP%2F0EjpUhlMQViY4ZH5B1UxyGPYaqxUykdfLet0FQMJdsJSqqVH1QkwWRlsD2EPsVm1TN3bwUeXWtwydaRDSwFT6ybCNYICc3JRaEYNF%2BmUAVUGFdlyIkJqSI2COUbq93q70N%2BcsP1i2H7UQMGdED75LVWTQzN4541s1R6PUiibMd9B%2F%2Fb2RZvCXGL772PZ9Fi%2FbLjaRuCbmSbkSa8lx5tKvIAHlxoM8oinoTq1etxYozvY5A136ggakr5W6AVTgQpz7u0yUM%2Bdp0TRhmx8mQ8NLhlJC%2Byo44JAHkE1uCBeOROmG8qJ7EVYuIPJf1aVSEZWRpnmx0e2NYUHC3FH18tLGDAYbomGQ8oMLnx%2BcsGOqUB4RQ4hy558iIqCKekQbl0S4vhI3NVJd%2FlIzd4t9JhS7413ssTjAIwGIDqE%2BIGKpeX%2BbrzmJdo7YIV3jSYz3GxDnKCKAEYJgcTsKC9r9xkqkGl78SdwHN9mmoW58XwIkRl2%2FbwIcnVOiJ53bH7cpe7kAT983QXMfvzDcFyuMCg7u7K%2Fhp8ynCtnznnhe9cNIiyxin8i671wA7m1DAOVHXxIofAi2l1&X-Amz-Signature=0dbb5152170e833874ee2880ace1af95e48175222f5cd773cea5907c29a1c1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=9333cc881c552c6cbbfa4ac72548a75c8481cc11388ae9a312ef521f27f2fa2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGC5TBR4%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICguu%2B7zK1wOxgho67bWARx%2FrYnsbPRnxMEotVx3tuqwAiEA00vwv6VMQrKczt7oWK81MJtuv1nByqXjbNtiCfqAwKMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE8LtuGQAeko1MJySrcAztkQVudiLCZi%2FGK3h550mtDGyP9wlLSKDyw%2BKqzLQt80h20FsJHff2T%2Fl3OejvXC1sBgpp9omAlVu10l9hh8%2BvF56Fetf1U%2B7iunVhsOQQLfw3za%2FMOx9%2BwaC0CkBr5P5O3bA%2F4eWHvXBTKKHOW1lEWCPsfGK6bpWSozl%2Ba21bViN6taBj72RRFdQWQxRiNOS6vnVe%2FPf1GPXYP9JgebpN0eDbVHWXequKtpK5y4sgRvxU38JuCwPdRr2RbgKAIJuEJ6qvxDr%2B89e42WOwdPYcgwAsCuyHDs4IUwgfo1jr7uGJ5LEgqrnbjOP5oERT52%2Fkxg47Zlwq5gvxL7IeGzpuBL68nf4Fgxm7DfoH2mFufbacGdVEMYwxwLFw8lMU4TjhUik35wZv9IvRLPGAxixRV3lPS%2F%2Fp6IXxPM0ARQJtYKkGl%2FDjiikMtbR41EO%2FPc2La%2FIHBgsr2fDc1YHT2nD2ifGru4TFrANB%2BAOCRtttpNDmwFAHsG%2B%2F%2Fr8aE2aqIx5rwkwHcuG%2Bx2B%2FZZGinjOooV83Rj1Fm4%2F2N7DiRunV5CpuNxMX2R5TxO2Rc5g%2FH7MsU%2BXKKibX8vLaW21epaX24wZ8%2F7gso7QX72V%2BD9ilhJNgzjtW542Ocsz1XMODx%2BcsGOqUBX6%2FyYlvqRYsPkl0vb6Gc5IhNXSKoVhLaliMGptUSpsvitKeJyMb1UYLe97wktVjS%2BwIRQcK8h7nSAFI98JGMO5Ztnv8CJxacjr2ZjwUEUQkalev4rqM7GFX5B%2BtYe9oOHgCeAOjAWIzQSopna7MEk%2BTw6rRnfyREyybFhvKopOJXOOBcZsQ8m4q%2FfQvwQ5MLHrEA5QX9cccP47oxEOHSWEDe01L%2B&X-Amz-Signature=a2af372ac821f6ac7a8af695d0ff4526aca51c3620801e3e24eb31157fc37ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=120f471b9a609460f72c02931928f010dacb9281ce1eb929018a81b51706061d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=56a6cac66bb838fa1cecbecf64537cb12b6abe40791d31532dc96e0d3816a02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=674b07010bf95b62c7ddba05a499a54b3a3c6c2657085cd11270ee6eace79362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=0b56888d90ffc95be5f5d09c2f9d285e7b8003b32ee82f194eef7f3f1bda7caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTCR3GT%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4dB9k3cDqI1pJuNbYM3kAiGFRGyhy3jbqJgUcQWpk0wIgJ52p4nrRDRdONqoqzWly%2FATkGti8c4oEJt%2FMpQGlGP0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi75Dl39hMcd0TTIircA3xwlW8q01k5zakxHbE3NjkDxtGuyEopK2kRfUjvQVK13ZNjIkvXpb%2B8hLqWEHulmGrVvcYXO59W0wBtGZjGH55a%2BBlRpjr5SsWoIY1sCZ6wBu9SW%2BZU0AFbGBxA20zigeoe1HJBsTRJZYRyISe1bb42mxK1vsArULAHzBYXrz6I30xlIUcu0tfW1%2B3S8ZY6QTkm7pGxxo73SgEf9y2i30Ecxka1MRA5deZi9b3rgHEvmI2iNcOl%2BuUR5cShtVKpFUlynibww4v5f%2BnZ%2FmTxsySZRK42BISdPtummKRlTV0aH%2FQX4qaH6ZUii2Q6%2FwRiloqgKEg7D7%2BKuJxfdxZhr4VmOT4nteZfU62F1tl5TovO9SilipSMm57mBfT3hRsiqYsHL0sz6Diw00Q7WYv8%2Bq2weYe1CqNd6D2BgEcqzeJEZCw4yLFFPFr3bARqhc5IJiNNs6m8wXCfAiu2paSrR7DvgpKlJf4BQke%2FnY61Syy3aaluexc%2FCsMJt8JdgqZ7QdFjw7%2FjLLqTV3UWfZsgDtPe7nT5MeY%2BWAWZtrpQVh1ntCdg9rwYoQRIEMoXaguL%2F%2BUBPsxlf4bQU810hTjlbLwgQgq%2FMP39F6r6HddeSEElzlyzyPak6rUGAVF%2FMMTy%2BcsGOqUB5Wh9P86MyuWXlZC46ZIpOhpYUXani4ji7ViLVq%2FZYkt1%2BRK%2BlIl1W1pkjcJDpGX1zVbfdQ3lf9Ad0z7zlTzZ148qEJoRly2dsAQ4NKzBf2pMv%2Bz3o7GL6gn7w%2FYF9j1BXLeWSvSfVq0qgiwCwT9aFtmya3CWdUONodiCUtHkAMD%2BvvOnw91A6uHuAFg06v%2FxMXbSrrIC5pRoiiFWxf58EwLM1kst&X-Amz-Signature=08814e75b70196652bfdf47a90b738fda5ed169fc55c7124c26cd9ed80f2617a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=043e1ca2a02a0f895afc59c99c71b683ba8df4a7b564957fb2b25f6f68869fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=b5836b7b46bf0767d7c7f0dc076134a284884b2d8c74d9055a538826a644c4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=674b07010bf95b62c7ddba05a499a54b3a3c6c2657085cd11270ee6eace79362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=391c8604764ad643f761bb1c44603a3dc498e0bf69b788b9f72b814b3a2bd4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=be2c32748a4a3fcf4d492bff515e17da194ca8051a7185bf2a667379a0685a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF4WSI6%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4dbFCaQSB1X9MuGzQYWO16DGjWmi%2Bora1mBv1E%2B7ZiAiBJJH99YStP5s3IlAqZFNLlRpOoal8RSgRyqdomiv6EDyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS%2FS2EWLDmnzuYL1PKtwD5nTfY9plpkycl0qn59b3s87Obnz8P6eJMob5wVJ49djlsV9%2BWLODrbrfbXgbfzV7OGVYLYhaaI%2BvWOMwdvtOxKondBflQcuhXT7XDmvS0Z4K2C4glKE2G1%2BZkJVNlPpgykZcVPC9fzOhP86VDmHRUZs%2FXWauDXfvEb2V%2B1DArCkIsSh%2Bda8IvKUdaPHizrtt3NLWk%2BW0cqAQ8sVWhIcXF0FNjtPp7aOfjYM4l8bK7mU3%2BnOsM1%2Bl6wf2NaHDVj9ZEcTsaHTyI0GAgHg8p0LgTeuHz4zo6a49qqmgZDVUOVkDfIv%2Bkqk7lPJNXBEIYvea%2BpEWCWpNGNy42FnkuXLwEg%2BVxmzp3oSE7LDaG00vhXVJDWvdlMRhoDYjYQglTrFj9FgzCuuOPYcjhnaL%2BENVgrMt0XNgJbSGb1CUEUhuZMU1wB6TgpZvKIiJ76iA2Bk8bPONcNxcJ%2Bie%2Fw05R8gwy0R4MUp%2F1AdIciqnZ8ABOBTxI9zI%2Frzqavbl48UoFvxTP34XbbGqipAeUWCCsJZA0vulgX2%2F69Snr80IaH8CHzcpIEp7LulYFSYtZy5gbazl4CtUKeALOo66LNqNArl21KpSQ%2Bf4JjSwXVmtdwwADfz%2BL56UgJZZaWRI57Ew3PH5ywY6pgFjn8hh9H%2BOuPVsrXMtBPeWsl98XIZ84vZoMOZ2ei9%2FTfuqQtF3Z5zgTDmG4ebIcYgNBdKkMe9nRz3W4iGmXY9YcRyUMWk%2FOrs6y5t8MXf5RWMoCGBFKSR3ZT5P0OPps8NjP2i44IG2P3Gyxl%2BuAhyBz6CdVEe4WExg35UlhkGZA1pF0yGFJft0DRRHJXjR%2BXwVlFzRwmk30iWewT3UUm%2BMApl0c%2Fz9&X-Amz-Signature=1fd6c7522c594169f048172fffac2fd8c253c94cd0ef939fee333062f1b11858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


