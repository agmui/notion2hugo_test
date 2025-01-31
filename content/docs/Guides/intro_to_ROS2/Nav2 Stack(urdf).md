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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457ULUKT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXRWvTanTZN73sadbBMyEg0fIQAP65JfM6rQdctOGUgIgB3GuhtI9q8WyW5nWAdIgHNnrsL5x77HK5cDc8teoouMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbPVbNng8wxuZqvTircA%2FA8B%2Brre%2F5CYCkmdmh0WOjh7loShyDEfdMO3hSJgnUVNBTyK9j5ab53vtWgQBQBQg3MdDe0oxqYmluFjHTkjONbY67O54RnS9BfCVuqXPCqyDsqs5U8hAQuj3I0NLBRMFKVixuOZtMsgIUI1rzpKUJfylyBTiDE%2BrQdUbp5BFYpMOPoy24y9wswC7AMRxaT9CclCeR1BSznR1kRUY9dqBHuYcLvU8fblePkD2OAH8mtIdbuX1SN2ztWsuwKQCBrmTnNpVRKkkh8%2BSH9pWT6UXtm7%2B2foN7SiyCR4Ab1sBeMi2JYErC9GawC8sZlNDDWc7JXJmsTvIGM8NZUBos9wN9FwXCQG6JkaqTfWSTN%2FLKZ69gKhnkGV3SUcqb6ettlBJALvOoHQelTdzCSNHUVmMWBcHadKXYI1tvoiu3eFFskmcV4JsdCYN0CzamtANQyiORrNXECcCjxRbqJbH0o%2BegLKS5gIESz7bgU4tMIU4tB4AvzXw04RCzv5PlNG9zVfszZsy73Q4siiBgzSI2xb2sHWOd1UjZUrXFg4xo7A4MyZmX%2B0HkfNCt1uQYPx%2FMz%2BNiniaxZLkJCLINKsRZgB9topUKgQ6jE02KLOxDRoVpU6BAbT0z%2BaKJGgex%2FMKia8LwGOqUB6wuhZ5pdQSUxtoq6QFOWYS1l46OxNYoLDDFu9PljeSXqlMt6nZ4YSAh6SpietLq7ql4cA4uEc5ddu0svjaZgcteh3vvDisRnkGynx%2Bj7KXxVgiLWWU%2Fzj3LWCFDFEduoWvyU8ISY2MMoFhDIR0aqewxvemW9fwilXZzt4AHrTNiLXp3kYswVx4OAGtX0YPsBsYi%2F2gXqO9W2ZMNL7w9fWH8fo3ak&X-Amz-Signature=c9b894af470d3e12f59e5e0145e736bddb370f390f89c20a01c6977a2eb79dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457ULUKT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXRWvTanTZN73sadbBMyEg0fIQAP65JfM6rQdctOGUgIgB3GuhtI9q8WyW5nWAdIgHNnrsL5x77HK5cDc8teoouMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbPVbNng8wxuZqvTircA%2FA8B%2Brre%2F5CYCkmdmh0WOjh7loShyDEfdMO3hSJgnUVNBTyK9j5ab53vtWgQBQBQg3MdDe0oxqYmluFjHTkjONbY67O54RnS9BfCVuqXPCqyDsqs5U8hAQuj3I0NLBRMFKVixuOZtMsgIUI1rzpKUJfylyBTiDE%2BrQdUbp5BFYpMOPoy24y9wswC7AMRxaT9CclCeR1BSznR1kRUY9dqBHuYcLvU8fblePkD2OAH8mtIdbuX1SN2ztWsuwKQCBrmTnNpVRKkkh8%2BSH9pWT6UXtm7%2B2foN7SiyCR4Ab1sBeMi2JYErC9GawC8sZlNDDWc7JXJmsTvIGM8NZUBos9wN9FwXCQG6JkaqTfWSTN%2FLKZ69gKhnkGV3SUcqb6ettlBJALvOoHQelTdzCSNHUVmMWBcHadKXYI1tvoiu3eFFskmcV4JsdCYN0CzamtANQyiORrNXECcCjxRbqJbH0o%2BegLKS5gIESz7bgU4tMIU4tB4AvzXw04RCzv5PlNG9zVfszZsy73Q4siiBgzSI2xb2sHWOd1UjZUrXFg4xo7A4MyZmX%2B0HkfNCt1uQYPx%2FMz%2BNiniaxZLkJCLINKsRZgB9topUKgQ6jE02KLOxDRoVpU6BAbT0z%2BaKJGgex%2FMKia8LwGOqUB6wuhZ5pdQSUxtoq6QFOWYS1l46OxNYoLDDFu9PljeSXqlMt6nZ4YSAh6SpietLq7ql4cA4uEc5ddu0svjaZgcteh3vvDisRnkGynx%2Bj7KXxVgiLWWU%2Fzj3LWCFDFEduoWvyU8ISY2MMoFhDIR0aqewxvemW9fwilXZzt4AHrTNiLXp3kYswVx4OAGtX0YPsBsYi%2F2gXqO9W2ZMNL7w9fWH8fo3ak&X-Amz-Signature=4761a9b76fada287245f11f72ae18d8345994ba9e77c630eaf5fdf2cb44b335b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457ULUKT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXRWvTanTZN73sadbBMyEg0fIQAP65JfM6rQdctOGUgIgB3GuhtI9q8WyW5nWAdIgHNnrsL5x77HK5cDc8teoouMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbPVbNng8wxuZqvTircA%2FA8B%2Brre%2F5CYCkmdmh0WOjh7loShyDEfdMO3hSJgnUVNBTyK9j5ab53vtWgQBQBQg3MdDe0oxqYmluFjHTkjONbY67O54RnS9BfCVuqXPCqyDsqs5U8hAQuj3I0NLBRMFKVixuOZtMsgIUI1rzpKUJfylyBTiDE%2BrQdUbp5BFYpMOPoy24y9wswC7AMRxaT9CclCeR1BSznR1kRUY9dqBHuYcLvU8fblePkD2OAH8mtIdbuX1SN2ztWsuwKQCBrmTnNpVRKkkh8%2BSH9pWT6UXtm7%2B2foN7SiyCR4Ab1sBeMi2JYErC9GawC8sZlNDDWc7JXJmsTvIGM8NZUBos9wN9FwXCQG6JkaqTfWSTN%2FLKZ69gKhnkGV3SUcqb6ettlBJALvOoHQelTdzCSNHUVmMWBcHadKXYI1tvoiu3eFFskmcV4JsdCYN0CzamtANQyiORrNXECcCjxRbqJbH0o%2BegLKS5gIESz7bgU4tMIU4tB4AvzXw04RCzv5PlNG9zVfszZsy73Q4siiBgzSI2xb2sHWOd1UjZUrXFg4xo7A4MyZmX%2B0HkfNCt1uQYPx%2FMz%2BNiniaxZLkJCLINKsRZgB9topUKgQ6jE02KLOxDRoVpU6BAbT0z%2BaKJGgex%2FMKia8LwGOqUB6wuhZ5pdQSUxtoq6QFOWYS1l46OxNYoLDDFu9PljeSXqlMt6nZ4YSAh6SpietLq7ql4cA4uEc5ddu0svjaZgcteh3vvDisRnkGynx%2Bj7KXxVgiLWWU%2Fzj3LWCFDFEduoWvyU8ISY2MMoFhDIR0aqewxvemW9fwilXZzt4AHrTNiLXp3kYswVx4OAGtX0YPsBsYi%2F2gXqO9W2ZMNL7w9fWH8fo3ak&X-Amz-Signature=51bc0eade73982823d7fed85247e29a964ac62b17f04f2f54b7c146ed7f58874&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457ULUKT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXRWvTanTZN73sadbBMyEg0fIQAP65JfM6rQdctOGUgIgB3GuhtI9q8WyW5nWAdIgHNnrsL5x77HK5cDc8teoouMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbPVbNng8wxuZqvTircA%2FA8B%2Brre%2F5CYCkmdmh0WOjh7loShyDEfdMO3hSJgnUVNBTyK9j5ab53vtWgQBQBQg3MdDe0oxqYmluFjHTkjONbY67O54RnS9BfCVuqXPCqyDsqs5U8hAQuj3I0NLBRMFKVixuOZtMsgIUI1rzpKUJfylyBTiDE%2BrQdUbp5BFYpMOPoy24y9wswC7AMRxaT9CclCeR1BSznR1kRUY9dqBHuYcLvU8fblePkD2OAH8mtIdbuX1SN2ztWsuwKQCBrmTnNpVRKkkh8%2BSH9pWT6UXtm7%2B2foN7SiyCR4Ab1sBeMi2JYErC9GawC8sZlNDDWc7JXJmsTvIGM8NZUBos9wN9FwXCQG6JkaqTfWSTN%2FLKZ69gKhnkGV3SUcqb6ettlBJALvOoHQelTdzCSNHUVmMWBcHadKXYI1tvoiu3eFFskmcV4JsdCYN0CzamtANQyiORrNXECcCjxRbqJbH0o%2BegLKS5gIESz7bgU4tMIU4tB4AvzXw04RCzv5PlNG9zVfszZsy73Q4siiBgzSI2xb2sHWOd1UjZUrXFg4xo7A4MyZmX%2B0HkfNCt1uQYPx%2FMz%2BNiniaxZLkJCLINKsRZgB9topUKgQ6jE02KLOxDRoVpU6BAbT0z%2BaKJGgex%2FMKia8LwGOqUB6wuhZ5pdQSUxtoq6QFOWYS1l46OxNYoLDDFu9PljeSXqlMt6nZ4YSAh6SpietLq7ql4cA4uEc5ddu0svjaZgcteh3vvDisRnkGynx%2Bj7KXxVgiLWWU%2Fzj3LWCFDFEduoWvyU8ISY2MMoFhDIR0aqewxvemW9fwilXZzt4AHrTNiLXp3kYswVx4OAGtX0YPsBsYi%2F2gXqO9W2ZMNL7w9fWH8fo3ak&X-Amz-Signature=0494e635f0be1e011d5fdc6827c57bc6ca8027555f628850b1c517bb24aebc96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457ULUKT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXRWvTanTZN73sadbBMyEg0fIQAP65JfM6rQdctOGUgIgB3GuhtI9q8WyW5nWAdIgHNnrsL5x77HK5cDc8teoouMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbPVbNng8wxuZqvTircA%2FA8B%2Brre%2F5CYCkmdmh0WOjh7loShyDEfdMO3hSJgnUVNBTyK9j5ab53vtWgQBQBQg3MdDe0oxqYmluFjHTkjONbY67O54RnS9BfCVuqXPCqyDsqs5U8hAQuj3I0NLBRMFKVixuOZtMsgIUI1rzpKUJfylyBTiDE%2BrQdUbp5BFYpMOPoy24y9wswC7AMRxaT9CclCeR1BSznR1kRUY9dqBHuYcLvU8fblePkD2OAH8mtIdbuX1SN2ztWsuwKQCBrmTnNpVRKkkh8%2BSH9pWT6UXtm7%2B2foN7SiyCR4Ab1sBeMi2JYErC9GawC8sZlNDDWc7JXJmsTvIGM8NZUBos9wN9FwXCQG6JkaqTfWSTN%2FLKZ69gKhnkGV3SUcqb6ettlBJALvOoHQelTdzCSNHUVmMWBcHadKXYI1tvoiu3eFFskmcV4JsdCYN0CzamtANQyiORrNXECcCjxRbqJbH0o%2BegLKS5gIESz7bgU4tMIU4tB4AvzXw04RCzv5PlNG9zVfszZsy73Q4siiBgzSI2xb2sHWOd1UjZUrXFg4xo7A4MyZmX%2B0HkfNCt1uQYPx%2FMz%2BNiniaxZLkJCLINKsRZgB9topUKgQ6jE02KLOxDRoVpU6BAbT0z%2BaKJGgex%2FMKia8LwGOqUB6wuhZ5pdQSUxtoq6QFOWYS1l46OxNYoLDDFu9PljeSXqlMt6nZ4YSAh6SpietLq7ql4cA4uEc5ddu0svjaZgcteh3vvDisRnkGynx%2Bj7KXxVgiLWWU%2Fzj3LWCFDFEduoWvyU8ISY2MMoFhDIR0aqewxvemW9fwilXZzt4AHrTNiLXp3kYswVx4OAGtX0YPsBsYi%2F2gXqO9W2ZMNL7w9fWH8fo3ak&X-Amz-Signature=e64558470d58214cc0a4ac1c2cef7ed5721d6cb848f514725df7f0b1672e0631&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457ULUKT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmXRWvTanTZN73sadbBMyEg0fIQAP65JfM6rQdctOGUgIgB3GuhtI9q8WyW5nWAdIgHNnrsL5x77HK5cDc8teoouMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbPVbNng8wxuZqvTircA%2FA8B%2Brre%2F5CYCkmdmh0WOjh7loShyDEfdMO3hSJgnUVNBTyK9j5ab53vtWgQBQBQg3MdDe0oxqYmluFjHTkjONbY67O54RnS9BfCVuqXPCqyDsqs5U8hAQuj3I0NLBRMFKVixuOZtMsgIUI1rzpKUJfylyBTiDE%2BrQdUbp5BFYpMOPoy24y9wswC7AMRxaT9CclCeR1BSznR1kRUY9dqBHuYcLvU8fblePkD2OAH8mtIdbuX1SN2ztWsuwKQCBrmTnNpVRKkkh8%2BSH9pWT6UXtm7%2B2foN7SiyCR4Ab1sBeMi2JYErC9GawC8sZlNDDWc7JXJmsTvIGM8NZUBos9wN9FwXCQG6JkaqTfWSTN%2FLKZ69gKhnkGV3SUcqb6ettlBJALvOoHQelTdzCSNHUVmMWBcHadKXYI1tvoiu3eFFskmcV4JsdCYN0CzamtANQyiORrNXECcCjxRbqJbH0o%2BegLKS5gIESz7bgU4tMIU4tB4AvzXw04RCzv5PlNG9zVfszZsy73Q4siiBgzSI2xb2sHWOd1UjZUrXFg4xo7A4MyZmX%2B0HkfNCt1uQYPx%2FMz%2BNiniaxZLkJCLINKsRZgB9topUKgQ6jE02KLOxDRoVpU6BAbT0z%2BaKJGgex%2FMKia8LwGOqUB6wuhZ5pdQSUxtoq6QFOWYS1l46OxNYoLDDFu9PljeSXqlMt6nZ4YSAh6SpietLq7ql4cA4uEc5ddu0svjaZgcteh3vvDisRnkGynx%2Bj7KXxVgiLWWU%2Fzj3LWCFDFEduoWvyU8ISY2MMoFhDIR0aqewxvemW9fwilXZzt4AHrTNiLXp3kYswVx4OAGtX0YPsBsYi%2F2gXqO9W2ZMNL7w9fWH8fo3ak&X-Amz-Signature=a5db7e6e332da04cdd778fd0b18f1f6930a1af09349a7a45cec9753ae8f36a33&X-Amz-SignedHeaders=host&x-id=GetObject)
