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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W424GAF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBz7PudMf61R2LAuMLEvQWtNxE7fopp3sA89BWtkf28wIgQM7L%2BueKp8IqvZpz8d9cLvRb9dxWidj9VFsYx0L%2FaWEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA1CECvH5fHM3oS7ircAxD1KUhSTK5vxnUNtoTkV35qLbrFGCXgHct9%2Fu2Aa8FTj024QijVHCBY25X6t%2FfNGN6UJcm78rfnZY9uEXr3tFoyPV3rTDthva8NNkDFPAjdPwmGjnVy13Hp%2FcOsVvItgErRyj778vP3vo53KalKu5DpLPN1H58UogVTX4nw3xGu0AXchz%2BBcGLHVuWDUYPu6GXZ59nHnkwJLettHjxso0p2huj7BkVS11XsoL8Qp6FVL0RcVxzb%2BXWJt%2Bms7ojMOM0SUtzT90AWasgt%2FYDUrsy596y4xpw%2FhL%2Baq7Ba8vRmIwYEsfN3XxKBrZL431ncf8DzyxEdSVbRT4L5kCcqbq%2B1eGYCMn9GbAAnn3kC6wY6tvYc%2F3XsbuDVRY%2FdCmMwTSuo5WgBsZOSaw6mJI2AObThg1DZ97sUWyt477RPPMQtnRlUgWNjZO2q1c4QyidoFkuu22VPi8CFBPYtaoeSZ2WlnxxH8pq%2BvRfOODqlZs2mTYxgHDCdQqhkSWcUJDJ3%2FaASe3hmXF%2B%2B2Bg7KUX7RhkZ62LLQBn1RC6mst5BjqkPC2vF%2BXKppSkLg0IeMaCs7w2eg8hHoJ%2FeIkno%2B93%2B%2FWZeA56K%2BXygnJdqAz47Bka7sHdjjHFnNmHgtam0MNmDssMGOqUBceXF%2BYzY%2FaKWvAKdhF3j%2BGae2106oAoxORV8aYvP%2FqFDjumQaaX9%2B2dQcYZEkvKxTN9aV%2Br%2BfPCMpeQ2674xemQuKedFjLDJt33Hf4TD3bsCxikGG6L%2FvVvc04vi%2BDWgqBLQL0cnG0IBmP6z2evevJEtsU3Wgdrb8L85RM70k46n%2BnAFHjnyW3Qze1%2B0nMpsRTFwm4jR%2FjGoOejJ1HD0kKwAlHY6&X-Amz-Signature=020f8f15ccd647cc5c3ffb37edd4e04817f0dde681cf856d7f32fd5c9c22ffc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W424GAF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBz7PudMf61R2LAuMLEvQWtNxE7fopp3sA89BWtkf28wIgQM7L%2BueKp8IqvZpz8d9cLvRb9dxWidj9VFsYx0L%2FaWEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA1CECvH5fHM3oS7ircAxD1KUhSTK5vxnUNtoTkV35qLbrFGCXgHct9%2Fu2Aa8FTj024QijVHCBY25X6t%2FfNGN6UJcm78rfnZY9uEXr3tFoyPV3rTDthva8NNkDFPAjdPwmGjnVy13Hp%2FcOsVvItgErRyj778vP3vo53KalKu5DpLPN1H58UogVTX4nw3xGu0AXchz%2BBcGLHVuWDUYPu6GXZ59nHnkwJLettHjxso0p2huj7BkVS11XsoL8Qp6FVL0RcVxzb%2BXWJt%2Bms7ojMOM0SUtzT90AWasgt%2FYDUrsy596y4xpw%2FhL%2Baq7Ba8vRmIwYEsfN3XxKBrZL431ncf8DzyxEdSVbRT4L5kCcqbq%2B1eGYCMn9GbAAnn3kC6wY6tvYc%2F3XsbuDVRY%2FdCmMwTSuo5WgBsZOSaw6mJI2AObThg1DZ97sUWyt477RPPMQtnRlUgWNjZO2q1c4QyidoFkuu22VPi8CFBPYtaoeSZ2WlnxxH8pq%2BvRfOODqlZs2mTYxgHDCdQqhkSWcUJDJ3%2FaASe3hmXF%2B%2B2Bg7KUX7RhkZ62LLQBn1RC6mst5BjqkPC2vF%2BXKppSkLg0IeMaCs7w2eg8hHoJ%2FeIkno%2B93%2B%2FWZeA56K%2BXygnJdqAz47Bka7sHdjjHFnNmHgtam0MNmDssMGOqUBceXF%2BYzY%2FaKWvAKdhF3j%2BGae2106oAoxORV8aYvP%2FqFDjumQaaX9%2B2dQcYZEkvKxTN9aV%2Br%2BfPCMpeQ2674xemQuKedFjLDJt33Hf4TD3bsCxikGG6L%2FvVvc04vi%2BDWgqBLQL0cnG0IBmP6z2evevJEtsU3Wgdrb8L85RM70k46n%2BnAFHjnyW3Qze1%2B0nMpsRTFwm4jR%2FjGoOejJ1HD0kKwAlHY6&X-Amz-Signature=44a23d59d1879d7aa9428ea7414ba9bab4b677fad214f58fcd9524574dc01d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W424GAF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBz7PudMf61R2LAuMLEvQWtNxE7fopp3sA89BWtkf28wIgQM7L%2BueKp8IqvZpz8d9cLvRb9dxWidj9VFsYx0L%2FaWEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA1CECvH5fHM3oS7ircAxD1KUhSTK5vxnUNtoTkV35qLbrFGCXgHct9%2Fu2Aa8FTj024QijVHCBY25X6t%2FfNGN6UJcm78rfnZY9uEXr3tFoyPV3rTDthva8NNkDFPAjdPwmGjnVy13Hp%2FcOsVvItgErRyj778vP3vo53KalKu5DpLPN1H58UogVTX4nw3xGu0AXchz%2BBcGLHVuWDUYPu6GXZ59nHnkwJLettHjxso0p2huj7BkVS11XsoL8Qp6FVL0RcVxzb%2BXWJt%2Bms7ojMOM0SUtzT90AWasgt%2FYDUrsy596y4xpw%2FhL%2Baq7Ba8vRmIwYEsfN3XxKBrZL431ncf8DzyxEdSVbRT4L5kCcqbq%2B1eGYCMn9GbAAnn3kC6wY6tvYc%2F3XsbuDVRY%2FdCmMwTSuo5WgBsZOSaw6mJI2AObThg1DZ97sUWyt477RPPMQtnRlUgWNjZO2q1c4QyidoFkuu22VPi8CFBPYtaoeSZ2WlnxxH8pq%2BvRfOODqlZs2mTYxgHDCdQqhkSWcUJDJ3%2FaASe3hmXF%2B%2B2Bg7KUX7RhkZ62LLQBn1RC6mst5BjqkPC2vF%2BXKppSkLg0IeMaCs7w2eg8hHoJ%2FeIkno%2B93%2B%2FWZeA56K%2BXygnJdqAz47Bka7sHdjjHFnNmHgtam0MNmDssMGOqUBceXF%2BYzY%2FaKWvAKdhF3j%2BGae2106oAoxORV8aYvP%2FqFDjumQaaX9%2B2dQcYZEkvKxTN9aV%2Br%2BfPCMpeQ2674xemQuKedFjLDJt33Hf4TD3bsCxikGG6L%2FvVvc04vi%2BDWgqBLQL0cnG0IBmP6z2evevJEtsU3Wgdrb8L85RM70k46n%2BnAFHjnyW3Qze1%2B0nMpsRTFwm4jR%2FjGoOejJ1HD0kKwAlHY6&X-Amz-Signature=c13f93040fc334e316eb9c6f4e90ae5e1495bbbc0a5ea9f5676c5d75fc498400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W424GAF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBz7PudMf61R2LAuMLEvQWtNxE7fopp3sA89BWtkf28wIgQM7L%2BueKp8IqvZpz8d9cLvRb9dxWidj9VFsYx0L%2FaWEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA1CECvH5fHM3oS7ircAxD1KUhSTK5vxnUNtoTkV35qLbrFGCXgHct9%2Fu2Aa8FTj024QijVHCBY25X6t%2FfNGN6UJcm78rfnZY9uEXr3tFoyPV3rTDthva8NNkDFPAjdPwmGjnVy13Hp%2FcOsVvItgErRyj778vP3vo53KalKu5DpLPN1H58UogVTX4nw3xGu0AXchz%2BBcGLHVuWDUYPu6GXZ59nHnkwJLettHjxso0p2huj7BkVS11XsoL8Qp6FVL0RcVxzb%2BXWJt%2Bms7ojMOM0SUtzT90AWasgt%2FYDUrsy596y4xpw%2FhL%2Baq7Ba8vRmIwYEsfN3XxKBrZL431ncf8DzyxEdSVbRT4L5kCcqbq%2B1eGYCMn9GbAAnn3kC6wY6tvYc%2F3XsbuDVRY%2FdCmMwTSuo5WgBsZOSaw6mJI2AObThg1DZ97sUWyt477RPPMQtnRlUgWNjZO2q1c4QyidoFkuu22VPi8CFBPYtaoeSZ2WlnxxH8pq%2BvRfOODqlZs2mTYxgHDCdQqhkSWcUJDJ3%2FaASe3hmXF%2B%2B2Bg7KUX7RhkZ62LLQBn1RC6mst5BjqkPC2vF%2BXKppSkLg0IeMaCs7w2eg8hHoJ%2FeIkno%2B93%2B%2FWZeA56K%2BXygnJdqAz47Bka7sHdjjHFnNmHgtam0MNmDssMGOqUBceXF%2BYzY%2FaKWvAKdhF3j%2BGae2106oAoxORV8aYvP%2FqFDjumQaaX9%2B2dQcYZEkvKxTN9aV%2Br%2BfPCMpeQ2674xemQuKedFjLDJt33Hf4TD3bsCxikGG6L%2FvVvc04vi%2BDWgqBLQL0cnG0IBmP6z2evevJEtsU3Wgdrb8L85RM70k46n%2BnAFHjnyW3Qze1%2B0nMpsRTFwm4jR%2FjGoOejJ1HD0kKwAlHY6&X-Amz-Signature=2ad8a79103a2c393ec4c580c8cceb91c9d48976b0ccc6c73c3bdc64102219e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W424GAF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBz7PudMf61R2LAuMLEvQWtNxE7fopp3sA89BWtkf28wIgQM7L%2BueKp8IqvZpz8d9cLvRb9dxWidj9VFsYx0L%2FaWEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA1CECvH5fHM3oS7ircAxD1KUhSTK5vxnUNtoTkV35qLbrFGCXgHct9%2Fu2Aa8FTj024QijVHCBY25X6t%2FfNGN6UJcm78rfnZY9uEXr3tFoyPV3rTDthva8NNkDFPAjdPwmGjnVy13Hp%2FcOsVvItgErRyj778vP3vo53KalKu5DpLPN1H58UogVTX4nw3xGu0AXchz%2BBcGLHVuWDUYPu6GXZ59nHnkwJLettHjxso0p2huj7BkVS11XsoL8Qp6FVL0RcVxzb%2BXWJt%2Bms7ojMOM0SUtzT90AWasgt%2FYDUrsy596y4xpw%2FhL%2Baq7Ba8vRmIwYEsfN3XxKBrZL431ncf8DzyxEdSVbRT4L5kCcqbq%2B1eGYCMn9GbAAnn3kC6wY6tvYc%2F3XsbuDVRY%2FdCmMwTSuo5WgBsZOSaw6mJI2AObThg1DZ97sUWyt477RPPMQtnRlUgWNjZO2q1c4QyidoFkuu22VPi8CFBPYtaoeSZ2WlnxxH8pq%2BvRfOODqlZs2mTYxgHDCdQqhkSWcUJDJ3%2FaASe3hmXF%2B%2B2Bg7KUX7RhkZ62LLQBn1RC6mst5BjqkPC2vF%2BXKppSkLg0IeMaCs7w2eg8hHoJ%2FeIkno%2B93%2B%2FWZeA56K%2BXygnJdqAz47Bka7sHdjjHFnNmHgtam0MNmDssMGOqUBceXF%2BYzY%2FaKWvAKdhF3j%2BGae2106oAoxORV8aYvP%2FqFDjumQaaX9%2B2dQcYZEkvKxTN9aV%2Br%2BfPCMpeQ2674xemQuKedFjLDJt33Hf4TD3bsCxikGG6L%2FvVvc04vi%2BDWgqBLQL0cnG0IBmP6z2evevJEtsU3Wgdrb8L85RM70k46n%2BnAFHjnyW3Qze1%2B0nMpsRTFwm4jR%2FjGoOejJ1HD0kKwAlHY6&X-Amz-Signature=99b8eac9f7a56949d3191ebd7fc6cc8cb1294bde64873c872a179fd7bcbe6880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W424GAF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCBz7PudMf61R2LAuMLEvQWtNxE7fopp3sA89BWtkf28wIgQM7L%2BueKp8IqvZpz8d9cLvRb9dxWidj9VFsYx0L%2FaWEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA1CECvH5fHM3oS7ircAxD1KUhSTK5vxnUNtoTkV35qLbrFGCXgHct9%2Fu2Aa8FTj024QijVHCBY25X6t%2FfNGN6UJcm78rfnZY9uEXr3tFoyPV3rTDthva8NNkDFPAjdPwmGjnVy13Hp%2FcOsVvItgErRyj778vP3vo53KalKu5DpLPN1H58UogVTX4nw3xGu0AXchz%2BBcGLHVuWDUYPu6GXZ59nHnkwJLettHjxso0p2huj7BkVS11XsoL8Qp6FVL0RcVxzb%2BXWJt%2Bms7ojMOM0SUtzT90AWasgt%2FYDUrsy596y4xpw%2FhL%2Baq7Ba8vRmIwYEsfN3XxKBrZL431ncf8DzyxEdSVbRT4L5kCcqbq%2B1eGYCMn9GbAAnn3kC6wY6tvYc%2F3XsbuDVRY%2FdCmMwTSuo5WgBsZOSaw6mJI2AObThg1DZ97sUWyt477RPPMQtnRlUgWNjZO2q1c4QyidoFkuu22VPi8CFBPYtaoeSZ2WlnxxH8pq%2BvRfOODqlZs2mTYxgHDCdQqhkSWcUJDJ3%2FaASe3hmXF%2B%2B2Bg7KUX7RhkZ62LLQBn1RC6mst5BjqkPC2vF%2BXKppSkLg0IeMaCs7w2eg8hHoJ%2FeIkno%2B93%2B%2FWZeA56K%2BXygnJdqAz47Bka7sHdjjHFnNmHgtam0MNmDssMGOqUBceXF%2BYzY%2FaKWvAKdhF3j%2BGae2106oAoxORV8aYvP%2FqFDjumQaaX9%2B2dQcYZEkvKxTN9aV%2Br%2BfPCMpeQ2674xemQuKedFjLDJt33Hf4TD3bsCxikGG6L%2FvVvc04vi%2BDWgqBLQL0cnG0IBmP6z2evevJEtsU3Wgdrb8L85RM70k46n%2BnAFHjnyW3Qze1%2B0nMpsRTFwm4jR%2FjGoOejJ1HD0kKwAlHY6&X-Amz-Signature=d39cb0590728407493d66b2598fbaa113ad503d236bcb590a80f694911fac133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
