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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=eb1532492a8dea354e443beaecbdce0b98f1268ffb8c59bc2245ddad9318a809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=e55555b01921668b2a904b07b83c6dea92d0d09655f4a6322751d13337a0fdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=4d026a5c13cd47456a27489bce505bfb2342397764fd7aae9e5396815e449868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=06785cc9f748a15da174e4b934892fecea5fba1ed17e4ce67bf45eb84d0e2927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=d3a2429d6085271168f92f51816524adefae475d409111d45088daf75d2bc9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=ce63c0f47c011453c46c25b3e22b96ca7d23349e9ebf5ebe6a92b405923110d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=d86a3ebe0159e350cc980caaefc82edc54e45592ce1b09ade2b500040c904df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=712f06d52dfbbc2e3ce930c190a38f7d5486ea1596b8f45b134b65a80c695e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=5190eccfff33460da83f84bbc06ca03d1e0cf3f8192e1f39da02a9c21d14c464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=a296cd0f7d2796c76164ba897f61b8b237a0b0ee215cd732f17e2635a201d74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=49f4901b4ba2f521a228a3bc855dda9edb181dd371a87b919368459ab7414259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=8eb2b15a11ca7dec54543893f1ea04046a43634f4b41af36487ffa9585b6c1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=dc9ab1d47e69acb48bf94d2604849a65abb70e5ef368295e04692a5e4c7c1211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N53PW3E%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDz%2Fik84q0b9Jk58W0GkNlEyR5ZCItXVgA8F6ZyEnbTQAIgAe9nXxUjKIJf17PHYV2gYVfmHl3jxqCU8UorQ6U64FMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOnoH1Dulgbp9SFRircA4KZEBu8344%2FWZ1yIJitVxrc7ll4NYmRDGFviBLcqhJ%2FrxjcXhbWWEWxt3ZUjLhirdG73CWSUnQTZjmoLMFKoMZeusKZIkjcGBDKcoDDsSZDzEd3vWcThUi7FvRLY9YVlH70crhapEgSbi7n35WwcM5wQtxMsqw07dlkFPQoeMouXBMf%2B%2BdwSjrLssiLlZ8x8qeUYkK3NLwCYOJffn0gPP7Lkzwr4ig8Xl7Fnz1NvR74W6At3ZVvsNo9elKm%2BxZu67AZ8dzlJTanzNCMoz38W6GdbAAe2lucmWSaO9GNu3M%2FXYaVVDvxDHAmlHE9cqmudAlVcoEN72ITQsfbwjncPZ0OgJozGTSGE13ZpcLwtwc97o%2BI6XN2zzCmunSNZfgx5XfF1z3k2E2c7i%2BQce8hIjWEfh4ZxUHtsoXa58PSWsufGFSJ907Ood3Iaa5yEQaFQlcaE1IaFo4eM9y8TMtwCqoybRT0Kh3OmXjF1JRDfAMcReZ6VQH%2BNkMJribJoAjq%2FpBrgbWKqm6dawuzXJrw1Q4GDC19ikMU5FX97204HeNKKDbByrX3pVUy7yQxvaTR38UetsgCWgTP4Mivu5zsqjtWOKbWxSgaSqbmgms4HFMIU9rz4tA3%2FoR%2BazWOMKSPnMQGOqUBs%2FiD%2BXS9aZPDaRc7c9h8KpVxqavTglqKsKA8UTOa90Z29kmvvZQrf4F1VByKzZOc6b0lcnxvqhHnGNi99XNrjtI8WL9zRXmB8QIRCPENqfJ297oMWSyFxlMSukLwtOi4V6s84O1a1mZg7t%2FxWP8ad9NqzxPyr306U8w1MVbWMZnyxlmt0HRJfJlo3vosirDFlSWmDtWsc43vg2ZOk2bRS%2FZ9TKZX&X-Amz-Signature=a75b2ba317251645420581349ee4d83c032f199a42e8fbf9e6b2e1bee276aac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSHZWZT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjD1ww82i%2Bj4wfID7A8Jw40YG9OW79eCPtb9hq53fGVgIhAKs2wEEE2iSULw2Zl8%2FdSWEGvnTyP6Mj%2F8CJF4preAYdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOkjITtkNZPzL4BIq3APHdEaECkomiFa51gULOUAnIkMYAHxf5ecM15BQKNe5maBuOffsLGuunIRplud7cXJ6QtMQh3YRjfI%2FGnXpV5DrDJQ60AjkhNDLe%2BZXHOoBBRrLAPJc5TiMy2AqLvltuhOzqIRH6ujGwHsm7wAt3gXve28lral32kSKqgJ9IPIjR7XDas%2F%2Bcc0arszNmHIGR9xdiQOgNy7mc6lYPi%2FZ0v7nUhW5A%2FT%2BZuCxK1GAkNe4%2FY7LvNZkU6fmx0F9PKUClh7ZMILc%2B0xRnpF2ixRUQCbkHCi2sD%2BBMw8MKm2eJGGLbRvoFodO9z3MvS%2FRon6rX5IedQJXSfoIMkQCISHttxJDcReRK0T%2Bfx%2BV9XS%2FnbuAAGqMs3%2FGZpUIuJfTDET2uS2fKP9JxCVktFrb3ahPhCoUZ9zIYGur5wtVnMbR5WHGL8feW0wRXPT0V5Mz9OR4Ui3txFDKD6BkPUNctxaFcLNDO5u7rkwGr1lh3JBIclVldf6%2Ba8Rw52%2B%2FMYP6hutykWOcIvciBm%2BsKZcuLLl312YgK8q0dooS7u6gEQYSoS5sCLOB7%2BfNDNgfrK6loY4mretgBGj%2BovyaM6UtOOazRyCqDVcfNqkt%2Fy5PKAt36nUYnb%2BlMSnlcOLQqdFtKDDUj5zEBjqkAV8WiPxsTXqIKboFCjqXk4kT%2FYkg%2BaTKM0mcPhlkvVwiQQcf7LOecwblAvA%2BsU%2FZ2MawnFpoVk%2BnEgQ1L8I1VQrmOHHsIhl1XxZ0fbDXt5V8s5GgRz%2BGBpJr%2BR8rlyRlp3K7xBeX32gVoqagxOz4Kd8XNVCkYmqOCf%2FvZlMqpGZa091Pk0qVdfUvYcAp4Onh393IAtd2KAJNRIwhPo8sU31y2pbm&X-Amz-Signature=31e6bb325be0c8bfece040db1c1113153bf12251e6d1c95d1804bcb9a8978d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSHZWZT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjD1ww82i%2Bj4wfID7A8Jw40YG9OW79eCPtb9hq53fGVgIhAKs2wEEE2iSULw2Zl8%2FdSWEGvnTyP6Mj%2F8CJF4preAYdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOkjITtkNZPzL4BIq3APHdEaECkomiFa51gULOUAnIkMYAHxf5ecM15BQKNe5maBuOffsLGuunIRplud7cXJ6QtMQh3YRjfI%2FGnXpV5DrDJQ60AjkhNDLe%2BZXHOoBBRrLAPJc5TiMy2AqLvltuhOzqIRH6ujGwHsm7wAt3gXve28lral32kSKqgJ9IPIjR7XDas%2F%2Bcc0arszNmHIGR9xdiQOgNy7mc6lYPi%2FZ0v7nUhW5A%2FT%2BZuCxK1GAkNe4%2FY7LvNZkU6fmx0F9PKUClh7ZMILc%2B0xRnpF2ixRUQCbkHCi2sD%2BBMw8MKm2eJGGLbRvoFodO9z3MvS%2FRon6rX5IedQJXSfoIMkQCISHttxJDcReRK0T%2Bfx%2BV9XS%2FnbuAAGqMs3%2FGZpUIuJfTDET2uS2fKP9JxCVktFrb3ahPhCoUZ9zIYGur5wtVnMbR5WHGL8feW0wRXPT0V5Mz9OR4Ui3txFDKD6BkPUNctxaFcLNDO5u7rkwGr1lh3JBIclVldf6%2Ba8Rw52%2B%2FMYP6hutykWOcIvciBm%2BsKZcuLLl312YgK8q0dooS7u6gEQYSoS5sCLOB7%2BfNDNgfrK6loY4mretgBGj%2BovyaM6UtOOazRyCqDVcfNqkt%2Fy5PKAt36nUYnb%2BlMSnlcOLQqdFtKDDUj5zEBjqkAV8WiPxsTXqIKboFCjqXk4kT%2FYkg%2BaTKM0mcPhlkvVwiQQcf7LOecwblAvA%2BsU%2FZ2MawnFpoVk%2BnEgQ1L8I1VQrmOHHsIhl1XxZ0fbDXt5V8s5GgRz%2BGBpJr%2BR8rlyRlp3K7xBeX32gVoqagxOz4Kd8XNVCkYmqOCf%2FvZlMqpGZa091Pk0qVdfUvYcAp4Onh393IAtd2KAJNRIwhPo8sU31y2pbm&X-Amz-Signature=ee211a2d28fd2a447d7ddb7935c2f302430758684ba4375cd61050d3f12baf9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSHZWZT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjD1ww82i%2Bj4wfID7A8Jw40YG9OW79eCPtb9hq53fGVgIhAKs2wEEE2iSULw2Zl8%2FdSWEGvnTyP6Mj%2F8CJF4preAYdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOkjITtkNZPzL4BIq3APHdEaECkomiFa51gULOUAnIkMYAHxf5ecM15BQKNe5maBuOffsLGuunIRplud7cXJ6QtMQh3YRjfI%2FGnXpV5DrDJQ60AjkhNDLe%2BZXHOoBBRrLAPJc5TiMy2AqLvltuhOzqIRH6ujGwHsm7wAt3gXve28lral32kSKqgJ9IPIjR7XDas%2F%2Bcc0arszNmHIGR9xdiQOgNy7mc6lYPi%2FZ0v7nUhW5A%2FT%2BZuCxK1GAkNe4%2FY7LvNZkU6fmx0F9PKUClh7ZMILc%2B0xRnpF2ixRUQCbkHCi2sD%2BBMw8MKm2eJGGLbRvoFodO9z3MvS%2FRon6rX5IedQJXSfoIMkQCISHttxJDcReRK0T%2Bfx%2BV9XS%2FnbuAAGqMs3%2FGZpUIuJfTDET2uS2fKP9JxCVktFrb3ahPhCoUZ9zIYGur5wtVnMbR5WHGL8feW0wRXPT0V5Mz9OR4Ui3txFDKD6BkPUNctxaFcLNDO5u7rkwGr1lh3JBIclVldf6%2Ba8Rw52%2B%2FMYP6hutykWOcIvciBm%2BsKZcuLLl312YgK8q0dooS7u6gEQYSoS5sCLOB7%2BfNDNgfrK6loY4mretgBGj%2BovyaM6UtOOazRyCqDVcfNqkt%2Fy5PKAt36nUYnb%2BlMSnlcOLQqdFtKDDUj5zEBjqkAV8WiPxsTXqIKboFCjqXk4kT%2FYkg%2BaTKM0mcPhlkvVwiQQcf7LOecwblAvA%2BsU%2FZ2MawnFpoVk%2BnEgQ1L8I1VQrmOHHsIhl1XxZ0fbDXt5V8s5GgRz%2BGBpJr%2BR8rlyRlp3K7xBeX32gVoqagxOz4Kd8XNVCkYmqOCf%2FvZlMqpGZa091Pk0qVdfUvYcAp4Onh393IAtd2KAJNRIwhPo8sU31y2pbm&X-Amz-Signature=a56aa6bbb1874e8f2600129696ed51fe8ca636c2f90be0b90ed13e1e9b6096b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSHZWZT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjD1ww82i%2Bj4wfID7A8Jw40YG9OW79eCPtb9hq53fGVgIhAKs2wEEE2iSULw2Zl8%2FdSWEGvnTyP6Mj%2F8CJF4preAYdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOkjITtkNZPzL4BIq3APHdEaECkomiFa51gULOUAnIkMYAHxf5ecM15BQKNe5maBuOffsLGuunIRplud7cXJ6QtMQh3YRjfI%2FGnXpV5DrDJQ60AjkhNDLe%2BZXHOoBBRrLAPJc5TiMy2AqLvltuhOzqIRH6ujGwHsm7wAt3gXve28lral32kSKqgJ9IPIjR7XDas%2F%2Bcc0arszNmHIGR9xdiQOgNy7mc6lYPi%2FZ0v7nUhW5A%2FT%2BZuCxK1GAkNe4%2FY7LvNZkU6fmx0F9PKUClh7ZMILc%2B0xRnpF2ixRUQCbkHCi2sD%2BBMw8MKm2eJGGLbRvoFodO9z3MvS%2FRon6rX5IedQJXSfoIMkQCISHttxJDcReRK0T%2Bfx%2BV9XS%2FnbuAAGqMs3%2FGZpUIuJfTDET2uS2fKP9JxCVktFrb3ahPhCoUZ9zIYGur5wtVnMbR5WHGL8feW0wRXPT0V5Mz9OR4Ui3txFDKD6BkPUNctxaFcLNDO5u7rkwGr1lh3JBIclVldf6%2Ba8Rw52%2B%2FMYP6hutykWOcIvciBm%2BsKZcuLLl312YgK8q0dooS7u6gEQYSoS5sCLOB7%2BfNDNgfrK6loY4mretgBGj%2BovyaM6UtOOazRyCqDVcfNqkt%2Fy5PKAt36nUYnb%2BlMSnlcOLQqdFtKDDUj5zEBjqkAV8WiPxsTXqIKboFCjqXk4kT%2FYkg%2BaTKM0mcPhlkvVwiQQcf7LOecwblAvA%2BsU%2FZ2MawnFpoVk%2BnEgQ1L8I1VQrmOHHsIhl1XxZ0fbDXt5V8s5GgRz%2BGBpJr%2BR8rlyRlp3K7xBeX32gVoqagxOz4Kd8XNVCkYmqOCf%2FvZlMqpGZa091Pk0qVdfUvYcAp4Onh393IAtd2KAJNRIwhPo8sU31y2pbm&X-Amz-Signature=ad6599aaae7e4716aa96b309df37f0534a81edcc48d0d567bc42102327a411aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSHZWZT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjD1ww82i%2Bj4wfID7A8Jw40YG9OW79eCPtb9hq53fGVgIhAKs2wEEE2iSULw2Zl8%2FdSWEGvnTyP6Mj%2F8CJF4preAYdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOkjITtkNZPzL4BIq3APHdEaECkomiFa51gULOUAnIkMYAHxf5ecM15BQKNe5maBuOffsLGuunIRplud7cXJ6QtMQh3YRjfI%2FGnXpV5DrDJQ60AjkhNDLe%2BZXHOoBBRrLAPJc5TiMy2AqLvltuhOzqIRH6ujGwHsm7wAt3gXve28lral32kSKqgJ9IPIjR7XDas%2F%2Bcc0arszNmHIGR9xdiQOgNy7mc6lYPi%2FZ0v7nUhW5A%2FT%2BZuCxK1GAkNe4%2FY7LvNZkU6fmx0F9PKUClh7ZMILc%2B0xRnpF2ixRUQCbkHCi2sD%2BBMw8MKm2eJGGLbRvoFodO9z3MvS%2FRon6rX5IedQJXSfoIMkQCISHttxJDcReRK0T%2Bfx%2BV9XS%2FnbuAAGqMs3%2FGZpUIuJfTDET2uS2fKP9JxCVktFrb3ahPhCoUZ9zIYGur5wtVnMbR5WHGL8feW0wRXPT0V5Mz9OR4Ui3txFDKD6BkPUNctxaFcLNDO5u7rkwGr1lh3JBIclVldf6%2Ba8Rw52%2B%2FMYP6hutykWOcIvciBm%2BsKZcuLLl312YgK8q0dooS7u6gEQYSoS5sCLOB7%2BfNDNgfrK6loY4mretgBGj%2BovyaM6UtOOazRyCqDVcfNqkt%2Fy5PKAt36nUYnb%2BlMSnlcOLQqdFtKDDUj5zEBjqkAV8WiPxsTXqIKboFCjqXk4kT%2FYkg%2BaTKM0mcPhlkvVwiQQcf7LOecwblAvA%2BsU%2FZ2MawnFpoVk%2BnEgQ1L8I1VQrmOHHsIhl1XxZ0fbDXt5V8s5GgRz%2BGBpJr%2BR8rlyRlp3K7xBeX32gVoqagxOz4Kd8XNVCkYmqOCf%2FvZlMqpGZa091Pk0qVdfUvYcAp4Onh393IAtd2KAJNRIwhPo8sU31y2pbm&X-Amz-Signature=374e4090d5d426f908e5c45081e3efbf80d77dda926c8ce65fa38238522248a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSHZWZT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDjD1ww82i%2Bj4wfID7A8Jw40YG9OW79eCPtb9hq53fGVgIhAKs2wEEE2iSULw2Zl8%2FdSWEGvnTyP6Mj%2F8CJF4preAYdKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysOkjITtkNZPzL4BIq3APHdEaECkomiFa51gULOUAnIkMYAHxf5ecM15BQKNe5maBuOffsLGuunIRplud7cXJ6QtMQh3YRjfI%2FGnXpV5DrDJQ60AjkhNDLe%2BZXHOoBBRrLAPJc5TiMy2AqLvltuhOzqIRH6ujGwHsm7wAt3gXve28lral32kSKqgJ9IPIjR7XDas%2F%2Bcc0arszNmHIGR9xdiQOgNy7mc6lYPi%2FZ0v7nUhW5A%2FT%2BZuCxK1GAkNe4%2FY7LvNZkU6fmx0F9PKUClh7ZMILc%2B0xRnpF2ixRUQCbkHCi2sD%2BBMw8MKm2eJGGLbRvoFodO9z3MvS%2FRon6rX5IedQJXSfoIMkQCISHttxJDcReRK0T%2Bfx%2BV9XS%2FnbuAAGqMs3%2FGZpUIuJfTDET2uS2fKP9JxCVktFrb3ahPhCoUZ9zIYGur5wtVnMbR5WHGL8feW0wRXPT0V5Mz9OR4Ui3txFDKD6BkPUNctxaFcLNDO5u7rkwGr1lh3JBIclVldf6%2Ba8Rw52%2B%2FMYP6hutykWOcIvciBm%2BsKZcuLLl312YgK8q0dooS7u6gEQYSoS5sCLOB7%2BfNDNgfrK6loY4mretgBGj%2BovyaM6UtOOazRyCqDVcfNqkt%2Fy5PKAt36nUYnb%2BlMSnlcOLQqdFtKDDUj5zEBjqkAV8WiPxsTXqIKboFCjqXk4kT%2FYkg%2BaTKM0mcPhlkvVwiQQcf7LOecwblAvA%2BsU%2FZ2MawnFpoVk%2BnEgQ1L8I1VQrmOHHsIhl1XxZ0fbDXt5V8s5GgRz%2BGBpJr%2BR8rlyRlp3K7xBeX32gVoqagxOz4Kd8XNVCkYmqOCf%2FvZlMqpGZa091Pk0qVdfUvYcAp4Onh393IAtd2KAJNRIwhPo8sU31y2pbm&X-Amz-Signature=512eaf10df37539918b9e1e35f0741f73d1b69129c4649071d59dc9fc2ceef44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
