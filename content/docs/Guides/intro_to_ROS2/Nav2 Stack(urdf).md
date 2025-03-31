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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AWDM6L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfP%2BmO0WDq9aMMFq8FKxZBh%2BWsc3Dyr8dPAfJ7AbZZ1wIhAI0kOrRjNqoftjF%2BT43bdA1ew%2BX2EYRYOQSXT2bu0r68KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJtFKvTQeiSnB6f9Eq3AMM9zWjgUsi%2BkhNVYEfx44MNTp%2BbKXF9VkvJjOXezM4ZDsyx%2FRGy%2B012b1K3n6vdhikITtauuycwzRQ%2FVTPd0YL0w9PTMAMnhUD03XreSsKD5%2Bu0KClKgYrNSvn4TC8Jm1WPXPkPMAGRBZmC8QLYP0hBIXCVLpu6uuG1KG2GVU2c%2FIgvcrv30nrxSxjBVEt76WKA5Ox9pSFPQrtv5NPtLSyUgBln%2Ff55p3121bQ3SKyV5nGRBNU32zaxLETsy3ztIsQ%2FDG0JLQHQPvS3NjG5So87l5UuujKJKNjoKnmDcx2tQY4O1L5dni8k5uQpsbwdTJ6W9Ob2atml53GC8ycaaN39%2FkaUbzXijhlnmbUGz2olurpKvGOBVcjpXTHPTpvi%2F6e16uRPXq5pY63pPjUW7waBZXh8byVr34OvQd8LLhlEHKwBavlQOoHqvsc0cbawuW2BDBUmkWKVhAc4IxF27E%2FoDAMm8qu80PSzO%2BWU0A0rCq%2BCd9x0K22zWoh9DQAxf%2FFjZNQ65D%2FsMQW8k8oz3ULWnLIAgytZ8GP0P1utDIgiJn6KZMkSQqNhwnYQER8mXP5VZA2aCMsiGrHM7MHOoROCHJisrPt6Rff%2B17JBaflV4hzKK%2BGWl07Dy7KYjCso6q%2FBjqkASx6Y%2BaYq9n%2FIIfkMgyJf%2F7D%2FJQ%2BCeRcEfM36Hm8RNt7L%2FoFvbszq8d%2BErZa9HJ4SntvsOpyOec6cr02p%2FKjPu%2FO%2B7WN4lT66KMFUMfVGcEI1Qill9rWgGQZ8h6Q2UvRsvxNLMFJL2ZBC3CY3lGx9cNEfeTMbax8C94f%2FCzZJ3nBhM0g%2F%2BzXNkTloh6OTTCtXiJjb%2BttWemOSn%2F8XQx%2BomwM%2FJRI&X-Amz-Signature=ab43c5e042b52598a27daf6fbeee28d3c61f2571db25eb71a3dac5f7dc6ce712&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AWDM6L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfP%2BmO0WDq9aMMFq8FKxZBh%2BWsc3Dyr8dPAfJ7AbZZ1wIhAI0kOrRjNqoftjF%2BT43bdA1ew%2BX2EYRYOQSXT2bu0r68KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJtFKvTQeiSnB6f9Eq3AMM9zWjgUsi%2BkhNVYEfx44MNTp%2BbKXF9VkvJjOXezM4ZDsyx%2FRGy%2B012b1K3n6vdhikITtauuycwzRQ%2FVTPd0YL0w9PTMAMnhUD03XreSsKD5%2Bu0KClKgYrNSvn4TC8Jm1WPXPkPMAGRBZmC8QLYP0hBIXCVLpu6uuG1KG2GVU2c%2FIgvcrv30nrxSxjBVEt76WKA5Ox9pSFPQrtv5NPtLSyUgBln%2Ff55p3121bQ3SKyV5nGRBNU32zaxLETsy3ztIsQ%2FDG0JLQHQPvS3NjG5So87l5UuujKJKNjoKnmDcx2tQY4O1L5dni8k5uQpsbwdTJ6W9Ob2atml53GC8ycaaN39%2FkaUbzXijhlnmbUGz2olurpKvGOBVcjpXTHPTpvi%2F6e16uRPXq5pY63pPjUW7waBZXh8byVr34OvQd8LLhlEHKwBavlQOoHqvsc0cbawuW2BDBUmkWKVhAc4IxF27E%2FoDAMm8qu80PSzO%2BWU0A0rCq%2BCd9x0K22zWoh9DQAxf%2FFjZNQ65D%2FsMQW8k8oz3ULWnLIAgytZ8GP0P1utDIgiJn6KZMkSQqNhwnYQER8mXP5VZA2aCMsiGrHM7MHOoROCHJisrPt6Rff%2B17JBaflV4hzKK%2BGWl07Dy7KYjCso6q%2FBjqkASx6Y%2BaYq9n%2FIIfkMgyJf%2F7D%2FJQ%2BCeRcEfM36Hm8RNt7L%2FoFvbszq8d%2BErZa9HJ4SntvsOpyOec6cr02p%2FKjPu%2FO%2B7WN4lT66KMFUMfVGcEI1Qill9rWgGQZ8h6Q2UvRsvxNLMFJL2ZBC3CY3lGx9cNEfeTMbax8C94f%2FCzZJ3nBhM0g%2F%2BzXNkTloh6OTTCtXiJjb%2BttWemOSn%2F8XQx%2BomwM%2FJRI&X-Amz-Signature=40d48392a5b3912942029ca8607f61b362272f3a3d5e82498dedc9e216503859&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AWDM6L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfP%2BmO0WDq9aMMFq8FKxZBh%2BWsc3Dyr8dPAfJ7AbZZ1wIhAI0kOrRjNqoftjF%2BT43bdA1ew%2BX2EYRYOQSXT2bu0r68KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJtFKvTQeiSnB6f9Eq3AMM9zWjgUsi%2BkhNVYEfx44MNTp%2BbKXF9VkvJjOXezM4ZDsyx%2FRGy%2B012b1K3n6vdhikITtauuycwzRQ%2FVTPd0YL0w9PTMAMnhUD03XreSsKD5%2Bu0KClKgYrNSvn4TC8Jm1WPXPkPMAGRBZmC8QLYP0hBIXCVLpu6uuG1KG2GVU2c%2FIgvcrv30nrxSxjBVEt76WKA5Ox9pSFPQrtv5NPtLSyUgBln%2Ff55p3121bQ3SKyV5nGRBNU32zaxLETsy3ztIsQ%2FDG0JLQHQPvS3NjG5So87l5UuujKJKNjoKnmDcx2tQY4O1L5dni8k5uQpsbwdTJ6W9Ob2atml53GC8ycaaN39%2FkaUbzXijhlnmbUGz2olurpKvGOBVcjpXTHPTpvi%2F6e16uRPXq5pY63pPjUW7waBZXh8byVr34OvQd8LLhlEHKwBavlQOoHqvsc0cbawuW2BDBUmkWKVhAc4IxF27E%2FoDAMm8qu80PSzO%2BWU0A0rCq%2BCd9x0K22zWoh9DQAxf%2FFjZNQ65D%2FsMQW8k8oz3ULWnLIAgytZ8GP0P1utDIgiJn6KZMkSQqNhwnYQER8mXP5VZA2aCMsiGrHM7MHOoROCHJisrPt6Rff%2B17JBaflV4hzKK%2BGWl07Dy7KYjCso6q%2FBjqkASx6Y%2BaYq9n%2FIIfkMgyJf%2F7D%2FJQ%2BCeRcEfM36Hm8RNt7L%2FoFvbszq8d%2BErZa9HJ4SntvsOpyOec6cr02p%2FKjPu%2FO%2B7WN4lT66KMFUMfVGcEI1Qill9rWgGQZ8h6Q2UvRsvxNLMFJL2ZBC3CY3lGx9cNEfeTMbax8C94f%2FCzZJ3nBhM0g%2F%2BzXNkTloh6OTTCtXiJjb%2BttWemOSn%2F8XQx%2BomwM%2FJRI&X-Amz-Signature=3ceae211bb52d0883deeab747774a4a23485a1b87754ed8ebdbe9e0cb9daea77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AWDM6L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfP%2BmO0WDq9aMMFq8FKxZBh%2BWsc3Dyr8dPAfJ7AbZZ1wIhAI0kOrRjNqoftjF%2BT43bdA1ew%2BX2EYRYOQSXT2bu0r68KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJtFKvTQeiSnB6f9Eq3AMM9zWjgUsi%2BkhNVYEfx44MNTp%2BbKXF9VkvJjOXezM4ZDsyx%2FRGy%2B012b1K3n6vdhikITtauuycwzRQ%2FVTPd0YL0w9PTMAMnhUD03XreSsKD5%2Bu0KClKgYrNSvn4TC8Jm1WPXPkPMAGRBZmC8QLYP0hBIXCVLpu6uuG1KG2GVU2c%2FIgvcrv30nrxSxjBVEt76WKA5Ox9pSFPQrtv5NPtLSyUgBln%2Ff55p3121bQ3SKyV5nGRBNU32zaxLETsy3ztIsQ%2FDG0JLQHQPvS3NjG5So87l5UuujKJKNjoKnmDcx2tQY4O1L5dni8k5uQpsbwdTJ6W9Ob2atml53GC8ycaaN39%2FkaUbzXijhlnmbUGz2olurpKvGOBVcjpXTHPTpvi%2F6e16uRPXq5pY63pPjUW7waBZXh8byVr34OvQd8LLhlEHKwBavlQOoHqvsc0cbawuW2BDBUmkWKVhAc4IxF27E%2FoDAMm8qu80PSzO%2BWU0A0rCq%2BCd9x0K22zWoh9DQAxf%2FFjZNQ65D%2FsMQW8k8oz3ULWnLIAgytZ8GP0P1utDIgiJn6KZMkSQqNhwnYQER8mXP5VZA2aCMsiGrHM7MHOoROCHJisrPt6Rff%2B17JBaflV4hzKK%2BGWl07Dy7KYjCso6q%2FBjqkASx6Y%2BaYq9n%2FIIfkMgyJf%2F7D%2FJQ%2BCeRcEfM36Hm8RNt7L%2FoFvbszq8d%2BErZa9HJ4SntvsOpyOec6cr02p%2FKjPu%2FO%2B7WN4lT66KMFUMfVGcEI1Qill9rWgGQZ8h6Q2UvRsvxNLMFJL2ZBC3CY3lGx9cNEfeTMbax8C94f%2FCzZJ3nBhM0g%2F%2BzXNkTloh6OTTCtXiJjb%2BttWemOSn%2F8XQx%2BomwM%2FJRI&X-Amz-Signature=de975c8bedd6820ffe82c79372fdb0cd46be17ce8a8f889d67d1951b9f67872d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AWDM6L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfP%2BmO0WDq9aMMFq8FKxZBh%2BWsc3Dyr8dPAfJ7AbZZ1wIhAI0kOrRjNqoftjF%2BT43bdA1ew%2BX2EYRYOQSXT2bu0r68KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJtFKvTQeiSnB6f9Eq3AMM9zWjgUsi%2BkhNVYEfx44MNTp%2BbKXF9VkvJjOXezM4ZDsyx%2FRGy%2B012b1K3n6vdhikITtauuycwzRQ%2FVTPd0YL0w9PTMAMnhUD03XreSsKD5%2Bu0KClKgYrNSvn4TC8Jm1WPXPkPMAGRBZmC8QLYP0hBIXCVLpu6uuG1KG2GVU2c%2FIgvcrv30nrxSxjBVEt76WKA5Ox9pSFPQrtv5NPtLSyUgBln%2Ff55p3121bQ3SKyV5nGRBNU32zaxLETsy3ztIsQ%2FDG0JLQHQPvS3NjG5So87l5UuujKJKNjoKnmDcx2tQY4O1L5dni8k5uQpsbwdTJ6W9Ob2atml53GC8ycaaN39%2FkaUbzXijhlnmbUGz2olurpKvGOBVcjpXTHPTpvi%2F6e16uRPXq5pY63pPjUW7waBZXh8byVr34OvQd8LLhlEHKwBavlQOoHqvsc0cbawuW2BDBUmkWKVhAc4IxF27E%2FoDAMm8qu80PSzO%2BWU0A0rCq%2BCd9x0K22zWoh9DQAxf%2FFjZNQ65D%2FsMQW8k8oz3ULWnLIAgytZ8GP0P1utDIgiJn6KZMkSQqNhwnYQER8mXP5VZA2aCMsiGrHM7MHOoROCHJisrPt6Rff%2B17JBaflV4hzKK%2BGWl07Dy7KYjCso6q%2FBjqkASx6Y%2BaYq9n%2FIIfkMgyJf%2F7D%2FJQ%2BCeRcEfM36Hm8RNt7L%2FoFvbszq8d%2BErZa9HJ4SntvsOpyOec6cr02p%2FKjPu%2FO%2B7WN4lT66KMFUMfVGcEI1Qill9rWgGQZ8h6Q2UvRsvxNLMFJL2ZBC3CY3lGx9cNEfeTMbax8C94f%2FCzZJ3nBhM0g%2F%2BzXNkTloh6OTTCtXiJjb%2BttWemOSn%2F8XQx%2BomwM%2FJRI&X-Amz-Signature=3f75c276e84fd1b21f4c826e7d7e268aaf8194ad1b6b683e79dbb1203bbff8d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AWDM6L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCfP%2BmO0WDq9aMMFq8FKxZBh%2BWsc3Dyr8dPAfJ7AbZZ1wIhAI0kOrRjNqoftjF%2BT43bdA1ew%2BX2EYRYOQSXT2bu0r68KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJtFKvTQeiSnB6f9Eq3AMM9zWjgUsi%2BkhNVYEfx44MNTp%2BbKXF9VkvJjOXezM4ZDsyx%2FRGy%2B012b1K3n6vdhikITtauuycwzRQ%2FVTPd0YL0w9PTMAMnhUD03XreSsKD5%2Bu0KClKgYrNSvn4TC8Jm1WPXPkPMAGRBZmC8QLYP0hBIXCVLpu6uuG1KG2GVU2c%2FIgvcrv30nrxSxjBVEt76WKA5Ox9pSFPQrtv5NPtLSyUgBln%2Ff55p3121bQ3SKyV5nGRBNU32zaxLETsy3ztIsQ%2FDG0JLQHQPvS3NjG5So87l5UuujKJKNjoKnmDcx2tQY4O1L5dni8k5uQpsbwdTJ6W9Ob2atml53GC8ycaaN39%2FkaUbzXijhlnmbUGz2olurpKvGOBVcjpXTHPTpvi%2F6e16uRPXq5pY63pPjUW7waBZXh8byVr34OvQd8LLhlEHKwBavlQOoHqvsc0cbawuW2BDBUmkWKVhAc4IxF27E%2FoDAMm8qu80PSzO%2BWU0A0rCq%2BCd9x0K22zWoh9DQAxf%2FFjZNQ65D%2FsMQW8k8oz3ULWnLIAgytZ8GP0P1utDIgiJn6KZMkSQqNhwnYQER8mXP5VZA2aCMsiGrHM7MHOoROCHJisrPt6Rff%2B17JBaflV4hzKK%2BGWl07Dy7KYjCso6q%2FBjqkASx6Y%2BaYq9n%2FIIfkMgyJf%2F7D%2FJQ%2BCeRcEfM36Hm8RNt7L%2FoFvbszq8d%2BErZa9HJ4SntvsOpyOec6cr02p%2FKjPu%2FO%2B7WN4lT66KMFUMfVGcEI1Qill9rWgGQZ8h6Q2UvRsvxNLMFJL2ZBC3CY3lGx9cNEfeTMbax8C94f%2FCzZJ3nBhM0g%2F%2BzXNkTloh6OTTCtXiJjb%2BttWemOSn%2F8XQx%2BomwM%2FJRI&X-Amz-Signature=4ef32999a6f79c652c9c43120060210c5ccd02f64f37ba759bbc6da8ae834c9b&X-Amz-SignedHeaders=host&x-id=GetObject)
