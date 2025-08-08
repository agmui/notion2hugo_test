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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=202a413d703cbff2a901e01fc1bd885eaef93df6cbc1b5f4ee22366c6cd07826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=31ccdbed03d67439eb94b4fa1c2fd29458ba0bc48a835f90d30d5b6b2c3073a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=580d7aa468ef0ec81178ab484aba35d23be9b6099fd5becdad88dc2522be99f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=1da63b5234de4b124bf68094c4038ff8a5af119426498d555e3bd7234a274c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=c28e1557ed9a1f425307ab7aea7a040319bd6a3c8ed72497addfc266ace719a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=b87b45849265ed0349d262ec8c64e177b22fbbb3baadb28a3c2779a669f44f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=b39432ea80937f181c7f708f98a4d82adf9279511908b09ad5e3ad0822719366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=ea78631e34fd3a51f0e816f7f82fe23f61425be6cdc769c285f4c63daf5b0947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=8890a5cf1e2c2151d4bd99bd0c240d64f4b94c383f8b20115d9d7155617faa8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=b0a057566ca0e202cd8b3dd6efeaa6c25919362925ab47728c09b15afaa75a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJ3LFZH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGVHYHakEREMcJjiAyeq5wVn00DRZDc%2BVdn8o3KqDaQ2AiBo6E18yHZc6olPVyK98Esk2A879oYR%2BnchZ19uLGyvoyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPiLM9rWbnJEV8uS0KtwDLMzflimhz%2FveCxDHl88AlSRqs2ZyrLwtLQOBgX4MTsXBMZrj0FTCVfClOaV8yiNmrb6ezT9%2FF6VbNY7sINpTyKq1PF8%2BrtQYvQTB4o%2BAYVHHzbCUJQN2pOkFYBaATT0MLyiEvNru4aLA3nf95fGn4ysZORHG6seX7VPt8TEOgP%2Bz1s0%2FGbeaBNzAPyMeKNLBhfX%2BdJrBSe%2BnwKyVbL%2BGwStrQ4rObPEAqcXkotUo2q40jpIlaLtTCO9%2FJ1JsIS8uSIwtoFPeVDM%2Frg%2FkC7q4IDBzxsxrPL9ITDeoTKIbnUnbo82nCl%2BcRiR25ah5xnUPQHAG%2BYOyfrNEnd6pVIxxhvT3rkSgJ6b59Um4XRVczQmaD67OL94yruHZrVJZrdcRG8P9rgHVW0KW7hFEksMDESZvSR%2FdIaQ2%2BVEasBPlzY8Jkm%2F%2Fs3mnhgvUY42C8h%2Bgrv1iqLC0v50w%2BEoZk90dXPMbAGrsVBx%2FwcbZoJAlmupW%2BW2D742NR%2FyE2SymGkNWscB1F3QIMjK%2FGQRVKv20F4MkUyMOno8YB8jVEZGxlmNeKboxKIFbDZWwzwUYFALA9SLYFQDhxxKAQ7%2FBLMZoMFgRklPp85y%2FM7SyyDI0gMKBMLpDQKEeM1cmqLkwodPVxAY6pgFqvr9KUSv%2FzAGdzMPFs6YtmnHcpmiKE0Z01u0uEU04a9bSwPtyTDXLpWkar%2F%2FRZwxyjTLdwjM0qaKDvb3va809gJijAafCZPTKkXzWx6j%2F0tYk47C7U4o5vBT4FdJ8Ot04U6EsBYeUW6%2BZsHXoWIldTUyCjoNjts16YnVgCKK1AhaVq6ViApZuVGkGctO6jlx%2BMzbD3ZTfaGsljSG6QubEBchNgTQ8&X-Amz-Signature=1236c3e6d2bcab4a3d39ec2c685a933bd4e9029d1a166804a7e0b73329560cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URXQZ25%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGygPH2BZeUgnEUfr2PROtmabDgzl%2FnP0wlDnZdgozrFAiBX4xkiYekAM5XiJhznOwhUgfrNlBDs2V6gx%2FIgec7EByqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIvb0MXTM2Qlq8H2KtwDQgx825ezu8XGAq9lU5tsQ2w0AhXFOfZBUuY4qOj%2BoKdc8eIr7U4dMZc6DhUVVX4vNuoxQtPiDbk%2FA%2FQbBRtWSiaFO1%2FC9Eifno8xebUw9LxLpEWOraRDNVN67%2FP7UcyhgQk4rYHVEwyChTDcOzTgd%2FkeeA7x4Yb2pOfclixx24h3XQHtwtV2CAR39pR8lrj0IBKUvCVHOJ8M%2Bf5bwZ3qeHGMmadPLHgQXnu9SM7hWu502bULv7lSkuay2aWUEki2exdQILYWkVgR0lEfazEoDsmkAm%2F9Vhb3IhjX%2BNh8bh3oUWUR5w2Sjn2QiwV8oe58otjiefJH2hyPTmSQEo8GkA1emvdrKGKRdYgXcYAiXSfAIYyYSBQOOif4clCuI5MVCG513U5I28tEEbYeSzFbWLHJBqrD0WUxKwJyldw4wkN3AgGnRtz7uKBV8TMlLioCvSAGvvEGGFDqSowd7v8AbwHmPHZfggTwAelhNTUJ3QO0wRHNger%2BTJwWRu9g24HOBGtqDuN4CV7cza64qDwKJhwuln67RSHFP77rH0cBXIpfw2WmoCfCsocuyaWhN6EIGBtzSoyBi8NBXJjKtkbNmgk8%2B9xejvOLhSdYEtJ3DJmQ2k4RcKWv5ClmK38w2NLVxAY6pgGWbyU4A%2BibAvPqAhDroehsDItn0A6Ugt3uUk7NjRlCw1HQvrFLJKwp7S3EeweIGd9%2FQIGUb81WrGLwio9Nwxo3qL%2BMvLx%2BvJUFer%2F%2FF3oq2cJzXxTAWzX8upuwPRiuH7Ix66cBFHrGy18aFIYseUIrxLF6lL%2Be3SRJm%2BzCBhY7kPMa%2FZORitC7lr6f9QBhw57TOSGHGuHQqkeos22olFZMUKKl3VnS&X-Amz-Signature=57165e8feca7c39599a5f56a73e8dcd950a3259c98e8058c3b9e3c08e9ca2602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJFTOH7Q%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBAasttucbV4ypiyTO92UIm2ZylHNzVH%2FJXJ9NdlEWjbAiEAnge4yVgm7hRafM1af%2FhzUpDSTRHBHbxG7Wkj1HJweRUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGphBbZ2hTuVzl9E%2FircA%2BR6vodqA49oqe1u4w6u8d3FoUj0slMi9SItEyT68h5Cj7SxPU3gYqvK8TrdrsbtgIY2WNT6gCiYwpm4GjhreYRN9pCDZ0xczICddVtpfBnxZ0zLXctjhPSXw%2FzP78BU3nxe2bYtsjv9z8EX44EPsGvQzffJNL8hsa8XmEGHVcSFywH8T%2BNN%2ByLrLGIeLASPqJKytuE0viKtkgkjZcDkuMx0IM%2BWoOr5nyF6MMTX2UZgpdXTzzfks2bLaL8qIgz0K5FCxVFhE%2B%2B3xUf%2Fa%2FL3JQXdo3%2BIejy7GF1PdRVFoPk75bXLCDGlyKpTNSqirf2iKnUzehsip3AaY6WDFPH6QKTl0Zs71nGIS8QtxRS2t%2BEcwwcAD8mDUFgUZhbEDl3EdmlccDeIDn6titXgeRF0LruJWkK22a4TNeRAn14Y77qBN%2BiGW1u4Ym9IN1wpUYmgUJ5h9NS2RCEfE00OqIwSxzyr%2FeNc8tINUOVVlFsw%2Bld9RrfUoLVOlNsPW%2FEnZ17rdnCZUDOnMccaGBfNuIJV0PBk580HUS0mw%2F%2BknHk4obedVPWz6KEHdewDa8NLDq9h%2FQST0tpSG0T%2BN5Vp4meAp5WPO8vxlJVLR7BjQaboa0XieffdjrVbbB%2FFd%2BNNMLLT1cQGOqUBQwNo8xGfBWimBKx9vrqAoJI8%2F8EZ62Rd9Re3dx1LVZC5nL1pP9G8QCNGUUBkijJlgR2R5mNv31q2DX5PGr42QRI70HuH%2F2IPOrJCGj7957iAb3S%2BukrdscEdgyOnaEayv%2B9ZoDScv9N35D3mPHqGHd%2F9UcroFxcm4N1aUMu7C4K4o02cJnRITPMItUmYm07GnXMMMVoaZkqKX30Yit%2B0lGpOPokX&X-Amz-Signature=abd18b19b9ec1be682f78d210e7be08b1869551372889582edfdbc93cdf65382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=4b6ad6eca46806f6c2f5925fdc38d203ec87d9d928e696d0f01ab95b214507cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CHN3XCB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICdCPt1UDLohTaNCNmgGs%2B3KD6kANnrUZlD%2F1R2px6dUAiBOCt4%2FMCUDVoI91TtB4wLUjM0wko6woowUPw0B%2B4%2FJNyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjizGbAY8r9WtEGQEKtwDrqttqypu4lYquU0CeaKv0wC0TqhoXlTSmDSVHdlaccbjiCUypVHPwlRQeAywEfTtcaCAEvNoldt46x8NWJmIBwYIncVNRGTaN3EwfoteUPx3nuymDh36%2Bv5vO86PxzRNc7%2BKff1LB0KoKLHFVupFe0feif3zMoyTgbOFxM5jEXxEmW0Sx1DIx04g0Rcr5hiLSX8JCpTfMqyjaTQAyoKvs7GET%2BaUBrq2UFHcq0tWPWaREEg8uCa4NzWHzaR1P%2B973UInZwxX7AJwbpEmAcd%2FvPpBxwOVW7%2BDQQrHa1JgGhOt0ofrZEaL47c49eYzb%2Fh7Zknh%2F07puRRu8%2FUK9vjuIykR7lRxCLZhousTa2D0MRZu%2BknuSsu%2FOHmcYzT%2BIC8eKbWQi3jKzBXOhklZx%2FJ4uxWPnZqTyN8%2BKSHj0AIdaa7EgF2ReRH7Zd%2FxmD57qmTGfWhIaFuY%2FEz29ndZ0fhhz3FQ37tICAVcZTwHa%2FBO7IfxC%2BWH%2BeR1h2vt5E%2FvxltwBrcoAqOHJ%2FvFIbexSgLVLWHVB7KlhUwPTIUuxb7E8iKmtxjcNaysX1PXkI8qx11UvG498yrhRoK2%2F2SjuEDNMjZ3kTQe4dDfPoqxN1MbF%2B70OOqUbmzyB43NBuwwgNTVxAY6pgFtfTqcKqUyhB3kfioeNe7QQlKFGJNCSL0Q4Cjnteci8UToWdxpDby9xn5yT4Bkvv5vG%2FQgawEOqfkFeBgVE8rXXflftwPyhnyK0upm5%2FWm3dsXwhAZ9k1QhKXjQs1H3wG6ImNwnuuwjZ2tBlgKwioggapBFDXDCCuJlhrN%2BWGcnYsbksCVMyY8yxmfqvGXPbga%2Fyf9BjO%2BG38kR1sq6Vm38Qk9unA8&X-Amz-Signature=3a231be165645ee89eae7e222fbba76f7e2e0266866a7d8e648615828595dafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=0d3a20c968ae08511104769f9b1fc7e97a31f635e307fe9f2ce61719938e8fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHJHOZ6Z%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBkk7g9JhuXPpmsqweTYDVtqL0HRIxzJJFZfU0%2BQFD99AiEA8KrJczWcfx2tCroGAzDgIfpBpVGI%2BatwLITwJ8s5HbcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbZlTdIaZTIVrgR1CrcAwtLASwVNGhDEHZjyitUaJY6nctyw8hSGUG41QRKdSIGyKJklXFD2ycx5K25qaC3%2B5GWNyBiefVNahKtii5uvmrN8mvbLCflrKlWWyEPMNgxaNUwI26qJqa6yH3HhcIN1MAO6t9cTLjMl27bF3Y1ET8PZJdBXZRugIi3BMbbObwd9T4Jo7eYJYsSV%2Ft8UqMyFtKwCJcJeAfjlt3oLSxmpqszJNahhxJ%2FJVh8oKxDXLi8dObjfoKuF872PMV9kOYLytB5MOe%2B79FypeVkZTP7%2BEwBFlXNCGxh1Ve%2FA0cR6SmT%2Bvjdp5EbVFcg4dBtCpDfrU0YcmZVPosxzoShOVEXg1SSiX00Y1r4zdBnfNGdqXnWDn5K2aM%2B%2BvStAQin83ZV3Mq5X2bNloi3T1sg4KRqj%2B1ExoCo7s2i38xbHAY9AotdtKdUV41uQGK5Iq%2FDr4%2BsIPJvGnpz85jhX6pKr5B9OI7%2FTwRpEXAShslH8q6itMkPzF2YdDi17guT6HUdLBUldKc4CeUsI1zGyEhMUWA7yuxBT9Bvz6YU%2FyZ%2BCjBBmENAQlx6V6QxFfPS3as0M2mox0A%2FX8kLP%2BNko20l3tLHD7n9QCVyo4B7vZbRg5J%2FSCvCpvGjO98RTmomYX%2BDMInT1cQGOqUBDRP36ulYSEZT7Gae98XuesGtaFPhjizbkwcHQi1X%2FfKvuPRU1VMRe6fp63hhNAw4GYb3k87cMDp9Ud14u%2B%2BKBwbKvum%2BHc79KNqYM1hK1lZQmQG1Tho5R%2FVh52lOOoJdVtm0GcS9PGYjPd5sMP8Fs8CRzHs3QuRJNimEF4Impipbdz%2FteF6IfbCdwtcqMjup%2F2xav%2BLiB%2F4MANGT%2BtkP4AXp6iD7&X-Amz-Signature=e2fd4550528d6055de3e541760f67d70533e18ceb524ce9eba364e53ae2caaa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=e2266626107c25d5366fb6e6443bf28726826ee2f6acea2694fcbcce7fe1015f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2E3EPS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIA6sMRmYw1m1aNHqOO2p8Lz2tJ%2BGlm%2BOlRBfe9wslGjmAiBcrxwyaU0wglBkXq0IASpzenGO1aSyoen6wAZH8POqhSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FBHZfd9quazHc0%2BlKtwDEKR%2BLuGJj0Oilz%2F7%2BTLBApptPhyY0I5m95mCbdhct1RGzbN9oXqs5LdONqTAJES%2FjMB5gMCP2FENzCMmdTUCYFi8Z9Ii4Fm9WymnWl9uV46KdP4urcrgGp8bS%2BiGHa4OImHYXpQgGc%2BZioleyl2qecYBCC9HbtzPpzNbGRu1hT72hBbNMxRfgIJp7KiDXXUVPUwiE17%2FI%2FEz71BhwGYEHlvni1bv9rxy%2FVZaR9uH8nPzLnlBDQXPOJ7xhRb9ZRS8z0hHbr6c2UidCJbNjsrwHylzwwVdiBUxev1B%2Fc419GDKKN3pxyy%2BgqtddsCcomR2rl62b6LuRk8h9L6PTS1nMim6UC3IY%2FZ2lsS8jPnCj2pZjidxIq7jG3jWtRkOI4ZcafsENu%2BuKaBHUrWGvV2suZQQkyQYLCXHyvFKSm8C4EwljA52w11BRvERp6ANy3HPfcFn9GnvJH%2FEQFvayClZP2Y%2B0VHvWjVUKLp%2FcU7TZtDxgC1Iv6jQ6oDtv746xsWQon5Jy%2FsKVltg7ZJdajE6jrUbyJDoLmuQBGriBPFxShzjOEf6LCiDfLagTefziWsQPjxuFx%2BDPAp4t9E1HWP5Cl6xlKxMdFIKNFGEGjrYcGKrfmnIMo9kdE%2BNL%2BEw%2BtPVxAY6pgG5jxYqTxG4D8g6ZKX4wa5%2FjZEYKFpfCLpEd8hgc4um4c7LZsOWrbcHqhIVs0nvO8L8y0y7MiWExfhNxuHbWQThI5F9PmQH1eBshiaqKheNnlN3XPBJEtpbeN8OlocSMfL3RRemHstobvTDGSacPeUkGTgC%2FvgLnZETYGBrjWYRNkZXfB7oA2vV%2BrG6CMcm3ttK7YG9BWGlY1Uuy6Vn9K2zHHgSi8ic&X-Amz-Signature=c0e1d39ffe4b1e94e12f8d32fcb21ac91da1f1d863ed79242aece2dc905660b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=801048739eb3ca8d55efb2ab6c163d5f4503f3627382f8a2ecdf5ba6d4a946a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3D7ISF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDCL36fYo6WbrsuVTL6OTxwMaEf8zQvBpxO%2FpsHnzBVaAIgGQolxl88CC3WEVZifsBOa2b1xALPsuZJ04EPgAQG8z0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPgead3DrpZVNb9rSrcA1yPBzy%2BG9pr42n3WT43c51op%2BB2UgYtFxQ9On%2BceMZT6BXXONASDU4YKO3PoswyrkvVlwjQPuHWMMHqXMhkmwjtmSM3BCCPaKfQL4CTuSKaA7%2F%2BVDmeBdwWlwte6lanccOEfWmCciF%2FYUS2pKrGjyIM%2B2X5vhw90EsDWLLuY2N45Ax%2FhSHK0dqhJc5e2zysvlfNKeunNYmokDrP17S%2Bg4ZVowUt47C12GiBAS2POuuPJ4rcogM7YwcMs5Ns3ksyegPWobF6K%2BRKjbKl3j3V%2FmJFVN3Sxe3QwVNzflo8yUaBjPPaWcZMB%2FgbyyiMbHPirR1fHyTnL%2FCKinm%2BLvyb2DgJYpXXEQR6FjhOea9%2Ftxr33r5TXyY%2FBVoLHR9cijrbYMp94zAZCxND4eXmeIguek6mkojbMDCuYPcj9NCWxrmHSXgDr%2Bs3fJUNwflqdY45Hls0CuHN6xTRrU%2FHUtEv8AscITeuMCxUoZA7RuHLCuYIee2UH54qll44DyIWCsvnNVSGFU%2BjLtZUuC6q6AS0JrihfuU2U0oSSqvcGfOJyvSwe%2BuUog0L6NGhsK1scSSzeSx%2By3S0P80YmyemdPKhTgcHAFmeW5Hsz2DGxyJDBzow6zkfEwbb4lRGHgY4MO3S1cQGOqUBHjxKmddfAMZkF%2F3xHna8vI7GSVIuFsI%2Fa75L1tiWF4xMCp%2FQFTX2LFFEwXclF7A83L9e%2BgFv1%2BebWjqFQ0uXaMmI%2FMzHDZY4uw%2BHa3%2FdT1pffLB8S6T9B9GjGhAPQ0Ql5uvZObjBz2hmKlV6zw9oTUvXtJ%2FKU3LzKRqBc9a%2BBWbCG5pWme6EWDCCP1vHOF154l6v3iGkpv%2B32yD5kqJQ%2FhS%2FOBvp&X-Amz-Signature=b03adf927be122c310cf8958bbb0b9f81028ab43b0644db40d1cf610e14f9b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KH3AOMD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBRWgqo%2BdiT2bqvQ89MV3kit2iZt47vmEPgBnuAuTjxMAiEA17cjAHKpE7KO1Y3d3h%2FpDYxa%2BI8OGjq3g8zLIIPxd4sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDhMeC0ANPwkmGnSSrcA%2BT%2FI78ztAosKdNRJXm2Ust3fpmuMAHM04pghKFlnnefuwSMfqnEOHgGOWtHWVu29X3COMcFQTP71Md5oWSe4A%2FG%2FDIcaDP6td%2BXPxP9RT8oXvJ%2FjAXBYJR32%2BebhNsRtGLTT9yF8NNmf3jFPVf4h7V8b9EHWM9xEYHgMPiveeBc2xmEWrVKej4ORQSy%2BTimzeihEDS9qCJ3sflBJ24K5zdJDCPCOC99LLKCxug5lksGLYGEHygF%2Bc3QoHQTWScMsy8FuWE%2FhdX%2F%2Fb1jpPdq%2Bv3uLp%2B73EgGQfVVmXr%2FGk7I%2ByHnCqxNRKm4YKPjOhFYfWOUa%2FFeHA7hfw7K3lSoI2TBGXHcmeJhpDfIBZgHf7zUTWKFsmuMeMGo%2FhxVzVedK4AqRb01uCM0cBQzJHaG0bhptHxJ9s%2BW3yLB58pWsqN8yIGJNSooqKqn9GzWT%2FICVUWRaktaBaEuO1sEmi9c%2BOscxwYiyWE6btJRS7L4sMsMPjEpBdib5dnU0DwjKhktiHFkyiL%2B7PmOwp%2Fk25DeGbdrWURr5k6rEZeBJ%2BBoMqmiZuDdC8D0EnrFrHa97HryZMXVu%2B6A9T3Zwz6s%2BsKfQ1qZWgde%2FcYjA76mHZM04PD1y4oWvR2dOdI9P1NHMOfT1cQGOqUB4GV1OTC6nsAv2ePN%2B9hWp31Jb1DOc1aU0vX6qpAH8uEAK3cXL%2F2GWQ2eTDsApjhk9Oy48BB%2FgdGOR5BSh4eS3%2FcmcAz0%2FCsvlG8MmOH8AyZlPcJ7ylBD5BWmwdqm3vQXq4kD1J46gPyoI6%2F8AIVc5TEmfcWYQn9EnODICLtltAugyyPb1WZPYMbSmjkhcHlsqPYqdRcQW1DgigfpVxEM%2B2gOeWwG&X-Amz-Signature=24a8c622f325df0ed12926d74dc6c66927e27fb067d4ea7d66184c1abb8959d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGYNZO7A%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBFQjlmoBpwlZYNegpAXbG%2BjMMEZqO1rwvD2U3ybbfxOAiAceOuXX3cGXGP5YTBqiqFXnxwfHrXVPfOMohgerlXfRyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLahbJ6IwJ2wfNRGfKtwD2EpUKyVyKsT05FKnEecEoOx5RBBO3RpS4CNQqUIkyX6uomS3C4gJGN1DAniq56RAh2TdflGnv87m6gxZwOpbn91KKBA0O0jqhacVCw%2FnCha7I9TIZoAC8na4FDsmt0k5B7sLESL50Zta28SzIz5aMNALJYHTQKJjZn4vJbCeS5JG46Qr4GfJSODplsp3wXZDqu5nxJDe%2FpBfsvN2IiJbp%2FUqqe4cY15snakqlzvWSnVRl1oZJAgVdq%2BEXzRAYVUkqH%2BL6zchbl48%2Fif%2FgC6fE74ubAg5pTiwm7TMfAwJxjHT0tAow%2BqXZv4fPHl0d5SOYQBNNUDibYbDGGB38ncTCpZRoC%2FtbiTLBa4jtnvCeb%2FF2zChM72GbOROpJAh%2BqbYdfpCwPUFGp9T%2BmkPyhkK0oAR8QJ1jRBwhSj0kUilUbj%2FvDvzekwCz5kN%2BgdYHF03qT8hNzoQoVdpBbUdt1qG3ggguOalW9mIvnky5XHqKEq0InEsd9qiYWqEuTzMt7DspCLpTCEqSPPUlvqU49xSaM3D80hM2dwER1%2B7VbP1b6eAxdvhVUbp8qaz5y6ijiBTmWAotafnW9yxP6YxxaV3FfKLcVWyw9byp99NICAS9%2FJchExdEIIU5amMFJUwntPVxAY6pgGv59mWim3HX%2BTZ0gupGnoC%2FG4BMLf5exboVQJsP5akkghuurCneoqgxbFrRvuOjoD5L4cz7utXYe6Iv36Wt%2FnNJiFydZdelcHYDUlGurRrKJuttVsESwWGk43aD33S82zoRNSu8FIDu%2B%2FSVmvTRE5GH6d4z5p0koLYcvhtMGf08VhB8vNJhpM4a8SOL%2B2T5Bvjm1UXGA4BzPpqCMkGpD2Cjp9wdtFv&X-Amz-Signature=9c62adbd7f3288e55d245f697fdf553a0a46222d0636518b3493e265c1f29951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSSWORR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCUPkjCAu4VXDJ%2F3Cf%2F3ggCGYdKt2zj0zi5T%2BOgdjyc5AIgUKMplslPQMBq4ejIQeF%2B4SvH%2BPjyabjYo5mQgVIdi3MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdQL6Hae920%2BKd%2BBCrcA4aGGrPOJNL7R%2BM9M4JCJjcAKYYKB8ZTfxeEFgR8IfG36kI8gl99GG5y9WE7EdsUEh2%2F1PKskV%2FEVoxyAZoIZnUyr0uz6Sb0AtP4veO1pQtLRjf1ejgf7PnFsnntxe3RwQRoeV3YMdbuJM07AaqiuHuU8NxyAwYRagraesWaPCZ%2F5IXFszgqWUGx51omOY6QXVkySh0HCdu%2FXqn%2B1lCfLvv1Ar5QUHSysGf9Ncw6c9RF49r9hlOyIJUpanWwvYBrLEFF0o5DMGuNA5%2FG73Meb%2BYySSf1SVwY%2Bwu0mwTf0dWCVikybFU64vPTB4JwvNunHICWreTDkdbJaRjbtCL11DA91rUEu1Za%2FK7wd6JEb%2Fg7kPnjtQ31DQ%2FFJC1F65v0zlm%2F468eCCxqvGA4XGPKocZBKHs5NzFE4YNNrZO2Jf8FPOPLicDKFhJoK6RI6olBw0m3BfbwKceW%2Faw9ij9Y3NP0LBdwHwmtY3LLu6KQAJL%2BNKUggHxZX0qKo9S%2FWt81NZEEbv06X1GymMkm35QcdGnVWBEoOn8w7Msn4THOwzchvUWhfHecv4ZTscPsT%2B1FY0OjzAGGi6cH2DqI9CXPEcmo3gFo2XeSnTKPBV2YsVjAf%2F2Av7Rfcc9fbeLMMK3U1cQGOqUBYQUYKUtqS4Fl4uAN2mhwcNM8tW3GtTDJrpDcXaUz2m2vasLIdj322sIgWHDROIe2%2FF6jdcgQnev3gAUGZUv9ryB5f6VrVdJBF0SxMXlJD0gQF%2F9iqBV%2Bv%2BViUtGr6wXR77jVqnS27n14s206qr9p7Jv1RoU1b%2B1OgIBJ8g6DTuUf8rrr5QcJ%2BOtNGDKi6aDxgl%2FY3n%2Ffj8Q0W%2Bl6mnbB4dvYUv8O&X-Amz-Signature=8018f424765318a263c7bd9c3dc4ca4a9916613da20df0d625f7d6d7deb51431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3FQ5TS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T040045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDjU7k1hxrgFhescwYPwFP3mBVS6mgVNTWY93wGChebVgIgOL9r43EWuvyWkf2Lu%2B04%2FTxMps5usjwi17bpTiq%2Bxj8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCLp6G81MumrcGqryrcA4spdFid5W6Jm9YQXLw3%2BEcKtWDZBdwix79tyOBeN2%2BQ2sgCuQ5r94IVMvW1UJtTNMM8PIWfbiSDYpxsXdmfNNlnqEIdKd2jJerVpSDEbbVqadVtGN4P74d89ZZ1FljZoJa0zobuWSSLogQlcucKgpv6rwOFa0TN%2BGY2BYQ%2BakAsS2rp5Z0g8Ll8w5bXVYaLZhm94McCS6zEug1mhke0MOQtN4tem2NZtdf6M6tIqPOaHwkcVYoDrl9tvs%2FHKBrb3e3OUoydYUdfOq8gXXe0Ng2A2by0soOZTro%2FfSGl7Y2dXOZSR3gb4lv5201%2BPUHL%2B2gSB%2FihX0La6WL5Mn9LrHgr9IFutI7qfHxTOorGx8MJJ1YeRUFvdG6BxWobiOFUycg6P3Q6uu%2FGEtBsKtvFmHiB%2FYyfm6e21EIam0EVC79ZfVGC5sORPu%2BbQJ2OqSyYTXJ7TomMLECzICTI%2BPtw%2Bo%2FpZKvHnBe7qZUajJxyaz%2FA%2F22zywg5E%2FJcSVXrwIYb8d1PToa5Iq1n9bT6L3tJWadjzfAWT3ervGCyji2W3gnE4uN%2BMTaLAV4Fe10PDcCJp%2B%2BBLzzF2NKhgK8a5wgInpyleK6Raa8muzQ4ejxn0tFkmzJFgt09e7IrqZN4MJPT1cQGOqUBxaagp%2Fe%2B8lol7%2BV4fOFCpqr8xa5RLfDc4i5Kgo%2BbzaiuXOoOBj9dl1zEn4b4NsjSNr6wIdg%2Fl%2Bfnb4r61dPD8M4xxq%2BGy2m%2Bu46PhIS8e%2ByhKKgUyVrvDSiWgJ%2F%2F1YeVywwRVQGzWiL82AvAUeH5Bat4lCSozxhLBwa0N1Hp%2F34HIVZjy3RZWCcUzsNepvTgBNZQ6CiTDppFi%2BRoAU5nfKLdvVAz&X-Amz-Signature=c6c3ff1c567d345667a583c2d8fb35cca8e6c5e68a4d603b253c2158c5f7e753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=22399949f8004e488813b7a6ac8c968fe82b8f8b4b10cfc0bf8036679aeb174e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQU25HRM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICIx1QeH9bAG4DG1jOlMMpyaikIVwmNbxl7AqiBO7rEjAiEAra7DZEriAddQtxQQ7nPWvf1nvoC6P78j3R%2F875rGVF8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd9I4d5IueJY06uyrcA8N02oXUMEqIEd8HG8LU2y5pDXw8YgYMCqKXPHZ2mUz0tx7tIHPsKbKEYatJ9ax2ucMxS1JgBf5jBlK7dMD7prJCiUJ5WPVeRJDFnQuH4zBYrSOE5lg1eF%2BiDt7aMQ550ovC0PwYHwZpYqWPQrm8va42Bm2lwa%2BQoWwplIf5NznyAO4Nylg78yBuLE%2FSgaSTymfFjvG2liXXtCXsjtrQkLPKFEUn4IHAnv%2B6ubIazkzxxl3lQfX9Dglsv3CLZoCcOyn9zHzIMk292%2BnE2UYSyZZb%2BrGr3kqTzYptC2XhdHfPI%2BeX%2FSwkAXig0u%2B%2FLDt5QOCfrKlcrb%2FUtTWW8%2Ff0fXZm7rVsgDA%2FFBGdXDCcscHbd8eC8RrnwmhoS51acsbBwg9gpAciUbiyZS%2BQbABtgBXoAx5jbCYFrl97q%2Fn0n0V5DU1jJ2FyF1n4lM0IA1D85nWpXI6DzLnGpL2cjzg8J2UXS7PVhUWc0mFqr5kvr%2FeKxxS52Pk2mYG9HV%2BvJGt3dUILeqt8p5rS%2BSUUDw96dO%2Bh5yjRN0OSNGbv6DeLurP32IBbxEAt4jWax7DLRt%2FFiW06E%2Fp8NQ4yRrxPmZ8nm0fqkEIoKHsr61X3OXGv4C9rb5wtUuzN4E6eNJ9dMLbT1cQGOqUB2m26Nfg2yEsHS5Xo15Xm2Pq3RiEjHxK2%2Fv4zizupUD%2BkkUQZO7OisDJJou%2Fs%2BoffCQe7vj8ybM%2Bzn0dKs35tnOU3LtHp%2FSd%2BgiSNUSoU%2FFxnk2Bj3J5A%2FmHMaxUiSbw%2BrBfznPez5nua1vAVOJsmuIKvvWv6%2FFBi1V52Rb4MiobhpxFa1RS1eKZQjb%2FBbk1P8Bcmq%2BWQBM4WqbyTm9wej%2BEUxm33&X-Amz-Signature=6e4528bcad51b830a9e67758779afa04161b9791456c711e3091d8084b14e872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=a15f160d825fd03c17bc8cce5741dc77dba7fe9688a610cd441ec24b2097d28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=9f5678f07420f2acc8c3996be395cc6a3bce7e027804f41fe8cdf0d1b0064139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=400767e02977fe23e7706ab79a1e0d486a457e90ee0971d839278fad9e4839e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=53f3a4df5f2c1fdf994eecb2d29e63293f13c781523c343dff41c551c54f05a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=06da6c33e9c6493d1a37381e2f8ec9e8115a021c3b634ff543a86dfa5e06fbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=7d6ae50295f37321874da7f275d792c02b979fd41c95972a4b3004255139efec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=d00f98db6584103e4439bea5c8931e1d1c5ad7a07a22eff953cc8b01fd798b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=ce631573d253e54e36ae0e36b08b58bc21f27ac579974ba6654d0dedc9d4af2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=d22d0a3d33b8c7d79f30a1b0a002c16c3478e65af90a4d83e3ae16eaaaaad076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK6KBSI7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDyuZHUYTNokpsqQ4TiOEb64OYcll8tNgtntdPaM%2Fw4qgIgDrMwIpsimr9GwvQikhHFcDDwzRCFvhwmfMVuPLedYjQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsVapFecTstLE7viircA8I9XM2UbdOZV%2FzEpwsmvwViVZbo%2FxCrBOhIlVMK%2BWmcKq%2BZ01Sm9LY%2FmmfQnu5ydAmhgoKMuPBgHHRZ1Jd9JaEgRaXtTYGL3O97Vuvn9J8u7x19SpYe9Dn3rEiue7e7BiayMzVolnnuZsA73jN9tqBMHQNwnlPlI1sFyoFPK7bk7%2BZ82Q5%2FkXnHbiyxw%2Bn0%2FarUx5axuVagQ1PRy5qKPnqv8AIv7gQBR%2BgPIrItIVXX6dPBgP7CXp1rc9uG4O9BrFRj4%2BRZEaHrVurMOSQcFiltkNo4VdPdNeOu0uEmFMyoiDICAIYMnov%2BZ8Jk2fg206dZ2eEBiSSDu%2BjcezYpQ9zQmxeyMcqx9rAjcKJQjWZio7XK17RtTXPTg4ma%2BEg%2BEN0%2Fle%2FnePWIR%2BXzpHKe8Py%2FYTXHn2oLHWPfjQn8saZeJ7eYyOLgWBSe6UruE4RvL%2B4XrsvfpsiZtpOxGG%2BeGBVV2ebkZyxUI852DmuCz8qWWNoF3sZ5QH0GOagTLxVnUV%2FQzjdMgeTi6Z%2BWauD2cbLvQKrdVttY5XUPCU1vZMskZF%2B1r%2FXamvdHkywM9QS2IHJ8uJzq%2B%2Fv4c6XMVrXdcUELFeJ%2FcELeBB4yKhj4G5yVsdkWTy4rjqMPuXcmMNjS1cQGOqUBQnR2LPmUBXeH10qsIdJznVq7HL1MGzNmlczqAkQQrO9uFcPMrdt0FzZZZjl7OzeGviU8bgBkCcIeAI6nP5y2HgSLdmOmlo5X1t3hCq8Amm4tCADmD%2FI8WmO8YbvQvViO9UzYS0GVMW448TcvGhFEQDlqFBPIQqWvt%2BMYvHOs7I3BSuorSi1atE1qp5zsk9nP1TUhifNpVwTzVjBFkJWkKC3%2FWSS0&X-Amz-Signature=0ad43db718620bfec03692d01e501fed2688f0a59b451fb32c0bac1db18a909c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
