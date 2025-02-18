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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3ME3ER%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB8ohZusAFnvYtl2XqujqfEzKyqFVNu8VLxAWSh7ougjAiAPZlMLNb7QK5vdfoKQ6%2B9ayFWaQ5CFBny2G5o3Ukg9tyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdNp%2F0t7U7Cnz2QSKtwDdFQr4UyFz918fDv8wTKyFCP7faDFPpJWcvk3bNbaNtpp%2Fz5J5BfAQm68sR%2FcP9mftNFlQ5%2Fv2gkER3VreOkwe3rdTHKPzEK3dZQ75aAn%2BAeVlwyeNm8mgCyTiuJQEKbcnYO4p4414HEjVhsU2miE516Lfr9uz%2FifMYyDepIgCuqvV%2BmlkkSFObKmVc%2FrDBOOIjNQG34lsNhDtp6crknZ3tm%2F8ZvBeS%2FHV%2FZjZbScRhaki9L5z6iLHWETygahx5t7CtimjC1BSPHf9dvekV3ChMUNnSEoKDfEqNYWiTf%2FcBiRX9UJRf%2BFS0jXh49f%2BSgxHeEPHXP49puOSrSNhne0UvpxVDAr%2BK2tRgleODSjudey1croho7wnLqb3GJCkESEp2wNsDs6kHRjLa%2FJopDRcHcMNxpY%2FMroGYXbF%2BDQm1LJPEUVw0%2FmvOFbQkS3n98NbGFyUtJ5sAPzjpbk5IAmZq8A4Gf6KSX7qn7zFnNm3lzmdMc%2FQSD6uQivq1HHlpQUPOpzsXGmjfgnZIW%2F4dpqsRbpXWBVniO2wKDWVFh976UCeSZ2GuVFMb1BX2XqymI1KFTY7LWwBljtVTCkhZH14CJcEWICns6IqyPNkRrfRcl3bv%2BPl%2FHeH84DupQw1rnTvQY6pgGEYPu%2BLs8QZUdjyBPuwKwfeOrcqElRHSXA2RH4s1mE%2FFODz3RQsuKJvl9MmUqAu1jAxIMIYZ6yvkoUhL35YeP0rRey%2BzdHSYmNqKnLz58KrlB5YaWLL2nVBVjEMmb3oEKccHMn57LP7i%2Fb%2F8C7W6FmoHxc3Grpf5vJSDh854AxHepNTtS%2BZIfAthcLdUbAVzXCmjTT3rg%2BGUTeECWjtHA5cvJJFxYS&X-Amz-Signature=13fd203fffdeb8c08f4d61c7af37501d778a5718f97c7852c4d0f8a3391fcf27&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3ME3ER%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB8ohZusAFnvYtl2XqujqfEzKyqFVNu8VLxAWSh7ougjAiAPZlMLNb7QK5vdfoKQ6%2B9ayFWaQ5CFBny2G5o3Ukg9tyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdNp%2F0t7U7Cnz2QSKtwDdFQr4UyFz918fDv8wTKyFCP7faDFPpJWcvk3bNbaNtpp%2Fz5J5BfAQm68sR%2FcP9mftNFlQ5%2Fv2gkER3VreOkwe3rdTHKPzEK3dZQ75aAn%2BAeVlwyeNm8mgCyTiuJQEKbcnYO4p4414HEjVhsU2miE516Lfr9uz%2FifMYyDepIgCuqvV%2BmlkkSFObKmVc%2FrDBOOIjNQG34lsNhDtp6crknZ3tm%2F8ZvBeS%2FHV%2FZjZbScRhaki9L5z6iLHWETygahx5t7CtimjC1BSPHf9dvekV3ChMUNnSEoKDfEqNYWiTf%2FcBiRX9UJRf%2BFS0jXh49f%2BSgxHeEPHXP49puOSrSNhne0UvpxVDAr%2BK2tRgleODSjudey1croho7wnLqb3GJCkESEp2wNsDs6kHRjLa%2FJopDRcHcMNxpY%2FMroGYXbF%2BDQm1LJPEUVw0%2FmvOFbQkS3n98NbGFyUtJ5sAPzjpbk5IAmZq8A4Gf6KSX7qn7zFnNm3lzmdMc%2FQSD6uQivq1HHlpQUPOpzsXGmjfgnZIW%2F4dpqsRbpXWBVniO2wKDWVFh976UCeSZ2GuVFMb1BX2XqymI1KFTY7LWwBljtVTCkhZH14CJcEWICns6IqyPNkRrfRcl3bv%2BPl%2FHeH84DupQw1rnTvQY6pgGEYPu%2BLs8QZUdjyBPuwKwfeOrcqElRHSXA2RH4s1mE%2FFODz3RQsuKJvl9MmUqAu1jAxIMIYZ6yvkoUhL35YeP0rRey%2BzdHSYmNqKnLz58KrlB5YaWLL2nVBVjEMmb3oEKccHMn57LP7i%2Fb%2F8C7W6FmoHxc3Grpf5vJSDh854AxHepNTtS%2BZIfAthcLdUbAVzXCmjTT3rg%2BGUTeECWjtHA5cvJJFxYS&X-Amz-Signature=381e781aa1fc4078683281d617009ff836a5d791e2dec6447f124e14dc4369d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3ME3ER%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB8ohZusAFnvYtl2XqujqfEzKyqFVNu8VLxAWSh7ougjAiAPZlMLNb7QK5vdfoKQ6%2B9ayFWaQ5CFBny2G5o3Ukg9tyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdNp%2F0t7U7Cnz2QSKtwDdFQr4UyFz918fDv8wTKyFCP7faDFPpJWcvk3bNbaNtpp%2Fz5J5BfAQm68sR%2FcP9mftNFlQ5%2Fv2gkER3VreOkwe3rdTHKPzEK3dZQ75aAn%2BAeVlwyeNm8mgCyTiuJQEKbcnYO4p4414HEjVhsU2miE516Lfr9uz%2FifMYyDepIgCuqvV%2BmlkkSFObKmVc%2FrDBOOIjNQG34lsNhDtp6crknZ3tm%2F8ZvBeS%2FHV%2FZjZbScRhaki9L5z6iLHWETygahx5t7CtimjC1BSPHf9dvekV3ChMUNnSEoKDfEqNYWiTf%2FcBiRX9UJRf%2BFS0jXh49f%2BSgxHeEPHXP49puOSrSNhne0UvpxVDAr%2BK2tRgleODSjudey1croho7wnLqb3GJCkESEp2wNsDs6kHRjLa%2FJopDRcHcMNxpY%2FMroGYXbF%2BDQm1LJPEUVw0%2FmvOFbQkS3n98NbGFyUtJ5sAPzjpbk5IAmZq8A4Gf6KSX7qn7zFnNm3lzmdMc%2FQSD6uQivq1HHlpQUPOpzsXGmjfgnZIW%2F4dpqsRbpXWBVniO2wKDWVFh976UCeSZ2GuVFMb1BX2XqymI1KFTY7LWwBljtVTCkhZH14CJcEWICns6IqyPNkRrfRcl3bv%2BPl%2FHeH84DupQw1rnTvQY6pgGEYPu%2BLs8QZUdjyBPuwKwfeOrcqElRHSXA2RH4s1mE%2FFODz3RQsuKJvl9MmUqAu1jAxIMIYZ6yvkoUhL35YeP0rRey%2BzdHSYmNqKnLz58KrlB5YaWLL2nVBVjEMmb3oEKccHMn57LP7i%2Fb%2F8C7W6FmoHxc3Grpf5vJSDh854AxHepNTtS%2BZIfAthcLdUbAVzXCmjTT3rg%2BGUTeECWjtHA5cvJJFxYS&X-Amz-Signature=3c0f5de7d96743fee7609b48512757b96001d1c61b78b60deb81913f6576bb55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3ME3ER%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB8ohZusAFnvYtl2XqujqfEzKyqFVNu8VLxAWSh7ougjAiAPZlMLNb7QK5vdfoKQ6%2B9ayFWaQ5CFBny2G5o3Ukg9tyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdNp%2F0t7U7Cnz2QSKtwDdFQr4UyFz918fDv8wTKyFCP7faDFPpJWcvk3bNbaNtpp%2Fz5J5BfAQm68sR%2FcP9mftNFlQ5%2Fv2gkER3VreOkwe3rdTHKPzEK3dZQ75aAn%2BAeVlwyeNm8mgCyTiuJQEKbcnYO4p4414HEjVhsU2miE516Lfr9uz%2FifMYyDepIgCuqvV%2BmlkkSFObKmVc%2FrDBOOIjNQG34lsNhDtp6crknZ3tm%2F8ZvBeS%2FHV%2FZjZbScRhaki9L5z6iLHWETygahx5t7CtimjC1BSPHf9dvekV3ChMUNnSEoKDfEqNYWiTf%2FcBiRX9UJRf%2BFS0jXh49f%2BSgxHeEPHXP49puOSrSNhne0UvpxVDAr%2BK2tRgleODSjudey1croho7wnLqb3GJCkESEp2wNsDs6kHRjLa%2FJopDRcHcMNxpY%2FMroGYXbF%2BDQm1LJPEUVw0%2FmvOFbQkS3n98NbGFyUtJ5sAPzjpbk5IAmZq8A4Gf6KSX7qn7zFnNm3lzmdMc%2FQSD6uQivq1HHlpQUPOpzsXGmjfgnZIW%2F4dpqsRbpXWBVniO2wKDWVFh976UCeSZ2GuVFMb1BX2XqymI1KFTY7LWwBljtVTCkhZH14CJcEWICns6IqyPNkRrfRcl3bv%2BPl%2FHeH84DupQw1rnTvQY6pgGEYPu%2BLs8QZUdjyBPuwKwfeOrcqElRHSXA2RH4s1mE%2FFODz3RQsuKJvl9MmUqAu1jAxIMIYZ6yvkoUhL35YeP0rRey%2BzdHSYmNqKnLz58KrlB5YaWLL2nVBVjEMmb3oEKccHMn57LP7i%2Fb%2F8C7W6FmoHxc3Grpf5vJSDh854AxHepNTtS%2BZIfAthcLdUbAVzXCmjTT3rg%2BGUTeECWjtHA5cvJJFxYS&X-Amz-Signature=840e567465fb10bdd303507462afaf3ce87a1c94276b0c800102b2c8dd839e00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3ME3ER%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB8ohZusAFnvYtl2XqujqfEzKyqFVNu8VLxAWSh7ougjAiAPZlMLNb7QK5vdfoKQ6%2B9ayFWaQ5CFBny2G5o3Ukg9tyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdNp%2F0t7U7Cnz2QSKtwDdFQr4UyFz918fDv8wTKyFCP7faDFPpJWcvk3bNbaNtpp%2Fz5J5BfAQm68sR%2FcP9mftNFlQ5%2Fv2gkER3VreOkwe3rdTHKPzEK3dZQ75aAn%2BAeVlwyeNm8mgCyTiuJQEKbcnYO4p4414HEjVhsU2miE516Lfr9uz%2FifMYyDepIgCuqvV%2BmlkkSFObKmVc%2FrDBOOIjNQG34lsNhDtp6crknZ3tm%2F8ZvBeS%2FHV%2FZjZbScRhaki9L5z6iLHWETygahx5t7CtimjC1BSPHf9dvekV3ChMUNnSEoKDfEqNYWiTf%2FcBiRX9UJRf%2BFS0jXh49f%2BSgxHeEPHXP49puOSrSNhne0UvpxVDAr%2BK2tRgleODSjudey1croho7wnLqb3GJCkESEp2wNsDs6kHRjLa%2FJopDRcHcMNxpY%2FMroGYXbF%2BDQm1LJPEUVw0%2FmvOFbQkS3n98NbGFyUtJ5sAPzjpbk5IAmZq8A4Gf6KSX7qn7zFnNm3lzmdMc%2FQSD6uQivq1HHlpQUPOpzsXGmjfgnZIW%2F4dpqsRbpXWBVniO2wKDWVFh976UCeSZ2GuVFMb1BX2XqymI1KFTY7LWwBljtVTCkhZH14CJcEWICns6IqyPNkRrfRcl3bv%2BPl%2FHeH84DupQw1rnTvQY6pgGEYPu%2BLs8QZUdjyBPuwKwfeOrcqElRHSXA2RH4s1mE%2FFODz3RQsuKJvl9MmUqAu1jAxIMIYZ6yvkoUhL35YeP0rRey%2BzdHSYmNqKnLz58KrlB5YaWLL2nVBVjEMmb3oEKccHMn57LP7i%2Fb%2F8C7W6FmoHxc3Grpf5vJSDh854AxHepNTtS%2BZIfAthcLdUbAVzXCmjTT3rg%2BGUTeECWjtHA5cvJJFxYS&X-Amz-Signature=b3d05830cf62cc8fcf799c7f376d1b38412e533b218e2bb57b9f7d930e13f89a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3ME3ER%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIB8ohZusAFnvYtl2XqujqfEzKyqFVNu8VLxAWSh7ougjAiAPZlMLNb7QK5vdfoKQ6%2B9ayFWaQ5CFBny2G5o3Ukg9tyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdNp%2F0t7U7Cnz2QSKtwDdFQr4UyFz918fDv8wTKyFCP7faDFPpJWcvk3bNbaNtpp%2Fz5J5BfAQm68sR%2FcP9mftNFlQ5%2Fv2gkER3VreOkwe3rdTHKPzEK3dZQ75aAn%2BAeVlwyeNm8mgCyTiuJQEKbcnYO4p4414HEjVhsU2miE516Lfr9uz%2FifMYyDepIgCuqvV%2BmlkkSFObKmVc%2FrDBOOIjNQG34lsNhDtp6crknZ3tm%2F8ZvBeS%2FHV%2FZjZbScRhaki9L5z6iLHWETygahx5t7CtimjC1BSPHf9dvekV3ChMUNnSEoKDfEqNYWiTf%2FcBiRX9UJRf%2BFS0jXh49f%2BSgxHeEPHXP49puOSrSNhne0UvpxVDAr%2BK2tRgleODSjudey1croho7wnLqb3GJCkESEp2wNsDs6kHRjLa%2FJopDRcHcMNxpY%2FMroGYXbF%2BDQm1LJPEUVw0%2FmvOFbQkS3n98NbGFyUtJ5sAPzjpbk5IAmZq8A4Gf6KSX7qn7zFnNm3lzmdMc%2FQSD6uQivq1HHlpQUPOpzsXGmjfgnZIW%2F4dpqsRbpXWBVniO2wKDWVFh976UCeSZ2GuVFMb1BX2XqymI1KFTY7LWwBljtVTCkhZH14CJcEWICns6IqyPNkRrfRcl3bv%2BPl%2FHeH84DupQw1rnTvQY6pgGEYPu%2BLs8QZUdjyBPuwKwfeOrcqElRHSXA2RH4s1mE%2FFODz3RQsuKJvl9MmUqAu1jAxIMIYZ6yvkoUhL35YeP0rRey%2BzdHSYmNqKnLz58KrlB5YaWLL2nVBVjEMmb3oEKccHMn57LP7i%2Fb%2F8C7W6FmoHxc3Grpf5vJSDh854AxHepNTtS%2BZIfAthcLdUbAVzXCmjTT3rg%2BGUTeECWjtHA5cvJJFxYS&X-Amz-Signature=ea76f8f10cbbbb38871d5cc9e22b2c477c85f19827a3848c6bf52fc81f8d246a&X-Amz-SignedHeaders=host&x-id=GetObject)
