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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=464f6323ea7ef4cd750e031ddb07aab6e9fd5976febfc603e3a62d4e17520340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=e909c13f938737b1e799f06b723111fb2384d79d9a8b864c16d69a3d1a12c364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=e009fc9c3467c03b8973dcd4e4a6ad36c1ee75006390e20967250a78696aae08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=60d901af89e33c4bb5862eb4f0e9dca0c80b3c0ef978e0dbc80dd0568bc389ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=761efce621efab8975adf078a09be3522f1c6ba4fb96d4add8d1369170f38772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=900e70974f8ca63a184df72490afeb4c5310f0e3a2c8f75c2253ee5c38bbf410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=c478aa2007567fd67d1046e369f30053d21a79027c963d2c601563d04e5c08cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=314a649ada8d979749f03b43c5e35f786a0dce10081a2644f3788d3e760a338a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=1900a2a5a446b0d6dbe2b5442a08ceb00c4953003ffb945a64c2d6ec60fa764c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=fc74837fa4cfc847e6e15e26bb99e6981bda6c075589b0568f8bda103c0a17fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYZG2G6F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT%2FMuBZzVv0DpgsyydiV4oTXj4HiHie2ae3oYANLt9LAiBk6hVfWvr0mnExCTa0FTGzwKE6yl2girwS%2B2l%2F69ARMSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAAbGxWGO2gPU3nQHKtwDiXzBkLgxTWDhm7Masx1idfPWuoU2Ir9DGxlWTalbG8NTxKszDdDKgAIQrf3lhdFcGXZCZunzbp1EzJkQqAqi1K6nRFilzc9b1UduQ3tsKqnJdUAQ%2Basq7Ct0hwKLm60J7f2rMrBba0pc4ODHD02N0ODrX6SHbiWhzqD1m6iFnvDHPgCGzWRLngdrTvAM2G3zpvE8SfUnNKLR1OSqjAlS9PQrwlzUNZl1jtDKfVNuqKXk5E0npo6b2KTK5u4CZwZWYyZG3aRDkgCCqS03wLPDM7lJMOHIApaT0JE%2FdTlisf4T45zJk%2Bhu6ePuCJP7zObnIjACMtQSiGrkqPopy9%2B5DNs0KCb05%2Fczzm5gjnYATw6CDM7BFtVSNr7c7uVNQ1yYAVaZT6O6vb7VzoovO6HioMDRlPT4%2FkKLV69bZUJhlI19exqZVLAa3U6eN4c244Umz4aLlqg6dh1jOZqx1fG%2Fox5otantSYKSlaPSSLaifrXMVH4NqH7q2WrwO3D1J9mprVV%2ByxuTAHBQCF2kncuBGuS%2FuiEp5UGV9b%2B6%2FU2N7sjIdcXQ3JVG3I3fIDHsM9IqUAyse4%2FV2vIRZalmvxlgyvDfGZ4OUwPnsmDoRAcfX%2FhinB2Ka%2BXzpkvfW5Qw5L%2FixAY6pgHWvcOo6I0o3SR33WrVF1DWaeNzPn2qCr56cF%2BKjSkw6945rbuoAJiBa59p9CQYOtkkQEFsOX8iHiGk%2BjyivLC3wOhE3t4%2F36qZu7KEfkW1du%2BH1CO6XSMgvd09RnjeuC7qdgTEpAjpCvTQ5PyI%2Fngldn%2Fy9t8Bwn3ykN1wF5sXPRENQ01VwRjYl9VIC%2BKGeinqUtXyD0xsjKwYkRw9onS2Al73Bq%2BF&X-Amz-Signature=fc75b496927682b25f8133d9eecdffa6fcfe7c352d393f56bfff23eb1de9d97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKL73HL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsPeFciIrilh6pgn9GFPYdHpNBnXLFUW6rKNDtL4lpCAiEA%2BEA6o4jl%2BMwjsafPD%2BUONtPKzCHF1pARhjMWg1CFSlwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7lXvTcgu0pLV6h%2FircA7ordFHs2CJn8ConRRTC465jp88Df6jDLS9bfNDHn7AgJQBuQt0S6hCgNAEdQVfv6mZy4awmOvZEBTp%2BO70PG%2FEzu0VqhEQ%2BLY6XmkSEMhNpAWXpMpV2qv57uQu6FQkYgolW9jAhBNvMgdYnov9sWAF5LBb%2FLTh%2F9xDdpomen5A%2BJxoYfOaUcAGNbCVW5vFWabw7NJ%2B%2FSAh8wfeA7wc2sdPvXX5XTXwxwaVzTUO4jB7jbOr0NjeoNjCTeLOm1p1Ni3yF%2BFm%2BKBTLWn2iDYPed5U76TIOp%2FUBMVkACcCilxNmcGNU2M9FQf5YvZg24U2zjSBeLbQx%2BSNv45gDR5r5mgHfFwabIpJlzlEi%2BLdD401Gcsrb7Bma6EboMjcV1GgW9C88NrzDJCrjI0xDEj9NiNn4%2Bbi6DjLq7xLkrxRz5jJAM5PEFIe%2B5feCEEmmrs9O5B0iMmZJtY7%2F9C7F71t4jcqveiurPC0ZzSTV8CAgDkYVRE4TiCyOSx4swgsgTgxVIq6MzTfvE%2F2SKFHO%2BngpanWa7ImyGofg1olr78M3FggpmpBo0mS1PFUvRy591QMuOq8BhjxEqTUGjn9Xf%2FHcRJIQIHgNHJG0ggH5j46YE34AKdANELw72DHX%2FuBTMJu%2F4sQGOqUBwC3i0sMcSZkILqQgLyCgl%2BmJmWWy4eYveksPO3APK90d5Rs69YjUBr5f467f8WE4%2F38SFoqOywg6%2Br1BUgwOfyyLcQo4rI%2BrZ9XngAeG%2Bmvr5Rx%2B5imtYMTRwHmAd7zhxALrohe97%2BCRzfNYnUGJhH1TlF%2BAKdjc3lhDjMKtCbzB%2BvimjrFO0APk4ATSsSBGG%2FKisw8lRmPdWJ3eFuUFZVRHDsYU&X-Amz-Signature=d16ecaae45bb4ff285eac1f1d5e382934103e83e07ae8b99c5ada508e9f2c003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUWHTV7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxv4VE%2BPb9cM2Zv4TQ4HyIownexvPzAhWrof5Ytr8jnAiEAye4utpLsc9kUOrTOnri0%2FOlVnGe1%2BKtFCb2kJi%2FeCWcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4n%2Bni1vx5%2FVOBmjyrcA77o5t5wuROahbu%2BmfZgsQxJWDQiRfIZ7QnA8myKoaS7wSoOwrQFFLsHzDW1R0g5%2FDLGDDB7dzvGwXTaCnHPYNWyGup9AJxG4mA5R%2F1mtDjPMuJXlVK5D7iyXVt0Ph9KMwG527%2B4m%2F%2BmGMBqAmUMkgq0AMiHU8f4MfPd8rXNUxwz5c%2FNeTv31PwmISaPC9AEWBwElst8bTcDJA1W4W2BXlmG2R18qVGmtoVT3hAEFh9JioRbZPu3aa8Toh%2F8oxT5djSNrZy6pD%2BT1cFXGn3AHABi9gGmFj%2BVCMvlz4q7X%2BsGBosrF84awUeLMaN20paLlaHdGeB8WkA8l6Zy3fzMDcj0LOhb0xyXgfNn78IFvjQsrJIOrPlKJdSNUrOsNddaeqgVrlcEx3FKpjNJb4PIG%2FzPoGS6UdEedZgps3KpWRiDSmeo7XVjjcHU7nFV2aQ4Q36EWBhP7647aZeO6EC%2F8zEwYXWvgrBE%2BITkVFpHXPD8UOrXwu5pZE8g93XU1N3YyXPU7eb6TehEZL5UGgzjBgtSJHgPm7aazDacWoMaJFH0o39LsNk5ej3xbss65tB0PE2kwHEvmaylo8TlhZZqxSoRaR4fASkd62G9b2aZlGAu%2F7witZYvdtBb9QzaMI%2B%2F4sQGOqUB69deGmeXOJuRaaqyHmxnIAih%2FFisLmApWCmHTZqwnHZ9PE70wO7tLNRv2RdahRV%2B%2BOXId2aQCzOWnfl9CzWpylAPFdAcSjtlVGeR6Ds%2BJHJPE6O5BZZQ5P%2BwRrwT6A69uUI9bthDwmESp9ZTHKcJvnO87gV%2FJ8jB5k8UpiajuhhUveqJ3RA%2BxUicO5dDHsH2vDX%2FSapaErQdLoaVKBF%2BFYFcYvqn&X-Amz-Signature=348843d9d1d3f5661824a810d5f3b66521f6c5665e2a122c7f85936e7d536d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=4d39c151151f5acaaef129087871054ab513c4c43d34345f2441d976dc1bd128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QSUD7L2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL2yMuyh4RPnN7UqPf7wOHSnMk8lEz%2FQBn78YJ1QjT4AiEAyuKbZbenjdcoEoGosU59ju6LKJhO48ylNeFdj3w9%2BOAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNGwPT0WZi6bYBRuyrcA35skPoc6u5qv0LpMstCIqKbEql7991bZp6eF9X8%2FeYAqJgWeQZQDDv2z3xN9ThxrDtmZEqPUqJWv4eWo%2FU5O5%2BcNB3JfIXjCSEK6htkXnFf4zIMhkgeV5MXbII2ZFY0d1DVfwMHK1GHnJV3l%2FXeelW5aHv%2BgSurrrAT4XyofQLDQ53QzVss%2B%2BEkMlX6qX4rbbTkbF9G1uGI7kjAME1uck7enfnNX%2BxpldmVlwsJKra2h8YlvGW5Hti9OhIs3Hj4kArbzgSfMcqi%2FFbw7V5dnwTwaD6cekNbJgGD%2Fj0PKRz0YE%2BkgBEz2K7YDfWHgqkqjH9OtH0Y8a%2BhPMqV%2BXv97ehM2MeMECLcWf9GHNl9XixS97RZ8yF6%2BNWQ8UiiRqAOJCdmcL96v7qJAt0FVeedIdmG8zTSfUMYT%2FR7R1zKRpHtk6OLz9psOiZjO9kEoUTpB0%2F%2FpkAeWJkAP2qIcGZW8YVjWh22OP8kUkVeeLnU5H9p8KCgqNaf3O4YQwT187J9v%2Bki%2FiNEJMwbUWxVL3q5RShSBkXLo3%2FjLOG4hmFi6DMSgcQMhn2FwsS205ydnUzheiAglcxplbR40StQZLDUL3onuVDjeRnVJTPVHrk11uJoIpqLUIgLNZisCx9ZMNO%2F4sQGOqUBz3zkXkSU%2FSaJRRXoutWq7Vl6k0Dj22NibHKnYneAFCksIhVi79naMYShO6qmJ40VF3i57LRHKYkmTe4es4Hr7fv%2BOd4hxlYlJdG3d3LovGGuAW2LNVweqfw5iGQKNOV5Nin1X2ZrALx2eNE7KIaqRb5yxsov8oKiwXu0rIKmYKZDbI6f%2BoFuvdnApnalwoMQvYOJTuj5%2B1TVN5DiV0lmlXnVWzYK&X-Amz-Signature=4b6a76eb4c10aabc3b2dd0f825e55ae40879736a7ce94c4db099cf7762f3dd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=050e8a1f3135a9a4688470967413ef0dd58070fc829aca38b97f9fe97bec4cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N66EVK5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbcvEf4ypH3BNGSgtkiPHDpGwjAleByzWR8wPEuQLnkAiEA%2F0tYnaf%2B6eQsoOIKUwDDxMokpm6jbJfm1HV%2BuWd4lsYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAQ%2FE5NPugHJhGdTircA6tUJ4Gtx6xLMQk7Z3BaNhG3%2B3%2BfGWCWBpIlf5Vdyh%2Bht5x0g7w6VzeV64hL9LP20zeDNaMLkWgpfrsd%2BzVQW0k%2FwUdFlcCCfvAexdNYB65c%2BsB5sC70%2F%2BCU4TJeNAbw7AnmXnOBNo5McIYNS%2FVB3i1U1v%2BbkW20D6YaBo4ZpkrZRuz%2FSq5zLGrN2TfPwrhy3xKtR%2BhS12S70Q%2BZBNgTHutQV5mFJdG%2Fl10hrxHrPsqkB7gIwG2JDwiNmuQFNmpC0oFtz%2FzS8b0Vl%2Fd019jTcxv%2B7AA%2FaU7EfLtMYzw9afcw4yDMHDylbNok9H8rGfynl5YUpJRWTRwZnVItTLKeF0EXmumWDgArRdE4np%2BbpYavw%2BHP%2F%2FbLZEEZBQ6hysF46HUhY7ibkVPNq5IrTBRPriEzqO75clb1Qw9Xlrm9Pwel8jklfZj%2FiYV8KidpHqJUzCnGpKjM3HdvrV783nMpGiTo%2BmAJEDgGDdGlMV4ZURErkceDJpNiOLyN%2BXkpqBy0%2FJstIsyJPhtB%2FlNvK92yEmdo8b1tR6VQCscuU%2FtmL%2FdfKQONfQO40oCq5OA5jxrX%2Fm1bAeV4%2B6PhTjPyASany7gxrXxf%2F0S4USxveht2H5NnYK2%2FjqoeClnZDVq7MKG%2F4sQGOqUBd2RDp2scUr99rP%2F33MsD7zP5BJV2PB7iSGMKTjB55890nQxLPDM8Q0dPSRAlw0gun3sEsLUxnj%2FRXgYiZTFrWgfma1PvRvEQYVztvsES7Nxz2o8wkejD9HwKJTvUnzyw9mkqPKYHSrhIFWJab2oVtpk3u4cPtdqUNFymg8FLNwROwzNlmDJUt1OQQtyenOP6Fq4N8cWRcMarHovLvIf%2FHexBP3fO&X-Amz-Signature=f3608f87c11569c01b51b4532b3097ff21e97a2411646c11a0b06ca5bc8f4490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=00edfd22855c515909c7e41ebd1730ad80eccfa4ce613fb47ebe568c5f3bdd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK5UTD4M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2MpoI7Aa7yz6lbmYKSQaZswE2f0Ism%2FaWTeZtDEL%2ByQIhAK0f%2BkdxQhHCa7bHc5cd3E0jdy3zVwyKhbmPBtQYqwYbKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylgNzuKZdaxxM0Ob4q3ANsYx6j3GoxLwj%2FxBddH%2F6ENhQqsWFUQDtoItOMMLwmJn12oouua8X4vElCgXCaWO4S%2FJQEtW%2FSsVwKW75ZLHZ%2F05%2Btbrsk%2F9lTI3fFiXdLJcZ9a4eVKfXX%2FHyaFv4h68lQAcv%2Fz03TaBtoh1Vn%2FgsNdypvBxQT4wpchiLbayJvJQ6hkdvqVxG%2FbUVSD4juami9Ewaw1SBNJw07Kvq4ob7GGQz8IeALdCpBa%2FbHBaiSkoW%2FaEZEz9LL2bt7JLJ7iERcVSOoDGdR5iIGiFwkZprUqxoemkHgaRZWVV7lSVnRHwS9rrsN1lzhDXTBXSQ3MD03%2BejdJonhxK1mkt6cDAiR3Ojdp2tLoPxX5MJca0loFVTik6cXC8j1dbnqpYzpIj3rzsf81nwynGaMQxKNBuA25BZEY7fyYTXNLWsklKMgMSIiYaHrMVtBwiGCmG44MblTV5j4yaJvUDuk3kve1PXn7QQmBfDD%2FcaLNt4HgQkPTkkMxTmxovW38ZytcVVPL9emjDQEQTBvzrhJJ2vrmESros1wyNdwYz%2BvcD2r7GDUi1V7jqR04vqHuTJVjS0C6q60cNizsNx7HEcUH%2B5yrEAwZ%2FsYjE4wg3Xr6TdbEgu80BF1pH%2B%2Bs%2BYZF5FUDzCjv%2BLEBjqkASm4JqBBj8ggEQZ78YH59%2BPv4npBIw8xAYyJfr%2BtNsW%2FDvoXQVivmcDS1cMnT%2BP3Ex8FbqHPTbfnO4MKlHYOYJWRP3BA1tUimAef%2BhrwOpw0e559NLskwL7Ypq9LBhiYu6%2BtibRpNEI9s%2FipnGGiM8%2FugSyjRMzQqk5M7SzcHL8ZCESHfyiWlxUN9j01JZso8Y%2FVotRUa9kcmTpRE%2FVtlKgMKYxR&X-Amz-Signature=cee39d4b57834980c6b5d1eb11be15773c31b45a233c71b7344aad243692413c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=a74ecc3e5704dac9ef7af5f94e4754696fb8104df17a4a178df11809e79530a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCCJ4MA4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi7xQtq85T1MqT3BjA8ENCU7IZwi9a5vdTb4HwkSOhzAIgcGIUQLtS8BDrE84a29%2Fhg9kxFda4drQ39sAb1ladfS4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj34q84FBJpMHAmQSrcAx7Zr%2FhMpI4dFkKboeJK%2F7%2BGx2auEPNhdwbJIGqGXG%2Bgu3NX8g1EmejxL0ZU2oiZQtREjA%2BV7uf%2BC4cZjFtkZt%2Bz%2BVuPwKbNUpSEMv%2Fg%2Ble1NhJXbsxS3xCD0RqVlw2TKKc3jagaBym%2BOZoOjF1dx86xGG87ld9TQz2gHis5IynZVhDQsHlJ21DIGt5f%2BXGTUEs1ru%2F4baHZ7xHPaXtcxp6jXyo1R6XmOMMi9sqjpLRJOAhexDKTGF6BmG%2F5mQOISOys3fv0mzzxe09WrCIx3BZnTlmSGDN0R8VkAioxNTwXzT7SSjdVpAX9l2Tz%2FaigXcZ4lrSeJDeGCUUUh9W%2F3KrQV9lrAn1MO56kH%2F6xigep0bCIHwicudie99cg%2BPB%2FvQWigtIlms9SlHTNw9LwdhklZTo%2FMJiwwh1AsUdDd69t5YfMS0wkCncnR1aFNWK%2Br9phnhMHNSzXRs6T28dcWneRen9Fc03S2E4gt2DlUG1Wbzhdu3Vv5LoIkGkDJ6XzugLZL7b8Jx2wByy%2F3q2NjOD%2Fk0DlFfJiT1IjSFM5hd0nMgGR78IRdaRvTXUXZz2t%2Bb7T0bYSxBfHpB6B4Y%2FyZCH4ZjVPjpsRKUaBl%2F37iVQ8RBom9Gl423qWPLXoMIG%2F4sQGOqUBrX8nkee9ra%2BVV2xaouCA%2BBZmYlbM3rwWfnr0ZHUnIPpIgyhcV4r%2Fp4VQE7%2FEsSN3Gt8oZFKFTKPE6x3bNKSDbmABw1ONIjZiEJbeVNjuhrypO7nGs%2BM0TMTtelZPv4YgYLMadDpCVLRp6WQX4DGKzVYCbcVoLNDJqClGJ2vQSSMK4k%2Fs5A9v6yi7Y2XmPg1N%2FJTe3Hq7r2CuVr8t8HGqSUY1%2Fjg2&X-Amz-Signature=06c2c26818458e58c0954b194e7faf5a11962c729064d939601be5b35d79cee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAH2TT3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoOSJ0c%2BnbXR5BG5BzE%2B4NDdvX9RThQs%2FowNwPZaasEAIhAOxQ8hvtldvjipEVa%2B%2BTNz9zvPdDNm9xVsCQBn2gjG7BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLPx7fsZ4xLotB4toq3AP47F18C4rq9IzH4KwpwaBJk0AignY1LVQHcO1o%2BO8EZtfl0nxEUo4mk8oB1pH%2Bh96HgBAYqam6AyCD04BJUF6oAOH5iJtnCqmfE6rL6rvyyHjL9VgiCuDpgj3CMkhGkXHQy8VBgUUv9XVu1EIqnlQbjM95WA403u6QujeQj8XVeqwSpaCcVza%2B2bwxJ2bBx2d5xJwMxP3t6s72%2FsgbBWBCgw%2F9d5Sb4fX8geg26au06E%2Bxg2xuQBzlspbpvn%2FCpRnvHbMlvskeJlHfGalqZj6Nr6DXES3keTx0YNUSLp1NM%2BhMepMPR63Ki9%2FKbH%2FveIvKRm0ISDI9GNODp5dXA3ZGuq4WYUXEGE8U4ijy9ZoG9GQJqG5iolIqn0aB6EX5xS9Es5IIDf8VolzdBO33f7%2ByOhZRtFhVaQg5XghCxHXA%2BOpRJLTBBYUwrYVAUfzp8%2BUc9dBImuSE3SAmFxrSD85365O23LEJM1iGcJnknI%2FP81R8HHum%2FrBGOuQiaE8ClXAw00J4%2FcAj7DZuKV0gR9MRF2b1JndZtk1DGHUNelBVH%2Bud6sqcWcI%2FiG%2B8fIEj9PDmsRrVFsiIfPkpui2VHG1mnFyoMKnack0Eim0z%2FkcvzBo69vEEqOszb5e4xjCPv%2BLEBjqkAb%2B%2BTnr1R50lFSBWkymyKonY92DbAqesZkurr%2FDPTfXWalCIWACP6qZCtrbhy5foDVEqqfF%2F3Ez78S75L9sVSbTIoMRu%2FlRimBpQ%2BL3JKFcWUITtbrIuusc1nzDKSapwqxkgMc9XegURkILnGyUpykyyFRLAmN1vJDqQ5ZzkkoAi3YTJFVCYCBtx3VSlraLJJnWOufzm0UWauYgrHQCT%2BQ9ibmGy&X-Amz-Signature=366cc1f13fefb0fc12ecc597476f9db1546b87c7e6d9fc2144a91938e5d870c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XUDP4P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsyte3qWWRHdRFF1iCvcQ7eDYn1ZVImrgzq6ctCzG%2B7AiEAiWhiB0Q3uEtoTvpW0zZGyn4Kf%2F694bunkDOPvK0vjvsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETLJBSyY3paszNeXSrcA0uKAgnRmLTNrdcvp9TPI%2BKEQ%2B80%2F0kA7MrBlfuDMZTKX1Ac3ia04MnEiARKTZA8tvV29TfilmTlqAQEs0HbLYfxDjvEhQzg2Qwh6kcQff3hPmfPaPLNFJ0%2FxtkE3a92LQmYoMDLc7aD62x2UW4dOJ1ODqAFg5wQRRAV%2FReznNb7Xl1e5oJZ6hOalx5UWtLQ3n9xCv1TEqlz%2Flk%2BF%2BFHudSJOnzG8cmgLOCEFPSBgZakSJi1x1%2BFdOnt73HTYN8NhYV%2B5sG8%2Fkk9CIi0Pcv5CpZH4SDLxPGNukyCz0ciE2g3W%2BOCSh7gRz8P%2B2YEFe760jDIZ96sQbQPOzD8YPOQ5B0cWU1Gvr46MOMGJKFGsoukDBtW6cATNfgTKPldILWmxHA67onFD%2B26zNzLcLLzGTbrXMnexIiNnsvXsq9O3avrjiDSxrRBNhrckD7o%2Bfn545fUAAUOB%2BozKn7tH26p39D9a5iLauwg0p1YKApkDaZBUAgCKH%2B6MphKh4vB%2FMaj4qCUwK2f%2FmhgbhV6Lz3%2BFd%2FAq7qZmHaGYkZK%2FFAIJj%2BLD%2B0qKXrDFlFy6fwT%2FcG4lXUuIoAtSqrgQHbLr%2FcTUOOK99wST%2Fg7M%2F7idRvfHNstZWl4%2FZgMJ9ARr0WOMMW%2F4sQGOqUBugJ7tY9ltwfbXEBp0SrMqidx4%2FwgSs%2F0lexJWttCaan%2FkBGOm4vcdG3NAJOxal6F7%2BwgbSsHGo92UqRBOy86bo0LR%2FJO6Tt9wXuZGQyK9DN7MlH9iRJt8K49xbUCsWeZqUI4h%2BZTQQ%2FMphqGI14SfRcOPslvcCaC8RPCc3xf5Uh52SHgJslSQvHH8zZCCsSSdDg6pmQUHBm44bVdvdzmhPo2RBLr&X-Amz-Signature=d3af66da798aa7d2c154cfbd0196d1ebdba2c7a0c97b89cc28f8a5eb08e6e6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMP3DIA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaL%2FqaBlJUCaCJ6y38178AqH9a8g%2BH6F2V9rOpBdGNwwIgA8KmWoL8dc98tDDWVw7%2BPEPkDd8lCjB2TdaWEwPS09cqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFcbiJ056hquuopHSrcAyeW7W011BjrUx93dn3GwrhPauUioD8XJIT3dxXqlYjNvT%2FAdhybhzpLOuITTknweV9O1PiPEJmaFi6%2BG3z%2BJUhBppc5PKFRzvug%2Bypr7yVz7iTDlsYmuB2bAiSIAxTPxEHeV6cVT0sRJPXS8SUFt1UcUgovK0DJnZ9KGhro6aDMuY1ci3Nr%2Fiue7yIF%2Biw16nTsvwENNi3OQBHzsS30ji0mNir4xJYxAZYqJyYi8akosSjgJNBkCuGD7VqmT6UnpZxFk5jW%2FIghSFfEc3geWNd4aQ7NjceNG8QuoTCgKm%2BMIMd%2F7NbsGIRMMX8pcJnSsvjYVgpLkG0NePii%2BdlJLNHtWveaHeKyexOgyYhe0JGOJsXHDS3ctKeI6XqXATs7PgCYPaG7Z0K4nomoO1QIfGWzWxO8sdmB%2FYsEmM6Kw9LgwnPbxJvgpA0diUKNnvLRWuQge%2Fwjss0jPqldr9vZocGYeojYLHSKQ0GPoUqv%2BN1Zd0TDoFahrdl6AXRDezEBj6Ms1VDRRvZ9NXnYSvMSX%2FfsE71x2u9Jc%2Bi2p8HUEkxBEHhhcdimpw0PznMY%2FGE24N3vg7h8Q5iZe521bHBfOwb7g38KmCDDIEUq6I4qP2Hp%2Fm%2FuHblPKGaCNzngMI2%2F4sQGOqUBTSVSvyCbhkDkwFyGtjCyFoAn4lmGIUAHpCvmCiBsiy26XsfYyi%2B%2Fxkdg6yZC%2FLTXXUCgTvv%2FGkHUMh7VCuJcss9jTRP6EJSW0m6KCPR2vQbMpsF0vlps6glP5Iv13bpgqXnePnKN2LlbrIOK4dP2Jzua5JzUngwcp9tCaE6HwaVnVrvlAitR1YI39S0qgiUXnWAVUS7xcBV23jCFOboq9T7xIuRb&X-Amz-Signature=88b9f22a6a06c02fc82f2c664bd609cdb6d7e3dbf703f041fea8d26d4f4e29ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN57TCFS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaAJAS%2F1sBpmgevbLQPcgYqLDiii0PpdVtQ2yVXxIRaAiAtW2IJC3dfhjnCCSyDr65VOP%2BY59cYohhAfopqW3zLfiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zghURrRLufnuWHQKtwD%2FT8ti7UfBcBYBZdzU2Hil1EO2Bpaw%2FjjIlgZqRTOB0%2BWm%2F2Ib8efwZx2qOecMYQ452dpVoR0usOGFJ%2BbnnmZXJzujPDFIE5YFOTfbd1J%2FvORbh1A5JuXyYJEuBAxxLUOyqv9Z1EmoeDYaRUYfqPu%2Ff%2BPeaZbVou250MwiRRtm3pae0HbedIeg27H6%2B5IJ%2B1sSKNYoqon5dV%2B5CJUqyKufp3mwlCYx3sJ76NaH102EOf8nPQMpfpOracHgSjMW0F%2BN2xc5OYI0l3e79FHgQ6UR8TYfDgRObGLSqahe9Ak1z88WvxBZHHMN1XBPqEeNcAVOddBf5Z9obXbd6tc%2FmhEjLOXZSCIhqx%2Bs1u3eDdrPz52st5m04nGaLqHkgf1SFH9KrRjnNnFshB%2BMLst7cvg9RzKcrDajULVy65yn3atSw6CncUuUChotYFwTlbLH26%2FG2qXitbVLzcGgp8MdZri3G8IYO5HS7xgefoA3ozX6OSqp4ETN5EYxnFWmIPgF8JvDicujiJQPqdbQ%2BJySNDG2VAUKFjIsZNEGxgsXI6nBt%2BXGoaVzvXZD2nReo7C9%2B4c8WPtbe9PHDRSTCo9FXjpZGbuDlpz4IHsfapMbwHwbRVjY8LC60gxk8ecAegwr7%2FixAY6pgFUlpJ98%2Ba11TpSaKcRXz%2FJkdDA5ft4pMLboEg0jg6nAUOoC9cVn667MiRSM2WAZIuIxFn0jAmmw5CyCthUN5dcdYsTu3M6E8J7jd%2BAc34PP5szg1CG1fY60T%2BVySQg76gDkTEHtAy3RekRFpcqr4aE2ZpR%2B%2BtW1fF4pUQT%2Bw5lgSOfpHSp38iR67LOWb%2B0Xq7Q4lLv04%2F1V%2BBFDAwlQzMKfOqWvFog&X-Amz-Signature=ce71fd436e71b378e86da5bc08b9c4f34d263425c741da61b3935741b2edd5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=0cceb6dbf2f9203c62bfe7bbbb37ac6269cccd4f1c78506aefe0919a8c9825d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4GT67Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFeUiu3utqbR7lAtHMV%2FTBD%2BLQEygSdDug7jJ9I6uwlAiEAgoN6%2BU2oOBF3nacOV%2BT%2FLykqF3YgbhmVuPiip%2F1R0OkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN61XGG9rZi3KlNVZCrcA693bFrlJ2fKQM0qS8O4dtxKPz3I4m3E7eXD7%2F8SQ1Fmhf1v7H1xJarjVeM3hhJQNVELIjAIIG%2FS8nFlDUgM3RrQw8WVarfx3BKYugXqWGK%2B1mBY9D5b%2FiAsjTFxXxRCWtMYBrUu475TRPYFth1zCXGG6Cuuxq%2BhhfciY6a2u8J7qQqVdYVM5bBPKEyYU72efb4VHey4jUDpM5m%2FftK9MYcbXCch4JCSzA1%2BdX41MZTSnxOxwDtLePH%2B%2FrKwHjbhethAONh3t%2BpG0wDISE9F02ovBicC6FLj%2FWHcCP3zT31SJkxpBAm23ltcqXK9nZzq92L8fydxDUfo00yY9tsvc5FmTtjAzlfDPi4woflTG%2FPMa0%2B20d2BI4rcFSm0Asvdtwor%2BieQbI%2Bfyogrk5T13Bhqyjms%2F%2BfFUSavDmMBimK96JdPkg2tL9e6OirxjX9bo4JtvmmHENfxBr3utT5sPd7t%2FjpwFVZUn2SpXGHW6fUDT7IAfw%2FQwM8J%2FQ5pCNW93F50TFerawxddydh8WY3giIiP4k9p0m%2BHMbed%2B%2BI3kraIV9f4eSFJOx0MRLIFqfNMR%2F3L0UkpXZNiv4zfRPNtUmkZ5F3HXcm%2FP6By3TkcAimLDK982nPtu2ljwy2MKa%2F4sQGOqUB0kOaHAXsleJRRzqWWAH6tkUcAW4hUfCU%2BJmN%2BSgX7q1mXXEnA3rB12o8s%2FCUgBkMUspq4HucMYj9C6HJ1qzpL3jBRWPpnvJRrd%2FaEd2%2F9RiP9D63DCv42o6XdUzuXHQ1K5ELKF4gT%2F9OKI3Lszf84Mf2fXlTio2iiCx878kDp98qfp9NmNxj1BeBh%2FMUQjBvDvlKWXwX3pf8DROHlcTHUBBn0phd&X-Amz-Signature=b6bef68c8135056b032f05c598bf373493c542ace2337cafaeb7fc60558bad4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=f17b7be8dcbe2661067ee1a8035a2641b280d214d503c2b1916e1ca92c6d1054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=2ad15a2428031d0f3b097fc4484cd4d0a807f8f3f14f1cd3a6d64b0d79f594b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=a04b80042ecce5456c08f9d78e13cce02f66edde8456fe84c5c207467787e363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=24aa65c80c0661d0df41206150210a5265a150705795b571e0909891116bebff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=1506f2d0ec8806a78a44352bc01b48e0316bad071710b62ac0d6ba17ae9f925b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=88678523222c70092b337fc8ef95f877cb705f7e0432e86bf2a2215e3cc82c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=a04b80042ecce5456c08f9d78e13cce02f66edde8456fe84c5c207467787e363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=d63cd7ecb4a09486e5271f8588327ee3df451afec9f414415a5a9993daad478b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=695ce0a7458613f19e71865ae9430c2024ee4762708d4b8adc38fa2cf746a1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THXZGKP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KIPTQXBAUtckWJuziS1rc2RMAOeozjm%2BGzNKtOYQXAIgJyX%2FHyfwmSJx63HzkAqbBMW1sWSMcTzAN%2BzsXEhPC44qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK0RhazvfbNJk2f2SrcAxUyRjdB7syArqI5ZyoN%2FUteFKGHQuRoMlkLBW107m7nopLTDoAL1H3pLkHmSf4aw4wL%2F45uLz7Djxd%2FsnN4xLLqNZQMZUXkW0sG1n3Rnvb1oILqdqTWAno8IK1X3a8a8CTzRXIOPcYlGYIRHkHBOjA8HoSfFxTujarU0MjyeBaDBKXr6qzloQEjFdKZYpZVkJcDHB7pCQqpnjo%2Bk8IrPfXaMIYD5%2FRFuqHA84jAHeMPq2WGqaJEIozhd6VPVzEXcU4Jv6wTBxweTeyWfMrzouPz%2BpA0fLogBvy5fvOUpKV7pSITgC7t2RrZbH3yhTlnt4BOAtuSRe3lenbDWd7gCPE9BPlkroi1o6y0Nu2QjxzhzfjgTnYsSFOAvg%2Fr5CBd07xNMAgedOpD2AGU3imU5pYrlVroONo5mGlx1mI28EL8SlP9yuXtpa%2FJgwiMWSu%2FyJr%2Fm%2B4XI8tlBR1zOp2WQHpuzZgXqd4zatp0ZjYQRdJy4QgZGKUEg1rb7kf9BE247MtIS8c5UDWqi%2BsxHglfgWiXvx3am2NLaS6xysR5TxFfrOLN2ldz5yo7LUZ2WLdy5Dr6o9%2BpBxUIRAkK2P2j9RSxKRZS7ts1v4TQl5ZRM6Nsh9wgInWE4PlDFjEqMMe%2F4sQGOqUBLVm9FOeQTRGJhuhwlSBAlQ8MrebGCYJAlIkLENYYBjH6xHS1Y1UB%2FeW2SsbNPk9UFdFq7REaCAmbtWPocwXdLIokaLyiID1DvZ5KG7qiLetxLpa0xlO3FWesnzE5q1E1hZZs2D9FMxQfOtUnHo4c1m50fJ0alkGP6Bi7sFR7%2FCScBd4AltdYdi8pbtqXonMrq6NoK1FPTcVgVeryEJCdB8QL6wEs&X-Amz-Signature=c95238781d05613a6ec03e744214c7a51a3055ce3463203fe9c21651def4b335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
