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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW33TC6R%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpUgl7F%2FJsY%2FmrvH3HMVmLRJ6LdH2k2pYn%2BLq71KcPxgIhALBKYLzSZbiRe8CMXQQY%2BQlhjhN3z56F%2Fs%2B3F%2FdEQWWGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYDOAIQlBowCfj%2Fkq3APdnI2qFQm26R0Z7M5Cmi090wCVOrsJcEqb3XX7EOCznYYEl%2BQDnHmg%2BRbSPW6y0MYYdUQp7%2FzE4H58w1EhdjXxfqslvZkHInK9lR6Rf8at9RNMydodVhmaA4I0j4HMMKOf94ISNHJo1TaomWc56uCGQza2F6vbw%2Br0XD3%2BjHs0FjOe%2BvsRPTDIMiMv1abKnPOQncwEq23EhcCMvubGT0oqVFpk5b45Tckcut03fJsHjxAj9lKYzZM71YuLL7RUPY%2FAe6ODN7vjnqGkigCLryQwFyJ82rAtzUPxMRtPmu7Gm2GeaUNMGbaU501PTeB54QeAXSAxDNVl7%2BQAd%2FeHHwjIx6HPEq9LRdRZ5ryfGpuemFc%2B7NTGKC%2FJhMzvn9EyxlPbZg2FT51HNmGGwwQc0FQXmDoQe1w1qYH88R6fohwoBPT6enm19zXls150iJRonwqnhvHjnbwQtzJYKTB1qxGUQQzbBLSX3DPmS%2FUEloKwyt%2BUH2y0pw9cMwTbXQeHyFyjbfEskzFfmyX8iIsk6rLCHLl20XCeBgPnfSVCQk2aLe%2Bxfga6EjsVW2QCKMRzu6gmmJaeep9pKEOIbQIgPc8rftHvMvUJj6qWTnwUNUnyClScdwtTO2ytQ2Ma1jDsuv7ABjqkAWflqqh0pCJ5WTWvYVuOGJTgjuFaC%2FguKVT9PWEctW3jnFemopdXfZdDgvHjJQlvhgTgU5MZlWU%2Bnnl2Bia4L3aO9C6Ips3B0h0a%2BD%2BugHdqpSkXKS2YAnXGmWwx4PaVb1ni%2F9SKm7XmKQz2iOIQpTwxHjEUda%2FhOKClXzbIeGZ3yXIw9guAE2MoYmM2ommB0m8BkeC00f%2FrAlisxH9dm1UL4tMM&X-Amz-Signature=8f463525522fd8ec030af3d49919a76bc94acb7d9476c88e62b478c255f37e96&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW33TC6R%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpUgl7F%2FJsY%2FmrvH3HMVmLRJ6LdH2k2pYn%2BLq71KcPxgIhALBKYLzSZbiRe8CMXQQY%2BQlhjhN3z56F%2Fs%2B3F%2FdEQWWGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYDOAIQlBowCfj%2Fkq3APdnI2qFQm26R0Z7M5Cmi090wCVOrsJcEqb3XX7EOCznYYEl%2BQDnHmg%2BRbSPW6y0MYYdUQp7%2FzE4H58w1EhdjXxfqslvZkHInK9lR6Rf8at9RNMydodVhmaA4I0j4HMMKOf94ISNHJo1TaomWc56uCGQza2F6vbw%2Br0XD3%2BjHs0FjOe%2BvsRPTDIMiMv1abKnPOQncwEq23EhcCMvubGT0oqVFpk5b45Tckcut03fJsHjxAj9lKYzZM71YuLL7RUPY%2FAe6ODN7vjnqGkigCLryQwFyJ82rAtzUPxMRtPmu7Gm2GeaUNMGbaU501PTeB54QeAXSAxDNVl7%2BQAd%2FeHHwjIx6HPEq9LRdRZ5ryfGpuemFc%2B7NTGKC%2FJhMzvn9EyxlPbZg2FT51HNmGGwwQc0FQXmDoQe1w1qYH88R6fohwoBPT6enm19zXls150iJRonwqnhvHjnbwQtzJYKTB1qxGUQQzbBLSX3DPmS%2FUEloKwyt%2BUH2y0pw9cMwTbXQeHyFyjbfEskzFfmyX8iIsk6rLCHLl20XCeBgPnfSVCQk2aLe%2Bxfga6EjsVW2QCKMRzu6gmmJaeep9pKEOIbQIgPc8rftHvMvUJj6qWTnwUNUnyClScdwtTO2ytQ2Ma1jDsuv7ABjqkAWflqqh0pCJ5WTWvYVuOGJTgjuFaC%2FguKVT9PWEctW3jnFemopdXfZdDgvHjJQlvhgTgU5MZlWU%2Bnnl2Bia4L3aO9C6Ips3B0h0a%2BD%2BugHdqpSkXKS2YAnXGmWwx4PaVb1ni%2F9SKm7XmKQz2iOIQpTwxHjEUda%2FhOKClXzbIeGZ3yXIw9guAE2MoYmM2ommB0m8BkeC00f%2FrAlisxH9dm1UL4tMM&X-Amz-Signature=e32d5854e46d6a307726d55e3057238a6fee1d04add1a353b37718bedf448cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW33TC6R%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpUgl7F%2FJsY%2FmrvH3HMVmLRJ6LdH2k2pYn%2BLq71KcPxgIhALBKYLzSZbiRe8CMXQQY%2BQlhjhN3z56F%2Fs%2B3F%2FdEQWWGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYDOAIQlBowCfj%2Fkq3APdnI2qFQm26R0Z7M5Cmi090wCVOrsJcEqb3XX7EOCznYYEl%2BQDnHmg%2BRbSPW6y0MYYdUQp7%2FzE4H58w1EhdjXxfqslvZkHInK9lR6Rf8at9RNMydodVhmaA4I0j4HMMKOf94ISNHJo1TaomWc56uCGQza2F6vbw%2Br0XD3%2BjHs0FjOe%2BvsRPTDIMiMv1abKnPOQncwEq23EhcCMvubGT0oqVFpk5b45Tckcut03fJsHjxAj9lKYzZM71YuLL7RUPY%2FAe6ODN7vjnqGkigCLryQwFyJ82rAtzUPxMRtPmu7Gm2GeaUNMGbaU501PTeB54QeAXSAxDNVl7%2BQAd%2FeHHwjIx6HPEq9LRdRZ5ryfGpuemFc%2B7NTGKC%2FJhMzvn9EyxlPbZg2FT51HNmGGwwQc0FQXmDoQe1w1qYH88R6fohwoBPT6enm19zXls150iJRonwqnhvHjnbwQtzJYKTB1qxGUQQzbBLSX3DPmS%2FUEloKwyt%2BUH2y0pw9cMwTbXQeHyFyjbfEskzFfmyX8iIsk6rLCHLl20XCeBgPnfSVCQk2aLe%2Bxfga6EjsVW2QCKMRzu6gmmJaeep9pKEOIbQIgPc8rftHvMvUJj6qWTnwUNUnyClScdwtTO2ytQ2Ma1jDsuv7ABjqkAWflqqh0pCJ5WTWvYVuOGJTgjuFaC%2FguKVT9PWEctW3jnFemopdXfZdDgvHjJQlvhgTgU5MZlWU%2Bnnl2Bia4L3aO9C6Ips3B0h0a%2BD%2BugHdqpSkXKS2YAnXGmWwx4PaVb1ni%2F9SKm7XmKQz2iOIQpTwxHjEUda%2FhOKClXzbIeGZ3yXIw9guAE2MoYmM2ommB0m8BkeC00f%2FrAlisxH9dm1UL4tMM&X-Amz-Signature=34b033109bb6d85c0b0295ebee2c5af9933570cb32488eeb6f93a2ee39958d10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW33TC6R%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpUgl7F%2FJsY%2FmrvH3HMVmLRJ6LdH2k2pYn%2BLq71KcPxgIhALBKYLzSZbiRe8CMXQQY%2BQlhjhN3z56F%2Fs%2B3F%2FdEQWWGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYDOAIQlBowCfj%2Fkq3APdnI2qFQm26R0Z7M5Cmi090wCVOrsJcEqb3XX7EOCznYYEl%2BQDnHmg%2BRbSPW6y0MYYdUQp7%2FzE4H58w1EhdjXxfqslvZkHInK9lR6Rf8at9RNMydodVhmaA4I0j4HMMKOf94ISNHJo1TaomWc56uCGQza2F6vbw%2Br0XD3%2BjHs0FjOe%2BvsRPTDIMiMv1abKnPOQncwEq23EhcCMvubGT0oqVFpk5b45Tckcut03fJsHjxAj9lKYzZM71YuLL7RUPY%2FAe6ODN7vjnqGkigCLryQwFyJ82rAtzUPxMRtPmu7Gm2GeaUNMGbaU501PTeB54QeAXSAxDNVl7%2BQAd%2FeHHwjIx6HPEq9LRdRZ5ryfGpuemFc%2B7NTGKC%2FJhMzvn9EyxlPbZg2FT51HNmGGwwQc0FQXmDoQe1w1qYH88R6fohwoBPT6enm19zXls150iJRonwqnhvHjnbwQtzJYKTB1qxGUQQzbBLSX3DPmS%2FUEloKwyt%2BUH2y0pw9cMwTbXQeHyFyjbfEskzFfmyX8iIsk6rLCHLl20XCeBgPnfSVCQk2aLe%2Bxfga6EjsVW2QCKMRzu6gmmJaeep9pKEOIbQIgPc8rftHvMvUJj6qWTnwUNUnyClScdwtTO2ytQ2Ma1jDsuv7ABjqkAWflqqh0pCJ5WTWvYVuOGJTgjuFaC%2FguKVT9PWEctW3jnFemopdXfZdDgvHjJQlvhgTgU5MZlWU%2Bnnl2Bia4L3aO9C6Ips3B0h0a%2BD%2BugHdqpSkXKS2YAnXGmWwx4PaVb1ni%2F9SKm7XmKQz2iOIQpTwxHjEUda%2FhOKClXzbIeGZ3yXIw9guAE2MoYmM2ommB0m8BkeC00f%2FrAlisxH9dm1UL4tMM&X-Amz-Signature=c091e4be3785fb715256e50c53ea52b762ac1d8019f32db81f63d58d2807668d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW33TC6R%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpUgl7F%2FJsY%2FmrvH3HMVmLRJ6LdH2k2pYn%2BLq71KcPxgIhALBKYLzSZbiRe8CMXQQY%2BQlhjhN3z56F%2Fs%2B3F%2FdEQWWGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYDOAIQlBowCfj%2Fkq3APdnI2qFQm26R0Z7M5Cmi090wCVOrsJcEqb3XX7EOCznYYEl%2BQDnHmg%2BRbSPW6y0MYYdUQp7%2FzE4H58w1EhdjXxfqslvZkHInK9lR6Rf8at9RNMydodVhmaA4I0j4HMMKOf94ISNHJo1TaomWc56uCGQza2F6vbw%2Br0XD3%2BjHs0FjOe%2BvsRPTDIMiMv1abKnPOQncwEq23EhcCMvubGT0oqVFpk5b45Tckcut03fJsHjxAj9lKYzZM71YuLL7RUPY%2FAe6ODN7vjnqGkigCLryQwFyJ82rAtzUPxMRtPmu7Gm2GeaUNMGbaU501PTeB54QeAXSAxDNVl7%2BQAd%2FeHHwjIx6HPEq9LRdRZ5ryfGpuemFc%2B7NTGKC%2FJhMzvn9EyxlPbZg2FT51HNmGGwwQc0FQXmDoQe1w1qYH88R6fohwoBPT6enm19zXls150iJRonwqnhvHjnbwQtzJYKTB1qxGUQQzbBLSX3DPmS%2FUEloKwyt%2BUH2y0pw9cMwTbXQeHyFyjbfEskzFfmyX8iIsk6rLCHLl20XCeBgPnfSVCQk2aLe%2Bxfga6EjsVW2QCKMRzu6gmmJaeep9pKEOIbQIgPc8rftHvMvUJj6qWTnwUNUnyClScdwtTO2ytQ2Ma1jDsuv7ABjqkAWflqqh0pCJ5WTWvYVuOGJTgjuFaC%2FguKVT9PWEctW3jnFemopdXfZdDgvHjJQlvhgTgU5MZlWU%2Bnnl2Bia4L3aO9C6Ips3B0h0a%2BD%2BugHdqpSkXKS2YAnXGmWwx4PaVb1ni%2F9SKm7XmKQz2iOIQpTwxHjEUda%2FhOKClXzbIeGZ3yXIw9guAE2MoYmM2ommB0m8BkeC00f%2FrAlisxH9dm1UL4tMM&X-Amz-Signature=cffff45a7a167f5ec0b679c268330b838af83ea52544f5d6ac2e2f2a5829606a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW33TC6R%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDpUgl7F%2FJsY%2FmrvH3HMVmLRJ6LdH2k2pYn%2BLq71KcPxgIhALBKYLzSZbiRe8CMXQQY%2BQlhjhN3z56F%2Fs%2B3F%2FdEQWWGKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FYDOAIQlBowCfj%2Fkq3APdnI2qFQm26R0Z7M5Cmi090wCVOrsJcEqb3XX7EOCznYYEl%2BQDnHmg%2BRbSPW6y0MYYdUQp7%2FzE4H58w1EhdjXxfqslvZkHInK9lR6Rf8at9RNMydodVhmaA4I0j4HMMKOf94ISNHJo1TaomWc56uCGQza2F6vbw%2Br0XD3%2BjHs0FjOe%2BvsRPTDIMiMv1abKnPOQncwEq23EhcCMvubGT0oqVFpk5b45Tckcut03fJsHjxAj9lKYzZM71YuLL7RUPY%2FAe6ODN7vjnqGkigCLryQwFyJ82rAtzUPxMRtPmu7Gm2GeaUNMGbaU501PTeB54QeAXSAxDNVl7%2BQAd%2FeHHwjIx6HPEq9LRdRZ5ryfGpuemFc%2B7NTGKC%2FJhMzvn9EyxlPbZg2FT51HNmGGwwQc0FQXmDoQe1w1qYH88R6fohwoBPT6enm19zXls150iJRonwqnhvHjnbwQtzJYKTB1qxGUQQzbBLSX3DPmS%2FUEloKwyt%2BUH2y0pw9cMwTbXQeHyFyjbfEskzFfmyX8iIsk6rLCHLl20XCeBgPnfSVCQk2aLe%2Bxfga6EjsVW2QCKMRzu6gmmJaeep9pKEOIbQIgPc8rftHvMvUJj6qWTnwUNUnyClScdwtTO2ytQ2Ma1jDsuv7ABjqkAWflqqh0pCJ5WTWvYVuOGJTgjuFaC%2FguKVT9PWEctW3jnFemopdXfZdDgvHjJQlvhgTgU5MZlWU%2Bnnl2Bia4L3aO9C6Ips3B0h0a%2BD%2BugHdqpSkXKS2YAnXGmWwx4PaVb1ni%2F9SKm7XmKQz2iOIQpTwxHjEUda%2FhOKClXzbIeGZ3yXIw9guAE2MoYmM2ommB0m8BkeC00f%2FrAlisxH9dm1UL4tMM&X-Amz-Signature=42136ebc2917c78e745280e20bb39e5e6ac57fd2e86b8f111bb33c8a16465220&X-Amz-SignedHeaders=host&x-id=GetObject)
