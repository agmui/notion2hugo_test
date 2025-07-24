---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=7ceb77f5b6b1ac7ab3f76f5f345f13cb7471eba52bc43d00d72314ae704da834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=c4b77ca9725332ae3a23082cc863f686a481e83b73725b7d44f35e1a39f22c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=ac9ab4b758c7c258799d847840f7ac6510cd05fc8e9ba9eb4c1e5213369a2421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=d212350b50aa392fd1d3fd1ecf07ddeb72d58632bdc2d3b28a5141d6c7e568ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=ed4d331d2967892b04e5ad4c5b602cd7319ef76d9ca05cf27428ff039e4cf957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=f741036efe27311d6b877f2266873b0a4aa419c7022ea54ec9e098801d6a183e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=af19798b4105beb56ea5eac78d69aa63ba3517ce2a5e14087787cd91709fa825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=08f08ba5d181b32ba6a525282040232f5ef58f2ccfa66751db39d8d7628b37df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=d3eedf2663d8fef45e79740a5a4f8cd743b7ef4de5d61ab768ac364e1a6fc7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=f3a311536dda5ba1f33bfa9cad8a8476eb72c46cf5dcd1b06037936b092637b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=987f0c0e4d2f3299117f75c884e60217e029ef3a62d59b3bce3d0c239d2d00fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=c179585cf12fab57958fe4d54966894081c35f70349e61a7bf6189d7937ff503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=6a1f7aa6947e066409089066020e302f4081350e5a7dec8ba081a59f28d4b484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAM3NNZP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEQRqGEOjOqatb%2B4eseOyZSTptn10SX160tPcuAv3MrCAiBkDpMHNeqObNmvp%2ByaAkxInBWYnG%2Fgibhfk12Uw3J6lyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMghfxxOmeBovRYjS7KtwD61CcKVloo5xnj3D%2BqeAttUBwrgt4yv%2FiUi6ak2VS%2BzJYW32W10YO71O2YssUTLmrD4%2B85Oz4b%2Flo2nalmgoTpYzoBpjIpnSVVuBQ4YhRJiBpHr%2FQOIploQvXd5OJGhBNDrKwowejYIFMl3Rur8mNumFiQV8lOv%2FnCIkV%2F357Lpsznjxkagyt7lKIy4PrCa412R7O7aBSKQPnYPnf2GDZetxH3G1%2FNoaxH4L6K1yR6EYrJ%2F2%2BjQNv8n4vb605dCT2hCZM9yFYieR5ng%2BFrcJ97I%2F3HTu5Xct5MuWIDNPBXncd8uib8rlXWYG2uR2B7gLBEXUVcqjDQMgJpV53R2hziEv3Mn96fG%2FDC2yRZCX8O0rQvSOOxkRvvNiQiegu%2BN9YDvuKfPYKBA1xZzUVh8n4clJoewikejfvHdgobl1N%2FkN8o94gRqYlrkTud0bNnemGFWdisg5chis2m88OahDFH55JzbA7X1pCbF1wsMl3V13AdpHDuq3H%2BS1IXoNFqMhbwySTQg1Bgzm%2FwLJq99ny1IAUgncpH56MVn2f%2BbgqPi22EzsnMIBwQQvpgjBY6d7vdjU3M4f%2FJ7w4%2BiGZ8Rhoc4yi41aH0QPmxpaCOq9UW7k5hlaOB79WnTS8Gdkwx7SKxAY6pgGb9lpLfcahHv3tNKzVdQRo0AiLnYIf5Htj%2BoPQa0pk1LW2K6WvyBAOiPBLZbpZJosCkWsBtdRubkwwo%2FOxVUeTErJe3Jq0ADeZZfr6JCf7sds40CwvI8ZDkjaH%2BrCsZb8Kmdi2W2PpUteEbWSak1RrEBl9u8lk1iQeg8jG%2F7wQsigL5yUoJ%2BD0ANzFF4Ne7yYRSK2wx3lMhcVO0LvkoVkQlJsgXzUa&X-Amz-Signature=10c8c077bab9425abf9c07385bd438a72bf86918f890ddc134cd43cf0f2de9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CKUH7P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLpLi0phD5PFHxvy8OnLiH4cpBa7tkaQrTsIx8A0%2BR2gIgZ9v7ts2W%2BJ1IvogacnkMSwcXrRWcF%2FKdWlFu4wbUFBUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCd64POAqtnBS49fKircA9CNaftRnj%2FoJ0EE%2BlWpf7zKkBglyTJywUQt%2BBYAGOb%2FmSGGTEBmrb%2BiQ%2B7oO41fXgVnNeHQqOVeQh%2F3khIOgWJInmpGtvSidgk9jHwhuHWMEGdQLPepFHu%2BLQXuBE5fVAG3bnRMZPL5eIMr0UQdqdjyn5qNeZ%2B5J8Rsg5r1sOaSstPXrxE%2Fr2RNr1YFRyIzfczgRVDnEyOcbYcyEfIjOvk8ZIyCWfaez9jRoU9mymORp0BzKx0mp8ISy6S%2BOC6QTYwwQLvwxpJJE%2Bm05fR688hzE%2Bb9KZVIoIy7UyHnVLvDCmM519WkmCEACVi6J0AA8bFz7sXO%2FmLVPeqkdZZfLqv2qxIfIDh7DpY%2BPXZOynZmXNCeFOKLkztOkYrvifCGj9D3vrMjH0S%2BOfc3DJik2cevpjcUFWDP9pBmi%2FVHvIOQ7fnKMnzqxFzQxzWy2cAb2ixbaakJEi06kv5coQGZq2XYPuxZca6iIYsd57a2Ru3%2FGHEwxCeQZfYZP0LHCwoA8AM8TIabQHo%2Bos9I6NcJfbt0b2iG3%2FepK1X1NIuiFQkD9vaVfY4g37edFn1%2F0ptNTN9H7naRYQ5s8GVM0iFANTSaMCurcULImQm54n8JMeKNpgO6TQEiTZNlyrBjMIe1isQGOqUBqMFHmV1Wj932HaK4ksCwG%2FJAfk%2BAZ4k4ShsELubCLTNSMa6xS0sqkK%2F%2BbAVO6MFMKt98wlG0qtlDX2%2F8Q9Jb9B%2FfS9NbJjbV0fq1INe80tx%2Fm1gsfeUS2OxhR9W2gzF0oVQuistIVSp60Lo0iEt6r6l6yFpImtjUayZazSRqCCuzHVw4HVOoi3mQxFZb7ubN9OK7DWspPgATm6Xx7YulhG0Y9HgV&X-Amz-Signature=48650e85f3ec925ce14de4971fbbc9f4617e667d033755f648632d3e5e1ae09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CKUH7P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLpLi0phD5PFHxvy8OnLiH4cpBa7tkaQrTsIx8A0%2BR2gIgZ9v7ts2W%2BJ1IvogacnkMSwcXrRWcF%2FKdWlFu4wbUFBUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCd64POAqtnBS49fKircA9CNaftRnj%2FoJ0EE%2BlWpf7zKkBglyTJywUQt%2BBYAGOb%2FmSGGTEBmrb%2BiQ%2B7oO41fXgVnNeHQqOVeQh%2F3khIOgWJInmpGtvSidgk9jHwhuHWMEGdQLPepFHu%2BLQXuBE5fVAG3bnRMZPL5eIMr0UQdqdjyn5qNeZ%2B5J8Rsg5r1sOaSstPXrxE%2Fr2RNr1YFRyIzfczgRVDnEyOcbYcyEfIjOvk8ZIyCWfaez9jRoU9mymORp0BzKx0mp8ISy6S%2BOC6QTYwwQLvwxpJJE%2Bm05fR688hzE%2Bb9KZVIoIy7UyHnVLvDCmM519WkmCEACVi6J0AA8bFz7sXO%2FmLVPeqkdZZfLqv2qxIfIDh7DpY%2BPXZOynZmXNCeFOKLkztOkYrvifCGj9D3vrMjH0S%2BOfc3DJik2cevpjcUFWDP9pBmi%2FVHvIOQ7fnKMnzqxFzQxzWy2cAb2ixbaakJEi06kv5coQGZq2XYPuxZca6iIYsd57a2Ru3%2FGHEwxCeQZfYZP0LHCwoA8AM8TIabQHo%2Bos9I6NcJfbt0b2iG3%2FepK1X1NIuiFQkD9vaVfY4g37edFn1%2F0ptNTN9H7naRYQ5s8GVM0iFANTSaMCurcULImQm54n8JMeKNpgO6TQEiTZNlyrBjMIe1isQGOqUBqMFHmV1Wj932HaK4ksCwG%2FJAfk%2BAZ4k4ShsELubCLTNSMa6xS0sqkK%2F%2BbAVO6MFMKt98wlG0qtlDX2%2F8Q9Jb9B%2FfS9NbJjbV0fq1INe80tx%2Fm1gsfeUS2OxhR9W2gzF0oVQuistIVSp60Lo0iEt6r6l6yFpImtjUayZazSRqCCuzHVw4HVOoi3mQxFZb7ubN9OK7DWspPgATm6Xx7YulhG0Y9HgV&X-Amz-Signature=2f2203874bf7dbb180ac9d56a61529a275355cf1563f55c645a04be44722cfed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CKUH7P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLpLi0phD5PFHxvy8OnLiH4cpBa7tkaQrTsIx8A0%2BR2gIgZ9v7ts2W%2BJ1IvogacnkMSwcXrRWcF%2FKdWlFu4wbUFBUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCd64POAqtnBS49fKircA9CNaftRnj%2FoJ0EE%2BlWpf7zKkBglyTJywUQt%2BBYAGOb%2FmSGGTEBmrb%2BiQ%2B7oO41fXgVnNeHQqOVeQh%2F3khIOgWJInmpGtvSidgk9jHwhuHWMEGdQLPepFHu%2BLQXuBE5fVAG3bnRMZPL5eIMr0UQdqdjyn5qNeZ%2B5J8Rsg5r1sOaSstPXrxE%2Fr2RNr1YFRyIzfczgRVDnEyOcbYcyEfIjOvk8ZIyCWfaez9jRoU9mymORp0BzKx0mp8ISy6S%2BOC6QTYwwQLvwxpJJE%2Bm05fR688hzE%2Bb9KZVIoIy7UyHnVLvDCmM519WkmCEACVi6J0AA8bFz7sXO%2FmLVPeqkdZZfLqv2qxIfIDh7DpY%2BPXZOynZmXNCeFOKLkztOkYrvifCGj9D3vrMjH0S%2BOfc3DJik2cevpjcUFWDP9pBmi%2FVHvIOQ7fnKMnzqxFzQxzWy2cAb2ixbaakJEi06kv5coQGZq2XYPuxZca6iIYsd57a2Ru3%2FGHEwxCeQZfYZP0LHCwoA8AM8TIabQHo%2Bos9I6NcJfbt0b2iG3%2FepK1X1NIuiFQkD9vaVfY4g37edFn1%2F0ptNTN9H7naRYQ5s8GVM0iFANTSaMCurcULImQm54n8JMeKNpgO6TQEiTZNlyrBjMIe1isQGOqUBqMFHmV1Wj932HaK4ksCwG%2FJAfk%2BAZ4k4ShsELubCLTNSMa6xS0sqkK%2F%2BbAVO6MFMKt98wlG0qtlDX2%2F8Q9Jb9B%2FfS9NbJjbV0fq1INe80tx%2Fm1gsfeUS2OxhR9W2gzF0oVQuistIVSp60Lo0iEt6r6l6yFpImtjUayZazSRqCCuzHVw4HVOoi3mQxFZb7ubN9OK7DWspPgATm6Xx7YulhG0Y9HgV&X-Amz-Signature=76a664487d1cdfc7ff8cfd0eaadb050af0fdccf0ee44acbee2ff97f2d1764855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CKUH7P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLpLi0phD5PFHxvy8OnLiH4cpBa7tkaQrTsIx8A0%2BR2gIgZ9v7ts2W%2BJ1IvogacnkMSwcXrRWcF%2FKdWlFu4wbUFBUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCd64POAqtnBS49fKircA9CNaftRnj%2FoJ0EE%2BlWpf7zKkBglyTJywUQt%2BBYAGOb%2FmSGGTEBmrb%2BiQ%2B7oO41fXgVnNeHQqOVeQh%2F3khIOgWJInmpGtvSidgk9jHwhuHWMEGdQLPepFHu%2BLQXuBE5fVAG3bnRMZPL5eIMr0UQdqdjyn5qNeZ%2B5J8Rsg5r1sOaSstPXrxE%2Fr2RNr1YFRyIzfczgRVDnEyOcbYcyEfIjOvk8ZIyCWfaez9jRoU9mymORp0BzKx0mp8ISy6S%2BOC6QTYwwQLvwxpJJE%2Bm05fR688hzE%2Bb9KZVIoIy7UyHnVLvDCmM519WkmCEACVi6J0AA8bFz7sXO%2FmLVPeqkdZZfLqv2qxIfIDh7DpY%2BPXZOynZmXNCeFOKLkztOkYrvifCGj9D3vrMjH0S%2BOfc3DJik2cevpjcUFWDP9pBmi%2FVHvIOQ7fnKMnzqxFzQxzWy2cAb2ixbaakJEi06kv5coQGZq2XYPuxZca6iIYsd57a2Ru3%2FGHEwxCeQZfYZP0LHCwoA8AM8TIabQHo%2Bos9I6NcJfbt0b2iG3%2FepK1X1NIuiFQkD9vaVfY4g37edFn1%2F0ptNTN9H7naRYQ5s8GVM0iFANTSaMCurcULImQm54n8JMeKNpgO6TQEiTZNlyrBjMIe1isQGOqUBqMFHmV1Wj932HaK4ksCwG%2FJAfk%2BAZ4k4ShsELubCLTNSMa6xS0sqkK%2F%2BbAVO6MFMKt98wlG0qtlDX2%2F8Q9Jb9B%2FfS9NbJjbV0fq1INe80tx%2Fm1gsfeUS2OxhR9W2gzF0oVQuistIVSp60Lo0iEt6r6l6yFpImtjUayZazSRqCCuzHVw4HVOoi3mQxFZb7ubN9OK7DWspPgATm6Xx7YulhG0Y9HgV&X-Amz-Signature=ac88caf01af6ae92696bd0d1da0fa5f8bec6c40805d0d8fe8be5e3f2706559ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CKUH7P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLpLi0phD5PFHxvy8OnLiH4cpBa7tkaQrTsIx8A0%2BR2gIgZ9v7ts2W%2BJ1IvogacnkMSwcXrRWcF%2FKdWlFu4wbUFBUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCd64POAqtnBS49fKircA9CNaftRnj%2FoJ0EE%2BlWpf7zKkBglyTJywUQt%2BBYAGOb%2FmSGGTEBmrb%2BiQ%2B7oO41fXgVnNeHQqOVeQh%2F3khIOgWJInmpGtvSidgk9jHwhuHWMEGdQLPepFHu%2BLQXuBE5fVAG3bnRMZPL5eIMr0UQdqdjyn5qNeZ%2B5J8Rsg5r1sOaSstPXrxE%2Fr2RNr1YFRyIzfczgRVDnEyOcbYcyEfIjOvk8ZIyCWfaez9jRoU9mymORp0BzKx0mp8ISy6S%2BOC6QTYwwQLvwxpJJE%2Bm05fR688hzE%2Bb9KZVIoIy7UyHnVLvDCmM519WkmCEACVi6J0AA8bFz7sXO%2FmLVPeqkdZZfLqv2qxIfIDh7DpY%2BPXZOynZmXNCeFOKLkztOkYrvifCGj9D3vrMjH0S%2BOfc3DJik2cevpjcUFWDP9pBmi%2FVHvIOQ7fnKMnzqxFzQxzWy2cAb2ixbaakJEi06kv5coQGZq2XYPuxZca6iIYsd57a2Ru3%2FGHEwxCeQZfYZP0LHCwoA8AM8TIabQHo%2Bos9I6NcJfbt0b2iG3%2FepK1X1NIuiFQkD9vaVfY4g37edFn1%2F0ptNTN9H7naRYQ5s8GVM0iFANTSaMCurcULImQm54n8JMeKNpgO6TQEiTZNlyrBjMIe1isQGOqUBqMFHmV1Wj932HaK4ksCwG%2FJAfk%2BAZ4k4ShsELubCLTNSMa6xS0sqkK%2F%2BbAVO6MFMKt98wlG0qtlDX2%2F8Q9Jb9B%2FfS9NbJjbV0fq1INe80tx%2Fm1gsfeUS2OxhR9W2gzF0oVQuistIVSp60Lo0iEt6r6l6yFpImtjUayZazSRqCCuzHVw4HVOoi3mQxFZb7ubN9OK7DWspPgATm6Xx7YulhG0Y9HgV&X-Amz-Signature=e32b9cef9317e5934b38cf43caf820407e3042b4c2bfd10e3b3ea47659d43223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CKUH7P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCLpLi0phD5PFHxvy8OnLiH4cpBa7tkaQrTsIx8A0%2BR2gIgZ9v7ts2W%2BJ1IvogacnkMSwcXrRWcF%2FKdWlFu4wbUFBUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCd64POAqtnBS49fKircA9CNaftRnj%2FoJ0EE%2BlWpf7zKkBglyTJywUQt%2BBYAGOb%2FmSGGTEBmrb%2BiQ%2B7oO41fXgVnNeHQqOVeQh%2F3khIOgWJInmpGtvSidgk9jHwhuHWMEGdQLPepFHu%2BLQXuBE5fVAG3bnRMZPL5eIMr0UQdqdjyn5qNeZ%2B5J8Rsg5r1sOaSstPXrxE%2Fr2RNr1YFRyIzfczgRVDnEyOcbYcyEfIjOvk8ZIyCWfaez9jRoU9mymORp0BzKx0mp8ISy6S%2BOC6QTYwwQLvwxpJJE%2Bm05fR688hzE%2Bb9KZVIoIy7UyHnVLvDCmM519WkmCEACVi6J0AA8bFz7sXO%2FmLVPeqkdZZfLqv2qxIfIDh7DpY%2BPXZOynZmXNCeFOKLkztOkYrvifCGj9D3vrMjH0S%2BOfc3DJik2cevpjcUFWDP9pBmi%2FVHvIOQ7fnKMnzqxFzQxzWy2cAb2ixbaakJEi06kv5coQGZq2XYPuxZca6iIYsd57a2Ru3%2FGHEwxCeQZfYZP0LHCwoA8AM8TIabQHo%2Bos9I6NcJfbt0b2iG3%2FepK1X1NIuiFQkD9vaVfY4g37edFn1%2F0ptNTN9H7naRYQ5s8GVM0iFANTSaMCurcULImQm54n8JMeKNpgO6TQEiTZNlyrBjMIe1isQGOqUBqMFHmV1Wj932HaK4ksCwG%2FJAfk%2BAZ4k4ShsELubCLTNSMa6xS0sqkK%2F%2BbAVO6MFMKt98wlG0qtlDX2%2F8Q9Jb9B%2FfS9NbJjbV0fq1INe80tx%2Fm1gsfeUS2OxhR9W2gzF0oVQuistIVSp60Lo0iEt6r6l6yFpImtjUayZazSRqCCuzHVw4HVOoi3mQxFZb7ubN9OK7DWspPgATm6Xx7YulhG0Y9HgV&X-Amz-Signature=82ece5441e19261804c00e497054d7eb57d6380bdd31500559485aeab5f15b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
