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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR2JHE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBew7W%2BQjirwGusabkoPH5jhckr4hFMGSWszkozHVXFIAiBUxZ%2F74Gm%2BmW438IE%2FejXO2MQ9%2F79s153p38tnBSswVyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlz%2FpX7mAcXURC5BSKtwDLXlUi1bLs9ahUTNI2j56SsQHJWZa8sBaBtyBQufpewxkLdf0DVOmMthYocSgk0PN5ihSWbGPEllHueDTl56cJm1VDiainOPPRtIraKoK02%2F4NvKZBKy2QkMirF6N0dQa79SIDBmizGByUx3HdIh0QxgpvSGNQjZwtNw2Z95N9ZfZdj8TF4jFwYM6HRN5louZrFber7IWuKLzxdhZ%2FW%2FINI8u07HrF5ipvjJHQWIm%2FkAtA6AcgiU1bxc5qCfDDgMBD2yyQqi6clanWNe%2FqxLiT3nBlGuexD11%2F%2BMB2CIGNjmWELzfY848MdRqa%2BKYBAI%2BH1fo%2F7p39eAyg0sEoRvMkqSQ45W8nd8qyO2M%2B6L5vmBY5YQ6RrtnWRiMjN8sU4ANcrHcCS5XWPgySHm7fu7hci4NnYN2JIQipvjE1SRWfW6h28OLpaUe8bfvOs3R%2FO9QoPMSOyMgu3skSUQoA88IbfyOI92GNGM40MMV9lOwKPRAuOEB1fQ4Pj5jdvGGp5N8XW1G5cbWkqlqcb3ZisDicLZpx1zkvnyFtwSF2XR5CzHvqFhGOMI0wrmZMuo8c%2BjivBBtGGEKmXbJJGdACMg1OaB%2FOyOFwJ5nPWGHA0H00ffZW51uUOr%2BJUifxcMwncalwQY6pgEuJ6yGD70nq3Dg3Mf8ZFeaN7A7AtuXlrCwKi8D1qm91i5eHshbWJcmxdQ9LAudRqZ2EvO5UYsTJBhosZg%2BqZ%2BYZSElbdDWWskwT%2BxuMEcut%2FU6dFzxLnpW3%2FbJkOKh%2Bu3q0%2BslePV%2FD57IWshlfA8MQRgFequOK1zfWvPV8AqtIaEEpzQLECjTaNWI%2FrwL8AO73bTFF0u7taN0G4EANiqjLJiQviYr&X-Amz-Signature=5db5543de2249525a75bc3f3088c475222d2a54380e2242d7d419e45ccf88f51&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR2JHE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBew7W%2BQjirwGusabkoPH5jhckr4hFMGSWszkozHVXFIAiBUxZ%2F74Gm%2BmW438IE%2FejXO2MQ9%2F79s153p38tnBSswVyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlz%2FpX7mAcXURC5BSKtwDLXlUi1bLs9ahUTNI2j56SsQHJWZa8sBaBtyBQufpewxkLdf0DVOmMthYocSgk0PN5ihSWbGPEllHueDTl56cJm1VDiainOPPRtIraKoK02%2F4NvKZBKy2QkMirF6N0dQa79SIDBmizGByUx3HdIh0QxgpvSGNQjZwtNw2Z95N9ZfZdj8TF4jFwYM6HRN5louZrFber7IWuKLzxdhZ%2FW%2FINI8u07HrF5ipvjJHQWIm%2FkAtA6AcgiU1bxc5qCfDDgMBD2yyQqi6clanWNe%2FqxLiT3nBlGuexD11%2F%2BMB2CIGNjmWELzfY848MdRqa%2BKYBAI%2BH1fo%2F7p39eAyg0sEoRvMkqSQ45W8nd8qyO2M%2B6L5vmBY5YQ6RrtnWRiMjN8sU4ANcrHcCS5XWPgySHm7fu7hci4NnYN2JIQipvjE1SRWfW6h28OLpaUe8bfvOs3R%2FO9QoPMSOyMgu3skSUQoA88IbfyOI92GNGM40MMV9lOwKPRAuOEB1fQ4Pj5jdvGGp5N8XW1G5cbWkqlqcb3ZisDicLZpx1zkvnyFtwSF2XR5CzHvqFhGOMI0wrmZMuo8c%2BjivBBtGGEKmXbJJGdACMg1OaB%2FOyOFwJ5nPWGHA0H00ffZW51uUOr%2BJUifxcMwncalwQY6pgEuJ6yGD70nq3Dg3Mf8ZFeaN7A7AtuXlrCwKi8D1qm91i5eHshbWJcmxdQ9LAudRqZ2EvO5UYsTJBhosZg%2BqZ%2BYZSElbdDWWskwT%2BxuMEcut%2FU6dFzxLnpW3%2FbJkOKh%2Bu3q0%2BslePV%2FD57IWshlfA8MQRgFequOK1zfWvPV8AqtIaEEpzQLECjTaNWI%2FrwL8AO73bTFF0u7taN0G4EANiqjLJiQviYr&X-Amz-Signature=1cfb11107e99f859ad6cccf09e3577018d5c02f9f7451e7c196d5572006a1a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR2JHE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBew7W%2BQjirwGusabkoPH5jhckr4hFMGSWszkozHVXFIAiBUxZ%2F74Gm%2BmW438IE%2FejXO2MQ9%2F79s153p38tnBSswVyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlz%2FpX7mAcXURC5BSKtwDLXlUi1bLs9ahUTNI2j56SsQHJWZa8sBaBtyBQufpewxkLdf0DVOmMthYocSgk0PN5ihSWbGPEllHueDTl56cJm1VDiainOPPRtIraKoK02%2F4NvKZBKy2QkMirF6N0dQa79SIDBmizGByUx3HdIh0QxgpvSGNQjZwtNw2Z95N9ZfZdj8TF4jFwYM6HRN5louZrFber7IWuKLzxdhZ%2FW%2FINI8u07HrF5ipvjJHQWIm%2FkAtA6AcgiU1bxc5qCfDDgMBD2yyQqi6clanWNe%2FqxLiT3nBlGuexD11%2F%2BMB2CIGNjmWELzfY848MdRqa%2BKYBAI%2BH1fo%2F7p39eAyg0sEoRvMkqSQ45W8nd8qyO2M%2B6L5vmBY5YQ6RrtnWRiMjN8sU4ANcrHcCS5XWPgySHm7fu7hci4NnYN2JIQipvjE1SRWfW6h28OLpaUe8bfvOs3R%2FO9QoPMSOyMgu3skSUQoA88IbfyOI92GNGM40MMV9lOwKPRAuOEB1fQ4Pj5jdvGGp5N8XW1G5cbWkqlqcb3ZisDicLZpx1zkvnyFtwSF2XR5CzHvqFhGOMI0wrmZMuo8c%2BjivBBtGGEKmXbJJGdACMg1OaB%2FOyOFwJ5nPWGHA0H00ffZW51uUOr%2BJUifxcMwncalwQY6pgEuJ6yGD70nq3Dg3Mf8ZFeaN7A7AtuXlrCwKi8D1qm91i5eHshbWJcmxdQ9LAudRqZ2EvO5UYsTJBhosZg%2BqZ%2BYZSElbdDWWskwT%2BxuMEcut%2FU6dFzxLnpW3%2FbJkOKh%2Bu3q0%2BslePV%2FD57IWshlfA8MQRgFequOK1zfWvPV8AqtIaEEpzQLECjTaNWI%2FrwL8AO73bTFF0u7taN0G4EANiqjLJiQviYr&X-Amz-Signature=1a7952f9b828a84077bb93f3505b92b43b343167b477e218222a9db919af3f91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR2JHE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBew7W%2BQjirwGusabkoPH5jhckr4hFMGSWszkozHVXFIAiBUxZ%2F74Gm%2BmW438IE%2FejXO2MQ9%2F79s153p38tnBSswVyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlz%2FpX7mAcXURC5BSKtwDLXlUi1bLs9ahUTNI2j56SsQHJWZa8sBaBtyBQufpewxkLdf0DVOmMthYocSgk0PN5ihSWbGPEllHueDTl56cJm1VDiainOPPRtIraKoK02%2F4NvKZBKy2QkMirF6N0dQa79SIDBmizGByUx3HdIh0QxgpvSGNQjZwtNw2Z95N9ZfZdj8TF4jFwYM6HRN5louZrFber7IWuKLzxdhZ%2FW%2FINI8u07HrF5ipvjJHQWIm%2FkAtA6AcgiU1bxc5qCfDDgMBD2yyQqi6clanWNe%2FqxLiT3nBlGuexD11%2F%2BMB2CIGNjmWELzfY848MdRqa%2BKYBAI%2BH1fo%2F7p39eAyg0sEoRvMkqSQ45W8nd8qyO2M%2B6L5vmBY5YQ6RrtnWRiMjN8sU4ANcrHcCS5XWPgySHm7fu7hci4NnYN2JIQipvjE1SRWfW6h28OLpaUe8bfvOs3R%2FO9QoPMSOyMgu3skSUQoA88IbfyOI92GNGM40MMV9lOwKPRAuOEB1fQ4Pj5jdvGGp5N8XW1G5cbWkqlqcb3ZisDicLZpx1zkvnyFtwSF2XR5CzHvqFhGOMI0wrmZMuo8c%2BjivBBtGGEKmXbJJGdACMg1OaB%2FOyOFwJ5nPWGHA0H00ffZW51uUOr%2BJUifxcMwncalwQY6pgEuJ6yGD70nq3Dg3Mf8ZFeaN7A7AtuXlrCwKi8D1qm91i5eHshbWJcmxdQ9LAudRqZ2EvO5UYsTJBhosZg%2BqZ%2BYZSElbdDWWskwT%2BxuMEcut%2FU6dFzxLnpW3%2FbJkOKh%2Bu3q0%2BslePV%2FD57IWshlfA8MQRgFequOK1zfWvPV8AqtIaEEpzQLECjTaNWI%2FrwL8AO73bTFF0u7taN0G4EANiqjLJiQviYr&X-Amz-Signature=fc0a04ee7a33c37e55fbed44db27f385a79f4c58e8d1e63551a61146099d58ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR2JHE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBew7W%2BQjirwGusabkoPH5jhckr4hFMGSWszkozHVXFIAiBUxZ%2F74Gm%2BmW438IE%2FejXO2MQ9%2F79s153p38tnBSswVyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlz%2FpX7mAcXURC5BSKtwDLXlUi1bLs9ahUTNI2j56SsQHJWZa8sBaBtyBQufpewxkLdf0DVOmMthYocSgk0PN5ihSWbGPEllHueDTl56cJm1VDiainOPPRtIraKoK02%2F4NvKZBKy2QkMirF6N0dQa79SIDBmizGByUx3HdIh0QxgpvSGNQjZwtNw2Z95N9ZfZdj8TF4jFwYM6HRN5louZrFber7IWuKLzxdhZ%2FW%2FINI8u07HrF5ipvjJHQWIm%2FkAtA6AcgiU1bxc5qCfDDgMBD2yyQqi6clanWNe%2FqxLiT3nBlGuexD11%2F%2BMB2CIGNjmWELzfY848MdRqa%2BKYBAI%2BH1fo%2F7p39eAyg0sEoRvMkqSQ45W8nd8qyO2M%2B6L5vmBY5YQ6RrtnWRiMjN8sU4ANcrHcCS5XWPgySHm7fu7hci4NnYN2JIQipvjE1SRWfW6h28OLpaUe8bfvOs3R%2FO9QoPMSOyMgu3skSUQoA88IbfyOI92GNGM40MMV9lOwKPRAuOEB1fQ4Pj5jdvGGp5N8XW1G5cbWkqlqcb3ZisDicLZpx1zkvnyFtwSF2XR5CzHvqFhGOMI0wrmZMuo8c%2BjivBBtGGEKmXbJJGdACMg1OaB%2FOyOFwJ5nPWGHA0H00ffZW51uUOr%2BJUifxcMwncalwQY6pgEuJ6yGD70nq3Dg3Mf8ZFeaN7A7AtuXlrCwKi8D1qm91i5eHshbWJcmxdQ9LAudRqZ2EvO5UYsTJBhosZg%2BqZ%2BYZSElbdDWWskwT%2BxuMEcut%2FU6dFzxLnpW3%2FbJkOKh%2Bu3q0%2BslePV%2FD57IWshlfA8MQRgFequOK1zfWvPV8AqtIaEEpzQLECjTaNWI%2FrwL8AO73bTFF0u7taN0G4EANiqjLJiQviYr&X-Amz-Signature=d9ee68a4940e2524bc9e37da792966bb29741505f3795aa079e24e71861550eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGR2JHE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBew7W%2BQjirwGusabkoPH5jhckr4hFMGSWszkozHVXFIAiBUxZ%2F74Gm%2BmW438IE%2FejXO2MQ9%2F79s153p38tnBSswVyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMlz%2FpX7mAcXURC5BSKtwDLXlUi1bLs9ahUTNI2j56SsQHJWZa8sBaBtyBQufpewxkLdf0DVOmMthYocSgk0PN5ihSWbGPEllHueDTl56cJm1VDiainOPPRtIraKoK02%2F4NvKZBKy2QkMirF6N0dQa79SIDBmizGByUx3HdIh0QxgpvSGNQjZwtNw2Z95N9ZfZdj8TF4jFwYM6HRN5louZrFber7IWuKLzxdhZ%2FW%2FINI8u07HrF5ipvjJHQWIm%2FkAtA6AcgiU1bxc5qCfDDgMBD2yyQqi6clanWNe%2FqxLiT3nBlGuexD11%2F%2BMB2CIGNjmWELzfY848MdRqa%2BKYBAI%2BH1fo%2F7p39eAyg0sEoRvMkqSQ45W8nd8qyO2M%2B6L5vmBY5YQ6RrtnWRiMjN8sU4ANcrHcCS5XWPgySHm7fu7hci4NnYN2JIQipvjE1SRWfW6h28OLpaUe8bfvOs3R%2FO9QoPMSOyMgu3skSUQoA88IbfyOI92GNGM40MMV9lOwKPRAuOEB1fQ4Pj5jdvGGp5N8XW1G5cbWkqlqcb3ZisDicLZpx1zkvnyFtwSF2XR5CzHvqFhGOMI0wrmZMuo8c%2BjivBBtGGEKmXbJJGdACMg1OaB%2FOyOFwJ5nPWGHA0H00ffZW51uUOr%2BJUifxcMwncalwQY6pgEuJ6yGD70nq3Dg3Mf8ZFeaN7A7AtuXlrCwKi8D1qm91i5eHshbWJcmxdQ9LAudRqZ2EvO5UYsTJBhosZg%2BqZ%2BYZSElbdDWWskwT%2BxuMEcut%2FU6dFzxLnpW3%2FbJkOKh%2Bu3q0%2BslePV%2FD57IWshlfA8MQRgFequOK1zfWvPV8AqtIaEEpzQLECjTaNWI%2FrwL8AO73bTFF0u7taN0G4EANiqjLJiQviYr&X-Amz-Signature=43f1d5126610eb1fd01f88ea63e2ad3c949ce04e48a901d35dc78edb091806de&X-Amz-SignedHeaders=host&x-id=GetObject)
