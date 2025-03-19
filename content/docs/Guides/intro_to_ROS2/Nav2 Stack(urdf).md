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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK42TGM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID19bmzGrqVdF%2B5qoSmrqiemWDdWQXzWhu74Eaqs0FeTAiBK3VWi%2BA7EERi%2F3Av14fHjC4aU%2FX89rkD39yML7wW1Sir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2%2BsfySZo4HMXADtzKtwDgnhoKdCEzLgi7MLRUnF3IkGnwqIVfzo7fln8Rq8Hk4%2BGuTlzNhbfmksxWufxaNTyYfB6OcynbFIsQ9rRu69RXHV7OJvrXOHBa7aR0Xh4MvbwuE%2FX08kvVWyeD3Nh6G3i0OyO4GHmBq8yZCWKH%2FosE5DwfwHgivUske4yQxsHYTpsrSb8pa10kVWV53ntO0jGP7hWRc337zTGOSmQwTuk21kMQQi9UCod3XlRmvOJ2En3RZd6Vsp9FXrGdR6N1K1P5RZmsuaZIT1oqY1TcLWBkqkRLyMfA%2FwEWg1UljQ5cfR%2BqW6QgBeGMAdSM7%2FYgSI2T3iI7fsLhGtkBtGQPKwaYx%2FTJEGn563M41RBa3suEur17%2FBgCvO1cQfg5%2B6Wd5Qin9GO2Xeaogam%2BjmvWkSOqge1xzK41RH4dkFkjHxrmsjYwoRGHC7F1STTqRiP2zu4S6cnsmh85Ip6v43coq%2FX1bSZSNO1xe1ON4Nj2ZiSD6asZk658RfmWyfShhVfKYuNSWI8mM%2B3GuL%2Fw3A5iP3NVbpkQlQpY4%2BC6VaJVUDtMyih%2F5RInrG%2BZT3B2ApX9nrCPiGbWCUXmGiRfftdLKJbhl395TCmvaIs8%2F%2F9AXmCqjakE0D1SwyXnMJHCM0w1Z3rvgY6pgHHQg63IDc2Db7LNggH7dyfZG3EyBDz4HLG6ytm%2BZUxxeasJ1uqojp4pjGwP4CZUOohR4Q0iEwD%2F3QhdeJrZIDO4eR8PhjfXUe4b6kylcqwshrcHeF86IzFUkBJekE0FWGcifZzCGln0ENwzF87UL0zJa4726Zb6cHx22fhXPxavt%2FSpKgQotRu0NKLiBBKERY%2Fji%2BF3cgfL70on5v20LvBU38Zq6z1&X-Amz-Signature=1b7bf3e4d5ebc54f73a98a931c3281ee857af72c43d5fe34712935e579c4fe4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK42TGM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID19bmzGrqVdF%2B5qoSmrqiemWDdWQXzWhu74Eaqs0FeTAiBK3VWi%2BA7EERi%2F3Av14fHjC4aU%2FX89rkD39yML7wW1Sir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2%2BsfySZo4HMXADtzKtwDgnhoKdCEzLgi7MLRUnF3IkGnwqIVfzo7fln8Rq8Hk4%2BGuTlzNhbfmksxWufxaNTyYfB6OcynbFIsQ9rRu69RXHV7OJvrXOHBa7aR0Xh4MvbwuE%2FX08kvVWyeD3Nh6G3i0OyO4GHmBq8yZCWKH%2FosE5DwfwHgivUske4yQxsHYTpsrSb8pa10kVWV53ntO0jGP7hWRc337zTGOSmQwTuk21kMQQi9UCod3XlRmvOJ2En3RZd6Vsp9FXrGdR6N1K1P5RZmsuaZIT1oqY1TcLWBkqkRLyMfA%2FwEWg1UljQ5cfR%2BqW6QgBeGMAdSM7%2FYgSI2T3iI7fsLhGtkBtGQPKwaYx%2FTJEGn563M41RBa3suEur17%2FBgCvO1cQfg5%2B6Wd5Qin9GO2Xeaogam%2BjmvWkSOqge1xzK41RH4dkFkjHxrmsjYwoRGHC7F1STTqRiP2zu4S6cnsmh85Ip6v43coq%2FX1bSZSNO1xe1ON4Nj2ZiSD6asZk658RfmWyfShhVfKYuNSWI8mM%2B3GuL%2Fw3A5iP3NVbpkQlQpY4%2BC6VaJVUDtMyih%2F5RInrG%2BZT3B2ApX9nrCPiGbWCUXmGiRfftdLKJbhl395TCmvaIs8%2F%2F9AXmCqjakE0D1SwyXnMJHCM0w1Z3rvgY6pgHHQg63IDc2Db7LNggH7dyfZG3EyBDz4HLG6ytm%2BZUxxeasJ1uqojp4pjGwP4CZUOohR4Q0iEwD%2F3QhdeJrZIDO4eR8PhjfXUe4b6kylcqwshrcHeF86IzFUkBJekE0FWGcifZzCGln0ENwzF87UL0zJa4726Zb6cHx22fhXPxavt%2FSpKgQotRu0NKLiBBKERY%2Fji%2BF3cgfL70on5v20LvBU38Zq6z1&X-Amz-Signature=2e88934f7bd036ab157e03e80dfcc8b0446bb058392d90041692fec227963873&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK42TGM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID19bmzGrqVdF%2B5qoSmrqiemWDdWQXzWhu74Eaqs0FeTAiBK3VWi%2BA7EERi%2F3Av14fHjC4aU%2FX89rkD39yML7wW1Sir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2%2BsfySZo4HMXADtzKtwDgnhoKdCEzLgi7MLRUnF3IkGnwqIVfzo7fln8Rq8Hk4%2BGuTlzNhbfmksxWufxaNTyYfB6OcynbFIsQ9rRu69RXHV7OJvrXOHBa7aR0Xh4MvbwuE%2FX08kvVWyeD3Nh6G3i0OyO4GHmBq8yZCWKH%2FosE5DwfwHgivUske4yQxsHYTpsrSb8pa10kVWV53ntO0jGP7hWRc337zTGOSmQwTuk21kMQQi9UCod3XlRmvOJ2En3RZd6Vsp9FXrGdR6N1K1P5RZmsuaZIT1oqY1TcLWBkqkRLyMfA%2FwEWg1UljQ5cfR%2BqW6QgBeGMAdSM7%2FYgSI2T3iI7fsLhGtkBtGQPKwaYx%2FTJEGn563M41RBa3suEur17%2FBgCvO1cQfg5%2B6Wd5Qin9GO2Xeaogam%2BjmvWkSOqge1xzK41RH4dkFkjHxrmsjYwoRGHC7F1STTqRiP2zu4S6cnsmh85Ip6v43coq%2FX1bSZSNO1xe1ON4Nj2ZiSD6asZk658RfmWyfShhVfKYuNSWI8mM%2B3GuL%2Fw3A5iP3NVbpkQlQpY4%2BC6VaJVUDtMyih%2F5RInrG%2BZT3B2ApX9nrCPiGbWCUXmGiRfftdLKJbhl395TCmvaIs8%2F%2F9AXmCqjakE0D1SwyXnMJHCM0w1Z3rvgY6pgHHQg63IDc2Db7LNggH7dyfZG3EyBDz4HLG6ytm%2BZUxxeasJ1uqojp4pjGwP4CZUOohR4Q0iEwD%2F3QhdeJrZIDO4eR8PhjfXUe4b6kylcqwshrcHeF86IzFUkBJekE0FWGcifZzCGln0ENwzF87UL0zJa4726Zb6cHx22fhXPxavt%2FSpKgQotRu0NKLiBBKERY%2Fji%2BF3cgfL70on5v20LvBU38Zq6z1&X-Amz-Signature=799ff4e1fa181b4ef61dda5b2a4608c99f48d6b541dc5ed666040360d02271de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK42TGM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID19bmzGrqVdF%2B5qoSmrqiemWDdWQXzWhu74Eaqs0FeTAiBK3VWi%2BA7EERi%2F3Av14fHjC4aU%2FX89rkD39yML7wW1Sir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2%2BsfySZo4HMXADtzKtwDgnhoKdCEzLgi7MLRUnF3IkGnwqIVfzo7fln8Rq8Hk4%2BGuTlzNhbfmksxWufxaNTyYfB6OcynbFIsQ9rRu69RXHV7OJvrXOHBa7aR0Xh4MvbwuE%2FX08kvVWyeD3Nh6G3i0OyO4GHmBq8yZCWKH%2FosE5DwfwHgivUske4yQxsHYTpsrSb8pa10kVWV53ntO0jGP7hWRc337zTGOSmQwTuk21kMQQi9UCod3XlRmvOJ2En3RZd6Vsp9FXrGdR6N1K1P5RZmsuaZIT1oqY1TcLWBkqkRLyMfA%2FwEWg1UljQ5cfR%2BqW6QgBeGMAdSM7%2FYgSI2T3iI7fsLhGtkBtGQPKwaYx%2FTJEGn563M41RBa3suEur17%2FBgCvO1cQfg5%2B6Wd5Qin9GO2Xeaogam%2BjmvWkSOqge1xzK41RH4dkFkjHxrmsjYwoRGHC7F1STTqRiP2zu4S6cnsmh85Ip6v43coq%2FX1bSZSNO1xe1ON4Nj2ZiSD6asZk658RfmWyfShhVfKYuNSWI8mM%2B3GuL%2Fw3A5iP3NVbpkQlQpY4%2BC6VaJVUDtMyih%2F5RInrG%2BZT3B2ApX9nrCPiGbWCUXmGiRfftdLKJbhl395TCmvaIs8%2F%2F9AXmCqjakE0D1SwyXnMJHCM0w1Z3rvgY6pgHHQg63IDc2Db7LNggH7dyfZG3EyBDz4HLG6ytm%2BZUxxeasJ1uqojp4pjGwP4CZUOohR4Q0iEwD%2F3QhdeJrZIDO4eR8PhjfXUe4b6kylcqwshrcHeF86IzFUkBJekE0FWGcifZzCGln0ENwzF87UL0zJa4726Zb6cHx22fhXPxavt%2FSpKgQotRu0NKLiBBKERY%2Fji%2BF3cgfL70on5v20LvBU38Zq6z1&X-Amz-Signature=e12fa1f16aa93d7a83c3bcb47946c1c16733e3303227aad5653ec8dae414f687&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK42TGM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID19bmzGrqVdF%2B5qoSmrqiemWDdWQXzWhu74Eaqs0FeTAiBK3VWi%2BA7EERi%2F3Av14fHjC4aU%2FX89rkD39yML7wW1Sir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2%2BsfySZo4HMXADtzKtwDgnhoKdCEzLgi7MLRUnF3IkGnwqIVfzo7fln8Rq8Hk4%2BGuTlzNhbfmksxWufxaNTyYfB6OcynbFIsQ9rRu69RXHV7OJvrXOHBa7aR0Xh4MvbwuE%2FX08kvVWyeD3Nh6G3i0OyO4GHmBq8yZCWKH%2FosE5DwfwHgivUske4yQxsHYTpsrSb8pa10kVWV53ntO0jGP7hWRc337zTGOSmQwTuk21kMQQi9UCod3XlRmvOJ2En3RZd6Vsp9FXrGdR6N1K1P5RZmsuaZIT1oqY1TcLWBkqkRLyMfA%2FwEWg1UljQ5cfR%2BqW6QgBeGMAdSM7%2FYgSI2T3iI7fsLhGtkBtGQPKwaYx%2FTJEGn563M41RBa3suEur17%2FBgCvO1cQfg5%2B6Wd5Qin9GO2Xeaogam%2BjmvWkSOqge1xzK41RH4dkFkjHxrmsjYwoRGHC7F1STTqRiP2zu4S6cnsmh85Ip6v43coq%2FX1bSZSNO1xe1ON4Nj2ZiSD6asZk658RfmWyfShhVfKYuNSWI8mM%2B3GuL%2Fw3A5iP3NVbpkQlQpY4%2BC6VaJVUDtMyih%2F5RInrG%2BZT3B2ApX9nrCPiGbWCUXmGiRfftdLKJbhl395TCmvaIs8%2F%2F9AXmCqjakE0D1SwyXnMJHCM0w1Z3rvgY6pgHHQg63IDc2Db7LNggH7dyfZG3EyBDz4HLG6ytm%2BZUxxeasJ1uqojp4pjGwP4CZUOohR4Q0iEwD%2F3QhdeJrZIDO4eR8PhjfXUe4b6kylcqwshrcHeF86IzFUkBJekE0FWGcifZzCGln0ENwzF87UL0zJa4726Zb6cHx22fhXPxavt%2FSpKgQotRu0NKLiBBKERY%2Fji%2BF3cgfL70on5v20LvBU38Zq6z1&X-Amz-Signature=6a53a4c97d9241a2b3d3cad6b7a8e34af3b72a2175acbac16bf4b8af89f46e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK42TGM%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID19bmzGrqVdF%2B5qoSmrqiemWDdWQXzWhu74Eaqs0FeTAiBK3VWi%2BA7EERi%2F3Av14fHjC4aU%2FX89rkD39yML7wW1Sir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2%2BsfySZo4HMXADtzKtwDgnhoKdCEzLgi7MLRUnF3IkGnwqIVfzo7fln8Rq8Hk4%2BGuTlzNhbfmksxWufxaNTyYfB6OcynbFIsQ9rRu69RXHV7OJvrXOHBa7aR0Xh4MvbwuE%2FX08kvVWyeD3Nh6G3i0OyO4GHmBq8yZCWKH%2FosE5DwfwHgivUske4yQxsHYTpsrSb8pa10kVWV53ntO0jGP7hWRc337zTGOSmQwTuk21kMQQi9UCod3XlRmvOJ2En3RZd6Vsp9FXrGdR6N1K1P5RZmsuaZIT1oqY1TcLWBkqkRLyMfA%2FwEWg1UljQ5cfR%2BqW6QgBeGMAdSM7%2FYgSI2T3iI7fsLhGtkBtGQPKwaYx%2FTJEGn563M41RBa3suEur17%2FBgCvO1cQfg5%2B6Wd5Qin9GO2Xeaogam%2BjmvWkSOqge1xzK41RH4dkFkjHxrmsjYwoRGHC7F1STTqRiP2zu4S6cnsmh85Ip6v43coq%2FX1bSZSNO1xe1ON4Nj2ZiSD6asZk658RfmWyfShhVfKYuNSWI8mM%2B3GuL%2Fw3A5iP3NVbpkQlQpY4%2BC6VaJVUDtMyih%2F5RInrG%2BZT3B2ApX9nrCPiGbWCUXmGiRfftdLKJbhl395TCmvaIs8%2F%2F9AXmCqjakE0D1SwyXnMJHCM0w1Z3rvgY6pgHHQg63IDc2Db7LNggH7dyfZG3EyBDz4HLG6ytm%2BZUxxeasJ1uqojp4pjGwP4CZUOohR4Q0iEwD%2F3QhdeJrZIDO4eR8PhjfXUe4b6kylcqwshrcHeF86IzFUkBJekE0FWGcifZzCGln0ENwzF87UL0zJa4726Zb6cHx22fhXPxavt%2FSpKgQotRu0NKLiBBKERY%2Fji%2BF3cgfL70on5v20LvBU38Zq6z1&X-Amz-Signature=51351ae54da2bace3f927beda1a5588e12e9c65a465d0bcbae7ab6ec903e6537&X-Amz-SignedHeaders=host&x-id=GetObject)
