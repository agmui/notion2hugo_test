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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=5fd6274645d6eafc41b4c44ef4348eca18accec0d464c0b828bf36a8cd15c72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=acf5f9e8244fb2e8c4c57f53859f2f47370f4ccc3f77a7bf6d0e71b560920f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=e58122251353f639bbb8b000b4c08c2285d8ad5cbb32cb853bf39d1cd4705f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=cd3f342fc11d3011daf5d142d7f64bb4540662eba02226008cac1258e373e88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=d7cbd8e2a989f625ce63f74c4ef0f645088e6c50ca0e3147d3ecf629471f29b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=d291159b5e24a934c25dce3355032a7d3221ec4e65ce93084e9a319ed0ce939c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=5b5a56132be17076edfc33591e51101e0574d80d633aa4d746c2fcfc0a5f3084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=987f00db35c5bfb8f1c92e864a1698dc619203d4e5e888cf3d25a6ff84f5cb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=7ed3b241ecba05c8b33b2353ed30c1b46671bd1c72ee89e644088de49a096e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=4a99e4e2867aadcc46cbe7909591ab820cf06a1f48b71078aba67445d8166f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNFGXX7Q%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0YDZeF8jb3vRtlSS8lwSLtB%2FuxGwK87KVXKp%2FjcbQUAiEAy%2FwjpKse810jtyC70w3UGtbs%2BZZ9gwIUsNYOxL7yQMQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDG8VQ%2F%2BZpfmZV%2FZnAircAw3q9kIgKSdaol09OQXaih4QVF1gNT8OTL1FCRj9iYu4wSaI0mbbgJurJYliq10iPvlpgh4gHHSrLk13gfW9%2FNNdbZfkV54MG0MIVT%2FzwjOJWfFy72HNhzEtbV9PJiJx7aUMdXSdoeAVRaoQqLPwhoUfF9wfwCS%2FxuMyAKy2taZL%2BlAYFtZKhIcrXUAULGSRsOoUnZxnwFOFh0Glode9EGpEA0H0PtmRFQBJ1Bh9uEEO4ETb3PYXtkWP2e3xX2v3fLOxAXEcKO4wpmX0O1FIjKSc%2BEytLpJ05HAmU5wm45FF03Z6O%2Fd5FN8pzTH4MVqYBg6uhz5%2FrCtOtwieB9vIYgS%2BDYmXVWRwXr%2F4cCizplFb8WYosMLGL0e7Ey7n520nXWUt2Tes5GX7KByUWpIh4hlV52C9qpwQTOI1RmT%2BfKIIfDQmn5WdyRTWXf9QoJOLz9m48LZAYa%2FrizC4oMR4Qj9MP2N52kQaftE4%2B3Rby4nOobMPaByzSKjE3P5pMpoNJOWm3zYCF0Z%2BCpgb6UsfpHdkH3dm9ySmOgNTfF7XpXMaH6GMMPDKDKsyADy%2BRgz9wu0I5eMjjnSvNYu5Ge9wwHAGhEk9LhEhHJCYD%2FS1CfSUjs6bmmmuWKPL3XTIMO2zztAGOqUBawoYv7q%2Fz7Hk7%2BOnh5%2BV35SgLUsb%2BfwbatBL%2FKmiUSNOuuFLg%2B%2FsXxxmLs%2FUu9lnykdjWHFCsjx%2FjjftOnAsyUmhAlZIobHWocbnLujG3MAp16hQuIPbE5rcla7zeXy4MNMDCpS4sIkrwQVQtMN%2FT38qn1gt7IRqIFl9KixK1rM5ostIStPIlU24JYrAc6JNaKfJ7TjbXrpqqxg1gVv8zzEH59Dd&X-Amz-Signature=00289a3bce06658a083c5bb3c5d567968a74840a84edb1ea9f7d2f724bcb6d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGLO2NZ%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCq%2FMCD5oftOn6AkvP%2Bf1yXQB3oIPEL70b4ibdP8%2BbggIgWMMeIiF5YfDFHxmrB%2B2T1b5ts63WjMjYjuLLSSTrKOgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2F3nEDdq2WuSC9xyircAzWDULZkmvNDY8JBeYzZfR%2BWLZM4RKoHXK6PYT0I3e%2FcfQErHPp9JBbG0BVfpiD8N2e9bod7D5VyCcAAosiFb00%2BfmzQv1hpH8yibI41JPoq6T8MM%2BBEtB6f3DbXP0jAQ1STCSUPmHMgMONMFJP4MrKNNwrbify7Oh33SFuH%2F9947kyWjIBBYd8VfURkEhLbIYGWtnL%2FBFhE%2FTpMaBWmvvVr%2BVo2oqqTxtsiJEoMQn5W1oAJ2wO%2FNnHD7HfxemgfwXWMK5xGNHGBGp58XC9CzSwjaAvBQbtK9rE5syTm9bXdiGnEgTdRcSMJuyma0UEZADQd%2FohMYPDOJKW2uCw47xyThsnWXE984HUb9wbo%2F9SH1nHnMBVe%2FnlXQEn9JyBT6QiZf%2BM23EyeSHFBrws9gQzZsuBHTstRdw7qFLrsXISo4%2FK%2BPaYiRvxbt7jGzEQvubHt2jr4S9DK5XiJz7YlHj4lEqvneILn3mnFOulNbAYYQ%2Fiyo4O%2FC1VHM0kzRA3s77AAk1Kv1Ea1moLjxnzcq4gNCw%2BuJ3SmJbaUyxVQQIQIh41vubaeo72nJIfYM3h3SGDSkkTDKRniyeyGp7M8YTbTvvlShWwvMk9aCYM%2FRtG25BGLwBKpj%2BvL9O1gMPqyztAGOqUBKs23t%2BHULTCu%2B%2FrU5wTn90p7MAENVADGeHPj%2F6iT%2FS%2FyO%2FtAL5Dw64LJsbVzw3LO1kQdOKy2qF1UJ9Bzma1SvddF6XHvonxAewV13GN6HRLD7ATfxR9yfAgOfmjW8ecR%2F6veToVsHiPGxjSwsbNrG51py7BckRnWNdARHOPhEr9oEkwwoN15kwb2LdgA65hyAtHNSm6nRRc45t9KMpppRBGmeCHv&X-Amz-Signature=bc6d210bb549766208bdf7809f62cc370d0e9a90e09a04dec50d521f55c189c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6UNQU4%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtuZpxq2XCLyLthimeqgxS2zMGVrX%2FN4XxNt2u2wwpuAIhAP0wUK02p8Pfsov8n%2BdakoUudHScGSsCXsw%2FkcK3iDYrKv8DCFoQABoMNjM3NDIzMTgzODA1IgxRwKfrZ26qL%2FNh9D4q3AN0DNJGHrZwPcU1Nvl4hByvnFCuOWZJAVZE2pzqXhu5R03Okp7IRyfEGbcYNnzEBuyES72yoy5lL6SBASaZK0%2FAiRGOEw%2FNBbWyS982nvGosZkjhbAeDz2JIFosFBjDNKSv35bo6a6ar8KY7LKGz0e2LB6SMON9hb6%2FkxWt7OTE8Ab5a0oF%2BTxG%2B4k28RXe917FG19h%2BTJdR9cPMxrXhJ0AqGrVQzVlA9Tj5CBnFBVBWDwYMnCMNEKnw5QJjy2u8g2TPtEocX1%2FTUofAm%2FeETs3WwFyACvweOAKKYBzygXFhdmePyVAJCC42eWw34C80dwQFhKRb%2BcV1cNSeQogGfFiU0sUQx1JqweS6FegEBtwJPximXKNIxZTke2TO6s7jw5RmeQitvv6CrLPIGof55RzhkENVgss3vsDDx2bLa%2FpNuXIsYXm2KCQXfbFKXn062KXByeYv1tejtAdOoUQCYFJ4mduJMMGBDFhwvETC0bUPYyWtREOdcUcaIvXung9HjMBFKMvVy2lp3LOq8zrXir%2BfJIQpmg3lM%2FLbzsqIwQLHu9t4g23oXaCy710H6TaJVwkN6Ebjc%2F7uUj9GuayllrLpm%2FmlgFM%2Ff4mm%2FOFDWHNiRDZ7nxGBDTNVLGa6DCotc7QBjqkARHV9pWX6l3a%2Fp%2Bub2MRtb%2BBGkIh0Yy8SM5ruRJuKu%2FHWRJbI8ZZETkZOa%2BsXJvfhGDyHMFHI%2BqeKw5lpsy3X1pXOZP4V9yDdzG3Y7XLXlDI7b8tnG8nmC5k7mNruRiE%2BEkDV%2Bwc2PPaVEIpRLsBlsVYxzXDdFIwdjgPk50V8tA2CfQvTeNdsfGaWljspMlUYARijM7OwETn0SLEocxg6cxrMlgx&X-Amz-Signature=23e93372da28936a498edf293b7976085ca989d828d06269d442d30e119029dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=3f79fdf198f747887962d1113e0aa27e0b331dccc3a4f9d11336e05db4da5986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZHO5PH%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl3%2F2E4zt4phXnDPOUKZysnwK3gsxXfoisp7M2ewsHVAiEAioGxSjPl4relpfas%2FKJgj27uHHsDivGD25Og%2BDzvdBgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNMv%2F%2FdTnHdH0z5EQCrcA036n6o%2B1RFecKOo0h0HfqNLLiHuKgzbazOJpOz7J3Y%2BAZY9ikrdUcyAyu1tqUG41BGo%2B3CAXu22JK8Jb8oGC%2ByeBd9HnVbo5CiYDIoG%2FaRic12NmEjAdKELDOZz16U01Qo9jBN5aYLOd1yxw20Dx5wIo6L3OoQiari7cHp%2BSBk3k0hhQAq3yC%2F74C9zVEOmnc4x4Ldw5IJGsjGr%2Bmyu%2Bq0ZmdhzXy%2FiNU%2FlSSJSRbXqLHKM%2BILxpGqSIT%2BFQc6OR22RhbKgxUJNr%2BjvB78P8GIFQp1CiO7KAIVamKnk0eniXdFa9gN1AHZNw7w6902SOWuodq45qQ2t0LcPS9LuY6ysLF0vXeId3xUGxvQmN76c8hesK%2BuRZJe5Kj%2FVsDEXSzXcVSW%2Fpa%2BASnuDFVrEt27D2vkSfJc6l50HUN5hqp7LccjoNKuaq6UeLB8UrfspBJ3Ua011ECk0PN7OLmw9vmoRWGLLxFOIsAPjS5wzKKXRfEJKWrZVc7VRWRPKmCC5AKJtYg5bJrzuG1WNrhMaymPttPozEGfPz8gNQWa6YUfiRnDnMDN3y0G1UIGzcRgeu6Ff67qFpi76u6eXXW6XcoOC7Q4hLQCxQGhDn%2FQwXXsRWR68zj0%2FbBIRirUGMPmzztAGOqUBOFRaBSg4OWvNeCxkBIw93iZGv%2FU8%2FdlFAM9k1Jnv2BUDEhh9Y9r9NOqthrOx4HSyfHaOKaPnQYgpTW7a%2BQrN0Hr2kUWe9jqD3p%2FgRwWaONfk6eGYgveLJVZ7KfS9n%2FkBF7wtNotYzbngRZrNe6OUxlpaFx%2B8FCx56SATr8wSCCUGRZ9Bh6iS9f%2BMrWnD5glFU%2FdMCSScKE9XDRC9nXmc2RKazevQ&X-Amz-Signature=fbe51f110ce5001b28c2366306527a1bebcd94a5a81c8c142e0af96d5ac73896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=5d449de54a0093a9d032e565781247cd173b5700df5de67c441fd7f42a7be164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJ4LWLW%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4EfHSUbnudQbcXjPlFYcHRGOUUD2MonUE%2BuK9AqziAIgaaqwrCdeYPq2Jq1oxPq5nlHN8jSWzYFuU7d1z2L95vQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFYLu8z38rvMnWy%2BYCrcA2xODovFghRcXp0KiEib94ZG0rasO%2BPEv90qArg5kweaWFh1sLR4OIC0C7pAm9PhVe1c6g4eq34%2BugpwHtKOQNqNZ7qX403br4LZMnL4X3BqREKbEZ7o7xL%2F%2B1r27UwMkaAde1TpjFSr88gH3%2B3g%2FEjczzeTM3GdOkIaOQI3Nibjsi7%2Fyh0mzsluwWbCKktyj%2BAdKt9lH967xkpuMJooV5AAPY4129Jb9eo%2FZNHvlY5pCGTQsclVX%2BRizOsdht5oblXW8WIQgRMTLXBkXQwl%2Fu18TLL%2FC5KslQkc3Q3psBUgMJlQj6Db5uX9UiYD3AwkcbvXt1tJdy%2BXVW087z30qXDjLiS94QUoRemX6vWg%2FMgLz6PciYTmVl4qIKtkIK6A5QR3lFSUgTDdxdEFUfSUwmce064Qa9JQX5sjyU3ik9QvMr4XS%2FZ0g9P%2FrsBW6K%2FvV%2FKy1BZWpmL%2BAH0kKilsoQdcMRv5QF0s%2FsYnr5m0PRrWNtT090jkbEC9V7r0Tiouv9fMODoBhJo3Pbbau3UEMVgvfQ97q7YxE52BjlBIEGiWhNxHu7baMJCVHzhq8iTPpqDlcLWgXeqP7JQYpELEpreg6Mr8eYREpi1Udlabnc8T36h7ZU8pNrnkMkOZMKm1ztAGOqUBO7XKv%2Bi9vRV2yUnlJlvBjqaLNMGZ9xUCsHTZwGKwKeiZLjoJo8x8sQlFhk2zdyeMOrQXAYg0Yv5BBwqfSq8foOB%2BG6aaJXSBjN3q6%2Fr%2F4Z33a6l9Ieqf%2BkfrOP0hrKomQQuqq2gC0foahJJ%2By%2BL3opGOEUcDlcnBA1jTOqFXh5mB%2By83wz8tppk4mKPFbmES108UkQLGrawr7Ej%2Bwqr%2FnYZ4vXk5&X-Amz-Signature=6109287391d7425ce0c7043fafb4326b89b5ceccb8a91d9b64f71562cfd4f9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=7bf0be228b44ca1a37559eed1f73ccbaff8692a7e9dc38f98bd1eea4bbe9aaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ISDWR3O%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXMJhQy291Cq%2B9Gu%2B08q9HHm%2B0%2FROmwHKk%2BIV4lxEnxAiADW5X2olcukP9UweCkipJuykmghrjbJqAtH%2BuC%2Ftzvfyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMEsFazyhr4UF7SdJXKtwDCr2tQ%2B7%2BxuQ1dFzrN2RTqwSCA5ZbRwsKMKY8nt0E0DYBJg4KFxkzH0d1X6FtdeJspr1Tp2pnGw%2BV7Dguz2CLyX3GnqCLz6yCmnwHXmMyJ4nVAbEUXkL1mQlB8UosZoM%2BKy0AuYql%2FQlK%2FrHE%2BEEAVS15hMjTSeC2c2P6WuEIbVWlYL0hSay7xWs6xFrJul9eCl5DV%2BNjPGCk0FOkPU8I5Cq7jqzoMLBdYIL2NnqmcXFmgkte0EAP7UpY45l%2FkUAA32P7uHWHX9T4G2aYHJzrBHVgPTcd6DRY9oKH%2BRNKZxIKq5itZBr7sugu1xU%2FyFgxNAyhX7k3GtEyRqys8XB9sNVMoAXa5yR3W6oF1J%2B1V%2FPahE%2Bk0MMFgNtGZJLzKoe%2B3qJy4gnIwHeXpRX0pd%2Br%2FnLNv1rin68OzvnlHC8uHFe86KxOhLt8s6rgYbJ4lLJ6MKzJ96c7WAwIL7fgdMoTBMk4wzBkpciWcaQG29jcFVB7DvOi2g%2FAt6GGt65WzKGsmMay5Kf%2Bz0%2Fb2pYgYaqMZaYxnIGdQm078pbGjnaMMR1kqWRUgNx%2FDJ1vsjsM6vK6oLSa%2B0Ryh0cs6wGTL5lmyZNLFDHbcfDdpTgM%2B%2Fc6tTnZTh2fYrOx1V8SHIEwp7PO0AY6pgG7WK5mMb2fzL9ql5W2rAUYUby%2BrFR3bN51xoBqBbvzjk9wqVyzBLRE2%2BPXN5JQ7AAPvyCdyvi4Je%2F%2FyAD1CBu5kXarrRBpYCg%2F2sssltzg2jRJjMRRAAj8RIOnKfJdbkUH%2Fe0GOu4rzQeYdJXeUiMAz3iQmtm7RH%2BS6JKxtsyiVJ51K15od6kSvUanMpNzm3gboRZf597J1zI5zG7mDRAmaWU69TKK&X-Amz-Signature=bd2bc7f9bab1fda14edcf812e5af532e734ec66b31d25bc5cfc05e9f99cc5b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=405fd3ef8601552bdc6b86073744d9e3e61ea78a655b83f325dbd54557e62f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJBYFL5H%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ%2BSpfxy8CYneMZcjIoiqQMJM8kjIPCOwn%2BIIQvAijBAiBwmdGWldoMeT98SJUIdXCoY3xYw8JuCQFcLWwiGP2cdSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM5l%2FIQAVbdslOmRb3KtwDK5H5kLNzvDEUfRk6N4KrhjE%2F6JAdtprsM5Z2Cd99l7cWG58Yn7WFLVCbkZBES0cFcvBmWTKeKRBpjUfdWIl%2FC17Irb%2BqmgntcZLbCrAlhOw6GEkJxX%2F63eOu048hw9ny9Uz05ETwEjMc6Qwt6hdrU8oiRFrqeYGKCIEtmLq9FQdhXIIwmtgRjFtpySLwaAbGUjlgQI00VQaQceA32Vot1l%2BYk8%2F40x2dTyT4VxV2WvszS0mkil7gJe7IsvONL%2FRzmvWFJpw9Ka6rHpx%2BI7d%2BsrBsBqJ9SVYQN0d%2Br1O8BUmA6YVXJLxqDGKvxdVKchZHNWd2R8RQhYpTEHWtpB8Apv7574vfbv6M4AAtN5mYZ%2FEUuUMiexHnAzH6AKLkJ5a%2BDLtEix79fIh4k6tPzdNsEGyVd6tGJLhRZBgaZcZ4QfhDGOhzKdTTq4%2FPqQmZU%2BQ36eGteI6KK%2BlP%2FaQAdIZ8xq1NH3DmW15VPO2gtOzdJtpl%2BokhDYi5cNpxu5Q9FgqxC0ddPKPmhYrLbqdPiQxacwv3N5Zzu9mflrpxFBnNwET0EeK13z362qOatGu58GhMMQFE0A%2FTV8g0JXkQ4mdZ2mVol7kDW2a3LnfVkg3q6yBwLv2X5acvBuLUa14w%2BbTO0AY6pgHZwEuCMEBA6MpY5ZNNp4uCKwEX3KjxDnIJUFYwphRHPt1gl7mU3UI%2Bt4vuq8yTorteoCQrEUyYN8R9KK%2FCso5eYU5161Cd0bcEeblOsSLYjWY2dM4qmkH8NOBBRRItqBsqBUexCmOdfeTgL91%2B3vLH6ScjMGEq4%2FgCginuyeCQvhg0C7z2FdQcVqGCpMUyo%2BfqCCUMENrOvQ5DmesQ0ANjHmW1X2v7&X-Amz-Signature=e95e0bec1eeda7b3f0542794e808896a84ef0ecef84910072cca82b38b3de1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=1e3548bfadf8a3fe4d10de3e13f0ac3a0ee921f41c53d2c346aeb1265378bbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJNZE5R%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGxdb1epb3SmiwokZNBV9v2vcy8%2B8RLmSrXYkTcMk3AAiBqnpIgfdNR3LipvgdwJAobcI%2BkL679rZ7vDU2NubYvbSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMpFyRA0WhJsuMD2oHKtwD8BAYfZYODA2xc1UpPH3wBM1FEXSeghcHO4qX%2FRAtI9wGA%2FtOANZqqC3YFzi%2BgvnNo7gHJIVO8gnGUWl7FW6Q9KeWPE2qBFoD2%2FqdpnOeseq3rz4tTHdWkjVKTu4%2F4sRtCqRaBK%2FODjLJqfrlKtbM4RY4JyjZHj75GPtyxDcjaMJSvbbW1gSZc61QgUK2VJxnQqm00zCx9r9z%2FZMOSUqYiiD6ex5t5Qt8T4IhYaJ6NcXmX787BmA5fh2FgH9H7k%2BR8ZXjHwd69tD4lEOxU61TSX2PK4NIAiapAju2CQ%2BC8wWBmtQ00SCKygSJ4Ih%2BxJ5piYeTF4eVylrJeExAE3x9m0SVi0Np5OmrbSDo7IQm07zmLhuIXPG2G21HfFN9DhBP4f%2ByxCE3vkWiAIFhPNZ6rttkcSnfAVyAmTry2mwCKYSrVBn6%2B64u4iZ3XJ0%2BAYSB3xLUMB%2Bpp5M3r2ayr4J7yBuAkmmvaNpju1nLMTlpQSPmNhCTHbzX7eYdxrBpeFoDPNvlzz06DDv3zr%2B4ZqqChxk%2BUyWU1BD31dwaiNK%2BiSaKiQHUCde49UIskXWYi10c%2BUD27uBp%2FrPFhFoFzV1G36ROi%2BTCMcsC2tZIfpBgZvm0Ygl6Q5KZ69JIijsw4rTO0AY6pgHLOdcIE6B4OHDNEYt53iH4aaAFqwhHBVnIiskI0YzdiDtxz7BlZxFG9pL07NE0EmDrDsUUeYAS%2BfHvqs9ubxUKYPnJ705kS4GD8RRtnfgb6vSq%2FIN%2FM%2F2Q3ZXOnCfcmUNU%2Bkp%2Bl9hlvWMsfgDcqZoCdULndWdZF1CJRnjHu62%2BHKTR3HVvrfxZxI3w2xjODD7XJJt2Te5O440TK0XbJUmiDqoHqEcO&X-Amz-Signature=80b0502e09b897cb750ccc16ca99b325f32c8e82e4903d0f67439aa7f93ab42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXTRZMN%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAhEZWhrhsbsOuJiIEnEVVAoh3Ar0Bt5rKJKnSmZBU6AIhAKf%2FpowogvRfv56l%2Fuar%2FRBFkgKo%2Bclv8zZxdQZPgnBSKv8DCFoQABoMNjM3NDIzMTgzODA1IgznyVFXM0mjjsKKBA4q3ANZFP8UybuAXJnjPqT1af44Y0IlMXLIPylMePWoetPwZ8rkxfzUWXPq81vYAAaqhvyB5yTPuYcAcbYmv8mxjjULdgFqI0Ggii2IJN%2BDAjvoEZhoNEEejAneL6hiSaxG09SJqrAqUfIZhdnnKoCPy9avRk1Ipj9J%2BpX9YmMogEtQ0N%2BUreI8Qn5t2tPxVoGv%2Fr0FytSHFe5bDncOx%2BkVKSU%2F%2BdQjQeybhC1FUiexAmLc1qj0uWAAZdzjx4Q80qmDNdHL4Z9l9Rs3ERV4Dicsog7gBf%2BEm0yaJT26q7llD3xLajeh%2BieTtagUGRu%2BtDMLuL0SjSxYId52QrAVKLePeLDbpr4FouAxy7yNI%2Fy9AmbxfqnrgvsRjQE0CN8wWkbv%2FMXYz5KPzUtgk08Z443is6YLQUfQ5t4v4%2B3ffrYuUqml81fkRwCCjbBvFyM7Xc0Q9cdOgSnw9L%2FPCc7eYcBskB1RHiFr5CzqeXbxWHNVzg6R68V3J4eVgym7tnSbdFTipvqI5jsvkoxys84maypA9ewe3Uc9GS80Yt%2Bmf5NCosvVd5O5CmDhkwH6FTKhrEcZOQPYcmjfGPFM0Zu%2FLpJjHlA%2Fz98yXi%2Fs3mIWCHeHxpcbgt4nYOLOPfHV5IpOozDas87QBjqkAScWokzOMs2kSi8pNIDjbWLs1tQ4FiP5jfiDpjOGxPou6Cb0KE%2BkxVPFu5KxKjcIAj0URXlxRGhybNGh0myyloNDNSFwAP61jNhi6tmxsWc6a0j%2BppnDwZcrTq5wvRcY36QG%2FhQu50Nf5uH4RRpb5I6SmhExSxV31cuuMKQA3rzBZca53OgtIIKCpRwf1cnbxJyyS2YxUuQHLxVBy8D74aVHOjdS&X-Amz-Signature=fe2c89f8ea1398a07db200eaac2579511acf3c37f8710af30911ec24578a194e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7CF7UA%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS8%2Fxh%2Fkrb%2FocUx5PaZyu22dQFkvIJDv%2FscR8AkD51HAiBAYAPsEhZjPj6S0Xh%2F09FKaW%2BvDX4B1fL6neyPzO%2BZDSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMiI3gd3e5XNNXFDKmKtwDcFZOWxXD0FQtqaR%2BDuPM%2B%2BiHbVoJc2nsqM8SXZX3t0EBBw1BuP%2B7%2FjfIyP6BCU5XNIKUQ6sI6j22sTC028chp5rghDlL56hHXyyRCmFcwSAuBcnyzlhNcz0Kx%2FFKvCizj2Gwuh5DBisuIjKGO38B8gDm054hLghC5XfdWctLuWm2klmq3oE68ZYNSg7Bvshp31Mn7eKfzuI44C%2BTnwiQzDYG5XGJV0w6UNbdAJDhlwW64t03rYIZZXKejyqiF4XmL2bz2DM22sJCQd7YNlylkiSTVA4yRe%2F6Ol1qw6Cn9oxqYkwhAGIiAY0EuBxspo7nO99rAoCflL8AaZZxa3%2BIt0E20c3ebrmhxhhR5iFcxxhUKER9vAfYqHoFTEhN%2BC2McrRuqJo0e8Tl7Zewufs0rFhOiguM8GdPpk%2Bhhh%2FIgI6Qtf%2Bh3lplTzp5NVNC5rB834sflkRt%2BocxMehs7zKnxdSC%2BwicEqvDdTUTAn00ku18t4a03VAuame03q%2BlgMAh9VDsuclg24RWKmmrqj5TFtFbqXE63492JFBS47ghfzs7SV0V0ubLXtSAivZhAZ70Vp5ya%2BPp7vvcTNtZn%2BuoLuzMqDj82hvl6y40JuvD%2Fg%2FZzM4LECHhs%2Bq3g%2Bwwl7PO0AY6pgGgD9opsbmKLhT%2Bq89uYNhTuAeu9rcyUGvHHWq966VDb0hgmb4H1Qixl4pYQ440gRte229vRulcdI61lQs%2FK9KCTwzTjgi%2BCiDtil8DlhW%2F6eP8LDdQ%2FiXHWpseW5G7ZelXI55EBmOou52jIl6amLxIIeIq3ek3Tf80jYUwto8BUTXYqPmBSb1myPvba2BtmxG0BZnPIzcCMJ%2BCL29ng6G8b2mKngb0&X-Amz-Signature=05cba28ed6c9af62099d3294efe6f7c1c6e9f600833ebe84e9bfb6832ee3087d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=36e3542548fe3d3ebe1aaffe102c36d19cb3b639a1e746a63d7aa5546fd99fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVPLWK%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD3HkJEGOpVjC7CV7F5VKq7mXsbLGWdzqnQFeQX6FbIAiEAnR3lsChMuDFrZQ1rLBmFnynWvEQ9xAZQuZJVmiUCU%2Fcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCkphmOB7tB9i7%2FNAircA4bfAUdh%2B0g6RyDlzOuGZF601I9BUScGViI1Os042NqmTD95z4rdGkAinEkOBslOu9cdFMZYbpYv5ah7TtpgvNPgBLx8uwQqgeF9k3udX8PFe92KS8Z4A8YE2Zp18CTH%2BV%2FbbNkgWPDjr1Myb8ubbFlKcEr5L%2BeTDYW93V%2FLg108AkV7JTB4dzv0uvxqkk6DAOx7MFsH%2FidTA5fw5bED3npGgYim8S1PRljvagiKpug1frLqn%2FjBITwX87egnVq%2Fx5sI8hW40v3q3Yf2tvXM39ZE3eLD49yjWpgoA3NH4qrJzSDRU3nHicLuJDgxsVFv868Ib2t6vOklz9%2FITtKGhZzPqyEg2xFTDQn5vnf7BITWPmsHWL0wT6UOATmHNV%2BmEZlCg456JjB%2FL5nhYY3J8L7uvRguUq5R8r7ZHC0xFSaMGv%2FV55YKLHspsRzhjcIL1ItvgHD4kybUNPNqvKlsE%2FfDGtRUEvid5NRvlwGTL34MKohsIDmWo%2BFkp192jcWvYaJQWCYrPKKsIIKqJ90SeWkeEveh%2BbZQTUz39Uqt8sUGPCPoUGrQ47Eo3t%2FVh%2ByPkAnvMcXl56VsjrEbxK%2FHoWnuV6mfrFJ3WmBmL42x78qQu4S7DRpuvEsg7xi%2BMJ20ztAGOqUBk9sJvj%2BYnpN0vO%2F6gXjlUKFK4T3RAlcL9PfvmzLbCkD72GGAiDR3FyQ1RrbMJ8yqSMCxEhAp5e5Ed2mzTy8dmi%2BlLhFR1r%2BDQLhhMqPhUfNfsEukADqvMgdOXFLDE69ilxGIO7oRqGkmNOsJ9alfMBfX7xUG78EkhtYISnuOpwujVqxDdrtqWZhdTPJBj9WkB4sJRnMRA%2BjHRFOq0kPPpgMzHa%2F3&X-Amz-Signature=5e7d495d04f8104f743e3c2a1b7e6706353806f95fdf064689090125aa99dac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=f8724154bc826f6263af7bac6135bf6ad72c7aa47769056865f0205c22585822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=b90be14fe6b0fff429af70c00d5c19db384e9725c7d131d1436e346163b27f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=ea1cdc81a2c8f36ea5a2d10470d5e165d79ee92c703b99c412de0a9818cfcf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=eeeca72ae6888de6659f135ac3536f2d3fa1864decba3b15992acfc6d80f0a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ2PF5SV%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHbzTIBlyVWI1I5UHwfpbMh4zoKTIIRET%2FZBrqoxYa%2FAiA7BhVVd6HF9We7LsQgbPqlBNQ9Xue1Oa7BJELk3hG9nCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMeDjgaYsMbiiFb%2BcIKtwDP4Ok%2B3oIvpJOaQ2pAaUfKb9AcpKrej3lTWhJomaMYvP37hGHNl3zB7drHzgyepR8VjqQ1DL%2F9aRASUKKuRFLOpFn1detC8TO4SQZugYrsq6oI93%2FFf6W2ZR8z%2Bx7dkMrviw18UwS%2FneRWfQ9N3werurTA2QiVgVPw1wkzDLgS6rapF7I27w4h8ViDO8plqnxh7m7rhKOZXEvGDLJGsXXV3w41FEpIfo0Txb%2FtHv8o%2Bc5QgSO2K9udKq1b11Xjys%2F8BLNs96nwEZwOPLVpwFXmjJCrF6wx0KVJR67NL%2FIsqPB4sZAwFFTYHTYh1EBpAG%2BRXk6iOF3RAcN59wilCQJkrh3KGuSu7cxnOzbKj%2Fjb%2BfmtlCyLjRdbkhFOzpAAXecu8x3qZ1kmhRUb6KmFitWbn7uZutrUL7O2CLfIu7LoYrAlPDYzx26fQkOVe4XRZ%2FFbVVJCplZX4EWACEhxEHE3ljpp8siYnnYup7J6sTDFkabno9jVvoJqwPQ2ulT7QxlRHy6ST9XbuN%2FsomSbfqOt0B0JlxCD1nyndwfSdSL2QX3lhb9bKh4w7UHebqsNMe67TYp70EQq5iOhM5CbTUoBS8Dn%2B9slevdGWhQi8CW%2FiZtwW9svRppDPXL%2Fwkwge%2FO0AY6pgEKfz6Vbc29m50F85a6S60T5uYrVTf9p2VmljY291VQgv970gLFUqwajiiZevuI4FYQ3I%2BFcIED2%2BBqEt6lQh3yuBoFYqQHeLOCs53ktsWnPjB%2FARiDzKOvJ4FRoD0oYDOOZ7X9qTpf84UopaxP5Z5RnDwSp%2BHATq57G1Du%2B%2FLbmcHmhp4lWb58lSXYqzMNE9MT%2FfgSx1FMgnEI1g1L4zKfrCJziwz2&X-Amz-Signature=bd597603682e64264f4dab28f632e2b67122014b6e150b26ec8094ca06b7aefd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=01877d12042acf686b8f35fbcf74025b4658014b78c2d3ecd862112f8696b781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=1384f1f43951b274601ff199d1303a430517be01bff042df8886e78fdd31af0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=ea1cdc81a2c8f36ea5a2d10470d5e165d79ee92c703b99c412de0a9818cfcf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=0c32ddf66f53751f6a10fce399197df6ace9016bb702b492140cb34344ea489e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=cad5c2f350c4aa3c868827f72224043c031eb4a455673b4a965392fd577fdb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBMX6CO%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgQVNnDqONjOC4728Oqu2cG867GHGH7mBAq14FBZs2DgIgcnjifdQmqmPTlw9JSITIBEmeKxTdI%2FJ3SdPO%2B%2FXrR1Aq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHqa660qNmnaO7pfgyrcA6F7l8IZHarJC78g9e%2BFQ7QyN1tizKuXH%2B7QJIKgG3Wjn1DPbX%2FpB6lrmGr0qX9n%2BnWLzVUErtcCn2t8E6VBHHtxfTshgj8RQBRZsMx%2FItr%2Fqo1kx6C9dOxr9QS1L1XyMJFuUj57%2FYdqucZYZaO%2BNm3moaVB957M8tFO3GQxUJAMVMlv8ShLH5XB8yXn98f0B6JLGQYDGEyiBXt%2F8KfAmRPtxdZ2brBNKbpWNWKR26vOpWZkKzgqlytnKxBd35zt0gucfldfRZORRdLD4AMym7V1drToN4VasnLgZn8Uku7YiQ3%2BgWejBh2B8Rl9uwbnLcsozQ137uVm%2FdP8tL4u8fBKgkLGf%2Fi89KILXQ2PSi8LMce348auDl1F2D2iFgcdvBzh8vFIiCE9sqIYOoALWriuzLPmn1MoRV4Js5AOoKl6e3dNMIauV1aXG%2Fg0WAv3%2FJqG9NfWB7%2Bc%2BWMIx%2F5fYDWbDKJU7VVHJE607M2q%2FUFIM3Nc81%2BVOeTW4DSOtkwTOV1rjm2UdFckGx%2FjNYSQAxX7bQxoai6BEbiY3OhJXrnbSK4bKhKkMblWK6tOQucPyvosrVnuyFUO%2FL8D4VnD71ozyvAJpF%2BH5Bcp5qp2sQsq18mud3HTkqQ0mEreMNezztAGOqUBfQQB19uL9VBUUr8KQFuCgPcndKL9lDwb0jUH4gCc%2FKRTpZx0F1%2B1fTBIsgkki6t7Yn4mL%2Bv%2FyjiT72%2BoBdSlsKc%2F68GGBvb5FX7k4dqsrqJolKVp1pLRp2FpdHfArg8rtgl%2BvCaREs1xpq7SA2hczhWgTLnZ%2FO6BPGOlWqpQQ8VGsG3rSiyoeTJFggicb6lYQpJ1Iahg8upDeiqyfGM47uyiXpUG&X-Amz-Signature=4b193b12676f694f9aefa604f5fc2864c4ffeb07a3e1d921a93b485c556430e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


