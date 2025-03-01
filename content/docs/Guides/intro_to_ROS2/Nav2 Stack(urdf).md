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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLT4F2I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDi9vtVaApetQrZwzqlqzuj1oKqoIZfclSZCMwK%2BgzO%2BgIhAJ%2B%2FefbXLbS%2Fjv2OZj0ljgfCUt3jb%2FjzO7bkGKYH8AArKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFPJEA0%2BRGEgOL%2F0Eq3AMdGToLQFwZLKUwiWxmBD1jNE6rSH5Ox4kUDR%2FokAmcgUkmNQbl7xvAvDo%2B5Ux76%2Ftz11VElFHlt8Mh5SRW6z82T6O8axR5qAnVoTzNz9JuegQj8dnKA2YZeVOpRVQ3xepd4xHLpiYLKWcfu9Pt4BQQ3euU2rE6GshMyocGYjxsD19PseBBjFUU9scwgbcSJmaPsJFrhgoeM3cUkXIVh4Fj%2Bjalq%2BkHMWxxcVRIDXfnZFuuuoW4vKdSnGONGcwaIi8vhgnHVepwtWRmn04VeO28CkP%2FG8RL4bd0N89iyCuJZELRBoXGJQpKTvmi3o6SkbqCEv2m9YM%2FYNorczQaYK%2F92dJgxBq31n346Q2cMZ15zOYFjVOaRdst3h9A6YrPnX%2BwCTWjEF8IGE9SiSLun%2BGW7BGb3y8inD7Pcl9ePHtGv7sjT%2BecVUCbPo%2FY3skmGubx6tUGkcRT9Nf1celpKnUZxL0DGZGiGXp1m1MvI9mlODNBf80wEdqJXwSVY6fjOijfY9rbpabgq9dIgZ15%2B4ZGFhfdudsucegx%2BxLrDhguFfJexcsRoGb7%2BWgtNkNxPL0Rd1Z0gEVyMjGhL1jvwpud0XmgeEbJjkVLOWULm%2ByAKPr%2FSRHltewVd%2FtygzDHx42%2BBjqkAdI7rIGWIQhQ2Xjm65qp0%2FYqVpd7io8k2AA%2B4mNX3iKyAJmLhn2qXhxmUxBFyFyHGqrEvpxajQ1gb0pxwprsDGC117h4sLOHuzZzUTY2FNM3b0xHd%2F8fkrTqDaoqWZJaZH84P6Ehf%2FU584CkV0whAm%2B%2B2Tof8jnUcC%2BhcQ6eqCrrPWgInXd68NAQnJFMlgqvFVd%2BY8kGFWs7jyQy%2BnUsW%2B2SAnP2&X-Amz-Signature=0e487b842c57a7853516e19ec028b833c50df7b713bacb1e04cd0305b7dea75e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLT4F2I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDi9vtVaApetQrZwzqlqzuj1oKqoIZfclSZCMwK%2BgzO%2BgIhAJ%2B%2FefbXLbS%2Fjv2OZj0ljgfCUt3jb%2FjzO7bkGKYH8AArKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFPJEA0%2BRGEgOL%2F0Eq3AMdGToLQFwZLKUwiWxmBD1jNE6rSH5Ox4kUDR%2FokAmcgUkmNQbl7xvAvDo%2B5Ux76%2Ftz11VElFHlt8Mh5SRW6z82T6O8axR5qAnVoTzNz9JuegQj8dnKA2YZeVOpRVQ3xepd4xHLpiYLKWcfu9Pt4BQQ3euU2rE6GshMyocGYjxsD19PseBBjFUU9scwgbcSJmaPsJFrhgoeM3cUkXIVh4Fj%2Bjalq%2BkHMWxxcVRIDXfnZFuuuoW4vKdSnGONGcwaIi8vhgnHVepwtWRmn04VeO28CkP%2FG8RL4bd0N89iyCuJZELRBoXGJQpKTvmi3o6SkbqCEv2m9YM%2FYNorczQaYK%2F92dJgxBq31n346Q2cMZ15zOYFjVOaRdst3h9A6YrPnX%2BwCTWjEF8IGE9SiSLun%2BGW7BGb3y8inD7Pcl9ePHtGv7sjT%2BecVUCbPo%2FY3skmGubx6tUGkcRT9Nf1celpKnUZxL0DGZGiGXp1m1MvI9mlODNBf80wEdqJXwSVY6fjOijfY9rbpabgq9dIgZ15%2B4ZGFhfdudsucegx%2BxLrDhguFfJexcsRoGb7%2BWgtNkNxPL0Rd1Z0gEVyMjGhL1jvwpud0XmgeEbJjkVLOWULm%2ByAKPr%2FSRHltewVd%2FtygzDHx42%2BBjqkAdI7rIGWIQhQ2Xjm65qp0%2FYqVpd7io8k2AA%2B4mNX3iKyAJmLhn2qXhxmUxBFyFyHGqrEvpxajQ1gb0pxwprsDGC117h4sLOHuzZzUTY2FNM3b0xHd%2F8fkrTqDaoqWZJaZH84P6Ehf%2FU584CkV0whAm%2B%2B2Tof8jnUcC%2BhcQ6eqCrrPWgInXd68NAQnJFMlgqvFVd%2BY8kGFWs7jyQy%2BnUsW%2B2SAnP2&X-Amz-Signature=b77577636793aacc53b146a1d5f928447bdccfbdaf1752b8ed9e0a170b3baeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLT4F2I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDi9vtVaApetQrZwzqlqzuj1oKqoIZfclSZCMwK%2BgzO%2BgIhAJ%2B%2FefbXLbS%2Fjv2OZj0ljgfCUt3jb%2FjzO7bkGKYH8AArKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFPJEA0%2BRGEgOL%2F0Eq3AMdGToLQFwZLKUwiWxmBD1jNE6rSH5Ox4kUDR%2FokAmcgUkmNQbl7xvAvDo%2B5Ux76%2Ftz11VElFHlt8Mh5SRW6z82T6O8axR5qAnVoTzNz9JuegQj8dnKA2YZeVOpRVQ3xepd4xHLpiYLKWcfu9Pt4BQQ3euU2rE6GshMyocGYjxsD19PseBBjFUU9scwgbcSJmaPsJFrhgoeM3cUkXIVh4Fj%2Bjalq%2BkHMWxxcVRIDXfnZFuuuoW4vKdSnGONGcwaIi8vhgnHVepwtWRmn04VeO28CkP%2FG8RL4bd0N89iyCuJZELRBoXGJQpKTvmi3o6SkbqCEv2m9YM%2FYNorczQaYK%2F92dJgxBq31n346Q2cMZ15zOYFjVOaRdst3h9A6YrPnX%2BwCTWjEF8IGE9SiSLun%2BGW7BGb3y8inD7Pcl9ePHtGv7sjT%2BecVUCbPo%2FY3skmGubx6tUGkcRT9Nf1celpKnUZxL0DGZGiGXp1m1MvI9mlODNBf80wEdqJXwSVY6fjOijfY9rbpabgq9dIgZ15%2B4ZGFhfdudsucegx%2BxLrDhguFfJexcsRoGb7%2BWgtNkNxPL0Rd1Z0gEVyMjGhL1jvwpud0XmgeEbJjkVLOWULm%2ByAKPr%2FSRHltewVd%2FtygzDHx42%2BBjqkAdI7rIGWIQhQ2Xjm65qp0%2FYqVpd7io8k2AA%2B4mNX3iKyAJmLhn2qXhxmUxBFyFyHGqrEvpxajQ1gb0pxwprsDGC117h4sLOHuzZzUTY2FNM3b0xHd%2F8fkrTqDaoqWZJaZH84P6Ehf%2FU584CkV0whAm%2B%2B2Tof8jnUcC%2BhcQ6eqCrrPWgInXd68NAQnJFMlgqvFVd%2BY8kGFWs7jyQy%2BnUsW%2B2SAnP2&X-Amz-Signature=47b64e9ccf647403aa732511c55f10fe8850de751ab9f7be25538c2415b117ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLT4F2I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDi9vtVaApetQrZwzqlqzuj1oKqoIZfclSZCMwK%2BgzO%2BgIhAJ%2B%2FefbXLbS%2Fjv2OZj0ljgfCUt3jb%2FjzO7bkGKYH8AArKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFPJEA0%2BRGEgOL%2F0Eq3AMdGToLQFwZLKUwiWxmBD1jNE6rSH5Ox4kUDR%2FokAmcgUkmNQbl7xvAvDo%2B5Ux76%2Ftz11VElFHlt8Mh5SRW6z82T6O8axR5qAnVoTzNz9JuegQj8dnKA2YZeVOpRVQ3xepd4xHLpiYLKWcfu9Pt4BQQ3euU2rE6GshMyocGYjxsD19PseBBjFUU9scwgbcSJmaPsJFrhgoeM3cUkXIVh4Fj%2Bjalq%2BkHMWxxcVRIDXfnZFuuuoW4vKdSnGONGcwaIi8vhgnHVepwtWRmn04VeO28CkP%2FG8RL4bd0N89iyCuJZELRBoXGJQpKTvmi3o6SkbqCEv2m9YM%2FYNorczQaYK%2F92dJgxBq31n346Q2cMZ15zOYFjVOaRdst3h9A6YrPnX%2BwCTWjEF8IGE9SiSLun%2BGW7BGb3y8inD7Pcl9ePHtGv7sjT%2BecVUCbPo%2FY3skmGubx6tUGkcRT9Nf1celpKnUZxL0DGZGiGXp1m1MvI9mlODNBf80wEdqJXwSVY6fjOijfY9rbpabgq9dIgZ15%2B4ZGFhfdudsucegx%2BxLrDhguFfJexcsRoGb7%2BWgtNkNxPL0Rd1Z0gEVyMjGhL1jvwpud0XmgeEbJjkVLOWULm%2ByAKPr%2FSRHltewVd%2FtygzDHx42%2BBjqkAdI7rIGWIQhQ2Xjm65qp0%2FYqVpd7io8k2AA%2B4mNX3iKyAJmLhn2qXhxmUxBFyFyHGqrEvpxajQ1gb0pxwprsDGC117h4sLOHuzZzUTY2FNM3b0xHd%2F8fkrTqDaoqWZJaZH84P6Ehf%2FU584CkV0whAm%2B%2B2Tof8jnUcC%2BhcQ6eqCrrPWgInXd68NAQnJFMlgqvFVd%2BY8kGFWs7jyQy%2BnUsW%2B2SAnP2&X-Amz-Signature=e2b3182626800cd3d67db3ee2ed9758aa51c2731eab1ed947baf4bae944b5957&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLT4F2I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDi9vtVaApetQrZwzqlqzuj1oKqoIZfclSZCMwK%2BgzO%2BgIhAJ%2B%2FefbXLbS%2Fjv2OZj0ljgfCUt3jb%2FjzO7bkGKYH8AArKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFPJEA0%2BRGEgOL%2F0Eq3AMdGToLQFwZLKUwiWxmBD1jNE6rSH5Ox4kUDR%2FokAmcgUkmNQbl7xvAvDo%2B5Ux76%2Ftz11VElFHlt8Mh5SRW6z82T6O8axR5qAnVoTzNz9JuegQj8dnKA2YZeVOpRVQ3xepd4xHLpiYLKWcfu9Pt4BQQ3euU2rE6GshMyocGYjxsD19PseBBjFUU9scwgbcSJmaPsJFrhgoeM3cUkXIVh4Fj%2Bjalq%2BkHMWxxcVRIDXfnZFuuuoW4vKdSnGONGcwaIi8vhgnHVepwtWRmn04VeO28CkP%2FG8RL4bd0N89iyCuJZELRBoXGJQpKTvmi3o6SkbqCEv2m9YM%2FYNorczQaYK%2F92dJgxBq31n346Q2cMZ15zOYFjVOaRdst3h9A6YrPnX%2BwCTWjEF8IGE9SiSLun%2BGW7BGb3y8inD7Pcl9ePHtGv7sjT%2BecVUCbPo%2FY3skmGubx6tUGkcRT9Nf1celpKnUZxL0DGZGiGXp1m1MvI9mlODNBf80wEdqJXwSVY6fjOijfY9rbpabgq9dIgZ15%2B4ZGFhfdudsucegx%2BxLrDhguFfJexcsRoGb7%2BWgtNkNxPL0Rd1Z0gEVyMjGhL1jvwpud0XmgeEbJjkVLOWULm%2ByAKPr%2FSRHltewVd%2FtygzDHx42%2BBjqkAdI7rIGWIQhQ2Xjm65qp0%2FYqVpd7io8k2AA%2B4mNX3iKyAJmLhn2qXhxmUxBFyFyHGqrEvpxajQ1gb0pxwprsDGC117h4sLOHuzZzUTY2FNM3b0xHd%2F8fkrTqDaoqWZJaZH84P6Ehf%2FU584CkV0whAm%2B%2B2Tof8jnUcC%2BhcQ6eqCrrPWgInXd68NAQnJFMlgqvFVd%2BY8kGFWs7jyQy%2BnUsW%2B2SAnP2&X-Amz-Signature=bf99c415f2c3671332dc1818d8746afdf9284602ebe719c4d3dbca2b91946e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQLT4F2I%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDi9vtVaApetQrZwzqlqzuj1oKqoIZfclSZCMwK%2BgzO%2BgIhAJ%2B%2FefbXLbS%2Fjv2OZj0ljgfCUt3jb%2FjzO7bkGKYH8AArKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFPJEA0%2BRGEgOL%2F0Eq3AMdGToLQFwZLKUwiWxmBD1jNE6rSH5Ox4kUDR%2FokAmcgUkmNQbl7xvAvDo%2B5Ux76%2Ftz11VElFHlt8Mh5SRW6z82T6O8axR5qAnVoTzNz9JuegQj8dnKA2YZeVOpRVQ3xepd4xHLpiYLKWcfu9Pt4BQQ3euU2rE6GshMyocGYjxsD19PseBBjFUU9scwgbcSJmaPsJFrhgoeM3cUkXIVh4Fj%2Bjalq%2BkHMWxxcVRIDXfnZFuuuoW4vKdSnGONGcwaIi8vhgnHVepwtWRmn04VeO28CkP%2FG8RL4bd0N89iyCuJZELRBoXGJQpKTvmi3o6SkbqCEv2m9YM%2FYNorczQaYK%2F92dJgxBq31n346Q2cMZ15zOYFjVOaRdst3h9A6YrPnX%2BwCTWjEF8IGE9SiSLun%2BGW7BGb3y8inD7Pcl9ePHtGv7sjT%2BecVUCbPo%2FY3skmGubx6tUGkcRT9Nf1celpKnUZxL0DGZGiGXp1m1MvI9mlODNBf80wEdqJXwSVY6fjOijfY9rbpabgq9dIgZ15%2B4ZGFhfdudsucegx%2BxLrDhguFfJexcsRoGb7%2BWgtNkNxPL0Rd1Z0gEVyMjGhL1jvwpud0XmgeEbJjkVLOWULm%2ByAKPr%2FSRHltewVd%2FtygzDHx42%2BBjqkAdI7rIGWIQhQ2Xjm65qp0%2FYqVpd7io8k2AA%2B4mNX3iKyAJmLhn2qXhxmUxBFyFyHGqrEvpxajQ1gb0pxwprsDGC117h4sLOHuzZzUTY2FNM3b0xHd%2F8fkrTqDaoqWZJaZH84P6Ehf%2FU584CkV0whAm%2B%2B2Tof8jnUcC%2BhcQ6eqCrrPWgInXd68NAQnJFMlgqvFVd%2BY8kGFWs7jyQy%2BnUsW%2B2SAnP2&X-Amz-Signature=761d7ecbd64e3035188e6c7bcebb4d66a7b8ebad4f54631a839ce8d120e8ab3b&X-Amz-SignedHeaders=host&x-id=GetObject)
