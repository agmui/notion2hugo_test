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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=a41299026424623faaf81bddb0f48303bda8035dd5898cf622669b34a7b15c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=df5615e7cdbb87c55bc96a4a3eae96cf006fa0430b5dc226db4e9d99af9f9f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=8eccc11ec2e4a9dd76f1439beccc15809d0e1cc9f08e3e99c8221785948fac36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=b0c5bdfb49c646bc3196bbbdae999ef64d1c6ac731715fc48ad1ece1dcfd08a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=f4674c9498f54c223a3bf00c9c5b4f05b53eea4faa55586a7873e28aad0f9563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=70b167097770ba3a362518c0d827d60f43ae538be0dd0bca44f253d598fa9aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=d7c2dbe86ebb493e53e28adef38113b5bd4bad777ca6358287daa41132385290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=93b58c4a0a393b0b6e98fc6e92c3479d7106be295dbc138128a193875ab1a239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=abf6ec2e7c7126537317513d836d25d45d0fb836a744e667a450706a36eb120e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=ef10d4c5c9663ceb82f7a9e1b284498079debd5682602e0bfe5ed51a302677b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XBI5Q73%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDGuU9MiRO6racs4BqIkCWcMX68R7Qj9%2B4ErHGEeWA0%2BQIgK9fhfGzrlT34bb3IQisdgMv1rXr4TgRL5B4zFf6wxOwqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYsHGKaAGMsmDIJFyrcA7eA%2Batc2qjttHK1BVlme2GKQ%2BPntcqwfr3PtTLxnS69RvskFWZMx1gPTIGNNVGpf8RxRdbk86J51N8AX94%2BF2yviUGWq80Wu5aHR%2FG0lnCKKNVYkHXZQij7re%2F6SYkMSvPUkHxu9IDjv7GO%2BDDVJpzl80HfXEXRBc8rnqvWFYLF3AqTvl2pIkDJeYDDbxBFl1pPNbOMi%2FaRDiWI02gw6FNA3Rj2tTH2Pe5lYEgYAVUJZeiy6wztqi9qfSlbN88TtwqJg%2BhlF%2F8imlSIMJQisJkie9x9HY0IwxJ3M32sRLbr82QCvrze1zSnlUqXKA64VMOJmt%2BV8%2B%2FOrHvfWFn8Gr9e0CM4GlCAvCkqDNBIiZ40DfN3B0anU2q1slusv0fZ4k2Am0TsY6W%2BHUQyOcZmPvavH%2BrhFIHPg3wdcXSaQCZ687er3GxVYqjew3jVDpE1xOkXlWhNu00xNoWRUKSjRgNaZHm%2BGj4Ge618mZczuTwTdvTsmMBbq2Bt5j5Nbl9jxOrjvTMJiBTz2t8mSFWC%2F4eyCY0pgv0btDHOt125LI3fIjkWm9rQZq3kmVpG9UgbomdnLSXCG8YNcgVkkRu0VFbH50TEKnjwRDWTJbpZ3P9NlTHpZs1MMX9tmnPCMJS0%2BdMGOqUBCCJnLU%2FMsNo48cVEEgqXuXJObnRVfWeFal%2FPOI8raCYU8dRWEx%2FrNRnOHOH92WnZNZ5itJ0aZ5Lf0GMbwll3CMUd34rkYoLz5h69YdkOiyGF9pyhpHATVI1wV1BF7XeUBKRknSZ2XW%2Fgi%2FwCQiP0CyA918J9JDoCXqzpt1Ogp1aSyqxVP0ZtZvdtLMddabyZ3Sj8EcusklVSixIMKWHaJs5PrwBL&X-Amz-Signature=1f0f9e851f9d583589ae9fb784adf6b1cd6873485558fe25ffaaaafd30596e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MIF764Y%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC5fHj1h3JwXEgpHJGkg9MXTJVSfIW4Y1BPNbI2ubTtkgIgQdYs%2FWDAPZ7CqV2QYcdi4l%2FE2MhGOH5SgGC5dIt28rsqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtASGPGRGGt8KVgGyrcA8mOcEMfCeRuFYsaDCuZCfH3ld040Kh8rXucZj3sghkRpQFeWUWk57R8CdlbquJyuRSThIlFTpnp1EB6ryyPnyzQg4A6YyaOszXL%2BtSDvOlCJs1VyRL3kx%2BsXCoCKUJ8Bwu1ZR8kLv8rWsdg9bUrDkYPdh%2FHpM%2BJkacLNlVcuMg8lxwYA0XiC1l%2Fmodvx434JBvk3vnM%2FtVL2KcLfQ7fgVsiPnVJq9m0MxGJD4IcO3i4uAXXY491xtAFQyKhEh2G5UyEiDy2XC137KfkyA3ESRIfedaXjWOLy5v6X7ACOXvF9YZ%2Bn9mv1N7zEkE1r6jjBQjp3wK8QYjx6%2Beql7B1vTYb0Iiv0y7bIsho17czNA4iMtVjk%2BOspSP%2FXFTiI64TDFRV2kZ2Xw1zn2Vs46FS5Ke0GePRNkxe25qdKrI6N3gbtSAvM0EvezZslNEdOaQifX571rZsR9czNw%2BGPiQW4Ayw4IJ2BjFod3LxT002%2BdQnoTd%2BL3nAKbdhX43TFU5nAeTgl4NrjO2V%2Fnu66l9ozUaPi5qk7xuL1ggt96H5vOUkzYgleyC3me1LeHD%2F8lTcCfL6gcSFoLK5%2BvWes6EUmy3u7HiQK%2BJvyByEmRu8Y074lzP5AI13UmnjYGryMOqx%2BdMGOqUBzBLc2qNKaBlYPWzWAa%2BIZCUIugr7Gmw6ic9B3h5AnZW0CEMcubkV71mSAlEo8NUCbfVKsKHsla1BLiGQDJz1xP5f%2BMn6iYuQy%2BCrKZkOYzOdl0bOElNJOLMKE%2FjCGvWTEgz%2BUJL9Se4csAev3wWmS%2Fo6aXTuKpztr2aWuvQDwqkM8IZz0B5Iqr58Pp1g%2Bqz0AQZKxpP0fBId3VM2aUj9TThd495I&X-Amz-Signature=99a5a2a5fe8162be26de9f39f0ee50361edf0173654df4845372b9a026a3d903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVSRNTL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDTjgdotwDNTCyFudU4svvqSwV8GY2V6Ny8k3SvYfsMJAIhAMO40lrgTh%2FKdOdzf8fjlYcC4TnnzramC8xApp81XpxTKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBQcC1GuQYryn7h%2BYq3APFVgPnN6YmmsiG%2Fnfw%2Fu5Wlit9jJxJdOUqoiDt3zPrIHG4a0csd60xj50gpth%2F03%2Fv7DIwQ4j8DE7RoNBXH5Gv%2FCljrYZoGEIOaU9j0e5KIDlp6HVWfR2Xsh6FgQ0eubtvuAteigSdbZ4WawuTr9fkpOxObWuLCL03VJBaRWIN6trQ1dB5ccQ6Kz0DDvgqTZ2nVPrFolDkK5hVrGF6TK0fIQZ%2BNhhu%2FpgRX6qkITHP2E%2BxWMaoQ0MnWEZffBvXFM9lw2Q%2FAXSBG83scc%2BfKaMdBhV9WvOzhIVoNOOsc9abzOVXDIfzy5pzBAPtcsOYIpTMUM6qxHpGcyB%2BHzkF9gR1ivjc%2FniVrgu5Aaxbq90drUiwvMUYd8HJycS6bUFjROuSKyy5bLTMvRcVXP6oUylt0nTQztMBh%2BI2ztBNFe2PCa3Ju5MXdL8xynU0%2BUXv5An2zXNlYPN1r7%2FsVrz2tEUDfcXu4fvsqdoQf7JWcJyk44FaGaEUGW79I5vjVcnLf%2FsN1PLQ2MtFMTAN7qPE3b4KvwzxUospLqIpAV7SNGykAIN%2Bz%2BbZJRO83V%2BHgMqPQ8CFqE4NcJ1RWtEV33Z4bwFE4pKzXz5JyiMvSOCJOIY1HaDB7FemX9uSbC7wQzCbtPnTBjqkAZPX6%2FOQONgHufVLYHsU3uYDGV31TE4Knmc9aQsD7X84YW%2FHuTBV%2FV0dDDET0zEJp28a%2BpSBkqJc7oj6x9qd4T8u5d7cuE6sgyBC884lCj5WuflwBELdBnDMaGDvmQ%2BzAH302bObMTqa7xyaxe33wOhZb2SlkGDHmNDiTz27iAQbCquDhiOmazUo8xM4OksSIXFcA%2BuslN9x%2BuBLqe2Z7JyOgMzu&X-Amz-Signature=bc887e23ae4af7e556887715c1aa7da8f10a92139284582aa369301325e9cd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=a49b92f4666c08defd575f66e5181041862df3f60a713985e5cd11674289b6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K3RS7TC%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDCZsjlROhqhZFkWIizKW%2BmWMIN16lbK0MbK6gq87OcJQIgaE09chsQmecExL43AmDYnQLUQJP775ZRFUEZBUxmAioqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbUrF64fsDPZu9ABCrcA%2BexakWoMeCJdyG%2F2XmV5%2FxS6C%2F93xtJOKjRQVLDzeKo319UznfQNMuK2aVa3lK31ZPH6Rj68Fc2HBD5C6NpNYwKfha9ReG6U%2BszT2oMHey0Xmdbrx0fiy7htR1EIgzwTEYjB5TPaue%2FnN%2F0ZBz83CW%2FsvCZVbykNBz1XraATtiJJlathOXgarnWbVyj54jJCAEh7cFF8gOS2uKzgLip7je1BlR%2BZWLPpTLbT%2BaNWgisZAbg1lSQksA2XL9Akk8pBDiVm7ClXNIacNJRy%2F3qMK2drq1QH19K%2FoeiYGx27Fk25L%2FbA4G54zb1usrnyQc9y%2FwnroiEhbj1ZvR7utY5bwtpXNug7rHO8pcRtUf6ZITXz%2FM8CgXvie2s7PBpPRACAXJj0Mp1skg4THXtiEwSMp7WgMmfdUzXlOtZfcY1okr4GIa61yxVcQIW6jJsMOP8D8QMp6HdaTyPA5SbDGYBaQsSN3Xu5fcMeGUG49V0NdnCLhvJKhz7hDAjMSgON9KUVeHoW6%2F5V1RZCg0BtT%2FZ3pIhLFLK5yIvKMselZ3G4s%2BnvHqfoorNCK2UOO3y%2BingQxNjCp9xkWjxvXXS0StaNdSXld3VRfFe1%2BADCY6o5wI52SiYh5IhQ%2FYeuXwgMLq1%2BdMGOqUBt78hZzu1YFOtXQugUJZ6VYc%2FQm4BjPjV8gLHTdGM4ZStiwcLGjxTVuqx%2FmwFLEUR2DCLiVY3VRj2%2Fh7BTgfu%2FLD8HDiZVxcPZttivfCWam%2BY3HK4vZ4ze4kaWVnEhtCDticTFWw%2BSz05W%2BLavS6fjpYeN%2BIQhrridBp7Mz84XL2AVVHGr9LVocYmxtpcU6yD51ANilaXdUji2Yj5xpHJsq%2FWA0jp&X-Amz-Signature=37d26a6eb05d5d3d19dd22b21a2c34395fb08ea252d0d162f956b2007da96370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=bb0cbfef1c6c0db822602a4eee55feabd465f76abf23484e100f9eaf5521fac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZCTGWR%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCm9lkPy5S8fFwhBl7if7Kx%2B1gPLkn4WQuPo3OUWkGVLQIgXZR7P1HEaNNDYIkAiNXFPhKGBvQ2srtOJuncWjXywq4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqrl%2FJh6DyoLvkbCyrcA5kMueTa9BFGH21bttvIYsXlp50NAvNyXQzqoICXi7wt%2F9ytDmv9PYWtQnWLG2QXaRebcoj7s8Ikl8VOcqKWHMupAA%2Bzs8vGaZfub74fH59OJV6gdxt6f9Txor%2Fq0smvlCDtNKlRamsciQ%2FjWytl8dP0Qs5325NQnNeL7qXpF4wFYW8RaM9NnhIgxpLKp7He9R5DEMtXwqFbNpUe%2F9QeRRpDNwuFkK94vcUdbuoXC9tTu4vDgowjv%2BdFtmXYxrciUnwOCGXKw7RWblvxtPPQc7LAWnn7Cy5nY2ZkeX13RliNR%2BB6GjyzXwljoTByL%2FLriOY0Bzmm2MgDugPf9JgAweJJB80tDxV3pYs4avmw0xdyfs7gn2jNQJNKKG2p5ebUk8jVg%2B6orTToM7CG8libJGrul3gK9f2bWloRDcyH%2FcHeeHxIt580y8XomW8P4dOkGhesxw5Ozz%2F0TMZefYG1wP494zXtJSNGappREyQLsgGbzLZSF9vYiOKA%2FWvFowzY6udYzUVGPjb1PbQ6QqGu9cT32ODDT40Oez7xJ2a%2Bvve2qT8%2FCcYEaifkUTl5yL3Xc3iZEvrquo1bT3yIpZpq4Q9X9zdESQa0X478XcGBpTp9uw6Za0GHtRl2AJIDMKay%2BdMGOqUBAvrqnZepsyBGPptXYRCl5jIAUjR8qiDZjoHnPMU0hhGuXNLN4rhVL0xnik68zMgT%2Ff8WZQ4xooUeZzLr8srqp8ur5j8Z9rFtG5jLGqNx3DKVcQV8mbxozlukpBFAR%2BY5NOsBYnw8QS9xBOI7tHZlopczKJ48qXdk3Zs%2FuIGv9wEsrjshWbZiJ2p0hTmdasy%2Fj2TuiE98S0sb8i3cS4Q6k4fuvg0d&X-Amz-Signature=954e4aee54dbe04574a5015c20f10ebd17d325e58145c3609949992e5b00298c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=4be7dbbeffd9b0afb73826bab5095c8b1419617b0232e605ea344491a0ce29b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMUG6DR%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD5HNWuQO4dkCCRAE1hJ3lrAsROw4j9WrhY%2BM2GDDx1kgIhAJq8UOvKyq8qoEv9hJG7o0TNSESOxqx8zb8TA4pi2wwuKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BTLeQaSapX7j16T8q3APebZU0NkfLp8iOCSVPQlT7TVoN6KViSrjmHg8YDCrjl%2B8gBshIOYRsLlCJxy%2B2%2Bhtirv%2F3KL3ws1lUjmVKBjtvmE6%2Bj0IgKQWIz9%2BWF2%2FeLGYaHzXOhX6ci4gRaf8eI%2FWQkO6MwP3DyhzOrw1xiVGu4KOdEf%2Fc9TGqWwrC68yw01LuVz03Es6jjzdrGmE3F%2FtFn80A3i1AMys3BjhrGZB3whUjVq9va%2FaaxrAAS3oug9LAbhwA1Qf2p4REhlZFJrcK0QCTctKW%2FScra893L2ZccJ2jaV23YiVlYygYMNN%2Fd6hPnD%2FWP68FfeAwk6RX2p7PHwZheKdPTTE9OEUUXOi8%2FFf4GpwL96lcXm4LYSA5LwrYVowajKcORS5pyy9KrzKEkc%2FBTVv8o%2Bit%2FN867mOJn1bg1H%2BqiDv1QwCm02C22V8n8e0VA6iMMuMhZsyNcuxu7GJa%2FI1%2FwmkPOz3If7%2BuVJ9P5EiOmtwDx6%2FTqS1QfAfLcGiChdi%2BGUW2mGM1u0MHgGMzTX%2BkEHNIovUIvMksJkkTnztin9iPXRy1sbVtB7K25yQi3i81hykSkcUcKC14izd6eeY2UFTmBka%2FcjZN%2F0rHpBhVi%2BOa9EKO4AZNh4smrIaJxLuifnKL6TD6tPnTBjqkAUcA6moIiF40gduMgzKgBFZOU%2FrNawynVqf%2FQ0iyQd2u7IWKAuGo1UwpAiVoRKLuSkchPu14g297hyjLpADEo%2FNt5TgE%2FKVB4TU1zE1sUgSesq7MOlf0mmyczUlvDzzcdEmpOigBlseQSngXx2zRtaEHGoArlZGlo4jLRRqo%2BMIsRsKQGh1FYOMyEHMqsPHmXMX%2FqHzvC3hCrOLyQ%2F%2B3mwCXPpQ2&X-Amz-Signature=76fa94d1619958c68c52d4b5325475d9d871d7951a6077052830989265e9d026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=8bc9337b3739f0248e8f0259f3faad15a19d1e3ab6c56428e0399bf75ce0b3e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ODBVIUC%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDyBpH0U6ejUkNG4%2B8Nj%2FjT4%2Fj0Vpuvjrgh2TByNZNIBgIhAJQRLkLGYG9bpMbQXeVcqo27wtrLXsXgj52%2BXnnIJmt%2FKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNwGIP1u1CZLnuNVoq3AOZ1wOc7sBKboXWuTk1lSlm1gTzKMZ7h5mrvgCqfCEc0G66w5tIwokaE%2BLNXYECtnOniP00%2FS%2BrLvF9%2BpyJj63gzd7oDbyi1hiDfBbo8c1PWujlaX8wdBezQH8vMFURbqLqQOpH8AG6%2BxEIGyLsIn6ZhyTF8%2FtCaRm9l4XkYJlAZsexWjFD852SgJ76%2BQs%2BshMaskN6r7qJsxlJJnttjWri%2BjtBVuDXt6z20YJTFl3TH086WOi8onjewyosETYhKyE8Gl%2Bw0nKGh74mii%2FBNiz%2FWM7T347nY79bHSzARRMpJ7QxKOV6LQW4IGXOo2RWJZuJmegokgLtouDHMyYPtEGa%2Bj3rXzBpEG35A2%2FdNFa%2FRM6%2BfpqEIzXWTdFvJTmdMPgd0py1zyApULrgnbbzTfZCzcwF%2BnuIZeZU366%2BWKpQuKLb0dx0%2BjhPyEiEPlI5x45gbaQobiZgtqfeDXgrQZIhUXHCNpTJn%2F6g91TEtZXjuurWoiH6u%2FrgT393hZ6aTodsZdqVgqNKxquoYVtMehLlM6LUqQrsablRWJ3b9HfEwlFG9%2FDefhXGjgPjj3PmfiKGv3WQLx%2F26GEFbUSqLNDHzhFoM3gnzIa95C%2BTCILvi4zf%2FeGKOx%2BF1jlb%2FDC3svnTBjqkAecmFKMYeNd95E5MLIkInv0uehfWcryXq%2BeHhJNNL8qujFwKj2xDFbquP%2B2L1EGCghw%2Blqc9EmS19KlFBTceffzYA9olgAU4i2wHVd65eepSmodC3a0fSVA8JiVi3k%2BNECPO3Ejidzshzued2yO4mKCWhwllfpspfJig8ulMQMvBae39GI0uWNPAO6sD7Htq%2FBpt0wzKdL8rE4oPBKjdwapH9USP&X-Amz-Signature=478c3c8fe8c8689232f518041457728396b957de16aeb69c09e90fc0fc75dec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=e550c51e5ee711c506819418e5d1b238ed226b12e48034635f6543a3fc05c038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBX7UVX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGLU9WaFBFD1b7Q3A2fxUg0yNmLgpDtXnMyhWjt2r4dHAiAhIbO%2BxjxHA3%2BvK3e%2FE%2FG%2Byqstb%2FKQg2y6f%2BRsekZYPCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMUnOhc6zTKHB3LfTKtwDMUrSsdXVTj9DLkL7RNBxNIcAMOy3WA9ELED4PYkNDfWX8I1YRsgd6byx2jkcQNO11i3aLoBR9qk07sniABIP9FUSigCeE1Ptx%2FK3ijaZKY4gV%2Bj%2FhzhRGcToKMKbEEEfgCX5YJrhAaK%2Bdf2ljOA4qYodPYl0CeVr4OX3IAgnd%2FNOE42wBV4JAqaNEh4wQbpve8rohJghfuoxVmrHGHEADTFZZSvyu3vhAOzkVjt%2FNHpD%2FnCTlJrTUjg%2BepP0AQ6ljDddR5gv8Fv28k3%2BuXpZ7xLzkPbuF0pNfeOXLnDagCmbVOn6uB%2FOOjDnlJ7xnLKWQg%2FCsN26QXdu6psKy02BXEHVi53XKkyW8YbutoZ5sUBlDdHcPEEyok04muQjyZsCDP2mUOso%2FZi4cz6hv%2BH9%2FLcjEjVXw7OlpfX4kM8GaG9OIjHNr%2F2Fqv4iBNrNEl3ge41%2Bv9LPN2s57PaLlvw8nEY99TXXtKc%2BgrukEJKP911y9Jgv9Giv2xXRylnAIvjTAw8mSyalO2JQS1MG8xgUJacc1og%2FUIaTIqGSJmAdOmqtuXfnVkaCdl%2FJ4BdnHMPWN039V%2BJ3ClUfmTx%2FVxdq60uLzpD2oLb2Ux64%2BWzvq66%2BFvP2PGvfCADgxIQwprL50wY6pgGYDgrrriUjwXE4tp%2FIMbQPGY%2FfM9z3iLUFYMSNhRMNot7JeP%2Br4Yru84naRGzcjsc6Gc%2B3AL8TkybYXcMZ%2BbqSzj3tNK%2FIlTB1Pmq4b5GP%2BRE%2FnM5kdghr5SuqmkT4Z6uevlHV53%2BgKq1%2B%2F6DslJD9N82OVIJOhSeLbm2AsgCP48wxBYl6nYLp44F4%2BScVF5KdK8Je1LFCn2EY4LPUPZz4Ju15Z0WZ&X-Amz-Signature=7556ad9646271d81ffed09bfc4ecee7d0b4f26b900d8f338026ad78f064e633d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UZQDXSR%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDLjV3uwj5wKVo1V1kFainlNuEZ0E5E7cGnCmMj1HhVvQIgH4VB42M5gBloEoUK2biFo60zl5zZCWEJC3HHss4REUQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1hjY1%2F18WGu6vdbyrcA4%2BvbxK9n5IpwU6fREfIUh%2F4eF1JLHMMIedLru0SOEwbtrjvVjfPL1chOlb%2BhiHkme71tWIn7Xb%2Fmv9pCQvbDsegBwtE1X5xq1WchIF22YLIXvcLgu2MIZxackvKm32Dl5g%2BBEYjEZ8N2xL8qohnfmoNdNihXZGPwJlT%2B1RD7BUv3l6vCAvqzhk7BBZ5uJKX9GpMAylJW3kx2EfqzpL%2BJaF3g%2FEwvnaYSDLtCs0DRRH%2Fpwm8emNEsllZWkxuWtqAobNWzYzvwwnU7yyyPG%2BgiqowrP7OqA%2BZxAP5eDmy6%2B7EAdiYIKkt1eYQDFu%2BgYAzJJ3HCHG8hsK1FnnumbWjmoPYQBqzptl5k1slr%2FClx%2FE6r0tq7PAwunW%2FXQux4y4EyCA8Dvc539k%2BSDpGg%2FD2A3YiDHyPDd5JhrT%2BDZl6IKSWXIuIYabLJncTRhEj4yobhc7VIqG92dK6NsSJxL010toBuqmnyKWFd5CQ63RkiSd%2BJwnmrYu74bm0W3DY2fSAYS6DJ1YG50BZZT9An4KnizcYyxxdr2XBFs2W62ipf0%2F9SrdAaG59WO%2BLeHv0ft2ZVu8Q8Cj%2BuM%2B4xyMXTJHMe%2BcQwZUST8WLSONmPiOMooNc%2BrRA9uJORIbQWICgMMS0%2BdMGOqUBDnQbmZr07iTMMtmz6Bt%2F%2F%2BcqzJt%2F%2B5fGpq%2F847Iye2Z6JgzdcwPtLRHHjgc6Do8j2GwMI0TxwHEkWYoWyUbHsDWAnyzNdDSJp3O%2BvucRft2hsBu3wsrIlhKmsfE6zsAZQv1hX4ZgPlanlz9ahHnvkL1HpGB7is817cFb%2BdCOxFZxNdFAbmCP7%2FEM%2F9ylyHCoI3d03qy%2FwLSwMrL%2BjzQDxtWWFyeI&X-Amz-Signature=909235859329e0289a06fddacf34bf415a64c0d2da35dd3f82b1a416999ee212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4CFCGF%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIB8%2FVy2q6xS7QaAiE4SppCU5rO%2FrWvRg%2B6U%2FOIx27dx0AiA27%2FFNPpkNyqXDLbvNQMnH7LrZtZklG4RnNAN%2BglLNuCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzv3N9ilX5UOzlLYZKtwDm3RHwHzkkK%2FuC9%2FG0URG4cwfCTBW6w4gQNtlMBKDjJw%2FExjoR2vCV1ulGmrdNashJVNf%2FqOHk3f%2FEk7wgdk7l9y2B33wfvfMITKdnzHaMfvDqOd9rfMIapKiy5rcRxJKJoeLnag4oAklylm7HSI4fzdThbmVQutfty08eKWN2d9zoyQMFBinQI3tX3q2ESyDmRAQJ%2FE0M0swT3%2FnruPtdYtGA9XeIUbfxJVrq4aaxO7mhZeo3W%2FbVtp5oDHZstoPAd8xJ5VQANp7NeTxdBgX84m%2BF0d7uSsJXDEHVxR1Ti3dRR5XJTcJtaZBDm3qrZNgVIRyFKG39JZKKNIkI0sHPbLOFKT39u99exdxYBJSwAoFysyHYIk7SITNjGHRYbj4J4uZZu2xGzY8ZLhDsGZj57xyn8twlVFqsD2Wg3lSSq%2Fvq0GcpfQ0x4drK6%2Bds0HtC5A5LvsReoJOgIESt6tHQuH5lfSgwbWK3EeLNHGEst1w1%2B%2F3I7eFhfKF38JxA6UUCtS5DUMePNO2IetHI0VU9c3Ke8SMb9w0IxtsiJV3xHo6eswJAILhVhGlz7WQBBLLdaxrMPlU5mazUPZNrwk19xtz5PVwL%2FFhVIpjbbLfhlYjmqImJaiUcBzT%2Fk4w77T50wY6pgH%2BxfcMk6zFQNZyPJzk8K6ICEcXkSMzAayA2QvyMAcMphoJB0atpscA4naCvo%2FKnn%2FkPkVbpyjeJGFas07FqhOSsoH75%2FVdSt2P%2F0GR8FBLy3LIWcB7pi9RaicOo%2FptLwkOnWfqQCA3LJr%2Ff6tbvOpKhPUBFAyGc8EWe1PSmF0QTn%2BvrBsUwD0OdBaJzB4etxQxt0xB6MHw1xv6L7pkNKLbd6hlkXDs&X-Amz-Signature=c54676d74b1c1e8cfa391484fa25ae82dbf29d4e64eb130453272fc13f06f4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=36f84ebd129c75f608ff66f2df72668c2863bf98e7a69f3378b5f3d72c3cbf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPS2EOL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEPIlepewE1BoEStNZzIS37sMOw1Qvdx90W3axf8I%2FTjAiAqVXCDgsEUaP%2FCJghFxXYUUjnENk53Epxpt9vrPw2V9SqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X9q9Ot1P6SVWx7iKtwD9Q40cd0l31f9OP%2BFQIL5H5SdNhDrCEOSroN3QhCRD6j7jmnoyT5OIeR6LF0vcdS5JAoWNG9ZrUtOPZj2UvqtlcTU8IcGenID1BO0S3eZeTNW92oFOdrwsxXRnJ9Afjyn6g1y0HgUl3nRk3i7O%2BHVCIU8B1JhyGQYMUIRNccYXj9dc7mLCooq2DtP9ZIzIfvzB7pADwOT849pPR7VdEus4VvRf30zz6j0H57NR7RC7%2B0kyj%2BB5QvhI79czanTTrw51Y2uCntVfm8tPNclnArXYrL1jVDb5t%2Be6GdZ0HLN3XgbjmQqH5QWMt8cKpItQG7PfmQFdMgZ0PVej4rZw9B0i4oSDgvchNSgo7dTkQ0owNLIqTFX0580MPNd8CaT82tSt1f4Fk9HSvUxtKR12vjyi5oRKQhU%2B%2ByGuoQyRMzDQfWskLQDUZzjVetHlj7CmoxoWujF3cICKv7N2Uoe3UTOL85vts9IcyUC0XTFqj8iy%2BFuIu8gpEEWYZR6ANsBFEO%2FTcmcZ7FaOuSTI1On9axNaRG2VkKSPhYwI2HAHkh8HjRXnZHLFb9imY3erg5YREniMaXa5pMhCctJ3f03o1UGNugWoGE%2FRe1gTiTl7q%2Foh%2BIMtAi0aWmeVba7jCkwqLL50wY6pgEQFu4dc9JLKQlWqvivGlJSq%2BgPyFvTLjl%2Frid8yzIf379XOknQ1CeVGoYH4vQMjhur0dDbS6fsbzP9MrHsMm2Di%2BfDPmwu5JRnBVNdNQVrWAlGM2EDDwN2ereXe0q0k%2FDoHDlol0D36dBI2vCJ6QYjFkgwZP9q929ntTF7Elq7IoaV1bPuFQCsMONioJC990QBAp5dfaW6SK01hhOqouPyMLBvn4aY&X-Amz-Signature=105f79011f19a4d6af7a4ac9eefdbf67466cbcf0dd0f12823f1df68dfa1b9e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=4360ec63962b86888a1194e7772efa90f6780d9d27f3173df7577056b9928fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=0e432bd8909c4430c638a33aa1ce63e1c6c652960d45b9fe1866b3fa4ecd50f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=cec20963288520671778f0d2f318061f2ced92859812986ebafbdbbb8e237968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=cd8d5ddd15e20284056e7ba7e06b2979ab35d573381b15f38182993b992a5dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNPNEP4%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCUHH1XlEPRbik5QMOa1NnI1GIRBCyOVtuJE0vwVR2YLgIgTvjQewhrmkMx1DR8lbDjeXjfB7AYx89eAx%2Fy6aaT1YQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFR3wS3%2Bi6FJgi9l6CrcA0GSWh9Lo4uVOagLXBDk2zTrGbHOEtoOcQWP09v2YNr6u%2BnllXmExrCW7aBeArnroHvL4fggPGpsCyRj8tjYxawbPRk8OO%2BFvIfj2JmfcJFoB15ulx5YH9NiWCEPD9i6vGViarto0eUYOorHtxaO2%2FxzqtbKqbZ1kmIqoaX9OKs2XTPT%2FnvX2iEo%2F5KiQYPv9JD%2BMZyx7lXcNL12jCQCO4imiuEicVRKSfEEChHd%2FgnQ0QwmJntRDIl1WQOD9cxFgnLypCFPmoe31Dn%2FGI5Qx91ormH4xGUscAasemlEd19HhNtKXXn%2FIV5dUP93hg%2BrhhtW0jJN5nFJjMnei8HJZ6Qt6ha5okBiHw1mNK%2BFCf9xwDcZ473YopxqFHg7tZvX2xp5bYJ4YkT740Sdezq%2FsefkuaAIpg6F3C72uzC49QEVhIdCpIefzC4d5kuR%2BsQXb1fEd9HOMpEssqrtekwz0TFHD03icZ3UDfjIef6zYFoIE9%2BRBqASrU5FW5slOUAb6PG5pOxXsNIHgQY6H2RKMjers89rLFKcIk0%2BVfd6SjbElgZ%2B7lthCFiWQx57fd20cAMexw0LLKjknporhLQTEa1DAW01m%2F1tkYoSmR4ldU3B5Zig2J3wlRa0JglOMK%2By%2BdMGOqUBCEKlMcCBsQaljg3m8VWgbTqqlyNFaPobWYjrKTyZT7dnyDdr5onGNUSG0EcQ%2BCAwzu5PSwqs0nxDAbu0zR19%2BfMZ0ORvJVo%2Ftk9ENusEF54CNDh5p927tIjiCiJ%2FHvJoBOY2AVHUSZQWACRH7pREImgcDq7E5jg970rFnCESES5p1ECbOtFWH%2FIq2vRYYb8A65aQ9OySL4NWcJhM9Bg0HDzPix2Y&X-Amz-Signature=c21b29f5d35a8c3265a064058253d0e51428e17f2648c6b174c2906f6b38e463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=50d918da6f5e576725b131349cdaec36cf2f742708e6ee3d15e29edcbaf18d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=da5af305534775f2cbc221df74f11c7f0e7a0fe4b8c65f9aa8502645033aa43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=cec20963288520671778f0d2f318061f2ced92859812986ebafbdbbb8e237968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=05a5687df104c100559846fa2b32cea8bc640de93d9fea4d66c9daf7973f729b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=0d0454e04b1696e49b24efc628dc4b5569b7dc503c664aa22c7abcab523cbac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV65HJKT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDYM0mEOd0n9clADBpefL7FcMhcLUpBC4WVZLAHr3qAnAIga7IhsJFOJjB3ndbrovkIn%2B0vv4EDR4xw3mOn%2FlPMRYMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2jfLyOekC2z04VryrcA9wUd64DwERpqtcby88WptafRSwFHEEiXf0F5Q71uWJBBgULEjVRTgpb%2BOLCsABwf4pl1Ix7uzi172msppOuIv2ZwUiHRm4se80wGvd1jyziBr5adJQ048Alb9xnPbRuJKG0aMdtQTO6rRGr69YVwpTGaDbqhiaceWW5s6E2xr%2FrXbpEX%2FeImzuTizzPNiC6a%2BQjZByRp6R1%2F%2FZCnw%2FAVw1ZW1kkBvb4dJzzD8J75G%2FfeH8oYQ51qOWgzoDjbKKHcyHbF2rG7%2FzaQ5HizolmC3sgMaUiX0Uqt5D08y20uuNfHU1ZFQ7wirksXVjdbRa2vK9YFgDbSSmp45mTkRXQiZZWZN%2Bl8GXNLBBcmxv5uJ2%2F3dZxO0ckZxJdyeZx8PaCWcs2N8XVyAM2la5gfJu7IonhfdS2fmb%2BRc4lVKG3veDECupBYXpzAacdZoT4db0%2FSTHSn%2FOvbDghflTOvunrdNzn%2B8V%2BBGrzkHLcR8q1jGQUigS6OMiWo4UvkIcXgcyccUujnT%2Bw8wt1f35GRW1M8VSh9hvQqGZcIKWxoBkWfJLvh%2FUXNkgODpKBe%2F0WA%2FfLvtr1vMZ%2BIWulfBlIGQTe%2BRQFRevDqYu63wCPDYAmt9gN6CdQCIuWELWEgadeMM%2B0%2BdMGOqUBBABmqVhxU%2FTVc2v%2BKTmiOG22M0QcAgr9FcI0WzPIbRTb6Wrrx3itXDtXA2GslcoUO%2BBRKAw1UwBYG4EIy4GE07oNF3KGFvOGYb1wEl%2FnzrY75DsNRdiJUFRJv5XqnrfzNgvD4WuwCf%2FA%2Faw9%2BTHiwNlr3TXUzc7%2FN3XUIElM2sfS64EO09K2m%2Bf1ZEKBzbWcTpdFwUt1CN342euWpoJM3%2FoDf8Gg&X-Amz-Signature=8da3d03f11e4aeee2dd0ba96c4c939446cb2853e5f8336c4f084f8bd8be02a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


