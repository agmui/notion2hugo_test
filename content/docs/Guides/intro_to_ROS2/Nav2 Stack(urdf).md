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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRRWYPM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbwG58ggIPcpD2yyvt6Ng8PKCqi6MuHbWiL7tGU1ZNrwIhAOXboWe1BpNhYkp5%2Fes2m4fgOFoDeM%2Fyiw13Eu7NII5xKv8DCDQQABoMNjM3NDIzMTgzODA1IgzJXrKNn32p2SaB%2BWkq3APDUs9oMO6d79PwcMO%2FkxlWwUPliSPB3%2FFbo%2B%2FSNrUmiuFJEJKke%2FOZOlxiafZkqs%2FKoP%2B8HYDkFYVrN2X1AY19SXu69zcyIchzMqXqWLXWWKeKhfEosh%2FMK%2FijRuqIWoVzW0pXAHKa6bekZ8Dx51UYTSiv2oCfFScNnsolID%2FNtjzmvZGC2FSk%2BzbXp8RwlQWACoy%2By7%2BbA%2Fbf4HQiWWVoHV5JSvTrKAh6yYD7bB8o4O%2FrTV5dmOXGetYfjQFgnOY8CmQCKd8V69vKkT8IhJo18cg2r2rzlDSQhvlRQWnh6pxdjQZCI6F8ljP0j%2FFesluZcSMEgNr9STGea%2Bnt8USyWQNJRgDsJRoMQmV0zF5vMsEu9vkFMiatpH91veFUUIfmdgmTs63Bn4AEVRFtphdt%2Bysz2dnuBhSQXBHkewdNNVLJaLGXQcTFJvBEBUR2u1lPmkEf8Gkq9ZU0PkljIlxnrMHbjQ%2Fe012%2FpXTYQ5G4b5a%2BnOdfTkDyHjpC4Q0yY2E7tbfeyEH%2BBgFLt568xSM3SucyLSHpeWDSt6yA6khdpa%2B%2F%2FOE0J9JByP8gswbZ56Vye%2BJ3rBbxCOl4AfHu54cBeHOu5FzaeQ9tGfyMxbq8xzmMcRiIm9d8uGnclDDbrYLCBjqkAf2T1nchmdwAytYdHKfDPLtB%2Bug5lPQ1SQPZFxb3nMykd3fHMP526%2BP%2Fq3I2rs9K6fpA%2BCQnFouhXr3LQOAIBXPAn1f1ofSZ0idu2dfxnl1xjwXJZKVzodK3rCjpj0fDdyZbfhZND75FrOTdzI7XRqldC0KTAkdTKZlPHmdt8rl%2BHix%2BWq%2FItcPl1QXKy5xU0SeRhD56o%2FIdFSrb8NpnMDiYirUN&X-Amz-Signature=f323f3643a9154bc9795b4c43aa90184cbc58140f9867ce16b30c284445c85ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRRWYPM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbwG58ggIPcpD2yyvt6Ng8PKCqi6MuHbWiL7tGU1ZNrwIhAOXboWe1BpNhYkp5%2Fes2m4fgOFoDeM%2Fyiw13Eu7NII5xKv8DCDQQABoMNjM3NDIzMTgzODA1IgzJXrKNn32p2SaB%2BWkq3APDUs9oMO6d79PwcMO%2FkxlWwUPliSPB3%2FFbo%2B%2FSNrUmiuFJEJKke%2FOZOlxiafZkqs%2FKoP%2B8HYDkFYVrN2X1AY19SXu69zcyIchzMqXqWLXWWKeKhfEosh%2FMK%2FijRuqIWoVzW0pXAHKa6bekZ8Dx51UYTSiv2oCfFScNnsolID%2FNtjzmvZGC2FSk%2BzbXp8RwlQWACoy%2By7%2BbA%2Fbf4HQiWWVoHV5JSvTrKAh6yYD7bB8o4O%2FrTV5dmOXGetYfjQFgnOY8CmQCKd8V69vKkT8IhJo18cg2r2rzlDSQhvlRQWnh6pxdjQZCI6F8ljP0j%2FFesluZcSMEgNr9STGea%2Bnt8USyWQNJRgDsJRoMQmV0zF5vMsEu9vkFMiatpH91veFUUIfmdgmTs63Bn4AEVRFtphdt%2Bysz2dnuBhSQXBHkewdNNVLJaLGXQcTFJvBEBUR2u1lPmkEf8Gkq9ZU0PkljIlxnrMHbjQ%2Fe012%2FpXTYQ5G4b5a%2BnOdfTkDyHjpC4Q0yY2E7tbfeyEH%2BBgFLt568xSM3SucyLSHpeWDSt6yA6khdpa%2B%2F%2FOE0J9JByP8gswbZ56Vye%2BJ3rBbxCOl4AfHu54cBeHOu5FzaeQ9tGfyMxbq8xzmMcRiIm9d8uGnclDDbrYLCBjqkAf2T1nchmdwAytYdHKfDPLtB%2Bug5lPQ1SQPZFxb3nMykd3fHMP526%2BP%2Fq3I2rs9K6fpA%2BCQnFouhXr3LQOAIBXPAn1f1ofSZ0idu2dfxnl1xjwXJZKVzodK3rCjpj0fDdyZbfhZND75FrOTdzI7XRqldC0KTAkdTKZlPHmdt8rl%2BHix%2BWq%2FItcPl1QXKy5xU0SeRhD56o%2FIdFSrb8NpnMDiYirUN&X-Amz-Signature=ea979130db556f07b58cbeff8b8bc0614f9fd26f8bf221819082a1231c10fe25&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRRWYPM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbwG58ggIPcpD2yyvt6Ng8PKCqi6MuHbWiL7tGU1ZNrwIhAOXboWe1BpNhYkp5%2Fes2m4fgOFoDeM%2Fyiw13Eu7NII5xKv8DCDQQABoMNjM3NDIzMTgzODA1IgzJXrKNn32p2SaB%2BWkq3APDUs9oMO6d79PwcMO%2FkxlWwUPliSPB3%2FFbo%2B%2FSNrUmiuFJEJKke%2FOZOlxiafZkqs%2FKoP%2B8HYDkFYVrN2X1AY19SXu69zcyIchzMqXqWLXWWKeKhfEosh%2FMK%2FijRuqIWoVzW0pXAHKa6bekZ8Dx51UYTSiv2oCfFScNnsolID%2FNtjzmvZGC2FSk%2BzbXp8RwlQWACoy%2By7%2BbA%2Fbf4HQiWWVoHV5JSvTrKAh6yYD7bB8o4O%2FrTV5dmOXGetYfjQFgnOY8CmQCKd8V69vKkT8IhJo18cg2r2rzlDSQhvlRQWnh6pxdjQZCI6F8ljP0j%2FFesluZcSMEgNr9STGea%2Bnt8USyWQNJRgDsJRoMQmV0zF5vMsEu9vkFMiatpH91veFUUIfmdgmTs63Bn4AEVRFtphdt%2Bysz2dnuBhSQXBHkewdNNVLJaLGXQcTFJvBEBUR2u1lPmkEf8Gkq9ZU0PkljIlxnrMHbjQ%2Fe012%2FpXTYQ5G4b5a%2BnOdfTkDyHjpC4Q0yY2E7tbfeyEH%2BBgFLt568xSM3SucyLSHpeWDSt6yA6khdpa%2B%2F%2FOE0J9JByP8gswbZ56Vye%2BJ3rBbxCOl4AfHu54cBeHOu5FzaeQ9tGfyMxbq8xzmMcRiIm9d8uGnclDDbrYLCBjqkAf2T1nchmdwAytYdHKfDPLtB%2Bug5lPQ1SQPZFxb3nMykd3fHMP526%2BP%2Fq3I2rs9K6fpA%2BCQnFouhXr3LQOAIBXPAn1f1ofSZ0idu2dfxnl1xjwXJZKVzodK3rCjpj0fDdyZbfhZND75FrOTdzI7XRqldC0KTAkdTKZlPHmdt8rl%2BHix%2BWq%2FItcPl1QXKy5xU0SeRhD56o%2FIdFSrb8NpnMDiYirUN&X-Amz-Signature=c07798f2a147159f65577eb37ce60cfc320f8c213649e17ff8c9f17a94eadfbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRRWYPM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbwG58ggIPcpD2yyvt6Ng8PKCqi6MuHbWiL7tGU1ZNrwIhAOXboWe1BpNhYkp5%2Fes2m4fgOFoDeM%2Fyiw13Eu7NII5xKv8DCDQQABoMNjM3NDIzMTgzODA1IgzJXrKNn32p2SaB%2BWkq3APDUs9oMO6d79PwcMO%2FkxlWwUPliSPB3%2FFbo%2B%2FSNrUmiuFJEJKke%2FOZOlxiafZkqs%2FKoP%2B8HYDkFYVrN2X1AY19SXu69zcyIchzMqXqWLXWWKeKhfEosh%2FMK%2FijRuqIWoVzW0pXAHKa6bekZ8Dx51UYTSiv2oCfFScNnsolID%2FNtjzmvZGC2FSk%2BzbXp8RwlQWACoy%2By7%2BbA%2Fbf4HQiWWVoHV5JSvTrKAh6yYD7bB8o4O%2FrTV5dmOXGetYfjQFgnOY8CmQCKd8V69vKkT8IhJo18cg2r2rzlDSQhvlRQWnh6pxdjQZCI6F8ljP0j%2FFesluZcSMEgNr9STGea%2Bnt8USyWQNJRgDsJRoMQmV0zF5vMsEu9vkFMiatpH91veFUUIfmdgmTs63Bn4AEVRFtphdt%2Bysz2dnuBhSQXBHkewdNNVLJaLGXQcTFJvBEBUR2u1lPmkEf8Gkq9ZU0PkljIlxnrMHbjQ%2Fe012%2FpXTYQ5G4b5a%2BnOdfTkDyHjpC4Q0yY2E7tbfeyEH%2BBgFLt568xSM3SucyLSHpeWDSt6yA6khdpa%2B%2F%2FOE0J9JByP8gswbZ56Vye%2BJ3rBbxCOl4AfHu54cBeHOu5FzaeQ9tGfyMxbq8xzmMcRiIm9d8uGnclDDbrYLCBjqkAf2T1nchmdwAytYdHKfDPLtB%2Bug5lPQ1SQPZFxb3nMykd3fHMP526%2BP%2Fq3I2rs9K6fpA%2BCQnFouhXr3LQOAIBXPAn1f1ofSZ0idu2dfxnl1xjwXJZKVzodK3rCjpj0fDdyZbfhZND75FrOTdzI7XRqldC0KTAkdTKZlPHmdt8rl%2BHix%2BWq%2FItcPl1QXKy5xU0SeRhD56o%2FIdFSrb8NpnMDiYirUN&X-Amz-Signature=da62afba68239dfadc5e05b8ec1ce6c4ce64aba27fae0881d4b9d7881895b40a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRRWYPM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbwG58ggIPcpD2yyvt6Ng8PKCqi6MuHbWiL7tGU1ZNrwIhAOXboWe1BpNhYkp5%2Fes2m4fgOFoDeM%2Fyiw13Eu7NII5xKv8DCDQQABoMNjM3NDIzMTgzODA1IgzJXrKNn32p2SaB%2BWkq3APDUs9oMO6d79PwcMO%2FkxlWwUPliSPB3%2FFbo%2B%2FSNrUmiuFJEJKke%2FOZOlxiafZkqs%2FKoP%2B8HYDkFYVrN2X1AY19SXu69zcyIchzMqXqWLXWWKeKhfEosh%2FMK%2FijRuqIWoVzW0pXAHKa6bekZ8Dx51UYTSiv2oCfFScNnsolID%2FNtjzmvZGC2FSk%2BzbXp8RwlQWACoy%2By7%2BbA%2Fbf4HQiWWVoHV5JSvTrKAh6yYD7bB8o4O%2FrTV5dmOXGetYfjQFgnOY8CmQCKd8V69vKkT8IhJo18cg2r2rzlDSQhvlRQWnh6pxdjQZCI6F8ljP0j%2FFesluZcSMEgNr9STGea%2Bnt8USyWQNJRgDsJRoMQmV0zF5vMsEu9vkFMiatpH91veFUUIfmdgmTs63Bn4AEVRFtphdt%2Bysz2dnuBhSQXBHkewdNNVLJaLGXQcTFJvBEBUR2u1lPmkEf8Gkq9ZU0PkljIlxnrMHbjQ%2Fe012%2FpXTYQ5G4b5a%2BnOdfTkDyHjpC4Q0yY2E7tbfeyEH%2BBgFLt568xSM3SucyLSHpeWDSt6yA6khdpa%2B%2F%2FOE0J9JByP8gswbZ56Vye%2BJ3rBbxCOl4AfHu54cBeHOu5FzaeQ9tGfyMxbq8xzmMcRiIm9d8uGnclDDbrYLCBjqkAf2T1nchmdwAytYdHKfDPLtB%2Bug5lPQ1SQPZFxb3nMykd3fHMP526%2BP%2Fq3I2rs9K6fpA%2BCQnFouhXr3LQOAIBXPAn1f1ofSZ0idu2dfxnl1xjwXJZKVzodK3rCjpj0fDdyZbfhZND75FrOTdzI7XRqldC0KTAkdTKZlPHmdt8rl%2BHix%2BWq%2FItcPl1QXKy5xU0SeRhD56o%2FIdFSrb8NpnMDiYirUN&X-Amz-Signature=ba91fe8e0ce5fd292190942ffff4c99353e4c8a07a30d39a97f9b1ff283049be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRRWYPM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDbwG58ggIPcpD2yyvt6Ng8PKCqi6MuHbWiL7tGU1ZNrwIhAOXboWe1BpNhYkp5%2Fes2m4fgOFoDeM%2Fyiw13Eu7NII5xKv8DCDQQABoMNjM3NDIzMTgzODA1IgzJXrKNn32p2SaB%2BWkq3APDUs9oMO6d79PwcMO%2FkxlWwUPliSPB3%2FFbo%2B%2FSNrUmiuFJEJKke%2FOZOlxiafZkqs%2FKoP%2B8HYDkFYVrN2X1AY19SXu69zcyIchzMqXqWLXWWKeKhfEosh%2FMK%2FijRuqIWoVzW0pXAHKa6bekZ8Dx51UYTSiv2oCfFScNnsolID%2FNtjzmvZGC2FSk%2BzbXp8RwlQWACoy%2By7%2BbA%2Fbf4HQiWWVoHV5JSvTrKAh6yYD7bB8o4O%2FrTV5dmOXGetYfjQFgnOY8CmQCKd8V69vKkT8IhJo18cg2r2rzlDSQhvlRQWnh6pxdjQZCI6F8ljP0j%2FFesluZcSMEgNr9STGea%2Bnt8USyWQNJRgDsJRoMQmV0zF5vMsEu9vkFMiatpH91veFUUIfmdgmTs63Bn4AEVRFtphdt%2Bysz2dnuBhSQXBHkewdNNVLJaLGXQcTFJvBEBUR2u1lPmkEf8Gkq9ZU0PkljIlxnrMHbjQ%2Fe012%2FpXTYQ5G4b5a%2BnOdfTkDyHjpC4Q0yY2E7tbfeyEH%2BBgFLt568xSM3SucyLSHpeWDSt6yA6khdpa%2B%2F%2FOE0J9JByP8gswbZ56Vye%2BJ3rBbxCOl4AfHu54cBeHOu5FzaeQ9tGfyMxbq8xzmMcRiIm9d8uGnclDDbrYLCBjqkAf2T1nchmdwAytYdHKfDPLtB%2Bug5lPQ1SQPZFxb3nMykd3fHMP526%2BP%2Fq3I2rs9K6fpA%2BCQnFouhXr3LQOAIBXPAn1f1ofSZ0idu2dfxnl1xjwXJZKVzodK3rCjpj0fDdyZbfhZND75FrOTdzI7XRqldC0KTAkdTKZlPHmdt8rl%2BHix%2BWq%2FItcPl1QXKy5xU0SeRhD56o%2FIdFSrb8NpnMDiYirUN&X-Amz-Signature=b570f860895bb65dd286e89df4df0a8284e2fbc659c22972eaffd1c97536ac52&X-Amz-SignedHeaders=host&x-id=GetObject)
