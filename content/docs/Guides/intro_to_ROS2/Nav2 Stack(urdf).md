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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5TFFIZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8tv2ahtyJ0vxBuwCLy%2BAwx8Hu79tN8Q7MUXIj1bV6QIhAKVhJETstwzOwttKYgA1%2FH416tWuNiQMYeehxJOc7WJ%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrq%2FjJwJoisEewC1gq3AM62mbiDmYTDm9YX%2BwML3H7BYPdqz2FjwJ4NDDto%2Fpb8yXS%2FxQeFUSY4zgUq0a52WJuc4gUGY9BQb%2Bd0pCnloxNPMJTNVCRk8JwzTliTqF%2BHNkbbYaUtyoi40fwiKtulld13dMUg86x3v74FkBJbPQ00rxb0bKu4L7iVav5rqhsEjhi%2FnwvH3%2FhIzABlVCp4MBp8uoimcWCGYAOApc8NpehkzCKzytb1W59KZDCVbYGXa3vWe37oWIcgabyH%2Bpkjh2MtxDQ0jU8MzFxEPW6KGJoax4IxsvN3OVB1bAAv9LFEmjaoAzsrBV61fZQjnumbDOGb34jRlDe72%2BLRHwD6MbzGV1LeXSlwueSYVUEvza2etjeRvkM3LUjU16y4CKkuvIH0ERNMY%2Fbm2rU34B6v5EGYKuSlcxiu%2BTiXDWsd%2F1xlK%2B2JJE1pbFBLv%2F3vz3MQBggbUDRDGlsd06d%2F0faM9KjvuImOt8ndcZ1n4hwAi6XL8DhjnuJLJUsP4pPGY%2BTo8T0AUcdfRjbjn14LSt94uwXF2tuoVvhWCWl43AQgianUZziLXL%2FvZDYyKocmi%2FyOee3ohvu91JuSpwKhzTyQF2yxY8QgP1jX2hvlVFPwmZBojVjw1HiSQYvUwSlSjCx9IDDBjqkAVSbHDqKqGKt4mhDQssavW2WPscrokJMPXGScOVFPlUEwkze%2B40Foy1SA6Q4FfWhUEWtvDTrtKORiaCbSu5I1zeagqlsyHfJW4oy4GvvJziKVdrJ0awiM%2FdyTKm4BE3M%2FbmS%2FYnK44GKDK7Y2PIrelZ6MGuSFhFOz0r6Kr%2BIRHTMUcMGqva4QZedA02fRZjBmCSYqI%2BS7I3GAYbWH4%2B9SUT8btfm&X-Amz-Signature=a1ea45728c2d15afb1873dddf76c53ef7afbfffb4213e13f2ef8907e8134dc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5TFFIZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8tv2ahtyJ0vxBuwCLy%2BAwx8Hu79tN8Q7MUXIj1bV6QIhAKVhJETstwzOwttKYgA1%2FH416tWuNiQMYeehxJOc7WJ%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrq%2FjJwJoisEewC1gq3AM62mbiDmYTDm9YX%2BwML3H7BYPdqz2FjwJ4NDDto%2Fpb8yXS%2FxQeFUSY4zgUq0a52WJuc4gUGY9BQb%2Bd0pCnloxNPMJTNVCRk8JwzTliTqF%2BHNkbbYaUtyoi40fwiKtulld13dMUg86x3v74FkBJbPQ00rxb0bKu4L7iVav5rqhsEjhi%2FnwvH3%2FhIzABlVCp4MBp8uoimcWCGYAOApc8NpehkzCKzytb1W59KZDCVbYGXa3vWe37oWIcgabyH%2Bpkjh2MtxDQ0jU8MzFxEPW6KGJoax4IxsvN3OVB1bAAv9LFEmjaoAzsrBV61fZQjnumbDOGb34jRlDe72%2BLRHwD6MbzGV1LeXSlwueSYVUEvza2etjeRvkM3LUjU16y4CKkuvIH0ERNMY%2Fbm2rU34B6v5EGYKuSlcxiu%2BTiXDWsd%2F1xlK%2B2JJE1pbFBLv%2F3vz3MQBggbUDRDGlsd06d%2F0faM9KjvuImOt8ndcZ1n4hwAi6XL8DhjnuJLJUsP4pPGY%2BTo8T0AUcdfRjbjn14LSt94uwXF2tuoVvhWCWl43AQgianUZziLXL%2FvZDYyKocmi%2FyOee3ohvu91JuSpwKhzTyQF2yxY8QgP1jX2hvlVFPwmZBojVjw1HiSQYvUwSlSjCx9IDDBjqkAVSbHDqKqGKt4mhDQssavW2WPscrokJMPXGScOVFPlUEwkze%2B40Foy1SA6Q4FfWhUEWtvDTrtKORiaCbSu5I1zeagqlsyHfJW4oy4GvvJziKVdrJ0awiM%2FdyTKm4BE3M%2FbmS%2FYnK44GKDK7Y2PIrelZ6MGuSFhFOz0r6Kr%2BIRHTMUcMGqva4QZedA02fRZjBmCSYqI%2BS7I3GAYbWH4%2B9SUT8btfm&X-Amz-Signature=985e54c5fe0bfc637133f26ed7a67954eb031e1b04a72494524722617efecb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5TFFIZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8tv2ahtyJ0vxBuwCLy%2BAwx8Hu79tN8Q7MUXIj1bV6QIhAKVhJETstwzOwttKYgA1%2FH416tWuNiQMYeehxJOc7WJ%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrq%2FjJwJoisEewC1gq3AM62mbiDmYTDm9YX%2BwML3H7BYPdqz2FjwJ4NDDto%2Fpb8yXS%2FxQeFUSY4zgUq0a52WJuc4gUGY9BQb%2Bd0pCnloxNPMJTNVCRk8JwzTliTqF%2BHNkbbYaUtyoi40fwiKtulld13dMUg86x3v74FkBJbPQ00rxb0bKu4L7iVav5rqhsEjhi%2FnwvH3%2FhIzABlVCp4MBp8uoimcWCGYAOApc8NpehkzCKzytb1W59KZDCVbYGXa3vWe37oWIcgabyH%2Bpkjh2MtxDQ0jU8MzFxEPW6KGJoax4IxsvN3OVB1bAAv9LFEmjaoAzsrBV61fZQjnumbDOGb34jRlDe72%2BLRHwD6MbzGV1LeXSlwueSYVUEvza2etjeRvkM3LUjU16y4CKkuvIH0ERNMY%2Fbm2rU34B6v5EGYKuSlcxiu%2BTiXDWsd%2F1xlK%2B2JJE1pbFBLv%2F3vz3MQBggbUDRDGlsd06d%2F0faM9KjvuImOt8ndcZ1n4hwAi6XL8DhjnuJLJUsP4pPGY%2BTo8T0AUcdfRjbjn14LSt94uwXF2tuoVvhWCWl43AQgianUZziLXL%2FvZDYyKocmi%2FyOee3ohvu91JuSpwKhzTyQF2yxY8QgP1jX2hvlVFPwmZBojVjw1HiSQYvUwSlSjCx9IDDBjqkAVSbHDqKqGKt4mhDQssavW2WPscrokJMPXGScOVFPlUEwkze%2B40Foy1SA6Q4FfWhUEWtvDTrtKORiaCbSu5I1zeagqlsyHfJW4oy4GvvJziKVdrJ0awiM%2FdyTKm4BE3M%2FbmS%2FYnK44GKDK7Y2PIrelZ6MGuSFhFOz0r6Kr%2BIRHTMUcMGqva4QZedA02fRZjBmCSYqI%2BS7I3GAYbWH4%2B9SUT8btfm&X-Amz-Signature=50d3d52a78c47852f439bf1c7ef2119a35ab80688ec348f55848354e30303b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5TFFIZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8tv2ahtyJ0vxBuwCLy%2BAwx8Hu79tN8Q7MUXIj1bV6QIhAKVhJETstwzOwttKYgA1%2FH416tWuNiQMYeehxJOc7WJ%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrq%2FjJwJoisEewC1gq3AM62mbiDmYTDm9YX%2BwML3H7BYPdqz2FjwJ4NDDto%2Fpb8yXS%2FxQeFUSY4zgUq0a52WJuc4gUGY9BQb%2Bd0pCnloxNPMJTNVCRk8JwzTliTqF%2BHNkbbYaUtyoi40fwiKtulld13dMUg86x3v74FkBJbPQ00rxb0bKu4L7iVav5rqhsEjhi%2FnwvH3%2FhIzABlVCp4MBp8uoimcWCGYAOApc8NpehkzCKzytb1W59KZDCVbYGXa3vWe37oWIcgabyH%2Bpkjh2MtxDQ0jU8MzFxEPW6KGJoax4IxsvN3OVB1bAAv9LFEmjaoAzsrBV61fZQjnumbDOGb34jRlDe72%2BLRHwD6MbzGV1LeXSlwueSYVUEvza2etjeRvkM3LUjU16y4CKkuvIH0ERNMY%2Fbm2rU34B6v5EGYKuSlcxiu%2BTiXDWsd%2F1xlK%2B2JJE1pbFBLv%2F3vz3MQBggbUDRDGlsd06d%2F0faM9KjvuImOt8ndcZ1n4hwAi6XL8DhjnuJLJUsP4pPGY%2BTo8T0AUcdfRjbjn14LSt94uwXF2tuoVvhWCWl43AQgianUZziLXL%2FvZDYyKocmi%2FyOee3ohvu91JuSpwKhzTyQF2yxY8QgP1jX2hvlVFPwmZBojVjw1HiSQYvUwSlSjCx9IDDBjqkAVSbHDqKqGKt4mhDQssavW2WPscrokJMPXGScOVFPlUEwkze%2B40Foy1SA6Q4FfWhUEWtvDTrtKORiaCbSu5I1zeagqlsyHfJW4oy4GvvJziKVdrJ0awiM%2FdyTKm4BE3M%2FbmS%2FYnK44GKDK7Y2PIrelZ6MGuSFhFOz0r6Kr%2BIRHTMUcMGqva4QZedA02fRZjBmCSYqI%2BS7I3GAYbWH4%2B9SUT8btfm&X-Amz-Signature=12dd8fe66513c92450da29e9b38f2496ed184bd1d89390f51417c6b381fc3298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5TFFIZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8tv2ahtyJ0vxBuwCLy%2BAwx8Hu79tN8Q7MUXIj1bV6QIhAKVhJETstwzOwttKYgA1%2FH416tWuNiQMYeehxJOc7WJ%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrq%2FjJwJoisEewC1gq3AM62mbiDmYTDm9YX%2BwML3H7BYPdqz2FjwJ4NDDto%2Fpb8yXS%2FxQeFUSY4zgUq0a52WJuc4gUGY9BQb%2Bd0pCnloxNPMJTNVCRk8JwzTliTqF%2BHNkbbYaUtyoi40fwiKtulld13dMUg86x3v74FkBJbPQ00rxb0bKu4L7iVav5rqhsEjhi%2FnwvH3%2FhIzABlVCp4MBp8uoimcWCGYAOApc8NpehkzCKzytb1W59KZDCVbYGXa3vWe37oWIcgabyH%2Bpkjh2MtxDQ0jU8MzFxEPW6KGJoax4IxsvN3OVB1bAAv9LFEmjaoAzsrBV61fZQjnumbDOGb34jRlDe72%2BLRHwD6MbzGV1LeXSlwueSYVUEvza2etjeRvkM3LUjU16y4CKkuvIH0ERNMY%2Fbm2rU34B6v5EGYKuSlcxiu%2BTiXDWsd%2F1xlK%2B2JJE1pbFBLv%2F3vz3MQBggbUDRDGlsd06d%2F0faM9KjvuImOt8ndcZ1n4hwAi6XL8DhjnuJLJUsP4pPGY%2BTo8T0AUcdfRjbjn14LSt94uwXF2tuoVvhWCWl43AQgianUZziLXL%2FvZDYyKocmi%2FyOee3ohvu91JuSpwKhzTyQF2yxY8QgP1jX2hvlVFPwmZBojVjw1HiSQYvUwSlSjCx9IDDBjqkAVSbHDqKqGKt4mhDQssavW2WPscrokJMPXGScOVFPlUEwkze%2B40Foy1SA6Q4FfWhUEWtvDTrtKORiaCbSu5I1zeagqlsyHfJW4oy4GvvJziKVdrJ0awiM%2FdyTKm4BE3M%2FbmS%2FYnK44GKDK7Y2PIrelZ6MGuSFhFOz0r6Kr%2BIRHTMUcMGqva4QZedA02fRZjBmCSYqI%2BS7I3GAYbWH4%2B9SUT8btfm&X-Amz-Signature=f559963166fb6aacfd8f2e00d295748b2d00c5a70f18d03e4dc04b7bde6be5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH5TFFIZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy8tv2ahtyJ0vxBuwCLy%2BAwx8Hu79tN8Q7MUXIj1bV6QIhAKVhJETstwzOwttKYgA1%2FH416tWuNiQMYeehxJOc7WJ%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyrq%2FjJwJoisEewC1gq3AM62mbiDmYTDm9YX%2BwML3H7BYPdqz2FjwJ4NDDto%2Fpb8yXS%2FxQeFUSY4zgUq0a52WJuc4gUGY9BQb%2Bd0pCnloxNPMJTNVCRk8JwzTliTqF%2BHNkbbYaUtyoi40fwiKtulld13dMUg86x3v74FkBJbPQ00rxb0bKu4L7iVav5rqhsEjhi%2FnwvH3%2FhIzABlVCp4MBp8uoimcWCGYAOApc8NpehkzCKzytb1W59KZDCVbYGXa3vWe37oWIcgabyH%2Bpkjh2MtxDQ0jU8MzFxEPW6KGJoax4IxsvN3OVB1bAAv9LFEmjaoAzsrBV61fZQjnumbDOGb34jRlDe72%2BLRHwD6MbzGV1LeXSlwueSYVUEvza2etjeRvkM3LUjU16y4CKkuvIH0ERNMY%2Fbm2rU34B6v5EGYKuSlcxiu%2BTiXDWsd%2F1xlK%2B2JJE1pbFBLv%2F3vz3MQBggbUDRDGlsd06d%2F0faM9KjvuImOt8ndcZ1n4hwAi6XL8DhjnuJLJUsP4pPGY%2BTo8T0AUcdfRjbjn14LSt94uwXF2tuoVvhWCWl43AQgianUZziLXL%2FvZDYyKocmi%2FyOee3ohvu91JuSpwKhzTyQF2yxY8QgP1jX2hvlVFPwmZBojVjw1HiSQYvUwSlSjCx9IDDBjqkAVSbHDqKqGKt4mhDQssavW2WPscrokJMPXGScOVFPlUEwkze%2B40Foy1SA6Q4FfWhUEWtvDTrtKORiaCbSu5I1zeagqlsyHfJW4oy4GvvJziKVdrJ0awiM%2FdyTKm4BE3M%2FbmS%2FYnK44GKDK7Y2PIrelZ6MGuSFhFOz0r6Kr%2BIRHTMUcMGqva4QZedA02fRZjBmCSYqI%2BS7I3GAYbWH4%2B9SUT8btfm&X-Amz-Signature=916f2d8b0a665376e0e273049b578379e82bad429cf542f4edb6e389b7755b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
