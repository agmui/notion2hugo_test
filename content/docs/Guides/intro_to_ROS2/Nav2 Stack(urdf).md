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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUZGO62%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDW5UBYWO8XujAoCGs1%2FLMkzHgnEn3O7cfjOUosF3Gf6wIhAIaUlGqpOusLKrU9eWzV%2B3YS2UhBRr2gWTR5h4QKH1bdKv8DCGIQABoMNjM3NDIzMTgzODA1IgyVT9muAanod1VWoXAq3ANpZ35VKi9g9%2FtIg4onKcmUgR3ohA2s1iPF%2B%2FJlnmJgiYvA040wijMNdh0QyiFz4OukZLpMJH2KsYyzT5UjSEylY%2FTosVx%2Bm8aMaMuggY0ZG9SleOrFc7PBmobA7zuE6xvqUlOJ1cGjjtyiV%2FvDeJchSKg02YkMEa1fo6VnBVCrs6sgE509nYQ6Vz%2FML89XIZdRUsL3TaDcjAgOQ35i5rjJM7x%2FF8BZuwSBFPT3uwJZK3GZ%2F9DGn1MQo2vfDRVJ%2F51O9%2BGqFkD3LVH674JaK4MQ%2Ftpy100VcW3POgmw1TYo3fstAAZa%2B8onsuDIH%2BZZHHIUGsHX1zY2PytBOCdhTl3eMdQ0lZS4hdAJFf4gL%2F0xC8EfNRjwXF%2FtaS6yh8ay%2FvSv%2BxBDqzPiOc3wzVE51A6zvNzeTKJok42TPDIFJmyqqnKTwlnCI30ffqcxr3dMJSsdPdfRAbomktA5EzL6DovXA1X1AXlwxM%2B7yKruHLmzER0YwXYnncPSH6Or%2FtlcJMt7vHpZBgSJMi8MH4NgiDJhHipktRVvFjzKkXxyAVqJKiF4wT%2FQft83Z7ZC9EZNrIfmsPVF2p6HsQ15zFnXnKdEO2wD9UFgGA5lFL0qZi0Pu3HUjak1LspoaE6W%2BzDetd%2FDBjqkAXwImsYU87y3WeOfzzAMkF%2FQYhQQKQdgQAE8wM%2B%2F1IrDDXPmqd4XWECrpIhTHuzuq7n7kFS%2FJyj9CpRNGXd4DSYqxpxlBvTfquXKW3Sr2KymHNDhCs4UqDY2PSXa9wwdH9Rzh9qYNKh%2BNO%2BPKg1rmiWhN4ibYgaQimGkrSMQ72LTcsfq4DX%2Bt%2Ba3hK4R5Q1%2B19xD2rIF8nUgtbNuChEUoGkwdjQ2&X-Amz-Signature=483eb459882b9de034bc187588faa2395c5e6b5025a3bfd17fefecd4b897fd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUZGO62%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDW5UBYWO8XujAoCGs1%2FLMkzHgnEn3O7cfjOUosF3Gf6wIhAIaUlGqpOusLKrU9eWzV%2B3YS2UhBRr2gWTR5h4QKH1bdKv8DCGIQABoMNjM3NDIzMTgzODA1IgyVT9muAanod1VWoXAq3ANpZ35VKi9g9%2FtIg4onKcmUgR3ohA2s1iPF%2B%2FJlnmJgiYvA040wijMNdh0QyiFz4OukZLpMJH2KsYyzT5UjSEylY%2FTosVx%2Bm8aMaMuggY0ZG9SleOrFc7PBmobA7zuE6xvqUlOJ1cGjjtyiV%2FvDeJchSKg02YkMEa1fo6VnBVCrs6sgE509nYQ6Vz%2FML89XIZdRUsL3TaDcjAgOQ35i5rjJM7x%2FF8BZuwSBFPT3uwJZK3GZ%2F9DGn1MQo2vfDRVJ%2F51O9%2BGqFkD3LVH674JaK4MQ%2Ftpy100VcW3POgmw1TYo3fstAAZa%2B8onsuDIH%2BZZHHIUGsHX1zY2PytBOCdhTl3eMdQ0lZS4hdAJFf4gL%2F0xC8EfNRjwXF%2FtaS6yh8ay%2FvSv%2BxBDqzPiOc3wzVE51A6zvNzeTKJok42TPDIFJmyqqnKTwlnCI30ffqcxr3dMJSsdPdfRAbomktA5EzL6DovXA1X1AXlwxM%2B7yKruHLmzER0YwXYnncPSH6Or%2FtlcJMt7vHpZBgSJMi8MH4NgiDJhHipktRVvFjzKkXxyAVqJKiF4wT%2FQft83Z7ZC9EZNrIfmsPVF2p6HsQ15zFnXnKdEO2wD9UFgGA5lFL0qZi0Pu3HUjak1LspoaE6W%2BzDetd%2FDBjqkAXwImsYU87y3WeOfzzAMkF%2FQYhQQKQdgQAE8wM%2B%2F1IrDDXPmqd4XWECrpIhTHuzuq7n7kFS%2FJyj9CpRNGXd4DSYqxpxlBvTfquXKW3Sr2KymHNDhCs4UqDY2PSXa9wwdH9Rzh9qYNKh%2BNO%2BPKg1rmiWhN4ibYgaQimGkrSMQ72LTcsfq4DX%2Bt%2Ba3hK4R5Q1%2B19xD2rIF8nUgtbNuChEUoGkwdjQ2&X-Amz-Signature=3160a7a2f92c25eebff03fd4d289b793e34b41c79a79dd21bc2117a94f3b2cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUZGO62%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDW5UBYWO8XujAoCGs1%2FLMkzHgnEn3O7cfjOUosF3Gf6wIhAIaUlGqpOusLKrU9eWzV%2B3YS2UhBRr2gWTR5h4QKH1bdKv8DCGIQABoMNjM3NDIzMTgzODA1IgyVT9muAanod1VWoXAq3ANpZ35VKi9g9%2FtIg4onKcmUgR3ohA2s1iPF%2B%2FJlnmJgiYvA040wijMNdh0QyiFz4OukZLpMJH2KsYyzT5UjSEylY%2FTosVx%2Bm8aMaMuggY0ZG9SleOrFc7PBmobA7zuE6xvqUlOJ1cGjjtyiV%2FvDeJchSKg02YkMEa1fo6VnBVCrs6sgE509nYQ6Vz%2FML89XIZdRUsL3TaDcjAgOQ35i5rjJM7x%2FF8BZuwSBFPT3uwJZK3GZ%2F9DGn1MQo2vfDRVJ%2F51O9%2BGqFkD3LVH674JaK4MQ%2Ftpy100VcW3POgmw1TYo3fstAAZa%2B8onsuDIH%2BZZHHIUGsHX1zY2PytBOCdhTl3eMdQ0lZS4hdAJFf4gL%2F0xC8EfNRjwXF%2FtaS6yh8ay%2FvSv%2BxBDqzPiOc3wzVE51A6zvNzeTKJok42TPDIFJmyqqnKTwlnCI30ffqcxr3dMJSsdPdfRAbomktA5EzL6DovXA1X1AXlwxM%2B7yKruHLmzER0YwXYnncPSH6Or%2FtlcJMt7vHpZBgSJMi8MH4NgiDJhHipktRVvFjzKkXxyAVqJKiF4wT%2FQft83Z7ZC9EZNrIfmsPVF2p6HsQ15zFnXnKdEO2wD9UFgGA5lFL0qZi0Pu3HUjak1LspoaE6W%2BzDetd%2FDBjqkAXwImsYU87y3WeOfzzAMkF%2FQYhQQKQdgQAE8wM%2B%2F1IrDDXPmqd4XWECrpIhTHuzuq7n7kFS%2FJyj9CpRNGXd4DSYqxpxlBvTfquXKW3Sr2KymHNDhCs4UqDY2PSXa9wwdH9Rzh9qYNKh%2BNO%2BPKg1rmiWhN4ibYgaQimGkrSMQ72LTcsfq4DX%2Bt%2Ba3hK4R5Q1%2B19xD2rIF8nUgtbNuChEUoGkwdjQ2&X-Amz-Signature=e317d012d43d9d3468b132422d1cbd19c6709e6b6d64955569448f4b6abdaedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUZGO62%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDW5UBYWO8XujAoCGs1%2FLMkzHgnEn3O7cfjOUosF3Gf6wIhAIaUlGqpOusLKrU9eWzV%2B3YS2UhBRr2gWTR5h4QKH1bdKv8DCGIQABoMNjM3NDIzMTgzODA1IgyVT9muAanod1VWoXAq3ANpZ35VKi9g9%2FtIg4onKcmUgR3ohA2s1iPF%2B%2FJlnmJgiYvA040wijMNdh0QyiFz4OukZLpMJH2KsYyzT5UjSEylY%2FTosVx%2Bm8aMaMuggY0ZG9SleOrFc7PBmobA7zuE6xvqUlOJ1cGjjtyiV%2FvDeJchSKg02YkMEa1fo6VnBVCrs6sgE509nYQ6Vz%2FML89XIZdRUsL3TaDcjAgOQ35i5rjJM7x%2FF8BZuwSBFPT3uwJZK3GZ%2F9DGn1MQo2vfDRVJ%2F51O9%2BGqFkD3LVH674JaK4MQ%2Ftpy100VcW3POgmw1TYo3fstAAZa%2B8onsuDIH%2BZZHHIUGsHX1zY2PytBOCdhTl3eMdQ0lZS4hdAJFf4gL%2F0xC8EfNRjwXF%2FtaS6yh8ay%2FvSv%2BxBDqzPiOc3wzVE51A6zvNzeTKJok42TPDIFJmyqqnKTwlnCI30ffqcxr3dMJSsdPdfRAbomktA5EzL6DovXA1X1AXlwxM%2B7yKruHLmzER0YwXYnncPSH6Or%2FtlcJMt7vHpZBgSJMi8MH4NgiDJhHipktRVvFjzKkXxyAVqJKiF4wT%2FQft83Z7ZC9EZNrIfmsPVF2p6HsQ15zFnXnKdEO2wD9UFgGA5lFL0qZi0Pu3HUjak1LspoaE6W%2BzDetd%2FDBjqkAXwImsYU87y3WeOfzzAMkF%2FQYhQQKQdgQAE8wM%2B%2F1IrDDXPmqd4XWECrpIhTHuzuq7n7kFS%2FJyj9CpRNGXd4DSYqxpxlBvTfquXKW3Sr2KymHNDhCs4UqDY2PSXa9wwdH9Rzh9qYNKh%2BNO%2BPKg1rmiWhN4ibYgaQimGkrSMQ72LTcsfq4DX%2Bt%2Ba3hK4R5Q1%2B19xD2rIF8nUgtbNuChEUoGkwdjQ2&X-Amz-Signature=85b99a2159336fd52bb36d731a0e730434d03e86d746f47e3a8e376d9f78f3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUZGO62%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDW5UBYWO8XujAoCGs1%2FLMkzHgnEn3O7cfjOUosF3Gf6wIhAIaUlGqpOusLKrU9eWzV%2B3YS2UhBRr2gWTR5h4QKH1bdKv8DCGIQABoMNjM3NDIzMTgzODA1IgyVT9muAanod1VWoXAq3ANpZ35VKi9g9%2FtIg4onKcmUgR3ohA2s1iPF%2B%2FJlnmJgiYvA040wijMNdh0QyiFz4OukZLpMJH2KsYyzT5UjSEylY%2FTosVx%2Bm8aMaMuggY0ZG9SleOrFc7PBmobA7zuE6xvqUlOJ1cGjjtyiV%2FvDeJchSKg02YkMEa1fo6VnBVCrs6sgE509nYQ6Vz%2FML89XIZdRUsL3TaDcjAgOQ35i5rjJM7x%2FF8BZuwSBFPT3uwJZK3GZ%2F9DGn1MQo2vfDRVJ%2F51O9%2BGqFkD3LVH674JaK4MQ%2Ftpy100VcW3POgmw1TYo3fstAAZa%2B8onsuDIH%2BZZHHIUGsHX1zY2PytBOCdhTl3eMdQ0lZS4hdAJFf4gL%2F0xC8EfNRjwXF%2FtaS6yh8ay%2FvSv%2BxBDqzPiOc3wzVE51A6zvNzeTKJok42TPDIFJmyqqnKTwlnCI30ffqcxr3dMJSsdPdfRAbomktA5EzL6DovXA1X1AXlwxM%2B7yKruHLmzER0YwXYnncPSH6Or%2FtlcJMt7vHpZBgSJMi8MH4NgiDJhHipktRVvFjzKkXxyAVqJKiF4wT%2FQft83Z7ZC9EZNrIfmsPVF2p6HsQ15zFnXnKdEO2wD9UFgGA5lFL0qZi0Pu3HUjak1LspoaE6W%2BzDetd%2FDBjqkAXwImsYU87y3WeOfzzAMkF%2FQYhQQKQdgQAE8wM%2B%2F1IrDDXPmqd4XWECrpIhTHuzuq7n7kFS%2FJyj9CpRNGXd4DSYqxpxlBvTfquXKW3Sr2KymHNDhCs4UqDY2PSXa9wwdH9Rzh9qYNKh%2BNO%2BPKg1rmiWhN4ibYgaQimGkrSMQ72LTcsfq4DX%2Bt%2Ba3hK4R5Q1%2B19xD2rIF8nUgtbNuChEUoGkwdjQ2&X-Amz-Signature=3f5d8bf2677da36452d86d2111a488235a0bc706b40ba677e138162adb060875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LUZGO62%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDW5UBYWO8XujAoCGs1%2FLMkzHgnEn3O7cfjOUosF3Gf6wIhAIaUlGqpOusLKrU9eWzV%2B3YS2UhBRr2gWTR5h4QKH1bdKv8DCGIQABoMNjM3NDIzMTgzODA1IgyVT9muAanod1VWoXAq3ANpZ35VKi9g9%2FtIg4onKcmUgR3ohA2s1iPF%2B%2FJlnmJgiYvA040wijMNdh0QyiFz4OukZLpMJH2KsYyzT5UjSEylY%2FTosVx%2Bm8aMaMuggY0ZG9SleOrFc7PBmobA7zuE6xvqUlOJ1cGjjtyiV%2FvDeJchSKg02YkMEa1fo6VnBVCrs6sgE509nYQ6Vz%2FML89XIZdRUsL3TaDcjAgOQ35i5rjJM7x%2FF8BZuwSBFPT3uwJZK3GZ%2F9DGn1MQo2vfDRVJ%2F51O9%2BGqFkD3LVH674JaK4MQ%2Ftpy100VcW3POgmw1TYo3fstAAZa%2B8onsuDIH%2BZZHHIUGsHX1zY2PytBOCdhTl3eMdQ0lZS4hdAJFf4gL%2F0xC8EfNRjwXF%2FtaS6yh8ay%2FvSv%2BxBDqzPiOc3wzVE51A6zvNzeTKJok42TPDIFJmyqqnKTwlnCI30ffqcxr3dMJSsdPdfRAbomktA5EzL6DovXA1X1AXlwxM%2B7yKruHLmzER0YwXYnncPSH6Or%2FtlcJMt7vHpZBgSJMi8MH4NgiDJhHipktRVvFjzKkXxyAVqJKiF4wT%2FQft83Z7ZC9EZNrIfmsPVF2p6HsQ15zFnXnKdEO2wD9UFgGA5lFL0qZi0Pu3HUjak1LspoaE6W%2BzDetd%2FDBjqkAXwImsYU87y3WeOfzzAMkF%2FQYhQQKQdgQAE8wM%2B%2F1IrDDXPmqd4XWECrpIhTHuzuq7n7kFS%2FJyj9CpRNGXd4DSYqxpxlBvTfquXKW3Sr2KymHNDhCs4UqDY2PSXa9wwdH9Rzh9qYNKh%2BNO%2BPKg1rmiWhN4ibYgaQimGkrSMQ72LTcsfq4DX%2Bt%2Ba3hK4R5Q1%2B19xD2rIF8nUgtbNuChEUoGkwdjQ2&X-Amz-Signature=9deb9dcbf9bfb3a811d1d507c55e685ac77839c60615d7756dcf2d4d5f72a615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
