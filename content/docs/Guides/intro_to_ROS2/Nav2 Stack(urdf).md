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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75RJTJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2FU95lfn0qoakfY7wUhL4ku0ew7RrDa3PY1LcUDHcWwIhAPFxQK0MzLpAupVvsaHLCiPea0UbkY5f67litKYgkztjKv8DCDQQABoMNjM3NDIzMTgzODA1IgwpderPInpDtU4hvWgq3AM%2FqHqeTbM4NWERzQ6%2Ff3iToGoQk5e1KQ1f7q226Q%2F%2BRVYHkGisbP%2F4L%2BwHgCnyCtI8ue%2Bq%2FUY%2B%2FlD5assP%2BlYu0Y%2FyrVIcb5raBtNboJ1blpoLgROfFwmwCM%2FUGEGQ1eAzvUU%2F7GkSkY26AUt12aGnA03HByN1BDXPpcjusR1E79wxmUvkxFNvf2hY%2BUl53QM0%2FFA%2B3ihFgQhSE9l8GxMe3ZsOpPLJJruCvzURpl5HSEi2cE2Ugv2dD8EplCQzoPcKtDihTrIYzSdDGB04UFWOuOprJdqE7ziX3siOLueyhXAZRuTkRFL99r1ZUF0vZBxLaXQF%2BqU%2FvlIIFFqBfK80UKz67hOak4eglu7Aq64UxOuBFA7tfHr0LcJcnXJIk9g5H8o3WxLbEO1ymyRc%2Bt9bmnVyfeTGQuZfs4nQOrwAyL6k6niKXHp7lLlF58hiyP06clCTkiO294LlGwnqwmqcKzJ3t5Qd9sFPODoSmL8fqD80QhWMhqbL0MhG7W9%2B4MKzOeEeBKNpLlJm3Z07gkGcjsIiihNB50tazu%2BK3hAntw5rQLlTzT9TUvzcna0%2BE9%2F5WW401H3KVjranCWVE56QDYwDZ6bmBTox3%2FGIoWC4CPSBhwemuG78WW3nCDCW1vq%2FBjqkAaxsMN5GUcEseqSmFTzWCncARTITdPSZyrT3ej5qOhvDMWzk2CPUJsoXvLX03V%2FXnK%2B69PWZym4CI8Q8Sw%2FJ%2BOSU3dBSyudiMr1hcGK1%2BNyyr%2FBKCbLc5usKSG78H5htkVKcEjpmPCbgFOY0leHXr%2B%2FIITV2eb%2BmOs%2F2WfiVFUbbzibLfO%2BN4Uo%2B10FGJkDWlyjvxJ4aTEIz4ShuJntdHKj%2B5IjH&X-Amz-Signature=9835b5afd9a9259c9c1cc0b3ca59476448ebb3e53fb831a0b6bfcdf0734a453f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75RJTJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2FU95lfn0qoakfY7wUhL4ku0ew7RrDa3PY1LcUDHcWwIhAPFxQK0MzLpAupVvsaHLCiPea0UbkY5f67litKYgkztjKv8DCDQQABoMNjM3NDIzMTgzODA1IgwpderPInpDtU4hvWgq3AM%2FqHqeTbM4NWERzQ6%2Ff3iToGoQk5e1KQ1f7q226Q%2F%2BRVYHkGisbP%2F4L%2BwHgCnyCtI8ue%2Bq%2FUY%2B%2FlD5assP%2BlYu0Y%2FyrVIcb5raBtNboJ1blpoLgROfFwmwCM%2FUGEGQ1eAzvUU%2F7GkSkY26AUt12aGnA03HByN1BDXPpcjusR1E79wxmUvkxFNvf2hY%2BUl53QM0%2FFA%2B3ihFgQhSE9l8GxMe3ZsOpPLJJruCvzURpl5HSEi2cE2Ugv2dD8EplCQzoPcKtDihTrIYzSdDGB04UFWOuOprJdqE7ziX3siOLueyhXAZRuTkRFL99r1ZUF0vZBxLaXQF%2BqU%2FvlIIFFqBfK80UKz67hOak4eglu7Aq64UxOuBFA7tfHr0LcJcnXJIk9g5H8o3WxLbEO1ymyRc%2Bt9bmnVyfeTGQuZfs4nQOrwAyL6k6niKXHp7lLlF58hiyP06clCTkiO294LlGwnqwmqcKzJ3t5Qd9sFPODoSmL8fqD80QhWMhqbL0MhG7W9%2B4MKzOeEeBKNpLlJm3Z07gkGcjsIiihNB50tazu%2BK3hAntw5rQLlTzT9TUvzcna0%2BE9%2F5WW401H3KVjranCWVE56QDYwDZ6bmBTox3%2FGIoWC4CPSBhwemuG78WW3nCDCW1vq%2FBjqkAaxsMN5GUcEseqSmFTzWCncARTITdPSZyrT3ej5qOhvDMWzk2CPUJsoXvLX03V%2FXnK%2B69PWZym4CI8Q8Sw%2FJ%2BOSU3dBSyudiMr1hcGK1%2BNyyr%2FBKCbLc5usKSG78H5htkVKcEjpmPCbgFOY0leHXr%2B%2FIITV2eb%2BmOs%2F2WfiVFUbbzibLfO%2BN4Uo%2B10FGJkDWlyjvxJ4aTEIz4ShuJntdHKj%2B5IjH&X-Amz-Signature=8806f08abc9f752b59115eb155d7bb510170750ec2904d10bdb8afd635f37622&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75RJTJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2FU95lfn0qoakfY7wUhL4ku0ew7RrDa3PY1LcUDHcWwIhAPFxQK0MzLpAupVvsaHLCiPea0UbkY5f67litKYgkztjKv8DCDQQABoMNjM3NDIzMTgzODA1IgwpderPInpDtU4hvWgq3AM%2FqHqeTbM4NWERzQ6%2Ff3iToGoQk5e1KQ1f7q226Q%2F%2BRVYHkGisbP%2F4L%2BwHgCnyCtI8ue%2Bq%2FUY%2B%2FlD5assP%2BlYu0Y%2FyrVIcb5raBtNboJ1blpoLgROfFwmwCM%2FUGEGQ1eAzvUU%2F7GkSkY26AUt12aGnA03HByN1BDXPpcjusR1E79wxmUvkxFNvf2hY%2BUl53QM0%2FFA%2B3ihFgQhSE9l8GxMe3ZsOpPLJJruCvzURpl5HSEi2cE2Ugv2dD8EplCQzoPcKtDihTrIYzSdDGB04UFWOuOprJdqE7ziX3siOLueyhXAZRuTkRFL99r1ZUF0vZBxLaXQF%2BqU%2FvlIIFFqBfK80UKz67hOak4eglu7Aq64UxOuBFA7tfHr0LcJcnXJIk9g5H8o3WxLbEO1ymyRc%2Bt9bmnVyfeTGQuZfs4nQOrwAyL6k6niKXHp7lLlF58hiyP06clCTkiO294LlGwnqwmqcKzJ3t5Qd9sFPODoSmL8fqD80QhWMhqbL0MhG7W9%2B4MKzOeEeBKNpLlJm3Z07gkGcjsIiihNB50tazu%2BK3hAntw5rQLlTzT9TUvzcna0%2BE9%2F5WW401H3KVjranCWVE56QDYwDZ6bmBTox3%2FGIoWC4CPSBhwemuG78WW3nCDCW1vq%2FBjqkAaxsMN5GUcEseqSmFTzWCncARTITdPSZyrT3ej5qOhvDMWzk2CPUJsoXvLX03V%2FXnK%2B69PWZym4CI8Q8Sw%2FJ%2BOSU3dBSyudiMr1hcGK1%2BNyyr%2FBKCbLc5usKSG78H5htkVKcEjpmPCbgFOY0leHXr%2B%2FIITV2eb%2BmOs%2F2WfiVFUbbzibLfO%2BN4Uo%2B10FGJkDWlyjvxJ4aTEIz4ShuJntdHKj%2B5IjH&X-Amz-Signature=8776c61fe74b0cf04c93eec3cd39edcac3aba30381ae46fa646d8e3456b98332&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75RJTJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2FU95lfn0qoakfY7wUhL4ku0ew7RrDa3PY1LcUDHcWwIhAPFxQK0MzLpAupVvsaHLCiPea0UbkY5f67litKYgkztjKv8DCDQQABoMNjM3NDIzMTgzODA1IgwpderPInpDtU4hvWgq3AM%2FqHqeTbM4NWERzQ6%2Ff3iToGoQk5e1KQ1f7q226Q%2F%2BRVYHkGisbP%2F4L%2BwHgCnyCtI8ue%2Bq%2FUY%2B%2FlD5assP%2BlYu0Y%2FyrVIcb5raBtNboJ1blpoLgROfFwmwCM%2FUGEGQ1eAzvUU%2F7GkSkY26AUt12aGnA03HByN1BDXPpcjusR1E79wxmUvkxFNvf2hY%2BUl53QM0%2FFA%2B3ihFgQhSE9l8GxMe3ZsOpPLJJruCvzURpl5HSEi2cE2Ugv2dD8EplCQzoPcKtDihTrIYzSdDGB04UFWOuOprJdqE7ziX3siOLueyhXAZRuTkRFL99r1ZUF0vZBxLaXQF%2BqU%2FvlIIFFqBfK80UKz67hOak4eglu7Aq64UxOuBFA7tfHr0LcJcnXJIk9g5H8o3WxLbEO1ymyRc%2Bt9bmnVyfeTGQuZfs4nQOrwAyL6k6niKXHp7lLlF58hiyP06clCTkiO294LlGwnqwmqcKzJ3t5Qd9sFPODoSmL8fqD80QhWMhqbL0MhG7W9%2B4MKzOeEeBKNpLlJm3Z07gkGcjsIiihNB50tazu%2BK3hAntw5rQLlTzT9TUvzcna0%2BE9%2F5WW401H3KVjranCWVE56QDYwDZ6bmBTox3%2FGIoWC4CPSBhwemuG78WW3nCDCW1vq%2FBjqkAaxsMN5GUcEseqSmFTzWCncARTITdPSZyrT3ej5qOhvDMWzk2CPUJsoXvLX03V%2FXnK%2B69PWZym4CI8Q8Sw%2FJ%2BOSU3dBSyudiMr1hcGK1%2BNyyr%2FBKCbLc5usKSG78H5htkVKcEjpmPCbgFOY0leHXr%2B%2FIITV2eb%2BmOs%2F2WfiVFUbbzibLfO%2BN4Uo%2B10FGJkDWlyjvxJ4aTEIz4ShuJntdHKj%2B5IjH&X-Amz-Signature=10b0df39707427c8ad80adb3a67d2fd91031aa38c91c14adbefad7aefa6357d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75RJTJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2FU95lfn0qoakfY7wUhL4ku0ew7RrDa3PY1LcUDHcWwIhAPFxQK0MzLpAupVvsaHLCiPea0UbkY5f67litKYgkztjKv8DCDQQABoMNjM3NDIzMTgzODA1IgwpderPInpDtU4hvWgq3AM%2FqHqeTbM4NWERzQ6%2Ff3iToGoQk5e1KQ1f7q226Q%2F%2BRVYHkGisbP%2F4L%2BwHgCnyCtI8ue%2Bq%2FUY%2B%2FlD5assP%2BlYu0Y%2FyrVIcb5raBtNboJ1blpoLgROfFwmwCM%2FUGEGQ1eAzvUU%2F7GkSkY26AUt12aGnA03HByN1BDXPpcjusR1E79wxmUvkxFNvf2hY%2BUl53QM0%2FFA%2B3ihFgQhSE9l8GxMe3ZsOpPLJJruCvzURpl5HSEi2cE2Ugv2dD8EplCQzoPcKtDihTrIYzSdDGB04UFWOuOprJdqE7ziX3siOLueyhXAZRuTkRFL99r1ZUF0vZBxLaXQF%2BqU%2FvlIIFFqBfK80UKz67hOak4eglu7Aq64UxOuBFA7tfHr0LcJcnXJIk9g5H8o3WxLbEO1ymyRc%2Bt9bmnVyfeTGQuZfs4nQOrwAyL6k6niKXHp7lLlF58hiyP06clCTkiO294LlGwnqwmqcKzJ3t5Qd9sFPODoSmL8fqD80QhWMhqbL0MhG7W9%2B4MKzOeEeBKNpLlJm3Z07gkGcjsIiihNB50tazu%2BK3hAntw5rQLlTzT9TUvzcna0%2BE9%2F5WW401H3KVjranCWVE56QDYwDZ6bmBTox3%2FGIoWC4CPSBhwemuG78WW3nCDCW1vq%2FBjqkAaxsMN5GUcEseqSmFTzWCncARTITdPSZyrT3ej5qOhvDMWzk2CPUJsoXvLX03V%2FXnK%2B69PWZym4CI8Q8Sw%2FJ%2BOSU3dBSyudiMr1hcGK1%2BNyyr%2FBKCbLc5usKSG78H5htkVKcEjpmPCbgFOY0leHXr%2B%2FIITV2eb%2BmOs%2F2WfiVFUbbzibLfO%2BN4Uo%2B10FGJkDWlyjvxJ4aTEIz4ShuJntdHKj%2B5IjH&X-Amz-Signature=d35cdd2c2a28e55eddfcf30358ffb4a6c5b279de0d93cb936a4e1461f42d5f80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F75RJTJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2FU95lfn0qoakfY7wUhL4ku0ew7RrDa3PY1LcUDHcWwIhAPFxQK0MzLpAupVvsaHLCiPea0UbkY5f67litKYgkztjKv8DCDQQABoMNjM3NDIzMTgzODA1IgwpderPInpDtU4hvWgq3AM%2FqHqeTbM4NWERzQ6%2Ff3iToGoQk5e1KQ1f7q226Q%2F%2BRVYHkGisbP%2F4L%2BwHgCnyCtI8ue%2Bq%2FUY%2B%2FlD5assP%2BlYu0Y%2FyrVIcb5raBtNboJ1blpoLgROfFwmwCM%2FUGEGQ1eAzvUU%2F7GkSkY26AUt12aGnA03HByN1BDXPpcjusR1E79wxmUvkxFNvf2hY%2BUl53QM0%2FFA%2B3ihFgQhSE9l8GxMe3ZsOpPLJJruCvzURpl5HSEi2cE2Ugv2dD8EplCQzoPcKtDihTrIYzSdDGB04UFWOuOprJdqE7ziX3siOLueyhXAZRuTkRFL99r1ZUF0vZBxLaXQF%2BqU%2FvlIIFFqBfK80UKz67hOak4eglu7Aq64UxOuBFA7tfHr0LcJcnXJIk9g5H8o3WxLbEO1ymyRc%2Bt9bmnVyfeTGQuZfs4nQOrwAyL6k6niKXHp7lLlF58hiyP06clCTkiO294LlGwnqwmqcKzJ3t5Qd9sFPODoSmL8fqD80QhWMhqbL0MhG7W9%2B4MKzOeEeBKNpLlJm3Z07gkGcjsIiihNB50tazu%2BK3hAntw5rQLlTzT9TUvzcna0%2BE9%2F5WW401H3KVjranCWVE56QDYwDZ6bmBTox3%2FGIoWC4CPSBhwemuG78WW3nCDCW1vq%2FBjqkAaxsMN5GUcEseqSmFTzWCncARTITdPSZyrT3ej5qOhvDMWzk2CPUJsoXvLX03V%2FXnK%2B69PWZym4CI8Q8Sw%2FJ%2BOSU3dBSyudiMr1hcGK1%2BNyyr%2FBKCbLc5usKSG78H5htkVKcEjpmPCbgFOY0leHXr%2B%2FIITV2eb%2BmOs%2F2WfiVFUbbzibLfO%2BN4Uo%2B10FGJkDWlyjvxJ4aTEIz4ShuJntdHKj%2B5IjH&X-Amz-Signature=6219883069964bd5634d3d76e324bcc8a1e7fd9fc9b42ae7ecaeb50f6d4673e4&X-Amz-SignedHeaders=host&x-id=GetObject)
