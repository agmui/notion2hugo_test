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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=6eece7a29479732beb1d7bbdeef6cb55652fec7da9dd8d9ab3c2e5b6e5d5fa24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=d9e0a5cced32f6da482eff74d0eb8c186abc4f46e495dfdf06ba2a78c3191e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=f4408a8ee2aa6df87e1278af93c2206bd16c055d15288879505110dad851b819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=e2d29e5701d2ac349352bb65dfc8ebfbefcde00c9a8f06b54efc033409db5ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=c32b922d5a970ea7eab6597ce0ca9ff985d6f00b87e41b4a017f21fad46ecaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=42f1824d0b9dc6c057ef8a3ec7bdd75c312a062205f898980de8d1ac250c426b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=76ead5e5c432af52e0765ffc1b9c68de91895b77c69874d4e2f8d2954412aa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=49156053638a43db7fc6289f1486764938a2d8b2f71cae1fbec157e469741c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=a123e9012a6e053e7e46557373d7819191043c3f679963825d51356a998bd8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=c6f181e0f96d72e161956d6af503bfe011c1ebcbdcd678e2dc5ca183fe95b67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKS7GTJI%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0guHaTQsac5tDTnLUC4V3EYWDYfQ%2BX0fj%2BsBjKa2s3AIhANIHVdh78vgxXUSf4hq2gDcI6qZ8UQHvFBWYs3PXFCXGKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOyJ3%2BRh3rAZ%2F%2BZ6Aq3AM3yfRIKK5x%2BN9vZsLgG%2F%2BBOi6OrHPzc3TAuNu7ntqH1QKi0OirGUsA6TgAfsvJnYWN0aXp2lrUoqO%2FXElokgRL%2Bq9gbvT8GZzhpvQSU7wwwuWDXQkYJfYmxWMozC4BysNfaX7a57urdHrJC8V%2F54Om5z%2F2uUSdFb8Ja0DZZzGOW2xoCbC3abPJQDhcS5WW3%2FFt8sahNKkax7HNeJ%2B1bnMGABQK9Js9CXP3n%2FsY0rUCxEQmd4LdP3660UEVWom4RL2kDoz%2FwhF92aMFOBQaiprbQCu5yRbvavaYbpy88WffTEX%2BrCM4zbg0xJg6Ca1Cmp427nUlFBF32lMmrED7bZVB%2FNpVThH99qdijQPyR%2FCIW62KOUsE7eHIr28cu4I6s8Zl6W%2BmBIYrT465UYhzXITe5jXPFuYB9eIWZ%2FLMZvRjQudi94G3krVbGycisXR%2B4LWLtH9BMhCn5Q7oyf24a3lSyZCNuiPpm34HQI4K5%2FiwgRGcdGIfuiEvfwemFVinLKNoV8O9g8MG%2BCEmfS2cU7GbQwxDyPISPv2YPdcPeI8ggnrHWa4Dv6lkSzJzRtp7P66NrTJ40CyEmr6UqTt7ysAtjXU%2Fq5AiumVsmezrfuC8eU%2FEuqjxvA3zuzPRHzDU%2BovLBjqkAepL6S9aokoz7f07eP%2BjX%2FfdNUcKnwSAMxxPCEfPLa1IB6C3r8M4DccfuCi6gi22dZQUVG3zpqYVA7o3rUzEiMRJIbrwF6X8GKvYrQq6n71TO70djqumv9IyC%2F7gl1Y4Boq1qplcQ5qflfttQCf6vsruHT9Y84fhgtSRu%2FtI21ViiFWe4kco2OBVjMBbYvo1SL17yGhCrqdD6mYukrRzZtHCRr3A&X-Amz-Signature=6b2d76b8d58bebc8dff4d76e07db7cc75f78359b84c801f2baa2a7cd1a259ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662SQT2O2%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD4aS5DQqrtNt4ZcjYDVeR9crm7RPXSSoZOwdvyS3ehogIhAMKYZ4NnURLaI9%2BiTTKqtPbYM%2BsKft%2FvKJs3%2FhgnTwXTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMkvjX3REquqCV5M0q3AMA2%2BCvb8IEU8hUzkXipbL1XkixJvjJvawEpYIEW%2F20%2F6TYMBnN2oWoPdkRLRbddGCldCgy28%2BlwV3vcOmBvwdalgZW7Wule6wAi20totFCwiGM3Jott9P63TUC%2BNrCC6W7%2BXPl3U%2FmXCuaBIwKsNA2LVbwE1rAw3w0EgeOEP9%2BczmACd7133s4HuIFaOH7HFslODq7ksd1Ogkar4zmlVjnCLUtLVQE72%2B3iubU7aAgDrGKBNYivXVxen4qUlyoxFWcbIkTZ5zmeVGcVAmS26o8soEP1T3sABLpGGqnMxs7cy16UHb0kNmvraEBjT7gyr8WZFgzeP7RCLGxoqlpuMz4Y1YIaAkCrhQwTedYBI5ZF2mAx5CXsRKq4mMFq5%2FJjt1lSzAts7L%2Bzpua2mOKG5J97YEAaM%2BzTeXU5zD3WTvCznKGBOrzP7uWBtahj%2F3EpklASYQKARdOItUNp0d6HRaYEiOGkiX8ar5ygg5ox76ELzpvj8EVbjqgl3UGwocgif3K9psU19aRMIhVoEBoeP5feKbuMvZjJhJH2KE1PAeLFpLTxI1%2FJDpTnE5vIq1a24EyTbXJdyLj1fZgqhsONV9G9kty6oV4%2FTZVFvoRx%2FL1995kZWa96siqxslbzDDa%2FIvLBjqkAb6DF5ESyzZVA6Ja0zoVY2FwUkwEgCSQ%2FYNAHsz34zC3g4rBfaHYHbBmGBxOu6z7NeOdpEqHGUL2C7w5dmPxVnetGgorVPUknZrA%2BAxk1H%2FFeH%2FjeP22kPmF1slpZOgiUPAktN%2BX291LYcanS2YrrLmNOYbMJCataMKO7DoLB1eUmgvYctYcbVzwE9r2WGon%2BMvDqJ7T%2Bjl3J1jKbtQ0ocMNd0q6&X-Amz-Signature=53737a1bd235091fd2770f95d8a1c520ac97c98676984ee6b1cb8974bf96dbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSZJKBF%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEuX67IovcKOXqnfTy%2BoU2fqima5DL37cLioH%2FRAws3KAiEArS4Nd66ieYPDZ8%2B4whSZ0mmmGIL2SoLNQCwBo3cm%2F%2BkqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh8ZGwudGZWf3%2Bs%2BCrcA60LOY0%2Fu7S%2Fbm2IIwkUX%2FoNZHD1XuDEypsI3MH3e2dcu1Vdekjsp00emkuL%2B8O1jPjqyIIaerOuICjsBo2rm54tEITcA5SzvqpvCyErj0cbtkvrWPqDJXNcTqhX%2F82kBs4MKtE7MHKOGkuZvYaKcs9dqwfPcQ4B8f48vg%2BGD5KN%2B5mdaUdCe8np18%2FuHxNEs8LaZGOetS%2BXwdgK5FyIEyDWyFCaTC7H1z2eeY2H%2BeukFkOv5fbsLNK7pVQeMYglo6%2FmwCUIc1hbDci7%2FlCUP4WItlWdn9B%2FSAzrgiX5R8K0UL5Qf2eS7J6VP%2FnO6EhekYKUVShE0PYINatA9iuIIxkGrBUPinNjOuX%2B2id7vU8rep8VtSGwceWcToP1sgtVtc25yhXXPTOm3vfFMG0hzS6Vtg0zLilKyU1gSJSyN7z4vFBK%2BHDJryBifgpp0kn3L5uDamKkNpM6q068%2Fv%2FTSYaizdB3aEMshxBdORqtqUQWsPXQ7xMa3geTuAmKL8lwu6nNxK%2FiIeVeQQw67N3KtrkGu6TZxKqAl%2BdO1uqQO%2F%2BE4I%2FkI19R8L34uHv9ZM44OGTGHA%2BmoLiCh1eHm2VYo0224%2F3okqsIslYpFx5KmrUy1bodUnwj7qfdlUxeMPWAjMsGOqUB96zmDqwnvusopbrAfYxhLG%2BrZmCcPVVKQtHEyoEo8JO%2FSQJUUajzzfzUm08OBP6P0wnDj1Pzu22DNh4c5kgIHFXjhY0wViyp42WvufHPiCnWrkQARsstRCE2pp5T%2FeViO29nIAAre%2FjS9vkjiW4S8ZnPYw2El3mFAM5SkSaULP%2FJQGIEyUAs%2FOFB%2FZbU7g5BSjDqrpf1YuwILSnrhbFiq%2BZN3zrY&X-Amz-Signature=37aec41b9ba56023cc7f3165668ebc9f9a9b19d63e9586488baa0b2ef2cae70d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=677854d71394db023579cce7c2dc32dbdcbdd521ded5c4cb073349a061f8fd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3EZPNR%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAvI4gBptUF0SmGNhDGKeRyL0zQDe2LTkFhgUAAAG0xIAiEAgIdzl%2B2kKinn%2BuIpX9iGXvAQhrhRuCRs13ZE2zNBTxcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcZmL15nFn%2BdLfK2SrcAy6f4s%2BCdnDBYXlDYIyXba4wiPv9dKFh2Sk%2BonLl3YrYXahWBa%2Ffdi1%2BY5apgB%2Fsm1IFYvdkm9mJnQ5IyYUYZJURYQYqjClOwI2C5DUdP6Tg%2B4UvdaV3%2FO4SEehW2xUBOSXyiiJOnQBxuDAYmY2hQupBJYWaEwKME%2BGmnt774ACS6YZYtVxUrQA43GfsR7tt1OPTuRPk7mwN1H1X7d%2FcEXcGHK11u50qL5JxcQDpwPpL6Oka04aCPlDyl4Ipk9iSneCopVuUh53J9HeI2PiNRQWQPAst4wimtw%2Bxmlje8iPzp9qWhTGBDI9z05gUtd6pnvFjZFUSedbexyS7IH1AhwZCcXz%2FrR%2Fmp86k1Tb%2BiPGLX0K5lBBMExP9%2BUx%2B2qdELE7d9YTXIAskUc9c2QMS9tUeqwC6xbHmVt1tNZeUoATdjw3JCnTeQxtxBZGtpV9RoJAnOzPLqCHi3mYr7UuzHsTFhTr5RWB9G8ENIpDqjEt157n38TVgTDz5eM1id5Z8v4OwBeCZbG9I1kt0nKvZknlr7xAOlSBkl0XSaSFJzXfdB%2BsdH5rKJ5yi8WyvfNR5ECZj46f%2FXhshM2F1xu0HFF2ne67u0c1Bi9NKtJ0CYh31uh7hxaGjsiNUs7AsMO%2BAjMsGOqUBIQRur5%2B1M75eIvhvgXOmd4E9ZyF3tOaUQchx06nQlmGEcyvLR20T7Crryow8iqNGkvVTKWwRh%2B4imdzUemAGtyxH9MKNtE3YNiJTNtfG5b%2BhitQRUj29YUi1OMFhQQ%2BQl7p5TroZ2uK8xPt9xTKrKq%2BcDGxJ9zyTce2w9%2BLKjVjVBC9A1lUyax0LnyaGc%2FDdlmerKSKIyb85V9oZGNIcqEIDJFpw&X-Amz-Signature=05d90addcbd90586979eaad23111339373914cf057c56f86e1fa3a4abd15f013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=49570c859ac8d6e129d3449d737aa22cb287ed8ccd7d074248b79316052db28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HIQRJ2%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIE2Rlt%2B9xGsfP%2BTlwgXJ9XQSPCb%2B09x7JxN2PBF2nKsoAiAMAwKmrpW%2FOHXsZVSI%2B58CAt%2FwjUNkJl7nIqDaX94OsSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMibgKhpA1wdaOJ0icKtwDTEWqkCx4l3y4wQz6pokuZlmwiwBwxEQcxPBoB8ujjDqQsegYVEyRF5UfxxjvxZ%2FnAtTYacVc96LeB8TuD92yXK2kf0rFpJMisyflQkRd%2FoOGOizSBBl0PdnwoHiB0z0jkG49eXk0WgTRAzD8M%2BnNNToLURgYey4C0c%2B7HyclGEFmcjARIuiS2tkdA5janyK5MVOZsYm7YftpC9uWxFuAMOFukFUHT6wzOtKM8XPnXWL413gQgTM33htDSf%2FuiiGXl9xpsjRFwFtOQzmVeK1a%2FliH%2FJ6cKKuSuyYes%2B5o18AI6zo0WYVOHDFjeSkbindSz6lIp9NNHBbSQkX5z0cs96r8UBsRaJOagGsQt8sxaIxivGBzdAaV71C5oip7c4DGNXgZCmkdztRB%2BYJEad5RVNuuAkHRH3Hzab6yFyEbLKbf%2BxP69B%2BsknFphsI6FTmblRm1NiCtVBXAsfi61%2FrDTA2B4iviqaQQ2V11Oj7NDdXx2O%2FcrduwWEt%2FY4DPZ5jrUaN92XexaV3mYl4%2Fl3ULujf6Qb8TW20MVk3P%2Bt1fzBx4ZFR080GJqgZkuthlUTDm6R%2Bvzz9KPylflToWIz6g9LNqKHl903NDE6U9l3YkFqD%2Fpq6g1Qhcig%2B%2Flk4w4veLywY6pgEKxd7JVVgO0b3MEULn4WYdGrpKJwDmGH7re71h%2B%2F7ZJSiArADr8pdR9UL1ftDp0%2FhZyrJ0U%2B%2Fwoij6DrXa%2B17K%2FVm5Z6kXNOBBOg9SNXw4QvwOofUVQtoanfJO%2FRAVp9SAEZEZDlouaVbOgw2evg%2FIz9seyo62Yi7TOFYUXs76pXiSZm1WjpPHF472%2Bwxk7B6n5egYgzp9Lnxxth4ikHRqqs9eMPmh&X-Amz-Signature=e0c10fc8c6095265770e64582f079a3512cb75a763bacaf011a48112e4a0f323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=53c4d78a5e59a4d21de3355deddcade07cefdbb73dcd46c1d6345df080862750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4P2PIFZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDw%2FB7M9FFLAHexcBWcXr%2BD%2BcbH7o1SmsYgMQdMoOCuZQIgQr7F1jT5cAj3z3ZzFE3RT7MhQRO2l3fTcPER%2FdvSanEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHo4gk8fNDK01Q%2BELyrcA7Pecnme9AuvKrUs3ovCgyCdR82wJ1RJwa0Ys09ahqJ6bJEb0FOxIZ7B%2FlseN%2FgoELMXKuGyLASAVda9kKVP68RZ9%2Bg5vAP7i4SySqpAJAGUNKp0R4sRV01%2F6avqDml8PGssk58308Yg2COsAG5IyiCrrbFK61qGejhXa0ahlMf1DUxn5ENwXumGC%2BCOyAFarU73JiaSxN%2BOHp072a4ttdaqjNIMFAHl8Cm95L84rzcBQYR7f1aVXmx5CPdXofW042mN9TGBhRoW3zyD39lcMCwyUZzTXi%2BLNzIuAC5BhFer8Vu6D616q%2BbfWCDzVYEKTXHikrTKx0%2FsSptR5ePQXeou3Vhycm0qJ2Axyi0Z6JPv95o7uB1gWibummLuNyNLA%2Ff57UySYkcoy4k9u7r9QAD%2BoHVVdB08gQc0QNVEUgomty%2Faxy6xrTRUc0dwYWs6c%2FWI4%2BMpwv8gqwmA1S1A9%2F%2BWQxIZQ0L7XIPYKCcruc2a1ATwmATMEaDX7cKYwyytz8QEI1g%2FFSn1p%2FUW6R4QaliBDKsvdFgMrAyuNpgFWJSrFq8eEWIGLNQH5Uk%2B1ES2wHCTNr%2BrTQAjGdCmB846D7lPPhCRB8X%2B8ubYhPyZiyAq%2FT9RGLkaz5CV7BneMOGBjMsGOqUBoQGc2SEixnDE9HC0nFeJBJ37fS7bW5JIMDsnfGyAjUdzoNdSwaeKOWMgdFA9RP8CmXn1AK6lm0LdKq06WtNyZ4PBHY6mmqmBQFUfwHSnWNpFjsxskEC8ljVqDLtWUxifB%2B8az58MyszKk8OJ%2Bdg%2BEHMkHNFIDbrxtqwSgqozAGKC6dBYoTVP%2BWfrbxnBqY1Owq1BB%2FR5TUiowGNE%2FT%2FWxzw49G1o&X-Amz-Signature=9c07109e528a0de77c1632a7a9a8bad94a6bb6272e82509e6593a2a63db083e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=e8ea6e2247bea12287314f05b954ce80f5d7ef53e40b120eeba4aae90a988d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VYF6BF%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGn75VpKRu08WEbgazgPpocSCilf5WdZrvrNipqHkbQDAiEAucl6MI7eKqZjzohfjfPzWBo0yFODI6IAzJEtmkELqxwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FZv32eBMRvT15woyrcA525azEUvenWxeLrat6A0t4IWCVZPNZZhCLeVqT5QwyJMdxNtLc8FzMXKf0D9pVO4%2FF900Ywm5Tj2T9dXAHQmR%2FZoOq4gcpqyis8CZqYRYAA37qvafiCmWzDR01qfx6eOmQoX4JJR9euCWBfQg6pfmK3oLMSdCadRO6qlus47Danpz9C2w7Fn3xpNVSFT%2BaQeOQFk3qg4HjboHhxyQdxQ5rIpSz86ueeH7hanHYPIKrC0KEeVL0OD5nzM7KUWtUcHrYMOP%2FAH1TIBZEtspcxOR6AGnwxcJsmIlOUPkGcKdTqKXi%2FUl2Egf15K4om1HZIIn6SudI5ZAgiPjZGdFkz%2F5WChlCoo4tv5DR%2Fab2l%2F92uW40dgoQS%2B%2FUnkrn6me%2BzmBE9q3NunGaEdEQ4XFcC%2BeFaPPhBxu8%2F9kzQks6UsGpr04gb31NJQ27oec08HP3m1sWxa12rKy3cOmXNtXCr6DpS%2BYToj8gbRsmbAAF19FBTc%2FxUavDxKuMDPOr657iFs9b9x1IqQ6JB5rcCfR0yAzL3p%2BMZzF8EV2jfgOINn6Dh9riQ4T9%2FAECIAMF7%2BRsnVvcX2IogEvsoqCYfDdKqRrDS9mGuJYTTXX7DZS%2Bxl5abpXYoyCaP641joDdcMLKDjMsGOqUB%2FSPU3HNtN%2Bp5H%2Fp8Uy5PLw3ckeJI2adv42qdUEnzfEzCkLJfvVz1UHrUcbi3KKpsYbp1ViXcXDsNZEOBB12FGyHwyLELPPh0mvT5Kj2w996Xh5BY4PuUUXl1CTrjOkArkj5jSEoJPpkBzZ37dsrsZDv3wFFB9KeuebsVSK9DdG08rUmkd8cIU3euIoZgEBU5nuEhTZGvzy%2B4vXQfv3aMrJ%2Bw2UMe&X-Amz-Signature=f8d2c22795d34430e1dc143838c4211b8763cebd01ef4afd62cd49d771af82b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=b40f19fef95a5c415933e3344a7c4fc85cbf9e3dd19428af4027876e1bb53336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJWV6CJ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDHztJNfRjjGwOFz56Te2sEDuyXNIeeml19ci7wOjpRrQIhAJ5Kk79yPNlD7YWwXX1as%2Bk3FfAIJCO1vhPp9x291vY3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7VOMDXS0HTnrRxEMq3AO%2FQ5IngN85FFslW2p2dCYLk7ughaMAdQ2fkFTIa%2BDC9wqrn2AzSCek%2FffT4FvkjyMttkjGJ3zLJ92yqu6YhtvfPH6QhmiGOZJ%2BKG4b5xixc0AFxlD4HQEFj5ahHHKtryRU3Utd16ouG0XfEau3wubJUdE4IsHB23CzI4ugtmwlooIrcz0DH%2B%2FzMQTjfFO%2FJvCwEozL1r1%2FKojJqqmIL1HQO5EXB7mTQvGoSdjDzwhakPKmjpmRpl6RkutIy%2FU1v0uRD32lzLmZxQUN8WSinMeapwVUTGW7ergoqs8%2Bj0FdGKV92GSeKFaesjO9MDBiIlwKTMpmBlaN9vPNHI2557ij4eDpGqLvG4isTpdrPE46fxR7ST3YF20S8FcuelPEs2TsZOfAfxuE90uKXvJAfF2lClTlzVAWPQXsYKcDdUSIvOpzXJShq968xMllKNkBuuVqQ5DFd9XTSD3%2FOBLFIm6pqp4z9saleLs%2Bg52v9BrlSIZcOdhSeYLd%2BoXBbMw6XCd%2BVMIG5dkz7N3qHky4WXsuTnsHUTeilMmelbTABhz4ddYBvL1QWucCVUbCN6ymYId8J%2FQUSLh9xwlOLSPg4BY%2FBcP5zhSzQeDaXhFhYrRPK6lwV%2BjNFIo4AQhT5zCMgYzLBjqkAb2WDhBKpccQFqVttuMzjwxBgD6lVk2DeedBuOX%2BKLJUgd%2FC0hWNURHjD3mUlXNnF0XARPeCH%2F9mBma0Bnn%2FTB%2BvrK5TpQKosqDnjvHXKeWSdz8hi0fzVHACYFet82mLDgYYN5ze84Vp3orA56wtNsMSH0cKg2q0x3T7z3ldr%2BQRySqSKZPZNLAqtYRwQfP5dqfrxbpC70Mni7sd78POKdmyf4jQ&X-Amz-Signature=fca0c1be6813dd907d2b33ec588f1b61f800b3769e610ee7551c0a33e34ca2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR3VBGRD%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDaRhZxKy8%2BU8C7wlxP9gmMAg2e2vQ2ZISybD8o7GyY1gIgEH7aDrIOMoDgP6LklcZe2hlNB3%2BVg%2BNRU68f%2FGA9xdUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLVGLSg%2B1%2F7HDVFcircA4FcU%2FlDrs%2FT9QMSQtw7YUNK2JQjzrY%2FKoLqTTvMhInzMaaxZBKBC8fYFGy6w07pJ0FmIUBlrSO522z6UQygV2%2Bu9nQ5JK2hXyjkTOeCTnwnE4d27Ixu34ycbv4A%2FKfQXfd1uc56y3Nq172lz10LJdI%2FQVAzwP1a1bNL9UekQWtnxXw6AhfOQC6r9cw8h45o0Kx3eWW%2BL6vHPTtK%2B52rpQfJC%2BemZLkFmFfMBkqDgqZVEy0VBw10unPvtXWIgdRHcy3GQ%2FmRE3%2B%2FRKrSKTHTf2gLpOQT6zzkhDjrmZuqzwOfYgGlAgybz85GjHQO6CUbOknJA62jHT0BG%2BBieu9KPLs4fU1eD1Wo0bCg7VDZH0t1GCxGilUzUDShL7sFxn0Wd%2BSnI0BSjWBlyHEHJIirCcMPZbLa1hVq2ln1GCj2Fjd7zSuwFTXcZGbXIb5rmjouvfFF9J%2BNXJc8gX1OsN2VBANKYDmwIyZnETNod8QVEzZULkFJ9Qkec2v%2BXP0zhgCAXEanSe4nllBiM51epV8ETF9Ram1nOP4gSafyeUAH87IPVd5UZ6qi68nmMhqWdpYaErjml569Ou2mnbl1j87qdmEwPa%2FiY97VXFfKoN0Ci2jfTtioAOZwZ1VwgmrkMImDjMsGOqUBPU59SfrCYOm1O%2Bg81bryOi3R5JhTGM7sHflcuyMp4ZGdr9h7ZZ6WnCv1H0Iid5vt9WSbad6KR3iIeBjUHmUGknq%2BQlZo9Po4pdK1GgZ8ZHuCNVRRM6N9O6EgQLL1u9ZjS9ODlRQbZ4Qgbx8fpW5C%2Fw9brzHGc%2BFBf2pGz4rby4l86h0UXDQIMWS7Y%2Bo0OuEKAYCsdyk%2B7MBLbPlfln8acxocrR8t&X-Amz-Signature=08ee08c7f336f719f21cc75ab76bb486e16a55beba6d4f3102d2452360589c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAA2CUE%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDEPkw9YU5kNHTWbUgd5OIMBWkvgp1peBCMsOu4ETGyWAIhALKyIwdkkJSavVxwhogba%2BiOXOirAH7OLwLYfH97zawBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FcRP%2Fxx9aY0J55%2FEq3AME6IhZdLo3O4LT0i2bWGUR5M1CDarcOgoKpHuWJP0rpR8YPKewXik2Rgj9G29fQ3xxqCYgolfWTfjO4JXFEAFaNWtndbA41FJByGBHt%2F%2Bn4%2FgMwqB743OqpYhgx08DSonF%2FMOhARN0QD8IEDaZ7pPmXlkiGfTsk7gL2i9JSgNCP2x3kO93sFBbyyNrTGTB1j%2FXXilu%2Fs7Fk4bCRbpSJnrKyjxQaSqqWi0drXInbAe%2FLPB4ADvmYL%2FjBjEg%2FYn6oAeQiPrTXFOgF5zFZI7FKfJt3AAsV5%2BPPdTGBnE7kjCV0Eic0Hv0kaTf8m203ElDh7KUxji5YnJ%2BTqbAJXrh8Q2M%2BUs5jP60Sq6lp06JtVkdo3%2FFxoGauQTDhIMa4p8vYyxGJInAy6ayaMBmxChpdhPlNwtDQkMhwWPWE6V57xx2e7ATm6s6cvmd9S4z2b49W50iXEwnwUP%2B3OskO6DFUKc2eCNEPgJcIhYYxZ52pkVDVxJQ4CouD7gmxmod4QLIbHAZp%2BguvSzeI2C97VGdY7DHMYE2DzqeMkhnORn63HyKMbn7KJ8SgsDXidqNdN%2BfhOFz2Pd8A4vIDrNulH%2B1t6sAbWYXCVUZZnHb0igxynmtJrRh%2FbGALYIvy9gpFzCthIzLBjqkATSMGPmd8g3ok1IalMweRTyOBO%2BDgUkcY8gJ6v5xQ3SGeIq7TUhTXuOkjgItEUM1ZLh%2FW4yaHEQiEih6vLrq0ht9zUcT7FPwYamBDZm8cP19SUXKdIo4o2Q9N3UwUR8HeYYSonAgXcPLn%2BgcB5v45eywaZuUdYbTQPUw3WiMKmzjIEZ8v1Q9gsw%2FbaHFRXBSZwWwB%2Fz%2FVddzhejAXQct7aVSyvZH&X-Amz-Signature=dd69e9ef99e0c1fd2b52984043b08ce05ba86381ad6aae3b240c07c613594607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=cb82bd176f50c1810278c7afbe54ead521d499fe5718e14520af43c14692ba54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRN7VTNH%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBGMnPzmcaOtNOiy9oyBR4N0u1JiZm0My63LIZmljW6TAiEAvNe7k4CtFrt%2FtxP182KLzliCqomaAW1njq8hqUjISTsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKku7pR%2F77xf%2Fk%2Fa3ircA3IBfTPzZDeh2f0P8iWsmZ6%2FztQrb5wQhthzfmwrJnlH3mfon0Na1BRkQTs25YThBcAyrG%2BnQva6pz%2BUW%2F93HhNqq3%2FbZ2x27%2F3fqwO4tlKyCbP%2FbjtFLdqfiZnH%2FDi9hJ7T0HX2uhA3qNcMQ6Djh8hOKMzRSSYijxc2WWtVSgoSzS5uBzyjlKrqpC5mTXBUd9pXJ9yQIzHWDWjAE2sMhHpnhn%2Fq5v6BQyP66ePwPB%2FEEevoBz8ad6GMvG8xQUfusTQuvpbVfxnfNe3U1zH%2Bfw37VLeliF92HhG7T0V4O7e0drvoiW55MP7y%2FTIjcDd1IdklMkSLyDox%2FDOOfTnSqMMx%2FW6ZCrX98U4nceQ55DbKRCWVkFODVcq2uOiyg0i9x1fLtYo3TEQji5AdhKBc%2BNw%2FHYEisFwQaJKYuice3KXCOnMozWHTNPeRttQ2%2F9TnOqT7%2B0Iylm60HSDqpXYKHXvj88WZ%2B2Lbw8hGeHhMvgY90qIMGtKKMsgLlahJA2wF14UNcfBPm%2FPJLnvY3v%2Bs9NJRjyS%2FH59xk8BzZfP3x5LjkOzJb6lky4kxJjMXLZMYRBt8QwYwQslzbJXuD5UVzO%2BhOeO0G6awRA3SDnbb%2FznbT0SiDYufrnsv5LLFMLT%2Fi8sGOqUBpFGgoyKiv%2FR%2F7zYcGbxa40BC%2FFssx8W2bH5ne75agmKtDjtdZtklAm7xrwMMUE15l8wleki%2FhnEx797sBMUD14NXpLgxyTgvxwK%2FbBh%2FijNVTLKIs9PMSDmrOINb8Wzh6onqSAX4NUuHBAxW0M0jfYBPPRrR2WeP2DW%2Fa40poHVeN8r%2BbmZytHpfndiuHajm%2BukHwi2r49Bsrmhg6b85ZAXvu%2BZx&X-Amz-Signature=8cb17cd8927473acb4d059feed0931b0d6b52610aa7504b076b7ff8e3180385b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=c012bb119639fec2196cc62564ff95a1f55818bc483c82eb64a36dd9c9728e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=08887782c51f4da0065edc814cc8292ca4ed288f9d852b450d253eee1254b9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=54e5748b0515ea40f4727c822c69873561343f9512c50210b64e9ed0df5cb5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=623a602e654820e88be87e8d7270e32c80e656d4dd42394b769f54775cd057a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWKNHTK%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIChcKSTR5yUI%2BlpYTNLTKB7ICpeEA1Bs8f01noP0sKQEAiEAxc0h6oJoMzFyzTG6gBwnRzcK7CNycbIWarGjOlEgHBcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDm4suvVnU52oYUxyircA%2FnjiVuU0Mk2fX5NYmzaeKjK0nIeehOPLW0%2Fqzkv6k0YxwycU1Yx030JB8L6kHwfirnHt0NF2YNF4YWT2nu7EY4Dcpj3vrjwX897JTcgrTAfc8bH%2BMgMBh9LixJAyfGAZyMfJt0XcsjWP7S70sBMSOwUO6TY1cSyvQAZwCJo2T6dIxNrP%2BTuDToXi3cXmr1wziEuclt%2BUe3yrunHnpP5mmn9h1vim4IPLesCfeERZHTAHTUYdp4rMoW1Kb5r8t%2Bba3E2UOAIC4M5NV841dOGJADjey1L4c7j9qTXlPdgcAUI5q3HrJZBf8ohaj0gENgn8X09t34Idq9wbhX8wLCtwD1dY1SF6mg34kx%2BiqIeQH4LO8MLe9cG01UcEVV8xOdlTcUGLJ4OL1mYg0AVNOjQ%2Bj2yFrmqKEKJ72fdAQiAuyqM8FYAWqpRQ7vAv%2BPA7A8xx6NQpQ4JQgLCYCYnIXxmMda%2FhDR526%2B%2FxGH9qA9BfXEdrbh7OagvpPPOuTnRrlr3SoAMO6tTeRoL6e2DcV4ujIYm7oT%2F32HVrc932UxxxzU8gk4DdH29lEt6xDbzZyoEARSHCPkYIwv%2Bs5RdWLYwulsS80siMXbctswuua7UWeG17MPr62V6muUkitc4MMn%2Fi8sGOqUB9pwKZ7qjZ%2FtAZvHHFR%2BPOjARkeI0%2F%2BGQvDGEgyeo8WPEZdMwjSv5L7tUu3VghPqCkZdJzFkcGZkEyWWPgAb9av%2Bx4K4JkWheYV3LRWuyZlCqBsk6TcoZN4t6VLnZX4MT5cSlXOU%2B7pILfU%2BQV7eR0tNz9xfInCNQcwNd2IhS%2FZO%2BSkQGAGbsqcdhRe9Y9Ap7PnyZ177t2t94EuIoKiihRennc6W6&X-Amz-Signature=fdb0f068bda2e82e1b1a820bd7ff8d07f18e2753db66779428e4f11f5ef29512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=c414cff4db80211f55f1d0043050286c02f9dbe1c520ab4cc1a2ef3dcb0bb2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=0d9706d6b4b071368ed58dc9a06d8a4159c52aeb11f86f7db25e5b94587c428e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=54e5748b0515ea40f4727c822c69873561343f9512c50210b64e9ed0df5cb5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=f389cbb49a2df89ef5b46510ec5394e324cea836d188e5aa098030641c293461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=7c34d3527af3a62c8067bde8d44fbdb7b780f268df771cb8c6f53d7782881bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEFEGHGG%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCT1Y3CBX3T3OKW3p8fYTbF%2Fcttoaja8g8cqiuHTr71RAIhAIfVMABsqRw8f9zkaJckxn1Agl2VsX8fsAnzC34Vmw6DKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKutcU%2Bno8hXZ3I%2BEq3AM6aOFKieSvpLkLv5w0ZVPBriCDzVoLymWiF2lfbkhXMW7V4HhNZu20AHTSlX8j1qJ3h4YSTwUYoSdgztqU0YybPX7v3u2p1zOSp6rGTsfOAos%2FsMnnSJAnUffENqe6S6MlyKqAG4mxZxFxdZ56OLlORFTN2R5tUfgCfqmEXlMzLzLqG%2F02TwYhpFd%2FR%2BuCLirUber9HFfQW0ge9q%2Bzo8aBSxrFYiQ6HTsqL0PkTu4imsePaqC%2FMEj0F4d%2BiLJvdOCQNJtmRDabWArEw8xmilgfOcF78f%2BgT40GsVbCuQnWLLM4oPYVAX5N3qKImMEb0SZI0i42S9AZYv8HT8075YjsE%2F%2BZb%2BSVArdFw02Vg9Ys4qDBI05yinS31884D0fcCq0xO7B4ZiXudWW8tOP35W%2BOR1PSmm%2BK2g7s0M9KKlMrnwUt2INFhlZjTBlCwdbaB4cjb2JJP%2BhpPat3X6ySL5G8LTJX7i27s1y01sK5JgkUTAt6jtkCIo7PmU5otDOkCRyBvJa2zs7brSE5z7q7VtNi%2F9y0qEEXddWsJU5Gl96zAEsl2M%2B4fTh1eV%2F7sHjPUD0CUsMm%2BT9RxhMYAdFEKdMTBddJtpxibZ9ECsqUvvNLeaIwolBSLrhYAaTUFzCi%2F4vLBjqkAQnA505SuUqgr4OruOzgdasObyHTE4eSlcKqD77hxhW6i0S8SVVi80XL1WDbi%2BVM%2FmHL0aCILkVaSEnISP0gBxdxlHEr2vUW3MQp4VQInnJXPVi%2FSa1E8Hu%2BEFcLJRFvlX%2BAFxQjib3sdBfvDmsYCRooWNP0k4R4LEfd%2BFB8%2BfCLHSVmXeWPBk7ZYFv0e%2B91l%2B7UlViIWGzTaNYKgmo7h1zl00hK&X-Amz-Signature=c299d922f878fd3bbfe254d1599f6edda0206589910f9235087d70b404811b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


