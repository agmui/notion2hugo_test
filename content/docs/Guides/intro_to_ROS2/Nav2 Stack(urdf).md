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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2SMDUG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEemF4FPahnltl3ioFKITddR2qANXY3ISZsWZzdIFi6%2BAiADf%2F7UFWNRnSRgpyrhMyqNRieyTl7cJwHuDtY60c4F3yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGT%2BEj0ZITzGxPlrKtwDxVOdmPBGRz1aK9riylG0K64cDn%2BtW0GVyhYRUE%2FVSFC270AbBAyTpZs3OoHTFALY4WhjdHNmY4S%2F4RDZyopa6m%2FhrqA4Zle9lCZAdlgf%2BJopr2A7YZI51aOdlniIBquJKYea2MxR2C20B1WHggRs7S3vzTeSWez0Z%2F8UJkJ9Wca%2BX7kIm1BH8OAhQQ14bh6vHA4hKkQpXs3xt%2FvCwqZ7ozcbiogBm0JdZg1gHBusuvhV8ZyOxGspiIF%2BQNVqUzjfZZg3Y21rvMQ7dtOCxWVw2H26eTHmmczimw7lsM%2B3XTf63ROdZ%2BGKCw3eqLFSwmDbnVHM09E8xP5nQWwNES1nm0%2FhKJ6PGZ30P73bvN3wSMJsrbCSrTKwUXp8%2BsLrc%2BHm%2Fe%2FvhBFjsYbGs5nSDPwwP4ELfgq%2BebbYOpUgEFg4hb0IN2qqGNkLUbAIwnhTX2PEPOfQIyQn7crAtLlDhU2PUcZMubdXbxl67DfENATXx2OPiwWp3Y%2BN8Zq5ynw84K6Qis%2FjcwbU9gllP70venEr3WYkP8Myvk731yM5XAanweIvAV0BvKbBjittdhusEcs2fXBH3eFkGkfivb1DNjJxcivsTwaHdLLNe8cud2k4NudWLFZzLTUNr%2FKSAAYw48muvQY6pgE0zu5kstob0dZ227TERjd96WCHhCliH%2FbFPJmwecSEivPbwBkaj6ys3PDHZhkbdkH%2Fr3d3wHoy8gpk%2FX6TuUB3Mbzaal3e67i%2FkaqFIvBBfL1fzaV%2FUptZMfppPNToeGodMBO1fWRUI%2Fs4hSkOeAOc35k8jWFUhtOkM1225zuh0CYCR7nPVnNIxcY8KIDSzSX1F9z3uLNn21tLKxpS%2B3tS8%2FbaBHMZ&X-Amz-Signature=442d8ad52f59bd5187ad670ed984d0dc443c9512c8cc5644ccbb8d3eb55d8589&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2SMDUG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEemF4FPahnltl3ioFKITddR2qANXY3ISZsWZzdIFi6%2BAiADf%2F7UFWNRnSRgpyrhMyqNRieyTl7cJwHuDtY60c4F3yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGT%2BEj0ZITzGxPlrKtwDxVOdmPBGRz1aK9riylG0K64cDn%2BtW0GVyhYRUE%2FVSFC270AbBAyTpZs3OoHTFALY4WhjdHNmY4S%2F4RDZyopa6m%2FhrqA4Zle9lCZAdlgf%2BJopr2A7YZI51aOdlniIBquJKYea2MxR2C20B1WHggRs7S3vzTeSWez0Z%2F8UJkJ9Wca%2BX7kIm1BH8OAhQQ14bh6vHA4hKkQpXs3xt%2FvCwqZ7ozcbiogBm0JdZg1gHBusuvhV8ZyOxGspiIF%2BQNVqUzjfZZg3Y21rvMQ7dtOCxWVw2H26eTHmmczimw7lsM%2B3XTf63ROdZ%2BGKCw3eqLFSwmDbnVHM09E8xP5nQWwNES1nm0%2FhKJ6PGZ30P73bvN3wSMJsrbCSrTKwUXp8%2BsLrc%2BHm%2Fe%2FvhBFjsYbGs5nSDPwwP4ELfgq%2BebbYOpUgEFg4hb0IN2qqGNkLUbAIwnhTX2PEPOfQIyQn7crAtLlDhU2PUcZMubdXbxl67DfENATXx2OPiwWp3Y%2BN8Zq5ynw84K6Qis%2FjcwbU9gllP70venEr3WYkP8Myvk731yM5XAanweIvAV0BvKbBjittdhusEcs2fXBH3eFkGkfivb1DNjJxcivsTwaHdLLNe8cud2k4NudWLFZzLTUNr%2FKSAAYw48muvQY6pgE0zu5kstob0dZ227TERjd96WCHhCliH%2FbFPJmwecSEivPbwBkaj6ys3PDHZhkbdkH%2Fr3d3wHoy8gpk%2FX6TuUB3Mbzaal3e67i%2FkaqFIvBBfL1fzaV%2FUptZMfppPNToeGodMBO1fWRUI%2Fs4hSkOeAOc35k8jWFUhtOkM1225zuh0CYCR7nPVnNIxcY8KIDSzSX1F9z3uLNn21tLKxpS%2B3tS8%2FbaBHMZ&X-Amz-Signature=38b1790acae63bfdfbec52836c2e7b18fc4d8aa530348b0069c64f87eb00f7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2SMDUG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEemF4FPahnltl3ioFKITddR2qANXY3ISZsWZzdIFi6%2BAiADf%2F7UFWNRnSRgpyrhMyqNRieyTl7cJwHuDtY60c4F3yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGT%2BEj0ZITzGxPlrKtwDxVOdmPBGRz1aK9riylG0K64cDn%2BtW0GVyhYRUE%2FVSFC270AbBAyTpZs3OoHTFALY4WhjdHNmY4S%2F4RDZyopa6m%2FhrqA4Zle9lCZAdlgf%2BJopr2A7YZI51aOdlniIBquJKYea2MxR2C20B1WHggRs7S3vzTeSWez0Z%2F8UJkJ9Wca%2BX7kIm1BH8OAhQQ14bh6vHA4hKkQpXs3xt%2FvCwqZ7ozcbiogBm0JdZg1gHBusuvhV8ZyOxGspiIF%2BQNVqUzjfZZg3Y21rvMQ7dtOCxWVw2H26eTHmmczimw7lsM%2B3XTf63ROdZ%2BGKCw3eqLFSwmDbnVHM09E8xP5nQWwNES1nm0%2FhKJ6PGZ30P73bvN3wSMJsrbCSrTKwUXp8%2BsLrc%2BHm%2Fe%2FvhBFjsYbGs5nSDPwwP4ELfgq%2BebbYOpUgEFg4hb0IN2qqGNkLUbAIwnhTX2PEPOfQIyQn7crAtLlDhU2PUcZMubdXbxl67DfENATXx2OPiwWp3Y%2BN8Zq5ynw84K6Qis%2FjcwbU9gllP70venEr3WYkP8Myvk731yM5XAanweIvAV0BvKbBjittdhusEcs2fXBH3eFkGkfivb1DNjJxcivsTwaHdLLNe8cud2k4NudWLFZzLTUNr%2FKSAAYw48muvQY6pgE0zu5kstob0dZ227TERjd96WCHhCliH%2FbFPJmwecSEivPbwBkaj6ys3PDHZhkbdkH%2Fr3d3wHoy8gpk%2FX6TuUB3Mbzaal3e67i%2FkaqFIvBBfL1fzaV%2FUptZMfppPNToeGodMBO1fWRUI%2Fs4hSkOeAOc35k8jWFUhtOkM1225zuh0CYCR7nPVnNIxcY8KIDSzSX1F9z3uLNn21tLKxpS%2B3tS8%2FbaBHMZ&X-Amz-Signature=fd6f7198417f51fc5e356b7a94189d5f40daf3b3ee2875a2d310ed61c0b4e48f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2SMDUG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEemF4FPahnltl3ioFKITddR2qANXY3ISZsWZzdIFi6%2BAiADf%2F7UFWNRnSRgpyrhMyqNRieyTl7cJwHuDtY60c4F3yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGT%2BEj0ZITzGxPlrKtwDxVOdmPBGRz1aK9riylG0K64cDn%2BtW0GVyhYRUE%2FVSFC270AbBAyTpZs3OoHTFALY4WhjdHNmY4S%2F4RDZyopa6m%2FhrqA4Zle9lCZAdlgf%2BJopr2A7YZI51aOdlniIBquJKYea2MxR2C20B1WHggRs7S3vzTeSWez0Z%2F8UJkJ9Wca%2BX7kIm1BH8OAhQQ14bh6vHA4hKkQpXs3xt%2FvCwqZ7ozcbiogBm0JdZg1gHBusuvhV8ZyOxGspiIF%2BQNVqUzjfZZg3Y21rvMQ7dtOCxWVw2H26eTHmmczimw7lsM%2B3XTf63ROdZ%2BGKCw3eqLFSwmDbnVHM09E8xP5nQWwNES1nm0%2FhKJ6PGZ30P73bvN3wSMJsrbCSrTKwUXp8%2BsLrc%2BHm%2Fe%2FvhBFjsYbGs5nSDPwwP4ELfgq%2BebbYOpUgEFg4hb0IN2qqGNkLUbAIwnhTX2PEPOfQIyQn7crAtLlDhU2PUcZMubdXbxl67DfENATXx2OPiwWp3Y%2BN8Zq5ynw84K6Qis%2FjcwbU9gllP70venEr3WYkP8Myvk731yM5XAanweIvAV0BvKbBjittdhusEcs2fXBH3eFkGkfivb1DNjJxcivsTwaHdLLNe8cud2k4NudWLFZzLTUNr%2FKSAAYw48muvQY6pgE0zu5kstob0dZ227TERjd96WCHhCliH%2FbFPJmwecSEivPbwBkaj6ys3PDHZhkbdkH%2Fr3d3wHoy8gpk%2FX6TuUB3Mbzaal3e67i%2FkaqFIvBBfL1fzaV%2FUptZMfppPNToeGodMBO1fWRUI%2Fs4hSkOeAOc35k8jWFUhtOkM1225zuh0CYCR7nPVnNIxcY8KIDSzSX1F9z3uLNn21tLKxpS%2B3tS8%2FbaBHMZ&X-Amz-Signature=f7aeb1e8f016d4697b0bf3382c4f9e71264b47bee08946077fc407f3a0f315bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2SMDUG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEemF4FPahnltl3ioFKITddR2qANXY3ISZsWZzdIFi6%2BAiADf%2F7UFWNRnSRgpyrhMyqNRieyTl7cJwHuDtY60c4F3yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGT%2BEj0ZITzGxPlrKtwDxVOdmPBGRz1aK9riylG0K64cDn%2BtW0GVyhYRUE%2FVSFC270AbBAyTpZs3OoHTFALY4WhjdHNmY4S%2F4RDZyopa6m%2FhrqA4Zle9lCZAdlgf%2BJopr2A7YZI51aOdlniIBquJKYea2MxR2C20B1WHggRs7S3vzTeSWez0Z%2F8UJkJ9Wca%2BX7kIm1BH8OAhQQ14bh6vHA4hKkQpXs3xt%2FvCwqZ7ozcbiogBm0JdZg1gHBusuvhV8ZyOxGspiIF%2BQNVqUzjfZZg3Y21rvMQ7dtOCxWVw2H26eTHmmczimw7lsM%2B3XTf63ROdZ%2BGKCw3eqLFSwmDbnVHM09E8xP5nQWwNES1nm0%2FhKJ6PGZ30P73bvN3wSMJsrbCSrTKwUXp8%2BsLrc%2BHm%2Fe%2FvhBFjsYbGs5nSDPwwP4ELfgq%2BebbYOpUgEFg4hb0IN2qqGNkLUbAIwnhTX2PEPOfQIyQn7crAtLlDhU2PUcZMubdXbxl67DfENATXx2OPiwWp3Y%2BN8Zq5ynw84K6Qis%2FjcwbU9gllP70venEr3WYkP8Myvk731yM5XAanweIvAV0BvKbBjittdhusEcs2fXBH3eFkGkfivb1DNjJxcivsTwaHdLLNe8cud2k4NudWLFZzLTUNr%2FKSAAYw48muvQY6pgE0zu5kstob0dZ227TERjd96WCHhCliH%2FbFPJmwecSEivPbwBkaj6ys3PDHZhkbdkH%2Fr3d3wHoy8gpk%2FX6TuUB3Mbzaal3e67i%2FkaqFIvBBfL1fzaV%2FUptZMfppPNToeGodMBO1fWRUI%2Fs4hSkOeAOc35k8jWFUhtOkM1225zuh0CYCR7nPVnNIxcY8KIDSzSX1F9z3uLNn21tLKxpS%2B3tS8%2FbaBHMZ&X-Amz-Signature=9b3c5a69f7f005f1f55e2e5ba822acbdb73c0f0dab309394147e156df220d0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2SMDUG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEemF4FPahnltl3ioFKITddR2qANXY3ISZsWZzdIFi6%2BAiADf%2F7UFWNRnSRgpyrhMyqNRieyTl7cJwHuDtY60c4F3yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGT%2BEj0ZITzGxPlrKtwDxVOdmPBGRz1aK9riylG0K64cDn%2BtW0GVyhYRUE%2FVSFC270AbBAyTpZs3OoHTFALY4WhjdHNmY4S%2F4RDZyopa6m%2FhrqA4Zle9lCZAdlgf%2BJopr2A7YZI51aOdlniIBquJKYea2MxR2C20B1WHggRs7S3vzTeSWez0Z%2F8UJkJ9Wca%2BX7kIm1BH8OAhQQ14bh6vHA4hKkQpXs3xt%2FvCwqZ7ozcbiogBm0JdZg1gHBusuvhV8ZyOxGspiIF%2BQNVqUzjfZZg3Y21rvMQ7dtOCxWVw2H26eTHmmczimw7lsM%2B3XTf63ROdZ%2BGKCw3eqLFSwmDbnVHM09E8xP5nQWwNES1nm0%2FhKJ6PGZ30P73bvN3wSMJsrbCSrTKwUXp8%2BsLrc%2BHm%2Fe%2FvhBFjsYbGs5nSDPwwP4ELfgq%2BebbYOpUgEFg4hb0IN2qqGNkLUbAIwnhTX2PEPOfQIyQn7crAtLlDhU2PUcZMubdXbxl67DfENATXx2OPiwWp3Y%2BN8Zq5ynw84K6Qis%2FjcwbU9gllP70venEr3WYkP8Myvk731yM5XAanweIvAV0BvKbBjittdhusEcs2fXBH3eFkGkfivb1DNjJxcivsTwaHdLLNe8cud2k4NudWLFZzLTUNr%2FKSAAYw48muvQY6pgE0zu5kstob0dZ227TERjd96WCHhCliH%2FbFPJmwecSEivPbwBkaj6ys3PDHZhkbdkH%2Fr3d3wHoy8gpk%2FX6TuUB3Mbzaal3e67i%2FkaqFIvBBfL1fzaV%2FUptZMfppPNToeGodMBO1fWRUI%2Fs4hSkOeAOc35k8jWFUhtOkM1225zuh0CYCR7nPVnNIxcY8KIDSzSX1F9z3uLNn21tLKxpS%2B3tS8%2FbaBHMZ&X-Amz-Signature=640ac9ed1a8442d70b62e7e454f0104308c19308677448d3108c69efbcb82262&X-Amz-SignedHeaders=host&x-id=GetObject)
