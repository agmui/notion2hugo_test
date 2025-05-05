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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEKBZAE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJlFG3d3fwPaB%2FmDLLmMrEbitfJ9AOieIc65TyLSAXqgIgKdlU2Y%2FnFoCXPB8vhBBj4QoRGnDyaTjl3O8W2tt2EXIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDK2GvCp1JdON4I1QqyrcA8kVv8T%2B1gF65q8ZkXWus7k%2By%2B2pOCfLezOVHQOKsDQ%2BZhMn4xxBmjtQm8pSgOM0Rniauzf1cfOKB2iDKn66tQpWKt592EY5Bvfdry1ibDwA9Z3qruAeWcrHkf8zyQZ3yNCB3rRyKyyCBUACwzSMBYyCVCHdF%2FSbT1iFSUb2%2BNZgJ1uxRot2sbWlcR4VwlaNfKKXjRuJp3pErvBJ925%2B%2BtVZ8OT0hY2iRf5M27psCt%2Bkv%2BbrNDTWP2jioV87NJW%2FH6gCsVarXqSdlmBpGpFB80ODwiAVNk6y9mjTv9ZPc7xRqdeyS13e2T9Ms1tKTENRctrsDMQhMgwvdokERFyPTYQZ%2F7dVl32BOyR5bbKd7xeisKPNCC5zIk4B9fEs7fiZrG6bQK1s3bH9V13FpkZWYGjc7U6PyV57T8%2FJ1dIDXzs%2BuVO3EcjaouR6n9iE%2FNdBOz2UCkXxyKLqJu4inebyjuh%2Fa180BEk3AZ2HCZUWVq%2Fi7zR%2FAR6ZMowtT1z%2B1IYlR3mMzwA3WFUSzQSns7uOQ8QZ7RKjYsVgRb4XBA2kozHS2kNM1rPjyIPuBwRvo7%2B2FbaibDQoJYZx2q8Q0e%2FDBkG62aaHrBZdsXvL8HoqHTvlo9%2BI3ljcYJaxrNz1MPGa4cAGOqUBKgEn3RCmHdhT9dflV6SXUnLbn2CZd2tAsJhs0nGKt2aEOM4znULO%2FOiyc1DnvSY3zmd3jPg3B0qSX1xP09xpunXq53ggGjNhHvKxjwqu7W1GnfzOHYF11NjMsHBGUrD4ay6WAqVswThGZzohHrE77q3K77%2BI6c0dTN9nWSUcGvqd%2F4F9NTUFQBHOiOy%2FU4Qu1FUzgIQXNnCYtONihCbtixrevcPz&X-Amz-Signature=c6d18ff97effd586cf309aa59da7da64ba516b114878b94d0012e93af7939b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEKBZAE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJlFG3d3fwPaB%2FmDLLmMrEbitfJ9AOieIc65TyLSAXqgIgKdlU2Y%2FnFoCXPB8vhBBj4QoRGnDyaTjl3O8W2tt2EXIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDK2GvCp1JdON4I1QqyrcA8kVv8T%2B1gF65q8ZkXWus7k%2By%2B2pOCfLezOVHQOKsDQ%2BZhMn4xxBmjtQm8pSgOM0Rniauzf1cfOKB2iDKn66tQpWKt592EY5Bvfdry1ibDwA9Z3qruAeWcrHkf8zyQZ3yNCB3rRyKyyCBUACwzSMBYyCVCHdF%2FSbT1iFSUb2%2BNZgJ1uxRot2sbWlcR4VwlaNfKKXjRuJp3pErvBJ925%2B%2BtVZ8OT0hY2iRf5M27psCt%2Bkv%2BbrNDTWP2jioV87NJW%2FH6gCsVarXqSdlmBpGpFB80ODwiAVNk6y9mjTv9ZPc7xRqdeyS13e2T9Ms1tKTENRctrsDMQhMgwvdokERFyPTYQZ%2F7dVl32BOyR5bbKd7xeisKPNCC5zIk4B9fEs7fiZrG6bQK1s3bH9V13FpkZWYGjc7U6PyV57T8%2FJ1dIDXzs%2BuVO3EcjaouR6n9iE%2FNdBOz2UCkXxyKLqJu4inebyjuh%2Fa180BEk3AZ2HCZUWVq%2Fi7zR%2FAR6ZMowtT1z%2B1IYlR3mMzwA3WFUSzQSns7uOQ8QZ7RKjYsVgRb4XBA2kozHS2kNM1rPjyIPuBwRvo7%2B2FbaibDQoJYZx2q8Q0e%2FDBkG62aaHrBZdsXvL8HoqHTvlo9%2BI3ljcYJaxrNz1MPGa4cAGOqUBKgEn3RCmHdhT9dflV6SXUnLbn2CZd2tAsJhs0nGKt2aEOM4znULO%2FOiyc1DnvSY3zmd3jPg3B0qSX1xP09xpunXq53ggGjNhHvKxjwqu7W1GnfzOHYF11NjMsHBGUrD4ay6WAqVswThGZzohHrE77q3K77%2BI6c0dTN9nWSUcGvqd%2F4F9NTUFQBHOiOy%2FU4Qu1FUzgIQXNnCYtONihCbtixrevcPz&X-Amz-Signature=5d61f7ddf130bd6151f1e25fef1ec693c48d1e932ffbe28c80edca7ffada2f44&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEKBZAE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJlFG3d3fwPaB%2FmDLLmMrEbitfJ9AOieIc65TyLSAXqgIgKdlU2Y%2FnFoCXPB8vhBBj4QoRGnDyaTjl3O8W2tt2EXIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDK2GvCp1JdON4I1QqyrcA8kVv8T%2B1gF65q8ZkXWus7k%2By%2B2pOCfLezOVHQOKsDQ%2BZhMn4xxBmjtQm8pSgOM0Rniauzf1cfOKB2iDKn66tQpWKt592EY5Bvfdry1ibDwA9Z3qruAeWcrHkf8zyQZ3yNCB3rRyKyyCBUACwzSMBYyCVCHdF%2FSbT1iFSUb2%2BNZgJ1uxRot2sbWlcR4VwlaNfKKXjRuJp3pErvBJ925%2B%2BtVZ8OT0hY2iRf5M27psCt%2Bkv%2BbrNDTWP2jioV87NJW%2FH6gCsVarXqSdlmBpGpFB80ODwiAVNk6y9mjTv9ZPc7xRqdeyS13e2T9Ms1tKTENRctrsDMQhMgwvdokERFyPTYQZ%2F7dVl32BOyR5bbKd7xeisKPNCC5zIk4B9fEs7fiZrG6bQK1s3bH9V13FpkZWYGjc7U6PyV57T8%2FJ1dIDXzs%2BuVO3EcjaouR6n9iE%2FNdBOz2UCkXxyKLqJu4inebyjuh%2Fa180BEk3AZ2HCZUWVq%2Fi7zR%2FAR6ZMowtT1z%2B1IYlR3mMzwA3WFUSzQSns7uOQ8QZ7RKjYsVgRb4XBA2kozHS2kNM1rPjyIPuBwRvo7%2B2FbaibDQoJYZx2q8Q0e%2FDBkG62aaHrBZdsXvL8HoqHTvlo9%2BI3ljcYJaxrNz1MPGa4cAGOqUBKgEn3RCmHdhT9dflV6SXUnLbn2CZd2tAsJhs0nGKt2aEOM4znULO%2FOiyc1DnvSY3zmd3jPg3B0qSX1xP09xpunXq53ggGjNhHvKxjwqu7W1GnfzOHYF11NjMsHBGUrD4ay6WAqVswThGZzohHrE77q3K77%2BI6c0dTN9nWSUcGvqd%2F4F9NTUFQBHOiOy%2FU4Qu1FUzgIQXNnCYtONihCbtixrevcPz&X-Amz-Signature=88cc30cd6fd1ad518fadcff83aada9ab20a68b27867bdc859d59d2ba3f710772&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEKBZAE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJlFG3d3fwPaB%2FmDLLmMrEbitfJ9AOieIc65TyLSAXqgIgKdlU2Y%2FnFoCXPB8vhBBj4QoRGnDyaTjl3O8W2tt2EXIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDK2GvCp1JdON4I1QqyrcA8kVv8T%2B1gF65q8ZkXWus7k%2By%2B2pOCfLezOVHQOKsDQ%2BZhMn4xxBmjtQm8pSgOM0Rniauzf1cfOKB2iDKn66tQpWKt592EY5Bvfdry1ibDwA9Z3qruAeWcrHkf8zyQZ3yNCB3rRyKyyCBUACwzSMBYyCVCHdF%2FSbT1iFSUb2%2BNZgJ1uxRot2sbWlcR4VwlaNfKKXjRuJp3pErvBJ925%2B%2BtVZ8OT0hY2iRf5M27psCt%2Bkv%2BbrNDTWP2jioV87NJW%2FH6gCsVarXqSdlmBpGpFB80ODwiAVNk6y9mjTv9ZPc7xRqdeyS13e2T9Ms1tKTENRctrsDMQhMgwvdokERFyPTYQZ%2F7dVl32BOyR5bbKd7xeisKPNCC5zIk4B9fEs7fiZrG6bQK1s3bH9V13FpkZWYGjc7U6PyV57T8%2FJ1dIDXzs%2BuVO3EcjaouR6n9iE%2FNdBOz2UCkXxyKLqJu4inebyjuh%2Fa180BEk3AZ2HCZUWVq%2Fi7zR%2FAR6ZMowtT1z%2B1IYlR3mMzwA3WFUSzQSns7uOQ8QZ7RKjYsVgRb4XBA2kozHS2kNM1rPjyIPuBwRvo7%2B2FbaibDQoJYZx2q8Q0e%2FDBkG62aaHrBZdsXvL8HoqHTvlo9%2BI3ljcYJaxrNz1MPGa4cAGOqUBKgEn3RCmHdhT9dflV6SXUnLbn2CZd2tAsJhs0nGKt2aEOM4znULO%2FOiyc1DnvSY3zmd3jPg3B0qSX1xP09xpunXq53ggGjNhHvKxjwqu7W1GnfzOHYF11NjMsHBGUrD4ay6WAqVswThGZzohHrE77q3K77%2BI6c0dTN9nWSUcGvqd%2F4F9NTUFQBHOiOy%2FU4Qu1FUzgIQXNnCYtONihCbtixrevcPz&X-Amz-Signature=9a8ebd0f3522e652dd6aab886b0d21bac9f49bace803a79c5d9efae284e11bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEKBZAE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJlFG3d3fwPaB%2FmDLLmMrEbitfJ9AOieIc65TyLSAXqgIgKdlU2Y%2FnFoCXPB8vhBBj4QoRGnDyaTjl3O8W2tt2EXIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDK2GvCp1JdON4I1QqyrcA8kVv8T%2B1gF65q8ZkXWus7k%2By%2B2pOCfLezOVHQOKsDQ%2BZhMn4xxBmjtQm8pSgOM0Rniauzf1cfOKB2iDKn66tQpWKt592EY5Bvfdry1ibDwA9Z3qruAeWcrHkf8zyQZ3yNCB3rRyKyyCBUACwzSMBYyCVCHdF%2FSbT1iFSUb2%2BNZgJ1uxRot2sbWlcR4VwlaNfKKXjRuJp3pErvBJ925%2B%2BtVZ8OT0hY2iRf5M27psCt%2Bkv%2BbrNDTWP2jioV87NJW%2FH6gCsVarXqSdlmBpGpFB80ODwiAVNk6y9mjTv9ZPc7xRqdeyS13e2T9Ms1tKTENRctrsDMQhMgwvdokERFyPTYQZ%2F7dVl32BOyR5bbKd7xeisKPNCC5zIk4B9fEs7fiZrG6bQK1s3bH9V13FpkZWYGjc7U6PyV57T8%2FJ1dIDXzs%2BuVO3EcjaouR6n9iE%2FNdBOz2UCkXxyKLqJu4inebyjuh%2Fa180BEk3AZ2HCZUWVq%2Fi7zR%2FAR6ZMowtT1z%2B1IYlR3mMzwA3WFUSzQSns7uOQ8QZ7RKjYsVgRb4XBA2kozHS2kNM1rPjyIPuBwRvo7%2B2FbaibDQoJYZx2q8Q0e%2FDBkG62aaHrBZdsXvL8HoqHTvlo9%2BI3ljcYJaxrNz1MPGa4cAGOqUBKgEn3RCmHdhT9dflV6SXUnLbn2CZd2tAsJhs0nGKt2aEOM4znULO%2FOiyc1DnvSY3zmd3jPg3B0qSX1xP09xpunXq53ggGjNhHvKxjwqu7W1GnfzOHYF11NjMsHBGUrD4ay6WAqVswThGZzohHrE77q3K77%2BI6c0dTN9nWSUcGvqd%2F4F9NTUFQBHOiOy%2FU4Qu1FUzgIQXNnCYtONihCbtixrevcPz&X-Amz-Signature=986c89f8f77fcdd8d33705a63733504932279ae9e341b23a65dc9c1b02fd3493&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEKBZAE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDJlFG3d3fwPaB%2FmDLLmMrEbitfJ9AOieIc65TyLSAXqgIgKdlU2Y%2FnFoCXPB8vhBBj4QoRGnDyaTjl3O8W2tt2EXIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDK2GvCp1JdON4I1QqyrcA8kVv8T%2B1gF65q8ZkXWus7k%2By%2B2pOCfLezOVHQOKsDQ%2BZhMn4xxBmjtQm8pSgOM0Rniauzf1cfOKB2iDKn66tQpWKt592EY5Bvfdry1ibDwA9Z3qruAeWcrHkf8zyQZ3yNCB3rRyKyyCBUACwzSMBYyCVCHdF%2FSbT1iFSUb2%2BNZgJ1uxRot2sbWlcR4VwlaNfKKXjRuJp3pErvBJ925%2B%2BtVZ8OT0hY2iRf5M27psCt%2Bkv%2BbrNDTWP2jioV87NJW%2FH6gCsVarXqSdlmBpGpFB80ODwiAVNk6y9mjTv9ZPc7xRqdeyS13e2T9Ms1tKTENRctrsDMQhMgwvdokERFyPTYQZ%2F7dVl32BOyR5bbKd7xeisKPNCC5zIk4B9fEs7fiZrG6bQK1s3bH9V13FpkZWYGjc7U6PyV57T8%2FJ1dIDXzs%2BuVO3EcjaouR6n9iE%2FNdBOz2UCkXxyKLqJu4inebyjuh%2Fa180BEk3AZ2HCZUWVq%2Fi7zR%2FAR6ZMowtT1z%2B1IYlR3mMzwA3WFUSzQSns7uOQ8QZ7RKjYsVgRb4XBA2kozHS2kNM1rPjyIPuBwRvo7%2B2FbaibDQoJYZx2q8Q0e%2FDBkG62aaHrBZdsXvL8HoqHTvlo9%2BI3ljcYJaxrNz1MPGa4cAGOqUBKgEn3RCmHdhT9dflV6SXUnLbn2CZd2tAsJhs0nGKt2aEOM4znULO%2FOiyc1DnvSY3zmd3jPg3B0qSX1xP09xpunXq53ggGjNhHvKxjwqu7W1GnfzOHYF11NjMsHBGUrD4ay6WAqVswThGZzohHrE77q3K77%2BI6c0dTN9nWSUcGvqd%2F4F9NTUFQBHOiOy%2FU4Qu1FUzgIQXNnCYtONihCbtixrevcPz&X-Amz-Signature=88e19fdbf982aeed7d8bc08712e399ef57838e2f6be35fd1d5fe6b87396f6a78&X-Amz-SignedHeaders=host&x-id=GetObject)
