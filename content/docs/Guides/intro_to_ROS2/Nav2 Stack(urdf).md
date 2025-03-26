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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42SWM6E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjCO%2BBCHxrsjpnhA3oAXS3SQnZNOb3WKIOAvMctbDQgIhAJIvky1F4pZ2CQZzty336t6s8rMkJeiZXQ0dYXWeBuM6Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwpfm6Rh%2BQoNMKpYcsq3AOpOEYsjcONH2BSo52F0WhDYMv%2BpRnwzsxcAFzwk6T%2FhOYAlfUjyABVmmQCq7d26xiTxfbPlQCHpEF7aSbyYxs%2F6IF0o2Bq2BflNdgZ4VT3iJ1O%2FEyb3Bc6%2FoxzObPxPfGRM46slOL0zvAgmcLvRgamUw5ssDecLkHCEUkm2ucFV0%2BZRBR5nA0SPIuQJLUI2Ju8SDLfa71BFzg8EURPDbt2Ck6K9Jr8rjz3MiGz9CLVdfOnZnhmvNnwDAmAQH%2BjeNDwIc89jHZPW4FZ9Hj2tCB8cokGl%2FdCT1TeGX1jnv1pnHgzCXXZ%2B1oUB%2F24KFxtujv6IGeG1IqwG3AcAiVMeCTEHbLLTne4GhbtgPmzsxK8Ug%2FTzI9XmJVDq39IFCfh%2Bh%2FncH1mM61cEASp3Y5n2HV6SnXMiQxGESFT%2Bij17M%2FssUCepyjhqALu%2FHT7BeXF0800xjxBq3Ovro%2F6%2BT0lsquNHamWcdwEUiQvcIbYxVJoJqcRaf81fN6iYx5e29hXdj4p6UyJdDaQFE%2FXyu03IelfxX%2FYqYq%2Bbd7C5viVI0dnK8GzO2b3whSVpXxRXsx6SS5HAKiYPIXGO8XPEAXOkMbQ85QUvb3Yqzg99UPfPt33LhTD0mT%2FOyNK6EouhjCurY6%2FBjqkAZ1%2FthBWfezEi3NNAYtkJze%2B21lrA6ZT7VhES5%2BKLPwfAAhnhY5eSMBTatKO9KtuU54B8lYEZ0T0%2BuFA8wK3F6hMqTuODvXkIkeVInW8SQzI%2FSs2jUAkJhJw2ekxXHm7LOJrGyRP7eQrCApb2SN8cSoo2AKY5Z0Gow4lff8Z9ouMBF%2BvYbsuChouPbnGhXZVGrHy4Y5l2dmOpGVckFontJdwdin1&X-Amz-Signature=9ac709e349baaac755172dc10d1f7fffef38be989bf558b22cca49c9d08a42d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42SWM6E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjCO%2BBCHxrsjpnhA3oAXS3SQnZNOb3WKIOAvMctbDQgIhAJIvky1F4pZ2CQZzty336t6s8rMkJeiZXQ0dYXWeBuM6Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwpfm6Rh%2BQoNMKpYcsq3AOpOEYsjcONH2BSo52F0WhDYMv%2BpRnwzsxcAFzwk6T%2FhOYAlfUjyABVmmQCq7d26xiTxfbPlQCHpEF7aSbyYxs%2F6IF0o2Bq2BflNdgZ4VT3iJ1O%2FEyb3Bc6%2FoxzObPxPfGRM46slOL0zvAgmcLvRgamUw5ssDecLkHCEUkm2ucFV0%2BZRBR5nA0SPIuQJLUI2Ju8SDLfa71BFzg8EURPDbt2Ck6K9Jr8rjz3MiGz9CLVdfOnZnhmvNnwDAmAQH%2BjeNDwIc89jHZPW4FZ9Hj2tCB8cokGl%2FdCT1TeGX1jnv1pnHgzCXXZ%2B1oUB%2F24KFxtujv6IGeG1IqwG3AcAiVMeCTEHbLLTne4GhbtgPmzsxK8Ug%2FTzI9XmJVDq39IFCfh%2Bh%2FncH1mM61cEASp3Y5n2HV6SnXMiQxGESFT%2Bij17M%2FssUCepyjhqALu%2FHT7BeXF0800xjxBq3Ovro%2F6%2BT0lsquNHamWcdwEUiQvcIbYxVJoJqcRaf81fN6iYx5e29hXdj4p6UyJdDaQFE%2FXyu03IelfxX%2FYqYq%2Bbd7C5viVI0dnK8GzO2b3whSVpXxRXsx6SS5HAKiYPIXGO8XPEAXOkMbQ85QUvb3Yqzg99UPfPt33LhTD0mT%2FOyNK6EouhjCurY6%2FBjqkAZ1%2FthBWfezEi3NNAYtkJze%2B21lrA6ZT7VhES5%2BKLPwfAAhnhY5eSMBTatKO9KtuU54B8lYEZ0T0%2BuFA8wK3F6hMqTuODvXkIkeVInW8SQzI%2FSs2jUAkJhJw2ekxXHm7LOJrGyRP7eQrCApb2SN8cSoo2AKY5Z0Gow4lff8Z9ouMBF%2BvYbsuChouPbnGhXZVGrHy4Y5l2dmOpGVckFontJdwdin1&X-Amz-Signature=30914712a14b5b7387633c992a314816ca64b3de76cd103c89152b39609f48f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42SWM6E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjCO%2BBCHxrsjpnhA3oAXS3SQnZNOb3WKIOAvMctbDQgIhAJIvky1F4pZ2CQZzty336t6s8rMkJeiZXQ0dYXWeBuM6Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwpfm6Rh%2BQoNMKpYcsq3AOpOEYsjcONH2BSo52F0WhDYMv%2BpRnwzsxcAFzwk6T%2FhOYAlfUjyABVmmQCq7d26xiTxfbPlQCHpEF7aSbyYxs%2F6IF0o2Bq2BflNdgZ4VT3iJ1O%2FEyb3Bc6%2FoxzObPxPfGRM46slOL0zvAgmcLvRgamUw5ssDecLkHCEUkm2ucFV0%2BZRBR5nA0SPIuQJLUI2Ju8SDLfa71BFzg8EURPDbt2Ck6K9Jr8rjz3MiGz9CLVdfOnZnhmvNnwDAmAQH%2BjeNDwIc89jHZPW4FZ9Hj2tCB8cokGl%2FdCT1TeGX1jnv1pnHgzCXXZ%2B1oUB%2F24KFxtujv6IGeG1IqwG3AcAiVMeCTEHbLLTne4GhbtgPmzsxK8Ug%2FTzI9XmJVDq39IFCfh%2Bh%2FncH1mM61cEASp3Y5n2HV6SnXMiQxGESFT%2Bij17M%2FssUCepyjhqALu%2FHT7BeXF0800xjxBq3Ovro%2F6%2BT0lsquNHamWcdwEUiQvcIbYxVJoJqcRaf81fN6iYx5e29hXdj4p6UyJdDaQFE%2FXyu03IelfxX%2FYqYq%2Bbd7C5viVI0dnK8GzO2b3whSVpXxRXsx6SS5HAKiYPIXGO8XPEAXOkMbQ85QUvb3Yqzg99UPfPt33LhTD0mT%2FOyNK6EouhjCurY6%2FBjqkAZ1%2FthBWfezEi3NNAYtkJze%2B21lrA6ZT7VhES5%2BKLPwfAAhnhY5eSMBTatKO9KtuU54B8lYEZ0T0%2BuFA8wK3F6hMqTuODvXkIkeVInW8SQzI%2FSs2jUAkJhJw2ekxXHm7LOJrGyRP7eQrCApb2SN8cSoo2AKY5Z0Gow4lff8Z9ouMBF%2BvYbsuChouPbnGhXZVGrHy4Y5l2dmOpGVckFontJdwdin1&X-Amz-Signature=6369c3e1de71ff86ffad08c0597f39e65c0161db5c3eed7b2200b33be55095f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42SWM6E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjCO%2BBCHxrsjpnhA3oAXS3SQnZNOb3WKIOAvMctbDQgIhAJIvky1F4pZ2CQZzty336t6s8rMkJeiZXQ0dYXWeBuM6Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwpfm6Rh%2BQoNMKpYcsq3AOpOEYsjcONH2BSo52F0WhDYMv%2BpRnwzsxcAFzwk6T%2FhOYAlfUjyABVmmQCq7d26xiTxfbPlQCHpEF7aSbyYxs%2F6IF0o2Bq2BflNdgZ4VT3iJ1O%2FEyb3Bc6%2FoxzObPxPfGRM46slOL0zvAgmcLvRgamUw5ssDecLkHCEUkm2ucFV0%2BZRBR5nA0SPIuQJLUI2Ju8SDLfa71BFzg8EURPDbt2Ck6K9Jr8rjz3MiGz9CLVdfOnZnhmvNnwDAmAQH%2BjeNDwIc89jHZPW4FZ9Hj2tCB8cokGl%2FdCT1TeGX1jnv1pnHgzCXXZ%2B1oUB%2F24KFxtujv6IGeG1IqwG3AcAiVMeCTEHbLLTne4GhbtgPmzsxK8Ug%2FTzI9XmJVDq39IFCfh%2Bh%2FncH1mM61cEASp3Y5n2HV6SnXMiQxGESFT%2Bij17M%2FssUCepyjhqALu%2FHT7BeXF0800xjxBq3Ovro%2F6%2BT0lsquNHamWcdwEUiQvcIbYxVJoJqcRaf81fN6iYx5e29hXdj4p6UyJdDaQFE%2FXyu03IelfxX%2FYqYq%2Bbd7C5viVI0dnK8GzO2b3whSVpXxRXsx6SS5HAKiYPIXGO8XPEAXOkMbQ85QUvb3Yqzg99UPfPt33LhTD0mT%2FOyNK6EouhjCurY6%2FBjqkAZ1%2FthBWfezEi3NNAYtkJze%2B21lrA6ZT7VhES5%2BKLPwfAAhnhY5eSMBTatKO9KtuU54B8lYEZ0T0%2BuFA8wK3F6hMqTuODvXkIkeVInW8SQzI%2FSs2jUAkJhJw2ekxXHm7LOJrGyRP7eQrCApb2SN8cSoo2AKY5Z0Gow4lff8Z9ouMBF%2BvYbsuChouPbnGhXZVGrHy4Y5l2dmOpGVckFontJdwdin1&X-Amz-Signature=0a558ef9ee9747482425aaa5ffab04c001d24ded3921c2f6567fc7aab8515771&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42SWM6E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjCO%2BBCHxrsjpnhA3oAXS3SQnZNOb3WKIOAvMctbDQgIhAJIvky1F4pZ2CQZzty336t6s8rMkJeiZXQ0dYXWeBuM6Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwpfm6Rh%2BQoNMKpYcsq3AOpOEYsjcONH2BSo52F0WhDYMv%2BpRnwzsxcAFzwk6T%2FhOYAlfUjyABVmmQCq7d26xiTxfbPlQCHpEF7aSbyYxs%2F6IF0o2Bq2BflNdgZ4VT3iJ1O%2FEyb3Bc6%2FoxzObPxPfGRM46slOL0zvAgmcLvRgamUw5ssDecLkHCEUkm2ucFV0%2BZRBR5nA0SPIuQJLUI2Ju8SDLfa71BFzg8EURPDbt2Ck6K9Jr8rjz3MiGz9CLVdfOnZnhmvNnwDAmAQH%2BjeNDwIc89jHZPW4FZ9Hj2tCB8cokGl%2FdCT1TeGX1jnv1pnHgzCXXZ%2B1oUB%2F24KFxtujv6IGeG1IqwG3AcAiVMeCTEHbLLTne4GhbtgPmzsxK8Ug%2FTzI9XmJVDq39IFCfh%2Bh%2FncH1mM61cEASp3Y5n2HV6SnXMiQxGESFT%2Bij17M%2FssUCepyjhqALu%2FHT7BeXF0800xjxBq3Ovro%2F6%2BT0lsquNHamWcdwEUiQvcIbYxVJoJqcRaf81fN6iYx5e29hXdj4p6UyJdDaQFE%2FXyu03IelfxX%2FYqYq%2Bbd7C5viVI0dnK8GzO2b3whSVpXxRXsx6SS5HAKiYPIXGO8XPEAXOkMbQ85QUvb3Yqzg99UPfPt33LhTD0mT%2FOyNK6EouhjCurY6%2FBjqkAZ1%2FthBWfezEi3NNAYtkJze%2B21lrA6ZT7VhES5%2BKLPwfAAhnhY5eSMBTatKO9KtuU54B8lYEZ0T0%2BuFA8wK3F6hMqTuODvXkIkeVInW8SQzI%2FSs2jUAkJhJw2ekxXHm7LOJrGyRP7eQrCApb2SN8cSoo2AKY5Z0Gow4lff8Z9ouMBF%2BvYbsuChouPbnGhXZVGrHy4Y5l2dmOpGVckFontJdwdin1&X-Amz-Signature=0285c1f50cc3498c827eed9aa113d6abea66379e7b9cfe7cbf98c2b1cc647e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42SWM6E%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BjCO%2BBCHxrsjpnhA3oAXS3SQnZNOb3WKIOAvMctbDQgIhAJIvky1F4pZ2CQZzty336t6s8rMkJeiZXQ0dYXWeBuM6Kv8DCCcQABoMNjM3NDIzMTgzODA1Igwpfm6Rh%2BQoNMKpYcsq3AOpOEYsjcONH2BSo52F0WhDYMv%2BpRnwzsxcAFzwk6T%2FhOYAlfUjyABVmmQCq7d26xiTxfbPlQCHpEF7aSbyYxs%2F6IF0o2Bq2BflNdgZ4VT3iJ1O%2FEyb3Bc6%2FoxzObPxPfGRM46slOL0zvAgmcLvRgamUw5ssDecLkHCEUkm2ucFV0%2BZRBR5nA0SPIuQJLUI2Ju8SDLfa71BFzg8EURPDbt2Ck6K9Jr8rjz3MiGz9CLVdfOnZnhmvNnwDAmAQH%2BjeNDwIc89jHZPW4FZ9Hj2tCB8cokGl%2FdCT1TeGX1jnv1pnHgzCXXZ%2B1oUB%2F24KFxtujv6IGeG1IqwG3AcAiVMeCTEHbLLTne4GhbtgPmzsxK8Ug%2FTzI9XmJVDq39IFCfh%2Bh%2FncH1mM61cEASp3Y5n2HV6SnXMiQxGESFT%2Bij17M%2FssUCepyjhqALu%2FHT7BeXF0800xjxBq3Ovro%2F6%2BT0lsquNHamWcdwEUiQvcIbYxVJoJqcRaf81fN6iYx5e29hXdj4p6UyJdDaQFE%2FXyu03IelfxX%2FYqYq%2Bbd7C5viVI0dnK8GzO2b3whSVpXxRXsx6SS5HAKiYPIXGO8XPEAXOkMbQ85QUvb3Yqzg99UPfPt33LhTD0mT%2FOyNK6EouhjCurY6%2FBjqkAZ1%2FthBWfezEi3NNAYtkJze%2B21lrA6ZT7VhES5%2BKLPwfAAhnhY5eSMBTatKO9KtuU54B8lYEZ0T0%2BuFA8wK3F6hMqTuODvXkIkeVInW8SQzI%2FSs2jUAkJhJw2ekxXHm7LOJrGyRP7eQrCApb2SN8cSoo2AKY5Z0Gow4lff8Z9ouMBF%2BvYbsuChouPbnGhXZVGrHy4Y5l2dmOpGVckFontJdwdin1&X-Amz-Signature=988722e1d64e4aa7d7533de2c7c004a1793889cda1c1bebb69426e7d2da406f0&X-Amz-SignedHeaders=host&x-id=GetObject)
