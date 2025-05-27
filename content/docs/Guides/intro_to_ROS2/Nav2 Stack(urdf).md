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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYLJBGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMqv1a1R0nv%2BWhYOI626%2FEUMrPhpYAo9fJE9oeZ1TDrAiBM6JhdxVaHNii7dC8Prxerk58AFmLTktXk9Eu2zoiufCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuCa1OomBIHKFYmgJKtwD1bbmVGjnza5xR36U9m%2FR6GYS0AepIVEjkDzVtIqMkJFOSPHOqHw3vU9BcBVqTag0udx%2FgKUSzIo3BWw22AAXlH83DJXvuFMocSOoTs0T2n2COfOG8XKmQafatTpV0Fasap3gfk4E8oEtgqtYp2NxjQLro0w%2FBdCouCnu6pUc7df%2B7j5I8poQFHGL6qxkRREkDavM9TxKbiJUEiDFkMcYIqCgtXnnhJ0pG0ysUZ%2BSOppKq2VTPqHbmg13wd%2FeazPTnRDd3foqLRGq7InhlgL%2Fc%2F4WwRLPllQQkvlz39Wx37qAdix5y5dG0G%2FcMb%2FQrwyTpLO0y9UYjfos3HX%2BTDq9jpvI%2BEHgeCm%2BNmBNSxZC%2BucGZAi6VuVzFZf23UiWDpIu9skWZxfPhbGyIN0KWf3sXMGLEAozOFDpCpExuFHtyeUczeN%2F94%2FFZobVs7giB6TGt2bn66Dz23SwrH%2BewWYB1Ra3h5lRVsHuYDd0OL5vACmlSSdCzGRfYlb6cFAYfkcFnDsHt%2FAqHBTq6hxuVIowzCfg52BkspLktdbR9aH9Rc3RfakUHBJe256Jnop7g6VovBUu%2FMawTOC1Z0%2B8EUUv%2FtjC8SFstO7KVfFczTs9b0DTXim%2Fw3HyIL6Za6Qw8pbUwQY6pgFhs%2BzKKqf6JXGLEpxKjm8g366WBJvJHlVTEb9hvnHKgaaxYlstvdkdWFrD34sy5HG3Df04ajAZDNHqLbXOC1EQbc2htjV9VFknMruR7GU99PsgCjn12XI1aqJKCFgnV2jFZfjjkcZQbWdXE6mDK2vsZZ0OB7EcKKPkwblVNYNzr%2Fc1enZBn3bFCawD9p43L%2Fdr%2F8%2FrM9ceJHxv7zbkpz13UHuxPKWt&X-Amz-Signature=8ee24e821c5d32bff6cbcbabc646ab4ab87ff2b61eadc206b795a04b6d93aa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYLJBGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMqv1a1R0nv%2BWhYOI626%2FEUMrPhpYAo9fJE9oeZ1TDrAiBM6JhdxVaHNii7dC8Prxerk58AFmLTktXk9Eu2zoiufCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuCa1OomBIHKFYmgJKtwD1bbmVGjnza5xR36U9m%2FR6GYS0AepIVEjkDzVtIqMkJFOSPHOqHw3vU9BcBVqTag0udx%2FgKUSzIo3BWw22AAXlH83DJXvuFMocSOoTs0T2n2COfOG8XKmQafatTpV0Fasap3gfk4E8oEtgqtYp2NxjQLro0w%2FBdCouCnu6pUc7df%2B7j5I8poQFHGL6qxkRREkDavM9TxKbiJUEiDFkMcYIqCgtXnnhJ0pG0ysUZ%2BSOppKq2VTPqHbmg13wd%2FeazPTnRDd3foqLRGq7InhlgL%2Fc%2F4WwRLPllQQkvlz39Wx37qAdix5y5dG0G%2FcMb%2FQrwyTpLO0y9UYjfos3HX%2BTDq9jpvI%2BEHgeCm%2BNmBNSxZC%2BucGZAi6VuVzFZf23UiWDpIu9skWZxfPhbGyIN0KWf3sXMGLEAozOFDpCpExuFHtyeUczeN%2F94%2FFZobVs7giB6TGt2bn66Dz23SwrH%2BewWYB1Ra3h5lRVsHuYDd0OL5vACmlSSdCzGRfYlb6cFAYfkcFnDsHt%2FAqHBTq6hxuVIowzCfg52BkspLktdbR9aH9Rc3RfakUHBJe256Jnop7g6VovBUu%2FMawTOC1Z0%2B8EUUv%2FtjC8SFstO7KVfFczTs9b0DTXim%2Fw3HyIL6Za6Qw8pbUwQY6pgFhs%2BzKKqf6JXGLEpxKjm8g366WBJvJHlVTEb9hvnHKgaaxYlstvdkdWFrD34sy5HG3Df04ajAZDNHqLbXOC1EQbc2htjV9VFknMruR7GU99PsgCjn12XI1aqJKCFgnV2jFZfjjkcZQbWdXE6mDK2vsZZ0OB7EcKKPkwblVNYNzr%2Fc1enZBn3bFCawD9p43L%2Fdr%2F8%2FrM9ceJHxv7zbkpz13UHuxPKWt&X-Amz-Signature=8e6f51c2bac99c70054e3e07a661d2457b2d7d3cc4706f5f046166a72d52e73b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYLJBGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMqv1a1R0nv%2BWhYOI626%2FEUMrPhpYAo9fJE9oeZ1TDrAiBM6JhdxVaHNii7dC8Prxerk58AFmLTktXk9Eu2zoiufCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuCa1OomBIHKFYmgJKtwD1bbmVGjnza5xR36U9m%2FR6GYS0AepIVEjkDzVtIqMkJFOSPHOqHw3vU9BcBVqTag0udx%2FgKUSzIo3BWw22AAXlH83DJXvuFMocSOoTs0T2n2COfOG8XKmQafatTpV0Fasap3gfk4E8oEtgqtYp2NxjQLro0w%2FBdCouCnu6pUc7df%2B7j5I8poQFHGL6qxkRREkDavM9TxKbiJUEiDFkMcYIqCgtXnnhJ0pG0ysUZ%2BSOppKq2VTPqHbmg13wd%2FeazPTnRDd3foqLRGq7InhlgL%2Fc%2F4WwRLPllQQkvlz39Wx37qAdix5y5dG0G%2FcMb%2FQrwyTpLO0y9UYjfos3HX%2BTDq9jpvI%2BEHgeCm%2BNmBNSxZC%2BucGZAi6VuVzFZf23UiWDpIu9skWZxfPhbGyIN0KWf3sXMGLEAozOFDpCpExuFHtyeUczeN%2F94%2FFZobVs7giB6TGt2bn66Dz23SwrH%2BewWYB1Ra3h5lRVsHuYDd0OL5vACmlSSdCzGRfYlb6cFAYfkcFnDsHt%2FAqHBTq6hxuVIowzCfg52BkspLktdbR9aH9Rc3RfakUHBJe256Jnop7g6VovBUu%2FMawTOC1Z0%2B8EUUv%2FtjC8SFstO7KVfFczTs9b0DTXim%2Fw3HyIL6Za6Qw8pbUwQY6pgFhs%2BzKKqf6JXGLEpxKjm8g366WBJvJHlVTEb9hvnHKgaaxYlstvdkdWFrD34sy5HG3Df04ajAZDNHqLbXOC1EQbc2htjV9VFknMruR7GU99PsgCjn12XI1aqJKCFgnV2jFZfjjkcZQbWdXE6mDK2vsZZ0OB7EcKKPkwblVNYNzr%2Fc1enZBn3bFCawD9p43L%2Fdr%2F8%2FrM9ceJHxv7zbkpz13UHuxPKWt&X-Amz-Signature=2d874b9b70c2924af51459c9f227bea777cf2a5f8404da0257cfb0d55c0ae703&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYLJBGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMqv1a1R0nv%2BWhYOI626%2FEUMrPhpYAo9fJE9oeZ1TDrAiBM6JhdxVaHNii7dC8Prxerk58AFmLTktXk9Eu2zoiufCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuCa1OomBIHKFYmgJKtwD1bbmVGjnza5xR36U9m%2FR6GYS0AepIVEjkDzVtIqMkJFOSPHOqHw3vU9BcBVqTag0udx%2FgKUSzIo3BWw22AAXlH83DJXvuFMocSOoTs0T2n2COfOG8XKmQafatTpV0Fasap3gfk4E8oEtgqtYp2NxjQLro0w%2FBdCouCnu6pUc7df%2B7j5I8poQFHGL6qxkRREkDavM9TxKbiJUEiDFkMcYIqCgtXnnhJ0pG0ysUZ%2BSOppKq2VTPqHbmg13wd%2FeazPTnRDd3foqLRGq7InhlgL%2Fc%2F4WwRLPllQQkvlz39Wx37qAdix5y5dG0G%2FcMb%2FQrwyTpLO0y9UYjfos3HX%2BTDq9jpvI%2BEHgeCm%2BNmBNSxZC%2BucGZAi6VuVzFZf23UiWDpIu9skWZxfPhbGyIN0KWf3sXMGLEAozOFDpCpExuFHtyeUczeN%2F94%2FFZobVs7giB6TGt2bn66Dz23SwrH%2BewWYB1Ra3h5lRVsHuYDd0OL5vACmlSSdCzGRfYlb6cFAYfkcFnDsHt%2FAqHBTq6hxuVIowzCfg52BkspLktdbR9aH9Rc3RfakUHBJe256Jnop7g6VovBUu%2FMawTOC1Z0%2B8EUUv%2FtjC8SFstO7KVfFczTs9b0DTXim%2Fw3HyIL6Za6Qw8pbUwQY6pgFhs%2BzKKqf6JXGLEpxKjm8g366WBJvJHlVTEb9hvnHKgaaxYlstvdkdWFrD34sy5HG3Df04ajAZDNHqLbXOC1EQbc2htjV9VFknMruR7GU99PsgCjn12XI1aqJKCFgnV2jFZfjjkcZQbWdXE6mDK2vsZZ0OB7EcKKPkwblVNYNzr%2Fc1enZBn3bFCawD9p43L%2Fdr%2F8%2FrM9ceJHxv7zbkpz13UHuxPKWt&X-Amz-Signature=1e3c4bdc1b1c9416da3e6365aead595cd560fa12d436db27b53198699c24ff41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYLJBGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMqv1a1R0nv%2BWhYOI626%2FEUMrPhpYAo9fJE9oeZ1TDrAiBM6JhdxVaHNii7dC8Prxerk58AFmLTktXk9Eu2zoiufCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuCa1OomBIHKFYmgJKtwD1bbmVGjnza5xR36U9m%2FR6GYS0AepIVEjkDzVtIqMkJFOSPHOqHw3vU9BcBVqTag0udx%2FgKUSzIo3BWw22AAXlH83DJXvuFMocSOoTs0T2n2COfOG8XKmQafatTpV0Fasap3gfk4E8oEtgqtYp2NxjQLro0w%2FBdCouCnu6pUc7df%2B7j5I8poQFHGL6qxkRREkDavM9TxKbiJUEiDFkMcYIqCgtXnnhJ0pG0ysUZ%2BSOppKq2VTPqHbmg13wd%2FeazPTnRDd3foqLRGq7InhlgL%2Fc%2F4WwRLPllQQkvlz39Wx37qAdix5y5dG0G%2FcMb%2FQrwyTpLO0y9UYjfos3HX%2BTDq9jpvI%2BEHgeCm%2BNmBNSxZC%2BucGZAi6VuVzFZf23UiWDpIu9skWZxfPhbGyIN0KWf3sXMGLEAozOFDpCpExuFHtyeUczeN%2F94%2FFZobVs7giB6TGt2bn66Dz23SwrH%2BewWYB1Ra3h5lRVsHuYDd0OL5vACmlSSdCzGRfYlb6cFAYfkcFnDsHt%2FAqHBTq6hxuVIowzCfg52BkspLktdbR9aH9Rc3RfakUHBJe256Jnop7g6VovBUu%2FMawTOC1Z0%2B8EUUv%2FtjC8SFstO7KVfFczTs9b0DTXim%2Fw3HyIL6Za6Qw8pbUwQY6pgFhs%2BzKKqf6JXGLEpxKjm8g366WBJvJHlVTEb9hvnHKgaaxYlstvdkdWFrD34sy5HG3Df04ajAZDNHqLbXOC1EQbc2htjV9VFknMruR7GU99PsgCjn12XI1aqJKCFgnV2jFZfjjkcZQbWdXE6mDK2vsZZ0OB7EcKKPkwblVNYNzr%2Fc1enZBn3bFCawD9p43L%2Fdr%2F8%2FrM9ceJHxv7zbkpz13UHuxPKWt&X-Amz-Signature=621aa12268734a89c35855e0ba132bbd4581e1a3f7e32ca73ab726d081d0c6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWYLJBGQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T033603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMqv1a1R0nv%2BWhYOI626%2FEUMrPhpYAo9fJE9oeZ1TDrAiBM6JhdxVaHNii7dC8Prxerk58AFmLTktXk9Eu2zoiufCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMuCa1OomBIHKFYmgJKtwD1bbmVGjnza5xR36U9m%2FR6GYS0AepIVEjkDzVtIqMkJFOSPHOqHw3vU9BcBVqTag0udx%2FgKUSzIo3BWw22AAXlH83DJXvuFMocSOoTs0T2n2COfOG8XKmQafatTpV0Fasap3gfk4E8oEtgqtYp2NxjQLro0w%2FBdCouCnu6pUc7df%2B7j5I8poQFHGL6qxkRREkDavM9TxKbiJUEiDFkMcYIqCgtXnnhJ0pG0ysUZ%2BSOppKq2VTPqHbmg13wd%2FeazPTnRDd3foqLRGq7InhlgL%2Fc%2F4WwRLPllQQkvlz39Wx37qAdix5y5dG0G%2FcMb%2FQrwyTpLO0y9UYjfos3HX%2BTDq9jpvI%2BEHgeCm%2BNmBNSxZC%2BucGZAi6VuVzFZf23UiWDpIu9skWZxfPhbGyIN0KWf3sXMGLEAozOFDpCpExuFHtyeUczeN%2F94%2FFZobVs7giB6TGt2bn66Dz23SwrH%2BewWYB1Ra3h5lRVsHuYDd0OL5vACmlSSdCzGRfYlb6cFAYfkcFnDsHt%2FAqHBTq6hxuVIowzCfg52BkspLktdbR9aH9Rc3RfakUHBJe256Jnop7g6VovBUu%2FMawTOC1Z0%2B8EUUv%2FtjC8SFstO7KVfFczTs9b0DTXim%2Fw3HyIL6Za6Qw8pbUwQY6pgFhs%2BzKKqf6JXGLEpxKjm8g366WBJvJHlVTEb9hvnHKgaaxYlstvdkdWFrD34sy5HG3Df04ajAZDNHqLbXOC1EQbc2htjV9VFknMruR7GU99PsgCjn12XI1aqJKCFgnV2jFZfjjkcZQbWdXE6mDK2vsZZ0OB7EcKKPkwblVNYNzr%2Fc1enZBn3bFCawD9p43L%2Fdr%2F8%2FrM9ceJHxv7zbkpz13UHuxPKWt&X-Amz-Signature=ae0adfb64dba4d163b3c4340e8dd3e74233e56c742324754f589a184a8ff4c22&X-Amz-SignedHeaders=host&x-id=GetObject)
