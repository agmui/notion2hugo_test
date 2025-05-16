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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPEP4U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjKMEOudLrn2vq9giJJnVOEtZ1JkjhR7f2l53%2FufErAIhAOONph147GHgwdi5ZXEhrH7gMGcKVfXR76cK9kdBXkMDKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeJ4sPLLFE2gQP%2Fmsq3AOqO5BFlycGvep9hkka7hBHagVNpeKbylOuPKdpTsKZRsuYuEYFZR0bTof56V%2FsDd5bn5px7yofRt775ilsIhd1lUvF5%2BwYK5kwhDjbzYI8lZwGoXQb7x%2BcOrYQegZ6TJpj69lyPfjyJxT%2Bfnfr2uJGQa1Lr%2BtC7aE6qZ2acxtuh7ti0Cl50W3jYGXywTX9PjG1A4hszIXnVsGjM5vzb6FuWwl9hlAEV5%2B7MEgzPzCwjr8bzXO9O%2Fn%2FOE4kiGCmnc2qPgH9TD7rM0id8kFoTH8ZjT7gPzoS7qRcVwEVJmZWJ2nyrBLQMPlvxFT1n48eNkqPw05DqJXf66NvPlW7VVOukizc4cW47BpaBI74yUzNIVYdBBE1%2F%2FEC6bigtxw3ggYc17J2geStT7XvwYnEadW6TeIT%2BGgixLxflIbEgro4qYBkSEJKI0S2OwV6AEPVnSHGrKcMi0I1WmqRY9ORWaTPooGw5d9kL7kYADLj4uG1JE9yalwBjGCD4EiIt5mTyUcpujpc2SZUo15vW3nl9%2FOJ1STx8%2Bes1Pb5vGaDnvwP58NUYONe0OXl%2BXZ5zLhgTmqIj4RTTjzBanhCU3rDhOq75%2F3RWyJXaX4AtT%2BwgW%2FKZL2BpMxToBCrhH4LxTDsxJ7BBjqkAXM1Rf63hrTLHllqvGQ50NN8R5d1gywKfRcyIQPw6xwO4VUPd9fOmbySVR5u6csBjXN%2BDB1zt8VztavL1ybLX56I%2FudtmF12cuclr2%2BTX30DlLdPWd9uX6ERE%2Fdej5azA2Z%2BrZQS1i2i4%2ByrbOYXt%2FJVKNhKAsHEcBf3NvBSGvU3Vz4SBqNKxXCPfjziFTX37eHeawXRPi6H5Q9RlXI%2BjZsoc3Jb&X-Amz-Signature=4a9a9067ae2018ec3a690de437639f7ed4d354a68da7beaa13aee5edd4da8cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPEP4U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjKMEOudLrn2vq9giJJnVOEtZ1JkjhR7f2l53%2FufErAIhAOONph147GHgwdi5ZXEhrH7gMGcKVfXR76cK9kdBXkMDKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeJ4sPLLFE2gQP%2Fmsq3AOqO5BFlycGvep9hkka7hBHagVNpeKbylOuPKdpTsKZRsuYuEYFZR0bTof56V%2FsDd5bn5px7yofRt775ilsIhd1lUvF5%2BwYK5kwhDjbzYI8lZwGoXQb7x%2BcOrYQegZ6TJpj69lyPfjyJxT%2Bfnfr2uJGQa1Lr%2BtC7aE6qZ2acxtuh7ti0Cl50W3jYGXywTX9PjG1A4hszIXnVsGjM5vzb6FuWwl9hlAEV5%2B7MEgzPzCwjr8bzXO9O%2Fn%2FOE4kiGCmnc2qPgH9TD7rM0id8kFoTH8ZjT7gPzoS7qRcVwEVJmZWJ2nyrBLQMPlvxFT1n48eNkqPw05DqJXf66NvPlW7VVOukizc4cW47BpaBI74yUzNIVYdBBE1%2F%2FEC6bigtxw3ggYc17J2geStT7XvwYnEadW6TeIT%2BGgixLxflIbEgro4qYBkSEJKI0S2OwV6AEPVnSHGrKcMi0I1WmqRY9ORWaTPooGw5d9kL7kYADLj4uG1JE9yalwBjGCD4EiIt5mTyUcpujpc2SZUo15vW3nl9%2FOJ1STx8%2Bes1Pb5vGaDnvwP58NUYONe0OXl%2BXZ5zLhgTmqIj4RTTjzBanhCU3rDhOq75%2F3RWyJXaX4AtT%2BwgW%2FKZL2BpMxToBCrhH4LxTDsxJ7BBjqkAXM1Rf63hrTLHllqvGQ50NN8R5d1gywKfRcyIQPw6xwO4VUPd9fOmbySVR5u6csBjXN%2BDB1zt8VztavL1ybLX56I%2FudtmF12cuclr2%2BTX30DlLdPWd9uX6ERE%2Fdej5azA2Z%2BrZQS1i2i4%2ByrbOYXt%2FJVKNhKAsHEcBf3NvBSGvU3Vz4SBqNKxXCPfjziFTX37eHeawXRPi6H5Q9RlXI%2BjZsoc3Jb&X-Amz-Signature=935a214815abf0f7879480f25872d0c2ffeb29701032a880ed4cfd4a1a640f14&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPEP4U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjKMEOudLrn2vq9giJJnVOEtZ1JkjhR7f2l53%2FufErAIhAOONph147GHgwdi5ZXEhrH7gMGcKVfXR76cK9kdBXkMDKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeJ4sPLLFE2gQP%2Fmsq3AOqO5BFlycGvep9hkka7hBHagVNpeKbylOuPKdpTsKZRsuYuEYFZR0bTof56V%2FsDd5bn5px7yofRt775ilsIhd1lUvF5%2BwYK5kwhDjbzYI8lZwGoXQb7x%2BcOrYQegZ6TJpj69lyPfjyJxT%2Bfnfr2uJGQa1Lr%2BtC7aE6qZ2acxtuh7ti0Cl50W3jYGXywTX9PjG1A4hszIXnVsGjM5vzb6FuWwl9hlAEV5%2B7MEgzPzCwjr8bzXO9O%2Fn%2FOE4kiGCmnc2qPgH9TD7rM0id8kFoTH8ZjT7gPzoS7qRcVwEVJmZWJ2nyrBLQMPlvxFT1n48eNkqPw05DqJXf66NvPlW7VVOukizc4cW47BpaBI74yUzNIVYdBBE1%2F%2FEC6bigtxw3ggYc17J2geStT7XvwYnEadW6TeIT%2BGgixLxflIbEgro4qYBkSEJKI0S2OwV6AEPVnSHGrKcMi0I1WmqRY9ORWaTPooGw5d9kL7kYADLj4uG1JE9yalwBjGCD4EiIt5mTyUcpujpc2SZUo15vW3nl9%2FOJ1STx8%2Bes1Pb5vGaDnvwP58NUYONe0OXl%2BXZ5zLhgTmqIj4RTTjzBanhCU3rDhOq75%2F3RWyJXaX4AtT%2BwgW%2FKZL2BpMxToBCrhH4LxTDsxJ7BBjqkAXM1Rf63hrTLHllqvGQ50NN8R5d1gywKfRcyIQPw6xwO4VUPd9fOmbySVR5u6csBjXN%2BDB1zt8VztavL1ybLX56I%2FudtmF12cuclr2%2BTX30DlLdPWd9uX6ERE%2Fdej5azA2Z%2BrZQS1i2i4%2ByrbOYXt%2FJVKNhKAsHEcBf3NvBSGvU3Vz4SBqNKxXCPfjziFTX37eHeawXRPi6H5Q9RlXI%2BjZsoc3Jb&X-Amz-Signature=9ea462db8aa0315ec0467b06e50a817c56acf20468f33472f5a25fe6c9aeb59c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPEP4U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjKMEOudLrn2vq9giJJnVOEtZ1JkjhR7f2l53%2FufErAIhAOONph147GHgwdi5ZXEhrH7gMGcKVfXR76cK9kdBXkMDKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeJ4sPLLFE2gQP%2Fmsq3AOqO5BFlycGvep9hkka7hBHagVNpeKbylOuPKdpTsKZRsuYuEYFZR0bTof56V%2FsDd5bn5px7yofRt775ilsIhd1lUvF5%2BwYK5kwhDjbzYI8lZwGoXQb7x%2BcOrYQegZ6TJpj69lyPfjyJxT%2Bfnfr2uJGQa1Lr%2BtC7aE6qZ2acxtuh7ti0Cl50W3jYGXywTX9PjG1A4hszIXnVsGjM5vzb6FuWwl9hlAEV5%2B7MEgzPzCwjr8bzXO9O%2Fn%2FOE4kiGCmnc2qPgH9TD7rM0id8kFoTH8ZjT7gPzoS7qRcVwEVJmZWJ2nyrBLQMPlvxFT1n48eNkqPw05DqJXf66NvPlW7VVOukizc4cW47BpaBI74yUzNIVYdBBE1%2F%2FEC6bigtxw3ggYc17J2geStT7XvwYnEadW6TeIT%2BGgixLxflIbEgro4qYBkSEJKI0S2OwV6AEPVnSHGrKcMi0I1WmqRY9ORWaTPooGw5d9kL7kYADLj4uG1JE9yalwBjGCD4EiIt5mTyUcpujpc2SZUo15vW3nl9%2FOJ1STx8%2Bes1Pb5vGaDnvwP58NUYONe0OXl%2BXZ5zLhgTmqIj4RTTjzBanhCU3rDhOq75%2F3RWyJXaX4AtT%2BwgW%2FKZL2BpMxToBCrhH4LxTDsxJ7BBjqkAXM1Rf63hrTLHllqvGQ50NN8R5d1gywKfRcyIQPw6xwO4VUPd9fOmbySVR5u6csBjXN%2BDB1zt8VztavL1ybLX56I%2FudtmF12cuclr2%2BTX30DlLdPWd9uX6ERE%2Fdej5azA2Z%2BrZQS1i2i4%2ByrbOYXt%2FJVKNhKAsHEcBf3NvBSGvU3Vz4SBqNKxXCPfjziFTX37eHeawXRPi6H5Q9RlXI%2BjZsoc3Jb&X-Amz-Signature=32a21cd545d192ca7fcb29d6cc2071024c5c232e39a6c016b2c4812b567cc9e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPEP4U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjKMEOudLrn2vq9giJJnVOEtZ1JkjhR7f2l53%2FufErAIhAOONph147GHgwdi5ZXEhrH7gMGcKVfXR76cK9kdBXkMDKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeJ4sPLLFE2gQP%2Fmsq3AOqO5BFlycGvep9hkka7hBHagVNpeKbylOuPKdpTsKZRsuYuEYFZR0bTof56V%2FsDd5bn5px7yofRt775ilsIhd1lUvF5%2BwYK5kwhDjbzYI8lZwGoXQb7x%2BcOrYQegZ6TJpj69lyPfjyJxT%2Bfnfr2uJGQa1Lr%2BtC7aE6qZ2acxtuh7ti0Cl50W3jYGXywTX9PjG1A4hszIXnVsGjM5vzb6FuWwl9hlAEV5%2B7MEgzPzCwjr8bzXO9O%2Fn%2FOE4kiGCmnc2qPgH9TD7rM0id8kFoTH8ZjT7gPzoS7qRcVwEVJmZWJ2nyrBLQMPlvxFT1n48eNkqPw05DqJXf66NvPlW7VVOukizc4cW47BpaBI74yUzNIVYdBBE1%2F%2FEC6bigtxw3ggYc17J2geStT7XvwYnEadW6TeIT%2BGgixLxflIbEgro4qYBkSEJKI0S2OwV6AEPVnSHGrKcMi0I1WmqRY9ORWaTPooGw5d9kL7kYADLj4uG1JE9yalwBjGCD4EiIt5mTyUcpujpc2SZUo15vW3nl9%2FOJ1STx8%2Bes1Pb5vGaDnvwP58NUYONe0OXl%2BXZ5zLhgTmqIj4RTTjzBanhCU3rDhOq75%2F3RWyJXaX4AtT%2BwgW%2FKZL2BpMxToBCrhH4LxTDsxJ7BBjqkAXM1Rf63hrTLHllqvGQ50NN8R5d1gywKfRcyIQPw6xwO4VUPd9fOmbySVR5u6csBjXN%2BDB1zt8VztavL1ybLX56I%2FudtmF12cuclr2%2BTX30DlLdPWd9uX6ERE%2Fdej5azA2Z%2BrZQS1i2i4%2ByrbOYXt%2FJVKNhKAsHEcBf3NvBSGvU3Vz4SBqNKxXCPfjziFTX37eHeawXRPi6H5Q9RlXI%2BjZsoc3Jb&X-Amz-Signature=05d79d9605919a024caa70bcb632db3b403701c488a08159c8c4daa6ddd8f4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPEP4U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjKMEOudLrn2vq9giJJnVOEtZ1JkjhR7f2l53%2FufErAIhAOONph147GHgwdi5ZXEhrH7gMGcKVfXR76cK9kdBXkMDKv8DCE4QABoMNjM3NDIzMTgzODA1IgzeJ4sPLLFE2gQP%2Fmsq3AOqO5BFlycGvep9hkka7hBHagVNpeKbylOuPKdpTsKZRsuYuEYFZR0bTof56V%2FsDd5bn5px7yofRt775ilsIhd1lUvF5%2BwYK5kwhDjbzYI8lZwGoXQb7x%2BcOrYQegZ6TJpj69lyPfjyJxT%2Bfnfr2uJGQa1Lr%2BtC7aE6qZ2acxtuh7ti0Cl50W3jYGXywTX9PjG1A4hszIXnVsGjM5vzb6FuWwl9hlAEV5%2B7MEgzPzCwjr8bzXO9O%2Fn%2FOE4kiGCmnc2qPgH9TD7rM0id8kFoTH8ZjT7gPzoS7qRcVwEVJmZWJ2nyrBLQMPlvxFT1n48eNkqPw05DqJXf66NvPlW7VVOukizc4cW47BpaBI74yUzNIVYdBBE1%2F%2FEC6bigtxw3ggYc17J2geStT7XvwYnEadW6TeIT%2BGgixLxflIbEgro4qYBkSEJKI0S2OwV6AEPVnSHGrKcMi0I1WmqRY9ORWaTPooGw5d9kL7kYADLj4uG1JE9yalwBjGCD4EiIt5mTyUcpujpc2SZUo15vW3nl9%2FOJ1STx8%2Bes1Pb5vGaDnvwP58NUYONe0OXl%2BXZ5zLhgTmqIj4RTTjzBanhCU3rDhOq75%2F3RWyJXaX4AtT%2BwgW%2FKZL2BpMxToBCrhH4LxTDsxJ7BBjqkAXM1Rf63hrTLHllqvGQ50NN8R5d1gywKfRcyIQPw6xwO4VUPd9fOmbySVR5u6csBjXN%2BDB1zt8VztavL1ybLX56I%2FudtmF12cuclr2%2BTX30DlLdPWd9uX6ERE%2Fdej5azA2Z%2BrZQS1i2i4%2ByrbOYXt%2FJVKNhKAsHEcBf3NvBSGvU3Vz4SBqNKxXCPfjziFTX37eHeawXRPi6H5Q9RlXI%2BjZsoc3Jb&X-Amz-Signature=6177bc5f32c1f7844f4047a5399090853e488f6df2c282ebd79c53f4c3ffe739&X-Amz-SignedHeaders=host&x-id=GetObject)
