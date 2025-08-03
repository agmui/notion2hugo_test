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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=b228eb20ad23495fe1470f885bfe7f91ea1c0d8fcc48f7cd022410414ce0ac23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=8375447fc09bfe334dd73772206df9dc1b3441ef93bab3c5ccc9a8b7e32b59b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=c8b86274c113a3655b8f27284f1ededa7ee387f0cf3b781b65b42f11973ddb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=1fd405f53d15b7f05c485980372a3cba68e886dfd76c0c6cc5941f94cb4b6260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=933d0b3e31dd23a56c3d97281af8b158665ddb2182eccecde5ad28177146bbe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=97a2051afc7b002bb4531f44bdaea81a4bffc6f52780688ddc4fc5b536e4799a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=17ead0d495b35e6b99ec905ee11da2718d989d7bde357896472d42b25809b502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=be93d5a311117078842c2c9afaad74c2fd17db92c7d12d8c76c28a0f6b2f9e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=dafa9ad684c20ac14161463c58da6e56fa1fd7b46f697a4f57885beebe85915a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=35c5f4bc3e10299ae8fd7ccad940fe69289c9e63269a4333bd758e2f43cea2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6AQDGGO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW8PxVp4i9KdX6pbgwUbPmMmHHszByVUFnApeRKjXf6wIgfr5AkgkIcP42%2FsZf%2BwGZdvPJuq8bY6X59V9XOV%2Fm34kq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKhLu9i8DCv%2FVjH%2FCCrcA8%2FFqW8XWRf%2B04FncNxQKZfVAp4M4mVoZylMhJ5jyaBwZrr10WQ6pl29BCk4uLZJMcpUKpW885zFCItHmEOrtxKBEgWsuLgKsgKBPVzKZmr75UUF3YJ9DK3UoSs6BPkGJozTrInWTXXnsfftJDJiHYAlZHge%2BjQnA3bJx%2BkdK2mtH2O4kJI44AWS%2FuUzCwgRTZkobSDQvDht7mumrSWG%2Bbm1UgNGbiEL7M6qddnTbn%2B2wKMc%2F%2Ff6mBo1zS%2FirUeGdfA%2BNn%2F68LyB0td8XehR0lEnlA90L2aiWPqhHRFzz1sbYXncOdpySnzZInxDczXkE3gVUhcCN6fqm92U0FwoKTBXbXsYw9P3DV6g6eRsiOO6fud6KHEDERFX2J71Bs7ArfOBruKgUMFh%2B2TYRmUCMNyE8TUugsQeVfrrLXxHskUIuFM8R6evJxoEkvqXHC2l9xFA%2FCPznJ5kBWbEZZ%2FewzRhNeTvllV5xbO%2BeoqhWXmHmHhcpdN02EsdON7mhm1V5Egr%2FfxqH4cCVmCjPPlTtiFHEQ%2FqUP7KlzBmMSojwU9vX4SFCOTEIiobsGX3gaonLVgqLHTdy0Dc3Kw2LfwDquSF8JTeJJsJUmQsv6vOwySz3Oosqz0PjHFKKEVUMNeju8QGOqUBSuHKRDvgGvezlvYb%2BNo74Rdb2ig%2Fu89dfXmuXWfG5jtLnsZYeU54bizf3OZ1EiYh2Sj8kt1iheMoW1HVU7deAy9p2T3e8saPWl%2FMrCZNfPvuQXYYT50HPeVPH0QHwr04KhUj9Nq0DnoODOjXY2wxfX5dRHBLVcrQ2%2BdlfmMjP3G46%2FVVxi1KPOss0yJfX8HQESlQovtyU5pgakSYC3KwvS9JDDQM&X-Amz-Signature=9694c138b3dcb8f8005b7f2fab3dc2041d3fbd287404ec8eab7ee22a7792578e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXBFVJ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUrwa6uJ0erh4eDRaUNmp01tOFR1BNGLl4SJYNoX3b1AiAh20SzwBle5sbBhXFhMpfTMGxOySP3pbHYW6t9ofuzfSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMMz%2FEuVrVqf1hglwRKtwDSx7P6KbD9Wit%2BU1n2k%2Bukno0Q5apoe8H9i5%2FjWm5Z12YuWczc8FZZv9sifGVCaY2RdtDuushS5GAn67djYjisspLA0oJQVZ86xFKKEI3mzZj1KtNKJSPsz5fLvkcPAPzgBXKDeNhk6D%2B9PJ3IZ7x0e0mJjgsyqnjQ7xrtjzw57HrWGXE4RQ4YrBVyvnLpXZTpE20lOQnTKMkbKSJv223qPXuL0cHCip7P%2B%2F1D5eTNEshR6dU0UwM3vv6qeW2SHkmtq%2BPbzbc1FnZeaGSPjXuY36PSOpQeZFxZflCOjZLB07zVbE9bTru1XKZPMkUDjke9zeui4H3dSeaXCXyccCoWl1jy11LYC0Ip12%2BDLPslHQQdeI%2BiCAA3nQ2jqfcunyCueT1qma3HTl8inUUyJpVEpe62nX0T5gluQ9APkRn9%2BGVavyUBHTFbcYKSchigvnCO2c71%2Bbe77m%2BVgyEFNWvcEpUgtOEBPYqq6Wa9vR7u5WfzOR16oSg9hr5abn%2FzDHNk1GAGw1b69wSww%2Fk7urJjNJYqBvnxCKaDdWXma%2FFMqFjNaaxBB7FSGGlAnaKI0ERPzwvbgNy3xbrDW7En%2FTtG7Uo4cDihJk%2Bi9X7UnQC56V%2BbTIDuWXk0z9rixow1aS7xAY6pgHJcgBud8tbbhiNrpZ1zP75u14V%2BLyiHpeSekJiAcATlFMlOleUMvssQ6e3C%2FACAYb%2F1dD9rBx12b39795Bj5OHK3pb%2FF8E7hphelViV%2BPMNTvZ5FSDBRn1f7ce8oalEPb2gKMbo176qsIHITYKiOT6oFqOpytNM7AUtwwmD7LI%2FgnKMbtrml7urjtmwzukKyjzdUiSwuVVQL4e%2BzuBrdh7gv5dY0WM&X-Amz-Signature=80d58f6ade76c37b1b1cc00f6f4e84e4693dc62a551d25514a7463e367578915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LGXZOD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRzyA45NM8oedyIU38db%2B1MKL4FKk%2F0ahhMwYDItQ%2BMgIgduR3wjbc8g%2BhPDOtsja65umG97nFafnkF4vDWnVJO28q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPmd3TEb%2F4z1ucOebircA5fXvTuRRNyH0jC%2BsMw5aBdYknF1hDzHMLcj%2Bm%2FcE%2FVGUMkryKZMMYijKbBfRDnHCdT8DnLNJoLnZt3l%2B1V%2Fyq5aF%2FDofizjZebQ0b878vEl5MEf0CSGStLTMrKnXVw4qmhd4ut2gAjcx2T935ht3Db09%2FoDim8Qhfa6cCUDixASZnXOVaEdv%2FNg7z6gi3F%2BmPCjqzfjOGpWASjgNscRRHAuqQSPVU59PJtN7JAF3fZokq1R3BYNdDHtwXaaNuFAR2ndhkQkh6ogCEfsLf6Dshrdtsm8BiTQKC2P1cTMtXGV80PKKDkVXCA%2FjtQDSG4Q93byocg0YRcme%2Bl159y6QzNUpdg2WojbEa%2B1lJjZ992yTSX7Gegmleutv0Pi4UGkaA1DTJlY9YbNXx8JeEdcBgwsoR0r%2Bg4KiLQ44coXODLwUOqCYRHcig7Oxce4PmslnS2SXiuITYP%2BY2zX7d310Ai%2FTbdeCZpMY86ofptCQ%2BJjgV9Tz8W9parZoBJLS3PW77vPTM%2BNe1XzshrmQAz1HQc6VjDd9NmzH%2FdfOBOmGSpIFj8zX66Qz3In6VIXu1Q4OGBz7gmTRlHlXSvsFhVuSw1R7HrpLQdC8x9An8sUr1QEsRaqEf%2FF6iBvyPEBMJ6iu8QGOqUBNEVcmqTDAXuXgfm039usEbF0Xn9pkAUsgGwbcZNuBTm7zWp5n05pNFKH1t8T2vaajeRKELCLVGOWwlPGwuKNHyesTqAN9OvvpXIk4lwauV1BqN5x%2FbhbulcycjkysdyBMk2VBLyyUIRaHzmfh6MtwDAQEg4cG39lwecfNepMOQfuc%2BEIB65LgbaVd5%2F%2FUDrJMdvqBg7rco%2BqV6U45p6%2BdZyT8GN2&X-Amz-Signature=83a6575c3b2651c2148cf1741aeba38575e7522515873b8e8557e3c85a9d4c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=8be6cbe5ed5a9baa3cb1949409ccd45433967d547ed8842ba020271a10c40d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4W4T7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAClZ7dQpJESBGTOeoIm1GMvyrkt6XuqtNmkZ0K8Ek4WAiBl%2FSMkinnI4GImbVqOPrnNndR04XGe%2FeSHtMvPG5fA3Cr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMMLfAv2Q7fLkGsgQrKtwDgviDqTkfkq4nvTt1umWPzdMsge%2FJoYkGI9Cdf7PF4U%2B24vp4WUlRyOozlRTIvuEXWMO9yONww9pMy%2B9xsW6GBml2Ckwoiw28Fy5I5UnnI7QPOMfoBnZU0wCbTzGUUiACXEqQq%2BBaZi3DBF5B8IPkSZQG7l40tCZj2kpUal%2B2tqEnGAjJpISN1rvGKaAqnlIhJFFGMPQWYZWTyPujqC8oPgbfB18XT869RdCGAy6r1HPJW3tJMnTw7ihjfIbhA9%2F%2FQU6R5C3zGA1CWtZvf0CA2gH81AVNc9AfWPOznal9a4B%2BPWF6JUBeTEwPE5rHmKy%2FjOfxBR00iMmWEA6mmI0eMG5VR%2BeJOxAYKH6T6mURP1aI0BMKh44NrQXXAYCoDBCbfrFtROD1xVarqFr697zvsk3c%2Fjsw0EeGeV7sFf8GqyFCHPH%2F%2BGpMaD%2BCgy7aYOuBjoLYGvrE695oMc0AYmcZYRtw%2BcDe%2BuNake8o1XYGiD8grfv2YUnH4WvLtuvf7cxV6EgHJY94QnQXo%2FkuVM3eOFZak%2BmPbQY5N9iKfSVsPUGbogNkj4gUGsDBlYp36GKQpMrPFz8M8EPqVbQSQ0mbewHvit5S7TiXp99TJ%2FEsqc5ET15Muuh80reBWKQwn5u7xAY6pgEie3FGMiHzWF2%2F3e7REaZBmtZAPMqvhUSc035wVUtJjJgPTTdBKJuQDvA1xCHTqZDRiZAeqnbSSDY18OoZImu1WZ2RuyCW8a%2Br6Sg2M%2F92DEOpNXMzZP5IqMiL9ul2cOUjIQu8R3q0lDXW86ZgXH8ZylxvuI%2FcYoyBaEZ5lgmK3qMHTf%2F9sGW8fJWPf6vnKO1viMoDpPG9gM%2Fzi94iQTSfa3ZnaCXp&X-Amz-Signature=d85920bea686e529a4c115acfa843a61fe9c11b9b8b7c7705036bc0b3c2eca15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=36409057d22c320ab10cc59d5cfaf2e60ec44a4c6c71700f145be22613110ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QZM3HR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhf%2FJLKW%2Fzg1zz9TvdMJvoQfaVUsJlYvGWDCYg8VuUIAIhAP2zzHZT77aJCb%2FZqc%2FzYqdQsdaiYDHMgDgZJg6FuyrRKv8DCCQQABoMNjM3NDIzMTgzODA1IgxKzkvW0ZvNsBaZgvsq3AN3tM6AH89sFJrUuq2LaP8R20R6vGDmBMxJS3At2sH7HcammVRH3na%2FDJ3%2BfJuN5RyDHZU%2FrnwumuRCOFCnAXTIul6aU54a6iEN2cwazRUw71RjkZwGN5zHuH1mYnURv3iWzpjgUqro5gwlN%2FDk9AQVsHlkYynNPSNQsjGN63Pj66jtFnMHSofNgUstkD73XrDJNkY8Mz8eA9bg0miuoH1zgIypo6FxFXyOov6FwfNAZd6N8eth58aCAvnzRYcrkilm4PsQTgkOp%2FgRUOWRIV8HsTKF5qvXBL7FOD3ILd8sMsADJOH4zRnyQV4j%2FpV2JQ76z1ZsaTt1vqxvYZQZxAs44dNy6ZYBSy9eF5kq%2B2P%2BAxuO5V%2BkpRZtBL74Yd04IU9eMXzYdAkaKT6K0cdYp85NJorVVzA5tuQTfi91KwYdAm5h0OVaPYdIVYVJbgU7PS7Rmn6mcQKTE7SA7LoBus37OuofAJyGs85M9VJSY9N0YPpQ6ex9XjvIgygT5iZ7UCy3p3CoJGu%2BkHAd5FcuDqCqBN%2FgfniR6b%2FcFyuMFKaIfWI96gucyTUP4IWfONRAWSLzcKzErevj3%2F0%2BQFJ3zWcAB%2F57MHxtyvFRPne1auByJ5ejekbYTGyW7jEO%2BDCen7vEBjqkAdbwNyzc4hltE2oXa3LzSQ44pB%2B7dEuSz78kLXDAm%2FfXW0lf9R7wNGLViU1H4mmHM3yIG0KIH08YDZhjNvlTf96aLm8n1dOOB9HrVAPxqjNytQEwnXJlLZY%2Fnw3h4JWj6O%2FG3zHuN4i1kydF8IlW9HCuxRatn6Wh4EYLpaBUOkWWccklKfbWPtq72z18oT8Hza4rEh96UXWtx1XzwRNQEWiUGLSG&X-Amz-Signature=dd293c22c4c6c4c1c953b4578c99abc100fed770dcf953f4f8a4373de14757f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=c4f8465cc5ec570135f1aa9d94aae62d2aea42d458d6382e45d3989cbfc70f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4F4VXH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF0ur6tAXQ2STm3HGgV4QGGXLWnFVRr9nZWGeM0g1C%2FAIgXa9WeVJ5kFFR2A8hzmHdl8KAnRCcHJBfacRa0KXF6pgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFucSPcq7b7T9FOAEircA6h6sCo8JiD8Nr7HQGVHCzUC2OrI2wKmS9e4NQV30GM54oqgas1xFlIN%2Be%2BOVG%2FOzUzJqum8qzUmHFsbD8A3ugDAmZMCGuFYnopoiLJS%2Fzn%2FzRXMSwz5DXb3LIzuZplwsy6MSx2OtMXGRjE2SvYj3WbCVzlI9a8peS6hFo71ZgTVd%2Fg56HYiKMBDvKZ8jHY2sD%2FhiYd3DQd813zmu4tXEaf%2BpS%2BtZy%2FDf0czZXvIsBzrbbvhuZZwDPTWhdcqiSETm15BZXQuBO6%2FumeQzkRcJe7FM50kvJXtASF0t08389LGfe2uBqqSmYgqsUTprg8LIttq84gsJUWvKmXCuY6h741RedyQShVjOM%2BjJCFF56KoQKFLjKlpESo8mjx9xpMvxzKL8H46HEERvapYo8AgErHxYnUU8svTVtcVrHzrMzAYdUwEeQzv8f9NkOhpm2thJiFwxwhOOs7RC6SCZuutwNjgeI2FXXE7E4UNlo2S3Lsbe3NzuW1Nuu0HeM2NlNztTTACA7w3YRqkNBJow2F6MKpry99Hl%2BmXfqvNeyulKVpcNL498aEpirQqJSxSRbzAXVfySAE%2Fx727GLWclUxt%2BvNX%2BFAthnIw5zAtbhM%2BxoFKxvul%2FgkkiZE6Lz5HMKqku8QGOqUB1f0qFhLAuP%2BCQcQpglXtZEAwEsvJn4d1LivQk14Jedw7x6ZLF%2F5abK2%2FZFVDy7jGCtHiadJhBJHxZfBUHAQqfArdPNqs9H76B7rYGVmAyDyMnAMkxm737fhdCxd%2Fr2aXZvpDhm0ahyrK5cpayVMxKBZiN0J2klaf69kulKe8HRolxtMDnmiX0%2BIT%2BJ6jl%2B%2B0jIe%2BxIPBYbpvQ9WR0M6qQwTIu15D&X-Amz-Signature=4cb269790aa0a4caf9506f7ce744bb464fb61b41a577a3b10949965dfdebb19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=220b62e23b01a4ece6553d9018d7b28b88b2fb0eb0d3cbec399b6a4762345e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKZDZOL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHWtTpRuU31XFK5XBG3DhM8S4ujpzQcW0CqMIZTfM41AiEA9goD4L%2Bec3jOfpXWnF4qqa%2BW2d%2FIZoACoG4RtavzREcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDqNEWrX3z3LZwXk%2FyrcA%2FkHguh15JqwI6aL3LWuYLoJL2R5w9Z0lyrpJ%2B5fhuxFuqEzy8oZnwoMiNtJlmEAvJHmJRU1Kr%2FL0%2BqnOpOil6hR0LSuh8M5LjIwJ0HkbS0lCb7URdkSahabA%2B%2F63NKQyiGPp8P8uBosX3ujHkfy%2B65l%2FvDakpD8iSQNjOwcfBfsChV8If4%2F27gv66QxIM5KBbT9VYNcygTF7klUpM%2F8EJdejdMR3IK0sBJnraOWoxLXFjnlIYhaBwpxU6RZ4hQL8FtCmNfNiNAAHpIMtwwh9nd9RVXGeWWYB73MiC96Mf4SvwSU8Usln3TZ%2BJT6Uo8%2B1b6mzmiTlJBjfES%2Bxo6zFe1S5qdgXQEZjX%2BvPHQRCcZ7Syhlh5vx7LLMSA%2Bxm2mArsBtjp1zqmA1FXuMDPrpAD8W%2FmB2p65ANEEuPDxmC6u0%2BFWfs7vrG5yLZIzOe0i9F1nBtQXIkVbWBA%2BiQjzKWJCEX0jmTggvK6FE476oXIXYQ5KkysgRalshWo252STT1PPUNt%2FCfk7dBICeu3ykt5b0XkKxJ1pzn6iILRZ%2BbZoGVMr%2BebQU5rqv%2F%2FtvKfVazLO4YwBitk5G71LfGFACPD2Zm6TTBlhbIuTNBbJvb4LrXlNKkAskzGvmVTsxMK6gu8QGOqUBF8q6QMNykOld0eYaW6cygaKILZCkLoGXTFyi%2FbBh2DwZmbue18GES%2F%2BDLyHrB8cB8%2BwYbMB5pN9gEY6cvDb7AOmo0uxIhRkQaBk%2FztBR4dBpZ6UgpO%2FHhTo6SwDiVuEbRInAtDw3H8SSBwTlb0rJiRv0fUnElNZckuwM%2Fy2r1wFKb75Ho0Zru4TuNQ3y%2BmM1oKzFWHZw0Mu%2BG3Mi3S0Ygc7vPO9X&X-Amz-Signature=78670215bce6321849c8c1051281d2ab08153610908bcfad51be8ddabb4e7274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662TNUCYY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDElU5bP000MNDM1JK7Lxk3jaM0O8Y3%2Bb1rznHJJcaHCAiEAmXK4N%2BP1cXwtLD%2BTEgLPq4m7%2BFxFfW9NqIq%2Bdjfo1F4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDE6Gde4p6DWU%2BYmxDCrcA5wZ8rC1nYcOpFImVCpL1mTAFJaZId8gfUV9IO8QNjc1pF1exG2R%2BB%2BBb%2FtTbstWGBw9DnOUohKnEI5qT1oe%2B6ILA5iCNXMJXJPQQK76cXWnYVs%2FOoBBFDFXUsI%2B4vYeWYR7HonCOMQuQ80QBjKJgicMpO9o25NMxxQFlK%2Fj9dgYcO5%2BZ0Xf2rFWg5n0xoOVbx6mKEXPIGM%2Ft8TYA2ERULFU3DyHpmkH3i11fYyGQWhG7i5GmDYS1CHN6ObLak%2Bo%2F6VqgDvLHk%2BrdSO11Ska6olfhuMyoSPFtsRtkNiox1LyVswnZvbIIkZrpYfVdkY3UhrJYA%2By0pPs6Bbg2ra5hsQf4T2onnFjY1J0EmRbMw6oc89SeTi3ZZ5DAGPzdsFKcLj4ERpRvKfispsCBXmSpQ2mnRW3yO0ekLx0l4sXF8FUEx5gfqWJmcr%2BRj6nMAfqSvLEuZ30txtfTNiUZBPcK1CdtQLuq1wn1vFtqsXAjYqzGB6kLURQvyrD9AmbPnrMxW8BQzIR%2BotWa1qmi8HzhgnSkSPdDTxlaoIDPQlEubdOC3wUvvOf01tp9n%2FYrLx5xLpLVy3ByIJSlG%2BoBSx3T%2FLcNI7Vr2Eskm%2BWDkIA4KZiuO%2Bnlpk63EkYWXJEMJ2mu8QGOqUBLEdq2Tpz2%2FKqEFugE79BZ3qHmAtPW3B5U2C8IMJ3Ya5r9MzC7rnu9Vi8PXtQGwWjdTF2PG%2Bw1QT7g126zGmzw8MdgglaR4DuXeJSfxh6WEKrQZ32ILra0grsxqMaGEkHZM4umx3gopkeCoXw7pC6BTXmPoffEOmwHe9oUu5jRhjckeIX6hE%2FDcI6OFunDYyDl%2BNFb3plMvyfHBjaDz0FJWjS2Hgb&X-Amz-Signature=4aa64f22346b67a58ac9fb35951cbc59ef1936f090d9dc6d61b2230818e56f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XV22QFB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJGyTjzhSCUbc71%2F8fO0v8J509fdkssETHcRnl2o0hHAiBUXqSlDqQAeygAqFQrPfd2TiI7QdTkeVKqZRP3iEXUUCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMI7YRJAVDzrg2PnoYKtwDTxNPXSCKTr4SIxfh2FTmMqeGG9D3M0g8HDc%2BQLT%2FZF5zz9bH3DKMTxaTmNHSf8U8GVYNZAEXrq7LaZ%2B3GUKyoRJ4FrGZvIEencro79sVsogun5n73X1XHNyAVcRxrO2gyyd1XHVY6gjx1A7VpLNIvyqg7GtmyAT0fUPBgPcbfbN%2Bz9zwqu07GCvEExZaOpQv3PXTS9La167q9axH%2FQRLdteq5eVOTg3vyx19QoSwkdDsMkPpB3GEng34X%2BBSCjRvott02oemnz7IVOTv6UsEFJoxWO%2B3k%2FFm8H7854KZBMvALQ6%2B9SqjhZppuT%2FRYycII58aULeCdli%2BI4iW2167fxisx4Lv3rxDLMDLCHOlTpN2lqgyPqURep7ljgMgfVOhB7adKO5feIG32YKGvfHL%2FI6pJuuawotrWHMNgQnkfO7XCN1o2TaId8Me2ZU%2BqnnCu4ueBeIu8b3qU3Cf0CXEOsPM9XGsV9C4w7E9%2BECq19i63r9OaLC7CazpRd3tohFhpLzNBsp19ivPoi700Ogfldz68jetRaranz5FBbJaULvPdPCOyP5HMPI6TEHjvVXWPilY4JfAH12n%2BfziwUVYOrQtL2iRj05cIV19P%2Bu3lUNFbDqqe2pjTuQ2Kuoww527xAY6pgE0H0J%2B%2F5EMDoE%2FOeReqDgqSD3xpUk1pJbWbo64zVD5MzuuJ62LHE%2Brq9xLRvyNv%2FqZV1p8I%2Bh3EGrWwY5H1QSFeStL9frxx7zbx1Q%2FyoXbP7BY07m8%2BvVNMSg%2B0bkO1CV%2BZqM%2BkoVbga6a90zkiniIUehjyBBMUYy%2FvRDMv9m%2BvxVMybQuCi3merFf1Mlp3iSFYTTDeKW5xvdZjm7zpf4%2BIU9EAgHK&X-Amz-Signature=342206f8469eb830b4e1494e1247442b36c9ae3b3592d8bccf281acb6d0a829a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V3V6OWN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNuR%2BvRJqNjE1xBMW7qtOaZBNUvX5vkw3at9lUhz2K4AiBJ9%2B3F54Kpo9giQYJ78CT9lhl8OR8h8o846LXz1B9Bxyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM3d5ZHHFE6vbzjA6NKtwDPcSnsMvLOIJSErFc4za8PeX3gdN8G26SiXDpGZg9I1UIVpdEcxJ2x9KcPxIBMCJHi8do8Tfh8Hk8CbqJKrXGAJMkZP4em%2BE6kjdjpgSTZbJ%2FCNmRP%2BLkkYMl%2Fzuuf%2Ffivmd%2FbTbNORKxpFtZtFE%2FxKFgasWb8oN15CPwLMXB%2F1Ni6Nu0MSzifajm7Wz50TwbBoP2HObXsTEMh7s69OvmT%2BDhVzKLPv1GYnRcbvHsdLoNevsJXmpV4wZdYO%2BQ2Bn4AmDdTWPHtvGpupXp8lJd%2FoKdFw7unxe7Saty1BO9tVOOTl0wmZ0VBuqfbiKGRNJ3gQWt7r83qoCabaXi2KmovCj%2Bhyi8nhRb4AKlqs7KIfQ%2FZ0svqnSlxOmEhLLXkr2DdnO9ZtfZ6h%2Fs%2FmKs1DQjLBIfcUUe1S6DBH%2FuaoDcHS3Fx8o6f%2FzxEkWfhrJjTVdEAkz38NayXhBUfwIQmlIf6yeCuSeRYEfUMJ7A0T%2Be%2FAcZeYM9C%2BtrX6fKpzyA5dSQecnJevjFTf4GEM6iDNeKD2vqvddg4tGnVlVlZFQWsIYEjTFRcLj5kf3RCIYKSEDUb869js8Z%2BDb6Zk2hsm9fX%2BNo0JHrhaaDrQmfxg1qId7O5tKOt0q2yuWG158wtqO7xAY6pgGZaexuSnEEy%2FgzVi9Nq3QwSTS6zFjbSVMngYopdROn59cPyZJWiIkV1ca6KL%2FAIJkupduc9aI2qTNImrVt%2BWx7xD5TGDYJ0CmuG08JERqm9%2BCuwdJh5oys3WpAYqbVnUZphPDlHBbHOwgh47f2OZjZRm3saeK8LfbLGcbAcy9H0kxeR9XElG5hjVftzYZaNflFexsaABluZdP4iiD37n%2F7Ga5vucSW&X-Amz-Signature=d2049a20b558714a8ca6fc0b757c0989186d51293f2197ac5c5c647a64f30dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=b73ba60a6f6ebe93e1a4d7fb066bbe27ee449472ffc2cfa8016ce37f7818f243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=e2820fd7659d6ce22c1b782a72f2f79599b911ea786ce4abc647f595430a226a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264TWAPC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvq7mY1iBkI4N7MEcarcNVx7GZ46BVfXqZxncix88%2BnwIgSzOvVe8jZ%2Fv9BewrNbdl5dIX2tL3HGh6zZbdx3WnHGgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNgqxEOc5p%2FN5f6NQircAzjGS1UEUTyHfin5sRyiFDAFFU2l18ur838tExISfeX69WqpKMqqQYbJlGpFdV1gZzy0dmheplHWuOy1qZpQZL5X32yBTxWjXYrMJTuYfYfqSHJBI6yXnEvuynjecPw9OFzA8MI5AJ%2FTqJ%2FTXLtdQ79Taf7yTa046wvVjZ%2ByRz7cUZ0mAcuS2RY17Fe4khqSjwXX1likWYfsZVEi3nBA29lHE4OMG%2FjgwJXQHWjgEfDrPYj%2Fy3ovlnpwuMiaALVZO3xGEC0YP2SZB6ZCPMXe%2FiRpww05A8AGvNeqenUZAQa3OhvVWts7Tfx4MDecf7GgimB1nGoohJ%2BH7tEfqmIX22CoA9r2seDKgEZpY8ZNLXguqkSvjfyRGASc%2B5oEU5XS1e%2BFwN0Ez0I5GizTnqySvQ%2FRdX%2FCUEN4pJYAtkuPR6I5QvywdaR%2Brvayt8Gqr7soG%2BJet5WvK3fz6dmDncl2w%2F47vjUMLe%2BDDVW2FP3EkV%2Fd%2FGN6QjvsIfhw7UBBoKuzT5EpAMpVhRRYH4td4y2tkgutodjp%2BV1ptM%2FzLbXJQdl%2BK15A4ms6b6l3vrK9f%2BW30o0TrTo8ltNE0AGLJSWr0uKi4drj2v6OcXQJW9o%2BM6a7YM5Oa%2FMd9pdpUVFlMO6iu8QGOqUBUm9EXQEeS8EcUFD5kngfG2mFSSFwHD8ZeedUMBrcoIOAhditspr9Te%2FsyJbP%2Fx3MNqZsfB3PRI7Y1oWs192%2Fr9Ebnt1wlzHhbbO61OZwhhjYyh%2BQgNI4DxEHwo4ZZ6WD%2Fmsurk7dwkGeROBn3G9IQhfrYUoURYnD2INj32MmRLsdhbrNQKP875ajQoAK7y1EfGfJfsE4LMbkj2mL69flLtpPnMwd&X-Amz-Signature=a3115745369ca994190bfabc600315c096b0de79013ba20dbf5a21f25a01182e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=fd87f5e876bb52e9b3ff497c89e405913ad04166262ed50d1ef340947811c165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=69106a0b4bf0dc7c7084bb7465d261bd13b114aa15c93d32548e38d67b7acb71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=0da8ee2e279a7d22d197b9e1ebc3cc95f54e8da49bc976277f8ebc53f8e26ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=6b0eda13f95b3e1c03a77e6422ebc8717df751a16070b2422c706b7e29a4d304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=02c07705a15f907a471e0284541e8646b704fb9d35adc61b9e14626851645996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=0c1b7149651f982a44fcaccb2575a3d37c2c5bce7fe189edcb4b4a3c69b2537e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=efa0761010156e5ebe801de1eee3eef25405390a5a28d790c228cead85b70b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=cf6b047f7f94ad9912b91ce78b68b77e663daf1982f0dc1ac3b9b869eb3ee8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=ab3a0c66b93b405d7eb3837a879a3c5176c5494a1817598d2e5c8c9f92c83879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RGGO24Q%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlEkL4JAAMFq8Mp2%2FJoC8TpBv4vJEAYFMlzHxtgu2OAiEAwPbtMH15O8T%2Fvg7hlDh4gbNn6SnCG1ECFgB9a0QuQQUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOIaMgqyv5kjulSOoyrcA0mpVEV6BKGLiFE7VoVNXMiQZQ4M6vEcBgZU9uJkM1afD8Z9FD%2BGhE7s%2BtHdfvgc1aNXgtLH6HWDLYIwcOc%2FsERwgW8HwSwGVc8n6Z%2BGGNfYuSsMsobazxtbAFXTWPYO9Esir1HkkgzPANGWnyZY3DjzmRKNBDFRHIizB19GdeepNG5e7Hr3az5snWJ5nB5AxaiNOtrqwR%2B2R5mCNvKWNxhvumCttNStd%2FSLAkrmp%2BmDCm9tFzYXgGb2jKKnZwK8J3IKokRkmcxVvN5K%2BcAUJZwbpR5VRhjwEZUV%2BNMtxeu8qlO74O6MqVjPOyvATVleN8MQs4X0NxMF4nW7NQ1UTqguJai%2Fyzae04o6x6qUB7YaJJ7Al7Wgj%2FiJ8jtJDEz18SG8cQx6WPltPW%2Fys9L0rXCBcsVTuZu0ikNXyZ%2BN5a9gF%2F2MJV861Rg%2BcEtjGYc8kixAfvWbOLap%2BEp%2B66XGi3jJ9rqW7SPhka%2BR%2FmjDLOWxTvUa2u4r4EedbGjzSCjIPBfI2AoZxXdosCKYeeEwaA6QXmwUuipTLJn3kZyQn3OzCiYHbKYqezFnNnkyXdBr0hMROpIxA53nmz6RWuzZXokGLeFpxux30rMzR3jObKSMVp5WLw9Rjcq9q6UiMO%2Bfu8QGOqUBm0iIEHt0tCYa%2BZzSUlhx4YOSo5YLwLtD7FHeFy%2FxaPSogu2uqTxuNgIlkoEY9gMw6WVLrAbZbAre5Fits8qLsvYBpwaFPg5JpYQbEXJo6rGI%2FvP15iMmoyteTqUowBXSZJgmIgtETGVPjfkyLhjCC3NZXUK8ooSeFzjumDwzRxrJYEiELwCHT%2FpS8Bm7dI4uxxLsXSD3TTF4FTFsjWBl7jSthTB7&X-Amz-Signature=2bafbe13e01acf946e5b1eb62fa8b8bee03c73841ef315e68af0c07daa9c7b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
