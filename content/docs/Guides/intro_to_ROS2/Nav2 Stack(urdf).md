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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IYT7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHVIQX04MWK%2BExdG8IgUZjWIXynZUSjq2i8FfwBZx5QAiBCW2609W5lUsprcD%2FRSCihMJaiz9Mp00BkPL4kXci6wir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1QXJfu7%2FV29mtZdwKtwDTVjb2u8pezRxWKSYDE1BXMr48e2EE7MmACHk7DjVI1T0%2BUB1rGtbC8lOVL4RhrBO1cD29ncZoaeJ8ks00tyaFg4HJyRQICx2oA1BqMvI1QdLixsIhIO8GFiXmY3MgXOrn8w%2Fhc30XFRrudx7L72OwzjpNqFqhYhnUbLqwZO089JJczb8Pl6kktWlgqoV9UZQaT6asNkmqi2LWO9XOZq4zbbZUGD%2Fx%2BpUI%2BGN0gWhNYDT9zWw8VVddhvlQf6EoTVcVv0eg3QUgq19dv0RK%2BIbXR7Y%2B%2F5tG84EwfqKtUSq%2F1W992tdId9Xc12903ovaTNHBGSONrpAWH4ZA%2B3WQGGCIlSe2V9lBMiecM5tXdl4ZWswl42GsZrktRhp9%2BxfLmdhU%2F0lx%2BnouNgdQd752BmPu9qpIXJ1kCAXycGzd2%2FZptf2hPLu1vDOCqh7ghXqSrwwOmr%2BmtCsI41txksvydlznNt48cPbbl9CG73%2F%2BxUN1slvekfvrRWYqtpq5lGGz4Z4%2BEENCjlSsq8sDkEGKsDpBy1CLt9terkuevkoXU1QAhmWcBQ%2B8bFtk4mhqSL6H%2F19gFmJ709eu9r%2BORSxjo8xmyx%2FMpUbuurbvjup43nfKrG8W7uGGp7XYbXfnHkw2Oq6vQY6pgFmI3J8lLuG3NWACj8EnGfvdQq8LwruNqnfgtnpALrCVmKC7ly682urHUo%2BPJl8fT3h2d7RKErifUVWJ%2BO01EfN8f7ZKfKa1Dp6QdmkJEtkYX4Y%2F32FspNmewy3y%2FH%2FaFnGCLHCTHTfgS5CtjWBAFzrZJ8hhDWBQwcwC4XNa1Ysw%2FCQkM3uU35ytlMOfWLIHRvdSnlWZKczjF2mWP0NsTKZGwtCRATe&X-Amz-Signature=1b87f613cc64d40b3cd07ef508c2f941391fce986fc2cb664768c50229f50f36&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IYT7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHVIQX04MWK%2BExdG8IgUZjWIXynZUSjq2i8FfwBZx5QAiBCW2609W5lUsprcD%2FRSCihMJaiz9Mp00BkPL4kXci6wir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1QXJfu7%2FV29mtZdwKtwDTVjb2u8pezRxWKSYDE1BXMr48e2EE7MmACHk7DjVI1T0%2BUB1rGtbC8lOVL4RhrBO1cD29ncZoaeJ8ks00tyaFg4HJyRQICx2oA1BqMvI1QdLixsIhIO8GFiXmY3MgXOrn8w%2Fhc30XFRrudx7L72OwzjpNqFqhYhnUbLqwZO089JJczb8Pl6kktWlgqoV9UZQaT6asNkmqi2LWO9XOZq4zbbZUGD%2Fx%2BpUI%2BGN0gWhNYDT9zWw8VVddhvlQf6EoTVcVv0eg3QUgq19dv0RK%2BIbXR7Y%2B%2F5tG84EwfqKtUSq%2F1W992tdId9Xc12903ovaTNHBGSONrpAWH4ZA%2B3WQGGCIlSe2V9lBMiecM5tXdl4ZWswl42GsZrktRhp9%2BxfLmdhU%2F0lx%2BnouNgdQd752BmPu9qpIXJ1kCAXycGzd2%2FZptf2hPLu1vDOCqh7ghXqSrwwOmr%2BmtCsI41txksvydlznNt48cPbbl9CG73%2F%2BxUN1slvekfvrRWYqtpq5lGGz4Z4%2BEENCjlSsq8sDkEGKsDpBy1CLt9terkuevkoXU1QAhmWcBQ%2B8bFtk4mhqSL6H%2F19gFmJ709eu9r%2BORSxjo8xmyx%2FMpUbuurbvjup43nfKrG8W7uGGp7XYbXfnHkw2Oq6vQY6pgFmI3J8lLuG3NWACj8EnGfvdQq8LwruNqnfgtnpALrCVmKC7ly682urHUo%2BPJl8fT3h2d7RKErifUVWJ%2BO01EfN8f7ZKfKa1Dp6QdmkJEtkYX4Y%2F32FspNmewy3y%2FH%2FaFnGCLHCTHTfgS5CtjWBAFzrZJ8hhDWBQwcwC4XNa1Ysw%2FCQkM3uU35ytlMOfWLIHRvdSnlWZKczjF2mWP0NsTKZGwtCRATe&X-Amz-Signature=7507434d0d894e935238348e2434ead808439816b8cb73650bb4836e184f48a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IYT7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHVIQX04MWK%2BExdG8IgUZjWIXynZUSjq2i8FfwBZx5QAiBCW2609W5lUsprcD%2FRSCihMJaiz9Mp00BkPL4kXci6wir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1QXJfu7%2FV29mtZdwKtwDTVjb2u8pezRxWKSYDE1BXMr48e2EE7MmACHk7DjVI1T0%2BUB1rGtbC8lOVL4RhrBO1cD29ncZoaeJ8ks00tyaFg4HJyRQICx2oA1BqMvI1QdLixsIhIO8GFiXmY3MgXOrn8w%2Fhc30XFRrudx7L72OwzjpNqFqhYhnUbLqwZO089JJczb8Pl6kktWlgqoV9UZQaT6asNkmqi2LWO9XOZq4zbbZUGD%2Fx%2BpUI%2BGN0gWhNYDT9zWw8VVddhvlQf6EoTVcVv0eg3QUgq19dv0RK%2BIbXR7Y%2B%2F5tG84EwfqKtUSq%2F1W992tdId9Xc12903ovaTNHBGSONrpAWH4ZA%2B3WQGGCIlSe2V9lBMiecM5tXdl4ZWswl42GsZrktRhp9%2BxfLmdhU%2F0lx%2BnouNgdQd752BmPu9qpIXJ1kCAXycGzd2%2FZptf2hPLu1vDOCqh7ghXqSrwwOmr%2BmtCsI41txksvydlznNt48cPbbl9CG73%2F%2BxUN1slvekfvrRWYqtpq5lGGz4Z4%2BEENCjlSsq8sDkEGKsDpBy1CLt9terkuevkoXU1QAhmWcBQ%2B8bFtk4mhqSL6H%2F19gFmJ709eu9r%2BORSxjo8xmyx%2FMpUbuurbvjup43nfKrG8W7uGGp7XYbXfnHkw2Oq6vQY6pgFmI3J8lLuG3NWACj8EnGfvdQq8LwruNqnfgtnpALrCVmKC7ly682urHUo%2BPJl8fT3h2d7RKErifUVWJ%2BO01EfN8f7ZKfKa1Dp6QdmkJEtkYX4Y%2F32FspNmewy3y%2FH%2FaFnGCLHCTHTfgS5CtjWBAFzrZJ8hhDWBQwcwC4XNa1Ysw%2FCQkM3uU35ytlMOfWLIHRvdSnlWZKczjF2mWP0NsTKZGwtCRATe&X-Amz-Signature=5ffc01bbe661f28213de55061c5aeaa159cb2dfdab8ed55af974852bb3041296&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IYT7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHVIQX04MWK%2BExdG8IgUZjWIXynZUSjq2i8FfwBZx5QAiBCW2609W5lUsprcD%2FRSCihMJaiz9Mp00BkPL4kXci6wir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1QXJfu7%2FV29mtZdwKtwDTVjb2u8pezRxWKSYDE1BXMr48e2EE7MmACHk7DjVI1T0%2BUB1rGtbC8lOVL4RhrBO1cD29ncZoaeJ8ks00tyaFg4HJyRQICx2oA1BqMvI1QdLixsIhIO8GFiXmY3MgXOrn8w%2Fhc30XFRrudx7L72OwzjpNqFqhYhnUbLqwZO089JJczb8Pl6kktWlgqoV9UZQaT6asNkmqi2LWO9XOZq4zbbZUGD%2Fx%2BpUI%2BGN0gWhNYDT9zWw8VVddhvlQf6EoTVcVv0eg3QUgq19dv0RK%2BIbXR7Y%2B%2F5tG84EwfqKtUSq%2F1W992tdId9Xc12903ovaTNHBGSONrpAWH4ZA%2B3WQGGCIlSe2V9lBMiecM5tXdl4ZWswl42GsZrktRhp9%2BxfLmdhU%2F0lx%2BnouNgdQd752BmPu9qpIXJ1kCAXycGzd2%2FZptf2hPLu1vDOCqh7ghXqSrwwOmr%2BmtCsI41txksvydlznNt48cPbbl9CG73%2F%2BxUN1slvekfvrRWYqtpq5lGGz4Z4%2BEENCjlSsq8sDkEGKsDpBy1CLt9terkuevkoXU1QAhmWcBQ%2B8bFtk4mhqSL6H%2F19gFmJ709eu9r%2BORSxjo8xmyx%2FMpUbuurbvjup43nfKrG8W7uGGp7XYbXfnHkw2Oq6vQY6pgFmI3J8lLuG3NWACj8EnGfvdQq8LwruNqnfgtnpALrCVmKC7ly682urHUo%2BPJl8fT3h2d7RKErifUVWJ%2BO01EfN8f7ZKfKa1Dp6QdmkJEtkYX4Y%2F32FspNmewy3y%2FH%2FaFnGCLHCTHTfgS5CtjWBAFzrZJ8hhDWBQwcwC4XNa1Ysw%2FCQkM3uU35ytlMOfWLIHRvdSnlWZKczjF2mWP0NsTKZGwtCRATe&X-Amz-Signature=60cd5e92ec78b00722ad4cb407065b8fd88b5d0b1eeaaaa29bfe50b7bdc89543&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IYT7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHVIQX04MWK%2BExdG8IgUZjWIXynZUSjq2i8FfwBZx5QAiBCW2609W5lUsprcD%2FRSCihMJaiz9Mp00BkPL4kXci6wir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1QXJfu7%2FV29mtZdwKtwDTVjb2u8pezRxWKSYDE1BXMr48e2EE7MmACHk7DjVI1T0%2BUB1rGtbC8lOVL4RhrBO1cD29ncZoaeJ8ks00tyaFg4HJyRQICx2oA1BqMvI1QdLixsIhIO8GFiXmY3MgXOrn8w%2Fhc30XFRrudx7L72OwzjpNqFqhYhnUbLqwZO089JJczb8Pl6kktWlgqoV9UZQaT6asNkmqi2LWO9XOZq4zbbZUGD%2Fx%2BpUI%2BGN0gWhNYDT9zWw8VVddhvlQf6EoTVcVv0eg3QUgq19dv0RK%2BIbXR7Y%2B%2F5tG84EwfqKtUSq%2F1W992tdId9Xc12903ovaTNHBGSONrpAWH4ZA%2B3WQGGCIlSe2V9lBMiecM5tXdl4ZWswl42GsZrktRhp9%2BxfLmdhU%2F0lx%2BnouNgdQd752BmPu9qpIXJ1kCAXycGzd2%2FZptf2hPLu1vDOCqh7ghXqSrwwOmr%2BmtCsI41txksvydlznNt48cPbbl9CG73%2F%2BxUN1slvekfvrRWYqtpq5lGGz4Z4%2BEENCjlSsq8sDkEGKsDpBy1CLt9terkuevkoXU1QAhmWcBQ%2B8bFtk4mhqSL6H%2F19gFmJ709eu9r%2BORSxjo8xmyx%2FMpUbuurbvjup43nfKrG8W7uGGp7XYbXfnHkw2Oq6vQY6pgFmI3J8lLuG3NWACj8EnGfvdQq8LwruNqnfgtnpALrCVmKC7ly682urHUo%2BPJl8fT3h2d7RKErifUVWJ%2BO01EfN8f7ZKfKa1Dp6QdmkJEtkYX4Y%2F32FspNmewy3y%2FH%2FaFnGCLHCTHTfgS5CtjWBAFzrZJ8hhDWBQwcwC4XNa1Ysw%2FCQkM3uU35ytlMOfWLIHRvdSnlWZKczjF2mWP0NsTKZGwtCRATe&X-Amz-Signature=4ee4028e530c0f8ab26130a6e66c0ddbbe63aaa08992e7caa3b078317b91326f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO5IYT7M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHVIQX04MWK%2BExdG8IgUZjWIXynZUSjq2i8FfwBZx5QAiBCW2609W5lUsprcD%2FRSCihMJaiz9Mp00BkPL4kXci6wir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM1QXJfu7%2FV29mtZdwKtwDTVjb2u8pezRxWKSYDE1BXMr48e2EE7MmACHk7DjVI1T0%2BUB1rGtbC8lOVL4RhrBO1cD29ncZoaeJ8ks00tyaFg4HJyRQICx2oA1BqMvI1QdLixsIhIO8GFiXmY3MgXOrn8w%2Fhc30XFRrudx7L72OwzjpNqFqhYhnUbLqwZO089JJczb8Pl6kktWlgqoV9UZQaT6asNkmqi2LWO9XOZq4zbbZUGD%2Fx%2BpUI%2BGN0gWhNYDT9zWw8VVddhvlQf6EoTVcVv0eg3QUgq19dv0RK%2BIbXR7Y%2B%2F5tG84EwfqKtUSq%2F1W992tdId9Xc12903ovaTNHBGSONrpAWH4ZA%2B3WQGGCIlSe2V9lBMiecM5tXdl4ZWswl42GsZrktRhp9%2BxfLmdhU%2F0lx%2BnouNgdQd752BmPu9qpIXJ1kCAXycGzd2%2FZptf2hPLu1vDOCqh7ghXqSrwwOmr%2BmtCsI41txksvydlznNt48cPbbl9CG73%2F%2BxUN1slvekfvrRWYqtpq5lGGz4Z4%2BEENCjlSsq8sDkEGKsDpBy1CLt9terkuevkoXU1QAhmWcBQ%2B8bFtk4mhqSL6H%2F19gFmJ709eu9r%2BORSxjo8xmyx%2FMpUbuurbvjup43nfKrG8W7uGGp7XYbXfnHkw2Oq6vQY6pgFmI3J8lLuG3NWACj8EnGfvdQq8LwruNqnfgtnpALrCVmKC7ly682urHUo%2BPJl8fT3h2d7RKErifUVWJ%2BO01EfN8f7ZKfKa1Dp6QdmkJEtkYX4Y%2F32FspNmewy3y%2FH%2FaFnGCLHCTHTfgS5CtjWBAFzrZJ8hhDWBQwcwC4XNa1Ysw%2FCQkM3uU35ytlMOfWLIHRvdSnlWZKczjF2mWP0NsTKZGwtCRATe&X-Amz-Signature=1b324bbb1cf8b9466f153b8f3a9b713f68e4c5a866c97db956027448413bcf25&X-Amz-SignedHeaders=host&x-id=GetObject)
