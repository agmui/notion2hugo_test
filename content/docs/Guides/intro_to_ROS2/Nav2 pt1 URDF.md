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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=528d9942f150201fa6c1d85984e554dddb229de69071457e33993fde7183cba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=163f52ef71a1ce4cde4cdf1528b4f74547ee379fd2686396f35582aaea1baf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=934083ff9c8d0f08721f9e73547d456d56a3489486b74f2941fe94c0cbb44b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=27f98d78b1e509c08277711dbc39d64e6f439dbc73b46ab09968d73b8b49c867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=798206b8e16e0851e64802462cfb8984f0d72a238c02dd0229de0e6013de8390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=43fc1695610f79c70237083c090455668070746ebde5f8df05c23183274c390b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=7f24756f8b91ea1fad10181c7ea3077ae64940e4cbb16aee8d76e0d9bd68d720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=e60d781d7596659224463f914ae17f083f18104e288d4ea2a772e5dac905429a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=d03af120dab107451ec51fe86d0c266f6cbe28ea689a180f6b1b8a2901684b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=2dbe2f033def255ce228905a77f5e642dd8c14d1aa5f59d67902779243aad028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DIORJE%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFHxyZxW6PjuRmpagrC0gQdjqFVbd9TVjr60WCRSboZqAiAqSSpxjIPYILFgOeRSpPZw9lk4WUVZx0KP5YTqXsuQLSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMydw0MvifBhqKYOf3KtwDtcwmJUciF2%2FGFzJz%2B18wWTOYye%2Bv8ziG9qfC0em2vZAZOWmTMaaSe7Si6k1sp%2BOIJebuCcB6sWNU3Gz79bWnqIDGi9lZheCER0XKl47fvcWJC%2FUcNUyzy5RW0y%2BHw3QJ6t7e8i03ryp%2FNm3p85iRXmO8fzNzqKfcQQ0Mz6%2Fa45Idpiu%2BsoXsduWYQrHmWXTwc3U25mNzHPTdv7zDuYscaoHBeoyDqf89qZW2bIsEvg6mXJ8hW4AtoJu5DnNgVJlfa1O33rU9nL1JcrpivYF%2FdqDoFzbn2%2F4QRDeclde74Ik9xH22Olal3FPqABrvXDrGiCfMV02h5UC%2F2CC5YLJ80qq3%2Fla5F8EZv5kQof2w7%2F0X%2BxqcnqbOvOyAiWoa4AXHvQlc%2FNW7%2BpJwRYfjRCS6F7rI8enCP5z7EMtFF2UsIpOGBVjbUfVG6UGpx1mq1dR9jXiVRzrnrcukmTYei24Jn9eVnyJpjGPiq4KqFQT4kiTFy6HpKc%2FQbgvtEXYMFOUWQqB9R4tTC4OYs%2FXI5%2FMiWDPtz31Nt%2Bw2Wl61c8GvqPcYfYURCN%2BJxHvMT4aeymdWIcm%2FSD0Ebl5fMIQdmx68bQq3a00xMhBkquuHhR7Gb3b6zZ5PWNdcEOwjITEwiemtzQY6pgHUUn6NbER%2FBuMaeFjsrJIuHtAhtwPrNqGgXTdYgHubIOrasBgan9fZlBPLPqjt1eoBKGfYRdkfe1wkuJWsYtXjdGaDv7s%2Bxo5Q7r7Zv6UdXM7NGsyij%2FwmF0IqBl2UO3qHkeK2Q8SiCLX5SUrvnAqfhfvQDSxvZqfV7zR9siwa2Egc0QDt7D%2BxtFB%2FoXnhVvUbGKr24oOUzJ9tt1%2BNGFdzisqASlhs&X-Amz-Signature=25cccf84a221c9e1cf5f09c48f6df7cf9e2dd22af902533f25a337fe4f589cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57QCAA2%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCytUFbjPUnvgxqGhZc6eNmFJW%2FL%2FXFNcfkq8NYTrfQKgIgAUv0KUTIjK5BjyeAK5NFcFhcqnwcEE2BAhBsloOzCMUqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqAvJ3BPz5HVLO4nircA3u2IL1OdNNH7nEj%2BPsNQ%2Bt7GIiSQQT6ABJfUb1PYXZqWxS0w7cwh6FbTypCQNI8zGDCMtjzVKo%2Fgbns7cEHG4MXYWS7CzKTR7kkFygV9cVjr8J1pogzGhG0hC01%2BtUXnDlvKnD3RD233mWdP2tQlnO0GuwgYjunWIAGizNLKPcM7G7n%2B3nySxUIPU0riAWJb02Zs23fe%2Fu%2BKjWay44MULmnBORSqvBkAP%2FGaO1%2Bd8OHTWcZxDcxCJn%2F%2Bld1g1hsAv0aKr0bJMjfUOPOkuxaCVyV1KTd5YQfJRIrCuMEhhhSmcMOsBDVl0gkJGCA666idjijmtOceU9d4vEjAGKgkO0mtNIy3dmURz55tDzGeEYwL89n65bf102L4r5a3bPe3o0J5TnZwgjTLOqUX0vYaiIMdGRSpx6fWyocuetHk8b9dMiW59rgiLovwgmwbexjt%2Fx0d0Xbt8F%2F6db%2BOke8XFeD7FsYXvReheCRx8vIiC8rHWNNnxc12nt%2FOzdlS0trhqSyljZz2wXBmhoFxS%2BSKODSe5eLof159fTZEQEvY2u%2FN2IysoKof3yBL9xT4RP9b5b%2BlewuER7gP9CBDZmBpRImgjYZias6oYI3hNNHj0ZmFVQT5eY6Ssg3ffcSMOjorc0GOqUBsMpg%2BJwwqTII8hWFh8JzPrB7qBRzVNFa%2BW4SAuYQiqTE79WspCDbT%2B9Ki%2FMf5mg3KzqQt7%2BdOQnX%2B4Tm8nl8eWobnKSP4US9ujethIbbhhbpvujPp86JcMy%2Fo6BfBJZ0BZoFNVFZwDvB4t8h14R2RUi%2BPVJwfw2wnTGDqzx0QatQ3GlXvTJPZ7wDRYsqE954%2FZmSLBV7Rw1BMXmFgXNPVGwm1vpE&X-Amz-Signature=ca1cb2c2e138ff14588893a3512a02b2c723f2b082fd76001283553fd836700b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6V527GY%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCeEk6P3W18ZnutWkcb7mMePYpzbqKp6RyWHTGk%2BnDUWQIhAMap9zErMpCHkXApa0ty2Fcx2kCMD%2BIiPNPno5RLrPKgKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeorCsLu70%2BwXMfSIq3AMm12jtGfig9tJBVtRMShiggFmOsCofetMMSAQDuI6345%2BmX9QYrPSkMeS07Db0XZXXZwhNi%2B4lZGi1yuVCDqpI0QXBTi4gRzXWODbgnzd0MIhdlFntVl1nPYU5F9YMqz4ycWAPKkqBmjfvJdV0qBszIoQEy43zQT6xadF8rWNg5eadSkF1Rk1NulWNxzrYEzOCMmjvkVeCaWJaR0iZJU1UalDQTfP%2FDL7PQXWWFQUx6HTZ0fr%2F9N%2FNjwWPGIxpDZA6SdTHGPYmrLY0NVEgp28%2FS%2FehLwmHpvmPonQ3Bu7hYMm6tBvNWDONc14MXSz46c2zb%2FCu2o%2BSSLLuW4s2Wj23Zk5yy9uUIXfrzN3jXbYbCzTqns5F3JfeccQ1dDCDWBj5JJ3w1Tjl7CZSzHO68UGz9L%2BYmDd47DB6LMnnJ5vAJKaIFe2GGE2R%2FLgbw2DpbpqUGSGKN4ENRVOX2XovmlHvpSUEJIbYD5mlQVE3GXDSokit%2FmF1XE0L1H6hvc3STX9LVN7PE9L9qEdf%2ByFVm5tmh1t%2BnEzfvpphNa5JJZ1m0PuvwXfjhgOQp83q7PY8ji5B4T5TrlKKc%2FT7mrn%2FU7AINjgAHqYouDugGYnZkSJgNLnIh8m2QCcIco4uxDDN6K3NBjqkAb7D2BGQCpVd8L7TA3z3Y1MQFb4mlDAOwVSADZFzaQX0X%2FmXgbib4bpQIVpoIA2u4TEF8AMOy76lTOzGcuG7BXBC%2FDQxRF8mfL8YUZg9ccf85ayIOPd1mPwNw2Wy2BCmMjV5xjitzot6mQZeP1CpoHC0zkkGiGCO5p7BvkHuYd1QHfd31kkFFIjVf%2B0JElWVmyOnI17sXxwpr%2Bt42Mz8DNdiGLIf&X-Amz-Signature=dcfa34475b049cb23ccad3dcf669f683068e045710584d699b6e3b193cea20c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=0b697e060fc171bcb99bc6c228fc5dee018bbfba2ab082534c66f97d9a580db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOBD4JD%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICMJ1t1JCvMzVpQDWL81sr9ICHVjw5v%2FVxdfkAHxlbyEAiEA%2BddmtUoO%2FTN8p2JC8%2FiNmGzEtGUlhmuJgZ4KYwkPMqEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bm9Fkj%2Bbh0daaakyrcAydZRxwU2bh%2F7iDiBzTRGmpmgujK5SUs%2Bv8IjuYByNUi93Nc8dT1NGikb9%2Beh3Ah3ASiJZpRz91PxoRDXvABNnsV8KcsahVtFm7uZnBS%2FFai4AfqVNAu77%2FaAO7Li%2FYJd0WF0RPLKSwRRi0gGuYUCWVXZb7FsSc6lPrAca75ZkDeOetcDBVK%2FqTUgSUqo6tZ05X%2FZXth2We70pnDB83axuUxB8UveXvTaXiHV8uSK9AsOgN4R6q%2BkTmzegBd5AW%2BU0qxx7cWROyIAFreeVcRR5QkW2MxB8SiB0qmDpOiVrwymFzcI0d2LWgPxl58pzvB13MJ6GhHAI1H64AAwGqlAlit0H0ED%2Bj8WdcyWIFxg7ZCcTx1bi6D3bTbjDK0ZCZtMRWgfUbr9xeO6K4O5yHn85sA43b87iWg7Ja8GeJy%2Bb3hjYkIaGfiai4y8TmRrPwX2K7cr2%2BczZfDrlIglGChra%2B3JTowDQpdHoKnfaQ6SWRq4NFLoOEIiOJc8tjMxcn5Y5aQqNFQ6uFmFcKqgmxh4%2FDMkIKhxcD26UOn37qHFXrb1C6iXRhFVvBNJIex3JWk8zZNYJ3n8d03rX%2FpEXsrUUv1j%2BmNsJRnCH%2FFb11P7EUuNQnix8v%2BBvIV9SVCMKrprc0GOqUBuvpz6n6RMDZgbCPbaJ0zMgJQOT3QKcsMt%2FeAZY22BXbkuoNGkf8xK52BOFiQUoaBnIc41v7Bj9t4pMg8d%2BtcfMDMmX%2F%2FuweAmSg94kgheI1QDPu4st4adpr9PBU2vxdauRye5kFS8y%2B9TiswQ1fUlrt2vtWe03WUhl22xL5XKfXAPw4VnehdwlS67HNi7ltG2krsYOGzxcfx6f3UJpC5qV3iveYQ&X-Amz-Signature=4a7328c9f582b2d83eaba4dc850ced3e87f9b5f37a0306d64a077346cf8afb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=04e7d2ca680c16a771070355a61fa004c56fb16a43e62ba087d45e172125f6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJ7WIA7%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCWrSgABe6ArVAO%2F44csNtZpRkb5mG9Opwg9k0yhmHJZwIhAJaHNzjsCnNGtSd28paVdTkxeqSEvknlEtnj9H5uHapLKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJkozsiKNxZbk6Ja4q3ANZa1PVB3rzZpg%2B%2B%2BEUif6E%2BjnS%2B71x5XbGReUr%2Fc%2Fe8MqVWQMGDuj2Sc%2F4Nvro4mY1NBrLrraEvjiAVofUFgUI0Tf3rvKaqp%2BEKYJsA9SmOS5OeJGpvxsws3163q7Rb%2BOsfv40WWHNLlgfGz0FYS%2BEsrpiwQAYpB2XTpp3WjFJ%2FWlmpmZBFJxdx4d4GiP3Kk6chmOCPqFqMLtpeulhuE8cPmq1m8K%2Fy%2BLbOV6zBOmdJw6lMaqQdyTa%2FAaNayfZIeWKgMdLllckf2esR8vME9BGw4MLKdGezD3QiIVMV0pTSebr55szibhomILnstkQcG%2FLGmYv3BVNWdW2JCbDuU8kpY8j0EIZ0YvyZBFGLrZylEQqV8Iw0sf%2BIy6R1KOmbCO61GnDiAZdGSTIK3T%2F%2BgTWUuy5ZeAT5C6oKBKQeoCoX13m2i88NRqNezY%2BM6WReN3MetHeUAY1nuAVH4U6QkjFhO0eLogKTh%2Fr70hZ3ZyopgOcm6bHU0PgMqpYRwP7taeR1XKnYnE%2Bh8OKuRg7QCWlLVhbmJLQJqDdyTUeQ994JNXBckyu9aHdB%2FKb5bL00eUN1MJMEv%2B20A9XCaOWgiYvS30aEPL4WHzto956Pasy8FwbGCw9U2wqFOttpDDm6K3NBjqkAaQ9Cn%2BgCfciarJ1BJEv7qbWI9PuQiGtVgjWafZql%2FJKapksPcaPqdgeDUbp3AYx%2FzyPpXyIos4mjPNKHQjXUcoxboeeVooiNjfLm8LDO2IhgbYs5L5BluoNkg4tDOlwhswE0C2nRXLORDW23TFmpQooo55qsqoxmVf8VluGa6hx8GfOS%2Ba5xuWlSnUXipwhLh4NrbyPJQWvtlcVg87J%2FV4vDXr8&X-Amz-Signature=ddd19db89adb1e4285be1c140546e7853efe3403b12e9b3002ee3d3aa8bd0238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=8ea039a5cd52ee91cdc457ce58a91ffd0f9d913025a6ff32a58874bd28122567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEI3DBP%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCwKndszZY%2FBdugOf7XDpKUUJlInxxHYsG6fkJJoNKspAIgT%2FIcSKHHb1uf%2FcGHp33NwPYOHN6g53iy5yqAX9IdESQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBZw3v1M8jBCZWtESrcA4F9PRWnEMJdykg41RhEl%2FQEN6Vupc6SP86Wykqqx60Lb%2B%2BNJN%2FtSiOgkAq4IvxuTn2IyKG432tbcOu4S2C3rhHTaTOoO0VCHVvphUjdM5z4YWcld69CW0iani3rdIjky3V0tejO6bAa5pUO%2FFw8ZYGxlpwe2bl9auc111IfghvZWthNVWCXusPtALmArKcQB9pww%2FqtPIKhXVtQFDT%2B3p2f1QdS5w7JDLSBSgawmilmtE5EmZgA9NcKKXUo%2B3rb1uH0HszPmwcAbICbD2W07U4yEj3FNtK5SLnKYdMWZ0iqXX09C2i2IEQliRQGvph0vSkpLLhaaCiMZoYArq218m%2BB1UDOAvXhNGo8jalWHK9B5ObUry%2B0RJDnhNWMv%2FqjntUJXKBt2K9Iqtqrlg3B9PKNnuHVZ48OccnGfGhfgAaHJI%2BjZtmvc7oiKfSo5CK8f7ot3SVQAL%2FszhBFlq78X%2Ft%2B%2FVv%2B4G%2FZW%2F6W1PM%2BLusBEufRXqtFMlQaniWLwNTuACg5NLzoTvrJJOK995A3vvL795Ci7r%2BTvoiKeWABxQiHJYgiCnEZ1InvsGDEHiqC%2BgUEh9W9H605dFrHHZG8caJ%2BKKof%2F0jhVwl6Em%2B5WJ1j%2B6gHtkm%2B1RlUtyGHMIrprc0GOqUB5c3MIkMDEWJOJf%2BkP0JjovyA%2BX6jEvsWdvL1dqRzZSgH20%2FmkTgqc1X4FWPogBDPa9fNdBIciSnVpVfS9krAZrTkpGdX9nk0th%2FKWWTWXMLuSSLHdc%2FVvowYWsJ4dFP8YyliqsUUcpHyowYQooJOUymaK1rn43kO9wsO9QxXp%2FAB6O8DHW%2F0eIsU96FQo4P8Jv0OTOHC0j6CM4xYnLWM5M4UOE1x&X-Amz-Signature=77988eba23663c5dde1f1edf26c4a7b8c3400dac3cf850ab6feeda055fee8cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=a6a23fef80dc08de74428f4077ff67d02374d072fe068eff93b67695f8302e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNHWTYM%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIC3MtpVXq2Ya0x83pze6h%2FDsi8DEaZWXhKM07LPkeYjYAiAOaaVMVz3ahZTsqukYwuYwCbnFd71zzqctRwlMSv3W%2FSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg9uhTgVX0OmM7JnaKtwDYt3Ua6oVQ6tvcWxVrQOcSFIqdnn%2BOcCqGwGjf%2Fwt9rm%2BHVusuuURURLZEzRraQAtbdakbxd1MNtgWOyLqBnQCVgPWNiAZ18%2FUbmNvRE9%2F2RTIGN6pbrLEIeY%2F0%2B94o2d8WkaEs8wb1rDwJxOfv%2F6phmCSohsoCxM4yn13nUN0R75fnAejo8zLYT5lWaAnVOvcEumVfyv6n9noKm1bo6o%2FqtO5Khs7lOPNayspASSQa2ujQ6CDsGXVUcuF0z2tY8XnNuzKCYIa02aSrlXBfcweJNwq%2Be1zydHpG68PnScanfrPkMgSlAn1o3wN9owmP3bmECCH4T3yA1wXoY0HtbnrBNuyJiEtT8ijlMDH24UUIY1rrHvufsa9kchOkhc%2BeEDRA8af8PZdJRl8Hl0tMK8eYhHgzpqbBWZr79WzX3VvNVCzJtPbtNgco%2F0Zz2daR6pslTswW%2BZkRWv94XSNEC7nvPrkjEWPK6Zc8Un7LH6rCCKVXSrAIAr8sJ%2FBSQ%2B%2BqVLRvO6ZYYKuIYGVyYNwoDBL0SYWS9DLlRHTrVruavQIvOCoG%2BzGbOh9c006CRn6pUuzuGZ4vIrBLNdMuoGXlKJCGPMH0VqA2kUbuoNuUEvkmo90hNDjZp8ghU2IdwwjOitzQY6pgF52HYdcLlWOy5soZl3HWDO6BvLwiFipiFOphAKRn6lZdapEmoENueA2JIxYYxvB%2FVweA7dssQ0%2FxJzYzdwljG%2BWiN5VYCQluMR%2BPAbGoHsWgzrdZocArktBqmGNw6HI2ZoPVQX73q4bXpRowj5X%2Fx49YVsRrESaLOP%2BxSdKU%2Fwlb8HckFpWnm%2FFZJ65qgr57B3GDDPrUKRC8w4BGmYx85AiJbRCxOX&X-Amz-Signature=fde500adaa1cd82fae91e3221284e9023a035bb95c4fff1989731b83ecb813bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=a94398963b32238c6b0198ba289ac8a9d97b231b3bd8b304221f94bdad78e735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4NN7CZ%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDLh%2BZylFb9w1NqOwuvwISG6n1nK8OAzi73AZNUmq%2F47wIhAMTvngH80YabB6HhA2mbAOQbNZ%2FgN9R7dNKmjXL9vRiEKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI1LJZmAqoLAbDiO4q3ANFT34Jq7oiUMaoVelu0PIdcc3I5RqOoo%2BVp4DCERb%2FPJPezS0Pjbw8YUenariwpEOLvLhg24pN7RJTI5dQVHS5CMsrxsoVaMexggRVLfzljrp0EFBbjojjzbGjyuO2OHI4pMGtOJdzvY%2Bfdny0VUfbMPaYM%2B7RCcDtKlZP6saV5odcFxZfPMIGslpGVhqs%2FEWwGTT5CA86VbkdGDtc4ibaqKYuTdFffeQeJUBzXkAJiXIGviPJu45HV8Rrr3P8w1hZr5FvglSbaqrg3V7VfSxbkB76vg6xqrsELK76XemiyPzaOqq5oOZsr99yeOAuilgJH60BAu9V113MM%2BlOlfd3ATIPV%2B2m8TvINafe5qBnswWlFW95%2BfMlHgapn5JWdLCbAy3IzG0ADUm3hFiBTh4rP9dyWUJGSxIkzYlNDQecguDpDGk14M7U01WdT3DQ5WNDeHtYuQH36p6KnWpjxKGxHpgHI05f16dWwTlTwSVwCNO9X7TJJr3UrKD3Yf%2BQlB4BnRnAWDl0q9ZWEfzfyWEbAbS0P%2BIFbnzBwp2Tjxf5y14%2FOPDycprnp5P10e2Y1bnl6w1W0PF%2F4I1H5bEuW9oR6Jdrg9pHDcCLlkiOhbfxAnZeuDN9k9%2B5%2B%2B4fLTDn6K3NBjqkATJBHY1mA8FQIK4l01oZAwbJ3GwJvrdUuFOYBMnfAT1QxRQI6kD5zdsTpzg2Pb9h8kMb5jJw8SNWc7IW92s%2BIZauMTf%2FCRwscb92d5zUjpu57C4mhhl%2Bf7F%2FZyKYbIcH6Atjll6V0kn0AlB2TdmsQ7ws3O%2BeWJP53wHWpHykLhnkUMjAAhfPREWnnP%2BjinvgxoqeaeLoZypdq5g5cHOnJGF2NZEi&X-Amz-Signature=f733bc8d27e31da12cbae1d3bb83ce28051a76f43e2b121d494820617c3459e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPIC5PY%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCaVySKH%2FXh7q3t0%2B2gSXnItbVTMeVGYT5%2BqHvR48iq3wIgGAfojhgPGkC32DTOsvK1YUSBw5tkMZ7vqiCQ572LpCMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYNOuDvEo%2BuQTI3dSrcAy2qP0e%2BxE1SSUPPV13mKgDv%2FrlNE0PVPPVWts64TQXxg0J5FHVa9NlN3OQddr%2FxND%2BIj2%2FzV2ZhCRjlGpJDEXt4yOhJhRPloxWJEbaCzeCn6sZGeXbGI%2FI0thgDmrzLmwoKi21LZO8wZjjqJ3IZlr4A983aQN7924u7WycB6uqlXzPxqscKO4oX9seG5cPXXEykKhOjTUWlVFwofH9hMEUg0igg7Ntm2gW2ePwQIP%2BBH82T%2B42M4tqEoQVa6NNtuQ0v%2FjQS95Ve%2F1HSteYekkaiF%2Ftjh8Zv3a5UhgR%2Fpd%2BEX4mPimMy9LIoPRQIjP%2Bdy7IMJ4pmfdxmqsu8ZoPGpuxe9aOUJ%2FwLe2R%2BdtpX5fjC%2FFtqwFncujnXgk38nCcc04LIul2wWRV3fhGxoomweXxXJj12N25fzBG%2Fxhdnh5o20Q2vYQZwWn5maj1yg9WuP3u6AxOVylnkq2FozoF2xba%2BeR0FTx0kAYM%2FcEql%2FT6aG%2FJccEo119ok1WWVHrEtpg92uPdIgzWBZ1gPa85u5kB%2FbMfa4qyEYLAFRCZLZ3%2FqHml4SxlOsnOIeVyYdZoik4xSc2sxTq8JQFu00muDr1KSo3LuYjfCIsmzFFbfyCFe4dd7VS9G8FG0tXyhMKDorc0GOqUBHUWPS8EwNduX98Yo5SveFyMLEvbklSwuigPaO9Jkf0BSxnY%2BAC5oRl1E1Sz0tsgLMNybaOG9syia%2FZqZDq2gouHJsbpnFk1AS86CS0gNe%2FM5RDgsW%2FQwz6FUM8I3dSkrF0PLI6g0i9Z7lO4E2GtA7K%2BMqDQ3ICHqjv9LSN6da3VABop1VB5zuqXrXoNMEbmFUUVa%2FU2wwpxL6Efe%2B7mcTijMy6%2Fi&X-Amz-Signature=4848c50cb813546e3d1d4eb8f3c7a5f6eff53e1aadfd581b50d8116a0e0cd601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23WZWPD%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCq8VZYJV5i4U6tguw9FEwdC1enQMrdBifEwaxjFFH4mgIgMBhgxmYbo6KA4Mfs9ieIgE2cfZ79McsAkJ8Von8ElnMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtesOOy6rX0Dbz4mSrcA7CMl%2Bt1jzGKLFw9ZYXWJapuW6Kx%2Bh%2FDRlJEIIfAkalA%2B17fPkQ3n72SVWfPs9ICnS8fYY6zwBi9Ur8pq4S65q1NjWhKT81my4OnpS1htSYMdZEoi5RsPHjBzigtSR%2BAe8%2FdDXggWVcy456G%2B91TzeLnpm4wVVg37yjQJiG5ZAx8lEKD9AFnLowqDhHgQhrxiTEYKhJ2dJBc2TaWwFPgje6vhrelG%2FXZIxYEJacrinhwlEYiJWNauWYUNe28Dnbvdl2IMfN8WG4OqVqc7eOkjBqcp6dryNtK8NmdildN0aE3sIsGTuHnnFpr%2FL12kRyhZW35IfX2KItg%2BqUmnbBiBluS62Oo7ArIb5BarjgWZG9yvOEH19eERdAT%2BAMIYxPinhHtzBs1EXugNfGHJEKmMoDCEsxfT4AlpTOvp%2F56XlDlW0P2AXmN8YirC6mLmTevTGGjKfkDUdXadNQ82f%2BoX26Mq4r6pl6%2BB8VZJzaZnfPmAQwPZqAO2Ktv0LXEGl5kwEPDteIfd3TvcdutRZgSXt%2F0knqT4%2BbfvpM3UzQ7%2FpXB%2BSvdLbTNJTRN%2BNJwBy94458wSPCcw12q7%2B%2FAxRgvwuD509t7lKn1DA56y9ZNHX4rd6yaQ2y0J42UTzRaMKPorc0GOqUBrzK4IT90KxyCQySpDgXB5GUrEOmA79szVbrEoUV%2BzZqEMdaw6pn62GMdp5jk3BUjvnt7gXjq2m%2BEHWk2EQZ%2BhP1tsWjZub5lMrlJmLLvCmFym7K%2B3hKTsUlCrvbm9i6EfY%2BIqLEyRhMg1FlFLZCdXI9T0A9hlQ%2Fjoo3%2Fnlxi8bTdbRgnC%2BPfLumHSbZYtSmYF5y1%2BUl8YcOrgeGFub6D1t53UL%2F%2B&X-Amz-Signature=b89fd7cd0bb7b17d1fb06f26019c17ea07c11abdc61e59599567921a82835e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=fc3bb2e6dd4bc8a78064696351462ca19d52bbd13836efee154fb6a9e58f6a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2BSHWB%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFlKCYwYxl%2BwQ7i%2F7UZkcCBXfrVaD9JZ%2Fu7gO%2FReaiAQAiEAsjMo57UxNxA%2Bmp0XYt%2BJiqyj2MjIHA%2BKy2P9J2sjmEcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5%2Fm%2F35VG3MDspv%2FyrcA9Nc6NHIUHsdxF5rjT2A%2FVmwb7jERfL%2FCkBip0kWJCncR1DHfyhXbeBTb2fEOtHoOTi8ciaKibQ7lLcbLtmwtkqA9zx0YVcTx23vvbA%2F2sqO5wB4N6MTE0p167O2g6pBmJueoK%2BHwXH0sHsCInD5HgIL33IGrbnlgHgSo7oVE2Jxic5h3Wk0W6izfsiiTZ6w%2Fw%2BodOGUqTIwe4RraNwlOJ4n677XYjEa7Jug%2BRcPEbRe6UHijpr6h5y5cIVyVb1%2FGmZefAbzkCicbHL5RZn53NEp9KvTIJsaIZM6rifo40MPniXszPM5kzOW1BlVLy%2FS0w1mcPtsqoq7iY1qUj%2B61tXRFOTgS1TYVm5fqvUP47TOyAlQX5cHUwtI70hbOp1i2ZOz2oX2psHJhXX7trnoNy6Kd1z%2BpNumB3%2FukxQI%2B7YiD%2FcFwM36tGux9tDKHyv1Zdy2g0x3f8WmDLs4Q5M3XzwL408tuX%2F7Yn467vTtDfecs0aa0v%2BsU10gzn4tu%2BJWgEtCQGxCbxSiBilPoblP5TGyJjnYKdne1NQAxf131mQocpWwrWGzyj%2FClwo8fowizsUlkx115YaTFHAUxuVKoxjqIqSX1vPGqPw3ovKiYWDE%2FiwGAAloBPOSrUBjMOborc0GOqUB2drMIA4g%2BFCK30dTbgeIC0LKSUaKCMxttzz057HrJKfrnICMjFe2FBv93XZadTvvwLs1%2Fmf0B56IptpCwRrqKazsP4JNrEQ0e9jp5Uu7VvFMAU%2F%2Bx6no%2F4QfDw%2BTEq3n3IGsWZUSgRmiCQQhd1a%2Bs4n0vIIaat1jnGHKXrMLSyiGft4Kq%2FSdFS8t6HaaYxtltFB6BTa7gDca9zlbNS0LXjAWjJYP&X-Amz-Signature=52267519a8cb9cc62dec92a31d01111745f4a6e948a81cb8f117431a93734bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=3a1b5c2661716d8c2a0fc4948ba3763e9f4ef830c74a19cdae2e9522c7a6285a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=1435b8f625a169d4255f8b181bc4e5fd53fadfa6cad2b54da73822de5f3a5fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=8b458e1775aad88ec04ef314922054b6cccc79d9381659ec58bee761e7f5d75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=4c12c7505759e48031cf13b9d61d6ff9b4ffd6bcdea7346c0c140d791ae3002d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCQW37I%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGKeVtSKvCGOs%2B%2FEMdtF75nwaZIrk8E54t6Boes5YZX3AiEA8AY%2FergIcqv378ztkSKMxCc%2ByfIOo0SZRc9QNFpPpHYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO93EkWX8c0jvAL5dyrcAy9hEF0%2FnGYpOCHQJCyRfW%2FJywWDcoecbQEsoKoe%2BDBZzb1fD52tNIVluRgbVJwKS2uKIRuzutpBJuDN91ASGfWF%2ByEJPWJT0VyxIpncULMq%2F%2FS5q5JzkSzMCTcHvOvfGtODEyVsxXC%2F7Uv4sf5JZbKP9KPShDeMb3gYeHbrfekzMyFYiJFbHEa5P4GStVrbgZ35Bi9z8doJ7oQRi%2Fv8oTY4DGZFK2CqLGC54MaoIzxDB7Suzgzxx8goOFW0sS8EYHZjjSrOJs%2FDQKIoOpX33MewPoEpZnsqB4y%2B8SbP7NGiMDfV%2BdYnM6kfArlevUzxrbGw0uzf%2FVGRMMddUByDtrmNgJYV60blBHjR2R9yGN67pdKZhRb0rsE1yDpAHSeuvAEOqVoG8QBzas%2BMF8vg%2Fqw35d7v69TCqEAkVJACoZd5TK1Lo0EURYUmKqhdxEtl5Zeoym4lwk9SFU8AZfNSEF7NDOIA4tPa170BjM8bTQjTI80HlGSB6M2Ku%2FDgN%2BYdTInjniZvh6nM8H6UCJM%2FM7uglfnlWbK5q1CYMsuUnNdqiIbxs3a29RJxW1xQT578mYKkhojuWzkV4s6yNd2UXAKRe39HICm7G9zDPdX2d3mLQcnzsN03g1ijR2PyMJforc0GOqUBW%2Byrya564sUWwo%2FF1ZDP2MKw3%2BsSElnNo3xwKSCHi%2Blttpsgt5w83wIyMAKOtmJ9STAInX3LJoANts6y21j9IebQQ%2B%2BFu1RGPRjS8Hg4kyUljPsYid5pd6y6RaTAnGYo0g7x6rEl%2Fl5joKELVDho8C%2BNqvTTt5DUT5oOj15CrRtEp0yAX0Sb9IpWHi3PyXfGDtSAzJvuKwREnFgdAyj0d2Mz2%2BJ3&X-Amz-Signature=49716e6f447dad47b41cd70d2253b773cd2b97b6588c151867d45d07adf0bafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=747f930fe41894cde3ed88bf13f75c70948dec8c37958d3f1f87e28bc744f562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=3f6915fd935fe8e05ce629513aa1770e66133b8343c7ce391a6e2d389f0c9b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=684cde4fd43a5bd58a4483043a67282a0b803a83fa0423fd53e0f166b8dea862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=1151697a1704b7090ca16f80b1a0cffbc7fc356194e00759cb8cb31864752500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=a4ce661c26f72067829220c892bce9125d08e8f6f58c0402e664dda84983d673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DERZ3M%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC9w9G%2BkWbx7Ximvf5XGGkZ7ME%2BulMOcrEJDPwrzDukOwIhAKQhgVMx7J3sxoJM%2FxQeILiwndioE%2B%2B2uVSUnUc%2FhxTCKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7KYPQa19fi0mtPiQq3AM%2FfxfKjS6nGrE0m4URyDN%2FNF1CZN7zhpNoMBb5Wmzwi2z9TROP3S900hwT14uEBUMBDpxjYRJvlv1K0yEIHi26z6teESixZ9n9qg79KM4PB0IQ1LrjuxY1gp%2FVu5PnPvKIkpLHkfLS98mvXu4QHqjBjlssJk6ctq0du6T7eGfTejlaTZGjKxEbByPENhjC952zk%2FN9oBfhOTPOstVHD202teGIMvsjTcgdI9l5WIQeBPPacG9EH7ldEEu0OOm2P%2F7%2FFcYZmH%2B%2BNz3E5mrJaHyXvbkmMtrxY4QxPLFolCZkcJxafffER4DSXJKBk05hpntbjGc5SGxIoiOEJ6RHr%2BvhYpPEqSyZ6rMeqnSBxllyTxf5na2vdUURJFP3vrjJ8mHRfsffjUWw8qArHEpCFXt4O96n8PxSUDmhOtJHMjPzS%2BvdPG3YvQE9lgOYB3Uh1LdFATljU5uqjYU%2Fldsvik4AP2R3ITHYX2v4dUKgncS14iZYt52uEoECRP2%2BttjEA5HERemYra5Yo%2FC1hlk2haa%2FrtSItd0%2Fs4udbDkysuv8MpViqbrO5Km9JYI9oxDf3%2Fe4kWssGgp8Wxvrc4KFNOfWDht%2Fv7d8nt70DWAQubEMvjvfFXJrUoJa2qdR7jCT6a3NBjqkAUSv%2Fgmws9dsvMrFtxbJcaLNxTTtU1fY2hx47kQp37sqBVhGhUb2wKK8jjfK3Y2E2LdgN8rY24Tm2OlaO8xkOxZG3dTReQQepE%2FMEWL5ZEtIF5%2BYKlqlHAhFdLJ91QQIpL2gGCif4%2BBwoojwVTJo7Y3oSRaHmuBuDpOtqAZJCFhZFm18ZL3qk5tjp7qvgp%2B2zzdGRGnIXEbfGlIKWg14J9gMJdQ7&X-Amz-Signature=2a7d0dfae893c0e1131feff820b60c7e1357752d023995ad326399dd40ef6164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


