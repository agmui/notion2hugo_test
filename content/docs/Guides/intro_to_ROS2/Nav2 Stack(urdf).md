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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK7R62H%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxizlkX%2FzJgj2zQ3QuEyq8lu5XE3TO%2F5RFYJ%2FQcLdrHgIgOU41G2rirRX27fZ1FZfcSVY%2Bq6g7HOnK4rJnWXFCgegqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAgWkPlLK3u1ZZEircA3a2U7dQpc%2Fi1AFlRzK%2FF5z%2Fr6rFD%2Fa5PF3cFfV7LnpK0YZLFMEaTqxkqzQn4aPZ%2BmWT2Y%2B4kU31n19fuuZnfjH1ZK0UUHL5m02pF6HrwN7Dmqhl0L%2FSr6VCZPFThMWO%2FJoi5TkNB6VbOdJh%2FU0LbrtrIid6KvpauKYQlJv5QnWK6aM%2Bpq%2Fdoo4dgxfhw5SNTMRBN3GA6L9gRZteUUajB4ucQfh%2Baqx7ueOdVTX%2F8D0Ii4%2B2T1Re11p4WhjymlfJInZdowwEtSHCKOqhBU4PQkHr08vyogNfJ8rgLXQi0eUx4OSIA%2FgkHMyWOXGUyVZSh6rLvxb%2BJxSR776m7fEKVDm6FTQESNi6DXLoLU%2FXxalXb6Ti3ymIekZiuoeZrfEc8yG0be04REj%2BGJ2N9%2FMAC%2Bx4yOx6ZRUy3uXvMnANhKSADQax9oqGD1H23ZdjRLMamkLAVQQGX8YYTxb%2BsqRHm6ReUaSdLXy4WVYR0WraNJ0ecuqix%2FfWG0VByNe0XIM9fMGJCSAx6X27S9k3M7RUC%2F65g3fc7274K7NYbKXLqaGOkSkf%2Bz3LXoPRTscVvhZrhPzP3rME3rtXNUAlCVQbHTw9rGytAChG1kNWBPcvtGy%2FJPspc2p8AY5gLahiMJzD6r0GOqUBUsWDzrzMxZTk95C4NSi2KLG1nuBrmV1vL9Eqwy2nbOOfCdHXqKV0NKGzHfCSdq%2B4vwvR%2FPLS14XSueq9mouS%2Ffq9auJrF%2FQP7yKEpvq2UdWgKUbe0LqgBIOpISxRgkdltdAetaK5DWKJncVrDgnBXrEUiOx9CZQB159H24A96uI4M%2BNVyV9Bx1vSmo%2FZcw4S78WJ6ANkUWhcLxFs4m4%2FfoguXIES&X-Amz-Signature=5256f61de8626fc4eca5009712c5c5d108446d89b9e22f4a1727a1d95db8cf13&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK7R62H%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxizlkX%2FzJgj2zQ3QuEyq8lu5XE3TO%2F5RFYJ%2FQcLdrHgIgOU41G2rirRX27fZ1FZfcSVY%2Bq6g7HOnK4rJnWXFCgegqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAgWkPlLK3u1ZZEircA3a2U7dQpc%2Fi1AFlRzK%2FF5z%2Fr6rFD%2Fa5PF3cFfV7LnpK0YZLFMEaTqxkqzQn4aPZ%2BmWT2Y%2B4kU31n19fuuZnfjH1ZK0UUHL5m02pF6HrwN7Dmqhl0L%2FSr6VCZPFThMWO%2FJoi5TkNB6VbOdJh%2FU0LbrtrIid6KvpauKYQlJv5QnWK6aM%2Bpq%2Fdoo4dgxfhw5SNTMRBN3GA6L9gRZteUUajB4ucQfh%2Baqx7ueOdVTX%2F8D0Ii4%2B2T1Re11p4WhjymlfJInZdowwEtSHCKOqhBU4PQkHr08vyogNfJ8rgLXQi0eUx4OSIA%2FgkHMyWOXGUyVZSh6rLvxb%2BJxSR776m7fEKVDm6FTQESNi6DXLoLU%2FXxalXb6Ti3ymIekZiuoeZrfEc8yG0be04REj%2BGJ2N9%2FMAC%2Bx4yOx6ZRUy3uXvMnANhKSADQax9oqGD1H23ZdjRLMamkLAVQQGX8YYTxb%2BsqRHm6ReUaSdLXy4WVYR0WraNJ0ecuqix%2FfWG0VByNe0XIM9fMGJCSAx6X27S9k3M7RUC%2F65g3fc7274K7NYbKXLqaGOkSkf%2Bz3LXoPRTscVvhZrhPzP3rME3rtXNUAlCVQbHTw9rGytAChG1kNWBPcvtGy%2FJPspc2p8AY5gLahiMJzD6r0GOqUBUsWDzrzMxZTk95C4NSi2KLG1nuBrmV1vL9Eqwy2nbOOfCdHXqKV0NKGzHfCSdq%2B4vwvR%2FPLS14XSueq9mouS%2Ffq9auJrF%2FQP7yKEpvq2UdWgKUbe0LqgBIOpISxRgkdltdAetaK5DWKJncVrDgnBXrEUiOx9CZQB159H24A96uI4M%2BNVyV9Bx1vSmo%2FZcw4S78WJ6ANkUWhcLxFs4m4%2FfoguXIES&X-Amz-Signature=c58b6b7b6717c92c884404564b0c26d758249b17b34b3baf8afe8c37060b6672&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK7R62H%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxizlkX%2FzJgj2zQ3QuEyq8lu5XE3TO%2F5RFYJ%2FQcLdrHgIgOU41G2rirRX27fZ1FZfcSVY%2Bq6g7HOnK4rJnWXFCgegqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAgWkPlLK3u1ZZEircA3a2U7dQpc%2Fi1AFlRzK%2FF5z%2Fr6rFD%2Fa5PF3cFfV7LnpK0YZLFMEaTqxkqzQn4aPZ%2BmWT2Y%2B4kU31n19fuuZnfjH1ZK0UUHL5m02pF6HrwN7Dmqhl0L%2FSr6VCZPFThMWO%2FJoi5TkNB6VbOdJh%2FU0LbrtrIid6KvpauKYQlJv5QnWK6aM%2Bpq%2Fdoo4dgxfhw5SNTMRBN3GA6L9gRZteUUajB4ucQfh%2Baqx7ueOdVTX%2F8D0Ii4%2B2T1Re11p4WhjymlfJInZdowwEtSHCKOqhBU4PQkHr08vyogNfJ8rgLXQi0eUx4OSIA%2FgkHMyWOXGUyVZSh6rLvxb%2BJxSR776m7fEKVDm6FTQESNi6DXLoLU%2FXxalXb6Ti3ymIekZiuoeZrfEc8yG0be04REj%2BGJ2N9%2FMAC%2Bx4yOx6ZRUy3uXvMnANhKSADQax9oqGD1H23ZdjRLMamkLAVQQGX8YYTxb%2BsqRHm6ReUaSdLXy4WVYR0WraNJ0ecuqix%2FfWG0VByNe0XIM9fMGJCSAx6X27S9k3M7RUC%2F65g3fc7274K7NYbKXLqaGOkSkf%2Bz3LXoPRTscVvhZrhPzP3rME3rtXNUAlCVQbHTw9rGytAChG1kNWBPcvtGy%2FJPspc2p8AY5gLahiMJzD6r0GOqUBUsWDzrzMxZTk95C4NSi2KLG1nuBrmV1vL9Eqwy2nbOOfCdHXqKV0NKGzHfCSdq%2B4vwvR%2FPLS14XSueq9mouS%2Ffq9auJrF%2FQP7yKEpvq2UdWgKUbe0LqgBIOpISxRgkdltdAetaK5DWKJncVrDgnBXrEUiOx9CZQB159H24A96uI4M%2BNVyV9Bx1vSmo%2FZcw4S78WJ6ANkUWhcLxFs4m4%2FfoguXIES&X-Amz-Signature=7be50fc7469b897ad10ff99a2d49859d2686effcf01f4319d7f7d717c55e870f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK7R62H%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxizlkX%2FzJgj2zQ3QuEyq8lu5XE3TO%2F5RFYJ%2FQcLdrHgIgOU41G2rirRX27fZ1FZfcSVY%2Bq6g7HOnK4rJnWXFCgegqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAgWkPlLK3u1ZZEircA3a2U7dQpc%2Fi1AFlRzK%2FF5z%2Fr6rFD%2Fa5PF3cFfV7LnpK0YZLFMEaTqxkqzQn4aPZ%2BmWT2Y%2B4kU31n19fuuZnfjH1ZK0UUHL5m02pF6HrwN7Dmqhl0L%2FSr6VCZPFThMWO%2FJoi5TkNB6VbOdJh%2FU0LbrtrIid6KvpauKYQlJv5QnWK6aM%2Bpq%2Fdoo4dgxfhw5SNTMRBN3GA6L9gRZteUUajB4ucQfh%2Baqx7ueOdVTX%2F8D0Ii4%2B2T1Re11p4WhjymlfJInZdowwEtSHCKOqhBU4PQkHr08vyogNfJ8rgLXQi0eUx4OSIA%2FgkHMyWOXGUyVZSh6rLvxb%2BJxSR776m7fEKVDm6FTQESNi6DXLoLU%2FXxalXb6Ti3ymIekZiuoeZrfEc8yG0be04REj%2BGJ2N9%2FMAC%2Bx4yOx6ZRUy3uXvMnANhKSADQax9oqGD1H23ZdjRLMamkLAVQQGX8YYTxb%2BsqRHm6ReUaSdLXy4WVYR0WraNJ0ecuqix%2FfWG0VByNe0XIM9fMGJCSAx6X27S9k3M7RUC%2F65g3fc7274K7NYbKXLqaGOkSkf%2Bz3LXoPRTscVvhZrhPzP3rME3rtXNUAlCVQbHTw9rGytAChG1kNWBPcvtGy%2FJPspc2p8AY5gLahiMJzD6r0GOqUBUsWDzrzMxZTk95C4NSi2KLG1nuBrmV1vL9Eqwy2nbOOfCdHXqKV0NKGzHfCSdq%2B4vwvR%2FPLS14XSueq9mouS%2Ffq9auJrF%2FQP7yKEpvq2UdWgKUbe0LqgBIOpISxRgkdltdAetaK5DWKJncVrDgnBXrEUiOx9CZQB159H24A96uI4M%2BNVyV9Bx1vSmo%2FZcw4S78WJ6ANkUWhcLxFs4m4%2FfoguXIES&X-Amz-Signature=086386efeaa54944aa329a737738f3627c9b7c9ae03e94f6eaef18fab9182e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK7R62H%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxizlkX%2FzJgj2zQ3QuEyq8lu5XE3TO%2F5RFYJ%2FQcLdrHgIgOU41G2rirRX27fZ1FZfcSVY%2Bq6g7HOnK4rJnWXFCgegqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAgWkPlLK3u1ZZEircA3a2U7dQpc%2Fi1AFlRzK%2FF5z%2Fr6rFD%2Fa5PF3cFfV7LnpK0YZLFMEaTqxkqzQn4aPZ%2BmWT2Y%2B4kU31n19fuuZnfjH1ZK0UUHL5m02pF6HrwN7Dmqhl0L%2FSr6VCZPFThMWO%2FJoi5TkNB6VbOdJh%2FU0LbrtrIid6KvpauKYQlJv5QnWK6aM%2Bpq%2Fdoo4dgxfhw5SNTMRBN3GA6L9gRZteUUajB4ucQfh%2Baqx7ueOdVTX%2F8D0Ii4%2B2T1Re11p4WhjymlfJInZdowwEtSHCKOqhBU4PQkHr08vyogNfJ8rgLXQi0eUx4OSIA%2FgkHMyWOXGUyVZSh6rLvxb%2BJxSR776m7fEKVDm6FTQESNi6DXLoLU%2FXxalXb6Ti3ymIekZiuoeZrfEc8yG0be04REj%2BGJ2N9%2FMAC%2Bx4yOx6ZRUy3uXvMnANhKSADQax9oqGD1H23ZdjRLMamkLAVQQGX8YYTxb%2BsqRHm6ReUaSdLXy4WVYR0WraNJ0ecuqix%2FfWG0VByNe0XIM9fMGJCSAx6X27S9k3M7RUC%2F65g3fc7274K7NYbKXLqaGOkSkf%2Bz3LXoPRTscVvhZrhPzP3rME3rtXNUAlCVQbHTw9rGytAChG1kNWBPcvtGy%2FJPspc2p8AY5gLahiMJzD6r0GOqUBUsWDzrzMxZTk95C4NSi2KLG1nuBrmV1vL9Eqwy2nbOOfCdHXqKV0NKGzHfCSdq%2B4vwvR%2FPLS14XSueq9mouS%2Ffq9auJrF%2FQP7yKEpvq2UdWgKUbe0LqgBIOpISxRgkdltdAetaK5DWKJncVrDgnBXrEUiOx9CZQB159H24A96uI4M%2BNVyV9Bx1vSmo%2FZcw4S78WJ6ANkUWhcLxFs4m4%2FfoguXIES&X-Amz-Signature=561bb1b70bcaa78ee841da0e8e627c10bef7d0a82c09b4f96c0ef2465d46a9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK7R62H%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T050725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxizlkX%2FzJgj2zQ3QuEyq8lu5XE3TO%2F5RFYJ%2FQcLdrHgIgOU41G2rirRX27fZ1FZfcSVY%2Bq6g7HOnK4rJnWXFCgegqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHAgWkPlLK3u1ZZEircA3a2U7dQpc%2Fi1AFlRzK%2FF5z%2Fr6rFD%2Fa5PF3cFfV7LnpK0YZLFMEaTqxkqzQn4aPZ%2BmWT2Y%2B4kU31n19fuuZnfjH1ZK0UUHL5m02pF6HrwN7Dmqhl0L%2FSr6VCZPFThMWO%2FJoi5TkNB6VbOdJh%2FU0LbrtrIid6KvpauKYQlJv5QnWK6aM%2Bpq%2Fdoo4dgxfhw5SNTMRBN3GA6L9gRZteUUajB4ucQfh%2Baqx7ueOdVTX%2F8D0Ii4%2B2T1Re11p4WhjymlfJInZdowwEtSHCKOqhBU4PQkHr08vyogNfJ8rgLXQi0eUx4OSIA%2FgkHMyWOXGUyVZSh6rLvxb%2BJxSR776m7fEKVDm6FTQESNi6DXLoLU%2FXxalXb6Ti3ymIekZiuoeZrfEc8yG0be04REj%2BGJ2N9%2FMAC%2Bx4yOx6ZRUy3uXvMnANhKSADQax9oqGD1H23ZdjRLMamkLAVQQGX8YYTxb%2BsqRHm6ReUaSdLXy4WVYR0WraNJ0ecuqix%2FfWG0VByNe0XIM9fMGJCSAx6X27S9k3M7RUC%2F65g3fc7274K7NYbKXLqaGOkSkf%2Bz3LXoPRTscVvhZrhPzP3rME3rtXNUAlCVQbHTw9rGytAChG1kNWBPcvtGy%2FJPspc2p8AY5gLahiMJzD6r0GOqUBUsWDzrzMxZTk95C4NSi2KLG1nuBrmV1vL9Eqwy2nbOOfCdHXqKV0NKGzHfCSdq%2B4vwvR%2FPLS14XSueq9mouS%2Ffq9auJrF%2FQP7yKEpvq2UdWgKUbe0LqgBIOpISxRgkdltdAetaK5DWKJncVrDgnBXrEUiOx9CZQB159H24A96uI4M%2BNVyV9Bx1vSmo%2FZcw4S78WJ6ANkUWhcLxFs4m4%2FfoguXIES&X-Amz-Signature=7f8efb985e58c973d61f54640b642f8af032e4f3d7afad0379883d3cf3cf5b73&X-Amz-SignedHeaders=host&x-id=GetObject)
