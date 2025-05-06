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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXWEBYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbcAO9AdAIy0xa%2Bg6hE%2FjlUEPsao%2F7Q4cxNQrYtmg5QIgBGvWXHzoYc2JeDfDK1DYANs9039jX7s4X4gn3IgUqF8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMehdtQ2cm%2F44fnytyrcA02Wo%2FuaBjz5uoSSqGVt1CrttJDslr6qMFlJ6O2kW%2BeBByCU%2F4sw%2FnW%2FcOSrhOTS6EDIkSSI2uX1yvOQaqocy%2Bu5rbALxzKBAOV41sP63rR57Ysc4WMQnIXq8Oaz3zhvrFBKciZDhg%2Byh8QCHHtv0bjP%2F6RzDxyo6cj7OnwbHkxfhFFG4xuWaGMzsc%2BACBL9SqGwwTE7hJ7fJkJaikonH6qgSpQs%2BNs0b%2FXbxz1p%2Ftn7MJPoGeRjoX7odI42xyS0bWuMf3f4vgLYbvKwAgezkeJyCteDQycAVzJyhYwMUjehFr7%2Fzc8BrKkS%2FPci9TB6ugWZDfB02JQA91sPUK1gZwr6EK1oBFHmZOD4E8ufEGpPRIVfeYBs9GGGmLAYdJ1DpLLw36qcVlRM35zKsLJZh66ij56jfGwEYVUA6jFzKMKCyhYGQ3n87oigQ5AmP2onagZ2yPImT%2BrWgdxG%2B8xl2DZw1u5iP2Hp7Vb%2F%2FCsQc8xMqegHUEbISeso46CULEpqfrMXNRB7BfDYkQH%2BMsF7K1Q9qe12GzRMr5faIkspyffs49K7Pim71FvgxJBlGyuQ3sdZUAeL5vdVnTUfPNXTczL4IR4tPYeKsxD3UiwYklznF9sIzyD2ind9nBnaMJix5sAGOqUB9NNG5oAHgrIMf%2FNR%2FekbbH4su3se5rf6J75EsnOa%2FQUBMLO%2BFda1kLtMhFRdiXajdE%2FNippkVbvA6EGoLPd4t0JARmO%2Bw5PQNOsidn0Xtg%2F%2BmyARVSoDkCY4psQqTvb6jm1pLzcidd%2FUJu2DxVUd3TAp0NEaTKoChJ%2BkuGK7%2FgmU1gFqCIZmIDdeMrjk2zHO5fbRo23tLWuMDBqgBm%2BzgVkatc1t&X-Amz-Signature=8c3c77d92fefd25036d4cb0fdfff2013ec44a0918b61edd712d9f51f57d92948&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXWEBYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbcAO9AdAIy0xa%2Bg6hE%2FjlUEPsao%2F7Q4cxNQrYtmg5QIgBGvWXHzoYc2JeDfDK1DYANs9039jX7s4X4gn3IgUqF8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMehdtQ2cm%2F44fnytyrcA02Wo%2FuaBjz5uoSSqGVt1CrttJDslr6qMFlJ6O2kW%2BeBByCU%2F4sw%2FnW%2FcOSrhOTS6EDIkSSI2uX1yvOQaqocy%2Bu5rbALxzKBAOV41sP63rR57Ysc4WMQnIXq8Oaz3zhvrFBKciZDhg%2Byh8QCHHtv0bjP%2F6RzDxyo6cj7OnwbHkxfhFFG4xuWaGMzsc%2BACBL9SqGwwTE7hJ7fJkJaikonH6qgSpQs%2BNs0b%2FXbxz1p%2Ftn7MJPoGeRjoX7odI42xyS0bWuMf3f4vgLYbvKwAgezkeJyCteDQycAVzJyhYwMUjehFr7%2Fzc8BrKkS%2FPci9TB6ugWZDfB02JQA91sPUK1gZwr6EK1oBFHmZOD4E8ufEGpPRIVfeYBs9GGGmLAYdJ1DpLLw36qcVlRM35zKsLJZh66ij56jfGwEYVUA6jFzKMKCyhYGQ3n87oigQ5AmP2onagZ2yPImT%2BrWgdxG%2B8xl2DZw1u5iP2Hp7Vb%2F%2FCsQc8xMqegHUEbISeso46CULEpqfrMXNRB7BfDYkQH%2BMsF7K1Q9qe12GzRMr5faIkspyffs49K7Pim71FvgxJBlGyuQ3sdZUAeL5vdVnTUfPNXTczL4IR4tPYeKsxD3UiwYklznF9sIzyD2ind9nBnaMJix5sAGOqUB9NNG5oAHgrIMf%2FNR%2FekbbH4su3se5rf6J75EsnOa%2FQUBMLO%2BFda1kLtMhFRdiXajdE%2FNippkVbvA6EGoLPd4t0JARmO%2Bw5PQNOsidn0Xtg%2F%2BmyARVSoDkCY4psQqTvb6jm1pLzcidd%2FUJu2DxVUd3TAp0NEaTKoChJ%2BkuGK7%2FgmU1gFqCIZmIDdeMrjk2zHO5fbRo23tLWuMDBqgBm%2BzgVkatc1t&X-Amz-Signature=cf1069a28858b31a1896a4d138f1a4938e6672a1bd8c9bf40116b43a8605416b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXWEBYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbcAO9AdAIy0xa%2Bg6hE%2FjlUEPsao%2F7Q4cxNQrYtmg5QIgBGvWXHzoYc2JeDfDK1DYANs9039jX7s4X4gn3IgUqF8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMehdtQ2cm%2F44fnytyrcA02Wo%2FuaBjz5uoSSqGVt1CrttJDslr6qMFlJ6O2kW%2BeBByCU%2F4sw%2FnW%2FcOSrhOTS6EDIkSSI2uX1yvOQaqocy%2Bu5rbALxzKBAOV41sP63rR57Ysc4WMQnIXq8Oaz3zhvrFBKciZDhg%2Byh8QCHHtv0bjP%2F6RzDxyo6cj7OnwbHkxfhFFG4xuWaGMzsc%2BACBL9SqGwwTE7hJ7fJkJaikonH6qgSpQs%2BNs0b%2FXbxz1p%2Ftn7MJPoGeRjoX7odI42xyS0bWuMf3f4vgLYbvKwAgezkeJyCteDQycAVzJyhYwMUjehFr7%2Fzc8BrKkS%2FPci9TB6ugWZDfB02JQA91sPUK1gZwr6EK1oBFHmZOD4E8ufEGpPRIVfeYBs9GGGmLAYdJ1DpLLw36qcVlRM35zKsLJZh66ij56jfGwEYVUA6jFzKMKCyhYGQ3n87oigQ5AmP2onagZ2yPImT%2BrWgdxG%2B8xl2DZw1u5iP2Hp7Vb%2F%2FCsQc8xMqegHUEbISeso46CULEpqfrMXNRB7BfDYkQH%2BMsF7K1Q9qe12GzRMr5faIkspyffs49K7Pim71FvgxJBlGyuQ3sdZUAeL5vdVnTUfPNXTczL4IR4tPYeKsxD3UiwYklznF9sIzyD2ind9nBnaMJix5sAGOqUB9NNG5oAHgrIMf%2FNR%2FekbbH4su3se5rf6J75EsnOa%2FQUBMLO%2BFda1kLtMhFRdiXajdE%2FNippkVbvA6EGoLPd4t0JARmO%2Bw5PQNOsidn0Xtg%2F%2BmyARVSoDkCY4psQqTvb6jm1pLzcidd%2FUJu2DxVUd3TAp0NEaTKoChJ%2BkuGK7%2FgmU1gFqCIZmIDdeMrjk2zHO5fbRo23tLWuMDBqgBm%2BzgVkatc1t&X-Amz-Signature=08c75fca78bcf688182bf6fed2b866f86a5b03b1ca9d09b1f5e0abcb5bb0441a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXWEBYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbcAO9AdAIy0xa%2Bg6hE%2FjlUEPsao%2F7Q4cxNQrYtmg5QIgBGvWXHzoYc2JeDfDK1DYANs9039jX7s4X4gn3IgUqF8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMehdtQ2cm%2F44fnytyrcA02Wo%2FuaBjz5uoSSqGVt1CrttJDslr6qMFlJ6O2kW%2BeBByCU%2F4sw%2FnW%2FcOSrhOTS6EDIkSSI2uX1yvOQaqocy%2Bu5rbALxzKBAOV41sP63rR57Ysc4WMQnIXq8Oaz3zhvrFBKciZDhg%2Byh8QCHHtv0bjP%2F6RzDxyo6cj7OnwbHkxfhFFG4xuWaGMzsc%2BACBL9SqGwwTE7hJ7fJkJaikonH6qgSpQs%2BNs0b%2FXbxz1p%2Ftn7MJPoGeRjoX7odI42xyS0bWuMf3f4vgLYbvKwAgezkeJyCteDQycAVzJyhYwMUjehFr7%2Fzc8BrKkS%2FPci9TB6ugWZDfB02JQA91sPUK1gZwr6EK1oBFHmZOD4E8ufEGpPRIVfeYBs9GGGmLAYdJ1DpLLw36qcVlRM35zKsLJZh66ij56jfGwEYVUA6jFzKMKCyhYGQ3n87oigQ5AmP2onagZ2yPImT%2BrWgdxG%2B8xl2DZw1u5iP2Hp7Vb%2F%2FCsQc8xMqegHUEbISeso46CULEpqfrMXNRB7BfDYkQH%2BMsF7K1Q9qe12GzRMr5faIkspyffs49K7Pim71FvgxJBlGyuQ3sdZUAeL5vdVnTUfPNXTczL4IR4tPYeKsxD3UiwYklznF9sIzyD2ind9nBnaMJix5sAGOqUB9NNG5oAHgrIMf%2FNR%2FekbbH4su3se5rf6J75EsnOa%2FQUBMLO%2BFda1kLtMhFRdiXajdE%2FNippkVbvA6EGoLPd4t0JARmO%2Bw5PQNOsidn0Xtg%2F%2BmyARVSoDkCY4psQqTvb6jm1pLzcidd%2FUJu2DxVUd3TAp0NEaTKoChJ%2BkuGK7%2FgmU1gFqCIZmIDdeMrjk2zHO5fbRo23tLWuMDBqgBm%2BzgVkatc1t&X-Amz-Signature=54ab7f80478634c19d7777041254d5aa1ccab3882735d635dbe6ff6fd3f14451&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXWEBYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbcAO9AdAIy0xa%2Bg6hE%2FjlUEPsao%2F7Q4cxNQrYtmg5QIgBGvWXHzoYc2JeDfDK1DYANs9039jX7s4X4gn3IgUqF8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMehdtQ2cm%2F44fnytyrcA02Wo%2FuaBjz5uoSSqGVt1CrttJDslr6qMFlJ6O2kW%2BeBByCU%2F4sw%2FnW%2FcOSrhOTS6EDIkSSI2uX1yvOQaqocy%2Bu5rbALxzKBAOV41sP63rR57Ysc4WMQnIXq8Oaz3zhvrFBKciZDhg%2Byh8QCHHtv0bjP%2F6RzDxyo6cj7OnwbHkxfhFFG4xuWaGMzsc%2BACBL9SqGwwTE7hJ7fJkJaikonH6qgSpQs%2BNs0b%2FXbxz1p%2Ftn7MJPoGeRjoX7odI42xyS0bWuMf3f4vgLYbvKwAgezkeJyCteDQycAVzJyhYwMUjehFr7%2Fzc8BrKkS%2FPci9TB6ugWZDfB02JQA91sPUK1gZwr6EK1oBFHmZOD4E8ufEGpPRIVfeYBs9GGGmLAYdJ1DpLLw36qcVlRM35zKsLJZh66ij56jfGwEYVUA6jFzKMKCyhYGQ3n87oigQ5AmP2onagZ2yPImT%2BrWgdxG%2B8xl2DZw1u5iP2Hp7Vb%2F%2FCsQc8xMqegHUEbISeso46CULEpqfrMXNRB7BfDYkQH%2BMsF7K1Q9qe12GzRMr5faIkspyffs49K7Pim71FvgxJBlGyuQ3sdZUAeL5vdVnTUfPNXTczL4IR4tPYeKsxD3UiwYklznF9sIzyD2ind9nBnaMJix5sAGOqUB9NNG5oAHgrIMf%2FNR%2FekbbH4su3se5rf6J75EsnOa%2FQUBMLO%2BFda1kLtMhFRdiXajdE%2FNippkVbvA6EGoLPd4t0JARmO%2Bw5PQNOsidn0Xtg%2F%2BmyARVSoDkCY4psQqTvb6jm1pLzcidd%2FUJu2DxVUd3TAp0NEaTKoChJ%2BkuGK7%2FgmU1gFqCIZmIDdeMrjk2zHO5fbRo23tLWuMDBqgBm%2BzgVkatc1t&X-Amz-Signature=94e0f8919492294ef4417d0d1f4979b1a58fd2645dff07366edaf12d90151966&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXWEBYO%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfbcAO9AdAIy0xa%2Bg6hE%2FjlUEPsao%2F7Q4cxNQrYtmg5QIgBGvWXHzoYc2JeDfDK1DYANs9039jX7s4X4gn3IgUqF8q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMehdtQ2cm%2F44fnytyrcA02Wo%2FuaBjz5uoSSqGVt1CrttJDslr6qMFlJ6O2kW%2BeBByCU%2F4sw%2FnW%2FcOSrhOTS6EDIkSSI2uX1yvOQaqocy%2Bu5rbALxzKBAOV41sP63rR57Ysc4WMQnIXq8Oaz3zhvrFBKciZDhg%2Byh8QCHHtv0bjP%2F6RzDxyo6cj7OnwbHkxfhFFG4xuWaGMzsc%2BACBL9SqGwwTE7hJ7fJkJaikonH6qgSpQs%2BNs0b%2FXbxz1p%2Ftn7MJPoGeRjoX7odI42xyS0bWuMf3f4vgLYbvKwAgezkeJyCteDQycAVzJyhYwMUjehFr7%2Fzc8BrKkS%2FPci9TB6ugWZDfB02JQA91sPUK1gZwr6EK1oBFHmZOD4E8ufEGpPRIVfeYBs9GGGmLAYdJ1DpLLw36qcVlRM35zKsLJZh66ij56jfGwEYVUA6jFzKMKCyhYGQ3n87oigQ5AmP2onagZ2yPImT%2BrWgdxG%2B8xl2DZw1u5iP2Hp7Vb%2F%2FCsQc8xMqegHUEbISeso46CULEpqfrMXNRB7BfDYkQH%2BMsF7K1Q9qe12GzRMr5faIkspyffs49K7Pim71FvgxJBlGyuQ3sdZUAeL5vdVnTUfPNXTczL4IR4tPYeKsxD3UiwYklznF9sIzyD2ind9nBnaMJix5sAGOqUB9NNG5oAHgrIMf%2FNR%2FekbbH4su3se5rf6J75EsnOa%2FQUBMLO%2BFda1kLtMhFRdiXajdE%2FNippkVbvA6EGoLPd4t0JARmO%2Bw5PQNOsidn0Xtg%2F%2BmyARVSoDkCY4psQqTvb6jm1pLzcidd%2FUJu2DxVUd3TAp0NEaTKoChJ%2BkuGK7%2FgmU1gFqCIZmIDdeMrjk2zHO5fbRo23tLWuMDBqgBm%2BzgVkatc1t&X-Amz-Signature=ccbf66233e20baec335c39bda2081b6e06498e0b96c7a82fd8514ec289faee6e&X-Amz-SignedHeaders=host&x-id=GetObject)
