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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6DZGIO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCEbNhgCMj5kmJpc3ry4JfKF6yzwhrJQKTTYlEMkheCxwIhAMkN9gvv3jvxWszyVn9oqAb6mlQt38iVk4fc1wL%2FCs4aKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLOTS4o3QL1DsiUZEq3AOS%2FSwP0Z2xnpwGDMIiFTF4eh0jWaTivTdMTded5%2F9pQhvT9jZliwabYnp72GG5aQCd8%2BqEJzSXH2BUCH0D2bQT9%2B3zdoYnx79TNcfepIZrlkMPlXvtSLItY9zmO90ntvO3q0PjZGNPHXEyhQ6nEqwS2KEbAnQCLEV2f%2B0OUWJcuV8JWPR3HsCxbutSUDghCytLYuQhZ5rzdEWf3Ra93qbfPBTq1TZ%2FKYKbmCKw4ryyJ6b3LqQAtmh1Xn4DYznIxuU%2BtmnEOmc6wmj%2BUws221HtbUK2UROug8SXTtZsN%2BkX%2BJwdQ4KQBycxCNqbJ7rbPyracWCMUfSqsz1rLWUsRvr2Cj2TAkOu4MMSDVuHnS3cGWf1ohc6tQBRYeKettA3UAdY85in22kQ%2FlgnlCxr5I9Fq6NNoM%2BWUJ1gkZ%2BcSOQgAob8YzHB0obm2gfr2Ufam2Qpv83hOzf7k8pLeSRkVknb%2BWi5aYogzaHRH45IvJv1JkIXfXeo2Rcyb5g%2BHoUJ9F0NLnNvEzBJ9x5Bf4jPVszG6%2BtPsFiwzpiZ5cV2KJdqEvFUA%2BxZwpmZJU6AgtT1JslwCXAMXhyU1G7B1r1IzwEvImNbaVkW9W0LIS7f8mWX%2B%2F78Z4XDobclhcVytDCnwtnABjqkAdahdHUHWm9XvczK5e406OlNvgcxJKJIzLtCmJYtdVDoK1xqKHPiEyHAAenXTx0RTUDsrHgoRKTgqfbM5f85Iy%2FgbODHGucyHwqxbxGXdM4RmipJ2TpG1iz0wrY08S5YTmRoyz1MOvrulKylPqri586fs9cEi%2FTBUGnwIa82PUYguPNO44UHu%2FugLX%2FTquXaViA7bvOLkNfyiBGSQjJOZ8MunJ5U&X-Amz-Signature=ee6538d5c473ee59c7b7079c1df138feba525cb698c11eabf2804600e0ad876f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6DZGIO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCEbNhgCMj5kmJpc3ry4JfKF6yzwhrJQKTTYlEMkheCxwIhAMkN9gvv3jvxWszyVn9oqAb6mlQt38iVk4fc1wL%2FCs4aKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLOTS4o3QL1DsiUZEq3AOS%2FSwP0Z2xnpwGDMIiFTF4eh0jWaTivTdMTded5%2F9pQhvT9jZliwabYnp72GG5aQCd8%2BqEJzSXH2BUCH0D2bQT9%2B3zdoYnx79TNcfepIZrlkMPlXvtSLItY9zmO90ntvO3q0PjZGNPHXEyhQ6nEqwS2KEbAnQCLEV2f%2B0OUWJcuV8JWPR3HsCxbutSUDghCytLYuQhZ5rzdEWf3Ra93qbfPBTq1TZ%2FKYKbmCKw4ryyJ6b3LqQAtmh1Xn4DYznIxuU%2BtmnEOmc6wmj%2BUws221HtbUK2UROug8SXTtZsN%2BkX%2BJwdQ4KQBycxCNqbJ7rbPyracWCMUfSqsz1rLWUsRvr2Cj2TAkOu4MMSDVuHnS3cGWf1ohc6tQBRYeKettA3UAdY85in22kQ%2FlgnlCxr5I9Fq6NNoM%2BWUJ1gkZ%2BcSOQgAob8YzHB0obm2gfr2Ufam2Qpv83hOzf7k8pLeSRkVknb%2BWi5aYogzaHRH45IvJv1JkIXfXeo2Rcyb5g%2BHoUJ9F0NLnNvEzBJ9x5Bf4jPVszG6%2BtPsFiwzpiZ5cV2KJdqEvFUA%2BxZwpmZJU6AgtT1JslwCXAMXhyU1G7B1r1IzwEvImNbaVkW9W0LIS7f8mWX%2B%2F78Z4XDobclhcVytDCnwtnABjqkAdahdHUHWm9XvczK5e406OlNvgcxJKJIzLtCmJYtdVDoK1xqKHPiEyHAAenXTx0RTUDsrHgoRKTgqfbM5f85Iy%2FgbODHGucyHwqxbxGXdM4RmipJ2TpG1iz0wrY08S5YTmRoyz1MOvrulKylPqri586fs9cEi%2FTBUGnwIa82PUYguPNO44UHu%2FugLX%2FTquXaViA7bvOLkNfyiBGSQjJOZ8MunJ5U&X-Amz-Signature=0dd9b56d2cccdc4b7ce5dc2cbab933e02b1c0cf9076ab82e0e61fd2558fad68c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6DZGIO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCEbNhgCMj5kmJpc3ry4JfKF6yzwhrJQKTTYlEMkheCxwIhAMkN9gvv3jvxWszyVn9oqAb6mlQt38iVk4fc1wL%2FCs4aKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLOTS4o3QL1DsiUZEq3AOS%2FSwP0Z2xnpwGDMIiFTF4eh0jWaTivTdMTded5%2F9pQhvT9jZliwabYnp72GG5aQCd8%2BqEJzSXH2BUCH0D2bQT9%2B3zdoYnx79TNcfepIZrlkMPlXvtSLItY9zmO90ntvO3q0PjZGNPHXEyhQ6nEqwS2KEbAnQCLEV2f%2B0OUWJcuV8JWPR3HsCxbutSUDghCytLYuQhZ5rzdEWf3Ra93qbfPBTq1TZ%2FKYKbmCKw4ryyJ6b3LqQAtmh1Xn4DYznIxuU%2BtmnEOmc6wmj%2BUws221HtbUK2UROug8SXTtZsN%2BkX%2BJwdQ4KQBycxCNqbJ7rbPyracWCMUfSqsz1rLWUsRvr2Cj2TAkOu4MMSDVuHnS3cGWf1ohc6tQBRYeKettA3UAdY85in22kQ%2FlgnlCxr5I9Fq6NNoM%2BWUJ1gkZ%2BcSOQgAob8YzHB0obm2gfr2Ufam2Qpv83hOzf7k8pLeSRkVknb%2BWi5aYogzaHRH45IvJv1JkIXfXeo2Rcyb5g%2BHoUJ9F0NLnNvEzBJ9x5Bf4jPVszG6%2BtPsFiwzpiZ5cV2KJdqEvFUA%2BxZwpmZJU6AgtT1JslwCXAMXhyU1G7B1r1IzwEvImNbaVkW9W0LIS7f8mWX%2B%2F78Z4XDobclhcVytDCnwtnABjqkAdahdHUHWm9XvczK5e406OlNvgcxJKJIzLtCmJYtdVDoK1xqKHPiEyHAAenXTx0RTUDsrHgoRKTgqfbM5f85Iy%2FgbODHGucyHwqxbxGXdM4RmipJ2TpG1iz0wrY08S5YTmRoyz1MOvrulKylPqri586fs9cEi%2FTBUGnwIa82PUYguPNO44UHu%2FugLX%2FTquXaViA7bvOLkNfyiBGSQjJOZ8MunJ5U&X-Amz-Signature=3b2fc3a249994ec333a100ed092c5eaa382b14964cd9cc6c917d52c4ab2e35a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6DZGIO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCEbNhgCMj5kmJpc3ry4JfKF6yzwhrJQKTTYlEMkheCxwIhAMkN9gvv3jvxWszyVn9oqAb6mlQt38iVk4fc1wL%2FCs4aKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLOTS4o3QL1DsiUZEq3AOS%2FSwP0Z2xnpwGDMIiFTF4eh0jWaTivTdMTded5%2F9pQhvT9jZliwabYnp72GG5aQCd8%2BqEJzSXH2BUCH0D2bQT9%2B3zdoYnx79TNcfepIZrlkMPlXvtSLItY9zmO90ntvO3q0PjZGNPHXEyhQ6nEqwS2KEbAnQCLEV2f%2B0OUWJcuV8JWPR3HsCxbutSUDghCytLYuQhZ5rzdEWf3Ra93qbfPBTq1TZ%2FKYKbmCKw4ryyJ6b3LqQAtmh1Xn4DYznIxuU%2BtmnEOmc6wmj%2BUws221HtbUK2UROug8SXTtZsN%2BkX%2BJwdQ4KQBycxCNqbJ7rbPyracWCMUfSqsz1rLWUsRvr2Cj2TAkOu4MMSDVuHnS3cGWf1ohc6tQBRYeKettA3UAdY85in22kQ%2FlgnlCxr5I9Fq6NNoM%2BWUJ1gkZ%2BcSOQgAob8YzHB0obm2gfr2Ufam2Qpv83hOzf7k8pLeSRkVknb%2BWi5aYogzaHRH45IvJv1JkIXfXeo2Rcyb5g%2BHoUJ9F0NLnNvEzBJ9x5Bf4jPVszG6%2BtPsFiwzpiZ5cV2KJdqEvFUA%2BxZwpmZJU6AgtT1JslwCXAMXhyU1G7B1r1IzwEvImNbaVkW9W0LIS7f8mWX%2B%2F78Z4XDobclhcVytDCnwtnABjqkAdahdHUHWm9XvczK5e406OlNvgcxJKJIzLtCmJYtdVDoK1xqKHPiEyHAAenXTx0RTUDsrHgoRKTgqfbM5f85Iy%2FgbODHGucyHwqxbxGXdM4RmipJ2TpG1iz0wrY08S5YTmRoyz1MOvrulKylPqri586fs9cEi%2FTBUGnwIa82PUYguPNO44UHu%2FugLX%2FTquXaViA7bvOLkNfyiBGSQjJOZ8MunJ5U&X-Amz-Signature=eb7b9683eff9f52ab5745fd0a2f7ab1acf8e938d1f394809511c34a762d61adc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6DZGIO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCEbNhgCMj5kmJpc3ry4JfKF6yzwhrJQKTTYlEMkheCxwIhAMkN9gvv3jvxWszyVn9oqAb6mlQt38iVk4fc1wL%2FCs4aKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLOTS4o3QL1DsiUZEq3AOS%2FSwP0Z2xnpwGDMIiFTF4eh0jWaTivTdMTded5%2F9pQhvT9jZliwabYnp72GG5aQCd8%2BqEJzSXH2BUCH0D2bQT9%2B3zdoYnx79TNcfepIZrlkMPlXvtSLItY9zmO90ntvO3q0PjZGNPHXEyhQ6nEqwS2KEbAnQCLEV2f%2B0OUWJcuV8JWPR3HsCxbutSUDghCytLYuQhZ5rzdEWf3Ra93qbfPBTq1TZ%2FKYKbmCKw4ryyJ6b3LqQAtmh1Xn4DYznIxuU%2BtmnEOmc6wmj%2BUws221HtbUK2UROug8SXTtZsN%2BkX%2BJwdQ4KQBycxCNqbJ7rbPyracWCMUfSqsz1rLWUsRvr2Cj2TAkOu4MMSDVuHnS3cGWf1ohc6tQBRYeKettA3UAdY85in22kQ%2FlgnlCxr5I9Fq6NNoM%2BWUJ1gkZ%2BcSOQgAob8YzHB0obm2gfr2Ufam2Qpv83hOzf7k8pLeSRkVknb%2BWi5aYogzaHRH45IvJv1JkIXfXeo2Rcyb5g%2BHoUJ9F0NLnNvEzBJ9x5Bf4jPVszG6%2BtPsFiwzpiZ5cV2KJdqEvFUA%2BxZwpmZJU6AgtT1JslwCXAMXhyU1G7B1r1IzwEvImNbaVkW9W0LIS7f8mWX%2B%2F78Z4XDobclhcVytDCnwtnABjqkAdahdHUHWm9XvczK5e406OlNvgcxJKJIzLtCmJYtdVDoK1xqKHPiEyHAAenXTx0RTUDsrHgoRKTgqfbM5f85Iy%2FgbODHGucyHwqxbxGXdM4RmipJ2TpG1iz0wrY08S5YTmRoyz1MOvrulKylPqri586fs9cEi%2FTBUGnwIa82PUYguPNO44UHu%2FugLX%2FTquXaViA7bvOLkNfyiBGSQjJOZ8MunJ5U&X-Amz-Signature=ce82fd8db2260e05dd0130045e1d2bce5379fbdef320a9424db846bed1bd509d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI6DZGIO%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCEbNhgCMj5kmJpc3ry4JfKF6yzwhrJQKTTYlEMkheCxwIhAMkN9gvv3jvxWszyVn9oqAb6mlQt38iVk4fc1wL%2FCs4aKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLOTS4o3QL1DsiUZEq3AOS%2FSwP0Z2xnpwGDMIiFTF4eh0jWaTivTdMTded5%2F9pQhvT9jZliwabYnp72GG5aQCd8%2BqEJzSXH2BUCH0D2bQT9%2B3zdoYnx79TNcfepIZrlkMPlXvtSLItY9zmO90ntvO3q0PjZGNPHXEyhQ6nEqwS2KEbAnQCLEV2f%2B0OUWJcuV8JWPR3HsCxbutSUDghCytLYuQhZ5rzdEWf3Ra93qbfPBTq1TZ%2FKYKbmCKw4ryyJ6b3LqQAtmh1Xn4DYznIxuU%2BtmnEOmc6wmj%2BUws221HtbUK2UROug8SXTtZsN%2BkX%2BJwdQ4KQBycxCNqbJ7rbPyracWCMUfSqsz1rLWUsRvr2Cj2TAkOu4MMSDVuHnS3cGWf1ohc6tQBRYeKettA3UAdY85in22kQ%2FlgnlCxr5I9Fq6NNoM%2BWUJ1gkZ%2BcSOQgAob8YzHB0obm2gfr2Ufam2Qpv83hOzf7k8pLeSRkVknb%2BWi5aYogzaHRH45IvJv1JkIXfXeo2Rcyb5g%2BHoUJ9F0NLnNvEzBJ9x5Bf4jPVszG6%2BtPsFiwzpiZ5cV2KJdqEvFUA%2BxZwpmZJU6AgtT1JslwCXAMXhyU1G7B1r1IzwEvImNbaVkW9W0LIS7f8mWX%2B%2F78Z4XDobclhcVytDCnwtnABjqkAdahdHUHWm9XvczK5e406OlNvgcxJKJIzLtCmJYtdVDoK1xqKHPiEyHAAenXTx0RTUDsrHgoRKTgqfbM5f85Iy%2FgbODHGucyHwqxbxGXdM4RmipJ2TpG1iz0wrY08S5YTmRoyz1MOvrulKylPqri586fs9cEi%2FTBUGnwIa82PUYguPNO44UHu%2FugLX%2FTquXaViA7bvOLkNfyiBGSQjJOZ8MunJ5U&X-Amz-Signature=f6e5f005c9369fd737e81500ea8fcbab7a9948b584234cc7499b27678b34847e&X-Amz-SignedHeaders=host&x-id=GetObject)
