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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2OALO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRbH8%2FXT9mh%2FrCgpHsmmtj0li4gWlw5lhW6vNa92JjAiEAlVD7SJ9uSTMbG1nZxJ0ey%2F5QOvTGgn%2FlBRwJAHkBfNIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPagZn3ZQNqOg9l49SrcA8vD8gJ1vFz4xoI6yhcgjoJQNfuRywMyIiNyUcjvtpGwGSk4sDbVckPUFhIB84J9KYZs4Xf0BGTC1o75CTGv7CV%2FQ79dHSCmeXJQmzasizJ%2BKH4w4BaKRU9WqnMGqIKNI7VLZ5ILXSpC2iz%2FWNGNNzoFP1PaVHmmKcWsWeYjVtagDHv4a7l%2BZ%2BPl0CeeKFKYVLUhK4czewv34%2BpceqZdX4TzoaEiuRn6l9dfwHkbkcniwwlNGEVjd5MDGlbt9UASU%2BpH4GRzKkRY8qXgsgEN8%2F2mZ0V1wwEnFwUTO2GAivJw10Ryo3Q3r7%2F0qLECM9GsrrSxRIf6iasPHxrbqi5Hm0PieFQpJGboOADZ%2F8ocS9pgT8YIx7TEX%2FS%2FbvhTc9V8HUhq1sy8N5FfDQ27Nf5bCN9lt5FLn0l8MQFoViCQ%2FBWQUKNYXER%2FUyhA0IjztZatgsZE5MUhdoW%2BEFkM33UXO43Ok3FW2wQAf6UYfAGG1lDtscfolgRDTWPON8BSO2crnKCSEoop8zUZYO%2F6ltbhFHLUXLUusl0s2Bd13ZOQ1tWVjlDmyi3Bx%2BrbV0zS7V8eGbWKoLkfYhp9z7EB0Unrgo%2FVglpCeBSwxr8xLptIwJ89K5F5t6dc7m7LBgrfMNqrlcIGOqUBxaRwmmFAZoU3hkgL4FIGI8CavHu5CUwQizCbmGCkSZpSc0Xj2u5QjC7L9DcKTN5YVHqqS8QvT1TbgwGYZ25sh75br2BSY9TisV7k3udh%2FBeKSErZVAKv4ph26%2FDmwz0dZkxuNRlx72Ke0sxGZKKv2w5bInb3ugTyrLmWvYFR4Vmlyh6WAOPBMkpgxvdK7hT7vdu%2FShyGNjnN5xuIvQCrh6vQngAp&X-Amz-Signature=3b34b74a6c2d6340c9a273239b20b5ff491e70507968b246276243af273fd533&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2OALO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRbH8%2FXT9mh%2FrCgpHsmmtj0li4gWlw5lhW6vNa92JjAiEAlVD7SJ9uSTMbG1nZxJ0ey%2F5QOvTGgn%2FlBRwJAHkBfNIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPagZn3ZQNqOg9l49SrcA8vD8gJ1vFz4xoI6yhcgjoJQNfuRywMyIiNyUcjvtpGwGSk4sDbVckPUFhIB84J9KYZs4Xf0BGTC1o75CTGv7CV%2FQ79dHSCmeXJQmzasizJ%2BKH4w4BaKRU9WqnMGqIKNI7VLZ5ILXSpC2iz%2FWNGNNzoFP1PaVHmmKcWsWeYjVtagDHv4a7l%2BZ%2BPl0CeeKFKYVLUhK4czewv34%2BpceqZdX4TzoaEiuRn6l9dfwHkbkcniwwlNGEVjd5MDGlbt9UASU%2BpH4GRzKkRY8qXgsgEN8%2F2mZ0V1wwEnFwUTO2GAivJw10Ryo3Q3r7%2F0qLECM9GsrrSxRIf6iasPHxrbqi5Hm0PieFQpJGboOADZ%2F8ocS9pgT8YIx7TEX%2FS%2FbvhTc9V8HUhq1sy8N5FfDQ27Nf5bCN9lt5FLn0l8MQFoViCQ%2FBWQUKNYXER%2FUyhA0IjztZatgsZE5MUhdoW%2BEFkM33UXO43Ok3FW2wQAf6UYfAGG1lDtscfolgRDTWPON8BSO2crnKCSEoop8zUZYO%2F6ltbhFHLUXLUusl0s2Bd13ZOQ1tWVjlDmyi3Bx%2BrbV0zS7V8eGbWKoLkfYhp9z7EB0Unrgo%2FVglpCeBSwxr8xLptIwJ89K5F5t6dc7m7LBgrfMNqrlcIGOqUBxaRwmmFAZoU3hkgL4FIGI8CavHu5CUwQizCbmGCkSZpSc0Xj2u5QjC7L9DcKTN5YVHqqS8QvT1TbgwGYZ25sh75br2BSY9TisV7k3udh%2FBeKSErZVAKv4ph26%2FDmwz0dZkxuNRlx72Ke0sxGZKKv2w5bInb3ugTyrLmWvYFR4Vmlyh6WAOPBMkpgxvdK7hT7vdu%2FShyGNjnN5xuIvQCrh6vQngAp&X-Amz-Signature=72c0ecaf7ff2bc3c0da52dcd79224c2c01b31ea404884df7e6b1043b11ad4909&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2OALO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRbH8%2FXT9mh%2FrCgpHsmmtj0li4gWlw5lhW6vNa92JjAiEAlVD7SJ9uSTMbG1nZxJ0ey%2F5QOvTGgn%2FlBRwJAHkBfNIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPagZn3ZQNqOg9l49SrcA8vD8gJ1vFz4xoI6yhcgjoJQNfuRywMyIiNyUcjvtpGwGSk4sDbVckPUFhIB84J9KYZs4Xf0BGTC1o75CTGv7CV%2FQ79dHSCmeXJQmzasizJ%2BKH4w4BaKRU9WqnMGqIKNI7VLZ5ILXSpC2iz%2FWNGNNzoFP1PaVHmmKcWsWeYjVtagDHv4a7l%2BZ%2BPl0CeeKFKYVLUhK4czewv34%2BpceqZdX4TzoaEiuRn6l9dfwHkbkcniwwlNGEVjd5MDGlbt9UASU%2BpH4GRzKkRY8qXgsgEN8%2F2mZ0V1wwEnFwUTO2GAivJw10Ryo3Q3r7%2F0qLECM9GsrrSxRIf6iasPHxrbqi5Hm0PieFQpJGboOADZ%2F8ocS9pgT8YIx7TEX%2FS%2FbvhTc9V8HUhq1sy8N5FfDQ27Nf5bCN9lt5FLn0l8MQFoViCQ%2FBWQUKNYXER%2FUyhA0IjztZatgsZE5MUhdoW%2BEFkM33UXO43Ok3FW2wQAf6UYfAGG1lDtscfolgRDTWPON8BSO2crnKCSEoop8zUZYO%2F6ltbhFHLUXLUusl0s2Bd13ZOQ1tWVjlDmyi3Bx%2BrbV0zS7V8eGbWKoLkfYhp9z7EB0Unrgo%2FVglpCeBSwxr8xLptIwJ89K5F5t6dc7m7LBgrfMNqrlcIGOqUBxaRwmmFAZoU3hkgL4FIGI8CavHu5CUwQizCbmGCkSZpSc0Xj2u5QjC7L9DcKTN5YVHqqS8QvT1TbgwGYZ25sh75br2BSY9TisV7k3udh%2FBeKSErZVAKv4ph26%2FDmwz0dZkxuNRlx72Ke0sxGZKKv2w5bInb3ugTyrLmWvYFR4Vmlyh6WAOPBMkpgxvdK7hT7vdu%2FShyGNjnN5xuIvQCrh6vQngAp&X-Amz-Signature=64f3e59f078e57638eb19812e35e5820d5e29de81699d8ad736e7dc95196bb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2OALO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRbH8%2FXT9mh%2FrCgpHsmmtj0li4gWlw5lhW6vNa92JjAiEAlVD7SJ9uSTMbG1nZxJ0ey%2F5QOvTGgn%2FlBRwJAHkBfNIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPagZn3ZQNqOg9l49SrcA8vD8gJ1vFz4xoI6yhcgjoJQNfuRywMyIiNyUcjvtpGwGSk4sDbVckPUFhIB84J9KYZs4Xf0BGTC1o75CTGv7CV%2FQ79dHSCmeXJQmzasizJ%2BKH4w4BaKRU9WqnMGqIKNI7VLZ5ILXSpC2iz%2FWNGNNzoFP1PaVHmmKcWsWeYjVtagDHv4a7l%2BZ%2BPl0CeeKFKYVLUhK4czewv34%2BpceqZdX4TzoaEiuRn6l9dfwHkbkcniwwlNGEVjd5MDGlbt9UASU%2BpH4GRzKkRY8qXgsgEN8%2F2mZ0V1wwEnFwUTO2GAivJw10Ryo3Q3r7%2F0qLECM9GsrrSxRIf6iasPHxrbqi5Hm0PieFQpJGboOADZ%2F8ocS9pgT8YIx7TEX%2FS%2FbvhTc9V8HUhq1sy8N5FfDQ27Nf5bCN9lt5FLn0l8MQFoViCQ%2FBWQUKNYXER%2FUyhA0IjztZatgsZE5MUhdoW%2BEFkM33UXO43Ok3FW2wQAf6UYfAGG1lDtscfolgRDTWPON8BSO2crnKCSEoop8zUZYO%2F6ltbhFHLUXLUusl0s2Bd13ZOQ1tWVjlDmyi3Bx%2BrbV0zS7V8eGbWKoLkfYhp9z7EB0Unrgo%2FVglpCeBSwxr8xLptIwJ89K5F5t6dc7m7LBgrfMNqrlcIGOqUBxaRwmmFAZoU3hkgL4FIGI8CavHu5CUwQizCbmGCkSZpSc0Xj2u5QjC7L9DcKTN5YVHqqS8QvT1TbgwGYZ25sh75br2BSY9TisV7k3udh%2FBeKSErZVAKv4ph26%2FDmwz0dZkxuNRlx72Ke0sxGZKKv2w5bInb3ugTyrLmWvYFR4Vmlyh6WAOPBMkpgxvdK7hT7vdu%2FShyGNjnN5xuIvQCrh6vQngAp&X-Amz-Signature=643e73579a3e209d08bf58f8e601d62e27696270807f2671efcb335037950b10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2OALO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRbH8%2FXT9mh%2FrCgpHsmmtj0li4gWlw5lhW6vNa92JjAiEAlVD7SJ9uSTMbG1nZxJ0ey%2F5QOvTGgn%2FlBRwJAHkBfNIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPagZn3ZQNqOg9l49SrcA8vD8gJ1vFz4xoI6yhcgjoJQNfuRywMyIiNyUcjvtpGwGSk4sDbVckPUFhIB84J9KYZs4Xf0BGTC1o75CTGv7CV%2FQ79dHSCmeXJQmzasizJ%2BKH4w4BaKRU9WqnMGqIKNI7VLZ5ILXSpC2iz%2FWNGNNzoFP1PaVHmmKcWsWeYjVtagDHv4a7l%2BZ%2BPl0CeeKFKYVLUhK4czewv34%2BpceqZdX4TzoaEiuRn6l9dfwHkbkcniwwlNGEVjd5MDGlbt9UASU%2BpH4GRzKkRY8qXgsgEN8%2F2mZ0V1wwEnFwUTO2GAivJw10Ryo3Q3r7%2F0qLECM9GsrrSxRIf6iasPHxrbqi5Hm0PieFQpJGboOADZ%2F8ocS9pgT8YIx7TEX%2FS%2FbvhTc9V8HUhq1sy8N5FfDQ27Nf5bCN9lt5FLn0l8MQFoViCQ%2FBWQUKNYXER%2FUyhA0IjztZatgsZE5MUhdoW%2BEFkM33UXO43Ok3FW2wQAf6UYfAGG1lDtscfolgRDTWPON8BSO2crnKCSEoop8zUZYO%2F6ltbhFHLUXLUusl0s2Bd13ZOQ1tWVjlDmyi3Bx%2BrbV0zS7V8eGbWKoLkfYhp9z7EB0Unrgo%2FVglpCeBSwxr8xLptIwJ89K5F5t6dc7m7LBgrfMNqrlcIGOqUBxaRwmmFAZoU3hkgL4FIGI8CavHu5CUwQizCbmGCkSZpSc0Xj2u5QjC7L9DcKTN5YVHqqS8QvT1TbgwGYZ25sh75br2BSY9TisV7k3udh%2FBeKSErZVAKv4ph26%2FDmwz0dZkxuNRlx72Ke0sxGZKKv2w5bInb3ugTyrLmWvYFR4Vmlyh6WAOPBMkpgxvdK7hT7vdu%2FShyGNjnN5xuIvQCrh6vQngAp&X-Amz-Signature=62f3a65e35a4cdc20b2a5ae74d6aab15284aeae25cd21bf94b2f20c2d9da164b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLC2OALO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FRbH8%2FXT9mh%2FrCgpHsmmtj0li4gWlw5lhW6vNa92JjAiEAlVD7SJ9uSTMbG1nZxJ0ey%2F5QOvTGgn%2FlBRwJAHkBfNIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPagZn3ZQNqOg9l49SrcA8vD8gJ1vFz4xoI6yhcgjoJQNfuRywMyIiNyUcjvtpGwGSk4sDbVckPUFhIB84J9KYZs4Xf0BGTC1o75CTGv7CV%2FQ79dHSCmeXJQmzasizJ%2BKH4w4BaKRU9WqnMGqIKNI7VLZ5ILXSpC2iz%2FWNGNNzoFP1PaVHmmKcWsWeYjVtagDHv4a7l%2BZ%2BPl0CeeKFKYVLUhK4czewv34%2BpceqZdX4TzoaEiuRn6l9dfwHkbkcniwwlNGEVjd5MDGlbt9UASU%2BpH4GRzKkRY8qXgsgEN8%2F2mZ0V1wwEnFwUTO2GAivJw10Ryo3Q3r7%2F0qLECM9GsrrSxRIf6iasPHxrbqi5Hm0PieFQpJGboOADZ%2F8ocS9pgT8YIx7TEX%2FS%2FbvhTc9V8HUhq1sy8N5FfDQ27Nf5bCN9lt5FLn0l8MQFoViCQ%2FBWQUKNYXER%2FUyhA0IjztZatgsZE5MUhdoW%2BEFkM33UXO43Ok3FW2wQAf6UYfAGG1lDtscfolgRDTWPON8BSO2crnKCSEoop8zUZYO%2F6ltbhFHLUXLUusl0s2Bd13ZOQ1tWVjlDmyi3Bx%2BrbV0zS7V8eGbWKoLkfYhp9z7EB0Unrgo%2FVglpCeBSwxr8xLptIwJ89K5F5t6dc7m7LBgrfMNqrlcIGOqUBxaRwmmFAZoU3hkgL4FIGI8CavHu5CUwQizCbmGCkSZpSc0Xj2u5QjC7L9DcKTN5YVHqqS8QvT1TbgwGYZ25sh75br2BSY9TisV7k3udh%2FBeKSErZVAKv4ph26%2FDmwz0dZkxuNRlx72Ke0sxGZKKv2w5bInb3ugTyrLmWvYFR4Vmlyh6WAOPBMkpgxvdK7hT7vdu%2FShyGNjnN5xuIvQCrh6vQngAp&X-Amz-Signature=6672f3d9117b21c73f00eedc377f698ff2686cb9094c54d5468176de834644d8&X-Amz-SignedHeaders=host&x-id=GetObject)
