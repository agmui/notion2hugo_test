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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCDIRBS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLne21Vbw%2BaPzxqf2m7jth7h%2BnFH8y8eFlkyRcWRcvVAiEA02kFT%2FQxvV1Ao3T7zHykyPmW5Jci7kwYnkMmllESAQ4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMtgZ3mIN1IbUub32ircA0ckorgfyGYK6b7r3n2wttFoPm71%2B6yEfjMR8eaQodGrDV7pxQ0R3yG39SHsT9ikAx5%2FAslvvabDtMY66Lbunbiz7NdA1ljLmt31s4%2FUFg9c1rKHNned%2FspuLl3GB6h44JWwh598zDqqq3yPgDnqwzeMsVindGVb5wuIfely9o0OURkjawFNWUp2lQN8tViD%2BQJb4p7yDV5dncHhD17WD6zCEaObkxiwoDw9%2Fwo%2FAVzxkJ8YjFbe2cspce2zg3YojJbQCQspxCr0Qr1jPoghbad2Ev9T65Wxzs5E%2FAosay0mmYNfJ0faVjLHZwwCFAHik0CXo1H3IyPHCXLtqe0wB90sZIeANM5g7YrRBVwjwQ9MnvDEWamrvtOSUCFaE5fbu%2BJqdV7Ozc4GjV8aNHjtzRQsxdTxUhK1cnIfeotdzE4CXe3iapTUzpHmfPfC8Dtnbu6Q%2BcwVN4v3GX6uD58ziub9fYrtGxxAHJKxuSMqcVNADV%2BqTJGousFfiojeLrXh8ymYyl1SJgEW6B8nmAAwghWgiSr2mL7O2yjdYZXQaCsyrBXwytVbpMoUroIDYllqSC6%2BEhv%2FVM8LEegB238z3BEwdaLqODWsyc9Fas1dnmur6wWVzfBKfO4Gu2URMKqgn8EGOqUBAskYGTh1sv%2FRNCnlOJef1ZaZSORNw%2FCznWreu1hMjmfrd1GA45X25JrtH2%2FMTAxlYRnhVyUyZyrW9LmIjuacnWGvIeHT9d0D0LCH%2BmGcSpcGjLIeedun5UD7o5qpekKoCGCnf5L1Thkr%2FGw0dgTlfnBZNuBmKj8UmXmmUCLY16m%2F62RVH8EFGN%2Bj4IS6uG2HoZiti9ltOtNSZ9KsQVvW71s%2FO6SK&X-Amz-Signature=8f8efff8d1aebcbde1b5e5e28f925b788f30d5b018951bac3d96d40226a522c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCDIRBS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLne21Vbw%2BaPzxqf2m7jth7h%2BnFH8y8eFlkyRcWRcvVAiEA02kFT%2FQxvV1Ao3T7zHykyPmW5Jci7kwYnkMmllESAQ4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMtgZ3mIN1IbUub32ircA0ckorgfyGYK6b7r3n2wttFoPm71%2B6yEfjMR8eaQodGrDV7pxQ0R3yG39SHsT9ikAx5%2FAslvvabDtMY66Lbunbiz7NdA1ljLmt31s4%2FUFg9c1rKHNned%2FspuLl3GB6h44JWwh598zDqqq3yPgDnqwzeMsVindGVb5wuIfely9o0OURkjawFNWUp2lQN8tViD%2BQJb4p7yDV5dncHhD17WD6zCEaObkxiwoDw9%2Fwo%2FAVzxkJ8YjFbe2cspce2zg3YojJbQCQspxCr0Qr1jPoghbad2Ev9T65Wxzs5E%2FAosay0mmYNfJ0faVjLHZwwCFAHik0CXo1H3IyPHCXLtqe0wB90sZIeANM5g7YrRBVwjwQ9MnvDEWamrvtOSUCFaE5fbu%2BJqdV7Ozc4GjV8aNHjtzRQsxdTxUhK1cnIfeotdzE4CXe3iapTUzpHmfPfC8Dtnbu6Q%2BcwVN4v3GX6uD58ziub9fYrtGxxAHJKxuSMqcVNADV%2BqTJGousFfiojeLrXh8ymYyl1SJgEW6B8nmAAwghWgiSr2mL7O2yjdYZXQaCsyrBXwytVbpMoUroIDYllqSC6%2BEhv%2FVM8LEegB238z3BEwdaLqODWsyc9Fas1dnmur6wWVzfBKfO4Gu2URMKqgn8EGOqUBAskYGTh1sv%2FRNCnlOJef1ZaZSORNw%2FCznWreu1hMjmfrd1GA45X25JrtH2%2FMTAxlYRnhVyUyZyrW9LmIjuacnWGvIeHT9d0D0LCH%2BmGcSpcGjLIeedun5UD7o5qpekKoCGCnf5L1Thkr%2FGw0dgTlfnBZNuBmKj8UmXmmUCLY16m%2F62RVH8EFGN%2Bj4IS6uG2HoZiti9ltOtNSZ9KsQVvW71s%2FO6SK&X-Amz-Signature=24af6792341eb1a22305c8a79be88536d455eac877be70b4a462ef5090af0e43&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCDIRBS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLne21Vbw%2BaPzxqf2m7jth7h%2BnFH8y8eFlkyRcWRcvVAiEA02kFT%2FQxvV1Ao3T7zHykyPmW5Jci7kwYnkMmllESAQ4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMtgZ3mIN1IbUub32ircA0ckorgfyGYK6b7r3n2wttFoPm71%2B6yEfjMR8eaQodGrDV7pxQ0R3yG39SHsT9ikAx5%2FAslvvabDtMY66Lbunbiz7NdA1ljLmt31s4%2FUFg9c1rKHNned%2FspuLl3GB6h44JWwh598zDqqq3yPgDnqwzeMsVindGVb5wuIfely9o0OURkjawFNWUp2lQN8tViD%2BQJb4p7yDV5dncHhD17WD6zCEaObkxiwoDw9%2Fwo%2FAVzxkJ8YjFbe2cspce2zg3YojJbQCQspxCr0Qr1jPoghbad2Ev9T65Wxzs5E%2FAosay0mmYNfJ0faVjLHZwwCFAHik0CXo1H3IyPHCXLtqe0wB90sZIeANM5g7YrRBVwjwQ9MnvDEWamrvtOSUCFaE5fbu%2BJqdV7Ozc4GjV8aNHjtzRQsxdTxUhK1cnIfeotdzE4CXe3iapTUzpHmfPfC8Dtnbu6Q%2BcwVN4v3GX6uD58ziub9fYrtGxxAHJKxuSMqcVNADV%2BqTJGousFfiojeLrXh8ymYyl1SJgEW6B8nmAAwghWgiSr2mL7O2yjdYZXQaCsyrBXwytVbpMoUroIDYllqSC6%2BEhv%2FVM8LEegB238z3BEwdaLqODWsyc9Fas1dnmur6wWVzfBKfO4Gu2URMKqgn8EGOqUBAskYGTh1sv%2FRNCnlOJef1ZaZSORNw%2FCznWreu1hMjmfrd1GA45X25JrtH2%2FMTAxlYRnhVyUyZyrW9LmIjuacnWGvIeHT9d0D0LCH%2BmGcSpcGjLIeedun5UD7o5qpekKoCGCnf5L1Thkr%2FGw0dgTlfnBZNuBmKj8UmXmmUCLY16m%2F62RVH8EFGN%2Bj4IS6uG2HoZiti9ltOtNSZ9KsQVvW71s%2FO6SK&X-Amz-Signature=06f2ff1a26535dd53e354304ecc225598c09576b3184cfe699a8ab397b45864d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCDIRBS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLne21Vbw%2BaPzxqf2m7jth7h%2BnFH8y8eFlkyRcWRcvVAiEA02kFT%2FQxvV1Ao3T7zHykyPmW5Jci7kwYnkMmllESAQ4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMtgZ3mIN1IbUub32ircA0ckorgfyGYK6b7r3n2wttFoPm71%2B6yEfjMR8eaQodGrDV7pxQ0R3yG39SHsT9ikAx5%2FAslvvabDtMY66Lbunbiz7NdA1ljLmt31s4%2FUFg9c1rKHNned%2FspuLl3GB6h44JWwh598zDqqq3yPgDnqwzeMsVindGVb5wuIfely9o0OURkjawFNWUp2lQN8tViD%2BQJb4p7yDV5dncHhD17WD6zCEaObkxiwoDw9%2Fwo%2FAVzxkJ8YjFbe2cspce2zg3YojJbQCQspxCr0Qr1jPoghbad2Ev9T65Wxzs5E%2FAosay0mmYNfJ0faVjLHZwwCFAHik0CXo1H3IyPHCXLtqe0wB90sZIeANM5g7YrRBVwjwQ9MnvDEWamrvtOSUCFaE5fbu%2BJqdV7Ozc4GjV8aNHjtzRQsxdTxUhK1cnIfeotdzE4CXe3iapTUzpHmfPfC8Dtnbu6Q%2BcwVN4v3GX6uD58ziub9fYrtGxxAHJKxuSMqcVNADV%2BqTJGousFfiojeLrXh8ymYyl1SJgEW6B8nmAAwghWgiSr2mL7O2yjdYZXQaCsyrBXwytVbpMoUroIDYllqSC6%2BEhv%2FVM8LEegB238z3BEwdaLqODWsyc9Fas1dnmur6wWVzfBKfO4Gu2URMKqgn8EGOqUBAskYGTh1sv%2FRNCnlOJef1ZaZSORNw%2FCznWreu1hMjmfrd1GA45X25JrtH2%2FMTAxlYRnhVyUyZyrW9LmIjuacnWGvIeHT9d0D0LCH%2BmGcSpcGjLIeedun5UD7o5qpekKoCGCnf5L1Thkr%2FGw0dgTlfnBZNuBmKj8UmXmmUCLY16m%2F62RVH8EFGN%2Bj4IS6uG2HoZiti9ltOtNSZ9KsQVvW71s%2FO6SK&X-Amz-Signature=a942a6ee6507b802f5e5948006e563d8b5f0f389f58ae3251187a6297b7c2a20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCDIRBS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLne21Vbw%2BaPzxqf2m7jth7h%2BnFH8y8eFlkyRcWRcvVAiEA02kFT%2FQxvV1Ao3T7zHykyPmW5Jci7kwYnkMmllESAQ4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMtgZ3mIN1IbUub32ircA0ckorgfyGYK6b7r3n2wttFoPm71%2B6yEfjMR8eaQodGrDV7pxQ0R3yG39SHsT9ikAx5%2FAslvvabDtMY66Lbunbiz7NdA1ljLmt31s4%2FUFg9c1rKHNned%2FspuLl3GB6h44JWwh598zDqqq3yPgDnqwzeMsVindGVb5wuIfely9o0OURkjawFNWUp2lQN8tViD%2BQJb4p7yDV5dncHhD17WD6zCEaObkxiwoDw9%2Fwo%2FAVzxkJ8YjFbe2cspce2zg3YojJbQCQspxCr0Qr1jPoghbad2Ev9T65Wxzs5E%2FAosay0mmYNfJ0faVjLHZwwCFAHik0CXo1H3IyPHCXLtqe0wB90sZIeANM5g7YrRBVwjwQ9MnvDEWamrvtOSUCFaE5fbu%2BJqdV7Ozc4GjV8aNHjtzRQsxdTxUhK1cnIfeotdzE4CXe3iapTUzpHmfPfC8Dtnbu6Q%2BcwVN4v3GX6uD58ziub9fYrtGxxAHJKxuSMqcVNADV%2BqTJGousFfiojeLrXh8ymYyl1SJgEW6B8nmAAwghWgiSr2mL7O2yjdYZXQaCsyrBXwytVbpMoUroIDYllqSC6%2BEhv%2FVM8LEegB238z3BEwdaLqODWsyc9Fas1dnmur6wWVzfBKfO4Gu2URMKqgn8EGOqUBAskYGTh1sv%2FRNCnlOJef1ZaZSORNw%2FCznWreu1hMjmfrd1GA45X25JrtH2%2FMTAxlYRnhVyUyZyrW9LmIjuacnWGvIeHT9d0D0LCH%2BmGcSpcGjLIeedun5UD7o5qpekKoCGCnf5L1Thkr%2FGw0dgTlfnBZNuBmKj8UmXmmUCLY16m%2F62RVH8EFGN%2Bj4IS6uG2HoZiti9ltOtNSZ9KsQVvW71s%2FO6SK&X-Amz-Signature=bae52a1754eb8a860d517b5590fc7ca38e5c2b7ae14e0280432105101e80657e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCDIRBS%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLne21Vbw%2BaPzxqf2m7jth7h%2BnFH8y8eFlkyRcWRcvVAiEA02kFT%2FQxvV1Ao3T7zHykyPmW5Jci7kwYnkMmllESAQ4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMtgZ3mIN1IbUub32ircA0ckorgfyGYK6b7r3n2wttFoPm71%2B6yEfjMR8eaQodGrDV7pxQ0R3yG39SHsT9ikAx5%2FAslvvabDtMY66Lbunbiz7NdA1ljLmt31s4%2FUFg9c1rKHNned%2FspuLl3GB6h44JWwh598zDqqq3yPgDnqwzeMsVindGVb5wuIfely9o0OURkjawFNWUp2lQN8tViD%2BQJb4p7yDV5dncHhD17WD6zCEaObkxiwoDw9%2Fwo%2FAVzxkJ8YjFbe2cspce2zg3YojJbQCQspxCr0Qr1jPoghbad2Ev9T65Wxzs5E%2FAosay0mmYNfJ0faVjLHZwwCFAHik0CXo1H3IyPHCXLtqe0wB90sZIeANM5g7YrRBVwjwQ9MnvDEWamrvtOSUCFaE5fbu%2BJqdV7Ozc4GjV8aNHjtzRQsxdTxUhK1cnIfeotdzE4CXe3iapTUzpHmfPfC8Dtnbu6Q%2BcwVN4v3GX6uD58ziub9fYrtGxxAHJKxuSMqcVNADV%2BqTJGousFfiojeLrXh8ymYyl1SJgEW6B8nmAAwghWgiSr2mL7O2yjdYZXQaCsyrBXwytVbpMoUroIDYllqSC6%2BEhv%2FVM8LEegB238z3BEwdaLqODWsyc9Fas1dnmur6wWVzfBKfO4Gu2URMKqgn8EGOqUBAskYGTh1sv%2FRNCnlOJef1ZaZSORNw%2FCznWreu1hMjmfrd1GA45X25JrtH2%2FMTAxlYRnhVyUyZyrW9LmIjuacnWGvIeHT9d0D0LCH%2BmGcSpcGjLIeedun5UD7o5qpekKoCGCnf5L1Thkr%2FGw0dgTlfnBZNuBmKj8UmXmmUCLY16m%2F62RVH8EFGN%2Bj4IS6uG2HoZiti9ltOtNSZ9KsQVvW71s%2FO6SK&X-Amz-Signature=7314fb6375787f4fed66d84d75dc4a8fc9f846b6149941f3f705c8ad0dd46a79&X-Amz-SignedHeaders=host&x-id=GetObject)
