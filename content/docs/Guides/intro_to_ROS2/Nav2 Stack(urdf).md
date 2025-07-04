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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU64KQWM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBd%2FjEFhQrt9rBqNUoveM7OPFe4sbVT9wBTB4NrROuV%2FAiAIdO8vs6AmzeM8vZb1GsWr1P28yw9hV%2BvCQQjoY8goXCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdH4xd272KZHULm54KtwDV7M%2BWt2rfEm7PBGgVvR7HrNKSg1Tyn3j59ByYD8Dvs2AKluXV6q1Xm6iiP9b46mNtifnhrnVVVIrFEz9xpebW0DQwJ3tHLvoHWJxHCys4uAk5glI8bYVHoEDqcYBy4yCLhYsQgBJZsYgb0DYj2lRFHnNU8gtsrxhOFEpDTRUOuN09VtGLf2PeOaDvtSpZGhGLIXTVZvxF8JyeJlPSmodikwugRwQIPGskKBDpEk2Kp5ZOnnl8y2gfEkzdJfwsHw9Fu5IEMrIJfcdwhKURXpOP9m30468K5k099a9GOCyLoYEmdT8R0pIA4bEgTvoRUrwnRoj%2BvpQ4NHXrgkilr9HiILsXSMY0tOOAih0hg9JzecilJIINC1jhME5slQt%2BbL1AKyg7urM6IhwXKw6A9jaFxV%2FGHKRXCqAVD2wRH3Siw8WZEecaWbeDWq9Qhk8ZMkxjLrvdbbLIkscUY3p520gFCs71WdXe0%2BQ6oyiARHGrUFdioWQdDEs3lhMWpf15Z20o0FDkLa8XEO5419o3BDvA4Ta7j2jScz451%2F0SNZPE3hWm9q9caiAj1wPU8zAZ6cEZsfWyz78elim463NwJ8Te9ZAd8FLbFj4%2Bk9aCYuZyaVkezE7c0sQt4GqCP4w6eegwwY6pgFhSfdz%2B%2Bd74sf4yckIa3QtvblsRKSISTZvbqmxk7G2h04Y8Ykr8BQOmamnFwoR6VmQ3mpy%2FT6JJKWogF%2B9PZUpu9tkJ5Gv9ooUvzM49P9daixK4JeUrKi7T%2BoH556usWzJSQObubSicJnUsm3zZVoTTl6muRulttnBW2TxVmqyepmzNztndFBU7rsoeQyeMn9HUOolvVHcqgQV3Z4LYi1yBLfIm%2FoV&X-Amz-Signature=2ee21daa8d0eb0d5cc30da2c4a5361a1a71fad708ba3d274ce55c9bfd932b848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU64KQWM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBd%2FjEFhQrt9rBqNUoveM7OPFe4sbVT9wBTB4NrROuV%2FAiAIdO8vs6AmzeM8vZb1GsWr1P28yw9hV%2BvCQQjoY8goXCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdH4xd272KZHULm54KtwDV7M%2BWt2rfEm7PBGgVvR7HrNKSg1Tyn3j59ByYD8Dvs2AKluXV6q1Xm6iiP9b46mNtifnhrnVVVIrFEz9xpebW0DQwJ3tHLvoHWJxHCys4uAk5glI8bYVHoEDqcYBy4yCLhYsQgBJZsYgb0DYj2lRFHnNU8gtsrxhOFEpDTRUOuN09VtGLf2PeOaDvtSpZGhGLIXTVZvxF8JyeJlPSmodikwugRwQIPGskKBDpEk2Kp5ZOnnl8y2gfEkzdJfwsHw9Fu5IEMrIJfcdwhKURXpOP9m30468K5k099a9GOCyLoYEmdT8R0pIA4bEgTvoRUrwnRoj%2BvpQ4NHXrgkilr9HiILsXSMY0tOOAih0hg9JzecilJIINC1jhME5slQt%2BbL1AKyg7urM6IhwXKw6A9jaFxV%2FGHKRXCqAVD2wRH3Siw8WZEecaWbeDWq9Qhk8ZMkxjLrvdbbLIkscUY3p520gFCs71WdXe0%2BQ6oyiARHGrUFdioWQdDEs3lhMWpf15Z20o0FDkLa8XEO5419o3BDvA4Ta7j2jScz451%2F0SNZPE3hWm9q9caiAj1wPU8zAZ6cEZsfWyz78elim463NwJ8Te9ZAd8FLbFj4%2Bk9aCYuZyaVkezE7c0sQt4GqCP4w6eegwwY6pgFhSfdz%2B%2Bd74sf4yckIa3QtvblsRKSISTZvbqmxk7G2h04Y8Ykr8BQOmamnFwoR6VmQ3mpy%2FT6JJKWogF%2B9PZUpu9tkJ5Gv9ooUvzM49P9daixK4JeUrKi7T%2BoH556usWzJSQObubSicJnUsm3zZVoTTl6muRulttnBW2TxVmqyepmzNztndFBU7rsoeQyeMn9HUOolvVHcqgQV3Z4LYi1yBLfIm%2FoV&X-Amz-Signature=bcafb795b7368f7b327430029fde9bf15e544bd4d5143c8de85d6f818123c634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU64KQWM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBd%2FjEFhQrt9rBqNUoveM7OPFe4sbVT9wBTB4NrROuV%2FAiAIdO8vs6AmzeM8vZb1GsWr1P28yw9hV%2BvCQQjoY8goXCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdH4xd272KZHULm54KtwDV7M%2BWt2rfEm7PBGgVvR7HrNKSg1Tyn3j59ByYD8Dvs2AKluXV6q1Xm6iiP9b46mNtifnhrnVVVIrFEz9xpebW0DQwJ3tHLvoHWJxHCys4uAk5glI8bYVHoEDqcYBy4yCLhYsQgBJZsYgb0DYj2lRFHnNU8gtsrxhOFEpDTRUOuN09VtGLf2PeOaDvtSpZGhGLIXTVZvxF8JyeJlPSmodikwugRwQIPGskKBDpEk2Kp5ZOnnl8y2gfEkzdJfwsHw9Fu5IEMrIJfcdwhKURXpOP9m30468K5k099a9GOCyLoYEmdT8R0pIA4bEgTvoRUrwnRoj%2BvpQ4NHXrgkilr9HiILsXSMY0tOOAih0hg9JzecilJIINC1jhME5slQt%2BbL1AKyg7urM6IhwXKw6A9jaFxV%2FGHKRXCqAVD2wRH3Siw8WZEecaWbeDWq9Qhk8ZMkxjLrvdbbLIkscUY3p520gFCs71WdXe0%2BQ6oyiARHGrUFdioWQdDEs3lhMWpf15Z20o0FDkLa8XEO5419o3BDvA4Ta7j2jScz451%2F0SNZPE3hWm9q9caiAj1wPU8zAZ6cEZsfWyz78elim463NwJ8Te9ZAd8FLbFj4%2Bk9aCYuZyaVkezE7c0sQt4GqCP4w6eegwwY6pgFhSfdz%2B%2Bd74sf4yckIa3QtvblsRKSISTZvbqmxk7G2h04Y8Ykr8BQOmamnFwoR6VmQ3mpy%2FT6JJKWogF%2B9PZUpu9tkJ5Gv9ooUvzM49P9daixK4JeUrKi7T%2BoH556usWzJSQObubSicJnUsm3zZVoTTl6muRulttnBW2TxVmqyepmzNztndFBU7rsoeQyeMn9HUOolvVHcqgQV3Z4LYi1yBLfIm%2FoV&X-Amz-Signature=f0ec4049296bde82e02a03ccad362039e005931581d415f9b3b3839781382476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU64KQWM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBd%2FjEFhQrt9rBqNUoveM7OPFe4sbVT9wBTB4NrROuV%2FAiAIdO8vs6AmzeM8vZb1GsWr1P28yw9hV%2BvCQQjoY8goXCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdH4xd272KZHULm54KtwDV7M%2BWt2rfEm7PBGgVvR7HrNKSg1Tyn3j59ByYD8Dvs2AKluXV6q1Xm6iiP9b46mNtifnhrnVVVIrFEz9xpebW0DQwJ3tHLvoHWJxHCys4uAk5glI8bYVHoEDqcYBy4yCLhYsQgBJZsYgb0DYj2lRFHnNU8gtsrxhOFEpDTRUOuN09VtGLf2PeOaDvtSpZGhGLIXTVZvxF8JyeJlPSmodikwugRwQIPGskKBDpEk2Kp5ZOnnl8y2gfEkzdJfwsHw9Fu5IEMrIJfcdwhKURXpOP9m30468K5k099a9GOCyLoYEmdT8R0pIA4bEgTvoRUrwnRoj%2BvpQ4NHXrgkilr9HiILsXSMY0tOOAih0hg9JzecilJIINC1jhME5slQt%2BbL1AKyg7urM6IhwXKw6A9jaFxV%2FGHKRXCqAVD2wRH3Siw8WZEecaWbeDWq9Qhk8ZMkxjLrvdbbLIkscUY3p520gFCs71WdXe0%2BQ6oyiARHGrUFdioWQdDEs3lhMWpf15Z20o0FDkLa8XEO5419o3BDvA4Ta7j2jScz451%2F0SNZPE3hWm9q9caiAj1wPU8zAZ6cEZsfWyz78elim463NwJ8Te9ZAd8FLbFj4%2Bk9aCYuZyaVkezE7c0sQt4GqCP4w6eegwwY6pgFhSfdz%2B%2Bd74sf4yckIa3QtvblsRKSISTZvbqmxk7G2h04Y8Ykr8BQOmamnFwoR6VmQ3mpy%2FT6JJKWogF%2B9PZUpu9tkJ5Gv9ooUvzM49P9daixK4JeUrKi7T%2BoH556usWzJSQObubSicJnUsm3zZVoTTl6muRulttnBW2TxVmqyepmzNztndFBU7rsoeQyeMn9HUOolvVHcqgQV3Z4LYi1yBLfIm%2FoV&X-Amz-Signature=4029cd7fedfbdad44c32f5e9e550355cfe1c17097b7610c0dcb92da10e801aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU64KQWM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBd%2FjEFhQrt9rBqNUoveM7OPFe4sbVT9wBTB4NrROuV%2FAiAIdO8vs6AmzeM8vZb1GsWr1P28yw9hV%2BvCQQjoY8goXCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdH4xd272KZHULm54KtwDV7M%2BWt2rfEm7PBGgVvR7HrNKSg1Tyn3j59ByYD8Dvs2AKluXV6q1Xm6iiP9b46mNtifnhrnVVVIrFEz9xpebW0DQwJ3tHLvoHWJxHCys4uAk5glI8bYVHoEDqcYBy4yCLhYsQgBJZsYgb0DYj2lRFHnNU8gtsrxhOFEpDTRUOuN09VtGLf2PeOaDvtSpZGhGLIXTVZvxF8JyeJlPSmodikwugRwQIPGskKBDpEk2Kp5ZOnnl8y2gfEkzdJfwsHw9Fu5IEMrIJfcdwhKURXpOP9m30468K5k099a9GOCyLoYEmdT8R0pIA4bEgTvoRUrwnRoj%2BvpQ4NHXrgkilr9HiILsXSMY0tOOAih0hg9JzecilJIINC1jhME5slQt%2BbL1AKyg7urM6IhwXKw6A9jaFxV%2FGHKRXCqAVD2wRH3Siw8WZEecaWbeDWq9Qhk8ZMkxjLrvdbbLIkscUY3p520gFCs71WdXe0%2BQ6oyiARHGrUFdioWQdDEs3lhMWpf15Z20o0FDkLa8XEO5419o3BDvA4Ta7j2jScz451%2F0SNZPE3hWm9q9caiAj1wPU8zAZ6cEZsfWyz78elim463NwJ8Te9ZAd8FLbFj4%2Bk9aCYuZyaVkezE7c0sQt4GqCP4w6eegwwY6pgFhSfdz%2B%2Bd74sf4yckIa3QtvblsRKSISTZvbqmxk7G2h04Y8Ykr8BQOmamnFwoR6VmQ3mpy%2FT6JJKWogF%2B9PZUpu9tkJ5Gv9ooUvzM49P9daixK4JeUrKi7T%2BoH556usWzJSQObubSicJnUsm3zZVoTTl6muRulttnBW2TxVmqyepmzNztndFBU7rsoeQyeMn9HUOolvVHcqgQV3Z4LYi1yBLfIm%2FoV&X-Amz-Signature=35bb9c55f11f648a269e91e8680ee87033a3d9d8d0cb06a1cc8e7ad786bf5e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU64KQWM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBd%2FjEFhQrt9rBqNUoveM7OPFe4sbVT9wBTB4NrROuV%2FAiAIdO8vs6AmzeM8vZb1GsWr1P28yw9hV%2BvCQQjoY8goXCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdH4xd272KZHULm54KtwDV7M%2BWt2rfEm7PBGgVvR7HrNKSg1Tyn3j59ByYD8Dvs2AKluXV6q1Xm6iiP9b46mNtifnhrnVVVIrFEz9xpebW0DQwJ3tHLvoHWJxHCys4uAk5glI8bYVHoEDqcYBy4yCLhYsQgBJZsYgb0DYj2lRFHnNU8gtsrxhOFEpDTRUOuN09VtGLf2PeOaDvtSpZGhGLIXTVZvxF8JyeJlPSmodikwugRwQIPGskKBDpEk2Kp5ZOnnl8y2gfEkzdJfwsHw9Fu5IEMrIJfcdwhKURXpOP9m30468K5k099a9GOCyLoYEmdT8R0pIA4bEgTvoRUrwnRoj%2BvpQ4NHXrgkilr9HiILsXSMY0tOOAih0hg9JzecilJIINC1jhME5slQt%2BbL1AKyg7urM6IhwXKw6A9jaFxV%2FGHKRXCqAVD2wRH3Siw8WZEecaWbeDWq9Qhk8ZMkxjLrvdbbLIkscUY3p520gFCs71WdXe0%2BQ6oyiARHGrUFdioWQdDEs3lhMWpf15Z20o0FDkLa8XEO5419o3BDvA4Ta7j2jScz451%2F0SNZPE3hWm9q9caiAj1wPU8zAZ6cEZsfWyz78elim463NwJ8Te9ZAd8FLbFj4%2Bk9aCYuZyaVkezE7c0sQt4GqCP4w6eegwwY6pgFhSfdz%2B%2Bd74sf4yckIa3QtvblsRKSISTZvbqmxk7G2h04Y8Ykr8BQOmamnFwoR6VmQ3mpy%2FT6JJKWogF%2B9PZUpu9tkJ5Gv9ooUvzM49P9daixK4JeUrKi7T%2BoH556usWzJSQObubSicJnUsm3zZVoTTl6muRulttnBW2TxVmqyepmzNztndFBU7rsoeQyeMn9HUOolvVHcqgQV3Z4LYi1yBLfIm%2FoV&X-Amz-Signature=9a3d709053354256eb9cde1d4a3a3a124627bbbe4b35cd17efdc8ab58a300fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
