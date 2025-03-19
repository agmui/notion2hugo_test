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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNT3SY2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJoRRmj%2BCMRdzE7vcy50WjtXv0UpLjdj74HBE5s6pU4wIhALl6rI29eWozllXbUPdQFg3QMxBJeAiQLBpbEcdESw1mKv8DCG8QABoMNjM3NDIzMTgzODA1IgzQ4KE8PPTuGwwEfpAq3AMtqRKT4FkXTrtjkb37DeNhes6At43hEd%2BKeqag0gWE6x0pHzoTOFqDUp0iUs6%2B0FUMleQecLoHiOLUXYiciMAIw9MTJ7oZ28%2B8sf1vqlmqDq%2FqkJK%2Bd2a1I4sRmR7PD%2Bt2l%2FyXd9Lq7RYhPiB7IYGrQ5ZOXYcsX9T1BygBJfxlWZAlgauDxxwDNcX1APZgmnL8wJtFZP0GbBOa6V1CHRDCAykHKvrTPX%2FyYlDiOEKe7nwC7UYm7sdq994OTqouQ7pcGRVSWSY6PejiPK%2F481nldbfn%2F3x4sV4DVEFLx7CIC%2BR92yha%2BbyCNCE%2FgYhsHWoWds%2F7cEeXRlnP%2Fw4IxpPjgzwvimOWr2mXfnZu6dzloEAjqSZI3qOS60vt6z44GMMiZVo12NKKdpx0R05BbLt4jocor3mmfui91Jj9AJ5bjzWEtIbS8WI9aDd7lOmZHgu66h6WKlmmamz2SYTZE16SEQIaMtueQPa6kGAQj51NfQs8Bdlgf8Us1cuOc4v%2Fx9TB2Rgwdyo96NJHesZ7CHVCCox%2BLQrpLRB%2FhUpJkAvrOVtmXGi%2BM%2BIX%2BFssXki7GynR9gjZAVBJrlbnMRBtjlCILDXvIzfIBlvIdFX%2BqaTePDiIv2hDGq%2F1XPYF3zCRxOm%2BBjqkAUtrkdGC9zboP5ez91MDuKjLCWgsJKs96LpWSbqtfUi%2Fm9zts3j58dkcG%2F1KXMqCnXXbIHL2B7GyQxaBm2ts87jqX06vqSL91YkF0BiPwyMXqauuEIY3x5nLc5kt6Q1Zr%2FEkbpXUJCP%2BP5j9XsVSPholFON8bDtRHa24JkgqEC4UPavf8ww%2FG%2FHpY%2Bb%2F3JL4aNsDkLMAGbpbEN%2F%2B32Llfbevr%2FKg&X-Amz-Signature=1f9d7db1db62328de51cf3a87a5174ef920048cd08cd37dc81c921b99d123fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNT3SY2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJoRRmj%2BCMRdzE7vcy50WjtXv0UpLjdj74HBE5s6pU4wIhALl6rI29eWozllXbUPdQFg3QMxBJeAiQLBpbEcdESw1mKv8DCG8QABoMNjM3NDIzMTgzODA1IgzQ4KE8PPTuGwwEfpAq3AMtqRKT4FkXTrtjkb37DeNhes6At43hEd%2BKeqag0gWE6x0pHzoTOFqDUp0iUs6%2B0FUMleQecLoHiOLUXYiciMAIw9MTJ7oZ28%2B8sf1vqlmqDq%2FqkJK%2Bd2a1I4sRmR7PD%2Bt2l%2FyXd9Lq7RYhPiB7IYGrQ5ZOXYcsX9T1BygBJfxlWZAlgauDxxwDNcX1APZgmnL8wJtFZP0GbBOa6V1CHRDCAykHKvrTPX%2FyYlDiOEKe7nwC7UYm7sdq994OTqouQ7pcGRVSWSY6PejiPK%2F481nldbfn%2F3x4sV4DVEFLx7CIC%2BR92yha%2BbyCNCE%2FgYhsHWoWds%2F7cEeXRlnP%2Fw4IxpPjgzwvimOWr2mXfnZu6dzloEAjqSZI3qOS60vt6z44GMMiZVo12NKKdpx0R05BbLt4jocor3mmfui91Jj9AJ5bjzWEtIbS8WI9aDd7lOmZHgu66h6WKlmmamz2SYTZE16SEQIaMtueQPa6kGAQj51NfQs8Bdlgf8Us1cuOc4v%2Fx9TB2Rgwdyo96NJHesZ7CHVCCox%2BLQrpLRB%2FhUpJkAvrOVtmXGi%2BM%2BIX%2BFssXki7GynR9gjZAVBJrlbnMRBtjlCILDXvIzfIBlvIdFX%2BqaTePDiIv2hDGq%2F1XPYF3zCRxOm%2BBjqkAUtrkdGC9zboP5ez91MDuKjLCWgsJKs96LpWSbqtfUi%2Fm9zts3j58dkcG%2F1KXMqCnXXbIHL2B7GyQxaBm2ts87jqX06vqSL91YkF0BiPwyMXqauuEIY3x5nLc5kt6Q1Zr%2FEkbpXUJCP%2BP5j9XsVSPholFON8bDtRHa24JkgqEC4UPavf8ww%2FG%2FHpY%2Bb%2F3JL4aNsDkLMAGbpbEN%2F%2B32Llfbevr%2FKg&X-Amz-Signature=bdc04e378856755aab8d2ad449f1e0ba2c2872c28a5615190b85513cf5a7f7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNT3SY2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJoRRmj%2BCMRdzE7vcy50WjtXv0UpLjdj74HBE5s6pU4wIhALl6rI29eWozllXbUPdQFg3QMxBJeAiQLBpbEcdESw1mKv8DCG8QABoMNjM3NDIzMTgzODA1IgzQ4KE8PPTuGwwEfpAq3AMtqRKT4FkXTrtjkb37DeNhes6At43hEd%2BKeqag0gWE6x0pHzoTOFqDUp0iUs6%2B0FUMleQecLoHiOLUXYiciMAIw9MTJ7oZ28%2B8sf1vqlmqDq%2FqkJK%2Bd2a1I4sRmR7PD%2Bt2l%2FyXd9Lq7RYhPiB7IYGrQ5ZOXYcsX9T1BygBJfxlWZAlgauDxxwDNcX1APZgmnL8wJtFZP0GbBOa6V1CHRDCAykHKvrTPX%2FyYlDiOEKe7nwC7UYm7sdq994OTqouQ7pcGRVSWSY6PejiPK%2F481nldbfn%2F3x4sV4DVEFLx7CIC%2BR92yha%2BbyCNCE%2FgYhsHWoWds%2F7cEeXRlnP%2Fw4IxpPjgzwvimOWr2mXfnZu6dzloEAjqSZI3qOS60vt6z44GMMiZVo12NKKdpx0R05BbLt4jocor3mmfui91Jj9AJ5bjzWEtIbS8WI9aDd7lOmZHgu66h6WKlmmamz2SYTZE16SEQIaMtueQPa6kGAQj51NfQs8Bdlgf8Us1cuOc4v%2Fx9TB2Rgwdyo96NJHesZ7CHVCCox%2BLQrpLRB%2FhUpJkAvrOVtmXGi%2BM%2BIX%2BFssXki7GynR9gjZAVBJrlbnMRBtjlCILDXvIzfIBlvIdFX%2BqaTePDiIv2hDGq%2F1XPYF3zCRxOm%2BBjqkAUtrkdGC9zboP5ez91MDuKjLCWgsJKs96LpWSbqtfUi%2Fm9zts3j58dkcG%2F1KXMqCnXXbIHL2B7GyQxaBm2ts87jqX06vqSL91YkF0BiPwyMXqauuEIY3x5nLc5kt6Q1Zr%2FEkbpXUJCP%2BP5j9XsVSPholFON8bDtRHa24JkgqEC4UPavf8ww%2FG%2FHpY%2Bb%2F3JL4aNsDkLMAGbpbEN%2F%2B32Llfbevr%2FKg&X-Amz-Signature=c5a63c9e6df8a805436bfc745c10c65b608826f4b6fd45a3057af16002af2034&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNT3SY2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJoRRmj%2BCMRdzE7vcy50WjtXv0UpLjdj74HBE5s6pU4wIhALl6rI29eWozllXbUPdQFg3QMxBJeAiQLBpbEcdESw1mKv8DCG8QABoMNjM3NDIzMTgzODA1IgzQ4KE8PPTuGwwEfpAq3AMtqRKT4FkXTrtjkb37DeNhes6At43hEd%2BKeqag0gWE6x0pHzoTOFqDUp0iUs6%2B0FUMleQecLoHiOLUXYiciMAIw9MTJ7oZ28%2B8sf1vqlmqDq%2FqkJK%2Bd2a1I4sRmR7PD%2Bt2l%2FyXd9Lq7RYhPiB7IYGrQ5ZOXYcsX9T1BygBJfxlWZAlgauDxxwDNcX1APZgmnL8wJtFZP0GbBOa6V1CHRDCAykHKvrTPX%2FyYlDiOEKe7nwC7UYm7sdq994OTqouQ7pcGRVSWSY6PejiPK%2F481nldbfn%2F3x4sV4DVEFLx7CIC%2BR92yha%2BbyCNCE%2FgYhsHWoWds%2F7cEeXRlnP%2Fw4IxpPjgzwvimOWr2mXfnZu6dzloEAjqSZI3qOS60vt6z44GMMiZVo12NKKdpx0R05BbLt4jocor3mmfui91Jj9AJ5bjzWEtIbS8WI9aDd7lOmZHgu66h6WKlmmamz2SYTZE16SEQIaMtueQPa6kGAQj51NfQs8Bdlgf8Us1cuOc4v%2Fx9TB2Rgwdyo96NJHesZ7CHVCCox%2BLQrpLRB%2FhUpJkAvrOVtmXGi%2BM%2BIX%2BFssXki7GynR9gjZAVBJrlbnMRBtjlCILDXvIzfIBlvIdFX%2BqaTePDiIv2hDGq%2F1XPYF3zCRxOm%2BBjqkAUtrkdGC9zboP5ez91MDuKjLCWgsJKs96LpWSbqtfUi%2Fm9zts3j58dkcG%2F1KXMqCnXXbIHL2B7GyQxaBm2ts87jqX06vqSL91YkF0BiPwyMXqauuEIY3x5nLc5kt6Q1Zr%2FEkbpXUJCP%2BP5j9XsVSPholFON8bDtRHa24JkgqEC4UPavf8ww%2FG%2FHpY%2Bb%2F3JL4aNsDkLMAGbpbEN%2F%2B32Llfbevr%2FKg&X-Amz-Signature=cbdcae0558419dd718027e730d6d9847da3b17ceb9dce5158e181ad0e7565ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNT3SY2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJoRRmj%2BCMRdzE7vcy50WjtXv0UpLjdj74HBE5s6pU4wIhALl6rI29eWozllXbUPdQFg3QMxBJeAiQLBpbEcdESw1mKv8DCG8QABoMNjM3NDIzMTgzODA1IgzQ4KE8PPTuGwwEfpAq3AMtqRKT4FkXTrtjkb37DeNhes6At43hEd%2BKeqag0gWE6x0pHzoTOFqDUp0iUs6%2B0FUMleQecLoHiOLUXYiciMAIw9MTJ7oZ28%2B8sf1vqlmqDq%2FqkJK%2Bd2a1I4sRmR7PD%2Bt2l%2FyXd9Lq7RYhPiB7IYGrQ5ZOXYcsX9T1BygBJfxlWZAlgauDxxwDNcX1APZgmnL8wJtFZP0GbBOa6V1CHRDCAykHKvrTPX%2FyYlDiOEKe7nwC7UYm7sdq994OTqouQ7pcGRVSWSY6PejiPK%2F481nldbfn%2F3x4sV4DVEFLx7CIC%2BR92yha%2BbyCNCE%2FgYhsHWoWds%2F7cEeXRlnP%2Fw4IxpPjgzwvimOWr2mXfnZu6dzloEAjqSZI3qOS60vt6z44GMMiZVo12NKKdpx0R05BbLt4jocor3mmfui91Jj9AJ5bjzWEtIbS8WI9aDd7lOmZHgu66h6WKlmmamz2SYTZE16SEQIaMtueQPa6kGAQj51NfQs8Bdlgf8Us1cuOc4v%2Fx9TB2Rgwdyo96NJHesZ7CHVCCox%2BLQrpLRB%2FhUpJkAvrOVtmXGi%2BM%2BIX%2BFssXki7GynR9gjZAVBJrlbnMRBtjlCILDXvIzfIBlvIdFX%2BqaTePDiIv2hDGq%2F1XPYF3zCRxOm%2BBjqkAUtrkdGC9zboP5ez91MDuKjLCWgsJKs96LpWSbqtfUi%2Fm9zts3j58dkcG%2F1KXMqCnXXbIHL2B7GyQxaBm2ts87jqX06vqSL91YkF0BiPwyMXqauuEIY3x5nLc5kt6Q1Zr%2FEkbpXUJCP%2BP5j9XsVSPholFON8bDtRHa24JkgqEC4UPavf8ww%2FG%2FHpY%2Bb%2F3JL4aNsDkLMAGbpbEN%2F%2B32Llfbevr%2FKg&X-Amz-Signature=f90941faff48e7caa77601a19123a89f54203821c31fa346c2966a4a84044f44&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNT3SY2K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCJoRRmj%2BCMRdzE7vcy50WjtXv0UpLjdj74HBE5s6pU4wIhALl6rI29eWozllXbUPdQFg3QMxBJeAiQLBpbEcdESw1mKv8DCG8QABoMNjM3NDIzMTgzODA1IgzQ4KE8PPTuGwwEfpAq3AMtqRKT4FkXTrtjkb37DeNhes6At43hEd%2BKeqag0gWE6x0pHzoTOFqDUp0iUs6%2B0FUMleQecLoHiOLUXYiciMAIw9MTJ7oZ28%2B8sf1vqlmqDq%2FqkJK%2Bd2a1I4sRmR7PD%2Bt2l%2FyXd9Lq7RYhPiB7IYGrQ5ZOXYcsX9T1BygBJfxlWZAlgauDxxwDNcX1APZgmnL8wJtFZP0GbBOa6V1CHRDCAykHKvrTPX%2FyYlDiOEKe7nwC7UYm7sdq994OTqouQ7pcGRVSWSY6PejiPK%2F481nldbfn%2F3x4sV4DVEFLx7CIC%2BR92yha%2BbyCNCE%2FgYhsHWoWds%2F7cEeXRlnP%2Fw4IxpPjgzwvimOWr2mXfnZu6dzloEAjqSZI3qOS60vt6z44GMMiZVo12NKKdpx0R05BbLt4jocor3mmfui91Jj9AJ5bjzWEtIbS8WI9aDd7lOmZHgu66h6WKlmmamz2SYTZE16SEQIaMtueQPa6kGAQj51NfQs8Bdlgf8Us1cuOc4v%2Fx9TB2Rgwdyo96NJHesZ7CHVCCox%2BLQrpLRB%2FhUpJkAvrOVtmXGi%2BM%2BIX%2BFssXki7GynR9gjZAVBJrlbnMRBtjlCILDXvIzfIBlvIdFX%2BqaTePDiIv2hDGq%2F1XPYF3zCRxOm%2BBjqkAUtrkdGC9zboP5ez91MDuKjLCWgsJKs96LpWSbqtfUi%2Fm9zts3j58dkcG%2F1KXMqCnXXbIHL2B7GyQxaBm2ts87jqX06vqSL91YkF0BiPwyMXqauuEIY3x5nLc5kt6Q1Zr%2FEkbpXUJCP%2BP5j9XsVSPholFON8bDtRHa24JkgqEC4UPavf8ww%2FG%2FHpY%2Bb%2F3JL4aNsDkLMAGbpbEN%2F%2B32Llfbevr%2FKg&X-Amz-Signature=8373f316bed2ee8cc77d9bc077a716b78a3d7572d1cff04ed2d9839f92b38a8a&X-Amz-SignedHeaders=host&x-id=GetObject)
