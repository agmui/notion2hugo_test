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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJQRAMN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDSLt8g%2FWcyBVX7JqR16zonrweycygJgbvVI%2FvWlD%2BBCQIgV336Lqy9VHUrp38PpXZmAHT97iM100hTQuIbH777Gbkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKZ0CgpB5r1Kh22fiCrcAzg0EvB0mN8t%2FO9bph9w42GbaZhwNIIiksvCIyJNiHG%2F2Dxlpc6tqL3rU8R23caOoCMud8V%2FAAQzVJtNrLeqO8frbVqUy56lRUdQzVU8iiBstmDq%2BDqkza7nezPi9tJWx2EGgm5LWmuxoP13Pp8lm9qdVDYUfuYolaie08BhcEKxnH8VH6i6f18Vh3CwZALccmwXaxn3uzKSVMpcFEhwuEEXLBQ1opuEnyJNE%2Fb4b77%2BPIAPhT5P4Ergce%2Ftmn5TdEeDzX4SnchI2WQPb5rsD6UWp0Dv58YWgH2EZkljRtgoWEBYvdXA6MgDY0UGZpRqhAWlNqXo9Uh5XsMgRRpPJjHt9%2BRflwfAefDjmY3etIknmwK1w4ynYifahw2iO%2Fz6i3ltQN6r0A1T6zmZb%2FZyCgJ0sw8lKBeY%2B3hOtDK%2Bkzo8LuCyPW%2FExlMop7OS6%2B%2F0v3jo%2FQod78rOF3PJUDXn0xAwFjonidTIwmLtv5smLCA8E%2FRZfxTpFbHtTc9EqEdwBF%2FS0FjP6xrLuU1Oi1vhZ3a0h%2B4MqiXzjbn0tXJoRaOVybDQ2REJX%2BHsYgePTchRffVjKc6FR9VhZVMrBFJ8wVwRcREEjrlJthH3nvhL5%2FccI8w6NX1Ywk9frzfsMOGbyr0GOqUB5GFjtqWGANQQ%2FsyuwL8QlWpOQHMsiKB%2F0Pm6COI5mEZwuhMsxWNyOFYiMYOUGzGkxvUM73ahkytYjN5aiQ1hdNTaBz%2FAbKoJa7h0QJgEgnbBTfYyQxKyWbAsimMRKOJNVC6thVQXpQi0jfWR1R2nKlkoPm1T5Zod6YWs9zPPP2KuopRQ6PW50vZ4nTyLpN87tB3ZbiT2n6UbNNTCyCZvyHU0uECe&X-Amz-Signature=34aeedbdc804c16c0ca1a690c2cc0dc04a27d8d017058e6b2fc327c57350c5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJQRAMN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDSLt8g%2FWcyBVX7JqR16zonrweycygJgbvVI%2FvWlD%2BBCQIgV336Lqy9VHUrp38PpXZmAHT97iM100hTQuIbH777Gbkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKZ0CgpB5r1Kh22fiCrcAzg0EvB0mN8t%2FO9bph9w42GbaZhwNIIiksvCIyJNiHG%2F2Dxlpc6tqL3rU8R23caOoCMud8V%2FAAQzVJtNrLeqO8frbVqUy56lRUdQzVU8iiBstmDq%2BDqkza7nezPi9tJWx2EGgm5LWmuxoP13Pp8lm9qdVDYUfuYolaie08BhcEKxnH8VH6i6f18Vh3CwZALccmwXaxn3uzKSVMpcFEhwuEEXLBQ1opuEnyJNE%2Fb4b77%2BPIAPhT5P4Ergce%2Ftmn5TdEeDzX4SnchI2WQPb5rsD6UWp0Dv58YWgH2EZkljRtgoWEBYvdXA6MgDY0UGZpRqhAWlNqXo9Uh5XsMgRRpPJjHt9%2BRflwfAefDjmY3etIknmwK1w4ynYifahw2iO%2Fz6i3ltQN6r0A1T6zmZb%2FZyCgJ0sw8lKBeY%2B3hOtDK%2Bkzo8LuCyPW%2FExlMop7OS6%2B%2F0v3jo%2FQod78rOF3PJUDXn0xAwFjonidTIwmLtv5smLCA8E%2FRZfxTpFbHtTc9EqEdwBF%2FS0FjP6xrLuU1Oi1vhZ3a0h%2B4MqiXzjbn0tXJoRaOVybDQ2REJX%2BHsYgePTchRffVjKc6FR9VhZVMrBFJ8wVwRcREEjrlJthH3nvhL5%2FccI8w6NX1Ywk9frzfsMOGbyr0GOqUB5GFjtqWGANQQ%2FsyuwL8QlWpOQHMsiKB%2F0Pm6COI5mEZwuhMsxWNyOFYiMYOUGzGkxvUM73ahkytYjN5aiQ1hdNTaBz%2FAbKoJa7h0QJgEgnbBTfYyQxKyWbAsimMRKOJNVC6thVQXpQi0jfWR1R2nKlkoPm1T5Zod6YWs9zPPP2KuopRQ6PW50vZ4nTyLpN87tB3ZbiT2n6UbNNTCyCZvyHU0uECe&X-Amz-Signature=609d59292585a38d1434baa452b0af5613ecc4e602645e22c893f4774600cbac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJQRAMN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDSLt8g%2FWcyBVX7JqR16zonrweycygJgbvVI%2FvWlD%2BBCQIgV336Lqy9VHUrp38PpXZmAHT97iM100hTQuIbH777Gbkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKZ0CgpB5r1Kh22fiCrcAzg0EvB0mN8t%2FO9bph9w42GbaZhwNIIiksvCIyJNiHG%2F2Dxlpc6tqL3rU8R23caOoCMud8V%2FAAQzVJtNrLeqO8frbVqUy56lRUdQzVU8iiBstmDq%2BDqkza7nezPi9tJWx2EGgm5LWmuxoP13Pp8lm9qdVDYUfuYolaie08BhcEKxnH8VH6i6f18Vh3CwZALccmwXaxn3uzKSVMpcFEhwuEEXLBQ1opuEnyJNE%2Fb4b77%2BPIAPhT5P4Ergce%2Ftmn5TdEeDzX4SnchI2WQPb5rsD6UWp0Dv58YWgH2EZkljRtgoWEBYvdXA6MgDY0UGZpRqhAWlNqXo9Uh5XsMgRRpPJjHt9%2BRflwfAefDjmY3etIknmwK1w4ynYifahw2iO%2Fz6i3ltQN6r0A1T6zmZb%2FZyCgJ0sw8lKBeY%2B3hOtDK%2Bkzo8LuCyPW%2FExlMop7OS6%2B%2F0v3jo%2FQod78rOF3PJUDXn0xAwFjonidTIwmLtv5smLCA8E%2FRZfxTpFbHtTc9EqEdwBF%2FS0FjP6xrLuU1Oi1vhZ3a0h%2B4MqiXzjbn0tXJoRaOVybDQ2REJX%2BHsYgePTchRffVjKc6FR9VhZVMrBFJ8wVwRcREEjrlJthH3nvhL5%2FccI8w6NX1Ywk9frzfsMOGbyr0GOqUB5GFjtqWGANQQ%2FsyuwL8QlWpOQHMsiKB%2F0Pm6COI5mEZwuhMsxWNyOFYiMYOUGzGkxvUM73ahkytYjN5aiQ1hdNTaBz%2FAbKoJa7h0QJgEgnbBTfYyQxKyWbAsimMRKOJNVC6thVQXpQi0jfWR1R2nKlkoPm1T5Zod6YWs9zPPP2KuopRQ6PW50vZ4nTyLpN87tB3ZbiT2n6UbNNTCyCZvyHU0uECe&X-Amz-Signature=39ac9172679686d863bdedc342135b06a9c7c4fa353f1b65f5ef4434677a1407&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJQRAMN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDSLt8g%2FWcyBVX7JqR16zonrweycygJgbvVI%2FvWlD%2BBCQIgV336Lqy9VHUrp38PpXZmAHT97iM100hTQuIbH777Gbkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKZ0CgpB5r1Kh22fiCrcAzg0EvB0mN8t%2FO9bph9w42GbaZhwNIIiksvCIyJNiHG%2F2Dxlpc6tqL3rU8R23caOoCMud8V%2FAAQzVJtNrLeqO8frbVqUy56lRUdQzVU8iiBstmDq%2BDqkza7nezPi9tJWx2EGgm5LWmuxoP13Pp8lm9qdVDYUfuYolaie08BhcEKxnH8VH6i6f18Vh3CwZALccmwXaxn3uzKSVMpcFEhwuEEXLBQ1opuEnyJNE%2Fb4b77%2BPIAPhT5P4Ergce%2Ftmn5TdEeDzX4SnchI2WQPb5rsD6UWp0Dv58YWgH2EZkljRtgoWEBYvdXA6MgDY0UGZpRqhAWlNqXo9Uh5XsMgRRpPJjHt9%2BRflwfAefDjmY3etIknmwK1w4ynYifahw2iO%2Fz6i3ltQN6r0A1T6zmZb%2FZyCgJ0sw8lKBeY%2B3hOtDK%2Bkzo8LuCyPW%2FExlMop7OS6%2B%2F0v3jo%2FQod78rOF3PJUDXn0xAwFjonidTIwmLtv5smLCA8E%2FRZfxTpFbHtTc9EqEdwBF%2FS0FjP6xrLuU1Oi1vhZ3a0h%2B4MqiXzjbn0tXJoRaOVybDQ2REJX%2BHsYgePTchRffVjKc6FR9VhZVMrBFJ8wVwRcREEjrlJthH3nvhL5%2FccI8w6NX1Ywk9frzfsMOGbyr0GOqUB5GFjtqWGANQQ%2FsyuwL8QlWpOQHMsiKB%2F0Pm6COI5mEZwuhMsxWNyOFYiMYOUGzGkxvUM73ahkytYjN5aiQ1hdNTaBz%2FAbKoJa7h0QJgEgnbBTfYyQxKyWbAsimMRKOJNVC6thVQXpQi0jfWR1R2nKlkoPm1T5Zod6YWs9zPPP2KuopRQ6PW50vZ4nTyLpN87tB3ZbiT2n6UbNNTCyCZvyHU0uECe&X-Amz-Signature=e18837b36cf86e4a482c81cfaf8c39c696e06d6823eee1623bc64b097e174813&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJQRAMN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDSLt8g%2FWcyBVX7JqR16zonrweycygJgbvVI%2FvWlD%2BBCQIgV336Lqy9VHUrp38PpXZmAHT97iM100hTQuIbH777Gbkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKZ0CgpB5r1Kh22fiCrcAzg0EvB0mN8t%2FO9bph9w42GbaZhwNIIiksvCIyJNiHG%2F2Dxlpc6tqL3rU8R23caOoCMud8V%2FAAQzVJtNrLeqO8frbVqUy56lRUdQzVU8iiBstmDq%2BDqkza7nezPi9tJWx2EGgm5LWmuxoP13Pp8lm9qdVDYUfuYolaie08BhcEKxnH8VH6i6f18Vh3CwZALccmwXaxn3uzKSVMpcFEhwuEEXLBQ1opuEnyJNE%2Fb4b77%2BPIAPhT5P4Ergce%2Ftmn5TdEeDzX4SnchI2WQPb5rsD6UWp0Dv58YWgH2EZkljRtgoWEBYvdXA6MgDY0UGZpRqhAWlNqXo9Uh5XsMgRRpPJjHt9%2BRflwfAefDjmY3etIknmwK1w4ynYifahw2iO%2Fz6i3ltQN6r0A1T6zmZb%2FZyCgJ0sw8lKBeY%2B3hOtDK%2Bkzo8LuCyPW%2FExlMop7OS6%2B%2F0v3jo%2FQod78rOF3PJUDXn0xAwFjonidTIwmLtv5smLCA8E%2FRZfxTpFbHtTc9EqEdwBF%2FS0FjP6xrLuU1Oi1vhZ3a0h%2B4MqiXzjbn0tXJoRaOVybDQ2REJX%2BHsYgePTchRffVjKc6FR9VhZVMrBFJ8wVwRcREEjrlJthH3nvhL5%2FccI8w6NX1Ywk9frzfsMOGbyr0GOqUB5GFjtqWGANQQ%2FsyuwL8QlWpOQHMsiKB%2F0Pm6COI5mEZwuhMsxWNyOFYiMYOUGzGkxvUM73ahkytYjN5aiQ1hdNTaBz%2FAbKoJa7h0QJgEgnbBTfYyQxKyWbAsimMRKOJNVC6thVQXpQi0jfWR1R2nKlkoPm1T5Zod6YWs9zPPP2KuopRQ6PW50vZ4nTyLpN87tB3ZbiT2n6UbNNTCyCZvyHU0uECe&X-Amz-Signature=8587829646555151a72da04ecb19d30062fe8e07fd828071aa6e5986cb354990&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJQRAMN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDSLt8g%2FWcyBVX7JqR16zonrweycygJgbvVI%2FvWlD%2BBCQIgV336Lqy9VHUrp38PpXZmAHT97iM100hTQuIbH777Gbkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKZ0CgpB5r1Kh22fiCrcAzg0EvB0mN8t%2FO9bph9w42GbaZhwNIIiksvCIyJNiHG%2F2Dxlpc6tqL3rU8R23caOoCMud8V%2FAAQzVJtNrLeqO8frbVqUy56lRUdQzVU8iiBstmDq%2BDqkza7nezPi9tJWx2EGgm5LWmuxoP13Pp8lm9qdVDYUfuYolaie08BhcEKxnH8VH6i6f18Vh3CwZALccmwXaxn3uzKSVMpcFEhwuEEXLBQ1opuEnyJNE%2Fb4b77%2BPIAPhT5P4Ergce%2Ftmn5TdEeDzX4SnchI2WQPb5rsD6UWp0Dv58YWgH2EZkljRtgoWEBYvdXA6MgDY0UGZpRqhAWlNqXo9Uh5XsMgRRpPJjHt9%2BRflwfAefDjmY3etIknmwK1w4ynYifahw2iO%2Fz6i3ltQN6r0A1T6zmZb%2FZyCgJ0sw8lKBeY%2B3hOtDK%2Bkzo8LuCyPW%2FExlMop7OS6%2B%2F0v3jo%2FQod78rOF3PJUDXn0xAwFjonidTIwmLtv5smLCA8E%2FRZfxTpFbHtTc9EqEdwBF%2FS0FjP6xrLuU1Oi1vhZ3a0h%2B4MqiXzjbn0tXJoRaOVybDQ2REJX%2BHsYgePTchRffVjKc6FR9VhZVMrBFJ8wVwRcREEjrlJthH3nvhL5%2FccI8w6NX1Ywk9frzfsMOGbyr0GOqUB5GFjtqWGANQQ%2FsyuwL8QlWpOQHMsiKB%2F0Pm6COI5mEZwuhMsxWNyOFYiMYOUGzGkxvUM73ahkytYjN5aiQ1hdNTaBz%2FAbKoJa7h0QJgEgnbBTfYyQxKyWbAsimMRKOJNVC6thVQXpQi0jfWR1R2nKlkoPm1T5Zod6YWs9zPPP2KuopRQ6PW50vZ4nTyLpN87tB3ZbiT2n6UbNNTCyCZvyHU0uECe&X-Amz-Signature=331ec1e146cb525f89d111c41cbc0c6a16c3747c64e1acafacf09d9c86f078cf&X-Amz-SignedHeaders=host&x-id=GetObject)
