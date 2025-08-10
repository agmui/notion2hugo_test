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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=783c415c99264b87d5963aab842e3861715d10a6d6c5cb98770cb3750cd8dc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=9fc491089ee30a0fdb118bc50b1a7d73c69fc92291a74975e7af1fc61b87bbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=06737d69e3c157df55c22ccab0c59fb6ef38bb45d58cd52fe0e2e3b26969e5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=34b3af2d861665fafdc2cd63e90288b21b05f2bc9d66fe3635adf3012e8d0591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=df19ede73bb94796f8b34995256e09633291e44a272242c0d959799302b5dd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=8ee963fe4817de664a460f9937d023702d5e000d09faeb3795f9d839ae13bc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=02cb4cf473eac9ff2eb733328fa70efef2b0363481dd911fd8b0f04ef46e6905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=1825990df4017274abfbd3c76ade51a0eb3c04706b639f2f9c779742aeba394f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=9a7b61c003b863da7453a2d204c34d4cb95ac4d770425a9d42252d75f4a2947a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=a1336b8d6f30c9dfff5802616f350e5ca8fb511765c39ea01011846f9ee021bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MTF3N3H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDuo9rAr2FnsU6wev%2BXiVcvANWkHzSOUKS2jDNV0flXyAiAxojT7oQekGMV87iTyQrne9Qd%2FwZn2gQT73jOuAqDe3yqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FFalIwjNtNEKe6CFKtwDS%2B90%2FfSWEc3kgR%2Bx%2F8vCBVSIK60oHsTf2JpFq%2F4O6XasB8RDwZZ7E7ExwELL3N7GFWtXvfw4Vd5Qe%2BDt6VA6f9jDKpfwbBrtwOXKBqp9G2gn4YSOtjA5JOjk5ho78Xomn5Ils38uEIdnaNOd%2BIoBQ25BnFzDZgR3XfVfP98DmTI4eAXUEz48d976nMMyLvYOjbpK2G4eKDFNTRKNiaecHC%2B8%2BG7vFeM5qpXABK0Wl4tJ%2F4gXMRqmJUPDf%2FVCQs%2FOZVurdm%2B2f4gN75c0BJX9qa6WYZk%2BMogOuSwaPmtWlkrDHtmp7yZGkOeMSciwrqvzedGD%2BaHko8KD%2FO5AgJ8OJvPF1Ido6qVaCf1O6XI9aRksB%2FtO3rBafjsVINkTgWOyHa1WPDQ41qCBGMU%2BymHTcOObnBfQtC7urNHEuxB6tuSvmblDEKwBdrAahw4feOTR9I%2FWz%2BA96rdzS7GJXaEjoiLQo3T8RnH3UriRFT6SkcgHfonyX49UtRVkhRVU8PzBXnWVIhOT9IKwHrG%2FobGEniZu3IkBEehtftAOfDVXNGnftt%2BRhQ%2BLsRdxcm%2BRKRN2mqTxIlfxt0uDWu5UBc4CcfptXCZIJSwuX9SRsA7JEz9cK%2FseDQSUQvh5lRMwztHgxAY6pgHBAT0nw4Tlot87%2F%2BUJXz1DrSQjrTtROp0eTQTjRIRO0YaReELad41a4nrRF9Lg95FZMzdGI2nsW8nDAqnBBvfkqeROE4faHDaIcB%2BPD7tjlzdDaYQw1Ol%2BVKFVkpCmJzrVK5qbReAZXgDoRfZEt%2FUeVrondkAmA3PFsBu4m92z8yTa9tKP4uf7fzGp820L3gtUAh5fRy5qcwZ2InD%2Baii4slvfohGb&X-Amz-Signature=1e51294c516875bcfd78f4e5c2d290c715e33b2aaa6e96d78d4b5cb190e2ac21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XZZXTA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAd8vuFpocROHiFCmWRzI%2F21nu7ZeClhadfNC4s6kCIsAiEAuz4L4D3GKuIyNDX7RplNpIxyAdP5%2FcQsLVOEb%2BQEfwoqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdayOkAxICi8AOWcyrcA93PFPewz9CaEbaXyDIu3OSyyaqpqaGsX7fdByolfJF%2Ff%2BX2%2BN2hU9etKM9GuzSVHhI0R%2B6z8jyqL8Pv1NHS9yEPVZn3k7A6kmIEIr9tqHux1yemBQ9n5CF%2F8%2BAp04L1BEbPrBE5RLep8nBTsa7JP3188Vu8rLvptp9oUHNgGnU3mgOMHnI3SwHqPWdwCOg7y2waYe65jcMrd8Ch0WpaFrkCoL2peJsLSVy5H7tlE%2F1zhlh3JWGzdul1a7iOVZFqxa8f0XZ660xsomIRH00h92Kosj7ebMbXZV97au3TQGpG8D5f83O%2F3wsIaHJewn6Gx0G5y%2FKgLs%2FFJQfxwXFopR8W%2Bt9hSQvBBYJRmK772URtjtGHFD7wDj2m9GpU533Oa%2FdbEVnAFyuLfSOmrcIkslgGdHuFFJ4Iy2altTuPOAEMfmVhWQsYnwSjlXDJGgj7s%2Fg2ZMKOJOcvh%2BGRXyeNyioja1NMoELSCC1e2KfP3ZlJTNjRbAZXRT%2F0pzdqL1LcKvSSF8UIOFt07AQJT26iBLyYqHvQFCduuLDE7c7enDOffUrx3XKAUYzmBiBjUyZMgCvlU1aUjOlLu%2FkOFanwzIfLLkZDO6VF5KXRLegLMmhVlkez0gQhZfNkKE9uMM%2FR4MQGOqUB8pna1YM92FhPKCJO4XyozuejKCMHTIgVuKqm6z%2FmMWQDAb2WsCJO3nGYIVRgK4a%2Buma%2FaDHyphgO9YWKTjDFXPmlB6%2FE0oRKmNRim8IrqD3pHQF7BtZ3Y9RyloSO5N0j%2FCjSMYNCQOiXhivd14oNAmeQAUKo2fZBLIKBeyFg2NmpYLFXhJ58ixQyussENWdAO5zLQzoaL1%2F%2F%2Bg667qrqIVHyPdPb&X-Amz-Signature=115fd4f45465297daee1856bb1ac35e73c21301e59f1c8d2cb4b629b6234d999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6IBZXL5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV2U%2BAGCbGDwzEKvZSEAdF66vp06oYbyc%2F0KhJoit57AiEA3KzX2pQRgpZEE1O812WUz2fidsjt%2BYnlC2yOj5qM6e8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmgiV08yWjntoROpyrcA6JJLpMc9QsCC9x7cFDtYAa5AXoPYPb3DesCytaKSi34YYJvDJHUW39awdQ%2Bs14sSz49FtYCqY1dfz4gK7bq7%2BdRXoUPsIewrOMIlM%2FZvvSCuvNOQwsC8SEBmRaNx65qf6H9BZBw%2FDDBzDU5czuoK8M%2Fhh5gaVTK8UElCOKDQ8lr8FrA%2FlJstDxxUd3rA00pKofwKRJISz43cjM3G38uhpswOy49fYerxcgTTojQbft2tEwsQBBDqp%2B6vIZK6DfmCRLKXaqsIbNMvCZugwWvJS22jGCAWNHMOXqkWLV0fbuNo0hjevEtay3PORK6NdqZtO0btd1ivxmVAQv7kP0gFnwc935HzSoa%2B%2BMrCSTnxIVJNh181P%2FhApGtsz0KXs8MnVZxqzjKOJUy57qUkwIK9wnAxR6%2FLLVEHsAai4tJf2fteDePmxYbUDkwmLaHYefeI6tqbMNK0KnQtNnvxHIvFZHUp8ds9A9t%2FIRWkl%2BCbbjTvf4XI3IOeUOTv9A9zpH7G8xKyaaJJB07PMai0GisrDY1Cv%2FQ6UEz4ONB4PXcECPcihpEI21MMfQ8zhcqyO%2FOiGUOYIpg0T9MXl4B%2FlK9S1qNtM2%2FUs4b3aQPp%2BLLZSi08hPc486bEebM5kTiMPPQ4MQGOqUBuprEZuvPUBbey76lb95WRSpgmeat2P3%2Byc9mE%2FDIsEaJGCckWiby3dnSbbWj2WFzwZV1kAkHgdggOSeJrWkAdO1jcnhV8cMigY%2FNw51%2FW8VcZ%2BkBaZncEOvnLh%2FFFF%2FxHhB%2Bql6pIhVCU4kTjIqUZBnWSSfaw%2B%2FunadTjRude4dGKBBnzzfGC4%2BDSGfN6ekKkHFJ7AJHXU%2FjJlsXC6CoVc7cyzC2&X-Amz-Signature=c1e847be7a9e4ff8c2a2ffb77d3fb1570033493d40fb93d79b3a6281e8aefb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=ccd3d0a001450da2b4afbecccd960908913e45bfdceb4ab5ffae1b9aff43d296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MLAAP2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfmjGEWMEBsHse41byzXvgfUozdqDLf1eWzb3JNQbqjgIgEsWrR2M%2F4Pa6uzyoIxNPQfV6Gi9gNCdJdbObYKEDSsAqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKn3QvqKmJu9aJE5DCrcAwPvMCGHvLGcCts%2FF9BDYKo%2FeYZGr9lbdod0pcyONBc0H7awQJVZA90NvVREjjibdYv%2BebIKYcoeBegzlhtMrseBJn59RDpwl07q391D4PtIire7KMuLyrc1wwHPj9VzLKXScRS16Tx4PkWyfJgoKVfpfz4OnvkMWE9Zq9PumfD9KncucwZRJ3zfKx1Bbp4TLDj%2FC%2FdRRvYNVaUcM1wvTJunYbRn5%2BWEEab4Jzd%2BPiJS5axSjhUnDRITQ4fDFSq1PFp8auzK5Vj0U%2BZ1Dw5kPv3wwczyyH4VDnDYUAxr6qP9uqWKx%2Bt0C4YxDbjsLlsp6N5IiIk0IRD4OXYyFwSxc6mWIH2GJyurx5sgevXXLJOmt%2BOrQbqkPxjT1B%2Bczx3e0ZBfHYHKdwxtBbWHOXUN%2B%2BiulrD1DHh6SaJ3sCtn%2BxY73O84eLET1bebp2FH0xXAZpBn2NZJgz%2FauSsezBWAwFogns3uHDU%2BXAFo1YOqGARa6vAiJipCsGL6juDAzElUJft2gI0jMSXT%2B5O9vW9CBGRiWMPzQOb4hUtnazgnIZI9lra94WZsY8kOhZNfXr9YI%2B9LIubiyqV6rQlBAg9rj3tPFuakpKTNlyXkV43Iv8V3EsRgeJrEHaGyT%2BvuMM%2FR4MQGOqUBDaoA7MYFTWj0eXmC1X%2BkRmtr8eoLaDUt2RZcU6bTjgGvPKYqgWZDcZ87%2F4jBTsOL3%2F1y%2BRZA9XGjXW8OzJDBc6y3msju6vixOndxxajzQ2GBKIK4xBFjprWJCXn6X4ojt5kcDDBF7xumCQcmfPRP%2FFZTIeynxtSbmjq5bLgScigJcA5olljEAWmAhccWT2qmfiiPnmC%2B3P3gZDwwl73qMnc%2BqpL0&X-Amz-Signature=42a8ce48c3e8684d2387380a1ef7bc54cb1fd710bb2530db9a3a2c1602297aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=432705550056305728996b971d5f53633e0eedbe451d770968e9fc255b0e7eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7QYA4Q%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXsUjAxfr1%2FK59a%2BJER7AHAQ8mHsEhHs0BHQ3%2BHo8Q%2FwIgH6pGT3t7%2B4Ay7RymfHBB%2BdMqrnQfHmejQLqnUCN6sA8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUd1spgmmBCsalepCrcA1NxHqFxENc2mvUWk8Y9yjw9uwr%2FAjpJ9oJO2%2BjQ5DOvl7ib8VR2aHSwSHjihk4WAXSxuB4DQExp%2F0cakKzeQhmsRedbtkNQ7uv6q5ayF6hcsywBk5ehN9jheSN%2BMtY54dOEHcUkeJsssXWY7z8%2Fx0A1TVWerxopKJzRYD%2BdYW%2FMpC%2B%2BfbUnB%2FEajAPPEy6MkSYs%2FQ2EcTvIYXvIQXoPs2kat%2BPo0INHr1xmN0%2FWyql1J7q5sT7SbilBMCmTE4D5GIf60CKZHUQLM7m7Owm9L%2BNJXleTjWOiOLFpjJACTFEk1O1B8moDbXXIK65WO%2BioMUGB2MT9bRafDO4XsuKkznenTGBc9yQ0jerN2mEQO9%2Bq5ImuS4XpcWvNeWgEy1f0syzp4M%2Fg6szCgUorx5%2FWBwfvk6PtVUbLBYz8mIe86uwTh02K4%2BzrWuGKuTGeXmxcquGPBhIQDcdK%2Fqk8BMAmiUAe5cyZXh3uM2weA7HDdndgOaB9zx6uNQwOKmuISjc1%2BRfQKsCgSLUsDX48Wvpc5nNF8G8NNZvSHp80Bg8QIBhs%2FZjD14MqExzI%2BgOQa%2FV%2FnU6BcgJYqwnzBvJcBISAxvh1qMZZ1yBlIqKowVe5J16XJ5MFzEk4gUKqpT2mMLTR4MQGOqUBKUoOekXYwn8je5zGxVVvgujIEQ1fw267k3pRDLWnJomb22ab4M6zNYbhfh9EteN9R0aX%2Bjwa3rjo8sT9vYqdtuMWlM0OD%2FFhWssiLrG1Zyslrf5rTkyDBSoyrbJCtxZrp%2F76d10lpSFm8lVI%2B8DfCzQ8HBcDH8fw84mTlux%2BLlm3IkAO6dba62L8YCzHWi3EbL0G0VssibqXHEVrtq3Ryt64k%2BFa&X-Amz-Signature=35d8dcb725a7ee8044b7361157d48887d0b39d3b519e4b5886af5afd1ea851b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=399e945f69d8f823c368b0ea99fd3308ec54d2c6c9e8e3fdfb0786c11332246c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ASZ7FQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDZx4NznGac9J%2BEiK8lCkEYi1P9LOwwHOKOB3LHKr%2BEAiAVlqObxX7cmnKkXP70J7pdQGACwWTR5uwgGpQUUTletCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVdjqpD4%2B4xrdCLvRKtwDTnxzts3Q05Errr7qYfqv5xwREwWSu2%2FrLMmKSZuJhwWs40XKT1uWW9u91UTFzqSO%2BmFIxJ34v6TrBss4fsmQz2ZqtJmx54kxdj0EhZ5KXBaCjP79tuTadBwwLKd9oeks0VjQPR6sKpp1xS7XgVPYJ%2Be2uRX9nkOTbCCIxEioDE220Cw660OllwZGfXFs32z7qMDAgfvAOipYUe8WhjhyyhTtcvJopGMBW20drhIYJbcs0yuwtpysSxdHI%2BEO2TfszVxf9ev3PNLz4K6QY0KYq8YwuQ5yYtOE7ne6AXgXCcQCTZdf4Id89FRMEIk4aGCrAdCXAWHeLjT4yw70kn5f6RFcHzU1WcoT0T7Y3DoBlnIK3vWpCYYtVXPfkq2hvoh4gt9yg3agqYpr75fMF9IpatcSTxRog%2FPef744UmoozIm0DTFS2KtwsZJvRjgFmRLJ4Fy%2Fwv1ApjPStZTQsEDwsHRV6bzSuJ0HnLENUNE5IuUsgzekhbpsjNuUEKMVr73aWp1SVbzBqXtWB1rH%2FOKvdmo5%2BsRo%2BuRGC%2F3375IJ9nfo%2Bf3VuiJ9osQji1oYtiyffntTkLbbuecdoagPfQEzZKoDP7XqKTqrn57%2FmXUMjZbL6hNzX45BB8trn6Uwz9HgxAY6pgEN%2BXDgO2uFFYN20CswizSOZEY%2B6%2Bku7PbmP3wfVgQLw0lJqmaEnocTIkLqhORgESeN0tPplDUlaEbGz8TYvwpSYONsC9nu8dXzS27vK1VmWhMBnC3rIj8ernKGNGeAC%2BXhDBxwMr0JjdugsT8EWe1nFPXQlq7tmJC%2F1qU1LKvLscgV3RtYKUMZkLHkvol2C55l2x1oT4u8WjBJrZSux75HN%2BKeHSwf&X-Amz-Signature=689f96353fa4c40fd93dfcc7cc255d48077e7433309bf7ebc4f947d5357a8bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=8ef9c181250b57772fa187cae7b5f7cb427f80640e123756ba0ce9423c1f2d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7IU4NTG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhZ%2FQpXW6l%2B9Q3pYJPCNxDEp8bdEX%2BKtR4FZRjA6mIFAiBrapueW02n%2FkkZI4o3eGmX%2FWuUaKbIoBuwcG%2F1Pq0e6yqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9YIobBfs4w7VF%2FgLKtwDyhUXqgv2W12EzoVd0dvpCsUm5Y0GHxG2EEkP9j8vEoyysZ950EJ6ieqDVH7nnxQALx9xjgQNNoJBguHNaOtsOzMSZE1UCUzQzRpRrEhjYTWW3E0ur8N7PIgsBMyAm9qG3VsIig3pYZ6Mj2lKOXhtc3gW2L5wjrnjYuSL05FqbfAW4N2QFTPGuMI1rrlbGAK9b1uezs9hIdgJSOSo7S04IZLdfWN0uQRkEgSfv9hvNTF954%2FDnt1n%2Fh57X4scFxXrh7Ec6A9ahqMj096whw3Qve0OGpjWtEVYzGeiERiMJnhXefQP%2FxvkdhcVlZbxZS2GeNRzQWS5YvYDy74qZeNoaRYIcsGxdrya%2BX4yRLqi1dhNhiQHGKQ54scE6wijJxUiytoBu0QUqTT9y9ZTmjRqk9fxz%2F1kVWKWRnIIEIOZDyGhHNp19499I4nkY9PC8XSF4V%2BTFr7yYeMqyLrYzZuTnJlE4HjpXWCqsqv6jE8FNKB6OOr%2FeGfFy8UJ5XKi4f%2F5sDDOn6YWOxcM0WWBFG6mcTTtpwojnke2JFyb3xf%2Bv7IVHEBg9lB6fBvjQQtYpwTqwWZSUUxCjK2epz2JhEIG%2FdUHPm69gmTTWjHFO9obiCK8FXbpLUqJUT1fzFUw8NDgxAY6pgGyCRvp7gV5aEE94JVoELRRT%2FWMptl0de3tobQ26kQkRghNpHg7L5PqJDQUE28sdOXR1mOsoeZh2rLk8Oxs7E13ibHq76FtfkJU75EwGpijZTV7TfsLXAMY%2FUHgExuPMqy9skmuv%2Fz2wZbZyvC4sVx%2FZ3bp5J8%2BK6W2r1WpWsEXRmLNFAR%2B%2BCuwDil6tViEpesILzwTAN0Wy%2FjOr9Ed9us2IsY4Mqla&X-Amz-Signature=b3a25f4da8d79ad54814d1fd70044476581b42c48a7c9826b9cc62073a1a186d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2PMR7E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWRBRuXsuzHxERX1wmoJROUkfG%2BZH5zLV9of6Kv6JrCAiBdL8i3VSZvXaIz%2Fe1YlQDcIXF0dohpfUuPLLKCQVVYeiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjpwVj%2FnoeyCrhDXtKtwDNbWmwraAPUgq%2BoXvkVApQtcQttc4a8OSNPtWJl%2BIcMB4Wf%2BJBZPYG1A8Y7B0%2B3dc7HbSSJPj0XasUL8Qb7sh%2FLwtfFu1rXdC0sikD1gNYKwGuPySGJ55HCXBmq8KDIdq%2Brgz5oN0x4j5VQ6JhrkTfDYBbhSnKYj%2BZi8fsa8wZD0tdrTiDYhnMCvNbuioMLl%2BbePb%2BKn6DQPmqnN09SGwB3BBBtc0dkiIEL0RHH%2Bj0ebEyhy7XXLe7bCost9eLPQ%2F%2Bz2heHVN6Ep%2FgIC6gay9AeEffvHxjaqvB3JG8afnCQ0AzQtdcpLo2yCEDnZxrSc7kLYzFgNpbKI%2Fn3D5ox2oAr2qffK%2FrOA%2BPFq5%2FfW3jnr0Bh3ge3%2FmZ4c%2FspOVz4BXGlR2MSQmXCV2namPzh2%2FZKnXuWTfx9vfinyrSCz3hlvM7hn6lxKMFueeAeU30jYa0q4GtspLm%2FeVeQ%2FerZlKYl8cZsYHEEOZ4Xq6H8l8xZg0tDNzAlcH%2Fg%2BSeNN%2BsmAG9aVF0mT2jS4Yl5C2O14osr4EmWST4N914u0rmUY3gXE8hQ7cVKCpDZbxlH8e%2F6KKO4oYtwxiv9TXN6uV6QqEhs1t7C2zjoJ4p%2BvUe80maElwBmxOH0z%2BcfX4zyowjtHgxAY6pgGG8eZlMbIeSgql3ue7JJ4%2FX54n5tMNja2RgRrY%2BvlB0RtfU%2Ftuwr6XIcXcQwR8f6o%2Fl4BXkR18U5qtjtToeuMyGcOhtITN2GCKsAhPTijWNEnpDtXS5OtAapM0Thbp4w5TWubX7dA8J3gedtaT7D7J3VcpZgWN7blA5pJriydoP8rHzu%2B3WFM2iyUmME7uO5Xk7HbYDNU3tKbTTAnFmUfR%2BQ6jo3SL&X-Amz-Signature=6381e69a9744866c646d1792762e03a23964fce13b008b97325008b023fddd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOUG5QV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELrOSphUj%2BOELO9Pw6ql594fy60eQLhXTHMPqjgqPOYAiAUFnJbw1mmo6siVAJh0RaQyHaVODIbU%2FG4%2FhZcTU%2BuByqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA7dcEFFn8jhhFOzQKtwD61jSQptLTKBG3iyaR6iUFv1n3Qnii9YWzF%2Fid%2By%2FsGAE3leKZyVtLkJXf4pw6IhsAxB4Ijo9SuhRYqYyoBOkNSbSWLKySg5gX1XXWzl5zDMCg7%2BSd5lye8VKWk1ievNP8wci7apozy1xPjMr2UEpkPHFs8Ys2wj9MNTc0XVK%2F75lbb2XfFzIX4LK%2F%2F5OruWfqQbYp%2BLqXG1zh5ci5R8NtmDz%2BDqAFkpHIJCNmCZ2cja7v44CXveMgGJeJLXOWee0e%2B8NeznKByCxgJYHqgTyNj%2FIkZ4VF1K6Xx3w21%2BYqpX%2FS%2F2G%2B9%2FoquNnBMHLY9coB%2FAfeYNiaP4b6MCZjcyEYaqCUTW2k%2FeaFtPu2i83bLFSlxw1apq8dupgk3QUNzfY4qxfjuoAuyqr2mqbYNkAPXisDWfeAZQXZPDHJCdCHm9KCoozzUi5QnuvlzbQSiu9m14nTf2u7yy5qQOffdgw4ZEVJGr%2B4htgc31V4QOfYO92WhBMXwTqqPSyEEmedQonkwd4aMXPDXAMjw7A2sn5Kfiexy%2BLkX1MJ7Gvlu11P%2BvUFxq19%2FXcGb7a7KnuhgmIac2kHZScOQ71lzhjnTNBB7hZLUXqvg4vTs2yhwVyF1nTeAIxjdfhtIKj6vgwmtHgxAY6pgGcr8A%2FM71wMFFbTQ4b7RYcayYGwA4oJfhztIa544pL3%2FwSmgmtZGqMo6v0Z41Cu83BixE4KFgOvmFu6ctl0Jnq7TIJ4eOzNm%2B39RNpzynhBCjQ%2Frd6oJMEGH%2BaqVtvsbAEY%2BR4Lm55vFP21AkYDnVF4T%2B2p%2BwA80mxzviJSEML%2FvpgVHd3L%2BdH8TUHd%2BgBY8ZbXAsVp5Cv3VnJNbNq3AJCxXbV5Nka&X-Amz-Signature=be90969fc57866d831e2bc3bb06883a68d606bb604389c593ab690cad1915df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVFOQPV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgtIolTHQnDVt%2BZd0NTAWRohdgOnZ8cRtcYObl1sAuxAiA6mJ5PEB%2FdUmruqpkOtS6BNNWsBG2S4WrrUGA%2B1qaDJSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ94ZWMF9YUur1ebbKtwDhi4uX4Kprc%2BFYoE4wOZzeEBPE1K%2BGDgWJUdp%2BUqX%2FMlz3vjrg3EKCZzqrt696VHb9d8JkbwHcoPv%2BauhkZFioGilrsw37r%2FRfjj8xBwm37mbBU%2FhM%2FRe7ghS82kiuBbdYnvnSZqHo8QSseDzzufV0G0iVDsyRnYYqaDD0Z5Yry6kdIBr0p0GsVFzMWv2YkAmOQjGTHigLjw78UrZSs3OVnIcvbLOLxfwlBYTXUuB346jI5XxELMmOHmgkLtmTUfsaNScWrW1JkJiC36mFUj0cHlpGD1mjcMTe1jhCD0D%2Bl33o%2BTClFXv9IJQoHZoN9B%2FxCtMZxgSTjE03N9AhRxRUmy0reoseIw8OJC4sqjuSj1%2FQjlJk4tfSvCzAjSWSdBWCJhT0ltitQiE60slHQdTfn7Wnp5EZStCfJI2XoQ2GLJVS8gXHJuHaLkSGnh3ZRRCKFHjC2oybVE9qzl7ivaGqcMacPQNBSZj1WRjrgSlNToahULtdwcDe%2FsNgpNwup%2B32%2Bo8edohmzGfU05QHii9DZpr9k5%2FMvwXEF44nF3tWCnJHS%2B%2BlrnqfK6AXK3rqFcg8%2BX7PrHy97GhBx4VvhGUp63CUHRkjGdn7x%2FMkGGBRXIRS5qCOezAglVW4iEw8tDgxAY6pgGxyzSD%2BBnQ9%2B6SZjBJNw8KtV%2Ft5ueGsIeXK4HUurM3GZ21bHNnTIeHTBSdAFQHZoRycSMlEsJYqVqemtbNWX7WfDmRaqhmyQr8yUGLCieYqtXTtAVqfuodHSIs9n8vOXunFWDznmm2192t%2BOB4Gs3zdHWu6mHxFKAhqP4zCWIYjc1W8zttOWIn59wZiMynjRps1MvpAvQPBqxIkQ57OGkdhNYGsd42&X-Amz-Signature=8e21240def5c4ef3acfb4bccefe3abe71056d6cf72611ac55b66ae57c795b130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LKLPC3M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn5vKXdMMjdus3qhq%2BJuoZ30oCz1p15aEyecYuGMNKcAiEA0gyrcKZ%2FWB1jyiiLFh5PCnmhaFGl%2BtKmTnspqjIsJDQqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaIg2dtdq8Ir7sUkCrcA2ZLJwsIYgZABhKujjxD7FIvrHQoS7jVu%2Bv2EZkD9n2w8mF2lTAnJWyivkC5ynUphHXHMhqNc2rn6JdEtEQwZ1fhQvxRnlV3kiy5I4cDr%2Fs1AgwbXTpybqRTqtiYaMkQyInpdrmHgkxw5MEx%2Ff72okbixGh5SUhsI7rLCpflTozLGG%2BMdouuiiAZKCe2csm5eNVcyX1ag%2BSd%2F4OGwnXPyPWzmhvkqDlWCod1dIkxI%2B9EEF7BBGT0aHHS9t3GqE16O%2FwC0RJB%2BzwowPbSbX%2B4kyRd5ZKYTLKrFUKepbm1mcHYkUyP8icyN%2BfGVy3vJG5n8rYZ70x%2FF0jD%2FFGh%2BFx5ulIDjAD37LeeixBDIt%2BKeFvtqRkJ82%2FRD%2B1LpGaL3wS4mtMWygEmgpFc5qlrH5dQ0K582yfhxQAxrbdnLJ3HxFiIUFjp5iV2QPyvbuXwX6Pn9E69xapulxSfkQdLEKdSbHaN5%2F38L0GNXJxWsYnJg5RUFxzmwsmCceLK8hkeZNFPyljAreNjF5k%2BYCVZMORET5VRodFnOT45xFPQpf6Qc1ZYVmtPjE%2BQ2d%2F27JfYJzbV6MCSas7ISTSAyNF1uGhyRLs4RJjPiJxpvujGxas1HKXYopoLebT%2BcgbHhD25MPPQ4MQGOqUBtEKluGMoMLI6Gi5ir0yiyrUkZdmnJvxVKfZ4IUqWsGZhN5WIyhVk0nF74Vz262Ua%2FO%2BzSVOV9dGwBuEyyJ%2Fp0OmoD5aSKXD1e3Zidpz2q2Q9UnQfgp%2BFSuqMtwDPHDbaGLIBYthGhv3UEQL14x4AZNghJ6L00BBrvUN9wwDJGX6mqkFzZZo%2FDTpUbPcKuIlfPJXqk7H91srnNriOxnv1MEa%2FcgEm&X-Amz-Signature=c19afbf90624a05745e68c08410a5912a9d0f2a4ba27cf6cacd41124afa72f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=7aa951ab213403756b2cb0b24c82e32ba875d2f3a90df3a5209f266d9bd71eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WR3EWJI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWyV64r8fiZQhx1l6IBZnWbffu1jXCjxvmeypn8Qf9CAiEA73WU8Tx5qxovXVzNwEetWKL2zNVtdKzb4tUU4p3PGLUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoncy9iO%2FldKCLrUSrcAyaLYmONS7j4fsUlEgi6DO9oaXHCCNREVDzt%2BUXvVxbeNO9%2BIVe3rq9L8QNTeJ%2FD%2BJhktBf%2F3RLiAbEUzZngOub8jguF854Co3aTKkX2bDVqxAp54OqcIfXlBHFpXeepnzfo3OTV3vuClNF72xotXC%2FUM1P9vL8mR6Z9q%2BplVFkVecovod4A6yPzZDYFGZQigJAn19YZovkqW2qZW8VEimZuBWP12W81CJT83ZRycssWo5zotkWB6o5LFw4t7BYLaU%2Fz2hYndMHh300DfQ188qiLok0fRSQNAZ13U%2BWrF8SkUL2OUxjfwrS3KBuZg%2FhsDqlklAIARqtBkgBbDFRfBr%2B8ZzzSEq3R0et6LP%2Bhuw6zM6v9e0PABO2HD%2Btyc12BVEKol6KRoLnGZ2PvpdJ%2FNBG8HL3%2BhR5H%2B6pORonwMejJyhoMD%2BQp6K3PLLqa6QxaQ3Cxl790S%2F4uQ4HMItYmCYSPdj31R1kZJ5Y9qQlGcZuxrRZcRXU%2BHz94JgAFo8BwaF2LCxpcmYZTJRAHhSZ9fSItPksg9NsaVQvSME5%2Ft0ZF7Zmnr95H8KPX1TjgybO11hr2rjkuTcFehGO9mSbLLR%2BBAUyyc3Dl2LBaFV7Qfqg2dqDGVnsVE2jobL5%2FMI%2FR4MQGOqUBLaydkP1FN%2F5kJWm%2BXrVzh%2BzUc0OQ808kfKn8dPW4%2Fk2YzBAKU02%2F69GDm8Y4MHBSiF6hg5DVLxYBsSEcxu5HLb201IuD8fbwYr4iXNKHtP2x%2FFUjrrjGtkzzfsm8csKdBXOmWUBmh8nuTpPV3Shz2ISPcLiVTaI96eYbgIJy1kW7bt1zjHZJnXE4vovBeErbNiTdhBWFgT%2BgBVJUmMPY5rMszelU&X-Amz-Signature=d90a6b566dcbf1652d23a5ff6b67c7c98c08fbfb14f5460e7e6bcbb62f298a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=ea0fb42624beda338a37c2e3df8a5ba85e1521c499cbc4feb912adfb32d434ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=700bb606a6ed141393e285932e1dced09e1b8c720499ebfa535526fa0e34305f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=6de7d96fbffe653080485f152482e2ef0b589bb5a19aa4dde7784bb157ff47ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=ec6dfdac287488576ae838729fb4fa2da21ace124e2407711f51ff7c29cf19dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=76ddbc8645ebfa6238445e668d34dd9c814c08e04e29c320d7de8f839a7ccc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=106f4e14e5e888f1927cd03c947f4569c12f475ce714a75b66c62198ba6342ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=6de7d96fbffe653080485f152482e2ef0b589bb5a19aa4dde7784bb157ff47ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=81761b08e29312319d3493fe917a94ede7c5fd52f5f450b066fc84de48c2b1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=82c245ea381c0f9cbd07e64ef7610db4ca3ec4c9124cf3d86001f8b582edb906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAUTQXLO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3d2CDSevigfTLinQngVAQQNRHY%2FfP0QunVGEP7rO1KAiEAgAxXaUpR%2B%2FiEOvHREvfLUetRPJw6wQD17QxFnXw5HMMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs0VZknaBFiqvBAWCrcA5l99Bbyr8mfDv%2FtnCYuWubx6HcKAR%2BeXkdwvQRaWmvoKoqfhkai0raTOKj%2FWCXpsMn6slu%2BHcB1zLSGoqixPg4seeFakc7vVS9Z8djjYzf5c6bmAIZATWMv3t5Jq5jlZ4tN3jtrZw2tXA9oq%2FqGqXxGQEvJNMZIN32UcLL7Q1mMDhnS3ld9hLQYY2G14Qfue97BXtYNCUiDRphU1d84IIFz%2F4gMe1PoNVfT95o%2FqMmCgDSoZr98ca87MyrFySU0RMsB5IrBlVyj7OFLD8xVWiToaBLZ2hM54PtDBpELGy1WoHMMeac5SopO22rLhoa5X1JRXNypdfzgvbFDepB9PwFiWH46OnpioWl5paspxI9lkC9gb8J1Mf44CS7nJlw%2F30XAtVAvGegsHG2sPx8XvEa%2FtRi1LDwENtctG0vYvgoG6PpTLRJBJuql67aA4%2FiOCsB5Z7bxdHvC6c0R0PsDvtIw6jPgwxBMajn%2Fe8QGnReKmSps7fwwn5R8pW5tFP%2FRb%2FJbQ5u03i6OibCyqqF1gQTMIYPpDG1HRi%2Bs3WQccNJzLiZ%2BGDQGckipnA9LeiFIKAm9xZyG2gUjGza2C44ae%2FQ0HOM%2BfzCVxRTW6BsOCg9HH7B679VfNsEYJS60MO%2FR4MQGOqUBUXzQO8H6dPBDlrx29QC7cBJHGrtiY%2BBXtP8WOxFqV1yssyWpdjhGOqq%2Fv4CU6t6AK5UEhTrsznGEH8ir%2BsUJgvEE8pwMk6mzCMitN1tlH97QPfwsUI0bv5WSwWchq7ZOYtClEpg4KjgbvSw4fXVnZWK4cx2XFev27C2ScfyOKCTR%2FzVCN6jR3xdBUUktaVSBAB7RZQ7xqeXm0pW6SvkAg%2FJAv%2Btu&X-Amz-Signature=27afcfebae043cb85e7eabdd2af3a90a4102a5d3f030d77e6ce10d4a901dc607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
