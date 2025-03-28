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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4GVFJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHtiPRLSOlav0G7BpqDUWMznCQKZESmtH9dsyVAqx6QIhAJcNx8YpMbE67F1bsRslmHRCUNgPLFAZH4WCHOx5CbdLKv8DCFoQABoMNjM3NDIzMTgzODA1IgxDaASZuysWtDkQxwkq3AND%2Bva7La44UJeTETem5IwdoWPigZ8VO3ngBnj5Iwus0srp7IqpaAKTHDqSDaBlIhCdrPTQeMYL98P565Ar5Idt93T19ACRglLLzmEJlnNJCCdEG7zF9BD%2B0T3VgTHEhKDXgLhYsUFy3GAJIAC2yZtRopXIC93k8gc7SZ8wczOArJEqKs5aKIivrQp6QOnw4NUyVNHInnirVXdaVyVI75coLYzK29dHBCOXplaeku36w9YcmFRiWml3CrZPwCwbqvfnp26J4cSQVI0i9RGXIiKbfAFcpwp9Tp7Wh9BwoAhywb39T2s7GsptsM%2FH6hglRWckI%2FNvZhlNsckKxZyHFiamsqZqJ6fTg757M0OLboduaiMO%2FlC3nArWriZDJjVI%2Bni3tGv3AGMLppcsLacXrpGyY2NRkhp6Hc3VWcYG5t9SbbsXziSHkbFlykC3YUdoPAnGb5iTdViky0tx8Wx4FIvtYD2oJMFSQU87yNCOrLWEiLaXlL2K8jOdjRmJnAdxq%2B2TnJt8RFyyGzpdwUw3mEzZHfQkn4v4pKxqlm%2F%2Fv92dR624uPsf3zqovYkSoJxPbvfN7jXReqqI0JbF3qECje5umhHE8DpTwGLGBSyRfbdWz7psVO%2F6GxJh%2BKZ41jDJv5m%2FBjqkARgaY3rUSxu%2BfENgYwlOEe5xzmVMfn4tlST%2BgBIuz2%2B5V7my1yQu3l8MSeUkJZEHRDAm0F8lYMQyQfkqAQzs0%2FwPHjwWD0pnKyGzPDYg81pjyKOmcYsGESLxzOuVV%2FaS%2BwP6xSB0%2Bb5LQvKa7OzHP5N1knbclgtTXYnI%2B6viMonn8xZdgfcsZ37KkG8YpA6%2FSbfsLAJAkCWhtaBusSKQPD%2FzG%2BoY&X-Amz-Signature=bd1f6cc6a0ff638e138b1a8d57e40774a5c4f1a1767c6836159261a4b2256f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4GVFJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHtiPRLSOlav0G7BpqDUWMznCQKZESmtH9dsyVAqx6QIhAJcNx8YpMbE67F1bsRslmHRCUNgPLFAZH4WCHOx5CbdLKv8DCFoQABoMNjM3NDIzMTgzODA1IgxDaASZuysWtDkQxwkq3AND%2Bva7La44UJeTETem5IwdoWPigZ8VO3ngBnj5Iwus0srp7IqpaAKTHDqSDaBlIhCdrPTQeMYL98P565Ar5Idt93T19ACRglLLzmEJlnNJCCdEG7zF9BD%2B0T3VgTHEhKDXgLhYsUFy3GAJIAC2yZtRopXIC93k8gc7SZ8wczOArJEqKs5aKIivrQp6QOnw4NUyVNHInnirVXdaVyVI75coLYzK29dHBCOXplaeku36w9YcmFRiWml3CrZPwCwbqvfnp26J4cSQVI0i9RGXIiKbfAFcpwp9Tp7Wh9BwoAhywb39T2s7GsptsM%2FH6hglRWckI%2FNvZhlNsckKxZyHFiamsqZqJ6fTg757M0OLboduaiMO%2FlC3nArWriZDJjVI%2Bni3tGv3AGMLppcsLacXrpGyY2NRkhp6Hc3VWcYG5t9SbbsXziSHkbFlykC3YUdoPAnGb5iTdViky0tx8Wx4FIvtYD2oJMFSQU87yNCOrLWEiLaXlL2K8jOdjRmJnAdxq%2B2TnJt8RFyyGzpdwUw3mEzZHfQkn4v4pKxqlm%2F%2Fv92dR624uPsf3zqovYkSoJxPbvfN7jXReqqI0JbF3qECje5umhHE8DpTwGLGBSyRfbdWz7psVO%2F6GxJh%2BKZ41jDJv5m%2FBjqkARgaY3rUSxu%2BfENgYwlOEe5xzmVMfn4tlST%2BgBIuz2%2B5V7my1yQu3l8MSeUkJZEHRDAm0F8lYMQyQfkqAQzs0%2FwPHjwWD0pnKyGzPDYg81pjyKOmcYsGESLxzOuVV%2FaS%2BwP6xSB0%2Bb5LQvKa7OzHP5N1knbclgtTXYnI%2B6viMonn8xZdgfcsZ37KkG8YpA6%2FSbfsLAJAkCWhtaBusSKQPD%2FzG%2BoY&X-Amz-Signature=7bfc904e7682a3525212fa661f0f1a33f1c06b48a3f067ca76e50d976ee1a8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4GVFJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHtiPRLSOlav0G7BpqDUWMznCQKZESmtH9dsyVAqx6QIhAJcNx8YpMbE67F1bsRslmHRCUNgPLFAZH4WCHOx5CbdLKv8DCFoQABoMNjM3NDIzMTgzODA1IgxDaASZuysWtDkQxwkq3AND%2Bva7La44UJeTETem5IwdoWPigZ8VO3ngBnj5Iwus0srp7IqpaAKTHDqSDaBlIhCdrPTQeMYL98P565Ar5Idt93T19ACRglLLzmEJlnNJCCdEG7zF9BD%2B0T3VgTHEhKDXgLhYsUFy3GAJIAC2yZtRopXIC93k8gc7SZ8wczOArJEqKs5aKIivrQp6QOnw4NUyVNHInnirVXdaVyVI75coLYzK29dHBCOXplaeku36w9YcmFRiWml3CrZPwCwbqvfnp26J4cSQVI0i9RGXIiKbfAFcpwp9Tp7Wh9BwoAhywb39T2s7GsptsM%2FH6hglRWckI%2FNvZhlNsckKxZyHFiamsqZqJ6fTg757M0OLboduaiMO%2FlC3nArWriZDJjVI%2Bni3tGv3AGMLppcsLacXrpGyY2NRkhp6Hc3VWcYG5t9SbbsXziSHkbFlykC3YUdoPAnGb5iTdViky0tx8Wx4FIvtYD2oJMFSQU87yNCOrLWEiLaXlL2K8jOdjRmJnAdxq%2B2TnJt8RFyyGzpdwUw3mEzZHfQkn4v4pKxqlm%2F%2Fv92dR624uPsf3zqovYkSoJxPbvfN7jXReqqI0JbF3qECje5umhHE8DpTwGLGBSyRfbdWz7psVO%2F6GxJh%2BKZ41jDJv5m%2FBjqkARgaY3rUSxu%2BfENgYwlOEe5xzmVMfn4tlST%2BgBIuz2%2B5V7my1yQu3l8MSeUkJZEHRDAm0F8lYMQyQfkqAQzs0%2FwPHjwWD0pnKyGzPDYg81pjyKOmcYsGESLxzOuVV%2FaS%2BwP6xSB0%2Bb5LQvKa7OzHP5N1knbclgtTXYnI%2B6viMonn8xZdgfcsZ37KkG8YpA6%2FSbfsLAJAkCWhtaBusSKQPD%2FzG%2BoY&X-Amz-Signature=5f90da834d18ab5492b20c4e47d4c9210df09f61500cdb129f284fb9955d97cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4GVFJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHtiPRLSOlav0G7BpqDUWMznCQKZESmtH9dsyVAqx6QIhAJcNx8YpMbE67F1bsRslmHRCUNgPLFAZH4WCHOx5CbdLKv8DCFoQABoMNjM3NDIzMTgzODA1IgxDaASZuysWtDkQxwkq3AND%2Bva7La44UJeTETem5IwdoWPigZ8VO3ngBnj5Iwus0srp7IqpaAKTHDqSDaBlIhCdrPTQeMYL98P565Ar5Idt93T19ACRglLLzmEJlnNJCCdEG7zF9BD%2B0T3VgTHEhKDXgLhYsUFy3GAJIAC2yZtRopXIC93k8gc7SZ8wczOArJEqKs5aKIivrQp6QOnw4NUyVNHInnirVXdaVyVI75coLYzK29dHBCOXplaeku36w9YcmFRiWml3CrZPwCwbqvfnp26J4cSQVI0i9RGXIiKbfAFcpwp9Tp7Wh9BwoAhywb39T2s7GsptsM%2FH6hglRWckI%2FNvZhlNsckKxZyHFiamsqZqJ6fTg757M0OLboduaiMO%2FlC3nArWriZDJjVI%2Bni3tGv3AGMLppcsLacXrpGyY2NRkhp6Hc3VWcYG5t9SbbsXziSHkbFlykC3YUdoPAnGb5iTdViky0tx8Wx4FIvtYD2oJMFSQU87yNCOrLWEiLaXlL2K8jOdjRmJnAdxq%2B2TnJt8RFyyGzpdwUw3mEzZHfQkn4v4pKxqlm%2F%2Fv92dR624uPsf3zqovYkSoJxPbvfN7jXReqqI0JbF3qECje5umhHE8DpTwGLGBSyRfbdWz7psVO%2F6GxJh%2BKZ41jDJv5m%2FBjqkARgaY3rUSxu%2BfENgYwlOEe5xzmVMfn4tlST%2BgBIuz2%2B5V7my1yQu3l8MSeUkJZEHRDAm0F8lYMQyQfkqAQzs0%2FwPHjwWD0pnKyGzPDYg81pjyKOmcYsGESLxzOuVV%2FaS%2BwP6xSB0%2Bb5LQvKa7OzHP5N1knbclgtTXYnI%2B6viMonn8xZdgfcsZ37KkG8YpA6%2FSbfsLAJAkCWhtaBusSKQPD%2FzG%2BoY&X-Amz-Signature=14b4d71417c6a747fc9790bbaa97154ade90a0d446e4360cda148e9c8c5c8017&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4GVFJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHtiPRLSOlav0G7BpqDUWMznCQKZESmtH9dsyVAqx6QIhAJcNx8YpMbE67F1bsRslmHRCUNgPLFAZH4WCHOx5CbdLKv8DCFoQABoMNjM3NDIzMTgzODA1IgxDaASZuysWtDkQxwkq3AND%2Bva7La44UJeTETem5IwdoWPigZ8VO3ngBnj5Iwus0srp7IqpaAKTHDqSDaBlIhCdrPTQeMYL98P565Ar5Idt93T19ACRglLLzmEJlnNJCCdEG7zF9BD%2B0T3VgTHEhKDXgLhYsUFy3GAJIAC2yZtRopXIC93k8gc7SZ8wczOArJEqKs5aKIivrQp6QOnw4NUyVNHInnirVXdaVyVI75coLYzK29dHBCOXplaeku36w9YcmFRiWml3CrZPwCwbqvfnp26J4cSQVI0i9RGXIiKbfAFcpwp9Tp7Wh9BwoAhywb39T2s7GsptsM%2FH6hglRWckI%2FNvZhlNsckKxZyHFiamsqZqJ6fTg757M0OLboduaiMO%2FlC3nArWriZDJjVI%2Bni3tGv3AGMLppcsLacXrpGyY2NRkhp6Hc3VWcYG5t9SbbsXziSHkbFlykC3YUdoPAnGb5iTdViky0tx8Wx4FIvtYD2oJMFSQU87yNCOrLWEiLaXlL2K8jOdjRmJnAdxq%2B2TnJt8RFyyGzpdwUw3mEzZHfQkn4v4pKxqlm%2F%2Fv92dR624uPsf3zqovYkSoJxPbvfN7jXReqqI0JbF3qECje5umhHE8DpTwGLGBSyRfbdWz7psVO%2F6GxJh%2BKZ41jDJv5m%2FBjqkARgaY3rUSxu%2BfENgYwlOEe5xzmVMfn4tlST%2BgBIuz2%2B5V7my1yQu3l8MSeUkJZEHRDAm0F8lYMQyQfkqAQzs0%2FwPHjwWD0pnKyGzPDYg81pjyKOmcYsGESLxzOuVV%2FaS%2BwP6xSB0%2Bb5LQvKa7OzHP5N1knbclgtTXYnI%2B6viMonn8xZdgfcsZ37KkG8YpA6%2FSbfsLAJAkCWhtaBusSKQPD%2FzG%2BoY&X-Amz-Signature=72396bbcdfd0042e213d8816b9ccd121ef1d9cbc464626bdedb55370723c6ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC4GVFJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHtiPRLSOlav0G7BpqDUWMznCQKZESmtH9dsyVAqx6QIhAJcNx8YpMbE67F1bsRslmHRCUNgPLFAZH4WCHOx5CbdLKv8DCFoQABoMNjM3NDIzMTgzODA1IgxDaASZuysWtDkQxwkq3AND%2Bva7La44UJeTETem5IwdoWPigZ8VO3ngBnj5Iwus0srp7IqpaAKTHDqSDaBlIhCdrPTQeMYL98P565Ar5Idt93T19ACRglLLzmEJlnNJCCdEG7zF9BD%2B0T3VgTHEhKDXgLhYsUFy3GAJIAC2yZtRopXIC93k8gc7SZ8wczOArJEqKs5aKIivrQp6QOnw4NUyVNHInnirVXdaVyVI75coLYzK29dHBCOXplaeku36w9YcmFRiWml3CrZPwCwbqvfnp26J4cSQVI0i9RGXIiKbfAFcpwp9Tp7Wh9BwoAhywb39T2s7GsptsM%2FH6hglRWckI%2FNvZhlNsckKxZyHFiamsqZqJ6fTg757M0OLboduaiMO%2FlC3nArWriZDJjVI%2Bni3tGv3AGMLppcsLacXrpGyY2NRkhp6Hc3VWcYG5t9SbbsXziSHkbFlykC3YUdoPAnGb5iTdViky0tx8Wx4FIvtYD2oJMFSQU87yNCOrLWEiLaXlL2K8jOdjRmJnAdxq%2B2TnJt8RFyyGzpdwUw3mEzZHfQkn4v4pKxqlm%2F%2Fv92dR624uPsf3zqovYkSoJxPbvfN7jXReqqI0JbF3qECje5umhHE8DpTwGLGBSyRfbdWz7psVO%2F6GxJh%2BKZ41jDJv5m%2FBjqkARgaY3rUSxu%2BfENgYwlOEe5xzmVMfn4tlST%2BgBIuz2%2B5V7my1yQu3l8MSeUkJZEHRDAm0F8lYMQyQfkqAQzs0%2FwPHjwWD0pnKyGzPDYg81pjyKOmcYsGESLxzOuVV%2FaS%2BwP6xSB0%2Bb5LQvKa7OzHP5N1knbclgtTXYnI%2B6viMonn8xZdgfcsZ37KkG8YpA6%2FSbfsLAJAkCWhtaBusSKQPD%2FzG%2BoY&X-Amz-Signature=ed5aea5517b27821f49a215d74932a1850c8217537271634f19bd5a3d2f64fb0&X-Amz-SignedHeaders=host&x-id=GetObject)
