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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27QEAPO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboqURhEt%2BwWF8ddCEOY5ahhKTdNKxByYL2Tsm8oxjqQIgGzcQQYkV6Ie20x8XvtZzYhfAdA7J8ScqXKpbuDUReg0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMZ82DBm8%2FWfMKIiCrcAzB31ruLUQMzg4%2F4HmhRmnnq5rBcnYPPwFRFTF1%2B%2FySScCrilie23Wg9L%2FU3ny3mxdsqMFVCMisLf6WzAElQaS3qDeeriErs8FRW0yMYDyxEsxai3GzU9odMfqFoEHuM3L9T4g7QmSN2vJgNGIqcpuDdz0CFBhRI7pg6uRFW0RdR4CPX3eB36PPSlojz75pXCFk03As2uUlSkROFsfabX5S4RQVn%2BmzR96HTC%2Bx8CHJ8Ya3tSeOyYdQN1Fdj08SkdOkB%2BA9OVHyv%2F92ZWHLpE4SZm5ZPNfjWs%2BLP0tjQ5VbzC19bCCxS0b735G9FXzmD3s%2BqwpzjvSYucGCGoEj7aiw60mV6OlMOfutCb2dVDFPzVB3QazGkN6Fl1nZczLQc%2BbSSmaKa%2FmY1z2HgdZX0GcOu6v5Mpn5cWIKS2%2BONKdCxrA0nENr5FcGvUUiIijONMUfTbGzvZtxt4ss5rdIsDTelK6IkhpizkIt7a62Z9Kx3T2G1HSX2KeH3R1Mg%2ByCSYelhZFSnBov6QeTuBtQO5SsyxFPPZoMI0CzhxN8ppEbr7F4jtjb14DezDc7kKIgH%2FMToUZoGaBSzR%2BkN9xHSEZ2tNpfDBXETkyq70ChY2uEvAaEl04eUO%2BTcrtwzMMr%2ByL8GOqUBXT%2F%2FPRPAyUGvfAAMzsXLZF7qaaa2rXF276107W3OuQ0c1Kwiw3msV6GnYS79TBvd9ADj2IPQjbXiwRbV1aTDdzkI4HNaNfFljdEqLteAdfAu3TNqZgrDpyB%2FKbYzEiIP2wVQd7PncjhAxa7dpkp7hrNROg6olNd8ujPpMM%2FAsS5zHjk%2FEa0e2Uttb%2BEfucXiOLT3iZmiSQuU7l%2FYKhIeNQ%2FZckrs&X-Amz-Signature=7438ba682617576313bd8095e26b4986af1e56a1533d120cacb965aef7f44477&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27QEAPO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboqURhEt%2BwWF8ddCEOY5ahhKTdNKxByYL2Tsm8oxjqQIgGzcQQYkV6Ie20x8XvtZzYhfAdA7J8ScqXKpbuDUReg0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMZ82DBm8%2FWfMKIiCrcAzB31ruLUQMzg4%2F4HmhRmnnq5rBcnYPPwFRFTF1%2B%2FySScCrilie23Wg9L%2FU3ny3mxdsqMFVCMisLf6WzAElQaS3qDeeriErs8FRW0yMYDyxEsxai3GzU9odMfqFoEHuM3L9T4g7QmSN2vJgNGIqcpuDdz0CFBhRI7pg6uRFW0RdR4CPX3eB36PPSlojz75pXCFk03As2uUlSkROFsfabX5S4RQVn%2BmzR96HTC%2Bx8CHJ8Ya3tSeOyYdQN1Fdj08SkdOkB%2BA9OVHyv%2F92ZWHLpE4SZm5ZPNfjWs%2BLP0tjQ5VbzC19bCCxS0b735G9FXzmD3s%2BqwpzjvSYucGCGoEj7aiw60mV6OlMOfutCb2dVDFPzVB3QazGkN6Fl1nZczLQc%2BbSSmaKa%2FmY1z2HgdZX0GcOu6v5Mpn5cWIKS2%2BONKdCxrA0nENr5FcGvUUiIijONMUfTbGzvZtxt4ss5rdIsDTelK6IkhpizkIt7a62Z9Kx3T2G1HSX2KeH3R1Mg%2ByCSYelhZFSnBov6QeTuBtQO5SsyxFPPZoMI0CzhxN8ppEbr7F4jtjb14DezDc7kKIgH%2FMToUZoGaBSzR%2BkN9xHSEZ2tNpfDBXETkyq70ChY2uEvAaEl04eUO%2BTcrtwzMMr%2ByL8GOqUBXT%2F%2FPRPAyUGvfAAMzsXLZF7qaaa2rXF276107W3OuQ0c1Kwiw3msV6GnYS79TBvd9ADj2IPQjbXiwRbV1aTDdzkI4HNaNfFljdEqLteAdfAu3TNqZgrDpyB%2FKbYzEiIP2wVQd7PncjhAxa7dpkp7hrNROg6olNd8ujPpMM%2FAsS5zHjk%2FEa0e2Uttb%2BEfucXiOLT3iZmiSQuU7l%2FYKhIeNQ%2FZckrs&X-Amz-Signature=aae67f335084188857986a077eb2d16ea50f981cfe911d7ef1d1dba246f42ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27QEAPO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboqURhEt%2BwWF8ddCEOY5ahhKTdNKxByYL2Tsm8oxjqQIgGzcQQYkV6Ie20x8XvtZzYhfAdA7J8ScqXKpbuDUReg0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMZ82DBm8%2FWfMKIiCrcAzB31ruLUQMzg4%2F4HmhRmnnq5rBcnYPPwFRFTF1%2B%2FySScCrilie23Wg9L%2FU3ny3mxdsqMFVCMisLf6WzAElQaS3qDeeriErs8FRW0yMYDyxEsxai3GzU9odMfqFoEHuM3L9T4g7QmSN2vJgNGIqcpuDdz0CFBhRI7pg6uRFW0RdR4CPX3eB36PPSlojz75pXCFk03As2uUlSkROFsfabX5S4RQVn%2BmzR96HTC%2Bx8CHJ8Ya3tSeOyYdQN1Fdj08SkdOkB%2BA9OVHyv%2F92ZWHLpE4SZm5ZPNfjWs%2BLP0tjQ5VbzC19bCCxS0b735G9FXzmD3s%2BqwpzjvSYucGCGoEj7aiw60mV6OlMOfutCb2dVDFPzVB3QazGkN6Fl1nZczLQc%2BbSSmaKa%2FmY1z2HgdZX0GcOu6v5Mpn5cWIKS2%2BONKdCxrA0nENr5FcGvUUiIijONMUfTbGzvZtxt4ss5rdIsDTelK6IkhpizkIt7a62Z9Kx3T2G1HSX2KeH3R1Mg%2ByCSYelhZFSnBov6QeTuBtQO5SsyxFPPZoMI0CzhxN8ppEbr7F4jtjb14DezDc7kKIgH%2FMToUZoGaBSzR%2BkN9xHSEZ2tNpfDBXETkyq70ChY2uEvAaEl04eUO%2BTcrtwzMMr%2ByL8GOqUBXT%2F%2FPRPAyUGvfAAMzsXLZF7qaaa2rXF276107W3OuQ0c1Kwiw3msV6GnYS79TBvd9ADj2IPQjbXiwRbV1aTDdzkI4HNaNfFljdEqLteAdfAu3TNqZgrDpyB%2FKbYzEiIP2wVQd7PncjhAxa7dpkp7hrNROg6olNd8ujPpMM%2FAsS5zHjk%2FEa0e2Uttb%2BEfucXiOLT3iZmiSQuU7l%2FYKhIeNQ%2FZckrs&X-Amz-Signature=a28d63811e54dc714409c24748b712bcff48df1d04e5bd57aad733952d44807d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27QEAPO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboqURhEt%2BwWF8ddCEOY5ahhKTdNKxByYL2Tsm8oxjqQIgGzcQQYkV6Ie20x8XvtZzYhfAdA7J8ScqXKpbuDUReg0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMZ82DBm8%2FWfMKIiCrcAzB31ruLUQMzg4%2F4HmhRmnnq5rBcnYPPwFRFTF1%2B%2FySScCrilie23Wg9L%2FU3ny3mxdsqMFVCMisLf6WzAElQaS3qDeeriErs8FRW0yMYDyxEsxai3GzU9odMfqFoEHuM3L9T4g7QmSN2vJgNGIqcpuDdz0CFBhRI7pg6uRFW0RdR4CPX3eB36PPSlojz75pXCFk03As2uUlSkROFsfabX5S4RQVn%2BmzR96HTC%2Bx8CHJ8Ya3tSeOyYdQN1Fdj08SkdOkB%2BA9OVHyv%2F92ZWHLpE4SZm5ZPNfjWs%2BLP0tjQ5VbzC19bCCxS0b735G9FXzmD3s%2BqwpzjvSYucGCGoEj7aiw60mV6OlMOfutCb2dVDFPzVB3QazGkN6Fl1nZczLQc%2BbSSmaKa%2FmY1z2HgdZX0GcOu6v5Mpn5cWIKS2%2BONKdCxrA0nENr5FcGvUUiIijONMUfTbGzvZtxt4ss5rdIsDTelK6IkhpizkIt7a62Z9Kx3T2G1HSX2KeH3R1Mg%2ByCSYelhZFSnBov6QeTuBtQO5SsyxFPPZoMI0CzhxN8ppEbr7F4jtjb14DezDc7kKIgH%2FMToUZoGaBSzR%2BkN9xHSEZ2tNpfDBXETkyq70ChY2uEvAaEl04eUO%2BTcrtwzMMr%2ByL8GOqUBXT%2F%2FPRPAyUGvfAAMzsXLZF7qaaa2rXF276107W3OuQ0c1Kwiw3msV6GnYS79TBvd9ADj2IPQjbXiwRbV1aTDdzkI4HNaNfFljdEqLteAdfAu3TNqZgrDpyB%2FKbYzEiIP2wVQd7PncjhAxa7dpkp7hrNROg6olNd8ujPpMM%2FAsS5zHjk%2FEa0e2Uttb%2BEfucXiOLT3iZmiSQuU7l%2FYKhIeNQ%2FZckrs&X-Amz-Signature=8069ddff4b409fb1d76d9509faf16895c5361aa00cca0ceb6f206da58b866f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27QEAPO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboqURhEt%2BwWF8ddCEOY5ahhKTdNKxByYL2Tsm8oxjqQIgGzcQQYkV6Ie20x8XvtZzYhfAdA7J8ScqXKpbuDUReg0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMZ82DBm8%2FWfMKIiCrcAzB31ruLUQMzg4%2F4HmhRmnnq5rBcnYPPwFRFTF1%2B%2FySScCrilie23Wg9L%2FU3ny3mxdsqMFVCMisLf6WzAElQaS3qDeeriErs8FRW0yMYDyxEsxai3GzU9odMfqFoEHuM3L9T4g7QmSN2vJgNGIqcpuDdz0CFBhRI7pg6uRFW0RdR4CPX3eB36PPSlojz75pXCFk03As2uUlSkROFsfabX5S4RQVn%2BmzR96HTC%2Bx8CHJ8Ya3tSeOyYdQN1Fdj08SkdOkB%2BA9OVHyv%2F92ZWHLpE4SZm5ZPNfjWs%2BLP0tjQ5VbzC19bCCxS0b735G9FXzmD3s%2BqwpzjvSYucGCGoEj7aiw60mV6OlMOfutCb2dVDFPzVB3QazGkN6Fl1nZczLQc%2BbSSmaKa%2FmY1z2HgdZX0GcOu6v5Mpn5cWIKS2%2BONKdCxrA0nENr5FcGvUUiIijONMUfTbGzvZtxt4ss5rdIsDTelK6IkhpizkIt7a62Z9Kx3T2G1HSX2KeH3R1Mg%2ByCSYelhZFSnBov6QeTuBtQO5SsyxFPPZoMI0CzhxN8ppEbr7F4jtjb14DezDc7kKIgH%2FMToUZoGaBSzR%2BkN9xHSEZ2tNpfDBXETkyq70ChY2uEvAaEl04eUO%2BTcrtwzMMr%2ByL8GOqUBXT%2F%2FPRPAyUGvfAAMzsXLZF7qaaa2rXF276107W3OuQ0c1Kwiw3msV6GnYS79TBvd9ADj2IPQjbXiwRbV1aTDdzkI4HNaNfFljdEqLteAdfAu3TNqZgrDpyB%2FKbYzEiIP2wVQd7PncjhAxa7dpkp7hrNROg6olNd8ujPpMM%2FAsS5zHjk%2FEa0e2Uttb%2BEfucXiOLT3iZmiSQuU7l%2FYKhIeNQ%2FZckrs&X-Amz-Signature=07ae52c1292634d894d013b17032e5051ca0eb0719d0691964a95cfce8c9c9af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27QEAPO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboqURhEt%2BwWF8ddCEOY5ahhKTdNKxByYL2Tsm8oxjqQIgGzcQQYkV6Ie20x8XvtZzYhfAdA7J8ScqXKpbuDUReg0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFMZ82DBm8%2FWfMKIiCrcAzB31ruLUQMzg4%2F4HmhRmnnq5rBcnYPPwFRFTF1%2B%2FySScCrilie23Wg9L%2FU3ny3mxdsqMFVCMisLf6WzAElQaS3qDeeriErs8FRW0yMYDyxEsxai3GzU9odMfqFoEHuM3L9T4g7QmSN2vJgNGIqcpuDdz0CFBhRI7pg6uRFW0RdR4CPX3eB36PPSlojz75pXCFk03As2uUlSkROFsfabX5S4RQVn%2BmzR96HTC%2Bx8CHJ8Ya3tSeOyYdQN1Fdj08SkdOkB%2BA9OVHyv%2F92ZWHLpE4SZm5ZPNfjWs%2BLP0tjQ5VbzC19bCCxS0b735G9FXzmD3s%2BqwpzjvSYucGCGoEj7aiw60mV6OlMOfutCb2dVDFPzVB3QazGkN6Fl1nZczLQc%2BbSSmaKa%2FmY1z2HgdZX0GcOu6v5Mpn5cWIKS2%2BONKdCxrA0nENr5FcGvUUiIijONMUfTbGzvZtxt4ss5rdIsDTelK6IkhpizkIt7a62Z9Kx3T2G1HSX2KeH3R1Mg%2ByCSYelhZFSnBov6QeTuBtQO5SsyxFPPZoMI0CzhxN8ppEbr7F4jtjb14DezDc7kKIgH%2FMToUZoGaBSzR%2BkN9xHSEZ2tNpfDBXETkyq70ChY2uEvAaEl04eUO%2BTcrtwzMMr%2ByL8GOqUBXT%2F%2FPRPAyUGvfAAMzsXLZF7qaaa2rXF276107W3OuQ0c1Kwiw3msV6GnYS79TBvd9ADj2IPQjbXiwRbV1aTDdzkI4HNaNfFljdEqLteAdfAu3TNqZgrDpyB%2FKbYzEiIP2wVQd7PncjhAxa7dpkp7hrNROg6olNd8ujPpMM%2FAsS5zHjk%2FEa0e2Uttb%2BEfucXiOLT3iZmiSQuU7l%2FYKhIeNQ%2FZckrs&X-Amz-Signature=b6c91c9a4304c46f3abb0baf8aff37a10effddb75a25c8a7462ebe2b8c7c4c62&X-Amz-SignedHeaders=host&x-id=GetObject)
