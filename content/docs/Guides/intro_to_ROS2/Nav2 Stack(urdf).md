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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=9e87ab3930ad9af69ed0fb368c387ff6d9e34f6bad072993c70d7f3c482503ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=57fae094671dc6128899b9b3b57853c1603f6e7ae178bb820411525bde846890&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=11a9a7c7564d37711b730a746444577de0f2661aad429ac542e7a70f115eda3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=f75b0af042ac32e767616686cdc3f6bd9eaf1753743dcffeb4d6c165b5f411aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=d8fa7acd0e8063ae217e732799b3b93322ea31fc454d83b5eed775d2b23e0304&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAIUM7YW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCUu6Dy8N4Cp8P8kR1IXgq57dp%2BMXy%2FwfcZdrWiw%2B8JdAIhAIdd0a860v5SP7EksVCmPFKntdjCfTrZuG%2Fcn7GROxHHKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzK%2BG37v%2FhbqKmpms4q3APt06IhDAYNoFr2FhrUHcvZKvvq3obEamZQJ%2B%2BDo2y6LVCdEBMJkeFTneIueMrBa9dqTsM9Y7D6rVJy8aNeSO8dr7rI3eDfbPqq5iqOpNeEQMgW8i0VDPGnRisdMtSWmirtz7FYnS7nx3%2FRsCRqealnBbnXvdzyBkqtBKwcJeHGtgHkKRlDnG%2FTpTb54mALGw8Mr%2Bx4BYtRs2fJBcnVS63OOET%2BdxxlS9m50DxgQDIPUWvz1wEa289g2eN%2Fk3%2FkCmikERZklwofBJJfGkjPfjTlEqACeafyDYaJ%2BUjePrEcvl1wXOxwsUmclRkGfhqIL47q0qkxsYmgds31ubIdvE8Ek2yVBS0sZzS6hNqXTaLf01Tv9tZXMYUJ5Or1ZI%2FLorXT%2BO9k44f2UOjDP6rTJVx8WanK8xbAWXPhC%2B0KM3K1zxhrJvQ4bfzGeltiebyHmRMqLC7INy1PvUDgGSJPrqifliZ4wUVnhnCTxGV5MWN1LY%2Bc64MfhnZKaQQQKx7ymxywo4DSbW%2B2w2zrMlqNhKCP4APFf7MHOsm6%2BFsippZ7mbGKpUBKQ825Gk5AHZkuPoZDi41qX7bNs2gAX816Z6C8lOmu%2B3guRd47RzXs4g6ly6fc3xRV1qfQa4bGgjCny7y%2BBjqkAQ3RkHXf8%2FKHi4yLPEuzm0qfpiTyP%2FI7QTeiwhFqmAIfaF0iuahh2toGE4d9c1EITBBRF%2B0Re99VbJx4oT%2BdDetxZVswmQU7I4wiZZL4b5LrELNih9cw6A8TfBXV42Ajl6iKOoMmNtFNV2ZBqSEKwxFSIMeBm6gtw5EQxjNgY%2F8mSxobJDzCe1rpVfQ40L6As5agNHgoRFOCmR26lwr%2FSMbiEVUM&X-Amz-Signature=3ba28296a2b860189786311453dde52be24fc1b1a74246aa8c0755f304e7245d&X-Amz-SignedHeaders=host&x-id=GetObject)
