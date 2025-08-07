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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=89eeb2ea1d9387dab27948356e241ff87c74d72d42ae1e6dcdac9cd50864edc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=9e22a0bf526c3ee8d53b97714d536d448183bc3c686d9695b6e8b843abd3cc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=470674515fa3c6eadc801afd1feb0776ae51a3520cde4b5c14082c6bf8853ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=423ab28e2de20c3f09b30ffb7a06b7297f6351efd2ab53da09f24c5d4f454f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=364b3793d7fb31b30d30f4417a531b2014a7e937990375914fe5b7619970e229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=f1c2b8b115667b0f74c39f8f3d3b17d8a5328ee237650cf60732557b643dbb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=e0441420e9cd6fdb1f7ca88e01459c8c1dc64ace498795bed771c4c8fc8ce3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=dbb5d77e2b3cf34edc7205391dd5d0642efe5f590da7f1f3c5fdc0d02a117199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=c8d5c9b09043b34acbe56ea3a81b6defef8354bf26f5029271bfc51729006e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=f2030d1f11e9952e7e5a24a048a5c45d0351993f726d546f9d7ea5d309fee476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MFRDBOU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGp0jjnlBMW6SujalRe0rXZc7eBMslJ44h0o39o9pD2qAiAqPsFT%2FOHzO%2BxS4WPzqMUvTXbnzTKnT6EMYcbOLTHiuSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEyLIplnS4qeEosv5KtwDDlw%2FbyyskRi7t9sN00eLT2nIFnMdN7oZ6Y9oLgiTzMb%2BI08el%2Be61X8uZFfyKPQATlWn7p4gew4AWb8X3T37D0h64G8IUCZY%2FzXaed59r9%2FoiZvYdAHH59s4nHZrtBpvqoirFgZVoPqkZu0LU8NFq8a%2FPJbn9QASgRxNVT%2F0UYz59iRp7FcQ1ScgGlAcK9yZ9O1vB45Fb8ZUxom5wg%2BdPXvZZG3FT%2BsyzgECIz94GupF7fKLtn5Oy3Kbq93huYb6CwOsmjFM5EGIXeQSI5%2Fo41ohpweVfNsHzBW39tH29AfxVnJ8QOZjhbZXAHPHm1oozG1b3rPOHg5kjZvbhwg%2Bp%2Bryw%2BRHt0IYnqHjuRaiMqpBnXNs4OiZXWqXuKEaYHnsRqlDzVLfmSlOcdZ0Ai3u8a4r4Ts9ZrejYQz3XjEP302npQcucbkByHP4axJXsT07wxAwlsg9iwe9xZ48qphZ%2FTcdUowPSc36TmKap%2FBSJKudXVJEZNafFnvEE0FlP4GLA0TbjNOYSsZQrzdn51eSME4N%2BXnN4Gak4KpLf0P7cYcPrNnGtDuR4rz2esSfGT8TXoXMCLuCn4u7g2uE%2F58%2BfZzmWXx%2FfDN1XIpwIbCZktht71p27D4QOUZAzEkwr8nTxAY6pgHweRcFL30WPupggupJ8jK4EX%2FQdQWJGbqDGHNMAVsCFXuQwSLDHpt2%2B3QG6h7myjpoNP5rwStbDL4HN%2F99hsc6kKIjbQcffOGvhQqanHrtn4G6ZBvVaBaOkKYBCIdctuSqsAMzjxDE0ND85bME3BGeNApQYJHy4AgAzZwRjOkqbPAE3IN1dzID89DYsqmEI24fKQ8%2BWVq9c%2FeraMEld7RSdqjuTMMp&X-Amz-Signature=4b14aaf3a68384775c0720fdeb38c7f64f6fa65cbb663b2a071a65519429a509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCR7CALO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFccWNKq3gVGDVYFYJRMcm065AlkolTtBMv17TL%2FYvoeAiEAvAntQQNCGLB4cyP76%2B67TzfKO60XN4ARDMscbbF9U8UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQKZAH2ly3WjFchjCrcA7snRKo36bBiljP0nxvTaxGZG%2BIQ0zjWuoAxyUMJji9G62Ioj%2FXO4N%2BpoW5KkLY%2FK%2BlNM9C9AFkJYAGMbci0PJ0Hb3Gl%2BeuvPSGqDHx3iHT4ggTA3TzN614msO5Zo05s%2F%2BHLBed86AoQ4dQlsy0WitRrLzrxL1PMuhOFC4lJr75DOAInR3bAC9fgA3jcSZzw1Ygn41WxDQmkVwlU5FzKXhbfQ5QNlNZyT6oyR9gGXAN4PaeQ9HrDzo3KZt%2BOuAIh%2BiJLzieZMJYLNQXc5gBedSFomKeCpL%2BUd1vi54mq6uvxFMxQWgym6R1iQAPlDZbosfuULf1QM9EBCQyGffUiybbn4q656YIJMj1mWrL8%2B5dnbb8hj8Qf3oMGgNwUL38GAkfg9BjjQZZQ0LfFKKHhv7eZqwH%2FftqlXrCt9sBueQ%2BHmLDxYG6SeTFqfnLWNyVH%2B%2FWvYNm%2Brhmu0mOIaHxjB8vjNvjHWeX0luOQmANTkJBhVhhPlSIRGkBdfawz8LPerDyDD4rtN2GjFp6zAXUY4stmpwRWdeH5RA9YtiLYmpSyr9a%2BrGEiBLYGbCy8CVqJjyRPm6O%2BjPHkfTh2IVDWthBHuBwZVG%2B%2FKiSt46Zkbk2sgb10WUzAEYwalP0oMOvJ08QGOqUBjbIqpGUnH%2F5KjGoqGJhzYwVKQWI9fTIrTobW4FeX8vLEPEYYNeLJwqUJDqvf9nwcKaliflhaxMDrTj%2BLtnhzaOdwbY0WP4vSBgTH1f%2Fays0MfoNcnxzztC2aTOV6mI1DXe0hKBmTKiv9wXkV%2Bw0sDKpmebqTsvQuPrpn0Vy0yIJ4qbgb8315xxgc7l8TCYwmBxBRBMBEA9zfpan%2BVWj738SaaPsE&X-Amz-Signature=738c108885503a7f01519afd8a22811669b3cbf7fe3dda4d66f80b8e2fc2f28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBMUSEZ5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAlqQpEURsBUYUXLHgJXoZT%2FTMGyQIqekrAzr2BibzvSAiA%2FcbiHTi4EaKOkYUeixIeGec6vSm%2FTMX0cWCBUt74lCiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBFUe7jG6EMHLzyYKtwDNv8TUvudAfdv9o8sGD3%2BxP41X2UxBmPdjn3otZlULrqQShZtWgbyb2wb5rfMgkp9vcNsV1gFjvIlFhpF8VjD0zP4M5qrZGJHpEukRJxq1Mb1dAyFKqk8gXW354PuCafSFSNB1cCoWY4ykyUjtnQgR8MSvYPSfyzlPRpXrXTOd6ZSzYLh5fdnsyO7vAJLkuzQ9kPBlTWHLTf27nnvPJNS1W0U8046BMmVuTnuWh8Qp29b%2B5TA9odY6EjPR62WmSw82kev1bn1Jn%2F%2BsCIgWLQGU%2FaX6DX3Btt3Ha0aO%2BuGiCeG4gYifBkxRlmIhKEA060Cqk%2B%2BqKPtxf07P86%2FbC9ZNafBLqwnJIiw6LqEIxuSW6OZ9FF4u3rWiOwPl2mPHCpbMou80k957WRw8vcyLsQzvhrYAVsl0kSPJ1XzS0jaOhowP83icwrZhDhDX5qbWQXvvC9DQnKC3hALJ8Y58%2FoL7n2x7ahxKQnciiX0bYfAeCeILj50ieGaMxxcgj716ePqNsUNeiXPuoxJb7QQxgB8J7eWCed5b7jyAAtQzp8jTwaeoTgiq3T2g1hEOPTaxu9JH%2FT3bO5acuzzvv%2FH%2BlJvG0kTw5li2eXraRmlItNiC2r7tdRSPPfzzbjhShcwr8nTxAY6pgG7RbFI1EpEDyYvDkrCmuaVV3qUoi%2BHif7StKxo1aNJop6hdBUoeSZXpXVB7wcpNmQwmEmsOQVXPoAKRAawJ0b0%2BE8Lcv5sUW0D%2FidM0K3s%2FtO1BMbcCUVZpulrE1qjj41%2Fns1228PzJxbOL8rg%2FrraECDnLLgh237GQHBX0FOwkAAkp0RTpJczLQwsScX%2Bc4AHt2Wx04dj7CKv9%2BsY52NjQVuCg2zo&X-Amz-Signature=f5a7e84813aaebdb5596326807a82c0970207496f40ca38abedc944017c72f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=8ec6d20d6f76b6a3bd407feedd3d41665f7f326f5f8b5d7af0b7ca9b43ea0ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZZHYYD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBj3%2BfZ4Mktj4TOH82Y6G4RogYVIloqd3MU85Hyvi2xFAiAetS29ge%2FSgaxWBAILf6RDMgH7PLbIxDCON4I1Vhe1iiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGn3rN2nTnXLNpVMZKtwDDPcKQAsd9oYugVqutp3iYa8Qjm43kBGF3QTaBHL9XPR7EP0mW8Q8pS0KrYpXDGFZzV9LanIHweMxlJ3Zmm3lN5p%2FJpJIipeGngP7t%2Bns929AnUtskKiih%2Bn3cJLdlRzJgJl7vXGkVUZNuHa06tG4hxqmFbvoPxm4xsLfooYaIsA8sZUnH53cBNMk6KisL5sbnqkpLb6mFwKobZn2%2FnA%2Bx4h0%2Fqi9EkeWd3OeHF2nEUpBSzgKeE67EvFo0s3AvW3Y7Neu%2BHTj7%2B0IGFOT0NPykCHquwGU86ibbf2kpX1Hy5P037TS%2BRROK0ovLnfHH1AW9sGA9moLwiNP%2BSiAwUxu1CgpwGITt%2FMPH5DwksGzP0A4i4KsnEQxLq0irMK3F1YMzojyW7KPwv%2B6VXiQ9ePGTyTD%2FMlGj%2Bic9Np%2BYvPt%2BWaRR0P5yHDxgXNzwNVI5EV8gH1szoQBL0%2B7tPYhDykGrUgAtnkzAzx38tWDAFnObn0Kmv%2Ff3CrLV6DChhrSXD8VHQP%2F4a%2B%2BFuMa8uJnLpfmspSQMZZ06xuebikX4A9KV7r9Axt8RQfmXNtzmVJKWGi2u2V%2FIGtb6G1uCWQ6qkSZj8AVcaz96JXH0NKiiQ8P2DcMBjTLcqxoesTUeJMwt8rTxAY6pgEhLk7Daku%2Bp7HSdrKZ4y9oNPfRNJ4yblbBXZJk%2BRloQ%2BOp5B5B97cuxdWpiOIgEcRMAg4OQax1FX0QkkQLOSR9%2Bss7Fz%2FBYxHbm6HeHhqg16etMjdIZ8vhacJCimykPTg%2FXPajEylPlZbPohRxNIieHeLdMKKAQvmx4%2FKBKPfsp3wK75493VsE8tbmkoDGjwFpLFMB0E9PXTq3oyfQ%2FEfSDPl2%2Fg3S&X-Amz-Signature=320a9384ee5f191d91059fdf9aa02d82fdac31ff19015c75be8dfd015fd66152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=ece55959a1d71b19e83d93fd98029e9f23d51b175c637885b325f5d1fccfe9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5TCZAM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH4Wh%2FSg52JyWXDwU2du6WfvXN2mfswB0JejMNLuY6s9AiAYISfjbkar3xVci7wOR5%2B0P3N7vRvDMH2gbTQkgJ4P8CqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRnrgobH1BiA1x%2FcyKtwDZ4vuA5kTDYmfTK6lcW7HXoy1II3YZJonfUSd%2BFbQP05r5rO%2BhxEkeCuRSevSIR%2F7kIe0NYeNvcUaTuVD59fYWmO%2BggirlYlrP975dWOPJC6zidYVE9NSwNXVJoQDCLtwq4kp0b%2BarPNAw8orPWx2YywA%2Fo6T%2FaTeL21L8XIP9%2FfsjULNFsUnppjhkJbYGUIdj4Rtq%2Bqjqt%2BlpKvoLusDn9F8Uw%2BTwknz4BVon9ba%2F63eu3xrIdMkwHiaA7JQaZYxDi%2F29gX5EoqESevTkR1A36k9qN0GTTBcPMuS%2FUkyftuSma0fLhrRQEN1WMjlqgDBluRQZBpx25X7fjYZgbyMLGwvShu3Mf5EYPTBKMVzHlLwgsvw9u5Ezu0CZFfdBTJazOV%2F07PsHJdu5eVUPmJrymU7bYw05VxDRTiz8LY05SxNy1%2B%2BsbiqU%2FfUC9M0%2BKVlJiqwNpcEz4ntFYfRlfmmzcyEzi3Y9807wlkk4CM2etFXcLgVSO81RjmujswSKmRANUGaV8swTRaks5sRLroUz5F8ZoNGl8MdGFCxTem14MthtiobERg2aKbONq2NEqPYwMFJnql77W0ZLCqBqQaX315CFvWWu3aFXO9vXX65tGSOQULTg%2B%2FxymDdtnYw9snTxAY6pgHiCh1AcD53dFnHPj1VnasF90uejl%2F7mewABjfKeVJA0aJv%2FCk7tmbQVjZvwZ3nxyCSs%2BWcq1391S%2FC%2BHyiOg1waI0F70dwlNP0CH1yQhyZu5bpiPTQip7Z%2BsZU3t2JP0vMx4%2B%2BiCm1%2BsUQhUhSYdjr38EWW0gXaOsfZvTpqpOwPTt8iE2O2khi1K5z%2FjOELdfBMd0KA%2BzMDp1E%2BQA02IOKsuIQyRvn&X-Amz-Signature=e1f9a9200b639547925a9749fec955ab3e6ed355441930f17dd73e71a0117d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=d4775189c52c3dd5785b5bc615b157db087d09be0ccd500e61bea4f93f87bdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FNNU3K%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCnlh6Uo7Sa4qFscuAXzhVU4zuERBB297a8oyP7R1jOSgIhAMVXqwKOfNhxunGM4zJuZh4tEl2RrP%2B32nu6YfqqbMpTKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi4owxooB0In8nnyIq3AO1jrPgrpnFdHJ3Wi0Mu81A6Dwvoudu%2Be7%2BEKGu27Kgm4kkgGCqPonR5vQdtGS9jyRxMATYGyANYYFMIQNxthWF1IncE0JVB3XMNl6%2Bk1SKfseziMWnMiB3Mga8eJl6LGJ5VeZaAg2olhLet9cEwfJTKejPgIK0Gu7eFXqSqAdvXi5ChQ%2BFoSTTrzKIyv8Awe8E1N0eWM8LOYwY7NdJFgn1BmYAtKtBkdiP6gY4%2BBvVzhEyldmRnxxcRbNUUYphGW9phq5Q%2B%2FxKytkDYGDFqCreiNWg%2BwXPO3DTi3zmFglqg9qI%2FUvSIqBiX0GKIMA5E3RBpehp6qMdwqmHdTnkWA2eyJQCWVmVEb8TNAQw7flqaXUFHiO3mt0GCbOu0y6fTp6kA38j1RXlQfYKI6FmSuN8WdU8qQYJOVXgIDZQIclEkjBk3WQK6T81ZgbksGfFA7HCL2uIEFk1HT7Hsrl2NhILPJvLPvLia%2FJ5eMnestfq8eROQdvzDuY4QHCb5hOo9J6biQ5r%2FDZhj32dF9ZPcAigUaOkQNOP6JwqKUOHtO9xaGMRx0i3dYId%2BEZXHNPViC6ji6SZhASClKtaVtwx5B7I8d919ZBnBxuABaOB9t5%2FGY0xU0Pi6d%2BNkh%2FzRTDBydPEBjqkAZ0UVchMG73xakFM%2Bsk6N2YcpkPpCBGJgpTP4zbyaMbzpTqttMwSVHD58TMJCJki29DkO%2FCvu1WxbNCPpjj1shcFVLftkn7mBqLuH1fYMTkVjjdQ0PPTIUjE1DEMj8scuBksMdtA63KvJw1%2FWK%2FH01Bt67jMLryScgAcGHuEOVn%2FUb6mRobly%2F4d4MzuTt3AD85RLLwEbeF%2FjSfE1txe0gXdEull&X-Amz-Signature=d0cdabfff9d7dfc9731c581444f7206ddf59b7edf841e48566c051a28117e5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=35dbc017d3759f109f5292fdeba0bbfb5160b792ec3017367a8d5b3f1ea2cfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4MDBIHC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGXkNMPU0hR4JQMb5NWLSxSbJZ32BW8NWrOUk5KS7x2NAiApNN2xrfmsLz3n2YuuE%2B%2FU9L%2F657zALbht4Qk%2Fvcl9LSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPlljhQLZycT%2BLGRpKtwDVra36CYBD1PRrrrmsYExeO%2BXoyIev4Kwyb6j6a5QrBV2HKorbF1Are1%2BgC8u4ZYcAhY%2BzYuH8cw2oDBFHrKPKRF7py1mOu0HoOLVGDjO745VZCxzvT2dwnEy1l5JlD89xK5%2BSO4%2BWrqxL%2BOuIpy7t8CnzrZKoSNfeLfXyUVIAfm1oInyS4dAP4HlKTR8QzLqj0D%2BNUwCIzx6Eid%2B%2BhE9pPQK1t6O7KyFH6c6V0xRisSNysl0aOekf5x%2FnEl7mwEKHaV4%2BjHMx9E%2BpZMMFFoHbUWuUJz%2BClMECMzMA8%2FN8l%2F%2Fb%2B4fp5SMy7yleTmlA%2FroKh6VRXpjRK8Dleo4hfoFm5yfYHnTpuA0cdYOJ5h2ZLR0RndXCsd8bMy2lQaotX3vOSiv9o0ZlzJGbyi%2F1S5VT3Gkws7MEfpMnlq6km8JD1zlLSdeZo1paFx1Vlu0mmr69BAH9EAA2bxjlOuGM%2BQ7sQjt3zrR31B2vmiKRi9VHq6EDCditcr83JsxYDYrSpT%2BcKgmsfw3dcqtsYVtSyCGfg4IkAtMsFFAU%2FHTDkC%2FChFyueJ%2FlLv7tACAXR3f3KScCP1vDRxd893dMXhH9JxadulI8rWqbaYsLJ8lVG20ROoK7Awlu%2BmUmBDGsR8wxcrTxAY6pgHIXCQTxcU6ICidV5x5SMHn4ieSH2xOFtsUyOnGqZhlYqutl9gXUQGHgTN%2FNXvADTg0ZLGHAHK%2FvhhujuP7TfHS1BV9x4CHBYk0EcA3xaciy0vLfqzNcPl7WxXCvj4OSXNOs%2B5JurPvJElGoDEX4lGZZZH51Vp8epoHBf62RCKzA9OYxV8S6gm6K2iHmS39DMFT8sSZAt1AKM8JfHyV%2BB9AFMsBPPpB&X-Amz-Signature=522a39761e6ee671b9424405ff6f6ddc802fbdbcf695feaaf4b6cb1e7ef83995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMJ52NJJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDd5GXOEisFsZZoUL0q3L3PONtKHzDc0%2Fe%2FjTalqOYq9AIhAOtzj1mgXkn9aAyIydYUihe9bCZ7d0zRUUcgyOr3%2FNZYKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR8NjiBt9oC3NjOa0q3AOq8e1jMvjmL2ytSdWDE%2FkfnxWj1ZUkwkux7Ut4sA9jeBsQisZ94Auj9CXBTZ6pcwJUSlRFsn95tvXXlBinga8htzDPtBiskWaIiKoLwbSPprJXgvbu13A9oAzS9KciOei6%2BUzh59KKt5wSG3df04hOGJlrxC4IuE%2B7nF7hdDt3TTTxlxHnDIYMOdT0GqHHCUKd1Vd%2FjSqJ70%2FHYNAbxO4WeIupaYUabV%2B1GAkYYjrtMyn8zU%2FO1jybag0yo62UndbJrfFyDvgtAdAF2uC7Po8IFfWW5Zyv6lSRuaGA8F2UJpokvcgWUgEnWsF2fLYL6vBtWO65wGBimsmfpPYkxn1060m5bdEq1ZfWDnv5uCt3yasEuHF9MuSi60kiOsA8HrMW7iewwjNWym0wI2nuSbvhhGhottzagr1O%2BCaREOkTcyvPrt330Mp2mjbRpzu%2BbMPVZ7lQoWAeimUkqsHtKpoEwmTl0Dp23%2BBckBfzsGwZu3TyBifTyimyHNtyJJmxJ85GM2rqJsJUNRe%2F%2BpOBFTLMpG216eWHQFkFqFRGLCXYHIG3lBu2754OcrQA6Dgi3%2F0tY1XCkRfBOlMFiA3KnW9X10C7QnPDYn%2FYPoVB%2B4pEQjLwl2tGybI3U8fV7DC3ytPEBjqkAVtjBotgd1ng6iOWTxTI2U%2BwIhMkiRbtxTyAQHiQGwz5%2BWYkCE4r0EozIjqe7iKtavZaLXn1qxsD%2FAo4nWfMZFnoU6GODMcLlHZOJH%2F4N7C9TBfn%2BHkFc5tMxwmlAYFSkHaYeLJVbLg77MK%2BfgOSe44La1b2e1SX71Jcn1IA2tgwCkpnqhuty%2BtFmMVhUvzAdL3WNzWcuOD7e8xLD38RcYsfaOPv&X-Amz-Signature=0e93df5026630659a07b253e5a6fa33a463d2d32ed2fbdf562256a3c4dd11a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKATI2GJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEjcD7hYSxUI9IGpFwJEv9YbuFOLAax1OeOht%2FXJlNJ9AiEAwI1qK0tNYjHL9%2BivzhFWJ1A6Va%2BIaBT0kPaO%2BvMBKJ8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhA4mTTzpayjqYNQircA3lI85%2Bbb9xnysX4jyf03VHK9zUnjqCGS6jFhRaQbMvFuHFCRBRbzkif6%2FGWvLMPTuNztduv%2Ffh1OgwyGZxge%2FH%2F7H8HCFIIMprwtIH%2FqTRcBWFegxl0weyv36FzhE69QAWmQrwX9FOfuCEMoIVE%2Bi1lo%2BUzPxZOKZxjR4X%2Fvqed75dC3z7xjnGsQfwNddTAYgM%2FdoiqXXA757WQLdun5yrEUAy7xY1l3QRjW7ZgwVOb96CITk3Ad7b7DTOcD2UGfIrPvtgCcZ1hYlez%2BvquPuIUBqePJKt3VUAjVy0uICNvFY%2FTs2xzx%2Bp86MLyNKWDj23HPtI9qPV3PVy3BpR2RzAh3Dxf8viwcp02mGqqu2FqetUz7cwkTBE7Hr7Ia29CpbTcRbXjfk9eFG4r5E8UyDCpwPH3Pb1GoM0JBZcXtp3s00aoQjbfYvkL4XMjANYhbj5KQdcIb5ancKv%2FQrw6WHK6jT7pTThDTf52o%2B4HvXxmVwgzmiV3OH%2BrEv7eIzZCIxqTBSSA3QkQjikqzRgXWnjvlyjvFLrYcLDnZ8G32s97wZ%2Fsbhw0OQOXs%2FolY0JEyOukGOK%2FQHIDP%2FxTi3LvOhF%2FfsSSwCcPeCmK4sV8F%2FaMYYJW51IdkXRo%2FC7wMNTJ08QGOqUBBEwJclEuRsqtavekCuuMHeOp4fhK9AbTJURnZEd6Kee%2BMDZzwzzLAC7MpO0eiBHfVuLIy8pSG37XB0X%2FQGAsbks8vIMByYCXknncyLAVvi%2F8IPEirCSu%2FhcFaLN%2FwMuooupEuBse6SdJrNR4qoQYIMPxk9rj9JO7b1OeaHdfmjOnsoCAxilzJZBRnWdIvaDSsnypaexq0HXO9ywbmakxnrzIvRv2&X-Amz-Signature=b7ffd9c9da7fd76b568a7b9ab73e3e0dcd4862a8d13941ea82ec8dde9b3cba04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6PNT22D%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIE4jgA5p2VbtwpKgLeAcWU4rWZ5TJsCF0h5%2FTuu%2FaD3zAiByANKK6TE%2B11a4ofWrBH6h34ANOxKPeaL1Z3kUDKKjJSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbpopKLIr6hEGb657KtwDA12BwSvJaibP8pz74U3awFps8pE0Ff1a6mcvTWcpD0gwRGUEgm1TWgRIts4%2FrsbxLe%2BRowqpJluGntE7L0F8Ti5MkeZEfdpGvP5oREuMh5ZO%2FYkST26XJCDW%2BG0fDIjVp9s3I3T4vOTlowab%2FesXjLQiMYdOMx65c8yqnI%2FiLDBUrKBpBCkvw28iHzJfKDM8QNtpWEI2ijazgfAjCvtYqEcmLGLk%2BCM%2BG8WDLHTcd8oB06KyuBUglnOBIP2U34O57xzYIDxqXcYrjZ0Vdd9%2FLqRlTxe3u7xxZCsDAO97K8bw16sOrAi3FSGvY6olXBQ%2B8LkxHLrLWiw1dsJsLJ2FSe19la42wS%2B%2FQdvj5MTxqVqjJG6XKrChaG3mqrlLqT5KVfBaeWSk99BWlQK0Ii1zS6zDMdRJNfXFGPvx7hongw7q3UX%2BwZa%2Brbm%2FjvJrxLAgj1oRblAyN3bJgbRL%2Fikt2py3vxbSNmrbNbWhVNm8BzW3tETuM2jbZswnskgS8HlWYI8vlSCwE2MmCZtNbsbKYfRKwByJmWhE3hwtlDhLsJ7%2BQnCG%2ByXVpnUoryr6Du52hav5C20ZUyw24D5Dw%2FEaPg3lbf5%2BcYFetit%2FacHfSZIJLzmLa9plpyZxHKYwxsrTxAY6pgH1A7QssY0hjaN%2F9rWAsDxsB7a1Hxth5Am%2BXqSPZs1e5C%2BZYitkktMUqqPbnTT%2BKvd%2BMJRh7%2B6ciPyIe57HImWkx9Quq%2Ft27%2BazLdVFN7SS%2FtHHgPJF67RRb0hB93Ba4%2FLJYraH88HwBWKYcCVFoTvpK0Q7AXMYIfTIHxUhyJVcfnLIXysYClUKDOMOHsa4ca6CP1H3J5g1x0AQgKY1q1rLcFkNkQ37&X-Amz-Signature=3461cdaf773457d440a105b272207ba4d404f7412626367305c5f3cef34babf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL2J4BAW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDV1sRE9C5GQFIE2PZC4zv3vZxBHvOqnalpLqh6qTflMAiEA7ypQw5Mmnx7feeLxXQwROPbe%2FAgTxUqtjMHhXtPGJy8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGna8ON8i45tK%2FdrSCrcA%2FCd2pACdwYkZ%2BvWTUyx%2FMikdfymTZeLy4xQYz2uXNYBlfPhxflCBCEZ8YjBwSiDLQ0dcbteysJwQdfRhNz37s6K0dlafvOqWjWNwmXJSTRKsgZ2%2BoCNGsbWSrkKdPmR0PLC1wACyO%2BIjeyBko7W3BldvhsDX%2BXYf3AB4g4uwGg5A6eR%2Fi%2BiLvju7zEDbtl1qzovpsf37wBh75%2FzZ91qJUB%2BsE6cHPaSHxZe3RWESwG14USrO6W3L0V8r70VmsUodS7zMIZ6CvlV28k%2BJTqEGQ2e7cXYW0ouCJgS6rb%2FwJpJTK6k9ToljksMWMWVNd2uKd1wmSEfagzZhcueLTy%2BLpV4eZr0oH9L4Ol7R2gGA3loc3zvYuBzz3cIjkslFTg6DJz5KpXhr9XKX%2BVpKGrsrJz%2FeFwOkN1DSxBMwyuJAVVNZbSb3WojMHGwsxGGu1b02a6Vd7A3eeN5wFYW%2BW6Qs82lgLWdSIwEf7VS%2BQwrCFm7yIoJIDdF3684GlAQUcQgSqc82PYJnlEODQRu%2BoBgGtR0XDSC9IddR0U6pu7lro3JtGjAAgVPizA84cne0YNseqVKIARfvgTgxy03O4B0yRsjAlQQlLYBQTYi8ii86c2pFd5WW7gpymHbTyS6MMnK08QGOqUBR15X2SId0X4uAtv8pM95pJ5KWTTUu1Yem3Q5%2FbnfraKKl6yz0dzf%2Buli46mVmwEVER0bxJb81q%2BofOb%2FUrQs1mIWhMvTYTBxLZDscwX3MQ95oEiEVbcthlMvTwRwvVQE83jQI3Hh7l6WLqC6paiyrRvhYWgViQNc%2F9ImsSUoa2FKWLSrhVwBmK%2BSNl5D%2F1GIpkDlNj4ZWcdvSig91Wy8CXpdMC4n&X-Amz-Signature=12653d473d5baea2612266f40fddb66c1468423a6693972875c712701dc5a8d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=d7ce81a3f5902fdef4838f30a111790297df84e34f4f27513ab7f93ed2550985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5AGL2Q%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDA0SLPMUr%2BSQQVN1DBZo6DdNyXxMQnYmHxd3%2FIjrQbXAiAThLqD1cS1pwxwRHj6LRbnA3MT6Dqer6YIvYmMu5pAFyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW1a%2FHoQPzDLzPspVKtwDrTIQPSd6jvBKlgnctZhn7NYV3Zemlv7679UluEQ85BrSgQ%2BQ19m24%2FeYISUm%2FBCcKF5TWUhShFtcAH1wfHLtunjKGqKmsqIO1A2M1vD%2FSZc2dcnRs5Ji%2FA16RFP8EYgEvVF1etpVXIA4Hu%2B2PD%2BQpOnuWhraOfkIRiFQF9sTDAJlsbEc53l2rCeFMX%2B8Jd82aXezAZEdMivpW%2BCJ40Ke%2F7UZ9aGgHSsE8zfoqgdHlnywdPIUtVhFQzVAodPnYVmNXQzLWFk%2B7u6P6SwiQikvHwXDXqpzMDDDX2uesFxnJTK7Ww2%2BgFa%2FsEZJdl2Mc5ZV%2F2wjKRKdYVfJg5OQNniyHJ8sI3lIir%2BeC8FnqnvhXhssHFgiqHx%2Ff3%2FAc9nn8KPMjGD8jtvK9ezwLYB0azLa4ZCMBInfRpO3gAhP50snhtNtKzn5Eu9iSOfW6VttzwTPgfVmFpr9sazQn9MCncFuzV2MpAuhavSD%2FeoeICJSPtPAK5R4d1usvErbcLA40Gk6JZ2uV%2FIt2EVxRPvL5%2FvIE%2BBUKBHctIwINcsq1yI1tf%2BsGCnRHobGQVHtU5kqw%2Bu%2BboHdOBARksX5kLzXEEqzikZ%2Bg7y6yUptBEvC5vk0%2FQbpomZr7ceWdy6nBTgwxsrTxAY6pgFam6OOhKYQ6clydj%2Fjzx8aYuzzzn0xpi4s89IFYD7%2F58iuBzGXago6Lq%2BQ37iWQyyzQgDhLg4dLpxhp3FMiOKqqmI%2Bk8QVP7aHeSpn%2BfNkoZXkWjxqyxYq4yZCig5YxDpA%2FOapViwCZ8cWu5obZpUuUPbL73HjMXw45eF%2FMPAQKkIMPiFHggpjY%2BMicq%2BtU7jF8EQr70e5Nvjd6y16d4JAPsFk39CK&X-Amz-Signature=b7c7cb32ea18fcadabd531fe2b7816cb8d2d2a2b80a35a8272bb11dfa25908fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=6af2fd5ccd2b79cebd8f99b2a95ac77b9905f1d4e97284b72f9753c754864c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=c1b50c5e858cfe236fde76d6ff6c57ac67f9fce422cc8687fa70ad8829503e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=76446199ac6e451492c2072169a606607e93adebbc277aa8b22dec313ad515fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=7df14f02e5a10a335efba1306db364050597639fe3847f2217ec150d4aa3e790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=e76304d9ed307730cef1f3bf5a5e35f386fac9395e8da29befbbbd3884556541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=0c55ee34acdfef9c324335559bb8f2713125632a9c7f2054a637d505421a57cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=76446199ac6e451492c2072169a606607e93adebbc277aa8b22dec313ad515fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=7ad603921f267021efafcfcbc88e8da2c48ab363fabc4c704ca8b45d0e37a4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=a82ead28bf596aea358e3e32c5835ac9036a26ee9ee4e66fceda2726d463c7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGO53HN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD8TQ6iYFa7TFSiLriSWRyty0l89XxQ8M6q%2F8oh%2FshqOgIgGcWqd%2FDPNZ9v52Mcu7SF%2F1%2FkMeuCtui4yYmSmYyhQdwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG%2FLSRompM%2FP10UaircAxn%2F3XGL5YjP%2BfggPVOVycZ3H6BQRGK9n%2FkVWV6UGGwVZHAgSyGohlS4BgVs%2FCaF%2FsOhajC6VAcVuDAjhGOtycSVIf6pNv5RVlm50owsxMAEITF5Bfr8zKIkDr2ezPhkpNMSMKEVZZEooYF%2FydjvELttOFjYfSMx4223AOsxrzFipgaxXqOymCQyBNZbDkJRHHOt%2B1HI8HCoCxItRNBSPjHsiQ7pY7UZJDTxRa%2BdsQdNI619bckiogUcn8l9I25YGCSeGX9zq0tqYSUIk4kCgCnLpk6toVwtNkBU%2BpPgMJ0mou44N6cOok5L7aBJfc8gQEZzBu559lJtqIhkAK6A1AtkPyVg%2BFUgvJLRCoueRF0imKrKPc4uTS3KWCKjvmIjMWEz0uCx62eGZ3ylniXsT7fisIazpllCZ5dOVu8of3WWRuxxjCWeCwDBCk9oRIajt5GYeNBcBusLqjI%2FhITP8QzAfwPP1rvbBqWEbi5FTuvUMCwGCf%2BPVslG3aRAZEnz797vYsls9F2BtCHizZcKlcWFqUphONLvWmfk6efS9Xn0WFl5vpyc4ZGEV91kK58fMGWOv3jzKIk6evje4kEyVysdms6ZoW6vam7Ozx9HkTuL3s1gV0IN7QBFJvg4MMvJ08QGOqUB9UMCHSINqkLqv0xzR2fLZQHxfV8AeMRFCxG57gzqaclIIAlFHM71R4IUZlIDKJedVUxWUa6PCuqMIlngXBadv7AXvKx4H6fFsiG72yyqDxsoG5ADN%2BlmLx7MaKKzPR1umFu6D83Ab6H%2B6%2FfYHLeXC4r1GiY6gcQUeYROw9rn%2FrrLaYKR2CVgUDQZSPwnuAA6VpXlMJaWK4uQU2xuXUcXXtsR3oen&X-Amz-Signature=fc380ef1909317755c06ae3f1a44d1eb119d19920d7a636da79657fc690bdf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
