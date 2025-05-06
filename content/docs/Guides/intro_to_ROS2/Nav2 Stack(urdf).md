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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH53IFVP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1M5rGMhOwKa7fZx2S7uNqpFilrPHkNg7Wi63kDoY8XgIgLAc2vzF9Jdw2HQhGacrKNJWYYuq6YKZb95Iyp0ssq7Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIYCP2B%2FlNeuLtoZMyrcA4mYQG9AHJ%2FTl72X%2FoFTwVRTQIdv8VNvKPPUfnsbhHyUFdRuiri4dEjlNZW%2BpQHU5KXnxafehyB5vVMMg%2B2qpbc35dC%2F0vYIku%2FQtfHJFaBePb3PtRjGyGFOmt2h%2BWpa%2Bxol%2FJlgd5BQIK4STKXhyCibUpZSD1ONTIVDwUE0WstXgWwoiyAnIzjef9TdwLH4BJf9har9rpmiOS8SP%2BoIu6CJUhrnD2CXeCAvaFSZad1qoTUTDyr60vhQUC9sGp%2BQnTFTYIR3%2FfqqbtOMoOzSSfjpzo6qAleIt9BWvR9y9HgWeQlvTJabIcdExPTpwyAeDGbzbyomzxnkUdmPH5PFvyN1dhFLFbrs%2FhDo6dhA%2BKcyC3jbHsNi%2FrWJrQv5%2FcvCSPlJdVPXDFs1%2FaMtSGfhQ1X5h0UgzvxA7ZFW0LKMYLd4%2BOZ8jhpZeiz52hZXh7TVeJd2T4va8gZ%2FmZ8DeDTxFrOGQA1P5H3Q%2BRY0gGec2PhmaS8XIriLDYxel5G6GIGSk0Xjt8J4GFTYlQ658bgmxYfrC7CZP8degPax3epg5%2FDjKwy4Coq3cK0sKoCA%2FuQDNGswARV8JytR1x%2FMLPOlfjsReR%2B8CcFY2MnTW1g2SZ3RinBWru24AbBanCc7MIq06cAGOqUB0sx%2B7OtwWI6au5JMmy1wjMc4VRQzqC07G7WBFU0bqc3Up3J%2FBN6q5sOWdwB9J03qx6YM4qwW117XW5yww19NVbk2VxApr1FmPWDzC4O0l2WILwHjtJFh1A1oFjsGsmev%2FUl597JEfboJxlGDK6lMxVTmhfg8e0fEBxxwLjWTou9jfkKC7wTp5vS%2F%2BoxnVVxjffVFnFFysJOd69wz%2BwFKUdtN4jhH&X-Amz-Signature=7433f3381c1fb7e5d96cd6f8a507970ae7ceca264957195fb1191c95c9bfebd8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH53IFVP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1M5rGMhOwKa7fZx2S7uNqpFilrPHkNg7Wi63kDoY8XgIgLAc2vzF9Jdw2HQhGacrKNJWYYuq6YKZb95Iyp0ssq7Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIYCP2B%2FlNeuLtoZMyrcA4mYQG9AHJ%2FTl72X%2FoFTwVRTQIdv8VNvKPPUfnsbhHyUFdRuiri4dEjlNZW%2BpQHU5KXnxafehyB5vVMMg%2B2qpbc35dC%2F0vYIku%2FQtfHJFaBePb3PtRjGyGFOmt2h%2BWpa%2Bxol%2FJlgd5BQIK4STKXhyCibUpZSD1ONTIVDwUE0WstXgWwoiyAnIzjef9TdwLH4BJf9har9rpmiOS8SP%2BoIu6CJUhrnD2CXeCAvaFSZad1qoTUTDyr60vhQUC9sGp%2BQnTFTYIR3%2FfqqbtOMoOzSSfjpzo6qAleIt9BWvR9y9HgWeQlvTJabIcdExPTpwyAeDGbzbyomzxnkUdmPH5PFvyN1dhFLFbrs%2FhDo6dhA%2BKcyC3jbHsNi%2FrWJrQv5%2FcvCSPlJdVPXDFs1%2FaMtSGfhQ1X5h0UgzvxA7ZFW0LKMYLd4%2BOZ8jhpZeiz52hZXh7TVeJd2T4va8gZ%2FmZ8DeDTxFrOGQA1P5H3Q%2BRY0gGec2PhmaS8XIriLDYxel5G6GIGSk0Xjt8J4GFTYlQ658bgmxYfrC7CZP8degPax3epg5%2FDjKwy4Coq3cK0sKoCA%2FuQDNGswARV8JytR1x%2FMLPOlfjsReR%2B8CcFY2MnTW1g2SZ3RinBWru24AbBanCc7MIq06cAGOqUB0sx%2B7OtwWI6au5JMmy1wjMc4VRQzqC07G7WBFU0bqc3Up3J%2FBN6q5sOWdwB9J03qx6YM4qwW117XW5yww19NVbk2VxApr1FmPWDzC4O0l2WILwHjtJFh1A1oFjsGsmev%2FUl597JEfboJxlGDK6lMxVTmhfg8e0fEBxxwLjWTou9jfkKC7wTp5vS%2F%2BoxnVVxjffVFnFFysJOd69wz%2BwFKUdtN4jhH&X-Amz-Signature=ee6d0eec15c3bea1b0af213630cc22094c622639e91d203369a93427ec50e6ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH53IFVP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1M5rGMhOwKa7fZx2S7uNqpFilrPHkNg7Wi63kDoY8XgIgLAc2vzF9Jdw2HQhGacrKNJWYYuq6YKZb95Iyp0ssq7Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIYCP2B%2FlNeuLtoZMyrcA4mYQG9AHJ%2FTl72X%2FoFTwVRTQIdv8VNvKPPUfnsbhHyUFdRuiri4dEjlNZW%2BpQHU5KXnxafehyB5vVMMg%2B2qpbc35dC%2F0vYIku%2FQtfHJFaBePb3PtRjGyGFOmt2h%2BWpa%2Bxol%2FJlgd5BQIK4STKXhyCibUpZSD1ONTIVDwUE0WstXgWwoiyAnIzjef9TdwLH4BJf9har9rpmiOS8SP%2BoIu6CJUhrnD2CXeCAvaFSZad1qoTUTDyr60vhQUC9sGp%2BQnTFTYIR3%2FfqqbtOMoOzSSfjpzo6qAleIt9BWvR9y9HgWeQlvTJabIcdExPTpwyAeDGbzbyomzxnkUdmPH5PFvyN1dhFLFbrs%2FhDo6dhA%2BKcyC3jbHsNi%2FrWJrQv5%2FcvCSPlJdVPXDFs1%2FaMtSGfhQ1X5h0UgzvxA7ZFW0LKMYLd4%2BOZ8jhpZeiz52hZXh7TVeJd2T4va8gZ%2FmZ8DeDTxFrOGQA1P5H3Q%2BRY0gGec2PhmaS8XIriLDYxel5G6GIGSk0Xjt8J4GFTYlQ658bgmxYfrC7CZP8degPax3epg5%2FDjKwy4Coq3cK0sKoCA%2FuQDNGswARV8JytR1x%2FMLPOlfjsReR%2B8CcFY2MnTW1g2SZ3RinBWru24AbBanCc7MIq06cAGOqUB0sx%2B7OtwWI6au5JMmy1wjMc4VRQzqC07G7WBFU0bqc3Up3J%2FBN6q5sOWdwB9J03qx6YM4qwW117XW5yww19NVbk2VxApr1FmPWDzC4O0l2WILwHjtJFh1A1oFjsGsmev%2FUl597JEfboJxlGDK6lMxVTmhfg8e0fEBxxwLjWTou9jfkKC7wTp5vS%2F%2BoxnVVxjffVFnFFysJOd69wz%2BwFKUdtN4jhH&X-Amz-Signature=ed989ed8a7038692566441f5653bcfbcbee6d02aca5c30965dbf92e89b9e7570&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH53IFVP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1M5rGMhOwKa7fZx2S7uNqpFilrPHkNg7Wi63kDoY8XgIgLAc2vzF9Jdw2HQhGacrKNJWYYuq6YKZb95Iyp0ssq7Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIYCP2B%2FlNeuLtoZMyrcA4mYQG9AHJ%2FTl72X%2FoFTwVRTQIdv8VNvKPPUfnsbhHyUFdRuiri4dEjlNZW%2BpQHU5KXnxafehyB5vVMMg%2B2qpbc35dC%2F0vYIku%2FQtfHJFaBePb3PtRjGyGFOmt2h%2BWpa%2Bxol%2FJlgd5BQIK4STKXhyCibUpZSD1ONTIVDwUE0WstXgWwoiyAnIzjef9TdwLH4BJf9har9rpmiOS8SP%2BoIu6CJUhrnD2CXeCAvaFSZad1qoTUTDyr60vhQUC9sGp%2BQnTFTYIR3%2FfqqbtOMoOzSSfjpzo6qAleIt9BWvR9y9HgWeQlvTJabIcdExPTpwyAeDGbzbyomzxnkUdmPH5PFvyN1dhFLFbrs%2FhDo6dhA%2BKcyC3jbHsNi%2FrWJrQv5%2FcvCSPlJdVPXDFs1%2FaMtSGfhQ1X5h0UgzvxA7ZFW0LKMYLd4%2BOZ8jhpZeiz52hZXh7TVeJd2T4va8gZ%2FmZ8DeDTxFrOGQA1P5H3Q%2BRY0gGec2PhmaS8XIriLDYxel5G6GIGSk0Xjt8J4GFTYlQ658bgmxYfrC7CZP8degPax3epg5%2FDjKwy4Coq3cK0sKoCA%2FuQDNGswARV8JytR1x%2FMLPOlfjsReR%2B8CcFY2MnTW1g2SZ3RinBWru24AbBanCc7MIq06cAGOqUB0sx%2B7OtwWI6au5JMmy1wjMc4VRQzqC07G7WBFU0bqc3Up3J%2FBN6q5sOWdwB9J03qx6YM4qwW117XW5yww19NVbk2VxApr1FmPWDzC4O0l2WILwHjtJFh1A1oFjsGsmev%2FUl597JEfboJxlGDK6lMxVTmhfg8e0fEBxxwLjWTou9jfkKC7wTp5vS%2F%2BoxnVVxjffVFnFFysJOd69wz%2BwFKUdtN4jhH&X-Amz-Signature=12eea97be31a148d1322c406bd5e3905cc736f57e811e20c774e5c03f7ed821a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH53IFVP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1M5rGMhOwKa7fZx2S7uNqpFilrPHkNg7Wi63kDoY8XgIgLAc2vzF9Jdw2HQhGacrKNJWYYuq6YKZb95Iyp0ssq7Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIYCP2B%2FlNeuLtoZMyrcA4mYQG9AHJ%2FTl72X%2FoFTwVRTQIdv8VNvKPPUfnsbhHyUFdRuiri4dEjlNZW%2BpQHU5KXnxafehyB5vVMMg%2B2qpbc35dC%2F0vYIku%2FQtfHJFaBePb3PtRjGyGFOmt2h%2BWpa%2Bxol%2FJlgd5BQIK4STKXhyCibUpZSD1ONTIVDwUE0WstXgWwoiyAnIzjef9TdwLH4BJf9har9rpmiOS8SP%2BoIu6CJUhrnD2CXeCAvaFSZad1qoTUTDyr60vhQUC9sGp%2BQnTFTYIR3%2FfqqbtOMoOzSSfjpzo6qAleIt9BWvR9y9HgWeQlvTJabIcdExPTpwyAeDGbzbyomzxnkUdmPH5PFvyN1dhFLFbrs%2FhDo6dhA%2BKcyC3jbHsNi%2FrWJrQv5%2FcvCSPlJdVPXDFs1%2FaMtSGfhQ1X5h0UgzvxA7ZFW0LKMYLd4%2BOZ8jhpZeiz52hZXh7TVeJd2T4va8gZ%2FmZ8DeDTxFrOGQA1P5H3Q%2BRY0gGec2PhmaS8XIriLDYxel5G6GIGSk0Xjt8J4GFTYlQ658bgmxYfrC7CZP8degPax3epg5%2FDjKwy4Coq3cK0sKoCA%2FuQDNGswARV8JytR1x%2FMLPOlfjsReR%2B8CcFY2MnTW1g2SZ3RinBWru24AbBanCc7MIq06cAGOqUB0sx%2B7OtwWI6au5JMmy1wjMc4VRQzqC07G7WBFU0bqc3Up3J%2FBN6q5sOWdwB9J03qx6YM4qwW117XW5yww19NVbk2VxApr1FmPWDzC4O0l2WILwHjtJFh1A1oFjsGsmev%2FUl597JEfboJxlGDK6lMxVTmhfg8e0fEBxxwLjWTou9jfkKC7wTp5vS%2F%2BoxnVVxjffVFnFFysJOd69wz%2BwFKUdtN4jhH&X-Amz-Signature=a5d1ba2749b8baffc2b6d81070d0978a3cd6b807db5bb03939e869e8d3aa2b37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH53IFVP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1M5rGMhOwKa7fZx2S7uNqpFilrPHkNg7Wi63kDoY8XgIgLAc2vzF9Jdw2HQhGacrKNJWYYuq6YKZb95Iyp0ssq7Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIYCP2B%2FlNeuLtoZMyrcA4mYQG9AHJ%2FTl72X%2FoFTwVRTQIdv8VNvKPPUfnsbhHyUFdRuiri4dEjlNZW%2BpQHU5KXnxafehyB5vVMMg%2B2qpbc35dC%2F0vYIku%2FQtfHJFaBePb3PtRjGyGFOmt2h%2BWpa%2Bxol%2FJlgd5BQIK4STKXhyCibUpZSD1ONTIVDwUE0WstXgWwoiyAnIzjef9TdwLH4BJf9har9rpmiOS8SP%2BoIu6CJUhrnD2CXeCAvaFSZad1qoTUTDyr60vhQUC9sGp%2BQnTFTYIR3%2FfqqbtOMoOzSSfjpzo6qAleIt9BWvR9y9HgWeQlvTJabIcdExPTpwyAeDGbzbyomzxnkUdmPH5PFvyN1dhFLFbrs%2FhDo6dhA%2BKcyC3jbHsNi%2FrWJrQv5%2FcvCSPlJdVPXDFs1%2FaMtSGfhQ1X5h0UgzvxA7ZFW0LKMYLd4%2BOZ8jhpZeiz52hZXh7TVeJd2T4va8gZ%2FmZ8DeDTxFrOGQA1P5H3Q%2BRY0gGec2PhmaS8XIriLDYxel5G6GIGSk0Xjt8J4GFTYlQ658bgmxYfrC7CZP8degPax3epg5%2FDjKwy4Coq3cK0sKoCA%2FuQDNGswARV8JytR1x%2FMLPOlfjsReR%2B8CcFY2MnTW1g2SZ3RinBWru24AbBanCc7MIq06cAGOqUB0sx%2B7OtwWI6au5JMmy1wjMc4VRQzqC07G7WBFU0bqc3Up3J%2FBN6q5sOWdwB9J03qx6YM4qwW117XW5yww19NVbk2VxApr1FmPWDzC4O0l2WILwHjtJFh1A1oFjsGsmev%2FUl597JEfboJxlGDK6lMxVTmhfg8e0fEBxxwLjWTou9jfkKC7wTp5vS%2F%2BoxnVVxjffVFnFFysJOd69wz%2BwFKUdtN4jhH&X-Amz-Signature=68705e92641d0bd81bc61389254643a8dcdeeae2be8a41cb160c0578e0775740&X-Amz-SignedHeaders=host&x-id=GetObject)
