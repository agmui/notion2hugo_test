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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNKKUI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDc8CW4S9WehzInfUosiSZ6RW8kpkWBPny0hXJdZobaaAIgNniuOcNHFYySl7BHvInDs%2B6Fc1ndQI%2Bs5YwyUfjy92gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhb4%2Fpa1phQPoeizyrcA01MkrlScszMVNQRFtPWKpkQykjOxJjad58AYW7R02mo%2FzhJM4RH5yFQIUleKZ6o%2F%2FV8z9dyNMvuOHCWVQUFsy0Ei6c9ZIfnS%2FYC3PFyt9ecKVKqNoMgOBaAj4KPLwwT1P61OddJE5kClaCJb5tKDl20OQMEGCUctEm1ULFSTxMrxK6n%2BOjO7SrS9NShPfgOk7IHH2i1KGlUnfkyC6OebzEEAVHaycugfN5oOyCt3repg9I%2BaB92uw%2BPZLfikGqW5MPLTRZZTzvYgUP%2FkowFRUcbs%2B6Lkiq2xvm0CRwxpM3XuDVfcWuskCF4sa0LVtHdOQUfGTDa%2By5duKL87SbXHzBiPHCgoYJTwonmqAmxvyzFekos1UgmD2UPOIfrDAEoyM3baT4qegwAJK2%2BkrdeKGGCiQt34kBQdouymbdTeJFhV4pLmxONk6%2BlW6ydIO%2F0%2FL1zHUGRwzKxVJ6ewfqG%2Bv6OJzEBwgREwkEfBAIt7R1sRcPmbAQvYPiCOyBgAP9BuFEJsHRdKuKi%2BOka2c8VjW7mS%2FGT%2BY%2B4mjZgBicePkEflBZ2Hl0gjsel3GXzs%2FC3LBDnQuzRjHdR5O1QDQFg%2FLkNHPw6lc9MAzeuKSOczd6YOXeAyBU394hEoiWLMPqm7r4GOqUBmmiE5D1d0%2BKGpJcvu1jJqZY5LCbydcJmeuQ8aovTe90ipUvgV3NHMUHSkj12RqezDgYCWYEj3YKZnrZFy%2BBW64UNISfvKzTjYSUa7PRZG5FvtH65FwdIbtV4d0tE1dZ%2BZwKSI8qA7%2FJX4qqDpxUdabim2UaqHOdUkdu%2FDZRvPvBKBKLeldYzNQNHIqUYqSBnPQCIXC6bV8I2%2FWECR6%2BX0kuA0pRV&X-Amz-Signature=4cb682e554b0b1eb473aa94af7bfd90a0438b29636444f48b4fb6f95e7cbb32d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNKKUI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDc8CW4S9WehzInfUosiSZ6RW8kpkWBPny0hXJdZobaaAIgNniuOcNHFYySl7BHvInDs%2B6Fc1ndQI%2Bs5YwyUfjy92gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhb4%2Fpa1phQPoeizyrcA01MkrlScszMVNQRFtPWKpkQykjOxJjad58AYW7R02mo%2FzhJM4RH5yFQIUleKZ6o%2F%2FV8z9dyNMvuOHCWVQUFsy0Ei6c9ZIfnS%2FYC3PFyt9ecKVKqNoMgOBaAj4KPLwwT1P61OddJE5kClaCJb5tKDl20OQMEGCUctEm1ULFSTxMrxK6n%2BOjO7SrS9NShPfgOk7IHH2i1KGlUnfkyC6OebzEEAVHaycugfN5oOyCt3repg9I%2BaB92uw%2BPZLfikGqW5MPLTRZZTzvYgUP%2FkowFRUcbs%2B6Lkiq2xvm0CRwxpM3XuDVfcWuskCF4sa0LVtHdOQUfGTDa%2By5duKL87SbXHzBiPHCgoYJTwonmqAmxvyzFekos1UgmD2UPOIfrDAEoyM3baT4qegwAJK2%2BkrdeKGGCiQt34kBQdouymbdTeJFhV4pLmxONk6%2BlW6ydIO%2F0%2FL1zHUGRwzKxVJ6ewfqG%2Bv6OJzEBwgREwkEfBAIt7R1sRcPmbAQvYPiCOyBgAP9BuFEJsHRdKuKi%2BOka2c8VjW7mS%2FGT%2BY%2B4mjZgBicePkEflBZ2Hl0gjsel3GXzs%2FC3LBDnQuzRjHdR5O1QDQFg%2FLkNHPw6lc9MAzeuKSOczd6YOXeAyBU394hEoiWLMPqm7r4GOqUBmmiE5D1d0%2BKGpJcvu1jJqZY5LCbydcJmeuQ8aovTe90ipUvgV3NHMUHSkj12RqezDgYCWYEj3YKZnrZFy%2BBW64UNISfvKzTjYSUa7PRZG5FvtH65FwdIbtV4d0tE1dZ%2BZwKSI8qA7%2FJX4qqDpxUdabim2UaqHOdUkdu%2FDZRvPvBKBKLeldYzNQNHIqUYqSBnPQCIXC6bV8I2%2FWECR6%2BX0kuA0pRV&X-Amz-Signature=a103ccf5326376393fbc5f2bed79137a504c9ae24f3a19631829ece2187209bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNKKUI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDc8CW4S9WehzInfUosiSZ6RW8kpkWBPny0hXJdZobaaAIgNniuOcNHFYySl7BHvInDs%2B6Fc1ndQI%2Bs5YwyUfjy92gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhb4%2Fpa1phQPoeizyrcA01MkrlScszMVNQRFtPWKpkQykjOxJjad58AYW7R02mo%2FzhJM4RH5yFQIUleKZ6o%2F%2FV8z9dyNMvuOHCWVQUFsy0Ei6c9ZIfnS%2FYC3PFyt9ecKVKqNoMgOBaAj4KPLwwT1P61OddJE5kClaCJb5tKDl20OQMEGCUctEm1ULFSTxMrxK6n%2BOjO7SrS9NShPfgOk7IHH2i1KGlUnfkyC6OebzEEAVHaycugfN5oOyCt3repg9I%2BaB92uw%2BPZLfikGqW5MPLTRZZTzvYgUP%2FkowFRUcbs%2B6Lkiq2xvm0CRwxpM3XuDVfcWuskCF4sa0LVtHdOQUfGTDa%2By5duKL87SbXHzBiPHCgoYJTwonmqAmxvyzFekos1UgmD2UPOIfrDAEoyM3baT4qegwAJK2%2BkrdeKGGCiQt34kBQdouymbdTeJFhV4pLmxONk6%2BlW6ydIO%2F0%2FL1zHUGRwzKxVJ6ewfqG%2Bv6OJzEBwgREwkEfBAIt7R1sRcPmbAQvYPiCOyBgAP9BuFEJsHRdKuKi%2BOka2c8VjW7mS%2FGT%2BY%2B4mjZgBicePkEflBZ2Hl0gjsel3GXzs%2FC3LBDnQuzRjHdR5O1QDQFg%2FLkNHPw6lc9MAzeuKSOczd6YOXeAyBU394hEoiWLMPqm7r4GOqUBmmiE5D1d0%2BKGpJcvu1jJqZY5LCbydcJmeuQ8aovTe90ipUvgV3NHMUHSkj12RqezDgYCWYEj3YKZnrZFy%2BBW64UNISfvKzTjYSUa7PRZG5FvtH65FwdIbtV4d0tE1dZ%2BZwKSI8qA7%2FJX4qqDpxUdabim2UaqHOdUkdu%2FDZRvPvBKBKLeldYzNQNHIqUYqSBnPQCIXC6bV8I2%2FWECR6%2BX0kuA0pRV&X-Amz-Signature=6f725c1546d8ecbd9f8034a557cab87e3b05dada30138ad770710444a6845340&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNKKUI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDc8CW4S9WehzInfUosiSZ6RW8kpkWBPny0hXJdZobaaAIgNniuOcNHFYySl7BHvInDs%2B6Fc1ndQI%2Bs5YwyUfjy92gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhb4%2Fpa1phQPoeizyrcA01MkrlScszMVNQRFtPWKpkQykjOxJjad58AYW7R02mo%2FzhJM4RH5yFQIUleKZ6o%2F%2FV8z9dyNMvuOHCWVQUFsy0Ei6c9ZIfnS%2FYC3PFyt9ecKVKqNoMgOBaAj4KPLwwT1P61OddJE5kClaCJb5tKDl20OQMEGCUctEm1ULFSTxMrxK6n%2BOjO7SrS9NShPfgOk7IHH2i1KGlUnfkyC6OebzEEAVHaycugfN5oOyCt3repg9I%2BaB92uw%2BPZLfikGqW5MPLTRZZTzvYgUP%2FkowFRUcbs%2B6Lkiq2xvm0CRwxpM3XuDVfcWuskCF4sa0LVtHdOQUfGTDa%2By5duKL87SbXHzBiPHCgoYJTwonmqAmxvyzFekos1UgmD2UPOIfrDAEoyM3baT4qegwAJK2%2BkrdeKGGCiQt34kBQdouymbdTeJFhV4pLmxONk6%2BlW6ydIO%2F0%2FL1zHUGRwzKxVJ6ewfqG%2Bv6OJzEBwgREwkEfBAIt7R1sRcPmbAQvYPiCOyBgAP9BuFEJsHRdKuKi%2BOka2c8VjW7mS%2FGT%2BY%2B4mjZgBicePkEflBZ2Hl0gjsel3GXzs%2FC3LBDnQuzRjHdR5O1QDQFg%2FLkNHPw6lc9MAzeuKSOczd6YOXeAyBU394hEoiWLMPqm7r4GOqUBmmiE5D1d0%2BKGpJcvu1jJqZY5LCbydcJmeuQ8aovTe90ipUvgV3NHMUHSkj12RqezDgYCWYEj3YKZnrZFy%2BBW64UNISfvKzTjYSUa7PRZG5FvtH65FwdIbtV4d0tE1dZ%2BZwKSI8qA7%2FJX4qqDpxUdabim2UaqHOdUkdu%2FDZRvPvBKBKLeldYzNQNHIqUYqSBnPQCIXC6bV8I2%2FWECR6%2BX0kuA0pRV&X-Amz-Signature=46b61f39491c9d66bb259f812af292bd8aa41e3604272776482f894dcdb5e862&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNKKUI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDc8CW4S9WehzInfUosiSZ6RW8kpkWBPny0hXJdZobaaAIgNniuOcNHFYySl7BHvInDs%2B6Fc1ndQI%2Bs5YwyUfjy92gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhb4%2Fpa1phQPoeizyrcA01MkrlScszMVNQRFtPWKpkQykjOxJjad58AYW7R02mo%2FzhJM4RH5yFQIUleKZ6o%2F%2FV8z9dyNMvuOHCWVQUFsy0Ei6c9ZIfnS%2FYC3PFyt9ecKVKqNoMgOBaAj4KPLwwT1P61OddJE5kClaCJb5tKDl20OQMEGCUctEm1ULFSTxMrxK6n%2BOjO7SrS9NShPfgOk7IHH2i1KGlUnfkyC6OebzEEAVHaycugfN5oOyCt3repg9I%2BaB92uw%2BPZLfikGqW5MPLTRZZTzvYgUP%2FkowFRUcbs%2B6Lkiq2xvm0CRwxpM3XuDVfcWuskCF4sa0LVtHdOQUfGTDa%2By5duKL87SbXHzBiPHCgoYJTwonmqAmxvyzFekos1UgmD2UPOIfrDAEoyM3baT4qegwAJK2%2BkrdeKGGCiQt34kBQdouymbdTeJFhV4pLmxONk6%2BlW6ydIO%2F0%2FL1zHUGRwzKxVJ6ewfqG%2Bv6OJzEBwgREwkEfBAIt7R1sRcPmbAQvYPiCOyBgAP9BuFEJsHRdKuKi%2BOka2c8VjW7mS%2FGT%2BY%2B4mjZgBicePkEflBZ2Hl0gjsel3GXzs%2FC3LBDnQuzRjHdR5O1QDQFg%2FLkNHPw6lc9MAzeuKSOczd6YOXeAyBU394hEoiWLMPqm7r4GOqUBmmiE5D1d0%2BKGpJcvu1jJqZY5LCbydcJmeuQ8aovTe90ipUvgV3NHMUHSkj12RqezDgYCWYEj3YKZnrZFy%2BBW64UNISfvKzTjYSUa7PRZG5FvtH65FwdIbtV4d0tE1dZ%2BZwKSI8qA7%2FJX4qqDpxUdabim2UaqHOdUkdu%2FDZRvPvBKBKLeldYzNQNHIqUYqSBnPQCIXC6bV8I2%2FWECR6%2BX0kuA0pRV&X-Amz-Signature=f704d893710b90df6d646ebf55882e53496d65367cdb0ab4552cab3b89a44fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XNKKUI%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDc8CW4S9WehzInfUosiSZ6RW8kpkWBPny0hXJdZobaaAIgNniuOcNHFYySl7BHvInDs%2B6Fc1ndQI%2Bs5YwyUfjy92gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhb4%2Fpa1phQPoeizyrcA01MkrlScszMVNQRFtPWKpkQykjOxJjad58AYW7R02mo%2FzhJM4RH5yFQIUleKZ6o%2F%2FV8z9dyNMvuOHCWVQUFsy0Ei6c9ZIfnS%2FYC3PFyt9ecKVKqNoMgOBaAj4KPLwwT1P61OddJE5kClaCJb5tKDl20OQMEGCUctEm1ULFSTxMrxK6n%2BOjO7SrS9NShPfgOk7IHH2i1KGlUnfkyC6OebzEEAVHaycugfN5oOyCt3repg9I%2BaB92uw%2BPZLfikGqW5MPLTRZZTzvYgUP%2FkowFRUcbs%2B6Lkiq2xvm0CRwxpM3XuDVfcWuskCF4sa0LVtHdOQUfGTDa%2By5duKL87SbXHzBiPHCgoYJTwonmqAmxvyzFekos1UgmD2UPOIfrDAEoyM3baT4qegwAJK2%2BkrdeKGGCiQt34kBQdouymbdTeJFhV4pLmxONk6%2BlW6ydIO%2F0%2FL1zHUGRwzKxVJ6ewfqG%2Bv6OJzEBwgREwkEfBAIt7R1sRcPmbAQvYPiCOyBgAP9BuFEJsHRdKuKi%2BOka2c8VjW7mS%2FGT%2BY%2B4mjZgBicePkEflBZ2Hl0gjsel3GXzs%2FC3LBDnQuzRjHdR5O1QDQFg%2FLkNHPw6lc9MAzeuKSOczd6YOXeAyBU394hEoiWLMPqm7r4GOqUBmmiE5D1d0%2BKGpJcvu1jJqZY5LCbydcJmeuQ8aovTe90ipUvgV3NHMUHSkj12RqezDgYCWYEj3YKZnrZFy%2BBW64UNISfvKzTjYSUa7PRZG5FvtH65FwdIbtV4d0tE1dZ%2BZwKSI8qA7%2FJX4qqDpxUdabim2UaqHOdUkdu%2FDZRvPvBKBKLeldYzNQNHIqUYqSBnPQCIXC6bV8I2%2FWECR6%2BX0kuA0pRV&X-Amz-Signature=a87cde056514bf875ff965c0d153a6dfe9ddb0e2e1fba1fbd71783b9865db9d0&X-Amz-SignedHeaders=host&x-id=GetObject)
