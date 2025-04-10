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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR26AWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDHGn4vbhDQD3wrGtuk2HxirmtSZAOlSEbFhyvtzmyeugIgGPJ%2B9PxoBOSQO8IkDo4jhflNH%2BK83%2BPZudFDZ5NR9TsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yH3VvL2UNaQ0HxSrcA%2Bq52f%2BYcfEM2nUr4ulLQqEHDE8l1pbct3qJ1c1CA3GEE9iFwGl5lf%2FlbeG%2F3ZtB5vuO8CeXkbdWGUSUJMIUTxAYdNtYnozxS1x%2FD%2BhFEpa2DhPiEdd4eVr1F0WOzlIey7DKjxVW0bVFnumleMPERwMQtDYRf1nHPDM9xUvcd1hm3sTQtGu2ZME2gEDuqf6BtLeWViKXnaolKPaR2WSFXc1UKpe1XiD44eWmHkgUE1dIAg9akOeB9RUWmstoFQwJeLMJ5LrAQghbbNi%2FsKa4SGHqzWZk7vqttmdScIcAVkASvTEc6CIuTarzaRNKkv0Z1c8xiflsxKxaRMLyqcHSC2EymxzxBlCkM0Wx0RR63fZFETYKBa7uiNSvttc9l2FYMqedmo04cWmcN3UBvh7yVJomhKtndxxUxc4c83Z8bm4El3oV3XZrSzzd1RASnc70Wge%2Fyq%2F7EeyVcrLWHc926gVktMTdjUs1SykvWexh7QiI9RV7NAOxMenlOm%2B8LFwFwc6OIitdXKaBGFs1QKma7ZOQlf27IwbOanZRuke7BjXRsJKFiZCOb5eoqQ61CC8adKvoXoHcY64I39q5rqmlyledYCAZNg78NgZJ2%2BZZ7WgNtHjjVj7dTDgsXKx%2BMMba3b8GOqUBo6CJqwxeayvNuYS57IfyT6WTneWxfWMklJZoTx8nQC4I2As4KZGwewGNtJNG2CANVxFR9gUg7JC9C2jr85um8jeuWxF1jENsZo2PdEavNCDEyL7gJH%2FuDfqMy9%2FblV9WneOhwM5Tg687D%2BQiQ5nX%2FdVxDKuBOl7aGFrCao2tw5N2spc1q%2BgUEqFKQH7XBv3yro1aZdIYnsK00y42wsKEEB7xSJPx&X-Amz-Signature=803379fe63e1a2bf2c6bbdc0af80a7017831db65cfdad1a8b95b0d884a3efe4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR26AWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDHGn4vbhDQD3wrGtuk2HxirmtSZAOlSEbFhyvtzmyeugIgGPJ%2B9PxoBOSQO8IkDo4jhflNH%2BK83%2BPZudFDZ5NR9TsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yH3VvL2UNaQ0HxSrcA%2Bq52f%2BYcfEM2nUr4ulLQqEHDE8l1pbct3qJ1c1CA3GEE9iFwGl5lf%2FlbeG%2F3ZtB5vuO8CeXkbdWGUSUJMIUTxAYdNtYnozxS1x%2FD%2BhFEpa2DhPiEdd4eVr1F0WOzlIey7DKjxVW0bVFnumleMPERwMQtDYRf1nHPDM9xUvcd1hm3sTQtGu2ZME2gEDuqf6BtLeWViKXnaolKPaR2WSFXc1UKpe1XiD44eWmHkgUE1dIAg9akOeB9RUWmstoFQwJeLMJ5LrAQghbbNi%2FsKa4SGHqzWZk7vqttmdScIcAVkASvTEc6CIuTarzaRNKkv0Z1c8xiflsxKxaRMLyqcHSC2EymxzxBlCkM0Wx0RR63fZFETYKBa7uiNSvttc9l2FYMqedmo04cWmcN3UBvh7yVJomhKtndxxUxc4c83Z8bm4El3oV3XZrSzzd1RASnc70Wge%2Fyq%2F7EeyVcrLWHc926gVktMTdjUs1SykvWexh7QiI9RV7NAOxMenlOm%2B8LFwFwc6OIitdXKaBGFs1QKma7ZOQlf27IwbOanZRuke7BjXRsJKFiZCOb5eoqQ61CC8adKvoXoHcY64I39q5rqmlyledYCAZNg78NgZJ2%2BZZ7WgNtHjjVj7dTDgsXKx%2BMMba3b8GOqUBo6CJqwxeayvNuYS57IfyT6WTneWxfWMklJZoTx8nQC4I2As4KZGwewGNtJNG2CANVxFR9gUg7JC9C2jr85um8jeuWxF1jENsZo2PdEavNCDEyL7gJH%2FuDfqMy9%2FblV9WneOhwM5Tg687D%2BQiQ5nX%2FdVxDKuBOl7aGFrCao2tw5N2spc1q%2BgUEqFKQH7XBv3yro1aZdIYnsK00y42wsKEEB7xSJPx&X-Amz-Signature=15c8ab1922b1986af20b2ba0094e7dfe95da30d7b44df09c604cdccab74cc319&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR26AWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDHGn4vbhDQD3wrGtuk2HxirmtSZAOlSEbFhyvtzmyeugIgGPJ%2B9PxoBOSQO8IkDo4jhflNH%2BK83%2BPZudFDZ5NR9TsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yH3VvL2UNaQ0HxSrcA%2Bq52f%2BYcfEM2nUr4ulLQqEHDE8l1pbct3qJ1c1CA3GEE9iFwGl5lf%2FlbeG%2F3ZtB5vuO8CeXkbdWGUSUJMIUTxAYdNtYnozxS1x%2FD%2BhFEpa2DhPiEdd4eVr1F0WOzlIey7DKjxVW0bVFnumleMPERwMQtDYRf1nHPDM9xUvcd1hm3sTQtGu2ZME2gEDuqf6BtLeWViKXnaolKPaR2WSFXc1UKpe1XiD44eWmHkgUE1dIAg9akOeB9RUWmstoFQwJeLMJ5LrAQghbbNi%2FsKa4SGHqzWZk7vqttmdScIcAVkASvTEc6CIuTarzaRNKkv0Z1c8xiflsxKxaRMLyqcHSC2EymxzxBlCkM0Wx0RR63fZFETYKBa7uiNSvttc9l2FYMqedmo04cWmcN3UBvh7yVJomhKtndxxUxc4c83Z8bm4El3oV3XZrSzzd1RASnc70Wge%2Fyq%2F7EeyVcrLWHc926gVktMTdjUs1SykvWexh7QiI9RV7NAOxMenlOm%2B8LFwFwc6OIitdXKaBGFs1QKma7ZOQlf27IwbOanZRuke7BjXRsJKFiZCOb5eoqQ61CC8adKvoXoHcY64I39q5rqmlyledYCAZNg78NgZJ2%2BZZ7WgNtHjjVj7dTDgsXKx%2BMMba3b8GOqUBo6CJqwxeayvNuYS57IfyT6WTneWxfWMklJZoTx8nQC4I2As4KZGwewGNtJNG2CANVxFR9gUg7JC9C2jr85um8jeuWxF1jENsZo2PdEavNCDEyL7gJH%2FuDfqMy9%2FblV9WneOhwM5Tg687D%2BQiQ5nX%2FdVxDKuBOl7aGFrCao2tw5N2spc1q%2BgUEqFKQH7XBv3yro1aZdIYnsK00y42wsKEEB7xSJPx&X-Amz-Signature=d5274527bd8affaea7e5e8d83f38a06681441774102752ddea62b6fddd4ee51f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR26AWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDHGn4vbhDQD3wrGtuk2HxirmtSZAOlSEbFhyvtzmyeugIgGPJ%2B9PxoBOSQO8IkDo4jhflNH%2BK83%2BPZudFDZ5NR9TsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yH3VvL2UNaQ0HxSrcA%2Bq52f%2BYcfEM2nUr4ulLQqEHDE8l1pbct3qJ1c1CA3GEE9iFwGl5lf%2FlbeG%2F3ZtB5vuO8CeXkbdWGUSUJMIUTxAYdNtYnozxS1x%2FD%2BhFEpa2DhPiEdd4eVr1F0WOzlIey7DKjxVW0bVFnumleMPERwMQtDYRf1nHPDM9xUvcd1hm3sTQtGu2ZME2gEDuqf6BtLeWViKXnaolKPaR2WSFXc1UKpe1XiD44eWmHkgUE1dIAg9akOeB9RUWmstoFQwJeLMJ5LrAQghbbNi%2FsKa4SGHqzWZk7vqttmdScIcAVkASvTEc6CIuTarzaRNKkv0Z1c8xiflsxKxaRMLyqcHSC2EymxzxBlCkM0Wx0RR63fZFETYKBa7uiNSvttc9l2FYMqedmo04cWmcN3UBvh7yVJomhKtndxxUxc4c83Z8bm4El3oV3XZrSzzd1RASnc70Wge%2Fyq%2F7EeyVcrLWHc926gVktMTdjUs1SykvWexh7QiI9RV7NAOxMenlOm%2B8LFwFwc6OIitdXKaBGFs1QKma7ZOQlf27IwbOanZRuke7BjXRsJKFiZCOb5eoqQ61CC8adKvoXoHcY64I39q5rqmlyledYCAZNg78NgZJ2%2BZZ7WgNtHjjVj7dTDgsXKx%2BMMba3b8GOqUBo6CJqwxeayvNuYS57IfyT6WTneWxfWMklJZoTx8nQC4I2As4KZGwewGNtJNG2CANVxFR9gUg7JC9C2jr85um8jeuWxF1jENsZo2PdEavNCDEyL7gJH%2FuDfqMy9%2FblV9WneOhwM5Tg687D%2BQiQ5nX%2FdVxDKuBOl7aGFrCao2tw5N2spc1q%2BgUEqFKQH7XBv3yro1aZdIYnsK00y42wsKEEB7xSJPx&X-Amz-Signature=e2bc9122513913f775f8dfb2c264aa06fffdf5e473e335926c07bac0995b8b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR26AWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDHGn4vbhDQD3wrGtuk2HxirmtSZAOlSEbFhyvtzmyeugIgGPJ%2B9PxoBOSQO8IkDo4jhflNH%2BK83%2BPZudFDZ5NR9TsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yH3VvL2UNaQ0HxSrcA%2Bq52f%2BYcfEM2nUr4ulLQqEHDE8l1pbct3qJ1c1CA3GEE9iFwGl5lf%2FlbeG%2F3ZtB5vuO8CeXkbdWGUSUJMIUTxAYdNtYnozxS1x%2FD%2BhFEpa2DhPiEdd4eVr1F0WOzlIey7DKjxVW0bVFnumleMPERwMQtDYRf1nHPDM9xUvcd1hm3sTQtGu2ZME2gEDuqf6BtLeWViKXnaolKPaR2WSFXc1UKpe1XiD44eWmHkgUE1dIAg9akOeB9RUWmstoFQwJeLMJ5LrAQghbbNi%2FsKa4SGHqzWZk7vqttmdScIcAVkASvTEc6CIuTarzaRNKkv0Z1c8xiflsxKxaRMLyqcHSC2EymxzxBlCkM0Wx0RR63fZFETYKBa7uiNSvttc9l2FYMqedmo04cWmcN3UBvh7yVJomhKtndxxUxc4c83Z8bm4El3oV3XZrSzzd1RASnc70Wge%2Fyq%2F7EeyVcrLWHc926gVktMTdjUs1SykvWexh7QiI9RV7NAOxMenlOm%2B8LFwFwc6OIitdXKaBGFs1QKma7ZOQlf27IwbOanZRuke7BjXRsJKFiZCOb5eoqQ61CC8adKvoXoHcY64I39q5rqmlyledYCAZNg78NgZJ2%2BZZ7WgNtHjjVj7dTDgsXKx%2BMMba3b8GOqUBo6CJqwxeayvNuYS57IfyT6WTneWxfWMklJZoTx8nQC4I2As4KZGwewGNtJNG2CANVxFR9gUg7JC9C2jr85um8jeuWxF1jENsZo2PdEavNCDEyL7gJH%2FuDfqMy9%2FblV9WneOhwM5Tg687D%2BQiQ5nX%2FdVxDKuBOl7aGFrCao2tw5N2spc1q%2BgUEqFKQH7XBv3yro1aZdIYnsK00y42wsKEEB7xSJPx&X-Amz-Signature=4d8c1bf0d5baa944edd14bd5c8f0285c50310a3e72aa73fc15c5165df886e17f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR26AWQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDHGn4vbhDQD3wrGtuk2HxirmtSZAOlSEbFhyvtzmyeugIgGPJ%2B9PxoBOSQO8IkDo4jhflNH%2BK83%2BPZudFDZ5NR9TsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7yH3VvL2UNaQ0HxSrcA%2Bq52f%2BYcfEM2nUr4ulLQqEHDE8l1pbct3qJ1c1CA3GEE9iFwGl5lf%2FlbeG%2F3ZtB5vuO8CeXkbdWGUSUJMIUTxAYdNtYnozxS1x%2FD%2BhFEpa2DhPiEdd4eVr1F0WOzlIey7DKjxVW0bVFnumleMPERwMQtDYRf1nHPDM9xUvcd1hm3sTQtGu2ZME2gEDuqf6BtLeWViKXnaolKPaR2WSFXc1UKpe1XiD44eWmHkgUE1dIAg9akOeB9RUWmstoFQwJeLMJ5LrAQghbbNi%2FsKa4SGHqzWZk7vqttmdScIcAVkASvTEc6CIuTarzaRNKkv0Z1c8xiflsxKxaRMLyqcHSC2EymxzxBlCkM0Wx0RR63fZFETYKBa7uiNSvttc9l2FYMqedmo04cWmcN3UBvh7yVJomhKtndxxUxc4c83Z8bm4El3oV3XZrSzzd1RASnc70Wge%2Fyq%2F7EeyVcrLWHc926gVktMTdjUs1SykvWexh7QiI9RV7NAOxMenlOm%2B8LFwFwc6OIitdXKaBGFs1QKma7ZOQlf27IwbOanZRuke7BjXRsJKFiZCOb5eoqQ61CC8adKvoXoHcY64I39q5rqmlyledYCAZNg78NgZJ2%2BZZ7WgNtHjjVj7dTDgsXKx%2BMMba3b8GOqUBo6CJqwxeayvNuYS57IfyT6WTneWxfWMklJZoTx8nQC4I2As4KZGwewGNtJNG2CANVxFR9gUg7JC9C2jr85um8jeuWxF1jENsZo2PdEavNCDEyL7gJH%2FuDfqMy9%2FblV9WneOhwM5Tg687D%2BQiQ5nX%2FdVxDKuBOl7aGFrCao2tw5N2spc1q%2BgUEqFKQH7XBv3yro1aZdIYnsK00y42wsKEEB7xSJPx&X-Amz-Signature=9cc9f7e6c97388e664d3b7c41a1ec051ff485a0392ead2151803343212ec016f&X-Amz-SignedHeaders=host&x-id=GetObject)
