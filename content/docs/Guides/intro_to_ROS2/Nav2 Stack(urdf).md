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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG3NS5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8AbNsPdeiyFDXHxI1qxYg4gaQETbpl0NdPRzmrH4edAiEAtsHZEy7yZvXRIxR1oKWLq1XcnoJZHJrTzmozjRQhQWAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0J4pPBQT4V0jqHdyrcA82uRSIqk%2FYO2BWxSgP6vaP3Zcsz3cbpoJwtkrjtEWWAailzh8rckTCc4JfzGwhc%2BoNkD0IbHlvbFbQgQGlgGAM2cVsBM2JWQ7ig8SUOlKw8QCTalFBeLhHhkhA4yTuUgaa9nZSucpu8fctSjeE8SKIvDE1R4ZtBw9H6etPctHDCf%2FFYYaAbfCEfHUSiGKws84IEzZueURXX3sGwcmNieocwyt1obbZeaTtHBmSqzfK7YXZmjPcBDXXH1prwBX8RDm2iwQ%2FZyDD%2BrINMipk90DUr0glbjvpfdxNVonqKBA5%2F1c49HfiZo3YgSIcTpHOX2IvUnWF3bWKldcl8ptCzExfzJn%2B%2BnNXNVUJ0jfz%2FsVDoy21qGgqhhWTmM9eFP1e0ZfIYrqUZLYqOMfI3zim3LMi6mr6MufdPhaQtfItTVWcJxGUXSX9A3hiu4ZsctMdvVQRQiMaEgzBWQGj9Y03wXAKBNxTBuB17zNSr6HDC4Yo12iW2Fb%2FE3HpRckYe6rYZsP6UaRG1i9Zk2m2MkDFJiBb47yNqUPOhDiYTQ8BouKmFuKHldMJEhG970BkPWtJzmyf9D6LWBe643RK41qp9grfsCSBloiVHPiaSAOtAxVECOK7y5RwTBBuRn3BuMLSPpL0GOqUBy2nmfCPGutbqDT6kVyTutbCSnkc4n7utWBsk3slLT9CZCDGIpDadQ%2BjRxOdJfqINVM2hTymepTl51GJcvzMAeoORR4LbWsc0rGhFp0NISXZfBpQVMe1pr7x4v6OgDXo172Byc%2BBXXAXF5PBJsQ2F0sshCQKlQcqKBHeKi1mED8aJJF2vh%2FfJkEgjjQatTuvFa4kdAaVgPaW%2Bxwx0g6VSvBeEP6m4&X-Amz-Signature=414623373fba4e1fbdbb815367fe9cec50259896c2a4eda0ce06b2b7129301d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG3NS5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8AbNsPdeiyFDXHxI1qxYg4gaQETbpl0NdPRzmrH4edAiEAtsHZEy7yZvXRIxR1oKWLq1XcnoJZHJrTzmozjRQhQWAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0J4pPBQT4V0jqHdyrcA82uRSIqk%2FYO2BWxSgP6vaP3Zcsz3cbpoJwtkrjtEWWAailzh8rckTCc4JfzGwhc%2BoNkD0IbHlvbFbQgQGlgGAM2cVsBM2JWQ7ig8SUOlKw8QCTalFBeLhHhkhA4yTuUgaa9nZSucpu8fctSjeE8SKIvDE1R4ZtBw9H6etPctHDCf%2FFYYaAbfCEfHUSiGKws84IEzZueURXX3sGwcmNieocwyt1obbZeaTtHBmSqzfK7YXZmjPcBDXXH1prwBX8RDm2iwQ%2FZyDD%2BrINMipk90DUr0glbjvpfdxNVonqKBA5%2F1c49HfiZo3YgSIcTpHOX2IvUnWF3bWKldcl8ptCzExfzJn%2B%2BnNXNVUJ0jfz%2FsVDoy21qGgqhhWTmM9eFP1e0ZfIYrqUZLYqOMfI3zim3LMi6mr6MufdPhaQtfItTVWcJxGUXSX9A3hiu4ZsctMdvVQRQiMaEgzBWQGj9Y03wXAKBNxTBuB17zNSr6HDC4Yo12iW2Fb%2FE3HpRckYe6rYZsP6UaRG1i9Zk2m2MkDFJiBb47yNqUPOhDiYTQ8BouKmFuKHldMJEhG970BkPWtJzmyf9D6LWBe643RK41qp9grfsCSBloiVHPiaSAOtAxVECOK7y5RwTBBuRn3BuMLSPpL0GOqUBy2nmfCPGutbqDT6kVyTutbCSnkc4n7utWBsk3slLT9CZCDGIpDadQ%2BjRxOdJfqINVM2hTymepTl51GJcvzMAeoORR4LbWsc0rGhFp0NISXZfBpQVMe1pr7x4v6OgDXo172Byc%2BBXXAXF5PBJsQ2F0sshCQKlQcqKBHeKi1mED8aJJF2vh%2FfJkEgjjQatTuvFa4kdAaVgPaW%2Bxwx0g6VSvBeEP6m4&X-Amz-Signature=3378c65f5bfe48bfb6082cd65d7c4ddde5e0c851e3b0e9f2478f3072ed7871fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG3NS5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8AbNsPdeiyFDXHxI1qxYg4gaQETbpl0NdPRzmrH4edAiEAtsHZEy7yZvXRIxR1oKWLq1XcnoJZHJrTzmozjRQhQWAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0J4pPBQT4V0jqHdyrcA82uRSIqk%2FYO2BWxSgP6vaP3Zcsz3cbpoJwtkrjtEWWAailzh8rckTCc4JfzGwhc%2BoNkD0IbHlvbFbQgQGlgGAM2cVsBM2JWQ7ig8SUOlKw8QCTalFBeLhHhkhA4yTuUgaa9nZSucpu8fctSjeE8SKIvDE1R4ZtBw9H6etPctHDCf%2FFYYaAbfCEfHUSiGKws84IEzZueURXX3sGwcmNieocwyt1obbZeaTtHBmSqzfK7YXZmjPcBDXXH1prwBX8RDm2iwQ%2FZyDD%2BrINMipk90DUr0glbjvpfdxNVonqKBA5%2F1c49HfiZo3YgSIcTpHOX2IvUnWF3bWKldcl8ptCzExfzJn%2B%2BnNXNVUJ0jfz%2FsVDoy21qGgqhhWTmM9eFP1e0ZfIYrqUZLYqOMfI3zim3LMi6mr6MufdPhaQtfItTVWcJxGUXSX9A3hiu4ZsctMdvVQRQiMaEgzBWQGj9Y03wXAKBNxTBuB17zNSr6HDC4Yo12iW2Fb%2FE3HpRckYe6rYZsP6UaRG1i9Zk2m2MkDFJiBb47yNqUPOhDiYTQ8BouKmFuKHldMJEhG970BkPWtJzmyf9D6LWBe643RK41qp9grfsCSBloiVHPiaSAOtAxVECOK7y5RwTBBuRn3BuMLSPpL0GOqUBy2nmfCPGutbqDT6kVyTutbCSnkc4n7utWBsk3slLT9CZCDGIpDadQ%2BjRxOdJfqINVM2hTymepTl51GJcvzMAeoORR4LbWsc0rGhFp0NISXZfBpQVMe1pr7x4v6OgDXo172Byc%2BBXXAXF5PBJsQ2F0sshCQKlQcqKBHeKi1mED8aJJF2vh%2FfJkEgjjQatTuvFa4kdAaVgPaW%2Bxwx0g6VSvBeEP6m4&X-Amz-Signature=59046a47ea82062a11c062eb2b65d45ae6d6bca5ec7d7b08fb6f9415dedee4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG3NS5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8AbNsPdeiyFDXHxI1qxYg4gaQETbpl0NdPRzmrH4edAiEAtsHZEy7yZvXRIxR1oKWLq1XcnoJZHJrTzmozjRQhQWAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0J4pPBQT4V0jqHdyrcA82uRSIqk%2FYO2BWxSgP6vaP3Zcsz3cbpoJwtkrjtEWWAailzh8rckTCc4JfzGwhc%2BoNkD0IbHlvbFbQgQGlgGAM2cVsBM2JWQ7ig8SUOlKw8QCTalFBeLhHhkhA4yTuUgaa9nZSucpu8fctSjeE8SKIvDE1R4ZtBw9H6etPctHDCf%2FFYYaAbfCEfHUSiGKws84IEzZueURXX3sGwcmNieocwyt1obbZeaTtHBmSqzfK7YXZmjPcBDXXH1prwBX8RDm2iwQ%2FZyDD%2BrINMipk90DUr0glbjvpfdxNVonqKBA5%2F1c49HfiZo3YgSIcTpHOX2IvUnWF3bWKldcl8ptCzExfzJn%2B%2BnNXNVUJ0jfz%2FsVDoy21qGgqhhWTmM9eFP1e0ZfIYrqUZLYqOMfI3zim3LMi6mr6MufdPhaQtfItTVWcJxGUXSX9A3hiu4ZsctMdvVQRQiMaEgzBWQGj9Y03wXAKBNxTBuB17zNSr6HDC4Yo12iW2Fb%2FE3HpRckYe6rYZsP6UaRG1i9Zk2m2MkDFJiBb47yNqUPOhDiYTQ8BouKmFuKHldMJEhG970BkPWtJzmyf9D6LWBe643RK41qp9grfsCSBloiVHPiaSAOtAxVECOK7y5RwTBBuRn3BuMLSPpL0GOqUBy2nmfCPGutbqDT6kVyTutbCSnkc4n7utWBsk3slLT9CZCDGIpDadQ%2BjRxOdJfqINVM2hTymepTl51GJcvzMAeoORR4LbWsc0rGhFp0NISXZfBpQVMe1pr7x4v6OgDXo172Byc%2BBXXAXF5PBJsQ2F0sshCQKlQcqKBHeKi1mED8aJJF2vh%2FfJkEgjjQatTuvFa4kdAaVgPaW%2Bxwx0g6VSvBeEP6m4&X-Amz-Signature=7104c550a69dbb90b3fc6dc029300c211399fc5a07f7e9abf003c2179aa86c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG3NS5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8AbNsPdeiyFDXHxI1qxYg4gaQETbpl0NdPRzmrH4edAiEAtsHZEy7yZvXRIxR1oKWLq1XcnoJZHJrTzmozjRQhQWAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0J4pPBQT4V0jqHdyrcA82uRSIqk%2FYO2BWxSgP6vaP3Zcsz3cbpoJwtkrjtEWWAailzh8rckTCc4JfzGwhc%2BoNkD0IbHlvbFbQgQGlgGAM2cVsBM2JWQ7ig8SUOlKw8QCTalFBeLhHhkhA4yTuUgaa9nZSucpu8fctSjeE8SKIvDE1R4ZtBw9H6etPctHDCf%2FFYYaAbfCEfHUSiGKws84IEzZueURXX3sGwcmNieocwyt1obbZeaTtHBmSqzfK7YXZmjPcBDXXH1prwBX8RDm2iwQ%2FZyDD%2BrINMipk90DUr0glbjvpfdxNVonqKBA5%2F1c49HfiZo3YgSIcTpHOX2IvUnWF3bWKldcl8ptCzExfzJn%2B%2BnNXNVUJ0jfz%2FsVDoy21qGgqhhWTmM9eFP1e0ZfIYrqUZLYqOMfI3zim3LMi6mr6MufdPhaQtfItTVWcJxGUXSX9A3hiu4ZsctMdvVQRQiMaEgzBWQGj9Y03wXAKBNxTBuB17zNSr6HDC4Yo12iW2Fb%2FE3HpRckYe6rYZsP6UaRG1i9Zk2m2MkDFJiBb47yNqUPOhDiYTQ8BouKmFuKHldMJEhG970BkPWtJzmyf9D6LWBe643RK41qp9grfsCSBloiVHPiaSAOtAxVECOK7y5RwTBBuRn3BuMLSPpL0GOqUBy2nmfCPGutbqDT6kVyTutbCSnkc4n7utWBsk3slLT9CZCDGIpDadQ%2BjRxOdJfqINVM2hTymepTl51GJcvzMAeoORR4LbWsc0rGhFp0NISXZfBpQVMe1pr7x4v6OgDXo172Byc%2BBXXAXF5PBJsQ2F0sshCQKlQcqKBHeKi1mED8aJJF2vh%2FfJkEgjjQatTuvFa4kdAaVgPaW%2Bxwx0g6VSvBeEP6m4&X-Amz-Signature=5167b8daacc98941499ac82994043dd7c5cdb9eeaee50aae9e775810f97d5899&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZG3NS5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8AbNsPdeiyFDXHxI1qxYg4gaQETbpl0NdPRzmrH4edAiEAtsHZEy7yZvXRIxR1oKWLq1XcnoJZHJrTzmozjRQhQWAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0J4pPBQT4V0jqHdyrcA82uRSIqk%2FYO2BWxSgP6vaP3Zcsz3cbpoJwtkrjtEWWAailzh8rckTCc4JfzGwhc%2BoNkD0IbHlvbFbQgQGlgGAM2cVsBM2JWQ7ig8SUOlKw8QCTalFBeLhHhkhA4yTuUgaa9nZSucpu8fctSjeE8SKIvDE1R4ZtBw9H6etPctHDCf%2FFYYaAbfCEfHUSiGKws84IEzZueURXX3sGwcmNieocwyt1obbZeaTtHBmSqzfK7YXZmjPcBDXXH1prwBX8RDm2iwQ%2FZyDD%2BrINMipk90DUr0glbjvpfdxNVonqKBA5%2F1c49HfiZo3YgSIcTpHOX2IvUnWF3bWKldcl8ptCzExfzJn%2B%2BnNXNVUJ0jfz%2FsVDoy21qGgqhhWTmM9eFP1e0ZfIYrqUZLYqOMfI3zim3LMi6mr6MufdPhaQtfItTVWcJxGUXSX9A3hiu4ZsctMdvVQRQiMaEgzBWQGj9Y03wXAKBNxTBuB17zNSr6HDC4Yo12iW2Fb%2FE3HpRckYe6rYZsP6UaRG1i9Zk2m2MkDFJiBb47yNqUPOhDiYTQ8BouKmFuKHldMJEhG970BkPWtJzmyf9D6LWBe643RK41qp9grfsCSBloiVHPiaSAOtAxVECOK7y5RwTBBuRn3BuMLSPpL0GOqUBy2nmfCPGutbqDT6kVyTutbCSnkc4n7utWBsk3slLT9CZCDGIpDadQ%2BjRxOdJfqINVM2hTymepTl51GJcvzMAeoORR4LbWsc0rGhFp0NISXZfBpQVMe1pr7x4v6OgDXo172Byc%2BBXXAXF5PBJsQ2F0sshCQKlQcqKBHeKi1mED8aJJF2vh%2FfJkEgjjQatTuvFa4kdAaVgPaW%2Bxwx0g6VSvBeEP6m4&X-Amz-Signature=1b3816e6577f46872d5a0efb885a96272ba25e46265612db565281f9c9edc753&X-Amz-SignedHeaders=host&x-id=GetObject)
