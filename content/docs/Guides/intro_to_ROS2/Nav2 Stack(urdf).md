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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXIIXFH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQClnyuQcvyc34QFc8ZPCTym%2BNKJA3xoNohsC4DlFOK9VQIhAJ6iDY0sM2f2Mf08ZBdWjqyPvmpSj73ftbPVbUClZn8%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKZ46PA3EtX57ZMEq3AM5xMNJBb1cb1Y8I061wA9uP47xuUnNvvfxGHGfCe7Gw4lBYrDXJQlSheUTcdzzEqs%2FAZHIiay6UP88NSk61DqGGXv6I5GLYzrweE%2FSf5xjyZHZJ3aZPNRZ2CAdY7p86VQcY30PGgWzjokuwkFEWcLVknY0qavy7eU56viCwOUPDHoL7s7sY09rgf%2FFOuypm9OQTsOXxARWwnQwmmwuxj8pmDSG1cdpZonMxOBAuGGiZSxdR4WVNgscevOO8p0l5X7uvVlnxt5NC%2BwUodqlDxokA2NbNC91ZrbtaedUMM7DgAn%2FFuZ5bXLijiiD%2BeCZpYbsF96AKnCDOWPDuHAn9ikKs9GXnbzCBYR1QXwx%2F0ruPYciISmWFjC2PfDwxSOeUkHpORAc%2FE%2BZ3zTELP9EeX6yc2bpZjt9tcRjBjQBehj7te4CzTS5aU7mwZU0ROq6Q0tcPshPxx5PjYCLozdl%2BpuWHRgybCkWJBe4HGIu587O2UW7t8MrJAl3xRfaqMJXBB6uUGTEwT4otTa3kSaPdsrXt72V5sewvxLrkZnPzTkcBe8uLVT8RYSTn2o%2FDwR%2FV9frYZm%2FC0Wkl2niOdeC%2BjHpcArAmv567JIG532e%2FYADhnCjyB1b0bmiwwMiEjCctJTABjqkAZw7HNrHpkxrz4JTnTZ%2BDXnIv8SMeqWcowdAsCuaUlsGx4CXto2%2FUc0tLgOp4yyrtgGL%2FOcyrpC3aoWWsOC7zMYzSBOeA1F8ioxnIyJoSwRYmD8%2BB8UfuctSGULS8x6kcNOEDpk7zwbOu3De1lt49fKnGuj9q6ofV95jafg8%2BR1MCL2gtnM%2Bt6psvwP0WRNrThc6MfLI%2BMRaX0b1xAqC%2FskkDL4k&X-Amz-Signature=e197bcc1752185d24dd517dfa7755f79299d7817c6305957c8b2bedf2dc337da&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXIIXFH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQClnyuQcvyc34QFc8ZPCTym%2BNKJA3xoNohsC4DlFOK9VQIhAJ6iDY0sM2f2Mf08ZBdWjqyPvmpSj73ftbPVbUClZn8%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKZ46PA3EtX57ZMEq3AM5xMNJBb1cb1Y8I061wA9uP47xuUnNvvfxGHGfCe7Gw4lBYrDXJQlSheUTcdzzEqs%2FAZHIiay6UP88NSk61DqGGXv6I5GLYzrweE%2FSf5xjyZHZJ3aZPNRZ2CAdY7p86VQcY30PGgWzjokuwkFEWcLVknY0qavy7eU56viCwOUPDHoL7s7sY09rgf%2FFOuypm9OQTsOXxARWwnQwmmwuxj8pmDSG1cdpZonMxOBAuGGiZSxdR4WVNgscevOO8p0l5X7uvVlnxt5NC%2BwUodqlDxokA2NbNC91ZrbtaedUMM7DgAn%2FFuZ5bXLijiiD%2BeCZpYbsF96AKnCDOWPDuHAn9ikKs9GXnbzCBYR1QXwx%2F0ruPYciISmWFjC2PfDwxSOeUkHpORAc%2FE%2BZ3zTELP9EeX6yc2bpZjt9tcRjBjQBehj7te4CzTS5aU7mwZU0ROq6Q0tcPshPxx5PjYCLozdl%2BpuWHRgybCkWJBe4HGIu587O2UW7t8MrJAl3xRfaqMJXBB6uUGTEwT4otTa3kSaPdsrXt72V5sewvxLrkZnPzTkcBe8uLVT8RYSTn2o%2FDwR%2FV9frYZm%2FC0Wkl2niOdeC%2BjHpcArAmv567JIG532e%2FYADhnCjyB1b0bmiwwMiEjCctJTABjqkAZw7HNrHpkxrz4JTnTZ%2BDXnIv8SMeqWcowdAsCuaUlsGx4CXto2%2FUc0tLgOp4yyrtgGL%2FOcyrpC3aoWWsOC7zMYzSBOeA1F8ioxnIyJoSwRYmD8%2BB8UfuctSGULS8x6kcNOEDpk7zwbOu3De1lt49fKnGuj9q6ofV95jafg8%2BR1MCL2gtnM%2Bt6psvwP0WRNrThc6MfLI%2BMRaX0b1xAqC%2FskkDL4k&X-Amz-Signature=be42690be91d3916bf3fade71d10210fc72d28dc5f419f6513c131ae193f7ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXIIXFH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQClnyuQcvyc34QFc8ZPCTym%2BNKJA3xoNohsC4DlFOK9VQIhAJ6iDY0sM2f2Mf08ZBdWjqyPvmpSj73ftbPVbUClZn8%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKZ46PA3EtX57ZMEq3AM5xMNJBb1cb1Y8I061wA9uP47xuUnNvvfxGHGfCe7Gw4lBYrDXJQlSheUTcdzzEqs%2FAZHIiay6UP88NSk61DqGGXv6I5GLYzrweE%2FSf5xjyZHZJ3aZPNRZ2CAdY7p86VQcY30PGgWzjokuwkFEWcLVknY0qavy7eU56viCwOUPDHoL7s7sY09rgf%2FFOuypm9OQTsOXxARWwnQwmmwuxj8pmDSG1cdpZonMxOBAuGGiZSxdR4WVNgscevOO8p0l5X7uvVlnxt5NC%2BwUodqlDxokA2NbNC91ZrbtaedUMM7DgAn%2FFuZ5bXLijiiD%2BeCZpYbsF96AKnCDOWPDuHAn9ikKs9GXnbzCBYR1QXwx%2F0ruPYciISmWFjC2PfDwxSOeUkHpORAc%2FE%2BZ3zTELP9EeX6yc2bpZjt9tcRjBjQBehj7te4CzTS5aU7mwZU0ROq6Q0tcPshPxx5PjYCLozdl%2BpuWHRgybCkWJBe4HGIu587O2UW7t8MrJAl3xRfaqMJXBB6uUGTEwT4otTa3kSaPdsrXt72V5sewvxLrkZnPzTkcBe8uLVT8RYSTn2o%2FDwR%2FV9frYZm%2FC0Wkl2niOdeC%2BjHpcArAmv567JIG532e%2FYADhnCjyB1b0bmiwwMiEjCctJTABjqkAZw7HNrHpkxrz4JTnTZ%2BDXnIv8SMeqWcowdAsCuaUlsGx4CXto2%2FUc0tLgOp4yyrtgGL%2FOcyrpC3aoWWsOC7zMYzSBOeA1F8ioxnIyJoSwRYmD8%2BB8UfuctSGULS8x6kcNOEDpk7zwbOu3De1lt49fKnGuj9q6ofV95jafg8%2BR1MCL2gtnM%2Bt6psvwP0WRNrThc6MfLI%2BMRaX0b1xAqC%2FskkDL4k&X-Amz-Signature=c7e509f24e35de385a4730ac5b83c9aefce604920529ec8d852c3d519f04ba2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXIIXFH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQClnyuQcvyc34QFc8ZPCTym%2BNKJA3xoNohsC4DlFOK9VQIhAJ6iDY0sM2f2Mf08ZBdWjqyPvmpSj73ftbPVbUClZn8%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKZ46PA3EtX57ZMEq3AM5xMNJBb1cb1Y8I061wA9uP47xuUnNvvfxGHGfCe7Gw4lBYrDXJQlSheUTcdzzEqs%2FAZHIiay6UP88NSk61DqGGXv6I5GLYzrweE%2FSf5xjyZHZJ3aZPNRZ2CAdY7p86VQcY30PGgWzjokuwkFEWcLVknY0qavy7eU56viCwOUPDHoL7s7sY09rgf%2FFOuypm9OQTsOXxARWwnQwmmwuxj8pmDSG1cdpZonMxOBAuGGiZSxdR4WVNgscevOO8p0l5X7uvVlnxt5NC%2BwUodqlDxokA2NbNC91ZrbtaedUMM7DgAn%2FFuZ5bXLijiiD%2BeCZpYbsF96AKnCDOWPDuHAn9ikKs9GXnbzCBYR1QXwx%2F0ruPYciISmWFjC2PfDwxSOeUkHpORAc%2FE%2BZ3zTELP9EeX6yc2bpZjt9tcRjBjQBehj7te4CzTS5aU7mwZU0ROq6Q0tcPshPxx5PjYCLozdl%2BpuWHRgybCkWJBe4HGIu587O2UW7t8MrJAl3xRfaqMJXBB6uUGTEwT4otTa3kSaPdsrXt72V5sewvxLrkZnPzTkcBe8uLVT8RYSTn2o%2FDwR%2FV9frYZm%2FC0Wkl2niOdeC%2BjHpcArAmv567JIG532e%2FYADhnCjyB1b0bmiwwMiEjCctJTABjqkAZw7HNrHpkxrz4JTnTZ%2BDXnIv8SMeqWcowdAsCuaUlsGx4CXto2%2FUc0tLgOp4yyrtgGL%2FOcyrpC3aoWWsOC7zMYzSBOeA1F8ioxnIyJoSwRYmD8%2BB8UfuctSGULS8x6kcNOEDpk7zwbOu3De1lt49fKnGuj9q6ofV95jafg8%2BR1MCL2gtnM%2Bt6psvwP0WRNrThc6MfLI%2BMRaX0b1xAqC%2FskkDL4k&X-Amz-Signature=c870ee7a34939dcbb18860964383178e596a1813bb1d0410c1c5623fbf6cfb37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXIIXFH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQClnyuQcvyc34QFc8ZPCTym%2BNKJA3xoNohsC4DlFOK9VQIhAJ6iDY0sM2f2Mf08ZBdWjqyPvmpSj73ftbPVbUClZn8%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKZ46PA3EtX57ZMEq3AM5xMNJBb1cb1Y8I061wA9uP47xuUnNvvfxGHGfCe7Gw4lBYrDXJQlSheUTcdzzEqs%2FAZHIiay6UP88NSk61DqGGXv6I5GLYzrweE%2FSf5xjyZHZJ3aZPNRZ2CAdY7p86VQcY30PGgWzjokuwkFEWcLVknY0qavy7eU56viCwOUPDHoL7s7sY09rgf%2FFOuypm9OQTsOXxARWwnQwmmwuxj8pmDSG1cdpZonMxOBAuGGiZSxdR4WVNgscevOO8p0l5X7uvVlnxt5NC%2BwUodqlDxokA2NbNC91ZrbtaedUMM7DgAn%2FFuZ5bXLijiiD%2BeCZpYbsF96AKnCDOWPDuHAn9ikKs9GXnbzCBYR1QXwx%2F0ruPYciISmWFjC2PfDwxSOeUkHpORAc%2FE%2BZ3zTELP9EeX6yc2bpZjt9tcRjBjQBehj7te4CzTS5aU7mwZU0ROq6Q0tcPshPxx5PjYCLozdl%2BpuWHRgybCkWJBe4HGIu587O2UW7t8MrJAl3xRfaqMJXBB6uUGTEwT4otTa3kSaPdsrXt72V5sewvxLrkZnPzTkcBe8uLVT8RYSTn2o%2FDwR%2FV9frYZm%2FC0Wkl2niOdeC%2BjHpcArAmv567JIG532e%2FYADhnCjyB1b0bmiwwMiEjCctJTABjqkAZw7HNrHpkxrz4JTnTZ%2BDXnIv8SMeqWcowdAsCuaUlsGx4CXto2%2FUc0tLgOp4yyrtgGL%2FOcyrpC3aoWWsOC7zMYzSBOeA1F8ioxnIyJoSwRYmD8%2BB8UfuctSGULS8x6kcNOEDpk7zwbOu3De1lt49fKnGuj9q6ofV95jafg8%2BR1MCL2gtnM%2Bt6psvwP0WRNrThc6MfLI%2BMRaX0b1xAqC%2FskkDL4k&X-Amz-Signature=05cb7bb31d7b87d5365ea83fb210a1fc5027ebd23af292765c2dc478d992ea8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXIIXFH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQClnyuQcvyc34QFc8ZPCTym%2BNKJA3xoNohsC4DlFOK9VQIhAJ6iDY0sM2f2Mf08ZBdWjqyPvmpSj73ftbPVbUClZn8%2BKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeKZ46PA3EtX57ZMEq3AM5xMNJBb1cb1Y8I061wA9uP47xuUnNvvfxGHGfCe7Gw4lBYrDXJQlSheUTcdzzEqs%2FAZHIiay6UP88NSk61DqGGXv6I5GLYzrweE%2FSf5xjyZHZJ3aZPNRZ2CAdY7p86VQcY30PGgWzjokuwkFEWcLVknY0qavy7eU56viCwOUPDHoL7s7sY09rgf%2FFOuypm9OQTsOXxARWwnQwmmwuxj8pmDSG1cdpZonMxOBAuGGiZSxdR4WVNgscevOO8p0l5X7uvVlnxt5NC%2BwUodqlDxokA2NbNC91ZrbtaedUMM7DgAn%2FFuZ5bXLijiiD%2BeCZpYbsF96AKnCDOWPDuHAn9ikKs9GXnbzCBYR1QXwx%2F0ruPYciISmWFjC2PfDwxSOeUkHpORAc%2FE%2BZ3zTELP9EeX6yc2bpZjt9tcRjBjQBehj7te4CzTS5aU7mwZU0ROq6Q0tcPshPxx5PjYCLozdl%2BpuWHRgybCkWJBe4HGIu587O2UW7t8MrJAl3xRfaqMJXBB6uUGTEwT4otTa3kSaPdsrXt72V5sewvxLrkZnPzTkcBe8uLVT8RYSTn2o%2FDwR%2FV9frYZm%2FC0Wkl2niOdeC%2BjHpcArAmv567JIG532e%2FYADhnCjyB1b0bmiwwMiEjCctJTABjqkAZw7HNrHpkxrz4JTnTZ%2BDXnIv8SMeqWcowdAsCuaUlsGx4CXto2%2FUc0tLgOp4yyrtgGL%2FOcyrpC3aoWWsOC7zMYzSBOeA1F8ioxnIyJoSwRYmD8%2BB8UfuctSGULS8x6kcNOEDpk7zwbOu3De1lt49fKnGuj9q6ofV95jafg8%2BR1MCL2gtnM%2Bt6psvwP0WRNrThc6MfLI%2BMRaX0b1xAqC%2FskkDL4k&X-Amz-Signature=16f184743ac7b9c0984ab9eea5ca28fdba359bc4f5a96e21d01c16758fb96126&X-Amz-SignedHeaders=host&x-id=GetObject)
