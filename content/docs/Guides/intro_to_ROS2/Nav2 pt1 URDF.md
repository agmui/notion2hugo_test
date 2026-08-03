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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=e3a92ebd2b34aa9b66d12573d09c315b91a0db9e34bf2b3f603829f4c4c833e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=72388e9cb5b533be275c25fda38f655335f386879baa6f9c190f8588d6b5bec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=0d268871fa22f52e49f3a93676f6473f946928a25da0fb90d8009d2ce12155b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=be172fe3c834d29850ca98499895c6009304845d0ad5e8d11199edf3188c85f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=547b0d985b74dcec6999d7f654abd18f054d4529f1df0184878ecffe02c63cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=c7ec2fef1bd94a233c9c43776aabf3d581cb09d36aff19d5a6049486c50c4009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=ce922b965e4565d236c44670657736c778ad33925789b587d3a5f9cc1b28b77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=d77eb3be0d231c6a173070ceba1e272e422c47067c51aa70c9bd1cf2885b8ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=1f2f455b95f5d87cb0a72766e60ddf6ebeed80a49817734d1ad2205b3f021d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=c26e730dcb01c36d3ccd8c3da9b2726b8be1564343e8659480bdb178bf6c705a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RNG2OHW%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAqTuR4fEnnLMS7FnZcJf51PUVhspzPbxzNrv8q1ZxNVAiEAuUn2PlxM%2Bc0OC%2BjDT%2FqINnkhy53Jd6KSf414HvmiFq8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM6lYz1Z%2Fteo7rgOyrcA99AJphNEMnLEmP6GAbZVZIzqL5kM%2BmjkSp5%2FdUw%2FYuXk8YS1mc2OInhgnm%2FPciaO5TEp7bzxb60V6SsxWX2RiimFysPS%2FS%2BhBHEO1wAkHKCzCJTWT%2FYBD%2ByGG%2FlRKyaPcyeNA3mEtSpLepK%2FzPAzcFA12npV7m%2FIzRIQhLmYGWSQWZLDA%2B112b8EwhZbniCpAr1A%2FshHUm0Uul98tUC9Y0rFaAsQ2wda15Qm78Cr7pC6HzENocKiv1g1gJ4u5IXlZc%2BBmNmbA2W%2FkewmS7d8E7v0y5TKQCLLhOFRvMJ7dezaIdwIzjLi34KaEpiK9d2PCtbqrO5aqYpdgvV1eLkvubZBYLj%2FnQY4tvyctT7tiN7TC9Ew4geRfSVljGRDRs4RnFp3Wf9YvtHLlqvMYwNx5OxOiYlwcnHTB%2Baegbkp22G%2FdXXb3M5HiJCIXUUYpYiIzrOpwhr8Zh9NkyINzbHicrtb6%2F4Jpj7BFLSbBruLY86OosJW5LOKKeudBwGJKcY6e7akwLi1PyuBYiT%2BNCOkp73fbaIMV7%2F6Futy2UnrE4J%2BBOuj%2Bbx2spb%2Fu4wFvQbVyqMTf3VTfQcEM2eUZB5WcUDnO%2BtSuXn%2F6usrEnHz%2FFP7Y3uILxg1iHMV8mYMIfkv9MGOqUB82LP4PqoJHpcp4FzPkH97cWzvF9y5JXyz46bAxUUQCZX9HhLuRZL93RjvruF4QBqt6JIeGjRTu78%2FzMrO29kT8e1HeCU4SZHdGWcoObv6K9eTYlimL6IVmHPYhYA%2FUMYxMRGBaJ%2FFl0fVUCDLFxYEHaIxyyqhZxvxGy6uWdm2kk3CZi4gpluB%2FSPTFfvr6BVwWCrT6gXJgSXB8IoPI%2F3EGoytn7L&X-Amz-Signature=e7f3f3e0a1a470c031766f1222fa57338c6bbbc0d2b91517a668df2554332dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBPMZ6H%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCfFh0tUbh9juAIAnjLp5tL5%2BvVJ%2Bgfv7EujCPztw9ICQIgUgwhEXQcFIkZYi055B8TgrNpRpG7RgDlL0cq2H6FnVQqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl8ETKi6jHnqlCaircA8%2FCTx8q16zrzUNlyJO%2F9HqV%2B5KRmgQhyw0dTs3XrNvSTnF4wAMlbHPEanNSwvOAHv1hi4EMl%2FvZ6p1f8mBSVrBFJhW7zXznlK4Rs%2FFVTbm0fgSysYnMT%2BBAxVB8iWzEzuMp%2FRgzScUsb9Gq25z5HPqM8cyNGWSEcdEQXujlee8e9XEwyK8afwuM9oMKEccDgynNuwGGN45xiUR8XP6lCYnlPEGyPbZKgRg1rxw%2BF1%2Fz5Xdd04fybm7SS5%2F%2BB8e9%2BSYON0SCssYhMI%2BtuQDIo4a3J2IUn48ZF7KzDGpXLOHDqTccHtUsr9vqrua%2B0C7lXsOgIyg3O%2BCaHVwLAuzOVEix%2FzNHaYtm8EaaQiL0CPNXQTKx7PAEfQysHu9UAln4gxKBdQ9Q60WSMVBzm2T2xmC8j6fzLenZkGlQawC0M0iYxkgmk8xp5OpSjILPOGSpxpLUS4TkjOe3wrnvFqmk68xN2dgaDRT%2FDqUv8QqxkLiluDWt9odO5o%2BHKh5pvy1bOnXfchXrr57mSBTkxbMxTNKwklGslW04pHXdFND2hB0tuUKalj9MiKLiDnkhGN70uk2jp%2FYp%2BmCkqHpKcJC5SmeoJM1nkCctlo%2Fa9C6AaQPzP6R1QtJsqUYx1HvqMNjkv9MGOqUBVGKEDK3%2F9R4nSY%2FPgRDnl6igoqhaH68V3L4wzg5raga6XVLKGhTi%2FnTYXkdGqx1GjF1av9Ci3pX2uM93QkOD4sIQRy2hW8lmVgR6NZPwK6p0DednZqkUtywYVhkN1C9BoT9w8rNJz6GcsYThc%2FLgk8amE%2FVx2qufiYznYGKzpHgHoyDwD3gbqRGGVbhNepI7hEwEwQ1LqHY3oliHXdvdaNEsfVNz&X-Amz-Signature=5b29f542782d1a4af7f516c61691c607d54a873fa57e6c7d0f456f2477de4201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZRQGT%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDKc5wDZiC%2FOXOQT49mq9vItzBbDm2EZ7hRqkgL7s2E3AIgSO39QDvw9Sl%2FXLs9vHKMJppcbcEJ9pUplgZCG3l67hYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGlGz5txdiZqaX7lircA8yEILBJ1A%2FooBd7WfnzladJr%2FjobK%2Bcl%2FQhnfZxQ0KQmQHIw92Ah8tsuQhZ2eBGpXE6RBG5v%2Fmd4EfXYUzDpUf2%2BBJfNn3hRMusTawjmyKvTrFroLwcJfOymQZWsLOF%2Bv5nnwQiTgdx%2BPr92XkEUu2C6tGP8Jm%2FkxSqWz8TJYqkEiWtff7YTZIsxIVV2S2%2BKrNVFPiwE83Xxs3QsC4Vp3Hc1JdUkg6wbaekPCE8L4VN0LNEwS4A38B3iFjU4acB4xPdYkFTUrm%2FSBUFWe27HZaeNijfXSGXP1WH3ov9P2GoS5oHHzYM4lnCk9FD5NLiyWmRLNQAI9xx5OsMKqyr%2FWvHompMrH%2Fvm0O1dPq%2F%2BeSuZAoiHODDZB20CaTQDSUb9X0L1hYGbNHCVjywopBsJeKu5fR3ogfQ79%2FV3%2BtbNN27s3v34WEz4KUjrdBljgQA1luXfkBmV47%2FHZ7bqTF15%2F5%2B8nmDBlN2Fvb3B%2FbuTYwpS%2Fy9xXoX8Tyat2Ha1dNggkFeTwuU5QeEdElRktckHGT0mqMLoD7kHt3%2Fxidv6XPSpFj6S7bVeCK%2Bp5LyN5Ac3cdK%2BVAtFF9FBPqhXFKmhR4Qol58eZFlKMW%2FYfRv0Skb9vgbZmXy7OHr2RVNMIjmv9MGOqUBbzLIGmbBb8KQ5KMz%2BEzK4KtJdmmCDiPfu26zSulF9JkJVxNddBLi3AhjpRauhfL%2FRQuueoR9XZ82YvuLebBB8fkqTaiKtFLoOMFivHStZHYt39SwDWjTY4OmlC30NBuDP0zODUUlaoCcsfjZt0zB7C%2BQVXnu8CZSWOqfHDmLi9%2Fjos2eDEGlzIibLOpKByfsh%2BvVUN1a8VMGsww2Rt9PTdQ29nP4&X-Amz-Signature=3e5f1e9637bc48e1b6e2ce57756f7338f03eebe1defb7786cdbc1d2d331ec501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=67c9e3b34e7ad119a764de3aaf81778ce63306465984a6e76dbc1ba1d703a627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N65LEXF%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBxw%2FyH9wUw6d9jRPOzn%2B1PwHSkacYTCUvtmLyoQpyNWAiEA5U4e1Vt9jw4OlCnD6eCAW%2F4u8CwIRDbJC1%2BWTQpLR4cqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrQwj%2BMRxeWQ0Ef2CrcA9%2FLri6L0rH5QAtvSuf%2Bdqc3VSmzwuqg5NqfmdvyK6Hj48MHN%2Bu6AuYIwewOmHk%2BvU352kVYTU0GrYOPGU8FvjHRf5Dje4oLbeRVJhO7mdj2tiNiaJLOBoHmwmzB0puD1LkpKo7G3lfGk5izpeCTt9fwlHWFhsTz6Kqv7s%2FTVJn6fqSAQ8DYpshhpjhL%2BG39nO1TrZ1GEaWLEAoDYJpZNbywSxr3%2Bf119RgPFj9o9kwx74DbSAXBQS%2BKxlGDOFaH3HLAJ%2BhWfxqjuw87465QuToGIz%2BkJzo%2FR4dZWR0JsthFy3gYtiBJqhX2%2FEwwhqldJwGX%2FSUTBvJvAwH%2F6JF2pSCkeAixtAi1QynHEnmZPlPJ8GBQXgvz3H1kusBhOJvi2cwhjYHH1j2KAB%2BH0NcEsLGyBC%2Fl5g%2FYbGO5%2B0FWH3TGH8fWJJ%2F9jNZUBn0BcqRHcXxag8XYRKSNAiqxc78vghdf%2FQbLAQLpn3KN46aOlKeeMauIYWZjAgLDocjJT%2FwHXDYe4fQ%2FAVBvMYT58b81EyVnIMfetT8KR4u2LyW8Yz0CUgVzBRNFWqm9nEx2ZPPQ4bWt%2Fw4DzeuoFhpfS64UqWqFCxWRsXMd7qRFSP5DwSXdbU5Cia%2BV6LWRncDoMNfkv9MGOqUBX3p5py1qSi64SkjD%2BhVOMxOqo5%2B9WXVWaNJYxgrnEfi2gt9%2BWy4LgIxe6cKPqNMNLEIkwQeGIBjjoGvyJvqnOyk6aP8IoKpYGz20ZtLdLWax69LjXEGzB09JNBcvisRJiKApqRY38vI1Gh2JJLXjRScS%2FaT7p296q8gMeUAQ%2FbturPZgyjSp%2FSgoIaBUs8xjEjWKHV7KB%2BfipW%2BYITSjEh6JVaUz&X-Amz-Signature=818eacfecf1f10391b9941e56dc17a56d52c3f2bfd9fb99c545a9e53161466fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=8307241b4ac72e250e2516d6641a98541b893618ce3f210b3959503ad1b2ccdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VORDKD63%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDrHdEc8sw3mDAXOVKNrEjAh%2FPwuEg1Yev9DdWkuPCgtQIgOjgUL3aOFRfSdGVbMbQCcMkIi9IdY9A80%2B1IMNeSSXsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiJlRbZum3HimSxJSrcAz5ZDw62zWyUkrWocxo1CI5J72rJ9%2B0GlUfAsxp%2F%2FKm%2BeShCa0ZOwPWol6eiBtVUGIb47Uyb4rhqCBVmAflm6DMG27Qqs5TmGCR%2BDweQzgdtvi0kOjiu%2B29911ppA%2Bp%2BM5JK5tpDm55UTL39WsblioDO%2BgPLaRuuIqstZDUEmnsbBhm376FQxNJWOqnii0u3PC%2BhzBjZv3iHC4G8nN5LELP1%2FkCcgBR3NguU%2FkOAtdvjrjEWaE0ID9jbcWpAEF0UpjyNnmsWp03FTFKkOsNzwJCLHDEFOiEfNcP1%2F57b1b6oRlNRraotZQpPiqs70iAPHEAXzpfUwWjTP2uQftsBXUm%2BBGxURyeT%2B%2Fi0wv%2BcNj3RhGpfXlDaQHwHwCGERFwaspKq%2BK4gIVc24BJhA1UGUMOTVCj54pocK0pZtDQOy45beCKabUvYjicqpk%2BYxH4868cx6x%2BEEOGRLWMtQkRkKAeT8%2B4HEJ0vh1N82QS4Cqd0FV%2F8RCqbAAik6X3N3rDT51cpNGYeBLChardoViDw36NiSEUlYcYaqRar80focyZvb4LR6Wqe2dCYwi933FbdMkAi5OKiREfoy4GcJ0DvUYDtI%2BwwImjUYj6N0JR4HU1LVhirQatZxhYwt246ML3kv9MGOqUBZlYGTdDSLYRgUqQ%2BHTjOVc73Qg7rXMD3yikUkZvxhP93bid8iy2VwN9MXrTCS00Q4ddASm7vuig2XHFN6slTen%2Bhqc9cP5xp8GHVw0xqR5JnWjJCkl%2B%2FbkxSIDAY5RZqV9WVqFTVNZaied10QlKc3PJ3yvVQxJoyo5j24EN7IfNzM3okJq%2BrXywJjWr5TCCZtbDI5SbiTvL0DVaG0Pn6V3Amnv6f&X-Amz-Signature=267cf7e474f7a2ffe475fd24f68aed4ff949f2fa866a9d11581029998a5bd643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=8a2790ef2ba6f7d60bcc0661f50f65f2575011cf8ce84b1ba1b3d8acd1f3f04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDO3M6GT%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAFkIKV52S44mQ4sNmv5Oi8fbh2t9LtAD45cfL4n9NDaAiALSs6KZIkOod7wOFkytTh1EWP82lYws%2B85GnwjP86IFSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvx2izz4UMZ4wqLL9KtwDP%2F5UCN9GcoPSpeP2OyJKuZHpRllsDPTVxquOGbtfPnyteg%2FJ17%2FUx4JQ2mv65omUvChBEP8wSfVbaeTXtTSqmB7%2FPbXV6BJ%2F%2FD5CUc5MSPTWueitgg7jctVhvvwzCPWc537fLx0gYLv%2Fs8hRkax2feJ1teNJ9mugHVtZSyOO1SsI40MGLLtmbygvEWJyl9vh0lWRh9ok%2B3GIGuKsJdF8imFDszq%2BLOvXYJywT8SJ3rFFaMbb7Lz%2BNjpJ3vVyS0VyNIcZOsXfKyt%2BerP2hb44f6E%2B5xrw6Mx9JTZdV5%2Femmpvp%2FXGjNJcF5F%2BNj6kMEU3QD%2FdCk6sp%2FEEL9gPUVHIW7fsbuTT9p6SS2SPujBKILPyvxF%2F20HSamBwuefpx1yXGHtmdccomije9YpedbSVPBFYHMeNP4uULtCrAFP%2BubeWIYtoh71uhwIbYCEd4x78RwNqzjMfHQCtMIExrKu8Cw7PUx15%2FM%2BYz03XpUhqVZDHbsuUJqbKKF7wFdUWzDuLcZe7kaCF%2F%2Brnjbzveyw7ly42G732DMbncak2xqqab5bkk0wjVlT41qGjWkvxWoYV3sE%2BZYCic0NNYsYgqn3CwnKWpZuoyct84AYXN0pd0ZI4cb3mF1lQ%2FTmfT9cw6OO%2F0wY6pgHucIjNEhkQQ1RCM9Xcw1d4YDluqPZ0e86Sfc%2B3cL9jdHK5YW55MP%2BoJhtYCv1cRYEBpyt6UmK64fmCDZOOJ4FRGTF6JfaMU%2BMSR0PCU0bslcrTrquL%2FGdyhZapX6n5h5u6pOM3uYtdMFQaYoTkmXEHcBTmXPGrkc5sVPC6vJiWXnBd7gzfXsnN986AoNYujUgwFs1XGLSW52i0bCGTywcrx2hHRtpI&X-Amz-Signature=7d2cc166e5314f78ea30faf9b2eb55af38cb6e7a5b5591c75281444933479bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=d0d1358f946ac1c4e4036d00c97ed76d2012a00ef9471a893fe942fa0ff72832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PA3G6YV%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIENW3ZNRUwpmFfPNLEjL00Oui5qw23%2FnsYslJsZUocsUAiBKeN%2BUfzrla4SlN1crm%2Be7JWVyf5UEA99kjWB00on0yyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKWflUDbYJYL2C71KtwDXXXsG5ajBZe0k7IN1Nt%2FQ3cEUUj4%2FN2AtQpmllmCavl4%2Fg6RwF8pA701zvKwJayKxYKoLFMDK7UwDOBAhjOlCkGuT7mKwgE%2BUap6a0RtAccZVViyhuxntnOeQe5OmSHjCHGo6zuFQ6XSuR166yGICK8Cr7lJocVyew8Zrs8PPaJkcj%2F4pql55qvpt8cd6WDqMhTms9dIwufnVD2%2BqmVXLRKtU1xCddQnQaJpHs%2FQQFEooW3buIJTMQdFXzfKoHT5wpDH%2FrL6Z%2Bq7ScyIKtSTPs%2BRhXp8hmG8vPiUFq9R4hJMLsvFxy9kMoJOQLN2N8T8ERbsK80p8aYpA3OrF%2Br7y6%2F1X%2BbvdFjQMMwPecsf%2BswzNR62%2FboWPwdRmiILWxb8BM4kaaB3g%2B0kAGYn3l45pUXbP7TB1VsouhRells5%2BUChNHFUGWXHH%2F4shy5Opmj44cXTf2Y3LTbuJLVkPvEj%2BKUnOh1dG1DATKzY%2FRyUCwA4%2BCTgyogn6ZiAOuL3wAT3y%2F4Ztg8m1rUG6HFon5Qm5hdjIPSlB6eTWhtqlPWclaKd9iYlFHBqiiu5e2C4RRcZmLLMJ7zTYziddy5s1dKyuWv5OTWWCH6ip%2FeZiK7PeGs1MVXVm3r2%2B4h9Njsw4uW%2F0wY6pgF2USSqC969OOPt1MmbioCrgnIkPAnixasqC%2B3o9Q1pn4FVNbMGxzDUJHkscFLZaUoE1t9Qj0VNUjR730Csw15lMfhtzn2DCNWRomM9DcgVJY9eyOSZ1xZ9U3HPTutbkuHPMmchNytsx%2BRR6NgjD1WAF%2BZm8qfKEpzgaIGzngsBGUaX%2BdM7tcUKqJgn1YYlquBFuY4zMTbstYm14SWIddv%2BWC9ygGxQ&X-Amz-Signature=842ddb2ed35b3af4b0c4d051cea5b611fc3eb64c2472842510fe1e80d8fa867d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=3d6505c12a525cc280524bfaf6ed46acd21103a3f0153bddfa33ab65ced7586d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJL6PHJ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHfZjgQtnigwQ1VDLzWt8i9UHork%2FZZhOQhL80HpB0Q1AiAll4kAngWgt4bwsU4f46wUKREIZ%2BE62%2BTFbu3xsosvtyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2o0%2FuuPQIZgLl0B6KtwDgfGY45AxWOvV4USWgglnxPxfF7bFfVLftKIaxw3MsGKWqy%2FpCg%2FKlGS2zK8OJXoBeKiV1icOiXDsy0ExPoUA29woX4adBMgpLrPzXlck6uP0nAFzgPxE8xtPu%2BsIbshcS3drOTyjzGpiAfm9na0TfTyLu4ioAiJ%2F4uvKB6B%2Bs%2FcD0z0Jp7U0EBwfjlzV0T3p6HiA319AZ7q8GtkxmjSGIu9jwFR1b2OkaSHQHGUvfu5r%2BTJqHtywT0O%2FGpg8huHVLyuggHmwo5Pj%2BXjTDcs5S%2B7G%2BqWxIn%2BRtOnps8jerRs5zlX1ZqH30z8QIf51AersNrtYZlV%2FlzRuaMRaOanUe0t9YaJc7xolNxhb4nzggxbly50w5rW%2FKpGVfHT9B%2Bo3gBVek3Q9aUEWBbfRSDJHVwLB2F3y3CP4zKI%2BOFbMocQRcZ0gafprr6p2TPJTs7sjmf5GujmS%2BECYi%2FJUtjSuPxXB9JtfNX0IdrHGv1%2BPOnJMcldYaa0ovvXX0LgiRSPDML2BK8CJ9biwuce%2FJsaGEm0sl4rpISZwbduBPTFPHs0Nx4Un%2FKRbIfM6qTvEViDPxOXBW2%2B2%2B3P%2Fewz9jM%2FdEVe3%2BWaLHbf6h4s6VR9GRMtBtqKsijyj9AQaQyAwnOS%2F0wY6pgHIcJAU%2Foqzi0McruopHlmiHMHXH2wSe7aVaa6J0aaeKZQr8vat%2BCvRWSBo6rxWsmQbpfx9E%2FJFZ1UYQ4M5teMz0HFVy3Sqn8WU9C6WOLdc0LX7Lk0XQIQdsTSlDIOK6T%2FObSMOHBDEmPgowQ%2BVUUtvkyxrrC%2FB%2BUgKMT%2BZ854dKei7XWA4N5TVg%2BegPrXuQuWDj%2F8tkz2gwsvEK5%2FFTZm6koeYLqkX&X-Amz-Signature=2351b82a83c21c3e7f1fbf8e050c4aa61917f36edf744b8e330cf35cf560c1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAA4YTTL%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCZe%2BJEmNfV9KF0kvT48GN6n51%2FmVe2%2Bn9hmy2qhZOKQAIgCJlgdDtuW4L%2FvYqjh2rTNjNRg5n0kxN3yV%2BK4rWulPMqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BpakozD8%2BoEBxsGSrcA9DsdSMYTI2XTEeHvOMmE%2FXiqgsJbaC2BArYxpHt6IejJJTLUd8bUAg0qQvBMrIl5jLkRmiEKy0qXU4%2FEj6JWRCayekRPgpetWqLQKdrXZfy%2BSjbIvmoLMMYBdc9uqLv%2F50HMzJ%2B0nZ9S5UhkgaA0yzWqkDGRf5iX3Dka6NAACNKOjAnHt6Xbp%2BpYngmFXxoRAvAPmSg7PggvPHWlRN1M3Ep6g2mkI7avBCQzvSiPgTH3n70a1G%2Fv2kcGDl63YIHaA3N4r%2F6XmdXJS9RWX2DHw4CW%2BOO2CXRGvFg3AM1xjdqojZR8nqBhPvNRe3GFV3%2BhU%2FW%2FkYPbSqhF%2B82Lr5th6D9P32r1H2nPuJleLpACGiOHCnrm51EZKnjM1NSIctY4CPYcNLvPQy1Yav2QNHXxp8yHFudU3u%2B9CNv5H2nDKOobFzO5JzvQIibLZfeCHQ%2Bw5Mu8MqWCSFyyPgn5Mr7CzKUJ%2BXMYaMKch8mJRdLzjTvqPx708YbpMy0es5wK9BKa0sCvv1EOJRhh%2BDIkS4dtMZPvzYQNf67Z%2B7qBdctf19Be7VaCa4Qv0BEbUDNuTpVuIEUaiGmuPRlqsollng9y59APuOH4JvnBXvJqzB155RH%2BLBjOjKInSdKISx5MOjkv9MGOqUB7we3DYX7lghi0CeYQ7yQl%2FrbfWhgINFLc1AthFzjWSeCn3W%2F0EJF3O0G5GxH2yp%2F8Z5G4tEbKsmiJpQFX91sU8AtaJPqKH4CmqpaYp9NgSsgoldwxhbCUpFQo9teG8zPhyAX6jl0k6J%2FHIOVLHBc3EVReqFWMNveGxRqYqlJOj54CrN2coyDqwZy%2BbqwczrwXR5CGOaqyfcVt1yk9%2Fn1SpEoFejN&X-Amz-Signature=f1ed64edf8899c86505c84d187cd6f22e38da28dd3309be1e757ada3baf60a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2IGNURJ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCy99GTHT81mRTodLbAgr8JK%2BHzBbYQ9AyLk%2F8gmCzjLAIgSeG6T8bu7rXhkZZcTkAMwx5u2jSvk3q%2BC7PPx6U3c1wqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9gCmMi8EthZ7IRkCrcA7CGkLlrN3Z53ruqvQHQ8IsR0zZO4yxsdCN2OWShaTwgG433t31vY8khrCqHppkZ%2B8jfHe2hj7DneuZERUT4TyWSuoLEhmJEV7%2B9qsXbOoUrAUkUlS8W%2FdByi%2Bms72ekE3HR4ZihYmVTtSU6%2FPIMeSoXz41js96sXJnEeEzn8HG3tF%2F37V9zPpFy%2Fh8%2Fy0eayIxi6n%2By1UiNmrwaNLBv4qgSQM7tlkG12%2B8%2BKyEBUXpUDkzMURK1FSS05lnDbgUJrmM%2BNoeUvVX94IFLhn03HMXOon%2FJfFEI%2BrVM08GhO2aB0UoVhticcudabDfNg5pkU9E%2F4HDUkThZi5jgq6%2BDNTydB2D1UNFjlcQD%2Bbb%2Fk8huJy7iYDD4reDS68cyAyXqJQq8E5JDubKQLQyK3W3nlEGI5xdPVFoMZNwAVpT9i%2Bn21PqapfpRDXMgMbrPOqxFHFOD0s%2FFTTlBs%2Bx0e4%2Bwm6nOwBdKkrmxs5x8EFmD2182KHBcxZfGzO0Z4%2BeBAtxtBisoKjek3nIFTYe6M5exbTo%2BeIV3OQHToz2E1kwk5322HA0p7h%2FOlDG7QN6lIuC1tlQRSaHXQnIgq%2Bz8zGoDlRSyx49Azl028HhWDrImEncpNRgs6qhEEZWPkzgMMJnmv9MGOqUBbUj0ry6ytHfqfGNejtSgxYeRUuSn9MqobildLb3dk1tVxtJibfFV0lDHP0b4UFDJom0QMZmKgo3f7%2FtlJxklBCA9H3bc%2BREFFJPHbuX7xOSEvc4z47r2PLiQpnUohApn8ncGs97f5as4PpN4UC3SBbh1fKUYxFPPlu71pHvlUPScAe8%2B6o4X%2BVf9xglobAabJega4OqgYFMDm3I0UQazOej9t196&X-Amz-Signature=65f5941f7a025734843d18df887af23425a8e0cc09deef3e3fc0c2af992e993a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=46fe2dfc6877dc050a6ab8b4aa91b766d0c96af69d47cc83c0f56bd61fc7a86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CWS4LE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFdSo2RkVvrqY20t4J1pCd2s1ehGpQhRK05n6VB%2BXB%2BHAiAjTAB2%2B%2Bvash8yYEYlcanj%2BpP4%2B2%2BpT94%2FvK%2B7W6YtfiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsGeJWUYsNlEJNn1KtwDvqX2mWTKXRasCjzdUZb5hyLsn2M6Ml7lITnJrSabf9Oa9VHrq5J3hZWQjn8LTfFEMCw0Jx7KJ4vIghF9dHePblStbxiYQZQLv1TetfNWgJozxt9SpmDbHTcsskxVuieTGhTCLtL0TR%2BJmNbhOYK8A2or%2BOUaW29sbt05Qv%2Fnt1EV3l3QYpc%2BRPnXQc4gdgA24EOdUFhT5PSxcFGo5vWQErQluTROnbCjBZDweamkWLc0KMbND4OlKQLkIByUKJBgz9hDHMzPBDKMGv77sSWuUpvRk0oeGPsoJ7UoLaiQvD7q7U9RV0%2FQgkknsmvXkmaQKNUbRn2NzmGvZ0bTMe7zpGQmeAUEtWGUK%2Bl7CgVs8xZywXp4FeMoGqSomt0wunbC5IjL%2F22b%2FZq4ji8CgW0NmLvtFaNpcxAjnlAHjnDaY%2BdMQnw3irPdwd%2FAdw88wSUxx0%2BheXzeRjoVPlEwPlegtNzQ%2FaS7VPfdhcUHYzrwAeSmqV26%2Fbrz%2BfLsmvf0JruW2AtylxA7Rabm4B2hhYCgqZPhsTTfO5Yt1dHQWutTYDCeVRyvBevy3cXOLwjWg0bDXi2CYGfrznQDAvDT5JfP%2Fn%2Fra7MvAS1Gkt8TEWI%2FbHW8VcQ6a%2Btk75kOdK4wk%2BS%2F0wY6pgH67%2FoJR1hUhomkFguhMct17gA1y0U5J78HeD3YPoPaWguislbWpSjRiGXo0iGknBigr3m5XKiFc1mjjuVC%2BVleZnzhKedpKsQlF7kJxhSGbPL%2FBcRlxW0hbrDj7CIeycjjnj4UG3Y8xGjrOyBzEadd%2BwrwRrcsSIFfDfRprLgvMPSGr6owa5pTRgCYw4U0U3QkeLl1HGnZpEqi50fOX%2B1WHzXMFRi%2B&X-Amz-Signature=2b010aaf1f09002edc14e1d5ba56837c10501e4d51720c7808de6bc22d151ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=5e3e12ed8fe2fde95a6244d7e2cf582012138a0887ec4764cad9ee7efbe8b8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=eb1ccc298bb7b3b919e07c5535becaa4811972a76c74c66e915cdcfe1cdd8c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=e77fe5d716f928228f63df6941546301c2f917b9c315e91aa1a51467b43a6478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=35318e1286ee4d0cbcb02ca45a3d11a83ff8788443abef59789344e3fd44b22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNY5T3RJ%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEDQgegqw2s162aSMlSfiBnyt8Rn2rz3fNdSmqxYGJEAAiEA8S1YBNedibMQUHstJVUxjdXHynQLjnsSrkXW7jVM3eAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLd4isfzDmKOCjCDJircAx6fYvbBm%2Bnlp%2FUP2qThB9uC%2FEquCXldLAgzb1moiO1XsJF4O%2Fkk%2Fo62mkgDL%2FFAGrg25D0lgYVE0jXc1ZU5ex0zHW33drt%2FBZK1xh6WCVMyWB5U9v8rpILfH%2FSlXp5eOVg7NSKEgwVQpq1x%2BeZ3KWON7uoj%2BPKP%2FfUhBOeUbpoVbsK5ieYxAWw%2BNuJSs0wgBLwlHudcq3gFOaZj%2BaWwRkLhDjypIjifNGyuvZO7P%2FlC6A1k4wAmaYF0o97LvIcRPk1PDPtRPFt6bdguLhg%2Fl45YYo0sKIz5OXVTPItoX64QfXCmpprq9wKuKSn4gHWmkSyfQUaCBVPUyaqktbywcQqgvW9goO3aTyk1Zrs4LCHYzuRoVGlKPJuS9Duw0yuP%2BlWUV4IDLRPNc5Tw%2BbHlh3Wc4VqefnRDaFAGk1ynih9xDkiuXBcXSQ8XJVOv9FI2bzhhDt7rPnZ3owhsJbUL41%2Bz%2Feoj9FeW2Nnx6KzEI6lhGJNTxaZA9eyTbdL9f26yE39t6fsKk%2BgvvKAGsTzx%2Bk0X90NABwJw4gn24kbGity1ww5mw4TClaIfWIWT1zp0tCQlhtNC%2BzqvE4EAPqL%2BzMSvf0Fk95dQByMpZiihGkBdyMQ0Ic2Nq2T54nJYMMjkv9MGOqUB42xvwDSe6yij6PgEntvbaHOX0%2FnYTbR5c9fibwrOtDz7gtLzaJ9IEtRbhaLPAfxcYOfPglxppMwdDmcP4TT5dc2kYsYeHpNEIOa6o4hySnRcQdUlMMRm5USVtMkiThu8F1Cn%2BOP%2BAzNlTPStOQi80PlgRlmgLVjAgIgE06dhbJd6t5lZE5Jyy9tyEYQG9%2FT78I9%2FBYJfiE0tTEsbRJgdNZjmpcg9&X-Amz-Signature=8fffe9fd9972b4a3ad865408cb10ec6252d7710f03229937f54922cffc71d06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=fc1178a042447a25e03cc6a10639375e660af91ada4b7a50d7585241a0d42fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=b6da76e40159947248d3c5e49682139827181997da282985eea47218554ca4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=c4b82bdb2ca2e63d13dca3b421b2a9066d98a9a3cfb626806409466154df5dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=6cfe0cdeda30e0f81218f778574f9f6ab0357091f35a73117471fe4189500518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=b61b1d3396e658f45a020ac00aebd389cb751de22234dc6b8847fa6aed8b55fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TOTSB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHBOQJNqszgbU4ivl47Gct7nkAG67a41vgKpEdB38StqAiA0DU7J3GoB7KZZdLxCYiUm3MjmkImWjmniw%2Bs8xmh4FCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0wfIZAJI5JRoceloKtwDtsmLT3ovHjA3yVWQdyKxz6AfgveM%2BjPHE%2FsDdPIYA%2BYi77%2BUcQy%2FGs9SYdkFjDYVwmXqGssG%2BlA9hECsmvbKX869kLt5DMSfUX4iWJHBfbFqWJSYGFy%2BBkEi%2Fec%2FBA%2FR0b3FRJFwbetdpL%2BKf6IDiy04X%2FuiOd64%2B9u5OrciVNwcQhuQXs9ZYR3OzNJBjg6qPZEEG4UCh7%2FOCtEfjh6rAmhxZWMQ4EJWpvTJ005OIXtBSb5V5fxF39yryJN%2Fh7V9rX0M1xL4xPrgaTy10a9F6OdEjScSeX3OBKDuhIXuUoRr5ho8UGBcVkG54EAtFRFywDBkylcVffL0mDAPLTWBG%2BejIzi2YtSxgpm%2FCIkGDI2nlN1oUrk63Guy5UQWNF3HaQ%2FhEmFf80D5nboNKQSOgZEt5%2Fo3Tm%2B208Lsk8aqameEWlr7zrsT4R16RLs9Q1rKR4BzL9ofrLg3%2FamjwJFlGsdXdCZT21nCO6NKTRgT%2B%2FTJ79gV3yHrGhwg9ICjLu9TvqGLo5%2BbCEReIZA%2FQNPpKZujUry6x4JCw5HN8MrAharhoCvVg6%2FQ2j0T9KmsMoO%2Fzma7xLT1vx7ahzCdjHrdzebndSNKbgCtYP2VVsw4V6gdCMawTAXWIrtEl8Mw%2FeO%2F0wY6pgFNhp7DQvGu124QJS2IFzUAhBhf1RXgEEi9liPZiyDv19EoMC52Y0M%2F%2Ff3x1w1T2z%2FLjdeZ3Nlnc9h2lHl%2Fjd8sCFkWPaFeoyA7Uzvr%2FMEeWuzQm7HqHjwhnfi1PmIJQsPCQ4ASqmplZWAmL19r%2BRau3qljO5IbOd%2BKpx%2Bec%2BnlFRjjjF%2F7Sswovi9MbTrAfUyeHBpACGe%2BNlj6mEj8dwX4DBm2oa5f&X-Amz-Signature=f9ea3823486e7141ab438308bdb5728f0a5988e6a07cbb934b22abf4967c0d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


