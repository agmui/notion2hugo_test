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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=9e8dbef8124ed9d1cdb52c1cab8979795f33782830ee7ad0bf4162a94ddbde47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=c61070cbfa4cca1e3c8017de816ea08c51c2782eff54f90c8adda2b30dd02f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=794a7f9ab78c4986a9bc2c7fd245dc5cc99423d550ac80b1d17adaf54940940c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=f139e2a49d462e8313c88e99d8b2025913094ea5fe31dcd9211e239948c53273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=a4dd0d7b9b9b3fcd1ad70c6109937eaa211517b731b09f89b74396595f22ae5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=c40109b6e17864cc913eb7d4780209afcff379578ea0722f16e1370c256a4580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=f4d763673091cf0c608cde7a9913106769adbf0785b26643be8723c9a3ca075e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=a3c4107b29a3f13d0bbc6650813269cde5197eabb609c71188055089335ce957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=87142817bbc218a3996c60785844fef3ac68d9a31e967f4369f87f9dff11d214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=22a5edbf6b0b71e560885205f8427ab8fbcd838e32c67d772093d6fd5fac8881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLCKNKG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER85GtralBtyFGO7hEdSIeDSpifOYB6Nw6t%2FRKDPcFkAiEA1%2BHUJXXDoAWS%2FjDyXxGxTUghs4eY7suuKuRNRkPhImgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLOG%2FYwtPcYEPlO%2FnCrcAzXReYS9SkQgwPd34KKeUxLNdDizO8TOVjR1v5WWYhV0GmPIQ1rJyjyFsEvCX2LcsYWmjpwNB24kf4l%2BwFlFJLB5nOabPT46f5V6ME%2FfQ66eJiiD%2FvvYZb7WwR1Rb9mRcCpPD6SDhAbMvnWSb8ooVklWYZ4pIY1Sfdl5USAsji8ZDbb0EEAXLUNEOHgJBXCejmsoK56oIwcskmdzAKWM05QhQvADpOGVJRsvPnSPFDTZcBZMwhqyOyvt71I9PrElMsRvC%2BYEAI4%2FtRShYJrFhQr4wUEqr37UzbL5t9iNVY4HNiHPQQ4n7YE1PasB2EJC5BIgooaWYH%2F4XJrlEN3WuoPxgIZ26q80t5hFa1Pc%2F2MWUBc1Fq8Kbbg3HGMHdcuSpkRSj25O%2B0tigttyDgKSyCWl2v1zi668n9BYaiZASCSC34l%2BQrKsrTocMlFrvNCiMjpZ7keXJua7zugf1lrsI4G04vs1A5U6IQWKOUqCuiKPr2OEorKya5Ym1IGygv%2FATYBln7xGwTP0vLv1geRyScEzdJLSQNP9jpN1aJlxACsNgRJGRj48CKu7H0cPQwYbnXG9wU3BarvTjSQC%2BrKXEu9FvEt7UQ3tq%2Bn%2FU8DIvIrYZrzvhcCCQ0ypUkOLMO%2Beu8QGOqUBs9NrtFucfilliWT2%2B1UPRmcs1ckxrTNY4sKZolNh31WyZT2WWrRunfb0v2MHDLBxVL6bwEaSt1JJ62IiHqVhrN8VpXYBLGwYe%2FOTZ%2FgwAVxVoOfGL3quXhjMlwd%2FBRxbIGFaZP7EcEm9E%2FTAcn1az2Wgg4iUKJYMADzr5ccMcP9Qkeds%2F8yWNuemprB0xg2AlXs7kYq6NOgSjCUtZi%2BHp5mtWWQG&X-Amz-Signature=88a372b723e39e264d98d9f6aae76f437050caa7be66051884d3f2900258947d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43WZRCL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkxdPt31WXFirUnjjtwnpDguQhnck%2B%2FwKpDaToG2xFTAIhAMCLcaaC7Z1nDB89SkdtdFkhLzqXU%2FaWXlwOmVOZ8xv9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgyGK524rQq7iZOmCPkq3AMaaGYrOCQUkPjLZnN2T8uIYYbcciuzMyWzsy4Gj86oQlqtVzJZbQHpVdYY6iAxZRB0HtkNyBeQ%2FqpTqHpq0CwvK002373rME%2FyHiepY3d98yM2JHbnndsrJCzLJ9A9lGtU2xaLQVtPX3DxUb4YD60DwhM4QKI9P0e%2Fz%2FhAo8a9pkEgr1%2Bgz0lOSL5VKusUR0XXED3PjeF7OAzu9ebEdNb6fhuF3kZbh2%2FyczFXI8meApopi6jBgPX3z6klo0%2FUuFeKR0CYoYyj3xnBv8Z6OTmFcDLJIluLR6XwFcYuYn6%2BurQlJWyA9ee%2BrVVsdqg0nwOeZpvWDwOZDst2ifTmNqK4K0ZRf1G8V38pILyJRoyqGSXNh5bpVtWZvlME6bdmuG%2BBt9dSuLbGk0Sd8fSlFRe7ADxWdBGZ8kzOxBzvn%2BZccAovtOCeUthGAqLPhCkz6XfwPDAeB2jOcpBCGSST7S91n2RzKIGQI6fQEwEdw0Bx0mal%2FDWfxrlQI7xHw66ZJTmIdw7LcEBH9bppWrUabqFePf5k4poXJpJwL5s5qy%2BdgE1T6T21gXCYpNl2TKpPOpE9yL7Cma%2F4gLyHvJ2RdOThTkOdwR0Wu5YQ54MC%2B3ZuI71em7wIWWU7JOu64jCko7vEBjqkARJmqElFm5EPRY0N56IKPwF%2B7ttqs0dhB6WvMBJPEjSP3euAzHjH%2BmbNBzXkzWk%2FPoN99s0CDajAdLUGKjgjUVcvMyFvX94ofOeKbMltCuYo4hknJi2%2BBx2%2F6NGbyvxLjt6l2ijza7KXw7AGfxf7qjFNROP0W%2BP3%2FPAbkBVlWorHrIB2gMM0NDndzs3fUTcou2leJ60FsQJUeA59wbky8gId%2FFVX&X-Amz-Signature=cb571a26ce2ce04f68cd6110cbc6d6fca0e8b076de972c4f51eb169284122256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNAX5ALI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF7rTmgI36kVonr%2BkhU73ET6WANDbEffm0%2F%2BxO940uAAIhAJEMGCEgwzz7cVYB2XSOQZrCj%2BEkxriO243hmUjRcx22Kv8DCCQQABoMNjM3NDIzMTgzODA1IgyfK2i9w7MdVvtSMbUq3APO3u3Cq%2F0ZHIH8vumf2BAy%2FtskFvdD6aYU2EVR4iG41JsTQZJgKZuXOM7IGpFiToi55k28RQkdNJmbxRJzbISuIM5XvfuxDC7e1EbkiGbc8f1pKpPVTPAWtFh6wvMRAt%2BqGM87M1gXjvim%2Fj%2F9m7DPFgd98DEGEFeQzmdAHwa7F3N7GwpqS8tLhmyAfBj736fhfzL2r0j6A%2FatXtbNQ5z0%2F9fvMVcPoyF4hCd1GDp%2Bbxa2IymdK7DEPeUxBXXW%2BkWCzpQe7asrnvAghCWolHo4Ehwf0uigy6K3%2FPqeM0pTBL%2FjMWuJTyaxuQlebAImWh5NrxfMRvSyDCmbCgrfSZTjMoAzCugvshrRwp3oqmQGxnH7fPnWl%2FLZkmaYED4qyh0231snWWJ4JPSDIJqwxQAF%2Fu9AgM74y2czpI%2BGCcIBjdqfsjGDO6Hgp4G7gtS7xT5IyFerbRBKwwrd4CGeTD1rm2ft6Rsfs6dXwxGqodEPH8Z3fqsEaktBUgAPCQpi3NrvizD2adkilGrNCRNs7pn0wt5B43P98uD1tzJlnZk93XISWVu4KJgy1TNKFkPg%2BGpDHyUz4Kki2y%2FnIHFLgeYtL1tfbhYkOKKCZ%2FfHY%2BUO7a47xbYiI5zJQqabkTCBo7vEBjqkAZMo1rjhr8IenvtP0vFkp4bICd3RjGvPD6g%2Bvd1ygQJmphiSZYPvNx5ZYHGDmy6GP1ryOdm2QAYtBrkOE1dY4H2Ch7chQmZYw0k5U3M8%2B4JX8Y9elZGu6xeg7SXLQfzu5%2FAKi2T8deTfXZeHkAonUgXIctAc6tIaouJzZGu%2FybULKWvcL3CnBFLZozah%2B7SNEEK5aaDAuAUrLxzzDxUqVEbd016w&X-Amz-Signature=17badad94d455adeec3873d60c5a14d9a2dad6c4b85e6c406a1cca131077f94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=4bdaca6ca1e27fedfa226908c8f89d1df40e790618bdbcf3767370efc1822cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTASH2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgxi7tlzna4fA1W7YJj8Xo5vm4xJ4BvvsWMkze%2BSOtgIgbrE0Xb57ZyZ%2FD8PNpc87SU6fqFI7A35rWhE5nTundfsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA7BTQ72YGemEkY97yrcA1FqCAfBL3xsKUPWUMaW5Zf7JQI7DnEOz1iRzZKReXoOGSSQba9CK5pZjk9QPYl5c0HFB4RvvCiQ7XmZFdpH52qsSv1U4T9X%2BtoNdqiGEnQ75LUoHRp35HBX%2B86pzZqXOkUZHe52jx1Ob7TTBd%2BwMrzpUdoFlB0kvEgZqFZDiKdKPLlXsE%2BaMGBXenTznTAY%2BDmVFER9nX%2FNakzyZ3gRHyIq3IT2ZDz7EskCMRuicd4JVPUpjHAYzLqIzfhLoqbugQnC96%2FK10%2BQnjv77QqLTV7LwJ%2BDaEW41gEM1L6Nw%2BNgfpaeXzEbLNlkhZY4CwqbiUUHdhOfHCpDnoaEaBgJKoVA8N9PouzLDlDdcDUizZr5TaA8JdbCiutedzmsTEWQdJdDjPh6W%2FF6SJ6mWUhSBoRv8h5Sm7jmtTtRrPzD7kzjsqnsSI%2F7ueqSGlj4X1IpogGI2cUMFby1AcgCAoS1Dkdwb52o1k6BMZ3gDGuIB78QCorvlikQDiCk0oxiq%2FKb3SoWLYYlQFBgWPjUsPKcyy%2FudVowVz%2BZ0uRJdXKo4V72VeI6%2BrX04%2BF3i0bLVjuzd3r88pJ54kgwlFiGtZjWh%2Fpg%2FGj5Krng8p4Gw0eQax%2FOyIjHNqjK16S%2BbhBJMNeju8QGOqUBsunoTYeyU56K4NYD5Y%2F9pA7qMgIKqwrNiY4az0Gm%2BRxbdz%2BDoiGznhwMVEWRYqhR%2FESLOs8AA2Im4P07FjK39LM%2FrAYiG0DHbslLtgphiVCE1zCYqhXGXDZV3lF9MlLpqwO5tha2ypoVVg8SkzJYvLZIL0egtqhtQV0XPD5Qbel9rS%2BDm0HceOTt%2BgirRWkptVbSNWjWAsm3cSkxGwNjdw%2BVOMlM&X-Amz-Signature=b3f934e81d7c8931599030e7b3da2bd8cd379390e31475f792fcd2281fa8878f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=0ceeae02cd8cd0efbaef45cc58fa050d7bc4491be0936c397c83fd11130a2bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5OXERU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSviC1JryE%2FKS5GOGt2tEe2QhYITNSeRTX8Ib805C0%2BAiEA9IMHgYCF39G43fnZtLbTfuV%2B5exdJcOzxuL4Mo6l6HIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBd4T3391HDeGT0KMyrcAz7%2FcLNAEZIDyL%2FOoZCSxoz4TPFwPQGrQYjXEqkUtQeVjezVqJXnjxj3NiqtR1i3IXNhxPU1DuBPIA%2BkX5EicJ4C5X9O8SAgPFvEJtIQv4kZRczcAxED1PSjZNXYoAh8T6CMjPg5AT7W2b5rH9hntjg%2Bq6VcuKSVniTiFz%2BnXTPuhwUOSS%2BEp4u%2Beot5%2F6EzB%2FKSdnllov5LbXKhAd6yPdpqRyK%2BHN7n3tysBE4N47s8BGBjBXWS2zMSMcNzV2fZhCRHSlNj8WbykAewLWHgj2m4qI7Gqp5toI3cVy9mWTPL3vvWkHJHzxbpJQdA7Ww%2BK7yMIi23xuzu3mblKL5Z9RKxVBJIthMpTP52Jlqzt1h%2BBM%2BxqFLg5zWVQmZyBVkBs3M%2B4cFJ2zuKII2Ejw6AO3YYE3w8s5Dt4tC5n7yHvmAAf4IoaF2Im2%2FSPnktjzW3h%2BHsAdmAG67Tv7%2F9VfUcsjIr0F1MXMmIe3ioYYK6br8Jsy%2F2vMtxuqP%2BjL%2B%2Bh%2Fk8uFWt%2B6IxLUfjUth1oLe5Gb8RsYmkps5ip%2F8DRUEKOe0cwfeJ8QEwmdtuNi7tegjyCn9669FVXHxWe26xuszZ%2FN0Wk1YVGGZ%2B7x4fmG1yrYM8quK3GcjDQKVgyDLWMO%2Bfu8QGOqUBdnyaX0KebiBWilxfLBeyRb%2F%2BOp9BEtV58ma9VFoBIjTEEjjsR2MLuS9sIR8%2BpoIwirYZ0kS9OXJmTbo%2BAkBgrAMHVj69mMMXYELqwFk2Ve7x%2FQtkZ2Jxgr8hf83m%2FC7qP8xD5zVBnrCL86PVy3wj8xBr2H9DAhLVYPYcjBCpFcgJQ4QIU3mCdT%2FubY8BNyJR2RRGVK8Mw5WCudEHxjt1YlOUMALK&X-Amz-Signature=a52b7d174531c181717f249375c324d90d62e1dc07410f1a91bbca435fa1c7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=6a52d1b6a39e5cba92d458eb11d4727605694ce0ffc63417f16ebd61cb1f190f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KXVL6RY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGoCx76N2PUnBYV4xM9xs15zPnEHb%2FiCjgIFa4lMePxAiBGKooC08NTtCLcl1zsmBtk7VWiI0t7C7jmVkMFVFLSeCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM65X5EQxtSTxCGCeZKtwD%2B3sZFhTH5OtONb1YpvtetAGJGZteCNcQqNBVRHN6lVF8UQjjseNXDkGzWs%2BkvSp8JnON6fzoThrqBQMk8ZPuFxxiRv%2BDXNI6ThrxlVbop2YiMYrcA1nhOQI2ZhLxgxrfK2%2FQpbzg8zGqUz2%2FccuUhwu%2BATseX9QT4eA%2BjX5VACl7VKhE%2FZF2V3CIwz%2FAIhyWtSldXtGsFUpAWshp3TqR42o3Z%2FTFHAGmioTd3Th4MWYS2%2BpDwmzXmt4eiep7vx%2FeBh1SorIGYfs8lQDAG%2F0ZAY5DMkorANZCD6chDbHYVKBIV8eHglE%2FDynmIdjYQFlOMq5U0P5qmpopvduus87BZXQWr4mrbuHOX7GhRoW%2FKvh6RNR8Vy8eU8ESAPteBz1l4DTz2p2mGmtJ8f0JH51FiFBRt3oIN78fcx5J2T%2B5xC2mqLZmltvI9ZX4hGF3yGUOqVerOOxgIpqvg1xJ%2FXW9plFm2DVqQMzbyOjgeJ6wAdyZOUJvGU4dSzC1q71Hsv%2BQNl%2FJFOkBniQ%2FwMd9n4cr22HYkCfqVscu4RpYLFKjaUuXYkcn2fkl2byk%2FepACvleEyUMvZkUu6sPKXVY%2FQ8PkEEVXmkmRdHB0YHDwhP96wkAnxYgtVtEvQLVW%2FAw5aG7xAY6pgEfbgWOGy3XRBe1RupSWut7qJoaDLlyzNNWBJATjzFuyUXoegeT6zsAeoJpKeUXoY%2Btsw29Y%2BpLH%2BNZZeDYhMaSDRjLzRFVciWLn9mEUAXZ65nxkN%2FHxgeEWYZBbQcIeyBV9GmEIlMNmjHLqMoGzbrx%2BTEQN%2FR9cxKKfolwXxouhCUBHsjmQHKQETXNe8fC6BU%2FsuXhfoNyU6j1l8PTRZBS7g2LWH5Z&X-Amz-Signature=70ca91dd196ebcefa731099894a8a3917f63ebaa7b103ce128ed5e1b83c1adc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=50dcedf5aaaf15fa0796307ec2370c6fdbd1f075b1d6c4ad960a6a0a74302fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REODVBWZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN3DQ%2FtscK209Is%2Bl1DPavePWCl1we9nT9S9%2BcKQzX5wIhAOSNOrWSEtRe9cyG0UAQvHzdHDUvBFsrLQtHYbo0NqCvKv8DCCQQABoMNjM3NDIzMTgzODA1Igx0zxKibQIktjJVNnEq3AOwqREouiWrSH8bafeIRSYlEOKMBQQvWhNiVjmAieC3G2g9yuwJuYCxfmE2LhehiVKDuM6DR%2BeaWQnSYq%2B1pK5JC%2Fka1hYwlyyLW1TeKcXcRGfKIjmall8Oo2weEr%2Bpo7xzLuXtOB2be2g9eTo%2BpP%2B6N%2BcYbUYd2ewuJ3huhYLgNy6FaUfZOJeRd%2BMwDxPBaNxFlyOLmXKig0cfJd%2B260%2F97pAb7rRzmFqe3paD5s%2BKUY7pU%2BJh6krm8eKc9U6zvelyd6rF7dHKOJuX8to4rrqf9j2Tuk8W7NwXtYXVeSIxsRtyW18pagUTvKzCq3UF5qiRtyYGrjmzB5Zz9svWuGIL5qyC%2BjYTTDbAGdnm7DzBUqDQTflbnRkg019oElWval1LtTpDtMmBk8xiRQXE8L9KY0Sn6dKnEklULvGqMLdwRWjUyXexujCrFJNHy%2FVLajLjgJ8XKj2R%2BaSTO3hbF4mHm%2BfphRuYs23fD0TgYKQ%2Fti7mWfTnkc1vD4KEnig%2FH2vl%2BZ9DhzzuUepNw2ElV1SjfAYYyuuj1ulUR3t0C25MeATFEA%2FTAM6o%2Bv9%2FWIRqs1WfKH7u159Ar5I7Od%2B4dRiWzdt6z4tNkhkghx68liNlcAuhrYDPgBqo8yJ4%2BTCworvEBjqkAQifD0BJwTVkhBdapxv8m8bfto6KQX%2FbdzMRyrvgz2O%2FT7Zds02RDSUGKpp8DN%2FWeorSd2HhlDqmgOB9ea0jLvxcJ9lkAT4ZaUvcT9QNcFl1kGZU56V2xfmZr3%2F5TJHnuFkVVv%2F0ay0rnuABE284H4H35Nzq3FmAcSqK001JE82hk4LY8WqbzFgN9JTmNp12yqA6jb0CowlzEc7fYC9L6ZNb5dL6&X-Amz-Signature=1fdb68a42ce905a5c785a5e4c6a435a6296fa4ed956931b1fa54c54f59096f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6VKZLX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo%2Fd9FpxxfM%2F0OjMh1HUP9zQlUT%2FJDeok9Hly9HY47IAiBzK3yRbkjeLbAgy%2F%2BUxL0W24e8DtRifk9cEzkk7DvYHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMPVUVGb7zBlqea7TkKtwDB7%2B4bwJVaWnqYXh0lHwsAzdGkVi2d0UoMSr%2FJ6tZ7kWYCvVXOrlqmcOlAHBzGAMHPbuCnaFGJtbQhzCCm0tt8y3eEe1Y2GHTBBNtyBT8kHOAeKXelu7EFeZuC3l6VJC74LJePff6750G%2BYgCmO9XXDnAiHFY343x8MZD7z%2F8En0XYbVDUp88QFBM2lHR5HbE268mWJKs%2Fh%2Bg6gwtfKpYdg3tQ3bdcpSassBZHB7%2BV3%2B4%2F6zuyCZutKdgEBSObWegBjYn9zhV5NDUx9K6GTYjISxTk7G9%2BwBVUPl2zpgXNVuGccLe1ePVUCgfew7zCVjFMyAt6FhSNveBoV9J2dGtyXRz91HgqTmpU626kebrfuKiq8DX9%2FxWdpxA8PWhHUvfo0ivnZkPOoiUyO%2B3w6Iv2rf4J5tzpXnS5M%2BodCM7nFKuamUSrVt%2BuxQBo5GsfaIHoEb%2F9clsEZ2xDekGFp1FdbN6mfbeaovMCb6860NNCRJaQCpkUrzZrW7NlSUWEVUgGuhRWEZlAO%2Fp1pqXfRnsT04%2FTX4GD%2B%2BClt7Yu3E5i7NspJHKjwoVucXNTzdHTWWp7NEap0n0TJwnpVL2ySE9APQgyk4rbEDcFfMiT1%2BsJnV1kCKUm9AjKwAgsigwqqW7xAY6pgHZfC0F7YonrKT%2FjQk12mgZrjBp2QahOnap14O4eZLZMa3F3qvT51i8dOD4YQdbFWtA4EgJJVHvO9iHSKh5FKP840OFW57zSbyiryCU9WpLnYJBZ2cYFx4TZpW7rn6S5lcWxybej6VaJsgE7wsNhUFbrDyHul%2F4URcRjsuIQsy1LIlA9CykavunrFebaj206pRptj8WkK6zMs10fQPmId%2Bmn555hDaV&X-Amz-Signature=54770a46a01aaac00238e38683f4f87d446a559ce573b4945c83aeeb75207271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T322XXKD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaE3Ll3Ys9%2FVUPb9BwyGpUNKGuezOM59h8v4Ly%2B1PfwAIgXlF%2Fl3QPr3FTuqFlmVnO%2BemD3jcu9UvSAKyyVVwhvo4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOhCorHADYXoQ1XZkyrcA2qxXiZDbPoK4LvbFY%2F8RGU9F0rj%2BHaKdcfBxTfCwang%2BJyORS2jDYqzGTwSIm8rEYRb1kK2n5QybErXtN4%2BxXzAy177CL%2FFzdMv1meCjjifIXT0oWUDqXcqKsBeqqpmmXROlXn05mJLJohPzNGvrQ20TTdYmmY51cqNJg2sQxx9dyCWCKZ7CPKQHBkp7Ejo1zdCgz6Heo0soIAoYkVYEWiwFTAFUg5Vl%2B%2BlfZcGu%2BubvgvOoaukXSS40iuDbN5kYGKr7cYy3K%2B8IHWZwI%2Bh87pO8aKvrLv2Lo6OfR6mNWjlq7kI0k0%2BkdBBNFSIxHy4G450OZS4AvoOspNr03NI0sZtyIbJVF5dfS6tWWnR86GcBSzaAHiPoMUPUxZFBl5ESRabgl3ZKxa6aj9b2MIasVma3WZvKqC1Ywmy4xfQ9hMHTJHEKdLmc5t7A4bvL4BK5i7k70YghmDJWy%2F%2BkejMT1qVBZ%2BnsrTBzOzdFMDfHp%2BWiArGcfdVrNzOg5dnx0iJKk034oQnl4rysD%2B%2FGnI3H8PvEl%2FhOqTPNI9JXO8MFVoS9YfRiZqsojxeaajxzUBkKcA1Pcc0e5tB807%2BY0t5DduCDcJJTYByOiRLcMLBdAXsKGOOsGZfSx1o2N%2F4MNieu8QGOqUBZVE%2FRai8M4g3UeaGf2V%2FQrdlyf3hJ6r8IH%2B65bLIZk3PN5weRS6dWe1TEczU0WS0tCrjqim7Pb4DL8M3tco7uif8zkM2lb6C5SJjZF7hmW5YZ5FfoXhZNwwUg1LYYmRP0VJwXV3O6qXdVzHElFI8qNW95udScOTU3DERLr%2FsQlcXNLSc%2BUZ4uPeu1UNE5pjLp5sDxwAD60gM3Q0gjzLEhIR86iKE&X-Amz-Signature=c35baa7c4e12f6603adaab7977a7ca24d8770bd17d1d8b98a5e8fe1c0e365d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662733HWDT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJE8rPWmjlqxdSKAoaVixcLXB%2F1f1U2dNpYsN%2BHEjvPgIgRPFMkrqfmHqmLUfkb8JAhSzdgXrbZ43c5J66Ub%2BX3aUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMP%2FRtWkDVSOYIwmESrcA1WQ3E%2Fu6c33TDihblkC1iZNaTcjyikaUp4IWI9rvgftToSb2ob6gzSQHf%2BuPgaI%2FDFYFtn%2BrY1gtbK0R85%2FUkNzQgaDSrDBE4Lgdqep8Tn8LOr2wS%2BQZ%2BCtf5B01eA%2B4OpgXBjHSEwKZd64j5vK%2FlEhIIibvfUHndaOC5vs52M9yZnE0rhHnYLJOw718KrKxboxZGYMFERqtk2Ip57Vx4ZOVK2e89ZOROFfqYTrTcVAKRTcZa6YwYbL1yaZMKH6btruKfgDACdDP0CiQjDjEFIKpXVWhtghnfRSxCy4AD%2FAxLA%2FLnnDebYd3Mg5YHvLxsFXLt4KA%2FvixoCOgK6gt2%2FgpZQvdTc%2BA%2FprzPAYbH9Hei1e3i4VMgWNHlEq1T1zNZuPzDUOM2rafIZSEC6B58rgP8WcRaZiC1vL8Ftdyt1uijhuAsi%2BnOb09w%2FDg20ewd854OHTpijvJMUJstH%2FU1JXcpCoF4gMvp1uTNpp5bgPo9CkDIX4tOAmr%2FGcERFWKvD947AcfYdbAniPD1Un1vwqI5BHWmOVPyBimmO6Qk75I96SzQ%2BWqTGcXpsH38moij9Vi7rbUhQq0%2BmIn4oeWcfMuezxe6yicqicobT4CkPG6TjsL4tXJuIFDH4EMKqlu8QGOqUBMbpsM6dgeKyNGi2AeBND2ouMUOKpKV%2FZbZcTSMy0QCAqQX5qy4jAg8qLyymvyK%2BZCL206jf3xsoKIUgucCuX%2BAjgQazaqfo6LsMT4%2FQxinJWc579QVDdcJmaedZ88jz%2FsHbxX4vM95NOm4RPEYTLawj%2FICzjqn%2BLNpZrnX1oq%2FRi%2BO35CXRVmpav5gE3fp49Cg%2BIGCqtqYopc1mWagMswo9KfYNi&X-Amz-Signature=a75a2cb1295df08f6c226b93ee5e0c0436bf1ae296cbb4fe327673a497c6522d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFSWUIT3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbhqZwzJ7uVLYVZ4PTPfyyY6R3xUOzNaYqji%2FInrQeUAiEA2wX%2Bou0jD5Q2vyPrPIu%2FGfk63NWQt9ONj9Y3aVY1lc0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPSp8QWS98LNnc5o8ircAwvEYW6X3wXf1OJrT13iSCgm3VPdpomv6OlMiwYZ1X0SJqj6NzvA0PxQn2XDEaDAJtiyYVmYDembFLVIUWOn5xmhJZyV0Pds0fij0ow1Ejm9oQmvFlhT%2Fpl9A9Ipfv%2Fvq7Sd8Iq1C1nn0%2FcfaFzsXWpDsN9a68huSH6Uha1j8hoK8MH6Hz8Sg8Mxq32%2F3WaGYKXo6avzmEIBtQA7hVjyjCZ1LYnnO3u0V6m8NiNz0czL5LNRbxUMSbQX9XQiRTefvHGxI%2FxA%2BDQIchc7ZafGCSNsHldrBsY%2BklUnZ%2F6tizyK%2FaEjT%2BYaBsxK90mnLj4ieOroFw5%2FMYMacz%2FQqAHWp%2B4ZQ%2BtEOpFl0KHzoy33GlWbrUoVbeBr7D%2FJtVOuffuvX32Pj20maaNJ6igBEL7iThUfd18oejTmob3nRN4F0O6QxO7WxhbkFonzAD0fbY7luc2Pk2SypElMBy7apqRtBL2RsQ9uuH2qYDlXtKp%2Bf7oqTLWX5Q30NCEIpIhmj39DzItsLQYLEcruMzQ7BKbTVyzhQGWHBPMzGmfIDAbOSKz9aEmRXr5EeI5hFoP%2B%2BkQ2f6zFnIWA5kHr2CozXBSHaJ2PvYYVYhTrSQJ4R%2FZIoNG%2FgyYhaoQO1%2F%2FCSJBiMMCiu8QGOqUB9WufwirGGuHsEBaY%2BnLRujWuqIkYhcnERWWMzuEeQF2ZcoMv5NZJbjMXSu3442Fq06FMvHbD7bfAyP415mbwRaJtzvWRl5tg0tGnK4GVrYeRPHnCSlyYj2o3AMyW3VPfRUEImF7N2ROFk02T6GlUmVmzGlOrdKoDcZdo4cjOu5x9DY%2B7VQuMvU38T1LJsiwQm3FA40Ml%2Bn8FDaYPAWxoYREMPMQY&X-Amz-Signature=d8e15b96d7521e23eac0edc287ac08f035021430311cc13b091ab5f29dd4fa79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=c94b65f97aeae89570d5eb24fc53cddd634f90a3ad874eabb932144ef80b6fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2RZ3HD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh4d8ZSh4w8LxwP3s4hFF8yQl7mKkFTlyN%2FIH4OHGsKAiEAlvFeyyZDvX5xCjvVulUSV9etoaVp1uMR3jHrSOFspmwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDARB3TnC1H%2F%2BGqosUSrcAxDOYpC3LQgUuTvVezmk5s2mUdxOsMXdWzH2goFz2KpZivfEqJa3bGuZoEbyXdTGnN%2FVAb%2B1S8oJ749KkLjOrWhvYBCGC%2FKILlLMxcYtyIRNQqG8u9ndrjhaLnJACzA952bq%2B7vDXpeKj6Vazd1dyG9ssV35KFusN18AHgqpr6DYVRJUoXN2%2BQPkQAXGGfq459QwoAoH2la%2Bgc03Aef1fFEca%2B5lP7XxsHO3OgFafRcutHJrdjtMOU9YsVTgO5rUWf0mc7PCarW0G2qkRVzIrb2WsTIOTUAfCBTxGswWFOsP90JiMlqgPVgUH20fXZHvegXcqP0N4X%2F1YJVJl6B3PDZ9pJ8uHMP%2FT7G0PICYuRkWYPtmuh%2FrQeliGdzKPowVwjoiAL5zLv1GFAcsQbNjMCJJBcIx7%2FnDDI6%2Fkuhfj82eJvOJ6wISPCHfFcUdGwkKy2njZqJBPPOzqHiQkWeWY4%2ByeF5Nym3HdxiG%2FeHIw3TxO%2BTFAOoI4yWD%2B3Cgaqp3xu%2F8pKChsNmz3nC%2BB%2BqjwvAPm8AJuwNEaiHCUUPCEg79O9bjqKklr6h6JMAGhVhhAEeEVJ4JsRm9JMcgyah6TSaTBXJBGlMZAcKynCIySswphUM%2B4qIEchbXPr6hMLHFusQGOqUBw2okCQQ6zAdaICcmzMv1%2BSVA9jBr8F%2FSztX3aPDSs%2BOJdgL0HdWnarBciXRIPEJdwAlIZECxrmH%2BUKggpRGM6ccmzmlqEBD6Zm4OstwXSHibxFEXcJceH6GgEN9sT%2FMK2KNzuRiPILTS5f9Rtu5%2FQqaERlB%2F0z8waQ0o6i9%2FG60fNj3z3lR6gn9J1BqZ3zEDaXni%2FA29NvS0%2FMLdvlgCNGFL0VnH&X-Amz-Signature=52d9a7f389740d6c31a3a3d7ec24cb1b6b728a132d9ffa2d636b9d293d7470b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=55e3a5030f84133e41f7995534a899e36ebf9823cd126cdd55ff7781d8e8a43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=9307a0e400b9c3d83cec48b9989c2926323629f256592cc9472e20cc5a4edf0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=4bd8f25cef9dd00845180e58c7150c900dd00a40b90084b7a00723452d454cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=ca2bdf23594e565d799e48972774b8da85508fceaf3c00f49bfc0a89c68ff025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=53fd0fcc00d0dac8f87a2f33d61daf1bf50d471fbb1b30a6e9fd9386109af319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=1d8cef307b725e230ca4b41f5530c3e8ccc656322aa59a05a27ebe93219ef1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=4bd8f25cef9dd00845180e58c7150c900dd00a40b90084b7a00723452d454cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=6f48ec8fa26caac5925e26d877f311cd4855c8ae25f8979f666b79b42a5078eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=2f22ac29901057c958437abf051982933698b2b077675b7ccfc5e6252a028308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6G6BAJU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt2OA%2FQ%2BYFfOjph1LiSaarwhsSw3RyzM2pnrsItkvIAAiAeHd%2BxQpvqCJmAWx68JLlpZxfH4IfTW0jr8K5GatDtyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMpTLWzucBciU9LFukKtwDlUbSZj%2B1ttWtWd1jIUPFCu8xWo2%2Fq6eeQBcKAduBGNqab4JZtYGnpLqlu77MHvM1Q89ZQPledHKNA9Rx1ceGV7tXt%2FsJ2PZvqQsceqjbHKJS8YAoVlyICMZP00iPY524dXK1q21KX0BBi6s%2FUnLBLKEJuHZawBjLNkb%2BaH5k9C8DDiotn%2BVvQWeGmG6zeVtcjqBgj7gxauLs%2FQJnN1ys0JMkt5McvMrju1OAIWZ4Pv7b7kYnMHCvGHZshlMuQUNO0ggdsnfMRFqLj%2B1BKazgEitpEwFXy%2Fb1Fgv%2Fex2%2F3sG2xJvIW%2Btivqtp%2BqpbIJ%2BlXJ%2FftYVV%2FE5l3QxNy8iPD71Zf9QFsfd%2FvjGIdc%2BgM97cSEYrUUSz0EWzcQ5Nxvg0d13RAtlg2bYSleEyRUiwTd4htKVk3cVE2K6fdBULEZSKbXDJcMbFUPE81NdpCfN%2FJAtkWX78b1zujNejJR%2BvLZCFv9hCjwLNz7v6PJh1zqCCT09aOxdyv94ItNz7uZzfJQETy2GnZdL7PEAkh5hCb6V0uotq8Gi%2BRHyrpkRVvCBZYuO5ITMHvF%2BeNJajyGuHvEHvnyLe1wWcJXH5A3A9ZnGowwUuq6t9HtJH6M5orB%2BSZKtoX4Kv7ivWOSMwsaC7xAY6pgHJexgN4X6zGahuhDJadaaTRLW28W18lNHXlf3w11Vj9DUx%2FHY%2B6%2F5ELn9K7588EGA00Yy%2FF%2BE99Uk%2FmvdopcIMlpU1Oh9%2F7p0D39lwMQcT9HM8muE%2Fm94mt%2FMorAYkEjYcODQUxIzbK7iuKiMT7js%2F4zEinD9TZW%2F5I3WoWzHBgWdYnFmHzohWF9Gh5legk7uyWmeBdNRX4wfqAdn4WB3xWyF8XNwl&X-Amz-Signature=b83904ea5965e6efbcb4a808f3170be47e23072ea2807601eab8a06d9be399df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
