---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T18:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T18:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=42053622dafeb80e456a8927ef8a8f2039d4284b6c5821ac8c1c7643c8909a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=ddc3efc190e10e6d43fd71135a77b693c59b03ad9eff72d85cde9249dbefdc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=b53e3b9a7788a9e16d4fc569df4d416a5675de294c5399e99990cee48c77195d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=8a9e6418a4117642cc482b04511ebb30a8893d5624c673c7d23d208679045cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=3a464d7998db28e242040e5900dade2193f6172ad9dcf80fa20a81a63019378b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=b4aad5e06049fa86fbaffea1556879c05e2eb27493f1ed2400e6cb520c1e9aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=9ef261916e4c92fccd441be833350efb89d902807a8e9234c2b19f1db0fdd83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=7bf9a6bc38fb7356a690c59f5c3b89bec8a730fd34ec0ca2b362835148c34529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=63cf08278d71ea34b0b5832f67be78b56cb9ac20459966134366c0a1c4b571aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSAB3L6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB25WyLurLR7KsKMCV9QFv7pVJKK%2Fte1O%2FPU677qeK7qAiEAzHJDOJwTtdXnxHW5S%2F7KwmAZARhLw7kKH59p6zYtKzUqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtX6G6fPoIQZ3xOUSrcA5OJLyUpy17AD609DVxRtNsH3a%2FQM14vhN%2FwzLh6R%2BvmeD07CAHIJy%2FG7Lyu51AicHCxYYhuhNuYW7vARx4tuGhgqlxlwda3EcEQVQQfmCjNkA5uQbDpLfsItpC0Re76CZssA1%2BhwSmnM60uAVQ1PoVypkDOc4AggJ2FSWDAED3mQabk67cCEnRwrwXo3gs76R%2BXfC7kxv0xm4RgrjQxvkHuBmBlHmZdsTCsxXbjRRGaumMXW%2B7USgpAkQQ0EL9TwFMELEtvIATaUyUb38TjrtN8VBtnsK%2FHRz5dQSMnfp02nkh2mM5kwlDk3r%2FERpbrv3pmQXt%2B2Uec3btDKQ3Pdp3pQiKu2jxO5qTSShkLFdU0RF6z%2BZqAR6dnGnybp4Lq%2FE3%2FlArQAyftdGwLK%2B27l2a05qRa%2BBkzFIKbWvUnXP4Llp6mJabjbaHhR9u2VoYw40rzE07t7l21rBzpbaIkIwz4f0jydoNQ2Qm%2BUCu4LfPToNB3ZZbnpXcwmaRtxys0TrtBtcnlbDydSHNB4RdbmzWhmFctaF3SP56umkNvq3GDEzzNEKQu0VvifJAhtskb0EQ%2Foe%2BtKllXTUzh203NdRNxx1oMQYvyGFKJrgri3ADLSsGOMJu4pAuVpO55MM%2BhtMQGOqUBTusEMDcBLnRQeIN%2Bhm%2BUC8MU%2B8yMGW6d4nDVqmQfkdpvslryM0KbkHo0gQbUB7tIUmpJ8BzvInOZBTusUEV98Z7IZPXRQwItTiowbvGnMlSIWFJ3708BsIiJ4oxI0Eyf%2FeEFzG5c9iiudFMPCjR%2BJ4E9R22Z5izN%2FfJUl08xhvOEFWjM9ZTsHLnn5zwVAYAQoT1nSodCczYuvun3OLJLPJG0nBiV&X-Amz-Signature=8202beb0870a1dcad634d081e3d02f38474c3bd55d89603f80e36747573f7b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQKQPAR2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8A5GwQf1CJwmCjsIonRztA4asGdX%2FKuKRTXZagHnR3AiB5%2F8HxZNS5ZbjACpQqmDq0oaCxLyjfXOERYX5u%2FXQ7fyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeDWN7B4%2FIf26RN%2BtKtwDyFX7sqrzTFJQq8ZQxGBsGFCs5k6Xar32hqWnV2Ndkvp1A%2Ft0FG0MHZJ9ixQSzqEPXMn7XAKRC3X%2BtSgbGZ279F31uN8qg3vwk38k97LWsdgMrnE5Tvq%2B9U7zyE7N8p5uoq%2F02Sq6yKyhWBxycPq4hnByozns5pLPs%2FhQxZ4IMEVtB6ekT8tjSwFG0QVmGoVn2%2FmwapW35dUbAeNl6H2WKP9DkKNLlJltFR%2Bkd%2BZ73VNFk2EaIajT%2B7q84lIXU9Ml%2Fh5CM%2Fs5ymvNMC0nkdktHTjrvq%2FkW%2Fgh%2F5P6GJvG1FwuWnulmodjvHB9uYjLwFr0meuKaFyuGokuvpDQfeKv3zyUtmc%2FBell4epULZPoHpb5ekYvHHbwRbRD4daKhOVnSBjFGX4JOUVaDqmIeYJF1UgInSQmq91sV2vW81WA3Ks6fzA4Qk932V%2BokUldun95huqSJJSOgHkm6B91OOcCMcsDhq9gqX1CwCFhoavX%2BqicvBn3Ox9eV6pwD1uQopBCBUzW0KN8Eq9jaeYwzbPLJpCxsOWvdMUsffDQhnABUIcfkA8XYLp084Uzt5CCFq9Ru%2F3jn7UI2MA4e1Rz8FWZhFIp0QaLB7Hp4WXisaN2efuWuqVQTeFQu6DwF4IwsaG0xAY6pgGeTC9fWDcdcwCYJOuJQ2jexK92lWOROZ8XLgBdkYlsqprjb213rZg5dGpwNVZcOAwDg%2BC2BIjga1JM4iv45aF3k8o%2FUtHoOpA%2FIwYhyqpRlOlhZQw6Y1ONmQ8Hgma0HhTyuE95H1v8wLvbx1tUVxjUm12ZGxIx79oKEADbYsh5I9srRupC3Y04ngNRGLgwE1fGwXyBJFMOWXk965adnkYnW1ruje3L&X-Amz-Signature=190e39b92f94b1b043478b397fc9aa5073e3dd7c9b7a9815a3faad6c74eb431c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAIC2Y7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfrO%2BL6VwlXw0PgSxVpcqKXnBn10Zkr%2FPeCEadfpOFuAiEAtdlaCcnel8Q8o302VmEv8lhMt8mumjSPj3PPZdg6l48qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLL1qrUfrLY9CEMwSrcA3qz%2FUSpHd7UbmH0ivLJfPvPvZ5NjRnQDMbMg9brEm%2B%2Fv80gNRf2voVXpxOun4PZA22URTKtD5ToyoE9cFv9aqx8MfT2T0xh4P3VqEK1fGwfq8oh2ir%2B2MhTG3eHqP4F6aWuxocwolk29giBco0J2Tr4YbCGy3tJTU66J%2FP%2B47TIYLKqw8laGeR44jY6efc%2BMj5%2FXWi6bfvp%2B9jaUmV%2FfmVe2KgzSVPD0ORnGPth6LQB%2FGm7ImgLfE%2FDe3m8iWRnTEIc95A6AtO7xp7xSKu5YD5jgbDWLEGl%2FT5YWgM%2Fhho8tcetJr3Wm0rtj6BIAvWPOrsUazzWerFaAWvJWbej846nbD%2BgZ7bo2Kd4%2FMpzWi1N9xNFktsLANlH%2FIQQY4mATFK4q%2FkgavqrxYU4IWQHbNmPeD86tyOnUzW6ZivMUgBcAxyftOt4cUZRKAKM47JKY9jgKiWzf%2BKQp7oh50fRWaP9oP%2F21H1UQNoZtEg3oelMvVUlxk9KKK1jx24Gl%2FD6f%2FRtwpe7xFMiSbvu7Qw5G8Y4yyb6ggyVdeo57gsfqK%2BkK3Hmg1va5YW2I5%2BZmCJI226zQzkUzpCovNPDEzmjld0L656Z0puD76uq095xx1SxEEWE%2BGWa5e21BU0iMIuhtMQGOqUBRFrn2wXLFTR14ZlEWcxS6Dn4LjoP4j%2Faa2%2BZgDPYwmtfEc8p21aVjhS0KPzBEnKE4%2B4Fzov6eUJx%2FN5EatvzzzFzb3sL3Xr%2Fr4Ymoe5nxtnq2Hjz7f2q6wYiVdqsARwuBZDpQ9h%2FX1w6W81K9bku4sn9xvVBlytVzNGtnSRA7U4wQ3MlxoJBXfV0S1HJ%2BTlTiJnKXIBdciMbzVdL2a7gnRUChyaC&X-Amz-Signature=3c6a1314e02e73b8cfcb9680f7154f5d656ffe5a695e7d16bfe1fc93c2291d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=58ff4bab3a54080080310aaf4ef29df5d9fd297072d6a2aeda37cbdbf0e652f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=fd25addd626956d3d228aa4ba57eda6b891d8db434fb6e3e408283987469e9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=ee21c8e3e0e410b51fe6d130023aef1e86afbc160e533940c8cd538252a71e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43BVSRG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDyXL6S1sMZDRWUssZpye6xaLAxRNfWr5SuGoQRXqLBAiEAzk3Mfuwbi4W4LAwWIT7Qumh9iARc%2F5WvcgUjW%2BbuvvAqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUo2ROWlYpgAoy%2FgircA%2BxuUEMpStp%2FFN4jpApxZS9%2BeimA1pvdmggfN9EoT3lTDj5HPRSSeAL%2BQbI0jDsNVZAORD1B6n62p%2BJRWsW4%2FM0%2FxqtVwyHXHcKrZ%2Fn3mpyolQPq5PqurU5NT373q62X%2BA3mSbKkulI1stf%2BD7gHgIoKh9RzxNKGT25rNjTzeHny4CV0ldV%2BBlJHshhmSppM8CrmyBZga8XWWgYrKDQDBdNls92vokVlYStHmWewvMyoltBrufZyEEKSUkJGELUei4kh4DLGJccjY413T7qKXJIlqIaik86VhYMDtY0WnDlnbjBgF%2B%2F3jE6dDKbokXN4E8hhZdy%2BZwyrVEJbE9iMCdj5yex6lXK%2BNUDfP%2FiF1pYaxoy%2BZDsqWngHg0gwsjIX7rNm5O%2FJdW1JNmPKdRv8bryumF5%2BTao%2FHlZt2RFYJWJ5sIhyKCXFyg%2Fvp%2BDefP85OFWs81WUoGYXJcVaeteY3iBF2GoDsnC1Y8pUQXBSay%2FNCIFtiEEJDpg%2FBO5116V2DZp2pbpF7sDVzR7G9p33xvaHaCieLG2gQgP1P%2FmlutiMURjoa2DwMWcmSkNy2%2BAVWLteKOiuFOPbnAcu0hO9IYTpLLh9WC6jzw8sdB89pu8uKQtxQNEa%2B%2F9a35PBMLihtMQGOqUBwTsJuNduCI598mstFGP7EL6P7fibylFRjDgXk0CdssHIyeQgOnIJkxqmaGO7IJE86whKLqEIfdTdwNMrHo%2BKKeeTJ%2B5jK99lugZlgIZPfTP%2FfoSYG%2BMkzVbpEo0pPJzD3J%2BhxVJC7%2FGoa3C33I8oGqAsVnLtkrU1zZFJzsjmurMhSbzvsNgo1uuSmGwcBwxV95YF3vthNt2dIwfGNf0LNKRbOhyr&X-Amz-Signature=7d066882213fc4efc2f1104e3c114742740771fe7421489d4bd5e579bfa4971f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=2ee2d93bfb474fdd4e27945cfecf9c748a0a3ad792e84b0fadfeceb8b372d44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=e5235ca0ca133c9a56b71ba91fa7fbef311283722fc6116237ae13e2612151db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=f78c444ac33d0a03985a16c02b1851d625b0add872a5dc67730c8661fdcc0fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=d109f5aea440c770573f9eec9c574ed5d1c895c502ef48453c182e652d138bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=7ee33c14df4e6b27bdf2cf50f5c95ea3c3052329c8b8986575d2d107784d2fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=07e27dd35df621e93d48ad113de636f9fa9784596e1cb385a315ae7660675a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=bba51050e71c6e687e95ff197b064ad4ebe41d274bb3cb5540012e319c7912c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T476DS5F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgFGpYaCbP6IxNB5jr5LQfqn%2BG93C%2F7vaemkurXCb9DQIhANkiOMJDGIlAtwNDmmyAeVUQVAzpv1GBF1NjiggC2K6MKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG1L4YnGJRvvPXZ0Mq3AMgRkgFhlU%2FKVePrpYLs8k1bhzlxW96bg6pJkcqf%2FIxqdJqNuOy3rgvzJlHcczymJ%2FKXLMzl843CFOzNZRZqv4PWKNMVSLiVjM6w32LQBmbbYS32F%2BDvWz4CqOj76opZ3KqnKKZ2etWR2h2y2hP6ahlgXdtnJRO6x40FO%2BoKvGUwww6%2BAPKI4FIXUFam%2F6lcrz1MqOSNUQGcIx%2FTm%2BXtzTo438F1GGCQ5ma3BY1vFrnm0SbPTAwZK4MMvHl25l8rOLMxeb3EX0wJ%2BtaiPPebLFiLswJWwLdDbF97XIkHN%2F30peQ1MUbImXkWPSF39B0uRda2gQ%2FsDM%2BmyzxnYoalgf2Isgg0YyAze1063apkfJsWcsJrwksgrE4PW6zMUyAJE0njxgKUfJa%2Fz%2FfA8KDst9de%2Bb3J%2Fw896MZS%2Bo%2B7mj9sy1kElOdZrBl4C%2Foqn61S1DmkqYYEheNCsEl10vSDhO0w4r88cMor%2B72rSgBmFav2MrxE9sqCNQKyLAQMg%2FD28PT%2BZDIzP130tg%2FxXf0lXDYonqzLJgQ1HvW5Tm%2F%2F%2BnB%2Fei3Yd82htQHLZ0TxxPEnwwvpdg0nkfywic2GJD%2BVtPWsYa6yuA1qZlk7ryCGjioNb4eoI1NXPJpk4jImTCyobTEBjqkAbrBiGsz4T8scGFVH7lt4nfZWoR9zs7uxhSJbHz2CTROhnkGiSySVHirmZ7dyrS%2F9U0CIa21nsilSwkUxKXipWCU%2FoINq%2FzI6D%2FnqCehcFSq4SoncBoYh9WNfwQq%2FHcOysskKMjEC1Q7u1%2FSFoK1gkbzmPueY0FAFGmwgVj5awW6HgSf1rVHWuvj%2FUbiIXmbkhyGXk1cF9phB%2FCZJ%2FuPZOGJmWNB&X-Amz-Signature=e10b13ff71d0f01fb0d7cb00e0d156524b92390cf1dda7a16e05c2d89019bc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
