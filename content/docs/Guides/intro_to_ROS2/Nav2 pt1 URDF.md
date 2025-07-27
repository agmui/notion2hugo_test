---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=9645b8041dd5c0f56b3d366250b7f0e923b927194aea81a5d9944d22a416db7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=37c495032842c26a56142d003ddf23ff59dcbe43e373351c9c311fbfa53eff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=51ec4e2aee0d4216e8901da587ad1b5390620468dadeec41050a5179d299a570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=1c4a4163d457b28cbe0f8401070a5ff85517f3912040b7e8585eecc15cf12ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=0d8b0df9fc5289005c01ca5b323ea9c90ab9e2fce67d2f6703fbf33a12e0b60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=91c3104a11cde5ade7997c4ec29bae0ea1f95254367966db302b01af98ae424d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=6762da1ba8f2b212db3ad1b4ac8d2a4eedc1e6d4fd2bab6bfc675dd8586379ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=cda0d1a06eeb9bf73163c4ae1759be67f2b0c7c3d34397213a4db99b4944f351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=03a39e46de82f957ee3e9f9b1cc714dafd03fada839a5e2889178bc33c3558ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=9e4ae73065d14196629415568f121f38c0f13fc3b21d033d9827085ffaf27254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=920a83a8ea8031ca94f8062b358f42ef943934a6e19f86144c2ca9bf17522932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=3d9026f570c8370dde32d7bba399f79de2ca7f55558602a9820f9599ce3feb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=7709cc2a2444d28bcd653cf168a06d6ed22c5c72a19319b938456f37dda9db59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZY3RM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCwXk%2BYMGLl9w5nRVYnYM%2Bv8r91EJ%2F%2BrPXKyL%2FHw%2F%2FQkQIgbH2QrLNPGzWUC1psFRUwFASCv%2BKeBsM%2FoYVjsxZHC6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDclcthJcmKYlhWrhCrcA%2Fq9RcSHhwwvonjuAXi5yh%2BbUWuaFU3AiaMHhQBo90jfhFPlU8Gxqty31bpttM4oq%2B0WEisGIaqEbbZ9UeVeiHnNe0nAqIMyuS7wX6xekxapV8mM2PHDUp7ze1ywdpbpeKrDxHng1r%2B0fQw7LvCnUIimXoI1lYI9gdsNtiN0wcgkQI0%2Bm1VuXDtT1bakKxhNmWt635mxMG8DbSQSoKbNL7it6oG%2B6kSkEDvWPLHi9XHI2eqPgUBOkRlcnGdNdz895mfNd9%2BLXb5dATYyjBL2haJq4OrQ77Ii8VYmewiDmj4jevE%2FC%2Fmmobud79BBLL85L8JVyGQZ7mfnaMemoZKKArOAZF%2Bv%2BhX5k72ABQZM%2FrYjtEypRpCPvk024xX5dUHPdyy4Ni0fnQi0Kwfqh8dnXtvbQKBuEQIvM6atUTmQg%2BotuDzVI2zmRiesP7z3J5BCWoGOZEIkJihbDp2kKPNw7qDk21d5sIq%2B%2F0Ch6bp%2FvWBlgWerJJ6QisJgEpefWXQBNtL2yrwoW5Rugu9SSvH5gAVL3nx6T9WFUjTiM9MHO3I9wMdPPAa0toDc%2FBhaRpzSkOkB6bavlPrFNFfcErmHnI6WeTmr3qDsXleCJSA%2BvXgAXkg2dqOW9RClmt%2FlMNOkmsQGOqUB6s7TfSgx4TfY2KBOSLzGxCi6sxPOtvO9Su8QuBP9F3sPBiGSEQdGi9qZU3%2Bgy5oNFMbTGLIF%2B2tMsBOddqbe9JCJ7wwcbH28u2bzhkSe4lwHrgsZ%2Bey2hOH1mDRvyfkcq6NLvZlgSBkO2tio7QP1lwqwIvImUzNlVcnpS%2Bf1W6MRD5kbMETl6q%2B51cCQtkp2kxeG%2BIAP4uR7Wn%2BnFNr1zVYYfSG7&X-Amz-Signature=0543dd9215ff31973926d2124c9024b1d40319b721e75e278043b37c43bd4717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKCU73S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDAvGSGjKDq07mKyGIICJHIV6KDyHwedcyVsv29z%2FpglgIhAOcm7KHE1TAM8uuPviP4KFzEH4bnm5MnQObCKSZSMoeaKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FGtUIyQd1j3jIcKUq3AOgRbXh7qTpMN%2FpOs1NJTCbi6nwMAF%2ByBktbP%2Bt1dkgW5K%2FpTQx5acOj3zcLq2He4usFTLefpYEtno0FTz%2BqdwbMgptDppnXfrJE7le%2BzTBAuSyiD%2BEW5T50iF%2FNs%2Fe8pN4k0foQYV6WKNWeBZhqcXchbNkpm2TephTbQLDST3JfW3Yxil%2FO8RDL2dvp%2F%2FyJvj8rL7nJjSUlJuehGB4gf2up6PYoSKu5GwCRfq4ZMvb8sJ1HD8KayIQfC0lKvVPOyh8AkXzb5qmTbYj2VY%2FRMMfsNBV4W4y65oiHF4Q9jfkpJx9sxiwkKYnP6P7jIALMOOjkM3Wz6NNZ%2BB2Awk5wCZUiyfKVyFQh%2FRnG%2FjTyHmK273LfisI94662%2FN7lvi3pRo8T6jvwNiNjxUCtx%2B6ZzoJXZZHx0X4eSHBbZ2FgMbeQTUglj5YcWAMXVl2rzcWxrvoMVhGuFKqEtfKpH5nLDxI%2Bx5b6BNJIM2PZP4WkEO9mqEkSq91UmZYOLr3wsPhUGvZXDyy%2FXYOcKGq%2BKNg%2BjazphZmTGi0AuTsB0k3nV7KE6v%2Bq6%2FsBgrKLWeist1%2Fw79BCx77OSIuei%2FtPBX%2FdQ%2B8T5VQ27v15hBLmW9NbATg92lQeG%2F%2FO1hCd%2FPY0TChpJrEBjqkARbPI%2B9FtAQCX7JsR3EPdn4YLjZIG0uavGXEBuVYTNwWy99AbwxFXg3srpU%2F5x0yz4TuLjGdvoQTJhmJ9A4FrSDkLk84D4kfl2P46a5iIedDt8fEi0ee8zidjDCLkZssCrVgSEfmiegv1CnZuRlgUcoU6mXvDS4DYfODB7X608%2Ba533JCQmMJC8%2BAuGMuOKG2h1AyoQyl7Ciz4NDGtG8hP06%2BQRT&X-Amz-Signature=1122392b5f848f162b1433e79a3499f443465942fb64a9c8c609b9512791815a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKCU73S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDAvGSGjKDq07mKyGIICJHIV6KDyHwedcyVsv29z%2FpglgIhAOcm7KHE1TAM8uuPviP4KFzEH4bnm5MnQObCKSZSMoeaKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FGtUIyQd1j3jIcKUq3AOgRbXh7qTpMN%2FpOs1NJTCbi6nwMAF%2ByBktbP%2Bt1dkgW5K%2FpTQx5acOj3zcLq2He4usFTLefpYEtno0FTz%2BqdwbMgptDppnXfrJE7le%2BzTBAuSyiD%2BEW5T50iF%2FNs%2Fe8pN4k0foQYV6WKNWeBZhqcXchbNkpm2TephTbQLDST3JfW3Yxil%2FO8RDL2dvp%2F%2FyJvj8rL7nJjSUlJuehGB4gf2up6PYoSKu5GwCRfq4ZMvb8sJ1HD8KayIQfC0lKvVPOyh8AkXzb5qmTbYj2VY%2FRMMfsNBV4W4y65oiHF4Q9jfkpJx9sxiwkKYnP6P7jIALMOOjkM3Wz6NNZ%2BB2Awk5wCZUiyfKVyFQh%2FRnG%2FjTyHmK273LfisI94662%2FN7lvi3pRo8T6jvwNiNjxUCtx%2B6ZzoJXZZHx0X4eSHBbZ2FgMbeQTUglj5YcWAMXVl2rzcWxrvoMVhGuFKqEtfKpH5nLDxI%2Bx5b6BNJIM2PZP4WkEO9mqEkSq91UmZYOLr3wsPhUGvZXDyy%2FXYOcKGq%2BKNg%2BjazphZmTGi0AuTsB0k3nV7KE6v%2Bq6%2FsBgrKLWeist1%2Fw79BCx77OSIuei%2FtPBX%2FdQ%2B8T5VQ27v15hBLmW9NbATg92lQeG%2F%2FO1hCd%2FPY0TChpJrEBjqkARbPI%2B9FtAQCX7JsR3EPdn4YLjZIG0uavGXEBuVYTNwWy99AbwxFXg3srpU%2F5x0yz4TuLjGdvoQTJhmJ9A4FrSDkLk84D4kfl2P46a5iIedDt8fEi0ee8zidjDCLkZssCrVgSEfmiegv1CnZuRlgUcoU6mXvDS4DYfODB7X608%2Ba533JCQmMJC8%2BAuGMuOKG2h1AyoQyl7Ciz4NDGtG8hP06%2BQRT&X-Amz-Signature=60db45bc3b4e7857fbd4997293704257d7b1a1bf9307832e9e71682897a4b832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKCU73S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDAvGSGjKDq07mKyGIICJHIV6KDyHwedcyVsv29z%2FpglgIhAOcm7KHE1TAM8uuPviP4KFzEH4bnm5MnQObCKSZSMoeaKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FGtUIyQd1j3jIcKUq3AOgRbXh7qTpMN%2FpOs1NJTCbi6nwMAF%2ByBktbP%2Bt1dkgW5K%2FpTQx5acOj3zcLq2He4usFTLefpYEtno0FTz%2BqdwbMgptDppnXfrJE7le%2BzTBAuSyiD%2BEW5T50iF%2FNs%2Fe8pN4k0foQYV6WKNWeBZhqcXchbNkpm2TephTbQLDST3JfW3Yxil%2FO8RDL2dvp%2F%2FyJvj8rL7nJjSUlJuehGB4gf2up6PYoSKu5GwCRfq4ZMvb8sJ1HD8KayIQfC0lKvVPOyh8AkXzb5qmTbYj2VY%2FRMMfsNBV4W4y65oiHF4Q9jfkpJx9sxiwkKYnP6P7jIALMOOjkM3Wz6NNZ%2BB2Awk5wCZUiyfKVyFQh%2FRnG%2FjTyHmK273LfisI94662%2FN7lvi3pRo8T6jvwNiNjxUCtx%2B6ZzoJXZZHx0X4eSHBbZ2FgMbeQTUglj5YcWAMXVl2rzcWxrvoMVhGuFKqEtfKpH5nLDxI%2Bx5b6BNJIM2PZP4WkEO9mqEkSq91UmZYOLr3wsPhUGvZXDyy%2FXYOcKGq%2BKNg%2BjazphZmTGi0AuTsB0k3nV7KE6v%2Bq6%2FsBgrKLWeist1%2Fw79BCx77OSIuei%2FtPBX%2FdQ%2B8T5VQ27v15hBLmW9NbATg92lQeG%2F%2FO1hCd%2FPY0TChpJrEBjqkARbPI%2B9FtAQCX7JsR3EPdn4YLjZIG0uavGXEBuVYTNwWy99AbwxFXg3srpU%2F5x0yz4TuLjGdvoQTJhmJ9A4FrSDkLk84D4kfl2P46a5iIedDt8fEi0ee8zidjDCLkZssCrVgSEfmiegv1CnZuRlgUcoU6mXvDS4DYfODB7X608%2Ba533JCQmMJC8%2BAuGMuOKG2h1AyoQyl7Ciz4NDGtG8hP06%2BQRT&X-Amz-Signature=79658e45098f825cb258a87ab1a0c85a2abdc22a544b26a84f5754d52bb9567a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKCU73S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDAvGSGjKDq07mKyGIICJHIV6KDyHwedcyVsv29z%2FpglgIhAOcm7KHE1TAM8uuPviP4KFzEH4bnm5MnQObCKSZSMoeaKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FGtUIyQd1j3jIcKUq3AOgRbXh7qTpMN%2FpOs1NJTCbi6nwMAF%2ByBktbP%2Bt1dkgW5K%2FpTQx5acOj3zcLq2He4usFTLefpYEtno0FTz%2BqdwbMgptDppnXfrJE7le%2BzTBAuSyiD%2BEW5T50iF%2FNs%2Fe8pN4k0foQYV6WKNWeBZhqcXchbNkpm2TephTbQLDST3JfW3Yxil%2FO8RDL2dvp%2F%2FyJvj8rL7nJjSUlJuehGB4gf2up6PYoSKu5GwCRfq4ZMvb8sJ1HD8KayIQfC0lKvVPOyh8AkXzb5qmTbYj2VY%2FRMMfsNBV4W4y65oiHF4Q9jfkpJx9sxiwkKYnP6P7jIALMOOjkM3Wz6NNZ%2BB2Awk5wCZUiyfKVyFQh%2FRnG%2FjTyHmK273LfisI94662%2FN7lvi3pRo8T6jvwNiNjxUCtx%2B6ZzoJXZZHx0X4eSHBbZ2FgMbeQTUglj5YcWAMXVl2rzcWxrvoMVhGuFKqEtfKpH5nLDxI%2Bx5b6BNJIM2PZP4WkEO9mqEkSq91UmZYOLr3wsPhUGvZXDyy%2FXYOcKGq%2BKNg%2BjazphZmTGi0AuTsB0k3nV7KE6v%2Bq6%2FsBgrKLWeist1%2Fw79BCx77OSIuei%2FtPBX%2FdQ%2B8T5VQ27v15hBLmW9NbATg92lQeG%2F%2FO1hCd%2FPY0TChpJrEBjqkARbPI%2B9FtAQCX7JsR3EPdn4YLjZIG0uavGXEBuVYTNwWy99AbwxFXg3srpU%2F5x0yz4TuLjGdvoQTJhmJ9A4FrSDkLk84D4kfl2P46a5iIedDt8fEi0ee8zidjDCLkZssCrVgSEfmiegv1CnZuRlgUcoU6mXvDS4DYfODB7X608%2Ba533JCQmMJC8%2BAuGMuOKG2h1AyoQyl7Ciz4NDGtG8hP06%2BQRT&X-Amz-Signature=dacfb18b968599553c1f0e0265e6410a5bbbbfd7753ae018267ce41bcbe2cf0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKCU73S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDAvGSGjKDq07mKyGIICJHIV6KDyHwedcyVsv29z%2FpglgIhAOcm7KHE1TAM8uuPviP4KFzEH4bnm5MnQObCKSZSMoeaKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FGtUIyQd1j3jIcKUq3AOgRbXh7qTpMN%2FpOs1NJTCbi6nwMAF%2ByBktbP%2Bt1dkgW5K%2FpTQx5acOj3zcLq2He4usFTLefpYEtno0FTz%2BqdwbMgptDppnXfrJE7le%2BzTBAuSyiD%2BEW5T50iF%2FNs%2Fe8pN4k0foQYV6WKNWeBZhqcXchbNkpm2TephTbQLDST3JfW3Yxil%2FO8RDL2dvp%2F%2FyJvj8rL7nJjSUlJuehGB4gf2up6PYoSKu5GwCRfq4ZMvb8sJ1HD8KayIQfC0lKvVPOyh8AkXzb5qmTbYj2VY%2FRMMfsNBV4W4y65oiHF4Q9jfkpJx9sxiwkKYnP6P7jIALMOOjkM3Wz6NNZ%2BB2Awk5wCZUiyfKVyFQh%2FRnG%2FjTyHmK273LfisI94662%2FN7lvi3pRo8T6jvwNiNjxUCtx%2B6ZzoJXZZHx0X4eSHBbZ2FgMbeQTUglj5YcWAMXVl2rzcWxrvoMVhGuFKqEtfKpH5nLDxI%2Bx5b6BNJIM2PZP4WkEO9mqEkSq91UmZYOLr3wsPhUGvZXDyy%2FXYOcKGq%2BKNg%2BjazphZmTGi0AuTsB0k3nV7KE6v%2Bq6%2FsBgrKLWeist1%2Fw79BCx77OSIuei%2FtPBX%2FdQ%2B8T5VQ27v15hBLmW9NbATg92lQeG%2F%2FO1hCd%2FPY0TChpJrEBjqkARbPI%2B9FtAQCX7JsR3EPdn4YLjZIG0uavGXEBuVYTNwWy99AbwxFXg3srpU%2F5x0yz4TuLjGdvoQTJhmJ9A4FrSDkLk84D4kfl2P46a5iIedDt8fEi0ee8zidjDCLkZssCrVgSEfmiegv1CnZuRlgUcoU6mXvDS4DYfODB7X608%2Ba533JCQmMJC8%2BAuGMuOKG2h1AyoQyl7Ciz4NDGtG8hP06%2BQRT&X-Amz-Signature=5bf4de31ba6a0215f378436ccda76670a2d412d487fdb609d952f3973a7f027a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLKCU73S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDAvGSGjKDq07mKyGIICJHIV6KDyHwedcyVsv29z%2FpglgIhAOcm7KHE1TAM8uuPviP4KFzEH4bnm5MnQObCKSZSMoeaKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FGtUIyQd1j3jIcKUq3AOgRbXh7qTpMN%2FpOs1NJTCbi6nwMAF%2ByBktbP%2Bt1dkgW5K%2FpTQx5acOj3zcLq2He4usFTLefpYEtno0FTz%2BqdwbMgptDppnXfrJE7le%2BzTBAuSyiD%2BEW5T50iF%2FNs%2Fe8pN4k0foQYV6WKNWeBZhqcXchbNkpm2TephTbQLDST3JfW3Yxil%2FO8RDL2dvp%2F%2FyJvj8rL7nJjSUlJuehGB4gf2up6PYoSKu5GwCRfq4ZMvb8sJ1HD8KayIQfC0lKvVPOyh8AkXzb5qmTbYj2VY%2FRMMfsNBV4W4y65oiHF4Q9jfkpJx9sxiwkKYnP6P7jIALMOOjkM3Wz6NNZ%2BB2Awk5wCZUiyfKVyFQh%2FRnG%2FjTyHmK273LfisI94662%2FN7lvi3pRo8T6jvwNiNjxUCtx%2B6ZzoJXZZHx0X4eSHBbZ2FgMbeQTUglj5YcWAMXVl2rzcWxrvoMVhGuFKqEtfKpH5nLDxI%2Bx5b6BNJIM2PZP4WkEO9mqEkSq91UmZYOLr3wsPhUGvZXDyy%2FXYOcKGq%2BKNg%2BjazphZmTGi0AuTsB0k3nV7KE6v%2Bq6%2FsBgrKLWeist1%2Fw79BCx77OSIuei%2FtPBX%2FdQ%2B8T5VQ27v15hBLmW9NbATg92lQeG%2F%2FO1hCd%2FPY0TChpJrEBjqkARbPI%2B9FtAQCX7JsR3EPdn4YLjZIG0uavGXEBuVYTNwWy99AbwxFXg3srpU%2F5x0yz4TuLjGdvoQTJhmJ9A4FrSDkLk84D4kfl2P46a5iIedDt8fEi0ee8zidjDCLkZssCrVgSEfmiegv1CnZuRlgUcoU6mXvDS4DYfODB7X608%2Ba533JCQmMJC8%2BAuGMuOKG2h1AyoQyl7Ciz4NDGtG8hP06%2BQRT&X-Amz-Signature=3163a990175dfc8147d979197fce61c8816af6550affc899cc81b36850e5e12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
