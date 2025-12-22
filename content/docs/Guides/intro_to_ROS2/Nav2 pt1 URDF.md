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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=12158f023c76135548c1f3791895bcc364ec7fa6b06a3ed07447b39dae681653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=b8202517fcf0760b496a0386fb2496de388b468072116b9af4f068820b92f981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=743439fb5cf52924aca5b8f9e219de37fbb434a73bf36111ff26be9af9cc17c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=7d11e330cfa1d155dcc3e59d8f7453bfdcd366cd0fae029a2d32ee05126a3732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=0fc85408accece1fe04d02a01ec6ed2eb72aef72bd2a133bd0ef0c12ae9624b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=1e18a949034df0bd08d070ccf873603581ff9953bdb2adfb1ea11a6b6e9b301f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=6718e0621ade55127feab61cb2d92ad8fe512b51e1abc1477b4d5903ec565802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=86a42b1935a560daa845db96c4606613fedcc8c81037bc0ce3bf3c209928ad5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=21af404a32365834538580fe41eda17d3bcff4af0de95a3349820dec2af882a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=0972df118d55accd418573c77214d4f4909c247f2c1cb261efe6ff545c385263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCURCFQ%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWhZqkh4CSAx7Tei6XG7t8oitdKDCFNjWp%2BM7zK4ue1wIhAJUPYN1eknkICs%2FQOpMkmCbg3F8Ge1kWSIM10tVmmwamKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOWRiZmKc4WHZVWcIq3AMK3HTwk5vloUnjV3SvZW3L8x1uyK14%2FblZ%2F1x0GtJD2TJ%2BX9R1s9CwT09dR0ZAqGpdVXDfh8%2BAjGmzicW7HOIzwVs9%2BZPLfIMBVGazzFjE2m663SwhXSlvE%2Fi%2FCA2LzZ0woJgzWdTkKhocwgyK%2BFLs%2F8FMYwAUGqLMtTY2%2BBiL11F7ELLMoq8a6KZEXMPfAwNAmKxrQ%2F%2FGkt1rL3Tan%2FB0CY3O9ZHDN7aL8vOIsydQL4GtVpbX%2F7kqxVsdkgy345Phy4Wzs8CvbT4Hn6E%2FaKtayzH2FjJbe6kJGjZbHphOHPUGRReeE6j2Tg8Z5isXiK8NPkrur%2BurzDFyt%2FgQdnFBzRjVTsDPLF%2Bu%2Fh318bsjTZw0TyN1kPhx%2FbibZIT8kNX6Qhxkg13D0iUhWCdGsXZ1Mpnii6r7f%2FSpMHEAqV9PGwzpHZtJ%2B3lVvHepXdf77CW3I9UD67iwDyuMMfMoU9lrw84VgbyOgiTpYGG6YhahZRYFuExKdeg07d5gm8hYmbf3rJpls7JsNn3TfD3%2B0f7JAHx2DFVn3kwUJGjBqx2bglGDD34yMV5o1uK5kf%2FgHXxJF1%2Bgh1xIIaIF4NHz7qs9wARuJp8NCss00HEvtWmSTQPMTT3FtfE6wVd0HjC2%2BaHKBjqkAYkpuLB9YXOZc1RN5dqRx1mZch3aRoc6jydFcIfvx6B8QIr9KW0jvq6JPlP%2B8%2Bl2Okul2N7V%2Fl%2BfJM%2FhXQVUxQY%2FQet2aBQ395eDbSgC6Y7e54MAydCim5nIpMuSM4Qs%2F%2FaaZz29ixWKz1voFyxDGQaIK1gafidI4IFZbAq6nFVbE6Aa9%2FG2zSY1a6Eg4GnvWMNWYMocYeyBz19VIYLbvgjDjBSN&X-Amz-Signature=d10eec273335ec161690a8baeab9b07a5533902a8536e4e17aa75c6c5896b674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2I4MHU%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEKVZZpDEw02VDhMuAF4SE606cd%2B4%2B0zCYshtW9SeP%2BqAiEAmh8dKou8Av1hp1jlG%2FS63tcEgHrdF6NZ5T9tQ5bDG7UqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsxJ3lQ6qBpSxfTUyrcA8K34fJX1GyNc%2FED7YAKlnGOmax%2BcVO5ITKRKAxwyS2zupOAl4RlQpGHSdot8A4yTj0DJdCVaHvb3kCiLXfZV621DuZ61r0TjnI%2FDr1xfPar%2BmVutXWOj5sJ12rg8i%2B%2BJ%2BxpeRaRV5tmrd02B6G0YYBA5hHGOaowhO%2FzIIsc%2Fo2K5vAIGYpvTjYn0T3LQUz%2Fv11bvQdWgZKxPu7aBkrGNh%2FyxsKwU8Mgx4%2F%2B1NeK%2BS%2FHJQxyn9vMlozkyvd6E2OPq7KJruXlEPO9ZHPQeB0HEj%2FPIPVCW36bwRRLsKknO180Fn9QMBsB6nPBw3vG8NbHLVl%2F4bRnPIC02qNygQPmUOHnOTc8Dq15WcPioLw4djT9mMgKAYGqtHfpDNlO4%2Fsu0%2F%2FlzDScOtZL7ID6FcWwjBjs26PVV3pztPIevIz68nh4s0FnkIvnKaMnmXPTNy60jIWyEnezzykkvqbOB8FgRy43oKxREyrpFXzK95fr3Bfp7KzhfKOQNbZWWagJfwDN%2BT0gM2csCqv6IV%2Fjel9JwXu47m14Y9Aj8dBV6cgDMO4NAfEnXixKWacCOtRw4d574uYG0fV9ghtvDNpUeIcdt7IDmghLcYi1MSS67Fb5IfrqeW9ax4ChKRWhabusMK75ocoGOqUBH0zLs%2FoHKVq9LLgPDUu4JC8Uwb%2BACyBbXMjepS8ZJkdYlP%2FjCzHw%2FkeFEoE4TCqSs9sZkYtUAaDC3xde0X26wGDYD32B5F6MdDPZrs5zCtQS0X9OYfbEmhodZtVZLLOtrgB6X9zBprCp4y8vV65Fx%2Bou8tm7qXuxWhdoij2b%2F8h0Kv6gqkQeE%2BQKMDkL%2Btbi%2FSv7wfr8ogDJXterFrVOkhGJZ7BU&X-Amz-Signature=b30d4ac1fcb72f449cd61f0f045d0744358819beb2cd5119a8fddcac5a3734f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624LJKOJQ%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCV8sYDzfx6LoSQLfppCk%2FEti4dnhRRlDsvsxTI%2BGFnegIhAM%2BBiFqp7Ljm6h%2FeP7mS%2BGRDdGWA04uDP63TfG6R8hJCKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ4I4bO%2B80N%2BZJr98q3ANDRCSCEJNpauCm8rC6u4Aoz3Gw7cJ%2Bo1OgLacvW8eORb9nshMv611bHYMu%2B6axz6fmlI9kw8rRz6yq%2B22Vw%2B4am%2BSi2xpuM%2BNNWk3jtDGlJ8FY%2BsGSWA4cMxTXaaVJzIHJpgsslaNCcOMLn%2FW%2FIOgwlhgtdm7tqudZszGAvP1DaELagFb1txWxfxdWC5uZViZkzb%2FEjj%2BzL1WNX%2FhLq4IAt85VrFt8qcYa5Zg%2B%2F%2FcggK90WAhwxJoHCnfcUul%2F99DYl%2FEn9Bu5gD8ltVHdVdOJCv8wurx1%2BLJEQ5mt9ZfNvaagpmcAs1TQGy67%2B1JU1m3rD6jpYE%2BumOEj%2FSas6ZNVi6JZtO%2BJxluy0Nhgci%2FxnXqYBBXfFu%2FDY%2FvFYT94t72%2BqYpJhLAotCQHLWx%2FqSoXME%2Bt4Hb8zwf3AjVeKhIaitDGPHyF3rMUfeE%2Bt6lM0YPKxkfbQDsjpOWL9TTSoApakLFWl%2FiR89L0IDvgW%2BXz100KfTOXMEYyXgk%2B94ebcE39TM7N3HmkFAGraiXrxdd%2FM8skvbm7jU5UameQ%2FVqVif4BhjnyUP7phlpP5igmOl%2BfcjoS0yFz49cwQah6rq3izJC%2F4nt5PWJZRbPCzsdiu0SO6KMJqC1zfua4uTCm%2BaHKBjqkATl9dCxf%2Fz%2FUCQD1Wds8ey%2FZiYnNkpl9waTArokx%2FmDqBY8yMiAHGNYAy%2FlhzaXyWkfPFS%2F9jh0HeGFsbsS5HVtAqHxfKI%2FL9NWHiGtzWb89MkgXLkWSGWjzDZpldIhvp8HTgI8IxyMwjQjYX9SAY%2BlqVxL6rcgSi37SZ2N1OCOVn%2F707QZ0YmxnZzQ1LHaYp2CtpwCggvymjx%2FDZ%2FwC%2F73%2BWo7t&X-Amz-Signature=105ab929b97be0979a1a32d74b898315756bdf37f81247723db4520f33de879f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=07315d0176e71d74807c6d44d76a2e7fdfc231132c0830f98fb81ac9bd4744f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQO2KQE%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICtqgi9DgRl9Lt%2BtTCSh2EZkPGcTmIlQObI%2BbeQeMh8RAiEAubpxHu1KsCLd1iMR8twT%2BVdN5Fz5G3jJq0%2FZsLNhmoYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc3V027n1I5diBrUCrcAyezJbtJ9qvv%2BLzOmBrStSMoJusaJdfWesCnDBAQr%2BRCPlP0KEKmWYEIW0izadRxADrhq38brLv26OXz%2B%2FBw2CKwtV8h3MZvJ4b34IgilI%2FGh0TtTTYYx58xdjdWnemPvlrqLLhe76cBYPK945sABtUP8zekn9fIw4uRLg%2FsB33kEmHJ5ldRMN6k2nlG4wxCrjO6uIms6oxQxmh8Osxgs15pLzRNJDHVHEn9qfd0pZBHiYd4fyaaRixpS8zGI4suSKoNXSA7LVnowt1%2FI0Y6w0o1NMQKkwuoSru9Zcghdq%2BZUkGKQEaiob9FlFKqvZuJX25TFnecwJdoAKFZ6M8%2B8rQyU1clOS4IYugb5kGBaFnv71b76%2B0Fi3YBusrCtGkyibZ5YE8iYOpFNZ1YqQqHbncRFiySPRqZnwga3VK3K8J3Wh8FaFaET81iSejXjckG5BbHEn3gxsnA2czCmA2%2BJxk313GdR2yJCpgdWnLcBejE4hhRTGc56Q%2FFZ%2FcfiUXrDj4LonDgE%2B%2Fc97I43w04f%2FuQSReDEx2gVlyMhrSTQJM4aLJduyg9OGu2t%2Fq3ZLiFrU9BYrbbl%2BBDnpDK8U6BhJxGHaMzdt6kDpeiA%2BmoOVl5EHCPX1RFbL2QMpeCMPH5ocoGOqUB1%2B0L3xppMfCorXns2cZ2he2sGsQVddbF%2FRXNkEuBdR4ILBeCMN6Lk0%2FsBKC45oOdw0rPKa59T0YPQZMXlSEQcFOugwuLXX33tGWXZ9Y0lRL5mYtpSi8BQ2o%2BkoJF2dfBMXDu0inOIP6uPkYEtPZJ5F8TDPd6p%2BotTAVb2VqtNyEO1%2Fy92SqkiGDthhWL%2B5Alx%2BwF1nAqS%2Fmjxn%2B4F6OwNltmRMY8&X-Amz-Signature=0db5a065add6b402f5ed619f001b76e4f9aacdaaed88001e08b2ba4227560b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=b3150d4f20a7fcd14934aa500cead29d46d8e7cb14cbacbad4fd23b8198a0f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNT7SMNM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHNB1rzciGiKvEZKenCvxSM3D4yd56MkcSgwceFLCNwOAiBO9cOixJ%2F6jymS9CVi5vs0Qytaq09LIjOrU0hZ8knlFCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2Fur4QWraM%2Br20q7KtwDRQrlraQg%2FpXBxdpD3hkmhyrCpHiwSMxpU9xNwIxnYtUfUB%2FdMEsOr%2BTo%2Bd42BXYuw6ULAXbn0wiVnJ1oHTyszrLbbiFSOrfTLCwREmbz32mX81jt6jB%2BpF6p1L4N%2BYXu8OsC6Yq8%2FZ%2FcwtaTT5186yxRKAhTFjkNQiEVGApYxaF3wg2fIeApX%2BhuRMy0y8c%2B%2FyMBq8ZSIp2KtZHUW085N%2BVIw%2BlshpZ9Bu759Q42J0bwNbrtkyIl%2BSRA%2FWYmL1mmua1JVrHRJ3t7sy%2Bk2%2Fjvc42dCYMTO3wnQABSpe6T4Dgkgu7p3Hsr8CyjPlO1n9WwF%2BcsEd2NJcJfriRQ%2FgkZuIVb5R%2FXuhexHsjo%2F2AQVLUWgW7KUxl2J3Kk0vu4oYqqwO95MaXuEdUYIBXlGlrDT7RIs9cdDWgGnbi%2FaCKUwsn3guRPViV5v9Tgs0GUybZswKmbZPENqV6RLQ%2FSl4ELs7nMyDpbpQ35uwEXUC%2Bn9CR4O2A0qLEGcOqBNvo8D7iQS9XAol8Kkk93r%2FaWPO6SHag0pnFjvqlim5iXEH6yZ%2FY9BwAydy5r%2FN0aZfVK2Pf92jerD%2BOfL49z7hYIBcidkB6LmQ0IjGYKfuW%2BLnMlh2uvWYlRg9ET7pFE25owyvmhygY6pgF1Fk5l6Vf7PUscs7GgnBJ8PnLcXby3FW%2BWMZ71p6JyI%2FyoPFgck3R2YcenRkZdpxkJL0jVtwEfvXwgwcGP%2F4fDROOjUo3UigBEWUvsuUDMQSKz8J%2BaRdQAlU6h9CPRrhu6QHM28LgnGR67rehHX%2BpNdk7Y2SPsPtCgszVrsZJSu1UGfewiWyP8%2FxhEVTbsL4eXIyb%2BoOY40rEAHZu8NVODXYi0sPHZ&X-Amz-Signature=6cffc517bf9a4074e93d852c0f6a28d0a8aca90c327d1e10e218e0bd2f836f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=9c43f27bc72b70ac567f2e265583af466fa2960e67e58ca3c19055ef78078f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZFDVAP%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCGZtCKVaP9Jd64dQWuafpsYS%2F0n%2BuRHvgwaWsWSxs4WgIhAPwSfxR7gMNDIII53s5Eg%2BeIKYQT2YLsmelrlKKZrudBKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp1k9o7WEZ5ToLjQcq3AMesbr6jD3NV2wxXReJQiO7HPEcwEulswCtGKBMDeSSse9hd037uMw9cI43AFVrp8dS%2FlvyfJDsYqj8ZSO6I7xw8ZjztSYpcO0ImwT6aRzZ8mdQVjATLMF1AjRczqrogKgc1RtDIAUZZul4VyG7i7lLQM5CjwKpNGesJolVyqGjCjEk16C%2BvG2BdhlXK11Vs6P7G4C%2Bg7lrgQz43nhoRKYe9Gk4SqO0og4WaIbCWM%2BZe6Y2%2FadUwWgO0qkgONs6ELQ1Kkn6xemfPYtzDBY1aFs6wckEKXHzNzyvBDjSu%2Brpt8dTYaLnlzSGMM1bkWhEz%2BulgDn6zRL%2BAET1jSDOD81D6wchf4aE%2FKg5NOe%2BnPwTatHY0ryrP2QYeeoCPGML4apESAJcYYKqlGLKkf3tuWQYR0lWS4v0SfTlk5CZXzuLM34idswRYXs6gYb6Ml7RHnjIJEYMTVoa2%2FESji9HNFlHN59UZfTBsyvCJETZtCY33oIL4%2BoYKdZKStW93xGFXyF%2Byce%2B3qXWtEL5g5Ke2B6FkXwvhspYnxbUGHkNJsDH08h%2FJFRQFyN8gVYxQ7JxlVea6Y2dvEzqMWIk8ntwN1Fa07kQQYr23ESEVgqHoB%2FmqFpPUanK4YYRkzhrkDDG%2BaHKBjqkAd4BCAqttdd0JsZ7HiYm46pTj%2F9kfu62W8k7cuqQt1DwPDM6p6p8DVf1eeBsVprNcaIdqppDYxWcBbkLb6V7czHWotUwFsUNiT18esZeCNDDRlGQyha5exqKs2KjaVzXmJZqSm5r4l%2FqSzKYhKC2Edw1jqkzFBRB1hdJtqesAtECpg9VaRAGw7tuFq0ggKUSArxQJibSBlgUZ7MBxI5cwy%2FlQDJX&X-Amz-Signature=51e499c394dc42b03ba031f4704aad004804b13a11640b41aae46f1c1ac0a915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=8227bf1cf6d273f05f636fd1fd7e675eadd5443e24e86fa159c81f3b9ca942d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIXGWAO%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBh04XyIYYPVPPF3bRs4ejf0oW0bGd3ANU%2FR84yXKolFAiBKzp7T8fx%2BXkAJitPluMzN27L88kxs9wVyjA25MqIdWiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZPTEbB9DumlE2GWaKtwD5%2BANbICPK3irZ6MyvW%2Fk9kq7lUXp3KpbjKsDkTjuvL3SmXxRJx04oB98ziaGNruMYDOGxUIaWt%2BulQR6Ehb7AgKbuADr8Zg%2BZ3NKfnTiI%2BxGeebwTaYCL98fkjR9G05P3CHG05zPFoWA4XK2a8IBvsiEuoZh8qpqblK%2BMNSG0pwdoUlrhxAfJ2pjanUSQFcpOR4sT%2BzAbUBX7Of8mbMEih2KyLkRz4PNIMppYHSBZpijQX4oU9xedkYIhDNvGuhaKXqQYb7%2F4IDwIMw%2FPumhkFFMYRhveoTpTTtBYLHJ%2B%2FHJLJBuyd2bxQTAK4W7Mav2xNeRYJ3xTaBBIzWbBzfpvEFTsrGxpXwzv%2BTOxv1eoS14ln1ia9IQbPEaFKFM5dkwiE9cTeXgPAtR4fl9F3Zyy1ckMVe%2BTSFWfBkfs2j1ryJFgAKUGbByAF1iyGtMd7EEa4ZF68OXS7dX6vqHrNwYpGguH1yrf4CQDx78cN5VI%2Bi4XWHZYTyMQ41miXb9EgDNGchukc0P%2FzskVEvXwPG9J06EKqSYtmpPtbXsRbw1XtuzKn6M%2Fq9StaUt%2F9SOfWlCIMOXayV6w4k9d3xBrVZuaQeWRtAcMzkPIVnhwMqLW3WWUth9yra46PZo5VQwq%2FmhygY6pgHntNMWMeuEUFBDUt1p7gKZClamDpa6dt%2BwWYE%2F8O%2Bb4pZYiIP91hT%2FXxa8DQHXJ0qEB3loPURwrvS7I38jjo%2FHlUe3YA4aA5Mf5VKj5pbsSQIaFvH9sIjuG%2BeS54GjwYai73JHGN1CFfbaZdaP6qT1IP5peUiUJDT2%2Fsf55%2BAYw8nNEd0v3Tem6dorS0adisuRShiYVu62Af1nOLqKMpnR5OSf4YJL&X-Amz-Signature=4871501e5041fd56433a8726a22bd176d87e48a1be8dd723f9706f91ac4031ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=9fc701e432e1c3011e13a0947d4fad49aa97e451224080feae5946a1d1fe6f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPTIAWCI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDEa0T0GmumKDX14agPjSkm2Qj%2B2gxlQszP2rsml6gdOwIgGkmyh6BPV7oulSDgfzFb4Wmjy1gGV5DDv9WXTnvLD1oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKmysnXV%2BDHLR6iLSrcAzgLGrteIWOprRkywMG9JWz9LYYyQKXr8A1cAMWhsX2XLxqf%2BLSgkb%2BAZnOT6oGSerpi%2BGFd3vi9tgK%2FFK6%2FVWAOaL3%2Bc20yzBJwfjStJEBMzw30O9e2LG6arUWYJHPf5ZyVS2COqaNgl1K%2Fzk6lU3RIyebVs5HeVZXX8eAnPdmfAr5KalOzdhSHvDEZiCUM%2B09A7mBCtXcOHzVwPYVI2Mjnmz0B4vgtjv3rdGqIqsp0m1%2F58UYgV42YLHZGh%2F%2FEgJBsZwi8IY4F2NuwzRpTnhovyESnV36VEm2thkJDJrR6ej9bhnEdoV8gxU%2Bju6uUXP%2Bno%2BZ0Xin5pyIjpvCISeWqycXMpgPXtEMyWZwjug8TB4uzMw0tj32MvrcTgryFF98Pz9vQjJlv1%2FzYZsxj%2BlpEONBXX2DdIBjAytbjg5AXJ4rzpEAtpXLpoInBgiXl3m3wOCncJHhiDQFEJ4NpEyDhjrY0FiYedijZGR%2BfO%2Fi2c8m4ClUt2SA0h5MVLgV%2F7F%2FPSuleoREVvS%2BoFhe16LUTyuMULqh6btRsxJ7U4GywW%2Ba3M0%2F2IitYp5%2B%2FYueAAvXOOM862hiifoZCO3yXM7jcVaaLuytZVmGm6lYn7j%2FbSlK1NnS2qkfMGq06MIH6ocoGOqUBX5d6uvGG8q%2F7oLVG8pSKWndg0beM6OpTjrIs0DIXxkitFv8wXG3NDlSpT7AFU1wRyf%2F8%2FLP4exvNyxWqZD0EzLBIrrOX0gSBEbGRBgll9tnErBA5BvUgGOemgec475VoZFm06fitycy4RWhSh%2FdGqjKOGhmnm3JPEeKOLAmYFxcMwE5yGMUNfq0AkoY51EC%2BrRx7ENGy0zeC752tDRCI4pVDbQLC&X-Amz-Signature=854b67d9fba39f9e9d489b051c2f1f9d858f59149e1672d47eddeb3bd82a032c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653K5LSV%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIAK0qZqcFBxHMjnuxyntlO72yCqIPvMNViWXc8ZnSy5xAiAPcnBPbOl%2B3Q2JHN6Aqwf%2Fj1D5cy1dmq83N0APV74OBCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhsHWvnii62CS%2B4DVKtwDfKBDUeRADybTXYir82X02z%2F5q3gNokYDDqEv5qZ4OgkoJHqkSJmT8uDMQHGOeh2m0xz%2FAX0JUPng0fq4ag%2FrbulZdszEXftUAVJrUKMmX7vfRm3fWuzyLWtYoms1VDVbi1mZFLCpIvKbXIo9K56aMqR%2B5CFUvG%2FA17pza4XYzIO0dxL2w%2B6XNm08hVWm783tlSDV3Jr0AfxEg%2FCrefAAMqVT%2Bp2MLsJ%2FZrQDjLn85m2TBUm5sBJOsDOU2ID%2FK4SwW3f4gIlumIjn3jKZBqh80kgkwBihN5q43kiNApVP%2BXI6mTl8ugSIWUXE5uhcMaxuANpawbB5ivZNAUs3D2Vi0wSVCMMrHzNOdOLxjS80YfV2okJYuEMilQBn%2FZfpDMRwwb8lKW2bkGeCqBXk5HOv9yLS3efa8xcxRuQlIvXwTsj73b80WUis9Q%2F%2B5hL0VIhlYSLHWI%2Fvofw7hEwRNp%2FuiW6YO5a9ZQahjZjJzj3cvHoPRyzn%2FAs%2Bz5WCj0KzPCWJE3FQp0jXRaozl7ct5N8ojAq6AgeuXfFgbUzVnvY8Ki7Z2Acum72kH%2FhPcqigfiJ%2B5xLfTnge8kp%2BpNlN9NLzRtTVXdosEpOVh9Gxhlv1Ef0hdmJrX9f4VYgh4d4w0fmhygY6pgHBBIOGxoFdbZgw3wqTse%2FoR8puvC3GW%2B0cFKBUS%2Fp%2BgT5octxKAiIK47BVeegibVq3sxbOfLKtg%2B%2BgzYejqaRHfhgEyAkZakBGq0DQ16lmZ2%2Fdm5IcGDYg5PzUnhNnZBUfnUR1TJmyYJ9mBQ%2BhWiqkwxPhIPny6COIP9YdyU1nGAAup650mccRcTZewPXxGIgheuDQvsi5dIkA3q8jfHVDIjuZQxKK&X-Amz-Signature=ed75978f55a2de5826ab9852c571e77330efe474108e1d4ff25aae585030cc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJH6MUI4%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDg%2FSXV8wV%2FU0PGpq8VaDu63fhedGOCS3mSB%2BsK4Er%2B6QIhAP0eea5EljTpRwV4YPGIU0mxFIT1RCzL3elrgajfUqbjKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwJmSeVi%2BGbcJU3z4q3AOiCGmkx4nYyarNz3vMpCBxhFED26%2FGwRJDtaiIQOjpt3WcusrhXxCDa8LBrZM5inpishIDWhFbezMgbIeKkUFwqbtwNbT7fW6VMV%2BO03TjESk0JVOi3lh%2BNIxBgFAFBCg9oJHwL6SIhs0ui6Lrs6gX1Wf9phOMYO%2F4PS5ty9%2FGEQAPw%2FXABCU0XdtwbHJ8Lxvd1v9627YSnMrQuXxcdk8cwNq%2F0hkwFk5CO97lbBwG2BTDDvF%2BaXOcdvmkp8DZ%2FP2ueTwKDJ%2BIEc4mxdDZkONVX2ewGEbbe8xY%2B6K6Ylfv2vaMq8VzMHPrD9%2F3StHPNwkeq6acfdLW%2Ft1owgZ0XoVXVoWmWQLf69FHmmZjEQ6ahYv7rNv4bRLlbSVjhAx3s27EfU0R3jNnbl97Sjs1U54KxiyPckZ9sBsebbuX2F10VB0d8%2B1ueyaZXAh%2BlZBerweORshIHJDTlpdJfyf0y8G9xUxCkGADxok0qCGZECJfpnIaYNlmUljKJsuhk%2FNXK2cUY6mVXRZSMt2V%2FY6%2BIsCAXyWAmQB%2BUzx1zauLoiSSqqQ233IOewphL%2FOQyQ0gF%2BbBo7fpXO0zei3qWoyBySB9hqQ4xyJsplezL6BoO1zAeKyNfZ2gk0gPy2q%2B2jCk%2BaHKBjqkAfI%2BvkwYPKRSvPe%2BYL3czRJ2Gw8n73%2B4nzPq7oUtpzBkH0QszjEwUaT9LL7AE%2F8z8Oy0iJY1gLaLYGreyCkZ24DMwynRTrj2fRrJqc%2FmI4VTR9j65g51cxKcVliwbBveDoh7utOfdpbJMmOVVLlZC%2FITuty7kskpjQz3UKZeAddsRIwD7WOkkayN0sSx1OA9GkeXWod6cXrj8a23Indxz1wMcQv5&X-Amz-Signature=79243e1ab40a34a84757ccd1e78f6e31525ea8a2b6c55654855e391b2e4eba65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=e7c62e3fdc303922cdb0f146114ce44c954cb102f3ce54f8a85ff2e1465dd1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPLFG2V%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBerIpTyllIssh9oyl%2BfVdu%2F5p2Ol4t9wzC3uwkIeZLtAiBZz0AYvTwOufBC5ViqHiE1xuvDq6yfe4HvJaDwInwSbyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTWcSw%2FTaDMP7Xd8AKtwDBV2r4fgqcTjFzgdVmXVttz%2BZpXl61LQtFW9sUvWhsDrEShaytlCP498IJrremaFIITbwoZqJNhyWGzpzS2J0vNjDC2y5dUAhx%2FOqsbjz9Xkh9s9EzIud94euFT9w07UIFQXKDsCZtMUi7N%2FSPbyJ17IFJAPkhZv9iL829rZEmEoilvGblXynlR4uUqp8103kIJBU0MSk%2BQHTTzcwheSesBqllRR3JVEWteTLnDF9OhcLOEor93mYTEx4iIV4oTNfET4QG%2BF71Z5kn2yO%2Buiv3s1X%2F0nQaJtkeTfa04%2F8WJgh9UGeINJnvKCvBh9MQj7npdjgexG%2B4Cr1nPNDtpPpEH%2FTAMiYv4xq7lDFVeBOezp%2FiId8SnXJw%2FgGukgsOUcAuT2RItPMHdzvGN%2FAgYAG0TQ6HXb%2FFLFp80io8BbE1Rj9B9GJhTmjNwCb9%2Fq3JWhfHagekR6ypNiji%2BoR1DYc9xxSfH%2FpJ1l2xobTQzY3cDR%2B1nXpa%2FsLTJdTCx2tv6fBuiVsZwEOiguLx7BTC2v1J1j8ma4yjz7W1%2FrU%2BBHGhYuN7FEpMS9VaFzA6Bd9utg3oI0773a1j3eeRV4gtBRJqiBmkF8QuktaRrN3knqmECkq5diGwc8fwkQCFl8wjPqhygY6pgHA6RJLOD%2BTmifpSqrEh3xlzL2PZ%2F6ubs0QNbZj%2FPCWEsaQDvVgn6FNVsbKUlX%2FRWbRMSr1cuu3SxncEZ8rEyuVUMMmCtHGuGnMxn14xd6NElyXMItY1uX1XKgP3f25nDvTiv7zpmfW73rn5hBPDMHw13pk4sl%2FQg4VE53mDsGTfz8j0t9gvTn7ayumQ9slpTXWEBEctufFevv%2B5YFKjOQVwUglV73d&X-Amz-Signature=29617d45328afda58e72192dfce08043761b5e9d3ec184ab79403e4c829937a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=3380bd257d2df7b79bd17959255f0a8daf7eae127e09bdacdf7ce9752defeaa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=1fe5722e7a5a2463534d0e8373a27363de2e1966e62bce699f09d97c0482e13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=7f6c77eb9259b49f9a5f0186f352577d0245d5fd794ac0234b29814674206d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=6c9c0c0e6f723a9d1fc8aa2301e4692c083e199c84e03cdb5386ce07bf31da71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5QA5OV%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T015028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDQDiurHKaOu2F373bDbTzhdCOxJxw%2FODTLqmGMcHAIZAiBeTEBJWHDMWDwIr2esDvBJHS0U2zQ8YEJ0VBzjZAe%2B7iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1ExQiiDabVTN%2BAtKtwDgUxw35tksptDGRLiCtGHQLwS0eIKMFS2JAt8ObwBk4aIVFut9uwfn3Q3ifoU96Y8dZogeyXQDBOdPSOIea1vDWg80QNFJfQTY3BQ2dqpbsvNMnQYdRt4qfH3AjqlqS%2BPnU9soOffNRJOS1FeQR1dKHzkYjalppZ%2Bh1tmd8ujKmX%2BNhTUznRy11Da2j7fAasM8ygaWam95njtd%2FuT7sTDHpEmx7tZnjiNzGLDE7YL9GI5B9%2FmtEOQ62Hx6QihMN%2BqXp9dmU%2BIGCLE%2BkQ%2Fm9sRZzxNiE0t%2BtZZT%2BP%2BRIMpvyRd3ukpVAVRt0JkNIRtooCj4ls7dZEEfRdznc%2B5XneDnKnL0PCeUrGr%2Bj5JYhwWYY635fl2DbqalbQn9HDkW7R33WKD2gc4QYmq43KvQG2bDdKVfYEYRSCGzEa1lcNNEYzfr5oRBa5JTwMoDD%2BW%2BdGZASU0A1lom9qta4hAB2PhbJq1HvuTWAlj1PBm4kdcVz7rdusctFCCIT6EGaetB5lLpAj74%2B6PjtDwoGtKUYFUN5i2uKz1N9t5jRctquqFsrehpZgpb0xXNHxVgtPb9laeNY9bTglGStLZcF%2BKr%2Fi%2F2P3nTf6PKRmNlnmDWK6gOtCipYM1Iq1i8hFedCMwh%2FmhygY6pgF96YAVIbamOT6y%2BCc2UfeITHkZudK5g5liwre8UaTsvG%2FC9vY9IMWyojd1Iegg43gd26iowR7JE9cWoCXcPXSJVO3%2B79udXDnNr54RE6X3%2FVSlGeNgWwSziZEaiKC%2FJaboxDsAqOc71WtpuDX8HiqBwmLmq%2FdzGD9gU7KZsLY%2BHaZcK6dnYtu9nsdlqf42sAIQD0a0Am2UDCO4igJ2OR1i5QVzzkym&X-Amz-Signature=c061d2eeaa07290145913471ef23f71e20387afc58bab6af912c94c87f2074f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=d78ad2f091c2437705c385dff0003600e25a6d8dc261aba72c1c94773089f01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=775be71685f2fc4a54236e43d8c48f55e557e9f3095d2cd37877eee4f8afac9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=7f6c77eb9259b49f9a5f0186f352577d0245d5fd794ac0234b29814674206d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=53f1fe1ae3ea22b9255270069ff00796077ab93d864751df5f71329b6c8d6c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=83cc3de5bcb324e98bce3841c20235b479fdb1f2807e5a45c32e784942e9ed4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYB7O3BF%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIAV8OQku6UrZrajsiChY%2Fl41rWl04a5QcDdaP3gB%2Bb4jAiEAgXfZxze6LkmSGstJkICTMLJ5usGJXDd%2BFy6lYPd1XFYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGEsJE6M9MOrbGEnCrcAyBE%2FBCKYUCux6c8aAF5x8VKhhU5h7QFXcnCchRgC%2BdUY2hDaAyxe29jE94sKxjmsvl30UKn2STOM3uYiZe8JYcmJO9K5tjQ1TqOlCON9oNh3BEwYLkNrnoGWjnFOy1V6VStEI7tBk0I%2BRvuFtULjJpe7YHBQa2qA8T9L6sLBtNsWVA1R4OQVk3GJmCefDC99SY2j4VDN9dCcEc1bXj6YzqeLV045G1cmiPNKoGwFn76UZxTPo09RWDKRAo%2FmTMjJPJd%2BO3gDHEVy5%2FevU7UdpWJU64FlkZE2zEpYf8teHH7uga9JswFHzi%2Bt1J0Uwq7a17WkW3f%2F55SLE%2FLu%2Fq0jz%2FBiAcxTnTbANsJvsZU8AUcCZc9f71v5nB7x8jHau0e%2FYZYIgKi7GNKen3ngLUsqLLFJcUg3hNoDoId7zTVGzoWUyE%2Be3OZAz9mmJ7MMKhk0YYMT%2BPJ5Yt93OGOFmuKOxlzKASqMAmFZcI%2FhFgelqU3wUTn3vQ8V2tP8FEZVll69kdcv%2BDlyt54Bas9k9H%2BOdZ1wQv7rNHNPngQL%2Flfvx%2BwC6nrb0UzWYHAq%2Fqhh7l6DNVD4D63F4LUj%2F3GXovqvkTzKqK7SQZCSWATS%2Be3b6jVc9yWmdDDLojsMMg1MJf5ocoGOqUBN%2FPYVxCULYmBqeiV0RZPx1TGSmCJe5VEywECUobI53pZkF0Y3cA0Tynoae4V725F3%2FrLVkaR%2FMl2bfp7TUDW8teY6kXMUVijzgPAeGv4C96xk9eAxW6aZRhiapW%2FYDhZNfA36OuOLOxdfoiN5k0WkKQyNH%2BquN5ybsfv4AyUC1%2BfeNH9Zrv8LQXnjH7l6u9O5wxx7MET3C9G1mCJ8hA0D5xd20pF&X-Amz-Signature=ad04fa1eeb2dfe6c8663d241a39ecd0699b717eb5095f8463859a99c09381102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


