---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOGWBB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAG6%2BlIhKV%2FQfTZ7LvS0RNaW71SyAp%2BJxMnMKAy0k5YAiAwrlhTt1pCqMj4QgBwH14vTWY87U7IPkRo4gT23RMeTyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJjgyrMV4zL%2F8x8xaKtwDUe1otHZzY3YzjqeaIlo4MCIralyuYAVLCDNTBv5oWijig6G3GR9X1mbGVmLjqILFySurgfbNGF%2FZJe89NEBgAUz0BpEgpDtWYmpboyT9QlfOhQzowqmI4JqI5yTkWoIFaOfkadAMZzMxsApp2Grx%2BrEltTboZGZMsD8vCumQUFovsghD64PMGynf5wy6ZHtYUbYqRNsFtEJJ%2F3fFaRQcUb1POdDlUFNmDUbp25sxIZFHoJ3Liwl2GcIV22rvVhWiLDYnBV2T9DXHLCbHAF5B79ZaMKPXHAZYBgeyyHC%2BvAQvzgMCTabDGutE8bM4dSxb66vG0YZY6dpriWcHBqOTZCqgbBo4hfPEj7TLfswJx1R5mBNaG8ZSHHed56nqNclIg0M0dyz%2B6AyloWMLt0CDDQM7UoFqYOMf8bmajYuKlC%2BdKTgqc0Dil2Jx7IuHqTWGXdujSCPilihu7f60ghptMra9thGjs%2BU6Jny9dvblmW8jYQhzWSpiYBQYo8PE0VyF8QQZVBruMXgYsJjOyjYhIZSbVS%2BiNyUyWKcWE0V1mhNMBrn6cwwo2VT6FR%2Fnp8VmJufep%2FFCXSsEdOw3LG7MOPtQU06s%2FW6M4SHY7yNZlgzNmMKrhTc0gRIvxXAwk7uBvQY6pgENINxOqsqQZQqdaW02dAkvLYi1qIWo8r0MRpYPYwq0XmeTRdr%2FXC6OJsaWdiRfLMeVc8kkmKGK6kGqldx6cmZn0XJoBqwaxQ3TvagriXtrCehUUMG3rc177h1NaVhRckLnnGVLQcTg37ufFy5b9CgoQ9uNqYANFV0PQb7COk%2BefBC%2FinO%2Bm2JAtRw9J2Aw5XvOaPIdAYSZlm5zyAAON7GOjVDWUhO4&X-Amz-Signature=628810507bfa118945e29d4c2ac180a372d764bd9284462df2545f175ed55780&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOGWBB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAG6%2BlIhKV%2FQfTZ7LvS0RNaW71SyAp%2BJxMnMKAy0k5YAiAwrlhTt1pCqMj4QgBwH14vTWY87U7IPkRo4gT23RMeTyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJjgyrMV4zL%2F8x8xaKtwDUe1otHZzY3YzjqeaIlo4MCIralyuYAVLCDNTBv5oWijig6G3GR9X1mbGVmLjqILFySurgfbNGF%2FZJe89NEBgAUz0BpEgpDtWYmpboyT9QlfOhQzowqmI4JqI5yTkWoIFaOfkadAMZzMxsApp2Grx%2BrEltTboZGZMsD8vCumQUFovsghD64PMGynf5wy6ZHtYUbYqRNsFtEJJ%2F3fFaRQcUb1POdDlUFNmDUbp25sxIZFHoJ3Liwl2GcIV22rvVhWiLDYnBV2T9DXHLCbHAF5B79ZaMKPXHAZYBgeyyHC%2BvAQvzgMCTabDGutE8bM4dSxb66vG0YZY6dpriWcHBqOTZCqgbBo4hfPEj7TLfswJx1R5mBNaG8ZSHHed56nqNclIg0M0dyz%2B6AyloWMLt0CDDQM7UoFqYOMf8bmajYuKlC%2BdKTgqc0Dil2Jx7IuHqTWGXdujSCPilihu7f60ghptMra9thGjs%2BU6Jny9dvblmW8jYQhzWSpiYBQYo8PE0VyF8QQZVBruMXgYsJjOyjYhIZSbVS%2BiNyUyWKcWE0V1mhNMBrn6cwwo2VT6FR%2Fnp8VmJufep%2FFCXSsEdOw3LG7MOPtQU06s%2FW6M4SHY7yNZlgzNmMKrhTc0gRIvxXAwk7uBvQY6pgENINxOqsqQZQqdaW02dAkvLYi1qIWo8r0MRpYPYwq0XmeTRdr%2FXC6OJsaWdiRfLMeVc8kkmKGK6kGqldx6cmZn0XJoBqwaxQ3TvagriXtrCehUUMG3rc177h1NaVhRckLnnGVLQcTg37ufFy5b9CgoQ9uNqYANFV0PQb7COk%2BefBC%2FinO%2Bm2JAtRw9J2Aw5XvOaPIdAYSZlm5zyAAON7GOjVDWUhO4&X-Amz-Signature=7b39faa99c7f398d295fc8bb618d7ff9b679692e4303af62789ba28c1de66ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOGWBB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAG6%2BlIhKV%2FQfTZ7LvS0RNaW71SyAp%2BJxMnMKAy0k5YAiAwrlhTt1pCqMj4QgBwH14vTWY87U7IPkRo4gT23RMeTyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJjgyrMV4zL%2F8x8xaKtwDUe1otHZzY3YzjqeaIlo4MCIralyuYAVLCDNTBv5oWijig6G3GR9X1mbGVmLjqILFySurgfbNGF%2FZJe89NEBgAUz0BpEgpDtWYmpboyT9QlfOhQzowqmI4JqI5yTkWoIFaOfkadAMZzMxsApp2Grx%2BrEltTboZGZMsD8vCumQUFovsghD64PMGynf5wy6ZHtYUbYqRNsFtEJJ%2F3fFaRQcUb1POdDlUFNmDUbp25sxIZFHoJ3Liwl2GcIV22rvVhWiLDYnBV2T9DXHLCbHAF5B79ZaMKPXHAZYBgeyyHC%2BvAQvzgMCTabDGutE8bM4dSxb66vG0YZY6dpriWcHBqOTZCqgbBo4hfPEj7TLfswJx1R5mBNaG8ZSHHed56nqNclIg0M0dyz%2B6AyloWMLt0CDDQM7UoFqYOMf8bmajYuKlC%2BdKTgqc0Dil2Jx7IuHqTWGXdujSCPilihu7f60ghptMra9thGjs%2BU6Jny9dvblmW8jYQhzWSpiYBQYo8PE0VyF8QQZVBruMXgYsJjOyjYhIZSbVS%2BiNyUyWKcWE0V1mhNMBrn6cwwo2VT6FR%2Fnp8VmJufep%2FFCXSsEdOw3LG7MOPtQU06s%2FW6M4SHY7yNZlgzNmMKrhTc0gRIvxXAwk7uBvQY6pgENINxOqsqQZQqdaW02dAkvLYi1qIWo8r0MRpYPYwq0XmeTRdr%2FXC6OJsaWdiRfLMeVc8kkmKGK6kGqldx6cmZn0XJoBqwaxQ3TvagriXtrCehUUMG3rc177h1NaVhRckLnnGVLQcTg37ufFy5b9CgoQ9uNqYANFV0PQb7COk%2BefBC%2FinO%2Bm2JAtRw9J2Aw5XvOaPIdAYSZlm5zyAAON7GOjVDWUhO4&X-Amz-Signature=2d6148b848b816d09c7cf25f3092522a3cbfaa412a75a236885135f48883566c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOGWBB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAG6%2BlIhKV%2FQfTZ7LvS0RNaW71SyAp%2BJxMnMKAy0k5YAiAwrlhTt1pCqMj4QgBwH14vTWY87U7IPkRo4gT23RMeTyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJjgyrMV4zL%2F8x8xaKtwDUe1otHZzY3YzjqeaIlo4MCIralyuYAVLCDNTBv5oWijig6G3GR9X1mbGVmLjqILFySurgfbNGF%2FZJe89NEBgAUz0BpEgpDtWYmpboyT9QlfOhQzowqmI4JqI5yTkWoIFaOfkadAMZzMxsApp2Grx%2BrEltTboZGZMsD8vCumQUFovsghD64PMGynf5wy6ZHtYUbYqRNsFtEJJ%2F3fFaRQcUb1POdDlUFNmDUbp25sxIZFHoJ3Liwl2GcIV22rvVhWiLDYnBV2T9DXHLCbHAF5B79ZaMKPXHAZYBgeyyHC%2BvAQvzgMCTabDGutE8bM4dSxb66vG0YZY6dpriWcHBqOTZCqgbBo4hfPEj7TLfswJx1R5mBNaG8ZSHHed56nqNclIg0M0dyz%2B6AyloWMLt0CDDQM7UoFqYOMf8bmajYuKlC%2BdKTgqc0Dil2Jx7IuHqTWGXdujSCPilihu7f60ghptMra9thGjs%2BU6Jny9dvblmW8jYQhzWSpiYBQYo8PE0VyF8QQZVBruMXgYsJjOyjYhIZSbVS%2BiNyUyWKcWE0V1mhNMBrn6cwwo2VT6FR%2Fnp8VmJufep%2FFCXSsEdOw3LG7MOPtQU06s%2FW6M4SHY7yNZlgzNmMKrhTc0gRIvxXAwk7uBvQY6pgENINxOqsqQZQqdaW02dAkvLYi1qIWo8r0MRpYPYwq0XmeTRdr%2FXC6OJsaWdiRfLMeVc8kkmKGK6kGqldx6cmZn0XJoBqwaxQ3TvagriXtrCehUUMG3rc177h1NaVhRckLnnGVLQcTg37ufFy5b9CgoQ9uNqYANFV0PQb7COk%2BefBC%2FinO%2Bm2JAtRw9J2Aw5XvOaPIdAYSZlm5zyAAON7GOjVDWUhO4&X-Amz-Signature=537a5543a224117e8d3bfe9b1cd43b7c5b2693635a5a846fe03806be668d699c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOGWBB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAG6%2BlIhKV%2FQfTZ7LvS0RNaW71SyAp%2BJxMnMKAy0k5YAiAwrlhTt1pCqMj4QgBwH14vTWY87U7IPkRo4gT23RMeTyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJjgyrMV4zL%2F8x8xaKtwDUe1otHZzY3YzjqeaIlo4MCIralyuYAVLCDNTBv5oWijig6G3GR9X1mbGVmLjqILFySurgfbNGF%2FZJe89NEBgAUz0BpEgpDtWYmpboyT9QlfOhQzowqmI4JqI5yTkWoIFaOfkadAMZzMxsApp2Grx%2BrEltTboZGZMsD8vCumQUFovsghD64PMGynf5wy6ZHtYUbYqRNsFtEJJ%2F3fFaRQcUb1POdDlUFNmDUbp25sxIZFHoJ3Liwl2GcIV22rvVhWiLDYnBV2T9DXHLCbHAF5B79ZaMKPXHAZYBgeyyHC%2BvAQvzgMCTabDGutE8bM4dSxb66vG0YZY6dpriWcHBqOTZCqgbBo4hfPEj7TLfswJx1R5mBNaG8ZSHHed56nqNclIg0M0dyz%2B6AyloWMLt0CDDQM7UoFqYOMf8bmajYuKlC%2BdKTgqc0Dil2Jx7IuHqTWGXdujSCPilihu7f60ghptMra9thGjs%2BU6Jny9dvblmW8jYQhzWSpiYBQYo8PE0VyF8QQZVBruMXgYsJjOyjYhIZSbVS%2BiNyUyWKcWE0V1mhNMBrn6cwwo2VT6FR%2Fnp8VmJufep%2FFCXSsEdOw3LG7MOPtQU06s%2FW6M4SHY7yNZlgzNmMKrhTc0gRIvxXAwk7uBvQY6pgENINxOqsqQZQqdaW02dAkvLYi1qIWo8r0MRpYPYwq0XmeTRdr%2FXC6OJsaWdiRfLMeVc8kkmKGK6kGqldx6cmZn0XJoBqwaxQ3TvagriXtrCehUUMG3rc177h1NaVhRckLnnGVLQcTg37ufFy5b9CgoQ9uNqYANFV0PQb7COk%2BefBC%2FinO%2Bm2JAtRw9J2Aw5XvOaPIdAYSZlm5zyAAON7GOjVDWUhO4&X-Amz-Signature=a0a79badb0cc2ff3a1315f4665326281b5b6dfd9271a1048bd747451ca2911b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSEOGWBB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAG6%2BlIhKV%2FQfTZ7LvS0RNaW71SyAp%2BJxMnMKAy0k5YAiAwrlhTt1pCqMj4QgBwH14vTWY87U7IPkRo4gT23RMeTyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJjgyrMV4zL%2F8x8xaKtwDUe1otHZzY3YzjqeaIlo4MCIralyuYAVLCDNTBv5oWijig6G3GR9X1mbGVmLjqILFySurgfbNGF%2FZJe89NEBgAUz0BpEgpDtWYmpboyT9QlfOhQzowqmI4JqI5yTkWoIFaOfkadAMZzMxsApp2Grx%2BrEltTboZGZMsD8vCumQUFovsghD64PMGynf5wy6ZHtYUbYqRNsFtEJJ%2F3fFaRQcUb1POdDlUFNmDUbp25sxIZFHoJ3Liwl2GcIV22rvVhWiLDYnBV2T9DXHLCbHAF5B79ZaMKPXHAZYBgeyyHC%2BvAQvzgMCTabDGutE8bM4dSxb66vG0YZY6dpriWcHBqOTZCqgbBo4hfPEj7TLfswJx1R5mBNaG8ZSHHed56nqNclIg0M0dyz%2B6AyloWMLt0CDDQM7UoFqYOMf8bmajYuKlC%2BdKTgqc0Dil2Jx7IuHqTWGXdujSCPilihu7f60ghptMra9thGjs%2BU6Jny9dvblmW8jYQhzWSpiYBQYo8PE0VyF8QQZVBruMXgYsJjOyjYhIZSbVS%2BiNyUyWKcWE0V1mhNMBrn6cwwo2VT6FR%2Fnp8VmJufep%2FFCXSsEdOw3LG7MOPtQU06s%2FW6M4SHY7yNZlgzNmMKrhTc0gRIvxXAwk7uBvQY6pgENINxOqsqQZQqdaW02dAkvLYi1qIWo8r0MRpYPYwq0XmeTRdr%2FXC6OJsaWdiRfLMeVc8kkmKGK6kGqldx6cmZn0XJoBqwaxQ3TvagriXtrCehUUMG3rc177h1NaVhRckLnnGVLQcTg37ufFy5b9CgoQ9uNqYANFV0PQb7COk%2BefBC%2FinO%2Bm2JAtRw9J2Aw5XvOaPIdAYSZlm5zyAAON7GOjVDWUhO4&X-Amz-Signature=7eb545f2bef55d027c33e5679d4df8a4a2c8c90b750fda7a4c767e386b74fe0c&X-Amz-SignedHeaders=host&x-id=GetObject)
