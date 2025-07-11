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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZKMM4Z%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0UZkBkMZE0uA81ztebLRMyvOnWrJ41yyMihBwogNDZwIgCAAk2j3Pibv%2B8S2plsHzAGoYAHZtS0DR4P9%2BiLOPRbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJEnxwJji%2Ft4Dif%2ByrcA3JpfdNmmHIyzu84PskOAJDdgfFZTzAKje5TShoj85Smn6R3HJbwY6LHw034GTbpj1PcDRLXEjvJAEza7HAS%2F%2B7Z%2FX%2BEakKL8WHtMFtpy65xxAp89slwx3v6P%2FFuqWzBBakrJfSAEWmF1t22w59r%2FL1QemtC2%2FNX0o6%2FRi7n8VM7bvuKKBI6dETdJ5brqrUwRvIDc7PKldgQGXWitYAP15D9Yldr%2FoaJIrym%2BdMGriBr%2FxUkxw%2FMCtEOi7NdcMxYX54jOtYyb5Phvn2%2BTckq6StUyD2QC875ReznKDGnUcpgser4eAMW6jzPOB6cEkIUD0Bdbj2Vu1GBcxUKg8taX9Xpf3sQep33vTjlzbyJkwcH%2B6qPkBPtOUxp51J4HQJU3Fu9G6XiZaEye9V6odk0ZMFzgc40Lm2yTiMRwxb8CRE23Xx1t8X6Ps2I9ssmad3C3zf%2F%2B5trfaW3TieWzByHCVOt0LnRWTp%2FtRvhFLBFurAaudMkzyiF97GkNMk21%2FJ%2BhO5wE42nC4eDrKyIDpLuKVy6k1Qy7z6oxF%2B5tsA6%2BZtI%2BWSkInsvj7%2Bq8FTuSRzNDKk16nnOJ4LIUgnmf6Obm%2ByXDyUhNJTXzlK20tif2nfNarnWtToiraJyfr9LMPSpxMMGOqUB92OQeED4zxmMw%2FCxdarLycsrT9mSeGEZlKBgFQVNLod5eA9PGALXQFQXPxrRoj16z5%2Bc98dQGTBXtMQK1lO0QjfyzuJh8Uno54fu40GyvoEbF1JNadqhwnCFusd%2F0jD%2Bbt%2FrYW9h82AuflGeCAth%2FW7eeTgI1ebPIYs%2Frm%2BHD2cZSa3Pdlbcm42uWFMW%2BayAs8pS3AI8qLpz%2BT18ln74nXKXZ3PO&X-Amz-Signature=fc88ae74cfbf2d081692ffc71a9a296da90628fbd362921caf6badaa0844ae75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZKMM4Z%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0UZkBkMZE0uA81ztebLRMyvOnWrJ41yyMihBwogNDZwIgCAAk2j3Pibv%2B8S2plsHzAGoYAHZtS0DR4P9%2BiLOPRbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJEnxwJji%2Ft4Dif%2ByrcA3JpfdNmmHIyzu84PskOAJDdgfFZTzAKje5TShoj85Smn6R3HJbwY6LHw034GTbpj1PcDRLXEjvJAEza7HAS%2F%2B7Z%2FX%2BEakKL8WHtMFtpy65xxAp89slwx3v6P%2FFuqWzBBakrJfSAEWmF1t22w59r%2FL1QemtC2%2FNX0o6%2FRi7n8VM7bvuKKBI6dETdJ5brqrUwRvIDc7PKldgQGXWitYAP15D9Yldr%2FoaJIrym%2BdMGriBr%2FxUkxw%2FMCtEOi7NdcMxYX54jOtYyb5Phvn2%2BTckq6StUyD2QC875ReznKDGnUcpgser4eAMW6jzPOB6cEkIUD0Bdbj2Vu1GBcxUKg8taX9Xpf3sQep33vTjlzbyJkwcH%2B6qPkBPtOUxp51J4HQJU3Fu9G6XiZaEye9V6odk0ZMFzgc40Lm2yTiMRwxb8CRE23Xx1t8X6Ps2I9ssmad3C3zf%2F%2B5trfaW3TieWzByHCVOt0LnRWTp%2FtRvhFLBFurAaudMkzyiF97GkNMk21%2FJ%2BhO5wE42nC4eDrKyIDpLuKVy6k1Qy7z6oxF%2B5tsA6%2BZtI%2BWSkInsvj7%2Bq8FTuSRzNDKk16nnOJ4LIUgnmf6Obm%2ByXDyUhNJTXzlK20tif2nfNarnWtToiraJyfr9LMPSpxMMGOqUB92OQeED4zxmMw%2FCxdarLycsrT9mSeGEZlKBgFQVNLod5eA9PGALXQFQXPxrRoj16z5%2Bc98dQGTBXtMQK1lO0QjfyzuJh8Uno54fu40GyvoEbF1JNadqhwnCFusd%2F0jD%2Bbt%2FrYW9h82AuflGeCAth%2FW7eeTgI1ebPIYs%2Frm%2BHD2cZSa3Pdlbcm42uWFMW%2BayAs8pS3AI8qLpz%2BT18ln74nXKXZ3PO&X-Amz-Signature=27c43e971ce5c80d986c363023b8a9b56fcac644ddd67e8ca80110a96733e603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZKMM4Z%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0UZkBkMZE0uA81ztebLRMyvOnWrJ41yyMihBwogNDZwIgCAAk2j3Pibv%2B8S2plsHzAGoYAHZtS0DR4P9%2BiLOPRbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJEnxwJji%2Ft4Dif%2ByrcA3JpfdNmmHIyzu84PskOAJDdgfFZTzAKje5TShoj85Smn6R3HJbwY6LHw034GTbpj1PcDRLXEjvJAEza7HAS%2F%2B7Z%2FX%2BEakKL8WHtMFtpy65xxAp89slwx3v6P%2FFuqWzBBakrJfSAEWmF1t22w59r%2FL1QemtC2%2FNX0o6%2FRi7n8VM7bvuKKBI6dETdJ5brqrUwRvIDc7PKldgQGXWitYAP15D9Yldr%2FoaJIrym%2BdMGriBr%2FxUkxw%2FMCtEOi7NdcMxYX54jOtYyb5Phvn2%2BTckq6StUyD2QC875ReznKDGnUcpgser4eAMW6jzPOB6cEkIUD0Bdbj2Vu1GBcxUKg8taX9Xpf3sQep33vTjlzbyJkwcH%2B6qPkBPtOUxp51J4HQJU3Fu9G6XiZaEye9V6odk0ZMFzgc40Lm2yTiMRwxb8CRE23Xx1t8X6Ps2I9ssmad3C3zf%2F%2B5trfaW3TieWzByHCVOt0LnRWTp%2FtRvhFLBFurAaudMkzyiF97GkNMk21%2FJ%2BhO5wE42nC4eDrKyIDpLuKVy6k1Qy7z6oxF%2B5tsA6%2BZtI%2BWSkInsvj7%2Bq8FTuSRzNDKk16nnOJ4LIUgnmf6Obm%2ByXDyUhNJTXzlK20tif2nfNarnWtToiraJyfr9LMPSpxMMGOqUB92OQeED4zxmMw%2FCxdarLycsrT9mSeGEZlKBgFQVNLod5eA9PGALXQFQXPxrRoj16z5%2Bc98dQGTBXtMQK1lO0QjfyzuJh8Uno54fu40GyvoEbF1JNadqhwnCFusd%2F0jD%2Bbt%2FrYW9h82AuflGeCAth%2FW7eeTgI1ebPIYs%2Frm%2BHD2cZSa3Pdlbcm42uWFMW%2BayAs8pS3AI8qLpz%2BT18ln74nXKXZ3PO&X-Amz-Signature=7eddeae4c2e831ba8e1127d4249f27e9fa1fcb513f14c907424db981f25af9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZKMM4Z%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0UZkBkMZE0uA81ztebLRMyvOnWrJ41yyMihBwogNDZwIgCAAk2j3Pibv%2B8S2plsHzAGoYAHZtS0DR4P9%2BiLOPRbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJEnxwJji%2Ft4Dif%2ByrcA3JpfdNmmHIyzu84PskOAJDdgfFZTzAKje5TShoj85Smn6R3HJbwY6LHw034GTbpj1PcDRLXEjvJAEza7HAS%2F%2B7Z%2FX%2BEakKL8WHtMFtpy65xxAp89slwx3v6P%2FFuqWzBBakrJfSAEWmF1t22w59r%2FL1QemtC2%2FNX0o6%2FRi7n8VM7bvuKKBI6dETdJ5brqrUwRvIDc7PKldgQGXWitYAP15D9Yldr%2FoaJIrym%2BdMGriBr%2FxUkxw%2FMCtEOi7NdcMxYX54jOtYyb5Phvn2%2BTckq6StUyD2QC875ReznKDGnUcpgser4eAMW6jzPOB6cEkIUD0Bdbj2Vu1GBcxUKg8taX9Xpf3sQep33vTjlzbyJkwcH%2B6qPkBPtOUxp51J4HQJU3Fu9G6XiZaEye9V6odk0ZMFzgc40Lm2yTiMRwxb8CRE23Xx1t8X6Ps2I9ssmad3C3zf%2F%2B5trfaW3TieWzByHCVOt0LnRWTp%2FtRvhFLBFurAaudMkzyiF97GkNMk21%2FJ%2BhO5wE42nC4eDrKyIDpLuKVy6k1Qy7z6oxF%2B5tsA6%2BZtI%2BWSkInsvj7%2Bq8FTuSRzNDKk16nnOJ4LIUgnmf6Obm%2ByXDyUhNJTXzlK20tif2nfNarnWtToiraJyfr9LMPSpxMMGOqUB92OQeED4zxmMw%2FCxdarLycsrT9mSeGEZlKBgFQVNLod5eA9PGALXQFQXPxrRoj16z5%2Bc98dQGTBXtMQK1lO0QjfyzuJh8Uno54fu40GyvoEbF1JNadqhwnCFusd%2F0jD%2Bbt%2FrYW9h82AuflGeCAth%2FW7eeTgI1ebPIYs%2Frm%2BHD2cZSa3Pdlbcm42uWFMW%2BayAs8pS3AI8qLpz%2BT18ln74nXKXZ3PO&X-Amz-Signature=234f3b691f89c529605d84e2a503587fe977d3f55aa4318a7288b78a6b5dcce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZKMM4Z%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0UZkBkMZE0uA81ztebLRMyvOnWrJ41yyMihBwogNDZwIgCAAk2j3Pibv%2B8S2plsHzAGoYAHZtS0DR4P9%2BiLOPRbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJEnxwJji%2Ft4Dif%2ByrcA3JpfdNmmHIyzu84PskOAJDdgfFZTzAKje5TShoj85Smn6R3HJbwY6LHw034GTbpj1PcDRLXEjvJAEza7HAS%2F%2B7Z%2FX%2BEakKL8WHtMFtpy65xxAp89slwx3v6P%2FFuqWzBBakrJfSAEWmF1t22w59r%2FL1QemtC2%2FNX0o6%2FRi7n8VM7bvuKKBI6dETdJ5brqrUwRvIDc7PKldgQGXWitYAP15D9Yldr%2FoaJIrym%2BdMGriBr%2FxUkxw%2FMCtEOi7NdcMxYX54jOtYyb5Phvn2%2BTckq6StUyD2QC875ReznKDGnUcpgser4eAMW6jzPOB6cEkIUD0Bdbj2Vu1GBcxUKg8taX9Xpf3sQep33vTjlzbyJkwcH%2B6qPkBPtOUxp51J4HQJU3Fu9G6XiZaEye9V6odk0ZMFzgc40Lm2yTiMRwxb8CRE23Xx1t8X6Ps2I9ssmad3C3zf%2F%2B5trfaW3TieWzByHCVOt0LnRWTp%2FtRvhFLBFurAaudMkzyiF97GkNMk21%2FJ%2BhO5wE42nC4eDrKyIDpLuKVy6k1Qy7z6oxF%2B5tsA6%2BZtI%2BWSkInsvj7%2Bq8FTuSRzNDKk16nnOJ4LIUgnmf6Obm%2ByXDyUhNJTXzlK20tif2nfNarnWtToiraJyfr9LMPSpxMMGOqUB92OQeED4zxmMw%2FCxdarLycsrT9mSeGEZlKBgFQVNLod5eA9PGALXQFQXPxrRoj16z5%2Bc98dQGTBXtMQK1lO0QjfyzuJh8Uno54fu40GyvoEbF1JNadqhwnCFusd%2F0jD%2Bbt%2FrYW9h82AuflGeCAth%2FW7eeTgI1ebPIYs%2Frm%2BHD2cZSa3Pdlbcm42uWFMW%2BayAs8pS3AI8qLpz%2BT18ln74nXKXZ3PO&X-Amz-Signature=1fda8bf6b3da1d2d829473e0233640b597a44014d230eba55883dc325ebc3d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZKMM4Z%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0UZkBkMZE0uA81ztebLRMyvOnWrJ41yyMihBwogNDZwIgCAAk2j3Pibv%2B8S2plsHzAGoYAHZtS0DR4P9%2BiLOPRbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJEnxwJji%2Ft4Dif%2ByrcA3JpfdNmmHIyzu84PskOAJDdgfFZTzAKje5TShoj85Smn6R3HJbwY6LHw034GTbpj1PcDRLXEjvJAEza7HAS%2F%2B7Z%2FX%2BEakKL8WHtMFtpy65xxAp89slwx3v6P%2FFuqWzBBakrJfSAEWmF1t22w59r%2FL1QemtC2%2FNX0o6%2FRi7n8VM7bvuKKBI6dETdJ5brqrUwRvIDc7PKldgQGXWitYAP15D9Yldr%2FoaJIrym%2BdMGriBr%2FxUkxw%2FMCtEOi7NdcMxYX54jOtYyb5Phvn2%2BTckq6StUyD2QC875ReznKDGnUcpgser4eAMW6jzPOB6cEkIUD0Bdbj2Vu1GBcxUKg8taX9Xpf3sQep33vTjlzbyJkwcH%2B6qPkBPtOUxp51J4HQJU3Fu9G6XiZaEye9V6odk0ZMFzgc40Lm2yTiMRwxb8CRE23Xx1t8X6Ps2I9ssmad3C3zf%2F%2B5trfaW3TieWzByHCVOt0LnRWTp%2FtRvhFLBFurAaudMkzyiF97GkNMk21%2FJ%2BhO5wE42nC4eDrKyIDpLuKVy6k1Qy7z6oxF%2B5tsA6%2BZtI%2BWSkInsvj7%2Bq8FTuSRzNDKk16nnOJ4LIUgnmf6Obm%2ByXDyUhNJTXzlK20tif2nfNarnWtToiraJyfr9LMPSpxMMGOqUB92OQeED4zxmMw%2FCxdarLycsrT9mSeGEZlKBgFQVNLod5eA9PGALXQFQXPxrRoj16z5%2Bc98dQGTBXtMQK1lO0QjfyzuJh8Uno54fu40GyvoEbF1JNadqhwnCFusd%2F0jD%2Bbt%2FrYW9h82AuflGeCAth%2FW7eeTgI1ebPIYs%2Frm%2BHD2cZSa3Pdlbcm42uWFMW%2BayAs8pS3AI8qLpz%2BT18ln74nXKXZ3PO&X-Amz-Signature=e81eae9686d80a80a108e44ac397adce910985830f6cd612573cd33254c3ad99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
