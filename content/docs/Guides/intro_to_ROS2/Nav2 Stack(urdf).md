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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTPYASA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyS1bX9gsQrOjMKeaJRcEKDND2Zsswv0csD5Qd2t09BgIgVCWSF1yWLeeV0ZLk%2BjAFXbYHUXn3ZnZzdbnSiRtoll8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDP2I4h7WeXMSCW%2BboSrcA5WEcrdT2ZrGrErAlDnNfWM6DAU7cLDVGPu%2BBMQmwLD6T1OC1hIfUb4SRht8%2FU2ZO%2BjrGFhmdTVKvNdvdlIYOx%2FJTH5AYJTonC%2FVWvXUr24mHukpLHD6xZDZbjebdjNafU49G15qyzJwSiJIB8zUKGIwE6%2FJbVEasPa7%2FDLt06C4usKERPAj2tRtUtEZCosPOGD6lp6NtW8quy8QJVBKYLA0G9xIWTLSzQJ1Ob8bjRQOBcHQG0mbnY5bExggwHGDh1ahq4Q%2BP0z6tz22gpP2GTVmYBjRfsguz8Y%2B8lC2SWlc%2F%2FXluriUKikdKQT5D0FNHupzaRiCvEgwurOc8BCEVtBZL81vJhvJYZUmzQQ7cNMBpDqlY5GB0%2BGdH78byTgKH2ILFuj5LEdxfGg3f%2BBvxtJccpYNazRiDPjzhcRa2gXIYULHg%2F%2FGnszTEHOd9D7w09eyD%2B%2FVAeoCIkwjrsCFAGCDd7s%2FQwIZezEGOkIy2B8wCKf2ku5YjyhrWWi3VBsAxIt%2BY7M6BgXyXEdPWVGugjydJYmoq71cVZ7QjV7IayLAm4p%2FNyCqn0Cs7dBYfhm%2BAbGQquZccPHfAj344rPM8OkM4fRdW2dZ1UZ5SypKIef3dkbK4kYQxbCkXBIpMJfttsAGOqUBqYKnDbR3VvIjzWzsRQ1lCgJYWk5NyOAeQ9Mf9ngbSanN%2F%2BrDG8eErQnC%2FaleDvhtry%2FieuY1HTauwU%2FrVIXcZnIMUvCA88iAxmKu6gvUHdSTbK1iOYBNcZmOQ17ov21ygNNNNX4sch3lJOyE6cok9Y09ZlXLE8cT3DS4%2Bjluz6EXcg6lIRtdKa8UTwqh8j4wZFn6SVp9Gmv9AvNtQ6tGuoChSRWM&X-Amz-Signature=daa2aef55782aabf152c8bd2611d04cbd7dec1a409f0eed6329fa0b14a1ea57b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTPYASA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyS1bX9gsQrOjMKeaJRcEKDND2Zsswv0csD5Qd2t09BgIgVCWSF1yWLeeV0ZLk%2BjAFXbYHUXn3ZnZzdbnSiRtoll8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDP2I4h7WeXMSCW%2BboSrcA5WEcrdT2ZrGrErAlDnNfWM6DAU7cLDVGPu%2BBMQmwLD6T1OC1hIfUb4SRht8%2FU2ZO%2BjrGFhmdTVKvNdvdlIYOx%2FJTH5AYJTonC%2FVWvXUr24mHukpLHD6xZDZbjebdjNafU49G15qyzJwSiJIB8zUKGIwE6%2FJbVEasPa7%2FDLt06C4usKERPAj2tRtUtEZCosPOGD6lp6NtW8quy8QJVBKYLA0G9xIWTLSzQJ1Ob8bjRQOBcHQG0mbnY5bExggwHGDh1ahq4Q%2BP0z6tz22gpP2GTVmYBjRfsguz8Y%2B8lC2SWlc%2F%2FXluriUKikdKQT5D0FNHupzaRiCvEgwurOc8BCEVtBZL81vJhvJYZUmzQQ7cNMBpDqlY5GB0%2BGdH78byTgKH2ILFuj5LEdxfGg3f%2BBvxtJccpYNazRiDPjzhcRa2gXIYULHg%2F%2FGnszTEHOd9D7w09eyD%2B%2FVAeoCIkwjrsCFAGCDd7s%2FQwIZezEGOkIy2B8wCKf2ku5YjyhrWWi3VBsAxIt%2BY7M6BgXyXEdPWVGugjydJYmoq71cVZ7QjV7IayLAm4p%2FNyCqn0Cs7dBYfhm%2BAbGQquZccPHfAj344rPM8OkM4fRdW2dZ1UZ5SypKIef3dkbK4kYQxbCkXBIpMJfttsAGOqUBqYKnDbR3VvIjzWzsRQ1lCgJYWk5NyOAeQ9Mf9ngbSanN%2F%2BrDG8eErQnC%2FaleDvhtry%2FieuY1HTauwU%2FrVIXcZnIMUvCA88iAxmKu6gvUHdSTbK1iOYBNcZmOQ17ov21ygNNNNX4sch3lJOyE6cok9Y09ZlXLE8cT3DS4%2Bjluz6EXcg6lIRtdKa8UTwqh8j4wZFn6SVp9Gmv9AvNtQ6tGuoChSRWM&X-Amz-Signature=ee7f0c75db0ccca4374e91fb1e0bb77ffb0396a28785f8125bdb5cedaaa26792&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTPYASA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyS1bX9gsQrOjMKeaJRcEKDND2Zsswv0csD5Qd2t09BgIgVCWSF1yWLeeV0ZLk%2BjAFXbYHUXn3ZnZzdbnSiRtoll8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDP2I4h7WeXMSCW%2BboSrcA5WEcrdT2ZrGrErAlDnNfWM6DAU7cLDVGPu%2BBMQmwLD6T1OC1hIfUb4SRht8%2FU2ZO%2BjrGFhmdTVKvNdvdlIYOx%2FJTH5AYJTonC%2FVWvXUr24mHukpLHD6xZDZbjebdjNafU49G15qyzJwSiJIB8zUKGIwE6%2FJbVEasPa7%2FDLt06C4usKERPAj2tRtUtEZCosPOGD6lp6NtW8quy8QJVBKYLA0G9xIWTLSzQJ1Ob8bjRQOBcHQG0mbnY5bExggwHGDh1ahq4Q%2BP0z6tz22gpP2GTVmYBjRfsguz8Y%2B8lC2SWlc%2F%2FXluriUKikdKQT5D0FNHupzaRiCvEgwurOc8BCEVtBZL81vJhvJYZUmzQQ7cNMBpDqlY5GB0%2BGdH78byTgKH2ILFuj5LEdxfGg3f%2BBvxtJccpYNazRiDPjzhcRa2gXIYULHg%2F%2FGnszTEHOd9D7w09eyD%2B%2FVAeoCIkwjrsCFAGCDd7s%2FQwIZezEGOkIy2B8wCKf2ku5YjyhrWWi3VBsAxIt%2BY7M6BgXyXEdPWVGugjydJYmoq71cVZ7QjV7IayLAm4p%2FNyCqn0Cs7dBYfhm%2BAbGQquZccPHfAj344rPM8OkM4fRdW2dZ1UZ5SypKIef3dkbK4kYQxbCkXBIpMJfttsAGOqUBqYKnDbR3VvIjzWzsRQ1lCgJYWk5NyOAeQ9Mf9ngbSanN%2F%2BrDG8eErQnC%2FaleDvhtry%2FieuY1HTauwU%2FrVIXcZnIMUvCA88iAxmKu6gvUHdSTbK1iOYBNcZmOQ17ov21ygNNNNX4sch3lJOyE6cok9Y09ZlXLE8cT3DS4%2Bjluz6EXcg6lIRtdKa8UTwqh8j4wZFn6SVp9Gmv9AvNtQ6tGuoChSRWM&X-Amz-Signature=a9e88541e6fa66892d904617b286272fa6102bd28b7f0bd181b8c07bc61e33b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTPYASA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyS1bX9gsQrOjMKeaJRcEKDND2Zsswv0csD5Qd2t09BgIgVCWSF1yWLeeV0ZLk%2BjAFXbYHUXn3ZnZzdbnSiRtoll8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDP2I4h7WeXMSCW%2BboSrcA5WEcrdT2ZrGrErAlDnNfWM6DAU7cLDVGPu%2BBMQmwLD6T1OC1hIfUb4SRht8%2FU2ZO%2BjrGFhmdTVKvNdvdlIYOx%2FJTH5AYJTonC%2FVWvXUr24mHukpLHD6xZDZbjebdjNafU49G15qyzJwSiJIB8zUKGIwE6%2FJbVEasPa7%2FDLt06C4usKERPAj2tRtUtEZCosPOGD6lp6NtW8quy8QJVBKYLA0G9xIWTLSzQJ1Ob8bjRQOBcHQG0mbnY5bExggwHGDh1ahq4Q%2BP0z6tz22gpP2GTVmYBjRfsguz8Y%2B8lC2SWlc%2F%2FXluriUKikdKQT5D0FNHupzaRiCvEgwurOc8BCEVtBZL81vJhvJYZUmzQQ7cNMBpDqlY5GB0%2BGdH78byTgKH2ILFuj5LEdxfGg3f%2BBvxtJccpYNazRiDPjzhcRa2gXIYULHg%2F%2FGnszTEHOd9D7w09eyD%2B%2FVAeoCIkwjrsCFAGCDd7s%2FQwIZezEGOkIy2B8wCKf2ku5YjyhrWWi3VBsAxIt%2BY7M6BgXyXEdPWVGugjydJYmoq71cVZ7QjV7IayLAm4p%2FNyCqn0Cs7dBYfhm%2BAbGQquZccPHfAj344rPM8OkM4fRdW2dZ1UZ5SypKIef3dkbK4kYQxbCkXBIpMJfttsAGOqUBqYKnDbR3VvIjzWzsRQ1lCgJYWk5NyOAeQ9Mf9ngbSanN%2F%2BrDG8eErQnC%2FaleDvhtry%2FieuY1HTauwU%2FrVIXcZnIMUvCA88iAxmKu6gvUHdSTbK1iOYBNcZmOQ17ov21ygNNNNX4sch3lJOyE6cok9Y09ZlXLE8cT3DS4%2Bjluz6EXcg6lIRtdKa8UTwqh8j4wZFn6SVp9Gmv9AvNtQ6tGuoChSRWM&X-Amz-Signature=04044362943555b5de15f719767663f77c05700f577d836d2ec31874124ae7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTPYASA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyS1bX9gsQrOjMKeaJRcEKDND2Zsswv0csD5Qd2t09BgIgVCWSF1yWLeeV0ZLk%2BjAFXbYHUXn3ZnZzdbnSiRtoll8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDP2I4h7WeXMSCW%2BboSrcA5WEcrdT2ZrGrErAlDnNfWM6DAU7cLDVGPu%2BBMQmwLD6T1OC1hIfUb4SRht8%2FU2ZO%2BjrGFhmdTVKvNdvdlIYOx%2FJTH5AYJTonC%2FVWvXUr24mHukpLHD6xZDZbjebdjNafU49G15qyzJwSiJIB8zUKGIwE6%2FJbVEasPa7%2FDLt06C4usKERPAj2tRtUtEZCosPOGD6lp6NtW8quy8QJVBKYLA0G9xIWTLSzQJ1Ob8bjRQOBcHQG0mbnY5bExggwHGDh1ahq4Q%2BP0z6tz22gpP2GTVmYBjRfsguz8Y%2B8lC2SWlc%2F%2FXluriUKikdKQT5D0FNHupzaRiCvEgwurOc8BCEVtBZL81vJhvJYZUmzQQ7cNMBpDqlY5GB0%2BGdH78byTgKH2ILFuj5LEdxfGg3f%2BBvxtJccpYNazRiDPjzhcRa2gXIYULHg%2F%2FGnszTEHOd9D7w09eyD%2B%2FVAeoCIkwjrsCFAGCDd7s%2FQwIZezEGOkIy2B8wCKf2ku5YjyhrWWi3VBsAxIt%2BY7M6BgXyXEdPWVGugjydJYmoq71cVZ7QjV7IayLAm4p%2FNyCqn0Cs7dBYfhm%2BAbGQquZccPHfAj344rPM8OkM4fRdW2dZ1UZ5SypKIef3dkbK4kYQxbCkXBIpMJfttsAGOqUBqYKnDbR3VvIjzWzsRQ1lCgJYWk5NyOAeQ9Mf9ngbSanN%2F%2BrDG8eErQnC%2FaleDvhtry%2FieuY1HTauwU%2FrVIXcZnIMUvCA88iAxmKu6gvUHdSTbK1iOYBNcZmOQ17ov21ygNNNNX4sch3lJOyE6cok9Y09ZlXLE8cT3DS4%2Bjluz6EXcg6lIRtdKa8UTwqh8j4wZFn6SVp9Gmv9AvNtQ6tGuoChSRWM&X-Amz-Signature=4d78458fd0cf66bd1a8f3789c610525edcf10bce21eb7d03fb3f18d1c7aae6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTPYASA%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyS1bX9gsQrOjMKeaJRcEKDND2Zsswv0csD5Qd2t09BgIgVCWSF1yWLeeV0ZLk%2BjAFXbYHUXn3ZnZzdbnSiRtoll8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDP2I4h7WeXMSCW%2BboSrcA5WEcrdT2ZrGrErAlDnNfWM6DAU7cLDVGPu%2BBMQmwLD6T1OC1hIfUb4SRht8%2FU2ZO%2BjrGFhmdTVKvNdvdlIYOx%2FJTH5AYJTonC%2FVWvXUr24mHukpLHD6xZDZbjebdjNafU49G15qyzJwSiJIB8zUKGIwE6%2FJbVEasPa7%2FDLt06C4usKERPAj2tRtUtEZCosPOGD6lp6NtW8quy8QJVBKYLA0G9xIWTLSzQJ1Ob8bjRQOBcHQG0mbnY5bExggwHGDh1ahq4Q%2BP0z6tz22gpP2GTVmYBjRfsguz8Y%2B8lC2SWlc%2F%2FXluriUKikdKQT5D0FNHupzaRiCvEgwurOc8BCEVtBZL81vJhvJYZUmzQQ7cNMBpDqlY5GB0%2BGdH78byTgKH2ILFuj5LEdxfGg3f%2BBvxtJccpYNazRiDPjzhcRa2gXIYULHg%2F%2FGnszTEHOd9D7w09eyD%2B%2FVAeoCIkwjrsCFAGCDd7s%2FQwIZezEGOkIy2B8wCKf2ku5YjyhrWWi3VBsAxIt%2BY7M6BgXyXEdPWVGugjydJYmoq71cVZ7QjV7IayLAm4p%2FNyCqn0Cs7dBYfhm%2BAbGQquZccPHfAj344rPM8OkM4fRdW2dZ1UZ5SypKIef3dkbK4kYQxbCkXBIpMJfttsAGOqUBqYKnDbR3VvIjzWzsRQ1lCgJYWk5NyOAeQ9Mf9ngbSanN%2F%2BrDG8eErQnC%2FaleDvhtry%2FieuY1HTauwU%2FrVIXcZnIMUvCA88iAxmKu6gvUHdSTbK1iOYBNcZmOQ17ov21ygNNNNX4sch3lJOyE6cok9Y09ZlXLE8cT3DS4%2Bjluz6EXcg6lIRtdKa8UTwqh8j4wZFn6SVp9Gmv9AvNtQ6tGuoChSRWM&X-Amz-Signature=f8b5aee37833c42627e3fb2358cc492b905f421268d2462d607db1af54a62163&X-Amz-SignedHeaders=host&x-id=GetObject)
