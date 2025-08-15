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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=0321345827fdc9222bff42c5d715dc635409f1ce29ce47e488f47f1ee0947e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=871b2790c665cf295f9b005233451ac9d594e003498020106985843e66eb0696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=ff1baf10515b9aa28a6141899b4ed743b3e063ad66bbc8299c3ba8df6bacc77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=d5a7f04c6479ddccc005572b1b073ad947a28edbf1c72470b6e18c37c03a69e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=f1c912350c74e3e44f56098635822cc4d58ffcd1c919ef9f6837366271cfbdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=597de1f0ef91595e434dd74eafe8359e5415c22ecda00ca6b11d4d5a603fb4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=e7a36cbae46958324a5f3f6693302373dd7e5c8b0519f376705f93e19aa0ae3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=5e33192bddad0a2b1d70fe33907dace8325bdce786534b3aa5b0a6384be8ba6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=49e35f410986224d807e294c3c7b53eb0ef9fd89b89fa2f5228f61f019d4bfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=55bd2a4ae1a4984ccf31cbd4c0941fbf756deff1710ab490d8fd1845898779fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSM6TTL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFsgnE1uSc5%2B7PUAOe2dsLJPcaTkq0UHdI7S42PxFfgZAiEA6QQSeI6RGi0qunDCK9y%2BrJxH%2BChBohc0BkSR%2BWsV6J0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDND1Y3DSIJDWXBheWircA54LSW7J35EWpK6ViZndKAg5wxGpo3h51K8B2CkP74sJ28X7sCHdjRaHC2dKdW7na8u4WzrH%2B0b3bZ%2FAW%2FyknC8E4aNEVlMta%2BAwLTdNVfV0IOPHS76dXcTDQtTsHl5jvx7US2g5N0Pu19MU8lbGNrkWEH5uyiLzCNtLGj6yblHmPL77o8y77xO4h8494FHcrFk4phZzH2ZjPvjzo4CezjcIXzqNlTubRLo09VFP1g%2FlCarQ1J5wNngk7eN5i8A3cXobdqu6cMdFIQgqA1r0XnF54%2BlXYI5FR9T7eicC3Itz5fonA0LTeGwXhpMzOE92FvwVO%2BiOdA5D9g4%2Fe%2BBzwu1v9ub8tx3kg0L6GLPUZBNk9bm0pckNc5NOFo19zMvqKEFS4ufDlSnxMkNEuCwb6NNpJVR57rytnTX%2Bt7J3rUis7yGpW7VUYnAUppWuOaoAEjFQc9jt9LMCQVnygC6NSs%2BGk4o3mlUJROIkVN0K4H0qO5GiCwDefsn7%2F%2BukX7UKX6qNkTL%2BNzn0EPcqlhrGzBt%2FMro8pNnJv4Ag8ynXLUnNN2%2FTf%2BLl1Z31uvZE61ef2kiZaJgEl%2F8TX1y3W%2FzOH5PgQN0qzi5lal1unbnkHsGrfUYA9YHtJhwVb1jlMPa2%2FMQGOqUBLpkKhgD1SH0ZgTC5Kfx5JjvzDgPSEWViGM6U77tNc7%2FSpTTIAxmVEEX7igKK%2FKt8mdn0BiUFi%2F0ACeV0Cz1uoNh2wR3FpHHRKBb3l%2FbokKCIbXOqCo5%2FQ39764HJ5xg4NUXxxNVUZvkOf%2BHpxHwR74QRfgHbrdRhVd%2F7eyJ7u%2FWCpvSM7hYVW2TxzzCqb%2Bi6pd2nG339d7miRRSFyTxxJPcTPso9&X-Amz-Signature=1c899b4046e7302bc23a681350f8f0d0f880729557391edd0e82ec30dcec9041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOJJ2VU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDBLd9noGBDgetRjDZ9x0WBfvKC7xnpTa82eu5Njnu5WwIhAIBoGr5Q1u6epDJIlpuKZSkWY4lKDu3v9o77VT5t9iaFKv8DCF0QABoMNjM3NDIzMTgzODA1Igw2OojO7ToFtMwB7asq3AP5p35LjkC4DFs%2Fs1A6R%2BiPnhmhEreoxJ9rv1V0J7S19AiENKIPUM5TqRnaHBtdHHqlbMU1dasbzsGvbyFl251E9zcuxehVKEJfBHLG%2BKNuIdXahHyyuKkM%2F1fY3LWzCWVfxi3aj%2BacQw1y0Nb4XaXvdPfvicKvbk%2F7gmxtikbU6wV9TseHrRNkG1E9VKmSITNRsL%2BZbKmEVM5sza80I7rj8xiwyVhveMi9c7bT9C4iYtmOUHJgpfYKVMKyciofk10xkyBfjfmeja8hP6ok7VwV8eOL%2Bc3PPcyAqQgwCpICbA1nSYL6epIf%2BXvk2nySxbRJn90MZOYJ2wytoYoxXhz2eOE02783Pa7xrLJJtG5IJ0b%2BQ1qOo0Wbh6gwHa%2BNn5I7IMo9Pfvbi7rHX%2B4LEpZf05AEjwOmHLyVeD7zcfUWGaPNFhTHxASWUXZY6LuvMtNVjI5DionCz%2B9qcWfk%2BNp5%2FLf5JoVvKcleCzmeDEliU2hCtd4vhquF7yoqImnFT66tPj8OFaMjCpwBzhACeueHxiENHL6LRaggPpcwhPO7%2BvDJYftokz458JtyJq3VCGUbymiflRracaodF%2BbNm8gYALaEGtHU%2BIJeaNrYhyjiBqucvoyTwzLAL6mwKjCHt%2FzEBjqkAcTSMRbybB%2B6MuxWyCn2imJzPv5wHC25nFQql83CNIhrVz38J6lrEGo0bIO%2FWFbsyuMOOsiRWa3jkzJKiFIILLc2u4As6%2FmWQdhmsyGmLlZFVEwpszQFyypM01KoPYF9%2F3GptxbCxtO0Pgsc5kxDYD78pc00vWxytpVdCJR26NLrBp6saV1v%2FgdTZRI9sJnCF3GpGNQ8sYpz12RVifgt5AaLZcBK&X-Amz-Signature=65c23ba7ec27691e735f02f7a140ff92c0412b0e67d69b0b88c380deb3951cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5XYV2J%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCDhZavWOSmgT1yG8gW867Emv2Vyf6xkHJE1ngVqoF2GQIhAMY%2FS1XZFaFXpak8TJcU65gxvh9r5iFSbwBS7ppk5VuTKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMklTxC4fQDYjql%2FEq3AOxkLwzeApPRz5U5XFYMf%2FTsrrOqG0umQND4u7oJYQZl%2BDKnOw%2BnpqFaQZmtGjzVsDxQS20ZGpYmf2B%2F3qJABkVJp%2Fy2ZqQHZuvIC5HkFnOzHEqt0PD7zKxRQJY2Zw%2BJI3RmIZr9hJFnmeyndAOwgSJTn0iOYl6ufISOkgFtuFcQxPUXKP8H9Gsjvwh7rxk6tp%2B24%2BuzJCG9boESSz3Xug8xMXLGgBTsxy2jQwWcDl1SfKfDIt6hc2M153JDqK96Rs10%2FzvChDRfPmIKRw8gJCEoOa%2FtEwQ2yKc06XW7XaTHq7BXSoW%2BM5L6Nwi17FUSqMSMwQp9mhp4IvWbhT9Y3ehLOFjW4Dfncv%2BajR%2BRUZH4E8UVxET9R%2FYb2nLpTfiYyYeMR28Qtz23AXcx%2Fgrx9nkI8GGVz5%2Fq%2BQvXhLYdhNLuJyAHfaAJbDFz1NBKMK9kwjmWJuWz3O1xDC67et1NPshtsspn80EG%2FpJMxE9DqqzwTZYdlBYSB%2FL0qfg5SNkwPnhIasA16YQS%2FxZf89xFDbKUhdcmiAEXj9bhov67imML5ptmC%2Fj3C6QvxrVMy4G8rOM%2B%2FQ1WN7f33ILNNskzZusplQTC8DeyG3EPQOsvUVKRF8Wlox4L2O2uHVy6jCBt%2FzEBjqkAf0S5XKSKFDXVHPHW2f5GHBNepw6oEDE8yqrfF8q6TYyiEJvtTM2DjlGTZkL1I5tbIV6xme%2FTWPQ%2FHWxjlVTRltx6%2BZPaqkohjkij%2B1pyH8B7JSb3lE91A6%2BYTz%2F1sfOiOgYg6dLYQs88X5yoVzQoWjknBmMrB8JPB7KOJvp1q4ps4O2uSTMTOe9nsuqX8Pjb80rkcYAThM1EQGXs91k1VCcnZcE&X-Amz-Signature=b9234b20c46c3a7b6adf224ee321f9ed3bde2e29f5e9f95866f6ee5b75d7a479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=24ac5b966fc48350d585573ab46f30873cee843be68370a603d5224af2599d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNWVXC6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDC16ItItLVtMzYRoV%2BUXtmHdAX6c0qsLTF0dAVcotTZQIgHrT%2FqDlMGHls0kjhSDdi3zSmwCAEzUYycIZKbOtgWRAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOnUlxypOthmBh%2FG5SrcAxTJqRpURk1WEfOTl%2BULSBGOgw0w83aqhNVfc8axlAvEv9ndgqUDjV9Yj%2BCnMCLb8blMyndM%2FSWwqrafhEcgskjpyq0Ag5PkHqIRmmJ%2B7%2FwuA8jrb1lTkyqwMWtqYZi7H13p8u9w7fmg5JRRiPGKsmEHdDuPbGRtkBfy9ZjfTkB5y1bFZLTau3R5dp98t3BDSKcz%2BhZcWtfNbx7Ijjl%2BSSe60kPROwS0yxG5Sb0Ggr777ez5kIJSsj93QxtKBqikd1k7UreQ9sKWvFHyTExmcwkJylEQGGv9lKNfkcSb1AbQiSh072RR75DNHilac%2FBRiOPhJAXPN3SKRDtcNtk2L5aIl0b%2B7CqnqUppGvOaZmtLwjIqsLKqeRycXVrXcL0GIOcqrAM7MV%2B%2BwRGSpMR1lifVW5skHUGu0e5WGDRmWhqOxI4bOAsiVS%2F1zjIoW9HY81i15kfRRr9%2B4U0clXph1uAt2D4u2abyZx8WAS2qoOm9%2BRiIhyA10uPKJA6iYp6aGToVus058Ay8ygcjUCuStwSjOTGtQaQ3UWg3CPnDhktsIDygksQWRZTO7Qeq%2B8sGFHTIEHgu%2BczLzsbTU0G12bRLWe0ij0wk6LmYWHMMbHsiUnybSEI%2FrN8%2FGIqeMIi3%2FMQGOqUBhpNXuK%2FedW%2FWJ46kGTDj2%2ByaH4hnThYlrqeVNtJaOtqfE37trN6BHosxncRqfqPrbyXDFDYq%2F4EUIDJh0syQjRYsrc1l4%2FyoZB3Sv8uh%2F3vLr76SZ3SJ%2FMQu6BgU0bE%2BC1FinwE9bhrCP6EVcLNH3cQJDMF0qGNaUy9Z59RzZQwls7FrKfbqiGZBgfap3T8ahcmmLWOGos4Ero29TV6TqcclwT1%2F&X-Amz-Signature=3ed13ce33585ea87fd051ba914076446db21eaa571a32f7c09650a9c0b9ecc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=d11587afd1e19674f112c43a914d940218774de9d2f0efab9b83efeb48d1957b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKBFMM6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCgj7GUlWJFaX8%2BRBnjDQneyjEDAjR2hG3fPndpJFUKsQIgCwW%2Bo8lSnzyqrllwSfSPjH3BC6b6XIgjX1Ki6uV97%2Bsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDINI3u5FV3zxDm1g8ircA5eQhk%2BI00%2BvQlYUdG%2FEvfN2JGPBQg%2BpVQCvan%2BDRvxf8vu8Bjr5SpmQ0tBdLVjEVIYoBnaI5yNi11YoTsw%2FD1oYKG0eYP4ovgmRKrjA%2BxKI7ZQPNgH55huHIi3d4iJzlra2KUabf7SqhqChsA8SkF8BfLMkTh%2BOa8Beb6E2jovCm%2BbG9%2F59SpVJyzFvTJOlNJO4HehyqHlRZ19sj0jz9mW%2BnzSOhCVY8lrgZ09dYOWP0PzeEFBAfgjleX%2Ba2U1CpdKuATmUIrxajN8fVyzQg897FoYUFZsdYARoRSfzn7GVivoZ2gIgwsbsymeQRpv3Hj8GHCXfnnjTDfjMVMO8vlaIDP0NR7%2Bb%2F1bCn3ZsTuS8Z1c6losVIVawkyKSHZaWgvh%2F0gk5LREqgKDQ2c4d6kwSVAJ1H92LgeA4mQnVdmeLfIcpJyAsF8PjRIMQ%2BTGljLoLKGzw66CGneRCjnCtrexOFf6FiaLhSxsPAyzeRLDXdS084a3LrDGFK5VtP8uezgvStgSU7tsU9cgoEBJ2LMQ6XcISuoNx4RyAw8uwdRZCMYC7awsuzevj16k21AaQG54V4UeCi5QOxVkbZRKsvmR9VDT0%2FhtsqRXKPmgKVa9grIj%2BOjqW7LLM%2BzgLMM23%2FMQGOqUBuhqEHu4IoGGV6TJx0XWKzNKc4HaTf%2B2Dl2CEwxBkHnbMDW4l6hnq0i7yUtmDNcUGWBqmR7OG1JxQLACp4eI9AZwklluciqpUbL%2Fkxc8nmT9T1yGsvOPU0XhA7QqN0%2BNkAYhYQ2%2BoxAnFkM2MqMFCOTmMTkMR%2BanU8G65qnjh5daNomnxS3lJZ54P5khbuEHq%2Fu5d9%2Bk3yt8Oq01RfBg3LehBHtTC&X-Amz-Signature=fbab17d7f29ad5d37c5c768a619d2f544607afff51704472b9e2e40e4813fbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=1bb4e659719e326fabac141ccedbf2a29a00c9bc15b79ab7707b7678df1fe8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN35OLKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDZyVTbjD2vQmnnfSw6qVawtuM7iG2DCq7uPV10CWGUpgIgepA5u6gDRePM5mCBsnYARyCsd96kTcLlcWSWtEa4u3oq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ9VMjJQI83E0VRt7yrcA27z4lk9EzETYVB%2BZds6lFBdGM3OGMux%2F3%2F9Orwr9hDUKRO65UKfd8W8nYs50sYHiGqoCYfU5ANxvCs51tisAnXHY6vtJZtGiFrZrPpLVNR2S%2F73c6D5y%2FonA9JHf4HJ%2FGJ3xvX3IYFBNLXh0f%2B5Vdlbr6SJ5wqdc6BQjrWBf1zuiL%2BWCfe5Z6M4QJSJ%2B59UkqnfPTwlWn01fI47w%2FYG90ZaSUiWokLxOBLFEvqBbfdCuVBJfvwtOT0102pY1mzatHD8C1F8tecU7zTyXtHMgAdSQBSClBnm%2Bx0YISTwAj0NseYyoDpyHpvFeZtYjIVRwdoMQU%2Fy2vIAEyKhyYvRsxzwrLgqp1Za0StfvNmkadB%2FKknIfYJXUHMq2mu3D5bytq9RxmvwEuKlBzES9w8ajfIuUn3KSuUZIQgZoT1UvjgNVXA7WsIbf%2Bm1eiQluxK74CAwN6GTIX02n23AqSJJs0IbjOBVuJEMlebN7VdsAhJn2MrloDpRZcLuOx4mxwlkJcrWwBWVulbPnlIztoKKXt6pbVMc8xLns47bSr8cSSkhpGeYQvFVScblwLE4ZA9i0ZJ6n83zEAfN%2BGg3pez5kBvnKejdI165dSZCzeHHoWYJKQRz3xrDD6eApR%2BCMMy3%2FMQGOqUBvF09oEc6HCh4elIWMaEI04qRgzeMl21OETXUvK0n71AnozFzbphrdXkNqW6aWy45qW6xSzk1d8S9EoMqkEMF6%2F6ezNdOVYDqKFF%2Bsrlh5s2DB1N2sGWRiI69jCxbZRvb2v%2F4EKowRREB9SHWo2%2FouidQYfZOwRageQ0s9qXOco9oICBbJME%2F%2B%2BqFLGBREGf%2F8%2BFmT3izkndc4queNKTqdVQH5SuI&X-Amz-Signature=e86aafc7a50d811011f2b444771db743cca8fc532786a3d2a490d7fd66ac2953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=c928cb1e7fcd82fdb52db74665f0e4da4297edd2dd3833cc46b937c10952552d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCZ5P6D3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFG9Z82RP4nbn8hR2tVO%2BEmeDDCoK1TraxgJxgJ%2BlW6QAiAivOdOQfxbU1z%2FF6FY21K8g6yljDXUY7Ep2pNmxMQERCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMa9JccK7jtRJ2%2Fvy5KtwD9DbBN3VcGILYWZXoO4EIkEEfx1VmwHM6JBbfquW9MHCTXKl0a0JJ9ThrVF5AUx0qLctr58CdmHdpTIRuGWmwY%2BI35yFzHExtqj4XbPcEYrkP5oEX7CVuhtto4KX%2FLQvFq0d4jvNTdfu11J%2BCi%2FPu0kSNg%2B7hnnW2Q1rWWXRJ%2BvvzShPmwKPD0pJHpL%2F9pBipYYK5NU3Gi0rwasOKVjYKto4QcyYP5%2B%2F5ATQMgfAfFeSo%2BAwDwuXoXNlp8EntEWoY%2BKZjl4aHnQhCb9UnPzc9NW%2FYwZUGJZwy%2FhNPqimo2VxUoUDrr%2BWJVqRfC%2B%2BvvixtTr9VuXIJsDKdE19fRhmGNYQhzzzw2E8%2BETW6laCr7aKkhznT%2Fsl8o0FsVqf1pkGnUv%2BPSBrggblCcmPwYvUIlliMjYsSu2wcCjM5i4jbwBVbPDVO3gSaMc4QJgeVQbf0IS0fD1wsvXM5%2BWk3Jkw37ss0Hy51%2FMU%2BJ79NOg45SHDLMBRBqatzkv8vcPWrCQCS3550rlGroYWTFp39UwVD5S5xafwTvab5CLw%2FBOvetR78Ak5npYoXgDQI%2FKppgilE5VJsjhJo3X5JKXqa6rHcjXleX34TbFWa5oSMfJqbgLSzBNQ8sAXADVPuhCYwr7f8xAY6pgHmybArM105Vr3hvFsR78ilV4LY%2FDg9klhettfCWX99%2FeE%2FmF5qh7dLN12q%2B3ebj9zcby4ILEI2kmihlGIf75TYTojU0fjGtGO66JGUVqRTpQssywXThUMtxvQIohwsJMqErTBBGM0tjLb%2BqCvOyj6spDP1sJmMLkQaNO0SADzIrOP6X5hUCs4xeM66NSs1%2FACPNk0tuAKAPXz%2BN0z%2FcBAu%2B%2BcAxeqs&X-Amz-Signature=c9e3b7b24bcfd0702550acfc00f5e219bdfb6e75ba0314c5fc67574a90d2ade3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643AVAPYL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDJBrbuCyhUfejV0rWS6JhFznHILl92p1aRcl39sgbzhgIhALfQdPhpjUvoQ7KOMEfwRaDAoTnQfabC7I7bCAV93gQ%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgwoCz2wrK5IFv0PpYoq3APdsUPQH0Hy2hJ2JbX2nRJKVWUPK3QkCZlIXGIpbVcU1l1RK8ueQvuFUL3ORkF%2BbzQml7EwdzGq4aoBLgeqVMR1wR2bkOBYaHaS1AqMpYczcZFXkArd%2FY4pD%2Bd1Jx1hKpQn8F9AUspToNOlo2ZMgWlpOOThoMv4WD5Z610eNpqt1%2FPb639Fnm9%2Bvj2xLHVepwdI7NgBZa5fEMyFVRL67foA7cFjlkDJyWxVZ9ivhBmB%2B%2Fr2%2FQ79PaPtG4GCxTeDavWN%2FTQTLL2AhdYy8HCBSm89LxxEOw9W34KgMEt0H661jcnaLfVQQKAJFrWWdWR5TEKonDUyhZjujycu30YkRu%2F6fKxvv3q20ZElkVaJsP9f9gUP0EuHnYCr0VDPfEHxwvFoJe%2B%2FJdzmyXsce19O3uF7s6kV1k2GpseenbwmzPGdv8xVlDMQGduK8WnCmZ2cIwgSVHbhZJLSE4MdF0KMyxp46EAz8GbvRqqNKXdUEoJtUMVQTUjVLMCPa%2BXW3aCNCkbcVEz5DwRAPmHeOfleatkvqGc8Dlje6%2Bp2nLHuNUfVF4ZDf2dgcYAXhAXIVm3Seeyc6NvfTRgkoAZfFXP0o4PtBAHYyhHnWCSJz03dRrs32TBSjcebL8%2FOb1kr6zCnt%2FzEBjqkATLgHxvjfzAOgzqYZe4COm9rxga8VVPxbDSIGntyYE2f17d4EXyKj4%2B5F6NTIN8e7PgNY7FNoekkVSXgz4jI84hmI%2Bqk6z%2FGOmEisPnYG9Y9V3r78%2FxoiTgh20ja5U1hjCVTxpXKek1LiwADOmnaWsRWLFUK7U9cOYq3hWb2caUrVHpzZKlnsWzy0mDx1dw30suNXxnQDQSqrA5oQ3DcJlyTq1zk&X-Amz-Signature=362670be63a0d4507557a92a25eed527e3ab64e11d2f64bcdf52375fc44021ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIE3C22%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCTxK1gk3U%2FxLolce5rB857%2Ffd4%2BNAseqRsTuOOfZatBAIhAJgwQqsWc9iYNaPUn8yrrfUU44gwfIfJTiLtumCnFF0zKv8DCF0QABoMNjM3NDIzMTgzODA1IgxvJInQTYuCDQGrx9Qq3AMHxv5og3SL%2BASsZWKL5nksMydLkENwre9p%2FkXNVbg6ndtWG7pe4xecEfP5MpC1Qsi5eCkGE%2BRQsQUe6yM5DclrQigbwnp44W9uBv9MNJHDwuzn2jEZY533Gj5u25OXZw%2F93FtifP1Gh8MuirI%2FnBBrQO%2B%2FePI9ICmYswKIL8%2FGIfd0fXY9JWRUtO0%2FRN%2BffPtX3Z1XAWJFjvTP5okiJP%2Bt3a%2BzYssBjSGTAkkYEiua2z2%2FDeQup07P%2BHNdGZOPrrGYrVM0xA%2BpOVF9kxy43TSQRbCTrCjOTps0oTaA%2FIbB0IHuXoqOJ4bYFY7%2BDI6C7OQT2g8uvYLhxJ%2FpZr0gdqvbUki0pG1AeKbhOh4%2F1FBb%2BYN0A6iM4WWlMsxMuiN%2Fib7palmgtFnSwiJnm3REBwhtV6e%2FvU%2B0BrlUJYLQvxlmtAB0lBzf%2F23MM2qVO8Q7cjVK96%2BeiS1Hbj9b%2FhHivRKiNsZMvhr%2FwHgQ3stoELbKO%2BHKg3scPUK2Aknjsoly1yqoxtZG6WWe%2B5dm3iq%2BjvPbyhvYeYub82MQCuHnK0wx1MA4DzKLxKgVgl2SUZRL6%2BQCD%2Fm0snplfWQ3kUn%2Bg7JdnWAt5sjTmZUIUfDsF%2BN9tVk8qGkIRIb2Ej3vZjCut%2FzEBjqkAcuCz5z9l3wje9z7ocJX4%2F28Nj%2Fay0LbrgXK0fWdi2RpIttMcfBeEVv3UzGKdvgdRb2l04WaEtQqNDiH2oq90MaUloTlp%2Bviz2%2Fa5ObJX1%2Br4th96v0MImjD97x9mHDYFsAzHX4CZ0BW%2B2qX54V16OHArjLvj783yHmw9oLMdF4fVF%2Fsc0b%2Fzmkd90%2BY9c5rPpVBOnxIlUqgg2v6OmTjzHMPRwT7&X-Amz-Signature=d69eff72e55af9e347cd653433ae50b6269fc939b55fbd0e65d1312fee5680d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJYFFJZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGJBfAvdZ%2FZ4Q0l%2F1IhIrwOQfSn%2Bskmw9HzK%2BrFsuHAxAiEA4%2BcAkF9ptw67pZtmzAjK1PKyHw8kS3tCJ9NrfkQC6WEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEvfH%2FXnVc2Zt%2FwgTyrcA8TW8j9ttdYx4OaCY27yKd4c1XAJgqoCOAK44%2BSLvK5pDiJsyTGZV2JoH4VhdbW3%2F%2BGGdgyl3voDmlhxAtBpIniaqztmtQZlpnV4joj9pb4z5EePgapBscmuXJHU954HilO4tBh6yCp2wPJ0TqnKbTpwO2iNY03mkAFuOjNQ721Bsvu1ZSPnpylo0E4ZRJSi%2F8Y02obCgCwnkTIi9qdavz%2BCDqgNy0GGw3x%2BJdeWg5ovRxztzjlWtWBRnFJixnnjtWm%2FdQ%2BPA6wcNcPy2wiETfPm5BEMajXY344x%2FUDq60H6SPRpJkv%2BStLIyKtOAacq5DrydjKLEuhyGeTWrYdt5d%2BySjqI25MJkr7keG6AYXJJiOkUJa3pfwqSFs8IqmoKfuczu5te5ypWllF1xCMKxNXnMrx2wA7sAUV6YVn7g1tto0%2BSq2s0pDSMe320D8cD9ZvUeA0pEiu90R%2FMp9XIpsn629pGuEuM3Iut9tFdHJYGuf9qws%2FZsibGccYAkTPcaoi%2FQ3%2BCj%2FBV0mY%2BPa7L2ooCN9f8JQEgB1BCMkvpDPXHcryQPr5QTl2zvMKWOHqasmcMyHEvxZK9r6BboGy2pOvfWw8HvjGCasJCU2WaI53vPxOMl6D6V4AIR7T1MP22%2FMQGOqUBSws12p9iUAkdXNxM2J1tK4vZgi0XPStsqrxLju%2B5KT%2B605sWkA9u%2FeFfZb%2B%2B9Hn56bOG10RcgUX%2BbR9ERQdVHdYoQ4FiKglMC9z%2Bloq53IhHfavgA5I2DeplD2ayGd%2FgrbKqdJP95gBBPaPagqemKptZpUuSCFkD91m6MrEN%2FBpU5xuj7qk5HCMI%2F1G9%2F5XnZ1Z4oXj7fi3Exh%2BTB4%2BEAcb6nDMZ&X-Amz-Signature=86442aecbd0fa0af6ab22afe815ec81cf0200242da3a284ee5b0d5716191395e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YRAC5CR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG5YKcC08tw602K7dXrQFsy5fzWb63mN1B1oHPWAaY7zAiEAvTl1IjYkyA4r1tkG3q8pHYbXt4I8B01LpcWRDDNAsJYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDJjJ%2F%2BarUhH%2BM2U4yrcA3jD4khA1zU89f85jZERYpzVIGCF0zUOQhLf3WlqsqqUyymMXprbCIm0x1TLHvu%2FzO47v503h4aV756xyW0g85QdWXTOs4m9hlqyJfOqW9uKGM953e4ffakCpI5lgQ7Pbb8eEwsCOQrZOO06N8XlCO9L7zWk%2Bseo949i8DsWX0YWXScduLwR4BC5OwKhtpWHJ3NslrZi6Kd8fvk63Opi0Ve79H1di%2FAGlddHN231MOmY8%2Fa3HNjUsif6CyQUtyjbmBYwhMmn0IZjZzBHLq%2Bn6k7ozGQQOPTYwrFYurV%2B4FC45L68DDBDDhFRaO9CUjGQkJl2eRjVeMV2Xj%2Bz9PKgwRrxXaEi35ybIuoInkto1S7UtpBQQ8nAhcqsf7RIXF704nLIh60Dvb8YDrn8GRZsnFu9UhpjXcmgyhyU29N2eL2BcYjVEAJgTFBuJIpjF3MN0sp5297DujqzikYEkYyLRwDYcpiHze6pZIg4MYH3SFl8JcAtbAC3Dn9I8oczHX92%2Bxz%2FOo3vPtGa%2Bc405NPimXfIPHM8na6Ac9r3fNf7ui6hyTsdNz%2Ft5EfFxbH1mpLvkG5KLl0YlTZgWBKnO%2BoXTg6F6hrQUeG%2BvO5M%2BOUQJrDiUPceI6RpzCC57wzfMOG3%2FMQGOqUBf04OjxH1w8uNA7Hi9uMFODg08zHdKvepl5SUBpwIssw2EzS40PC91Gpj%2BlIZhRGSh9W8JNERIhhFHWPweR5N%2BP976Dj%2FsAoYWvw8xLTHjXpf5g8P%2BIU1YQk3%2Bin9S75ma2RXemV0Bly2Zwz6fLI0BrHeWM%2B0nVNnYyyYJSQzPrjPwCeUbesuXtIAOKwZsujHsdITDYiteokzbfi%2BOUvJWkobjDWi&X-Amz-Signature=56c7cfe5f7e4170d6f9371d15c9874cbf94d3738a7b4af4a6d505db566f624d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=a4d44ccadb6ecddff4bf91e60eefad31ba58f66778225e98df19f13c6c9e5a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJEAZX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDhKlPtRbxThSul7ZOVou5H%2FBE5SH%2BHrl%2B9JtopWheVlAIgSm5rnkd3Km7PFZznwuRjAGtbH0%2FXl0EpTGlZu73sZEkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNqTAmVbML7eOpEmXSrcAzdhwZBSV8YKAien4Qwxwr1PKO3Ou7TQ6LPDEXIijtGlXVkRKfNv9O2UgCgmxoZo8SMm7WP4ypQ1ORQjaHpaGTb58pNSr5WuY6kgCJv3wb4JEYcLQUN5VpDEqXBpY43CN07%2Bgi%2BDyEdLBIyaQu5jxACAEvKUtgOgkaQFvWz5UK%2Bxgu8dl6VanPUHioIMMPnglDi0WsFruLaOfCdlBJAZzYgy6OaDclxT4KKyyHUs6BfNgcPIU5ShuNHWbF4hnGyx8TZ55aX%2ByNiPQl36eJ36wF94nYzFn3aOnTNq6Ngi6kmhoJDE%2FwOuM73HkiedrpEeqQ6CV%2BBG4iygsfvbVKOG9s1Xlpbz%2FyI7PBfkcfe86bYkOW0Qs4X32KKjDqDMq6ovWYO7GOlmfg7e3dem%2FcAlwqjvTpjDwW4cCCUAWPFqx0wEXutwRWx%2BR%2BaDZ%2FOeTQfCHXMiO2CZ6OkJ8bnZdV5uC8dwXpKQ3WhnIzPG6fSyDCkzcUF6K8lJLgDpQWWo0rEPLu7jfJuJrWmcFJkMFPVnqvayxUHtJYhyP9qdhlV97qC2e8q3kula6affpkNBLBntZEHg2zqQa3rKZSLTvkPoWk1Aa7m3P3EOYzTiW7iZavZSJRBnbfSCorKOiYrLML23%2FMQGOqUB9fIcRhZmT%2FsXKsgZHBMT6oQqt98WsXpymZFC8tzQegMfmEKRfKRP8Dkixb2bUm%2B7dfkEioxKVo6Slo6hHpXCX2eGz3V0bUlZ53wh%2BGgrREdKrGiO6Dlo%2F30ZuJ1%2F4bG2Z5B7xZTGhJVZQsoamiSeXcnpVeUrCx5oF2WgfDaaTvUtmnKhWqvguxYx2%2FoI0Ea%2BXnmvOsj5dbC6MkEXoXT60ZCt5wyn&X-Amz-Signature=4ef93cc5bc7d5866a2d3a795bf774bbd1d331ca072e8ca50316953781e81721c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=a7a41984512c7344580368dd54d5a5b95296f351e29d9792b60d011ec176a1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=cee0bcb8d7d861cb62368cceea3e83773f904fc45a0fdedd1aa3e3c488fb1e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=4efd42309957153729a867ab65ef193be59cd12058ab67898bf235668116f099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=e3b958af4a3a919c535a92eb8bd8bc1acc27b0845ff3364c20703b5774141921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=306457065b99f57204b480d3883a3662c87ad1e7053db7d10cce55bc5f91e85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=2ffcc1feb9b34dbaa2c076418e1e4924ce39e7c0afdf90e587d73c6264840151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=4efd42309957153729a867ab65ef193be59cd12058ab67898bf235668116f099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=d705483d629aea1e1082da4650c890b93c6645dcd1a026662c3bfc349992d747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=9722fa145342101eabf657a2a63a89c76593df5a510c0688433cbabd95f7960f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAILPOV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDP9ZLARsRmlHjvzzzEn98L5rr8Qr4GPpRqfKFOgDnjeAiEArXrg6JUkdXU3%2FX8e1Y9epNM%2F3UjtLZ2z1Okr1OX2Vtwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBP4FsL3Fiof9YXCzSrcA02Lbx4ATdPQQAaGCDHqMbcfCxLRiAjQvo0XSzag2JkoYSB0ojP65RcPeU8f64oQG2ESJ83VFNJwEurT%2BVFvPXgBpYqUtQX8z7J1Md2t6HfXht1fwVnDXzS2BJING4ArBsXRrMoNzkrpp2uLiCfWdSBhEz3PxWfsznBHr9uliv2Cu3a7l2s9WORUWAB0LA%2FqkTkEPko0Jc0inRFI131Tpl1qZluCBk8otv%2FSL3KRL123A7lR2PBfmit8EAnQKC%2F69s3QoDanN9LfS%2BXkEdf2EiKOyATQ3O06s7ZTUBYzPHnYcwU1xj6oyjX3FgTnubwVJaz57drAXjwCRU8bYVfURta8W3T6szCXf07hl0Ful3JEE9supUYprECzCSW5xxGlqY%2BxVQKYBB%2BupCHITid5iTF1OBL3dOcdKeoXcrBk9r9dQOQYzQSq%2FCZYsKQ1gL4ilUITQ8%2FbIcKllmeidBi%2BvGOYL%2F5tmg4%2B3oRfNTU%2Bu%2BSZfnOcqtpvkn1mBnJ%2BWHzCRcourYWlA5Imi%2B7emX1DXEV4lzt0HLy27jUaw1kzPYexQHxaqTumB1ratMkFiZvw8wxf9m9SvDUCcYJeXJYKwYWlJlhlta3qzjwMBnOyw1NoiEHyRpp3NdjSHSF2MOi2%2FMQGOqUBueLJcjnxUCOdruwYV%2BFp4N2RkXDILhLl9sKOutcUNQC3lbHLPckD4Yl4mY53waO4XjeD2Cb83YJqXysODTcZ1mka%2BcsMmO4DGQyY2KvBuLWtSm3pg5MBqchW%2FG2XrjzWp%2Fnv6o9LA%2Fu8yj9Vs084CkO57Ps6NyDMWmjcChBOX4ymrV%2BlSVZI5EA95x%2BWIhqHtzS6gnB0xMmj80A6E5tT1kYTRUtO&X-Amz-Signature=cac2066dc680fc3a68a6a7bf355c375466e3cbcd36adaf7f3b1a44139817bafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
