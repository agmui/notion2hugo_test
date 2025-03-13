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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTL3NEKB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZoCLPW0ZE2UG%2F%2Bl1KEFoY5pLNlU0ReY8CjNl2LK00VwIgevKuxDgFsRLXbqi8WggQIjyVG3v9AFVRwvIYI90EjOIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpfFYDIwmcgX5ptMyrcA6O9n%2Fwwm8hX7zhrSOubabbmaLw%2FoZNk591%2Bub%2FGmjKdiaC9zSitbED%2BkDTQNtY5t1NDxJzPDsYb7dtyXFay6RjSBbZJjILsRH7IyxhxpsNkKG%2FnzG7oJvPXPEmW12mf8kofRSiwN9gIguZV6pvnQxl2aupQO8i%2B09osxKEiDHDljAUQY2YTtBy9YQbxcIqsssSKGtvLKZ%2FR%2BGf7796s3nFl3ebPOSzoia6BaeRooQ%2BvZGGxMp1H5MGRshj8ENZdXVpjgFpyw40rJB08AbDJc4uR3LWVzFcW7S7d0qQYquANzJLUI25PyjQYGfBwlE2mMkq1HJknDY89ZUXKB1U6Pkn%2F44DNqA7DJz7DgxUUc7qFkUYW0nphbWsQ6MYwauod5%2BEWeHXeV5KL8O%2FYn%2FSxLeEPQSKSG2RL5RlUeKWE2FXU%2BV%2BdciSdqdclVeujOrlWJJzZFfheJUDsd0%2FoGkUMdJF6sMOBpS6VmFpYmoZ7qSE0BvyYPKyTuHeteWZ%2BJdZPcKN4j4yIj2UPffxF8UCAfYBbdlqaFtI3lYuH5cO%2FWO61SYR3ftrkKY67KCVzAFXtkOoi%2FKsbjGr%2BDaUUgQT5gYpeUhftLYseZnlAWe%2BCzl371biV4KAhzA5SAs80MNKWzL4GOqUBvlsW2LA%2Bn2QUgwT7An1m9X1d4gQmmcdJ06zZInXFK9zYpSneXK6NrRxZjrCYU92hAb97CO%2BT6oWwpCZvUQ2NwE1rjoPVSVrkatZ2KV6t9B1ptnsCMtcYJxc2dOPpXHCOWKQ1qJwzlC7%2BU%2FUuTAVCq9PtQpEQcGrNC0qHGYWELPtrlSEgVOae%2BBTd994zSDThFtc8qHBzJoXXvRDLVGHyIjyM%2Foip&X-Amz-Signature=28ae9fe36bf71b27f016f8cf757701906c454a8d2ce0d6b090d6914a704fea31&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTL3NEKB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZoCLPW0ZE2UG%2F%2Bl1KEFoY5pLNlU0ReY8CjNl2LK00VwIgevKuxDgFsRLXbqi8WggQIjyVG3v9AFVRwvIYI90EjOIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpfFYDIwmcgX5ptMyrcA6O9n%2Fwwm8hX7zhrSOubabbmaLw%2FoZNk591%2Bub%2FGmjKdiaC9zSitbED%2BkDTQNtY5t1NDxJzPDsYb7dtyXFay6RjSBbZJjILsRH7IyxhxpsNkKG%2FnzG7oJvPXPEmW12mf8kofRSiwN9gIguZV6pvnQxl2aupQO8i%2B09osxKEiDHDljAUQY2YTtBy9YQbxcIqsssSKGtvLKZ%2FR%2BGf7796s3nFl3ebPOSzoia6BaeRooQ%2BvZGGxMp1H5MGRshj8ENZdXVpjgFpyw40rJB08AbDJc4uR3LWVzFcW7S7d0qQYquANzJLUI25PyjQYGfBwlE2mMkq1HJknDY89ZUXKB1U6Pkn%2F44DNqA7DJz7DgxUUc7qFkUYW0nphbWsQ6MYwauod5%2BEWeHXeV5KL8O%2FYn%2FSxLeEPQSKSG2RL5RlUeKWE2FXU%2BV%2BdciSdqdclVeujOrlWJJzZFfheJUDsd0%2FoGkUMdJF6sMOBpS6VmFpYmoZ7qSE0BvyYPKyTuHeteWZ%2BJdZPcKN4j4yIj2UPffxF8UCAfYBbdlqaFtI3lYuH5cO%2FWO61SYR3ftrkKY67KCVzAFXtkOoi%2FKsbjGr%2BDaUUgQT5gYpeUhftLYseZnlAWe%2BCzl371biV4KAhzA5SAs80MNKWzL4GOqUBvlsW2LA%2Bn2QUgwT7An1m9X1d4gQmmcdJ06zZInXFK9zYpSneXK6NrRxZjrCYU92hAb97CO%2BT6oWwpCZvUQ2NwE1rjoPVSVrkatZ2KV6t9B1ptnsCMtcYJxc2dOPpXHCOWKQ1qJwzlC7%2BU%2FUuTAVCq9PtQpEQcGrNC0qHGYWELPtrlSEgVOae%2BBTd994zSDThFtc8qHBzJoXXvRDLVGHyIjyM%2Foip&X-Amz-Signature=142247a5dd560abdba709f3b4d299f1d4db25ba585a2c66ba8f9c5605c0c21bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTL3NEKB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZoCLPW0ZE2UG%2F%2Bl1KEFoY5pLNlU0ReY8CjNl2LK00VwIgevKuxDgFsRLXbqi8WggQIjyVG3v9AFVRwvIYI90EjOIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpfFYDIwmcgX5ptMyrcA6O9n%2Fwwm8hX7zhrSOubabbmaLw%2FoZNk591%2Bub%2FGmjKdiaC9zSitbED%2BkDTQNtY5t1NDxJzPDsYb7dtyXFay6RjSBbZJjILsRH7IyxhxpsNkKG%2FnzG7oJvPXPEmW12mf8kofRSiwN9gIguZV6pvnQxl2aupQO8i%2B09osxKEiDHDljAUQY2YTtBy9YQbxcIqsssSKGtvLKZ%2FR%2BGf7796s3nFl3ebPOSzoia6BaeRooQ%2BvZGGxMp1H5MGRshj8ENZdXVpjgFpyw40rJB08AbDJc4uR3LWVzFcW7S7d0qQYquANzJLUI25PyjQYGfBwlE2mMkq1HJknDY89ZUXKB1U6Pkn%2F44DNqA7DJz7DgxUUc7qFkUYW0nphbWsQ6MYwauod5%2BEWeHXeV5KL8O%2FYn%2FSxLeEPQSKSG2RL5RlUeKWE2FXU%2BV%2BdciSdqdclVeujOrlWJJzZFfheJUDsd0%2FoGkUMdJF6sMOBpS6VmFpYmoZ7qSE0BvyYPKyTuHeteWZ%2BJdZPcKN4j4yIj2UPffxF8UCAfYBbdlqaFtI3lYuH5cO%2FWO61SYR3ftrkKY67KCVzAFXtkOoi%2FKsbjGr%2BDaUUgQT5gYpeUhftLYseZnlAWe%2BCzl371biV4KAhzA5SAs80MNKWzL4GOqUBvlsW2LA%2Bn2QUgwT7An1m9X1d4gQmmcdJ06zZInXFK9zYpSneXK6NrRxZjrCYU92hAb97CO%2BT6oWwpCZvUQ2NwE1rjoPVSVrkatZ2KV6t9B1ptnsCMtcYJxc2dOPpXHCOWKQ1qJwzlC7%2BU%2FUuTAVCq9PtQpEQcGrNC0qHGYWELPtrlSEgVOae%2BBTd994zSDThFtc8qHBzJoXXvRDLVGHyIjyM%2Foip&X-Amz-Signature=947e35692b21742739e23eb27b663211a096e3614064ba18e8013a24ae70514f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTL3NEKB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZoCLPW0ZE2UG%2F%2Bl1KEFoY5pLNlU0ReY8CjNl2LK00VwIgevKuxDgFsRLXbqi8WggQIjyVG3v9AFVRwvIYI90EjOIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpfFYDIwmcgX5ptMyrcA6O9n%2Fwwm8hX7zhrSOubabbmaLw%2FoZNk591%2Bub%2FGmjKdiaC9zSitbED%2BkDTQNtY5t1NDxJzPDsYb7dtyXFay6RjSBbZJjILsRH7IyxhxpsNkKG%2FnzG7oJvPXPEmW12mf8kofRSiwN9gIguZV6pvnQxl2aupQO8i%2B09osxKEiDHDljAUQY2YTtBy9YQbxcIqsssSKGtvLKZ%2FR%2BGf7796s3nFl3ebPOSzoia6BaeRooQ%2BvZGGxMp1H5MGRshj8ENZdXVpjgFpyw40rJB08AbDJc4uR3LWVzFcW7S7d0qQYquANzJLUI25PyjQYGfBwlE2mMkq1HJknDY89ZUXKB1U6Pkn%2F44DNqA7DJz7DgxUUc7qFkUYW0nphbWsQ6MYwauod5%2BEWeHXeV5KL8O%2FYn%2FSxLeEPQSKSG2RL5RlUeKWE2FXU%2BV%2BdciSdqdclVeujOrlWJJzZFfheJUDsd0%2FoGkUMdJF6sMOBpS6VmFpYmoZ7qSE0BvyYPKyTuHeteWZ%2BJdZPcKN4j4yIj2UPffxF8UCAfYBbdlqaFtI3lYuH5cO%2FWO61SYR3ftrkKY67KCVzAFXtkOoi%2FKsbjGr%2BDaUUgQT5gYpeUhftLYseZnlAWe%2BCzl371biV4KAhzA5SAs80MNKWzL4GOqUBvlsW2LA%2Bn2QUgwT7An1m9X1d4gQmmcdJ06zZInXFK9zYpSneXK6NrRxZjrCYU92hAb97CO%2BT6oWwpCZvUQ2NwE1rjoPVSVrkatZ2KV6t9B1ptnsCMtcYJxc2dOPpXHCOWKQ1qJwzlC7%2BU%2FUuTAVCq9PtQpEQcGrNC0qHGYWELPtrlSEgVOae%2BBTd994zSDThFtc8qHBzJoXXvRDLVGHyIjyM%2Foip&X-Amz-Signature=965a573114a826ed70586df86c54625d753aa5066609f5820b2be17cfcbc0a53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTL3NEKB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZoCLPW0ZE2UG%2F%2Bl1KEFoY5pLNlU0ReY8CjNl2LK00VwIgevKuxDgFsRLXbqi8WggQIjyVG3v9AFVRwvIYI90EjOIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpfFYDIwmcgX5ptMyrcA6O9n%2Fwwm8hX7zhrSOubabbmaLw%2FoZNk591%2Bub%2FGmjKdiaC9zSitbED%2BkDTQNtY5t1NDxJzPDsYb7dtyXFay6RjSBbZJjILsRH7IyxhxpsNkKG%2FnzG7oJvPXPEmW12mf8kofRSiwN9gIguZV6pvnQxl2aupQO8i%2B09osxKEiDHDljAUQY2YTtBy9YQbxcIqsssSKGtvLKZ%2FR%2BGf7796s3nFl3ebPOSzoia6BaeRooQ%2BvZGGxMp1H5MGRshj8ENZdXVpjgFpyw40rJB08AbDJc4uR3LWVzFcW7S7d0qQYquANzJLUI25PyjQYGfBwlE2mMkq1HJknDY89ZUXKB1U6Pkn%2F44DNqA7DJz7DgxUUc7qFkUYW0nphbWsQ6MYwauod5%2BEWeHXeV5KL8O%2FYn%2FSxLeEPQSKSG2RL5RlUeKWE2FXU%2BV%2BdciSdqdclVeujOrlWJJzZFfheJUDsd0%2FoGkUMdJF6sMOBpS6VmFpYmoZ7qSE0BvyYPKyTuHeteWZ%2BJdZPcKN4j4yIj2UPffxF8UCAfYBbdlqaFtI3lYuH5cO%2FWO61SYR3ftrkKY67KCVzAFXtkOoi%2FKsbjGr%2BDaUUgQT5gYpeUhftLYseZnlAWe%2BCzl371biV4KAhzA5SAs80MNKWzL4GOqUBvlsW2LA%2Bn2QUgwT7An1m9X1d4gQmmcdJ06zZInXFK9zYpSneXK6NrRxZjrCYU92hAb97CO%2BT6oWwpCZvUQ2NwE1rjoPVSVrkatZ2KV6t9B1ptnsCMtcYJxc2dOPpXHCOWKQ1qJwzlC7%2BU%2FUuTAVCq9PtQpEQcGrNC0qHGYWELPtrlSEgVOae%2BBTd994zSDThFtc8qHBzJoXXvRDLVGHyIjyM%2Foip&X-Amz-Signature=5d30cad0615a014bb339151eb0cdd1067e764017092931b9b63e4d2de2ad3783&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTL3NEKB%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZoCLPW0ZE2UG%2F%2Bl1KEFoY5pLNlU0ReY8CjNl2LK00VwIgevKuxDgFsRLXbqi8WggQIjyVG3v9AFVRwvIYI90EjOIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpfFYDIwmcgX5ptMyrcA6O9n%2Fwwm8hX7zhrSOubabbmaLw%2FoZNk591%2Bub%2FGmjKdiaC9zSitbED%2BkDTQNtY5t1NDxJzPDsYb7dtyXFay6RjSBbZJjILsRH7IyxhxpsNkKG%2FnzG7oJvPXPEmW12mf8kofRSiwN9gIguZV6pvnQxl2aupQO8i%2B09osxKEiDHDljAUQY2YTtBy9YQbxcIqsssSKGtvLKZ%2FR%2BGf7796s3nFl3ebPOSzoia6BaeRooQ%2BvZGGxMp1H5MGRshj8ENZdXVpjgFpyw40rJB08AbDJc4uR3LWVzFcW7S7d0qQYquANzJLUI25PyjQYGfBwlE2mMkq1HJknDY89ZUXKB1U6Pkn%2F44DNqA7DJz7DgxUUc7qFkUYW0nphbWsQ6MYwauod5%2BEWeHXeV5KL8O%2FYn%2FSxLeEPQSKSG2RL5RlUeKWE2FXU%2BV%2BdciSdqdclVeujOrlWJJzZFfheJUDsd0%2FoGkUMdJF6sMOBpS6VmFpYmoZ7qSE0BvyYPKyTuHeteWZ%2BJdZPcKN4j4yIj2UPffxF8UCAfYBbdlqaFtI3lYuH5cO%2FWO61SYR3ftrkKY67KCVzAFXtkOoi%2FKsbjGr%2BDaUUgQT5gYpeUhftLYseZnlAWe%2BCzl371biV4KAhzA5SAs80MNKWzL4GOqUBvlsW2LA%2Bn2QUgwT7An1m9X1d4gQmmcdJ06zZInXFK9zYpSneXK6NrRxZjrCYU92hAb97CO%2BT6oWwpCZvUQ2NwE1rjoPVSVrkatZ2KV6t9B1ptnsCMtcYJxc2dOPpXHCOWKQ1qJwzlC7%2BU%2FUuTAVCq9PtQpEQcGrNC0qHGYWELPtrlSEgVOae%2BBTd994zSDThFtc8qHBzJoXXvRDLVGHyIjyM%2Foip&X-Amz-Signature=8d0ccc3be6026230629949894f7e5b470cc0d47b59f843ed5cfdc4ac3df14c9d&X-Amz-SignedHeaders=host&x-id=GetObject)
