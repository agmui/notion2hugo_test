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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFCGHSO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFZqiCnJZuKsO3o2Thqet1DEooJbcNt8h3FFZUrUD%2FuMAiEA1v4AlsM%2FCwR94VDnEr%2FoqzWJFlbgNHcWRvifK%2BTvHhYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDytYCGRenhfA8O9ayrcA7K2Z11t%2B7KrdtfZnY6SvJ%2BoVq8DdG6ZZyAtJmIxWReVRYbfaoLSoP4VniuB4ldNhleT3SfqyeC8oWw4HzrYaRg4WASxva6O9p9RtNX3LNe4H6Oc5BSL9Qhl2TBXVL737VVTPPT7tGDzNF57GET%2BlnEjoM9WpJjhXJsbXIIJSnz0aSjMgksgzD0u4C4AxxW%2FavNbYPyD4tEMQNoDl2SQtO2JYq6kACDerFSRZlMOtwwVW4FyPtiHgCOT%2BXHBHx9D0nc%2FCueFzAwcSV3jRpskMfcJgzZImkuA4P0fCFEd9N6oe%2FOIiKP0izNT3irRkp%2BN%2BR6Jx1vsigxy235wXNJ%2Fd62nz%2F8G3MRpHkFdNx8NEBibF%2Fj1Jeyim9OYt4ijz8VblSIFc4dwsUdTvUe7SDSCkMeUhQPtfpilHrkZhMiE%2FI6Nwc5PWPbwE3PwmwMtjXgN24Ai17QRrEBRxeySl8gHyilw%2BT3BGUu5P4pz4zQGImEa5XhG0Rm8anViatGEieVki%2BueALB%2BN850k4Eekiu1rEOr9%2FMUcj3CqNre5pp5CwM6WwIe7OU8Wz%2BRLrAcgOGaO7Rd3M8VQWRdHTtV043Rkz94KyscPI9VniMAynSWq7PxeaQKA1FSla0EejUzMIOW5b4GOqUBZ245g1ZiXz28w3jfUpaWK2jh6xi6mO4ChNSB%2BXAsruEDLg%2FoQVdYdUFCuhEFLnuMFIf6%2BDiUrT7zsyCkAAU0a0Z53UVjF2QcavNqhqn9krZNBY2uxk%2Bbv9Lr5YhcA9s0DO3xKmE%2FqR7UiurdmOpjI8OV5KcgkQ8zUIgdjxe2SS%2F5rG8843Wq90hjxqi7ncR1Qy0%2BM7HnUelzmc6kUD189ljBJHH8&X-Amz-Signature=897b33f80695e238809f337dab789718af8a51b929ff36991fbcfde8a9e2f103&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFCGHSO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFZqiCnJZuKsO3o2Thqet1DEooJbcNt8h3FFZUrUD%2FuMAiEA1v4AlsM%2FCwR94VDnEr%2FoqzWJFlbgNHcWRvifK%2BTvHhYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDytYCGRenhfA8O9ayrcA7K2Z11t%2B7KrdtfZnY6SvJ%2BoVq8DdG6ZZyAtJmIxWReVRYbfaoLSoP4VniuB4ldNhleT3SfqyeC8oWw4HzrYaRg4WASxva6O9p9RtNX3LNe4H6Oc5BSL9Qhl2TBXVL737VVTPPT7tGDzNF57GET%2BlnEjoM9WpJjhXJsbXIIJSnz0aSjMgksgzD0u4C4AxxW%2FavNbYPyD4tEMQNoDl2SQtO2JYq6kACDerFSRZlMOtwwVW4FyPtiHgCOT%2BXHBHx9D0nc%2FCueFzAwcSV3jRpskMfcJgzZImkuA4P0fCFEd9N6oe%2FOIiKP0izNT3irRkp%2BN%2BR6Jx1vsigxy235wXNJ%2Fd62nz%2F8G3MRpHkFdNx8NEBibF%2Fj1Jeyim9OYt4ijz8VblSIFc4dwsUdTvUe7SDSCkMeUhQPtfpilHrkZhMiE%2FI6Nwc5PWPbwE3PwmwMtjXgN24Ai17QRrEBRxeySl8gHyilw%2BT3BGUu5P4pz4zQGImEa5XhG0Rm8anViatGEieVki%2BueALB%2BN850k4Eekiu1rEOr9%2FMUcj3CqNre5pp5CwM6WwIe7OU8Wz%2BRLrAcgOGaO7Rd3M8VQWRdHTtV043Rkz94KyscPI9VniMAynSWq7PxeaQKA1FSla0EejUzMIOW5b4GOqUBZ245g1ZiXz28w3jfUpaWK2jh6xi6mO4ChNSB%2BXAsruEDLg%2FoQVdYdUFCuhEFLnuMFIf6%2BDiUrT7zsyCkAAU0a0Z53UVjF2QcavNqhqn9krZNBY2uxk%2Bbv9Lr5YhcA9s0DO3xKmE%2FqR7UiurdmOpjI8OV5KcgkQ8zUIgdjxe2SS%2F5rG8843Wq90hjxqi7ncR1Qy0%2BM7HnUelzmc6kUD189ljBJHH8&X-Amz-Signature=e4ab01b5b20737dbefff4d9b3fe3d110f77c01b1bfbaf0e6f7616cb943d4c168&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFCGHSO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFZqiCnJZuKsO3o2Thqet1DEooJbcNt8h3FFZUrUD%2FuMAiEA1v4AlsM%2FCwR94VDnEr%2FoqzWJFlbgNHcWRvifK%2BTvHhYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDytYCGRenhfA8O9ayrcA7K2Z11t%2B7KrdtfZnY6SvJ%2BoVq8DdG6ZZyAtJmIxWReVRYbfaoLSoP4VniuB4ldNhleT3SfqyeC8oWw4HzrYaRg4WASxva6O9p9RtNX3LNe4H6Oc5BSL9Qhl2TBXVL737VVTPPT7tGDzNF57GET%2BlnEjoM9WpJjhXJsbXIIJSnz0aSjMgksgzD0u4C4AxxW%2FavNbYPyD4tEMQNoDl2SQtO2JYq6kACDerFSRZlMOtwwVW4FyPtiHgCOT%2BXHBHx9D0nc%2FCueFzAwcSV3jRpskMfcJgzZImkuA4P0fCFEd9N6oe%2FOIiKP0izNT3irRkp%2BN%2BR6Jx1vsigxy235wXNJ%2Fd62nz%2F8G3MRpHkFdNx8NEBibF%2Fj1Jeyim9OYt4ijz8VblSIFc4dwsUdTvUe7SDSCkMeUhQPtfpilHrkZhMiE%2FI6Nwc5PWPbwE3PwmwMtjXgN24Ai17QRrEBRxeySl8gHyilw%2BT3BGUu5P4pz4zQGImEa5XhG0Rm8anViatGEieVki%2BueALB%2BN850k4Eekiu1rEOr9%2FMUcj3CqNre5pp5CwM6WwIe7OU8Wz%2BRLrAcgOGaO7Rd3M8VQWRdHTtV043Rkz94KyscPI9VniMAynSWq7PxeaQKA1FSla0EejUzMIOW5b4GOqUBZ245g1ZiXz28w3jfUpaWK2jh6xi6mO4ChNSB%2BXAsruEDLg%2FoQVdYdUFCuhEFLnuMFIf6%2BDiUrT7zsyCkAAU0a0Z53UVjF2QcavNqhqn9krZNBY2uxk%2Bbv9Lr5YhcA9s0DO3xKmE%2FqR7UiurdmOpjI8OV5KcgkQ8zUIgdjxe2SS%2F5rG8843Wq90hjxqi7ncR1Qy0%2BM7HnUelzmc6kUD189ljBJHH8&X-Amz-Signature=e688ec4c36a8333986bbeea7ebdb3a59b5054682d4d435fb3d0bd9d2cf1d039b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFCGHSO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFZqiCnJZuKsO3o2Thqet1DEooJbcNt8h3FFZUrUD%2FuMAiEA1v4AlsM%2FCwR94VDnEr%2FoqzWJFlbgNHcWRvifK%2BTvHhYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDytYCGRenhfA8O9ayrcA7K2Z11t%2B7KrdtfZnY6SvJ%2BoVq8DdG6ZZyAtJmIxWReVRYbfaoLSoP4VniuB4ldNhleT3SfqyeC8oWw4HzrYaRg4WASxva6O9p9RtNX3LNe4H6Oc5BSL9Qhl2TBXVL737VVTPPT7tGDzNF57GET%2BlnEjoM9WpJjhXJsbXIIJSnz0aSjMgksgzD0u4C4AxxW%2FavNbYPyD4tEMQNoDl2SQtO2JYq6kACDerFSRZlMOtwwVW4FyPtiHgCOT%2BXHBHx9D0nc%2FCueFzAwcSV3jRpskMfcJgzZImkuA4P0fCFEd9N6oe%2FOIiKP0izNT3irRkp%2BN%2BR6Jx1vsigxy235wXNJ%2Fd62nz%2F8G3MRpHkFdNx8NEBibF%2Fj1Jeyim9OYt4ijz8VblSIFc4dwsUdTvUe7SDSCkMeUhQPtfpilHrkZhMiE%2FI6Nwc5PWPbwE3PwmwMtjXgN24Ai17QRrEBRxeySl8gHyilw%2BT3BGUu5P4pz4zQGImEa5XhG0Rm8anViatGEieVki%2BueALB%2BN850k4Eekiu1rEOr9%2FMUcj3CqNre5pp5CwM6WwIe7OU8Wz%2BRLrAcgOGaO7Rd3M8VQWRdHTtV043Rkz94KyscPI9VniMAynSWq7PxeaQKA1FSla0EejUzMIOW5b4GOqUBZ245g1ZiXz28w3jfUpaWK2jh6xi6mO4ChNSB%2BXAsruEDLg%2FoQVdYdUFCuhEFLnuMFIf6%2BDiUrT7zsyCkAAU0a0Z53UVjF2QcavNqhqn9krZNBY2uxk%2Bbv9Lr5YhcA9s0DO3xKmE%2FqR7UiurdmOpjI8OV5KcgkQ8zUIgdjxe2SS%2F5rG8843Wq90hjxqi7ncR1Qy0%2BM7HnUelzmc6kUD189ljBJHH8&X-Amz-Signature=6c7d4673fe8f5da6f3aba000f4199b0640eda919478d45fe95cdd555c328b7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFCGHSO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFZqiCnJZuKsO3o2Thqet1DEooJbcNt8h3FFZUrUD%2FuMAiEA1v4AlsM%2FCwR94VDnEr%2FoqzWJFlbgNHcWRvifK%2BTvHhYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDytYCGRenhfA8O9ayrcA7K2Z11t%2B7KrdtfZnY6SvJ%2BoVq8DdG6ZZyAtJmIxWReVRYbfaoLSoP4VniuB4ldNhleT3SfqyeC8oWw4HzrYaRg4WASxva6O9p9RtNX3LNe4H6Oc5BSL9Qhl2TBXVL737VVTPPT7tGDzNF57GET%2BlnEjoM9WpJjhXJsbXIIJSnz0aSjMgksgzD0u4C4AxxW%2FavNbYPyD4tEMQNoDl2SQtO2JYq6kACDerFSRZlMOtwwVW4FyPtiHgCOT%2BXHBHx9D0nc%2FCueFzAwcSV3jRpskMfcJgzZImkuA4P0fCFEd9N6oe%2FOIiKP0izNT3irRkp%2BN%2BR6Jx1vsigxy235wXNJ%2Fd62nz%2F8G3MRpHkFdNx8NEBibF%2Fj1Jeyim9OYt4ijz8VblSIFc4dwsUdTvUe7SDSCkMeUhQPtfpilHrkZhMiE%2FI6Nwc5PWPbwE3PwmwMtjXgN24Ai17QRrEBRxeySl8gHyilw%2BT3BGUu5P4pz4zQGImEa5XhG0Rm8anViatGEieVki%2BueALB%2BN850k4Eekiu1rEOr9%2FMUcj3CqNre5pp5CwM6WwIe7OU8Wz%2BRLrAcgOGaO7Rd3M8VQWRdHTtV043Rkz94KyscPI9VniMAynSWq7PxeaQKA1FSla0EejUzMIOW5b4GOqUBZ245g1ZiXz28w3jfUpaWK2jh6xi6mO4ChNSB%2BXAsruEDLg%2FoQVdYdUFCuhEFLnuMFIf6%2BDiUrT7zsyCkAAU0a0Z53UVjF2QcavNqhqn9krZNBY2uxk%2Bbv9Lr5YhcA9s0DO3xKmE%2FqR7UiurdmOpjI8OV5KcgkQ8zUIgdjxe2SS%2F5rG8843Wq90hjxqi7ncR1Qy0%2BM7HnUelzmc6kUD189ljBJHH8&X-Amz-Signature=02b41fa0f2d810a2c7c4a3bb8e5e9001931e57d702253c9f131aec2eef11ca00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFCGHSO%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFZqiCnJZuKsO3o2Thqet1DEooJbcNt8h3FFZUrUD%2FuMAiEA1v4AlsM%2FCwR94VDnEr%2FoqzWJFlbgNHcWRvifK%2BTvHhYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDytYCGRenhfA8O9ayrcA7K2Z11t%2B7KrdtfZnY6SvJ%2BoVq8DdG6ZZyAtJmIxWReVRYbfaoLSoP4VniuB4ldNhleT3SfqyeC8oWw4HzrYaRg4WASxva6O9p9RtNX3LNe4H6Oc5BSL9Qhl2TBXVL737VVTPPT7tGDzNF57GET%2BlnEjoM9WpJjhXJsbXIIJSnz0aSjMgksgzD0u4C4AxxW%2FavNbYPyD4tEMQNoDl2SQtO2JYq6kACDerFSRZlMOtwwVW4FyPtiHgCOT%2BXHBHx9D0nc%2FCueFzAwcSV3jRpskMfcJgzZImkuA4P0fCFEd9N6oe%2FOIiKP0izNT3irRkp%2BN%2BR6Jx1vsigxy235wXNJ%2Fd62nz%2F8G3MRpHkFdNx8NEBibF%2Fj1Jeyim9OYt4ijz8VblSIFc4dwsUdTvUe7SDSCkMeUhQPtfpilHrkZhMiE%2FI6Nwc5PWPbwE3PwmwMtjXgN24Ai17QRrEBRxeySl8gHyilw%2BT3BGUu5P4pz4zQGImEa5XhG0Rm8anViatGEieVki%2BueALB%2BN850k4Eekiu1rEOr9%2FMUcj3CqNre5pp5CwM6WwIe7OU8Wz%2BRLrAcgOGaO7Rd3M8VQWRdHTtV043Rkz94KyscPI9VniMAynSWq7PxeaQKA1FSla0EejUzMIOW5b4GOqUBZ245g1ZiXz28w3jfUpaWK2jh6xi6mO4ChNSB%2BXAsruEDLg%2FoQVdYdUFCuhEFLnuMFIf6%2BDiUrT7zsyCkAAU0a0Z53UVjF2QcavNqhqn9krZNBY2uxk%2Bbv9Lr5YhcA9s0DO3xKmE%2FqR7UiurdmOpjI8OV5KcgkQ8zUIgdjxe2SS%2F5rG8843Wq90hjxqi7ncR1Qy0%2BM7HnUelzmc6kUD189ljBJHH8&X-Amz-Signature=115bae60e3130d48960adead131465f3026e02cafedb2a98fb126bb1bf439056&X-Amz-SignedHeaders=host&x-id=GetObject)
