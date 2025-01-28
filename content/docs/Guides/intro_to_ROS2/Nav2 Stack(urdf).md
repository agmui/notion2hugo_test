---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOV3F3TA%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXMqkiJJTTOkFvSefnLaWbnViFhuTnpFsg5x3ZQY78bAiBPhHmAhnJjqo8XlgxP7LaNLpzJiD4ZAzD18sjvhw7tKCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCor3wfVtmvRNmKxUKtwDVwwWOwwF%2FSwjE%2F3Wlqpe7sBcE%2Bk9zZPzIzoWuTRNH1coxUGsoROaML8%2FgKeakbb7L2BxFsUqywQ%2F8YZLZo%2FlXvWpsVRus4c19cem5NPmJ5H4WqzYMVKMtokKMwLdxBvSW%2BMHvZxbfB4TvhRM9CwzSo0s%2BvmCnLPKp3maQ%2B48%2BLilmj89zyqp8fY%2FVT1KOIvJAb83%2BO%2BkraW1X5klDqADniY2zyD4nv4IjllfnBYThwd2ILxlOOJWJvF5wPHK%2FDp4MIX%2F3BcgYxSL1ABdd7oxMoDKeXdfTnzTrbzIuURHBpuQglQGcfcdpDzTXUcixs0Gyg39s6QxnKsWeMwx5Amr%2BtTFVjHSyh4W5ZCKzTyp5ETp03DLg93MXJOjS50goxYTTALtYLeme76hIqkHyvYaS0hyjZo%2F2xzxpjp9YDZErmWYPPW3ZppzhnBQ7Xcahi76VaZ57hVBhRyoW3KQPTqcai7tLsLG4YUUbO%2B5riRVcPDPUr2R%2FvXTS4wKCyzrhBq4MTTA%2Bb5mvBR4XER5Iyj4qH41Py6gGUXzYoZYcH%2FMROTLO1QppA4ozmSUF%2F2fZtf1dMylCXaPOAvgtNl%2F7GFnDy%2FPibD2YJDiycXuLex4tQYEdchfPhpXXa63qXowyJXlvAY6pgF4ooVcrZy6x8rgn2VyRGd%2FECT6m%2BCTe7KJ1PHnKErtzg7YQxN1Naxou6a9ogX3Bl2Qv4mCmychgxNnPDzdG7sR2OAsGl02ivu1xoUiO9qhkxrE8HltQeTiUITJhTwCQvXggUiZ5pGrNlDsABYKD6lnf2LD6G6m9iI1rl8LMOubkGOOuS6R5aJs9cxRM5mnWDrFMhLj4nYp2mbcYznOeRKwtvN9Hmoj&X-Amz-Signature=ebd4fa75b0813058f3e5dff750e1a928c69e1799aa413721146da1e8b066a9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOV3F3TA%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXMqkiJJTTOkFvSefnLaWbnViFhuTnpFsg5x3ZQY78bAiBPhHmAhnJjqo8XlgxP7LaNLpzJiD4ZAzD18sjvhw7tKCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCor3wfVtmvRNmKxUKtwDVwwWOwwF%2FSwjE%2F3Wlqpe7sBcE%2Bk9zZPzIzoWuTRNH1coxUGsoROaML8%2FgKeakbb7L2BxFsUqywQ%2F8YZLZo%2FlXvWpsVRus4c19cem5NPmJ5H4WqzYMVKMtokKMwLdxBvSW%2BMHvZxbfB4TvhRM9CwzSo0s%2BvmCnLPKp3maQ%2B48%2BLilmj89zyqp8fY%2FVT1KOIvJAb83%2BO%2BkraW1X5klDqADniY2zyD4nv4IjllfnBYThwd2ILxlOOJWJvF5wPHK%2FDp4MIX%2F3BcgYxSL1ABdd7oxMoDKeXdfTnzTrbzIuURHBpuQglQGcfcdpDzTXUcixs0Gyg39s6QxnKsWeMwx5Amr%2BtTFVjHSyh4W5ZCKzTyp5ETp03DLg93MXJOjS50goxYTTALtYLeme76hIqkHyvYaS0hyjZo%2F2xzxpjp9YDZErmWYPPW3ZppzhnBQ7Xcahi76VaZ57hVBhRyoW3KQPTqcai7tLsLG4YUUbO%2B5riRVcPDPUr2R%2FvXTS4wKCyzrhBq4MTTA%2Bb5mvBR4XER5Iyj4qH41Py6gGUXzYoZYcH%2FMROTLO1QppA4ozmSUF%2F2fZtf1dMylCXaPOAvgtNl%2F7GFnDy%2FPibD2YJDiycXuLex4tQYEdchfPhpXXa63qXowyJXlvAY6pgF4ooVcrZy6x8rgn2VyRGd%2FECT6m%2BCTe7KJ1PHnKErtzg7YQxN1Naxou6a9ogX3Bl2Qv4mCmychgxNnPDzdG7sR2OAsGl02ivu1xoUiO9qhkxrE8HltQeTiUITJhTwCQvXggUiZ5pGrNlDsABYKD6lnf2LD6G6m9iI1rl8LMOubkGOOuS6R5aJs9cxRM5mnWDrFMhLj4nYp2mbcYznOeRKwtvN9Hmoj&X-Amz-Signature=af66b5befc9c684164d662b0dbb1683c7955e1fc07fa6298ecae6cf05474c0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOV3F3TA%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXMqkiJJTTOkFvSefnLaWbnViFhuTnpFsg5x3ZQY78bAiBPhHmAhnJjqo8XlgxP7LaNLpzJiD4ZAzD18sjvhw7tKCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCor3wfVtmvRNmKxUKtwDVwwWOwwF%2FSwjE%2F3Wlqpe7sBcE%2Bk9zZPzIzoWuTRNH1coxUGsoROaML8%2FgKeakbb7L2BxFsUqywQ%2F8YZLZo%2FlXvWpsVRus4c19cem5NPmJ5H4WqzYMVKMtokKMwLdxBvSW%2BMHvZxbfB4TvhRM9CwzSo0s%2BvmCnLPKp3maQ%2B48%2BLilmj89zyqp8fY%2FVT1KOIvJAb83%2BO%2BkraW1X5klDqADniY2zyD4nv4IjllfnBYThwd2ILxlOOJWJvF5wPHK%2FDp4MIX%2F3BcgYxSL1ABdd7oxMoDKeXdfTnzTrbzIuURHBpuQglQGcfcdpDzTXUcixs0Gyg39s6QxnKsWeMwx5Amr%2BtTFVjHSyh4W5ZCKzTyp5ETp03DLg93MXJOjS50goxYTTALtYLeme76hIqkHyvYaS0hyjZo%2F2xzxpjp9YDZErmWYPPW3ZppzhnBQ7Xcahi76VaZ57hVBhRyoW3KQPTqcai7tLsLG4YUUbO%2B5riRVcPDPUr2R%2FvXTS4wKCyzrhBq4MTTA%2Bb5mvBR4XER5Iyj4qH41Py6gGUXzYoZYcH%2FMROTLO1QppA4ozmSUF%2F2fZtf1dMylCXaPOAvgtNl%2F7GFnDy%2FPibD2YJDiycXuLex4tQYEdchfPhpXXa63qXowyJXlvAY6pgF4ooVcrZy6x8rgn2VyRGd%2FECT6m%2BCTe7KJ1PHnKErtzg7YQxN1Naxou6a9ogX3Bl2Qv4mCmychgxNnPDzdG7sR2OAsGl02ivu1xoUiO9qhkxrE8HltQeTiUITJhTwCQvXggUiZ5pGrNlDsABYKD6lnf2LD6G6m9iI1rl8LMOubkGOOuS6R5aJs9cxRM5mnWDrFMhLj4nYp2mbcYznOeRKwtvN9Hmoj&X-Amz-Signature=662b5bc0f1696683b51ec09f3c3772074ae850344dd93604c30af09dde43aad3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOV3F3TA%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXMqkiJJTTOkFvSefnLaWbnViFhuTnpFsg5x3ZQY78bAiBPhHmAhnJjqo8XlgxP7LaNLpzJiD4ZAzD18sjvhw7tKCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCor3wfVtmvRNmKxUKtwDVwwWOwwF%2FSwjE%2F3Wlqpe7sBcE%2Bk9zZPzIzoWuTRNH1coxUGsoROaML8%2FgKeakbb7L2BxFsUqywQ%2F8YZLZo%2FlXvWpsVRus4c19cem5NPmJ5H4WqzYMVKMtokKMwLdxBvSW%2BMHvZxbfB4TvhRM9CwzSo0s%2BvmCnLPKp3maQ%2B48%2BLilmj89zyqp8fY%2FVT1KOIvJAb83%2BO%2BkraW1X5klDqADniY2zyD4nv4IjllfnBYThwd2ILxlOOJWJvF5wPHK%2FDp4MIX%2F3BcgYxSL1ABdd7oxMoDKeXdfTnzTrbzIuURHBpuQglQGcfcdpDzTXUcixs0Gyg39s6QxnKsWeMwx5Amr%2BtTFVjHSyh4W5ZCKzTyp5ETp03DLg93MXJOjS50goxYTTALtYLeme76hIqkHyvYaS0hyjZo%2F2xzxpjp9YDZErmWYPPW3ZppzhnBQ7Xcahi76VaZ57hVBhRyoW3KQPTqcai7tLsLG4YUUbO%2B5riRVcPDPUr2R%2FvXTS4wKCyzrhBq4MTTA%2Bb5mvBR4XER5Iyj4qH41Py6gGUXzYoZYcH%2FMROTLO1QppA4ozmSUF%2F2fZtf1dMylCXaPOAvgtNl%2F7GFnDy%2FPibD2YJDiycXuLex4tQYEdchfPhpXXa63qXowyJXlvAY6pgF4ooVcrZy6x8rgn2VyRGd%2FECT6m%2BCTe7KJ1PHnKErtzg7YQxN1Naxou6a9ogX3Bl2Qv4mCmychgxNnPDzdG7sR2OAsGl02ivu1xoUiO9qhkxrE8HltQeTiUITJhTwCQvXggUiZ5pGrNlDsABYKD6lnf2LD6G6m9iI1rl8LMOubkGOOuS6R5aJs9cxRM5mnWDrFMhLj4nYp2mbcYznOeRKwtvN9Hmoj&X-Amz-Signature=399cf50553c957ce0e9c64cddfedb2f29959cf0a384942f8fcfd5717ea935218&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOV3F3TA%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXMqkiJJTTOkFvSefnLaWbnViFhuTnpFsg5x3ZQY78bAiBPhHmAhnJjqo8XlgxP7LaNLpzJiD4ZAzD18sjvhw7tKCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCor3wfVtmvRNmKxUKtwDVwwWOwwF%2FSwjE%2F3Wlqpe7sBcE%2Bk9zZPzIzoWuTRNH1coxUGsoROaML8%2FgKeakbb7L2BxFsUqywQ%2F8YZLZo%2FlXvWpsVRus4c19cem5NPmJ5H4WqzYMVKMtokKMwLdxBvSW%2BMHvZxbfB4TvhRM9CwzSo0s%2BvmCnLPKp3maQ%2B48%2BLilmj89zyqp8fY%2FVT1KOIvJAb83%2BO%2BkraW1X5klDqADniY2zyD4nv4IjllfnBYThwd2ILxlOOJWJvF5wPHK%2FDp4MIX%2F3BcgYxSL1ABdd7oxMoDKeXdfTnzTrbzIuURHBpuQglQGcfcdpDzTXUcixs0Gyg39s6QxnKsWeMwx5Amr%2BtTFVjHSyh4W5ZCKzTyp5ETp03DLg93MXJOjS50goxYTTALtYLeme76hIqkHyvYaS0hyjZo%2F2xzxpjp9YDZErmWYPPW3ZppzhnBQ7Xcahi76VaZ57hVBhRyoW3KQPTqcai7tLsLG4YUUbO%2B5riRVcPDPUr2R%2FvXTS4wKCyzrhBq4MTTA%2Bb5mvBR4XER5Iyj4qH41Py6gGUXzYoZYcH%2FMROTLO1QppA4ozmSUF%2F2fZtf1dMylCXaPOAvgtNl%2F7GFnDy%2FPibD2YJDiycXuLex4tQYEdchfPhpXXa63qXowyJXlvAY6pgF4ooVcrZy6x8rgn2VyRGd%2FECT6m%2BCTe7KJ1PHnKErtzg7YQxN1Naxou6a9ogX3Bl2Qv4mCmychgxNnPDzdG7sR2OAsGl02ivu1xoUiO9qhkxrE8HltQeTiUITJhTwCQvXggUiZ5pGrNlDsABYKD6lnf2LD6G6m9iI1rl8LMOubkGOOuS6R5aJs9cxRM5mnWDrFMhLj4nYp2mbcYznOeRKwtvN9Hmoj&X-Amz-Signature=275d3198d917696cad06ee129b518269af83c48f81da64be6b0d225b12f5a7c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOV3F3TA%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXMqkiJJTTOkFvSefnLaWbnViFhuTnpFsg5x3ZQY78bAiBPhHmAhnJjqo8XlgxP7LaNLpzJiD4ZAzD18sjvhw7tKCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCor3wfVtmvRNmKxUKtwDVwwWOwwF%2FSwjE%2F3Wlqpe7sBcE%2Bk9zZPzIzoWuTRNH1coxUGsoROaML8%2FgKeakbb7L2BxFsUqywQ%2F8YZLZo%2FlXvWpsVRus4c19cem5NPmJ5H4WqzYMVKMtokKMwLdxBvSW%2BMHvZxbfB4TvhRM9CwzSo0s%2BvmCnLPKp3maQ%2B48%2BLilmj89zyqp8fY%2FVT1KOIvJAb83%2BO%2BkraW1X5klDqADniY2zyD4nv4IjllfnBYThwd2ILxlOOJWJvF5wPHK%2FDp4MIX%2F3BcgYxSL1ABdd7oxMoDKeXdfTnzTrbzIuURHBpuQglQGcfcdpDzTXUcixs0Gyg39s6QxnKsWeMwx5Amr%2BtTFVjHSyh4W5ZCKzTyp5ETp03DLg93MXJOjS50goxYTTALtYLeme76hIqkHyvYaS0hyjZo%2F2xzxpjp9YDZErmWYPPW3ZppzhnBQ7Xcahi76VaZ57hVBhRyoW3KQPTqcai7tLsLG4YUUbO%2B5riRVcPDPUr2R%2FvXTS4wKCyzrhBq4MTTA%2Bb5mvBR4XER5Iyj4qH41Py6gGUXzYoZYcH%2FMROTLO1QppA4ozmSUF%2F2fZtf1dMylCXaPOAvgtNl%2F7GFnDy%2FPibD2YJDiycXuLex4tQYEdchfPhpXXa63qXowyJXlvAY6pgF4ooVcrZy6x8rgn2VyRGd%2FECT6m%2BCTe7KJ1PHnKErtzg7YQxN1Naxou6a9ogX3Bl2Qv4mCmychgxNnPDzdG7sR2OAsGl02ivu1xoUiO9qhkxrE8HltQeTiUITJhTwCQvXggUiZ5pGrNlDsABYKD6lnf2LD6G6m9iI1rl8LMOubkGOOuS6R5aJs9cxRM5mnWDrFMhLj4nYp2mbcYznOeRKwtvN9Hmoj&X-Amz-Signature=c0ab9d61399a3a9247730db3a822b7ac3672443e1f674fc8943dbc628ac9dc3b&X-Amz-SignedHeaders=host&x-id=GetObject)
