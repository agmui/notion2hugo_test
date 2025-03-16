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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITQU5G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWHRaUm6aDiudZvtmrM8gqAB2ncokksYEPQjCAAjH6AiBLqOK1ZUYQNbgGvpHkKg0Pp51096eZa4Ntg79Z8t77gCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMzkeYbPJsYTnhgaqKKtwDBwu%2FZALBsOFmnASH7yFsDFpzO%2F8awGTA%2BAswYa3TG2yCzJHlBPhglaPOUaWzCTMGPauL8keiWB51za6zYED8GLNytt53zsqKijWFO%2BE0IKOberc7lCZwQ3C60rXdl2aRekn2uc1L4xSmLq5VixQ5kGxH0I%2BlGNvOApWeF71d4sNVjD%2FKkbzFYFBwymmgOZv3r4u%2F1DT23OgcA1O13VR4dJtngpz%2BWwM1kYwIpybVeqeQtUPZT5anDwvcPnrEz6e6hskrEEKG9Qi%2BYvz2UJm%2FFwvVSydFRIlyjWwaIccATYDQ6zj8u6wiI4gIljg1V00RDkYqoKw0W5cAN3WTzsczonIdCTs8lx4QvIPZpdx5IKbAdvehfwmbUBWjgFo9yaW59ysnKdkzGsyBcQ2zIHtK6%2FFCGEj3F22WLQVCCgVMksNxCpiuP%2BAI3g7%2Fq7Kn2rGOEf8FDRqYHtpFW26%2Fi2jhTOpKTRj445XiQvwkAsOCnwCDqlAQBs17mJ%2BtqckBLM2lPDKf1V2FSe4A5vSETXAoiIwxznmxKUVQTE5ljHa6DVXzOpSXclWWL%2FnVAkvreaKhncyF262pjTGb3clmlGZJXYuVezhqLOGwysO7FdYd4tACWsyRLLas9E9UJ2ww%2FYHYvgY6pgGbcArw7AxCtIuq%2BUErG3%2Ftu4FqbxLEIfWZyIgjWcCMOKfENVH64g45Xy%2FytNMUuqt%2BLnG68y6TKwWcCBIi%2BpXCVm9L1SaSk6aUWq9Pe7CS7AcQqNSiyKqJ%2FhLKTMaYVB0zSTr1hCMDIjeAkTXsnJ%2FSV8SnWNy%2BXFjvaKdUUPq8EByo%2BZiIL2Iazge5WanLMTefD0EoOkO4FzjA77%2F2OvzZD1jDhllY&X-Amz-Signature=46435d851cdc3bbb43f20566df7c59830162e553547e806cb42c7fbd3cd57d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITQU5G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWHRaUm6aDiudZvtmrM8gqAB2ncokksYEPQjCAAjH6AiBLqOK1ZUYQNbgGvpHkKg0Pp51096eZa4Ntg79Z8t77gCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMzkeYbPJsYTnhgaqKKtwDBwu%2FZALBsOFmnASH7yFsDFpzO%2F8awGTA%2BAswYa3TG2yCzJHlBPhglaPOUaWzCTMGPauL8keiWB51za6zYED8GLNytt53zsqKijWFO%2BE0IKOberc7lCZwQ3C60rXdl2aRekn2uc1L4xSmLq5VixQ5kGxH0I%2BlGNvOApWeF71d4sNVjD%2FKkbzFYFBwymmgOZv3r4u%2F1DT23OgcA1O13VR4dJtngpz%2BWwM1kYwIpybVeqeQtUPZT5anDwvcPnrEz6e6hskrEEKG9Qi%2BYvz2UJm%2FFwvVSydFRIlyjWwaIccATYDQ6zj8u6wiI4gIljg1V00RDkYqoKw0W5cAN3WTzsczonIdCTs8lx4QvIPZpdx5IKbAdvehfwmbUBWjgFo9yaW59ysnKdkzGsyBcQ2zIHtK6%2FFCGEj3F22WLQVCCgVMksNxCpiuP%2BAI3g7%2Fq7Kn2rGOEf8FDRqYHtpFW26%2Fi2jhTOpKTRj445XiQvwkAsOCnwCDqlAQBs17mJ%2BtqckBLM2lPDKf1V2FSe4A5vSETXAoiIwxznmxKUVQTE5ljHa6DVXzOpSXclWWL%2FnVAkvreaKhncyF262pjTGb3clmlGZJXYuVezhqLOGwysO7FdYd4tACWsyRLLas9E9UJ2ww%2FYHYvgY6pgGbcArw7AxCtIuq%2BUErG3%2Ftu4FqbxLEIfWZyIgjWcCMOKfENVH64g45Xy%2FytNMUuqt%2BLnG68y6TKwWcCBIi%2BpXCVm9L1SaSk6aUWq9Pe7CS7AcQqNSiyKqJ%2FhLKTMaYVB0zSTr1hCMDIjeAkTXsnJ%2FSV8SnWNy%2BXFjvaKdUUPq8EByo%2BZiIL2Iazge5WanLMTefD0EoOkO4FzjA77%2F2OvzZD1jDhllY&X-Amz-Signature=36464c64d4393c63119c22ee42c81b41ae52eb02a84db1de0f96aa0cca9483bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITQU5G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWHRaUm6aDiudZvtmrM8gqAB2ncokksYEPQjCAAjH6AiBLqOK1ZUYQNbgGvpHkKg0Pp51096eZa4Ntg79Z8t77gCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMzkeYbPJsYTnhgaqKKtwDBwu%2FZALBsOFmnASH7yFsDFpzO%2F8awGTA%2BAswYa3TG2yCzJHlBPhglaPOUaWzCTMGPauL8keiWB51za6zYED8GLNytt53zsqKijWFO%2BE0IKOberc7lCZwQ3C60rXdl2aRekn2uc1L4xSmLq5VixQ5kGxH0I%2BlGNvOApWeF71d4sNVjD%2FKkbzFYFBwymmgOZv3r4u%2F1DT23OgcA1O13VR4dJtngpz%2BWwM1kYwIpybVeqeQtUPZT5anDwvcPnrEz6e6hskrEEKG9Qi%2BYvz2UJm%2FFwvVSydFRIlyjWwaIccATYDQ6zj8u6wiI4gIljg1V00RDkYqoKw0W5cAN3WTzsczonIdCTs8lx4QvIPZpdx5IKbAdvehfwmbUBWjgFo9yaW59ysnKdkzGsyBcQ2zIHtK6%2FFCGEj3F22WLQVCCgVMksNxCpiuP%2BAI3g7%2Fq7Kn2rGOEf8FDRqYHtpFW26%2Fi2jhTOpKTRj445XiQvwkAsOCnwCDqlAQBs17mJ%2BtqckBLM2lPDKf1V2FSe4A5vSETXAoiIwxznmxKUVQTE5ljHa6DVXzOpSXclWWL%2FnVAkvreaKhncyF262pjTGb3clmlGZJXYuVezhqLOGwysO7FdYd4tACWsyRLLas9E9UJ2ww%2FYHYvgY6pgGbcArw7AxCtIuq%2BUErG3%2Ftu4FqbxLEIfWZyIgjWcCMOKfENVH64g45Xy%2FytNMUuqt%2BLnG68y6TKwWcCBIi%2BpXCVm9L1SaSk6aUWq9Pe7CS7AcQqNSiyKqJ%2FhLKTMaYVB0zSTr1hCMDIjeAkTXsnJ%2FSV8SnWNy%2BXFjvaKdUUPq8EByo%2BZiIL2Iazge5WanLMTefD0EoOkO4FzjA77%2F2OvzZD1jDhllY&X-Amz-Signature=72fb1dfd2793788f2d65992a750dfdf67946481ce200dc7524d03595635b0e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITQU5G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWHRaUm6aDiudZvtmrM8gqAB2ncokksYEPQjCAAjH6AiBLqOK1ZUYQNbgGvpHkKg0Pp51096eZa4Ntg79Z8t77gCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMzkeYbPJsYTnhgaqKKtwDBwu%2FZALBsOFmnASH7yFsDFpzO%2F8awGTA%2BAswYa3TG2yCzJHlBPhglaPOUaWzCTMGPauL8keiWB51za6zYED8GLNytt53zsqKijWFO%2BE0IKOberc7lCZwQ3C60rXdl2aRekn2uc1L4xSmLq5VixQ5kGxH0I%2BlGNvOApWeF71d4sNVjD%2FKkbzFYFBwymmgOZv3r4u%2F1DT23OgcA1O13VR4dJtngpz%2BWwM1kYwIpybVeqeQtUPZT5anDwvcPnrEz6e6hskrEEKG9Qi%2BYvz2UJm%2FFwvVSydFRIlyjWwaIccATYDQ6zj8u6wiI4gIljg1V00RDkYqoKw0W5cAN3WTzsczonIdCTs8lx4QvIPZpdx5IKbAdvehfwmbUBWjgFo9yaW59ysnKdkzGsyBcQ2zIHtK6%2FFCGEj3F22WLQVCCgVMksNxCpiuP%2BAI3g7%2Fq7Kn2rGOEf8FDRqYHtpFW26%2Fi2jhTOpKTRj445XiQvwkAsOCnwCDqlAQBs17mJ%2BtqckBLM2lPDKf1V2FSe4A5vSETXAoiIwxznmxKUVQTE5ljHa6DVXzOpSXclWWL%2FnVAkvreaKhncyF262pjTGb3clmlGZJXYuVezhqLOGwysO7FdYd4tACWsyRLLas9E9UJ2ww%2FYHYvgY6pgGbcArw7AxCtIuq%2BUErG3%2Ftu4FqbxLEIfWZyIgjWcCMOKfENVH64g45Xy%2FytNMUuqt%2BLnG68y6TKwWcCBIi%2BpXCVm9L1SaSk6aUWq9Pe7CS7AcQqNSiyKqJ%2FhLKTMaYVB0zSTr1hCMDIjeAkTXsnJ%2FSV8SnWNy%2BXFjvaKdUUPq8EByo%2BZiIL2Iazge5WanLMTefD0EoOkO4FzjA77%2F2OvzZD1jDhllY&X-Amz-Signature=5c8e92c4faf6d1d20acdeaef6f5b1a93c8197cbe7da851848d388e7b640e8951&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITQU5G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWHRaUm6aDiudZvtmrM8gqAB2ncokksYEPQjCAAjH6AiBLqOK1ZUYQNbgGvpHkKg0Pp51096eZa4Ntg79Z8t77gCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMzkeYbPJsYTnhgaqKKtwDBwu%2FZALBsOFmnASH7yFsDFpzO%2F8awGTA%2BAswYa3TG2yCzJHlBPhglaPOUaWzCTMGPauL8keiWB51za6zYED8GLNytt53zsqKijWFO%2BE0IKOberc7lCZwQ3C60rXdl2aRekn2uc1L4xSmLq5VixQ5kGxH0I%2BlGNvOApWeF71d4sNVjD%2FKkbzFYFBwymmgOZv3r4u%2F1DT23OgcA1O13VR4dJtngpz%2BWwM1kYwIpybVeqeQtUPZT5anDwvcPnrEz6e6hskrEEKG9Qi%2BYvz2UJm%2FFwvVSydFRIlyjWwaIccATYDQ6zj8u6wiI4gIljg1V00RDkYqoKw0W5cAN3WTzsczonIdCTs8lx4QvIPZpdx5IKbAdvehfwmbUBWjgFo9yaW59ysnKdkzGsyBcQ2zIHtK6%2FFCGEj3F22WLQVCCgVMksNxCpiuP%2BAI3g7%2Fq7Kn2rGOEf8FDRqYHtpFW26%2Fi2jhTOpKTRj445XiQvwkAsOCnwCDqlAQBs17mJ%2BtqckBLM2lPDKf1V2FSe4A5vSETXAoiIwxznmxKUVQTE5ljHa6DVXzOpSXclWWL%2FnVAkvreaKhncyF262pjTGb3clmlGZJXYuVezhqLOGwysO7FdYd4tACWsyRLLas9E9UJ2ww%2FYHYvgY6pgGbcArw7AxCtIuq%2BUErG3%2Ftu4FqbxLEIfWZyIgjWcCMOKfENVH64g45Xy%2FytNMUuqt%2BLnG68y6TKwWcCBIi%2BpXCVm9L1SaSk6aUWq9Pe7CS7AcQqNSiyKqJ%2FhLKTMaYVB0zSTr1hCMDIjeAkTXsnJ%2FSV8SnWNy%2BXFjvaKdUUPq8EByo%2BZiIL2Iazge5WanLMTefD0EoOkO4FzjA77%2F2OvzZD1jDhllY&X-Amz-Signature=e5d7342a2077fde03c2bbfc7732c5b38d87bc72877e9b1132a6c99430c778393&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KITQU5G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FWHRaUm6aDiudZvtmrM8gqAB2ncokksYEPQjCAAjH6AiBLqOK1ZUYQNbgGvpHkKg0Pp51096eZa4Ntg79Z8t77gCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMzkeYbPJsYTnhgaqKKtwDBwu%2FZALBsOFmnASH7yFsDFpzO%2F8awGTA%2BAswYa3TG2yCzJHlBPhglaPOUaWzCTMGPauL8keiWB51za6zYED8GLNytt53zsqKijWFO%2BE0IKOberc7lCZwQ3C60rXdl2aRekn2uc1L4xSmLq5VixQ5kGxH0I%2BlGNvOApWeF71d4sNVjD%2FKkbzFYFBwymmgOZv3r4u%2F1DT23OgcA1O13VR4dJtngpz%2BWwM1kYwIpybVeqeQtUPZT5anDwvcPnrEz6e6hskrEEKG9Qi%2BYvz2UJm%2FFwvVSydFRIlyjWwaIccATYDQ6zj8u6wiI4gIljg1V00RDkYqoKw0W5cAN3WTzsczonIdCTs8lx4QvIPZpdx5IKbAdvehfwmbUBWjgFo9yaW59ysnKdkzGsyBcQ2zIHtK6%2FFCGEj3F22WLQVCCgVMksNxCpiuP%2BAI3g7%2Fq7Kn2rGOEf8FDRqYHtpFW26%2Fi2jhTOpKTRj445XiQvwkAsOCnwCDqlAQBs17mJ%2BtqckBLM2lPDKf1V2FSe4A5vSETXAoiIwxznmxKUVQTE5ljHa6DVXzOpSXclWWL%2FnVAkvreaKhncyF262pjTGb3clmlGZJXYuVezhqLOGwysO7FdYd4tACWsyRLLas9E9UJ2ww%2FYHYvgY6pgGbcArw7AxCtIuq%2BUErG3%2Ftu4FqbxLEIfWZyIgjWcCMOKfENVH64g45Xy%2FytNMUuqt%2BLnG68y6TKwWcCBIi%2BpXCVm9L1SaSk6aUWq9Pe7CS7AcQqNSiyKqJ%2FhLKTMaYVB0zSTr1hCMDIjeAkTXsnJ%2FSV8SnWNy%2BXFjvaKdUUPq8EByo%2BZiIL2Iazge5WanLMTefD0EoOkO4FzjA77%2F2OvzZD1jDhllY&X-Amz-Signature=501a5dd71452afa163719a1e3911688aa4dcd03498e3dc2dd24ff4678b145541&X-Amz-SignedHeaders=host&x-id=GetObject)
