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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNEDPZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeVKmTjiNU9RBYagQpDYqFVDtFtMS6Xasd0n4gGM8vUAiBYHgXeUA90cjQuVGKI9KshBWYH4UjcCd3iKkCTx3f2ECqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWCCCGKaggA0YJPCKtwDzZdWp9w59zgBQhXnP7CR2xmybzWt%2FO2xNzR4EmBqJydMoRDyzGq0O4RI8vLTl3xu6yhhPaYNbLjlPfwDzi7258AN3w%2BEu7%2FKBEfg%2Btuz1nrumGJmaoMuuXyL35MOMBkW%2FRpmiPvveciP4u3HWO0uRGyU4kQ%2BvW1%2BBPQK%2B1yjfPAgIifZNMpXR4EHPFVTnlSovE8M464VAKxCYVl%2Fb%2FFHpHj2LzCOV2UFsO1TelR2IM5800fgRJcfwUlYbPXD4zRMtBd3hqNPtXPA8JUGE3oGXtTi0242uIF3xEWWrHzLaDgnMT6JlaTr%2Fap8RnUbAaOQno%2BXu7XQ2i3Bvfv9R8uhyAX1WxZSfKIfBFVeuI%2BJJEdRPrjq%2BfBLNNVqXDHBpNaknBSyEJD89nJIsAOsx0v8T2Qs%2FLzL1A80tnM%2BSV6TEQPiEYcjt5%2Bm7egB1hpCCTbkDaU09NaGR%2FJC%2FGml4Z0c0OX4I8j6g4ueZzg7tTKnqo2UCyqhOUnkVuzfpJoeWYp%2BhyznK2WRemXcBZnkC2%2Fv5Bh%2FvzFU5QZmTCARiD1Cy47i52Gy2l6U3O2B4TUjiUlxcImWdl1jEizyC%2FfVhwUu%2BvuqGsdn3qdRZ3mvhNZa522DTF0k5YAOEt%2FjMuQwtd7XwAY6pgEQgtckT67kYvIl48weTU1wMD71QBT%2BLc%2Fw%2FhN%2BAc5ehDQcgY4dCG1I4MVTtbqrU8gBNVo3s9kLKU%2FB2m7vZ%2BWbdw44%2FW%2Bq3F9iwHq%2B5P9KZbuy1kSCYqwKm6EFV%2BAKI3NL7F%2B6coCaY%2BWIjEK8mTITIQgWHf%2FVfBJyh9xZWQUDcGL1xbjvMGXotxjLVpojiNZ9BcPYgm3YpGTOnw%2BTfDu72HzXwLca&X-Amz-Signature=ba61413bb947a8b0ffe311b5efe361efef3729771a33468126ecafc59bc71bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNEDPZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeVKmTjiNU9RBYagQpDYqFVDtFtMS6Xasd0n4gGM8vUAiBYHgXeUA90cjQuVGKI9KshBWYH4UjcCd3iKkCTx3f2ECqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWCCCGKaggA0YJPCKtwDzZdWp9w59zgBQhXnP7CR2xmybzWt%2FO2xNzR4EmBqJydMoRDyzGq0O4RI8vLTl3xu6yhhPaYNbLjlPfwDzi7258AN3w%2BEu7%2FKBEfg%2Btuz1nrumGJmaoMuuXyL35MOMBkW%2FRpmiPvveciP4u3HWO0uRGyU4kQ%2BvW1%2BBPQK%2B1yjfPAgIifZNMpXR4EHPFVTnlSovE8M464VAKxCYVl%2Fb%2FFHpHj2LzCOV2UFsO1TelR2IM5800fgRJcfwUlYbPXD4zRMtBd3hqNPtXPA8JUGE3oGXtTi0242uIF3xEWWrHzLaDgnMT6JlaTr%2Fap8RnUbAaOQno%2BXu7XQ2i3Bvfv9R8uhyAX1WxZSfKIfBFVeuI%2BJJEdRPrjq%2BfBLNNVqXDHBpNaknBSyEJD89nJIsAOsx0v8T2Qs%2FLzL1A80tnM%2BSV6TEQPiEYcjt5%2Bm7egB1hpCCTbkDaU09NaGR%2FJC%2FGml4Z0c0OX4I8j6g4ueZzg7tTKnqo2UCyqhOUnkVuzfpJoeWYp%2BhyznK2WRemXcBZnkC2%2Fv5Bh%2FvzFU5QZmTCARiD1Cy47i52Gy2l6U3O2B4TUjiUlxcImWdl1jEizyC%2FfVhwUu%2BvuqGsdn3qdRZ3mvhNZa522DTF0k5YAOEt%2FjMuQwtd7XwAY6pgEQgtckT67kYvIl48weTU1wMD71QBT%2BLc%2Fw%2FhN%2BAc5ehDQcgY4dCG1I4MVTtbqrU8gBNVo3s9kLKU%2FB2m7vZ%2BWbdw44%2FW%2Bq3F9iwHq%2B5P9KZbuy1kSCYqwKm6EFV%2BAKI3NL7F%2B6coCaY%2BWIjEK8mTITIQgWHf%2FVfBJyh9xZWQUDcGL1xbjvMGXotxjLVpojiNZ9BcPYgm3YpGTOnw%2BTfDu72HzXwLca&X-Amz-Signature=e1f1149ad2368ed38c98180f129efdd269652a5cd55c0954ce68058df12cb074&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNEDPZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeVKmTjiNU9RBYagQpDYqFVDtFtMS6Xasd0n4gGM8vUAiBYHgXeUA90cjQuVGKI9KshBWYH4UjcCd3iKkCTx3f2ECqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWCCCGKaggA0YJPCKtwDzZdWp9w59zgBQhXnP7CR2xmybzWt%2FO2xNzR4EmBqJydMoRDyzGq0O4RI8vLTl3xu6yhhPaYNbLjlPfwDzi7258AN3w%2BEu7%2FKBEfg%2Btuz1nrumGJmaoMuuXyL35MOMBkW%2FRpmiPvveciP4u3HWO0uRGyU4kQ%2BvW1%2BBPQK%2B1yjfPAgIifZNMpXR4EHPFVTnlSovE8M464VAKxCYVl%2Fb%2FFHpHj2LzCOV2UFsO1TelR2IM5800fgRJcfwUlYbPXD4zRMtBd3hqNPtXPA8JUGE3oGXtTi0242uIF3xEWWrHzLaDgnMT6JlaTr%2Fap8RnUbAaOQno%2BXu7XQ2i3Bvfv9R8uhyAX1WxZSfKIfBFVeuI%2BJJEdRPrjq%2BfBLNNVqXDHBpNaknBSyEJD89nJIsAOsx0v8T2Qs%2FLzL1A80tnM%2BSV6TEQPiEYcjt5%2Bm7egB1hpCCTbkDaU09NaGR%2FJC%2FGml4Z0c0OX4I8j6g4ueZzg7tTKnqo2UCyqhOUnkVuzfpJoeWYp%2BhyznK2WRemXcBZnkC2%2Fv5Bh%2FvzFU5QZmTCARiD1Cy47i52Gy2l6U3O2B4TUjiUlxcImWdl1jEizyC%2FfVhwUu%2BvuqGsdn3qdRZ3mvhNZa522DTF0k5YAOEt%2FjMuQwtd7XwAY6pgEQgtckT67kYvIl48weTU1wMD71QBT%2BLc%2Fw%2FhN%2BAc5ehDQcgY4dCG1I4MVTtbqrU8gBNVo3s9kLKU%2FB2m7vZ%2BWbdw44%2FW%2Bq3F9iwHq%2B5P9KZbuy1kSCYqwKm6EFV%2BAKI3NL7F%2B6coCaY%2BWIjEK8mTITIQgWHf%2FVfBJyh9xZWQUDcGL1xbjvMGXotxjLVpojiNZ9BcPYgm3YpGTOnw%2BTfDu72HzXwLca&X-Amz-Signature=ab53eee46bffe21ab9399146960cd0ca318718ef258e4ba2b77ae9dae8603528&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNEDPZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeVKmTjiNU9RBYagQpDYqFVDtFtMS6Xasd0n4gGM8vUAiBYHgXeUA90cjQuVGKI9KshBWYH4UjcCd3iKkCTx3f2ECqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWCCCGKaggA0YJPCKtwDzZdWp9w59zgBQhXnP7CR2xmybzWt%2FO2xNzR4EmBqJydMoRDyzGq0O4RI8vLTl3xu6yhhPaYNbLjlPfwDzi7258AN3w%2BEu7%2FKBEfg%2Btuz1nrumGJmaoMuuXyL35MOMBkW%2FRpmiPvveciP4u3HWO0uRGyU4kQ%2BvW1%2BBPQK%2B1yjfPAgIifZNMpXR4EHPFVTnlSovE8M464VAKxCYVl%2Fb%2FFHpHj2LzCOV2UFsO1TelR2IM5800fgRJcfwUlYbPXD4zRMtBd3hqNPtXPA8JUGE3oGXtTi0242uIF3xEWWrHzLaDgnMT6JlaTr%2Fap8RnUbAaOQno%2BXu7XQ2i3Bvfv9R8uhyAX1WxZSfKIfBFVeuI%2BJJEdRPrjq%2BfBLNNVqXDHBpNaknBSyEJD89nJIsAOsx0v8T2Qs%2FLzL1A80tnM%2BSV6TEQPiEYcjt5%2Bm7egB1hpCCTbkDaU09NaGR%2FJC%2FGml4Z0c0OX4I8j6g4ueZzg7tTKnqo2UCyqhOUnkVuzfpJoeWYp%2BhyznK2WRemXcBZnkC2%2Fv5Bh%2FvzFU5QZmTCARiD1Cy47i52Gy2l6U3O2B4TUjiUlxcImWdl1jEizyC%2FfVhwUu%2BvuqGsdn3qdRZ3mvhNZa522DTF0k5YAOEt%2FjMuQwtd7XwAY6pgEQgtckT67kYvIl48weTU1wMD71QBT%2BLc%2Fw%2FhN%2BAc5ehDQcgY4dCG1I4MVTtbqrU8gBNVo3s9kLKU%2FB2m7vZ%2BWbdw44%2FW%2Bq3F9iwHq%2B5P9KZbuy1kSCYqwKm6EFV%2BAKI3NL7F%2B6coCaY%2BWIjEK8mTITIQgWHf%2FVfBJyh9xZWQUDcGL1xbjvMGXotxjLVpojiNZ9BcPYgm3YpGTOnw%2BTfDu72HzXwLca&X-Amz-Signature=a33df37caf771026d1791462a5a9874cd1b76e179b175528518d5850a7b2babb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNEDPZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeVKmTjiNU9RBYagQpDYqFVDtFtMS6Xasd0n4gGM8vUAiBYHgXeUA90cjQuVGKI9KshBWYH4UjcCd3iKkCTx3f2ECqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWCCCGKaggA0YJPCKtwDzZdWp9w59zgBQhXnP7CR2xmybzWt%2FO2xNzR4EmBqJydMoRDyzGq0O4RI8vLTl3xu6yhhPaYNbLjlPfwDzi7258AN3w%2BEu7%2FKBEfg%2Btuz1nrumGJmaoMuuXyL35MOMBkW%2FRpmiPvveciP4u3HWO0uRGyU4kQ%2BvW1%2BBPQK%2B1yjfPAgIifZNMpXR4EHPFVTnlSovE8M464VAKxCYVl%2Fb%2FFHpHj2LzCOV2UFsO1TelR2IM5800fgRJcfwUlYbPXD4zRMtBd3hqNPtXPA8JUGE3oGXtTi0242uIF3xEWWrHzLaDgnMT6JlaTr%2Fap8RnUbAaOQno%2BXu7XQ2i3Bvfv9R8uhyAX1WxZSfKIfBFVeuI%2BJJEdRPrjq%2BfBLNNVqXDHBpNaknBSyEJD89nJIsAOsx0v8T2Qs%2FLzL1A80tnM%2BSV6TEQPiEYcjt5%2Bm7egB1hpCCTbkDaU09NaGR%2FJC%2FGml4Z0c0OX4I8j6g4ueZzg7tTKnqo2UCyqhOUnkVuzfpJoeWYp%2BhyznK2WRemXcBZnkC2%2Fv5Bh%2FvzFU5QZmTCARiD1Cy47i52Gy2l6U3O2B4TUjiUlxcImWdl1jEizyC%2FfVhwUu%2BvuqGsdn3qdRZ3mvhNZa522DTF0k5YAOEt%2FjMuQwtd7XwAY6pgEQgtckT67kYvIl48weTU1wMD71QBT%2BLc%2Fw%2FhN%2BAc5ehDQcgY4dCG1I4MVTtbqrU8gBNVo3s9kLKU%2FB2m7vZ%2BWbdw44%2FW%2Bq3F9iwHq%2B5P9KZbuy1kSCYqwKm6EFV%2BAKI3NL7F%2B6coCaY%2BWIjEK8mTITIQgWHf%2FVfBJyh9xZWQUDcGL1xbjvMGXotxjLVpojiNZ9BcPYgm3YpGTOnw%2BTfDu72HzXwLca&X-Amz-Signature=942c9aef7f3e4d7b812375ff7243ae899b1abe0042f264a6a223972538b196d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTNEDPZS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFeVKmTjiNU9RBYagQpDYqFVDtFtMS6Xasd0n4gGM8vUAiBYHgXeUA90cjQuVGKI9KshBWYH4UjcCd3iKkCTx3f2ECqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLWCCCGKaggA0YJPCKtwDzZdWp9w59zgBQhXnP7CR2xmybzWt%2FO2xNzR4EmBqJydMoRDyzGq0O4RI8vLTl3xu6yhhPaYNbLjlPfwDzi7258AN3w%2BEu7%2FKBEfg%2Btuz1nrumGJmaoMuuXyL35MOMBkW%2FRpmiPvveciP4u3HWO0uRGyU4kQ%2BvW1%2BBPQK%2B1yjfPAgIifZNMpXR4EHPFVTnlSovE8M464VAKxCYVl%2Fb%2FFHpHj2LzCOV2UFsO1TelR2IM5800fgRJcfwUlYbPXD4zRMtBd3hqNPtXPA8JUGE3oGXtTi0242uIF3xEWWrHzLaDgnMT6JlaTr%2Fap8RnUbAaOQno%2BXu7XQ2i3Bvfv9R8uhyAX1WxZSfKIfBFVeuI%2BJJEdRPrjq%2BfBLNNVqXDHBpNaknBSyEJD89nJIsAOsx0v8T2Qs%2FLzL1A80tnM%2BSV6TEQPiEYcjt5%2Bm7egB1hpCCTbkDaU09NaGR%2FJC%2FGml4Z0c0OX4I8j6g4ueZzg7tTKnqo2UCyqhOUnkVuzfpJoeWYp%2BhyznK2WRemXcBZnkC2%2Fv5Bh%2FvzFU5QZmTCARiD1Cy47i52Gy2l6U3O2B4TUjiUlxcImWdl1jEizyC%2FfVhwUu%2BvuqGsdn3qdRZ3mvhNZa522DTF0k5YAOEt%2FjMuQwtd7XwAY6pgEQgtckT67kYvIl48weTU1wMD71QBT%2BLc%2Fw%2FhN%2BAc5ehDQcgY4dCG1I4MVTtbqrU8gBNVo3s9kLKU%2FB2m7vZ%2BWbdw44%2FW%2Bq3F9iwHq%2B5P9KZbuy1kSCYqwKm6EFV%2BAKI3NL7F%2B6coCaY%2BWIjEK8mTITIQgWHf%2FVfBJyh9xZWQUDcGL1xbjvMGXotxjLVpojiNZ9BcPYgm3YpGTOnw%2BTfDu72HzXwLca&X-Amz-Signature=787f692e14d08ddd5691a6a3269b6855663b44a76211cfaf01363ad81e1750c8&X-Amz-SignedHeaders=host&x-id=GetObject)
