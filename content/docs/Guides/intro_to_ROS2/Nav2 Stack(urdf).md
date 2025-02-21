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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDWJYMV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLjHCuemFPfRcqk4mJFYk0%2BQthG9Vw2IYjM%2BpCAz%2BUSAiAMPrIl%2FUD6ostX%2FOfckNhOu73dSHfJAfwHtOu%2Bo%2Fg5OyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATPp8T0H2frYVTxEKtwDCfVToVP38TIRQQt2IyjZvaD3GeE%2BAaEDffUnyZz%2BYZaPL7RBInvsLO1FVWDbXOUuI1NxfD63XxZBAoPjzMH9yUREZ87rIkW09Nx35COjPaJrlnIh8KzskE8o4DocOWJpM2Im2FBIhPdegna8F9Ozwo%2F6b6kLREFqg5HQ9ZdXGHoVlqj8w6Ug6HBmNxAM1nWrtLK34RtGfss33n0YQNYO23B7B179d0RmddYY9LU0Dxhk%2FSpwNHag5BCq5kLLlo5n9E98qQUMuXtgt4JyNi8GwXfKnwKQfqk%2FDldEmLCrHrTq3%2BLShYp27i6Oo54obBlORyDzdzL3dPnwjvTtxHuJg%2BentQk04nEIYU4143NPeqzEqYTWN9PasowyScZ8lX7DGXx3GP8u3PVWv7Dp%2FFYdx%2FunpwZWjcSxdNKGKUuzYKf3OeXxCmkMBPqWWvwr21C09nUEeum5DSXouDIhonF%2BXIsod2J7xqDNXqZvreFJLstBeUk6X9uOWbNAxUqjp8yYeom3ME2iO15oaA1VrhaErB891143N9Xt4G4VhW3LDBm5zzqZgTHgnyeaL7UVuWjmeRPC9O149tOvzvvGhu69V1LPWQrdjBcQagutscOiPz793N6LJPg8SCRKmpwwt4bgvQY6pgHmRFRs1RIwBBCKPWk4UQw7mVgXDfTv5pPA9a5pXlz4TdOgDs1iLp5hh8E8QUhoFA5rLd4cej8yPrm2w%2FN71%2F7%2F4sicQuuvtM8SAmuz9wYE7EF06NriuSSkCudsYogbMZABk8DqAeklX7qEkjlIGoMqBWnWDH1g3k8yoRY4QTK3qi3VoeukM%2ByoSDTOh29b7k9ZzJ13lXI58A26aYoXW7PzzQhdnqWN&X-Amz-Signature=641a894242be8fcedb80d197ae32bb17c0f114ee40d96ddd044423589432ab8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDWJYMV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLjHCuemFPfRcqk4mJFYk0%2BQthG9Vw2IYjM%2BpCAz%2BUSAiAMPrIl%2FUD6ostX%2FOfckNhOu73dSHfJAfwHtOu%2Bo%2Fg5OyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATPp8T0H2frYVTxEKtwDCfVToVP38TIRQQt2IyjZvaD3GeE%2BAaEDffUnyZz%2BYZaPL7RBInvsLO1FVWDbXOUuI1NxfD63XxZBAoPjzMH9yUREZ87rIkW09Nx35COjPaJrlnIh8KzskE8o4DocOWJpM2Im2FBIhPdegna8F9Ozwo%2F6b6kLREFqg5HQ9ZdXGHoVlqj8w6Ug6HBmNxAM1nWrtLK34RtGfss33n0YQNYO23B7B179d0RmddYY9LU0Dxhk%2FSpwNHag5BCq5kLLlo5n9E98qQUMuXtgt4JyNi8GwXfKnwKQfqk%2FDldEmLCrHrTq3%2BLShYp27i6Oo54obBlORyDzdzL3dPnwjvTtxHuJg%2BentQk04nEIYU4143NPeqzEqYTWN9PasowyScZ8lX7DGXx3GP8u3PVWv7Dp%2FFYdx%2FunpwZWjcSxdNKGKUuzYKf3OeXxCmkMBPqWWvwr21C09nUEeum5DSXouDIhonF%2BXIsod2J7xqDNXqZvreFJLstBeUk6X9uOWbNAxUqjp8yYeom3ME2iO15oaA1VrhaErB891143N9Xt4G4VhW3LDBm5zzqZgTHgnyeaL7UVuWjmeRPC9O149tOvzvvGhu69V1LPWQrdjBcQagutscOiPz793N6LJPg8SCRKmpwwt4bgvQY6pgHmRFRs1RIwBBCKPWk4UQw7mVgXDfTv5pPA9a5pXlz4TdOgDs1iLp5hh8E8QUhoFA5rLd4cej8yPrm2w%2FN71%2F7%2F4sicQuuvtM8SAmuz9wYE7EF06NriuSSkCudsYogbMZABk8DqAeklX7qEkjlIGoMqBWnWDH1g3k8yoRY4QTK3qi3VoeukM%2ByoSDTOh29b7k9ZzJ13lXI58A26aYoXW7PzzQhdnqWN&X-Amz-Signature=610ac6336b889cf490ea932874b35390e6d4e30e5c56fde050b770a5a1449f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDWJYMV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLjHCuemFPfRcqk4mJFYk0%2BQthG9Vw2IYjM%2BpCAz%2BUSAiAMPrIl%2FUD6ostX%2FOfckNhOu73dSHfJAfwHtOu%2Bo%2Fg5OyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATPp8T0H2frYVTxEKtwDCfVToVP38TIRQQt2IyjZvaD3GeE%2BAaEDffUnyZz%2BYZaPL7RBInvsLO1FVWDbXOUuI1NxfD63XxZBAoPjzMH9yUREZ87rIkW09Nx35COjPaJrlnIh8KzskE8o4DocOWJpM2Im2FBIhPdegna8F9Ozwo%2F6b6kLREFqg5HQ9ZdXGHoVlqj8w6Ug6HBmNxAM1nWrtLK34RtGfss33n0YQNYO23B7B179d0RmddYY9LU0Dxhk%2FSpwNHag5BCq5kLLlo5n9E98qQUMuXtgt4JyNi8GwXfKnwKQfqk%2FDldEmLCrHrTq3%2BLShYp27i6Oo54obBlORyDzdzL3dPnwjvTtxHuJg%2BentQk04nEIYU4143NPeqzEqYTWN9PasowyScZ8lX7DGXx3GP8u3PVWv7Dp%2FFYdx%2FunpwZWjcSxdNKGKUuzYKf3OeXxCmkMBPqWWvwr21C09nUEeum5DSXouDIhonF%2BXIsod2J7xqDNXqZvreFJLstBeUk6X9uOWbNAxUqjp8yYeom3ME2iO15oaA1VrhaErB891143N9Xt4G4VhW3LDBm5zzqZgTHgnyeaL7UVuWjmeRPC9O149tOvzvvGhu69V1LPWQrdjBcQagutscOiPz793N6LJPg8SCRKmpwwt4bgvQY6pgHmRFRs1RIwBBCKPWk4UQw7mVgXDfTv5pPA9a5pXlz4TdOgDs1iLp5hh8E8QUhoFA5rLd4cej8yPrm2w%2FN71%2F7%2F4sicQuuvtM8SAmuz9wYE7EF06NriuSSkCudsYogbMZABk8DqAeklX7qEkjlIGoMqBWnWDH1g3k8yoRY4QTK3qi3VoeukM%2ByoSDTOh29b7k9ZzJ13lXI58A26aYoXW7PzzQhdnqWN&X-Amz-Signature=b78d3221842586a02aafbd0ee364349576d2e219195ef610e1c57fcf740f19ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDWJYMV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLjHCuemFPfRcqk4mJFYk0%2BQthG9Vw2IYjM%2BpCAz%2BUSAiAMPrIl%2FUD6ostX%2FOfckNhOu73dSHfJAfwHtOu%2Bo%2Fg5OyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATPp8T0H2frYVTxEKtwDCfVToVP38TIRQQt2IyjZvaD3GeE%2BAaEDffUnyZz%2BYZaPL7RBInvsLO1FVWDbXOUuI1NxfD63XxZBAoPjzMH9yUREZ87rIkW09Nx35COjPaJrlnIh8KzskE8o4DocOWJpM2Im2FBIhPdegna8F9Ozwo%2F6b6kLREFqg5HQ9ZdXGHoVlqj8w6Ug6HBmNxAM1nWrtLK34RtGfss33n0YQNYO23B7B179d0RmddYY9LU0Dxhk%2FSpwNHag5BCq5kLLlo5n9E98qQUMuXtgt4JyNi8GwXfKnwKQfqk%2FDldEmLCrHrTq3%2BLShYp27i6Oo54obBlORyDzdzL3dPnwjvTtxHuJg%2BentQk04nEIYU4143NPeqzEqYTWN9PasowyScZ8lX7DGXx3GP8u3PVWv7Dp%2FFYdx%2FunpwZWjcSxdNKGKUuzYKf3OeXxCmkMBPqWWvwr21C09nUEeum5DSXouDIhonF%2BXIsod2J7xqDNXqZvreFJLstBeUk6X9uOWbNAxUqjp8yYeom3ME2iO15oaA1VrhaErB891143N9Xt4G4VhW3LDBm5zzqZgTHgnyeaL7UVuWjmeRPC9O149tOvzvvGhu69V1LPWQrdjBcQagutscOiPz793N6LJPg8SCRKmpwwt4bgvQY6pgHmRFRs1RIwBBCKPWk4UQw7mVgXDfTv5pPA9a5pXlz4TdOgDs1iLp5hh8E8QUhoFA5rLd4cej8yPrm2w%2FN71%2F7%2F4sicQuuvtM8SAmuz9wYE7EF06NriuSSkCudsYogbMZABk8DqAeklX7qEkjlIGoMqBWnWDH1g3k8yoRY4QTK3qi3VoeukM%2ByoSDTOh29b7k9ZzJ13lXI58A26aYoXW7PzzQhdnqWN&X-Amz-Signature=78015c805278d74eefc66c3274dad4d05ffa32101bac016d239ba8e95fec8a30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDWJYMV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLjHCuemFPfRcqk4mJFYk0%2BQthG9Vw2IYjM%2BpCAz%2BUSAiAMPrIl%2FUD6ostX%2FOfckNhOu73dSHfJAfwHtOu%2Bo%2Fg5OyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATPp8T0H2frYVTxEKtwDCfVToVP38TIRQQt2IyjZvaD3GeE%2BAaEDffUnyZz%2BYZaPL7RBInvsLO1FVWDbXOUuI1NxfD63XxZBAoPjzMH9yUREZ87rIkW09Nx35COjPaJrlnIh8KzskE8o4DocOWJpM2Im2FBIhPdegna8F9Ozwo%2F6b6kLREFqg5HQ9ZdXGHoVlqj8w6Ug6HBmNxAM1nWrtLK34RtGfss33n0YQNYO23B7B179d0RmddYY9LU0Dxhk%2FSpwNHag5BCq5kLLlo5n9E98qQUMuXtgt4JyNi8GwXfKnwKQfqk%2FDldEmLCrHrTq3%2BLShYp27i6Oo54obBlORyDzdzL3dPnwjvTtxHuJg%2BentQk04nEIYU4143NPeqzEqYTWN9PasowyScZ8lX7DGXx3GP8u3PVWv7Dp%2FFYdx%2FunpwZWjcSxdNKGKUuzYKf3OeXxCmkMBPqWWvwr21C09nUEeum5DSXouDIhonF%2BXIsod2J7xqDNXqZvreFJLstBeUk6X9uOWbNAxUqjp8yYeom3ME2iO15oaA1VrhaErB891143N9Xt4G4VhW3LDBm5zzqZgTHgnyeaL7UVuWjmeRPC9O149tOvzvvGhu69V1LPWQrdjBcQagutscOiPz793N6LJPg8SCRKmpwwt4bgvQY6pgHmRFRs1RIwBBCKPWk4UQw7mVgXDfTv5pPA9a5pXlz4TdOgDs1iLp5hh8E8QUhoFA5rLd4cej8yPrm2w%2FN71%2F7%2F4sicQuuvtM8SAmuz9wYE7EF06NriuSSkCudsYogbMZABk8DqAeklX7qEkjlIGoMqBWnWDH1g3k8yoRY4QTK3qi3VoeukM%2ByoSDTOh29b7k9ZzJ13lXI58A26aYoXW7PzzQhdnqWN&X-Amz-Signature=d5eaae3affcc4dbb7a5e3e8ff44980434873fce93e44c1270f09fa3e19863eca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDWJYMV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLjHCuemFPfRcqk4mJFYk0%2BQthG9Vw2IYjM%2BpCAz%2BUSAiAMPrIl%2FUD6ostX%2FOfckNhOu73dSHfJAfwHtOu%2Bo%2Fg5OyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMATPp8T0H2frYVTxEKtwDCfVToVP38TIRQQt2IyjZvaD3GeE%2BAaEDffUnyZz%2BYZaPL7RBInvsLO1FVWDbXOUuI1NxfD63XxZBAoPjzMH9yUREZ87rIkW09Nx35COjPaJrlnIh8KzskE8o4DocOWJpM2Im2FBIhPdegna8F9Ozwo%2F6b6kLREFqg5HQ9ZdXGHoVlqj8w6Ug6HBmNxAM1nWrtLK34RtGfss33n0YQNYO23B7B179d0RmddYY9LU0Dxhk%2FSpwNHag5BCq5kLLlo5n9E98qQUMuXtgt4JyNi8GwXfKnwKQfqk%2FDldEmLCrHrTq3%2BLShYp27i6Oo54obBlORyDzdzL3dPnwjvTtxHuJg%2BentQk04nEIYU4143NPeqzEqYTWN9PasowyScZ8lX7DGXx3GP8u3PVWv7Dp%2FFYdx%2FunpwZWjcSxdNKGKUuzYKf3OeXxCmkMBPqWWvwr21C09nUEeum5DSXouDIhonF%2BXIsod2J7xqDNXqZvreFJLstBeUk6X9uOWbNAxUqjp8yYeom3ME2iO15oaA1VrhaErB891143N9Xt4G4VhW3LDBm5zzqZgTHgnyeaL7UVuWjmeRPC9O149tOvzvvGhu69V1LPWQrdjBcQagutscOiPz793N6LJPg8SCRKmpwwt4bgvQY6pgHmRFRs1RIwBBCKPWk4UQw7mVgXDfTv5pPA9a5pXlz4TdOgDs1iLp5hh8E8QUhoFA5rLd4cej8yPrm2w%2FN71%2F7%2F4sicQuuvtM8SAmuz9wYE7EF06NriuSSkCudsYogbMZABk8DqAeklX7qEkjlIGoMqBWnWDH1g3k8yoRY4QTK3qi3VoeukM%2ByoSDTOh29b7k9ZzJ13lXI58A26aYoXW7PzzQhdnqWN&X-Amz-Signature=ff0f528e7c3ac020e3065e8008b9992f5d2aa495985858e8db7f22d19b00c5d3&X-Amz-SignedHeaders=host&x-id=GetObject)
