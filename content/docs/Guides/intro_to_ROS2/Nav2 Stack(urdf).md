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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4NHPTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA97mT7MRWaUYY2HukHRfKkDl6gvI9%2BvyTw74Guq%2F3AUAiEAh3nimH0iYb%2FrUxR4XaOqLE%2BDz6%2FAZXpzN1C%2Fqw88QE0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcUIBjpja15t6DrVyrcA%2BM9vDO6ERAFF6%2F2SmGI0JHfMgp%2BqybHDe%2FrReKzFJV0nag08LvTFDg7LhcKi4vGxlyUP985hlcx%2FPV8Old8rQhR3t9c7W%2BVSCy9WBm7S%2BMyk%2B5qjMTHtIANQEfOujj0eFHpf2TFeRLCDFAoWVDiMSirH6o8umycEvGHqLqF8qOQo0O64rExcExAC1XA%2Fqt0z6Tyk3FOab1A6LCDJMUy24vf0n5aA%2BpGL3dzGLWeuFyIJQxdSboY99vZ%2FK85kmXfzim1krl6GetBQpMkr6yTQRe4xIWy6E4HZpjszhyER3eDqXj0dOmM26wqv8GbiWK55zFgU%2F%2BYLoimQBLgH0bI574nzjrVf%2B%2BVFvK%2FocYAxs%2Fl6jSHl4MyO3zXSX%2FJfKusi3E5etNaZ539JjV0rE808agRaYwS4mqV0Ip98YP80FSN1PxWV4mbNvFlaGU6lVTFgtpOFDaYUStT4Pcq17L8W6kJEbNFLnSOwUwK9YqbSzyZTP5F8HE9PkQY2ubUyhzV52wEcAnBt%2BYQjxdg0FlS649oMZDso2WxC1GILHvMBOZUYHJA2NJHODv5NzXLk%2Bh65CmpmcqwiXH%2F%2BKWBDULvDMM0D4UtE3ONYJrifADArpwCbtzsONSxM8KmxmK9MKnSkMEGOqUBGpLY9zZVfXTqfH4XW0DBTPd9Cax0XNTMpR0kPxn3vq%2BaOJ%2F9sfS0ZinjiYB%2FObF9jEIJNW2zSxtaq%2BLBrJbctJ8tIoD8i6gvnOO4z0lC7%2FgvI1doEL0eeaYHEsxn%2FwfdmPJ%2FLqWZOdrR4Y%2FaxE973UrnjMAiHeIqrR%2FjOnDZwHF%2B%2BL40nGfD6cynt8h7XljP0rZYomDSbR83AVVgn0aU1I%2FCW5ZT&X-Amz-Signature=d4857279c51d6cbd34bc7d8c2a85d962847dcafee3e3ccedcd14abc84ae97e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4NHPTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA97mT7MRWaUYY2HukHRfKkDl6gvI9%2BvyTw74Guq%2F3AUAiEAh3nimH0iYb%2FrUxR4XaOqLE%2BDz6%2FAZXpzN1C%2Fqw88QE0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcUIBjpja15t6DrVyrcA%2BM9vDO6ERAFF6%2F2SmGI0JHfMgp%2BqybHDe%2FrReKzFJV0nag08LvTFDg7LhcKi4vGxlyUP985hlcx%2FPV8Old8rQhR3t9c7W%2BVSCy9WBm7S%2BMyk%2B5qjMTHtIANQEfOujj0eFHpf2TFeRLCDFAoWVDiMSirH6o8umycEvGHqLqF8qOQo0O64rExcExAC1XA%2Fqt0z6Tyk3FOab1A6LCDJMUy24vf0n5aA%2BpGL3dzGLWeuFyIJQxdSboY99vZ%2FK85kmXfzim1krl6GetBQpMkr6yTQRe4xIWy6E4HZpjszhyER3eDqXj0dOmM26wqv8GbiWK55zFgU%2F%2BYLoimQBLgH0bI574nzjrVf%2B%2BVFvK%2FocYAxs%2Fl6jSHl4MyO3zXSX%2FJfKusi3E5etNaZ539JjV0rE808agRaYwS4mqV0Ip98YP80FSN1PxWV4mbNvFlaGU6lVTFgtpOFDaYUStT4Pcq17L8W6kJEbNFLnSOwUwK9YqbSzyZTP5F8HE9PkQY2ubUyhzV52wEcAnBt%2BYQjxdg0FlS649oMZDso2WxC1GILHvMBOZUYHJA2NJHODv5NzXLk%2Bh65CmpmcqwiXH%2F%2BKWBDULvDMM0D4UtE3ONYJrifADArpwCbtzsONSxM8KmxmK9MKnSkMEGOqUBGpLY9zZVfXTqfH4XW0DBTPd9Cax0XNTMpR0kPxn3vq%2BaOJ%2F9sfS0ZinjiYB%2FObF9jEIJNW2zSxtaq%2BLBrJbctJ8tIoD8i6gvnOO4z0lC7%2FgvI1doEL0eeaYHEsxn%2FwfdmPJ%2FLqWZOdrR4Y%2FaxE973UrnjMAiHeIqrR%2FjOnDZwHF%2B%2BL40nGfD6cynt8h7XljP0rZYomDSbR83AVVgn0aU1I%2FCW5ZT&X-Amz-Signature=ef7ee414f1c8b983eab704559e69b24486195b43626aeecdecf1d8384b1be5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4NHPTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA97mT7MRWaUYY2HukHRfKkDl6gvI9%2BvyTw74Guq%2F3AUAiEAh3nimH0iYb%2FrUxR4XaOqLE%2BDz6%2FAZXpzN1C%2Fqw88QE0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcUIBjpja15t6DrVyrcA%2BM9vDO6ERAFF6%2F2SmGI0JHfMgp%2BqybHDe%2FrReKzFJV0nag08LvTFDg7LhcKi4vGxlyUP985hlcx%2FPV8Old8rQhR3t9c7W%2BVSCy9WBm7S%2BMyk%2B5qjMTHtIANQEfOujj0eFHpf2TFeRLCDFAoWVDiMSirH6o8umycEvGHqLqF8qOQo0O64rExcExAC1XA%2Fqt0z6Tyk3FOab1A6LCDJMUy24vf0n5aA%2BpGL3dzGLWeuFyIJQxdSboY99vZ%2FK85kmXfzim1krl6GetBQpMkr6yTQRe4xIWy6E4HZpjszhyER3eDqXj0dOmM26wqv8GbiWK55zFgU%2F%2BYLoimQBLgH0bI574nzjrVf%2B%2BVFvK%2FocYAxs%2Fl6jSHl4MyO3zXSX%2FJfKusi3E5etNaZ539JjV0rE808agRaYwS4mqV0Ip98YP80FSN1PxWV4mbNvFlaGU6lVTFgtpOFDaYUStT4Pcq17L8W6kJEbNFLnSOwUwK9YqbSzyZTP5F8HE9PkQY2ubUyhzV52wEcAnBt%2BYQjxdg0FlS649oMZDso2WxC1GILHvMBOZUYHJA2NJHODv5NzXLk%2Bh65CmpmcqwiXH%2F%2BKWBDULvDMM0D4UtE3ONYJrifADArpwCbtzsONSxM8KmxmK9MKnSkMEGOqUBGpLY9zZVfXTqfH4XW0DBTPd9Cax0XNTMpR0kPxn3vq%2BaOJ%2F9sfS0ZinjiYB%2FObF9jEIJNW2zSxtaq%2BLBrJbctJ8tIoD8i6gvnOO4z0lC7%2FgvI1doEL0eeaYHEsxn%2FwfdmPJ%2FLqWZOdrR4Y%2FaxE973UrnjMAiHeIqrR%2FjOnDZwHF%2B%2BL40nGfD6cynt8h7XljP0rZYomDSbR83AVVgn0aU1I%2FCW5ZT&X-Amz-Signature=a6cc17389ceca0e1e365f3be8e8da782c80bfbed19e96fd9328175ca45752a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4NHPTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA97mT7MRWaUYY2HukHRfKkDl6gvI9%2BvyTw74Guq%2F3AUAiEAh3nimH0iYb%2FrUxR4XaOqLE%2BDz6%2FAZXpzN1C%2Fqw88QE0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcUIBjpja15t6DrVyrcA%2BM9vDO6ERAFF6%2F2SmGI0JHfMgp%2BqybHDe%2FrReKzFJV0nag08LvTFDg7LhcKi4vGxlyUP985hlcx%2FPV8Old8rQhR3t9c7W%2BVSCy9WBm7S%2BMyk%2B5qjMTHtIANQEfOujj0eFHpf2TFeRLCDFAoWVDiMSirH6o8umycEvGHqLqF8qOQo0O64rExcExAC1XA%2Fqt0z6Tyk3FOab1A6LCDJMUy24vf0n5aA%2BpGL3dzGLWeuFyIJQxdSboY99vZ%2FK85kmXfzim1krl6GetBQpMkr6yTQRe4xIWy6E4HZpjszhyER3eDqXj0dOmM26wqv8GbiWK55zFgU%2F%2BYLoimQBLgH0bI574nzjrVf%2B%2BVFvK%2FocYAxs%2Fl6jSHl4MyO3zXSX%2FJfKusi3E5etNaZ539JjV0rE808agRaYwS4mqV0Ip98YP80FSN1PxWV4mbNvFlaGU6lVTFgtpOFDaYUStT4Pcq17L8W6kJEbNFLnSOwUwK9YqbSzyZTP5F8HE9PkQY2ubUyhzV52wEcAnBt%2BYQjxdg0FlS649oMZDso2WxC1GILHvMBOZUYHJA2NJHODv5NzXLk%2Bh65CmpmcqwiXH%2F%2BKWBDULvDMM0D4UtE3ONYJrifADArpwCbtzsONSxM8KmxmK9MKnSkMEGOqUBGpLY9zZVfXTqfH4XW0DBTPd9Cax0XNTMpR0kPxn3vq%2BaOJ%2F9sfS0ZinjiYB%2FObF9jEIJNW2zSxtaq%2BLBrJbctJ8tIoD8i6gvnOO4z0lC7%2FgvI1doEL0eeaYHEsxn%2FwfdmPJ%2FLqWZOdrR4Y%2FaxE973UrnjMAiHeIqrR%2FjOnDZwHF%2B%2BL40nGfD6cynt8h7XljP0rZYomDSbR83AVVgn0aU1I%2FCW5ZT&X-Amz-Signature=b33897137b507443bb04400599015195af1943d646207edb5d958b74f31bf83d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4NHPTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA97mT7MRWaUYY2HukHRfKkDl6gvI9%2BvyTw74Guq%2F3AUAiEAh3nimH0iYb%2FrUxR4XaOqLE%2BDz6%2FAZXpzN1C%2Fqw88QE0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcUIBjpja15t6DrVyrcA%2BM9vDO6ERAFF6%2F2SmGI0JHfMgp%2BqybHDe%2FrReKzFJV0nag08LvTFDg7LhcKi4vGxlyUP985hlcx%2FPV8Old8rQhR3t9c7W%2BVSCy9WBm7S%2BMyk%2B5qjMTHtIANQEfOujj0eFHpf2TFeRLCDFAoWVDiMSirH6o8umycEvGHqLqF8qOQo0O64rExcExAC1XA%2Fqt0z6Tyk3FOab1A6LCDJMUy24vf0n5aA%2BpGL3dzGLWeuFyIJQxdSboY99vZ%2FK85kmXfzim1krl6GetBQpMkr6yTQRe4xIWy6E4HZpjszhyER3eDqXj0dOmM26wqv8GbiWK55zFgU%2F%2BYLoimQBLgH0bI574nzjrVf%2B%2BVFvK%2FocYAxs%2Fl6jSHl4MyO3zXSX%2FJfKusi3E5etNaZ539JjV0rE808agRaYwS4mqV0Ip98YP80FSN1PxWV4mbNvFlaGU6lVTFgtpOFDaYUStT4Pcq17L8W6kJEbNFLnSOwUwK9YqbSzyZTP5F8HE9PkQY2ubUyhzV52wEcAnBt%2BYQjxdg0FlS649oMZDso2WxC1GILHvMBOZUYHJA2NJHODv5NzXLk%2Bh65CmpmcqwiXH%2F%2BKWBDULvDMM0D4UtE3ONYJrifADArpwCbtzsONSxM8KmxmK9MKnSkMEGOqUBGpLY9zZVfXTqfH4XW0DBTPd9Cax0XNTMpR0kPxn3vq%2BaOJ%2F9sfS0ZinjiYB%2FObF9jEIJNW2zSxtaq%2BLBrJbctJ8tIoD8i6gvnOO4z0lC7%2FgvI1doEL0eeaYHEsxn%2FwfdmPJ%2FLqWZOdrR4Y%2FaxE973UrnjMAiHeIqrR%2FjOnDZwHF%2B%2BL40nGfD6cynt8h7XljP0rZYomDSbR83AVVgn0aU1I%2FCW5ZT&X-Amz-Signature=45ae0cb59db4e5e4b74a4940941c8887c1a96a239072fd455a1a7e53d814f84c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4NHPTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIA97mT7MRWaUYY2HukHRfKkDl6gvI9%2BvyTw74Guq%2F3AUAiEAh3nimH0iYb%2FrUxR4XaOqLE%2BDz6%2FAZXpzN1C%2Fqw88QE0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcUIBjpja15t6DrVyrcA%2BM9vDO6ERAFF6%2F2SmGI0JHfMgp%2BqybHDe%2FrReKzFJV0nag08LvTFDg7LhcKi4vGxlyUP985hlcx%2FPV8Old8rQhR3t9c7W%2BVSCy9WBm7S%2BMyk%2B5qjMTHtIANQEfOujj0eFHpf2TFeRLCDFAoWVDiMSirH6o8umycEvGHqLqF8qOQo0O64rExcExAC1XA%2Fqt0z6Tyk3FOab1A6LCDJMUy24vf0n5aA%2BpGL3dzGLWeuFyIJQxdSboY99vZ%2FK85kmXfzim1krl6GetBQpMkr6yTQRe4xIWy6E4HZpjszhyER3eDqXj0dOmM26wqv8GbiWK55zFgU%2F%2BYLoimQBLgH0bI574nzjrVf%2B%2BVFvK%2FocYAxs%2Fl6jSHl4MyO3zXSX%2FJfKusi3E5etNaZ539JjV0rE808agRaYwS4mqV0Ip98YP80FSN1PxWV4mbNvFlaGU6lVTFgtpOFDaYUStT4Pcq17L8W6kJEbNFLnSOwUwK9YqbSzyZTP5F8HE9PkQY2ubUyhzV52wEcAnBt%2BYQjxdg0FlS649oMZDso2WxC1GILHvMBOZUYHJA2NJHODv5NzXLk%2Bh65CmpmcqwiXH%2F%2BKWBDULvDMM0D4UtE3ONYJrifADArpwCbtzsONSxM8KmxmK9MKnSkMEGOqUBGpLY9zZVfXTqfH4XW0DBTPd9Cax0XNTMpR0kPxn3vq%2BaOJ%2F9sfS0ZinjiYB%2FObF9jEIJNW2zSxtaq%2BLBrJbctJ8tIoD8i6gvnOO4z0lC7%2FgvI1doEL0eeaYHEsxn%2FwfdmPJ%2FLqWZOdrR4Y%2FaxE973UrnjMAiHeIqrR%2FjOnDZwHF%2B%2BL40nGfD6cynt8h7XljP0rZYomDSbR83AVVgn0aU1I%2FCW5ZT&X-Amz-Signature=7eaa38ac02c1129e2d77d346a07fc6d6c6397b8eeba8ec64f7f66b0cb3585ce1&X-Amz-SignedHeaders=host&x-id=GetObject)
