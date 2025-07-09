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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBWDBNF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ%2FcX9pEr6T%2BUgQC03Dma4Zq%2BTmSRUE4fxVTMOQAZzgIhAOg%2BMdR2pChoLmc51IgZ%2BxaoffoxzJ9MBHSgQgivJX3iKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSrK%2B7MGE7FftnCsq3AM6S8udVNZG18YH%2F53aNsZESsdKPJbt5rwnOvk71iL5U4tOAjxHj7BXe8YWn9IW81n9a20%2FNcp6zp2TOJ1mc4K6Mg%2F3HCmsLRrn%2FB29xWcyJi8rsmyqLFG9Iy4le%2B%2BR9x%2BIy2NZ0%2FgRrZRRCfbArgVIY1UG%2Fj%2BBb1meERuC63MsxXVurwKLHVWSuiT2c5PEgddOxyEYWXhMIH6gVHzYz0BerFdI9fTfHRH2nib6nP88Zrw2nwl61Uyx6HRaTTkAfviq0bnS2vV68AKQ1S%2Beh2jxa3E9CTMY8lh7cNFfTBoqIJ79ryRSZlDd56h7MjdY1HHhfOEiVJeD7lgWZAq4oEE6oUGwReLDziel%2BKFLhFZjs7U551fO9FgXJ%2B1%2F7jfJYBfjFv%2Bg2mgg5wR8UWQk%2BKrN4tP81u51CrK04E%2B%2BGYzIfWET0y4vF6aErId9guySwS6F%2F0FAVaR0JcVw6feHBsltIsnKtTY667b4jQzJ3NcVuSLrP44z%2FVDrF8bs0T3bX5oLspS%2BVzrNSkRdET8Aw1x1jueZnVEI3CPaI7ZZiNtGBfbpIjHr58ObpP38bEUPzSEjQGiR0w%2BgXBV7o27SUNWRzhwN8cAXK2F7RTofiSq3w%2F4TX%2Fzp7GhSR%2FG%2FxTCEo7jDBjqkAYkxAu3NEjmKVb3kHNaVWiPs7jVuKAnA8DB3tA3imTbDaRKeKxW%2BkxKF5Rm%2Fm7HQBO2UhWLsmznpBrZBy7QNwxEINgADrJ1cGp6yuhQTUBInQSYh5I4DRuqlaoL78YAxUGJNROYjeD0yXOpGGw6tAzSYngUeuyO4nwVowzq3IeUoO5tio0ml%2FpDBKqoK8noVSEl3zSYWtYi5YKALdi9ovNfgKO%2B9&X-Amz-Signature=d714261e30e48fc24c5ae7e3b83b490cf70c5ce8562264cbdfd900b0336024b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBWDBNF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ%2FcX9pEr6T%2BUgQC03Dma4Zq%2BTmSRUE4fxVTMOQAZzgIhAOg%2BMdR2pChoLmc51IgZ%2BxaoffoxzJ9MBHSgQgivJX3iKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSrK%2B7MGE7FftnCsq3AM6S8udVNZG18YH%2F53aNsZESsdKPJbt5rwnOvk71iL5U4tOAjxHj7BXe8YWn9IW81n9a20%2FNcp6zp2TOJ1mc4K6Mg%2F3HCmsLRrn%2FB29xWcyJi8rsmyqLFG9Iy4le%2B%2BR9x%2BIy2NZ0%2FgRrZRRCfbArgVIY1UG%2Fj%2BBb1meERuC63MsxXVurwKLHVWSuiT2c5PEgddOxyEYWXhMIH6gVHzYz0BerFdI9fTfHRH2nib6nP88Zrw2nwl61Uyx6HRaTTkAfviq0bnS2vV68AKQ1S%2Beh2jxa3E9CTMY8lh7cNFfTBoqIJ79ryRSZlDd56h7MjdY1HHhfOEiVJeD7lgWZAq4oEE6oUGwReLDziel%2BKFLhFZjs7U551fO9FgXJ%2B1%2F7jfJYBfjFv%2Bg2mgg5wR8UWQk%2BKrN4tP81u51CrK04E%2B%2BGYzIfWET0y4vF6aErId9guySwS6F%2F0FAVaR0JcVw6feHBsltIsnKtTY667b4jQzJ3NcVuSLrP44z%2FVDrF8bs0T3bX5oLspS%2BVzrNSkRdET8Aw1x1jueZnVEI3CPaI7ZZiNtGBfbpIjHr58ObpP38bEUPzSEjQGiR0w%2BgXBV7o27SUNWRzhwN8cAXK2F7RTofiSq3w%2F4TX%2Fzp7GhSR%2FG%2FxTCEo7jDBjqkAYkxAu3NEjmKVb3kHNaVWiPs7jVuKAnA8DB3tA3imTbDaRKeKxW%2BkxKF5Rm%2Fm7HQBO2UhWLsmznpBrZBy7QNwxEINgADrJ1cGp6yuhQTUBInQSYh5I4DRuqlaoL78YAxUGJNROYjeD0yXOpGGw6tAzSYngUeuyO4nwVowzq3IeUoO5tio0ml%2FpDBKqoK8noVSEl3zSYWtYi5YKALdi9ovNfgKO%2B9&X-Amz-Signature=c90bbef7c0ad96ebc6f20f823b83fca6e74d9e99ca559891fac4cd6e14d8e19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBWDBNF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ%2FcX9pEr6T%2BUgQC03Dma4Zq%2BTmSRUE4fxVTMOQAZzgIhAOg%2BMdR2pChoLmc51IgZ%2BxaoffoxzJ9MBHSgQgivJX3iKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSrK%2B7MGE7FftnCsq3AM6S8udVNZG18YH%2F53aNsZESsdKPJbt5rwnOvk71iL5U4tOAjxHj7BXe8YWn9IW81n9a20%2FNcp6zp2TOJ1mc4K6Mg%2F3HCmsLRrn%2FB29xWcyJi8rsmyqLFG9Iy4le%2B%2BR9x%2BIy2NZ0%2FgRrZRRCfbArgVIY1UG%2Fj%2BBb1meERuC63MsxXVurwKLHVWSuiT2c5PEgddOxyEYWXhMIH6gVHzYz0BerFdI9fTfHRH2nib6nP88Zrw2nwl61Uyx6HRaTTkAfviq0bnS2vV68AKQ1S%2Beh2jxa3E9CTMY8lh7cNFfTBoqIJ79ryRSZlDd56h7MjdY1HHhfOEiVJeD7lgWZAq4oEE6oUGwReLDziel%2BKFLhFZjs7U551fO9FgXJ%2B1%2F7jfJYBfjFv%2Bg2mgg5wR8UWQk%2BKrN4tP81u51CrK04E%2B%2BGYzIfWET0y4vF6aErId9guySwS6F%2F0FAVaR0JcVw6feHBsltIsnKtTY667b4jQzJ3NcVuSLrP44z%2FVDrF8bs0T3bX5oLspS%2BVzrNSkRdET8Aw1x1jueZnVEI3CPaI7ZZiNtGBfbpIjHr58ObpP38bEUPzSEjQGiR0w%2BgXBV7o27SUNWRzhwN8cAXK2F7RTofiSq3w%2F4TX%2Fzp7GhSR%2FG%2FxTCEo7jDBjqkAYkxAu3NEjmKVb3kHNaVWiPs7jVuKAnA8DB3tA3imTbDaRKeKxW%2BkxKF5Rm%2Fm7HQBO2UhWLsmznpBrZBy7QNwxEINgADrJ1cGp6yuhQTUBInQSYh5I4DRuqlaoL78YAxUGJNROYjeD0yXOpGGw6tAzSYngUeuyO4nwVowzq3IeUoO5tio0ml%2FpDBKqoK8noVSEl3zSYWtYi5YKALdi9ovNfgKO%2B9&X-Amz-Signature=38db200f72af5860e14d7cca819aeb3493221bcb3e5183a11e62b2d039d90bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBWDBNF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ%2FcX9pEr6T%2BUgQC03Dma4Zq%2BTmSRUE4fxVTMOQAZzgIhAOg%2BMdR2pChoLmc51IgZ%2BxaoffoxzJ9MBHSgQgivJX3iKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSrK%2B7MGE7FftnCsq3AM6S8udVNZG18YH%2F53aNsZESsdKPJbt5rwnOvk71iL5U4tOAjxHj7BXe8YWn9IW81n9a20%2FNcp6zp2TOJ1mc4K6Mg%2F3HCmsLRrn%2FB29xWcyJi8rsmyqLFG9Iy4le%2B%2BR9x%2BIy2NZ0%2FgRrZRRCfbArgVIY1UG%2Fj%2BBb1meERuC63MsxXVurwKLHVWSuiT2c5PEgddOxyEYWXhMIH6gVHzYz0BerFdI9fTfHRH2nib6nP88Zrw2nwl61Uyx6HRaTTkAfviq0bnS2vV68AKQ1S%2Beh2jxa3E9CTMY8lh7cNFfTBoqIJ79ryRSZlDd56h7MjdY1HHhfOEiVJeD7lgWZAq4oEE6oUGwReLDziel%2BKFLhFZjs7U551fO9FgXJ%2B1%2F7jfJYBfjFv%2Bg2mgg5wR8UWQk%2BKrN4tP81u51CrK04E%2B%2BGYzIfWET0y4vF6aErId9guySwS6F%2F0FAVaR0JcVw6feHBsltIsnKtTY667b4jQzJ3NcVuSLrP44z%2FVDrF8bs0T3bX5oLspS%2BVzrNSkRdET8Aw1x1jueZnVEI3CPaI7ZZiNtGBfbpIjHr58ObpP38bEUPzSEjQGiR0w%2BgXBV7o27SUNWRzhwN8cAXK2F7RTofiSq3w%2F4TX%2Fzp7GhSR%2FG%2FxTCEo7jDBjqkAYkxAu3NEjmKVb3kHNaVWiPs7jVuKAnA8DB3tA3imTbDaRKeKxW%2BkxKF5Rm%2Fm7HQBO2UhWLsmznpBrZBy7QNwxEINgADrJ1cGp6yuhQTUBInQSYh5I4DRuqlaoL78YAxUGJNROYjeD0yXOpGGw6tAzSYngUeuyO4nwVowzq3IeUoO5tio0ml%2FpDBKqoK8noVSEl3zSYWtYi5YKALdi9ovNfgKO%2B9&X-Amz-Signature=ec2b9dd2e60686b302323a5cf5bfe04786115889fbfd0f4380ea84003fe68b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBWDBNF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ%2FcX9pEr6T%2BUgQC03Dma4Zq%2BTmSRUE4fxVTMOQAZzgIhAOg%2BMdR2pChoLmc51IgZ%2BxaoffoxzJ9MBHSgQgivJX3iKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSrK%2B7MGE7FftnCsq3AM6S8udVNZG18YH%2F53aNsZESsdKPJbt5rwnOvk71iL5U4tOAjxHj7BXe8YWn9IW81n9a20%2FNcp6zp2TOJ1mc4K6Mg%2F3HCmsLRrn%2FB29xWcyJi8rsmyqLFG9Iy4le%2B%2BR9x%2BIy2NZ0%2FgRrZRRCfbArgVIY1UG%2Fj%2BBb1meERuC63MsxXVurwKLHVWSuiT2c5PEgddOxyEYWXhMIH6gVHzYz0BerFdI9fTfHRH2nib6nP88Zrw2nwl61Uyx6HRaTTkAfviq0bnS2vV68AKQ1S%2Beh2jxa3E9CTMY8lh7cNFfTBoqIJ79ryRSZlDd56h7MjdY1HHhfOEiVJeD7lgWZAq4oEE6oUGwReLDziel%2BKFLhFZjs7U551fO9FgXJ%2B1%2F7jfJYBfjFv%2Bg2mgg5wR8UWQk%2BKrN4tP81u51CrK04E%2B%2BGYzIfWET0y4vF6aErId9guySwS6F%2F0FAVaR0JcVw6feHBsltIsnKtTY667b4jQzJ3NcVuSLrP44z%2FVDrF8bs0T3bX5oLspS%2BVzrNSkRdET8Aw1x1jueZnVEI3CPaI7ZZiNtGBfbpIjHr58ObpP38bEUPzSEjQGiR0w%2BgXBV7o27SUNWRzhwN8cAXK2F7RTofiSq3w%2F4TX%2Fzp7GhSR%2FG%2FxTCEo7jDBjqkAYkxAu3NEjmKVb3kHNaVWiPs7jVuKAnA8DB3tA3imTbDaRKeKxW%2BkxKF5Rm%2Fm7HQBO2UhWLsmznpBrZBy7QNwxEINgADrJ1cGp6yuhQTUBInQSYh5I4DRuqlaoL78YAxUGJNROYjeD0yXOpGGw6tAzSYngUeuyO4nwVowzq3IeUoO5tio0ml%2FpDBKqoK8noVSEl3zSYWtYi5YKALdi9ovNfgKO%2B9&X-Amz-Signature=ad4bf327ae142f4a108b3144fc62297dd6eb1e0cc48ca4ecf057eca6af5df453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBWDBNF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ%2FcX9pEr6T%2BUgQC03Dma4Zq%2BTmSRUE4fxVTMOQAZzgIhAOg%2BMdR2pChoLmc51IgZ%2BxaoffoxzJ9MBHSgQgivJX3iKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCSrK%2B7MGE7FftnCsq3AM6S8udVNZG18YH%2F53aNsZESsdKPJbt5rwnOvk71iL5U4tOAjxHj7BXe8YWn9IW81n9a20%2FNcp6zp2TOJ1mc4K6Mg%2F3HCmsLRrn%2FB29xWcyJi8rsmyqLFG9Iy4le%2B%2BR9x%2BIy2NZ0%2FgRrZRRCfbArgVIY1UG%2Fj%2BBb1meERuC63MsxXVurwKLHVWSuiT2c5PEgddOxyEYWXhMIH6gVHzYz0BerFdI9fTfHRH2nib6nP88Zrw2nwl61Uyx6HRaTTkAfviq0bnS2vV68AKQ1S%2Beh2jxa3E9CTMY8lh7cNFfTBoqIJ79ryRSZlDd56h7MjdY1HHhfOEiVJeD7lgWZAq4oEE6oUGwReLDziel%2BKFLhFZjs7U551fO9FgXJ%2B1%2F7jfJYBfjFv%2Bg2mgg5wR8UWQk%2BKrN4tP81u51CrK04E%2B%2BGYzIfWET0y4vF6aErId9guySwS6F%2F0FAVaR0JcVw6feHBsltIsnKtTY667b4jQzJ3NcVuSLrP44z%2FVDrF8bs0T3bX5oLspS%2BVzrNSkRdET8Aw1x1jueZnVEI3CPaI7ZZiNtGBfbpIjHr58ObpP38bEUPzSEjQGiR0w%2BgXBV7o27SUNWRzhwN8cAXK2F7RTofiSq3w%2F4TX%2Fzp7GhSR%2FG%2FxTCEo7jDBjqkAYkxAu3NEjmKVb3kHNaVWiPs7jVuKAnA8DB3tA3imTbDaRKeKxW%2BkxKF5Rm%2Fm7HQBO2UhWLsmznpBrZBy7QNwxEINgADrJ1cGp6yuhQTUBInQSYh5I4DRuqlaoL78YAxUGJNROYjeD0yXOpGGw6tAzSYngUeuyO4nwVowzq3IeUoO5tio0ml%2FpDBKqoK8noVSEl3zSYWtYi5YKALdi9ovNfgKO%2B9&X-Amz-Signature=fda56d46902d8753581fd433ef3dab072dffe18b2948c97ecfd240c58eb7f2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
