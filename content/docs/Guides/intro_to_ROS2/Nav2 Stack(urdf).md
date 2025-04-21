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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDEUAX3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH43Nm2QpqTF1p3yo4SzMfTMVmkVam4aI2hoX4dpy2aiAiEAlcMPBdfriqkqxs1RM3pFE0nueqbI752V3bDXgLz85%2FwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDONxCyM6zNGbPUPkSrcAxnwywnX8P1aiy0DDchLteQ1XYVu2giYSwQE807PIsOgJhOWUkcqbfaNnyAcKwjEzW1Jdu9slm%2BvdEP9Us3sO0qIkenSRXgJzgsjOWjn79S1BiopWLDJyqSiH1YgiGCvouJcjbhM%2BnWrQVvy%2BG0padyx59n9shqJnX1V5R%2FAlB7g%2BSTYIGFJpUMlclG4T2HCUOmqZcX7ymraZ3gAU6o%2BRDKlRoH676%2B5SFBnNR26uB3e8eZalCoQS3JgjFSqYghdtfaGScSOm77MIeLurUb5Tf8OpN5GRSarXMA2wwgvUTGS35JaeP7SbyU7s2oEhWxBHgLYYObSJe0bHPNMvlln5ZlU%2B7PJEXgtGkqRdxeliePDyIaxlqxF6WXjTGwYz2SFiBdntt4%2Fezanw%2BnRAobY%2BsZeXxcmBm48e8lMyH8WQsPrQY33UBF5VEMW94gmOH25xpTPDv5FpuD1cxcFhHrvHAAvaQxm%2FW%2BUwAPtZc56iyZhgdZ3GeKQJkmfupuCFwbYx7yFyOqCeuuoj1JDkJ9r3t8IHhi6c86JhgBf96CXrft4JFcsAoZgXyzKAv%2Fqb%2FUYTh19jRWqFMY1%2BvGy0px97fMGBymBd4jdye%2Bbo%2FFhmmnEYgLKIXwUE%2BuOguVwMK%2Fxl8AGOqUBE1uUlq6g897fr%2BFVSrNxIyU76xnuSJu9PKE4L4CXK0Tl5d2Zaq5XSwNqeJ1CVPwH6Qwb4GRAfQdVyxCZYfQEny4cozVk60MtNpDKAPPtFAdXp7dogbGc%2BzBOSN%2BkS%2FoEl4FJmpR1VvEUcCq4p0xbb7c5CNcDU8l50y8jF7PSx2oxGV4x1FkH8wX73%2FuhhhcjHsqewoFQ8KwQTorF6GrpGpQb561c&X-Amz-Signature=20fb9a901d7f6ab3f38c56455d52c2cd58188f677423881393f516ef43dd9fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDEUAX3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH43Nm2QpqTF1p3yo4SzMfTMVmkVam4aI2hoX4dpy2aiAiEAlcMPBdfriqkqxs1RM3pFE0nueqbI752V3bDXgLz85%2FwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDONxCyM6zNGbPUPkSrcAxnwywnX8P1aiy0DDchLteQ1XYVu2giYSwQE807PIsOgJhOWUkcqbfaNnyAcKwjEzW1Jdu9slm%2BvdEP9Us3sO0qIkenSRXgJzgsjOWjn79S1BiopWLDJyqSiH1YgiGCvouJcjbhM%2BnWrQVvy%2BG0padyx59n9shqJnX1V5R%2FAlB7g%2BSTYIGFJpUMlclG4T2HCUOmqZcX7ymraZ3gAU6o%2BRDKlRoH676%2B5SFBnNR26uB3e8eZalCoQS3JgjFSqYghdtfaGScSOm77MIeLurUb5Tf8OpN5GRSarXMA2wwgvUTGS35JaeP7SbyU7s2oEhWxBHgLYYObSJe0bHPNMvlln5ZlU%2B7PJEXgtGkqRdxeliePDyIaxlqxF6WXjTGwYz2SFiBdntt4%2Fezanw%2BnRAobY%2BsZeXxcmBm48e8lMyH8WQsPrQY33UBF5VEMW94gmOH25xpTPDv5FpuD1cxcFhHrvHAAvaQxm%2FW%2BUwAPtZc56iyZhgdZ3GeKQJkmfupuCFwbYx7yFyOqCeuuoj1JDkJ9r3t8IHhi6c86JhgBf96CXrft4JFcsAoZgXyzKAv%2Fqb%2FUYTh19jRWqFMY1%2BvGy0px97fMGBymBd4jdye%2Bbo%2FFhmmnEYgLKIXwUE%2BuOguVwMK%2Fxl8AGOqUBE1uUlq6g897fr%2BFVSrNxIyU76xnuSJu9PKE4L4CXK0Tl5d2Zaq5XSwNqeJ1CVPwH6Qwb4GRAfQdVyxCZYfQEny4cozVk60MtNpDKAPPtFAdXp7dogbGc%2BzBOSN%2BkS%2FoEl4FJmpR1VvEUcCq4p0xbb7c5CNcDU8l50y8jF7PSx2oxGV4x1FkH8wX73%2FuhhhcjHsqewoFQ8KwQTorF6GrpGpQb561c&X-Amz-Signature=5da629eb64ce36861e5ffe8631f1d41ab1c92c67c3ba4f665d602c21cdb53219&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDEUAX3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH43Nm2QpqTF1p3yo4SzMfTMVmkVam4aI2hoX4dpy2aiAiEAlcMPBdfriqkqxs1RM3pFE0nueqbI752V3bDXgLz85%2FwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDONxCyM6zNGbPUPkSrcAxnwywnX8P1aiy0DDchLteQ1XYVu2giYSwQE807PIsOgJhOWUkcqbfaNnyAcKwjEzW1Jdu9slm%2BvdEP9Us3sO0qIkenSRXgJzgsjOWjn79S1BiopWLDJyqSiH1YgiGCvouJcjbhM%2BnWrQVvy%2BG0padyx59n9shqJnX1V5R%2FAlB7g%2BSTYIGFJpUMlclG4T2HCUOmqZcX7ymraZ3gAU6o%2BRDKlRoH676%2B5SFBnNR26uB3e8eZalCoQS3JgjFSqYghdtfaGScSOm77MIeLurUb5Tf8OpN5GRSarXMA2wwgvUTGS35JaeP7SbyU7s2oEhWxBHgLYYObSJe0bHPNMvlln5ZlU%2B7PJEXgtGkqRdxeliePDyIaxlqxF6WXjTGwYz2SFiBdntt4%2Fezanw%2BnRAobY%2BsZeXxcmBm48e8lMyH8WQsPrQY33UBF5VEMW94gmOH25xpTPDv5FpuD1cxcFhHrvHAAvaQxm%2FW%2BUwAPtZc56iyZhgdZ3GeKQJkmfupuCFwbYx7yFyOqCeuuoj1JDkJ9r3t8IHhi6c86JhgBf96CXrft4JFcsAoZgXyzKAv%2Fqb%2FUYTh19jRWqFMY1%2BvGy0px97fMGBymBd4jdye%2Bbo%2FFhmmnEYgLKIXwUE%2BuOguVwMK%2Fxl8AGOqUBE1uUlq6g897fr%2BFVSrNxIyU76xnuSJu9PKE4L4CXK0Tl5d2Zaq5XSwNqeJ1CVPwH6Qwb4GRAfQdVyxCZYfQEny4cozVk60MtNpDKAPPtFAdXp7dogbGc%2BzBOSN%2BkS%2FoEl4FJmpR1VvEUcCq4p0xbb7c5CNcDU8l50y8jF7PSx2oxGV4x1FkH8wX73%2FuhhhcjHsqewoFQ8KwQTorF6GrpGpQb561c&X-Amz-Signature=a029d09504c3902ea5270d202530f1424a21071f465b642bb84f131c4fd296db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDEUAX3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH43Nm2QpqTF1p3yo4SzMfTMVmkVam4aI2hoX4dpy2aiAiEAlcMPBdfriqkqxs1RM3pFE0nueqbI752V3bDXgLz85%2FwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDONxCyM6zNGbPUPkSrcAxnwywnX8P1aiy0DDchLteQ1XYVu2giYSwQE807PIsOgJhOWUkcqbfaNnyAcKwjEzW1Jdu9slm%2BvdEP9Us3sO0qIkenSRXgJzgsjOWjn79S1BiopWLDJyqSiH1YgiGCvouJcjbhM%2BnWrQVvy%2BG0padyx59n9shqJnX1V5R%2FAlB7g%2BSTYIGFJpUMlclG4T2HCUOmqZcX7ymraZ3gAU6o%2BRDKlRoH676%2B5SFBnNR26uB3e8eZalCoQS3JgjFSqYghdtfaGScSOm77MIeLurUb5Tf8OpN5GRSarXMA2wwgvUTGS35JaeP7SbyU7s2oEhWxBHgLYYObSJe0bHPNMvlln5ZlU%2B7PJEXgtGkqRdxeliePDyIaxlqxF6WXjTGwYz2SFiBdntt4%2Fezanw%2BnRAobY%2BsZeXxcmBm48e8lMyH8WQsPrQY33UBF5VEMW94gmOH25xpTPDv5FpuD1cxcFhHrvHAAvaQxm%2FW%2BUwAPtZc56iyZhgdZ3GeKQJkmfupuCFwbYx7yFyOqCeuuoj1JDkJ9r3t8IHhi6c86JhgBf96CXrft4JFcsAoZgXyzKAv%2Fqb%2FUYTh19jRWqFMY1%2BvGy0px97fMGBymBd4jdye%2Bbo%2FFhmmnEYgLKIXwUE%2BuOguVwMK%2Fxl8AGOqUBE1uUlq6g897fr%2BFVSrNxIyU76xnuSJu9PKE4L4CXK0Tl5d2Zaq5XSwNqeJ1CVPwH6Qwb4GRAfQdVyxCZYfQEny4cozVk60MtNpDKAPPtFAdXp7dogbGc%2BzBOSN%2BkS%2FoEl4FJmpR1VvEUcCq4p0xbb7c5CNcDU8l50y8jF7PSx2oxGV4x1FkH8wX73%2FuhhhcjHsqewoFQ8KwQTorF6GrpGpQb561c&X-Amz-Signature=9de465a630a7736a3b96af98180a4f9307d4cdb393a73372c9678bbe0b7de10b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDEUAX3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH43Nm2QpqTF1p3yo4SzMfTMVmkVam4aI2hoX4dpy2aiAiEAlcMPBdfriqkqxs1RM3pFE0nueqbI752V3bDXgLz85%2FwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDONxCyM6zNGbPUPkSrcAxnwywnX8P1aiy0DDchLteQ1XYVu2giYSwQE807PIsOgJhOWUkcqbfaNnyAcKwjEzW1Jdu9slm%2BvdEP9Us3sO0qIkenSRXgJzgsjOWjn79S1BiopWLDJyqSiH1YgiGCvouJcjbhM%2BnWrQVvy%2BG0padyx59n9shqJnX1V5R%2FAlB7g%2BSTYIGFJpUMlclG4T2HCUOmqZcX7ymraZ3gAU6o%2BRDKlRoH676%2B5SFBnNR26uB3e8eZalCoQS3JgjFSqYghdtfaGScSOm77MIeLurUb5Tf8OpN5GRSarXMA2wwgvUTGS35JaeP7SbyU7s2oEhWxBHgLYYObSJe0bHPNMvlln5ZlU%2B7PJEXgtGkqRdxeliePDyIaxlqxF6WXjTGwYz2SFiBdntt4%2Fezanw%2BnRAobY%2BsZeXxcmBm48e8lMyH8WQsPrQY33UBF5VEMW94gmOH25xpTPDv5FpuD1cxcFhHrvHAAvaQxm%2FW%2BUwAPtZc56iyZhgdZ3GeKQJkmfupuCFwbYx7yFyOqCeuuoj1JDkJ9r3t8IHhi6c86JhgBf96CXrft4JFcsAoZgXyzKAv%2Fqb%2FUYTh19jRWqFMY1%2BvGy0px97fMGBymBd4jdye%2Bbo%2FFhmmnEYgLKIXwUE%2BuOguVwMK%2Fxl8AGOqUBE1uUlq6g897fr%2BFVSrNxIyU76xnuSJu9PKE4L4CXK0Tl5d2Zaq5XSwNqeJ1CVPwH6Qwb4GRAfQdVyxCZYfQEny4cozVk60MtNpDKAPPtFAdXp7dogbGc%2BzBOSN%2BkS%2FoEl4FJmpR1VvEUcCq4p0xbb7c5CNcDU8l50y8jF7PSx2oxGV4x1FkH8wX73%2FuhhhcjHsqewoFQ8KwQTorF6GrpGpQb561c&X-Amz-Signature=5de9d056f6d7154c712a0e6634d7c8760fab36c127f528adbac3c3f3d75ec2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDEUAX3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIH43Nm2QpqTF1p3yo4SzMfTMVmkVam4aI2hoX4dpy2aiAiEAlcMPBdfriqkqxs1RM3pFE0nueqbI752V3bDXgLz85%2FwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDONxCyM6zNGbPUPkSrcAxnwywnX8P1aiy0DDchLteQ1XYVu2giYSwQE807PIsOgJhOWUkcqbfaNnyAcKwjEzW1Jdu9slm%2BvdEP9Us3sO0qIkenSRXgJzgsjOWjn79S1BiopWLDJyqSiH1YgiGCvouJcjbhM%2BnWrQVvy%2BG0padyx59n9shqJnX1V5R%2FAlB7g%2BSTYIGFJpUMlclG4T2HCUOmqZcX7ymraZ3gAU6o%2BRDKlRoH676%2B5SFBnNR26uB3e8eZalCoQS3JgjFSqYghdtfaGScSOm77MIeLurUb5Tf8OpN5GRSarXMA2wwgvUTGS35JaeP7SbyU7s2oEhWxBHgLYYObSJe0bHPNMvlln5ZlU%2B7PJEXgtGkqRdxeliePDyIaxlqxF6WXjTGwYz2SFiBdntt4%2Fezanw%2BnRAobY%2BsZeXxcmBm48e8lMyH8WQsPrQY33UBF5VEMW94gmOH25xpTPDv5FpuD1cxcFhHrvHAAvaQxm%2FW%2BUwAPtZc56iyZhgdZ3GeKQJkmfupuCFwbYx7yFyOqCeuuoj1JDkJ9r3t8IHhi6c86JhgBf96CXrft4JFcsAoZgXyzKAv%2Fqb%2FUYTh19jRWqFMY1%2BvGy0px97fMGBymBd4jdye%2Bbo%2FFhmmnEYgLKIXwUE%2BuOguVwMK%2Fxl8AGOqUBE1uUlq6g897fr%2BFVSrNxIyU76xnuSJu9PKE4L4CXK0Tl5d2Zaq5XSwNqeJ1CVPwH6Qwb4GRAfQdVyxCZYfQEny4cozVk60MtNpDKAPPtFAdXp7dogbGc%2BzBOSN%2BkS%2FoEl4FJmpR1VvEUcCq4p0xbb7c5CNcDU8l50y8jF7PSx2oxGV4x1FkH8wX73%2FuhhhcjHsqewoFQ8KwQTorF6GrpGpQb561c&X-Amz-Signature=ea5c74242dfbfd70a4f3e28f65a0de9f3dccb89490bd3971649e5ff7e46ecf99&X-Amz-SignedHeaders=host&x-id=GetObject)
