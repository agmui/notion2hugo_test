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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHCYRBA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUXBvSeAN1QHGRi81MxhLVbu1UNkAFG0j2cMX7ItO3hAIhAIveMi2pjO93678xHaGTuB5SWe72yQG%2BHJYAVDlPFE5tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9PD9q4XktcetpDQq3APa8iJj3mWjqhdVQ8SDzMjG1AMxIK%2BPDWSWepwbxRtgHGG6A6HSXnkqRfiyzFsurnwSjSz1JK1t5uhNtDq8bM4h7jDkomPPVKSwtv3cwGfztoYl0QbsC8ZKmZH25UtlgQNeqllMxIrcgsuVTVXria7kGBqXu%2FZcDbK5rDQtuOzDVI1YsaKK%2FOXQrz3RC8KYjYTXbm%2FhsaITr0nqqQj7yYTnt19gllSm2lpzAvJzXMOtMJ5NXByQosG5r0ePkyr6Bh%2FKzRiEVSBaZpbkbu6%2BtD4ROQ7Q8Dexab%2Bo0UO2dzL7uXnEArRxUMw%2Fn7367qrsUWZ2qSzjnrm01N1PLK5S0UiGJxLLHCvORJk0aLKHc9wj3UQqCBf0REylachBJNotWw8TZkE06tmrhWL03BwHCWnasaWHuStD4pAFAR%2BI0K9PL3mlMMZqm1Tn%2F3AI%2FOgLVPFOqwCQ%2FM%2F50MeY4xQKyMT16RzTOja6Js%2BCKq2bdQus7uq8Wpb0M9uPmC6Fx%2B8qcwZ0%2BMTaqju7SdSUkpaiHjkJf%2BqLhJsRpZG050nBOYqY3uFa7JBtIQ2XqWStQkwwcHVANQGby2zx3XxT5%2B2XJFkF%2B3FMlTqP57aKqFI3EsvSA02028fuPfJDBnZX2zDu1%2FO%2BBjqkAb4j8D2TwMEOh7n0oi%2F2iIwDwIek2krY2do7WshG5V4sQfLGk1qt%2B2IA3b1fSHct3xhfhvYXgXWANoqhKIoBh1b1EqElyTkJkJ%2Fv8yi3rCjusmYWRlxpCpD%2BldugNotGj43bB9m6olFTp5svP%2FHajc807sAz7xdyEbr8y7iMCjybqhnK8Afy%2FssfCI0R%2BQAx%2FRY0V1VlR04zOM4MBMUO9lUux4bu&X-Amz-Signature=f9a8fff8904b0aae34c68b75c9a3a47a0e4f1435495e68c2d82362a932ba5c96&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHCYRBA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUXBvSeAN1QHGRi81MxhLVbu1UNkAFG0j2cMX7ItO3hAIhAIveMi2pjO93678xHaGTuB5SWe72yQG%2BHJYAVDlPFE5tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9PD9q4XktcetpDQq3APa8iJj3mWjqhdVQ8SDzMjG1AMxIK%2BPDWSWepwbxRtgHGG6A6HSXnkqRfiyzFsurnwSjSz1JK1t5uhNtDq8bM4h7jDkomPPVKSwtv3cwGfztoYl0QbsC8ZKmZH25UtlgQNeqllMxIrcgsuVTVXria7kGBqXu%2FZcDbK5rDQtuOzDVI1YsaKK%2FOXQrz3RC8KYjYTXbm%2FhsaITr0nqqQj7yYTnt19gllSm2lpzAvJzXMOtMJ5NXByQosG5r0ePkyr6Bh%2FKzRiEVSBaZpbkbu6%2BtD4ROQ7Q8Dexab%2Bo0UO2dzL7uXnEArRxUMw%2Fn7367qrsUWZ2qSzjnrm01N1PLK5S0UiGJxLLHCvORJk0aLKHc9wj3UQqCBf0REylachBJNotWw8TZkE06tmrhWL03BwHCWnasaWHuStD4pAFAR%2BI0K9PL3mlMMZqm1Tn%2F3AI%2FOgLVPFOqwCQ%2FM%2F50MeY4xQKyMT16RzTOja6Js%2BCKq2bdQus7uq8Wpb0M9uPmC6Fx%2B8qcwZ0%2BMTaqju7SdSUkpaiHjkJf%2BqLhJsRpZG050nBOYqY3uFa7JBtIQ2XqWStQkwwcHVANQGby2zx3XxT5%2B2XJFkF%2B3FMlTqP57aKqFI3EsvSA02028fuPfJDBnZX2zDu1%2FO%2BBjqkAb4j8D2TwMEOh7n0oi%2F2iIwDwIek2krY2do7WshG5V4sQfLGk1qt%2B2IA3b1fSHct3xhfhvYXgXWANoqhKIoBh1b1EqElyTkJkJ%2Fv8yi3rCjusmYWRlxpCpD%2BldugNotGj43bB9m6olFTp5svP%2FHajc807sAz7xdyEbr8y7iMCjybqhnK8Afy%2FssfCI0R%2BQAx%2FRY0V1VlR04zOM4MBMUO9lUux4bu&X-Amz-Signature=c9305a9b25fc09e2d99c5acf4e2e21d8c2a81bc96d2d3d07df3b2b41bf6c04bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHCYRBA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUXBvSeAN1QHGRi81MxhLVbu1UNkAFG0j2cMX7ItO3hAIhAIveMi2pjO93678xHaGTuB5SWe72yQG%2BHJYAVDlPFE5tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9PD9q4XktcetpDQq3APa8iJj3mWjqhdVQ8SDzMjG1AMxIK%2BPDWSWepwbxRtgHGG6A6HSXnkqRfiyzFsurnwSjSz1JK1t5uhNtDq8bM4h7jDkomPPVKSwtv3cwGfztoYl0QbsC8ZKmZH25UtlgQNeqllMxIrcgsuVTVXria7kGBqXu%2FZcDbK5rDQtuOzDVI1YsaKK%2FOXQrz3RC8KYjYTXbm%2FhsaITr0nqqQj7yYTnt19gllSm2lpzAvJzXMOtMJ5NXByQosG5r0ePkyr6Bh%2FKzRiEVSBaZpbkbu6%2BtD4ROQ7Q8Dexab%2Bo0UO2dzL7uXnEArRxUMw%2Fn7367qrsUWZ2qSzjnrm01N1PLK5S0UiGJxLLHCvORJk0aLKHc9wj3UQqCBf0REylachBJNotWw8TZkE06tmrhWL03BwHCWnasaWHuStD4pAFAR%2BI0K9PL3mlMMZqm1Tn%2F3AI%2FOgLVPFOqwCQ%2FM%2F50MeY4xQKyMT16RzTOja6Js%2BCKq2bdQus7uq8Wpb0M9uPmC6Fx%2B8qcwZ0%2BMTaqju7SdSUkpaiHjkJf%2BqLhJsRpZG050nBOYqY3uFa7JBtIQ2XqWStQkwwcHVANQGby2zx3XxT5%2B2XJFkF%2B3FMlTqP57aKqFI3EsvSA02028fuPfJDBnZX2zDu1%2FO%2BBjqkAb4j8D2TwMEOh7n0oi%2F2iIwDwIek2krY2do7WshG5V4sQfLGk1qt%2B2IA3b1fSHct3xhfhvYXgXWANoqhKIoBh1b1EqElyTkJkJ%2Fv8yi3rCjusmYWRlxpCpD%2BldugNotGj43bB9m6olFTp5svP%2FHajc807sAz7xdyEbr8y7iMCjybqhnK8Afy%2FssfCI0R%2BQAx%2FRY0V1VlR04zOM4MBMUO9lUux4bu&X-Amz-Signature=15d97d00d049561a21d1fa24a2e1004c97750ef7e01beb2297ca152f7eadd7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHCYRBA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUXBvSeAN1QHGRi81MxhLVbu1UNkAFG0j2cMX7ItO3hAIhAIveMi2pjO93678xHaGTuB5SWe72yQG%2BHJYAVDlPFE5tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9PD9q4XktcetpDQq3APa8iJj3mWjqhdVQ8SDzMjG1AMxIK%2BPDWSWepwbxRtgHGG6A6HSXnkqRfiyzFsurnwSjSz1JK1t5uhNtDq8bM4h7jDkomPPVKSwtv3cwGfztoYl0QbsC8ZKmZH25UtlgQNeqllMxIrcgsuVTVXria7kGBqXu%2FZcDbK5rDQtuOzDVI1YsaKK%2FOXQrz3RC8KYjYTXbm%2FhsaITr0nqqQj7yYTnt19gllSm2lpzAvJzXMOtMJ5NXByQosG5r0ePkyr6Bh%2FKzRiEVSBaZpbkbu6%2BtD4ROQ7Q8Dexab%2Bo0UO2dzL7uXnEArRxUMw%2Fn7367qrsUWZ2qSzjnrm01N1PLK5S0UiGJxLLHCvORJk0aLKHc9wj3UQqCBf0REylachBJNotWw8TZkE06tmrhWL03BwHCWnasaWHuStD4pAFAR%2BI0K9PL3mlMMZqm1Tn%2F3AI%2FOgLVPFOqwCQ%2FM%2F50MeY4xQKyMT16RzTOja6Js%2BCKq2bdQus7uq8Wpb0M9uPmC6Fx%2B8qcwZ0%2BMTaqju7SdSUkpaiHjkJf%2BqLhJsRpZG050nBOYqY3uFa7JBtIQ2XqWStQkwwcHVANQGby2zx3XxT5%2B2XJFkF%2B3FMlTqP57aKqFI3EsvSA02028fuPfJDBnZX2zDu1%2FO%2BBjqkAb4j8D2TwMEOh7n0oi%2F2iIwDwIek2krY2do7WshG5V4sQfLGk1qt%2B2IA3b1fSHct3xhfhvYXgXWANoqhKIoBh1b1EqElyTkJkJ%2Fv8yi3rCjusmYWRlxpCpD%2BldugNotGj43bB9m6olFTp5svP%2FHajc807sAz7xdyEbr8y7iMCjybqhnK8Afy%2FssfCI0R%2BQAx%2FRY0V1VlR04zOM4MBMUO9lUux4bu&X-Amz-Signature=47315b6698bea9dab61cff9c799b4d808bd5e2327b4840573b49d77f00158341&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHCYRBA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUXBvSeAN1QHGRi81MxhLVbu1UNkAFG0j2cMX7ItO3hAIhAIveMi2pjO93678xHaGTuB5SWe72yQG%2BHJYAVDlPFE5tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9PD9q4XktcetpDQq3APa8iJj3mWjqhdVQ8SDzMjG1AMxIK%2BPDWSWepwbxRtgHGG6A6HSXnkqRfiyzFsurnwSjSz1JK1t5uhNtDq8bM4h7jDkomPPVKSwtv3cwGfztoYl0QbsC8ZKmZH25UtlgQNeqllMxIrcgsuVTVXria7kGBqXu%2FZcDbK5rDQtuOzDVI1YsaKK%2FOXQrz3RC8KYjYTXbm%2FhsaITr0nqqQj7yYTnt19gllSm2lpzAvJzXMOtMJ5NXByQosG5r0ePkyr6Bh%2FKzRiEVSBaZpbkbu6%2BtD4ROQ7Q8Dexab%2Bo0UO2dzL7uXnEArRxUMw%2Fn7367qrsUWZ2qSzjnrm01N1PLK5S0UiGJxLLHCvORJk0aLKHc9wj3UQqCBf0REylachBJNotWw8TZkE06tmrhWL03BwHCWnasaWHuStD4pAFAR%2BI0K9PL3mlMMZqm1Tn%2F3AI%2FOgLVPFOqwCQ%2FM%2F50MeY4xQKyMT16RzTOja6Js%2BCKq2bdQus7uq8Wpb0M9uPmC6Fx%2B8qcwZ0%2BMTaqju7SdSUkpaiHjkJf%2BqLhJsRpZG050nBOYqY3uFa7JBtIQ2XqWStQkwwcHVANQGby2zx3XxT5%2B2XJFkF%2B3FMlTqP57aKqFI3EsvSA02028fuPfJDBnZX2zDu1%2FO%2BBjqkAb4j8D2TwMEOh7n0oi%2F2iIwDwIek2krY2do7WshG5V4sQfLGk1qt%2B2IA3b1fSHct3xhfhvYXgXWANoqhKIoBh1b1EqElyTkJkJ%2Fv8yi3rCjusmYWRlxpCpD%2BldugNotGj43bB9m6olFTp5svP%2FHajc807sAz7xdyEbr8y7iMCjybqhnK8Afy%2FssfCI0R%2BQAx%2FRY0V1VlR04zOM4MBMUO9lUux4bu&X-Amz-Signature=b9ca07b34a943b0c2cf63fb37c3f0e61acdbff7212b2c6d54bd309252f302df4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NHCYRBA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQDUXBvSeAN1QHGRi81MxhLVbu1UNkAFG0j2cMX7ItO3hAIhAIveMi2pjO93678xHaGTuB5SWe72yQG%2BHJYAVDlPFE5tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9PD9q4XktcetpDQq3APa8iJj3mWjqhdVQ8SDzMjG1AMxIK%2BPDWSWepwbxRtgHGG6A6HSXnkqRfiyzFsurnwSjSz1JK1t5uhNtDq8bM4h7jDkomPPVKSwtv3cwGfztoYl0QbsC8ZKmZH25UtlgQNeqllMxIrcgsuVTVXria7kGBqXu%2FZcDbK5rDQtuOzDVI1YsaKK%2FOXQrz3RC8KYjYTXbm%2FhsaITr0nqqQj7yYTnt19gllSm2lpzAvJzXMOtMJ5NXByQosG5r0ePkyr6Bh%2FKzRiEVSBaZpbkbu6%2BtD4ROQ7Q8Dexab%2Bo0UO2dzL7uXnEArRxUMw%2Fn7367qrsUWZ2qSzjnrm01N1PLK5S0UiGJxLLHCvORJk0aLKHc9wj3UQqCBf0REylachBJNotWw8TZkE06tmrhWL03BwHCWnasaWHuStD4pAFAR%2BI0K9PL3mlMMZqm1Tn%2F3AI%2FOgLVPFOqwCQ%2FM%2F50MeY4xQKyMT16RzTOja6Js%2BCKq2bdQus7uq8Wpb0M9uPmC6Fx%2B8qcwZ0%2BMTaqju7SdSUkpaiHjkJf%2BqLhJsRpZG050nBOYqY3uFa7JBtIQ2XqWStQkwwcHVANQGby2zx3XxT5%2B2XJFkF%2B3FMlTqP57aKqFI3EsvSA02028fuPfJDBnZX2zDu1%2FO%2BBjqkAb4j8D2TwMEOh7n0oi%2F2iIwDwIek2krY2do7WshG5V4sQfLGk1qt%2B2IA3b1fSHct3xhfhvYXgXWANoqhKIoBh1b1EqElyTkJkJ%2Fv8yi3rCjusmYWRlxpCpD%2BldugNotGj43bB9m6olFTp5svP%2FHajc807sAz7xdyEbr8y7iMCjybqhnK8Afy%2FssfCI0R%2BQAx%2FRY0V1VlR04zOM4MBMUO9lUux4bu&X-Amz-Signature=51b28df697d3e633f0fa43d94d8816e9bdd6f1bb857ec6d828d6fe84898ae5f9&X-Amz-SignedHeaders=host&x-id=GetObject)
