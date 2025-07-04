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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XST6CILN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDlHriajtFKZN2cAFX1uU3JLm20u5sgYaelVc2jtzQRDgIhANPzaA9ISKFNKd2sqdtBjrk4%2BmrlurvybXqJS4L3HWM9Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxeSliprGRPMaMK6aEq3AMR5w%2ButXdNBmX0YGNB2jes5zS4Ue8yj4B0BzRCj%2BK%2FnIh5%2Bfkhc2uarc48lne1W40OwuyAEP9HxjKZOVq1QKJs4K31J7vP9oXfZbHkR9RSn0fJhI3JM6qAaa5C9sKQs%2F38PWZCK6JCkkv9a92TLpmzCFD0BFpRzwytubHuk1RE%2FwwF%2B6khzz3%2Fg0l1pm6Rq0TNeHfaS0JpFyPGfu3srOE9eMSZfyvs7m2Wf91KQk0ehx3uEBVywtycddCOv0ik4%2FtZyCTzXAE8Uau5jZbADIO9JuEhlzSIPyGuuaJx%2FMpOAVn6IZOlBLITV%2F6Ef4ZafN8t8L%2F7gFa2H0QY6nC7UNCEK5JzCrcpyEU7hS%2FKI0Ho%2ByLsZzh%2FHFXqrIb3hoIIc9OT0SbQBxNOw570HITz1M4dCl%2FWAcITkO0KUom%2BTB09PVTjTegISDO5Bokywz6LFD3AcgT%2FbR7HXEDJn%2Fg9fqBMBtSJUD7Qt6kTfiS5kftoXjabAH7z8efxIGXZSj4aEXrv%2B8vHnR%2FFbtFvJeK%2BzbvTzCimADAAox4j3dIiqFpWh4Gr8T0VX0bcti2c%2FJ2CEY40ddQpr26PgN4aSbm3s7G8iBz1i7BPQXjQ%2BPVYAsZitnYZ%2FJB3nSih%2Ft%2BAEzCO7J%2FDBjqkAdRhqBxr0V%2FM3DkTc%2BvFRiLN5W5i3qGblbEUPNYam8c3utBq8f3lBW3WyfWGshWlH0uvUs%2FcITV3MVRr9oKqmueOBoAijKHAAGLpRNCPT4WNqEM33m2dDrUlnuVax43WaulqxY5ygVFUii2ZmYDt5t5RgAkww00Eh5xnZDqKcijWP%2FVtvFeG8rVTW5sOt9l4lbT2IfEoUb53D8uto7l6w44BwjTx&X-Amz-Signature=4c6512fb6ce5aa8191f8e4ad63dc09f22d74f4f70a732213df8c5915512d58c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XST6CILN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDlHriajtFKZN2cAFX1uU3JLm20u5sgYaelVc2jtzQRDgIhANPzaA9ISKFNKd2sqdtBjrk4%2BmrlurvybXqJS4L3HWM9Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxeSliprGRPMaMK6aEq3AMR5w%2ButXdNBmX0YGNB2jes5zS4Ue8yj4B0BzRCj%2BK%2FnIh5%2Bfkhc2uarc48lne1W40OwuyAEP9HxjKZOVq1QKJs4K31J7vP9oXfZbHkR9RSn0fJhI3JM6qAaa5C9sKQs%2F38PWZCK6JCkkv9a92TLpmzCFD0BFpRzwytubHuk1RE%2FwwF%2B6khzz3%2Fg0l1pm6Rq0TNeHfaS0JpFyPGfu3srOE9eMSZfyvs7m2Wf91KQk0ehx3uEBVywtycddCOv0ik4%2FtZyCTzXAE8Uau5jZbADIO9JuEhlzSIPyGuuaJx%2FMpOAVn6IZOlBLITV%2F6Ef4ZafN8t8L%2F7gFa2H0QY6nC7UNCEK5JzCrcpyEU7hS%2FKI0Ho%2ByLsZzh%2FHFXqrIb3hoIIc9OT0SbQBxNOw570HITz1M4dCl%2FWAcITkO0KUom%2BTB09PVTjTegISDO5Bokywz6LFD3AcgT%2FbR7HXEDJn%2Fg9fqBMBtSJUD7Qt6kTfiS5kftoXjabAH7z8efxIGXZSj4aEXrv%2B8vHnR%2FFbtFvJeK%2BzbvTzCimADAAox4j3dIiqFpWh4Gr8T0VX0bcti2c%2FJ2CEY40ddQpr26PgN4aSbm3s7G8iBz1i7BPQXjQ%2BPVYAsZitnYZ%2FJB3nSih%2Ft%2BAEzCO7J%2FDBjqkAdRhqBxr0V%2FM3DkTc%2BvFRiLN5W5i3qGblbEUPNYam8c3utBq8f3lBW3WyfWGshWlH0uvUs%2FcITV3MVRr9oKqmueOBoAijKHAAGLpRNCPT4WNqEM33m2dDrUlnuVax43WaulqxY5ygVFUii2ZmYDt5t5RgAkww00Eh5xnZDqKcijWP%2FVtvFeG8rVTW5sOt9l4lbT2IfEoUb53D8uto7l6w44BwjTx&X-Amz-Signature=75d3da772ba5ab48ade1ecff4a3efd33f8d8817be36c75c6597e670d1a489b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XST6CILN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDlHriajtFKZN2cAFX1uU3JLm20u5sgYaelVc2jtzQRDgIhANPzaA9ISKFNKd2sqdtBjrk4%2BmrlurvybXqJS4L3HWM9Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxeSliprGRPMaMK6aEq3AMR5w%2ButXdNBmX0YGNB2jes5zS4Ue8yj4B0BzRCj%2BK%2FnIh5%2Bfkhc2uarc48lne1W40OwuyAEP9HxjKZOVq1QKJs4K31J7vP9oXfZbHkR9RSn0fJhI3JM6qAaa5C9sKQs%2F38PWZCK6JCkkv9a92TLpmzCFD0BFpRzwytubHuk1RE%2FwwF%2B6khzz3%2Fg0l1pm6Rq0TNeHfaS0JpFyPGfu3srOE9eMSZfyvs7m2Wf91KQk0ehx3uEBVywtycddCOv0ik4%2FtZyCTzXAE8Uau5jZbADIO9JuEhlzSIPyGuuaJx%2FMpOAVn6IZOlBLITV%2F6Ef4ZafN8t8L%2F7gFa2H0QY6nC7UNCEK5JzCrcpyEU7hS%2FKI0Ho%2ByLsZzh%2FHFXqrIb3hoIIc9OT0SbQBxNOw570HITz1M4dCl%2FWAcITkO0KUom%2BTB09PVTjTegISDO5Bokywz6LFD3AcgT%2FbR7HXEDJn%2Fg9fqBMBtSJUD7Qt6kTfiS5kftoXjabAH7z8efxIGXZSj4aEXrv%2B8vHnR%2FFbtFvJeK%2BzbvTzCimADAAox4j3dIiqFpWh4Gr8T0VX0bcti2c%2FJ2CEY40ddQpr26PgN4aSbm3s7G8iBz1i7BPQXjQ%2BPVYAsZitnYZ%2FJB3nSih%2Ft%2BAEzCO7J%2FDBjqkAdRhqBxr0V%2FM3DkTc%2BvFRiLN5W5i3qGblbEUPNYam8c3utBq8f3lBW3WyfWGshWlH0uvUs%2FcITV3MVRr9oKqmueOBoAijKHAAGLpRNCPT4WNqEM33m2dDrUlnuVax43WaulqxY5ygVFUii2ZmYDt5t5RgAkww00Eh5xnZDqKcijWP%2FVtvFeG8rVTW5sOt9l4lbT2IfEoUb53D8uto7l6w44BwjTx&X-Amz-Signature=59ea6ef4434cf8ce9a187df0143cdfeea5e928624913987201293e273240665f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XST6CILN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDlHriajtFKZN2cAFX1uU3JLm20u5sgYaelVc2jtzQRDgIhANPzaA9ISKFNKd2sqdtBjrk4%2BmrlurvybXqJS4L3HWM9Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxeSliprGRPMaMK6aEq3AMR5w%2ButXdNBmX0YGNB2jes5zS4Ue8yj4B0BzRCj%2BK%2FnIh5%2Bfkhc2uarc48lne1W40OwuyAEP9HxjKZOVq1QKJs4K31J7vP9oXfZbHkR9RSn0fJhI3JM6qAaa5C9sKQs%2F38PWZCK6JCkkv9a92TLpmzCFD0BFpRzwytubHuk1RE%2FwwF%2B6khzz3%2Fg0l1pm6Rq0TNeHfaS0JpFyPGfu3srOE9eMSZfyvs7m2Wf91KQk0ehx3uEBVywtycddCOv0ik4%2FtZyCTzXAE8Uau5jZbADIO9JuEhlzSIPyGuuaJx%2FMpOAVn6IZOlBLITV%2F6Ef4ZafN8t8L%2F7gFa2H0QY6nC7UNCEK5JzCrcpyEU7hS%2FKI0Ho%2ByLsZzh%2FHFXqrIb3hoIIc9OT0SbQBxNOw570HITz1M4dCl%2FWAcITkO0KUom%2BTB09PVTjTegISDO5Bokywz6LFD3AcgT%2FbR7HXEDJn%2Fg9fqBMBtSJUD7Qt6kTfiS5kftoXjabAH7z8efxIGXZSj4aEXrv%2B8vHnR%2FFbtFvJeK%2BzbvTzCimADAAox4j3dIiqFpWh4Gr8T0VX0bcti2c%2FJ2CEY40ddQpr26PgN4aSbm3s7G8iBz1i7BPQXjQ%2BPVYAsZitnYZ%2FJB3nSih%2Ft%2BAEzCO7J%2FDBjqkAdRhqBxr0V%2FM3DkTc%2BvFRiLN5W5i3qGblbEUPNYam8c3utBq8f3lBW3WyfWGshWlH0uvUs%2FcITV3MVRr9oKqmueOBoAijKHAAGLpRNCPT4WNqEM33m2dDrUlnuVax43WaulqxY5ygVFUii2ZmYDt5t5RgAkww00Eh5xnZDqKcijWP%2FVtvFeG8rVTW5sOt9l4lbT2IfEoUb53D8uto7l6w44BwjTx&X-Amz-Signature=974dfef1b39ff88163d09127f1505d53c41ead82e280b78d54af400ea5e3077e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XST6CILN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDlHriajtFKZN2cAFX1uU3JLm20u5sgYaelVc2jtzQRDgIhANPzaA9ISKFNKd2sqdtBjrk4%2BmrlurvybXqJS4L3HWM9Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxeSliprGRPMaMK6aEq3AMR5w%2ButXdNBmX0YGNB2jes5zS4Ue8yj4B0BzRCj%2BK%2FnIh5%2Bfkhc2uarc48lne1W40OwuyAEP9HxjKZOVq1QKJs4K31J7vP9oXfZbHkR9RSn0fJhI3JM6qAaa5C9sKQs%2F38PWZCK6JCkkv9a92TLpmzCFD0BFpRzwytubHuk1RE%2FwwF%2B6khzz3%2Fg0l1pm6Rq0TNeHfaS0JpFyPGfu3srOE9eMSZfyvs7m2Wf91KQk0ehx3uEBVywtycddCOv0ik4%2FtZyCTzXAE8Uau5jZbADIO9JuEhlzSIPyGuuaJx%2FMpOAVn6IZOlBLITV%2F6Ef4ZafN8t8L%2F7gFa2H0QY6nC7UNCEK5JzCrcpyEU7hS%2FKI0Ho%2ByLsZzh%2FHFXqrIb3hoIIc9OT0SbQBxNOw570HITz1M4dCl%2FWAcITkO0KUom%2BTB09PVTjTegISDO5Bokywz6LFD3AcgT%2FbR7HXEDJn%2Fg9fqBMBtSJUD7Qt6kTfiS5kftoXjabAH7z8efxIGXZSj4aEXrv%2B8vHnR%2FFbtFvJeK%2BzbvTzCimADAAox4j3dIiqFpWh4Gr8T0VX0bcti2c%2FJ2CEY40ddQpr26PgN4aSbm3s7G8iBz1i7BPQXjQ%2BPVYAsZitnYZ%2FJB3nSih%2Ft%2BAEzCO7J%2FDBjqkAdRhqBxr0V%2FM3DkTc%2BvFRiLN5W5i3qGblbEUPNYam8c3utBq8f3lBW3WyfWGshWlH0uvUs%2FcITV3MVRr9oKqmueOBoAijKHAAGLpRNCPT4WNqEM33m2dDrUlnuVax43WaulqxY5ygVFUii2ZmYDt5t5RgAkww00Eh5xnZDqKcijWP%2FVtvFeG8rVTW5sOt9l4lbT2IfEoUb53D8uto7l6w44BwjTx&X-Amz-Signature=9d39258c5b2ef5ed3020145c40db6e570bebebfe906f20ea3a35f6420b0a371c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XST6CILN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDlHriajtFKZN2cAFX1uU3JLm20u5sgYaelVc2jtzQRDgIhANPzaA9ISKFNKd2sqdtBjrk4%2BmrlurvybXqJS4L3HWM9Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxeSliprGRPMaMK6aEq3AMR5w%2ButXdNBmX0YGNB2jes5zS4Ue8yj4B0BzRCj%2BK%2FnIh5%2Bfkhc2uarc48lne1W40OwuyAEP9HxjKZOVq1QKJs4K31J7vP9oXfZbHkR9RSn0fJhI3JM6qAaa5C9sKQs%2F38PWZCK6JCkkv9a92TLpmzCFD0BFpRzwytubHuk1RE%2FwwF%2B6khzz3%2Fg0l1pm6Rq0TNeHfaS0JpFyPGfu3srOE9eMSZfyvs7m2Wf91KQk0ehx3uEBVywtycddCOv0ik4%2FtZyCTzXAE8Uau5jZbADIO9JuEhlzSIPyGuuaJx%2FMpOAVn6IZOlBLITV%2F6Ef4ZafN8t8L%2F7gFa2H0QY6nC7UNCEK5JzCrcpyEU7hS%2FKI0Ho%2ByLsZzh%2FHFXqrIb3hoIIc9OT0SbQBxNOw570HITz1M4dCl%2FWAcITkO0KUom%2BTB09PVTjTegISDO5Bokywz6LFD3AcgT%2FbR7HXEDJn%2Fg9fqBMBtSJUD7Qt6kTfiS5kftoXjabAH7z8efxIGXZSj4aEXrv%2B8vHnR%2FFbtFvJeK%2BzbvTzCimADAAox4j3dIiqFpWh4Gr8T0VX0bcti2c%2FJ2CEY40ddQpr26PgN4aSbm3s7G8iBz1i7BPQXjQ%2BPVYAsZitnYZ%2FJB3nSih%2Ft%2BAEzCO7J%2FDBjqkAdRhqBxr0V%2FM3DkTc%2BvFRiLN5W5i3qGblbEUPNYam8c3utBq8f3lBW3WyfWGshWlH0uvUs%2FcITV3MVRr9oKqmueOBoAijKHAAGLpRNCPT4WNqEM33m2dDrUlnuVax43WaulqxY5ygVFUii2ZmYDt5t5RgAkww00Eh5xnZDqKcijWP%2FVtvFeG8rVTW5sOt9l4lbT2IfEoUb53D8uto7l6w44BwjTx&X-Amz-Signature=a92221ca9e5ead24558d8d7de087b8df1549c0e9bf05e6362af7658e8d824a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
