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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=b73cdc9f262f34e1df58e6cbe742e13b4381c2c2d359ea212b7b84eb3bcfb4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=309e0409908e1763a87c5a854ac63156e86fdef55d134c5f602aa459efb8ac63&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=2a4a8cdc7ff122c28d3e51309dfe59d499418c40caf8f4cf5b1307198b1c4122&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=8465360933e971c0290b640b0c0ab2aee23806407dc8d6255e7ce17d60fc583e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=c49d474f83180cfc37cc8aede416d6c4fbc898aa4d0689d6fbfb33d5e942c760&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=58d78399720b0af0ab79b2db2f869e107acdc9483c124bda20d4153a958133f6&X-Amz-SignedHeaders=host&x-id=GetObject)
