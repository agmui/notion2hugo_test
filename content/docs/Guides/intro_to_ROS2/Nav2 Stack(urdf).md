---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7NEJP2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHgmbSAEcUYYx3TATltcy%2BYeoMFXwXiN89ox6625QgTcAiEAt8dUj%2BoDIF0w73axo2FR1vTjJFgb8cacALtAwD93nl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIz9U7gVsVIQ8EdagircA%2B4mHg5THUD5pTjt27zm6AaBnUsUIr5ukz76QrGXRNYxa2YhHtKPBVxYVrtJm8NWwJd6l%2FaOHsZ7uhcB8eO585kb2x%2BjRBiWsF5wIqfvJ7FQhD9wy%2BYCHXQVSlobmbo7gnkP26bBBKAp7otiOwUWyBufTPKiYlBWrjPqYIEFhv6OrTnFdPbGnhos5BY5PkrU%2B%2BS2hzLun71X3lzU%2BEDWM%2BVyayOkfbJdrQ3r%2BiY0FgpGGEW4RPviQogGBRICf9bThmLJmIPTfT3HlFlzXHm3zJl7IODD44gW9yAibAkcxrnzMKlh7P4U42%2BXXLWqYlL3WEA1jvP93u1E11Gg%2FSB73N57OdxncxMldMzSDMCvHnN5HsnU5POfpBE0TEdTCVxZnKQr9sbnLIVlV6ssHvUfAh6Mz%2B9pzcAMXo44yESmfaA0RrS%2Buyznh%2FtYEkNv3G%2BP3rESQwfwCK19evXMEpM6kc0x%2BilKAZ1Vg1aPIeKmsPnTnkNMJ5oSAG%2BWgZnzE8TpgxrYkyRlYZQF547Cn2sZ%2B2Jau6km4VvTyn3iWE78%2FZswLHGTJG9risdAy4eNbiKHxAhy%2FwzdtMLAsxH5xNQhbErtMyo6ho%2BZYqWN%2BLWuRDWKqvTOy3CV0xIYjiZmMLyDiL0GOqUBTOgHcwyBNh6Kabn6Ze4rf9BZTtoD2LxIbiSJu11eGzQxkh32%2FRCC%2BQyg%2BmfoIjlXo0eI0n%2Brb1VS86TZOoTw0JMKI%2FiJUlFur4JA%2FmWTmLlCHIfWerJcqbY5p86Nz%2F0PRZSeI7DtbhtFKF6VisbfsNFzi84EaDLFlkpmdDgs7H80APT2u%2Bw5mmt1Kd1h9NJ5VDQvVHZ1GIwYjHfUeyzUDtTt17s1&X-Amz-Signature=d1cfbe58cacc7d5c48a4011749bc240bbb5f8a3362027d9084b99fe1b0ad4867&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7NEJP2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHgmbSAEcUYYx3TATltcy%2BYeoMFXwXiN89ox6625QgTcAiEAt8dUj%2BoDIF0w73axo2FR1vTjJFgb8cacALtAwD93nl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIz9U7gVsVIQ8EdagircA%2B4mHg5THUD5pTjt27zm6AaBnUsUIr5ukz76QrGXRNYxa2YhHtKPBVxYVrtJm8NWwJd6l%2FaOHsZ7uhcB8eO585kb2x%2BjRBiWsF5wIqfvJ7FQhD9wy%2BYCHXQVSlobmbo7gnkP26bBBKAp7otiOwUWyBufTPKiYlBWrjPqYIEFhv6OrTnFdPbGnhos5BY5PkrU%2B%2BS2hzLun71X3lzU%2BEDWM%2BVyayOkfbJdrQ3r%2BiY0FgpGGEW4RPviQogGBRICf9bThmLJmIPTfT3HlFlzXHm3zJl7IODD44gW9yAibAkcxrnzMKlh7P4U42%2BXXLWqYlL3WEA1jvP93u1E11Gg%2FSB73N57OdxncxMldMzSDMCvHnN5HsnU5POfpBE0TEdTCVxZnKQr9sbnLIVlV6ssHvUfAh6Mz%2B9pzcAMXo44yESmfaA0RrS%2Buyznh%2FtYEkNv3G%2BP3rESQwfwCK19evXMEpM6kc0x%2BilKAZ1Vg1aPIeKmsPnTnkNMJ5oSAG%2BWgZnzE8TpgxrYkyRlYZQF547Cn2sZ%2B2Jau6km4VvTyn3iWE78%2FZswLHGTJG9risdAy4eNbiKHxAhy%2FwzdtMLAsxH5xNQhbErtMyo6ho%2BZYqWN%2BLWuRDWKqvTOy3CV0xIYjiZmMLyDiL0GOqUBTOgHcwyBNh6Kabn6Ze4rf9BZTtoD2LxIbiSJu11eGzQxkh32%2FRCC%2BQyg%2BmfoIjlXo0eI0n%2Brb1VS86TZOoTw0JMKI%2FiJUlFur4JA%2FmWTmLlCHIfWerJcqbY5p86Nz%2F0PRZSeI7DtbhtFKF6VisbfsNFzi84EaDLFlkpmdDgs7H80APT2u%2Bw5mmt1Kd1h9NJ5VDQvVHZ1GIwYjHfUeyzUDtTt17s1&X-Amz-Signature=4c62d40c2b8fc8d668d56adc81e493db2c855ed90d11c6764f5689f2e122b2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7NEJP2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHgmbSAEcUYYx3TATltcy%2BYeoMFXwXiN89ox6625QgTcAiEAt8dUj%2BoDIF0w73axo2FR1vTjJFgb8cacALtAwD93nl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIz9U7gVsVIQ8EdagircA%2B4mHg5THUD5pTjt27zm6AaBnUsUIr5ukz76QrGXRNYxa2YhHtKPBVxYVrtJm8NWwJd6l%2FaOHsZ7uhcB8eO585kb2x%2BjRBiWsF5wIqfvJ7FQhD9wy%2BYCHXQVSlobmbo7gnkP26bBBKAp7otiOwUWyBufTPKiYlBWrjPqYIEFhv6OrTnFdPbGnhos5BY5PkrU%2B%2BS2hzLun71X3lzU%2BEDWM%2BVyayOkfbJdrQ3r%2BiY0FgpGGEW4RPviQogGBRICf9bThmLJmIPTfT3HlFlzXHm3zJl7IODD44gW9yAibAkcxrnzMKlh7P4U42%2BXXLWqYlL3WEA1jvP93u1E11Gg%2FSB73N57OdxncxMldMzSDMCvHnN5HsnU5POfpBE0TEdTCVxZnKQr9sbnLIVlV6ssHvUfAh6Mz%2B9pzcAMXo44yESmfaA0RrS%2Buyznh%2FtYEkNv3G%2BP3rESQwfwCK19evXMEpM6kc0x%2BilKAZ1Vg1aPIeKmsPnTnkNMJ5oSAG%2BWgZnzE8TpgxrYkyRlYZQF547Cn2sZ%2B2Jau6km4VvTyn3iWE78%2FZswLHGTJG9risdAy4eNbiKHxAhy%2FwzdtMLAsxH5xNQhbErtMyo6ho%2BZYqWN%2BLWuRDWKqvTOy3CV0xIYjiZmMLyDiL0GOqUBTOgHcwyBNh6Kabn6Ze4rf9BZTtoD2LxIbiSJu11eGzQxkh32%2FRCC%2BQyg%2BmfoIjlXo0eI0n%2Brb1VS86TZOoTw0JMKI%2FiJUlFur4JA%2FmWTmLlCHIfWerJcqbY5p86Nz%2F0PRZSeI7DtbhtFKF6VisbfsNFzi84EaDLFlkpmdDgs7H80APT2u%2Bw5mmt1Kd1h9NJ5VDQvVHZ1GIwYjHfUeyzUDtTt17s1&X-Amz-Signature=cc73619274aaa7b5a1b58abd952be83ed2951c94eeb28e4944ec135fc4e535ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7NEJP2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHgmbSAEcUYYx3TATltcy%2BYeoMFXwXiN89ox6625QgTcAiEAt8dUj%2BoDIF0w73axo2FR1vTjJFgb8cacALtAwD93nl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIz9U7gVsVIQ8EdagircA%2B4mHg5THUD5pTjt27zm6AaBnUsUIr5ukz76QrGXRNYxa2YhHtKPBVxYVrtJm8NWwJd6l%2FaOHsZ7uhcB8eO585kb2x%2BjRBiWsF5wIqfvJ7FQhD9wy%2BYCHXQVSlobmbo7gnkP26bBBKAp7otiOwUWyBufTPKiYlBWrjPqYIEFhv6OrTnFdPbGnhos5BY5PkrU%2B%2BS2hzLun71X3lzU%2BEDWM%2BVyayOkfbJdrQ3r%2BiY0FgpGGEW4RPviQogGBRICf9bThmLJmIPTfT3HlFlzXHm3zJl7IODD44gW9yAibAkcxrnzMKlh7P4U42%2BXXLWqYlL3WEA1jvP93u1E11Gg%2FSB73N57OdxncxMldMzSDMCvHnN5HsnU5POfpBE0TEdTCVxZnKQr9sbnLIVlV6ssHvUfAh6Mz%2B9pzcAMXo44yESmfaA0RrS%2Buyznh%2FtYEkNv3G%2BP3rESQwfwCK19evXMEpM6kc0x%2BilKAZ1Vg1aPIeKmsPnTnkNMJ5oSAG%2BWgZnzE8TpgxrYkyRlYZQF547Cn2sZ%2B2Jau6km4VvTyn3iWE78%2FZswLHGTJG9risdAy4eNbiKHxAhy%2FwzdtMLAsxH5xNQhbErtMyo6ho%2BZYqWN%2BLWuRDWKqvTOy3CV0xIYjiZmMLyDiL0GOqUBTOgHcwyBNh6Kabn6Ze4rf9BZTtoD2LxIbiSJu11eGzQxkh32%2FRCC%2BQyg%2BmfoIjlXo0eI0n%2Brb1VS86TZOoTw0JMKI%2FiJUlFur4JA%2FmWTmLlCHIfWerJcqbY5p86Nz%2F0PRZSeI7DtbhtFKF6VisbfsNFzi84EaDLFlkpmdDgs7H80APT2u%2Bw5mmt1Kd1h9NJ5VDQvVHZ1GIwYjHfUeyzUDtTt17s1&X-Amz-Signature=c24785394cafd9ef50ff31a5bc8f039637d26e8e1b5bb0a4db65209905604149&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7NEJP2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHgmbSAEcUYYx3TATltcy%2BYeoMFXwXiN89ox6625QgTcAiEAt8dUj%2BoDIF0w73axo2FR1vTjJFgb8cacALtAwD93nl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIz9U7gVsVIQ8EdagircA%2B4mHg5THUD5pTjt27zm6AaBnUsUIr5ukz76QrGXRNYxa2YhHtKPBVxYVrtJm8NWwJd6l%2FaOHsZ7uhcB8eO585kb2x%2BjRBiWsF5wIqfvJ7FQhD9wy%2BYCHXQVSlobmbo7gnkP26bBBKAp7otiOwUWyBufTPKiYlBWrjPqYIEFhv6OrTnFdPbGnhos5BY5PkrU%2B%2BS2hzLun71X3lzU%2BEDWM%2BVyayOkfbJdrQ3r%2BiY0FgpGGEW4RPviQogGBRICf9bThmLJmIPTfT3HlFlzXHm3zJl7IODD44gW9yAibAkcxrnzMKlh7P4U42%2BXXLWqYlL3WEA1jvP93u1E11Gg%2FSB73N57OdxncxMldMzSDMCvHnN5HsnU5POfpBE0TEdTCVxZnKQr9sbnLIVlV6ssHvUfAh6Mz%2B9pzcAMXo44yESmfaA0RrS%2Buyznh%2FtYEkNv3G%2BP3rESQwfwCK19evXMEpM6kc0x%2BilKAZ1Vg1aPIeKmsPnTnkNMJ5oSAG%2BWgZnzE8TpgxrYkyRlYZQF547Cn2sZ%2B2Jau6km4VvTyn3iWE78%2FZswLHGTJG9risdAy4eNbiKHxAhy%2FwzdtMLAsxH5xNQhbErtMyo6ho%2BZYqWN%2BLWuRDWKqvTOy3CV0xIYjiZmMLyDiL0GOqUBTOgHcwyBNh6Kabn6Ze4rf9BZTtoD2LxIbiSJu11eGzQxkh32%2FRCC%2BQyg%2BmfoIjlXo0eI0n%2Brb1VS86TZOoTw0JMKI%2FiJUlFur4JA%2FmWTmLlCHIfWerJcqbY5p86Nz%2F0PRZSeI7DtbhtFKF6VisbfsNFzi84EaDLFlkpmdDgs7H80APT2u%2Bw5mmt1Kd1h9NJ5VDQvVHZ1GIwYjHfUeyzUDtTt17s1&X-Amz-Signature=381ee94867506c346ee8d7be00c9748e3d33d573634016a54d7857e2c0e465ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7NEJP2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHgmbSAEcUYYx3TATltcy%2BYeoMFXwXiN89ox6625QgTcAiEAt8dUj%2BoDIF0w73axo2FR1vTjJFgb8cacALtAwD93nl4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIz9U7gVsVIQ8EdagircA%2B4mHg5THUD5pTjt27zm6AaBnUsUIr5ukz76QrGXRNYxa2YhHtKPBVxYVrtJm8NWwJd6l%2FaOHsZ7uhcB8eO585kb2x%2BjRBiWsF5wIqfvJ7FQhD9wy%2BYCHXQVSlobmbo7gnkP26bBBKAp7otiOwUWyBufTPKiYlBWrjPqYIEFhv6OrTnFdPbGnhos5BY5PkrU%2B%2BS2hzLun71X3lzU%2BEDWM%2BVyayOkfbJdrQ3r%2BiY0FgpGGEW4RPviQogGBRICf9bThmLJmIPTfT3HlFlzXHm3zJl7IODD44gW9yAibAkcxrnzMKlh7P4U42%2BXXLWqYlL3WEA1jvP93u1E11Gg%2FSB73N57OdxncxMldMzSDMCvHnN5HsnU5POfpBE0TEdTCVxZnKQr9sbnLIVlV6ssHvUfAh6Mz%2B9pzcAMXo44yESmfaA0RrS%2Buyznh%2FtYEkNv3G%2BP3rESQwfwCK19evXMEpM6kc0x%2BilKAZ1Vg1aPIeKmsPnTnkNMJ5oSAG%2BWgZnzE8TpgxrYkyRlYZQF547Cn2sZ%2B2Jau6km4VvTyn3iWE78%2FZswLHGTJG9risdAy4eNbiKHxAhy%2FwzdtMLAsxH5xNQhbErtMyo6ho%2BZYqWN%2BLWuRDWKqvTOy3CV0xIYjiZmMLyDiL0GOqUBTOgHcwyBNh6Kabn6Ze4rf9BZTtoD2LxIbiSJu11eGzQxkh32%2FRCC%2BQyg%2BmfoIjlXo0eI0n%2Brb1VS86TZOoTw0JMKI%2FiJUlFur4JA%2FmWTmLlCHIfWerJcqbY5p86Nz%2F0PRZSeI7DtbhtFKF6VisbfsNFzi84EaDLFlkpmdDgs7H80APT2u%2Bw5mmt1Kd1h9NJ5VDQvVHZ1GIwYjHfUeyzUDtTt17s1&X-Amz-Signature=6ff7d7fb4a72a0d66c071074c4cac7aaac7538433db796b1461785a2a88d9244&X-Amz-SignedHeaders=host&x-id=GetObject)
