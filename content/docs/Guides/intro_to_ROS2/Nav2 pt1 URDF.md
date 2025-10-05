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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=40557c2ef83f39902b4dbc9ba810598d036d46c1401c51d927fa9ed1a0fd3d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=780188382efe38e8def6f2c4b22643299f90497751d162571e35aa2ef3c85892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=400fb10b6c718b4eba503928d2c4d0bf7ec42156ef1c355161593203f1587a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=cf9ecd7b5a9bf5fc8911902898a60451389ab041efe92def6c6fe42a4b595b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=fab2d8ed476a7ebb40196d341a34df6c8e3e6fbfa12ee6ed46fddf5ae73ba27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=a7c18cfdf7ac6a401c15720b53c34ed8e3e9a3a85648ebeaf2b22f22cfd6a585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=a1aa4cdf00e9836af774c2421e040f2215c70344c5c4a48438789209489ebf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=8714cf1524ab7bfb1efc4f21c635f90a7334d6fc0d5e0a1b0710c7b73e5acd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=0b31aa680aad866e1f6a90306ce02633e22434e7b8212337a22a468a2b109cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=a340af73cd174315a66cf625a13c33373dbfaccd900b8a9e9e02eea54638bcb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA7HFDRS%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDso982Ix8Mbh2M1YPc%2F9a42CEYswHQJZc9J0uZvfA32AiBpfXrkaIu%2FaV3LG7I0xPrPRzdvyDN2uH4mqnsJeYQvZir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMZ4GaU03IDc9BGWP%2FKtwDk%2BzpiYbeBtVeLw3Buk51w1LtZgwrBrarb2ODUNIGbeadi6IWQ7cuFCInzh3quyjWVCd6vFkTnI6ZyLoWKn7H1%2FtFifS%2BTz4r6VsBPFc99gwQNhHMH831yDu2jW8yhjgMNCjfI7GFJlBkRBAHWpWkfpXg2MB%2F7upVwC3lKgxseGXwr0jTeGpwV3SAGKTWrAVZYvpYSt1%2Fnd%2F7JFZf%2FWCqJ7i%2Br8%2BDMAjBbJ8RwvObZBvHhLmBDEFnXBcVcjOf1PvihPZr2Q%2BsuwxGqtfQeSR%2BPn3wAisz0vNhC7Rvkai%2Fe8tK65zHptYMX0fsPu8fz9boOl2%2BBjoffoAG6lTLvVqIOc7SWkNmvWfAo%2FAhZCnUOMhLEGXSlLKaLPfWQ%2Ft3RdpLvC79GVUQGNlP7axtnq8A8prKVm647xfujMK2uJ0WNpW0xVmC7%2FNg4iguKbsF2aEk6O9G2B5Y4QsvB6AQ%2BuwhAW%2FZhiZZt6mTKTRO79%2Fpjaai9P6d5HoXzTitYRS%2FTzzw5FuyOeaAMDwBMg3Hu8zFcq96o6EAJc4Af3Px1M71%2Bf8jvhp0bHuutk%2FWNQfHq3Hhfm53bwdVda6Gzq85tQSOwua%2BOrhbe47NmCRfXLtA67lz7M6vgWtO9BA0BhUw%2FfSGxwY6pgGL7nYvwkWHTOrNLSHG5wiKDRRcydyQ8GSlAATJ4s3IVU3MzvZlv6TLIhrxCSxF9dpBNcKUve8CU5hMnCDsl1LfSVIxCPRYOxk6OxrOf3q9Ta%2FvXJZWUQ5jJq8wOPkwXs72IBijy%2FMlTm4kMj9c3VkPvTF9VpcDwXNr0b3AnZXkSfvgRlv986442qH%2BZ01CXtrGcLs%2BvB8jlCbhoWnngy2Z4awxDMcH&X-Amz-Signature=364da56e4477670c7f3e7126b307ac089511a447fa8f065a39d831cef7f5214b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HLY4G6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvglXNfeLlD%2Ba95NGXx4ExYbJab10YPVgQeP9JJMIleAIgYa6yxdkDOxhJYam9V8h%2BC%2BktcuJgf1m5oGg3Xiz950oq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDH963fWZRbIwop%2BMvircA%2BwZlAWpSyUjbFldlYHwaaX6OnhEn3rKdYYVBqTVg%2FFYEC63k8pwQk3TwE%2BrOgGvEaq5Wci4lxovUA1I%2Fp7QS0WvLV0Ks5lVlMXoafNyZ6THW1UqRBnTp5oLW%2Fl4T8ZcshXk5Uk2%2BZyTlSD3GpwPzy6HvJVV5OtNPG6FkIxtiIm1oq%2FbX6viIVCPMCppfcG8l82de6usGT%2BgaFRS3hk%2B1Pf19qEwi%2FKmpyvvRNvuQE7YjhuTqSGGvisvkfCx9lbUFtgBMuk0pd7wX6KxMKD9tX1hP%2FyZY%2FaNlSfTDoDvQWJRWjve%2FaZ06GoaxGl2a51ilu0y5uqd2%2Bbwga%2Bgam27uYrFnq14PpItdj%2BDMsdBJqSYVEUXcWqrpmHSKRkQMXMoFNxaa5lg3oyES0TVtrevg2bawclxDE8muHfFmfyvG38kOrVj6kLjdeIxKkL2PuuL%2BikQbPvi4syl7%2FVpkbaIOZTjoY25me8BNo%2Bp%2FxCFVrphHkPNES0ZEf6EuRQtuTXC70vlPLyTiXOyWbj7cj9X60LT%2BctD2%2BGz19tCe4Jj9akQ1EXKz6ejMmc0A3AmNSW%2B%2FMA4OqjGLn%2Fg%2BeATsSkjrorW8qObvk5gQbQasWKAlUOW2dHIJDzhvhvliWofMOL1hscGOqUBUUy91sCScIqI4%2Fa%2F0iwZNkQTBQdkPZtLMxLHYysaBVQyz9t1O2DRnFRURiSkpdouU1zoCSIlNOCTnFC3o2hhs70cOp2rxgCmOBPWZME1m%2BoTCRb8p6u0zVu5ySQzlmNawsC4iEaVyganU7MmAsIXkkyxoTvgrGCrMD%2BcEor8kGig50ajk2CiJ2weopiKCRA3Py401tOr1k1BT18X8jo61xF5P%2BIT&X-Amz-Signature=cd61d531ca35723c8aafd9fcfe49ef5be8105de460b559efc1ef8ab013937e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZOI6XZ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyojIt1JPpN1oGdOzicJ%2BOHNrieIPNqTXE5MqzMAYSzgIhAJPUEwvPDprO5bMBW6z0XHagjsbNGFrAnxKJlvV8hCKFKv8DCGkQABoMNjM3NDIzMTgzODA1IgwjhvveNpc4LL9CWZ4q3AML7upLycuYK5W%2B9Vm9BXJ8q8cMb88YC14fImjn%2BsSVbH7vR2XNiepXQGyXm%2Fb192WuD%2F0rSkBDcbNfsq4fZaF5AWbXTGEUm77Dap38AUWF5jq8IHMMN1iNODF6RSaf9ZkdUuSx2ZssX%2BdeN3XKCehg4hK0EVpScwZMJSXqk4mO1xQcySFOK3B847zMNEekRgNhq6ksf%2FoqjIDZ%2FTMwbvRNQ5De8toYM4nMa%2Fi0PSCDLSsJQZVYxTB2nbzQ%2F6a1DbJnyySqGTZcCAo52191%2FM%2FxBGBs%2B2rgtaWbhz0n%2F1CQ%2BKDJt1Sew5S3EkTzcusDCdMS%2BktYEg3PwzfiVLdZvukP1O7cysiwq5wLwfDp06xZHBNcErnqKsZCAO75KwSYXYlHOsPjwPDahMytgc2JMYLbP6F%2BUC%2FrovKXPbPZMLlX818Z6ns%2FA37ijG3baAv7oHwJDjo6ByMwRH3KJrGk7U%2BkD%2B6mHWJ66jFuBnoW4H5kwCUBlPnhNS%2BIp2CP5hGt98uKkVMT2FvYnhwN7hz4%2BCr6PeyEKnteXfoPWFOTyc2XlNLv%2FBHddtgzCFTiq%2FSLITbSxqI5Urfv7tTbGbMaIrDc%2BUnusw43UTMFHRd7rzcCjp8oJITFhjcBaLQw4TDu9IbHBjqkASg3VvI%2FRo5rRmX8j2eWtCbDKlAtroNAUCPboUnCYos8XjjII3CCPYsd8DUsvvnqwma%2BY0cp1jdcvTCVQU9VHBD7C6TC5PtiE3xNJFrccNNpnHm3dbV1mmMNletgXuuqch8AHnDmKassYEpxnerPBhT2%2BRXx7eMqTHjGwocUzNc2wnoJdgVVv5ERQrUNu4NUhA5m6UBTOxkerZszR0LZ2pxpM3Xb&X-Amz-Signature=ebe56af32a39cbeb7e9d67a4212eae418d9ca54f94922e56d4c5b9ee90c44a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=83b0faf620e81ef4ac8ddff01db1e3fe5ae729d5773c49ec639a0835fc7a80ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T525DF6%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHamaEXAd17qU8tfNTk8CvyjIeDP9rp0u%2BAxs%2Fat1siiAiAP9u73EI9UxHsf6EKoJN%2BMvNarc3yr2TzJy5KXMWpA8Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMCVpXJUF6LqolA4RNKtwDR0rmAYKEv%2Fc3C3dNslcKtB%2F44qJEJ8C3vj03IHf3YXtG%2Bh8kJGT%2BYs3mWEoJdMTxdOmqv3gRezkW5B7NuUpBx1EUZjk4MwbAp14%2F1P%2BByzgvtfL2bSQuknvdaptpIVxbPvFUXKHlyFLMXEJyY58EyCcIjFtFEoC3p5HKunwFcfQHH0aXwRbU8vei22zPtHXwZW7UjQCT5KLVj8S3zsPhV1hWo0yE1sXccyW8%2FtaBlcdaMHOifK8sI95QvPZEBkyMILfs7S8RI%2FTxF0c5B%2BP6MKm7aXEmVGLvVX3naaZLZu5lk14eZDsD58M72A8t%2Fpj5Ne%2BMjwdx%2BCHZGNP2W7IPeY531P6zmqWrVNVhdX%2Fsz5Kl68DqC2ymkCaNbZtdRmW784MD9Wk1MV0leTVQ7QtE79fsKE52AtD%2FOjaxBxCFBCfzHGV2fLaVkA0si8K3SatghSu%2BFtH5hfI8%2F8XHzewKtDZzzQGuegFYCmFJWKSJby%2BSN5E%2FxJR8l3B72uZaxoBCj1mZkg7uQu1%2Bo004PKreqb8YmkmrSIgISn6%2FOR%2Bw75cUReCk3rLZmX3YQYgUPRQVfPEOrPIr%2Bxgq5gjYeqCmQo2ANQtp6A%2Fq3Nts4atKvMkpBuYINzKSwuFB6Nkw6vSGxwY6pgGexkSHJo%2FPEUvXj1fCQts2SrwcxyBJxLqiWBNzU1ooPPpYh02PJqEu49Eo2%2FTsItWFQ3UUwy5yN%2FYRKALGLu69c6z6n5ZL2g6zzmXid%2BbuNpRbZFq2jCNAdiVQ16kY3tAPU9iyN5K30M9PvEWA%2BF%2FJrB8rVFEIwC1sGl1uZ5%2Bey35xM0dGT7xIFIdlYd%2F%2F3SB1e2qF5NTomxZlEm7PT74Gwt%2FMZ37i&X-Amz-Signature=99512eadf84c172d8ec0bb5aa6583fc692b162c0acf64d4932b33fd4eb752fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=c17feae59eebc4346744861f8a813dc61252955f4fdc3e7bca52af296328843c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKPTCB3%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSZitkbH1SaIURVciLYFGAH%2B5hhwPgwh4VgqCC1cXquwIgbxbZyrz0VHIvH86JNkJ7UlBxEAHjXUatNNGV7LJWbIoq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFN3V8xaOROoKNHFmSrcA0p9XUaRARwIYJMgn14GOklf6nQo2gKcoj%2FSrShCJk9PMpjz1PCB0YY3Wl7FKoLU2MoNwM2qhJM6RGFp%2BtE%2BgKp0%2ByyCMte7ngDzyBPaQAbGpqIY%2BKi6k9sQh5mGjjfw4%2BX8xYt7f0Oo0iLpLuSy%2BGG6hjfv6GbCU8LfJYpg6xLOARfOTC4qLTJUBYBwd8NSBYViY7YpaA3OuN%2B47XS6LHjzzW392tEMllObjCrnnaSw%2Bf1jOkY9dpZA1CtE2tB6MmHHxLwUTdgX2ap86DQ%2BZv3YYYs3ZYfph%2FBYVR7omrjnp6dzQWljEApf895vS8XvjUdgSBsQZEIwlBYlB6A2qZwIGByYVFC%2FaOnPQHAWm9EociDMZk4%2B9zZA8vc3qqF1JTOz7n4bjRgeufiSyAiyRvfl32Eavy4BMk%2FD6OZxEIU4xachvpcn05yfxGJaJ8mqIaTsEdZ8b3of8vW0WD2KJk8aetxii7WnT%2BEwRU4HGLYVzBiKAuLG1%2Fm4YqGUbd9LozMP53tyBzp7Ppxxy3VB7YboKuwDlwoxZsnpwf6Lqwlx%2B5Ro1E0yloE2zcxqhT74NTR2qhVS98SfnU1v3PlQsxxzazw%2BDDy5PGN8B5N%2Fk9bFX6frL9pYRsO8GnNSMO70hscGOqUB17%2B0AkSqbj6eqDxwtpW7GOvxsgpHi%2F5gcMt0uAR8iyUNoBLREbH56kKG4oy4GThczCoJ6NLPirV%2FojMNJcA6jU2xNojVmuKWMHfGz9SAtQTJjgGvDBF9TJgEthJ9xPIDuGqDSIPpE6wHA7pIu8z9HUBpNvGKc5SCNQiGfMjgzLjW6WydptiPWq%2BZXwI1W3w%2FxK1eUro6dOjIw7FCka3AfVQb95qS&X-Amz-Signature=8ebdd4d1c9eca39c4e88e62465e5ad01fdcdd942d464cc89937ef5253d96e0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=8de9f54554ef622c3a004afc7c0cb70cda667151b3fe7fcd95ec51a8d9e8aae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UQ4KCV%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj6NcS8btcd1PYiFUGY2yjz4B3EA%2F2ubQcrqwylxSU%2FgIgX6I9wgSJjCyeJY%2FCO7o7LV1LvpuikQGslEIvQOuZPu4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHNp%2FtLCfSsF6HFYrSrcAyUUPOVtsNBlBGH4dTnT2S%2BZ24Wp7PUyGypdOALYNiwJEZqLwCfaJsA%2BVU7PpmrgrJDfyM%2BuuUgx0REt1yZsTdgw3jdV1kXSUSRDEBVYFuqxRcTSNXiZIEGLSgbycbaOZUwW7NIX3jBRJ44WTerIZlXQGNETd64klXutuuvnNrZcq7zZZCxQ1UL2skdoRRKZnd6yVox4VbzEoB%2Bk4thE2A9s9DP2mp9X90tup3r6HqUpZ3rqiaJPgZgwfu2GTDI9LAN%2BoLxdx8JuY4cnQTvq6BHu7Zk2n9fa9%2FNL%2Bll2XuP7PCHad1s1gJg2eJBZxNvUXE2nl4dz3ZL01b6nfUbULUeCfi27AobOWNhIEuF2%2B0j%2BB04lChhpDTbHIciaJ5eD0NSleWcebcTwHheKtLH7DnPGpgDC42iNNj%2BCus4F738pDeNKfOTFX4lO1R5Cq3dmIycoVKOvXcyFPNwg%2FpfDoZvzyWBTGBvfP5P59ESk8IzPIWWlNHNz%2Fk4cLTcCpRHNSMtUX5SeqLCMqNu2%2Bs%2FuW2%2BhlFbI6KBn3tKpIKBuBcv05%2FgQQxsV%2FgyOKkQOlruHB2UETctZ98hJt48hXZqXL84SHZ3SbGj8lrA%2FGBguR3hAAbJ05fGPRsSdraQKMLb1hscGOqUB8ZqewqtI5aX5C5I9vqM2Xip0NMQR2YN3NLY6FVBtQQ8zR6JrGQ9JvplFcr6F6h9NFTsJiDLasgiQumnFFPZ8rkL0RpJE%2B2bvfZ2HYGCDDgD7y%2FkfJBkntUM0iNUQgKkCd7uRy3shBMXpzOiS009nFCKh50841a1bFw0T19TQqu2SVpdbU23KJ3tW%2Bq9F0AFA6TktyAVYwGGt8VAEB5yys7azlYxK&X-Amz-Signature=620819bd15ef545d19aaee416b9dcf24b03a0301861923e3f46b93a4a48cf80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=eae281575949a36a725ee481b491e4984a29d5c257c591d654f6a3dccd334a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGRSMVU%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGgErkt%2BGHHLa65qcA2vB1uvTg2%2FlUu1ccUUodfUxKJAiAZFL3ck9sMRdr4MJl3ylYGObvzRq7PzxhwQBhhBKFJxyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMQmyXZH%2F9LjD1XRXVKtwDtKTy%2Bq4gkzQOwq5D8%2BBtN4JYAP2xRNw6XAD40TvYNZ3PyzVN6kqjUvVpIi%2F0qACAp85lFCO50nDnFGfxA%2FK1XDahwvt0zfHMUgoW2yZ3%2BSRS75ZeQZwUU1Lz7NKLK5NEtxgFKFP92p%2FileTlb5M8XzQgA055CcWBs%2Fje0Rc0oz%2Fiz%2BW1e9kVCjgSnlsqxga1E6zfsMlLhr1goIsK0E1WD03i0PYr7jASSwvnxONHd%2BEJcOKAeD4f46bv5ksMZ%2BCkYZck6%2ByEBTgdsNjyE%2FfqFfcEsq4yb%2B%2F67lw3cRw5ro0fFD15lQJoV1jdAEF1fIENLQETOgXKoKSGr5lJj9qatrXe4V%2FilJmFYuMlAigG1nZ9sXcocNFrtVb%2F9jCvd%2F23bzXEw7XbNbLod3d6o0RlHN2qLGbsCNRqbNNQysk3BD1PxY1ScbqHboseeUfHttQkm4oPU9Znr418kwp198FeXA9D3nqtumEdSVbMOnCnxxp15AeAJ3aXR9Mk8DorG3XgsTJwDTKc38GKmj4K2nvKeOeTKi0nC7vFpMwPWuwVRw2LEcFag0j8nhtE5lYkaA0pn3oON6uZ%2FWpr%2BDxRzm9tfTZXni%2BKIqXaWc44l3fhcjdJ4zrsMGO%2BrqaE3IMwnvWGxwY6pgGgZrFDnQzhVtFtzT4aTMYJtVS1Hbx5crM6uX0H0YUIFqmscNnxuJXfEAyI9fTYouBI%2Bd5kzEE4MdrGqmz4ErNbFn2yR4ZBiaXkGVIrS6GOx67ddyNNr27lcGWn%2B10boRL4KakoZM4bcZUZnEXOPXfFO%2BvTs9l6ehuWVjG9qEHenGJRJX86A49jk%2FWA5lt9pjo6fY9PjBY7O9scdh2Ii45%2FqVPYBXqe&X-Amz-Signature=333f7e310423f4d54dd83318e705d4996b60a2acec87ad515644b34bcd65014b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=ac91b031d6eaa949abc7f0aacbd8b08b6e018f35b1f4a3975c687a3048bd1af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEGXWHBH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYSakubnUWPnalozRJrxUXdM2a0iXvnRxDEzHngjyL8AIgSs4TYkkjZVnxCrhnkfO1rc9BiWxcFz5LLas0t88rzuIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDA7dRRs61KAYA89WXircA7XQA4fMDQr57tGv%2FNvXaL9P23U3kdE3YLUIZogH9W9VUURHu5C4MiBNFMpfKj%2BiCx2%2Fppwyma09VlVBq9AT%2BHmyk%2BS9AOeUdpZN8uuGRku47p%2BdjXgjph1uJ2Xmn7KiwjE5c5mDQrRRIDrOrEmBUOvsWTVWlWDBSanpgjsc9JHOcSdQJzCcohxsPEWoDPPK99EZlbNldmQhcTlig%2FrQ7VDFjEXH10qSAPo9TJlvLtNgwg1kUE5KuUEs4zmrRxBnoq8aadRKSgQcDvTC4InFo5wvZB0Mni8KNtQAsaJvXa2lNvky0GvtYpm26PxIxvR59I2KcsntY6Yc2%2BCzVmQDtLp5mZaxq4ZbPSQ95NtU7OY%2BpxYOReg6SVRiB9bvsw%2FOlj8vIn7WyM5MYDiwqkSxGqJwXsVhORQgiatKV28N5rhT%2FoAZszotRBWtwd3ZoSzjGqzb3XECkEI%2Fyk2y0GwYJbXxtTvKtpeX46fZkGeMqN0VJwVZQcojfawQPl5MELH%2FtbHQLX6UYz63guZPCe9P%2F8VYQhoKci8OnNhicnPcH8WFTCHWualZ9YtZzoZ3iJEpHVzh%2BiYwYFHONDL4u%2Ft2ciZM4RU%2BEsGqGYQwWWyRTOYqQdeT3KM3Cjqiz6T6MN%2F1hscGOqUBv2bXG1VgF%2BvrLdziIFY364pDiJHQXSF07TZlcszaIyFZcEjujrcFYbMIdyLTwIl2fQwPZeKL0RU1%2B9P5SZVHvGN1%2B6xDKeaznR%2BobgJl1%2FmEHw3wt2ImW%2BUOkDwHiTwgBGF97ENq9m4DQIBBzyYVRARhH2aSZnvTQIUSfJI231wUbDXPErRlEtNtPtPQKR35psaH3NfVdgU%2FFG49YJXhwpIhgqPV&X-Amz-Signature=6e8a57f90c6be39a76f32dcada280f380861d372af039ee9fe5c554864662622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINYBHRR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeOkKv9aT3QzM1wJK4Nh%2F0EenLs5eib6hH72RO81sbgAiBE8lnoJajH5XNRZjeMrGlx8jl4kvtsno02ePvXvG5c3yr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM%2FumAb%2B0iA46by8uWKtwD%2FHHEGlEDwDiUqJ53TVzGbhjdNtl3SrBs%2FR1erxXOjxnhkZdExNaiPBHliZR2gMSI7T5ImCmhBQvNVx%2FfeM%2FUlzF7cbNdTAX7BTiNzbrlAV9KEen7P3eHXTww12z0TeTSKyRK5zKmLekERFQcOiRJKV68PfdmNiPIXw%2Fo3bHHocAsN%2FL%2Fv8f0dgM5igmreG3niq6cuXaNWaVbxbExccErrx6j3pZJKsf2SnZeH2Ty6I6%2Fez9ZcbQ1k4ZPXfLbZPujXqwxxAHQAL9Pe9hvb7RlYWonKyo5jDkKQty3rMVBT%2BmQWBK6BkKn4m9fbsJ2D%2BsmHJYrAC%2FRK9qCLH5zwj0Y9wS7nbqGU0wIEvESGq7%2FBCUWNKf5vxwFNreJSXdtIYHf%2BR3C6mI1zqLd%2BxrAbATR99HmITjToku4zUETmodvsL86nTiCujE7ZtrsKxL52kuNAVEdtIQDY8aJbNrJgbKDpDyzMLbrvfghzZi2VPCqrGSb0uvdbGBunvBhSUWGY0EoxMYqbc6aaXdDl7%2FeNcm3GBld2G1IK8XBUs91Z6OY63oFMIaEskub%2BrdAkTnOl8vukHLBLVzGMvlvaWXmUu3tT3zOhst6C1GH8F6VurfJ%2FCF5wbdGBUq2glIcDE8w5vSGxwY6pgGUENFK%2BW7Y1MoxifXVAptuki1ZAafSIeGl03ETc%2BwO2RCXqP%2FEX7%2BAfeEN3QdrwsH9NyUzHIStln81p%2BwL0YnQ1%2FF01os4A7%2FBRoBR0YJZlqLrJNQMLeBYSN1VCwT8E%2Bac1geKxaT7OtLrF3trYQ5%2FxiFBJKB%2BI0VaqBbD8tAYdXB%2F6OvbZODOq80UzUWpVAWA%2F28r%2F2DVz8%2FeRsCvtaszxV0QzTYo&X-Amz-Signature=98a24b53e1d92de457edc10348a5b7680c2d835b9ebe6764b28b18f4426cdc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTR23WQ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2JtvVliOiyHdYmCGRDByiPBUj4wlD16ZxRionuIkukAiEAz4WjJn4kB6gOoKFZCOwM5iFrso765Q65P0%2FCfeCVYkQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNy3Ak56%2B5LXzPeDCircA3oQ85e1rQVC8kY%2BLr4Ij1AwRzQ%2BmbNeyIF76KoFQNYa%2FZ7ofn6Ch1z5Ohpmwa4%2BHCqdPPgjCbViL8ggkZYMSrrDgNN%2FkP0Jf4KQi7%2BV9e7VIj0MLAvet7GQ7irMYhn6NvBF3Wd95h93LKgScRRbVD7ytp5BzUX5CDZEADOsexlqn3FaZe%2BdDzfvHeolNDsJIik9UBXpYUc4sCEe7fJFO6PJpyrOL0CX%2FGp%2FgfGB6UOxyRKECtA2%2FsJBtWrs5%2FsfJkfYaCEEq6j3%2BsAna5E7JR9vIgsn9AiKKdUmUzS31KljhrCnVzs383v3ZrD5M4ufMLCDq7nnA4y2QJtdCc5hx%2F0VbZ%2F1gOis6D3bTat4CW6ACobMnptdrRPHBd0EUJpMrBlP7WAzV9TiXue%2BdqRtkkn2LiE5SrwQEccmrxszzVRnUNOIEiF5kxNtPVXeHMWRfQ0P3kZ0Rxjj3NxaM6jWHKyGko8IC%2F2QXpRNC7E17vH6AB%2FXtkNIZTNQUJQ5BkqZMn7LW8j3Ricz0RkbWpmojxMoDp5KO4GbOgo99780Av0wNxBQD%2Fxxbo4qcTd%2BVIrgrPBp69PXUoEFvcI8WX%2FELgl%2FtGW%2BKoPPQa2VvyDRgt%2F2w1ikVMQU1bSl8OSaMOz1hscGOqUBLwHLQkC6%2FIypjkh7qBlKJxjrTBjgmViiMWwP91VevrdcxMVt7OBCAvhdg92Dq7%2Fzs7a4P1Mu7zxEHDQuz5om6yDsrxscTY4D9F2TC8ZojUfeyOfpwquU7Ldl%2B3XmeydFgdfmb%2BcwiW0wBPQ70Tt9%2BvZ24f1NzV2kPEl7UDIQa9svrzRAhTHDhMvAyWwVE75RDhNKvqyqMl%2FeiC4kt1rb89mnKFJg&X-Amz-Signature=b7b7c25eae69cd993470105c57f73df0cc936126a182181d153e20e239de18f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=cdb45198b941a046e116dd11fe8ca3b2ad25a1ff401284db2e5c25a0078111c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSVG5QJ%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsTZ6%2Bk%2Bc0fvIVpRcxE0hc3YUfdMT1TNgydVObcuvThAiBs9zzjEiy651AuaJUuFG0lHtpmi%2FrPSKNXtRjx8kQSQSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeSL9DMBHOQmVXONgKtwDBqKH7iH%2Bpbi1%2FZCQ57Mn94A7pINS1747aVyw5%2B7is%2FckQVmXL51prMNRdjUK5fM%2F%2BWWm9766lV04K02TWrgzuocpFpH1XTLsPNsKtC3LvWkRYvqFHfrnQKSVJvvwjvQHBTKVa3WzX6MBaiXvJ9pJDad5u%2B58c5fxK%2BYZR0nxVchs2ynZU3GCqK6hRwaAoeBDTUgLwaGIqZ4lMOsLpjqpjfNvr%2BEgf%2FEMVhLI8v756K07OVz635RbAkXUN67Iz0s%2F%2FhYg9mTMGDSnjTOA%2BV%2BCHxHjdbQl58TdRFmzP2iiXj59lsbS2yk%2FDvWIl3FEEdZhBS6A2TYnu34zJDRX2UupkFTnlekQU2Lc8lnhcRhs1lVhsRlJtBbqOsxxptPBkSYSs4VFyXpQ2Vrk5gyeJamKFRjsOPY7ozGQ6lKHaoj69Oa4F8n0eBrVF6drLe2tymGXKTF57n1H3w20YDsQnkraQTg8RAJtpsCp5SKOI5HrkUee%2FItioCrSIb9sxB8yd3GaNtLuADWMvlbHa4Q4yb60lwo3T4iZ8qwalXYaIWZ6tbecxFfGSG6sgJtmmgq2bEtH1xpCVARZTNrRgVIdUL2JWdI%2FvRsw6sskIE41TJm7d%2BwAPk5IPfpNtL2QPHAwi%2FWGxwY6pgFDKTmZyqHBar6mkcChORFxvz4d4FKG89qP5lO30lNM4oHaQsU6P%2BayeemSEq8exkUrbWVitYpE77wjxhY5kvFTAQoBY%2B47IYad45pFG6LAIZJKiVgunGxBfF0EZmeAN%2FJ%2F%2FgUCaBwQCHeWW9lEOKaW3b1GY50Q6bxJoTaOyAloUwq5VNGenDnUwLgcgWQwpIMtklzh%2F%2FvkHRyFBgTsb%2BHe2CdDIwCk&X-Amz-Signature=ac0ea673711dcc618da33864865edad16fa28d16b09dc6c22d2f15b3438ba8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=c2ffce34bc7470a674c2c81361318ade3d8b0496e63d6938950254127120f9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=e32278c6a60ee2ab95c93d39dd485cd39727d89465a7414d6e673ab52b6da9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=165fd89a90dfbb90cff18c8733d7886a2cae2253ee07da0596a6de713368f30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=1e8ff1e9e3cfa29a06d908c8197894f99b7c902b12806ad85a8122f95221f161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q6ELBY2%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwFmLhdzzTuaT%2Fd5hKmCdN8j82szI5%2FrwYtt5%2FYeXNkQIgTCFjNsbKYFkjxidwdN3sUXM5V9ei3%2BFWrBR6%2FOaHTjwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGv%2FsDBs3uND82319yrcA7n%2F%2FkZ0f903IXLXUYu6%2FKKb9Gt2ISwdGo7HUKR82y5y0P8mb2M8XqTUe1rCH1nFvrlwnsBKKtIHoYN3ZtFMtIAdH89iUYuB8KV8bo2RtY%2Ftj9oAqBo00q%2B909Rvpeo1qurc28XM1VrP0oo7iVu%2B4lj%2BZZ8PFE8Ry%2FVNRuxd%2FS6kHhkrLqnfpU6%2BTW6VLb1nwthHs1%2B1qntO%2FCFf%2Bxmgh8ADoIb%2B8%2BLhy7SBnA9lfDE0%2BW1UI8PhAnW86QWIw0oiZgFsGEy80yjietP6DJ05uJ9bJo5BkEdJ7qytDVtcUA%2B1byWbhtWvLm1ZwzPfzQMz6j9CGhH7P2b9NVWVnlPtGTraJewGEmbBhWBsacvWowvxGuCbK1Ys4cIgDfjTzAk%2BXLUiNoSqrjP3cM6OmUTv%2B4Q%2BJGtwsaqTrRdjmyjplOhN3royYyYJ8Chk%2FJeTyaTUbDPFaAl43WdPteKRQ%2FLS%2BH2H%2F26etSgK%2BmiDDiyK1EyHJDHzB8C6E4dxJLy0mIEiIN9tnDgJPd%2B9LWuBRDZx87YFqNBzlzu9aUHsCCMWBQtGWxxbWlkaJuaZDccjE7ggbRwRmI%2BXAErGjDu6uS%2FCmn4m8mJOAVzLGD54pmv%2FH%2Br7XDQCa3S0QsMo4JNeMOr0hscGOqUBiHHzc%2FJxh5hM1K6M3NNbyk%2BaHjeZDFOF%2BJXxfbq2n6rXD0Hln3GDvXjiJXurYPCZh3m1pABnazYLfHyXOqZ9TI1OohbGtTLLznIOlE6VbS9nVUWvXNQUKPLg%2F1KUzm351REcnunW8k6Debvb25zoI4Vb%2BmnSf1N1TnbLS1dWOj2t2QhQEhSm180osY%2FlheFnHM156kMuemEmrMDzsdKQkkkZ6Hhc&X-Amz-Signature=6dd49931b2021be1a21d7bfbabcc3a63338ec772c1d9d59d827c81ac6abaf82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=f6cf1b83768286ddd7da3b34d541ff405273fa6aa314d55d5b8bd7848f3b2c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=97a5d791a925ddb86bca02c5dc518428aabca557477d326a20c14b05612ff462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=165fd89a90dfbb90cff18c8733d7886a2cae2253ee07da0596a6de713368f30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=9b870532ab7a482e3515831be5ada12eab86000ae94cd273d6e9ef124c4edddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=6b05bbf8e2810aac97b959c68409272c95a5f0bf3a35dce6a515dd5461a65cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HHS5PSR%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm1b%2FUAh5mdk%2FEjMS3CHR3blfnRLZZWeXS0vWRSLcTOwIgdM8HFwNGuK0tva%2BzRk%2BVtZkh3BzPtjudI6j46OdU%2Fisq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBsyqDTFwByulICvayrcA%2BYweed8tSK8MPHoaa70zm7eXWokutju1BgxN8DjxQEsIFCp0s%2FSiXXgKsC10jcFYYCLBZtbDLKzrinWD2xh5f%2F3wYQUlhowgIe2yiN107trK6Wsr1Pv0jnmeSBRgkgR9UWFzc596I1Snwe55BlQXybioYx%2F8KCMmVhrTNduTIw7%2B5CIZilU5OfFOOrp1Eq7n6ZFoyDlNG9ejNVas1j4IaOaKH7d%2Fo0ybHX%2B4HTVAcoAFGf0V9qnrFNS0OtNYnsjk6DIk2I62WPWpNIusNcw4Ww9OOllBW2uUySvDzXRufRChlTwaGra%2BcKOYTBdkewAKu%2BUz2KrFeG3PMkTHMNJ2flqW89mS3u9q0Ywp%2FFiQXuWo98rrJei6z6xz0mV6aKdgkmR0z%2B8aRYlQs82ll9bz%2FajP9HnwcU8q%2BoWJ9w8NkYHKlXBJ08XXiE%2BRVGc2XTzeDZ55eUcwtAcaVJ0HZUu%2F9usxAwAGHQ0sP4goGtSkYwy05WHqHRDgXBUYvE1zjZXp%2FdZYWhof7t0c5aGrEhG0U1QO9i%2BfekpJ1zU%2FlLunECMiOd%2FHWIhpZUeKaBLssbq8%2B%2FmuHnKDUevtBzbn6NNXs5OMPJiwfRRsde4RPC6HdmMWWT934kyRecZ7ah%2FMID1hscGOqUBbXffhWQmTDUJvFrGyFLPCaDN69G%2BrqhAWPvzGs2WGmnC1VSHQqeJaWwUvOvVDrjkXg9EzhXPzEMdw1aOjQx7vMVf1RtLbEscGMf4L8KXLlJINtKeCmEZhO%2B2WO1Cq%2FZxvbVSsQ7LAmKiUyYrjboWSBvKgU2tvecbh1Dk6%2FvN50f4428LkPixY5t08kA74vaWqZjC81xTNCfTTrMxm9lRcWECfLu5&X-Amz-Signature=cffc575e7a6dff7496449f153d08e367e535da323fe3023ef387fc8949014dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


