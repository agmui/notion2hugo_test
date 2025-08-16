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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=c0301fb8c75b4126b4196c596dcfcad0510f255146de8c070537a36fc8ec3f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=a0837de353764514346f6a781967fa06ac5569d134252884d31b470cf5621bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=4a84c1e91bc5aaef407af78fe279586d73d888b2829f45bf35b65b65d0e206a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=b86d3ef299603f92af9c20a41f52fa2ed062c00c2e34d26c50a886ff8014e310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=8da277d94b60d8b1f3e923d55716cf8e87bbfca57b57cba7c43377a9c1d47cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=7650e4284ec83134bbe83f0ed243ecddca93db13a9ecffc710a306b66da0bd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=9ba0ccf052289a7d2f8fe3c480f115dbd08ded4b4f8e6e9f7b0de64f46304c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=15929072589074e62f8331600d7de10d5e3aa458fc8886d4fb91c94c95d5b836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=7707ce8b68fdd10ce162edab754b08df4dc4a7d71022f2184a52157d16ae3be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=48c0d65f9cc50d68cbfb37b9e3e6870d1dc747648df46bf47648bf00bf9d30a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNBF5DN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCaveB7cTcbbkZBsMxJHh72XqKvYECI9RvePygzBpyXXAIgF3hse7IdT5bLOsaJwFg5qZYxxkIu%2FTjI%2FzRjOqxBRHgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFbstUs%2F%2FBTC3zVvNircAxjTucul2Jm%2Ftd2vzoUy%2B%2Bs8sYLj74cc3Oe9hSsaL9J2PANfhbvEwyngYeKkDp%2BZHRmbHx%2B9S8GDWjyPRbFLngAmpL16M9w4HOsedXMSNhX0Oj9jfXIMGv0ibO9KiiCxWAk7iLhV5G3i%2F12M%2Be8VmRCjmqqdaTArc5uD3zcGHo%2FwdVQ3miCmgmZqmbo4jK9oas8J58%2FGdldTNf2dmnPMxGIG4VyvFExxzKndtZYAfKLVhIwVAKrwJ4%2FQ79s8Ov6KYGaFz6axsSSeWIYk%2BXeV17oNu%2F3IvWTRq9OvBIAUTR%2F2rhv4D%2FQj%2B9rHkaa5h8OYj%2FO9Q80BV2M9MPXy%2BdN%2FCkFb1mCdwpj0OGtNHRpvHqjIpHtoUBZmPOl7het58U5peMzXf6PgZMo4%2FU4zEYXvua58dhRnYXjGeeWv0gLm4JQbrIXQYXQkGC83My7ydk6zqQCaURQOFuNKLGh1OjOg7Ob1r23BrNbpGpTaPbfMNxCReomn3chYpyRWK3NNmoDTTwTw4wRvg13xczmTg%2Bkfo%2BLC73OiN4mgW6O27cPEMLCW6wbxTG2M6PMzaSp1BJijV6O%2FDLCb6rq9iVGEl8Yaiej%2Bcib11ezoTe5PGmvWRXFm4%2Fx2zlnbnsJFp3jaMJ6LgMUGOqUBA%2Fg2jCk0MTZ0Z7Q9SRhpBiPN5NJN1iZlsxQ0T0g%2FaC43Rw4cDpR5%2Fz%2Bps1RUABlzTOGCKa1wIR%2Foce%2FnKiqixfniuuepa6LWi9WT8BbKC2%2BmkwNjumq6yjSA8vgxUOkb9B7rXEp1lvmNoqwRT7ykgrZ2s0lXObIiJydWxgHCJD7BDnf7gK9gNBxoi%2BNj6S%2FgxLYjCFP9N0WeG01HPVC6036llCvq&X-Amz-Signature=0c55a96989a9d2a8aa4debb8f46af897b14032c11879a1deae570472ef356969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMYWPCGE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGWOtZ5hcel0ybvPEBUEQAy%2B6t4UL5H6%2Bygp8YPFJa%2FoAiAR9%2BxNxmRzYkQ%2BOVMVeeMXBh2vqA1O%2FWPWNbHbN8KOpir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMyH45tjYvcZVtdGnrKtwDKrS%2BFZe2eJvXgh0xZWp5Eiht975VqD63aM5jxvh4ikgNLi6bCdK3FII%2FGsnzpHnJY%2BidBmd%2FV72%2BKSXmHyN%2BiEMuAwY9M5X2XCf1xmdk9SgtcFqqYS3olQkinQ%2By6UtRGa5Dd5YzcS1e5lMJ%2Bpu34FmjoOurY6GJAweSFPDj4rOLLfAbeJUM3C46DwZZPteemjgL37XhAOIUHwbnLTlJ6Zz5YgQtd%2B6Fe%2FDSvpU3gMv7EeQNEBXW%2FXgJt52dLN5tr60KaMtRmVdznyOnMEdDgdABGsSp79Qab0PLeMAUm3Uz6iefA2naVmU9gTj4Nga%2FFc388T544WPL5XSN%2BxJkzNy5%2B6dA%2FSF22Z5pPRB8FHWm7DRZ9ntnXI1PYST5HTXPl9ZnoobsW9E77O8z4j7%2FWyzu5O5XFiytnhjZIxVVyYtPl6zZwh%2F2jNEPDEjWtYL7V335KnpRJ3Or1efqhzEQwb%2BmQ%2FQt8Q%2FfvxYGEHTI8DzThdenHHq%2FGnX1KRftW7SmTRXX1cO83Qcre50qZyvApxmqcIpkLa%2BA1j5KXV1ZuapCCZqk6ot5k2VBV6ecPixeQiU4nkpBuA9pBy0BTwpted9QsedPlujtsX663TSX2BBul1cHgPvD4faonl4wxYqAxQY6pgGetE%2Bk%2FPeASfJjv8Z9rsOnAnx8w4JNIQu6hGzvmNANDVKbMeIMr5KM1%2FaUKThi1HMKUBDTlI9sgzKGqWalqyLvbNh1tf4Y%2FNSHdo5jL%2Bo%2FDhgxABAsKyXs26dQ2o738w1L7dllDDD2oJ4q3HVD0FYtK0rqzmNr7oBg0DOYz8XaYsSfAVELTvYmUK4vwxKlPv4Ql4oQE0g%2BpVwK1TN9teouk%2BlhMZUf&X-Amz-Signature=d429766a107319145ac8c4edd6a52772da7d7895faca14ccc67360cda7172c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NLMNSF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDp8s4JggJx7avaX9z5viaGqmRobscXLj1DxwzteXgKnQIgXaK6HLIgs8RPZf0pAFd6K%2BDIfw%2B5sQkZMRXKpO5MLSoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOw7rbH%2BGkHWbpxsQCrcA64wn%2FeCiPkcn%2BTka%2BNet1%2BPQo57L5Rf1yFFGPeBv2ojFeaGllUtGt4v%2BW3LJLCyhyUghg68vhpS8hi46PjRotwwKcBaO2Wt0sHOfC3226or9TH5Dp1oCqoJC3tGtmVABmcqRGNmHe5zSjlyF6RBIzQeYk0V8eaPxzehk2gKHHHEc9nV0cgJ8L5062qoUFVcJhttfCtkkoq1OiAfDGzar4coKkAcBEKyFbutF2e3r%2F43raC%2FUC%2FXymz%2Fo5yBXLb%2Bc5K7iRk1tgW7Y6CaInX%2FTElB46Z2iRpgThzWJv05NkkKD9okJbw8xfAwysOagRDXLmLP1mQFF9r60kfgQIEB%2BIUJSLnPxbIwEWZy%2BKtTAsbXxqotmnLg%2BZTa2AFH1RBE3jYkYIy%2BUbeMU5%2B8o818xYvQaEmuTGk8j7Cu%2B5h1sQeDjR4TM7vOJi1dELk9Q%2FH5w9jlouG%2FBsWOYRcCCMsD0rY4T%2BvpSgG%2F2UbYTj%2FfoMKzBwM2INY8jGVMp3AvyWOH7Y%2BMmb%2B870f5NfRRAkwqSDevSc97gEnTe0YrRaYmV4bVCrd59j%2Bk8Bh7lJd1spknnq0Vi8Lvugj3OtLjB2%2FixwNn9Ndbbi7bJPSQXEvvcTweWMt4CEU2%2BWk3jMl%2BMNqKgMUGOqUBGaepVcfUg92J%2FzC03R%2BBYen3FtzUFHF6AsYodhqxkwJxIFGHAKrYcKgDXUdb6PlWrnCv68fwp%2B7kQFb%2Bwn0FwU2da1lUjrdRQthZ9YY5YGNf4FmQ0rLgtEZQ8zy9ArbbTWDmJoVjThVA%2FC9ksJatbyeFW5Vq86WKsa5uqmYTFXjtfkW%2FVkH3iqcLnNCaHpj49fmdPfo05U5ErIfYhh9vhesG2cPA&X-Amz-Signature=06568a08d71eca523db98da7532820be15670d38404ee4bfea5cfab5c89c5a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=4351b8c1bb94fcba276762d452d305e7f9dbae37075144e92076b01f6e9c048c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSUHRZQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEbV0%2FjL3FCK27%2Bj%2BNQM%2FGCLHQdfLjfqm9V397nqHLkUAiEA9yY39MQ2HEizQs2wQIC8NNP2%2BkmXTO%2B0Qa6Koci8ZgQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOM3og2wXWoQKN8ziircA8DHCSigfEZEMcZ5F6iYL5QHXShSvW3gt1uI7ODpkpbiASeTor04HDFNt7fxO%2FeVrqwDyjhdNmq60JCso%2FPuCO9cauFrFpYE7E09dIAIsfKP9vYKGTLdW95atBJ3KNrD0tbk%2BbueMxVHS4JpKvUcDnYUErL%2BigAJ3%2BBNjXfzPMCN5bihV1dbB4aZ%2FjyfGGPqTp4VjetHU0kuwTRZzRIfJQ24hhRDrED9X5rN%2BQIWmNKV9%2BeDR2aa%2Fi0XIFzZn6UeWTNPTyNdllQVU5fj7mtE2skzmQhN5yxX5g161lV6B8syC8MCvjtH7Df%2Fl3dkjrPT3b9%2FogWhSc2%2BIA3xLI31a1w0ieaRCg9ZYJbRUs3SM4%2F%2BGnnKvnItrgbU5EDKh2Th54z5PuBXKCrCLF1zM9lB9LhxQ%2F7fgB%2FatnYW8%2BvOknvvmfE1%2B%2FJysJhn3wheVJr1W7o%2FJ0iDCLnGwYv1Avhj16BFP5ZkQXzHhJffW7b3T2jb9UXx6mdGeljV%2Bpa0jiZlLautuTYsNWl7KrLKbMUJuikTJMJqh5Gb%2F3l79GAp02IqsoK%2BqFxUncrcrRcrsAoiDU7%2BzVYVta9%2BxhbbtYlQlNb1V6wovlbrY%2BCqiM8aDjbvI6N871J37iSsvM1MMPmKgMUGOqUBaGQTzxeMmomM0D8dy9ze0sukL12tmvMSRh%2BS%2BXvJU26yjoVRoElixK14l5wlSFbHMjUMu1nWwUaKJwownRGk9ngEWp7Cx9cMqyAltuIgiX15j8tPmO2oCCOhvS%2FkUcWnO2tAj5IRkQK5Jg3hxtr%2Bt7Y9TGnXGrWOKLUiUu5y7WyzxFOWGRUFsZhs%2Fvd0kLIFCkt0XCtvBB1BUKV3YVBXQ1nfwtIf&X-Amz-Signature=ab2fb2694f203b5f7f1a6d2cd9defc79cc5ce5b1260d65556f1b10faa2153be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=e7590433885edb49e9da6e4da7690db905aa065cb30bf04fa0768b18199cf804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW74662X%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFspdF%2B13drXH6%2FjXLMZHSn9o%2FIIbqYrfLwpNfnAansBAiEAq3ohBmfjUXqsO6ulsjb2IzoaIn6D9mmRwZF5fGjE0RUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLS32O2gLj%2FZoMGP6ircA%2FUsPHp2BqgHEY5Whk5firV7xB3zhmzf0n2LVyWB4UK0oPM3eRBT1EoyStEa2J347P%2BvmUg7eOTI%2BgTn51s%2BsmRvX5Wk8riLItgNkCTWDOB8NfzFRSVl5B9yQRG0EqMDZeMNtyrhlLBZhcwtOlf0OCbvcpOPd%2Fn%2F3g17OvvqO7XmUgw4P7sjPW8L86%2FonbZLhjq86P6hY4Y5z0DDMLaiQdRzP%2FYQPqq%2FWkA%2BpZphXtRowCIQSfsJC9moOx0bnOTSVAVP6vaBjt5PpvyopUZQ7F5Bay1xlqPqTQTQ8rXZokkJuoQGWbdWIeXZk5tfejM1M2WHxvmGR%2FLQAxFdVpofIKvxY3joazw4y2F7vPfzir3tkWvB%2FxWZHI%2F9JxzHjOCHjBQig2UIARe6mMW3aJ%2FQQYoxT3FO9livMRc1y4ndnz26DaaKlvJbj04AlsGP06VrEVrNRIrtVgQS8VuKEGitMmqqhOYXq4iPoy6I4GECeva0zSbIvqKrsZg5GbVS%2FwK%2Bh5Imb3OQ17h9ZKPiwvmV56jhXVw%2Fduuf00EowEJqR%2F4pWvmRfDK5JxIe%2BgYSEExfqpSqTcKnPyQjTSJ0%2BRQMwuYnpX0w5tOcRJDVUf6TFblClmSQcSTwjfi0U5BCMIaLgMUGOqUB3mMAupfZGe1hhbrSy%2Ba3PfoWUBTDkF7GCsSgkejKR9Fl7ZIWXDDABcNw%2FuAf9EiS2POePvW%2FhLiPhTc%2BUdm6hLOdeh8Mqz4YTaCxlzjSpiTRzAXjX3nODH0VhQqQ6y%2F7BvwJ61NHHiL2fe1OMOP0eOAC1nj5%2BWhItBe4BjbUxSe%2B2pt1qrGtxrLI%2FeZmCDIeMmPQLxNBsguIrmiRLrjl4bEicrik&X-Amz-Signature=0a19ed9f5a7af85853b18d33d1d4e46df3d5011ce3b2883d6abe32027e23ff41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=d5b0675efd5098c890a6dde3d2680f975b97e5f300d0108a978e7f8c1178963c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYK7NUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIFtOgCk1s4Ij3vO2b69AuJ%2F7l9FuU%2FbdzzB6Hg3lPTjVAiEAwM5epgsVoxKlPobImYCuNUSFibkg8jHH3QwNxwL3G9Aq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDGQ20xBwLV%2BTKSdj9CrcA55CVDpfPrda8EHd76uhxa1sDNG13kcFTq41kkD23EwTAubXRRW%2FuYNJD%2BwZRqIEdxvGkWh%2FwmgnSNnT5TbUB9ksHAaMbqhB%2BnhFI97TBYh0aniHethcd%2BuONXEn0bWpT6irfc%2FxwqwEHDlOcHO64WTEL2MSOR2e6X%2Fjpcn6PBEr%2BUAlSfJq%2FxSpyeR7stOFYQy%2Binx5t0xjhRBJTyVKDnYrR59Zhmq07A%2BU7bigWkZduen6yaYPAiErzV2nk8eCRryABiVXILIlHvofjwoXdl%2BzJfVzsul3v8OzIRRZzOrgwFfXBYzJmEsuW%2FCuquu5Yh6Ofexag1hMqS2xN0I3iiDbc73XnhCi3CHhZavPo00rdda2nIBrsDz0ufSL0%2BiW1dbubNshW9peS%2BzVjlZsqb55hjv9SvHYQ9hlcrN8lS2FULvSZ7%2BwycUH9haA17Rcjqpu55O5rciLrGHGsYWITR6z7ZNc45SzTVd6Jo%2BVIbwiq63%2BJTqpgDfPcPBk3NTzS0HE%2BEvZ9F9eA6wOSKYHpTDCrLsgCnpBohBQ4cjUlN53GQr5QqX3pibOPYZnqBkDWiCKHhprhiUOGOP6emZ6nuqLTm6ZGBqKTXFgpBovsCBvnASv6MDvjedYdrZZMOSKgMUGOqUBHbCAWbSDFL74tNrpjpyOoOCpaFdjS2BSLoEx1IW4Kv5CwGPU7Wqfu6R%2F8%2FURT6vK22sxKfWpXou5REZvxWIcrm16YO1PD1ndpCmtecnPVXMGTjNDW89jFVnYa7VtViqKrrDB5baZ8qJBUcnZ4ToTEDtHquSCes8GJBWrUrKe0qb073XyAyMhN25HId7q9OCXzv7QGcjH0QXmopojCCMlLSV%2BAGQm&X-Amz-Signature=2887e583242ee4d7fbd87a81d21dada5733d1c6aea2833478e1682613fd8127b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=54e76431604e85b5158005b3071f282904042e60ec190e88b71262b7edc4dcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H4A6TAJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIF1VvRdXUmTKXteboYGbOTPIIaiLp4qzvquW2rB0qdZ8AiEA2lxYqKGudL06OAi%2FnN3eWeYXcQE2cAsp%2Bu0qicgxt74q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDClwhLLr0kH0j38piircA%2FBsxvM2VxRyJczS6dqgcEhjjM13xjpd01Qzd2VMYWaRvSIny5RKiJRivUHHjhpPGOa6l19CwM1VOluK4G8eME5%2BkURXzXBVaVnqMCeQDgbNWu5Kkn9D92nd5hhCCasVzw0chgwK0SB9epSQWxjlvxqGW8hdItZaul%2FXBaP3my2130Wr5sZUvNcA08EVindovTQ7xUVK%2BKsMB2d6%2FnWC2M4s%2Fs7qhYrIR6OWreh%2F0K65lPCeaqmaPDeAKMSU1OA99T%2B1%2BeXmGRC1dlJ%2F57eWRzO5rnhde3KJL3Dnb3hc9YGLucoeXEqNGDi1Sdof4LUHmwsXRSH36A%2Fj6PTOV35y7ohdIFaNcKIr4y0NgZi3tVHjan2Jsg1dY1fXDqiO5%2Fx%2BWzuIQ4vow9frlHGeEtBW%2FsXADTyPSBmgOYJQvi9MjJJCdq1crpIhmnN2cWsdLl1FmYUB3t0k3nO3lfaPtsC9awndLwqdoQ%2FsESNrLaiHABK7kJvizPjrv0uJyO54sfb913Hnv6ZltTr9R4uhq46LYmKdyHR%2BG%2FxvahdzlgCBuDyW08uIWzbbLlAjjl%2FN36qb2A6nlF%2B%2B9Nr7eoeSrlXA2oeurEHWpEWTLkHdwB6k%2B4pE8Movw3n92rW%2B6AWwMJqLgMUGOqUBp%2Fj0lLv7tScCgeGrT89rSgHSQgCc7OhIZqkfuuxtXI6udxziTpVVC0vu635XE6G3Mmg0PcfDNykD0xH3Dv%2BzfUJZO6siy8uos5pFDDEOcUZQmYNIs1FpXaHxwGGpq8dJRwVEnEe7Gl1RFiaayRN73iEpzgxRKVT1oJytV0p5%2B29I5WzFQ1So%2BVzGNkzSSKr5vvbIktk69tTE56i12uWEZjUV8kIF&X-Amz-Signature=ffedc0b9b5d46bba956181ef8bfeada34ea40c30c7d70c6235010cbbb04ac9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYOUTWQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD19wOKZTWbCd5n%2BLl7JljIaIPLGW8I4rjQ%2F3MxRz6kCwIgfSiMsNRZYECbHO%2BZZonryqT2ocPIengHEnGax%2FFhMHkq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCVTytprT1G%2Bl9vztircA4%2BRTE7%2BQtNnOwCcWdEuCjblvbzNtdaLsAVTqYXMk7zsnoc6kIRP9V7tPMqzjJVZxnyhx1J%2F6uDIzYxbwj17jYvCODnYsnuXMVvXY0wMPDwmJ7NkLCCCxIrdBXKpG0sdwyW0tZCI7DsE7UdKl9fD%2BB2%2BCG2jK6dPaDHjytQdIEsmHmzldV27kUyy47gYQGcD2nWyYdRFKrhKSTKLF6qDs4TZGrd%2FDPq33gmBpm%2FcSKXUy%2Bp7yU7SXVHTNsIKVMOnT2lzfvCivTRJMvp616pJuszZ4kAj%2Fj0g1OcnxSocQith2So2U1rcKW5cteiRGd%2FmnzLfI6c8NgkUe0xOzSa2RcwX20fTJ0kytzLRCo5ZoE8ci1w52rnn7kr1FZFSJIcsbeRin%2BPp8jjUndtJ7e9A7Yxhqr6ZNyun%2BaI8w7Ui3hKbppP59YJSmIIgGOLYTzPlIQ9jrQsTAtawllB3bmrfLt0OM7oA%2B62oVUgME31o9CFm43w4TkEZROqphPfwl%2BmoG6rrrDLw2IAoy3RiJoMCOZBCGf2SkTK5GD2%2FtB1q67ZhKZNj5FW%2BqNMVJccdD1Jwf9Xj76uxKKlGyv%2BKeqWC8KCkpuLsyZOg4tNg3aAxhvQ8EgD3OzdG7FgxgASPMLqKgMUGOqUB5p1e6EiQCNhHEazJW%2BgKW%2BeJH7kZCc0FETqhu%2BZ6mp8aXh3Bt6ZXy%2FY8crTVuEMTc6WZ8dJkk5fyyk87PK9ol1gESSEr3V4K35keOiUjD4sVCh3qb8J4ZiPHx2Ie1xgbnK4lrqXs3Dx7KCBQfreoAesb4AnFxVNMZ11PUvBS8kSIBkb%2BoMTvbnSy%2Fa3dgO53dSYhq1rFDo9TuaKl1IghrfTXo1of&X-Amz-Signature=fc129dcd0625de5eba1f5a4f4e5797071ce497cbeadd43c58517beceb15c5b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ264O2M%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAUgSzpKCoUIcK%2Bq7JQT4DH%2Fgk7crluuf9aA5rFPaVxSAiA9xoClU3QhOfjKSvy2gfEcNLu7pmwZnWHKFRXc32UFGyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8ESAzOiCx3hHPUk9KtwDHCJVRnAB79DQWqGIhOjR%2FlMCzzDOQsoMGbquMJw4gO1iTqFVJ3WdLPvoBv5aUiBKiwGFMyd3kzN4eMVZWtLMKbY62XgtApeemRwV8IE%2BvC1JJvRcaUFrivyNlPeZXCZnT%2FrY8CzkgkpG%2FYoUAW%2BYsQXxWcHY8FxPnwuJX%2B22ahamd%2Fvz75Yzh1Iu9zAGcNg%2F4RMTOIEnhGAJWkbfQFQGzyBuiAw5WsT3v5NYQlZKceEtUlTzLgsqPcHmLaJ3I1IWekEWzQdzG6%2F04dFHR5z89f%2Bc2nBYjCfH7JloT8l8n4LMdXNQcAkF%2BFogNJ4yXtcGOtHwUa4wlNwCVKtE1clPXKflYeaNhFWzY%2FP42fwJZIb4K9SLg9%2FAG1nfavTMbddfuwB7aRvdrh6GEUpZrt8Em0jDh93qOwWPVYgKZN582wjx3lxsWqPL7a1u%2BJAqhyU%2FyBZS7hwMkQZcY6WK3eajjZzjG%2FtDNR4pMXjZUYuhoU14HS%2FXrcSinFkRwyuHMI3KO3JSufQQwLoGZFxyacmneXys2E0Xi57pCVBm%2Fz0710wuy9nWuop226ftT7SqwvKsQsyH9F2saGg7Ue%2FYUuRrJXe0Yrge7hdiojVzs%2F%2B%2BjlSQEAlMKrBSUs%2Fdsegw94qAxQY6pgEUqsRnrwzJ0I49s%2FFHh8s0bvhbnzm%2B4hwwjFn%2FJLqoevrTOk9nvuTxZPkeGbudNiJLZ15Jz5LaZCzoLhGhbNmGP124Q5ZIyIS1gvdd%2BeQN37rYShzjBWcS4Y0Ig5zL1dqU6n7NHD0ZQSpHGz2k7eMOH4QGoxhfxfmU9FBP3ofG8SP%2FO3j3oxqUJb9OSYcEmlm6dd6tTt7Px50jvBqrBo4yjjaSDHJB&X-Amz-Signature=1a815c7519dc7bb0d6636cfd7a874eacbf40ffbb8b65c628d3ce985461638cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3CD6OS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBxwx5ayEjKOirBbBQn7jdUkQeq0SV1y5iT70Ud9nt2JAiEAwBQAZGekgEJW7RKMCumU7IA1EAFBFk%2FtrOwHRtfqfQUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDE0KrmhkrcsTmcZxBSrcA794gaGho7nnY2XIHt4P%2BLm77AMr1M9SKD2jCoQcOTMOxgHiJgHYQ7JlWswhh5%2BHvNulCYvXKijxLZJCqYmxAZ4tjl5Jnc7AqnNUcu%2BGA8tGJ2hNtHUjsFOu2rHkJsiSwpGH%2FSZG9WNaEThohFVmDH6ySVWB4hQYKEGv9JfwJr9G7Ld20ux3asjXX79nMlCI9QGQ0Ju7HUzXgV2xNJ3OF2tycV1dnBHQJxjq53%2BkzwaUsBmvmH9ZH5YThBgrx7bV1SEdGZRD2Hef%2BxYlFDsjj3enGFVnkrp5A3FT5Xm9PUcC7ANeGtFxU1YgQ21Ri%2BBSmalo6PdazBQtLFimDRlAI%2FQn3Lo0g%2FO0HVZ2tL6oB%2B1qubmsWO1Ci3vbSnP0gO2xl5TbiSnh0LUSykocbeExd0XqPEcWVLcwQ66iiK2ubvchVzjPnt2YwzOcgf0XkboeXruIa6avq4ZxNO%2FIEhMyF1z1CEx6RjSIf45ZpPFzTPOjhSRfMCrH10Ej%2BgxgaWE1u2Eh0gUWpr50aLfEAV2aJiXfsktaUXD8sDP2b%2FEluj3qEZlOJ2SR%2BnIYiI2w%2FwqB%2BBb%2FKdItiHuoJ7JlXv2X7p4VtPEgyG9zb%2F%2BKqHkRwdx%2FF0Bg5z36wftkr29pMI6LgMUGOqUB7fVA%2FyOTxscgB1upxgEcaqZmQXqePP4MFBAU6Ilo8pBcdOIGhW78DctrFAF7bWzZH449u23cGML7QmPhsb7KxsyfQ8HYol8zSQW9RxXlz0jxAlt5Pj7hNHhSnmuk%2Bu4MCd53gg7t99XTPgxzOqJuysWCh%2BSDlccr8lO5dvizeEgj6ywzQXu0j%2B4DGrLnWKdRW4%2B7lW3kJvDPI4zxuFCAIT9QZtRr&X-Amz-Signature=592559ed72f9b9a2da95f1e7cc77cf8b97b733ff9dfacf0cdb0320f4fb31f356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJVKKNH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDSuR%2FZ%2BQsgP%2FufhIsj1hDPycMEXucU2SUye%2B0ZSFDTfgIhAP2gOsSDXRtb3L5e%2FYZMCIkZ%2BbNHe%2BkfR8OdmZF8%2FjgGKv8DCG0QABoMNjM3NDIzMTgzODA1IgwLywjgmiN0klzq2o8q3ANfEktxVLk%2BAq541hQDzpLhXckvKAoCXaIyBv01c8Zh1CR%2FTCRzpYLFClNP8IYdR%2B4qDTncah1E%2Bnms9Hd%2FAjkMMvOpY6jbPnsH%2Fy4KE2QqNaZaeyBH9mGR2JqALSHL8lRo9Wm67qPCzQ99HMNF0x1RH1SJ69kX7Ll%2F6bHaJH6yFw%2Fnv8ohfPHXL%2FpWK78%2BkCw3fK%2BAQUT5mWhkR4sqrVjEApnkJKTxqsIhKHeig1a8WSvpjHZMxl0MvkXh%2FnrnuKklb560SxNIO9quulbaNkjFl8BJEsEOzad%2BGu%2BSCF1oK1lCELcH9BfLNaZtOZT3VkJGgaIc5z2nzrvouk5i9BtF8DnQnv%2FpE%2FyR0nZZ5INOEWhZ5OtEzrdTv%2BLOG2Pt9gDqVZZAoS7dBVvrTpi6J9c2P%2FEpYr4iK7YJBUQ1wVYkodqF2yEMGfN9aIV0a1cEnpC5YLO%2BeZ%2Fd%2BQiMBS3p27MzJmSzyAk197VEEpXFz9QHLggcVFCL7vyCE3DYXxYr6y7kZ2eWFExdT%2FFxT3qHjt0329IvMh9%2FtD6UdXogiONh92d1TZa1IjeRGtZk9J0OonB3Z1XKQjVJw35RRHpB2GO44qwmSSzoVtrfasTr4KsLq7uGIpAzfq5kpImMWzC6i4DFBjqkAUW6uyWL2PV3bKMLJcDBfF4aEUBQXOFeNJOuNSLf6hfj4y9Q0hd%2FRzV8nvb5gSSAMtE5cwRn%2BECal2OMJnk7hUSTtDzT5E%2FKOomz%2Ft7UCeTyUo8lGBrJvmfbBhKtvZyi49%2B7TqJY8WNZa4IMGdyaaROijFAURki%2BRwhnpqtGFpDOB2L7y%2Fr2CN0KAia0ORDtytP0%2BcnbVbGvTXZ0DxP9uUjIDgee&X-Amz-Signature=91624517f74ef35fbcc09bbe50ecc35f1a8cc257948cda58075521be7ce5497d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=e53cb378d69dfe5b46d73a5797166c5f5bb8010c67a17588820f871373c690c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODLFSAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHD7PPdl%2BdnGjnvF51pDqsFqj2OjMAVK6QX82ZeFUgVCAiEAmW9zluQ5xUcc0aNzsvPqxj%2BW12TnLJD%2Br7E6KLb%2FjgIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBCm6SmFLV6beSX4vSrcA%2B%2FFGx6D0TvzRXgnfNBEVY4zl9vyu6a4XRESO4lgVAox4B%2BOByDxS7JB5EwWBN8Fw4ZkCt2vhQmxCQ4wIqYxE9egKAqWMOhR6j4vDLI37xTQG36wFPDXjaXrNi0mFynGU%2Bsw4ec5qCKFQ11lw6YjtzWRKJ5bXX2voj%2BV1poDA%2BrQcGik3uCQB0Ib2CRegW9fgtKrTSX5A7%2BOOzU59G3bVZAX9sqJWtJUonvvaJSvCeMSO2LlEu9zsgHj2k6OSGmjveboZLT2xBJxvSaWS3A1rnISSkgRLq%2BEvmSTdCyNMRQjEjH6VAhfO8xIEi%2FNN5irQsIucBP5j%2F1FJQvHqeIFFvI7JQ88vcPq2buY2B1s69B%2BTnU1lTCEy1DqaT5ydseP8A8%2BkUc7EdMvoUNOGmdtOIlFJbn9cvU%2FwzLRxqosTIOEMXvrFC3v5HtwpLMxh848WAQOc83%2BNjyO8gvwJr4ktQbUl329%2FSjFGo6r5uOrFeCByZSgy6QdqMr9CnpvbRvIjoNjVqBspQ1obFX56fU5KgHM0qsbeybRrIht8afqn0VtUBxALLYFXviv7X18HQUMIKrjIc%2FxYQauScIa1%2Bi3XCWlkmTJaM29NZPCPL5jxcyEaVYex4uc5AekblMuMMOKgMUGOqUB9IwDPV1Rojvtt1TijdEUeOqGIm2Sj63QGpHjNZxU993r77oHOswbhTaT5hkzRRc8bQ4bsRCDd54vUe8tTGwEXQ%2BaZ7nr6DRHulFSIbh3apvsmq9h6R9jm0%2BUWpPnFvJDqgVq5GdSTmPOyisYD91iOxovJ6my9YkVO0uBDO%2FBVkWwFbiSMp%2FdTvWABE9t6vtvImSaZTsl55U6kcLsjUgbHOgwhe6D&X-Amz-Signature=b3b53a0ff863c33aeea1dbcc206824aa0f5e3cff92e60eedb15f42e8c354cbc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=ee9ccfcdba9ace57dcb952e96b743e68cebe73eaf94b1506b3c8582150df602b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=bd71b96b6be78d7d2795b1b5ea6cf68618c37014b4ea456e6adfeb871bd53040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=113a4422d3fb2a3106730d60d521b41b561aba0da47fc458505dc4c63d5fa5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=ad9bbc498c0871eb0e26892c44bd1cc2d41b75fad13ff84e20dc919ea490f8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=f8be171d2a49e9b5960031536b7d1c09e70a06688989e1b20e264531f11de965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=3c9d3e1daa18299d29ef1223ee0d3d060d6e306692713a99374cc7e29725ecc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=113a4422d3fb2a3106730d60d521b41b561aba0da47fc458505dc4c63d5fa5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=9730745972ac6b15c571cc9327982bed4790f4e0e1b0bc738ec828e6f2d9fb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=b6f420163c5926b5f6df1749fe07a9301dc5680b529796fc71a0368db026d910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3YF5AJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICrR5d7NGb1ayvTMDIIsUF8jFji49nn%2FOowFNlUwlTt1AiEA8N1htwfOW%2F0KcmejDVzHh6dDnQkNg6WbmveJxefAiIYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPJqQEU3Ks3rXkjVwCrcAx3LblVshdj0JnhRyoBxUmhPSrRs6zv6le1n4PKdurbS63i%2B32309j6S6DyHFUnureeHmjWVUDSU2p2Vj1f2pod40hI2qyeIsGT0m%2BjWsLvev4VSuvsbGs5bNce8oJX98Aix1Gc7sMRX5cqjnE9e6eCq2KlZiIvgYmDRg2L0w7XILAA8zpvlv6fjNNeVxZaCe5S8YEuL13h9Nv%2FfeuJRu7fSkWOmiXGuAEXJS66UUOSzZNcvvEGghjEY7q1v66I1ucArTPKb5wF%2BIS%2FLSNJ82mQXxCy%2Fb02ytSjaeW6fgU8FfZTTWlm6Oc0jrEnQoi8xyBAefEK4fraVZx5igN1nr1OihBpR2J4Jz02sgCSfddGRzZ2v7GdwQTqAM%2FailKDt27Bp%2FHnLQGqjT7OvjwlSXn83vUJeqdHaCLSU26YqjcEviChTMbaFlTSHC3aj2COjPMFU4SolywaI0x0aHN34uyfgA7jAmjnJe5JWGBHGvRvZfV7823HXitxXXRK1AWAWjeSvmksnw9jLT4nTc5J02glzC5j7SPfMDL9cO04wVApOx4PFl72oUwELlZt1UwKulXctOHzkYjQltZ%2FAPOOfzlEVMqgGaQ1cvxSBM7gQwtLrk8GkDWas9uvqojiTMNeKgMUGOqUBq62aamEvWvH8CBPWAZKSt4DeCvarSvoChVbY67N2HsDsQIMeIThV9JLtHV9jumZx9ALDpfOvubFT3KVzUia5deGKVBgfazH8ioOF8l1e5h25BSdzz1ZQYNO0nBkN37kk7HMzkZ4NLxlUkWRbDAOvzwWEYyRyTqdM19qZ4vyo%2F0R3K6Exb9eLj%2FCpLGHBGtm989McDvTZ1N22xXDFADpt2hvMosoB&X-Amz-Signature=acca7ce65a01d072d59f1a3a0f95573f024b601c059834d6437914b29f221f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
