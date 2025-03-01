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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EU25SAW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCHIErDtYCcG4NSpSvPEeZ6X9%2FwbaEd%2F60kbKmRbsQKWgIgQKUvraTr5xZDLWmFh1KsZMvXaFjdjN0oq5BfmYbPS%2FMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJQDUd3JCvxvZaPPyrcA7%2FzneUT%2B0FpxDg7S5o47gzfNFMtCVcJHSwE75TGNOB6PCc2wuc1dM2yCXyp9hAoxFwjJF2zhf2Ka6caWJeUVVdyAAbg1cSF3Z4u5ar65zQA38OGWJfFoiZ%2BnKwKzQle4ByMTewE8tnlu5NS5IlKTNp0xwd%2F7cTN3jEPwFE7w91NwGnP4DmY0Rqw90qlS27Ps0Vzze9VdV%2BXl88UOrL7pV1KeM1UpO5%2BdxKKUCC6Xkva3ViHTN1jjXyaMVohyhM%2BPGHbNlbw0t5cLj4MFyYrcbLx%2BH4AvFVhD3tqkPEdOYSgHg6aou5qJdL0fwwav5z%2B226ts%2BNq1Wdq0KHRnVdgbL5wF7QIV5h1l6weUI%2F9e4Vx%2Bjm0%2B8CEYJQGteskFlm2EVjzfpMiu%2FwCxkimPw%2FwzWsqmzLEEjEjIrMxfv53HoYayG7phTETVLp5CKn6SpCK5FsfiaHTQAcaGLP2NxqTrin8386ofpl%2BVYDwaV7JE2kd9VmlVqYkIh%2F6AJiD7kckTivJx2rFqWed5DQAbm%2Bym6CG%2FS%2BgXdlP4z3TEFw1n3VO8oycxxBSqmQo403lEHuZjzv95wungmg6xrkBczS%2B81pMPuQDycFA2BNbJcGkxLFrL5Uq9qgXnzg2e3p2MKW6i74GOqUB8y3iOKomYJTVq6BqSNeuMzszvbAprMbRXx3I7XZJ44f23zASKIPK5ycHXXtdnvlG0a57FRp9VrG4zM9JnDWenmX%2F2hwrekPFRxQiSk8Kz2uZ1Ep8cSIKx3ZO1noHyyIWtU1I7YywIHLDXU2A5eI8a%2BJirTnOzSyhbuuoy76xzxHW9aEkIUl0m2cszZ1pS8lqKly75U5lQNiuzO%2B0llXwYT3uJeuQ&X-Amz-Signature=4e796593f87cf4f45538cca716a0b14b632ce0958bdbbecbfa7124ce79ad991a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EU25SAW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCHIErDtYCcG4NSpSvPEeZ6X9%2FwbaEd%2F60kbKmRbsQKWgIgQKUvraTr5xZDLWmFh1KsZMvXaFjdjN0oq5BfmYbPS%2FMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJQDUd3JCvxvZaPPyrcA7%2FzneUT%2B0FpxDg7S5o47gzfNFMtCVcJHSwE75TGNOB6PCc2wuc1dM2yCXyp9hAoxFwjJF2zhf2Ka6caWJeUVVdyAAbg1cSF3Z4u5ar65zQA38OGWJfFoiZ%2BnKwKzQle4ByMTewE8tnlu5NS5IlKTNp0xwd%2F7cTN3jEPwFE7w91NwGnP4DmY0Rqw90qlS27Ps0Vzze9VdV%2BXl88UOrL7pV1KeM1UpO5%2BdxKKUCC6Xkva3ViHTN1jjXyaMVohyhM%2BPGHbNlbw0t5cLj4MFyYrcbLx%2BH4AvFVhD3tqkPEdOYSgHg6aou5qJdL0fwwav5z%2B226ts%2BNq1Wdq0KHRnVdgbL5wF7QIV5h1l6weUI%2F9e4Vx%2Bjm0%2B8CEYJQGteskFlm2EVjzfpMiu%2FwCxkimPw%2FwzWsqmzLEEjEjIrMxfv53HoYayG7phTETVLp5CKn6SpCK5FsfiaHTQAcaGLP2NxqTrin8386ofpl%2BVYDwaV7JE2kd9VmlVqYkIh%2F6AJiD7kckTivJx2rFqWed5DQAbm%2Bym6CG%2FS%2BgXdlP4z3TEFw1n3VO8oycxxBSqmQo403lEHuZjzv95wungmg6xrkBczS%2B81pMPuQDycFA2BNbJcGkxLFrL5Uq9qgXnzg2e3p2MKW6i74GOqUB8y3iOKomYJTVq6BqSNeuMzszvbAprMbRXx3I7XZJ44f23zASKIPK5ycHXXtdnvlG0a57FRp9VrG4zM9JnDWenmX%2F2hwrekPFRxQiSk8Kz2uZ1Ep8cSIKx3ZO1noHyyIWtU1I7YywIHLDXU2A5eI8a%2BJirTnOzSyhbuuoy76xzxHW9aEkIUl0m2cszZ1pS8lqKly75U5lQNiuzO%2B0llXwYT3uJeuQ&X-Amz-Signature=269a23b73f40d1cc0fcfc2878d9d68e260494bf92c8511ecce8457282dd71e11&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EU25SAW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCHIErDtYCcG4NSpSvPEeZ6X9%2FwbaEd%2F60kbKmRbsQKWgIgQKUvraTr5xZDLWmFh1KsZMvXaFjdjN0oq5BfmYbPS%2FMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJQDUd3JCvxvZaPPyrcA7%2FzneUT%2B0FpxDg7S5o47gzfNFMtCVcJHSwE75TGNOB6PCc2wuc1dM2yCXyp9hAoxFwjJF2zhf2Ka6caWJeUVVdyAAbg1cSF3Z4u5ar65zQA38OGWJfFoiZ%2BnKwKzQle4ByMTewE8tnlu5NS5IlKTNp0xwd%2F7cTN3jEPwFE7w91NwGnP4DmY0Rqw90qlS27Ps0Vzze9VdV%2BXl88UOrL7pV1KeM1UpO5%2BdxKKUCC6Xkva3ViHTN1jjXyaMVohyhM%2BPGHbNlbw0t5cLj4MFyYrcbLx%2BH4AvFVhD3tqkPEdOYSgHg6aou5qJdL0fwwav5z%2B226ts%2BNq1Wdq0KHRnVdgbL5wF7QIV5h1l6weUI%2F9e4Vx%2Bjm0%2B8CEYJQGteskFlm2EVjzfpMiu%2FwCxkimPw%2FwzWsqmzLEEjEjIrMxfv53HoYayG7phTETVLp5CKn6SpCK5FsfiaHTQAcaGLP2NxqTrin8386ofpl%2BVYDwaV7JE2kd9VmlVqYkIh%2F6AJiD7kckTivJx2rFqWed5DQAbm%2Bym6CG%2FS%2BgXdlP4z3TEFw1n3VO8oycxxBSqmQo403lEHuZjzv95wungmg6xrkBczS%2B81pMPuQDycFA2BNbJcGkxLFrL5Uq9qgXnzg2e3p2MKW6i74GOqUB8y3iOKomYJTVq6BqSNeuMzszvbAprMbRXx3I7XZJ44f23zASKIPK5ycHXXtdnvlG0a57FRp9VrG4zM9JnDWenmX%2F2hwrekPFRxQiSk8Kz2uZ1Ep8cSIKx3ZO1noHyyIWtU1I7YywIHLDXU2A5eI8a%2BJirTnOzSyhbuuoy76xzxHW9aEkIUl0m2cszZ1pS8lqKly75U5lQNiuzO%2B0llXwYT3uJeuQ&X-Amz-Signature=8a5551ef69a08f11d951e9a5ff04f98f607ef46062a590205f18b9141349e8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EU25SAW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCHIErDtYCcG4NSpSvPEeZ6X9%2FwbaEd%2F60kbKmRbsQKWgIgQKUvraTr5xZDLWmFh1KsZMvXaFjdjN0oq5BfmYbPS%2FMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJQDUd3JCvxvZaPPyrcA7%2FzneUT%2B0FpxDg7S5o47gzfNFMtCVcJHSwE75TGNOB6PCc2wuc1dM2yCXyp9hAoxFwjJF2zhf2Ka6caWJeUVVdyAAbg1cSF3Z4u5ar65zQA38OGWJfFoiZ%2BnKwKzQle4ByMTewE8tnlu5NS5IlKTNp0xwd%2F7cTN3jEPwFE7w91NwGnP4DmY0Rqw90qlS27Ps0Vzze9VdV%2BXl88UOrL7pV1KeM1UpO5%2BdxKKUCC6Xkva3ViHTN1jjXyaMVohyhM%2BPGHbNlbw0t5cLj4MFyYrcbLx%2BH4AvFVhD3tqkPEdOYSgHg6aou5qJdL0fwwav5z%2B226ts%2BNq1Wdq0KHRnVdgbL5wF7QIV5h1l6weUI%2F9e4Vx%2Bjm0%2B8CEYJQGteskFlm2EVjzfpMiu%2FwCxkimPw%2FwzWsqmzLEEjEjIrMxfv53HoYayG7phTETVLp5CKn6SpCK5FsfiaHTQAcaGLP2NxqTrin8386ofpl%2BVYDwaV7JE2kd9VmlVqYkIh%2F6AJiD7kckTivJx2rFqWed5DQAbm%2Bym6CG%2FS%2BgXdlP4z3TEFw1n3VO8oycxxBSqmQo403lEHuZjzv95wungmg6xrkBczS%2B81pMPuQDycFA2BNbJcGkxLFrL5Uq9qgXnzg2e3p2MKW6i74GOqUB8y3iOKomYJTVq6BqSNeuMzszvbAprMbRXx3I7XZJ44f23zASKIPK5ycHXXtdnvlG0a57FRp9VrG4zM9JnDWenmX%2F2hwrekPFRxQiSk8Kz2uZ1Ep8cSIKx3ZO1noHyyIWtU1I7YywIHLDXU2A5eI8a%2BJirTnOzSyhbuuoy76xzxHW9aEkIUl0m2cszZ1pS8lqKly75U5lQNiuzO%2B0llXwYT3uJeuQ&X-Amz-Signature=b0feffad406ebaa5f35e7c87891d03f7b10b32e4760ebfa025341045c937a36f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EU25SAW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCHIErDtYCcG4NSpSvPEeZ6X9%2FwbaEd%2F60kbKmRbsQKWgIgQKUvraTr5xZDLWmFh1KsZMvXaFjdjN0oq5BfmYbPS%2FMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJQDUd3JCvxvZaPPyrcA7%2FzneUT%2B0FpxDg7S5o47gzfNFMtCVcJHSwE75TGNOB6PCc2wuc1dM2yCXyp9hAoxFwjJF2zhf2Ka6caWJeUVVdyAAbg1cSF3Z4u5ar65zQA38OGWJfFoiZ%2BnKwKzQle4ByMTewE8tnlu5NS5IlKTNp0xwd%2F7cTN3jEPwFE7w91NwGnP4DmY0Rqw90qlS27Ps0Vzze9VdV%2BXl88UOrL7pV1KeM1UpO5%2BdxKKUCC6Xkva3ViHTN1jjXyaMVohyhM%2BPGHbNlbw0t5cLj4MFyYrcbLx%2BH4AvFVhD3tqkPEdOYSgHg6aou5qJdL0fwwav5z%2B226ts%2BNq1Wdq0KHRnVdgbL5wF7QIV5h1l6weUI%2F9e4Vx%2Bjm0%2B8CEYJQGteskFlm2EVjzfpMiu%2FwCxkimPw%2FwzWsqmzLEEjEjIrMxfv53HoYayG7phTETVLp5CKn6SpCK5FsfiaHTQAcaGLP2NxqTrin8386ofpl%2BVYDwaV7JE2kd9VmlVqYkIh%2F6AJiD7kckTivJx2rFqWed5DQAbm%2Bym6CG%2FS%2BgXdlP4z3TEFw1n3VO8oycxxBSqmQo403lEHuZjzv95wungmg6xrkBczS%2B81pMPuQDycFA2BNbJcGkxLFrL5Uq9qgXnzg2e3p2MKW6i74GOqUB8y3iOKomYJTVq6BqSNeuMzszvbAprMbRXx3I7XZJ44f23zASKIPK5ycHXXtdnvlG0a57FRp9VrG4zM9JnDWenmX%2F2hwrekPFRxQiSk8Kz2uZ1Ep8cSIKx3ZO1noHyyIWtU1I7YywIHLDXU2A5eI8a%2BJirTnOzSyhbuuoy76xzxHW9aEkIUl0m2cszZ1pS8lqKly75U5lQNiuzO%2B0llXwYT3uJeuQ&X-Amz-Signature=71e113311e081d8dae9e32854df10c5dd695d975141978e891398c53de3b067a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EU25SAW%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCHIErDtYCcG4NSpSvPEeZ6X9%2FwbaEd%2F60kbKmRbsQKWgIgQKUvraTr5xZDLWmFh1KsZMvXaFjdjN0oq5BfmYbPS%2FMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJQDUd3JCvxvZaPPyrcA7%2FzneUT%2B0FpxDg7S5o47gzfNFMtCVcJHSwE75TGNOB6PCc2wuc1dM2yCXyp9hAoxFwjJF2zhf2Ka6caWJeUVVdyAAbg1cSF3Z4u5ar65zQA38OGWJfFoiZ%2BnKwKzQle4ByMTewE8tnlu5NS5IlKTNp0xwd%2F7cTN3jEPwFE7w91NwGnP4DmY0Rqw90qlS27Ps0Vzze9VdV%2BXl88UOrL7pV1KeM1UpO5%2BdxKKUCC6Xkva3ViHTN1jjXyaMVohyhM%2BPGHbNlbw0t5cLj4MFyYrcbLx%2BH4AvFVhD3tqkPEdOYSgHg6aou5qJdL0fwwav5z%2B226ts%2BNq1Wdq0KHRnVdgbL5wF7QIV5h1l6weUI%2F9e4Vx%2Bjm0%2B8CEYJQGteskFlm2EVjzfpMiu%2FwCxkimPw%2FwzWsqmzLEEjEjIrMxfv53HoYayG7phTETVLp5CKn6SpCK5FsfiaHTQAcaGLP2NxqTrin8386ofpl%2BVYDwaV7JE2kd9VmlVqYkIh%2F6AJiD7kckTivJx2rFqWed5DQAbm%2Bym6CG%2FS%2BgXdlP4z3TEFw1n3VO8oycxxBSqmQo403lEHuZjzv95wungmg6xrkBczS%2B81pMPuQDycFA2BNbJcGkxLFrL5Uq9qgXnzg2e3p2MKW6i74GOqUB8y3iOKomYJTVq6BqSNeuMzszvbAprMbRXx3I7XZJ44f23zASKIPK5ycHXXtdnvlG0a57FRp9VrG4zM9JnDWenmX%2F2hwrekPFRxQiSk8Kz2uZ1Ep8cSIKx3ZO1noHyyIWtU1I7YywIHLDXU2A5eI8a%2BJirTnOzSyhbuuoy76xzxHW9aEkIUl0m2cszZ1pS8lqKly75U5lQNiuzO%2B0llXwYT3uJeuQ&X-Amz-Signature=c9e1375f29a1b99b22f3a0fd97da7a128ac3dc740a25b2ee73fa750c77b24f27&X-Amz-SignedHeaders=host&x-id=GetObject)
