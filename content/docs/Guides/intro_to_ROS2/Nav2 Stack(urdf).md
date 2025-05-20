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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQP7O6O%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ysXeHQOuPkddtx85cuFvGxQ%2Btu%2BdaJfP8P3drNoppAiEAp7agqqY%2FXxNK9BregzVz1HD%2BMr9OWM%2Bu0WAEBP%2FQRSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdHhdk1ckrnuMamkSrcAw1C78lLlRINbH2U%2BVuzGuFtE08mDo5OIeewY4ajCZqyFcFSQG1d3IE1VRQRu%2BblUU6zZFl%2F%2BuuQcw9FluoxI773BeiH9EU7KRHwzai9PL6a12%2FsFZdP5oYtbChH6VDzREZ6DiEAAcETJtrfGmrjg3vSxvdMWpovr%2Fmn9b6i0OEzzeVEO%2BID2IlnQPWfbJyXG2yyT%2BfpU%2FXzQ%2FxK8F%2Fe%2Bm9MjS1TALZzYmiXNYpeSk9u%2BaWOLGl4HcjGvIl%2BZT88ZNq0sUsPKilAX8QyDa%2BUP81QJFVn0J9B5fJSBcpOEDT%2FqwxtvrH%2FUTUKRlDvitEGrtGoE5HGJcRtRG6xIbojKJxorOUg%2BgOVavZuIO4XgCdENAYTpQs6iJz140v1kn%2FBorloPK5QCsQ3SqYMaOKUVe6BYsWfyrDr%2F0dUYUqz8DSsSYuCs9SlTTflgwWhkxpojjLG%2Bmnn9OS%2Bkrmi4kieAHB6CIIf5BGP%2BY60A8Bz0FCedydhhKx6ZKA9Nl063x5IqcuWNNaP8D0DNAoejHaWC%2B4vvU4SoKJaGdThiOBJ7SHcfxLlfKobNrby68XK%2Fohx6AOgvXxcQzuxCC5p1XkaRTvPrQs7z5KEuH0UHhsMC8uG7tco4ynby1I3GIbmMK6TscEGOqUB0mXozYTLh%2BPru7qe%2F0hgjYbuZy1EHs1dDvyM04EzHrJEPgiHRh3rxPx0OhAyDTt59X6pJFLvk3tbtV8tCzoHTvR9naNbFSvg2KBolx42qp%2FKnDvLzTU9lqCPMTPzf7YU102L10gHKfPDsg%2BIPafshoBr4zG6w4yqys1C44zhpGpg65NDdSpYehMHZ2KXbxOxNKxpJTgicLPKHwFQeYH02JVaso3Y&X-Amz-Signature=2d528dacd7e5f1afb2fb1e08b65d327ca6085d244e8aa32d2918a6c9a865dce1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQP7O6O%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ysXeHQOuPkddtx85cuFvGxQ%2Btu%2BdaJfP8P3drNoppAiEAp7agqqY%2FXxNK9BregzVz1HD%2BMr9OWM%2Bu0WAEBP%2FQRSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdHhdk1ckrnuMamkSrcAw1C78lLlRINbH2U%2BVuzGuFtE08mDo5OIeewY4ajCZqyFcFSQG1d3IE1VRQRu%2BblUU6zZFl%2F%2BuuQcw9FluoxI773BeiH9EU7KRHwzai9PL6a12%2FsFZdP5oYtbChH6VDzREZ6DiEAAcETJtrfGmrjg3vSxvdMWpovr%2Fmn9b6i0OEzzeVEO%2BID2IlnQPWfbJyXG2yyT%2BfpU%2FXzQ%2FxK8F%2Fe%2Bm9MjS1TALZzYmiXNYpeSk9u%2BaWOLGl4HcjGvIl%2BZT88ZNq0sUsPKilAX8QyDa%2BUP81QJFVn0J9B5fJSBcpOEDT%2FqwxtvrH%2FUTUKRlDvitEGrtGoE5HGJcRtRG6xIbojKJxorOUg%2BgOVavZuIO4XgCdENAYTpQs6iJz140v1kn%2FBorloPK5QCsQ3SqYMaOKUVe6BYsWfyrDr%2F0dUYUqz8DSsSYuCs9SlTTflgwWhkxpojjLG%2Bmnn9OS%2Bkrmi4kieAHB6CIIf5BGP%2BY60A8Bz0FCedydhhKx6ZKA9Nl063x5IqcuWNNaP8D0DNAoejHaWC%2B4vvU4SoKJaGdThiOBJ7SHcfxLlfKobNrby68XK%2Fohx6AOgvXxcQzuxCC5p1XkaRTvPrQs7z5KEuH0UHhsMC8uG7tco4ynby1I3GIbmMK6TscEGOqUB0mXozYTLh%2BPru7qe%2F0hgjYbuZy1EHs1dDvyM04EzHrJEPgiHRh3rxPx0OhAyDTt59X6pJFLvk3tbtV8tCzoHTvR9naNbFSvg2KBolx42qp%2FKnDvLzTU9lqCPMTPzf7YU102L10gHKfPDsg%2BIPafshoBr4zG6w4yqys1C44zhpGpg65NDdSpYehMHZ2KXbxOxNKxpJTgicLPKHwFQeYH02JVaso3Y&X-Amz-Signature=c8e0b8f99307a5094aa820800faf8ffe113764e6dc2746bbc8b3a0bf5533e2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQP7O6O%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ysXeHQOuPkddtx85cuFvGxQ%2Btu%2BdaJfP8P3drNoppAiEAp7agqqY%2FXxNK9BregzVz1HD%2BMr9OWM%2Bu0WAEBP%2FQRSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdHhdk1ckrnuMamkSrcAw1C78lLlRINbH2U%2BVuzGuFtE08mDo5OIeewY4ajCZqyFcFSQG1d3IE1VRQRu%2BblUU6zZFl%2F%2BuuQcw9FluoxI773BeiH9EU7KRHwzai9PL6a12%2FsFZdP5oYtbChH6VDzREZ6DiEAAcETJtrfGmrjg3vSxvdMWpovr%2Fmn9b6i0OEzzeVEO%2BID2IlnQPWfbJyXG2yyT%2BfpU%2FXzQ%2FxK8F%2Fe%2Bm9MjS1TALZzYmiXNYpeSk9u%2BaWOLGl4HcjGvIl%2BZT88ZNq0sUsPKilAX8QyDa%2BUP81QJFVn0J9B5fJSBcpOEDT%2FqwxtvrH%2FUTUKRlDvitEGrtGoE5HGJcRtRG6xIbojKJxorOUg%2BgOVavZuIO4XgCdENAYTpQs6iJz140v1kn%2FBorloPK5QCsQ3SqYMaOKUVe6BYsWfyrDr%2F0dUYUqz8DSsSYuCs9SlTTflgwWhkxpojjLG%2Bmnn9OS%2Bkrmi4kieAHB6CIIf5BGP%2BY60A8Bz0FCedydhhKx6ZKA9Nl063x5IqcuWNNaP8D0DNAoejHaWC%2B4vvU4SoKJaGdThiOBJ7SHcfxLlfKobNrby68XK%2Fohx6AOgvXxcQzuxCC5p1XkaRTvPrQs7z5KEuH0UHhsMC8uG7tco4ynby1I3GIbmMK6TscEGOqUB0mXozYTLh%2BPru7qe%2F0hgjYbuZy1EHs1dDvyM04EzHrJEPgiHRh3rxPx0OhAyDTt59X6pJFLvk3tbtV8tCzoHTvR9naNbFSvg2KBolx42qp%2FKnDvLzTU9lqCPMTPzf7YU102L10gHKfPDsg%2BIPafshoBr4zG6w4yqys1C44zhpGpg65NDdSpYehMHZ2KXbxOxNKxpJTgicLPKHwFQeYH02JVaso3Y&X-Amz-Signature=301767cdedb0ab1ca72ef202304675f5c2ed1efc98a4ea00d050d179371f8d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQP7O6O%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ysXeHQOuPkddtx85cuFvGxQ%2Btu%2BdaJfP8P3drNoppAiEAp7agqqY%2FXxNK9BregzVz1HD%2BMr9OWM%2Bu0WAEBP%2FQRSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdHhdk1ckrnuMamkSrcAw1C78lLlRINbH2U%2BVuzGuFtE08mDo5OIeewY4ajCZqyFcFSQG1d3IE1VRQRu%2BblUU6zZFl%2F%2BuuQcw9FluoxI773BeiH9EU7KRHwzai9PL6a12%2FsFZdP5oYtbChH6VDzREZ6DiEAAcETJtrfGmrjg3vSxvdMWpovr%2Fmn9b6i0OEzzeVEO%2BID2IlnQPWfbJyXG2yyT%2BfpU%2FXzQ%2FxK8F%2Fe%2Bm9MjS1TALZzYmiXNYpeSk9u%2BaWOLGl4HcjGvIl%2BZT88ZNq0sUsPKilAX8QyDa%2BUP81QJFVn0J9B5fJSBcpOEDT%2FqwxtvrH%2FUTUKRlDvitEGrtGoE5HGJcRtRG6xIbojKJxorOUg%2BgOVavZuIO4XgCdENAYTpQs6iJz140v1kn%2FBorloPK5QCsQ3SqYMaOKUVe6BYsWfyrDr%2F0dUYUqz8DSsSYuCs9SlTTflgwWhkxpojjLG%2Bmnn9OS%2Bkrmi4kieAHB6CIIf5BGP%2BY60A8Bz0FCedydhhKx6ZKA9Nl063x5IqcuWNNaP8D0DNAoejHaWC%2B4vvU4SoKJaGdThiOBJ7SHcfxLlfKobNrby68XK%2Fohx6AOgvXxcQzuxCC5p1XkaRTvPrQs7z5KEuH0UHhsMC8uG7tco4ynby1I3GIbmMK6TscEGOqUB0mXozYTLh%2BPru7qe%2F0hgjYbuZy1EHs1dDvyM04EzHrJEPgiHRh3rxPx0OhAyDTt59X6pJFLvk3tbtV8tCzoHTvR9naNbFSvg2KBolx42qp%2FKnDvLzTU9lqCPMTPzf7YU102L10gHKfPDsg%2BIPafshoBr4zG6w4yqys1C44zhpGpg65NDdSpYehMHZ2KXbxOxNKxpJTgicLPKHwFQeYH02JVaso3Y&X-Amz-Signature=a1096ee90e090beda61d52147c1c8e75e3dd78e9e493117adf2b7a020652d175&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQP7O6O%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ysXeHQOuPkddtx85cuFvGxQ%2Btu%2BdaJfP8P3drNoppAiEAp7agqqY%2FXxNK9BregzVz1HD%2BMr9OWM%2Bu0WAEBP%2FQRSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdHhdk1ckrnuMamkSrcAw1C78lLlRINbH2U%2BVuzGuFtE08mDo5OIeewY4ajCZqyFcFSQG1d3IE1VRQRu%2BblUU6zZFl%2F%2BuuQcw9FluoxI773BeiH9EU7KRHwzai9PL6a12%2FsFZdP5oYtbChH6VDzREZ6DiEAAcETJtrfGmrjg3vSxvdMWpovr%2Fmn9b6i0OEzzeVEO%2BID2IlnQPWfbJyXG2yyT%2BfpU%2FXzQ%2FxK8F%2Fe%2Bm9MjS1TALZzYmiXNYpeSk9u%2BaWOLGl4HcjGvIl%2BZT88ZNq0sUsPKilAX8QyDa%2BUP81QJFVn0J9B5fJSBcpOEDT%2FqwxtvrH%2FUTUKRlDvitEGrtGoE5HGJcRtRG6xIbojKJxorOUg%2BgOVavZuIO4XgCdENAYTpQs6iJz140v1kn%2FBorloPK5QCsQ3SqYMaOKUVe6BYsWfyrDr%2F0dUYUqz8DSsSYuCs9SlTTflgwWhkxpojjLG%2Bmnn9OS%2Bkrmi4kieAHB6CIIf5BGP%2BY60A8Bz0FCedydhhKx6ZKA9Nl063x5IqcuWNNaP8D0DNAoejHaWC%2B4vvU4SoKJaGdThiOBJ7SHcfxLlfKobNrby68XK%2Fohx6AOgvXxcQzuxCC5p1XkaRTvPrQs7z5KEuH0UHhsMC8uG7tco4ynby1I3GIbmMK6TscEGOqUB0mXozYTLh%2BPru7qe%2F0hgjYbuZy1EHs1dDvyM04EzHrJEPgiHRh3rxPx0OhAyDTt59X6pJFLvk3tbtV8tCzoHTvR9naNbFSvg2KBolx42qp%2FKnDvLzTU9lqCPMTPzf7YU102L10gHKfPDsg%2BIPafshoBr4zG6w4yqys1C44zhpGpg65NDdSpYehMHZ2KXbxOxNKxpJTgicLPKHwFQeYH02JVaso3Y&X-Amz-Signature=359910e9a2373f81143bab1d103c2081da74eee37298df4e618e41dc42db52c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQP7O6O%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7ysXeHQOuPkddtx85cuFvGxQ%2Btu%2BdaJfP8P3drNoppAiEAp7agqqY%2FXxNK9BregzVz1HD%2BMr9OWM%2Bu0WAEBP%2FQRSoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdHhdk1ckrnuMamkSrcAw1C78lLlRINbH2U%2BVuzGuFtE08mDo5OIeewY4ajCZqyFcFSQG1d3IE1VRQRu%2BblUU6zZFl%2F%2BuuQcw9FluoxI773BeiH9EU7KRHwzai9PL6a12%2FsFZdP5oYtbChH6VDzREZ6DiEAAcETJtrfGmrjg3vSxvdMWpovr%2Fmn9b6i0OEzzeVEO%2BID2IlnQPWfbJyXG2yyT%2BfpU%2FXzQ%2FxK8F%2Fe%2Bm9MjS1TALZzYmiXNYpeSk9u%2BaWOLGl4HcjGvIl%2BZT88ZNq0sUsPKilAX8QyDa%2BUP81QJFVn0J9B5fJSBcpOEDT%2FqwxtvrH%2FUTUKRlDvitEGrtGoE5HGJcRtRG6xIbojKJxorOUg%2BgOVavZuIO4XgCdENAYTpQs6iJz140v1kn%2FBorloPK5QCsQ3SqYMaOKUVe6BYsWfyrDr%2F0dUYUqz8DSsSYuCs9SlTTflgwWhkxpojjLG%2Bmnn9OS%2Bkrmi4kieAHB6CIIf5BGP%2BY60A8Bz0FCedydhhKx6ZKA9Nl063x5IqcuWNNaP8D0DNAoejHaWC%2B4vvU4SoKJaGdThiOBJ7SHcfxLlfKobNrby68XK%2Fohx6AOgvXxcQzuxCC5p1XkaRTvPrQs7z5KEuH0UHhsMC8uG7tco4ynby1I3GIbmMK6TscEGOqUB0mXozYTLh%2BPru7qe%2F0hgjYbuZy1EHs1dDvyM04EzHrJEPgiHRh3rxPx0OhAyDTt59X6pJFLvk3tbtV8tCzoHTvR9naNbFSvg2KBolx42qp%2FKnDvLzTU9lqCPMTPzf7YU102L10gHKfPDsg%2BIPafshoBr4zG6w4yqys1C44zhpGpg65NDdSpYehMHZ2KXbxOxNKxpJTgicLPKHwFQeYH02JVaso3Y&X-Amz-Signature=797844bf7a78ba5a481a449415476792501267d769d2ddb82a3bbc6ac5170442&X-Amz-SignedHeaders=host&x-id=GetObject)
