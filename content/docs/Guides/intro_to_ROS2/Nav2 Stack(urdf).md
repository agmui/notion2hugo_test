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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=ed09664b1c0bf4d53a5f235faa96d141551301f93ef1dd3646a8ecc6c3079784&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=26fd13fccaa0e07b20327582213c2189fd1f96ce89f211a20fa05fe8b381712d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=d35365441be81c22d6fe6a73e1786edc96335141e08f51485f3024744b5fd20e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=ec34dd6c2d66b894909eff399ced55a87d7397c1a1d15248307263deb1a02cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=93822690b29377ddb125d2922960d9f5f898cd7257b664377286533b473931eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZU2YGR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBgW2O8tXUGB10na1NLKXVtziYc%2B6r%2BVP8fXvQ6wVMAiEAxBgWmE50JMwP%2BjsQktmwCe0hbTvdxIYYzoHzH8FLHlkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIAR5%2FJuaVfrF6%2FpyrcA2GTbjgLocJeDnYFO%2FMsancqXEiTcxsoQm6DmEoE%2BsOVYjrJkQ7%2Bcs8L8TcVEPbHdDv7YrUDKxuheB0daIwVOevCjNcCu31gkDeED7%2FNLwOn%2F2JncJbP%2BS97Rz01yVnYy9pjGe6Eg8KBSqh50W%2FVhoT0tTTF1wceKHNseZ2Mw%2BTJz5rXp8ZrpCdvHvZTcTikoGGpqetyAVQ95FtS9m%2FqHcYBsOY4B20L4CsUi0yx2drqabvTJdeHK9wUPzN2MmE0rSyEApnEt7PRQi78%2B3zskfFQVjroVXB6WtAaZSSW1EHBencYcH2hZvyT%2BqMKbmc3MnRDW%2FC9lVC%2FhLmt8ZdVD3S4nHeam4I6fSQ8TPsGSQzhwzOdRhXgYWO%2F9Q5O5qAsTbH1RAepCnWQ%2FZMwfkM1gEFfWE4x%2B0PhTTW3%2FC1yzrvkdmPwBUhp3AiFVjHMDmWlfA3hsfc%2Blq%2BPG%2FYu70UG0ZCRJr1ATWLeICdSYhizhs9mkyOLT9v%2FrcnVvJTgSznHxqatc63WrzzVThMWwFLxf2OUTLmr6V6mQoz4YxGfDjGu9YxRvs7vErF%2FxJ1UOsoJM3%2FLwiBsK1pie9yLWaya9bCOsBk%2BqqMWWPpG50F98I4ZFs8PpMhg9tceHSnLMIC0n8IGOqUBUnUA7NTB2mIA0JkuGb48XMIV9Bs5DidHQ%2B7RYKxASGIVUfvQPVKL7mjuswARpGH3p7ad2hWu1f%2Br99s8GsmfKzFdNin4CbUu%2BWkef2vPtGCjM170yd%2FWtxQkQNQx2ZwAvuCDzzsVoVO4316uXrrF1wUaxvpZdTVsnf4Y85FZaCXL%2FsCv9gOXA551GM9ay1P%2BDfEuXz%2B37mhl1Mmly0qkxrYEZxiP&X-Amz-Signature=663e7c63781be0476e5345806758febdf31b25084c2f82453fbb71f28b7618a0&X-Amz-SignedHeaders=host&x-id=GetObject)
