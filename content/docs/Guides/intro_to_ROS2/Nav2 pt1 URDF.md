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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=da07d455ab1b7ee9b95fb210e153d1d91981bae011fcb192318426301c259906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=1b26d17840eb7d0c5073035564502f664e62aa8078c2b57281a7dc4f57006c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=78673a1900872248cef78bf220195c56bb4dca3c10960c51ed8ae935afe4ec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=ab89a447eab4a1032008da37e0deb1976b8cb3f9b5a4cac34dc2657125b97741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=e9617a1740007ca31cc026e5332f60c9c7455e6263c733e0dad5de3995021ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=e67217c39bcb157494bfd22f595bc5cc875a3f8a80a8d737e7dc65e110c9d317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=b8881f54a2a4ee33ac633b7833ca5d58f59a9a4aa5d3eb09088b61ca4366d084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=fbc734a47538d83074c5e68d2656fbb097f37896a4548893fd7e06b774a34509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=b2f924d62b8a2c82bd1c2f14077a0dece21a6c753a82499b861c2b5e6e8b5562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=ea3fea8b69be1396fc079e2a368332625fbccc30efc6c56f652af8577524567f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4YMM3M%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXHIT1WAR%2BRO2kq0VZD4n07cmiET%2B0TIHnnu0CuTzzmAiEA0JQIbufWgoCI09Ced3%2FnEw66%2FRbNja%2Fl3X%2F885GiqEEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsHhx5TEF0YL2d%2F7ircA97%2BMZ8pzTJiU81OuVowvDTd%2BdtjL1d660gWJfHn%2BX5ekAIpDvkWTydQmGAr%2FACrxs1VcTqBBpzDR1WzNx31i44v6gwbFKz0emlxAZeaD%2FIkx%2B3VHh%2FEHE6B3LCuDVOPyPmaj3aEQaHdYRJfNOTZ3T0ZWva3XZOKisiUD3pIVv%2BMQAM14ELs8Z6nldI6%2Bz7v2oeXe6wfYQoAVJzDxaX7luH6F9LvXamxCsDw8N7kH1BXD3bTWO%2FsxqWtwf6%2FmIlXE1mGOBdH4sR2GWPPG3BpDjlx0ZaTNjzA%2Fqjx9uoaueHsb7Mnd9yDMgtos5amPqFykpyNxiUN6lHM5eSs%2Fr9fa%2BHSltPxQRiQR69Nd1iAbEvwsAuUQZYPyVclduXEem%2BI6D3Itoth2Wp%2FgFc%2FSL1j%2FMNpFJvzLuwCZ1RVZheKoc2abDz15rbCMhMGGwcsjDT0lZ2S625QXQr84ywfXlIaotDnD6hY6K7MFe0wKAcmFdpgKnJOtOXmI8B3zuGQI44svGnjyODBp9rtbLArQOiuYdzSCsG8OKThFPBIafCXfIzloBi61dullm%2BSYFrUGLhiMBUUO56UA%2BHDHphMTPcFHmrYEFjnCP8mmVByAnFVxylD%2FyW%2FxI0j%2BA472CwaMOKsntQGOqUBGT3x4fZUR%2BZKgLzE2i8qZiSAPVfCwqSyTsKB3kHVlvPWuH7yRlFywRq%2Ff%2FmUJZ1SLBDakG1SHK1Vy95Omsbu00t9oDGbxLgUDMWWEnXLj4vkvy06xsJ8dtpGcadVeZLCGUDba6iCI99FczegsX%2BUaiKxbYbuH2gTiRhzrtbszg1gGoFciNxdLa%2BAETLEBHrnG2N4HqSz%2B3h77PFl4KCBYWuNNWNi&X-Amz-Signature=3e461ed769fa95b845dbe3de91f496fa6e852c333f3958068a4d8897a7e16804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2TBWVU%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhWzgzPWJ1lyDPel626GwqAHzyvKIAAdxVpTEyX7FT1AiAFUDdO2xjJhc%2B%2BzZhQnOBxTshETCapiACC%2B2%2Fu%2F04YJSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2McHksLiX76bCQBKtwDc%2BWoF3hrEEkyRpxuKxrQiKAF7tGIxvQXvDGPaQ%2F%2FhoyhGuiE9TDrhdATK6xemF6DH8n89SxGlFX3ijuSdu1qiX1AtjjCccyLOd1T1J28W735alVoNu%2FvVCMatJv2jYgYHDBasLhr8R%2BBvP8OD6OBV%2BDajRDwL7NupXzrXrmsqOEWvS0i5Nmp8f%2BajCUYtpRJobs%2BSx7iAteXu4pnSfoM3fLrhapkKTwagmwOTJCx9U9HdyLHHWq2QZ87OS8570NuMCIR2GHDl%2FRVRRbj%2Bi%2FlZFliKVd%2BW8yYL5vY158bCBG9hYlCImx1owhhQI6DgmGz8Y7vRL7XLFghrBMhBQrSGi8BfRqnMVzUWQ%2BvMs6zkRhz0H%2F2HF9exEuMqKQFDhl%2B1Aat9PRzKgX59HiAJUVgu8Y%2F300PZNkVE8lOHEUs%2F4wqIOXi9Aobxd1vXSlGfhsEp5JHQx%2FCljUxGTnVTuI8ZhwyDx3t0FaenCJBTdmlYu71duEUlaD2UQ5PxCM8uLw650OpJugSpG46OXTb3vhzk2ijwsI9jknRNQuXHhEKPbOfY5zp53O32eOThluChBDes5QoecKMCQ8KuwMithleyqSzTiJkK1WAdNmjhkZvq3wBGfV6aXQDWo4gqRQwtK%2Be1AY6pgHCjdgBX1TjGaY0bEadbQFGtETOYiMep%2Bvfth9z01Th8Uvt7R%2BayVjNJD4658HfxB3VnU%2Fuab%2FAzoT7c3%2F%2F37pTmlgZ0xab6ECQlZ%2BMetcEBIe7RbQ7HR9MuzikhsjKiN2Y0CjInMwixhZqOJ%2Bc%2Ft7AN9kQfOPYFH4cesm1EbDRWzQmAHhbkG4ynuyFWN%2FBk6xjVIxBJ%2BRQ68lCoHd9VQzzRbK0cyBc&X-Amz-Signature=6f2be40a64454acd6bbe89cd01d17ca82742b586698b8058a03b07583a64d13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36YYZ3G%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgSJw3wtzBnTUCz%2BBwL%2BZD1UMGcx9zagMDumb6KrggUAIgIHYzfaOWFkRJAXFrjSRJKx5gFi78%2FK%2BeLNagEaJ5%2FPgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPLtX2ZphHsxOj5CCrcA35aCsRMpxOCiOibcd35auX1K%2B9nCDbntm4vpcarQPaPw87j6Nn2hXg0CJ0aKDIXF5CqHadBYcpAvfb9v1kOFHN5qkIVAf7Dx1jDph%2FY36NyrYeuaUAArrJXgU9hD71ZmUIFqZ6i%2FBoWg0m9mWQoEdRg7Am9mZhEmGefMCuGATiyqZq%2FnGI5UIFx%2BbbUOkJvdyov5%2Bd95uZLeRqzgAsdl%2FxMk1PAHcoHiLGeZq2SyAU3Z4HxsuNsRBfxTpVZQUN%2FsGc9gZ4GfivNLuEpY3lB%2FzJEo7CrjazbV2rRMKIB47kp94pE12waXUXg2VfeLC05tAxVNsyR5jpXy73ndzkbMxHdorp2O1XeMvMo2icrfGD%2Fu2UrPYqoax9d3HMf2zKVDUiGxdH6t7JK0e4sYIvCV1P94Nh1ioePlQLu0mBf6Q9RxJG1J1ixmFfSJXao58%2BYUvb2XsuMzNvlPOzYQiBzsoAoN%2BpVyAkIzYEWE83mSTqjjXehFfFRYmwbNhgRf1vkCNJUEaeya3cJpOjZSc0xeIMpVnc5O0PBdSp2UiySn32t0VmnD5NExHXCn9YmpkCJbCigsnoHkwH3SurZh0WgcpYPdI%2BZpku6N9IrsyJMwe9NVfkPl6iVBZUyWnioMKmtntQGOqUBu697ygW6SjWk3PHj%2F74CPNJJw1%2BTsm%2BRtDHoVL5YA5LO%2F8%2BWdc4VE13vKEC5pNaHGlyhhrzx7KSEdfyoYnCyuLhsNcGN%2BanekQrO%2F0neHsWeVytTMrdf4Nmmiut86j3cM9qb7LWnaf3%2BT4a%2BqqAWvB7q4kObhoe7Fui%2FecGXQnEJf6OlVab6h3WqdmSOXDqvtofyNyBPkCH4MfKhHTZ3knHq95z7&X-Amz-Signature=4880b3901f0805d00c0ff5691ea208d2728b4408797137c8a64b1ee7ebee02b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=57ab0a41cf13b5897e5ba59acce5853746e4bcce261364147ac4ac72374d2c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBI6IB7J%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS%2Fn3l%2FkAupiehK10ks6ubqL2oGplK5SLhy6y7woettAiB07MpV5kt17ymrwy%2FpCPyR3JTIWtgbnlMOQvyJrs1%2BRCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2B2SxsOntTUcJyHcKtwDa3t91xwffVB95SjCYwSf19khDBJKNs1ts2CpiTIznJPuNif32GRuOVxtXFBDskeEYb5xoIQnCyqzRs4BJleILmPbV2IubJNY0Xat%2FwC%2FUu7h7fSOdFHOHwssxxESWrYjpoUk2o3Lm%2Bvs7t8OAgLFL%2B0HmccIaB22ImYF59vsra4fb4cnRm%2BBAp%2BsUfyVo5bADLLvFE6J5PUdMdbvN0NHfWAf0u6qM%2BjVItqKdbm%2BTpYqPaspZd2Mrh6%2FBqMcfwUBNfUlbfZ3LFoITgNDd4CpSaKosiT6RmbeydTys0%2BZaQXIBCoP9z80r%2FwK4H0crm%2B52z4aosMAtQY%2BDTz8ykEsfaLsVZg6697VEM%2Baej38g%2B80DVAPeE%2FPIygVy0cG9f2INEnvOGybY%2FNrdWmdA35jSkmXjZlIUT8WkHuvvE6fJQLqMYOYdfl3LkHMPgSV%2BWLELUo8UYdzaIdjOt0cKk%2FiAAV8cPZA5NNAbXHEKXhg%2Bi98IJN4aCuAWiW13A3w%2BjdcVp5B8%2BjvQGmDVkKIvJ8gVpPGV7O3TCFrhcQC6hXB9Cw9Wp8gRSrwT9S3zT%2FY7SsyZ1VAn7rPgTOpGwDl1JxDT6mCJvJls5ULxOtEH7X%2FmU55OAsCstwnR4sTSr0w36ye1AY6pgFOx06PAAJadH3zv%2F3QxyvxsEM%2BWV92z7N8N3mM8k3wW37wv%2FBaZ%2B%2BhTq37wvvs3c5idaVhk5br93FBY9KMsW6XSe6RXPEc6tz6iMNg%2FhlRDp%2BF04Aohhy2naHskibJ%2B95dAlBTAgVKjVWaQerhIX3SRKwk3rCoPDWVcZUW2Vvmu5IYk4NGXbzM1wMhzd7TU8ZQ7agqsQ%2BtlnFTY0SNIgcgetmZ7E%2BZ&X-Amz-Signature=97faa1637adf06ddbe774fd40336641fb259095f608bdf15daf27b714ec334e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=dca74fe71c0e6784097a93675cc6e5586d62a1539f9596613a1a8e2edd3a127a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTGH5NU%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIST%2FN22iL4YGJGosgBux5MKeYTs2wwB3RENU%2BpEJGCgIgFAoQPj56LnUcmeuqZtORbqhFbbyyFPX5RSlVZjcyb%2BcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXmYtz0Qs5n%2FfcynircA65rK0TsTlxmH9BrsyzZqjLnvsv3PWndijOTh7XaHR6PcmG4iAHoEC809IyhD%2BC9Iwca2xt9tGCpkYvwfmz%2F2kGU0Ovvq%2FPRnFxGht91bQjppKOruCkIOpbRLCAHy1FDlxNAUT5zuByzHUePkAph2eUseZGnZacW2zF5NTWddTUXBrmrHkO6NMz2anPbglXi3fTlUM0ZMwELpxfAH3VDBnQ5zp%2BZ6e7bj7UYV1xrUxcLo9IHSJmRGH7XOuq%2BrZPhhW3aTE5c0RaQSLPENSVjJwdwyb79zDFxYnUP8U4k9fafe8lJVTAZ1etgUDuY%2BNh%2F8KLE5F47U%2FYeXbDwJTg%2FORc8bDu3mAlyaTioNSq87f19zp60CYE%2BIXytbAokPA9WPws85GwZ0ptOuZM1HpOR296d9O1kWnai%2FPS5FYp6qJH00IV55rmpfUsEWwTMZw%2Fz%2FBd4uzWwR7qjdO8YHa%2FHN8m543H4fkhtKjCBg9Wj7CoHIXxV%2FBqwJsJ4qowAXLShCLtcOugl18lPCmWNuoFDI%2FEaw2imdhTg4E%2FJO%2Bt8qT994JLIWjTe3zISZaPBaiJ5aaqsAT7aikklMm8E0wD3QnoCnl409V66jw9nnnnOHHm027wkO7%2FdcAbOXCHHMMesntQGOqUBEHo8pT16ngCxhJ9CtjhjHrL1XL8P4xOJENJnEobz%2BvWHfxal9IZZQ9Lm8QiTghZ0KFzw6oqE2RQWY5AZG3AY65PFRuMVD2B4GH8A%2F4S7TuymXmVhP7Jz5Xg7jcMfTE%2FIRWwUxDKeaUQ4TnejwiHY6IR7V4uCLLoLNBBJNu46FtTgcSk9HmBBCUjFLoweeWjkIeTsOmDa39Z1vTUBKwAso8Gd11Ds&X-Amz-Signature=7d6a0a422ce346b62712fa8b55e1620df6ec0b00ee3b1d544a0878cc9f106b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=3bd12d623d89f4157305cc0faffca8c3fd20ca1973479a171e1f09655447dfcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM2ZHWZZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX5J%2FosXVToUId67DlrS2ZMf72HrXGsW0Spy5JX2kdwAiBbGMn9f6ABC10nzG1%2Bn%2BNJW8MteXYpSuE1vEKXTFyINSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtqQSxXiuvhMfznlKtwD9nIRqOEyZiKofLbvBEkHoU3FR100l1zNfwevPFTIYBrU4tdEMD6S%2FLo%2Br%2FR0OzRwImRDPd3IHCz56prXV%2B3wVDBtLe0VMKqa4eR3fs6wAV4e7O68CGFAjvcM9novEsjoAu5KuuKztri4%2FBbSJsJ62NNg2q1sB4QkMQh8EZ0z89WMhfOgdcw%2FoGZLUAlMjQFwMWIE%2FSnNpERFvca3LfJWvCLt9xFR3WYG9vp87CLMqUQDuXFyEfyFES%2FE%2BVJC94lskpguksvNhWxk0lA40b9ebkyk4ZhlSd%2BTYkuHKpgYxfccpn2gj3AlEWUxrdzvK%2FcalUu6ylHu1CPkCQPzPzHcQT2WQFt3idkxIM3vbzEI81nb6etrfNhkolZUu2vYNV%2Bt0u23EhCgxHFuL3xxdK1N9%2BqgLZJG4NRt5DEZHxRXOpDbOH0M1DhAZN%2FKq%2Bbhrvq4%2F8uQ8ktpDXPAdruK%2B80xmu%2BVwHZUiWRONCUu0TVho5htp5nla2jtIwQd0izY8Q3F05OC7iKFPVZ5DwQf2YXlLQpeP%2BaUTtSWZ5rZbTv5YQ5r3uA4zuWv4W0IGkdxJVYMHJSj%2B1ylprfArQnbimZQSgxNGihK4o2nk8ImPT9fdV%2B6CoIuFsRdIzaKqc8w66ye1AY6pgGL3VVVuhOqTZ6XvZDCu8s8fjQ6TttQwhP444BDGQhaydcTDcsyy%2BlpsHoY57oZO8Nj5mnZrRP5Z8KlpHsCY9hTmmANJ1gOFcIiojY2zVI5d74udM%2FtXaBhNR%2Ba1EbastaMQS6ZylavbKyGl9mKVi619lC72l%2Fb30%2BmvxkZ3meH5328uLpO4yWtjUe5wiDQP05dGnJp3cw0msoSlAbt%2F7ePicmo98sb&X-Amz-Signature=0d28ade12b0d62f4c01eed2b87c381fa14dd2839620fea9567c579be37b3801d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=bb44406c3f2afc923184432da905c0a3c621a9c10a53ab48bd0cad8850fa5144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL652CH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkxdu3g9rf0lRSyUE86%2Br%2BJ%2BHyJlWR1WUqfl7ZjYdMWwIhAMLcHDdOLHTjw4kW0UKp4JwxFvkZVniDfgGtBxgm88sUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzayHtNpC2Z0NcGvksq3ANgjsYW%2FXNLku8D9TEQbs%2FrWNcW4b26l%2B4%2BfOBGGdlsjhILDEnM6shiCPDBF0kSlgBaMAmvYcHEXwy8roNXeLv%2FYSzwqoYJeMD5oun935hHCGb0iFZSltYU5SZcGmBqB9H%2FDSzkM8hXOQY8qPFZp1RGcevt1rUvGqD377ulXhkRfqDS7UYrxHD3X0dsrh2qydyWN2D7tc4nhwOFM1JVMw7eaI%2BdZfGhkNpuUGAh6hBH7%2FKMToz%2B5GUsNQyBIZ%2FjLLwZ3x8FglZQRLbuIMgHAeAGwfw8RaNnoi4zgGKsUJt4yLao0RW7CBy1ULsMHjZgYbaPQulb1lrJixWELkE4bYpZ51%2FLXOTKfQOJpzMcFwXEcGNumW3%2FkKYn%2FHhsZfRhB7M0gErk%2FdZA3w3FrSVSH9ZMuzqUcsRe3IClx3QQCTHU3VaqVM4m7VvPVv9tlQoabAwEnCsRn1tV2TWly2dMw%2BvppRGEireLEafBre4vLrc1iN75kF1Zpfye8zMUwFQfueuH6TO3JILHT8jltSA3G13uOFLlR40TsX%2FOaX4qbekxmV0RNR1hTkL6sniHStDgwSKvhEPFm7zcHl31nSgs1uvlvWydGNDcUldKGLaX8nQ0VhB28DzPk2zXhYNuLTCIrZ7UBjqkAU7EGEoWR%2BkJdHtCqe%2FqXf3%2F1EyBJDROdxeukxb%2Bfg7lQNRNkj8oyHij7HsyVnUrGJD3hyyDghiOITm54BFSo1pKDe7F5O8ykFJ49KpjB9uT0%2Fq26bYMlwraJvQKthav2VVMlyN%2BhUUl7KrU3FGb%2BFe%2FNUuXBwob68MflHn0CEmXAuB0JdPDGmPJJ83DRwxT%2Bl2YJgi5owyo98XnBLISU3hgh3%2Fj&X-Amz-Signature=5657d24869d111e21c70cf9f1cd986e1096ab2c870675d3f8b262747875ff335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=2ec489caa2ac3d7773ec0dccef026e1e20dbabb242a243854f17526d7a7204fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFZRK45J%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH38aEYfSq2e6Y2r56NV%2Fc6DomxgWvt1g6ueC5XfIBNnAiEAwbtoo%2BJY5Ea4JRlfs%2BGqDaOnkXjCCbQYn5RHOdDJaFkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3aZzKb05E8ayQpLSrcA5TlcpoCcp8d8u0AfUWR2%2FW4DQVDxNdh4IcvylVBkROF%2BHhNSd2IgoGmwaxhDYCaepe94tn%2BtCp%2FFh3qmzB%2BORWb3NERiX1uZsnf0Og2jyOWiy3yWrnETrhrNGqDOOre7LOgRduYNIJUti7ghUrMWGCdLjqDHTJdAThR1RX79Kafy1sMpPN1q1p56i5meot4lxIiDv2gtYjeVeWM%2F4tSLnEblwvvs34qTed2EME1dwqU8T7q98rfM%2BrBH6%2B1eUYUpB3tIkBEYKQ4avZTCQJZ1X14HQ0n2hdOXT2PVxS%2F%2FMJ18nwfVwurpkHG5QUmfbDGAB9ybsORxvzdGN0E2g%2Fa9nudFj82a5dlUR15O%2FLBEN78CZVLyWoptEon2TNQrdz9VoFzrI5M0qcaXO9dbuYFzszpxxJaYQYO%2FgrGwIDR0d68y%2BOppnUfx6fTQ2nHDk1vAZNhuMWpgKDYgXzqFFd2Y0B5SDz%2Fe7%2FqhtuQiF7tRsjBM7%2Bc17tHtOBLuru2hDI8bF4EDLLA3iK2kNx3vGndvK9rU%2FKltOwx1wTcUYydalwrJbtjTxz19KNdQ540zsPFM%2Bna1TNzEEPwDnnBQoP2KwwdbeB1X7AZWH2fjWhNnM0PnIQnnHvp3AUaANt4MOatntQGOqUBETt6VInneB%2B%2Fb7O73dubEMSBh6M23Pm4uRspq%2BVTnGM664B1Orxn5dikZBNiEES1Ujl4EPaimSjjfyhDyBdm%2BtSM0UAWVo22UxBF5gyOtfEVhugur0%2FJ51%2Fl%2BfISW64wL89dBd0fTABvWmbmHJjF1x7oNYuHLRYITvq3OTLZ%2F28McO%2F%2Bj6YV1nK5NAPb4Zi3o6FnP%2B5mx3B5ib%2BK2zB1UL11fFbL&X-Amz-Signature=142483d6b4e2dbb5cd5119fc09b3ff6b12f05c1e7f7a84ae980fd4903a7b1b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SBUHOFH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXqr1nSEXlhvzxOuVRmF0ireHIGyOXCzR%2FPKN%2Fs9qWjAiA2mK1Oy%2FNoyCQhG29eZwsWCm%2FLetFQS1dctKXLPxmR8iqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77Nkj6%2B3GvtLvcGCKtwDcsjytBVak5xPFdHtf2hqWTlwFp%2BzWEwRbbLA9Ph1xAQK1ojmuGCQoKBT3fBBQIBoAg5hhNZD1cOFA3UnE5X4trCiz6a5SQt6FqeU7C3Quo2%2FZhQqMMZulSg1e7SHEKCTvAF8XUoCMkp2cYhYf3GG1mPIFHsC2KWU1CYcLshO70yX4ZUgYctfANWCDOhI6zWtMzx7fBXk68n6XcvWJWdRVRLWhibqhoFP0ra%2BAnyPCw8nRagXhIznhYipYo2gepRk10RGE4v4BKabdcV3uH3XTbb4S7QVWgIjUftJpT7cme4mNe6eDJENHhNC0ycYJwbVqvay4iYmY8ibkhbz%2BDOx5GNxbwu1linZ9GEPr5HFWGDCn%2B9wczj79EODjwWLKyMHVk94v32X92k0QrtFdUNJBJS4%2FWKHDm49zkAvuoUcifl2gEx%2BvmED8%2BuB3FpPiYcd4SySlmAy441mrXzrNLGjI%2FdOGNlaYiH0ku%2BRx8DAmDAT1rjQcCBYmgj2fS%2FA0yf%2FhcN6kb%2F0%2F4lPm44vznqXmaBSeUZsBRIjpF%2FlzhR7S87TcD8vuTLretWBJfC6E9Nswtn5n3J1ZHVLtd%2B6fB%2F5u0YN4BcSxF2waIXrjvMHe0fQomiAwV0u51eqlKow86ye1AY6pgHyvtrFw%2Bykb%2BpeVTcQMFn5zRxt0a06wl1l%2BKadCGKXlR3Cb0Jjzyx71CvXGz3%2B%2BRRdSv7whu32Xh%2B3aRsI%2FwgyX8BJyNGFu3%2B%2FDy5Dag1hRn3PN2SnkHEQdRB%2BFHfjLK5kU8DpEx%2BaVTqTwjQ0jtufoku8IeqKhdwbvt4bDQxS395OMgD8%2FARdn%2BZr%2B1wQWyCeqEuHhEKddRXW42xVOVVOiQIGW9sg&X-Amz-Signature=3ae2f0daa6dafe7d08f83e4fafa2f3f9aa46a7b27ff435eda146b3ef7c9e059f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MQ5DUIP%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzUFP0vTnIlGX5957PssSYmWZnAyC4dnnVTDRIRfoWfAiEAvlBVT%2BNsax9vWTr%2Bw16Djv8PY0jD9Gv4vD%2BdVNAELHsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4C53vT%2BWd25aTNmircA9ByjEo%2BqTIRX%2F701VOlneGE1YjbR9UWOkgVWSWnni8aQAOLf2Lz69moezhFBR1b13FVkVfDK%2FLLc3X6SeghuHYuxDBYoNnLHEkMemTXt7ZWbVWTomju3%2FowVqTcr2z213ejjRXpteSTTyFtN6XzSX995X9nMVkLdblYOIS1E0lTgcJKMZduXHhuo%2FkOjwEWwYOe9oP6e3WxxiRYPVSLpUaZPjiPoIvGhYK3nc4vqXGx9gkks3A6y98WVXu1VE16V52N1YV%2FJZPG9qGb%2BFvEzeMRRBxyXoco9nMLGMWhQMzMcDIsYtVUs8RDbvEaKJ9971H7s%2FzoA84qvAF8tVbd6lxk3M%2F%2BBVacsGFvZZi2YYd5y3wRhTj76DBlPPQJX26vJbSAV997aa9pfUXUq31urRw1Ibh622cRttBmEuwVGTtSXTqFnKHmyYOxTjkyeLVRTzT9JMBuQIk6wy1EfWX4gzISfni%2FuMdrA8wVwxMzybkjFOwbWTkT2TetSPY7FXLOuktx5C93py83afbXHM9IPafiNgR9bqAm0VEoHitpB5NjID4zju%2F4DhwK8SKair3IJ8qTJHz3qq1bBz%2FYHALVVJfy661N2v8rolsu4tUpxebpp5XCOFmIaYzdejz5MKOvntQGOqUBYWMgOl3yzXUpgOBqsRZkvAkTwqfXwH3yetaVrz7QRVlbCkv98%2B9LmFcd%2FVK3oIXcr3cDH2mysYNDXRLQ%2BOU5tWVBjoPlRr4zgse4Db39xWateBdtGnhtR3NXJVLFyROM9uVgsiaj3Ew%2FVgEA%2FJxgRol43DIANJQmCsXBa29AdCj6K08FX8MGhpkfJgNRZC0Kb2KFi4QygSxr%2F0H%2Fjqjp3sfCzEOo&X-Amz-Signature=0cf2f31b535d1d9f0845309bfbed228611e30643459187600f7c3d1980d13977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=18dde485dc5de1569cd044f1d8b0b9ac5d1b3817d88958329bdfd93263ec9144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EBQPWUV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT5VJ83KpPmkabHKo%2Ftpr0vctn2Jqfl6l7%2FG05QXj7WQIhAJhxiFDLPbxzlFdmvcVSuSLA%2FtPIt14mpWUBd6%2BTvgxsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpYrHJvQDav4ZIifwq3AOiR%2BAKo82DU2JC%2FzQg6b%2F1dmyhR4SlYGqat3Xnz%2FcgGp%2FMr4%2FLXcWyYp381rFYJ8G6iZG8dC%2BYEWv0pUcb5V6iRzPA%2Bj3cUE9MhLLH1BRa0S76TmXnL28HugqS7z2%2F1aNvzQjKA9pYWgECnRMb41kGXxCi%2BK%2B3q7fxRy10W%2Fmpk%2BuKXlORLbVVV%2ByJASjskq7twUBW14Lg%2FgQlHm%2BI4KHXndCDLtluXPhd4gt5iL3jpqWm76EhRhpJRjMmXdU0FArODBsgF5WYeKGOVP5HLwPbLhZyRy3Wlln6JD1xfuLQ%2FH8JVi64tuoHuAWTn70k7sSoKLp6mB0qdkJNQnSjoWboDCLCtlmTkQVXAxKaMogBEhRNq2cAzZ%2BgAzn7hisIm%2FLnHoOydU3Fae1mdxcNtgctg9hQaC0rPzhexIITVNxkIIIua8Boj56zz2OGk0BEI3W%2F9Gpl7ZOrBRcKRZyNzlN5lFGe891vp5eIUpUXsx%2FE2LekW3oQynbSCdbEhSxwiUjwSA%2F%2F%2BVs2QHBIEDLeDQiPny9Kw5gG3osY9I%2BrVK2yEHrKCtr2pJmCkeBGKkAu13V%2F856AJ3RnkSxUW93TSHeE4P11K1uMz56Zp8iVNBKQMA5X8FXHwZm17064kzCgrZ7UBjqkAbf2usuGEUWZSvvB2SuLw8mABwazLzDrVcVYF3saf3DcWTfdE85Rqlz6evWAzdOt%2Bn7Hni4WZ%2BJhyFYKZJ%2BdU%2BjHUEDtl%2FIOPcZXthPAdOGxkxH4P3Y%2B%2FmOqqpbAvlo1xm7wujoS5WXr3WYsT%2Bo29GtKcbkPVhDDPxvvffXXU1q3S%2BBHWs4hlBOwjEH8Y8kOUhZw5m82e5hwqrjwDUJM7y9ltnBz&X-Amz-Signature=270ffc429d0953ae2d87aaa9774682fb7bda405843a4f3fcf826720d89427965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=54dc2483db9d3c1cd23e4e853275ae1785801bee408a29f976c0d90bb9925699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=df1e496bb42c37bc5332df4b6e27c65faf3e9063a0c9fee077a4fe6b15637225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=1b2f185fe0c679af2abcfab3ec1ae92df74ae1fa6df883d60332b1644fdae0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=b8ae65d99bc8c30b4afd6fee6dae5bf93b1baa1c03dff5816f4d5143dcab9ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJFYC5W%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmZ416HenirpE3tZZYwcAeZgfxKLBm1X98GywA6GSZKwIhAN3quYh9%2FvyjLa5XwYbdl380K8vM9qYj0gZqo9aGn0CqKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJy0VcPqlRonZSM%2F4q3AMgb9D3jrvthAsfSvqmHb5wdxNx%2FHWsmIIC6ainQyjkiLYVRN1UPSMD2CsGL8gRWxprnGW3z3UJ7gATYN%2Bp67JwOuQTVHwMCjAdQ%2BNn6XRWfw4kYO4%2BGt%2Biep1YkcM2Zt2QQ9W%2F%2B8hP5kpDwR3kzX5JK9jhIloqsuV3ps%2FPrfdhlaYfFNszmUgCxDNtYzieJznezKSyaH7%2F%2F6ROE9Med3Xj2zoPWV%2B%2FDArercREkldj6VF4ZOlhDcpmkhdLStv9Zvd0ir9nfYJ5XwDoXoPElzI9jrnvUP%2Fb98f3vzx1bAeBzoB8jEFqPTgXNuk%2FsLd1F9%2B4U%2FfrCcLIkI%2FKeb40j7%2F5%2B5lhbVlzuiKu%2FDiG4QgnpBIbaf7eFlspydbm25RU7WpHIP3N%2Fc9xJCInL7AjSw7E2y3DeY6FKvyciHDVr3MpPT5w2Ccmmrqoem4m%2BPZ%2Bi4l47TvlZ2VypLTlgHDnll8%2B%2BDy4s6cy25g8CRmM0hcuj6R7mZRgnYWPE8M1UPPRxE%2F3q2TR5ja07q89JSnbDWHYygKAlqpiX%2Bs3uQQZUVOBd8dICoJ7kCalXKXOz%2FvyqKuAyTY62k2kugT8qCndlyVKQzmfGJOC148kfjLM4Fr4jZRHUTyt7dlK0e5ZwzCZsJ7UBjqkAc8wmlmmA50IrqUh%2BPSOKOyj8tgXp7Eu%2Fkuxr%2B41oJUGgoWdWx2wPZyK8RkG8QA3Kyr%2B2XzEqN%2BrnSnUBxMAEyAd5fjB3tBBCVvRxg9YX56BmLjfXYEjIMZtABxcTQ8Vb3H3TD37RPJCsET3tD4tn%2FFvzIvAGeDIAK9TzckleWmNmKAjYk4PYb0PhX5tygTnXMrlEKYSitLpXY36s4nM2%2FKw%2FjKQ&X-Amz-Signature=f8bac00b88f3dbec4e28712a4e002a2d8dce1341e55ff714e37318ca8b80bccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=443a5024af13f634cd6596509716d15990bc30e8f3f38a6655b3645a5fd4c12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=b78be4019955cb1a6211afe545d0eed2676c5eb0bf06e3eb3b1ec6466dd4ec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=1b2f185fe0c679af2abcfab3ec1ae92df74ae1fa6df883d60332b1644fdae0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=fe9e992a3a5eb56ef2705de9155fdf5a3a23f6835324359021c58908c6f2c869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=69a8b853a271785b145a2b622b201ae14f9e6885c89b85477a9323960d04c420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBHY5IN%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGHMsd%2FpOpMFPG2W5ZNIC7TR5oRifjZbyJ5JdY0GWhiAiEA%2BMC6GFD9ZxCHlhKkY2hHjoaPECm2UOw3wjrfbChXf8oqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqZ9F%2B9uJiaRS4cqSrcA6PfBON7W9LRo%2BCFjTlAgBiwFqVO4qE2We5Pe%2F2Iy1tIWVRbfEnR%2BBSLlsuT78Xc8%2BQzSsJBpfh%2BERnWhaXSVDOA7XyL1pHVJCOY6rZdZrzPjNmw17mTW48t%2Foxv89kaCeiMTL%2BNRbwqNqqbI9lDJ0NJsidfO7b8oGzd8gywP7GEExcFgVsJBAubvw9sV238fHVeo5zNS9zMV8r2lHcXw3Ako%2BgO3G2QlSYIeLTByaJAjD2QAgmvharHLDYQyA2KqlGdP61AidhZNkIUthT6I6cmetc4YN6BGdJQGdjXeE09cU9ndGJuo%2BAEA9Lnf%2BVSQ5InbT4NSKScpt9mUkSKNJDABAjdngzLWrK90xsybUd%2FQCGKXOBcJDhxwjJqSlXcvVVpzqMelz%2FGr%2FXFbSP036fQvRF9XC0O6PjUDn7Q3aAXJkmLbpE40elmVE%2FfZOXOCDXO7dnUU0QGA1y5%2F0EBjk4Ky60uFKi5wj7L1kBu1e%2F4DIOcEAcy2NtxXR4LwcKlWe1nlu84pXMhsXH7THHiIAtsOjYYpj6JZA37o9mtN6f88zdSmdrbEjAcePzSjzu8Wa8h7fRv6ZJPgEdhkAycZt6vPZ13Wpp7sMgkLtyenC5hc8VNWWLer79Vf5l8MIitntQGOqUBtiEyyqadvDJ6EsuAWGbUpw4vPBuwBOPR962ljE3yyuu7PPVP%2Fji9adRc7ZVc8LF%2B0HaiUhI79Bj6Yd3mD%2B8P1N9kSkDPUSgk3mLXB%2BH6BRYgMIecVW%2FLms%2B%2Bw8f5yro8ZQ0jPa1rJicg%2Fg%2BIj2qPOE0qJB%2B9OMGAnWE4T6rBExFqOh3lgN1eMmg4Y056WYtb2TktZpn5XX4JkYWF5NJs9Iw0gJ6R&X-Amz-Signature=3305a8f8413e0ee5a200f794786abf6a449db49fc0074abcb3418c9ae68d44a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


