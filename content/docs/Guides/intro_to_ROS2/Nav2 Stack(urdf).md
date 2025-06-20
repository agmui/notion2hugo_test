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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIP5623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPaNDxkRAazWsPskA1UmLAHLfQFU7iCWRnz8qtqyRWRwIhAIm0nHNaJfJdKXGWu9kaqdIBVtGJzfargL3i4kw7TniNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJh830qvsuXPoH3VEq3AM3mPs13QmBgUSR7aa7DWCk7wOrp1%2B6uoH%2BT%2F7UjhglnQYc943rmaWQLXwRnOUSv6kHlEF4opzINkMzLQZtelll0M2DW9CaSAOTSfpOcIp1Sg8pqvaVEdJTS6gCLq7FI2xeAfV%2F%2BpI0krpZcVwE8PLIpzjBFykb%2FDbcbjoAXM5pDvRDai3otw2xWMO%2FhYgHfuEt3wyQRJCgV%2BHopgC%2F1B9jNwDlnf4n4niJPAfQ0OenmxievPxwDYoruUcgDW2%2FABeNPk3zJZQkKKcpbCDQ2Dysg4tis5uwPRWZnyZ5vjjPBkn%2F%2BvbA6wTw%2FRtl%2BionhUXUppuaSpe8YzNNOzwuw2aC%2BQplQ98jpWIIjkvCiwHCvFwhO7hBMhbS6f2CBshEM2e7Js9VYwc6Zr2zbSYELeLtQstMZRKP8LE944l5Bmi9hAFv4kJ6gHOUe9JOhJl0CEk3Dn6TSLEUT73oW%2Bk9nU18BNjdUJn3a5vnBXuzcz9n4Yq%2Bk9y%2FnJYnJ6i0ic%2FfzFpMobcUkivaA0lw5xLRUX5p82kbz9%2FvtlxcNi76jJ3ZGhHgfSTb%2BSsZvT4TCLdrv3Nx8SOtCZ844OSf%2FwBCVQZY%2F9ptnv2YyBfT5bvJEcwkql3eD0bzakNzRGAgKzDQstbCBjqkAZXb3jEpOKEzcG9xoyP6e2BlMTLSlZSPrEzCcz0Nxjrbjr48euCoJT66UmbAkcgD2%2Fri7IiXlIeAJJ8xWEDWWf%2BTOo3cOdTC9d7mTVFKmOVftaddqm%2BcyOwE3qGTXLqETCx%2FBEeRZiJzq9vW0rhhE9g%2BPsVvIC0FRpPnOFVkiAMRv0RB%2FmfMXC%2BKJaIozuwwMuAwc9imkhqla%2FbuJicBC8Otm5qL&X-Amz-Signature=299ac9f57119d0516d37c3317aa2396a4f42595efc288c3c0d12a13f2276d623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIP5623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPaNDxkRAazWsPskA1UmLAHLfQFU7iCWRnz8qtqyRWRwIhAIm0nHNaJfJdKXGWu9kaqdIBVtGJzfargL3i4kw7TniNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJh830qvsuXPoH3VEq3AM3mPs13QmBgUSR7aa7DWCk7wOrp1%2B6uoH%2BT%2F7UjhglnQYc943rmaWQLXwRnOUSv6kHlEF4opzINkMzLQZtelll0M2DW9CaSAOTSfpOcIp1Sg8pqvaVEdJTS6gCLq7FI2xeAfV%2F%2BpI0krpZcVwE8PLIpzjBFykb%2FDbcbjoAXM5pDvRDai3otw2xWMO%2FhYgHfuEt3wyQRJCgV%2BHopgC%2F1B9jNwDlnf4n4niJPAfQ0OenmxievPxwDYoruUcgDW2%2FABeNPk3zJZQkKKcpbCDQ2Dysg4tis5uwPRWZnyZ5vjjPBkn%2F%2BvbA6wTw%2FRtl%2BionhUXUppuaSpe8YzNNOzwuw2aC%2BQplQ98jpWIIjkvCiwHCvFwhO7hBMhbS6f2CBshEM2e7Js9VYwc6Zr2zbSYELeLtQstMZRKP8LE944l5Bmi9hAFv4kJ6gHOUe9JOhJl0CEk3Dn6TSLEUT73oW%2Bk9nU18BNjdUJn3a5vnBXuzcz9n4Yq%2Bk9y%2FnJYnJ6i0ic%2FfzFpMobcUkivaA0lw5xLRUX5p82kbz9%2FvtlxcNi76jJ3ZGhHgfSTb%2BSsZvT4TCLdrv3Nx8SOtCZ844OSf%2FwBCVQZY%2F9ptnv2YyBfT5bvJEcwkql3eD0bzakNzRGAgKzDQstbCBjqkAZXb3jEpOKEzcG9xoyP6e2BlMTLSlZSPrEzCcz0Nxjrbjr48euCoJT66UmbAkcgD2%2Fri7IiXlIeAJJ8xWEDWWf%2BTOo3cOdTC9d7mTVFKmOVftaddqm%2BcyOwE3qGTXLqETCx%2FBEeRZiJzq9vW0rhhE9g%2BPsVvIC0FRpPnOFVkiAMRv0RB%2FmfMXC%2BKJaIozuwwMuAwc9imkhqla%2FbuJicBC8Otm5qL&X-Amz-Signature=2c497a14550f988e93039d492b9c302a4adfa4a309062806b8a99da8cd797544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIP5623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPaNDxkRAazWsPskA1UmLAHLfQFU7iCWRnz8qtqyRWRwIhAIm0nHNaJfJdKXGWu9kaqdIBVtGJzfargL3i4kw7TniNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJh830qvsuXPoH3VEq3AM3mPs13QmBgUSR7aa7DWCk7wOrp1%2B6uoH%2BT%2F7UjhglnQYc943rmaWQLXwRnOUSv6kHlEF4opzINkMzLQZtelll0M2DW9CaSAOTSfpOcIp1Sg8pqvaVEdJTS6gCLq7FI2xeAfV%2F%2BpI0krpZcVwE8PLIpzjBFykb%2FDbcbjoAXM5pDvRDai3otw2xWMO%2FhYgHfuEt3wyQRJCgV%2BHopgC%2F1B9jNwDlnf4n4niJPAfQ0OenmxievPxwDYoruUcgDW2%2FABeNPk3zJZQkKKcpbCDQ2Dysg4tis5uwPRWZnyZ5vjjPBkn%2F%2BvbA6wTw%2FRtl%2BionhUXUppuaSpe8YzNNOzwuw2aC%2BQplQ98jpWIIjkvCiwHCvFwhO7hBMhbS6f2CBshEM2e7Js9VYwc6Zr2zbSYELeLtQstMZRKP8LE944l5Bmi9hAFv4kJ6gHOUe9JOhJl0CEk3Dn6TSLEUT73oW%2Bk9nU18BNjdUJn3a5vnBXuzcz9n4Yq%2Bk9y%2FnJYnJ6i0ic%2FfzFpMobcUkivaA0lw5xLRUX5p82kbz9%2FvtlxcNi76jJ3ZGhHgfSTb%2BSsZvT4TCLdrv3Nx8SOtCZ844OSf%2FwBCVQZY%2F9ptnv2YyBfT5bvJEcwkql3eD0bzakNzRGAgKzDQstbCBjqkAZXb3jEpOKEzcG9xoyP6e2BlMTLSlZSPrEzCcz0Nxjrbjr48euCoJT66UmbAkcgD2%2Fri7IiXlIeAJJ8xWEDWWf%2BTOo3cOdTC9d7mTVFKmOVftaddqm%2BcyOwE3qGTXLqETCx%2FBEeRZiJzq9vW0rhhE9g%2BPsVvIC0FRpPnOFVkiAMRv0RB%2FmfMXC%2BKJaIozuwwMuAwc9imkhqla%2FbuJicBC8Otm5qL&X-Amz-Signature=76958165101c61d41ca887494506c3060d84098e7f8c6fda4e129316d5cac8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIP5623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPaNDxkRAazWsPskA1UmLAHLfQFU7iCWRnz8qtqyRWRwIhAIm0nHNaJfJdKXGWu9kaqdIBVtGJzfargL3i4kw7TniNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJh830qvsuXPoH3VEq3AM3mPs13QmBgUSR7aa7DWCk7wOrp1%2B6uoH%2BT%2F7UjhglnQYc943rmaWQLXwRnOUSv6kHlEF4opzINkMzLQZtelll0M2DW9CaSAOTSfpOcIp1Sg8pqvaVEdJTS6gCLq7FI2xeAfV%2F%2BpI0krpZcVwE8PLIpzjBFykb%2FDbcbjoAXM5pDvRDai3otw2xWMO%2FhYgHfuEt3wyQRJCgV%2BHopgC%2F1B9jNwDlnf4n4niJPAfQ0OenmxievPxwDYoruUcgDW2%2FABeNPk3zJZQkKKcpbCDQ2Dysg4tis5uwPRWZnyZ5vjjPBkn%2F%2BvbA6wTw%2FRtl%2BionhUXUppuaSpe8YzNNOzwuw2aC%2BQplQ98jpWIIjkvCiwHCvFwhO7hBMhbS6f2CBshEM2e7Js9VYwc6Zr2zbSYELeLtQstMZRKP8LE944l5Bmi9hAFv4kJ6gHOUe9JOhJl0CEk3Dn6TSLEUT73oW%2Bk9nU18BNjdUJn3a5vnBXuzcz9n4Yq%2Bk9y%2FnJYnJ6i0ic%2FfzFpMobcUkivaA0lw5xLRUX5p82kbz9%2FvtlxcNi76jJ3ZGhHgfSTb%2BSsZvT4TCLdrv3Nx8SOtCZ844OSf%2FwBCVQZY%2F9ptnv2YyBfT5bvJEcwkql3eD0bzakNzRGAgKzDQstbCBjqkAZXb3jEpOKEzcG9xoyP6e2BlMTLSlZSPrEzCcz0Nxjrbjr48euCoJT66UmbAkcgD2%2Fri7IiXlIeAJJ8xWEDWWf%2BTOo3cOdTC9d7mTVFKmOVftaddqm%2BcyOwE3qGTXLqETCx%2FBEeRZiJzq9vW0rhhE9g%2BPsVvIC0FRpPnOFVkiAMRv0RB%2FmfMXC%2BKJaIozuwwMuAwc9imkhqla%2FbuJicBC8Otm5qL&X-Amz-Signature=44aac949207df0bf1dc1edf9684d3dd932373ccce77247182ad023fa244aa392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIP5623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPaNDxkRAazWsPskA1UmLAHLfQFU7iCWRnz8qtqyRWRwIhAIm0nHNaJfJdKXGWu9kaqdIBVtGJzfargL3i4kw7TniNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJh830qvsuXPoH3VEq3AM3mPs13QmBgUSR7aa7DWCk7wOrp1%2B6uoH%2BT%2F7UjhglnQYc943rmaWQLXwRnOUSv6kHlEF4opzINkMzLQZtelll0M2DW9CaSAOTSfpOcIp1Sg8pqvaVEdJTS6gCLq7FI2xeAfV%2F%2BpI0krpZcVwE8PLIpzjBFykb%2FDbcbjoAXM5pDvRDai3otw2xWMO%2FhYgHfuEt3wyQRJCgV%2BHopgC%2F1B9jNwDlnf4n4niJPAfQ0OenmxievPxwDYoruUcgDW2%2FABeNPk3zJZQkKKcpbCDQ2Dysg4tis5uwPRWZnyZ5vjjPBkn%2F%2BvbA6wTw%2FRtl%2BionhUXUppuaSpe8YzNNOzwuw2aC%2BQplQ98jpWIIjkvCiwHCvFwhO7hBMhbS6f2CBshEM2e7Js9VYwc6Zr2zbSYELeLtQstMZRKP8LE944l5Bmi9hAFv4kJ6gHOUe9JOhJl0CEk3Dn6TSLEUT73oW%2Bk9nU18BNjdUJn3a5vnBXuzcz9n4Yq%2Bk9y%2FnJYnJ6i0ic%2FfzFpMobcUkivaA0lw5xLRUX5p82kbz9%2FvtlxcNi76jJ3ZGhHgfSTb%2BSsZvT4TCLdrv3Nx8SOtCZ844OSf%2FwBCVQZY%2F9ptnv2YyBfT5bvJEcwkql3eD0bzakNzRGAgKzDQstbCBjqkAZXb3jEpOKEzcG9xoyP6e2BlMTLSlZSPrEzCcz0Nxjrbjr48euCoJT66UmbAkcgD2%2Fri7IiXlIeAJJ8xWEDWWf%2BTOo3cOdTC9d7mTVFKmOVftaddqm%2BcyOwE3qGTXLqETCx%2FBEeRZiJzq9vW0rhhE9g%2BPsVvIC0FRpPnOFVkiAMRv0RB%2FmfMXC%2BKJaIozuwwMuAwc9imkhqla%2FbuJicBC8Otm5qL&X-Amz-Signature=8b178d8bd5c38203a230c58e9d4db8feac9456bc9600a3ff5ef9bc20cd540a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUIP5623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPaNDxkRAazWsPskA1UmLAHLfQFU7iCWRnz8qtqyRWRwIhAIm0nHNaJfJdKXGWu9kaqdIBVtGJzfargL3i4kw7TniNKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJh830qvsuXPoH3VEq3AM3mPs13QmBgUSR7aa7DWCk7wOrp1%2B6uoH%2BT%2F7UjhglnQYc943rmaWQLXwRnOUSv6kHlEF4opzINkMzLQZtelll0M2DW9CaSAOTSfpOcIp1Sg8pqvaVEdJTS6gCLq7FI2xeAfV%2F%2BpI0krpZcVwE8PLIpzjBFykb%2FDbcbjoAXM5pDvRDai3otw2xWMO%2FhYgHfuEt3wyQRJCgV%2BHopgC%2F1B9jNwDlnf4n4niJPAfQ0OenmxievPxwDYoruUcgDW2%2FABeNPk3zJZQkKKcpbCDQ2Dysg4tis5uwPRWZnyZ5vjjPBkn%2F%2BvbA6wTw%2FRtl%2BionhUXUppuaSpe8YzNNOzwuw2aC%2BQplQ98jpWIIjkvCiwHCvFwhO7hBMhbS6f2CBshEM2e7Js9VYwc6Zr2zbSYELeLtQstMZRKP8LE944l5Bmi9hAFv4kJ6gHOUe9JOhJl0CEk3Dn6TSLEUT73oW%2Bk9nU18BNjdUJn3a5vnBXuzcz9n4Yq%2Bk9y%2FnJYnJ6i0ic%2FfzFpMobcUkivaA0lw5xLRUX5p82kbz9%2FvtlxcNi76jJ3ZGhHgfSTb%2BSsZvT4TCLdrv3Nx8SOtCZ844OSf%2FwBCVQZY%2F9ptnv2YyBfT5bvJEcwkql3eD0bzakNzRGAgKzDQstbCBjqkAZXb3jEpOKEzcG9xoyP6e2BlMTLSlZSPrEzCcz0Nxjrbjr48euCoJT66UmbAkcgD2%2Fri7IiXlIeAJJ8xWEDWWf%2BTOo3cOdTC9d7mTVFKmOVftaddqm%2BcyOwE3qGTXLqETCx%2FBEeRZiJzq9vW0rhhE9g%2BPsVvIC0FRpPnOFVkiAMRv0RB%2FmfMXC%2BKJaIozuwwMuAwc9imkhqla%2FbuJicBC8Otm5qL&X-Amz-Signature=5ca5a149fa8f6c96e6cdd1053618b28d85f6caef7264519a509fc9cfedb97c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
