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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=faef7f3ff5247c8c96e3c7783428f43aa7945f91c4b71db347771846eb02c7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=e587bf50dbb7e8a51c44c41aeca4d5b5bfef27e2c466941399583849900f6949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=abf0353cb946de37102a5f887f7379bc01f3e0a862ac6161b646c55c707f3f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=9821ddc99f27e6e9f7eba0313399e259e966664370899765b801d486f03e9a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=6ffa52f5f3cf1f60368157d4560ec7233af5ceaa66bda47c61e279b6a5f18e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=91dfa210d0a94b738acc7b82d550f4a5ecd50a51afedc5110a728d30dc04d19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=884f5c1f489a0e7f8105b3b33e3c10ad65400f5fb3fc52e80e51df405eaf2ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=2235097c762eb8bc45c6da73f845d951ed29efaa577fade6691e99d86536b0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=b7912fa96e0ddad566afd6a34401eadadd35b0307c63cf727e02f07a13e3c8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=293ef894b1e140b9c057767822b9460e31ff6d793ac46d0ccb2ac258ca40f286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LCPE6C6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIB7eMl0asr34mfaMVfmwzXbnfD5pfz0nkbSjHxGE%2FWGLAiB2GkHYFZLiGIXW7DquVtUaOMjJZFTi1H6XjwOwnJcJMyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMSZ3Ua7kwf%2Fu3ik9HKtwDTtfoKsVV5kvDys2jz%2BwQeEQL7Sr%2FSIIlOIB2eRsu%2FuGVCxwqj3Lruqfo3KZjC64oWS2iL8PuHKLsS12JZls5gDT7zsEPLUxKSwY2UCoP5VvOIGIRUybTYQs%2BiL8%2FgjQ5Log5eC1aV5qlTOUl5EzdjvlIdqYLpXgEdYTkyU6G6lSGPHoKAEpNAwpE%2B9jBrKZkxPnSv966WVDYRw%2BqC1FE4FZBdk%2FVu0lWoyrz3mc7KhDIpUng379SgXEIjIAonMg63h0%2ByMQgzt7GW5MYj3uyofpKf0dPhS%2Fx6GjiiilDYRdRs4SLo7tFjpjTC1AF92B4iGWYeL%2FIUjYt822uYwA7M31iIipPCaYqMkOr0v7ZyNQT6drZ6xjGrpXROlOgAZfvOuYGicsxboDQP4ze0bEFa5FbVu9fzeHn%2BFULdYCEsWKMH4eEIfo8YgYfOjYb9cdhSKT7zIXCuOkumgCvD%2BPT4Yra5VN6grz4NclpVIxT1%2BxmBckf9CgS4YF38ladFa8SYctG7m11GZANzKlDVy2lPLTHFpMcdWtGO971dt2QOl8yhZ7cnxXqxCSgGUQ9PXlj0CvkVxTqmoCHOJVbJBTautMncfejtmOObySDhCaKgqPNRZ8LvGugjIm1Iukw0vz5xAY6pgF%2FYWU7ihUMYG4%2FL30VRzx4%2FkgTWdloy%2BcQDbApIWezyX4pmdF%2FcM8rTLnUa5O39NUkN%2Fp%2BSvSNXCBnudGeEA4U5rqlog8Nd2oI33X6dVb5nmuukjD43CIJtGW7%2BKjs2DeQ8nqQJgz7snJ1H7fiy%2B%2BuUOXT6J8twnUJN5VZEDAu8X2rptw%2FDbTnnNF%2F1rIq4U85zUlxb9cO5GPQHJV58xFohI0r17Gf&X-Amz-Signature=1477a52a9b914f9860c413b41b481a357f53482c0c4d38ffb18b7f6cdce3950b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ7SUNY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCzqR%2F6nZM%2FKsMmyVPc3tvI0Ggs9RWYAzBjXWtd%2B9vhQwIgOJDDx8iYh7DA%2Fsy3ymUg8lmekVH%2FYpZDuA9UK0IYOscq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMXExST6Hh0Tg%2BhMjyrcA56rfPlKrffpHBgOBayJxlMrNMCqpFv%2FPWejqZcxDPatwPggYipzhYPBTQdM%2F%2FdWY69oV4jSFJ6iz7sXtciufvx9yqzsfeCJiW6it0Zj4zVF4qcMzyFY%2Bu%2BsT9xiuJzfSMdcidKt6EckE82so83WJDdBdXkc2TzJ4Opl9JgfGAzdGE2Yb%2BdBNxyaIOhPXo5ygjDUCoKADcHq3oR3lP2pguxP6iQZoI93unIcBkZujANSMzz93OfMl1KmGivifj1bT5bZvYp1QLRqqyNRu5EPgDkmNPizLQk8EwbTzvvpvitJvD%2F4R1LKkiK11%2BK1yUQhAfm%2BGHsqIKXOc4foynuz7xoN%2FxAlJ7D7ARaK2HlqatggSUlyxoAtz1uJeYJu4cQwRvs2FbIbDxhWcoowN3RjSj4dJAaka3W%2BCKo0r2tKJEHuuoAB0YQZ0%2BdL2o%2Bw0C%2BrJLpPc6ddu3Lr9cc4%2BmTwa6yVVysota8dL4dRO8zWOZ60%2FD1Gh2o6OEU%2BlRZDD%2BI0OdBRWnvTn%2BzKeJt1KW33MDZk6aazec2GW%2FiKuCi5c8p%2BDG7h1qQgbcJS9f54YJtMKRoDoIqcpiHAw6G005IftAb52Mak9XcrTwV6SdTskRddOPUXs4SFyPPRNEhvMM38%2BcQGOqUBjQTjgJFet7ay65ux%2FniZaDsAhClhOnr6f62lvTiwtolIYeq86BsPqAd0dMP2l29RjMqUSPvI2Qm1xyHpmx%2FOLNlln9xIaB11nVSXaasPr6I7AfJsZBiiFs9Ai%2FTwYd0IjuIP22Zfcg4W%2Bj9vXt3JoUMDSlvShIgv25x5osq7QyKzZZ3yt1s25zM3VV3BKNm%2BXHciDKSvunKt8Xtk1t%2F%2BBgyLjsZH&X-Amz-Signature=4211dc2548390b4f1786b5d03c0a73522b1193a6bd113cd668c0a71926198425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQ335YJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDxCfdL4lpQG2mn2wwxbN9Gu8SSk3ruYld%2FN8gzOUO8HAiAsQOj6thISXO%2FdgxZPGrCZ4VbfWZYnVyo6iy9ZwFK0cyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM3egA6cC0MnGsSQ7NKtwDXvJpqh%2F%2FsxLRaZ%2FsPfTYgJYASGZ5otfvwZXJ6ApngiQR5hbtm9RI3pwHw%2BPkrQqg7splqNU9Zin3WqWrPiVSw3TP7jYZJunO5WEBumd1WvdiMO%2BQiUWdnOOjesuYrm0cWQ34ISw53GNK6wVqLScVnuggY6sAc3NW4foND5JUwrrcT6EC4Z0EnGEmjnodOz%2FMqw%2Be%2BWT2K1xL6mYrbTVCvlricM7MjuVQdRWGQW6cliRZQDvRvOKhCmXSsY%2BEuViA%2FkDA9Ig4ieg75uvK33LRGWcsmGQfNA1drXvJNjbUHH6CQokg%2B5iB2SZEHigp%2BEekbN2poS3D7%2BH8IHwfFeq%2FwK3JwRN77Bj8Z6HeYEmNB5QEsnPdPUUelZtTy2XxnkH36mlJHVKsHiCD68J2iDPI6MaO6bjnrwnXzl1XhAvscwIySKdl6cwTJc%2BUM6yhEWRZOz2u3L5ooRkfwtTGKrGXb2xA0IFdWM%2F1yH1zYCOPt7nV1VY%2Fr5UgNJft1ajxwpJtWU4MVydN9glIVuJrZRuCh7CVzH7KxzsPvaNmtRJNJs5f%2FGcdnSSxD9QKRoS8oRUcOk027%2B6WRVXPUAY6fpg2fL%2Bkg8pwLjL7GX7GF5ZZxb7Y9wynbbtv0kHPZGgw4Pz5xAY6pgEM5qQvZ85h%2BwHXlqsOSnW9DG%2FyEoTMhyHJSaEvvPHfY7xndPj10g0EqC4LzrVSmm%2FwB57tOlEhojZoOSywVvzlGuoGeA2LxmGa%2BSzG%2Bdy%2BZx5HQrVwBCLV0ANogLoqIzJVlgfx352LbtDGNk8C4LzQzpx1sV%2FtAArXvbYtrjxQvMhqgxBj7VrzCC78NCp848lALjkLqRkCg8qGBOOcF3sszJn%2BnnNW&X-Amz-Signature=a4031cd3b7bfb389d7fc3fef2c9a315642cee4e1165c0c2955dbc84fd6728fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=eb01872658032a40382d0e5c98fd167d8bff57ff165e2ff2d9bf0f29c2ae2b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XKB6PAL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIB6YbAwDUWcx79mkHQnivnFY%2FystFeP3IxnB9vj9E9oYAiEAq%2BGD%2FViCsc2oCIHFqU8BE4tjnc8%2FbZIUsUDCzoSTq3Eq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKWqITsMb2Drf7fkLyrcA9fdV3NnQSJmEmCsUkvohoQOZla96K6sGzjGcfTT25LIAHorMgeIJC%2B5ebXbrB4Up%2FTjDd%2B9jeA8Qw7MnF0%2BPQPIgke8Lo2MBtuFOzRhxusGwSqXO8dwBYiCQ6OOIZZkHZZCPP02NvGa14envCrdf3%2FJejoI2xRx5ImRsEQ%2Fm2d3O%2FIzYIKEQMHMWR1BFU3shk%2FoUcH0avTyPcJG7oxA7yp6GTFvLxXZcDrnR5%2F62eekIifCd4V6af1jRPCji10OAl0ng1eu1pbyjbm3JSjo1gLw8t1XsmdroTKGdvN7LT0s3iA%2BtYPNKfC9Mw5dzXfbbRlOm8vh%2Fo3ARRRmFzaZcGoTEdqHqMwIhO%2FYnEJNTtjiI8jZnIfnDQTWi74rH4kP1mkFRGDyc3U0Htp9QFv8B4piqMXaKAxdmMgYzCeRiNA7nalifel6Vnm6rXlrWUmwNdTVUjyoY22AYdpQlTFMA958FlCmZaiyHuymdXSduhBQKV8tL%2BvfA06NHYDFUN9x%2BBOcC0JN9AhkwuSZ%2BZZaJ8W4Ntqio%2B9Fdg4P%2BbsCt1evmZXmbA9qt3WJJyxg6vv2TGUlyXrz61U9B1vSSchBlLykxW3O%2FqpX%2FO1jreBW1Eqb5GVmArx2XRD8namOMIv9%2BcQGOqUBaoQJ0F1LSiInM5lRIqZmUxa1m0bLU0ZU42GgSSO10QgjgZ0NMhC%2FL3U1jT%2FIVnZs2bJ3YI51tAxlHU3LD%2FedZ8brLLVQ2%2FmPkGahjIq8GwemRl9Uj9on5Jg7r7Btdy9eO%2BgaMwi5T3mCynq0O7uHHsJTXX7kT%2FNuJXUR552qXdmjri1XFf2K7vduYFV1irNGVtx2M2lEF6eRH8bfd5K5Pe8AtiJn&X-Amz-Signature=496e5b3c2c8ce7739d88e66202456e8cca76ba1c3ecd697c1f6c08d2085c1331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=596045e0a264d4ec9c18c61097dad3b861211647925ca0145ba273cb5cf4b94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3BMLQM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxdh6%2F6rM2lC%2BPIkysoN88qgmQzhntLdTznmc4H9ZwyQIhAIyqMfUKZAj5MgiANlXZyk5Bt3%2F5g69%2BGnhS6c%2FtSQC3Kv8DCFEQABoMNjM3NDIzMTgzODA1IgzgkDqLH7mX45o70z4q3APW7RRk3demreHJW8YUgb2ktqVuGxDo7xqG5VCXANOXMJQiPWzb9zGZmNjfiq6GaN0ytq%2FxUYDe%2FccKKpAzacqXOpnn4A6vmD5zajaeejiBVteas2zH1UUBo8XZuPE7rV6lEoATODKUuAX1L743yOH%2Byry1ObArILDwP9Zy12XGy6rEbWa2qAUTWdbQS30TtbUc9LKaROH8bz3irVW3eJznoM1Nb4L%2BB3YEv1ghW6z0LCufCmbxFoS52TJ4V4TEdwltye3FuDgiVamPaT5aisHh5kF74Jd%2FdIebZI5PKRMd8Wuz5N7b4BNIWALIoPXJA%2BMugwpCE%2BBc2acDfrPsRjHFyNFAisGeCX6g2oZbh21ePwBnPEdwXnEzrkiglMC9PWKxaGymFWEn4jJZvGV9jiRo8lCFZU3VwUSli3U1wU06QbjNfEQyfe%2FpAMkS6g5v08Tb7OU8Tv%2BEKKGOLbCXHhJ6yqXZQ%2FZdFdp8jaXYxWp9VuGg8GoYCZlXNtIoA0nCu9kXsJjAa5kfWOrUplqH7lkmlaYzzpyNJF%2FEgcsdjG42lEWKsSEM8IY%2FMbMesHnKbio5ceaZTTppgF%2BuMHiMuNPNiroq1T8SCMyRphRn58Eg3xt3tO%2FeI3TvF%2FpUvTCJ%2FfnEBjqkATwVKupYgeFsKvMyoweBAdNZ6Nyr27PriNpl4EdveQ4AmOQrpHAsh4h5um4aqzwiHbagIyfhavEa3z2KaWISdMBqLdZQ9iL3d2klWqSIJzL6Kyk0L%2BcG2OFpmLLqBQFCYbt1RObL9z%2BTSyLXO74w%2FckyaLml%2Fz8wfUHdlG%2Fhi3B8OCQIXcXS0uaPprcT1JJgUHfSJ8XEPsFasW4t%2Fop%2BOCM8JfKY&X-Amz-Signature=7ecefce1b30a304e3b35c208f9bb2a6f20fb440c161a0d5562a2e8586aad8ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=cd1445ae192f41e10802e2dcac28d3d42fe024645140722d05a366cd71f04f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGUPVDK4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHQdnPjyJGDpNxYFra7BNGyY5DD%2B1RA3Z6rohrCqDzVcAiAlQBicf%2ByDHR319MSl32bVmSw0UBPQyr%2Fus4doBb1%2B4ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMq6P8ZUZ%2BfCCl9BI6KtwDkppUDfNbvEb9VR2jmE3k5Dqr6JAf9rCaUMtwFFgjVWymOMpmylvD%2FW9Eo1orwFWCKQPX3f1lqySzu7tCFmmnjevdrr0dsYEhcdSNhYfYXf94DBqznCV1acZ6C01FaXvyP7G69QAQmSAEpv%2F5yAGYccwvE0yRYNUpGY%2BRFt3Qkb1vZZdme7u0%2BZp3emz1WZbTxTvpwIchXtl01dztTZNkYnVoRFdP2Mst61bS2YiaNT9HoN5PD84huHLNAE6vLR5U0drNHQbYaL401KeAmaGI%2FaMmhTPkjLpiTlpiduOn5rg3BGhQfZdZNLiwrSDGQkXz8bwsCY4gJgs8OikiK%2BRCDOdERywaunVXjIu5qSU7PxlK0te7JAqjr0yaNu7ls2Pc8kSeR22fv%2Fu0i3xUmzxTYABBOVKBwVDFy6wIvxTqNhbbU4u%2F03tcObcfaFfSJB2eeJej2N817B2%2FfYTfKTdK2n8IDi0TDxInupv6NBMoyxSYfq2NeUZqvIix%2B7vJ1kMQvhyDQFryFl7lb65qBQRVO0Ye3H2pC35lZjb1QrI%2Fv51foZ%2FSb7a6AHy726Pl5Hk265Jz8YfmKWfHakvblTn6Vu4HcGRIMoz7%2BLJcYFpIEUZ09KkMd6SPYyUnBZUw%2FPz5xAY6pgE1ZG1HGmNnGLUg%2BUIXdIvRoNSvhGB%2FjnusuDBByjBoMsYtDeL1yAdGAob5FsBTGK9e2iL9Ce9js91g10sW1O29aOzh1TPHAYSHprvsxOuVLLNaKJWJNUUTsL4o8oTzQ%2FxfjHISsYlD%2F6OuxGH31ZGI4761NISmlSJUXtpfaSYy4qmFjgT0Bp0bRnD%2FuPOWaZHjmO97FCqUwC3T50LLHQfFhI6%2FVWD4&X-Amz-Signature=c805e275a0ef60aa8bb5f21b03acb2d22cdad1fd1171426a0854ca6becd52ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=76eec9069b28f1f35624bc329de139e12a2cb9b4fe59d98979ce59f5910fd499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLWJ5MO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgF56u1UkXCY5i2sdjOtBYDI58lUJNTa%2B3H5kNruikGQIhAJKL3HT%2B3o9abrolRjxxOSJTgSmGFR7qvGmJOKK6D6xtKv8DCFEQABoMNjM3NDIzMTgzODA1IgzJvdgb0WCtO8vjq1gq3ANtMTUFCN%2BNadMx3lybTY%2FDR6Tyn%2B9xquU%2FTgtmUr7nlZBBQEPSctfz91AcqwIUfWG8RuOeSezN255RCTkkiZuoiKOv61dc1PG%2FOX2ubkC0C5Uo%2BzM8v6onpxbeC8edXz9Pnxqc73h4sbfgOYcvdwgby2aM130xqcNR68nS74r9JwbdaYq2yucAzMGThxXOcQb%2BtXa8c9cTwJpldIklmkxRdkfpIBYyvHWI5OemxoGncx7TV8s6eNFE5KYYXrLSqkfRFfH%2B3Pblhgka%2Bl0jlaXRfkZC6ElMwwIcGi90SZM8AYtE%2B3Sr0lsqAxyoU2v1%2By6%2BM7pooDg%2F0TNj58FckDAHLtWA0D7FGnbrc9ftVi5okrF72ay8DKcDIiDtXXJPil4K1X8r4gHuHy0KeLNH8CIzMv6nR9ExanXUcMtUHVz0hAtx6c7DsPoET8tUfnBRPozDsbol5Rd%2B2iBYKaKnteqwhHd8A3h3HQ%2BMO00GYNUuTPlGtVs55vP8HqvTh5JekMnaKlDJgQFcvf32B23QZHqpbrcB1QuVplsEVZfu0MUZOHV2LagMG1gXmXpJe129DExoiBuLfjss9SbVyGvlgvC1vVjE5IOAFEK6mVirIgqs6hqVpNT37cY5SZyYKTCy%2FPnEBjqkAYWxdSx8fwqXDS8GvzT9g95%2B3EP4Lys9vbAQkLCSx4eoE%2FQLYCBO5r%2BUHHxkTffhXOSPl4BNRkIWuMUVMQKk2a8ZLVd%2Bnba9Ldmzpz5%2Fe2jrsyBGIFoMrXKKCYZq9%2Bo4T%2FZIWNbSKZEEE2BWM%2FTRU7rqsy7ItBrU0Re7zi9nrjo%2Bkdfq0Zyw1myLsnyB9ErhU4Qj5Fl8U0YjPrDprhT7148dMvDt&X-Amz-Signature=08d5e244625a26f75ddae6620ddec629d03be817a5dae472ddb33933e1b9ae14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTUAOMHP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH%2F0TPxVFPyEKI4hzIEb6NRlQrkE0xlsCPfAp9p1JYDUAiEA8cImU2hUzzyiBkpvMNzoYh%2Bqm43zIIly9WLeXJhRCa0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDIJXBJpNGI%2FEIym5WCrcA8UuLZkrWDZHfMz8Q0LxlM2e4Jn%2BR0x5ho6138KYu249YLZ4F0t%2BDxTLthWqci673BLvAB8j2DLlAIPCNwyJdh1qjmhtHFD7D3QUsr0DbYFg3oTpYu7R6qQp0MKU%2BPFcEC4zmxF3vop5AJV0Mbs4tQsiHdLV3ybZlOCiqj3BZlbjX7qLAliDle87vm0kzFrIP36m9o7mTHQ8rluZU%2BkG0oLML5VfE2a8N2JIqK4Kf3RmC8ttJxTqKrNR1M8B3aXTcV%2Bico%2F4a977oxZELfcrN7%2BaVMoGxTopRvCVMydSheREDpypOGV6XE3R1WQQgr%2BeT7VAg5vI6Jep%2FOj0NvE5ieephdSbAsPKS5i%2Fww3L71xYn8ave0jzQU6kxt46TX02CDomITdYB9jsRJQYkzrGOSW2%2F9SypFyzJ1Ji%2Bx9X9guwaQqOg42D4BkVAPkTxW1sfr42pSFXtanGyI4bbYFZHcocQJm2JIm%2BuYVS%2BhYGr8bHmcSUcShMjDR6au%2Ft14%2BiyBuJNx7SObI9wEZJP3yZscG3%2BjQHUxbhs6ynLNLjcRStm%2FcsoQZw6y4Rp3f5LvMdlq9ZiPP70N8fwTDCcl4t741rhIKFSKlz9qCGs9XX2m3%2FEuqfmNA4hDTzuZ2jMP78%2BcQGOqUBhK%2FrYfNW9x54JbuCaIcYegmKETEHmapJ%2FPXXa%2BIUVrwGPScMUjvD7exMrsrEHeh83kBQZnD%2BPzFk3cPUXROYYvsnASKr5TW9K4hLMe2hGHJdoGdl3lsdIcWZ%2FsUnE6CzTT3njMRceTkUNPijANqJ1sGzdnK0eqFHUMUhLPiAwVKgN1QOTzYMi4JxA1rPNbwimUWpZT%2B0iJbVQy%2FpQsSUxKo%2FL5lS&X-Amz-Signature=3611aa02534379270b0cc5111e951099925ba53efa95e032b92b484174232bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BID4PO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGKYplT5ig%2FaIyAGW0Kt1NqZ0be1KvZ%2FHq78Ch%2B6b4DTAiEAiAxrSh7wAe9Kd1sRV3MiX2ND4UuBH26Am%2BIwvI6xZ4wq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFhaMsqmY%2BaWXKxa%2BircAxUEXixY%2FE41XrU1pClrYTDEMDPAlWqC8j36WOdtshxBH%2BmyG4A7zCuf6Ey5Z9aZrWPeUWB8VF2ixIRAu25N3bfuGxjmAiFbJcfwK6e89IPt0zM4RqwogMooOH1YoZ%2FjZ9iokoiwkWtRQX0H1gnHCiam5Bq344i7X1Qjw3LuDE%2BWrUXesa8px3kyZY5bVunSWXplG6KDlqJh5OpfHDz0kR56HCWDVBVuXX961pbpwVZ9TNvqxt%2F6KhJPnt%2B2CWPgnxXXhiSkQ5NED1dCrRK0BdVSFk%2FXmht9a6B5KponTXf2h5%2BOzIdtNv6lxMajyvWAX5CBUl98zgEoLfAof7TnxUko7U8kX1%2BBolmEfnJIf60MYWyO9ZK%2Bae1MGASu6HGoUPDLNtrENUQw0QTWkNNma8mMAEEzJIz1PXFPtmlhWA%2Bl5QRiMFenOTKVz%2BZIGmTkha%2FluexkJT23TDKDpGBVkwedVvNNAwpixHensU1%2F5slCGGbMvTst9lUebapxdgZ4SgSQjp7YtLfnyH9HI%2F3VtLFIaE2sAG9ENJbge7QGEqzLjNpudHQ34flVDjK%2FwxDd9pqYr1a8Mkshb%2BxPwt5Zk%2Bh6ab7pl24%2B%2B0YQRcDNmNSSLn7csQED6U5eXC4jMK%2F8%2BcQGOqUBKzV4zhoIASK9myioyhTXJkDNPJdKyUOxEq9WhTnjp%2BpVnHTfTS3aLHFG722rSEb4tpANwyTao9%2BGj8LutigelrW6ln4J6y0fXKOXBIEMsf4OTHDVWrjDky5aFut%2BoBl%2Fk4jKHPqEl3PlpPagFs9xHjnYjyirHoruHQMqGvm943w9IsLWkMsp9Z0dRzfiEsOoUR%2BLV32RU%2BhUOztBkxauUIy6ra7%2F&X-Amz-Signature=4df307a0b8325c575183edad2c4fd35aa72af014ea58f04d8f75c38919ca3f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZNOWHX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD4L8iqIcyJidrbuVKKXBHQ3Sme1U4ihyRT6dlkQ2qFJAIgOoM495U9fkhjD3sYVMQk8NoauuqPXRzN3oZTFbE%2BDcMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNrAkf1mVhyMoXKOdSrcA8Gw0dj8iFOAUsIHDGifiBVX7kV1z8M6wFn62xL2pv%2Fpz4fe4jbhkSeNuRoYVlaDifvs8U9S9dflQvxEV6i4RkWmWYJz20wQ7Xa85SbMWvlw%2FVGJatkiUVSRBWAi7ddEN3t%2B1iHMVyFNogbTC6O6YDZynOUSd7Ija%2BXmB4lbcgt31GjZiryczJi%2Ft9CembSJwmQ1QYH0ST1txvnls08kTowBSehGHAj8%2FuTOzdXnpI42POi6Jx4x%2FZdNQrriZc0elnCy8azfAtrfd7MeJJcWWUs7QmGrbztN%2B%2FDksXtDZqJ5Vv%2Bi2RZwc4oTe%2Falw4LvisLT0CPGSG5xkrGBrt4JIb9LiQujaUdrhq6qPodTCNbQ8Vcs4xUnAgR3lOw1q7OkyzKhHuhBDab2NNDCooul0PZdBsZERnIbKq134VBBv4zEPSyH0F9hQR3aafqK%2FE4toUPw6BN5%2FCh3h7LDEj8lnqDzwuxJHEEeFBsW7VmsQ804Z3Q7ou40hpbUjCs2%2B80MDgKLiII26%2FjW826dySyWeda4siTkU7VUNw1yEJ%2F5RpxfKlxURY2Uu6VnMggcYTUPExTcVaKumH2MSZyGP7bJVP6eEjVstQt4OxCIfdrOj50%2BpxvEZU0R6G0o64crML39%2BcQGOqUBF2y8lPvmXE4m637mBpiK%2FBYzuQDUKrtrMhLSIJ34XCjd%2B9MSYq%2BR5%2BK64sK%2Bre1DDS5dLaiIN%2FPN0V6zxmS%2BtPuciC584PTP4PolUd1UepmBMB%2FTCXMm1Mv7opkrQjGR0oY6qPvS7OkAnCowe6CHrPuTH0fD0D8v1tyANTHM5tvkyQt53JpO92bfVWAPSpf%2BrypMonKoxK8Zuumi88S0JCAhvfBx&X-Amz-Signature=1871ca720cddddbd8298e499314d224613991bcc1fbb631ec197d2010ac1fa39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZZPI7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIBte3Z0JS6jKdQpUHysFu7Mfr%2FGQX65S5lKjZwEJZew%2BAiBLm06M2qYdiVe40fyVbF2Vakz9cGQdrhoYlYb8JZxDrir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMjClXjXpeF9M%2FoR92KtwD%2F0hAktz3k9a2bfmegth7duMr037QF3cHW7xd1MggjUCTR1fyP1HO53vkqBS82LRt2v0Rk%2Bq1rasBBy8Vi8NHuw%2B267Jfo8Z5Ghnh0zZioY039x7MvkG8XFH2u0vcC%2FGYbdVwuIZSgzuZkGkU6aMCSNTDj%2F49n%2FvXYTKduZFmfFiHg9s3ZPkFmpwdKMorac0URmrA24lyIqzi8NFe5p5329rmbkPWxyy3K6QfshzJ8IktQIb%2F33Ryp%2BJX3Gx6u6SrrUvA4RbtwPuTHLYXIC0EkDALJGc09Baed6MPg7JHrOC2%2BfNxiibAiB8U8EFjNL8R1qA66fKzLk3N0nxXzH47iIsKb7v%2BDND8YonU%2Bcblv3PyDV6I8x2HuSa%2FTV0KA4FVPKjqD5VwZFeMZB8s8fz5vB%2BMdxgngso02rKbcjnaMQuzwdRlDk3oyg0C5NSuCOLiERdCHQm2HZKAB4TBEschSz1T3V%2BM8CmRUsVhbS6X0bAiJHLhOjN%2FtQL1vgnoDsmAGfpfuSEvb8JuN486hCaHuzRuzZ62U3N7bdbSkB123wlCXabvEjTim5UIZzBI4nfTeTciZ4KBaKeoyhOn78h%2FZnhKAplZE%2F8%2BUY9iXOHRfGYMfqnQDWyfM19wuBUw5fz5xAY6pgEEJRfjE7iCyme%2BPUDnr9oIUaNjAEj9l66WLF1JjL6axvIWfO%2B3aRbtNWcOdmOxscLt4RgoGSs0fvgj91eMKjkcnMLExD3emyQ03PlPboyeqrpA9ue3gDdcyaT%2F7Z%2Bcb6lIQGmRrxlFkJvOnkx7SLz6Dx5PMlBXeaLFoBE2KP1yDJ7%2BQ%2B2uiTPdm2EbH8zpuQNZYfZIDS6kpKXRlApLpEwWXNoLr3ym&X-Amz-Signature=ea495615a94bbc808cb35854c5038935ece4882885673765484b052682fa4f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=b3129006492a97a5371f6d87667143f936cbc76043965c53ee5954abdec63f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G64WQP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDNbjCN%2BbwnciTseESAmkWAQBQQofXsO5WjBTW8ocZ%2B9QIgQRqIJI9MtmZf9m1wO6ognrtQUl9RPweOxLTT%2F68oyP8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP%2BmC9RJIufKDPPrTSrcA6BuqBJ25F%2F3OhOxWmqYJIQMrPMs9oUB%2BQTpsc7U01%2BgOoAZViCpqnYXIBuJNP5zq4prRXh%2B2%2BLee5ozyejnn4ySwvDb4vG78SawuXFG5e5ftmX78A3zn%2BhcYS7aJn9VXzVdLfxjSNl%2FMQKYK9nkHzgJ%2Fx8PuJdVPLA6oojjLq2WpI32yu9%2FpbVUT5vVkvD4ad%2B6TWZEVwnNnSXzGYUNMEojs9%2FxPbXRzLfr94MWVMnTWeszcJ0wLoqBbgce6kgMP3bqbbNNMnkBxOJUow5GjyNKl2DfDxaaizD3AV6ihYYKeTESs7R9fnIxqMfHIikU5YjUZ%2F6jaLdCiC%2Fv%2F0TTsnQKQ6nQcK6VdUUWcGH9YYAqrB4HFrF2dM%2FAaTrtvBwyiqhTLZ4wc%2BimG09rUZXLdre77yJyIelwyEDiEoU%2F7Nfx68OaNcBkyVS69xi6%2FgOjNJoy2v6G5sKsNp8ewqwY0fQtu1YFs7c8aHfJjYe3awI2lLmkE5Bc0cjt6LMYyJ0EQd8FjSHWqKop3jaoR%2FYQKMrR6J7hPs4HgvrAiT1rWRnJzxknwS%2B8YwDWTePsCXgBy3hkQvZSWtTaAVRlZMKvv0XPGq9%2BZ%2F23kuZN2y7rLD2Q41YvIymg4QFpyywoMNz8%2BcQGOqUBf8d8wR4%2FAxMVWFeKwbeCdlKP87nISnMc%2FwzTvLg%2FEl7n1EAH0A9zOCKc01xu5u8nYV3AhBAWiTUSjTerfcnq3T1XCskbJHfHXz1tmsC2m6kHgiKAcaSDLTve554UmWp6PQaBpodzbccyJqJaZO5byJe%2Bma0XzOwlvqvRKZWL6%2FruIbli7SilUstM6SWGgXPiG4iKRkfRGUbP%2FC1R%2BRaDwZifeAaH&X-Amz-Signature=e7281e309913a6abc60cc515442251ee5ae6bb2554af003d946d0d9e2c1ed697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=4c977dbae62819d98517e7a6148dbac9b5f44354a201a4a749a5d336ce85f7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=1ae9c717946b867b9803b577b4ce9f56f5c9429fec3a090ec6696fe24562e1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=8f696cf59d3ed2b959a2633cf1968e3d2c83b40eb54afb43c3ea5124018cd22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=74e5bb1eb80200bfef93359dcaf183fb1629e5ddf07b365094ccd7d4bd1f1bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=56c43eabd31e0ffeb67c7ac72cda030b6364d67871c15f61add85d0183768688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=add066835c7749d14c3090338e28d1d847672ed07f08fafae4895446bba263ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=8f696cf59d3ed2b959a2633cf1968e3d2c83b40eb54afb43c3ea5124018cd22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=2a54bdfc7bba5198bc21c5ee3d4b051749346e98a9edd55a12a997e8b6b9432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=02119b766b96f02c55f731621c0889540fb92bfb56b9f6169941ca50380f9b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJGJJD6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2FaUwhxcNiYi%2Bi4u9vXCrtX%2Bd9SQ0bqlJqH9mXPWoWOwIgC5i%2BPIfPtkPnF7%2B58bufn9%2FFzfg%2FRm8yV8T6xs8gi0Eq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHD2oTncAEhu9A%2F9jircA8%2BPf9CWPivpXScC3OqEyVeLxoqA1phd9GcHfCBn3hO7xSX1Vq6JGU1muFffnIl7%2FbpuNskAHuhflAW8QuYOargCv9Ir3FimCoyHmz9TuhPsoFQ2yolo1LSOKHyClasHzdoA0Ixif9XVSKbyux8Dkp6QDzA6E3g56bgzj2Y7WyyzGGgVdDFZ4kWA2RqpBKwumJCOzwvei93uudTt9wzg6JiSyUslEYnJo6AbSqV7tNtDeGVL2cg6cd%2Bm8%2FdCs4Na9QNaUxdmxoAtNG5C%2FIc99oX1Io%2BwFzmpeWbK74A02EZ8xWu2U9eaSvLdtBWGG9NJa4wgZacreKgfyiz%2FfPIBqaobfvlaWSROcHA4AQ38SAUNA3dGvwXx79EKbKhPr9tqvvBJaEvKcJndxhy6%2FYHKInVzBn8RxogyIrG0qIpqDFmo5KnX7rCOOd8M5QSwjyyx64bv8zTt2rEqucS%2FVCZqkyP3o%2FhKXoUktmd2Pqk4g5oLeMiNsURBqBD5nKyByu7qeFtS3j5v27mu4FsHTMAA4QRY3pRJ1U5Q7lMlKKBOFQAseIIyUvXo8vbve24gmEBnE7xHeLSp4TDnT%2FQYPiysKxmvNL%2FZWwIIG0nnJEx69Fugg%2F2uyWGL7cH37FJfMML8%2BcQGOqUBBXLnjUmtpV6KgCoNPHuXXXpkzTfMzjrWpNU6KmFL5vpifHSUmjlrPbtzjUC4h5mwpjl5Fz9cjttdGd%2BZ%2BstR6O0p3Y6kpL9TC2zpCSOgRw6I9wxZi6lpv9kXgVDWa%2BhkwwMiovY9Rm9ZRxi6UC3r%2FdOyp2AIPD%2FUVuHkMPBN5u1w319HctOpEB%2FZywt%2FNzsll%2FwzVQ6wtleC1OjU6Q6I2ud7rwoL&X-Amz-Signature=2f56aaf6ace1b97cbbdd347acecde83110594d542577bd5e0d4b8a58875b113f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
