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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI2TMNO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOiYUNHJLwG4pyxKoKaJD8v9PB9CoECi7x6hLZd9b4ygIgPS87y9JqNX4NvtrsstSTCj4le77qeUhV02iZqy3Lkccq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcgXVznzlU%2BIY%2BGjCrcA9iCMcMq%2BrjXtQMvxxw8tL9uEMjakwgbv2deJmGe4qn1xfUe19lcQPRCTodYglnnrwv4x2YST9nWyLCBCJYOhdheFFCVkup0etA25P3kDYnY3z8QjoJbyXhW8iYhbvdtck0llEqBhPjViJAu%2F2EBsVSTk0QqS4NPgD0pnvavemsi%2BpV32geZnqEn76qr3jczAJCo6PJmCLlymbIkwSThQmC2dNtGAlpbyAFkrGAO2SuTxUISN0K6PHfPLjgAMkFP%2BVGJl6VHGFHAEcbMY1OBFaVQpg3S4x4TSxQKYpUxU1zPhzG2nQVQSKXFl6KSa8FE9dKtluiet4ZtkV%2FlF2y%2BEfAIk2qoBkjneRwgp4qW97Qqm4HO46ZoLQYeL%2FHhjPlKLylkBnopmFv8HFQ89MiFd9DH9AWLat6z%2FXkbPQtZ1IkwqHPR7OsIZB0hF6MgPOwGZIpTl9yM1Jtryx1%2Fbx29iRglSbmoal%2BIbD6JetPvSuwIAUt8dMWmPGlcDLpITz2sN8ipejF3GiqIiUor%2BjV9QRP1Gxk9vSytExeA%2FIXDYXBEwJuWa0YnlP%2FGWVuOH242QFvZ%2B2bC%2FYD5ug4Bmgol51ogQv4s3flMur4MqkgFWNzZisYd%2FfrWaE0ko9%2BSMNKQ1cEGOqUB5KFPWCjGWUeASmuBDufj%2BXVpxBg%2FpvpsW4u3QUDEnWXPOyAGhidZsk%2F%2FslGsPfcLkEhGEH1a9QbmNRKNO%2BGSlHICHCa21rm9zOLSC8Iip4mi%2FKbclaZf6Et4rRVIYLXVMmr9js9ZYNsHV1P96wAOh7%2BeuG6sC6sb61rzdSBgyz0QlELSArmm%2BPNaJ6hCeQYLknFbdp1%2BahyioZsoHX909hKJUiCG&X-Amz-Signature=0b5dd1966514d8eebb03ab235763d47d1b5602b2e35a0961f89af34b4fe09a65&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI2TMNO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOiYUNHJLwG4pyxKoKaJD8v9PB9CoECi7x6hLZd9b4ygIgPS87y9JqNX4NvtrsstSTCj4le77qeUhV02iZqy3Lkccq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcgXVznzlU%2BIY%2BGjCrcA9iCMcMq%2BrjXtQMvxxw8tL9uEMjakwgbv2deJmGe4qn1xfUe19lcQPRCTodYglnnrwv4x2YST9nWyLCBCJYOhdheFFCVkup0etA25P3kDYnY3z8QjoJbyXhW8iYhbvdtck0llEqBhPjViJAu%2F2EBsVSTk0QqS4NPgD0pnvavemsi%2BpV32geZnqEn76qr3jczAJCo6PJmCLlymbIkwSThQmC2dNtGAlpbyAFkrGAO2SuTxUISN0K6PHfPLjgAMkFP%2BVGJl6VHGFHAEcbMY1OBFaVQpg3S4x4TSxQKYpUxU1zPhzG2nQVQSKXFl6KSa8FE9dKtluiet4ZtkV%2FlF2y%2BEfAIk2qoBkjneRwgp4qW97Qqm4HO46ZoLQYeL%2FHhjPlKLylkBnopmFv8HFQ89MiFd9DH9AWLat6z%2FXkbPQtZ1IkwqHPR7OsIZB0hF6MgPOwGZIpTl9yM1Jtryx1%2Fbx29iRglSbmoal%2BIbD6JetPvSuwIAUt8dMWmPGlcDLpITz2sN8ipejF3GiqIiUor%2BjV9QRP1Gxk9vSytExeA%2FIXDYXBEwJuWa0YnlP%2FGWVuOH242QFvZ%2B2bC%2FYD5ug4Bmgol51ogQv4s3flMur4MqkgFWNzZisYd%2FfrWaE0ko9%2BSMNKQ1cEGOqUB5KFPWCjGWUeASmuBDufj%2BXVpxBg%2FpvpsW4u3QUDEnWXPOyAGhidZsk%2F%2FslGsPfcLkEhGEH1a9QbmNRKNO%2BGSlHICHCa21rm9zOLSC8Iip4mi%2FKbclaZf6Et4rRVIYLXVMmr9js9ZYNsHV1P96wAOh7%2BeuG6sC6sb61rzdSBgyz0QlELSArmm%2BPNaJ6hCeQYLknFbdp1%2BahyioZsoHX909hKJUiCG&X-Amz-Signature=3b483ce493e8d4f244ac23750d7d34f3703cf07c5194de397820b9f9a788adce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI2TMNO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOiYUNHJLwG4pyxKoKaJD8v9PB9CoECi7x6hLZd9b4ygIgPS87y9JqNX4NvtrsstSTCj4le77qeUhV02iZqy3Lkccq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcgXVznzlU%2BIY%2BGjCrcA9iCMcMq%2BrjXtQMvxxw8tL9uEMjakwgbv2deJmGe4qn1xfUe19lcQPRCTodYglnnrwv4x2YST9nWyLCBCJYOhdheFFCVkup0etA25P3kDYnY3z8QjoJbyXhW8iYhbvdtck0llEqBhPjViJAu%2F2EBsVSTk0QqS4NPgD0pnvavemsi%2BpV32geZnqEn76qr3jczAJCo6PJmCLlymbIkwSThQmC2dNtGAlpbyAFkrGAO2SuTxUISN0K6PHfPLjgAMkFP%2BVGJl6VHGFHAEcbMY1OBFaVQpg3S4x4TSxQKYpUxU1zPhzG2nQVQSKXFl6KSa8FE9dKtluiet4ZtkV%2FlF2y%2BEfAIk2qoBkjneRwgp4qW97Qqm4HO46ZoLQYeL%2FHhjPlKLylkBnopmFv8HFQ89MiFd9DH9AWLat6z%2FXkbPQtZ1IkwqHPR7OsIZB0hF6MgPOwGZIpTl9yM1Jtryx1%2Fbx29iRglSbmoal%2BIbD6JetPvSuwIAUt8dMWmPGlcDLpITz2sN8ipejF3GiqIiUor%2BjV9QRP1Gxk9vSytExeA%2FIXDYXBEwJuWa0YnlP%2FGWVuOH242QFvZ%2B2bC%2FYD5ug4Bmgol51ogQv4s3flMur4MqkgFWNzZisYd%2FfrWaE0ko9%2BSMNKQ1cEGOqUB5KFPWCjGWUeASmuBDufj%2BXVpxBg%2FpvpsW4u3QUDEnWXPOyAGhidZsk%2F%2FslGsPfcLkEhGEH1a9QbmNRKNO%2BGSlHICHCa21rm9zOLSC8Iip4mi%2FKbclaZf6Et4rRVIYLXVMmr9js9ZYNsHV1P96wAOh7%2BeuG6sC6sb61rzdSBgyz0QlELSArmm%2BPNaJ6hCeQYLknFbdp1%2BahyioZsoHX909hKJUiCG&X-Amz-Signature=157ceb0863b41df6055033ba0c3c1f73cf4e657da48bf98d3ffe7ba1b55028e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI2TMNO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOiYUNHJLwG4pyxKoKaJD8v9PB9CoECi7x6hLZd9b4ygIgPS87y9JqNX4NvtrsstSTCj4le77qeUhV02iZqy3Lkccq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcgXVznzlU%2BIY%2BGjCrcA9iCMcMq%2BrjXtQMvxxw8tL9uEMjakwgbv2deJmGe4qn1xfUe19lcQPRCTodYglnnrwv4x2YST9nWyLCBCJYOhdheFFCVkup0etA25P3kDYnY3z8QjoJbyXhW8iYhbvdtck0llEqBhPjViJAu%2F2EBsVSTk0QqS4NPgD0pnvavemsi%2BpV32geZnqEn76qr3jczAJCo6PJmCLlymbIkwSThQmC2dNtGAlpbyAFkrGAO2SuTxUISN0K6PHfPLjgAMkFP%2BVGJl6VHGFHAEcbMY1OBFaVQpg3S4x4TSxQKYpUxU1zPhzG2nQVQSKXFl6KSa8FE9dKtluiet4ZtkV%2FlF2y%2BEfAIk2qoBkjneRwgp4qW97Qqm4HO46ZoLQYeL%2FHhjPlKLylkBnopmFv8HFQ89MiFd9DH9AWLat6z%2FXkbPQtZ1IkwqHPR7OsIZB0hF6MgPOwGZIpTl9yM1Jtryx1%2Fbx29iRglSbmoal%2BIbD6JetPvSuwIAUt8dMWmPGlcDLpITz2sN8ipejF3GiqIiUor%2BjV9QRP1Gxk9vSytExeA%2FIXDYXBEwJuWa0YnlP%2FGWVuOH242QFvZ%2B2bC%2FYD5ug4Bmgol51ogQv4s3flMur4MqkgFWNzZisYd%2FfrWaE0ko9%2BSMNKQ1cEGOqUB5KFPWCjGWUeASmuBDufj%2BXVpxBg%2FpvpsW4u3QUDEnWXPOyAGhidZsk%2F%2FslGsPfcLkEhGEH1a9QbmNRKNO%2BGSlHICHCa21rm9zOLSC8Iip4mi%2FKbclaZf6Et4rRVIYLXVMmr9js9ZYNsHV1P96wAOh7%2BeuG6sC6sb61rzdSBgyz0QlELSArmm%2BPNaJ6hCeQYLknFbdp1%2BahyioZsoHX909hKJUiCG&X-Amz-Signature=217ed441a500f5d324c57c6f4bc810da243431ea9e233c853eab61041c14f059&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI2TMNO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOiYUNHJLwG4pyxKoKaJD8v9PB9CoECi7x6hLZd9b4ygIgPS87y9JqNX4NvtrsstSTCj4le77qeUhV02iZqy3Lkccq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcgXVznzlU%2BIY%2BGjCrcA9iCMcMq%2BrjXtQMvxxw8tL9uEMjakwgbv2deJmGe4qn1xfUe19lcQPRCTodYglnnrwv4x2YST9nWyLCBCJYOhdheFFCVkup0etA25P3kDYnY3z8QjoJbyXhW8iYhbvdtck0llEqBhPjViJAu%2F2EBsVSTk0QqS4NPgD0pnvavemsi%2BpV32geZnqEn76qr3jczAJCo6PJmCLlymbIkwSThQmC2dNtGAlpbyAFkrGAO2SuTxUISN0K6PHfPLjgAMkFP%2BVGJl6VHGFHAEcbMY1OBFaVQpg3S4x4TSxQKYpUxU1zPhzG2nQVQSKXFl6KSa8FE9dKtluiet4ZtkV%2FlF2y%2BEfAIk2qoBkjneRwgp4qW97Qqm4HO46ZoLQYeL%2FHhjPlKLylkBnopmFv8HFQ89MiFd9DH9AWLat6z%2FXkbPQtZ1IkwqHPR7OsIZB0hF6MgPOwGZIpTl9yM1Jtryx1%2Fbx29iRglSbmoal%2BIbD6JetPvSuwIAUt8dMWmPGlcDLpITz2sN8ipejF3GiqIiUor%2BjV9QRP1Gxk9vSytExeA%2FIXDYXBEwJuWa0YnlP%2FGWVuOH242QFvZ%2B2bC%2FYD5ug4Bmgol51ogQv4s3flMur4MqkgFWNzZisYd%2FfrWaE0ko9%2BSMNKQ1cEGOqUB5KFPWCjGWUeASmuBDufj%2BXVpxBg%2FpvpsW4u3QUDEnWXPOyAGhidZsk%2F%2FslGsPfcLkEhGEH1a9QbmNRKNO%2BGSlHICHCa21rm9zOLSC8Iip4mi%2FKbclaZf6Et4rRVIYLXVMmr9js9ZYNsHV1P96wAOh7%2BeuG6sC6sb61rzdSBgyz0QlELSArmm%2BPNaJ6hCeQYLknFbdp1%2BahyioZsoHX909hKJUiCG&X-Amz-Signature=b59a39c1027c6e4d526ff2d3ff101c4be1837216f6190460453ca958ac925834&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI2TMNO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOiYUNHJLwG4pyxKoKaJD8v9PB9CoECi7x6hLZd9b4ygIgPS87y9JqNX4NvtrsstSTCj4le77qeUhV02iZqy3Lkccq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcgXVznzlU%2BIY%2BGjCrcA9iCMcMq%2BrjXtQMvxxw8tL9uEMjakwgbv2deJmGe4qn1xfUe19lcQPRCTodYglnnrwv4x2YST9nWyLCBCJYOhdheFFCVkup0etA25P3kDYnY3z8QjoJbyXhW8iYhbvdtck0llEqBhPjViJAu%2F2EBsVSTk0QqS4NPgD0pnvavemsi%2BpV32geZnqEn76qr3jczAJCo6PJmCLlymbIkwSThQmC2dNtGAlpbyAFkrGAO2SuTxUISN0K6PHfPLjgAMkFP%2BVGJl6VHGFHAEcbMY1OBFaVQpg3S4x4TSxQKYpUxU1zPhzG2nQVQSKXFl6KSa8FE9dKtluiet4ZtkV%2FlF2y%2BEfAIk2qoBkjneRwgp4qW97Qqm4HO46ZoLQYeL%2FHhjPlKLylkBnopmFv8HFQ89MiFd9DH9AWLat6z%2FXkbPQtZ1IkwqHPR7OsIZB0hF6MgPOwGZIpTl9yM1Jtryx1%2Fbx29iRglSbmoal%2BIbD6JetPvSuwIAUt8dMWmPGlcDLpITz2sN8ipejF3GiqIiUor%2BjV9QRP1Gxk9vSytExeA%2FIXDYXBEwJuWa0YnlP%2FGWVuOH242QFvZ%2B2bC%2FYD5ug4Bmgol51ogQv4s3flMur4MqkgFWNzZisYd%2FfrWaE0ko9%2BSMNKQ1cEGOqUB5KFPWCjGWUeASmuBDufj%2BXVpxBg%2FpvpsW4u3QUDEnWXPOyAGhidZsk%2F%2FslGsPfcLkEhGEH1a9QbmNRKNO%2BGSlHICHCa21rm9zOLSC8Iip4mi%2FKbclaZf6Et4rRVIYLXVMmr9js9ZYNsHV1P96wAOh7%2BeuG6sC6sb61rzdSBgyz0QlELSArmm%2BPNaJ6hCeQYLknFbdp1%2BahyioZsoHX909hKJUiCG&X-Amz-Signature=aa75b2915decc53eb424fd4b329aa3fe10b8c940dc76883d6df31e0a9d1d93c3&X-Amz-SignedHeaders=host&x-id=GetObject)
