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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EK35Z5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDniUG9q7k%2FBuLbh6lQbc%2BZ1PDFmIRbCeNaAHwyT9891wIhAKsOAT7SQuWEKuC8lnDMExr2P0j10vf1bF4g9xU3KZuhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCkDm1gq7C6HlBiFIq3AM5jtw4dr%2Fqi6%2BLRwx6fWtVE6e8ZFGfrU14QfRlsQfNQjlXcne1g7cWri0dTAmOUxv%2Bdow5m%2BvSaIf3RUNbghCECYh3ylhwcs%2Bq75GXfxX6EBtNCerQ8%2BuQoMV7BCQXo697G9hY%2F1eXsTnpvOeSz%2FOWTIBRgVgGWQdZ9H0SPTxRTcZpTBWxyHgXDa1X0xdGMENWS72mALcix0xaBX94lIKTYr7TEwMufOIj%2F0eJNYsxOFd1cxLPMmCjSrBZmunkC8bx7usaSqXZJM2Mk79j44JJ4lEnijmMVRaTKvTppyw2%2FdOwoNTZSBOcETH9r01qf0bxqFDhGhCtyvBJr8XwqDuaXjr4aEfFwgqNc239UORUsnNJCLGxHBz2m8xC4Djjc9apkrPiJFFe81xH6U59nhOZ%2F%2Fl%2FS%2BuJC6MvyOU2TDLJiXfiN81X3hllAja2bUxFJdzhKM6FOJAuwKmZJvRCHSgcvJnKwAFSJw%2BxAEc2gWrB4D2gEUVIf2yFp4lst3GD%2BBMtn0oEduwVpmlh4asxdzSVjcE6hlj1l7i9vmuhDV1SBi2%2BwztEc1npv6uwue%2BHhZ1dMIu%2Fx93ijeMUCXkz3e8sOs1bpafLK4Vxjz8GlFSyhirQ6zzPODSswBZrHjDEscK%2BBjqkAcjNX5gbxZicSSg7pP7AT9iEduGwY6ZBnrksEaXDl4%2Bvnez7yVTES11M1wCADYfgGnBM%2Byg%2BMUGNtDdLj5yKHW5z77ERF8c4%2BQkd9d6iEMK8t%2BMiWetmWFNB6lhl%2BYVEaQb8DylZVhelcCvNj%2BqVND1C6RWjC3c8LWUkeQkkhnGPfeHn%2FxRjJkUuGdlkWtdPLQmg2A5kVIDiJtAipsBLfig%2BjUie&X-Amz-Signature=0b188a618d666fdbb67b8ab105620be2838bad6fb94c8ffbe2648c38df69f0af&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EK35Z5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDniUG9q7k%2FBuLbh6lQbc%2BZ1PDFmIRbCeNaAHwyT9891wIhAKsOAT7SQuWEKuC8lnDMExr2P0j10vf1bF4g9xU3KZuhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCkDm1gq7C6HlBiFIq3AM5jtw4dr%2Fqi6%2BLRwx6fWtVE6e8ZFGfrU14QfRlsQfNQjlXcne1g7cWri0dTAmOUxv%2Bdow5m%2BvSaIf3RUNbghCECYh3ylhwcs%2Bq75GXfxX6EBtNCerQ8%2BuQoMV7BCQXo697G9hY%2F1eXsTnpvOeSz%2FOWTIBRgVgGWQdZ9H0SPTxRTcZpTBWxyHgXDa1X0xdGMENWS72mALcix0xaBX94lIKTYr7TEwMufOIj%2F0eJNYsxOFd1cxLPMmCjSrBZmunkC8bx7usaSqXZJM2Mk79j44JJ4lEnijmMVRaTKvTppyw2%2FdOwoNTZSBOcETH9r01qf0bxqFDhGhCtyvBJr8XwqDuaXjr4aEfFwgqNc239UORUsnNJCLGxHBz2m8xC4Djjc9apkrPiJFFe81xH6U59nhOZ%2F%2Fl%2FS%2BuJC6MvyOU2TDLJiXfiN81X3hllAja2bUxFJdzhKM6FOJAuwKmZJvRCHSgcvJnKwAFSJw%2BxAEc2gWrB4D2gEUVIf2yFp4lst3GD%2BBMtn0oEduwVpmlh4asxdzSVjcE6hlj1l7i9vmuhDV1SBi2%2BwztEc1npv6uwue%2BHhZ1dMIu%2Fx93ijeMUCXkz3e8sOs1bpafLK4Vxjz8GlFSyhirQ6zzPODSswBZrHjDEscK%2BBjqkAcjNX5gbxZicSSg7pP7AT9iEduGwY6ZBnrksEaXDl4%2Bvnez7yVTES11M1wCADYfgGnBM%2Byg%2BMUGNtDdLj5yKHW5z77ERF8c4%2BQkd9d6iEMK8t%2BMiWetmWFNB6lhl%2BYVEaQb8DylZVhelcCvNj%2BqVND1C6RWjC3c8LWUkeQkkhnGPfeHn%2FxRjJkUuGdlkWtdPLQmg2A5kVIDiJtAipsBLfig%2BjUie&X-Amz-Signature=61ca6202368e9ee7de52fd6e28c1dc7be30834dd37e90801aab481f9d7c5b475&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EK35Z5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDniUG9q7k%2FBuLbh6lQbc%2BZ1PDFmIRbCeNaAHwyT9891wIhAKsOAT7SQuWEKuC8lnDMExr2P0j10vf1bF4g9xU3KZuhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCkDm1gq7C6HlBiFIq3AM5jtw4dr%2Fqi6%2BLRwx6fWtVE6e8ZFGfrU14QfRlsQfNQjlXcne1g7cWri0dTAmOUxv%2Bdow5m%2BvSaIf3RUNbghCECYh3ylhwcs%2Bq75GXfxX6EBtNCerQ8%2BuQoMV7BCQXo697G9hY%2F1eXsTnpvOeSz%2FOWTIBRgVgGWQdZ9H0SPTxRTcZpTBWxyHgXDa1X0xdGMENWS72mALcix0xaBX94lIKTYr7TEwMufOIj%2F0eJNYsxOFd1cxLPMmCjSrBZmunkC8bx7usaSqXZJM2Mk79j44JJ4lEnijmMVRaTKvTppyw2%2FdOwoNTZSBOcETH9r01qf0bxqFDhGhCtyvBJr8XwqDuaXjr4aEfFwgqNc239UORUsnNJCLGxHBz2m8xC4Djjc9apkrPiJFFe81xH6U59nhOZ%2F%2Fl%2FS%2BuJC6MvyOU2TDLJiXfiN81X3hllAja2bUxFJdzhKM6FOJAuwKmZJvRCHSgcvJnKwAFSJw%2BxAEc2gWrB4D2gEUVIf2yFp4lst3GD%2BBMtn0oEduwVpmlh4asxdzSVjcE6hlj1l7i9vmuhDV1SBi2%2BwztEc1npv6uwue%2BHhZ1dMIu%2Fx93ijeMUCXkz3e8sOs1bpafLK4Vxjz8GlFSyhirQ6zzPODSswBZrHjDEscK%2BBjqkAcjNX5gbxZicSSg7pP7AT9iEduGwY6ZBnrksEaXDl4%2Bvnez7yVTES11M1wCADYfgGnBM%2Byg%2BMUGNtDdLj5yKHW5z77ERF8c4%2BQkd9d6iEMK8t%2BMiWetmWFNB6lhl%2BYVEaQb8DylZVhelcCvNj%2BqVND1C6RWjC3c8LWUkeQkkhnGPfeHn%2FxRjJkUuGdlkWtdPLQmg2A5kVIDiJtAipsBLfig%2BjUie&X-Amz-Signature=2a13b8cd3cf2289f809b6e0dd8cea4d2a89194d9a64235671ae00da7c275b62c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EK35Z5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDniUG9q7k%2FBuLbh6lQbc%2BZ1PDFmIRbCeNaAHwyT9891wIhAKsOAT7SQuWEKuC8lnDMExr2P0j10vf1bF4g9xU3KZuhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCkDm1gq7C6HlBiFIq3AM5jtw4dr%2Fqi6%2BLRwx6fWtVE6e8ZFGfrU14QfRlsQfNQjlXcne1g7cWri0dTAmOUxv%2Bdow5m%2BvSaIf3RUNbghCECYh3ylhwcs%2Bq75GXfxX6EBtNCerQ8%2BuQoMV7BCQXo697G9hY%2F1eXsTnpvOeSz%2FOWTIBRgVgGWQdZ9H0SPTxRTcZpTBWxyHgXDa1X0xdGMENWS72mALcix0xaBX94lIKTYr7TEwMufOIj%2F0eJNYsxOFd1cxLPMmCjSrBZmunkC8bx7usaSqXZJM2Mk79j44JJ4lEnijmMVRaTKvTppyw2%2FdOwoNTZSBOcETH9r01qf0bxqFDhGhCtyvBJr8XwqDuaXjr4aEfFwgqNc239UORUsnNJCLGxHBz2m8xC4Djjc9apkrPiJFFe81xH6U59nhOZ%2F%2Fl%2FS%2BuJC6MvyOU2TDLJiXfiN81X3hllAja2bUxFJdzhKM6FOJAuwKmZJvRCHSgcvJnKwAFSJw%2BxAEc2gWrB4D2gEUVIf2yFp4lst3GD%2BBMtn0oEduwVpmlh4asxdzSVjcE6hlj1l7i9vmuhDV1SBi2%2BwztEc1npv6uwue%2BHhZ1dMIu%2Fx93ijeMUCXkz3e8sOs1bpafLK4Vxjz8GlFSyhirQ6zzPODSswBZrHjDEscK%2BBjqkAcjNX5gbxZicSSg7pP7AT9iEduGwY6ZBnrksEaXDl4%2Bvnez7yVTES11M1wCADYfgGnBM%2Byg%2BMUGNtDdLj5yKHW5z77ERF8c4%2BQkd9d6iEMK8t%2BMiWetmWFNB6lhl%2BYVEaQb8DylZVhelcCvNj%2BqVND1C6RWjC3c8LWUkeQkkhnGPfeHn%2FxRjJkUuGdlkWtdPLQmg2A5kVIDiJtAipsBLfig%2BjUie&X-Amz-Signature=f8610a23355539d932e1012404f248a0ad6a258e747573946cecfeee504b6c69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EK35Z5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDniUG9q7k%2FBuLbh6lQbc%2BZ1PDFmIRbCeNaAHwyT9891wIhAKsOAT7SQuWEKuC8lnDMExr2P0j10vf1bF4g9xU3KZuhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCkDm1gq7C6HlBiFIq3AM5jtw4dr%2Fqi6%2BLRwx6fWtVE6e8ZFGfrU14QfRlsQfNQjlXcne1g7cWri0dTAmOUxv%2Bdow5m%2BvSaIf3RUNbghCECYh3ylhwcs%2Bq75GXfxX6EBtNCerQ8%2BuQoMV7BCQXo697G9hY%2F1eXsTnpvOeSz%2FOWTIBRgVgGWQdZ9H0SPTxRTcZpTBWxyHgXDa1X0xdGMENWS72mALcix0xaBX94lIKTYr7TEwMufOIj%2F0eJNYsxOFd1cxLPMmCjSrBZmunkC8bx7usaSqXZJM2Mk79j44JJ4lEnijmMVRaTKvTppyw2%2FdOwoNTZSBOcETH9r01qf0bxqFDhGhCtyvBJr8XwqDuaXjr4aEfFwgqNc239UORUsnNJCLGxHBz2m8xC4Djjc9apkrPiJFFe81xH6U59nhOZ%2F%2Fl%2FS%2BuJC6MvyOU2TDLJiXfiN81X3hllAja2bUxFJdzhKM6FOJAuwKmZJvRCHSgcvJnKwAFSJw%2BxAEc2gWrB4D2gEUVIf2yFp4lst3GD%2BBMtn0oEduwVpmlh4asxdzSVjcE6hlj1l7i9vmuhDV1SBi2%2BwztEc1npv6uwue%2BHhZ1dMIu%2Fx93ijeMUCXkz3e8sOs1bpafLK4Vxjz8GlFSyhirQ6zzPODSswBZrHjDEscK%2BBjqkAcjNX5gbxZicSSg7pP7AT9iEduGwY6ZBnrksEaXDl4%2Bvnez7yVTES11M1wCADYfgGnBM%2Byg%2BMUGNtDdLj5yKHW5z77ERF8c4%2BQkd9d6iEMK8t%2BMiWetmWFNB6lhl%2BYVEaQb8DylZVhelcCvNj%2BqVND1C6RWjC3c8LWUkeQkkhnGPfeHn%2FxRjJkUuGdlkWtdPLQmg2A5kVIDiJtAipsBLfig%2BjUie&X-Amz-Signature=d90aa0ee45cd5788da2f59d85b24da72df61451bfdf25035a079f94497b81154&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EK35Z5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDniUG9q7k%2FBuLbh6lQbc%2BZ1PDFmIRbCeNaAHwyT9891wIhAKsOAT7SQuWEKuC8lnDMExr2P0j10vf1bF4g9xU3KZuhKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCkDm1gq7C6HlBiFIq3AM5jtw4dr%2Fqi6%2BLRwx6fWtVE6e8ZFGfrU14QfRlsQfNQjlXcne1g7cWri0dTAmOUxv%2Bdow5m%2BvSaIf3RUNbghCECYh3ylhwcs%2Bq75GXfxX6EBtNCerQ8%2BuQoMV7BCQXo697G9hY%2F1eXsTnpvOeSz%2FOWTIBRgVgGWQdZ9H0SPTxRTcZpTBWxyHgXDa1X0xdGMENWS72mALcix0xaBX94lIKTYr7TEwMufOIj%2F0eJNYsxOFd1cxLPMmCjSrBZmunkC8bx7usaSqXZJM2Mk79j44JJ4lEnijmMVRaTKvTppyw2%2FdOwoNTZSBOcETH9r01qf0bxqFDhGhCtyvBJr8XwqDuaXjr4aEfFwgqNc239UORUsnNJCLGxHBz2m8xC4Djjc9apkrPiJFFe81xH6U59nhOZ%2F%2Fl%2FS%2BuJC6MvyOU2TDLJiXfiN81X3hllAja2bUxFJdzhKM6FOJAuwKmZJvRCHSgcvJnKwAFSJw%2BxAEc2gWrB4D2gEUVIf2yFp4lst3GD%2BBMtn0oEduwVpmlh4asxdzSVjcE6hlj1l7i9vmuhDV1SBi2%2BwztEc1npv6uwue%2BHhZ1dMIu%2Fx93ijeMUCXkz3e8sOs1bpafLK4Vxjz8GlFSyhirQ6zzPODSswBZrHjDEscK%2BBjqkAcjNX5gbxZicSSg7pP7AT9iEduGwY6ZBnrksEaXDl4%2Bvnez7yVTES11M1wCADYfgGnBM%2Byg%2BMUGNtDdLj5yKHW5z77ERF8c4%2BQkd9d6iEMK8t%2BMiWetmWFNB6lhl%2BYVEaQb8DylZVhelcCvNj%2BqVND1C6RWjC3c8LWUkeQkkhnGPfeHn%2FxRjJkUuGdlkWtdPLQmg2A5kVIDiJtAipsBLfig%2BjUie&X-Amz-Signature=d012373cf0d5b0270aafced9dad1761e4cf097b47f4c29d8b7c635ef07130401&X-Amz-SignedHeaders=host&x-id=GetObject)
