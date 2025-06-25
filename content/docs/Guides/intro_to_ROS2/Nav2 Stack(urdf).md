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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NULYI7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDRJEQckQu%2BiXNQooZfyL3EeFLAgDtUMD9zLyFuYlNatgIgT4mxXKrC70kd9Mr%2FiLLgIQ6uJAE9jAcCvxxtaZIp%2B3Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDM8nrxhKY4CaLW4BircA2CjNd4GH6ejOnh8lQy0UN9Vctwo3OiphCYcITq0dY6erhHW6mhC%2Fb8ZIaeEhRbysSANWBiQ9H9EwEW7RbJBlVx74IYuokjsFGXGeI7G%2B%2BvtDZUSI5TM2gFpyWNSeCe7Y69CDIiZmp4bQZrOFIwE56BbTDcvo40iLYQOhqMwEYwXrbgWqjyMBgWVhxEh0UsvVWrawtte%2Brypvz0zUZbgdbS6lmJnBkiz9D6vVRfulKFQkexwHnnTKySQvX4WlkbaETPb36EVDRzTqRNKQ%2BmnYDayfaKTFjr1LnCirkNcJqhtB1GgbHkiuUTVYS4UdEONuOvkpruiRyyDcwFdcL%2BahhiurWim%2FdjuMwfCFDrED%2BhU1SWpmGCdD17Zr%2BQTSfR%2FZ8m7IdRIFSEdqb36Ri7il4bQjSJEGi5iuXTd0xBhSr2y83EMbRLwNVxENGmlnZX5Cp4ZqyH%2FYDikkZ581Bv46X5JDLT1iipNLceO%2FwJ3fhPvrUvcSP9YXa0AyzcnUhwU0r5PiBmyVoCSy3IdFi%2BWdLo2TlcmlxiiXTOS%2FOLX0NFz%2B317TgR%2F6BkJ6dfxrunz19j0x6ZcNIk%2FnHquNEqiMQF33m%2FVMRnR6QQc2qerlK5RIJqfzFXBWaD6BUNHMLju78IGOqUBtD6f56d17PY%2FGjT1u8iZn3zUNhpduL8s3MHHXGbQaM87Fsk7W6fIr5RvNE9gpyoghhntJeZWbPioNEYm0wpRKNY4T3ZVzLu6M3NmjWdzLPnA467yvVPS65B6U6LPvstgEfw73CG2w4sR5XLEWvERvORukuziit%2F5uWH%2FXcimq8Wi07QykpKOAubDE%2FqEXymiMc1gAIp3TV%2Fc%2FwW6F%2FRTyymSU5cy&X-Amz-Signature=cc2a6b53c3e96138d266711a2e1c6c121b458e22b4fdc158026d3b55462b63d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NULYI7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDRJEQckQu%2BiXNQooZfyL3EeFLAgDtUMD9zLyFuYlNatgIgT4mxXKrC70kd9Mr%2FiLLgIQ6uJAE9jAcCvxxtaZIp%2B3Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDM8nrxhKY4CaLW4BircA2CjNd4GH6ejOnh8lQy0UN9Vctwo3OiphCYcITq0dY6erhHW6mhC%2Fb8ZIaeEhRbysSANWBiQ9H9EwEW7RbJBlVx74IYuokjsFGXGeI7G%2B%2BvtDZUSI5TM2gFpyWNSeCe7Y69CDIiZmp4bQZrOFIwE56BbTDcvo40iLYQOhqMwEYwXrbgWqjyMBgWVhxEh0UsvVWrawtte%2Brypvz0zUZbgdbS6lmJnBkiz9D6vVRfulKFQkexwHnnTKySQvX4WlkbaETPb36EVDRzTqRNKQ%2BmnYDayfaKTFjr1LnCirkNcJqhtB1GgbHkiuUTVYS4UdEONuOvkpruiRyyDcwFdcL%2BahhiurWim%2FdjuMwfCFDrED%2BhU1SWpmGCdD17Zr%2BQTSfR%2FZ8m7IdRIFSEdqb36Ri7il4bQjSJEGi5iuXTd0xBhSr2y83EMbRLwNVxENGmlnZX5Cp4ZqyH%2FYDikkZ581Bv46X5JDLT1iipNLceO%2FwJ3fhPvrUvcSP9YXa0AyzcnUhwU0r5PiBmyVoCSy3IdFi%2BWdLo2TlcmlxiiXTOS%2FOLX0NFz%2B317TgR%2F6BkJ6dfxrunz19j0x6ZcNIk%2FnHquNEqiMQF33m%2FVMRnR6QQc2qerlK5RIJqfzFXBWaD6BUNHMLju78IGOqUBtD6f56d17PY%2FGjT1u8iZn3zUNhpduL8s3MHHXGbQaM87Fsk7W6fIr5RvNE9gpyoghhntJeZWbPioNEYm0wpRKNY4T3ZVzLu6M3NmjWdzLPnA467yvVPS65B6U6LPvstgEfw73CG2w4sR5XLEWvERvORukuziit%2F5uWH%2FXcimq8Wi07QykpKOAubDE%2FqEXymiMc1gAIp3TV%2Fc%2FwW6F%2FRTyymSU5cy&X-Amz-Signature=8cdffbeeb71f8dbc90abeda8636fc9142f4d9e05994819a7a72dcd654a3c5cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NULYI7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDRJEQckQu%2BiXNQooZfyL3EeFLAgDtUMD9zLyFuYlNatgIgT4mxXKrC70kd9Mr%2FiLLgIQ6uJAE9jAcCvxxtaZIp%2B3Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDM8nrxhKY4CaLW4BircA2CjNd4GH6ejOnh8lQy0UN9Vctwo3OiphCYcITq0dY6erhHW6mhC%2Fb8ZIaeEhRbysSANWBiQ9H9EwEW7RbJBlVx74IYuokjsFGXGeI7G%2B%2BvtDZUSI5TM2gFpyWNSeCe7Y69CDIiZmp4bQZrOFIwE56BbTDcvo40iLYQOhqMwEYwXrbgWqjyMBgWVhxEh0UsvVWrawtte%2Brypvz0zUZbgdbS6lmJnBkiz9D6vVRfulKFQkexwHnnTKySQvX4WlkbaETPb36EVDRzTqRNKQ%2BmnYDayfaKTFjr1LnCirkNcJqhtB1GgbHkiuUTVYS4UdEONuOvkpruiRyyDcwFdcL%2BahhiurWim%2FdjuMwfCFDrED%2BhU1SWpmGCdD17Zr%2BQTSfR%2FZ8m7IdRIFSEdqb36Ri7il4bQjSJEGi5iuXTd0xBhSr2y83EMbRLwNVxENGmlnZX5Cp4ZqyH%2FYDikkZ581Bv46X5JDLT1iipNLceO%2FwJ3fhPvrUvcSP9YXa0AyzcnUhwU0r5PiBmyVoCSy3IdFi%2BWdLo2TlcmlxiiXTOS%2FOLX0NFz%2B317TgR%2F6BkJ6dfxrunz19j0x6ZcNIk%2FnHquNEqiMQF33m%2FVMRnR6QQc2qerlK5RIJqfzFXBWaD6BUNHMLju78IGOqUBtD6f56d17PY%2FGjT1u8iZn3zUNhpduL8s3MHHXGbQaM87Fsk7W6fIr5RvNE9gpyoghhntJeZWbPioNEYm0wpRKNY4T3ZVzLu6M3NmjWdzLPnA467yvVPS65B6U6LPvstgEfw73CG2w4sR5XLEWvERvORukuziit%2F5uWH%2FXcimq8Wi07QykpKOAubDE%2FqEXymiMc1gAIp3TV%2Fc%2FwW6F%2FRTyymSU5cy&X-Amz-Signature=8e37147464a8c154059a11ea31d49ac71a20f2d4657cbb7fa1297e0934a827f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NULYI7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDRJEQckQu%2BiXNQooZfyL3EeFLAgDtUMD9zLyFuYlNatgIgT4mxXKrC70kd9Mr%2FiLLgIQ6uJAE9jAcCvxxtaZIp%2B3Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDM8nrxhKY4CaLW4BircA2CjNd4GH6ejOnh8lQy0UN9Vctwo3OiphCYcITq0dY6erhHW6mhC%2Fb8ZIaeEhRbysSANWBiQ9H9EwEW7RbJBlVx74IYuokjsFGXGeI7G%2B%2BvtDZUSI5TM2gFpyWNSeCe7Y69CDIiZmp4bQZrOFIwE56BbTDcvo40iLYQOhqMwEYwXrbgWqjyMBgWVhxEh0UsvVWrawtte%2Brypvz0zUZbgdbS6lmJnBkiz9D6vVRfulKFQkexwHnnTKySQvX4WlkbaETPb36EVDRzTqRNKQ%2BmnYDayfaKTFjr1LnCirkNcJqhtB1GgbHkiuUTVYS4UdEONuOvkpruiRyyDcwFdcL%2BahhiurWim%2FdjuMwfCFDrED%2BhU1SWpmGCdD17Zr%2BQTSfR%2FZ8m7IdRIFSEdqb36Ri7il4bQjSJEGi5iuXTd0xBhSr2y83EMbRLwNVxENGmlnZX5Cp4ZqyH%2FYDikkZ581Bv46X5JDLT1iipNLceO%2FwJ3fhPvrUvcSP9YXa0AyzcnUhwU0r5PiBmyVoCSy3IdFi%2BWdLo2TlcmlxiiXTOS%2FOLX0NFz%2B317TgR%2F6BkJ6dfxrunz19j0x6ZcNIk%2FnHquNEqiMQF33m%2FVMRnR6QQc2qerlK5RIJqfzFXBWaD6BUNHMLju78IGOqUBtD6f56d17PY%2FGjT1u8iZn3zUNhpduL8s3MHHXGbQaM87Fsk7W6fIr5RvNE9gpyoghhntJeZWbPioNEYm0wpRKNY4T3ZVzLu6M3NmjWdzLPnA467yvVPS65B6U6LPvstgEfw73CG2w4sR5XLEWvERvORukuziit%2F5uWH%2FXcimq8Wi07QykpKOAubDE%2FqEXymiMc1gAIp3TV%2Fc%2FwW6F%2FRTyymSU5cy&X-Amz-Signature=0a1ae41a1147daa6177ce79302ddc4b8ed855460c6313844170ee9b79e473692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NULYI7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDRJEQckQu%2BiXNQooZfyL3EeFLAgDtUMD9zLyFuYlNatgIgT4mxXKrC70kd9Mr%2FiLLgIQ6uJAE9jAcCvxxtaZIp%2B3Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDM8nrxhKY4CaLW4BircA2CjNd4GH6ejOnh8lQy0UN9Vctwo3OiphCYcITq0dY6erhHW6mhC%2Fb8ZIaeEhRbysSANWBiQ9H9EwEW7RbJBlVx74IYuokjsFGXGeI7G%2B%2BvtDZUSI5TM2gFpyWNSeCe7Y69CDIiZmp4bQZrOFIwE56BbTDcvo40iLYQOhqMwEYwXrbgWqjyMBgWVhxEh0UsvVWrawtte%2Brypvz0zUZbgdbS6lmJnBkiz9D6vVRfulKFQkexwHnnTKySQvX4WlkbaETPb36EVDRzTqRNKQ%2BmnYDayfaKTFjr1LnCirkNcJqhtB1GgbHkiuUTVYS4UdEONuOvkpruiRyyDcwFdcL%2BahhiurWim%2FdjuMwfCFDrED%2BhU1SWpmGCdD17Zr%2BQTSfR%2FZ8m7IdRIFSEdqb36Ri7il4bQjSJEGi5iuXTd0xBhSr2y83EMbRLwNVxENGmlnZX5Cp4ZqyH%2FYDikkZ581Bv46X5JDLT1iipNLceO%2FwJ3fhPvrUvcSP9YXa0AyzcnUhwU0r5PiBmyVoCSy3IdFi%2BWdLo2TlcmlxiiXTOS%2FOLX0NFz%2B317TgR%2F6BkJ6dfxrunz19j0x6ZcNIk%2FnHquNEqiMQF33m%2FVMRnR6QQc2qerlK5RIJqfzFXBWaD6BUNHMLju78IGOqUBtD6f56d17PY%2FGjT1u8iZn3zUNhpduL8s3MHHXGbQaM87Fsk7W6fIr5RvNE9gpyoghhntJeZWbPioNEYm0wpRKNY4T3ZVzLu6M3NmjWdzLPnA467yvVPS65B6U6LPvstgEfw73CG2w4sR5XLEWvERvORukuziit%2F5uWH%2FXcimq8Wi07QykpKOAubDE%2FqEXymiMc1gAIp3TV%2Fc%2FwW6F%2FRTyymSU5cy&X-Amz-Signature=c0473ea173c33b4226d443099ff68f4b8559592d6fac0c2de2670ee59c1259ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NULYI7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDRJEQckQu%2BiXNQooZfyL3EeFLAgDtUMD9zLyFuYlNatgIgT4mxXKrC70kd9Mr%2FiLLgIQ6uJAE9jAcCvxxtaZIp%2B3Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDM8nrxhKY4CaLW4BircA2CjNd4GH6ejOnh8lQy0UN9Vctwo3OiphCYcITq0dY6erhHW6mhC%2Fb8ZIaeEhRbysSANWBiQ9H9EwEW7RbJBlVx74IYuokjsFGXGeI7G%2B%2BvtDZUSI5TM2gFpyWNSeCe7Y69CDIiZmp4bQZrOFIwE56BbTDcvo40iLYQOhqMwEYwXrbgWqjyMBgWVhxEh0UsvVWrawtte%2Brypvz0zUZbgdbS6lmJnBkiz9D6vVRfulKFQkexwHnnTKySQvX4WlkbaETPb36EVDRzTqRNKQ%2BmnYDayfaKTFjr1LnCirkNcJqhtB1GgbHkiuUTVYS4UdEONuOvkpruiRyyDcwFdcL%2BahhiurWim%2FdjuMwfCFDrED%2BhU1SWpmGCdD17Zr%2BQTSfR%2FZ8m7IdRIFSEdqb36Ri7il4bQjSJEGi5iuXTd0xBhSr2y83EMbRLwNVxENGmlnZX5Cp4ZqyH%2FYDikkZ581Bv46X5JDLT1iipNLceO%2FwJ3fhPvrUvcSP9YXa0AyzcnUhwU0r5PiBmyVoCSy3IdFi%2BWdLo2TlcmlxiiXTOS%2FOLX0NFz%2B317TgR%2F6BkJ6dfxrunz19j0x6ZcNIk%2FnHquNEqiMQF33m%2FVMRnR6QQc2qerlK5RIJqfzFXBWaD6BUNHMLju78IGOqUBtD6f56d17PY%2FGjT1u8iZn3zUNhpduL8s3MHHXGbQaM87Fsk7W6fIr5RvNE9gpyoghhntJeZWbPioNEYm0wpRKNY4T3ZVzLu6M3NmjWdzLPnA467yvVPS65B6U6LPvstgEfw73CG2w4sR5XLEWvERvORukuziit%2F5uWH%2FXcimq8Wi07QykpKOAubDE%2FqEXymiMc1gAIp3TV%2Fc%2FwW6F%2FRTyymSU5cy&X-Amz-Signature=81be73ff4bd3801eacbbcd76d5eb144df44e8340d5e8fcdb803de4f7eba06205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
