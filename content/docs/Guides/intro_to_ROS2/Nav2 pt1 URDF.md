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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=e560d9c6875905c797bd30e3362f1351307083f4c4b1a34281cd2bdbe041b8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=7bf114c0eb6a489262710ac91fa2ee366370a10e1bdf4dcd46401b8f1d8374e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=5d122a1eb87b543d09d76c19b5a4c09164c2cca3fc9e032a4268a866ce53a89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=8adeccbca4d07230998491c3a54a8a357f92af68ee74de7e88f665984d2f58db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=bb79f453ec6ede7d86b9359c3e7e14957fd267b7ffe15d06394f5003094818b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=5d23352adaca11f52d0b3f356bf29c3b5ee2b5142ced609fb81ef444ea24f3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=d8e16a3e832d8f647fabe37123b41819393285456682cf298c7ea4caa6338d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=4f7f25e636774caba6b383164f058b9f8788b709f7e44d152ad26ed5d1f324c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=f8f84d5896c1dbe55c52a2619a27ec01c7df9421e7e8f210b0a7b2ff1319a2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=4d21e19fedd9204f62a54f4e1999c073e63ea986398bd6cda00d9e5a19c08ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPQTOSW%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0XvsFrhAJBjsyyHZL9h%2BliVTfUXkv1wggib1AgjjE4AIhAKdMGHacU%2B6wTe1oJXvpj7sGvIdGiphmfpt9ohHXkKbXKv8DCHMQABoMNjM3NDIzMTgzODA1IgzFD9Q9IhuqeKCuNfwq3AN3kj1qdAeFB1SI80UTc4NAe6zViZLxo64kQewdeDPFdAY4G6afOVc71HlKIsgISskapZM%2ByGIlj%2BXOa1p%2F5kPhvnumt6GPZmnrML4f%2B46p%2FWuviPr9LLLcYi2sWirMR189Z%2B2HU4pJQL%2BE46Zn7r1PSrG2ZCMvjep0Q1CrARhVSh2mQn6GaRKheb4VYi3rYpY5yAPTK2aiywZbTmFM%2BbSY4%2BHCpepsoGfbim7Uek7x2I1gEIiwsLQvZYQlEVWZVFFtWZPd6zctsKi7boxbvY9jnz0OsMFisl%2F9%2BsGszRjiSvQEMuVfLsRP%2BPFI5Wj6d%2FkYnwqqxE0wdOEThbNgRMSzS8pUZaXLd8vSZPv6%2FZ%2B3ZwIA0HQtHdIW93EAfgrHW%2BZcuKClA8rHYCtbsviqdf1ijOrwHxwMHhp015l92h7S9vL6tIqaPncGhgfLBdOnGy09NVIxMASSl7Ykw%2BEOrS3lgPNloa%2BWRzRdnQ9aAePzlSffP%2F0vqlKNo0VVhdUuXh7aBOdGEh38aDF%2BNgTQIrGE13W7QGkSncbPNcojIEdUcaLM04nwjy0c1IyoorD8BdpTiVpZNxb4CrhhATfIi9p98%2B2Z48CDoxEBcvotNdZG3waX5BuU%2BWrZBh4FkjC199PQBjqkAdV3vHraFk0F7j5wGjHtCTUIM3NAy5N6SGjPFwzCqFP4dbdRSl6XoCPvX2ovmt8EUyb4jD2ciD7Kcc5EiCHdjjTxyfpunGZ%2B4KxF9joC00gZ3Rz1sW0CVtISe10bU8TzD5TKDW9pJJ0N7iamWtFLHjFORrmIZ34GjAKLsRd8AYMj45o5xWBuTBYJfwdnZYFN1%2BXVo%2BfoUOJiqs3nPg0yALpJ7aC%2F&X-Amz-Signature=50159b9df7f5b5f32fba79cc5858519055e269088163134f29c2df84b0647589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4SCYG7%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7NA0615km8cvpZ%2Fgt7qU2hdQMY%2BKiHB%2FFVqYz258sBQIhAP1IbEtoidanCEcRcLt5BXaiAQMb6zDsls9O9yxaXfYuKv8DCHMQABoMNjM3NDIzMTgzODA1Igwj2h3pzTkf3qKLvFUq3AM7wEBzsXNd4YUHnhU9lZMws6PJi51XWCjtBjR7wTNCyjRCyOnmoz3IysnKBrx8F1qdiTim2tuUpAk9dCPe%2Bwzv%2BjzUmi3lCqMVg2fbKMdsAW4lC8NsszpNOrBBh2ACxEKg2zkpJllo%2BPhMve9ukqMVJAvHBudnBVEVGrT2WM82URJX79nwC93ynNUSidn1%2FgpW1WKNj9UnbJ2j0oJVak%2F3gC4te5w7vuSP%2FrKguIk5SQ9VxpCLn60kUOwYZjZJsFn7V8lvwZKmf8qr67mJyCrLA0zsXK3gQ4d8PDl5wkmuBukT5Prz8oWPj6x9mbLJbH4nrO52JiLvW4pFn5j5PaSOxAOASyc8h%2F%2BNluVUbssX%2BxRz473XuYNsv2O%2BKYFL4jRRwf8vZlBE2pNjZLskj%2BYHclMjnxmoBJ6BddWKJvJOx8we%2F17tBOmXZ4YsFGe%2BkwdbwNzI6HMpnrRZVC9JasLip0cSD5IWnl%2BND9Tu2KyAcEWHtMEdcmiS1eyK%2Fu5PG%2FxSD4i9SM2BD9%2BXOBGtLyh2uh934iEcYIXjJoXdtB8Hrle4uhmm2onjGZLFTMwjAHChcxiC6Y0%2FQ%2BIboLzhTIYrz9GCUoQg75aPnjAB7uYlqirD6R0G2prXEiUJ6jDJ%2BNPQBjqkASxW6UY6NlVNslt5Ir5yVJXaRB6%2BFP4J0mKgwKudsJBFb3%2B4284hEPCKPGAuoIws16dTv%2FoOAhI%2B9l26s6wJDqPfh9ciniCAQFwiFyVSlaZLUJzc2FAOxyHe5Sw6qXJT0WU32fmtIZFF1qXvJvt%2FFw8E69OVYc5fhA4wzMYaWFoCp%2BMZSsLrh%2FBTRodBqWxA7CQNWS3KXntDQIHaTqZMTwGl15mK&X-Amz-Signature=9fa7fb9ca8b4f9e5831cc9b733d09b35cbbf046369b18e1c1636549b618b3bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2AHNKP4%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzEG3drk%2FfEOs%2FMYQq1yw4aN7rEOQvajn%2FfY4gcUjTpAiEAj7jeLaQbvLjmMjfFnH8mXOLnzpZGdEK7iQAOOWxqc8cq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDD5EXhmxZFpmWw4gsCrcA8WRJYAw1iYg0pXkKkJMHPAwnOqJYS%2B22KzupI6InREeTITE7WhSmLCwwjJt3dZYcWwgKThyp2b3EC4RFP7uKkq0GmSCQUUNlPt5IoQth6xjybHBlFb7eEEGILeOQxJIJ1lyVeu5kw%2F2wR2xK99MlgFcg4N9nfk6hD8MFnXj7tifBMn1XjwnlyXd%2FaYL6Rjumzz7HQYxbl6WNPvJwiaVxUCZnLrqTbl3Qr7HD454x4PB9w98ysg0SRomnAiVcFnGSe38jDBNM8DpAy8CjF6hQ8qwt1g7nNWSQ5LBSxPVlBauWYDhWf7poqh52Q243DkNV0%2FJIIjHV7EylAqIocIwKSFEavX9TxyemacKSiN0zEqrYuN9mIlkKm5OeoZ8Zz0vIOkJol7yyBInGBqD6L42Q3l2j4AnbGmK0Qgj6ZxtOv4uhXWazh9fCm7iXq7uJ%2B3D83MORgsXYM%2FWY%2BmehRKQJ%2BzgmmDaC568IsagwqdKLKvIKyETCfU9zhlOpUypBWtRP77aDz3D8sCRRVhicXJ%2FeI2n7sn9LaI%2Ftpg6ZGOx%2B%2BCv3jMKWgjHkIQpzBDnT2DZS1tF5v8RPhC%2FDjujHEKFmvx5HCjoRSgv26TmF85mTg5Rrh6%2BKqrrFkFkMYnUMOD509AGOqUBSzaGgjvFN%2BxP30GNgRh7Q1gF%2Frn3%2BDKsI8v5zfHnmj7D9LA8ZdEU25S9OrMnFLpO%2BXDFPYTGbonYvRLR90ynQ4XbAGTngGKW6CK6ZD7EtTVMJ9QQcsYiSfh5U4GnvltsdAau17Y3YM1UWniElPDax8USrRd5wwi27mx3WNxLTIFL5foerLilxt0UzP0UR5TZzycY%2B0uRXGbP94BEfoRaQD%2BknlOh&X-Amz-Signature=ff45479e22402043245ea66e845970908f189fb4dc4bad5d459b065735bdb23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=c8e060cb077678fe71258e2e9ce737f59c9f7eb1eea6be3f5f3974c6e673e80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKV4A3W2%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1Cr4na%2BigiPPnRUfC1LrYwgX8gPl7AOs2%2BqIel1OMMAiEArNSeAqPzJNYeTXBE8NqrGvb5%2F88EdXJVmQvUzYC5muMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE0hQPhxpGwpvxukSCrcA4vCNG4IDD5VILoSNlHZlTEu0lB4PqEZTxu3ucNiVp2VyeF8XVPzTo2iluFZ42GK%2FPYrMFh6%2FlvGmJYfpWRXgoeEHKwDtleht2bW%2BXx2B2b2UR3RlJx%2FJw3zr9FCMu8s54uoIX7Z6GC4sXZh4AlGPHE21DHLOA0%2FUejmMc0dCaA%2FCdqEWWZ3cGzmXb8V51Vukzb%2FRvg27dcBqtxaG%2BD3oCur44PDaPFtS2OqdMviM8gCeQsruTYqVO7zaEHJFr20TK4%2BVlgST%2BGge9%2BYJ36veMEv4PNu7kadc97jKn8%2FrRz7%2FsRNFacYDPjlNzgkQU3HcvLymG3Om1ncuPxYkqlueS1U%2F%2BEcyojjy39kg92Wy%2FUU51XTNw%2BM2%2FXhbjlFUmhaaMBGcEMOdGNifHYBIK8v8ME7rd3VtdpRWkYwuVqzJ7hOX77cs2kwiBkZatBkLXTXyHZkauILLihonkJ44Kiv7BQA6hL0UrbnTA%2BcqTDKKZktjMrOQZmqHHJtSCyP2zIbY5o%2Fb4J8q44U5mZcnW1LTkMviC3IURLjFrC0qdkOltxliEgvBOqzlM3ZTVULmCI3Kj2ub5yad%2F%2FZ%2BNqcGx4Nt%2FMO4bL0aYZBO3fT5c%2FhAYkGIFJvo8L5rVmnF2o1MMD409AGOqUBs07h4l7bT2C3TpnY%2F712aHdW9suMIIXB%2FrCvopkj8bt1zR03eJPsTbfATlsjFzlWnA99RJ%2BE7lVs1b6QlPT2oXQZdPDyFepxRXpvsOgSQdClL2me3Ft1nsk2HRhNAHtGCBb5rbNnbMWGCuvz8NYN5Rs%2B14Dsm5m2N04dvvljhWGi6FA42w9bXFSh%2FywS74LARVRNEi5hpfqr%2FqHAzl%2FeOXjYURgq&X-Amz-Signature=232d5bfdcd8d2dd9e78d9dae7d5743753ccf42198f2329b4d15149689c968ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=9c0e39a2330c34caa0af6d3c150f43b592978591c217fad3e0409c05dd93706e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PP7APKE%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS04kCIJerrHHirbNVVzfk9uXJ29myNZXbXnonS5QxDwIhAKaZc6ZkEfgxfGUk07nmr3iPoLO3V5etKIbMJxBWMrZyKv8DCHMQABoMNjM3NDIzMTgzODA1IgzvbZAWBjYRL%2BPHSdIq3AN4b2lha0IphhBkFfsSIRQcOPvHdnYqZAWhZOB8kva2AYEgBIMDw0q%2BgNGMKmbl1KlYgl3y%2FyOfBkzkrqjOpgGrLvUltgL6yjtcXGx%2BBk0cB86uCBG31BlllT1obVyCW1x1pKFsNbgrV6%2F2fY7fwK%2BqpeToNyVGY9ckTEm4MZGk2LWzrPR0flV0TrKOnuH%2BBvchBHsOCzyMHW%2BRTDTmdpcZ1ddFLZMcrIupnBOBSGxGVeQDt1WIdepXgn%2F3y1mTaHn2T9t5dx%2BY9IWxquEAFrJNv%2FNncJCa%2B5%2B8lg3%2BcaDXtmZATpYbbKXTb4ERNQVDPCkj9DqdeRewHfWjknDxQxnfKO9C7UZ81jilr0OQnK1j3vSCDD2GTrkijdlp7xlZdqL%2F%2Fm0gq87jK0IK0XNl3mmk7bN7Woa7plzWP61dZBrBHzWsXcyVhVljeTybcXKMA7O5gXzM%2FkbsWwNWFYnZ7RqKRyiChjtx7RhlQPp7chOduMKCC%2FnaxdlzVtOTNpM755JJt2IVYshQP2s8m1wmxOqcJ3vLcSKR1zdY%2Fkk8XQ6tAWEECF78KjNFiK6vkXmyRDopobnozIXNIe3mPD4aKYODQxMNo9ktGa42lVmgayMmvl5lemCU%2BQpnDPuuGDC299PQBjqkAVMJ9XBR3TXaloBA954HNHADzRgE2%2FKz0Q6k1kkNf46kBtffmyENP5wVvGvyCtv%2FouSWlGh9Tpeqd2CRVOy5F%2FIplsBxEgyZXPbxjja3b2H%2FCXvhV66znO9fgAA7H8VG6tQBQiiwQ43Nto%2BvNMTm%2B8ZqV7zqK9mLaVlKuDAnF9G9l8liwfHBkg3JNN6LHGqSQzOoDzi%2BY0oqSmGW0p%2FhGiQtvXek&X-Amz-Signature=67f7c809d1d2668c870727b9731b7ac523e9bb0f5c950c30572b45acc3585213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=8b3f04ae8bc69edbdb96d56217956e72df9c06cc61b901ffbdc4eb60abbd93aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCGLDQU%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWXGutCfnXcM7x0CeqGvEyyLY5sxyktQwp%2FhpsWd6PHAiEAtB5ErFD5f8lqsyGKMhHsgDQTWWsm9PPYvyn3ol%2FvP3Iq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLNmhP1OCYGrxr31iyrcA3C0P4%2F4JvxI53WJBlm67QeghmHTY%2Bpfgk1L9cGLbfwI5PCzuWJdasaMW84dYNq8Sz1b90qiC3FHa559%2BXocp0I8C1zaql%2B7VpSQhCoRPxnsnW%2BDxweKWH4MDebSIgRkt981ci9fCKCF624pb2NZKP6QC9BHMOFjPfkmK5teFORs%2FvAdSr4dyyvx%2FMViTbabCpMgOeqZ%2BciLVEFU0LI4QQz00Eh8SY1MBm288Lnmq%2FWHrzTiuM3zOfkTaJ94yxuybZo6ld73NQXxI2uMe2ZnqtMAYEhTwRjJEBX2%2B94WfTUgaNrxeC83nsYyIREOK0P6nBS4YikX4Bbsnf0CqmdmBsvzFs23%2BwnQMZMNrmFBnMOv2MG5z5JNHfxV76SxMuHeltr4cjo9BrFLf9jJ3wEq2XLvYp%2Bfbhozz900KAbifQ7YF7QbI44%2BUxpyQQkrQZb%2FGc48WezM58wE%2BvMly1LnwZ3N%2FQPPP%2BvJLX%2BZT4OfpTUMD%2FadoVYxFtdRWazfRr2mHqEiTeODcfuRVdL1SS13106CKGHX%2B9Ccl%2BXkkUpTc4%2FEOWn%2BHTAEk2gagdLqA0pzGw6h5qEFgpsMWrIUjcyFjvU6U5bRyBskhiGnGDdxAuEaftm%2F%2BnyqNLsreMzzMLL609AGOqUBvNfl2qX4c1oTNe6IFwZTn9u0%2BebjNjifCjLssMXaVq9YhN9HXFnAKU20ha3E6RO%2BGjb0xphO3LJTu8T4%2BnZXa4L9CTuUeptiOt0hcBePM8ZwpBjMwz4ik%2F%2FpTe8xUvQ25TYLXCd%2FrgATTnIkc%2FIJ45zYSJWLbvwDjGOuo8uQXTby6tD1KjnQYERKMjsZ8K2BYM1T53yNTPjS3wQYjZ4bf3tLaY2o&X-Amz-Signature=dc3bba7307c32531b9c522238772a2146eba708c7903dc5b07d7f09a5794d162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=a831ba242430bbb5a39bbfa5376d83535f44071db45f13469e57072842cd2b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632SXIEUK%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5AJ4GatTPbOUesFWmtV0bWzkoWVYh6cKldAwXO8FptAIhALWuAMiOaN9%2B8d87PkQtwAuXnWERw%2F1PwJG3iabzA5gkKv8DCHMQABoMNjM3NDIzMTgzODA1Igx5BH6TvUmSUHSRRKQq3AMgRECYy4A6XpIbynb%2Bn1qWApwTh1e0ad68A8MJvxYnwnrn8HOeJaxTjcnNWrfABRR56%2FnUoh9xjcQszuw8ifKdKXvKpGmpli%2FvjTYRKCxHDf0qmVfHf3GR2fU8ti0GO5ZcP0h4ykbXJPDVYKtttoUTQG3peySsZUgLKvUZ3YkifqUH%2FJMXG0%2BIbUJcV5HnKz8nZMNlmMETe8RqSMd1IVFXKB10HvhM4zbSqVycaC86sRnCspDrLvyejXJmFFEvUoEceSw9zpDsvvwFDfRUURrPLyp55U2T5t%2BZQdMiiKW5MziQMyK2%2BsYYGPpPx3qKmvl2fNjSDuD7TPNZO3wqpjxGgI8XBDFrLTpGt5TvWU8BXV7UplD%2FlXMexYdaJ7jLX3BZ8LckJgyP3iEH3T0twUw9trmE6cgCBF1Jdz%2FltbTCJJpmF9NSEsqgf4M43TVnT47xnEb2%2FMvGDUUbAtuPGFwN1ntwm9vnkgStZMWAyKul0B2ZuMEIHTvK9Qj7eibBrIYW9jXg8T5SeFaZGt6fr5Rzfgkq14o2oYvaciP6FVuZCb0ERQJpfnI5gdBg122qmtcTkQeSg3lmGy0UE%2FsyTw5%2BFF%2F4bfw8uhFvJbKMKoLDe5IgB8Et0ro9KoL%2FIzCy%2BtPQBjqkAa0lS7Tmgo1BFJkP55%2Bosib1VeTlmeCOvs5d1NktIGWgJ7VS%2FQhhv9oVF7tTWA8TStaWLZi%2FgTY1iLBV17UWiR5mt7z97FchTmwAUUnKXpDqi3S%2F%2FkgT37IePXaB2LU95FuyrfRVl9Wb%2FiAeCafnrMaREvr%2B%2FhX7rYFQMYiSxGTNOmLdAw5e0s0IseGr5tO5w06Nis4sns1BQ0RgopmYOMakjBHC&X-Amz-Signature=b9672112328b1ac9ad1e15bf1b0f24ba310ef73181b8df198a7f2c008a26c0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=5be45afda78f4341b08dea4edbd7ae91df2fd006e50ec9a4f0eba4eafe6268e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXQ7GDXV%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3hjpg%2Fe3IKDOtxSslbBIyP5XdjjUIGCbVOZ5WgCqHVwIhAM1u5DcAf1%2FaFj1%2FcYwl1ZnVpJ17wP2ELb2FNj0A3nwuKv8DCHMQABoMNjM3NDIzMTgzODA1IgxsTt0gxRjTRSL3iTkq3ANMm3G1u34UHnEtn41ZHgZ%2FyHnHr1h%2BmhUMtX6v%2BgpQhhHkvbkLxMM4dQxVIbAyFrkGVXQc44hAnNQqipc%2Bxqi4x%2BZqmLoavuk6%2BmQm07wKu%2BpWv3fmZlqpUS6ggzeV1OxCFUAfqQf0xRzo0uDRHQR7TfSC2iOrissWGppUu%2F5eBWXbkcUrVxcC7jFNSYVMrNBIYprNtGwHe5oEHIQN3MkbaVAMSNjXq4OXmLzw24hqaNcOytr0ub1bmcnKHNJd%2FqZQD0At7E6gtCe08WgbTaOIo8ZqsLqVCPe89HGmcUJYZ5c%2BahJJBBCtjxQIeBkOWrneNsBFNMHBui6PbWq511bShTYUJ3h8MG7TjddedqXYHVgqgfkKYlvC4t3%2BSZDXMI8XMTllLtWnpv88jxRGuFnBarCjf2Dw5gdxJbpn0SOQzLKkc11fc0d32NXMApoM5mr5KZZLim%2ByxKX7hTjBHuHmCqh3SqhCTgC8x9QsEZ4mim5oACH0PTisLpB6N3VGsNR3wL0Abos9uXYg7IyVnKMPFz9DY5WFbDzlsU%2BVUMvaLgO4kYBqeKihZZnxZd2eewyFDlJ%2BHdnDwaWX%2BmU%2BLuQkazQGpdf%2BxxR2RfoetsGPqfNbjmVx6GguDx4mGDDU99PQBjqkAYWBU%2BgUrYSSzORSelXFhL3mODyrXdM2pD78cmXhzBPzrkxN6fsdMAaZD2SfZ6MOfi27mTINupocvUuLbZSbCprbLm9ym0zNM1Hk6HB%2B1oe%2BnFe%2BJNM5VehS1Fe1yJjG6P89wkPhSPbjqaFM9jAkaHDE%2FSVqiyHC9CB1xFsNTSBHaqlDMvNxQMH2Scjs7QXyLfa1DwOC9Sl0RFpDXXA3%2FSVXONVI&X-Amz-Signature=b192ae63c4740d5923e46d4675dbb1c20485cf02c858fe0482cb9d2361f6906a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HKT3DRI%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHyxkPOdpJFTC0DDJko8weRUq1Ou%2BGtoBPF5chrSxrHAiEA%2Bo5skK%2BKGV1V7nRKGAniCaQmOB09AEeT1QbV8sdl8uYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAtjnxbiITEx0qIebircA43du7uzgd8sWzMLG13i6Rj3lx%2FD%2BW2S4b2wiUjjcH2r1KwFuH2e5LZxSEKA8OYVslNiD7s5KkSvloOT6H2zBtoMrk6uH3dkRorFZ3GcKV2O95mLEYY%2BSgFIKLoMRNpaIZjtBpHU3%2BcSRlb6AOvQ46bF2U3P3dloVRHwUb89GbXGy44ZedUlmBgcwZcnLyLt63wMxolN%2FRnilhRHfONnHcL%2BoIA6WA13dlSW3xz3YHK3KgsQ5V%2BttROzyJ8aI0I7xffcc%2Ff4Ipcc4HSfA%2BPNrjAv2I1VymgDheCo2M2WxjiE7neuiFbOXd4dVaMw%2FkPE0hDCr39XbPBIb8%2B6nX97UdAXbkoU5bJMOjDYBPk8ZqcP8DWDIoBS0nomqt2Zs4z12fFKuWy%2FRZGX5Uio1bqXQ4PFjAnsF0pdUGenC7SHZa%2FoeAFcUNzbW75tsUt22jWcVVI%2BFIg7BeAyhjImryxKdIlqG7OduDl7k1cL9plQElBhBU4uPg0KGCrZFggsJd7ngBi9ushIl7QL8FCmzf5kko4MwCoXcHdHxvzAUHwT86O2AjWtLlS%2B1K0y%2BJS%2FPc4Pfb%2Bsf8X2stHSu5rKQlVuJqI1lMqkPFB8FmLVnUQk8SRC5DDof1Mlcx4XclLtMJH409AGOqUBT9YhcPKSxyQuM0pzrHMH1nfKihwzm4JY0TrY4iGPwx%2B51jPHVs9kUEuTB61AKmTj4EMxr4I1j62K7cq8jhY90xT%2FbU9PzB5Te%2F9BYx0iB0MqGydE62npvD4MmxZj7W3Uc9IFJskTw0ABuDTXRc6GIE8GUvVLo2I2Dvo4xgSWU2fDu3qwbLMMTT0tEpA5AHnT72%2FLvzUu%2FwD7395YOd2lPutVNJG1&X-Amz-Signature=9561a985f2835f7190e2b2f5b5b8ca0469a116e0b762aa6829d5db65927a8f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPZQ22C7%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxfOZEQOp0Tr7w0MMr%2BJahUwxI8P0k6luDnVErMWicFAiBtyUbnXAkbvMg4SvIIhQJ5GLdE3Z4315RARRD1Y9qOrCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM5RcZC%2BlJpHzpoXkPKtwDBdU1%2BxJpKsQPiy9zTkQ57%2FbecbIQgNqTATI7GB6UDezUX%2Bj%2Bu27gaqSvTWjrMjS6kXs7auTss6rzr%2Bro4NO6a6gm5smxKcxFgGKfW5nzTs1ar%2Bvl1hFMOfSAGAFx6V0aARWgclNuFKdtUbTNXSkrCtLCUMfs2F5qY6JPauss1CNW4u7%2BbuU7mtN18Vn1OU20YTr4YQqzHcE6ES7vOcTZhN%2BY3aNLD2n2VbdkVdZIQ3QfLBtRr1HDe6%2B7dMQfzfWmdFC0VaPNS4J3Ilr8UmB6MgESRf5i%2FjwIJKJPiBrc28BBbGeZN5ojW6meturK52CNxb%2FQTwaKYP3x%2BDYFZJdtcNNTDNkcUOiwhbHGpY%2BpNKCz3wlbz%2FkoH6L%2FoLm8I%2F6x7bUxCpVYbZxcv0Z7QN%2BPwpRmBLNUAW%2BWZSL7liHCumFbV9OytEKI%2FYqyn4%2BwxXGz8MfdUJ7icUEbQ6LJ7MElB4NMC8oa2Hfrj3x9VcDhrrtIzlng1LZBGQO16xCY6Rm56lNNhkE8iQUt8Y8o1HoLdLglHZuGQhpIcjfInE3MluH%2F5JwseWyt9krMP9e2EG2JlxKwNRNaf2XWQAMl%2F2%2FUoSD7qJdgWrkARGwvC7Mwyt5SjdOjjyc%2FhbmlQUgw4fnT0AY6pgE9XI8obiv7F4dnKMjsfbGX0f3IOTKvCY1E%2FPD5626V%2FaINrM9eYinEuwKnQ77fX9y393WgQnQBD1YB%2F7vzTQjCb1x1Ycvc4%2BmjugRJqwZ9HDbeExsb2%2FlXUcDrF47aL%2F0rJp4awMh5rETiTAl7YzIs5lwaNWUvP0XjTvQaD6tmrrKhjbKGG4KXPMhUzI41SmnpOtsLwDiYLAytNLrflKtdLSHZLTrU&X-Amz-Signature=7483068f2e13ca429dbcc58059cee7eba6c08fa8c34e5e30566f0410c0736f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=cda606b3560d15294f0b978915a73e8009b9cfabe1c5b3bf21ee3c97ec6ac88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQLJBTJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsnds5rfK4VT%2B5ZIkXU0sxSV6AoccCRM59b7Mxp6prXwIhAJ5U4iFIBcOTVkz%2FWp7CNKqAi7d%2BHrnkKlkU2npxRSaPKv8DCHMQABoMNjM3NDIzMTgzODA1Igzm%2B0Ajbb6m7i3Ps%2F8q3AMuF2w77vw5vq4QVfHXczHnPn7UP0wCkPaJW0F%2Fj9D7dHAODUuiQtNXTDDjMSxe9bn2Zdxv1%2BVGddCje5scnCUm0gXEVfjVBzj1EgiCpTdTSdYK4TGxs%2FieIUAz84SE%2B98dmnQ6s4Ax3YENFsJBORyiNyzyp02Mtj38BSBQiHB69iboO75gGT11i1fIrh1JBkNQ1pUlCcIbWWKh%2B1yjiOwPPpyTRdx0AV9la58NRy0Ljau4KexvLnm6PIDyAOvh4J4CIY0dy4HDc6rsNhWRHC5Yznu6nTa%2Fqa1ymxuUYddzkPcHGtpIo0LRHjBl4E8fIPzG0%2B%2BUa9BzZCoPu%2BbJrUNVlS2PSzgOT8u3BCRQ8s5GsbfyHr7%2F5v9pA5eJvxC21ooMjHEtpz3p9WI%2FnorbXaTNWQDxzEu%2BciVZcTqT%2BUOEUHoVdOQEMlmtlRV2CuZ3TW5q9L%2BV9k9EeUYTCdBgHaNv9lLf5j%2FKl5hJh6WdJG%2B7MT%2F6h%2FGRaI7iGAB6fgTyQcaPWQwiFna6AeCNV4jeZEG7vnxKqy%2FLYb0ZwOk3jy3OVxtqkN7N5ez4gXnklbRVZax8LPOadqO4Ldw45o2KN7ZZLi2ZAdlo3A%2FwBYYy%2BDbKYS8MlfEm2SCSDvJ5FzDJ99PQBjqkAZkl10QqRaGsHKeLDGgLCovCtDZJjUuw7jIHanHK5mAsillcf8JkC3seNh1ur9%2B3IGG1gAGV%2Fu2gpXgVqqj9WgzAd%2BwmB0ThTqECEG3N7hGRp10jOdwA75lIGIGo0n5fU0CEqbVY5wW9wUE5Ch1qZWH752LvJgUMqRcXeDVqssZCLfpJCCvkEfRX9u1N7jpXnNxhsly62ta4qUj5IvDig3wf3kBz&X-Amz-Signature=5dde6cb3d2d76156690df2d8cf01f29061ca38248b70e52a23d4c377f77084ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=97d203bb907d9cfecb015dc2d1cf00ee98af7b10a0688392d06c8e2ce45dd520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=ed124f9a4e534cc3295025efd3599cc27051651c653d516bc763f31f9f61f180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=7c91373a39aab136b307da709660f93b911c27ab0bed6349c9c8a3ae8e1283c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=14ea12f26e69c82448d54b437cf21e0ce29db9f1691153937ed727da0deb559c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DBHJEB%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BtB4yGcWp9O%2Bft%2B2erdaOLzR%2BHEHUlSULn%2F9Yt2L0kAiAUR4WZ5DY2I8fZTSrLz6Ij%2BYPnEO5fpzy4YchbR2Ct8yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMgp%2F6RRb0ub3sHxF8KtwDNfroGaw9JeIs80UUdT2FD6q7z%2BL%2BnoeidMq5tdQhXfjvO8nWNeV7MwnDecW7N%2Bzp18Pb4tfxm92Uyvqp9P91dycmMWqVNpZjNB%2FoxkCcO1qy37wg1C9d4wREfT54A9yio%2BUOzITObt4pVUSGZ%2F2MJbNhUYjARBqfpUeU1U0yt%2Fk1pMX11YoqRiLO39w0ZRJD54oPn3Ixyxzw3XsFTQqiHVbR%2FxZ79GXbuSdoU0%2BmWApTzjLq2tfnFGzcPwlXvy3DhJvzqYzthEUrAK89OgDykZPJ985cAu%2FgBQLWVj5VGJewiF1DtUFQDVzrknvdOes3QByCyUkGc9jPCQKkgeZJARx57TtHwepmc18uaw6iAxYP0b65weYLwB42gqFyZpNRdInYe1w6WxtBdfrsIGduqK6%2BjzMgD4ia6aqpAqh%2BE4vmu2PoyFDIUzn5tlWjCY7auzXmZbssCI0Cc4bW66GDzeopEL9DXbfK22FyTVYa6USSFioaIflwMA5zvbVvH113AYn9U3R4h9h6DYZAj5uiPm77pCuuzWNHnDzMtje%2Fo1nPITJtP2DpT6hwheclDH%2F%2FZnPvx4pK10l4SU%2BhFV%2BwgccJZzGk38ytGCToZG7HBFn55xBkA9E%2FxNhQ5AMwmvfT0AY6pgH0O1VC%2FcJDRtKDTQgS2B61p1lK%2BKctFe%2FuLumlNkK1Kzu%2BpDInntdpV3UuHVxw7S0LEt1T2Zaauiv4MnvNfv5%2FnhcMq2BlobS01fhxvA%2FWg5lvpqKct8M8QO6hElCw8CA%2BqxaxpXj53hf%2F6tWxAqPXhjF1yExC19rx2OKzbBVmawszgiJAEjP4d5GLbhi7zYztAQ6S0eHzVrGwa%2BYc5pJpAUrRTICd&X-Amz-Signature=9ec1575a79b5864f55904927abdbd8ab8a7eaf91cb5785746d3045687cff2920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=8d60fbf5b5e30502a907eef3c387c345990762f2ebd18ebc0d4db977f47262aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=f875daa23a8af6712adc6d89375407462d07bb99ad2866b8f42bf42fb8c3511d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=97a22a74cc8f79f65062d6dabe1c9be0af7b798de0ca69a8fa37831e508d6592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=35ef74cc0bd6dde631130797f7e2c8e5f004c369c04efde602ed372b777e3ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=c02e9f772e9aa2aa694a75cae1297711642d62611dbd17933d457689bf1eb1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFGEFSP%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6%2BfNO7IE7fpukRAzDZcyi8UPKEKvu6se%2FUBys%2F3t%2FgIhAKUNgZaTOBD10zj%2B8abqz9q4D%2FwqP1FjC%2BmuGvJZuiTIKv8DCHMQABoMNjM3NDIzMTgzODA1IgwC0i1TrhhsTlnZYCgq3APkv0B05ZuXkEDwWzvHR34dAjmyT6G%2B6Zm9H%2Bi5D9ACkW8nS5ar7yk9FkTFSv1g66TYlvIBvAN7TWSG8UF%2FqYFo%2F3CmASF10F9m81cuwSQQC2Ft%2BpFma6sVe%2BypTQ60C0RjJl6TBm5TOSP6lTJkxBRtpuO0cft0JSmWQZvp65dG2VaD9%2BsoOa2wSYw34eQpuhTi%2FPSOEg5nWoC1C6OTAuNWtpr18jmIter0GygtTE49BTydf%2B90ojTLm%2BCpryKs3sRQjXR13LRD41GMTruoZ8lqt%2F57YiJDn8or5%2BB4gVvzGJ%2F0tV53A5CK5Xilk0ReACyh78yGV4q9HsYJ%2BjYcgmsnfaj7mCfZEgC8SHOiXsIyu5nqZGWnMDDMjbucZ8aTKxN%2FlSjV7lXHmqJHO%2FVlKqVxIkoMYSNGJtE%2Ftyo3C%2FRWuJ%2BbzBiuDVo%2BFT14Ttb2WH2SH2wrOW82rMAFthIgbDDViz14qzaWwfl3%2Bt86OftfV3rhcqHzWyP4N0o0ZejWlbRUacUDOHUW1GZ8GL3p3PFN%2B46NaU1NqoWHqc2lqumYIvLLk6f%2F5UdeQeYjCLTIDtuSKPbSn9mQNVNO%2FjUsh1BJc6HMbP4L07FICPHg46CsmZoHJ1B3sSiEOxqXyjDB%2BNPQBjqkAb5uJW8xixWrk2kEtbEWOa5P1yKEGaE6gg0ry2vmZiPhKSSM00k4TYHOIO2729U3Wvxyxwxl68EAsJphI0YFCz7AvuGrR22CwpgQ5S1y%2FBjjgdCMb7WllOVKSAZCAUE04gsTqshqhn3b%2FieEWQFOCaoGJaNp%2BpX9qO5pOPgaEgf7HWn6iRhSVV2x%2BvaCUSP2SBTWtEKlWKEKRjyRV4WjPuxAZmBj&X-Amz-Signature=18e7f721099631dfe555fa8f61255fbb8cf4177ad9dc974ae41d9791b1fffa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


