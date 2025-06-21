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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAQFCYQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqM4cHVWizFcMYQemjGTWf5pa9fu32CiYvjn%2FaC0TB%2FAiEAmKh3hzFdahiudFGB%2BdoDXyAep3t08hX3HdvOKrJyTmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAgXDywjyX1pyBMdCrcAzIWLVGsIF3NDc8wryVsSepyHXvysUmq3jTimEE0uIBx7NXIcgVUxFjpdFYl4knCFrz0pirlSee%2FHs5Pm0UtaxTzt3UmljDfikcrBQp8KVcCYefVjaG%2BEIqFafMdjuTPVHoocGc%2BR%2FfyBXTgW4tYzF1c4Lq%2Bewe5c9ySig8dKnVAGvKsRuVS4HRndddH8%2FTNGoqNneZi78OMxqp4H3AQf1jfxA1PvuVwxIqlLcHKxiIZn6X1UvQH793dY%2FVLvJoFQjj8rr71JlC3HkIDEYXWAxNAIjlB1MJ%2FF3kENhRnyeqBc4DxbREM4t2WchuobJHXqneurpetYGWt1oSPAPwUYQ2gKfjKmeg5UmvSM%2Bx3ZRQk6kxLg%2FrzeBF8vIN3XYhkGC18MMD3cSjnZ%2BKiJAM3fiTjEB6igo8s0MYmKq2Az6I%2FTjANkBMWBMuvGUl2X2Uz7lLtxTHEwjkovVL6%2FI7eeY6FeC0W9GPd5%2F%2FSB9KwOYDJtIoXNbrWa5LuXGisSgr%2FmuLUXur5Yzp%2BdyzAU71m%2FC3ftqXo%2FFXstHF8eKWm%2F7kFLcoJnS%2BX3cn46BcSMXgDgdPlFEc%2FcdVeZ2LQnekvgSMTMSAXjwhjFGGcEWe%2F5tx559HweczEml4KwyeJMI2w2MIGOqUB%2FRign%2Fg%2BO1Wmcqcu5ad%2BIM2VSXq8GaHcgMpz5Cz0CU%2Bv%2FEjrrJ%2B5JjBt0QvrvkkZYJAmD6KzNBubuDJG3ACak%2F4UGik%2B9I17IUAx6AX64s00KN1jQxk%2FsnJJ1rdMWfGQ%2BNA62ySEoS%2FUFr7oxLnHsmHmvYQm3QmdRlU2egP7ft2ybLmVlvh61HPyXzhZT79MnVNhe4QirGr9y3PgfYfJ7aMOa3kO&X-Amz-Signature=3bc5102280916ffe8c61e7ffba19fb0a058cb6497a4e87b75555dda910a0968e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAQFCYQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqM4cHVWizFcMYQemjGTWf5pa9fu32CiYvjn%2FaC0TB%2FAiEAmKh3hzFdahiudFGB%2BdoDXyAep3t08hX3HdvOKrJyTmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAgXDywjyX1pyBMdCrcAzIWLVGsIF3NDc8wryVsSepyHXvysUmq3jTimEE0uIBx7NXIcgVUxFjpdFYl4knCFrz0pirlSee%2FHs5Pm0UtaxTzt3UmljDfikcrBQp8KVcCYefVjaG%2BEIqFafMdjuTPVHoocGc%2BR%2FfyBXTgW4tYzF1c4Lq%2Bewe5c9ySig8dKnVAGvKsRuVS4HRndddH8%2FTNGoqNneZi78OMxqp4H3AQf1jfxA1PvuVwxIqlLcHKxiIZn6X1UvQH793dY%2FVLvJoFQjj8rr71JlC3HkIDEYXWAxNAIjlB1MJ%2FF3kENhRnyeqBc4DxbREM4t2WchuobJHXqneurpetYGWt1oSPAPwUYQ2gKfjKmeg5UmvSM%2Bx3ZRQk6kxLg%2FrzeBF8vIN3XYhkGC18MMD3cSjnZ%2BKiJAM3fiTjEB6igo8s0MYmKq2Az6I%2FTjANkBMWBMuvGUl2X2Uz7lLtxTHEwjkovVL6%2FI7eeY6FeC0W9GPd5%2F%2FSB9KwOYDJtIoXNbrWa5LuXGisSgr%2FmuLUXur5Yzp%2BdyzAU71m%2FC3ftqXo%2FFXstHF8eKWm%2F7kFLcoJnS%2BX3cn46BcSMXgDgdPlFEc%2FcdVeZ2LQnekvgSMTMSAXjwhjFGGcEWe%2F5tx559HweczEml4KwyeJMI2w2MIGOqUB%2FRign%2Fg%2BO1Wmcqcu5ad%2BIM2VSXq8GaHcgMpz5Cz0CU%2Bv%2FEjrrJ%2B5JjBt0QvrvkkZYJAmD6KzNBubuDJG3ACak%2F4UGik%2B9I17IUAx6AX64s00KN1jQxk%2FsnJJ1rdMWfGQ%2BNA62ySEoS%2FUFr7oxLnHsmHmvYQm3QmdRlU2egP7ft2ybLmVlvh61HPyXzhZT79MnVNhe4QirGr9y3PgfYfJ7aMOa3kO&X-Amz-Signature=75f19e074474a9db8d3674747225b3ae2259f13fa434847f9bb1ed93895f36f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAQFCYQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqM4cHVWizFcMYQemjGTWf5pa9fu32CiYvjn%2FaC0TB%2FAiEAmKh3hzFdahiudFGB%2BdoDXyAep3t08hX3HdvOKrJyTmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAgXDywjyX1pyBMdCrcAzIWLVGsIF3NDc8wryVsSepyHXvysUmq3jTimEE0uIBx7NXIcgVUxFjpdFYl4knCFrz0pirlSee%2FHs5Pm0UtaxTzt3UmljDfikcrBQp8KVcCYefVjaG%2BEIqFafMdjuTPVHoocGc%2BR%2FfyBXTgW4tYzF1c4Lq%2Bewe5c9ySig8dKnVAGvKsRuVS4HRndddH8%2FTNGoqNneZi78OMxqp4H3AQf1jfxA1PvuVwxIqlLcHKxiIZn6X1UvQH793dY%2FVLvJoFQjj8rr71JlC3HkIDEYXWAxNAIjlB1MJ%2FF3kENhRnyeqBc4DxbREM4t2WchuobJHXqneurpetYGWt1oSPAPwUYQ2gKfjKmeg5UmvSM%2Bx3ZRQk6kxLg%2FrzeBF8vIN3XYhkGC18MMD3cSjnZ%2BKiJAM3fiTjEB6igo8s0MYmKq2Az6I%2FTjANkBMWBMuvGUl2X2Uz7lLtxTHEwjkovVL6%2FI7eeY6FeC0W9GPd5%2F%2FSB9KwOYDJtIoXNbrWa5LuXGisSgr%2FmuLUXur5Yzp%2BdyzAU71m%2FC3ftqXo%2FFXstHF8eKWm%2F7kFLcoJnS%2BX3cn46BcSMXgDgdPlFEc%2FcdVeZ2LQnekvgSMTMSAXjwhjFGGcEWe%2F5tx559HweczEml4KwyeJMI2w2MIGOqUB%2FRign%2Fg%2BO1Wmcqcu5ad%2BIM2VSXq8GaHcgMpz5Cz0CU%2Bv%2FEjrrJ%2B5JjBt0QvrvkkZYJAmD6KzNBubuDJG3ACak%2F4UGik%2B9I17IUAx6AX64s00KN1jQxk%2FsnJJ1rdMWfGQ%2BNA62ySEoS%2FUFr7oxLnHsmHmvYQm3QmdRlU2egP7ft2ybLmVlvh61HPyXzhZT79MnVNhe4QirGr9y3PgfYfJ7aMOa3kO&X-Amz-Signature=5bcae0c3be4f051020aec199c43c769213ea2d6c7a0cf859cfe6beb59b3ec9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAQFCYQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqM4cHVWizFcMYQemjGTWf5pa9fu32CiYvjn%2FaC0TB%2FAiEAmKh3hzFdahiudFGB%2BdoDXyAep3t08hX3HdvOKrJyTmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAgXDywjyX1pyBMdCrcAzIWLVGsIF3NDc8wryVsSepyHXvysUmq3jTimEE0uIBx7NXIcgVUxFjpdFYl4knCFrz0pirlSee%2FHs5Pm0UtaxTzt3UmljDfikcrBQp8KVcCYefVjaG%2BEIqFafMdjuTPVHoocGc%2BR%2FfyBXTgW4tYzF1c4Lq%2Bewe5c9ySig8dKnVAGvKsRuVS4HRndddH8%2FTNGoqNneZi78OMxqp4H3AQf1jfxA1PvuVwxIqlLcHKxiIZn6X1UvQH793dY%2FVLvJoFQjj8rr71JlC3HkIDEYXWAxNAIjlB1MJ%2FF3kENhRnyeqBc4DxbREM4t2WchuobJHXqneurpetYGWt1oSPAPwUYQ2gKfjKmeg5UmvSM%2Bx3ZRQk6kxLg%2FrzeBF8vIN3XYhkGC18MMD3cSjnZ%2BKiJAM3fiTjEB6igo8s0MYmKq2Az6I%2FTjANkBMWBMuvGUl2X2Uz7lLtxTHEwjkovVL6%2FI7eeY6FeC0W9GPd5%2F%2FSB9KwOYDJtIoXNbrWa5LuXGisSgr%2FmuLUXur5Yzp%2BdyzAU71m%2FC3ftqXo%2FFXstHF8eKWm%2F7kFLcoJnS%2BX3cn46BcSMXgDgdPlFEc%2FcdVeZ2LQnekvgSMTMSAXjwhjFGGcEWe%2F5tx559HweczEml4KwyeJMI2w2MIGOqUB%2FRign%2Fg%2BO1Wmcqcu5ad%2BIM2VSXq8GaHcgMpz5Cz0CU%2Bv%2FEjrrJ%2B5JjBt0QvrvkkZYJAmD6KzNBubuDJG3ACak%2F4UGik%2B9I17IUAx6AX64s00KN1jQxk%2FsnJJ1rdMWfGQ%2BNA62ySEoS%2FUFr7oxLnHsmHmvYQm3QmdRlU2egP7ft2ybLmVlvh61HPyXzhZT79MnVNhe4QirGr9y3PgfYfJ7aMOa3kO&X-Amz-Signature=4b6a54bab4610bfddfb033e1f294389c30c73a0f4841b6e5ba53e9698b642384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAQFCYQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqM4cHVWizFcMYQemjGTWf5pa9fu32CiYvjn%2FaC0TB%2FAiEAmKh3hzFdahiudFGB%2BdoDXyAep3t08hX3HdvOKrJyTmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAgXDywjyX1pyBMdCrcAzIWLVGsIF3NDc8wryVsSepyHXvysUmq3jTimEE0uIBx7NXIcgVUxFjpdFYl4knCFrz0pirlSee%2FHs5Pm0UtaxTzt3UmljDfikcrBQp8KVcCYefVjaG%2BEIqFafMdjuTPVHoocGc%2BR%2FfyBXTgW4tYzF1c4Lq%2Bewe5c9ySig8dKnVAGvKsRuVS4HRndddH8%2FTNGoqNneZi78OMxqp4H3AQf1jfxA1PvuVwxIqlLcHKxiIZn6X1UvQH793dY%2FVLvJoFQjj8rr71JlC3HkIDEYXWAxNAIjlB1MJ%2FF3kENhRnyeqBc4DxbREM4t2WchuobJHXqneurpetYGWt1oSPAPwUYQ2gKfjKmeg5UmvSM%2Bx3ZRQk6kxLg%2FrzeBF8vIN3XYhkGC18MMD3cSjnZ%2BKiJAM3fiTjEB6igo8s0MYmKq2Az6I%2FTjANkBMWBMuvGUl2X2Uz7lLtxTHEwjkovVL6%2FI7eeY6FeC0W9GPd5%2F%2FSB9KwOYDJtIoXNbrWa5LuXGisSgr%2FmuLUXur5Yzp%2BdyzAU71m%2FC3ftqXo%2FFXstHF8eKWm%2F7kFLcoJnS%2BX3cn46BcSMXgDgdPlFEc%2FcdVeZ2LQnekvgSMTMSAXjwhjFGGcEWe%2F5tx559HweczEml4KwyeJMI2w2MIGOqUB%2FRign%2Fg%2BO1Wmcqcu5ad%2BIM2VSXq8GaHcgMpz5Cz0CU%2Bv%2FEjrrJ%2B5JjBt0QvrvkkZYJAmD6KzNBubuDJG3ACak%2F4UGik%2B9I17IUAx6AX64s00KN1jQxk%2FsnJJ1rdMWfGQ%2BNA62ySEoS%2FUFr7oxLnHsmHmvYQm3QmdRlU2egP7ft2ybLmVlvh61HPyXzhZT79MnVNhe4QirGr9y3PgfYfJ7aMOa3kO&X-Amz-Signature=9215c4c4ab0a3b857b1d214ed5e80ccacb4b7a5fc533f6bed29a1902416aaa41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYAQFCYQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqM4cHVWizFcMYQemjGTWf5pa9fu32CiYvjn%2FaC0TB%2FAiEAmKh3hzFdahiudFGB%2BdoDXyAep3t08hX3HdvOKrJyTmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAgXDywjyX1pyBMdCrcAzIWLVGsIF3NDc8wryVsSepyHXvysUmq3jTimEE0uIBx7NXIcgVUxFjpdFYl4knCFrz0pirlSee%2FHs5Pm0UtaxTzt3UmljDfikcrBQp8KVcCYefVjaG%2BEIqFafMdjuTPVHoocGc%2BR%2FfyBXTgW4tYzF1c4Lq%2Bewe5c9ySig8dKnVAGvKsRuVS4HRndddH8%2FTNGoqNneZi78OMxqp4H3AQf1jfxA1PvuVwxIqlLcHKxiIZn6X1UvQH793dY%2FVLvJoFQjj8rr71JlC3HkIDEYXWAxNAIjlB1MJ%2FF3kENhRnyeqBc4DxbREM4t2WchuobJHXqneurpetYGWt1oSPAPwUYQ2gKfjKmeg5UmvSM%2Bx3ZRQk6kxLg%2FrzeBF8vIN3XYhkGC18MMD3cSjnZ%2BKiJAM3fiTjEB6igo8s0MYmKq2Az6I%2FTjANkBMWBMuvGUl2X2Uz7lLtxTHEwjkovVL6%2FI7eeY6FeC0W9GPd5%2F%2FSB9KwOYDJtIoXNbrWa5LuXGisSgr%2FmuLUXur5Yzp%2BdyzAU71m%2FC3ftqXo%2FFXstHF8eKWm%2F7kFLcoJnS%2BX3cn46BcSMXgDgdPlFEc%2FcdVeZ2LQnekvgSMTMSAXjwhjFGGcEWe%2F5tx559HweczEml4KwyeJMI2w2MIGOqUB%2FRign%2Fg%2BO1Wmcqcu5ad%2BIM2VSXq8GaHcgMpz5Cz0CU%2Bv%2FEjrrJ%2B5JjBt0QvrvkkZYJAmD6KzNBubuDJG3ACak%2F4UGik%2B9I17IUAx6AX64s00KN1jQxk%2FsnJJ1rdMWfGQ%2BNA62ySEoS%2FUFr7oxLnHsmHmvYQm3QmdRlU2egP7ft2ybLmVlvh61HPyXzhZT79MnVNhe4QirGr9y3PgfYfJ7aMOa3kO&X-Amz-Signature=324e677ce57abbd6c233c81fc242ba9cfe18d2a971198dd0ddadd8ce3e844cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
