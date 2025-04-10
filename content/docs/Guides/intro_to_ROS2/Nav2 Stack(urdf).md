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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGG3GNU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCan1kjOvDKz4kTKzQR8MUD7UQ2zlPPq3bxUN1Uevm8ewIhANW2yU0lDJyYCdHBRxjpv6NZmQNFfaJsWuLzS%2BWFgNKvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPkCFMJr8jbHyUy0gq3AMuWzJHYGengvqlGcAPIFRDASI1ObfzAlUocwnkYn%2F5eyma1V%2FdxI3aJiza5%2BfLexT10EtYoN0SQ%2BUHKCBWlgSfUEgLW97ePy8JeiWABeZd40vdlnTc%2BKcpwqJ0jymnQ3LUQdhovpgiUGn2DwZuVMl1vFUpRGnfeqQX3c%2Fy17NzI%2FhSqVtcT5YVqKDGiJwmN8Htg7ErWdwWWDvoQuaq6lXz2tXPAezrtUNRy4O6i82BwD9PCm7DHX5fykUDuiKLssBdf%2FFzSBMZwyqnUw9KwCLTDrnAiBay2dPlBj7g4%2FrjjkpufpEqd0t4x6bRwDC3ueBWJQL49rFH5YKPJjqi%2BY%2BosTFwlHVLa4xPkLYElXnihOI%2Ffq%2FRY%2Fyzuq9HZ%2Fgz9S49Vq%2Bj3hBGp7MTwiQpXqyG26nbPUTFdOsSBbcMneUI%2FpLPWsAnofIte%2BeobBC90DtwafxHhtei29qmxnBTCeM6S%2FXJ%2ByhZNjhEYFuu0R6cUbzlCK%2FLyEr7YeenJoDsPDsIGSO1LGdN1XLmr5FEDhKwakStwUArtIjQ2hUpLi1oJ2HYwsBRaNY6LTTbHoV%2FW9OZC8w4oQRaEsmyXZeeJIcCYLeqm4jYubX8aJz2pnO4XB9bojiNtSki24J0OjDLxdy%2FBjqkAdIBqdifTaZH7JFujsPFCANUmgz1PYvv2kXYiU3uh9Tcanfz7vzpfFNSYtmbWGKxi0RYtiNK83AMu%2FScOZvCvUng1gSkB8pEoG9%2FOHNmyIpJLNlZDRCF8kxSJv9zVgp1Pi1DBlESxoslfWanqiOA54Fke088h7JGu8AU85YuSxA8jMWVdbGMQd1kQDDj46Jt7mVTrpKM2UAR6D3uCV74EBnML%2BEh&X-Amz-Signature=fb5ca0380e7d52766ade28a7577630415b9502cb30f3a2aa66f123f03f9df8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGG3GNU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCan1kjOvDKz4kTKzQR8MUD7UQ2zlPPq3bxUN1Uevm8ewIhANW2yU0lDJyYCdHBRxjpv6NZmQNFfaJsWuLzS%2BWFgNKvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPkCFMJr8jbHyUy0gq3AMuWzJHYGengvqlGcAPIFRDASI1ObfzAlUocwnkYn%2F5eyma1V%2FdxI3aJiza5%2BfLexT10EtYoN0SQ%2BUHKCBWlgSfUEgLW97ePy8JeiWABeZd40vdlnTc%2BKcpwqJ0jymnQ3LUQdhovpgiUGn2DwZuVMl1vFUpRGnfeqQX3c%2Fy17NzI%2FhSqVtcT5YVqKDGiJwmN8Htg7ErWdwWWDvoQuaq6lXz2tXPAezrtUNRy4O6i82BwD9PCm7DHX5fykUDuiKLssBdf%2FFzSBMZwyqnUw9KwCLTDrnAiBay2dPlBj7g4%2FrjjkpufpEqd0t4x6bRwDC3ueBWJQL49rFH5YKPJjqi%2BY%2BosTFwlHVLa4xPkLYElXnihOI%2Ffq%2FRY%2Fyzuq9HZ%2Fgz9S49Vq%2Bj3hBGp7MTwiQpXqyG26nbPUTFdOsSBbcMneUI%2FpLPWsAnofIte%2BeobBC90DtwafxHhtei29qmxnBTCeM6S%2FXJ%2ByhZNjhEYFuu0R6cUbzlCK%2FLyEr7YeenJoDsPDsIGSO1LGdN1XLmr5FEDhKwakStwUArtIjQ2hUpLi1oJ2HYwsBRaNY6LTTbHoV%2FW9OZC8w4oQRaEsmyXZeeJIcCYLeqm4jYubX8aJz2pnO4XB9bojiNtSki24J0OjDLxdy%2FBjqkAdIBqdifTaZH7JFujsPFCANUmgz1PYvv2kXYiU3uh9Tcanfz7vzpfFNSYtmbWGKxi0RYtiNK83AMu%2FScOZvCvUng1gSkB8pEoG9%2FOHNmyIpJLNlZDRCF8kxSJv9zVgp1Pi1DBlESxoslfWanqiOA54Fke088h7JGu8AU85YuSxA8jMWVdbGMQd1kQDDj46Jt7mVTrpKM2UAR6D3uCV74EBnML%2BEh&X-Amz-Signature=e27766390827353e0e582ac6cdacd6cc1a46d65b21580632137824f6ab6b0c33&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGG3GNU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCan1kjOvDKz4kTKzQR8MUD7UQ2zlPPq3bxUN1Uevm8ewIhANW2yU0lDJyYCdHBRxjpv6NZmQNFfaJsWuLzS%2BWFgNKvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPkCFMJr8jbHyUy0gq3AMuWzJHYGengvqlGcAPIFRDASI1ObfzAlUocwnkYn%2F5eyma1V%2FdxI3aJiza5%2BfLexT10EtYoN0SQ%2BUHKCBWlgSfUEgLW97ePy8JeiWABeZd40vdlnTc%2BKcpwqJ0jymnQ3LUQdhovpgiUGn2DwZuVMl1vFUpRGnfeqQX3c%2Fy17NzI%2FhSqVtcT5YVqKDGiJwmN8Htg7ErWdwWWDvoQuaq6lXz2tXPAezrtUNRy4O6i82BwD9PCm7DHX5fykUDuiKLssBdf%2FFzSBMZwyqnUw9KwCLTDrnAiBay2dPlBj7g4%2FrjjkpufpEqd0t4x6bRwDC3ueBWJQL49rFH5YKPJjqi%2BY%2BosTFwlHVLa4xPkLYElXnihOI%2Ffq%2FRY%2Fyzuq9HZ%2Fgz9S49Vq%2Bj3hBGp7MTwiQpXqyG26nbPUTFdOsSBbcMneUI%2FpLPWsAnofIte%2BeobBC90DtwafxHhtei29qmxnBTCeM6S%2FXJ%2ByhZNjhEYFuu0R6cUbzlCK%2FLyEr7YeenJoDsPDsIGSO1LGdN1XLmr5FEDhKwakStwUArtIjQ2hUpLi1oJ2HYwsBRaNY6LTTbHoV%2FW9OZC8w4oQRaEsmyXZeeJIcCYLeqm4jYubX8aJz2pnO4XB9bojiNtSki24J0OjDLxdy%2FBjqkAdIBqdifTaZH7JFujsPFCANUmgz1PYvv2kXYiU3uh9Tcanfz7vzpfFNSYtmbWGKxi0RYtiNK83AMu%2FScOZvCvUng1gSkB8pEoG9%2FOHNmyIpJLNlZDRCF8kxSJv9zVgp1Pi1DBlESxoslfWanqiOA54Fke088h7JGu8AU85YuSxA8jMWVdbGMQd1kQDDj46Jt7mVTrpKM2UAR6D3uCV74EBnML%2BEh&X-Amz-Signature=05986fcfdf56a19e40abf14e6afe353a2e06f186d9d5733d6e9617efe5bb0bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGG3GNU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCan1kjOvDKz4kTKzQR8MUD7UQ2zlPPq3bxUN1Uevm8ewIhANW2yU0lDJyYCdHBRxjpv6NZmQNFfaJsWuLzS%2BWFgNKvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPkCFMJr8jbHyUy0gq3AMuWzJHYGengvqlGcAPIFRDASI1ObfzAlUocwnkYn%2F5eyma1V%2FdxI3aJiza5%2BfLexT10EtYoN0SQ%2BUHKCBWlgSfUEgLW97ePy8JeiWABeZd40vdlnTc%2BKcpwqJ0jymnQ3LUQdhovpgiUGn2DwZuVMl1vFUpRGnfeqQX3c%2Fy17NzI%2FhSqVtcT5YVqKDGiJwmN8Htg7ErWdwWWDvoQuaq6lXz2tXPAezrtUNRy4O6i82BwD9PCm7DHX5fykUDuiKLssBdf%2FFzSBMZwyqnUw9KwCLTDrnAiBay2dPlBj7g4%2FrjjkpufpEqd0t4x6bRwDC3ueBWJQL49rFH5YKPJjqi%2BY%2BosTFwlHVLa4xPkLYElXnihOI%2Ffq%2FRY%2Fyzuq9HZ%2Fgz9S49Vq%2Bj3hBGp7MTwiQpXqyG26nbPUTFdOsSBbcMneUI%2FpLPWsAnofIte%2BeobBC90DtwafxHhtei29qmxnBTCeM6S%2FXJ%2ByhZNjhEYFuu0R6cUbzlCK%2FLyEr7YeenJoDsPDsIGSO1LGdN1XLmr5FEDhKwakStwUArtIjQ2hUpLi1oJ2HYwsBRaNY6LTTbHoV%2FW9OZC8w4oQRaEsmyXZeeJIcCYLeqm4jYubX8aJz2pnO4XB9bojiNtSki24J0OjDLxdy%2FBjqkAdIBqdifTaZH7JFujsPFCANUmgz1PYvv2kXYiU3uh9Tcanfz7vzpfFNSYtmbWGKxi0RYtiNK83AMu%2FScOZvCvUng1gSkB8pEoG9%2FOHNmyIpJLNlZDRCF8kxSJv9zVgp1Pi1DBlESxoslfWanqiOA54Fke088h7JGu8AU85YuSxA8jMWVdbGMQd1kQDDj46Jt7mVTrpKM2UAR6D3uCV74EBnML%2BEh&X-Amz-Signature=2a684a0472ca2485f41812e721eb4d8880bcd8c6b71dc0d5bb37bfdff6853be4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGG3GNU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCan1kjOvDKz4kTKzQR8MUD7UQ2zlPPq3bxUN1Uevm8ewIhANW2yU0lDJyYCdHBRxjpv6NZmQNFfaJsWuLzS%2BWFgNKvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPkCFMJr8jbHyUy0gq3AMuWzJHYGengvqlGcAPIFRDASI1ObfzAlUocwnkYn%2F5eyma1V%2FdxI3aJiza5%2BfLexT10EtYoN0SQ%2BUHKCBWlgSfUEgLW97ePy8JeiWABeZd40vdlnTc%2BKcpwqJ0jymnQ3LUQdhovpgiUGn2DwZuVMl1vFUpRGnfeqQX3c%2Fy17NzI%2FhSqVtcT5YVqKDGiJwmN8Htg7ErWdwWWDvoQuaq6lXz2tXPAezrtUNRy4O6i82BwD9PCm7DHX5fykUDuiKLssBdf%2FFzSBMZwyqnUw9KwCLTDrnAiBay2dPlBj7g4%2FrjjkpufpEqd0t4x6bRwDC3ueBWJQL49rFH5YKPJjqi%2BY%2BosTFwlHVLa4xPkLYElXnihOI%2Ffq%2FRY%2Fyzuq9HZ%2Fgz9S49Vq%2Bj3hBGp7MTwiQpXqyG26nbPUTFdOsSBbcMneUI%2FpLPWsAnofIte%2BeobBC90DtwafxHhtei29qmxnBTCeM6S%2FXJ%2ByhZNjhEYFuu0R6cUbzlCK%2FLyEr7YeenJoDsPDsIGSO1LGdN1XLmr5FEDhKwakStwUArtIjQ2hUpLi1oJ2HYwsBRaNY6LTTbHoV%2FW9OZC8w4oQRaEsmyXZeeJIcCYLeqm4jYubX8aJz2pnO4XB9bojiNtSki24J0OjDLxdy%2FBjqkAdIBqdifTaZH7JFujsPFCANUmgz1PYvv2kXYiU3uh9Tcanfz7vzpfFNSYtmbWGKxi0RYtiNK83AMu%2FScOZvCvUng1gSkB8pEoG9%2FOHNmyIpJLNlZDRCF8kxSJv9zVgp1Pi1DBlESxoslfWanqiOA54Fke088h7JGu8AU85YuSxA8jMWVdbGMQd1kQDDj46Jt7mVTrpKM2UAR6D3uCV74EBnML%2BEh&X-Amz-Signature=67541410be5ad05a1e0516fbc1e46358f35388f75fd95320af344796c46385cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGG3GNU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCan1kjOvDKz4kTKzQR8MUD7UQ2zlPPq3bxUN1Uevm8ewIhANW2yU0lDJyYCdHBRxjpv6NZmQNFfaJsWuLzS%2BWFgNKvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPkCFMJr8jbHyUy0gq3AMuWzJHYGengvqlGcAPIFRDASI1ObfzAlUocwnkYn%2F5eyma1V%2FdxI3aJiza5%2BfLexT10EtYoN0SQ%2BUHKCBWlgSfUEgLW97ePy8JeiWABeZd40vdlnTc%2BKcpwqJ0jymnQ3LUQdhovpgiUGn2DwZuVMl1vFUpRGnfeqQX3c%2Fy17NzI%2FhSqVtcT5YVqKDGiJwmN8Htg7ErWdwWWDvoQuaq6lXz2tXPAezrtUNRy4O6i82BwD9PCm7DHX5fykUDuiKLssBdf%2FFzSBMZwyqnUw9KwCLTDrnAiBay2dPlBj7g4%2FrjjkpufpEqd0t4x6bRwDC3ueBWJQL49rFH5YKPJjqi%2BY%2BosTFwlHVLa4xPkLYElXnihOI%2Ffq%2FRY%2Fyzuq9HZ%2Fgz9S49Vq%2Bj3hBGp7MTwiQpXqyG26nbPUTFdOsSBbcMneUI%2FpLPWsAnofIte%2BeobBC90DtwafxHhtei29qmxnBTCeM6S%2FXJ%2ByhZNjhEYFuu0R6cUbzlCK%2FLyEr7YeenJoDsPDsIGSO1LGdN1XLmr5FEDhKwakStwUArtIjQ2hUpLi1oJ2HYwsBRaNY6LTTbHoV%2FW9OZC8w4oQRaEsmyXZeeJIcCYLeqm4jYubX8aJz2pnO4XB9bojiNtSki24J0OjDLxdy%2FBjqkAdIBqdifTaZH7JFujsPFCANUmgz1PYvv2kXYiU3uh9Tcanfz7vzpfFNSYtmbWGKxi0RYtiNK83AMu%2FScOZvCvUng1gSkB8pEoG9%2FOHNmyIpJLNlZDRCF8kxSJv9zVgp1Pi1DBlESxoslfWanqiOA54Fke088h7JGu8AU85YuSxA8jMWVdbGMQd1kQDDj46Jt7mVTrpKM2UAR6D3uCV74EBnML%2BEh&X-Amz-Signature=b3348c85bba2fb077ac1c52a048fd35bc88e3ebbe40f7e2ac49aa9a478f22e3a&X-Amz-SignedHeaders=host&x-id=GetObject)
