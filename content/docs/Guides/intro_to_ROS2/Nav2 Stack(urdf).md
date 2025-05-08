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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVEPSN2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBlOQK0OPLfNnI1bkEG5I0kO%2BC4BoAewobY23d5EMcIQIhAMkmuCwflxqpHedp9evYKOkNgehr%2FBDHxDmkkJR%2FEN0lKv8DCHgQABoMNjM3NDIzMTgzODA1Igz0pA9JJgnC22VhMn0q3APsStgbmdakJcuZ37CSOiIIpM78PvoCbIjvi%2BtwEJoFrP6HWeWnOU5CeScwZbGGTCKMV6Qx27to7aBh0DdMbtGEc3GKVvCJL2LHVgBF1ULb0ad43aeX8s9pAUeAnZIJmi9zhzBEU507uP9kcnq6AHpmjuf0iolRFxvIQQm3w21k7jaKPIG9uc3i9Wo%2FcfnjgAAx8maMOclvsIiwHKPf%2F%2B2xVlMa0NTWANVuDqkx%2FJYf0cYh3P4XEEoIJGQVA5QNTZ3OTB1PsjDNuXVi080qTrWLkvsMI8NiFO9e1KEBpcGGYBxd0vUgeaiXbWIHRHKzlrb9RgBI88A0aC3MNyG52mO5cHI3JZPHA1FZUTR8IcZ1mDm3LEC0q5hUn5EX0SJTpAYfAzlmPwLLwxZskCHP5gsnxTiVTE2d1G2n6ctNedU%2B5EYt2NddnRGN0vnZsO3ifJ6T3YtOr9BO0uICXI4rg9Ilsd3PPomb%2B%2FWY6hrQxhbvnOxls2zT6N%2BCFyxIXrZ3pRXjndMtaoULlX4oxAS9AhmoujknCVosQfbun%2F7SJ1flaKqBoao4vFkUiwGhGzYCQ73hnO1xrMOlUWmi%2F8PQ1fukwrb9Ih2eta0iCTES6JwLY4XwOp9cWCk%2BOmoJzDDrgPPABjqkAUo5O%2B5dVcHs9uURo%2B072Dp51DWkm%2BquuBcxaHH57HzzeFlORI49DU55WrB3WKoM2yqw%2FfatH8Ionmw2i2lj0xBMicsV9wKKXUvAx1gVWXb6dSmnBEE13pypfVhWjzbpb5tIn6ui7e7qk8I2J6HaCS7ZyQTLlayuf0ixN4y6DAwo8gmzU2CWQ%2FQFRi6UrOlRRJdK0FPv4VGqEyJVMT26Rr6dQhQN&X-Amz-Signature=2aae1595f290ef4a1b51f7599fa266d85b2722ebcbf9a7ff71dda423ebedc707&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVEPSN2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBlOQK0OPLfNnI1bkEG5I0kO%2BC4BoAewobY23d5EMcIQIhAMkmuCwflxqpHedp9evYKOkNgehr%2FBDHxDmkkJR%2FEN0lKv8DCHgQABoMNjM3NDIzMTgzODA1Igz0pA9JJgnC22VhMn0q3APsStgbmdakJcuZ37CSOiIIpM78PvoCbIjvi%2BtwEJoFrP6HWeWnOU5CeScwZbGGTCKMV6Qx27to7aBh0DdMbtGEc3GKVvCJL2LHVgBF1ULb0ad43aeX8s9pAUeAnZIJmi9zhzBEU507uP9kcnq6AHpmjuf0iolRFxvIQQm3w21k7jaKPIG9uc3i9Wo%2FcfnjgAAx8maMOclvsIiwHKPf%2F%2B2xVlMa0NTWANVuDqkx%2FJYf0cYh3P4XEEoIJGQVA5QNTZ3OTB1PsjDNuXVi080qTrWLkvsMI8NiFO9e1KEBpcGGYBxd0vUgeaiXbWIHRHKzlrb9RgBI88A0aC3MNyG52mO5cHI3JZPHA1FZUTR8IcZ1mDm3LEC0q5hUn5EX0SJTpAYfAzlmPwLLwxZskCHP5gsnxTiVTE2d1G2n6ctNedU%2B5EYt2NddnRGN0vnZsO3ifJ6T3YtOr9BO0uICXI4rg9Ilsd3PPomb%2B%2FWY6hrQxhbvnOxls2zT6N%2BCFyxIXrZ3pRXjndMtaoULlX4oxAS9AhmoujknCVosQfbun%2F7SJ1flaKqBoao4vFkUiwGhGzYCQ73hnO1xrMOlUWmi%2F8PQ1fukwrb9Ih2eta0iCTES6JwLY4XwOp9cWCk%2BOmoJzDDrgPPABjqkAUo5O%2B5dVcHs9uURo%2B072Dp51DWkm%2BquuBcxaHH57HzzeFlORI49DU55WrB3WKoM2yqw%2FfatH8Ionmw2i2lj0xBMicsV9wKKXUvAx1gVWXb6dSmnBEE13pypfVhWjzbpb5tIn6ui7e7qk8I2J6HaCS7ZyQTLlayuf0ixN4y6DAwo8gmzU2CWQ%2FQFRi6UrOlRRJdK0FPv4VGqEyJVMT26Rr6dQhQN&X-Amz-Signature=e6e274bd1f329876ac1f39324ae820e72829d09193cb4d77b48a4f92895edefb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVEPSN2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBlOQK0OPLfNnI1bkEG5I0kO%2BC4BoAewobY23d5EMcIQIhAMkmuCwflxqpHedp9evYKOkNgehr%2FBDHxDmkkJR%2FEN0lKv8DCHgQABoMNjM3NDIzMTgzODA1Igz0pA9JJgnC22VhMn0q3APsStgbmdakJcuZ37CSOiIIpM78PvoCbIjvi%2BtwEJoFrP6HWeWnOU5CeScwZbGGTCKMV6Qx27to7aBh0DdMbtGEc3GKVvCJL2LHVgBF1ULb0ad43aeX8s9pAUeAnZIJmi9zhzBEU507uP9kcnq6AHpmjuf0iolRFxvIQQm3w21k7jaKPIG9uc3i9Wo%2FcfnjgAAx8maMOclvsIiwHKPf%2F%2B2xVlMa0NTWANVuDqkx%2FJYf0cYh3P4XEEoIJGQVA5QNTZ3OTB1PsjDNuXVi080qTrWLkvsMI8NiFO9e1KEBpcGGYBxd0vUgeaiXbWIHRHKzlrb9RgBI88A0aC3MNyG52mO5cHI3JZPHA1FZUTR8IcZ1mDm3LEC0q5hUn5EX0SJTpAYfAzlmPwLLwxZskCHP5gsnxTiVTE2d1G2n6ctNedU%2B5EYt2NddnRGN0vnZsO3ifJ6T3YtOr9BO0uICXI4rg9Ilsd3PPomb%2B%2FWY6hrQxhbvnOxls2zT6N%2BCFyxIXrZ3pRXjndMtaoULlX4oxAS9AhmoujknCVosQfbun%2F7SJ1flaKqBoao4vFkUiwGhGzYCQ73hnO1xrMOlUWmi%2F8PQ1fukwrb9Ih2eta0iCTES6JwLY4XwOp9cWCk%2BOmoJzDDrgPPABjqkAUo5O%2B5dVcHs9uURo%2B072Dp51DWkm%2BquuBcxaHH57HzzeFlORI49DU55WrB3WKoM2yqw%2FfatH8Ionmw2i2lj0xBMicsV9wKKXUvAx1gVWXb6dSmnBEE13pypfVhWjzbpb5tIn6ui7e7qk8I2J6HaCS7ZyQTLlayuf0ixN4y6DAwo8gmzU2CWQ%2FQFRi6UrOlRRJdK0FPv4VGqEyJVMT26Rr6dQhQN&X-Amz-Signature=880aa3e5c914662ed9965ad070e9af71fc8271884b6793fc78ace47c782db3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVEPSN2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBlOQK0OPLfNnI1bkEG5I0kO%2BC4BoAewobY23d5EMcIQIhAMkmuCwflxqpHedp9evYKOkNgehr%2FBDHxDmkkJR%2FEN0lKv8DCHgQABoMNjM3NDIzMTgzODA1Igz0pA9JJgnC22VhMn0q3APsStgbmdakJcuZ37CSOiIIpM78PvoCbIjvi%2BtwEJoFrP6HWeWnOU5CeScwZbGGTCKMV6Qx27to7aBh0DdMbtGEc3GKVvCJL2LHVgBF1ULb0ad43aeX8s9pAUeAnZIJmi9zhzBEU507uP9kcnq6AHpmjuf0iolRFxvIQQm3w21k7jaKPIG9uc3i9Wo%2FcfnjgAAx8maMOclvsIiwHKPf%2F%2B2xVlMa0NTWANVuDqkx%2FJYf0cYh3P4XEEoIJGQVA5QNTZ3OTB1PsjDNuXVi080qTrWLkvsMI8NiFO9e1KEBpcGGYBxd0vUgeaiXbWIHRHKzlrb9RgBI88A0aC3MNyG52mO5cHI3JZPHA1FZUTR8IcZ1mDm3LEC0q5hUn5EX0SJTpAYfAzlmPwLLwxZskCHP5gsnxTiVTE2d1G2n6ctNedU%2B5EYt2NddnRGN0vnZsO3ifJ6T3YtOr9BO0uICXI4rg9Ilsd3PPomb%2B%2FWY6hrQxhbvnOxls2zT6N%2BCFyxIXrZ3pRXjndMtaoULlX4oxAS9AhmoujknCVosQfbun%2F7SJ1flaKqBoao4vFkUiwGhGzYCQ73hnO1xrMOlUWmi%2F8PQ1fukwrb9Ih2eta0iCTES6JwLY4XwOp9cWCk%2BOmoJzDDrgPPABjqkAUo5O%2B5dVcHs9uURo%2B072Dp51DWkm%2BquuBcxaHH57HzzeFlORI49DU55WrB3WKoM2yqw%2FfatH8Ionmw2i2lj0xBMicsV9wKKXUvAx1gVWXb6dSmnBEE13pypfVhWjzbpb5tIn6ui7e7qk8I2J6HaCS7ZyQTLlayuf0ixN4y6DAwo8gmzU2CWQ%2FQFRi6UrOlRRJdK0FPv4VGqEyJVMT26Rr6dQhQN&X-Amz-Signature=dfc7f874530f08d293d3d3d5e6b5a94c59d4d4608f56214ea4670ee310ba4215&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVEPSN2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBlOQK0OPLfNnI1bkEG5I0kO%2BC4BoAewobY23d5EMcIQIhAMkmuCwflxqpHedp9evYKOkNgehr%2FBDHxDmkkJR%2FEN0lKv8DCHgQABoMNjM3NDIzMTgzODA1Igz0pA9JJgnC22VhMn0q3APsStgbmdakJcuZ37CSOiIIpM78PvoCbIjvi%2BtwEJoFrP6HWeWnOU5CeScwZbGGTCKMV6Qx27to7aBh0DdMbtGEc3GKVvCJL2LHVgBF1ULb0ad43aeX8s9pAUeAnZIJmi9zhzBEU507uP9kcnq6AHpmjuf0iolRFxvIQQm3w21k7jaKPIG9uc3i9Wo%2FcfnjgAAx8maMOclvsIiwHKPf%2F%2B2xVlMa0NTWANVuDqkx%2FJYf0cYh3P4XEEoIJGQVA5QNTZ3OTB1PsjDNuXVi080qTrWLkvsMI8NiFO9e1KEBpcGGYBxd0vUgeaiXbWIHRHKzlrb9RgBI88A0aC3MNyG52mO5cHI3JZPHA1FZUTR8IcZ1mDm3LEC0q5hUn5EX0SJTpAYfAzlmPwLLwxZskCHP5gsnxTiVTE2d1G2n6ctNedU%2B5EYt2NddnRGN0vnZsO3ifJ6T3YtOr9BO0uICXI4rg9Ilsd3PPomb%2B%2FWY6hrQxhbvnOxls2zT6N%2BCFyxIXrZ3pRXjndMtaoULlX4oxAS9AhmoujknCVosQfbun%2F7SJ1flaKqBoao4vFkUiwGhGzYCQ73hnO1xrMOlUWmi%2F8PQ1fukwrb9Ih2eta0iCTES6JwLY4XwOp9cWCk%2BOmoJzDDrgPPABjqkAUo5O%2B5dVcHs9uURo%2B072Dp51DWkm%2BquuBcxaHH57HzzeFlORI49DU55WrB3WKoM2yqw%2FfatH8Ionmw2i2lj0xBMicsV9wKKXUvAx1gVWXb6dSmnBEE13pypfVhWjzbpb5tIn6ui7e7qk8I2J6HaCS7ZyQTLlayuf0ixN4y6DAwo8gmzU2CWQ%2FQFRi6UrOlRRJdK0FPv4VGqEyJVMT26Rr6dQhQN&X-Amz-Signature=bf4266d095170c9de84ee4b654e56866ef35b01a461b0123d42353875725f1a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVEPSN2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBlOQK0OPLfNnI1bkEG5I0kO%2BC4BoAewobY23d5EMcIQIhAMkmuCwflxqpHedp9evYKOkNgehr%2FBDHxDmkkJR%2FEN0lKv8DCHgQABoMNjM3NDIzMTgzODA1Igz0pA9JJgnC22VhMn0q3APsStgbmdakJcuZ37CSOiIIpM78PvoCbIjvi%2BtwEJoFrP6HWeWnOU5CeScwZbGGTCKMV6Qx27to7aBh0DdMbtGEc3GKVvCJL2LHVgBF1ULb0ad43aeX8s9pAUeAnZIJmi9zhzBEU507uP9kcnq6AHpmjuf0iolRFxvIQQm3w21k7jaKPIG9uc3i9Wo%2FcfnjgAAx8maMOclvsIiwHKPf%2F%2B2xVlMa0NTWANVuDqkx%2FJYf0cYh3P4XEEoIJGQVA5QNTZ3OTB1PsjDNuXVi080qTrWLkvsMI8NiFO9e1KEBpcGGYBxd0vUgeaiXbWIHRHKzlrb9RgBI88A0aC3MNyG52mO5cHI3JZPHA1FZUTR8IcZ1mDm3LEC0q5hUn5EX0SJTpAYfAzlmPwLLwxZskCHP5gsnxTiVTE2d1G2n6ctNedU%2B5EYt2NddnRGN0vnZsO3ifJ6T3YtOr9BO0uICXI4rg9Ilsd3PPomb%2B%2FWY6hrQxhbvnOxls2zT6N%2BCFyxIXrZ3pRXjndMtaoULlX4oxAS9AhmoujknCVosQfbun%2F7SJ1flaKqBoao4vFkUiwGhGzYCQ73hnO1xrMOlUWmi%2F8PQ1fukwrb9Ih2eta0iCTES6JwLY4XwOp9cWCk%2BOmoJzDDrgPPABjqkAUo5O%2B5dVcHs9uURo%2B072Dp51DWkm%2BquuBcxaHH57HzzeFlORI49DU55WrB3WKoM2yqw%2FfatH8Ionmw2i2lj0xBMicsV9wKKXUvAx1gVWXb6dSmnBEE13pypfVhWjzbpb5tIn6ui7e7qk8I2J6HaCS7ZyQTLlayuf0ixN4y6DAwo8gmzU2CWQ%2FQFRi6UrOlRRJdK0FPv4VGqEyJVMT26Rr6dQhQN&X-Amz-Signature=6c3f0f21cd1a52cc180429b2db745605fc752454e34e4743eb11c9f44ba64392&X-Amz-SignedHeaders=host&x-id=GetObject)
