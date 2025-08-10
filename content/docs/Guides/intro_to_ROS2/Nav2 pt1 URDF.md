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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=a0e28110c74a9abefe75fd3b1f6c92ac646db40b52f9c2b770b5d6463f2585e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=92caf64c1ee7a197a0fcc0c36d761e10d1916d43c2ed93147ced8a87887d8b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=b9aa015dfc9e4e6bf0bc9fa888683a288b3adb5d38e63acc9dea4d547e6e7706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=a3102a73e3a782e26a4f4b4b50005711ca97c3ac3f160d29ac572e5578bfc82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=d1e2209ff68f6f9a950ccff572eb6591e43d1c5dc8fad955f9a3492e772a752b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=aa3f6e6958e1f3cf3622e0f099ace6d4457811d2c173b8ee50566cbe4e3e0f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=9e236de30cabd75a21626c50c0503699bfaef4b10df82b4bb60bf2d0226f0dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=cb4de136fad04664396ce53bda97419a53c39f203bc4c7e64f3d7f495e608b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=0d9e059d14261a49bfa794c8842d7aa8d89f27d2b6dd319d52cb44e6d5343f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=99f5752ce50cb3bbc9041e12f194d95e887c01963dbea91a1ac6e482f4c38073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYQC4V3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbp0DnTjwDdJslzVqPL6XdHqJKcITMo9DgJpcixEYVSQIhAI3ryVCazmVq96goUkaFBX%2BCi4ZKn6nwhrYpmGFisXn6KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtFfUzUBgotwcIW3Uq3APin6FuWxfUdUoCTHU5QArUjX807njSX54HCdaUB2MKDfskeBQGQNTPooG3guorwTAammJ40Tlgj2eHtFHBw7j2hnQeLDLHPbyKBr8Mp50LiFUNSUATSFLPLE6ke5yQMAS3iDq%2F091Vb2npC1N3uFyNsDkFoQYv6A1Wlwq2TtkzD5FW%2FepSruOeFj3WXuLG4ErMywzoTvZuzWd1pxe15tjfUbIGPBW2D4RqUO%2FWZ8Ybf3KHB8rqdhFLXA7XBYFFhiBRGxsIsrLCLXtXbXbvE8c9RgCo%2Bacf8EtHSwbj51i9o4k0ERFLepYJj3WXNTsGcHto%2BX%2BJBX3XJm%2BMDYScJ5Eyyfy229n37Tkiy9bdOjoKcbMG151WikYSPGJs%2FUhytljrJ2Oc%2FJwn15WaBj5KwZJBCX%2BzxBxOdHLQ1AXphir2slduBBHLKFqwfSl21XABT19qdPSFCoHLmdunEyIHKqEOoLGyNy7m2g%2Fz1ZIWHW4by%2FYdXD%2B5%2Fwi0sioGW%2BATIBxfYOfeJO3v7JkvBRcLG7DJhqDqFrDD3UzOV7mGnQPmpl2Uho5O3Y%2BsvNGUk8VHpcu6HPzmmubCXa2R0voi0OxdWuwjsxgWtizUUuYzhpbDUqVfvE2YxtSFpoX9QjDZuuPEBjqkAWinh2SHmF2Gq68xTFsu0te%2B8RLsHEIQ%2FdCY993Mshh8eCKk0l8jVLJIvLA7uIXiuNga1VnqmW2LmvHZecXFWq5g7A22a4D%2Bu0maLZClIXbjov7EjsdQqzJ9lXsTCYl3W%2FG91I%2FWiUsHABdWUjeDA%2FmYJY81xFcSjr1ScK2O%2FI1yTBPXdf9QMkfG0stbpgBUfJ3rzJI8VcCQX%2F5%2Baf2g1K9DcEgF&X-Amz-Signature=622ac7bf8d153067540cc9a10f039be54d088452cd07b7d966face316fa82908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBZCLCR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkvUAe27PNO0PiM1BKbWFKGYMbSFcdejUuJe6RIMyIjwIgP3X0nImuRZZ2uUjahzowe03T9kyl9D3F5N1y8ppYAkQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO1TsW0nUldkfb9qyrcAw1VSAFBAGXrfhqyDhdmY8UoJ9QDxKkiQKYpru%2FCFpek9XlHnvCykT%2Fd8G4jLWrXk9A%2FJbRmtxWg5ie0IxUJHdj5ZFM1sjb9PCOFGKC5l4PjX62pWXj1w3TCoSxusOniCd4aEqtUc9OOJ3n0MFw0vkUArYNSL42UKwyHQDv3YhXvK6qRf1zDq7wHqIkkSkouznbhLpRjw68pr%2BL8590%2Fr%2BzyHSWGp96U8I07X0CBzhItGp9xdpwUaqhjzQ6rRjXFiWsXfbMvDWrKo9prNfAANEqe5ud84O4QvJuOgksfW37iTZ1dVSu0wJs0Unhk6BwSLlUI0HYKU559rYloLdOpC4z8Pn%2Fbmr4VbzwT9UV%2BUXVcmAdXOewxUHNCoFAbyLaSGk5zXQDiQUmj0F3bFf8N7QSGhhgeqpz2vrZdY13Sx1ZwHEB2NuPxRSzCW%2B01tbxpD49ncgiT6Xg2HCLwDGnvpnlzFK6KOHjCzdWVVtlvFHKjDmK80GOt2JbYxrDKWKbYGEm9Kzd%2BgA3jh%2FmOhWbkEaTdpJ4bokDmg81y2bWsyZJk31tHA9nD7NycVON6jpB1gjUzXWg5of%2BQYG2s672YZmL6fx32xS8y3QfknZ0SphnT1zccyKK5yRVtPGnRML6648QGOqUBlWQhizZ%2BPnju45BlaQbXMk%2B%2Fw6a2FnBVxqWPGqq5TEw3N4UyJbwMga9c1xB%2BV6ULxIxnj3%2Fy7R7GAVGLEkDAxpXhmW7pSOPUlqIukQc6mJJIunqa2Cv3Njbic8q%2FV4I%2FlvVpEuApstz%2F7WyTl2dnJpRV5%2FD2etaxbDmbdV%2FTHXHM8mZaukLyVJmm0jtINvH6LHGeFt%2BpHfiDoLsztQmxn6JpKeQC&X-Amz-Signature=2f547a560e3f8e4da486df0a1a409e5fb3910b4e81dc0dc21f91e0faa24f8674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4XXBGZ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiMr0ZTdZHSlXDdGkZWaEKZKIfXtV4g%2BHZKnqFblugwgIgTwQob9%2B%2FhXCExbrtZMOjqp6%2BNKh%2BGAtv0nwQyakutpkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxl6NhnHHhH659cXSrcA8ONSa2Td7r1YxisomOd5y7%2BBm%2F%2FQkxWq8w2HKJz4InwDeSHGrrZjwgUjcfpi8mIxl9KW75Bnj2Ca5nLQzqaWMXonVf%2Bb9rlyQ3JB%2Bg52qvjHvx8kXBnWFLEc7gLqVK4Cz36fHpNHJpTP3aca0tm80%2FvWpnkfi0XsEVz0q%2BAL4Jo2J7wzht6ANdRZH6yceNkMzKE79HHrQQyrmpbAWmGpd1zBM7GZtE2dkylEujBKfp6ORsDfU27HAp8r%2BwYLB%2FBOSGEYx4bbbskiF2ZFlhpeDijYRfFHkHSu7b6ejJbITmHn6lruG3QFLKNKv5OW5cbo9Md7XWKKctUHkc2NitlkTfjH7iT2tW3%2BC1tm3gx6szAUUiDR987%2BQv2KPsTOaEjZ4b2BgjUHArIQVhFg%2FAdSl4J%2BTmzefXRVoxU9usxjk3wWQdk5BP84pOC5ApVCi66LbK3KUoq0%2BJeHdjeDUXzhl8G35Le80BQXK6X8U019owqwsshXVPEwydccOB%2FoqYmIs0S6%2B7whOE%2FquZWNOCn8b5wr16TdI6cVX3R%2FQl3A5MMfXm9wPaefy2ufWj7uyneMeUt2kfl%2BjiQ4Z%2Fj5pXz%2FcwdYBxJbdMRObPMe%2FMLYy4j1OfMVEVLjeqSI5TYMPu648QGOqUBLVzfVnsqTlqyYQID8GW2QP1kxwmSZhWsq1hJYrOcPV9VT%2BnJ28T9ivMqW86C3isPe6D9u1yYp5pcfSZOc4J7r3zsMOUynP%2BrftQsTcTGX49JyR7yHV20VJQOgpFpLmhoIso4Cn8S%2Bng6riwuffgplpBNAmAw%2FCUAN8XN1yY8StirzYepvILZ2x7rqAbkpzxu1s1tZPebUM7ZipgSYSFb3AhqBbgP&X-Amz-Signature=519ea5e44975240dc11329abc6ba7cf607a023b6dec15dd36f5997553b104a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=5b3da029c0ca3be016647939c60c7ffb3ba16770dd10cad3b02c39a12713b045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5E2QJY7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7rBhio6meNU3STFDhCaI0he0GFv1ZNLRS0yHwvqwUFAiBdeg%2FprZJFYgh6Kb8ET7Me6Sya94zjIeZ2esB6z2YtvyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzJT6bOWHebxwLizXKtwDpRDbx%2FWsToU8ir0Nif4FaXvrb3mz9Ldqy4LFugWFuuR6YVeLNwa2GTXOGcG7frZuzpm5aajj7Cx5BeQ87KUx7iSztnGpp3o5xe0PVcK0Ww2lRpeuTOTp57WlaZa41er4oksgOoUVkOf71bBpDnkaufcGKyLzWzoLp8Z0gM%2B34DAISH8%2FBKUFQoXl5aS4c4UFvBqCIme0j9V338llCvWm90Wj3rH8GvuUnwO12r%2FLXyPfpyniUeoyFJEbZq53NSUfM4j0wtrcIESM%2FFwFfF10HidG%2BdG%2FDCc53us2wBBGkR4NR9dN03kErlUJu8qocLELSXi4D9Sq7XcF4NOuVViF5OBzEv8uBPC1pK4DE5ljgfEQy8ODVaiFFgyfZM3%2Fp5f4w2HLCjPKsXIGabhrgcCGXe1Lj0JsS%2FO4pCtHvR6Lec1l9jRYDmlzHBjIG7bW4rPbV5bifupe6O8vZWEjMhdPGeUpSvKurlll0cspt9ylEzeMDfi2eCW6sorZNdPAVkpaPwOc0IC8OYU3J8Iot90HusFVTKGNUPCJFtgiMII6NOIBVsp%2Fzjeek%2BMuC8h4d1TrnXevF8ycwnEp35wcRi6RtB3xOWBCrGHlh1a%2F1D4elglsFskbZ0bUVRrkf%2BcwzrrjxAY6pgHJ0TLyXny6FObrAR5cxRb9drA7fs0C%2FKntFS%2BJgxDChBgUZaLB4Cl0rvm6NAtCVp4U0%2Bqg9y%2Fo0D7CXwVtfqW4sUze8fvK4KcevVIQmF%2FIHcwR8SmM9LQfLdrHVrPGunjZQRdaq5VMUwNRhWHR2KFSyt5Cg%2FZFDTDyghoruxTjgb0JccENMzFfzogfD4H0rXLdVJvRl97rz0FOUhJ%2FU%2FvHT%2F%2F3VkCP&X-Amz-Signature=a67a0c0d3b5ae97d8ed8ac6e7e6ebe0d4c223c901ca731463888f9bc05375ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=8fa017248af11759337580429224303a93b8a0233287201f8ded5a76091da7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLMN4A7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAcrfBzFfzGXf9c9DSI7XgCPQuRJXsBay9P%2BU95ERT5AiEAx4tHeN3Jc8BrIKyBxOKyx%2BG5H8kUBnUfwH3yrKlGqwEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOILIz2YpgyY6czLLyrcAz29HR4S9XllmdXrT7QUbRFkQ0K9EPxe8JYegFuga9qBUbeu9r1wGTspaT6PnFrkpxTkdEm4D2lqKwhJv91mEK%2FRxeQ0LzNqbtABCO3MRrhiz1Ipu9up6VqTqYPsXHoxvAvwP69jqB5HciDt0cXBh%2Frb2FO7EshM8HhV%2Fwl5btwqji87MTjaFlkd344y1pQumRssx6MqpGrflXxUptsNWMJeJp%2FJmc6seuY1mXTQ9af%2BNaS%2BmI5uttdnlz2XkEeUxU2O5WexVSOrV8jlxxhcgVHpdK1fFOHiKJPzvIXSaUXwHBybu6J8j6Ai9XcRSroOYmqsEiYw8CT9peF64IDKpBXBp72Tnxq4PxNWhVZ7SjzvuBNXzsvGAkYdUtGiiu6TkPR1jtvz6d4ZR4Vm%2BuYruMdLONC3Y3ZrVuzK909ljpkTsO06dHMLnDQI8uy4SL1webS0jsR3FHzCFZKjGQyEsEIVUV0%2BLqrnXnpbpZ2oJmvEQm9MV%2F26dPRIp6bmI%2BmMepoIQCxSqoL3DmbfVQmfl04qJxPw0%2Fi8f753rBjxppR%2BVsvTJVH7iQeG6wJE%2FX7DAOwoqfyDaBOkCxDctsVM46w1YVTFonl5qhDkiqcHPBDvYRtN817B0H8MlTNaMKK748QGOqUB2P8m%2BdlnSBlO7W%2F3eYjpyo4IFOFP2Wcqpx8TiDMid6kxOVZGPI2CM2Z%2FpwBfpYWw4jDTANSMSP1hnaU05wQk4Iz7vtB2c5%2ByVlm8rL92JfMpxXrwZUto2a%2BGEHX%2FhonlWGfX50LYdmm%2BXETZNlNZk0kIQ0dJqedIZ11px4Yn9%2B3zYHVQOUE23e2TXkyZtofPcgiHsno7YZFMrlZDagMuPeK%2BQ92o&X-Amz-Signature=b010fa890998a926dddeedd2466d84843abb5de4ac55de075b0b0dec03744865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=584f3d33407c2ffbeb9a0df5ce4f795abd1da995b719c958a499090fc68f33fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6ZX4G5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER6kqUT67VMfFM%2Fv8%2FB5qDzQXTc6XBmNKPvuYOsYZ8qAiEAhC48xRrK0wp5aIN%2BSZFBwVUdlqCDanbOwWPKrWNT%2BNEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5R9a5t515HQzY8VyrcA0hc7BvIV5W6C27yOr%2Ff60JxIGgG8cM0CwF0pZ5IQBSB4bgXOfoPumu6bUhOIcwqmMUF5KbfXSmfuFGMeqMX%2B%2B43Dl7ukbUQtlGD3EpYI60dWHy68f68jF0eVkSOs3bMrr6ZULlUl6Mh92qbY%2Byz%2F%2BWM33qaFA5Ji7vEGqAfYdza%2By7XhErZm24DexHMJkSs58fvS3zgiTMpZVdm%2FAe08UylVgZVGZQZ%2FaHbF66%2BspoQKHvl79Pnpy8hGPHuWA1aYtUXo7taBshL3EeKJUVVe1Z77IJLsXin6ECCaxd3KrFGS4J%2FZ%2FUiOSRtrlJONAgx1NxShywoIyND0Ji4Etaz02APwG8RNjFAafbtMU71B8uw7lSqysaas4WVqcdfXZMOmAKISIBjC7yRrdxIRmh2ty%2F7XJGMoRHqAAaBpF6ZGVeFYEyYeK2Z%2BMBSgVWAzjV2oQ0LWd4X2RtBW%2FejaNCpOeRSY4zo2Svmv9i4ZSASmG1zhKcy4oXQnMIiuN6g%2FtvDPPwtvokHxatteU%2F5tcljWXUMfTHgQCJG2EZnG%2Bi0%2BQ0EFSkzNm%2BoUDprNjjdVs6jJ%2FpxYwQ1zRCHuwddjM9RvLLLb4wi5w2PbuVXAVrN9jkKxy%2BGJUJSZXUH5KRPMN2648QGOqUBYxK9RDxFrqPIz3S%2B0ur2zuol7EfgNX1%2BoDDFRp2cW0xu4NQmse3uFecaNGY4jAgCi%2BN%2FrFII64deIV3%2B11Wyn7BugLtHrhZeGLkicYM7az5RwlalYD5n1divNkYSZ45i%2FxJHoavEguKoZJjF6Nu1fJPmTirBSLvMrpORY5%2F3SGnIF3e8tPkNRgCN65pLLXgFoCqvH9MiPYIlADjkgNrZ6scf%2FDU2&X-Amz-Signature=ffdf998f9a3b46ae8177a24795eac24e49e837fe8cd9b22598bf3fb8a2646cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=a0fd4ccfc6d8135104d5aa66a1b7b2a8fa4cb8f9929b4634a126fc371cbf5ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2TOADH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWYylPSFiHK9Hw4QE4j3MwC%2Fhi0JWFNcByg7WR2Kj5TAiEAyPDAVeJC59YZ7dHTBGkQutifqqD80lgrAKKLgP6wlVgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFINNBMa2EXbu1CpcCrcA4Yorimt5nN%2FZ7vfIKCsM2nq65U%2BUSWFD8Wu5gECTx3l%2F7Ax78kVD33U2LSbUNWJ8jQlmhKxTXxpv3zz81JuWamuKNRM12kc8C5PIF3DHDWCKdqviDRuu6e70XnpbbXxP80yQ5mR%2BXxT0GWNf6FJFJf0tzADidBPCOcXnJAoA35v9ftDf01sffzJbqlZQy3r8EbM6t0dGHvFr1HYjjtGPJYbnKrGHD%2BX7TYH2w4vOPN7RqRsh3WIOAmEbC7%2FN%2FI0qt76YJdCnVGMtNuGTrI1BMEzWywXJcKVbG8w9TXYNgHahBiwEa4yXvbNk4Sravp8OPWBjK5%2BvogcVKNKUJN5iZufimNT1GdO2vjbLRNFyccwnTUpUcomarbpBEjoUlUCGhguTWBnlkOKUybgl0VtqN7Q%2Bc3Wh4rs%2FjEos47PXfgEFotTUhjqjXXmgZL1WsaFVySDLqDdJI2UJu8m2RLzQHEZW480ffbLsc8sCpFzsomUCVYyuD4MdqbPi1%2B3IKujc9tvt4rb1i8cbh%2B0l6KOKNANuB9HzunVzvfF9CDN8QgCZUi9lYkkFDzTJHj8AOg%2B7fTDcDc8jjhghPAv1f%2Bx0f3bKs%2Fey2jlQu2ClaTsUXyKhuRSHj2YSIFe4itEMJO648QGOqUBKBZXlR6V2ekUr1VGjrKCP3geX33VNKx%2BcLHJGYJqXs2u9Q6tJpcFJXj4bRp2J1UyE3ppiHpAEvTNm1GSBCxr49v3IDYHgK0kEJFGTHTBx%2FHUDygsrB%2FalfFvbRtwKyYzvogspEucm2YTShpYllFKTojEjg5Y8a1me7AORmKpX9fI4967TfTIjz0vW3pmKUlpx0wulw%2FgK74e2R9YxeZYXdFGKHV4&X-Amz-Signature=6c0c51bf0bf56441b83b23b64d3aa7340c48443ce0734de0819c5e79e1f5e8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4OCYEA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLhqRpBcNxODo1qU%2Fq4v7EmlWYlC%2Fku%2BeOpYtmFQKRhAiAU%2BaqqpiXyLfYWUzCV%2Fr%2FVuu1sAp5qVlcGBcsgrPTXuyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxZfC5c3k4DZLhOaaKtwDEg7TmGH1ZNRlbKIO5fJwJ7h%2B%2BNahJgnDHIB7QTAIBfWqq8zyD1ZFYG7l7K2ZzDCwwpe2K6XsedtUy107z%2BnmMETTUNWcRYsWqUk5zzkbkCpGwcuCh02ZxwRAHoQlfIS78KBCrshpu2wqYIZZEULLU2cXg5QD3NasE1ngf44%2FvZLZrhFSNVS85H4o%2F0JtgpmEe9DCdiEcSe6w4B9KEz19i2O8I2xYa9ZIMyKJwmBHzSmYDBAg3T29OPrBI%2BODNqMVzTy4po3FlH6KV1N0ljcyway5Wij3z8Iz4e1BzepE3Jfm4puRChCw%2BDkw7HJTQy3UUaIelpJMLpSlYTn%2BFSx6Xvlxv1OQN0krha%2Fe4cjeLEycfrNEyN4FCUlIdKhAC%2BSHYBzBAwZdPqEPMr78tp%2FVVjCwK%2FMMAN%2FktDobLYSeJUcFOvTvMhA3rabakL4kOLF2f%2F4%2BOIfljIG8m8DHM3JOptQy8bMOUakjKKLJoDlgc5ExfbbPHniXtdAXup5PRMSkOD%2BK0xHlwM4%2B4MJd%2BAi6r1GxUf1O5RntT6S0N3SZ58XSI93cJ2uJ5ZLHcFkA3DKyc0IoGOHzPsnx1gzUT8U3y1L1W5RVbve%2BGo60Ce2WUEhh1DaetzE5LNjqxUkw47rjxAY6pgG1uNiIEgE4uzxH0IfCniKAutTmDuqhYZ0sLtGI%2BaQwaO3ramumy3qu1xrsyCGpkAUnB%2BF6mFKOyfG38o9WyER5T0Xiew8f1mFAvaVYNoM33u%2BPINkyQS%2BE8fK64kHOoAhDS6jnPU3OiiAMUqxmgVg2He7vaUqdXYfaR5ovto9hILsogub5ZGplt6cLy0UEI%2BBJ3CYGM65lvl1jeVqqlGoaR%2FlxVuh1&X-Amz-Signature=94d8003bb27493ec28440acb2b2be2ef2d8950f0d78275ebc6f446b079284ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEZOZKU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxk6YXcB3iSfaMeSBl2EcwSfuApOL7NXL84rG2OmQDGAiEA5SqaQOE4cNcvmw9A3Dv2oBgwh7%2FpKXo1OIw0WukZJecqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAlTN2aelA%2FxYEZ5yrcAyX9vG9BvwSU9lmOMRjE0xeJyo1%2Bx26eRGyvjUOi5kgMNRgj2%2Foc89kOSYJU9Xmfhjdl0nkM5dOWgZtSWgqolvo%2BALYauKZV3H1qVMCoQm37WUF26YbRmASSaK2OHkVvvvK3ZFSrtOKkQ9a2kCqWnz%2BzZQwTDB5vIZyVZwG1JW8kJagK393lWRWvB3Yx3UloHx2x1hMSeAmPj1nF8YQB9wUafy4ViowkfrmObbrQGvuV%2BslxFz1LxU8qL17KCe1MIvy5C%2BrWGi1JG2Sir9tiK7oRa%2BSp1gmx0QLARmM6D4B0SxSqULwe%2BDC464fka0VzkjbDZeMrkQtbObDIJpfpIMEjhf5kI027Pb3c2eUX6ZDdvxy0RwL%2Fzang%2Fv8x4aFCU0evVBQp5NZ7sBotkgVyZd0H9Io67i%2BRoqs75FuqCpJRKKnU8MfghBo7H3jq81WJLQWVijY7YbV5Bd37t815L%2FIO91v0InC4x3oFf2DfOcpDYC0bbhanK3LkLJwz%2FScgIxPvNkXmz1sRx0v0QaZJEi7eTJuj6%2FEFhXmdwmAYplUPqFXHyp5MC88vlTkMfyLbptx%2FM%2BxqExg0agIeyggKdRvFs7Y6%2BCtYnMBMEWqqx8pYOM8VdAVCDgYeN30RMN2648QGOqUB%2Fjtx4ta1BGQLJ%2FrydrxZfiZbSzb6WnvsA73lB8uZbL0ag6%2BhQIz4AaHnAK8GpRQ%2F8L9oq7YNkpylTkPx8zeg768oxJ7IqgcB15holUK3oIwDJa8NTGRHkh6Ue8eDkMhWoJ9oQH6FSgo7qNTNMlxB9Wo10wWcCgIKf0JGq0P5Cm0BBgx8gYbD%2Bi217DFt8aTGvF9L%2FT5fQ4Hbb8MeJBr5JSrtJ8wx&X-Amz-Signature=b94bfa43dfa54617ad7173002024a0faedd1da55a7a3831450ff207243c357d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RML6AAQQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYGxP%2Ff%2BZkyMwg3yL2dL90uYkvGBtapK0%2B5fGc1oCh%2BAIgTwQG9AYnoQoNYn4dne4Zw2yQ1BoDqeOl3TdRxhFB5CIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNmWeWckSdlx%2BLcFircA52CojYXexG8Y7y1oz%2BDvw%2B7cBEdWLROEbCkboFJQzHasG5Bc%2Bthnt92sQUxOQFPMHZRgv87X%2Biydc0BPWXMsUe1mKDHkbhXB0btHGjI%2FCRXwtYkiroKeiMgCwxtM7WEygrdAFzuIxtQEDYHqBwMLh0fLRj0S8NN9anDr94RbkgVYmm4H%2FW6E2h2sfBIIea4zCbolzhxftudEBd%2B6vIXM%2B4jptgOtddfTJSYQEanShDykT9E66PE9zWyFhujwKTRQCRFSUj42GcwJNMBSzI%2BjPmPfiZ%2BRjO8cfFyTl3gdFyimI%2BwmDOJDT9YkPMrGvNXJ5Za6tVL8EYITMgMMO%2FPBWCbcjIKP4VFiBlgZIudiTE3fOzZwohLkExUy5kXKVkQTUPkXa5DZEev9m31BBaeiCGSiBUKO%2FHscvqhwj0LMeAA0OYXuSAuFqvRq6Nt8KHCWArZLkUiUgdIS8fQJOEgHc2pv8Xq9ufVFZsaDW%2FXld4BJFEILKHWnNfqAnP56OGsyy%2BznahSNLQbaVZZHoXS1QNWyE9LBSoTkwU7rGSpqKlawt2LyZcJCG9irAFMcBk4DFPCPWXH3TEuEICiLYbwPnfumPkqKCm%2FtRM5TqkQ8ue5QkQmABmDJahKoHLkMKm648QGOqUBUqiF83CyYpSFuwGAV8uho4csI6dtAVd29vKXRGlkbnulRQTUxZmOoZCL30ni21IwYtInExLM5C2jlhYOalbDMvD3eUhZkcj08rx8xzjZpIkP75fWce1ig2P%2BreR5I0ZbjI8qX52f%2BQMEYReYiOLo8gITKRccN3uNnoejFMklDYO1U8MJkevOIpuIYelY3%2BvZEFOGE8zB0txxtVFHc8QAHWwGHrif&X-Amz-Signature=12505d21cb03fba1c66239c7147c8b5ea43ca3fed98a75e5a902ab02b1658ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TFIZHWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB6JQkrXWjSferRL1WCmdws94PcmFnDQlHy17hcvmjcAiAWPq7tliZ9fy%2FBiYBO%2B%2BFgwqoP3zCRaS2hLqJBOVliQSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWC%2FmyT9TUdZwXDpWKtwDRxqrBSR1jBGrxg%2Fq69FCjnLinq%2BcRyAymwlwvVyj6nUdKbU%2BLE1ufmHS1OXYoSRF5hcXpGI12KHYfAWVVx7gEq1QEdTMgZCdajVkL4BTG7FSDumcj4ZRDT61V5Q2nyzQiL5KZreslIjsWFfn9wyuuel2ZFHSDg%2BzdmrPKNgoGc0MyfIWbsyBhuG34m0Hoz87owwkT5lNuF%2Fw%2Ff1xtmT1PvkvIotnPTVhYwyO%2BCuMJ3fNr5tz9mwxnDZHfsBMciWoTdU8LkLOHCRfclyZ6%2FvK56hoza4bKZfZuYsNdKp1qCM0rq3f6KFf4LNbb0LXreKrV62bsdnIuNMAPW8NwMAb4SmzczApeZz5JcTNrc72ew1iggz93we5BAqD72spG0uqLzB7ipKOF9Y5jAGUgKj4%2FS8Df846vhqbzmY8TUMHgJ%2BWM0dxvhaGjkyOhsZAhG6XxJXMIHkdBToRAHsA8TriqhG2Ql6S95rUrYtluDh6p1m%2FG649NWWiDDXPa24f0U%2BAV9S8tqM5M%2BTKYyJdeirMrfa5pB42SNpRyCmloax%2BZVBNORMGvE9gcukr8wvjayjSlB5H6r52Tu0BrRyMwwiCMois0sjTKtebvH6572cq9KNnpbOpDQi%2F1M7NLngwx7rjxAY6pgGNDFyFnuBsg9YvTLkb4F%2FT6tW4LgJADhCBOLe8Ld%2BIDSjebA4SBqjc7AJNywB9wluNuA11eMUVnHoHN7pST7iHk73YhS3IQCl8DUodwO%2Fh5oMQLvbBV8%2FfHv9WwGcWV%2FrB7Bue%2Bfn3NPo%2FoFhEpwJ6w8wkz9chBqMVo4SZ6ca%2FqlLoX97YOJCIuQVeysv8pq8EH1gYPG4zAWTTuvt4pNRn5kfPzuAw&X-Amz-Signature=d40a76b9d273821bf0ca08c8547c94e2ce648451cd7bf513744da2951d24a7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=533a6ee7b4739e1436eeb25769e7b13a89fb5d942c8af3f0b0f02683e856a08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CZBDSO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qTYdy5E68EEhZQ2Dqx7F%2FmhhQLL1cKNv0qlya2RqsAiEAgqbEWaj2a9BMYiJH8Mm52hCE6wst5nyl4Cm8pcGMx2cqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJavfHdTtNBMA8oF2SrcA%2BaLO7PCjBMxBDXlToWQM6Evgb%2Bcf0uxEmNhiz%2FhDWLD7yzkF4o7Fg7meTxuGTZ6xmh7ceEkCCqOa7Zi6rJ5%2BxWsBQhQgIBJIN05g%2BBa1ENq6%2BGDHOFnXxXCNEVWIKTF0DYUS4eWK2Z7MQdRIeVJI8iagQaV1VG1HCnR4WxgOvDxb8AK61XSWn6sV4mN82vfwti1z91TKmTk23u%2FtvMK9pR5M6sB7SubplDRtkbnahubp7UoJaTsXuXn4pYn9ZPc8wkU0FMrjReqPI0koXi1JxbcAs85JIvVwZQQcAZgdRaf%2FKuTg7te51UnQ%2BWBquM9cLfrkZpC3wAaF2PvXwOh6r9yC9xXCe7DD7Z3PGmNG8M28wvk1yQ6CrLxy5M6EG%2F8Zv0ocf656WB4aNkjqEUGwfvWvIPJS%2F9LMryOOu9hPDujgGiSR5ui%2FIdHidCy6C%2FaEBvizjR8L99Tw9Cq1067M%2FA7kT9LoapCbeGOxzrWaPJjVN2k79CTv8cxfff3MoUcHdsXBayHy22m7%2FKvedYO56%2BdLy3Tquy%2BKMZMXpW9Dj9%2BHDQyasiXiDgY7dEXgHY5iUMx4oRu7fNROfPbtYELLMgxa0zWEO8hZxKDpBjzKK5J%2B%2FLijIWNYbSCUzJDMMa648QGOqUBQ0oTPfxrhPkbsMkanCooKkHKsztIMNLIdEVn2WKjjP0yIwgwGkI3lvyWHVFTwEFDI0p%2BESfEhP4GBBLmf7lh9jPYznGwhNVfFT%2B60E3L3WkpGUqA9sAjKlZwVh1D91lKBl5hjXUkswERD7%2BE9hQnnt87fCp1sFDPKmwp0Yr1NUq%2F5mFB4f%2FMASrvRFxWvKvjSXSBgzZBGn8gXdlLXqL14ZbH0Vid&X-Amz-Signature=e9d53a896fbab30ff6f6649b3839cc37f882d256af5ee47f90dcebabf32481d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=36647b82931e23eca03206a10e010103e5aff6568026cd825a8672e2d4892200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=c0f38f789d1adec361c5e05b27355d8e277d0659c20748dae6f7effe958cdb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=c08cb083744befa0831c599a49be1330a6accb96606bab611fc4f31052294e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=ba067880782e70ae755b8aaa07f851a10e12c0c0b5989c6987bbb81fbd6a6ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=5add8eb46ce4f4ded6a03b48fb44032520ac1d270d41e008104065970cef9fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=07400c4aa0e0ab27ff64c61edd4448dd50efcbfab86d2e824b76d8a649cce7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=c08cb083744befa0831c599a49be1330a6accb96606bab611fc4f31052294e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=8cb8b9bb8a23c72af5ca5c82abf69d8ebab72f00780ec9d97005f61d6f2d306a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=d408f7c3bdab8a0ff758b719526a422ace923b0c89273334fc2d3e45e0e23b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYLJOWO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi4S6G5X3f02cW8z%2BN1VZQq4EOrZzvPdrSaAFArWkDbQIgQkmLuoQzaruwzXfblrwSrfZjgSee9aOzbPnth3S4MWwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmhoevXbDCauGvGcyrcAzxWh2Dejc73cZ4AIm66X3HTUEIdePReUmLPYbHn1TTc9zVoYUa54tbbeXWEH2oIUEcjQfxxO3cxnYnHcR73M5nXN3Ou9rLOfLQ6fTK004CwcsWb6cUGFLpS2dn0arE1S23k5lWhquk5rNtCa6ZxKjQd396%2B2RDXYiUfW6qMAulKlggdNlEdLgeHpNlJ%2BSWk3etRNdedUhh5I%2BNjqJ9hJxHIwM1ufLau1R8IqC%2BnUgT5JQX8jlpXvTMsymSE7fAv1GKNIGJ60pfpb3NNizuBSYEqakx%2FL0gnBppkl0GzxIYEJ9wn%2F%2BtwBahCVN11kRszjiwlx%2B77vElHJSxowQTig5hCyCnCEBEPlxBR8cmdTA2Pi7GXamI25RuhaUGrv0%2BJ%2FX43lxZCWLX2Tq7%2F%2B1xqkzm%2Bkkfq2a%2Fr935Dn%2BICHo7TLNcAGjdK72adEIJVWR7bJ1V3d%2Bzdnns9zo2Gnnu7xcALJWAwuLhTbk6zvICAwSprPI5LU8pdRBNb0omSExlbfXiW0JzANAnrcfnZjNZOx9%2BKnMN%2FVlOHbug89Kq1CaIgbGOWXD2ydCH164U%2Fj5xBCrJTMnCp2W6aH2bqfk60YQ318m5vfoJSuxJoKFoMZBBDzXOQCnxyot583iUbMIW748QGOqUBVWM8fzrNSYavJMtW9joZNJRghSQ2o7u5W9k2i6QkGuHsOl7%2BvKbreCAdZWeNOB6JKYcJnP2qbbw16D%2BJnEQ7Hreoss3ezjEg5JNv%2FJixSYqAT8v6S46UYGiwMKG7ohUkUFAElPjchOvmE1qKru%2BaU8wi7SWvVr%2BblE93fgQl5MT6YjnAq390de9lZX3mEe94aFy5BZBMEKZa6cvfICfxA6tMro1q&X-Amz-Signature=9cf208fbf551508d1d7653240970ef9110b41a61936222715fa18a8ca2374423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
