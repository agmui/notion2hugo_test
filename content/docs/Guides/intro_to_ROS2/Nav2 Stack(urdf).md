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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDVGUD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIChYDOGo2BgiQQRcaG%2B8G8YHsF6Hscw3muSzaTfl0p%2F%2BAiBHoX960Q4o9PZtnqDqbPTjhaPZhQMdS30zvvuPkB1mYSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70IK7nddqrut3TrfKtwDZ7EoMei6Ag2RVQZWf70IPvZX%2FEAddFRslYPBoq%2FNZkkmZwaT1Fo75U2z4oISDCnTlchT4dNdiKasjEP199YeZBl3d5UHxLFMYgoUnm9ZdMQ8iDVeN0gE8ba4mKWHMHInjBW3gwZgaiDEmEkEyedrBfiBhfHh4bVSC%2FSL1F8RIafEVuNIUEhhYfpvBRKPIntTLgyE3TVIdd%2FJZJu0LsVI3%2FEOb8RHeSf53ROrbly2hrhVXgRiFz%2BYQFLIFKOY5gUsX%2BpetumnkEWbNtZLwAE3IE%2FyoC0uQZPIgLH%2FFkd5%2BqAvcY5OzNWXgz4Bw1gkifnXv6lYwf%2BSbB5TuBSc1Fo7UGHzvsAY1x7K9THCzSedSPJhsio42ur2oVVUHfUvuevmTaBn5OOWWHFa64ScK2Dnk3aiPG6RFGkiSWBmSFhtOucRNE7XBodZ%2BzyjvSbFZx0LGNdsMPvBVzqH%2FkQYvCxPLIlsijAQsEbGT67HuUHuKniv8m9NzOwqrodUQBRItHjHhtux9MrkVa%2Fq7%2Byr4316JaRdWYtYR2eW8PPxFwJu4j5o0KCARbavoT1PKEndtAnaOCampvqft8%2FwIEOSWFlJQmKXLQmGc%2B7wnnMXpLDsCqMCA2DUz27wUbkTM%2F4w57LlvAY6pgEO0RgUUZYPWlpPudv%2BOz5G9SXmoLb3aC%2BvfAjgSrc3T5N92Sa3aDdKWqckL2bDFTKwIaKldUStajrpBE0PiNtRcuqMDk1BdCIkG4BkbqPkOqKvdAZEguTFV1%2FyrCYEf%2BpWA6eCwNpkos9atJgdWCFZ4LXK5fdzNh97rYVGzwLeOD2cZbJwo%2BeuybZhN%2Bgb%2Ba3ygZuXVIpv4PGHK59wvJSBo1lMPqUN&X-Amz-Signature=f348d0e8239743ec1d302761c93657ce8a50b5de6252e2e10315f5ca44c106ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDVGUD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIChYDOGo2BgiQQRcaG%2B8G8YHsF6Hscw3muSzaTfl0p%2F%2BAiBHoX960Q4o9PZtnqDqbPTjhaPZhQMdS30zvvuPkB1mYSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70IK7nddqrut3TrfKtwDZ7EoMei6Ag2RVQZWf70IPvZX%2FEAddFRslYPBoq%2FNZkkmZwaT1Fo75U2z4oISDCnTlchT4dNdiKasjEP199YeZBl3d5UHxLFMYgoUnm9ZdMQ8iDVeN0gE8ba4mKWHMHInjBW3gwZgaiDEmEkEyedrBfiBhfHh4bVSC%2FSL1F8RIafEVuNIUEhhYfpvBRKPIntTLgyE3TVIdd%2FJZJu0LsVI3%2FEOb8RHeSf53ROrbly2hrhVXgRiFz%2BYQFLIFKOY5gUsX%2BpetumnkEWbNtZLwAE3IE%2FyoC0uQZPIgLH%2FFkd5%2BqAvcY5OzNWXgz4Bw1gkifnXv6lYwf%2BSbB5TuBSc1Fo7UGHzvsAY1x7K9THCzSedSPJhsio42ur2oVVUHfUvuevmTaBn5OOWWHFa64ScK2Dnk3aiPG6RFGkiSWBmSFhtOucRNE7XBodZ%2BzyjvSbFZx0LGNdsMPvBVzqH%2FkQYvCxPLIlsijAQsEbGT67HuUHuKniv8m9NzOwqrodUQBRItHjHhtux9MrkVa%2Fq7%2Byr4316JaRdWYtYR2eW8PPxFwJu4j5o0KCARbavoT1PKEndtAnaOCampvqft8%2FwIEOSWFlJQmKXLQmGc%2B7wnnMXpLDsCqMCA2DUz27wUbkTM%2F4w57LlvAY6pgEO0RgUUZYPWlpPudv%2BOz5G9SXmoLb3aC%2BvfAjgSrc3T5N92Sa3aDdKWqckL2bDFTKwIaKldUStajrpBE0PiNtRcuqMDk1BdCIkG4BkbqPkOqKvdAZEguTFV1%2FyrCYEf%2BpWA6eCwNpkos9atJgdWCFZ4LXK5fdzNh97rYVGzwLeOD2cZbJwo%2BeuybZhN%2Bgb%2Ba3ygZuXVIpv4PGHK59wvJSBo1lMPqUN&X-Amz-Signature=ebc9f5ac8bc54811c565ab43d63efc9dacc66826f57a9de8f323ca218b535c09&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDVGUD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIChYDOGo2BgiQQRcaG%2B8G8YHsF6Hscw3muSzaTfl0p%2F%2BAiBHoX960Q4o9PZtnqDqbPTjhaPZhQMdS30zvvuPkB1mYSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70IK7nddqrut3TrfKtwDZ7EoMei6Ag2RVQZWf70IPvZX%2FEAddFRslYPBoq%2FNZkkmZwaT1Fo75U2z4oISDCnTlchT4dNdiKasjEP199YeZBl3d5UHxLFMYgoUnm9ZdMQ8iDVeN0gE8ba4mKWHMHInjBW3gwZgaiDEmEkEyedrBfiBhfHh4bVSC%2FSL1F8RIafEVuNIUEhhYfpvBRKPIntTLgyE3TVIdd%2FJZJu0LsVI3%2FEOb8RHeSf53ROrbly2hrhVXgRiFz%2BYQFLIFKOY5gUsX%2BpetumnkEWbNtZLwAE3IE%2FyoC0uQZPIgLH%2FFkd5%2BqAvcY5OzNWXgz4Bw1gkifnXv6lYwf%2BSbB5TuBSc1Fo7UGHzvsAY1x7K9THCzSedSPJhsio42ur2oVVUHfUvuevmTaBn5OOWWHFa64ScK2Dnk3aiPG6RFGkiSWBmSFhtOucRNE7XBodZ%2BzyjvSbFZx0LGNdsMPvBVzqH%2FkQYvCxPLIlsijAQsEbGT67HuUHuKniv8m9NzOwqrodUQBRItHjHhtux9MrkVa%2Fq7%2Byr4316JaRdWYtYR2eW8PPxFwJu4j5o0KCARbavoT1PKEndtAnaOCampvqft8%2FwIEOSWFlJQmKXLQmGc%2B7wnnMXpLDsCqMCA2DUz27wUbkTM%2F4w57LlvAY6pgEO0RgUUZYPWlpPudv%2BOz5G9SXmoLb3aC%2BvfAjgSrc3T5N92Sa3aDdKWqckL2bDFTKwIaKldUStajrpBE0PiNtRcuqMDk1BdCIkG4BkbqPkOqKvdAZEguTFV1%2FyrCYEf%2BpWA6eCwNpkos9atJgdWCFZ4LXK5fdzNh97rYVGzwLeOD2cZbJwo%2BeuybZhN%2Bgb%2Ba3ygZuXVIpv4PGHK59wvJSBo1lMPqUN&X-Amz-Signature=7adeaa845985f2b3a5f953aacd8fa83ff243edbc7c38e373ca6dfaa3728c0705&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDVGUD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIChYDOGo2BgiQQRcaG%2B8G8YHsF6Hscw3muSzaTfl0p%2F%2BAiBHoX960Q4o9PZtnqDqbPTjhaPZhQMdS30zvvuPkB1mYSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70IK7nddqrut3TrfKtwDZ7EoMei6Ag2RVQZWf70IPvZX%2FEAddFRslYPBoq%2FNZkkmZwaT1Fo75U2z4oISDCnTlchT4dNdiKasjEP199YeZBl3d5UHxLFMYgoUnm9ZdMQ8iDVeN0gE8ba4mKWHMHInjBW3gwZgaiDEmEkEyedrBfiBhfHh4bVSC%2FSL1F8RIafEVuNIUEhhYfpvBRKPIntTLgyE3TVIdd%2FJZJu0LsVI3%2FEOb8RHeSf53ROrbly2hrhVXgRiFz%2BYQFLIFKOY5gUsX%2BpetumnkEWbNtZLwAE3IE%2FyoC0uQZPIgLH%2FFkd5%2BqAvcY5OzNWXgz4Bw1gkifnXv6lYwf%2BSbB5TuBSc1Fo7UGHzvsAY1x7K9THCzSedSPJhsio42ur2oVVUHfUvuevmTaBn5OOWWHFa64ScK2Dnk3aiPG6RFGkiSWBmSFhtOucRNE7XBodZ%2BzyjvSbFZx0LGNdsMPvBVzqH%2FkQYvCxPLIlsijAQsEbGT67HuUHuKniv8m9NzOwqrodUQBRItHjHhtux9MrkVa%2Fq7%2Byr4316JaRdWYtYR2eW8PPxFwJu4j5o0KCARbavoT1PKEndtAnaOCampvqft8%2FwIEOSWFlJQmKXLQmGc%2B7wnnMXpLDsCqMCA2DUz27wUbkTM%2F4w57LlvAY6pgEO0RgUUZYPWlpPudv%2BOz5G9SXmoLb3aC%2BvfAjgSrc3T5N92Sa3aDdKWqckL2bDFTKwIaKldUStajrpBE0PiNtRcuqMDk1BdCIkG4BkbqPkOqKvdAZEguTFV1%2FyrCYEf%2BpWA6eCwNpkos9atJgdWCFZ4LXK5fdzNh97rYVGzwLeOD2cZbJwo%2BeuybZhN%2Bgb%2Ba3ygZuXVIpv4PGHK59wvJSBo1lMPqUN&X-Amz-Signature=6b3410d0e44febcd63f618d8fb4534fe80e4ee42d6e89b3a73005d526ce40b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDVGUD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIChYDOGo2BgiQQRcaG%2B8G8YHsF6Hscw3muSzaTfl0p%2F%2BAiBHoX960Q4o9PZtnqDqbPTjhaPZhQMdS30zvvuPkB1mYSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70IK7nddqrut3TrfKtwDZ7EoMei6Ag2RVQZWf70IPvZX%2FEAddFRslYPBoq%2FNZkkmZwaT1Fo75U2z4oISDCnTlchT4dNdiKasjEP199YeZBl3d5UHxLFMYgoUnm9ZdMQ8iDVeN0gE8ba4mKWHMHInjBW3gwZgaiDEmEkEyedrBfiBhfHh4bVSC%2FSL1F8RIafEVuNIUEhhYfpvBRKPIntTLgyE3TVIdd%2FJZJu0LsVI3%2FEOb8RHeSf53ROrbly2hrhVXgRiFz%2BYQFLIFKOY5gUsX%2BpetumnkEWbNtZLwAE3IE%2FyoC0uQZPIgLH%2FFkd5%2BqAvcY5OzNWXgz4Bw1gkifnXv6lYwf%2BSbB5TuBSc1Fo7UGHzvsAY1x7K9THCzSedSPJhsio42ur2oVVUHfUvuevmTaBn5OOWWHFa64ScK2Dnk3aiPG6RFGkiSWBmSFhtOucRNE7XBodZ%2BzyjvSbFZx0LGNdsMPvBVzqH%2FkQYvCxPLIlsijAQsEbGT67HuUHuKniv8m9NzOwqrodUQBRItHjHhtux9MrkVa%2Fq7%2Byr4316JaRdWYtYR2eW8PPxFwJu4j5o0KCARbavoT1PKEndtAnaOCampvqft8%2FwIEOSWFlJQmKXLQmGc%2B7wnnMXpLDsCqMCA2DUz27wUbkTM%2F4w57LlvAY6pgEO0RgUUZYPWlpPudv%2BOz5G9SXmoLb3aC%2BvfAjgSrc3T5N92Sa3aDdKWqckL2bDFTKwIaKldUStajrpBE0PiNtRcuqMDk1BdCIkG4BkbqPkOqKvdAZEguTFV1%2FyrCYEf%2BpWA6eCwNpkos9atJgdWCFZ4LXK5fdzNh97rYVGzwLeOD2cZbJwo%2BeuybZhN%2Bgb%2Ba3ygZuXVIpv4PGHK59wvJSBo1lMPqUN&X-Amz-Signature=da5eb92d9453ca58d9e279032de108197d417d8a7dd27cec0b22c919207ebd81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDDVGUD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIChYDOGo2BgiQQRcaG%2B8G8YHsF6Hscw3muSzaTfl0p%2F%2BAiBHoX960Q4o9PZtnqDqbPTjhaPZhQMdS30zvvuPkB1mYSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70IK7nddqrut3TrfKtwDZ7EoMei6Ag2RVQZWf70IPvZX%2FEAddFRslYPBoq%2FNZkkmZwaT1Fo75U2z4oISDCnTlchT4dNdiKasjEP199YeZBl3d5UHxLFMYgoUnm9ZdMQ8iDVeN0gE8ba4mKWHMHInjBW3gwZgaiDEmEkEyedrBfiBhfHh4bVSC%2FSL1F8RIafEVuNIUEhhYfpvBRKPIntTLgyE3TVIdd%2FJZJu0LsVI3%2FEOb8RHeSf53ROrbly2hrhVXgRiFz%2BYQFLIFKOY5gUsX%2BpetumnkEWbNtZLwAE3IE%2FyoC0uQZPIgLH%2FFkd5%2BqAvcY5OzNWXgz4Bw1gkifnXv6lYwf%2BSbB5TuBSc1Fo7UGHzvsAY1x7K9THCzSedSPJhsio42ur2oVVUHfUvuevmTaBn5OOWWHFa64ScK2Dnk3aiPG6RFGkiSWBmSFhtOucRNE7XBodZ%2BzyjvSbFZx0LGNdsMPvBVzqH%2FkQYvCxPLIlsijAQsEbGT67HuUHuKniv8m9NzOwqrodUQBRItHjHhtux9MrkVa%2Fq7%2Byr4316JaRdWYtYR2eW8PPxFwJu4j5o0KCARbavoT1PKEndtAnaOCampvqft8%2FwIEOSWFlJQmKXLQmGc%2B7wnnMXpLDsCqMCA2DUz27wUbkTM%2F4w57LlvAY6pgEO0RgUUZYPWlpPudv%2BOz5G9SXmoLb3aC%2BvfAjgSrc3T5N92Sa3aDdKWqckL2bDFTKwIaKldUStajrpBE0PiNtRcuqMDk1BdCIkG4BkbqPkOqKvdAZEguTFV1%2FyrCYEf%2BpWA6eCwNpkos9atJgdWCFZ4LXK5fdzNh97rYVGzwLeOD2cZbJwo%2BeuybZhN%2Bgb%2Ba3ygZuXVIpv4PGHK59wvJSBo1lMPqUN&X-Amz-Signature=da092094c4d96da1e7163acbbc2d739f0fe836e47d421dd541335b2e4e722b11&X-Amz-SignedHeaders=host&x-id=GetObject)
