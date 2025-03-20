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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLKMB6B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDznPCp%2Bmz6D1KXTgvMPb18v%2FpqYihHqtPFpHfrwX%2BUMwIgUkXiAfAIYiV61EFpxI8%2FhkOEeeLSd6yApeM%2Bv97om1wqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmlYXHu%2FMrVSoItQircA%2FwT4LeO2PgAAij%2FoEjenEaKgSvVqk93xg9socpHb8nFK%2FUyXhT2bxo5JiyxEKdQ3BVR5REi%2FgJjkG9feC%2FzGowv0XOPnxsOGSBR31UY3GnTTRydcsgVPdISFlMuc12%2BCtdyziwFq8UiYy9v5ldX0wtuYTHnpws5zLx%2BrP3flIjhUJOXudxmV8NQeI5y4ZwI%2BtBa0liiGY25c%2FD9TYjUk7uqoQzpT2eky6gJ67mvR5unBG21xg1esnR5Ij2o7t1%2FVKS7MeFsakHlCjVvTpx5KkLV%2F%2FVniHL1nSQYHyMg2Rs2I8Da1c5GcLDlEhWsfvx5YdbNzoLu7b0PZ%2FbJdEtrabzZuKnHUZK4gAh4OV%2BqSllH7Z%2BaBdjfeAGwQ%2F5S1WERkW38%2Bp8pwn5L8lwgZKYoSOKMiNmlReQkvX0KvAAcznSPS1WnfKwbAe1eJuIYolaXzkXkkKc8BPgyjp%2B97f6oHZ%2FnXaYsiEgjgOwnIvj6jIiLSRm0%2BeO3c0c0hsVIdS1JKAwHq%2BWyDPRk8PhplylJB40%2FQu0S5IxEHeW6gA1W1XboebIfx%2BLrbHw3d8rH%2FF0y8hfq4%2BtDknjYzQgfFEVx4BlQCTHaQkO%2FJJF6P6tYIdmVH6FP2x8ugHzMQcxZMNmj8b4GOqUBPwhpFpXOQDB9rY0E0dsyicJyhJL3xiD7QK5fNGpq6GSlBCDhCaOi057IZpn5ZDgt1YC%2FXsVRSHvG1pTMXyJs3QVWMiwgd62lh4Yg5Tz%2BcV1YPqIQeEsYEwGP4nLm4mOG8mJB%2BV6UvvQOM6JvygfCfLk0Hky6rten25RrXlQPeg4Kw9omTaVQMlqsYFJrc7nVHuE8cjNYP0ISZ8jTB7ogfaQya6j8&X-Amz-Signature=de6e6090013e75ba05fb2189c4f27c0a0ded302e4113a4fb2df46ef1498f6464&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLKMB6B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDznPCp%2Bmz6D1KXTgvMPb18v%2FpqYihHqtPFpHfrwX%2BUMwIgUkXiAfAIYiV61EFpxI8%2FhkOEeeLSd6yApeM%2Bv97om1wqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmlYXHu%2FMrVSoItQircA%2FwT4LeO2PgAAij%2FoEjenEaKgSvVqk93xg9socpHb8nFK%2FUyXhT2bxo5JiyxEKdQ3BVR5REi%2FgJjkG9feC%2FzGowv0XOPnxsOGSBR31UY3GnTTRydcsgVPdISFlMuc12%2BCtdyziwFq8UiYy9v5ldX0wtuYTHnpws5zLx%2BrP3flIjhUJOXudxmV8NQeI5y4ZwI%2BtBa0liiGY25c%2FD9TYjUk7uqoQzpT2eky6gJ67mvR5unBG21xg1esnR5Ij2o7t1%2FVKS7MeFsakHlCjVvTpx5KkLV%2F%2FVniHL1nSQYHyMg2Rs2I8Da1c5GcLDlEhWsfvx5YdbNzoLu7b0PZ%2FbJdEtrabzZuKnHUZK4gAh4OV%2BqSllH7Z%2BaBdjfeAGwQ%2F5S1WERkW38%2Bp8pwn5L8lwgZKYoSOKMiNmlReQkvX0KvAAcznSPS1WnfKwbAe1eJuIYolaXzkXkkKc8BPgyjp%2B97f6oHZ%2FnXaYsiEgjgOwnIvj6jIiLSRm0%2BeO3c0c0hsVIdS1JKAwHq%2BWyDPRk8PhplylJB40%2FQu0S5IxEHeW6gA1W1XboebIfx%2BLrbHw3d8rH%2FF0y8hfq4%2BtDknjYzQgfFEVx4BlQCTHaQkO%2FJJF6P6tYIdmVH6FP2x8ugHzMQcxZMNmj8b4GOqUBPwhpFpXOQDB9rY0E0dsyicJyhJL3xiD7QK5fNGpq6GSlBCDhCaOi057IZpn5ZDgt1YC%2FXsVRSHvG1pTMXyJs3QVWMiwgd62lh4Yg5Tz%2BcV1YPqIQeEsYEwGP4nLm4mOG8mJB%2BV6UvvQOM6JvygfCfLk0Hky6rten25RrXlQPeg4Kw9omTaVQMlqsYFJrc7nVHuE8cjNYP0ISZ8jTB7ogfaQya6j8&X-Amz-Signature=aa0f5a714ba40c086367e2b62c7b727b972944164a08c8de9cbca2d263319b89&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLKMB6B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDznPCp%2Bmz6D1KXTgvMPb18v%2FpqYihHqtPFpHfrwX%2BUMwIgUkXiAfAIYiV61EFpxI8%2FhkOEeeLSd6yApeM%2Bv97om1wqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmlYXHu%2FMrVSoItQircA%2FwT4LeO2PgAAij%2FoEjenEaKgSvVqk93xg9socpHb8nFK%2FUyXhT2bxo5JiyxEKdQ3BVR5REi%2FgJjkG9feC%2FzGowv0XOPnxsOGSBR31UY3GnTTRydcsgVPdISFlMuc12%2BCtdyziwFq8UiYy9v5ldX0wtuYTHnpws5zLx%2BrP3flIjhUJOXudxmV8NQeI5y4ZwI%2BtBa0liiGY25c%2FD9TYjUk7uqoQzpT2eky6gJ67mvR5unBG21xg1esnR5Ij2o7t1%2FVKS7MeFsakHlCjVvTpx5KkLV%2F%2FVniHL1nSQYHyMg2Rs2I8Da1c5GcLDlEhWsfvx5YdbNzoLu7b0PZ%2FbJdEtrabzZuKnHUZK4gAh4OV%2BqSllH7Z%2BaBdjfeAGwQ%2F5S1WERkW38%2Bp8pwn5L8lwgZKYoSOKMiNmlReQkvX0KvAAcznSPS1WnfKwbAe1eJuIYolaXzkXkkKc8BPgyjp%2B97f6oHZ%2FnXaYsiEgjgOwnIvj6jIiLSRm0%2BeO3c0c0hsVIdS1JKAwHq%2BWyDPRk8PhplylJB40%2FQu0S5IxEHeW6gA1W1XboebIfx%2BLrbHw3d8rH%2FF0y8hfq4%2BtDknjYzQgfFEVx4BlQCTHaQkO%2FJJF6P6tYIdmVH6FP2x8ugHzMQcxZMNmj8b4GOqUBPwhpFpXOQDB9rY0E0dsyicJyhJL3xiD7QK5fNGpq6GSlBCDhCaOi057IZpn5ZDgt1YC%2FXsVRSHvG1pTMXyJs3QVWMiwgd62lh4Yg5Tz%2BcV1YPqIQeEsYEwGP4nLm4mOG8mJB%2BV6UvvQOM6JvygfCfLk0Hky6rten25RrXlQPeg4Kw9omTaVQMlqsYFJrc7nVHuE8cjNYP0ISZ8jTB7ogfaQya6j8&X-Amz-Signature=2d882a5888add604fac1bcb91ec68e6c0774617042b95c1be4fcfba5d15a684d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLKMB6B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDznPCp%2Bmz6D1KXTgvMPb18v%2FpqYihHqtPFpHfrwX%2BUMwIgUkXiAfAIYiV61EFpxI8%2FhkOEeeLSd6yApeM%2Bv97om1wqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmlYXHu%2FMrVSoItQircA%2FwT4LeO2PgAAij%2FoEjenEaKgSvVqk93xg9socpHb8nFK%2FUyXhT2bxo5JiyxEKdQ3BVR5REi%2FgJjkG9feC%2FzGowv0XOPnxsOGSBR31UY3GnTTRydcsgVPdISFlMuc12%2BCtdyziwFq8UiYy9v5ldX0wtuYTHnpws5zLx%2BrP3flIjhUJOXudxmV8NQeI5y4ZwI%2BtBa0liiGY25c%2FD9TYjUk7uqoQzpT2eky6gJ67mvR5unBG21xg1esnR5Ij2o7t1%2FVKS7MeFsakHlCjVvTpx5KkLV%2F%2FVniHL1nSQYHyMg2Rs2I8Da1c5GcLDlEhWsfvx5YdbNzoLu7b0PZ%2FbJdEtrabzZuKnHUZK4gAh4OV%2BqSllH7Z%2BaBdjfeAGwQ%2F5S1WERkW38%2Bp8pwn5L8lwgZKYoSOKMiNmlReQkvX0KvAAcznSPS1WnfKwbAe1eJuIYolaXzkXkkKc8BPgyjp%2B97f6oHZ%2FnXaYsiEgjgOwnIvj6jIiLSRm0%2BeO3c0c0hsVIdS1JKAwHq%2BWyDPRk8PhplylJB40%2FQu0S5IxEHeW6gA1W1XboebIfx%2BLrbHw3d8rH%2FF0y8hfq4%2BtDknjYzQgfFEVx4BlQCTHaQkO%2FJJF6P6tYIdmVH6FP2x8ugHzMQcxZMNmj8b4GOqUBPwhpFpXOQDB9rY0E0dsyicJyhJL3xiD7QK5fNGpq6GSlBCDhCaOi057IZpn5ZDgt1YC%2FXsVRSHvG1pTMXyJs3QVWMiwgd62lh4Yg5Tz%2BcV1YPqIQeEsYEwGP4nLm4mOG8mJB%2BV6UvvQOM6JvygfCfLk0Hky6rten25RrXlQPeg4Kw9omTaVQMlqsYFJrc7nVHuE8cjNYP0ISZ8jTB7ogfaQya6j8&X-Amz-Signature=a01cc7fb662f653db066285552683e50aabc18f913ad79620e97a43df1d8056f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLKMB6B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDznPCp%2Bmz6D1KXTgvMPb18v%2FpqYihHqtPFpHfrwX%2BUMwIgUkXiAfAIYiV61EFpxI8%2FhkOEeeLSd6yApeM%2Bv97om1wqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmlYXHu%2FMrVSoItQircA%2FwT4LeO2PgAAij%2FoEjenEaKgSvVqk93xg9socpHb8nFK%2FUyXhT2bxo5JiyxEKdQ3BVR5REi%2FgJjkG9feC%2FzGowv0XOPnxsOGSBR31UY3GnTTRydcsgVPdISFlMuc12%2BCtdyziwFq8UiYy9v5ldX0wtuYTHnpws5zLx%2BrP3flIjhUJOXudxmV8NQeI5y4ZwI%2BtBa0liiGY25c%2FD9TYjUk7uqoQzpT2eky6gJ67mvR5unBG21xg1esnR5Ij2o7t1%2FVKS7MeFsakHlCjVvTpx5KkLV%2F%2FVniHL1nSQYHyMg2Rs2I8Da1c5GcLDlEhWsfvx5YdbNzoLu7b0PZ%2FbJdEtrabzZuKnHUZK4gAh4OV%2BqSllH7Z%2BaBdjfeAGwQ%2F5S1WERkW38%2Bp8pwn5L8lwgZKYoSOKMiNmlReQkvX0KvAAcznSPS1WnfKwbAe1eJuIYolaXzkXkkKc8BPgyjp%2B97f6oHZ%2FnXaYsiEgjgOwnIvj6jIiLSRm0%2BeO3c0c0hsVIdS1JKAwHq%2BWyDPRk8PhplylJB40%2FQu0S5IxEHeW6gA1W1XboebIfx%2BLrbHw3d8rH%2FF0y8hfq4%2BtDknjYzQgfFEVx4BlQCTHaQkO%2FJJF6P6tYIdmVH6FP2x8ugHzMQcxZMNmj8b4GOqUBPwhpFpXOQDB9rY0E0dsyicJyhJL3xiD7QK5fNGpq6GSlBCDhCaOi057IZpn5ZDgt1YC%2FXsVRSHvG1pTMXyJs3QVWMiwgd62lh4Yg5Tz%2BcV1YPqIQeEsYEwGP4nLm4mOG8mJB%2BV6UvvQOM6JvygfCfLk0Hky6rten25RrXlQPeg4Kw9omTaVQMlqsYFJrc7nVHuE8cjNYP0ISZ8jTB7ogfaQya6j8&X-Amz-Signature=973ab29239fa0d75788e645ae7393b819a2bd9d477e44cebaf826b766fa0aa56&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLKMB6B%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDznPCp%2Bmz6D1KXTgvMPb18v%2FpqYihHqtPFpHfrwX%2BUMwIgUkXiAfAIYiV61EFpxI8%2FhkOEeeLSd6yApeM%2Bv97om1wqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmlYXHu%2FMrVSoItQircA%2FwT4LeO2PgAAij%2FoEjenEaKgSvVqk93xg9socpHb8nFK%2FUyXhT2bxo5JiyxEKdQ3BVR5REi%2FgJjkG9feC%2FzGowv0XOPnxsOGSBR31UY3GnTTRydcsgVPdISFlMuc12%2BCtdyziwFq8UiYy9v5ldX0wtuYTHnpws5zLx%2BrP3flIjhUJOXudxmV8NQeI5y4ZwI%2BtBa0liiGY25c%2FD9TYjUk7uqoQzpT2eky6gJ67mvR5unBG21xg1esnR5Ij2o7t1%2FVKS7MeFsakHlCjVvTpx5KkLV%2F%2FVniHL1nSQYHyMg2Rs2I8Da1c5GcLDlEhWsfvx5YdbNzoLu7b0PZ%2FbJdEtrabzZuKnHUZK4gAh4OV%2BqSllH7Z%2BaBdjfeAGwQ%2F5S1WERkW38%2Bp8pwn5L8lwgZKYoSOKMiNmlReQkvX0KvAAcznSPS1WnfKwbAe1eJuIYolaXzkXkkKc8BPgyjp%2B97f6oHZ%2FnXaYsiEgjgOwnIvj6jIiLSRm0%2BeO3c0c0hsVIdS1JKAwHq%2BWyDPRk8PhplylJB40%2FQu0S5IxEHeW6gA1W1XboebIfx%2BLrbHw3d8rH%2FF0y8hfq4%2BtDknjYzQgfFEVx4BlQCTHaQkO%2FJJF6P6tYIdmVH6FP2x8ugHzMQcxZMNmj8b4GOqUBPwhpFpXOQDB9rY0E0dsyicJyhJL3xiD7QK5fNGpq6GSlBCDhCaOi057IZpn5ZDgt1YC%2FXsVRSHvG1pTMXyJs3QVWMiwgd62lh4Yg5Tz%2BcV1YPqIQeEsYEwGP4nLm4mOG8mJB%2BV6UvvQOM6JvygfCfLk0Hky6rten25RrXlQPeg4Kw9omTaVQMlqsYFJrc7nVHuE8cjNYP0ISZ8jTB7ogfaQya6j8&X-Amz-Signature=fb4b0caa4c80821df4f7fe138ab5d02aec3eff94df43d33dddf1769764cd0612&X-Amz-SignedHeaders=host&x-id=GetObject)
