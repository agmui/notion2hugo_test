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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=2549e5b2fec4be097f274163d1390bc26101cd1286c05ead6a27e893ed646a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=9d1599fcd0437033b83b3ac10adeae04eadab02e7df8970da2f0f5558de30541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=32406f6ca346bab97c3cf735122b761a56c4b38c76a0a07cbdc07c48dd5948e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=4c6205a4dda41d9adb35fd247c1c6dd0799ba0e3de0dc91da940af2c3d05a82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=d24bd4d2e5da9f2ea0837689f687a8e7576adc24bb213081ddd5142581b86e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=46d699624a1e877d4fd563ac65476e4de25fcf6cae56af4ec52e46ba32a18fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=ac08472e276dd9b8c586025a1a3343eec2d1e6dc72b20cb7b933a3790c060954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=f45accb772355c5c7539bf85248d157b2f87c40b0d8c9dc63b949035fed41933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=979a41866e0ea640d3feca8e6958c1d21bb6adac67d1afd79391d8d4cbe2d886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=0f2a7b6c1c5a39a87f228cdbdd61980744265893771bd12630a4951494e980ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=652934c474efaa4382eb3537c4722c0a325230a1762014469e270b0999f5879d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=aa22b426de985250a2f51bce0e7df0750f40c292c3229a221198e8d70a1c59ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJHI54Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFbYDwS5r0kPSzTfnbGbA%2B2GLN%2BITpxbL7ZSjUUkE%2BgIhAIQKitub1th9d2BDflDYZf1B3u6xald6ryvp6%2Bp1y5XFKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMR5jyFbUdyr1ivLEq3ANkPH%2B3T0XVy1Tir5Ido%2Bd2ee2oqdqqjHDSZeXZv6t9eWJoF6R8F%2BcJ8uL%2FsA2ZSHsQL65XVdmAFZVUuFJxzZzBQ8T%2BsxnBLiQdyAnngRuKR4MXcgmYqwU7QKPgSAGX0f%2FXuz6%2FOVXCRoEOD73wg8Z5ScpWQ5YaJ%2BHcG1Kssq4vhEbCpbhcIeBwgPTMS0DVkSa3%2BdRPnlbCV%2Fjv48i8Hry%2Brvb2eLdiP%2BosNb%2B4rULHRntQa6r1jvNHyIvWHCGfCf%2FPz%2FkQSuLMPgDsNrCAmKp7ntj7vhgs8WjRBOstu1KCOX%2BZL7BR4PpPT6ok2l753gPLvKr8XvoPZsVN%2BI1JZ6wFH7NEzQ3L4tbAgX0YrBI31criaeygm8ii1BHvnmAqLBALuLEGEAzZpbe1xFRobm4GG6Ltph18t%2FJXs3BxbTAomBmWDogtNDAZXxx%2BFA4xJGZfeFf5CdXoNv2FuO4zsj3jrOV9XH7G6jtmPiDALe%2B3tFYrOIEXDHoldtzNSmRUm47%2Fnmx30nePHVLR%2B0Owgda40eXRlldBXF%2Bcm5qdSt3mwfm03jSe6FRc75k2pH%2BDkHUonls9I%2Fw7svcGMOjkc1SC3mEnamN1sdzcSjT%2ByVGbJmrbSwrn2LE6Ev94vzCRmqzEBjqkAU3pQqLAs%2BsHsKVqGbTNFjNwC6YJBDubZ%2FjGRi6nll5Y03QfPUBX2PEOmH85OcUCYD80KkGiaQ1oqwPKgzKlFq143%2Fkax3EJuWDjh17UwqgasA0lh3NQFB7c9yjD%2B%2FZnU3IE%2FWFFm6Xc71ZHxAmsuqnV7JlqzPfawaCqspkzjLRr%2BF91mEPGPcs7Fa5RMG5%2FxZEprd1K8LN%2Bo4EZxfdwGMHItl%2Fc&X-Amz-Signature=5fbbe85430e5a3128517ae899fa7759b1258f27440c04edc8bee4fc505e680ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=1ff668a289ccdbad3e4c74d49abfb7fd0c88b15ccd1d4d5b2fd1852a0f527417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=3d9d2a8618c961f15788d55abf49a9cef773d60b508535800c40772a0a243e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=331d5f28e67e57b0c6a6e642bc0396cf802ac43970f406dc37eb535f705e7e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=09ce2dc1ace9690974b9074a55c0b32feb34571d0dc52adc40850cdb1405c5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=4bcf5cb0a97ede6c67cc2becd43ba117d4adaf28f1d7ef98758344fc67e3f3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=63073e80119bcef5fdba72ac40007ec68f3066eebf57c404f519c9450db4d477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKL2EC7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh2G19vpmZQeczlS%2FE5TISWHAb6cA%2FTffCVwU7i%2FL5CgIhALvsdFQTATvXBMHLLg919LMgr8hoKJkx%2BsFhR51D9byPKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9KUegdFYvfSj8fjQq3AMmqTnTBK%2FHSkhdQRN7MX4A%2FwnVd2Nb9WeaQrOFkyI%2BH1YORL%2F75xWZx1Oiing0rKjWIrnbK04MsxcE37bKslo%2BnRSCzxRr4F0oeYxGxaDpw9C2YBpfJa1zR5vaIHblap2mxAgXkw1orrmSf2V%2FB7PASir5A7suafFaiQMOKD3KnWEodyRABME4xpUBEM9rnNwgCPW67U6JAAwMp2m1sWpM4gVWcV%2B2T9nsyspc1rIvUVfZ8Bzr1AJFWvf7LMKgMcYgBUpe3LIkiJo5G4J3C9fLNLqs8rcnKq4hyaCW54u7b1L6RW854jMRe4h9YQDcNacgGQqp19oSDDnGHuPAMp6yH%2FlzunFX%2FLaRCgZdfU%2FSKEDPctyIS4qTIlTwbi9TddXobLRkJZSTlCTe2Uj7w5rhrW1Uyf7pUdvwnUfVQlaK6bRzXseOzUlzkGRK2iJ9j9HDF81OLcsCGRavZGuUqahffqx74wIpLh9D7xvTS9rTzrHJyfi8C8wxLaaurCQ3wLtSEmvWjTo2lWH89wB%2BApZH8lj8LhZEZiI%2B8VHCeaXcsMCuinx7QkuIKyTai3o2JDRXuO%2ByPj9NwY1Q3gLVKJvncVfc53XjZP6aRYhyCnloNY8MratjkPXcju54PzCqmazEBjqkAajW3eZClzYGrBjWsOEUgn%2FExU12hqdufMQ1NKut3bcKPQYNXcXbKlTbW9dJCSsoCJCq9YxG7nK2n2Y0w1CoUSbNInY8f3q2cVl3v9l%2FCyu5RJG%2B47jLE3k%2FGjWJHtXV8JISLFvTpa%2F8otpiCpqePK5wFtMXWABHclpTDVsilC9zNVnuYjXFjjMc5ygZ977Rp6BwBR9WwmM5DGG1Ihbl0O%2FPgjMo&X-Amz-Signature=b6d00f8c727c78707212de6ae291ff763491a4869643a526aef6c8943fc0d8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
