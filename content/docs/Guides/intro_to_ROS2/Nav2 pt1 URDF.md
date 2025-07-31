---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=70071863f1c3b25e58685bc1a3ed6a3dd35cada750531e8360aca3e239e6f486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=b14d20429c490d3cfd3e6f8f94bc77f73b5343a67a3a5f9bc32a4ffca616fe73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=43e97e7c669268b14d3611e92b99d3846fac586e43ae9133512efbae08cd86a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=c47fea436f700389d31993b733ffaf9d9df06465bf90c166f148234430d9bd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=041dd38117489cc4f07b8fa1c9c80d546b001f17a768e7d965f8188915171c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=3cb543ea51c0b7aa3ea7471b487fe40e7796499581b02ef01170fb6ee3664baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=c2b0190d02256b0ec692fa5d268a956fc5977c0095faecf3c7fb386aff021796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=8b2a505a232e78499842eb7f7d19496db3a058e7334aeeb20c58292bc9e93cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=9fee82fbd6bf11ec4c2e8840f93d6aa564a87e3760d27eb1ca70a21c46f4c5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=190e562aca4937887ed22f5ea82c2b0f93c40abdf5963829a59eecf3094bfb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=9e702d506dab540c6df5c61a9aff24653c060cba49d360234dcfdf6ec2c1ca5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=f7dec7bf6002b1d7d74bf8be21025d089f4e38e12a6591d9cc48a95109e094e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746RAUAS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCics6xKfOcLMoYdAT0%2FFGDO5MvTKyGKMd%2F6r4PxQFtvQIhAOFVJhc1UKrezI5BBV5LDClqoVG%2BsLVkEPFxIF%2B%2BSAv7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSo%2BN3WzwKkmPtl%2FMq3ANSOcJvxmDr3AmCoEB00dQsTq34H4uspkgDl2uBEOgZsOyd83ntiFwD0uizJWzykBjBp3h0ynuVDFOgU30aq9gjx%2FlRa4nMzW1dFVwj8u4dWWiAHz%2FPXhOaN1wDfOjsMljLj6nSyHVLQws%2Frdb%2FIbTKLXajmHJmXHNppPEQNFsSyz75qlB5aIlZJlS5dHi5igkIK9DCZKClPQG8L3X21Zj%2Bmi9DQKSBOChOV94RsCvEz1JkYPLaHKqb5Pwf9cyqgXbRd8XOwYL0BufTOO52qL2Z8WkElxG%2FegyLAjGonDeW51cmQA1e2WRbfs10qFt9A2x1aSi0o1M1HaYAUrHEMXz6wI%2Fu7Ktvok%2Bn26EiITpC6d0VOShLDzhdOd6Dq9qelnulKo3juyaj%2BsI3c1Y356xhkfEDPEJ1n6YAmywPVuxwHGbV8D%2FYtDdAbs5oaxgs%2F%2BPYSY9xi5RxL5WujJCF4X0%2FyKFMD%2BmyCxFYanV3XKrjEKSA6RrsNFBpFlisGoOYpDBw9uMPjCyh4%2FbmPut6shPMDGdJ%2B1GfHVX14rha46NfZnTW1qGY1n0yCa6DQhZeChXKhVvPquAip7OLWWmZW5%2F8bVz0lNpTiNV3w7RXwBY%2F5XJaWXJvwkwtoWCtcjCWpq%2FEBjqkAQzJ79Za6qqEsEMlv6Hv8V6anN2toA0aFouJkmAz01f5vYNaK7IPdWxxtPZ%2BH1%2FwgkLtZuwbd4sEN6AtN%2FC8Tc3%2BvE%2B203mEPr7kfFu36BdgEIApt5Z%2Bx5gtf9%2Btau1QnWaJxB9RIhweMpDbKwPijAX8ttq4jvtwunQPlYwslK1Jrf6cRUE%2FOXar78aNx7XzEahviqWpSqFWynWt9xs%2Br1ytCeWT&X-Amz-Signature=1a7ec23b5bf016500191c55442557eddbbf757ba4abbb31aef2da9e78f8c2dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=05446f5e13b6d7d814590132ee917da6ebb6589fb65ffedc126d19766bbaf133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=079891a6dbfab17b4703d09a9bc5ccbe1d9952d4eb6a17d23451c5fa461c6218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=335cf150447ab0b64cf43e61f84009d0c948752330c9f3d3da223efa61eaef87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=40d8ae81ab6171e6176957eae3e601af5256dcbc2fcab6e249b0d543881cf5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=d51d7a1c004bef56962338fce0d137f94d1765f9068f0903bc66e5c4c88cc4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=04b029ece0baa181d2b488595248cfa3be714b6b87c9bab1620bcfc75541defd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5SKQHQ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt8tgK0QsnrIUsBjU17R1Pa8hWOzsJEzBLvvJPmBiB1AiEAkFWA%2FIPgsPMOYOueLroMIBKoJBc%2Brc92mRL8F3jnHRYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZSz4WDWNM28MvU8SrcA1BBFoFpzQfb%2FvRgbqYIKzOEzxMamnH9VEekIrqFrynvD1I1SQ6JekIEDWFXuIxN4%2BeVkdsv%2FDLPFTbx2LL9lxQa5JuOBAisKpnUMmdkc777oxmcahSqiJPoG19TEEQXOOJC2RefuTudTnyEpumcWPHPzLd61E93f8RzMltg386IIX5o7tb%2F0TfQ0s5t0Ps59aeoe2RZJ8xXrakuGit6UbB2AliWyRfVgW%2BTAJdqbDbI9ak%2BHpCY5weio5mRK50u7MCWGM4zEQyGjjWCNYG83PCM46KfB6xU6x%2BVnne5ZMUwRBnpyJNZu90XWFW2mW100hXG0A0E8wo9j2lBHPp7IfvwyMI3QpcWq7fSVrFHzltpGxDntUVoSkfwp26iBLbizo%2B9i4uGBGtwPWuLDdKiUA9h%2FRj%2BZh3AqpvWVfFByMWnvrJEzg53vScjnfMUBEl29vvu%2BvmDoSALRw4hMpIjHjxQf7hsjbr%2BL6uKiTRyXVDYSYCMY%2FJAEOuIJdx6gELkN801RF5SpFE5D9EpcN%2B8XMRKaESh1yLpcn%2FiGJcHUgAGNJ6cMrKTxi6ibe3JJeBkvWbyt9bPBj%2BFCSXGzlUeG4hXNJqS%2Fk1KgdTJQ20vH09B2oly4S32yySjP5zLMKqmr8QGOqUB6PIFmrSmeBOotnYwuvei37fR6fEOSGtnEhaPRfqsIkuTuhnrGXpYm%2FYkV8mEModBwaAERLnQpPtGUM9e8jLF4GNRX7qwV3IgByIDTBV01PsJABGnnPn8Z8lGWsD84duaGt2PoFpDlge7ncXzdoDukUiDkkyl3ovtLsqatXocFI5TQMweoXMfmS6aiGfne8dhOxnPWA1fFsYPjw2PX7d3tISu%2BoTv&X-Amz-Signature=91766e9ec8eacd2985a7ed42e25b1eeb043d3401e43b301cffbc4ab1d9b5147a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
