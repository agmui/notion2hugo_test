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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQ466MC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGm%2FvcqmFePe5HjMh3uWqfX5JrX1LnnYNQ1D28eZCTHNAiEAt7D2%2B%2B0A2iVBipiLXznCNSJQGd9phHkkgMTPqQpIlMEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJiElfSa3%2FVzifp2ircA0HsDxGTuoHM3w6xaz0uipbyRxNhqdFaFslnQNW%2FPQOyeyhOBr6yy6t0gH6d4%2FsYy9A4On7lBQjjAHnSsLfLAE4ocMrckIemdyxIyIeL1G%2BieuC%2BqclNuW1hFgaaDOAFjCh%2F%2BA7fmsA0Je6DSTOcEmjW5V4cngIQrBtCqwb8al4l2TmDsr4pXbeDkV%2BwF%2FaovPQKVSRwLeOdEvn7JTIa9DOM4QTDjls4wxfQ8jmlgTPtals1n5QSQA6wwhnr3lCZ%2B2IjODakY247s%2BnrS1TSwwoBpEW8XW5MLXseTM4n%2F09ACbbtDao%2BqFpACY9cp8nkj%2BPG7ryI4%2BoCVQFGQbHQOuNKtAe4MLBgQTtwNfuX2SOd9hj3FAHVfy5NqsVWpPwMknxzlAqQGc1TkI3NfUKXP9%2BS6oD9K40CzptztUqOYSAbtGd3eHhQWjCQ9TaauAlF5AoBXLaMwV6kM9911lc9nUe4VeEhBvD%2BeINpuHziV600uvZx6oGHzcQXMFXPKO21ZQPEWBzTqmensxseNuMQ%2B3NwHGJItuKHOBfMxRuGbSnAJLDUZwecdHC9kQNwQo39z3luHvai9yhyCA%2BmUZKAyGRzdEBtLq94cujcXxUemlg4PxaAhOiqM1aIhub1MJGo4sIGOqUBl2%2Bg1NCBCupA76qraLBjADGAjx342XuXgZ%2BgkC1AW8XhXrSBxdpxzRrqu9RNVnkra4sKccI1%2BQOFsV73uSM%2FwmhNGh2uHk6Z7ao2UTJYHXLXR8Q8jwWdKf7QX1Jw81ULlrfX2O3owgRfB0NcwCpLDMBvjjv0%2FziE0kswWXk7AJpkZD0VGj11x2qjddA3HY8EbTIn4F3%2FYbXApaY6NLMuwQH1XjzO&X-Amz-Signature=8ba196b4334b1105fe6d325adf6cc2d1521fafd9128f0bd17c0d70b08a8e28a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQ466MC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGm%2FvcqmFePe5HjMh3uWqfX5JrX1LnnYNQ1D28eZCTHNAiEAt7D2%2B%2B0A2iVBipiLXznCNSJQGd9phHkkgMTPqQpIlMEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJiElfSa3%2FVzifp2ircA0HsDxGTuoHM3w6xaz0uipbyRxNhqdFaFslnQNW%2FPQOyeyhOBr6yy6t0gH6d4%2FsYy9A4On7lBQjjAHnSsLfLAE4ocMrckIemdyxIyIeL1G%2BieuC%2BqclNuW1hFgaaDOAFjCh%2F%2BA7fmsA0Je6DSTOcEmjW5V4cngIQrBtCqwb8al4l2TmDsr4pXbeDkV%2BwF%2FaovPQKVSRwLeOdEvn7JTIa9DOM4QTDjls4wxfQ8jmlgTPtals1n5QSQA6wwhnr3lCZ%2B2IjODakY247s%2BnrS1TSwwoBpEW8XW5MLXseTM4n%2F09ACbbtDao%2BqFpACY9cp8nkj%2BPG7ryI4%2BoCVQFGQbHQOuNKtAe4MLBgQTtwNfuX2SOd9hj3FAHVfy5NqsVWpPwMknxzlAqQGc1TkI3NfUKXP9%2BS6oD9K40CzptztUqOYSAbtGd3eHhQWjCQ9TaauAlF5AoBXLaMwV6kM9911lc9nUe4VeEhBvD%2BeINpuHziV600uvZx6oGHzcQXMFXPKO21ZQPEWBzTqmensxseNuMQ%2B3NwHGJItuKHOBfMxRuGbSnAJLDUZwecdHC9kQNwQo39z3luHvai9yhyCA%2BmUZKAyGRzdEBtLq94cujcXxUemlg4PxaAhOiqM1aIhub1MJGo4sIGOqUBl2%2Bg1NCBCupA76qraLBjADGAjx342XuXgZ%2BgkC1AW8XhXrSBxdpxzRrqu9RNVnkra4sKccI1%2BQOFsV73uSM%2FwmhNGh2uHk6Z7ao2UTJYHXLXR8Q8jwWdKf7QX1Jw81ULlrfX2O3owgRfB0NcwCpLDMBvjjv0%2FziE0kswWXk7AJpkZD0VGj11x2qjddA3HY8EbTIn4F3%2FYbXApaY6NLMuwQH1XjzO&X-Amz-Signature=124f395fc05be6c781702588023403ae0be305055829440723437969a288457f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQ466MC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGm%2FvcqmFePe5HjMh3uWqfX5JrX1LnnYNQ1D28eZCTHNAiEAt7D2%2B%2B0A2iVBipiLXznCNSJQGd9phHkkgMTPqQpIlMEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJiElfSa3%2FVzifp2ircA0HsDxGTuoHM3w6xaz0uipbyRxNhqdFaFslnQNW%2FPQOyeyhOBr6yy6t0gH6d4%2FsYy9A4On7lBQjjAHnSsLfLAE4ocMrckIemdyxIyIeL1G%2BieuC%2BqclNuW1hFgaaDOAFjCh%2F%2BA7fmsA0Je6DSTOcEmjW5V4cngIQrBtCqwb8al4l2TmDsr4pXbeDkV%2BwF%2FaovPQKVSRwLeOdEvn7JTIa9DOM4QTDjls4wxfQ8jmlgTPtals1n5QSQA6wwhnr3lCZ%2B2IjODakY247s%2BnrS1TSwwoBpEW8XW5MLXseTM4n%2F09ACbbtDao%2BqFpACY9cp8nkj%2BPG7ryI4%2BoCVQFGQbHQOuNKtAe4MLBgQTtwNfuX2SOd9hj3FAHVfy5NqsVWpPwMknxzlAqQGc1TkI3NfUKXP9%2BS6oD9K40CzptztUqOYSAbtGd3eHhQWjCQ9TaauAlF5AoBXLaMwV6kM9911lc9nUe4VeEhBvD%2BeINpuHziV600uvZx6oGHzcQXMFXPKO21ZQPEWBzTqmensxseNuMQ%2B3NwHGJItuKHOBfMxRuGbSnAJLDUZwecdHC9kQNwQo39z3luHvai9yhyCA%2BmUZKAyGRzdEBtLq94cujcXxUemlg4PxaAhOiqM1aIhub1MJGo4sIGOqUBl2%2Bg1NCBCupA76qraLBjADGAjx342XuXgZ%2BgkC1AW8XhXrSBxdpxzRrqu9RNVnkra4sKccI1%2BQOFsV73uSM%2FwmhNGh2uHk6Z7ao2UTJYHXLXR8Q8jwWdKf7QX1Jw81ULlrfX2O3owgRfB0NcwCpLDMBvjjv0%2FziE0kswWXk7AJpkZD0VGj11x2qjddA3HY8EbTIn4F3%2FYbXApaY6NLMuwQH1XjzO&X-Amz-Signature=13f41a81d6153b2760735aecd2466c7fce79b18a8ef1a3eb30e6a9cef236f001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQ466MC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGm%2FvcqmFePe5HjMh3uWqfX5JrX1LnnYNQ1D28eZCTHNAiEAt7D2%2B%2B0A2iVBipiLXznCNSJQGd9phHkkgMTPqQpIlMEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJiElfSa3%2FVzifp2ircA0HsDxGTuoHM3w6xaz0uipbyRxNhqdFaFslnQNW%2FPQOyeyhOBr6yy6t0gH6d4%2FsYy9A4On7lBQjjAHnSsLfLAE4ocMrckIemdyxIyIeL1G%2BieuC%2BqclNuW1hFgaaDOAFjCh%2F%2BA7fmsA0Je6DSTOcEmjW5V4cngIQrBtCqwb8al4l2TmDsr4pXbeDkV%2BwF%2FaovPQKVSRwLeOdEvn7JTIa9DOM4QTDjls4wxfQ8jmlgTPtals1n5QSQA6wwhnr3lCZ%2B2IjODakY247s%2BnrS1TSwwoBpEW8XW5MLXseTM4n%2F09ACbbtDao%2BqFpACY9cp8nkj%2BPG7ryI4%2BoCVQFGQbHQOuNKtAe4MLBgQTtwNfuX2SOd9hj3FAHVfy5NqsVWpPwMknxzlAqQGc1TkI3NfUKXP9%2BS6oD9K40CzptztUqOYSAbtGd3eHhQWjCQ9TaauAlF5AoBXLaMwV6kM9911lc9nUe4VeEhBvD%2BeINpuHziV600uvZx6oGHzcQXMFXPKO21ZQPEWBzTqmensxseNuMQ%2B3NwHGJItuKHOBfMxRuGbSnAJLDUZwecdHC9kQNwQo39z3luHvai9yhyCA%2BmUZKAyGRzdEBtLq94cujcXxUemlg4PxaAhOiqM1aIhub1MJGo4sIGOqUBl2%2Bg1NCBCupA76qraLBjADGAjx342XuXgZ%2BgkC1AW8XhXrSBxdpxzRrqu9RNVnkra4sKccI1%2BQOFsV73uSM%2FwmhNGh2uHk6Z7ao2UTJYHXLXR8Q8jwWdKf7QX1Jw81ULlrfX2O3owgRfB0NcwCpLDMBvjjv0%2FziE0kswWXk7AJpkZD0VGj11x2qjddA3HY8EbTIn4F3%2FYbXApaY6NLMuwQH1XjzO&X-Amz-Signature=ffbfb2d7a0247ec1e4ac1ebcafbed234564ad7e72aa52a932ac9ac21ed5a1036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQ466MC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGm%2FvcqmFePe5HjMh3uWqfX5JrX1LnnYNQ1D28eZCTHNAiEAt7D2%2B%2B0A2iVBipiLXznCNSJQGd9phHkkgMTPqQpIlMEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJiElfSa3%2FVzifp2ircA0HsDxGTuoHM3w6xaz0uipbyRxNhqdFaFslnQNW%2FPQOyeyhOBr6yy6t0gH6d4%2FsYy9A4On7lBQjjAHnSsLfLAE4ocMrckIemdyxIyIeL1G%2BieuC%2BqclNuW1hFgaaDOAFjCh%2F%2BA7fmsA0Je6DSTOcEmjW5V4cngIQrBtCqwb8al4l2TmDsr4pXbeDkV%2BwF%2FaovPQKVSRwLeOdEvn7JTIa9DOM4QTDjls4wxfQ8jmlgTPtals1n5QSQA6wwhnr3lCZ%2B2IjODakY247s%2BnrS1TSwwoBpEW8XW5MLXseTM4n%2F09ACbbtDao%2BqFpACY9cp8nkj%2BPG7ryI4%2BoCVQFGQbHQOuNKtAe4MLBgQTtwNfuX2SOd9hj3FAHVfy5NqsVWpPwMknxzlAqQGc1TkI3NfUKXP9%2BS6oD9K40CzptztUqOYSAbtGd3eHhQWjCQ9TaauAlF5AoBXLaMwV6kM9911lc9nUe4VeEhBvD%2BeINpuHziV600uvZx6oGHzcQXMFXPKO21ZQPEWBzTqmensxseNuMQ%2B3NwHGJItuKHOBfMxRuGbSnAJLDUZwecdHC9kQNwQo39z3luHvai9yhyCA%2BmUZKAyGRzdEBtLq94cujcXxUemlg4PxaAhOiqM1aIhub1MJGo4sIGOqUBl2%2Bg1NCBCupA76qraLBjADGAjx342XuXgZ%2BgkC1AW8XhXrSBxdpxzRrqu9RNVnkra4sKccI1%2BQOFsV73uSM%2FwmhNGh2uHk6Z7ao2UTJYHXLXR8Q8jwWdKf7QX1Jw81ULlrfX2O3owgRfB0NcwCpLDMBvjjv0%2FziE0kswWXk7AJpkZD0VGj11x2qjddA3HY8EbTIn4F3%2FYbXApaY6NLMuwQH1XjzO&X-Amz-Signature=5e5bbc557c4bbd1da47fe213703952d75f50f6094c24ae2135bd2d75ecc73df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYQ466MC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGm%2FvcqmFePe5HjMh3uWqfX5JrX1LnnYNQ1D28eZCTHNAiEAt7D2%2B%2B0A2iVBipiLXznCNSJQGd9phHkkgMTPqQpIlMEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJiElfSa3%2FVzifp2ircA0HsDxGTuoHM3w6xaz0uipbyRxNhqdFaFslnQNW%2FPQOyeyhOBr6yy6t0gH6d4%2FsYy9A4On7lBQjjAHnSsLfLAE4ocMrckIemdyxIyIeL1G%2BieuC%2BqclNuW1hFgaaDOAFjCh%2F%2BA7fmsA0Je6DSTOcEmjW5V4cngIQrBtCqwb8al4l2TmDsr4pXbeDkV%2BwF%2FaovPQKVSRwLeOdEvn7JTIa9DOM4QTDjls4wxfQ8jmlgTPtals1n5QSQA6wwhnr3lCZ%2B2IjODakY247s%2BnrS1TSwwoBpEW8XW5MLXseTM4n%2F09ACbbtDao%2BqFpACY9cp8nkj%2BPG7ryI4%2BoCVQFGQbHQOuNKtAe4MLBgQTtwNfuX2SOd9hj3FAHVfy5NqsVWpPwMknxzlAqQGc1TkI3NfUKXP9%2BS6oD9K40CzptztUqOYSAbtGd3eHhQWjCQ9TaauAlF5AoBXLaMwV6kM9911lc9nUe4VeEhBvD%2BeINpuHziV600uvZx6oGHzcQXMFXPKO21ZQPEWBzTqmensxseNuMQ%2B3NwHGJItuKHOBfMxRuGbSnAJLDUZwecdHC9kQNwQo39z3luHvai9yhyCA%2BmUZKAyGRzdEBtLq94cujcXxUemlg4PxaAhOiqM1aIhub1MJGo4sIGOqUBl2%2Bg1NCBCupA76qraLBjADGAjx342XuXgZ%2BgkC1AW8XhXrSBxdpxzRrqu9RNVnkra4sKccI1%2BQOFsV73uSM%2FwmhNGh2uHk6Z7ao2UTJYHXLXR8Q8jwWdKf7QX1Jw81ULlrfX2O3owgRfB0NcwCpLDMBvjjv0%2FziE0kswWXk7AJpkZD0VGj11x2qjddA3HY8EbTIn4F3%2FYbXApaY6NLMuwQH1XjzO&X-Amz-Signature=abfaae981de91db49c14c6e77e9991ca3d33f267951590719cb195902dd31975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
