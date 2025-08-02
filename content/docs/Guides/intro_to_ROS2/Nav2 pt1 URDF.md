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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=865d1466c7f7cc1b2b21d1fb64775431d6535b3bb7a2042a0d22263c29050b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=300e497eb99f0e568845d337dac180fc4da8f2febd7b0a710c90e07d2c73c707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=be91e1894a47e53232a7dc2321b0cc1469823ae076b774846bb0e01e41998490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=72abd78ec9b07436d3668a387d9d5538ee40ab6fa13ed54b55dad11f218b28d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=b79ff08201f6b283bced486dd4448dc1a200cfdbe3e53b83c207f7ea52707b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=53e910d12a6b5f38aef271348c8db9724b4b9d6098b3a53428bfcd00ce13b476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=817353e352d5e4a8f511dbaf168755def235ec776c7b890b3ba04ba77914495e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=1034f46b979c69c0f662b7d03342a4269e08f6f70d0a8d0e11a22f7bc00f5f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=33368a3261caddf5bbb0fd7454cc35b61a84bf5f07bafdfd5e7cb3ebc734dda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=07b31eb97eefd81ace39437a224c6072ecf1b21222108e53b678de8488abc954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TXXCUZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsPRCH9kNppHrd%2Bzn5AbzHDMTyWLOO06YDDRcXhYMJ2AiEAqklkBosof5gHGerlvjh%2BhmTbenVzeNeUwZmBtDQtAVIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDALV1UoECy%2B3poB8JyrcA5PqwdREFSh5j9YQsbzbDsirxj2SuggJimaHyKIZ%2Fk%2Bh713qIoIMQAWJR118uauvFKIXQ1pPei7ItD4FvnWMdLX5%2Bk9ogjF0M%2BDAquQp8Ce0Uc2uEAn9H1RP4KiHxANmtH7C9mzYzCIFRg9cUxLo8ySmu4kN1XxobrKKY54NwCCKgUnUafy0byCrYeeFuEka8VGVwHZqQdN2wmhEG%2FdLNSvCF9hvaznGKR%2Fp1ubFLT2YQThh8aLN6DNhoyDvHrYCETj1f8%2FmBIT4fsQhZkNPSaSdJjUpBI%2F%2Bi3xrur0wBY5Nxq0N2AoLmsFT7ndv2pPNlugwTVw3PF3QPVUYsSIpg6YgczlUOs9AqeMUSV%2BnbnjA0bN8rHYVJAyvMvRrkYgmizG3hBRKEpT4IMwxrRhxa6PjgbE9M2zFgWlTWdbOCra3nGlMboKwgIH78P3I0MsJy2L58918Zc1m%2BilF1p8ha0rym%2FKarK2r2Oam0M8IKaD3fRYiW%2FR8pJZVIimOKeoLStoFPGXXmverWw4kyvdZRpn7tM4UnhKZtGIIPDPsktDsQSK049p%2Fs3wwcTYfH7jgql34mDhoO%2BhCbMriXMasbuDT8dk3ER5DiLhlvOqwOMAGC2AVfJA9uUpMiRNgMK6UuMQGOqUBK0azrwUx4%2BhFR2eHmNj1hH9b8BxM2XasYNa2r8UwiLH3PnZTUToKsUA6pScvaK2saA%2BpM1WvrgaQKChKHc32agDcLJoPDr%2B%2FFlrOdoau0Y7o%2BLalXjMaJFIStLUebCQqvWXA4OXPRTZhYkgLLbBk9uwMvVtjcQWP3ACMo3WGDzdbEka%2BgqLN9GqQh0u5B%2FnyOt8CnntXpYmr%2FSfiLM0ZfHacaQ0L&X-Amz-Signature=5bb975d7a8a0f01d5690c5f7b496123ebfc00227e3c635f5ad3bfb044b785a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2E426CI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI1GjXEGhuYewLM98RYxmpuoyzuSbr0YrInDaqOS30UwIhAPQZmxBCJnmUU3L1q0ITJVxD%2FA%2F2jXQ8qmO2kH3cQjPvKv8DCBYQABoMNjM3NDIzMTgzODA1IgyMW2dj7lz1VQiFn4Qq3APXjBKz9pe4rCTLD2kogAMG6StjWEoKVkZX4og51s7%2BUiCFrmKROZx9KY2xHgolK6z3DTQEuufsc84EiYCtijug0jjt5kcwTm%2FUeolUMmSoQa6xj1eNgLr4B1kF3tqDxHci0qz%2BstlqnlgmVyyMPDDg1pfkULu9pjjQPylKktQMqeyyMB%2FfXqsTXGM9lxgnONV4LkN91fV7ZH50aKZiyiqdpyeuGcW%2BBgTz6E9t6MApgh6T0HGIT3NWBnXefXoj%2FwE7iJWsGEkP8dfn3HjSkP59JIhFPxn1qB70%2BTMsPgcGitaxQVM%2B5EY%2BYuQx4wSFnx7wn1uumi2QWTpAdMObjO8ml2pKAn%2FdIksJUmCGfaumHBSlTy6%2BPHNaj4K0N6hUNp%2BuZfDuyIIEqWdMTsHGDeqMNrBZieWL26vuQdemGF6lW3zN3u8jATBg4L7E7qZ85e3GRj3L0mATGLQ3rdWr%2F9lGkGHWeg4Aik2QW8aOzkbwOVw%2BxmSWcMBel%2FT8ZVItWaW0glCCMcVhio2NLKm22wgaP%2F5iriydUPBzIqt5xBTkMVOlKPY5Cb%2BxpvAa6btb9yMPEvYW2PAxESBl8p%2FzROJKpLLB97QvaHkWIfATMcHJ8pQskZLE4vtR6kmehjDaj7jEBjqkAUl06%2Fn5Z2Ljnq6dGfSnK5qLthcNoltFz61k3bdV5mB7sGOqcpP4HDQlAg%2Bhl8bPC57P3hRg6TXu5Wjmv3yTJpcMTWO%2BbIeGjed%2B3Y%2B205nF8V3b19LyzgZQyE6jDuCQsfYJlNL532czydVyH52jAgkVTKV%2BtpMA56jzlqSLlQde2EL%2F6W0vHAHA8eVtYuDbW0gELdx9EJN8oEr%2BN4q7Z43oUOJq&X-Amz-Signature=31aa68149a8d61b087763b74c51bb9fe5400c7a37879dff15afafd13a6f576c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLMNCJ2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfiZ0XOIqNI%2BbKSWuRSlq2rwKXpL3cvlmPV8DfwHM6fgIgK9BWIvNylA391vvAESe6zVDol5ymMWhXKvCou8Ux9W8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOTt%2B8ngqRtpcgMX9yrcAxwDUemXasjyEsAydPObwCerWN09WSoRUxd2Ri%2BQ34auxL3%2FPFJDuJfm%2B3jxdrL5vNIoDCynk0mMwFmaD1rzTKwHPI6U7g62rKc02UflWQ%2Fqg%2BwCAh4zdXJuMoNWPZ3jpe7t0vxAcQdao2PetyopT3ujv6VBtXM8bIoSSUnmJgVbIwRVb54uQVzu4TgebZihjGMK0aBZba7gyfhYhUAJ89iqTfxCLin%2F9qaSrwJ5qLHgXjXQWeJAOdKGLhFzpwup%2Bd0KakxSqMR9CDpdZ7BG8ZQcin5bIIuIk2J9uzbzhmJkTDAbkKc1UrBMBjnuVThlmpg2WWsZDZVj%2B1gSr9i4Bx6yXY38LkT3cJAwnoI8eK8w4jgbLr6cNr0z7T60%2BkOAkZwAxLj1IFfTrRd2Hqyso041yZTJGns2f1mw%2F%2FoBPO90Qbpkh%2BiHfxhaM2ryWYY9N4r2Q8cUhunRnGuPa0nAbR8Bp4fKsmNW0V28NPDKhmNmp20ih4UqW6hTqBRwrLITJA6Gv1gbCVdEgJq0Dix%2BXSKO9K2zbHpUmAS%2FQqxZVumC2Lg6aPLnBq9wwo7ffM19fnm0wp%2F3MteAW4qOg9490gsVQaLNDkI4bUoqUwLPNCWhORLegWBGOUYCIaeNMIaNuMQGOqUBUCWAx9EOLq3WHn0yE8RmvGGFRc7JlQIbjGdAm5jH%2BFav2Tz%2BxYhDhOii7Y3XwnVPDGUy5vCcaz28dwIp5GShFeCvuT7WBix7XcgNkyZgd4MrdNltl28kI4ryNDjIxe8%2Bn1WIE7LXZj9BjzI64ymnkov24YUGDFRuKlcwNvNiuAFCuLr60aMuWHAcKeNSenqCSiTr4mnluGdASaMVm%2B3GK0DScVkV&X-Amz-Signature=b22c0019c9721690b7af10c4408c49cc77b38932b46e085ad2a9e0d3d199b948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=53f44578f4fda352d8b03f6920a0784107f9ba4aef6ec023ecb0851dffa6fb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTY46UZH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1kVMQEB7CobdN0RmD2iFkfUKoCQcwWZPF2BJlByWhtQIgFJYxY0wDV6N4GyRJnOG37dTQrhWemCpJ4N%2FlqFKUuDwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNJMDinKfmWZuH%2BQyircA3S0O3Ggl%2FLj524Nk6DHPwTMkAL2T4oqzey4x%2Bvo6XeKMaW9Q1dco283vqra%2BwaOvQJw1l4eNnwU0J0PRnVZiJARqC627QwY4N%2BtLZJp9V87uqUl1NfIrmbrJsEPEsGlSbQGf3neeWdgu83m87saCDza%2BFHsMSJaTb30raSPyHhXAE%2FcBQoefRmoY4atCqnb%2BAJTk%2BDPKrRUoIx0gKuC0w7Z0I6FfDEbd9rVFkjG1El3oMQ9A6536llPj4GN9N4Oan%2BZeXGIuKbN3v7Vv5qNjHnNYcHg8br%2FviqOaBhM8dEh2QmUQJzKyWaHw0k4GLJk1uu4Hc05waIcnJlmhyo59JWUbr1%2FFzyuiyMNkTmUhGgcmr%2BQL7A%2B9NkhLmRKwFP6bseEtWW16iJClIwe%2Fz4nmjjfqT%2FrPPcnkjWpEO580cR9dsgBu6CmA15VAEX97xYLameo0%2BimagviSJ%2FRQO9bdKqQ2xdGG1nb08zrisvblp2D1ORsQBhOhcgHZ3Pu8icKGXeuUJs9kkKvUNLXfVged%2F48xDHkHAnGlW0wug6z1QYTPKn1k9Bvs%2FSFJF%2F9hotVvaRQRBaBxAaushhRszmqTXaRCZFtSseIu4KK%2Fy3ahXR8gm75Hl%2BgWUMuOj5bMNmLuMQGOqUBHMeEuNuTgo9i2FUN%2BKhLDFHUrOmtGxNdc5SVkxJhGn666Sz7fC5zM3kwxsQweSEW4%2B6kc5%2FpDLCp9256RynBWnnpcEWVDqv6dz5l1uZnrWmj5OAn7qvYMSW7LQffdmOoF4vZ%2FzFRzmqrGHIJEDo0Q54s7wrUONVNJIEFrZcJ7iLUWtXaFmAcLsOFAy%2FXHnph2YSQ%2B%2FPnfyIHCZ7BDMqmQgifuzRt&X-Amz-Signature=723407946a2b9c38e2bcb390ddbf1c7713893137351764bb54da50db0b746fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=53e0a34169d88db1e4164af6f6104fcacdb5da169f603b9c63cc648136130e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMUJUUU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ZJZ608rgW33vZJWkArElf79heQWB6%2F3WYqtJ7zqQUAiA2mDOhJrbFbcO3ncqaBJeuAKNxV9lzN87CeL56CjI6aCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMaz3JP8HaBpC6D%2FJFKtwDffr5zN22xSbE70uSJ4Rvg7R7AGtetJ2VV%2BL2H0fXsDNnOXY1Nx3uMN2dLeV4b4cEwIMcneh9Z1cQ5ShgN8CkcD3PDD56zPSH%2BYc9RwxwAyeDzp1uz6uS5QW7CJDHUKok%2Fvl6BjK3x9o7HaWnN4CA1knX15EbfSiok1PMOqdRnJcsGgpoNJTkFyUMG35%2BsLa6jKHr9VVcb%2BeJrPOREpsvKt%2FA1g3bteMGRgVNMMTQejPvb2T8kLKnOov5omMOz3SyYrTOSmSID3YXY%2FjWAZLWMqymq1qeX%2BDagdkqgGabWSbiceUZhORtxEMRuH5zpXcmUgdUExzXcIcxPyBk%2FRABivBuJWOUaA%2B5IGPPH4CXSJfVp8jVgGzUYr3NPe6MfCL%2BBXnm0WcnVGmmZNjc4k2fPQZO%2BpDlh6cmXfPN40jAQugjri0MDhlpPTCXiG7P6BrNXH%2FDFrDtvbv4n94A4phVBOEaLwntFTXBkS4%2FbAQyJ0fL%2F5idOUR92kicm5nc3xzmtJHDJw9F6FxjR5jiHHfcqC7NawK%2BTRqdjRPQspXhm1r%2FYTFLDJ%2BU6P7TPD8NDkgYJnIs15FSdvSjXhiOqNQw5zJN6%2FkMAXoYhH7AkpOffPw72cGNt40%2BvWYXYRQwqom4xAY6pgGpCdCqYMYg%2FIvDrlDOaJVNtnZH82FVa8eYZlIpq5cPtrl6WvSbYw6h8BwYNRojmkY4N6pu0ELJMi%2B5pdCq4dsgpCRncrX2NOmDgo2mR0Q4vz5aBSakA7DEprgP81RzQYaGVjNDIkX4pI9cg5GgZZCCiHiU08iTVWCHLz2eEopqZtWPTGXNiVLnQrAWsv5N4G%2F35m4duheyR%2BKtXpZu5OYeEGNf6%2FZs&X-Amz-Signature=ab747eea66e4166fe55890747ce7389683d86b30216e7c40341e7c722275b602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=a69e4491a543ccbdb9e869282076d685f60b9f3e1266153d0053b45a7993900e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDPRWG27%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNfyB8bhoimiU6grN%2F%2FOjIy9OZhKarmdW1OTEFfEtI7QIgON6Nz0jPiwxhzJCWTH4QRX1oGVJS75gXkDSJxeb1cZ4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOslM9EsTZUchpVnFyrcAx0oGqvS%2Fn8W3kZOHzTb%2BasOtnM06iMxHs56bWUfpnd4Miv0wsZ2zIhIZEiGnJ0m9pvP565k8ZJ%2FN3UBQdWXnidTpAScntmZghLMw%2FmhnzMuLDhaXr22%2B8gnJjsbu4yN0zsueO%2FmnUTSamWQUcep9%2BmMlTLAkYR%2BHLFljmv3qKZzhb%2FqH7LnUszMZUh1sfuHqiqERCj2swIgHhEJlZKAY%2Bg3GMIt0svBbePhpFqMPABABPKoHuGkiHAM%2B6ufBFxKO9gRPehpvGCot%2Fc3zlII1Y8%2FzKjPhWUJqTGDGW3CtQGKjtqp68d5X65NwhfpQY6%2FZgFPE1MULTtXi%2B30IJ86Vh%2F0CskMkLe48ZxGcCzGA%2FTYOVx2xYaubxYLbeO%2BgO72a%2FTmbRGCr743%2B%2Ft%2BNkuLTjYHo9lU2aRPfRBYIBEjoe%2F5Xzola1xStdxvhXjdBvgcD%2FCit3I8ZleRYlUn%2Ft3zkjpYSRQ2heYRHa2sDeR4BITm5dElI7Vg2miUHET9fRaxRl5Me%2BoukESqlIaGq%2BfmJojKyiABweLCOGoYQ7Us3hFwe13HVAivM4cIdTPuujpZYqTjFg%2BgyKBEMaQ7T1sQ3SDJJfUk%2FRGBIWrR1MT%2FwP%2BFYGVVeJ7Gscm1QjbDML6QuMQGOqUBW2VbOI16tb4rSega5151c%2ByeqTVGr%2B9skoYzSvRedUKR8z5RZh6pLhkt1nh6IYN9ALVuI0EdyqSmlhLHh6lCoPtu%2FZmTKICF%2BB8UEoSAPbDzOUrIRzCj6D1bmHdFxRfG2gDgsoUoVtEUuryD33EeYRGYzUNdN7Pw7ej%2FgqGsmOE96hOFeYEPFq4xn%2FFsSZfHb2ykwQaPzRsi5GiYX65y6jrxNq5X&X-Amz-Signature=29c8e8cde022f5bc2e0519dad7553b36bb3da7661fa645cd607ec08e978be2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=5bd7cd2789385d8d2a840989746cc1591eaadbcec682a269877453054ac14916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCWFLLC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHka0rBE%2B8wmNfgE2I5haGlJyWWOjo0rvzBE3xF4L7gTAiEAidnpHx7HT5GlHG0WPd%2F9AJf3l%2BLc3E%2BjXI%2FXdAl4gpMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKK0yfudtcn1TaXncircA7oIw3Kqv4GfpmfZ%2B0rhhV48LQhRPoIQt3BZyJuP0mUmIiYpm7ruIq9J6BSRJZiwImHuPkQpATgPh4GslGsyKqu%2BQWr9QwlstNYFZrFoeP%2BXBFmlJcqYox%2BBR9uSrWeYnycbGbYYLJm3dlqMt9HcbZyFZY17P04iwsZ6HxCQgA3sv52xLxJc7qHNTlrnCmWn56HsZigLVISbZaVbg0ZzCO0a9xCqg85kRYuTR361TASKGp1FT8joJWNtfXCN4qRakJwVI0flupa4X06GIQzA8eESfEfuwxBNWi2P5%2B7wj9WLRqsTVel8SvnuRYvjsRYZ8WhP1MW6Wo2SIHCJGhaneEnGzFizh1qKWGqQ%2BYFENNMTuzOU8tH4wqFuhz%2B6bAGEco7H%2FJ0UNp1pWaTABImWJ4s62Ld4tq3ByFrX82RDnJD5LO3ncx6qTXSIeuTBI%2FpZEU0g0jKu2%2F%2FvRxvC%2B5X%2BgCFHVryx3ETFIOYP%2FIyiPqiKPhTUz5lj0DJ6NcroJSZ12PVUw96Axv5ezY13FVy9Q0CvqfpeAW09BkQbFd0KI1LDd1v6il5SKvtKpXrLsfjv6xlWyUYquXAsBjxJmcICVUAiFtNBIVbQqAcjsm3znwGFar%2FXeQnwSdI%2FsHGuMM2OuMQGOqUBk0Fkcky5PZafLR%2BGKEBgQPfd6SW6y1jT6%2B4%2B9W5b9P%2B3x5iz77nV9UKyAUe%2Bq%2FCQ4tc%2Bs6RjqI%2BUv%2FnFWnPrTcDbUhxX70lFW7QpmV4xxnY8Z0V0rrhrHmvqjDdS5AMkmHdCC5O7YNIfeeVcFeK2haz%2F9ea7C8%2Bwjgoc0j7l709h5Ov377jPIr%2Fy3nMK3ZEU%2B0ioEHMQz%2F7Uq78V6Nq4Ni8bl28U&X-Amz-Signature=3eeb48adcb4dc070354bdea6b908d0d8c705a4bd7d1f7ec399e40f2a78f79eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Q5U5IK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXFoDzGs%2FipybRyhTXHR8T8GnndAgI4wKRCaHXjUL0FAiEA2OQfNU3FQbFXW%2B2pl93DCMyYGrgVzFmcjc%2FowPoggZoq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDL7l44L3yGqVlF0zircA%2Fqg5BZgL1lTrisTTMg5HMvrfVTLFKZVQqdmGYvF88b%2F5AcaEji8YIedk36C5tm70ihrYj%2BZolGQOcaK%2Bq7UXcQZBv2SItx2f4HO%2BIdpkU4MCk1XbcOJgCctk90x8xaoGhg6zprgmoZM%2FDtWsRPprlQ4sue0m8RMCJ6WoqcD%2FLXwhBR7atQp%2Byc3IsWXrDdkN9D1VSA1l3Q5RV%2FHLr%2FEgvB25jmDrG2zgJAiFZhKd%2FgZcNYohlghtcjzosk372T09qvcP8BdWNMlfnA4ZrYEXLsrtXtUv4i%2Bf6TpZ4Kyl7IJskh74Bd8JyolGxPT1%2B92yun%2BeWV11rpguBwO%2FikD9On4z%2FfrjKvxXMJhjGAB92ril%2FN6qD6ahZcr08ddhwQRZXl4qWV4UYak8l4o8meJ9Z8Su9kljuAGkOcw2pdl645LrmhZZNZ31wjZjvu7T5zwev9qTrrIfcdve24FOjWlf4mCYs%2B1fIsHy1poy3aKb8TScDfBYNV0IjOjehDQsm6m56puL9gcPhsFOXG8Kv1NP4JsA17aFOfpW8%2FlDk3MdsKQaIw4pq3mpF8TDFbM5d5Drb%2FzdvGVEIR3cnxwga3dMMrGPAuLsERpspvq6w%2Fjd6zwdO9KUjKjdpkodXlkMO%2FruMQGOqUBcimvOFjhHQh9vl6kjQcfu3iOGHIVZlu1l4%2F8hlgOr2sU5n4V4xQZdPIbOQIPynQ8doF%2BYG%2BRE%2FXGP3bqhMppXCPj%2BvLdK5cG9MNe5rvXIL7pR0x1eQ3NGKsZXPhOK5E0ffBxyWSS0RTRE5v3ATKS1b5WxRJkh9kvVUU47Y3t6WB8G6m30vzeqJ9ylqD8OGX86rj8M8FY7icbFLKCxa8YPU9wc%2FXq&X-Amz-Signature=c6cb569afd3765a91e5b3426ac3a7484b92270aa2633a8b8d3059aad1914c533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZQIJEZ6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FHpkDbSWwtkXBAA0a1sJIuLjmftPdfERhDw533OZCNAiBuGpvHe2cyi9NW1IHcA6wraBhhVJlPgzif0HJEcID1BSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMDVl1fKJle%2BO2GXGmKtwDuh0FeY3LWpG6nT%2FxM%2B%2BAAchCFydCTk6TsHWM82VpTdFCDDhVv1a6tdve6jBwcl9AE0MncGGxgM1Eife4IUd0SYe5Vos%2FL%2BniUyBbfRtQm4a7Bb01VBbXFbn5oLV%2BLPNTZNqRiralFhN7GX8KxOP74VnFM5T%2BP5N1l7lCZhUYlJu5tiyx989%2BvmXMrCZlutPazX8xQ9Wf8IPMnzC3ZYFOcz0aUkWO48uy8aEwqoR2o20SX%2F2W%2FWJmQ5QpUMb%2BTLTMccbqjhWupB4KE4uyTUlkKxE4Gt8vcWbQ6VyL0X2UIVmsBCc0Ipvgs1DJbB1vkqXNfXEJT7HN8NB6Ug3b%2B4%2BeilrN6lAUe4auoM%2BgJ2bUkbS4L6FpOslhVQWODq2PDgsLPxGBCbTHmnamQ414Hppy4HR6TbczGiZpnGnaEoU%2Bz7%2F6OwZNZ3bkPzFHJifpp1C4NXjr6dqo7toTLWhAQWC06cGr%2B68H1Q%2BU4CBNg8EiFpehPT4qMXAhjyb%2BCMSJKYtX%2BeIzLYKjVe9GFeiSSF%2FkfbpkNyaTbV%2F0%2Bp7IDd%2BYU54x6bZF7aZJIx1SKqde63cBSdE54lXMmIAMohvvT16DTBYlcB0X27IMYHHvFFEoaLl%2Fkug47i%2FE9WJUp9Ewq5K4xAY6pgEcF2TLmFbVmue8Exyn%2FmdcOQNHMLQmoF78zS5oMjRj95vmZp2icS2Xg%2BFmmc75rIIDW6mr%2B2Ju2Bc9W4EhhB2GSWWp8xpN9OgSsWB3fWJhwKvFiqkaxHJ5h16uXqPMnwtfxBrfPGmY%2FcmxrAKWbVZ09xGJBc8YN98IpGzh%2B8nAAgko4G9fZo57J5j522PrtNbz%2Fr6Hhe71CnIVcEG1ZaYwl4CIBY4B&X-Amz-Signature=b51db0bf2a4dab79fc5ac7095ae9aefb94994ba939ff4e080502333dbe9294d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVZCFD6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUfEd4xAKToGXsikC2q8D0ZX77volG%2F4VJvOTBj3F9JAiEAzXaV49z98zLqhjTXIWzzVKY8sx8EHKRSDY7UZ2Tgj3cq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBll5ka85CyO2YKImSrcA6GY8BqXBQc7fv9OCGTee5lWPCFrv4F7drrUkcGgzG3mY4GuncXawK1p%2By99AmUjn6iYcRgzEG4%2FhIqpts499hwlII6iokpCy%2Fh405s9HB9jS9NG0BzQO%2BZMfC0kieSFT668nlwUgpTyIJHwoTou72ZWJr7KPPQUMFF5jAdFU%2Fp89xoVWIRuwkHvv732oaHP%2B3YSUZC%2BI744pdC9Rr%2FhbQH3qimERqOMU6TNNc%2F3TCGjLFe8AjMEwcktUR4QM6suaSewg9qhbVopFb%2FNy1S518MWWyjETY5O5emRxNa5KX2jbDmV9Zsa%2BhrClV%2FM4QfO4fbaFouT9YP4nxZDD6Nj%2Fb4iCegn%2BW801IKyQO%2B76F8debl%2FUfcOhxlLye1dzQOxu2ajUBO9rScyJFQe7x6JqoptyiEnjAL6vgqqnzW2fEjE0jiAEvrnFv03y5RcDOKh0mQqnajHDfQThTZ3Ti7ZuIYj6%2Bqhj9rcAnH1E%2BHYV5sOlp9cTk4XbIPFzHtuBF9Na9CxIUPxJjXeRRdc5hpqQKgzuXrdquqr0mc8RJH%2FepDh0qU8IYt9OcpwTHl8%2F26w1juGcgsBwuHsUAjMwBIQu%2FPSrfkJJzfh8gOuKZ66mGO4md%2BjYk2kMiv69IPKMLSWuMQGOqUB5fW38kdR7fAjDXPPmDFHVyXXlvfy%2FcEI4o9aCtBGQssFiPhl1038J7Ang4sXpWfMG6AOynpgAhj1dodAUpcusrWf802H%2B3rOf99P9P6v6zEb%2BEpqizfW0h3dUt92fFzl2QFVzuuBgeyinLQeV9rF6H8fnBI1SZhq849wPNTpVz90iT7Vg9ikeYVxpjtxZbbsJTO%2F9ldNgAMwVDhqCF70o9YlOdp7&X-Amz-Signature=36c94143f9737455ab73254bc71f600792e82b547cabda8ce6fe1592088f64c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5LUCXJH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCegQiQa3C426KJ3WBNNkDvAZcClmUl4Q0J32ILLBEdmgIgD7axkf0NbIS9zvQTbxhNr8KVQi4dL63fCV7sTIFqb70q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMjKIpsajG1h0OvWxCrcA5qpbtSMyyCfMIOaeBxdtOyD3qjBQvXSywu7Cm%2FXFPVrWWAEuIyY6z9e8MXO5q2Sy%2BThoS727lH%2FCqY%2BIiacUKxBLffsajyViwTed%2F5y9y43sitNNAysZFBTIwSHgORektNMS1qlxto1KQttSigbqcTnG0CFso7sAF21s%2BMqYqWCmgHQZX817cIAOgFhmtxRnBaaU4ZK0Mwi3PK%2BQPoaVoNWjI1JfTsIK1V9i%2BaTfkR4cl8LlZIXgPRhuP0XuNFdax%2FpDVokUB1s%2Fv9G2c11Oc7wyGq0WEw2qu5zxNOX83grTe4JOVPM892yMkvExmPUr0AmOxdBrRKfigCJyLV6f0JvDdHwysbDriTSKO7TvKYfnY3wDNND15HQDuMnelnGkT3hEHH09qEmx5v7psFN0NsJUsR%2Bwk71Uzug8xscL5H%2B7oJEHMaA7KgAzdD9EY3D32c5YE28cdKZ2zXhHBgg%2Btm8MmCJeChB0yHk3RMkcBtvhQ0I5ZvrwdfTnoO3CuIA%2BPryrDTkkfTyCykA605odNDU88bMeXAZgzbWD80371LGSZxyxcuVe5uRO%2BEC8fggOvAkkdjnR6LXLO2iP2AATaMJtXSJPBJPkHT6fD1aCJSNf5ey7gUZjjD5IXuGMOWTuMQGOqUBM%2Bk3HalVwPSAEgNs7nsPw9SlkktawdfAHJtv7ADEzUF%2B5Nt5%2BlFXRYC81%2BsVtjGSvfi0SNh2hG6ySdSUyLVgZ5izQbdo%2FlcZwfXmq7TYSs%2BVd6mMg0HLW%2BGuIiKtzUGsSTE4NHyWjwDzgl3Yz7uv5OWj75wley%2BZ7EEhGkkUdiyrwQVhXy0Qq6aPtKveXgJrKVUt5zoIAuavISXUcEPucTE3X2cs&X-Amz-Signature=bd462aa288a2af4d594b83ad23df142c5bb1c534d846a5fb38d83bee3d5b4296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=f954dd566aed4894ae90e90fe1efc1096c36492da23e1768eee03dccbb092bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJADXHB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVrENWe%2B3V8m22mPr8oTit36DETMrYT%2FH9nwVxKP0jzwIgQZeC%2FEZNHjQB76kI4R3cCtICfJLSl4w%2B3uEr46axlC0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDB7CMhMeUlEsmp5UWSrcA%2F99laSSfTRbXzvaVp1J5nxAv%2BKUOn023QbFfpwDF%2BxoZwdrjhsqWT3xtScKvtHoipu7stdWGqL9r8b1Ns5fY9vLwcaMgNuy188HsuBatdB1wC19r4ks3ZCEqob4XMjg2CyXs2kEy7u3LuWUNh9y4aO5w%2FVwr%2FMlKXrkt0SaaDYsBSBm9tQLTaFt42LtktlPWPSNBB3agKGm3AeB4gzK7BwKyFlZuWxhPyNyi9AH2e%2BLyXMOPmBcOcjPZ2e7pnhNjwX%2FPUkIaozDfZ1LQrFaHEqCT4SM5WFsmbUnE4c6M5z0is7%2Fje3Vk52BKKwjyU%2BV9zFvqsuP%2FI2rllnb4EkNAuUZI%2BoFP8dCto31DI7yNcfPlx7tpjb84EzPIAZp%2FyuCb%2Bp%2B7kN4M8JMQNXmpaP6qFouDqT90kVQ9xqae3iTXkXX%2F78R6cNkWM3ps86Do0hEfMC5CI6pbiDnOcf2%2B2Ek0CBsn963QLZf2W7S1jD1VVtsPwkcl1sXAleHd%2F7gYozJVAudiJ95sZh17c3JnsGnBGKNsmMTV05sjySAv8cn71yujLAZDru3C%2FrWNTI%2FuidU8zLSziA5%2BMxQF01X8lCPyIQw61yWJfjwlB6dIeX0Q1rHvtm5Z4xk8djFgrRZMNWOuMQGOqUBzNt7umzb530rEdPEchsoiLcpgkbtCEQpv9emR4mY0BF9yO6cXAE7a3qe4m3f5UNnmDNQ9snN%2FOxeBtsuK7hzB%2BTKpxH0NFIIHAmO9bM6a2Dktyrmna9hhSmVk%2BQ%2FO2nqd3KZjeWg9DH%2BtOTxiEF04%2FYKylyHL%2FYqIOOuMc7gis5%2BMHcRrTCo6iiGeWTpH91ysKvgBSLrj%2FzVHth34IaphgsuAsOB&X-Amz-Signature=17c65db7bdc6a9de6abf44d4db29e379ec7aa2dd636e7b2d9ac6ee7b2cef125f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=77a5e390038b4e0c6b9754b20c2a08ae0eaabd686440a6f55d73b43ddc629444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=0a651474540691e23f6c8962347b0d783a70fada710a1e88ba180d19ee522489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=71f6a82089ab64a6dc71fa896120c471d526ea29b1820292ebd5777fcaddc11d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=c03d040246420e37b0890301afd671a256416a352c038b31819a3ca7f6b7042a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=0743b7145f0bae5e3e5d654488855f6d9fefc47191b3338871baa6e2eee95196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=7be12c2c9da43708021febf729f8260a35e1fcfce3960ee1479ec30e9bdf8ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=795138afebc462697644293156d87d1681dd6a436984160d41c204e0873f7303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=20fee03b7609540f5784138ca22a1109d5354c878ff08dd7ec5fad3f4399d493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=d35690b4a64b10da3da5d4162d39831e44e805e4706827d2884daadd69209cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5Q35S2F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5MU1iyN1P11QrViVqrKs0a6tqgbiNIkVzAKT3bHB4vAiEA01IKbxZcCkKU6zdiOchAS3g0uprDHbEaOJZ9oF8IZz0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKc%2Fg53%2BneU9kYdpJSrcA4WwAfsdfZk0g%2BiG1lqItZ8w3VPl5GCTrj%2B5XIzZ3QYXiORvWNwYUxQEPesTzB9L%2BybohMOQ1plKRQLVt24wcTRENPNrG98uWKEwjU3ugqenw1J9jt8KDFdEdfeLOe3pG68ZfhjrHawtPd%2F2XiDor1U7vHd23hzAWoZ7dWOf6Hj2S3BdFHblvvUE8KT6%2FSbXBw4Du20dOgMtyIImrSaAD3IgJYjxv767LmA0imo7C%2BB4ARhoZg0pYY54ncr8WJNsRrUxS4FhdLYOh%2B0F%2FBdaxMdmzGfNgI2gj06nU9oDFs%2BJGwuNyi2YkphSlcFVfL4rWK7ZmfyELtgcQ7tqXp0kB0aTEw6j9kEvZJFDh7tO%2BoEpKHea9K5TPVmxQdlKUxOrEEUcFsxdoCVYWLVBUZ9Zf8MCl8U9OVTeBApTGeokvZs1no%2BdCS4l%2Fh80qArcNitD27qPgwLerxqAAXLi6oTonysc32rfkCFnDev8iCQM3K5yLHsEPXGl%2FY6Fje4xpDBSRdtJFbqAz0DPuU6PIXbPZPqR3mbRYGSdNScy5NMGDvo13NAwGrlKlani0JETLArHsR%2BKZtN4rJwQUYEXmBDnJBwZ0g0sUOHHQRISHm3TCKREW6mJJA7ZlPqf4X%2BqMJOLuMQGOqUBtPl7t%2BuwkMgMe4t7w6SG7nKCFinrwDg3B2ep%2B9v1CGFY9o8RxdPxA6wniaTTFhykMQesAcohqKsaqjmiHnSGHJPydGQfTroJYDRrEWoMfMwAhUs97Vc9J39gpk356LpODEbWNLJ3y1wWl1XvE79fqzoN6OgIaGb2G%2B10xGLaYrjX5Wofro0xR3DqwCySkxgDrpjT8w%2Bp48J%2BEkUWp4lxrRlEayUD&X-Amz-Signature=b149643a39b98ebe1e162d6c67cd54c130458d6f02b860a1ecf84bd4b1f36fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
