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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDE27N%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc13KxRHJ7Q0kpX%2FuYZoYJDgnm4261hZgjjjU6vmf6wwIhAPzo3l8FWh6JzwV7fkYM27I1xXTt4pzk9uqkSHOYreWdKv8DCDQQABoMNjM3NDIzMTgzODA1IgymNZiP2Dep1HGBfUMq3APu9rllVcd451mzIT3To1htARNb8V3hvoAeaHM6z8ONqgMbFAdqf1DnyUdilOAmmic2EIk0BMnojIKZB4MYI%2FSlEr8z%2BLv1mG854SUWyBGZEnyNozYIViCEf6tw2t4lUOrLGVy3ABzIfsyWGvPEngPlklMkybuW%2BDklxGP9hICB2H%2BrRhLG9uwA8%2FI4zcyEw9T4SEspyeysG%2F2%2BtrER9UHRT9O7QH0ffDxgFFgMuDKVWVMj56iBqYfAsPO2DMm%2FJKUTKR4STbg34PfcbVvYGqeYdtDOq0WS%2Fr9N92TjQlqcdeQI9nlplOLXxLLLRj3hex8MPeD0hPJQAXWC1LcRHYwrIwIBfjkAOwVUb2Swltzijl2xWjK0G2QL7vdE%2FaPlZhzeIRw6piBQIN4l4GtiSIpLZB0ci9gRsYRotzKEde1TodbiAbvtfzKWjEXkWRYoFHa%2BQdauz2Vxos%2BqJDZrqJI5lAfgK50Eak6kaXBZz%2BVK9%2FGWw8w3FtKyZCm3n2pXUCcGspU7Y00Ss9uR0DAY93yT2lstggN5EdLiu6snCsXkPaSk0NooVSA4kZ7UT6g5m%2BBpdFczhupCeFohdItEvXq9lPLe7SzSK4gyZ1i6cauA0LEdCdYPs2ztmrxeFjDe1vq%2FBjqkAVThYva6755eOusOyxAlAgMju7q1hNoShKNyK2LRb6RiC%2Bfto%2FZPT5LsFHu%2BDj7v5rABvEOP9qaT9WkDCH7SmnTZcMrZXwPLaf5Gu73TLZnyxX%2BujrXmi0U1Q5jyGn%2BlJFhXTjs116536mBxU%2F6RcI4fvFwjrQjbrColDJu4rldt0gfijASC1kHgcNj7tTisoWGgqCiULbrO6VdVYPFHBqxrxqhW&X-Amz-Signature=0ba197765cf1ae6ad9a870b60aac8706b8ac5667c6128a63b31d1b7dac2ab6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDE27N%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc13KxRHJ7Q0kpX%2FuYZoYJDgnm4261hZgjjjU6vmf6wwIhAPzo3l8FWh6JzwV7fkYM27I1xXTt4pzk9uqkSHOYreWdKv8DCDQQABoMNjM3NDIzMTgzODA1IgymNZiP2Dep1HGBfUMq3APu9rllVcd451mzIT3To1htARNb8V3hvoAeaHM6z8ONqgMbFAdqf1DnyUdilOAmmic2EIk0BMnojIKZB4MYI%2FSlEr8z%2BLv1mG854SUWyBGZEnyNozYIViCEf6tw2t4lUOrLGVy3ABzIfsyWGvPEngPlklMkybuW%2BDklxGP9hICB2H%2BrRhLG9uwA8%2FI4zcyEw9T4SEspyeysG%2F2%2BtrER9UHRT9O7QH0ffDxgFFgMuDKVWVMj56iBqYfAsPO2DMm%2FJKUTKR4STbg34PfcbVvYGqeYdtDOq0WS%2Fr9N92TjQlqcdeQI9nlplOLXxLLLRj3hex8MPeD0hPJQAXWC1LcRHYwrIwIBfjkAOwVUb2Swltzijl2xWjK0G2QL7vdE%2FaPlZhzeIRw6piBQIN4l4GtiSIpLZB0ci9gRsYRotzKEde1TodbiAbvtfzKWjEXkWRYoFHa%2BQdauz2Vxos%2BqJDZrqJI5lAfgK50Eak6kaXBZz%2BVK9%2FGWw8w3FtKyZCm3n2pXUCcGspU7Y00Ss9uR0DAY93yT2lstggN5EdLiu6snCsXkPaSk0NooVSA4kZ7UT6g5m%2BBpdFczhupCeFohdItEvXq9lPLe7SzSK4gyZ1i6cauA0LEdCdYPs2ztmrxeFjDe1vq%2FBjqkAVThYva6755eOusOyxAlAgMju7q1hNoShKNyK2LRb6RiC%2Bfto%2FZPT5LsFHu%2BDj7v5rABvEOP9qaT9WkDCH7SmnTZcMrZXwPLaf5Gu73TLZnyxX%2BujrXmi0U1Q5jyGn%2BlJFhXTjs116536mBxU%2F6RcI4fvFwjrQjbrColDJu4rldt0gfijASC1kHgcNj7tTisoWGgqCiULbrO6VdVYPFHBqxrxqhW&X-Amz-Signature=ba8b30a50ff23efce70406f3397691cea4bdd17d7d6c48135a259895b08bff9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDE27N%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc13KxRHJ7Q0kpX%2FuYZoYJDgnm4261hZgjjjU6vmf6wwIhAPzo3l8FWh6JzwV7fkYM27I1xXTt4pzk9uqkSHOYreWdKv8DCDQQABoMNjM3NDIzMTgzODA1IgymNZiP2Dep1HGBfUMq3APu9rllVcd451mzIT3To1htARNb8V3hvoAeaHM6z8ONqgMbFAdqf1DnyUdilOAmmic2EIk0BMnojIKZB4MYI%2FSlEr8z%2BLv1mG854SUWyBGZEnyNozYIViCEf6tw2t4lUOrLGVy3ABzIfsyWGvPEngPlklMkybuW%2BDklxGP9hICB2H%2BrRhLG9uwA8%2FI4zcyEw9T4SEspyeysG%2F2%2BtrER9UHRT9O7QH0ffDxgFFgMuDKVWVMj56iBqYfAsPO2DMm%2FJKUTKR4STbg34PfcbVvYGqeYdtDOq0WS%2Fr9N92TjQlqcdeQI9nlplOLXxLLLRj3hex8MPeD0hPJQAXWC1LcRHYwrIwIBfjkAOwVUb2Swltzijl2xWjK0G2QL7vdE%2FaPlZhzeIRw6piBQIN4l4GtiSIpLZB0ci9gRsYRotzKEde1TodbiAbvtfzKWjEXkWRYoFHa%2BQdauz2Vxos%2BqJDZrqJI5lAfgK50Eak6kaXBZz%2BVK9%2FGWw8w3FtKyZCm3n2pXUCcGspU7Y00Ss9uR0DAY93yT2lstggN5EdLiu6snCsXkPaSk0NooVSA4kZ7UT6g5m%2BBpdFczhupCeFohdItEvXq9lPLe7SzSK4gyZ1i6cauA0LEdCdYPs2ztmrxeFjDe1vq%2FBjqkAVThYva6755eOusOyxAlAgMju7q1hNoShKNyK2LRb6RiC%2Bfto%2FZPT5LsFHu%2BDj7v5rABvEOP9qaT9WkDCH7SmnTZcMrZXwPLaf5Gu73TLZnyxX%2BujrXmi0U1Q5jyGn%2BlJFhXTjs116536mBxU%2F6RcI4fvFwjrQjbrColDJu4rldt0gfijASC1kHgcNj7tTisoWGgqCiULbrO6VdVYPFHBqxrxqhW&X-Amz-Signature=814a6139a7afd5dd4c02ef5b95873a5e5b6529e891165062fa5554b580527af0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDE27N%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc13KxRHJ7Q0kpX%2FuYZoYJDgnm4261hZgjjjU6vmf6wwIhAPzo3l8FWh6JzwV7fkYM27I1xXTt4pzk9uqkSHOYreWdKv8DCDQQABoMNjM3NDIzMTgzODA1IgymNZiP2Dep1HGBfUMq3APu9rllVcd451mzIT3To1htARNb8V3hvoAeaHM6z8ONqgMbFAdqf1DnyUdilOAmmic2EIk0BMnojIKZB4MYI%2FSlEr8z%2BLv1mG854SUWyBGZEnyNozYIViCEf6tw2t4lUOrLGVy3ABzIfsyWGvPEngPlklMkybuW%2BDklxGP9hICB2H%2BrRhLG9uwA8%2FI4zcyEw9T4SEspyeysG%2F2%2BtrER9UHRT9O7QH0ffDxgFFgMuDKVWVMj56iBqYfAsPO2DMm%2FJKUTKR4STbg34PfcbVvYGqeYdtDOq0WS%2Fr9N92TjQlqcdeQI9nlplOLXxLLLRj3hex8MPeD0hPJQAXWC1LcRHYwrIwIBfjkAOwVUb2Swltzijl2xWjK0G2QL7vdE%2FaPlZhzeIRw6piBQIN4l4GtiSIpLZB0ci9gRsYRotzKEde1TodbiAbvtfzKWjEXkWRYoFHa%2BQdauz2Vxos%2BqJDZrqJI5lAfgK50Eak6kaXBZz%2BVK9%2FGWw8w3FtKyZCm3n2pXUCcGspU7Y00Ss9uR0DAY93yT2lstggN5EdLiu6snCsXkPaSk0NooVSA4kZ7UT6g5m%2BBpdFczhupCeFohdItEvXq9lPLe7SzSK4gyZ1i6cauA0LEdCdYPs2ztmrxeFjDe1vq%2FBjqkAVThYva6755eOusOyxAlAgMju7q1hNoShKNyK2LRb6RiC%2Bfto%2FZPT5LsFHu%2BDj7v5rABvEOP9qaT9WkDCH7SmnTZcMrZXwPLaf5Gu73TLZnyxX%2BujrXmi0U1Q5jyGn%2BlJFhXTjs116536mBxU%2F6RcI4fvFwjrQjbrColDJu4rldt0gfijASC1kHgcNj7tTisoWGgqCiULbrO6VdVYPFHBqxrxqhW&X-Amz-Signature=46d296118704689e1caacc649aa2244700047a119c8480548f7e62f00ee7ff93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDE27N%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc13KxRHJ7Q0kpX%2FuYZoYJDgnm4261hZgjjjU6vmf6wwIhAPzo3l8FWh6JzwV7fkYM27I1xXTt4pzk9uqkSHOYreWdKv8DCDQQABoMNjM3NDIzMTgzODA1IgymNZiP2Dep1HGBfUMq3APu9rllVcd451mzIT3To1htARNb8V3hvoAeaHM6z8ONqgMbFAdqf1DnyUdilOAmmic2EIk0BMnojIKZB4MYI%2FSlEr8z%2BLv1mG854SUWyBGZEnyNozYIViCEf6tw2t4lUOrLGVy3ABzIfsyWGvPEngPlklMkybuW%2BDklxGP9hICB2H%2BrRhLG9uwA8%2FI4zcyEw9T4SEspyeysG%2F2%2BtrER9UHRT9O7QH0ffDxgFFgMuDKVWVMj56iBqYfAsPO2DMm%2FJKUTKR4STbg34PfcbVvYGqeYdtDOq0WS%2Fr9N92TjQlqcdeQI9nlplOLXxLLLRj3hex8MPeD0hPJQAXWC1LcRHYwrIwIBfjkAOwVUb2Swltzijl2xWjK0G2QL7vdE%2FaPlZhzeIRw6piBQIN4l4GtiSIpLZB0ci9gRsYRotzKEde1TodbiAbvtfzKWjEXkWRYoFHa%2BQdauz2Vxos%2BqJDZrqJI5lAfgK50Eak6kaXBZz%2BVK9%2FGWw8w3FtKyZCm3n2pXUCcGspU7Y00Ss9uR0DAY93yT2lstggN5EdLiu6snCsXkPaSk0NooVSA4kZ7UT6g5m%2BBpdFczhupCeFohdItEvXq9lPLe7SzSK4gyZ1i6cauA0LEdCdYPs2ztmrxeFjDe1vq%2FBjqkAVThYva6755eOusOyxAlAgMju7q1hNoShKNyK2LRb6RiC%2Bfto%2FZPT5LsFHu%2BDj7v5rABvEOP9qaT9WkDCH7SmnTZcMrZXwPLaf5Gu73TLZnyxX%2BujrXmi0U1Q5jyGn%2BlJFhXTjs116536mBxU%2F6RcI4fvFwjrQjbrColDJu4rldt0gfijASC1kHgcNj7tTisoWGgqCiULbrO6VdVYPFHBqxrxqhW&X-Amz-Signature=3eee80013e5a9d77efafc66628134f3d1e73dce4c2707a3234369fee8d74b972&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRDE27N%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc13KxRHJ7Q0kpX%2FuYZoYJDgnm4261hZgjjjU6vmf6wwIhAPzo3l8FWh6JzwV7fkYM27I1xXTt4pzk9uqkSHOYreWdKv8DCDQQABoMNjM3NDIzMTgzODA1IgymNZiP2Dep1HGBfUMq3APu9rllVcd451mzIT3To1htARNb8V3hvoAeaHM6z8ONqgMbFAdqf1DnyUdilOAmmic2EIk0BMnojIKZB4MYI%2FSlEr8z%2BLv1mG854SUWyBGZEnyNozYIViCEf6tw2t4lUOrLGVy3ABzIfsyWGvPEngPlklMkybuW%2BDklxGP9hICB2H%2BrRhLG9uwA8%2FI4zcyEw9T4SEspyeysG%2F2%2BtrER9UHRT9O7QH0ffDxgFFgMuDKVWVMj56iBqYfAsPO2DMm%2FJKUTKR4STbg34PfcbVvYGqeYdtDOq0WS%2Fr9N92TjQlqcdeQI9nlplOLXxLLLRj3hex8MPeD0hPJQAXWC1LcRHYwrIwIBfjkAOwVUb2Swltzijl2xWjK0G2QL7vdE%2FaPlZhzeIRw6piBQIN4l4GtiSIpLZB0ci9gRsYRotzKEde1TodbiAbvtfzKWjEXkWRYoFHa%2BQdauz2Vxos%2BqJDZrqJI5lAfgK50Eak6kaXBZz%2BVK9%2FGWw8w3FtKyZCm3n2pXUCcGspU7Y00Ss9uR0DAY93yT2lstggN5EdLiu6snCsXkPaSk0NooVSA4kZ7UT6g5m%2BBpdFczhupCeFohdItEvXq9lPLe7SzSK4gyZ1i6cauA0LEdCdYPs2ztmrxeFjDe1vq%2FBjqkAVThYva6755eOusOyxAlAgMju7q1hNoShKNyK2LRb6RiC%2Bfto%2FZPT5LsFHu%2BDj7v5rABvEOP9qaT9WkDCH7SmnTZcMrZXwPLaf5Gu73TLZnyxX%2BujrXmi0U1Q5jyGn%2BlJFhXTjs116536mBxU%2F6RcI4fvFwjrQjbrColDJu4rldt0gfijASC1kHgcNj7tTisoWGgqCiULbrO6VdVYPFHBqxrxqhW&X-Amz-Signature=00a73f65751c3c53365d7954f349f39aa6eeb694befdd3114ce78904ca63358c&X-Amz-SignedHeaders=host&x-id=GetObject)
