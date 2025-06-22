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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3GHJSP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICknU8qWxgKcoQOFlOEnilmzvvGkV2%2B6H77nKCcLMUwOAiBhaDiKqcmVg1kvo3yp84Mxfyqmk4k173G1avs%2BAtyEYyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTRhWSIWI8scADaIKtwDlrPtLTAK7aL1JMRRdXAnMZz%2Ff3uzW4THglplObkUCuogcXVvCHtNM49thGGnb3CQ1FFxJwEV9NXpCo1z%2FW15ICNRK7xK2YTH%2BfgJUn8UB0FfoZKTooRuQldx2%2BzUTmmrlIIB1C%2FOw41B4PGtG0TDjKValV%2FFQ5Ibissbn5zR0MhWScIj76Cy9qiyZo4N9TYwj%2BjIBVNyByFktWRVq2ILArW%2BLodx%2F2cbKmuE0huZuoR5IqUXs6dhO1vd3Y67MRXY%2FeKDfoTZ1Q5uGz02U1qEiieriEPvFdc6AXwx7mmWHjLsFwQvbvBWjonzA38qorY%2BTOxTsrTRYlLQqL6eZqLOgeLE11qOsUtjw8zZJMP9Zfepui%2FmKI9ZeOWVDdop8xp0g42uPOY%2BUop65RMdVfs9JS5S6f8HOTDM16Vj8r92kqZcsQO%2B4Ad%2FUWFRq65AUqhRperBU3n1WD%2BA3nMDQbNsIzVizxgXLi3OTv8R8zZMBPz0ysOZ9Qo5a3iOWasIuy%2FMoMF84VEWa5JK%2FKKbaKAF5pHMUNIXk8oChTw%2B4fb0w0bi1C3hBKDB8iyFF2g%2BQUB6AltwiEIz7zZU1vr2At0sO7yTGg0iZMbIk3BSSp2ZomiGU6vmE4wkgNrLdPEw1qvewgY6pgGoJViNRL25FCOVHFt8xuIWy9HgFT%2BpTmnxGLBAQtMgEWjOpta%2BOBYscrWawZ53RB5wAWx7Lzd6m2tWFFGycGQeZVO1duVlXXSxVu%2BKnW9F0uBUweXkfqYKg8NRp2O6eQ0TI%2BmYlrlSWzsRdA0bTYhzMyCLeV7FigbgHg%2F43TxIIf1UFJqcRIGYsrK9Vd3D7pjc8RZOJCaZdn95ozWZCD1whQbBy%2BPP&X-Amz-Signature=12da0a52a30235e7c6ca932892b91cd79eab5392c33f4677f67a9a903e0ecc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3GHJSP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICknU8qWxgKcoQOFlOEnilmzvvGkV2%2B6H77nKCcLMUwOAiBhaDiKqcmVg1kvo3yp84Mxfyqmk4k173G1avs%2BAtyEYyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTRhWSIWI8scADaIKtwDlrPtLTAK7aL1JMRRdXAnMZz%2Ff3uzW4THglplObkUCuogcXVvCHtNM49thGGnb3CQ1FFxJwEV9NXpCo1z%2FW15ICNRK7xK2YTH%2BfgJUn8UB0FfoZKTooRuQldx2%2BzUTmmrlIIB1C%2FOw41B4PGtG0TDjKValV%2FFQ5Ibissbn5zR0MhWScIj76Cy9qiyZo4N9TYwj%2BjIBVNyByFktWRVq2ILArW%2BLodx%2F2cbKmuE0huZuoR5IqUXs6dhO1vd3Y67MRXY%2FeKDfoTZ1Q5uGz02U1qEiieriEPvFdc6AXwx7mmWHjLsFwQvbvBWjonzA38qorY%2BTOxTsrTRYlLQqL6eZqLOgeLE11qOsUtjw8zZJMP9Zfepui%2FmKI9ZeOWVDdop8xp0g42uPOY%2BUop65RMdVfs9JS5S6f8HOTDM16Vj8r92kqZcsQO%2B4Ad%2FUWFRq65AUqhRperBU3n1WD%2BA3nMDQbNsIzVizxgXLi3OTv8R8zZMBPz0ysOZ9Qo5a3iOWasIuy%2FMoMF84VEWa5JK%2FKKbaKAF5pHMUNIXk8oChTw%2B4fb0w0bi1C3hBKDB8iyFF2g%2BQUB6AltwiEIz7zZU1vr2At0sO7yTGg0iZMbIk3BSSp2ZomiGU6vmE4wkgNrLdPEw1qvewgY6pgGoJViNRL25FCOVHFt8xuIWy9HgFT%2BpTmnxGLBAQtMgEWjOpta%2BOBYscrWawZ53RB5wAWx7Lzd6m2tWFFGycGQeZVO1duVlXXSxVu%2BKnW9F0uBUweXkfqYKg8NRp2O6eQ0TI%2BmYlrlSWzsRdA0bTYhzMyCLeV7FigbgHg%2F43TxIIf1UFJqcRIGYsrK9Vd3D7pjc8RZOJCaZdn95ozWZCD1whQbBy%2BPP&X-Amz-Signature=9923a296f2c01d7b1a5debf3f11e48a8bfdf809f3a1feced011e94a81b3adcaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3GHJSP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICknU8qWxgKcoQOFlOEnilmzvvGkV2%2B6H77nKCcLMUwOAiBhaDiKqcmVg1kvo3yp84Mxfyqmk4k173G1avs%2BAtyEYyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTRhWSIWI8scADaIKtwDlrPtLTAK7aL1JMRRdXAnMZz%2Ff3uzW4THglplObkUCuogcXVvCHtNM49thGGnb3CQ1FFxJwEV9NXpCo1z%2FW15ICNRK7xK2YTH%2BfgJUn8UB0FfoZKTooRuQldx2%2BzUTmmrlIIB1C%2FOw41B4PGtG0TDjKValV%2FFQ5Ibissbn5zR0MhWScIj76Cy9qiyZo4N9TYwj%2BjIBVNyByFktWRVq2ILArW%2BLodx%2F2cbKmuE0huZuoR5IqUXs6dhO1vd3Y67MRXY%2FeKDfoTZ1Q5uGz02U1qEiieriEPvFdc6AXwx7mmWHjLsFwQvbvBWjonzA38qorY%2BTOxTsrTRYlLQqL6eZqLOgeLE11qOsUtjw8zZJMP9Zfepui%2FmKI9ZeOWVDdop8xp0g42uPOY%2BUop65RMdVfs9JS5S6f8HOTDM16Vj8r92kqZcsQO%2B4Ad%2FUWFRq65AUqhRperBU3n1WD%2BA3nMDQbNsIzVizxgXLi3OTv8R8zZMBPz0ysOZ9Qo5a3iOWasIuy%2FMoMF84VEWa5JK%2FKKbaKAF5pHMUNIXk8oChTw%2B4fb0w0bi1C3hBKDB8iyFF2g%2BQUB6AltwiEIz7zZU1vr2At0sO7yTGg0iZMbIk3BSSp2ZomiGU6vmE4wkgNrLdPEw1qvewgY6pgGoJViNRL25FCOVHFt8xuIWy9HgFT%2BpTmnxGLBAQtMgEWjOpta%2BOBYscrWawZ53RB5wAWx7Lzd6m2tWFFGycGQeZVO1duVlXXSxVu%2BKnW9F0uBUweXkfqYKg8NRp2O6eQ0TI%2BmYlrlSWzsRdA0bTYhzMyCLeV7FigbgHg%2F43TxIIf1UFJqcRIGYsrK9Vd3D7pjc8RZOJCaZdn95ozWZCD1whQbBy%2BPP&X-Amz-Signature=6979ee1a46213295ba91b18abc180525a5826ad8ba640e61aee521aa9dc3ff83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3GHJSP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICknU8qWxgKcoQOFlOEnilmzvvGkV2%2B6H77nKCcLMUwOAiBhaDiKqcmVg1kvo3yp84Mxfyqmk4k173G1avs%2BAtyEYyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTRhWSIWI8scADaIKtwDlrPtLTAK7aL1JMRRdXAnMZz%2Ff3uzW4THglplObkUCuogcXVvCHtNM49thGGnb3CQ1FFxJwEV9NXpCo1z%2FW15ICNRK7xK2YTH%2BfgJUn8UB0FfoZKTooRuQldx2%2BzUTmmrlIIB1C%2FOw41B4PGtG0TDjKValV%2FFQ5Ibissbn5zR0MhWScIj76Cy9qiyZo4N9TYwj%2BjIBVNyByFktWRVq2ILArW%2BLodx%2F2cbKmuE0huZuoR5IqUXs6dhO1vd3Y67MRXY%2FeKDfoTZ1Q5uGz02U1qEiieriEPvFdc6AXwx7mmWHjLsFwQvbvBWjonzA38qorY%2BTOxTsrTRYlLQqL6eZqLOgeLE11qOsUtjw8zZJMP9Zfepui%2FmKI9ZeOWVDdop8xp0g42uPOY%2BUop65RMdVfs9JS5S6f8HOTDM16Vj8r92kqZcsQO%2B4Ad%2FUWFRq65AUqhRperBU3n1WD%2BA3nMDQbNsIzVizxgXLi3OTv8R8zZMBPz0ysOZ9Qo5a3iOWasIuy%2FMoMF84VEWa5JK%2FKKbaKAF5pHMUNIXk8oChTw%2B4fb0w0bi1C3hBKDB8iyFF2g%2BQUB6AltwiEIz7zZU1vr2At0sO7yTGg0iZMbIk3BSSp2ZomiGU6vmE4wkgNrLdPEw1qvewgY6pgGoJViNRL25FCOVHFt8xuIWy9HgFT%2BpTmnxGLBAQtMgEWjOpta%2BOBYscrWawZ53RB5wAWx7Lzd6m2tWFFGycGQeZVO1duVlXXSxVu%2BKnW9F0uBUweXkfqYKg8NRp2O6eQ0TI%2BmYlrlSWzsRdA0bTYhzMyCLeV7FigbgHg%2F43TxIIf1UFJqcRIGYsrK9Vd3D7pjc8RZOJCaZdn95ozWZCD1whQbBy%2BPP&X-Amz-Signature=8fe75248168f5ef7d931012eb4c89716a71a523c853c7e9e60129c6861561401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3GHJSP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICknU8qWxgKcoQOFlOEnilmzvvGkV2%2B6H77nKCcLMUwOAiBhaDiKqcmVg1kvo3yp84Mxfyqmk4k173G1avs%2BAtyEYyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTRhWSIWI8scADaIKtwDlrPtLTAK7aL1JMRRdXAnMZz%2Ff3uzW4THglplObkUCuogcXVvCHtNM49thGGnb3CQ1FFxJwEV9NXpCo1z%2FW15ICNRK7xK2YTH%2BfgJUn8UB0FfoZKTooRuQldx2%2BzUTmmrlIIB1C%2FOw41B4PGtG0TDjKValV%2FFQ5Ibissbn5zR0MhWScIj76Cy9qiyZo4N9TYwj%2BjIBVNyByFktWRVq2ILArW%2BLodx%2F2cbKmuE0huZuoR5IqUXs6dhO1vd3Y67MRXY%2FeKDfoTZ1Q5uGz02U1qEiieriEPvFdc6AXwx7mmWHjLsFwQvbvBWjonzA38qorY%2BTOxTsrTRYlLQqL6eZqLOgeLE11qOsUtjw8zZJMP9Zfepui%2FmKI9ZeOWVDdop8xp0g42uPOY%2BUop65RMdVfs9JS5S6f8HOTDM16Vj8r92kqZcsQO%2B4Ad%2FUWFRq65AUqhRperBU3n1WD%2BA3nMDQbNsIzVizxgXLi3OTv8R8zZMBPz0ysOZ9Qo5a3iOWasIuy%2FMoMF84VEWa5JK%2FKKbaKAF5pHMUNIXk8oChTw%2B4fb0w0bi1C3hBKDB8iyFF2g%2BQUB6AltwiEIz7zZU1vr2At0sO7yTGg0iZMbIk3BSSp2ZomiGU6vmE4wkgNrLdPEw1qvewgY6pgGoJViNRL25FCOVHFt8xuIWy9HgFT%2BpTmnxGLBAQtMgEWjOpta%2BOBYscrWawZ53RB5wAWx7Lzd6m2tWFFGycGQeZVO1duVlXXSxVu%2BKnW9F0uBUweXkfqYKg8NRp2O6eQ0TI%2BmYlrlSWzsRdA0bTYhzMyCLeV7FigbgHg%2F43TxIIf1UFJqcRIGYsrK9Vd3D7pjc8RZOJCaZdn95ozWZCD1whQbBy%2BPP&X-Amz-Signature=65deaa31a1875cf0b9f9b512b86503f861a08a34828c4d13e7ad32a5f97bcc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A3GHJSP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICknU8qWxgKcoQOFlOEnilmzvvGkV2%2B6H77nKCcLMUwOAiBhaDiKqcmVg1kvo3yp84Mxfyqmk4k173G1avs%2BAtyEYyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTRhWSIWI8scADaIKtwDlrPtLTAK7aL1JMRRdXAnMZz%2Ff3uzW4THglplObkUCuogcXVvCHtNM49thGGnb3CQ1FFxJwEV9NXpCo1z%2FW15ICNRK7xK2YTH%2BfgJUn8UB0FfoZKTooRuQldx2%2BzUTmmrlIIB1C%2FOw41B4PGtG0TDjKValV%2FFQ5Ibissbn5zR0MhWScIj76Cy9qiyZo4N9TYwj%2BjIBVNyByFktWRVq2ILArW%2BLodx%2F2cbKmuE0huZuoR5IqUXs6dhO1vd3Y67MRXY%2FeKDfoTZ1Q5uGz02U1qEiieriEPvFdc6AXwx7mmWHjLsFwQvbvBWjonzA38qorY%2BTOxTsrTRYlLQqL6eZqLOgeLE11qOsUtjw8zZJMP9Zfepui%2FmKI9ZeOWVDdop8xp0g42uPOY%2BUop65RMdVfs9JS5S6f8HOTDM16Vj8r92kqZcsQO%2B4Ad%2FUWFRq65AUqhRperBU3n1WD%2BA3nMDQbNsIzVizxgXLi3OTv8R8zZMBPz0ysOZ9Qo5a3iOWasIuy%2FMoMF84VEWa5JK%2FKKbaKAF5pHMUNIXk8oChTw%2B4fb0w0bi1C3hBKDB8iyFF2g%2BQUB6AltwiEIz7zZU1vr2At0sO7yTGg0iZMbIk3BSSp2ZomiGU6vmE4wkgNrLdPEw1qvewgY6pgGoJViNRL25FCOVHFt8xuIWy9HgFT%2BpTmnxGLBAQtMgEWjOpta%2BOBYscrWawZ53RB5wAWx7Lzd6m2tWFFGycGQeZVO1duVlXXSxVu%2BKnW9F0uBUweXkfqYKg8NRp2O6eQ0TI%2BmYlrlSWzsRdA0bTYhzMyCLeV7FigbgHg%2F43TxIIf1UFJqcRIGYsrK9Vd3D7pjc8RZOJCaZdn95ozWZCD1whQbBy%2BPP&X-Amz-Signature=1d92181af193e1e544cdd4a9251e7021ac45da2686eac6e1d6b2d1d50060d1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
