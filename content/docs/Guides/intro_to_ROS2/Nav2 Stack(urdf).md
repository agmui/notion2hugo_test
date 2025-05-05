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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFSSWPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJyqJTgsrHq6A%2FeHMP9TBQCJGjDpE7JO8WFwJ9IwKbgIgDsJHx9uv9CaW6fiUoScqQJ8VZUhLLgQMegyIucTk1C8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB%2B30sRaqcrSKheGzyrcA0VGd2eDiIIbjL8rwvLSXGsCHyNFzVmiRl8M8v%2BorpHMWadPcwW8d66SZs3Dy9m%2BpIpyrVH3d4F5QfkZOXJVe0ghV0QcaAi3HM0dY9JAEf4zXXvJRZOKIc7lTlKwtiomuxWwj2Ac4qVh1P%2FDpKRafjB4j0nhKplyoththDm4aFMZt%2FsBnHpPH%2BBeBfksgpNcRhT4zgCwYL%2FqSvNodgpu1ehS9RKwekypbU7%2Fm3S64Ez6fpW58qPQEJakZymocJO60vzRT%2F8Cg%2Bh5B%2FBVDJVCH7LL4cI4bkxQyVVTsv%2B1zMxLxaihyJtq%2BhjQWwWRtidivMb3KlKGSgYz9d%2Fej9CXceW0XP5fFMqqyTANcZRTydPxb4fsm3Pke%2BHQiMt0LIcG6EeBC08EfztVG15krp87hpgsTBbz4oiIMGHF2bxH680kHqR8N%2B%2F8oPqU0xgMdBwkGsKsPHpy3usUf0x4yUnK5xt4qZcbaA8sACCU9bAlGEhBjRea7a6QNVe4%2BIMTw1Ws6oSa7ESnH07yj4wAzohMo653DNEMLFOMo7zLerBxA7%2BZU5P5OpqID3L7gwjpmh3AfJ781H7ePp801Ue%2FvDpyGUiIYKXeA%2Fq8%2BJ1FyyO7Y52aK4pwUQ9LjxRH3cITMK%2Fl5MAGOqUBxKH4idxC3ACQHWoiDymPAyc7ekFX2DgG0JTyJ4sQxUl6KCLW9aFYWvG9NK3YHsdvxeHbykR5l%2BqWPXB61p4MRA1qEvQ1fJuGmFV94lCv%2FArHmco%2BFzeF%2Bgk3OzuH6SOWIkQUSw0n4sM6J5bNqXd7N66mEImBF%2FXxVRZV0kEdmsEPd1chKP1OUvW9Lx8utCmZ8Jv7dLHKCxHQTJw6OboH9woIuHFX&X-Amz-Signature=b39e15cc3f0390e97f9068d922f992ae3e8ce558322e98133b3b4b11db336fad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFSSWPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJyqJTgsrHq6A%2FeHMP9TBQCJGjDpE7JO8WFwJ9IwKbgIgDsJHx9uv9CaW6fiUoScqQJ8VZUhLLgQMegyIucTk1C8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB%2B30sRaqcrSKheGzyrcA0VGd2eDiIIbjL8rwvLSXGsCHyNFzVmiRl8M8v%2BorpHMWadPcwW8d66SZs3Dy9m%2BpIpyrVH3d4F5QfkZOXJVe0ghV0QcaAi3HM0dY9JAEf4zXXvJRZOKIc7lTlKwtiomuxWwj2Ac4qVh1P%2FDpKRafjB4j0nhKplyoththDm4aFMZt%2FsBnHpPH%2BBeBfksgpNcRhT4zgCwYL%2FqSvNodgpu1ehS9RKwekypbU7%2Fm3S64Ez6fpW58qPQEJakZymocJO60vzRT%2F8Cg%2Bh5B%2FBVDJVCH7LL4cI4bkxQyVVTsv%2B1zMxLxaihyJtq%2BhjQWwWRtidivMb3KlKGSgYz9d%2Fej9CXceW0XP5fFMqqyTANcZRTydPxb4fsm3Pke%2BHQiMt0LIcG6EeBC08EfztVG15krp87hpgsTBbz4oiIMGHF2bxH680kHqR8N%2B%2F8oPqU0xgMdBwkGsKsPHpy3usUf0x4yUnK5xt4qZcbaA8sACCU9bAlGEhBjRea7a6QNVe4%2BIMTw1Ws6oSa7ESnH07yj4wAzohMo653DNEMLFOMo7zLerBxA7%2BZU5P5OpqID3L7gwjpmh3AfJ781H7ePp801Ue%2FvDpyGUiIYKXeA%2Fq8%2BJ1FyyO7Y52aK4pwUQ9LjxRH3cITMK%2Fl5MAGOqUBxKH4idxC3ACQHWoiDymPAyc7ekFX2DgG0JTyJ4sQxUl6KCLW9aFYWvG9NK3YHsdvxeHbykR5l%2BqWPXB61p4MRA1qEvQ1fJuGmFV94lCv%2FArHmco%2BFzeF%2Bgk3OzuH6SOWIkQUSw0n4sM6J5bNqXd7N66mEImBF%2FXxVRZV0kEdmsEPd1chKP1OUvW9Lx8utCmZ8Jv7dLHKCxHQTJw6OboH9woIuHFX&X-Amz-Signature=9d8cc241f2518809e6ea0420f55564c6a5f62b181ee5dcce746da7db586b1e85&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFSSWPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJyqJTgsrHq6A%2FeHMP9TBQCJGjDpE7JO8WFwJ9IwKbgIgDsJHx9uv9CaW6fiUoScqQJ8VZUhLLgQMegyIucTk1C8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB%2B30sRaqcrSKheGzyrcA0VGd2eDiIIbjL8rwvLSXGsCHyNFzVmiRl8M8v%2BorpHMWadPcwW8d66SZs3Dy9m%2BpIpyrVH3d4F5QfkZOXJVe0ghV0QcaAi3HM0dY9JAEf4zXXvJRZOKIc7lTlKwtiomuxWwj2Ac4qVh1P%2FDpKRafjB4j0nhKplyoththDm4aFMZt%2FsBnHpPH%2BBeBfksgpNcRhT4zgCwYL%2FqSvNodgpu1ehS9RKwekypbU7%2Fm3S64Ez6fpW58qPQEJakZymocJO60vzRT%2F8Cg%2Bh5B%2FBVDJVCH7LL4cI4bkxQyVVTsv%2B1zMxLxaihyJtq%2BhjQWwWRtidivMb3KlKGSgYz9d%2Fej9CXceW0XP5fFMqqyTANcZRTydPxb4fsm3Pke%2BHQiMt0LIcG6EeBC08EfztVG15krp87hpgsTBbz4oiIMGHF2bxH680kHqR8N%2B%2F8oPqU0xgMdBwkGsKsPHpy3usUf0x4yUnK5xt4qZcbaA8sACCU9bAlGEhBjRea7a6QNVe4%2BIMTw1Ws6oSa7ESnH07yj4wAzohMo653DNEMLFOMo7zLerBxA7%2BZU5P5OpqID3L7gwjpmh3AfJ781H7ePp801Ue%2FvDpyGUiIYKXeA%2Fq8%2BJ1FyyO7Y52aK4pwUQ9LjxRH3cITMK%2Fl5MAGOqUBxKH4idxC3ACQHWoiDymPAyc7ekFX2DgG0JTyJ4sQxUl6KCLW9aFYWvG9NK3YHsdvxeHbykR5l%2BqWPXB61p4MRA1qEvQ1fJuGmFV94lCv%2FArHmco%2BFzeF%2Bgk3OzuH6SOWIkQUSw0n4sM6J5bNqXd7N66mEImBF%2FXxVRZV0kEdmsEPd1chKP1OUvW9Lx8utCmZ8Jv7dLHKCxHQTJw6OboH9woIuHFX&X-Amz-Signature=9fa643f0d35b942fad7bfae5249b8c383f1ca124332d5e884a1b55cc8a310f17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFSSWPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJyqJTgsrHq6A%2FeHMP9TBQCJGjDpE7JO8WFwJ9IwKbgIgDsJHx9uv9CaW6fiUoScqQJ8VZUhLLgQMegyIucTk1C8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB%2B30sRaqcrSKheGzyrcA0VGd2eDiIIbjL8rwvLSXGsCHyNFzVmiRl8M8v%2BorpHMWadPcwW8d66SZs3Dy9m%2BpIpyrVH3d4F5QfkZOXJVe0ghV0QcaAi3HM0dY9JAEf4zXXvJRZOKIc7lTlKwtiomuxWwj2Ac4qVh1P%2FDpKRafjB4j0nhKplyoththDm4aFMZt%2FsBnHpPH%2BBeBfksgpNcRhT4zgCwYL%2FqSvNodgpu1ehS9RKwekypbU7%2Fm3S64Ez6fpW58qPQEJakZymocJO60vzRT%2F8Cg%2Bh5B%2FBVDJVCH7LL4cI4bkxQyVVTsv%2B1zMxLxaihyJtq%2BhjQWwWRtidivMb3KlKGSgYz9d%2Fej9CXceW0XP5fFMqqyTANcZRTydPxb4fsm3Pke%2BHQiMt0LIcG6EeBC08EfztVG15krp87hpgsTBbz4oiIMGHF2bxH680kHqR8N%2B%2F8oPqU0xgMdBwkGsKsPHpy3usUf0x4yUnK5xt4qZcbaA8sACCU9bAlGEhBjRea7a6QNVe4%2BIMTw1Ws6oSa7ESnH07yj4wAzohMo653DNEMLFOMo7zLerBxA7%2BZU5P5OpqID3L7gwjpmh3AfJ781H7ePp801Ue%2FvDpyGUiIYKXeA%2Fq8%2BJ1FyyO7Y52aK4pwUQ9LjxRH3cITMK%2Fl5MAGOqUBxKH4idxC3ACQHWoiDymPAyc7ekFX2DgG0JTyJ4sQxUl6KCLW9aFYWvG9NK3YHsdvxeHbykR5l%2BqWPXB61p4MRA1qEvQ1fJuGmFV94lCv%2FArHmco%2BFzeF%2Bgk3OzuH6SOWIkQUSw0n4sM6J5bNqXd7N66mEImBF%2FXxVRZV0kEdmsEPd1chKP1OUvW9Lx8utCmZ8Jv7dLHKCxHQTJw6OboH9woIuHFX&X-Amz-Signature=5e2d124b746d59fb9132dcea6d8e0556251c11a57b18c78de605448d7260f5a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFSSWPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJyqJTgsrHq6A%2FeHMP9TBQCJGjDpE7JO8WFwJ9IwKbgIgDsJHx9uv9CaW6fiUoScqQJ8VZUhLLgQMegyIucTk1C8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB%2B30sRaqcrSKheGzyrcA0VGd2eDiIIbjL8rwvLSXGsCHyNFzVmiRl8M8v%2BorpHMWadPcwW8d66SZs3Dy9m%2BpIpyrVH3d4F5QfkZOXJVe0ghV0QcaAi3HM0dY9JAEf4zXXvJRZOKIc7lTlKwtiomuxWwj2Ac4qVh1P%2FDpKRafjB4j0nhKplyoththDm4aFMZt%2FsBnHpPH%2BBeBfksgpNcRhT4zgCwYL%2FqSvNodgpu1ehS9RKwekypbU7%2Fm3S64Ez6fpW58qPQEJakZymocJO60vzRT%2F8Cg%2Bh5B%2FBVDJVCH7LL4cI4bkxQyVVTsv%2B1zMxLxaihyJtq%2BhjQWwWRtidivMb3KlKGSgYz9d%2Fej9CXceW0XP5fFMqqyTANcZRTydPxb4fsm3Pke%2BHQiMt0LIcG6EeBC08EfztVG15krp87hpgsTBbz4oiIMGHF2bxH680kHqR8N%2B%2F8oPqU0xgMdBwkGsKsPHpy3usUf0x4yUnK5xt4qZcbaA8sACCU9bAlGEhBjRea7a6QNVe4%2BIMTw1Ws6oSa7ESnH07yj4wAzohMo653DNEMLFOMo7zLerBxA7%2BZU5P5OpqID3L7gwjpmh3AfJ781H7ePp801Ue%2FvDpyGUiIYKXeA%2Fq8%2BJ1FyyO7Y52aK4pwUQ9LjxRH3cITMK%2Fl5MAGOqUBxKH4idxC3ACQHWoiDymPAyc7ekFX2DgG0JTyJ4sQxUl6KCLW9aFYWvG9NK3YHsdvxeHbykR5l%2BqWPXB61p4MRA1qEvQ1fJuGmFV94lCv%2FArHmco%2BFzeF%2Bgk3OzuH6SOWIkQUSw0n4sM6J5bNqXd7N66mEImBF%2FXxVRZV0kEdmsEPd1chKP1OUvW9Lx8utCmZ8Jv7dLHKCxHQTJw6OboH9woIuHFX&X-Amz-Signature=31b371fbb9b78c46a5bfa801def73fb2a301b7a562520e3219c20bd02a50e368&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKFSSWPI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChJyqJTgsrHq6A%2FeHMP9TBQCJGjDpE7JO8WFwJ9IwKbgIgDsJHx9uv9CaW6fiUoScqQJ8VZUhLLgQMegyIucTk1C8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDB%2B30sRaqcrSKheGzyrcA0VGd2eDiIIbjL8rwvLSXGsCHyNFzVmiRl8M8v%2BorpHMWadPcwW8d66SZs3Dy9m%2BpIpyrVH3d4F5QfkZOXJVe0ghV0QcaAi3HM0dY9JAEf4zXXvJRZOKIc7lTlKwtiomuxWwj2Ac4qVh1P%2FDpKRafjB4j0nhKplyoththDm4aFMZt%2FsBnHpPH%2BBeBfksgpNcRhT4zgCwYL%2FqSvNodgpu1ehS9RKwekypbU7%2Fm3S64Ez6fpW58qPQEJakZymocJO60vzRT%2F8Cg%2Bh5B%2FBVDJVCH7LL4cI4bkxQyVVTsv%2B1zMxLxaihyJtq%2BhjQWwWRtidivMb3KlKGSgYz9d%2Fej9CXceW0XP5fFMqqyTANcZRTydPxb4fsm3Pke%2BHQiMt0LIcG6EeBC08EfztVG15krp87hpgsTBbz4oiIMGHF2bxH680kHqR8N%2B%2F8oPqU0xgMdBwkGsKsPHpy3usUf0x4yUnK5xt4qZcbaA8sACCU9bAlGEhBjRea7a6QNVe4%2BIMTw1Ws6oSa7ESnH07yj4wAzohMo653DNEMLFOMo7zLerBxA7%2BZU5P5OpqID3L7gwjpmh3AfJ781H7ePp801Ue%2FvDpyGUiIYKXeA%2Fq8%2BJ1FyyO7Y52aK4pwUQ9LjxRH3cITMK%2Fl5MAGOqUBxKH4idxC3ACQHWoiDymPAyc7ekFX2DgG0JTyJ4sQxUl6KCLW9aFYWvG9NK3YHsdvxeHbykR5l%2BqWPXB61p4MRA1qEvQ1fJuGmFV94lCv%2FArHmco%2BFzeF%2Bgk3OzuH6SOWIkQUSw0n4sM6J5bNqXd7N66mEImBF%2FXxVRZV0kEdmsEPd1chKP1OUvW9Lx8utCmZ8Jv7dLHKCxHQTJw6OboH9woIuHFX&X-Amz-Signature=bee38011bc16d6191698054e1dac12d736b4ab747e2e8587149899c3be55b46c&X-Amz-SignedHeaders=host&x-id=GetObject)
