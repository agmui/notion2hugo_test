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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWU6DIX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHUHT1%2FsXScz8TCJQBVOJ0JCYCXyccbS4NaBzdNLRcxAIhAMhcoEsVCyk4zuerEjGMYkrRb%2FMSwpf2L1PbUuOPrOq1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyC%2FJ40fbzzOGoK9D8q3AMKzIriAnsNXTnpi6bDyL2QCpJA8HLi029GJ%2BZmdtKHWxAKtKeBXckm6GwfA00IqYNZwi5GwsuSWS%2F2%2FSWrpm8Ws3zO%2F2NtTYQyiwuXzzBxWEV0Bn21Yse3mRZikrOOuudUkrZOm9HUnxOzmY2%2BdnG%2F%2B8eIY8X%2FQAb%2Ft6k%2F1j8208yk9lnZlyj7uJfmgRWKmgPrZcEuzyrfQqgubh1NetzPIjihAtkKCOGDqfFRSt6hzWEqPR9dw69ZX1cvBGMJo2X6gmHpONy%2FVU%2FBo3Kq5f4%2FdX%2Fbjcn4rCO0xdpbNTiSrhUQleKouJVUSgSNL0EMUHARbYAYyymY7T5k%2FkrktarxqhR6X%2B3EqlWqAz1m1%2BCSOeF%2F7gHdlHaxaRnsSSLsWIaJr8nAOUiF272EV2M6cuDlfuBdaZbvOS8vohEJrWgYE6VlK9jJeC60Frb%2F%2Bbv95y66rLk0vLNHySgFAHLa7gLM%2BTFoOBcykDIOp45M0iIrFNO1Ow8wrX6zZTOK7TP6ZZCSF4ISR6wNIH7H7y9q%2BJq3GltgJgfV%2F6rbZBUKS305OIe6%2BZvi0eDqsZIBOtYTLZFe21XCSwgW4otM6UoYCYoY6Devx6f%2BhMHENJ3sSxZcrA5WTpTIXM14li7LWzCcwvS9BjqkAS9ozcGctKdTZRmVrlv4W0IPXW8pyt8ygbavBYpbqnFxl%2BLVrTWLZmZWdNGExtOAXi%2BccYr396JHhO9cutm3oAN24Ce%2FnfQXq%2FlAxFykjtT8b0edRiYqYZqW0VFSc3JpXMQ04VKzEwAVT2cKcw1H7xb1erMlUDJWOhzM1BwHhPeEFxfWATdEw3jAnpqHuCuVmKPJ0bR%2BuaJr1DYn8bTaS7U4rD51&X-Amz-Signature=517851d0c23504feece7ae8af83a8f6160a13f34107ee2a5c5231bbc9cbcf2c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWU6DIX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHUHT1%2FsXScz8TCJQBVOJ0JCYCXyccbS4NaBzdNLRcxAIhAMhcoEsVCyk4zuerEjGMYkrRb%2FMSwpf2L1PbUuOPrOq1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyC%2FJ40fbzzOGoK9D8q3AMKzIriAnsNXTnpi6bDyL2QCpJA8HLi029GJ%2BZmdtKHWxAKtKeBXckm6GwfA00IqYNZwi5GwsuSWS%2F2%2FSWrpm8Ws3zO%2F2NtTYQyiwuXzzBxWEV0Bn21Yse3mRZikrOOuudUkrZOm9HUnxOzmY2%2BdnG%2F%2B8eIY8X%2FQAb%2Ft6k%2F1j8208yk9lnZlyj7uJfmgRWKmgPrZcEuzyrfQqgubh1NetzPIjihAtkKCOGDqfFRSt6hzWEqPR9dw69ZX1cvBGMJo2X6gmHpONy%2FVU%2FBo3Kq5f4%2FdX%2Fbjcn4rCO0xdpbNTiSrhUQleKouJVUSgSNL0EMUHARbYAYyymY7T5k%2FkrktarxqhR6X%2B3EqlWqAz1m1%2BCSOeF%2F7gHdlHaxaRnsSSLsWIaJr8nAOUiF272EV2M6cuDlfuBdaZbvOS8vohEJrWgYE6VlK9jJeC60Frb%2F%2Bbv95y66rLk0vLNHySgFAHLa7gLM%2BTFoOBcykDIOp45M0iIrFNO1Ow8wrX6zZTOK7TP6ZZCSF4ISR6wNIH7H7y9q%2BJq3GltgJgfV%2F6rbZBUKS305OIe6%2BZvi0eDqsZIBOtYTLZFe21XCSwgW4otM6UoYCYoY6Devx6f%2BhMHENJ3sSxZcrA5WTpTIXM14li7LWzCcwvS9BjqkAS9ozcGctKdTZRmVrlv4W0IPXW8pyt8ygbavBYpbqnFxl%2BLVrTWLZmZWdNGExtOAXi%2BccYr396JHhO9cutm3oAN24Ce%2FnfQXq%2FlAxFykjtT8b0edRiYqYZqW0VFSc3JpXMQ04VKzEwAVT2cKcw1H7xb1erMlUDJWOhzM1BwHhPeEFxfWATdEw3jAnpqHuCuVmKPJ0bR%2BuaJr1DYn8bTaS7U4rD51&X-Amz-Signature=322f1ee2d5ff6ed7adde70c93696eb1d77eb96a9bc887f79a763353de22ca574&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWU6DIX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHUHT1%2FsXScz8TCJQBVOJ0JCYCXyccbS4NaBzdNLRcxAIhAMhcoEsVCyk4zuerEjGMYkrRb%2FMSwpf2L1PbUuOPrOq1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyC%2FJ40fbzzOGoK9D8q3AMKzIriAnsNXTnpi6bDyL2QCpJA8HLi029GJ%2BZmdtKHWxAKtKeBXckm6GwfA00IqYNZwi5GwsuSWS%2F2%2FSWrpm8Ws3zO%2F2NtTYQyiwuXzzBxWEV0Bn21Yse3mRZikrOOuudUkrZOm9HUnxOzmY2%2BdnG%2F%2B8eIY8X%2FQAb%2Ft6k%2F1j8208yk9lnZlyj7uJfmgRWKmgPrZcEuzyrfQqgubh1NetzPIjihAtkKCOGDqfFRSt6hzWEqPR9dw69ZX1cvBGMJo2X6gmHpONy%2FVU%2FBo3Kq5f4%2FdX%2Fbjcn4rCO0xdpbNTiSrhUQleKouJVUSgSNL0EMUHARbYAYyymY7T5k%2FkrktarxqhR6X%2B3EqlWqAz1m1%2BCSOeF%2F7gHdlHaxaRnsSSLsWIaJr8nAOUiF272EV2M6cuDlfuBdaZbvOS8vohEJrWgYE6VlK9jJeC60Frb%2F%2Bbv95y66rLk0vLNHySgFAHLa7gLM%2BTFoOBcykDIOp45M0iIrFNO1Ow8wrX6zZTOK7TP6ZZCSF4ISR6wNIH7H7y9q%2BJq3GltgJgfV%2F6rbZBUKS305OIe6%2BZvi0eDqsZIBOtYTLZFe21XCSwgW4otM6UoYCYoY6Devx6f%2BhMHENJ3sSxZcrA5WTpTIXM14li7LWzCcwvS9BjqkAS9ozcGctKdTZRmVrlv4W0IPXW8pyt8ygbavBYpbqnFxl%2BLVrTWLZmZWdNGExtOAXi%2BccYr396JHhO9cutm3oAN24Ce%2FnfQXq%2FlAxFykjtT8b0edRiYqYZqW0VFSc3JpXMQ04VKzEwAVT2cKcw1H7xb1erMlUDJWOhzM1BwHhPeEFxfWATdEw3jAnpqHuCuVmKPJ0bR%2BuaJr1DYn8bTaS7U4rD51&X-Amz-Signature=684aac6e0466ceb7abf00226a67bb927208dcd0600fe23a68f9cb8597fd6cfb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWU6DIX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHUHT1%2FsXScz8TCJQBVOJ0JCYCXyccbS4NaBzdNLRcxAIhAMhcoEsVCyk4zuerEjGMYkrRb%2FMSwpf2L1PbUuOPrOq1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyC%2FJ40fbzzOGoK9D8q3AMKzIriAnsNXTnpi6bDyL2QCpJA8HLi029GJ%2BZmdtKHWxAKtKeBXckm6GwfA00IqYNZwi5GwsuSWS%2F2%2FSWrpm8Ws3zO%2F2NtTYQyiwuXzzBxWEV0Bn21Yse3mRZikrOOuudUkrZOm9HUnxOzmY2%2BdnG%2F%2B8eIY8X%2FQAb%2Ft6k%2F1j8208yk9lnZlyj7uJfmgRWKmgPrZcEuzyrfQqgubh1NetzPIjihAtkKCOGDqfFRSt6hzWEqPR9dw69ZX1cvBGMJo2X6gmHpONy%2FVU%2FBo3Kq5f4%2FdX%2Fbjcn4rCO0xdpbNTiSrhUQleKouJVUSgSNL0EMUHARbYAYyymY7T5k%2FkrktarxqhR6X%2B3EqlWqAz1m1%2BCSOeF%2F7gHdlHaxaRnsSSLsWIaJr8nAOUiF272EV2M6cuDlfuBdaZbvOS8vohEJrWgYE6VlK9jJeC60Frb%2F%2Bbv95y66rLk0vLNHySgFAHLa7gLM%2BTFoOBcykDIOp45M0iIrFNO1Ow8wrX6zZTOK7TP6ZZCSF4ISR6wNIH7H7y9q%2BJq3GltgJgfV%2F6rbZBUKS305OIe6%2BZvi0eDqsZIBOtYTLZFe21XCSwgW4otM6UoYCYoY6Devx6f%2BhMHENJ3sSxZcrA5WTpTIXM14li7LWzCcwvS9BjqkAS9ozcGctKdTZRmVrlv4W0IPXW8pyt8ygbavBYpbqnFxl%2BLVrTWLZmZWdNGExtOAXi%2BccYr396JHhO9cutm3oAN24Ce%2FnfQXq%2FlAxFykjtT8b0edRiYqYZqW0VFSc3JpXMQ04VKzEwAVT2cKcw1H7xb1erMlUDJWOhzM1BwHhPeEFxfWATdEw3jAnpqHuCuVmKPJ0bR%2BuaJr1DYn8bTaS7U4rD51&X-Amz-Signature=2da4c21acf74b1f733acd92abe28c9c4e00246f179378085f44922f8d811bd2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWU6DIX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHUHT1%2FsXScz8TCJQBVOJ0JCYCXyccbS4NaBzdNLRcxAIhAMhcoEsVCyk4zuerEjGMYkrRb%2FMSwpf2L1PbUuOPrOq1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyC%2FJ40fbzzOGoK9D8q3AMKzIriAnsNXTnpi6bDyL2QCpJA8HLi029GJ%2BZmdtKHWxAKtKeBXckm6GwfA00IqYNZwi5GwsuSWS%2F2%2FSWrpm8Ws3zO%2F2NtTYQyiwuXzzBxWEV0Bn21Yse3mRZikrOOuudUkrZOm9HUnxOzmY2%2BdnG%2F%2B8eIY8X%2FQAb%2Ft6k%2F1j8208yk9lnZlyj7uJfmgRWKmgPrZcEuzyrfQqgubh1NetzPIjihAtkKCOGDqfFRSt6hzWEqPR9dw69ZX1cvBGMJo2X6gmHpONy%2FVU%2FBo3Kq5f4%2FdX%2Fbjcn4rCO0xdpbNTiSrhUQleKouJVUSgSNL0EMUHARbYAYyymY7T5k%2FkrktarxqhR6X%2B3EqlWqAz1m1%2BCSOeF%2F7gHdlHaxaRnsSSLsWIaJr8nAOUiF272EV2M6cuDlfuBdaZbvOS8vohEJrWgYE6VlK9jJeC60Frb%2F%2Bbv95y66rLk0vLNHySgFAHLa7gLM%2BTFoOBcykDIOp45M0iIrFNO1Ow8wrX6zZTOK7TP6ZZCSF4ISR6wNIH7H7y9q%2BJq3GltgJgfV%2F6rbZBUKS305OIe6%2BZvi0eDqsZIBOtYTLZFe21XCSwgW4otM6UoYCYoY6Devx6f%2BhMHENJ3sSxZcrA5WTpTIXM14li7LWzCcwvS9BjqkAS9ozcGctKdTZRmVrlv4W0IPXW8pyt8ygbavBYpbqnFxl%2BLVrTWLZmZWdNGExtOAXi%2BccYr396JHhO9cutm3oAN24Ce%2FnfQXq%2FlAxFykjtT8b0edRiYqYZqW0VFSc3JpXMQ04VKzEwAVT2cKcw1H7xb1erMlUDJWOhzM1BwHhPeEFxfWATdEw3jAnpqHuCuVmKPJ0bR%2BuaJr1DYn8bTaS7U4rD51&X-Amz-Signature=037715c4a8d976a231ece283287ee421bd334ecbd9218b57a6ba4c70a4ae01b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RWU6DIX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCHUHT1%2FsXScz8TCJQBVOJ0JCYCXyccbS4NaBzdNLRcxAIhAMhcoEsVCyk4zuerEjGMYkrRb%2FMSwpf2L1PbUuOPrOq1Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyC%2FJ40fbzzOGoK9D8q3AMKzIriAnsNXTnpi6bDyL2QCpJA8HLi029GJ%2BZmdtKHWxAKtKeBXckm6GwfA00IqYNZwi5GwsuSWS%2F2%2FSWrpm8Ws3zO%2F2NtTYQyiwuXzzBxWEV0Bn21Yse3mRZikrOOuudUkrZOm9HUnxOzmY2%2BdnG%2F%2B8eIY8X%2FQAb%2Ft6k%2F1j8208yk9lnZlyj7uJfmgRWKmgPrZcEuzyrfQqgubh1NetzPIjihAtkKCOGDqfFRSt6hzWEqPR9dw69ZX1cvBGMJo2X6gmHpONy%2FVU%2FBo3Kq5f4%2FdX%2Fbjcn4rCO0xdpbNTiSrhUQleKouJVUSgSNL0EMUHARbYAYyymY7T5k%2FkrktarxqhR6X%2B3EqlWqAz1m1%2BCSOeF%2F7gHdlHaxaRnsSSLsWIaJr8nAOUiF272EV2M6cuDlfuBdaZbvOS8vohEJrWgYE6VlK9jJeC60Frb%2F%2Bbv95y66rLk0vLNHySgFAHLa7gLM%2BTFoOBcykDIOp45M0iIrFNO1Ow8wrX6zZTOK7TP6ZZCSF4ISR6wNIH7H7y9q%2BJq3GltgJgfV%2F6rbZBUKS305OIe6%2BZvi0eDqsZIBOtYTLZFe21XCSwgW4otM6UoYCYoY6Devx6f%2BhMHENJ3sSxZcrA5WTpTIXM14li7LWzCcwvS9BjqkAS9ozcGctKdTZRmVrlv4W0IPXW8pyt8ygbavBYpbqnFxl%2BLVrTWLZmZWdNGExtOAXi%2BccYr396JHhO9cutm3oAN24Ce%2FnfQXq%2FlAxFykjtT8b0edRiYqYZqW0VFSc3JpXMQ04VKzEwAVT2cKcw1H7xb1erMlUDJWOhzM1BwHhPeEFxfWATdEw3jAnpqHuCuVmKPJ0bR%2BuaJr1DYn8bTaS7U4rD51&X-Amz-Signature=d14a7db6312e9600acf41d0a318acab9bbeb5fb353f89826ac388c689e7e60fe&X-Amz-SignedHeaders=host&x-id=GetObject)
