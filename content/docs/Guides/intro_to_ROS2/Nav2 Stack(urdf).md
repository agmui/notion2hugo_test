---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX4AJ2A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfCEdXP5kV2a%2FRaoBQ9VC%2Feah%2BUR1ES%2FSQzxvmrVuOgIhAJQM45nlyUmEGYCkS5FjOUEVBzzW3VPEcNv54kQ6F7ndKv8DCBQQABoMNjM3NDIzMTgzODA1Igxbc45KxTP1YsrVRoYq3AO6tusopsJd6V51PCWCugA4S27tCrROGBpo%2FG4LILg9Banm5jqb1ZZYfg5P8EFFuqDSrQxYgenbWwTHZPaqtkSj8XhRAptbBztypbCzcrHcgpIDz08N3Q%2BvEOzcVbve%2BCSSqx%2FMtUeaMrxdVeIx99HQM8ZHQyfRj%2FxpYMQAdOK82iSpcjmwVQcL2e0Qc0DJ6G314wiiBiRa6VdqodTEucusaducst9o3xDdi0unkosNvAzmyMsN9cZsblbgf%2FGLA1mYXGq9fZ5rQdah9AaI8w5MOjBQ7U6qcjzOyRHtDTZ%2F65yAZ3lpycyFzVKgMTipIuqiGO%2FWfzNPqON45py4DndhNsb6cHLFkfJStvKpfiW9ZqjoYpR8M6WocKGK5E9cpwkApulVfBiKLPsXQIUUAryJBtNPiE0PVCTgVUWoxmacyvC4NuUtUPbnYy%2F5EjfC60THd9RYXltcYoSp86e6QApm1FbexaReskOx1hgSa6sBBsh055E9iyBnVZZmVcr95naAL2xv7ECzx0SWUzLAiWe0wOBb7kinyLkZBP7IBJdlfRMD9AxHsWXqx33HUIK5NNJb1cmy0fw92UIzOrv2wTYwjpwFjrGwHH%2Fkq%2B0Z3ANIZsNvgvii9WnwfRQgzjC40qC%2BBjqkAbvwfO%2FcPIPhLLOsiaIxLqIGQcFOyhfZrRQwYu6Zd4ISxI%2BAsJHZH448Rhf9GRiE61zoJfowFdcwb4SENJJarIjkI1%2B9cNTOiZNNbE16I3C2jaXVwdagIVLKEldKnpxQ7UQlfNfYGSRGRE5TdQFeuDkfYmvKPd672DPOc4Q9USkAuudLF8uDXRPypQPFplDs8rdxLS%2BQoxRZJ5oixyyeh3G9A0OH&X-Amz-Signature=4e8806f24e21797dad01d4876182a9445d825de9eef8c6b4e39149e73fc01180&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX4AJ2A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfCEdXP5kV2a%2FRaoBQ9VC%2Feah%2BUR1ES%2FSQzxvmrVuOgIhAJQM45nlyUmEGYCkS5FjOUEVBzzW3VPEcNv54kQ6F7ndKv8DCBQQABoMNjM3NDIzMTgzODA1Igxbc45KxTP1YsrVRoYq3AO6tusopsJd6V51PCWCugA4S27tCrROGBpo%2FG4LILg9Banm5jqb1ZZYfg5P8EFFuqDSrQxYgenbWwTHZPaqtkSj8XhRAptbBztypbCzcrHcgpIDz08N3Q%2BvEOzcVbve%2BCSSqx%2FMtUeaMrxdVeIx99HQM8ZHQyfRj%2FxpYMQAdOK82iSpcjmwVQcL2e0Qc0DJ6G314wiiBiRa6VdqodTEucusaducst9o3xDdi0unkosNvAzmyMsN9cZsblbgf%2FGLA1mYXGq9fZ5rQdah9AaI8w5MOjBQ7U6qcjzOyRHtDTZ%2F65yAZ3lpycyFzVKgMTipIuqiGO%2FWfzNPqON45py4DndhNsb6cHLFkfJStvKpfiW9ZqjoYpR8M6WocKGK5E9cpwkApulVfBiKLPsXQIUUAryJBtNPiE0PVCTgVUWoxmacyvC4NuUtUPbnYy%2F5EjfC60THd9RYXltcYoSp86e6QApm1FbexaReskOx1hgSa6sBBsh055E9iyBnVZZmVcr95naAL2xv7ECzx0SWUzLAiWe0wOBb7kinyLkZBP7IBJdlfRMD9AxHsWXqx33HUIK5NNJb1cmy0fw92UIzOrv2wTYwjpwFjrGwHH%2Fkq%2B0Z3ANIZsNvgvii9WnwfRQgzjC40qC%2BBjqkAbvwfO%2FcPIPhLLOsiaIxLqIGQcFOyhfZrRQwYu6Zd4ISxI%2BAsJHZH448Rhf9GRiE61zoJfowFdcwb4SENJJarIjkI1%2B9cNTOiZNNbE16I3C2jaXVwdagIVLKEldKnpxQ7UQlfNfYGSRGRE5TdQFeuDkfYmvKPd672DPOc4Q9USkAuudLF8uDXRPypQPFplDs8rdxLS%2BQoxRZJ5oixyyeh3G9A0OH&X-Amz-Signature=d02b8bc65aaf65b69b83843e1a30b0d1247eb94ea040c5a1bb6b882ce436255e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX4AJ2A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfCEdXP5kV2a%2FRaoBQ9VC%2Feah%2BUR1ES%2FSQzxvmrVuOgIhAJQM45nlyUmEGYCkS5FjOUEVBzzW3VPEcNv54kQ6F7ndKv8DCBQQABoMNjM3NDIzMTgzODA1Igxbc45KxTP1YsrVRoYq3AO6tusopsJd6V51PCWCugA4S27tCrROGBpo%2FG4LILg9Banm5jqb1ZZYfg5P8EFFuqDSrQxYgenbWwTHZPaqtkSj8XhRAptbBztypbCzcrHcgpIDz08N3Q%2BvEOzcVbve%2BCSSqx%2FMtUeaMrxdVeIx99HQM8ZHQyfRj%2FxpYMQAdOK82iSpcjmwVQcL2e0Qc0DJ6G314wiiBiRa6VdqodTEucusaducst9o3xDdi0unkosNvAzmyMsN9cZsblbgf%2FGLA1mYXGq9fZ5rQdah9AaI8w5MOjBQ7U6qcjzOyRHtDTZ%2F65yAZ3lpycyFzVKgMTipIuqiGO%2FWfzNPqON45py4DndhNsb6cHLFkfJStvKpfiW9ZqjoYpR8M6WocKGK5E9cpwkApulVfBiKLPsXQIUUAryJBtNPiE0PVCTgVUWoxmacyvC4NuUtUPbnYy%2F5EjfC60THd9RYXltcYoSp86e6QApm1FbexaReskOx1hgSa6sBBsh055E9iyBnVZZmVcr95naAL2xv7ECzx0SWUzLAiWe0wOBb7kinyLkZBP7IBJdlfRMD9AxHsWXqx33HUIK5NNJb1cmy0fw92UIzOrv2wTYwjpwFjrGwHH%2Fkq%2B0Z3ANIZsNvgvii9WnwfRQgzjC40qC%2BBjqkAbvwfO%2FcPIPhLLOsiaIxLqIGQcFOyhfZrRQwYu6Zd4ISxI%2BAsJHZH448Rhf9GRiE61zoJfowFdcwb4SENJJarIjkI1%2B9cNTOiZNNbE16I3C2jaXVwdagIVLKEldKnpxQ7UQlfNfYGSRGRE5TdQFeuDkfYmvKPd672DPOc4Q9USkAuudLF8uDXRPypQPFplDs8rdxLS%2BQoxRZJ5oixyyeh3G9A0OH&X-Amz-Signature=f54bd847443f7578ec3af7f4690cea2798971ef8221176ef33d21a678e49de0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX4AJ2A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfCEdXP5kV2a%2FRaoBQ9VC%2Feah%2BUR1ES%2FSQzxvmrVuOgIhAJQM45nlyUmEGYCkS5FjOUEVBzzW3VPEcNv54kQ6F7ndKv8DCBQQABoMNjM3NDIzMTgzODA1Igxbc45KxTP1YsrVRoYq3AO6tusopsJd6V51PCWCugA4S27tCrROGBpo%2FG4LILg9Banm5jqb1ZZYfg5P8EFFuqDSrQxYgenbWwTHZPaqtkSj8XhRAptbBztypbCzcrHcgpIDz08N3Q%2BvEOzcVbve%2BCSSqx%2FMtUeaMrxdVeIx99HQM8ZHQyfRj%2FxpYMQAdOK82iSpcjmwVQcL2e0Qc0DJ6G314wiiBiRa6VdqodTEucusaducst9o3xDdi0unkosNvAzmyMsN9cZsblbgf%2FGLA1mYXGq9fZ5rQdah9AaI8w5MOjBQ7U6qcjzOyRHtDTZ%2F65yAZ3lpycyFzVKgMTipIuqiGO%2FWfzNPqON45py4DndhNsb6cHLFkfJStvKpfiW9ZqjoYpR8M6WocKGK5E9cpwkApulVfBiKLPsXQIUUAryJBtNPiE0PVCTgVUWoxmacyvC4NuUtUPbnYy%2F5EjfC60THd9RYXltcYoSp86e6QApm1FbexaReskOx1hgSa6sBBsh055E9iyBnVZZmVcr95naAL2xv7ECzx0SWUzLAiWe0wOBb7kinyLkZBP7IBJdlfRMD9AxHsWXqx33HUIK5NNJb1cmy0fw92UIzOrv2wTYwjpwFjrGwHH%2Fkq%2B0Z3ANIZsNvgvii9WnwfRQgzjC40qC%2BBjqkAbvwfO%2FcPIPhLLOsiaIxLqIGQcFOyhfZrRQwYu6Zd4ISxI%2BAsJHZH448Rhf9GRiE61zoJfowFdcwb4SENJJarIjkI1%2B9cNTOiZNNbE16I3C2jaXVwdagIVLKEldKnpxQ7UQlfNfYGSRGRE5TdQFeuDkfYmvKPd672DPOc4Q9USkAuudLF8uDXRPypQPFplDs8rdxLS%2BQoxRZJ5oixyyeh3G9A0OH&X-Amz-Signature=e1120da4195810a01a65a32fa16f7167c0d8f861ee82545be53c16e49914720f&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX4AJ2A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfCEdXP5kV2a%2FRaoBQ9VC%2Feah%2BUR1ES%2FSQzxvmrVuOgIhAJQM45nlyUmEGYCkS5FjOUEVBzzW3VPEcNv54kQ6F7ndKv8DCBQQABoMNjM3NDIzMTgzODA1Igxbc45KxTP1YsrVRoYq3AO6tusopsJd6V51PCWCugA4S27tCrROGBpo%2FG4LILg9Banm5jqb1ZZYfg5P8EFFuqDSrQxYgenbWwTHZPaqtkSj8XhRAptbBztypbCzcrHcgpIDz08N3Q%2BvEOzcVbve%2BCSSqx%2FMtUeaMrxdVeIx99HQM8ZHQyfRj%2FxpYMQAdOK82iSpcjmwVQcL2e0Qc0DJ6G314wiiBiRa6VdqodTEucusaducst9o3xDdi0unkosNvAzmyMsN9cZsblbgf%2FGLA1mYXGq9fZ5rQdah9AaI8w5MOjBQ7U6qcjzOyRHtDTZ%2F65yAZ3lpycyFzVKgMTipIuqiGO%2FWfzNPqON45py4DndhNsb6cHLFkfJStvKpfiW9ZqjoYpR8M6WocKGK5E9cpwkApulVfBiKLPsXQIUUAryJBtNPiE0PVCTgVUWoxmacyvC4NuUtUPbnYy%2F5EjfC60THd9RYXltcYoSp86e6QApm1FbexaReskOx1hgSa6sBBsh055E9iyBnVZZmVcr95naAL2xv7ECzx0SWUzLAiWe0wOBb7kinyLkZBP7IBJdlfRMD9AxHsWXqx33HUIK5NNJb1cmy0fw92UIzOrv2wTYwjpwFjrGwHH%2Fkq%2B0Z3ANIZsNvgvii9WnwfRQgzjC40qC%2BBjqkAbvwfO%2FcPIPhLLOsiaIxLqIGQcFOyhfZrRQwYu6Zd4ISxI%2BAsJHZH448Rhf9GRiE61zoJfowFdcwb4SENJJarIjkI1%2B9cNTOiZNNbE16I3C2jaXVwdagIVLKEldKnpxQ7UQlfNfYGSRGRE5TdQFeuDkfYmvKPd672DPOc4Q9USkAuudLF8uDXRPypQPFplDs8rdxLS%2BQoxRZJ5oixyyeh3G9A0OH&X-Amz-Signature=328a73b75a43da700411c18b656605346405cfbe60aac5a3a253965bb6d44abe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX4AJ2A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfCEdXP5kV2a%2FRaoBQ9VC%2Feah%2BUR1ES%2FSQzxvmrVuOgIhAJQM45nlyUmEGYCkS5FjOUEVBzzW3VPEcNv54kQ6F7ndKv8DCBQQABoMNjM3NDIzMTgzODA1Igxbc45KxTP1YsrVRoYq3AO6tusopsJd6V51PCWCugA4S27tCrROGBpo%2FG4LILg9Banm5jqb1ZZYfg5P8EFFuqDSrQxYgenbWwTHZPaqtkSj8XhRAptbBztypbCzcrHcgpIDz08N3Q%2BvEOzcVbve%2BCSSqx%2FMtUeaMrxdVeIx99HQM8ZHQyfRj%2FxpYMQAdOK82iSpcjmwVQcL2e0Qc0DJ6G314wiiBiRa6VdqodTEucusaducst9o3xDdi0unkosNvAzmyMsN9cZsblbgf%2FGLA1mYXGq9fZ5rQdah9AaI8w5MOjBQ7U6qcjzOyRHtDTZ%2F65yAZ3lpycyFzVKgMTipIuqiGO%2FWfzNPqON45py4DndhNsb6cHLFkfJStvKpfiW9ZqjoYpR8M6WocKGK5E9cpwkApulVfBiKLPsXQIUUAryJBtNPiE0PVCTgVUWoxmacyvC4NuUtUPbnYy%2F5EjfC60THd9RYXltcYoSp86e6QApm1FbexaReskOx1hgSa6sBBsh055E9iyBnVZZmVcr95naAL2xv7ECzx0SWUzLAiWe0wOBb7kinyLkZBP7IBJdlfRMD9AxHsWXqx33HUIK5NNJb1cmy0fw92UIzOrv2wTYwjpwFjrGwHH%2Fkq%2B0Z3ANIZsNvgvii9WnwfRQgzjC40qC%2BBjqkAbvwfO%2FcPIPhLLOsiaIxLqIGQcFOyhfZrRQwYu6Zd4ISxI%2BAsJHZH448Rhf9GRiE61zoJfowFdcwb4SENJJarIjkI1%2B9cNTOiZNNbE16I3C2jaXVwdagIVLKEldKnpxQ7UQlfNfYGSRGRE5TdQFeuDkfYmvKPd672DPOc4Q9USkAuudLF8uDXRPypQPFplDs8rdxLS%2BQoxRZJ5oixyyeh3G9A0OH&X-Amz-Signature=8fa4dc38b21656c27c8e725eb5d40a0b956f122a320568545adcee1c4fdf38a4&X-Amz-SignedHeaders=host&x-id=GetObject)
