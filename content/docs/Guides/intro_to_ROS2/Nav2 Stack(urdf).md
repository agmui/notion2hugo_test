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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5USA3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICTzD6VcmDRAuuxcFS1HusuFjOGbxShgG6%2BV%2BTqKNlNCAiBKWemv3JB8%2F63GLApTr5FGyHLBj4V9FcCamMSQjHmAvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMIWgBGTTCH5%2FBKcKtwDj3ETat8mB1PxdnB5lXZ54jVWmf%2BztthfcZ0Q6FWiR1fITEb2mj7Rxph5msCJvYadzM2U0wBsN85e9OKNpcWeYG1DhzdlfGp24%2BOwMIZKhnZf%2FNAgNA%2F5YN60HLK8ETYXkrSRtbHag7lhGAN50Yi7hhTcKqQfsxmJ5gR09kafwyVUhng7eLIvkVqZ1M94TdzN3SRLomPwq2ZcFN9J66w4aNdmQDT%2BAJFqyMB64Zlw3QbZkcRRBpyYvDJ0krju%2FJJtvjRUxyYjfAHuyOeAOAOIYUMpm9G87xxgB1hpderS7HNAEucJyDjMovJovsXNGRp0NL9KKOirNAPsPD84W34KZX29bm%2BjTSuCU6W6fJKHDcn910bd7dOLy2Y%2BYISc%2FeMLWl7Vj5QI56FhNlChZNkMLnq8VnCWmbPEXJKHGLj0c3NB7L1o161NyCMxDocdjU6rHSCj5VvPU%2BBGPyFoBNRBu7lfs1FTGHxrgd59DYWJfiWrPsmMEWnaZRBPujKAKsJrlrQ9AzreLGUwIEUPdYtspOeap%2FKMgR63tyrVZIyK5kwab30ZOr8n2O8dhBakcT4nfXAoF%2BLUQR%2B5gMH7uihA9HTlVWzjhqbm5L8Q%2B8B1M2feZAiVF%2B2M9iMGlzMw5qLVvQY6pgFs8CDCghMl4KRH31MlKeA8o5%2FXfcR731L7xxxdWBJN9bjKrbVA5WzoCVpbqmFXosExou7kgRcKOy0k2Jt%2FWokmIkfOjBDwpfeCjZmrJjAnKhcKFeCtKgSY7fDzNZFKBDHvuROHqCZ25%2BbYTJHHdOmAuS6bCfQxrlDQLdYhhomx9tmi8Phi7NziQ%2BbtrFT4vRFcM%2FEwACJF5rEKNUflODxypuENkh6v&X-Amz-Signature=4fb4ae80aa28e8511e00436f763d579a38cf511d5c874ce6c2434c9c86ffdf40&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5USA3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICTzD6VcmDRAuuxcFS1HusuFjOGbxShgG6%2BV%2BTqKNlNCAiBKWemv3JB8%2F63GLApTr5FGyHLBj4V9FcCamMSQjHmAvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMIWgBGTTCH5%2FBKcKtwDj3ETat8mB1PxdnB5lXZ54jVWmf%2BztthfcZ0Q6FWiR1fITEb2mj7Rxph5msCJvYadzM2U0wBsN85e9OKNpcWeYG1DhzdlfGp24%2BOwMIZKhnZf%2FNAgNA%2F5YN60HLK8ETYXkrSRtbHag7lhGAN50Yi7hhTcKqQfsxmJ5gR09kafwyVUhng7eLIvkVqZ1M94TdzN3SRLomPwq2ZcFN9J66w4aNdmQDT%2BAJFqyMB64Zlw3QbZkcRRBpyYvDJ0krju%2FJJtvjRUxyYjfAHuyOeAOAOIYUMpm9G87xxgB1hpderS7HNAEucJyDjMovJovsXNGRp0NL9KKOirNAPsPD84W34KZX29bm%2BjTSuCU6W6fJKHDcn910bd7dOLy2Y%2BYISc%2FeMLWl7Vj5QI56FhNlChZNkMLnq8VnCWmbPEXJKHGLj0c3NB7L1o161NyCMxDocdjU6rHSCj5VvPU%2BBGPyFoBNRBu7lfs1FTGHxrgd59DYWJfiWrPsmMEWnaZRBPujKAKsJrlrQ9AzreLGUwIEUPdYtspOeap%2FKMgR63tyrVZIyK5kwab30ZOr8n2O8dhBakcT4nfXAoF%2BLUQR%2B5gMH7uihA9HTlVWzjhqbm5L8Q%2B8B1M2feZAiVF%2B2M9iMGlzMw5qLVvQY6pgFs8CDCghMl4KRH31MlKeA8o5%2FXfcR731L7xxxdWBJN9bjKrbVA5WzoCVpbqmFXosExou7kgRcKOy0k2Jt%2FWokmIkfOjBDwpfeCjZmrJjAnKhcKFeCtKgSY7fDzNZFKBDHvuROHqCZ25%2BbYTJHHdOmAuS6bCfQxrlDQLdYhhomx9tmi8Phi7NziQ%2BbtrFT4vRFcM%2FEwACJF5rEKNUflODxypuENkh6v&X-Amz-Signature=3e3607a59ec600a0d481e028148b1ce9a75b8ea6d1830a42ff1f825e0a4ce7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5USA3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICTzD6VcmDRAuuxcFS1HusuFjOGbxShgG6%2BV%2BTqKNlNCAiBKWemv3JB8%2F63GLApTr5FGyHLBj4V9FcCamMSQjHmAvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMIWgBGTTCH5%2FBKcKtwDj3ETat8mB1PxdnB5lXZ54jVWmf%2BztthfcZ0Q6FWiR1fITEb2mj7Rxph5msCJvYadzM2U0wBsN85e9OKNpcWeYG1DhzdlfGp24%2BOwMIZKhnZf%2FNAgNA%2F5YN60HLK8ETYXkrSRtbHag7lhGAN50Yi7hhTcKqQfsxmJ5gR09kafwyVUhng7eLIvkVqZ1M94TdzN3SRLomPwq2ZcFN9J66w4aNdmQDT%2BAJFqyMB64Zlw3QbZkcRRBpyYvDJ0krju%2FJJtvjRUxyYjfAHuyOeAOAOIYUMpm9G87xxgB1hpderS7HNAEucJyDjMovJovsXNGRp0NL9KKOirNAPsPD84W34KZX29bm%2BjTSuCU6W6fJKHDcn910bd7dOLy2Y%2BYISc%2FeMLWl7Vj5QI56FhNlChZNkMLnq8VnCWmbPEXJKHGLj0c3NB7L1o161NyCMxDocdjU6rHSCj5VvPU%2BBGPyFoBNRBu7lfs1FTGHxrgd59DYWJfiWrPsmMEWnaZRBPujKAKsJrlrQ9AzreLGUwIEUPdYtspOeap%2FKMgR63tyrVZIyK5kwab30ZOr8n2O8dhBakcT4nfXAoF%2BLUQR%2B5gMH7uihA9HTlVWzjhqbm5L8Q%2B8B1M2feZAiVF%2B2M9iMGlzMw5qLVvQY6pgFs8CDCghMl4KRH31MlKeA8o5%2FXfcR731L7xxxdWBJN9bjKrbVA5WzoCVpbqmFXosExou7kgRcKOy0k2Jt%2FWokmIkfOjBDwpfeCjZmrJjAnKhcKFeCtKgSY7fDzNZFKBDHvuROHqCZ25%2BbYTJHHdOmAuS6bCfQxrlDQLdYhhomx9tmi8Phi7NziQ%2BbtrFT4vRFcM%2FEwACJF5rEKNUflODxypuENkh6v&X-Amz-Signature=f563b998a3507dabaf49afb139cd26ecb637cb23160212fa0f9cdca0c24e407a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5USA3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICTzD6VcmDRAuuxcFS1HusuFjOGbxShgG6%2BV%2BTqKNlNCAiBKWemv3JB8%2F63GLApTr5FGyHLBj4V9FcCamMSQjHmAvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMIWgBGTTCH5%2FBKcKtwDj3ETat8mB1PxdnB5lXZ54jVWmf%2BztthfcZ0Q6FWiR1fITEb2mj7Rxph5msCJvYadzM2U0wBsN85e9OKNpcWeYG1DhzdlfGp24%2BOwMIZKhnZf%2FNAgNA%2F5YN60HLK8ETYXkrSRtbHag7lhGAN50Yi7hhTcKqQfsxmJ5gR09kafwyVUhng7eLIvkVqZ1M94TdzN3SRLomPwq2ZcFN9J66w4aNdmQDT%2BAJFqyMB64Zlw3QbZkcRRBpyYvDJ0krju%2FJJtvjRUxyYjfAHuyOeAOAOIYUMpm9G87xxgB1hpderS7HNAEucJyDjMovJovsXNGRp0NL9KKOirNAPsPD84W34KZX29bm%2BjTSuCU6W6fJKHDcn910bd7dOLy2Y%2BYISc%2FeMLWl7Vj5QI56FhNlChZNkMLnq8VnCWmbPEXJKHGLj0c3NB7L1o161NyCMxDocdjU6rHSCj5VvPU%2BBGPyFoBNRBu7lfs1FTGHxrgd59DYWJfiWrPsmMEWnaZRBPujKAKsJrlrQ9AzreLGUwIEUPdYtspOeap%2FKMgR63tyrVZIyK5kwab30ZOr8n2O8dhBakcT4nfXAoF%2BLUQR%2B5gMH7uihA9HTlVWzjhqbm5L8Q%2B8B1M2feZAiVF%2B2M9iMGlzMw5qLVvQY6pgFs8CDCghMl4KRH31MlKeA8o5%2FXfcR731L7xxxdWBJN9bjKrbVA5WzoCVpbqmFXosExou7kgRcKOy0k2Jt%2FWokmIkfOjBDwpfeCjZmrJjAnKhcKFeCtKgSY7fDzNZFKBDHvuROHqCZ25%2BbYTJHHdOmAuS6bCfQxrlDQLdYhhomx9tmi8Phi7NziQ%2BbtrFT4vRFcM%2FEwACJF5rEKNUflODxypuENkh6v&X-Amz-Signature=51571f00dae2bedb6f86cbcb5f27611917a4af4bf1ec6ddf29d9321dccc1ce8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5USA3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICTzD6VcmDRAuuxcFS1HusuFjOGbxShgG6%2BV%2BTqKNlNCAiBKWemv3JB8%2F63GLApTr5FGyHLBj4V9FcCamMSQjHmAvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMIWgBGTTCH5%2FBKcKtwDj3ETat8mB1PxdnB5lXZ54jVWmf%2BztthfcZ0Q6FWiR1fITEb2mj7Rxph5msCJvYadzM2U0wBsN85e9OKNpcWeYG1DhzdlfGp24%2BOwMIZKhnZf%2FNAgNA%2F5YN60HLK8ETYXkrSRtbHag7lhGAN50Yi7hhTcKqQfsxmJ5gR09kafwyVUhng7eLIvkVqZ1M94TdzN3SRLomPwq2ZcFN9J66w4aNdmQDT%2BAJFqyMB64Zlw3QbZkcRRBpyYvDJ0krju%2FJJtvjRUxyYjfAHuyOeAOAOIYUMpm9G87xxgB1hpderS7HNAEucJyDjMovJovsXNGRp0NL9KKOirNAPsPD84W34KZX29bm%2BjTSuCU6W6fJKHDcn910bd7dOLy2Y%2BYISc%2FeMLWl7Vj5QI56FhNlChZNkMLnq8VnCWmbPEXJKHGLj0c3NB7L1o161NyCMxDocdjU6rHSCj5VvPU%2BBGPyFoBNRBu7lfs1FTGHxrgd59DYWJfiWrPsmMEWnaZRBPujKAKsJrlrQ9AzreLGUwIEUPdYtspOeap%2FKMgR63tyrVZIyK5kwab30ZOr8n2O8dhBakcT4nfXAoF%2BLUQR%2B5gMH7uihA9HTlVWzjhqbm5L8Q%2B8B1M2feZAiVF%2B2M9iMGlzMw5qLVvQY6pgFs8CDCghMl4KRH31MlKeA8o5%2FXfcR731L7xxxdWBJN9bjKrbVA5WzoCVpbqmFXosExou7kgRcKOy0k2Jt%2FWokmIkfOjBDwpfeCjZmrJjAnKhcKFeCtKgSY7fDzNZFKBDHvuROHqCZ25%2BbYTJHHdOmAuS6bCfQxrlDQLdYhhomx9tmi8Phi7NziQ%2BbtrFT4vRFcM%2FEwACJF5rEKNUflODxypuENkh6v&X-Amz-Signature=ce28de9ea36af319d7f3f5bc0cae32bd5b0e0ab83b3ce08c93cd0efdfca1c3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5USA3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICTzD6VcmDRAuuxcFS1HusuFjOGbxShgG6%2BV%2BTqKNlNCAiBKWemv3JB8%2F63GLApTr5FGyHLBj4V9FcCamMSQjHmAvyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMIWgBGTTCH5%2FBKcKtwDj3ETat8mB1PxdnB5lXZ54jVWmf%2BztthfcZ0Q6FWiR1fITEb2mj7Rxph5msCJvYadzM2U0wBsN85e9OKNpcWeYG1DhzdlfGp24%2BOwMIZKhnZf%2FNAgNA%2F5YN60HLK8ETYXkrSRtbHag7lhGAN50Yi7hhTcKqQfsxmJ5gR09kafwyVUhng7eLIvkVqZ1M94TdzN3SRLomPwq2ZcFN9J66w4aNdmQDT%2BAJFqyMB64Zlw3QbZkcRRBpyYvDJ0krju%2FJJtvjRUxyYjfAHuyOeAOAOIYUMpm9G87xxgB1hpderS7HNAEucJyDjMovJovsXNGRp0NL9KKOirNAPsPD84W34KZX29bm%2BjTSuCU6W6fJKHDcn910bd7dOLy2Y%2BYISc%2FeMLWl7Vj5QI56FhNlChZNkMLnq8VnCWmbPEXJKHGLj0c3NB7L1o161NyCMxDocdjU6rHSCj5VvPU%2BBGPyFoBNRBu7lfs1FTGHxrgd59DYWJfiWrPsmMEWnaZRBPujKAKsJrlrQ9AzreLGUwIEUPdYtspOeap%2FKMgR63tyrVZIyK5kwab30ZOr8n2O8dhBakcT4nfXAoF%2BLUQR%2B5gMH7uihA9HTlVWzjhqbm5L8Q%2B8B1M2feZAiVF%2B2M9iMGlzMw5qLVvQY6pgFs8CDCghMl4KRH31MlKeA8o5%2FXfcR731L7xxxdWBJN9bjKrbVA5WzoCVpbqmFXosExou7kgRcKOy0k2Jt%2FWokmIkfOjBDwpfeCjZmrJjAnKhcKFeCtKgSY7fDzNZFKBDHvuROHqCZ25%2BbYTJHHdOmAuS6bCfQxrlDQLdYhhomx9tmi8Phi7NziQ%2BbtrFT4vRFcM%2FEwACJF5rEKNUflODxypuENkh6v&X-Amz-Signature=d7ac6178b5a5bf838444e15202caa3051449555fe9580037c66e8f0db3002ee2&X-Amz-SignedHeaders=host&x-id=GetObject)
