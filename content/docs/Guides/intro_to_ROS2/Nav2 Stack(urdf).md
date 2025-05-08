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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCFOU4M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXQkj07u%2FOX82OQuWBlMHmdNHFp7oF%2BT1sLS2u69QFAIgSZGBaoXI6m3hrHtSD72Ukyud%2BJWBPx2w5BcKq0QrB3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEfNNXX%2FgyJON93S4ircAxZV2ZM26tCInyUHEzLbPOChWSTfpDGfu0EKzeyfqdgCvu8kgB1aC2BzF5DdahaVFjM37gfyaj71B2iYOGcpqlMeHXeiNy27i7wROLyt1uLX4FClJOWEUS80ycy3uUN1%2BVSnhUnmQmCjaPcxEu%2FQi41lsyy0xwmNQzfon9nMTwijbrT6h7DdUq5K6oFQZazjlCAyKa4GmwKW46siN3DhZpSb3yiTo2k5tVtdBWcRaLuid20r%2FENSJzmYejcZ5F2Sum%2BVInoyuhd8p6bhGPbBbuToMTBRvQXTtI4I%2F3BDQCElgvR37oPZYefVQYRq3aOX8L6NECLR%2FHLwXIhDtv6QbK8FWNVJGov%2FSh7MELmzIgY8fD8v0F8yGcs66gJTenTMc6fFfVgexVpSzjJ0Yd0bjjyGjEgasShpbrecv%2F5w49LadpTJ14WTxMwRzGxn9dbikcf0hdhm%2Fs1GRV0rLJjYverwntU6Ms1WEFy6JnZFv%2B1L0wDWpluf2jbYX6okrP9MD%2FREKq%2B0JY0kzMQPSZkmGGzYwOoKkBQjCaxden9KQ1bY2DeAbtRYpN0KtlppnnSu%2B8%2BaiH58x6wPhR7kynhz6h8abWXUdtjjrJq5qnPPsJDIUielamvcViAlaTdtML%2FJ8sAGOqUB4H8%2FT9zydK%2Fi0vwVGAtc27bz3rEF5Z9JjXcV5X45e7k945pMcbhlqZouBxK3AN%2FVcupy3ecD5n%2Bcti3DOdUZzANqp4qsZnQKzkjRfmRsKLgOB9H1nQzF92E6%2BIFVWmwv6d%2BImk%2Bow00yTZAM4zL6v%2FyEsAbeJ7ojVMhMUdyIGyrE1SdWcxiuTq0Ak6M5tddqXWbkwFPKxdMO5CWGiFzJ7nLK2B0N&X-Amz-Signature=01c5408dc28a81b2c9bd4804319f2329bfdea9e2bb3a0914b424adf1ea81df26&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCFOU4M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXQkj07u%2FOX82OQuWBlMHmdNHFp7oF%2BT1sLS2u69QFAIgSZGBaoXI6m3hrHtSD72Ukyud%2BJWBPx2w5BcKq0QrB3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEfNNXX%2FgyJON93S4ircAxZV2ZM26tCInyUHEzLbPOChWSTfpDGfu0EKzeyfqdgCvu8kgB1aC2BzF5DdahaVFjM37gfyaj71B2iYOGcpqlMeHXeiNy27i7wROLyt1uLX4FClJOWEUS80ycy3uUN1%2BVSnhUnmQmCjaPcxEu%2FQi41lsyy0xwmNQzfon9nMTwijbrT6h7DdUq5K6oFQZazjlCAyKa4GmwKW46siN3DhZpSb3yiTo2k5tVtdBWcRaLuid20r%2FENSJzmYejcZ5F2Sum%2BVInoyuhd8p6bhGPbBbuToMTBRvQXTtI4I%2F3BDQCElgvR37oPZYefVQYRq3aOX8L6NECLR%2FHLwXIhDtv6QbK8FWNVJGov%2FSh7MELmzIgY8fD8v0F8yGcs66gJTenTMc6fFfVgexVpSzjJ0Yd0bjjyGjEgasShpbrecv%2F5w49LadpTJ14WTxMwRzGxn9dbikcf0hdhm%2Fs1GRV0rLJjYverwntU6Ms1WEFy6JnZFv%2B1L0wDWpluf2jbYX6okrP9MD%2FREKq%2B0JY0kzMQPSZkmGGzYwOoKkBQjCaxden9KQ1bY2DeAbtRYpN0KtlppnnSu%2B8%2BaiH58x6wPhR7kynhz6h8abWXUdtjjrJq5qnPPsJDIUielamvcViAlaTdtML%2FJ8sAGOqUB4H8%2FT9zydK%2Fi0vwVGAtc27bz3rEF5Z9JjXcV5X45e7k945pMcbhlqZouBxK3AN%2FVcupy3ecD5n%2Bcti3DOdUZzANqp4qsZnQKzkjRfmRsKLgOB9H1nQzF92E6%2BIFVWmwv6d%2BImk%2Bow00yTZAM4zL6v%2FyEsAbeJ7ojVMhMUdyIGyrE1SdWcxiuTq0Ak6M5tddqXWbkwFPKxdMO5CWGiFzJ7nLK2B0N&X-Amz-Signature=f795b17024111bcc75a976343e0c9d2ee310c23397d5eb6fa08a7131ab2bb2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCFOU4M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXQkj07u%2FOX82OQuWBlMHmdNHFp7oF%2BT1sLS2u69QFAIgSZGBaoXI6m3hrHtSD72Ukyud%2BJWBPx2w5BcKq0QrB3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEfNNXX%2FgyJON93S4ircAxZV2ZM26tCInyUHEzLbPOChWSTfpDGfu0EKzeyfqdgCvu8kgB1aC2BzF5DdahaVFjM37gfyaj71B2iYOGcpqlMeHXeiNy27i7wROLyt1uLX4FClJOWEUS80ycy3uUN1%2BVSnhUnmQmCjaPcxEu%2FQi41lsyy0xwmNQzfon9nMTwijbrT6h7DdUq5K6oFQZazjlCAyKa4GmwKW46siN3DhZpSb3yiTo2k5tVtdBWcRaLuid20r%2FENSJzmYejcZ5F2Sum%2BVInoyuhd8p6bhGPbBbuToMTBRvQXTtI4I%2F3BDQCElgvR37oPZYefVQYRq3aOX8L6NECLR%2FHLwXIhDtv6QbK8FWNVJGov%2FSh7MELmzIgY8fD8v0F8yGcs66gJTenTMc6fFfVgexVpSzjJ0Yd0bjjyGjEgasShpbrecv%2F5w49LadpTJ14WTxMwRzGxn9dbikcf0hdhm%2Fs1GRV0rLJjYverwntU6Ms1WEFy6JnZFv%2B1L0wDWpluf2jbYX6okrP9MD%2FREKq%2B0JY0kzMQPSZkmGGzYwOoKkBQjCaxden9KQ1bY2DeAbtRYpN0KtlppnnSu%2B8%2BaiH58x6wPhR7kynhz6h8abWXUdtjjrJq5qnPPsJDIUielamvcViAlaTdtML%2FJ8sAGOqUB4H8%2FT9zydK%2Fi0vwVGAtc27bz3rEF5Z9JjXcV5X45e7k945pMcbhlqZouBxK3AN%2FVcupy3ecD5n%2Bcti3DOdUZzANqp4qsZnQKzkjRfmRsKLgOB9H1nQzF92E6%2BIFVWmwv6d%2BImk%2Bow00yTZAM4zL6v%2FyEsAbeJ7ojVMhMUdyIGyrE1SdWcxiuTq0Ak6M5tddqXWbkwFPKxdMO5CWGiFzJ7nLK2B0N&X-Amz-Signature=8c3b20b5f8d12cd20aac78f98d1db60a10be8c12f18e8f01053261f510d7ea94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCFOU4M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXQkj07u%2FOX82OQuWBlMHmdNHFp7oF%2BT1sLS2u69QFAIgSZGBaoXI6m3hrHtSD72Ukyud%2BJWBPx2w5BcKq0QrB3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEfNNXX%2FgyJON93S4ircAxZV2ZM26tCInyUHEzLbPOChWSTfpDGfu0EKzeyfqdgCvu8kgB1aC2BzF5DdahaVFjM37gfyaj71B2iYOGcpqlMeHXeiNy27i7wROLyt1uLX4FClJOWEUS80ycy3uUN1%2BVSnhUnmQmCjaPcxEu%2FQi41lsyy0xwmNQzfon9nMTwijbrT6h7DdUq5K6oFQZazjlCAyKa4GmwKW46siN3DhZpSb3yiTo2k5tVtdBWcRaLuid20r%2FENSJzmYejcZ5F2Sum%2BVInoyuhd8p6bhGPbBbuToMTBRvQXTtI4I%2F3BDQCElgvR37oPZYefVQYRq3aOX8L6NECLR%2FHLwXIhDtv6QbK8FWNVJGov%2FSh7MELmzIgY8fD8v0F8yGcs66gJTenTMc6fFfVgexVpSzjJ0Yd0bjjyGjEgasShpbrecv%2F5w49LadpTJ14WTxMwRzGxn9dbikcf0hdhm%2Fs1GRV0rLJjYverwntU6Ms1WEFy6JnZFv%2B1L0wDWpluf2jbYX6okrP9MD%2FREKq%2B0JY0kzMQPSZkmGGzYwOoKkBQjCaxden9KQ1bY2DeAbtRYpN0KtlppnnSu%2B8%2BaiH58x6wPhR7kynhz6h8abWXUdtjjrJq5qnPPsJDIUielamvcViAlaTdtML%2FJ8sAGOqUB4H8%2FT9zydK%2Fi0vwVGAtc27bz3rEF5Z9JjXcV5X45e7k945pMcbhlqZouBxK3AN%2FVcupy3ecD5n%2Bcti3DOdUZzANqp4qsZnQKzkjRfmRsKLgOB9H1nQzF92E6%2BIFVWmwv6d%2BImk%2Bow00yTZAM4zL6v%2FyEsAbeJ7ojVMhMUdyIGyrE1SdWcxiuTq0Ak6M5tddqXWbkwFPKxdMO5CWGiFzJ7nLK2B0N&X-Amz-Signature=3d2cf595c9f4633f39dd22a411957542ff4845dd70682a3894e37f795784e27a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCFOU4M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXQkj07u%2FOX82OQuWBlMHmdNHFp7oF%2BT1sLS2u69QFAIgSZGBaoXI6m3hrHtSD72Ukyud%2BJWBPx2w5BcKq0QrB3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEfNNXX%2FgyJON93S4ircAxZV2ZM26tCInyUHEzLbPOChWSTfpDGfu0EKzeyfqdgCvu8kgB1aC2BzF5DdahaVFjM37gfyaj71B2iYOGcpqlMeHXeiNy27i7wROLyt1uLX4FClJOWEUS80ycy3uUN1%2BVSnhUnmQmCjaPcxEu%2FQi41lsyy0xwmNQzfon9nMTwijbrT6h7DdUq5K6oFQZazjlCAyKa4GmwKW46siN3DhZpSb3yiTo2k5tVtdBWcRaLuid20r%2FENSJzmYejcZ5F2Sum%2BVInoyuhd8p6bhGPbBbuToMTBRvQXTtI4I%2F3BDQCElgvR37oPZYefVQYRq3aOX8L6NECLR%2FHLwXIhDtv6QbK8FWNVJGov%2FSh7MELmzIgY8fD8v0F8yGcs66gJTenTMc6fFfVgexVpSzjJ0Yd0bjjyGjEgasShpbrecv%2F5w49LadpTJ14WTxMwRzGxn9dbikcf0hdhm%2Fs1GRV0rLJjYverwntU6Ms1WEFy6JnZFv%2B1L0wDWpluf2jbYX6okrP9MD%2FREKq%2B0JY0kzMQPSZkmGGzYwOoKkBQjCaxden9KQ1bY2DeAbtRYpN0KtlppnnSu%2B8%2BaiH58x6wPhR7kynhz6h8abWXUdtjjrJq5qnPPsJDIUielamvcViAlaTdtML%2FJ8sAGOqUB4H8%2FT9zydK%2Fi0vwVGAtc27bz3rEF5Z9JjXcV5X45e7k945pMcbhlqZouBxK3AN%2FVcupy3ecD5n%2Bcti3DOdUZzANqp4qsZnQKzkjRfmRsKLgOB9H1nQzF92E6%2BIFVWmwv6d%2BImk%2Bow00yTZAM4zL6v%2FyEsAbeJ7ojVMhMUdyIGyrE1SdWcxiuTq0Ak6M5tddqXWbkwFPKxdMO5CWGiFzJ7nLK2B0N&X-Amz-Signature=006707d08e350b4f9805bb5c3d0558bc1e3a4fc95c375d480e2f7919a6a72f51&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCFOU4M%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T132319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXQkj07u%2FOX82OQuWBlMHmdNHFp7oF%2BT1sLS2u69QFAIgSZGBaoXI6m3hrHtSD72Ukyud%2BJWBPx2w5BcKq0QrB3Iq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEfNNXX%2FgyJON93S4ircAxZV2ZM26tCInyUHEzLbPOChWSTfpDGfu0EKzeyfqdgCvu8kgB1aC2BzF5DdahaVFjM37gfyaj71B2iYOGcpqlMeHXeiNy27i7wROLyt1uLX4FClJOWEUS80ycy3uUN1%2BVSnhUnmQmCjaPcxEu%2FQi41lsyy0xwmNQzfon9nMTwijbrT6h7DdUq5K6oFQZazjlCAyKa4GmwKW46siN3DhZpSb3yiTo2k5tVtdBWcRaLuid20r%2FENSJzmYejcZ5F2Sum%2BVInoyuhd8p6bhGPbBbuToMTBRvQXTtI4I%2F3BDQCElgvR37oPZYefVQYRq3aOX8L6NECLR%2FHLwXIhDtv6QbK8FWNVJGov%2FSh7MELmzIgY8fD8v0F8yGcs66gJTenTMc6fFfVgexVpSzjJ0Yd0bjjyGjEgasShpbrecv%2F5w49LadpTJ14WTxMwRzGxn9dbikcf0hdhm%2Fs1GRV0rLJjYverwntU6Ms1WEFy6JnZFv%2B1L0wDWpluf2jbYX6okrP9MD%2FREKq%2B0JY0kzMQPSZkmGGzYwOoKkBQjCaxden9KQ1bY2DeAbtRYpN0KtlppnnSu%2B8%2BaiH58x6wPhR7kynhz6h8abWXUdtjjrJq5qnPPsJDIUielamvcViAlaTdtML%2FJ8sAGOqUB4H8%2FT9zydK%2Fi0vwVGAtc27bz3rEF5Z9JjXcV5X45e7k945pMcbhlqZouBxK3AN%2FVcupy3ecD5n%2Bcti3DOdUZzANqp4qsZnQKzkjRfmRsKLgOB9H1nQzF92E6%2BIFVWmwv6d%2BImk%2Bow00yTZAM4zL6v%2FyEsAbeJ7ojVMhMUdyIGyrE1SdWcxiuTq0Ak6M5tddqXWbkwFPKxdMO5CWGiFzJ7nLK2B0N&X-Amz-Signature=cf761752683a46abf067a0edf07511bcedd8283e380667d702d5047ec00f22bc&X-Amz-SignedHeaders=host&x-id=GetObject)
