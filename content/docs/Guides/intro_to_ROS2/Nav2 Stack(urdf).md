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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6ZUDUX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LWQJI6ZVRe%2B6DbRUgc4EQfFC71glXF%2BQCwGET3qkeAIhAJkY1LnGgodXlmaiqUkqa8MXPaup3EP%2F8PaGqx8tk7IfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPPxi85tHPMMo8msq3APnakbKBzn0ZvGBMEZY54WTI4%2FEoN99j%2FI%2BtMKE8XOeTCf5guesQj8A4ph9HICT81oQmDGbQ2gAoXNf9E4H9fFlq7ECbAjxSHo6EXEf%2Fv2o9mnKxsoZHIDJmzZuYoP3mk3tqld0e6Ya3YZ9wkQUKbQBGOkFq4ScZZHdgk9JoNB%2Fz9FEo8%2FByGG%2BbYZv7yPGZ7XnTT4fkqnHjb8v9m6WSPSnHIff%2FGJmNGza%2FymevKd2mu4dEVZO2GjTo9nd9%2Bu6NhYXGXtEIaZd%2Fz2mKevHtzC7vyxyAAZzNGW%2Fz5dzbww1UBlMiixcvclSP6lYgyb1lRgPztR%2FZ83NenXp%2FH8plnDZ8mEJEvNX3Em%2FDA58m5SBNwnsXO5DUdoIxoa6dZqTTH%2FoHkK1XldcGUzNDAmfLtOvii78bvv0thTjB7IDeEapHfGGfhn%2FeBhyHv7EYb5eZSdZNBvmXACUMcllb2ictotDjQQOR9Rjly9hvKJQ3DJxcpbUeTw%2FWDQB0My9HzwbXx8G%2BBD2xk5U9tG3XPZ3JvrWUmC7x1%2Bd4ZFoDvaAbDHBNscis7fCJr5MDVT%2BpO%2FxDxkvapvq2476WYGs17pHHTdOpq25lXu50zxsrXSC6EcQ8lZqECep7InYQEQ9sTDn0tnCBjqkATgUzC69MxumkgyE4eI%2Fc8i4iS5eSZWKCWwVTWdspdF37ZZkuVFITf09TJztxANK3nCkkvUfqE08TeVEdDXJeB1Gu5jd%2FDen%2B6SOdVzOVnbum6PVHb9DXqEuQIPqvwkEd37BQ%2FJUy08oHtItNc56aw6gsE6rxT5yug6yguIj7Ow1zuAWlijMJnM5Jy1TrncbbgUG1nVdHKlzghtXlLehTHxfXl6%2F&X-Amz-Signature=3ac3d1a029ed298d8afa13cb9084b72c933fc80aade6d13b289cc0d91db27660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6ZUDUX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LWQJI6ZVRe%2B6DbRUgc4EQfFC71glXF%2BQCwGET3qkeAIhAJkY1LnGgodXlmaiqUkqa8MXPaup3EP%2F8PaGqx8tk7IfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPPxi85tHPMMo8msq3APnakbKBzn0ZvGBMEZY54WTI4%2FEoN99j%2FI%2BtMKE8XOeTCf5guesQj8A4ph9HICT81oQmDGbQ2gAoXNf9E4H9fFlq7ECbAjxSHo6EXEf%2Fv2o9mnKxsoZHIDJmzZuYoP3mk3tqld0e6Ya3YZ9wkQUKbQBGOkFq4ScZZHdgk9JoNB%2Fz9FEo8%2FByGG%2BbYZv7yPGZ7XnTT4fkqnHjb8v9m6WSPSnHIff%2FGJmNGza%2FymevKd2mu4dEVZO2GjTo9nd9%2Bu6NhYXGXtEIaZd%2Fz2mKevHtzC7vyxyAAZzNGW%2Fz5dzbww1UBlMiixcvclSP6lYgyb1lRgPztR%2FZ83NenXp%2FH8plnDZ8mEJEvNX3Em%2FDA58m5SBNwnsXO5DUdoIxoa6dZqTTH%2FoHkK1XldcGUzNDAmfLtOvii78bvv0thTjB7IDeEapHfGGfhn%2FeBhyHv7EYb5eZSdZNBvmXACUMcllb2ictotDjQQOR9Rjly9hvKJQ3DJxcpbUeTw%2FWDQB0My9HzwbXx8G%2BBD2xk5U9tG3XPZ3JvrWUmC7x1%2Bd4ZFoDvaAbDHBNscis7fCJr5MDVT%2BpO%2FxDxkvapvq2476WYGs17pHHTdOpq25lXu50zxsrXSC6EcQ8lZqECep7InYQEQ9sTDn0tnCBjqkATgUzC69MxumkgyE4eI%2Fc8i4iS5eSZWKCWwVTWdspdF37ZZkuVFITf09TJztxANK3nCkkvUfqE08TeVEdDXJeB1Gu5jd%2FDen%2B6SOdVzOVnbum6PVHb9DXqEuQIPqvwkEd37BQ%2FJUy08oHtItNc56aw6gsE6rxT5yug6yguIj7Ow1zuAWlijMJnM5Jy1TrncbbgUG1nVdHKlzghtXlLehTHxfXl6%2F&X-Amz-Signature=d1329ee0cbc691eee8827812bf1db3a09812cad556569ae3c110ba1f741c59c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6ZUDUX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LWQJI6ZVRe%2B6DbRUgc4EQfFC71glXF%2BQCwGET3qkeAIhAJkY1LnGgodXlmaiqUkqa8MXPaup3EP%2F8PaGqx8tk7IfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPPxi85tHPMMo8msq3APnakbKBzn0ZvGBMEZY54WTI4%2FEoN99j%2FI%2BtMKE8XOeTCf5guesQj8A4ph9HICT81oQmDGbQ2gAoXNf9E4H9fFlq7ECbAjxSHo6EXEf%2Fv2o9mnKxsoZHIDJmzZuYoP3mk3tqld0e6Ya3YZ9wkQUKbQBGOkFq4ScZZHdgk9JoNB%2Fz9FEo8%2FByGG%2BbYZv7yPGZ7XnTT4fkqnHjb8v9m6WSPSnHIff%2FGJmNGza%2FymevKd2mu4dEVZO2GjTo9nd9%2Bu6NhYXGXtEIaZd%2Fz2mKevHtzC7vyxyAAZzNGW%2Fz5dzbww1UBlMiixcvclSP6lYgyb1lRgPztR%2FZ83NenXp%2FH8plnDZ8mEJEvNX3Em%2FDA58m5SBNwnsXO5DUdoIxoa6dZqTTH%2FoHkK1XldcGUzNDAmfLtOvii78bvv0thTjB7IDeEapHfGGfhn%2FeBhyHv7EYb5eZSdZNBvmXACUMcllb2ictotDjQQOR9Rjly9hvKJQ3DJxcpbUeTw%2FWDQB0My9HzwbXx8G%2BBD2xk5U9tG3XPZ3JvrWUmC7x1%2Bd4ZFoDvaAbDHBNscis7fCJr5MDVT%2BpO%2FxDxkvapvq2476WYGs17pHHTdOpq25lXu50zxsrXSC6EcQ8lZqECep7InYQEQ9sTDn0tnCBjqkATgUzC69MxumkgyE4eI%2Fc8i4iS5eSZWKCWwVTWdspdF37ZZkuVFITf09TJztxANK3nCkkvUfqE08TeVEdDXJeB1Gu5jd%2FDen%2B6SOdVzOVnbum6PVHb9DXqEuQIPqvwkEd37BQ%2FJUy08oHtItNc56aw6gsE6rxT5yug6yguIj7Ow1zuAWlijMJnM5Jy1TrncbbgUG1nVdHKlzghtXlLehTHxfXl6%2F&X-Amz-Signature=442791e51c04adcce0105c2580d69872e11cf2b81d207d80111a3eb19b9c7b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6ZUDUX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LWQJI6ZVRe%2B6DbRUgc4EQfFC71glXF%2BQCwGET3qkeAIhAJkY1LnGgodXlmaiqUkqa8MXPaup3EP%2F8PaGqx8tk7IfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPPxi85tHPMMo8msq3APnakbKBzn0ZvGBMEZY54WTI4%2FEoN99j%2FI%2BtMKE8XOeTCf5guesQj8A4ph9HICT81oQmDGbQ2gAoXNf9E4H9fFlq7ECbAjxSHo6EXEf%2Fv2o9mnKxsoZHIDJmzZuYoP3mk3tqld0e6Ya3YZ9wkQUKbQBGOkFq4ScZZHdgk9JoNB%2Fz9FEo8%2FByGG%2BbYZv7yPGZ7XnTT4fkqnHjb8v9m6WSPSnHIff%2FGJmNGza%2FymevKd2mu4dEVZO2GjTo9nd9%2Bu6NhYXGXtEIaZd%2Fz2mKevHtzC7vyxyAAZzNGW%2Fz5dzbww1UBlMiixcvclSP6lYgyb1lRgPztR%2FZ83NenXp%2FH8plnDZ8mEJEvNX3Em%2FDA58m5SBNwnsXO5DUdoIxoa6dZqTTH%2FoHkK1XldcGUzNDAmfLtOvii78bvv0thTjB7IDeEapHfGGfhn%2FeBhyHv7EYb5eZSdZNBvmXACUMcllb2ictotDjQQOR9Rjly9hvKJQ3DJxcpbUeTw%2FWDQB0My9HzwbXx8G%2BBD2xk5U9tG3XPZ3JvrWUmC7x1%2Bd4ZFoDvaAbDHBNscis7fCJr5MDVT%2BpO%2FxDxkvapvq2476WYGs17pHHTdOpq25lXu50zxsrXSC6EcQ8lZqECep7InYQEQ9sTDn0tnCBjqkATgUzC69MxumkgyE4eI%2Fc8i4iS5eSZWKCWwVTWdspdF37ZZkuVFITf09TJztxANK3nCkkvUfqE08TeVEdDXJeB1Gu5jd%2FDen%2B6SOdVzOVnbum6PVHb9DXqEuQIPqvwkEd37BQ%2FJUy08oHtItNc56aw6gsE6rxT5yug6yguIj7Ow1zuAWlijMJnM5Jy1TrncbbgUG1nVdHKlzghtXlLehTHxfXl6%2F&X-Amz-Signature=e00b9980d0c3db77ed0fcdbb3f8947822f84072d368614051c30b0fdfc836c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6ZUDUX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LWQJI6ZVRe%2B6DbRUgc4EQfFC71glXF%2BQCwGET3qkeAIhAJkY1LnGgodXlmaiqUkqa8MXPaup3EP%2F8PaGqx8tk7IfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPPxi85tHPMMo8msq3APnakbKBzn0ZvGBMEZY54WTI4%2FEoN99j%2FI%2BtMKE8XOeTCf5guesQj8A4ph9HICT81oQmDGbQ2gAoXNf9E4H9fFlq7ECbAjxSHo6EXEf%2Fv2o9mnKxsoZHIDJmzZuYoP3mk3tqld0e6Ya3YZ9wkQUKbQBGOkFq4ScZZHdgk9JoNB%2Fz9FEo8%2FByGG%2BbYZv7yPGZ7XnTT4fkqnHjb8v9m6WSPSnHIff%2FGJmNGza%2FymevKd2mu4dEVZO2GjTo9nd9%2Bu6NhYXGXtEIaZd%2Fz2mKevHtzC7vyxyAAZzNGW%2Fz5dzbww1UBlMiixcvclSP6lYgyb1lRgPztR%2FZ83NenXp%2FH8plnDZ8mEJEvNX3Em%2FDA58m5SBNwnsXO5DUdoIxoa6dZqTTH%2FoHkK1XldcGUzNDAmfLtOvii78bvv0thTjB7IDeEapHfGGfhn%2FeBhyHv7EYb5eZSdZNBvmXACUMcllb2ictotDjQQOR9Rjly9hvKJQ3DJxcpbUeTw%2FWDQB0My9HzwbXx8G%2BBD2xk5U9tG3XPZ3JvrWUmC7x1%2Bd4ZFoDvaAbDHBNscis7fCJr5MDVT%2BpO%2FxDxkvapvq2476WYGs17pHHTdOpq25lXu50zxsrXSC6EcQ8lZqECep7InYQEQ9sTDn0tnCBjqkATgUzC69MxumkgyE4eI%2Fc8i4iS5eSZWKCWwVTWdspdF37ZZkuVFITf09TJztxANK3nCkkvUfqE08TeVEdDXJeB1Gu5jd%2FDen%2B6SOdVzOVnbum6PVHb9DXqEuQIPqvwkEd37BQ%2FJUy08oHtItNc56aw6gsE6rxT5yug6yguIj7Ow1zuAWlijMJnM5Jy1TrncbbgUG1nVdHKlzghtXlLehTHxfXl6%2F&X-Amz-Signature=3c6c867305710d5aa310b2766e5b88226c8134c17a3c9d53d766fd77789b7311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB6ZUDUX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4LWQJI6ZVRe%2B6DbRUgc4EQfFC71glXF%2BQCwGET3qkeAIhAJkY1LnGgodXlmaiqUkqa8MXPaup3EP%2F8PaGqx8tk7IfKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPPxi85tHPMMo8msq3APnakbKBzn0ZvGBMEZY54WTI4%2FEoN99j%2FI%2BtMKE8XOeTCf5guesQj8A4ph9HICT81oQmDGbQ2gAoXNf9E4H9fFlq7ECbAjxSHo6EXEf%2Fv2o9mnKxsoZHIDJmzZuYoP3mk3tqld0e6Ya3YZ9wkQUKbQBGOkFq4ScZZHdgk9JoNB%2Fz9FEo8%2FByGG%2BbYZv7yPGZ7XnTT4fkqnHjb8v9m6WSPSnHIff%2FGJmNGza%2FymevKd2mu4dEVZO2GjTo9nd9%2Bu6NhYXGXtEIaZd%2Fz2mKevHtzC7vyxyAAZzNGW%2Fz5dzbww1UBlMiixcvclSP6lYgyb1lRgPztR%2FZ83NenXp%2FH8plnDZ8mEJEvNX3Em%2FDA58m5SBNwnsXO5DUdoIxoa6dZqTTH%2FoHkK1XldcGUzNDAmfLtOvii78bvv0thTjB7IDeEapHfGGfhn%2FeBhyHv7EYb5eZSdZNBvmXACUMcllb2ictotDjQQOR9Rjly9hvKJQ3DJxcpbUeTw%2FWDQB0My9HzwbXx8G%2BBD2xk5U9tG3XPZ3JvrWUmC7x1%2Bd4ZFoDvaAbDHBNscis7fCJr5MDVT%2BpO%2FxDxkvapvq2476WYGs17pHHTdOpq25lXu50zxsrXSC6EcQ8lZqECep7InYQEQ9sTDn0tnCBjqkATgUzC69MxumkgyE4eI%2Fc8i4iS5eSZWKCWwVTWdspdF37ZZkuVFITf09TJztxANK3nCkkvUfqE08TeVEdDXJeB1Gu5jd%2FDen%2B6SOdVzOVnbum6PVHb9DXqEuQIPqvwkEd37BQ%2FJUy08oHtItNc56aw6gsE6rxT5yug6yguIj7Ow1zuAWlijMJnM5Jy1TrncbbgUG1nVdHKlzghtXlLehTHxfXl6%2F&X-Amz-Signature=f8ee2966222c0dd67f41370bf5388d749fd46d78334ae6238b693af67afdaf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
