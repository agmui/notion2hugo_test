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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I6VEJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcA%2FVBzZCw4usTKa1kU04bb6dfLtfs8zdfFMq9%2FGa4BwIgWCuPv7O1uCV%2FWWIzrO0CKfO1h1K%2FvfQ%2BiZkOf0zrYWYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFJ%2BkrF%2BJaKq1MKXSrcA%2BLsFYd%2BEiOjCk9ck1jnCZG9wVMuM4Xo3izDeerhr72P3x0%2F%2FT%2FcEVS5LDFW51FQX9W0fFROb5ZmJgRNmh8qqHD5c37AZqHrStHfTJZeWBLVexgyR73Zy30VaZgocilusDxzNyov6TO7rKPAbJaBeKu9pux9nGCLHzDvIiGawr7hQcfUt8kN9Cjkbz9RuGeytYMa7uI6VaQ%2BwEonpATMxFE1AxEGeHQeHjO9IEwky5R2agqc0Q3qWbqYm%2Bwb6qPLZfmHYHUHyRRqfw0CFEUf9lnST9e6gmXWhvlDbEw3b2esrMknBoPad3sXQ9gktujKeWP%2BVw88k4bHlM%2FeE74fXCaA7TiTaEx8hbAoKbu%2FxkBPLTH6aq7VddETh3j%2FYW4jTAryNTrxUKhG5wMi2oozTwBF89KcS6ERz%2BBBMYV7vDiAL8jqJfKCEuXf%2BJhLRG%2B7SSNE0cWLqF8BrISVnfsCJkHswJgSyQtsd5BQk0yV7Kri89TYLage9c4APFy%2B%2FAy%2B3oRDaffEuy0R8JxJk3O4cHdZ%2BtcpM5QnmgbPUXJjUYx4e7cnYpldrAzgGfFj3xjHeULfMRzAusopAGDcRhfmD%2FLNUUK9B8jCC8Gg3IUtGmo1mdLM4C8J1sGTa%2FNwMPeBpcIGOqUBATvo6nPABZiMB6WBStAmefM0hlkAHjJI2ybzFSGEOysG6IDhDKgoXHU82j1rXoYh%2FqpjzCEzb4jI%2B4df8sxj8Tz0xR1DzKPrqxSvPVkB99%2Fyyh08voxcoqR%2FjUVrWm1IBHny8eT5wKESaapuOMGUVnC4Evz2HU6VGHDjfT2q3Ek5E%2FmA22HlWdiZaJclvekwB%2BUdkw1Q9bPp3T1WLiuIEGPbPFni&X-Amz-Signature=ed8b8b4baf7ed88ac38ffd48633fce03abe06e587e7d0b6501c51bdb23ffbf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I6VEJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcA%2FVBzZCw4usTKa1kU04bb6dfLtfs8zdfFMq9%2FGa4BwIgWCuPv7O1uCV%2FWWIzrO0CKfO1h1K%2FvfQ%2BiZkOf0zrYWYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFJ%2BkrF%2BJaKq1MKXSrcA%2BLsFYd%2BEiOjCk9ck1jnCZG9wVMuM4Xo3izDeerhr72P3x0%2F%2FT%2FcEVS5LDFW51FQX9W0fFROb5ZmJgRNmh8qqHD5c37AZqHrStHfTJZeWBLVexgyR73Zy30VaZgocilusDxzNyov6TO7rKPAbJaBeKu9pux9nGCLHzDvIiGawr7hQcfUt8kN9Cjkbz9RuGeytYMa7uI6VaQ%2BwEonpATMxFE1AxEGeHQeHjO9IEwky5R2agqc0Q3qWbqYm%2Bwb6qPLZfmHYHUHyRRqfw0CFEUf9lnST9e6gmXWhvlDbEw3b2esrMknBoPad3sXQ9gktujKeWP%2BVw88k4bHlM%2FeE74fXCaA7TiTaEx8hbAoKbu%2FxkBPLTH6aq7VddETh3j%2FYW4jTAryNTrxUKhG5wMi2oozTwBF89KcS6ERz%2BBBMYV7vDiAL8jqJfKCEuXf%2BJhLRG%2B7SSNE0cWLqF8BrISVnfsCJkHswJgSyQtsd5BQk0yV7Kri89TYLage9c4APFy%2B%2FAy%2B3oRDaffEuy0R8JxJk3O4cHdZ%2BtcpM5QnmgbPUXJjUYx4e7cnYpldrAzgGfFj3xjHeULfMRzAusopAGDcRhfmD%2FLNUUK9B8jCC8Gg3IUtGmo1mdLM4C8J1sGTa%2FNwMPeBpcIGOqUBATvo6nPABZiMB6WBStAmefM0hlkAHjJI2ybzFSGEOysG6IDhDKgoXHU82j1rXoYh%2FqpjzCEzb4jI%2B4df8sxj8Tz0xR1DzKPrqxSvPVkB99%2Fyyh08voxcoqR%2FjUVrWm1IBHny8eT5wKESaapuOMGUVnC4Evz2HU6VGHDjfT2q3Ek5E%2FmA22HlWdiZaJclvekwB%2BUdkw1Q9bPp3T1WLiuIEGPbPFni&X-Amz-Signature=feee46b676588426d1038b0249f2e592fb8d3f9f676cdf48d28be5eda9b9b1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I6VEJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcA%2FVBzZCw4usTKa1kU04bb6dfLtfs8zdfFMq9%2FGa4BwIgWCuPv7O1uCV%2FWWIzrO0CKfO1h1K%2FvfQ%2BiZkOf0zrYWYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFJ%2BkrF%2BJaKq1MKXSrcA%2BLsFYd%2BEiOjCk9ck1jnCZG9wVMuM4Xo3izDeerhr72P3x0%2F%2FT%2FcEVS5LDFW51FQX9W0fFROb5ZmJgRNmh8qqHD5c37AZqHrStHfTJZeWBLVexgyR73Zy30VaZgocilusDxzNyov6TO7rKPAbJaBeKu9pux9nGCLHzDvIiGawr7hQcfUt8kN9Cjkbz9RuGeytYMa7uI6VaQ%2BwEonpATMxFE1AxEGeHQeHjO9IEwky5R2agqc0Q3qWbqYm%2Bwb6qPLZfmHYHUHyRRqfw0CFEUf9lnST9e6gmXWhvlDbEw3b2esrMknBoPad3sXQ9gktujKeWP%2BVw88k4bHlM%2FeE74fXCaA7TiTaEx8hbAoKbu%2FxkBPLTH6aq7VddETh3j%2FYW4jTAryNTrxUKhG5wMi2oozTwBF89KcS6ERz%2BBBMYV7vDiAL8jqJfKCEuXf%2BJhLRG%2B7SSNE0cWLqF8BrISVnfsCJkHswJgSyQtsd5BQk0yV7Kri89TYLage9c4APFy%2B%2FAy%2B3oRDaffEuy0R8JxJk3O4cHdZ%2BtcpM5QnmgbPUXJjUYx4e7cnYpldrAzgGfFj3xjHeULfMRzAusopAGDcRhfmD%2FLNUUK9B8jCC8Gg3IUtGmo1mdLM4C8J1sGTa%2FNwMPeBpcIGOqUBATvo6nPABZiMB6WBStAmefM0hlkAHjJI2ybzFSGEOysG6IDhDKgoXHU82j1rXoYh%2FqpjzCEzb4jI%2B4df8sxj8Tz0xR1DzKPrqxSvPVkB99%2Fyyh08voxcoqR%2FjUVrWm1IBHny8eT5wKESaapuOMGUVnC4Evz2HU6VGHDjfT2q3Ek5E%2FmA22HlWdiZaJclvekwB%2BUdkw1Q9bPp3T1WLiuIEGPbPFni&X-Amz-Signature=ca733c4f1d9332602a9d0d9d833453bd8d5a1d0269c986fdd06bca27a5d9a48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I6VEJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcA%2FVBzZCw4usTKa1kU04bb6dfLtfs8zdfFMq9%2FGa4BwIgWCuPv7O1uCV%2FWWIzrO0CKfO1h1K%2FvfQ%2BiZkOf0zrYWYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFJ%2BkrF%2BJaKq1MKXSrcA%2BLsFYd%2BEiOjCk9ck1jnCZG9wVMuM4Xo3izDeerhr72P3x0%2F%2FT%2FcEVS5LDFW51FQX9W0fFROb5ZmJgRNmh8qqHD5c37AZqHrStHfTJZeWBLVexgyR73Zy30VaZgocilusDxzNyov6TO7rKPAbJaBeKu9pux9nGCLHzDvIiGawr7hQcfUt8kN9Cjkbz9RuGeytYMa7uI6VaQ%2BwEonpATMxFE1AxEGeHQeHjO9IEwky5R2agqc0Q3qWbqYm%2Bwb6qPLZfmHYHUHyRRqfw0CFEUf9lnST9e6gmXWhvlDbEw3b2esrMknBoPad3sXQ9gktujKeWP%2BVw88k4bHlM%2FeE74fXCaA7TiTaEx8hbAoKbu%2FxkBPLTH6aq7VddETh3j%2FYW4jTAryNTrxUKhG5wMi2oozTwBF89KcS6ERz%2BBBMYV7vDiAL8jqJfKCEuXf%2BJhLRG%2B7SSNE0cWLqF8BrISVnfsCJkHswJgSyQtsd5BQk0yV7Kri89TYLage9c4APFy%2B%2FAy%2B3oRDaffEuy0R8JxJk3O4cHdZ%2BtcpM5QnmgbPUXJjUYx4e7cnYpldrAzgGfFj3xjHeULfMRzAusopAGDcRhfmD%2FLNUUK9B8jCC8Gg3IUtGmo1mdLM4C8J1sGTa%2FNwMPeBpcIGOqUBATvo6nPABZiMB6WBStAmefM0hlkAHjJI2ybzFSGEOysG6IDhDKgoXHU82j1rXoYh%2FqpjzCEzb4jI%2B4df8sxj8Tz0xR1DzKPrqxSvPVkB99%2Fyyh08voxcoqR%2FjUVrWm1IBHny8eT5wKESaapuOMGUVnC4Evz2HU6VGHDjfT2q3Ek5E%2FmA22HlWdiZaJclvekwB%2BUdkw1Q9bPp3T1WLiuIEGPbPFni&X-Amz-Signature=71e3bcb7e6b8dc3f5ce017cc110d13242f197d1a0c6ed43a9e8c0b2c5eb6e4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I6VEJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcA%2FVBzZCw4usTKa1kU04bb6dfLtfs8zdfFMq9%2FGa4BwIgWCuPv7O1uCV%2FWWIzrO0CKfO1h1K%2FvfQ%2BiZkOf0zrYWYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFJ%2BkrF%2BJaKq1MKXSrcA%2BLsFYd%2BEiOjCk9ck1jnCZG9wVMuM4Xo3izDeerhr72P3x0%2F%2FT%2FcEVS5LDFW51FQX9W0fFROb5ZmJgRNmh8qqHD5c37AZqHrStHfTJZeWBLVexgyR73Zy30VaZgocilusDxzNyov6TO7rKPAbJaBeKu9pux9nGCLHzDvIiGawr7hQcfUt8kN9Cjkbz9RuGeytYMa7uI6VaQ%2BwEonpATMxFE1AxEGeHQeHjO9IEwky5R2agqc0Q3qWbqYm%2Bwb6qPLZfmHYHUHyRRqfw0CFEUf9lnST9e6gmXWhvlDbEw3b2esrMknBoPad3sXQ9gktujKeWP%2BVw88k4bHlM%2FeE74fXCaA7TiTaEx8hbAoKbu%2FxkBPLTH6aq7VddETh3j%2FYW4jTAryNTrxUKhG5wMi2oozTwBF89KcS6ERz%2BBBMYV7vDiAL8jqJfKCEuXf%2BJhLRG%2B7SSNE0cWLqF8BrISVnfsCJkHswJgSyQtsd5BQk0yV7Kri89TYLage9c4APFy%2B%2FAy%2B3oRDaffEuy0R8JxJk3O4cHdZ%2BtcpM5QnmgbPUXJjUYx4e7cnYpldrAzgGfFj3xjHeULfMRzAusopAGDcRhfmD%2FLNUUK9B8jCC8Gg3IUtGmo1mdLM4C8J1sGTa%2FNwMPeBpcIGOqUBATvo6nPABZiMB6WBStAmefM0hlkAHjJI2ybzFSGEOysG6IDhDKgoXHU82j1rXoYh%2FqpjzCEzb4jI%2B4df8sxj8Tz0xR1DzKPrqxSvPVkB99%2Fyyh08voxcoqR%2FjUVrWm1IBHny8eT5wKESaapuOMGUVnC4Evz2HU6VGHDjfT2q3Ek5E%2FmA22HlWdiZaJclvekwB%2BUdkw1Q9bPp3T1WLiuIEGPbPFni&X-Amz-Signature=dd800df5d097eafa3909acd3a75002d23b0d2bc9c994694b74123ae41468b637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I6VEJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcA%2FVBzZCw4usTKa1kU04bb6dfLtfs8zdfFMq9%2FGa4BwIgWCuPv7O1uCV%2FWWIzrO0CKfO1h1K%2FvfQ%2BiZkOf0zrYWYqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFJ%2BkrF%2BJaKq1MKXSrcA%2BLsFYd%2BEiOjCk9ck1jnCZG9wVMuM4Xo3izDeerhr72P3x0%2F%2FT%2FcEVS5LDFW51FQX9W0fFROb5ZmJgRNmh8qqHD5c37AZqHrStHfTJZeWBLVexgyR73Zy30VaZgocilusDxzNyov6TO7rKPAbJaBeKu9pux9nGCLHzDvIiGawr7hQcfUt8kN9Cjkbz9RuGeytYMa7uI6VaQ%2BwEonpATMxFE1AxEGeHQeHjO9IEwky5R2agqc0Q3qWbqYm%2Bwb6qPLZfmHYHUHyRRqfw0CFEUf9lnST9e6gmXWhvlDbEw3b2esrMknBoPad3sXQ9gktujKeWP%2BVw88k4bHlM%2FeE74fXCaA7TiTaEx8hbAoKbu%2FxkBPLTH6aq7VddETh3j%2FYW4jTAryNTrxUKhG5wMi2oozTwBF89KcS6ERz%2BBBMYV7vDiAL8jqJfKCEuXf%2BJhLRG%2B7SSNE0cWLqF8BrISVnfsCJkHswJgSyQtsd5BQk0yV7Kri89TYLage9c4APFy%2B%2FAy%2B3oRDaffEuy0R8JxJk3O4cHdZ%2BtcpM5QnmgbPUXJjUYx4e7cnYpldrAzgGfFj3xjHeULfMRzAusopAGDcRhfmD%2FLNUUK9B8jCC8Gg3IUtGmo1mdLM4C8J1sGTa%2FNwMPeBpcIGOqUBATvo6nPABZiMB6WBStAmefM0hlkAHjJI2ybzFSGEOysG6IDhDKgoXHU82j1rXoYh%2FqpjzCEzb4jI%2B4df8sxj8Tz0xR1DzKPrqxSvPVkB99%2Fyyh08voxcoqR%2FjUVrWm1IBHny8eT5wKESaapuOMGUVnC4Evz2HU6VGHDjfT2q3Ek5E%2FmA22HlWdiZaJclvekwB%2BUdkw1Q9bPp3T1WLiuIEGPbPFni&X-Amz-Signature=8c3a01d8c158740061baf9e7c0c0378de05a5ed3dcdb5dd7995bae8bac57eb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
