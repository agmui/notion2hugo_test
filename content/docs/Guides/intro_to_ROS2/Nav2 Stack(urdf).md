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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXGKLWW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIADqYk%2F1WAat8zoiOaH9uyV1%2FpQv9Yiu4LgAcUXQEE7CAiAjdafCPU2Dl%2BJN%2BbQ%2B9iPvIiOALS5t3YqXGuKwwPBnKSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9YMSvOMXfxcynoUaKtwDEPNF77dPYUzCAMWq72xqZmj5eo5Fl9svsAf3E8sib8J9PqtmXzwVMCkKfGkkw2SdqjbRo86i4Q%2Bl7cvoDnFwwVBg7HLYHMBJgx0MxUBo68Gs6bO5BRbQ%2BWC7N5Dsi%2F2XywE8%2FHjPyythCfcXax70AK9QhUnWpoEjG4IH5wHhxRI7vW8sacp2sBpdscbtwGVdG%2BLFE60veQb6oFJZsrMpc67DtjACifCp0eCYvv%2FnLVlzSLPzseJ6XFgxevUlLeaf5RyD7dnqUjex2b1u6JIAa1jhnOYijoBbluteJJObRSPdDtRl2xwUYIkAV8BHZuHW5d9pMbLpsyNdukIjzjE49VEosrJastMTNwsch%2BsSdlUcdnQZX3eVZJLGk7LKjsgH59LhkgUPkTd%2FzMBBeso1qfzpehbsv%2B3AZUVJUuzEb6P9yp07yZwAh5%2BGhjj2N1vUXqq%2FupL1Nu8S%2BooH6Waca8aQrqh%2Fg5I3kCVPIn9huq3mQJmRkmgUNijMgYFOAUav3onZ%2BdHvE06pZ3rKj3apGdrnClOy5mlp9D65fsQQkNB%2FcnyvOyHQjzVRiIWEUC5WXNmxEtEARAvSGQmpCsGme97c3lGG89JXe2d%2BqLwgMq1rOwOTaXZnJUdK6F0wib6ewwY6pgGkwkVWxIJ5pySlr%2BgNFQO1rhCWSnVv32jTFvKhn%2BVUBS3obr1WpgT0kM8XTOUrlkma%2FEjYyNWjJ4aTlge%2Bg8EGcgcqovuXhTp9oeUzp8BZ3hZh74Zu6KlQf3Y6eal5Equo2Pm%2BvPqTrLpcGHPEE2DcU5p8irno77touSBWLW4bQttDzUFn2Br7pHiohCJ%2F37iJA4Qu%2BUXlKrmhSuRhPXyZ%2F9vsevvv&X-Amz-Signature=63d9193d280b7bd7f8eded8eaa8ae2b9f4c388a99fe3b0df87a65f89c86adf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXGKLWW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIADqYk%2F1WAat8zoiOaH9uyV1%2FpQv9Yiu4LgAcUXQEE7CAiAjdafCPU2Dl%2BJN%2BbQ%2B9iPvIiOALS5t3YqXGuKwwPBnKSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9YMSvOMXfxcynoUaKtwDEPNF77dPYUzCAMWq72xqZmj5eo5Fl9svsAf3E8sib8J9PqtmXzwVMCkKfGkkw2SdqjbRo86i4Q%2Bl7cvoDnFwwVBg7HLYHMBJgx0MxUBo68Gs6bO5BRbQ%2BWC7N5Dsi%2F2XywE8%2FHjPyythCfcXax70AK9QhUnWpoEjG4IH5wHhxRI7vW8sacp2sBpdscbtwGVdG%2BLFE60veQb6oFJZsrMpc67DtjACifCp0eCYvv%2FnLVlzSLPzseJ6XFgxevUlLeaf5RyD7dnqUjex2b1u6JIAa1jhnOYijoBbluteJJObRSPdDtRl2xwUYIkAV8BHZuHW5d9pMbLpsyNdukIjzjE49VEosrJastMTNwsch%2BsSdlUcdnQZX3eVZJLGk7LKjsgH59LhkgUPkTd%2FzMBBeso1qfzpehbsv%2B3AZUVJUuzEb6P9yp07yZwAh5%2BGhjj2N1vUXqq%2FupL1Nu8S%2BooH6Waca8aQrqh%2Fg5I3kCVPIn9huq3mQJmRkmgUNijMgYFOAUav3onZ%2BdHvE06pZ3rKj3apGdrnClOy5mlp9D65fsQQkNB%2FcnyvOyHQjzVRiIWEUC5WXNmxEtEARAvSGQmpCsGme97c3lGG89JXe2d%2BqLwgMq1rOwOTaXZnJUdK6F0wib6ewwY6pgGkwkVWxIJ5pySlr%2BgNFQO1rhCWSnVv32jTFvKhn%2BVUBS3obr1WpgT0kM8XTOUrlkma%2FEjYyNWjJ4aTlge%2Bg8EGcgcqovuXhTp9oeUzp8BZ3hZh74Zu6KlQf3Y6eal5Equo2Pm%2BvPqTrLpcGHPEE2DcU5p8irno77touSBWLW4bQttDzUFn2Br7pHiohCJ%2F37iJA4Qu%2BUXlKrmhSuRhPXyZ%2F9vsevvv&X-Amz-Signature=9ee07e26089d6cd69dc77075823fa88ff90759c3be2ea12791b94a7ad817b668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXGKLWW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIADqYk%2F1WAat8zoiOaH9uyV1%2FpQv9Yiu4LgAcUXQEE7CAiAjdafCPU2Dl%2BJN%2BbQ%2B9iPvIiOALS5t3YqXGuKwwPBnKSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9YMSvOMXfxcynoUaKtwDEPNF77dPYUzCAMWq72xqZmj5eo5Fl9svsAf3E8sib8J9PqtmXzwVMCkKfGkkw2SdqjbRo86i4Q%2Bl7cvoDnFwwVBg7HLYHMBJgx0MxUBo68Gs6bO5BRbQ%2BWC7N5Dsi%2F2XywE8%2FHjPyythCfcXax70AK9QhUnWpoEjG4IH5wHhxRI7vW8sacp2sBpdscbtwGVdG%2BLFE60veQb6oFJZsrMpc67DtjACifCp0eCYvv%2FnLVlzSLPzseJ6XFgxevUlLeaf5RyD7dnqUjex2b1u6JIAa1jhnOYijoBbluteJJObRSPdDtRl2xwUYIkAV8BHZuHW5d9pMbLpsyNdukIjzjE49VEosrJastMTNwsch%2BsSdlUcdnQZX3eVZJLGk7LKjsgH59LhkgUPkTd%2FzMBBeso1qfzpehbsv%2B3AZUVJUuzEb6P9yp07yZwAh5%2BGhjj2N1vUXqq%2FupL1Nu8S%2BooH6Waca8aQrqh%2Fg5I3kCVPIn9huq3mQJmRkmgUNijMgYFOAUav3onZ%2BdHvE06pZ3rKj3apGdrnClOy5mlp9D65fsQQkNB%2FcnyvOyHQjzVRiIWEUC5WXNmxEtEARAvSGQmpCsGme97c3lGG89JXe2d%2BqLwgMq1rOwOTaXZnJUdK6F0wib6ewwY6pgGkwkVWxIJ5pySlr%2BgNFQO1rhCWSnVv32jTFvKhn%2BVUBS3obr1WpgT0kM8XTOUrlkma%2FEjYyNWjJ4aTlge%2Bg8EGcgcqovuXhTp9oeUzp8BZ3hZh74Zu6KlQf3Y6eal5Equo2Pm%2BvPqTrLpcGHPEE2DcU5p8irno77touSBWLW4bQttDzUFn2Br7pHiohCJ%2F37iJA4Qu%2BUXlKrmhSuRhPXyZ%2F9vsevvv&X-Amz-Signature=2f7aa9542fb55bda83cdc2be047523e719f8c0ace300822fae1788ad07b9342a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXGKLWW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIADqYk%2F1WAat8zoiOaH9uyV1%2FpQv9Yiu4LgAcUXQEE7CAiAjdafCPU2Dl%2BJN%2BbQ%2B9iPvIiOALS5t3YqXGuKwwPBnKSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9YMSvOMXfxcynoUaKtwDEPNF77dPYUzCAMWq72xqZmj5eo5Fl9svsAf3E8sib8J9PqtmXzwVMCkKfGkkw2SdqjbRo86i4Q%2Bl7cvoDnFwwVBg7HLYHMBJgx0MxUBo68Gs6bO5BRbQ%2BWC7N5Dsi%2F2XywE8%2FHjPyythCfcXax70AK9QhUnWpoEjG4IH5wHhxRI7vW8sacp2sBpdscbtwGVdG%2BLFE60veQb6oFJZsrMpc67DtjACifCp0eCYvv%2FnLVlzSLPzseJ6XFgxevUlLeaf5RyD7dnqUjex2b1u6JIAa1jhnOYijoBbluteJJObRSPdDtRl2xwUYIkAV8BHZuHW5d9pMbLpsyNdukIjzjE49VEosrJastMTNwsch%2BsSdlUcdnQZX3eVZJLGk7LKjsgH59LhkgUPkTd%2FzMBBeso1qfzpehbsv%2B3AZUVJUuzEb6P9yp07yZwAh5%2BGhjj2N1vUXqq%2FupL1Nu8S%2BooH6Waca8aQrqh%2Fg5I3kCVPIn9huq3mQJmRkmgUNijMgYFOAUav3onZ%2BdHvE06pZ3rKj3apGdrnClOy5mlp9D65fsQQkNB%2FcnyvOyHQjzVRiIWEUC5WXNmxEtEARAvSGQmpCsGme97c3lGG89JXe2d%2BqLwgMq1rOwOTaXZnJUdK6F0wib6ewwY6pgGkwkVWxIJ5pySlr%2BgNFQO1rhCWSnVv32jTFvKhn%2BVUBS3obr1WpgT0kM8XTOUrlkma%2FEjYyNWjJ4aTlge%2Bg8EGcgcqovuXhTp9oeUzp8BZ3hZh74Zu6KlQf3Y6eal5Equo2Pm%2BvPqTrLpcGHPEE2DcU5p8irno77touSBWLW4bQttDzUFn2Br7pHiohCJ%2F37iJA4Qu%2BUXlKrmhSuRhPXyZ%2F9vsevvv&X-Amz-Signature=8a17469c3136f2ff55843842faad2498ed4407f59f5ad83359c6e32908b8f1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXGKLWW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIADqYk%2F1WAat8zoiOaH9uyV1%2FpQv9Yiu4LgAcUXQEE7CAiAjdafCPU2Dl%2BJN%2BbQ%2B9iPvIiOALS5t3YqXGuKwwPBnKSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9YMSvOMXfxcynoUaKtwDEPNF77dPYUzCAMWq72xqZmj5eo5Fl9svsAf3E8sib8J9PqtmXzwVMCkKfGkkw2SdqjbRo86i4Q%2Bl7cvoDnFwwVBg7HLYHMBJgx0MxUBo68Gs6bO5BRbQ%2BWC7N5Dsi%2F2XywE8%2FHjPyythCfcXax70AK9QhUnWpoEjG4IH5wHhxRI7vW8sacp2sBpdscbtwGVdG%2BLFE60veQb6oFJZsrMpc67DtjACifCp0eCYvv%2FnLVlzSLPzseJ6XFgxevUlLeaf5RyD7dnqUjex2b1u6JIAa1jhnOYijoBbluteJJObRSPdDtRl2xwUYIkAV8BHZuHW5d9pMbLpsyNdukIjzjE49VEosrJastMTNwsch%2BsSdlUcdnQZX3eVZJLGk7LKjsgH59LhkgUPkTd%2FzMBBeso1qfzpehbsv%2B3AZUVJUuzEb6P9yp07yZwAh5%2BGhjj2N1vUXqq%2FupL1Nu8S%2BooH6Waca8aQrqh%2Fg5I3kCVPIn9huq3mQJmRkmgUNijMgYFOAUav3onZ%2BdHvE06pZ3rKj3apGdrnClOy5mlp9D65fsQQkNB%2FcnyvOyHQjzVRiIWEUC5WXNmxEtEARAvSGQmpCsGme97c3lGG89JXe2d%2BqLwgMq1rOwOTaXZnJUdK6F0wib6ewwY6pgGkwkVWxIJ5pySlr%2BgNFQO1rhCWSnVv32jTFvKhn%2BVUBS3obr1WpgT0kM8XTOUrlkma%2FEjYyNWjJ4aTlge%2Bg8EGcgcqovuXhTp9oeUzp8BZ3hZh74Zu6KlQf3Y6eal5Equo2Pm%2BvPqTrLpcGHPEE2DcU5p8irno77touSBWLW4bQttDzUFn2Br7pHiohCJ%2F37iJA4Qu%2BUXlKrmhSuRhPXyZ%2F9vsevvv&X-Amz-Signature=c2cb862445a2b833ec85ee3fb6dc3384b5e507d8feab5cbb9bb3b248f36d3ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EXGKLWW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIADqYk%2F1WAat8zoiOaH9uyV1%2FpQv9Yiu4LgAcUXQEE7CAiAjdafCPU2Dl%2BJN%2BbQ%2B9iPvIiOALS5t3YqXGuKwwPBnKSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM9YMSvOMXfxcynoUaKtwDEPNF77dPYUzCAMWq72xqZmj5eo5Fl9svsAf3E8sib8J9PqtmXzwVMCkKfGkkw2SdqjbRo86i4Q%2Bl7cvoDnFwwVBg7HLYHMBJgx0MxUBo68Gs6bO5BRbQ%2BWC7N5Dsi%2F2XywE8%2FHjPyythCfcXax70AK9QhUnWpoEjG4IH5wHhxRI7vW8sacp2sBpdscbtwGVdG%2BLFE60veQb6oFJZsrMpc67DtjACifCp0eCYvv%2FnLVlzSLPzseJ6XFgxevUlLeaf5RyD7dnqUjex2b1u6JIAa1jhnOYijoBbluteJJObRSPdDtRl2xwUYIkAV8BHZuHW5d9pMbLpsyNdukIjzjE49VEosrJastMTNwsch%2BsSdlUcdnQZX3eVZJLGk7LKjsgH59LhkgUPkTd%2FzMBBeso1qfzpehbsv%2B3AZUVJUuzEb6P9yp07yZwAh5%2BGhjj2N1vUXqq%2FupL1Nu8S%2BooH6Waca8aQrqh%2Fg5I3kCVPIn9huq3mQJmRkmgUNijMgYFOAUav3onZ%2BdHvE06pZ3rKj3apGdrnClOy5mlp9D65fsQQkNB%2FcnyvOyHQjzVRiIWEUC5WXNmxEtEARAvSGQmpCsGme97c3lGG89JXe2d%2BqLwgMq1rOwOTaXZnJUdK6F0wib6ewwY6pgGkwkVWxIJ5pySlr%2BgNFQO1rhCWSnVv32jTFvKhn%2BVUBS3obr1WpgT0kM8XTOUrlkma%2FEjYyNWjJ4aTlge%2Bg8EGcgcqovuXhTp9oeUzp8BZ3hZh74Zu6KlQf3Y6eal5Equo2Pm%2BvPqTrLpcGHPEE2DcU5p8irno77touSBWLW4bQttDzUFn2Br7pHiohCJ%2F37iJA4Qu%2BUXlKrmhSuRhPXyZ%2F9vsevvv&X-Amz-Signature=1e8e6deeb0c4074245da5bcd8c013557f28adbd4e208f96cde16118fe1663eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
