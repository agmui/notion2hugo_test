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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=4e6eb4de889e52384a80f3cf20fb3cfae05d0a38493961a42bbef6826f483909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=2259656cef32ef3e52c940160a440fbda40cf319ad61c7f7fd619b06cd174d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=e2436e6fecb6c83be5aed089e94bf4d248d3882f6a83d0e3b7a2e065db0bb7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=189e26c46326f54a79bb1cd19f9683e598e3dd00524ca191c24082253575759c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=29d741ce53687544655ea8148a81d65e89d2d11a14b0e757cb3a0334b273ade5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=783783ce8e33dfee093c03a93f229edb5fe5328962dc6ca09b638b9926136921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=91c9a39c9584812d8d44c83be137e6c7d2150fea00cf049621e8745e4a784c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=1244b9adc55d80a61cb4b5825268621a5e16351a0c805ac9d10b6c6edf7d6885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=f24962444210c054a4e148bfacd3bc871338356d61da21095189b94ab436588d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=142d74c060a6756d38075bfe34483b5cac2b6eaac0bb5a6cbc3dbb5ecf9b0275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQBVUYP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCleIrUYa3K0K9skGlvvNPjAULmrhE0gpzMAHulSdgsRAIhAJnnHaicGlPQcCh2CuiFZkJAiupJfGgJVtv2xIij24oQKv8DCDsQABoMNjM3NDIzMTgzODA1IgzRxv6CyOfqwF47vpMq3APvMZfIeBMe%2BDBNZqzoklbVxWo4Uc4xLzh9OzT4ll1vYakKODBVqaZN2zUIN%2B2PoBPdcLzZCql4DYTJDgbpSbboipEQnIQntfaDhciXtFxbLWJ%2B9uvPuc7ncSDiO0UgWSa7lpjCRF01tAC7k5kDEcxL1tb%2Fjq0k%2Bf48Jl3XlEY672CrUMYOk4wKcnUJTpxsNGBYR3CNGugbTKU3RPZ5oOC5v2Hpj3td%2BpeyuuDIHw3hLm%2BpBlcFIZjCL7Z7ffNmsnLDTxKK42EDz42%2BJK9DmgXPKsmhnts1hjPBZJf2LMd8PlQsxTIsYxGCQuuJZAxrnNLHW5xFGAR2xBc%2B8IDWwpgH9qniOKw9wm6ch6p%2BgzBTn%2BYTQ89V1QnRvw69Ra%2FfylqLMbyaAHe4HXic05wpsRViuaovR4Zw%2B8Wk6RPN0CIxzBNC3SgC%2BjtY9zVWhYGlQ09l0cNSmFOcH%2B%2FjL8AdiRshFQu%2BOQiyqkwv4rkzXBdLfl5VGiSepL8zyYLuQWvE4EUGe6ACItGQJxMhdEbUuuA4oRz4PTYUhn9JL94%2Fc1Vs5Z%2F%2F4C4G8wMjcAfFlO0MMF4R6PozExkoB3VIIpk43Jc%2B2mphDEJqLU6UyeXIxsiSOYjhJa%2Fcjl3QwLEv7jDti%2FXEBjqkARIGm4C4%2FJO2y8%2BQ8JS6FoDgd%2FnzCpSlTJ6RjMgNO%2BC5eikLXgACkY0cXsAEqXYKYyXApG5iMuvOzjM5zKm2E0k01hL8qMIK08uKcQXMuSPLz%2B1hWpcQYJrQXdsdYdlUFH%2BOkBHLfdI69uKiQhmEzqP1Fd2YbT7Lof8xDT7VHa4hDQmuPnTIpTv6Ej6dZwCz1LcHOdu1S0WWIeO7nuL6bOu53%2BZ0&X-Amz-Signature=13530e9c3ac11e58193aaea28261dd0d83d1d9c7293a2e31de24c99bc727618c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6IFSBJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3xvMX4mzMQdhbgD5BpwtEyKHDaJBkTOrXqZomPG%2FmrQIgfogd4cw2nQSjXFLjH%2BLGMUuXfWUiEjWmaBEGRH3kGxYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIdQLycs3iGIsp2kMSrcA%2BqlCMTBGAq5jL2QHCsyiMnbWa7sQ%2BwreWpKVpiSwbz2vatzabNkRUsMI2W0SjdmpwQ8Fzvran2wsoZLX7o82YnDq6A0wBBUTlMVJTKtnUQhqbeAXt8lOlUbenQOn9CW7oMvaksaIimBsD0PnUFKeSnrVTI0o81WeOFQnoLg9KnLBPoVXeRgyO5K1wOkSc4SHJhXqx7rXDO7zObxngy5yFswF9EhCix92Ipe8AQsxbLDnWlfWAGcBJXa6wF48cvEfN9WysWCQxxg2PTcKs4TLbZSac1u40%2F%2FbRDgzuqIuA6KJO364fn50tj2uOuuCl5PK%2FASeKxFKNGHo9YEpvGjLlQsCR%2Bojq%2Fex9e4eICIG053QjyC7ki6pm9dy7HQPZaQgviEIspOhzz42327qvBHhPZYHbMXjr6CwN%2FExQZbvAmsEllaM%2Fw5OaL00o92jSJAhXTcDJWlysBGAJxkOPAJ0bNIh%2FWKOe9Giy%2BZh%2BdlUqI39MeI9Dca76vWfyNGyXjmPdzSkyIBsq14rS14X%2FPJsvav3dxUr%2FhWTd6vJTR5IFg3ZMWFGQlqLj6Yy4dksLd91DsIhspqLGSbBVm4c3N5IPs1gyb5H0rsCBcpa32FGJHNiHRnez2FdX5ulKi8MLyL9cQGOqUB4ZArguGra4DhrX7XF0p16UMnEYQsWvVtgDR%2B0mYRcGvo7EJCNv0LFvxtrCBpalcWu2Q%2BPfag8P97DKNBlUbY%2BqBquLS%2FzzchjmUufaj6RI7nRqoZL%2BzzXsM8Q37Vl%2BEJfeSnjAan0LUTtN2Q4QXOZzXSECct%2BU36edyrMJYqitI98Cl5KrqSPOGB5esivQrnPp1c9kuJJkHhquor31igfHgpAtph&X-Amz-Signature=7489e52cb788bebf6c78cc8dc0cc5e7cdc336edb0a5dc1c1011e913821953e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGM7Y524%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM%2BS6Mqcsk2TljW%2BhRK9AsR71arSHfBZrqPfhL1t8jyAiBGxuXQVoutx7%2Fju7gttBzyBdGVKUG7qwmOUB3wdymnZir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWrbCLEl0WPq2WvC4KtwDr921yyfZa1Dw5Rf8D7TVQo2tP2vXs4OY8rDTbuaE%2F8rx7pCagfm2YETSvBf608iMrNULxdow67mx7LGXYYgBlImz9favF69xWElMQfP919tnufK0zeh%2BqChIMuiXBVsZ8pmkzpEjzaJZX%2BXQAIx%2FnWm7tHHR6z7HALgiHEeMDy2Qe1ujm2vrzrHKBkX%2FKLcWkl6r68vM%2FkluoV1rHHtrDPpH9YbaWx%2FTLAZ2OlpRtybcDd7awFyOTbL8sVOWEXaCqOrubgkW57oKzNYUud1Rw4fBKpLgdRjJZ7vWFcFOPluCticdmyO2BlWIwdfre4avEWBAwYGJSn0TyPwpbzOfyYVGiUBRNDUYBSpMQjnQ23ve3D6djkFqMFVdJ07etJdNCAUUS0LnoQWHFOUMyIcrXlLqhfpvzn1dvwrBerpkjX0QC%2FF5MgqXR%2B0Yi0tOD%2Fstfob%2BLgnVsAF0wSeKjZmOm9SKtGlHizgYvO0vHZH8SUfxeumpcSJpfe9q3BQdiRcqptxXiB427gCamI8RDd%2BIQRmk5%2Bn0xW1CzCpUHuopJ9OKgb5HsMOpeiWUINCg7RVCFKMpdz8GnFE%2Bm5ubVYr3v1U4lF%2B2MjrOqGD1i0JalW7cmm1tF3zdK1eYMpQwp4z1xAY6pgEp0qE84pgP8zJjTV5lbQPwJVKQEWXH%2Fn%2FmTo35Cj1lDpu5WzIXWm0wR1YtxK%2FH8yWwcZZuEwKFLq8nZLSF7enwkBZ6etDFO%2BqopeGe8D8EdKHAZA8WBMgwSnFkZtd4q3EGwNqoN8ZqmCOWe7PLfIIK3ivSNXHIuqaMn0k73ta7hoS3uKmSh56rO1OjPz10LuQdxqT4vtaWhC4vaFsCbIRRvPrKl0fh&X-Amz-Signature=c06033aab37b063366808731e26d779f5a7aaaca2bb3ae30a260aba0764edac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=c4136431e2b90ba0bc9c3a7a13eec0de8e9af3e6adc4dba8a4c08bc45d0dfea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWOQVFB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHseEN6bRE9cBiuwJCQKPLSntYd6GPyG4xE1yZ7YpEUHAiEA6i6ZHQUZ%2FdVAzQOhyQtUwAz0xCnsqUCT007C982iojUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGDt0OlamS%2B5br%2BikyrcA3LMlPD4hxF%2BgYhCVNkzo8ewY5d1H6wxY7EpZH6kpoD%2Bshmpehpqy0iQ49eW2bPor%2BEwQwrjCjOg2rdoYdvtMOpCrMUWLC7n%2BiwELDXx%2BZjCFl7BbVv%2FH416KNdSbyS42%2Bthlqj0Gtjd29j0L96zEdli6FXzYlW6eBKdd9lkBxAztrwY5gn6Yebz0bq%2BF5KRU9C%2FiACeFFyZp7nUiA0uRjY%2BqXdtkI%2BqgnSMEqFgdP1rUxVKRqbzc2zPv%2FyYJo7JJ2AzngFwPO94JZC2nZschU2%2FCQn%2FwroaOEwNECdVoBV64YgCOzWwX6CJ0el7Herj3KHccxL5jnb911gMAFiqBBBhS76dkBMT%2FZaCrJPqmH5jNXpFSHoffEDrZTMFB4SPGsSf%2FN1DbVwe8P9IpxcLzF4QTZfiGWuLEUvdfo1PtvEl3Uz3vO2jZ02XWFb%2BsE80I5OXSQq%2BAkI8%2B0brn6SEuNUpIHIwA1H75oM3lAItroe41mAIHZaVxDQzt%2BSpisP1M51k82wnowZcUh%2FzHZpqIrZ3BPEISOihMoOBLl3Flme9s2ocCeVqlqwVHNNAHYTFWfkrD3apU%2BS7ULwNBPIKbo8enr8Jus8uCCFtUhXDmF4wK3S61UV2Mf3YQ6qvMLSL9cQGOqUB6%2FlosRJaWRXWEUVJuUiNPf7Qx46L4U%2BnZbwDOpySoxJFryEb1Y3jgEwhlRuAupPiqBsgOEnsRHNJJPboYywQKeMxmrxRAzrRSP7vep0GHfXG3kBHG5R4JmRe%2Fgq5O1d2Ng8bkYefL0HNudLbK8kqiXV3cCIIc3HD%2B9f8dVxMua0s%2Fvsmf2ZDVesnUwEoA67WogdUvrEDbyaj1g%2BEPx%2FAFbWCYmdW&X-Amz-Signature=b388898b771fcb0117dd44e956127d5d8eefae446f3a053268f4f21cda94d8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=e76eec75e0a054b06974f9c344af80cf5a47050c52f8eb08781192fd0f3e8cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V36B5F2U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDunDvsheGRDf%2BHBKD%2B%2BB7Ceog3sjJxzPheWpmFCZsw1AIgFpWP%2F9Cnj1PovEPBa22C522AO8Sm2WC47fpgd20KX0Iq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCCPrvcn7jH%2B7BhACyrcA6akdn2liaNbX70wmqsLbOvO66t9ODrbTOIJogHd%2B9TKRZ5oEzwqH1hnCU0uzMTroBNTv3MMV6pJGH7EXUloeWas3AMVRkkIdfl5Ba%2FKFgpAslx0Ck80nTHvh6gwZx6%2FYSR0tFLLpGJslgje3m463lGtKqe%2BkGx5JmGnHrsRX6YbxBonBYwwepOW%2FIRa54bBXXkwxm8UV3meOgJ5Ys%2FTowymUxNZiLkpq%2BYMw677pZhevRhan9oCqC7EmZfo%2Fdlt%2B4pKOR%2FMq1bnrjIZywiDA37uSlP4lKuyCt2dK9HEIH3T2jN4U9pW6yZxOSH%2B%2F3mfKz8rfGWdzjFO6%2Frkww0r%2F6ZQUT0jHzdihRN1BX2g87HsH0elATYwg%2BCICxE3BvJGu9GYMdGk%2BafLaP1CIhk%2FMhAW%2B6xqkMo7qh963q7rNL9bjdzvHjLOh7Mi0NxUvwPWDoeIa1x3So%2FBeKpce2yt8NewJ4Czcx3FM1CaaOjH9JVUHM%2FtZDfZABIRupkhc9r7VoYGedwyrQDJ%2B5hiZAGJeGuirQ%2BUM3qxTMkANUWqbN65ahPaAwlmEdUPDcm1PxlwVYUNPGrrN20DBa7zb7jK%2FYQIqu8gJEl5%2Fc5TsbEZS1RyDfL2LkZwXbqxCpWPMPCL9cQGOqUB%2FccyIoJQhjjYByfTf1qfIGc2nE%2BoziWcSsytu%2FVQ8YTriYb%2BodZZd6KxKgpBJe75bem6N5axZRLV%2B9Tny10CXse8fTy%2BztgGUucRj7LM3zh3JsI5InvDqz277W56qgIDNiWF8ggtOPEFWlDPODrpMgsuM0c7URZh0N261sSZ0BvU2Lv3izAUd8qY0pRc26IaL3s35xcOxi2yvhepli52Qp5G%2F2u5&X-Amz-Signature=1950370bd9a1e66fa7d18a71d55cac208fb1b862b5e730d61ab9c2b86f602a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=cb369689af2f26f356cbcfaa976d06d2897b3a0bad9b67099e28fd205d29e238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LY3DUON%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD222SrI%2B0BluVte0kuUJkpnt6Qpm5pq4I7x13zryQ0ogIgJleGN3wx4h%2B%2Bb2eqIu8%2BKd5vqbfWddMJkl9VdmHtTikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDC%2FT%2BenjhSAajKBoqSrcAxPlp%2B6cAVKHE67TpYB187yiAzgO9t%2BbtRqmSFHCbHgqjCAWdyVfzr2gWuodrTtfFwhE51J72a4ZQiNDG8ij83bMsCEzKpT49TCXYu0z%2FXFH52uOTXqMBebLppVTXQyiR%2FL%2BVmGhDugyjloKRbds1AyPvrACTKsOTyMs962w6QibQy1YWG34Qhsy64KkcTN8ZwjuNpOSIF1%2BTYK9s3ZCMzaapaJwqvna5LPeQEC8qKT6CdPyqbcu4TecTNTl70EOIdAahM4ChHY4IoJC0UJpWOOxcGL5qo8ksssRvQhNFCMMkWVMjZzepzmPlWab9mLXYMLuxj4bK%2FVc1EPGuo4bEax8xxqTZeZ7GsGMU61UQFYEyh2OtzbSWUUZs3IL5v3SiOrl16Ihec7R5Z8VobXguMU7tPZeq115JYO4%2Fkj9kZAAAFn%2BQgLjDZX5jshE0%2B2eOyICpXiP490q9a3gvsNmPsTZEVjF3ksYU4YZjuSAb7HbD0xTK9hk8KubOtGY%2BiAeremP%2BuAu%2FYcd6WZZ0%2FWqkYE%2BuqDt5eEUYx8OcKoHCQCEpmCt5o7L1Nermo%2B0%2F8GGZRmbWMs1Cd1qnXr9OpiaZVECtO3OlQEtvOXX%2FiAui0QS2m3%2BhapfWewNMMPGMPaL9cQGOqUBpnEMjx3QiIPoFR6TpT28KvQBAZJry3j7fzyWrD6nIO3VzQT8kvgC4zk3fTbGW7VDU%2BzVH3VwWNNmLvKNYIukAD9g60%2F3U8jvxyIGpr4nWdmq03O5XZAI42HGtVutjLy%2BcD%2BWm6WZE4CNaTgJRj7BNaduBoEr2AA59r%2BUSBkcp9gkofZ7RIVzlfOk1vTXk4XU1xCME3LAjSnAIbsveNhlguXs19vh&X-Amz-Signature=443300bafdae0a02ebc2b3ba70eb85afb5c3aeae6e833e2514617ff24b698f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=ebf8de9329b7e9114aec390914357e8ffc4da4bbb5e5e777ea56c63dd8a623bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSOJ7RC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQE8gqT9VHaEoPRi6thHf3ulxr8fXIEKdl%2F8fif1NkRwIhAPVno5WDc4nA71uLlbkKqm001wUl0y7kUWI7wExKveEcKv8DCDsQABoMNjM3NDIzMTgzODA1IgxIb4TdZ5%2FvIPah5GMq3AOvDx%2BNGUkdbKB0Cnwpqru9YuUZoQS49u7ILmWGtZflf%2Bg%2FzvW2HFG7UOohDpifnIe2xODRMmudUhWO2WOa4IYIgJ0ebEKxIzva9Vb3DlSdJ8U%2FT2RlsaicoN58dFUJjDS7ru8XldLfSB0x4aJoP1Bfh883BWQIhX6CtTdl2rCBjPy9smy%2FIa8UZK%2BndFNYYrr9IaVhWo3v0pjMv1TOMdRzZGeE0arLDYB077E3KD4THWrmgN9EXa%2FsUHGDTCjZlCJLlQpRgRgjURfIsjIYdMKfLzvd2ZQyyFKQFe77gBC74mOf%2BeoSl2prnRykpm9qDuVuf58KQ4n8TSfIgZDi6zAH6QBotCXyfjsDneRS0mOYBhinu%2F%2FGwevjMJsULekqxz3nE%2Bg1pHohh%2Fvzs5DZhqZzHHlSeAsPPgfRtHJWQQ7DPigT1NsRUmtKtU0SBoMJwMcbVcEPCYZ%2Bnw4mULMafDIf4hCSkdY4mblYjwiHSwzJKXFpwZPzKaUlB%2F3TjbXB0mkzJAsgsnPNd9%2B0cWcqIqv%2Fge9q38GJ1O9OCYdsJeT5aMogx8xreiH6v1Gxzc2at0Um8LLoA6Vxg96ac40VUTWnKm9UB3JALVcw8%2FDSBDyDahyhzvs%2BiPkpRITIvTC7i%2FXEBjqkAbJOfV0xXIIdnokWy677yyjg%2FFDF4HsDQM0BXLyYgDBkw%2Fre9nce%2BvqhTV4hbi2oKzo0YaNLCk%2FSWfHVgZzGog1ilGf7Gv1UtM2Zny%2B%2FdpyLzuEp789CalPrF8y2PluFhZ3qWCQVAYGXdBw8%2FGnPUqXOVWxqIRTEth6mO8vciwX%2FYuJgROAgZtzs0aXrMNDtgBVEhMApR1mYPxP25a0owiMScv6H&X-Amz-Signature=d11ed62952debc44a8d8c3e4333e2e26a80c3781d7dda6d28868480f4fd2ddcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDOWQMG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPu%2Fr2ZKksrTuPw5Wdh1Eo4qDQ4o4IGWjJQR79a6chhgIhAIslrXR2SGZPB%2FKha2QbC3SV5jsMCUGmxmyfFIIEB73DKv8DCDsQABoMNjM3NDIzMTgzODA1IgwXFy0d7LC%2B4xA1a6Mq3AOSc5sEE2bRUlZTgHoUXjaz%2F%2FEWjxlwlQFwxAFfNHN2V%2F1JlVFQxC16TWBp%2Bi%2BH1jSNWt68N0ewoxgYntFwsmS0UO0qwOjq6RKHVXwitO3YHgyoOLcUwsxAqv1TpQTsAL6YEObWirpeaR%2BVzF0GAhwZrUucqQ1hWR7xeKzwy4800dD6Yb04NpVKm7s3tj00yYSpkMXCwPOnft79Ar0Z5VRUYq0OfGCjrWuUhq8X45B4ZuSkoUNquDDi5Hu9dXf2KxFvOkz0GtAOoJvqp26GptDU2f0pAMxz3X60TAVbCdP2kn14zzbikAON%2BWYObPSXmvxo%2FuFJTAkf9S85evdZXOazezGofqqNgqD21CG%2BieWurJcYJKYBhJmIz9ip989jrZQukFGPTTHi0LqU2z1MEOn%2FdHxr%2B9vRltf%2BAAjzqSQW0pT5glChqOr3hDkCyUwF6vElR2gQNGTV%2B5PhYUQPDsMEGYQ2RR4cQISoJ9sqAbVL%2Ba7TnzikjYHmwwMmetKa7HFDRpropVFjb3OPebdtqR2ReGGDCEdWC5vfj6ehdzoNlk4VyaB%2FjpUBSZlC2YlUc3d9NTOMcCAq9fKDd%2B3RgeoQTZf5kYabx1%2B2SFviGiyE1QvmGpON5zOac3%2F%2BZDCdi%2FXEBjqkAWA0I%2FhUfRpUpm6u8CtU2js2KVvtBThSML9NFqPrCCHFssEdVc4TndwbEl6RY4%2Bqa0pyXaCLBxNmKpRkGruMfvgwHCWfX3G381N1ARS%2BpgzdbkOJnB9zvrViw7tw5pdxc6w0TYfMWJl9sDDAT5IFVVwIzEN83mf7WA%2F1e8IsY0seatMSf24u%2F8pSRIjOsuZFJpOmTRkEOJ1ZGRCxlPkyxoHC5cQw&X-Amz-Signature=13cdcd9983a58f31fe5b5c7b6e745499211fdc597d5e1748dc4de5cd009e994b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT34ZX5S%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA1wmHI3IFdn5UszuI23h%2B7exgrYcj%2BITbmwvn8Uy2XAiEA3idNihH0CU36MfJq4Ucpmtl%2B0g%2BvqOMd4Qq3g0B874Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDL5ozm1x6NmQbs5Q3SrcA0hmSPZnkwy7WuCpPWX6J3xwi9vXRUIeq1I0gMmkhYBhEidgtFygEXfdzHhRqDrNIwqGjKLYWq3fW%2B1qG0C87GVn0jFvdJca%2BPkG9nu0kzoXZxtmiYVCe9OtdSbacV7JLhUJkLvwgaB7MH9q%2BVU9XiYNgsQdaDbe7aQax02QOTKeySZDR8f4ZJExTmnhFNImw2FNlRl2hGmqIpFhaVjw7YtQqzAz%2BBxKb6lwpYy0od6gvzYLTFYtF%2FcWLG2KaOxG%2FVwWCCYU9G2jGGMOK3lc3tB90P4ptdfyK7mph8IhqPstQhImwJoavxDbJW1jc3WKIEYeW2%2Bnw275xTfGBYaj5jkHDhehbH%2BKMnOnHk66uGsU7cGiMR6ernV5MAigD0mNrGjczIFDQhxHhdR3Twx1Eri5WpcDQkpRDAOhxChNg8%2Fi71dP9uciy9l%2FW0SFOy08Hn8RIaMcq0VS71880X9LT0Ql%2Bg3M5ZSuv0k6uPXlMsrgX%2FgOXQL0TCg69e%2BzL9HFYpnGwGzn8VkUYta8RESB9ZGehb%2FFALLg8l9SRzRvlLl6sWAbX2C8FZVvOsRx%2FD5YQKiNo5NOd6G2eL9VOuaAtDdhymTPwUCE7ROtIl0yIghBwSMl37wpbPPTz8bGMPuL9cQGOqUBw2AkJvMKoj4bMiDgD%2FoFAVKadYzd%2BLRZ3VJJ2F1XQVojwaQBMsgH617QsJXC3mdTu8UuPTaRdRWSzFUQK2TG5PDQVJXfQaBQaxp5V5N44hwm6zIokCOvYoLPrd4xXPepRGyeGmc1WgcY%2BdHEVWooearzOoCYTw7i8ieVBru1yMTiQuyHwV833KO5VqdvZ8eoogZTU27HqEJavZrnxqr%2BMkjCTeBA&X-Amz-Signature=7dec9bcae97bfafe71fca9c29623bc56ef89f1763e57e6952ff7457c8627b077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6GSITKH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZH2odp4oHaKo4vUlURWQ9ZQMB1zXED6ii7bJ0HuN4RAIhAJSclhXUFTbn1NfOhRTRIy9vjuM6M075ikOr%2BMP7MxRwKv8DCDsQABoMNjM3NDIzMTgzODA1Igzgj7KOdZK%2Fyui%2FE80q3AM2iLW2wedb4%2FwCEhsqCOGwWU5ndz4rqHSfSQVoN%2FdHN8bfTg5PEkhPp3YYs1l8oATUKyXtUHKwGaHLtTuUWSnF5UhsCJLj1sew7stR7fZLjrVTT5conh9kI1H1E6wgwVbN%2FtOZHjKUmVf45uNzjVLWc1sFazZw15e%2Fs6BCU3peXMBOInBV5sJwGOgAmZHiZ%2F7WJL1wqcGB955mPHNyBtqvwxP0BPsQ7RyNrQchw2nbMF418gwEVKYcIOCcFgDR66l7kN2hDQAhDLauVf7KGCQ33UZSiTu4XpcbzmeOJGtIbLuE3Ie97jbaLkki%2BPpnYgxGHm9SulhP3vfy1K9jXIlIhXPRbBXyZKu8%2Fd9cmdWRK2XeFOaG3LGM6KhtXl6WrtCPUExluy2GLHAGhtZS41AkgPddC6LCWXcWev%2FO9D7d%2Bu2VplPlJ%2FJlgKiujhLgacTmVGw4%2Bf0rI%2FleA5h12MvfFrQUYo%2B0B8eZ3Z6zN1CuJN%2FjLTDmmNCVXuVm0uQTvZSdbD4heqG%2BmfgweO5oulgdFlCk%2B1okREafXIQQBLETloePfTNKkfVdipjDm8Pm%2FIz6TQG6lahEpD7p%2BiMmXs6TQWTzcv76RS1Jn2xDORrk9qQsJCNxZqYlxoiFgDCRi%2FXEBjqkAZcs5vWjp9Gs4c17NGo%2Fs%2BMvHywFh8qtz3kmsOgV1SgSPKZwEZ0sWEbVxoy7jLBueteZdNdwwV4YUIvYr074m54OUuhEbzTqWusvYgRmb8Yv8nSCblCj1VkSa6l4FJC%2BAYdOKm4dtVL5ui73SMz7u%2BnJzgMlgPPKeVYXvnQBBhSKPvn1HZwc92P6vcYc1LnwUuXI7lZSKvxr%2BXJoCNP1utc3gwAk&X-Amz-Signature=d401b322e36dcb4f3bffe110e8610a0cafe9223358062045e2cc1719cf31bbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JOJFY3Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyIsA28suSEulZEV3x2wq4bQTROsxM9IEVggiwKWrqPAiAFFNb2%2B7CAf%2Brg1V2S%2Bs79jlkjWDGKtnI3%2Fm4WvQg%2FfSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMhV866GyE2yH2hnsjKtwDRUjnR86zCRTKsFBBJv2YdohLYu9KT8MjhTCY2%2FDFKmM2hyvOpId2%2FxhzvK5Q6FzdP1h6jnnDe1j7RIkBlHTfXmsJPnAXpBqHjCnL1tooB1OYQEzYo%2BJmHh7pBkHyBxxrMF8jANeVmLfaGk86d%2FNotTX3QP42NJkKryczZgzqweoppwKp0BHet8A5OuEqafIiXrUiaQ5E440L8m9SPDomFcffAeMU7Q70oQoIpBeJgRrDT9moizFGMS9Sl7gfyRnoy70wtp%2FPBx8YHuY3Z4OFSecPjq4yS8Y%2Fdl7yrQ31DPb7UM8jP3Q%2BuJg3ce4aA2poa9lgdkrb51ufrabpTyNQFtEAOiUMqJpkcpCeeRnB66Sv4MaXnljEM%2FM54Sf1MHhHypdOSfYD6Db21lxzhhO%2FA4xKFlmV4JcrNQRkGcMcWne%2BiFxOAJ4pLHgBXHPcYZCRCsMCvI3WDhucImTF1qRtAbLct4DOkJv7bOj3LGUvhsGgxS8%2FArKmkwKSbNWZa%2Fo5O4eRK2dv5EO9R3F9ug%2B6w7JBWxaWvx424AdLt0Yi%2FCMhjXWg%2BAzeAT47JoEPDWd4wmsHbUoQkh20SjaDrktjzmEGZTF0sQf7IIzMbRVKzoLTLFvMxjdiSfJr32Mwm4v1xAY6pgEra5K0ASj34kZ%2FAtV%2BZpHHDjolMzivLTvIXYrJw5W6IC8lqBvouguqtGQVs%2F6IOYOuWxeQqx5DHwgYRmgHkDxgugr7EpRe4esHudOlO%2FbWvceS6JP1qCVBlCCKQspNdyoZ126O4a3BEAmlojYme0w%2F2ZPgHuOWKYDC38dQ6fTWIOaH3zCVPMDzh1XSE%2BFAZigKRtR4E3yoYapRA7H7j8GnpN5VmoKU&X-Amz-Signature=2c8b1c7b3d85cde1aba2bc09c77c4dbfe2575c5b1804641085da7f45bde74add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=f0626fdb30a6f4200acf76b0df8cc493af3b65afe1433dbbf345195b6c04fb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3AL5BI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD83tygRYPbCTKBhIuWBJXctPIY2PB2FLTrTma8mY2I9wIgNbJ%2BDCevIIExsDe7jRtRv8kxLkHm5CHxSEYwCS0qS%2Fgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFRK78B68tGvgHfpwCrcAyEU79xbg8RePeqXvmlCFlrPOzqB9UNXQZ9Yi5rBW6N3qshflqg8bb0b9Eo3Zg%2FgOjJv8VxkkJ1%2Bnv%2BDaGUyIrRGgOZcO6n0yKp6hCAUG8wkB5IPSptV6FXj8bZ9F8L0sEtgRgvhOfMYRQMjpSopYpfYXXAfQ2NbSnld%2BtLOU6ioV4VWjJCnIF98rqSc1z7L7SgVi5YmKukFPPl7IGD16D1evUwPuZWTQcMXj9e3ig%2FwtWDIiRvT%2BtBnXTNUbErYlv%2F068k1TpBoW6NhhghatrQIYBYvlA1GdRkOEWuSRFBY1CzSL0OAIj8dnsD22%2BWiBAL4E8XwFUV4ZEHxEfDl07wMVpplJJNBGJ%2BoWuVgJUjjVgZYHs01Q2%2FkUXukZLcEcEL82Xyd5TPs6LkVRyJJmVQctKFJWqmNQPai8qamJOlWNkLVEdXqlfmMJM6DZFS9Az0BU9RmCFRrkP3dI0yZN9oEtH%2FICni%2Fr02%2FU0QPJHxQJYTM9i7UugD8TmXmZgvbdZ4SAyEzQbHsmeeOXDDvwQ4XNBcAYa464Keuao2OIGUm7C%2Fp3a423%2Bbmx3pMV3q2aEBQKsELAbQlS3FujEayo%2Bax5g0776%2Bbc2yzm0NGMjsmZu2niIBlZd0sVj2BMJaM9cQGOqUBs7wfStKsXcpqKn0Cv2f84k1nGu7SBuEPJHSpcjhonzs91jP2X1FQLYmzKG3T93zesrOQsxsTVjl%2FHoJEHaet%2FWPMrVUiMkKvLa1PBY3lO90%2BSr%2ByWXvA1skO0JcuhgKTwZK10VFGrXzumB9NS0Am1Dol4xrYWKZRPO86kMFGf6G0Bkmv3w%2FBsQ%2BXQTg3Ht95Rwr9RMCJpkWcfZUp51maJM3G7Vh%2F&X-Amz-Signature=ccda8cc63252b406a96fa2aa4dddad7f07cccd97036b3f5d79dc64878f104a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=e52a146ece80704d578bef3560cec62de0c7bf039e0c3465c4d99c8ccbb5760b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=0fc25206a7b7eb85b15fae11e34482c0d59e8d55c3e1fb41479fc5d052ebecfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=fa478e59ae450724b09ec89e74680c760b389f9c14b695c70fd8a5b07ac525db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=823d773859413f8e827bcf5c81906d664ac7cb4da0374639be8d70704bc65ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=06f74cae64f79bf33a4ebf1084b438fd52dff4bb0cf22d427f2adf10c30d42a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=f187f6e748399c47b2ee56a0107f3c536240dd7d166cb422918494f6359b1a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=fa478e59ae450724b09ec89e74680c760b389f9c14b695c70fd8a5b07ac525db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=dee81e84ddb71eadaf228f25f960d1039c96f0aeb21da26aaca812341e7f0be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=409d389b9139eddfb072fd251288afed186ce8813af2d883f7945f088e7a07df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUBHX2N%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1oNE1glDOC464i93cqFLUv4qYlCaKaOWTimfcobwrmAIhAIpgnoG3Qhhhu9G4%2BbTzn298QFtqEZ%2B2z4p5E1MiyTzoKv8DCDsQABoMNjM3NDIzMTgzODA1IgyU7c60FqInj%2BHif3Aq3AO5x%2FhT9oS1CnQUOpKSxeEaZDop5Vd9QpWBl%2BKumTmPsHO94FWvb7Zbqipw3Vdfukrchi0zLlsAJnuonWKDamNrWhd4SgLK0aMzVLl83hozbWn%2Biifps9ZxBPIrFWCqo2f3C4vu52b1KaamqyhQvMYrmqAJxX30vzZNcwx2VnxxQYaUnqsN42i9jBXSr65L8Zr7Ie7II5CUmhBujEDZQYG%2BAbxQFt9lI%2B4UgO1QLHMs2m1VIUGy%2BVWI9LulNkR1aES7lqcpUm5QfJeNINc0v2psGGaorZg9tyLC2CfOMMq2ZHqQ56SonCorbTkMvuRGBq3ief1nWp6XpwGPHzeXd%2F5VMHc0gLG13Cg8izdT%2B2ETUbGW9mKcBIoKKyUYsCHt2ONM1%2FzQsVT5wD37DpUB1IvDOZ5RvUX%2BloXFyM6PxNYr8%2FwdPCiF5%2BHKw6Oqf7lgAKtGhXxnPyltiyUkwM9J93pAqXsQEbhA3i2GNs7xS%2FH%2BQH1QQvOcLxex6pbgNQXAR0J1W9SwzCT4uZ7rMzu6VRP6e9mPqizhuurANCrCCZLktj96G0pKqZae%2FWx7BnN%2B21mRFMCJdYJaAYrxcWcLUgXid49JMBIopC5Hzo0zfSwcSNxasqHQ5YoVFp11ajD7i%2FXEBjqkAQMpU0TRCqVQ4vJTfZ3UgbRxf3Nrxsly%2Fu5eWmRS44tpRxTW6jq9eomCstgXv%2BKhAe3r9Jqs6OpHaUpaHubTE3gijtSCZsCfp3FWUXu%2FGGrw5yfGWjF0X%2FV%2BZ6eCAm6ok6uLOZ86EqUUQk6i54pA3ldii9LQxTBztBoSRzRQBQLlqsBGODp6KbO3CxhdovmlBIDM0Bh7TNZkE6hlebBDAUSb3eDF&X-Amz-Signature=eaa219ddd721f996764dcabc5191d02e00e0c25346992bbbdeffc50fcf28752f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
