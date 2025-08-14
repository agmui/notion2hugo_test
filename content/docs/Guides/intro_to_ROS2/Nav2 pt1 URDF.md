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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=4cc10cffa4150152fee30faea77b9010435effbf56ea57c6f70d15f331658d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=4075162151252a8c0a3dcc9f66de70c8d750a30d61494cc0167aa411469af9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=ec6795c2f11ddefbd4476e10b12f649a1b0a448c439b689bf91bb475a3170b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=4f0599c3bb9fe5d00c5a725975b87abdf527eb9eb0467e6bb3a37523535401f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=4b85b5a2173f52abbfdf234b4bf5df45efb8f7522691338717510aa52d27d914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=494a7e02a6a24affa0d7f7580ac86d88f749446a256a7e5921a17cf2a2f2a675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=627567f8e79bdc26879648d12295733e6b825dd306704a3eb8515be4e64dae4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=a80dbe51b4751581253b89c16e05b8ead005b1bceb9c0fba2c3fc735c2398e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=04adca53314f5b4ea05b297150cf480b0cdee059cad9ad2b8e68cd76d5602e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=db47239d462f8f0f79ce2dd809adf13462a3ef5e847a9d67e1a3d3a9955e3536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKJPHKIU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwdB%2FqoFWHj5M9mazzPihM%2B%2BAPPTypvtG0lA8CRLgrpwIhAJ8lwzJYONRVGjtZ7Ez5rNmqMoT1iWyAWo78XbnA5ncnKv8DCDsQABoMNjM3NDIzMTgzODA1IgxiSqF1YSGNFfnZnZUq3AO0Gi96VhiIS8%2BlZ4cLmvQGuCE%2FeKli7OndVgzBh2FKO1H7oVY5jomBxRJKwwcI2wHzBoFDgHVA8CRHz%2BziyheGsqi6QL1PEY7Fh1z74noTyPi9mSYNKW8vsvP4pTDGcrVns5vF39CJ8UTnxmShq6Dg2ibyjbukSvnV2fFnReWZmIrvKiq7aC3RGlIyJrCFPbYFyvS8uaZICk59Z%2FcXGYpm0L2v2C4cslX4q0EGp12UVgkeg3zeOGTheh4RUjH9riglIQTb5Feu6amCKxJIJUU9uaCAnsEcizz5wmJphi04JQSAVH6np7toNEzXFZ2gA2q27Pr7HclWAr6f9LXe02haglwwBQaqcuf%2FR0Eh7UJJUU%2BlsGvetib0y5RVguS4HvmbiVf%2BR9IyTEl0fNWswbCH%2Fv4%2BTxxsaQb%2F60%2FL6DwuiII1SjTEZ8jvDOsDAEI7MxPnXrQELB6SA0zIpgse%2BZWDoII8pt1NapKYuoV8cZSYEPPxw3GGMi0g6y5yK9TEYrURd1%2FyVidd8Q%2FTWFx7cpi8Rb1oMqaPecgB13coDD36HtKIm%2FuXeh8sQ0IZLldCtJvpthmrj6aeXumudawfzU2r7FO0zfwuhmTaM2ykqQJk9gtIwxnXG6dFRMxPKzC2i%2FXEBjqkAcl08bu9VFpyKhEzEvgRwbHCQ4egOyEWCb%2BGBcPtABX7EQM0zv%2FfqugXWNoimhUkSVYTricHHzRkVIpdvYouvn0F235%2FtWLOkf6A2EknJETBnKgdq0G5xLwY4u1QBy1fZaoaeV7gGbDl9CNovtoypK8CsgYcphwslW2A4MGCcSHndPbPN2eoawdwqXGBL1tsDyFoP5bjw5w6QLZo7%2B5WQlSGJAK5&X-Amz-Signature=c60854844f2cfaf073e08dfa767a04f12ea3aaaf4d8bbfb495f1844087234e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIEXU5IB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRxN85bwhL2JTWkLhsPTxf5uqQsJSiDgD9D0phXUnsUAiEAk4f3TCwHNPJcngoavy8XsPkmVa%2FTWlldtEqoYdIEFPQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOBHHsCBfRKwgv%2F71yrcA5889xZbJTRa8rpmXdMzUOGkyOhKSmwTXjIMM1p1zUEk7pOQ7dq9ICXWydXDvrAJoHfrabnTpW7ooga%2Fwu%2FBsaNyT4yftq0K6V9ZXyunPw2Y7RU2r6qdEhgdjeDHmt5BqKvupd%2F63B4wi87HyfvVJTiUEPIg%2BMwJPCIf6piz8Zqu78W%2BMDFxUeI17Y9yaBCKyKrQx%2BH6t%2F2x5XubH3TGGChX%2F57X%2Bxmo97KvNr6uTYeJ0ZG%2FQvK7aQ46K0dcWlTSp5GC6Mo9PpTLBZDC7%2Bq9aejJPvss6bnQR7mOaZ7qEBGSXEKniVaEEf6CWpkQ1nnglwhWH59u7hIgBVEaYYGORW2sE4IUySScwVmNsm4jtlbwcpuvF7zxXXZ5m70eXd%2BvUINJ9wqNz9fnjUlGZcn%2FQeH123dHxtXSHhiEYL%2FoadZoxlBGHz%2BBN9nI3J3MnmIfSZzR7phTwXYsaE0woUKONEzzNcjmw5VfLCYXf5TaEWD1Dq4DJs3eS1hNWKVJT%2BvUSf7vID5Q6HXveaJwUeu1uPvyg1niTSqUcP85NjgQFMC5%2BlQspIyRpJ8iNSnFWCxfliXbt7ELc1jSyyfRJaVZF0dxzXfknj%2B8exHlTil345mYQVFqDHxwmoezw5yCMJaM9cQGOqUBQtZYoSRW%2FE53wupEFYa492At1%2FqIrjAQrA87838rdtU9%2F1iQhLANBMGWSwzlbfehy%2F7%2FajkQde11rEl1%2F4atZYbCrP%2BPiQQ8y2WQy%2FG1%2FLQ9WcFQClVXZeTYvTvAUsKfbmXvZBAOHI4hfG5PbIwL1RntSOcrZU3wWONbqS4RgTL6jMTuAutXHu%2BPu5aKljtKKP%2BhZScer4OVVT5x10FjnaGx71F4&X-Amz-Signature=162b1da5f6ee2b49731a813f058bd7b09540a99709319e8711b24101b7501f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RRDZ3WZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmQAa811U0Am6juxzyzWKRMfBvp8T3EzGJTZAdQ6fkzAiEAm3dS0DSTnr3mBU4IO4D4QLYbQkbTsdcRA6n4NvhwRbcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKqTLsqxJtvFXrXGYSrcAy3XzOAOcKjbdeGE1bdQSAqPiTjQ3UchYgXH3mcAOYmH9H45Lr9wOQGOYbmDMBVscHkbpIERe8q2vjLjdwYcfHqX1EJVx1wwR4sMMuyzIV2R45KHJT0g5ll5aVtWz4ZZeQivcd%2F17OQMcbTucX4pQ7sCe8tVLRZ6huf3REiep5nExxG4OGO9yx2tC9LRNVVJkbx%2Fvn4WeV80QOv79FPEnO65imyPd5dsyPAaVjUZa4b0QoM7Oc7o1YLPSaau4f2KHagoRX1gjENylNpZZmA5cyiCqrqIALme%2B7MW9zbu%2F5yUw1uZQHxX3amPH8fmCqKm4cdvJkoa2wGqj%2B0uv8eX2kuOSzmxWnVBs2mceLNjBQOwUCtXAJZg3qH0JPSfqDAm%2FOfr0b33XIOEuwhmP99PQfjAmYZ76MoLS%2Bv8tSIHG0SRADL%2F%2FH3KH31lgIE8aQzbc2Toa%2B%2B7OxtOfmuq9Bm68PPm%2B1GsRs2Ke2PGp0pbYIoPrKLYbQyWxnWZef5hdYdXhkF6n%2B0wmZqRZG6jWQMU%2FftkIRmSsNLXTv7tLIK6CmmlnvkveMHufMb2hfCVNnkkxACFor8HFJ3ELp79Bh88AG2IHfucDiD0mN%2F8Wj%2FBsGqlarSWvfmZnXTY8OlQMKiL9cQGOqUBjrkYAKPuZuuyzSJINkfr41Iu%2F5%2B2TMbqDF%2FaRACWMcEBC0nHugy53l33HVRSzS%2B%2FOU7zbeSG3pLCX49%2B%2FT6SxJw39AmKEBSPmOD3By82xeLhoeM3%2FRhuJx1qsi0aRGWQ2NH5kaeKJTxzMezev%2Bmzayar7TLBbhFeO8a3p%2FWkVw%2B02zAiXHua4Z%2BBK4KZuqVn1OivQAI7ozOaYC366eZvubR8dITi&X-Amz-Signature=bb68790e21765c03f6aa982086982458c77896b0fdfb0b29d6273ccef63c305a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=663d55a9e087936584b7ec8a34dde3ce4f28528f23b2fc0e628169a36b7bcc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3ZLWWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Qrr7TQXJjN49VLIZRME0ic9yS8v%2FIRt0pT49X262RAiB7u41IFNCtoUXAG71kYVVenkV10zyDxONAx%2FsnUhhl9yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMjLU%2FhRt1v73tzL3IKtwDmOkmwVSiEdVCuEZcNDr6Fmc5ynZ9mV7WWclIUgQ7ygcftoUX5sKZpvZe39HLmWGosIirMPygCDqwhFZDDGjt6QKRMjZ8DprRlkNyzhAUqh%2FOTGy%2BcFzH3OOLQKj8NJcn42%2FVyQG%2FdZYypQGB9pMWfqLbO6g3mlhaNtsFhxjyQZbRxvkvqrdApMAubrYcaK1zf%2FopB0NpCHsFYAFiB4Z6%2FY2pI4rMyyvcgdgarZHNENfSDQfTB%2FsKLMhLifQxFckCY9I6p8dJEZKpAHWdiTsTughCJdtW3JKTk23XOzu2gtBLgrE%2BvBZxo8%2ByidV8usy%2BZRVMdFAY4PQszrKQexyxdYNOPN4alF9ylWMvkhDFVC3ffHF42V%2Bnp7ZnWDro9jJ%2FOHsULQq9t1nMA19mP2MI092ZRc62IVJ6n7%2FDwhUIaR5JJGzY%2FLwyg%2BsNhPhDLlHQQhBmysB3U91z1h3eS37B90u0kBlb%2BQRnRbNol%2FdU9IUfsBimDZ3IqLOLcisyi86GsUEuqha0%2BFvL3SkTYhapdTITwwRKmDz%2B8WaU8F5osykbjWtjTWEtu3qBRRfoELy3mQHNvAKEPIuHI6mQri8%2FlOeKKx0SNL51t54Ol4Rjbbdz9a3M1e8KeEC7RY8wjYv1xAY6pgHcbwMkMXZ%2Fhksn%2Buf%2FX1oHs%2ByaaSYV5vh3JQW7kIea7ZoqEzRYCLIQyKV3gqm3YU3sQGN%2BX4Su7qJHkoZENB2y%2Bbehet%2BhbDfPY1Ds1if7IY1Tb7ZrsfOTOO2gt6%2FUQlnNVNA1%2F1n%2FA7IgqFfqhzo2UQmXzdn9E7Q9PoGnZ25IVToo7Lr061qrMaxlg2GjcAfnC3SnZab7qXmShlHdmOrnV3dglYNE&X-Amz-Signature=fcd81519c93a4ad97063de7cb7afb753f584b615120bdd8968b56bc011ef6e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=40f0b0cbbcd7dee20525cf1d34f0d2f2938e46e7dab65ea78582823266689dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP5F4ZHZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUV%2F7ttUvW6ZG7A5zDCuuMA%2FfD18ZlfpHEvEcw2abHAAiB6SmkzXwOgpHgzhnq%2BN6FtzqL7fCA3Ko9tq46ScB9fVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FP4zr5Ps56ESg5BEKtwDZGPcyaBw2wt4iexDFO3rTSQPl4%2FZQxWj3CB1FqdbmUsgDU3qLKgBAch6iGPbIyWowwWkhGsEvVHk0o0xZQaTjRMCILANnPzB91eyNITTuW77xzX0Z%2BdhRovZSWBVjGSUD5XZbC6rKtwcBcnh2Blk2SUfN0bi5Tw93zMoaZ8AaIdeWGAHelmzlpAe3H02KP2nFgpCbor0yCHYAxO%2ByPeH83hnznTuFvPp%2BgfF2XM5O55HU%2FG4vNTysy9INghQiuEKNH5xpzFu6Z745o9LD0sJ2rNvaukLexuuPj3%2FvbE74%2Fk8g7nykULS6iNQHLAfbLlRSds4%2Bjx%2FEzAXinRLamVJMCscA8%2F%2BA83aj%2B%2F69Va7yWXhuou1GSMl%2F3OahDBzsT4pfBq8ycoHwwsOTiIbaBMAbRywfuSbtGoki4X1T6NRJB%2F98Eq%2Baa5e0vT613cn61L%2BTjJxmj8lHCvM6sts2tXcNF11n56AkaQM3xZ4krZC%2FnIW7lhwHx3H%2FbCGN%2BCmCXqJiQrgeOz%2BgUJ9shh6J1zXOq%2BgN%2FVXdrYipcub0%2BVQuotVS5filE0nKFyRoEVrCcLwu1nDp%2FPW%2B3OI%2BQ6%2BZq2PL0SeIrL3vNIIp4I2nRmUVfJc%2Brhl%2FIybuK7fIfYwzIv1xAY6pgGpemjAvcjw8%2BEWZ5ZowIjSClHdJxtMTXXsmtvl4UNM920RhJFrZBsbTZyfDeBmsNiZjrAjOo3MfU0FZUzq5c6BDPh%2FBejETJobUNakPhe4meZcoPg9%2Fz6p3C6k4bwn%2BJeIyTsJu4Obnc3QjhLTNuiBDrzf6SU8gcaLkDNwyWc8wMJOATb7QL5KYCSB%2B7PAM%2FV9alDhxu5v12carlhB6pcmh1x8fxo%2F&X-Amz-Signature=8bccdd7734edf045ad1f259ec0e43c48905970561b49d02771aa264cb5819029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=c6a4bd5cb2a1811fa40ef05628751d67f291fc77defab3834567b737761f875e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRG6IAK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD60TSZrF0xsiscH1kJ5HNDw%2Bjm0ySBkT%2BVxFRn2VcaAiEAn8o2srCvXZEXjmwgI3p1ca5d7TuVwJhKpryobrCthckq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEX5zRAMQtqofpKb8SrcA%2FuKRxPthvyPT%2B8%2BuouL%2BOXTd7c2aBiwcbV3Uev3FkgQTw4NR2iclaBoCB80gmZ0jUAMpf%2Fx8Oj5QNyzt6PGMcZxpgHwfQ%2BsMh8BQ85eFrAMR9q%2BGiVbrdpTPYDBjwMpZ5PZQSD%2BWa9EFJFQdGEo5qon2Vs07YpMkBhVcKt5if6rgtQtSA%2F3mVwMwB%2BmzRbO8hwIUCRW%2F9SkP5wZFWqn5vxIlMwZy85fD2s11IWRm%2BsuEdq3ZC%2Fhr2Rpb5uzHMXj%2FU4h0iAvNoCiCEzYFndEuzxNcm4qXnxuPHcsEphmi1LIYZXgTBbBizD1zZoj6bgfxtc5k0OsV2HNg30Q5B7se6HYV7xQyxUoh6i%2FwmgadNqPMhePsfaRR7CyZDfHM0zA0NNtnNVDFh5T5mfNv2%2BPsepn5w%2BZQXvlEfBhIo9St7%2FVAnSnTzfXrU3eSXUQLtE%2BxXHFucXhxjT8F42JIT%2BHmiX3x6CeVl1RCD5Z8zPyZRYQu3Q9qd%2BG5rkyigxt1eVHkVZ0v3%2BFlSAAslPm6hOlHg6j%2BS6TQ3nrZcalEGEBu6b4Ts8b%2BsewQ9onwZoDHU4yR6O0BRN6KLzCAlPETjb%2BuiG3yQV4sTwFNGRbKyPGuQAPS8EJHp49ATxIkHWxMJyL9cQGOqUBqL0zL4HBO0z0RF3T1i9f%2B4jJUyN1c5KDKOkvv%2BTlAq1dxnibOCvtx8R5H708wubM8LZrAAy%2BVijfLcSdVI12ER4rPy%2BSLsVzo8G08jNNTKt2hxhxNO4FNu%2BniQ1NJkPkzPyTN%2F1ucQoD3br4%2Fxg4Qz9qMbV3LJKIIqFiL74cH6zNp8EXe%2BhSF44IP9of%2BJH3cXzgVZluLcalVgKsZllPok%2F1fBBr&X-Amz-Signature=002d42f08c6a5aaea07053cde843dbd1c950fde9f2092349ec9f565519413c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=a9ace25123c11744ab5894c9ec3ee39860037765c637b07cf6152deb55f2304e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5XFCHU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETuRm6P9V1XA8QpwDiWlZHSZxp6zlejxQq5lOecLLL3AiEAn%2B%2FJzelO23uWnff5WSRcIYZgShQr%2FOG8CEcloUde20Qq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNJuDsfYepyPJ9PNKircA%2FF0B0IiJdSSHasrb%2BrIKwu3AakVz4tOg%2Fm8hwczYiTpZXIJUgPLArVuR1XOksh8290%2Fp9Z8wxCjDeVhTXmjkCW0eUgJG2hMNvhlwHWYukpY8v9%2BS5z5MASjSbid4Y2IEvINhK14fiCLQm6MPbJuY9%2Bi9NzFCD9F6ZeqW4SYlfBnM01b5LpUVHY8i09EZ9LQPxBjzPltgfSMv60IcdmF9kAAXkmT4AF8M%2B24x1iqE6RpS9t6Gl9YRfYJUDpEYJ2VLLOFwHgc%2Bv910C1TOrJMymavE3a6wyU0L4LA3rrUYHiufMSEIz92pWKD%2F458yL0wMUe4eymwWBJ%2FatPL1gzbK3P8Dw9EYkAefwWgD%2F1%2BX7JJuUItsUBqxsuQmvYVN%2BT6mZqUiXHMef4QFRv%2FnQhxuMpBY17GknDsguMMS0ZfhJI%2F0fZC1mudMyGiCUzqmuWnYmMdQQkS9jtb%2FpAraBUjO95z6%2BdmSYsZqoO3SWI2fbZJpXYRvfNewuVqGJoi%2BXwQ4j2LbAGyASxEdfkwmynp6U8AIMByhd7FYA8ScchvAlKLoASh6bhm3CACtagVXKgkC0CF9AFmTmw0dTuF70erHH%2FDS1%2FuGFcH15SZPsXZ0zdubZ1u6OZM8rO9llWBMLWL9cQGOqUBd8%2FelKeKid9Z7sQ08rsFD171FXsCWd24PELU%2BjXWuifAXMWVDrl6frQfvsxkPFcM2bDeg7sfk%2FQGIq%2FPZ7lqef9rG7jRyEL4sdlVL9of4juyVXsJ%2B3pqnK6nm%2FW3Xxt7jlarUb5TAtYkI5mpRDV9mR6erVTmeebVsXNyTaknUVe7X8qLwCkdYNQyGkT%2FVPqMOJzGfTZAw0ir%2B9YOUEWf0gANqYFA&X-Amz-Signature=cbcd8da51332a998a9a74439839d9250937fa0caffdb8cdadbc7fb1311711e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMFYPWKT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRdb6gfu1hA10ZsN3Cj%2FqWUOBuHDguGwVOKM9SIR4LfwIgHY%2BGTvyZJQU3RQRb8RLj%2F1vAglKYq%2BOtwF5gH9qh%2Fzgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMkwUHJLMWU9lr50ACrcA90wPqUMP%2BLylnfIAQ9hN30%2BXHybowXJN9F6v%2Fqi9Ut1u64FrNVeTKcI7ljOYGyROJgcEPSqVP%2B3HqdXzXMM8r9b9THhhLzGQIXxfvN%2FAxy5Sm32Xsm0uhRwn9j76cN7i7wvQphmMuar49HzT3Bc6SBFqnIdcyRu%2FD61MXblsxoE8in%2F5PMEOQ%2FxBQntxpqAR0b2fjruOk9JurxZJvHazJeivmphPuxF%2BdIfGrOas1O7Ar4%2FVkcvOGLMvTHLOqTe7jlZFshKGlpMi6YNmJFAY10QvCTryWhF6LSm7UyKrB5JBOqKnpbZlhaLdJ9fc0tOJSBFEHIByX6A0nAcv%2B6tMuH%2FkbyuVrCw8V9MYDJdL6b%2F%2B9p7w%2F1cSDDgnPAOdOBlq%2FVfUX4mNaZpt5j7fD2WDHFsaWkH9jpokPNU9%2BvySGJvyUmBklegYxa5ulM%2BR9S7R%2Fzzxkol2c1Po1dnduf8p1QSzO6lTq8axiwTDUUEE5zgDGj6K5g7mSzwgXDOs2vuRsH6DbKVmnyW1LPKsXgDjvKpEwY%2BDnk5bpDnR5tZE3bPMRzEf9fTJK8tx4IBkWqHDMM1QLuEPDsTjE%2B7xlqGGUdoJJu13bFwe49ghKHwFQjFscWauZA2w0O5dbZsMKiL9cQGOqUB54CWuI%2FmncA02K4K5JU2OuP9x%2FgqNK6UmSUas1zzkNSoagrOf7UbhxWUfMQcParwmMQtCEmnnfu%2FNCaLBfciWvp7GjizgX%2Ben9rntXwrEk3PaKJlb4TRxYWqEDvE9MGRKBtu2ZSij0DcK%2BZHnbfg85sBXRYOZ6TegMKZJyi4A%2BSaNfhreSsM1utKfQHt%2FgllJbvUOJDtn%2BLD2L7%2B%2FsF6CA9V7jVg&X-Amz-Signature=3cb852ffae5b56e8763ac26dda0042e93429bfe8fc23245db563a3a4141e4008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRYAHLYZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC73fOJaDJTeJbEEdt8AccNPBddWXE%2BuH814EcT8PYTiQIhAI3tZpitpEqsdFsjdktwSZliS7ZWXzL7a7ELnQbO7eHIKv8DCDsQABoMNjM3NDIzMTgzODA1Igz1DDbSYvj8sK6PyUwq3AMK4KoLsraVWf63vPCjsr%2B5Y%2BoIfRNtV2hauJoUwTSMl4XjPrY0FoG6%2Fkxjoc%2FLIf8A%2FGkbBSW4Ep1wRMysMf0ws4VQCSugxbpr2s1OLVveo7%2BM7O3HgySsWRQcpbpBscoqUiaqgOiFNVUXpedMAhKF3MPYL1KvQ790TyT3MZlpWeDeRGVWqi92HZXopgwt2QmduY2lTGmTWve58XrcdkNi1z9ARkcPA6%2FJZfhDKwIvTWTrLbn981qyo7Ks3OMt%2BL%2FfER2ZpVPREzRuolOvt9FmTGfSvLbNwxZcMgi6Urv9sWYiF9Ggh5dUjdZ11dWLZdNGU9N8Bdt4VJYVl0QSKgHicM93BpXfj4mnLhn5%2FvGUXBbGWKw3kdp%2B2RJgZKxnGD7MjA%2BPCBne0%2FDUfT10y9p6G%2F1jYdoT89PkpOz1XPksgJTNscmP42d2nX%2BxBV%2B2YoPJcn8HJHBPlpSBVTIozGf3FS6%2BgBRWAp98rGkNyHk%2FeBnFpyUuWRC13L2YFH7xFLNb%2BKRx41Ie9qCPN2PpOPILzi%2FzpJ2BlVxMdsElxyFARE6M8hmsvUokvf%2FJtpJLZyPhHNaL7jnBIErqy9z661W%2BLCg13%2BsTIwvoR3MvFYWCv1JK%2BYra63lEjV5qsTCRi%2FXEBjqkAelJbufxL%2F9zmqc4y6JC5f90GKOa4bUyfnGRVlLqVHIHRfUXY5kTbZ5s43N%2FurZfg3HFGnup4mTixR6sJmmh1145m1TnH5TtFJVr0dGGp5wTu%2FpO8ywPZ05Mt85F3WUCjWEcDLNB7htYzi%2BBu9xB6qm3hwzdvP1xtQ2zRYCLGDXMMCJecr3JwYx83BqcqDNKM8jfMMyLSa1gQxjecbJcDlw4947L&X-Amz-Signature=711bdc920b3985f5fa9d7310d566280c9d1725d66361f290024a34884d17b03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IJFU75H%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPQS9QZYmrd1mFtwQ1lW9rCxhb19YUXhJTmxwmWJj%2F1AiEAkBAomIgi7SKmuaO%2BBfJnBDCVogaAXJzBTIZeeJDzNbkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDs5J2ZIGL6FHXzqlyrcA74NrFs8axcH2GyGL%2F5m%2B4hZdMRt4OMc%2FlH9f0jyyHh6hidOcvvxB%2FI9yZm68CV6gtWyxe2VNbxpdsI1TwOaXEzQC%2F2%2Ffqmspht8OlUVTLi6i1mmxoOD9pvz8cF24NutqcT2qGXr4Ko5LzI5MTmrNKWgSitrV9%2Bc3AUebjFr%2B2nRBVPBoBcgpTYfD06LR3GBt6%2FHKnInwEW2%2FXH60rKOGpYbfZ5aHNxcdc%2BskgEvU3aky0cpkwhsXlBR59QfBiHgFSWKqXtIrP1GUU2AD3327jRTwT2kdc0W9mQhLL7SpIbIcP07SSQ2t%2BzgmMrzeC8gem5zL8oXboOzqLRGqVtROdikXvY23eeHuNjJr5Ixt17GeMBY6zXIywAR8O5ifU2UMh9kCrHq%2BB8KN%2FIXpZTdmqw6F55KSuz4u6ASl%2Fs5FFsQtNYiDxVn3jDUI5hiBsOZOwDPq1rgImJ5XWq8asA0JrcT0PGlOrEXyQ9QXslGDmrEzLDePRuhD%2BeewhzbEOEYwq3GPdvGofiLoXj0SVQ1nUTJlbUJeFjeSlHojkQ4gJGr3D2BnnOeZHMhuHOTYrtMIm60bUszFhiyL8YrJZ48vvWgh1he2IcPVxzud6zRxQqJ7vGRvl0iNXSpcki4MM6L9cQGOqUB0T2tpISYJa8QcHCW4ar3kZfAXCoX2725B1VxmQ0K453Ton%2F3c7ffY5tTSNfMX31y2EQQSjmv8MTDJHvc%2FFmr%2B8%2F%2F9%2FSydXV7Lds8wFHFfDKznsnGODJyPO%2BluxzBFBB9Y9ws5gdnlk7WnSqVSybuvshayos3TkEs9oeIujE7%2BK%2BiouC01E8uxgyCPM9%2FxIMSscp9AddMYgeGrAj8ejqYftIu50Pe&X-Amz-Signature=c15a57f7ae9d29fca54e148013b9de1a7f13f36b0b22db1c0f2b6a36e4cab23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FB3YPLP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1uojOAcGdSMUqmJVGXfU1gMq%2BS4SoGi0UjPv%2BxNzpPAIhAIQ4UHbuylKeFfar3tmf8bG9qltsS3%2BSpyr45fcm0CiLKv8DCDsQABoMNjM3NDIzMTgzODA1IgxfnH4hnFLMAK7T4nIq3ANRmOA%2FyI9ecmsNKMT0GBFKb2dlmeRgGmByjPXJClwsxRHInjHxY5Jiy17BEGMIyADFGNaw%2Fcdwn0QLLBw3sXCu0MrLghP1D2jDNPOGtrKAFh2xzeSaACKaVEpj0%2B5yDcCtZY7P4FJlEUOrjuqwL8x2pVqMQJXQ%2Bf5pEFLX8wqRd6i5kXiQ3UJ6wo2eoO%2B50iAXBlTjeQ2X8GLmtiiEfrNWdOUf%2BtVqYfwXCJvyX6Kb%2FITeK89LJ8kjVGUg%2BM6qsYmdUyht0FbWbjGHeU8YQMAaM9P6co91HOUnvdv8RlPBcSX1HHo8aCy9oMyc%2F7fy4sFZqPfC%2BDhGXSwe6cxrzAOghe6AEessgT5THPe45fZ27V9KHcG4WpeOvB9KUzH3VuJ9NysSv8Tw06wNCgVie40NIUxO7mdvwUyiy3YQgb0eK2Vy0fjZ3IJTmiovpgFFzKwIRh5n7T0E6ZZXVsqJCXj5eEKGEIgJeASdwPXpA9ku6TFtC6RIxMQpxlC%2FEciBfwPvkBWgbsiNBt3oH1tI6jTfBoe9mGC6xyl%2FubPjIm4pNAOdGY3ulaPpkLT%2FN6kdGlt6vCu1ZGDJ2oihDZkl0Q51zf%2FJZYv4wwlGv%2FxkRYpHrFN2bBrk3OSFZK5wXTDXjPXEBjqkAQttR3i5BnBvJZCw4MenkzjopDQEYULI9G9m4u6FvquzmfkTNApiLvD6KkJe3YD0L%2FPNW%2B4ouA8uZBgGTKU1m00MktiotmT3pXVgdUp14boIwgf%2BgRNF6P4El9P%2FO1hFNEoDJrzfVxtaZGQGHsZAnesnavOIGk9GECkD6cfnhT5UoQSjcvtNu3JkoYselEG7OfohbfsrisL5wr4N2TymqC35Q%2Bzz&X-Amz-Signature=68974fa39b8b034e63b41e509f2349a6264abacbfa29f5229dbdf3f5444f74d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=fda2913f5d8aeb19aba65309902937120cfde90ddf2b11d6afba2a2086329f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2BBIWE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpNUhjG%2BSdFeG2D%2FfFlKd87MZYGqEltOgco7QbRltX9QIhAOKjDDyP1AVPE9U0lP%2BPEBc4IWbCJyauPBOKNRjGzgCWKv8DCDsQABoMNjM3NDIzMTgzODA1IgwpBbgwVJU9tVbZ%2FsYq3APfNp0YBkmTCvakayMmMDZOrXNCbRjTXI%2BVUxHt8kw5XTvs2jZrbAwnmaalPIDS1l80t%2FicHQRT3Jxj4osLRUCOmvdqFuyTw0B9A3nw%2F4GGScxc%2FJW9XQ4Dfpb80hjCPSw7Cq2wzwil7C0mxGw5M2QTe2oyVy5JueUQLr9oU7YJn%2Bby4iqGWGf2l74JyEZGdBJQ2l5oysZqnkcOne1HRt2XxhFYS8uGdB8mQSbGaGcE5fPfsqYqsh2pboLaDUJHw8BQqi6lxVjjmdR5WfJWtrcj0eL9OUoXtnmas8J31gmKPguws4TZjR%2BwOV05%2F8skILTNk31wPcwZhWAmCVSytFMlvuho6TnMUytLgDmeHahkLtYxL8FvvluJ4pGwGHrA07n2I3Pixc6IvxpJZzyrl761VifatA6hzYbQ5wwpfZCCiehKtGuxYFO26HHMSP9JTCTUwFnEegjxtM%2ByZZBOALqmcWs%2BKYYOmA%2ByAc22SCB49I8rn%2BiyMUo2wZnHpLWqAxKyA6NVcjR5eOz%2BDUjb5YLi9xgBBDBDMVfzAOIu1zsfCDg1nyvRNBMPSDF5voZyrnZgNjV9quZPZMTZi9oAo6D1Cp%2BZ2kRf87l2%2BUBT9ewBB%2BVIKzFEi1ljuUdLpDC9i%2FXEBjqkAcrtddd5MP0WNCkHuuCH2IICT6rwiA0037XxRRxEAKXZVBKxe9vVqUA1XGuwaIS3AtcwQJuEecngUooswcpf0FlRwxr9%2BO2KLxhob6O4lnw8zbOd6UctmNUqiLxtB6TPBYRXsBxmPvAa9qYhPzZoio8FXoLi8xpfO22PwCp23rmq%2BCCTC2PdNEYgMOOj4ZgGr6KV81xbR8YqTTWSLZvkVRGRhlwh&X-Amz-Signature=3f501131d6e1c095b2866e1d9e0745d0bdea06c1991de8e5572972534f8efc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=043c8e296831768bb2e6280d6226a7d4510dcc91aafd8e56205bf47dca3a62ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=8389c57dafe791ed67ea42fa4747dd2b67e9302707a3d48a552fa05ca26aba2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=38c56768746b357d3a3ba7abd920138a8e49be6ebcbede86f138497e7e6ef563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=26c2f03c4c89a1b59fe498488ab915520f9f3d5d7b06f0b6922ceca951f8ca5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=395f285066712e11193371bd07709c95eead33199d00171368ae130135b828ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=9aa1bd4a54846ec6ffa5cd0f2c6506c169cc96e2342ff51093776260898bf1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=87837ed79ee217266f68b01c88566b6b5333b69d6963dcfc176eaf3a33e83d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=c2a2e27675d5270307354e3dd5aa974f4d501824f28b0ec9529c23745786acc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=9acb93dcb55341478e5c98152f0d2353a741ec970f7c77f5938705f9767274dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKRIE5D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HqFPaMHqBzAN%2F8xGA5UNiDhSUmbQpag24b%2BZvo3afAiEAuudwL7DmOcFL4DIDRybYE9Nvwaj5fncTujZrGbI8AYcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJJ5V7qv8gq4%2FOkuESrcA4zR5lIdO1aJqwzzfXPKZSKFEHuO7G7%2FBHngKYVcCMSiEtvrU5sE00z%2FaQL%2B0jAH3itFlqIkvHZpPAb16JkdYQ4S1Ve52vaj4Dg4KLe%2FdOaFsknOi9OpB69EQsZLxsjpdTZ2jZ3aLxgKmYPqHJsWhUVVNnEI92bVr88ndSaHpAdgwt8yxRXaDaaEKuKYkeYfednk8WIHtzz09FUqH6E%2BrsMgJl0jmrJmnwftQIdrL9KYdHYkRBvvkb3nekK3VZRZBDDxae6SKuonz8CeEAzshMUtfut2WpSVtK%2BMgFGQsXhEltRh3YdlnnzS57LavSw7YFusxK3vPdAwkU8Zk6iwvxFG1rcnif7YgR3ILph0vj%2BJqhz3mfhEPWhwWHfczEWoUS6HXnjCFY%2FWe2rvPEQLnFFCnd%2B2x87KxTpHCpwOLoMK3Y989qn90MJwpoysr%2FFslnRBF1TI52v6OG6aRqQ7G7TlLXgpLqSv8qNwJN1Zv53MGCfyq9e2oNwyMjMRiUoYRi5k8MFkQ%2BvZn0ofCoGKpcv81uHh2ugC1L8rHgW%2FtV0%2FBbIT43gcTab9rYaqpakJyR4bSYOPvi3QzTQMl3K7XTsejRsvljhQZ3EIRskCANOmZOH0JbC3JLWaOhoIMIaM9cQGOqUBp4HrN4NbIQRmqsN8SNFsBTh6yFgTkYUWXO6YEZTTPAvLGJHgLIMm4yxVBNKc8%2BGpeXGiB5Awp48fyUhYDLm3PB4EgrRjYshDGWS9191%2FQzXTEgMgTRewU0mdglA0yLOVDOH1d3fbSXRSCwGpuCdZQAjBBJEbFn9dJEi50AV%2BbRIJczsMXUzhKVgfpze7qfw7XurBmUDglXNq3fndola2jcGzcBA3&X-Amz-Signature=3a303d760e923f4ae1271589b8362dd7520e363a1702985c65b4b54d8ef1aec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
