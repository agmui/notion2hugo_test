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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRV6VSPC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIF1nN9leYfxfskDfHsNK8CnbtpXKtSNfk0%2B7z7NEdAVSAiB4AxGjfbms72reXeVqspzzRhpH8FwLHXD1UKTbX9b3jiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpNEkY%2FIHnLKUkKcKtwDe39C9O8KVE7hF0fBj6kUbdulCwqAxm5xiG1OcUQmH73Ba6CmHSmeTFeZ0Di5UM6YHChanrvfZ8onERYcOxmzC55w2zZK9Ap8EolJVfV61FIhatFaXlUalumr%2FkSb7GzeNHkn%2FWIDSmKw2wDoZWt9rNdYeeWy8Zqh1%2F2Rhx%2BDyh3hE0HHiJWU%2FJUJHKYRNqa2sDY7UUp0WtSz5srKLLVPd6l%2BeJ7qziL%2FcQuHJixjSP3vAjHfYx8xlDY63p1hlbQPzKLt7cmpm1HvbZ8%2Fu%2BtR1HszvBhHAuNWIVDMu0YOQixC8lYF534AgYKNUnqLrheB5rgFeVLzqI0SNtlxzW2hE5qkwXSvYlyhJkqPSx0jjA6OWPME8n%2B5WAxwEN2qpnEfG5yWl%2BmB4N5mNTG1ez2cNCXL3SKN6%2BUb5j3o8cr9UFF6dQ8Eh7tzQpiDPqgb%2FnYsmGmOhH0c3nSWUj%2BmlTW3VUeeZELjnHUbWI3OmASlRgVRewhQ8khWWdcqT%2BflC%2BxPoFWrALsNh2kx4P0EZXxzNXrMprNQfQWuAP4tEb1BiYq%2F3rtmWNkpy2rOhfZuVzHB53WKTKC9E4i0ykGLMfKlZ0bHfCelupehCpDQWLIffK0KYQygT%2B90x6MVXZUwl7rXwAY6pgFQ6usQu5fTQC8YCSKlPGROabnRFwnbkYQqMOrZPiVTe6l8MTMX3x7eZuuriBHrPWQ8nXaKr4M3fQQqrcTDF%2FskMg4HRk64FBUTlfZ5%2F7txE0V3dEgt6F0EvwsLd1b3QQLzp4mtThZMEAGgY3iyGFTl8nKVHbW51sscVrN07PrA6S2dF0VRmrYNWnhuTM2XOeehQ%2BGXeubBQimw0AFowEalJJ7T9U0R&X-Amz-Signature=e08e7e7c62954c1fa4db7ea9871e91b18356a456f04b86f941f88ebf0a569cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRV6VSPC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIF1nN9leYfxfskDfHsNK8CnbtpXKtSNfk0%2B7z7NEdAVSAiB4AxGjfbms72reXeVqspzzRhpH8FwLHXD1UKTbX9b3jiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpNEkY%2FIHnLKUkKcKtwDe39C9O8KVE7hF0fBj6kUbdulCwqAxm5xiG1OcUQmH73Ba6CmHSmeTFeZ0Di5UM6YHChanrvfZ8onERYcOxmzC55w2zZK9Ap8EolJVfV61FIhatFaXlUalumr%2FkSb7GzeNHkn%2FWIDSmKw2wDoZWt9rNdYeeWy8Zqh1%2F2Rhx%2BDyh3hE0HHiJWU%2FJUJHKYRNqa2sDY7UUp0WtSz5srKLLVPd6l%2BeJ7qziL%2FcQuHJixjSP3vAjHfYx8xlDY63p1hlbQPzKLt7cmpm1HvbZ8%2Fu%2BtR1HszvBhHAuNWIVDMu0YOQixC8lYF534AgYKNUnqLrheB5rgFeVLzqI0SNtlxzW2hE5qkwXSvYlyhJkqPSx0jjA6OWPME8n%2B5WAxwEN2qpnEfG5yWl%2BmB4N5mNTG1ez2cNCXL3SKN6%2BUb5j3o8cr9UFF6dQ8Eh7tzQpiDPqgb%2FnYsmGmOhH0c3nSWUj%2BmlTW3VUeeZELjnHUbWI3OmASlRgVRewhQ8khWWdcqT%2BflC%2BxPoFWrALsNh2kx4P0EZXxzNXrMprNQfQWuAP4tEb1BiYq%2F3rtmWNkpy2rOhfZuVzHB53WKTKC9E4i0ykGLMfKlZ0bHfCelupehCpDQWLIffK0KYQygT%2B90x6MVXZUwl7rXwAY6pgFQ6usQu5fTQC8YCSKlPGROabnRFwnbkYQqMOrZPiVTe6l8MTMX3x7eZuuriBHrPWQ8nXaKr4M3fQQqrcTDF%2FskMg4HRk64FBUTlfZ5%2F7txE0V3dEgt6F0EvwsLd1b3QQLzp4mtThZMEAGgY3iyGFTl8nKVHbW51sscVrN07PrA6S2dF0VRmrYNWnhuTM2XOeehQ%2BGXeubBQimw0AFowEalJJ7T9U0R&X-Amz-Signature=504013ce4d3b583c0c60b3743312b68200ffe591ed4edb6c8515399e73f161c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRV6VSPC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIF1nN9leYfxfskDfHsNK8CnbtpXKtSNfk0%2B7z7NEdAVSAiB4AxGjfbms72reXeVqspzzRhpH8FwLHXD1UKTbX9b3jiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpNEkY%2FIHnLKUkKcKtwDe39C9O8KVE7hF0fBj6kUbdulCwqAxm5xiG1OcUQmH73Ba6CmHSmeTFeZ0Di5UM6YHChanrvfZ8onERYcOxmzC55w2zZK9Ap8EolJVfV61FIhatFaXlUalumr%2FkSb7GzeNHkn%2FWIDSmKw2wDoZWt9rNdYeeWy8Zqh1%2F2Rhx%2BDyh3hE0HHiJWU%2FJUJHKYRNqa2sDY7UUp0WtSz5srKLLVPd6l%2BeJ7qziL%2FcQuHJixjSP3vAjHfYx8xlDY63p1hlbQPzKLt7cmpm1HvbZ8%2Fu%2BtR1HszvBhHAuNWIVDMu0YOQixC8lYF534AgYKNUnqLrheB5rgFeVLzqI0SNtlxzW2hE5qkwXSvYlyhJkqPSx0jjA6OWPME8n%2B5WAxwEN2qpnEfG5yWl%2BmB4N5mNTG1ez2cNCXL3SKN6%2BUb5j3o8cr9UFF6dQ8Eh7tzQpiDPqgb%2FnYsmGmOhH0c3nSWUj%2BmlTW3VUeeZELjnHUbWI3OmASlRgVRewhQ8khWWdcqT%2BflC%2BxPoFWrALsNh2kx4P0EZXxzNXrMprNQfQWuAP4tEb1BiYq%2F3rtmWNkpy2rOhfZuVzHB53WKTKC9E4i0ykGLMfKlZ0bHfCelupehCpDQWLIffK0KYQygT%2B90x6MVXZUwl7rXwAY6pgFQ6usQu5fTQC8YCSKlPGROabnRFwnbkYQqMOrZPiVTe6l8MTMX3x7eZuuriBHrPWQ8nXaKr4M3fQQqrcTDF%2FskMg4HRk64FBUTlfZ5%2F7txE0V3dEgt6F0EvwsLd1b3QQLzp4mtThZMEAGgY3iyGFTl8nKVHbW51sscVrN07PrA6S2dF0VRmrYNWnhuTM2XOeehQ%2BGXeubBQimw0AFowEalJJ7T9U0R&X-Amz-Signature=532ce11d6715748a4e01662c2076d3af60bc98a86ec5bec81e32857b1a753b95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRV6VSPC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIF1nN9leYfxfskDfHsNK8CnbtpXKtSNfk0%2B7z7NEdAVSAiB4AxGjfbms72reXeVqspzzRhpH8FwLHXD1UKTbX9b3jiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpNEkY%2FIHnLKUkKcKtwDe39C9O8KVE7hF0fBj6kUbdulCwqAxm5xiG1OcUQmH73Ba6CmHSmeTFeZ0Di5UM6YHChanrvfZ8onERYcOxmzC55w2zZK9Ap8EolJVfV61FIhatFaXlUalumr%2FkSb7GzeNHkn%2FWIDSmKw2wDoZWt9rNdYeeWy8Zqh1%2F2Rhx%2BDyh3hE0HHiJWU%2FJUJHKYRNqa2sDY7UUp0WtSz5srKLLVPd6l%2BeJ7qziL%2FcQuHJixjSP3vAjHfYx8xlDY63p1hlbQPzKLt7cmpm1HvbZ8%2Fu%2BtR1HszvBhHAuNWIVDMu0YOQixC8lYF534AgYKNUnqLrheB5rgFeVLzqI0SNtlxzW2hE5qkwXSvYlyhJkqPSx0jjA6OWPME8n%2B5WAxwEN2qpnEfG5yWl%2BmB4N5mNTG1ez2cNCXL3SKN6%2BUb5j3o8cr9UFF6dQ8Eh7tzQpiDPqgb%2FnYsmGmOhH0c3nSWUj%2BmlTW3VUeeZELjnHUbWI3OmASlRgVRewhQ8khWWdcqT%2BflC%2BxPoFWrALsNh2kx4P0EZXxzNXrMprNQfQWuAP4tEb1BiYq%2F3rtmWNkpy2rOhfZuVzHB53WKTKC9E4i0ykGLMfKlZ0bHfCelupehCpDQWLIffK0KYQygT%2B90x6MVXZUwl7rXwAY6pgFQ6usQu5fTQC8YCSKlPGROabnRFwnbkYQqMOrZPiVTe6l8MTMX3x7eZuuriBHrPWQ8nXaKr4M3fQQqrcTDF%2FskMg4HRk64FBUTlfZ5%2F7txE0V3dEgt6F0EvwsLd1b3QQLzp4mtThZMEAGgY3iyGFTl8nKVHbW51sscVrN07PrA6S2dF0VRmrYNWnhuTM2XOeehQ%2BGXeubBQimw0AFowEalJJ7T9U0R&X-Amz-Signature=946f6e23487d5b13e09c80a7ecb025c350f9ea7bed0ece040385e4d3ddc423db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRV6VSPC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIF1nN9leYfxfskDfHsNK8CnbtpXKtSNfk0%2B7z7NEdAVSAiB4AxGjfbms72reXeVqspzzRhpH8FwLHXD1UKTbX9b3jiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpNEkY%2FIHnLKUkKcKtwDe39C9O8KVE7hF0fBj6kUbdulCwqAxm5xiG1OcUQmH73Ba6CmHSmeTFeZ0Di5UM6YHChanrvfZ8onERYcOxmzC55w2zZK9Ap8EolJVfV61FIhatFaXlUalumr%2FkSb7GzeNHkn%2FWIDSmKw2wDoZWt9rNdYeeWy8Zqh1%2F2Rhx%2BDyh3hE0HHiJWU%2FJUJHKYRNqa2sDY7UUp0WtSz5srKLLVPd6l%2BeJ7qziL%2FcQuHJixjSP3vAjHfYx8xlDY63p1hlbQPzKLt7cmpm1HvbZ8%2Fu%2BtR1HszvBhHAuNWIVDMu0YOQixC8lYF534AgYKNUnqLrheB5rgFeVLzqI0SNtlxzW2hE5qkwXSvYlyhJkqPSx0jjA6OWPME8n%2B5WAxwEN2qpnEfG5yWl%2BmB4N5mNTG1ez2cNCXL3SKN6%2BUb5j3o8cr9UFF6dQ8Eh7tzQpiDPqgb%2FnYsmGmOhH0c3nSWUj%2BmlTW3VUeeZELjnHUbWI3OmASlRgVRewhQ8khWWdcqT%2BflC%2BxPoFWrALsNh2kx4P0EZXxzNXrMprNQfQWuAP4tEb1BiYq%2F3rtmWNkpy2rOhfZuVzHB53WKTKC9E4i0ykGLMfKlZ0bHfCelupehCpDQWLIffK0KYQygT%2B90x6MVXZUwl7rXwAY6pgFQ6usQu5fTQC8YCSKlPGROabnRFwnbkYQqMOrZPiVTe6l8MTMX3x7eZuuriBHrPWQ8nXaKr4M3fQQqrcTDF%2FskMg4HRk64FBUTlfZ5%2F7txE0V3dEgt6F0EvwsLd1b3QQLzp4mtThZMEAGgY3iyGFTl8nKVHbW51sscVrN07PrA6S2dF0VRmrYNWnhuTM2XOeehQ%2BGXeubBQimw0AFowEalJJ7T9U0R&X-Amz-Signature=aeb397a8da3d9f20d5c9a09d268d6aeb7ed95afa7f826d695043742f50a129ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRV6VSPC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIF1nN9leYfxfskDfHsNK8CnbtpXKtSNfk0%2B7z7NEdAVSAiB4AxGjfbms72reXeVqspzzRhpH8FwLHXD1UKTbX9b3jiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcpNEkY%2FIHnLKUkKcKtwDe39C9O8KVE7hF0fBj6kUbdulCwqAxm5xiG1OcUQmH73Ba6CmHSmeTFeZ0Di5UM6YHChanrvfZ8onERYcOxmzC55w2zZK9Ap8EolJVfV61FIhatFaXlUalumr%2FkSb7GzeNHkn%2FWIDSmKw2wDoZWt9rNdYeeWy8Zqh1%2F2Rhx%2BDyh3hE0HHiJWU%2FJUJHKYRNqa2sDY7UUp0WtSz5srKLLVPd6l%2BeJ7qziL%2FcQuHJixjSP3vAjHfYx8xlDY63p1hlbQPzKLt7cmpm1HvbZ8%2Fu%2BtR1HszvBhHAuNWIVDMu0YOQixC8lYF534AgYKNUnqLrheB5rgFeVLzqI0SNtlxzW2hE5qkwXSvYlyhJkqPSx0jjA6OWPME8n%2B5WAxwEN2qpnEfG5yWl%2BmB4N5mNTG1ez2cNCXL3SKN6%2BUb5j3o8cr9UFF6dQ8Eh7tzQpiDPqgb%2FnYsmGmOhH0c3nSWUj%2BmlTW3VUeeZELjnHUbWI3OmASlRgVRewhQ8khWWdcqT%2BflC%2BxPoFWrALsNh2kx4P0EZXxzNXrMprNQfQWuAP4tEb1BiYq%2F3rtmWNkpy2rOhfZuVzHB53WKTKC9E4i0ykGLMfKlZ0bHfCelupehCpDQWLIffK0KYQygT%2B90x6MVXZUwl7rXwAY6pgFQ6usQu5fTQC8YCSKlPGROabnRFwnbkYQqMOrZPiVTe6l8MTMX3x7eZuuriBHrPWQ8nXaKr4M3fQQqrcTDF%2FskMg4HRk64FBUTlfZ5%2F7txE0V3dEgt6F0EvwsLd1b3QQLzp4mtThZMEAGgY3iyGFTl8nKVHbW51sscVrN07PrA6S2dF0VRmrYNWnhuTM2XOeehQ%2BGXeubBQimw0AFowEalJJ7T9U0R&X-Amz-Signature=b3e9bd22a0c534e8f809b2051bef89d81f2d96d79e4b21585dc0855f6ba5cd02&X-Amz-SignedHeaders=host&x-id=GetObject)
