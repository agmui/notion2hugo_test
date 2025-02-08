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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSHUIUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6NY5IIes73hxVIESwbVolmZw%2FPn6dSGSuBPs8RSEqZgIhAK%2BBIS64dylVbOKAkPzQdnN3bObj4Ace1ms38pmWS4NoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCajrNf7HVmEbKr5kq3AOSb0zmMtqWb89ph9oHw7Y%2BA0eWLTOALhksJS%2BOfA7Zc6NXKGzYRlWtPHJpk66333JTuQTE%2ByR%2BkNQps68Q5azEtBbCEvN0saLRklEoLyXV%2FLx3egRGhvnihGO%2FPrqY5fKk7fPiNqx5oVSa9lS6u2Z87wyJm5flnjFslaSkdJ6OSdM%2FKwM49eNcprvtVwP8dkN0TW9u9sYtRpcZunqGjX8j1xLqCJDY1Lj4VEUyX8U9szKoJqtKeyrXoyyoF1LYWf6%2BSzCG4PfQXC%2FapWGxMIMWBKAsog1DfKXcotSWNfDSiiPumxpbZm8ddk7fF6e1HkZJ9E3nFaGJNjqMb%2FOPwDt9mXRpgSd4W36Ixb6IQLgz20h4RkIDsp060ESb849RvuBi0EI7E%2FlNAfixJyCYzvYVwIvMBOLbtSxVabGfdhla1nuNGBOzo9oPM4dZ%2FukNaKCeXN1x5INfz%2F1prqKTc8kQ8cEeHBpoWBY3LmvDQdk0359Rw%2FNiBQwHtkAN9usloqMCKvfeRYXWeeNVSsza%2BnkSj0lopE1nqYyBFwfzKIggF8YIyKo5QRvAXEwDj2E6zdJmbsHi1UarRAjbSTs8nSykxdbjEa%2BXgmbNaEKZ%2BpJoFZincffRwN4TFYd3VDCbhp29BjqkAfqX%2FHtMyjoBTS2FXb2OSMuzWk8vzf8XGenmbPx1GlG2Qgwa3bnbuGvb4kcaE6jW41Qj5aUjbmw7dpkGZQxm1X6v7%2BbHbK1SV%2BA8bxguMcLgPXvV4Iva9rW%2BednTUTZkoQfNsI2kadBVHjS8v7wXZ6WOuufK3%2BioHscM7kZsfj8kqYDcnynMnf52zTPqDzlCtzC4eBi9KnI3ZAMVSZBbCHV1PyVk&X-Amz-Signature=ba16477a166b3c81a4f2128de9d0cd68eb8879687f7da101cecdf40c6575bc48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSHUIUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6NY5IIes73hxVIESwbVolmZw%2FPn6dSGSuBPs8RSEqZgIhAK%2BBIS64dylVbOKAkPzQdnN3bObj4Ace1ms38pmWS4NoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCajrNf7HVmEbKr5kq3AOSb0zmMtqWb89ph9oHw7Y%2BA0eWLTOALhksJS%2BOfA7Zc6NXKGzYRlWtPHJpk66333JTuQTE%2ByR%2BkNQps68Q5azEtBbCEvN0saLRklEoLyXV%2FLx3egRGhvnihGO%2FPrqY5fKk7fPiNqx5oVSa9lS6u2Z87wyJm5flnjFslaSkdJ6OSdM%2FKwM49eNcprvtVwP8dkN0TW9u9sYtRpcZunqGjX8j1xLqCJDY1Lj4VEUyX8U9szKoJqtKeyrXoyyoF1LYWf6%2BSzCG4PfQXC%2FapWGxMIMWBKAsog1DfKXcotSWNfDSiiPumxpbZm8ddk7fF6e1HkZJ9E3nFaGJNjqMb%2FOPwDt9mXRpgSd4W36Ixb6IQLgz20h4RkIDsp060ESb849RvuBi0EI7E%2FlNAfixJyCYzvYVwIvMBOLbtSxVabGfdhla1nuNGBOzo9oPM4dZ%2FukNaKCeXN1x5INfz%2F1prqKTc8kQ8cEeHBpoWBY3LmvDQdk0359Rw%2FNiBQwHtkAN9usloqMCKvfeRYXWeeNVSsza%2BnkSj0lopE1nqYyBFwfzKIggF8YIyKo5QRvAXEwDj2E6zdJmbsHi1UarRAjbSTs8nSykxdbjEa%2BXgmbNaEKZ%2BpJoFZincffRwN4TFYd3VDCbhp29BjqkAfqX%2FHtMyjoBTS2FXb2OSMuzWk8vzf8XGenmbPx1GlG2Qgwa3bnbuGvb4kcaE6jW41Qj5aUjbmw7dpkGZQxm1X6v7%2BbHbK1SV%2BA8bxguMcLgPXvV4Iva9rW%2BednTUTZkoQfNsI2kadBVHjS8v7wXZ6WOuufK3%2BioHscM7kZsfj8kqYDcnynMnf52zTPqDzlCtzC4eBi9KnI3ZAMVSZBbCHV1PyVk&X-Amz-Signature=2dc82d166f4a57ed49368f04601c7f0540046be49deee59c4979909574d77190&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSHUIUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6NY5IIes73hxVIESwbVolmZw%2FPn6dSGSuBPs8RSEqZgIhAK%2BBIS64dylVbOKAkPzQdnN3bObj4Ace1ms38pmWS4NoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCajrNf7HVmEbKr5kq3AOSb0zmMtqWb89ph9oHw7Y%2BA0eWLTOALhksJS%2BOfA7Zc6NXKGzYRlWtPHJpk66333JTuQTE%2ByR%2BkNQps68Q5azEtBbCEvN0saLRklEoLyXV%2FLx3egRGhvnihGO%2FPrqY5fKk7fPiNqx5oVSa9lS6u2Z87wyJm5flnjFslaSkdJ6OSdM%2FKwM49eNcprvtVwP8dkN0TW9u9sYtRpcZunqGjX8j1xLqCJDY1Lj4VEUyX8U9szKoJqtKeyrXoyyoF1LYWf6%2BSzCG4PfQXC%2FapWGxMIMWBKAsog1DfKXcotSWNfDSiiPumxpbZm8ddk7fF6e1HkZJ9E3nFaGJNjqMb%2FOPwDt9mXRpgSd4W36Ixb6IQLgz20h4RkIDsp060ESb849RvuBi0EI7E%2FlNAfixJyCYzvYVwIvMBOLbtSxVabGfdhla1nuNGBOzo9oPM4dZ%2FukNaKCeXN1x5INfz%2F1prqKTc8kQ8cEeHBpoWBY3LmvDQdk0359Rw%2FNiBQwHtkAN9usloqMCKvfeRYXWeeNVSsza%2BnkSj0lopE1nqYyBFwfzKIggF8YIyKo5QRvAXEwDj2E6zdJmbsHi1UarRAjbSTs8nSykxdbjEa%2BXgmbNaEKZ%2BpJoFZincffRwN4TFYd3VDCbhp29BjqkAfqX%2FHtMyjoBTS2FXb2OSMuzWk8vzf8XGenmbPx1GlG2Qgwa3bnbuGvb4kcaE6jW41Qj5aUjbmw7dpkGZQxm1X6v7%2BbHbK1SV%2BA8bxguMcLgPXvV4Iva9rW%2BednTUTZkoQfNsI2kadBVHjS8v7wXZ6WOuufK3%2BioHscM7kZsfj8kqYDcnynMnf52zTPqDzlCtzC4eBi9KnI3ZAMVSZBbCHV1PyVk&X-Amz-Signature=ddbeb7d2ff10661ca23b7bf97900d6c681a8ae35e77b2fe85155097065d62260&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSHUIUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6NY5IIes73hxVIESwbVolmZw%2FPn6dSGSuBPs8RSEqZgIhAK%2BBIS64dylVbOKAkPzQdnN3bObj4Ace1ms38pmWS4NoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCajrNf7HVmEbKr5kq3AOSb0zmMtqWb89ph9oHw7Y%2BA0eWLTOALhksJS%2BOfA7Zc6NXKGzYRlWtPHJpk66333JTuQTE%2ByR%2BkNQps68Q5azEtBbCEvN0saLRklEoLyXV%2FLx3egRGhvnihGO%2FPrqY5fKk7fPiNqx5oVSa9lS6u2Z87wyJm5flnjFslaSkdJ6OSdM%2FKwM49eNcprvtVwP8dkN0TW9u9sYtRpcZunqGjX8j1xLqCJDY1Lj4VEUyX8U9szKoJqtKeyrXoyyoF1LYWf6%2BSzCG4PfQXC%2FapWGxMIMWBKAsog1DfKXcotSWNfDSiiPumxpbZm8ddk7fF6e1HkZJ9E3nFaGJNjqMb%2FOPwDt9mXRpgSd4W36Ixb6IQLgz20h4RkIDsp060ESb849RvuBi0EI7E%2FlNAfixJyCYzvYVwIvMBOLbtSxVabGfdhla1nuNGBOzo9oPM4dZ%2FukNaKCeXN1x5INfz%2F1prqKTc8kQ8cEeHBpoWBY3LmvDQdk0359Rw%2FNiBQwHtkAN9usloqMCKvfeRYXWeeNVSsza%2BnkSj0lopE1nqYyBFwfzKIggF8YIyKo5QRvAXEwDj2E6zdJmbsHi1UarRAjbSTs8nSykxdbjEa%2BXgmbNaEKZ%2BpJoFZincffRwN4TFYd3VDCbhp29BjqkAfqX%2FHtMyjoBTS2FXb2OSMuzWk8vzf8XGenmbPx1GlG2Qgwa3bnbuGvb4kcaE6jW41Qj5aUjbmw7dpkGZQxm1X6v7%2BbHbK1SV%2BA8bxguMcLgPXvV4Iva9rW%2BednTUTZkoQfNsI2kadBVHjS8v7wXZ6WOuufK3%2BioHscM7kZsfj8kqYDcnynMnf52zTPqDzlCtzC4eBi9KnI3ZAMVSZBbCHV1PyVk&X-Amz-Signature=0466806f2a9b370a945bef7333054dfb819e10092e12777af2b3cd2263892caa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSHUIUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6NY5IIes73hxVIESwbVolmZw%2FPn6dSGSuBPs8RSEqZgIhAK%2BBIS64dylVbOKAkPzQdnN3bObj4Ace1ms38pmWS4NoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCajrNf7HVmEbKr5kq3AOSb0zmMtqWb89ph9oHw7Y%2BA0eWLTOALhksJS%2BOfA7Zc6NXKGzYRlWtPHJpk66333JTuQTE%2ByR%2BkNQps68Q5azEtBbCEvN0saLRklEoLyXV%2FLx3egRGhvnihGO%2FPrqY5fKk7fPiNqx5oVSa9lS6u2Z87wyJm5flnjFslaSkdJ6OSdM%2FKwM49eNcprvtVwP8dkN0TW9u9sYtRpcZunqGjX8j1xLqCJDY1Lj4VEUyX8U9szKoJqtKeyrXoyyoF1LYWf6%2BSzCG4PfQXC%2FapWGxMIMWBKAsog1DfKXcotSWNfDSiiPumxpbZm8ddk7fF6e1HkZJ9E3nFaGJNjqMb%2FOPwDt9mXRpgSd4W36Ixb6IQLgz20h4RkIDsp060ESb849RvuBi0EI7E%2FlNAfixJyCYzvYVwIvMBOLbtSxVabGfdhla1nuNGBOzo9oPM4dZ%2FukNaKCeXN1x5INfz%2F1prqKTc8kQ8cEeHBpoWBY3LmvDQdk0359Rw%2FNiBQwHtkAN9usloqMCKvfeRYXWeeNVSsza%2BnkSj0lopE1nqYyBFwfzKIggF8YIyKo5QRvAXEwDj2E6zdJmbsHi1UarRAjbSTs8nSykxdbjEa%2BXgmbNaEKZ%2BpJoFZincffRwN4TFYd3VDCbhp29BjqkAfqX%2FHtMyjoBTS2FXb2OSMuzWk8vzf8XGenmbPx1GlG2Qgwa3bnbuGvb4kcaE6jW41Qj5aUjbmw7dpkGZQxm1X6v7%2BbHbK1SV%2BA8bxguMcLgPXvV4Iva9rW%2BednTUTZkoQfNsI2kadBVHjS8v7wXZ6WOuufK3%2BioHscM7kZsfj8kqYDcnynMnf52zTPqDzlCtzC4eBi9KnI3ZAMVSZBbCHV1PyVk&X-Amz-Signature=da7d58a24bc936bb29d3741f0474a380987fecc9c11e0a20465a56bbf8d6c032&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSHUIUF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6NY5IIes73hxVIESwbVolmZw%2FPn6dSGSuBPs8RSEqZgIhAK%2BBIS64dylVbOKAkPzQdnN3bObj4Ace1ms38pmWS4NoKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCajrNf7HVmEbKr5kq3AOSb0zmMtqWb89ph9oHw7Y%2BA0eWLTOALhksJS%2BOfA7Zc6NXKGzYRlWtPHJpk66333JTuQTE%2ByR%2BkNQps68Q5azEtBbCEvN0saLRklEoLyXV%2FLx3egRGhvnihGO%2FPrqY5fKk7fPiNqx5oVSa9lS6u2Z87wyJm5flnjFslaSkdJ6OSdM%2FKwM49eNcprvtVwP8dkN0TW9u9sYtRpcZunqGjX8j1xLqCJDY1Lj4VEUyX8U9szKoJqtKeyrXoyyoF1LYWf6%2BSzCG4PfQXC%2FapWGxMIMWBKAsog1DfKXcotSWNfDSiiPumxpbZm8ddk7fF6e1HkZJ9E3nFaGJNjqMb%2FOPwDt9mXRpgSd4W36Ixb6IQLgz20h4RkIDsp060ESb849RvuBi0EI7E%2FlNAfixJyCYzvYVwIvMBOLbtSxVabGfdhla1nuNGBOzo9oPM4dZ%2FukNaKCeXN1x5INfz%2F1prqKTc8kQ8cEeHBpoWBY3LmvDQdk0359Rw%2FNiBQwHtkAN9usloqMCKvfeRYXWeeNVSsza%2BnkSj0lopE1nqYyBFwfzKIggF8YIyKo5QRvAXEwDj2E6zdJmbsHi1UarRAjbSTs8nSykxdbjEa%2BXgmbNaEKZ%2BpJoFZincffRwN4TFYd3VDCbhp29BjqkAfqX%2FHtMyjoBTS2FXb2OSMuzWk8vzf8XGenmbPx1GlG2Qgwa3bnbuGvb4kcaE6jW41Qj5aUjbmw7dpkGZQxm1X6v7%2BbHbK1SV%2BA8bxguMcLgPXvV4Iva9rW%2BednTUTZkoQfNsI2kadBVHjS8v7wXZ6WOuufK3%2BioHscM7kZsfj8kqYDcnynMnf52zTPqDzlCtzC4eBi9KnI3ZAMVSZBbCHV1PyVk&X-Amz-Signature=58da7b755c44168241f31e390b31ee0e7cce3a585035dd6f94775573d58487e3&X-Amz-SignedHeaders=host&x-id=GetObject)
