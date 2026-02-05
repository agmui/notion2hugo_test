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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=da88c45d7c55902a9df79f31dca38551fe4ec7fc2337e58b87fe8824cb4b4bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=900b3148725b44c9d49ab1faa76338ac75b2bb839f9ad338b70487411c3a65b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=2092e3cf627e76c18a46b8690c7729886b43ee6a76516ea96dc3883ff5bf021f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=b511e866e464fd5334112209ac6f1afa7817c1e8e618c5fc98aa33b172345f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=c236dacd53e5f59f8fca7f0291b60899627f3c633fed08659f9b51b0df2a71da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=c0e0ccd458dd83b7a74bd18f109093de10078f4538abe1ed59378931657c8bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=1b42d8e5a5f86b582bce791bb0929c98f9151ad89a757a2e7f9bd1d134cfac39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=57ffa38e0d03b02d57e971564ad683a5ace6509dcc6535dc20e87171374110e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=192d9505f328a741eef4cb6e7944a308dedc4f13d15b96b122a84616a80c96da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=5597eea7777ee6ce4c19acbe0391a9767eb368e89baea75946cac2b6f784389d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NVD5YCN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIA%2FueTHUqEm451X2QFLetTnelATvSVBHolnkEXFQK3rDAiBVTLnO6B7HM05NUfBiOkiLyWEpD7Y1kU82vxl8C0aQ7yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMHOV1bGRknzggjgdiKtwD%2Bi%2Fd3ijLO4aeYDY6ootGwuvKoQLlajpCZlbK%2BIgRZtyAECwF79Y9VoZBRASRdV8zWaNfhlNpeKopzmlnj1VDtbN2sgNzuYw%2BFv9OgbmpyP2XONpZKsAuHC1orE5SNm6kc2KhsyDL109L6ngHlW7RpLGon%2BLDZFTO3Vcp2Lk9mVSJukiQIJi4891wAmXzm%2BD6g02CHjm%2B8SThNUjhWNc4zQHdjcy2kyBp4N9Zkr%2FZEATpsjwrIL9rbUekhomB%2B5%2BIxJiWlYlQ5TIPjzpHzAr%2BQKyjSoxoRsJtgmxQqeYeY9qSYMO5eM5orODALnoj%2Bs07PkgLbYoto1YC8lhJKdLnL2JRSsJk0TcA%2FIfYnDgRSVbI0QMtBBuUYFri4Me48mIiRoiVzcuBtPMHVkZDUJNKvH5SpU4nrpmw%2FqRyMvxUXQiWCVDtzo8NCQx4DzNAeA6JkgkDPzsiVRttA9et%2FiSnNKZlqv%2Fg1Sq5wwR5UtxuaXh9nJrzQjwxIsPMHUMo0Ox2ybdGZhdaLQCpdv1c3WqHfSeEMoK0%2FHj7cvCDSwLzQxztPHXbew6PAqMEOT7ZUcrCMAs%2Bl3KqYUUvcBKM9GQ8OFKcn0ZDZ4SHor6DuXD3nWsR7%2B8qo7m9qiYUuzQwmM%2BPzAY6pgHuGhPI95iWbTuJ8Bck2R7KgRTdXkWNyNZfdOjXf8%2F8d94JtSW30i7JDjdXgs%2By%2FHdapK%2Fd0WXx3hHxcJLRktWpijYfBcklC5StH9nDEBKPIZERJrFULFKLlNWjrntvThA9Thiu1iYBt7fdy53JzjG6Lgzj6tf3%2BI7%2BVDhVIJUzF8JaY8rFjoXCqqAvq%2FnImmcrWvBJQuWiFDaNWxi4M2AnlRNK%2FmwZ&X-Amz-Signature=cea6254657dae1728d0a330d8301220c17f4bef85f5477ca9b351af8c78a6f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHVLM4R%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD4VySMFrVdQASSmNOc6osMW%2BQnqzV3LreWpzk5hQSl%2BAIhAPBMdOcYTPUMimeROuYZ%2BH0cP1Ty70nb8abI%2BH8HFH8WKv8DCCIQABoMNjM3NDIzMTgzODA1Igy%2Fm4BKfrv6tU2rg%2BAq3AOTffcZoca0p5giquUIXqmk5QhRevoxNiXeloldsZYqvBqvEWs1Lqs1cAfNurKjc113nL6xjbJ3ftWkighBlTQvDetvWH5RM9o0MNs1N%2BuaqN7SBwJ4hRI1J7ycDgdswKlFgIvmd%2BmLNeTHlcbQQg3WcdzqBP8rkjuePlblXyA5iHS4qkP02skyuLuWcRx36XsxS1NCglMitNNDLdjcfqIwmZQg9Hx5iWrG1gERugzMYOb%2BPXH0gTsDFdVl%2FsAn3P0sJzrcpul%2BEFZoWVW3QOIp44xIGY6hjytUCIwYcOOX5sp5R8%2B98xW5Ym8pznrxSw0pZyo%2F30E7an8gPptPcD%2FcvayTBG9nnOnlxrG0d9135L3HngZsfCjq8fJjG%2FlzNUL8%2BOn9Ar6vdrquclzisOyvcSnCFXYgyxCK6XWEL%2BFbFnOVxACRxupfyTdVDTKogNZEOWytBDvI6RCELzQflx%2FCvwSZN25OLa%2FR6TFEHcaNA62zxe0I0kpVEm1AjADURgbKtchCMKcsjxyNcON5b545zL8xohh9%2BGm9b%2FJgMP13TElfqHoXZFrbQwbzikJig2NCqz7dj4tdl4KE%2FwGoyiuBBqwm8j4QV6idWuoBYJ%2B7pXeeiVNdXiegrbdHmzCwzo%2FMBjqkAdwSNkwXTg5eKxw4t5E0OyLbAo4JSoXLJkOt%2FYRKdQLcrZbB7obwv9w5XAsVQf02R332oobafWI4pPiOBBviHstEvMYQ2P6GaVJYS7NMP%2Bh94XC9eSR5W4EZzbL1jDDnu23PS3zlbHu8%2FdEiILldnRylqPpWN0mhtjRO3MDzVmyg7%2BicYXFhRId6zGB0umuONmjKlnwAXaMr6Bvt9y9P%2FZxQ3wBm&X-Amz-Signature=8d971043fc421b87f8aa1f83cd936149ac6e34512930004085d2a07b08f01291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTXVAAS%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHGJo1BLkUDJoTOlHdkzFnr3%2BYs%2FepxFAv9e9ej1wcEWAiEA6zjwexVGsCvHjM4P1WqSFkBvFCXRlhe8sK13gzYRFAMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOGLJuIDcMAr8Q0zyircA5d2ZLm0ag7UNbxSo8YEkd40q%2B3z3gL3hvDHkW7dX9mPQG29R1mdTC%2F1%2Bmhuf67v%2BpnEpn1rv52D%2BYvYJf4s3AwkYnnjJJqNKrSrURl1gyFtxUGfp1sCZVw77Vai3BeU962H4pRb8kLzSsQNuqpisw9625ZowMfRQZt2d1xg0UUXV9opH0KbNY9DWtg2CuwL1xsuvRH9%2FtblFI4aWG1x%2FLV%2FAOGLG465JSgD0jguKlOzOB%2FVGS0luWbvSEtRyr0Rha7n9%2F4BVihFaiwiyZZDCW%2FnTwZGTMf4zCTeJbrrkTXSRUk%2FPbgKPUE6CPKl3fDpAiJv2ZglGIoHefy%2F7N47hkqFx2bkdBkbSiG44qjqurjXPE4LNpc42gU2EmSfrY6mp%2FB%2FhaIZGxW%2F64Iddd1ZrwKLoHMbe7yXwqUfmM5%2FAqEo%2FNqTtVelwxYRFAfmNUSIcDVmVgA8gzC1qkOR%2B0e%2FTVu35gC69Nv6ydjKaIVQHh4%2FMYKVfMD93tGimnKLRlruitav%2BsS2wADGHaCDrHQqkr2uttNtHF8okAyT%2F%2BDkFRzuNVF3gWC%2FDtmn3rA1u5wUae%2FLMS0HuVQ6IzRmdhcXwXZrBdLDAN7DxaeY9Hg1WrJCS%2Bh8D3FYqk5RWFZAMJvOj8wGOqUBWEZw5QOhGt7Sm3IPQR9J4foKft6QeeN3rD9uBIUcpTLhUbYa2NE8xEovc867Nv34Uk4Pusok67lS3584bXhmiHqjU3TQDHAiM071HFpla4X7MNhQYaBi098kju93wR4EvsFYiFDw%2BIutBk8BZvU5jW3S2vLmGDlJ3TQj3pN334Pg2iZJRrw4bB8xDYH%2FQJKAoqlJZnzEp889ZLiPP6pooI350cek&X-Amz-Signature=49088f0a9e97db9125ff3e19027dbd8ec942bbefd733eb1ec4a636639e361c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=95d614e9237c1eb61725de2f74e021d893384af1d6a78ff4705b747bc1552336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYLCS5U%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHN1sExJB2P382w5ZyEWZUUZHVCL1MYG0BaMtgKlkeClAiBsCjo0Adq6nJsRhfMCpVYWgljbodq2qgg4bn%2Bdr7ZDDCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMcDt9KzSfpDSVG3ekKtwDYPBVO151c9IZysoln4o1hcP%2F4KyHJI5LmOFwq96EIYVyWs6%2BkNJdd7Ko68S4meAlne%2BqDkWEyeNg1acw3kd6mgVj4wSH4rXvGArwY2eZzjLon94D%2Bob8tTshHUGY37equeWfno3S0MbKBDz0CFV%2BKstj6Z4KpzMADbl%2B4iKDSDkP61%2BGdsRJRNf8qrmVcBOYEth9q1ga9mgacjoai97Bem%2FJebFe79A67cDnGOKPzxBCOkmJeAt6cxdzOvKL0V6FF3OsMiy4Jgod%2BN%2FwUjMFsnfcODCjIH%2FsBty7kcpZeaA8PudXQF0JRtMDDYhXMi2Kyv%2BZ85Zn7alDiRxhXva584kp3SrHXumhExfP75%2F4WRwXQS%2BHOqlj8IKA%2B3th%2FhyKiykduqIWMgRq5TSnKChA6%2Bv0Ho8NVaV0DJblJaNGp%2B%2FCjl3Ekka6eVbIJI%2BvEVszce174Oegex59H6fVe6GzpLfNJB3V8CbpRcJEEaYvSEkIpkrtLctOqToPghiMcsC713728G1hhqOCUURmxQsklJfBtLEcP0akSBOPyz%2FzHxRewnNsQ0CHAHkX0YCjOEzstUXyy6s%2F7GryLun7ZagIF5WddFyb4w6hy2Tk%2FrR6YT%2FAz%2B6Nlmw%2Bz%2BAHZUkw8M6PzAY6pgEeVovl%2FS2VtK25VzWq52Lyp%2BPzXtuWwprLdlu%2FPbwgi2VWukfG%2FW%2B3h4Yh53qp6StFU%2FMK%2BNqHLhKwzBeZcqoFTRfNAXDjI9Mf313TIShH04f%2FKKffgZZ0XZRrK9a%2BHl0jD%2FwJW3v8yJkr6ZT9STQxESWnyJpTaxLgO2SzAkSNC0wE9PMC%2F7yai8hpRrn4vxB3Fs18TSLfQjH2BCcZBH5GSXRpvbXv&X-Amz-Signature=fa1062513eb3589fc1950b56cee7f23eba7a3df19d62e24876de58ed026e14d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=8fb341d943b2169aeac13be27e6451a2603647b88e2e9255d5a898c37cf0a49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEPEVC4%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCID%2BqEDh3j7xsEa6kvKQNskP3FuIO1Vej6Xo9OTa%2FYSfOAiBRoK%2BRV2Fnk3dESkuAm4vHqSsrOVdr384lrmP04WS9XSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMp6xpP6IwFiU85XlvKtwDzwfwRML%2Fq4w2%2FCxj0csucdMX4KpazWrGVL1d2cHTKnRXYdmy%2BqDNigRa7i7yRI%2BdNibQ4ozpfH7p2SuiQ7dH%2FsJvsqxUGeFdWdc%2Bc67l3luvI%2FM1Jc5Q%2Bw%2FJe%2BPva946CuwvyIKIV0ywJ4m7k7tuf7s4kRixyTEN9nB8v0IzBmhxl5XSpkrTtRzhWY2t9Zybe%2Bfu6tk4gzTb9G7zJhzvzmQjB0ZgIf0xSIJGi1zTbXEpY2MfPWqY0BRE3M5CHc%2BC98bo6UABX1YvEZkSS3Jouj%2BJ7KwFW%2Ff9tTDKF%2FGx3IbWR57XQU2BzhGu6T4LV%2FAuXGGeaNOCo4i7mIomhcJo4Wdgab4hu%2FVkjh4g0iDloGqg0wvOLHI5jaf7huxn8yicbTTtApA9hlEK3hCbCvR0wYI44qnjoBH%2BfHrYxTTn62RCr%2BcGqw8lhx8bba9pFG6Hhs9CqXCctstZYCCn%2Bd6KaEEf4aP9nU9iTcu22jSFnR9SupXDjBbYL12NfAjsXwaBUB3MC1RcKKSdj75MlhbDzg1lFp%2BDyd5zwR0bKhjyICw3PrYUJv2KfBs5VTbn31IcNkuKANr5H8N3Mt7j9OvBxGXQiLBLoosZkTCMtfoC0yIDefuyCyuusMZV5jQwsM6PzAY6pgF6yCPoC756fDoSRgQF40UO7hZoh%2BzUokBo%2Ffs854KVQat8v5NspbE40ZIuqqk7drKGOtFKb51dhBkdGqlUELUpLPk%2BP1DQx%2FJuKS2n%2B5cZWx1ibYtMci1kocEZCr4e%2FRdCpcKMq%2BY6rFkDHehnh6PbZC0kN1Qp8JLbxZ0FnAHvdR7uVWU1D3JEzRlUjB7UzbzTzS1IhgeZLJd%2Fs3g2pq7XvcxEiekd&X-Amz-Signature=f62f120c7d8c326c614a0a3df51b65d28276a26333159013651a73e2e2c95bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=d5a588def32288affdc819b4c8407d26be28f7a7fc2b09a0cc27d33f2e672d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDM2LKB%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIG72Ggfxtxv3IBv%2B4UPTeoP2yv2ETMHq8v7oaK2uEdykAiEAgqHy0Il3%2FAlZT8Z55NPJIzbbKBJ1kQ29qSBnnJgEXMAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEqiCqJSA9OL9B6lsyrcA3VbTbGyK8xU01HVZ1UJFcWIsjDVI1Rcj%2B0SnPP1Fz6c5cQ6tD%2BL0pIz72KpryYMx9kcvZOZmpL7I32fYary%2FYO5Y5QZwtrtgjsCI5zYUJYNxscRDpdpiTvvcvT%2BNzOL5CwKH6o5o5NcjpfoS5v2fzsvPABHWinyTuTGn0NyYcIHMKFru4bqi3lqtNSXMPBt%2BNBROj7FVSPlFOTn78d3uNkdjyjzLbUlBTryVge6HfFAqBVP5%2BNE8AdPGArGBSHYxDufp6jKJSuEtD5dM2ffPdnQft2VQPperAEQrYnyQMkqCDayeHFP7zaeGfyer3qjasogYH4AyMeomvfRWFJ9Nh0tzKB%2BuAzPbR5XtzquQP5ZuLGlPPVY%2FCiwGajpJ0ox8e%2BD0vbGARPTQCWFg8wgjseMtssA1cxFh%2F04M0p9vaRCw%2FA7%2BTEGfWnhzYYe8nqqjxUEd7Uy7XuHJfDGxyFla3wNsVTlJQwN41u4pcqdlw3NiVQQ4YzjW55UIxgmti102841FZXpxfQoEbhtDnEOaZZLx%2FDjrUycAnFsGcRC%2B5F0qvj84EtlhuOpxnTPqMlXcr2k3cAkXwOlQtw5Jbsp9baODotzweH6trY1HNV1JgegaSUrJxqhFi7PThjrMO7Nj8wGOqUBXjVKpDNBuvgo%2FOd7P7cP8oIeFaf6SooGrqftSLymUd8lgnHZ0WFsGJnG1tnqqM20JU82NsXygBJ56%2BMJbj3dWZho7YykaepM6Hc7GmY778RJvfDvykdT3HFUD4rfIDA9uWBGEuzB12DmcrQJXeFO1temlgFEtzxA%2B2XWaKPFCZ6kOCegq41HV8c%2FziuopY0jUm6wK%2F7Y9eUyTtjxrC4KOElh6VCe&X-Amz-Signature=26d8df9de1411efc79d9276506ad9c00c69b2ac9bde0b272b7259bf48ce6401f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=626d8b3169e247e6213df304ddf4260c9535a1e5309510c9c49df77d044eda32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZUT3AI%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGkqz4LZdnEJ8eYYPmCijsI%2FJ6oq2VOMjJpJk68nkopwAiAm10iZSYlO2tI%2BrtYE79Ip7m3xQFuQ%2BZWH1BFtK6EZyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMAJye2gP9vx6xRQqnKtwDR7UGrZaddreS4U%2FUPoEZRVabnupN04cs0QPsr%2BMOnzN5sGBVhezKkH1gTgJw2MR40xlentUw%2Fwo55ZLk2uE7%2BN01oITZWy2%2BtW1Z89ip1zZk%2B6oA1%2FElYUZwadqeCNqps3UvRyoohEfE6COn%2FfW1Bp%2BPp3e%2BF0QLwr1w7MtgFEbNihJyCLHVIxu%2FyWpEb9COPnkPRvtuBi4K8xo6WnMaTae7ME64OWTIy0kC%2BZhGX1twSWdjYfBJv9SJQQWrZYW7DE1EXJf47vRf9wrBOhvf7%2FCwzK9U1rVXxk37DodQI3GyQbMhF5BuBNk%2BgvdkYiuWpDtv6QS8A2Ap%2FWu9ljKSDk0FGUD1B4Sc1Wi1xnPpFnX7pPb1ScWGyHIyqofLPLbpgLzCwanFqwle6x7T9UAfvLRQg9208JwnYgXMDhXRe1zIkRu21Q1chQave5KZt8W9WeZjgG%2Bu27kt3ZWbdKxMbIODOJtsjmWHhr4zrK0N0WIqhjUuyaBp91FgQSWnnyqd6s0YRAV8nVs8P1GcCLbLQYNS4baQEruEWHJbeEvwpN2e%2FUORu7uY1YUaL%2Bql8ssoLsEGiOHqnu%2FxvZTkjXSFOgfFlcoRYwpsHy118C7jEdAU8%2B93tsAQXEH192ow3M6PzAY6pgFCb%2FKqNv7f3DktwpQqTsDViofmPEsG470tlTW006VIF0pRKyuwdG3Ows8%2BViXzbTkqdke9Ze48vTMP4TOBKF6HriLip2DvlrJpFhyyzFJoQWY6xSZeqNuCr9V3qOU%2Fie5dkGf7trPgcFRN8v8QdwHikkJmO3ZtSj4Jd0X%2Bn554X6O%2BxY%2FrTfa4qXBWMlXKFvBGDF0l083lbZ0nKju%2BovD9Nl963P9j&X-Amz-Signature=200a29107e2ea0a9d869806e86395eada6df0d9504ee758e2e4c422f9e5782c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=1dfbffcc09d2e3cb936539a76f2c6b80a6064e60382178b4a8cf982590fda953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDTTOHY%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCAfVs38MYRmShb3jJ%2FpVct3oFvKTQDw%2FhBII5%2F%2BOa9WwIgJGcs1cy%2BGSfG9LlcuQO7yXaxcEz2i1MvHIvPq0GdrzIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLByPsZkIbKGwn9BQyrcAzyyJ1EnwClXR%2BEkLc1N8ZoS32MSkGE4rV5Uzu6YLecf4YQYD37UwTioO41jmQQr931zeu2MC%2B2jZVeBVr%2Bw4pQ0NAnfiXTaM2qdN7sOlvs6jW2mryqMaasTMmYmamzzTJBD97%2FvgMy%2F1jnGYc9YT%2FolfdGu8Wt3m%2FmpTuFIEM8ZZLNxvPVivQGXqm4VT86PMEeHjs01iG%2FjvXNG9LRPNADPcSy91CiGU3wG79kcAGtMFXdCbcxTfnOI8AcOY0UtVnbGBf3x%2BAm6jvpmI81jobJhhHqv%2BjEhBnUR39SSLHbk%2FNifmGhSYAYknqADmqS5nKrDKeobe3IQcyl9egL581oAfUX5o3D42ENAe7iGwYkeHGeuK3IY295vrMZ0LvfnJW9RjnofKzJLQPFb7qFf423C3mUaJ4beDQhhZh9gbIZg6EB%2FmDm%2BzoTPAwA%2F%2BcOWwRcVdcGQWF2V1WwnRhTwRXFfEtBBkXA22wn5ZZ734lLka%2F8UvDDoPyg%2BeyL63oAEvdhvTe8vWJwkcVIVRvoLX%2BepSC6XSMmH2pgA6Ky396VH%2FdQSxO7ndpyopC9P5IPs3d4V%2FTL9Z9LEj%2B9FWBx77%2FXijVE8FNiQWPJ00%2BUrszHNdJdDHfCbs2ha1cXIMM%2FOj8wGOqUB61hkA0EjEFDsU2NaaT%2FuGInekyD%2FDl8Gm3PBZ0Zyf7Ps12EwlN6dKezWC%2FS1jWL5ALbhkL6n6pvRUmWhUKvLVilJkOuiRtC5s6umPr8SNIri2T4yF0ykd%2B2dWtwGznJlNLcozVFUqcsMOwLrrFwWA74EZxvUa4jX4PSUo0duvokAJk1rT7kzO%2BsydOG0FjlcLBlnLZGHmCxMeygjTdUB9ECbvmC%2F&X-Amz-Signature=712533d73a7bf369accfcf046359bfba89c3dead348eed4cf7b1db4ff0670b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32JVNAL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDDJUc19UEG5nPAuPcWw23TyqdJBKlvjH5tyDffe1dqvwIhAOFLSBvYPjeLg4g3AgJp1VGvIwWJoN6CF%2BKCXYoD3mfVKv8DCCIQABoMNjM3NDIzMTgzODA1Igzcp%2BK3K%2BuXiqIZeocq3AM7m5x7NynAbNz%2B%2Fr5jXHKO6opNGq5nhMB4YugRUi%2BVoNwJ5QnWs%2BrTRmGwSS%2Bzkhuop3Nku0irwjlY4M9sXIEa%2FtDwxkgqbAH6mzPGFHlOV7dhsYnUPv0GMOnsOFeVGSCC3aeejTC7duT%2Be0LVfd5EgzgpP90jkLN1bEj1Ox7dX2X8kVKthiCzi0bUWijiEIEmRp93%2B72i%2FLhye4oUZw03JLnm4T4zGQTq4cFTqJPjaBewTtCCD02UoHVRMFRuJStk7Unx%2Br0I%2BrWHGOxCBDs4TPviL8Qa90avgORLoc3OKW6g63%2F%2FLPcgmD%2BNJ5PBr0AVpyadRyFsImWKeY85dxaBRqfCd6X2yOECZBdonVG8XSwGi2b5XkV7t5RIc4xB6r5WLEe7XVlPK%2BJpMFHfhA2qpNJa3OeDuxJDAtbJt2Et2Svc85kXVDfbnEDAYKCl0%2B90LcHRC7VLIvhrJSZYAnvUnfmi6zyXJ12tjycAyJkeZG%2Bn6Oa8j0gqliQS5KZxwiT2x7oOgg73wFVmAu8swSeMTd1qfPw%2BMTotm91LFsxxYkHWpVw6d741W5rQCGeSLkXHzLeS%2B5XuCziRdOsaerA3QYyCskF6WUc714K7%2FENacNr4cQnhw6Ey34NIGjCszo%2FMBjqkAQsy6NKIa50L6uOYSjPQHi3th9okhGnCy4lS6mVGpgXNDKxosIGSLk%2BKNdGC8YbXKCPNzjsDiKV%2BsXihZO2SACV4%2FMP5sCj%2FL9BPOrH2xP9BAjRLBsyeeIjLfVnKmuZ9STfkA25hLakHVpncGSMLQw8kPiBi9%2F0c0LHjFJ7j9A9puMls1LeOjq%2Fg6JtPAt9xD0kVtor%2FD%2Fi%2ByWj81FesoLjJQgc1&X-Amz-Signature=8f38c2ff381b56003db83a61537edda8948a67f5c71a0789f7a4e6b6d1e6dec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2TQUUE%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCkgWbjm3IOaizKb2kcz8F9t8KvNiLdtBe5Il7X442lYQIhAKfLGO%2B1y4Mif6yxGHe%2F50EHj68ZKErJ5fbQMUyVICukKv8DCCIQABoMNjM3NDIzMTgzODA1IgwLaxRB%2BoONSfSPRYAq3APi7J0mxbHwFVJpa2WeMATXb6FF5KcMqraur%2BWEcWydU%2B9lvvB1IiDtAczNX%2Bj2ZWwrfm3ZeqqZyiEYBeTjLjMUdlEFz%2BNBuNK2XuVG6c3nhZufumT9MqUgOF100iVAtTdltDTMXV6208dJPGYGVixXPy4PpkWgj2VJccGAZGnVCQAuEMQU5jY5olYThu28XzhgJLUF6pJGGA0BkyLb%2FfOMjUE43nH7qJqDjMvhda8LsbP2JNpVSQWb7NBCBOknl23Q%2BiFyVG819wz0M%2B1HNtriaREk9cgwCPT5KviI51delZBd%2BV4vr4wqDoQ%2BYA01suZOk4YMoPBNjw6cev7llPV%2F8DfJ8%2B4rxsV4Xpgzx9GvxVFkLnyVtTwRrWFMLGF63FOw7wqDD%2FC%2Bd%2FKtRNJuphmz%2B6A2gTbA87syp27gKObAeCJXp1Brxs5GASVcG%2BE8c6aIB2%2B%2BsbhbjKCHnNdJFTkWygnUsqJXV805TZFbUdX3Old8DAWb1htYeff9hWkrnvMpGFxHZQ3DY%2BfsloO6MOaN4zJkS9rREbmb1Ujo1FWhYr4KAO9qV%2Fz%2FGP1aD8qsCZS1yQKjQMLwP3zZPC7%2BDJkN6GT8BlLZRDoE4NjDD8T8FbrknOnOxTZ0mTORRDCszo%2FMBjqkAYq6kEMotCfY19BNebvhOLDWv%2FCLrx%2Fv8ZvAnQF%2Fkw7nuGorFAGBGGaOKdHsf%2BQkCCX97O3ftzbo4BWagBTNGf2Y6n%2Bbi7swu99JzUxlt2SrXRqTqRyrt9M1wbNpHJPJQH%2FwGGzFCYA%2B8EFysgk%2FuMGMc4HkJEVlEZwrptOGRhJ7SC%2B27N5LRsEzYlxWPNgrbHXujYPf04tcGK48WyM3pcOj%2BF5%2B&X-Amz-Signature=01cec8d67ad91008920016a027a0a4dcf0fcf9e224103f13f70e832e42e6ddc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=7a9c56dd7b7be956d6e1ca6ca1b73824f26051c1c0202dd8b5fc0dcc8de55157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQV2LDR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCbCs%2FaagAOkxPWGS0OQlV69Vem%2BPT%2BWG9YRhKWviJANgIhAMbSegWdw5QDMn5WmX0DvXjoPpEg9wGzj%2BCUG1U6u81DKv8DCCIQABoMNjM3NDIzMTgzODA1IgycjLodHO0ltWt7xysq3AMMy37K1dy20jZGP7UaTl5Ayk6ZRNp7TReNZABWHodQ4hPFNfDehnw%2FkwtV5a0WlQ%2FJmlyoxocDdJUnLtqct%2BlsME2GHPZ%2BaxjWscnnNVEk8zZTHtUS16uhMCWcrN%2B3N658Pz3K0FFpS47gpS2l7%2FUzLL3nvd%2BVaxrAnbjt4hSLai0GRG%2FwOPzv%2B4VhV3KlO7hJnQSzg5sTA79OTyumxSrbgOmwVc0Xp6GgiNjquqenaIzVE8z73SkYmyEtUJh4G0715O4Ur5S8rYmEY8QzEKSBO8aElbwd1G7xG8N5FFYZCjf5rSOm3HzWWUTvnWhI0wFOlAlJdwo0Ulv7798F6DxwOB%2FcrZOCGnDCxIjMdrU%2FGfokv3zbEMz701uGgVz7GIYB4ErAvdo5qj1dzYTqM4R3CsxoFgNI1Dusd3xwqynVpl1%2FkzoU9PJhnp490Aqgce7W5l5%2Bgh35b%2Bfo8lerzCJ%2FSF2lbAbj4Rjg9TNfAyKzIf6JZPFO8qX7BTEjhZ6XrwMWZVYs%2BkJntSxORsYqCVitQu0tYOeBJeNKGqAdlUTomf9T0IxyTISbDobNKRoSZl1S7p%2B%2BTb%2BXj1IOZPqHxjuz%2Fz2zoitXqPuKrFkGHo%2B5XclLT7zfQ%2Bt3BruwHTC6zo%2FMBjqkAapoNnjng7XQec2bCGtHZhztcGvfeUCnq%2BVov4GZJKq6xbMi6TvLGrfXQSwy7o7FYg%2BeJ5bMfFOvluUkOmbUDyg85A9WZwbog2YqJKGuUVPts9fproEvtRXu%2Fkkd0hJMjHJqDZl47NC6h8fNuLuG98YS6YQX3oGENgq1F7IXwmoUQ6guJwcNjXtGiLAhP5lesJJjqTNbc4BmvFLYcmnEfh5EZZH4&X-Amz-Signature=9d5388ef4ccca69dc9f6f2159a772055bfb372996fa029b941e8245b522cdf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=d14603ae57826cd3c5b23ba71520c9858088fdfc04bc9fc724411d1401a3218f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=6d4f19df10a38660e4989f9b390ce56ed123ca5597afce79dd78f2722a9e6ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=3836128072f0f416fdcae999403bfc4b3146239b2d90e9e7b15594eeea2a4d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=39be714a9854778249c27961a9e43b96eb0c17c879e9a3240df06b53f8737562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLGGZZPG%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIG%2Bf6nOvF6R4CGNKeC7UN%2FiBYxk6R35ZqwsEDAOYA1FnAiA1xmEcb8ocnYD%2Bwn1QJL%2BAP%2FSqep0EHjf61C1%2FUNs%2BRCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMT%2BT22VSCmocnM0RLKtwDnUO5fzNto2hqMYf6yinhmphjjbErqE6pz7eWDfyLQH60mGdFafWNnukoAT4N7FLK1I0y45dueWKg%2FPJjeY%2BXws5bW1T55KjzAIsd55jxFHxj20iaMSRnJ4v%2B8rNPukSEaqm07oLEdmdx1aiKXWA5H%2FZau9oOyMc2UI%2FXVs75jSFos4D3t3T%2FCp9eWWZBP1tZBn7Mm2ZVDpgy68y40VPDHMHDBKFRHwbt0Sgwe40zk%2BfuGHfiDldLE%2FSAjGzIqWX1D4IJQh5N4nEjk7QxhNi6t5hxPelSytq932WWcOTLEpxT1vw8TkIKMJ6lkm2ZT31xHi6BAccqLmGu1zA%2FExmrg8%2FmZRtOanqUiuAJ3HyYQ%2B8ZnRZ%2FWrEdhxZwi0rhInJ77V4WaxNY6PT5ZBMIs9yM0adsJ1WObhZhlexq9k3TEXlKJQT77PCD1gb60fh6W3RKhRbL8jOoEHPLryyKQa6GGAGYT8gHPRYsQg4ppREE1x6vSuGMqufD1TaT8KaSgxwN4NoGBNzAg0uBTpsV8NPU%2BgfotgorBL1TJOjZ81Q%2BbEWp5OAyu%2BzEss1vRVaJmh0b827IZ8p2s2P2ydfH5QknV2Ss3KG%2F6JQysCaPTf9LFxx4iH5vXEKILJckllMw5M6PzAY6pgGOm2a%2F%2FFKKKFZZrCO9xDE6mpKw8sThWczVDybQjb7QEqk%2F7oGgODRvY4A6tlfQoyXyJFsQlfFUU3HMoh6dB3SWKGpgMS5k%2FokB8ikmL00TYZxzQnLsiS6n%2Fz5EvI2aviOvJZlqdUCj3287j1aFvvO3%2FiQmKsvhS9G7pUWwsKVMysafQ3nkcJwVF9uz2mqsgzwae8klGSQgeW2uNsEe91B6nNgS2WU1&X-Amz-Signature=17fb7036726837d4d01cc0534a0a6f53623079a150be97628453fb90e0a8182c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=476ba16c8b768c4892db6ce181243db3feee24d6293dad7cf979cfcf9fe30917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=ef35148a7526316b24e8b23fdee5c372aeb80df6f2e652565af3863c6d45bf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=cc648eb499a9ddfe496789a7696923dbfd64191e1dd6b0a2e1e8a431a8774019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=644731a340ddca3f4c155e2e63954d783f0873234bd871ba1e262a172583d632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=e3a62ea26038e450e762b0cd7166cbada9d3d1a63d0aec86ff164f8f84f21525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBPBVQF%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCyriHbXo%2BIjjzt5h49Va44hLrKPG7gYEnFq80ZUKgPvgIhAJp5Pzgx1T6tk%2FeZ%2BvPnnsMX2Z2mu%2FzYaXTHD%2BO7slmVKv8DCCIQABoMNjM3NDIzMTgzODA1Igz9hIvQmECGE3qrpPoq3AOhiRaTVbDXyEdtqRri9E%2F8bhFGXYwSoKMIPT0Tfi1tqeHwWyCDW5HY96di8b1o6bpP8lC01oR1e2m9zkmLhlhd1qYZ7MyhlYyp8um7zXi74SczUj5tFNfjNXo7NxQipsF5VkgtE6UrQIarUc6ll81N7WBqXMCbFTRdTLfp1g8p6t1F0FW83BqRlYpJ1L49GkPGnowMLUaDkWcozgdGshA8C09nS%2FfQrZHEXd8671p3oX60NMadO8vSkUq7q4IT99oXFG4j3uAWgBtY9l%2F4wUNfZg7SCksekdyN3Qwv3ONKMpD6mDDCXnaqC4tTDDfvAbMh1eCB%2FBaMdrA2l20kbN%2Fb0jPrsRSSpumN5coeHCWxE6%2BQHwv1ns6cm09TAgaet5ZiYUmEP3KsfgtemxDtpAEjBCrBjXFDIDPIAZv5%2FgGVWjp0PstDJFf8JVgO74XUDzz9nFkGepkEuFhS9WTCrQGE1YSSiAwEE5BDbuGNzucO7rCqrneVCo1L4cZ41uJdNPFZBeuYObTCirSowW9FVHg%2FOdOrwvy3VvB7RX7BL8usjzZoQr6UGA8TrCEXqA0LyIGtc2tCTtkGxufM%2FJ4cXe1qrraiJiPYJjdAsot%2Fi%2BbEcAqYkWk9zbAdEIU9RjC7zo%2FMBjqkASrKI3DaWxKBauUuhy%2FO%2FbqBkj0xz%2B3HB2TnPzcWSyKsmWdXmm%2BEea4I93VLgV%2BM8pK55VY8hMjf6zo%2FSCHUvaVoSzZ0rWtgKqRkz3295yPmpyoaFUmVeKEGXoePwmYwX%2BjKsB5XXe0ziIr%2BCrqzjm1aa4iqqYdwp%2FFWXw9G%2BjBMcFcXLpzHgWn36tu3PHipwsA4XDyAZXxM7dGDxTNZz2cOyFXd&X-Amz-Signature=54418c15a72f39e7c05b3c39c25b1d26ae5aa0488db8bcc6d48a27d5bee3fc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


