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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7EMZNL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRMODdOM1q1zJE6QvPLOqGfXDdPsmsHlcanaCFMnDV%2BAiEA%2FDK1XOXRkI76kEML9qs%2F9FFg3Fn07YaidwVEztymmM8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPErvvTwGjn%2BeK%2FaRyrcA2fy0Du5qg%2FiRU2L7TxZSzF2%2Bd8WR%2FrBp8wxts5%2FKn6I585y6WgWqE6DB8FZ70sdEVyhRNH3qW7jcOHlQTEBMXQW89rTax5jCykODYhyZIW05jJRB0Pp08bmg9hT%2FXtojDgfKG5kDeOKCjNc%2BdiiU7utUCZE9jvb3IsHJ9664tQoknBUDGWVAN2udgXlhgHV97lruxZbXkHMyRKPFMjy0GbrexRUyIMso%2FsfM1DI2sirCHTzte2PpcNxKL9gBx7WrXEnMUBhWb5VBHCQckqyhQK1zheD0u06zaPGcm%2FnuCEH%2Fsd09AqU%2Fmm%2Fo39PQEcRrx4oghnJ2BBAlXvrsWXk%2BwoC2wynuktemTQbp9OrEBeyeVpqMcOHR9VsLb0B8gnU8793Es3Itd5XJ5UXbINkNLgib7Bdjq61zBgr09HvSd8ihZ8xME6vJce%2FigX72Mj2cEx0adCuMPKVZAQQZaLfxwjAcA1lGLDSdhyLtYdJfEszFuMMUCTIFcQP%2BY4iW0x6lB4jUlJrrzbF7kg%2FaM72mnKEJ%2BgC7nHI%2BIkRSCzcB%2BxbOuC%2FrF2RmuKGjR97asAIoBETRT1mfD3G%2BMuLbVUcVpa9rdVb%2BYJQT6exBn%2BZHM6l3gy%2FDoi%2FQJyZ0yaVMImm6MEGOqUBrYBovSYNwywmjurdy%2FKWuf5%2FBRgduLedIBOSGcO3AZMWmOZByIK%2BB4njM7vgVJyRyvCVzPvnEuzfoCsrMR%2FFBeM64rqYBavp0MClOa7QzJFBWfvdbl9vVYD0kUE5dvy4WDfQyjL4wGuMsH3NSGagJPXV74d5tHvptHVXAG1F9ND1kv5%2BVKzxgGTcE8COGSb1E4DLVc7PFTszGh9c0zuNBc4rsf93&X-Amz-Signature=8293435067b3bc1d765ca3829803e02a42b7db64a8215131efa319ec553bd3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7EMZNL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRMODdOM1q1zJE6QvPLOqGfXDdPsmsHlcanaCFMnDV%2BAiEA%2FDK1XOXRkI76kEML9qs%2F9FFg3Fn07YaidwVEztymmM8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPErvvTwGjn%2BeK%2FaRyrcA2fy0Du5qg%2FiRU2L7TxZSzF2%2Bd8WR%2FrBp8wxts5%2FKn6I585y6WgWqE6DB8FZ70sdEVyhRNH3qW7jcOHlQTEBMXQW89rTax5jCykODYhyZIW05jJRB0Pp08bmg9hT%2FXtojDgfKG5kDeOKCjNc%2BdiiU7utUCZE9jvb3IsHJ9664tQoknBUDGWVAN2udgXlhgHV97lruxZbXkHMyRKPFMjy0GbrexRUyIMso%2FsfM1DI2sirCHTzte2PpcNxKL9gBx7WrXEnMUBhWb5VBHCQckqyhQK1zheD0u06zaPGcm%2FnuCEH%2Fsd09AqU%2Fmm%2Fo39PQEcRrx4oghnJ2BBAlXvrsWXk%2BwoC2wynuktemTQbp9OrEBeyeVpqMcOHR9VsLb0B8gnU8793Es3Itd5XJ5UXbINkNLgib7Bdjq61zBgr09HvSd8ihZ8xME6vJce%2FigX72Mj2cEx0adCuMPKVZAQQZaLfxwjAcA1lGLDSdhyLtYdJfEszFuMMUCTIFcQP%2BY4iW0x6lB4jUlJrrzbF7kg%2FaM72mnKEJ%2BgC7nHI%2BIkRSCzcB%2BxbOuC%2FrF2RmuKGjR97asAIoBETRT1mfD3G%2BMuLbVUcVpa9rdVb%2BYJQT6exBn%2BZHM6l3gy%2FDoi%2FQJyZ0yaVMImm6MEGOqUBrYBovSYNwywmjurdy%2FKWuf5%2FBRgduLedIBOSGcO3AZMWmOZByIK%2BB4njM7vgVJyRyvCVzPvnEuzfoCsrMR%2FFBeM64rqYBavp0MClOa7QzJFBWfvdbl9vVYD0kUE5dvy4WDfQyjL4wGuMsH3NSGagJPXV74d5tHvptHVXAG1F9ND1kv5%2BVKzxgGTcE8COGSb1E4DLVc7PFTszGh9c0zuNBc4rsf93&X-Amz-Signature=13384fce7f1a5dd9ba5a7bd4ac6d123621c47c8475a9c98178e4a94789beb46d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7EMZNL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRMODdOM1q1zJE6QvPLOqGfXDdPsmsHlcanaCFMnDV%2BAiEA%2FDK1XOXRkI76kEML9qs%2F9FFg3Fn07YaidwVEztymmM8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPErvvTwGjn%2BeK%2FaRyrcA2fy0Du5qg%2FiRU2L7TxZSzF2%2Bd8WR%2FrBp8wxts5%2FKn6I585y6WgWqE6DB8FZ70sdEVyhRNH3qW7jcOHlQTEBMXQW89rTax5jCykODYhyZIW05jJRB0Pp08bmg9hT%2FXtojDgfKG5kDeOKCjNc%2BdiiU7utUCZE9jvb3IsHJ9664tQoknBUDGWVAN2udgXlhgHV97lruxZbXkHMyRKPFMjy0GbrexRUyIMso%2FsfM1DI2sirCHTzte2PpcNxKL9gBx7WrXEnMUBhWb5VBHCQckqyhQK1zheD0u06zaPGcm%2FnuCEH%2Fsd09AqU%2Fmm%2Fo39PQEcRrx4oghnJ2BBAlXvrsWXk%2BwoC2wynuktemTQbp9OrEBeyeVpqMcOHR9VsLb0B8gnU8793Es3Itd5XJ5UXbINkNLgib7Bdjq61zBgr09HvSd8ihZ8xME6vJce%2FigX72Mj2cEx0adCuMPKVZAQQZaLfxwjAcA1lGLDSdhyLtYdJfEszFuMMUCTIFcQP%2BY4iW0x6lB4jUlJrrzbF7kg%2FaM72mnKEJ%2BgC7nHI%2BIkRSCzcB%2BxbOuC%2FrF2RmuKGjR97asAIoBETRT1mfD3G%2BMuLbVUcVpa9rdVb%2BYJQT6exBn%2BZHM6l3gy%2FDoi%2FQJyZ0yaVMImm6MEGOqUBrYBovSYNwywmjurdy%2FKWuf5%2FBRgduLedIBOSGcO3AZMWmOZByIK%2BB4njM7vgVJyRyvCVzPvnEuzfoCsrMR%2FFBeM64rqYBavp0MClOa7QzJFBWfvdbl9vVYD0kUE5dvy4WDfQyjL4wGuMsH3NSGagJPXV74d5tHvptHVXAG1F9ND1kv5%2BVKzxgGTcE8COGSb1E4DLVc7PFTszGh9c0zuNBc4rsf93&X-Amz-Signature=c91bf147a3d3e10a2c9ba60f9568091303a6ddb824192e2e0ee07fd03ea61da6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7EMZNL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRMODdOM1q1zJE6QvPLOqGfXDdPsmsHlcanaCFMnDV%2BAiEA%2FDK1XOXRkI76kEML9qs%2F9FFg3Fn07YaidwVEztymmM8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPErvvTwGjn%2BeK%2FaRyrcA2fy0Du5qg%2FiRU2L7TxZSzF2%2Bd8WR%2FrBp8wxts5%2FKn6I585y6WgWqE6DB8FZ70sdEVyhRNH3qW7jcOHlQTEBMXQW89rTax5jCykODYhyZIW05jJRB0Pp08bmg9hT%2FXtojDgfKG5kDeOKCjNc%2BdiiU7utUCZE9jvb3IsHJ9664tQoknBUDGWVAN2udgXlhgHV97lruxZbXkHMyRKPFMjy0GbrexRUyIMso%2FsfM1DI2sirCHTzte2PpcNxKL9gBx7WrXEnMUBhWb5VBHCQckqyhQK1zheD0u06zaPGcm%2FnuCEH%2Fsd09AqU%2Fmm%2Fo39PQEcRrx4oghnJ2BBAlXvrsWXk%2BwoC2wynuktemTQbp9OrEBeyeVpqMcOHR9VsLb0B8gnU8793Es3Itd5XJ5UXbINkNLgib7Bdjq61zBgr09HvSd8ihZ8xME6vJce%2FigX72Mj2cEx0adCuMPKVZAQQZaLfxwjAcA1lGLDSdhyLtYdJfEszFuMMUCTIFcQP%2BY4iW0x6lB4jUlJrrzbF7kg%2FaM72mnKEJ%2BgC7nHI%2BIkRSCzcB%2BxbOuC%2FrF2RmuKGjR97asAIoBETRT1mfD3G%2BMuLbVUcVpa9rdVb%2BYJQT6exBn%2BZHM6l3gy%2FDoi%2FQJyZ0yaVMImm6MEGOqUBrYBovSYNwywmjurdy%2FKWuf5%2FBRgduLedIBOSGcO3AZMWmOZByIK%2BB4njM7vgVJyRyvCVzPvnEuzfoCsrMR%2FFBeM64rqYBavp0MClOa7QzJFBWfvdbl9vVYD0kUE5dvy4WDfQyjL4wGuMsH3NSGagJPXV74d5tHvptHVXAG1F9ND1kv5%2BVKzxgGTcE8COGSb1E4DLVc7PFTszGh9c0zuNBc4rsf93&X-Amz-Signature=a088b559e8e2f84c08f79f856150c7641fc0a73847b0d0b0439ddb6350294527&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7EMZNL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRMODdOM1q1zJE6QvPLOqGfXDdPsmsHlcanaCFMnDV%2BAiEA%2FDK1XOXRkI76kEML9qs%2F9FFg3Fn07YaidwVEztymmM8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPErvvTwGjn%2BeK%2FaRyrcA2fy0Du5qg%2FiRU2L7TxZSzF2%2Bd8WR%2FrBp8wxts5%2FKn6I585y6WgWqE6DB8FZ70sdEVyhRNH3qW7jcOHlQTEBMXQW89rTax5jCykODYhyZIW05jJRB0Pp08bmg9hT%2FXtojDgfKG5kDeOKCjNc%2BdiiU7utUCZE9jvb3IsHJ9664tQoknBUDGWVAN2udgXlhgHV97lruxZbXkHMyRKPFMjy0GbrexRUyIMso%2FsfM1DI2sirCHTzte2PpcNxKL9gBx7WrXEnMUBhWb5VBHCQckqyhQK1zheD0u06zaPGcm%2FnuCEH%2Fsd09AqU%2Fmm%2Fo39PQEcRrx4oghnJ2BBAlXvrsWXk%2BwoC2wynuktemTQbp9OrEBeyeVpqMcOHR9VsLb0B8gnU8793Es3Itd5XJ5UXbINkNLgib7Bdjq61zBgr09HvSd8ihZ8xME6vJce%2FigX72Mj2cEx0adCuMPKVZAQQZaLfxwjAcA1lGLDSdhyLtYdJfEszFuMMUCTIFcQP%2BY4iW0x6lB4jUlJrrzbF7kg%2FaM72mnKEJ%2BgC7nHI%2BIkRSCzcB%2BxbOuC%2FrF2RmuKGjR97asAIoBETRT1mfD3G%2BMuLbVUcVpa9rdVb%2BYJQT6exBn%2BZHM6l3gy%2FDoi%2FQJyZ0yaVMImm6MEGOqUBrYBovSYNwywmjurdy%2FKWuf5%2FBRgduLedIBOSGcO3AZMWmOZByIK%2BB4njM7vgVJyRyvCVzPvnEuzfoCsrMR%2FFBeM64rqYBavp0MClOa7QzJFBWfvdbl9vVYD0kUE5dvy4WDfQyjL4wGuMsH3NSGagJPXV74d5tHvptHVXAG1F9ND1kv5%2BVKzxgGTcE8COGSb1E4DLVc7PFTszGh9c0zuNBc4rsf93&X-Amz-Signature=17a624cadabbd94e55675096864683d181031656ffa59e1fbd7cc0f593928641&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U7EMZNL%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRMODdOM1q1zJE6QvPLOqGfXDdPsmsHlcanaCFMnDV%2BAiEA%2FDK1XOXRkI76kEML9qs%2F9FFg3Fn07YaidwVEztymmM8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPErvvTwGjn%2BeK%2FaRyrcA2fy0Du5qg%2FiRU2L7TxZSzF2%2Bd8WR%2FrBp8wxts5%2FKn6I585y6WgWqE6DB8FZ70sdEVyhRNH3qW7jcOHlQTEBMXQW89rTax5jCykODYhyZIW05jJRB0Pp08bmg9hT%2FXtojDgfKG5kDeOKCjNc%2BdiiU7utUCZE9jvb3IsHJ9664tQoknBUDGWVAN2udgXlhgHV97lruxZbXkHMyRKPFMjy0GbrexRUyIMso%2FsfM1DI2sirCHTzte2PpcNxKL9gBx7WrXEnMUBhWb5VBHCQckqyhQK1zheD0u06zaPGcm%2FnuCEH%2Fsd09AqU%2Fmm%2Fo39PQEcRrx4oghnJ2BBAlXvrsWXk%2BwoC2wynuktemTQbp9OrEBeyeVpqMcOHR9VsLb0B8gnU8793Es3Itd5XJ5UXbINkNLgib7Bdjq61zBgr09HvSd8ihZ8xME6vJce%2FigX72Mj2cEx0adCuMPKVZAQQZaLfxwjAcA1lGLDSdhyLtYdJfEszFuMMUCTIFcQP%2BY4iW0x6lB4jUlJrrzbF7kg%2FaM72mnKEJ%2BgC7nHI%2BIkRSCzcB%2BxbOuC%2FrF2RmuKGjR97asAIoBETRT1mfD3G%2BMuLbVUcVpa9rdVb%2BYJQT6exBn%2BZHM6l3gy%2FDoi%2FQJyZ0yaVMImm6MEGOqUBrYBovSYNwywmjurdy%2FKWuf5%2FBRgduLedIBOSGcO3AZMWmOZByIK%2BB4njM7vgVJyRyvCVzPvnEuzfoCsrMR%2FFBeM64rqYBavp0MClOa7QzJFBWfvdbl9vVYD0kUE5dvy4WDfQyjL4wGuMsH3NSGagJPXV74d5tHvptHVXAG1F9ND1kv5%2BVKzxgGTcE8COGSb1E4DLVc7PFTszGh9c0zuNBc4rsf93&X-Amz-Signature=421ddb18a95bc9e3c02982312ff8e35936a948c85371771edace50ce281ee165&X-Amz-SignedHeaders=host&x-id=GetObject)
