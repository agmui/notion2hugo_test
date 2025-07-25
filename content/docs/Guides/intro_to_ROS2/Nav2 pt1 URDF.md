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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=c33beb70ffe44dc830b7a40a1e80dd9d5a1436d7ef1c567324e98fa2fb411f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=92ab568dc2f070fbadd06c204690b09455c8f483936c55bace3da8ade2ee0d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=0d1b8f65639b70f05f054f7261b546da2012643b0a75dae0de9f927aaf165b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=21840cc5ba62b48aa997d2f816018b5989fdbbed63851559f90b731d3d4e528b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=d27fde4d9b8d6146bbcb43b97c90ff87266a74e40c5046d7b658d4d18275829a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=92379d0ac4719da1d0f811d63a4c57539e9dca7efa90cf11c6947b437eaa81ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=fb7b35e0a929b772a21c0d6146e937580b298f9edeb8a2fee5d9ce4925049fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=9a04acb58fd1797997ecd57836a9311e26cb003bda408fc869a43cea89e25f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=0267eea497e4a5d3bed3ddfc9c854b4c82b9548655035997710253597a30664a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=ae3db15163282ed1158a106734a4efa3c55cb3114238b23952cf7944b9e00c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=520b4d4f19f2280dc12efe530f862ad646bd8d0eb72b9edb22d520fb71ba45c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=0e58ff8a0b528e5dbb07d6450213fae1ad32fe1c3ca1e2ea852d5e65a7d6ffa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=e69359d9afba045a2fd468e990795b281274853a5b3f3e51971769662876da8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUVZZ3Y%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCguvsxMSSzwBP497gniZfFYeL4yxXz0Hom2zY9kOCHrQIgUDOZEC496JEMKDETCuyvGx%2BLDwXmfTsDsQNIEhVayYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAMWpsnJoiHIB9j7RircAwVR%2F7QHVg7DZNwjdUxI%2BhJzavtoXV3vWMxyKDi%2F%2FUsSeDly9cnqaXYWxt9ak1EYPDh%2Be5n2y40UZfclg%2FnyRT3jfIGnVHZI1efW3OtdIugzMuBkXracCYVU3La2olPwe06k9yf0eubm3HBs2POuv3OwbhMswZ7iwSQG8j9qPCzfxjOd79ezkeEYYsj0QpfpTgnym%2FR%2BJ5nvaOuPU3WCtRH8O6xjYD0jxxWLgYxB6ax%2BFJS7K5rKr8BHlOLOiCrAb3hWE6rbzbM42HB%2FglQufiChm4Si5TNm89rSfEaCHLQ0lDtr5J3NRM9HVBJxfGm8xey3myT%2BC5btoi5Q%2B1VUq%2FXqAUcFYFYoEU661bXRiaf5j9XyOk%2FATBc75UMyOntW6W9OwD3Ng%2Fk0%2B2ETv6Llj3TwNxSO4vX8jyjyz8j3cZIGG3zHSSAqOXbgihgOKfJG45Tv0zbikvDGgCJtsJZxF6%2FFDCkjQl39plfd2isCkXqyfMU1kOLECigOlqgFmAFYHydHccc5vsdXeBiYtgi3HgviyY75oVvgKT4rgVPyD8IyC8L0M7ytb9tKiqe5TMHCVkO8VwvWOjs96xekp3veeLH9428jNtsru2NOwEW3Kskz%2BY7VofvzOkTKmAOaMMuqj8QGOqUB06t4Ietg1C8HgjcfFQVLc4yaIKNQmim5e7WkgCM1ZxmKlZVFXpJX%2BF7OTRhQvUZQ6u06FyABcT9kbwm8EeGERCL3v3OaCg%2BNK4e%2BsQ7n1gyJJ8llbWerH2RrlpBjvqr5AFA7TEH%2F58hT07cGOc5i5bH3bPelmo44M8YsdU1tndKhDo1eM3k3UYCPNmIGFS5cE%2Fyo2LkopiWUll2N2%2Brvd7kpS%2FL7&X-Amz-Signature=d1aaa923185c5d5a33a83755924322c5e639e7f0d6893bdf187665ab86c5ff56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QN4R2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHLTYK2wTOXMWVLUiMp7pooEK%2FUcFdl%2B6Iy3Yz4Pjb%2BuAiBaxVhXrHfPiDSYSB%2Bsr8wIdzMgUq8JlYc0PCxzKQkWFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMC3bKjNr7zIP2J64QKtwDsuVFUxA2blK6%2FvvdOFVPfHAf%2B3v92PRlZ1QdmCBFlg7u8OkIfqSLUgseDnUXH0QoRKD4zxjGd9w05gc%2BJ7q33Lzj3tQNTLX684Rtsnyq0QgJQgsPmBWG7Wa%2Fug2HiqrnGtEu%2B6mhuM5y%2FkH746gpG%2FHs%2BI1ij6LlsUH%2Bd6MLKR7wRv05d67DA93tWrQ1RvKBlpCQdqn14XRYySiTxmk7S1Xh141LQpeoRLHVzXPEk56b0Zkhi%2B4Ns0rN1KCx0QAHmN2M9kmrV8SXoN4FM6mM51cw2vEz%2FFUGgd%2BmgqXzVVf9hsThWQ8oBBL5Xc%2FMSPeD0hk%2FQfJO8gXwqkcIFQ0AxXEZFE7K9rEJ03QGTBpL3XQRD0jEtW%2BBVI0gJQtff16fff03pTZZfxOVs1xYlPvrvjuqwE0MXWkpCLk%2BGFJ2cdgvjz%2BMCa7dsX%2Fb4wkFwyueMJwp8sqRMuc0IkgpWgr9vEhK3bcppHcztq46DUQe9Kv5%2FYbr4KoFQWv7FpLOY66l2TaVHWS22vOrpy4vnGlFs5vEnZEUCBKguNpn7BmRtETn4EMkbwKxQJLJnQIGTM8ocx1a8ZKO4mkYSXNFsOnYPWeXKBpRjLJ%2BOn5GieWqdUD0yX%2BgSMrlu45ZIOowpKqPxAY6pgGPJ9wXEXobGBCv7vtUX11voggSf9z2hSDa%2F2%2B5jten%2B5Ox3CiQuZo%2F9DfWcm5lisTlcF3MPChzOPds0qcld%2BDmeAUT19cFGzhe%2Bh1myTxgiyZ8BJ7aiv9yoq260rqbAZy1MiIt0b7tRAQXuoYck2tj36XB0eH2zAIS1w3EqjaTzTeSfUXPqr977Q88MZZzmfqS%2Fvst4XjvFjDLdlC8Qz4mVvr2VZYo&X-Amz-Signature=a69854a1d996b6a5f43b65b3bbb1aeee3464ca713b56d29246f905d2354aaef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QN4R2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHLTYK2wTOXMWVLUiMp7pooEK%2FUcFdl%2B6Iy3Yz4Pjb%2BuAiBaxVhXrHfPiDSYSB%2Bsr8wIdzMgUq8JlYc0PCxzKQkWFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMC3bKjNr7zIP2J64QKtwDsuVFUxA2blK6%2FvvdOFVPfHAf%2B3v92PRlZ1QdmCBFlg7u8OkIfqSLUgseDnUXH0QoRKD4zxjGd9w05gc%2BJ7q33Lzj3tQNTLX684Rtsnyq0QgJQgsPmBWG7Wa%2Fug2HiqrnGtEu%2B6mhuM5y%2FkH746gpG%2FHs%2BI1ij6LlsUH%2Bd6MLKR7wRv05d67DA93tWrQ1RvKBlpCQdqn14XRYySiTxmk7S1Xh141LQpeoRLHVzXPEk56b0Zkhi%2B4Ns0rN1KCx0QAHmN2M9kmrV8SXoN4FM6mM51cw2vEz%2FFUGgd%2BmgqXzVVf9hsThWQ8oBBL5Xc%2FMSPeD0hk%2FQfJO8gXwqkcIFQ0AxXEZFE7K9rEJ03QGTBpL3XQRD0jEtW%2BBVI0gJQtff16fff03pTZZfxOVs1xYlPvrvjuqwE0MXWkpCLk%2BGFJ2cdgvjz%2BMCa7dsX%2Fb4wkFwyueMJwp8sqRMuc0IkgpWgr9vEhK3bcppHcztq46DUQe9Kv5%2FYbr4KoFQWv7FpLOY66l2TaVHWS22vOrpy4vnGlFs5vEnZEUCBKguNpn7BmRtETn4EMkbwKxQJLJnQIGTM8ocx1a8ZKO4mkYSXNFsOnYPWeXKBpRjLJ%2BOn5GieWqdUD0yX%2BgSMrlu45ZIOowpKqPxAY6pgGPJ9wXEXobGBCv7vtUX11voggSf9z2hSDa%2F2%2B5jten%2B5Ox3CiQuZo%2F9DfWcm5lisTlcF3MPChzOPds0qcld%2BDmeAUT19cFGzhe%2Bh1myTxgiyZ8BJ7aiv9yoq260rqbAZy1MiIt0b7tRAQXuoYck2tj36XB0eH2zAIS1w3EqjaTzTeSfUXPqr977Q88MZZzmfqS%2Fvst4XjvFjDLdlC8Qz4mVvr2VZYo&X-Amz-Signature=ddc3dee447782a9fd77bc5b5ce60bcc0cb9da7fd46f25a6a1bf79c934b47e5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QN4R2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHLTYK2wTOXMWVLUiMp7pooEK%2FUcFdl%2B6Iy3Yz4Pjb%2BuAiBaxVhXrHfPiDSYSB%2Bsr8wIdzMgUq8JlYc0PCxzKQkWFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMC3bKjNr7zIP2J64QKtwDsuVFUxA2blK6%2FvvdOFVPfHAf%2B3v92PRlZ1QdmCBFlg7u8OkIfqSLUgseDnUXH0QoRKD4zxjGd9w05gc%2BJ7q33Lzj3tQNTLX684Rtsnyq0QgJQgsPmBWG7Wa%2Fug2HiqrnGtEu%2B6mhuM5y%2FkH746gpG%2FHs%2BI1ij6LlsUH%2Bd6MLKR7wRv05d67DA93tWrQ1RvKBlpCQdqn14XRYySiTxmk7S1Xh141LQpeoRLHVzXPEk56b0Zkhi%2B4Ns0rN1KCx0QAHmN2M9kmrV8SXoN4FM6mM51cw2vEz%2FFUGgd%2BmgqXzVVf9hsThWQ8oBBL5Xc%2FMSPeD0hk%2FQfJO8gXwqkcIFQ0AxXEZFE7K9rEJ03QGTBpL3XQRD0jEtW%2BBVI0gJQtff16fff03pTZZfxOVs1xYlPvrvjuqwE0MXWkpCLk%2BGFJ2cdgvjz%2BMCa7dsX%2Fb4wkFwyueMJwp8sqRMuc0IkgpWgr9vEhK3bcppHcztq46DUQe9Kv5%2FYbr4KoFQWv7FpLOY66l2TaVHWS22vOrpy4vnGlFs5vEnZEUCBKguNpn7BmRtETn4EMkbwKxQJLJnQIGTM8ocx1a8ZKO4mkYSXNFsOnYPWeXKBpRjLJ%2BOn5GieWqdUD0yX%2BgSMrlu45ZIOowpKqPxAY6pgGPJ9wXEXobGBCv7vtUX11voggSf9z2hSDa%2F2%2B5jten%2B5Ox3CiQuZo%2F9DfWcm5lisTlcF3MPChzOPds0qcld%2BDmeAUT19cFGzhe%2Bh1myTxgiyZ8BJ7aiv9yoq260rqbAZy1MiIt0b7tRAQXuoYck2tj36XB0eH2zAIS1w3EqjaTzTeSfUXPqr977Q88MZZzmfqS%2Fvst4XjvFjDLdlC8Qz4mVvr2VZYo&X-Amz-Signature=325225eae9199f588c7a329d996be1ed9155d087d5af912645ee0b80da96fc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QN4R2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHLTYK2wTOXMWVLUiMp7pooEK%2FUcFdl%2B6Iy3Yz4Pjb%2BuAiBaxVhXrHfPiDSYSB%2Bsr8wIdzMgUq8JlYc0PCxzKQkWFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMC3bKjNr7zIP2J64QKtwDsuVFUxA2blK6%2FvvdOFVPfHAf%2B3v92PRlZ1QdmCBFlg7u8OkIfqSLUgseDnUXH0QoRKD4zxjGd9w05gc%2BJ7q33Lzj3tQNTLX684Rtsnyq0QgJQgsPmBWG7Wa%2Fug2HiqrnGtEu%2B6mhuM5y%2FkH746gpG%2FHs%2BI1ij6LlsUH%2Bd6MLKR7wRv05d67DA93tWrQ1RvKBlpCQdqn14XRYySiTxmk7S1Xh141LQpeoRLHVzXPEk56b0Zkhi%2B4Ns0rN1KCx0QAHmN2M9kmrV8SXoN4FM6mM51cw2vEz%2FFUGgd%2BmgqXzVVf9hsThWQ8oBBL5Xc%2FMSPeD0hk%2FQfJO8gXwqkcIFQ0AxXEZFE7K9rEJ03QGTBpL3XQRD0jEtW%2BBVI0gJQtff16fff03pTZZfxOVs1xYlPvrvjuqwE0MXWkpCLk%2BGFJ2cdgvjz%2BMCa7dsX%2Fb4wkFwyueMJwp8sqRMuc0IkgpWgr9vEhK3bcppHcztq46DUQe9Kv5%2FYbr4KoFQWv7FpLOY66l2TaVHWS22vOrpy4vnGlFs5vEnZEUCBKguNpn7BmRtETn4EMkbwKxQJLJnQIGTM8ocx1a8ZKO4mkYSXNFsOnYPWeXKBpRjLJ%2BOn5GieWqdUD0yX%2BgSMrlu45ZIOowpKqPxAY6pgGPJ9wXEXobGBCv7vtUX11voggSf9z2hSDa%2F2%2B5jten%2B5Ox3CiQuZo%2F9DfWcm5lisTlcF3MPChzOPds0qcld%2BDmeAUT19cFGzhe%2Bh1myTxgiyZ8BJ7aiv9yoq260rqbAZy1MiIt0b7tRAQXuoYck2tj36XB0eH2zAIS1w3EqjaTzTeSfUXPqr977Q88MZZzmfqS%2Fvst4XjvFjDLdlC8Qz4mVvr2VZYo&X-Amz-Signature=d646865cb95da7d441972c362b11ac5925076b5d900cce8245f6256225c5956b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QN4R2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHLTYK2wTOXMWVLUiMp7pooEK%2FUcFdl%2B6Iy3Yz4Pjb%2BuAiBaxVhXrHfPiDSYSB%2Bsr8wIdzMgUq8JlYc0PCxzKQkWFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMC3bKjNr7zIP2J64QKtwDsuVFUxA2blK6%2FvvdOFVPfHAf%2B3v92PRlZ1QdmCBFlg7u8OkIfqSLUgseDnUXH0QoRKD4zxjGd9w05gc%2BJ7q33Lzj3tQNTLX684Rtsnyq0QgJQgsPmBWG7Wa%2Fug2HiqrnGtEu%2B6mhuM5y%2FkH746gpG%2FHs%2BI1ij6LlsUH%2Bd6MLKR7wRv05d67DA93tWrQ1RvKBlpCQdqn14XRYySiTxmk7S1Xh141LQpeoRLHVzXPEk56b0Zkhi%2B4Ns0rN1KCx0QAHmN2M9kmrV8SXoN4FM6mM51cw2vEz%2FFUGgd%2BmgqXzVVf9hsThWQ8oBBL5Xc%2FMSPeD0hk%2FQfJO8gXwqkcIFQ0AxXEZFE7K9rEJ03QGTBpL3XQRD0jEtW%2BBVI0gJQtff16fff03pTZZfxOVs1xYlPvrvjuqwE0MXWkpCLk%2BGFJ2cdgvjz%2BMCa7dsX%2Fb4wkFwyueMJwp8sqRMuc0IkgpWgr9vEhK3bcppHcztq46DUQe9Kv5%2FYbr4KoFQWv7FpLOY66l2TaVHWS22vOrpy4vnGlFs5vEnZEUCBKguNpn7BmRtETn4EMkbwKxQJLJnQIGTM8ocx1a8ZKO4mkYSXNFsOnYPWeXKBpRjLJ%2BOn5GieWqdUD0yX%2BgSMrlu45ZIOowpKqPxAY6pgGPJ9wXEXobGBCv7vtUX11voggSf9z2hSDa%2F2%2B5jten%2B5Ox3CiQuZo%2F9DfWcm5lisTlcF3MPChzOPds0qcld%2BDmeAUT19cFGzhe%2Bh1myTxgiyZ8BJ7aiv9yoq260rqbAZy1MiIt0b7tRAQXuoYck2tj36XB0eH2zAIS1w3EqjaTzTeSfUXPqr977Q88MZZzmfqS%2Fvst4XjvFjDLdlC8Qz4mVvr2VZYo&X-Amz-Signature=865b0dc09a1c4bd590916cd981dab9a16c641b70672cdaf5b465ca4c964a4db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654QN4R2O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHLTYK2wTOXMWVLUiMp7pooEK%2FUcFdl%2B6Iy3Yz4Pjb%2BuAiBaxVhXrHfPiDSYSB%2Bsr8wIdzMgUq8JlYc0PCxzKQkWFir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMC3bKjNr7zIP2J64QKtwDsuVFUxA2blK6%2FvvdOFVPfHAf%2B3v92PRlZ1QdmCBFlg7u8OkIfqSLUgseDnUXH0QoRKD4zxjGd9w05gc%2BJ7q33Lzj3tQNTLX684Rtsnyq0QgJQgsPmBWG7Wa%2Fug2HiqrnGtEu%2B6mhuM5y%2FkH746gpG%2FHs%2BI1ij6LlsUH%2Bd6MLKR7wRv05d67DA93tWrQ1RvKBlpCQdqn14XRYySiTxmk7S1Xh141LQpeoRLHVzXPEk56b0Zkhi%2B4Ns0rN1KCx0QAHmN2M9kmrV8SXoN4FM6mM51cw2vEz%2FFUGgd%2BmgqXzVVf9hsThWQ8oBBL5Xc%2FMSPeD0hk%2FQfJO8gXwqkcIFQ0AxXEZFE7K9rEJ03QGTBpL3XQRD0jEtW%2BBVI0gJQtff16fff03pTZZfxOVs1xYlPvrvjuqwE0MXWkpCLk%2BGFJ2cdgvjz%2BMCa7dsX%2Fb4wkFwyueMJwp8sqRMuc0IkgpWgr9vEhK3bcppHcztq46DUQe9Kv5%2FYbr4KoFQWv7FpLOY66l2TaVHWS22vOrpy4vnGlFs5vEnZEUCBKguNpn7BmRtETn4EMkbwKxQJLJnQIGTM8ocx1a8ZKO4mkYSXNFsOnYPWeXKBpRjLJ%2BOn5GieWqdUD0yX%2BgSMrlu45ZIOowpKqPxAY6pgGPJ9wXEXobGBCv7vtUX11voggSf9z2hSDa%2F2%2B5jten%2B5Ox3CiQuZo%2F9DfWcm5lisTlcF3MPChzOPds0qcld%2BDmeAUT19cFGzhe%2Bh1myTxgiyZ8BJ7aiv9yoq260rqbAZy1MiIt0b7tRAQXuoYck2tj36XB0eH2zAIS1w3EqjaTzTeSfUXPqr977Q88MZZzmfqS%2Fvst4XjvFjDLdlC8Qz4mVvr2VZYo&X-Amz-Signature=cd2a7bbacdac25a1bbf1a9d773416d897acfd40cd80398118f40019e9f44083a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
