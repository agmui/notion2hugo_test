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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=e53747f20d5cf52654e679be73b6b214dfae8b915961e5ae1eaa58d9603f725e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=10aa4792e5b877d140d4616215cefae1ef56f7f82e0e2d5979517696af633375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=917293493918824371054c61d7867f56f042a2b2da20c440905b279e5e72278b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=8333f5e6a1171edff4fea2118ad34a1b4237d55714b8180a5b59f6c89e64fa0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=e82e164f1de21eb35e63225c9d517a26576c55cb8d28aebf27671ac65851dfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=b3ce68364a0bb6025cbba1b8499b119f18857fa532b2fbb6f6a4e4252bc264e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=e79986272c145cac3ed3fd725ab4e64cdf1ae5daaecce88c0281666b29dcc11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=1aabf94a1717f393fc9545d3a13c9b772f8faf75fb23d921589df9f1e3312a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=97d6a2b9e27c597283e81199b69ec5b59f6fffedf3958a594bf040d761305bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=2cf5f42bc2c1f75ad7c72f5784974167cedd32d2ef64d2499c05013cb9b2ae4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFUR4CFF%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1ykmxepMGJ%2Bjhf9T9YmBmsEnnBRoft3Gr3Ph7xgQzGAiEAw%2FASemCR3uVelTKc%2Bel7Y82VHGhN45%2BRs%2ByOVOYZbpkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDCbBQoAsSa%2F%2BQTqBCSrcAz1Cq3izdk7Ph66QRLDqh1zfzrWkYbLj8EDlLwvk0xXSOV19%2Be7gNAF4%2Bp8qZbllgL2sYWh7NA7MAZtsFLYHkAkp3uhgeLutjH80glsC0tGsm2aBt3WaQue%2FJMutVjc4BHmPUU%2FkhBEpNJLCe3mDDbZQa3fme1Y5um00Q16Ppcz28esl2dAmgmMnD1Sdxan0X6QJ8N%2FOYPad%2FBublzrzXRn2IrcIcPIo3KXdIxf4qSpRPQGuSduZ2nRQGTCX29D8O%2Fk6HMCB2AVKc2SPc51f4MXuFaiewe692JZle29Usi%2Bd2G6QziQWWKrb2pvD1jdyzHb8XbH0113OIBmn%2F3bXiugP5vqDedJezB872uLp9y03E7gawsjL8M%2FZc6Y8xZaznDNTcxvD9B8RW%2FYrphqiC8TatZtP0494izwVXNrX3bAaKI5Yr0MGM7lhx6aAvqXg5tNEyxee51aiWTZIkquJ0FeZS2pp0gXd1KNSPEmRUZam8QKmrimrDWz7DfCgi3vvofyWAn6fZ6uhk8G9fzq9UsT%2B9FTob%2ByEkxOfgkmp1h98tfi89tycWVDTDoBYTnx8QFjXeYMfUX95Dr2IWMfnoSpND8kowQy3AKVJuRgwuhDcElOPUx03Ppq%2B8fHbMOml5c8GOqUBB7jqHcL8KN3E1gmbsBHrXzgzwPUMMGE41aKFXqTzWcaLxV478qYOXyzIAaNFKDCT6ouHr9UKI3RsJ64IhceZMlM2Wh9%2FJrqgXtq6sZg3%2B5%2BWdaWjccBgAMFDS1Lr0cUYZFx4X1RM9YqZq0B8CZBg9QzGt%2FuXm3Dtaxpq1UJBI6Titkj2VTd0uWTvtNLXIkc0duc5xnZsF5aQRS%2BYz77xIUikqIYA&X-Amz-Signature=36bbac4a16d8a066ddf5d9d892cc5f968025968bd22b5c9c4b687c858d3a382b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN4CRI4%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcFq5UxoREy12lNuZkKqvB5aVN1Qt7odgznbtXg4DfSAiB9ISoM2xQwTk6wCZIBCOf%2FomdCdUUWzaCPI7IhrABMOCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMkz%2B409KSt%2BvW6vcvKtwDYlGhWZhEo49VUnfaJWbSoHxON%2F4vQAAYjeQrIMqTvE7VtYeXH1ovrGVPsTsmCSvpdnQPTslIuQ7mdLRNAEriDWOghhe8SkGNiYnscOPbxcDOfAgPg%2FMRAAnCTh03mGP0eOjV6QH78j368Jhq37rB23bDgiVyBoDgTEp5KHdTo8SGZ2L3Q%2FSap40Ud8swNCOwPgp4L0Q6icNqnO63KF6HAablIaPAcJPEW3ZzBPNTwMHgi94VNXwfoPJAQwFb3IW8zNqDEoRobCo7DQnZkZoPISuB1Y2uDz5RaVp9pIjEqkQF7c%2FZHNUlZJ%2FERSJ4QOLtbz2iyHMAkGy9iyCkGPjVy4TL1bmg6nYfARxfw%2FaKEyCbYGFhPvCR0lHXgfqtXukiu%2FsCPXHGwTo7620YfYYdYZtuRIVvprlfSw6kbRudbHMiJ90IemgGbMNZdM66Q9MHIXf08l9IHx48MVWdQRJ4QcyV7xfkoeIxEnUbe7wHHmNi0yl2%2BnNAqn7H3X0DVTS2MMeJl8XEZqR2VHF3nmqt9CALDWYiuyF3goOSX5vOhKTKZjafvu9NfH4mhjZxJxQuvLId3VJTUti3P5SAVCL%2F%2BPP4SwMqLO2KkPZS99RsUuPvFh%2Fd0jelztEV7a0wtqflzwY6pgHy5d0turgTdouCNvT2rYk8EnVNeSYqOGolIlpm4Nd10JIJe17D%2BmbLurmVkbFzu9bY7RN%2FGDIFyxj1IQunc5mmPVzCjGgffEU1DYjhzPlqZ8yGkGAlr9OYXsZJbpVbrEkZTqCDNwnK%2Fw3m2SLInWsSS%2BchXJE6kjqyqMT8CB9vkUWMYuwqLsLlTLy3qZINrO%2BatCkg1G3zoao%2FfsI0KqPGLrQu%2BEhp&X-Amz-Signature=3d0a76d501738ea261b2084861b1e87029ea5d7bcb23fde2bb02a51e2bc2805d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIR5QJKW%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC82jmXvTwmEAThmRb%2FcTeZ6qGERu8zP4ndOk9CDUsjPwIhAIz03m0kd1lACwn55GFAqtuLaUbTvc5HP6IBwf2n6BRxKv8DCHsQABoMNjM3NDIzMTgzODA1Igw%2BDccHWkLvtQTVPr0q3ANDBDzVSZDDaEFyrFvJsoYC5bm6VXG3gmpLDmGDvOnNy52w0dbkp%2FN6vx3jQeqw0UZ1pQhfAa5XZbe96IJP5bYQwih3indwJie1DQLhDQChuvhjhjQ7YAhtKT5u%2FCVzvNWczaPNpDq%2B2rFDaDY41zsjhhF9gbnmy8%2BMDaFPh1FYRlEnN8QFbLYIhCYkr890Sk9LdgVPwGFj5t0jFoipQNmVGtwsm%2B2R92qxz%2FfWamCfeKPBQCXB5oCAlgr686m6OMPNSDQXDPckROWoIbeOw9ei%2Fo%2FHco2xXjXEBLV3ZjDXp6LInqt8tx8K%2F%2BEIvqozN4nz1ZVPS4uOoFxV1VnW8eITIEUNXccrPUY0kmWiXQXHDkhqjExBbymOrjqVeKbArt8a%2FibTC7xVIzCOe4suZzoY6EXJSzuxQUM1hlEFTCDVAQTUPs2bwXs8JubJJzZdBiDU8Hsgdp%2FmcU5SRMbsCENqsyXqZn%2BcY%2FxPOkLgnUvGAKM1HWkuQP0zbWQSrUQygdvW2i3chNjD7bEWRW1AL8gyMqnhyi%2Ff9MSBSDgAkrxvvpEaHTW24TrD%2Fg4Kd2g8a%2FVtdioJviyP16d5h5jXooayx46btfgjnZdK7F7VTc%2FYN49fNNmVY6GOfteuajC3p%2BXPBjqkAavAwoQGC480CYsX%2BU02om0v%2FbCPWQjhmHIgrgo4qtssYQeJd5%2BQvctWhNFx6LFNYcEQkBQYA5bq8VKPUqd5k8C1yvUnoz5wQCXsVq7aZLpIyimPuIjVv4fw4TxvHsRyaSQDrBHFxYhU2fGFwGWPtygW5pnNr%2BgoXfGB1a0nByckFS4JM4DKHbsPChf3IaPCLBBfbhn1BUnV%2FK5cTEtZOR4K1b%2F5&X-Amz-Signature=fc49a6490366d8c1c695118011f653142471d559d8b3ece105a4f2d07fdacbec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=7fae4d1f141e3b950b90be6f183051252115aa00c228b2c3a441f3b7442db42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UINQ3WB%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3sNNXoisvmve6CfcZpeSty76zA%2FXbkTNr5mmP3mCxlgIgZdnKM0FTE%2FosySI5g3Ix2pp4Gb7LOsHk%2BHdiUzWXXToq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJR4Yl%2Ff9Fe4vBjBzSrcA2Mq8941bYNvgscw3reUt02JmrTV2dOmE7kq%2FecKj3bXHYzwTar17SIb%2BPjYutOGuzBhSaZwxI%2BEOdt%2FWucAC053xxuq5Ve3f7D6%2Fyf%2F3QRNdKSlgHbE%2F3FCtYEqOJDmjYJEaQCLInE5CC6fmQA2yPDr2WUVtOb5AYTEQ6AUixp%2F64InEeHTGYDO7g7ofv%2Bll%2B9cUCH1ZXU8PbPKunkjRhVsyLm%2Bme1eEba6cM7O6gHbxyWfrWmdW7gtZXG5StVhH8PfQ8lLdehUVKXtLOn5dw%2FQ3wgYJuVupm7gV3cZ2Fxij05Zn8fr12oktl1FY9WlHS%2FLmfnb4w8Vn3X0xAnfjH3ZRpEjbxuQ%2BAnwbu5Ha9HT2TvNhd%2FZHd2Hn1WkXHNEEl5TgtCLraf6dBTVjyQ3jM%2F5ErNJ9wP4MySfa5wVcLJuCUGGT5CL33yjY8MLZHh5qMd7iAJubhGDsepvccdatW9gVOril%2BH2We02AngQvjJkzzn0%2Fbwv7yUBbGjDFBOn1WGMj%2BSt%2Fv5nL6gEi2xe3zSKVmT%2B%2F7RJ6UHgqfXhS0pUhOfExrUKffgDAJdMFzEs3nJWW58xrJjGEU8SXH7o8O9X%2ByyjmYCgHMfgFljssm9THEHpWZn2CUI3%2BdvWMOqn5c8GOqUBr4s28eYuPf9MMtaeQJvC18kLJwkNqAt0WfeyRgYmvYhx17L7pX9LJhVq72iqEmx5tQOQcFjt3vKq14YXABHBAoEBX%2BWFXR1ojuzY6XtBzoC5PUpHb752AUdfLYLq5QeOcBkFEhYA2Hj9yhS8LAnubbXQqTLMQ2T4PfBUhMqLUT9IT%2BwUc0HUCs%2FzpCfXAWq58g42%2BpJ51gZXGj%2BmI9m0c4cNYJvE&X-Amz-Signature=0a5cdf8d18acd4d668d3efd574d6233fefaa653c11334ee5c2b4ef5695e72f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=9765fbbd19f97b6766e755c34db12ba7b2eeb0fccca88eb376b01e85051f237f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7QW5EY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9nqhrm7HixYlQzALEkJ2WDkpT2O9L4lznvetnSWr5sAiATqqaLRc%2FqoEejQUgGj8l8RbJeRAtQrntkHqLhgli98ir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMBY4Y5BQJUy0KbINEKtwDjUUSTd7lNTws9GhJ3FWCRoeXWLU3xgursNxmvSDYhuqDwtuHKlpaz%2BT%2BZfvrWW%2FtRU7izyM6UDSTxU%2BPXOlSP810%2Btd2XrJKmqCQx15Nlwyrnp%2FSXqv9mwXApD%2Bur3aoWtCRM1WvBEv0PFxwboMuVBGv%2FGGntIo7tB4xR34ZKft8F37B3xqOEZavbisMC%2BGS2by47reh0IAa99KrSw%2FsLCk4C9ioFQGxpUegnrwe8ydmjxomKFDE9o0Etnmf%2FBOhPMBbw2VeAuIg9VcpbDoMR69%2FxoU9QGO9ESfjdhfH9CG4Eh8eAP%2FKzafMTVN0E3fxeIwKESyg1nzXsgeJXFWUu26ULAnLDdi2ml1F3gODdePaGwIL4pkk1LvuG4eUhEofHIGM3b6N48r6c17ODJ0e2zlquSf2SyZt%2FH%2FsDCoc075nTwshKFGisFRXOM3TdZVH6qz6CiaAc3YJDj2puaPVJOLV8HXKDnjR%2B%2FCwDldf8dpNa6J0UrYuvXY5ACmZ2oWc8OGK%2FU9qgXwVz8bMW%2FsRBNg4VTok4p0cIgggN4Uc2Qv8p%2Fq8sGPTt7FI4k5%2FR1IKiGHV3wvuFbhN%2FbhW17wHwdt%2Fh76Hvlt69%2FyT%2FF0QEOjV4KrGOQyZZW6lmFcwgqjlzwY6pgGddS%2BSHw05kcWB31ISIaooEmXvsZROsJnZaBwAIh3qk6vrhTlqXn6eVmle%2Fg2eq5%2FfVldXl5ianCXIlfkIC7D4LP%2FrV8kLcazvkbSfSjqhJpgWWfgatY1fipPrI2oGTlnk3l1t3B021qcOI3p3NkBMDeHCErX0IhoEbuXLjsnZwIo0BOsNCmvP390qOosCayP2625WenvLrWt%2Bqjg7IRX3FtyYxXFP&X-Amz-Signature=ac4407f15826c4b73e0b5e18b5845100d011cbccbf0a2b69782b7eb5913014b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=42752c0d3a790036278c4f967069e155fe62651df1db2f2c895b7bf96f11eada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCBH76H%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6s86o853nwkBYYvm45jNkqxUXJTSNHPuazpF2fXAmjAiEAobhKAa%2B0MONm8jLa%2FxZHgMwZK84A0hUt86u%2BfsrglXsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDtbAOz45YJmzkt%2FayrcA%2Bt8RqVtR%2F1flNqObVXgsFSD3cOHEhSv%2BBhteuYWgw5xSPNRlAQ3Dy24OqNTmJmiTEZ6CYG%2FEmUUNSuljvKp3oNfkFwv2IOG61luC8FdwUZRVpKL3tJWpN8p80XJpBBUXM%2FA2mFTedc8llKiBaPdJAMElYpPcC%2FDL99ECSuB8WpSqPoAqCFtDeWyZ7VzlGDsDzAP9VA43o78kkkARej%2BVZveKhvvDrzQMHxEmHV2fd%2BvSfpBkWZdosbOgjOmFVBVStNUongUfQzgf%2BuaANkTvoYX7sHXT3d0IPcKZvuJ%2Bw%2FUMta49uOWon3W9CsPBqLfLeNl%2Bw5flk6uTwAfb%2FOwbbO9GT1zswUm0M3ycD1ze%2FuEevwiMsqeon94D%2BSfJt2krlJIGuL7c1IEETrqbJtrOjvxqjRnWu0KDL561w5CtaMJfe6JJ47KLKWRB89sNmi%2BDLr6%2FMGE%2BS%2FVcfGy3Ro%2Bd%2B9BGNXM8yTa5kr%2F15Ez5fZoEQQuJvAeYF2R%2Be75d0nRE%2FBX5ZL7vfHdG1vliel5F6RwAToZpOmwBrM6hSg%2B8F%2B2xx9LVYh6Fdd2ZgpZTOZSX9%2FZ2V957vf5j8XtB9i7u8JiBren2zwq%2B8FPhCFiH%2BQKaD1PnlxoYCMMTi4dMKCo5c8GOqUBH2P4GLoGfVQm50RxQPhBei9xS89TUO8i6HBK2tuuPqe%2BDz3B%2FBxpMxupor6gFhsOKKFIcNbx3Ow4oWZZducnR5OgKzXRhGzu2NmcBMaYE4%2F3gPTkGKjGxb4D8dU6v1fHFUROv0x3VpjGN2mlrxZ1EXcudcttdrI2FKsMAyeElKQe%2B8WAVovm4FOBY46W%2F%2B7Hw20mwKD5VbTFbubw%2FVLl%2Fe2ovxLj&X-Amz-Signature=c52cf61050e686e9ac3782f5434f0bff71138ddc52ba72344c0dc6b0d6cf4d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=f51f970345c2e2cbf3b83ace4cee01304ebfc1ea144a264b84a32a07fc0b26ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q5JMIUZ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpABcR4CU%2Bbi3TI%2FzrVY7B5fmP%2BFeCf1GnZBpeqggWOwIhAMENljRUv0dRJ5HBWNj%2B8Wv1qpwhjDirFhTIQoZn6Qz7Kv8DCHsQABoMNjM3NDIzMTgzODA1IgyeO9yLw2ITV5uv6OAq3APh7Z8bxsTg4yJXtNyHVcbYmzug4xfV5wozN7PT2q2uPoLziTjz2aY3dwAhg5v2cLYa9RxJH2WWkhX7G3NFiIh1OHcLZtHaTT60DuYaPez9Ec6HlkkSTlUMgEC%2BOJPvbAsomd0lYg2byVFl7FJU8A16TsxrZa4juHkn%2BHAkPN2g8dnvL%2BKETwDnWAbC3cpDPqGB1btF8je%2FbOVsZZExNAFmeQ%2FE0%2BAIZCdgmdtXHcitqCyTvjYanJ1o7YdDUHrLosJqU9SVHh3UcyJDJMnsTldyTpTCQauqL%2B73fEVYxEsLzDjdRTnT%2BvNYV0cjG5%2BNLMR9uQhzMcTa33AIQlehlZgFu15plkwZKX5rCrMwVMzpXbA73%2FPp7mPPdayGXtkP5U7vQ49WgZ%2FEMyjLWJX64nEXLuaQkOtg3v1pGu2r36mN5EEtZo2MDTHUTNFWJilvkl0iDeJxWCdIZM2e%2Bw5edxIS2fQvhDdmMg2OUoKsd40qkRt%2BBv1zcXkHJ5%2Ba%2FEatS8nXkurrzxsO9lLZm9K4QgCvOhvGNEsESGYo3qVFVdBn30K5WhUR2KnzkSilX9MfHB0sxE2obmBp9vL4J%2Bss5WDKsGvjKHcL%2BbjhUGNx1brDlPxnBSifznrwo61QxzCDqOXPBjqkAZUp0cpZIQQoGuiMHqOyCYFMoYtThaIT4CltkxtY6dJ5UtprbKiksRlwmidldKNf0wF5%2FP4hbBsdKOGRdnveKjcpkgXG0cGqGHY8EpsF%2FHe2hPwttyHw%2F3m8HD50F0KjU%2BptLm2CSyzEkQLhFekIaWX3oQwZ6i5sUQjPVRreOXq63HunFGYbsj9NBkX26Sn8eJiTw55qPKkdw%2BzGNOpQ8nfD4aEn&X-Amz-Signature=69d681bf0855f07c677bd6237b0aaff077c151718b1b2aabf7d9e96c52b77f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=538c129839cd359766b322597f6a4a092e033723ae77ed553110cf66bfbe517b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFILRSP%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm0Mild4G6DFRm5o%2BG0infHYKwUK1hq648FpwWIdVBIAiB7B5Z0zVXSDpkZBPJk4E87iUHT0j%2FeszlJDm3%2Bxwy6dSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMM5X39tGHnqGilFQgKtwDGLsB36NPjL%2BsiQko%2FjkNpu24OOf1b5D870Ye20xZov7vAf0JOtzyzOuoEVmNhQFbqikdNaPvizp1ybQjK9ZZL8ekoafqqVYEr%2BVI2SvJfTR3diA3PMGGxig84ej9movKx12saWkbK%2B%2BazoOIHpCRdmcJdjCqAjrChntNfJiJE7bHYpuhwlvfBcLNDHgSi401GK%2F1Q28e8BHdH0G06EEU%2BZpeujBskMOZ4KR3aXmKG8gvQd23IL458Wg60GljGFK51WCX8RDufvLIhMNGFVPirc7hcg7Q4PSYrTEIpL%2F99UBkLsSLTMF%2F2FLzJ2na%2BQezmCwNupctr7EBq6L%2FbY01xjELUwyxqPCnKIy1gego9COEIUX9VFUsuGxeUH9oXp%2BB4rjNFOWIm8X9pTpyae2Cww5sifkSF1PxoGWZyi%2FIBnZO6sGQcHam3GkzfsypiQ%2FnUZxX2zv%2BZSHMylPNDsGAxNvlWWdnLTASDBiHAK0%2Bk%2FOlQ47MnuC0EUx0g4wFpT7vh%2Fnfw76eeZBaxsGWv6U8VcdKXbdbi58j%2FGpr0QegnfIVSXthWINUTr3LH%2FrLBDj5PMa%2BYv%2FmCXgR2CsfhPcCHyLS0R9wcEh5dJtEBnaQAsdB1X7zN5MxTVjLyAIwp6blzwY6pgH30WLXyGF7cP122xGByetYx2mguyac1i%2FBEmA28TsDStLjCcKnhVLj71E0VnloT%2BTkH7Xf4zOicZmGxKxf19b%2BIkTbQftmUIYDhILWGmuqQhiUf2GHftl%2FyYNBBeRjPZa%2B0QQwVlv4bsG%2Brdn1Z7va1nDMnQrIxTw%2FHWbwC4%2FmtyrIULcxPNUrOtVoFWJll6y4gZYDt05%2BLVjipOY2c%2Fn4Xq%2FWZPIz&X-Amz-Signature=3afd93d36f9287fca9b8e1f8d80dc552497b4a09ec96fa59ffc068bee9a8b910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVMMU5KD%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtNL75kH293VYlGUAGL6xqjLVMlbgpF4u5kgMpTSjs7AiEA7WmquGDIn6OE6QyfuFMIPrg20tpbRU9ALPGoUhi1WTwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJbLyFOS%2BGXiQiM5OircA7HxtJzz7PUpzm9cLYYUAtNjyGo%2B1k8ZPX9L%2BKKyIhWdFBAW3K2I9SFGoHr5jQcE%2BF0buxa%2FozQQqblTaGMzl4hEIxwaaMtnBOffU14fXbn72D7VAsl7tYCDctl4e4fjJbDsOyZYaciVSdQG22VNvxv2tm4GMtxNhNd68zbwzEn%2Fhng4QC%2BXM8G11a18ZUn6caueG2Ca%2BUryqFA8ZobZ5oFFmCbuSjwRgVok6qVVJv7GIHEzApbYjfl%2Fk3HRdoH2vWGmgdaF9yHUX%2FFdz00GU4%2BcE9VXrW19M3wWc4CNhQ77iupQBU16fpLghXU7EsSuyd3DX0Pkrc3%2FxZbnG6Bz0cHhyNq2xT4FCD7yrsG%2F2OaBYutKCy3gLrIM2r2qr5XYxJ%2FkXNd19IQZtj%2Fd%2B%2BwyLO3kQ25p9p1G0xwv10ZhimQFGaj1D4%2BIIP3DBFNKZzIkd2LLQq8NCVxc2m3a9Hxzr%2FAs6fwqD1icSyzENifIWQvYyKCEsR0a%2BgWmu3qEMzOvHG8cq5nhqXpw12tqBr0vLEfzsBmT5Qbngm%2FIWhz8m2vGnEuAAOYvtVW4EIj%2F1z6teJI927ofC%2FIc%2BevF%2Blxl9p7O61Ty%2FPy71bROft58upyc2ENZMHUsldegoc6PMMGl5c8GOqUBGQVXPXM5Ry4Rc3xjiqJ8ETsz7SkQiRzdDcd5gksnhifD3fA2PuaIBPo2Lp8vIuqzufkMxyfEQtQlJP2Ekxq2EKmu0JYN%2BFlvcAN0zSm%2BTCPhIyqOSZzaW4AiCHPBB9pI8uHDHORaHVTOjXNhaBBXo5thGd0VA%2FIddx2iNxOY506kV5MlPyR54mMTNxEMCXeQP8y6%2F3nWy1PBRezEmbnuM6cagu3A&X-Amz-Signature=a27bd27fb7206ac7c29e1dc48acde6fba85d33351e97f8618f6a3e17b241f05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FKVUXN%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm%2BWjN5KuM3O%2FPoB%2B8294jbdBV0N2jP1qVV6ND9jGW7AiAuW70t0TBjJYwrJcEOo%2FIsMqalTF1nM6Tx%2BOZdu%2Fq6uSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMZsBgQQZ5WkqAO214KtwDiyUHAsn%2FAHek3PJT6e0Fkzcj8G0G0IXNMrldOK0jlNSrSC1NRyAces4jjcoBX8ic2lX5HUMBgNaMDlTHaSWT6o5%2Bv81oNm67s69lp%2BcbqeLLYJ1kbI9DRphFbR67nBcUxrkcuFYZL680r29Zo61jRZ66W8Ft%2Bl5EhLcQ%2FfIL9UNUGGqE9C7vlfzXDFmt3I0EyI%2FQ1mw%2BIs02H5A%2BVzvgNoAld%2FIC6nCO5ULiNel%2BN%2Brhuq%2F5jM3E8lTGHW77z59TNPhvDNo%2FpDGk5xq8GSz588FeITjCTc3kn4XQWs1j55BsT0WmnslbXMNOBSsqzP%2F7v6X9JizWLcveyhLTIytRM61yvE%2BKbPy7Jjl60hzAAZooDwQfevelBK46RwX2fAnZ8%2FcaRZWE%2FgitEUHfZqb1w6KLA4jN5ywxJZe7Dny%2BEwL33je85GVXSVYMf0IbvD7QwGsi4OXlwauxoNnTK4nW5nff5%2BsNNkliqhvAJwEVxtXfbKWQC1X%2FSux0cEzGPXJdwBK%2Fso33AG5niwLj87zrX4Sn%2BKeK50nzNK3a6%2FcW0lTiYTanwEwBputj20hIAiW7DsIWjiTogRmAZnXAj8AOTQAOqh1HSsyEmEHiZMG2KHTJCu7SYoYfUmUEYi4w4avlzwY6pgHeFcCQJxQSomEOrLLLIIs3dhuNRxIhWP%2FMoSESj8icgMUGzZxhs0niqSbsmZmr7%2B2Rn2fJEHA7iWLzh5%2FcP69B702Wqz17s8eRdrlmgcx8o1pmw0dYWznjiBhivKr%2FfTU17GJbXiiwGVcoPvUolNZV9KUiihoyRS14JNumGe3AafX9et%2FKFgNthg1vGJS56kCZ3ivBIlohRakuD7PgnhZSOXluhfOT&X-Amz-Signature=053e05e9d5b63e6c58e0ead592e62492bdaa114322feedbc6cc5d505882fe9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=70be5f8ce57dcc4cfb5f8040d2e701acf678fcacc862e12dc03e01710c9e6572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPMWTZFY%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV4mWqTD4rIenfdBNt%2BSxtBE0XEOdUlGoEws5tJMc8BAiA6dlbHJPA4cZJ0Jq1oQK%2Bh2QqaEKHTr%2Fr9O4fW6%2BufZir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMzawfjYtfxBgK0O39KtwDNlmFyvYsimx59GdRqtXWnfdm%2BfU3KSS7eZCVKgyVGdLV4v8FLeCtlHYIzgBnHCyM0rubr%2F06%2BIt2AVgnLwlAON%2FWrT3BFsYQWEIEYd98VMi3WggkJ6BdJorPIhOrSbD9A7POEe7QdRyhr65UA%2BC1jaUTZIn1yaGG0CkdZhYH63KxJSIUEtFPPWshO8xWo2ihNwwC0NoxDZcwKl4ddHsv0CO11ywMXc00O6sBdDn9pzqT%2BCorebTFYo4X8jy76LMEvuBxmWVdpe4%2FaY8%2F0yqmhhGckHO1vGRLHXYvjzelZIyJR5YBkE3J7Em26fC8b3K%2B%2FkHURIent%2BbowQSGMdSvMV8Ji2RxzH5Y4c%2F8tRDnt5QmNcP8lGiz%2FF9xSux6ls0CWbKGYSPaQRC6oUIz42FRNJwru%2F%2F9n72DdRqlGFJsY%2B3D1lC08Vr%2FbeQLRlhQlNSOXpzcMnjUBt3niXUtRSUw94BQzfdluqy%2FwUqY5G%2BRQlem3x%2FmG1oGY3WvTysCMHntrtyZ%2F%2FHTG6yBF%2F3w2A8A%2B94gyTeQBYV07hLeTz9xLCNRjCzST6VAH3KYPEfjwi1%2F3xGXAzrybK1aiD%2FsFYB2bEW7UxEKUs1V63WbhhIOlfHGj9gAJMSI%2F9rFw%2FYw86flzwY6pgGpxkiS1pT64HURtthsssX8PmZpQuqi0eCEez4ehUs%2FOMpe6Nyk5uiH3CahGp3sh273Xo2yoY1fhKFovrFsn1ZxPwUyzMsnMSKJtawslXlnw6CLDWCjCFBZOG9eevhC9x%2FBWUT92J%2BuP%2BxHkI%2FUtsBsKG%2FDm5sDHucQGGtg8t4vEm5mR9ccEvXtieXcx9Kyu5jkdTdD6dY8bjLU4nrv%2FVVOv%2BsQqfTe&X-Amz-Signature=3007a3c9c8ad30caaa232b253193c02378ff391734257909e4fe419b402c4ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=f6d8e7e8bbcd48e4210116a6da278726dbc30d7fd2982457d851c01bfabd7d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=fec10540f82377080b2a5b55470f508ec2d8facb6c751af1d625dfcc8024e5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=1b94d9b5fd1835429c77834962c0de21a6184d671b0976d43db2f2b82bb8b497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=63ca8a5be769f1e9876866a2cc01f423eca8d1f16f9c19bcb0e044a955d6f3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XVWN4B%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1qmMa1xCn1k5U6S9AbOytjMKNisW%2BteSg9%2BUjlhveVAiAaeXGd8SfAOJeUGpy1td7aYv26cvlnRZ0gwo%2BsdpoFKSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMjLRo2tzak%2BW2MXIuKtwDeAUf4ZjvzlUMOWshYNAA8cUpAYqgSGqw7Uj%2FxASUcoEGPswdQ09REVly2oEe%2FkGkU8ScdBUgy7W8cjYJn5y9la5UjUfrpvkiB1Of4LN4ZHN2KFBdcoEeuAhqRR4LYYjTFL7sFCk02hHNdjthRjhNQQXz1UY%2BzPSCxsG4a%2FjVNl8%2Bxvzil6ssOSZUEu2tPXU35AaX2HEtn8%2FBWIvJpZ6sQea%2FS8InvlzHBJm71%2BuQ1YitexGLLMHjxZzikQIWvBL8kbdyFmehBtOdFQ1mnBj7ZxXxd0fUP673cyEC%2FVD2HzmUCIpGTybTddQWD%2BCET9vwuDhtc%2FbI6JB%2FBJ9d6LChuryXQGTwGJpEnSgxikflLSnteXAyvJompSyVQV9%2BmpMnNe5sb8kxK6S0qg31eQQZ%2F2h85YD9YPNfHK8fkFE239LjVZsqVE4nvL4GTz3PyiDPNis8LBRNQ1BFH2hVENtFECo7moYHE8SNDtg7s%2FF620U2NOFx7TgRwXUSHsCBcarM4ibsfNFxqrBmD%2BDC4spirUUGMvC5AnxQuH0Qe277Mt2ukRyemVsnr0l2anWns%2BAWiM6NI1z%2BqWJxcNUqkogIt6yqF9R%2BL6IQqxAO8psMEZJdKHYZJCGHCF27ZuowoKjlzwY6pgEPKnHb%2FmHKWpJ89PtSvy8ftTk3xwyb61t2Xlp5YouZY26p0BQjOP6%2Bm1jk5ugZL3alx1TRvDUF8RiiZpbCtAG3Pv3VPIKMqB8CoO3WAE8bkoguqqEyGe2GYo43RzhpCWmLATs%2FOMmQeI3z6%2BoBXBwXnfjbqYvTNQIcEZfGI%2F2apwoCQxyOFXttar62eiWRuCP1u1%2B401egF0pcfXEsjM%2FJOgdNMvcv&X-Amz-Signature=f26c74b0f1cbf04284407a8b79a5ea9c8bd50240386760996e369d9b0ec629fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=aa75244890bdbedae9347cd813157bfa08797edf147a3b52df4bc5e1367bf087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=4dd93a6ad67554a3e55c37e336bfd88eb72e542bbd10fe74666c938bf0ea7f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=1b94d9b5fd1835429c77834962c0de21a6184d671b0976d43db2f2b82bb8b497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=7dbca1e70235d4313452bcacbb7f0329227671dd5e7e00aadc093bb733b89161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=d84775885e015e8073ba5870b785e5d0707cacd539cea4db61c7b10e58284f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6V2G2M%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjiejIseNzUavfFPiUR8hhhSkHjW0O1jWg8%2BYQvIfHzAiAf9ZlRhl08vi%2ByZ7bVO2xD10P7oi36uMYL8lIGNIL0cSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMtijxkBclkL0j7eBNKtwDHyqui89wfpSQl2g3a%2F9ZcWVRiZ9D9R9EVsG4np%2FfjlhlwhNbDyxrY9VNnA32KkmqJ%2BQl8DYUQek6Eg%2BicLMg183sdecreOWt0fg9Ose8AWcfDVdZ4QlBjxOQ1vSYCB%2BKWDUueLuc2xQEvWalWnMBfH%2FtujG6xWGsHnt2BvLqJpN%2BvRq3nqA7eJ9XDi4vvCsmVAOj3rID4w%2BaAA4ehda0HYDmNHofBKRFv0fpE3yy0kZXS6yMVIUOT36CYm2JEGRD7JQKQ6wZNpkKsthBpXPV51Sq7JEku1KVlS%2BfwyVbpza2vDz7yKTeC3pP%2FXdEsLjJRUHlhgM7ZLs%2FlyRbi5yi9l4pszK3s3p0crMyN0nc9HT4NoC%2BgCtCkrYqjWNuQrr0GpG%2BFq6L5zL37s1GIwLYv2sQaTAF7uI1Vxn83ELIBburRf3GlruZ%2FpEGGjlKz6bCZ%2FU78llViP%2BTTUy%2F6SJVS29cOL45%2BWyvm0CX2qt0Dco5iZutKvCah0jQWnC47sgVxUCThzMRXKVVr04Yk5BZbeVKPcoThA2Mpp8YRXsWqtqq2TiDoCBZa397z3bufWnZ5gOwVTJRCZx92dGhPYOlU9%2BsruOQ2D5dmHoRPC4w5q%2F1HrqSMJlSCWTJLOIw1qblzwY6pgEeCyCrWsvTQonfWOEponPvbRBzthIwiH9vSKyYK1P9Cddf119HfOfA%2Fedj3ztVT5oFuUmhbnwpNKlf1FFYrczyHm%2Fu%2FhoWZ%2FHbkTn7lhqgUC9GEBUk7H050ydgzhGiWKoUikar6mJ3JG0nDHyD%2F2mkpQZWoRDi6bV2u6U04kEqWTip5Ut1xVpLd6wCwEfHPjstGXcFsvLt7OhKYiJLYYY6KnUtvabS&X-Amz-Signature=c2e9630f35469b0d970db0010df067255ca597aefb57004347c7efb1b772f19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


