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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDRDKSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBUzai7KjcBL09OYRL08dwP6Gr5hfQ3GNEbUPSioArtQAiBOSR5J5Ot8KRsRHzUtAp0qEPoUPnfHW2p9YfPQ48Fnsir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMmvrGkNFCEmFLzykzKtwDRWFXEH4s%2BO4cH6o0w%2FG43wSwBnotjAOv2QqyBEfkow3dOWjbz%2FfCFeuOFX%2BnD4dXZHjztIT7w2zt%2B9RKZAZ3u6DXCyC7sYg1H8Ts2ynx9xpK90nRNiMFvp%2B9tde0JkBGbSNVkC5ozZGqLaweicmOCBEF2cFSOx%2Fr10guHWyJpZKiZC6enTR%2Fdl8o26sj15ul2ZGuzmz%2Fkz7qsz2w90pHu3mKiuONmS9YRrb1nbfX8HIIcvpc0WLLDv1NjhEIcrKfyrTbNCuAnG76wJNC4ro7YQAZHk1F8Hlp7GUmM5YZDrB067FnlHbszy%2B66aA7OQFa0fudx5lMWUtBxHAcyZ%2FkYYHG%2BDvJkMTcC12zZex4Hd8oigCvngiYYuOeZ83%2FVbN%2FObOhUKlDazkwbQumbdPYieP%2FRdBGW7ZWa%2FyuIJhHhIaFE2s5CWpQvDOSHygcUSOSP9jXcRyURxD6TBQy26%2FNPiEVmapwqAJvW9Fj1R7JnG5fyv30ssAv%2FgHusoDIW5UJMLgjjZ589CZdk%2F78UBdD%2FJuuSpN1bKuXaaMymBPKOzkTTSGumUV6zwYyRB8186OWKYXLlGOFk5tKWjUIxkjorALkFokFI7zvz0BRdJLdfZC%2B3dDUQE1S1n3FbsMwjLOxvgY6pgEbCPiCIOEV%2FlqQXgzA6M9v9uxIitXSkQHORGaTAleRaSaLmRMHg7bEmZ%2F6sSnU3u0VM%2BnYGXGRE7qwsF63Wo%2BOxgo2nl2Cc%2FKJyjSaqZn0l4csD%2FHZNhCh10lpkHLZ7qWIR2W%2BVdY9v3vYa0PPdw8jxBbVcTVho8uOsxFN7tPBeHYuwTFCcj%2FkmABue9dM%2FatYe2QvUwwtYKlOT8jLdXt546pjBha9&X-Amz-Signature=b3b8c4774d540deadab60ede1d987ed3d4ed20a4e27821feb335775c09a2c73d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDRDKSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBUzai7KjcBL09OYRL08dwP6Gr5hfQ3GNEbUPSioArtQAiBOSR5J5Ot8KRsRHzUtAp0qEPoUPnfHW2p9YfPQ48Fnsir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMmvrGkNFCEmFLzykzKtwDRWFXEH4s%2BO4cH6o0w%2FG43wSwBnotjAOv2QqyBEfkow3dOWjbz%2FfCFeuOFX%2BnD4dXZHjztIT7w2zt%2B9RKZAZ3u6DXCyC7sYg1H8Ts2ynx9xpK90nRNiMFvp%2B9tde0JkBGbSNVkC5ozZGqLaweicmOCBEF2cFSOx%2Fr10guHWyJpZKiZC6enTR%2Fdl8o26sj15ul2ZGuzmz%2Fkz7qsz2w90pHu3mKiuONmS9YRrb1nbfX8HIIcvpc0WLLDv1NjhEIcrKfyrTbNCuAnG76wJNC4ro7YQAZHk1F8Hlp7GUmM5YZDrB067FnlHbszy%2B66aA7OQFa0fudx5lMWUtBxHAcyZ%2FkYYHG%2BDvJkMTcC12zZex4Hd8oigCvngiYYuOeZ83%2FVbN%2FObOhUKlDazkwbQumbdPYieP%2FRdBGW7ZWa%2FyuIJhHhIaFE2s5CWpQvDOSHygcUSOSP9jXcRyURxD6TBQy26%2FNPiEVmapwqAJvW9Fj1R7JnG5fyv30ssAv%2FgHusoDIW5UJMLgjjZ589CZdk%2F78UBdD%2FJuuSpN1bKuXaaMymBPKOzkTTSGumUV6zwYyRB8186OWKYXLlGOFk5tKWjUIxkjorALkFokFI7zvz0BRdJLdfZC%2B3dDUQE1S1n3FbsMwjLOxvgY6pgEbCPiCIOEV%2FlqQXgzA6M9v9uxIitXSkQHORGaTAleRaSaLmRMHg7bEmZ%2F6sSnU3u0VM%2BnYGXGRE7qwsF63Wo%2BOxgo2nl2Cc%2FKJyjSaqZn0l4csD%2FHZNhCh10lpkHLZ7qWIR2W%2BVdY9v3vYa0PPdw8jxBbVcTVho8uOsxFN7tPBeHYuwTFCcj%2FkmABue9dM%2FatYe2QvUwwtYKlOT8jLdXt546pjBha9&X-Amz-Signature=bbf6157f44bbdf29536cfafd4b485b7da854eba0fc86b353a3c9c8de15737d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDRDKSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBUzai7KjcBL09OYRL08dwP6Gr5hfQ3GNEbUPSioArtQAiBOSR5J5Ot8KRsRHzUtAp0qEPoUPnfHW2p9YfPQ48Fnsir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMmvrGkNFCEmFLzykzKtwDRWFXEH4s%2BO4cH6o0w%2FG43wSwBnotjAOv2QqyBEfkow3dOWjbz%2FfCFeuOFX%2BnD4dXZHjztIT7w2zt%2B9RKZAZ3u6DXCyC7sYg1H8Ts2ynx9xpK90nRNiMFvp%2B9tde0JkBGbSNVkC5ozZGqLaweicmOCBEF2cFSOx%2Fr10guHWyJpZKiZC6enTR%2Fdl8o26sj15ul2ZGuzmz%2Fkz7qsz2w90pHu3mKiuONmS9YRrb1nbfX8HIIcvpc0WLLDv1NjhEIcrKfyrTbNCuAnG76wJNC4ro7YQAZHk1F8Hlp7GUmM5YZDrB067FnlHbszy%2B66aA7OQFa0fudx5lMWUtBxHAcyZ%2FkYYHG%2BDvJkMTcC12zZex4Hd8oigCvngiYYuOeZ83%2FVbN%2FObOhUKlDazkwbQumbdPYieP%2FRdBGW7ZWa%2FyuIJhHhIaFE2s5CWpQvDOSHygcUSOSP9jXcRyURxD6TBQy26%2FNPiEVmapwqAJvW9Fj1R7JnG5fyv30ssAv%2FgHusoDIW5UJMLgjjZ589CZdk%2F78UBdD%2FJuuSpN1bKuXaaMymBPKOzkTTSGumUV6zwYyRB8186OWKYXLlGOFk5tKWjUIxkjorALkFokFI7zvz0BRdJLdfZC%2B3dDUQE1S1n3FbsMwjLOxvgY6pgEbCPiCIOEV%2FlqQXgzA6M9v9uxIitXSkQHORGaTAleRaSaLmRMHg7bEmZ%2F6sSnU3u0VM%2BnYGXGRE7qwsF63Wo%2BOxgo2nl2Cc%2FKJyjSaqZn0l4csD%2FHZNhCh10lpkHLZ7qWIR2W%2BVdY9v3vYa0PPdw8jxBbVcTVho8uOsxFN7tPBeHYuwTFCcj%2FkmABue9dM%2FatYe2QvUwwtYKlOT8jLdXt546pjBha9&X-Amz-Signature=39e500332458036ff274afe330b8a8af996acff9819aa33748fe416a5b1d9b63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDRDKSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBUzai7KjcBL09OYRL08dwP6Gr5hfQ3GNEbUPSioArtQAiBOSR5J5Ot8KRsRHzUtAp0qEPoUPnfHW2p9YfPQ48Fnsir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMmvrGkNFCEmFLzykzKtwDRWFXEH4s%2BO4cH6o0w%2FG43wSwBnotjAOv2QqyBEfkow3dOWjbz%2FfCFeuOFX%2BnD4dXZHjztIT7w2zt%2B9RKZAZ3u6DXCyC7sYg1H8Ts2ynx9xpK90nRNiMFvp%2B9tde0JkBGbSNVkC5ozZGqLaweicmOCBEF2cFSOx%2Fr10guHWyJpZKiZC6enTR%2Fdl8o26sj15ul2ZGuzmz%2Fkz7qsz2w90pHu3mKiuONmS9YRrb1nbfX8HIIcvpc0WLLDv1NjhEIcrKfyrTbNCuAnG76wJNC4ro7YQAZHk1F8Hlp7GUmM5YZDrB067FnlHbszy%2B66aA7OQFa0fudx5lMWUtBxHAcyZ%2FkYYHG%2BDvJkMTcC12zZex4Hd8oigCvngiYYuOeZ83%2FVbN%2FObOhUKlDazkwbQumbdPYieP%2FRdBGW7ZWa%2FyuIJhHhIaFE2s5CWpQvDOSHygcUSOSP9jXcRyURxD6TBQy26%2FNPiEVmapwqAJvW9Fj1R7JnG5fyv30ssAv%2FgHusoDIW5UJMLgjjZ589CZdk%2F78UBdD%2FJuuSpN1bKuXaaMymBPKOzkTTSGumUV6zwYyRB8186OWKYXLlGOFk5tKWjUIxkjorALkFokFI7zvz0BRdJLdfZC%2B3dDUQE1S1n3FbsMwjLOxvgY6pgEbCPiCIOEV%2FlqQXgzA6M9v9uxIitXSkQHORGaTAleRaSaLmRMHg7bEmZ%2F6sSnU3u0VM%2BnYGXGRE7qwsF63Wo%2BOxgo2nl2Cc%2FKJyjSaqZn0l4csD%2FHZNhCh10lpkHLZ7qWIR2W%2BVdY9v3vYa0PPdw8jxBbVcTVho8uOsxFN7tPBeHYuwTFCcj%2FkmABue9dM%2FatYe2QvUwwtYKlOT8jLdXt546pjBha9&X-Amz-Signature=55eadfb241c08c0c70fd55e5054dba4bb43d51b9f9ebbb600b267895f4ad9bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDRDKSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBUzai7KjcBL09OYRL08dwP6Gr5hfQ3GNEbUPSioArtQAiBOSR5J5Ot8KRsRHzUtAp0qEPoUPnfHW2p9YfPQ48Fnsir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMmvrGkNFCEmFLzykzKtwDRWFXEH4s%2BO4cH6o0w%2FG43wSwBnotjAOv2QqyBEfkow3dOWjbz%2FfCFeuOFX%2BnD4dXZHjztIT7w2zt%2B9RKZAZ3u6DXCyC7sYg1H8Ts2ynx9xpK90nRNiMFvp%2B9tde0JkBGbSNVkC5ozZGqLaweicmOCBEF2cFSOx%2Fr10guHWyJpZKiZC6enTR%2Fdl8o26sj15ul2ZGuzmz%2Fkz7qsz2w90pHu3mKiuONmS9YRrb1nbfX8HIIcvpc0WLLDv1NjhEIcrKfyrTbNCuAnG76wJNC4ro7YQAZHk1F8Hlp7GUmM5YZDrB067FnlHbszy%2B66aA7OQFa0fudx5lMWUtBxHAcyZ%2FkYYHG%2BDvJkMTcC12zZex4Hd8oigCvngiYYuOeZ83%2FVbN%2FObOhUKlDazkwbQumbdPYieP%2FRdBGW7ZWa%2FyuIJhHhIaFE2s5CWpQvDOSHygcUSOSP9jXcRyURxD6TBQy26%2FNPiEVmapwqAJvW9Fj1R7JnG5fyv30ssAv%2FgHusoDIW5UJMLgjjZ589CZdk%2F78UBdD%2FJuuSpN1bKuXaaMymBPKOzkTTSGumUV6zwYyRB8186OWKYXLlGOFk5tKWjUIxkjorALkFokFI7zvz0BRdJLdfZC%2B3dDUQE1S1n3FbsMwjLOxvgY6pgEbCPiCIOEV%2FlqQXgzA6M9v9uxIitXSkQHORGaTAleRaSaLmRMHg7bEmZ%2F6sSnU3u0VM%2BnYGXGRE7qwsF63Wo%2BOxgo2nl2Cc%2FKJyjSaqZn0l4csD%2FHZNhCh10lpkHLZ7qWIR2W%2BVdY9v3vYa0PPdw8jxBbVcTVho8uOsxFN7tPBeHYuwTFCcj%2FkmABue9dM%2FatYe2QvUwwtYKlOT8jLdXt546pjBha9&X-Amz-Signature=c09cc07e7c2135289353ff19cafddb20c16a0bb59f4b4a4f7cd7b7b556a7fa97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDRDKSJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBUzai7KjcBL09OYRL08dwP6Gr5hfQ3GNEbUPSioArtQAiBOSR5J5Ot8KRsRHzUtAp0qEPoUPnfHW2p9YfPQ48Fnsir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMmvrGkNFCEmFLzykzKtwDRWFXEH4s%2BO4cH6o0w%2FG43wSwBnotjAOv2QqyBEfkow3dOWjbz%2FfCFeuOFX%2BnD4dXZHjztIT7w2zt%2B9RKZAZ3u6DXCyC7sYg1H8Ts2ynx9xpK90nRNiMFvp%2B9tde0JkBGbSNVkC5ozZGqLaweicmOCBEF2cFSOx%2Fr10guHWyJpZKiZC6enTR%2Fdl8o26sj15ul2ZGuzmz%2Fkz7qsz2w90pHu3mKiuONmS9YRrb1nbfX8HIIcvpc0WLLDv1NjhEIcrKfyrTbNCuAnG76wJNC4ro7YQAZHk1F8Hlp7GUmM5YZDrB067FnlHbszy%2B66aA7OQFa0fudx5lMWUtBxHAcyZ%2FkYYHG%2BDvJkMTcC12zZex4Hd8oigCvngiYYuOeZ83%2FVbN%2FObOhUKlDazkwbQumbdPYieP%2FRdBGW7ZWa%2FyuIJhHhIaFE2s5CWpQvDOSHygcUSOSP9jXcRyURxD6TBQy26%2FNPiEVmapwqAJvW9Fj1R7JnG5fyv30ssAv%2FgHusoDIW5UJMLgjjZ589CZdk%2F78UBdD%2FJuuSpN1bKuXaaMymBPKOzkTTSGumUV6zwYyRB8186OWKYXLlGOFk5tKWjUIxkjorALkFokFI7zvz0BRdJLdfZC%2B3dDUQE1S1n3FbsMwjLOxvgY6pgEbCPiCIOEV%2FlqQXgzA6M9v9uxIitXSkQHORGaTAleRaSaLmRMHg7bEmZ%2F6sSnU3u0VM%2BnYGXGRE7qwsF63Wo%2BOxgo2nl2Cc%2FKJyjSaqZn0l4csD%2FHZNhCh10lpkHLZ7qWIR2W%2BVdY9v3vYa0PPdw8jxBbVcTVho8uOsxFN7tPBeHYuwTFCcj%2FkmABue9dM%2FatYe2QvUwwtYKlOT8jLdXt546pjBha9&X-Amz-Signature=58d2cb7696c0b75a94faec9be1f7d14d686c17b99b5b4dfb0a95b8746d87b05f&X-Amz-SignedHeaders=host&x-id=GetObject)
