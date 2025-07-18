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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUQSGXN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGkSyC33EPTgFgptC7RfjXZMMz4eZfg6iF%2FjK2RWmceVAiEAhsif629CVV01l6Xl%2B0XjuTbgKkM%2FL7kx14nR1QpzUT0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn28X2g9gXJQ0Nr3ircA6lwvvvkEMcyAY%2BttP%2BytC05KeR7X8gINQbRaXxI9tJ2mtaf1jWeJ%2FU5e%2B%2BJ11QFupN%2FetRElaTMPoapH2hxAyesFSibfxx9WQNvcTNrGSFWXyC%2BojhIti%2FnEeSZQr5QKDYSNjInoSjvla8xF98%2F%2FBvRlzfI10BXyzD8f5xpWq5a62B8JSu8UP%2BiHJwP236unxn%2FIp2BkoviZ67e8Olt6AL0Bk0mT9qB84nbW6mUAMlkmxYdJ7%2BmAUwK5TwD9RPZiDDYc0uo4e0n2uNnyUeF5cp2RgD947swJ2oN0Dwf2D7XhrklgX%2BEWZHjBMc6hMpbbpxi9OtCDP8HyJuuhyCBXKjV1YtvJFDonKNXerhfW%2F8sRimEqOyfkmlFhvYyQ1wKg11INA6tFXr6IC2hysTy%2BGrj6c0%2FN7dlFdRYewB7QK2sDPbM7DD%2BEt6u0aH%2BkMbwIrkEhKQPmEBam9RYoFDKUFrDAj%2B5c85NFjVIu%2Fqi4ibxRdlMkC89mDUFiLvOTPxCKCtFPy2aL7AgTSyVFBznKmzkLo9ElNomnFSYK1ITCTZE8t4%2F03bqT%2FeP6U89%2BXDChviMG%2B%2FHmb6t5BE45pP4DNDnwPhBZDAsJDMoV07D2ku5FATcULWVtOOgcoB%2FMMbW58MGOqUBPKbuia863rqVrNvZNHZjXxP4laSreKcGoZXA4FEzUclJpKSwTtzYqf%2FTvDxyf72wt5A%2Brcol2yEA8XbK%2BBirEb9nj8gMAJknqHKg8mLDrsa8cLPs349iFk4KsFyE9tW9YuE9CTJlkRDmoEL7A%2Bm%2FngzZ%2FwqDMulf7W8u1fko%2Fyc74eFq0XSSdQcHoASXgWHZaEG4O1tNTA87Krx0NUtstmWWVi%2FS&X-Amz-Signature=384e6c4ddbc8dd7630469fcadae00a71f9d908039dcc5960060a8aac1efacb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUQSGXN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGkSyC33EPTgFgptC7RfjXZMMz4eZfg6iF%2FjK2RWmceVAiEAhsif629CVV01l6Xl%2B0XjuTbgKkM%2FL7kx14nR1QpzUT0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn28X2g9gXJQ0Nr3ircA6lwvvvkEMcyAY%2BttP%2BytC05KeR7X8gINQbRaXxI9tJ2mtaf1jWeJ%2FU5e%2B%2BJ11QFupN%2FetRElaTMPoapH2hxAyesFSibfxx9WQNvcTNrGSFWXyC%2BojhIti%2FnEeSZQr5QKDYSNjInoSjvla8xF98%2F%2FBvRlzfI10BXyzD8f5xpWq5a62B8JSu8UP%2BiHJwP236unxn%2FIp2BkoviZ67e8Olt6AL0Bk0mT9qB84nbW6mUAMlkmxYdJ7%2BmAUwK5TwD9RPZiDDYc0uo4e0n2uNnyUeF5cp2RgD947swJ2oN0Dwf2D7XhrklgX%2BEWZHjBMc6hMpbbpxi9OtCDP8HyJuuhyCBXKjV1YtvJFDonKNXerhfW%2F8sRimEqOyfkmlFhvYyQ1wKg11INA6tFXr6IC2hysTy%2BGrj6c0%2FN7dlFdRYewB7QK2sDPbM7DD%2BEt6u0aH%2BkMbwIrkEhKQPmEBam9RYoFDKUFrDAj%2B5c85NFjVIu%2Fqi4ibxRdlMkC89mDUFiLvOTPxCKCtFPy2aL7AgTSyVFBznKmzkLo9ElNomnFSYK1ITCTZE8t4%2F03bqT%2FeP6U89%2BXDChviMG%2B%2FHmb6t5BE45pP4DNDnwPhBZDAsJDMoV07D2ku5FATcULWVtOOgcoB%2FMMbW58MGOqUBPKbuia863rqVrNvZNHZjXxP4laSreKcGoZXA4FEzUclJpKSwTtzYqf%2FTvDxyf72wt5A%2Brcol2yEA8XbK%2BBirEb9nj8gMAJknqHKg8mLDrsa8cLPs349iFk4KsFyE9tW9YuE9CTJlkRDmoEL7A%2Bm%2FngzZ%2FwqDMulf7W8u1fko%2Fyc74eFq0XSSdQcHoASXgWHZaEG4O1tNTA87Krx0NUtstmWWVi%2FS&X-Amz-Signature=cfb542bd6d923e91a4c7620d6101e10d0f9460b9918d13a6ac78ad0173328682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUQSGXN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGkSyC33EPTgFgptC7RfjXZMMz4eZfg6iF%2FjK2RWmceVAiEAhsif629CVV01l6Xl%2B0XjuTbgKkM%2FL7kx14nR1QpzUT0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn28X2g9gXJQ0Nr3ircA6lwvvvkEMcyAY%2BttP%2BytC05KeR7X8gINQbRaXxI9tJ2mtaf1jWeJ%2FU5e%2B%2BJ11QFupN%2FetRElaTMPoapH2hxAyesFSibfxx9WQNvcTNrGSFWXyC%2BojhIti%2FnEeSZQr5QKDYSNjInoSjvla8xF98%2F%2FBvRlzfI10BXyzD8f5xpWq5a62B8JSu8UP%2BiHJwP236unxn%2FIp2BkoviZ67e8Olt6AL0Bk0mT9qB84nbW6mUAMlkmxYdJ7%2BmAUwK5TwD9RPZiDDYc0uo4e0n2uNnyUeF5cp2RgD947swJ2oN0Dwf2D7XhrklgX%2BEWZHjBMc6hMpbbpxi9OtCDP8HyJuuhyCBXKjV1YtvJFDonKNXerhfW%2F8sRimEqOyfkmlFhvYyQ1wKg11INA6tFXr6IC2hysTy%2BGrj6c0%2FN7dlFdRYewB7QK2sDPbM7DD%2BEt6u0aH%2BkMbwIrkEhKQPmEBam9RYoFDKUFrDAj%2B5c85NFjVIu%2Fqi4ibxRdlMkC89mDUFiLvOTPxCKCtFPy2aL7AgTSyVFBznKmzkLo9ElNomnFSYK1ITCTZE8t4%2F03bqT%2FeP6U89%2BXDChviMG%2B%2FHmb6t5BE45pP4DNDnwPhBZDAsJDMoV07D2ku5FATcULWVtOOgcoB%2FMMbW58MGOqUBPKbuia863rqVrNvZNHZjXxP4laSreKcGoZXA4FEzUclJpKSwTtzYqf%2FTvDxyf72wt5A%2Brcol2yEA8XbK%2BBirEb9nj8gMAJknqHKg8mLDrsa8cLPs349iFk4KsFyE9tW9YuE9CTJlkRDmoEL7A%2Bm%2FngzZ%2FwqDMulf7W8u1fko%2Fyc74eFq0XSSdQcHoASXgWHZaEG4O1tNTA87Krx0NUtstmWWVi%2FS&X-Amz-Signature=6af3728528462892fd08bec70d4fb136b66217c4ea225e2d6299569368a37f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUQSGXN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGkSyC33EPTgFgptC7RfjXZMMz4eZfg6iF%2FjK2RWmceVAiEAhsif629CVV01l6Xl%2B0XjuTbgKkM%2FL7kx14nR1QpzUT0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn28X2g9gXJQ0Nr3ircA6lwvvvkEMcyAY%2BttP%2BytC05KeR7X8gINQbRaXxI9tJ2mtaf1jWeJ%2FU5e%2B%2BJ11QFupN%2FetRElaTMPoapH2hxAyesFSibfxx9WQNvcTNrGSFWXyC%2BojhIti%2FnEeSZQr5QKDYSNjInoSjvla8xF98%2F%2FBvRlzfI10BXyzD8f5xpWq5a62B8JSu8UP%2BiHJwP236unxn%2FIp2BkoviZ67e8Olt6AL0Bk0mT9qB84nbW6mUAMlkmxYdJ7%2BmAUwK5TwD9RPZiDDYc0uo4e0n2uNnyUeF5cp2RgD947swJ2oN0Dwf2D7XhrklgX%2BEWZHjBMc6hMpbbpxi9OtCDP8HyJuuhyCBXKjV1YtvJFDonKNXerhfW%2F8sRimEqOyfkmlFhvYyQ1wKg11INA6tFXr6IC2hysTy%2BGrj6c0%2FN7dlFdRYewB7QK2sDPbM7DD%2BEt6u0aH%2BkMbwIrkEhKQPmEBam9RYoFDKUFrDAj%2B5c85NFjVIu%2Fqi4ibxRdlMkC89mDUFiLvOTPxCKCtFPy2aL7AgTSyVFBznKmzkLo9ElNomnFSYK1ITCTZE8t4%2F03bqT%2FeP6U89%2BXDChviMG%2B%2FHmb6t5BE45pP4DNDnwPhBZDAsJDMoV07D2ku5FATcULWVtOOgcoB%2FMMbW58MGOqUBPKbuia863rqVrNvZNHZjXxP4laSreKcGoZXA4FEzUclJpKSwTtzYqf%2FTvDxyf72wt5A%2Brcol2yEA8XbK%2BBirEb9nj8gMAJknqHKg8mLDrsa8cLPs349iFk4KsFyE9tW9YuE9CTJlkRDmoEL7A%2Bm%2FngzZ%2FwqDMulf7W8u1fko%2Fyc74eFq0XSSdQcHoASXgWHZaEG4O1tNTA87Krx0NUtstmWWVi%2FS&X-Amz-Signature=225ab727d8a152cc2343c738406b6b874f25087fbef038703113c25887a0f097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUQSGXN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGkSyC33EPTgFgptC7RfjXZMMz4eZfg6iF%2FjK2RWmceVAiEAhsif629CVV01l6Xl%2B0XjuTbgKkM%2FL7kx14nR1QpzUT0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn28X2g9gXJQ0Nr3ircA6lwvvvkEMcyAY%2BttP%2BytC05KeR7X8gINQbRaXxI9tJ2mtaf1jWeJ%2FU5e%2B%2BJ11QFupN%2FetRElaTMPoapH2hxAyesFSibfxx9WQNvcTNrGSFWXyC%2BojhIti%2FnEeSZQr5QKDYSNjInoSjvla8xF98%2F%2FBvRlzfI10BXyzD8f5xpWq5a62B8JSu8UP%2BiHJwP236unxn%2FIp2BkoviZ67e8Olt6AL0Bk0mT9qB84nbW6mUAMlkmxYdJ7%2BmAUwK5TwD9RPZiDDYc0uo4e0n2uNnyUeF5cp2RgD947swJ2oN0Dwf2D7XhrklgX%2BEWZHjBMc6hMpbbpxi9OtCDP8HyJuuhyCBXKjV1YtvJFDonKNXerhfW%2F8sRimEqOyfkmlFhvYyQ1wKg11INA6tFXr6IC2hysTy%2BGrj6c0%2FN7dlFdRYewB7QK2sDPbM7DD%2BEt6u0aH%2BkMbwIrkEhKQPmEBam9RYoFDKUFrDAj%2B5c85NFjVIu%2Fqi4ibxRdlMkC89mDUFiLvOTPxCKCtFPy2aL7AgTSyVFBznKmzkLo9ElNomnFSYK1ITCTZE8t4%2F03bqT%2FeP6U89%2BXDChviMG%2B%2FHmb6t5BE45pP4DNDnwPhBZDAsJDMoV07D2ku5FATcULWVtOOgcoB%2FMMbW58MGOqUBPKbuia863rqVrNvZNHZjXxP4laSreKcGoZXA4FEzUclJpKSwTtzYqf%2FTvDxyf72wt5A%2Brcol2yEA8XbK%2BBirEb9nj8gMAJknqHKg8mLDrsa8cLPs349iFk4KsFyE9tW9YuE9CTJlkRDmoEL7A%2Bm%2FngzZ%2FwqDMulf7W8u1fko%2Fyc74eFq0XSSdQcHoASXgWHZaEG4O1tNTA87Krx0NUtstmWWVi%2FS&X-Amz-Signature=dbc82a69044c6a6ef4214bbf3cce17f35bd9059ddd99979d92d00ce1b569c329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUQSGXN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGkSyC33EPTgFgptC7RfjXZMMz4eZfg6iF%2FjK2RWmceVAiEAhsif629CVV01l6Xl%2B0XjuTbgKkM%2FL7kx14nR1QpzUT0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn28X2g9gXJQ0Nr3ircA6lwvvvkEMcyAY%2BttP%2BytC05KeR7X8gINQbRaXxI9tJ2mtaf1jWeJ%2FU5e%2B%2BJ11QFupN%2FetRElaTMPoapH2hxAyesFSibfxx9WQNvcTNrGSFWXyC%2BojhIti%2FnEeSZQr5QKDYSNjInoSjvla8xF98%2F%2FBvRlzfI10BXyzD8f5xpWq5a62B8JSu8UP%2BiHJwP236unxn%2FIp2BkoviZ67e8Olt6AL0Bk0mT9qB84nbW6mUAMlkmxYdJ7%2BmAUwK5TwD9RPZiDDYc0uo4e0n2uNnyUeF5cp2RgD947swJ2oN0Dwf2D7XhrklgX%2BEWZHjBMc6hMpbbpxi9OtCDP8HyJuuhyCBXKjV1YtvJFDonKNXerhfW%2F8sRimEqOyfkmlFhvYyQ1wKg11INA6tFXr6IC2hysTy%2BGrj6c0%2FN7dlFdRYewB7QK2sDPbM7DD%2BEt6u0aH%2BkMbwIrkEhKQPmEBam9RYoFDKUFrDAj%2B5c85NFjVIu%2Fqi4ibxRdlMkC89mDUFiLvOTPxCKCtFPy2aL7AgTSyVFBznKmzkLo9ElNomnFSYK1ITCTZE8t4%2F03bqT%2FeP6U89%2BXDChviMG%2B%2FHmb6t5BE45pP4DNDnwPhBZDAsJDMoV07D2ku5FATcULWVtOOgcoB%2FMMbW58MGOqUBPKbuia863rqVrNvZNHZjXxP4laSreKcGoZXA4FEzUclJpKSwTtzYqf%2FTvDxyf72wt5A%2Brcol2yEA8XbK%2BBirEb9nj8gMAJknqHKg8mLDrsa8cLPs349iFk4KsFyE9tW9YuE9CTJlkRDmoEL7A%2Bm%2FngzZ%2FwqDMulf7W8u1fko%2Fyc74eFq0XSSdQcHoASXgWHZaEG4O1tNTA87Krx0NUtstmWWVi%2FS&X-Amz-Signature=c59b6a77fee85ab565aa79e844ede948db97152ff4e41adcee51ca0f132f5ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
