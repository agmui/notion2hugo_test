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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX547TS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9wucLIPKxeu04Tgl4%2BYGL9zo2QXIrMgZX9CMbiG62AiAYHEZbEAeXEh9GZNL%2BGSvlbESPo%2BJPjWolmoAN9oCKLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdnf1NfvhZKUuTzPTKtwDc8JAJyHCPXfb%2BmSYmJi23%2BgTACDNMfPN0VXsNYUBVCCosZP9vn7tVlJZNaID75P5cmjm3VIaxCNDSVML53dsI0zo74S%2BtKNcEornhcKDZ2ZDM1cKutKE5UjZ55J4gFDcR%2FQhLBp79vkNIZr4EPv4WGFbUDKFfhFUyAzFtsSD%2BUs8nvoTZPjsoW7S%2BYtubjzKFw0pLnlOYcvhQCaYl8iPZtb8%2FNpy3upLtTdKOvlStE2a9ALXIINcwdaTlf6rsJh0ALG6Wqf43RfdnVinLSdc%2B5%2Fv96scjhCw%2F0RZYYIW2eL1hU6splZOUZ3i7tz3vOIJXumxR2bKrTE2KzHoGWnygq9AJ3OWfVVQnySTC3sCBZoUrNDqRW078f9z5uIcVwP8VtxcqMj1F%2FtRaJOd5JQUgUkA11E41UubLYwv9E42u7ME6BtAfJaEiI6ZmnH9uhx55ZhGssvjzE0SWjn6eYIAq4LO6XUl6dJ7wWodAs1D0NPQ1U4Nk2GtrZpIrcLQpS9CBhxMU7uBkC6Kt6m0VNTuEyYeYDsAc2lhQzJ4M5apJI9%2FqkjOXCCbjpZZPVm7w7wl1kG%2FsAXoVcrcu0KqSUa5lZ3tRLAIsiCvdK0JkZleqYJhGJLag3HKXxD%2F%2Fqgw%2BaD7wAY6pgHkMiEXwH0BXJTxPQ7J3nJTDtbZ2GbIil8be5HDMXNmUlC2vWvjTJsOu2zn8TpDo65CQvDMbepDLbJjsujPg%2F41zsxkiVqs0B52KLjBqA8pgB33HlGxGgA7LiNl1cbOVbo1XUhxtgAiNqmPgW%2B5xfLLTLyxdMY205MX8vJtrKPnpsuk44DfJ1pyB7T06y1IxwJbfetHVRRM%2Bp3jwQ3vizvZfhG63SSF&X-Amz-Signature=02d89e5cd030134cbebf0b01df0219606444e0706e3fe8de9d28cfb5ff27cd09&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX547TS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9wucLIPKxeu04Tgl4%2BYGL9zo2QXIrMgZX9CMbiG62AiAYHEZbEAeXEh9GZNL%2BGSvlbESPo%2BJPjWolmoAN9oCKLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdnf1NfvhZKUuTzPTKtwDc8JAJyHCPXfb%2BmSYmJi23%2BgTACDNMfPN0VXsNYUBVCCosZP9vn7tVlJZNaID75P5cmjm3VIaxCNDSVML53dsI0zo74S%2BtKNcEornhcKDZ2ZDM1cKutKE5UjZ55J4gFDcR%2FQhLBp79vkNIZr4EPv4WGFbUDKFfhFUyAzFtsSD%2BUs8nvoTZPjsoW7S%2BYtubjzKFw0pLnlOYcvhQCaYl8iPZtb8%2FNpy3upLtTdKOvlStE2a9ALXIINcwdaTlf6rsJh0ALG6Wqf43RfdnVinLSdc%2B5%2Fv96scjhCw%2F0RZYYIW2eL1hU6splZOUZ3i7tz3vOIJXumxR2bKrTE2KzHoGWnygq9AJ3OWfVVQnySTC3sCBZoUrNDqRW078f9z5uIcVwP8VtxcqMj1F%2FtRaJOd5JQUgUkA11E41UubLYwv9E42u7ME6BtAfJaEiI6ZmnH9uhx55ZhGssvjzE0SWjn6eYIAq4LO6XUl6dJ7wWodAs1D0NPQ1U4Nk2GtrZpIrcLQpS9CBhxMU7uBkC6Kt6m0VNTuEyYeYDsAc2lhQzJ4M5apJI9%2FqkjOXCCbjpZZPVm7w7wl1kG%2FsAXoVcrcu0KqSUa5lZ3tRLAIsiCvdK0JkZleqYJhGJLag3HKXxD%2F%2Fqgw%2BaD7wAY6pgHkMiEXwH0BXJTxPQ7J3nJTDtbZ2GbIil8be5HDMXNmUlC2vWvjTJsOu2zn8TpDo65CQvDMbepDLbJjsujPg%2F41zsxkiVqs0B52KLjBqA8pgB33HlGxGgA7LiNl1cbOVbo1XUhxtgAiNqmPgW%2B5xfLLTLyxdMY205MX8vJtrKPnpsuk44DfJ1pyB7T06y1IxwJbfetHVRRM%2Bp3jwQ3vizvZfhG63SSF&X-Amz-Signature=db1fec3e798f5b325cc93ecddf2a8b8596b898676e30a4ff913fb2890fcd95ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX547TS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9wucLIPKxeu04Tgl4%2BYGL9zo2QXIrMgZX9CMbiG62AiAYHEZbEAeXEh9GZNL%2BGSvlbESPo%2BJPjWolmoAN9oCKLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdnf1NfvhZKUuTzPTKtwDc8JAJyHCPXfb%2BmSYmJi23%2BgTACDNMfPN0VXsNYUBVCCosZP9vn7tVlJZNaID75P5cmjm3VIaxCNDSVML53dsI0zo74S%2BtKNcEornhcKDZ2ZDM1cKutKE5UjZ55J4gFDcR%2FQhLBp79vkNIZr4EPv4WGFbUDKFfhFUyAzFtsSD%2BUs8nvoTZPjsoW7S%2BYtubjzKFw0pLnlOYcvhQCaYl8iPZtb8%2FNpy3upLtTdKOvlStE2a9ALXIINcwdaTlf6rsJh0ALG6Wqf43RfdnVinLSdc%2B5%2Fv96scjhCw%2F0RZYYIW2eL1hU6splZOUZ3i7tz3vOIJXumxR2bKrTE2KzHoGWnygq9AJ3OWfVVQnySTC3sCBZoUrNDqRW078f9z5uIcVwP8VtxcqMj1F%2FtRaJOd5JQUgUkA11E41UubLYwv9E42u7ME6BtAfJaEiI6ZmnH9uhx55ZhGssvjzE0SWjn6eYIAq4LO6XUl6dJ7wWodAs1D0NPQ1U4Nk2GtrZpIrcLQpS9CBhxMU7uBkC6Kt6m0VNTuEyYeYDsAc2lhQzJ4M5apJI9%2FqkjOXCCbjpZZPVm7w7wl1kG%2FsAXoVcrcu0KqSUa5lZ3tRLAIsiCvdK0JkZleqYJhGJLag3HKXxD%2F%2Fqgw%2BaD7wAY6pgHkMiEXwH0BXJTxPQ7J3nJTDtbZ2GbIil8be5HDMXNmUlC2vWvjTJsOu2zn8TpDo65CQvDMbepDLbJjsujPg%2F41zsxkiVqs0B52KLjBqA8pgB33HlGxGgA7LiNl1cbOVbo1XUhxtgAiNqmPgW%2B5xfLLTLyxdMY205MX8vJtrKPnpsuk44DfJ1pyB7T06y1IxwJbfetHVRRM%2Bp3jwQ3vizvZfhG63SSF&X-Amz-Signature=3e23e03fa741b5ddfe96080d1649acf27c3da191a132e5c009e12bec7296b406&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX547TS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9wucLIPKxeu04Tgl4%2BYGL9zo2QXIrMgZX9CMbiG62AiAYHEZbEAeXEh9GZNL%2BGSvlbESPo%2BJPjWolmoAN9oCKLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdnf1NfvhZKUuTzPTKtwDc8JAJyHCPXfb%2BmSYmJi23%2BgTACDNMfPN0VXsNYUBVCCosZP9vn7tVlJZNaID75P5cmjm3VIaxCNDSVML53dsI0zo74S%2BtKNcEornhcKDZ2ZDM1cKutKE5UjZ55J4gFDcR%2FQhLBp79vkNIZr4EPv4WGFbUDKFfhFUyAzFtsSD%2BUs8nvoTZPjsoW7S%2BYtubjzKFw0pLnlOYcvhQCaYl8iPZtb8%2FNpy3upLtTdKOvlStE2a9ALXIINcwdaTlf6rsJh0ALG6Wqf43RfdnVinLSdc%2B5%2Fv96scjhCw%2F0RZYYIW2eL1hU6splZOUZ3i7tz3vOIJXumxR2bKrTE2KzHoGWnygq9AJ3OWfVVQnySTC3sCBZoUrNDqRW078f9z5uIcVwP8VtxcqMj1F%2FtRaJOd5JQUgUkA11E41UubLYwv9E42u7ME6BtAfJaEiI6ZmnH9uhx55ZhGssvjzE0SWjn6eYIAq4LO6XUl6dJ7wWodAs1D0NPQ1U4Nk2GtrZpIrcLQpS9CBhxMU7uBkC6Kt6m0VNTuEyYeYDsAc2lhQzJ4M5apJI9%2FqkjOXCCbjpZZPVm7w7wl1kG%2FsAXoVcrcu0KqSUa5lZ3tRLAIsiCvdK0JkZleqYJhGJLag3HKXxD%2F%2Fqgw%2BaD7wAY6pgHkMiEXwH0BXJTxPQ7J3nJTDtbZ2GbIil8be5HDMXNmUlC2vWvjTJsOu2zn8TpDo65CQvDMbepDLbJjsujPg%2F41zsxkiVqs0B52KLjBqA8pgB33HlGxGgA7LiNl1cbOVbo1XUhxtgAiNqmPgW%2B5xfLLTLyxdMY205MX8vJtrKPnpsuk44DfJ1pyB7T06y1IxwJbfetHVRRM%2Bp3jwQ3vizvZfhG63SSF&X-Amz-Signature=473943ce2da124801ce23f53feabae488eae823f1d4fe794dba0f2b14d4cf596&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX547TS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9wucLIPKxeu04Tgl4%2BYGL9zo2QXIrMgZX9CMbiG62AiAYHEZbEAeXEh9GZNL%2BGSvlbESPo%2BJPjWolmoAN9oCKLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdnf1NfvhZKUuTzPTKtwDc8JAJyHCPXfb%2BmSYmJi23%2BgTACDNMfPN0VXsNYUBVCCosZP9vn7tVlJZNaID75P5cmjm3VIaxCNDSVML53dsI0zo74S%2BtKNcEornhcKDZ2ZDM1cKutKE5UjZ55J4gFDcR%2FQhLBp79vkNIZr4EPv4WGFbUDKFfhFUyAzFtsSD%2BUs8nvoTZPjsoW7S%2BYtubjzKFw0pLnlOYcvhQCaYl8iPZtb8%2FNpy3upLtTdKOvlStE2a9ALXIINcwdaTlf6rsJh0ALG6Wqf43RfdnVinLSdc%2B5%2Fv96scjhCw%2F0RZYYIW2eL1hU6splZOUZ3i7tz3vOIJXumxR2bKrTE2KzHoGWnygq9AJ3OWfVVQnySTC3sCBZoUrNDqRW078f9z5uIcVwP8VtxcqMj1F%2FtRaJOd5JQUgUkA11E41UubLYwv9E42u7ME6BtAfJaEiI6ZmnH9uhx55ZhGssvjzE0SWjn6eYIAq4LO6XUl6dJ7wWodAs1D0NPQ1U4Nk2GtrZpIrcLQpS9CBhxMU7uBkC6Kt6m0VNTuEyYeYDsAc2lhQzJ4M5apJI9%2FqkjOXCCbjpZZPVm7w7wl1kG%2FsAXoVcrcu0KqSUa5lZ3tRLAIsiCvdK0JkZleqYJhGJLag3HKXxD%2F%2Fqgw%2BaD7wAY6pgHkMiEXwH0BXJTxPQ7J3nJTDtbZ2GbIil8be5HDMXNmUlC2vWvjTJsOu2zn8TpDo65CQvDMbepDLbJjsujPg%2F41zsxkiVqs0B52KLjBqA8pgB33HlGxGgA7LiNl1cbOVbo1XUhxtgAiNqmPgW%2B5xfLLTLyxdMY205MX8vJtrKPnpsuk44DfJ1pyB7T06y1IxwJbfetHVRRM%2Bp3jwQ3vizvZfhG63SSF&X-Amz-Signature=788fbb8a836d5fcf0e5c0f3867d4a3f1668adf099262a9fcd8803dfd6d09f68c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQX547TS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR9wucLIPKxeu04Tgl4%2BYGL9zo2QXIrMgZX9CMbiG62AiAYHEZbEAeXEh9GZNL%2BGSvlbESPo%2BJPjWolmoAN9oCKLSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdnf1NfvhZKUuTzPTKtwDc8JAJyHCPXfb%2BmSYmJi23%2BgTACDNMfPN0VXsNYUBVCCosZP9vn7tVlJZNaID75P5cmjm3VIaxCNDSVML53dsI0zo74S%2BtKNcEornhcKDZ2ZDM1cKutKE5UjZ55J4gFDcR%2FQhLBp79vkNIZr4EPv4WGFbUDKFfhFUyAzFtsSD%2BUs8nvoTZPjsoW7S%2BYtubjzKFw0pLnlOYcvhQCaYl8iPZtb8%2FNpy3upLtTdKOvlStE2a9ALXIINcwdaTlf6rsJh0ALG6Wqf43RfdnVinLSdc%2B5%2Fv96scjhCw%2F0RZYYIW2eL1hU6splZOUZ3i7tz3vOIJXumxR2bKrTE2KzHoGWnygq9AJ3OWfVVQnySTC3sCBZoUrNDqRW078f9z5uIcVwP8VtxcqMj1F%2FtRaJOd5JQUgUkA11E41UubLYwv9E42u7ME6BtAfJaEiI6ZmnH9uhx55ZhGssvjzE0SWjn6eYIAq4LO6XUl6dJ7wWodAs1D0NPQ1U4Nk2GtrZpIrcLQpS9CBhxMU7uBkC6Kt6m0VNTuEyYeYDsAc2lhQzJ4M5apJI9%2FqkjOXCCbjpZZPVm7w7wl1kG%2FsAXoVcrcu0KqSUa5lZ3tRLAIsiCvdK0JkZleqYJhGJLag3HKXxD%2F%2Fqgw%2BaD7wAY6pgHkMiEXwH0BXJTxPQ7J3nJTDtbZ2GbIil8be5HDMXNmUlC2vWvjTJsOu2zn8TpDo65CQvDMbepDLbJjsujPg%2F41zsxkiVqs0B52KLjBqA8pgB33HlGxGgA7LiNl1cbOVbo1XUhxtgAiNqmPgW%2B5xfLLTLyxdMY205MX8vJtrKPnpsuk44DfJ1pyB7T06y1IxwJbfetHVRRM%2Bp3jwQ3vizvZfhG63SSF&X-Amz-Signature=26eca22a8fc95d41f5fce425ac876e7967715357f62d7350ce7c7740b8040459&X-Amz-SignedHeaders=host&x-id=GetObject)
