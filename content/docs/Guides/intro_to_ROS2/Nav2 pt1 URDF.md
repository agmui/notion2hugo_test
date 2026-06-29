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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=4f6fa9c9e6be07b295b95c6915b21c483f4d99f6ce64c58be5b549d74de21e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=1c598925d126fb3dd1d2eed65a3876fcd7c2ec6e7ea192219adade7c45763d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=fa2d1a6e552c29fc8d6c22919ede206c27b86663d0e707c1a88cfdf3be02b9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=287d6b9d4b5bc1a33a5715a0958e9becadef9a135ecfa3e59860221d461b0a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=a29250b3304d5949bb75f56d24977e76997becebef6c2cc5c28b0518c59aea2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=498ebe5729bbee2168548eac58ce3cd421e1a529a98d411a366619e449e78458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=7247a9327725e1672e67162540d1683bccb610eaaaac673ae73661e83444cd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=e84556dc038b1c2587c649114476bf7414e5f7149ac567b675c61f391f22ad71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=f52cb85e0f0188dffb7393f20c329ae41edefc700a80243155d6270fef4b8392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=65c85f4beb9a9925854b31912c297169299169aed93c74fb55a23d9028173cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L7YGEFX%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXYMy82sqmXPeq2BJ910JMtFIAA4J3HmLlFgmpwSeV1gIhALWkhYHCmtKHkLov5wOIFgmTWkCeQeAfp2dQ7MRSkG8LKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySs5Q%2FuY%2BAoI38jv0q3APJy3HvOpBcT9rkOGozBIurQ0YReMtj5M%2BIe2mW3UhYnUeVZIABy8aCMbhBUPJ3Te3rU8ZNPzSmnZS9qpkqYy9QG3xkpRBbovcxQhLqT%2BxmlACOxARDjB2jH902lEZkdC7vKqrF0F%2BCbogwpgPOho31j9mqHq0FwppiYsuMVTKr4huiwE00tkUr%2BnSmgN6D7RayfNx9hPyfLU2M8ucpLbsF0g8psHTRx2pjJtbDttcqhiODkECx7E4Nhy7dDdFE6PeRhPDkVogF7H0GJI6vF6mcF2vPXCXMKSEncd9qvcgsa0OxlQ7zggNXqSwFBRm5OCVOdEFopQMLb1rEj3tl%2FY1U2D3mAMdhJLYTMu9K5Zv3Jvl61KKXiNz8Le%2BEhQNopOnUkXuv%2BqaZ35hxdSMD3PlW9d6b6WsvGWitYDxMY1R4D5INPI5Pb2xjqOQPsabEKdBTra4ynZi5grFotGG5y40vM5mOK%2FHl%2BQ3cqWyAjHaaDEwr%2BMvrRhCIJbgdDS4KyYjPsbLHyTQik9kn%2FaTGRTzvXyXhQ92TjFTT9LuNEqiqqQHZ444rgCCalRK3NiDr0biZbsLT2KOwWgJZKCGplmkn5%2FlvVPHEsZWov5Ek6%2F70LFdzDASlAErunn9oOzDM1YfSBjqkAbrHnszRL5XrA9oGlzkO0kVAf%2FEppsPJJzIg5SbSJJqUcF7rUwCcxHPeUuLQr5QIwOhU7Ch1JlZX9X%2Fhr4Gu3IFRO1fLeJea%2BhcFMQhXH1j1vyA99Qnez8sFrP1vc%2BMOJ0A%2Bx7HPhVz7lda5vO0RAknmZbAvWbeiKv6qn%2B%2Bdk%2Bp%2FLkzJ5bKJ6yyjwtiedW5daGoi11W9J%2BirG24QoD4nogv7pxTH&X-Amz-Signature=e414cf70a1f53064f8f693e17cc719e0532401371f21d216f55972652c271215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUJZMGH%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrYjg%2BmhU0MfxtIs%2BpQzI1SNSFGrO66ljGQ9NzmWYwpAiEA9YHfuysObwaZnXUSd3tgX0OsCBNTY8mjSwzaamrrSy0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBBX4GVSzGHpampCyrcA3XdfB2CWwMcCgBxUUbnBDdCninfs6W1GOBgORxIHb5xXqpd%2BPJdvWbcmTapJp0R9AhOG1UNqb42K6KC9bcM%2FCtHc9%2BKIqLEHnGFM0u8419JWjlIsAyUbw8xuImJIqgA9UD2MZ5yGC9yEuNXPPmqFYImZh9MkYR1JE4UohbzaP%2B34hl%2FO7HwlDtAkY11SJpbYXgREYzOONoQ1N9qiBy8lG2V8bK1SGjSt4Grc%2BuvRp0FrNn7XC8tiL1p%2Fcm7KxJ4Xtsibor3C9tzcHSaLa3DiXmGgDVc97aLqsjMkb4JISxuFm0fHzZ%2FCM%2BdGqMAFol3L%2FhyIQCXYjxSbhhPdwB0IjFLPz%2BC7mJrjf%2FBVoBg2lRooVIjwyLbyHLaihZf0o%2BJC4sbI6W5sBt35Ztx%2BN3JXBEcLJO71CXTn30FWviWdF0Nw9wuJmNI7hm0C00y9o4A022U2qzqpTjZFnNu6d0oYWy3R3NVBKl0GCoFwbk6F2j3GuhfgAoaeybVSgB%2BqwUGuqvrOdWaFUdbekrZmst9vyXwsW3JpaoKJVktskY9KGB0EK3K46J1p%2FAMh2hfvpAanJdTxe8S%2Fx34jZGK%2BPDamMjYc932SsSqI5ghCuq4yWoXH5wDMcD8nTjnrZZiMPDXh9IGOqUBNuDoIhBYssB0eWpODsOQMG4tV9yqVH0LAgK5lCotZk9sw6ce0gI8d2I%2BIZN9KpzyWQIwXIgXQk431rmbJJMeYQOOlQkTUyKqJ0zXwTi3Kks2uNKmCNGnbEiDQHpVhWyz%2FoBGaDJlY%2BVLElltR52zI1zp%2BcuX0OmORDL%2Fix7BiYZxboW0%2BPSOAdHKAqTjc5GcNZvyLY6pfwlZWrt3Jisztgc8jdSB&X-Amz-Signature=5c7ec83c7cdafd8c34470ce92f59ef2b225e5060162c1891f12a11e7cd3b5ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VD43OZL%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgsPlm%2BwBiDTb44JM3xom3NUFJzA0m5u9ruY8xe%2Bmd3AiEA6mpRC8zdUf%2BmVtRrGtTz7qpdQBMJeE3Ks6XIPgka9e0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIkdilXJP27%2BbqwWircA%2BxdaKI%2BysoLOrbXw3zZm%2BH9dRLhXEINQMNa1N7U9mw%2BdDVM8OZEeub4eAYuDS8gfcjqKRDYItBUoW37wV9KsBsHo%2Bom7M4FQ1ksNL87L%2F%2FoP3K6zMMZWfmRjIPGVmmLoj10sJH1yaqz03aFBR754NYr3IMvOCnujSnRwLbzHdxRlfV6MkBBCgjzQRO%2B1ndGV%2FWre1ebSjABbSbfvs%2BvrvBQoNbMNm7NWhoqYio8CqW46qmCAfedulieitXPgkDWjfzQDn1C%2FDtd5FhVsYcrQtaJCKGa6M%2Fpum%2FDy9wIbefzUyrzQHd9%2BgyDc4PqF%2FilQ%2FkYctTknDJNy1buSzzKCUeDk0xrjoOTaRY2Eb8%2FAmQb2AFs0je5nzz%2BaZElHq0VriZ5THq6Kn0FE7d3S6GbpYzdOhBtw9JpX4wRx8bu0INpdxRZxDxPXIki5fbhvrkqm1JOPAgT0fRAcT%2Bc5Ylc4pYbreAm7hBNfPGzYwVnrB7MhVdFxNy5K0qWlDttLaCiWdqX9u35e0J8%2BL0Jq%2BdcsfW5YE%2FFv%2BRiRRuZmmdgnx31eN%2B9fFGIx6CvJHLyMAvjOz68P56kGqNRGkCJXMZErRWLbOhw%2B8CPLd6reKVTCd0LRBPtqN1Ti%2Bd6XUUbMLLWh9IGOqUBOkDXztOTDmPZA%2F%2FI0JtASMIHi6rnGPy8vVzi3t69kwNJFQat5YTOKjswHyRaaMHvj4YQA3J3luAtk9HHepuWvI1%2FHs5s2TR2SVlBZMAWaVWBaezy%2BIaq37m6rN7gP7dbuvJMEmNS64sqqCWbwO69tP70WqOLw0rkkEGNj9orxfy48Eam6l4Eo85u8g6mZrAE3jRdoHS8KU6FOoRYX9dOn6qgIfFe&X-Amz-Signature=339b9537b0917f201a7a98f67552dac4c7aee41b302d173f9aff314bed040b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=84767d90afcf2e6370dc08a95803f9a8ddcfa33a2cf3cc08230d1fc223388cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TR42J4%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2Bcc%2B7zXkeTeOhvxpS8OdhxtIOypDoGt33yivs5E6uiAiBtYvCiZfg7Fv%2BXVoqk%2BsbLKC7l2DUTQJLbOBdpMBl1wyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVJPX%2FeT5VULoE1KkKtwDz4LgLjp7Rze8%2F9%2FANhcrdS5cLXl7U4B4wYdsMxSmFedHFtSsqNyLW7jTW7Rii1Al0XOHDfkPIPe9wpL9tobYA2zZYa0VXoEQPc8U8KnvMUWo4RSJ4%2BbgvU5FMNnULDcMeaq8js1JAQTnl3Rhhttj60vg4A%2Fqe4q2tCRzQg9QZFqJHhXBeze8nW1yg1aq7Nc8JCpUBmXE6EwciCHksBZi3v%2BJ37zRZ1DazkbSwzqSR1VLKlPBdx99hFeSHWgo9iXJOytpGvHKY97Dwh5qoLmRxB5BGwlDzlEpXaW8Yy8tacF1PCt1WQIpf8OtLJbFTPbS8rjp3mAm49y1oGo1zUH4vDBm8rXeNATO3GuSBwM%2BMw%2FxihUbAEjEV%2B4aVC6bfr8CDrqWtYzmPmrbv84a9siezW5ZmEXBDGeXZJY9I1Jmz5UWr6gm836WarVCkNaMTA8pvbsRzzfenca43HpSZ0rsAmBXXACGRTBeeeydG9LuDaezFjv10senlFcE%2BE0A1pCprFaYC6xpzxdAPlsiHrrp8ew93OfKtH3ElkcAM9%2BeX49aV4pJOjX2KA5reDQsVtXkd3nBObczWHMayMjMlMdxLMURSYQ8m9Pffe%2FZHqtWsBe7sy8PxqMsU4r%2BrZww8NWH0gY6pgEF5UG0BQFXKx%2B3ESk2cZXRF4GVTj2NojoUkisRpqWaUqIJ7GiqTGQQkpstqKOd0Y2v4TytmthlZkGwFu9yt1PARYxKwVUSU1oUu0n%2BOh3M%2FJ5TblMzYX0AgC5oq7gMXO09m8OybXaROlDI0Nh5VM%2BGnqETV3xXdppHDChsa%2FH5MME4w1%2BDrflzQ%2BxoIbxHUCD%2BRZPmblR%2FwWsuCEZJQVc8camLE1I4&X-Amz-Signature=e3d3ce90667e1d5d6ddca527ca3a41826941a8c503347074558022df4e2ca2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=6bb1bb5417fbb7f729a25d61866f33011a7d895772b2fe94ace1635acb6a6290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDA5PDP2%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmRMdCGfYfx6MnpfgoERc3Dy5TwZ3xntn1iHv8gd3hvQIhAMML6F8qAmX5SzTX9JUTuf0qp8inA1xjZUZgZj4gO4dUKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUcQkASVrkLdSTw7Yq3AOMd4JU1qBHSqWHZpR3nQC2MI1%2Fy81cw%2B6YrVbKc7S4zhwKS9I%2BNWqyrsTK8oG4H7FnT2DZ7MeegGRVMyRmnUPg7kNQPTRGjM1n5Ne06KEMLUCBbeaV%2FsLMOngonq9fUi4ylMuVT8Q2KQ5SLcVo0z64llwTAREzdEHBG0WJLpt1myD4BBrLxaZQ1dFEMw2bX9maTtYbIxrLfHNcP%2F21SB3DBiu9iIpcp1lHgByhPjIqLRhou%2BN%2BTZkV9MmmjT4uc6GeQ0K6ar1tWteuYelhRL9fHcbiHLUu2SV8VVY0Ks39iCffT5rOSW7QQXLVBw12TbBe%2FvxFK12QUdCw8CL3rKcSfqUC%2F%2F89nkt3NPNlKuo3NJgJvXWfPCbQ6eRygIjDPTrP7%2F9Tk5jlqcXvjC9jmY5%2Bq8gnZQBXTuQN1vOMsJvd7a%2F3yoqXLLoU73c%2F5fj4PRVT4JcVQQhLuIGZxhMvTX7sPZgHPyTPE7SDP%2F9NSPUmYBXEFthQY%2BUlRrMz8e9G5w%2FJsUXTT6iRWYdGvflTTpvEK775DakshNvJTLQaqmvLsLZ8DSQaWdUqTVG7paIBpqqsuBZfWw47IJssWK5CRZr2plugdXqbTmFvEE%2BUFTHioJPamRSTlGrBdqmdSTDc1ofSBjqkAcu1Z6chH0hojhO0RWCMwG6JG7x3QeDVymbYxcUl7hqDFzjrsN1iOPtp3s9z4VVoqsQqClQE%2BlJZz8MxhCgv8crewX3n%2Bjwn2d7nQWmXLcnNXEeBCcEg7CfB3f%2Ftww0DzCMcvNaZs%2FuCtbfhqHGexok7Pnbhn9E5hUF7tBAS4kTmzv6XmG%2FAbtaLxfHBQZc83O8nJRCSP5nMPH625GeuQ3zRsHh8&X-Amz-Signature=ec9b774287d7c964030f95dd0b31905be69c90e6385531bb5cf0513b6c918f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=3c2c7549e4c093abe9eb3f6035f96115bd0c34587f4eb0a7f7a280e47944d53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3LVDH6%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1SPzAm97OBK0qax8U3Tzbc19cC4Ane3DivNH04G5CwAiEAzaMvCLOfULeOLCBhQMAc%2FnWXvylSDmTdPwmjkTmr6h0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxEO45kzzjd395waCrcA3Bhx1CgppbXomUjXGHTHJSaUICWZKnr6FrnyYQq8DfBKT3Gj8384qdJ3mLcddBv7xWoGYBEkwawrp7jmv0ZKRH3yd3iHJ2vJiEuqdAqvGt0NKhAGuF85VyNNzB5QlBvYdSWkd2XKHeFVbazIF1NrPVyoT4CuFRCGohL5iE1mCf6pMDt9v44m5bZvRvrMltIHX%2BYQkwVD3o2rkqZdTRR5YH7KAilNkTQFJltMXVjdmpNjpELMogqzHbTCM4z8R%2FDmFFDkLAtShWd0r1DWZxUv0aig2pnfA%2F84Sq6bW3k3Jc%2B%2FW%2F9aqQF8uYyzkNlrtVai8dvSD2bKM%2BAMkjs2aJFBjlE0sj1i%2BAKdOVllqgw0%2BlVYU75rP0o4A%2BEf1Jq9HG17PEFrs9b6EXmmnZXZ47pQuHYWvNZ%2BQcvvd5hTYlqAfVTsMilLaFrYPDhbceM7DrnniI7WRfp2ANCfXL5OvZms%2BsOi2EkjyqPAJOJMpZ2YyIu5YvWA46caNdCoSQ2p%2FXVCZtRKhzHAk%2B1U6CbpRgDJ0KJq9F%2FoGvZZMTYh1vZPeLDqUOCSCBQANJqcL85INg%2F2j%2Bzv5xF0Fsmg8yk8LbUxxeesTbmYcNFsz%2BNBDOxCrJFEwbuCe6VIn6e5tKHMIvXh9IGOqUBYeSRQZuJgHB2sqMwaLY3GKgSVzdlq2ePybCcT%2B6ZEw2eP73AfEPOxOLNfHHm%2FV3UN0ZYpN7zNc2HUfmjK6Olr%2FMlmbUeJaJDz9eph7339Vso%2FJfvCI8MG%2FqRstKB0y4LccG9QYxTiutwXJdxA66eKrjihagXl0Mr1lG1YUZ04eGDxfqixfgkm3m1et9Hd4HV4LNY5IbD7DPEcZeGLsCQo57ejkyR&X-Amz-Signature=3ffda2a7054db42699030d75cf5deaf502785766cb2aa615d7b46d5c67b59043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=9fd6705d11e46f623672664373d5071ae6725b3cc439da1d946740131787c3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQCUQ2WA%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhh5hsYCxN%2B9%2BhGKiYYP%2BDV2BK8DAeeo1DBCVj6A59hAiEAwTNhMskztaYlBvyInHtW%2BFUb1Lf5TJcQYm%2FiVwf3jt8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg3bsurkZiHfEuR1SrcA1DcJbwiytcRwmSGJ%2FTEvPjUd2sEdF8u3ACYdVrgB1l%2FQbGyHU5DWWgrSKlKJcHM4Qd8EjnGxwEugkUw78PhWbUOzQPuZWniQXfr7ctuMBYfejrxBVkaHZr2WodA%2F36q8pSB8GIIHXUC0hKp8UhbPdSAOMMon5ucraqV41z11b46InMkLVI8mquyHYIjX%2B6%2F3Y4ac%2Fc2bDIoRteHDwGGqG5rgdVhggyjbcRyY0gHqaZoob08EqGJ0%2FwybIbtKh8A%2B2nyAczojSsH1q8aGPnbbtrf8b%2BWTUABrdypjfDP34RkyufxAJh1StKQisA1eoIJyzDwsk33AKLy%2FmrLMS7AFkFjOP8zDGgt2J%2FYeIyUH9zOl8o1tWH5eKmy6ofGitbWTZveyyTAKcNip8V4FPqOfb9NZccaAQUFyfYNX0bVpLT3jufEO%2FxiNdG3QdANo1gEmAjMnNM%2BvXiyV2dQoxa%2B1HsljnmmSlQF%2FoGzcFVgCqwFVyLiz4hxIi3ojUB8DJSO6JgNhdhx3ssphneCaY3GRcXtsNVIOhTzRQygVRDAFPOuA%2F6AtxONTEteJkmBVbmPC3kFN2DCecZTwj70bQyEXXrvevko2RoCQlyYJBQtVTnBk0g%2FRG0tQvzZBOl3MNbVh9IGOqUBN4JPcNm6rzYwMec5PE2hHwFarIU%2FnWefWBOPhiMhW%2F2xaQW3FLgy9XSRl2V%2F8P4qR88Os1bahr54zcuKZCWVUqRQck5FSy%2FhQFpT8ITv%2FWQZqZK5EAynkmL5SaFrB6zC2C%2FLTxLMBE4vcMyz7Jdenj1I6xWotNDzzYbo0bqAWfOrhnyNCzTdv%2FeQO3cCKF2MJHPe79W8dGU1MOTwfstYyUec57hy&X-Amz-Signature=bd316681ddb5ec3149da3b9213609f43cbb324c8dd3a39ae0cfc9cfa7549b334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=90940deebf9f9204d8efcfca2eded026082ba8458dad42a93410ce174811879b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKWPENT%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf%2FUZao1SZNBQyLMP0A5LnTzDKWSV7imEc2oM7VMLPbAiEAoiujnKsfCPoFna6baAKfr%2FXbKZ%2BW6wy0Gk8nmKZISU0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf%2B3VIr6ixgz%2BOunCrcA%2B%2Bb3OD46O6v%2BGzVTih5etX3gYPqjR1fKSdzKhy1H1tptmw90GtyqwxTLhEE92ovyXZl8o052jBm02gND8mfdr%2FvK7h3LU05Cc9A5E1R0BbWNO9Bic3EiRpfFSTqabINML2DehHLV%2BtAjwThHevTkfTAizKkhHlDm5pdy6chHEWZBsIkte7bwQ%2FX7T%2BEYVRywnAPrT8ajB4qII8eDkTypxeWPMZcfATWX%2FCEAL3wlEgDsfRcIb9qFPXDLfYVvdo0Powk6IjCdmDGCnh8LWWY0vnKoP%2F%2BCZof3iuoD5m4VeeRoGeNi34I41F3YeLRffvFtYgvhDzqklBRatXZFNO%2F5Utbf5aPkwuiNC%2FYF%2Bjl31Ts1icr%2FxxwJ%2BdcEMK%2F4Mb8sey9wqeBqFo5N%2Bt674r4GqfJ308dkMZi9LdGIgRlTC%2Byfly3vEuO0%2BKWPdQuLfT3g3yuRuUa6NSE3MdLT3KsQ3GACVBdMZq63KRVpbdlp4q4OkpdM6NQXgG%2FFKLmvVKlN0EqD4aSJqR%2BlYgp8hMtvEntnVnG0Fs5rmYOt3PCQVDgAI1fVTJ2Y97XLJa7a3CR5hCtu88HhRnbX%2BkPq6RpaoTH6Y8DN5XT6w56WV%2BJKlxmKK3t9SQJ3%2B5DqGZnMOvVh9IGOqUBmL50gUaaDKZRn%2Fqaw59rBHnXnHq7oGvai%2BO1GAAfIrl3lp1ktyU5H2ri7ulAv8dCBTKAknmbz2%2FtHsaXsc3vu%2Fn1D%2BIHfFMv4lZqE9VkXnSbenyDAqNgChofnG%2BxGEKQ8O2WFPVSC8HizYgQjQXx%2FrSlY2uaVhZ5Riuh684hKEunaFOT3J9bd164hUSUkHIVPEIkgxI7d6S%2BONwhS%2Ft5BzdCrDNp&X-Amz-Signature=651edb25a91bb2f230a1b7b804ec27e08719147b400483eb5f9cdaf82c68ef5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTSW6X2T%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF7et1b4ywJBj8t4Z5JthCF7vCrwV8AN7mL16PPQ6PpAIgdYejZi1%2FaKpvTbnAkkiK5Si7Co6eEAMPYwIpCte287UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgiNF1OqqyxLWNKqyrcA%2FxkMTRh9osZRwZMzafSFFkTGKO0ZSPCG2DIZN8n9iPc80mU0Ln354K7l5yh6nuT8qS0wGmcp7Y%2B4Z96YRK%2FX%2B9HKZYCe7eZSn1Amyi6lNq0Z3ni%2BIBRJAxpEl1572HJPTQ%2BsJmKUm2synjvtCRnJ5n%2BYOpJGunHpt6tRwbT5Jd20pMkSD72Uy0VtMk6ueTeKoqwMv7ZFBWtCqLQi7q%2FaWB8VNLn5uoclXTQA2oJ%2FrrFsZ22FCqIXJ4Tv6vld8jZgbTlaTv1fwUFa4uCh45bAFJ8WYKwbQ%2F3VT%2F6h6BI8BSOUybpdjZWKYTSRtDXidWakEdqqk9CL48VyQ5rMdLi5KKUjyPqV30B8cO%2BiNgdTV0lT2XJKKXwvOKVfbogB%2BWmYpMD3eNaPIKmFqeJzgKyceB%2FV6wMhvQURX2wMU8EgyKZgX3%2B4F6wDGsirh0LmvhBbxld0LfOzLpuEHJSJ8LY0X8xXv9vG5IfKIPQlDWVKO44z5Z8CxWfHStxyq01AbxDfc5Ybi%2FC1GLyq8%2BcCpfLtBu9sGbLJOJJjZ8%2FDqciyh%2BHYPnFEW1xv5z%2F6Kl2VlMEYaPh3%2FAb3RW3pLaD%2FQ4vmZPUmwFIPUat1xqe71jcf%2BqfIEnLH41vZv6baUsxMN3Wh9IGOqUBZkI2nlKt8emTOiv6ANs66fEEvvvAJI6ZxrwTUohzePwfDSW%2Fe8xO%2B9y2McEKcD4iZy6SIEEvahxNF4CcdzVThKrguCszxQn0LF3T3wKtDYSdrZd4Fmd6jrmtwA9Z6rcwhuKOfW4gj1T4qnyPEuH4htV06hJaFFfVtte920BPEgb5at2VahMuReXcm2mfxOwxM9rvmbd4dQq%2Fd4LB4Sig6ptJsD0o&X-Amz-Signature=ad268cca84af59134dc86fd3adea805726a0eb30b0b1d78aee854ad1566aa165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGANB5E%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0qe5za5gYt7AUEq1JeHrgYxh3jhiIUJQmDHcxTD14yAiBeq0UfqJ5EqPbf1CgP4dklW1oVtDG%2FsiIWugiKZUoURSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wQ5ltCmRlGPTM2GKtwDR9LDAeYFil85lizskQxjIZHMgAy0MIiRCQo2V0K%2Be27Jw9v5T9CfZg9j%2B6oeXoNu%2B1zlq%2B3S%2B8fJRl5msOrPVP3fJvPbyf9rLVsSXBTkn1yGX1hcDqzAgQkHoWQZvGULjr8lmh%2FGMczozYmYYt5uxtDs%2FlDwLvP8IV61Zfi6aL2ao2yDCoQkxNbyihCs2yx%2B%2F6ru%2BXANVxxJ%2BxCFP7JMCD5fTXpts5%2B5gLKntK1R9z39yw%2FxcslBvB40viRtqBnUpACtl%2F5wHIM3x0qz1JnOJPxMt8roWwZt9X3RoiRs5mPttrSWez5hrDbyJSWnKOQOY5MqxdAzzmvWHwnTaKCj1WYCG4O%2Bn1J8t5Q3tkZTHzycOZL%2BtHGXvCFmzm9JpK7X%2FLwhrxLgrdhvG%2BNz%2FWRKv0CgiV5Rbnxk1Lktx74akf5ZDsxUiV0DSSKpPqwaagGFLoTr5yHAEIzo6OqolqdC9PaKegNXiFAk5y%2FRvFqCB8W3fGUg0rx4cVOqrFCxYNSgjTuDWr6VI2zHRXBgLsyyTgVTxjAU2zvoF09L6DD4Zlu9bVAoHtzSX7ZaCA3cbJbs3MNgGkEmwJ7OE6Emi1yEoO8aEf9sL2zYgGU1ITaWM5XnbQ5lMDdsf52mzHowvdiH0gY6pgEJY9DoaDpC9a6KCNGMDE%2FyrQebjzlE3ICLr1t5qp1J0nTr0ikVfsfYcI0lWN3DGdgxAtfR3lbJMKJYawF2TXnUKdM91gZsrnTYnUHoB46YG038DsPyRQcJ1cqe8PEvBPy8xw8Vn1mchPqS6V7yMEZJ1B5%2BCBXcxzfpFqUTApYXdCaJTLSLgPgVUEB9vlwE4SgDJF%2B5Tz5g6heW7Ikw90NnGdL72woU&X-Amz-Signature=34736834241901a713785cac513a8570196dbc077b2681da9513ea0efa22b07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=5c6028b194e403da3abc922c6884c88cccb14312b7d211d4a346660b5285bbfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUIHZLB%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLNzjs9j5KoKolmR%2F24nbqo3djDncC%2F8UxDyVnMeLDYAiAeJDnUzT9wkenEg2nzFMf9YO8pc6eTVHOQWMqtOJhbeyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIogFblL4BHCKxp3KtwD44uFsISij2W%2BFktmdntoWTrm4m3JbavKjJKCp6eMPNsrTgr%2F%2BJopUd94xnc0DJDX8KK8xh5IXaEQB0WRbTFHNtsr6l7NxHoqo0QlJ8%2FVzTjJc24LS%2FpHG0RzSC%2FdE5tNowf7PnsK0vdHLo2%2Bk8l9PpNYDETCARDMS%2BFNJttq2tms0aC9c1HPn6j6VcqE1B%2FuNK0%2BJEFqnFEerpqaR0xJXqtde9FNUzv9hYOhf5KSRr%2FGTjvLtFJ2gy5KDqM56hIUFViVPZVJORHFwKPSgkz6iFIxd7WfDLdsCaoakC3vDFRRcMGXXStA9mB6fAwFJsEaJls5936kzf9fBXwyeTgPwjKz1iVDdLUqB%2FoiATFxizDtyYj0ZV0PDfOxqo9ucT%2BMtzeH%2F5yGMY3BLRFVABaGLGAHgg03PClwjmA%2FszOtfFwE2k6vvGLxz%2BGmQUjSQ3BtdjinlHPGK7IQShq8EUHM%2B1YmGuVT5Yu%2BbkyUBNBZLWHI88817akEYOK9kTAsK%2Fcu%2BzgJsYM1anQ9XfI7IZqHTGmPlzyvOzPEU80a2Jcm2bOBQLqmL4DuXGCO%2FgWFYUZMZq%2BQ4EVJpPvkceWNEPGO8e2qaM%2F%2B0OZn60duIlfdMFl1UdUcwEbKpDAwLA4wqtiH0gY6pgGbPI9P5Gc23GcKI69XathcFwh6GzHeWMsgN2i4R2l5JH89iLpY37RpbI0Nc6NMjqn95NAFCd3J9qqMKppL%2BWnWnlIFxMKY8TM%2FG14750En5%2FMy0fWSz8GEKjiq%2BiBxF0Phu48h%2FamW3WPmztMsjnibbBVrk4aaa8%2BqDpLnIty1qBpd5ouB8Cj0nlCQB5YLrw5UMd7XujBaHKhuDjmB4fSXMN4r0xL3&X-Amz-Signature=571c120e015556792aa8d1f696295975ddf3b23cd2c1b721c27ff14b2c002656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=35e122c0c392efa598b444496a53c78cbc35a58c4229dfef0df445bdb01ce535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=454a459f2a44b40e7c4cb18923bd95e67ac22f903ec7bb3d251ffda239314ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=03340a68c92110cf38925735c097d2e9c2ecbc4fad7e0edaba0e8276b407c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=1cb7652a70af6c201e83d687fd197eb5d591eaf01714ac233bf476817d2938be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZAZXWS%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUn1S08wYcIO25w3Puz5VKyjkt%2BOKDPvs6c37VDgmo4wIhAMhoq1O2BqNBdUyBSF%2Bs7k1%2Fu5ex4ESUPewr1Rnv%2BqD2KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0cvhsEcfuhckXP%2Fgq3AM%2FqauuQ9OdE7cPlExFmZxvTIWZEXTKArVcH1VZr40r18%2B0sI9PuH2Taf3%2FtV1wRlqCC%2BXpRz6rRtoI2VOSEFLsv31EgV9Lr2MTFpbE26nNRBqftFEj94V%2FwOX%2BdVqlOfv8DvWVaQZjbJC95Sq5xTvvUe2tsNp%2Fh0RbJcHYyQYlcq7lDahSeXzG04ZOzD8UeReX4ayhsB9tff0FrHiWCH18PaOMSw1B5fky5T23xrQ4V9v3VKLPHeQ1C7%2B%2Fod1M1UA6GqdtSYtH5FWF5%2Bt30hEnQU1i3xc1ctswEO6vF2haLCZrqt4HT0mN1WJcu4In3H1ibHuO60QAzebQYGi%2Fy%2FWm1IDjXdhAzGzDcXmYxRfbsMjsA2q66dlZBoNESc20R2Mi9d7LiE7AP8M4Mcmm7y%2F61HdNB4UIUhuLDLPth5H%2FviHTxcGtEUK4y4W%2BT%2BW8SmWb5tdLwj3gB9hARBp3Y%2BKoHTyW7tXm4Njv%2BgJiUlIwkvpGiHEFFL3Df5hrnNCyKwtjJakTOwia%2F%2FgFC3uvMVi870%2BLL7qGk8LtDIX8s5yKPaOwxlPdMUc0LZWiXb%2Bq964mKmHaFUmWhH7dHXeqiafUJEl1W5bpIYgBraWNm45OwcrQwmDcI8AqFeVVZjCn1ofSBjqkAbqy67gBktvfwid6MvV%2FoG42I0weV33ykA9pL1uviMH8wvw7lO3lwTV0ZGuetV1wvmX7CuV21Jd74YoCd%2F1kfi3WTT6JoCqMc1QMn2%2F%2BuJEm3FRsrYV7qAz1dPfUsj%2B3R7vbKFsQl49bF42688u%2BItJ%2F7d13EdcIm6LW84lhXbqiW%2FIKUCpqTU1ros0TKAEHUnTB4SS40O6xtPcEOf1PPFOd0r6c&X-Amz-Signature=0c91049cca051ddabe814b75567f5d8d5583fbeec41e615829e5e8f49a006946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=85686e328910c13ab80c0e595d90bc5087fb5a23b18e517e3bd97a2cfea6529c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=99b0dd47ca01b56b378c3a680739efd89362eeb44698a5f6d38e483ff3e3cb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=655a980c9d736c7d402dc5ddce09490c8ae147ed84927ef6cba0127429befe42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=20926bc23fc58c4e169e5fa3aa73e93cbb079df00ea0e546282b42e4793f572c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=0697ca7fc96e735960afabee1b6250336db1e1b5db010a1c790d8157cc07d7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY573OY%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVB8Qq4mRqcAmkhE4mZi1dhC%2BGPjiDjhzJ8n6jjkpCmAiEAsVqdTPZ77AcskW1L205Y47TXX%2BunNbwfEcxQJZ2BYvwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD0TD4mSZfXcdEA8CrcA6kChFAwjiYaoZMrOHYV%2BsjQ9LBNffXu6ljJ52Tdj7FqKAeRO6yflkjn7bUDipsx1nQjg1YWunj4Jp%2BMpypfrigU6JH8OOKJgfBZIr5RILpPSLZPt3GOMQjDJszFa3gGJvi6BxhJVu7tf34%2BD1mD24HU5vNgRBZhv8RBkCwVo8UHJjM87fLn%2BaCnhQYbf1sDZKCXYxCLN%2FCAXqdRcQgQcWvD2%2F%2BA650tC3EA%2Ba6FQj9g7b6thtZ%2FJnKXM%2B4GBIMmAYt5wD5yMpy%2BRvfm2pySlmaF54bGMN%2FeGyeJSce6euZuwfj1MjLUoJ%2BOcu7CQNGNbDeJJ5u6vmDag34cRh0VDQxz9tlP7BH4Vxx5F8NC84wNcFUb4oCMTt8hdVUjwXTWlNyXczy7ZFleEH2Xq1XMtV%2Fgl0PirEwtOsrjItxuVQbvUP1GSG4fR2Ps3E5gIYaKCtfHX%2BqMPLpZQGy6tH2uBdYvXYLX1jdCU4uNJWWpm%2FqYSWpRGzht7nZ2ZgAFwYDclWQfvXM4SfPw63rdZ1vhBNBxWbwZcbzl4pOBoBR7HNsKirg8A2%2F1sBAh83ZML9SrCa7FMeKPu3iqOqnUN5FbsrZhcvgKcIa2RcqasT7uDItjkl1eQaUnkOs4gMrNMMzVh9IGOqUBTqa7Llp%2FX2%2BKYkzDOea69JZHAraA7fAXMdNATnKXbPODQ1cqn39NtrQG7EMZT5HL3P63EIVCLhpcmzO%2FG2C5vz8PiW8yS%2FrmddpB2TrUipXHlhSUDZ91kXmvgosO9Opy5aj82DgrKNd%2BDdRz5ZOjn%2FQyywEdd4zRiGaIqN%2F4R08nAYUm6ir46LoMlZKh38veBu9IV8%2FsvWrKmnL9NbXi5wKrQ%2BgF&X-Amz-Signature=21148b2e6d41857cc7d67b647bf6262c53e23772fb2d12ce63b692a246d8ab33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


