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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=26e54bf5ab3f15a83e3c0f8065f37b6280157614130381cefa8609b4ab742a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=533530760cb869ae3c716f61ec3c2f9e838cecbe2f66d6374804be9d6deecf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=9c79d9f37ff6956686214f2cedfdb26b0e19cf8d6ea33ed520c8a4c204b2bc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=df36b690dd292cc4e23360d54f79cd19f923d54c787535607dc148544f33f4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=5a82f7127d4568d45275d55dd20aceb381672142dc98c24012f0a81171d0c26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=4105dac08579fad3b3f00d698ad6e92827a94d3671e79e92f21d5ad5eecc708c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=bc27ed05219ad5c7aeb53bcea2c944f38227b2bebfb9bed9ee3e5628e8486b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=4cf5f8b79a89f1d9ed8c9846d58f0f1fbfafbaf1945433533111f6f810ae99fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=444fd7df53da9e780418482621f6b57f7444642a6feedf87085a78134e0d4f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=b06734315dc0cd85fb46a42e60982489605fc31df0370d3e5ac6ae27044d0fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HXEKL3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL%2B4h8WyKLbHLj10sA9lvUe2GdrBW6BjHWLvL3%2BJ%2FXcAIhAOw3iG%2B3FUlsgd5UCNOVqLq6LQql0bT3g9vYFe2IZkreKv8DCBwQABoMNjM3NDIzMTgzODA1Igzg73oNaAj8yqMDQHYq3AMQoxsPsqAxrWKSw0FoqXC2izP%2BImKqVfU2eEozB1qEGvsFLoBy1mJtBOkWTawTqeyjLDThAOW4HQ409zx2bTJgrGox7psf%2BK2khWGEA3%2BLW40uMIhaxeyEl%2FAJPkn6L30JLjVgWW0zvFTG0zXrx6KZGFN%2B8LNOp%2FFkyb%2B7rjE4GXddw7%2B6UYLYCS%2F6kHkcY4MlZklE%2BPInawF9DKzXxjuz%2FKBvggAwtUWMZnlmVaRy7WIqBtQhNz3C9e584L4ISApbJR9jTnH6TCDPkCJSOOvkF2qu5eW3v26KBikjPxCI3bYUKb9OEqYeR9jN3aEUGKxTODrFU9A%2FN5acqrvgyDHPOtLj3aQQNE%2BntiCnd70cs8MJKSN3TEn%2Bj0U0tD0kQdodR5PdzcE4NQ0cQLMuUfv1umwRb5VVDGb33r9Tvw0MEUghBzQbsasX%2BXTr0L6MST8LSD7530KSogknPMA3NcbgFPK%2Fa4I2LPki5GN1VROzOUbttroVPV2MfTx3MnZjzbBw%2FecQtoB6%2FGle7CSPbsgLy14J3b1w7QyH6WtGu258zPwUGfvFoOYEfQyYLXSTnUtCAWkcmnrwPA%2Fi5MrZEP%2Fd%2B7IZC4FOd55zgD755r2MHzMsDRceTTxfWNJ6azDQw7nEBjqkAYkvLEWQ06ftopWtxxxOlJxWTh5vNqhLSMOa%2FQ9oWvhPfWA3fozxcWVHjC%2FNNWFiKJGqr9FJu96wqbVqJID32lLp8EHSznVkpCim7iGNALJXkZTRv5gH%2FYMaUGy%2BH6OvCNLW65rC5NYghgTfMXaX4eA0%2BVJva4Y7HRpEsF1GdFlDDDa%2FBqIFm71lVkCQrIz5pXqBKvJXlIdURRLbAGv2W9H9w5un&X-Amz-Signature=e6fafd2f9d41937a0ae68dec3cbdc41e9ab65482fee61fd523b2bcf110c025e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEYHJEV5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC046Syb%2FBJJgAhRopQwckrpGzb6iaIXJho8F2HaUWkewIgQPlfGEWf2CFIC1OnojuM7x6SpjZLCsJ%2BjVjFS7T7gIkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK%2Bas27C98%2B3YoHBNircA2Q9P2mEM0TrHpsGf4Alu3nOMlxA9ExWTuYPNmM9b4w5JbTwF1OJz3xmR1%2FQkP%2BFExSq4lhY9ghL9nVuOwdkjBonBGqKV4pwCNc0IkdXcZ5u0KqXAXM%2FLX%2FeE30Hpq2TDpv8LeX6ut6GaKsny%2FlwseEZKWNksD6wf%2B%2B6e0SF6pWPQC8awsTW8XyZFvTcipW098PahbHgP%2BRNJ2GAYJh33wvP0810x43WnbtWPFN1p4r5uN%2Bc70P0IQTNYeBV%2FeFZt6TZNPkcCqWA8PKRUxhbGHD80q%2FnBfvSOURslVZYj%2FDNfSVq96o34k5M0n0jDPQsBAYz3nfTZ3UkHndkt5VmlF4RFETnfa%2FfLzT4976QA0Kj8VooFkusoKW9SzbUJOOQm7vHm0sI2DlpbbMIwyO7mBJxZ24Av3b4bF97VF%2FBpqjf4HAkF7cyby%2BKAnLe9Qt4FctKDV%2Bi2IuN07kXSyw0cY9uuBNWbeezCIq6ISInJthPIGBqZDsG8vDTfiSdoslpx8%2FviQ42DAvxe7OV9frqcIaYy8xesbR79CSyQrpJN2ouKGezaZScxRoCl7qScykCGDy79VNi7%2B6cVj3HDakdBw5cn7iyFpWJIPEl59em0fBvGUb%2F14pwARoF91hMMOzDucQGOqUBu3mXiVKwg%2B343vgUWyBYQapEw665pAb3Ljbcr4RulQnUls9yxipE3lzzDJ5C%2BeLQSAaXIx%2BwZtsBr9USNRHze5mJS0U7LxjpTj6o8e62lMIgY1ABBPiK5iYGK80RlXR0%2FMvUMDw9iumZ5eLsWC4%2FPBmynFWjsWDrZpNpMNFFhDX7TIr7RSDUOz6CPnoyn1uAUBxs4KnRwEOf5Wk1UAjEC9Hs7nyQ&X-Amz-Signature=5d78b9eea4565d4132e1a82010df5aa38e668e98c0ea2bbad1958d0f19fad16b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AJYE4Z%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrW4EJu%2Btsb%2BJZ49kEEOQ%2Fau5IjYBSLlMq%2FaFDNYdhpQIhAKyssYv2ljTa1WR%2F9ugkjUwl6t5nebHGPb%2BlViA8wsq8Kv8DCBwQABoMNjM3NDIzMTgzODA1Igwl7gL7I65brea5%2FYoq3APtSpeskwIQrfMVVMKgZGF5jifhKmKR9UutbK7M%2F3iHEdCioblevCDaoHD2jz0LC%2FUJqc5hw1N4N3X6JGux7c8bjfXx857tRjI07YJF9k0ApQsuN20RTjUTsam5Gh%2FBl1Bu%2BDwHv85s1DOB4TI6BqKL4h1RbtWAblmvK8cKkUV5AWCTwtaVZcx8RuDHgk%2FRLDy1%2BYeq9y91ogA%2FyKPTMQKG2cOzJ4GbsKSNyjzNEW4hRO7N3eMMjYD5Pn0wcnab3hDYp%2FL4a26hsiepg4KDq9Fi5O28H9l1viCJfsNKNvF5IIIcYBU5J%2BQGt6JMxPWROip7lSLqyIfPGmi3DiBz4PJGTQQbXQoaFl3G3%2BpabWoKyHXLgCz0%2BCaL7Tz7Zxq3X%2Be1FD5ySguCotACZhvTW1bzv4Ho0K8vQEi9zGry6Ksx2IvxmQY%2FTM1FxCemtSnzbeaF2pnp62YqZAe5sTA4UhAgiAXJRXjy%2F5BQdN3gANJyfzjiT8Tik9ubCBWLAmzLfz3wrMymY3afQTHN7C5jgygSUWJ1q8q%2Bz2nJHgIJJGvhAnrJCtIShHSHRau27aOp%2FstF6eElRW5HLB0ycTrbAz6D%2Bmnbrcgi6oD71Vw4lUFOVAj5JlrG7fk44N%2FtYjC6xLnEBjqkAbMRvb7bOrHs%2BG85j34mGApCAIo33zXXpeHf1qpLz%2FV3dOpZgqaTey2nS99OUG4GfGOKTwUUUNzfIepwfD63pGrJtWE02bPjyPJvJQJxGSgJ6eT%2BlUJDvr3NreR8x2PLXC4BD7XQ3ojiMCgAui9tmCGJsVpgb5vbgbrn7zMCd72ZoLLd4oiGVyhL9iVepVKcZz4wEqMtvX%2Brr94CoX4agmptXMqv&X-Amz-Signature=768a8ca917ede7b45c835cda57d9635f6299ee57e82b1519dcc622eea3ce2352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=4d1c826ac36ba9c07632ed74bc1262ba66c8e59f4b8a6b20ea6ba01af5d06a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSN3ZSK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5kCX%2Blo2WkDVd20%2Fiey5guFnX6JPnzCuNO8gAHKGUjAIgFGFrL6kUC2aTOR0JqB4PCpPSF0IGCKuxsdW5JGY96iUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDDTtFy136iLgySargSrcA%2BcaNTW92q3oGhOy2odb5Io%2FjoutTLANaejRqZ4EKLMoCD6%2Fk8vfJX2jywJui7sJeAbAFR1v8mnNs9xxNngB1hqiXiCnlZc%2BXwiCNconz8%2Bun04cmMnUmxz%2FFwkmK%2Fb1tplJUouZDGGJvEcugdBxxuZ0a3kgpoUqS%2FwmtcQXDE%2FJOJXmUqdER5%2BIzG4a12qKx9SJgVpoAcQ9YobQcAKYTvcFa5hSpMQSgPyDg8ezqzylAwoJKAepwiAKQzJEkul0pn50R2P2eXc64oGu1CNax49QAaVRWdFKtZshBHvccXL42RezOCZtp4iRQMx1bJWhfPKINevY2aU0PrcTqOVrVk2KwyGoY3l%2BnnIeSKP2Wn50yTCuXyNYV10U0ey0SCecR9Ja2NU11%2BTzItMdjYcEgkUoM64%2BQysUTD0rt%2B4DBS93mrLjMaSVPzA5Pg2bezqVaM93jARV1AZz1uUnOT6iezW60BJ%2B6Z9o%2FupbchNsmk%2FekR1EW943cgQtuMtDfiUPOoa6jt0EEjapy0eaBJjTARlI4cL%2FmOlEejjJK9I%2BVbLRRI91F%2FbT%2F77OgEuZpGtFWBgey2ObCivCeKfHHD8Lnt4ho6Sa2LG7yn7jKg4rrRQRWu5RNe2rctDXinekMN%2FEucQGOqUB0JriWNHgfqx9rO2bpvBSFSrgpeYJU%2FLZjqtjjk6iDl558sHPoVzdUItkRAfzl%2BFYGa8Uz74A16W4bFNa3e%2B8xIRlJTWVBT1DtUaNtxGgj3iAZr39gimFWKtVIEPHMD1M3ehfmBkTZgvEHgDWOiTzW5QQoJ5TveVkQ7DGIGXgdKGXe2WxGhzm9BmD95DfDsVuqtwGlhTizs0VuCiFdav%2FbU%2F9WK4d&X-Amz-Signature=998e1a25b45ffdac7104a896c554fcbed9fc6e1618c748b1d79c19e353527cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=d8fe83c1b08c4d7025d722104afa494dfd07ea8b6527b975bb7c5bae651ddde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKYWBN4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYi7oBWbKFtEkgn65ZiCl6QV3j%2BdFA%2BC4B%2Fvv5DSrVwgIhAMpjaYT5PFzsJu3wrgNq8cnk6spTwFIZN4HD6cZV7qHEKv8DCBwQABoMNjM3NDIzMTgzODA1Igz7zQ3eVolKwcHQYrYq3AOPKySkgzQiwCgXhla5fx37R4IszAib4%2FC1HrCLmeXRI%2B3aAcBQDZqCtH1AIc%2F80ZUFFxvZwBVTbwlCi6N53U%2BBg0IrtB%2BPcL9uUx8uj2gcf6nMtuqCFlxnkB2NnTcNlz%2Fbh5N6Pl7LWgupOopaTTh8OmQesH96IE6%2Bng6iGQH71n5bqcN%2Bci8IT3ZqU%2BmRAIt6wfIUC72myGcjuG0d9P6%2F6KnsbodhnHtwkc7yRFySicT%2B8mXE0bpEeo8U2xiZ2LJPxTT8o5Zr%2Bh4eiH%2BAYo60P30amkUaOA7veWQMB646cveuSm3cTPiiwkioUw9zQKGKM4%2B1LaL%2F93HLJQCnn1Dh87btgZTJa6pRL4CrcEI54upQoL6CMhmlYPnfKtep0Y0E0A%2BZpksoXbUvQragyIXYleTNmDenkUb2zJpGTHj6nR2TdG5QuOr9%2BkkYubE42LF5tn9crpo6GaTX6pMYAat%2F0ZWKVXiyfhWO9bdIh%2BIzW1WdfAfkFc%2BllzVNPqGRFR5a7Cby0Grd%2FhX5RYJ775jjLUdMq0D%2BBjtiuViURxvcmIZugKM952q5jFcv6EYCtaOKzpvfnIX1uFiTqlUaUXjfx90KOOWWmHIzPOtncFxsZzygzOUkXhCN9BTKDjCPxLnEBjqkAaXmyoEc1CG%2Ft90WGAwrU%2BgAdE5AbFnUH%2FEoSbqvFxrvNH0R%2FQ%2BGLrvhQ9aReS%2BlSHM4ibga4UFdmQcQfEYNhVb5Z4z9iFjS%2Fmi0VnVzJU9C064Ar9hfb8UhOtUatukCF1zvQ1StEZWoX5ZZI3D28oigvwlldwYpALihvQ8IgILLkSShQndtNH922tZpEdDKSKzbAqZsDwtYx6yDd%2FBiujeb0xhu&X-Amz-Signature=42256c97dc54cf91758516a0810591128301b26b5405758fd9d706fb0c340125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=b9eb20e27a97dadf97f101c7712170c6ad27081201b151b88d27b7ea42c15ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH7Q7MHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHI5gzxyJ9TVCQnVJO4ZGWQ77fFu8cc9UPlHZtw1Mj0AiEAo%2Bxpqi7v4nt8wDYXm7t182TueUaJe3gX8i5Lqx65lSAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC21Z0BT74DNi3G3dyrcA2KEBIuygHEbcohu1HUxEZ5iNh8uOZ%2F4hR0mQJBYw9XvcjP%2FEsn7FLJuhrh%2BsIAaLhxe65PQ3KR3%2FDMFmZxrQqFjP%2BcQiQIDI860XXib%2FoQ2o53iIFqcXl5MBDx282clicbB2QSXXMkReyWVO%2FdLxOTbchyqPPOUuZyjusdYTKTJ2AVUSveyGt%2Bc892d%2BrVeQuT%2B27Zoid8cXrj1Anbqp0z%2FsXkt1yf3VxCGGFYJW6dB2frwm0kcAOLg30gilg6ylAwMzLo4fEtum4dAOxGnwi6BgL9qMQ0gAqugl9wee5joMYS%2BJxXMaymeHGjuF3asrCAAkyvLOAs5GQV%2Bu04xL%2FK16jKl%2F%2FguBD3czV8sLEPSBquBVdORm8M3QzQ1T1TxhNacpMvM6xu1SjYV%2BFGUwBNUWHuVQurGdBSMnSW0eqy6Zre3Pc1ZeFNEAcJ2iaLgsjTDvwN22m73Irb23EgHAuTEQHYUoW7L6AmP9YR17mi4mxYoP6aVIFs4C6DdnvTksU19QrJN6g%2BNpyYojoKCJwiwr0qQsf8cK8p2%2FIbMZbYh3BQdPQ7qPHTOSOb3m2q5zx0LMpePCnGmbG5wU0cTxCK9GYPEilLYqo609kw0NAmqFepv7fLI1gzjM%2BceMODDucQGOqUBY4jMnbq0PWiku4IAK17Ehg9fyZZETTqyrfRWUZNSTbFdFNHnMYZiLx4GKG%2F0OT17bmpBc5GHXTRvwCRspIYJJySZ%2BsolxfhoZEDHV9%2FCf2ByQF918kMG5FROcg37YJiX3iNQcU37znMzFMny0WaP88zzaD5Cs82Z95YxpHZTCzIUfsX2rntjEGw5pyXoNtULrwzrJz4%2ByThVlRfhkO82qGIGgucM&X-Amz-Signature=59bfff300e12725f890c66d632c41bf33139a6ec87bc1201c2f37fff735476a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=ab32b634876edf515054ba1c86a39cee0224b2ed53f29dbf1f739552ad90d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JL6FH7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fCY0kcNBwRIMgGom6HQejoPt6NlnbStfsqAXI0qoBAIgTYclyYNEbkJa6AICSO2uhXMBc1ZUm3uufC5B112UoV8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDBJo%2BplzJsmIdrCs1ircA%2BU27DeC0Iv9JRRVc%2BVFJQ8dEL%2FzJRs97gp2WNMbNGsWhOPdd4Nk0Ly28RLiKduDFTz8QyCfdcbEnYQ1P3S%2B4gsekYyfCwGnMqdV070GH8J2gX1z4sSvUVKdYTSoLca7Zf0NZFPPKkPRzFxCotbDuoIiXz3Y0abxrv9tND75glv8etqCsN9s9YFbV6gbEUVG%2B7Cxy1lDGI26dt9ducsrOdj4qUtSnS4q6DvsPbZgJWj%2BfgpHswTVRanNGI%2BwldviFjpOMxLmgPFQuvG%2BhrJB9wF2E%2FqN8m2wlYvwhHWlNgVo0a2FJCr5etHASpKNdGw5Oznk4EjBTU87FWlsQIv1OU4no9JuZTqIUg7irAfeSxopT2I4v6BWMMsbF5yhS2lzwEste4FQQFD0CBBjdPb0B6gKF3OL8H2nyRTI5MZvoOverSst2%2FIFvMEqIvAuUEhCu91X0%2FvDi%2Bj3bFLvA9VwbLgVYxOZCrbWb8kTrb8j%2B7p2Gy7ZntA4yFjvfizKxGNeXIYJQMQCmtMu5l3Id9wBaRet9kMYRLaUgmeQIhHA%2Fuq0FBVNFft%2BQfRBOIT4HdbmqRQnlEf577tZb0G739704YGiXHMqr9WrBA6VtF%2BDQvKUm6hfsE3IjUAiarZCMOvDucQGOqUBIGaxnfA39v07oqYQiiiVG0F1B2f3MmIoCG%2FI82H4FHaeGQau5D1eOaCHzHrWtip3DCT0G6iA%2FNiKJ5WzY3yOIdcZZ0ClebherkoWv3C1reXpP5uA1X72WI4aVeA6dZAb8hwIShN3XfJUJTzYiaOhxqmjWgztuP9Ex9IHJgMfCLgEmRxZ%2FkFosO%2BP4jxE7BQCXv%2FbvOAAdmjbT0X0g7Nox%2FV%2FPgW0&X-Amz-Signature=b372270371723c7c933a94bcfbd72fd9574dc52a8e8348034729f56e11833bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SR3IOBA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEEu9n9Fh%2BbmMn9R8P3oqOKhAj%2BLT77pQwSqg3qrpgrAiBvC4TyBDfwGByyhE1CtCunzm4Vomllv6rHomBFSEcp8ir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMdeSUQq1CblHY0jE3KtwD0shRthPflBcE3JdY3bWcjj1MEUm3%2BRHO%2B7d9P20WseV%2F4iJofhHgb6nw1Std4rojTdWyqzsV7J0RFXw%2BZ%2FgcGgpKYxh3uo%2F1tCTX5%2FVwdxmf0%2F5ymN1%2FeciOlO1DrDRr0CSK5usoZFRTJ%2BnDKV0Cdrkgtdpw6LekG0I1ndU%2Bi91eHQ3LVnwRTHHdiW9Y2Ry9olWa%2BbT1R759%2FjUm9krsCZucnJpa4xDLifDJI5YlP%2F3BgRwUxSFDdj2Vwnne0soiPcj1k95RJdtHxYPf2EgHvhcFNn0K02A51M6rGByAUbOnxvbs6BfYirjmkZae9kEIAuTqsFxTPJD9u4AaP1JgUDODpKp7Y90bXk62k4l7R9Z8UUx%2B7xzsSgERp%2FoHdPx3KmYuGODWAgBsk%2BcML68e74rHnLlFPpz07hh4sVSH0vQaOYOlcwY4oMX1vRNrzBje1mRAcKXpRuo1tCU9rO7XYTnFBZ6ANabuU6N1FJ6voJAv9TSgQPIdW50h7AOepPfqIn5TRIrO5Xwi%2Fo8aZGnr%2BNN3uB5jg0KPbd8jZCEtuhSdXxbN5MLihpNMwvOOmbHmF2g2TfQfYvzXNXabIeUe%2BdsGWNlGe7FYdrOopq33Egwl%2Be%2Bt9H9b6EhjbZMw9MO5xAY6pgF37md886zEnW3Y4oECrNuJEaT4PiRel47igye9S3Sy1uyS%2BYbKGHgI3bwu7KGQN0n7kvXL4WwmDIKxjWgdaLchxo620DPFWzTZaJ1R3a%2B6CUiYx6%2BsZ5w5DQbdNdyltjoIFe4QgYZYnnM7K%2BRPiNnZwy9wjuZg183jNUVv4AgGM7KxaD0HFG3Pfq%2Bu7RDify0sSG4OFF%2FRrX55FYlAXkhD5glFV4BW&X-Amz-Signature=c3353df4b1dd2b658125c0e4200d690faf1e0c9fce1737f86abbf640b09cfd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NPLF52%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6m2exsZ73HAKG%2Bu6AjkTyZq8jFvQNYeBm%2FXww9yYLmAiEA5%2FOklfSJXN25DumwIqANdL5U3%2FtwqMbufsEMnjKgSmEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGUY5IxqG0aJ5P8d4CrcAwYgv5AiF3vmPscoNMJgQFY8HP%2FZKXAAgpC1GCmmCaFa0%2Benv0YUpMQSNJnZPrmuN9%2FY9pQELA66RQ8eoIzDBf8jkgazAKP00unTmnY9DuxEDyI5%2Fk1NCi5XbhBGinM7XvgfBGAhZYFmfJAn%2FGuo3S2mjAboTZQQICVDHae3iXFAtfrBtIPmF6yKIMq4iKBsfZkgmCqy2L%2BYaZ0Djh8j%2FQkQvZ5W3jg0ok1zk5%2B73nZDVMv51UwfAcZg2T%2BLJaJh4ZeBopvfyWRIyXWXqkFgx1H%2BVrjdS%2BqNrGJhYzygST7bJE62YqmWK0R2UsVuOzcHv4qgKf2iiS0nHY2zcQewKQlo2ezpOUMldFVGH%2B0fUbFoHORaQqKpdB0%2BbK5GLVy1tik6%2F2rtIF6QKbnnRK893gkFjNUnB6P2RhTRAPrMt2fv7QY5losVi8QDdVciaWhvGGeTj76gRKJO7dQZIi3157VbKw6iKsaeXGXqtWzevD9u9PN%2FaBawDnHmILHaBWhKl%2Fc%2Ff75blxFzN3l6WCsfklQ2HM1vaUOZSaXkU66F%2BPrCWUQOHNfQ6Novn2OpGEXoq4xepoDSI0zQG3AyPLQ39p%2Boq6GZmVV5NopPVegZZ0rHEydOCxKlfHkWVOcKMITEucQGOqUBtg0Da6%2FxbnYKhO8kLDjZjakTH0kB4AplcM2asivxwt9RE%2FwVEGeD2vh4x7i3%2FmFZmZq57AWDzohzLad9J2Xt9Gl7pcs5Jx4Odi3fA6qu4SPgu1J%2By2JAFHMn1LMTCPXQOGNf0ANqveg63SK7vKxTHaKO05S%2F%2Fc91flCSkPvhG5lSudoMupO3C1tqlAOfgfT6qkc%2BmDFFX5kNx1cimwWrPh9XQOyY&X-Amz-Signature=aedcc7e7959610735545ddcce928d27dde9404b9437ada98242f73b04fdb5f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHFU5VS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqjGk8HMpxyiedjyOdOW%2Fy0bxZ6gj%2BxVn%2BuehpvJ1sjAiEA4YPokJVrgipFKYj3nTCx7YZHZn7rhbFHFQ1B%2FxAM39kq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFYpu%2FnjO5N7%2BbhwFSrcA%2FIbZ%2BN1xVQyL6uFu8tflVCw2jmyNUUm6KDh3LfQ%2B%2BPb1KlqDSaPWpVcqv2YZkJpx2Kik1Tcr284yS1Xz6Q%2BDJkYd%2BEYp8fph3Wn8eIa93byubm08Q6LZpBfJb6QTtFRAcZlUzYCtwgMaHyBsSlkFwiVJehAYInwyZXsoyf6TKxt0j6dEWVHQLTShLSrsCZAjX9SMmLn7Z9Xt5YVemD6ebbMCVatSKG5%2Bw1f7DXpe5X4FowZ9csFA1aNA%2FZGknPo3orFxJJSi22U%2FL6hN2rrWO4iQmKsu1mVl8oELBxb9%2Fx4NgvmOk1KmabZnnqAAx0w8gp%2FCca%2BpjC254kpuf69L9Q%2Fd5o4%2FmnJaE1FKyH4231zEL38UIJ%2FieBoGEO6KmIJ72xPPv4CTgVvCsk9IAxlrsyYBt7uk7z%2FXhHs1C7JMvH%2BUm36wSi%2FzOGQpW8STuG3ja5nKK8gbPnyLAn80wvF2JiQGq5vltMvRVjyf60Y0ZvCx93YRZZLzgajFJZyJ2ZOWIh0e%2BxbHdT0MDmXHWepUeeq0MUT6DuTO5w6eObSM9%2FMQF8wVF37ItSq8d3Owi9RTsqxebgWSqlXVkq4OGz5waxAhhJxyiaqCsBAXJmr5bcW%2B4%2F%2FhXolUdoo46FRMNnDucQGOqUBQARuoRMu%2BXMeYY0R8pWwJYhDGVMNMWVHX4r9KMVw1UG1nqgtHxUMyefJgv2A84%2B0Ay2HeuVPPMq0g6k1CUfyoLCtZzl1SLD93MSnT%2BLodM3DTQ%2Bn1hQWxvZZOaHGXaa4kPSa3sR%2FLO3XMWtLheSrFFOyo1Ozf7sAlJbzn0V2c7zS%2BwJmLudw07bq%2FSeREhTrrLX%2BU00IyVR3t5b30nbI4TMbC%2Fl%2F&X-Amz-Signature=9c103c59b02a493f04b7edc9a835688247b9584373e78f0d410573653ed63851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZ5A5MC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCr%2FGnS%2Fdjax9438qCLZ%2B1msd47gRBSkbpLlpzuUH%2FqAiBYNSM11N9tbLOw7OvgiOdz%2Bsh74I26e16fjVWP1uEkUSr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMnyj3JWQYiStY5h2zKtwDxvpoyx8EgrqECmdd%2FtipjZubHuMvPrayQGuK5HUu%2FCIJICm751tDOlq%2BuVCDCPXgMCuj0EXP9%2FXYsAPQgNonb4n75yP5afri5r3ugNCzN%2BcIvu9ARCHaWk0dNNHPNjWXrigLxmgZPnJCie5Fy09SxBqJaMZbsIzwfK6uNim6c79fz8e8n0%2BU1YZ5O%2F0ANf4TclBpOBA7cqnsJvkArsFAmIJ0iH7szXanuONBaVXpqMqIoeXVO7xFnUGfSwOuiKELKtWEV2TmXhb%2BhySin9r4TnI3NIBF3nMZmR2d1hNiqtOPEavsrRrEorwzwgegg%2FqQRYx2Z6cM04%2BvVD3HpFl5OIv%2BINogLlC9vA%2FMdeAaQBhA1Z%2BjXszkyLEgNvp%2BlAPV3ElP%2FVqbGiXGcaC%2BiRG0hS6HUEd%2BLcgwI1oK2MteSkHTqGKa8yx1%2Bs9Rr%2BOMpcpQwunHDflwc%2FMZjpzhMQQTrnmruIYLgYP0ny4nj9GyS6TT52OFAc2PNPT%2BtD86rTZY0hldaEOIv0WccfZ0%2FIS7L67EoAbUPDS06c4aSisVd0qLEgVKaiNfLvK9EPpmA57PjF8J2mjizsXSN%2BedgD%2BtLkXOzQ%2FiMP5oSOVLbwxZabL0j07rCPX0y98InBYwxMS5xAY6pgFaVj0RzdsjM3vQodTDZDDY9LRRI%2BcoFRlrDN5jfMx64hyvsT395l8LwJjAjGv5yIBItrDu7wWL5e6FAaBjxSmekltbHxUQCKe2JpYJQuoaESQDHqQFUch1CTi8Tmq%2FwHSjExRtKACcvF1pCmlblEojav3J6GSEtqZQdU7YlGNEDRcAVutODneAPhDpD9hgDuFJMaOqGRdG6QHDzXQh7u7q2cg9k5xs&X-Amz-Signature=48c315e5a839029902da2cf0b3525c1b2ea349cf3a2cd5e52cc7bd653cfdd71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=a28a611a9ca468e1c9fa08da55a31f74f8457b71b510c7182669c4ff31c42f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EDWEOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpBQS2WcK0bhKQ7YBO%2BgiNiJ36gr3y%2BYdk5dGLkoC6ygIgTHsDOyXxXQejR7SrHmi5uFUg0rhNSbsnlq89880S8Fcq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLoAPoGErqsBQrh%2BNyrcA095B3QJvfSgjK2cflqVEewII9Ta1r71%2BpjP4pUnnXiP6ov797HpJu0vp2AyHYGoPIJvKMO0Hhuw%2FBNjt1kmoTTd5Q3JDtz%2FyDNY1nviIEsM1E4GdsCWZAL6ehU5rg0fnbFdOio7vygSEn1CMBcIAFNG7lfP4IVImubR66iToPKbYPi1HC6crEa1H06uOGIJb91lBBb6gafZ%2FMkwY4J7WQR7Aqm%2BmbsJ4D9tQHEPr1%2B%2BIWio%2FXtWqm0HtBCDSSpYamIf5sFYPGFl9WmY%2FCCQPO2AAuD0Mw1qWM1hysUa7SQ9YIL3BmOCDmku8HJ69iW5MDCBgEq6oTDu9QTtBcB601XF7Ns7GsCfEKKrZZuDDuvb%2BW13rILq0ZptQWHgDBxbvTzAqzlSSFaXGBgRCOAalDuhqdUH5bbUTV5XfXdY%2FwMWHEYaxVWDnotAuNFDW9Yz2RCQCmiJEmfc%2B6TAlfkQBWFQHUiJqygnCUMolaMuLjpzW8ZrGnZR%2B3WrusCkc%2BaBOO29PSHfjqwrdEbeAk0%2FHFVP7VnrbQD36aqz%2FJOeSoi0GTEFVWq59eub%2FJfmvF6jn9i21XzdbDyDpiKNZNjb%2BiUzB4Ngebax2y%2Fdmv%2Bae0bBSKqib2358I0dfsjqMMbEucQGOqUByJfBZeEnj%2FzM3iCsoGj5yk1cqKb449zSaieOrNZLpMBR792xNtTQcgLtYyK5GocseTcFFVQ5KbnAAdbKEJP0o2przVeOmPzTInSgnF4%2BMo8JM%2BG8qg2uGXQ2lFWAfGJ%2BzWzkQzC1nJ75K%2FhVuciTyl7pRhwqJeKKDcHDKWd9hv8h4T2T2yoqSKh3pjjdBEFVS9iGzG2aU18tLvs61LpO8FD3IYBU&X-Amz-Signature=6089d9d14f8bfcc09091f4ab04e02ad211d926fa5d5df90ff1468b3cb6c91fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=9c900b1b4fb9658c39ded86dfae7a8febddd4827d7a98ba80e37da490b2595e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=c123b86eb040d5f5c63147c3cac5a44853ee4438da0dc321a75148c82c5232fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=e68029af93c411dd383854f261a76eeab379482ffa918dd352993606d8314d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=825b075a8fece1e79439d068e6d1e6a6ba498dedb25db460580a123785b2cd16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=ee320a68d14ae850c1da572bc523ab6103a59ef43de3f20b51f4a993d51cdf0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=2546c75500f23d8493e93b7faae0fd2d10c88a7592dccd755cc587add006198a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=791fef0731fe338c6cb4dffd050638762fde28a7cfec90ec0fbd6e6d9f487dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=7847c0a2379d33aebc3c2e360e275a33232401c3dbe89cb273553d8ee31d37c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=6c6c9bdf8f4c704e10d8ae158b7d6c0c92a5c265e24d52d8b033063ae9f337ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UTVCMUB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtXa1GjEd8sbTDvvsuyNgs7Z%2BC8XBMDj9Cb8TRW8e9BAiEAg9%2BjP%2FnQadq1IjJTv%2FUyOSsAoDI%2F37sOBsmzg%2Bjo%2FOEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDC%2FWvKCtY%2BJlPYa5GSrcAzLBjgp7UHVD4TZtYkdzhEYuFplIx4tUffkA78ph6SU5IlTqmBXIbifqlWsOaua7RQgiGtIPKxSwecQW7FivobqUaeHPzajKZje%2FVtmYD0%2B0ctLTgifu3bINGvZ%2BedsiYhakQJIEsFIFQEXv2lRQzkac8nXmDViurzoxBkQM9aEm0Dvg2sQJBiqmgU7Nm6Au1Ofkg8IlVQ7r7SF4nrXWNG11bIJySCR3xoYtuFtOrJodvu4oWjO51E9dO8IInB5FOPdzqDlttKtDWCmB72PUQXdV0tCVEVoHJAEtio05tfCh6%2FQR9ZPQb2C2du7CoDTNHfT5pQt2JQ%2BugQ59CwWYo7GQd4uffkZ8XLyRAmYj3%2B%2Bh9DeWR6o5UTQB4B1Qv0sm8pbqV7ngTr3dxJ0A8DHVXZZ6EFOi1WTMLQgjS9pIqH9H4hf41X%2FmyOhA078SoojwicetX%2FX5DqSPcM3cwTjJB%2FUQrkJOV4FHXchr%2BxsVUXT10wTs6j4cUncaZHSr%2F%2BymCgKpnwXQ37mbHukNfR%2Fm36KVSmsrOtraV91BxElL1F9XxZpyXjH0eAObyllVFXKeTsmudo5vP0l9osWsbvXxNgidPb7y4yz74s8A1HUQmdS5c81ZGzjbVr1t21F%2FMIXEucQGOqUBmxaIhwtq0o5N7ObYKfRxZxoxuaGQ46wF7T8Bd81bmDPFfNeFqDRfGdQdLmikHHwz7bSXELwMzP7vQk6m2FpSBms6myMxqz3kDj0JMa6y8spOPaKS2WVVnwO5pGiAsNPRtBEKEM2fcQCvM85G9YXIamw8tQ9vrCmErPA5neO2CO465NOr8npMWD%2BivvDVI9OjiTpcpN8IHMyxgcJiS%2BRcOygHcqoy&X-Amz-Signature=52a1c8e97d563581db56c0c6840439de8f9cc22c507d20337bfe7f871921ee7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
