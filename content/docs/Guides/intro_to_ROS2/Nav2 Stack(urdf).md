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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLLABGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxwJHPVMKZjWuchcyklIbK4EEBKzgKfvMiVrWFIGNpgIhAM1wLO3poOq2jJ5I%2BdfEJySukUVnu6ZvjunAdmnWUAeYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMk6BfnKtKhWLiJGMq3APf60rn%2FVtCLSsKjd3yZ7Bx1T43slPvASqaOBLRogZNJBjHljKXR2bX602238uc2EQnrCVTyNN5J2Qs4roD5L4Bq%2FKt07sLJTh%2BT9l6dfpqX5MbCCHH6Fk3mu3IOPpbfXoYeQ6M%2Boj%2F1p03Apmk23UjZpu5mNQYEg9Eo521QWtRZ906wx1tIN2bW7N%2FxyQxOBNB9Nglv81ZsMDhCGL9IncZ0jyD7jy4sukkc80ooaelC5NsWjIeEHzIl1PjxF03HCQbKz5OS6OkEVKRCq%2FQirePCaK6VVmeZBElMpJIag507QDz1P3HzPBqMkMDg2WsKJZfIQp29ZPPT6N27GhlOXkgsD6gSohoryooTpvvgeU2JbYGBhTJ98a6EBofd9ElIg95Uma1UPk%2B9zxSZ9gxlROrCsDo9QyRGAlbh4K0jjQMLy8qFCqQh4VL4d9pKMOnJb1%2BWNui%2BcikcucXnhqzNae8Q%2Fi23sb6uboHdwBcqM8qHr0iv4W02aQevhmw9d7FfAX2dAZmcR7agBhmrN0e66J2g3YD0w0rXPNaGS7sPuUQ8xcfKEoXR%2BRyGPHAKf3IC3Jq0UEbxZY%2Bre8EQdfB%2FDDhLlpBl%2BHd87YTuLpFzsJk89nx6eIxK%2F1Txs4eXTCf1tLCBjqkARmjhiKuyAAEjax2rtdInOLGYGUb%2FUjFZbpHxXA3VVmXQo0Z3IGV8ZEq7MMKcvbfsGy3DUQz1cXHWejdXGpfBJPM84AJt3zaMQIyQO8J0Pefq7SPxgt4yzbYnitpUDJ0giZF5qKFsICAq4SkukzkMrcg4XxP2jtp5hszK7vTBZXlkcMqTmMsMdDFC7Z4gslt3szWWBWoAK9r9cFNHnNE918fnixY&X-Amz-Signature=df81064313d81632b10065dab11e1d0cff4bf1d5892d99199f49cfe4ca8b11b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLLABGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxwJHPVMKZjWuchcyklIbK4EEBKzgKfvMiVrWFIGNpgIhAM1wLO3poOq2jJ5I%2BdfEJySukUVnu6ZvjunAdmnWUAeYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMk6BfnKtKhWLiJGMq3APf60rn%2FVtCLSsKjd3yZ7Bx1T43slPvASqaOBLRogZNJBjHljKXR2bX602238uc2EQnrCVTyNN5J2Qs4roD5L4Bq%2FKt07sLJTh%2BT9l6dfpqX5MbCCHH6Fk3mu3IOPpbfXoYeQ6M%2Boj%2F1p03Apmk23UjZpu5mNQYEg9Eo521QWtRZ906wx1tIN2bW7N%2FxyQxOBNB9Nglv81ZsMDhCGL9IncZ0jyD7jy4sukkc80ooaelC5NsWjIeEHzIl1PjxF03HCQbKz5OS6OkEVKRCq%2FQirePCaK6VVmeZBElMpJIag507QDz1P3HzPBqMkMDg2WsKJZfIQp29ZPPT6N27GhlOXkgsD6gSohoryooTpvvgeU2JbYGBhTJ98a6EBofd9ElIg95Uma1UPk%2B9zxSZ9gxlROrCsDo9QyRGAlbh4K0jjQMLy8qFCqQh4VL4d9pKMOnJb1%2BWNui%2BcikcucXnhqzNae8Q%2Fi23sb6uboHdwBcqM8qHr0iv4W02aQevhmw9d7FfAX2dAZmcR7agBhmrN0e66J2g3YD0w0rXPNaGS7sPuUQ8xcfKEoXR%2BRyGPHAKf3IC3Jq0UEbxZY%2Bre8EQdfB%2FDDhLlpBl%2BHd87YTuLpFzsJk89nx6eIxK%2F1Txs4eXTCf1tLCBjqkARmjhiKuyAAEjax2rtdInOLGYGUb%2FUjFZbpHxXA3VVmXQo0Z3IGV8ZEq7MMKcvbfsGy3DUQz1cXHWejdXGpfBJPM84AJt3zaMQIyQO8J0Pefq7SPxgt4yzbYnitpUDJ0giZF5qKFsICAq4SkukzkMrcg4XxP2jtp5hszK7vTBZXlkcMqTmMsMdDFC7Z4gslt3szWWBWoAK9r9cFNHnNE918fnixY&X-Amz-Signature=5334ad3488a6ab1d356e2f703127b841552fe6ae494ea94d34fde3faf465490b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLLABGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxwJHPVMKZjWuchcyklIbK4EEBKzgKfvMiVrWFIGNpgIhAM1wLO3poOq2jJ5I%2BdfEJySukUVnu6ZvjunAdmnWUAeYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMk6BfnKtKhWLiJGMq3APf60rn%2FVtCLSsKjd3yZ7Bx1T43slPvASqaOBLRogZNJBjHljKXR2bX602238uc2EQnrCVTyNN5J2Qs4roD5L4Bq%2FKt07sLJTh%2BT9l6dfpqX5MbCCHH6Fk3mu3IOPpbfXoYeQ6M%2Boj%2F1p03Apmk23UjZpu5mNQYEg9Eo521QWtRZ906wx1tIN2bW7N%2FxyQxOBNB9Nglv81ZsMDhCGL9IncZ0jyD7jy4sukkc80ooaelC5NsWjIeEHzIl1PjxF03HCQbKz5OS6OkEVKRCq%2FQirePCaK6VVmeZBElMpJIag507QDz1P3HzPBqMkMDg2WsKJZfIQp29ZPPT6N27GhlOXkgsD6gSohoryooTpvvgeU2JbYGBhTJ98a6EBofd9ElIg95Uma1UPk%2B9zxSZ9gxlROrCsDo9QyRGAlbh4K0jjQMLy8qFCqQh4VL4d9pKMOnJb1%2BWNui%2BcikcucXnhqzNae8Q%2Fi23sb6uboHdwBcqM8qHr0iv4W02aQevhmw9d7FfAX2dAZmcR7agBhmrN0e66J2g3YD0w0rXPNaGS7sPuUQ8xcfKEoXR%2BRyGPHAKf3IC3Jq0UEbxZY%2Bre8EQdfB%2FDDhLlpBl%2BHd87YTuLpFzsJk89nx6eIxK%2F1Txs4eXTCf1tLCBjqkARmjhiKuyAAEjax2rtdInOLGYGUb%2FUjFZbpHxXA3VVmXQo0Z3IGV8ZEq7MMKcvbfsGy3DUQz1cXHWejdXGpfBJPM84AJt3zaMQIyQO8J0Pefq7SPxgt4yzbYnitpUDJ0giZF5qKFsICAq4SkukzkMrcg4XxP2jtp5hszK7vTBZXlkcMqTmMsMdDFC7Z4gslt3szWWBWoAK9r9cFNHnNE918fnixY&X-Amz-Signature=b9c65fcb37a709aeeb05c9785a0fce7f8b84a3541bcce5d6cf75dac594f3c0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLLABGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxwJHPVMKZjWuchcyklIbK4EEBKzgKfvMiVrWFIGNpgIhAM1wLO3poOq2jJ5I%2BdfEJySukUVnu6ZvjunAdmnWUAeYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMk6BfnKtKhWLiJGMq3APf60rn%2FVtCLSsKjd3yZ7Bx1T43slPvASqaOBLRogZNJBjHljKXR2bX602238uc2EQnrCVTyNN5J2Qs4roD5L4Bq%2FKt07sLJTh%2BT9l6dfpqX5MbCCHH6Fk3mu3IOPpbfXoYeQ6M%2Boj%2F1p03Apmk23UjZpu5mNQYEg9Eo521QWtRZ906wx1tIN2bW7N%2FxyQxOBNB9Nglv81ZsMDhCGL9IncZ0jyD7jy4sukkc80ooaelC5NsWjIeEHzIl1PjxF03HCQbKz5OS6OkEVKRCq%2FQirePCaK6VVmeZBElMpJIag507QDz1P3HzPBqMkMDg2WsKJZfIQp29ZPPT6N27GhlOXkgsD6gSohoryooTpvvgeU2JbYGBhTJ98a6EBofd9ElIg95Uma1UPk%2B9zxSZ9gxlROrCsDo9QyRGAlbh4K0jjQMLy8qFCqQh4VL4d9pKMOnJb1%2BWNui%2BcikcucXnhqzNae8Q%2Fi23sb6uboHdwBcqM8qHr0iv4W02aQevhmw9d7FfAX2dAZmcR7agBhmrN0e66J2g3YD0w0rXPNaGS7sPuUQ8xcfKEoXR%2BRyGPHAKf3IC3Jq0UEbxZY%2Bre8EQdfB%2FDDhLlpBl%2BHd87YTuLpFzsJk89nx6eIxK%2F1Txs4eXTCf1tLCBjqkARmjhiKuyAAEjax2rtdInOLGYGUb%2FUjFZbpHxXA3VVmXQo0Z3IGV8ZEq7MMKcvbfsGy3DUQz1cXHWejdXGpfBJPM84AJt3zaMQIyQO8J0Pefq7SPxgt4yzbYnitpUDJ0giZF5qKFsICAq4SkukzkMrcg4XxP2jtp5hszK7vTBZXlkcMqTmMsMdDFC7Z4gslt3szWWBWoAK9r9cFNHnNE918fnixY&X-Amz-Signature=6b1f8f8ae06920a78693ef965d3e967522fbd8cc0507d4d67078644c4fbbfdef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLLABGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxwJHPVMKZjWuchcyklIbK4EEBKzgKfvMiVrWFIGNpgIhAM1wLO3poOq2jJ5I%2BdfEJySukUVnu6ZvjunAdmnWUAeYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMk6BfnKtKhWLiJGMq3APf60rn%2FVtCLSsKjd3yZ7Bx1T43slPvASqaOBLRogZNJBjHljKXR2bX602238uc2EQnrCVTyNN5J2Qs4roD5L4Bq%2FKt07sLJTh%2BT9l6dfpqX5MbCCHH6Fk3mu3IOPpbfXoYeQ6M%2Boj%2F1p03Apmk23UjZpu5mNQYEg9Eo521QWtRZ906wx1tIN2bW7N%2FxyQxOBNB9Nglv81ZsMDhCGL9IncZ0jyD7jy4sukkc80ooaelC5NsWjIeEHzIl1PjxF03HCQbKz5OS6OkEVKRCq%2FQirePCaK6VVmeZBElMpJIag507QDz1P3HzPBqMkMDg2WsKJZfIQp29ZPPT6N27GhlOXkgsD6gSohoryooTpvvgeU2JbYGBhTJ98a6EBofd9ElIg95Uma1UPk%2B9zxSZ9gxlROrCsDo9QyRGAlbh4K0jjQMLy8qFCqQh4VL4d9pKMOnJb1%2BWNui%2BcikcucXnhqzNae8Q%2Fi23sb6uboHdwBcqM8qHr0iv4W02aQevhmw9d7FfAX2dAZmcR7agBhmrN0e66J2g3YD0w0rXPNaGS7sPuUQ8xcfKEoXR%2BRyGPHAKf3IC3Jq0UEbxZY%2Bre8EQdfB%2FDDhLlpBl%2BHd87YTuLpFzsJk89nx6eIxK%2F1Txs4eXTCf1tLCBjqkARmjhiKuyAAEjax2rtdInOLGYGUb%2FUjFZbpHxXA3VVmXQo0Z3IGV8ZEq7MMKcvbfsGy3DUQz1cXHWejdXGpfBJPM84AJt3zaMQIyQO8J0Pefq7SPxgt4yzbYnitpUDJ0giZF5qKFsICAq4SkukzkMrcg4XxP2jtp5hszK7vTBZXlkcMqTmMsMdDFC7Z4gslt3szWWBWoAK9r9cFNHnNE918fnixY&X-Amz-Signature=19f6d5219240d6477b335e68d0f4537b12df59d846e8d81f346cf3bd95ffeda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLLABGI%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoxwJHPVMKZjWuchcyklIbK4EEBKzgKfvMiVrWFIGNpgIhAM1wLO3poOq2jJ5I%2BdfEJySukUVnu6ZvjunAdmnWUAeYKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMk6BfnKtKhWLiJGMq3APf60rn%2FVtCLSsKjd3yZ7Bx1T43slPvASqaOBLRogZNJBjHljKXR2bX602238uc2EQnrCVTyNN5J2Qs4roD5L4Bq%2FKt07sLJTh%2BT9l6dfpqX5MbCCHH6Fk3mu3IOPpbfXoYeQ6M%2Boj%2F1p03Apmk23UjZpu5mNQYEg9Eo521QWtRZ906wx1tIN2bW7N%2FxyQxOBNB9Nglv81ZsMDhCGL9IncZ0jyD7jy4sukkc80ooaelC5NsWjIeEHzIl1PjxF03HCQbKz5OS6OkEVKRCq%2FQirePCaK6VVmeZBElMpJIag507QDz1P3HzPBqMkMDg2WsKJZfIQp29ZPPT6N27GhlOXkgsD6gSohoryooTpvvgeU2JbYGBhTJ98a6EBofd9ElIg95Uma1UPk%2B9zxSZ9gxlROrCsDo9QyRGAlbh4K0jjQMLy8qFCqQh4VL4d9pKMOnJb1%2BWNui%2BcikcucXnhqzNae8Q%2Fi23sb6uboHdwBcqM8qHr0iv4W02aQevhmw9d7FfAX2dAZmcR7agBhmrN0e66J2g3YD0w0rXPNaGS7sPuUQ8xcfKEoXR%2BRyGPHAKf3IC3Jq0UEbxZY%2Bre8EQdfB%2FDDhLlpBl%2BHd87YTuLpFzsJk89nx6eIxK%2F1Txs4eXTCf1tLCBjqkARmjhiKuyAAEjax2rtdInOLGYGUb%2FUjFZbpHxXA3VVmXQo0Z3IGV8ZEq7MMKcvbfsGy3DUQz1cXHWejdXGpfBJPM84AJt3zaMQIyQO8J0Pefq7SPxgt4yzbYnitpUDJ0giZF5qKFsICAq4SkukzkMrcg4XxP2jtp5hszK7vTBZXlkcMqTmMsMdDFC7Z4gslt3szWWBWoAK9r9cFNHnNE918fnixY&X-Amz-Signature=d98a907617aa96ce17bf9bd057506c606265e34c7da38442c75dd1628856b729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
