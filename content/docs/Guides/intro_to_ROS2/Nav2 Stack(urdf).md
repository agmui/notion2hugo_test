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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=86e5222cea577a3902bd1ac3b36f3b5f9f3da452991a51d4afd957c8140e4517&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=7780ffde6d2c7e33acb0a3ba7f84b002f2dd40cf664210093e257877c62196f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=02950806969b8425e5164d3e7fbd641a0db1ef63d0a9b870b9438241bc62ec34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=6aed8118ba2a98b13f146bd9d2b64b4d14f22a336b195945f0fa471e0a86c6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=3e5580772241e22a5b38bc5ecb98d71cdc9880faf2864bd9246240ffb98b8952&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47T7PFD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCID5HgiOI4EpAEN4Nbw8WZ%2FA1T6lPshQDky9Ba9OgRG%2BAAiEA7hIKW3kUymXwNpiGXP3vgEscPLCRHt6Nssi%2BC0X1%2F4IqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIvErhg%2FUi63lh0oyrcAxB3yvzZ56e2G6VWDW3SIaFvgwhvdqYaXn%2BXVmz907mePZElP5QcZ4zPbwHWKIm7FtXYEjj7zo5z9pOdB6OgZJWh8lxQ41Lwho37R%2BecUP3W%2FVAS5y2roT8qV7oawPHBd0BFBiT44YGFJYuOkuH9ZoD7ygqT2JdwB1z%2Bn63tny8Cb8G5xXaxO7JIHVw21HtIRyH%2B5jpCPknRewY4zUJ7aeo5bZMfj7EKwpf9%2BhJeGRVYnxuACl4YqMqd53IVpkFAICdb9tkIh%2FcEJVrJoh7fKhjhxgwTuO6jKwwNG%2BuT61sEqcKafEW5HVjQlgA%2B9S1mWdiq0NtJV8rYzODa3Bii%2B2F7k68S0oXbtwDqkYF7NsNSFEtonnGtDdzNsNShZwlMZiMby4j44by9k3jR16nidrBuFjC%2BZ%2B0ijxIjHr66VlDfGGP39xvF16kpaYS7DmSN5u4v3%2By8YZHjBjVs9vWTysYpHp%2BAUzf71Dw7kBIfURh4FOIcIi02oLncLzQLMAvKwLv%2Bwl1M5KDBYISyjVl4JzwqeJwPcXEWkfwyuav%2FlnYAVjUf49dRnHHBQjfyAG4y22QXYJ8DJfOdFHdK300pZeotrVbo2PpNq5HxH%2FnjcXhdaivgP9coURClExSCMN%2FPx8AGOqUBToBPihVVXOIixcrAyiRd9HazEaK9ydFflzSc%2B7I9WiH7C6gm1DQmLqH62ZuCG4HbVsUTthoL%2Bo6DZ%2BmrRhsClhJQAHN1%2B4aHwsssfEMSf%2F3aaDRKsYAVscLCt9AoYZTDYNNKxxJ9E%2BfEm2NtBOIyigXYW3I%2FTbstfHOj%2FrG5fMbaA7FnPBqlAOjWmHet0nlpuseIUnVSJMztcnOXgc1iIaJ9uwLo&X-Amz-Signature=412bac6b5d9d6d58b0b599f55247a7794d38bd7c5b04f430c237e6ab10eb6e14&X-Amz-SignedHeaders=host&x-id=GetObject)
