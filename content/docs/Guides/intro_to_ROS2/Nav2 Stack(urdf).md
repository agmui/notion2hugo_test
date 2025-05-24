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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMEEWRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqIbs1GIt45FrpHnd%2BmaTL1fmE2xyvA2hlyHXMAxWGQAiEA1PylODIALGLfbcYDanV0mjLiPaIU397G2KBJNsIZY8QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4MI1Ja9dsDaqQKVyrcA8BoNWAZkYsbzYThtIgzzTuyh91%2FutUHGHFN52oJEXwCUKxdU%2BNe5Qo3hxmbGKUFpQl3s5NptIy7flR6hWxFWVDJ9eg%2BRghvymbv2UBOf%2BVGwmGXeyECG%2FUE0J1zrYvGNa2ZW1KAt6jTyyWKNZm3OaXwL4GU%2BHxbj%2BD1nglW3kpzJnE6daZv8r9nK1Vy%2FJVn05xAY9FpiGO3SgINjMOv27vXYcdEgkh0dXnjlqana29hmdrV3oUj8eGpFHVHIJtxBtTsFO%2FMgZ7%2BXtx%2FRmwd%2FEnCJPpi9B0hBaG%2FCS2NVL138HempTB9iTf0P5adAxqQkMsJ1Z6EBxmZ%2BrbaN%2FxNwx8vD584jvuu5yX%2F9KCG6ihSyxnKbHQbgUWQUQ%2FONrrJd6aSUbDK9vPFQ1FCpsDgnj2n6gTvaQaFgzHaNbpke4HF%2B6hUO488TJJMsskAAq6JZqt%2BjiBUNFeg8gQnLVnLPZqhpNCbXisDQXK618Tv8sb9pmDMIFsC87NxWxYsPmPVRt%2F%2FyqJOtjVnSCSrBLWRwQRfnfCAFGQ4ztk1qS7gE3R2lQEOh2oI0o%2FC8125ghLqVba3yE3XWM2ShXFoDSEorhVYZSRwjaFmz5ejO58pz50wCzgZc4nVB1DHBjUqMPr3xMEGOqUBtNKXW%2BTAGqGkPUjw0sS68eszDTudx1vh28U9HSrhPLdITdUhM%2B5oT6u1GctqrJJfMR%2FO%2B0nN3t1k2LQ3%2BM5pufe6I3uCEpBJOwqWFjQgHFUTslH2QzLle3pMvFxwjQDMthybTfcesHJhvqBmbFqbEQZ8PTr05IyMbOv7y%2BeSyGQaz7CopFhkYJ6jUn%2BkKpbBVL68dJizNck4RayRvc1jdf37ydK8&X-Amz-Signature=ddcad041daeb15c49416c1356cba31cef1955e81ca9249a6323fcf42323cd175&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMEEWRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqIbs1GIt45FrpHnd%2BmaTL1fmE2xyvA2hlyHXMAxWGQAiEA1PylODIALGLfbcYDanV0mjLiPaIU397G2KBJNsIZY8QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4MI1Ja9dsDaqQKVyrcA8BoNWAZkYsbzYThtIgzzTuyh91%2FutUHGHFN52oJEXwCUKxdU%2BNe5Qo3hxmbGKUFpQl3s5NptIy7flR6hWxFWVDJ9eg%2BRghvymbv2UBOf%2BVGwmGXeyECG%2FUE0J1zrYvGNa2ZW1KAt6jTyyWKNZm3OaXwL4GU%2BHxbj%2BD1nglW3kpzJnE6daZv8r9nK1Vy%2FJVn05xAY9FpiGO3SgINjMOv27vXYcdEgkh0dXnjlqana29hmdrV3oUj8eGpFHVHIJtxBtTsFO%2FMgZ7%2BXtx%2FRmwd%2FEnCJPpi9B0hBaG%2FCS2NVL138HempTB9iTf0P5adAxqQkMsJ1Z6EBxmZ%2BrbaN%2FxNwx8vD584jvuu5yX%2F9KCG6ihSyxnKbHQbgUWQUQ%2FONrrJd6aSUbDK9vPFQ1FCpsDgnj2n6gTvaQaFgzHaNbpke4HF%2B6hUO488TJJMsskAAq6JZqt%2BjiBUNFeg8gQnLVnLPZqhpNCbXisDQXK618Tv8sb9pmDMIFsC87NxWxYsPmPVRt%2F%2FyqJOtjVnSCSrBLWRwQRfnfCAFGQ4ztk1qS7gE3R2lQEOh2oI0o%2FC8125ghLqVba3yE3XWM2ShXFoDSEorhVYZSRwjaFmz5ejO58pz50wCzgZc4nVB1DHBjUqMPr3xMEGOqUBtNKXW%2BTAGqGkPUjw0sS68eszDTudx1vh28U9HSrhPLdITdUhM%2B5oT6u1GctqrJJfMR%2FO%2B0nN3t1k2LQ3%2BM5pufe6I3uCEpBJOwqWFjQgHFUTslH2QzLle3pMvFxwjQDMthybTfcesHJhvqBmbFqbEQZ8PTr05IyMbOv7y%2BeSyGQaz7CopFhkYJ6jUn%2BkKpbBVL68dJizNck4RayRvc1jdf37ydK8&X-Amz-Signature=3c465120cd462cdecb108b221585c7e74d8c9208aa9d4bf57213b58206475122&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMEEWRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqIbs1GIt45FrpHnd%2BmaTL1fmE2xyvA2hlyHXMAxWGQAiEA1PylODIALGLfbcYDanV0mjLiPaIU397G2KBJNsIZY8QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4MI1Ja9dsDaqQKVyrcA8BoNWAZkYsbzYThtIgzzTuyh91%2FutUHGHFN52oJEXwCUKxdU%2BNe5Qo3hxmbGKUFpQl3s5NptIy7flR6hWxFWVDJ9eg%2BRghvymbv2UBOf%2BVGwmGXeyECG%2FUE0J1zrYvGNa2ZW1KAt6jTyyWKNZm3OaXwL4GU%2BHxbj%2BD1nglW3kpzJnE6daZv8r9nK1Vy%2FJVn05xAY9FpiGO3SgINjMOv27vXYcdEgkh0dXnjlqana29hmdrV3oUj8eGpFHVHIJtxBtTsFO%2FMgZ7%2BXtx%2FRmwd%2FEnCJPpi9B0hBaG%2FCS2NVL138HempTB9iTf0P5adAxqQkMsJ1Z6EBxmZ%2BrbaN%2FxNwx8vD584jvuu5yX%2F9KCG6ihSyxnKbHQbgUWQUQ%2FONrrJd6aSUbDK9vPFQ1FCpsDgnj2n6gTvaQaFgzHaNbpke4HF%2B6hUO488TJJMsskAAq6JZqt%2BjiBUNFeg8gQnLVnLPZqhpNCbXisDQXK618Tv8sb9pmDMIFsC87NxWxYsPmPVRt%2F%2FyqJOtjVnSCSrBLWRwQRfnfCAFGQ4ztk1qS7gE3R2lQEOh2oI0o%2FC8125ghLqVba3yE3XWM2ShXFoDSEorhVYZSRwjaFmz5ejO58pz50wCzgZc4nVB1DHBjUqMPr3xMEGOqUBtNKXW%2BTAGqGkPUjw0sS68eszDTudx1vh28U9HSrhPLdITdUhM%2B5oT6u1GctqrJJfMR%2FO%2B0nN3t1k2LQ3%2BM5pufe6I3uCEpBJOwqWFjQgHFUTslH2QzLle3pMvFxwjQDMthybTfcesHJhvqBmbFqbEQZ8PTr05IyMbOv7y%2BeSyGQaz7CopFhkYJ6jUn%2BkKpbBVL68dJizNck4RayRvc1jdf37ydK8&X-Amz-Signature=8ec8125c4c23c0a982f72b307683be3b7045045dd2dfa97a426aa62e2c94c07d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMEEWRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqIbs1GIt45FrpHnd%2BmaTL1fmE2xyvA2hlyHXMAxWGQAiEA1PylODIALGLfbcYDanV0mjLiPaIU397G2KBJNsIZY8QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4MI1Ja9dsDaqQKVyrcA8BoNWAZkYsbzYThtIgzzTuyh91%2FutUHGHFN52oJEXwCUKxdU%2BNe5Qo3hxmbGKUFpQl3s5NptIy7flR6hWxFWVDJ9eg%2BRghvymbv2UBOf%2BVGwmGXeyECG%2FUE0J1zrYvGNa2ZW1KAt6jTyyWKNZm3OaXwL4GU%2BHxbj%2BD1nglW3kpzJnE6daZv8r9nK1Vy%2FJVn05xAY9FpiGO3SgINjMOv27vXYcdEgkh0dXnjlqana29hmdrV3oUj8eGpFHVHIJtxBtTsFO%2FMgZ7%2BXtx%2FRmwd%2FEnCJPpi9B0hBaG%2FCS2NVL138HempTB9iTf0P5adAxqQkMsJ1Z6EBxmZ%2BrbaN%2FxNwx8vD584jvuu5yX%2F9KCG6ihSyxnKbHQbgUWQUQ%2FONrrJd6aSUbDK9vPFQ1FCpsDgnj2n6gTvaQaFgzHaNbpke4HF%2B6hUO488TJJMsskAAq6JZqt%2BjiBUNFeg8gQnLVnLPZqhpNCbXisDQXK618Tv8sb9pmDMIFsC87NxWxYsPmPVRt%2F%2FyqJOtjVnSCSrBLWRwQRfnfCAFGQ4ztk1qS7gE3R2lQEOh2oI0o%2FC8125ghLqVba3yE3XWM2ShXFoDSEorhVYZSRwjaFmz5ejO58pz50wCzgZc4nVB1DHBjUqMPr3xMEGOqUBtNKXW%2BTAGqGkPUjw0sS68eszDTudx1vh28U9HSrhPLdITdUhM%2B5oT6u1GctqrJJfMR%2FO%2B0nN3t1k2LQ3%2BM5pufe6I3uCEpBJOwqWFjQgHFUTslH2QzLle3pMvFxwjQDMthybTfcesHJhvqBmbFqbEQZ8PTr05IyMbOv7y%2BeSyGQaz7CopFhkYJ6jUn%2BkKpbBVL68dJizNck4RayRvc1jdf37ydK8&X-Amz-Signature=c39b63b7ec9ad2591c5eb2e2e5a7d358a02d325639f5018cdacbea11020f3608&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMEEWRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqIbs1GIt45FrpHnd%2BmaTL1fmE2xyvA2hlyHXMAxWGQAiEA1PylODIALGLfbcYDanV0mjLiPaIU397G2KBJNsIZY8QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4MI1Ja9dsDaqQKVyrcA8BoNWAZkYsbzYThtIgzzTuyh91%2FutUHGHFN52oJEXwCUKxdU%2BNe5Qo3hxmbGKUFpQl3s5NptIy7flR6hWxFWVDJ9eg%2BRghvymbv2UBOf%2BVGwmGXeyECG%2FUE0J1zrYvGNa2ZW1KAt6jTyyWKNZm3OaXwL4GU%2BHxbj%2BD1nglW3kpzJnE6daZv8r9nK1Vy%2FJVn05xAY9FpiGO3SgINjMOv27vXYcdEgkh0dXnjlqana29hmdrV3oUj8eGpFHVHIJtxBtTsFO%2FMgZ7%2BXtx%2FRmwd%2FEnCJPpi9B0hBaG%2FCS2NVL138HempTB9iTf0P5adAxqQkMsJ1Z6EBxmZ%2BrbaN%2FxNwx8vD584jvuu5yX%2F9KCG6ihSyxnKbHQbgUWQUQ%2FONrrJd6aSUbDK9vPFQ1FCpsDgnj2n6gTvaQaFgzHaNbpke4HF%2B6hUO488TJJMsskAAq6JZqt%2BjiBUNFeg8gQnLVnLPZqhpNCbXisDQXK618Tv8sb9pmDMIFsC87NxWxYsPmPVRt%2F%2FyqJOtjVnSCSrBLWRwQRfnfCAFGQ4ztk1qS7gE3R2lQEOh2oI0o%2FC8125ghLqVba3yE3XWM2ShXFoDSEorhVYZSRwjaFmz5ejO58pz50wCzgZc4nVB1DHBjUqMPr3xMEGOqUBtNKXW%2BTAGqGkPUjw0sS68eszDTudx1vh28U9HSrhPLdITdUhM%2B5oT6u1GctqrJJfMR%2FO%2B0nN3t1k2LQ3%2BM5pufe6I3uCEpBJOwqWFjQgHFUTslH2QzLle3pMvFxwjQDMthybTfcesHJhvqBmbFqbEQZ8PTr05IyMbOv7y%2BeSyGQaz7CopFhkYJ6jUn%2BkKpbBVL68dJizNck4RayRvc1jdf37ydK8&X-Amz-Signature=fe4eeb11e0467d24ce19b3e2f4ce8e1941115fa3e34a0a0c7b1fbbf8806220b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMEEWRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICqIbs1GIt45FrpHnd%2BmaTL1fmE2xyvA2hlyHXMAxWGQAiEA1PylODIALGLfbcYDanV0mjLiPaIU397G2KBJNsIZY8QqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4MI1Ja9dsDaqQKVyrcA8BoNWAZkYsbzYThtIgzzTuyh91%2FutUHGHFN52oJEXwCUKxdU%2BNe5Qo3hxmbGKUFpQl3s5NptIy7flR6hWxFWVDJ9eg%2BRghvymbv2UBOf%2BVGwmGXeyECG%2FUE0J1zrYvGNa2ZW1KAt6jTyyWKNZm3OaXwL4GU%2BHxbj%2BD1nglW3kpzJnE6daZv8r9nK1Vy%2FJVn05xAY9FpiGO3SgINjMOv27vXYcdEgkh0dXnjlqana29hmdrV3oUj8eGpFHVHIJtxBtTsFO%2FMgZ7%2BXtx%2FRmwd%2FEnCJPpi9B0hBaG%2FCS2NVL138HempTB9iTf0P5adAxqQkMsJ1Z6EBxmZ%2BrbaN%2FxNwx8vD584jvuu5yX%2F9KCG6ihSyxnKbHQbgUWQUQ%2FONrrJd6aSUbDK9vPFQ1FCpsDgnj2n6gTvaQaFgzHaNbpke4HF%2B6hUO488TJJMsskAAq6JZqt%2BjiBUNFeg8gQnLVnLPZqhpNCbXisDQXK618Tv8sb9pmDMIFsC87NxWxYsPmPVRt%2F%2FyqJOtjVnSCSrBLWRwQRfnfCAFGQ4ztk1qS7gE3R2lQEOh2oI0o%2FC8125ghLqVba3yE3XWM2ShXFoDSEorhVYZSRwjaFmz5ejO58pz50wCzgZc4nVB1DHBjUqMPr3xMEGOqUBtNKXW%2BTAGqGkPUjw0sS68eszDTudx1vh28U9HSrhPLdITdUhM%2B5oT6u1GctqrJJfMR%2FO%2B0nN3t1k2LQ3%2BM5pufe6I3uCEpBJOwqWFjQgHFUTslH2QzLle3pMvFxwjQDMthybTfcesHJhvqBmbFqbEQZ8PTr05IyMbOv7y%2BeSyGQaz7CopFhkYJ6jUn%2BkKpbBVL68dJizNck4RayRvc1jdf37ydK8&X-Amz-Signature=3aa88671a3badad4b8654e511c6fd7bbe246804da7a9acbb51b29de870a9ca11&X-Amz-SignedHeaders=host&x-id=GetObject)
