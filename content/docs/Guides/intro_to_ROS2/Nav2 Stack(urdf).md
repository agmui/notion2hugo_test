---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDTHLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVg4dm29JGdEqWMbob8F57PecFqDgW7vr9fDXfsMbFEAIgStMBWcBPbYgzkfqM96DPrdJtAym%2Bz9bQKiM4MGKTXlUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKvFUfKdzoU1Qxs%2FdyrcA7kcp%2Fm3ei%2BU36QSN8dFCJMa9naO1%2B1oBFAiwSX072gc1pr0pKQJ1Dqg6jFB%2FSxzjFX3XVgJxi918HqyxlHqOPGBig6J9USA3JhGreRlE%2B8ijei1%2ByiUXvT3S6JCDCa0Xpmq3ntVzG6pkJmSvQ2UGYzA9wnFfW7GuFUITrSdqjDES%2FKhQAUATrPjcdc2zBSaqNMCPoI6V2QsuV%2BirU%2B8YzoeXTxff5wW79AIK59jeSN5S6A%2FAPBF%2B%2BZSDg0lnt0ya3Dy8ZH%2Be8RFKwdFNBb2lHDkoRnWuqnXImOfD280GFug7QWiYfOP70T5CxBS8IYWMSOrzagNCO%2F6qeGcEWG%2BJ3S98i8vtEPZdUc6GAI9HZzLjk3VDXEwSbmvI%2BgRwcOrJUErGNWxWXCZV2X%2FUmMkLoaPuuQxMgT7fexu97bAetIvuKUMGEzcA6L4VVMSVo71riPK%2FnHadH7zcCbqSODFYI5WzTwLpoCviN0KamBHjl88EySmEezff5zAP1brNIb8N2lqan3OL57rM%2FpI%2BeuQBYgt4luf9zhsWqcbfgsC80BQamQvaTa0YjS8bCEZcBbSTAJf7e2b4az5AemiQPnqYTq0V%2BOqmcAVzx9zX1hIJxw8F4E2oLxlodUQmzz1MPPEkr0GOqUBa2IUrgeBGR7cCaVoCEA98MiD5SftrENLcAJykHBI6RkRWtJXtRtUgMU9YKrPQBuIUzH02wQRymuG9S3p15%2ByssTp1eVNTW%2BOKpja%2F994TfW4FCUMFIzeqTOat4yaKwik89eIDbx0EkLP3zlrzlaKnbZ2EIBcZcIcRQjml3hX2nr1uX9AmORxIlgO5erPqcOn%2F5vHeCbgBRkhOjP4nXhQXKrjcOOp&X-Amz-Signature=59990bab8696fc060f3c5b1621dc75257aa6801680f83e5a44e7ffbe11340daf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDTHLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVg4dm29JGdEqWMbob8F57PecFqDgW7vr9fDXfsMbFEAIgStMBWcBPbYgzkfqM96DPrdJtAym%2Bz9bQKiM4MGKTXlUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKvFUfKdzoU1Qxs%2FdyrcA7kcp%2Fm3ei%2BU36QSN8dFCJMa9naO1%2B1oBFAiwSX072gc1pr0pKQJ1Dqg6jFB%2FSxzjFX3XVgJxi918HqyxlHqOPGBig6J9USA3JhGreRlE%2B8ijei1%2ByiUXvT3S6JCDCa0Xpmq3ntVzG6pkJmSvQ2UGYzA9wnFfW7GuFUITrSdqjDES%2FKhQAUATrPjcdc2zBSaqNMCPoI6V2QsuV%2BirU%2B8YzoeXTxff5wW79AIK59jeSN5S6A%2FAPBF%2B%2BZSDg0lnt0ya3Dy8ZH%2Be8RFKwdFNBb2lHDkoRnWuqnXImOfD280GFug7QWiYfOP70T5CxBS8IYWMSOrzagNCO%2F6qeGcEWG%2BJ3S98i8vtEPZdUc6GAI9HZzLjk3VDXEwSbmvI%2BgRwcOrJUErGNWxWXCZV2X%2FUmMkLoaPuuQxMgT7fexu97bAetIvuKUMGEzcA6L4VVMSVo71riPK%2FnHadH7zcCbqSODFYI5WzTwLpoCviN0KamBHjl88EySmEezff5zAP1brNIb8N2lqan3OL57rM%2FpI%2BeuQBYgt4luf9zhsWqcbfgsC80BQamQvaTa0YjS8bCEZcBbSTAJf7e2b4az5AemiQPnqYTq0V%2BOqmcAVzx9zX1hIJxw8F4E2oLxlodUQmzz1MPPEkr0GOqUBa2IUrgeBGR7cCaVoCEA98MiD5SftrENLcAJykHBI6RkRWtJXtRtUgMU9YKrPQBuIUzH02wQRymuG9S3p15%2ByssTp1eVNTW%2BOKpja%2F994TfW4FCUMFIzeqTOat4yaKwik89eIDbx0EkLP3zlrzlaKnbZ2EIBcZcIcRQjml3hX2nr1uX9AmORxIlgO5erPqcOn%2F5vHeCbgBRkhOjP4nXhQXKrjcOOp&X-Amz-Signature=1336bd1077b36c81e8477b4d6ccaab148bd01801e5d1f07c5dc2fdb462eb3816&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDTHLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVg4dm29JGdEqWMbob8F57PecFqDgW7vr9fDXfsMbFEAIgStMBWcBPbYgzkfqM96DPrdJtAym%2Bz9bQKiM4MGKTXlUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKvFUfKdzoU1Qxs%2FdyrcA7kcp%2Fm3ei%2BU36QSN8dFCJMa9naO1%2B1oBFAiwSX072gc1pr0pKQJ1Dqg6jFB%2FSxzjFX3XVgJxi918HqyxlHqOPGBig6J9USA3JhGreRlE%2B8ijei1%2ByiUXvT3S6JCDCa0Xpmq3ntVzG6pkJmSvQ2UGYzA9wnFfW7GuFUITrSdqjDES%2FKhQAUATrPjcdc2zBSaqNMCPoI6V2QsuV%2BirU%2B8YzoeXTxff5wW79AIK59jeSN5S6A%2FAPBF%2B%2BZSDg0lnt0ya3Dy8ZH%2Be8RFKwdFNBb2lHDkoRnWuqnXImOfD280GFug7QWiYfOP70T5CxBS8IYWMSOrzagNCO%2F6qeGcEWG%2BJ3S98i8vtEPZdUc6GAI9HZzLjk3VDXEwSbmvI%2BgRwcOrJUErGNWxWXCZV2X%2FUmMkLoaPuuQxMgT7fexu97bAetIvuKUMGEzcA6L4VVMSVo71riPK%2FnHadH7zcCbqSODFYI5WzTwLpoCviN0KamBHjl88EySmEezff5zAP1brNIb8N2lqan3OL57rM%2FpI%2BeuQBYgt4luf9zhsWqcbfgsC80BQamQvaTa0YjS8bCEZcBbSTAJf7e2b4az5AemiQPnqYTq0V%2BOqmcAVzx9zX1hIJxw8F4E2oLxlodUQmzz1MPPEkr0GOqUBa2IUrgeBGR7cCaVoCEA98MiD5SftrENLcAJykHBI6RkRWtJXtRtUgMU9YKrPQBuIUzH02wQRymuG9S3p15%2ByssTp1eVNTW%2BOKpja%2F994TfW4FCUMFIzeqTOat4yaKwik89eIDbx0EkLP3zlrzlaKnbZ2EIBcZcIcRQjml3hX2nr1uX9AmORxIlgO5erPqcOn%2F5vHeCbgBRkhOjP4nXhQXKrjcOOp&X-Amz-Signature=852fd60ed5dde1cb618b1a4ef5877c2d36542840b640d48ac8288f567b7fcd98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDTHLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVg4dm29JGdEqWMbob8F57PecFqDgW7vr9fDXfsMbFEAIgStMBWcBPbYgzkfqM96DPrdJtAym%2Bz9bQKiM4MGKTXlUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKvFUfKdzoU1Qxs%2FdyrcA7kcp%2Fm3ei%2BU36QSN8dFCJMa9naO1%2B1oBFAiwSX072gc1pr0pKQJ1Dqg6jFB%2FSxzjFX3XVgJxi918HqyxlHqOPGBig6J9USA3JhGreRlE%2B8ijei1%2ByiUXvT3S6JCDCa0Xpmq3ntVzG6pkJmSvQ2UGYzA9wnFfW7GuFUITrSdqjDES%2FKhQAUATrPjcdc2zBSaqNMCPoI6V2QsuV%2BirU%2B8YzoeXTxff5wW79AIK59jeSN5S6A%2FAPBF%2B%2BZSDg0lnt0ya3Dy8ZH%2Be8RFKwdFNBb2lHDkoRnWuqnXImOfD280GFug7QWiYfOP70T5CxBS8IYWMSOrzagNCO%2F6qeGcEWG%2BJ3S98i8vtEPZdUc6GAI9HZzLjk3VDXEwSbmvI%2BgRwcOrJUErGNWxWXCZV2X%2FUmMkLoaPuuQxMgT7fexu97bAetIvuKUMGEzcA6L4VVMSVo71riPK%2FnHadH7zcCbqSODFYI5WzTwLpoCviN0KamBHjl88EySmEezff5zAP1brNIb8N2lqan3OL57rM%2FpI%2BeuQBYgt4luf9zhsWqcbfgsC80BQamQvaTa0YjS8bCEZcBbSTAJf7e2b4az5AemiQPnqYTq0V%2BOqmcAVzx9zX1hIJxw8F4E2oLxlodUQmzz1MPPEkr0GOqUBa2IUrgeBGR7cCaVoCEA98MiD5SftrENLcAJykHBI6RkRWtJXtRtUgMU9YKrPQBuIUzH02wQRymuG9S3p15%2ByssTp1eVNTW%2BOKpja%2F994TfW4FCUMFIzeqTOat4yaKwik89eIDbx0EkLP3zlrzlaKnbZ2EIBcZcIcRQjml3hX2nr1uX9AmORxIlgO5erPqcOn%2F5vHeCbgBRkhOjP4nXhQXKrjcOOp&X-Amz-Signature=8394c4d61345f3bf7e59a9e325db004bc9caa19bdcf3f76f6c80654092407b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDTHLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVg4dm29JGdEqWMbob8F57PecFqDgW7vr9fDXfsMbFEAIgStMBWcBPbYgzkfqM96DPrdJtAym%2Bz9bQKiM4MGKTXlUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKvFUfKdzoU1Qxs%2FdyrcA7kcp%2Fm3ei%2BU36QSN8dFCJMa9naO1%2B1oBFAiwSX072gc1pr0pKQJ1Dqg6jFB%2FSxzjFX3XVgJxi918HqyxlHqOPGBig6J9USA3JhGreRlE%2B8ijei1%2ByiUXvT3S6JCDCa0Xpmq3ntVzG6pkJmSvQ2UGYzA9wnFfW7GuFUITrSdqjDES%2FKhQAUATrPjcdc2zBSaqNMCPoI6V2QsuV%2BirU%2B8YzoeXTxff5wW79AIK59jeSN5S6A%2FAPBF%2B%2BZSDg0lnt0ya3Dy8ZH%2Be8RFKwdFNBb2lHDkoRnWuqnXImOfD280GFug7QWiYfOP70T5CxBS8IYWMSOrzagNCO%2F6qeGcEWG%2BJ3S98i8vtEPZdUc6GAI9HZzLjk3VDXEwSbmvI%2BgRwcOrJUErGNWxWXCZV2X%2FUmMkLoaPuuQxMgT7fexu97bAetIvuKUMGEzcA6L4VVMSVo71riPK%2FnHadH7zcCbqSODFYI5WzTwLpoCviN0KamBHjl88EySmEezff5zAP1brNIb8N2lqan3OL57rM%2FpI%2BeuQBYgt4luf9zhsWqcbfgsC80BQamQvaTa0YjS8bCEZcBbSTAJf7e2b4az5AemiQPnqYTq0V%2BOqmcAVzx9zX1hIJxw8F4E2oLxlodUQmzz1MPPEkr0GOqUBa2IUrgeBGR7cCaVoCEA98MiD5SftrENLcAJykHBI6RkRWtJXtRtUgMU9YKrPQBuIUzH02wQRymuG9S3p15%2ByssTp1eVNTW%2BOKpja%2F994TfW4FCUMFIzeqTOat4yaKwik89eIDbx0EkLP3zlrzlaKnbZ2EIBcZcIcRQjml3hX2nr1uX9AmORxIlgO5erPqcOn%2F5vHeCbgBRkhOjP4nXhQXKrjcOOp&X-Amz-Signature=7fb4709cf3d60a5230cd3e6400ef8912671b82378bbdc9d9f66f573917ff1348&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUDTHLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCVg4dm29JGdEqWMbob8F57PecFqDgW7vr9fDXfsMbFEAIgStMBWcBPbYgzkfqM96DPrdJtAym%2Bz9bQKiM4MGKTXlUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKvFUfKdzoU1Qxs%2FdyrcA7kcp%2Fm3ei%2BU36QSN8dFCJMa9naO1%2B1oBFAiwSX072gc1pr0pKQJ1Dqg6jFB%2FSxzjFX3XVgJxi918HqyxlHqOPGBig6J9USA3JhGreRlE%2B8ijei1%2ByiUXvT3S6JCDCa0Xpmq3ntVzG6pkJmSvQ2UGYzA9wnFfW7GuFUITrSdqjDES%2FKhQAUATrPjcdc2zBSaqNMCPoI6V2QsuV%2BirU%2B8YzoeXTxff5wW79AIK59jeSN5S6A%2FAPBF%2B%2BZSDg0lnt0ya3Dy8ZH%2Be8RFKwdFNBb2lHDkoRnWuqnXImOfD280GFug7QWiYfOP70T5CxBS8IYWMSOrzagNCO%2F6qeGcEWG%2BJ3S98i8vtEPZdUc6GAI9HZzLjk3VDXEwSbmvI%2BgRwcOrJUErGNWxWXCZV2X%2FUmMkLoaPuuQxMgT7fexu97bAetIvuKUMGEzcA6L4VVMSVo71riPK%2FnHadH7zcCbqSODFYI5WzTwLpoCviN0KamBHjl88EySmEezff5zAP1brNIb8N2lqan3OL57rM%2FpI%2BeuQBYgt4luf9zhsWqcbfgsC80BQamQvaTa0YjS8bCEZcBbSTAJf7e2b4az5AemiQPnqYTq0V%2BOqmcAVzx9zX1hIJxw8F4E2oLxlodUQmzz1MPPEkr0GOqUBa2IUrgeBGR7cCaVoCEA98MiD5SftrENLcAJykHBI6RkRWtJXtRtUgMU9YKrPQBuIUzH02wQRymuG9S3p15%2ByssTp1eVNTW%2BOKpja%2F994TfW4FCUMFIzeqTOat4yaKwik89eIDbx0EkLP3zlrzlaKnbZ2EIBcZcIcRQjml3hX2nr1uX9AmORxIlgO5erPqcOn%2F5vHeCbgBRkhOjP4nXhQXKrjcOOp&X-Amz-Signature=0335c648c215c0bd283f835870ab3ff5f9f28ee38b1719e3e288a007b6bac044&X-Amz-SignedHeaders=host&x-id=GetObject)
