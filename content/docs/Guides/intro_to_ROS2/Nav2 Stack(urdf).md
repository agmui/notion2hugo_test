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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYGEASY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnJhRGUJQG%2FmBXj%2BMYeaAdSOP0fc492Za%2BkCFv8RQSQIgBoUoTpwmWn%2Fy4zrfnNqeQ%2Fv57E%2BBOGB1RIC5wPUtucgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUl%2BCmjpnVrmlRU2ircA%2Bbhh23uXvufF3ZW2JDaxjtnBe6xO9t0CE1HwcCIF0y68jqbu2gPNXnR3qTStqdN1t%2FsDy9jv35j7PHAXZtT8t1ynf%2BEUs0H7XnE2LURgE82wbNhjMFnsdSBPDoa%2FP5BoI19jxT7pAz2DUDnQSk8dztu7sFjJlSMUUmB2a8HYAChsReEmt3P5%2FuYwSNqw5F%2Bxf74dlblA0AyFSurOgyq4B5kWa4EvRp9gpUaj07JDYoCx%2BiOc7xHsadbecxdqmAhiO1bqs%2FUhcJ4dn6b4XzUbIXazcsp0BTcFXTV4VeQuz%2Bs2e9uIMMq3m44ItnxWGK3TqyE3hNCHZD2rs6WgKuVxxqwD2Qj9bLvbIE8%2FBTF6%2Bp6tClKNmCvDYr7Uo4zuJk6UML%2FKt9AFcdyVBDVUfj6nZMS2vRjZNCSGAUmqa1x68WyXEHubRTN0PT2%2Fmo%2Bb%2B8%2F6ANQFTls%2FnCuhpcDHjsHtUIvzu99iWyCT7Oyi5rmSBCrmzDkhmPgWY2EoiC%2Fg%2BObjFPK9daazAuRffS0jswo8XxDUOdQGTbDJtqdFCCrmgppGoEElp6mdudMAf1TfrdG431KZffsFcANnLcT0%2FBmid%2B2J6%2F4h6GFBHphpt2lydXU3OcoWbzhKG50j6CBMJOVkb8GOqUBsoMKGrHJL2mhXtYygjvinX6tEzEuY2UaT7teLamNgZ%2Bcs4ZpCMZMXDvzKh4znicY8%2FAw3Y4SD1rwkEog7OhgCiayn23bxWb881IkVRUx3baKoTOW0GAf5VnKaW1Cs84RhEuD9igL9u%2BFE1Do0F%2FUsuKNAsFhuVUOlDB3C2E2OeQeONi83Tsbc2Qc994iSM2cshNJPvxeJ%2F8gj8tYLRqCqM%2BrILnj&X-Amz-Signature=8dbe614587c25b00adf8640273f6d3d83acdaf4682476b13cf9f4ba156afec03&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYGEASY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnJhRGUJQG%2FmBXj%2BMYeaAdSOP0fc492Za%2BkCFv8RQSQIgBoUoTpwmWn%2Fy4zrfnNqeQ%2Fv57E%2BBOGB1RIC5wPUtucgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUl%2BCmjpnVrmlRU2ircA%2Bbhh23uXvufF3ZW2JDaxjtnBe6xO9t0CE1HwcCIF0y68jqbu2gPNXnR3qTStqdN1t%2FsDy9jv35j7PHAXZtT8t1ynf%2BEUs0H7XnE2LURgE82wbNhjMFnsdSBPDoa%2FP5BoI19jxT7pAz2DUDnQSk8dztu7sFjJlSMUUmB2a8HYAChsReEmt3P5%2FuYwSNqw5F%2Bxf74dlblA0AyFSurOgyq4B5kWa4EvRp9gpUaj07JDYoCx%2BiOc7xHsadbecxdqmAhiO1bqs%2FUhcJ4dn6b4XzUbIXazcsp0BTcFXTV4VeQuz%2Bs2e9uIMMq3m44ItnxWGK3TqyE3hNCHZD2rs6WgKuVxxqwD2Qj9bLvbIE8%2FBTF6%2Bp6tClKNmCvDYr7Uo4zuJk6UML%2FKt9AFcdyVBDVUfj6nZMS2vRjZNCSGAUmqa1x68WyXEHubRTN0PT2%2Fmo%2Bb%2B8%2F6ANQFTls%2FnCuhpcDHjsHtUIvzu99iWyCT7Oyi5rmSBCrmzDkhmPgWY2EoiC%2Fg%2BObjFPK9daazAuRffS0jswo8XxDUOdQGTbDJtqdFCCrmgppGoEElp6mdudMAf1TfrdG431KZffsFcANnLcT0%2FBmid%2B2J6%2F4h6GFBHphpt2lydXU3OcoWbzhKG50j6CBMJOVkb8GOqUBsoMKGrHJL2mhXtYygjvinX6tEzEuY2UaT7teLamNgZ%2Bcs4ZpCMZMXDvzKh4znicY8%2FAw3Y4SD1rwkEog7OhgCiayn23bxWb881IkVRUx3baKoTOW0GAf5VnKaW1Cs84RhEuD9igL9u%2BFE1Do0F%2FUsuKNAsFhuVUOlDB3C2E2OeQeONi83Tsbc2Qc994iSM2cshNJPvxeJ%2F8gj8tYLRqCqM%2BrILnj&X-Amz-Signature=467111ce2ca5aec8b59119a81a1ba183aa3996a9731aeaa15099619cadd1a38f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYGEASY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnJhRGUJQG%2FmBXj%2BMYeaAdSOP0fc492Za%2BkCFv8RQSQIgBoUoTpwmWn%2Fy4zrfnNqeQ%2Fv57E%2BBOGB1RIC5wPUtucgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUl%2BCmjpnVrmlRU2ircA%2Bbhh23uXvufF3ZW2JDaxjtnBe6xO9t0CE1HwcCIF0y68jqbu2gPNXnR3qTStqdN1t%2FsDy9jv35j7PHAXZtT8t1ynf%2BEUs0H7XnE2LURgE82wbNhjMFnsdSBPDoa%2FP5BoI19jxT7pAz2DUDnQSk8dztu7sFjJlSMUUmB2a8HYAChsReEmt3P5%2FuYwSNqw5F%2Bxf74dlblA0AyFSurOgyq4B5kWa4EvRp9gpUaj07JDYoCx%2BiOc7xHsadbecxdqmAhiO1bqs%2FUhcJ4dn6b4XzUbIXazcsp0BTcFXTV4VeQuz%2Bs2e9uIMMq3m44ItnxWGK3TqyE3hNCHZD2rs6WgKuVxxqwD2Qj9bLvbIE8%2FBTF6%2Bp6tClKNmCvDYr7Uo4zuJk6UML%2FKt9AFcdyVBDVUfj6nZMS2vRjZNCSGAUmqa1x68WyXEHubRTN0PT2%2Fmo%2Bb%2B8%2F6ANQFTls%2FnCuhpcDHjsHtUIvzu99iWyCT7Oyi5rmSBCrmzDkhmPgWY2EoiC%2Fg%2BObjFPK9daazAuRffS0jswo8XxDUOdQGTbDJtqdFCCrmgppGoEElp6mdudMAf1TfrdG431KZffsFcANnLcT0%2FBmid%2B2J6%2F4h6GFBHphpt2lydXU3OcoWbzhKG50j6CBMJOVkb8GOqUBsoMKGrHJL2mhXtYygjvinX6tEzEuY2UaT7teLamNgZ%2Bcs4ZpCMZMXDvzKh4znicY8%2FAw3Y4SD1rwkEog7OhgCiayn23bxWb881IkVRUx3baKoTOW0GAf5VnKaW1Cs84RhEuD9igL9u%2BFE1Do0F%2FUsuKNAsFhuVUOlDB3C2E2OeQeONi83Tsbc2Qc994iSM2cshNJPvxeJ%2F8gj8tYLRqCqM%2BrILnj&X-Amz-Signature=6a86a4e807fa7932dba8122d5d015033dde523b07ca26491aecc1d958d99db15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYGEASY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnJhRGUJQG%2FmBXj%2BMYeaAdSOP0fc492Za%2BkCFv8RQSQIgBoUoTpwmWn%2Fy4zrfnNqeQ%2Fv57E%2BBOGB1RIC5wPUtucgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUl%2BCmjpnVrmlRU2ircA%2Bbhh23uXvufF3ZW2JDaxjtnBe6xO9t0CE1HwcCIF0y68jqbu2gPNXnR3qTStqdN1t%2FsDy9jv35j7PHAXZtT8t1ynf%2BEUs0H7XnE2LURgE82wbNhjMFnsdSBPDoa%2FP5BoI19jxT7pAz2DUDnQSk8dztu7sFjJlSMUUmB2a8HYAChsReEmt3P5%2FuYwSNqw5F%2Bxf74dlblA0AyFSurOgyq4B5kWa4EvRp9gpUaj07JDYoCx%2BiOc7xHsadbecxdqmAhiO1bqs%2FUhcJ4dn6b4XzUbIXazcsp0BTcFXTV4VeQuz%2Bs2e9uIMMq3m44ItnxWGK3TqyE3hNCHZD2rs6WgKuVxxqwD2Qj9bLvbIE8%2FBTF6%2Bp6tClKNmCvDYr7Uo4zuJk6UML%2FKt9AFcdyVBDVUfj6nZMS2vRjZNCSGAUmqa1x68WyXEHubRTN0PT2%2Fmo%2Bb%2B8%2F6ANQFTls%2FnCuhpcDHjsHtUIvzu99iWyCT7Oyi5rmSBCrmzDkhmPgWY2EoiC%2Fg%2BObjFPK9daazAuRffS0jswo8XxDUOdQGTbDJtqdFCCrmgppGoEElp6mdudMAf1TfrdG431KZffsFcANnLcT0%2FBmid%2B2J6%2F4h6GFBHphpt2lydXU3OcoWbzhKG50j6CBMJOVkb8GOqUBsoMKGrHJL2mhXtYygjvinX6tEzEuY2UaT7teLamNgZ%2Bcs4ZpCMZMXDvzKh4znicY8%2FAw3Y4SD1rwkEog7OhgCiayn23bxWb881IkVRUx3baKoTOW0GAf5VnKaW1Cs84RhEuD9igL9u%2BFE1Do0F%2FUsuKNAsFhuVUOlDB3C2E2OeQeONi83Tsbc2Qc994iSM2cshNJPvxeJ%2F8gj8tYLRqCqM%2BrILnj&X-Amz-Signature=59727c253c3cf9c1875c8f159676bd5f1735feff98e2fd13e75d6e1a682cdde8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYGEASY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnJhRGUJQG%2FmBXj%2BMYeaAdSOP0fc492Za%2BkCFv8RQSQIgBoUoTpwmWn%2Fy4zrfnNqeQ%2Fv57E%2BBOGB1RIC5wPUtucgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUl%2BCmjpnVrmlRU2ircA%2Bbhh23uXvufF3ZW2JDaxjtnBe6xO9t0CE1HwcCIF0y68jqbu2gPNXnR3qTStqdN1t%2FsDy9jv35j7PHAXZtT8t1ynf%2BEUs0H7XnE2LURgE82wbNhjMFnsdSBPDoa%2FP5BoI19jxT7pAz2DUDnQSk8dztu7sFjJlSMUUmB2a8HYAChsReEmt3P5%2FuYwSNqw5F%2Bxf74dlblA0AyFSurOgyq4B5kWa4EvRp9gpUaj07JDYoCx%2BiOc7xHsadbecxdqmAhiO1bqs%2FUhcJ4dn6b4XzUbIXazcsp0BTcFXTV4VeQuz%2Bs2e9uIMMq3m44ItnxWGK3TqyE3hNCHZD2rs6WgKuVxxqwD2Qj9bLvbIE8%2FBTF6%2Bp6tClKNmCvDYr7Uo4zuJk6UML%2FKt9AFcdyVBDVUfj6nZMS2vRjZNCSGAUmqa1x68WyXEHubRTN0PT2%2Fmo%2Bb%2B8%2F6ANQFTls%2FnCuhpcDHjsHtUIvzu99iWyCT7Oyi5rmSBCrmzDkhmPgWY2EoiC%2Fg%2BObjFPK9daazAuRffS0jswo8XxDUOdQGTbDJtqdFCCrmgppGoEElp6mdudMAf1TfrdG431KZffsFcANnLcT0%2FBmid%2B2J6%2F4h6GFBHphpt2lydXU3OcoWbzhKG50j6CBMJOVkb8GOqUBsoMKGrHJL2mhXtYygjvinX6tEzEuY2UaT7teLamNgZ%2Bcs4ZpCMZMXDvzKh4znicY8%2FAw3Y4SD1rwkEog7OhgCiayn23bxWb881IkVRUx3baKoTOW0GAf5VnKaW1Cs84RhEuD9igL9u%2BFE1Do0F%2FUsuKNAsFhuVUOlDB3C2E2OeQeONi83Tsbc2Qc994iSM2cshNJPvxeJ%2F8gj8tYLRqCqM%2BrILnj&X-Amz-Signature=1d703809c6289f63282bf400b7b00b509b801b573d9276bf0b165b7885a366dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYGEASY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnJhRGUJQG%2FmBXj%2BMYeaAdSOP0fc492Za%2BkCFv8RQSQIgBoUoTpwmWn%2Fy4zrfnNqeQ%2Fv57E%2BBOGB1RIC5wPUtucgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLUl%2BCmjpnVrmlRU2ircA%2Bbhh23uXvufF3ZW2JDaxjtnBe6xO9t0CE1HwcCIF0y68jqbu2gPNXnR3qTStqdN1t%2FsDy9jv35j7PHAXZtT8t1ynf%2BEUs0H7XnE2LURgE82wbNhjMFnsdSBPDoa%2FP5BoI19jxT7pAz2DUDnQSk8dztu7sFjJlSMUUmB2a8HYAChsReEmt3P5%2FuYwSNqw5F%2Bxf74dlblA0AyFSurOgyq4B5kWa4EvRp9gpUaj07JDYoCx%2BiOc7xHsadbecxdqmAhiO1bqs%2FUhcJ4dn6b4XzUbIXazcsp0BTcFXTV4VeQuz%2Bs2e9uIMMq3m44ItnxWGK3TqyE3hNCHZD2rs6WgKuVxxqwD2Qj9bLvbIE8%2FBTF6%2Bp6tClKNmCvDYr7Uo4zuJk6UML%2FKt9AFcdyVBDVUfj6nZMS2vRjZNCSGAUmqa1x68WyXEHubRTN0PT2%2Fmo%2Bb%2B8%2F6ANQFTls%2FnCuhpcDHjsHtUIvzu99iWyCT7Oyi5rmSBCrmzDkhmPgWY2EoiC%2Fg%2BObjFPK9daazAuRffS0jswo8XxDUOdQGTbDJtqdFCCrmgppGoEElp6mdudMAf1TfrdG431KZffsFcANnLcT0%2FBmid%2B2J6%2F4h6GFBHphpt2lydXU3OcoWbzhKG50j6CBMJOVkb8GOqUBsoMKGrHJL2mhXtYygjvinX6tEzEuY2UaT7teLamNgZ%2Bcs4ZpCMZMXDvzKh4znicY8%2FAw3Y4SD1rwkEog7OhgCiayn23bxWb881IkVRUx3baKoTOW0GAf5VnKaW1Cs84RhEuD9igL9u%2BFE1Do0F%2FUsuKNAsFhuVUOlDB3C2E2OeQeONi83Tsbc2Qc994iSM2cshNJPvxeJ%2F8gj8tYLRqCqM%2BrILnj&X-Amz-Signature=84a91f3f41986703daafb7932315305790ae418f6d5341b83e56a0e0607c5e4c&X-Amz-SignedHeaders=host&x-id=GetObject)
