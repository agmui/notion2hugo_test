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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXRGSUU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2k6Tuo6Ledhdkp488r1P2a1%2B2%2FtMVWTaQdYK4UrddeAIhAJDphaxfDUx%2FE%2F%2BPBKsxNEr%2FAcFvD%2BgpVbznMG5VItsXKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMbh0afg4XYrj3I28q3AMB%2Bmtu4lLbM5CtkXhWW0BxFa2FL8DZsaXuvtrwdjsOIls%2FdXprRFix7GF44UxV%2BR9y6ZZs70P5HSturzuG1aUzq3Zpemc2H9viD%2FzvNdyba9PpmEXtPj1q4PAnvhP20DASHNx6Z8qhNB0TgLn6Q8giO5hwailTfYKrGCzaZ%2F%2FJJlKdSUobrEyGOfqJzWd1ugFVBpXfdtTvwB3lGzvQh%2FaqZwwlGAYfOpIZJHaNx1fpmZgq7JlJVZHRx0gW9ji7r%2Fe9b4Oc2DB%2BuhuhCjTpLddLRz23SOccvLB5F%2B3%2B1xNE7ghnKleJbKGFH3OohPXa73roTMmueV%2F1FGtE88JNj3JUqmn2uzlhOR36L3iStDjrZp3FAJbIecX3g3pr3%2FLIJaTCxGsNrOYvgbfA%2F37PQO2lqK8fLkF71ZH4Z5zK5AbKreZkE8vY3u2PzfdCYpTKOdp3kZmmHCkVu34%2B3hH50yJ7U9wxiOiwCAMzo521kVJH83Wj8VuVfi%2F7kyyaBdhXW%2BPLCCE8aLAwGd78WWTM3vXZgChHbRC8qz8rgaSbMzooav5SPLP4yY8joBiNwzdE5YaYuG2U7k5uwqLpg7wYalKQ3dj6tumf3CZOKVXyjtb%2B677SWr3qZxFOdn6KvDDlvdu%2BBjqkAfJyacDBtuGALei7B8ULWKkTOqW6EOfqLDMMuttXJ0S7XLL%2Bq380NTewH23c610KMieaVIv%2B%2FqAoYZYXnVVb%2BB5s4OLiecnPJ8u5d1hpWByznu5UsU0uyxlsYjb7U5YaA3PhcABVeRSe%2Bfqi%2FBSZVgGa4Vx0uv%2FWvjdIhLs1GZS%2FwT8FYK75X0Rr29M1ByjQ1rZ58J4moqDeQBx%2BFWrtBD%2FowvRj&X-Amz-Signature=a310a7a210cb7950d4d7e684300b058b205c7a248d8f6203799adee56961c78f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXRGSUU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2k6Tuo6Ledhdkp488r1P2a1%2B2%2FtMVWTaQdYK4UrddeAIhAJDphaxfDUx%2FE%2F%2BPBKsxNEr%2FAcFvD%2BgpVbznMG5VItsXKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMbh0afg4XYrj3I28q3AMB%2Bmtu4lLbM5CtkXhWW0BxFa2FL8DZsaXuvtrwdjsOIls%2FdXprRFix7GF44UxV%2BR9y6ZZs70P5HSturzuG1aUzq3Zpemc2H9viD%2FzvNdyba9PpmEXtPj1q4PAnvhP20DASHNx6Z8qhNB0TgLn6Q8giO5hwailTfYKrGCzaZ%2F%2FJJlKdSUobrEyGOfqJzWd1ugFVBpXfdtTvwB3lGzvQh%2FaqZwwlGAYfOpIZJHaNx1fpmZgq7JlJVZHRx0gW9ji7r%2Fe9b4Oc2DB%2BuhuhCjTpLddLRz23SOccvLB5F%2B3%2B1xNE7ghnKleJbKGFH3OohPXa73roTMmueV%2F1FGtE88JNj3JUqmn2uzlhOR36L3iStDjrZp3FAJbIecX3g3pr3%2FLIJaTCxGsNrOYvgbfA%2F37PQO2lqK8fLkF71ZH4Z5zK5AbKreZkE8vY3u2PzfdCYpTKOdp3kZmmHCkVu34%2B3hH50yJ7U9wxiOiwCAMzo521kVJH83Wj8VuVfi%2F7kyyaBdhXW%2BPLCCE8aLAwGd78WWTM3vXZgChHbRC8qz8rgaSbMzooav5SPLP4yY8joBiNwzdE5YaYuG2U7k5uwqLpg7wYalKQ3dj6tumf3CZOKVXyjtb%2B677SWr3qZxFOdn6KvDDlvdu%2BBjqkAfJyacDBtuGALei7B8ULWKkTOqW6EOfqLDMMuttXJ0S7XLL%2Bq380NTewH23c610KMieaVIv%2B%2FqAoYZYXnVVb%2BB5s4OLiecnPJ8u5d1hpWByznu5UsU0uyxlsYjb7U5YaA3PhcABVeRSe%2Bfqi%2FBSZVgGa4Vx0uv%2FWvjdIhLs1GZS%2FwT8FYK75X0Rr29M1ByjQ1rZ58J4moqDeQBx%2BFWrtBD%2FowvRj&X-Amz-Signature=ac8bb4b9f2a7d77293abd53ba9fb1e1b7796dff018554e3c80da89f6c21a7bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXRGSUU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2k6Tuo6Ledhdkp488r1P2a1%2B2%2FtMVWTaQdYK4UrddeAIhAJDphaxfDUx%2FE%2F%2BPBKsxNEr%2FAcFvD%2BgpVbznMG5VItsXKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMbh0afg4XYrj3I28q3AMB%2Bmtu4lLbM5CtkXhWW0BxFa2FL8DZsaXuvtrwdjsOIls%2FdXprRFix7GF44UxV%2BR9y6ZZs70P5HSturzuG1aUzq3Zpemc2H9viD%2FzvNdyba9PpmEXtPj1q4PAnvhP20DASHNx6Z8qhNB0TgLn6Q8giO5hwailTfYKrGCzaZ%2F%2FJJlKdSUobrEyGOfqJzWd1ugFVBpXfdtTvwB3lGzvQh%2FaqZwwlGAYfOpIZJHaNx1fpmZgq7JlJVZHRx0gW9ji7r%2Fe9b4Oc2DB%2BuhuhCjTpLddLRz23SOccvLB5F%2B3%2B1xNE7ghnKleJbKGFH3OohPXa73roTMmueV%2F1FGtE88JNj3JUqmn2uzlhOR36L3iStDjrZp3FAJbIecX3g3pr3%2FLIJaTCxGsNrOYvgbfA%2F37PQO2lqK8fLkF71ZH4Z5zK5AbKreZkE8vY3u2PzfdCYpTKOdp3kZmmHCkVu34%2B3hH50yJ7U9wxiOiwCAMzo521kVJH83Wj8VuVfi%2F7kyyaBdhXW%2BPLCCE8aLAwGd78WWTM3vXZgChHbRC8qz8rgaSbMzooav5SPLP4yY8joBiNwzdE5YaYuG2U7k5uwqLpg7wYalKQ3dj6tumf3CZOKVXyjtb%2B677SWr3qZxFOdn6KvDDlvdu%2BBjqkAfJyacDBtuGALei7B8ULWKkTOqW6EOfqLDMMuttXJ0S7XLL%2Bq380NTewH23c610KMieaVIv%2B%2FqAoYZYXnVVb%2BB5s4OLiecnPJ8u5d1hpWByznu5UsU0uyxlsYjb7U5YaA3PhcABVeRSe%2Bfqi%2FBSZVgGa4Vx0uv%2FWvjdIhLs1GZS%2FwT8FYK75X0Rr29M1ByjQ1rZ58J4moqDeQBx%2BFWrtBD%2FowvRj&X-Amz-Signature=b0dcf856f89de9b6e5d6e644b857fd5776322fdf46816ab664dcc420a364153f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXRGSUU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2k6Tuo6Ledhdkp488r1P2a1%2B2%2FtMVWTaQdYK4UrddeAIhAJDphaxfDUx%2FE%2F%2BPBKsxNEr%2FAcFvD%2BgpVbznMG5VItsXKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMbh0afg4XYrj3I28q3AMB%2Bmtu4lLbM5CtkXhWW0BxFa2FL8DZsaXuvtrwdjsOIls%2FdXprRFix7GF44UxV%2BR9y6ZZs70P5HSturzuG1aUzq3Zpemc2H9viD%2FzvNdyba9PpmEXtPj1q4PAnvhP20DASHNx6Z8qhNB0TgLn6Q8giO5hwailTfYKrGCzaZ%2F%2FJJlKdSUobrEyGOfqJzWd1ugFVBpXfdtTvwB3lGzvQh%2FaqZwwlGAYfOpIZJHaNx1fpmZgq7JlJVZHRx0gW9ji7r%2Fe9b4Oc2DB%2BuhuhCjTpLddLRz23SOccvLB5F%2B3%2B1xNE7ghnKleJbKGFH3OohPXa73roTMmueV%2F1FGtE88JNj3JUqmn2uzlhOR36L3iStDjrZp3FAJbIecX3g3pr3%2FLIJaTCxGsNrOYvgbfA%2F37PQO2lqK8fLkF71ZH4Z5zK5AbKreZkE8vY3u2PzfdCYpTKOdp3kZmmHCkVu34%2B3hH50yJ7U9wxiOiwCAMzo521kVJH83Wj8VuVfi%2F7kyyaBdhXW%2BPLCCE8aLAwGd78WWTM3vXZgChHbRC8qz8rgaSbMzooav5SPLP4yY8joBiNwzdE5YaYuG2U7k5uwqLpg7wYalKQ3dj6tumf3CZOKVXyjtb%2B677SWr3qZxFOdn6KvDDlvdu%2BBjqkAfJyacDBtuGALei7B8ULWKkTOqW6EOfqLDMMuttXJ0S7XLL%2Bq380NTewH23c610KMieaVIv%2B%2FqAoYZYXnVVb%2BB5s4OLiecnPJ8u5d1hpWByznu5UsU0uyxlsYjb7U5YaA3PhcABVeRSe%2Bfqi%2FBSZVgGa4Vx0uv%2FWvjdIhLs1GZS%2FwT8FYK75X0Rr29M1ByjQ1rZ58J4moqDeQBx%2BFWrtBD%2FowvRj&X-Amz-Signature=b08f806db8da7ba318dbb2c7d965f4ac1614e318a865c452ac9f4f78ce5f2a27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXRGSUU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2k6Tuo6Ledhdkp488r1P2a1%2B2%2FtMVWTaQdYK4UrddeAIhAJDphaxfDUx%2FE%2F%2BPBKsxNEr%2FAcFvD%2BgpVbznMG5VItsXKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMbh0afg4XYrj3I28q3AMB%2Bmtu4lLbM5CtkXhWW0BxFa2FL8DZsaXuvtrwdjsOIls%2FdXprRFix7GF44UxV%2BR9y6ZZs70P5HSturzuG1aUzq3Zpemc2H9viD%2FzvNdyba9PpmEXtPj1q4PAnvhP20DASHNx6Z8qhNB0TgLn6Q8giO5hwailTfYKrGCzaZ%2F%2FJJlKdSUobrEyGOfqJzWd1ugFVBpXfdtTvwB3lGzvQh%2FaqZwwlGAYfOpIZJHaNx1fpmZgq7JlJVZHRx0gW9ji7r%2Fe9b4Oc2DB%2BuhuhCjTpLddLRz23SOccvLB5F%2B3%2B1xNE7ghnKleJbKGFH3OohPXa73roTMmueV%2F1FGtE88JNj3JUqmn2uzlhOR36L3iStDjrZp3FAJbIecX3g3pr3%2FLIJaTCxGsNrOYvgbfA%2F37PQO2lqK8fLkF71ZH4Z5zK5AbKreZkE8vY3u2PzfdCYpTKOdp3kZmmHCkVu34%2B3hH50yJ7U9wxiOiwCAMzo521kVJH83Wj8VuVfi%2F7kyyaBdhXW%2BPLCCE8aLAwGd78WWTM3vXZgChHbRC8qz8rgaSbMzooav5SPLP4yY8joBiNwzdE5YaYuG2U7k5uwqLpg7wYalKQ3dj6tumf3CZOKVXyjtb%2B677SWr3qZxFOdn6KvDDlvdu%2BBjqkAfJyacDBtuGALei7B8ULWKkTOqW6EOfqLDMMuttXJ0S7XLL%2Bq380NTewH23c610KMieaVIv%2B%2FqAoYZYXnVVb%2BB5s4OLiecnPJ8u5d1hpWByznu5UsU0uyxlsYjb7U5YaA3PhcABVeRSe%2Bfqi%2FBSZVgGa4Vx0uv%2FWvjdIhLs1GZS%2FwT8FYK75X0Rr29M1ByjQ1rZ58J4moqDeQBx%2BFWrtBD%2FowvRj&X-Amz-Signature=fc73617336f9daa8fe863a33b203964dfd70b64de5c1f10a5ec5cd5b3029306b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXRGSUU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2k6Tuo6Ledhdkp488r1P2a1%2B2%2FtMVWTaQdYK4UrddeAIhAJDphaxfDUx%2FE%2F%2BPBKsxNEr%2FAcFvD%2BgpVbznMG5VItsXKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMbh0afg4XYrj3I28q3AMB%2Bmtu4lLbM5CtkXhWW0BxFa2FL8DZsaXuvtrwdjsOIls%2FdXprRFix7GF44UxV%2BR9y6ZZs70P5HSturzuG1aUzq3Zpemc2H9viD%2FzvNdyba9PpmEXtPj1q4PAnvhP20DASHNx6Z8qhNB0TgLn6Q8giO5hwailTfYKrGCzaZ%2F%2FJJlKdSUobrEyGOfqJzWd1ugFVBpXfdtTvwB3lGzvQh%2FaqZwwlGAYfOpIZJHaNx1fpmZgq7JlJVZHRx0gW9ji7r%2Fe9b4Oc2DB%2BuhuhCjTpLddLRz23SOccvLB5F%2B3%2B1xNE7ghnKleJbKGFH3OohPXa73roTMmueV%2F1FGtE88JNj3JUqmn2uzlhOR36L3iStDjrZp3FAJbIecX3g3pr3%2FLIJaTCxGsNrOYvgbfA%2F37PQO2lqK8fLkF71ZH4Z5zK5AbKreZkE8vY3u2PzfdCYpTKOdp3kZmmHCkVu34%2B3hH50yJ7U9wxiOiwCAMzo521kVJH83Wj8VuVfi%2F7kyyaBdhXW%2BPLCCE8aLAwGd78WWTM3vXZgChHbRC8qz8rgaSbMzooav5SPLP4yY8joBiNwzdE5YaYuG2U7k5uwqLpg7wYalKQ3dj6tumf3CZOKVXyjtb%2B677SWr3qZxFOdn6KvDDlvdu%2BBjqkAfJyacDBtuGALei7B8ULWKkTOqW6EOfqLDMMuttXJ0S7XLL%2Bq380NTewH23c610KMieaVIv%2B%2FqAoYZYXnVVb%2BB5s4OLiecnPJ8u5d1hpWByznu5UsU0uyxlsYjb7U5YaA3PhcABVeRSe%2Bfqi%2FBSZVgGa4Vx0uv%2FWvjdIhLs1GZS%2FwT8FYK75X0Rr29M1ByjQ1rZ58J4moqDeQBx%2BFWrtBD%2FowvRj&X-Amz-Signature=bd28d1299d2cad02b6ae6914958f2a7ad14beaef0cc79a62504813e4ed0eb37d&X-Amz-SignedHeaders=host&x-id=GetObject)
