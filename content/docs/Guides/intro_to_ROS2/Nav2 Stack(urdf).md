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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2NCA7T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzhXbAcoNNu%2Bssz45Z%2BWNDS24OpvlzCfEcI4MsJfpwMCIB%2BmqAC2OuVC6ixJBIUwuaM1gYGT8CQhu9Bg%2BbP5BSOtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxZZBldnrjFrI4ibIq3AOswtByXsd3P5Sw2%2BGxiiMuGxwZ29rYyL9faYl0Z1oUjopEvK4ukoK0fgEh8g%2B8JZ%2BZX1smWe3FizDLsPbYwB%2FrEuC52KdAbntFUaLsxu9YZUF1eGTT32ZEw0FEs%2BBb1OuDvDg%2B56hG8GXcvYD2nO7lFnhCMApA0FrIgwHbGA0ssUr1gsLhW%2FfFgIwoGd1C6G7P5LEkE%2Flb7nCq7%2BZgoyUZB7igCKs4FSB9f7eNCvmQmbIpfKZxSOveTXBuZ%2Fmgyd5htRs1ENjBWjRNUE72cJj2Ls85c%2B0qNYrxmOFwMG2Z2%2BjsbMsn%2FhbF3YEyr6ZJW4hEb4BeSy4%2F6K5rTcJv5FDsq%2FTaNbGsLwZKvfx4YFAmB%2FrNa90g3mtVDImjcUfE1HfWbHVu7jOYTRdXplkLc9w9iDRrxnNuE1KBb4z3AZeLnTK%2FdP%2BU%2B8e2Ss2c32OB7uYBfRyDsDQm6r5QR3rx622Dv0X4wFOHjvyFFhXR%2FWTsAaIMvj2xvEOh91pCeJy%2FjUAS7tm7Kg%2FR3vuxfGW2F7f5r9NEu3M4SLxreZlgkf0UtzlTV4ZXGDud34umWO2YGCGyM8Y8%2FhAMc12E%2F7LnGVVwxDs8G2drFlbKe8ws0sq9fdGTtMgbdNuhnToIGzDiwq29BjqnAZB5P5WSE0RSbIH67VmewdexIcudz6UivoKWO2c9g2V2n90hEgB%2BvpXQ7n%2FU4lBD9Gy4bVLc7luhr6pGWgpV5DRT6dahctjfNuxX6KaDcxI9IFAoAE9ty3D7%2FbL113%2FhRO%2FRXN2X9yDBxAFPfGITLjP2fPxFG%2BU5EvwwWhVRXYuAdbhAYNr49PDLCF4JnZbZeypK1fvxR33ZENCWtfZ3ZXprhaFQfXZY&X-Amz-Signature=df6a78d5dcc9d814dff6a73e80fc80785a1b67b83393c62d1d1f959c1f68d4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2NCA7T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzhXbAcoNNu%2Bssz45Z%2BWNDS24OpvlzCfEcI4MsJfpwMCIB%2BmqAC2OuVC6ixJBIUwuaM1gYGT8CQhu9Bg%2BbP5BSOtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxZZBldnrjFrI4ibIq3AOswtByXsd3P5Sw2%2BGxiiMuGxwZ29rYyL9faYl0Z1oUjopEvK4ukoK0fgEh8g%2B8JZ%2BZX1smWe3FizDLsPbYwB%2FrEuC52KdAbntFUaLsxu9YZUF1eGTT32ZEw0FEs%2BBb1OuDvDg%2B56hG8GXcvYD2nO7lFnhCMApA0FrIgwHbGA0ssUr1gsLhW%2FfFgIwoGd1C6G7P5LEkE%2Flb7nCq7%2BZgoyUZB7igCKs4FSB9f7eNCvmQmbIpfKZxSOveTXBuZ%2Fmgyd5htRs1ENjBWjRNUE72cJj2Ls85c%2B0qNYrxmOFwMG2Z2%2BjsbMsn%2FhbF3YEyr6ZJW4hEb4BeSy4%2F6K5rTcJv5FDsq%2FTaNbGsLwZKvfx4YFAmB%2FrNa90g3mtVDImjcUfE1HfWbHVu7jOYTRdXplkLc9w9iDRrxnNuE1KBb4z3AZeLnTK%2FdP%2BU%2B8e2Ss2c32OB7uYBfRyDsDQm6r5QR3rx622Dv0X4wFOHjvyFFhXR%2FWTsAaIMvj2xvEOh91pCeJy%2FjUAS7tm7Kg%2FR3vuxfGW2F7f5r9NEu3M4SLxreZlgkf0UtzlTV4ZXGDud34umWO2YGCGyM8Y8%2FhAMc12E%2F7LnGVVwxDs8G2drFlbKe8ws0sq9fdGTtMgbdNuhnToIGzDiwq29BjqnAZB5P5WSE0RSbIH67VmewdexIcudz6UivoKWO2c9g2V2n90hEgB%2BvpXQ7n%2FU4lBD9Gy4bVLc7luhr6pGWgpV5DRT6dahctjfNuxX6KaDcxI9IFAoAE9ty3D7%2FbL113%2FhRO%2FRXN2X9yDBxAFPfGITLjP2fPxFG%2BU5EvwwWhVRXYuAdbhAYNr49PDLCF4JnZbZeypK1fvxR33ZENCWtfZ3ZXprhaFQfXZY&X-Amz-Signature=5fc1ed24ddfcf3c7e7d2a9482dd0405752c662911df161aabb59289fe60038d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2NCA7T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzhXbAcoNNu%2Bssz45Z%2BWNDS24OpvlzCfEcI4MsJfpwMCIB%2BmqAC2OuVC6ixJBIUwuaM1gYGT8CQhu9Bg%2BbP5BSOtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxZZBldnrjFrI4ibIq3AOswtByXsd3P5Sw2%2BGxiiMuGxwZ29rYyL9faYl0Z1oUjopEvK4ukoK0fgEh8g%2B8JZ%2BZX1smWe3FizDLsPbYwB%2FrEuC52KdAbntFUaLsxu9YZUF1eGTT32ZEw0FEs%2BBb1OuDvDg%2B56hG8GXcvYD2nO7lFnhCMApA0FrIgwHbGA0ssUr1gsLhW%2FfFgIwoGd1C6G7P5LEkE%2Flb7nCq7%2BZgoyUZB7igCKs4FSB9f7eNCvmQmbIpfKZxSOveTXBuZ%2Fmgyd5htRs1ENjBWjRNUE72cJj2Ls85c%2B0qNYrxmOFwMG2Z2%2BjsbMsn%2FhbF3YEyr6ZJW4hEb4BeSy4%2F6K5rTcJv5FDsq%2FTaNbGsLwZKvfx4YFAmB%2FrNa90g3mtVDImjcUfE1HfWbHVu7jOYTRdXplkLc9w9iDRrxnNuE1KBb4z3AZeLnTK%2FdP%2BU%2B8e2Ss2c32OB7uYBfRyDsDQm6r5QR3rx622Dv0X4wFOHjvyFFhXR%2FWTsAaIMvj2xvEOh91pCeJy%2FjUAS7tm7Kg%2FR3vuxfGW2F7f5r9NEu3M4SLxreZlgkf0UtzlTV4ZXGDud34umWO2YGCGyM8Y8%2FhAMc12E%2F7LnGVVwxDs8G2drFlbKe8ws0sq9fdGTtMgbdNuhnToIGzDiwq29BjqnAZB5P5WSE0RSbIH67VmewdexIcudz6UivoKWO2c9g2V2n90hEgB%2BvpXQ7n%2FU4lBD9Gy4bVLc7luhr6pGWgpV5DRT6dahctjfNuxX6KaDcxI9IFAoAE9ty3D7%2FbL113%2FhRO%2FRXN2X9yDBxAFPfGITLjP2fPxFG%2BU5EvwwWhVRXYuAdbhAYNr49PDLCF4JnZbZeypK1fvxR33ZENCWtfZ3ZXprhaFQfXZY&X-Amz-Signature=100896a7ac3079ceda042504149fd27ac6640dff1c7961f629328dd273b68141&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2NCA7T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzhXbAcoNNu%2Bssz45Z%2BWNDS24OpvlzCfEcI4MsJfpwMCIB%2BmqAC2OuVC6ixJBIUwuaM1gYGT8CQhu9Bg%2BbP5BSOtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxZZBldnrjFrI4ibIq3AOswtByXsd3P5Sw2%2BGxiiMuGxwZ29rYyL9faYl0Z1oUjopEvK4ukoK0fgEh8g%2B8JZ%2BZX1smWe3FizDLsPbYwB%2FrEuC52KdAbntFUaLsxu9YZUF1eGTT32ZEw0FEs%2BBb1OuDvDg%2B56hG8GXcvYD2nO7lFnhCMApA0FrIgwHbGA0ssUr1gsLhW%2FfFgIwoGd1C6G7P5LEkE%2Flb7nCq7%2BZgoyUZB7igCKs4FSB9f7eNCvmQmbIpfKZxSOveTXBuZ%2Fmgyd5htRs1ENjBWjRNUE72cJj2Ls85c%2B0qNYrxmOFwMG2Z2%2BjsbMsn%2FhbF3YEyr6ZJW4hEb4BeSy4%2F6K5rTcJv5FDsq%2FTaNbGsLwZKvfx4YFAmB%2FrNa90g3mtVDImjcUfE1HfWbHVu7jOYTRdXplkLc9w9iDRrxnNuE1KBb4z3AZeLnTK%2FdP%2BU%2B8e2Ss2c32OB7uYBfRyDsDQm6r5QR3rx622Dv0X4wFOHjvyFFhXR%2FWTsAaIMvj2xvEOh91pCeJy%2FjUAS7tm7Kg%2FR3vuxfGW2F7f5r9NEu3M4SLxreZlgkf0UtzlTV4ZXGDud34umWO2YGCGyM8Y8%2FhAMc12E%2F7LnGVVwxDs8G2drFlbKe8ws0sq9fdGTtMgbdNuhnToIGzDiwq29BjqnAZB5P5WSE0RSbIH67VmewdexIcudz6UivoKWO2c9g2V2n90hEgB%2BvpXQ7n%2FU4lBD9Gy4bVLc7luhr6pGWgpV5DRT6dahctjfNuxX6KaDcxI9IFAoAE9ty3D7%2FbL113%2FhRO%2FRXN2X9yDBxAFPfGITLjP2fPxFG%2BU5EvwwWhVRXYuAdbhAYNr49PDLCF4JnZbZeypK1fvxR33ZENCWtfZ3ZXprhaFQfXZY&X-Amz-Signature=b684e8ca7fff903ebf3761bfea0283867aa79e1d8a8dbf8244cde436f49bdb9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2NCA7T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzhXbAcoNNu%2Bssz45Z%2BWNDS24OpvlzCfEcI4MsJfpwMCIB%2BmqAC2OuVC6ixJBIUwuaM1gYGT8CQhu9Bg%2BbP5BSOtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxZZBldnrjFrI4ibIq3AOswtByXsd3P5Sw2%2BGxiiMuGxwZ29rYyL9faYl0Z1oUjopEvK4ukoK0fgEh8g%2B8JZ%2BZX1smWe3FizDLsPbYwB%2FrEuC52KdAbntFUaLsxu9YZUF1eGTT32ZEw0FEs%2BBb1OuDvDg%2B56hG8GXcvYD2nO7lFnhCMApA0FrIgwHbGA0ssUr1gsLhW%2FfFgIwoGd1C6G7P5LEkE%2Flb7nCq7%2BZgoyUZB7igCKs4FSB9f7eNCvmQmbIpfKZxSOveTXBuZ%2Fmgyd5htRs1ENjBWjRNUE72cJj2Ls85c%2B0qNYrxmOFwMG2Z2%2BjsbMsn%2FhbF3YEyr6ZJW4hEb4BeSy4%2F6K5rTcJv5FDsq%2FTaNbGsLwZKvfx4YFAmB%2FrNa90g3mtVDImjcUfE1HfWbHVu7jOYTRdXplkLc9w9iDRrxnNuE1KBb4z3AZeLnTK%2FdP%2BU%2B8e2Ss2c32OB7uYBfRyDsDQm6r5QR3rx622Dv0X4wFOHjvyFFhXR%2FWTsAaIMvj2xvEOh91pCeJy%2FjUAS7tm7Kg%2FR3vuxfGW2F7f5r9NEu3M4SLxreZlgkf0UtzlTV4ZXGDud34umWO2YGCGyM8Y8%2FhAMc12E%2F7LnGVVwxDs8G2drFlbKe8ws0sq9fdGTtMgbdNuhnToIGzDiwq29BjqnAZB5P5WSE0RSbIH67VmewdexIcudz6UivoKWO2c9g2V2n90hEgB%2BvpXQ7n%2FU4lBD9Gy4bVLc7luhr6pGWgpV5DRT6dahctjfNuxX6KaDcxI9IFAoAE9ty3D7%2FbL113%2FhRO%2FRXN2X9yDBxAFPfGITLjP2fPxFG%2BU5EvwwWhVRXYuAdbhAYNr49PDLCF4JnZbZeypK1fvxR33ZENCWtfZ3ZXprhaFQfXZY&X-Amz-Signature=f1d3d9cb041dd4a7754e6aedb3b78fd225398f8f9e0a410ae4b40a6aee978dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2NCA7T%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzhXbAcoNNu%2Bssz45Z%2BWNDS24OpvlzCfEcI4MsJfpwMCIB%2BmqAC2OuVC6ixJBIUwuaM1gYGT8CQhu9Bg%2BbP5BSOtKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxZZBldnrjFrI4ibIq3AOswtByXsd3P5Sw2%2BGxiiMuGxwZ29rYyL9faYl0Z1oUjopEvK4ukoK0fgEh8g%2B8JZ%2BZX1smWe3FizDLsPbYwB%2FrEuC52KdAbntFUaLsxu9YZUF1eGTT32ZEw0FEs%2BBb1OuDvDg%2B56hG8GXcvYD2nO7lFnhCMApA0FrIgwHbGA0ssUr1gsLhW%2FfFgIwoGd1C6G7P5LEkE%2Flb7nCq7%2BZgoyUZB7igCKs4FSB9f7eNCvmQmbIpfKZxSOveTXBuZ%2Fmgyd5htRs1ENjBWjRNUE72cJj2Ls85c%2B0qNYrxmOFwMG2Z2%2BjsbMsn%2FhbF3YEyr6ZJW4hEb4BeSy4%2F6K5rTcJv5FDsq%2FTaNbGsLwZKvfx4YFAmB%2FrNa90g3mtVDImjcUfE1HfWbHVu7jOYTRdXplkLc9w9iDRrxnNuE1KBb4z3AZeLnTK%2FdP%2BU%2B8e2Ss2c32OB7uYBfRyDsDQm6r5QR3rx622Dv0X4wFOHjvyFFhXR%2FWTsAaIMvj2xvEOh91pCeJy%2FjUAS7tm7Kg%2FR3vuxfGW2F7f5r9NEu3M4SLxreZlgkf0UtzlTV4ZXGDud34umWO2YGCGyM8Y8%2FhAMc12E%2F7LnGVVwxDs8G2drFlbKe8ws0sq9fdGTtMgbdNuhnToIGzDiwq29BjqnAZB5P5WSE0RSbIH67VmewdexIcudz6UivoKWO2c9g2V2n90hEgB%2BvpXQ7n%2FU4lBD9Gy4bVLc7luhr6pGWgpV5DRT6dahctjfNuxX6KaDcxI9IFAoAE9ty3D7%2FbL113%2FhRO%2FRXN2X9yDBxAFPfGITLjP2fPxFG%2BU5EvwwWhVRXYuAdbhAYNr49PDLCF4JnZbZeypK1fvxR33ZENCWtfZ3ZXprhaFQfXZY&X-Amz-Signature=e61efebd8cce5ba84f78ae635c1d819f26a91a37e3c94f94afb6e3ae8f5b80d6&X-Amz-SignedHeaders=host&x-id=GetObject)
