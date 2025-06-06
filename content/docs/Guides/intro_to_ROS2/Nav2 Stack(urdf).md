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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QEXNN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFLl8bdS1MuQ2T8Rq6nUBmQvlU2ZoViN7XwFKB94LBZAiEA7jvHERrfhrqTWYH8SPI4Xz%2FCCfL1tp%2BL434VJ5wZQBEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFPS7J35gUFPx0xHeSrcA2raeLSjJFOcDUPqSDAlAFSSfivwXaQHK7vCmPWc6P%2BEoAkkpvCygiaSkUudcZE2bLoFbNtbH%2Bb512%2B7pW27y6PF2GCDcSQaBxe7jfpVfMGZytcrPeOQ1bCaQ0fQxEi68URDJDhaWUsQF%2FN55ZAqzyrgUjmKOwF99c0FtZ3CWFOYV3za4s8XJJlRMIvGKpkzQpex5SsZ847I6UJ8vnG9u76DJATDnUVYT8ROxO0M38iE%2Fc%2Br54vyerf0liKu%2F7nizkvSEnsU8ZyXWuqMZnL6L%2FNkTgmdaxlp6vCBdcCOMzQ%2F%2F%2Bo8v%2B%2B6KKQ5P%2Fn5mqPlj0fGC2Mjj%2FC7KBrUVOmEwooN34KBYnSUea%2BIGft%2FXk7cRufxfhQdYt4ee2EPzBnogaWSbGE2%2B5yqPcU2pqtdGHW5BOB%2Fg9bBjzY9%2FxScnkmDBRTqIslPa9AvPQTEaVvf78x3wt36aPPFHmw63oNCDCkzEXjlowDo34bvnJuiC%2Bnv1qOrZ7I53RZR%2FFVpN5jmzCwQarIE8jWdH4ttgK%2FUxk8NLRRp3IRp8nKznPLNvLg0SaFhVYoTYm8AcgB9EqKA2WEju%2F8AbLfkS2uLlXwMCAPmetgGa%2FlAmqJZLg8RRGo0QVLn7UXRzMU9%2BL35MNehjMIGOqUBszKG4goz6BcwR6yF02xQvtL5aTYeUNxaJKLEnRrXCyNlbB%2FnordJXWcIcu03Z87%2FMs%2BXK8mnTdHgnOX3QF%2FLDYiyqGW1aOS%2BWgqiEPfWj70QmfCqhN2GS7iMvKgCXlFyKsOFKR4rmU1p0gkMqi0BMLebsIfreilbTzlsuKGw1tM6WmDEFbjDWLGLIc9j9GwwuXWjfj8vpCU81pUTNO7dWY65axCt&X-Amz-Signature=336bc679126312ec9e03ae9eb807c7a46df8d2e2d0e7d9234332602c94df46f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QEXNN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFLl8bdS1MuQ2T8Rq6nUBmQvlU2ZoViN7XwFKB94LBZAiEA7jvHERrfhrqTWYH8SPI4Xz%2FCCfL1tp%2BL434VJ5wZQBEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFPS7J35gUFPx0xHeSrcA2raeLSjJFOcDUPqSDAlAFSSfivwXaQHK7vCmPWc6P%2BEoAkkpvCygiaSkUudcZE2bLoFbNtbH%2Bb512%2B7pW27y6PF2GCDcSQaBxe7jfpVfMGZytcrPeOQ1bCaQ0fQxEi68URDJDhaWUsQF%2FN55ZAqzyrgUjmKOwF99c0FtZ3CWFOYV3za4s8XJJlRMIvGKpkzQpex5SsZ847I6UJ8vnG9u76DJATDnUVYT8ROxO0M38iE%2Fc%2Br54vyerf0liKu%2F7nizkvSEnsU8ZyXWuqMZnL6L%2FNkTgmdaxlp6vCBdcCOMzQ%2F%2F%2Bo8v%2B%2B6KKQ5P%2Fn5mqPlj0fGC2Mjj%2FC7KBrUVOmEwooN34KBYnSUea%2BIGft%2FXk7cRufxfhQdYt4ee2EPzBnogaWSbGE2%2B5yqPcU2pqtdGHW5BOB%2Fg9bBjzY9%2FxScnkmDBRTqIslPa9AvPQTEaVvf78x3wt36aPPFHmw63oNCDCkzEXjlowDo34bvnJuiC%2Bnv1qOrZ7I53RZR%2FFVpN5jmzCwQarIE8jWdH4ttgK%2FUxk8NLRRp3IRp8nKznPLNvLg0SaFhVYoTYm8AcgB9EqKA2WEju%2F8AbLfkS2uLlXwMCAPmetgGa%2FlAmqJZLg8RRGo0QVLn7UXRzMU9%2BL35MNehjMIGOqUBszKG4goz6BcwR6yF02xQvtL5aTYeUNxaJKLEnRrXCyNlbB%2FnordJXWcIcu03Z87%2FMs%2BXK8mnTdHgnOX3QF%2FLDYiyqGW1aOS%2BWgqiEPfWj70QmfCqhN2GS7iMvKgCXlFyKsOFKR4rmU1p0gkMqi0BMLebsIfreilbTzlsuKGw1tM6WmDEFbjDWLGLIc9j9GwwuXWjfj8vpCU81pUTNO7dWY65axCt&X-Amz-Signature=974c05822bf17d136974ad91e34c433cb86edebd2f54e35e4f7893f5a5e32413&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QEXNN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFLl8bdS1MuQ2T8Rq6nUBmQvlU2ZoViN7XwFKB94LBZAiEA7jvHERrfhrqTWYH8SPI4Xz%2FCCfL1tp%2BL434VJ5wZQBEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFPS7J35gUFPx0xHeSrcA2raeLSjJFOcDUPqSDAlAFSSfivwXaQHK7vCmPWc6P%2BEoAkkpvCygiaSkUudcZE2bLoFbNtbH%2Bb512%2B7pW27y6PF2GCDcSQaBxe7jfpVfMGZytcrPeOQ1bCaQ0fQxEi68URDJDhaWUsQF%2FN55ZAqzyrgUjmKOwF99c0FtZ3CWFOYV3za4s8XJJlRMIvGKpkzQpex5SsZ847I6UJ8vnG9u76DJATDnUVYT8ROxO0M38iE%2Fc%2Br54vyerf0liKu%2F7nizkvSEnsU8ZyXWuqMZnL6L%2FNkTgmdaxlp6vCBdcCOMzQ%2F%2F%2Bo8v%2B%2B6KKQ5P%2Fn5mqPlj0fGC2Mjj%2FC7KBrUVOmEwooN34KBYnSUea%2BIGft%2FXk7cRufxfhQdYt4ee2EPzBnogaWSbGE2%2B5yqPcU2pqtdGHW5BOB%2Fg9bBjzY9%2FxScnkmDBRTqIslPa9AvPQTEaVvf78x3wt36aPPFHmw63oNCDCkzEXjlowDo34bvnJuiC%2Bnv1qOrZ7I53RZR%2FFVpN5jmzCwQarIE8jWdH4ttgK%2FUxk8NLRRp3IRp8nKznPLNvLg0SaFhVYoTYm8AcgB9EqKA2WEju%2F8AbLfkS2uLlXwMCAPmetgGa%2FlAmqJZLg8RRGo0QVLn7UXRzMU9%2BL35MNehjMIGOqUBszKG4goz6BcwR6yF02xQvtL5aTYeUNxaJKLEnRrXCyNlbB%2FnordJXWcIcu03Z87%2FMs%2BXK8mnTdHgnOX3QF%2FLDYiyqGW1aOS%2BWgqiEPfWj70QmfCqhN2GS7iMvKgCXlFyKsOFKR4rmU1p0gkMqi0BMLebsIfreilbTzlsuKGw1tM6WmDEFbjDWLGLIc9j9GwwuXWjfj8vpCU81pUTNO7dWY65axCt&X-Amz-Signature=682e536cfe4f2128791a85477907e846843e862f17cbf6bd92eb80232a8ccf21&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QEXNN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFLl8bdS1MuQ2T8Rq6nUBmQvlU2ZoViN7XwFKB94LBZAiEA7jvHERrfhrqTWYH8SPI4Xz%2FCCfL1tp%2BL434VJ5wZQBEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFPS7J35gUFPx0xHeSrcA2raeLSjJFOcDUPqSDAlAFSSfivwXaQHK7vCmPWc6P%2BEoAkkpvCygiaSkUudcZE2bLoFbNtbH%2Bb512%2B7pW27y6PF2GCDcSQaBxe7jfpVfMGZytcrPeOQ1bCaQ0fQxEi68URDJDhaWUsQF%2FN55ZAqzyrgUjmKOwF99c0FtZ3CWFOYV3za4s8XJJlRMIvGKpkzQpex5SsZ847I6UJ8vnG9u76DJATDnUVYT8ROxO0M38iE%2Fc%2Br54vyerf0liKu%2F7nizkvSEnsU8ZyXWuqMZnL6L%2FNkTgmdaxlp6vCBdcCOMzQ%2F%2F%2Bo8v%2B%2B6KKQ5P%2Fn5mqPlj0fGC2Mjj%2FC7KBrUVOmEwooN34KBYnSUea%2BIGft%2FXk7cRufxfhQdYt4ee2EPzBnogaWSbGE2%2B5yqPcU2pqtdGHW5BOB%2Fg9bBjzY9%2FxScnkmDBRTqIslPa9AvPQTEaVvf78x3wt36aPPFHmw63oNCDCkzEXjlowDo34bvnJuiC%2Bnv1qOrZ7I53RZR%2FFVpN5jmzCwQarIE8jWdH4ttgK%2FUxk8NLRRp3IRp8nKznPLNvLg0SaFhVYoTYm8AcgB9EqKA2WEju%2F8AbLfkS2uLlXwMCAPmetgGa%2FlAmqJZLg8RRGo0QVLn7UXRzMU9%2BL35MNehjMIGOqUBszKG4goz6BcwR6yF02xQvtL5aTYeUNxaJKLEnRrXCyNlbB%2FnordJXWcIcu03Z87%2FMs%2BXK8mnTdHgnOX3QF%2FLDYiyqGW1aOS%2BWgqiEPfWj70QmfCqhN2GS7iMvKgCXlFyKsOFKR4rmU1p0gkMqi0BMLebsIfreilbTzlsuKGw1tM6WmDEFbjDWLGLIc9j9GwwuXWjfj8vpCU81pUTNO7dWY65axCt&X-Amz-Signature=ec2becebf31145f4352db2ebed78c95e14d0af5e9b24e3844afc028bde7948f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QEXNN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFLl8bdS1MuQ2T8Rq6nUBmQvlU2ZoViN7XwFKB94LBZAiEA7jvHERrfhrqTWYH8SPI4Xz%2FCCfL1tp%2BL434VJ5wZQBEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFPS7J35gUFPx0xHeSrcA2raeLSjJFOcDUPqSDAlAFSSfivwXaQHK7vCmPWc6P%2BEoAkkpvCygiaSkUudcZE2bLoFbNtbH%2Bb512%2B7pW27y6PF2GCDcSQaBxe7jfpVfMGZytcrPeOQ1bCaQ0fQxEi68URDJDhaWUsQF%2FN55ZAqzyrgUjmKOwF99c0FtZ3CWFOYV3za4s8XJJlRMIvGKpkzQpex5SsZ847I6UJ8vnG9u76DJATDnUVYT8ROxO0M38iE%2Fc%2Br54vyerf0liKu%2F7nizkvSEnsU8ZyXWuqMZnL6L%2FNkTgmdaxlp6vCBdcCOMzQ%2F%2F%2Bo8v%2B%2B6KKQ5P%2Fn5mqPlj0fGC2Mjj%2FC7KBrUVOmEwooN34KBYnSUea%2BIGft%2FXk7cRufxfhQdYt4ee2EPzBnogaWSbGE2%2B5yqPcU2pqtdGHW5BOB%2Fg9bBjzY9%2FxScnkmDBRTqIslPa9AvPQTEaVvf78x3wt36aPPFHmw63oNCDCkzEXjlowDo34bvnJuiC%2Bnv1qOrZ7I53RZR%2FFVpN5jmzCwQarIE8jWdH4ttgK%2FUxk8NLRRp3IRp8nKznPLNvLg0SaFhVYoTYm8AcgB9EqKA2WEju%2F8AbLfkS2uLlXwMCAPmetgGa%2FlAmqJZLg8RRGo0QVLn7UXRzMU9%2BL35MNehjMIGOqUBszKG4goz6BcwR6yF02xQvtL5aTYeUNxaJKLEnRrXCyNlbB%2FnordJXWcIcu03Z87%2FMs%2BXK8mnTdHgnOX3QF%2FLDYiyqGW1aOS%2BWgqiEPfWj70QmfCqhN2GS7iMvKgCXlFyKsOFKR4rmU1p0gkMqi0BMLebsIfreilbTzlsuKGw1tM6WmDEFbjDWLGLIc9j9GwwuXWjfj8vpCU81pUTNO7dWY65axCt&X-Amz-Signature=a1438a880047e0253fbec4f68ae62da2434e18bac4e68c35119896cfd67e4f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3QEXNN%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFLl8bdS1MuQ2T8Rq6nUBmQvlU2ZoViN7XwFKB94LBZAiEA7jvHERrfhrqTWYH8SPI4Xz%2FCCfL1tp%2BL434VJ5wZQBEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFPS7J35gUFPx0xHeSrcA2raeLSjJFOcDUPqSDAlAFSSfivwXaQHK7vCmPWc6P%2BEoAkkpvCygiaSkUudcZE2bLoFbNtbH%2Bb512%2B7pW27y6PF2GCDcSQaBxe7jfpVfMGZytcrPeOQ1bCaQ0fQxEi68URDJDhaWUsQF%2FN55ZAqzyrgUjmKOwF99c0FtZ3CWFOYV3za4s8XJJlRMIvGKpkzQpex5SsZ847I6UJ8vnG9u76DJATDnUVYT8ROxO0M38iE%2Fc%2Br54vyerf0liKu%2F7nizkvSEnsU8ZyXWuqMZnL6L%2FNkTgmdaxlp6vCBdcCOMzQ%2F%2F%2Bo8v%2B%2B6KKQ5P%2Fn5mqPlj0fGC2Mjj%2FC7KBrUVOmEwooN34KBYnSUea%2BIGft%2FXk7cRufxfhQdYt4ee2EPzBnogaWSbGE2%2B5yqPcU2pqtdGHW5BOB%2Fg9bBjzY9%2FxScnkmDBRTqIslPa9AvPQTEaVvf78x3wt36aPPFHmw63oNCDCkzEXjlowDo34bvnJuiC%2Bnv1qOrZ7I53RZR%2FFVpN5jmzCwQarIE8jWdH4ttgK%2FUxk8NLRRp3IRp8nKznPLNvLg0SaFhVYoTYm8AcgB9EqKA2WEju%2F8AbLfkS2uLlXwMCAPmetgGa%2FlAmqJZLg8RRGo0QVLn7UXRzMU9%2BL35MNehjMIGOqUBszKG4goz6BcwR6yF02xQvtL5aTYeUNxaJKLEnRrXCyNlbB%2FnordJXWcIcu03Z87%2FMs%2BXK8mnTdHgnOX3QF%2FLDYiyqGW1aOS%2BWgqiEPfWj70QmfCqhN2GS7iMvKgCXlFyKsOFKR4rmU1p0gkMqi0BMLebsIfreilbTzlsuKGw1tM6WmDEFbjDWLGLIc9j9GwwuXWjfj8vpCU81pUTNO7dWY65axCt&X-Amz-Signature=44d30806fdedf76c89f6b3e322c1a0e0cc86efa620d7abe982866a585be0fa63&X-Amz-SignedHeaders=host&x-id=GetObject)
