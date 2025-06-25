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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUGTW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzqcBRCGYfvSNZzJPxnvAVH8wYAAIwic5H3Lmup8CrgQIhAKGYxYCrHgaMZBtphEua9rPFAQu3QV1Ol%2BTL%2B0TCg2QYKv8DCEYQABoMNjM3NDIzMTgzODA1IgynZ0JEuOSPHPRphPcq3ANFZPXWgNG6JXP4jT8%2F%2FQoIio2xORdzfmTnGBUdcBZNbXfFx84N%2BSNfhygh28Lrnb8td7SZlATynQWYd4FCQ9k1hO%2B95M%2FSk5Kfz9ctSGgIF973L2RCvLkstJOMarKO8vGTncZcSF%2FWU7rVbXwCOutk%2FI6iL2FCGZnL9trco0qd0SvQLD20q0GOxGZhOok9Z9nAjrKsI9n65q0yt4xeLKkiNd3mjzd36DHzJq37LKil4OnjLYCtzTOi%2Bd3zXyb7wsN4kChXKtms9rIabyJ1z9xz%2BJxWDuQfIyOd%2FGqmWi%2F3t5Xup5xJC4zhjQXXkXqIXVI52oDZ896EvsJRsBkJs27RMtQvKyMK0ImwOenmvLVPrfD6VNLZM2g3VMoQ7LQEOYli0AJblBJIl47viE4jZzq0zEWhYTE9EfSnqxgFbV5mbeB1xn9MqiUj5oG3C0%2Bsm7jwovZV1WSHpbUGd2hSNg3RNS6YOManZCiNtQUwDeSzVyyYladiyxS3OogTy1cVOpiInOkk5nOCdZIO7bhGoUYEHb1aeiX9wOWJFTaDC9fJAusgZtZ5M%2BQFxxXnzChz9%2FTHCoWSfav3qRbqArpEPS8Sx9hqqG3oDo%2F7os65%2BCa0FkKbB9sSUHQkhAY%2FhjC%2F7u%2FCBjqkAQShtWXMTQVIgf%2FirWQZM0jABBGMkOsSN6pETmGHZZTb1zTsr4LbopRwgMVJwrtQcdVnLiVnMWN5N%2FFi0VpniZk%2B%2F%2BaRZeTXbslF5ojfeDnIXrlFx9R940oowEadiTbgCk5CYIIIAior6rs%2Fqe6Cd4LMg9WJvR%2BZSEKfaxW6jLOPrKdkiasz84hs2Q%2BU2KPyppBXwchT2WfheHIahRZdrua6Ryaw&X-Amz-Signature=0c7d307675848a7361c3a239ed7783738e193de46b21b5c8c3c7e6afdf166da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUGTW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzqcBRCGYfvSNZzJPxnvAVH8wYAAIwic5H3Lmup8CrgQIhAKGYxYCrHgaMZBtphEua9rPFAQu3QV1Ol%2BTL%2B0TCg2QYKv8DCEYQABoMNjM3NDIzMTgzODA1IgynZ0JEuOSPHPRphPcq3ANFZPXWgNG6JXP4jT8%2F%2FQoIio2xORdzfmTnGBUdcBZNbXfFx84N%2BSNfhygh28Lrnb8td7SZlATynQWYd4FCQ9k1hO%2B95M%2FSk5Kfz9ctSGgIF973L2RCvLkstJOMarKO8vGTncZcSF%2FWU7rVbXwCOutk%2FI6iL2FCGZnL9trco0qd0SvQLD20q0GOxGZhOok9Z9nAjrKsI9n65q0yt4xeLKkiNd3mjzd36DHzJq37LKil4OnjLYCtzTOi%2Bd3zXyb7wsN4kChXKtms9rIabyJ1z9xz%2BJxWDuQfIyOd%2FGqmWi%2F3t5Xup5xJC4zhjQXXkXqIXVI52oDZ896EvsJRsBkJs27RMtQvKyMK0ImwOenmvLVPrfD6VNLZM2g3VMoQ7LQEOYli0AJblBJIl47viE4jZzq0zEWhYTE9EfSnqxgFbV5mbeB1xn9MqiUj5oG3C0%2Bsm7jwovZV1WSHpbUGd2hSNg3RNS6YOManZCiNtQUwDeSzVyyYladiyxS3OogTy1cVOpiInOkk5nOCdZIO7bhGoUYEHb1aeiX9wOWJFTaDC9fJAusgZtZ5M%2BQFxxXnzChz9%2FTHCoWSfav3qRbqArpEPS8Sx9hqqG3oDo%2F7os65%2BCa0FkKbB9sSUHQkhAY%2FhjC%2F7u%2FCBjqkAQShtWXMTQVIgf%2FirWQZM0jABBGMkOsSN6pETmGHZZTb1zTsr4LbopRwgMVJwrtQcdVnLiVnMWN5N%2FFi0VpniZk%2B%2F%2BaRZeTXbslF5ojfeDnIXrlFx9R940oowEadiTbgCk5CYIIIAior6rs%2Fqe6Cd4LMg9WJvR%2BZSEKfaxW6jLOPrKdkiasz84hs2Q%2BU2KPyppBXwchT2WfheHIahRZdrua6Ryaw&X-Amz-Signature=27f7b35bbcaeb2a4763156fbf720934774d2ebd19ab57768ba61ea70c24e74cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUGTW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzqcBRCGYfvSNZzJPxnvAVH8wYAAIwic5H3Lmup8CrgQIhAKGYxYCrHgaMZBtphEua9rPFAQu3QV1Ol%2BTL%2B0TCg2QYKv8DCEYQABoMNjM3NDIzMTgzODA1IgynZ0JEuOSPHPRphPcq3ANFZPXWgNG6JXP4jT8%2F%2FQoIio2xORdzfmTnGBUdcBZNbXfFx84N%2BSNfhygh28Lrnb8td7SZlATynQWYd4FCQ9k1hO%2B95M%2FSk5Kfz9ctSGgIF973L2RCvLkstJOMarKO8vGTncZcSF%2FWU7rVbXwCOutk%2FI6iL2FCGZnL9trco0qd0SvQLD20q0GOxGZhOok9Z9nAjrKsI9n65q0yt4xeLKkiNd3mjzd36DHzJq37LKil4OnjLYCtzTOi%2Bd3zXyb7wsN4kChXKtms9rIabyJ1z9xz%2BJxWDuQfIyOd%2FGqmWi%2F3t5Xup5xJC4zhjQXXkXqIXVI52oDZ896EvsJRsBkJs27RMtQvKyMK0ImwOenmvLVPrfD6VNLZM2g3VMoQ7LQEOYli0AJblBJIl47viE4jZzq0zEWhYTE9EfSnqxgFbV5mbeB1xn9MqiUj5oG3C0%2Bsm7jwovZV1WSHpbUGd2hSNg3RNS6YOManZCiNtQUwDeSzVyyYladiyxS3OogTy1cVOpiInOkk5nOCdZIO7bhGoUYEHb1aeiX9wOWJFTaDC9fJAusgZtZ5M%2BQFxxXnzChz9%2FTHCoWSfav3qRbqArpEPS8Sx9hqqG3oDo%2F7os65%2BCa0FkKbB9sSUHQkhAY%2FhjC%2F7u%2FCBjqkAQShtWXMTQVIgf%2FirWQZM0jABBGMkOsSN6pETmGHZZTb1zTsr4LbopRwgMVJwrtQcdVnLiVnMWN5N%2FFi0VpniZk%2B%2F%2BaRZeTXbslF5ojfeDnIXrlFx9R940oowEadiTbgCk5CYIIIAior6rs%2Fqe6Cd4LMg9WJvR%2BZSEKfaxW6jLOPrKdkiasz84hs2Q%2BU2KPyppBXwchT2WfheHIahRZdrua6Ryaw&X-Amz-Signature=bb80f34d9bfbc5d307eb0224f19e0ad95b595122713a864572e3f10bc672d793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUGTW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzqcBRCGYfvSNZzJPxnvAVH8wYAAIwic5H3Lmup8CrgQIhAKGYxYCrHgaMZBtphEua9rPFAQu3QV1Ol%2BTL%2B0TCg2QYKv8DCEYQABoMNjM3NDIzMTgzODA1IgynZ0JEuOSPHPRphPcq3ANFZPXWgNG6JXP4jT8%2F%2FQoIio2xORdzfmTnGBUdcBZNbXfFx84N%2BSNfhygh28Lrnb8td7SZlATynQWYd4FCQ9k1hO%2B95M%2FSk5Kfz9ctSGgIF973L2RCvLkstJOMarKO8vGTncZcSF%2FWU7rVbXwCOutk%2FI6iL2FCGZnL9trco0qd0SvQLD20q0GOxGZhOok9Z9nAjrKsI9n65q0yt4xeLKkiNd3mjzd36DHzJq37LKil4OnjLYCtzTOi%2Bd3zXyb7wsN4kChXKtms9rIabyJ1z9xz%2BJxWDuQfIyOd%2FGqmWi%2F3t5Xup5xJC4zhjQXXkXqIXVI52oDZ896EvsJRsBkJs27RMtQvKyMK0ImwOenmvLVPrfD6VNLZM2g3VMoQ7LQEOYli0AJblBJIl47viE4jZzq0zEWhYTE9EfSnqxgFbV5mbeB1xn9MqiUj5oG3C0%2Bsm7jwovZV1WSHpbUGd2hSNg3RNS6YOManZCiNtQUwDeSzVyyYladiyxS3OogTy1cVOpiInOkk5nOCdZIO7bhGoUYEHb1aeiX9wOWJFTaDC9fJAusgZtZ5M%2BQFxxXnzChz9%2FTHCoWSfav3qRbqArpEPS8Sx9hqqG3oDo%2F7os65%2BCa0FkKbB9sSUHQkhAY%2FhjC%2F7u%2FCBjqkAQShtWXMTQVIgf%2FirWQZM0jABBGMkOsSN6pETmGHZZTb1zTsr4LbopRwgMVJwrtQcdVnLiVnMWN5N%2FFi0VpniZk%2B%2F%2BaRZeTXbslF5ojfeDnIXrlFx9R940oowEadiTbgCk5CYIIIAior6rs%2Fqe6Cd4LMg9WJvR%2BZSEKfaxW6jLOPrKdkiasz84hs2Q%2BU2KPyppBXwchT2WfheHIahRZdrua6Ryaw&X-Amz-Signature=d0fd7ed5db1cf0c6cad725f2f59f4558fc57289801000382eade711f2098139a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUGTW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzqcBRCGYfvSNZzJPxnvAVH8wYAAIwic5H3Lmup8CrgQIhAKGYxYCrHgaMZBtphEua9rPFAQu3QV1Ol%2BTL%2B0TCg2QYKv8DCEYQABoMNjM3NDIzMTgzODA1IgynZ0JEuOSPHPRphPcq3ANFZPXWgNG6JXP4jT8%2F%2FQoIio2xORdzfmTnGBUdcBZNbXfFx84N%2BSNfhygh28Lrnb8td7SZlATynQWYd4FCQ9k1hO%2B95M%2FSk5Kfz9ctSGgIF973L2RCvLkstJOMarKO8vGTncZcSF%2FWU7rVbXwCOutk%2FI6iL2FCGZnL9trco0qd0SvQLD20q0GOxGZhOok9Z9nAjrKsI9n65q0yt4xeLKkiNd3mjzd36DHzJq37LKil4OnjLYCtzTOi%2Bd3zXyb7wsN4kChXKtms9rIabyJ1z9xz%2BJxWDuQfIyOd%2FGqmWi%2F3t5Xup5xJC4zhjQXXkXqIXVI52oDZ896EvsJRsBkJs27RMtQvKyMK0ImwOenmvLVPrfD6VNLZM2g3VMoQ7LQEOYli0AJblBJIl47viE4jZzq0zEWhYTE9EfSnqxgFbV5mbeB1xn9MqiUj5oG3C0%2Bsm7jwovZV1WSHpbUGd2hSNg3RNS6YOManZCiNtQUwDeSzVyyYladiyxS3OogTy1cVOpiInOkk5nOCdZIO7bhGoUYEHb1aeiX9wOWJFTaDC9fJAusgZtZ5M%2BQFxxXnzChz9%2FTHCoWSfav3qRbqArpEPS8Sx9hqqG3oDo%2F7os65%2BCa0FkKbB9sSUHQkhAY%2FhjC%2F7u%2FCBjqkAQShtWXMTQVIgf%2FirWQZM0jABBGMkOsSN6pETmGHZZTb1zTsr4LbopRwgMVJwrtQcdVnLiVnMWN5N%2FFi0VpniZk%2B%2F%2BaRZeTXbslF5ojfeDnIXrlFx9R940oowEadiTbgCk5CYIIIAior6rs%2Fqe6Cd4LMg9WJvR%2BZSEKfaxW6jLOPrKdkiasz84hs2Q%2BU2KPyppBXwchT2WfheHIahRZdrua6Ryaw&X-Amz-Signature=17ca76c7f4d9a5dfaa9b5673d95f6871323c4ec3c8a032d2cccedee9400028f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUGTW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCzqcBRCGYfvSNZzJPxnvAVH8wYAAIwic5H3Lmup8CrgQIhAKGYxYCrHgaMZBtphEua9rPFAQu3QV1Ol%2BTL%2B0TCg2QYKv8DCEYQABoMNjM3NDIzMTgzODA1IgynZ0JEuOSPHPRphPcq3ANFZPXWgNG6JXP4jT8%2F%2FQoIio2xORdzfmTnGBUdcBZNbXfFx84N%2BSNfhygh28Lrnb8td7SZlATynQWYd4FCQ9k1hO%2B95M%2FSk5Kfz9ctSGgIF973L2RCvLkstJOMarKO8vGTncZcSF%2FWU7rVbXwCOutk%2FI6iL2FCGZnL9trco0qd0SvQLD20q0GOxGZhOok9Z9nAjrKsI9n65q0yt4xeLKkiNd3mjzd36DHzJq37LKil4OnjLYCtzTOi%2Bd3zXyb7wsN4kChXKtms9rIabyJ1z9xz%2BJxWDuQfIyOd%2FGqmWi%2F3t5Xup5xJC4zhjQXXkXqIXVI52oDZ896EvsJRsBkJs27RMtQvKyMK0ImwOenmvLVPrfD6VNLZM2g3VMoQ7LQEOYli0AJblBJIl47viE4jZzq0zEWhYTE9EfSnqxgFbV5mbeB1xn9MqiUj5oG3C0%2Bsm7jwovZV1WSHpbUGd2hSNg3RNS6YOManZCiNtQUwDeSzVyyYladiyxS3OogTy1cVOpiInOkk5nOCdZIO7bhGoUYEHb1aeiX9wOWJFTaDC9fJAusgZtZ5M%2BQFxxXnzChz9%2FTHCoWSfav3qRbqArpEPS8Sx9hqqG3oDo%2F7os65%2BCa0FkKbB9sSUHQkhAY%2FhjC%2F7u%2FCBjqkAQShtWXMTQVIgf%2FirWQZM0jABBGMkOsSN6pETmGHZZTb1zTsr4LbopRwgMVJwrtQcdVnLiVnMWN5N%2FFi0VpniZk%2B%2F%2BaRZeTXbslF5ojfeDnIXrlFx9R940oowEadiTbgCk5CYIIIAior6rs%2Fqe6Cd4LMg9WJvR%2BZSEKfaxW6jLOPrKdkiasz84hs2Q%2BU2KPyppBXwchT2WfheHIahRZdrua6Ryaw&X-Amz-Signature=e2e746793d450893be9cf5c222d4e142825d69ca9b5e811b5abd736f77b4a37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
