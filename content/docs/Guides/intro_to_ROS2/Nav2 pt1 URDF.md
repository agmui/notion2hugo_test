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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=0201bdab72034c949f4aff969c655f38a16950a1fad6f22f0da98a980a4a3802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=231dafff2c1b69d3d288ef27140aa9d3ab253df2d4931fce4c15cc0cf49cdbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=ac19467c6fede69e7f26181adb74b97164464d218d5ebdf1054fe78b9c06fcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=ae7523d51d8ba7562c7cb1ff49188964472291ac07b40e2dd83cde55f100833d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=5f5c04663f318d6afae69cc481ff932ee1c91bb2aba011e175e15b9b3ee6ab0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=937202ec9edc4cb23f7c5a3e76af43c3abca2e9be4c752e669c341628daf6e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=c364813bd04e0c81fc7d627c14f8981e845645b1a24eeb0f8ce8f6d5c6a08875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=0c3449cd92f4d147142a4cf6f1c0ef9123dc728c63aac5cfd4f2ce35b3a91158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=4cb9b7fa907f0b7b3b4a58239e6e66b2b93844c2a876f611a24f4454496a249b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=be5a71994380702d47be1873a5679da79487338c25af2c21cbd325a19342cdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=9458e6d865843c4e0d5f896bac0b6265ba23853f6d06a2597ebcc93c2d3a0e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=04a3ef8413031efacb39182dc7c41f6d78d59034badfb3032b490f1efcd43906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=642b6497580093cbbb52a8975de861ed5aadb4a2bf1bd397b51dfcd4a2980f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=8aa68cdb2bf3cd15ecb29614b23232dd587f895cdb84a49b4298fda557f7b240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWZTSN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCXvzbr16IeRTgfeTAbbSKCmo54y5FbNY7BsOaZMHHPmQIhANhxie7LHBtRzA2WTGJuzdMGfXTObzfm%2FJfBppBvNct5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyL7jRQ8NjZg03%2F168q3AOwB0uvL4CxcT1lVnQqoB8rPVd48feDfwqEL0JDXBCjBHnvKcuA%2B3t6zUwXGEfMYkc%2FwQ0%2F45mfp8KrjwRGEMPWjt3qt7rdLYfxoBYz4RydD1ZBdRSXXkoDsC77dBNTaulPKTalx0BEah85Sb72aLUHJDYP64wdS56T5acPxALza9wg4%2BHDxm9a7ODjNV6DWHpGE69fMIslXKMZuk8z90JD97yKYKcAQy4i7bOLlBXyIU0pyk5zbryfZOSfqeEFHf%2FnJ7PpLwavH29CCiO8faM9iry2t5mZDUBQvajeY8WHMQvYMvI24%2FANErkTQs1gASeRbEapXTkJ3ilRDoM5aTOnCcHCBFKommWkv%2FVpS7wf%2FxydoAaODKz%2FWWEbBg4combVf0x6PGO1hmZGJcO0Eo1bG0AfSuGDhEHR8BbzuO7VvvsC7RvtaEhIL26VRWoK5S6DbtQ73coG6bc0CaV3fWnfyIMrj8bvgF08jhh93XzYc1N%2BNApEUONSP1UYTdWSjNsM0Fy9up8Vq15%2Fa4r4B7Tn7adFBqAxit1C8UcR8BrkRGg7wae7KUiAaHSY3jU5Mneeg2RlsLi4pPvFyk2m%2BZjU%2FwNE7Wi0GamDm%2BxZTlcLyI4XTldExHP7j2slxDDI2YjEBjqkAa0t%2FVBtzDSKQjDVlh7%2FmKHkcEjaGlNXoo0UVltW7CbecCW9XZO7nKte5hzwEGP6oZXLyn4YPMGEXVZObozOZAPCEKdFBUuJ%2BGXvkX7rme%2FbPQ16tGgnNf%2BSsyX51S2b%2F%2BRtp2XD7qY%2BNRvZXnuCmPFdgYpI6E2WP%2BC%2BhU9ucnQFO4mud%2BUWGBrPBXDfzk854pIFdA8XcLPV%2FhMkM3IHpRNSCG8u&X-Amz-Signature=dc0ce841dbb736a7e2f7b6f24c49076b96e7ee6b5f0247c77ba33a70edb6c7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWZTSN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCXvzbr16IeRTgfeTAbbSKCmo54y5FbNY7BsOaZMHHPmQIhANhxie7LHBtRzA2WTGJuzdMGfXTObzfm%2FJfBppBvNct5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyL7jRQ8NjZg03%2F168q3AOwB0uvL4CxcT1lVnQqoB8rPVd48feDfwqEL0JDXBCjBHnvKcuA%2B3t6zUwXGEfMYkc%2FwQ0%2F45mfp8KrjwRGEMPWjt3qt7rdLYfxoBYz4RydD1ZBdRSXXkoDsC77dBNTaulPKTalx0BEah85Sb72aLUHJDYP64wdS56T5acPxALza9wg4%2BHDxm9a7ODjNV6DWHpGE69fMIslXKMZuk8z90JD97yKYKcAQy4i7bOLlBXyIU0pyk5zbryfZOSfqeEFHf%2FnJ7PpLwavH29CCiO8faM9iry2t5mZDUBQvajeY8WHMQvYMvI24%2FANErkTQs1gASeRbEapXTkJ3ilRDoM5aTOnCcHCBFKommWkv%2FVpS7wf%2FxydoAaODKz%2FWWEbBg4combVf0x6PGO1hmZGJcO0Eo1bG0AfSuGDhEHR8BbzuO7VvvsC7RvtaEhIL26VRWoK5S6DbtQ73coG6bc0CaV3fWnfyIMrj8bvgF08jhh93XzYc1N%2BNApEUONSP1UYTdWSjNsM0Fy9up8Vq15%2Fa4r4B7Tn7adFBqAxit1C8UcR8BrkRGg7wae7KUiAaHSY3jU5Mneeg2RlsLi4pPvFyk2m%2BZjU%2FwNE7Wi0GamDm%2BxZTlcLyI4XTldExHP7j2slxDDI2YjEBjqkAa0t%2FVBtzDSKQjDVlh7%2FmKHkcEjaGlNXoo0UVltW7CbecCW9XZO7nKte5hzwEGP6oZXLyn4YPMGEXVZObozOZAPCEKdFBUuJ%2BGXvkX7rme%2FbPQ16tGgnNf%2BSsyX51S2b%2F%2BRtp2XD7qY%2BNRvZXnuCmPFdgYpI6E2WP%2BC%2BhU9ucnQFO4mud%2BUWGBrPBXDfzk854pIFdA8XcLPV%2FhMkM3IHpRNSCG8u&X-Amz-Signature=e38ff2bacbbb005b43192530f2537b761817c4d56ae074eab53d1ecd7af11881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWZTSN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCXvzbr16IeRTgfeTAbbSKCmo54y5FbNY7BsOaZMHHPmQIhANhxie7LHBtRzA2WTGJuzdMGfXTObzfm%2FJfBppBvNct5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyL7jRQ8NjZg03%2F168q3AOwB0uvL4CxcT1lVnQqoB8rPVd48feDfwqEL0JDXBCjBHnvKcuA%2B3t6zUwXGEfMYkc%2FwQ0%2F45mfp8KrjwRGEMPWjt3qt7rdLYfxoBYz4RydD1ZBdRSXXkoDsC77dBNTaulPKTalx0BEah85Sb72aLUHJDYP64wdS56T5acPxALza9wg4%2BHDxm9a7ODjNV6DWHpGE69fMIslXKMZuk8z90JD97yKYKcAQy4i7bOLlBXyIU0pyk5zbryfZOSfqeEFHf%2FnJ7PpLwavH29CCiO8faM9iry2t5mZDUBQvajeY8WHMQvYMvI24%2FANErkTQs1gASeRbEapXTkJ3ilRDoM5aTOnCcHCBFKommWkv%2FVpS7wf%2FxydoAaODKz%2FWWEbBg4combVf0x6PGO1hmZGJcO0Eo1bG0AfSuGDhEHR8BbzuO7VvvsC7RvtaEhIL26VRWoK5S6DbtQ73coG6bc0CaV3fWnfyIMrj8bvgF08jhh93XzYc1N%2BNApEUONSP1UYTdWSjNsM0Fy9up8Vq15%2Fa4r4B7Tn7adFBqAxit1C8UcR8BrkRGg7wae7KUiAaHSY3jU5Mneeg2RlsLi4pPvFyk2m%2BZjU%2FwNE7Wi0GamDm%2BxZTlcLyI4XTldExHP7j2slxDDI2YjEBjqkAa0t%2FVBtzDSKQjDVlh7%2FmKHkcEjaGlNXoo0UVltW7CbecCW9XZO7nKte5hzwEGP6oZXLyn4YPMGEXVZObozOZAPCEKdFBUuJ%2BGXvkX7rme%2FbPQ16tGgnNf%2BSsyX51S2b%2F%2BRtp2XD7qY%2BNRvZXnuCmPFdgYpI6E2WP%2BC%2BhU9ucnQFO4mud%2BUWGBrPBXDfzk854pIFdA8XcLPV%2FhMkM3IHpRNSCG8u&X-Amz-Signature=3ba399a552393227080384b3c675920bd451c838cef13b04e7799f1ede14b393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWZTSN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCXvzbr16IeRTgfeTAbbSKCmo54y5FbNY7BsOaZMHHPmQIhANhxie7LHBtRzA2WTGJuzdMGfXTObzfm%2FJfBppBvNct5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyL7jRQ8NjZg03%2F168q3AOwB0uvL4CxcT1lVnQqoB8rPVd48feDfwqEL0JDXBCjBHnvKcuA%2B3t6zUwXGEfMYkc%2FwQ0%2F45mfp8KrjwRGEMPWjt3qt7rdLYfxoBYz4RydD1ZBdRSXXkoDsC77dBNTaulPKTalx0BEah85Sb72aLUHJDYP64wdS56T5acPxALza9wg4%2BHDxm9a7ODjNV6DWHpGE69fMIslXKMZuk8z90JD97yKYKcAQy4i7bOLlBXyIU0pyk5zbryfZOSfqeEFHf%2FnJ7PpLwavH29CCiO8faM9iry2t5mZDUBQvajeY8WHMQvYMvI24%2FANErkTQs1gASeRbEapXTkJ3ilRDoM5aTOnCcHCBFKommWkv%2FVpS7wf%2FxydoAaODKz%2FWWEbBg4combVf0x6PGO1hmZGJcO0Eo1bG0AfSuGDhEHR8BbzuO7VvvsC7RvtaEhIL26VRWoK5S6DbtQ73coG6bc0CaV3fWnfyIMrj8bvgF08jhh93XzYc1N%2BNApEUONSP1UYTdWSjNsM0Fy9up8Vq15%2Fa4r4B7Tn7adFBqAxit1C8UcR8BrkRGg7wae7KUiAaHSY3jU5Mneeg2RlsLi4pPvFyk2m%2BZjU%2FwNE7Wi0GamDm%2BxZTlcLyI4XTldExHP7j2slxDDI2YjEBjqkAa0t%2FVBtzDSKQjDVlh7%2FmKHkcEjaGlNXoo0UVltW7CbecCW9XZO7nKte5hzwEGP6oZXLyn4YPMGEXVZObozOZAPCEKdFBUuJ%2BGXvkX7rme%2FbPQ16tGgnNf%2BSsyX51S2b%2F%2BRtp2XD7qY%2BNRvZXnuCmPFdgYpI6E2WP%2BC%2BhU9ucnQFO4mud%2BUWGBrPBXDfzk854pIFdA8XcLPV%2FhMkM3IHpRNSCG8u&X-Amz-Signature=157e45ffd65cbb1a7381e2df90d171bbe283609f98cee2a1b86e703468909c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWZTSN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCXvzbr16IeRTgfeTAbbSKCmo54y5FbNY7BsOaZMHHPmQIhANhxie7LHBtRzA2WTGJuzdMGfXTObzfm%2FJfBppBvNct5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyL7jRQ8NjZg03%2F168q3AOwB0uvL4CxcT1lVnQqoB8rPVd48feDfwqEL0JDXBCjBHnvKcuA%2B3t6zUwXGEfMYkc%2FwQ0%2F45mfp8KrjwRGEMPWjt3qt7rdLYfxoBYz4RydD1ZBdRSXXkoDsC77dBNTaulPKTalx0BEah85Sb72aLUHJDYP64wdS56T5acPxALza9wg4%2BHDxm9a7ODjNV6DWHpGE69fMIslXKMZuk8z90JD97yKYKcAQy4i7bOLlBXyIU0pyk5zbryfZOSfqeEFHf%2FnJ7PpLwavH29CCiO8faM9iry2t5mZDUBQvajeY8WHMQvYMvI24%2FANErkTQs1gASeRbEapXTkJ3ilRDoM5aTOnCcHCBFKommWkv%2FVpS7wf%2FxydoAaODKz%2FWWEbBg4combVf0x6PGO1hmZGJcO0Eo1bG0AfSuGDhEHR8BbzuO7VvvsC7RvtaEhIL26VRWoK5S6DbtQ73coG6bc0CaV3fWnfyIMrj8bvgF08jhh93XzYc1N%2BNApEUONSP1UYTdWSjNsM0Fy9up8Vq15%2Fa4r4B7Tn7adFBqAxit1C8UcR8BrkRGg7wae7KUiAaHSY3jU5Mneeg2RlsLi4pPvFyk2m%2BZjU%2FwNE7Wi0GamDm%2BxZTlcLyI4XTldExHP7j2slxDDI2YjEBjqkAa0t%2FVBtzDSKQjDVlh7%2FmKHkcEjaGlNXoo0UVltW7CbecCW9XZO7nKte5hzwEGP6oZXLyn4YPMGEXVZObozOZAPCEKdFBUuJ%2BGXvkX7rme%2FbPQ16tGgnNf%2BSsyX51S2b%2F%2BRtp2XD7qY%2BNRvZXnuCmPFdgYpI6E2WP%2BC%2BhU9ucnQFO4mud%2BUWGBrPBXDfzk854pIFdA8XcLPV%2FhMkM3IHpRNSCG8u&X-Amz-Signature=196546c11622777f4b2c77e84d83c0ad3a0c381e706c40b72e0cc3e4b8bfdabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWZTSN5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCXvzbr16IeRTgfeTAbbSKCmo54y5FbNY7BsOaZMHHPmQIhANhxie7LHBtRzA2WTGJuzdMGfXTObzfm%2FJfBppBvNct5Kv8DCC4QABoMNjM3NDIzMTgzODA1IgyL7jRQ8NjZg03%2F168q3AOwB0uvL4CxcT1lVnQqoB8rPVd48feDfwqEL0JDXBCjBHnvKcuA%2B3t6zUwXGEfMYkc%2FwQ0%2F45mfp8KrjwRGEMPWjt3qt7rdLYfxoBYz4RydD1ZBdRSXXkoDsC77dBNTaulPKTalx0BEah85Sb72aLUHJDYP64wdS56T5acPxALza9wg4%2BHDxm9a7ODjNV6DWHpGE69fMIslXKMZuk8z90JD97yKYKcAQy4i7bOLlBXyIU0pyk5zbryfZOSfqeEFHf%2FnJ7PpLwavH29CCiO8faM9iry2t5mZDUBQvajeY8WHMQvYMvI24%2FANErkTQs1gASeRbEapXTkJ3ilRDoM5aTOnCcHCBFKommWkv%2FVpS7wf%2FxydoAaODKz%2FWWEbBg4combVf0x6PGO1hmZGJcO0Eo1bG0AfSuGDhEHR8BbzuO7VvvsC7RvtaEhIL26VRWoK5S6DbtQ73coG6bc0CaV3fWnfyIMrj8bvgF08jhh93XzYc1N%2BNApEUONSP1UYTdWSjNsM0Fy9up8Vq15%2Fa4r4B7Tn7adFBqAxit1C8UcR8BrkRGg7wae7KUiAaHSY3jU5Mneeg2RlsLi4pPvFyk2m%2BZjU%2FwNE7Wi0GamDm%2BxZTlcLyI4XTldExHP7j2slxDDI2YjEBjqkAa0t%2FVBtzDSKQjDVlh7%2FmKHkcEjaGlNXoo0UVltW7CbecCW9XZO7nKte5hzwEGP6oZXLyn4YPMGEXVZObozOZAPCEKdFBUuJ%2BGXvkX7rme%2FbPQ16tGgnNf%2BSsyX51S2b%2F%2BRtp2XD7qY%2BNRvZXnuCmPFdgYpI6E2WP%2BC%2BhU9ucnQFO4mud%2BUWGBrPBXDfzk854pIFdA8XcLPV%2FhMkM3IHpRNSCG8u&X-Amz-Signature=00dfb328a540ea160102bab7ce4cb5656da6d989e5690a31fb9b3a0b8d4f19cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
