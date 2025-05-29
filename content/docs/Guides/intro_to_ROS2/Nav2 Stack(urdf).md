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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTXWDBH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAlN0nzttE%2BLrgsa2xV3i90JBODmgV2b01UdvjoNBmgIgLelz8jG5V%2BMVBAeNmpJ86oHsC2SUOkLrY8uvusLPG1YqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfDhIIjGHFgQTF1ZyrcA8bbQPVHQgwXacgCGWmOfAwXnUNKhrjNm39Mb3MPvdWdUytTB77VDuI18QX0UVgmKk3NsEGYJRSPyo7R%2FcbTR9pChCbxz3t5fZVr%2FahnuAmPh%2FtYPQZVe0GSTj59OQhvw%2FV3japlo7ZpuccTLEce5FL%2FpsWMhkQqBy72Oc%2FkJ%2FY%2BON23bV1fqsSI%2BiTyzmxq8dnJrR6%2Fk8R9Bvbyb4twb3MkKWpNhuqsPFoIpVaEokMqBOicq1j3uBaYYgp3zpmJ64Vc8MWefWqHylQGB6lsDnQiS7z6UqHVcQzIaRbNLve7dVr%2BPBaSwUYfldl%2FE93yEAyhhJzkb0%2FTMe26WalO1TqXIBqGY6chxDcVzra%2Bm33L4UTuszKpx62HWoIzeerrTvxjDdOz99AUaP49ujDkjxFEyBbsYPhttLwCQFQWDQZgGCbHvipkOYC3YV1kSIv2wT7UADmr%2FOFPtBSHp82aNx6En5GylXHpCIkuSzY4LBAsUdZ%2BsI3cuobktyHMh4RlDj9%2FHIyFNxXaxXJKEERK%2BgGw%2F01BhJ2HAKGzpuNjA%2BSSPuNOvUUAXsWOgfxA0Y90RFUE2FGDPaUfO4NgHUCqYQnJTNErsDg%2BBBZWygrB97GfyzzeAFGnteqSofu9MKOI38EGOqUB0ZWwi%2BkuwTgFRnIrc7D%2Bqx5x3pjhBnlc2FeT2M2ab3zjIjIB0FKFyq%2BxT30uYZUtfhEvVvFnpDVYebjZAfa1ImdBF0hNjy2ZKJ62coM81T8K%2BUv6j4ujTcRNjjgi9wlyDROn62S739sUhwozl7JMEqvj0no%2FvUu3LLPY3pTv2fMlaGEySmQ5DMJELAwpQM3XygwFrryLwwUsZXG6K2FgY%2FNvMmkl&X-Amz-Signature=64075d7b121f128af1dd51e8ff800fb41456f4f878710df2770860867b067335&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTXWDBH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAlN0nzttE%2BLrgsa2xV3i90JBODmgV2b01UdvjoNBmgIgLelz8jG5V%2BMVBAeNmpJ86oHsC2SUOkLrY8uvusLPG1YqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfDhIIjGHFgQTF1ZyrcA8bbQPVHQgwXacgCGWmOfAwXnUNKhrjNm39Mb3MPvdWdUytTB77VDuI18QX0UVgmKk3NsEGYJRSPyo7R%2FcbTR9pChCbxz3t5fZVr%2FahnuAmPh%2FtYPQZVe0GSTj59OQhvw%2FV3japlo7ZpuccTLEce5FL%2FpsWMhkQqBy72Oc%2FkJ%2FY%2BON23bV1fqsSI%2BiTyzmxq8dnJrR6%2Fk8R9Bvbyb4twb3MkKWpNhuqsPFoIpVaEokMqBOicq1j3uBaYYgp3zpmJ64Vc8MWefWqHylQGB6lsDnQiS7z6UqHVcQzIaRbNLve7dVr%2BPBaSwUYfldl%2FE93yEAyhhJzkb0%2FTMe26WalO1TqXIBqGY6chxDcVzra%2Bm33L4UTuszKpx62HWoIzeerrTvxjDdOz99AUaP49ujDkjxFEyBbsYPhttLwCQFQWDQZgGCbHvipkOYC3YV1kSIv2wT7UADmr%2FOFPtBSHp82aNx6En5GylXHpCIkuSzY4LBAsUdZ%2BsI3cuobktyHMh4RlDj9%2FHIyFNxXaxXJKEERK%2BgGw%2F01BhJ2HAKGzpuNjA%2BSSPuNOvUUAXsWOgfxA0Y90RFUE2FGDPaUfO4NgHUCqYQnJTNErsDg%2BBBZWygrB97GfyzzeAFGnteqSofu9MKOI38EGOqUB0ZWwi%2BkuwTgFRnIrc7D%2Bqx5x3pjhBnlc2FeT2M2ab3zjIjIB0FKFyq%2BxT30uYZUtfhEvVvFnpDVYebjZAfa1ImdBF0hNjy2ZKJ62coM81T8K%2BUv6j4ujTcRNjjgi9wlyDROn62S739sUhwozl7JMEqvj0no%2FvUu3LLPY3pTv2fMlaGEySmQ5DMJELAwpQM3XygwFrryLwwUsZXG6K2FgY%2FNvMmkl&X-Amz-Signature=807284b8fe569371e8b0827919e685c84405ce4590315912841acb31166915bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTXWDBH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAlN0nzttE%2BLrgsa2xV3i90JBODmgV2b01UdvjoNBmgIgLelz8jG5V%2BMVBAeNmpJ86oHsC2SUOkLrY8uvusLPG1YqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfDhIIjGHFgQTF1ZyrcA8bbQPVHQgwXacgCGWmOfAwXnUNKhrjNm39Mb3MPvdWdUytTB77VDuI18QX0UVgmKk3NsEGYJRSPyo7R%2FcbTR9pChCbxz3t5fZVr%2FahnuAmPh%2FtYPQZVe0GSTj59OQhvw%2FV3japlo7ZpuccTLEce5FL%2FpsWMhkQqBy72Oc%2FkJ%2FY%2BON23bV1fqsSI%2BiTyzmxq8dnJrR6%2Fk8R9Bvbyb4twb3MkKWpNhuqsPFoIpVaEokMqBOicq1j3uBaYYgp3zpmJ64Vc8MWefWqHylQGB6lsDnQiS7z6UqHVcQzIaRbNLve7dVr%2BPBaSwUYfldl%2FE93yEAyhhJzkb0%2FTMe26WalO1TqXIBqGY6chxDcVzra%2Bm33L4UTuszKpx62HWoIzeerrTvxjDdOz99AUaP49ujDkjxFEyBbsYPhttLwCQFQWDQZgGCbHvipkOYC3YV1kSIv2wT7UADmr%2FOFPtBSHp82aNx6En5GylXHpCIkuSzY4LBAsUdZ%2BsI3cuobktyHMh4RlDj9%2FHIyFNxXaxXJKEERK%2BgGw%2F01BhJ2HAKGzpuNjA%2BSSPuNOvUUAXsWOgfxA0Y90RFUE2FGDPaUfO4NgHUCqYQnJTNErsDg%2BBBZWygrB97GfyzzeAFGnteqSofu9MKOI38EGOqUB0ZWwi%2BkuwTgFRnIrc7D%2Bqx5x3pjhBnlc2FeT2M2ab3zjIjIB0FKFyq%2BxT30uYZUtfhEvVvFnpDVYebjZAfa1ImdBF0hNjy2ZKJ62coM81T8K%2BUv6j4ujTcRNjjgi9wlyDROn62S739sUhwozl7JMEqvj0no%2FvUu3LLPY3pTv2fMlaGEySmQ5DMJELAwpQM3XygwFrryLwwUsZXG6K2FgY%2FNvMmkl&X-Amz-Signature=3e668a393f1f5d7b81cca20e2a7ec7cbbf663899d0c6954cf3b540dc779309ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTXWDBH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAlN0nzttE%2BLrgsa2xV3i90JBODmgV2b01UdvjoNBmgIgLelz8jG5V%2BMVBAeNmpJ86oHsC2SUOkLrY8uvusLPG1YqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfDhIIjGHFgQTF1ZyrcA8bbQPVHQgwXacgCGWmOfAwXnUNKhrjNm39Mb3MPvdWdUytTB77VDuI18QX0UVgmKk3NsEGYJRSPyo7R%2FcbTR9pChCbxz3t5fZVr%2FahnuAmPh%2FtYPQZVe0GSTj59OQhvw%2FV3japlo7ZpuccTLEce5FL%2FpsWMhkQqBy72Oc%2FkJ%2FY%2BON23bV1fqsSI%2BiTyzmxq8dnJrR6%2Fk8R9Bvbyb4twb3MkKWpNhuqsPFoIpVaEokMqBOicq1j3uBaYYgp3zpmJ64Vc8MWefWqHylQGB6lsDnQiS7z6UqHVcQzIaRbNLve7dVr%2BPBaSwUYfldl%2FE93yEAyhhJzkb0%2FTMe26WalO1TqXIBqGY6chxDcVzra%2Bm33L4UTuszKpx62HWoIzeerrTvxjDdOz99AUaP49ujDkjxFEyBbsYPhttLwCQFQWDQZgGCbHvipkOYC3YV1kSIv2wT7UADmr%2FOFPtBSHp82aNx6En5GylXHpCIkuSzY4LBAsUdZ%2BsI3cuobktyHMh4RlDj9%2FHIyFNxXaxXJKEERK%2BgGw%2F01BhJ2HAKGzpuNjA%2BSSPuNOvUUAXsWOgfxA0Y90RFUE2FGDPaUfO4NgHUCqYQnJTNErsDg%2BBBZWygrB97GfyzzeAFGnteqSofu9MKOI38EGOqUB0ZWwi%2BkuwTgFRnIrc7D%2Bqx5x3pjhBnlc2FeT2M2ab3zjIjIB0FKFyq%2BxT30uYZUtfhEvVvFnpDVYebjZAfa1ImdBF0hNjy2ZKJ62coM81T8K%2BUv6j4ujTcRNjjgi9wlyDROn62S739sUhwozl7JMEqvj0no%2FvUu3LLPY3pTv2fMlaGEySmQ5DMJELAwpQM3XygwFrryLwwUsZXG6K2FgY%2FNvMmkl&X-Amz-Signature=58f31faba1bf270ff4d0c9e9697ce5b1d4bd94d6cdb952c5aab8bf9ec5c687c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTXWDBH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAlN0nzttE%2BLrgsa2xV3i90JBODmgV2b01UdvjoNBmgIgLelz8jG5V%2BMVBAeNmpJ86oHsC2SUOkLrY8uvusLPG1YqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfDhIIjGHFgQTF1ZyrcA8bbQPVHQgwXacgCGWmOfAwXnUNKhrjNm39Mb3MPvdWdUytTB77VDuI18QX0UVgmKk3NsEGYJRSPyo7R%2FcbTR9pChCbxz3t5fZVr%2FahnuAmPh%2FtYPQZVe0GSTj59OQhvw%2FV3japlo7ZpuccTLEce5FL%2FpsWMhkQqBy72Oc%2FkJ%2FY%2BON23bV1fqsSI%2BiTyzmxq8dnJrR6%2Fk8R9Bvbyb4twb3MkKWpNhuqsPFoIpVaEokMqBOicq1j3uBaYYgp3zpmJ64Vc8MWefWqHylQGB6lsDnQiS7z6UqHVcQzIaRbNLve7dVr%2BPBaSwUYfldl%2FE93yEAyhhJzkb0%2FTMe26WalO1TqXIBqGY6chxDcVzra%2Bm33L4UTuszKpx62HWoIzeerrTvxjDdOz99AUaP49ujDkjxFEyBbsYPhttLwCQFQWDQZgGCbHvipkOYC3YV1kSIv2wT7UADmr%2FOFPtBSHp82aNx6En5GylXHpCIkuSzY4LBAsUdZ%2BsI3cuobktyHMh4RlDj9%2FHIyFNxXaxXJKEERK%2BgGw%2F01BhJ2HAKGzpuNjA%2BSSPuNOvUUAXsWOgfxA0Y90RFUE2FGDPaUfO4NgHUCqYQnJTNErsDg%2BBBZWygrB97GfyzzeAFGnteqSofu9MKOI38EGOqUB0ZWwi%2BkuwTgFRnIrc7D%2Bqx5x3pjhBnlc2FeT2M2ab3zjIjIB0FKFyq%2BxT30uYZUtfhEvVvFnpDVYebjZAfa1ImdBF0hNjy2ZKJ62coM81T8K%2BUv6j4ujTcRNjjgi9wlyDROn62S739sUhwozl7JMEqvj0no%2FvUu3LLPY3pTv2fMlaGEySmQ5DMJELAwpQM3XygwFrryLwwUsZXG6K2FgY%2FNvMmkl&X-Amz-Signature=477475b9ae8250ab31c66e19712c17699e45f87e3bd5b411253332c9aa512e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJTXWDBH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAlN0nzttE%2BLrgsa2xV3i90JBODmgV2b01UdvjoNBmgIgLelz8jG5V%2BMVBAeNmpJ86oHsC2SUOkLrY8uvusLPG1YqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfDhIIjGHFgQTF1ZyrcA8bbQPVHQgwXacgCGWmOfAwXnUNKhrjNm39Mb3MPvdWdUytTB77VDuI18QX0UVgmKk3NsEGYJRSPyo7R%2FcbTR9pChCbxz3t5fZVr%2FahnuAmPh%2FtYPQZVe0GSTj59OQhvw%2FV3japlo7ZpuccTLEce5FL%2FpsWMhkQqBy72Oc%2FkJ%2FY%2BON23bV1fqsSI%2BiTyzmxq8dnJrR6%2Fk8R9Bvbyb4twb3MkKWpNhuqsPFoIpVaEokMqBOicq1j3uBaYYgp3zpmJ64Vc8MWefWqHylQGB6lsDnQiS7z6UqHVcQzIaRbNLve7dVr%2BPBaSwUYfldl%2FE93yEAyhhJzkb0%2FTMe26WalO1TqXIBqGY6chxDcVzra%2Bm33L4UTuszKpx62HWoIzeerrTvxjDdOz99AUaP49ujDkjxFEyBbsYPhttLwCQFQWDQZgGCbHvipkOYC3YV1kSIv2wT7UADmr%2FOFPtBSHp82aNx6En5GylXHpCIkuSzY4LBAsUdZ%2BsI3cuobktyHMh4RlDj9%2FHIyFNxXaxXJKEERK%2BgGw%2F01BhJ2HAKGzpuNjA%2BSSPuNOvUUAXsWOgfxA0Y90RFUE2FGDPaUfO4NgHUCqYQnJTNErsDg%2BBBZWygrB97GfyzzeAFGnteqSofu9MKOI38EGOqUB0ZWwi%2BkuwTgFRnIrc7D%2Bqx5x3pjhBnlc2FeT2M2ab3zjIjIB0FKFyq%2BxT30uYZUtfhEvVvFnpDVYebjZAfa1ImdBF0hNjy2ZKJ62coM81T8K%2BUv6j4ujTcRNjjgi9wlyDROn62S739sUhwozl7JMEqvj0no%2FvUu3LLPY3pTv2fMlaGEySmQ5DMJELAwpQM3XygwFrryLwwUsZXG6K2FgY%2FNvMmkl&X-Amz-Signature=e21245a211db91cde61968291b79a4f9f7a4fd64bdf66c7df061138e6e68db30&X-Amz-SignedHeaders=host&x-id=GetObject)
