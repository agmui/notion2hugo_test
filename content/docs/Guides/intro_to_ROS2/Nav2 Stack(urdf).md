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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4R7AQC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICScsxHfyB0KqFs%2BEk0GzkvT11Xs8aPnyzgMEJ59oQQ6AiEA5B4S2%2BrjP%2BWWfNfGsb7zR9BlFgU6e7rGabE1JFLzwHkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVju%2FTyJpVa7pfWRircAxNisGJOhHQ5b5mNFQHm3OVUuhWJ9lctaQ6l1UOwgDmCjogiBGMIA3lHkUVV3elBlgOQPjyAXA0skmyyzOGXaGpEpIikxGBtXbpqj3N8vJSjYSsjHL48OHC0Pb70ME8wovWWH4Y0gNvOyMATdAj9iFOsu403hlzJImKNQI%2B3LHwZuPDX5C39LqtLU3CWBUcy4Qg6YEb5YPRDOotowxdSCyv6D7w2fPW06wQynsa0zJUXPQeIvj1WvrdynGbNDT8fJMZhMD1RdYzbGGxNbM6TBbMqgDudXrmGTe5BaUHCxzxaGpT%2BjdVLiKqxQALrpYSELBP2rrpnSUO0qGgSfyBAcEKp5zGZhlQgm%2FV2ZEANaOuj3LrTdY7JmZcD6ItKho2cumv9pa6nbD9J6H15EymxhtxPGjfgNUlrra7SAVJbwi4KiXB9j06FmBSsxPnTgIwuFM%2FGoaicK59sWjkdfMoplN863tpPtXIjaAfRQ6ivu2VFNOqwqSCqU%2FSe5BTC7uxsowY9r32YKFMHiSblPDNFj9hJdG21CydX1SsCnoZ1CtNxkZW0kHEV3xDmacQjcvQxcUES8n7BP8KQMWd4Y9aI6aG0PXbjuRkedN5A6UhXxkKIGXXOKaxb%2FAgf4Y9VMLWCvb8GOqUBudz%2B0h%2FQKV5uCZO9xKpEeEDzVST7kdw3irTECG08WD9yO%2FAonSE8XyHO%2Bip7wY3meuCvZsDbWBBIH2Q4upElYeq3rCBioaZ7DjpG1yj7RB1b24Zt%2BzaIs7OpkhUCN3k93yQbKKMajWBqApgobukvdXB6jujS4o34zrGGo807mEmUpSS4Yb8Tc4arl8s%2BZzJgx%2FcMN070d01FTeZmqzC%2FhSBy%2BNFk&X-Amz-Signature=668d984cb6bf6e59664107fc178c15a2b98af781773a8f0aa80356cbdd1e0641&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4R7AQC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICScsxHfyB0KqFs%2BEk0GzkvT11Xs8aPnyzgMEJ59oQQ6AiEA5B4S2%2BrjP%2BWWfNfGsb7zR9BlFgU6e7rGabE1JFLzwHkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVju%2FTyJpVa7pfWRircAxNisGJOhHQ5b5mNFQHm3OVUuhWJ9lctaQ6l1UOwgDmCjogiBGMIA3lHkUVV3elBlgOQPjyAXA0skmyyzOGXaGpEpIikxGBtXbpqj3N8vJSjYSsjHL48OHC0Pb70ME8wovWWH4Y0gNvOyMATdAj9iFOsu403hlzJImKNQI%2B3LHwZuPDX5C39LqtLU3CWBUcy4Qg6YEb5YPRDOotowxdSCyv6D7w2fPW06wQynsa0zJUXPQeIvj1WvrdynGbNDT8fJMZhMD1RdYzbGGxNbM6TBbMqgDudXrmGTe5BaUHCxzxaGpT%2BjdVLiKqxQALrpYSELBP2rrpnSUO0qGgSfyBAcEKp5zGZhlQgm%2FV2ZEANaOuj3LrTdY7JmZcD6ItKho2cumv9pa6nbD9J6H15EymxhtxPGjfgNUlrra7SAVJbwi4KiXB9j06FmBSsxPnTgIwuFM%2FGoaicK59sWjkdfMoplN863tpPtXIjaAfRQ6ivu2VFNOqwqSCqU%2FSe5BTC7uxsowY9r32YKFMHiSblPDNFj9hJdG21CydX1SsCnoZ1CtNxkZW0kHEV3xDmacQjcvQxcUES8n7BP8KQMWd4Y9aI6aG0PXbjuRkedN5A6UhXxkKIGXXOKaxb%2FAgf4Y9VMLWCvb8GOqUBudz%2B0h%2FQKV5uCZO9xKpEeEDzVST7kdw3irTECG08WD9yO%2FAonSE8XyHO%2Bip7wY3meuCvZsDbWBBIH2Q4upElYeq3rCBioaZ7DjpG1yj7RB1b24Zt%2BzaIs7OpkhUCN3k93yQbKKMajWBqApgobukvdXB6jujS4o34zrGGo807mEmUpSS4Yb8Tc4arl8s%2BZzJgx%2FcMN070d01FTeZmqzC%2FhSBy%2BNFk&X-Amz-Signature=c36617229d6fe9fa92fd1bdd25a4f780fc9f8f9a4d4440f91b139eed6940b171&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4R7AQC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICScsxHfyB0KqFs%2BEk0GzkvT11Xs8aPnyzgMEJ59oQQ6AiEA5B4S2%2BrjP%2BWWfNfGsb7zR9BlFgU6e7rGabE1JFLzwHkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVju%2FTyJpVa7pfWRircAxNisGJOhHQ5b5mNFQHm3OVUuhWJ9lctaQ6l1UOwgDmCjogiBGMIA3lHkUVV3elBlgOQPjyAXA0skmyyzOGXaGpEpIikxGBtXbpqj3N8vJSjYSsjHL48OHC0Pb70ME8wovWWH4Y0gNvOyMATdAj9iFOsu403hlzJImKNQI%2B3LHwZuPDX5C39LqtLU3CWBUcy4Qg6YEb5YPRDOotowxdSCyv6D7w2fPW06wQynsa0zJUXPQeIvj1WvrdynGbNDT8fJMZhMD1RdYzbGGxNbM6TBbMqgDudXrmGTe5BaUHCxzxaGpT%2BjdVLiKqxQALrpYSELBP2rrpnSUO0qGgSfyBAcEKp5zGZhlQgm%2FV2ZEANaOuj3LrTdY7JmZcD6ItKho2cumv9pa6nbD9J6H15EymxhtxPGjfgNUlrra7SAVJbwi4KiXB9j06FmBSsxPnTgIwuFM%2FGoaicK59sWjkdfMoplN863tpPtXIjaAfRQ6ivu2VFNOqwqSCqU%2FSe5BTC7uxsowY9r32YKFMHiSblPDNFj9hJdG21CydX1SsCnoZ1CtNxkZW0kHEV3xDmacQjcvQxcUES8n7BP8KQMWd4Y9aI6aG0PXbjuRkedN5A6UhXxkKIGXXOKaxb%2FAgf4Y9VMLWCvb8GOqUBudz%2B0h%2FQKV5uCZO9xKpEeEDzVST7kdw3irTECG08WD9yO%2FAonSE8XyHO%2Bip7wY3meuCvZsDbWBBIH2Q4upElYeq3rCBioaZ7DjpG1yj7RB1b24Zt%2BzaIs7OpkhUCN3k93yQbKKMajWBqApgobukvdXB6jujS4o34zrGGo807mEmUpSS4Yb8Tc4arl8s%2BZzJgx%2FcMN070d01FTeZmqzC%2FhSBy%2BNFk&X-Amz-Signature=801eec4fe8babe893fbeb2600dc1d7774cecb574567db5d8487f9b0bfad3b74b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4R7AQC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICScsxHfyB0KqFs%2BEk0GzkvT11Xs8aPnyzgMEJ59oQQ6AiEA5B4S2%2BrjP%2BWWfNfGsb7zR9BlFgU6e7rGabE1JFLzwHkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVju%2FTyJpVa7pfWRircAxNisGJOhHQ5b5mNFQHm3OVUuhWJ9lctaQ6l1UOwgDmCjogiBGMIA3lHkUVV3elBlgOQPjyAXA0skmyyzOGXaGpEpIikxGBtXbpqj3N8vJSjYSsjHL48OHC0Pb70ME8wovWWH4Y0gNvOyMATdAj9iFOsu403hlzJImKNQI%2B3LHwZuPDX5C39LqtLU3CWBUcy4Qg6YEb5YPRDOotowxdSCyv6D7w2fPW06wQynsa0zJUXPQeIvj1WvrdynGbNDT8fJMZhMD1RdYzbGGxNbM6TBbMqgDudXrmGTe5BaUHCxzxaGpT%2BjdVLiKqxQALrpYSELBP2rrpnSUO0qGgSfyBAcEKp5zGZhlQgm%2FV2ZEANaOuj3LrTdY7JmZcD6ItKho2cumv9pa6nbD9J6H15EymxhtxPGjfgNUlrra7SAVJbwi4KiXB9j06FmBSsxPnTgIwuFM%2FGoaicK59sWjkdfMoplN863tpPtXIjaAfRQ6ivu2VFNOqwqSCqU%2FSe5BTC7uxsowY9r32YKFMHiSblPDNFj9hJdG21CydX1SsCnoZ1CtNxkZW0kHEV3xDmacQjcvQxcUES8n7BP8KQMWd4Y9aI6aG0PXbjuRkedN5A6UhXxkKIGXXOKaxb%2FAgf4Y9VMLWCvb8GOqUBudz%2B0h%2FQKV5uCZO9xKpEeEDzVST7kdw3irTECG08WD9yO%2FAonSE8XyHO%2Bip7wY3meuCvZsDbWBBIH2Q4upElYeq3rCBioaZ7DjpG1yj7RB1b24Zt%2BzaIs7OpkhUCN3k93yQbKKMajWBqApgobukvdXB6jujS4o34zrGGo807mEmUpSS4Yb8Tc4arl8s%2BZzJgx%2FcMN070d01FTeZmqzC%2FhSBy%2BNFk&X-Amz-Signature=3a1d767d0f016efc1fc1dfe58a5df7aefe9afcc000ab615fc59488900be9ec72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4R7AQC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICScsxHfyB0KqFs%2BEk0GzkvT11Xs8aPnyzgMEJ59oQQ6AiEA5B4S2%2BrjP%2BWWfNfGsb7zR9BlFgU6e7rGabE1JFLzwHkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVju%2FTyJpVa7pfWRircAxNisGJOhHQ5b5mNFQHm3OVUuhWJ9lctaQ6l1UOwgDmCjogiBGMIA3lHkUVV3elBlgOQPjyAXA0skmyyzOGXaGpEpIikxGBtXbpqj3N8vJSjYSsjHL48OHC0Pb70ME8wovWWH4Y0gNvOyMATdAj9iFOsu403hlzJImKNQI%2B3LHwZuPDX5C39LqtLU3CWBUcy4Qg6YEb5YPRDOotowxdSCyv6D7w2fPW06wQynsa0zJUXPQeIvj1WvrdynGbNDT8fJMZhMD1RdYzbGGxNbM6TBbMqgDudXrmGTe5BaUHCxzxaGpT%2BjdVLiKqxQALrpYSELBP2rrpnSUO0qGgSfyBAcEKp5zGZhlQgm%2FV2ZEANaOuj3LrTdY7JmZcD6ItKho2cumv9pa6nbD9J6H15EymxhtxPGjfgNUlrra7SAVJbwi4KiXB9j06FmBSsxPnTgIwuFM%2FGoaicK59sWjkdfMoplN863tpPtXIjaAfRQ6ivu2VFNOqwqSCqU%2FSe5BTC7uxsowY9r32YKFMHiSblPDNFj9hJdG21CydX1SsCnoZ1CtNxkZW0kHEV3xDmacQjcvQxcUES8n7BP8KQMWd4Y9aI6aG0PXbjuRkedN5A6UhXxkKIGXXOKaxb%2FAgf4Y9VMLWCvb8GOqUBudz%2B0h%2FQKV5uCZO9xKpEeEDzVST7kdw3irTECG08WD9yO%2FAonSE8XyHO%2Bip7wY3meuCvZsDbWBBIH2Q4upElYeq3rCBioaZ7DjpG1yj7RB1b24Zt%2BzaIs7OpkhUCN3k93yQbKKMajWBqApgobukvdXB6jujS4o34zrGGo807mEmUpSS4Yb8Tc4arl8s%2BZzJgx%2FcMN070d01FTeZmqzC%2FhSBy%2BNFk&X-Amz-Signature=f14e861e1521ee0d7a4a3afc94e3431aabe64993fb011056762521ebc949cf94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4R7AQC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICScsxHfyB0KqFs%2BEk0GzkvT11Xs8aPnyzgMEJ59oQQ6AiEA5B4S2%2BrjP%2BWWfNfGsb7zR9BlFgU6e7rGabE1JFLzwHkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVju%2FTyJpVa7pfWRircAxNisGJOhHQ5b5mNFQHm3OVUuhWJ9lctaQ6l1UOwgDmCjogiBGMIA3lHkUVV3elBlgOQPjyAXA0skmyyzOGXaGpEpIikxGBtXbpqj3N8vJSjYSsjHL48OHC0Pb70ME8wovWWH4Y0gNvOyMATdAj9iFOsu403hlzJImKNQI%2B3LHwZuPDX5C39LqtLU3CWBUcy4Qg6YEb5YPRDOotowxdSCyv6D7w2fPW06wQynsa0zJUXPQeIvj1WvrdynGbNDT8fJMZhMD1RdYzbGGxNbM6TBbMqgDudXrmGTe5BaUHCxzxaGpT%2BjdVLiKqxQALrpYSELBP2rrpnSUO0qGgSfyBAcEKp5zGZhlQgm%2FV2ZEANaOuj3LrTdY7JmZcD6ItKho2cumv9pa6nbD9J6H15EymxhtxPGjfgNUlrra7SAVJbwi4KiXB9j06FmBSsxPnTgIwuFM%2FGoaicK59sWjkdfMoplN863tpPtXIjaAfRQ6ivu2VFNOqwqSCqU%2FSe5BTC7uxsowY9r32YKFMHiSblPDNFj9hJdG21CydX1SsCnoZ1CtNxkZW0kHEV3xDmacQjcvQxcUES8n7BP8KQMWd4Y9aI6aG0PXbjuRkedN5A6UhXxkKIGXXOKaxb%2FAgf4Y9VMLWCvb8GOqUBudz%2B0h%2FQKV5uCZO9xKpEeEDzVST7kdw3irTECG08WD9yO%2FAonSE8XyHO%2Bip7wY3meuCvZsDbWBBIH2Q4upElYeq3rCBioaZ7DjpG1yj7RB1b24Zt%2BzaIs7OpkhUCN3k93yQbKKMajWBqApgobukvdXB6jujS4o34zrGGo807mEmUpSS4Yb8Tc4arl8s%2BZzJgx%2FcMN070d01FTeZmqzC%2FhSBy%2BNFk&X-Amz-Signature=be0217bc03fe01d3352fe4d6542884d6ad0b14fad48ed990a41a73f353498133&X-Amz-SignedHeaders=host&x-id=GetObject)
