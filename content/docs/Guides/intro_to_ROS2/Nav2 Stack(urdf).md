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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNWKOKE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpXLNxMAvY31B%2FNRmi7w2itCscmQr7axToX45496qI6AIhAPSXRzPgzeE3Hwn%2FFLbAMsY2s9IhMgvQuLbx8aswAztoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuObM%2BvrrLbtM5pMMq3AOeG6TFL6caBY50i9KHu8ghCShtyIBykO%2BHCQOuq8EwbKA3daJ14nT3Op3%2BrWKrE19Nv4swZCRxqZ%2BTVkszSD680qSRkQORUEl5zLQMAHbs42JnkTTQBP6Gdi7ECh7m5QAeYYVXKjrb8Yz%2FV8zeoV%2BapQudcpSI%2FC6ikn3VXuwWjn9wEFQmw9UevvbsV3B4uhklDLTjIhCq9tsx2QKzUxr2jxlqOyUuJfSNqhNqCGhW15fSqk5P5y65VAdm%2B8FcWO0LyXYONr0Gtk7%2BBlUfEDHcb45gZO9c%2Bu%2FJF2G%2BsQKEA1x4tVCqwG0eNGCA9MCn4jlihXYOc7Qznjo%2FBP6vTcFHpXpf5vrNqOEpGbsESXmPEumnIKENiUSN%2Fn5wOgg9TayVO6SIMsMXeAms311NL%2Fhc5vbDP4UPQlbzLxN7bA2zttjVEn%2FO4qDWAxUsdaUgnB14Uey7fSk8%2FMCtJ272k2NDIMmRBsIuRKVyyL8XqkewXN8gJ%2Fh44xo51Qvz6r10HliMkrZ7EnsrnVL1CwPnHTixKMrtDrf2ouRpTrj0sFeSK69CbBvGEsaiwhrW59SWdjAAI4fMVNQNF80TCRg1YDwu%2Bl8c%2BW1HBiaHGtP6ZdVb6gJGTYfdXUwR5PNBLDCD%2FtW9BjqkASN%2FQ8I4T7cycM4aPURbDGo4Om7hBNWtZrD0b%2B6qVuDbSgKTPnN0A6FSUEwxN16r14tEgRlUKtjfBOWgQAitYebhuU7ey%2FkIUrCsrBBuaYDXKrIMCm2P36q5WmWJ5HSZ71nV20oaLztGNzxK5XvAXnIip%2BWNnhxWDi2KK3z5ZIhIzeVqjuGnk7SEaRbTkssLZKrxs9IcTtIVNWIRyrS4E3P0vM8v&X-Amz-Signature=0a3b20ae695e7395823fdfd17a6742225d02c47b3fa5d6cdcc9b4d5977fedd55&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNWKOKE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpXLNxMAvY31B%2FNRmi7w2itCscmQr7axToX45496qI6AIhAPSXRzPgzeE3Hwn%2FFLbAMsY2s9IhMgvQuLbx8aswAztoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuObM%2BvrrLbtM5pMMq3AOeG6TFL6caBY50i9KHu8ghCShtyIBykO%2BHCQOuq8EwbKA3daJ14nT3Op3%2BrWKrE19Nv4swZCRxqZ%2BTVkszSD680qSRkQORUEl5zLQMAHbs42JnkTTQBP6Gdi7ECh7m5QAeYYVXKjrb8Yz%2FV8zeoV%2BapQudcpSI%2FC6ikn3VXuwWjn9wEFQmw9UevvbsV3B4uhklDLTjIhCq9tsx2QKzUxr2jxlqOyUuJfSNqhNqCGhW15fSqk5P5y65VAdm%2B8FcWO0LyXYONr0Gtk7%2BBlUfEDHcb45gZO9c%2Bu%2FJF2G%2BsQKEA1x4tVCqwG0eNGCA9MCn4jlihXYOc7Qznjo%2FBP6vTcFHpXpf5vrNqOEpGbsESXmPEumnIKENiUSN%2Fn5wOgg9TayVO6SIMsMXeAms311NL%2Fhc5vbDP4UPQlbzLxN7bA2zttjVEn%2FO4qDWAxUsdaUgnB14Uey7fSk8%2FMCtJ272k2NDIMmRBsIuRKVyyL8XqkewXN8gJ%2Fh44xo51Qvz6r10HliMkrZ7EnsrnVL1CwPnHTixKMrtDrf2ouRpTrj0sFeSK69CbBvGEsaiwhrW59SWdjAAI4fMVNQNF80TCRg1YDwu%2Bl8c%2BW1HBiaHGtP6ZdVb6gJGTYfdXUwR5PNBLDCD%2FtW9BjqkASN%2FQ8I4T7cycM4aPURbDGo4Om7hBNWtZrD0b%2B6qVuDbSgKTPnN0A6FSUEwxN16r14tEgRlUKtjfBOWgQAitYebhuU7ey%2FkIUrCsrBBuaYDXKrIMCm2P36q5WmWJ5HSZ71nV20oaLztGNzxK5XvAXnIip%2BWNnhxWDi2KK3z5ZIhIzeVqjuGnk7SEaRbTkssLZKrxs9IcTtIVNWIRyrS4E3P0vM8v&X-Amz-Signature=a232c3acf6daba2546558f5f5a9d419e38826db436d2496af8e4ff44ec73a711&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNWKOKE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpXLNxMAvY31B%2FNRmi7w2itCscmQr7axToX45496qI6AIhAPSXRzPgzeE3Hwn%2FFLbAMsY2s9IhMgvQuLbx8aswAztoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuObM%2BvrrLbtM5pMMq3AOeG6TFL6caBY50i9KHu8ghCShtyIBykO%2BHCQOuq8EwbKA3daJ14nT3Op3%2BrWKrE19Nv4swZCRxqZ%2BTVkszSD680qSRkQORUEl5zLQMAHbs42JnkTTQBP6Gdi7ECh7m5QAeYYVXKjrb8Yz%2FV8zeoV%2BapQudcpSI%2FC6ikn3VXuwWjn9wEFQmw9UevvbsV3B4uhklDLTjIhCq9tsx2QKzUxr2jxlqOyUuJfSNqhNqCGhW15fSqk5P5y65VAdm%2B8FcWO0LyXYONr0Gtk7%2BBlUfEDHcb45gZO9c%2Bu%2FJF2G%2BsQKEA1x4tVCqwG0eNGCA9MCn4jlihXYOc7Qznjo%2FBP6vTcFHpXpf5vrNqOEpGbsESXmPEumnIKENiUSN%2Fn5wOgg9TayVO6SIMsMXeAms311NL%2Fhc5vbDP4UPQlbzLxN7bA2zttjVEn%2FO4qDWAxUsdaUgnB14Uey7fSk8%2FMCtJ272k2NDIMmRBsIuRKVyyL8XqkewXN8gJ%2Fh44xo51Qvz6r10HliMkrZ7EnsrnVL1CwPnHTixKMrtDrf2ouRpTrj0sFeSK69CbBvGEsaiwhrW59SWdjAAI4fMVNQNF80TCRg1YDwu%2Bl8c%2BW1HBiaHGtP6ZdVb6gJGTYfdXUwR5PNBLDCD%2FtW9BjqkASN%2FQ8I4T7cycM4aPURbDGo4Om7hBNWtZrD0b%2B6qVuDbSgKTPnN0A6FSUEwxN16r14tEgRlUKtjfBOWgQAitYebhuU7ey%2FkIUrCsrBBuaYDXKrIMCm2P36q5WmWJ5HSZ71nV20oaLztGNzxK5XvAXnIip%2BWNnhxWDi2KK3z5ZIhIzeVqjuGnk7SEaRbTkssLZKrxs9IcTtIVNWIRyrS4E3P0vM8v&X-Amz-Signature=28efea95c481f0adb754eaf540f533c39a6b960cd96c430ec57f6a99d711b456&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNWKOKE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpXLNxMAvY31B%2FNRmi7w2itCscmQr7axToX45496qI6AIhAPSXRzPgzeE3Hwn%2FFLbAMsY2s9IhMgvQuLbx8aswAztoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuObM%2BvrrLbtM5pMMq3AOeG6TFL6caBY50i9KHu8ghCShtyIBykO%2BHCQOuq8EwbKA3daJ14nT3Op3%2BrWKrE19Nv4swZCRxqZ%2BTVkszSD680qSRkQORUEl5zLQMAHbs42JnkTTQBP6Gdi7ECh7m5QAeYYVXKjrb8Yz%2FV8zeoV%2BapQudcpSI%2FC6ikn3VXuwWjn9wEFQmw9UevvbsV3B4uhklDLTjIhCq9tsx2QKzUxr2jxlqOyUuJfSNqhNqCGhW15fSqk5P5y65VAdm%2B8FcWO0LyXYONr0Gtk7%2BBlUfEDHcb45gZO9c%2Bu%2FJF2G%2BsQKEA1x4tVCqwG0eNGCA9MCn4jlihXYOc7Qznjo%2FBP6vTcFHpXpf5vrNqOEpGbsESXmPEumnIKENiUSN%2Fn5wOgg9TayVO6SIMsMXeAms311NL%2Fhc5vbDP4UPQlbzLxN7bA2zttjVEn%2FO4qDWAxUsdaUgnB14Uey7fSk8%2FMCtJ272k2NDIMmRBsIuRKVyyL8XqkewXN8gJ%2Fh44xo51Qvz6r10HliMkrZ7EnsrnVL1CwPnHTixKMrtDrf2ouRpTrj0sFeSK69CbBvGEsaiwhrW59SWdjAAI4fMVNQNF80TCRg1YDwu%2Bl8c%2BW1HBiaHGtP6ZdVb6gJGTYfdXUwR5PNBLDCD%2FtW9BjqkASN%2FQ8I4T7cycM4aPURbDGo4Om7hBNWtZrD0b%2B6qVuDbSgKTPnN0A6FSUEwxN16r14tEgRlUKtjfBOWgQAitYebhuU7ey%2FkIUrCsrBBuaYDXKrIMCm2P36q5WmWJ5HSZ71nV20oaLztGNzxK5XvAXnIip%2BWNnhxWDi2KK3z5ZIhIzeVqjuGnk7SEaRbTkssLZKrxs9IcTtIVNWIRyrS4E3P0vM8v&X-Amz-Signature=bcac6d598748b616152349365ed0198c0bf4dc31fb1e4fe0c2d9db7c24f0cb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNWKOKE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpXLNxMAvY31B%2FNRmi7w2itCscmQr7axToX45496qI6AIhAPSXRzPgzeE3Hwn%2FFLbAMsY2s9IhMgvQuLbx8aswAztoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuObM%2BvrrLbtM5pMMq3AOeG6TFL6caBY50i9KHu8ghCShtyIBykO%2BHCQOuq8EwbKA3daJ14nT3Op3%2BrWKrE19Nv4swZCRxqZ%2BTVkszSD680qSRkQORUEl5zLQMAHbs42JnkTTQBP6Gdi7ECh7m5QAeYYVXKjrb8Yz%2FV8zeoV%2BapQudcpSI%2FC6ikn3VXuwWjn9wEFQmw9UevvbsV3B4uhklDLTjIhCq9tsx2QKzUxr2jxlqOyUuJfSNqhNqCGhW15fSqk5P5y65VAdm%2B8FcWO0LyXYONr0Gtk7%2BBlUfEDHcb45gZO9c%2Bu%2FJF2G%2BsQKEA1x4tVCqwG0eNGCA9MCn4jlihXYOc7Qznjo%2FBP6vTcFHpXpf5vrNqOEpGbsESXmPEumnIKENiUSN%2Fn5wOgg9TayVO6SIMsMXeAms311NL%2Fhc5vbDP4UPQlbzLxN7bA2zttjVEn%2FO4qDWAxUsdaUgnB14Uey7fSk8%2FMCtJ272k2NDIMmRBsIuRKVyyL8XqkewXN8gJ%2Fh44xo51Qvz6r10HliMkrZ7EnsrnVL1CwPnHTixKMrtDrf2ouRpTrj0sFeSK69CbBvGEsaiwhrW59SWdjAAI4fMVNQNF80TCRg1YDwu%2Bl8c%2BW1HBiaHGtP6ZdVb6gJGTYfdXUwR5PNBLDCD%2FtW9BjqkASN%2FQ8I4T7cycM4aPURbDGo4Om7hBNWtZrD0b%2B6qVuDbSgKTPnN0A6FSUEwxN16r14tEgRlUKtjfBOWgQAitYebhuU7ey%2FkIUrCsrBBuaYDXKrIMCm2P36q5WmWJ5HSZ71nV20oaLztGNzxK5XvAXnIip%2BWNnhxWDi2KK3z5ZIhIzeVqjuGnk7SEaRbTkssLZKrxs9IcTtIVNWIRyrS4E3P0vM8v&X-Amz-Signature=bd1b05958a3ef40822ec32523a520bb6abe0bbe37051a0f57400345ce57d57a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNWKOKE%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDpXLNxMAvY31B%2FNRmi7w2itCscmQr7axToX45496qI6AIhAPSXRzPgzeE3Hwn%2FFLbAMsY2s9IhMgvQuLbx8aswAztoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuObM%2BvrrLbtM5pMMq3AOeG6TFL6caBY50i9KHu8ghCShtyIBykO%2BHCQOuq8EwbKA3daJ14nT3Op3%2BrWKrE19Nv4swZCRxqZ%2BTVkszSD680qSRkQORUEl5zLQMAHbs42JnkTTQBP6Gdi7ECh7m5QAeYYVXKjrb8Yz%2FV8zeoV%2BapQudcpSI%2FC6ikn3VXuwWjn9wEFQmw9UevvbsV3B4uhklDLTjIhCq9tsx2QKzUxr2jxlqOyUuJfSNqhNqCGhW15fSqk5P5y65VAdm%2B8FcWO0LyXYONr0Gtk7%2BBlUfEDHcb45gZO9c%2Bu%2FJF2G%2BsQKEA1x4tVCqwG0eNGCA9MCn4jlihXYOc7Qznjo%2FBP6vTcFHpXpf5vrNqOEpGbsESXmPEumnIKENiUSN%2Fn5wOgg9TayVO6SIMsMXeAms311NL%2Fhc5vbDP4UPQlbzLxN7bA2zttjVEn%2FO4qDWAxUsdaUgnB14Uey7fSk8%2FMCtJ272k2NDIMmRBsIuRKVyyL8XqkewXN8gJ%2Fh44xo51Qvz6r10HliMkrZ7EnsrnVL1CwPnHTixKMrtDrf2ouRpTrj0sFeSK69CbBvGEsaiwhrW59SWdjAAI4fMVNQNF80TCRg1YDwu%2Bl8c%2BW1HBiaHGtP6ZdVb6gJGTYfdXUwR5PNBLDCD%2FtW9BjqkASN%2FQ8I4T7cycM4aPURbDGo4Om7hBNWtZrD0b%2B6qVuDbSgKTPnN0A6FSUEwxN16r14tEgRlUKtjfBOWgQAitYebhuU7ey%2FkIUrCsrBBuaYDXKrIMCm2P36q5WmWJ5HSZ71nV20oaLztGNzxK5XvAXnIip%2BWNnhxWDi2KK3z5ZIhIzeVqjuGnk7SEaRbTkssLZKrxs9IcTtIVNWIRyrS4E3P0vM8v&X-Amz-Signature=eff7f20ceee3fa7ee5967e418a262f8cd8376fe78b3a92cc25feed74cb10f061&X-Amz-SignedHeaders=host&x-id=GetObject)
