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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6HX4A6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVl9KFxtXrOF208TpxSp9HPHJ6KBEDunGUKsvJREXfNAiEA6arxXmhlRkHvYhK%2BCBorKdmCMb6ed5U%2BnHLH6xfkqwQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNJI63skEMM%2BVwxUUCrcA9LDirvQ%2BVhyjSe0FQ2oSAngA%2F5%2BFsCsXksgl1znMjFkMpGqPUCQvzTBzTYFqScIrQBC%2BREvLCojrG4YIY%2BMXJeDsmgZx0WFlOq7fyQjGtcIpvev3qjXPgK%2B0ov4pSUDPjPhYdkFGQFCMnupDQWEFb0hnGmfVh4pzc8B9fs2rlxcHdrkzIEy8tFJj2PfsKRDs9Iy%2F7banKhqvHtQSxWcg5ZV7Nc9CZ4nLWE96vyfqWbTrd%2B%2BqwhXMB3RSVx5mttJWEb3gc0ccz1rwN2Jm1%2FSY5AgpObfPjRC8odMckrTspLf2jYakhmlxw1HWT3kSIrJdn6jkllanZFDHNPX4ERYZv5cJcduY%2Faz7peZigB8w1Efj4zIFEXug0g8WwnDFhTYpABcC%2BXy%2BGVKH0%2FKfmPgBraWqBG2hTFEI7jBSci1o6s8yUaufitJ5fYrmkYUw1uLwHgVwTY14QQudLcDkmyUNxYrHUQXLkEy8ndJzbb%2BUi%2BR8sUYgU7Fyetcgqjmlf6plCOZgSRvaZft3yTGG68igiysF9NqKWqORRlc90Yn9Yzij7ANJ%2FQXAirCrhqSh38TFhvCmOMDW4j%2B0IOUjinZ1YyZGUjNmkCQvFOpM0aHQsopi%2FyhycMPxe1WiuZxMPjpn74GOqUB%2FjGQIRuTX9eWSzap65WoabWy6FH%2FifKlNs0i22J6z%2BayN%2Fr0rG8%2BciaBgNhrjO2%2BsYDBe1NV6RCxTUd84cz0J%2FxyzBZHi40cbv7KOx8VsN6MsW%2FC9SqQziUdwyD53hsuvHaWNK6AMcwB0t8oJxgQrEJbJL4jv7QCS35o4QxLsVktS1b5a5QzgU2qX6hIblV%2FqloJuLmfRbroDci3h7zkF5ZfWSG7&X-Amz-Signature=b30a842f5624f101091684e834345479e400f0d4fbe128ce360dd10a032bc344&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6HX4A6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVl9KFxtXrOF208TpxSp9HPHJ6KBEDunGUKsvJREXfNAiEA6arxXmhlRkHvYhK%2BCBorKdmCMb6ed5U%2BnHLH6xfkqwQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNJI63skEMM%2BVwxUUCrcA9LDirvQ%2BVhyjSe0FQ2oSAngA%2F5%2BFsCsXksgl1znMjFkMpGqPUCQvzTBzTYFqScIrQBC%2BREvLCojrG4YIY%2BMXJeDsmgZx0WFlOq7fyQjGtcIpvev3qjXPgK%2B0ov4pSUDPjPhYdkFGQFCMnupDQWEFb0hnGmfVh4pzc8B9fs2rlxcHdrkzIEy8tFJj2PfsKRDs9Iy%2F7banKhqvHtQSxWcg5ZV7Nc9CZ4nLWE96vyfqWbTrd%2B%2BqwhXMB3RSVx5mttJWEb3gc0ccz1rwN2Jm1%2FSY5AgpObfPjRC8odMckrTspLf2jYakhmlxw1HWT3kSIrJdn6jkllanZFDHNPX4ERYZv5cJcduY%2Faz7peZigB8w1Efj4zIFEXug0g8WwnDFhTYpABcC%2BXy%2BGVKH0%2FKfmPgBraWqBG2hTFEI7jBSci1o6s8yUaufitJ5fYrmkYUw1uLwHgVwTY14QQudLcDkmyUNxYrHUQXLkEy8ndJzbb%2BUi%2BR8sUYgU7Fyetcgqjmlf6plCOZgSRvaZft3yTGG68igiysF9NqKWqORRlc90Yn9Yzij7ANJ%2FQXAirCrhqSh38TFhvCmOMDW4j%2B0IOUjinZ1YyZGUjNmkCQvFOpM0aHQsopi%2FyhycMPxe1WiuZxMPjpn74GOqUB%2FjGQIRuTX9eWSzap65WoabWy6FH%2FifKlNs0i22J6z%2BayN%2Fr0rG8%2BciaBgNhrjO2%2BsYDBe1NV6RCxTUd84cz0J%2FxyzBZHi40cbv7KOx8VsN6MsW%2FC9SqQziUdwyD53hsuvHaWNK6AMcwB0t8oJxgQrEJbJL4jv7QCS35o4QxLsVktS1b5a5QzgU2qX6hIblV%2FqloJuLmfRbroDci3h7zkF5ZfWSG7&X-Amz-Signature=0b31b920b23c2f3959e28e6ce1afd8352ce401a9f306d5e7b7cb2a1a5805021a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6HX4A6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVl9KFxtXrOF208TpxSp9HPHJ6KBEDunGUKsvJREXfNAiEA6arxXmhlRkHvYhK%2BCBorKdmCMb6ed5U%2BnHLH6xfkqwQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNJI63skEMM%2BVwxUUCrcA9LDirvQ%2BVhyjSe0FQ2oSAngA%2F5%2BFsCsXksgl1znMjFkMpGqPUCQvzTBzTYFqScIrQBC%2BREvLCojrG4YIY%2BMXJeDsmgZx0WFlOq7fyQjGtcIpvev3qjXPgK%2B0ov4pSUDPjPhYdkFGQFCMnupDQWEFb0hnGmfVh4pzc8B9fs2rlxcHdrkzIEy8tFJj2PfsKRDs9Iy%2F7banKhqvHtQSxWcg5ZV7Nc9CZ4nLWE96vyfqWbTrd%2B%2BqwhXMB3RSVx5mttJWEb3gc0ccz1rwN2Jm1%2FSY5AgpObfPjRC8odMckrTspLf2jYakhmlxw1HWT3kSIrJdn6jkllanZFDHNPX4ERYZv5cJcduY%2Faz7peZigB8w1Efj4zIFEXug0g8WwnDFhTYpABcC%2BXy%2BGVKH0%2FKfmPgBraWqBG2hTFEI7jBSci1o6s8yUaufitJ5fYrmkYUw1uLwHgVwTY14QQudLcDkmyUNxYrHUQXLkEy8ndJzbb%2BUi%2BR8sUYgU7Fyetcgqjmlf6plCOZgSRvaZft3yTGG68igiysF9NqKWqORRlc90Yn9Yzij7ANJ%2FQXAirCrhqSh38TFhvCmOMDW4j%2B0IOUjinZ1YyZGUjNmkCQvFOpM0aHQsopi%2FyhycMPxe1WiuZxMPjpn74GOqUB%2FjGQIRuTX9eWSzap65WoabWy6FH%2FifKlNs0i22J6z%2BayN%2Fr0rG8%2BciaBgNhrjO2%2BsYDBe1NV6RCxTUd84cz0J%2FxyzBZHi40cbv7KOx8VsN6MsW%2FC9SqQziUdwyD53hsuvHaWNK6AMcwB0t8oJxgQrEJbJL4jv7QCS35o4QxLsVktS1b5a5QzgU2qX6hIblV%2FqloJuLmfRbroDci3h7zkF5ZfWSG7&X-Amz-Signature=5bcada16c21722ebf21fa528172599a7cae6594991942bd2dd8351b064c0dd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6HX4A6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVl9KFxtXrOF208TpxSp9HPHJ6KBEDunGUKsvJREXfNAiEA6arxXmhlRkHvYhK%2BCBorKdmCMb6ed5U%2BnHLH6xfkqwQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNJI63skEMM%2BVwxUUCrcA9LDirvQ%2BVhyjSe0FQ2oSAngA%2F5%2BFsCsXksgl1znMjFkMpGqPUCQvzTBzTYFqScIrQBC%2BREvLCojrG4YIY%2BMXJeDsmgZx0WFlOq7fyQjGtcIpvev3qjXPgK%2B0ov4pSUDPjPhYdkFGQFCMnupDQWEFb0hnGmfVh4pzc8B9fs2rlxcHdrkzIEy8tFJj2PfsKRDs9Iy%2F7banKhqvHtQSxWcg5ZV7Nc9CZ4nLWE96vyfqWbTrd%2B%2BqwhXMB3RSVx5mttJWEb3gc0ccz1rwN2Jm1%2FSY5AgpObfPjRC8odMckrTspLf2jYakhmlxw1HWT3kSIrJdn6jkllanZFDHNPX4ERYZv5cJcduY%2Faz7peZigB8w1Efj4zIFEXug0g8WwnDFhTYpABcC%2BXy%2BGVKH0%2FKfmPgBraWqBG2hTFEI7jBSci1o6s8yUaufitJ5fYrmkYUw1uLwHgVwTY14QQudLcDkmyUNxYrHUQXLkEy8ndJzbb%2BUi%2BR8sUYgU7Fyetcgqjmlf6plCOZgSRvaZft3yTGG68igiysF9NqKWqORRlc90Yn9Yzij7ANJ%2FQXAirCrhqSh38TFhvCmOMDW4j%2B0IOUjinZ1YyZGUjNmkCQvFOpM0aHQsopi%2FyhycMPxe1WiuZxMPjpn74GOqUB%2FjGQIRuTX9eWSzap65WoabWy6FH%2FifKlNs0i22J6z%2BayN%2Fr0rG8%2BciaBgNhrjO2%2BsYDBe1NV6RCxTUd84cz0J%2FxyzBZHi40cbv7KOx8VsN6MsW%2FC9SqQziUdwyD53hsuvHaWNK6AMcwB0t8oJxgQrEJbJL4jv7QCS35o4QxLsVktS1b5a5QzgU2qX6hIblV%2FqloJuLmfRbroDci3h7zkF5ZfWSG7&X-Amz-Signature=e15e597a7d81db3eff9a02fe44bf5c952a13ea9a52c1c6495dd43584f5ae7937&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6HX4A6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVl9KFxtXrOF208TpxSp9HPHJ6KBEDunGUKsvJREXfNAiEA6arxXmhlRkHvYhK%2BCBorKdmCMb6ed5U%2BnHLH6xfkqwQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNJI63skEMM%2BVwxUUCrcA9LDirvQ%2BVhyjSe0FQ2oSAngA%2F5%2BFsCsXksgl1znMjFkMpGqPUCQvzTBzTYFqScIrQBC%2BREvLCojrG4YIY%2BMXJeDsmgZx0WFlOq7fyQjGtcIpvev3qjXPgK%2B0ov4pSUDPjPhYdkFGQFCMnupDQWEFb0hnGmfVh4pzc8B9fs2rlxcHdrkzIEy8tFJj2PfsKRDs9Iy%2F7banKhqvHtQSxWcg5ZV7Nc9CZ4nLWE96vyfqWbTrd%2B%2BqwhXMB3RSVx5mttJWEb3gc0ccz1rwN2Jm1%2FSY5AgpObfPjRC8odMckrTspLf2jYakhmlxw1HWT3kSIrJdn6jkllanZFDHNPX4ERYZv5cJcduY%2Faz7peZigB8w1Efj4zIFEXug0g8WwnDFhTYpABcC%2BXy%2BGVKH0%2FKfmPgBraWqBG2hTFEI7jBSci1o6s8yUaufitJ5fYrmkYUw1uLwHgVwTY14QQudLcDkmyUNxYrHUQXLkEy8ndJzbb%2BUi%2BR8sUYgU7Fyetcgqjmlf6plCOZgSRvaZft3yTGG68igiysF9NqKWqORRlc90Yn9Yzij7ANJ%2FQXAirCrhqSh38TFhvCmOMDW4j%2B0IOUjinZ1YyZGUjNmkCQvFOpM0aHQsopi%2FyhycMPxe1WiuZxMPjpn74GOqUB%2FjGQIRuTX9eWSzap65WoabWy6FH%2FifKlNs0i22J6z%2BayN%2Fr0rG8%2BciaBgNhrjO2%2BsYDBe1NV6RCxTUd84cz0J%2FxyzBZHi40cbv7KOx8VsN6MsW%2FC9SqQziUdwyD53hsuvHaWNK6AMcwB0t8oJxgQrEJbJL4jv7QCS35o4QxLsVktS1b5a5QzgU2qX6hIblV%2FqloJuLmfRbroDci3h7zkF5ZfWSG7&X-Amz-Signature=ebd1fe4188deb591e4d20aa538f148d1c9a185c8031e59f015ad512ae691af7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL6HX4A6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVl9KFxtXrOF208TpxSp9HPHJ6KBEDunGUKsvJREXfNAiEA6arxXmhlRkHvYhK%2BCBorKdmCMb6ed5U%2BnHLH6xfkqwQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNJI63skEMM%2BVwxUUCrcA9LDirvQ%2BVhyjSe0FQ2oSAngA%2F5%2BFsCsXksgl1znMjFkMpGqPUCQvzTBzTYFqScIrQBC%2BREvLCojrG4YIY%2BMXJeDsmgZx0WFlOq7fyQjGtcIpvev3qjXPgK%2B0ov4pSUDPjPhYdkFGQFCMnupDQWEFb0hnGmfVh4pzc8B9fs2rlxcHdrkzIEy8tFJj2PfsKRDs9Iy%2F7banKhqvHtQSxWcg5ZV7Nc9CZ4nLWE96vyfqWbTrd%2B%2BqwhXMB3RSVx5mttJWEb3gc0ccz1rwN2Jm1%2FSY5AgpObfPjRC8odMckrTspLf2jYakhmlxw1HWT3kSIrJdn6jkllanZFDHNPX4ERYZv5cJcduY%2Faz7peZigB8w1Efj4zIFEXug0g8WwnDFhTYpABcC%2BXy%2BGVKH0%2FKfmPgBraWqBG2hTFEI7jBSci1o6s8yUaufitJ5fYrmkYUw1uLwHgVwTY14QQudLcDkmyUNxYrHUQXLkEy8ndJzbb%2BUi%2BR8sUYgU7Fyetcgqjmlf6plCOZgSRvaZft3yTGG68igiysF9NqKWqORRlc90Yn9Yzij7ANJ%2FQXAirCrhqSh38TFhvCmOMDW4j%2B0IOUjinZ1YyZGUjNmkCQvFOpM0aHQsopi%2FyhycMPxe1WiuZxMPjpn74GOqUB%2FjGQIRuTX9eWSzap65WoabWy6FH%2FifKlNs0i22J6z%2BayN%2Fr0rG8%2BciaBgNhrjO2%2BsYDBe1NV6RCxTUd84cz0J%2FxyzBZHi40cbv7KOx8VsN6MsW%2FC9SqQziUdwyD53hsuvHaWNK6AMcwB0t8oJxgQrEJbJL4jv7QCS35o4QxLsVktS1b5a5QzgU2qX6hIblV%2FqloJuLmfRbroDci3h7zkF5ZfWSG7&X-Amz-Signature=e2b9e99759d9016b4d0fd8eac75229a391053969e2d0dcb267074afa8972e7e7&X-Amz-SignedHeaders=host&x-id=GetObject)
