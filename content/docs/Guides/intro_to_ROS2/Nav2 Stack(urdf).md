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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDTUOOD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIET9TX3M35%2BJWMkrCmTtNbvFW7Y9R5IphQrJv1r1KPwuAiEA%2Bu52ZeU1kVzwZMmpM5VUl1rwcyzdLoQgn93WnE37rOoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Rj4gMhjJtIiS9CyrcA4MafbCyPS3cxHjGIQzSorztivfUykmeFtiCi0%2FeE1efFrS476RpVPKCgJxq3fthGPdo76sTguVAAHxCoXKw9j2ZNabAP34nuZX%2BLChIvubKpldMq0EYlkDUGq4b4jlnRw9zlDwqIKwNRtpEijeu4Ddm%2F5MYpumBlwzPnxX8f638qkrJUGX2o3EfjKQyjoi3yrSoHM6Mc4L8HcQLQWl8sRLjSxOkyw8uYcX%2B3PDKjk6DwTgADmkA3HVrkZ%2Ff130PJ8ZAUOzf8R6cW1o%2F2usA5Y9mxqqFYMHVa4TMJXqc1MH4aEE4HFaod%2BBkcrDvvQ9Ze5DMNK1AcCvE%2BiogpMHva91N6F9EXKFUyADXIkUjU2q%2F7SCeC5qeXF3w65dgXyV0rG3Dn1n5W7s%2BDhCEua83e1yiNXaEKL5D9vnsLNCYdVAb3DJZRpaSTlHDNmYFivCl68KFaiNI1sYzV%2BvCzSRFEykGCzmBn54D%2BgStkpCqJpWF5BwL%2BVfV0oZcnbb%2BJ0mdv7SCevqp6n%2Blz7lnwvkvm%2BA6H1BbO5m%2FtBFRj1xLXjy6WmPvLuFlw%2FYg%2Bk%2FQVvaQupqjRM1VotVAgVJHYzeGfAJYB7gbPLOseIt3J635YVJOASbXWjIDek6bhN4eMIjl8b4GOqUBqdmDvmAnlidoIyfNu9N6QobwmAOupWiR1gV%2B0leH%2BhtSUS1NKUSO18gTNQzbXnm8Pomwlh9ifSzTPuYfez0N%2FsSWb7MXfYIFbN3pSzkpgrEnO2KeOd5eI0chu%2BXhA4LybEHkec1gd3O1f8V2TRaG2TMWdFUpxlkDxjMrI42fer4z%2FDo3hvmWNfVvU%2B73Fc7TfnB%2BOaTs3ywRFEhorWDlJ8R9727A&X-Amz-Signature=c35b915700aa850d88564e6a80a8692af2e77df438c855d95dc336c9f3c09dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDTUOOD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIET9TX3M35%2BJWMkrCmTtNbvFW7Y9R5IphQrJv1r1KPwuAiEA%2Bu52ZeU1kVzwZMmpM5VUl1rwcyzdLoQgn93WnE37rOoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Rj4gMhjJtIiS9CyrcA4MafbCyPS3cxHjGIQzSorztivfUykmeFtiCi0%2FeE1efFrS476RpVPKCgJxq3fthGPdo76sTguVAAHxCoXKw9j2ZNabAP34nuZX%2BLChIvubKpldMq0EYlkDUGq4b4jlnRw9zlDwqIKwNRtpEijeu4Ddm%2F5MYpumBlwzPnxX8f638qkrJUGX2o3EfjKQyjoi3yrSoHM6Mc4L8HcQLQWl8sRLjSxOkyw8uYcX%2B3PDKjk6DwTgADmkA3HVrkZ%2Ff130PJ8ZAUOzf8R6cW1o%2F2usA5Y9mxqqFYMHVa4TMJXqc1MH4aEE4HFaod%2BBkcrDvvQ9Ze5DMNK1AcCvE%2BiogpMHva91N6F9EXKFUyADXIkUjU2q%2F7SCeC5qeXF3w65dgXyV0rG3Dn1n5W7s%2BDhCEua83e1yiNXaEKL5D9vnsLNCYdVAb3DJZRpaSTlHDNmYFivCl68KFaiNI1sYzV%2BvCzSRFEykGCzmBn54D%2BgStkpCqJpWF5BwL%2BVfV0oZcnbb%2BJ0mdv7SCevqp6n%2Blz7lnwvkvm%2BA6H1BbO5m%2FtBFRj1xLXjy6WmPvLuFlw%2FYg%2Bk%2FQVvaQupqjRM1VotVAgVJHYzeGfAJYB7gbPLOseIt3J635YVJOASbXWjIDek6bhN4eMIjl8b4GOqUBqdmDvmAnlidoIyfNu9N6QobwmAOupWiR1gV%2B0leH%2BhtSUS1NKUSO18gTNQzbXnm8Pomwlh9ifSzTPuYfez0N%2FsSWb7MXfYIFbN3pSzkpgrEnO2KeOd5eI0chu%2BXhA4LybEHkec1gd3O1f8V2TRaG2TMWdFUpxlkDxjMrI42fer4z%2FDo3hvmWNfVvU%2B73Fc7TfnB%2BOaTs3ywRFEhorWDlJ8R9727A&X-Amz-Signature=6d0f246f2adfd99776c03abc155989902b34dde435527624bd4ee67dc3506bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDTUOOD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIET9TX3M35%2BJWMkrCmTtNbvFW7Y9R5IphQrJv1r1KPwuAiEA%2Bu52ZeU1kVzwZMmpM5VUl1rwcyzdLoQgn93WnE37rOoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Rj4gMhjJtIiS9CyrcA4MafbCyPS3cxHjGIQzSorztivfUykmeFtiCi0%2FeE1efFrS476RpVPKCgJxq3fthGPdo76sTguVAAHxCoXKw9j2ZNabAP34nuZX%2BLChIvubKpldMq0EYlkDUGq4b4jlnRw9zlDwqIKwNRtpEijeu4Ddm%2F5MYpumBlwzPnxX8f638qkrJUGX2o3EfjKQyjoi3yrSoHM6Mc4L8HcQLQWl8sRLjSxOkyw8uYcX%2B3PDKjk6DwTgADmkA3HVrkZ%2Ff130PJ8ZAUOzf8R6cW1o%2F2usA5Y9mxqqFYMHVa4TMJXqc1MH4aEE4HFaod%2BBkcrDvvQ9Ze5DMNK1AcCvE%2BiogpMHva91N6F9EXKFUyADXIkUjU2q%2F7SCeC5qeXF3w65dgXyV0rG3Dn1n5W7s%2BDhCEua83e1yiNXaEKL5D9vnsLNCYdVAb3DJZRpaSTlHDNmYFivCl68KFaiNI1sYzV%2BvCzSRFEykGCzmBn54D%2BgStkpCqJpWF5BwL%2BVfV0oZcnbb%2BJ0mdv7SCevqp6n%2Blz7lnwvkvm%2BA6H1BbO5m%2FtBFRj1xLXjy6WmPvLuFlw%2FYg%2Bk%2FQVvaQupqjRM1VotVAgVJHYzeGfAJYB7gbPLOseIt3J635YVJOASbXWjIDek6bhN4eMIjl8b4GOqUBqdmDvmAnlidoIyfNu9N6QobwmAOupWiR1gV%2B0leH%2BhtSUS1NKUSO18gTNQzbXnm8Pomwlh9ifSzTPuYfez0N%2FsSWb7MXfYIFbN3pSzkpgrEnO2KeOd5eI0chu%2BXhA4LybEHkec1gd3O1f8V2TRaG2TMWdFUpxlkDxjMrI42fer4z%2FDo3hvmWNfVvU%2B73Fc7TfnB%2BOaTs3ywRFEhorWDlJ8R9727A&X-Amz-Signature=0ee734040348df9ea9cc93887313ed2690f5c3fb97642512eaae231d9a1856a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDTUOOD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIET9TX3M35%2BJWMkrCmTtNbvFW7Y9R5IphQrJv1r1KPwuAiEA%2Bu52ZeU1kVzwZMmpM5VUl1rwcyzdLoQgn93WnE37rOoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Rj4gMhjJtIiS9CyrcA4MafbCyPS3cxHjGIQzSorztivfUykmeFtiCi0%2FeE1efFrS476RpVPKCgJxq3fthGPdo76sTguVAAHxCoXKw9j2ZNabAP34nuZX%2BLChIvubKpldMq0EYlkDUGq4b4jlnRw9zlDwqIKwNRtpEijeu4Ddm%2F5MYpumBlwzPnxX8f638qkrJUGX2o3EfjKQyjoi3yrSoHM6Mc4L8HcQLQWl8sRLjSxOkyw8uYcX%2B3PDKjk6DwTgADmkA3HVrkZ%2Ff130PJ8ZAUOzf8R6cW1o%2F2usA5Y9mxqqFYMHVa4TMJXqc1MH4aEE4HFaod%2BBkcrDvvQ9Ze5DMNK1AcCvE%2BiogpMHva91N6F9EXKFUyADXIkUjU2q%2F7SCeC5qeXF3w65dgXyV0rG3Dn1n5W7s%2BDhCEua83e1yiNXaEKL5D9vnsLNCYdVAb3DJZRpaSTlHDNmYFivCl68KFaiNI1sYzV%2BvCzSRFEykGCzmBn54D%2BgStkpCqJpWF5BwL%2BVfV0oZcnbb%2BJ0mdv7SCevqp6n%2Blz7lnwvkvm%2BA6H1BbO5m%2FtBFRj1xLXjy6WmPvLuFlw%2FYg%2Bk%2FQVvaQupqjRM1VotVAgVJHYzeGfAJYB7gbPLOseIt3J635YVJOASbXWjIDek6bhN4eMIjl8b4GOqUBqdmDvmAnlidoIyfNu9N6QobwmAOupWiR1gV%2B0leH%2BhtSUS1NKUSO18gTNQzbXnm8Pomwlh9ifSzTPuYfez0N%2FsSWb7MXfYIFbN3pSzkpgrEnO2KeOd5eI0chu%2BXhA4LybEHkec1gd3O1f8V2TRaG2TMWdFUpxlkDxjMrI42fer4z%2FDo3hvmWNfVvU%2B73Fc7TfnB%2BOaTs3ywRFEhorWDlJ8R9727A&X-Amz-Signature=948ed51a60de899aff16d728c51b7b4ff08d19e62f079ea2bf19343fbcf17092&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDTUOOD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIET9TX3M35%2BJWMkrCmTtNbvFW7Y9R5IphQrJv1r1KPwuAiEA%2Bu52ZeU1kVzwZMmpM5VUl1rwcyzdLoQgn93WnE37rOoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Rj4gMhjJtIiS9CyrcA4MafbCyPS3cxHjGIQzSorztivfUykmeFtiCi0%2FeE1efFrS476RpVPKCgJxq3fthGPdo76sTguVAAHxCoXKw9j2ZNabAP34nuZX%2BLChIvubKpldMq0EYlkDUGq4b4jlnRw9zlDwqIKwNRtpEijeu4Ddm%2F5MYpumBlwzPnxX8f638qkrJUGX2o3EfjKQyjoi3yrSoHM6Mc4L8HcQLQWl8sRLjSxOkyw8uYcX%2B3PDKjk6DwTgADmkA3HVrkZ%2Ff130PJ8ZAUOzf8R6cW1o%2F2usA5Y9mxqqFYMHVa4TMJXqc1MH4aEE4HFaod%2BBkcrDvvQ9Ze5DMNK1AcCvE%2BiogpMHva91N6F9EXKFUyADXIkUjU2q%2F7SCeC5qeXF3w65dgXyV0rG3Dn1n5W7s%2BDhCEua83e1yiNXaEKL5D9vnsLNCYdVAb3DJZRpaSTlHDNmYFivCl68KFaiNI1sYzV%2BvCzSRFEykGCzmBn54D%2BgStkpCqJpWF5BwL%2BVfV0oZcnbb%2BJ0mdv7SCevqp6n%2Blz7lnwvkvm%2BA6H1BbO5m%2FtBFRj1xLXjy6WmPvLuFlw%2FYg%2Bk%2FQVvaQupqjRM1VotVAgVJHYzeGfAJYB7gbPLOseIt3J635YVJOASbXWjIDek6bhN4eMIjl8b4GOqUBqdmDvmAnlidoIyfNu9N6QobwmAOupWiR1gV%2B0leH%2BhtSUS1NKUSO18gTNQzbXnm8Pomwlh9ifSzTPuYfez0N%2FsSWb7MXfYIFbN3pSzkpgrEnO2KeOd5eI0chu%2BXhA4LybEHkec1gd3O1f8V2TRaG2TMWdFUpxlkDxjMrI42fer4z%2FDo3hvmWNfVvU%2B73Fc7TfnB%2BOaTs3ywRFEhorWDlJ8R9727A&X-Amz-Signature=7ac531b3fe0c5a122ce1071fd2a80197d5191905d701a86dacab8733d9f5dcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDTUOOD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIET9TX3M35%2BJWMkrCmTtNbvFW7Y9R5IphQrJv1r1KPwuAiEA%2Bu52ZeU1kVzwZMmpM5VUl1rwcyzdLoQgn93WnE37rOoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1Rj4gMhjJtIiS9CyrcA4MafbCyPS3cxHjGIQzSorztivfUykmeFtiCi0%2FeE1efFrS476RpVPKCgJxq3fthGPdo76sTguVAAHxCoXKw9j2ZNabAP34nuZX%2BLChIvubKpldMq0EYlkDUGq4b4jlnRw9zlDwqIKwNRtpEijeu4Ddm%2F5MYpumBlwzPnxX8f638qkrJUGX2o3EfjKQyjoi3yrSoHM6Mc4L8HcQLQWl8sRLjSxOkyw8uYcX%2B3PDKjk6DwTgADmkA3HVrkZ%2Ff130PJ8ZAUOzf8R6cW1o%2F2usA5Y9mxqqFYMHVa4TMJXqc1MH4aEE4HFaod%2BBkcrDvvQ9Ze5DMNK1AcCvE%2BiogpMHva91N6F9EXKFUyADXIkUjU2q%2F7SCeC5qeXF3w65dgXyV0rG3Dn1n5W7s%2BDhCEua83e1yiNXaEKL5D9vnsLNCYdVAb3DJZRpaSTlHDNmYFivCl68KFaiNI1sYzV%2BvCzSRFEykGCzmBn54D%2BgStkpCqJpWF5BwL%2BVfV0oZcnbb%2BJ0mdv7SCevqp6n%2Blz7lnwvkvm%2BA6H1BbO5m%2FtBFRj1xLXjy6WmPvLuFlw%2FYg%2Bk%2FQVvaQupqjRM1VotVAgVJHYzeGfAJYB7gbPLOseIt3J635YVJOASbXWjIDek6bhN4eMIjl8b4GOqUBqdmDvmAnlidoIyfNu9N6QobwmAOupWiR1gV%2B0leH%2BhtSUS1NKUSO18gTNQzbXnm8Pomwlh9ifSzTPuYfez0N%2FsSWb7MXfYIFbN3pSzkpgrEnO2KeOd5eI0chu%2BXhA4LybEHkec1gd3O1f8V2TRaG2TMWdFUpxlkDxjMrI42fer4z%2FDo3hvmWNfVvU%2B73Fc7TfnB%2BOaTs3ywRFEhorWDlJ8R9727A&X-Amz-Signature=f57c1ac49af625eb86f8fe5ad2edae1c38a95977a2af8db29cdecb1a357ec75c&X-Amz-SignedHeaders=host&x-id=GetObject)
