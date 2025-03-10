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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJH7E67T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCoKkwC49qq1BwBFy5VPDOxWXDZyQLOo1JUQQjMiGP0%2FQIhAM20FG0Ux4NF67n52b79%2BWaH2w57AKzFJLQNl%2Bwou%2BWIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY1oeBSii1pGDxW%2Fwq3ANHO7%2F%2FXor4HQ0rr6Z1jHKa0r8Fwu1cE1T3cnmzmz2loZF4ceK8Bzp58XTkFnjjt0vUsLV1K%2Bdx5JFu0Y86M2605N5RBUTdc8n8xEYVIZEKViU%2FKV9pu%2BfJeSRm8eyY10GbsGY2oSB6TzCbizdi8TtJy5SAQ9P5MQ9i5mZTiEDoWk3AzmskepSpaioSScksGKP6CC1Skr41jGrr7FW75%2F%2FBeALcx3MXogbvUXEcinPwpKI5FswiJhTrcbUUmscnFLCFBQcq0vtcPNCGd%2BOdAq%2FQ%2B8Vl0gE%2BjVWm7%2B323v1%2FE2rC867VuRdUcWqSFxIdmvX317c1uNNy1PGO3aX%2F4BfKyoSYCnqW%2BSUK7Llh%2BIEb2NgNSKq7%2FuZToLUUI12k9S%2F9UY7cdgglbLMxerk0lskbpZG8nu5k9ynNJEQ6T4B4Px1W4bQ87QYfuBd2TqxGqJcwPRCfLvrh3%2Bk5gAx5%2FN6Ci4aBrNgALyOVEUeyBwmC6crqD53vClRobZ%2FdiO1krUK4JnctDnAu9GbCorPI%2FspBJsq9yp9SHeQBZCca9ciRxWVmLQ61Crm9JM1b70CSrAU1MetaSg%2BKse8nFlHWFo2EpcPOScjfuZrQz%2FnGbBlvydQYzE%2BslpvSFydeoDCnqru%2BBjqkAZfwBa7YUOYuhWR2zvcnoZIaAafJt%2BjIf%2BIa6N6tKzJ4UJVAUtWpgivh3c8%2BazfnOopLJtNBJ4iMX9BsfBYzN%2FU20eBtVvsCc%2BiuzBXFs9yEp3c9Eu6DhoDJZEFl77yYusxcRl9tPI4zKRLEPfdD1zpmlwPn1o69hrziH6uh%2FNZzx423hmGLQj6plly9TbPi%2BQxRkKIXsRiPSqUkY5rv0CGfWawi&X-Amz-Signature=8e7ad8eaaa879ca9f69bfc084683faa57864e3eb0de562aabecebbed5e020e65&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJH7E67T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCoKkwC49qq1BwBFy5VPDOxWXDZyQLOo1JUQQjMiGP0%2FQIhAM20FG0Ux4NF67n52b79%2BWaH2w57AKzFJLQNl%2Bwou%2BWIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY1oeBSii1pGDxW%2Fwq3ANHO7%2F%2FXor4HQ0rr6Z1jHKa0r8Fwu1cE1T3cnmzmz2loZF4ceK8Bzp58XTkFnjjt0vUsLV1K%2Bdx5JFu0Y86M2605N5RBUTdc8n8xEYVIZEKViU%2FKV9pu%2BfJeSRm8eyY10GbsGY2oSB6TzCbizdi8TtJy5SAQ9P5MQ9i5mZTiEDoWk3AzmskepSpaioSScksGKP6CC1Skr41jGrr7FW75%2F%2FBeALcx3MXogbvUXEcinPwpKI5FswiJhTrcbUUmscnFLCFBQcq0vtcPNCGd%2BOdAq%2FQ%2B8Vl0gE%2BjVWm7%2B323v1%2FE2rC867VuRdUcWqSFxIdmvX317c1uNNy1PGO3aX%2F4BfKyoSYCnqW%2BSUK7Llh%2BIEb2NgNSKq7%2FuZToLUUI12k9S%2F9UY7cdgglbLMxerk0lskbpZG8nu5k9ynNJEQ6T4B4Px1W4bQ87QYfuBd2TqxGqJcwPRCfLvrh3%2Bk5gAx5%2FN6Ci4aBrNgALyOVEUeyBwmC6crqD53vClRobZ%2FdiO1krUK4JnctDnAu9GbCorPI%2FspBJsq9yp9SHeQBZCca9ciRxWVmLQ61Crm9JM1b70CSrAU1MetaSg%2BKse8nFlHWFo2EpcPOScjfuZrQz%2FnGbBlvydQYzE%2BslpvSFydeoDCnqru%2BBjqkAZfwBa7YUOYuhWR2zvcnoZIaAafJt%2BjIf%2BIa6N6tKzJ4UJVAUtWpgivh3c8%2BazfnOopLJtNBJ4iMX9BsfBYzN%2FU20eBtVvsCc%2BiuzBXFs9yEp3c9Eu6DhoDJZEFl77yYusxcRl9tPI4zKRLEPfdD1zpmlwPn1o69hrziH6uh%2FNZzx423hmGLQj6plly9TbPi%2BQxRkKIXsRiPSqUkY5rv0CGfWawi&X-Amz-Signature=8b5fb893f038eec4bd3f54ffe6dc307c642fe8f8cad3da439efc0bdbbb3d2ede&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJH7E67T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCoKkwC49qq1BwBFy5VPDOxWXDZyQLOo1JUQQjMiGP0%2FQIhAM20FG0Ux4NF67n52b79%2BWaH2w57AKzFJLQNl%2Bwou%2BWIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY1oeBSii1pGDxW%2Fwq3ANHO7%2F%2FXor4HQ0rr6Z1jHKa0r8Fwu1cE1T3cnmzmz2loZF4ceK8Bzp58XTkFnjjt0vUsLV1K%2Bdx5JFu0Y86M2605N5RBUTdc8n8xEYVIZEKViU%2FKV9pu%2BfJeSRm8eyY10GbsGY2oSB6TzCbizdi8TtJy5SAQ9P5MQ9i5mZTiEDoWk3AzmskepSpaioSScksGKP6CC1Skr41jGrr7FW75%2F%2FBeALcx3MXogbvUXEcinPwpKI5FswiJhTrcbUUmscnFLCFBQcq0vtcPNCGd%2BOdAq%2FQ%2B8Vl0gE%2BjVWm7%2B323v1%2FE2rC867VuRdUcWqSFxIdmvX317c1uNNy1PGO3aX%2F4BfKyoSYCnqW%2BSUK7Llh%2BIEb2NgNSKq7%2FuZToLUUI12k9S%2F9UY7cdgglbLMxerk0lskbpZG8nu5k9ynNJEQ6T4B4Px1W4bQ87QYfuBd2TqxGqJcwPRCfLvrh3%2Bk5gAx5%2FN6Ci4aBrNgALyOVEUeyBwmC6crqD53vClRobZ%2FdiO1krUK4JnctDnAu9GbCorPI%2FspBJsq9yp9SHeQBZCca9ciRxWVmLQ61Crm9JM1b70CSrAU1MetaSg%2BKse8nFlHWFo2EpcPOScjfuZrQz%2FnGbBlvydQYzE%2BslpvSFydeoDCnqru%2BBjqkAZfwBa7YUOYuhWR2zvcnoZIaAafJt%2BjIf%2BIa6N6tKzJ4UJVAUtWpgivh3c8%2BazfnOopLJtNBJ4iMX9BsfBYzN%2FU20eBtVvsCc%2BiuzBXFs9yEp3c9Eu6DhoDJZEFl77yYusxcRl9tPI4zKRLEPfdD1zpmlwPn1o69hrziH6uh%2FNZzx423hmGLQj6plly9TbPi%2BQxRkKIXsRiPSqUkY5rv0CGfWawi&X-Amz-Signature=3ea1aba3ccc3f8f69d52084b2692a062bbb6c4b8f8c0785f25c8c500e35057e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJH7E67T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCoKkwC49qq1BwBFy5VPDOxWXDZyQLOo1JUQQjMiGP0%2FQIhAM20FG0Ux4NF67n52b79%2BWaH2w57AKzFJLQNl%2Bwou%2BWIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY1oeBSii1pGDxW%2Fwq3ANHO7%2F%2FXor4HQ0rr6Z1jHKa0r8Fwu1cE1T3cnmzmz2loZF4ceK8Bzp58XTkFnjjt0vUsLV1K%2Bdx5JFu0Y86M2605N5RBUTdc8n8xEYVIZEKViU%2FKV9pu%2BfJeSRm8eyY10GbsGY2oSB6TzCbizdi8TtJy5SAQ9P5MQ9i5mZTiEDoWk3AzmskepSpaioSScksGKP6CC1Skr41jGrr7FW75%2F%2FBeALcx3MXogbvUXEcinPwpKI5FswiJhTrcbUUmscnFLCFBQcq0vtcPNCGd%2BOdAq%2FQ%2B8Vl0gE%2BjVWm7%2B323v1%2FE2rC867VuRdUcWqSFxIdmvX317c1uNNy1PGO3aX%2F4BfKyoSYCnqW%2BSUK7Llh%2BIEb2NgNSKq7%2FuZToLUUI12k9S%2F9UY7cdgglbLMxerk0lskbpZG8nu5k9ynNJEQ6T4B4Px1W4bQ87QYfuBd2TqxGqJcwPRCfLvrh3%2Bk5gAx5%2FN6Ci4aBrNgALyOVEUeyBwmC6crqD53vClRobZ%2FdiO1krUK4JnctDnAu9GbCorPI%2FspBJsq9yp9SHeQBZCca9ciRxWVmLQ61Crm9JM1b70CSrAU1MetaSg%2BKse8nFlHWFo2EpcPOScjfuZrQz%2FnGbBlvydQYzE%2BslpvSFydeoDCnqru%2BBjqkAZfwBa7YUOYuhWR2zvcnoZIaAafJt%2BjIf%2BIa6N6tKzJ4UJVAUtWpgivh3c8%2BazfnOopLJtNBJ4iMX9BsfBYzN%2FU20eBtVvsCc%2BiuzBXFs9yEp3c9Eu6DhoDJZEFl77yYusxcRl9tPI4zKRLEPfdD1zpmlwPn1o69hrziH6uh%2FNZzx423hmGLQj6plly9TbPi%2BQxRkKIXsRiPSqUkY5rv0CGfWawi&X-Amz-Signature=a8b9a3fff824e804619548a869b09e50ed9021f3ee41c7ae3d7fe018c8c93715&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJH7E67T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCoKkwC49qq1BwBFy5VPDOxWXDZyQLOo1JUQQjMiGP0%2FQIhAM20FG0Ux4NF67n52b79%2BWaH2w57AKzFJLQNl%2Bwou%2BWIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY1oeBSii1pGDxW%2Fwq3ANHO7%2F%2FXor4HQ0rr6Z1jHKa0r8Fwu1cE1T3cnmzmz2loZF4ceK8Bzp58XTkFnjjt0vUsLV1K%2Bdx5JFu0Y86M2605N5RBUTdc8n8xEYVIZEKViU%2FKV9pu%2BfJeSRm8eyY10GbsGY2oSB6TzCbizdi8TtJy5SAQ9P5MQ9i5mZTiEDoWk3AzmskepSpaioSScksGKP6CC1Skr41jGrr7FW75%2F%2FBeALcx3MXogbvUXEcinPwpKI5FswiJhTrcbUUmscnFLCFBQcq0vtcPNCGd%2BOdAq%2FQ%2B8Vl0gE%2BjVWm7%2B323v1%2FE2rC867VuRdUcWqSFxIdmvX317c1uNNy1PGO3aX%2F4BfKyoSYCnqW%2BSUK7Llh%2BIEb2NgNSKq7%2FuZToLUUI12k9S%2F9UY7cdgglbLMxerk0lskbpZG8nu5k9ynNJEQ6T4B4Px1W4bQ87QYfuBd2TqxGqJcwPRCfLvrh3%2Bk5gAx5%2FN6Ci4aBrNgALyOVEUeyBwmC6crqD53vClRobZ%2FdiO1krUK4JnctDnAu9GbCorPI%2FspBJsq9yp9SHeQBZCca9ciRxWVmLQ61Crm9JM1b70CSrAU1MetaSg%2BKse8nFlHWFo2EpcPOScjfuZrQz%2FnGbBlvydQYzE%2BslpvSFydeoDCnqru%2BBjqkAZfwBa7YUOYuhWR2zvcnoZIaAafJt%2BjIf%2BIa6N6tKzJ4UJVAUtWpgivh3c8%2BazfnOopLJtNBJ4iMX9BsfBYzN%2FU20eBtVvsCc%2BiuzBXFs9yEp3c9Eu6DhoDJZEFl77yYusxcRl9tPI4zKRLEPfdD1zpmlwPn1o69hrziH6uh%2FNZzx423hmGLQj6plly9TbPi%2BQxRkKIXsRiPSqUkY5rv0CGfWawi&X-Amz-Signature=7246bce5a888551211e40fd246f1da7231c706a3ce4701d971b10643a1dbcfea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJH7E67T%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCoKkwC49qq1BwBFy5VPDOxWXDZyQLOo1JUQQjMiGP0%2FQIhAM20FG0Ux4NF67n52b79%2BWaH2w57AKzFJLQNl%2Bwou%2BWIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY1oeBSii1pGDxW%2Fwq3ANHO7%2F%2FXor4HQ0rr6Z1jHKa0r8Fwu1cE1T3cnmzmz2loZF4ceK8Bzp58XTkFnjjt0vUsLV1K%2Bdx5JFu0Y86M2605N5RBUTdc8n8xEYVIZEKViU%2FKV9pu%2BfJeSRm8eyY10GbsGY2oSB6TzCbizdi8TtJy5SAQ9P5MQ9i5mZTiEDoWk3AzmskepSpaioSScksGKP6CC1Skr41jGrr7FW75%2F%2FBeALcx3MXogbvUXEcinPwpKI5FswiJhTrcbUUmscnFLCFBQcq0vtcPNCGd%2BOdAq%2FQ%2B8Vl0gE%2BjVWm7%2B323v1%2FE2rC867VuRdUcWqSFxIdmvX317c1uNNy1PGO3aX%2F4BfKyoSYCnqW%2BSUK7Llh%2BIEb2NgNSKq7%2FuZToLUUI12k9S%2F9UY7cdgglbLMxerk0lskbpZG8nu5k9ynNJEQ6T4B4Px1W4bQ87QYfuBd2TqxGqJcwPRCfLvrh3%2Bk5gAx5%2FN6Ci4aBrNgALyOVEUeyBwmC6crqD53vClRobZ%2FdiO1krUK4JnctDnAu9GbCorPI%2FspBJsq9yp9SHeQBZCca9ciRxWVmLQ61Crm9JM1b70CSrAU1MetaSg%2BKse8nFlHWFo2EpcPOScjfuZrQz%2FnGbBlvydQYzE%2BslpvSFydeoDCnqru%2BBjqkAZfwBa7YUOYuhWR2zvcnoZIaAafJt%2BjIf%2BIa6N6tKzJ4UJVAUtWpgivh3c8%2BazfnOopLJtNBJ4iMX9BsfBYzN%2FU20eBtVvsCc%2BiuzBXFs9yEp3c9Eu6DhoDJZEFl77yYusxcRl9tPI4zKRLEPfdD1zpmlwPn1o69hrziH6uh%2FNZzx423hmGLQj6plly9TbPi%2BQxRkKIXsRiPSqUkY5rv0CGfWawi&X-Amz-Signature=a518708efc18b7eb57bb70d2e8645cc63e446afea3d67e490588e14e98b8b269&X-Amz-SignedHeaders=host&x-id=GetObject)
