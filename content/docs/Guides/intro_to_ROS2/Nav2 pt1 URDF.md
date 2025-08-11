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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=9c01a78ad5858f21a81165194c5412009483fa5052adf2ec84f0f2aa7a2ff424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=476a9951510e9ef03a0e5123bcd163e634f4da66ce339881b54e4714f5d62796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=1d1de9511c7ba1f019a2e5e5ae98f251043909b52aec82152ba01a65881cb64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=888e0f37739a6476b1209b833936c0c5022b44c31fb1f9f47e61d3872c5b0ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=1e5f96799cf44fbc9f24bcd3570330dd7e304fd87049445a649244e017ce41c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=710048ef87416a93302350e89508842d7b5b5332748ba93efc110b4abb6b0f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=0b4140b2ca4da8e70bf35aec4f07298ed975d6f6cef86586acd8ffe17288f7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=e60059b290350c306eca1849fd53a30191dee384a6235f357ba87e44da07855f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=319926fb89cf7e083f038f7562f9aaf1cb503b93ccb2ab9d742bd989411aa35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=5e7d78fd519d00ab75b319bf5b8c0a6b7d3b6b852742b04e33d75a950be06fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCON4EEY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb4rZ7uv0mbIr115wxKLhaJ3qm%2BYFeWccrz0L6J3LddAiEAsmA%2F3QRX05dkBxOTyMHFaahGMs6l9Bc5Lc5F0r3RoUwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ89Peh392wPq5yhLSrcA3ZJ7h2gE99f7Yte4Jl%2FTEpH2pntOJJh8qPpdzImEm2JXVNzJ84PKhyUzdRb809nINTRbRssqYp0CqKqL%2FxYuq%2FfPwKYQv6B553fyQN7%2Fr%2BI8ntE0R%2B4wu05KTBTmPZhWqFaYbVw9XhGGkgDx7BOMz%2FCjwXDy21T4ufpF0j8cMACHdLp8UsSsqCD2fVkir%2FWK%2B9mnaKSND6hdMamdYW6yljCCAqTfCbv2QJ5%2BjxTDcr0j6oSkPtjRE%2BCYqaCV8hXJ9FHVc0qL%2FF4bcf5W5SDfWcEUUu8NsqFJCrhuzn3OtHSN5bd2YclKTY1Jpyd4pok44Jpb5sE89SwDQ4dJYNxwPGA%2BHuPKprV9bNzSvUtmJNHXpaew9la2d8%2FVm%2BXLJMzlZ7jJ%2Bw67vI8fXuzBCizt3fQuXS7%2FEuSpYuS%2Ft2v8WG5tbHTNe0%2Bs%2BrrfIhqy1d%2FBWaYwmgQXizD1dg6uCra%2FlNmP%2FMq%2B4WvXrYByG4A1lVLZ0mkwDVidvELMdgaquA8apfjOkWzRJN1Va3%2FaRvEtYFwWLUtaXe5xZtjMqYdbkxeqBadjJRU1O6gJbAkOu9IclH3sJamWIScvx7bo0Xos6jNGjN9S3%2BDWmt1%2Bl5ZFrv1MPnoM8s8ugxLp1pMMP6d5cQGOqUB2eauG5yD6MV%2FPiq6tQX9UhROo6j0S4cnKljX1CYp9gj9swQxHHr7%2FaPtim0pJtwIkWqefQx%2FX3d7jBMH4Rq4f22Za90V64NZyrVr2tonCaUn3OeIIDa2Kp9WIE0wRzMlDAbgS9IGuVmc%2F%2FsFQeyqDdfofZM01Yo0Cp%2BAKB%2FBS2JH3ecbxl73p2e5gnrAa9ebdLzMm2u5B3Xu1GyXdjKxkfMpii6c&X-Amz-Signature=636110ec328b299a3ae5bad13b011d742a343e7e1dd287df7234558bb59a7c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGDIWWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFOMmtWs%2Bq0yfCVey7KF9U1OqG6yWc4Q6C2LSNNFTuQQIgbfT1b72cbfTbLJY3lNUl3%2BuWT7xRoJXTFW%2FgeiEeE%2FcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B2r9RmOBWQzB2nyrcA7m2SztREfFmmyk9Y%2BtjrQ7fs3VblTjFnYF6CIA7SzmsciVKIVxeTXhYpGq4uNg7jdUlRbvahITPRJ0vaOmfCT4XlFEBYltZmipsDDyQdjnG%2Bu%2FxSNdZIdbL1jNs91ROhim%2F%2BFnSgqW8aiaLi3cZ6QfBPhlgaKA8%2BOhPsa3V4hvWVdRY0sLUZ6C7dsOhXbaKl75F0mqjf1sC24jm%2FUNHp3Dcmt8AZq8uvAonMJZI3FNciuwoIP5geV9Or83ZlpxYV9FC8N%2B4HBV44ZwA8paJ4jkzkOdy0BIRftK8L%2F%2F%2FDDSHlTV7QuGCsjHe5grrJhO3YhmWcUKiZPkpdZsLN48eA2wzkb5K4XZJgfs8Q32fqZCvtqCs7MFtB9Tmy40Y7GRnKA3QybP792FeeENGnY7PifmLau9x1Hgdkkfn5ppOU2RiVNTkZnsyaHhw40Eh5r66%2Bt%2BzGAhdRQgDi4PixNZ69gcvpmbKuYrLZiRbBL%2FGj5F2nKwhLmdiKrtMFHioTIRidKy%2FKf%2FOzIUXW7yuMEeGya3FMTDmvDmVhTjoBTpMbviVbatq%2FkknkBSZ1Hb0OplyNum8Fuhlakuob%2BYKyz2VhuqtM%2FHQthxvn2AuDJg99CY9LYYk7AA04Sj5AEQxMMyd5cQGOqUBZuVcPdUsSSuhYg3xKL%2Fqrs0JAXtetgJvBWMEhNgy%2F1uZZ9NGAjvMaV1bYN3CyczxSqroNcpiUvAAbLeQlCtamVEfaXxQFO7dgoY5NVWg8tUX%2F5Yyf1jNJtg2l98YokYF%2B3iztbPYOSE5guYWHU%2Fb3WJnj5Rgh5aRdjXRynOfgZeP42iS%2F6PfxAt4HFKuLMxQegVu33Ff2Ct47C27oSqBv9sIAYdB&X-Amz-Signature=921b9a78184181e553e384e0143f28a9641b67fc10407569f8cd566f57f9d7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5JWJMD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAgUU3%2BGF4c8LhkTxxtzVcSrig5l6i0sNmk%2FVYKD%2F%2FtAiAzOqY2Ws6%2FFzSSrU9O9P9Bx0eRu09U8wkRGlSB0ZqLOiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHm2mOUlsa%2FQMvJqzKtwDGr3a%2BkF78BkFj9Nw%2B5pETFgeS%2BlLKgiiaIBPq8jsVD32URJJhgQeNkIqeLco77PvR%2BUGXCooZ1mkOWPNDQNcgZsU8bwmPecyBCmSK9NCtSkOTN4Mj4kC2cWl7ZmZjLAPa5IFzxy%2B2FC%2FkhCCrh4rmAEmr2uxPx40I6Z8beTZRd6JLi4Ak3kJv%2FW8%2BSeDktFyORDoq4E6F53vNbvLoqlccxxvmffYwxMk60AgBfklDpZ27YghEPZJtLwsnVdfFxsKMvphu1%2FBojGGmeSHMAvL9K8%2FiKIq%2FWhdGm8P39%2FmciBuv91%2Fbdi6t9GEgILy%2F0cBUt268jZtYwwm62q%2FCWj5ktQg9C9Larmx6yRtqK81H1Qxm00A%2FMjDYI9IrxYWcGddp5ZXcKNkANLMEDWD8NURuN9lP4lTPRc64i4T5Q%2BoiYgX1Zg53wB%2FdSEuMovbgxpeMHDf3AagIc4tExoWAR4DQRsM%2B%2FianFyW00eCxA3BL4GvTXTLFQLxFNsu1R%2F%2F1T9z6ooNn144KWby85eXTVt70RfnVVPGaQeKzo6Df1Zu6ugqf9%2BuvXoXsLl1xXKdYOQgfSFKiOXdnAW%2B9deCa%2BBVLdj9TjTxlKkslGEbkQSyZ6Q54d6iN0weRaX2jRgw6p3lxAY6pgEl2HJtmTboBWvoRQp4dmc7wPmjIOyDDJfhxqVHlB2rNW0qt2lmArZK5Baf%2FhDsPuj2WWqiopVx1CYQO9JwjrqV3LianVbjEu6dSAAJ1fw%2B59cLQ0hE8J9VusXf0HkHC1fe5d51AEtCLlS1wZTl56LZXzmBDtpIeAQMPx%2Fv6xpFWJN%2FF39UEjlT6bOlNT6LDu2fkQnppPEEVqUpmn4hgctvWlBfjCwD&X-Amz-Signature=931b47b00129b68f66d0eb41cd635dd7a08bf92fbc73cb79d3339d0c4aa62269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=b4d17fbd351aa30e5ca4ed238f4cca964fa60c7bde7dee8b00832f5d54f54f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YE2ODWI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiyx9zROiWfBU1fsyYUJq0k3%2FJEw80YuHdad47QuSktAiEAyUdF78TGDBKarzyZ5gKi6QixEX9opK1LOK5N9jClLL8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzDS4JMysAShlQYRyrcA7lw9nt7IbwAlDTUaHw6zjWusnhb0oKa9gbQSKnJw%2FoI3ptIVKD8DStf9z5d%2BuNx%2BhYqp4ovIRdOQQvtaMpv6mLb3BOiFxPzICwOFjtAqbEMbLXJ6hqWyW86ExQ3O%2BhysvvjPJZQ7P5WbtfN9erX6EhE5O9RaJlt65zpJ7ZqXy5Q2gh0YtTkPc7jmNtNjqYxY6489C4wXTjuHHsWH1FADwBecZF04Uk%2FSfjGCBTXqqXPUnnGRpNv2H%2FEFWKA4tAPLShAlp8Ca7OdDSDX30r0fcyj53YTEuitE0IU2RdQY8pWWPIKFNbhe6Vczm99DSFA5v0ZZxQGnT3BV946dgl8K2ZDsbjLMVVtYKM%2BQM4j2Tth85DuEg95uEgN0WWALSXBOYW73F4jBWJhyEFrFiPbBN2COpplgrj1wcB9%2FY4R1%2BiiH8B8I9yu5Y0oNqFuq1ZwAsfDGld7eaYaNMZ0gMPL5NbXUQlaEJtAlBrjkLMnf%2B%2FKJu2wecGIt%2BvtleI%2FHOMcloEKnbeOYQcefDdscbfzRWR6c15TLKgb8sWe60%2FVRjsfc5vOxeOavAbOMfx9rcoTJrBQHYIpm9Vr35C44%2B9lpPcL1b25NnmgiRGAdM7eupbT9k1TdTAf0VkOGJ4tMMqd5cQGOqUBmWjaX17m4KPC872hMFsgR%2FiuNtxPA3EYFNLvx6vT1w%2F1%2BtPiuzdwWdud1mQWZ8Gd2JMZy08lSM6lqi2ngmu4%2Biz4WzAC%2BsvpEPO1GVPsayDNHf6vYGP6i3%2FNraTUnzzJcHWXgfh4CIt8mAkFHQBE%2FgKfsNi3AaAbP0x35l0MaOoLxyUjbVNRDjVhqZAJ6Onnc8XuT9lOPmFFJikSQfP%2B1knHjXgh&X-Amz-Signature=19a1b88b687ee03c0db810e06b927095d76f07ca7de491a00046ab67fd41bfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=19b5dbc0d80bd67e24679a7bbda297e7d97d9be68ea56c6f87b6cb501d785d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKBLWYDT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdslZs29zh%2B0VBrkx8PJCMkUwPeEfbNcMpM95fgv2s7AiEAv22gj8v4pFBvqZfRPZds4mPv5RalKaRH0POtMXl48h0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2kOfOOtplseggp8yrcA9CNOwrbUZgrdbEWRfProjaTp%2FBMlPNJHJL74rLOu%2BXLIEmaClkWdRfaO6kdengZsp13iSPo4xWnexHLgZcBKM5F7o2KDgaZ61%2Fj8IqFFwqIfFTFhHvs92vwzid58spu5lrlMYWHzUA2fTAiIZ0qw1QXf%2FU7K5mnfNjqvSBiULZE6T79JTXXWviOEwih3LZKoeEx46V2eX0xtDoQ8gQ20idwatjm8r0yUXgkQiyS2muLraKuFypGIzbcJjxI5sEOJYzYHMHOtEnud%2FdM%2FOodsEhP7lN%2FBcFgNh%2FUM%2Fpy2G7nlACq4pqhwJpj2wCyYGojuQ40XFg8rS%2FOCNl64JS329%2BUkHo46ICywu%2BF8lMqchibSWFaHGVigAOQ1MZF8pkHjivgFx9cVpqd9ha4zoPlMkRRuqwNreLpdLuFCH4KOgnnf0Ervw2p665cVUXqR1p58%2F6H4hhsGBaoR%2BDSfIQ2siOLEYq2Dn%2BwccTk0OAuKDU0waAw3upMwMEt%2BdlQry6N509h0IKcnsEcQP2vVjSIRereyzK%2FRPxv%2F%2FRN83of2n8jDHfO9wdyQs4gymsfAqmq9o8kKHFA3HPbS6%2F413TpgJU%2Fo63hFs3sRloVscf3Wk7PtjPhvea6yPf3UyMDMJed5cQGOqUBYnvfYNgw6zqY3uaaPcL6t5ydHfhQX%2By5nSSrQAoTLan7thz2wBQ8D9ViKTedjjsYVt3CfJxPCx4esi8CGPBkXohXDjgX31JOsZqPvgfXGylNAswB4fEn1DJr%2Be7TLIk4HptNJQam6hSyMFvbI%2Fef9l4g5wWo8cOHLrBwHdGiqJAcDJRvJeME8zSIQpiKBybQ6DPety1n%2FWF6G4DsK4IuOlcpr45A&X-Amz-Signature=4b21d039a3be0b81f29bd7ac813b5c4a7b48d3c941a6ed6018cf11d0a3cdabdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=85e375ba15a3e6170dcf93874de3b562002a4f608a5ff759a455ad5afa316546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5NQMLMC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExxFmQP9uqTL4t4ENQ%2FZPRhxlrRT%2BEVLQ296bVvBWPfAiEApyeYtXX0CE%2BGYK5J%2FFxCxg6nRzefhQLHMznTPp982osqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO2Il8RafiwSmYrJircA7RtppkIwutMSWVy2BLU8ykBVbT2S0uJpatqQNnW0DB7ZW91UV54lEsZFn15HZOX3bwlTcEBE1gqG042SWjYTIFJmmhdFLqQ0QW69Va03RQJFNElxBxawcqqTSX0%2B8L0NKxXNLWgZ7LmMqrYNrWnEF9SBC1qA4e4xFNpDAN1L88fjILkzOD28dsWierQ3m6CTNFTS784sjkqb2FTqPtho4scBfSKX1YiybZAXir0ufs7iDh928AMdOEgOkjr1AD32pCuJEsIJb86B4LlErWX5hbylxSEjDZdoZOkQbC%2FpP%2F6xR09Bme6KhaLO8p6zrcnOM3L%2Fxcc73HdKRkv5FBF5M%2FSA%2BUI1KO3k0q2PK8fZsESsVaw0fJYj74EvOCneEQ3REFaK3AzdsP4xksrw0wxJpS1PvJJrkcOP5kzJdwXyHVhK%2FR%2FSw5IqSfC0xDw4AV1ZdZhZdCFCHC%2BW9iR%2BObRtKU2FWz1VtPrhrwuuJVeTlR1qenZcTlF8dyQSbIdxXrAc9IGCJUUrhY2gy%2Fn8wF03MGY6OrekcMAJMOw9NRYcwatuI7ZlNHwnkBFmJX5QxkQBuaiBgxUdX9gwY29eRDY8tf%2FTFrn3Wc8fKu7u0K96DaR%2BroIUv6rXMqVq6IfMJid5cQGOqUBz%2FYA%2F%2B9jVllYCGQMMbPUd2u23Pym6dHgHGg3nO%2BwbjzdfPyRP3jM9Ok7Ab4kSUqOaYhKMLAk2caLqDVt%2F8z3matc2GL%2FiFyuOec8HiWyN1JQLMVOjfidKqNhq%2FtfqQDwIqhOiAOzJ5iLJfD0H9Rrrncnqxhb5S4J%2FkYAzTCglqWcAQaSBQ4hRphT2lyYr6WKvjSzx2gw5pJW54qgvJa7hsHx2AbN&X-Amz-Signature=21384182ecef3f6baca6ceceb2e562aa951f848e77c9d2f38336aacf12e9d480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=711091af6a5d17aca6128eae939e8ae1fd91e4ad9cbb502057ab7d434e92c930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JBYMEQZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTFziXuY0ZBpnLrOyFHthU23OQtD%2F0308UCzVr3G9UjgIhAJDoZatA7uW0yp7Hh6CVho%2FpNykZmi0ugvjRLipWvEvIKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuBdXgQVwBD8hLBQ8q3AMdQ3dv3SF%2F3lOuLnBuuBYJhfRjBUxKTh8F4bKyGzoJ0y0M53IACFNxT%2Fli3xuse%2FvfjEFMWEQoy0wZnsGxFb8LgEoaHiNEmzwCRnPP0yZWalgza8NyC2ldE3%2B10jSZUtVqF1ztSqPyrr9jnzk7bfeCBOmopyiwi%2Bsp5vvV1Cj7prP534GOwdS3pIDJIert%2FqASFO%2FOpgdzftCil8YvmAXcrsn4Se5Pfn39vb5CyrE%2FI113sMf0e3mfd7cvzfx7qSfU4hkSg7%2FLl0OSdoIG%2FxpDxucAQRqUd4DhDLCwtJvPdyMyI2JXkQP7KKMt%2B8KLCLhjin54%2BFbO%2BU03KVyD0orFUmeLTraQoPF3a%2BfU6MLOU2lDXkLcudREosj%2FDVAhUHRzZ%2FKPLQzrm%2Fwtcb1CzWEyJ8YytGZR5RX%2FHeMzSVyI8lwqL%2FJKPJyUdS9mq%2B1m8J7Z38J4WePbngHtq6EhWp2GaNKZN6vQe9lGuEsdcG4fYsVs3F9hCSHK%2FyzZwu%2F%2FiWmWPJAIFf3k0x9w9rHLJ6Y%2Fat4nscC5bTEzygxFXaTlVbS1MpTp6D5x2%2F7rRGiLjkoMIj4YCvygbMfERAZytjVKN9CqGQbRwIErNRxp9r6%2Ft7wBjPpbHlEoKY6%2FgTDLneXEBjqkAVEOD68bTf3cjBSe8VxJtjqf4MCI5tjlvD%2Fy7zmKne%2BkjiiPsucBNQIR6rXVAounmUbpLH5A%2BeMwoxzR11qrviTY4EK8djoY7z%2FbzxBteTfs%2BlOPeq0ieohriNzECGSXcQddP6RjrlPscZFOqkPtoRbCtal%2B1v7XX%2BGArdZImOp9C8tl73VPQ%2BMVrgXqrchpJ8ueZgcchv0CaX19Qv4bBNndpUvh&X-Amz-Signature=6f9c949a629fbcb976dad695dfe7ab5e4043e1edf4e3a5ea2b2564754b6b5465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXWYLGX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGqRvhNQ87Y9FcVBazjMzMXrTTiqSganT%2BMz9YXhj2PVAiEAotNyK98oK%2FDKq9wwywJddZEr5dkTDqXYK1Y%2BbNZqbd0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRGICWaet%2FyjJ8nOSrcAyjyr8vV983BwwFl4%2B%2BwA8LvvX%2FxYozlLXNyF5I0YKi1O%2FzUAuqEZ7MBW1eCimWptQ%2BPUTEWUxUiUS%2FriHNVVy1JMkT%2BsPgy%2BlQKzCmzuSoUZPjeutp%2BEaiYk%2Bk7BRCQoFqcFfVhIXJ2ipiwsxdaPIyUy3eUkk%2B466q%2F3%2FplrOxbkBn%2B2lWbGmO50jXnJ2k086s3Ul0T4f4uyRDxEAZzQ42H2HVnV1QvE3L58n2OgzSptR8H8fj7qMxdSxVokhZfrd8qaRWqErHJUGGExZBQX5cqNpecDMqe0JAcykeacIpFbCvLw522gvwPP1bC1AGGkX%2BuJ5pWtiDyRPDVtJvOveb3bvL16pj4YGVY0pl51YijmFeaPYf36kiQRZXNHR%2F%2BgpJ4JxXyLgh8xSMfzZcEvvr2n7lweO5RSmxyChnL%2FuqeAkwukTcM%2Br2GdnYNS489AW%2Bd2ApGHccv9guRmqp3P0LY9u8RrxtHnvpH0zzp6Bp30ZRbx0lLbJE12U9cCD8RfaPg54bH9wXPuHC5Sqz98t6%2BCgK2vqeRkIpospFQ094ER1WdizjaD3DtToZIjdaG9r8MvcRi7%2B2LRzpjjRhxS45iJGUrQ46OyFv6f0pm9EoXSG1b0vy0syaoK%2F86MO%2Bc5cQGOqUBc19w3s0b4O%2B3LLWPBHlWVVgMykn8MTQLvI7%2FKD%2BBEe0PpmCDNaq7yK%2FAI513bj7UIMd3iBfi4mD%2BR0C%2F7V2J5m2kSGFHswUGa55GqpkGfJLTGVKJlS4plAJ8udKKI8SfgRMvKqnvCsgL7uS1fNzekdVzvzI%2BK9bbobB5MYb4OcFPWdOEXXkBFKdLfgId3wMY7r3MR7%2FnZ3RRMJsJSvd0wZNP8LQo&X-Amz-Signature=4d572d12598e6ddc1bb370aeac78182d0ef27e4f33a159089caac367ca3c115a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPREGB4Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BkKkS%2FXPEFCRuQl9vRX1Pz7oznVkfku7kpJqpIbbHJAiAwKoZ2wmwK%2FAXz1pVyGC2XJAg8bqdtU1giYRRYB13NdyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMJwTYJoerjyOkFbKtwDsa62MByWQx%2BTvNyBxdw2luJDAqvoh36gk0iD%2ButGcAiXGQGfEn0LS4L7ykiZsX7W8ziF5XLcaZ%2FKOWNnUkEZc7IeU9m8ij0JM%2B6RTX9ibGWs203LzHAj3M%2BK4ll1lVhScKEl5htteslJI0W9r4h7vy5X26ubRyVQLphplPoeBtuAiVSw1kp4hF0OlJxYEBuA354JTSTuAZZ66YF5SSgH2nualfyfIlOOHplmEiYE1aUaH38Ws2WJg9%2Bw6nNgzL5nbnTzkx0wdKhz44OcSHhBOXGxaCoOsDx6%2F2yOR9pmbpwbzmD4yw8QWNlCxHwu%2Fqqe4kpFT2CXOmJbvUdFcKua%2B2MIgk5ZLZmSInCta0uYzOl9aoX7Z6k2yTc%2FNYqlD5GrGbCbX17IbQhdGAvL3xtTR%2FbXMr40X6rIMG%2FXQwmejVpWeu98LLI46CiPBdpMGscZSdj1%2FD0V2Pb7DB%2BurJWszpxiKFSJvqJOYcL9dqbGUdSFkDEmliOg3Tzvt0Tx9KpNqZm1rrTtyZb6eBxI7v9Cka%2FIW0ej7miLUEmPt8QeH4wM2KVKkIWoallkuW%2B%2Five5pegRmyaOYEGC2jPZmOAJK%2FEuGlR21gbMDAGf9yMOWtxN1eiULFQgwaKfux8ws53lxAY6pgEgD5dPZPsXNwD6ISOnjSe1PFzO7DK9cv9AxolAQb9ap7VX9CfJOGFpo8aOecbP3fynOKaMRTmYT8nOg2jd2xxCRUyXCuj%2B%2Fsa5U3mVCSlesgC0sbBSBLbzugNlNN8q1myVTK8aJfdePxclg6zKtsoOoKnrTb6ZNXljPthWNXAbJTjIClmuRmAQO3BffFf%2BanMPr2nk6SmHGDL0V7292WNoZ35ndkh9&X-Amz-Signature=945748a5c2f4ef0c80d51d43d7cbcba51dfc020fc643d20b85a69c429f783801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF46CQVM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1V7q8nbH4ytM8J7jITNRuUgEYnT%2BGYHOd7jn8DK6BdAiAW%2F%2F3WrezTWU9sum8y03ZywDZEW45fAzjNxxSxivAI9iqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2BH4gMDVUDUXfouEKtwDQvCQXx3ZIoEp8F3u7KWNerLMZe06fN6L69g0nr%2FhzZeyPj9xq7uy%2Fz%2F97j%2FdCcRMwAj3xJGeS2fAKrFXbav3%2FCNSmEy7R4SzEMIZq1qPy8uXFGqLZVB%2B4Ip5kyV9ImJDH5NciIwxjJvWKqVPNE4sIP3Gd9XRleweMyGPF6oVsmTHBJ2J2Mm9XIQVZM2JSqv%2FvXqsIabFc39FkvM6PyGl3fJ9tkRZdf23yjjDUj7vfzMUV%2B4Z3BtWh1IETYVzFi5cNE%2FG%2Bk9TSLIHeHX6yKZi8ko6Ip1FNwoDriHGMRHwsL6PyIDm19RKJAvLAK8XP9T83VhLHnRtE6NnzSEDxjoHw9TFZ6ExtCstn33GaCtswxLA2OvRhKTmyCtz%2BxnZI%2FQxrDYNW9oheWx6qHU1g98VoKKFV97%2Bjc8xs3kbSzd%2Fb%2Fg%2F8yemRlNckYSgiYKkeWN9B4ASy%2FGfqrqVqqBOdhCL567NAFnt1FeqXE3%2Fcquy6Spuo6AiriN7TIg06fLDHQ5OKRAE%2BFXplNSX7CGRI3qL8Hh%2BdwOA4XE0a0A5faRdJV4%2F1dZ2OYM1EdWWUG3qG7sK3ImxH5f5yUyKPLcniU%2BuqKGu0nEiuUxm3OyR%2BNi%2FzMkZinRLfAgktgyqscEwh53lxAY6pgFnrQBMclc8pKKQSzMO1nQ%2BEBkl2R9XQwqSLy2o1wkvXaQ1XDxSooNs3hI3IUfsP%2B3M9TJDuKolsxcnFsb0YJohdG64OSuBPUQQOjFnfnPyiMniBGHyHUzhyWXRhec1pqIAjMP2bt5hAvmt5xsDWdbhV4FkU1Ksb2e110EgfOLIBGF52VlJmX0Y9l7SDiD8t5dnUXk2SqeCdDbGnXyXA8c1LZnXncZC&X-Amz-Signature=d220a89c4b424c2f930c1445abd6d1ed3cd8fdc27c7940b81974cc47794d06c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYFHBCX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAj%2F7kDPngesH03ZanOgMGN4nGoYYc%2FZTAQTYTK1XdyyAiBob%2BGyr89ZQuaNBwk5QoPRiSwOzgrfK4%2Bd5CpFa1IOCiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoDJlaZ5r0GrvawM%2FKtwDwMy51EmgK%2Fx2405QuufmM3mTFr0dbcpmdHDV0ebowCur%2Bqdm0iz3TOZNVMzrdZ4y4mHKkXT7Nu3SuZEsj5hV9W5X0N2VMGBr%2FPOaJHJOzYRMFgGsn7qpHhnO%2BXmEqFvClLZWIXuXh0bP6lHPfxALoMD7DuAfkVN2oeUQkUtsrb740AXqFc2NxKH0rcy8hfgIX1zXVlYmX6DAqHCehUw%2FgmmTSSjZH%2BWaybWTiOtRLFENNSHrn4a7NPkr3X9hNjZ6z18AeOCSC1MiV3wQCGt1Pf6XacKHdOULZoMeQxWtq%2B2wVJPoyf1FQ6ZxdCE9Gw5XTbfJdEvKZG%2FZsIgiO%2B%2FrsSR5dSCHuFehbl2FrCTsbQYx%2Bu77I1aJ9YWzxQMHkx%2BZVHFXXHIpKDRh%2BLCO5JBMptj1RbGBtA3SfS9LxFlko3lPt2YFG0Z9EGIjpHVawTtj%2FbLfwc8TVsZ4PbGjUedjIhOt1v3FPFpaSOlO%2BMEEW%2FeQOi7pPmBWJTCpz32ieF56VRYEEbumWhKbv8W8860Qfnd6n8RzboRVQM3XW8OXiDiQrtqZxSw1NZ9VVtolbqo8HzZcw64li%2BV8k8eIuiw2X7T5B%2FiLaB6bW%2BRz7mLXr9cQgaPhgsPW66AGHO0w4JzlxAY6pgErwhdj9nFHJPeTjiVD9x3cS7lGJxrBKeK1JTD%2BpXKTwri8TJ8GrDeERB8UydoE168bvCCmAbgK%2BuopUogZYDRG1d8XVG2%2BUzuVcmpTUy%2BHQupxkd%2FD3V1naDoGiuj4pGQPbIFF%2BD6RjJT4WnTShZ2iqMhv1qro1hKzWtLFLwTurbRYFDR4Kdsj6pXpyVDkxY2Ah13FPqm6uDe17IRtKRpRKSBOrBTb&X-Amz-Signature=41e851a28713b0eb9a2b8d527961b39dde883bf063e7055575d4ae1e737dcbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=1eee297027c6899a6c467986ed6fa89161811c4da009f5ab0b81554bf2903fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB77KO7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZoxHD9KTgCdvPM1IlS%2BLM2CaMtzcrlxQPt5ieOvej1wIhAKMz1W3CCNZUYA0NA21pgi1%2FRHU2HT4%2F0jyIVPsoL%2BNiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnWkqaX%2BwaMi%2B2WIoq3AOISIpnHqtz2NOW8EHr7LF8ooIJMkIiIVsENAjgySjFwg41sQoSMTxgrqx%2BHuezlKwR2wboaBTAorhwlsacRJqmh4HRNMcSpMOl0S7QTBu7qW4sfr8V7DeRh2%2Bp3Wo6nuLvpBxRdsIEN3h1Z%2BgRMEucDdMgjmBAC0DUAfJscPxMJYU1FtoC2A8LKKs6FHvYgYl08mo8g2ZGk0qM0ugZm5VKFImUzG2BlXTQAT786BEd4eqp9KgWmOJjngejhqS6B9yu1xZkzDoTmSw%2FR4dY1ituwYcHrOu4ongdNe2N0S6nfrCS0z%2FCE88BOKFjIAGyKIvM19R2lNdxae8QH2IR9crY6Zf19fkAsuBCMaTcsHNQv2yrflye5dFdMERNOBhr%2BBCiXAO4ZngkKuVO2YlCL0yM4%2F4kAvntvlpaorzR0zKTzkWM0bu1l%2FM5sbRfi80I0ilHDnf674SCD1aYJsoMj35TNpgrNauIaUzji8kw0C4opxHU%2FWxalRfri8r5vjy1kR4uAS4Kx4TkAeovDFQNlwdWFJO0HVX3mwenTIqArF9D2%2FpyATgZeoHvAtS%2BmuWvN3NJs9O%2B4T94a0yLyLEvh%2F2S3VEIWTz97FSngjg86QHB4M9SMI%2FIYF%2BfNrNGCTCtnuXEBjqkARx1mOtBCNAsZpgwqGudX7%2FLqr7Myn6qlT0ngp0Y1yNBp3BSrXSWbqlGUv%2FFMoNWH9KkkVaheakJr6tXGxPlfGklSl7jYVrH9i2cSRDNb1vfFPM2iJVPVRI%2FC31tHjkPewjBU2xW0l3YMTJy0KYSmJcLW6AjszjBN%2BoU4%2FmvFhKWKyPyiIoZK2pu4FLZHkvUiU%2FmOi9mdqh%2Fi%2BylS6judzkhoGmD&X-Amz-Signature=3587f4fb1281e0e2b964a5dc8b846513be9e9748acd99c727ae43ac335c2a1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=c4d6939078253bc570ea5e9580d12c7ace901728cf9c365332c6d4e1f6931dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=c376533f477568252c58094cadf4a079847b9b6b75c7690004adb879a5fa71ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=9feedcf1afeaf2d288e1c52f40b5d31cbfb1b047c970f527ea4403ed0236af1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=ce989f2814f06368802b90a2a4e252a19181106fd3c6168ee67f0c0fa21da400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=b9d5a4cfd2285e3ba8eac7410f41b3698cd0e01ce2bdd20d2dd66e55a893a245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=e7dd4a6c3a614378134a1c653dc0eeef2ac1d56089c35e60459484fe957e73f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=9feedcf1afeaf2d288e1c52f40b5d31cbfb1b047c970f527ea4403ed0236af1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=fba540105ecad3911993c66407e17d7495fb08b5fa25c8260261cc07ba337143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=eb8f313d7d42a409be3f34450eeec2223ed60a7688834d5526242b7ead04eb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7BISAZT%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDERqKSqnt6XIVx2kOH%2FGJfaWKfQB2yZ2UgNI4fUYWIxgIgHpPCGEIFth9KNesbiHCz47SxFHHTAN9ZN2NHF4Lf2roqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi1ocMRiQHK1ywFxSrcAzVfeeYUY9Jh8vxXPvWTKKlo44uzDIp%2Fs3Jbq5UyHHrPGs1ha%2BOEEyu7TZVJIR4%2F19HY2IuxDC7siqmCRlFaWZaKw2933bjE0g%2BWC5Fu%2BBBZ8e41s71PzaEyeilLg4qJ6%2BBTlozWwMMXpLVYWi77EIYpTTf0BDzxlcVas8H%2B%2BFvYwc7lY9Mw8oEQKJo8cwlr2pZ%2Fou0E8PsR2czey6zMkFLA3h4R%2FPALsz1C137sgx%2FlpqEOOLUf3dRiVZPLyHTcTC%2BRI4FQ2svBwKpY5fw1XMetEQonQVR1Usv4CUJfRDbpTc%2BRYLVKqFHl35fLgGBMVPs7b%2BUPsuzRGyWMMC28nr3tdiSa6C8OTMeg8KdNwbm9onA9%2BwwIbhnFYfNBbONzj0pWaP9KpNMEbIZ52hxNyV1iXCIGLbUDOuC7wJ%2Bdd04eWdBqHvNj7hmU8jv7sj4CguIjbDkTNaNPIa6GntmDexNDngfXxmHtDv5wrpLmrJhx0XopmbdSFpH3EhYKDxKdzy7cOUVEZf5KlMu24aRrnJ1dKaVzAV1PpGsSBDpKpitgFOdUBLbZZD8Zx6Qa77RGhCpNsafW0KsXqTidtmOzy6HZWzBK3Iw285YME%2FthO0amWm4dpBZK31kgRmHsMPyd5cQGOqUBZ2vV91euJLv9Wv7LHsrotu9LZwa9RhOU1Rp8VyEfgD2N0%2F749U%2Bf0Ak8DzN5ZkAM5u9evmogazcP7SAns3%2FlHRHn7WXlGRrEQ4WvcWg0%2FFRuJyWP6XDngwJrEsHXJfCZ%2F8gIFdTXP%2FI2p3f9Yqttqxqpg4A38r2GffSzJRVRXYgKzVkQWSOItG7ShnyO33QYj3zvR1sRvzdHVS64dgU%2FSd0plCOU&X-Amz-Signature=0afcb2e783325bac6939212a807b64233b5388327c443f7b8331fa477eca54a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
