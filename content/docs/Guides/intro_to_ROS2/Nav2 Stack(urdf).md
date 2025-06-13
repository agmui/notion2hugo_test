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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRJULQN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCSYknMHlViV1xQEK4ADPAxkOwROXgkv%2BdSqEhiqsI2ygIgF0dVnI7a8hwDZ0YIS9a0wmx12FrL0eHKxs46dqeQjeUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIr8s6keJ9PYGsSzZSrcAyHybgCEfgfQgoKaPdM4lejVqS7YYNRyAJMjJOcCkaejCKjS48sbfA80DJj%2FReTJbf7puVNeUlfa0Q76Outs5BOWeLk87kvOV8gnc8Vlim3rtlXRmLoBvYbuNDnFZwDK7ALgXA5YDU4bpUkABkixuBKwC71BVGQmbfZMxChofycj5Y6Qd1nsgLXsCgTLJqxycMoKdnCCaV0hvf0Nv3YfxUS%2FflFYlu88wBjETD1D%2BQ%2BnsOi2MfKvlnU9zrOh2NS6rfWaQbzoKp3FJxrDt94JQwblRvaSKw6e9H40%2B%2Fv3ERcslMijZOJlWESE5gIFVenj7BPtW%2FDB2%2BVU0xq3NoB80FoODiZGU0yZ7zQqXMh6%2BEYzlVzLFS0dcl5tugBIrh%2BUob0ZGfDb3AhXtOBngEsVKN0PbEIl%2Fr%2Fnh9IIi%2FjSNyEyR7Z7MFUMmyxITjbEfPScwCwjECafUl3hunf74Atb1NdB9z3%2BKDqwU1Qy86u2TfM9S9xuC3fAn%2B1dDhqC5nVmdIcHPhHeAf4kcuV4ctmP3%2Bjbx3VLqcIm%2FR4HQ9P49OoA2Y%2B1zPPrTK2JDTMA3LWQIiqjeI1KhWFXLknr0m53afiyFUEQeMmNLVYM%2BR0MuJ8uhhHpcNYzZgES1Gx%2BMOXIsMIGOqUBzU3ZjtTavpaWo6X8jzjC7cMQx1DCHgKzWfHya7xlMdyd662QHpW%2BholYjT8bGONGQtjCgGoko2CkZgyTFNbku9TsPkV%2Fq9YB4g1JZytAYDYTzXSRFDfU3wwK9iu%2FirTHvBtIzZYfYqQF%2FBDMsyUA8stfaE9ulDRqmk1B4AEDEizDvl06TsbRbA6vb0wfgtjRqYd5xwvhsQMUYLzc0%2F8c249pqCa3&X-Amz-Signature=2f7979f7309b4d376e57f240193ea22793991d1b8b6d0027b40f46d94a9b7a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRJULQN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCSYknMHlViV1xQEK4ADPAxkOwROXgkv%2BdSqEhiqsI2ygIgF0dVnI7a8hwDZ0YIS9a0wmx12FrL0eHKxs46dqeQjeUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIr8s6keJ9PYGsSzZSrcAyHybgCEfgfQgoKaPdM4lejVqS7YYNRyAJMjJOcCkaejCKjS48sbfA80DJj%2FReTJbf7puVNeUlfa0Q76Outs5BOWeLk87kvOV8gnc8Vlim3rtlXRmLoBvYbuNDnFZwDK7ALgXA5YDU4bpUkABkixuBKwC71BVGQmbfZMxChofycj5Y6Qd1nsgLXsCgTLJqxycMoKdnCCaV0hvf0Nv3YfxUS%2FflFYlu88wBjETD1D%2BQ%2BnsOi2MfKvlnU9zrOh2NS6rfWaQbzoKp3FJxrDt94JQwblRvaSKw6e9H40%2B%2Fv3ERcslMijZOJlWESE5gIFVenj7BPtW%2FDB2%2BVU0xq3NoB80FoODiZGU0yZ7zQqXMh6%2BEYzlVzLFS0dcl5tugBIrh%2BUob0ZGfDb3AhXtOBngEsVKN0PbEIl%2Fr%2Fnh9IIi%2FjSNyEyR7Z7MFUMmyxITjbEfPScwCwjECafUl3hunf74Atb1NdB9z3%2BKDqwU1Qy86u2TfM9S9xuC3fAn%2B1dDhqC5nVmdIcHPhHeAf4kcuV4ctmP3%2Bjbx3VLqcIm%2FR4HQ9P49OoA2Y%2B1zPPrTK2JDTMA3LWQIiqjeI1KhWFXLknr0m53afiyFUEQeMmNLVYM%2BR0MuJ8uhhHpcNYzZgES1Gx%2BMOXIsMIGOqUBzU3ZjtTavpaWo6X8jzjC7cMQx1DCHgKzWfHya7xlMdyd662QHpW%2BholYjT8bGONGQtjCgGoko2CkZgyTFNbku9TsPkV%2Fq9YB4g1JZytAYDYTzXSRFDfU3wwK9iu%2FirTHvBtIzZYfYqQF%2FBDMsyUA8stfaE9ulDRqmk1B4AEDEizDvl06TsbRbA6vb0wfgtjRqYd5xwvhsQMUYLzc0%2F8c249pqCa3&X-Amz-Signature=9fcd127bf7e97f7946fd0175a909182ac80b92f1712825abac80f64403be57af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRJULQN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCSYknMHlViV1xQEK4ADPAxkOwROXgkv%2BdSqEhiqsI2ygIgF0dVnI7a8hwDZ0YIS9a0wmx12FrL0eHKxs46dqeQjeUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIr8s6keJ9PYGsSzZSrcAyHybgCEfgfQgoKaPdM4lejVqS7YYNRyAJMjJOcCkaejCKjS48sbfA80DJj%2FReTJbf7puVNeUlfa0Q76Outs5BOWeLk87kvOV8gnc8Vlim3rtlXRmLoBvYbuNDnFZwDK7ALgXA5YDU4bpUkABkixuBKwC71BVGQmbfZMxChofycj5Y6Qd1nsgLXsCgTLJqxycMoKdnCCaV0hvf0Nv3YfxUS%2FflFYlu88wBjETD1D%2BQ%2BnsOi2MfKvlnU9zrOh2NS6rfWaQbzoKp3FJxrDt94JQwblRvaSKw6e9H40%2B%2Fv3ERcslMijZOJlWESE5gIFVenj7BPtW%2FDB2%2BVU0xq3NoB80FoODiZGU0yZ7zQqXMh6%2BEYzlVzLFS0dcl5tugBIrh%2BUob0ZGfDb3AhXtOBngEsVKN0PbEIl%2Fr%2Fnh9IIi%2FjSNyEyR7Z7MFUMmyxITjbEfPScwCwjECafUl3hunf74Atb1NdB9z3%2BKDqwU1Qy86u2TfM9S9xuC3fAn%2B1dDhqC5nVmdIcHPhHeAf4kcuV4ctmP3%2Bjbx3VLqcIm%2FR4HQ9P49OoA2Y%2B1zPPrTK2JDTMA3LWQIiqjeI1KhWFXLknr0m53afiyFUEQeMmNLVYM%2BR0MuJ8uhhHpcNYzZgES1Gx%2BMOXIsMIGOqUBzU3ZjtTavpaWo6X8jzjC7cMQx1DCHgKzWfHya7xlMdyd662QHpW%2BholYjT8bGONGQtjCgGoko2CkZgyTFNbku9TsPkV%2Fq9YB4g1JZytAYDYTzXSRFDfU3wwK9iu%2FirTHvBtIzZYfYqQF%2FBDMsyUA8stfaE9ulDRqmk1B4AEDEizDvl06TsbRbA6vb0wfgtjRqYd5xwvhsQMUYLzc0%2F8c249pqCa3&X-Amz-Signature=443c3197bb8fb6366634690b049379f874b37c4eca767b60a38fd6d06f448f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRJULQN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCSYknMHlViV1xQEK4ADPAxkOwROXgkv%2BdSqEhiqsI2ygIgF0dVnI7a8hwDZ0YIS9a0wmx12FrL0eHKxs46dqeQjeUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIr8s6keJ9PYGsSzZSrcAyHybgCEfgfQgoKaPdM4lejVqS7YYNRyAJMjJOcCkaejCKjS48sbfA80DJj%2FReTJbf7puVNeUlfa0Q76Outs5BOWeLk87kvOV8gnc8Vlim3rtlXRmLoBvYbuNDnFZwDK7ALgXA5YDU4bpUkABkixuBKwC71BVGQmbfZMxChofycj5Y6Qd1nsgLXsCgTLJqxycMoKdnCCaV0hvf0Nv3YfxUS%2FflFYlu88wBjETD1D%2BQ%2BnsOi2MfKvlnU9zrOh2NS6rfWaQbzoKp3FJxrDt94JQwblRvaSKw6e9H40%2B%2Fv3ERcslMijZOJlWESE5gIFVenj7BPtW%2FDB2%2BVU0xq3NoB80FoODiZGU0yZ7zQqXMh6%2BEYzlVzLFS0dcl5tugBIrh%2BUob0ZGfDb3AhXtOBngEsVKN0PbEIl%2Fr%2Fnh9IIi%2FjSNyEyR7Z7MFUMmyxITjbEfPScwCwjECafUl3hunf74Atb1NdB9z3%2BKDqwU1Qy86u2TfM9S9xuC3fAn%2B1dDhqC5nVmdIcHPhHeAf4kcuV4ctmP3%2Bjbx3VLqcIm%2FR4HQ9P49OoA2Y%2B1zPPrTK2JDTMA3LWQIiqjeI1KhWFXLknr0m53afiyFUEQeMmNLVYM%2BR0MuJ8uhhHpcNYzZgES1Gx%2BMOXIsMIGOqUBzU3ZjtTavpaWo6X8jzjC7cMQx1DCHgKzWfHya7xlMdyd662QHpW%2BholYjT8bGONGQtjCgGoko2CkZgyTFNbku9TsPkV%2Fq9YB4g1JZytAYDYTzXSRFDfU3wwK9iu%2FirTHvBtIzZYfYqQF%2FBDMsyUA8stfaE9ulDRqmk1B4AEDEizDvl06TsbRbA6vb0wfgtjRqYd5xwvhsQMUYLzc0%2F8c249pqCa3&X-Amz-Signature=eb92e49525fbeb937177f71518f62ecdc31d4ebef99f63703fad97d5b46e78ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRJULQN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCSYknMHlViV1xQEK4ADPAxkOwROXgkv%2BdSqEhiqsI2ygIgF0dVnI7a8hwDZ0YIS9a0wmx12FrL0eHKxs46dqeQjeUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIr8s6keJ9PYGsSzZSrcAyHybgCEfgfQgoKaPdM4lejVqS7YYNRyAJMjJOcCkaejCKjS48sbfA80DJj%2FReTJbf7puVNeUlfa0Q76Outs5BOWeLk87kvOV8gnc8Vlim3rtlXRmLoBvYbuNDnFZwDK7ALgXA5YDU4bpUkABkixuBKwC71BVGQmbfZMxChofycj5Y6Qd1nsgLXsCgTLJqxycMoKdnCCaV0hvf0Nv3YfxUS%2FflFYlu88wBjETD1D%2BQ%2BnsOi2MfKvlnU9zrOh2NS6rfWaQbzoKp3FJxrDt94JQwblRvaSKw6e9H40%2B%2Fv3ERcslMijZOJlWESE5gIFVenj7BPtW%2FDB2%2BVU0xq3NoB80FoODiZGU0yZ7zQqXMh6%2BEYzlVzLFS0dcl5tugBIrh%2BUob0ZGfDb3AhXtOBngEsVKN0PbEIl%2Fr%2Fnh9IIi%2FjSNyEyR7Z7MFUMmyxITjbEfPScwCwjECafUl3hunf74Atb1NdB9z3%2BKDqwU1Qy86u2TfM9S9xuC3fAn%2B1dDhqC5nVmdIcHPhHeAf4kcuV4ctmP3%2Bjbx3VLqcIm%2FR4HQ9P49OoA2Y%2B1zPPrTK2JDTMA3LWQIiqjeI1KhWFXLknr0m53afiyFUEQeMmNLVYM%2BR0MuJ8uhhHpcNYzZgES1Gx%2BMOXIsMIGOqUBzU3ZjtTavpaWo6X8jzjC7cMQx1DCHgKzWfHya7xlMdyd662QHpW%2BholYjT8bGONGQtjCgGoko2CkZgyTFNbku9TsPkV%2Fq9YB4g1JZytAYDYTzXSRFDfU3wwK9iu%2FirTHvBtIzZYfYqQF%2FBDMsyUA8stfaE9ulDRqmk1B4AEDEizDvl06TsbRbA6vb0wfgtjRqYd5xwvhsQMUYLzc0%2F8c249pqCa3&X-Amz-Signature=1476c41dbdaf22998b1b46f7e506d243e58dd46d7da943a4c08f1ccb0cc4de0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRJULQN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCSYknMHlViV1xQEK4ADPAxkOwROXgkv%2BdSqEhiqsI2ygIgF0dVnI7a8hwDZ0YIS9a0wmx12FrL0eHKxs46dqeQjeUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIr8s6keJ9PYGsSzZSrcAyHybgCEfgfQgoKaPdM4lejVqS7YYNRyAJMjJOcCkaejCKjS48sbfA80DJj%2FReTJbf7puVNeUlfa0Q76Outs5BOWeLk87kvOV8gnc8Vlim3rtlXRmLoBvYbuNDnFZwDK7ALgXA5YDU4bpUkABkixuBKwC71BVGQmbfZMxChofycj5Y6Qd1nsgLXsCgTLJqxycMoKdnCCaV0hvf0Nv3YfxUS%2FflFYlu88wBjETD1D%2BQ%2BnsOi2MfKvlnU9zrOh2NS6rfWaQbzoKp3FJxrDt94JQwblRvaSKw6e9H40%2B%2Fv3ERcslMijZOJlWESE5gIFVenj7BPtW%2FDB2%2BVU0xq3NoB80FoODiZGU0yZ7zQqXMh6%2BEYzlVzLFS0dcl5tugBIrh%2BUob0ZGfDb3AhXtOBngEsVKN0PbEIl%2Fr%2Fnh9IIi%2FjSNyEyR7Z7MFUMmyxITjbEfPScwCwjECafUl3hunf74Atb1NdB9z3%2BKDqwU1Qy86u2TfM9S9xuC3fAn%2B1dDhqC5nVmdIcHPhHeAf4kcuV4ctmP3%2Bjbx3VLqcIm%2FR4HQ9P49OoA2Y%2B1zPPrTK2JDTMA3LWQIiqjeI1KhWFXLknr0m53afiyFUEQeMmNLVYM%2BR0MuJ8uhhHpcNYzZgES1Gx%2BMOXIsMIGOqUBzU3ZjtTavpaWo6X8jzjC7cMQx1DCHgKzWfHya7xlMdyd662QHpW%2BholYjT8bGONGQtjCgGoko2CkZgyTFNbku9TsPkV%2Fq9YB4g1JZytAYDYTzXSRFDfU3wwK9iu%2FirTHvBtIzZYfYqQF%2FBDMsyUA8stfaE9ulDRqmk1B4AEDEizDvl06TsbRbA6vb0wfgtjRqYd5xwvhsQMUYLzc0%2F8c249pqCa3&X-Amz-Signature=c46b37922baa5ba1e3ef1172cfe8ba35baf49509906231601c1c9de3137f588a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
