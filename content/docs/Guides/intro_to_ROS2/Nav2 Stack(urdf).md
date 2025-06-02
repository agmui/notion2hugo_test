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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRJ2U4C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFIu%2Fpg8UXzjMvhYA%2FWDcd%2B91SUY3LR%2Bn55X7hvwUqSRAiEA39g3UNpcfr%2FCwDZQyAadz0xRCFr7wuuZfu1BgYtYKbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe9AgFckLMt8mxR4ircA7fkiydj43SPiTElgWXLq7QIn37ProL0o6DdrPXzMF6IOsPL%2B4xWp8M9K9%2FU4LGJnciAxvIsJlMjbZmbc7TD1QgsBt5bXMp7tsvw7SqZQZn%2Fq7CKjCPlFujXpO3AtTZclESaEF9gEnN5N2KolcxJZCK3ybrCwjZrhn59JdcB33S0FBMsjzZzwUTqcJQVog5s8%2Bcy%2BT5vIXaX%2FG%2Fj9zPGAn8VSNhLBCgqpl3Tp6K6rAw0PYuBPxI8RSOW3nQTqzxeP87PsRpCPJenqRBhaeteymAgZJsYi3sPB9pQhdjsCQDyAjKtgatciqRA8hmv3aQqjx5F%2B5BLtGlKw3D4GfnEnD8Yt%2FNRDmMmX15e69ejAYKWLB1DLD4Q81VoezjELEckIwv9alvbla6BN5T8%2FXI5%2F5Xq0LnBGKoXqhhZwiCTbwFzqATsrtCYVs6mmkc5lI2tlf1cx2cmaLikCFtUOQxgvSoAHTcqv1xGx1yTsgVQhdgweWneyag7szVM0c1%2BefDmZZ7hCqhnqLZN4urFDTsMUOnIqNLPMyYaWfXuPHDiP6KSgMTzS2uD1R15F9MLb9hL%2FS%2BO3BK9uqGCdDbEWu3bOYfduq0mvswAj2wdJ1rljFx3pLqGZRG%2F9vkc%2FEFvMMfC9cEGOqUBoAgDgGgFzjmTkN7yMZKCa9giHOhA40gl5eU4cZVUw5QRMs9jDCD%2BEwutVRqd%2BQRmM%2BBVr8HyMfNRg%2F%2BUf8qxOktQhWEzWTwOL9x9s4%2B18w9MfskZEDL39ORFolQoHfgqARM6KrKMxKBnZsXJBD%2Fq6QJzfLhGYih67HPh9WImvehkBWSwmtgUJWAhh3H35%2FT7DQ6VTOmiBfCZ5AQF%2FFsiTnKb2sOw&X-Amz-Signature=497a196b230323248db483864c4d0bf51dca5e19be67e0fe07e4469a550ce199&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRJ2U4C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFIu%2Fpg8UXzjMvhYA%2FWDcd%2B91SUY3LR%2Bn55X7hvwUqSRAiEA39g3UNpcfr%2FCwDZQyAadz0xRCFr7wuuZfu1BgYtYKbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe9AgFckLMt8mxR4ircA7fkiydj43SPiTElgWXLq7QIn37ProL0o6DdrPXzMF6IOsPL%2B4xWp8M9K9%2FU4LGJnciAxvIsJlMjbZmbc7TD1QgsBt5bXMp7tsvw7SqZQZn%2Fq7CKjCPlFujXpO3AtTZclESaEF9gEnN5N2KolcxJZCK3ybrCwjZrhn59JdcB33S0FBMsjzZzwUTqcJQVog5s8%2Bcy%2BT5vIXaX%2FG%2Fj9zPGAn8VSNhLBCgqpl3Tp6K6rAw0PYuBPxI8RSOW3nQTqzxeP87PsRpCPJenqRBhaeteymAgZJsYi3sPB9pQhdjsCQDyAjKtgatciqRA8hmv3aQqjx5F%2B5BLtGlKw3D4GfnEnD8Yt%2FNRDmMmX15e69ejAYKWLB1DLD4Q81VoezjELEckIwv9alvbla6BN5T8%2FXI5%2F5Xq0LnBGKoXqhhZwiCTbwFzqATsrtCYVs6mmkc5lI2tlf1cx2cmaLikCFtUOQxgvSoAHTcqv1xGx1yTsgVQhdgweWneyag7szVM0c1%2BefDmZZ7hCqhnqLZN4urFDTsMUOnIqNLPMyYaWfXuPHDiP6KSgMTzS2uD1R15F9MLb9hL%2FS%2BO3BK9uqGCdDbEWu3bOYfduq0mvswAj2wdJ1rljFx3pLqGZRG%2F9vkc%2FEFvMMfC9cEGOqUBoAgDgGgFzjmTkN7yMZKCa9giHOhA40gl5eU4cZVUw5QRMs9jDCD%2BEwutVRqd%2BQRmM%2BBVr8HyMfNRg%2F%2BUf8qxOktQhWEzWTwOL9x9s4%2B18w9MfskZEDL39ORFolQoHfgqARM6KrKMxKBnZsXJBD%2Fq6QJzfLhGYih67HPh9WImvehkBWSwmtgUJWAhh3H35%2FT7DQ6VTOmiBfCZ5AQF%2FFsiTnKb2sOw&X-Amz-Signature=47a9f91e41771db15d80449392a47c38179ca64abf8221d3f74766c9edd14a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRJ2U4C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFIu%2Fpg8UXzjMvhYA%2FWDcd%2B91SUY3LR%2Bn55X7hvwUqSRAiEA39g3UNpcfr%2FCwDZQyAadz0xRCFr7wuuZfu1BgYtYKbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe9AgFckLMt8mxR4ircA7fkiydj43SPiTElgWXLq7QIn37ProL0o6DdrPXzMF6IOsPL%2B4xWp8M9K9%2FU4LGJnciAxvIsJlMjbZmbc7TD1QgsBt5bXMp7tsvw7SqZQZn%2Fq7CKjCPlFujXpO3AtTZclESaEF9gEnN5N2KolcxJZCK3ybrCwjZrhn59JdcB33S0FBMsjzZzwUTqcJQVog5s8%2Bcy%2BT5vIXaX%2FG%2Fj9zPGAn8VSNhLBCgqpl3Tp6K6rAw0PYuBPxI8RSOW3nQTqzxeP87PsRpCPJenqRBhaeteymAgZJsYi3sPB9pQhdjsCQDyAjKtgatciqRA8hmv3aQqjx5F%2B5BLtGlKw3D4GfnEnD8Yt%2FNRDmMmX15e69ejAYKWLB1DLD4Q81VoezjELEckIwv9alvbla6BN5T8%2FXI5%2F5Xq0LnBGKoXqhhZwiCTbwFzqATsrtCYVs6mmkc5lI2tlf1cx2cmaLikCFtUOQxgvSoAHTcqv1xGx1yTsgVQhdgweWneyag7szVM0c1%2BefDmZZ7hCqhnqLZN4urFDTsMUOnIqNLPMyYaWfXuPHDiP6KSgMTzS2uD1R15F9MLb9hL%2FS%2BO3BK9uqGCdDbEWu3bOYfduq0mvswAj2wdJ1rljFx3pLqGZRG%2F9vkc%2FEFvMMfC9cEGOqUBoAgDgGgFzjmTkN7yMZKCa9giHOhA40gl5eU4cZVUw5QRMs9jDCD%2BEwutVRqd%2BQRmM%2BBVr8HyMfNRg%2F%2BUf8qxOktQhWEzWTwOL9x9s4%2B18w9MfskZEDL39ORFolQoHfgqARM6KrKMxKBnZsXJBD%2Fq6QJzfLhGYih67HPh9WImvehkBWSwmtgUJWAhh3H35%2FT7DQ6VTOmiBfCZ5AQF%2FFsiTnKb2sOw&X-Amz-Signature=a353885a2906cc89efb9834eff466b0a5f00f1f02039ac935b9f5647f569a178&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRJ2U4C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFIu%2Fpg8UXzjMvhYA%2FWDcd%2B91SUY3LR%2Bn55X7hvwUqSRAiEA39g3UNpcfr%2FCwDZQyAadz0xRCFr7wuuZfu1BgYtYKbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe9AgFckLMt8mxR4ircA7fkiydj43SPiTElgWXLq7QIn37ProL0o6DdrPXzMF6IOsPL%2B4xWp8M9K9%2FU4LGJnciAxvIsJlMjbZmbc7TD1QgsBt5bXMp7tsvw7SqZQZn%2Fq7CKjCPlFujXpO3AtTZclESaEF9gEnN5N2KolcxJZCK3ybrCwjZrhn59JdcB33S0FBMsjzZzwUTqcJQVog5s8%2Bcy%2BT5vIXaX%2FG%2Fj9zPGAn8VSNhLBCgqpl3Tp6K6rAw0PYuBPxI8RSOW3nQTqzxeP87PsRpCPJenqRBhaeteymAgZJsYi3sPB9pQhdjsCQDyAjKtgatciqRA8hmv3aQqjx5F%2B5BLtGlKw3D4GfnEnD8Yt%2FNRDmMmX15e69ejAYKWLB1DLD4Q81VoezjELEckIwv9alvbla6BN5T8%2FXI5%2F5Xq0LnBGKoXqhhZwiCTbwFzqATsrtCYVs6mmkc5lI2tlf1cx2cmaLikCFtUOQxgvSoAHTcqv1xGx1yTsgVQhdgweWneyag7szVM0c1%2BefDmZZ7hCqhnqLZN4urFDTsMUOnIqNLPMyYaWfXuPHDiP6KSgMTzS2uD1R15F9MLb9hL%2FS%2BO3BK9uqGCdDbEWu3bOYfduq0mvswAj2wdJ1rljFx3pLqGZRG%2F9vkc%2FEFvMMfC9cEGOqUBoAgDgGgFzjmTkN7yMZKCa9giHOhA40gl5eU4cZVUw5QRMs9jDCD%2BEwutVRqd%2BQRmM%2BBVr8HyMfNRg%2F%2BUf8qxOktQhWEzWTwOL9x9s4%2B18w9MfskZEDL39ORFolQoHfgqARM6KrKMxKBnZsXJBD%2Fq6QJzfLhGYih67HPh9WImvehkBWSwmtgUJWAhh3H35%2FT7DQ6VTOmiBfCZ5AQF%2FFsiTnKb2sOw&X-Amz-Signature=bd46f4c13615524840878145c7abc6f5890e81415e8b19d4967a5f00c7ae2987&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRJ2U4C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFIu%2Fpg8UXzjMvhYA%2FWDcd%2B91SUY3LR%2Bn55X7hvwUqSRAiEA39g3UNpcfr%2FCwDZQyAadz0xRCFr7wuuZfu1BgYtYKbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe9AgFckLMt8mxR4ircA7fkiydj43SPiTElgWXLq7QIn37ProL0o6DdrPXzMF6IOsPL%2B4xWp8M9K9%2FU4LGJnciAxvIsJlMjbZmbc7TD1QgsBt5bXMp7tsvw7SqZQZn%2Fq7CKjCPlFujXpO3AtTZclESaEF9gEnN5N2KolcxJZCK3ybrCwjZrhn59JdcB33S0FBMsjzZzwUTqcJQVog5s8%2Bcy%2BT5vIXaX%2FG%2Fj9zPGAn8VSNhLBCgqpl3Tp6K6rAw0PYuBPxI8RSOW3nQTqzxeP87PsRpCPJenqRBhaeteymAgZJsYi3sPB9pQhdjsCQDyAjKtgatciqRA8hmv3aQqjx5F%2B5BLtGlKw3D4GfnEnD8Yt%2FNRDmMmX15e69ejAYKWLB1DLD4Q81VoezjELEckIwv9alvbla6BN5T8%2FXI5%2F5Xq0LnBGKoXqhhZwiCTbwFzqATsrtCYVs6mmkc5lI2tlf1cx2cmaLikCFtUOQxgvSoAHTcqv1xGx1yTsgVQhdgweWneyag7szVM0c1%2BefDmZZ7hCqhnqLZN4urFDTsMUOnIqNLPMyYaWfXuPHDiP6KSgMTzS2uD1R15F9MLb9hL%2FS%2BO3BK9uqGCdDbEWu3bOYfduq0mvswAj2wdJ1rljFx3pLqGZRG%2F9vkc%2FEFvMMfC9cEGOqUBoAgDgGgFzjmTkN7yMZKCa9giHOhA40gl5eU4cZVUw5QRMs9jDCD%2BEwutVRqd%2BQRmM%2BBVr8HyMfNRg%2F%2BUf8qxOktQhWEzWTwOL9x9s4%2B18w9MfskZEDL39ORFolQoHfgqARM6KrKMxKBnZsXJBD%2Fq6QJzfLhGYih67HPh9WImvehkBWSwmtgUJWAhh3H35%2FT7DQ6VTOmiBfCZ5AQF%2FFsiTnKb2sOw&X-Amz-Signature=b9a2eb28577add686789cd6e4834f8bcf1b1ab4c09b5b4257bd189d0ffae5868&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRJ2U4C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFIu%2Fpg8UXzjMvhYA%2FWDcd%2B91SUY3LR%2Bn55X7hvwUqSRAiEA39g3UNpcfr%2FCwDZQyAadz0xRCFr7wuuZfu1BgYtYKbwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAe9AgFckLMt8mxR4ircA7fkiydj43SPiTElgWXLq7QIn37ProL0o6DdrPXzMF6IOsPL%2B4xWp8M9K9%2FU4LGJnciAxvIsJlMjbZmbc7TD1QgsBt5bXMp7tsvw7SqZQZn%2Fq7CKjCPlFujXpO3AtTZclESaEF9gEnN5N2KolcxJZCK3ybrCwjZrhn59JdcB33S0FBMsjzZzwUTqcJQVog5s8%2Bcy%2BT5vIXaX%2FG%2Fj9zPGAn8VSNhLBCgqpl3Tp6K6rAw0PYuBPxI8RSOW3nQTqzxeP87PsRpCPJenqRBhaeteymAgZJsYi3sPB9pQhdjsCQDyAjKtgatciqRA8hmv3aQqjx5F%2B5BLtGlKw3D4GfnEnD8Yt%2FNRDmMmX15e69ejAYKWLB1DLD4Q81VoezjELEckIwv9alvbla6BN5T8%2FXI5%2F5Xq0LnBGKoXqhhZwiCTbwFzqATsrtCYVs6mmkc5lI2tlf1cx2cmaLikCFtUOQxgvSoAHTcqv1xGx1yTsgVQhdgweWneyag7szVM0c1%2BefDmZZ7hCqhnqLZN4urFDTsMUOnIqNLPMyYaWfXuPHDiP6KSgMTzS2uD1R15F9MLb9hL%2FS%2BO3BK9uqGCdDbEWu3bOYfduq0mvswAj2wdJ1rljFx3pLqGZRG%2F9vkc%2FEFvMMfC9cEGOqUBoAgDgGgFzjmTkN7yMZKCa9giHOhA40gl5eU4cZVUw5QRMs9jDCD%2BEwutVRqd%2BQRmM%2BBVr8HyMfNRg%2F%2BUf8qxOktQhWEzWTwOL9x9s4%2B18w9MfskZEDL39ORFolQoHfgqARM6KrKMxKBnZsXJBD%2Fq6QJzfLhGYih67HPh9WImvehkBWSwmtgUJWAhh3H35%2FT7DQ6VTOmiBfCZ5AQF%2FFsiTnKb2sOw&X-Amz-Signature=a595d998138e75ed0d0ae0ed8872d0c1461211e25e11d0a049c7af3963a78c8b&X-Amz-SignedHeaders=host&x-id=GetObject)
