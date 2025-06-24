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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSRFWWW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEfcM%2F8yYIZAiL9weWghPaDX7MP%2FR3k5DoDBD3hO30VlAiEA%2Fyg50vz1nMmqWy3YPnnTVWv38tfFQrZsX7WiTjrLdkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbUdbVZVWCSMAVYjSrcA3mS7JUJ3cbmfA6kaWHJYrqhOf5tAU10SfCLqAyfgpHK4nku2wAl5tTZAy6h5qzyY73Ou%2Bj4x77DJLGvJ0VU%2BgGNCBtC53td6oOn%2B5khIqjR8Rh2r0LZa9U4CS3ULOkPK2XRHLNfiQ27nzRh0%2BJl1GjwNRU35AKZUys6OdL4Ycl8t3UsBvBFUxKVjVef0PvIqMKnOXbt6RnOKlnFwDDG6rKRfHc1PFJIlq67sInr6VIvPt9MZ3lkIEr%2B77QdiRmtc9vlcFepmfh5BF1fS7ZR94yMurDZS02j0iGaSDi2OSx3IgtSOt0%2FU%2Bxy5IaVtnkzOQOnE%2BXwAXS%2FU0Z2LUigf0bGIYuj15P%2FYHShbDzyyay%2BFV3v9cOrfBosFZwlzkOkSKdZIL3c0iHF1zN8dn8Kks%2F4n%2Fia2yFNwRIw5k4nXuzqQHP6AHyAHVWLNa1vQQsUWhK3mfFUR8RtfBC8G4aeAe6%2Fr6ISVdA4hRzMe4Rt99k9Zxlf21%2BKjEmPYWApQKjHzoWhVz6cTMv5QFgjdufsb4WT5kcftXFxWhYSNgYKcQT%2BNoMkqkcb3Y9I6%2B8KS4qGOfdWhQDQfGiJICe4AcMLbSl2D0E3syBzj7mF2E9OJam%2BfCYOzRGaZ8%2FwnWNmMImj6sIGOqUB%2F9rH3fG61gUk0puiJA7kcKjQkS29qRNGfRH08%2BPIEIKxKawO%2BK%2F%2BYGT4nNvkzyZR076wkWi4xYm5AuO%2B8OpU98AElRo%2FQHiQmtGEWoOKZ%2BSB4Dlip9U9X9sJI4TmtrgGGND0Dd6ADsSQI%2FSvuiFwrq6aDqozrfX44GvfvyXJ5Soj62ChIIcGWkdINCupBpCd9ze8sC78OhPTSSyvJ9lepq3iDmrf&X-Amz-Signature=899a84025b5f2bc7c7a9da9f427dadfba47398a92ed2286fb068d3b6e2aa2ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSRFWWW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEfcM%2F8yYIZAiL9weWghPaDX7MP%2FR3k5DoDBD3hO30VlAiEA%2Fyg50vz1nMmqWy3YPnnTVWv38tfFQrZsX7WiTjrLdkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbUdbVZVWCSMAVYjSrcA3mS7JUJ3cbmfA6kaWHJYrqhOf5tAU10SfCLqAyfgpHK4nku2wAl5tTZAy6h5qzyY73Ou%2Bj4x77DJLGvJ0VU%2BgGNCBtC53td6oOn%2B5khIqjR8Rh2r0LZa9U4CS3ULOkPK2XRHLNfiQ27nzRh0%2BJl1GjwNRU35AKZUys6OdL4Ycl8t3UsBvBFUxKVjVef0PvIqMKnOXbt6RnOKlnFwDDG6rKRfHc1PFJIlq67sInr6VIvPt9MZ3lkIEr%2B77QdiRmtc9vlcFepmfh5BF1fS7ZR94yMurDZS02j0iGaSDi2OSx3IgtSOt0%2FU%2Bxy5IaVtnkzOQOnE%2BXwAXS%2FU0Z2LUigf0bGIYuj15P%2FYHShbDzyyay%2BFV3v9cOrfBosFZwlzkOkSKdZIL3c0iHF1zN8dn8Kks%2F4n%2Fia2yFNwRIw5k4nXuzqQHP6AHyAHVWLNa1vQQsUWhK3mfFUR8RtfBC8G4aeAe6%2Fr6ISVdA4hRzMe4Rt99k9Zxlf21%2BKjEmPYWApQKjHzoWhVz6cTMv5QFgjdufsb4WT5kcftXFxWhYSNgYKcQT%2BNoMkqkcb3Y9I6%2B8KS4qGOfdWhQDQfGiJICe4AcMLbSl2D0E3syBzj7mF2E9OJam%2BfCYOzRGaZ8%2FwnWNmMImj6sIGOqUB%2F9rH3fG61gUk0puiJA7kcKjQkS29qRNGfRH08%2BPIEIKxKawO%2BK%2F%2BYGT4nNvkzyZR076wkWi4xYm5AuO%2B8OpU98AElRo%2FQHiQmtGEWoOKZ%2BSB4Dlip9U9X9sJI4TmtrgGGND0Dd6ADsSQI%2FSvuiFwrq6aDqozrfX44GvfvyXJ5Soj62ChIIcGWkdINCupBpCd9ze8sC78OhPTSSyvJ9lepq3iDmrf&X-Amz-Signature=4b46afa92a6560848033e8abc5ae7fd58ec057163beabf20a121e2a2b1f7a4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSRFWWW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEfcM%2F8yYIZAiL9weWghPaDX7MP%2FR3k5DoDBD3hO30VlAiEA%2Fyg50vz1nMmqWy3YPnnTVWv38tfFQrZsX7WiTjrLdkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbUdbVZVWCSMAVYjSrcA3mS7JUJ3cbmfA6kaWHJYrqhOf5tAU10SfCLqAyfgpHK4nku2wAl5tTZAy6h5qzyY73Ou%2Bj4x77DJLGvJ0VU%2BgGNCBtC53td6oOn%2B5khIqjR8Rh2r0LZa9U4CS3ULOkPK2XRHLNfiQ27nzRh0%2BJl1GjwNRU35AKZUys6OdL4Ycl8t3UsBvBFUxKVjVef0PvIqMKnOXbt6RnOKlnFwDDG6rKRfHc1PFJIlq67sInr6VIvPt9MZ3lkIEr%2B77QdiRmtc9vlcFepmfh5BF1fS7ZR94yMurDZS02j0iGaSDi2OSx3IgtSOt0%2FU%2Bxy5IaVtnkzOQOnE%2BXwAXS%2FU0Z2LUigf0bGIYuj15P%2FYHShbDzyyay%2BFV3v9cOrfBosFZwlzkOkSKdZIL3c0iHF1zN8dn8Kks%2F4n%2Fia2yFNwRIw5k4nXuzqQHP6AHyAHVWLNa1vQQsUWhK3mfFUR8RtfBC8G4aeAe6%2Fr6ISVdA4hRzMe4Rt99k9Zxlf21%2BKjEmPYWApQKjHzoWhVz6cTMv5QFgjdufsb4WT5kcftXFxWhYSNgYKcQT%2BNoMkqkcb3Y9I6%2B8KS4qGOfdWhQDQfGiJICe4AcMLbSl2D0E3syBzj7mF2E9OJam%2BfCYOzRGaZ8%2FwnWNmMImj6sIGOqUB%2F9rH3fG61gUk0puiJA7kcKjQkS29qRNGfRH08%2BPIEIKxKawO%2BK%2F%2BYGT4nNvkzyZR076wkWi4xYm5AuO%2B8OpU98AElRo%2FQHiQmtGEWoOKZ%2BSB4Dlip9U9X9sJI4TmtrgGGND0Dd6ADsSQI%2FSvuiFwrq6aDqozrfX44GvfvyXJ5Soj62ChIIcGWkdINCupBpCd9ze8sC78OhPTSSyvJ9lepq3iDmrf&X-Amz-Signature=330c455b91db1b0838c45f82677e9dda5b66c5470266930f7bb9c3d2d2a9b828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSRFWWW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEfcM%2F8yYIZAiL9weWghPaDX7MP%2FR3k5DoDBD3hO30VlAiEA%2Fyg50vz1nMmqWy3YPnnTVWv38tfFQrZsX7WiTjrLdkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbUdbVZVWCSMAVYjSrcA3mS7JUJ3cbmfA6kaWHJYrqhOf5tAU10SfCLqAyfgpHK4nku2wAl5tTZAy6h5qzyY73Ou%2Bj4x77DJLGvJ0VU%2BgGNCBtC53td6oOn%2B5khIqjR8Rh2r0LZa9U4CS3ULOkPK2XRHLNfiQ27nzRh0%2BJl1GjwNRU35AKZUys6OdL4Ycl8t3UsBvBFUxKVjVef0PvIqMKnOXbt6RnOKlnFwDDG6rKRfHc1PFJIlq67sInr6VIvPt9MZ3lkIEr%2B77QdiRmtc9vlcFepmfh5BF1fS7ZR94yMurDZS02j0iGaSDi2OSx3IgtSOt0%2FU%2Bxy5IaVtnkzOQOnE%2BXwAXS%2FU0Z2LUigf0bGIYuj15P%2FYHShbDzyyay%2BFV3v9cOrfBosFZwlzkOkSKdZIL3c0iHF1zN8dn8Kks%2F4n%2Fia2yFNwRIw5k4nXuzqQHP6AHyAHVWLNa1vQQsUWhK3mfFUR8RtfBC8G4aeAe6%2Fr6ISVdA4hRzMe4Rt99k9Zxlf21%2BKjEmPYWApQKjHzoWhVz6cTMv5QFgjdufsb4WT5kcftXFxWhYSNgYKcQT%2BNoMkqkcb3Y9I6%2B8KS4qGOfdWhQDQfGiJICe4AcMLbSl2D0E3syBzj7mF2E9OJam%2BfCYOzRGaZ8%2FwnWNmMImj6sIGOqUB%2F9rH3fG61gUk0puiJA7kcKjQkS29qRNGfRH08%2BPIEIKxKawO%2BK%2F%2BYGT4nNvkzyZR076wkWi4xYm5AuO%2B8OpU98AElRo%2FQHiQmtGEWoOKZ%2BSB4Dlip9U9X9sJI4TmtrgGGND0Dd6ADsSQI%2FSvuiFwrq6aDqozrfX44GvfvyXJ5Soj62ChIIcGWkdINCupBpCd9ze8sC78OhPTSSyvJ9lepq3iDmrf&X-Amz-Signature=96ecf9bd9aa7a7543278148a7a75d0e663f18a2274479fcb307b1b63ffad0f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSRFWWW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEfcM%2F8yYIZAiL9weWghPaDX7MP%2FR3k5DoDBD3hO30VlAiEA%2Fyg50vz1nMmqWy3YPnnTVWv38tfFQrZsX7WiTjrLdkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbUdbVZVWCSMAVYjSrcA3mS7JUJ3cbmfA6kaWHJYrqhOf5tAU10SfCLqAyfgpHK4nku2wAl5tTZAy6h5qzyY73Ou%2Bj4x77DJLGvJ0VU%2BgGNCBtC53td6oOn%2B5khIqjR8Rh2r0LZa9U4CS3ULOkPK2XRHLNfiQ27nzRh0%2BJl1GjwNRU35AKZUys6OdL4Ycl8t3UsBvBFUxKVjVef0PvIqMKnOXbt6RnOKlnFwDDG6rKRfHc1PFJIlq67sInr6VIvPt9MZ3lkIEr%2B77QdiRmtc9vlcFepmfh5BF1fS7ZR94yMurDZS02j0iGaSDi2OSx3IgtSOt0%2FU%2Bxy5IaVtnkzOQOnE%2BXwAXS%2FU0Z2LUigf0bGIYuj15P%2FYHShbDzyyay%2BFV3v9cOrfBosFZwlzkOkSKdZIL3c0iHF1zN8dn8Kks%2F4n%2Fia2yFNwRIw5k4nXuzqQHP6AHyAHVWLNa1vQQsUWhK3mfFUR8RtfBC8G4aeAe6%2Fr6ISVdA4hRzMe4Rt99k9Zxlf21%2BKjEmPYWApQKjHzoWhVz6cTMv5QFgjdufsb4WT5kcftXFxWhYSNgYKcQT%2BNoMkqkcb3Y9I6%2B8KS4qGOfdWhQDQfGiJICe4AcMLbSl2D0E3syBzj7mF2E9OJam%2BfCYOzRGaZ8%2FwnWNmMImj6sIGOqUB%2F9rH3fG61gUk0puiJA7kcKjQkS29qRNGfRH08%2BPIEIKxKawO%2BK%2F%2BYGT4nNvkzyZR076wkWi4xYm5AuO%2B8OpU98AElRo%2FQHiQmtGEWoOKZ%2BSB4Dlip9U9X9sJI4TmtrgGGND0Dd6ADsSQI%2FSvuiFwrq6aDqozrfX44GvfvyXJ5Soj62ChIIcGWkdINCupBpCd9ze8sC78OhPTSSyvJ9lepq3iDmrf&X-Amz-Signature=540ac580d7f5f229cf8b667136eb13b2c4b7ae09afe3779986ae212c8047ad81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSRFWWW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEfcM%2F8yYIZAiL9weWghPaDX7MP%2FR3k5DoDBD3hO30VlAiEA%2Fyg50vz1nMmqWy3YPnnTVWv38tfFQrZsX7WiTjrLdkMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCbUdbVZVWCSMAVYjSrcA3mS7JUJ3cbmfA6kaWHJYrqhOf5tAU10SfCLqAyfgpHK4nku2wAl5tTZAy6h5qzyY73Ou%2Bj4x77DJLGvJ0VU%2BgGNCBtC53td6oOn%2B5khIqjR8Rh2r0LZa9U4CS3ULOkPK2XRHLNfiQ27nzRh0%2BJl1GjwNRU35AKZUys6OdL4Ycl8t3UsBvBFUxKVjVef0PvIqMKnOXbt6RnOKlnFwDDG6rKRfHc1PFJIlq67sInr6VIvPt9MZ3lkIEr%2B77QdiRmtc9vlcFepmfh5BF1fS7ZR94yMurDZS02j0iGaSDi2OSx3IgtSOt0%2FU%2Bxy5IaVtnkzOQOnE%2BXwAXS%2FU0Z2LUigf0bGIYuj15P%2FYHShbDzyyay%2BFV3v9cOrfBosFZwlzkOkSKdZIL3c0iHF1zN8dn8Kks%2F4n%2Fia2yFNwRIw5k4nXuzqQHP6AHyAHVWLNa1vQQsUWhK3mfFUR8RtfBC8G4aeAe6%2Fr6ISVdA4hRzMe4Rt99k9Zxlf21%2BKjEmPYWApQKjHzoWhVz6cTMv5QFgjdufsb4WT5kcftXFxWhYSNgYKcQT%2BNoMkqkcb3Y9I6%2B8KS4qGOfdWhQDQfGiJICe4AcMLbSl2D0E3syBzj7mF2E9OJam%2BfCYOzRGaZ8%2FwnWNmMImj6sIGOqUB%2F9rH3fG61gUk0puiJA7kcKjQkS29qRNGfRH08%2BPIEIKxKawO%2BK%2F%2BYGT4nNvkzyZR076wkWi4xYm5AuO%2B8OpU98AElRo%2FQHiQmtGEWoOKZ%2BSB4Dlip9U9X9sJI4TmtrgGGND0Dd6ADsSQI%2FSvuiFwrq6aDqozrfX44GvfvyXJ5Soj62ChIIcGWkdINCupBpCd9ze8sC78OhPTSSyvJ9lepq3iDmrf&X-Amz-Signature=c4d43ef8154cc72d733c3201ceda81623fc7c5da8b32932c5b1c7ce612a6443e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
