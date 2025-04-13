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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UTIE5R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLK6ySedYEg09JUpU7JWPDa5GEg0AFLvAhB%2B8eU4l%2FWQIgckie2qH6uxJu0YtJoaYNYaGCiqG16tSgQRMtKKqd30oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7CHgbE6A0%2B9GTpIyrcA7peZCEc4Yb7iI8b19l%2B1e34KLrsoE%2FrwmpQxbSTMRb9B8IRR2b2%2Fku6EYVTSdWrB3ltX%2FDyPYEMrTX73Y7Iz55hAspUBjxj%2F1xV1DF%2BJ0MpXWURVQuUE1spNC65Varx4o2m4HxnpQzq%2FJi%2BoAwDpzBddsmT6z87fNS5dzC%2FbJpkAKqwdAD0owpQWdrGsu7j%2FJw21UDc531G3wUXAerRC4YUzk4lxQd%2Fpk7I0aguPLdYgHTfRYRt%2FIX%2FwcoyB5tVG47ckmU2BM0i%2BePKsbsJlk%2BGzfWNhMrUjKWOZU%2BmeRDXrhhskoFgTbdinXPW1GeJ%2F%2BovirLiyeRT%2BZLn0UoZgc9wHaUbNYh%2FqEJAIceQqK5uVpGTGx9b0NWOGHb2C%2Bd964uJrrTScBrhCnmiQX%2Bh6mc%2Bp0LLKvy0rfojSAYfJwdVVg7HUgTMFz1Cd%2FrOQulJ2fZp9kEUbfuxH2JdWBE8i6mtkMy9EoXOQuSk8cy%2BsriZbxANu%2B5k2PALX6B2HKwETQiWlsViQUhSHlOuCnaGXPKkoq1lGZSrKa68vsUHN8m2jks9gtjvLo6KpgjLvppWhgZuwvrRsLom5jpuwQ%2BBXrzP%2Bqs%2FoAZa%2FNBpxp9lZJkr%2BkVgfNTIUN8psaSkMNTg7b8GOqUBlZz%2F%2Bki7aC4AA2f5yjk0zZ5%2FMhcmG0m8HP9wRSn41ELsj1jKX%2FDbbGJvfVrWejF5auFsg9cpYqeBwjjDkW0x0T5GCP7dkTBysBV4T4Lh%2B16YMQ0NstyDsTe%2B5TZG1IHe5iiDKv6RfkWaZ7aCk3KV%2FWcDPMiYb1%2BFQXJcDkUz4ThxxeAT%2FctwvwbBdG%2FZ4yB%2FU7if2xOIeZonEBHSyqPNJpSdqkc3&X-Amz-Signature=9af3b0d2e1e913d906d07a878558b0e4d3c1b7b3d34d2885985bc6387d2a2a07&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UTIE5R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLK6ySedYEg09JUpU7JWPDa5GEg0AFLvAhB%2B8eU4l%2FWQIgckie2qH6uxJu0YtJoaYNYaGCiqG16tSgQRMtKKqd30oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7CHgbE6A0%2B9GTpIyrcA7peZCEc4Yb7iI8b19l%2B1e34KLrsoE%2FrwmpQxbSTMRb9B8IRR2b2%2Fku6EYVTSdWrB3ltX%2FDyPYEMrTX73Y7Iz55hAspUBjxj%2F1xV1DF%2BJ0MpXWURVQuUE1spNC65Varx4o2m4HxnpQzq%2FJi%2BoAwDpzBddsmT6z87fNS5dzC%2FbJpkAKqwdAD0owpQWdrGsu7j%2FJw21UDc531G3wUXAerRC4YUzk4lxQd%2Fpk7I0aguPLdYgHTfRYRt%2FIX%2FwcoyB5tVG47ckmU2BM0i%2BePKsbsJlk%2BGzfWNhMrUjKWOZU%2BmeRDXrhhskoFgTbdinXPW1GeJ%2F%2BovirLiyeRT%2BZLn0UoZgc9wHaUbNYh%2FqEJAIceQqK5uVpGTGx9b0NWOGHb2C%2Bd964uJrrTScBrhCnmiQX%2Bh6mc%2Bp0LLKvy0rfojSAYfJwdVVg7HUgTMFz1Cd%2FrOQulJ2fZp9kEUbfuxH2JdWBE8i6mtkMy9EoXOQuSk8cy%2BsriZbxANu%2B5k2PALX6B2HKwETQiWlsViQUhSHlOuCnaGXPKkoq1lGZSrKa68vsUHN8m2jks9gtjvLo6KpgjLvppWhgZuwvrRsLom5jpuwQ%2BBXrzP%2Bqs%2FoAZa%2FNBpxp9lZJkr%2BkVgfNTIUN8psaSkMNTg7b8GOqUBlZz%2F%2Bki7aC4AA2f5yjk0zZ5%2FMhcmG0m8HP9wRSn41ELsj1jKX%2FDbbGJvfVrWejF5auFsg9cpYqeBwjjDkW0x0T5GCP7dkTBysBV4T4Lh%2B16YMQ0NstyDsTe%2B5TZG1IHe5iiDKv6RfkWaZ7aCk3KV%2FWcDPMiYb1%2BFQXJcDkUz4ThxxeAT%2FctwvwbBdG%2FZ4yB%2FU7if2xOIeZonEBHSyqPNJpSdqkc3&X-Amz-Signature=87bcf17575e106a3db553be658f466f1601c92fa3034e08af79840c4b9e2eb47&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UTIE5R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLK6ySedYEg09JUpU7JWPDa5GEg0AFLvAhB%2B8eU4l%2FWQIgckie2qH6uxJu0YtJoaYNYaGCiqG16tSgQRMtKKqd30oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7CHgbE6A0%2B9GTpIyrcA7peZCEc4Yb7iI8b19l%2B1e34KLrsoE%2FrwmpQxbSTMRb9B8IRR2b2%2Fku6EYVTSdWrB3ltX%2FDyPYEMrTX73Y7Iz55hAspUBjxj%2F1xV1DF%2BJ0MpXWURVQuUE1spNC65Varx4o2m4HxnpQzq%2FJi%2BoAwDpzBddsmT6z87fNS5dzC%2FbJpkAKqwdAD0owpQWdrGsu7j%2FJw21UDc531G3wUXAerRC4YUzk4lxQd%2Fpk7I0aguPLdYgHTfRYRt%2FIX%2FwcoyB5tVG47ckmU2BM0i%2BePKsbsJlk%2BGzfWNhMrUjKWOZU%2BmeRDXrhhskoFgTbdinXPW1GeJ%2F%2BovirLiyeRT%2BZLn0UoZgc9wHaUbNYh%2FqEJAIceQqK5uVpGTGx9b0NWOGHb2C%2Bd964uJrrTScBrhCnmiQX%2Bh6mc%2Bp0LLKvy0rfojSAYfJwdVVg7HUgTMFz1Cd%2FrOQulJ2fZp9kEUbfuxH2JdWBE8i6mtkMy9EoXOQuSk8cy%2BsriZbxANu%2B5k2PALX6B2HKwETQiWlsViQUhSHlOuCnaGXPKkoq1lGZSrKa68vsUHN8m2jks9gtjvLo6KpgjLvppWhgZuwvrRsLom5jpuwQ%2BBXrzP%2Bqs%2FoAZa%2FNBpxp9lZJkr%2BkVgfNTIUN8psaSkMNTg7b8GOqUBlZz%2F%2Bki7aC4AA2f5yjk0zZ5%2FMhcmG0m8HP9wRSn41ELsj1jKX%2FDbbGJvfVrWejF5auFsg9cpYqeBwjjDkW0x0T5GCP7dkTBysBV4T4Lh%2B16YMQ0NstyDsTe%2B5TZG1IHe5iiDKv6RfkWaZ7aCk3KV%2FWcDPMiYb1%2BFQXJcDkUz4ThxxeAT%2FctwvwbBdG%2FZ4yB%2FU7if2xOIeZonEBHSyqPNJpSdqkc3&X-Amz-Signature=99c7349057e771c90c0bc0c3981656089e5a66397f768afb9617b7b1d68605f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UTIE5R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLK6ySedYEg09JUpU7JWPDa5GEg0AFLvAhB%2B8eU4l%2FWQIgckie2qH6uxJu0YtJoaYNYaGCiqG16tSgQRMtKKqd30oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7CHgbE6A0%2B9GTpIyrcA7peZCEc4Yb7iI8b19l%2B1e34KLrsoE%2FrwmpQxbSTMRb9B8IRR2b2%2Fku6EYVTSdWrB3ltX%2FDyPYEMrTX73Y7Iz55hAspUBjxj%2F1xV1DF%2BJ0MpXWURVQuUE1spNC65Varx4o2m4HxnpQzq%2FJi%2BoAwDpzBddsmT6z87fNS5dzC%2FbJpkAKqwdAD0owpQWdrGsu7j%2FJw21UDc531G3wUXAerRC4YUzk4lxQd%2Fpk7I0aguPLdYgHTfRYRt%2FIX%2FwcoyB5tVG47ckmU2BM0i%2BePKsbsJlk%2BGzfWNhMrUjKWOZU%2BmeRDXrhhskoFgTbdinXPW1GeJ%2F%2BovirLiyeRT%2BZLn0UoZgc9wHaUbNYh%2FqEJAIceQqK5uVpGTGx9b0NWOGHb2C%2Bd964uJrrTScBrhCnmiQX%2Bh6mc%2Bp0LLKvy0rfojSAYfJwdVVg7HUgTMFz1Cd%2FrOQulJ2fZp9kEUbfuxH2JdWBE8i6mtkMy9EoXOQuSk8cy%2BsriZbxANu%2B5k2PALX6B2HKwETQiWlsViQUhSHlOuCnaGXPKkoq1lGZSrKa68vsUHN8m2jks9gtjvLo6KpgjLvppWhgZuwvrRsLom5jpuwQ%2BBXrzP%2Bqs%2FoAZa%2FNBpxp9lZJkr%2BkVgfNTIUN8psaSkMNTg7b8GOqUBlZz%2F%2Bki7aC4AA2f5yjk0zZ5%2FMhcmG0m8HP9wRSn41ELsj1jKX%2FDbbGJvfVrWejF5auFsg9cpYqeBwjjDkW0x0T5GCP7dkTBysBV4T4Lh%2B16YMQ0NstyDsTe%2B5TZG1IHe5iiDKv6RfkWaZ7aCk3KV%2FWcDPMiYb1%2BFQXJcDkUz4ThxxeAT%2FctwvwbBdG%2FZ4yB%2FU7if2xOIeZonEBHSyqPNJpSdqkc3&X-Amz-Signature=40e6843dccaacc408fbe812d28a231327eea73479066329fb28b79a189422499&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UTIE5R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLK6ySedYEg09JUpU7JWPDa5GEg0AFLvAhB%2B8eU4l%2FWQIgckie2qH6uxJu0YtJoaYNYaGCiqG16tSgQRMtKKqd30oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7CHgbE6A0%2B9GTpIyrcA7peZCEc4Yb7iI8b19l%2B1e34KLrsoE%2FrwmpQxbSTMRb9B8IRR2b2%2Fku6EYVTSdWrB3ltX%2FDyPYEMrTX73Y7Iz55hAspUBjxj%2F1xV1DF%2BJ0MpXWURVQuUE1spNC65Varx4o2m4HxnpQzq%2FJi%2BoAwDpzBddsmT6z87fNS5dzC%2FbJpkAKqwdAD0owpQWdrGsu7j%2FJw21UDc531G3wUXAerRC4YUzk4lxQd%2Fpk7I0aguPLdYgHTfRYRt%2FIX%2FwcoyB5tVG47ckmU2BM0i%2BePKsbsJlk%2BGzfWNhMrUjKWOZU%2BmeRDXrhhskoFgTbdinXPW1GeJ%2F%2BovirLiyeRT%2BZLn0UoZgc9wHaUbNYh%2FqEJAIceQqK5uVpGTGx9b0NWOGHb2C%2Bd964uJrrTScBrhCnmiQX%2Bh6mc%2Bp0LLKvy0rfojSAYfJwdVVg7HUgTMFz1Cd%2FrOQulJ2fZp9kEUbfuxH2JdWBE8i6mtkMy9EoXOQuSk8cy%2BsriZbxANu%2B5k2PALX6B2HKwETQiWlsViQUhSHlOuCnaGXPKkoq1lGZSrKa68vsUHN8m2jks9gtjvLo6KpgjLvppWhgZuwvrRsLom5jpuwQ%2BBXrzP%2Bqs%2FoAZa%2FNBpxp9lZJkr%2BkVgfNTIUN8psaSkMNTg7b8GOqUBlZz%2F%2Bki7aC4AA2f5yjk0zZ5%2FMhcmG0m8HP9wRSn41ELsj1jKX%2FDbbGJvfVrWejF5auFsg9cpYqeBwjjDkW0x0T5GCP7dkTBysBV4T4Lh%2B16YMQ0NstyDsTe%2B5TZG1IHe5iiDKv6RfkWaZ7aCk3KV%2FWcDPMiYb1%2BFQXJcDkUz4ThxxeAT%2FctwvwbBdG%2FZ4yB%2FU7if2xOIeZonEBHSyqPNJpSdqkc3&X-Amz-Signature=faef7a2b7fb871d9fa86d28e1a9b7783b7ddfdcfeddd86cb50a2bb0bd6a368b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UTIE5R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCLK6ySedYEg09JUpU7JWPDa5GEg0AFLvAhB%2B8eU4l%2FWQIgckie2qH6uxJu0YtJoaYNYaGCiqG16tSgQRMtKKqd30oqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7CHgbE6A0%2B9GTpIyrcA7peZCEc4Yb7iI8b19l%2B1e34KLrsoE%2FrwmpQxbSTMRb9B8IRR2b2%2Fku6EYVTSdWrB3ltX%2FDyPYEMrTX73Y7Iz55hAspUBjxj%2F1xV1DF%2BJ0MpXWURVQuUE1spNC65Varx4o2m4HxnpQzq%2FJi%2BoAwDpzBddsmT6z87fNS5dzC%2FbJpkAKqwdAD0owpQWdrGsu7j%2FJw21UDc531G3wUXAerRC4YUzk4lxQd%2Fpk7I0aguPLdYgHTfRYRt%2FIX%2FwcoyB5tVG47ckmU2BM0i%2BePKsbsJlk%2BGzfWNhMrUjKWOZU%2BmeRDXrhhskoFgTbdinXPW1GeJ%2F%2BovirLiyeRT%2BZLn0UoZgc9wHaUbNYh%2FqEJAIceQqK5uVpGTGx9b0NWOGHb2C%2Bd964uJrrTScBrhCnmiQX%2Bh6mc%2Bp0LLKvy0rfojSAYfJwdVVg7HUgTMFz1Cd%2FrOQulJ2fZp9kEUbfuxH2JdWBE8i6mtkMy9EoXOQuSk8cy%2BsriZbxANu%2B5k2PALX6B2HKwETQiWlsViQUhSHlOuCnaGXPKkoq1lGZSrKa68vsUHN8m2jks9gtjvLo6KpgjLvppWhgZuwvrRsLom5jpuwQ%2BBXrzP%2Bqs%2FoAZa%2FNBpxp9lZJkr%2BkVgfNTIUN8psaSkMNTg7b8GOqUBlZz%2F%2Bki7aC4AA2f5yjk0zZ5%2FMhcmG0m8HP9wRSn41ELsj1jKX%2FDbbGJvfVrWejF5auFsg9cpYqeBwjjDkW0x0T5GCP7dkTBysBV4T4Lh%2B16YMQ0NstyDsTe%2B5TZG1IHe5iiDKv6RfkWaZ7aCk3KV%2FWcDPMiYb1%2BFQXJcDkUz4ThxxeAT%2FctwvwbBdG%2FZ4yB%2FU7if2xOIeZonEBHSyqPNJpSdqkc3&X-Amz-Signature=bfacece5328dd0c927cf1891b6c9508ae80b6c3d74d1dfe506be204494cc0473&X-Amz-SignedHeaders=host&x-id=GetObject)
