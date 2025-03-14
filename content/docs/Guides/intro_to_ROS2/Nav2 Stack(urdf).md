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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY53JNS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gzd2WWh2rRoNFNYJUwzSZRsvf7zYOWPxKyihMwLETwIgIP2gwLWCMx%2B3oN%2BMdYf%2FFoqyW0tUO6a4QzniZxvDoNcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLPEzXEbRaNhxez2iCrcA8znw5GmrcQvBsxssnd34wcnEUebcdjFg%2F66PAT8xhfygekgdr02jws6zpBQ9QPMmlumz5LunCznH%2B7SaJCokhu0CTo58hOwxheuKJLKLKBh9lkNg3x6YIB3cYI4Por5VTKuQRN2eoqXfWqcukoUC9ItkzN5QFExQD3kQAn7PCPhIiYg2Xk8gZCrWjC7Qzj9sm4ecuJBaG62y%2F%2BBxGxv5go%2F0gehhTn03rx3DRAKGF5KyDFiwzlZtk1u30v7twto978S34QTKtYqS5KQ0KFr49jBC8EdO7xGE9eIbxbNTERLGMkuRPZ%2BLZf1hD6wduSt1rOFb%2FLbygEvByWH%2FuvF6vVg%2FOp3lyFssccoZBTOjedak5NZotyQ06V5rdDcsmLoceiS5fWa4pCSRpLDQUdGuNlsYvPY%2BCFMhSLJBGcWGHqEr1dKHV5qS51M078r49CIwuDFIVu58GHX%2BvJ%2FwtxhcX5HwXRZWm6Hi6RTIArl2iTC7eAcsUjHfDrLvUweUdckTMGcO1iuuFRCeBjoYvlMu1UzndCaL7E9JLBd8qiiMbsnWmQeJYv59JSnm6Ymy%2FsCavXSSQ48tUWJaZM%2B0hZcUPPoD3cb2Rpc5f10KKriLhFjAFMQBsimYl7MHj3mML3r1r4GOqUB9llv7Mv9AIChHykXVO%2BLtubYlb8jA54a4ZAr8UZ0st%2B0UbJcFhgYFUVtaNNT%2Ffwy5ZWvZ8OcgjNTZ%2BVAGLReuCbQqTiEqBRdYvwHT5yqUNWsIVd4MIQkhx%2BotgSl8PIXJpHEtbdcbuNOSTIm7pF6laRi5MtlzbbiX1p7Gh0OVeU7uANq%2BjFKhZtZVlZVZ7p2MyJOG9jC6vGXiPfC%2BpQLoLfjCjkn&X-Amz-Signature=4013d29a7ccaa5fa6d8a2f382062ed712dbd6d149e0eb903887125f52a205ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY53JNS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gzd2WWh2rRoNFNYJUwzSZRsvf7zYOWPxKyihMwLETwIgIP2gwLWCMx%2B3oN%2BMdYf%2FFoqyW0tUO6a4QzniZxvDoNcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLPEzXEbRaNhxez2iCrcA8znw5GmrcQvBsxssnd34wcnEUebcdjFg%2F66PAT8xhfygekgdr02jws6zpBQ9QPMmlumz5LunCznH%2B7SaJCokhu0CTo58hOwxheuKJLKLKBh9lkNg3x6YIB3cYI4Por5VTKuQRN2eoqXfWqcukoUC9ItkzN5QFExQD3kQAn7PCPhIiYg2Xk8gZCrWjC7Qzj9sm4ecuJBaG62y%2F%2BBxGxv5go%2F0gehhTn03rx3DRAKGF5KyDFiwzlZtk1u30v7twto978S34QTKtYqS5KQ0KFr49jBC8EdO7xGE9eIbxbNTERLGMkuRPZ%2BLZf1hD6wduSt1rOFb%2FLbygEvByWH%2FuvF6vVg%2FOp3lyFssccoZBTOjedak5NZotyQ06V5rdDcsmLoceiS5fWa4pCSRpLDQUdGuNlsYvPY%2BCFMhSLJBGcWGHqEr1dKHV5qS51M078r49CIwuDFIVu58GHX%2BvJ%2FwtxhcX5HwXRZWm6Hi6RTIArl2iTC7eAcsUjHfDrLvUweUdckTMGcO1iuuFRCeBjoYvlMu1UzndCaL7E9JLBd8qiiMbsnWmQeJYv59JSnm6Ymy%2FsCavXSSQ48tUWJaZM%2B0hZcUPPoD3cb2Rpc5f10KKriLhFjAFMQBsimYl7MHj3mML3r1r4GOqUB9llv7Mv9AIChHykXVO%2BLtubYlb8jA54a4ZAr8UZ0st%2B0UbJcFhgYFUVtaNNT%2Ffwy5ZWvZ8OcgjNTZ%2BVAGLReuCbQqTiEqBRdYvwHT5yqUNWsIVd4MIQkhx%2BotgSl8PIXJpHEtbdcbuNOSTIm7pF6laRi5MtlzbbiX1p7Gh0OVeU7uANq%2BjFKhZtZVlZVZ7p2MyJOG9jC6vGXiPfC%2BpQLoLfjCjkn&X-Amz-Signature=570f75af3ce3a3b8f5c380221001db5311d7257497cc2c31b3cd3cdc65b306f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY53JNS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gzd2WWh2rRoNFNYJUwzSZRsvf7zYOWPxKyihMwLETwIgIP2gwLWCMx%2B3oN%2BMdYf%2FFoqyW0tUO6a4QzniZxvDoNcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLPEzXEbRaNhxez2iCrcA8znw5GmrcQvBsxssnd34wcnEUebcdjFg%2F66PAT8xhfygekgdr02jws6zpBQ9QPMmlumz5LunCznH%2B7SaJCokhu0CTo58hOwxheuKJLKLKBh9lkNg3x6YIB3cYI4Por5VTKuQRN2eoqXfWqcukoUC9ItkzN5QFExQD3kQAn7PCPhIiYg2Xk8gZCrWjC7Qzj9sm4ecuJBaG62y%2F%2BBxGxv5go%2F0gehhTn03rx3DRAKGF5KyDFiwzlZtk1u30v7twto978S34QTKtYqS5KQ0KFr49jBC8EdO7xGE9eIbxbNTERLGMkuRPZ%2BLZf1hD6wduSt1rOFb%2FLbygEvByWH%2FuvF6vVg%2FOp3lyFssccoZBTOjedak5NZotyQ06V5rdDcsmLoceiS5fWa4pCSRpLDQUdGuNlsYvPY%2BCFMhSLJBGcWGHqEr1dKHV5qS51M078r49CIwuDFIVu58GHX%2BvJ%2FwtxhcX5HwXRZWm6Hi6RTIArl2iTC7eAcsUjHfDrLvUweUdckTMGcO1iuuFRCeBjoYvlMu1UzndCaL7E9JLBd8qiiMbsnWmQeJYv59JSnm6Ymy%2FsCavXSSQ48tUWJaZM%2B0hZcUPPoD3cb2Rpc5f10KKriLhFjAFMQBsimYl7MHj3mML3r1r4GOqUB9llv7Mv9AIChHykXVO%2BLtubYlb8jA54a4ZAr8UZ0st%2B0UbJcFhgYFUVtaNNT%2Ffwy5ZWvZ8OcgjNTZ%2BVAGLReuCbQqTiEqBRdYvwHT5yqUNWsIVd4MIQkhx%2BotgSl8PIXJpHEtbdcbuNOSTIm7pF6laRi5MtlzbbiX1p7Gh0OVeU7uANq%2BjFKhZtZVlZVZ7p2MyJOG9jC6vGXiPfC%2BpQLoLfjCjkn&X-Amz-Signature=2fd8d5ca271065afd3b67f69bb02b2f9012890a535d72b3fcc77cb37cbe16560&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY53JNS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gzd2WWh2rRoNFNYJUwzSZRsvf7zYOWPxKyihMwLETwIgIP2gwLWCMx%2B3oN%2BMdYf%2FFoqyW0tUO6a4QzniZxvDoNcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLPEzXEbRaNhxez2iCrcA8znw5GmrcQvBsxssnd34wcnEUebcdjFg%2F66PAT8xhfygekgdr02jws6zpBQ9QPMmlumz5LunCznH%2B7SaJCokhu0CTo58hOwxheuKJLKLKBh9lkNg3x6YIB3cYI4Por5VTKuQRN2eoqXfWqcukoUC9ItkzN5QFExQD3kQAn7PCPhIiYg2Xk8gZCrWjC7Qzj9sm4ecuJBaG62y%2F%2BBxGxv5go%2F0gehhTn03rx3DRAKGF5KyDFiwzlZtk1u30v7twto978S34QTKtYqS5KQ0KFr49jBC8EdO7xGE9eIbxbNTERLGMkuRPZ%2BLZf1hD6wduSt1rOFb%2FLbygEvByWH%2FuvF6vVg%2FOp3lyFssccoZBTOjedak5NZotyQ06V5rdDcsmLoceiS5fWa4pCSRpLDQUdGuNlsYvPY%2BCFMhSLJBGcWGHqEr1dKHV5qS51M078r49CIwuDFIVu58GHX%2BvJ%2FwtxhcX5HwXRZWm6Hi6RTIArl2iTC7eAcsUjHfDrLvUweUdckTMGcO1iuuFRCeBjoYvlMu1UzndCaL7E9JLBd8qiiMbsnWmQeJYv59JSnm6Ymy%2FsCavXSSQ48tUWJaZM%2B0hZcUPPoD3cb2Rpc5f10KKriLhFjAFMQBsimYl7MHj3mML3r1r4GOqUB9llv7Mv9AIChHykXVO%2BLtubYlb8jA54a4ZAr8UZ0st%2B0UbJcFhgYFUVtaNNT%2Ffwy5ZWvZ8OcgjNTZ%2BVAGLReuCbQqTiEqBRdYvwHT5yqUNWsIVd4MIQkhx%2BotgSl8PIXJpHEtbdcbuNOSTIm7pF6laRi5MtlzbbiX1p7Gh0OVeU7uANq%2BjFKhZtZVlZVZ7p2MyJOG9jC6vGXiPfC%2BpQLoLfjCjkn&X-Amz-Signature=7d3026d8eab55306f2aa5503c4b76456c9c408df35ca8f1680e62eb47627e702&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY53JNS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gzd2WWh2rRoNFNYJUwzSZRsvf7zYOWPxKyihMwLETwIgIP2gwLWCMx%2B3oN%2BMdYf%2FFoqyW0tUO6a4QzniZxvDoNcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLPEzXEbRaNhxez2iCrcA8znw5GmrcQvBsxssnd34wcnEUebcdjFg%2F66PAT8xhfygekgdr02jws6zpBQ9QPMmlumz5LunCznH%2B7SaJCokhu0CTo58hOwxheuKJLKLKBh9lkNg3x6YIB3cYI4Por5VTKuQRN2eoqXfWqcukoUC9ItkzN5QFExQD3kQAn7PCPhIiYg2Xk8gZCrWjC7Qzj9sm4ecuJBaG62y%2F%2BBxGxv5go%2F0gehhTn03rx3DRAKGF5KyDFiwzlZtk1u30v7twto978S34QTKtYqS5KQ0KFr49jBC8EdO7xGE9eIbxbNTERLGMkuRPZ%2BLZf1hD6wduSt1rOFb%2FLbygEvByWH%2FuvF6vVg%2FOp3lyFssccoZBTOjedak5NZotyQ06V5rdDcsmLoceiS5fWa4pCSRpLDQUdGuNlsYvPY%2BCFMhSLJBGcWGHqEr1dKHV5qS51M078r49CIwuDFIVu58GHX%2BvJ%2FwtxhcX5HwXRZWm6Hi6RTIArl2iTC7eAcsUjHfDrLvUweUdckTMGcO1iuuFRCeBjoYvlMu1UzndCaL7E9JLBd8qiiMbsnWmQeJYv59JSnm6Ymy%2FsCavXSSQ48tUWJaZM%2B0hZcUPPoD3cb2Rpc5f10KKriLhFjAFMQBsimYl7MHj3mML3r1r4GOqUB9llv7Mv9AIChHykXVO%2BLtubYlb8jA54a4ZAr8UZ0st%2B0UbJcFhgYFUVtaNNT%2Ffwy5ZWvZ8OcgjNTZ%2BVAGLReuCbQqTiEqBRdYvwHT5yqUNWsIVd4MIQkhx%2BotgSl8PIXJpHEtbdcbuNOSTIm7pF6laRi5MtlzbbiX1p7Gh0OVeU7uANq%2BjFKhZtZVlZVZ7p2MyJOG9jC6vGXiPfC%2BpQLoLfjCjkn&X-Amz-Signature=3e4e9909e0fab731a4671351e7ec697023e6779334079aa684871c16ef509211&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRY53JNS%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gzd2WWh2rRoNFNYJUwzSZRsvf7zYOWPxKyihMwLETwIgIP2gwLWCMx%2B3oN%2BMdYf%2FFoqyW0tUO6a4QzniZxvDoNcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLPEzXEbRaNhxez2iCrcA8znw5GmrcQvBsxssnd34wcnEUebcdjFg%2F66PAT8xhfygekgdr02jws6zpBQ9QPMmlumz5LunCznH%2B7SaJCokhu0CTo58hOwxheuKJLKLKBh9lkNg3x6YIB3cYI4Por5VTKuQRN2eoqXfWqcukoUC9ItkzN5QFExQD3kQAn7PCPhIiYg2Xk8gZCrWjC7Qzj9sm4ecuJBaG62y%2F%2BBxGxv5go%2F0gehhTn03rx3DRAKGF5KyDFiwzlZtk1u30v7twto978S34QTKtYqS5KQ0KFr49jBC8EdO7xGE9eIbxbNTERLGMkuRPZ%2BLZf1hD6wduSt1rOFb%2FLbygEvByWH%2FuvF6vVg%2FOp3lyFssccoZBTOjedak5NZotyQ06V5rdDcsmLoceiS5fWa4pCSRpLDQUdGuNlsYvPY%2BCFMhSLJBGcWGHqEr1dKHV5qS51M078r49CIwuDFIVu58GHX%2BvJ%2FwtxhcX5HwXRZWm6Hi6RTIArl2iTC7eAcsUjHfDrLvUweUdckTMGcO1iuuFRCeBjoYvlMu1UzndCaL7E9JLBd8qiiMbsnWmQeJYv59JSnm6Ymy%2FsCavXSSQ48tUWJaZM%2B0hZcUPPoD3cb2Rpc5f10KKriLhFjAFMQBsimYl7MHj3mML3r1r4GOqUB9llv7Mv9AIChHykXVO%2BLtubYlb8jA54a4ZAr8UZ0st%2B0UbJcFhgYFUVtaNNT%2Ffwy5ZWvZ8OcgjNTZ%2BVAGLReuCbQqTiEqBRdYvwHT5yqUNWsIVd4MIQkhx%2BotgSl8PIXJpHEtbdcbuNOSTIm7pF6laRi5MtlzbbiX1p7Gh0OVeU7uANq%2BjFKhZtZVlZVZ7p2MyJOG9jC6vGXiPfC%2BpQLoLfjCjkn&X-Amz-Signature=1891972998560fbb2ac039fae2966d36602b7d6f3376eedc3ad67e05a6be8f25&X-Amz-SignedHeaders=host&x-id=GetObject)
