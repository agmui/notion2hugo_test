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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYV3BFW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzDMXp%2FruxCeL68hXwO4%2B45LbI0y04Ggdpy8le9QnVQIgKxcF2q3rYMX8dTtZMdU3ljOjhONzWk%2FHAg7VOElSi%2FUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCxP8pFqch32sf2ahCrcA4BE0gXct5osK0iZvjxHbIYW1Ul1r3NfaaTUCduedJ0SxfuUhXsWDVb%2B56hWK%2BJMkueate5GwfUL%2FDHlEcW6XWylY332tNoNI%2Fe20caTVaVH9eatK6V7pMvDSjSzImyxfa4%2Fg4LB2Nv7oZuuMgZcd0BLcirokDZXQMiMlYR%2FHy975pjvfeYaHW4EzSxODFH875%2F5RM4X0bgGZXTcSyQ6K%2ByoBHsjxu7EEyiGHX2HN6MhofMMieCVEKmLtgCkcZB9ikty5E98RnVygDitkUEMOFIY13lhLvmhiC%2BtPlXiG3othB56mBDWi7YTn%2BREfJT9vKqlgi7gFDVkD%2BbshCfWL%2F5evCSJov2GsISDbCVAIQd53dXcIg7HMjYgIHAybATqG%2BR%2FVU3aeN6CWWi6gQiiOneB3UeFsrKV8G7gzeo%2F1E8xTdVXx1sXb0Q7RZ0XJEux44%2FqymJ25xuC6QkT%2BXAHjUk6ur8pfO5OJFgZ9MILx7FU6ee45xKaTNx69cVxo9Bpts948SWM9p%2BBqcWGKD6UGZM4KbbMwxQNCaDcjHQ97xCCPva5IFwpFmebBHUsrSQFBUFsJDgrqra%2FoED5OqJcs%2FLgHqBK5v59XvKsBiisq7vMZ0Q2XBZR%2FHQGGDmXMJyJx8IGOqUBQBYtT4HFFcE8s0m7ozTF6LHrPPoqLvH7d6hI2NMH7iwg0XgJZ%2F5jkOF%2F0xa9mUKWFbXhF1D4VSOv8%2FtltN682R92cNnTextCRVWo0%2FMvL5INF3gnWK4CmoO9776vQb8k6c8dgOBYTenY%2Fi42Shh1SfVhODiPje3%2BSpnEJGq5wrtWIPSoWcbwNZZs8%2F88H6RjCs40CRBI7w34shcW5tKvtjR7m1GX&X-Amz-Signature=d4cef8f2843754794634600952bee8af6d5e2355bb636daa64b34c9d259ba0ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYV3BFW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzDMXp%2FruxCeL68hXwO4%2B45LbI0y04Ggdpy8le9QnVQIgKxcF2q3rYMX8dTtZMdU3ljOjhONzWk%2FHAg7VOElSi%2FUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCxP8pFqch32sf2ahCrcA4BE0gXct5osK0iZvjxHbIYW1Ul1r3NfaaTUCduedJ0SxfuUhXsWDVb%2B56hWK%2BJMkueate5GwfUL%2FDHlEcW6XWylY332tNoNI%2Fe20caTVaVH9eatK6V7pMvDSjSzImyxfa4%2Fg4LB2Nv7oZuuMgZcd0BLcirokDZXQMiMlYR%2FHy975pjvfeYaHW4EzSxODFH875%2F5RM4X0bgGZXTcSyQ6K%2ByoBHsjxu7EEyiGHX2HN6MhofMMieCVEKmLtgCkcZB9ikty5E98RnVygDitkUEMOFIY13lhLvmhiC%2BtPlXiG3othB56mBDWi7YTn%2BREfJT9vKqlgi7gFDVkD%2BbshCfWL%2F5evCSJov2GsISDbCVAIQd53dXcIg7HMjYgIHAybATqG%2BR%2FVU3aeN6CWWi6gQiiOneB3UeFsrKV8G7gzeo%2F1E8xTdVXx1sXb0Q7RZ0XJEux44%2FqymJ25xuC6QkT%2BXAHjUk6ur8pfO5OJFgZ9MILx7FU6ee45xKaTNx69cVxo9Bpts948SWM9p%2BBqcWGKD6UGZM4KbbMwxQNCaDcjHQ97xCCPva5IFwpFmebBHUsrSQFBUFsJDgrqra%2FoED5OqJcs%2FLgHqBK5v59XvKsBiisq7vMZ0Q2XBZR%2FHQGGDmXMJyJx8IGOqUBQBYtT4HFFcE8s0m7ozTF6LHrPPoqLvH7d6hI2NMH7iwg0XgJZ%2F5jkOF%2F0xa9mUKWFbXhF1D4VSOv8%2FtltN682R92cNnTextCRVWo0%2FMvL5INF3gnWK4CmoO9776vQb8k6c8dgOBYTenY%2Fi42Shh1SfVhODiPje3%2BSpnEJGq5wrtWIPSoWcbwNZZs8%2F88H6RjCs40CRBI7w34shcW5tKvtjR7m1GX&X-Amz-Signature=6226df9e1a8be1dcf6000f8d5fbc55eb38295ae368e6e3cb674761583a741adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYV3BFW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzDMXp%2FruxCeL68hXwO4%2B45LbI0y04Ggdpy8le9QnVQIgKxcF2q3rYMX8dTtZMdU3ljOjhONzWk%2FHAg7VOElSi%2FUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCxP8pFqch32sf2ahCrcA4BE0gXct5osK0iZvjxHbIYW1Ul1r3NfaaTUCduedJ0SxfuUhXsWDVb%2B56hWK%2BJMkueate5GwfUL%2FDHlEcW6XWylY332tNoNI%2Fe20caTVaVH9eatK6V7pMvDSjSzImyxfa4%2Fg4LB2Nv7oZuuMgZcd0BLcirokDZXQMiMlYR%2FHy975pjvfeYaHW4EzSxODFH875%2F5RM4X0bgGZXTcSyQ6K%2ByoBHsjxu7EEyiGHX2HN6MhofMMieCVEKmLtgCkcZB9ikty5E98RnVygDitkUEMOFIY13lhLvmhiC%2BtPlXiG3othB56mBDWi7YTn%2BREfJT9vKqlgi7gFDVkD%2BbshCfWL%2F5evCSJov2GsISDbCVAIQd53dXcIg7HMjYgIHAybATqG%2BR%2FVU3aeN6CWWi6gQiiOneB3UeFsrKV8G7gzeo%2F1E8xTdVXx1sXb0Q7RZ0XJEux44%2FqymJ25xuC6QkT%2BXAHjUk6ur8pfO5OJFgZ9MILx7FU6ee45xKaTNx69cVxo9Bpts948SWM9p%2BBqcWGKD6UGZM4KbbMwxQNCaDcjHQ97xCCPva5IFwpFmebBHUsrSQFBUFsJDgrqra%2FoED5OqJcs%2FLgHqBK5v59XvKsBiisq7vMZ0Q2XBZR%2FHQGGDmXMJyJx8IGOqUBQBYtT4HFFcE8s0m7ozTF6LHrPPoqLvH7d6hI2NMH7iwg0XgJZ%2F5jkOF%2F0xa9mUKWFbXhF1D4VSOv8%2FtltN682R92cNnTextCRVWo0%2FMvL5INF3gnWK4CmoO9776vQb8k6c8dgOBYTenY%2Fi42Shh1SfVhODiPje3%2BSpnEJGq5wrtWIPSoWcbwNZZs8%2F88H6RjCs40CRBI7w34shcW5tKvtjR7m1GX&X-Amz-Signature=56cd1d1192d740d50d6de1232dcdd0c368fe95460b17ae45a5d20288f27d182c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYV3BFW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzDMXp%2FruxCeL68hXwO4%2B45LbI0y04Ggdpy8le9QnVQIgKxcF2q3rYMX8dTtZMdU3ljOjhONzWk%2FHAg7VOElSi%2FUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCxP8pFqch32sf2ahCrcA4BE0gXct5osK0iZvjxHbIYW1Ul1r3NfaaTUCduedJ0SxfuUhXsWDVb%2B56hWK%2BJMkueate5GwfUL%2FDHlEcW6XWylY332tNoNI%2Fe20caTVaVH9eatK6V7pMvDSjSzImyxfa4%2Fg4LB2Nv7oZuuMgZcd0BLcirokDZXQMiMlYR%2FHy975pjvfeYaHW4EzSxODFH875%2F5RM4X0bgGZXTcSyQ6K%2ByoBHsjxu7EEyiGHX2HN6MhofMMieCVEKmLtgCkcZB9ikty5E98RnVygDitkUEMOFIY13lhLvmhiC%2BtPlXiG3othB56mBDWi7YTn%2BREfJT9vKqlgi7gFDVkD%2BbshCfWL%2F5evCSJov2GsISDbCVAIQd53dXcIg7HMjYgIHAybATqG%2BR%2FVU3aeN6CWWi6gQiiOneB3UeFsrKV8G7gzeo%2F1E8xTdVXx1sXb0Q7RZ0XJEux44%2FqymJ25xuC6QkT%2BXAHjUk6ur8pfO5OJFgZ9MILx7FU6ee45xKaTNx69cVxo9Bpts948SWM9p%2BBqcWGKD6UGZM4KbbMwxQNCaDcjHQ97xCCPva5IFwpFmebBHUsrSQFBUFsJDgrqra%2FoED5OqJcs%2FLgHqBK5v59XvKsBiisq7vMZ0Q2XBZR%2FHQGGDmXMJyJx8IGOqUBQBYtT4HFFcE8s0m7ozTF6LHrPPoqLvH7d6hI2NMH7iwg0XgJZ%2F5jkOF%2F0xa9mUKWFbXhF1D4VSOv8%2FtltN682R92cNnTextCRVWo0%2FMvL5INF3gnWK4CmoO9776vQb8k6c8dgOBYTenY%2Fi42Shh1SfVhODiPje3%2BSpnEJGq5wrtWIPSoWcbwNZZs8%2F88H6RjCs40CRBI7w34shcW5tKvtjR7m1GX&X-Amz-Signature=c03cb5f8c89ce53e6a26678cd4e75bab9751d4af3c414117b9f3f95b06d1b90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYV3BFW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzDMXp%2FruxCeL68hXwO4%2B45LbI0y04Ggdpy8le9QnVQIgKxcF2q3rYMX8dTtZMdU3ljOjhONzWk%2FHAg7VOElSi%2FUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCxP8pFqch32sf2ahCrcA4BE0gXct5osK0iZvjxHbIYW1Ul1r3NfaaTUCduedJ0SxfuUhXsWDVb%2B56hWK%2BJMkueate5GwfUL%2FDHlEcW6XWylY332tNoNI%2Fe20caTVaVH9eatK6V7pMvDSjSzImyxfa4%2Fg4LB2Nv7oZuuMgZcd0BLcirokDZXQMiMlYR%2FHy975pjvfeYaHW4EzSxODFH875%2F5RM4X0bgGZXTcSyQ6K%2ByoBHsjxu7EEyiGHX2HN6MhofMMieCVEKmLtgCkcZB9ikty5E98RnVygDitkUEMOFIY13lhLvmhiC%2BtPlXiG3othB56mBDWi7YTn%2BREfJT9vKqlgi7gFDVkD%2BbshCfWL%2F5evCSJov2GsISDbCVAIQd53dXcIg7HMjYgIHAybATqG%2BR%2FVU3aeN6CWWi6gQiiOneB3UeFsrKV8G7gzeo%2F1E8xTdVXx1sXb0Q7RZ0XJEux44%2FqymJ25xuC6QkT%2BXAHjUk6ur8pfO5OJFgZ9MILx7FU6ee45xKaTNx69cVxo9Bpts948SWM9p%2BBqcWGKD6UGZM4KbbMwxQNCaDcjHQ97xCCPva5IFwpFmebBHUsrSQFBUFsJDgrqra%2FoED5OqJcs%2FLgHqBK5v59XvKsBiisq7vMZ0Q2XBZR%2FHQGGDmXMJyJx8IGOqUBQBYtT4HFFcE8s0m7ozTF6LHrPPoqLvH7d6hI2NMH7iwg0XgJZ%2F5jkOF%2F0xa9mUKWFbXhF1D4VSOv8%2FtltN682R92cNnTextCRVWo0%2FMvL5INF3gnWK4CmoO9776vQb8k6c8dgOBYTenY%2Fi42Shh1SfVhODiPje3%2BSpnEJGq5wrtWIPSoWcbwNZZs8%2F88H6RjCs40CRBI7w34shcW5tKvtjR7m1GX&X-Amz-Signature=0bc2744c40bc24cee375303aa552189071409d2a59e2cf6e7ae1d4718a7ff9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKYV3BFW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzDMXp%2FruxCeL68hXwO4%2B45LbI0y04Ggdpy8le9QnVQIgKxcF2q3rYMX8dTtZMdU3ljOjhONzWk%2FHAg7VOElSi%2FUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCxP8pFqch32sf2ahCrcA4BE0gXct5osK0iZvjxHbIYW1Ul1r3NfaaTUCduedJ0SxfuUhXsWDVb%2B56hWK%2BJMkueate5GwfUL%2FDHlEcW6XWylY332tNoNI%2Fe20caTVaVH9eatK6V7pMvDSjSzImyxfa4%2Fg4LB2Nv7oZuuMgZcd0BLcirokDZXQMiMlYR%2FHy975pjvfeYaHW4EzSxODFH875%2F5RM4X0bgGZXTcSyQ6K%2ByoBHsjxu7EEyiGHX2HN6MhofMMieCVEKmLtgCkcZB9ikty5E98RnVygDitkUEMOFIY13lhLvmhiC%2BtPlXiG3othB56mBDWi7YTn%2BREfJT9vKqlgi7gFDVkD%2BbshCfWL%2F5evCSJov2GsISDbCVAIQd53dXcIg7HMjYgIHAybATqG%2BR%2FVU3aeN6CWWi6gQiiOneB3UeFsrKV8G7gzeo%2F1E8xTdVXx1sXb0Q7RZ0XJEux44%2FqymJ25xuC6QkT%2BXAHjUk6ur8pfO5OJFgZ9MILx7FU6ee45xKaTNx69cVxo9Bpts948SWM9p%2BBqcWGKD6UGZM4KbbMwxQNCaDcjHQ97xCCPva5IFwpFmebBHUsrSQFBUFsJDgrqra%2FoED5OqJcs%2FLgHqBK5v59XvKsBiisq7vMZ0Q2XBZR%2FHQGGDmXMJyJx8IGOqUBQBYtT4HFFcE8s0m7ozTF6LHrPPoqLvH7d6hI2NMH7iwg0XgJZ%2F5jkOF%2F0xa9mUKWFbXhF1D4VSOv8%2FtltN682R92cNnTextCRVWo0%2FMvL5INF3gnWK4CmoO9776vQb8k6c8dgOBYTenY%2Fi42Shh1SfVhODiPje3%2BSpnEJGq5wrtWIPSoWcbwNZZs8%2F88H6RjCs40CRBI7w34shcW5tKvtjR7m1GX&X-Amz-Signature=f2f58a3389dc5e13f664012f1ca7150fbee0149f8cae2e5e65f818a3e09ae2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
