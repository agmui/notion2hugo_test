---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T00:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T00:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=3b2e220cff649558f428e9c8bda59634d6ca8cdf2fc42780f9a38efa32153657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=cc2b4b3b0784377a054f5ee56ca39b451324efbe25da9239f0a1525d54212eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=aae5cdd1e9626d8bc1e3d7a83246e8e558ccf9c93ba0a31c6da3b2fee1cecc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=cca4fa8c50b75ef8c0b3962ef8d59f5f5064afbaddc9275454e8bf4cc2da1f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=4c2679fed2fb10d0d21cf84185fd2dca1a0b9d991cfcde7817de52a01d2d7a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=b90a233a3c28a61022aa0bfac826ea617a1ab7f4a355ed6071ec1047eb868ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=c07fddaf6aeabab09dc8b6b60703109895c73795bfb9ccfeb1fc48ad552ecd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=9c58844e992d6ec8f7e96361561ca6fc782e79d99f644473c8503c72a3f0a4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=87ecb958b6a5cb67137ab607213065c5db6028cd201cc5495c55891a9c93b4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTCNCPO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHEgAHcZ9JyAdXoCVgKtp25403sJQ5NQ67VRb%2BzbvwJwIgKxNSFwcGdTniTclUFQC339CCeQZ3nDUcj4Mb5Ae1%2FikqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtW1P8HCGZoLB0OOircA5FRpdv234xcG0y7HSYQ6Mxo3drZDNJpzo5Tj61ld1YNWHlQQiP1VARiFr1cpNeDAof%2FA851Ojt6aJpmaSnOepGOX0bJnZrTv9o%2BFPFG0sXw5DKwDoHFCNpolfimnEzADFpcRkAOm%2BSCTcyl2HEiAcPgBHzbySu8AEmomo2vQVQmx2htL575bj%2Bn9XOe1AwS4Qy9ZwuFhs5xBcM%2BNNMZ5z3NfrpZ7Bt2x0ekyX8zdUDYTTTRku%2F0wtWozjWmrnBkuhONim%2Bqw%2BK%2Fxkkt5TyKmXMZ5ZXhxIF1pPw39QH%2FvCZEYAeCHTcMGYR%2BI4CPtmcwc%2B0DlT9V0Q8BzhNLhy8PK5ShaPKOdCVz72a2QBoR%2FSUzlvApc9DtSYfdSLi%2BP6yuCTnZwB1S5ORMF%2FmHolcsheH%2BE9vhSC1XbSf027PReG97iXQFevoNGQZb3Wx47rcvsJ7O8TwCF10RtdHmOc87lL83cigoMdBGotZVejNUfuESTZxOvfvUE1SB8U%2Fh0VFOwmOc02bt%2FId%2F6YVJLn0YCz57RCwqrOUoR6oLyfSA0mYhBJXLf5nyxknNGuC3cQS%2BIkLCqGL6Tht%2FNq%2Fnw7oaXB07UL99UTTVTfxb5xo%2FwFsMzs9a5775xdfKGowNMKGttcQGOqUBA%2BXZt47vGpbypl214a6z3VQPjd4eOKtxGA9GDwxudfEd456YkFDT%2BfdNljYxRL7ZL93jy2vn5Gmqh%2B5DmPNtbDO9voSSnBBT8HFFgCsPr4iOxg4RmBeVbjJD22f4BFmXtmva26R0GYayzJsme5P8pTE2qgrMcTCBhMJz6hOpY4ENl2UCcLyFG8bHN4S6bo9CKgVPEPhBEf4wPdJE%2BERgDxKryaCS&X-Amz-Signature=a53b961c89fbab2e24eeb0ae1d983a545142dd6ea7553a1093f86376f0683d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4AXICU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBREHiIoOkkHPLSXuYDyN5r%2BVc94wc0xzBV2qJ5nWzOVAiBnRXewc9W9TTldtsdd9GRj7cR9xeDrA1j7JXt%2BPFFmvyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjIMp2yRO8ENrD9T%2FKtwDcb4iPctXb3Vm6vKH4CYJN%2FQlSj%2FGNC7mIe8dssOUAXUMGMiP2Rvjn3OEXzc1eBZPKQqu8dPKAG4VDPuIpHTTJjujDFiVH2tkJx0i%2F57hvPDEKgxNKl0HRH4p%2BCuDD6j%2BXFxGrKbOn5gW%2BuIv5tQum8h44USgAhTHv%2Bu90jI3E9jlZDEMB0HBxRtcSVTdnc8hv%2F5o4jVd5eXcL1%2FOZyAapqYnKzgSM0E%2Bt46N80VOlDHhB%2BEZdDO%2FpuBRUdIgk0ZTvNKbxeRCXW8bwN8pSv9SmEP7QBiKop0ZMCwhR83Fd5lmaH5Tk90m8OaiMenbQ7dg8uAO6SF0pz4fGoPTMAX9dh8d86kor0qXoF%2B1ZGwZ7%2BU1KDIcMrUzeNvBCE0qNcGOhe7ZfINQrEvpJuOrn5qzFrdg0yavPCNB53iGjVWEckKiShar5D2twvqdNA6hxGrUgDY3ZP1x3ihyPMnhzjLBsFk7iWny5Hehs5Y6VDYqGpSnlwCqVcdSE7PDhfH3hcUNU%2F7RRM%2BHq8k9GX3JmDkLoliIvSFZ5jpFHOfkb1Q9oOwGEZntGI5fk7boX73efW9RzsJpWACIWF4HQK32SwcZmBCoIdiHbPS2Ro4ZvmxIlCfvIIsPcbRTcVZOusYwka21xAY6pgFmUAyoeJAa4%2BUnhKqkc4D4M%2BhQ4hOsN0Q8gXeva%2FvyuS%2Fsf6Gi%2FrD9OJbyXn4lDWDPbjGKKR9ZI53nMWGQ8vvCK9FxQ4ZnJozqYVx93XyvIkMA1whboupGGDJUBI%2Bm0KBGHU3A4k443h4KRfJg17yGC%2F8NynIwrgm3DmfmRU3ybu3p3%2BKwOXoUfNsNPEt8M%2FDxMJJU%2FEY6LUljlW3f2SdZLzFrMP%2BI&X-Amz-Signature=cdd9da4550d9ab57636cbc9a936ddb76c3628c6239276171c98ba8add50ef469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCT45LLT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPV31EAsWCqYYzX2kqU%2Be0vEFm4zmP8OmVO2oPnsTtAIgcRVZMuv3zd1rxpj34GqNuWRA9FhMp91ICSy1QBo2%2BNUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZRjAKV6WmHR1kmjCrcA8bZgrL%2B698ZZeP1QQJElSjR83lr%2Blrn9ey9N2rGJjSzJrifPHR1%2FaOBSkpXuLRHu3IXlidEEk5sTTcNX%2Bvbg3soW7MbnApnf2gEDgOZ04sPy4Pcwp0pQaFQkG348AuRCW6D2N4Espb%2BMcHcMsGkt3gDtoLZLWYjZLdPZSd6bKBsGMlNXDotf0DEfWfhoFdzKSpIRXFngx0edz%2FpHbPuCDim2MYhkXQq2XDH1%2ByeFcBnMMBh7n7Y1En3OepJvUFZUnn%2FyOf2OczWZ%2BQxyd1dQjFY6MyfLzrbmZ7cL36bBGrSdmI7YbAPDSrV9UC5OJBjWwVoXNUCCMkThcnwvv0H8ab11PsF6FnZ4kfWJtcCWsbYRUjBgDq%2FStvEum9kaXq4mMThzBOQK%2F9yj4vJQsdLwCPydbu4875jblYVObqh8OFA5WcsO3%2FjxpzhF8t%2BDy3SWhlORfg6rAf87OA50TGQ%2Bt4yKyYG%2BmV0bzI69QF7M1k1JAAhu5fje5LsmmJIrjI6wxGbOgM4dTgnURbEdTUgSQ5fLWD4gEJUmzZ7HKopPCNRKoInn0JcIE1qhLZXxgo5ENbPwWidqC3QCwncQvNClISoAKTymipQJ5cx0O0h2uc9y0HU1ZbGo%2FmotCrXMIOttcQGOqUBPUMXLfXbf9Fo9TFuWTpT9%2BuNFFcJxF3BHHz4LFqXplE37Ik0TR0mIcI7qyzJnmWpQR3EJ2XMBiql6cNr07HoOAU72Jlnn4laA%2BgrEhEDGjbmr9U1KHUgBmF7Z6hdKvc5JdRjBRNXChRbar7nMuVmANUQrL21nIWp8zk3nJZOR00hOdugd%2FjJ3H1jrE%2FVJpnuOjlvrmINPYOZUxDslMXujQ4nuwbD&X-Amz-Signature=36d6baa0fad61d0b352f72b8311d0b6c95dfe33f32277169a329362ca3a1c29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=b29a2495d07ff33e94b4cf35e19df80cb13ece511fa98b3b8ab7f787fee0f57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624HVAV5N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClPmVWALVyJThswwkVRKYxTdwakBe2QaNPKi5Bfsvj4AIhAPnNIIiw36XReLjFcpmJnRwvcf0biDApMyHb2ghkf33QKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj7a89k%2FQa%2BRtY9Pgq3AM9BehA%2BJy3HuzqxAJb0CaHgvVjLdLYQLSrxOqq5MILrGT%2FFH6oCAfIkdhZxLjJZP6mPrgqpwwRfBjDjd5newmZ7lt6QXOYXrl08DvA7gv9gnM5efUELouwLPHEYdfwgEmkssWPjayOHviMvaQ3tilsEEglI0hfH%2BSgx%2Ftc9IEZlWVXxzCKXYk5PgfzuZ0sXoqj%2BKgP%2BpiTyUWDfgpBXhaf07oErsJTCm84n2ZNMkiVxbdWkURyIg5kexbdzyRTVL6HdFiUGNsVhc9OVgz4l%2FtG%2Bw6P443LJKe3onR0LW1%2FNnDmnlhOc%2B%2BvrTAAab6WAto0Z%2FLHIB5S856CSAw3%2F4V8LFIk4XGuUPEUMsuX5DH12Ph8YMyy97HsqCmtD21Yhnyy2IoGCVj9kuzFyOgHOyvEp4t5wjlukqdkKnEvsbWLV2lLP6%2BrPPsE2ymH3PgMAUDdvaGgBnKttdJSsHgAMuGzqd7uuGiDNjXrYvBFt2z8vsSvXkSNDrSMU8r6Lv8ZX29EcTKlzF%2BZpz1PveR67hSCfC6ZXD%2BVDloxeVBig8mBjiaFn3iAMD8QOdtTGr1I%2FJYXf%2BNPl61hCVsPgFl8LgOqIcSWTk7AFK49zMJLxxJo%2BRDTG0OW0NiNi9QDJzCYrbXEBjqkAREN%2BacboJ0Y6Qg69QW72Y0y5HgjtxF4GpiA%2BBvaNov4KXR5TTAcVFQCzPHvn8tTFjVivKlVWpX%2B8aPBDURFQNuo7Yt%2B7BCdkyvi9FKAiJauDfv72EMNzkvbo3pvgnfKtb%2BM%2Fxmpbc0eiY4%2F2T3qjh0AGXx%2BA9qqZ33SKEAdL1XxWRLxzsQtV8X%2BK6BcdIHXu1IUAwcOxrLC2%2B%2BkrA%2BMo0%2FlIRDx&X-Amz-Signature=e713f534842c0e976489aceaa6f44f7d82e4795f13fe5d19bbfb0d4ecba0de5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=b70a90b3e927fc68f6308fded8df966bfc964fc5d001d4ab157f0c613f960f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TE2JJL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTxoQjQBvDL560iiRJOV%2BbG2r2UVYOYLkrPPyCgcBNMQIgWYYHP6R%2FSvd2QbVJe91Qhjssn9LPuzGQiTibr4Am6OoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr70mW2camGDgEuxCrcAwcItz1YdIhs8WWdIbY6EvS3Vwirz4KOWYO0ZlzlRC%2FRhfqaXW9tHV5UZZqBpIDaFWZPS0%2Bx2IlCVfGCAOwFP44hTeDd2o9axB5bzMrWe%2FJjU1IMKn0WElmI9ZR1N4Oawdy1ZOqgVH9m8GvShZ%2Bt4HbW%2F5iGxEfhodL8mFEEIr3EeFBMbhWKdqcxAnfbo7JtOCgtZgajsShwQK5tdiQZjYIEn3yjvI%2FziVdlyMKe1g92Xi0fMKWwje%2FYLcned7kKnZn8%2FrF6X4LGdcVkjcOSsOGsiNkdJzK2SLFM1QAfZhkolFZaUxoIwLrFlH7Mf%2BASuWQSR8B8mzo5N7X1O1tTdwZnGEpYLiq%2BiETdA%2BHKr%2FxudskLNwtCbQ7rlkg%2FeN2JNdaiXxM7GHTicafUZTBudctcutuX7kEwWAwaN1hVK%2FuCXMqgLsuOyYP3ToYUUvHXKNQ5RbrqhEwCtjxcglsn9mvBTSNY6nYbPSPEKCL6pBIPZumRPLlBYqr3lnx5k7r%2FjXgTtrvVmVXcvPAxDQpme6ScbRS04e11xABjp8LrrvGgKHKYgVv8NiPo4wnlO7wgZuxdwuw3jkqAXA4guc%2FDY5uwk8BR2iDShu0UZt6IgGzaFtdUYabRig68a70CMIattcQGOqUBHbK%2F62i3aCJC0e4imhih3oX7j3xnPNejv%2F8yKuqAb8lydsuRtS9huKYfK5KKHb%2BfQanv7z1ftCbSv4X7lKQuuHNQxiSB%2FvZ8Rrsvgw2hb6ObSZf56cctNqEJ16rFtqHY8RvWhiMTWbrCVph%2FYP49UrfpgrOGpe9xNIh82hbxbu8wjqVbQxIAnXO%2FSpFHIELYdfuhbYN%2FQXtPycMxQgVKUG1LZt8z&X-Amz-Signature=907b75a3d64991593021cd8ea3cc08f8b63f31806e9de7676de71bbfba60d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=8b79ccc5d8e36ed08f60cebdb7928ec82faccbffd9736e2a47e675ab898ab6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFB6XBT5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgM51mCTUZFhI7VfKRK6s5BQZDhWyZI6PGuLrdsLyC8QIgAQx9wjkzCOPhCifRnLIPVPhwepLDs5EU8rrn88YNZkUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBt8DVQGIQS5V57dIyrcA9duzJ7DgAIi5%2FX7TTBAval%2B85x9VArdrrqeZzpPpvHz%2FTdpibnwhDICLMpKWErBn9ccKQk9QT7%2BLKHvgSW5Lkibg7bibDMwpBD%2FoOkJRk0PJ3yxmCs42DzS14kFW8QJzJEVgU%2BMB4h%2BKHtNVKMwPwX3HwQQ7YJsx0BpGV5ENLlJEG%2BWcTZGKAxJOg5yfXc%2Fp6TFTwjVzb3g7u7%2BslaWuwyd1N4szeObB09lTUpWlBYtqfwFKTBB%2BjsS3qbEiNNaYDMscXcDPQlHqmrwZ%2BeETkkg0zYAMp6z8CXwjJx7EZS56B6dWyEbOIp8GKZvNwpghjUQrsiwZ1y69o2b0MdAYERDEGc0w40HazDaf%2F%2FEEfa7cncDXbMWRU1yaN%2BWynu9k8aa07IxqRDCM6%2FhD%2BkhhjVVNLctcR8LDYYIHRL2cxWB%2FzF07QQYV55Tdu1DXCcX9NeiHPzb0QNPz1y33oKoKlwTkdq3H%2FUXyf5II%2BuMf6XOec5s6cYAItgjYec7F0FvJ9KL4SslXgrNhVtbm61dXokMBHxTotgtNlmQmzSXd9BEpVN1sJ99EcE5IpA58wA99BfjQyBFGt5DYs8CmoHJT2og0rc5IfuPPL7bf2h4Qqh%2BCs7RlC3EzZZ2RpolML6ttcQGOqUB8R1u0ghtkoHmjj3KSjM9Ep1wT3%2FkD6TzUx9lFECoaQwmKeZW8IZfQyc3Q3N%2F%2Ba6YpsFXMgs7GW373UVSmtz2papvZLmi92QIexlrr8A8Do8HUcK99m8xUwXOhZp3OroWxHTFZrEwRFVQqEZdr5AfA2%2Fxk5%2Bcxp7JwdSDiinFL%2BoLTlIKOX3ztYCHrLC6nqwE6WGVFV1dWhrvDax4BhJG8WhGu89N&X-Amz-Signature=4c9ebcb3e685cd9d0059967eb7b53e2a4fd5d7600d265d0c251bb27228ce1bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=be671ead9b9f647f0fd33eaf9c7b464cddd2c09bf4643d206af62339f0f9e011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDOX6PMJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvaOFuykzp%2Fb7rJkuH%2F0z%2Bq6JD0ZVpNR3RECCYkbq6rAIhANZLuVYKKLkH59N7unM%2BsMRGl6SWH5V%2FJhvK9lXZ52xiKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVNYPuYAFXEi4olToq3APxn4ca2V2%2BXoTFQXxmB%2BwqhyDh%2BMWdb%2BGckVnkTjRqvHIjovMfs%2FdAbfNG88wOesKMaXj3OaFu1QN%2BoSsrOHqeuw4lljuv7AM4Y58hbVpNhZJ5Hhlww4JP5mzJ8GVdm6z4O%2FAh7dDvQLsD%2BErDJFxn4Tqvl%2Bu%2BPIDxvopih9wkOMpw7YKFx1pTWvt%2BxbR4coflKLfxHNM7ZQSyv%2Fq96C8IfpwdRUpACxyrP26saH2T5ZyFi90kY4M2gowRDPjc3bE84px7kHF89KZeBKqfKAu5RCjbFZS%2BPs2Q1zTkyvR4gtitBFVAVyT1T3J01D6gBNJQ4NBswgi72O9l78CYwoy3ryvi7jFcEJps6NLy5snrGLhf6ZkmEotKPygzuBEbXtqBq4iKQuMyjx0mRCPuL0VCzrK1MCxTqPP%2FFcFF2U26OF3Ba4u83gXd0k4xz9lm0gYh8rHCiebFBAodLXve6NLW9deOlwWVDcG4rKsn4i2oHLteMco6wuyRsvsja3EXxbIdVKJyIbX5dZpkHNvX8NYl6yJtwHxRzEJ7MNWWKDQZb8BlAMjixr2XswBllydSBb%2BvpmDeuw1dDyyvXFARrjYNn2saps9TEHaE%2FvLQxLBodLlnqEszBrnxHaNfVTCtrbXEBjqkAVL2MHLi2gXcqcsThXYMUqF1FDwv5LxtBT0GsvNpul0nvWzU0rSo7J1JckP5cb1vqXKX%2BaWP%2F60%2Fei7CFbtbAW%2Fm6NDlK%2FFjXDFtkWoo3pPYGcR%2BxWD%2F95YOZQO6chm8AZDsabq2vt8XuZpy2cMZjxhRRq0S%2FgXUdtW16N7pVaoMeZ9rd%2F56BLCFLl8VsMnDtoiawR2qhXVXyJzYXUOpmgZIZQMr&X-Amz-Signature=97a45587f670ce18bef238c4844df82f2a625351d0400823be42415761333fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RH4QX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICgkmNIgukVExxZrIzdLSkoUTxL9gGDqaC7ciFW3%2FuLxAiEAmuDTYS9WWSAMY1ZFsea9m%2Ba8z%2FuMqUM60Fo4drGfc10qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZG2%2Bt12lL02ZKU7ircA%2BXErRM6As167OfqjtgSjIPYu5qB9F%2FZCh%2FxcarRCGwSqAKXJvX8%2BCRll9nyxZi9aQwnxFTdUOP3%2BgN9kkS%2BPhX8bOWPqhWcnVfR27ignc%2BDkCdl8jWnN7Aa4xT5aMloYZoZSUOFWypQ3f2QnCfsMcTB3hh8c71T6JRoyv3zvURKh0O1Seynow%2F52GaEOtPBNSFdw3z8axj5InOwvKpMPNKYXi2g%2F9Wwb9tSAh7t%2B0c3RdA6d%2F%2B8fNC8cBMnmh6xDyb9tx6N8Po3vHkPbV2bqntXdEi4G%2FjKP6%2BW9YArPGIh4OXpo%2B2m7xKRW1v7beX0gYRs1noIUhYbJCyyzwPPQDW4KUjETGXg3%2F%2Btw%2Fxud7GXAvLya0Imtmphf2Xs%2BCdGPKR4albnr1tMUTpQkMYURwYvKcK9bs0Rbx%2FzVud%2F2BIFA1QrnaQVNZILLHaUkzm3lMkeLBM%2F7D6HvvxIw%2BflURus4Njd25kL%2ByLdoPdg%2BePofeKJ32ZdI%2BOK2cBlxkLijETfzfRw6MlBz7FtUwUTqJCeP381Wk0MA4qs3yz2EUW3RTNyuj%2BRwBq08Bvsu6EfH%2F663fHD%2FPrBfUItS%2FAlf6jibgtukzEUE%2FzlRgOYuqcQQ1LnKwP8iY%2BkRr%2BiMOSstcQGOqUB4bAA%2BcLQfzJimJPrWTp3g1bZXpxZ0cFEqOzG57U22t62ohSQHsqD6nT5enw0plj5znRyn9rtHo84i4dhClziAAqgmMqvRNlUVBz3njWwysoyWKLbObY4KZwS71pf%2FZDYheP5tKphpGuRPsXFV7zW7nP2Gb%2BADdAuIQj2RasUsDXXIO6iyJOI4cvG%2B7qy7%2BIG83gIrpCMscDOrjt4scLOB6YFZOwg&X-Amz-Signature=f468981e79fa42d389304af9e4363dd660590a15639ddad73e10a94fc7e15d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
    
    
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2b32229a-e084-427d-81ee-b5c5ba654a40/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTWD3QQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC5aZzNY8LOeXhY%2FI8wb8PdEEj6pSHvxpOAkOzzh7yVAiEA9N7yyvBH2%2Fr6uoGzu3DLISBnQwqHbjggvP92UOar2%2BEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI4fof1Ua7rowWmpSrcA6LNcyE%2F7g88j50pbAsLa%2Bqt2MXNP0i1FPQpUpfEJfJz94khtLWGcKVwTF%2FrFtDIC9QTO2AE4ZbnjumD6csiE93wQF7%2BQHMaivlpQR477wJeB1IjIRR0W1j4avQY9SZuaL0%2B388GjPw80CxKryelK1fAnmGF%2FpG3mBt2a%2BJUXpJA26CGNiuMJGr5ScESPcU64CNql7hgRkK1DynD1QWzQXbTJ6AfImytcZMuiDcj9%2BDv%2B1XSRNK4%2Frfz3WeFgxRsQ61mpTuhfimmeBazJtCQYOHWFsBGNnlmNUqjFfgcsWs7sAGmKPWLtKA5r7KDS7QdeLY7UyBWNEyhitZPWJy7JfXBRIcmeW1lywASRlkol1vjjIfno0rILAciRnq3CCDnhnQsk8HGksrtgRfwDxjggbm%2F47T0VgX6xGHV6hPqVNWuIzTZX9nfn31ST7TGmDKMVeRgcxtYrif8KsHqTLNnptl3wFDt10nWC%2FbuctA4W1V0obxUYf64SZw7J7EA8H06omPj1zp2yXPawjIuovBI9jB9CsKcXvafbGiHljAO9NYIJnr69wnB3KvWe%2BW0es8jKcUaCvmOdE1rS5xl8azAx6YrLIxKXYUzGsSbcNEH58asuw0mRqdR0%2BkkS7oPMIOttcQGOqUBcbOxfx%2F85adnNsvH3bG8kBZhSQPQdyaF8JLKFq4zeTArPmsjJSgDAIG7auJ9EpJVQpmRXxkthFtQ%2Fua%2F23H1Ar%2BRrW8WkPqj2CGAaEtCMaHdL8g0GOOl7pR6EfL%2B1Mz53hAPigrWLRnMw7gjmLMQhkVw9EX%2FY3NWvCQWNN87rJRc2i7NfEOcXm5XU447auN8Gzx6uLit8iyoM47ixAPLdsWJTWj8&X-Amz-Signature=3bbc7347e6b4d4f6843fad5f8af465d46026d5baf4cd9f4cc54c8aead2c21c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTFYW4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFV3Se1lvQ1CueZIkkpIAURhZQNZI7G%2Bz7njcOuQ4aTAiA6h7kfRW%2Faro1ORrtLIU0FFAn%2BCwmRqDWw7YF9UAwOWCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3qt%2BWpCQM6Pp%2FWHKtwDnzCs%2FP1UH8EIca0SNDVLjLq1vCZ8rN9Tc%2F6%2FY5ATykY1HT%2BEm%2Fidc%2FwQoot%2B9dC%2FXxmWMrMTEvWv7vdnBqpLa7qFgJxPglvQandUat16ryW1BgNFuM9R7xoppsvdrcVC99h%2FAkRkc0qWy1GUCzUSM08Tw%2FgD8DtlV6JfEMc1b9%2FGrEgcoFc9VY6Pa8YxOQXeasbI38fUmlqj3cZ29M1Y84U5Gvn7bom8NPNqjFChiu63d7M3irtPw4kFRb8gETcHLDyT1WijZQXEw2tQklYmb1tohQXt%2Bhs%2Ftux4xffJkKaai98OBobjIQltzAr5SSfLiOKpHYo4FrsGyDnWUJHKdPP7Kqzl7Cv8kIF1sQ1fPtdDCT0GqHyEJWqZIjIl%2BrVgOkDAGQEUFOP%2ByogjDVuUsuSOSM%2FwgMGHugEb3zAA5hfuHpShgpiFNIgZsELvl%2BV57ClXrBP6uNnHoLCD5JkW6I0MME26wuIPPOwT2GlacE4%2FAgEXRnukZl42qMh4dEB%2BZgAEIjsYd0aubt9J6hK0UjxVuHosJdFRTvZ68Bz8JBCLncl6feuwq8AZXueULLagL9Nb2Z%2Btcuf6CVJFLKdeSQqnwxDdDUbAOwcZfji0rvLtLV%2FxO5e8DI26mLQwjq21xAY6pgG5ICCAfzovLn4VQVIXuHy3d3k4FgTke%2FFvZSs5zt1G1mnumpbgrILISib%2BY15rxoAHM%2BE9%2BKbII5fYkyRVOje6P4eW0nrScsMBp3zF%2Bm9wB7eiPHbexYBfTzW9P%2Fjy2AEF2AkASJBL1COPEpLCtKBQcEKQ5nPdYETR%2FEcpvIpbjA%2F9F%2BCBvvh6wrOsHb1BrqSbiM0TulOqXM2fmoECz%2BrR3dv0gSqr&X-Amz-Signature=34b15a45e5d19733b015279bb8fb33846529feb0c47bb0f6f14d9cff9d70a2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=8a9577b88396ec38c99552615d80624b64b07c800b9f1ece93656db155cd0978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=bbc4c9e1d64d065ead1d0f553d3f05f8cf2ec19d9f981ba0d8c232d5bbd11e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=294a97674f3f5d80f9e6faa40daa42faf142ae780cf86d831d5362aa2aa5646b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=63a7dbb55e4fc58bb60cb1e64c1e7ace90e04fad144ebef2266fda6ad9d2142c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=f9f8e6a1aeb90c00d6cfa74175bda419b13a332f4274abf260ac0ad8ac3779f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=a7a05f958b9eba19685a34b14197ffc1ca27c5223f29f4e23884a051c166a19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=65611dddbbce4846d4405420c577a0742831f71d57e46c4c21d4eae405b14289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=8821ac697384564d3bf370e8500425fd27f04eee873f64913bc3b1217448ba1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHBWOYM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAG9UNrzzbgIwuLQJXbyMuoNFnUtGiZsLUdUI8fQjQ7OAiEAivm4fvd4KYr7hH7VBd2bVioDkbDn2puajgmDwlzcBwYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvZi3FrMRAWVGiR1ircA29b2UtZC8DRWq36qsyMEJp%2FxMr68CO048FZoJ9YlqttPoDi2jYKIRZyaU%2Faqf1YaGR%2FNCDlWHX4sTg68C86NREzVDqCG99HrcM81JoQxbhBzSbiK56mp2YaV1Sb4t3pMSN7ol3EgmuP2l7r86uzX4jMq5pgxUi%2B80DH%2BaAB%2FQyAYswDkP%2BJE2rO449uwXjyWtBJMlinwUMpIHN6MRZJ1pST07HP%2BEt55DDr5fU2mraX%2F3UYdTPOOQ7JmUBQd7vBvw2Obf1Utlx31O24yUwneLP%2F2%2F8Wv4w1t1p%2FdHJvYnlidmG22w20PiIyOMpsWH9aIp1liJJUb3ybmBDlIRwOm%2B%2FAPLVelqf%2Bd%2BX0v%2FOszZIZLvmZ%2Fptw%2F6ultPTtIao9ohPuXZNss%2FQfcXHS0WGao2gyMYBadrnWNTiZ%2FXXJd4dLSOJqg1PaPLUhAPU433atBt8%2BnPnDv8gHP52trfB4x1KSOPiBw4Kk6sMdX75bzF%2FG8z%2FBVrIBcuI9Vk5ZC73iEdca6dN%2FRuFfOK8X3mI5VdysMqN4ivRLdNt1fBEUdzR08iBRy4iPh0w9CMCealUTI3WxW212pEO7rCZjDV1zKTGMscgw%2FNU7Uzkjy%2FvaFV%2FgSy4GTNt%2BDQDH64lmMIattcQGOqUBbuaDkVvCUH4KhsayWqlm2GN%2BqBxFm3233843RO20q%2F5rNSHK8BZwJhEQISawx8kBEuaAH0586hwDdNxs7nyn0havl1R%2BHNvFgZ3u6O1QcsEY9YYFrzhXPEHjEfj3SKnxoluOL6dEtGULGxoruBpfg84nfn9aZOWpyhYO3R1b%2BrP2NLlygvLiCZT%2BRx9ErAw86knnFx2tdwg9Rffqcu0C6jI1Orwv&X-Amz-Signature=0d7d44d284a9101a99108daa3c11d5a9d1de8d0459639b56c744ceef20963ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
