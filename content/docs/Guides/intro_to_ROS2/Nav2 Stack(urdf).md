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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQEAZ2V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnMb71UnjeZ6Wk6gvJOSCH454f40dowVzpVdmojJrb4AiBCU0GgrDkyNOKpIf%2BD9XTsjIPEnbSV4w3gQxTJkbgmhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKm7VT5XMNONUt9T0KtwDmP0dEpEU81x0ItlI04%2F6sr%2Bhs%2Fc8M2hLuM1du99cRArRYLmb4nlwlprPwI9P3WGkG1SbXerQ0ymJONahqOa0cyApEZ8DNIgsUe0yuKP4aGbdz%2F6PpMzgCDHFIx3jpGYLv5lKL%2B0SFq8m1KL9mFRbYcsjDuQ4%2Box4HwdeP0aQ%2FdqGHTWVQahkpG7HNlBX20bBYpNkS5iybSqmg5jkrP2MqSsJvGaTba2MyAJ9Cw8cZClrd9gSW1aJsVo296Pvu0%2BH8NYnqSPl2mZaqeRBoRXIKAMRsaLRJjbG%2FK3AzxfrJsfb7wWr6laOhcHG%2FkDcjnp%2FFK1%2BvdXqzJjPRJRx2kCXrp7OFVqdCSQWjv03yh%2BJboe62QFmiTbGc0Ehy%2FmFGybPkO4AeWToAH0BpE64XbkAB4za3u7O5zzOWG7QPniRGikhiZmXvy93tMifU25GXxadqPP%2B%2F9WqIZ34QYCKLMWtkh7eAaC9CfI2dtfev2vog4MuB6uXC8YuyOPU6%2F53yMpL9dvAUYl0cRP925QmyA4UZPNyrNqc08RX4Ay50s6FlTzIC7KEBWAkUCfggTZsSfIdQhFLV1ZZNJ0Hhzueb%2BYhqnclN8OgkrKgOmE9xSv79yjqa0wuN2MiJH25aoUwuPjcwQY6pgFvXYSuYPMhNUGEsCd9Jo1wiFhfuN7DZ9wPWUbAHEULHn7dLkkP02UbeK7kqR1zgteFmPp%2F%2FX3y6kuACJA%2FwbOCRUZsSCBL9%2B7%2FF0MqBDja%2FjeDENek7OD5ER1lCtfgyBqFjEE%2FsEc0LQ%2BWCnA6GmXCFWqYzXDkmfBE%2FcrVTiVIpLSwQDtLR3CHPdnB7A2f2yIWYFMiGJtBacdZ1ieZ6gTUSlurhCeF&X-Amz-Signature=5f57d2322ef738d6c397db7f230069f9b29bd8f5bba2c1293e606c029921a7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQEAZ2V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnMb71UnjeZ6Wk6gvJOSCH454f40dowVzpVdmojJrb4AiBCU0GgrDkyNOKpIf%2BD9XTsjIPEnbSV4w3gQxTJkbgmhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKm7VT5XMNONUt9T0KtwDmP0dEpEU81x0ItlI04%2F6sr%2Bhs%2Fc8M2hLuM1du99cRArRYLmb4nlwlprPwI9P3WGkG1SbXerQ0ymJONahqOa0cyApEZ8DNIgsUe0yuKP4aGbdz%2F6PpMzgCDHFIx3jpGYLv5lKL%2B0SFq8m1KL9mFRbYcsjDuQ4%2Box4HwdeP0aQ%2FdqGHTWVQahkpG7HNlBX20bBYpNkS5iybSqmg5jkrP2MqSsJvGaTba2MyAJ9Cw8cZClrd9gSW1aJsVo296Pvu0%2BH8NYnqSPl2mZaqeRBoRXIKAMRsaLRJjbG%2FK3AzxfrJsfb7wWr6laOhcHG%2FkDcjnp%2FFK1%2BvdXqzJjPRJRx2kCXrp7OFVqdCSQWjv03yh%2BJboe62QFmiTbGc0Ehy%2FmFGybPkO4AeWToAH0BpE64XbkAB4za3u7O5zzOWG7QPniRGikhiZmXvy93tMifU25GXxadqPP%2B%2F9WqIZ34QYCKLMWtkh7eAaC9CfI2dtfev2vog4MuB6uXC8YuyOPU6%2F53yMpL9dvAUYl0cRP925QmyA4UZPNyrNqc08RX4Ay50s6FlTzIC7KEBWAkUCfggTZsSfIdQhFLV1ZZNJ0Hhzueb%2BYhqnclN8OgkrKgOmE9xSv79yjqa0wuN2MiJH25aoUwuPjcwQY6pgFvXYSuYPMhNUGEsCd9Jo1wiFhfuN7DZ9wPWUbAHEULHn7dLkkP02UbeK7kqR1zgteFmPp%2F%2FX3y6kuACJA%2FwbOCRUZsSCBL9%2B7%2FF0MqBDja%2FjeDENek7OD5ER1lCtfgyBqFjEE%2FsEc0LQ%2BWCnA6GmXCFWqYzXDkmfBE%2FcrVTiVIpLSwQDtLR3CHPdnB7A2f2yIWYFMiGJtBacdZ1ieZ6gTUSlurhCeF&X-Amz-Signature=b3d6116c19c874efb3ff4ed34a3c8eb7e824ae4e3add91dccd543be4089c3dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQEAZ2V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnMb71UnjeZ6Wk6gvJOSCH454f40dowVzpVdmojJrb4AiBCU0GgrDkyNOKpIf%2BD9XTsjIPEnbSV4w3gQxTJkbgmhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKm7VT5XMNONUt9T0KtwDmP0dEpEU81x0ItlI04%2F6sr%2Bhs%2Fc8M2hLuM1du99cRArRYLmb4nlwlprPwI9P3WGkG1SbXerQ0ymJONahqOa0cyApEZ8DNIgsUe0yuKP4aGbdz%2F6PpMzgCDHFIx3jpGYLv5lKL%2B0SFq8m1KL9mFRbYcsjDuQ4%2Box4HwdeP0aQ%2FdqGHTWVQahkpG7HNlBX20bBYpNkS5iybSqmg5jkrP2MqSsJvGaTba2MyAJ9Cw8cZClrd9gSW1aJsVo296Pvu0%2BH8NYnqSPl2mZaqeRBoRXIKAMRsaLRJjbG%2FK3AzxfrJsfb7wWr6laOhcHG%2FkDcjnp%2FFK1%2BvdXqzJjPRJRx2kCXrp7OFVqdCSQWjv03yh%2BJboe62QFmiTbGc0Ehy%2FmFGybPkO4AeWToAH0BpE64XbkAB4za3u7O5zzOWG7QPniRGikhiZmXvy93tMifU25GXxadqPP%2B%2F9WqIZ34QYCKLMWtkh7eAaC9CfI2dtfev2vog4MuB6uXC8YuyOPU6%2F53yMpL9dvAUYl0cRP925QmyA4UZPNyrNqc08RX4Ay50s6FlTzIC7KEBWAkUCfggTZsSfIdQhFLV1ZZNJ0Hhzueb%2BYhqnclN8OgkrKgOmE9xSv79yjqa0wuN2MiJH25aoUwuPjcwQY6pgFvXYSuYPMhNUGEsCd9Jo1wiFhfuN7DZ9wPWUbAHEULHn7dLkkP02UbeK7kqR1zgteFmPp%2F%2FX3y6kuACJA%2FwbOCRUZsSCBL9%2B7%2FF0MqBDja%2FjeDENek7OD5ER1lCtfgyBqFjEE%2FsEc0LQ%2BWCnA6GmXCFWqYzXDkmfBE%2FcrVTiVIpLSwQDtLR3CHPdnB7A2f2yIWYFMiGJtBacdZ1ieZ6gTUSlurhCeF&X-Amz-Signature=73e8e49a9225afa822e1e6ea9228bcfbeec7db7aea88434120a5846ba8a40791&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQEAZ2V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnMb71UnjeZ6Wk6gvJOSCH454f40dowVzpVdmojJrb4AiBCU0GgrDkyNOKpIf%2BD9XTsjIPEnbSV4w3gQxTJkbgmhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKm7VT5XMNONUt9T0KtwDmP0dEpEU81x0ItlI04%2F6sr%2Bhs%2Fc8M2hLuM1du99cRArRYLmb4nlwlprPwI9P3WGkG1SbXerQ0ymJONahqOa0cyApEZ8DNIgsUe0yuKP4aGbdz%2F6PpMzgCDHFIx3jpGYLv5lKL%2B0SFq8m1KL9mFRbYcsjDuQ4%2Box4HwdeP0aQ%2FdqGHTWVQahkpG7HNlBX20bBYpNkS5iybSqmg5jkrP2MqSsJvGaTba2MyAJ9Cw8cZClrd9gSW1aJsVo296Pvu0%2BH8NYnqSPl2mZaqeRBoRXIKAMRsaLRJjbG%2FK3AzxfrJsfb7wWr6laOhcHG%2FkDcjnp%2FFK1%2BvdXqzJjPRJRx2kCXrp7OFVqdCSQWjv03yh%2BJboe62QFmiTbGc0Ehy%2FmFGybPkO4AeWToAH0BpE64XbkAB4za3u7O5zzOWG7QPniRGikhiZmXvy93tMifU25GXxadqPP%2B%2F9WqIZ34QYCKLMWtkh7eAaC9CfI2dtfev2vog4MuB6uXC8YuyOPU6%2F53yMpL9dvAUYl0cRP925QmyA4UZPNyrNqc08RX4Ay50s6FlTzIC7KEBWAkUCfggTZsSfIdQhFLV1ZZNJ0Hhzueb%2BYhqnclN8OgkrKgOmE9xSv79yjqa0wuN2MiJH25aoUwuPjcwQY6pgFvXYSuYPMhNUGEsCd9Jo1wiFhfuN7DZ9wPWUbAHEULHn7dLkkP02UbeK7kqR1zgteFmPp%2F%2FX3y6kuACJA%2FwbOCRUZsSCBL9%2B7%2FF0MqBDja%2FjeDENek7OD5ER1lCtfgyBqFjEE%2FsEc0LQ%2BWCnA6GmXCFWqYzXDkmfBE%2FcrVTiVIpLSwQDtLR3CHPdnB7A2f2yIWYFMiGJtBacdZ1ieZ6gTUSlurhCeF&X-Amz-Signature=b85471bf986e2d0cec8fa0f82cdc8b320129c44be2e3899b27e50f2e65178995&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQEAZ2V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnMb71UnjeZ6Wk6gvJOSCH454f40dowVzpVdmojJrb4AiBCU0GgrDkyNOKpIf%2BD9XTsjIPEnbSV4w3gQxTJkbgmhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKm7VT5XMNONUt9T0KtwDmP0dEpEU81x0ItlI04%2F6sr%2Bhs%2Fc8M2hLuM1du99cRArRYLmb4nlwlprPwI9P3WGkG1SbXerQ0ymJONahqOa0cyApEZ8DNIgsUe0yuKP4aGbdz%2F6PpMzgCDHFIx3jpGYLv5lKL%2B0SFq8m1KL9mFRbYcsjDuQ4%2Box4HwdeP0aQ%2FdqGHTWVQahkpG7HNlBX20bBYpNkS5iybSqmg5jkrP2MqSsJvGaTba2MyAJ9Cw8cZClrd9gSW1aJsVo296Pvu0%2BH8NYnqSPl2mZaqeRBoRXIKAMRsaLRJjbG%2FK3AzxfrJsfb7wWr6laOhcHG%2FkDcjnp%2FFK1%2BvdXqzJjPRJRx2kCXrp7OFVqdCSQWjv03yh%2BJboe62QFmiTbGc0Ehy%2FmFGybPkO4AeWToAH0BpE64XbkAB4za3u7O5zzOWG7QPniRGikhiZmXvy93tMifU25GXxadqPP%2B%2F9WqIZ34QYCKLMWtkh7eAaC9CfI2dtfev2vog4MuB6uXC8YuyOPU6%2F53yMpL9dvAUYl0cRP925QmyA4UZPNyrNqc08RX4Ay50s6FlTzIC7KEBWAkUCfggTZsSfIdQhFLV1ZZNJ0Hhzueb%2BYhqnclN8OgkrKgOmE9xSv79yjqa0wuN2MiJH25aoUwuPjcwQY6pgFvXYSuYPMhNUGEsCd9Jo1wiFhfuN7DZ9wPWUbAHEULHn7dLkkP02UbeK7kqR1zgteFmPp%2F%2FX3y6kuACJA%2FwbOCRUZsSCBL9%2B7%2FF0MqBDja%2FjeDENek7OD5ER1lCtfgyBqFjEE%2FsEc0LQ%2BWCnA6GmXCFWqYzXDkmfBE%2FcrVTiVIpLSwQDtLR3CHPdnB7A2f2yIWYFMiGJtBacdZ1ieZ6gTUSlurhCeF&X-Amz-Signature=b5f3529e03e141486004d62c3ee1884fcff2fd0e8b74b1592fa277074dd206b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQEAZ2V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnMb71UnjeZ6Wk6gvJOSCH454f40dowVzpVdmojJrb4AiBCU0GgrDkyNOKpIf%2BD9XTsjIPEnbSV4w3gQxTJkbgmhyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKm7VT5XMNONUt9T0KtwDmP0dEpEU81x0ItlI04%2F6sr%2Bhs%2Fc8M2hLuM1du99cRArRYLmb4nlwlprPwI9P3WGkG1SbXerQ0ymJONahqOa0cyApEZ8DNIgsUe0yuKP4aGbdz%2F6PpMzgCDHFIx3jpGYLv5lKL%2B0SFq8m1KL9mFRbYcsjDuQ4%2Box4HwdeP0aQ%2FdqGHTWVQahkpG7HNlBX20bBYpNkS5iybSqmg5jkrP2MqSsJvGaTba2MyAJ9Cw8cZClrd9gSW1aJsVo296Pvu0%2BH8NYnqSPl2mZaqeRBoRXIKAMRsaLRJjbG%2FK3AzxfrJsfb7wWr6laOhcHG%2FkDcjnp%2FFK1%2BvdXqzJjPRJRx2kCXrp7OFVqdCSQWjv03yh%2BJboe62QFmiTbGc0Ehy%2FmFGybPkO4AeWToAH0BpE64XbkAB4za3u7O5zzOWG7QPniRGikhiZmXvy93tMifU25GXxadqPP%2B%2F9WqIZ34QYCKLMWtkh7eAaC9CfI2dtfev2vog4MuB6uXC8YuyOPU6%2F53yMpL9dvAUYl0cRP925QmyA4UZPNyrNqc08RX4Ay50s6FlTzIC7KEBWAkUCfggTZsSfIdQhFLV1ZZNJ0Hhzueb%2BYhqnclN8OgkrKgOmE9xSv79yjqa0wuN2MiJH25aoUwuPjcwQY6pgFvXYSuYPMhNUGEsCd9Jo1wiFhfuN7DZ9wPWUbAHEULHn7dLkkP02UbeK7kqR1zgteFmPp%2F%2FX3y6kuACJA%2FwbOCRUZsSCBL9%2B7%2FF0MqBDja%2FjeDENek7OD5ER1lCtfgyBqFjEE%2FsEc0LQ%2BWCnA6GmXCFWqYzXDkmfBE%2FcrVTiVIpLSwQDtLR3CHPdnB7A2f2yIWYFMiGJtBacdZ1ieZ6gTUSlurhCeF&X-Amz-Signature=8d2c7ac4e8a2d8b51c57cd345dbb42b42a5c0cef455ec063e1e8181abe9ae2a0&X-Amz-SignedHeaders=host&x-id=GetObject)
