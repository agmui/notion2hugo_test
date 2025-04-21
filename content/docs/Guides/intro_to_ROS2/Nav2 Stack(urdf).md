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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR72U4DW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDOQNfT%2FKKlrUrSVvB8ostgxet9lnFHkTsK%2BHp0L2VQuAIgZ9fMfKuqSU6R46C19gAxg00mB9yb7aBkYYfh%2FppnpWwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnyKBljuB22OoolpyrcA1w3z3p%2BsSI%2B15nIsh9a58MH03DIVJ4I4AuZEh3woSx%2FR%2BtGVRfUwSD6SK13y3zB2YDynYPwLYAIJozujRY%2BUOPcqMSuYrgxHe%2BVJDlhV4n60lDCOYmqOdcw%2Fqmlnjt%2FFiiA275c319vrbR9d3TMdzgj5tF8%2F0ctLvnFMqZdyJb%2F1zdVeC8imezUDzQTb59jbNSMLZTIMGY5VXF7GL8p2oAUYrdpOOKXE92kxHO9XZpfTfWhuhBARa0gSq0R5MCWDy620sWPv8fgLfZCKlGqTHq%2BtCLCTWnv3r8pbhJf530IG1gi9hqgC8hFlwufpQ%2BPOkljeevlZ8XnDIOlDZmWp%2B%2F4I%2BJhRF47jbGs2LAixXtApYBAz44yt5mpmFLiVGUqc3NPf7Sf4%2FYXojHFx9us1zMeiVihuy%2FRxXVim2IPqV8VJ1gKWTiRoQO6vMKBheBvQwyBKZHb7RB%2B0NgdWvo5ZbY33CRmmkPLUDpAVJTa%2BFCl6BGAfuCaA9P4ZC%2Bp2L078NnPX4auWH7kMU6bBLJSYw%2BUIS4jLEhFrorxRJUmdsP6Xax1twcFdcoGBXpnPNoXlOeHEHGSWioxJpj9haFTBtggeSK3OrmHo%2FTZjMAIOGMLmTALqA3yfAqaRB0QMJnYl8AGOqUB8%2BZZdQzC7TAicFuNs2rW4pyfXpTBuo5cJfSw%2FKiNK0uW7caHUbgtJHVZSipVuorHq0hPoJWPP%2BE9X8s91kX7PqNma3KAXhSk9r1D1Bjb9pNhe06KD2NsFCY9cF7g7SXOknFO42cUtfBkQ%2FHQ3b5uOGoVCcWfwV0lnS1bz%2FzGodLv9%2Bp%2FN7qjl9HfBv3rwzU0VyxkJNTclWJijFnG7PoxXNEL7DQL&X-Amz-Signature=40d4a1ab3b743a229cb4ed45436621a75869be1749891ff9a4698dbe9ab72ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR72U4DW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDOQNfT%2FKKlrUrSVvB8ostgxet9lnFHkTsK%2BHp0L2VQuAIgZ9fMfKuqSU6R46C19gAxg00mB9yb7aBkYYfh%2FppnpWwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnyKBljuB22OoolpyrcA1w3z3p%2BsSI%2B15nIsh9a58MH03DIVJ4I4AuZEh3woSx%2FR%2BtGVRfUwSD6SK13y3zB2YDynYPwLYAIJozujRY%2BUOPcqMSuYrgxHe%2BVJDlhV4n60lDCOYmqOdcw%2Fqmlnjt%2FFiiA275c319vrbR9d3TMdzgj5tF8%2F0ctLvnFMqZdyJb%2F1zdVeC8imezUDzQTb59jbNSMLZTIMGY5VXF7GL8p2oAUYrdpOOKXE92kxHO9XZpfTfWhuhBARa0gSq0R5MCWDy620sWPv8fgLfZCKlGqTHq%2BtCLCTWnv3r8pbhJf530IG1gi9hqgC8hFlwufpQ%2BPOkljeevlZ8XnDIOlDZmWp%2B%2F4I%2BJhRF47jbGs2LAixXtApYBAz44yt5mpmFLiVGUqc3NPf7Sf4%2FYXojHFx9us1zMeiVihuy%2FRxXVim2IPqV8VJ1gKWTiRoQO6vMKBheBvQwyBKZHb7RB%2B0NgdWvo5ZbY33CRmmkPLUDpAVJTa%2BFCl6BGAfuCaA9P4ZC%2Bp2L078NnPX4auWH7kMU6bBLJSYw%2BUIS4jLEhFrorxRJUmdsP6Xax1twcFdcoGBXpnPNoXlOeHEHGSWioxJpj9haFTBtggeSK3OrmHo%2FTZjMAIOGMLmTALqA3yfAqaRB0QMJnYl8AGOqUB8%2BZZdQzC7TAicFuNs2rW4pyfXpTBuo5cJfSw%2FKiNK0uW7caHUbgtJHVZSipVuorHq0hPoJWPP%2BE9X8s91kX7PqNma3KAXhSk9r1D1Bjb9pNhe06KD2NsFCY9cF7g7SXOknFO42cUtfBkQ%2FHQ3b5uOGoVCcWfwV0lnS1bz%2FzGodLv9%2Bp%2FN7qjl9HfBv3rwzU0VyxkJNTclWJijFnG7PoxXNEL7DQL&X-Amz-Signature=963a628e3f66be191b89932cf4b38ca648709a003f63dad7a6144ac7de51a5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR72U4DW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDOQNfT%2FKKlrUrSVvB8ostgxet9lnFHkTsK%2BHp0L2VQuAIgZ9fMfKuqSU6R46C19gAxg00mB9yb7aBkYYfh%2FppnpWwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnyKBljuB22OoolpyrcA1w3z3p%2BsSI%2B15nIsh9a58MH03DIVJ4I4AuZEh3woSx%2FR%2BtGVRfUwSD6SK13y3zB2YDynYPwLYAIJozujRY%2BUOPcqMSuYrgxHe%2BVJDlhV4n60lDCOYmqOdcw%2Fqmlnjt%2FFiiA275c319vrbR9d3TMdzgj5tF8%2F0ctLvnFMqZdyJb%2F1zdVeC8imezUDzQTb59jbNSMLZTIMGY5VXF7GL8p2oAUYrdpOOKXE92kxHO9XZpfTfWhuhBARa0gSq0R5MCWDy620sWPv8fgLfZCKlGqTHq%2BtCLCTWnv3r8pbhJf530IG1gi9hqgC8hFlwufpQ%2BPOkljeevlZ8XnDIOlDZmWp%2B%2F4I%2BJhRF47jbGs2LAixXtApYBAz44yt5mpmFLiVGUqc3NPf7Sf4%2FYXojHFx9us1zMeiVihuy%2FRxXVim2IPqV8VJ1gKWTiRoQO6vMKBheBvQwyBKZHb7RB%2B0NgdWvo5ZbY33CRmmkPLUDpAVJTa%2BFCl6BGAfuCaA9P4ZC%2Bp2L078NnPX4auWH7kMU6bBLJSYw%2BUIS4jLEhFrorxRJUmdsP6Xax1twcFdcoGBXpnPNoXlOeHEHGSWioxJpj9haFTBtggeSK3OrmHo%2FTZjMAIOGMLmTALqA3yfAqaRB0QMJnYl8AGOqUB8%2BZZdQzC7TAicFuNs2rW4pyfXpTBuo5cJfSw%2FKiNK0uW7caHUbgtJHVZSipVuorHq0hPoJWPP%2BE9X8s91kX7PqNma3KAXhSk9r1D1Bjb9pNhe06KD2NsFCY9cF7g7SXOknFO42cUtfBkQ%2FHQ3b5uOGoVCcWfwV0lnS1bz%2FzGodLv9%2Bp%2FN7qjl9HfBv3rwzU0VyxkJNTclWJijFnG7PoxXNEL7DQL&X-Amz-Signature=5f8a48811b378c89eb19591dcee5f574dfc09c372d07ca78110ea2c5dedeeb31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR72U4DW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDOQNfT%2FKKlrUrSVvB8ostgxet9lnFHkTsK%2BHp0L2VQuAIgZ9fMfKuqSU6R46C19gAxg00mB9yb7aBkYYfh%2FppnpWwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnyKBljuB22OoolpyrcA1w3z3p%2BsSI%2B15nIsh9a58MH03DIVJ4I4AuZEh3woSx%2FR%2BtGVRfUwSD6SK13y3zB2YDynYPwLYAIJozujRY%2BUOPcqMSuYrgxHe%2BVJDlhV4n60lDCOYmqOdcw%2Fqmlnjt%2FFiiA275c319vrbR9d3TMdzgj5tF8%2F0ctLvnFMqZdyJb%2F1zdVeC8imezUDzQTb59jbNSMLZTIMGY5VXF7GL8p2oAUYrdpOOKXE92kxHO9XZpfTfWhuhBARa0gSq0R5MCWDy620sWPv8fgLfZCKlGqTHq%2BtCLCTWnv3r8pbhJf530IG1gi9hqgC8hFlwufpQ%2BPOkljeevlZ8XnDIOlDZmWp%2B%2F4I%2BJhRF47jbGs2LAixXtApYBAz44yt5mpmFLiVGUqc3NPf7Sf4%2FYXojHFx9us1zMeiVihuy%2FRxXVim2IPqV8VJ1gKWTiRoQO6vMKBheBvQwyBKZHb7RB%2B0NgdWvo5ZbY33CRmmkPLUDpAVJTa%2BFCl6BGAfuCaA9P4ZC%2Bp2L078NnPX4auWH7kMU6bBLJSYw%2BUIS4jLEhFrorxRJUmdsP6Xax1twcFdcoGBXpnPNoXlOeHEHGSWioxJpj9haFTBtggeSK3OrmHo%2FTZjMAIOGMLmTALqA3yfAqaRB0QMJnYl8AGOqUB8%2BZZdQzC7TAicFuNs2rW4pyfXpTBuo5cJfSw%2FKiNK0uW7caHUbgtJHVZSipVuorHq0hPoJWPP%2BE9X8s91kX7PqNma3KAXhSk9r1D1Bjb9pNhe06KD2NsFCY9cF7g7SXOknFO42cUtfBkQ%2FHQ3b5uOGoVCcWfwV0lnS1bz%2FzGodLv9%2Bp%2FN7qjl9HfBv3rwzU0VyxkJNTclWJijFnG7PoxXNEL7DQL&X-Amz-Signature=eaeb7892b5143ab0f1b335b4a4830844cceb039fd2fc3ef723292a6030d4b274&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR72U4DW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDOQNfT%2FKKlrUrSVvB8ostgxet9lnFHkTsK%2BHp0L2VQuAIgZ9fMfKuqSU6R46C19gAxg00mB9yb7aBkYYfh%2FppnpWwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnyKBljuB22OoolpyrcA1w3z3p%2BsSI%2B15nIsh9a58MH03DIVJ4I4AuZEh3woSx%2FR%2BtGVRfUwSD6SK13y3zB2YDynYPwLYAIJozujRY%2BUOPcqMSuYrgxHe%2BVJDlhV4n60lDCOYmqOdcw%2Fqmlnjt%2FFiiA275c319vrbR9d3TMdzgj5tF8%2F0ctLvnFMqZdyJb%2F1zdVeC8imezUDzQTb59jbNSMLZTIMGY5VXF7GL8p2oAUYrdpOOKXE92kxHO9XZpfTfWhuhBARa0gSq0R5MCWDy620sWPv8fgLfZCKlGqTHq%2BtCLCTWnv3r8pbhJf530IG1gi9hqgC8hFlwufpQ%2BPOkljeevlZ8XnDIOlDZmWp%2B%2F4I%2BJhRF47jbGs2LAixXtApYBAz44yt5mpmFLiVGUqc3NPf7Sf4%2FYXojHFx9us1zMeiVihuy%2FRxXVim2IPqV8VJ1gKWTiRoQO6vMKBheBvQwyBKZHb7RB%2B0NgdWvo5ZbY33CRmmkPLUDpAVJTa%2BFCl6BGAfuCaA9P4ZC%2Bp2L078NnPX4auWH7kMU6bBLJSYw%2BUIS4jLEhFrorxRJUmdsP6Xax1twcFdcoGBXpnPNoXlOeHEHGSWioxJpj9haFTBtggeSK3OrmHo%2FTZjMAIOGMLmTALqA3yfAqaRB0QMJnYl8AGOqUB8%2BZZdQzC7TAicFuNs2rW4pyfXpTBuo5cJfSw%2FKiNK0uW7caHUbgtJHVZSipVuorHq0hPoJWPP%2BE9X8s91kX7PqNma3KAXhSk9r1D1Bjb9pNhe06KD2NsFCY9cF7g7SXOknFO42cUtfBkQ%2FHQ3b5uOGoVCcWfwV0lnS1bz%2FzGodLv9%2Bp%2FN7qjl9HfBv3rwzU0VyxkJNTclWJijFnG7PoxXNEL7DQL&X-Amz-Signature=33a79a3ee38cac41997d348ebedeb0646a97e8cf10ccca35a61c4fcb84648b53&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR72U4DW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDOQNfT%2FKKlrUrSVvB8ostgxet9lnFHkTsK%2BHp0L2VQuAIgZ9fMfKuqSU6R46C19gAxg00mB9yb7aBkYYfh%2FppnpWwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnyKBljuB22OoolpyrcA1w3z3p%2BsSI%2B15nIsh9a58MH03DIVJ4I4AuZEh3woSx%2FR%2BtGVRfUwSD6SK13y3zB2YDynYPwLYAIJozujRY%2BUOPcqMSuYrgxHe%2BVJDlhV4n60lDCOYmqOdcw%2Fqmlnjt%2FFiiA275c319vrbR9d3TMdzgj5tF8%2F0ctLvnFMqZdyJb%2F1zdVeC8imezUDzQTb59jbNSMLZTIMGY5VXF7GL8p2oAUYrdpOOKXE92kxHO9XZpfTfWhuhBARa0gSq0R5MCWDy620sWPv8fgLfZCKlGqTHq%2BtCLCTWnv3r8pbhJf530IG1gi9hqgC8hFlwufpQ%2BPOkljeevlZ8XnDIOlDZmWp%2B%2F4I%2BJhRF47jbGs2LAixXtApYBAz44yt5mpmFLiVGUqc3NPf7Sf4%2FYXojHFx9us1zMeiVihuy%2FRxXVim2IPqV8VJ1gKWTiRoQO6vMKBheBvQwyBKZHb7RB%2B0NgdWvo5ZbY33CRmmkPLUDpAVJTa%2BFCl6BGAfuCaA9P4ZC%2Bp2L078NnPX4auWH7kMU6bBLJSYw%2BUIS4jLEhFrorxRJUmdsP6Xax1twcFdcoGBXpnPNoXlOeHEHGSWioxJpj9haFTBtggeSK3OrmHo%2FTZjMAIOGMLmTALqA3yfAqaRB0QMJnYl8AGOqUB8%2BZZdQzC7TAicFuNs2rW4pyfXpTBuo5cJfSw%2FKiNK0uW7caHUbgtJHVZSipVuorHq0hPoJWPP%2BE9X8s91kX7PqNma3KAXhSk9r1D1Bjb9pNhe06KD2NsFCY9cF7g7SXOknFO42cUtfBkQ%2FHQ3b5uOGoVCcWfwV0lnS1bz%2FzGodLv9%2Bp%2FN7qjl9HfBv3rwzU0VyxkJNTclWJijFnG7PoxXNEL7DQL&X-Amz-Signature=27984fdb9de08ef391bde6b7671a41c840664b6853c177f03ed34c510ed1cb7f&X-Amz-SignedHeaders=host&x-id=GetObject)
