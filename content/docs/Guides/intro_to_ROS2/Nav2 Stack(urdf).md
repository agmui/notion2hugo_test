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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6MMHZZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEgM2NTJan2BJBY5fpLIIvZMvJou1zoqkHLCjtRDqNxpAiEArY9kXMTuLXlFu3HrRfwEagXGRBSlI2UQ31SP05I%2Fr80qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzasiunfxZdN%2FljbyrcAxVuRlFHcpl2mLR9YSgSMEem6hAwZYyJiiE%2F5a3t6nZe8nUi72nuPgfdhaKodeNll8Pm7RcVmEFfJIZVMFLtw1MF988j1mXge8SKp3PjODigDFsTQHE6Dnxw8XK%2BaznIx055H1O52fi3yLhGQuxKyaJ%2FygPqIxAu2KkU3%2BaFNdkn3uRolHUd%2FvI0%2F3G4v9jTgsiaTYBUvyycwrQvLdoP4EC4tLGOLy8jLh17N5mkZSf%2BwEllXEvHOD2REQb4SuZvHCABj2M2t9Xe4GctG743u60I0mDX8n1eJFO5uAtF4dyZUfrQ9euvI7kq9sxK%2FBmPqvYPIKcTrTtuVN6AmI%2FY%2BtZqfRVWorTNO9ju9ahx925mfQoGTRS01ljwLDAMDLxaUz6TVPFs6LDWWzFMX8Gw30Luggh2Q7R5seMYLuXWNOzmD3MLq%2FuN1JfUht3tasfnkHvXX6FPjdHpXro35c9yaZ6RQmouG2y6yKQ%2FiQm7a3UP0uvJF%2FnZsPT%2FS%2BJm7qKV4yAmFmkFazCV8H1s%2FaP2Y5XZMOHwoykrV%2FP1H9%2B0U3S6cAPVGtky9L0e65RWtxHfA9yjqva5Sp%2B3YezBUX%2BMCfIw4%2B5zOK7o%2F3nT6Y7CZN7chMcNogPcJpZN1LGKMPmjjMEGOqUB%2BAA5W39JeYctDMo62XA5Dwr%2B%2FatEXrUdvFFbkqEHEAO5mc8mFBlZiy9IbYrOLvPUMUe3XW4Wk2GRarK%2BOqRD7V9nYc1IvRXiylMzXSz39ChhSG6sE3lqdL2hNzHNwygnheD8BBYwSt8TVVkPffE6aDdaNDwfGTSfgBYBRAvUA%2BTJF8jULnfSg5Gxiq2TrS3zSoS%2FmPf446jwck8dwHsPq0JTnpT%2B&X-Amz-Signature=fb12b31a5cb5cd3e134f0cbb20ed627ecba2a26370920e1cc535768f414a5a91&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6MMHZZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEgM2NTJan2BJBY5fpLIIvZMvJou1zoqkHLCjtRDqNxpAiEArY9kXMTuLXlFu3HrRfwEagXGRBSlI2UQ31SP05I%2Fr80qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzasiunfxZdN%2FljbyrcAxVuRlFHcpl2mLR9YSgSMEem6hAwZYyJiiE%2F5a3t6nZe8nUi72nuPgfdhaKodeNll8Pm7RcVmEFfJIZVMFLtw1MF988j1mXge8SKp3PjODigDFsTQHE6Dnxw8XK%2BaznIx055H1O52fi3yLhGQuxKyaJ%2FygPqIxAu2KkU3%2BaFNdkn3uRolHUd%2FvI0%2F3G4v9jTgsiaTYBUvyycwrQvLdoP4EC4tLGOLy8jLh17N5mkZSf%2BwEllXEvHOD2REQb4SuZvHCABj2M2t9Xe4GctG743u60I0mDX8n1eJFO5uAtF4dyZUfrQ9euvI7kq9sxK%2FBmPqvYPIKcTrTtuVN6AmI%2FY%2BtZqfRVWorTNO9ju9ahx925mfQoGTRS01ljwLDAMDLxaUz6TVPFs6LDWWzFMX8Gw30Luggh2Q7R5seMYLuXWNOzmD3MLq%2FuN1JfUht3tasfnkHvXX6FPjdHpXro35c9yaZ6RQmouG2y6yKQ%2FiQm7a3UP0uvJF%2FnZsPT%2FS%2BJm7qKV4yAmFmkFazCV8H1s%2FaP2Y5XZMOHwoykrV%2FP1H9%2B0U3S6cAPVGtky9L0e65RWtxHfA9yjqva5Sp%2B3YezBUX%2BMCfIw4%2B5zOK7o%2F3nT6Y7CZN7chMcNogPcJpZN1LGKMPmjjMEGOqUB%2BAA5W39JeYctDMo62XA5Dwr%2B%2FatEXrUdvFFbkqEHEAO5mc8mFBlZiy9IbYrOLvPUMUe3XW4Wk2GRarK%2BOqRD7V9nYc1IvRXiylMzXSz39ChhSG6sE3lqdL2hNzHNwygnheD8BBYwSt8TVVkPffE6aDdaNDwfGTSfgBYBRAvUA%2BTJF8jULnfSg5Gxiq2TrS3zSoS%2FmPf446jwck8dwHsPq0JTnpT%2B&X-Amz-Signature=204dbeb7a6e1db8481fbc7f9fde54a31128a8204eb503d5823400500dae4263d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6MMHZZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEgM2NTJan2BJBY5fpLIIvZMvJou1zoqkHLCjtRDqNxpAiEArY9kXMTuLXlFu3HrRfwEagXGRBSlI2UQ31SP05I%2Fr80qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzasiunfxZdN%2FljbyrcAxVuRlFHcpl2mLR9YSgSMEem6hAwZYyJiiE%2F5a3t6nZe8nUi72nuPgfdhaKodeNll8Pm7RcVmEFfJIZVMFLtw1MF988j1mXge8SKp3PjODigDFsTQHE6Dnxw8XK%2BaznIx055H1O52fi3yLhGQuxKyaJ%2FygPqIxAu2KkU3%2BaFNdkn3uRolHUd%2FvI0%2F3G4v9jTgsiaTYBUvyycwrQvLdoP4EC4tLGOLy8jLh17N5mkZSf%2BwEllXEvHOD2REQb4SuZvHCABj2M2t9Xe4GctG743u60I0mDX8n1eJFO5uAtF4dyZUfrQ9euvI7kq9sxK%2FBmPqvYPIKcTrTtuVN6AmI%2FY%2BtZqfRVWorTNO9ju9ahx925mfQoGTRS01ljwLDAMDLxaUz6TVPFs6LDWWzFMX8Gw30Luggh2Q7R5seMYLuXWNOzmD3MLq%2FuN1JfUht3tasfnkHvXX6FPjdHpXro35c9yaZ6RQmouG2y6yKQ%2FiQm7a3UP0uvJF%2FnZsPT%2FS%2BJm7qKV4yAmFmkFazCV8H1s%2FaP2Y5XZMOHwoykrV%2FP1H9%2B0U3S6cAPVGtky9L0e65RWtxHfA9yjqva5Sp%2B3YezBUX%2BMCfIw4%2B5zOK7o%2F3nT6Y7CZN7chMcNogPcJpZN1LGKMPmjjMEGOqUB%2BAA5W39JeYctDMo62XA5Dwr%2B%2FatEXrUdvFFbkqEHEAO5mc8mFBlZiy9IbYrOLvPUMUe3XW4Wk2GRarK%2BOqRD7V9nYc1IvRXiylMzXSz39ChhSG6sE3lqdL2hNzHNwygnheD8BBYwSt8TVVkPffE6aDdaNDwfGTSfgBYBRAvUA%2BTJF8jULnfSg5Gxiq2TrS3zSoS%2FmPf446jwck8dwHsPq0JTnpT%2B&X-Amz-Signature=28c13f29dcfb57cac5c1688880c089be1eedbb58c1d9056c5a79fc2a578ee43f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6MMHZZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEgM2NTJan2BJBY5fpLIIvZMvJou1zoqkHLCjtRDqNxpAiEArY9kXMTuLXlFu3HrRfwEagXGRBSlI2UQ31SP05I%2Fr80qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzasiunfxZdN%2FljbyrcAxVuRlFHcpl2mLR9YSgSMEem6hAwZYyJiiE%2F5a3t6nZe8nUi72nuPgfdhaKodeNll8Pm7RcVmEFfJIZVMFLtw1MF988j1mXge8SKp3PjODigDFsTQHE6Dnxw8XK%2BaznIx055H1O52fi3yLhGQuxKyaJ%2FygPqIxAu2KkU3%2BaFNdkn3uRolHUd%2FvI0%2F3G4v9jTgsiaTYBUvyycwrQvLdoP4EC4tLGOLy8jLh17N5mkZSf%2BwEllXEvHOD2REQb4SuZvHCABj2M2t9Xe4GctG743u60I0mDX8n1eJFO5uAtF4dyZUfrQ9euvI7kq9sxK%2FBmPqvYPIKcTrTtuVN6AmI%2FY%2BtZqfRVWorTNO9ju9ahx925mfQoGTRS01ljwLDAMDLxaUz6TVPFs6LDWWzFMX8Gw30Luggh2Q7R5seMYLuXWNOzmD3MLq%2FuN1JfUht3tasfnkHvXX6FPjdHpXro35c9yaZ6RQmouG2y6yKQ%2FiQm7a3UP0uvJF%2FnZsPT%2FS%2BJm7qKV4yAmFmkFazCV8H1s%2FaP2Y5XZMOHwoykrV%2FP1H9%2B0U3S6cAPVGtky9L0e65RWtxHfA9yjqva5Sp%2B3YezBUX%2BMCfIw4%2B5zOK7o%2F3nT6Y7CZN7chMcNogPcJpZN1LGKMPmjjMEGOqUB%2BAA5W39JeYctDMo62XA5Dwr%2B%2FatEXrUdvFFbkqEHEAO5mc8mFBlZiy9IbYrOLvPUMUe3XW4Wk2GRarK%2BOqRD7V9nYc1IvRXiylMzXSz39ChhSG6sE3lqdL2hNzHNwygnheD8BBYwSt8TVVkPffE6aDdaNDwfGTSfgBYBRAvUA%2BTJF8jULnfSg5Gxiq2TrS3zSoS%2FmPf446jwck8dwHsPq0JTnpT%2B&X-Amz-Signature=6e3190a160cc32cb6f8089bcfffcd5c4f4d2c81a36d85c6639127f4cbe18812c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6MMHZZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEgM2NTJan2BJBY5fpLIIvZMvJou1zoqkHLCjtRDqNxpAiEArY9kXMTuLXlFu3HrRfwEagXGRBSlI2UQ31SP05I%2Fr80qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzasiunfxZdN%2FljbyrcAxVuRlFHcpl2mLR9YSgSMEem6hAwZYyJiiE%2F5a3t6nZe8nUi72nuPgfdhaKodeNll8Pm7RcVmEFfJIZVMFLtw1MF988j1mXge8SKp3PjODigDFsTQHE6Dnxw8XK%2BaznIx055H1O52fi3yLhGQuxKyaJ%2FygPqIxAu2KkU3%2BaFNdkn3uRolHUd%2FvI0%2F3G4v9jTgsiaTYBUvyycwrQvLdoP4EC4tLGOLy8jLh17N5mkZSf%2BwEllXEvHOD2REQb4SuZvHCABj2M2t9Xe4GctG743u60I0mDX8n1eJFO5uAtF4dyZUfrQ9euvI7kq9sxK%2FBmPqvYPIKcTrTtuVN6AmI%2FY%2BtZqfRVWorTNO9ju9ahx925mfQoGTRS01ljwLDAMDLxaUz6TVPFs6LDWWzFMX8Gw30Luggh2Q7R5seMYLuXWNOzmD3MLq%2FuN1JfUht3tasfnkHvXX6FPjdHpXro35c9yaZ6RQmouG2y6yKQ%2FiQm7a3UP0uvJF%2FnZsPT%2FS%2BJm7qKV4yAmFmkFazCV8H1s%2FaP2Y5XZMOHwoykrV%2FP1H9%2B0U3S6cAPVGtky9L0e65RWtxHfA9yjqva5Sp%2B3YezBUX%2BMCfIw4%2B5zOK7o%2F3nT6Y7CZN7chMcNogPcJpZN1LGKMPmjjMEGOqUB%2BAA5W39JeYctDMo62XA5Dwr%2B%2FatEXrUdvFFbkqEHEAO5mc8mFBlZiy9IbYrOLvPUMUe3XW4Wk2GRarK%2BOqRD7V9nYc1IvRXiylMzXSz39ChhSG6sE3lqdL2hNzHNwygnheD8BBYwSt8TVVkPffE6aDdaNDwfGTSfgBYBRAvUA%2BTJF8jULnfSg5Gxiq2TrS3zSoS%2FmPf446jwck8dwHsPq0JTnpT%2B&X-Amz-Signature=44ee6fd0b6e903b69849e28b7548de1528fea0614a970a04798e12879f07c25b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6MMHZZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIEgM2NTJan2BJBY5fpLIIvZMvJou1zoqkHLCjtRDqNxpAiEArY9kXMTuLXlFu3HrRfwEagXGRBSlI2UQ31SP05I%2Fr80qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzasiunfxZdN%2FljbyrcAxVuRlFHcpl2mLR9YSgSMEem6hAwZYyJiiE%2F5a3t6nZe8nUi72nuPgfdhaKodeNll8Pm7RcVmEFfJIZVMFLtw1MF988j1mXge8SKp3PjODigDFsTQHE6Dnxw8XK%2BaznIx055H1O52fi3yLhGQuxKyaJ%2FygPqIxAu2KkU3%2BaFNdkn3uRolHUd%2FvI0%2F3G4v9jTgsiaTYBUvyycwrQvLdoP4EC4tLGOLy8jLh17N5mkZSf%2BwEllXEvHOD2REQb4SuZvHCABj2M2t9Xe4GctG743u60I0mDX8n1eJFO5uAtF4dyZUfrQ9euvI7kq9sxK%2FBmPqvYPIKcTrTtuVN6AmI%2FY%2BtZqfRVWorTNO9ju9ahx925mfQoGTRS01ljwLDAMDLxaUz6TVPFs6LDWWzFMX8Gw30Luggh2Q7R5seMYLuXWNOzmD3MLq%2FuN1JfUht3tasfnkHvXX6FPjdHpXro35c9yaZ6RQmouG2y6yKQ%2FiQm7a3UP0uvJF%2FnZsPT%2FS%2BJm7qKV4yAmFmkFazCV8H1s%2FaP2Y5XZMOHwoykrV%2FP1H9%2B0U3S6cAPVGtky9L0e65RWtxHfA9yjqva5Sp%2B3YezBUX%2BMCfIw4%2B5zOK7o%2F3nT6Y7CZN7chMcNogPcJpZN1LGKMPmjjMEGOqUB%2BAA5W39JeYctDMo62XA5Dwr%2B%2FatEXrUdvFFbkqEHEAO5mc8mFBlZiy9IbYrOLvPUMUe3XW4Wk2GRarK%2BOqRD7V9nYc1IvRXiylMzXSz39ChhSG6sE3lqdL2hNzHNwygnheD8BBYwSt8TVVkPffE6aDdaNDwfGTSfgBYBRAvUA%2BTJF8jULnfSg5Gxiq2TrS3zSoS%2FmPf446jwck8dwHsPq0JTnpT%2B&X-Amz-Signature=7db1fd957f0fed6c0ec8f503a03233cdd296230f8ab5f479e7e9fd824653a720&X-Amz-SignedHeaders=host&x-id=GetObject)
