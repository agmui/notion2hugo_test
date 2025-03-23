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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6AXOPV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHuaGktWZeQDYJLzUckJHjwMoTm1BbGM3OWnURgNjCTRAiANEGgU6rVcrckBhk7swu7Yb5xm%2BUhtcwoD%2BAesYx5N2yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyXcUqRt%2BWeZdl90KtwDGJaQpVmVdG81MNBAXpXGIkhs6udYTdIpSGPftJMwUCyiKAgnSGdALXArDM4l1JGNLM7RNzNTaC8UVS6rVtWZXDGzoyVajQSv1xnehIbluKofGrggEKIoDgjbHyyvKcW11njbnKPfy4uT2wgxf5Ip1a9bYoWCzwjroyx7RTfmuNzfXjT7d8VmnZu8zC7dx8SGnvBapFI2VOV88JfFzpiSQAHc%2BuH5cEIhtqnHSxB3CzMENnTzB8ueEKLcmIlfUaacm7o082hkERviugS7zduz4W%2Fxbwhzw82jJ23pfkoa6zTEkkwnujHxNKgnyb4KEq790Mxqe3sZTZ3SL61570iOr0X6%2FS7xNCwe1pVRJjbySu6tnqTFNy8BM2NvlXk4Lrnb1monm5z18WXSQy0%2FwVqFo05gfFUcdVzEXTEsgj%2FfDdF0qQBpmpK%2ByUGGdngH2yO0Q7XWlysnVzo6%2FuaVeOpRencaJoYThMhclPnnXbtmMpdCZl3KssrBT4LkqBsXQZduBwC8DhJbKvj%2B9sAfdMBXlmr%2FQXEhePxwgrxesBtCOJOeB081HiMn%2BhOoJJuJkTf1gbUYNp4x2kBd1IgFxPAY4L12uiVWcNSxZm38oAdh6AKSr5j9sBEIWQgbCVww0cz%2FvgY6pgHaxqtw42EsP%2F2cGVysh4MPlEpvfumJiPTFHpJvwtl%2BO%2B6kweU6qgLLibFeoLtxTEn9K9cQXYgP5ycxGTpvZao870UEBHjUdUOVxQFGzkOMChUtNmXczWG0USvejZaXll0Ea1YG5j7LwM8mzv6gBD3vAXSx%2B16UjXP%2BWWSQ5WrJmKW3rtyjAb7k60g0pFAFClfqIhaNmzVNKzAfaadFLGhlzTYbyY9F&X-Amz-Signature=4a07e6457ea378ba2447c2346f435ec8b1209d58af40fa0bbf1f641fdc5f0458&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6AXOPV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHuaGktWZeQDYJLzUckJHjwMoTm1BbGM3OWnURgNjCTRAiANEGgU6rVcrckBhk7swu7Yb5xm%2BUhtcwoD%2BAesYx5N2yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyXcUqRt%2BWeZdl90KtwDGJaQpVmVdG81MNBAXpXGIkhs6udYTdIpSGPftJMwUCyiKAgnSGdALXArDM4l1JGNLM7RNzNTaC8UVS6rVtWZXDGzoyVajQSv1xnehIbluKofGrggEKIoDgjbHyyvKcW11njbnKPfy4uT2wgxf5Ip1a9bYoWCzwjroyx7RTfmuNzfXjT7d8VmnZu8zC7dx8SGnvBapFI2VOV88JfFzpiSQAHc%2BuH5cEIhtqnHSxB3CzMENnTzB8ueEKLcmIlfUaacm7o082hkERviugS7zduz4W%2Fxbwhzw82jJ23pfkoa6zTEkkwnujHxNKgnyb4KEq790Mxqe3sZTZ3SL61570iOr0X6%2FS7xNCwe1pVRJjbySu6tnqTFNy8BM2NvlXk4Lrnb1monm5z18WXSQy0%2FwVqFo05gfFUcdVzEXTEsgj%2FfDdF0qQBpmpK%2ByUGGdngH2yO0Q7XWlysnVzo6%2FuaVeOpRencaJoYThMhclPnnXbtmMpdCZl3KssrBT4LkqBsXQZduBwC8DhJbKvj%2B9sAfdMBXlmr%2FQXEhePxwgrxesBtCOJOeB081HiMn%2BhOoJJuJkTf1gbUYNp4x2kBd1IgFxPAY4L12uiVWcNSxZm38oAdh6AKSr5j9sBEIWQgbCVww0cz%2FvgY6pgHaxqtw42EsP%2F2cGVysh4MPlEpvfumJiPTFHpJvwtl%2BO%2B6kweU6qgLLibFeoLtxTEn9K9cQXYgP5ycxGTpvZao870UEBHjUdUOVxQFGzkOMChUtNmXczWG0USvejZaXll0Ea1YG5j7LwM8mzv6gBD3vAXSx%2B16UjXP%2BWWSQ5WrJmKW3rtyjAb7k60g0pFAFClfqIhaNmzVNKzAfaadFLGhlzTYbyY9F&X-Amz-Signature=d7ae52a6600106e31eb25155ce25a26c4a160bee9ecff2caf17868d04c3fea01&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6AXOPV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHuaGktWZeQDYJLzUckJHjwMoTm1BbGM3OWnURgNjCTRAiANEGgU6rVcrckBhk7swu7Yb5xm%2BUhtcwoD%2BAesYx5N2yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyXcUqRt%2BWeZdl90KtwDGJaQpVmVdG81MNBAXpXGIkhs6udYTdIpSGPftJMwUCyiKAgnSGdALXArDM4l1JGNLM7RNzNTaC8UVS6rVtWZXDGzoyVajQSv1xnehIbluKofGrggEKIoDgjbHyyvKcW11njbnKPfy4uT2wgxf5Ip1a9bYoWCzwjroyx7RTfmuNzfXjT7d8VmnZu8zC7dx8SGnvBapFI2VOV88JfFzpiSQAHc%2BuH5cEIhtqnHSxB3CzMENnTzB8ueEKLcmIlfUaacm7o082hkERviugS7zduz4W%2Fxbwhzw82jJ23pfkoa6zTEkkwnujHxNKgnyb4KEq790Mxqe3sZTZ3SL61570iOr0X6%2FS7xNCwe1pVRJjbySu6tnqTFNy8BM2NvlXk4Lrnb1monm5z18WXSQy0%2FwVqFo05gfFUcdVzEXTEsgj%2FfDdF0qQBpmpK%2ByUGGdngH2yO0Q7XWlysnVzo6%2FuaVeOpRencaJoYThMhclPnnXbtmMpdCZl3KssrBT4LkqBsXQZduBwC8DhJbKvj%2B9sAfdMBXlmr%2FQXEhePxwgrxesBtCOJOeB081HiMn%2BhOoJJuJkTf1gbUYNp4x2kBd1IgFxPAY4L12uiVWcNSxZm38oAdh6AKSr5j9sBEIWQgbCVww0cz%2FvgY6pgHaxqtw42EsP%2F2cGVysh4MPlEpvfumJiPTFHpJvwtl%2BO%2B6kweU6qgLLibFeoLtxTEn9K9cQXYgP5ycxGTpvZao870UEBHjUdUOVxQFGzkOMChUtNmXczWG0USvejZaXll0Ea1YG5j7LwM8mzv6gBD3vAXSx%2B16UjXP%2BWWSQ5WrJmKW3rtyjAb7k60g0pFAFClfqIhaNmzVNKzAfaadFLGhlzTYbyY9F&X-Amz-Signature=8a2580bdf14333ef460cdc2d1b846ed3c3b72728aaf13e3dbd9efe8da0681453&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6AXOPV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHuaGktWZeQDYJLzUckJHjwMoTm1BbGM3OWnURgNjCTRAiANEGgU6rVcrckBhk7swu7Yb5xm%2BUhtcwoD%2BAesYx5N2yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyXcUqRt%2BWeZdl90KtwDGJaQpVmVdG81MNBAXpXGIkhs6udYTdIpSGPftJMwUCyiKAgnSGdALXArDM4l1JGNLM7RNzNTaC8UVS6rVtWZXDGzoyVajQSv1xnehIbluKofGrggEKIoDgjbHyyvKcW11njbnKPfy4uT2wgxf5Ip1a9bYoWCzwjroyx7RTfmuNzfXjT7d8VmnZu8zC7dx8SGnvBapFI2VOV88JfFzpiSQAHc%2BuH5cEIhtqnHSxB3CzMENnTzB8ueEKLcmIlfUaacm7o082hkERviugS7zduz4W%2Fxbwhzw82jJ23pfkoa6zTEkkwnujHxNKgnyb4KEq790Mxqe3sZTZ3SL61570iOr0X6%2FS7xNCwe1pVRJjbySu6tnqTFNy8BM2NvlXk4Lrnb1monm5z18WXSQy0%2FwVqFo05gfFUcdVzEXTEsgj%2FfDdF0qQBpmpK%2ByUGGdngH2yO0Q7XWlysnVzo6%2FuaVeOpRencaJoYThMhclPnnXbtmMpdCZl3KssrBT4LkqBsXQZduBwC8DhJbKvj%2B9sAfdMBXlmr%2FQXEhePxwgrxesBtCOJOeB081HiMn%2BhOoJJuJkTf1gbUYNp4x2kBd1IgFxPAY4L12uiVWcNSxZm38oAdh6AKSr5j9sBEIWQgbCVww0cz%2FvgY6pgHaxqtw42EsP%2F2cGVysh4MPlEpvfumJiPTFHpJvwtl%2BO%2B6kweU6qgLLibFeoLtxTEn9K9cQXYgP5ycxGTpvZao870UEBHjUdUOVxQFGzkOMChUtNmXczWG0USvejZaXll0Ea1YG5j7LwM8mzv6gBD3vAXSx%2B16UjXP%2BWWSQ5WrJmKW3rtyjAb7k60g0pFAFClfqIhaNmzVNKzAfaadFLGhlzTYbyY9F&X-Amz-Signature=c9460b257e6418970267adf3b060a1c09310400d65e92a17077e5dc73042bb21&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6AXOPV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHuaGktWZeQDYJLzUckJHjwMoTm1BbGM3OWnURgNjCTRAiANEGgU6rVcrckBhk7swu7Yb5xm%2BUhtcwoD%2BAesYx5N2yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyXcUqRt%2BWeZdl90KtwDGJaQpVmVdG81MNBAXpXGIkhs6udYTdIpSGPftJMwUCyiKAgnSGdALXArDM4l1JGNLM7RNzNTaC8UVS6rVtWZXDGzoyVajQSv1xnehIbluKofGrggEKIoDgjbHyyvKcW11njbnKPfy4uT2wgxf5Ip1a9bYoWCzwjroyx7RTfmuNzfXjT7d8VmnZu8zC7dx8SGnvBapFI2VOV88JfFzpiSQAHc%2BuH5cEIhtqnHSxB3CzMENnTzB8ueEKLcmIlfUaacm7o082hkERviugS7zduz4W%2Fxbwhzw82jJ23pfkoa6zTEkkwnujHxNKgnyb4KEq790Mxqe3sZTZ3SL61570iOr0X6%2FS7xNCwe1pVRJjbySu6tnqTFNy8BM2NvlXk4Lrnb1monm5z18WXSQy0%2FwVqFo05gfFUcdVzEXTEsgj%2FfDdF0qQBpmpK%2ByUGGdngH2yO0Q7XWlysnVzo6%2FuaVeOpRencaJoYThMhclPnnXbtmMpdCZl3KssrBT4LkqBsXQZduBwC8DhJbKvj%2B9sAfdMBXlmr%2FQXEhePxwgrxesBtCOJOeB081HiMn%2BhOoJJuJkTf1gbUYNp4x2kBd1IgFxPAY4L12uiVWcNSxZm38oAdh6AKSr5j9sBEIWQgbCVww0cz%2FvgY6pgHaxqtw42EsP%2F2cGVysh4MPlEpvfumJiPTFHpJvwtl%2BO%2B6kweU6qgLLibFeoLtxTEn9K9cQXYgP5ycxGTpvZao870UEBHjUdUOVxQFGzkOMChUtNmXczWG0USvejZaXll0Ea1YG5j7LwM8mzv6gBD3vAXSx%2B16UjXP%2BWWSQ5WrJmKW3rtyjAb7k60g0pFAFClfqIhaNmzVNKzAfaadFLGhlzTYbyY9F&X-Amz-Signature=e09ff52d9e2a395288281d06ecbd006f46c4094425b4b928d3efbd025a5e53bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6AXOPV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHuaGktWZeQDYJLzUckJHjwMoTm1BbGM3OWnURgNjCTRAiANEGgU6rVcrckBhk7swu7Yb5xm%2BUhtcwoD%2BAesYx5N2yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtyXcUqRt%2BWeZdl90KtwDGJaQpVmVdG81MNBAXpXGIkhs6udYTdIpSGPftJMwUCyiKAgnSGdALXArDM4l1JGNLM7RNzNTaC8UVS6rVtWZXDGzoyVajQSv1xnehIbluKofGrggEKIoDgjbHyyvKcW11njbnKPfy4uT2wgxf5Ip1a9bYoWCzwjroyx7RTfmuNzfXjT7d8VmnZu8zC7dx8SGnvBapFI2VOV88JfFzpiSQAHc%2BuH5cEIhtqnHSxB3CzMENnTzB8ueEKLcmIlfUaacm7o082hkERviugS7zduz4W%2Fxbwhzw82jJ23pfkoa6zTEkkwnujHxNKgnyb4KEq790Mxqe3sZTZ3SL61570iOr0X6%2FS7xNCwe1pVRJjbySu6tnqTFNy8BM2NvlXk4Lrnb1monm5z18WXSQy0%2FwVqFo05gfFUcdVzEXTEsgj%2FfDdF0qQBpmpK%2ByUGGdngH2yO0Q7XWlysnVzo6%2FuaVeOpRencaJoYThMhclPnnXbtmMpdCZl3KssrBT4LkqBsXQZduBwC8DhJbKvj%2B9sAfdMBXlmr%2FQXEhePxwgrxesBtCOJOeB081HiMn%2BhOoJJuJkTf1gbUYNp4x2kBd1IgFxPAY4L12uiVWcNSxZm38oAdh6AKSr5j9sBEIWQgbCVww0cz%2FvgY6pgHaxqtw42EsP%2F2cGVysh4MPlEpvfumJiPTFHpJvwtl%2BO%2B6kweU6qgLLibFeoLtxTEn9K9cQXYgP5ycxGTpvZao870UEBHjUdUOVxQFGzkOMChUtNmXczWG0USvejZaXll0Ea1YG5j7LwM8mzv6gBD3vAXSx%2B16UjXP%2BWWSQ5WrJmKW3rtyjAb7k60g0pFAFClfqIhaNmzVNKzAfaadFLGhlzTYbyY9F&X-Amz-Signature=077bb206948864f9ba627147e64a0ccbc031b6b9961dd27a04f08638efb75b45&X-Amz-SignedHeaders=host&x-id=GetObject)
