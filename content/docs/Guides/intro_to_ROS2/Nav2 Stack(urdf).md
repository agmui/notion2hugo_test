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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOPBAM4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1D5Sa%2BA9J%2FCOPe9lP4gI3cD9989Kadk%2BsVMm0XLI9AIhALAxeMsSaAtFedCLmMWDgWOWcWq%2BeMcg1D9DYM8XYTt4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwynAQHr3BfkzU6dooq3APzvKwEkyrOZQl8MpNdgSGxZsJj9C3SjHdWTOUEamCd59UK4%2F%2FCKRW9NnIfKtHQ50Texs%2FWednYBk1Vf%2BkruZlKuiql2H66a4aX3WEi12eaI52KglPnp1dBUkGjJ0jGUiPFBpq4ik8Ygljo2J5Jr26WIBaTgJk7%2Bp%2BzDYwAagvUNMYrFMoSxI8e0X1IQ6eubwPynnuN6OZpsJIgezX7tjYZWcd8ygUpHUb8nBPQvw7gye3cSyloG5epkVIQHsj%2FKIvJ8Ncx3SWQd%2FmrgIsMRAwrGJDtUDGdZoHo4oPEFwrJXPl3bCV5gnrRPKQY4NeEAOUWMn4Dn4DnFW5hrTNPq2SG8qlofYpN6LYm09218duJE1f0Yu%2FcgEmqg19%2Br1eUEAOyiIJlQFyGxGHc%2Bp%2Frt44jGe4uT5rK9vNz5qchod4p0D86wcH9bdo%2FxT3QqQvYzkTO1NE1tHfOYEFHHMy5M8elBJqBrohX7a896aPoIjwvppt791cYS0iYYfLEnF%2FyjqkF5UnqW1c6GIXIjjME7c1sz61CkBay%2BKcJoyO8LtlZpH32RhuGJmZ%2Facogl%2BINXu2QdoX4fsQUWD1dpobkFFFO1u74SJS4GmWHUjIN1tDX84gRYJNw7x7vnn%2BkvjDw1LTDBjqkAWUzF4761UeHLu9I9YbSJT3OlwKER29Pa3PIcMxdsx0%2FKqMOHtVALj%2FCg%2BZu4ag37t0V9kzPJCjo7GyfaLu24o4iSHlvNoJbVfNex2J%2BYPkCbc%2Bc8F%2FPyAGlsbAkmFZlvhkU3c0uKgyXzqwbA0Vv3eBkH4cnXmothzTnDoxK8vW26ixPO7nq7Q%2FLZMCUOlw5Sz6r0QIqjVBOzTTBnS25mz5nirJY&X-Amz-Signature=ae82ee341f0c0acf0f1f9aa61efc4a5c033f0f851fa32df3c10d6e9872a8c0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOPBAM4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1D5Sa%2BA9J%2FCOPe9lP4gI3cD9989Kadk%2BsVMm0XLI9AIhALAxeMsSaAtFedCLmMWDgWOWcWq%2BeMcg1D9DYM8XYTt4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwynAQHr3BfkzU6dooq3APzvKwEkyrOZQl8MpNdgSGxZsJj9C3SjHdWTOUEamCd59UK4%2F%2FCKRW9NnIfKtHQ50Texs%2FWednYBk1Vf%2BkruZlKuiql2H66a4aX3WEi12eaI52KglPnp1dBUkGjJ0jGUiPFBpq4ik8Ygljo2J5Jr26WIBaTgJk7%2Bp%2BzDYwAagvUNMYrFMoSxI8e0X1IQ6eubwPynnuN6OZpsJIgezX7tjYZWcd8ygUpHUb8nBPQvw7gye3cSyloG5epkVIQHsj%2FKIvJ8Ncx3SWQd%2FmrgIsMRAwrGJDtUDGdZoHo4oPEFwrJXPl3bCV5gnrRPKQY4NeEAOUWMn4Dn4DnFW5hrTNPq2SG8qlofYpN6LYm09218duJE1f0Yu%2FcgEmqg19%2Br1eUEAOyiIJlQFyGxGHc%2Bp%2Frt44jGe4uT5rK9vNz5qchod4p0D86wcH9bdo%2FxT3QqQvYzkTO1NE1tHfOYEFHHMy5M8elBJqBrohX7a896aPoIjwvppt791cYS0iYYfLEnF%2FyjqkF5UnqW1c6GIXIjjME7c1sz61CkBay%2BKcJoyO8LtlZpH32RhuGJmZ%2Facogl%2BINXu2QdoX4fsQUWD1dpobkFFFO1u74SJS4GmWHUjIN1tDX84gRYJNw7x7vnn%2BkvjDw1LTDBjqkAWUzF4761UeHLu9I9YbSJT3OlwKER29Pa3PIcMxdsx0%2FKqMOHtVALj%2FCg%2BZu4ag37t0V9kzPJCjo7GyfaLu24o4iSHlvNoJbVfNex2J%2BYPkCbc%2Bc8F%2FPyAGlsbAkmFZlvhkU3c0uKgyXzqwbA0Vv3eBkH4cnXmothzTnDoxK8vW26ixPO7nq7Q%2FLZMCUOlw5Sz6r0QIqjVBOzTTBnS25mz5nirJY&X-Amz-Signature=71bca8cc28fdf1418b89993a26ecad62c98b6f41089f0fa5d63a1a97c5693d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOPBAM4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1D5Sa%2BA9J%2FCOPe9lP4gI3cD9989Kadk%2BsVMm0XLI9AIhALAxeMsSaAtFedCLmMWDgWOWcWq%2BeMcg1D9DYM8XYTt4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwynAQHr3BfkzU6dooq3APzvKwEkyrOZQl8MpNdgSGxZsJj9C3SjHdWTOUEamCd59UK4%2F%2FCKRW9NnIfKtHQ50Texs%2FWednYBk1Vf%2BkruZlKuiql2H66a4aX3WEi12eaI52KglPnp1dBUkGjJ0jGUiPFBpq4ik8Ygljo2J5Jr26WIBaTgJk7%2Bp%2BzDYwAagvUNMYrFMoSxI8e0X1IQ6eubwPynnuN6OZpsJIgezX7tjYZWcd8ygUpHUb8nBPQvw7gye3cSyloG5epkVIQHsj%2FKIvJ8Ncx3SWQd%2FmrgIsMRAwrGJDtUDGdZoHo4oPEFwrJXPl3bCV5gnrRPKQY4NeEAOUWMn4Dn4DnFW5hrTNPq2SG8qlofYpN6LYm09218duJE1f0Yu%2FcgEmqg19%2Br1eUEAOyiIJlQFyGxGHc%2Bp%2Frt44jGe4uT5rK9vNz5qchod4p0D86wcH9bdo%2FxT3QqQvYzkTO1NE1tHfOYEFHHMy5M8elBJqBrohX7a896aPoIjwvppt791cYS0iYYfLEnF%2FyjqkF5UnqW1c6GIXIjjME7c1sz61CkBay%2BKcJoyO8LtlZpH32RhuGJmZ%2Facogl%2BINXu2QdoX4fsQUWD1dpobkFFFO1u74SJS4GmWHUjIN1tDX84gRYJNw7x7vnn%2BkvjDw1LTDBjqkAWUzF4761UeHLu9I9YbSJT3OlwKER29Pa3PIcMxdsx0%2FKqMOHtVALj%2FCg%2BZu4ag37t0V9kzPJCjo7GyfaLu24o4iSHlvNoJbVfNex2J%2BYPkCbc%2Bc8F%2FPyAGlsbAkmFZlvhkU3c0uKgyXzqwbA0Vv3eBkH4cnXmothzTnDoxK8vW26ixPO7nq7Q%2FLZMCUOlw5Sz6r0QIqjVBOzTTBnS25mz5nirJY&X-Amz-Signature=541af8d0899ff0e56bd515a2c16061425a79b95df4be59a3a3dfce1054eb7d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOPBAM4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1D5Sa%2BA9J%2FCOPe9lP4gI3cD9989Kadk%2BsVMm0XLI9AIhALAxeMsSaAtFedCLmMWDgWOWcWq%2BeMcg1D9DYM8XYTt4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwynAQHr3BfkzU6dooq3APzvKwEkyrOZQl8MpNdgSGxZsJj9C3SjHdWTOUEamCd59UK4%2F%2FCKRW9NnIfKtHQ50Texs%2FWednYBk1Vf%2BkruZlKuiql2H66a4aX3WEi12eaI52KglPnp1dBUkGjJ0jGUiPFBpq4ik8Ygljo2J5Jr26WIBaTgJk7%2Bp%2BzDYwAagvUNMYrFMoSxI8e0X1IQ6eubwPynnuN6OZpsJIgezX7tjYZWcd8ygUpHUb8nBPQvw7gye3cSyloG5epkVIQHsj%2FKIvJ8Ncx3SWQd%2FmrgIsMRAwrGJDtUDGdZoHo4oPEFwrJXPl3bCV5gnrRPKQY4NeEAOUWMn4Dn4DnFW5hrTNPq2SG8qlofYpN6LYm09218duJE1f0Yu%2FcgEmqg19%2Br1eUEAOyiIJlQFyGxGHc%2Bp%2Frt44jGe4uT5rK9vNz5qchod4p0D86wcH9bdo%2FxT3QqQvYzkTO1NE1tHfOYEFHHMy5M8elBJqBrohX7a896aPoIjwvppt791cYS0iYYfLEnF%2FyjqkF5UnqW1c6GIXIjjME7c1sz61CkBay%2BKcJoyO8LtlZpH32RhuGJmZ%2Facogl%2BINXu2QdoX4fsQUWD1dpobkFFFO1u74SJS4GmWHUjIN1tDX84gRYJNw7x7vnn%2BkvjDw1LTDBjqkAWUzF4761UeHLu9I9YbSJT3OlwKER29Pa3PIcMxdsx0%2FKqMOHtVALj%2FCg%2BZu4ag37t0V9kzPJCjo7GyfaLu24o4iSHlvNoJbVfNex2J%2BYPkCbc%2Bc8F%2FPyAGlsbAkmFZlvhkU3c0uKgyXzqwbA0Vv3eBkH4cnXmothzTnDoxK8vW26ixPO7nq7Q%2FLZMCUOlw5Sz6r0QIqjVBOzTTBnS25mz5nirJY&X-Amz-Signature=69be357ca787e7b69b2828b46d51e182d9a33dbd06e8d3c5e9765e02de2322cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOPBAM4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1D5Sa%2BA9J%2FCOPe9lP4gI3cD9989Kadk%2BsVMm0XLI9AIhALAxeMsSaAtFedCLmMWDgWOWcWq%2BeMcg1D9DYM8XYTt4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwynAQHr3BfkzU6dooq3APzvKwEkyrOZQl8MpNdgSGxZsJj9C3SjHdWTOUEamCd59UK4%2F%2FCKRW9NnIfKtHQ50Texs%2FWednYBk1Vf%2BkruZlKuiql2H66a4aX3WEi12eaI52KglPnp1dBUkGjJ0jGUiPFBpq4ik8Ygljo2J5Jr26WIBaTgJk7%2Bp%2BzDYwAagvUNMYrFMoSxI8e0X1IQ6eubwPynnuN6OZpsJIgezX7tjYZWcd8ygUpHUb8nBPQvw7gye3cSyloG5epkVIQHsj%2FKIvJ8Ncx3SWQd%2FmrgIsMRAwrGJDtUDGdZoHo4oPEFwrJXPl3bCV5gnrRPKQY4NeEAOUWMn4Dn4DnFW5hrTNPq2SG8qlofYpN6LYm09218duJE1f0Yu%2FcgEmqg19%2Br1eUEAOyiIJlQFyGxGHc%2Bp%2Frt44jGe4uT5rK9vNz5qchod4p0D86wcH9bdo%2FxT3QqQvYzkTO1NE1tHfOYEFHHMy5M8elBJqBrohX7a896aPoIjwvppt791cYS0iYYfLEnF%2FyjqkF5UnqW1c6GIXIjjME7c1sz61CkBay%2BKcJoyO8LtlZpH32RhuGJmZ%2Facogl%2BINXu2QdoX4fsQUWD1dpobkFFFO1u74SJS4GmWHUjIN1tDX84gRYJNw7x7vnn%2BkvjDw1LTDBjqkAWUzF4761UeHLu9I9YbSJT3OlwKER29Pa3PIcMxdsx0%2FKqMOHtVALj%2FCg%2BZu4ag37t0V9kzPJCjo7GyfaLu24o4iSHlvNoJbVfNex2J%2BYPkCbc%2Bc8F%2FPyAGlsbAkmFZlvhkU3c0uKgyXzqwbA0Vv3eBkH4cnXmothzTnDoxK8vW26ixPO7nq7Q%2FLZMCUOlw5Sz6r0QIqjVBOzTTBnS25mz5nirJY&X-Amz-Signature=eae89eca77d81669ffe0e28e1d70e2fd2ba4b235aeb2bbab2a60704e57ebf13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOPBAM4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo1D5Sa%2BA9J%2FCOPe9lP4gI3cD9989Kadk%2BsVMm0XLI9AIhALAxeMsSaAtFedCLmMWDgWOWcWq%2BeMcg1D9DYM8XYTt4KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwynAQHr3BfkzU6dooq3APzvKwEkyrOZQl8MpNdgSGxZsJj9C3SjHdWTOUEamCd59UK4%2F%2FCKRW9NnIfKtHQ50Texs%2FWednYBk1Vf%2BkruZlKuiql2H66a4aX3WEi12eaI52KglPnp1dBUkGjJ0jGUiPFBpq4ik8Ygljo2J5Jr26WIBaTgJk7%2Bp%2BzDYwAagvUNMYrFMoSxI8e0X1IQ6eubwPynnuN6OZpsJIgezX7tjYZWcd8ygUpHUb8nBPQvw7gye3cSyloG5epkVIQHsj%2FKIvJ8Ncx3SWQd%2FmrgIsMRAwrGJDtUDGdZoHo4oPEFwrJXPl3bCV5gnrRPKQY4NeEAOUWMn4Dn4DnFW5hrTNPq2SG8qlofYpN6LYm09218duJE1f0Yu%2FcgEmqg19%2Br1eUEAOyiIJlQFyGxGHc%2Bp%2Frt44jGe4uT5rK9vNz5qchod4p0D86wcH9bdo%2FxT3QqQvYzkTO1NE1tHfOYEFHHMy5M8elBJqBrohX7a896aPoIjwvppt791cYS0iYYfLEnF%2FyjqkF5UnqW1c6GIXIjjME7c1sz61CkBay%2BKcJoyO8LtlZpH32RhuGJmZ%2Facogl%2BINXu2QdoX4fsQUWD1dpobkFFFO1u74SJS4GmWHUjIN1tDX84gRYJNw7x7vnn%2BkvjDw1LTDBjqkAWUzF4761UeHLu9I9YbSJT3OlwKER29Pa3PIcMxdsx0%2FKqMOHtVALj%2FCg%2BZu4ag37t0V9kzPJCjo7GyfaLu24o4iSHlvNoJbVfNex2J%2BYPkCbc%2Bc8F%2FPyAGlsbAkmFZlvhkU3c0uKgyXzqwbA0Vv3eBkH4cnXmothzTnDoxK8vW26ixPO7nq7Q%2FLZMCUOlw5Sz6r0QIqjVBOzTTBnS25mz5nirJY&X-Amz-Signature=bfb76a18d6bcd8f3441d88e3febee9678c270ce039cb42a26a54ef60ce66c32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
