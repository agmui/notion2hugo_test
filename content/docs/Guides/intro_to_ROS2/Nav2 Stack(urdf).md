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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJAKR4V%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC15F2dCCkP0h%2FhVRDIAYrPkSRn%2FAANDIRF%2F9dec0CXQAIhANOA9nkD3%2BKZ6ZmI%2FJd%2B01SSNEj5VboYOaiwisMBwikvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyE%2FgPSenR4%2BONUWUq3AO5Fo2BFsalZ6d2XJwJv3eBgoXAEViXllfouP3z8umqIRZAdqScwhILwmyWs%2F99ICTW%2FD8Ut39%2BRgs1KnybIHUZRiy34fGRsCvFMUmIW1BUzPQhZSw0xJ1xilIavDEehAaJTol%2BlZpfOmLLVF8MSw%2F%2BYYnodJc25CmGQAUlLydzcVZX3vM52NFThqfELwEz4%2B6MVU1JUyFc1splk9MEfC469TxKo0FqHckoWQNGRNm%2FzU6%2B9uQbwxdbwgUUT6s23BI3yOATp3JXhyJJWmjp3327OefvwaZoHCqBC7yRCJVAsUOm6L949KpLvLJC%2F8FkiaI7SyfMXelI5WxxOvXAAPicn2m2e55OzHbHbVv4QcLGGqxqU5fqPoqpIDAG4xQ5IqeVaX1FpFPoG1OIFW55lem71eDqKvdIJZXQ6AHWbHXZKZaDHv0cx8skvHZhy9pQfo9x1xwl3OX7bWLN6b5fo71oPyS14Skli%2FkvZO89zLZ1Q27PzlhoiDpY%2FRXconasNcjDZVcyL0Pu6zHzHZvRdNm2Q8Dzi0e7Jc%2BQ%2F48C0K0JpATXxoZn7C%2BgyBnBKfqSeWuC7ourEQCHwrtI%2BdcO%2F8QS3Y0p86MbXFb3D77MiHuyR1LFOmMDW%2B0vB9uAxzDr65DBBjqkAXUJuhFLwC2ZG1nZI4JyhrQMPkbcJytsGN4Iu%2FI8h1mD0dUCxLiqtpkMTGGSZkh2mfNfAaIn52MQIxXdXNEgMQuJo%2F%2BDnyBzZygZeUMEB%2BI2tuZUgbCfpCdsC%2FTmGOy3zxw7jVWA0Ql1PFqOk9O5zs4lrnh96zUnh1qzLGhmyU%2BVgPBxZwZE8UXF%2BEcANLYWlRMEEIXnDJl7vD6vBNBHNf05D3Z8&X-Amz-Signature=0a8a3d1c9b546e221a6c55ef8098c2c0b25f6bf9453d3c40622546000d724a09&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJAKR4V%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC15F2dCCkP0h%2FhVRDIAYrPkSRn%2FAANDIRF%2F9dec0CXQAIhANOA9nkD3%2BKZ6ZmI%2FJd%2B01SSNEj5VboYOaiwisMBwikvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyE%2FgPSenR4%2BONUWUq3AO5Fo2BFsalZ6d2XJwJv3eBgoXAEViXllfouP3z8umqIRZAdqScwhILwmyWs%2F99ICTW%2FD8Ut39%2BRgs1KnybIHUZRiy34fGRsCvFMUmIW1BUzPQhZSw0xJ1xilIavDEehAaJTol%2BlZpfOmLLVF8MSw%2F%2BYYnodJc25CmGQAUlLydzcVZX3vM52NFThqfELwEz4%2B6MVU1JUyFc1splk9MEfC469TxKo0FqHckoWQNGRNm%2FzU6%2B9uQbwxdbwgUUT6s23BI3yOATp3JXhyJJWmjp3327OefvwaZoHCqBC7yRCJVAsUOm6L949KpLvLJC%2F8FkiaI7SyfMXelI5WxxOvXAAPicn2m2e55OzHbHbVv4QcLGGqxqU5fqPoqpIDAG4xQ5IqeVaX1FpFPoG1OIFW55lem71eDqKvdIJZXQ6AHWbHXZKZaDHv0cx8skvHZhy9pQfo9x1xwl3OX7bWLN6b5fo71oPyS14Skli%2FkvZO89zLZ1Q27PzlhoiDpY%2FRXconasNcjDZVcyL0Pu6zHzHZvRdNm2Q8Dzi0e7Jc%2BQ%2F48C0K0JpATXxoZn7C%2BgyBnBKfqSeWuC7ourEQCHwrtI%2BdcO%2F8QS3Y0p86MbXFb3D77MiHuyR1LFOmMDW%2B0vB9uAxzDr65DBBjqkAXUJuhFLwC2ZG1nZI4JyhrQMPkbcJytsGN4Iu%2FI8h1mD0dUCxLiqtpkMTGGSZkh2mfNfAaIn52MQIxXdXNEgMQuJo%2F%2BDnyBzZygZeUMEB%2BI2tuZUgbCfpCdsC%2FTmGOy3zxw7jVWA0Ql1PFqOk9O5zs4lrnh96zUnh1qzLGhmyU%2BVgPBxZwZE8UXF%2BEcANLYWlRMEEIXnDJl7vD6vBNBHNf05D3Z8&X-Amz-Signature=2afa5336e8f6ee87d89854bffb851e0a30bd2e1550d2fc729a876ec6a3f54e30&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJAKR4V%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC15F2dCCkP0h%2FhVRDIAYrPkSRn%2FAANDIRF%2F9dec0CXQAIhANOA9nkD3%2BKZ6ZmI%2FJd%2B01SSNEj5VboYOaiwisMBwikvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyE%2FgPSenR4%2BONUWUq3AO5Fo2BFsalZ6d2XJwJv3eBgoXAEViXllfouP3z8umqIRZAdqScwhILwmyWs%2F99ICTW%2FD8Ut39%2BRgs1KnybIHUZRiy34fGRsCvFMUmIW1BUzPQhZSw0xJ1xilIavDEehAaJTol%2BlZpfOmLLVF8MSw%2F%2BYYnodJc25CmGQAUlLydzcVZX3vM52NFThqfELwEz4%2B6MVU1JUyFc1splk9MEfC469TxKo0FqHckoWQNGRNm%2FzU6%2B9uQbwxdbwgUUT6s23BI3yOATp3JXhyJJWmjp3327OefvwaZoHCqBC7yRCJVAsUOm6L949KpLvLJC%2F8FkiaI7SyfMXelI5WxxOvXAAPicn2m2e55OzHbHbVv4QcLGGqxqU5fqPoqpIDAG4xQ5IqeVaX1FpFPoG1OIFW55lem71eDqKvdIJZXQ6AHWbHXZKZaDHv0cx8skvHZhy9pQfo9x1xwl3OX7bWLN6b5fo71oPyS14Skli%2FkvZO89zLZ1Q27PzlhoiDpY%2FRXconasNcjDZVcyL0Pu6zHzHZvRdNm2Q8Dzi0e7Jc%2BQ%2F48C0K0JpATXxoZn7C%2BgyBnBKfqSeWuC7ourEQCHwrtI%2BdcO%2F8QS3Y0p86MbXFb3D77MiHuyR1LFOmMDW%2B0vB9uAxzDr65DBBjqkAXUJuhFLwC2ZG1nZI4JyhrQMPkbcJytsGN4Iu%2FI8h1mD0dUCxLiqtpkMTGGSZkh2mfNfAaIn52MQIxXdXNEgMQuJo%2F%2BDnyBzZygZeUMEB%2BI2tuZUgbCfpCdsC%2FTmGOy3zxw7jVWA0Ql1PFqOk9O5zs4lrnh96zUnh1qzLGhmyU%2BVgPBxZwZE8UXF%2BEcANLYWlRMEEIXnDJl7vD6vBNBHNf05D3Z8&X-Amz-Signature=c4bfac9dd7e96229f3e8f1a596bd7bd0814ab6178c9ed66497578932d956e097&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJAKR4V%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC15F2dCCkP0h%2FhVRDIAYrPkSRn%2FAANDIRF%2F9dec0CXQAIhANOA9nkD3%2BKZ6ZmI%2FJd%2B01SSNEj5VboYOaiwisMBwikvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyE%2FgPSenR4%2BONUWUq3AO5Fo2BFsalZ6d2XJwJv3eBgoXAEViXllfouP3z8umqIRZAdqScwhILwmyWs%2F99ICTW%2FD8Ut39%2BRgs1KnybIHUZRiy34fGRsCvFMUmIW1BUzPQhZSw0xJ1xilIavDEehAaJTol%2BlZpfOmLLVF8MSw%2F%2BYYnodJc25CmGQAUlLydzcVZX3vM52NFThqfELwEz4%2B6MVU1JUyFc1splk9MEfC469TxKo0FqHckoWQNGRNm%2FzU6%2B9uQbwxdbwgUUT6s23BI3yOATp3JXhyJJWmjp3327OefvwaZoHCqBC7yRCJVAsUOm6L949KpLvLJC%2F8FkiaI7SyfMXelI5WxxOvXAAPicn2m2e55OzHbHbVv4QcLGGqxqU5fqPoqpIDAG4xQ5IqeVaX1FpFPoG1OIFW55lem71eDqKvdIJZXQ6AHWbHXZKZaDHv0cx8skvHZhy9pQfo9x1xwl3OX7bWLN6b5fo71oPyS14Skli%2FkvZO89zLZ1Q27PzlhoiDpY%2FRXconasNcjDZVcyL0Pu6zHzHZvRdNm2Q8Dzi0e7Jc%2BQ%2F48C0K0JpATXxoZn7C%2BgyBnBKfqSeWuC7ourEQCHwrtI%2BdcO%2F8QS3Y0p86MbXFb3D77MiHuyR1LFOmMDW%2B0vB9uAxzDr65DBBjqkAXUJuhFLwC2ZG1nZI4JyhrQMPkbcJytsGN4Iu%2FI8h1mD0dUCxLiqtpkMTGGSZkh2mfNfAaIn52MQIxXdXNEgMQuJo%2F%2BDnyBzZygZeUMEB%2BI2tuZUgbCfpCdsC%2FTmGOy3zxw7jVWA0Ql1PFqOk9O5zs4lrnh96zUnh1qzLGhmyU%2BVgPBxZwZE8UXF%2BEcANLYWlRMEEIXnDJl7vD6vBNBHNf05D3Z8&X-Amz-Signature=c6e12ad879d790d09af70938f862b743dc50974627d28ca677a802b0e3396e97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJAKR4V%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC15F2dCCkP0h%2FhVRDIAYrPkSRn%2FAANDIRF%2F9dec0CXQAIhANOA9nkD3%2BKZ6ZmI%2FJd%2B01SSNEj5VboYOaiwisMBwikvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyE%2FgPSenR4%2BONUWUq3AO5Fo2BFsalZ6d2XJwJv3eBgoXAEViXllfouP3z8umqIRZAdqScwhILwmyWs%2F99ICTW%2FD8Ut39%2BRgs1KnybIHUZRiy34fGRsCvFMUmIW1BUzPQhZSw0xJ1xilIavDEehAaJTol%2BlZpfOmLLVF8MSw%2F%2BYYnodJc25CmGQAUlLydzcVZX3vM52NFThqfELwEz4%2B6MVU1JUyFc1splk9MEfC469TxKo0FqHckoWQNGRNm%2FzU6%2B9uQbwxdbwgUUT6s23BI3yOATp3JXhyJJWmjp3327OefvwaZoHCqBC7yRCJVAsUOm6L949KpLvLJC%2F8FkiaI7SyfMXelI5WxxOvXAAPicn2m2e55OzHbHbVv4QcLGGqxqU5fqPoqpIDAG4xQ5IqeVaX1FpFPoG1OIFW55lem71eDqKvdIJZXQ6AHWbHXZKZaDHv0cx8skvHZhy9pQfo9x1xwl3OX7bWLN6b5fo71oPyS14Skli%2FkvZO89zLZ1Q27PzlhoiDpY%2FRXconasNcjDZVcyL0Pu6zHzHZvRdNm2Q8Dzi0e7Jc%2BQ%2F48C0K0JpATXxoZn7C%2BgyBnBKfqSeWuC7ourEQCHwrtI%2BdcO%2F8QS3Y0p86MbXFb3D77MiHuyR1LFOmMDW%2B0vB9uAxzDr65DBBjqkAXUJuhFLwC2ZG1nZI4JyhrQMPkbcJytsGN4Iu%2FI8h1mD0dUCxLiqtpkMTGGSZkh2mfNfAaIn52MQIxXdXNEgMQuJo%2F%2BDnyBzZygZeUMEB%2BI2tuZUgbCfpCdsC%2FTmGOy3zxw7jVWA0Ql1PFqOk9O5zs4lrnh96zUnh1qzLGhmyU%2BVgPBxZwZE8UXF%2BEcANLYWlRMEEIXnDJl7vD6vBNBHNf05D3Z8&X-Amz-Signature=0a90cee2c3591fb6d028118adc2adb04f0c364cf908c3f520a0e95e37eaa3e02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJAKR4V%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC15F2dCCkP0h%2FhVRDIAYrPkSRn%2FAANDIRF%2F9dec0CXQAIhANOA9nkD3%2BKZ6ZmI%2FJd%2B01SSNEj5VboYOaiwisMBwikvKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyE%2FgPSenR4%2BONUWUq3AO5Fo2BFsalZ6d2XJwJv3eBgoXAEViXllfouP3z8umqIRZAdqScwhILwmyWs%2F99ICTW%2FD8Ut39%2BRgs1KnybIHUZRiy34fGRsCvFMUmIW1BUzPQhZSw0xJ1xilIavDEehAaJTol%2BlZpfOmLLVF8MSw%2F%2BYYnodJc25CmGQAUlLydzcVZX3vM52NFThqfELwEz4%2B6MVU1JUyFc1splk9MEfC469TxKo0FqHckoWQNGRNm%2FzU6%2B9uQbwxdbwgUUT6s23BI3yOATp3JXhyJJWmjp3327OefvwaZoHCqBC7yRCJVAsUOm6L949KpLvLJC%2F8FkiaI7SyfMXelI5WxxOvXAAPicn2m2e55OzHbHbVv4QcLGGqxqU5fqPoqpIDAG4xQ5IqeVaX1FpFPoG1OIFW55lem71eDqKvdIJZXQ6AHWbHXZKZaDHv0cx8skvHZhy9pQfo9x1xwl3OX7bWLN6b5fo71oPyS14Skli%2FkvZO89zLZ1Q27PzlhoiDpY%2FRXconasNcjDZVcyL0Pu6zHzHZvRdNm2Q8Dzi0e7Jc%2BQ%2F48C0K0JpATXxoZn7C%2BgyBnBKfqSeWuC7ourEQCHwrtI%2BdcO%2F8QS3Y0p86MbXFb3D77MiHuyR1LFOmMDW%2B0vB9uAxzDr65DBBjqkAXUJuhFLwC2ZG1nZI4JyhrQMPkbcJytsGN4Iu%2FI8h1mD0dUCxLiqtpkMTGGSZkh2mfNfAaIn52MQIxXdXNEgMQuJo%2F%2BDnyBzZygZeUMEB%2BI2tuZUgbCfpCdsC%2FTmGOy3zxw7jVWA0Ql1PFqOk9O5zs4lrnh96zUnh1qzLGhmyU%2BVgPBxZwZE8UXF%2BEcANLYWlRMEEIXnDJl7vD6vBNBHNf05D3Z8&X-Amz-Signature=e01493a378c18de645e36f38b4c4e460956b6704035c6525dab1110889313184&X-Amz-SignedHeaders=host&x-id=GetObject)
