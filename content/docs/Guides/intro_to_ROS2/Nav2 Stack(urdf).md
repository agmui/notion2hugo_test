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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3FFTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIglR2WKWHQyP8MLWCjlgk1lu%2BlCr0HcmC%2Bt33vJR8EAIhAJaH0te0nCIqGqHZeaz4yPOO7GHnfE9wYJbkDOjdtVW2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGgf3rpTvqbn003zEq3AOCf%2Fd7RTBpaY3ZGZiTQs4ur5pnY1l%2FIuky9miYEfVCeCGVoyN9PFN4YCdaCEN9sF0kbJCHAkIjyDjq7utHUE%2B2zuy71A07SMZuQcTwHnyJSu7Qe6qN8GHKbafDnYFcnw%2BiNTYliGI%2B6dxhO1hB2QLb5VXz5BdQR9UggRdSd8PHn8c5Md7%2F%2BL6VXW7q0v61WK%2BsPeuqAZJhbELDPPr1L6aaGAPN5JMXQCutY%2BD%2FwMqVEvJd9eUvB%2ByfUSupV6%2Bsxv38MS51Kd3axkmxbyLGsnk7KWxUgnT1wbX35m0ECMiS%2FwKb0KDyO9sFhQoaNa9jugC%2F%2FVgMGofUgZ%2FfP0pyLkpJz9L%2BVUUrJxQ9McQ2%2FvEnHT81e%2B95TmLgn2xtQIesz49m6I1rKpLCEnnd5sduPCkaAYSQSBtEjhTVtXVWny4rorpKLekpRpJMTKhNIL%2BHrlKxgaPk%2F2Ta3ufSmJLPtLKryQI1KqURhfI5SMrjzahI3NWyCEzyccBicwN3%2BbAiVS7Peb9rbiK6P5HX42a3FV6%2F7%2Fadqgh03Ap86awjG%2BoRPl8bXPiFlNJIsrGsySGW3ia94tJuX592miZFSdn6MmJCn8x7eVoXDw4OpRkP7pj7zwcqS7KsM3iGyokrwDDE9qq9BjqkAYm1jFNjBeA97g8hWFx2k3snU%2FNtomtMq4p57RwHciocJ%2BU4WESEpip9LMeQY0YTeF53vNswAZ59rV52%2FejgNXkHhCVPegBzzyrmwoU5CCaFCFL%2FVybJncOLdKs1Nht7MzC2umImLuWu5%2BMABtcvOT7Narp%2FBxEETurzwHzlB%2F%2FJKN9MRe%2FUbYhUmrMp2dkayjhpcd%2BDHcCnNTdX0Aj4wozry8yn&X-Amz-Signature=2cef889bde0d821172508b6c68d14ecb83e437bab8176490eec53b26c32cf29b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3FFTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIglR2WKWHQyP8MLWCjlgk1lu%2BlCr0HcmC%2Bt33vJR8EAIhAJaH0te0nCIqGqHZeaz4yPOO7GHnfE9wYJbkDOjdtVW2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGgf3rpTvqbn003zEq3AOCf%2Fd7RTBpaY3ZGZiTQs4ur5pnY1l%2FIuky9miYEfVCeCGVoyN9PFN4YCdaCEN9sF0kbJCHAkIjyDjq7utHUE%2B2zuy71A07SMZuQcTwHnyJSu7Qe6qN8GHKbafDnYFcnw%2BiNTYliGI%2B6dxhO1hB2QLb5VXz5BdQR9UggRdSd8PHn8c5Md7%2F%2BL6VXW7q0v61WK%2BsPeuqAZJhbELDPPr1L6aaGAPN5JMXQCutY%2BD%2FwMqVEvJd9eUvB%2ByfUSupV6%2Bsxv38MS51Kd3axkmxbyLGsnk7KWxUgnT1wbX35m0ECMiS%2FwKb0KDyO9sFhQoaNa9jugC%2F%2FVgMGofUgZ%2FfP0pyLkpJz9L%2BVUUrJxQ9McQ2%2FvEnHT81e%2B95TmLgn2xtQIesz49m6I1rKpLCEnnd5sduPCkaAYSQSBtEjhTVtXVWny4rorpKLekpRpJMTKhNIL%2BHrlKxgaPk%2F2Ta3ufSmJLPtLKryQI1KqURhfI5SMrjzahI3NWyCEzyccBicwN3%2BbAiVS7Peb9rbiK6P5HX42a3FV6%2F7%2Fadqgh03Ap86awjG%2BoRPl8bXPiFlNJIsrGsySGW3ia94tJuX592miZFSdn6MmJCn8x7eVoXDw4OpRkP7pj7zwcqS7KsM3iGyokrwDDE9qq9BjqkAYm1jFNjBeA97g8hWFx2k3snU%2FNtomtMq4p57RwHciocJ%2BU4WESEpip9LMeQY0YTeF53vNswAZ59rV52%2FejgNXkHhCVPegBzzyrmwoU5CCaFCFL%2FVybJncOLdKs1Nht7MzC2umImLuWu5%2BMABtcvOT7Narp%2FBxEETurzwHzlB%2F%2FJKN9MRe%2FUbYhUmrMp2dkayjhpcd%2BDHcCnNTdX0Aj4wozry8yn&X-Amz-Signature=0553432920a74353ee222aa203c4bee2c8db600bedc57405b66c1312c9cd3bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3FFTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIglR2WKWHQyP8MLWCjlgk1lu%2BlCr0HcmC%2Bt33vJR8EAIhAJaH0te0nCIqGqHZeaz4yPOO7GHnfE9wYJbkDOjdtVW2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGgf3rpTvqbn003zEq3AOCf%2Fd7RTBpaY3ZGZiTQs4ur5pnY1l%2FIuky9miYEfVCeCGVoyN9PFN4YCdaCEN9sF0kbJCHAkIjyDjq7utHUE%2B2zuy71A07SMZuQcTwHnyJSu7Qe6qN8GHKbafDnYFcnw%2BiNTYliGI%2B6dxhO1hB2QLb5VXz5BdQR9UggRdSd8PHn8c5Md7%2F%2BL6VXW7q0v61WK%2BsPeuqAZJhbELDPPr1L6aaGAPN5JMXQCutY%2BD%2FwMqVEvJd9eUvB%2ByfUSupV6%2Bsxv38MS51Kd3axkmxbyLGsnk7KWxUgnT1wbX35m0ECMiS%2FwKb0KDyO9sFhQoaNa9jugC%2F%2FVgMGofUgZ%2FfP0pyLkpJz9L%2BVUUrJxQ9McQ2%2FvEnHT81e%2B95TmLgn2xtQIesz49m6I1rKpLCEnnd5sduPCkaAYSQSBtEjhTVtXVWny4rorpKLekpRpJMTKhNIL%2BHrlKxgaPk%2F2Ta3ufSmJLPtLKryQI1KqURhfI5SMrjzahI3NWyCEzyccBicwN3%2BbAiVS7Peb9rbiK6P5HX42a3FV6%2F7%2Fadqgh03Ap86awjG%2BoRPl8bXPiFlNJIsrGsySGW3ia94tJuX592miZFSdn6MmJCn8x7eVoXDw4OpRkP7pj7zwcqS7KsM3iGyokrwDDE9qq9BjqkAYm1jFNjBeA97g8hWFx2k3snU%2FNtomtMq4p57RwHciocJ%2BU4WESEpip9LMeQY0YTeF53vNswAZ59rV52%2FejgNXkHhCVPegBzzyrmwoU5CCaFCFL%2FVybJncOLdKs1Nht7MzC2umImLuWu5%2BMABtcvOT7Narp%2FBxEETurzwHzlB%2F%2FJKN9MRe%2FUbYhUmrMp2dkayjhpcd%2BDHcCnNTdX0Aj4wozry8yn&X-Amz-Signature=5f0897d65285501c6f8acbbb1703fbf2c0b14b47d0ffa262700bfc9a7e9d8343&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3FFTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIglR2WKWHQyP8MLWCjlgk1lu%2BlCr0HcmC%2Bt33vJR8EAIhAJaH0te0nCIqGqHZeaz4yPOO7GHnfE9wYJbkDOjdtVW2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGgf3rpTvqbn003zEq3AOCf%2Fd7RTBpaY3ZGZiTQs4ur5pnY1l%2FIuky9miYEfVCeCGVoyN9PFN4YCdaCEN9sF0kbJCHAkIjyDjq7utHUE%2B2zuy71A07SMZuQcTwHnyJSu7Qe6qN8GHKbafDnYFcnw%2BiNTYliGI%2B6dxhO1hB2QLb5VXz5BdQR9UggRdSd8PHn8c5Md7%2F%2BL6VXW7q0v61WK%2BsPeuqAZJhbELDPPr1L6aaGAPN5JMXQCutY%2BD%2FwMqVEvJd9eUvB%2ByfUSupV6%2Bsxv38MS51Kd3axkmxbyLGsnk7KWxUgnT1wbX35m0ECMiS%2FwKb0KDyO9sFhQoaNa9jugC%2F%2FVgMGofUgZ%2FfP0pyLkpJz9L%2BVUUrJxQ9McQ2%2FvEnHT81e%2B95TmLgn2xtQIesz49m6I1rKpLCEnnd5sduPCkaAYSQSBtEjhTVtXVWny4rorpKLekpRpJMTKhNIL%2BHrlKxgaPk%2F2Ta3ufSmJLPtLKryQI1KqURhfI5SMrjzahI3NWyCEzyccBicwN3%2BbAiVS7Peb9rbiK6P5HX42a3FV6%2F7%2Fadqgh03Ap86awjG%2BoRPl8bXPiFlNJIsrGsySGW3ia94tJuX592miZFSdn6MmJCn8x7eVoXDw4OpRkP7pj7zwcqS7KsM3iGyokrwDDE9qq9BjqkAYm1jFNjBeA97g8hWFx2k3snU%2FNtomtMq4p57RwHciocJ%2BU4WESEpip9LMeQY0YTeF53vNswAZ59rV52%2FejgNXkHhCVPegBzzyrmwoU5CCaFCFL%2FVybJncOLdKs1Nht7MzC2umImLuWu5%2BMABtcvOT7Narp%2FBxEETurzwHzlB%2F%2FJKN9MRe%2FUbYhUmrMp2dkayjhpcd%2BDHcCnNTdX0Aj4wozry8yn&X-Amz-Signature=a6ded86f55a0a85d5164127b381cded7b526656f28aa932ffdd1f43fba5f0d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3FFTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIglR2WKWHQyP8MLWCjlgk1lu%2BlCr0HcmC%2Bt33vJR8EAIhAJaH0te0nCIqGqHZeaz4yPOO7GHnfE9wYJbkDOjdtVW2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGgf3rpTvqbn003zEq3AOCf%2Fd7RTBpaY3ZGZiTQs4ur5pnY1l%2FIuky9miYEfVCeCGVoyN9PFN4YCdaCEN9sF0kbJCHAkIjyDjq7utHUE%2B2zuy71A07SMZuQcTwHnyJSu7Qe6qN8GHKbafDnYFcnw%2BiNTYliGI%2B6dxhO1hB2QLb5VXz5BdQR9UggRdSd8PHn8c5Md7%2F%2BL6VXW7q0v61WK%2BsPeuqAZJhbELDPPr1L6aaGAPN5JMXQCutY%2BD%2FwMqVEvJd9eUvB%2ByfUSupV6%2Bsxv38MS51Kd3axkmxbyLGsnk7KWxUgnT1wbX35m0ECMiS%2FwKb0KDyO9sFhQoaNa9jugC%2F%2FVgMGofUgZ%2FfP0pyLkpJz9L%2BVUUrJxQ9McQ2%2FvEnHT81e%2B95TmLgn2xtQIesz49m6I1rKpLCEnnd5sduPCkaAYSQSBtEjhTVtXVWny4rorpKLekpRpJMTKhNIL%2BHrlKxgaPk%2F2Ta3ufSmJLPtLKryQI1KqURhfI5SMrjzahI3NWyCEzyccBicwN3%2BbAiVS7Peb9rbiK6P5HX42a3FV6%2F7%2Fadqgh03Ap86awjG%2BoRPl8bXPiFlNJIsrGsySGW3ia94tJuX592miZFSdn6MmJCn8x7eVoXDw4OpRkP7pj7zwcqS7KsM3iGyokrwDDE9qq9BjqkAYm1jFNjBeA97g8hWFx2k3snU%2FNtomtMq4p57RwHciocJ%2BU4WESEpip9LMeQY0YTeF53vNswAZ59rV52%2FejgNXkHhCVPegBzzyrmwoU5CCaFCFL%2FVybJncOLdKs1Nht7MzC2umImLuWu5%2BMABtcvOT7Narp%2FBxEETurzwHzlB%2F%2FJKN9MRe%2FUbYhUmrMp2dkayjhpcd%2BDHcCnNTdX0Aj4wozry8yn&X-Amz-Signature=de43bdf4ad55f8609e498ab5606ec141a7818d02d096f543454f994cdf806990&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3FFTM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIglR2WKWHQyP8MLWCjlgk1lu%2BlCr0HcmC%2Bt33vJR8EAIhAJaH0te0nCIqGqHZeaz4yPOO7GHnfE9wYJbkDOjdtVW2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGgf3rpTvqbn003zEq3AOCf%2Fd7RTBpaY3ZGZiTQs4ur5pnY1l%2FIuky9miYEfVCeCGVoyN9PFN4YCdaCEN9sF0kbJCHAkIjyDjq7utHUE%2B2zuy71A07SMZuQcTwHnyJSu7Qe6qN8GHKbafDnYFcnw%2BiNTYliGI%2B6dxhO1hB2QLb5VXz5BdQR9UggRdSd8PHn8c5Md7%2F%2BL6VXW7q0v61WK%2BsPeuqAZJhbELDPPr1L6aaGAPN5JMXQCutY%2BD%2FwMqVEvJd9eUvB%2ByfUSupV6%2Bsxv38MS51Kd3axkmxbyLGsnk7KWxUgnT1wbX35m0ECMiS%2FwKb0KDyO9sFhQoaNa9jugC%2F%2FVgMGofUgZ%2FfP0pyLkpJz9L%2BVUUrJxQ9McQ2%2FvEnHT81e%2B95TmLgn2xtQIesz49m6I1rKpLCEnnd5sduPCkaAYSQSBtEjhTVtXVWny4rorpKLekpRpJMTKhNIL%2BHrlKxgaPk%2F2Ta3ufSmJLPtLKryQI1KqURhfI5SMrjzahI3NWyCEzyccBicwN3%2BbAiVS7Peb9rbiK6P5HX42a3FV6%2F7%2Fadqgh03Ap86awjG%2BoRPl8bXPiFlNJIsrGsySGW3ia94tJuX592miZFSdn6MmJCn8x7eVoXDw4OpRkP7pj7zwcqS7KsM3iGyokrwDDE9qq9BjqkAYm1jFNjBeA97g8hWFx2k3snU%2FNtomtMq4p57RwHciocJ%2BU4WESEpip9LMeQY0YTeF53vNswAZ59rV52%2FejgNXkHhCVPegBzzyrmwoU5CCaFCFL%2FVybJncOLdKs1Nht7MzC2umImLuWu5%2BMABtcvOT7Narp%2FBxEETurzwHzlB%2F%2FJKN9MRe%2FUbYhUmrMp2dkayjhpcd%2BDHcCnNTdX0Aj4wozry8yn&X-Amz-Signature=937dc6449985dcebce615c13d934b02fa07be254b07ab788380f56bec91afb31&X-Amz-SignedHeaders=host&x-id=GetObject)
