---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=a04a2ea56c081b114d23e6360c7a183ba1a98c53ae05804c45375974b80f74c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=fb06787d04c519d50e3bee2662f575ff730cc54201b37c18736184a8cc67b869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=f9a26fbe74577dbda0217aaee41957c6777202ecfcebef2534621d50ecc7daf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=21d1367f4c7f9db1c2291b124084853a359cf2db3fe38ad16ac0614d0004b420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=078d57b0205c6d8183b77d9f504f65c3349bab58b368623df098eef404495ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=30693b7b75b58ad2a7c00a4b3c7875dd01ed4cf9341d0c9ab0f018c2fce00bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=4dd17bfa0227a3ea123aafa8d81dfd7207af9b5ea36d5668c96bb0058a13991c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=f18a4a4274cf33467a9c67590b8705f1b19c0869ee645181973d3c3c1879e430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=b4cc1595229f2972eb69708d54787b02f352da1f311fc5b5b0cfa2916b612ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=ad7480f2560e686a8855601d26441c773f98ea82a55a04c8711384d7de48452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=f955ac7a1e05d828415f7f59ec6b86f0f0331588a60ba445db05db5e57c17a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=3531060a087382a000f57277ee7acbcbb02965c6ebc7e0543eb8758731a2b5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=feeb64d62c386e714f7dc58fba5a1b6d4451ce41545817c69aa536eec34d7da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67HNGCO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGEcTGGgz3f%2FOaa%2B%2FPUwAVNVbhf3lUFIutpVC2sKraNJAiEAnptgH%2BJ83JPMRXA4t0QvwGXuyFt4iQQ2VwDMqIzibh4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJqPSuRx%2Bc087pir5CrcAwZAUU3Ia6rBDmPXKJj3L4zdQtimnGxMa5FHU%2BFuOayuvFq25iMk1AZeAfNoaropi46r5msk75wiMfA%2BIgcKm25oOOPW7SiTIlrhaBhGW8uaUJVv17C5VlNEJmcOUNJ1BAuzzNyfeuh0YeXgGLu7r2UvVx2SCsXXB9KCogWwWJ45wAFf%2B%2Bgt%2BamOhhz1gVX%2BYTQp6zpTTddHA8etAnRqnytjHn%2B23rowbVNEdt50ZhZsHlQ%2BE1YpIoPqJkJJ%2BUO7du1AWWjgcynMecK195TbaykouvzrVzcRQH2i44Bam7jMltdNax1f3cw2tq53X5aX%2BhIRq%2F%2BKofm48%2FvS%2BJp0uQ07wvWZDUDfoXtJtgX9wD825TA%2Bg72d6Pm173eb3dK%2Bza7f1W%2BAoxMSW2xrGqjilS7azqlD2Y3z5PyNHjnexoPOM2uMsKYF0cyVBnA9Y7rSxS5oxhz7kL7N98SK8nEtbW%2Flp4A3SNZzeb7F%2F46NuZL2IWkeQW6OzSU8J7mhlYET7SOunKy6Fqxoa%2FeZym5kJHVv6bVro5O0FeKryHAbRSC4IzBLx6ibagi68bCvUR%2BMMzDEYafZK1GrPkif8TGqx7wkvISMIjIPY2%2BTUnZZLiXf5CeifydUAifXO1DBMKyGjsQGOqUB0VWw6cGfqxM3r0C1Kk3ts2EajW27lrLV7rlmFcyK%2Fpeswq9LVdfEjdY8aVCHTMv9b4U1HEvWx%2BIJjjjDRjhuKMKOjTBghsyj2%2Buh48SP2RL7mOnimaBiCwHBqFGa23IEUoT79vo2Q7U1nbN8l9FeLdNUZXRb0DG6i%2F5IcHmSfCMbqHy%2BTco2NL8ogFhks%2FC7d7IFQzzrIEkbyMqL%2FhiqB2YsLFur&X-Amz-Signature=a4093681652b9a266046500206b8afa79a4a50057ca58a33fa7f4568b494a74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZYDOXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDV7yimhlzXR0GAsgNCdpWADKyXO9uZJX5PuCRSYWWf8wIhAMUyk8PA8EcjSBh6pKXSzyevV81fOMLerBfXfp12ZVUTKv8DCEYQABoMNjM3NDIzMTgzODA1IgyRgcEzZMkaLoQ3k0oq3AMxbl4T%2FiPOuxHHBeRkLUVbWnTi42DduCDAOqJE7x4cKQLhsYcgutg7KrYa7G6hKlRCH6nwO%2BeKVKqWssACf7QMkMuCDm15laBelGHS3iZohCgxkgaxcuXOA%2FYe8%2BcX7sKKDNlXEJ%2F9Hua%2ByhIte8QQMANEKB5nW5uGlTu%2Bj1BbUl3FPxtchs377FXfTd%2FagkGo0NUUr3x6c%2BnTybeO4e53gtRMR%2BWVOIIzMWCma%2FrfoFiBnFP6oei3KBMwVBr%2Fgslk9GbwZ4%2B4ifPuKOey83rvsG3UebC1CEqKeYezngQbRsj1Uy9ypBbWrqQZKq1PaNqRK%2BBl%2BtZqI6enf2WrJiWBGOdfyKgxXYP1eXwG2L6xw8qh4Kf6fPYaehNut%2BtH1Bek7xL9gpnqiIsIZiy5S9BSHPURZvs19Inte7x7YJdUWHQq18iY%2F4O5eU%2BVLm9qOr25GCCCow7TnWa%2FnkaprBagWEudpK61YJp1yJSzCqIz6j7DXOKY%2BkZs6jS8Q6eSHg1hoEnVLPpk8SqTj10DB4wstiwqxp%2Fyuc7WHvCMwWPUX8IOPyk4kI8PGVE6XLl1n1audKpms%2FgQ3lu%2F0cqkAzbHIZfqsUUNm%2FjJgNqJ07a2sU6jHKrcV1unL0X%2ByTD%2BhY7EBjqkAf9W7MGHlNMGvmvBDYM65wJ1z64kYX2MCni5iZWKBJphEEyKgRLFPiJlmLWxN5ZExzRpsjyRlSKxqNeMNny2i1sj1%2BsoSblZfe3tS9dLBx1rz7Kf%2FAghP4lkEXhyDP8nDIlmdHt1ppClB%2FprDRcDlHbxoE%2Fkecf3rmSP4rj2abTgkQKBPsV2XX5JOvcwa5lqI58yNr%2BP6Z9qkGwI0EWmk9ZSRd88&X-Amz-Signature=d9e299f52201d4c886d691b059c1cdf6b5f00c16b056238d1ecc7513836ac692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZYDOXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDV7yimhlzXR0GAsgNCdpWADKyXO9uZJX5PuCRSYWWf8wIhAMUyk8PA8EcjSBh6pKXSzyevV81fOMLerBfXfp12ZVUTKv8DCEYQABoMNjM3NDIzMTgzODA1IgyRgcEzZMkaLoQ3k0oq3AMxbl4T%2FiPOuxHHBeRkLUVbWnTi42DduCDAOqJE7x4cKQLhsYcgutg7KrYa7G6hKlRCH6nwO%2BeKVKqWssACf7QMkMuCDm15laBelGHS3iZohCgxkgaxcuXOA%2FYe8%2BcX7sKKDNlXEJ%2F9Hua%2ByhIte8QQMANEKB5nW5uGlTu%2Bj1BbUl3FPxtchs377FXfTd%2FagkGo0NUUr3x6c%2BnTybeO4e53gtRMR%2BWVOIIzMWCma%2FrfoFiBnFP6oei3KBMwVBr%2Fgslk9GbwZ4%2B4ifPuKOey83rvsG3UebC1CEqKeYezngQbRsj1Uy9ypBbWrqQZKq1PaNqRK%2BBl%2BtZqI6enf2WrJiWBGOdfyKgxXYP1eXwG2L6xw8qh4Kf6fPYaehNut%2BtH1Bek7xL9gpnqiIsIZiy5S9BSHPURZvs19Inte7x7YJdUWHQq18iY%2F4O5eU%2BVLm9qOr25GCCCow7TnWa%2FnkaprBagWEudpK61YJp1yJSzCqIz6j7DXOKY%2BkZs6jS8Q6eSHg1hoEnVLPpk8SqTj10DB4wstiwqxp%2Fyuc7WHvCMwWPUX8IOPyk4kI8PGVE6XLl1n1audKpms%2FgQ3lu%2F0cqkAzbHIZfqsUUNm%2FjJgNqJ07a2sU6jHKrcV1unL0X%2ByTD%2BhY7EBjqkAf9W7MGHlNMGvmvBDYM65wJ1z64kYX2MCni5iZWKBJphEEyKgRLFPiJlmLWxN5ZExzRpsjyRlSKxqNeMNny2i1sj1%2BsoSblZfe3tS9dLBx1rz7Kf%2FAghP4lkEXhyDP8nDIlmdHt1ppClB%2FprDRcDlHbxoE%2Fkecf3rmSP4rj2abTgkQKBPsV2XX5JOvcwa5lqI58yNr%2BP6Z9qkGwI0EWmk9ZSRd88&X-Amz-Signature=2cdab380b2d7da288836dd67dc15bbf26eda8b752d2745ab0f7ee51dd43b1b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZYDOXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDV7yimhlzXR0GAsgNCdpWADKyXO9uZJX5PuCRSYWWf8wIhAMUyk8PA8EcjSBh6pKXSzyevV81fOMLerBfXfp12ZVUTKv8DCEYQABoMNjM3NDIzMTgzODA1IgyRgcEzZMkaLoQ3k0oq3AMxbl4T%2FiPOuxHHBeRkLUVbWnTi42DduCDAOqJE7x4cKQLhsYcgutg7KrYa7G6hKlRCH6nwO%2BeKVKqWssACf7QMkMuCDm15laBelGHS3iZohCgxkgaxcuXOA%2FYe8%2BcX7sKKDNlXEJ%2F9Hua%2ByhIte8QQMANEKB5nW5uGlTu%2Bj1BbUl3FPxtchs377FXfTd%2FagkGo0NUUr3x6c%2BnTybeO4e53gtRMR%2BWVOIIzMWCma%2FrfoFiBnFP6oei3KBMwVBr%2Fgslk9GbwZ4%2B4ifPuKOey83rvsG3UebC1CEqKeYezngQbRsj1Uy9ypBbWrqQZKq1PaNqRK%2BBl%2BtZqI6enf2WrJiWBGOdfyKgxXYP1eXwG2L6xw8qh4Kf6fPYaehNut%2BtH1Bek7xL9gpnqiIsIZiy5S9BSHPURZvs19Inte7x7YJdUWHQq18iY%2F4O5eU%2BVLm9qOr25GCCCow7TnWa%2FnkaprBagWEudpK61YJp1yJSzCqIz6j7DXOKY%2BkZs6jS8Q6eSHg1hoEnVLPpk8SqTj10DB4wstiwqxp%2Fyuc7WHvCMwWPUX8IOPyk4kI8PGVE6XLl1n1audKpms%2FgQ3lu%2F0cqkAzbHIZfqsUUNm%2FjJgNqJ07a2sU6jHKrcV1unL0X%2ByTD%2BhY7EBjqkAf9W7MGHlNMGvmvBDYM65wJ1z64kYX2MCni5iZWKBJphEEyKgRLFPiJlmLWxN5ZExzRpsjyRlSKxqNeMNny2i1sj1%2BsoSblZfe3tS9dLBx1rz7Kf%2FAghP4lkEXhyDP8nDIlmdHt1ppClB%2FprDRcDlHbxoE%2Fkecf3rmSP4rj2abTgkQKBPsV2XX5JOvcwa5lqI58yNr%2BP6Z9qkGwI0EWmk9ZSRd88&X-Amz-Signature=f0281b2c0e94611ff4eb32de38d5f861e1bb0a4752c52994dc40d2c96530443e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZYDOXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDV7yimhlzXR0GAsgNCdpWADKyXO9uZJX5PuCRSYWWf8wIhAMUyk8PA8EcjSBh6pKXSzyevV81fOMLerBfXfp12ZVUTKv8DCEYQABoMNjM3NDIzMTgzODA1IgyRgcEzZMkaLoQ3k0oq3AMxbl4T%2FiPOuxHHBeRkLUVbWnTi42DduCDAOqJE7x4cKQLhsYcgutg7KrYa7G6hKlRCH6nwO%2BeKVKqWssACf7QMkMuCDm15laBelGHS3iZohCgxkgaxcuXOA%2FYe8%2BcX7sKKDNlXEJ%2F9Hua%2ByhIte8QQMANEKB5nW5uGlTu%2Bj1BbUl3FPxtchs377FXfTd%2FagkGo0NUUr3x6c%2BnTybeO4e53gtRMR%2BWVOIIzMWCma%2FrfoFiBnFP6oei3KBMwVBr%2Fgslk9GbwZ4%2B4ifPuKOey83rvsG3UebC1CEqKeYezngQbRsj1Uy9ypBbWrqQZKq1PaNqRK%2BBl%2BtZqI6enf2WrJiWBGOdfyKgxXYP1eXwG2L6xw8qh4Kf6fPYaehNut%2BtH1Bek7xL9gpnqiIsIZiy5S9BSHPURZvs19Inte7x7YJdUWHQq18iY%2F4O5eU%2BVLm9qOr25GCCCow7TnWa%2FnkaprBagWEudpK61YJp1yJSzCqIz6j7DXOKY%2BkZs6jS8Q6eSHg1hoEnVLPpk8SqTj10DB4wstiwqxp%2Fyuc7WHvCMwWPUX8IOPyk4kI8PGVE6XLl1n1audKpms%2FgQ3lu%2F0cqkAzbHIZfqsUUNm%2FjJgNqJ07a2sU6jHKrcV1unL0X%2ByTD%2BhY7EBjqkAf9W7MGHlNMGvmvBDYM65wJ1z64kYX2MCni5iZWKBJphEEyKgRLFPiJlmLWxN5ZExzRpsjyRlSKxqNeMNny2i1sj1%2BsoSblZfe3tS9dLBx1rz7Kf%2FAghP4lkEXhyDP8nDIlmdHt1ppClB%2FprDRcDlHbxoE%2Fkecf3rmSP4rj2abTgkQKBPsV2XX5JOvcwa5lqI58yNr%2BP6Z9qkGwI0EWmk9ZSRd88&X-Amz-Signature=aa72b57c9c0d6ad08891fff961baaeaf5d7002a90cf537f7c603824234bda250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZYDOXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDV7yimhlzXR0GAsgNCdpWADKyXO9uZJX5PuCRSYWWf8wIhAMUyk8PA8EcjSBh6pKXSzyevV81fOMLerBfXfp12ZVUTKv8DCEYQABoMNjM3NDIzMTgzODA1IgyRgcEzZMkaLoQ3k0oq3AMxbl4T%2FiPOuxHHBeRkLUVbWnTi42DduCDAOqJE7x4cKQLhsYcgutg7KrYa7G6hKlRCH6nwO%2BeKVKqWssACf7QMkMuCDm15laBelGHS3iZohCgxkgaxcuXOA%2FYe8%2BcX7sKKDNlXEJ%2F9Hua%2ByhIte8QQMANEKB5nW5uGlTu%2Bj1BbUl3FPxtchs377FXfTd%2FagkGo0NUUr3x6c%2BnTybeO4e53gtRMR%2BWVOIIzMWCma%2FrfoFiBnFP6oei3KBMwVBr%2Fgslk9GbwZ4%2B4ifPuKOey83rvsG3UebC1CEqKeYezngQbRsj1Uy9ypBbWrqQZKq1PaNqRK%2BBl%2BtZqI6enf2WrJiWBGOdfyKgxXYP1eXwG2L6xw8qh4Kf6fPYaehNut%2BtH1Bek7xL9gpnqiIsIZiy5S9BSHPURZvs19Inte7x7YJdUWHQq18iY%2F4O5eU%2BVLm9qOr25GCCCow7TnWa%2FnkaprBagWEudpK61YJp1yJSzCqIz6j7DXOKY%2BkZs6jS8Q6eSHg1hoEnVLPpk8SqTj10DB4wstiwqxp%2Fyuc7WHvCMwWPUX8IOPyk4kI8PGVE6XLl1n1audKpms%2FgQ3lu%2F0cqkAzbHIZfqsUUNm%2FjJgNqJ07a2sU6jHKrcV1unL0X%2ByTD%2BhY7EBjqkAf9W7MGHlNMGvmvBDYM65wJ1z64kYX2MCni5iZWKBJphEEyKgRLFPiJlmLWxN5ZExzRpsjyRlSKxqNeMNny2i1sj1%2BsoSblZfe3tS9dLBx1rz7Kf%2FAghP4lkEXhyDP8nDIlmdHt1ppClB%2FprDRcDlHbxoE%2Fkecf3rmSP4rj2abTgkQKBPsV2XX5JOvcwa5lqI58yNr%2BP6Z9qkGwI0EWmk9ZSRd88&X-Amz-Signature=bd010ddd641e053a9a942b8cfdfa7e1b3bba9dae093584348f08b21ea173e37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZYDOXS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDV7yimhlzXR0GAsgNCdpWADKyXO9uZJX5PuCRSYWWf8wIhAMUyk8PA8EcjSBh6pKXSzyevV81fOMLerBfXfp12ZVUTKv8DCEYQABoMNjM3NDIzMTgzODA1IgyRgcEzZMkaLoQ3k0oq3AMxbl4T%2FiPOuxHHBeRkLUVbWnTi42DduCDAOqJE7x4cKQLhsYcgutg7KrYa7G6hKlRCH6nwO%2BeKVKqWssACf7QMkMuCDm15laBelGHS3iZohCgxkgaxcuXOA%2FYe8%2BcX7sKKDNlXEJ%2F9Hua%2ByhIte8QQMANEKB5nW5uGlTu%2Bj1BbUl3FPxtchs377FXfTd%2FagkGo0NUUr3x6c%2BnTybeO4e53gtRMR%2BWVOIIzMWCma%2FrfoFiBnFP6oei3KBMwVBr%2Fgslk9GbwZ4%2B4ifPuKOey83rvsG3UebC1CEqKeYezngQbRsj1Uy9ypBbWrqQZKq1PaNqRK%2BBl%2BtZqI6enf2WrJiWBGOdfyKgxXYP1eXwG2L6xw8qh4Kf6fPYaehNut%2BtH1Bek7xL9gpnqiIsIZiy5S9BSHPURZvs19Inte7x7YJdUWHQq18iY%2F4O5eU%2BVLm9qOr25GCCCow7TnWa%2FnkaprBagWEudpK61YJp1yJSzCqIz6j7DXOKY%2BkZs6jS8Q6eSHg1hoEnVLPpk8SqTj10DB4wstiwqxp%2Fyuc7WHvCMwWPUX8IOPyk4kI8PGVE6XLl1n1audKpms%2FgQ3lu%2F0cqkAzbHIZfqsUUNm%2FjJgNqJ07a2sU6jHKrcV1unL0X%2ByTD%2BhY7EBjqkAf9W7MGHlNMGvmvBDYM65wJ1z64kYX2MCni5iZWKBJphEEyKgRLFPiJlmLWxN5ZExzRpsjyRlSKxqNeMNny2i1sj1%2BsoSblZfe3tS9dLBx1rz7Kf%2FAghP4lkEXhyDP8nDIlmdHt1ppClB%2FprDRcDlHbxoE%2Fkecf3rmSP4rj2abTgkQKBPsV2XX5JOvcwa5lqI58yNr%2BP6Z9qkGwI0EWmk9ZSRd88&X-Amz-Signature=c83ca407305d21e6a5733e71ea7920caebb9190c5240f0217492bab47bf0ff4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
