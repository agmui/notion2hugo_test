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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCWD6J6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BRthTbQNIMJRDKpgxd9ZEw%2FL0pYzD0E5ElJBim9rvdwIhAIVBh%2F5tCHiCQozkx7LE8fgSk%2ByViYE%2Fz8GK4kyu2b02Kv8DCHMQABoMNjM3NDIzMTgzODA1Igxzuf3tXrNansZYKjcq3AMVNAoD0co34vXMErdlDYg5MTIHohogCNW0IGfXeb0zOLvSkQJ0MRmkA7%2BiSMim5Ml8e4EfGklkPPN3mSJcYAg0rxKz4YQFFjDWZfn52DNhJBdJ9IqNHRVqIGGKCQ1XahN9WSAGDiwoL%2Bsb91q43yTfsnI0OkeKqRgrCOYDfZpSzQaxQ0kONOCKLwrUppa3gel7njN0BszWj0uBdLei9BtZJ37vwJkEY7MDnt16fou7PIub%2FJmnmSUi%2FaZ9%2FeKk35qOiqD%2FxE8ByZg6kN0uzLQOi8s4IiqyqAydrYjgBkuMV7Ejxe4Fqfh8SoPw8AueBZuqVbHsF6dzbD%2BHjw9OyQxeS64nv%2FuL9PT4%2Bk55gJ3nbkDvf3FbtsPZu0Sg86e4KW3E6BV%2F4XQC9%2BFRqyPi%2BWEjt0KVcWVFVgR91tnP%2Fr3liTzYuacQowFf7hZpffzRmhIxDdtrC115RITvpIN0dFwILVB3CYnARlgXimyAm0XinLh1y9t1nFNKHonHXxHWicrvjgs7USMthZO66eic%2F6yX1cLtpIOCL6SyTtduwlgfYIBiynGpMQY3KtLnqCYeELzPMDRdJ4nas%2BWawVC14ti6oDmwJNiKDLkhd2kL9Mko0HWIn69GUixhCFpqRjDkkePDBjqkAXE6EuffqZu9VIOrfJ%2Bd%2FzbPTQmJAl%2B5xDc3UAg6Uj5RZE92fQwTPm9kz5Pi790bXW0rDikHbyEebeSPmYxAMJiCMYagfx0%2FUhegO%2FYibkIPorgGeBWs5fnkSFKZoDq8KsE38jY7rRnWggOsSpxYoLv0%2BH0Dnf5tQLqY6UOEix0hfEs9QYQ6JIqIbq4ffUTe0MZK3ZEmPAf35ghcbyVTWRA2pz3f&X-Amz-Signature=339b50a5c5776b5bd4dd4390d2d07f163731373de4774a1ccbb8d23a2b9698c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCWD6J6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BRthTbQNIMJRDKpgxd9ZEw%2FL0pYzD0E5ElJBim9rvdwIhAIVBh%2F5tCHiCQozkx7LE8fgSk%2ByViYE%2Fz8GK4kyu2b02Kv8DCHMQABoMNjM3NDIzMTgzODA1Igxzuf3tXrNansZYKjcq3AMVNAoD0co34vXMErdlDYg5MTIHohogCNW0IGfXeb0zOLvSkQJ0MRmkA7%2BiSMim5Ml8e4EfGklkPPN3mSJcYAg0rxKz4YQFFjDWZfn52DNhJBdJ9IqNHRVqIGGKCQ1XahN9WSAGDiwoL%2Bsb91q43yTfsnI0OkeKqRgrCOYDfZpSzQaxQ0kONOCKLwrUppa3gel7njN0BszWj0uBdLei9BtZJ37vwJkEY7MDnt16fou7PIub%2FJmnmSUi%2FaZ9%2FeKk35qOiqD%2FxE8ByZg6kN0uzLQOi8s4IiqyqAydrYjgBkuMV7Ejxe4Fqfh8SoPw8AueBZuqVbHsF6dzbD%2BHjw9OyQxeS64nv%2FuL9PT4%2Bk55gJ3nbkDvf3FbtsPZu0Sg86e4KW3E6BV%2F4XQC9%2BFRqyPi%2BWEjt0KVcWVFVgR91tnP%2Fr3liTzYuacQowFf7hZpffzRmhIxDdtrC115RITvpIN0dFwILVB3CYnARlgXimyAm0XinLh1y9t1nFNKHonHXxHWicrvjgs7USMthZO66eic%2F6yX1cLtpIOCL6SyTtduwlgfYIBiynGpMQY3KtLnqCYeELzPMDRdJ4nas%2BWawVC14ti6oDmwJNiKDLkhd2kL9Mko0HWIn69GUixhCFpqRjDkkePDBjqkAXE6EuffqZu9VIOrfJ%2Bd%2FzbPTQmJAl%2B5xDc3UAg6Uj5RZE92fQwTPm9kz5Pi790bXW0rDikHbyEebeSPmYxAMJiCMYagfx0%2FUhegO%2FYibkIPorgGeBWs5fnkSFKZoDq8KsE38jY7rRnWggOsSpxYoLv0%2BH0Dnf5tQLqY6UOEix0hfEs9QYQ6JIqIbq4ffUTe0MZK3ZEmPAf35ghcbyVTWRA2pz3f&X-Amz-Signature=e0637fce8f54fd1919f69146450a8cc4da08e622bdb3ac5ca6b697adab59137d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCWD6J6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BRthTbQNIMJRDKpgxd9ZEw%2FL0pYzD0E5ElJBim9rvdwIhAIVBh%2F5tCHiCQozkx7LE8fgSk%2ByViYE%2Fz8GK4kyu2b02Kv8DCHMQABoMNjM3NDIzMTgzODA1Igxzuf3tXrNansZYKjcq3AMVNAoD0co34vXMErdlDYg5MTIHohogCNW0IGfXeb0zOLvSkQJ0MRmkA7%2BiSMim5Ml8e4EfGklkPPN3mSJcYAg0rxKz4YQFFjDWZfn52DNhJBdJ9IqNHRVqIGGKCQ1XahN9WSAGDiwoL%2Bsb91q43yTfsnI0OkeKqRgrCOYDfZpSzQaxQ0kONOCKLwrUppa3gel7njN0BszWj0uBdLei9BtZJ37vwJkEY7MDnt16fou7PIub%2FJmnmSUi%2FaZ9%2FeKk35qOiqD%2FxE8ByZg6kN0uzLQOi8s4IiqyqAydrYjgBkuMV7Ejxe4Fqfh8SoPw8AueBZuqVbHsF6dzbD%2BHjw9OyQxeS64nv%2FuL9PT4%2Bk55gJ3nbkDvf3FbtsPZu0Sg86e4KW3E6BV%2F4XQC9%2BFRqyPi%2BWEjt0KVcWVFVgR91tnP%2Fr3liTzYuacQowFf7hZpffzRmhIxDdtrC115RITvpIN0dFwILVB3CYnARlgXimyAm0XinLh1y9t1nFNKHonHXxHWicrvjgs7USMthZO66eic%2F6yX1cLtpIOCL6SyTtduwlgfYIBiynGpMQY3KtLnqCYeELzPMDRdJ4nas%2BWawVC14ti6oDmwJNiKDLkhd2kL9Mko0HWIn69GUixhCFpqRjDkkePDBjqkAXE6EuffqZu9VIOrfJ%2Bd%2FzbPTQmJAl%2B5xDc3UAg6Uj5RZE92fQwTPm9kz5Pi790bXW0rDikHbyEebeSPmYxAMJiCMYagfx0%2FUhegO%2FYibkIPorgGeBWs5fnkSFKZoDq8KsE38jY7rRnWggOsSpxYoLv0%2BH0Dnf5tQLqY6UOEix0hfEs9QYQ6JIqIbq4ffUTe0MZK3ZEmPAf35ghcbyVTWRA2pz3f&X-Amz-Signature=eea5894f4230665fe45bebf4be44eab18e3a1d74aea7528b807aa78ff5c62415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCWD6J6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BRthTbQNIMJRDKpgxd9ZEw%2FL0pYzD0E5ElJBim9rvdwIhAIVBh%2F5tCHiCQozkx7LE8fgSk%2ByViYE%2Fz8GK4kyu2b02Kv8DCHMQABoMNjM3NDIzMTgzODA1Igxzuf3tXrNansZYKjcq3AMVNAoD0co34vXMErdlDYg5MTIHohogCNW0IGfXeb0zOLvSkQJ0MRmkA7%2BiSMim5Ml8e4EfGklkPPN3mSJcYAg0rxKz4YQFFjDWZfn52DNhJBdJ9IqNHRVqIGGKCQ1XahN9WSAGDiwoL%2Bsb91q43yTfsnI0OkeKqRgrCOYDfZpSzQaxQ0kONOCKLwrUppa3gel7njN0BszWj0uBdLei9BtZJ37vwJkEY7MDnt16fou7PIub%2FJmnmSUi%2FaZ9%2FeKk35qOiqD%2FxE8ByZg6kN0uzLQOi8s4IiqyqAydrYjgBkuMV7Ejxe4Fqfh8SoPw8AueBZuqVbHsF6dzbD%2BHjw9OyQxeS64nv%2FuL9PT4%2Bk55gJ3nbkDvf3FbtsPZu0Sg86e4KW3E6BV%2F4XQC9%2BFRqyPi%2BWEjt0KVcWVFVgR91tnP%2Fr3liTzYuacQowFf7hZpffzRmhIxDdtrC115RITvpIN0dFwILVB3CYnARlgXimyAm0XinLh1y9t1nFNKHonHXxHWicrvjgs7USMthZO66eic%2F6yX1cLtpIOCL6SyTtduwlgfYIBiynGpMQY3KtLnqCYeELzPMDRdJ4nas%2BWawVC14ti6oDmwJNiKDLkhd2kL9Mko0HWIn69GUixhCFpqRjDkkePDBjqkAXE6EuffqZu9VIOrfJ%2Bd%2FzbPTQmJAl%2B5xDc3UAg6Uj5RZE92fQwTPm9kz5Pi790bXW0rDikHbyEebeSPmYxAMJiCMYagfx0%2FUhegO%2FYibkIPorgGeBWs5fnkSFKZoDq8KsE38jY7rRnWggOsSpxYoLv0%2BH0Dnf5tQLqY6UOEix0hfEs9QYQ6JIqIbq4ffUTe0MZK3ZEmPAf35ghcbyVTWRA2pz3f&X-Amz-Signature=c023505625a4dac63f7b063c5bbd4e074b37d238b4a9817bff30790cd4a8affd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCWD6J6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BRthTbQNIMJRDKpgxd9ZEw%2FL0pYzD0E5ElJBim9rvdwIhAIVBh%2F5tCHiCQozkx7LE8fgSk%2ByViYE%2Fz8GK4kyu2b02Kv8DCHMQABoMNjM3NDIzMTgzODA1Igxzuf3tXrNansZYKjcq3AMVNAoD0co34vXMErdlDYg5MTIHohogCNW0IGfXeb0zOLvSkQJ0MRmkA7%2BiSMim5Ml8e4EfGklkPPN3mSJcYAg0rxKz4YQFFjDWZfn52DNhJBdJ9IqNHRVqIGGKCQ1XahN9WSAGDiwoL%2Bsb91q43yTfsnI0OkeKqRgrCOYDfZpSzQaxQ0kONOCKLwrUppa3gel7njN0BszWj0uBdLei9BtZJ37vwJkEY7MDnt16fou7PIub%2FJmnmSUi%2FaZ9%2FeKk35qOiqD%2FxE8ByZg6kN0uzLQOi8s4IiqyqAydrYjgBkuMV7Ejxe4Fqfh8SoPw8AueBZuqVbHsF6dzbD%2BHjw9OyQxeS64nv%2FuL9PT4%2Bk55gJ3nbkDvf3FbtsPZu0Sg86e4KW3E6BV%2F4XQC9%2BFRqyPi%2BWEjt0KVcWVFVgR91tnP%2Fr3liTzYuacQowFf7hZpffzRmhIxDdtrC115RITvpIN0dFwILVB3CYnARlgXimyAm0XinLh1y9t1nFNKHonHXxHWicrvjgs7USMthZO66eic%2F6yX1cLtpIOCL6SyTtduwlgfYIBiynGpMQY3KtLnqCYeELzPMDRdJ4nas%2BWawVC14ti6oDmwJNiKDLkhd2kL9Mko0HWIn69GUixhCFpqRjDkkePDBjqkAXE6EuffqZu9VIOrfJ%2Bd%2FzbPTQmJAl%2B5xDc3UAg6Uj5RZE92fQwTPm9kz5Pi790bXW0rDikHbyEebeSPmYxAMJiCMYagfx0%2FUhegO%2FYibkIPorgGeBWs5fnkSFKZoDq8KsE38jY7rRnWggOsSpxYoLv0%2BH0Dnf5tQLqY6UOEix0hfEs9QYQ6JIqIbq4ffUTe0MZK3ZEmPAf35ghcbyVTWRA2pz3f&X-Amz-Signature=e84c9e867aa6165534f9eaf201b662c7f003268b57f6a1558dd621097ea23267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PCWD6J6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD%2BRthTbQNIMJRDKpgxd9ZEw%2FL0pYzD0E5ElJBim9rvdwIhAIVBh%2F5tCHiCQozkx7LE8fgSk%2ByViYE%2Fz8GK4kyu2b02Kv8DCHMQABoMNjM3NDIzMTgzODA1Igxzuf3tXrNansZYKjcq3AMVNAoD0co34vXMErdlDYg5MTIHohogCNW0IGfXeb0zOLvSkQJ0MRmkA7%2BiSMim5Ml8e4EfGklkPPN3mSJcYAg0rxKz4YQFFjDWZfn52DNhJBdJ9IqNHRVqIGGKCQ1XahN9WSAGDiwoL%2Bsb91q43yTfsnI0OkeKqRgrCOYDfZpSzQaxQ0kONOCKLwrUppa3gel7njN0BszWj0uBdLei9BtZJ37vwJkEY7MDnt16fou7PIub%2FJmnmSUi%2FaZ9%2FeKk35qOiqD%2FxE8ByZg6kN0uzLQOi8s4IiqyqAydrYjgBkuMV7Ejxe4Fqfh8SoPw8AueBZuqVbHsF6dzbD%2BHjw9OyQxeS64nv%2FuL9PT4%2Bk55gJ3nbkDvf3FbtsPZu0Sg86e4KW3E6BV%2F4XQC9%2BFRqyPi%2BWEjt0KVcWVFVgR91tnP%2Fr3liTzYuacQowFf7hZpffzRmhIxDdtrC115RITvpIN0dFwILVB3CYnARlgXimyAm0XinLh1y9t1nFNKHonHXxHWicrvjgs7USMthZO66eic%2F6yX1cLtpIOCL6SyTtduwlgfYIBiynGpMQY3KtLnqCYeELzPMDRdJ4nas%2BWawVC14ti6oDmwJNiKDLkhd2kL9Mko0HWIn69GUixhCFpqRjDkkePDBjqkAXE6EuffqZu9VIOrfJ%2Bd%2FzbPTQmJAl%2B5xDc3UAg6Uj5RZE92fQwTPm9kz5Pi790bXW0rDikHbyEebeSPmYxAMJiCMYagfx0%2FUhegO%2FYibkIPorgGeBWs5fnkSFKZoDq8KsE38jY7rRnWggOsSpxYoLv0%2BH0Dnf5tQLqY6UOEix0hfEs9QYQ6JIqIbq4ffUTe0MZK3ZEmPAf35ghcbyVTWRA2pz3f&X-Amz-Signature=fe24e04c9510b762aee2d941e3ea6237dc99ee40576e967bf8e08bf3e327e7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
