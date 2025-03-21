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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I4DZLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCxn0WtS9h7lJDcTP3XQ7mctl5uE7WA9dLRanx%2FzIZmagIgZX0V6DpqyXdF3kl5exyv6YqAW3vYsCqF8rhDOmehS84qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbKpCV1bbeusEXemyrcA6%2FXHWaYiGCVyL6EkmGS%2FNzEux8R3wc%2FSl0eFKauUOiEDPw04cqMpHgh9WgSyVvZVx2FPfAp67JCzffBGGGNzBF2POpmjoKBB%2BFz37nrHtusCgsTFB%2F4zFX5F569wDF%2BxcHkAeF%2FKHNxuIXggTGTfPrNCi1aMV9SQzqjaV2THiX9oake3TKDI5Ow3qyLrxZYpjjkIi2qjjD0DwVklSZP%2BzcLtExR4x9rimBjT%2F2CaANXyiyMlrim%2BvCtO3BTG0nnd%2B2C%2FEKpIBvSQmmXVQf1ZTX5U6TPaEHFAVnJTDj4Nfe53uMWh5jlFaZaM%2B8NuGxhoXtZ4huO3P2IgpfFDztNwCnn2%2FHU%2BXq4a7XNrpMcxBZ6vDawQpNbxrr9mRf13An4OJM%2BjT2xxGIZATCgI2gsw9j9EhfujvMOhgK6QJTrceYgp6or27LsdABbBaSclPtUtIeLo%2Ffo2uUEziO%2B2FAvO4nQ08W0sUaK%2BMGkZHAxwSA8kBEZelT2pOP%2BCiWR%2F8XHZZoQOBu1MyIK%2Bgq2Wdr8rybQc2jLADq256f%2BTx%2BlOsSPINyGaDlkyEyE7ZGwJ8S5RgiE8pmeBOtsmdFNFkSKV1%2F5yFSxr26O%2FGPNEikEMhoJhVnd89MRjgHbiZZ%2FMKr79b4GOqUB0x32efcHG1gchDBY9eam2TQD745QpY4lhVc4%2FliKY9o0daEfgJUDi5disD4gqnW2un8M1PuFe8CP0GeD0FuNYO8aF7m%2BtoGIdtPUBTM%2BwuzixwZMU7Jz0VCtZ%2F2YLaCBhFWnovGOlrlJ6WjJqYOb%2F0%2B7tDR7EhjB90Ss6hb5qANGrkkmem8NxxjDZGof7ovH3Ovfqvo8IhPb5eauMEn0JXtTiSbO&X-Amz-Signature=66158ddecb3e78eba7cfce8e69a596b2382ecbd969a12ae6cf656ce5a5327e64&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I4DZLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCxn0WtS9h7lJDcTP3XQ7mctl5uE7WA9dLRanx%2FzIZmagIgZX0V6DpqyXdF3kl5exyv6YqAW3vYsCqF8rhDOmehS84qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbKpCV1bbeusEXemyrcA6%2FXHWaYiGCVyL6EkmGS%2FNzEux8R3wc%2FSl0eFKauUOiEDPw04cqMpHgh9WgSyVvZVx2FPfAp67JCzffBGGGNzBF2POpmjoKBB%2BFz37nrHtusCgsTFB%2F4zFX5F569wDF%2BxcHkAeF%2FKHNxuIXggTGTfPrNCi1aMV9SQzqjaV2THiX9oake3TKDI5Ow3qyLrxZYpjjkIi2qjjD0DwVklSZP%2BzcLtExR4x9rimBjT%2F2CaANXyiyMlrim%2BvCtO3BTG0nnd%2B2C%2FEKpIBvSQmmXVQf1ZTX5U6TPaEHFAVnJTDj4Nfe53uMWh5jlFaZaM%2B8NuGxhoXtZ4huO3P2IgpfFDztNwCnn2%2FHU%2BXq4a7XNrpMcxBZ6vDawQpNbxrr9mRf13An4OJM%2BjT2xxGIZATCgI2gsw9j9EhfujvMOhgK6QJTrceYgp6or27LsdABbBaSclPtUtIeLo%2Ffo2uUEziO%2B2FAvO4nQ08W0sUaK%2BMGkZHAxwSA8kBEZelT2pOP%2BCiWR%2F8XHZZoQOBu1MyIK%2Bgq2Wdr8rybQc2jLADq256f%2BTx%2BlOsSPINyGaDlkyEyE7ZGwJ8S5RgiE8pmeBOtsmdFNFkSKV1%2F5yFSxr26O%2FGPNEikEMhoJhVnd89MRjgHbiZZ%2FMKr79b4GOqUB0x32efcHG1gchDBY9eam2TQD745QpY4lhVc4%2FliKY9o0daEfgJUDi5disD4gqnW2un8M1PuFe8CP0GeD0FuNYO8aF7m%2BtoGIdtPUBTM%2BwuzixwZMU7Jz0VCtZ%2F2YLaCBhFWnovGOlrlJ6WjJqYOb%2F0%2B7tDR7EhjB90Ss6hb5qANGrkkmem8NxxjDZGof7ovH3Ovfqvo8IhPb5eauMEn0JXtTiSbO&X-Amz-Signature=605664160d6242ed8d73b66756a3eee95004d49802c632764d495e3689c6a6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I4DZLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCxn0WtS9h7lJDcTP3XQ7mctl5uE7WA9dLRanx%2FzIZmagIgZX0V6DpqyXdF3kl5exyv6YqAW3vYsCqF8rhDOmehS84qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbKpCV1bbeusEXemyrcA6%2FXHWaYiGCVyL6EkmGS%2FNzEux8R3wc%2FSl0eFKauUOiEDPw04cqMpHgh9WgSyVvZVx2FPfAp67JCzffBGGGNzBF2POpmjoKBB%2BFz37nrHtusCgsTFB%2F4zFX5F569wDF%2BxcHkAeF%2FKHNxuIXggTGTfPrNCi1aMV9SQzqjaV2THiX9oake3TKDI5Ow3qyLrxZYpjjkIi2qjjD0DwVklSZP%2BzcLtExR4x9rimBjT%2F2CaANXyiyMlrim%2BvCtO3BTG0nnd%2B2C%2FEKpIBvSQmmXVQf1ZTX5U6TPaEHFAVnJTDj4Nfe53uMWh5jlFaZaM%2B8NuGxhoXtZ4huO3P2IgpfFDztNwCnn2%2FHU%2BXq4a7XNrpMcxBZ6vDawQpNbxrr9mRf13An4OJM%2BjT2xxGIZATCgI2gsw9j9EhfujvMOhgK6QJTrceYgp6or27LsdABbBaSclPtUtIeLo%2Ffo2uUEziO%2B2FAvO4nQ08W0sUaK%2BMGkZHAxwSA8kBEZelT2pOP%2BCiWR%2F8XHZZoQOBu1MyIK%2Bgq2Wdr8rybQc2jLADq256f%2BTx%2BlOsSPINyGaDlkyEyE7ZGwJ8S5RgiE8pmeBOtsmdFNFkSKV1%2F5yFSxr26O%2FGPNEikEMhoJhVnd89MRjgHbiZZ%2FMKr79b4GOqUB0x32efcHG1gchDBY9eam2TQD745QpY4lhVc4%2FliKY9o0daEfgJUDi5disD4gqnW2un8M1PuFe8CP0GeD0FuNYO8aF7m%2BtoGIdtPUBTM%2BwuzixwZMU7Jz0VCtZ%2F2YLaCBhFWnovGOlrlJ6WjJqYOb%2F0%2B7tDR7EhjB90Ss6hb5qANGrkkmem8NxxjDZGof7ovH3Ovfqvo8IhPb5eauMEn0JXtTiSbO&X-Amz-Signature=161b98ae9c044eebe1da85c51950123917895037452b4ef8a8b27614a86315ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I4DZLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCxn0WtS9h7lJDcTP3XQ7mctl5uE7WA9dLRanx%2FzIZmagIgZX0V6DpqyXdF3kl5exyv6YqAW3vYsCqF8rhDOmehS84qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbKpCV1bbeusEXemyrcA6%2FXHWaYiGCVyL6EkmGS%2FNzEux8R3wc%2FSl0eFKauUOiEDPw04cqMpHgh9WgSyVvZVx2FPfAp67JCzffBGGGNzBF2POpmjoKBB%2BFz37nrHtusCgsTFB%2F4zFX5F569wDF%2BxcHkAeF%2FKHNxuIXggTGTfPrNCi1aMV9SQzqjaV2THiX9oake3TKDI5Ow3qyLrxZYpjjkIi2qjjD0DwVklSZP%2BzcLtExR4x9rimBjT%2F2CaANXyiyMlrim%2BvCtO3BTG0nnd%2B2C%2FEKpIBvSQmmXVQf1ZTX5U6TPaEHFAVnJTDj4Nfe53uMWh5jlFaZaM%2B8NuGxhoXtZ4huO3P2IgpfFDztNwCnn2%2FHU%2BXq4a7XNrpMcxBZ6vDawQpNbxrr9mRf13An4OJM%2BjT2xxGIZATCgI2gsw9j9EhfujvMOhgK6QJTrceYgp6or27LsdABbBaSclPtUtIeLo%2Ffo2uUEziO%2B2FAvO4nQ08W0sUaK%2BMGkZHAxwSA8kBEZelT2pOP%2BCiWR%2F8XHZZoQOBu1MyIK%2Bgq2Wdr8rybQc2jLADq256f%2BTx%2BlOsSPINyGaDlkyEyE7ZGwJ8S5RgiE8pmeBOtsmdFNFkSKV1%2F5yFSxr26O%2FGPNEikEMhoJhVnd89MRjgHbiZZ%2FMKr79b4GOqUB0x32efcHG1gchDBY9eam2TQD745QpY4lhVc4%2FliKY9o0daEfgJUDi5disD4gqnW2un8M1PuFe8CP0GeD0FuNYO8aF7m%2BtoGIdtPUBTM%2BwuzixwZMU7Jz0VCtZ%2F2YLaCBhFWnovGOlrlJ6WjJqYOb%2F0%2B7tDR7EhjB90Ss6hb5qANGrkkmem8NxxjDZGof7ovH3Ovfqvo8IhPb5eauMEn0JXtTiSbO&X-Amz-Signature=4568121fed4bc93e6eef08c1913782a2a254297a5cb096f090a4158babd0d4db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I4DZLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCxn0WtS9h7lJDcTP3XQ7mctl5uE7WA9dLRanx%2FzIZmagIgZX0V6DpqyXdF3kl5exyv6YqAW3vYsCqF8rhDOmehS84qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbKpCV1bbeusEXemyrcA6%2FXHWaYiGCVyL6EkmGS%2FNzEux8R3wc%2FSl0eFKauUOiEDPw04cqMpHgh9WgSyVvZVx2FPfAp67JCzffBGGGNzBF2POpmjoKBB%2BFz37nrHtusCgsTFB%2F4zFX5F569wDF%2BxcHkAeF%2FKHNxuIXggTGTfPrNCi1aMV9SQzqjaV2THiX9oake3TKDI5Ow3qyLrxZYpjjkIi2qjjD0DwVklSZP%2BzcLtExR4x9rimBjT%2F2CaANXyiyMlrim%2BvCtO3BTG0nnd%2B2C%2FEKpIBvSQmmXVQf1ZTX5U6TPaEHFAVnJTDj4Nfe53uMWh5jlFaZaM%2B8NuGxhoXtZ4huO3P2IgpfFDztNwCnn2%2FHU%2BXq4a7XNrpMcxBZ6vDawQpNbxrr9mRf13An4OJM%2BjT2xxGIZATCgI2gsw9j9EhfujvMOhgK6QJTrceYgp6or27LsdABbBaSclPtUtIeLo%2Ffo2uUEziO%2B2FAvO4nQ08W0sUaK%2BMGkZHAxwSA8kBEZelT2pOP%2BCiWR%2F8XHZZoQOBu1MyIK%2Bgq2Wdr8rybQc2jLADq256f%2BTx%2BlOsSPINyGaDlkyEyE7ZGwJ8S5RgiE8pmeBOtsmdFNFkSKV1%2F5yFSxr26O%2FGPNEikEMhoJhVnd89MRjgHbiZZ%2FMKr79b4GOqUB0x32efcHG1gchDBY9eam2TQD745QpY4lhVc4%2FliKY9o0daEfgJUDi5disD4gqnW2un8M1PuFe8CP0GeD0FuNYO8aF7m%2BtoGIdtPUBTM%2BwuzixwZMU7Jz0VCtZ%2F2YLaCBhFWnovGOlrlJ6WjJqYOb%2F0%2B7tDR7EhjB90Ss6hb5qANGrkkmem8NxxjDZGof7ovH3Ovfqvo8IhPb5eauMEn0JXtTiSbO&X-Amz-Signature=dc685579e5acd183b3db64af3461e730228e12c17f2704796c33fb213c6b0dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676I4DZLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCxn0WtS9h7lJDcTP3XQ7mctl5uE7WA9dLRanx%2FzIZmagIgZX0V6DpqyXdF3kl5exyv6YqAW3vYsCqF8rhDOmehS84qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbKpCV1bbeusEXemyrcA6%2FXHWaYiGCVyL6EkmGS%2FNzEux8R3wc%2FSl0eFKauUOiEDPw04cqMpHgh9WgSyVvZVx2FPfAp67JCzffBGGGNzBF2POpmjoKBB%2BFz37nrHtusCgsTFB%2F4zFX5F569wDF%2BxcHkAeF%2FKHNxuIXggTGTfPrNCi1aMV9SQzqjaV2THiX9oake3TKDI5Ow3qyLrxZYpjjkIi2qjjD0DwVklSZP%2BzcLtExR4x9rimBjT%2F2CaANXyiyMlrim%2BvCtO3BTG0nnd%2B2C%2FEKpIBvSQmmXVQf1ZTX5U6TPaEHFAVnJTDj4Nfe53uMWh5jlFaZaM%2B8NuGxhoXtZ4huO3P2IgpfFDztNwCnn2%2FHU%2BXq4a7XNrpMcxBZ6vDawQpNbxrr9mRf13An4OJM%2BjT2xxGIZATCgI2gsw9j9EhfujvMOhgK6QJTrceYgp6or27LsdABbBaSclPtUtIeLo%2Ffo2uUEziO%2B2FAvO4nQ08W0sUaK%2BMGkZHAxwSA8kBEZelT2pOP%2BCiWR%2F8XHZZoQOBu1MyIK%2Bgq2Wdr8rybQc2jLADq256f%2BTx%2BlOsSPINyGaDlkyEyE7ZGwJ8S5RgiE8pmeBOtsmdFNFkSKV1%2F5yFSxr26O%2FGPNEikEMhoJhVnd89MRjgHbiZZ%2FMKr79b4GOqUB0x32efcHG1gchDBY9eam2TQD745QpY4lhVc4%2FliKY9o0daEfgJUDi5disD4gqnW2un8M1PuFe8CP0GeD0FuNYO8aF7m%2BtoGIdtPUBTM%2BwuzixwZMU7Jz0VCtZ%2F2YLaCBhFWnovGOlrlJ6WjJqYOb%2F0%2B7tDR7EhjB90Ss6hb5qANGrkkmem8NxxjDZGof7ovH3Ovfqvo8IhPb5eauMEn0JXtTiSbO&X-Amz-Signature=773a507ff49ecca907c388806fb01b68ab753907ca853463ed978460232f134c&X-Amz-SignedHeaders=host&x-id=GetObject)
