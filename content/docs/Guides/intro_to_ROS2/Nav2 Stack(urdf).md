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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS3O6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNylXndW3WjXINepxyafW3Pd771TbGqGHUMPjZcDkR9AiA5gBxj%2BCuIcjnvr0Qyjq9DPMCsDNE9n7BFz4mI392C5iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZigu3T82HIY84vnKKtwD4meAuH0G0LVqX0P0uReHaCIEVMw6fLykMuLcuh7Vcw8woX3QlroTSctSRAjIP7JwS0RvS1yamcUH%2FJBeD7ASpnqmRIrzh9NEOA1r26yL5fpgzABWlu63BkmKNcRR%2FfjxkIVsw%2Boz8TzaCm8wfoNR%2FAkx4kEg8m%2F9zPEZF4DKQAZpsr8dqwhD9TatN2DW%2FCoW%2FoHxa%2FijDLeDgOVcyJbrPq1uweXKu9LykXLCDbTm2GwJQsFasBpm4v4JyFtS7uN9t6l352WMMlmXWZnLk%2Fyc%2BMvvj4LGkn5Rp5DuNDX3MTP5cTXrUJBLvRHO%2FumpKWUUOhOpzaAylq8kXDa5A4N%2BiHat9Ijg5WALsxClIPDEKdyOPto%2FVRIPeEImtkIgAqS1jOMpOn%2BgTxnBFEj2COi2pnQDp3t4Fc92ar9irl2GtAHTg6nUYyWh%2FaXwcqRRKQn4qclPOtP%2F3m4s0dFAaLCDeZuzD32qrIEtAILo9833GbL89SDQaadGGgst60i93CUwM8TLU8RgYudmz%2BL1CfARv7LrUEK4Qjq4xb3mTKq0y3yFn17PZYf723YU0UvPMtilhVYOseD%2BQQqBoIN7wA6N6IvA95WvTsnahoEgeshd%2FLuMmQNr4iK5OsFUuiAwyfW3wwY6pgEaqMmbaufLZpjTwAtHSPUeqgj%2FPWwP64ik%2F%2BwpjLIsSqKsRzDgNa14d7zZp3JPGhayKZ%2B3TEp8nZIaLNeudQGuHKtlAPib6LalJrn56P4rgEDXqKN0j7BkKVZpl3YrAzljxACglSP1pqkhfgHgIMWReVVx7jvZvEZYm5halkRsJa%2BzmzKIi4PNtQl19kBrunPxu2oKOh%2FqsCjDcjNZ6kfiiQOB8BdE&X-Amz-Signature=c84f74991b16b92cdfeb5455f71ddc55d272f96aa081647df0af2fe7ca5c4b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS3O6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNylXndW3WjXINepxyafW3Pd771TbGqGHUMPjZcDkR9AiA5gBxj%2BCuIcjnvr0Qyjq9DPMCsDNE9n7BFz4mI392C5iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZigu3T82HIY84vnKKtwD4meAuH0G0LVqX0P0uReHaCIEVMw6fLykMuLcuh7Vcw8woX3QlroTSctSRAjIP7JwS0RvS1yamcUH%2FJBeD7ASpnqmRIrzh9NEOA1r26yL5fpgzABWlu63BkmKNcRR%2FfjxkIVsw%2Boz8TzaCm8wfoNR%2FAkx4kEg8m%2F9zPEZF4DKQAZpsr8dqwhD9TatN2DW%2FCoW%2FoHxa%2FijDLeDgOVcyJbrPq1uweXKu9LykXLCDbTm2GwJQsFasBpm4v4JyFtS7uN9t6l352WMMlmXWZnLk%2Fyc%2BMvvj4LGkn5Rp5DuNDX3MTP5cTXrUJBLvRHO%2FumpKWUUOhOpzaAylq8kXDa5A4N%2BiHat9Ijg5WALsxClIPDEKdyOPto%2FVRIPeEImtkIgAqS1jOMpOn%2BgTxnBFEj2COi2pnQDp3t4Fc92ar9irl2GtAHTg6nUYyWh%2FaXwcqRRKQn4qclPOtP%2F3m4s0dFAaLCDeZuzD32qrIEtAILo9833GbL89SDQaadGGgst60i93CUwM8TLU8RgYudmz%2BL1CfARv7LrUEK4Qjq4xb3mTKq0y3yFn17PZYf723YU0UvPMtilhVYOseD%2BQQqBoIN7wA6N6IvA95WvTsnahoEgeshd%2FLuMmQNr4iK5OsFUuiAwyfW3wwY6pgEaqMmbaufLZpjTwAtHSPUeqgj%2FPWwP64ik%2F%2BwpjLIsSqKsRzDgNa14d7zZp3JPGhayKZ%2B3TEp8nZIaLNeudQGuHKtlAPib6LalJrn56P4rgEDXqKN0j7BkKVZpl3YrAzljxACglSP1pqkhfgHgIMWReVVx7jvZvEZYm5halkRsJa%2BzmzKIi4PNtQl19kBrunPxu2oKOh%2FqsCjDcjNZ6kfiiQOB8BdE&X-Amz-Signature=0f50c9beb2796a7e885c83fde0515d5442429dd2ab2d79dc9f9c011c6212efcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS3O6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNylXndW3WjXINepxyafW3Pd771TbGqGHUMPjZcDkR9AiA5gBxj%2BCuIcjnvr0Qyjq9DPMCsDNE9n7BFz4mI392C5iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZigu3T82HIY84vnKKtwD4meAuH0G0LVqX0P0uReHaCIEVMw6fLykMuLcuh7Vcw8woX3QlroTSctSRAjIP7JwS0RvS1yamcUH%2FJBeD7ASpnqmRIrzh9NEOA1r26yL5fpgzABWlu63BkmKNcRR%2FfjxkIVsw%2Boz8TzaCm8wfoNR%2FAkx4kEg8m%2F9zPEZF4DKQAZpsr8dqwhD9TatN2DW%2FCoW%2FoHxa%2FijDLeDgOVcyJbrPq1uweXKu9LykXLCDbTm2GwJQsFasBpm4v4JyFtS7uN9t6l352WMMlmXWZnLk%2Fyc%2BMvvj4LGkn5Rp5DuNDX3MTP5cTXrUJBLvRHO%2FumpKWUUOhOpzaAylq8kXDa5A4N%2BiHat9Ijg5WALsxClIPDEKdyOPto%2FVRIPeEImtkIgAqS1jOMpOn%2BgTxnBFEj2COi2pnQDp3t4Fc92ar9irl2GtAHTg6nUYyWh%2FaXwcqRRKQn4qclPOtP%2F3m4s0dFAaLCDeZuzD32qrIEtAILo9833GbL89SDQaadGGgst60i93CUwM8TLU8RgYudmz%2BL1CfARv7LrUEK4Qjq4xb3mTKq0y3yFn17PZYf723YU0UvPMtilhVYOseD%2BQQqBoIN7wA6N6IvA95WvTsnahoEgeshd%2FLuMmQNr4iK5OsFUuiAwyfW3wwY6pgEaqMmbaufLZpjTwAtHSPUeqgj%2FPWwP64ik%2F%2BwpjLIsSqKsRzDgNa14d7zZp3JPGhayKZ%2B3TEp8nZIaLNeudQGuHKtlAPib6LalJrn56P4rgEDXqKN0j7BkKVZpl3YrAzljxACglSP1pqkhfgHgIMWReVVx7jvZvEZYm5halkRsJa%2BzmzKIi4PNtQl19kBrunPxu2oKOh%2FqsCjDcjNZ6kfiiQOB8BdE&X-Amz-Signature=dfc0f278649ca2a15b70248bd4dc8badf85de334db209f0bcda877247fb891ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS3O6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNylXndW3WjXINepxyafW3Pd771TbGqGHUMPjZcDkR9AiA5gBxj%2BCuIcjnvr0Qyjq9DPMCsDNE9n7BFz4mI392C5iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZigu3T82HIY84vnKKtwD4meAuH0G0LVqX0P0uReHaCIEVMw6fLykMuLcuh7Vcw8woX3QlroTSctSRAjIP7JwS0RvS1yamcUH%2FJBeD7ASpnqmRIrzh9NEOA1r26yL5fpgzABWlu63BkmKNcRR%2FfjxkIVsw%2Boz8TzaCm8wfoNR%2FAkx4kEg8m%2F9zPEZF4DKQAZpsr8dqwhD9TatN2DW%2FCoW%2FoHxa%2FijDLeDgOVcyJbrPq1uweXKu9LykXLCDbTm2GwJQsFasBpm4v4JyFtS7uN9t6l352WMMlmXWZnLk%2Fyc%2BMvvj4LGkn5Rp5DuNDX3MTP5cTXrUJBLvRHO%2FumpKWUUOhOpzaAylq8kXDa5A4N%2BiHat9Ijg5WALsxClIPDEKdyOPto%2FVRIPeEImtkIgAqS1jOMpOn%2BgTxnBFEj2COi2pnQDp3t4Fc92ar9irl2GtAHTg6nUYyWh%2FaXwcqRRKQn4qclPOtP%2F3m4s0dFAaLCDeZuzD32qrIEtAILo9833GbL89SDQaadGGgst60i93CUwM8TLU8RgYudmz%2BL1CfARv7LrUEK4Qjq4xb3mTKq0y3yFn17PZYf723YU0UvPMtilhVYOseD%2BQQqBoIN7wA6N6IvA95WvTsnahoEgeshd%2FLuMmQNr4iK5OsFUuiAwyfW3wwY6pgEaqMmbaufLZpjTwAtHSPUeqgj%2FPWwP64ik%2F%2BwpjLIsSqKsRzDgNa14d7zZp3JPGhayKZ%2B3TEp8nZIaLNeudQGuHKtlAPib6LalJrn56P4rgEDXqKN0j7BkKVZpl3YrAzljxACglSP1pqkhfgHgIMWReVVx7jvZvEZYm5halkRsJa%2BzmzKIi4PNtQl19kBrunPxu2oKOh%2FqsCjDcjNZ6kfiiQOB8BdE&X-Amz-Signature=804ca8ab7e7ed74182c1409f61140952801790972851c02e606b867601554a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS3O6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNylXndW3WjXINepxyafW3Pd771TbGqGHUMPjZcDkR9AiA5gBxj%2BCuIcjnvr0Qyjq9DPMCsDNE9n7BFz4mI392C5iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZigu3T82HIY84vnKKtwD4meAuH0G0LVqX0P0uReHaCIEVMw6fLykMuLcuh7Vcw8woX3QlroTSctSRAjIP7JwS0RvS1yamcUH%2FJBeD7ASpnqmRIrzh9NEOA1r26yL5fpgzABWlu63BkmKNcRR%2FfjxkIVsw%2Boz8TzaCm8wfoNR%2FAkx4kEg8m%2F9zPEZF4DKQAZpsr8dqwhD9TatN2DW%2FCoW%2FoHxa%2FijDLeDgOVcyJbrPq1uweXKu9LykXLCDbTm2GwJQsFasBpm4v4JyFtS7uN9t6l352WMMlmXWZnLk%2Fyc%2BMvvj4LGkn5Rp5DuNDX3MTP5cTXrUJBLvRHO%2FumpKWUUOhOpzaAylq8kXDa5A4N%2BiHat9Ijg5WALsxClIPDEKdyOPto%2FVRIPeEImtkIgAqS1jOMpOn%2BgTxnBFEj2COi2pnQDp3t4Fc92ar9irl2GtAHTg6nUYyWh%2FaXwcqRRKQn4qclPOtP%2F3m4s0dFAaLCDeZuzD32qrIEtAILo9833GbL89SDQaadGGgst60i93CUwM8TLU8RgYudmz%2BL1CfARv7LrUEK4Qjq4xb3mTKq0y3yFn17PZYf723YU0UvPMtilhVYOseD%2BQQqBoIN7wA6N6IvA95WvTsnahoEgeshd%2FLuMmQNr4iK5OsFUuiAwyfW3wwY6pgEaqMmbaufLZpjTwAtHSPUeqgj%2FPWwP64ik%2F%2BwpjLIsSqKsRzDgNa14d7zZp3JPGhayKZ%2B3TEp8nZIaLNeudQGuHKtlAPib6LalJrn56P4rgEDXqKN0j7BkKVZpl3YrAzljxACglSP1pqkhfgHgIMWReVVx7jvZvEZYm5halkRsJa%2BzmzKIi4PNtQl19kBrunPxu2oKOh%2FqsCjDcjNZ6kfiiQOB8BdE&X-Amz-Signature=b8ab311b1dee03f40c989a93f78a5eaae7e2b00ec9f889493dd1ef6d7d2478b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS3O6T%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNylXndW3WjXINepxyafW3Pd771TbGqGHUMPjZcDkR9AiA5gBxj%2BCuIcjnvr0Qyjq9DPMCsDNE9n7BFz4mI392C5iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZigu3T82HIY84vnKKtwD4meAuH0G0LVqX0P0uReHaCIEVMw6fLykMuLcuh7Vcw8woX3QlroTSctSRAjIP7JwS0RvS1yamcUH%2FJBeD7ASpnqmRIrzh9NEOA1r26yL5fpgzABWlu63BkmKNcRR%2FfjxkIVsw%2Boz8TzaCm8wfoNR%2FAkx4kEg8m%2F9zPEZF4DKQAZpsr8dqwhD9TatN2DW%2FCoW%2FoHxa%2FijDLeDgOVcyJbrPq1uweXKu9LykXLCDbTm2GwJQsFasBpm4v4JyFtS7uN9t6l352WMMlmXWZnLk%2Fyc%2BMvvj4LGkn5Rp5DuNDX3MTP5cTXrUJBLvRHO%2FumpKWUUOhOpzaAylq8kXDa5A4N%2BiHat9Ijg5WALsxClIPDEKdyOPto%2FVRIPeEImtkIgAqS1jOMpOn%2BgTxnBFEj2COi2pnQDp3t4Fc92ar9irl2GtAHTg6nUYyWh%2FaXwcqRRKQn4qclPOtP%2F3m4s0dFAaLCDeZuzD32qrIEtAILo9833GbL89SDQaadGGgst60i93CUwM8TLU8RgYudmz%2BL1CfARv7LrUEK4Qjq4xb3mTKq0y3yFn17PZYf723YU0UvPMtilhVYOseD%2BQQqBoIN7wA6N6IvA95WvTsnahoEgeshd%2FLuMmQNr4iK5OsFUuiAwyfW3wwY6pgEaqMmbaufLZpjTwAtHSPUeqgj%2FPWwP64ik%2F%2BwpjLIsSqKsRzDgNa14d7zZp3JPGhayKZ%2B3TEp8nZIaLNeudQGuHKtlAPib6LalJrn56P4rgEDXqKN0j7BkKVZpl3YrAzljxACglSP1pqkhfgHgIMWReVVx7jvZvEZYm5halkRsJa%2BzmzKIi4PNtQl19kBrunPxu2oKOh%2FqsCjDcjNZ6kfiiQOB8BdE&X-Amz-Signature=6fedebb5dddcb2fc3fb3f3a192ac232e811f2c8220ac8fa19dd3f89ab8b30745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
