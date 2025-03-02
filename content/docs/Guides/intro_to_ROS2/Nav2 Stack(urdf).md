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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTN2PQD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRTWuQcpYmRuSj%2FvWZkeaVAas0DgwfO4RRIv5UecVJAIgdZteUTwwjnEKzRVYqu5yPg%2Bhlm17kM8%2BbRfYejWVt2IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo9d9%2B3lS3LWvUOACrcA4%2FQWNc6svYZCRiPnvsW2d1kkmWm2nZ2yqIPlW1%2FxEW1Ju7ZK0xbdGKhzsXUVzKSprHuEyArQ8pMuhaJ4n6j7FnW3bAZ8eijZYP5tRchZvDCHcP5RpVKPTgK3Jr2PI0%2BRTuXJA0mNatXCiTWmM4RdOf2hVXoi2HwZ%2F2hhgGoDrLMn%2B7libcuISpEAVJZIW2slgUuBSFlTJ8abMwgv1t95%2FQOSbJ47unHpTlbxzataVDOaaUIHhggn0Vbf%2FIozvFlnrPsGQRu3wLxLMEb1x%2FGDJYC%2F1X2NPwrYzh%2Fo00t7rqdD6qL9oAW2YPAPK4Nat4KIkUCLCihkSAVZ5FXPS2vxyM6kjQBRVXCl4V8xuwLtOcrvknq0wcDgp0fF8cmz%2BeI21KgHjMGNaFtB0XX2IkW3HVCyRHE2Rz6oPGDwFjxw0qbqeQ%2F2HciG%2BAjdXQidq5cBTfe%2ByuFdKZ61xV7XhqAyoc7gzxk%2BeqkiLIZSkSAXpAK3iwlxgRTRfSugLtGiGJFNOjKGTOh0q%2Fgj722uRwmFcqouIXsP2T9K3BYYFeNu8Rg9qf3XdDN2R7%2F%2F%2FYZkhOHt9YT4HKwVeiGJHwV3Z8R6v5BRKVioe9XU9YQtxEu4xvDT2WqvIhXW5tBu222MPP4kL4GOqUBjCuhdTgSb%2BwqVM2liLq8NpnXG7uxxJopq1VKazih2pCHHLYuRgF1AYIn4bZGN3%2BF%2F7jWydIAabPFq7Fe7XxMLlYKRPsC2cER1TQQs%2FOHc%2BuNIGV4p7fbITqa1%2F2sTD5KnbBFlD3wLMQoibEkPcrE8SC7XFjCktuTnrqj%2B4aN9ZVIH9hhVjloL6R4gRFgUV0hKHg71azJPuuORvLH2u%2BZlWAkIDY%2B&X-Amz-Signature=4d1f1fc4467eff2a59433685706ca40194c0749ef7fda7e1f1600ff818644c93&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTN2PQD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRTWuQcpYmRuSj%2FvWZkeaVAas0DgwfO4RRIv5UecVJAIgdZteUTwwjnEKzRVYqu5yPg%2Bhlm17kM8%2BbRfYejWVt2IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo9d9%2B3lS3LWvUOACrcA4%2FQWNc6svYZCRiPnvsW2d1kkmWm2nZ2yqIPlW1%2FxEW1Ju7ZK0xbdGKhzsXUVzKSprHuEyArQ8pMuhaJ4n6j7FnW3bAZ8eijZYP5tRchZvDCHcP5RpVKPTgK3Jr2PI0%2BRTuXJA0mNatXCiTWmM4RdOf2hVXoi2HwZ%2F2hhgGoDrLMn%2B7libcuISpEAVJZIW2slgUuBSFlTJ8abMwgv1t95%2FQOSbJ47unHpTlbxzataVDOaaUIHhggn0Vbf%2FIozvFlnrPsGQRu3wLxLMEb1x%2FGDJYC%2F1X2NPwrYzh%2Fo00t7rqdD6qL9oAW2YPAPK4Nat4KIkUCLCihkSAVZ5FXPS2vxyM6kjQBRVXCl4V8xuwLtOcrvknq0wcDgp0fF8cmz%2BeI21KgHjMGNaFtB0XX2IkW3HVCyRHE2Rz6oPGDwFjxw0qbqeQ%2F2HciG%2BAjdXQidq5cBTfe%2ByuFdKZ61xV7XhqAyoc7gzxk%2BeqkiLIZSkSAXpAK3iwlxgRTRfSugLtGiGJFNOjKGTOh0q%2Fgj722uRwmFcqouIXsP2T9K3BYYFeNu8Rg9qf3XdDN2R7%2F%2F%2FYZkhOHt9YT4HKwVeiGJHwV3Z8R6v5BRKVioe9XU9YQtxEu4xvDT2WqvIhXW5tBu222MPP4kL4GOqUBjCuhdTgSb%2BwqVM2liLq8NpnXG7uxxJopq1VKazih2pCHHLYuRgF1AYIn4bZGN3%2BF%2F7jWydIAabPFq7Fe7XxMLlYKRPsC2cER1TQQs%2FOHc%2BuNIGV4p7fbITqa1%2F2sTD5KnbBFlD3wLMQoibEkPcrE8SC7XFjCktuTnrqj%2B4aN9ZVIH9hhVjloL6R4gRFgUV0hKHg71azJPuuORvLH2u%2BZlWAkIDY%2B&X-Amz-Signature=679b1bb3188bd5dfc982d1219de1c20b45f00e6a5ee1e798a5b1c21074e53fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTN2PQD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRTWuQcpYmRuSj%2FvWZkeaVAas0DgwfO4RRIv5UecVJAIgdZteUTwwjnEKzRVYqu5yPg%2Bhlm17kM8%2BbRfYejWVt2IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo9d9%2B3lS3LWvUOACrcA4%2FQWNc6svYZCRiPnvsW2d1kkmWm2nZ2yqIPlW1%2FxEW1Ju7ZK0xbdGKhzsXUVzKSprHuEyArQ8pMuhaJ4n6j7FnW3bAZ8eijZYP5tRchZvDCHcP5RpVKPTgK3Jr2PI0%2BRTuXJA0mNatXCiTWmM4RdOf2hVXoi2HwZ%2F2hhgGoDrLMn%2B7libcuISpEAVJZIW2slgUuBSFlTJ8abMwgv1t95%2FQOSbJ47unHpTlbxzataVDOaaUIHhggn0Vbf%2FIozvFlnrPsGQRu3wLxLMEb1x%2FGDJYC%2F1X2NPwrYzh%2Fo00t7rqdD6qL9oAW2YPAPK4Nat4KIkUCLCihkSAVZ5FXPS2vxyM6kjQBRVXCl4V8xuwLtOcrvknq0wcDgp0fF8cmz%2BeI21KgHjMGNaFtB0XX2IkW3HVCyRHE2Rz6oPGDwFjxw0qbqeQ%2F2HciG%2BAjdXQidq5cBTfe%2ByuFdKZ61xV7XhqAyoc7gzxk%2BeqkiLIZSkSAXpAK3iwlxgRTRfSugLtGiGJFNOjKGTOh0q%2Fgj722uRwmFcqouIXsP2T9K3BYYFeNu8Rg9qf3XdDN2R7%2F%2F%2FYZkhOHt9YT4HKwVeiGJHwV3Z8R6v5BRKVioe9XU9YQtxEu4xvDT2WqvIhXW5tBu222MPP4kL4GOqUBjCuhdTgSb%2BwqVM2liLq8NpnXG7uxxJopq1VKazih2pCHHLYuRgF1AYIn4bZGN3%2BF%2F7jWydIAabPFq7Fe7XxMLlYKRPsC2cER1TQQs%2FOHc%2BuNIGV4p7fbITqa1%2F2sTD5KnbBFlD3wLMQoibEkPcrE8SC7XFjCktuTnrqj%2B4aN9ZVIH9hhVjloL6R4gRFgUV0hKHg71azJPuuORvLH2u%2BZlWAkIDY%2B&X-Amz-Signature=f02388a465576dd131fcb92273f710c725773f01e54583668195972f2d22bfb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTN2PQD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRTWuQcpYmRuSj%2FvWZkeaVAas0DgwfO4RRIv5UecVJAIgdZteUTwwjnEKzRVYqu5yPg%2Bhlm17kM8%2BbRfYejWVt2IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo9d9%2B3lS3LWvUOACrcA4%2FQWNc6svYZCRiPnvsW2d1kkmWm2nZ2yqIPlW1%2FxEW1Ju7ZK0xbdGKhzsXUVzKSprHuEyArQ8pMuhaJ4n6j7FnW3bAZ8eijZYP5tRchZvDCHcP5RpVKPTgK3Jr2PI0%2BRTuXJA0mNatXCiTWmM4RdOf2hVXoi2HwZ%2F2hhgGoDrLMn%2B7libcuISpEAVJZIW2slgUuBSFlTJ8abMwgv1t95%2FQOSbJ47unHpTlbxzataVDOaaUIHhggn0Vbf%2FIozvFlnrPsGQRu3wLxLMEb1x%2FGDJYC%2F1X2NPwrYzh%2Fo00t7rqdD6qL9oAW2YPAPK4Nat4KIkUCLCihkSAVZ5FXPS2vxyM6kjQBRVXCl4V8xuwLtOcrvknq0wcDgp0fF8cmz%2BeI21KgHjMGNaFtB0XX2IkW3HVCyRHE2Rz6oPGDwFjxw0qbqeQ%2F2HciG%2BAjdXQidq5cBTfe%2ByuFdKZ61xV7XhqAyoc7gzxk%2BeqkiLIZSkSAXpAK3iwlxgRTRfSugLtGiGJFNOjKGTOh0q%2Fgj722uRwmFcqouIXsP2T9K3BYYFeNu8Rg9qf3XdDN2R7%2F%2F%2FYZkhOHt9YT4HKwVeiGJHwV3Z8R6v5BRKVioe9XU9YQtxEu4xvDT2WqvIhXW5tBu222MPP4kL4GOqUBjCuhdTgSb%2BwqVM2liLq8NpnXG7uxxJopq1VKazih2pCHHLYuRgF1AYIn4bZGN3%2BF%2F7jWydIAabPFq7Fe7XxMLlYKRPsC2cER1TQQs%2FOHc%2BuNIGV4p7fbITqa1%2F2sTD5KnbBFlD3wLMQoibEkPcrE8SC7XFjCktuTnrqj%2B4aN9ZVIH9hhVjloL6R4gRFgUV0hKHg71azJPuuORvLH2u%2BZlWAkIDY%2B&X-Amz-Signature=4b3f73f2f87533fecc846907bf82717bcad87a911a2a667fea28e0665d2bd8cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTN2PQD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRTWuQcpYmRuSj%2FvWZkeaVAas0DgwfO4RRIv5UecVJAIgdZteUTwwjnEKzRVYqu5yPg%2Bhlm17kM8%2BbRfYejWVt2IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo9d9%2B3lS3LWvUOACrcA4%2FQWNc6svYZCRiPnvsW2d1kkmWm2nZ2yqIPlW1%2FxEW1Ju7ZK0xbdGKhzsXUVzKSprHuEyArQ8pMuhaJ4n6j7FnW3bAZ8eijZYP5tRchZvDCHcP5RpVKPTgK3Jr2PI0%2BRTuXJA0mNatXCiTWmM4RdOf2hVXoi2HwZ%2F2hhgGoDrLMn%2B7libcuISpEAVJZIW2slgUuBSFlTJ8abMwgv1t95%2FQOSbJ47unHpTlbxzataVDOaaUIHhggn0Vbf%2FIozvFlnrPsGQRu3wLxLMEb1x%2FGDJYC%2F1X2NPwrYzh%2Fo00t7rqdD6qL9oAW2YPAPK4Nat4KIkUCLCihkSAVZ5FXPS2vxyM6kjQBRVXCl4V8xuwLtOcrvknq0wcDgp0fF8cmz%2BeI21KgHjMGNaFtB0XX2IkW3HVCyRHE2Rz6oPGDwFjxw0qbqeQ%2F2HciG%2BAjdXQidq5cBTfe%2ByuFdKZ61xV7XhqAyoc7gzxk%2BeqkiLIZSkSAXpAK3iwlxgRTRfSugLtGiGJFNOjKGTOh0q%2Fgj722uRwmFcqouIXsP2T9K3BYYFeNu8Rg9qf3XdDN2R7%2F%2F%2FYZkhOHt9YT4HKwVeiGJHwV3Z8R6v5BRKVioe9XU9YQtxEu4xvDT2WqvIhXW5tBu222MPP4kL4GOqUBjCuhdTgSb%2BwqVM2liLq8NpnXG7uxxJopq1VKazih2pCHHLYuRgF1AYIn4bZGN3%2BF%2F7jWydIAabPFq7Fe7XxMLlYKRPsC2cER1TQQs%2FOHc%2BuNIGV4p7fbITqa1%2F2sTD5KnbBFlD3wLMQoibEkPcrE8SC7XFjCktuTnrqj%2B4aN9ZVIH9hhVjloL6R4gRFgUV0hKHg71azJPuuORvLH2u%2BZlWAkIDY%2B&X-Amz-Signature=354909d3cf2d9eb354c1b29f58e4b22129c3ed07bc732e2a29789aa1e4afa605&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTN2PQD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWRTWuQcpYmRuSj%2FvWZkeaVAas0DgwfO4RRIv5UecVJAIgdZteUTwwjnEKzRVYqu5yPg%2Bhlm17kM8%2BbRfYejWVt2IqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEo9d9%2B3lS3LWvUOACrcA4%2FQWNc6svYZCRiPnvsW2d1kkmWm2nZ2yqIPlW1%2FxEW1Ju7ZK0xbdGKhzsXUVzKSprHuEyArQ8pMuhaJ4n6j7FnW3bAZ8eijZYP5tRchZvDCHcP5RpVKPTgK3Jr2PI0%2BRTuXJA0mNatXCiTWmM4RdOf2hVXoi2HwZ%2F2hhgGoDrLMn%2B7libcuISpEAVJZIW2slgUuBSFlTJ8abMwgv1t95%2FQOSbJ47unHpTlbxzataVDOaaUIHhggn0Vbf%2FIozvFlnrPsGQRu3wLxLMEb1x%2FGDJYC%2F1X2NPwrYzh%2Fo00t7rqdD6qL9oAW2YPAPK4Nat4KIkUCLCihkSAVZ5FXPS2vxyM6kjQBRVXCl4V8xuwLtOcrvknq0wcDgp0fF8cmz%2BeI21KgHjMGNaFtB0XX2IkW3HVCyRHE2Rz6oPGDwFjxw0qbqeQ%2F2HciG%2BAjdXQidq5cBTfe%2ByuFdKZ61xV7XhqAyoc7gzxk%2BeqkiLIZSkSAXpAK3iwlxgRTRfSugLtGiGJFNOjKGTOh0q%2Fgj722uRwmFcqouIXsP2T9K3BYYFeNu8Rg9qf3XdDN2R7%2F%2F%2FYZkhOHt9YT4HKwVeiGJHwV3Z8R6v5BRKVioe9XU9YQtxEu4xvDT2WqvIhXW5tBu222MPP4kL4GOqUBjCuhdTgSb%2BwqVM2liLq8NpnXG7uxxJopq1VKazih2pCHHLYuRgF1AYIn4bZGN3%2BF%2F7jWydIAabPFq7Fe7XxMLlYKRPsC2cER1TQQs%2FOHc%2BuNIGV4p7fbITqa1%2F2sTD5KnbBFlD3wLMQoibEkPcrE8SC7XFjCktuTnrqj%2B4aN9ZVIH9hhVjloL6R4gRFgUV0hKHg71azJPuuORvLH2u%2BZlWAkIDY%2B&X-Amz-Signature=5eff880b473866b6a0acb485a64f4138489c8b39cee70cd4fd784ed834081031&X-Amz-SignedHeaders=host&x-id=GetObject)
