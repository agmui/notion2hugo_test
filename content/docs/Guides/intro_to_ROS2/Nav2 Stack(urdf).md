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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMINTDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsebYY7hontQn48HJAf1XKV4cP57Uu42xTEEsVEnGlwIhANUNYQHxvGxXaG5VdNSGUPlIJ%2FxJC1LFJLhloPN5I9e0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL8K%2Ba7hW6M824OmMq3APC%2F6vQrlugNH6%2BgPoZ3BgD0sopZMmxPF4NnJ9lOfPmWvX0%2Bcd4vSU6BKN0xhlNM46OyOcbvU5QF0M8Uv5NMtIe0zsTUNQHcDu%2FtxwWsPiQc%2FY4YUX%2Bw6%2FSuk7zyC6Poxay4zjU6XEu81kws03WziP2ThdFOkNU5f8l%2BIv11SrSuIr5NDFGVSMoa0CnpSF%2FVfSY2FgieqPsTv5%2F53jEKr4siUXFywv%2FHRnkUGn%2FqQwElVUi8rQfS2r8fypjKfEdfIKDQa13LbL5aLn79vHtEvQDhf1baCQpaZJCRONX8vU80xMT0%2Bc7vlZojTyUHBXEnM3xzuwQ9nIE51uQ%2BNHxzlrfME44k97IEuQffMm9tbukbyde7R9fiko1OCbjRYF7Oab8tbuy3%2FpQSUg9K7xPNm%2Bn9xkj1YS7lRmLDxVTNR%2BtRz69UPyJsjR2z75XP1UqtttgmBK7ynflLtHgVV54Z5Ek2VDACA%2B8vD6ZQEwTV2H%2F1qam4MPztiGKzVTyrcc0TIsZv1HpFRuxGLUWHmTQ9iVYaZXk5rpovXQsVsC6NDJ%2FEpIi9cpC8w4VfdyX%2F3c85u774f6IexwbUwl8vgk6mC7bxMBb1dJLUoWuyI0ppP0V7sjHR%2BSGx6cTyJkWsDDOuO7DBjqkATbRrN7%2FtXCqEU2GF5rQZpmR7JYt0qItNQwY9tlAY4mfqppN%2FWCXhHWzScygVJZANKBMUQmQohfS9zlph3fbq9BVCT75kgaR0YFFGZJhZ549c5wRmHjTjyQ98xL0EzV%2F%2FewURPeYe9bchlcAwvkq6OOjBXxS%2BakfMAawRNKocdImfUctu2bsn%2BY%2FbOws6JQHyYf2EmJt2vS9kAKfYp5zNQhy30aM&X-Amz-Signature=d3b4ce5c2d5988e83d9f9809419ce3f50c44b26fb808c8223a925745b4ac0a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMINTDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsebYY7hontQn48HJAf1XKV4cP57Uu42xTEEsVEnGlwIhANUNYQHxvGxXaG5VdNSGUPlIJ%2FxJC1LFJLhloPN5I9e0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL8K%2Ba7hW6M824OmMq3APC%2F6vQrlugNH6%2BgPoZ3BgD0sopZMmxPF4NnJ9lOfPmWvX0%2Bcd4vSU6BKN0xhlNM46OyOcbvU5QF0M8Uv5NMtIe0zsTUNQHcDu%2FtxwWsPiQc%2FY4YUX%2Bw6%2FSuk7zyC6Poxay4zjU6XEu81kws03WziP2ThdFOkNU5f8l%2BIv11SrSuIr5NDFGVSMoa0CnpSF%2FVfSY2FgieqPsTv5%2F53jEKr4siUXFywv%2FHRnkUGn%2FqQwElVUi8rQfS2r8fypjKfEdfIKDQa13LbL5aLn79vHtEvQDhf1baCQpaZJCRONX8vU80xMT0%2Bc7vlZojTyUHBXEnM3xzuwQ9nIE51uQ%2BNHxzlrfME44k97IEuQffMm9tbukbyde7R9fiko1OCbjRYF7Oab8tbuy3%2FpQSUg9K7xPNm%2Bn9xkj1YS7lRmLDxVTNR%2BtRz69UPyJsjR2z75XP1UqtttgmBK7ynflLtHgVV54Z5Ek2VDACA%2B8vD6ZQEwTV2H%2F1qam4MPztiGKzVTyrcc0TIsZv1HpFRuxGLUWHmTQ9iVYaZXk5rpovXQsVsC6NDJ%2FEpIi9cpC8w4VfdyX%2F3c85u774f6IexwbUwl8vgk6mC7bxMBb1dJLUoWuyI0ppP0V7sjHR%2BSGx6cTyJkWsDDOuO7DBjqkATbRrN7%2FtXCqEU2GF5rQZpmR7JYt0qItNQwY9tlAY4mfqppN%2FWCXhHWzScygVJZANKBMUQmQohfS9zlph3fbq9BVCT75kgaR0YFFGZJhZ549c5wRmHjTjyQ98xL0EzV%2F%2FewURPeYe9bchlcAwvkq6OOjBXxS%2BakfMAawRNKocdImfUctu2bsn%2BY%2FbOws6JQHyYf2EmJt2vS9kAKfYp5zNQhy30aM&X-Amz-Signature=f91277f3a322bcd2f5c183ee0624b6b6869efac9b7ad8358df80cb7f3a41f271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMINTDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsebYY7hontQn48HJAf1XKV4cP57Uu42xTEEsVEnGlwIhANUNYQHxvGxXaG5VdNSGUPlIJ%2FxJC1LFJLhloPN5I9e0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL8K%2Ba7hW6M824OmMq3APC%2F6vQrlugNH6%2BgPoZ3BgD0sopZMmxPF4NnJ9lOfPmWvX0%2Bcd4vSU6BKN0xhlNM46OyOcbvU5QF0M8Uv5NMtIe0zsTUNQHcDu%2FtxwWsPiQc%2FY4YUX%2Bw6%2FSuk7zyC6Poxay4zjU6XEu81kws03WziP2ThdFOkNU5f8l%2BIv11SrSuIr5NDFGVSMoa0CnpSF%2FVfSY2FgieqPsTv5%2F53jEKr4siUXFywv%2FHRnkUGn%2FqQwElVUi8rQfS2r8fypjKfEdfIKDQa13LbL5aLn79vHtEvQDhf1baCQpaZJCRONX8vU80xMT0%2Bc7vlZojTyUHBXEnM3xzuwQ9nIE51uQ%2BNHxzlrfME44k97IEuQffMm9tbukbyde7R9fiko1OCbjRYF7Oab8tbuy3%2FpQSUg9K7xPNm%2Bn9xkj1YS7lRmLDxVTNR%2BtRz69UPyJsjR2z75XP1UqtttgmBK7ynflLtHgVV54Z5Ek2VDACA%2B8vD6ZQEwTV2H%2F1qam4MPztiGKzVTyrcc0TIsZv1HpFRuxGLUWHmTQ9iVYaZXk5rpovXQsVsC6NDJ%2FEpIi9cpC8w4VfdyX%2F3c85u774f6IexwbUwl8vgk6mC7bxMBb1dJLUoWuyI0ppP0V7sjHR%2BSGx6cTyJkWsDDOuO7DBjqkATbRrN7%2FtXCqEU2GF5rQZpmR7JYt0qItNQwY9tlAY4mfqppN%2FWCXhHWzScygVJZANKBMUQmQohfS9zlph3fbq9BVCT75kgaR0YFFGZJhZ549c5wRmHjTjyQ98xL0EzV%2F%2FewURPeYe9bchlcAwvkq6OOjBXxS%2BakfMAawRNKocdImfUctu2bsn%2BY%2FbOws6JQHyYf2EmJt2vS9kAKfYp5zNQhy30aM&X-Amz-Signature=170316c309ae4c61c1fbac4bbdac1f2ddcea6e5305b7574697c4c3c8f1805754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMINTDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsebYY7hontQn48HJAf1XKV4cP57Uu42xTEEsVEnGlwIhANUNYQHxvGxXaG5VdNSGUPlIJ%2FxJC1LFJLhloPN5I9e0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL8K%2Ba7hW6M824OmMq3APC%2F6vQrlugNH6%2BgPoZ3BgD0sopZMmxPF4NnJ9lOfPmWvX0%2Bcd4vSU6BKN0xhlNM46OyOcbvU5QF0M8Uv5NMtIe0zsTUNQHcDu%2FtxwWsPiQc%2FY4YUX%2Bw6%2FSuk7zyC6Poxay4zjU6XEu81kws03WziP2ThdFOkNU5f8l%2BIv11SrSuIr5NDFGVSMoa0CnpSF%2FVfSY2FgieqPsTv5%2F53jEKr4siUXFywv%2FHRnkUGn%2FqQwElVUi8rQfS2r8fypjKfEdfIKDQa13LbL5aLn79vHtEvQDhf1baCQpaZJCRONX8vU80xMT0%2Bc7vlZojTyUHBXEnM3xzuwQ9nIE51uQ%2BNHxzlrfME44k97IEuQffMm9tbukbyde7R9fiko1OCbjRYF7Oab8tbuy3%2FpQSUg9K7xPNm%2Bn9xkj1YS7lRmLDxVTNR%2BtRz69UPyJsjR2z75XP1UqtttgmBK7ynflLtHgVV54Z5Ek2VDACA%2B8vD6ZQEwTV2H%2F1qam4MPztiGKzVTyrcc0TIsZv1HpFRuxGLUWHmTQ9iVYaZXk5rpovXQsVsC6NDJ%2FEpIi9cpC8w4VfdyX%2F3c85u774f6IexwbUwl8vgk6mC7bxMBb1dJLUoWuyI0ppP0V7sjHR%2BSGx6cTyJkWsDDOuO7DBjqkATbRrN7%2FtXCqEU2GF5rQZpmR7JYt0qItNQwY9tlAY4mfqppN%2FWCXhHWzScygVJZANKBMUQmQohfS9zlph3fbq9BVCT75kgaR0YFFGZJhZ549c5wRmHjTjyQ98xL0EzV%2F%2FewURPeYe9bchlcAwvkq6OOjBXxS%2BakfMAawRNKocdImfUctu2bsn%2BY%2FbOws6JQHyYf2EmJt2vS9kAKfYp5zNQhy30aM&X-Amz-Signature=71ff18b61ef6d6b880f136d3ba522d5bd0c6328190538e9e0ca0e699e5afc71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMINTDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsebYY7hontQn48HJAf1XKV4cP57Uu42xTEEsVEnGlwIhANUNYQHxvGxXaG5VdNSGUPlIJ%2FxJC1LFJLhloPN5I9e0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL8K%2Ba7hW6M824OmMq3APC%2F6vQrlugNH6%2BgPoZ3BgD0sopZMmxPF4NnJ9lOfPmWvX0%2Bcd4vSU6BKN0xhlNM46OyOcbvU5QF0M8Uv5NMtIe0zsTUNQHcDu%2FtxwWsPiQc%2FY4YUX%2Bw6%2FSuk7zyC6Poxay4zjU6XEu81kws03WziP2ThdFOkNU5f8l%2BIv11SrSuIr5NDFGVSMoa0CnpSF%2FVfSY2FgieqPsTv5%2F53jEKr4siUXFywv%2FHRnkUGn%2FqQwElVUi8rQfS2r8fypjKfEdfIKDQa13LbL5aLn79vHtEvQDhf1baCQpaZJCRONX8vU80xMT0%2Bc7vlZojTyUHBXEnM3xzuwQ9nIE51uQ%2BNHxzlrfME44k97IEuQffMm9tbukbyde7R9fiko1OCbjRYF7Oab8tbuy3%2FpQSUg9K7xPNm%2Bn9xkj1YS7lRmLDxVTNR%2BtRz69UPyJsjR2z75XP1UqtttgmBK7ynflLtHgVV54Z5Ek2VDACA%2B8vD6ZQEwTV2H%2F1qam4MPztiGKzVTyrcc0TIsZv1HpFRuxGLUWHmTQ9iVYaZXk5rpovXQsVsC6NDJ%2FEpIi9cpC8w4VfdyX%2F3c85u774f6IexwbUwl8vgk6mC7bxMBb1dJLUoWuyI0ppP0V7sjHR%2BSGx6cTyJkWsDDOuO7DBjqkATbRrN7%2FtXCqEU2GF5rQZpmR7JYt0qItNQwY9tlAY4mfqppN%2FWCXhHWzScygVJZANKBMUQmQohfS9zlph3fbq9BVCT75kgaR0YFFGZJhZ549c5wRmHjTjyQ98xL0EzV%2F%2FewURPeYe9bchlcAwvkq6OOjBXxS%2BakfMAawRNKocdImfUctu2bsn%2BY%2FbOws6JQHyYf2EmJt2vS9kAKfYp5zNQhy30aM&X-Amz-Signature=1a66faf8d85b7f6a539422b9d3f636f00e8ef01c3bec8bd7cac5b61b66709774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMINTDSS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbsebYY7hontQn48HJAf1XKV4cP57Uu42xTEEsVEnGlwIhANUNYQHxvGxXaG5VdNSGUPlIJ%2FxJC1LFJLhloPN5I9e0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL8K%2Ba7hW6M824OmMq3APC%2F6vQrlugNH6%2BgPoZ3BgD0sopZMmxPF4NnJ9lOfPmWvX0%2Bcd4vSU6BKN0xhlNM46OyOcbvU5QF0M8Uv5NMtIe0zsTUNQHcDu%2FtxwWsPiQc%2FY4YUX%2Bw6%2FSuk7zyC6Poxay4zjU6XEu81kws03WziP2ThdFOkNU5f8l%2BIv11SrSuIr5NDFGVSMoa0CnpSF%2FVfSY2FgieqPsTv5%2F53jEKr4siUXFywv%2FHRnkUGn%2FqQwElVUi8rQfS2r8fypjKfEdfIKDQa13LbL5aLn79vHtEvQDhf1baCQpaZJCRONX8vU80xMT0%2Bc7vlZojTyUHBXEnM3xzuwQ9nIE51uQ%2BNHxzlrfME44k97IEuQffMm9tbukbyde7R9fiko1OCbjRYF7Oab8tbuy3%2FpQSUg9K7xPNm%2Bn9xkj1YS7lRmLDxVTNR%2BtRz69UPyJsjR2z75XP1UqtttgmBK7ynflLtHgVV54Z5Ek2VDACA%2B8vD6ZQEwTV2H%2F1qam4MPztiGKzVTyrcc0TIsZv1HpFRuxGLUWHmTQ9iVYaZXk5rpovXQsVsC6NDJ%2FEpIi9cpC8w4VfdyX%2F3c85u774f6IexwbUwl8vgk6mC7bxMBb1dJLUoWuyI0ppP0V7sjHR%2BSGx6cTyJkWsDDOuO7DBjqkATbRrN7%2FtXCqEU2GF5rQZpmR7JYt0qItNQwY9tlAY4mfqppN%2FWCXhHWzScygVJZANKBMUQmQohfS9zlph3fbq9BVCT75kgaR0YFFGZJhZ549c5wRmHjTjyQ98xL0EzV%2F%2FewURPeYe9bchlcAwvkq6OOjBXxS%2BakfMAawRNKocdImfUctu2bsn%2BY%2FbOws6JQHyYf2EmJt2vS9kAKfYp5zNQhy30aM&X-Amz-Signature=04ae4f2568a6c9830764d03ac6b85cf625d32e4983f78bd19351b30c55dd7160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
