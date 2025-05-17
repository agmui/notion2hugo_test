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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XMOOET%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2FsrAfBBzZSY2zArdswxc5bw1DutQuGGlsO05wuBA0AiEAkHEOmwxfLCM%2BTQ4lurkeRUUudeI7mlF9tr9yl6tJzcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP7KJmEGLZ3qiGcbGircA%2F%2BD7PpLt4OmHwbQQFNU77aWMlQoIVhFdppxG9OImSDSvs1T%2FwutB%2F4d8QS4zG272wggrGFTS7OVCxcvY8KGJjoQwWLau1n7jthZQKy%2FXfuAq%2Fqy8Nx7gVn8YXe8kdAamhlzbs0%2Bx50ltJzY3Nyw7Mw4aR7wpvi0WJqJW1njwezKwR3Dz2aivg3Mmv%2Bta4%2FsD499FXru8vZQLwxXfL459taI2G1qML8GgAg1VKVnfoUJE0%2B75ggnKgrovvYB0%2BNdOPrg2Pn1l%2BYOEh87RBOGZscDTxN8OyOuk9%2FKDcmXGejKt13MazWAYK%2FdrJByLj4UYTUIXFsOsUWyPAB6o1nh12s8PToGw3yNUnXRQMJB9YYrf%2B1cucLfyseiTbe%2BI84fFZibndSMjigcS3WEse4ncGDX9rGnNmYnBS1k2tN%2BSKm40KVQOjEbaTSFO%2BPPS01DhzgHmT5OwOLWpikCISIYmo4IRviKagr%2F2vckZQCtnakwrbR2O4IdW5Px%2BPTYGMvA4xoreOAmkjI2V9MhMoEQJscjmVa2Z9lf631A4anbLb4og9AU5W8S5f0MkvgAaJdd9aNJBR19ekD38UcjGkwRNB91rJ4ozl5jNlQbnAIHWsXe9qtFVw6RlELKTLaeMMC2osEGOqUButcN1iBMD92qUuO0a3u4hqXk2YuY%2BBBP%2FI7A6tf8Q8SMy67NtMUxQdJVEmYK3odHderDsMGdoke8T7o8RRufn1ac%2FBW%2FpOuCqyd6y9HpILer4Be2TKUdGqiUYkRPA2gxptQWIXfuHZIYCYdtlhW15aP1C9V32Yc3qTOgFeXAWMXSdIsYPQdCfVeg4W4KpoCnwVvk6k64GB9XNToFypX%2F7eVMHGmF&X-Amz-Signature=fddb928c0fd40f69b508322cc2d282cc073036bd4f06738a08db1bffa25bf9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XMOOET%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2FsrAfBBzZSY2zArdswxc5bw1DutQuGGlsO05wuBA0AiEAkHEOmwxfLCM%2BTQ4lurkeRUUudeI7mlF9tr9yl6tJzcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP7KJmEGLZ3qiGcbGircA%2F%2BD7PpLt4OmHwbQQFNU77aWMlQoIVhFdppxG9OImSDSvs1T%2FwutB%2F4d8QS4zG272wggrGFTS7OVCxcvY8KGJjoQwWLau1n7jthZQKy%2FXfuAq%2Fqy8Nx7gVn8YXe8kdAamhlzbs0%2Bx50ltJzY3Nyw7Mw4aR7wpvi0WJqJW1njwezKwR3Dz2aivg3Mmv%2Bta4%2FsD499FXru8vZQLwxXfL459taI2G1qML8GgAg1VKVnfoUJE0%2B75ggnKgrovvYB0%2BNdOPrg2Pn1l%2BYOEh87RBOGZscDTxN8OyOuk9%2FKDcmXGejKt13MazWAYK%2FdrJByLj4UYTUIXFsOsUWyPAB6o1nh12s8PToGw3yNUnXRQMJB9YYrf%2B1cucLfyseiTbe%2BI84fFZibndSMjigcS3WEse4ncGDX9rGnNmYnBS1k2tN%2BSKm40KVQOjEbaTSFO%2BPPS01DhzgHmT5OwOLWpikCISIYmo4IRviKagr%2F2vckZQCtnakwrbR2O4IdW5Px%2BPTYGMvA4xoreOAmkjI2V9MhMoEQJscjmVa2Z9lf631A4anbLb4og9AU5W8S5f0MkvgAaJdd9aNJBR19ekD38UcjGkwRNB91rJ4ozl5jNlQbnAIHWsXe9qtFVw6RlELKTLaeMMC2osEGOqUButcN1iBMD92qUuO0a3u4hqXk2YuY%2BBBP%2FI7A6tf8Q8SMy67NtMUxQdJVEmYK3odHderDsMGdoke8T7o8RRufn1ac%2FBW%2FpOuCqyd6y9HpILer4Be2TKUdGqiUYkRPA2gxptQWIXfuHZIYCYdtlhW15aP1C9V32Yc3qTOgFeXAWMXSdIsYPQdCfVeg4W4KpoCnwVvk6k64GB9XNToFypX%2F7eVMHGmF&X-Amz-Signature=959c6befacdd6828133a8ac867b506e950e3ce44ffd7a760440a236953fe4cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XMOOET%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2FsrAfBBzZSY2zArdswxc5bw1DutQuGGlsO05wuBA0AiEAkHEOmwxfLCM%2BTQ4lurkeRUUudeI7mlF9tr9yl6tJzcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP7KJmEGLZ3qiGcbGircA%2F%2BD7PpLt4OmHwbQQFNU77aWMlQoIVhFdppxG9OImSDSvs1T%2FwutB%2F4d8QS4zG272wggrGFTS7OVCxcvY8KGJjoQwWLau1n7jthZQKy%2FXfuAq%2Fqy8Nx7gVn8YXe8kdAamhlzbs0%2Bx50ltJzY3Nyw7Mw4aR7wpvi0WJqJW1njwezKwR3Dz2aivg3Mmv%2Bta4%2FsD499FXru8vZQLwxXfL459taI2G1qML8GgAg1VKVnfoUJE0%2B75ggnKgrovvYB0%2BNdOPrg2Pn1l%2BYOEh87RBOGZscDTxN8OyOuk9%2FKDcmXGejKt13MazWAYK%2FdrJByLj4UYTUIXFsOsUWyPAB6o1nh12s8PToGw3yNUnXRQMJB9YYrf%2B1cucLfyseiTbe%2BI84fFZibndSMjigcS3WEse4ncGDX9rGnNmYnBS1k2tN%2BSKm40KVQOjEbaTSFO%2BPPS01DhzgHmT5OwOLWpikCISIYmo4IRviKagr%2F2vckZQCtnakwrbR2O4IdW5Px%2BPTYGMvA4xoreOAmkjI2V9MhMoEQJscjmVa2Z9lf631A4anbLb4og9AU5W8S5f0MkvgAaJdd9aNJBR19ekD38UcjGkwRNB91rJ4ozl5jNlQbnAIHWsXe9qtFVw6RlELKTLaeMMC2osEGOqUButcN1iBMD92qUuO0a3u4hqXk2YuY%2BBBP%2FI7A6tf8Q8SMy67NtMUxQdJVEmYK3odHderDsMGdoke8T7o8RRufn1ac%2FBW%2FpOuCqyd6y9HpILer4Be2TKUdGqiUYkRPA2gxptQWIXfuHZIYCYdtlhW15aP1C9V32Yc3qTOgFeXAWMXSdIsYPQdCfVeg4W4KpoCnwVvk6k64GB9XNToFypX%2F7eVMHGmF&X-Amz-Signature=8307c2211566129b43bdb7982376cac6a882dc5bf201e7d35beb3de5f1398ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XMOOET%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2FsrAfBBzZSY2zArdswxc5bw1DutQuGGlsO05wuBA0AiEAkHEOmwxfLCM%2BTQ4lurkeRUUudeI7mlF9tr9yl6tJzcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP7KJmEGLZ3qiGcbGircA%2F%2BD7PpLt4OmHwbQQFNU77aWMlQoIVhFdppxG9OImSDSvs1T%2FwutB%2F4d8QS4zG272wggrGFTS7OVCxcvY8KGJjoQwWLau1n7jthZQKy%2FXfuAq%2Fqy8Nx7gVn8YXe8kdAamhlzbs0%2Bx50ltJzY3Nyw7Mw4aR7wpvi0WJqJW1njwezKwR3Dz2aivg3Mmv%2Bta4%2FsD499FXru8vZQLwxXfL459taI2G1qML8GgAg1VKVnfoUJE0%2B75ggnKgrovvYB0%2BNdOPrg2Pn1l%2BYOEh87RBOGZscDTxN8OyOuk9%2FKDcmXGejKt13MazWAYK%2FdrJByLj4UYTUIXFsOsUWyPAB6o1nh12s8PToGw3yNUnXRQMJB9YYrf%2B1cucLfyseiTbe%2BI84fFZibndSMjigcS3WEse4ncGDX9rGnNmYnBS1k2tN%2BSKm40KVQOjEbaTSFO%2BPPS01DhzgHmT5OwOLWpikCISIYmo4IRviKagr%2F2vckZQCtnakwrbR2O4IdW5Px%2BPTYGMvA4xoreOAmkjI2V9MhMoEQJscjmVa2Z9lf631A4anbLb4og9AU5W8S5f0MkvgAaJdd9aNJBR19ekD38UcjGkwRNB91rJ4ozl5jNlQbnAIHWsXe9qtFVw6RlELKTLaeMMC2osEGOqUButcN1iBMD92qUuO0a3u4hqXk2YuY%2BBBP%2FI7A6tf8Q8SMy67NtMUxQdJVEmYK3odHderDsMGdoke8T7o8RRufn1ac%2FBW%2FpOuCqyd6y9HpILer4Be2TKUdGqiUYkRPA2gxptQWIXfuHZIYCYdtlhW15aP1C9V32Yc3qTOgFeXAWMXSdIsYPQdCfVeg4W4KpoCnwVvk6k64GB9XNToFypX%2F7eVMHGmF&X-Amz-Signature=492e68c97f584813df1258d82efdb55ff7e7effef9d506a30d9cd8d4571d3c03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XMOOET%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2FsrAfBBzZSY2zArdswxc5bw1DutQuGGlsO05wuBA0AiEAkHEOmwxfLCM%2BTQ4lurkeRUUudeI7mlF9tr9yl6tJzcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP7KJmEGLZ3qiGcbGircA%2F%2BD7PpLt4OmHwbQQFNU77aWMlQoIVhFdppxG9OImSDSvs1T%2FwutB%2F4d8QS4zG272wggrGFTS7OVCxcvY8KGJjoQwWLau1n7jthZQKy%2FXfuAq%2Fqy8Nx7gVn8YXe8kdAamhlzbs0%2Bx50ltJzY3Nyw7Mw4aR7wpvi0WJqJW1njwezKwR3Dz2aivg3Mmv%2Bta4%2FsD499FXru8vZQLwxXfL459taI2G1qML8GgAg1VKVnfoUJE0%2B75ggnKgrovvYB0%2BNdOPrg2Pn1l%2BYOEh87RBOGZscDTxN8OyOuk9%2FKDcmXGejKt13MazWAYK%2FdrJByLj4UYTUIXFsOsUWyPAB6o1nh12s8PToGw3yNUnXRQMJB9YYrf%2B1cucLfyseiTbe%2BI84fFZibndSMjigcS3WEse4ncGDX9rGnNmYnBS1k2tN%2BSKm40KVQOjEbaTSFO%2BPPS01DhzgHmT5OwOLWpikCISIYmo4IRviKagr%2F2vckZQCtnakwrbR2O4IdW5Px%2BPTYGMvA4xoreOAmkjI2V9MhMoEQJscjmVa2Z9lf631A4anbLb4og9AU5W8S5f0MkvgAaJdd9aNJBR19ekD38UcjGkwRNB91rJ4ozl5jNlQbnAIHWsXe9qtFVw6RlELKTLaeMMC2osEGOqUButcN1iBMD92qUuO0a3u4hqXk2YuY%2BBBP%2FI7A6tf8Q8SMy67NtMUxQdJVEmYK3odHderDsMGdoke8T7o8RRufn1ac%2FBW%2FpOuCqyd6y9HpILer4Be2TKUdGqiUYkRPA2gxptQWIXfuHZIYCYdtlhW15aP1C9V32Yc3qTOgFeXAWMXSdIsYPQdCfVeg4W4KpoCnwVvk6k64GB9XNToFypX%2F7eVMHGmF&X-Amz-Signature=828d3f9883e0c2f5de91bfdac4039ae02e04c73b36cc86b2e9c78cacd90bd6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XMOOET%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2FsrAfBBzZSY2zArdswxc5bw1DutQuGGlsO05wuBA0AiEAkHEOmwxfLCM%2BTQ4lurkeRUUudeI7mlF9tr9yl6tJzcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP7KJmEGLZ3qiGcbGircA%2F%2BD7PpLt4OmHwbQQFNU77aWMlQoIVhFdppxG9OImSDSvs1T%2FwutB%2F4d8QS4zG272wggrGFTS7OVCxcvY8KGJjoQwWLau1n7jthZQKy%2FXfuAq%2Fqy8Nx7gVn8YXe8kdAamhlzbs0%2Bx50ltJzY3Nyw7Mw4aR7wpvi0WJqJW1njwezKwR3Dz2aivg3Mmv%2Bta4%2FsD499FXru8vZQLwxXfL459taI2G1qML8GgAg1VKVnfoUJE0%2B75ggnKgrovvYB0%2BNdOPrg2Pn1l%2BYOEh87RBOGZscDTxN8OyOuk9%2FKDcmXGejKt13MazWAYK%2FdrJByLj4UYTUIXFsOsUWyPAB6o1nh12s8PToGw3yNUnXRQMJB9YYrf%2B1cucLfyseiTbe%2BI84fFZibndSMjigcS3WEse4ncGDX9rGnNmYnBS1k2tN%2BSKm40KVQOjEbaTSFO%2BPPS01DhzgHmT5OwOLWpikCISIYmo4IRviKagr%2F2vckZQCtnakwrbR2O4IdW5Px%2BPTYGMvA4xoreOAmkjI2V9MhMoEQJscjmVa2Z9lf631A4anbLb4og9AU5W8S5f0MkvgAaJdd9aNJBR19ekD38UcjGkwRNB91rJ4ozl5jNlQbnAIHWsXe9qtFVw6RlELKTLaeMMC2osEGOqUButcN1iBMD92qUuO0a3u4hqXk2YuY%2BBBP%2FI7A6tf8Q8SMy67NtMUxQdJVEmYK3odHderDsMGdoke8T7o8RRufn1ac%2FBW%2FpOuCqyd6y9HpILer4Be2TKUdGqiUYkRPA2gxptQWIXfuHZIYCYdtlhW15aP1C9V32Yc3qTOgFeXAWMXSdIsYPQdCfVeg4W4KpoCnwVvk6k64GB9XNToFypX%2F7eVMHGmF&X-Amz-Signature=5be75f49da8be1fd5e621617564164a598ffabdd575d0a81d019400fc13f3e02&X-Amz-SignedHeaders=host&x-id=GetObject)
