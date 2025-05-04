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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJEUP3L%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuRNAOStBFleCHqw5qlPEeKb%2FQE6TjzUea7ldaob2pRQIgLfsAq%2Fo2UoCnOwd%2BdVcHsgR7g4OD1%2FiK2nJMjkk%2B954qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTT%2FmzX5exSEF8OSrcA1UBtAwncfuVRUZ3RDRiBg60BLX3hLOoIcK1J6yGXX1AoMaZ45DQuxRPxUCKV0DqmgQgXEpR0vGA14F24pUdgwQTQPYCWRRuMri4Kj4eujhPJ2RbHGNjWz7BFwabXuuoTabuw865SXLpn055WR2RSzKRM5Drpb37EUJ46TnNXG6So33xFknD4WoVUKlI43X2im8%2Fk29UR0mdKVfEBQggAswbtTQs8hWICxhl5h9yfaVMXBU6y%2BS%2B891xO8YEwAq%2BackjrVCCOlAjSvrJuoXOEsk8GjoG1Wdt3jXhfBjzPe6BB8wYj1Bz1V1qHKfz7%2FOUY81igwQJpnycS4ZYJlLBZ%2FsHpbl3VTBaeqGyaxolnb3SO16oiSD5yOHifRDSqKtHwYBjekO54dIFT1ks3UgFWiBzdyVCcX%2B5cP%2FnnPgJAXVtWqytQAtd6p2iNEPDI4WGcV2x7fTkP2R17yl9J8r2S0YAWOpzrrvwG5ZMEDwzhQgdLgjFTfLn33g0uja7WhfAP%2BwydUn%2FEIIFqps4k0%2BRb4hcMlnOVki3NDNowGX3Lgxm8Im3QjvL2S9lTP5uikVNBFZCrd7HAH7uNnIHRm74lurayKoBrlqjkNDBVDw%2BRTzitjaA9jAT5GRibUjwMInr28AGOqUBL4ZVkeosrqcABJjR9dwv1wd62wf49vQLzurAGtGEGXgMsd%2FSC2t9J5I0Tm%2Frma26dYhrySoAWY7sVoThAL%2BoPdYxP2glucxRRL8X8Zpvxmrb3NIhV%2BjRMLRyicVbpqeRaNme5VruyTEa96T7IWbeCNugPM6LiVGPhHHAe8Up2qugKAcTioO1Lq1JRuSQrbj2KRKqMxKAuGavo7kNwz1HT6l%2B641l&X-Amz-Signature=088c2a39670af84d3c2c4bc8e620b0ba144ffe122f6d25b6e01b20ec241e1f32&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJEUP3L%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuRNAOStBFleCHqw5qlPEeKb%2FQE6TjzUea7ldaob2pRQIgLfsAq%2Fo2UoCnOwd%2BdVcHsgR7g4OD1%2FiK2nJMjkk%2B954qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTT%2FmzX5exSEF8OSrcA1UBtAwncfuVRUZ3RDRiBg60BLX3hLOoIcK1J6yGXX1AoMaZ45DQuxRPxUCKV0DqmgQgXEpR0vGA14F24pUdgwQTQPYCWRRuMri4Kj4eujhPJ2RbHGNjWz7BFwabXuuoTabuw865SXLpn055WR2RSzKRM5Drpb37EUJ46TnNXG6So33xFknD4WoVUKlI43X2im8%2Fk29UR0mdKVfEBQggAswbtTQs8hWICxhl5h9yfaVMXBU6y%2BS%2B891xO8YEwAq%2BackjrVCCOlAjSvrJuoXOEsk8GjoG1Wdt3jXhfBjzPe6BB8wYj1Bz1V1qHKfz7%2FOUY81igwQJpnycS4ZYJlLBZ%2FsHpbl3VTBaeqGyaxolnb3SO16oiSD5yOHifRDSqKtHwYBjekO54dIFT1ks3UgFWiBzdyVCcX%2B5cP%2FnnPgJAXVtWqytQAtd6p2iNEPDI4WGcV2x7fTkP2R17yl9J8r2S0YAWOpzrrvwG5ZMEDwzhQgdLgjFTfLn33g0uja7WhfAP%2BwydUn%2FEIIFqps4k0%2BRb4hcMlnOVki3NDNowGX3Lgxm8Im3QjvL2S9lTP5uikVNBFZCrd7HAH7uNnIHRm74lurayKoBrlqjkNDBVDw%2BRTzitjaA9jAT5GRibUjwMInr28AGOqUBL4ZVkeosrqcABJjR9dwv1wd62wf49vQLzurAGtGEGXgMsd%2FSC2t9J5I0Tm%2Frma26dYhrySoAWY7sVoThAL%2BoPdYxP2glucxRRL8X8Zpvxmrb3NIhV%2BjRMLRyicVbpqeRaNme5VruyTEa96T7IWbeCNugPM6LiVGPhHHAe8Up2qugKAcTioO1Lq1JRuSQrbj2KRKqMxKAuGavo7kNwz1HT6l%2B641l&X-Amz-Signature=3d2a53eced04b6eac6e93f76d79b07f017b10f11929e5c0ad4bd830901871ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJEUP3L%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuRNAOStBFleCHqw5qlPEeKb%2FQE6TjzUea7ldaob2pRQIgLfsAq%2Fo2UoCnOwd%2BdVcHsgR7g4OD1%2FiK2nJMjkk%2B954qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTT%2FmzX5exSEF8OSrcA1UBtAwncfuVRUZ3RDRiBg60BLX3hLOoIcK1J6yGXX1AoMaZ45DQuxRPxUCKV0DqmgQgXEpR0vGA14F24pUdgwQTQPYCWRRuMri4Kj4eujhPJ2RbHGNjWz7BFwabXuuoTabuw865SXLpn055WR2RSzKRM5Drpb37EUJ46TnNXG6So33xFknD4WoVUKlI43X2im8%2Fk29UR0mdKVfEBQggAswbtTQs8hWICxhl5h9yfaVMXBU6y%2BS%2B891xO8YEwAq%2BackjrVCCOlAjSvrJuoXOEsk8GjoG1Wdt3jXhfBjzPe6BB8wYj1Bz1V1qHKfz7%2FOUY81igwQJpnycS4ZYJlLBZ%2FsHpbl3VTBaeqGyaxolnb3SO16oiSD5yOHifRDSqKtHwYBjekO54dIFT1ks3UgFWiBzdyVCcX%2B5cP%2FnnPgJAXVtWqytQAtd6p2iNEPDI4WGcV2x7fTkP2R17yl9J8r2S0YAWOpzrrvwG5ZMEDwzhQgdLgjFTfLn33g0uja7WhfAP%2BwydUn%2FEIIFqps4k0%2BRb4hcMlnOVki3NDNowGX3Lgxm8Im3QjvL2S9lTP5uikVNBFZCrd7HAH7uNnIHRm74lurayKoBrlqjkNDBVDw%2BRTzitjaA9jAT5GRibUjwMInr28AGOqUBL4ZVkeosrqcABJjR9dwv1wd62wf49vQLzurAGtGEGXgMsd%2FSC2t9J5I0Tm%2Frma26dYhrySoAWY7sVoThAL%2BoPdYxP2glucxRRL8X8Zpvxmrb3NIhV%2BjRMLRyicVbpqeRaNme5VruyTEa96T7IWbeCNugPM6LiVGPhHHAe8Up2qugKAcTioO1Lq1JRuSQrbj2KRKqMxKAuGavo7kNwz1HT6l%2B641l&X-Amz-Signature=d51b598cebe3c887264e3ec0dbcae5f4ab85d6bee94fa5a06b45dda232bbc165&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJEUP3L%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuRNAOStBFleCHqw5qlPEeKb%2FQE6TjzUea7ldaob2pRQIgLfsAq%2Fo2UoCnOwd%2BdVcHsgR7g4OD1%2FiK2nJMjkk%2B954qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTT%2FmzX5exSEF8OSrcA1UBtAwncfuVRUZ3RDRiBg60BLX3hLOoIcK1J6yGXX1AoMaZ45DQuxRPxUCKV0DqmgQgXEpR0vGA14F24pUdgwQTQPYCWRRuMri4Kj4eujhPJ2RbHGNjWz7BFwabXuuoTabuw865SXLpn055WR2RSzKRM5Drpb37EUJ46TnNXG6So33xFknD4WoVUKlI43X2im8%2Fk29UR0mdKVfEBQggAswbtTQs8hWICxhl5h9yfaVMXBU6y%2BS%2B891xO8YEwAq%2BackjrVCCOlAjSvrJuoXOEsk8GjoG1Wdt3jXhfBjzPe6BB8wYj1Bz1V1qHKfz7%2FOUY81igwQJpnycS4ZYJlLBZ%2FsHpbl3VTBaeqGyaxolnb3SO16oiSD5yOHifRDSqKtHwYBjekO54dIFT1ks3UgFWiBzdyVCcX%2B5cP%2FnnPgJAXVtWqytQAtd6p2iNEPDI4WGcV2x7fTkP2R17yl9J8r2S0YAWOpzrrvwG5ZMEDwzhQgdLgjFTfLn33g0uja7WhfAP%2BwydUn%2FEIIFqps4k0%2BRb4hcMlnOVki3NDNowGX3Lgxm8Im3QjvL2S9lTP5uikVNBFZCrd7HAH7uNnIHRm74lurayKoBrlqjkNDBVDw%2BRTzitjaA9jAT5GRibUjwMInr28AGOqUBL4ZVkeosrqcABJjR9dwv1wd62wf49vQLzurAGtGEGXgMsd%2FSC2t9J5I0Tm%2Frma26dYhrySoAWY7sVoThAL%2BoPdYxP2glucxRRL8X8Zpvxmrb3NIhV%2BjRMLRyicVbpqeRaNme5VruyTEa96T7IWbeCNugPM6LiVGPhHHAe8Up2qugKAcTioO1Lq1JRuSQrbj2KRKqMxKAuGavo7kNwz1HT6l%2B641l&X-Amz-Signature=34a89e844c077c2b5784a5924391bd38adcc37a6ce8d7c345a1c9bf33ad2378f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJEUP3L%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuRNAOStBFleCHqw5qlPEeKb%2FQE6TjzUea7ldaob2pRQIgLfsAq%2Fo2UoCnOwd%2BdVcHsgR7g4OD1%2FiK2nJMjkk%2B954qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTT%2FmzX5exSEF8OSrcA1UBtAwncfuVRUZ3RDRiBg60BLX3hLOoIcK1J6yGXX1AoMaZ45DQuxRPxUCKV0DqmgQgXEpR0vGA14F24pUdgwQTQPYCWRRuMri4Kj4eujhPJ2RbHGNjWz7BFwabXuuoTabuw865SXLpn055WR2RSzKRM5Drpb37EUJ46TnNXG6So33xFknD4WoVUKlI43X2im8%2Fk29UR0mdKVfEBQggAswbtTQs8hWICxhl5h9yfaVMXBU6y%2BS%2B891xO8YEwAq%2BackjrVCCOlAjSvrJuoXOEsk8GjoG1Wdt3jXhfBjzPe6BB8wYj1Bz1V1qHKfz7%2FOUY81igwQJpnycS4ZYJlLBZ%2FsHpbl3VTBaeqGyaxolnb3SO16oiSD5yOHifRDSqKtHwYBjekO54dIFT1ks3UgFWiBzdyVCcX%2B5cP%2FnnPgJAXVtWqytQAtd6p2iNEPDI4WGcV2x7fTkP2R17yl9J8r2S0YAWOpzrrvwG5ZMEDwzhQgdLgjFTfLn33g0uja7WhfAP%2BwydUn%2FEIIFqps4k0%2BRb4hcMlnOVki3NDNowGX3Lgxm8Im3QjvL2S9lTP5uikVNBFZCrd7HAH7uNnIHRm74lurayKoBrlqjkNDBVDw%2BRTzitjaA9jAT5GRibUjwMInr28AGOqUBL4ZVkeosrqcABJjR9dwv1wd62wf49vQLzurAGtGEGXgMsd%2FSC2t9J5I0Tm%2Frma26dYhrySoAWY7sVoThAL%2BoPdYxP2glucxRRL8X8Zpvxmrb3NIhV%2BjRMLRyicVbpqeRaNme5VruyTEa96T7IWbeCNugPM6LiVGPhHHAe8Up2qugKAcTioO1Lq1JRuSQrbj2KRKqMxKAuGavo7kNwz1HT6l%2B641l&X-Amz-Signature=3c4cc5515d05472b203813972ab653fc553c0832ce39306a808dc344cad9de79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJEUP3L%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCuRNAOStBFleCHqw5qlPEeKb%2FQE6TjzUea7ldaob2pRQIgLfsAq%2Fo2UoCnOwd%2BdVcHsgR7g4OD1%2FiK2nJMjkk%2B954qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPTT%2FmzX5exSEF8OSrcA1UBtAwncfuVRUZ3RDRiBg60BLX3hLOoIcK1J6yGXX1AoMaZ45DQuxRPxUCKV0DqmgQgXEpR0vGA14F24pUdgwQTQPYCWRRuMri4Kj4eujhPJ2RbHGNjWz7BFwabXuuoTabuw865SXLpn055WR2RSzKRM5Drpb37EUJ46TnNXG6So33xFknD4WoVUKlI43X2im8%2Fk29UR0mdKVfEBQggAswbtTQs8hWICxhl5h9yfaVMXBU6y%2BS%2B891xO8YEwAq%2BackjrVCCOlAjSvrJuoXOEsk8GjoG1Wdt3jXhfBjzPe6BB8wYj1Bz1V1qHKfz7%2FOUY81igwQJpnycS4ZYJlLBZ%2FsHpbl3VTBaeqGyaxolnb3SO16oiSD5yOHifRDSqKtHwYBjekO54dIFT1ks3UgFWiBzdyVCcX%2B5cP%2FnnPgJAXVtWqytQAtd6p2iNEPDI4WGcV2x7fTkP2R17yl9J8r2S0YAWOpzrrvwG5ZMEDwzhQgdLgjFTfLn33g0uja7WhfAP%2BwydUn%2FEIIFqps4k0%2BRb4hcMlnOVki3NDNowGX3Lgxm8Im3QjvL2S9lTP5uikVNBFZCrd7HAH7uNnIHRm74lurayKoBrlqjkNDBVDw%2BRTzitjaA9jAT5GRibUjwMInr28AGOqUBL4ZVkeosrqcABJjR9dwv1wd62wf49vQLzurAGtGEGXgMsd%2FSC2t9J5I0Tm%2Frma26dYhrySoAWY7sVoThAL%2BoPdYxP2glucxRRL8X8Zpvxmrb3NIhV%2BjRMLRyicVbpqeRaNme5VruyTEa96T7IWbeCNugPM6LiVGPhHHAe8Up2qugKAcTioO1Lq1JRuSQrbj2KRKqMxKAuGavo7kNwz1HT6l%2B641l&X-Amz-Signature=d260aab18da4366a4449998ca026823697267edb7ba4d7a185dd75ba5bf12695&X-Amz-SignedHeaders=host&x-id=GetObject)
