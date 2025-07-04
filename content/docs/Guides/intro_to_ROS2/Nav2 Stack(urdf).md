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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TUHYFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE%2BpfdTx2R9E2h79D0WecdJDyvIWQvoqaXyvFTa1LGFBAiEA1%2BKRCu9ROT0mO5D3BQkmfC8uPgGB453bdjwc7I366bAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCANbDZOrToaMKUqkyrcA9owBG%2F2OlJOt1r7tz3WN8v0fg9YDey1ksKxc%2FyqgbIVl5ov915msf8EVWd%2BNAe5ItAjpyhA5hUYk9RH33kaKVl6di0MYMw%2FX4PGUP2HzoYgZQFPk%2BTUia2qFX4kzPwKNNRNQX29sDOnwZEPLbhTIUIKW04MN57oVwKKF%2B0%2FKoCnI4t%2BjEpd22Ttos6NexptFfOZKGWqhIpFtceSlIEg2POYZPwO0VoXozUA7T371Ez7JkYQMMXqN9dJ8xs3Q4OHmFMVwbjRXuaKxeJw3EdCeBp2ens0KVZyGfikA855MGtzvaa5mGMjadJSwaMuNnVf2pBtlDcRYuqt2lKFlOhjqwvfjcoF3yoNGE2ikKT11fnUJiMoW9MYgNbMTK7jNL0%2B7Du1IPYnwF6MEPhafEjDomX6g7AFC7UWMzMEjrtTokfwyMAlW89oi4a7UWu8vrMnNfqn%2FHQkuvJN5A1ey%2Bxtb8TCigboziCg4Ci%2BqJotZ3WaQIhTRmG8RlOAyzSRbjMmbiuVOPQAoTcckv4GwmYSIs8E7p57En%2BomoUlKH9AcC%2Bw1bBMZY7vV9Bl%2F3VgaVdbbYkWnPlpm7i2KKcNiwxPYMh8VqdvBYgA3oZ3kKGnfv7DGl2kr0fjor0qnT4WMI%2B2ncMGOqUBMZMyIow2zflrddanK6uRXWJLs1JRLtBQOswbeDHahn19yzJXQI7zB77cnsL1IRnM5A1OSW4pbEeg0g%2FTVZ3bl5WXmuEGHfg3kn7NIVM0vZgrquGav%2FOM5vFv4UGL5%2BPCQYeVpb8384ihvjyvLlUqBC0TEfSeM04aH%2FTNu1L7t1TMbX%2BYAqRFuRPVdwkFXgLlQe7ynMXfC4NBVQJZ2xypT8UNJTXt&X-Amz-Signature=11706694efb10c6a3bcd42f42256875c3a55135fb8d215cc8d286e68dc73d0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TUHYFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE%2BpfdTx2R9E2h79D0WecdJDyvIWQvoqaXyvFTa1LGFBAiEA1%2BKRCu9ROT0mO5D3BQkmfC8uPgGB453bdjwc7I366bAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCANbDZOrToaMKUqkyrcA9owBG%2F2OlJOt1r7tz3WN8v0fg9YDey1ksKxc%2FyqgbIVl5ov915msf8EVWd%2BNAe5ItAjpyhA5hUYk9RH33kaKVl6di0MYMw%2FX4PGUP2HzoYgZQFPk%2BTUia2qFX4kzPwKNNRNQX29sDOnwZEPLbhTIUIKW04MN57oVwKKF%2B0%2FKoCnI4t%2BjEpd22Ttos6NexptFfOZKGWqhIpFtceSlIEg2POYZPwO0VoXozUA7T371Ez7JkYQMMXqN9dJ8xs3Q4OHmFMVwbjRXuaKxeJw3EdCeBp2ens0KVZyGfikA855MGtzvaa5mGMjadJSwaMuNnVf2pBtlDcRYuqt2lKFlOhjqwvfjcoF3yoNGE2ikKT11fnUJiMoW9MYgNbMTK7jNL0%2B7Du1IPYnwF6MEPhafEjDomX6g7AFC7UWMzMEjrtTokfwyMAlW89oi4a7UWu8vrMnNfqn%2FHQkuvJN5A1ey%2Bxtb8TCigboziCg4Ci%2BqJotZ3WaQIhTRmG8RlOAyzSRbjMmbiuVOPQAoTcckv4GwmYSIs8E7p57En%2BomoUlKH9AcC%2Bw1bBMZY7vV9Bl%2F3VgaVdbbYkWnPlpm7i2KKcNiwxPYMh8VqdvBYgA3oZ3kKGnfv7DGl2kr0fjor0qnT4WMI%2B2ncMGOqUBMZMyIow2zflrddanK6uRXWJLs1JRLtBQOswbeDHahn19yzJXQI7zB77cnsL1IRnM5A1OSW4pbEeg0g%2FTVZ3bl5WXmuEGHfg3kn7NIVM0vZgrquGav%2FOM5vFv4UGL5%2BPCQYeVpb8384ihvjyvLlUqBC0TEfSeM04aH%2FTNu1L7t1TMbX%2BYAqRFuRPVdwkFXgLlQe7ynMXfC4NBVQJZ2xypT8UNJTXt&X-Amz-Signature=047ecd1278b3822cd1c39c54898084f84fa0e6b664039eabeb75e5b64ae089bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TUHYFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE%2BpfdTx2R9E2h79D0WecdJDyvIWQvoqaXyvFTa1LGFBAiEA1%2BKRCu9ROT0mO5D3BQkmfC8uPgGB453bdjwc7I366bAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCANbDZOrToaMKUqkyrcA9owBG%2F2OlJOt1r7tz3WN8v0fg9YDey1ksKxc%2FyqgbIVl5ov915msf8EVWd%2BNAe5ItAjpyhA5hUYk9RH33kaKVl6di0MYMw%2FX4PGUP2HzoYgZQFPk%2BTUia2qFX4kzPwKNNRNQX29sDOnwZEPLbhTIUIKW04MN57oVwKKF%2B0%2FKoCnI4t%2BjEpd22Ttos6NexptFfOZKGWqhIpFtceSlIEg2POYZPwO0VoXozUA7T371Ez7JkYQMMXqN9dJ8xs3Q4OHmFMVwbjRXuaKxeJw3EdCeBp2ens0KVZyGfikA855MGtzvaa5mGMjadJSwaMuNnVf2pBtlDcRYuqt2lKFlOhjqwvfjcoF3yoNGE2ikKT11fnUJiMoW9MYgNbMTK7jNL0%2B7Du1IPYnwF6MEPhafEjDomX6g7AFC7UWMzMEjrtTokfwyMAlW89oi4a7UWu8vrMnNfqn%2FHQkuvJN5A1ey%2Bxtb8TCigboziCg4Ci%2BqJotZ3WaQIhTRmG8RlOAyzSRbjMmbiuVOPQAoTcckv4GwmYSIs8E7p57En%2BomoUlKH9AcC%2Bw1bBMZY7vV9Bl%2F3VgaVdbbYkWnPlpm7i2KKcNiwxPYMh8VqdvBYgA3oZ3kKGnfv7DGl2kr0fjor0qnT4WMI%2B2ncMGOqUBMZMyIow2zflrddanK6uRXWJLs1JRLtBQOswbeDHahn19yzJXQI7zB77cnsL1IRnM5A1OSW4pbEeg0g%2FTVZ3bl5WXmuEGHfg3kn7NIVM0vZgrquGav%2FOM5vFv4UGL5%2BPCQYeVpb8384ihvjyvLlUqBC0TEfSeM04aH%2FTNu1L7t1TMbX%2BYAqRFuRPVdwkFXgLlQe7ynMXfC4NBVQJZ2xypT8UNJTXt&X-Amz-Signature=dea36a6223f5592843add46b48177564cb7c03cf60fb6ffa09439ff48ab4d821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TUHYFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE%2BpfdTx2R9E2h79D0WecdJDyvIWQvoqaXyvFTa1LGFBAiEA1%2BKRCu9ROT0mO5D3BQkmfC8uPgGB453bdjwc7I366bAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCANbDZOrToaMKUqkyrcA9owBG%2F2OlJOt1r7tz3WN8v0fg9YDey1ksKxc%2FyqgbIVl5ov915msf8EVWd%2BNAe5ItAjpyhA5hUYk9RH33kaKVl6di0MYMw%2FX4PGUP2HzoYgZQFPk%2BTUia2qFX4kzPwKNNRNQX29sDOnwZEPLbhTIUIKW04MN57oVwKKF%2B0%2FKoCnI4t%2BjEpd22Ttos6NexptFfOZKGWqhIpFtceSlIEg2POYZPwO0VoXozUA7T371Ez7JkYQMMXqN9dJ8xs3Q4OHmFMVwbjRXuaKxeJw3EdCeBp2ens0KVZyGfikA855MGtzvaa5mGMjadJSwaMuNnVf2pBtlDcRYuqt2lKFlOhjqwvfjcoF3yoNGE2ikKT11fnUJiMoW9MYgNbMTK7jNL0%2B7Du1IPYnwF6MEPhafEjDomX6g7AFC7UWMzMEjrtTokfwyMAlW89oi4a7UWu8vrMnNfqn%2FHQkuvJN5A1ey%2Bxtb8TCigboziCg4Ci%2BqJotZ3WaQIhTRmG8RlOAyzSRbjMmbiuVOPQAoTcckv4GwmYSIs8E7p57En%2BomoUlKH9AcC%2Bw1bBMZY7vV9Bl%2F3VgaVdbbYkWnPlpm7i2KKcNiwxPYMh8VqdvBYgA3oZ3kKGnfv7DGl2kr0fjor0qnT4WMI%2B2ncMGOqUBMZMyIow2zflrddanK6uRXWJLs1JRLtBQOswbeDHahn19yzJXQI7zB77cnsL1IRnM5A1OSW4pbEeg0g%2FTVZ3bl5WXmuEGHfg3kn7NIVM0vZgrquGav%2FOM5vFv4UGL5%2BPCQYeVpb8384ihvjyvLlUqBC0TEfSeM04aH%2FTNu1L7t1TMbX%2BYAqRFuRPVdwkFXgLlQe7ynMXfC4NBVQJZ2xypT8UNJTXt&X-Amz-Signature=edcd4189829f9ab587bd6fa0abcbefcec6d4d9bb4d575b14298b0a0589618034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TUHYFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE%2BpfdTx2R9E2h79D0WecdJDyvIWQvoqaXyvFTa1LGFBAiEA1%2BKRCu9ROT0mO5D3BQkmfC8uPgGB453bdjwc7I366bAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCANbDZOrToaMKUqkyrcA9owBG%2F2OlJOt1r7tz3WN8v0fg9YDey1ksKxc%2FyqgbIVl5ov915msf8EVWd%2BNAe5ItAjpyhA5hUYk9RH33kaKVl6di0MYMw%2FX4PGUP2HzoYgZQFPk%2BTUia2qFX4kzPwKNNRNQX29sDOnwZEPLbhTIUIKW04MN57oVwKKF%2B0%2FKoCnI4t%2BjEpd22Ttos6NexptFfOZKGWqhIpFtceSlIEg2POYZPwO0VoXozUA7T371Ez7JkYQMMXqN9dJ8xs3Q4OHmFMVwbjRXuaKxeJw3EdCeBp2ens0KVZyGfikA855MGtzvaa5mGMjadJSwaMuNnVf2pBtlDcRYuqt2lKFlOhjqwvfjcoF3yoNGE2ikKT11fnUJiMoW9MYgNbMTK7jNL0%2B7Du1IPYnwF6MEPhafEjDomX6g7AFC7UWMzMEjrtTokfwyMAlW89oi4a7UWu8vrMnNfqn%2FHQkuvJN5A1ey%2Bxtb8TCigboziCg4Ci%2BqJotZ3WaQIhTRmG8RlOAyzSRbjMmbiuVOPQAoTcckv4GwmYSIs8E7p57En%2BomoUlKH9AcC%2Bw1bBMZY7vV9Bl%2F3VgaVdbbYkWnPlpm7i2KKcNiwxPYMh8VqdvBYgA3oZ3kKGnfv7DGl2kr0fjor0qnT4WMI%2B2ncMGOqUBMZMyIow2zflrddanK6uRXWJLs1JRLtBQOswbeDHahn19yzJXQI7zB77cnsL1IRnM5A1OSW4pbEeg0g%2FTVZ3bl5WXmuEGHfg3kn7NIVM0vZgrquGav%2FOM5vFv4UGL5%2BPCQYeVpb8384ihvjyvLlUqBC0TEfSeM04aH%2FTNu1L7t1TMbX%2BYAqRFuRPVdwkFXgLlQe7ynMXfC4NBVQJZ2xypT8UNJTXt&X-Amz-Signature=2eb1ebcc2a33c1ae872201ba463c7b6a2ce041e4512ccd2fe2f0507093426c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TUHYFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIE%2BpfdTx2R9E2h79D0WecdJDyvIWQvoqaXyvFTa1LGFBAiEA1%2BKRCu9ROT0mO5D3BQkmfC8uPgGB453bdjwc7I366bAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCANbDZOrToaMKUqkyrcA9owBG%2F2OlJOt1r7tz3WN8v0fg9YDey1ksKxc%2FyqgbIVl5ov915msf8EVWd%2BNAe5ItAjpyhA5hUYk9RH33kaKVl6di0MYMw%2FX4PGUP2HzoYgZQFPk%2BTUia2qFX4kzPwKNNRNQX29sDOnwZEPLbhTIUIKW04MN57oVwKKF%2B0%2FKoCnI4t%2BjEpd22Ttos6NexptFfOZKGWqhIpFtceSlIEg2POYZPwO0VoXozUA7T371Ez7JkYQMMXqN9dJ8xs3Q4OHmFMVwbjRXuaKxeJw3EdCeBp2ens0KVZyGfikA855MGtzvaa5mGMjadJSwaMuNnVf2pBtlDcRYuqt2lKFlOhjqwvfjcoF3yoNGE2ikKT11fnUJiMoW9MYgNbMTK7jNL0%2B7Du1IPYnwF6MEPhafEjDomX6g7AFC7UWMzMEjrtTokfwyMAlW89oi4a7UWu8vrMnNfqn%2FHQkuvJN5A1ey%2Bxtb8TCigboziCg4Ci%2BqJotZ3WaQIhTRmG8RlOAyzSRbjMmbiuVOPQAoTcckv4GwmYSIs8E7p57En%2BomoUlKH9AcC%2Bw1bBMZY7vV9Bl%2F3VgaVdbbYkWnPlpm7i2KKcNiwxPYMh8VqdvBYgA3oZ3kKGnfv7DGl2kr0fjor0qnT4WMI%2B2ncMGOqUBMZMyIow2zflrddanK6uRXWJLs1JRLtBQOswbeDHahn19yzJXQI7zB77cnsL1IRnM5A1OSW4pbEeg0g%2FTVZ3bl5WXmuEGHfg3kn7NIVM0vZgrquGav%2FOM5vFv4UGL5%2BPCQYeVpb8384ihvjyvLlUqBC0TEfSeM04aH%2FTNu1L7t1TMbX%2BYAqRFuRPVdwkFXgLlQe7ynMXfC4NBVQJZ2xypT8UNJTXt&X-Amz-Signature=805c3a99de13e2a924058fe10400d53f211c0728b037c6eb24e87e2a04e4bf6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
