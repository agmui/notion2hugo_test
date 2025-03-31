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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGUTBXA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBkEz6nFMWoOkFRC1vIlSdMvDY8nuqKDbeTR4wCm%2BT5WAiBIYmTHtuiOTeN%2B7bVOiO5glp%2BupMjikdgPApe1ejRkoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyUCAGgIKzCrekIqBKtwDRqmY%2FGoICg5fR9V2peK%2F%2BQym9x7dvJ6Ea70Mf4kUbK1Z0%2FPOgfdC9QUNJdg%2B5rqpSPOY51vs4lPE74w2Pkibu%2Ff9FGym4MWF6pfSqxpl4eirKPewPKrKOEAHZxMIalR9bcWnVBfAN59xDljgCxc8%2B5kHdJOPV2NFqKS87r%2Bk5%2FWVcqXwGu%2FSPI%2FkHGP6ekXUNK3BEc4icqHO5%2FZ8vbgoBIQn0x1ELJc4BnvPQTMbmxaAKtGOXXCAyqqCFeB8cO7%2BqnFRFVc7Mdmwxj2U4yzw11vUCiQsQHCWy0jshK339Nj%2Bbioz80UkC7atYoJaEYI%2BsEOtEXS2TfBf3bdh1iHQ%2BsCF9oYZGAeApcfLXK2yFHnYqisqrTyw08%2FvfxNcrHtgvG%2FxiU76aOWm3yzkzDADerpT1evrVThN0ccmUr0VCjj2uZHMaRU6fHbW5Y8UQWwlQ9z3ZIUoIn%2FM%2B%2FLzRc%2B19o0leMNInTlEV0klQOG8OyAj3GPgC0Hd0K51OpGLNAu4XW38YyIkMc81q19qTs4vOyv2d2sxhS7KZkEKGdn88%2FRsG5CkR54XVfos9NZroUNVZPA2Ko8aqwxIX2q9t96UKURmLbUr1XsMK1NTiCENXjMOJsYo4XqpanP6LEEw44iqvwY6pgHnNMXQFxRPgVsP3owMetwuEICXxkwBZxs%2FCmozSYdEreAN2QtrC9zOqaesuAad0m7gbwlbnCsrSGi4c7h0CEhixNkxbR16nsYh%2BWdF676RU6%2Fq3ZY7Pq17HtgTVUaDqAjrIfrJFIG4PBudOgxjp0vqWhTmZ%2Fqb4ROpcuFcTHsiLq9po1ugTyym%2Bx0dA3kjeaGdep4XLPkpyzcb1HwO23Ai69jIiweb&X-Amz-Signature=a50ac06f37e554afe07454bf92667e1ffc336f55814cc6baf9568d6cec43caf2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGUTBXA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBkEz6nFMWoOkFRC1vIlSdMvDY8nuqKDbeTR4wCm%2BT5WAiBIYmTHtuiOTeN%2B7bVOiO5glp%2BupMjikdgPApe1ejRkoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyUCAGgIKzCrekIqBKtwDRqmY%2FGoICg5fR9V2peK%2F%2BQym9x7dvJ6Ea70Mf4kUbK1Z0%2FPOgfdC9QUNJdg%2B5rqpSPOY51vs4lPE74w2Pkibu%2Ff9FGym4MWF6pfSqxpl4eirKPewPKrKOEAHZxMIalR9bcWnVBfAN59xDljgCxc8%2B5kHdJOPV2NFqKS87r%2Bk5%2FWVcqXwGu%2FSPI%2FkHGP6ekXUNK3BEc4icqHO5%2FZ8vbgoBIQn0x1ELJc4BnvPQTMbmxaAKtGOXXCAyqqCFeB8cO7%2BqnFRFVc7Mdmwxj2U4yzw11vUCiQsQHCWy0jshK339Nj%2Bbioz80UkC7atYoJaEYI%2BsEOtEXS2TfBf3bdh1iHQ%2BsCF9oYZGAeApcfLXK2yFHnYqisqrTyw08%2FvfxNcrHtgvG%2FxiU76aOWm3yzkzDADerpT1evrVThN0ccmUr0VCjj2uZHMaRU6fHbW5Y8UQWwlQ9z3ZIUoIn%2FM%2B%2FLzRc%2B19o0leMNInTlEV0klQOG8OyAj3GPgC0Hd0K51OpGLNAu4XW38YyIkMc81q19qTs4vOyv2d2sxhS7KZkEKGdn88%2FRsG5CkR54XVfos9NZroUNVZPA2Ko8aqwxIX2q9t96UKURmLbUr1XsMK1NTiCENXjMOJsYo4XqpanP6LEEw44iqvwY6pgHnNMXQFxRPgVsP3owMetwuEICXxkwBZxs%2FCmozSYdEreAN2QtrC9zOqaesuAad0m7gbwlbnCsrSGi4c7h0CEhixNkxbR16nsYh%2BWdF676RU6%2Fq3ZY7Pq17HtgTVUaDqAjrIfrJFIG4PBudOgxjp0vqWhTmZ%2Fqb4ROpcuFcTHsiLq9po1ugTyym%2Bx0dA3kjeaGdep4XLPkpyzcb1HwO23Ai69jIiweb&X-Amz-Signature=58bb7ad7c2676322f5e9486678b05a43c0fd9d5819cbd0837c782694724bbfc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGUTBXA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBkEz6nFMWoOkFRC1vIlSdMvDY8nuqKDbeTR4wCm%2BT5WAiBIYmTHtuiOTeN%2B7bVOiO5glp%2BupMjikdgPApe1ejRkoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyUCAGgIKzCrekIqBKtwDRqmY%2FGoICg5fR9V2peK%2F%2BQym9x7dvJ6Ea70Mf4kUbK1Z0%2FPOgfdC9QUNJdg%2B5rqpSPOY51vs4lPE74w2Pkibu%2Ff9FGym4MWF6pfSqxpl4eirKPewPKrKOEAHZxMIalR9bcWnVBfAN59xDljgCxc8%2B5kHdJOPV2NFqKS87r%2Bk5%2FWVcqXwGu%2FSPI%2FkHGP6ekXUNK3BEc4icqHO5%2FZ8vbgoBIQn0x1ELJc4BnvPQTMbmxaAKtGOXXCAyqqCFeB8cO7%2BqnFRFVc7Mdmwxj2U4yzw11vUCiQsQHCWy0jshK339Nj%2Bbioz80UkC7atYoJaEYI%2BsEOtEXS2TfBf3bdh1iHQ%2BsCF9oYZGAeApcfLXK2yFHnYqisqrTyw08%2FvfxNcrHtgvG%2FxiU76aOWm3yzkzDADerpT1evrVThN0ccmUr0VCjj2uZHMaRU6fHbW5Y8UQWwlQ9z3ZIUoIn%2FM%2B%2FLzRc%2B19o0leMNInTlEV0klQOG8OyAj3GPgC0Hd0K51OpGLNAu4XW38YyIkMc81q19qTs4vOyv2d2sxhS7KZkEKGdn88%2FRsG5CkR54XVfos9NZroUNVZPA2Ko8aqwxIX2q9t96UKURmLbUr1XsMK1NTiCENXjMOJsYo4XqpanP6LEEw44iqvwY6pgHnNMXQFxRPgVsP3owMetwuEICXxkwBZxs%2FCmozSYdEreAN2QtrC9zOqaesuAad0m7gbwlbnCsrSGi4c7h0CEhixNkxbR16nsYh%2BWdF676RU6%2Fq3ZY7Pq17HtgTVUaDqAjrIfrJFIG4PBudOgxjp0vqWhTmZ%2Fqb4ROpcuFcTHsiLq9po1ugTyym%2Bx0dA3kjeaGdep4XLPkpyzcb1HwO23Ai69jIiweb&X-Amz-Signature=e19f2291fdf7e23266a4df6b2598d31cd9872c470d9fa8b209ce2055fb83121f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGUTBXA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBkEz6nFMWoOkFRC1vIlSdMvDY8nuqKDbeTR4wCm%2BT5WAiBIYmTHtuiOTeN%2B7bVOiO5glp%2BupMjikdgPApe1ejRkoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyUCAGgIKzCrekIqBKtwDRqmY%2FGoICg5fR9V2peK%2F%2BQym9x7dvJ6Ea70Mf4kUbK1Z0%2FPOgfdC9QUNJdg%2B5rqpSPOY51vs4lPE74w2Pkibu%2Ff9FGym4MWF6pfSqxpl4eirKPewPKrKOEAHZxMIalR9bcWnVBfAN59xDljgCxc8%2B5kHdJOPV2NFqKS87r%2Bk5%2FWVcqXwGu%2FSPI%2FkHGP6ekXUNK3BEc4icqHO5%2FZ8vbgoBIQn0x1ELJc4BnvPQTMbmxaAKtGOXXCAyqqCFeB8cO7%2BqnFRFVc7Mdmwxj2U4yzw11vUCiQsQHCWy0jshK339Nj%2Bbioz80UkC7atYoJaEYI%2BsEOtEXS2TfBf3bdh1iHQ%2BsCF9oYZGAeApcfLXK2yFHnYqisqrTyw08%2FvfxNcrHtgvG%2FxiU76aOWm3yzkzDADerpT1evrVThN0ccmUr0VCjj2uZHMaRU6fHbW5Y8UQWwlQ9z3ZIUoIn%2FM%2B%2FLzRc%2B19o0leMNInTlEV0klQOG8OyAj3GPgC0Hd0K51OpGLNAu4XW38YyIkMc81q19qTs4vOyv2d2sxhS7KZkEKGdn88%2FRsG5CkR54XVfos9NZroUNVZPA2Ko8aqwxIX2q9t96UKURmLbUr1XsMK1NTiCENXjMOJsYo4XqpanP6LEEw44iqvwY6pgHnNMXQFxRPgVsP3owMetwuEICXxkwBZxs%2FCmozSYdEreAN2QtrC9zOqaesuAad0m7gbwlbnCsrSGi4c7h0CEhixNkxbR16nsYh%2BWdF676RU6%2Fq3ZY7Pq17HtgTVUaDqAjrIfrJFIG4PBudOgxjp0vqWhTmZ%2Fqb4ROpcuFcTHsiLq9po1ugTyym%2Bx0dA3kjeaGdep4XLPkpyzcb1HwO23Ai69jIiweb&X-Amz-Signature=4d0244c5d5a65012cb0fd15c25ed08cf83db8ab6de3af70b3ae8e68be103aa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGUTBXA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBkEz6nFMWoOkFRC1vIlSdMvDY8nuqKDbeTR4wCm%2BT5WAiBIYmTHtuiOTeN%2B7bVOiO5glp%2BupMjikdgPApe1ejRkoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyUCAGgIKzCrekIqBKtwDRqmY%2FGoICg5fR9V2peK%2F%2BQym9x7dvJ6Ea70Mf4kUbK1Z0%2FPOgfdC9QUNJdg%2B5rqpSPOY51vs4lPE74w2Pkibu%2Ff9FGym4MWF6pfSqxpl4eirKPewPKrKOEAHZxMIalR9bcWnVBfAN59xDljgCxc8%2B5kHdJOPV2NFqKS87r%2Bk5%2FWVcqXwGu%2FSPI%2FkHGP6ekXUNK3BEc4icqHO5%2FZ8vbgoBIQn0x1ELJc4BnvPQTMbmxaAKtGOXXCAyqqCFeB8cO7%2BqnFRFVc7Mdmwxj2U4yzw11vUCiQsQHCWy0jshK339Nj%2Bbioz80UkC7atYoJaEYI%2BsEOtEXS2TfBf3bdh1iHQ%2BsCF9oYZGAeApcfLXK2yFHnYqisqrTyw08%2FvfxNcrHtgvG%2FxiU76aOWm3yzkzDADerpT1evrVThN0ccmUr0VCjj2uZHMaRU6fHbW5Y8UQWwlQ9z3ZIUoIn%2FM%2B%2FLzRc%2B19o0leMNInTlEV0klQOG8OyAj3GPgC0Hd0K51OpGLNAu4XW38YyIkMc81q19qTs4vOyv2d2sxhS7KZkEKGdn88%2FRsG5CkR54XVfos9NZroUNVZPA2Ko8aqwxIX2q9t96UKURmLbUr1XsMK1NTiCENXjMOJsYo4XqpanP6LEEw44iqvwY6pgHnNMXQFxRPgVsP3owMetwuEICXxkwBZxs%2FCmozSYdEreAN2QtrC9zOqaesuAad0m7gbwlbnCsrSGi4c7h0CEhixNkxbR16nsYh%2BWdF676RU6%2Fq3ZY7Pq17HtgTVUaDqAjrIfrJFIG4PBudOgxjp0vqWhTmZ%2Fqb4ROpcuFcTHsiLq9po1ugTyym%2Bx0dA3kjeaGdep4XLPkpyzcb1HwO23Ai69jIiweb&X-Amz-Signature=ed6b5d8e31892739a29a4fbabaff0c4a91a9c5305e9a286db0d4481321c96756&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRGUTBXA%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBkEz6nFMWoOkFRC1vIlSdMvDY8nuqKDbeTR4wCm%2BT5WAiBIYmTHtuiOTeN%2B7bVOiO5glp%2BupMjikdgPApe1ejRkoSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyUCAGgIKzCrekIqBKtwDRqmY%2FGoICg5fR9V2peK%2F%2BQym9x7dvJ6Ea70Mf4kUbK1Z0%2FPOgfdC9QUNJdg%2B5rqpSPOY51vs4lPE74w2Pkibu%2Ff9FGym4MWF6pfSqxpl4eirKPewPKrKOEAHZxMIalR9bcWnVBfAN59xDljgCxc8%2B5kHdJOPV2NFqKS87r%2Bk5%2FWVcqXwGu%2FSPI%2FkHGP6ekXUNK3BEc4icqHO5%2FZ8vbgoBIQn0x1ELJc4BnvPQTMbmxaAKtGOXXCAyqqCFeB8cO7%2BqnFRFVc7Mdmwxj2U4yzw11vUCiQsQHCWy0jshK339Nj%2Bbioz80UkC7atYoJaEYI%2BsEOtEXS2TfBf3bdh1iHQ%2BsCF9oYZGAeApcfLXK2yFHnYqisqrTyw08%2FvfxNcrHtgvG%2FxiU76aOWm3yzkzDADerpT1evrVThN0ccmUr0VCjj2uZHMaRU6fHbW5Y8UQWwlQ9z3ZIUoIn%2FM%2B%2FLzRc%2B19o0leMNInTlEV0klQOG8OyAj3GPgC0Hd0K51OpGLNAu4XW38YyIkMc81q19qTs4vOyv2d2sxhS7KZkEKGdn88%2FRsG5CkR54XVfos9NZroUNVZPA2Ko8aqwxIX2q9t96UKURmLbUr1XsMK1NTiCENXjMOJsYo4XqpanP6LEEw44iqvwY6pgHnNMXQFxRPgVsP3owMetwuEICXxkwBZxs%2FCmozSYdEreAN2QtrC9zOqaesuAad0m7gbwlbnCsrSGi4c7h0CEhixNkxbR16nsYh%2BWdF676RU6%2Fq3ZY7Pq17HtgTVUaDqAjrIfrJFIG4PBudOgxjp0vqWhTmZ%2Fqb4ROpcuFcTHsiLq9po1ugTyym%2Bx0dA3kjeaGdep4XLPkpyzcb1HwO23Ai69jIiweb&X-Amz-Signature=f4a6e3903998fc9b75f36f80b4fe7dbe91943ca6e4c73a311392d67f105dbb62&X-Amz-SignedHeaders=host&x-id=GetObject)
