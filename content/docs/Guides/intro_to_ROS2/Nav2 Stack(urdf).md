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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636APQDZR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKrZcxsVqQ%2BtXKWkANoH84%2BsC6bbMsaTLiGIPofHuNgIgNMX%2BtFIUVlpStLIP5n5mIvdzKwVEZIodrbofTKoq3DQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8z%2FBwSYat8tanb%2FyrcA5G0LwjIVThfLg7Wi63DcibC0urBBQm3CMUZd1uexncdANtiGPHegC%2FuAWqBDm9cZ8Sfque8IyJfRLtreZFsE5dds%2FIh1%2FmC3dWCJNb0Q17R5p9Em52SjS6VAi7hB5yFt9UbmkXG4%2FEDSLx4ISbrEWshkd37RIPbnxsBnkX12Ww2vKaF1II3DBtkZpPI2x2O0AEGFeuheCJcgB%2BCMAaTaxZk%2FX7GaBDUe41s0LxdLeja0d%2FHkORNxwKu%2Fh2ug4f2LmfjbkqlAYzm%2FNbaNH1VhVxX%2Bm%2F4QGssAPvC7oqxDADNDFz%2Ft6dZiKD62oBmCcQP226CWJ3Su1o88S13WKlPzDaUEzWzh5Elj4HBUZe38CVjJUK5Mx7hIdLc3Ikd8VFQCkMk%2F%2FxNoFKlifZVXRhTD%2B8bTy6gq9Rrfg8FcmqEA9CMqjUtBzU5%2BITBHuhYLwVkrR%2BPLevM%2FRfywCcyLsnJh2lJOX9FVPPJFuBX7qbO4WdxzvHYkMQGW52uv26l0jn45o%2FPEq%2Fw0lafPmiTB5j1hBjTMHaUAYVSAvxg8ohaFXClAZuoexribWYEbdGjJAKFPqoFRjzOivOEi6%2FbElhfCVU5UinGGpHieIffjjtweZQvh8S7z7x%2Fm%2F0QFu2PMOy6870GOqUBSmWyQiJygbZY7ZgJItg2oH4z6kHdiZUbEWBod3IWB7ATJYyHemcCB4LEG%2B1powhPI2T%2FFLS9zVaBNRROT%2BhrD%2Bt32xlsn%2BrtHDz3RLZZyMY8jlA0FjUKodVLENzteAC1nt7lM08TXU9cOtK%2B1kupp3czaRDhlvVzyPuMqlWP5K0vH3RHtnXKCzTrESsYrDwefM%2BJ83DpV5G4xNMYuSrOcA6WZulz&X-Amz-Signature=2fb409d7f04791e306f03dc5d6061d6b01b51e88bac7a9c24fe2e5e42d197371&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636APQDZR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKrZcxsVqQ%2BtXKWkANoH84%2BsC6bbMsaTLiGIPofHuNgIgNMX%2BtFIUVlpStLIP5n5mIvdzKwVEZIodrbofTKoq3DQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8z%2FBwSYat8tanb%2FyrcA5G0LwjIVThfLg7Wi63DcibC0urBBQm3CMUZd1uexncdANtiGPHegC%2FuAWqBDm9cZ8Sfque8IyJfRLtreZFsE5dds%2FIh1%2FmC3dWCJNb0Q17R5p9Em52SjS6VAi7hB5yFt9UbmkXG4%2FEDSLx4ISbrEWshkd37RIPbnxsBnkX12Ww2vKaF1II3DBtkZpPI2x2O0AEGFeuheCJcgB%2BCMAaTaxZk%2FX7GaBDUe41s0LxdLeja0d%2FHkORNxwKu%2Fh2ug4f2LmfjbkqlAYzm%2FNbaNH1VhVxX%2Bm%2F4QGssAPvC7oqxDADNDFz%2Ft6dZiKD62oBmCcQP226CWJ3Su1o88S13WKlPzDaUEzWzh5Elj4HBUZe38CVjJUK5Mx7hIdLc3Ikd8VFQCkMk%2F%2FxNoFKlifZVXRhTD%2B8bTy6gq9Rrfg8FcmqEA9CMqjUtBzU5%2BITBHuhYLwVkrR%2BPLevM%2FRfywCcyLsnJh2lJOX9FVPPJFuBX7qbO4WdxzvHYkMQGW52uv26l0jn45o%2FPEq%2Fw0lafPmiTB5j1hBjTMHaUAYVSAvxg8ohaFXClAZuoexribWYEbdGjJAKFPqoFRjzOivOEi6%2FbElhfCVU5UinGGpHieIffjjtweZQvh8S7z7x%2Fm%2F0QFu2PMOy6870GOqUBSmWyQiJygbZY7ZgJItg2oH4z6kHdiZUbEWBod3IWB7ATJYyHemcCB4LEG%2B1powhPI2T%2FFLS9zVaBNRROT%2BhrD%2Bt32xlsn%2BrtHDz3RLZZyMY8jlA0FjUKodVLENzteAC1nt7lM08TXU9cOtK%2B1kupp3czaRDhlvVzyPuMqlWP5K0vH3RHtnXKCzTrESsYrDwefM%2BJ83DpV5G4xNMYuSrOcA6WZulz&X-Amz-Signature=43ab925a2f6aa3a7960b784a7254d5981bc89a0860d94da024fea61a576415e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636APQDZR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKrZcxsVqQ%2BtXKWkANoH84%2BsC6bbMsaTLiGIPofHuNgIgNMX%2BtFIUVlpStLIP5n5mIvdzKwVEZIodrbofTKoq3DQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8z%2FBwSYat8tanb%2FyrcA5G0LwjIVThfLg7Wi63DcibC0urBBQm3CMUZd1uexncdANtiGPHegC%2FuAWqBDm9cZ8Sfque8IyJfRLtreZFsE5dds%2FIh1%2FmC3dWCJNb0Q17R5p9Em52SjS6VAi7hB5yFt9UbmkXG4%2FEDSLx4ISbrEWshkd37RIPbnxsBnkX12Ww2vKaF1II3DBtkZpPI2x2O0AEGFeuheCJcgB%2BCMAaTaxZk%2FX7GaBDUe41s0LxdLeja0d%2FHkORNxwKu%2Fh2ug4f2LmfjbkqlAYzm%2FNbaNH1VhVxX%2Bm%2F4QGssAPvC7oqxDADNDFz%2Ft6dZiKD62oBmCcQP226CWJ3Su1o88S13WKlPzDaUEzWzh5Elj4HBUZe38CVjJUK5Mx7hIdLc3Ikd8VFQCkMk%2F%2FxNoFKlifZVXRhTD%2B8bTy6gq9Rrfg8FcmqEA9CMqjUtBzU5%2BITBHuhYLwVkrR%2BPLevM%2FRfywCcyLsnJh2lJOX9FVPPJFuBX7qbO4WdxzvHYkMQGW52uv26l0jn45o%2FPEq%2Fw0lafPmiTB5j1hBjTMHaUAYVSAvxg8ohaFXClAZuoexribWYEbdGjJAKFPqoFRjzOivOEi6%2FbElhfCVU5UinGGpHieIffjjtweZQvh8S7z7x%2Fm%2F0QFu2PMOy6870GOqUBSmWyQiJygbZY7ZgJItg2oH4z6kHdiZUbEWBod3IWB7ATJYyHemcCB4LEG%2B1powhPI2T%2FFLS9zVaBNRROT%2BhrD%2Bt32xlsn%2BrtHDz3RLZZyMY8jlA0FjUKodVLENzteAC1nt7lM08TXU9cOtK%2B1kupp3czaRDhlvVzyPuMqlWP5K0vH3RHtnXKCzTrESsYrDwefM%2BJ83DpV5G4xNMYuSrOcA6WZulz&X-Amz-Signature=e2ec6b3aacf297a388d00aacd012ac4abac4d9986e35e46337c40d8416234e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636APQDZR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKrZcxsVqQ%2BtXKWkANoH84%2BsC6bbMsaTLiGIPofHuNgIgNMX%2BtFIUVlpStLIP5n5mIvdzKwVEZIodrbofTKoq3DQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8z%2FBwSYat8tanb%2FyrcA5G0LwjIVThfLg7Wi63DcibC0urBBQm3CMUZd1uexncdANtiGPHegC%2FuAWqBDm9cZ8Sfque8IyJfRLtreZFsE5dds%2FIh1%2FmC3dWCJNb0Q17R5p9Em52SjS6VAi7hB5yFt9UbmkXG4%2FEDSLx4ISbrEWshkd37RIPbnxsBnkX12Ww2vKaF1II3DBtkZpPI2x2O0AEGFeuheCJcgB%2BCMAaTaxZk%2FX7GaBDUe41s0LxdLeja0d%2FHkORNxwKu%2Fh2ug4f2LmfjbkqlAYzm%2FNbaNH1VhVxX%2Bm%2F4QGssAPvC7oqxDADNDFz%2Ft6dZiKD62oBmCcQP226CWJ3Su1o88S13WKlPzDaUEzWzh5Elj4HBUZe38CVjJUK5Mx7hIdLc3Ikd8VFQCkMk%2F%2FxNoFKlifZVXRhTD%2B8bTy6gq9Rrfg8FcmqEA9CMqjUtBzU5%2BITBHuhYLwVkrR%2BPLevM%2FRfywCcyLsnJh2lJOX9FVPPJFuBX7qbO4WdxzvHYkMQGW52uv26l0jn45o%2FPEq%2Fw0lafPmiTB5j1hBjTMHaUAYVSAvxg8ohaFXClAZuoexribWYEbdGjJAKFPqoFRjzOivOEi6%2FbElhfCVU5UinGGpHieIffjjtweZQvh8S7z7x%2Fm%2F0QFu2PMOy6870GOqUBSmWyQiJygbZY7ZgJItg2oH4z6kHdiZUbEWBod3IWB7ATJYyHemcCB4LEG%2B1powhPI2T%2FFLS9zVaBNRROT%2BhrD%2Bt32xlsn%2BrtHDz3RLZZyMY8jlA0FjUKodVLENzteAC1nt7lM08TXU9cOtK%2B1kupp3czaRDhlvVzyPuMqlWP5K0vH3RHtnXKCzTrESsYrDwefM%2BJ83DpV5G4xNMYuSrOcA6WZulz&X-Amz-Signature=c20f0a08ed7843f5ea809003377ce302b9fb9891c061d747a2c46d7cc86e986f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636APQDZR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKrZcxsVqQ%2BtXKWkANoH84%2BsC6bbMsaTLiGIPofHuNgIgNMX%2BtFIUVlpStLIP5n5mIvdzKwVEZIodrbofTKoq3DQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8z%2FBwSYat8tanb%2FyrcA5G0LwjIVThfLg7Wi63DcibC0urBBQm3CMUZd1uexncdANtiGPHegC%2FuAWqBDm9cZ8Sfque8IyJfRLtreZFsE5dds%2FIh1%2FmC3dWCJNb0Q17R5p9Em52SjS6VAi7hB5yFt9UbmkXG4%2FEDSLx4ISbrEWshkd37RIPbnxsBnkX12Ww2vKaF1II3DBtkZpPI2x2O0AEGFeuheCJcgB%2BCMAaTaxZk%2FX7GaBDUe41s0LxdLeja0d%2FHkORNxwKu%2Fh2ug4f2LmfjbkqlAYzm%2FNbaNH1VhVxX%2Bm%2F4QGssAPvC7oqxDADNDFz%2Ft6dZiKD62oBmCcQP226CWJ3Su1o88S13WKlPzDaUEzWzh5Elj4HBUZe38CVjJUK5Mx7hIdLc3Ikd8VFQCkMk%2F%2FxNoFKlifZVXRhTD%2B8bTy6gq9Rrfg8FcmqEA9CMqjUtBzU5%2BITBHuhYLwVkrR%2BPLevM%2FRfywCcyLsnJh2lJOX9FVPPJFuBX7qbO4WdxzvHYkMQGW52uv26l0jn45o%2FPEq%2Fw0lafPmiTB5j1hBjTMHaUAYVSAvxg8ohaFXClAZuoexribWYEbdGjJAKFPqoFRjzOivOEi6%2FbElhfCVU5UinGGpHieIffjjtweZQvh8S7z7x%2Fm%2F0QFu2PMOy6870GOqUBSmWyQiJygbZY7ZgJItg2oH4z6kHdiZUbEWBod3IWB7ATJYyHemcCB4LEG%2B1powhPI2T%2FFLS9zVaBNRROT%2BhrD%2Bt32xlsn%2BrtHDz3RLZZyMY8jlA0FjUKodVLENzteAC1nt7lM08TXU9cOtK%2B1kupp3czaRDhlvVzyPuMqlWP5K0vH3RHtnXKCzTrESsYrDwefM%2BJ83DpV5G4xNMYuSrOcA6WZulz&X-Amz-Signature=76c5e91739bc492dacd1c0bc01bcebfd674cd0b20897a3d9f65685e30188faa9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636APQDZR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJKrZcxsVqQ%2BtXKWkANoH84%2BsC6bbMsaTLiGIPofHuNgIgNMX%2BtFIUVlpStLIP5n5mIvdzKwVEZIodrbofTKoq3DQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDA8z%2FBwSYat8tanb%2FyrcA5G0LwjIVThfLg7Wi63DcibC0urBBQm3CMUZd1uexncdANtiGPHegC%2FuAWqBDm9cZ8Sfque8IyJfRLtreZFsE5dds%2FIh1%2FmC3dWCJNb0Q17R5p9Em52SjS6VAi7hB5yFt9UbmkXG4%2FEDSLx4ISbrEWshkd37RIPbnxsBnkX12Ww2vKaF1II3DBtkZpPI2x2O0AEGFeuheCJcgB%2BCMAaTaxZk%2FX7GaBDUe41s0LxdLeja0d%2FHkORNxwKu%2Fh2ug4f2LmfjbkqlAYzm%2FNbaNH1VhVxX%2Bm%2F4QGssAPvC7oqxDADNDFz%2Ft6dZiKD62oBmCcQP226CWJ3Su1o88S13WKlPzDaUEzWzh5Elj4HBUZe38CVjJUK5Mx7hIdLc3Ikd8VFQCkMk%2F%2FxNoFKlifZVXRhTD%2B8bTy6gq9Rrfg8FcmqEA9CMqjUtBzU5%2BITBHuhYLwVkrR%2BPLevM%2FRfywCcyLsnJh2lJOX9FVPPJFuBX7qbO4WdxzvHYkMQGW52uv26l0jn45o%2FPEq%2Fw0lafPmiTB5j1hBjTMHaUAYVSAvxg8ohaFXClAZuoexribWYEbdGjJAKFPqoFRjzOivOEi6%2FbElhfCVU5UinGGpHieIffjjtweZQvh8S7z7x%2Fm%2F0QFu2PMOy6870GOqUBSmWyQiJygbZY7ZgJItg2oH4z6kHdiZUbEWBod3IWB7ATJYyHemcCB4LEG%2B1powhPI2T%2FFLS9zVaBNRROT%2BhrD%2Bt32xlsn%2BrtHDz3RLZZyMY8jlA0FjUKodVLENzteAC1nt7lM08TXU9cOtK%2B1kupp3czaRDhlvVzyPuMqlWP5K0vH3RHtnXKCzTrESsYrDwefM%2BJ83DpV5G4xNMYuSrOcA6WZulz&X-Amz-Signature=ec9fa82c39b14cd82acdf9caa39fd53f6d168e06ee0f95129dde6a94861a6d42&X-Amz-SignedHeaders=host&x-id=GetObject)
