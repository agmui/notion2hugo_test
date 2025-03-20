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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHCQZOA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCT8I3fGfxItaJ6Tjjs%2BeN%2F9tcs%2FKI9QgSmrsqdwqoLRgIhAJj7ZSiKwCrc51UmN0MGzmhtaRYl6BAboSx5FsTzyAxhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKXD20dBwg6KPlw4q3ANTEac9%2FczrqVTTafBgumOheOf%2Fa9Y39tJ9i7%2BXTKMHWz%2FsjS06Ttmow6Nqtz2yc44OBlreQhOOd4sz%2FOa1%2B49zXlqI2AOIJ5ikAVPBsVsGI9mDIr7Wj%2FArynsnssZCs6Z1%2FPg3CnWm4yMq8YIFkcDeHRSQj7mnCKKrK4bBPlLupfMxhUcnkf7ALkLX5hqsLyDXKId8MmQYs6%2FEV4xXOQHK%2Frt15%2FgrkdP4krolUWtn%2BkXkgif52MinceqMGhAji2A2swlj5Y6%2FNQng2607k3BGmpedpMxO6Xhn2urfTchWXuy1JQfdSf9CY0Tle5sCosbyQouBSpEUv8zO4AZweCdDGbpdi7uHHlWuG8y7jR3QHFL%2FstNadcfsjUHgL%2BST3qXYiKiUb92iRW%2B1qyzZaxRSsOjjDdwRU3wXTd5%2FcACKQ2mDmkvK2L%2F%2FMld9R5CWPhfKsLHcNXQA0VMB%2BEYp%2BVy7gLj7JfIWB%2Bae%2B%2B8vMASedpPCyERahK5NCnKKp%2B0RU2FhZrZUzVfRRlozqwlvIkEstfNoImwe8TnGNgRMKFw9H85CHYWJIeC%2B7LnsdSnD8YDheS9L2bUUPRs0hu%2FLkcV9h%2FiaSX2lbDwb6Qi1NnT2HaBIvZOXKrkzrmQWKDDjpvK%2BBjqkAfujS95tXLs6eTP0nc6LSiqVGvdO0nZ2rdH%2FDNlBmqYP34M3NwiTZGfEwQjF9RqOYd4DIBhzjiAW4vo5Ws3%2FV2NvY7CNRPmbENDUhyIOPu38lppzSViiumKcNovWcp4x9NHRkNur9lL4xG6qgLc%2BWiux4ZTIIMbzNLStvXB4mWCfo%2FG99UDpW%2FQyAFVOeva%2FP1aoX4RU4IVSVLyyLA4ameff7Gb%2F&X-Amz-Signature=e5171cf1f0e6a29689f53c6b1c61514e7edde6233e9895811762bda1b7ed1ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHCQZOA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCT8I3fGfxItaJ6Tjjs%2BeN%2F9tcs%2FKI9QgSmrsqdwqoLRgIhAJj7ZSiKwCrc51UmN0MGzmhtaRYl6BAboSx5FsTzyAxhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKXD20dBwg6KPlw4q3ANTEac9%2FczrqVTTafBgumOheOf%2Fa9Y39tJ9i7%2BXTKMHWz%2FsjS06Ttmow6Nqtz2yc44OBlreQhOOd4sz%2FOa1%2B49zXlqI2AOIJ5ikAVPBsVsGI9mDIr7Wj%2FArynsnssZCs6Z1%2FPg3CnWm4yMq8YIFkcDeHRSQj7mnCKKrK4bBPlLupfMxhUcnkf7ALkLX5hqsLyDXKId8MmQYs6%2FEV4xXOQHK%2Frt15%2FgrkdP4krolUWtn%2BkXkgif52MinceqMGhAji2A2swlj5Y6%2FNQng2607k3BGmpedpMxO6Xhn2urfTchWXuy1JQfdSf9CY0Tle5sCosbyQouBSpEUv8zO4AZweCdDGbpdi7uHHlWuG8y7jR3QHFL%2FstNadcfsjUHgL%2BST3qXYiKiUb92iRW%2B1qyzZaxRSsOjjDdwRU3wXTd5%2FcACKQ2mDmkvK2L%2F%2FMld9R5CWPhfKsLHcNXQA0VMB%2BEYp%2BVy7gLj7JfIWB%2Bae%2B%2B8vMASedpPCyERahK5NCnKKp%2B0RU2FhZrZUzVfRRlozqwlvIkEstfNoImwe8TnGNgRMKFw9H85CHYWJIeC%2B7LnsdSnD8YDheS9L2bUUPRs0hu%2FLkcV9h%2FiaSX2lbDwb6Qi1NnT2HaBIvZOXKrkzrmQWKDDjpvK%2BBjqkAfujS95tXLs6eTP0nc6LSiqVGvdO0nZ2rdH%2FDNlBmqYP34M3NwiTZGfEwQjF9RqOYd4DIBhzjiAW4vo5Ws3%2FV2NvY7CNRPmbENDUhyIOPu38lppzSViiumKcNovWcp4x9NHRkNur9lL4xG6qgLc%2BWiux4ZTIIMbzNLStvXB4mWCfo%2FG99UDpW%2FQyAFVOeva%2FP1aoX4RU4IVSVLyyLA4ameff7Gb%2F&X-Amz-Signature=c963132adbbe5ab1e54f6db6890ef426b5e479492880ef84f19300204f669596&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHCQZOA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCT8I3fGfxItaJ6Tjjs%2BeN%2F9tcs%2FKI9QgSmrsqdwqoLRgIhAJj7ZSiKwCrc51UmN0MGzmhtaRYl6BAboSx5FsTzyAxhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKXD20dBwg6KPlw4q3ANTEac9%2FczrqVTTafBgumOheOf%2Fa9Y39tJ9i7%2BXTKMHWz%2FsjS06Ttmow6Nqtz2yc44OBlreQhOOd4sz%2FOa1%2B49zXlqI2AOIJ5ikAVPBsVsGI9mDIr7Wj%2FArynsnssZCs6Z1%2FPg3CnWm4yMq8YIFkcDeHRSQj7mnCKKrK4bBPlLupfMxhUcnkf7ALkLX5hqsLyDXKId8MmQYs6%2FEV4xXOQHK%2Frt15%2FgrkdP4krolUWtn%2BkXkgif52MinceqMGhAji2A2swlj5Y6%2FNQng2607k3BGmpedpMxO6Xhn2urfTchWXuy1JQfdSf9CY0Tle5sCosbyQouBSpEUv8zO4AZweCdDGbpdi7uHHlWuG8y7jR3QHFL%2FstNadcfsjUHgL%2BST3qXYiKiUb92iRW%2B1qyzZaxRSsOjjDdwRU3wXTd5%2FcACKQ2mDmkvK2L%2F%2FMld9R5CWPhfKsLHcNXQA0VMB%2BEYp%2BVy7gLj7JfIWB%2Bae%2B%2B8vMASedpPCyERahK5NCnKKp%2B0RU2FhZrZUzVfRRlozqwlvIkEstfNoImwe8TnGNgRMKFw9H85CHYWJIeC%2B7LnsdSnD8YDheS9L2bUUPRs0hu%2FLkcV9h%2FiaSX2lbDwb6Qi1NnT2HaBIvZOXKrkzrmQWKDDjpvK%2BBjqkAfujS95tXLs6eTP0nc6LSiqVGvdO0nZ2rdH%2FDNlBmqYP34M3NwiTZGfEwQjF9RqOYd4DIBhzjiAW4vo5Ws3%2FV2NvY7CNRPmbENDUhyIOPu38lppzSViiumKcNovWcp4x9NHRkNur9lL4xG6qgLc%2BWiux4ZTIIMbzNLStvXB4mWCfo%2FG99UDpW%2FQyAFVOeva%2FP1aoX4RU4IVSVLyyLA4ameff7Gb%2F&X-Amz-Signature=869103275f26c7faee551abbb512ece7e400c504190982bfe1e7b4c1aecd9382&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHCQZOA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCT8I3fGfxItaJ6Tjjs%2BeN%2F9tcs%2FKI9QgSmrsqdwqoLRgIhAJj7ZSiKwCrc51UmN0MGzmhtaRYl6BAboSx5FsTzyAxhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKXD20dBwg6KPlw4q3ANTEac9%2FczrqVTTafBgumOheOf%2Fa9Y39tJ9i7%2BXTKMHWz%2FsjS06Ttmow6Nqtz2yc44OBlreQhOOd4sz%2FOa1%2B49zXlqI2AOIJ5ikAVPBsVsGI9mDIr7Wj%2FArynsnssZCs6Z1%2FPg3CnWm4yMq8YIFkcDeHRSQj7mnCKKrK4bBPlLupfMxhUcnkf7ALkLX5hqsLyDXKId8MmQYs6%2FEV4xXOQHK%2Frt15%2FgrkdP4krolUWtn%2BkXkgif52MinceqMGhAji2A2swlj5Y6%2FNQng2607k3BGmpedpMxO6Xhn2urfTchWXuy1JQfdSf9CY0Tle5sCosbyQouBSpEUv8zO4AZweCdDGbpdi7uHHlWuG8y7jR3QHFL%2FstNadcfsjUHgL%2BST3qXYiKiUb92iRW%2B1qyzZaxRSsOjjDdwRU3wXTd5%2FcACKQ2mDmkvK2L%2F%2FMld9R5CWPhfKsLHcNXQA0VMB%2BEYp%2BVy7gLj7JfIWB%2Bae%2B%2B8vMASedpPCyERahK5NCnKKp%2B0RU2FhZrZUzVfRRlozqwlvIkEstfNoImwe8TnGNgRMKFw9H85CHYWJIeC%2B7LnsdSnD8YDheS9L2bUUPRs0hu%2FLkcV9h%2FiaSX2lbDwb6Qi1NnT2HaBIvZOXKrkzrmQWKDDjpvK%2BBjqkAfujS95tXLs6eTP0nc6LSiqVGvdO0nZ2rdH%2FDNlBmqYP34M3NwiTZGfEwQjF9RqOYd4DIBhzjiAW4vo5Ws3%2FV2NvY7CNRPmbENDUhyIOPu38lppzSViiumKcNovWcp4x9NHRkNur9lL4xG6qgLc%2BWiux4ZTIIMbzNLStvXB4mWCfo%2FG99UDpW%2FQyAFVOeva%2FP1aoX4RU4IVSVLyyLA4ameff7Gb%2F&X-Amz-Signature=5513d11b6ce78477ec3559f4f4a5a4e161ff252e1d3e19382b976b63cfc59f96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHCQZOA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCT8I3fGfxItaJ6Tjjs%2BeN%2F9tcs%2FKI9QgSmrsqdwqoLRgIhAJj7ZSiKwCrc51UmN0MGzmhtaRYl6BAboSx5FsTzyAxhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKXD20dBwg6KPlw4q3ANTEac9%2FczrqVTTafBgumOheOf%2Fa9Y39tJ9i7%2BXTKMHWz%2FsjS06Ttmow6Nqtz2yc44OBlreQhOOd4sz%2FOa1%2B49zXlqI2AOIJ5ikAVPBsVsGI9mDIr7Wj%2FArynsnssZCs6Z1%2FPg3CnWm4yMq8YIFkcDeHRSQj7mnCKKrK4bBPlLupfMxhUcnkf7ALkLX5hqsLyDXKId8MmQYs6%2FEV4xXOQHK%2Frt15%2FgrkdP4krolUWtn%2BkXkgif52MinceqMGhAji2A2swlj5Y6%2FNQng2607k3BGmpedpMxO6Xhn2urfTchWXuy1JQfdSf9CY0Tle5sCosbyQouBSpEUv8zO4AZweCdDGbpdi7uHHlWuG8y7jR3QHFL%2FstNadcfsjUHgL%2BST3qXYiKiUb92iRW%2B1qyzZaxRSsOjjDdwRU3wXTd5%2FcACKQ2mDmkvK2L%2F%2FMld9R5CWPhfKsLHcNXQA0VMB%2BEYp%2BVy7gLj7JfIWB%2Bae%2B%2B8vMASedpPCyERahK5NCnKKp%2B0RU2FhZrZUzVfRRlozqwlvIkEstfNoImwe8TnGNgRMKFw9H85CHYWJIeC%2B7LnsdSnD8YDheS9L2bUUPRs0hu%2FLkcV9h%2FiaSX2lbDwb6Qi1NnT2HaBIvZOXKrkzrmQWKDDjpvK%2BBjqkAfujS95tXLs6eTP0nc6LSiqVGvdO0nZ2rdH%2FDNlBmqYP34M3NwiTZGfEwQjF9RqOYd4DIBhzjiAW4vo5Ws3%2FV2NvY7CNRPmbENDUhyIOPu38lppzSViiumKcNovWcp4x9NHRkNur9lL4xG6qgLc%2BWiux4ZTIIMbzNLStvXB4mWCfo%2FG99UDpW%2FQyAFVOeva%2FP1aoX4RU4IVSVLyyLA4ameff7Gb%2F&X-Amz-Signature=b8381ef426357fd59fe234d523ea9a0c9458be4f94a06c421dafcac41cfcaf46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHCQZOA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCT8I3fGfxItaJ6Tjjs%2BeN%2F9tcs%2FKI9QgSmrsqdwqoLRgIhAJj7ZSiKwCrc51UmN0MGzmhtaRYl6BAboSx5FsTzyAxhKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKXD20dBwg6KPlw4q3ANTEac9%2FczrqVTTafBgumOheOf%2Fa9Y39tJ9i7%2BXTKMHWz%2FsjS06Ttmow6Nqtz2yc44OBlreQhOOd4sz%2FOa1%2B49zXlqI2AOIJ5ikAVPBsVsGI9mDIr7Wj%2FArynsnssZCs6Z1%2FPg3CnWm4yMq8YIFkcDeHRSQj7mnCKKrK4bBPlLupfMxhUcnkf7ALkLX5hqsLyDXKId8MmQYs6%2FEV4xXOQHK%2Frt15%2FgrkdP4krolUWtn%2BkXkgif52MinceqMGhAji2A2swlj5Y6%2FNQng2607k3BGmpedpMxO6Xhn2urfTchWXuy1JQfdSf9CY0Tle5sCosbyQouBSpEUv8zO4AZweCdDGbpdi7uHHlWuG8y7jR3QHFL%2FstNadcfsjUHgL%2BST3qXYiKiUb92iRW%2B1qyzZaxRSsOjjDdwRU3wXTd5%2FcACKQ2mDmkvK2L%2F%2FMld9R5CWPhfKsLHcNXQA0VMB%2BEYp%2BVy7gLj7JfIWB%2Bae%2B%2B8vMASedpPCyERahK5NCnKKp%2B0RU2FhZrZUzVfRRlozqwlvIkEstfNoImwe8TnGNgRMKFw9H85CHYWJIeC%2B7LnsdSnD8YDheS9L2bUUPRs0hu%2FLkcV9h%2FiaSX2lbDwb6Qi1NnT2HaBIvZOXKrkzrmQWKDDjpvK%2BBjqkAfujS95tXLs6eTP0nc6LSiqVGvdO0nZ2rdH%2FDNlBmqYP34M3NwiTZGfEwQjF9RqOYd4DIBhzjiAW4vo5Ws3%2FV2NvY7CNRPmbENDUhyIOPu38lppzSViiumKcNovWcp4x9NHRkNur9lL4xG6qgLc%2BWiux4ZTIIMbzNLStvXB4mWCfo%2FG99UDpW%2FQyAFVOeva%2FP1aoX4RU4IVSVLyyLA4ameff7Gb%2F&X-Amz-Signature=f20fbb43f43beb889f201a3fbf5e58c98e16de8468cae96bbf6747519e58d06e&X-Amz-SignedHeaders=host&x-id=GetObject)
