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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOPUMHM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCwg6MN2%2BtTC4WTDOlZzBs4vxyzLB7tUJvjukPJbyz2wQIgI5ffsI4w8boWYxuHIs%2B3%2FalT2h%2FCxHsJ%2Bewt070pOtEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAOI5RUJK1TQVYcIpyrcA7bQ1UDn05I5UfXsv0ap8922Jm7reCkO5Aezs6MH5BOc6rsRG7iZBthxtN5zROGvesWzpe3I%2BID2fOaxy3%2BW5zHFeHERtmxUKVbrMRv7euOTvvs7lZMpt91szCQ4p2FRoaewII7g%2F%2F2DewfyMHXiLavAl3MDdWdSYlsk%2FJVGKe%2By0gbRsEiYEG7vd6q7rRd8H%2BdMQ4RnwcYmXjDf%2FImGf93bfqYYkbjYrw7osaBi394yQ%2FCU5Qyyfih4SSanJgCBbQpL4p455GBYD2QqqUfPfW6UYMUoAkfUOJLzqZWUdUngiLjAayAAECOV5%2FbsTETkVWl1kQy7KIkEIn1ealTSQ%2BUCIIOxmyTtWFF8JL7VhFqOVkczH1gLO7VElKxMdoBvoHfP3%2BzjczaUnFcJ6A4HFw1lGKAw7nNUAyS8uIOtT6eyT4ifcEo0RTShNRFULW0cBnM9kgRGoN5vPJw7Kwgw9fnPTPksoY7kNECPlHnduwKLJuBsHhN6WPYDdWd71szDF6mKmCuugI69Hv3AewtJ10BqOctpKDR4CzV1jhzAwbrbkwi1sb%2B%2FHCMfekYV4IdULDjKZlYYXdeNTBUr9t199sxPBvMw%2Fgf%2FCa5tONW6bCaaGjMGXW3SmC8cK0JRMNu%2B5MMGOqUBWayM0Ea0D%2FD973vraKJag3gMJlxiWAE8jLxS1YCSNMKFjXeAgfT8%2B7hzrKZ7DS%2F13UMZXr5utTRLhpEfSaW0R2VCBx9ARt3dx3Sjd7K9nEmtVB0uj%2BPJBAJPJnR9Yny6Rxdt2vrQyu1TmA%2F0S4uOml%2BGGUqx%2FJ4hMpzBa%2FnHwZBytL8Fr%2FrFl2mlSp%2FpajwH7SoeHlqujqQvpvP2EsvoTqz2cpgL&X-Amz-Signature=6d064663d46362c3bddcd83cfe89c75dd327dbdb0051f9131f7351b98fb810b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOPUMHM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCwg6MN2%2BtTC4WTDOlZzBs4vxyzLB7tUJvjukPJbyz2wQIgI5ffsI4w8boWYxuHIs%2B3%2FalT2h%2FCxHsJ%2Bewt070pOtEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAOI5RUJK1TQVYcIpyrcA7bQ1UDn05I5UfXsv0ap8922Jm7reCkO5Aezs6MH5BOc6rsRG7iZBthxtN5zROGvesWzpe3I%2BID2fOaxy3%2BW5zHFeHERtmxUKVbrMRv7euOTvvs7lZMpt91szCQ4p2FRoaewII7g%2F%2F2DewfyMHXiLavAl3MDdWdSYlsk%2FJVGKe%2By0gbRsEiYEG7vd6q7rRd8H%2BdMQ4RnwcYmXjDf%2FImGf93bfqYYkbjYrw7osaBi394yQ%2FCU5Qyyfih4SSanJgCBbQpL4p455GBYD2QqqUfPfW6UYMUoAkfUOJLzqZWUdUngiLjAayAAECOV5%2FbsTETkVWl1kQy7KIkEIn1ealTSQ%2BUCIIOxmyTtWFF8JL7VhFqOVkczH1gLO7VElKxMdoBvoHfP3%2BzjczaUnFcJ6A4HFw1lGKAw7nNUAyS8uIOtT6eyT4ifcEo0RTShNRFULW0cBnM9kgRGoN5vPJw7Kwgw9fnPTPksoY7kNECPlHnduwKLJuBsHhN6WPYDdWd71szDF6mKmCuugI69Hv3AewtJ10BqOctpKDR4CzV1jhzAwbrbkwi1sb%2B%2FHCMfekYV4IdULDjKZlYYXdeNTBUr9t199sxPBvMw%2Fgf%2FCa5tONW6bCaaGjMGXW3SmC8cK0JRMNu%2B5MMGOqUBWayM0Ea0D%2FD973vraKJag3gMJlxiWAE8jLxS1YCSNMKFjXeAgfT8%2B7hzrKZ7DS%2F13UMZXr5utTRLhpEfSaW0R2VCBx9ARt3dx3Sjd7K9nEmtVB0uj%2BPJBAJPJnR9Yny6Rxdt2vrQyu1TmA%2F0S4uOml%2BGGUqx%2FJ4hMpzBa%2FnHwZBytL8Fr%2FrFl2mlSp%2FpajwH7SoeHlqujqQvpvP2EsvoTqz2cpgL&X-Amz-Signature=33590843f18193d95d7fde62084174e75397e79b514125a99b2a524547213209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOPUMHM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCwg6MN2%2BtTC4WTDOlZzBs4vxyzLB7tUJvjukPJbyz2wQIgI5ffsI4w8boWYxuHIs%2B3%2FalT2h%2FCxHsJ%2Bewt070pOtEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAOI5RUJK1TQVYcIpyrcA7bQ1UDn05I5UfXsv0ap8922Jm7reCkO5Aezs6MH5BOc6rsRG7iZBthxtN5zROGvesWzpe3I%2BID2fOaxy3%2BW5zHFeHERtmxUKVbrMRv7euOTvvs7lZMpt91szCQ4p2FRoaewII7g%2F%2F2DewfyMHXiLavAl3MDdWdSYlsk%2FJVGKe%2By0gbRsEiYEG7vd6q7rRd8H%2BdMQ4RnwcYmXjDf%2FImGf93bfqYYkbjYrw7osaBi394yQ%2FCU5Qyyfih4SSanJgCBbQpL4p455GBYD2QqqUfPfW6UYMUoAkfUOJLzqZWUdUngiLjAayAAECOV5%2FbsTETkVWl1kQy7KIkEIn1ealTSQ%2BUCIIOxmyTtWFF8JL7VhFqOVkczH1gLO7VElKxMdoBvoHfP3%2BzjczaUnFcJ6A4HFw1lGKAw7nNUAyS8uIOtT6eyT4ifcEo0RTShNRFULW0cBnM9kgRGoN5vPJw7Kwgw9fnPTPksoY7kNECPlHnduwKLJuBsHhN6WPYDdWd71szDF6mKmCuugI69Hv3AewtJ10BqOctpKDR4CzV1jhzAwbrbkwi1sb%2B%2FHCMfekYV4IdULDjKZlYYXdeNTBUr9t199sxPBvMw%2Fgf%2FCa5tONW6bCaaGjMGXW3SmC8cK0JRMNu%2B5MMGOqUBWayM0Ea0D%2FD973vraKJag3gMJlxiWAE8jLxS1YCSNMKFjXeAgfT8%2B7hzrKZ7DS%2F13UMZXr5utTRLhpEfSaW0R2VCBx9ARt3dx3Sjd7K9nEmtVB0uj%2BPJBAJPJnR9Yny6Rxdt2vrQyu1TmA%2F0S4uOml%2BGGUqx%2FJ4hMpzBa%2FnHwZBytL8Fr%2FrFl2mlSp%2FpajwH7SoeHlqujqQvpvP2EsvoTqz2cpgL&X-Amz-Signature=745503235c1c9ef2cce520eb975de240b8c34a5f3e1f90305f9fbf8d56dc6b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOPUMHM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCwg6MN2%2BtTC4WTDOlZzBs4vxyzLB7tUJvjukPJbyz2wQIgI5ffsI4w8boWYxuHIs%2B3%2FalT2h%2FCxHsJ%2Bewt070pOtEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAOI5RUJK1TQVYcIpyrcA7bQ1UDn05I5UfXsv0ap8922Jm7reCkO5Aezs6MH5BOc6rsRG7iZBthxtN5zROGvesWzpe3I%2BID2fOaxy3%2BW5zHFeHERtmxUKVbrMRv7euOTvvs7lZMpt91szCQ4p2FRoaewII7g%2F%2F2DewfyMHXiLavAl3MDdWdSYlsk%2FJVGKe%2By0gbRsEiYEG7vd6q7rRd8H%2BdMQ4RnwcYmXjDf%2FImGf93bfqYYkbjYrw7osaBi394yQ%2FCU5Qyyfih4SSanJgCBbQpL4p455GBYD2QqqUfPfW6UYMUoAkfUOJLzqZWUdUngiLjAayAAECOV5%2FbsTETkVWl1kQy7KIkEIn1ealTSQ%2BUCIIOxmyTtWFF8JL7VhFqOVkczH1gLO7VElKxMdoBvoHfP3%2BzjczaUnFcJ6A4HFw1lGKAw7nNUAyS8uIOtT6eyT4ifcEo0RTShNRFULW0cBnM9kgRGoN5vPJw7Kwgw9fnPTPksoY7kNECPlHnduwKLJuBsHhN6WPYDdWd71szDF6mKmCuugI69Hv3AewtJ10BqOctpKDR4CzV1jhzAwbrbkwi1sb%2B%2FHCMfekYV4IdULDjKZlYYXdeNTBUr9t199sxPBvMw%2Fgf%2FCa5tONW6bCaaGjMGXW3SmC8cK0JRMNu%2B5MMGOqUBWayM0Ea0D%2FD973vraKJag3gMJlxiWAE8jLxS1YCSNMKFjXeAgfT8%2B7hzrKZ7DS%2F13UMZXr5utTRLhpEfSaW0R2VCBx9ARt3dx3Sjd7K9nEmtVB0uj%2BPJBAJPJnR9Yny6Rxdt2vrQyu1TmA%2F0S4uOml%2BGGUqx%2FJ4hMpzBa%2FnHwZBytL8Fr%2FrFl2mlSp%2FpajwH7SoeHlqujqQvpvP2EsvoTqz2cpgL&X-Amz-Signature=8757b4d968d0f84acc39e66adfa5aa2b070e88008d5152066c4475d738765a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOPUMHM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCwg6MN2%2BtTC4WTDOlZzBs4vxyzLB7tUJvjukPJbyz2wQIgI5ffsI4w8boWYxuHIs%2B3%2FalT2h%2FCxHsJ%2Bewt070pOtEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAOI5RUJK1TQVYcIpyrcA7bQ1UDn05I5UfXsv0ap8922Jm7reCkO5Aezs6MH5BOc6rsRG7iZBthxtN5zROGvesWzpe3I%2BID2fOaxy3%2BW5zHFeHERtmxUKVbrMRv7euOTvvs7lZMpt91szCQ4p2FRoaewII7g%2F%2F2DewfyMHXiLavAl3MDdWdSYlsk%2FJVGKe%2By0gbRsEiYEG7vd6q7rRd8H%2BdMQ4RnwcYmXjDf%2FImGf93bfqYYkbjYrw7osaBi394yQ%2FCU5Qyyfih4SSanJgCBbQpL4p455GBYD2QqqUfPfW6UYMUoAkfUOJLzqZWUdUngiLjAayAAECOV5%2FbsTETkVWl1kQy7KIkEIn1ealTSQ%2BUCIIOxmyTtWFF8JL7VhFqOVkczH1gLO7VElKxMdoBvoHfP3%2BzjczaUnFcJ6A4HFw1lGKAw7nNUAyS8uIOtT6eyT4ifcEo0RTShNRFULW0cBnM9kgRGoN5vPJw7Kwgw9fnPTPksoY7kNECPlHnduwKLJuBsHhN6WPYDdWd71szDF6mKmCuugI69Hv3AewtJ10BqOctpKDR4CzV1jhzAwbrbkwi1sb%2B%2FHCMfekYV4IdULDjKZlYYXdeNTBUr9t199sxPBvMw%2Fgf%2FCa5tONW6bCaaGjMGXW3SmC8cK0JRMNu%2B5MMGOqUBWayM0Ea0D%2FD973vraKJag3gMJlxiWAE8jLxS1YCSNMKFjXeAgfT8%2B7hzrKZ7DS%2F13UMZXr5utTRLhpEfSaW0R2VCBx9ARt3dx3Sjd7K9nEmtVB0uj%2BPJBAJPJnR9Yny6Rxdt2vrQyu1TmA%2F0S4uOml%2BGGUqx%2FJ4hMpzBa%2FnHwZBytL8Fr%2FrFl2mlSp%2FpajwH7SoeHlqujqQvpvP2EsvoTqz2cpgL&X-Amz-Signature=90d9f49897efe0ff481fb9b8d98764905b2edfb7b008687ee6830d9bc2234c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFOPUMHM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCwg6MN2%2BtTC4WTDOlZzBs4vxyzLB7tUJvjukPJbyz2wQIgI5ffsI4w8boWYxuHIs%2B3%2FalT2h%2FCxHsJ%2Bewt070pOtEq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAOI5RUJK1TQVYcIpyrcA7bQ1UDn05I5UfXsv0ap8922Jm7reCkO5Aezs6MH5BOc6rsRG7iZBthxtN5zROGvesWzpe3I%2BID2fOaxy3%2BW5zHFeHERtmxUKVbrMRv7euOTvvs7lZMpt91szCQ4p2FRoaewII7g%2F%2F2DewfyMHXiLavAl3MDdWdSYlsk%2FJVGKe%2By0gbRsEiYEG7vd6q7rRd8H%2BdMQ4RnwcYmXjDf%2FImGf93bfqYYkbjYrw7osaBi394yQ%2FCU5Qyyfih4SSanJgCBbQpL4p455GBYD2QqqUfPfW6UYMUoAkfUOJLzqZWUdUngiLjAayAAECOV5%2FbsTETkVWl1kQy7KIkEIn1ealTSQ%2BUCIIOxmyTtWFF8JL7VhFqOVkczH1gLO7VElKxMdoBvoHfP3%2BzjczaUnFcJ6A4HFw1lGKAw7nNUAyS8uIOtT6eyT4ifcEo0RTShNRFULW0cBnM9kgRGoN5vPJw7Kwgw9fnPTPksoY7kNECPlHnduwKLJuBsHhN6WPYDdWd71szDF6mKmCuugI69Hv3AewtJ10BqOctpKDR4CzV1jhzAwbrbkwi1sb%2B%2FHCMfekYV4IdULDjKZlYYXdeNTBUr9t199sxPBvMw%2Fgf%2FCa5tONW6bCaaGjMGXW3SmC8cK0JRMNu%2B5MMGOqUBWayM0Ea0D%2FD973vraKJag3gMJlxiWAE8jLxS1YCSNMKFjXeAgfT8%2B7hzrKZ7DS%2F13UMZXr5utTRLhpEfSaW0R2VCBx9ARt3dx3Sjd7K9nEmtVB0uj%2BPJBAJPJnR9Yny6Rxdt2vrQyu1TmA%2F0S4uOml%2BGGUqx%2FJ4hMpzBa%2FnHwZBytL8Fr%2FrFl2mlSp%2FpajwH7SoeHlqujqQvpvP2EsvoTqz2cpgL&X-Amz-Signature=47acb7b929fcbc4c6141f475e30429977528b63e7d85fce719a66d4094937bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
