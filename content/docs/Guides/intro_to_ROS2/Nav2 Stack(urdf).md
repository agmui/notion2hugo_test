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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYALBPFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKOjsTuSYH1q3w0IM1oyFVhwSUkwn6iADan1Gu5toCAiBZ5niqwXotH55LQu7l14rSbP%2FV0q%2B8Tp%2FKfWNsUDMX3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMwTSvCiVvzKzAFLKtwDYgROIVfeHfYKPG0hWDCiAfJX6EEzmwJI2Hi4k4rvOC35WqiINFmDpKcpDoho3PP0hIRGOxWKALY6eJKKV%2FpMSAHcU3BIq0%2FBuoj%2FbBricZbGdmP0YXV9XX6J%2FxdtIGRyu46guZFFMFx9DhJU%2F4dS9YcT6vMQm4WkfNdzSRujQGg6715y%2Flt2TGVROTRNKe%2BaV%2FKbzAZHw5UMjoFaDFVIuMSc4keqCvn5vBiIBiSyLQJhOAg4cNJ3j11Zz%2ByIcZkxKDNaQrevS7%2FukN9g6p1vqn14TrbEPr%2B9Pa3lWQrei6rzANC7C8JofD827kkorlO6fFspnAmoFUpuWYD%2F45YonZvmhFh%2FdoBTz20ToAFeKmJJp3qlc5sDN3IQb2RjoDIrkneyDZo%2B2ZbFOKRqrmPV1sIoECntQnw%2FvqwFtWOMORx%2Bv2BPboN8ORs9d%2BYo7KJN%2BDOiUfPK2LtN%2FHiGMOQnqA9kYFfz%2FfumNcae4UfRpd4sLIlsH5ec1ZQSB0IaygZelgEbuy7v%2F7kbdom1uvtKq5zOgpohDdb2PZiXEK31HeGRC98vIzDu32M2nJ7lO83pgqujUzXJTwpd%2Bv7U%2FZbpRDiytlKCte6WCEb9LkImK813v1ezA5DdDCsds58wtdf8wgY6pgFFmjggqYLQNsyE8Trmji3n31lp5Cs3P7xdBj3IvTP48sWz4It69FclYJ%2B2dErkym1eAfddojM9k1ZwHVE5YXQIaFjKG6eVsFRPovbYCK6y2ZPYuAbOTrnjNRfwd50df1pR%2Bs1Zp4rlxl8ASmN%2FbS0uBqiGvs9O5%2FY%2F9u646NeqO3YuLzqo%2FH%2FFbvOh4Oobz%2BEcJUrJk%2BoDZweEDx9lM4WGYbuP57QU&X-Amz-Signature=c7a051197d18658d770c9d2672d16ae271c1b92fc365a1536ae8909857aaaefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYALBPFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKOjsTuSYH1q3w0IM1oyFVhwSUkwn6iADan1Gu5toCAiBZ5niqwXotH55LQu7l14rSbP%2FV0q%2B8Tp%2FKfWNsUDMX3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMwTSvCiVvzKzAFLKtwDYgROIVfeHfYKPG0hWDCiAfJX6EEzmwJI2Hi4k4rvOC35WqiINFmDpKcpDoho3PP0hIRGOxWKALY6eJKKV%2FpMSAHcU3BIq0%2FBuoj%2FbBricZbGdmP0YXV9XX6J%2FxdtIGRyu46guZFFMFx9DhJU%2F4dS9YcT6vMQm4WkfNdzSRujQGg6715y%2Flt2TGVROTRNKe%2BaV%2FKbzAZHw5UMjoFaDFVIuMSc4keqCvn5vBiIBiSyLQJhOAg4cNJ3j11Zz%2ByIcZkxKDNaQrevS7%2FukN9g6p1vqn14TrbEPr%2B9Pa3lWQrei6rzANC7C8JofD827kkorlO6fFspnAmoFUpuWYD%2F45YonZvmhFh%2FdoBTz20ToAFeKmJJp3qlc5sDN3IQb2RjoDIrkneyDZo%2B2ZbFOKRqrmPV1sIoECntQnw%2FvqwFtWOMORx%2Bv2BPboN8ORs9d%2BYo7KJN%2BDOiUfPK2LtN%2FHiGMOQnqA9kYFfz%2FfumNcae4UfRpd4sLIlsH5ec1ZQSB0IaygZelgEbuy7v%2F7kbdom1uvtKq5zOgpohDdb2PZiXEK31HeGRC98vIzDu32M2nJ7lO83pgqujUzXJTwpd%2Bv7U%2FZbpRDiytlKCte6WCEb9LkImK813v1ezA5DdDCsds58wtdf8wgY6pgFFmjggqYLQNsyE8Trmji3n31lp5Cs3P7xdBj3IvTP48sWz4It69FclYJ%2B2dErkym1eAfddojM9k1ZwHVE5YXQIaFjKG6eVsFRPovbYCK6y2ZPYuAbOTrnjNRfwd50df1pR%2Bs1Zp4rlxl8ASmN%2FbS0uBqiGvs9O5%2FY%2F9u646NeqO3YuLzqo%2FH%2FFbvOh4Oobz%2BEcJUrJk%2BoDZweEDx9lM4WGYbuP57QU&X-Amz-Signature=256a20da363bc84c74ad5289103ad32a35e4974065b6104d781a33bc64cecc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYALBPFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKOjsTuSYH1q3w0IM1oyFVhwSUkwn6iADan1Gu5toCAiBZ5niqwXotH55LQu7l14rSbP%2FV0q%2B8Tp%2FKfWNsUDMX3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMwTSvCiVvzKzAFLKtwDYgROIVfeHfYKPG0hWDCiAfJX6EEzmwJI2Hi4k4rvOC35WqiINFmDpKcpDoho3PP0hIRGOxWKALY6eJKKV%2FpMSAHcU3BIq0%2FBuoj%2FbBricZbGdmP0YXV9XX6J%2FxdtIGRyu46guZFFMFx9DhJU%2F4dS9YcT6vMQm4WkfNdzSRujQGg6715y%2Flt2TGVROTRNKe%2BaV%2FKbzAZHw5UMjoFaDFVIuMSc4keqCvn5vBiIBiSyLQJhOAg4cNJ3j11Zz%2ByIcZkxKDNaQrevS7%2FukN9g6p1vqn14TrbEPr%2B9Pa3lWQrei6rzANC7C8JofD827kkorlO6fFspnAmoFUpuWYD%2F45YonZvmhFh%2FdoBTz20ToAFeKmJJp3qlc5sDN3IQb2RjoDIrkneyDZo%2B2ZbFOKRqrmPV1sIoECntQnw%2FvqwFtWOMORx%2Bv2BPboN8ORs9d%2BYo7KJN%2BDOiUfPK2LtN%2FHiGMOQnqA9kYFfz%2FfumNcae4UfRpd4sLIlsH5ec1ZQSB0IaygZelgEbuy7v%2F7kbdom1uvtKq5zOgpohDdb2PZiXEK31HeGRC98vIzDu32M2nJ7lO83pgqujUzXJTwpd%2Bv7U%2FZbpRDiytlKCte6WCEb9LkImK813v1ezA5DdDCsds58wtdf8wgY6pgFFmjggqYLQNsyE8Trmji3n31lp5Cs3P7xdBj3IvTP48sWz4It69FclYJ%2B2dErkym1eAfddojM9k1ZwHVE5YXQIaFjKG6eVsFRPovbYCK6y2ZPYuAbOTrnjNRfwd50df1pR%2Bs1Zp4rlxl8ASmN%2FbS0uBqiGvs9O5%2FY%2F9u646NeqO3YuLzqo%2FH%2FFbvOh4Oobz%2BEcJUrJk%2BoDZweEDx9lM4WGYbuP57QU&X-Amz-Signature=d5b93ed9941862485dbee9879cd22c8aa982e9e6ed27b48cc7561dd89ce33f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYALBPFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKOjsTuSYH1q3w0IM1oyFVhwSUkwn6iADan1Gu5toCAiBZ5niqwXotH55LQu7l14rSbP%2FV0q%2B8Tp%2FKfWNsUDMX3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMwTSvCiVvzKzAFLKtwDYgROIVfeHfYKPG0hWDCiAfJX6EEzmwJI2Hi4k4rvOC35WqiINFmDpKcpDoho3PP0hIRGOxWKALY6eJKKV%2FpMSAHcU3BIq0%2FBuoj%2FbBricZbGdmP0YXV9XX6J%2FxdtIGRyu46guZFFMFx9DhJU%2F4dS9YcT6vMQm4WkfNdzSRujQGg6715y%2Flt2TGVROTRNKe%2BaV%2FKbzAZHw5UMjoFaDFVIuMSc4keqCvn5vBiIBiSyLQJhOAg4cNJ3j11Zz%2ByIcZkxKDNaQrevS7%2FukN9g6p1vqn14TrbEPr%2B9Pa3lWQrei6rzANC7C8JofD827kkorlO6fFspnAmoFUpuWYD%2F45YonZvmhFh%2FdoBTz20ToAFeKmJJp3qlc5sDN3IQb2RjoDIrkneyDZo%2B2ZbFOKRqrmPV1sIoECntQnw%2FvqwFtWOMORx%2Bv2BPboN8ORs9d%2BYo7KJN%2BDOiUfPK2LtN%2FHiGMOQnqA9kYFfz%2FfumNcae4UfRpd4sLIlsH5ec1ZQSB0IaygZelgEbuy7v%2F7kbdom1uvtKq5zOgpohDdb2PZiXEK31HeGRC98vIzDu32M2nJ7lO83pgqujUzXJTwpd%2Bv7U%2FZbpRDiytlKCte6WCEb9LkImK813v1ezA5DdDCsds58wtdf8wgY6pgFFmjggqYLQNsyE8Trmji3n31lp5Cs3P7xdBj3IvTP48sWz4It69FclYJ%2B2dErkym1eAfddojM9k1ZwHVE5YXQIaFjKG6eVsFRPovbYCK6y2ZPYuAbOTrnjNRfwd50df1pR%2Bs1Zp4rlxl8ASmN%2FbS0uBqiGvs9O5%2FY%2F9u646NeqO3YuLzqo%2FH%2FFbvOh4Oobz%2BEcJUrJk%2BoDZweEDx9lM4WGYbuP57QU&X-Amz-Signature=eac8fd53b6acd8c4d3842c763c2b619ae7dc53b7a6901ad3f4a2579e4eca80b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYALBPFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKOjsTuSYH1q3w0IM1oyFVhwSUkwn6iADan1Gu5toCAiBZ5niqwXotH55LQu7l14rSbP%2FV0q%2B8Tp%2FKfWNsUDMX3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMwTSvCiVvzKzAFLKtwDYgROIVfeHfYKPG0hWDCiAfJX6EEzmwJI2Hi4k4rvOC35WqiINFmDpKcpDoho3PP0hIRGOxWKALY6eJKKV%2FpMSAHcU3BIq0%2FBuoj%2FbBricZbGdmP0YXV9XX6J%2FxdtIGRyu46guZFFMFx9DhJU%2F4dS9YcT6vMQm4WkfNdzSRujQGg6715y%2Flt2TGVROTRNKe%2BaV%2FKbzAZHw5UMjoFaDFVIuMSc4keqCvn5vBiIBiSyLQJhOAg4cNJ3j11Zz%2ByIcZkxKDNaQrevS7%2FukN9g6p1vqn14TrbEPr%2B9Pa3lWQrei6rzANC7C8JofD827kkorlO6fFspnAmoFUpuWYD%2F45YonZvmhFh%2FdoBTz20ToAFeKmJJp3qlc5sDN3IQb2RjoDIrkneyDZo%2B2ZbFOKRqrmPV1sIoECntQnw%2FvqwFtWOMORx%2Bv2BPboN8ORs9d%2BYo7KJN%2BDOiUfPK2LtN%2FHiGMOQnqA9kYFfz%2FfumNcae4UfRpd4sLIlsH5ec1ZQSB0IaygZelgEbuy7v%2F7kbdom1uvtKq5zOgpohDdb2PZiXEK31HeGRC98vIzDu32M2nJ7lO83pgqujUzXJTwpd%2Bv7U%2FZbpRDiytlKCte6WCEb9LkImK813v1ezA5DdDCsds58wtdf8wgY6pgFFmjggqYLQNsyE8Trmji3n31lp5Cs3P7xdBj3IvTP48sWz4It69FclYJ%2B2dErkym1eAfddojM9k1ZwHVE5YXQIaFjKG6eVsFRPovbYCK6y2ZPYuAbOTrnjNRfwd50df1pR%2Bs1Zp4rlxl8ASmN%2FbS0uBqiGvs9O5%2FY%2F9u646NeqO3YuLzqo%2FH%2FFbvOh4Oobz%2BEcJUrJk%2BoDZweEDx9lM4WGYbuP57QU&X-Amz-Signature=18f35c928b4d6d2c96406c1a9a10f3e728a8165be9de6ebc02f401fb205a6319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYALBPFQ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHcKOjsTuSYH1q3w0IM1oyFVhwSUkwn6iADan1Gu5toCAiBZ5niqwXotH55LQu7l14rSbP%2FV0q%2B8Tp%2FKfWNsUDMX3SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiMwTSvCiVvzKzAFLKtwDYgROIVfeHfYKPG0hWDCiAfJX6EEzmwJI2Hi4k4rvOC35WqiINFmDpKcpDoho3PP0hIRGOxWKALY6eJKKV%2FpMSAHcU3BIq0%2FBuoj%2FbBricZbGdmP0YXV9XX6J%2FxdtIGRyu46guZFFMFx9DhJU%2F4dS9YcT6vMQm4WkfNdzSRujQGg6715y%2Flt2TGVROTRNKe%2BaV%2FKbzAZHw5UMjoFaDFVIuMSc4keqCvn5vBiIBiSyLQJhOAg4cNJ3j11Zz%2ByIcZkxKDNaQrevS7%2FukN9g6p1vqn14TrbEPr%2B9Pa3lWQrei6rzANC7C8JofD827kkorlO6fFspnAmoFUpuWYD%2F45YonZvmhFh%2FdoBTz20ToAFeKmJJp3qlc5sDN3IQb2RjoDIrkneyDZo%2B2ZbFOKRqrmPV1sIoECntQnw%2FvqwFtWOMORx%2Bv2BPboN8ORs9d%2BYo7KJN%2BDOiUfPK2LtN%2FHiGMOQnqA9kYFfz%2FfumNcae4UfRpd4sLIlsH5ec1ZQSB0IaygZelgEbuy7v%2F7kbdom1uvtKq5zOgpohDdb2PZiXEK31HeGRC98vIzDu32M2nJ7lO83pgqujUzXJTwpd%2Bv7U%2FZbpRDiytlKCte6WCEb9LkImK813v1ezA5DdDCsds58wtdf8wgY6pgFFmjggqYLQNsyE8Trmji3n31lp5Cs3P7xdBj3IvTP48sWz4It69FclYJ%2B2dErkym1eAfddojM9k1ZwHVE5YXQIaFjKG6eVsFRPovbYCK6y2ZPYuAbOTrnjNRfwd50df1pR%2Bs1Zp4rlxl8ASmN%2FbS0uBqiGvs9O5%2FY%2F9u646NeqO3YuLzqo%2FH%2FFbvOh4Oobz%2BEcJUrJk%2BoDZweEDx9lM4WGYbuP57QU&X-Amz-Signature=9ac5d5e41639e4bd8f5c011d434c8e3523cd1d7936505ab3ba77bcd3332ef836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
