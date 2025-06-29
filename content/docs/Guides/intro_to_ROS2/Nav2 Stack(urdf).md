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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4R7WO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOjBBzCs0WCmsKxv3VOWUFK7duCbDqHv1Kbd1RstmMWAIhAI8wWx58lEQ9151pbVuiwELOCmG%2Fx%2BVCvX0bZSExVIjlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lMwy58Xix%2FQjsXoq3AM5uNgdVFnnW4ogiG%2F0qYQbepGR43c6TH75R2D1sZfPthZSR310fe1x6RTk3SWTwxYWUgEibVCfU4BSxo%2BUytxTw3gFcjDHXZVfK8yZFdXF8MTThoE999GfQwh3skV%2BXsYbM%2B65gIFfuTzyKTFPM2uYWJa7%2B6BinBeA6n4kdfT7WY%2BdPdwhsq6m7jYOct4p61WpJbT7yVXeRr%2FPB3uYVtG7AAJcqi1eDmwcocDHDSK6zmhUHSSsF0onKOLoim8eLi4LW5m7PsC7mveQt3VPqbI60NWUCKZNEDks%2BiRKv08uLVt6Rpn8giUyNCCfxKYbCVQeQ5h7bdsDyEvzzmNl8GGXRyJmQ%2BsO9HwRQ4d2muJS%2BQr3DAmaFoAJTnZ2DAoCSdxKCg7ljrUhAJUdZBIKg8E12YaoPSnYymRjlT7LIpCyvC1wlcM4WFrmWs0%2FoCZX5cBaPPar%2FE72VCgY5ygp%2FCiSvjm7tOFn4lSL2qD3SxaU1FJqY06JHL7lqiOnP1MAbiOuMl4On9nU1%2BEi%2BRqjwuQHOKR4VYqFi9cbcYDHXvKTCnlYPWprrAuLVq5B3R9qz33GVN5HybKARU0e%2FLNVVOLos9A7q4j%2FsxmfM7VVmEYHzJCWownrqmycSjsZuTCMvITDBjqkAeHWgJLJ1k5krqZmkCSthPSiDU28wbGA767oUJxHuUT6Vk7uCS45Se1PEY5FJzjBRJiUIsSCpuZw%2BxpuyeXOsI9nWK4xPocvl66g%2BySfYWGh%2Fy6PGYW3Lr%2BBMcEGuAqUvlyp4lQPNy%2FwEdCMu2IF1S4r21E6ydRCl1AhoAvTRRoNvSehg2xYnaJRk7p%2FzpNhGZX9eg86Wi00MZn%2B%2BFKjtdgPo4gr&X-Amz-Signature=eb3db9d5fe874ae64bf66d4b9d612c300660a3411d7a362078e481f6c5141286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4R7WO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOjBBzCs0WCmsKxv3VOWUFK7duCbDqHv1Kbd1RstmMWAIhAI8wWx58lEQ9151pbVuiwELOCmG%2Fx%2BVCvX0bZSExVIjlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lMwy58Xix%2FQjsXoq3AM5uNgdVFnnW4ogiG%2F0qYQbepGR43c6TH75R2D1sZfPthZSR310fe1x6RTk3SWTwxYWUgEibVCfU4BSxo%2BUytxTw3gFcjDHXZVfK8yZFdXF8MTThoE999GfQwh3skV%2BXsYbM%2B65gIFfuTzyKTFPM2uYWJa7%2B6BinBeA6n4kdfT7WY%2BdPdwhsq6m7jYOct4p61WpJbT7yVXeRr%2FPB3uYVtG7AAJcqi1eDmwcocDHDSK6zmhUHSSsF0onKOLoim8eLi4LW5m7PsC7mveQt3VPqbI60NWUCKZNEDks%2BiRKv08uLVt6Rpn8giUyNCCfxKYbCVQeQ5h7bdsDyEvzzmNl8GGXRyJmQ%2BsO9HwRQ4d2muJS%2BQr3DAmaFoAJTnZ2DAoCSdxKCg7ljrUhAJUdZBIKg8E12YaoPSnYymRjlT7LIpCyvC1wlcM4WFrmWs0%2FoCZX5cBaPPar%2FE72VCgY5ygp%2FCiSvjm7tOFn4lSL2qD3SxaU1FJqY06JHL7lqiOnP1MAbiOuMl4On9nU1%2BEi%2BRqjwuQHOKR4VYqFi9cbcYDHXvKTCnlYPWprrAuLVq5B3R9qz33GVN5HybKARU0e%2FLNVVOLos9A7q4j%2FsxmfM7VVmEYHzJCWownrqmycSjsZuTCMvITDBjqkAeHWgJLJ1k5krqZmkCSthPSiDU28wbGA767oUJxHuUT6Vk7uCS45Se1PEY5FJzjBRJiUIsSCpuZw%2BxpuyeXOsI9nWK4xPocvl66g%2BySfYWGh%2Fy6PGYW3Lr%2BBMcEGuAqUvlyp4lQPNy%2FwEdCMu2IF1S4r21E6ydRCl1AhoAvTRRoNvSehg2xYnaJRk7p%2FzpNhGZX9eg86Wi00MZn%2B%2BFKjtdgPo4gr&X-Amz-Signature=b2ace655e9cb4defea1171a2194017b0651e5f5a4355cd1d63aa16fa647704ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4R7WO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOjBBzCs0WCmsKxv3VOWUFK7duCbDqHv1Kbd1RstmMWAIhAI8wWx58lEQ9151pbVuiwELOCmG%2Fx%2BVCvX0bZSExVIjlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lMwy58Xix%2FQjsXoq3AM5uNgdVFnnW4ogiG%2F0qYQbepGR43c6TH75R2D1sZfPthZSR310fe1x6RTk3SWTwxYWUgEibVCfU4BSxo%2BUytxTw3gFcjDHXZVfK8yZFdXF8MTThoE999GfQwh3skV%2BXsYbM%2B65gIFfuTzyKTFPM2uYWJa7%2B6BinBeA6n4kdfT7WY%2BdPdwhsq6m7jYOct4p61WpJbT7yVXeRr%2FPB3uYVtG7AAJcqi1eDmwcocDHDSK6zmhUHSSsF0onKOLoim8eLi4LW5m7PsC7mveQt3VPqbI60NWUCKZNEDks%2BiRKv08uLVt6Rpn8giUyNCCfxKYbCVQeQ5h7bdsDyEvzzmNl8GGXRyJmQ%2BsO9HwRQ4d2muJS%2BQr3DAmaFoAJTnZ2DAoCSdxKCg7ljrUhAJUdZBIKg8E12YaoPSnYymRjlT7LIpCyvC1wlcM4WFrmWs0%2FoCZX5cBaPPar%2FE72VCgY5ygp%2FCiSvjm7tOFn4lSL2qD3SxaU1FJqY06JHL7lqiOnP1MAbiOuMl4On9nU1%2BEi%2BRqjwuQHOKR4VYqFi9cbcYDHXvKTCnlYPWprrAuLVq5B3R9qz33GVN5HybKARU0e%2FLNVVOLos9A7q4j%2FsxmfM7VVmEYHzJCWownrqmycSjsZuTCMvITDBjqkAeHWgJLJ1k5krqZmkCSthPSiDU28wbGA767oUJxHuUT6Vk7uCS45Se1PEY5FJzjBRJiUIsSCpuZw%2BxpuyeXOsI9nWK4xPocvl66g%2BySfYWGh%2Fy6PGYW3Lr%2BBMcEGuAqUvlyp4lQPNy%2FwEdCMu2IF1S4r21E6ydRCl1AhoAvTRRoNvSehg2xYnaJRk7p%2FzpNhGZX9eg86Wi00MZn%2B%2BFKjtdgPo4gr&X-Amz-Signature=cb52ec8456acaef9c0442a9b10f275bc174e4bd3851b98c8a0188ad6921d4576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4R7WO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOjBBzCs0WCmsKxv3VOWUFK7duCbDqHv1Kbd1RstmMWAIhAI8wWx58lEQ9151pbVuiwELOCmG%2Fx%2BVCvX0bZSExVIjlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lMwy58Xix%2FQjsXoq3AM5uNgdVFnnW4ogiG%2F0qYQbepGR43c6TH75R2D1sZfPthZSR310fe1x6RTk3SWTwxYWUgEibVCfU4BSxo%2BUytxTw3gFcjDHXZVfK8yZFdXF8MTThoE999GfQwh3skV%2BXsYbM%2B65gIFfuTzyKTFPM2uYWJa7%2B6BinBeA6n4kdfT7WY%2BdPdwhsq6m7jYOct4p61WpJbT7yVXeRr%2FPB3uYVtG7AAJcqi1eDmwcocDHDSK6zmhUHSSsF0onKOLoim8eLi4LW5m7PsC7mveQt3VPqbI60NWUCKZNEDks%2BiRKv08uLVt6Rpn8giUyNCCfxKYbCVQeQ5h7bdsDyEvzzmNl8GGXRyJmQ%2BsO9HwRQ4d2muJS%2BQr3DAmaFoAJTnZ2DAoCSdxKCg7ljrUhAJUdZBIKg8E12YaoPSnYymRjlT7LIpCyvC1wlcM4WFrmWs0%2FoCZX5cBaPPar%2FE72VCgY5ygp%2FCiSvjm7tOFn4lSL2qD3SxaU1FJqY06JHL7lqiOnP1MAbiOuMl4On9nU1%2BEi%2BRqjwuQHOKR4VYqFi9cbcYDHXvKTCnlYPWprrAuLVq5B3R9qz33GVN5HybKARU0e%2FLNVVOLos9A7q4j%2FsxmfM7VVmEYHzJCWownrqmycSjsZuTCMvITDBjqkAeHWgJLJ1k5krqZmkCSthPSiDU28wbGA767oUJxHuUT6Vk7uCS45Se1PEY5FJzjBRJiUIsSCpuZw%2BxpuyeXOsI9nWK4xPocvl66g%2BySfYWGh%2Fy6PGYW3Lr%2BBMcEGuAqUvlyp4lQPNy%2FwEdCMu2IF1S4r21E6ydRCl1AhoAvTRRoNvSehg2xYnaJRk7p%2FzpNhGZX9eg86Wi00MZn%2B%2BFKjtdgPo4gr&X-Amz-Signature=e21ac2d6871d0bf6bab25d6f08c1da1d1f79ac93c459844bf84d1eca3044ce4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4R7WO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOjBBzCs0WCmsKxv3VOWUFK7duCbDqHv1Kbd1RstmMWAIhAI8wWx58lEQ9151pbVuiwELOCmG%2Fx%2BVCvX0bZSExVIjlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lMwy58Xix%2FQjsXoq3AM5uNgdVFnnW4ogiG%2F0qYQbepGR43c6TH75R2D1sZfPthZSR310fe1x6RTk3SWTwxYWUgEibVCfU4BSxo%2BUytxTw3gFcjDHXZVfK8yZFdXF8MTThoE999GfQwh3skV%2BXsYbM%2B65gIFfuTzyKTFPM2uYWJa7%2B6BinBeA6n4kdfT7WY%2BdPdwhsq6m7jYOct4p61WpJbT7yVXeRr%2FPB3uYVtG7AAJcqi1eDmwcocDHDSK6zmhUHSSsF0onKOLoim8eLi4LW5m7PsC7mveQt3VPqbI60NWUCKZNEDks%2BiRKv08uLVt6Rpn8giUyNCCfxKYbCVQeQ5h7bdsDyEvzzmNl8GGXRyJmQ%2BsO9HwRQ4d2muJS%2BQr3DAmaFoAJTnZ2DAoCSdxKCg7ljrUhAJUdZBIKg8E12YaoPSnYymRjlT7LIpCyvC1wlcM4WFrmWs0%2FoCZX5cBaPPar%2FE72VCgY5ygp%2FCiSvjm7tOFn4lSL2qD3SxaU1FJqY06JHL7lqiOnP1MAbiOuMl4On9nU1%2BEi%2BRqjwuQHOKR4VYqFi9cbcYDHXvKTCnlYPWprrAuLVq5B3R9qz33GVN5HybKARU0e%2FLNVVOLos9A7q4j%2FsxmfM7VVmEYHzJCWownrqmycSjsZuTCMvITDBjqkAeHWgJLJ1k5krqZmkCSthPSiDU28wbGA767oUJxHuUT6Vk7uCS45Se1PEY5FJzjBRJiUIsSCpuZw%2BxpuyeXOsI9nWK4xPocvl66g%2BySfYWGh%2Fy6PGYW3Lr%2BBMcEGuAqUvlyp4lQPNy%2FwEdCMu2IF1S4r21E6ydRCl1AhoAvTRRoNvSehg2xYnaJRk7p%2FzpNhGZX9eg86Wi00MZn%2B%2BFKjtdgPo4gr&X-Amz-Signature=c43a6c8c866b4983da3c61cfac63ccaae8b493e71d2b48402164d66c06cf24a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QV4R7WO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOjBBzCs0WCmsKxv3VOWUFK7duCbDqHv1Kbd1RstmMWAIhAI8wWx58lEQ9151pbVuiwELOCmG%2Fx%2BVCvX0bZSExVIjlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lMwy58Xix%2FQjsXoq3AM5uNgdVFnnW4ogiG%2F0qYQbepGR43c6TH75R2D1sZfPthZSR310fe1x6RTk3SWTwxYWUgEibVCfU4BSxo%2BUytxTw3gFcjDHXZVfK8yZFdXF8MTThoE999GfQwh3skV%2BXsYbM%2B65gIFfuTzyKTFPM2uYWJa7%2B6BinBeA6n4kdfT7WY%2BdPdwhsq6m7jYOct4p61WpJbT7yVXeRr%2FPB3uYVtG7AAJcqi1eDmwcocDHDSK6zmhUHSSsF0onKOLoim8eLi4LW5m7PsC7mveQt3VPqbI60NWUCKZNEDks%2BiRKv08uLVt6Rpn8giUyNCCfxKYbCVQeQ5h7bdsDyEvzzmNl8GGXRyJmQ%2BsO9HwRQ4d2muJS%2BQr3DAmaFoAJTnZ2DAoCSdxKCg7ljrUhAJUdZBIKg8E12YaoPSnYymRjlT7LIpCyvC1wlcM4WFrmWs0%2FoCZX5cBaPPar%2FE72VCgY5ygp%2FCiSvjm7tOFn4lSL2qD3SxaU1FJqY06JHL7lqiOnP1MAbiOuMl4On9nU1%2BEi%2BRqjwuQHOKR4VYqFi9cbcYDHXvKTCnlYPWprrAuLVq5B3R9qz33GVN5HybKARU0e%2FLNVVOLos9A7q4j%2FsxmfM7VVmEYHzJCWownrqmycSjsZuTCMvITDBjqkAeHWgJLJ1k5krqZmkCSthPSiDU28wbGA767oUJxHuUT6Vk7uCS45Se1PEY5FJzjBRJiUIsSCpuZw%2BxpuyeXOsI9nWK4xPocvl66g%2BySfYWGh%2Fy6PGYW3Lr%2BBMcEGuAqUvlyp4lQPNy%2FwEdCMu2IF1S4r21E6ydRCl1AhoAvTRRoNvSehg2xYnaJRk7p%2FzpNhGZX9eg86Wi00MZn%2B%2BFKjtdgPo4gr&X-Amz-Signature=6c2d95a021e2ec95b587c0b534679a62f3d5953c71ff6211fb39f01d50bbef5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
