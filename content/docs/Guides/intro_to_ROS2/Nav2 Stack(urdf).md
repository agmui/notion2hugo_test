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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FQ57A2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNR4pV0QgJR8SKOL4V%2BCxh7fAKZdQd2qXij9B21m8xQIgCaqQOSFrA7Sbb%2Fm2oQixYaY%2FMUVXm8b52tJenqOGaQAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGeTjALthFrzczZCSrcA6CdjUhtIWrqpkDVxSfNigMPIJ7S2JmG1IHqRp%2F%2FQ%2BCU4dKu4ReWxWeDD6%2FJ7FCx56yOk74F2zmgBhicaCyMRPw9hy0PPq1svefutXenplYbGQwWepXYty77Ossg8XPPttFO4iD40Mqf1FEWITGRCA%2B6fOALhFkD5WH6CvtUVRyyQv6Sy6GDxhcSi1y3BEZ0ajdm%2BNINlzhZUbebxRUCrcCoGiCi5tSehT1dyIkmphkvhqm98CIDfbyBiV6wJT6kc22oKx8rCUQj0VO8iZe4dRsOz%2FRkDUspz%2F%2FW%2FJYnGTUJjN6eB6WJPU1hu9BDQz7ZybupxhNU%2FwFdIZQqud7agKe1DOgTuFLU7N28PjiZ6TxF34vrf89qvLE7hZxrXNYa2yUPTAMWhISc7hyyoOKnmrs924TQNXJMh%2BHFI2VUoVYgDlAZDxqAnAfKx6A%2BM%2BmTLZrWq4rXPcVA8zJ7H%2BBGdxzo01M3x9X4VUq%2Fr9tRkZNIKI4xNJjSVcZeXPldSW8fZfY4Tgeps0eFkDmwUs71ia0Kn4EMBmcEff6vZsNY3BUD8L0Sg9qRZqcn8svy9yYGpoDs0rR9n4Du8XusMG6VuSTPsqPMXrXgEx2rUGxYdIG0jHE4CCh8peV0Vu26MNOixcAGOqUBTy%2BiGxmYsWSowfDjoreXOek1z6c8UpHZXbmsqott4POi7kYfk94gukiDBs%2BEG9QiveXIa%2BHDsy9HZk7tlsaTdcRnXWZD0dTYDt04DCGW2rOnBE5W9fcq6fhMQ8wzWUj7vdVq2LJgSI%2BaLfbpUsc13wmkofoK%2B6AvHanJiBChhhZ1tFlgmkAAT3bwbs%2BZ%2F0cMba2ZJkkXWz%2BdmbbN%2BftMxnjpKZD4&X-Amz-Signature=a6a9a5a41cff21fa931d8cc7267f5e341dc58b4eb76b4433e6b98c16cf84d06c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FQ57A2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNR4pV0QgJR8SKOL4V%2BCxh7fAKZdQd2qXij9B21m8xQIgCaqQOSFrA7Sbb%2Fm2oQixYaY%2FMUVXm8b52tJenqOGaQAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGeTjALthFrzczZCSrcA6CdjUhtIWrqpkDVxSfNigMPIJ7S2JmG1IHqRp%2F%2FQ%2BCU4dKu4ReWxWeDD6%2FJ7FCx56yOk74F2zmgBhicaCyMRPw9hy0PPq1svefutXenplYbGQwWepXYty77Ossg8XPPttFO4iD40Mqf1FEWITGRCA%2B6fOALhFkD5WH6CvtUVRyyQv6Sy6GDxhcSi1y3BEZ0ajdm%2BNINlzhZUbebxRUCrcCoGiCi5tSehT1dyIkmphkvhqm98CIDfbyBiV6wJT6kc22oKx8rCUQj0VO8iZe4dRsOz%2FRkDUspz%2F%2FW%2FJYnGTUJjN6eB6WJPU1hu9BDQz7ZybupxhNU%2FwFdIZQqud7agKe1DOgTuFLU7N28PjiZ6TxF34vrf89qvLE7hZxrXNYa2yUPTAMWhISc7hyyoOKnmrs924TQNXJMh%2BHFI2VUoVYgDlAZDxqAnAfKx6A%2BM%2BmTLZrWq4rXPcVA8zJ7H%2BBGdxzo01M3x9X4VUq%2Fr9tRkZNIKI4xNJjSVcZeXPldSW8fZfY4Tgeps0eFkDmwUs71ia0Kn4EMBmcEff6vZsNY3BUD8L0Sg9qRZqcn8svy9yYGpoDs0rR9n4Du8XusMG6VuSTPsqPMXrXgEx2rUGxYdIG0jHE4CCh8peV0Vu26MNOixcAGOqUBTy%2BiGxmYsWSowfDjoreXOek1z6c8UpHZXbmsqott4POi7kYfk94gukiDBs%2BEG9QiveXIa%2BHDsy9HZk7tlsaTdcRnXWZD0dTYDt04DCGW2rOnBE5W9fcq6fhMQ8wzWUj7vdVq2LJgSI%2BaLfbpUsc13wmkofoK%2B6AvHanJiBChhhZ1tFlgmkAAT3bwbs%2BZ%2F0cMba2ZJkkXWz%2BdmbbN%2BftMxnjpKZD4&X-Amz-Signature=3374010ef40d36c5d2fc6fb39e86a1e72a564750ad89736f07dd4ee8e0036dac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FQ57A2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNR4pV0QgJR8SKOL4V%2BCxh7fAKZdQd2qXij9B21m8xQIgCaqQOSFrA7Sbb%2Fm2oQixYaY%2FMUVXm8b52tJenqOGaQAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGeTjALthFrzczZCSrcA6CdjUhtIWrqpkDVxSfNigMPIJ7S2JmG1IHqRp%2F%2FQ%2BCU4dKu4ReWxWeDD6%2FJ7FCx56yOk74F2zmgBhicaCyMRPw9hy0PPq1svefutXenplYbGQwWepXYty77Ossg8XPPttFO4iD40Mqf1FEWITGRCA%2B6fOALhFkD5WH6CvtUVRyyQv6Sy6GDxhcSi1y3BEZ0ajdm%2BNINlzhZUbebxRUCrcCoGiCi5tSehT1dyIkmphkvhqm98CIDfbyBiV6wJT6kc22oKx8rCUQj0VO8iZe4dRsOz%2FRkDUspz%2F%2FW%2FJYnGTUJjN6eB6WJPU1hu9BDQz7ZybupxhNU%2FwFdIZQqud7agKe1DOgTuFLU7N28PjiZ6TxF34vrf89qvLE7hZxrXNYa2yUPTAMWhISc7hyyoOKnmrs924TQNXJMh%2BHFI2VUoVYgDlAZDxqAnAfKx6A%2BM%2BmTLZrWq4rXPcVA8zJ7H%2BBGdxzo01M3x9X4VUq%2Fr9tRkZNIKI4xNJjSVcZeXPldSW8fZfY4Tgeps0eFkDmwUs71ia0Kn4EMBmcEff6vZsNY3BUD8L0Sg9qRZqcn8svy9yYGpoDs0rR9n4Du8XusMG6VuSTPsqPMXrXgEx2rUGxYdIG0jHE4CCh8peV0Vu26MNOixcAGOqUBTy%2BiGxmYsWSowfDjoreXOek1z6c8UpHZXbmsqott4POi7kYfk94gukiDBs%2BEG9QiveXIa%2BHDsy9HZk7tlsaTdcRnXWZD0dTYDt04DCGW2rOnBE5W9fcq6fhMQ8wzWUj7vdVq2LJgSI%2BaLfbpUsc13wmkofoK%2B6AvHanJiBChhhZ1tFlgmkAAT3bwbs%2BZ%2F0cMba2ZJkkXWz%2BdmbbN%2BftMxnjpKZD4&X-Amz-Signature=52e8964c72166279ded4dff994efdcca4eab524026ddb73f0b940a9ffde5d046&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FQ57A2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNR4pV0QgJR8SKOL4V%2BCxh7fAKZdQd2qXij9B21m8xQIgCaqQOSFrA7Sbb%2Fm2oQixYaY%2FMUVXm8b52tJenqOGaQAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGeTjALthFrzczZCSrcA6CdjUhtIWrqpkDVxSfNigMPIJ7S2JmG1IHqRp%2F%2FQ%2BCU4dKu4ReWxWeDD6%2FJ7FCx56yOk74F2zmgBhicaCyMRPw9hy0PPq1svefutXenplYbGQwWepXYty77Ossg8XPPttFO4iD40Mqf1FEWITGRCA%2B6fOALhFkD5WH6CvtUVRyyQv6Sy6GDxhcSi1y3BEZ0ajdm%2BNINlzhZUbebxRUCrcCoGiCi5tSehT1dyIkmphkvhqm98CIDfbyBiV6wJT6kc22oKx8rCUQj0VO8iZe4dRsOz%2FRkDUspz%2F%2FW%2FJYnGTUJjN6eB6WJPU1hu9BDQz7ZybupxhNU%2FwFdIZQqud7agKe1DOgTuFLU7N28PjiZ6TxF34vrf89qvLE7hZxrXNYa2yUPTAMWhISc7hyyoOKnmrs924TQNXJMh%2BHFI2VUoVYgDlAZDxqAnAfKx6A%2BM%2BmTLZrWq4rXPcVA8zJ7H%2BBGdxzo01M3x9X4VUq%2Fr9tRkZNIKI4xNJjSVcZeXPldSW8fZfY4Tgeps0eFkDmwUs71ia0Kn4EMBmcEff6vZsNY3BUD8L0Sg9qRZqcn8svy9yYGpoDs0rR9n4Du8XusMG6VuSTPsqPMXrXgEx2rUGxYdIG0jHE4CCh8peV0Vu26MNOixcAGOqUBTy%2BiGxmYsWSowfDjoreXOek1z6c8UpHZXbmsqott4POi7kYfk94gukiDBs%2BEG9QiveXIa%2BHDsy9HZk7tlsaTdcRnXWZD0dTYDt04DCGW2rOnBE5W9fcq6fhMQ8wzWUj7vdVq2LJgSI%2BaLfbpUsc13wmkofoK%2B6AvHanJiBChhhZ1tFlgmkAAT3bwbs%2BZ%2F0cMba2ZJkkXWz%2BdmbbN%2BftMxnjpKZD4&X-Amz-Signature=d80b805b5a823a9185e618a6f22c4019e64aff5536a1ebed4636fd17454c2175&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FQ57A2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNR4pV0QgJR8SKOL4V%2BCxh7fAKZdQd2qXij9B21m8xQIgCaqQOSFrA7Sbb%2Fm2oQixYaY%2FMUVXm8b52tJenqOGaQAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGeTjALthFrzczZCSrcA6CdjUhtIWrqpkDVxSfNigMPIJ7S2JmG1IHqRp%2F%2FQ%2BCU4dKu4ReWxWeDD6%2FJ7FCx56yOk74F2zmgBhicaCyMRPw9hy0PPq1svefutXenplYbGQwWepXYty77Ossg8XPPttFO4iD40Mqf1FEWITGRCA%2B6fOALhFkD5WH6CvtUVRyyQv6Sy6GDxhcSi1y3BEZ0ajdm%2BNINlzhZUbebxRUCrcCoGiCi5tSehT1dyIkmphkvhqm98CIDfbyBiV6wJT6kc22oKx8rCUQj0VO8iZe4dRsOz%2FRkDUspz%2F%2FW%2FJYnGTUJjN6eB6WJPU1hu9BDQz7ZybupxhNU%2FwFdIZQqud7agKe1DOgTuFLU7N28PjiZ6TxF34vrf89qvLE7hZxrXNYa2yUPTAMWhISc7hyyoOKnmrs924TQNXJMh%2BHFI2VUoVYgDlAZDxqAnAfKx6A%2BM%2BmTLZrWq4rXPcVA8zJ7H%2BBGdxzo01M3x9X4VUq%2Fr9tRkZNIKI4xNJjSVcZeXPldSW8fZfY4Tgeps0eFkDmwUs71ia0Kn4EMBmcEff6vZsNY3BUD8L0Sg9qRZqcn8svy9yYGpoDs0rR9n4Du8XusMG6VuSTPsqPMXrXgEx2rUGxYdIG0jHE4CCh8peV0Vu26MNOixcAGOqUBTy%2BiGxmYsWSowfDjoreXOek1z6c8UpHZXbmsqott4POi7kYfk94gukiDBs%2BEG9QiveXIa%2BHDsy9HZk7tlsaTdcRnXWZD0dTYDt04DCGW2rOnBE5W9fcq6fhMQ8wzWUj7vdVq2LJgSI%2BaLfbpUsc13wmkofoK%2B6AvHanJiBChhhZ1tFlgmkAAT3bwbs%2BZ%2F0cMba2ZJkkXWz%2BdmbbN%2BftMxnjpKZD4&X-Amz-Signature=7defb5c7ab7ecc8de27eaaa915dd54fae8bf113c56ce2dd711f63c1902453863&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FQ57A2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNR4pV0QgJR8SKOL4V%2BCxh7fAKZdQd2qXij9B21m8xQIgCaqQOSFrA7Sbb%2Fm2oQixYaY%2FMUVXm8b52tJenqOGaQAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGeTjALthFrzczZCSrcA6CdjUhtIWrqpkDVxSfNigMPIJ7S2JmG1IHqRp%2F%2FQ%2BCU4dKu4ReWxWeDD6%2FJ7FCx56yOk74F2zmgBhicaCyMRPw9hy0PPq1svefutXenplYbGQwWepXYty77Ossg8XPPttFO4iD40Mqf1FEWITGRCA%2B6fOALhFkD5WH6CvtUVRyyQv6Sy6GDxhcSi1y3BEZ0ajdm%2BNINlzhZUbebxRUCrcCoGiCi5tSehT1dyIkmphkvhqm98CIDfbyBiV6wJT6kc22oKx8rCUQj0VO8iZe4dRsOz%2FRkDUspz%2F%2FW%2FJYnGTUJjN6eB6WJPU1hu9BDQz7ZybupxhNU%2FwFdIZQqud7agKe1DOgTuFLU7N28PjiZ6TxF34vrf89qvLE7hZxrXNYa2yUPTAMWhISc7hyyoOKnmrs924TQNXJMh%2BHFI2VUoVYgDlAZDxqAnAfKx6A%2BM%2BmTLZrWq4rXPcVA8zJ7H%2BBGdxzo01M3x9X4VUq%2Fr9tRkZNIKI4xNJjSVcZeXPldSW8fZfY4Tgeps0eFkDmwUs71ia0Kn4EMBmcEff6vZsNY3BUD8L0Sg9qRZqcn8svy9yYGpoDs0rR9n4Du8XusMG6VuSTPsqPMXrXgEx2rUGxYdIG0jHE4CCh8peV0Vu26MNOixcAGOqUBTy%2BiGxmYsWSowfDjoreXOek1z6c8UpHZXbmsqott4POi7kYfk94gukiDBs%2BEG9QiveXIa%2BHDsy9HZk7tlsaTdcRnXWZD0dTYDt04DCGW2rOnBE5W9fcq6fhMQ8wzWUj7vdVq2LJgSI%2BaLfbpUsc13wmkofoK%2B6AvHanJiBChhhZ1tFlgmkAAT3bwbs%2BZ%2F0cMba2ZJkkXWz%2BdmbbN%2BftMxnjpKZD4&X-Amz-Signature=7c03997760d19311d6dc0b34d818890285ceecbfb2b983008cf0075f3fff3713&X-Amz-SignedHeaders=host&x-id=GetObject)
