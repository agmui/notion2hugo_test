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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN6GOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHlCBTqtQPJ1e1mrrj15nRyJ04AVkU8Z2Q7JMx3GzeFWAiA6Xq7w7oN1h9e0LCdHyCLaGA7j3W4fRPt9vZGjzxdiQir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMsf%2Fro6k8E99yzZxKtwDw1q1ba%2F5LvHB%2F82sSILXe4aABXjkWM6tIpfyZ4pZkTaqDMEUVhlqRi%2FhC2jcrTRAinvrGdFhOHykPCVyrMOST7ODxxjNknHww0SiCMcSAmroL9LhiSFsExTXimbd9VI6d%2FCA7B2xCRJrpMeOib0%2F4%2FM4ZpEA269mFfkiU6qxaWfaz82nAtLoANb3C3PEAOyTFBKURSErf%2FtIJ%2BSPM4Z1fnsx6pgh66gg2LcPzFiveOkw2ah8oADyeidx09XK2oPZrE1u7qlGRm%2BbRII6xgMzt3xJhW4fhBI6YQoZO6aNG8IbKkJUytT3%2F%2FCTsAhf390Qr%2BKTRVnaSfc6o%2B6itzao0%2FiDpZPGeyvKkXbYmNsYGLwQlyZOrXLw%2FNXh5VqY07S74xbvVNAu1EK7oSaRE%2B%2F89ht5TWnf5DP4QkZNOeXhWIsR1DWeQUl74ktjRwtZ%2BKvSQku7lBiTWBvc10%2Fmci8UQ6pWqCxIUl1ICjBVXUKiHGnxaWnfsM4g4O00lxyU2rWXvSpT965llJsKwzKpCbcwVx8e0kFHRCG3Ds3W3NUuznN6u2iyguFiCobjrnWl9xNjfCx3784twbFdH6AuIqRFiw6FlJtqw7XzSXP4yxvgrgC2v4%2FFjjDGmOPbRUgw9cDqvgY6pgFvJ4HyHScSiRyyrc0WGnNPKP4YXuuB%2BhOcIwTBDwNSsLGivIkO7mCWRPt4AOPmGp856wWymrs4o%2FlD6PBYnU64eGl5QvSR2vLU1sSvOpxvHhxVqbH1HOrC3WjlUtuegOh%2FJRNkYMMeg0P8MUwZto3T3wY9VGV2iZ0OODeERjWUkal77L3BDA1PdL7IKRz1iveDIX9HTgOQikOO0FHv13O9ystilxAB&X-Amz-Signature=9c1484a47792bff5584818580fdc34cb51375634d656d44bc5756ec6f11ef9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN6GOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHlCBTqtQPJ1e1mrrj15nRyJ04AVkU8Z2Q7JMx3GzeFWAiA6Xq7w7oN1h9e0LCdHyCLaGA7j3W4fRPt9vZGjzxdiQir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMsf%2Fro6k8E99yzZxKtwDw1q1ba%2F5LvHB%2F82sSILXe4aABXjkWM6tIpfyZ4pZkTaqDMEUVhlqRi%2FhC2jcrTRAinvrGdFhOHykPCVyrMOST7ODxxjNknHww0SiCMcSAmroL9LhiSFsExTXimbd9VI6d%2FCA7B2xCRJrpMeOib0%2F4%2FM4ZpEA269mFfkiU6qxaWfaz82nAtLoANb3C3PEAOyTFBKURSErf%2FtIJ%2BSPM4Z1fnsx6pgh66gg2LcPzFiveOkw2ah8oADyeidx09XK2oPZrE1u7qlGRm%2BbRII6xgMzt3xJhW4fhBI6YQoZO6aNG8IbKkJUytT3%2F%2FCTsAhf390Qr%2BKTRVnaSfc6o%2B6itzao0%2FiDpZPGeyvKkXbYmNsYGLwQlyZOrXLw%2FNXh5VqY07S74xbvVNAu1EK7oSaRE%2B%2F89ht5TWnf5DP4QkZNOeXhWIsR1DWeQUl74ktjRwtZ%2BKvSQku7lBiTWBvc10%2Fmci8UQ6pWqCxIUl1ICjBVXUKiHGnxaWnfsM4g4O00lxyU2rWXvSpT965llJsKwzKpCbcwVx8e0kFHRCG3Ds3W3NUuznN6u2iyguFiCobjrnWl9xNjfCx3784twbFdH6AuIqRFiw6FlJtqw7XzSXP4yxvgrgC2v4%2FFjjDGmOPbRUgw9cDqvgY6pgFvJ4HyHScSiRyyrc0WGnNPKP4YXuuB%2BhOcIwTBDwNSsLGivIkO7mCWRPt4AOPmGp856wWymrs4o%2FlD6PBYnU64eGl5QvSR2vLU1sSvOpxvHhxVqbH1HOrC3WjlUtuegOh%2FJRNkYMMeg0P8MUwZto3T3wY9VGV2iZ0OODeERjWUkal77L3BDA1PdL7IKRz1iveDIX9HTgOQikOO0FHv13O9ystilxAB&X-Amz-Signature=b329e2f1948a7d4a5f75c805be2240a52684a7b465653b68a268be946ca60c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN6GOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHlCBTqtQPJ1e1mrrj15nRyJ04AVkU8Z2Q7JMx3GzeFWAiA6Xq7w7oN1h9e0LCdHyCLaGA7j3W4fRPt9vZGjzxdiQir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMsf%2Fro6k8E99yzZxKtwDw1q1ba%2F5LvHB%2F82sSILXe4aABXjkWM6tIpfyZ4pZkTaqDMEUVhlqRi%2FhC2jcrTRAinvrGdFhOHykPCVyrMOST7ODxxjNknHww0SiCMcSAmroL9LhiSFsExTXimbd9VI6d%2FCA7B2xCRJrpMeOib0%2F4%2FM4ZpEA269mFfkiU6qxaWfaz82nAtLoANb3C3PEAOyTFBKURSErf%2FtIJ%2BSPM4Z1fnsx6pgh66gg2LcPzFiveOkw2ah8oADyeidx09XK2oPZrE1u7qlGRm%2BbRII6xgMzt3xJhW4fhBI6YQoZO6aNG8IbKkJUytT3%2F%2FCTsAhf390Qr%2BKTRVnaSfc6o%2B6itzao0%2FiDpZPGeyvKkXbYmNsYGLwQlyZOrXLw%2FNXh5VqY07S74xbvVNAu1EK7oSaRE%2B%2F89ht5TWnf5DP4QkZNOeXhWIsR1DWeQUl74ktjRwtZ%2BKvSQku7lBiTWBvc10%2Fmci8UQ6pWqCxIUl1ICjBVXUKiHGnxaWnfsM4g4O00lxyU2rWXvSpT965llJsKwzKpCbcwVx8e0kFHRCG3Ds3W3NUuznN6u2iyguFiCobjrnWl9xNjfCx3784twbFdH6AuIqRFiw6FlJtqw7XzSXP4yxvgrgC2v4%2FFjjDGmOPbRUgw9cDqvgY6pgFvJ4HyHScSiRyyrc0WGnNPKP4YXuuB%2BhOcIwTBDwNSsLGivIkO7mCWRPt4AOPmGp856wWymrs4o%2FlD6PBYnU64eGl5QvSR2vLU1sSvOpxvHhxVqbH1HOrC3WjlUtuegOh%2FJRNkYMMeg0P8MUwZto3T3wY9VGV2iZ0OODeERjWUkal77L3BDA1PdL7IKRz1iveDIX9HTgOQikOO0FHv13O9ystilxAB&X-Amz-Signature=bdf566f0248c584eb99ddf49f65e0c90e8a456c0b041b306eda867514bde9bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN6GOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHlCBTqtQPJ1e1mrrj15nRyJ04AVkU8Z2Q7JMx3GzeFWAiA6Xq7w7oN1h9e0LCdHyCLaGA7j3W4fRPt9vZGjzxdiQir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMsf%2Fro6k8E99yzZxKtwDw1q1ba%2F5LvHB%2F82sSILXe4aABXjkWM6tIpfyZ4pZkTaqDMEUVhlqRi%2FhC2jcrTRAinvrGdFhOHykPCVyrMOST7ODxxjNknHww0SiCMcSAmroL9LhiSFsExTXimbd9VI6d%2FCA7B2xCRJrpMeOib0%2F4%2FM4ZpEA269mFfkiU6qxaWfaz82nAtLoANb3C3PEAOyTFBKURSErf%2FtIJ%2BSPM4Z1fnsx6pgh66gg2LcPzFiveOkw2ah8oADyeidx09XK2oPZrE1u7qlGRm%2BbRII6xgMzt3xJhW4fhBI6YQoZO6aNG8IbKkJUytT3%2F%2FCTsAhf390Qr%2BKTRVnaSfc6o%2B6itzao0%2FiDpZPGeyvKkXbYmNsYGLwQlyZOrXLw%2FNXh5VqY07S74xbvVNAu1EK7oSaRE%2B%2F89ht5TWnf5DP4QkZNOeXhWIsR1DWeQUl74ktjRwtZ%2BKvSQku7lBiTWBvc10%2Fmci8UQ6pWqCxIUl1ICjBVXUKiHGnxaWnfsM4g4O00lxyU2rWXvSpT965llJsKwzKpCbcwVx8e0kFHRCG3Ds3W3NUuznN6u2iyguFiCobjrnWl9xNjfCx3784twbFdH6AuIqRFiw6FlJtqw7XzSXP4yxvgrgC2v4%2FFjjDGmOPbRUgw9cDqvgY6pgFvJ4HyHScSiRyyrc0WGnNPKP4YXuuB%2BhOcIwTBDwNSsLGivIkO7mCWRPt4AOPmGp856wWymrs4o%2FlD6PBYnU64eGl5QvSR2vLU1sSvOpxvHhxVqbH1HOrC3WjlUtuegOh%2FJRNkYMMeg0P8MUwZto3T3wY9VGV2iZ0OODeERjWUkal77L3BDA1PdL7IKRz1iveDIX9HTgOQikOO0FHv13O9ystilxAB&X-Amz-Signature=384836c84f0fd263d8d96f80e312dda46d2cae7104349c881af4fea966246814&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN6GOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHlCBTqtQPJ1e1mrrj15nRyJ04AVkU8Z2Q7JMx3GzeFWAiA6Xq7w7oN1h9e0LCdHyCLaGA7j3W4fRPt9vZGjzxdiQir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMsf%2Fro6k8E99yzZxKtwDw1q1ba%2F5LvHB%2F82sSILXe4aABXjkWM6tIpfyZ4pZkTaqDMEUVhlqRi%2FhC2jcrTRAinvrGdFhOHykPCVyrMOST7ODxxjNknHww0SiCMcSAmroL9LhiSFsExTXimbd9VI6d%2FCA7B2xCRJrpMeOib0%2F4%2FM4ZpEA269mFfkiU6qxaWfaz82nAtLoANb3C3PEAOyTFBKURSErf%2FtIJ%2BSPM4Z1fnsx6pgh66gg2LcPzFiveOkw2ah8oADyeidx09XK2oPZrE1u7qlGRm%2BbRII6xgMzt3xJhW4fhBI6YQoZO6aNG8IbKkJUytT3%2F%2FCTsAhf390Qr%2BKTRVnaSfc6o%2B6itzao0%2FiDpZPGeyvKkXbYmNsYGLwQlyZOrXLw%2FNXh5VqY07S74xbvVNAu1EK7oSaRE%2B%2F89ht5TWnf5DP4QkZNOeXhWIsR1DWeQUl74ktjRwtZ%2BKvSQku7lBiTWBvc10%2Fmci8UQ6pWqCxIUl1ICjBVXUKiHGnxaWnfsM4g4O00lxyU2rWXvSpT965llJsKwzKpCbcwVx8e0kFHRCG3Ds3W3NUuznN6u2iyguFiCobjrnWl9xNjfCx3784twbFdH6AuIqRFiw6FlJtqw7XzSXP4yxvgrgC2v4%2FFjjDGmOPbRUgw9cDqvgY6pgFvJ4HyHScSiRyyrc0WGnNPKP4YXuuB%2BhOcIwTBDwNSsLGivIkO7mCWRPt4AOPmGp856wWymrs4o%2FlD6PBYnU64eGl5QvSR2vLU1sSvOpxvHhxVqbH1HOrC3WjlUtuegOh%2FJRNkYMMeg0P8MUwZto3T3wY9VGV2iZ0OODeERjWUkal77L3BDA1PdL7IKRz1iveDIX9HTgOQikOO0FHv13O9ystilxAB&X-Amz-Signature=8a4802573d31f520758d4f37f545b98ee62fa3b83ac921cfc35d0e704422a732&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUN6GOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHlCBTqtQPJ1e1mrrj15nRyJ04AVkU8Z2Q7JMx3GzeFWAiA6Xq7w7oN1h9e0LCdHyCLaGA7j3W4fRPt9vZGjzxdiQir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMsf%2Fro6k8E99yzZxKtwDw1q1ba%2F5LvHB%2F82sSILXe4aABXjkWM6tIpfyZ4pZkTaqDMEUVhlqRi%2FhC2jcrTRAinvrGdFhOHykPCVyrMOST7ODxxjNknHww0SiCMcSAmroL9LhiSFsExTXimbd9VI6d%2FCA7B2xCRJrpMeOib0%2F4%2FM4ZpEA269mFfkiU6qxaWfaz82nAtLoANb3C3PEAOyTFBKURSErf%2FtIJ%2BSPM4Z1fnsx6pgh66gg2LcPzFiveOkw2ah8oADyeidx09XK2oPZrE1u7qlGRm%2BbRII6xgMzt3xJhW4fhBI6YQoZO6aNG8IbKkJUytT3%2F%2FCTsAhf390Qr%2BKTRVnaSfc6o%2B6itzao0%2FiDpZPGeyvKkXbYmNsYGLwQlyZOrXLw%2FNXh5VqY07S74xbvVNAu1EK7oSaRE%2B%2F89ht5TWnf5DP4QkZNOeXhWIsR1DWeQUl74ktjRwtZ%2BKvSQku7lBiTWBvc10%2Fmci8UQ6pWqCxIUl1ICjBVXUKiHGnxaWnfsM4g4O00lxyU2rWXvSpT965llJsKwzKpCbcwVx8e0kFHRCG3Ds3W3NUuznN6u2iyguFiCobjrnWl9xNjfCx3784twbFdH6AuIqRFiw6FlJtqw7XzSXP4yxvgrgC2v4%2FFjjDGmOPbRUgw9cDqvgY6pgFvJ4HyHScSiRyyrc0WGnNPKP4YXuuB%2BhOcIwTBDwNSsLGivIkO7mCWRPt4AOPmGp856wWymrs4o%2FlD6PBYnU64eGl5QvSR2vLU1sSvOpxvHhxVqbH1HOrC3WjlUtuegOh%2FJRNkYMMeg0P8MUwZto3T3wY9VGV2iZ0OODeERjWUkal77L3BDA1PdL7IKRz1iveDIX9HTgOQikOO0FHv13O9ystilxAB&X-Amz-Signature=39906c203306d2fc6aad42247338bb0dd6f78e09ea45dc5c9b900f05421ba4f0&X-Amz-SignedHeaders=host&x-id=GetObject)
