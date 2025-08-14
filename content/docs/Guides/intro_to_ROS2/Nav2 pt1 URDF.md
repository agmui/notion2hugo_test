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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=29600c533ddc81d0155918b6c248ac659373f35dbca08c5c047e05b0820c1413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=05fcb4ada967ecaa12dc4d5d1b7960dbfdaff1b16c016863a51704a9b085056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=9e577a8beebe5d0710e4a8032749342f03cf477aed86c2db833b3d9611952446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=85ad2af31eb999598c3b1bb349c04b895440da28ca4ea0526c4c7e729f12967f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=ba834862b22a3029b8f564bb7c9e50f5a35914bf67431a86fe68eacb91ddbf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=4461fab9fe36957dc7c6d24f2f7fa2de340f4b866008bce17881471c14b70c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=4679e9928a197cebdf05e3acb8a2e6ac68dc9987bdb1a1982dc1a8aa7d5ce073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=0c6346de88f652dfdacabf6a99a117f01af549d41a3a49d06cdf348987449ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=cc9f25893fa4e7b7a5b82f7c3742270a3db1ceb1e449f266ee9d1475d3c66cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=1e8980b04fbbe159b16f31063265b9ce3248ff4f743347a8e6aa252c08326fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCN6XJ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4UrnIPR5gaeMjaPibXh2gFurkhy1hKOtIB2WQgwfWXAIhAIugWmDPouKeG0tkLQ9VubyUNh11CRfzDPQ2BRC1G6zbKv8DCEAQABoMNjM3NDIzMTgzODA1IgwzjFUJrQgBBsyM0Qkq3AN8pbZqUvHuIvdvj8KyOW27AxtxqvyCA4zC0vHd2LNzroZPBA%2BmSuj2i8s227goavY04ouU8AmjzkZAVq2EavQiVHLy7kIAxleLprttSOZMUpxLFjEdB7TsrRHAgUWuiQNKoG6QSyTjmD4D461aRH0sVr%2FnhRlaDWvFyhTNiJV0IOpgwuyHc%2FtJ8cuzhPSQ6WwL60si%2F%2FzHiGpxeUfd1UbNBCgk5ZhmTLVSAFnEvQ%2BdkNECImadYQCYjjSoJo1CgUxpPwnvGZmUFfr9KN4qerRoZII6bgHXezZ0NVQSHtiYRQgivBQfIW7LIrLQ7UfX2WapaidchBQUGBEn9cvAqciAHGSDlPgkUFnbsRkDPPBzUiASkrJFheXgotJoRjYwDUyfvsCpF8fTMle0Cs4w5Njcs5T9DFeWgmhvjKb3S2D4MBv%2B6HEeLWDf1RTr%2FGC5s7jI%2Bn6ErP09Z2Kd%2FLFjVjESwbtkolCgFLO7LvdVT6tOYTh4HYnhnBSenipl1ekAhMw6nwjHD9O6iBRINPc8EkSO7FFGKTbbBqafJrIpVyuSprPDw8RGVaY1BAoE%2FbIeERMWbe%2BTktY0D7BUh95p%2BzW6oZwGg8GH8W5kiX8uieEAOyedu%2FuFu2Muv8d%2FUjCHivbEBjqkAeEt7Dan5q5sFhXVuiKKXqpmM5GitPP9AKfoH0fCPfyv%2Fh3o0LgAvIp0sPKepT7QxS5aSAuzfoMY%2F52YmEjmyqv6hOsm%2FTtKI2WJy24cSJ9xhIaitNZuRlHkkH1lkZP47%2FVlPDkWgHcS7v2P3m5VFyCG7gpPLCZlM7onDiXyTEspd6X8Y2kMrEvLD9Y4vdQRlz64Nr8LEE2v%2BWxKFAhlk77MXnjZ&X-Amz-Signature=3ad43707d2f357b664e7d4687f9924b75cfa969d35a1c47d0053ec02de030cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UYP372%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1yNsJiL9OPwG7mUkoLiR%2Fpy6%2BDwR4YqQC2TZJAZAoQIhAJA8M6ByNmXYeSnBOmvU6EcZU5SXnIpFrNoPjtXRoKC6Kv8DCEAQABoMNjM3NDIzMTgzODA1Igwz3e8NyYgNXNR0%2BOEq3AMFQ%2FR9dAtL7jCSJUMiDvO2AfvFWZzDzMUxeNmgsEjLZ2se%2B7nVihZnUOS1WUfwrV3CSnbVavwgjc%2FH3w9tE7onNmKPnwY872od12FXoo5NHmatFpTEfFyu4kJA598CXumtr%2FLLexYdrIFHAn0Y1g550Z7qOXt9BXO2wNLPbh7Sux%2Fc4rXpSJFzw6hJUVZIMNQHKcYuxQRCR2O7PM4zL8Bjfdu59MU8kn2lCSYPjgDG81%2BcyAplOdUnW2SpfUscadVwWE2vnnPTcVIFw3bZjCr%2FZ1GCyTPSBAFIa6zhNSKLrgAdsHly2xi5qpm3ebDrLtIpwHGLKX2%2BpL43QV%2FIwn1cXjG0hv5Smgo6r8quk%2BbaTKX4VAIvHxgbgzJ8Oc8VXgFf8y7I187BXXV6d2CQCIhZTmbQhioiRFZpRGol%2F%2FFFUdj%2Ba02rvHIh1AcvyPkrLox3TiWHszQEh2LE6Oob6HElXgwH7lASEFPxa70px%2BdR5Erimy1OezKFQ394PCZbETBF2ThO1z7r0hpgIhsEtkS6saK7F3oj%2B5qxdSXLKdC5T7dFD6Dzi3KyE2YA59S8DJaUiGinMZpyX44pzxHpUwFvws%2BxZtWdJd9VvdPihS9o27iV11p9zc%2BKPFksQDDPifbEBjqkASWCGUdcnQATjg7KW2gwp362H2l23eFRpk8ENWdt4vKz3Tt1fWS0UKSVDPFiRXdBasQZw1douRMxu6u8NIjoONNURXfHA%2Bs9v66OBf9A79YKEXv43vk2OhjrWZX8MLHR93krN2IlqKy3k%2FkgPFtNwdy6sMn3otJWzcWUdf30K4BxyDm1zADG5NaAjOKlkPtw7TTlOLYOI2jUN3FxWI0vjZYiW0Ol&X-Amz-Signature=076a3a794755af9c458b6e68832f1003c8e62bef3d7ec9bfb96f9914efb91cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBCVUID2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiIbUW1%2BYA9Nbs4UlwZS7Uu%2B3F%2BBUN8pQpQfUbbI5ygQIhAOlPaqTv4Ga%2Bp9CoEgFjqGd4YSNqVMublM4N1iWbsBI%2FKv8DCEAQABoMNjM3NDIzMTgzODA1Igy%2FHhnr4AOODVoS%2BoIq3ANmbjFkbIDSbeEyflKg7%2BdjoTIpjlNUp8kji7marQLBKKhp9aMVP66XeHal1yzHBkpC7v0uPehjchtkcUKh%2Bm4j0OjtfqJrNE4WZADOZlHaVtCeeydlybxfwQlFzRciw2aC0sWn0DD6vzf1x7QK1%2B%2B5EA0mya8LPGxk1BTbgPRjJ4EURKMC2Ac3h1JTnlqk9fFMi0XM6CcOdDGnxFvJOr2r%2Bsq6q0O2Ae%2BlUYG3HvPpMIHdjOlF7PVr04UmGtQuYXfGtk6uGo8UUY2fNhEu4VRws6FPi2U9HA%2BbnnVOigso77n83yOhVRAkieX9mHs3c8hA9TDhmccg16KxnoBgjwob9vzf4vQgwp8PjK0ASsB9z1kzI31mSQ3A%2Bk5QTOwA%2FRVhhpFoY1jT0Esl53t5ozT9X6kY%2FDjiXPdzao4V5%2FGbUAUtnKbz3GhlcK8%2BOSpFH04nhiVQwUXPTWufsMt8j3mGxBx2SAHxWKvuWjDvCSAcGG3R%2BxpK8gWnOMwlRKDpIhsomFYRdTAH1moA%2ByEwmhqiRJojSTBus8IvdGyb0oXjxn%2FCuTMa5F1Y4ImmfemuJP5L9BUIYVrlP6LXtTZo59wog%2B8%2BJItHy9eQKY%2FXXJZksH2MaExbrpxqWRA4gTC6ifbEBjqkAW2D59pL5%2FZcbhe3Yu1dRKOcLMKIMNU%2F%2F4UK2zlsALQkfnKUFuD5Gt%2FlpoNcVykTh4sFz7ccVA940b3Qtu5hE3q1KsMka%2BRNhM6hs5bzENeK6eYbCLQ1WrVTKPwWrHUO01tLx6%2FOybCPteJuirq2c%2FpNRAxPppDi0Rg90490onGUBFptEPW6o8xe3VsqAkr5m32Ys2kGaIGAb1GXNIwpnLQdDTQT&X-Amz-Signature=c1719282cad4f166debc424f54d60a3ca0c923752d065f579c98450d628fa536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=95242cdd55cbc4750de4e6a9b52c0e3da00355660834c40724be403ba5cd5fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJWICKU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1F5R57dYpszrQqW0RrUf20G3fTw%2BTVVM0kSw3kZ5VoAiAgU8i4LWKMugIrmh3wtvNqMtONjNpW2K9Bs%2Fgv9%2BVPUSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMC0On5sfZUsZ0QQiBKtwDOeD2y24K5ePk%2FxVgf%2F3FJnPsWtBk7igWtLIYzH0%2FPRWkXkvzsxT7SHXW7S0vSzWYQYSoSghXBEWSH8egt21ePoRVaFbjWmDtb1H8azpJNwX6bJYKCh6XqCvs3gLJrVMwoWs4AKP54cz9CxcdRFnzxj8mEt8UAMeF8VBksj1Uk8aY24s4SiTu0x5vv1XtWAM7Tg4bjRVG9cnvNC0gGUygqyv5uzHQP9t6D94aphr%2FrRIKej%2B3%2BYRS0U%2F91CLRIsfWro6SMrcpsV538ZirVy2uhxr9tCa49pwcmEg3QWKFd60Cb%2F8VhYmjfPngKu11gYEAcuz%2FlNo2OTyS3yLoxIv2pcd4V1N3DHbDkWdpBscQiJWfa3nYe2sJFhETpMLQBu8F6ChwGqDSpBL4ZnmvBbTCSk%2FTm4E46ADLqrXsBPa5EfJ4OTQn7SLc%2BAZYjK9nqtgDgMI%2FxKdwSO3DNOsZyq9cKVa72qUU9sPWKhcm9QOD7El1jQO1bN2gyN5K6db5qN5tQYzxgks5Un%2Fz3ZnclJAEPL2A5B3xpYfw%2Fhg5p8bP8rSzeFwQZvl3pikYBefgEh8uzIW0x%2BxsADbQM9Luon2s0KFObpjUwS83Z8Txbri8KW3azD69QfomOHrVnQ0w2on2xAY6pgFEelnK0vzNVc3knMAziSJdaztKpwWQWZ4iBQh9KjTSzjHr83Bm6Fugq9HfQFwhOGjiTQjomgqZW2J%2Fl6gMELnMA1nN2FpX0xd5chxubZgxZy4MBqgIwlKSkgRyaipG1nqkVXfRb7QLVMwSKiNzTe2ffSZ%2Fh76hFRYDjjcDuwPBBJviOPcczKsUQ7aWtqd2CoSutbZLK3i6y6uz9Pfh8vU2dyHD3JAL&X-Amz-Signature=5c6b8188d264c246a8923d220b5e9cfe5cb84b165e30873eb055fb750500f809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=327829aff3218fea03a7b2cc45fa0a462a9ea6847ffd211a91edcdbeb1430bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K34I7ME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiEjX4G0YJbHtq3lAwPXS4Xbc6kCuQDaw1QOegYqrmyAiEAqXchCxv9KK9q3CI6kMguQWxfuISQfcSZRWjbqVciDcMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDHf%2FPGFNZLA08tQuCrcA34uZ7tAy9pzoFwAn38H6sMXkx71dgpGGJOdWyVlbymBVA6A%2BF9AnemX20GP0qAjoh6CETcFGLhSqZset8SA4pA8TmSyQCp%2FJI3%2BKWHosCA44vuPmf%2BqipTERoUhwhk4fAxgYVBVifJ21fhdSGyb2pQPP7WNcveiBgihxJsCRa%2F8eU3%2BQ1p%2BBj5HiK4wVwpjPF3NuiYTwB5eNbKlxMLSO5%2BeAuPguWv5xNaU%2B45AQpUADx8qGnLvLjB75ptw4bcHZF2X875XHHBSnxinDSX3%2FY0qQj95%2BysIXozuzSjFc33gQ2pepBu6q8lxMTvpCJlbH%2FtmvvRHogwgujrDZsSg%2BZZ%2F5859nfk1wp1LpNNOHVOvvmfO4iwhoDKnazZ5AOBrUlgjpdA7rScuX3efRQrzGpzkSl4byWat9TMl75H2FaCitB6I0xT5DSioduh96rAkgaiWHzg%2B0hOViP8qmObPt0OfR3Bc5RCYi%2Bt8yMYjBWMu%2Fnd%2BHEzAJ1s1owdJ0PeMiVdGJHw5scNWtDznKw%2BFGMXHBf1fxvo4bVyA4jn%2BI0J9Te3Gqo5vBD5YybUk5BYoPN8Ft%2F6MjlNZ5s6SVpnY%2BG2MrS%2FRDLj1I56xTgWHdJguOCOcZwfku1XsJqgWMNOJ9sQGOqUBFJZW6lzglcstcK6lYZPTOJgpTHuZ99jk%2BefHAo6wQfDHNRMiOiqJ48OusNG5Y8EaHaV%2FUVWZpRtdtnxhI9cM2RhiW7zqHAaoHv9RUQgcxbUxSzkdaZr4CI59uo4uy2gfnnb6LyO54pnwpKkxLdHqWhHs3j9%2BPnJwxoV22OXRQ7P%2F6r2Xi6vHvBNSnofxI6UABqXE2ELVNh04%2F7os9UVDYB%2FkYBUy&X-Amz-Signature=e1a1d371715cf17a6d923c1b143758c63eadb6f431fdf0decc283a795e3e8960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=17a0aeb5dcf72fc5f0fb7b7d6c3e6949a5996fa4c0cc4f36c6210f9cd616b4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67NNSAD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCncNO5VzbOWG2AlZlkQj4mG0DlTf6xm7mAen35pKFPbgIhAMLHmP6jQplUZdlX%2BXaQzJICmc3YRY6lfJI6K1p%2FkOvzKv8DCEAQABoMNjM3NDIzMTgzODA1IgwcBl7eW8OTSVN%2Bznwq3APWq2MOngJljcuYDBRvbftwmklDT7l2R4CKfRZBugT4lv4dhYJ55lrKO1XN3htKnox0SCSKlvVf3g%2FFp4y1XQqmaiTNmPUjQQevgqf0twMncV9H2RHXiFf5yTfAHy6ab%2FhUVuikSSMQ5AmdJ0cYmuOxYl1MgnSJj1l9QenGhcY6GoRv5zKQDLgD6EnNP%2BbMaNhZKRD7OYmuGfZPfJ%2BMt1PDSKQmgk85%2B8HfYGFTkVX20GIxtcfg7Q%2Fs6ujY5rTRGzHksH1XhtYMjEvvDhRxrgVuSIgZaN3pkawz7GQqXhsyvV04wTe1xT%2BMtgF1qLj9qcNQp4IbYLk3Laa9DKkV0T%2FFVxJl%2FmJTC%2FzYZ%2BcAtb%2BKKDvf4yQKnlusj%2BuVBqVsz%2FAI785h9N3BNknw9EryFLMvWLv3A4v2PSJFxhWHlHJ%2BjvqbuiDnB%2F%2FcVVHvRJFzHjYr%2Bv3NbcHeeoiDkROSfPLVENFZhwknkvYuaecLiai1j5reWKrkBkxtNF0shQ0C%2BQNYSK%2Fw4NGFxx0cNq5gUASMS59cF%2B5nJ1o6qjP5RWfyu2rbEJ6R28qFPxGndO1UlhqNfpf5jIezcxZdvx%2FImz5ZcKlcSQ9z%2FxxyO1XTMxiKt%2Ba7PTYCQd3BekPoJDD9ifbEBjqkAT20SfRFasAaI4%2FfOND18G%2B4Vm9XFU5YX%2BIz3ByU6fK9dgGkoGB0HWzP%2FleO4wc8dFv1EymHcGSLqVKuYuFxHlLXJxDbd63pRUMvMeH7NVDGuFxSg634%2FLg6pOiZfhMVDAMAxZGhjt3OV7%2B31mHhx80TinL%2BhMKlRDDTdhQP7oI8VcdrMra%2FNNHqjbRvbVksxPhr7bfDTiVoeGO4ajuGU2PVtsun&X-Amz-Signature=c495534946eef158b4f23a8b109297fb9c524c285ff5cc379935ef068125a9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=68f0e781c2589e0900f405c8f9c449241b091504fd2d15e1ddc4bcf5285ae03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCROKKF6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6YvoDMXcGgT1he%2FV4mIRU0hu670iJTYhiySrKeNTzAiEA2xyNR7VAJ7cSP%2Ff%2BetMaLwEoGCYd9wQnat4BkoqS86Mq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIJVURVZ%2F6kg5D3bQCrcA7dkkucFUOWBIAjX0LAcjmtiVVybZPviljcCQt9g8xugFEu9LEUQn7HlXTiMw2ResrOzZqezE35Jo32dHNCN5%2BkqIMrvN0i0XNkGmWZvyFG6ZZ4yY5vZdp4A8KFZTiBp%2BkzlBeamNkkIPUtMNbgN4YeukLVqU9dLVcpekrl5hVl7azNsMNZUbSqBmHWvrgiKhpv6kuiCy%2B12f7NIiNca5DoUoUkrDyL3BuCB2V3VFT8Spx%2BTCaCrVdrGz5HMzcQYS2O%2F1cYMkImj1R0hzLBN9z%2B3sbP6ZquvPs6vBeefGooCwkdtz6qrc0hOS%2FzPEwg1Y2%2Bv1oQXTUq4AJnX37aDnkUba2rG1%2B8VFvUyOx0OBesGYNWd2wscVUiQ63r5HF862r0musL4oI3vGI%2B99mtyB60pfKZtquFiGBrf%2FS2NQKDqtqEi1AzNBuwCmLt8nsTNFIqAy%2BVw702iWmLpLERvnwEbu4JEVvHYLLqUtQOmA51O9TwqL3kl12JPYxfQxqfzjHW3dM%2BGgSGKC4b0ReiX3pVfUEduG4L8St5lVlSf3NjzPARllxJRiY%2FdInT7T8ajAxqxdUVRviU%2FTeZwYTgsx%2FuP%2BEkbch0ExdRVIqkOSMQGCse67j1xy%2Fe06dWBMPyJ9sQGOqUBwGCGq4Jyp2Shj9IDCA%2BZRIfI1A9ldCXFPeh8PwMEo3mBWjYvdAsury0iNNh%2F0luszR4FUiVWzG4B5O4n%2Fw%2FiuIB4abjOibhigUWDjr%2FcT3AcVTpV%2BsJIHZOCuvN8KSTaSrnr8Qewkbd71GKtjsfJXCrGaOM0wXSQkqP5Qbeec18GqWPNBXm7ujHhLCWlZZ5q7gNg%2Bdz2JyV6lDlfs%2FvOXree425P&X-Amz-Signature=4475b16d27689a2ad57582b4cd32640e9cf7ec6d61007e8afb69fc6356104c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644JHOKTP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmtc2cHcOEiQWzbZjERaG1noiHcwcywumsXekdkppcAIhAL%2BQ7XbcckSGk%2FEYf8JN5qL6ex8wiJ0FlNFzrP8z8mg2Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzhXxAjvxI4wQTlRtkq3APpfVM1P0alusNT1LA4quo6eIIBwfQR5k4mdphr1YPnnWEM8xFnU4lHiOeTbLKjZw2YHa3I%2B7cqFmiBBZx1miSeBcaXQjLkgGouD%2BBG331PD6nKrxIrSgpjbJSTbEGPWSHIAMG%2B%2FrzpmlGi%2BSyMfAwRuiWf8u9O0PH2S%2Fz6kN68zSYaqr2xkhWl6Z5kz0pJirZxXTH66sTO1jnVkAspovcY9ObuzT%2FPNOHyG0o5u%2FQdSXq5%2Btbk0XLAqn%2F%2BPaFc2QfZ0M1pvTqY2DbO6trFwuVkEddkKVD3M%2BGOyxQU4ggZ2h49OqbvuND%2BK4NWu442isuM6A5D0h556XHQQbrjn2TAxfioR2%2Fe3B6NEskWy8fYSBdqRLuC1tcB08P%2BYCDLJCdBcpRYFp0JiDDn2IjKNNCyAxcTAe8%2FFs2DyIywWFhLIBhgmi8V6%2BnfK5gyDTRSpFeDdam3pTJo68Hoy6SJa5eVgSqPmb0qfIpDkpue0jZLXZBp246PENpxaEFjzdn69lCKECWlOcR9DhrSP%2BexIFaB4V2cvLq4LWKBLiNz9ofpXtTwdsSM21IDXYSadoS9NtBr3J%2B3bWXdqaogTl4CH9ekQl%2FCyON3nq7kNMQh98olF0iLdJFMuIdtk3qadTCFivbEBjqkAUUgb8vJGAkDcznYe8hEa0HMwH3D%2FHCwByuPXydfi1KWvepwiRTyCm3qRc9Abx4OMrVJUrxvqC1zVUQ1IPHfK8a6KakG3yMX2abjG6oRIUU2q7aGg3n6SV931tLvuSQyTItnrr%2FmycAzlAj6suBByx7gEz3dp8HVIak%2BHTnwbYPqymJSZhxByS%2Fmsvbmrsn17j%2BB0YY2aomGyX3KJU19UyLRrUdZ&X-Amz-Signature=6551ad8615d3238353491646891784653eea024b800b35fd3f353e090ecff68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEPPRU3A%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADZBlKk2FNapv5zJ5pRBms%2BDz42aOe2WZhPCw9jh%2BQkAiAmvVemqXq48f44tVZW%2BV1JFj1vEox8MyHHwg%2FP%2BELyfyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM7fjIlczLJOqDAVj6KtwDU2dsQp5e8QU43LYFFWz6QsD8NqfB5K%2FBpfNWJZJQcMSha7pfCb67xDPbVeP9ZmRwQStQ%2Bz1EBuJ4O%2FySfeQJIhg3iQwxdrL4M6uNrAWPxrs6SAXzVJtljJeCEekr6gd5nEN1trKvx6BJ0%2BhjoUsEAKEnpAGPQX0sRXKRUclJyX8WLe03%2BmXXigwSqChszMTb2yHqy4%2BaTWF6i5x%2Byw206xVT4t8IaQ82AFQsxWjhDXB%2FfVe7UEboQs7YKA3bT8Frs3gk%2BkCbvqa95OJp8KGG%2F3pzommvYg4vCbvYtBj0LxUV6ycHC2WQdxoqmM5E1kKTd94RP5PgbhAOxeZiSTbexN6ZqxGi5juvs6RQLfMekrdVQpC7upxK6E7%2Fek%2BMEOX3tv6xh809SFf4n%2BaiokJjfuXScyYtVJyDkIY1uZtbsKqtAf55F8s%2BTVbeT8hHeBUufhQNQFyC9clt0PcwPBqsSn9KR263J8odFGjfqU0v1yYAavFx%2Bb%2B7jAuHklJetcGXscBgI27R%2FbIeeKAO1VhWEQJemt0bWaLNrToN2Cg3Deti2y%2Fh3d02pyl6mWKbryF3GQsE44uLy6hLzate1SeFreOeaVRs6W8D5OjS6BIxlcE4kYD89uoO7HYC2Eww2Yn2xAY6pgF2Y9irF%2FHWtnBNGdld4u4bl3owC14V74arZYkZ2wjCRwmWELnRw4RCNtJscPn04KEQmK6YrQINf0kzJMKuiulhwR5MSBvsmwvxaw46QN7gUYFVPpNJUWf2vjK533Z6uxPrCm7MloUYSpHBfwvJXpjirKE1T8g4B4TUhmhnCdIr8VkmR4AaGgQAII4bsZQ4VbO%2FSHtT88MNMbSDqxPU0%2BZsfF0by3IM&X-Amz-Signature=31f7fbf5483a9b9d10f610edf570302bcb173a4aa1931831ff72a22d8d7539ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B54LP24%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv7j%2FjIduLKVeJ5AKoonUl8uZnS2Umdt4ruLFb%2FBQLegIgQ%2B2fAnQk17yO%2F2WCDAxLfre3csZ%2B4es9bNJsB7Beqmoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMnyv82YkZRTSDrR7yrcA84JFu0Gnx7441oyM3%2FaFmycJc35eFTTaIE195uA9giyyKUDYMgT5ALgXnZaqov2NNZHjrZuhspxJCxCkZhUNepBCfr61zTspFrq6vbUaJM74h5jq51t2jJc2Ko4%2BTlPyxd%2B9D6ZvAzR1t2gTAnW7Z6EQvaV4TFhpFhLii2XMpUXdLrx0MBGzii4ZvXVp%2FSZ3pWRm5ElBw1OQMm9nNHAmMnMjwPuSSDmOTxDhVMt9pBiJCI2rLkJTNTVTiPW%2FJfpoe9mOGY2dxeIUPSJ49m3rLM1LQng6lp5qoCLH00EUErCkKeJPlAnXuBSKHc12e5ykXsTdsEdBqIK1cPcGdp6IpEzIKROIhhZMCOSBscEEwJeHunoaqqapph%2BABdJ7nc7PVyWPU1TylgGdKdgi3zM%2BULIqIEwURJSbCiZ3X%2FOpVeQFuoN%2B7QHO6MybDkrol6gPoWZuk6kIH7wMAU62%2B3xaxt02Q0%2FDeCR32i2CwEhXaBpa4hnZIzpYjk5O0eXmmM%2FWLI2xg0S5VnbSmODvFSn2VS05YmL0%2FpOO9PYXjOk9ciTb31WD6it9M%2FwNJlQKhtXe9Hjm%2B0dMSsS2ctz1KO78SSA5X8otr3UAz4D4RLEAig4PDkgMvbtTl%2Bi8iUjMICK9sQGOqUBd8i7ViDVtTwygW2mi5yIdeji6rMoiwKb42bIfMiiK4pJTmILXOXAxREvBL4MVqxVAkCYwSIjL2LeWxIb7KOz3QNttvyUfC%2BcgFdXXxUU8A%2FPV%2BxyD9qyNlqIbHsbbwVhlbAFqmrECoYVkgUT55tI1QVDa827iQmHeXPHdslxQEI5yWToFtLS1ZbwgDVIRpQEzk01XcwA3O0efvYzhIBp02A17kbL&X-Amz-Signature=ead276f205b63f3912b9ad793a53132f80652c38157fbf944ff5d559ec311d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGK3PPQL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BXmEg15qb7UYOhg6FYtItGBgQPpD4VhfT7oBmy8Hi2QIgHyjktWMRa8Ds1sH%2FV9R%2BObhGhtB36Bb%2Bx%2F5uR072UQIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHT%2BCWoGsZcuKJBxgyrcA6URo%2Fjf4wpemKNYaXLOoGtcqRP24t22t0s9Ca4WLPLR%2BXCtcCFTzvH8EyjxDL6fKSViJpjQbzrR5%2FZbWX%2B29ol8dHLNJdKzdWEjcVHRwe8wVG8DegCsCrfblECBqPf6AJc6YPAAY49XoxrLJ%2Fm3tkiwaiEhB7Np2gEcLs6LDWLbjDBO4iYdkGQr7%2B0C05tGCgxxj6STjlQGRsKV0O3ks9a9Wx7NRpf6M0rafSfkazzpdglfr%2FZM7ZFwgX8UNxRS9TOy%2BOaWH9V%2BhQWc3atN1O%2BqEtydnWlcT6nZaR1pHZGt6ixV1j8c2adrPfo1eIVbVIC6H8vE3LBeC34VFy9mi%2BYikFf6l4u7RKQ5y0YC5XUEwUpEERCvg5CK66AN2K590hmy2qVmaQ3KjJHWFzjqI6f15fpJQPSUI6aAK7wTrzWyCkyEDRGBmJLNaJe8GUFg%2FcsbkmyRHH1A8voTX4zQl83OtiZLpsATGjVGTQz4v6mZUsrw76vSlOSrZZWnAOAKvfby1XulhftjNhyEolpHb%2BC%2B%2FEXhvIcgoIc5sHlySR3TsCeIVlWaGJzRitkZWZgykDBY6dHVd6MTrlKzKbwtuz3wUABX2XU3bVMKPlMHSfBQi847TL5e3YVKI9pwMNCJ9sQGOqUBGn%2BgSCxCVPj8kjpw3eyRDvKIsm3LH0qQMQhaYuEgZcjRXxIwBFF9YM3zPfMvP4Em%2BHjdV%2FV6jTPU1yBCBgxyt0t43xQMqzpNrGs7oIjYzCMCMjoN8UNmbyakk3iEnT022uKRiAqpkCwOwAtMVsXFA5M%2FnbX71PMaTJxSmg0kdyzDfNiK%2F4jTUxRjF2pesI6c1Q2UGKFu7FeffICyHvWm73mGRGO7&X-Amz-Signature=ba7b60e6d011c6f882819cd0c8dcc65c1ff9bd4a9b0dfe802be67c1791a7d122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=2880f3d146a3ec9a5fcd1fb4e60faf4e67f178a93f7d260a8d7db50eb20e5fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA6N45P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbfNrUstjpcadi9aNd658QzAGA8f5AqNV9yz6xh%2FIxgAiBdo5kgBMHAijEQMXkiIguAVUhu%2B2U%2F8pm3CvMwc3ldEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMx6AYEXC%2BGzwjDefsKtwD%2Fwa2CfWKJwR4lVuJHMEt8pCUh7QdtN%2FUmuI437RP4oDyRE2jK6LMDku1rYuLWAoaenGSW8AtJinCziKS0VADd2n3JW9sBC11XpIFrgLwrbwAi79QxqI8jQoc4icvkQAL0zs9WzyW7LQxhL%2BvRFVOTgNiai3z0dZE5Cf74y%2Ba%2FR2zcfRB%2FSwAm%2FL6BGoKz4qlSlFMHdVQj7KTqwBGDcWgTtZt%2FTsuTT27EJaiQBIRorxIhVfWP6kwaWzB90UDcJwy4hiSUk1SI2or6SKxs7gu4TU6Gcf9b%2BLETvQA0Oz1BwAsTthtc7gL2V2NKyFvvWXusf83F9LDWN7ib9b9v49a2NYd0ExPH2%2B8jKLQswh5aPBmVDk5PDUlbCgC1ksLJv5MVe4ZaBWA0ANwXwo41ENFhhzF7aKoRz9w761bgj3RMzbN2K3QPAQwfmPKJ2DWC2TCSThHMGlLkVTWMhBH2f4PJurnpAhrEdMq%2BcPq89cE96qVaCf%2FWINnpM%2FU2ntgzRH0x1mpgTvjyORYDELW2AWerQ%2FlBKRNgpqbTqJVkgAVgHsmcSy1y3hdgHZLhpg0%2FidCSe%2BKPmgE5gyJ7EIWOmq69Wk2Qy%2Bn9qtK5yCkpnre7OQMLuWiMBQDn6dwnCIw2on2xAY6pgGd%2BWXqzTmtehwua5YFAlQdgiR%2BCT%2BmH4hRcmpQSucXr9APh7B6XTfWwY36YFvxXniOiHt3QywZqtdofIGd%2BlxQE0qvTGoblepEHom%2B13yBYl3QWeVjKtfnbP%2FsKe6B8eSYVJ9jp6iv4JgH%2FWkumANn8SgLMw42FQdYi7GGa1kTSFTDvMBWDAT8k64oyp73Wej85Kp9HON2I71gAIFdm%2BUPrOn7XUyW&X-Amz-Signature=b79b4dbe5255e601f26cfb8a286a89882c6b730439a2d1b60ac426f6bc820e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=c5bb58c63610fc10bdc0adcdc516eba583922f3aa66fa830bcdc2b5b30aa296b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=72a651ef829ff6c783f5bfceca05d867615119f5cd73fb451e35adb6f33d4a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=cc1841b9d13069e398437b8f100e15843ea6d837534bf44edb7544a4c05f0dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=aba107001c3370528f49910dd509dd467b676d852fe9449a91c10efc4ab4b188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=cb12b83c409615700132ce507c1e8756b38b6c16430e413158ec9e7afdeaaafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=889692511f81620af5ff3bc87f69c5c290d11dffbbd0908f922f6b7afa5c250d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=7491ca40c9fedf9ab4a539875a2e905aec77c02a86dfd1b9a4a0112684a9ba4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=2cca00d18edf156e47844a55a842d9e3537761afc952a375c68d9979a4d417ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=0a76224edf5bd5562d16f6abba2b6cfe2566c852e84510f1d03f15f43246f1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3LF3SD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDusN2wWSLEDxDplLoR2JDvFZb1VDFEMxE79GbES9PsuAiEA8sCYvNkd2%2B6lQH2Ne9b9eB5coCoau04ccYNmopFvg6sq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOg%2BQ9x0nFVNdwBe%2ByrcA1%2FdlsSedqmepeRTdtYGDm5SKxmo2sct1S50GKGaoGlAr1R1yupBP4mbg9fF5vZi2vPov8vWXE%2FdEftwqAm6poCSKaOiZQjGcZeMn%2FzSTDZHCcOE5c0o6b9wPAE8BYxdZjMoqhYyt6zWJKoq6G6LlZznRzbQ3ATtxV5Cg8p1B9wGE7Mi%2BIreILYRVWSvo7c%2BRBDLFRVCWxBl176CnDC08tj3An%2Bks5%2FnLNmvzIOzzMnZmov1ELwrw%2BovLStMesZUE7zbT2SHuPInWjTVYbz4cfqQhWaqZogvXzjyK%2BT8L%2BKEVb6%2FC%2Fgwaq3viMuSdxUf7Vpyx1TrWizQM98SCRU%2BIPIXJkr14mNjkha2PR2r%2B1TwJMz3YA%2BXQZAe048OH%2BJWwOe9rqTkx5uMPZ5P%2FPZkqS34HZ7sPfHhZZt6yaA4MC33pYn9RaQSm6Z5bOoqyvlYnwlSJRkLbh%2FR57ZqNK9jakjX3AG0HoEN%2BDPcBtw%2FXsP3TVN%2Fo8hCxb55gwX3rNdRj0OKilr6TyMSY7cM8LssmHw%2B8cpfs9bmHLj6O%2B1zuDxptjLi8%2FRwLoMZw72PqI9fwAhNZqQrOoUq6Jz27xWzng%2Bulj7ZfYgl9P3zYoHI1FKr5VduNvxqybeAjSJpMOSJ9sQGOqUBnl9%2BkQF1piV7qYZL0kZX601e8FPZAIVmN5Ny7Ufpv%2FKOFOUQtcXEtM2LoRUU8VG8JJ60pRsoSWv5TdzpnASo2C4vVdsPTUKESIHUhF2%2B3eP8tML1mI9ZI0tu8RN%2B58kU6ej4cotR%2FrFYbDczWvpFtbBoGMGsbG2u8SMDXQd5%2FxEyp72YArcdnnSOwxLqFQjURrEtwYNS1%2FaLlYdih0Oytjtj0vID&X-Amz-Signature=1bfb63d15d87665bbb3a2fecb638732d5b43e560923e296e316c4868329580ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
