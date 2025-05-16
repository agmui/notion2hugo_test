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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAAQMUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwG0P7aobF1c2WOMl0WbgEp8CGsnMso3YHDEsde%2F4U4QIgPPy3Z34WGVLx6LaQzKPIaar4jYbAiCo18pCSqFaL2qIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPkDYx2f%2F80lyHUAySrcAxVS65QsSXVQZHcmu95GI%2Bbb1aAoszXFWP%2BUCDG66g7RX3Jkmblkc2D3kC84Xydy4SQHHFlCQqYB3pjX7rovBVNVHnxWTfwuOGyV%2FanX66BBe87rOxFNCh06HE%2BLbYm86pl9mi3F2rw1BRrIaMOR7Q5KtS8DR1BnWW%2BJ2SJZZ5e1f%2FXVGS57WLWi8mqn5lFB1Q9BI9w1TfplnhAkP%2FnF8HBmsR9kFmLOv8lYOcUsqRFJ4sjXc9bzPU28a%2BTZ20zfT1CNavpGXOAuzEaQJYBI6AFcgEQY30iaVgNCLIXUINMipirOJ9r%2BQ0I9LkAvzXjqw5FLQ7Pyf46nNZ0YlQC%2FzTRsnmWxRuS6baqLHYOTx2ca8BA1H23%2FXLrzKf%2BxCCujLWBSsf7aqVxf%2FAYGAKMwTmnqdf7Kxz%2Fn%2F8HpDyo9V4ckv0uDkcVECwIii%2Ftn49GyZpVpyMUYfFAi3vTr5cuMx9CLuwMw4AiGXhG3xbkLqvqxS4q0tiohhWhKLflPpsvh5DpCElzv9AgapvJm7HKU9XOtt1%2F92qj6hT0ro6E%2FQGu1QjPHMumOc6WiadkmEqQU9NJxd5x3gVRzUpxeGOZ3AqP9GbJ98n9Qz4wOQdG7uXCtyZei7bhayukRFfVVMKfUm8EGOqUBXOemoYhY7LRQ6uqI5s4ujUXU4275UPBiWJry7cz2qrZ6e%2Blt36MRnCszUe%2BKmvDsZbWetPNAW872qvaZCiKVdfW%2FVx3615HDASqxYfngkGvifIEoG2xecvjtxf61GG6Q0EfuSKH40FTzHkIbIbreAgO0E%2BeGFgSipSb5tJ1DjidR3AX%2BDV0OQmVDRvOQwQFhCYSKPYXesQwcK6GPuzZjacp8kA6I&X-Amz-Signature=9bbb5d2abd5f2ca831abb225623d278678fa91497713f7aea6d67b689d3f842b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAAQMUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwG0P7aobF1c2WOMl0WbgEp8CGsnMso3YHDEsde%2F4U4QIgPPy3Z34WGVLx6LaQzKPIaar4jYbAiCo18pCSqFaL2qIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPkDYx2f%2F80lyHUAySrcAxVS65QsSXVQZHcmu95GI%2Bbb1aAoszXFWP%2BUCDG66g7RX3Jkmblkc2D3kC84Xydy4SQHHFlCQqYB3pjX7rovBVNVHnxWTfwuOGyV%2FanX66BBe87rOxFNCh06HE%2BLbYm86pl9mi3F2rw1BRrIaMOR7Q5KtS8DR1BnWW%2BJ2SJZZ5e1f%2FXVGS57WLWi8mqn5lFB1Q9BI9w1TfplnhAkP%2FnF8HBmsR9kFmLOv8lYOcUsqRFJ4sjXc9bzPU28a%2BTZ20zfT1CNavpGXOAuzEaQJYBI6AFcgEQY30iaVgNCLIXUINMipirOJ9r%2BQ0I9LkAvzXjqw5FLQ7Pyf46nNZ0YlQC%2FzTRsnmWxRuS6baqLHYOTx2ca8BA1H23%2FXLrzKf%2BxCCujLWBSsf7aqVxf%2FAYGAKMwTmnqdf7Kxz%2Fn%2F8HpDyo9V4ckv0uDkcVECwIii%2Ftn49GyZpVpyMUYfFAi3vTr5cuMx9CLuwMw4AiGXhG3xbkLqvqxS4q0tiohhWhKLflPpsvh5DpCElzv9AgapvJm7HKU9XOtt1%2F92qj6hT0ro6E%2FQGu1QjPHMumOc6WiadkmEqQU9NJxd5x3gVRzUpxeGOZ3AqP9GbJ98n9Qz4wOQdG7uXCtyZei7bhayukRFfVVMKfUm8EGOqUBXOemoYhY7LRQ6uqI5s4ujUXU4275UPBiWJry7cz2qrZ6e%2Blt36MRnCszUe%2BKmvDsZbWetPNAW872qvaZCiKVdfW%2FVx3615HDASqxYfngkGvifIEoG2xecvjtxf61GG6Q0EfuSKH40FTzHkIbIbreAgO0E%2BeGFgSipSb5tJ1DjidR3AX%2BDV0OQmVDRvOQwQFhCYSKPYXesQwcK6GPuzZjacp8kA6I&X-Amz-Signature=8367faa1259fa4f068d01a4d4f1f374a4f9364c708f3a0e5e01064fb882ee885&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAAQMUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwG0P7aobF1c2WOMl0WbgEp8CGsnMso3YHDEsde%2F4U4QIgPPy3Z34WGVLx6LaQzKPIaar4jYbAiCo18pCSqFaL2qIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPkDYx2f%2F80lyHUAySrcAxVS65QsSXVQZHcmu95GI%2Bbb1aAoszXFWP%2BUCDG66g7RX3Jkmblkc2D3kC84Xydy4SQHHFlCQqYB3pjX7rovBVNVHnxWTfwuOGyV%2FanX66BBe87rOxFNCh06HE%2BLbYm86pl9mi3F2rw1BRrIaMOR7Q5KtS8DR1BnWW%2BJ2SJZZ5e1f%2FXVGS57WLWi8mqn5lFB1Q9BI9w1TfplnhAkP%2FnF8HBmsR9kFmLOv8lYOcUsqRFJ4sjXc9bzPU28a%2BTZ20zfT1CNavpGXOAuzEaQJYBI6AFcgEQY30iaVgNCLIXUINMipirOJ9r%2BQ0I9LkAvzXjqw5FLQ7Pyf46nNZ0YlQC%2FzTRsnmWxRuS6baqLHYOTx2ca8BA1H23%2FXLrzKf%2BxCCujLWBSsf7aqVxf%2FAYGAKMwTmnqdf7Kxz%2Fn%2F8HpDyo9V4ckv0uDkcVECwIii%2Ftn49GyZpVpyMUYfFAi3vTr5cuMx9CLuwMw4AiGXhG3xbkLqvqxS4q0tiohhWhKLflPpsvh5DpCElzv9AgapvJm7HKU9XOtt1%2F92qj6hT0ro6E%2FQGu1QjPHMumOc6WiadkmEqQU9NJxd5x3gVRzUpxeGOZ3AqP9GbJ98n9Qz4wOQdG7uXCtyZei7bhayukRFfVVMKfUm8EGOqUBXOemoYhY7LRQ6uqI5s4ujUXU4275UPBiWJry7cz2qrZ6e%2Blt36MRnCszUe%2BKmvDsZbWetPNAW872qvaZCiKVdfW%2FVx3615HDASqxYfngkGvifIEoG2xecvjtxf61GG6Q0EfuSKH40FTzHkIbIbreAgO0E%2BeGFgSipSb5tJ1DjidR3AX%2BDV0OQmVDRvOQwQFhCYSKPYXesQwcK6GPuzZjacp8kA6I&X-Amz-Signature=b8866906e095bc6cc937f309f5572e9b2a4640ecc2026f8cc296bd989fd3653a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAAQMUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwG0P7aobF1c2WOMl0WbgEp8CGsnMso3YHDEsde%2F4U4QIgPPy3Z34WGVLx6LaQzKPIaar4jYbAiCo18pCSqFaL2qIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPkDYx2f%2F80lyHUAySrcAxVS65QsSXVQZHcmu95GI%2Bbb1aAoszXFWP%2BUCDG66g7RX3Jkmblkc2D3kC84Xydy4SQHHFlCQqYB3pjX7rovBVNVHnxWTfwuOGyV%2FanX66BBe87rOxFNCh06HE%2BLbYm86pl9mi3F2rw1BRrIaMOR7Q5KtS8DR1BnWW%2BJ2SJZZ5e1f%2FXVGS57WLWi8mqn5lFB1Q9BI9w1TfplnhAkP%2FnF8HBmsR9kFmLOv8lYOcUsqRFJ4sjXc9bzPU28a%2BTZ20zfT1CNavpGXOAuzEaQJYBI6AFcgEQY30iaVgNCLIXUINMipirOJ9r%2BQ0I9LkAvzXjqw5FLQ7Pyf46nNZ0YlQC%2FzTRsnmWxRuS6baqLHYOTx2ca8BA1H23%2FXLrzKf%2BxCCujLWBSsf7aqVxf%2FAYGAKMwTmnqdf7Kxz%2Fn%2F8HpDyo9V4ckv0uDkcVECwIii%2Ftn49GyZpVpyMUYfFAi3vTr5cuMx9CLuwMw4AiGXhG3xbkLqvqxS4q0tiohhWhKLflPpsvh5DpCElzv9AgapvJm7HKU9XOtt1%2F92qj6hT0ro6E%2FQGu1QjPHMumOc6WiadkmEqQU9NJxd5x3gVRzUpxeGOZ3AqP9GbJ98n9Qz4wOQdG7uXCtyZei7bhayukRFfVVMKfUm8EGOqUBXOemoYhY7LRQ6uqI5s4ujUXU4275UPBiWJry7cz2qrZ6e%2Blt36MRnCszUe%2BKmvDsZbWetPNAW872qvaZCiKVdfW%2FVx3615HDASqxYfngkGvifIEoG2xecvjtxf61GG6Q0EfuSKH40FTzHkIbIbreAgO0E%2BeGFgSipSb5tJ1DjidR3AX%2BDV0OQmVDRvOQwQFhCYSKPYXesQwcK6GPuzZjacp8kA6I&X-Amz-Signature=0385c6f100b586cca8d065ca8d70a1e9b5f36e86fb731b10025ce10c54a222f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAAQMUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwG0P7aobF1c2WOMl0WbgEp8CGsnMso3YHDEsde%2F4U4QIgPPy3Z34WGVLx6LaQzKPIaar4jYbAiCo18pCSqFaL2qIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPkDYx2f%2F80lyHUAySrcAxVS65QsSXVQZHcmu95GI%2Bbb1aAoszXFWP%2BUCDG66g7RX3Jkmblkc2D3kC84Xydy4SQHHFlCQqYB3pjX7rovBVNVHnxWTfwuOGyV%2FanX66BBe87rOxFNCh06HE%2BLbYm86pl9mi3F2rw1BRrIaMOR7Q5KtS8DR1BnWW%2BJ2SJZZ5e1f%2FXVGS57WLWi8mqn5lFB1Q9BI9w1TfplnhAkP%2FnF8HBmsR9kFmLOv8lYOcUsqRFJ4sjXc9bzPU28a%2BTZ20zfT1CNavpGXOAuzEaQJYBI6AFcgEQY30iaVgNCLIXUINMipirOJ9r%2BQ0I9LkAvzXjqw5FLQ7Pyf46nNZ0YlQC%2FzTRsnmWxRuS6baqLHYOTx2ca8BA1H23%2FXLrzKf%2BxCCujLWBSsf7aqVxf%2FAYGAKMwTmnqdf7Kxz%2Fn%2F8HpDyo9V4ckv0uDkcVECwIii%2Ftn49GyZpVpyMUYfFAi3vTr5cuMx9CLuwMw4AiGXhG3xbkLqvqxS4q0tiohhWhKLflPpsvh5DpCElzv9AgapvJm7HKU9XOtt1%2F92qj6hT0ro6E%2FQGu1QjPHMumOc6WiadkmEqQU9NJxd5x3gVRzUpxeGOZ3AqP9GbJ98n9Qz4wOQdG7uXCtyZei7bhayukRFfVVMKfUm8EGOqUBXOemoYhY7LRQ6uqI5s4ujUXU4275UPBiWJry7cz2qrZ6e%2Blt36MRnCszUe%2BKmvDsZbWetPNAW872qvaZCiKVdfW%2FVx3615HDASqxYfngkGvifIEoG2xecvjtxf61GG6Q0EfuSKH40FTzHkIbIbreAgO0E%2BeGFgSipSb5tJ1DjidR3AX%2BDV0OQmVDRvOQwQFhCYSKPYXesQwcK6GPuzZjacp8kA6I&X-Amz-Signature=96bb6290eccec9516ca914d2b742c89bb0651a17f4721d12403bf55e2b1f26e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAAQMUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwG0P7aobF1c2WOMl0WbgEp8CGsnMso3YHDEsde%2F4U4QIgPPy3Z34WGVLx6LaQzKPIaar4jYbAiCo18pCSqFaL2qIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPkDYx2f%2F80lyHUAySrcAxVS65QsSXVQZHcmu95GI%2Bbb1aAoszXFWP%2BUCDG66g7RX3Jkmblkc2D3kC84Xydy4SQHHFlCQqYB3pjX7rovBVNVHnxWTfwuOGyV%2FanX66BBe87rOxFNCh06HE%2BLbYm86pl9mi3F2rw1BRrIaMOR7Q5KtS8DR1BnWW%2BJ2SJZZ5e1f%2FXVGS57WLWi8mqn5lFB1Q9BI9w1TfplnhAkP%2FnF8HBmsR9kFmLOv8lYOcUsqRFJ4sjXc9bzPU28a%2BTZ20zfT1CNavpGXOAuzEaQJYBI6AFcgEQY30iaVgNCLIXUINMipirOJ9r%2BQ0I9LkAvzXjqw5FLQ7Pyf46nNZ0YlQC%2FzTRsnmWxRuS6baqLHYOTx2ca8BA1H23%2FXLrzKf%2BxCCujLWBSsf7aqVxf%2FAYGAKMwTmnqdf7Kxz%2Fn%2F8HpDyo9V4ckv0uDkcVECwIii%2Ftn49GyZpVpyMUYfFAi3vTr5cuMx9CLuwMw4AiGXhG3xbkLqvqxS4q0tiohhWhKLflPpsvh5DpCElzv9AgapvJm7HKU9XOtt1%2F92qj6hT0ro6E%2FQGu1QjPHMumOc6WiadkmEqQU9NJxd5x3gVRzUpxeGOZ3AqP9GbJ98n9Qz4wOQdG7uXCtyZei7bhayukRFfVVMKfUm8EGOqUBXOemoYhY7LRQ6uqI5s4ujUXU4275UPBiWJry7cz2qrZ6e%2Blt36MRnCszUe%2BKmvDsZbWetPNAW872qvaZCiKVdfW%2FVx3615HDASqxYfngkGvifIEoG2xecvjtxf61GG6Q0EfuSKH40FTzHkIbIbreAgO0E%2BeGFgSipSb5tJ1DjidR3AX%2BDV0OQmVDRvOQwQFhCYSKPYXesQwcK6GPuzZjacp8kA6I&X-Amz-Signature=ec805efe5af4ac4474f14e7852219a5188efc83230cc847ec84ff9d16fd82517&X-Amz-SignedHeaders=host&x-id=GetObject)
