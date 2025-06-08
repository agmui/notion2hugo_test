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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XFT2PU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg4vWhDfv04jYJZel0oMnfTFTVMuhDYvOOTbKXxtF%2F6AiEApxrs3voqAoiGNgtC4a%2F96FsWAg7nIHex4QNMpbNWu7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCia8Hbshz63Vda0XircA89Ao%2B1hpOpfck6TJ%2FGbtKVLw6OInLEsYvf%2FZKMw8WGOPo1utkQC3iXZ3ZsT0GZXuMjZAU%2FLpepIvHMhGp%2FWSnHhuAm%2FHq9crblQhHpmUIq2mFTGEhAyg5Bl9r4kSZmrhk36IeeKSrJu2w8WnPeI235eSDxxj6b9qvL0FagrW0SAThTMvRo2BkfEDOPvIFwoErSERtaJ4YoGhziLjRvc8%2B%2Bjz7PbzHEIGdqWSdVXZNIh6KD7rvdyBqWcdwUdacl9%2BW%2FbB5LrMfcxxSMUlhFwt6EXbpH6RcGsuWrSlInEH5uC7wdqevfn1gmVXv72qoB%2BMBZk7UmYeB8sEKY3wP7%2F98V6q%2FUBEKqRO75zcbrIxtZ%2FrtlTZpFOpT3BqyI63v7%2Fgp1Z%2FXiO8LPEI%2B5yB8J3qCeMna98d0mP4uxmXY18QciDeijWEqkUNchkZiCQLycxHwNtdpCAYzeOVhIGT9dXEvh5PvRZLjzUiuEbgjfgdaOS6OhB5KK5gAn6n9UJ56UAchLgCV55jEiIJuE8HQDzv9caaplRdqdLe%2FXtudSoO%2FDnuNlSDu52dmWNmywrxLWNvV%2B5CpX0nctuB0NlUZ7TEntSuRsUYFxauk3LxDelc9xCT1SQhxEfhecW1jpGMJ%2BxlMIGOqUBIdLSKraU2zfM82%2FX01xt8w3yZxMKQ8GqahL0PiNisHEYmeSAibiRYeVtrVKreJTUtQHnfj6Pi0PUjza3%2FcE4V%2FjGvuGKy4Pb1ZJ34snSRG6afWBroe3LFGdGhB%2BuA6jSrvLFsOPPOcbleQZk7Zv%2BWaOJjWz93caIstKvNKnyn4KwArc2D%2BKvKugFkTrBgImdFOTgObW5LlV99SnkEdlFjXIp%2F8cT&X-Amz-Signature=daf472e3b22152a1e04bc4d8cafd44c53815c3a4c7000896f13669f21a2b2225&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XFT2PU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg4vWhDfv04jYJZel0oMnfTFTVMuhDYvOOTbKXxtF%2F6AiEApxrs3voqAoiGNgtC4a%2F96FsWAg7nIHex4QNMpbNWu7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCia8Hbshz63Vda0XircA89Ao%2B1hpOpfck6TJ%2FGbtKVLw6OInLEsYvf%2FZKMw8WGOPo1utkQC3iXZ3ZsT0GZXuMjZAU%2FLpepIvHMhGp%2FWSnHhuAm%2FHq9crblQhHpmUIq2mFTGEhAyg5Bl9r4kSZmrhk36IeeKSrJu2w8WnPeI235eSDxxj6b9qvL0FagrW0SAThTMvRo2BkfEDOPvIFwoErSERtaJ4YoGhziLjRvc8%2B%2Bjz7PbzHEIGdqWSdVXZNIh6KD7rvdyBqWcdwUdacl9%2BW%2FbB5LrMfcxxSMUlhFwt6EXbpH6RcGsuWrSlInEH5uC7wdqevfn1gmVXv72qoB%2BMBZk7UmYeB8sEKY3wP7%2F98V6q%2FUBEKqRO75zcbrIxtZ%2FrtlTZpFOpT3BqyI63v7%2Fgp1Z%2FXiO8LPEI%2B5yB8J3qCeMna98d0mP4uxmXY18QciDeijWEqkUNchkZiCQLycxHwNtdpCAYzeOVhIGT9dXEvh5PvRZLjzUiuEbgjfgdaOS6OhB5KK5gAn6n9UJ56UAchLgCV55jEiIJuE8HQDzv9caaplRdqdLe%2FXtudSoO%2FDnuNlSDu52dmWNmywrxLWNvV%2B5CpX0nctuB0NlUZ7TEntSuRsUYFxauk3LxDelc9xCT1SQhxEfhecW1jpGMJ%2BxlMIGOqUBIdLSKraU2zfM82%2FX01xt8w3yZxMKQ8GqahL0PiNisHEYmeSAibiRYeVtrVKreJTUtQHnfj6Pi0PUjza3%2FcE4V%2FjGvuGKy4Pb1ZJ34snSRG6afWBroe3LFGdGhB%2BuA6jSrvLFsOPPOcbleQZk7Zv%2BWaOJjWz93caIstKvNKnyn4KwArc2D%2BKvKugFkTrBgImdFOTgObW5LlV99SnkEdlFjXIp%2F8cT&X-Amz-Signature=3282aa851652ab0de8e67519da19ddc69047e3cd96cb637272c480f9891587e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XFT2PU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg4vWhDfv04jYJZel0oMnfTFTVMuhDYvOOTbKXxtF%2F6AiEApxrs3voqAoiGNgtC4a%2F96FsWAg7nIHex4QNMpbNWu7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCia8Hbshz63Vda0XircA89Ao%2B1hpOpfck6TJ%2FGbtKVLw6OInLEsYvf%2FZKMw8WGOPo1utkQC3iXZ3ZsT0GZXuMjZAU%2FLpepIvHMhGp%2FWSnHhuAm%2FHq9crblQhHpmUIq2mFTGEhAyg5Bl9r4kSZmrhk36IeeKSrJu2w8WnPeI235eSDxxj6b9qvL0FagrW0SAThTMvRo2BkfEDOPvIFwoErSERtaJ4YoGhziLjRvc8%2B%2Bjz7PbzHEIGdqWSdVXZNIh6KD7rvdyBqWcdwUdacl9%2BW%2FbB5LrMfcxxSMUlhFwt6EXbpH6RcGsuWrSlInEH5uC7wdqevfn1gmVXv72qoB%2BMBZk7UmYeB8sEKY3wP7%2F98V6q%2FUBEKqRO75zcbrIxtZ%2FrtlTZpFOpT3BqyI63v7%2Fgp1Z%2FXiO8LPEI%2B5yB8J3qCeMna98d0mP4uxmXY18QciDeijWEqkUNchkZiCQLycxHwNtdpCAYzeOVhIGT9dXEvh5PvRZLjzUiuEbgjfgdaOS6OhB5KK5gAn6n9UJ56UAchLgCV55jEiIJuE8HQDzv9caaplRdqdLe%2FXtudSoO%2FDnuNlSDu52dmWNmywrxLWNvV%2B5CpX0nctuB0NlUZ7TEntSuRsUYFxauk3LxDelc9xCT1SQhxEfhecW1jpGMJ%2BxlMIGOqUBIdLSKraU2zfM82%2FX01xt8w3yZxMKQ8GqahL0PiNisHEYmeSAibiRYeVtrVKreJTUtQHnfj6Pi0PUjza3%2FcE4V%2FjGvuGKy4Pb1ZJ34snSRG6afWBroe3LFGdGhB%2BuA6jSrvLFsOPPOcbleQZk7Zv%2BWaOJjWz93caIstKvNKnyn4KwArc2D%2BKvKugFkTrBgImdFOTgObW5LlV99SnkEdlFjXIp%2F8cT&X-Amz-Signature=623f75be355238199d1e8f3ac3414c29b8cad5e0207aa85bd73f57c426784392&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XFT2PU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg4vWhDfv04jYJZel0oMnfTFTVMuhDYvOOTbKXxtF%2F6AiEApxrs3voqAoiGNgtC4a%2F96FsWAg7nIHex4QNMpbNWu7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCia8Hbshz63Vda0XircA89Ao%2B1hpOpfck6TJ%2FGbtKVLw6OInLEsYvf%2FZKMw8WGOPo1utkQC3iXZ3ZsT0GZXuMjZAU%2FLpepIvHMhGp%2FWSnHhuAm%2FHq9crblQhHpmUIq2mFTGEhAyg5Bl9r4kSZmrhk36IeeKSrJu2w8WnPeI235eSDxxj6b9qvL0FagrW0SAThTMvRo2BkfEDOPvIFwoErSERtaJ4YoGhziLjRvc8%2B%2Bjz7PbzHEIGdqWSdVXZNIh6KD7rvdyBqWcdwUdacl9%2BW%2FbB5LrMfcxxSMUlhFwt6EXbpH6RcGsuWrSlInEH5uC7wdqevfn1gmVXv72qoB%2BMBZk7UmYeB8sEKY3wP7%2F98V6q%2FUBEKqRO75zcbrIxtZ%2FrtlTZpFOpT3BqyI63v7%2Fgp1Z%2FXiO8LPEI%2B5yB8J3qCeMna98d0mP4uxmXY18QciDeijWEqkUNchkZiCQLycxHwNtdpCAYzeOVhIGT9dXEvh5PvRZLjzUiuEbgjfgdaOS6OhB5KK5gAn6n9UJ56UAchLgCV55jEiIJuE8HQDzv9caaplRdqdLe%2FXtudSoO%2FDnuNlSDu52dmWNmywrxLWNvV%2B5CpX0nctuB0NlUZ7TEntSuRsUYFxauk3LxDelc9xCT1SQhxEfhecW1jpGMJ%2BxlMIGOqUBIdLSKraU2zfM82%2FX01xt8w3yZxMKQ8GqahL0PiNisHEYmeSAibiRYeVtrVKreJTUtQHnfj6Pi0PUjza3%2FcE4V%2FjGvuGKy4Pb1ZJ34snSRG6afWBroe3LFGdGhB%2BuA6jSrvLFsOPPOcbleQZk7Zv%2BWaOJjWz93caIstKvNKnyn4KwArc2D%2BKvKugFkTrBgImdFOTgObW5LlV99SnkEdlFjXIp%2F8cT&X-Amz-Signature=4c5d767c9ef74c85ae72a0cfc0eacf727b68bd9147cf371049e5254d041e8797&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XFT2PU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg4vWhDfv04jYJZel0oMnfTFTVMuhDYvOOTbKXxtF%2F6AiEApxrs3voqAoiGNgtC4a%2F96FsWAg7nIHex4QNMpbNWu7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCia8Hbshz63Vda0XircA89Ao%2B1hpOpfck6TJ%2FGbtKVLw6OInLEsYvf%2FZKMw8WGOPo1utkQC3iXZ3ZsT0GZXuMjZAU%2FLpepIvHMhGp%2FWSnHhuAm%2FHq9crblQhHpmUIq2mFTGEhAyg5Bl9r4kSZmrhk36IeeKSrJu2w8WnPeI235eSDxxj6b9qvL0FagrW0SAThTMvRo2BkfEDOPvIFwoErSERtaJ4YoGhziLjRvc8%2B%2Bjz7PbzHEIGdqWSdVXZNIh6KD7rvdyBqWcdwUdacl9%2BW%2FbB5LrMfcxxSMUlhFwt6EXbpH6RcGsuWrSlInEH5uC7wdqevfn1gmVXv72qoB%2BMBZk7UmYeB8sEKY3wP7%2F98V6q%2FUBEKqRO75zcbrIxtZ%2FrtlTZpFOpT3BqyI63v7%2Fgp1Z%2FXiO8LPEI%2B5yB8J3qCeMna98d0mP4uxmXY18QciDeijWEqkUNchkZiCQLycxHwNtdpCAYzeOVhIGT9dXEvh5PvRZLjzUiuEbgjfgdaOS6OhB5KK5gAn6n9UJ56UAchLgCV55jEiIJuE8HQDzv9caaplRdqdLe%2FXtudSoO%2FDnuNlSDu52dmWNmywrxLWNvV%2B5CpX0nctuB0NlUZ7TEntSuRsUYFxauk3LxDelc9xCT1SQhxEfhecW1jpGMJ%2BxlMIGOqUBIdLSKraU2zfM82%2FX01xt8w3yZxMKQ8GqahL0PiNisHEYmeSAibiRYeVtrVKreJTUtQHnfj6Pi0PUjza3%2FcE4V%2FjGvuGKy4Pb1ZJ34snSRG6afWBroe3LFGdGhB%2BuA6jSrvLFsOPPOcbleQZk7Zv%2BWaOJjWz93caIstKvNKnyn4KwArc2D%2BKvKugFkTrBgImdFOTgObW5LlV99SnkEdlFjXIp%2F8cT&X-Amz-Signature=900dad62ead54dfa10af383c5f72b4956c20f3ab7aa97e0dae80066b978474b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672XFT2PU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg4vWhDfv04jYJZel0oMnfTFTVMuhDYvOOTbKXxtF%2F6AiEApxrs3voqAoiGNgtC4a%2F96FsWAg7nIHex4QNMpbNWu7AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCia8Hbshz63Vda0XircA89Ao%2B1hpOpfck6TJ%2FGbtKVLw6OInLEsYvf%2FZKMw8WGOPo1utkQC3iXZ3ZsT0GZXuMjZAU%2FLpepIvHMhGp%2FWSnHhuAm%2FHq9crblQhHpmUIq2mFTGEhAyg5Bl9r4kSZmrhk36IeeKSrJu2w8WnPeI235eSDxxj6b9qvL0FagrW0SAThTMvRo2BkfEDOPvIFwoErSERtaJ4YoGhziLjRvc8%2B%2Bjz7PbzHEIGdqWSdVXZNIh6KD7rvdyBqWcdwUdacl9%2BW%2FbB5LrMfcxxSMUlhFwt6EXbpH6RcGsuWrSlInEH5uC7wdqevfn1gmVXv72qoB%2BMBZk7UmYeB8sEKY3wP7%2F98V6q%2FUBEKqRO75zcbrIxtZ%2FrtlTZpFOpT3BqyI63v7%2Fgp1Z%2FXiO8LPEI%2B5yB8J3qCeMna98d0mP4uxmXY18QciDeijWEqkUNchkZiCQLycxHwNtdpCAYzeOVhIGT9dXEvh5PvRZLjzUiuEbgjfgdaOS6OhB5KK5gAn6n9UJ56UAchLgCV55jEiIJuE8HQDzv9caaplRdqdLe%2FXtudSoO%2FDnuNlSDu52dmWNmywrxLWNvV%2B5CpX0nctuB0NlUZ7TEntSuRsUYFxauk3LxDelc9xCT1SQhxEfhecW1jpGMJ%2BxlMIGOqUBIdLSKraU2zfM82%2FX01xt8w3yZxMKQ8GqahL0PiNisHEYmeSAibiRYeVtrVKreJTUtQHnfj6Pi0PUjza3%2FcE4V%2FjGvuGKy4Pb1ZJ34snSRG6afWBroe3LFGdGhB%2BuA6jSrvLFsOPPOcbleQZk7Zv%2BWaOJjWz93caIstKvNKnyn4KwArc2D%2BKvKugFkTrBgImdFOTgObW5LlV99SnkEdlFjXIp%2F8cT&X-Amz-Signature=42348c80909a4ad677a2465380c249789ed966f0255867b11ae1b58cf2141d31&X-Amz-SignedHeaders=host&x-id=GetObject)
