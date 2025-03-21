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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUHFOY7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA8q%2FfCM%2B5G53izvKnj99C%2F3BeEPvkp8h2J5%2F5SwlD6eAiBQ4Ga82EDvU5JIEhD2l8ZQ4c7oScVCBwq8D7UuijXYwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3f8Ceyt9RjKL%2BR%2FKtwDf82k0l9qdfxFq5Q5APS9WocnCsmZFvtWe124ornWnblRTyQLb%2FuZhMt%2FUxrqUnt3NFab%2B8gp%2Bm%2BLAtl4ycvATNqffpCJdekLKROQw%2FgfApZChXnYJy84rCS8eSiQsg3PNhNiaV3fYcU6V3eYAy8sbzgVo7waC31ED7SeOFoloa%2FzYl5%2FcY1Jxf3O4%2FCJg3T01ZRSAdGn18fGPDG6jQT35jJX5Q1bEw7902c1bacMgV1odwqjkRuhyDjniSxPqayA9Bl%2FeefvQEn5xdbAxRP%2BhQ2hwJNHpu%2FEFzkrZ2WqelPwJiC1H4DHH9rlhemZqTDM1pnxKMVZbt43kkDQwEJMIJ2PUqzUP1NEAUUiGykTQdveue47QyoVxFE98OogTT3pkzqY2BJHesB%2Fx4xv4l7a%2BlkJIQrqeKzwX7O4zRkZ9NtCbDO4hH8g1hvXs%2B8CJD1c8ZN8G5SLysHrEk%2BA4zodeECzxHzifZ9RQmhzL2QoIhHAY3%2F%2FHm2CdFwL7aluxgTWjBBV8fB4V9QMntxRNgW0a6plR8vuDtjWcK4a45zop3g%2FLV%2FtfOXiO1nfMcDDPn8OnuwZwWha7w4AB6uLqSQfzOxBlWlG25U4CqI1ViVcqFLyotI%2FmSESDthOT9ww8pf0vgY6pgGdRlymIL%2FsnlcUi7OwWKWfGPipFS9IUetHgxTDCELFeaO5VEPIgI%2B%2BInEqhvKjmMW5rrEUaN%2FwALen6tVxMgQ0IJEA9MIrsbDOoWHuvqEnUGMe7%2FKzN5B7KLoQELyPIQ9ehgkNI1vY1OTBidt%2FbIZS2vDqF6kgyCLcIzhxuhs0fwyyqVS75EWIUwa3uYAYvOrf4DI%2BtIS3KwYqbjhm2c7iuSxWxpzD&X-Amz-Signature=82d568b5bc9f7ae84ca8be863124b53678adfde24a0bde5dadabfb8cadc18245&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUHFOY7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA8q%2FfCM%2B5G53izvKnj99C%2F3BeEPvkp8h2J5%2F5SwlD6eAiBQ4Ga82EDvU5JIEhD2l8ZQ4c7oScVCBwq8D7UuijXYwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3f8Ceyt9RjKL%2BR%2FKtwDf82k0l9qdfxFq5Q5APS9WocnCsmZFvtWe124ornWnblRTyQLb%2FuZhMt%2FUxrqUnt3NFab%2B8gp%2Bm%2BLAtl4ycvATNqffpCJdekLKROQw%2FgfApZChXnYJy84rCS8eSiQsg3PNhNiaV3fYcU6V3eYAy8sbzgVo7waC31ED7SeOFoloa%2FzYl5%2FcY1Jxf3O4%2FCJg3T01ZRSAdGn18fGPDG6jQT35jJX5Q1bEw7902c1bacMgV1odwqjkRuhyDjniSxPqayA9Bl%2FeefvQEn5xdbAxRP%2BhQ2hwJNHpu%2FEFzkrZ2WqelPwJiC1H4DHH9rlhemZqTDM1pnxKMVZbt43kkDQwEJMIJ2PUqzUP1NEAUUiGykTQdveue47QyoVxFE98OogTT3pkzqY2BJHesB%2Fx4xv4l7a%2BlkJIQrqeKzwX7O4zRkZ9NtCbDO4hH8g1hvXs%2B8CJD1c8ZN8G5SLysHrEk%2BA4zodeECzxHzifZ9RQmhzL2QoIhHAY3%2F%2FHm2CdFwL7aluxgTWjBBV8fB4V9QMntxRNgW0a6plR8vuDtjWcK4a45zop3g%2FLV%2FtfOXiO1nfMcDDPn8OnuwZwWha7w4AB6uLqSQfzOxBlWlG25U4CqI1ViVcqFLyotI%2FmSESDthOT9ww8pf0vgY6pgGdRlymIL%2FsnlcUi7OwWKWfGPipFS9IUetHgxTDCELFeaO5VEPIgI%2B%2BInEqhvKjmMW5rrEUaN%2FwALen6tVxMgQ0IJEA9MIrsbDOoWHuvqEnUGMe7%2FKzN5B7KLoQELyPIQ9ehgkNI1vY1OTBidt%2FbIZS2vDqF6kgyCLcIzhxuhs0fwyyqVS75EWIUwa3uYAYvOrf4DI%2BtIS3KwYqbjhm2c7iuSxWxpzD&X-Amz-Signature=9a250b52ed7b37bb91b0a6230512855231b81c5b9e59976161c9ecd5787214be&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUHFOY7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA8q%2FfCM%2B5G53izvKnj99C%2F3BeEPvkp8h2J5%2F5SwlD6eAiBQ4Ga82EDvU5JIEhD2l8ZQ4c7oScVCBwq8D7UuijXYwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3f8Ceyt9RjKL%2BR%2FKtwDf82k0l9qdfxFq5Q5APS9WocnCsmZFvtWe124ornWnblRTyQLb%2FuZhMt%2FUxrqUnt3NFab%2B8gp%2Bm%2BLAtl4ycvATNqffpCJdekLKROQw%2FgfApZChXnYJy84rCS8eSiQsg3PNhNiaV3fYcU6V3eYAy8sbzgVo7waC31ED7SeOFoloa%2FzYl5%2FcY1Jxf3O4%2FCJg3T01ZRSAdGn18fGPDG6jQT35jJX5Q1bEw7902c1bacMgV1odwqjkRuhyDjniSxPqayA9Bl%2FeefvQEn5xdbAxRP%2BhQ2hwJNHpu%2FEFzkrZ2WqelPwJiC1H4DHH9rlhemZqTDM1pnxKMVZbt43kkDQwEJMIJ2PUqzUP1NEAUUiGykTQdveue47QyoVxFE98OogTT3pkzqY2BJHesB%2Fx4xv4l7a%2BlkJIQrqeKzwX7O4zRkZ9NtCbDO4hH8g1hvXs%2B8CJD1c8ZN8G5SLysHrEk%2BA4zodeECzxHzifZ9RQmhzL2QoIhHAY3%2F%2FHm2CdFwL7aluxgTWjBBV8fB4V9QMntxRNgW0a6plR8vuDtjWcK4a45zop3g%2FLV%2FtfOXiO1nfMcDDPn8OnuwZwWha7w4AB6uLqSQfzOxBlWlG25U4CqI1ViVcqFLyotI%2FmSESDthOT9ww8pf0vgY6pgGdRlymIL%2FsnlcUi7OwWKWfGPipFS9IUetHgxTDCELFeaO5VEPIgI%2B%2BInEqhvKjmMW5rrEUaN%2FwALen6tVxMgQ0IJEA9MIrsbDOoWHuvqEnUGMe7%2FKzN5B7KLoQELyPIQ9ehgkNI1vY1OTBidt%2FbIZS2vDqF6kgyCLcIzhxuhs0fwyyqVS75EWIUwa3uYAYvOrf4DI%2BtIS3KwYqbjhm2c7iuSxWxpzD&X-Amz-Signature=cd07891c821361ff9173a859636f5f41731e12b3891bfb3fe0eac92de23e6a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUHFOY7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA8q%2FfCM%2B5G53izvKnj99C%2F3BeEPvkp8h2J5%2F5SwlD6eAiBQ4Ga82EDvU5JIEhD2l8ZQ4c7oScVCBwq8D7UuijXYwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3f8Ceyt9RjKL%2BR%2FKtwDf82k0l9qdfxFq5Q5APS9WocnCsmZFvtWe124ornWnblRTyQLb%2FuZhMt%2FUxrqUnt3NFab%2B8gp%2Bm%2BLAtl4ycvATNqffpCJdekLKROQw%2FgfApZChXnYJy84rCS8eSiQsg3PNhNiaV3fYcU6V3eYAy8sbzgVo7waC31ED7SeOFoloa%2FzYl5%2FcY1Jxf3O4%2FCJg3T01ZRSAdGn18fGPDG6jQT35jJX5Q1bEw7902c1bacMgV1odwqjkRuhyDjniSxPqayA9Bl%2FeefvQEn5xdbAxRP%2BhQ2hwJNHpu%2FEFzkrZ2WqelPwJiC1H4DHH9rlhemZqTDM1pnxKMVZbt43kkDQwEJMIJ2PUqzUP1NEAUUiGykTQdveue47QyoVxFE98OogTT3pkzqY2BJHesB%2Fx4xv4l7a%2BlkJIQrqeKzwX7O4zRkZ9NtCbDO4hH8g1hvXs%2B8CJD1c8ZN8G5SLysHrEk%2BA4zodeECzxHzifZ9RQmhzL2QoIhHAY3%2F%2FHm2CdFwL7aluxgTWjBBV8fB4V9QMntxRNgW0a6plR8vuDtjWcK4a45zop3g%2FLV%2FtfOXiO1nfMcDDPn8OnuwZwWha7w4AB6uLqSQfzOxBlWlG25U4CqI1ViVcqFLyotI%2FmSESDthOT9ww8pf0vgY6pgGdRlymIL%2FsnlcUi7OwWKWfGPipFS9IUetHgxTDCELFeaO5VEPIgI%2B%2BInEqhvKjmMW5rrEUaN%2FwALen6tVxMgQ0IJEA9MIrsbDOoWHuvqEnUGMe7%2FKzN5B7KLoQELyPIQ9ehgkNI1vY1OTBidt%2FbIZS2vDqF6kgyCLcIzhxuhs0fwyyqVS75EWIUwa3uYAYvOrf4DI%2BtIS3KwYqbjhm2c7iuSxWxpzD&X-Amz-Signature=bb9fa8c8da2e3a7a7c195cd7a0db45bd9f417f22d27edff4c5061adaaa3ed52c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUHFOY7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA8q%2FfCM%2B5G53izvKnj99C%2F3BeEPvkp8h2J5%2F5SwlD6eAiBQ4Ga82EDvU5JIEhD2l8ZQ4c7oScVCBwq8D7UuijXYwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3f8Ceyt9RjKL%2BR%2FKtwDf82k0l9qdfxFq5Q5APS9WocnCsmZFvtWe124ornWnblRTyQLb%2FuZhMt%2FUxrqUnt3NFab%2B8gp%2Bm%2BLAtl4ycvATNqffpCJdekLKROQw%2FgfApZChXnYJy84rCS8eSiQsg3PNhNiaV3fYcU6V3eYAy8sbzgVo7waC31ED7SeOFoloa%2FzYl5%2FcY1Jxf3O4%2FCJg3T01ZRSAdGn18fGPDG6jQT35jJX5Q1bEw7902c1bacMgV1odwqjkRuhyDjniSxPqayA9Bl%2FeefvQEn5xdbAxRP%2BhQ2hwJNHpu%2FEFzkrZ2WqelPwJiC1H4DHH9rlhemZqTDM1pnxKMVZbt43kkDQwEJMIJ2PUqzUP1NEAUUiGykTQdveue47QyoVxFE98OogTT3pkzqY2BJHesB%2Fx4xv4l7a%2BlkJIQrqeKzwX7O4zRkZ9NtCbDO4hH8g1hvXs%2B8CJD1c8ZN8G5SLysHrEk%2BA4zodeECzxHzifZ9RQmhzL2QoIhHAY3%2F%2FHm2CdFwL7aluxgTWjBBV8fB4V9QMntxRNgW0a6plR8vuDtjWcK4a45zop3g%2FLV%2FtfOXiO1nfMcDDPn8OnuwZwWha7w4AB6uLqSQfzOxBlWlG25U4CqI1ViVcqFLyotI%2FmSESDthOT9ww8pf0vgY6pgGdRlymIL%2FsnlcUi7OwWKWfGPipFS9IUetHgxTDCELFeaO5VEPIgI%2B%2BInEqhvKjmMW5rrEUaN%2FwALen6tVxMgQ0IJEA9MIrsbDOoWHuvqEnUGMe7%2FKzN5B7KLoQELyPIQ9ehgkNI1vY1OTBidt%2FbIZS2vDqF6kgyCLcIzhxuhs0fwyyqVS75EWIUwa3uYAYvOrf4DI%2BtIS3KwYqbjhm2c7iuSxWxpzD&X-Amz-Signature=bd1d0aecf091b0dfe1be128049b1e0a32fc3f55a6bba833ac356d7fc4824dffc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZUHFOY7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA8q%2FfCM%2B5G53izvKnj99C%2F3BeEPvkp8h2J5%2F5SwlD6eAiBQ4Ga82EDvU5JIEhD2l8ZQ4c7oScVCBwq8D7UuijXYwiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc3f8Ceyt9RjKL%2BR%2FKtwDf82k0l9qdfxFq5Q5APS9WocnCsmZFvtWe124ornWnblRTyQLb%2FuZhMt%2FUxrqUnt3NFab%2B8gp%2Bm%2BLAtl4ycvATNqffpCJdekLKROQw%2FgfApZChXnYJy84rCS8eSiQsg3PNhNiaV3fYcU6V3eYAy8sbzgVo7waC31ED7SeOFoloa%2FzYl5%2FcY1Jxf3O4%2FCJg3T01ZRSAdGn18fGPDG6jQT35jJX5Q1bEw7902c1bacMgV1odwqjkRuhyDjniSxPqayA9Bl%2FeefvQEn5xdbAxRP%2BhQ2hwJNHpu%2FEFzkrZ2WqelPwJiC1H4DHH9rlhemZqTDM1pnxKMVZbt43kkDQwEJMIJ2PUqzUP1NEAUUiGykTQdveue47QyoVxFE98OogTT3pkzqY2BJHesB%2Fx4xv4l7a%2BlkJIQrqeKzwX7O4zRkZ9NtCbDO4hH8g1hvXs%2B8CJD1c8ZN8G5SLysHrEk%2BA4zodeECzxHzifZ9RQmhzL2QoIhHAY3%2F%2FHm2CdFwL7aluxgTWjBBV8fB4V9QMntxRNgW0a6plR8vuDtjWcK4a45zop3g%2FLV%2FtfOXiO1nfMcDDPn8OnuwZwWha7w4AB6uLqSQfzOxBlWlG25U4CqI1ViVcqFLyotI%2FmSESDthOT9ww8pf0vgY6pgGdRlymIL%2FsnlcUi7OwWKWfGPipFS9IUetHgxTDCELFeaO5VEPIgI%2B%2BInEqhvKjmMW5rrEUaN%2FwALen6tVxMgQ0IJEA9MIrsbDOoWHuvqEnUGMe7%2FKzN5B7KLoQELyPIQ9ehgkNI1vY1OTBidt%2FbIZS2vDqF6kgyCLcIzhxuhs0fwyyqVS75EWIUwa3uYAYvOrf4DI%2BtIS3KwYqbjhm2c7iuSxWxpzD&X-Amz-Signature=a0c7f3d823dfd774a56d3351f5c469189e3313e9729a6476cfaf2a0781f531bb&X-Amz-SignedHeaders=host&x-id=GetObject)
