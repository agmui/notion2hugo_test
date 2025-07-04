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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVV3752%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDO3QThcP%2FK2BQGT3lhV9GzofhwKxGc2YgRPgpwDaes9wIgOpuJvFVQl5qwXAEdoyK%2BoVqQBxrt4YrBCHYgQp6YOosq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGj2sk4PcSVixsFHyCrcA1ltWPcXhqf100%2FNlNC4j7vbg8Lw5Xsn5R2GSEUo3babmaB5uxzhtsU1NGwneqjkL0qgoB8EqUvn9QQ%2BBP5zPJVnrBS%2FznGhLgbn174GOt1SMLLghE7st30N5Uoky5pxUmw0EGK%2BxMDaaNgy3WggMXfdMDB7Wz5ceFCfbLnSTtYu8YsLY19SjgYZlpS3BTX%2FbGEzyV8f%2FZdUpiPSlUDwCFnVlZrMEtUe9Sp3cvk95pg%2FrpgUxQVTGCODfhV%2BQSynXS0cfannw%2F4jXY1gGqPTdlMTZxyBTKXH2mJpcftSnX%2F1Jsd7l2KVsCKq0ZDwNSqFkFXUZWEcu0lcbZuXs1X2izNwVIgCXm5TSRCNRkWQ%2FoDa0S13XmHKJsIvTnteLYwYNw5%2BqUojLAxe9R3BpOTyyssM%2B8r%2FOnVt2ZD214yJD7d%2BmIeTipKfx9G54MLpbG6XxYqfX%2B%2FgdM1nm9SoV1gSdW9IEv0jyn%2FCKhU9mqwzDWTFkp4oRVC2rXPo0m3CzCvk5numg%2BNcz8FQcAhS2gl7CXQOsXY8Ip7hQwoS%2BEkm9x8Ubvr4sUgjuN%2BtE7hRsy4UCkSMr%2B1bOJR0DsvGhtTdL8p95CmqRyJlIAHLZys88xcArY648I7eAknEs14gMPPsn8MGOqUBNNJzeZxe3T%2Fj5Dp%2FIbOe1PDEFpPmMYpd8m9AaCh6sKIr7D2sRFkebRRNfj46t%2FmDvtY6Uiq7sxyWXKsb%2F9aOxAOr%2BZaidsy7rqd01jAGT9%2FWS4CSS%2F0OQFiyqN0uTfpjrO31LFlHnTr3ENwysFOJqVlRrYaLHXyhM4uggF92jDWOWh78q4yCFUI3J73E0P7LLAT93FayZEZz%2BuGwOAosDdZHG%2BbV&X-Amz-Signature=c628d207c4aaf764fe1454b3577107b788f3e9657ac287a2a505db56d90ad8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVV3752%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDO3QThcP%2FK2BQGT3lhV9GzofhwKxGc2YgRPgpwDaes9wIgOpuJvFVQl5qwXAEdoyK%2BoVqQBxrt4YrBCHYgQp6YOosq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGj2sk4PcSVixsFHyCrcA1ltWPcXhqf100%2FNlNC4j7vbg8Lw5Xsn5R2GSEUo3babmaB5uxzhtsU1NGwneqjkL0qgoB8EqUvn9QQ%2BBP5zPJVnrBS%2FznGhLgbn174GOt1SMLLghE7st30N5Uoky5pxUmw0EGK%2BxMDaaNgy3WggMXfdMDB7Wz5ceFCfbLnSTtYu8YsLY19SjgYZlpS3BTX%2FbGEzyV8f%2FZdUpiPSlUDwCFnVlZrMEtUe9Sp3cvk95pg%2FrpgUxQVTGCODfhV%2BQSynXS0cfannw%2F4jXY1gGqPTdlMTZxyBTKXH2mJpcftSnX%2F1Jsd7l2KVsCKq0ZDwNSqFkFXUZWEcu0lcbZuXs1X2izNwVIgCXm5TSRCNRkWQ%2FoDa0S13XmHKJsIvTnteLYwYNw5%2BqUojLAxe9R3BpOTyyssM%2B8r%2FOnVt2ZD214yJD7d%2BmIeTipKfx9G54MLpbG6XxYqfX%2B%2FgdM1nm9SoV1gSdW9IEv0jyn%2FCKhU9mqwzDWTFkp4oRVC2rXPo0m3CzCvk5numg%2BNcz8FQcAhS2gl7CXQOsXY8Ip7hQwoS%2BEkm9x8Ubvr4sUgjuN%2BtE7hRsy4UCkSMr%2B1bOJR0DsvGhtTdL8p95CmqRyJlIAHLZys88xcArY648I7eAknEs14gMPPsn8MGOqUBNNJzeZxe3T%2Fj5Dp%2FIbOe1PDEFpPmMYpd8m9AaCh6sKIr7D2sRFkebRRNfj46t%2FmDvtY6Uiq7sxyWXKsb%2F9aOxAOr%2BZaidsy7rqd01jAGT9%2FWS4CSS%2F0OQFiyqN0uTfpjrO31LFlHnTr3ENwysFOJqVlRrYaLHXyhM4uggF92jDWOWh78q4yCFUI3J73E0P7LLAT93FayZEZz%2BuGwOAosDdZHG%2BbV&X-Amz-Signature=6d211112e18f35bd24cab5a9ff01133e5cca54ec63ca3b5157cdb51d8f69c97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVV3752%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDO3QThcP%2FK2BQGT3lhV9GzofhwKxGc2YgRPgpwDaes9wIgOpuJvFVQl5qwXAEdoyK%2BoVqQBxrt4YrBCHYgQp6YOosq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGj2sk4PcSVixsFHyCrcA1ltWPcXhqf100%2FNlNC4j7vbg8Lw5Xsn5R2GSEUo3babmaB5uxzhtsU1NGwneqjkL0qgoB8EqUvn9QQ%2BBP5zPJVnrBS%2FznGhLgbn174GOt1SMLLghE7st30N5Uoky5pxUmw0EGK%2BxMDaaNgy3WggMXfdMDB7Wz5ceFCfbLnSTtYu8YsLY19SjgYZlpS3BTX%2FbGEzyV8f%2FZdUpiPSlUDwCFnVlZrMEtUe9Sp3cvk95pg%2FrpgUxQVTGCODfhV%2BQSynXS0cfannw%2F4jXY1gGqPTdlMTZxyBTKXH2mJpcftSnX%2F1Jsd7l2KVsCKq0ZDwNSqFkFXUZWEcu0lcbZuXs1X2izNwVIgCXm5TSRCNRkWQ%2FoDa0S13XmHKJsIvTnteLYwYNw5%2BqUojLAxe9R3BpOTyyssM%2B8r%2FOnVt2ZD214yJD7d%2BmIeTipKfx9G54MLpbG6XxYqfX%2B%2FgdM1nm9SoV1gSdW9IEv0jyn%2FCKhU9mqwzDWTFkp4oRVC2rXPo0m3CzCvk5numg%2BNcz8FQcAhS2gl7CXQOsXY8Ip7hQwoS%2BEkm9x8Ubvr4sUgjuN%2BtE7hRsy4UCkSMr%2B1bOJR0DsvGhtTdL8p95CmqRyJlIAHLZys88xcArY648I7eAknEs14gMPPsn8MGOqUBNNJzeZxe3T%2Fj5Dp%2FIbOe1PDEFpPmMYpd8m9AaCh6sKIr7D2sRFkebRRNfj46t%2FmDvtY6Uiq7sxyWXKsb%2F9aOxAOr%2BZaidsy7rqd01jAGT9%2FWS4CSS%2F0OQFiyqN0uTfpjrO31LFlHnTr3ENwysFOJqVlRrYaLHXyhM4uggF92jDWOWh78q4yCFUI3J73E0P7LLAT93FayZEZz%2BuGwOAosDdZHG%2BbV&X-Amz-Signature=9b169ddb7b695eabe699cb6d0e9044a0cceabed5405f2538be5059e52e5a988e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVV3752%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDO3QThcP%2FK2BQGT3lhV9GzofhwKxGc2YgRPgpwDaes9wIgOpuJvFVQl5qwXAEdoyK%2BoVqQBxrt4YrBCHYgQp6YOosq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGj2sk4PcSVixsFHyCrcA1ltWPcXhqf100%2FNlNC4j7vbg8Lw5Xsn5R2GSEUo3babmaB5uxzhtsU1NGwneqjkL0qgoB8EqUvn9QQ%2BBP5zPJVnrBS%2FznGhLgbn174GOt1SMLLghE7st30N5Uoky5pxUmw0EGK%2BxMDaaNgy3WggMXfdMDB7Wz5ceFCfbLnSTtYu8YsLY19SjgYZlpS3BTX%2FbGEzyV8f%2FZdUpiPSlUDwCFnVlZrMEtUe9Sp3cvk95pg%2FrpgUxQVTGCODfhV%2BQSynXS0cfannw%2F4jXY1gGqPTdlMTZxyBTKXH2mJpcftSnX%2F1Jsd7l2KVsCKq0ZDwNSqFkFXUZWEcu0lcbZuXs1X2izNwVIgCXm5TSRCNRkWQ%2FoDa0S13XmHKJsIvTnteLYwYNw5%2BqUojLAxe9R3BpOTyyssM%2B8r%2FOnVt2ZD214yJD7d%2BmIeTipKfx9G54MLpbG6XxYqfX%2B%2FgdM1nm9SoV1gSdW9IEv0jyn%2FCKhU9mqwzDWTFkp4oRVC2rXPo0m3CzCvk5numg%2BNcz8FQcAhS2gl7CXQOsXY8Ip7hQwoS%2BEkm9x8Ubvr4sUgjuN%2BtE7hRsy4UCkSMr%2B1bOJR0DsvGhtTdL8p95CmqRyJlIAHLZys88xcArY648I7eAknEs14gMPPsn8MGOqUBNNJzeZxe3T%2Fj5Dp%2FIbOe1PDEFpPmMYpd8m9AaCh6sKIr7D2sRFkebRRNfj46t%2FmDvtY6Uiq7sxyWXKsb%2F9aOxAOr%2BZaidsy7rqd01jAGT9%2FWS4CSS%2F0OQFiyqN0uTfpjrO31LFlHnTr3ENwysFOJqVlRrYaLHXyhM4uggF92jDWOWh78q4yCFUI3J73E0P7LLAT93FayZEZz%2BuGwOAosDdZHG%2BbV&X-Amz-Signature=f5cfd36d2c18d2a09616a7ef9095091d0f6377a6112e245bba6c0becc30621e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVV3752%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDO3QThcP%2FK2BQGT3lhV9GzofhwKxGc2YgRPgpwDaes9wIgOpuJvFVQl5qwXAEdoyK%2BoVqQBxrt4YrBCHYgQp6YOosq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGj2sk4PcSVixsFHyCrcA1ltWPcXhqf100%2FNlNC4j7vbg8Lw5Xsn5R2GSEUo3babmaB5uxzhtsU1NGwneqjkL0qgoB8EqUvn9QQ%2BBP5zPJVnrBS%2FznGhLgbn174GOt1SMLLghE7st30N5Uoky5pxUmw0EGK%2BxMDaaNgy3WggMXfdMDB7Wz5ceFCfbLnSTtYu8YsLY19SjgYZlpS3BTX%2FbGEzyV8f%2FZdUpiPSlUDwCFnVlZrMEtUe9Sp3cvk95pg%2FrpgUxQVTGCODfhV%2BQSynXS0cfannw%2F4jXY1gGqPTdlMTZxyBTKXH2mJpcftSnX%2F1Jsd7l2KVsCKq0ZDwNSqFkFXUZWEcu0lcbZuXs1X2izNwVIgCXm5TSRCNRkWQ%2FoDa0S13XmHKJsIvTnteLYwYNw5%2BqUojLAxe9R3BpOTyyssM%2B8r%2FOnVt2ZD214yJD7d%2BmIeTipKfx9G54MLpbG6XxYqfX%2B%2FgdM1nm9SoV1gSdW9IEv0jyn%2FCKhU9mqwzDWTFkp4oRVC2rXPo0m3CzCvk5numg%2BNcz8FQcAhS2gl7CXQOsXY8Ip7hQwoS%2BEkm9x8Ubvr4sUgjuN%2BtE7hRsy4UCkSMr%2B1bOJR0DsvGhtTdL8p95CmqRyJlIAHLZys88xcArY648I7eAknEs14gMPPsn8MGOqUBNNJzeZxe3T%2Fj5Dp%2FIbOe1PDEFpPmMYpd8m9AaCh6sKIr7D2sRFkebRRNfj46t%2FmDvtY6Uiq7sxyWXKsb%2F9aOxAOr%2BZaidsy7rqd01jAGT9%2FWS4CSS%2F0OQFiyqN0uTfpjrO31LFlHnTr3ENwysFOJqVlRrYaLHXyhM4uggF92jDWOWh78q4yCFUI3J73E0P7LLAT93FayZEZz%2BuGwOAosDdZHG%2BbV&X-Amz-Signature=f65be83269bc0a201ad87d81b41258abbda45bc93ff49349163c3f235a8f52a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVV3752%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDO3QThcP%2FK2BQGT3lhV9GzofhwKxGc2YgRPgpwDaes9wIgOpuJvFVQl5qwXAEdoyK%2BoVqQBxrt4YrBCHYgQp6YOosq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGj2sk4PcSVixsFHyCrcA1ltWPcXhqf100%2FNlNC4j7vbg8Lw5Xsn5R2GSEUo3babmaB5uxzhtsU1NGwneqjkL0qgoB8EqUvn9QQ%2BBP5zPJVnrBS%2FznGhLgbn174GOt1SMLLghE7st30N5Uoky5pxUmw0EGK%2BxMDaaNgy3WggMXfdMDB7Wz5ceFCfbLnSTtYu8YsLY19SjgYZlpS3BTX%2FbGEzyV8f%2FZdUpiPSlUDwCFnVlZrMEtUe9Sp3cvk95pg%2FrpgUxQVTGCODfhV%2BQSynXS0cfannw%2F4jXY1gGqPTdlMTZxyBTKXH2mJpcftSnX%2F1Jsd7l2KVsCKq0ZDwNSqFkFXUZWEcu0lcbZuXs1X2izNwVIgCXm5TSRCNRkWQ%2FoDa0S13XmHKJsIvTnteLYwYNw5%2BqUojLAxe9R3BpOTyyssM%2B8r%2FOnVt2ZD214yJD7d%2BmIeTipKfx9G54MLpbG6XxYqfX%2B%2FgdM1nm9SoV1gSdW9IEv0jyn%2FCKhU9mqwzDWTFkp4oRVC2rXPo0m3CzCvk5numg%2BNcz8FQcAhS2gl7CXQOsXY8Ip7hQwoS%2BEkm9x8Ubvr4sUgjuN%2BtE7hRsy4UCkSMr%2B1bOJR0DsvGhtTdL8p95CmqRyJlIAHLZys88xcArY648I7eAknEs14gMPPsn8MGOqUBNNJzeZxe3T%2Fj5Dp%2FIbOe1PDEFpPmMYpd8m9AaCh6sKIr7D2sRFkebRRNfj46t%2FmDvtY6Uiq7sxyWXKsb%2F9aOxAOr%2BZaidsy7rqd01jAGT9%2FWS4CSS%2F0OQFiyqN0uTfpjrO31LFlHnTr3ENwysFOJqVlRrYaLHXyhM4uggF92jDWOWh78q4yCFUI3J73E0P7LLAT93FayZEZz%2BuGwOAosDdZHG%2BbV&X-Amz-Signature=48683a7f3ec523e4e8f32d87003853e5c3a55139dab0d7d1fad7e4efc4fcb391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
