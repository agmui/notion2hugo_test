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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E7T5RL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHb15uNdhxDphM7RysGwylMsSTatVhIpHQCDwGy0XjxmAiAw%2Bem5VtLYPlycDzUyijZD3J7r5CnHTwKLbw2ijkWKviqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3vwzlp8Tli0vP92KtwDwFGKwJYM246cWlVcdFJqwJ%2FOLzqndQbwFjG8pT2FjHphNYr6NXILiyMxrJB3bBzN0aU4wB71jVqmpQH%2FmKDy4Jq63El3ekswn4IN%2BSSNzrJz1Jls9fE0xvkZvwu3XZWmP%2BETtNEvSwApN3JSEfUvq2oSPNUkFzB1uG3HwpNHZI1ipfybqbAPOI34QBZk9h9xWe5AwkGYHkTtR0hJaAlJgat3mTfQTO%2BDiZv4V3xMlOZasjvwcvlP7Uz5q15DilCBJAMm4nTT%2F100KNZHiFQ1jQNg5TrckGv4AniqzgwePqWH4gn%2BYKXmyMAOcsjh2h60w4Bm%2FrmWf%2Fn%2FKf4bZkZ%2B5pWObtzg%2FZPmAmGtfqZFcDWqN6qsOQ1V4hroLNcpRsM%2BtmJCJ4iqmm40PyUpGiFkLqtjFvdsKWVuA6POWeF%2BvKiV5qUiUQqQljNvb%2FQaCPeBzQqDnsJ7BtNBBCcJLq%2F9zHYZYiLvo%2Bxn%2BUTymlH9mg9VU5tZjSwq0tMf03YOFdtaiamLX0JpgVT9uQHKIMAzwNdjzKyEdBYsT%2FGA6B4zHSHIjeNi4V7lSyYqxyDtT1lNDB%2FGDw7g7%2BLp%2B%2B7gbwpaGhVJT7sGGfmmCWdOW%2BZMd0kh3w413ZkzqPEyYj0w9t7wwQY6pgHQPI%2BT415MM%2FPXei%2Fh3%2BjslKWzNHWG8p8Me%2FYl9g5OcladrURwtVZI%2F%2BdF6l9WOcdikn%2BwCQYNA3mmj5z4DEsalod50yZm7%2FVoMB%2BGtRcVF14FTNWPBxm1GFUtLyQn6miQ8CnJcQBFm2%2BYFsFG%2B8Y8RM5nEdciC4jvgKHvxIisaneYndN5XaO9lshbK%2ByJJbfmUN1BpVnHfSOoOwdOurOEY16Dbx1L&X-Amz-Signature=1ea5de1cebefc86ef32e552aaf49e2b4a7861e5e9de8fa3f19b7f1fa7f45e9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E7T5RL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHb15uNdhxDphM7RysGwylMsSTatVhIpHQCDwGy0XjxmAiAw%2Bem5VtLYPlycDzUyijZD3J7r5CnHTwKLbw2ijkWKviqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3vwzlp8Tli0vP92KtwDwFGKwJYM246cWlVcdFJqwJ%2FOLzqndQbwFjG8pT2FjHphNYr6NXILiyMxrJB3bBzN0aU4wB71jVqmpQH%2FmKDy4Jq63El3ekswn4IN%2BSSNzrJz1Jls9fE0xvkZvwu3XZWmP%2BETtNEvSwApN3JSEfUvq2oSPNUkFzB1uG3HwpNHZI1ipfybqbAPOI34QBZk9h9xWe5AwkGYHkTtR0hJaAlJgat3mTfQTO%2BDiZv4V3xMlOZasjvwcvlP7Uz5q15DilCBJAMm4nTT%2F100KNZHiFQ1jQNg5TrckGv4AniqzgwePqWH4gn%2BYKXmyMAOcsjh2h60w4Bm%2FrmWf%2Fn%2FKf4bZkZ%2B5pWObtzg%2FZPmAmGtfqZFcDWqN6qsOQ1V4hroLNcpRsM%2BtmJCJ4iqmm40PyUpGiFkLqtjFvdsKWVuA6POWeF%2BvKiV5qUiUQqQljNvb%2FQaCPeBzQqDnsJ7BtNBBCcJLq%2F9zHYZYiLvo%2Bxn%2BUTymlH9mg9VU5tZjSwq0tMf03YOFdtaiamLX0JpgVT9uQHKIMAzwNdjzKyEdBYsT%2FGA6B4zHSHIjeNi4V7lSyYqxyDtT1lNDB%2FGDw7g7%2BLp%2B%2B7gbwpaGhVJT7sGGfmmCWdOW%2BZMd0kh3w413ZkzqPEyYj0w9t7wwQY6pgHQPI%2BT415MM%2FPXei%2Fh3%2BjslKWzNHWG8p8Me%2FYl9g5OcladrURwtVZI%2F%2BdF6l9WOcdikn%2BwCQYNA3mmj5z4DEsalod50yZm7%2FVoMB%2BGtRcVF14FTNWPBxm1GFUtLyQn6miQ8CnJcQBFm2%2BYFsFG%2B8Y8RM5nEdciC4jvgKHvxIisaneYndN5XaO9lshbK%2ByJJbfmUN1BpVnHfSOoOwdOurOEY16Dbx1L&X-Amz-Signature=ceb3e48d90d9f4ceea6279c82b3fcc7ea8b8363de2dfe0adf5fc8ace2c349a00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E7T5RL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHb15uNdhxDphM7RysGwylMsSTatVhIpHQCDwGy0XjxmAiAw%2Bem5VtLYPlycDzUyijZD3J7r5CnHTwKLbw2ijkWKviqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3vwzlp8Tli0vP92KtwDwFGKwJYM246cWlVcdFJqwJ%2FOLzqndQbwFjG8pT2FjHphNYr6NXILiyMxrJB3bBzN0aU4wB71jVqmpQH%2FmKDy4Jq63El3ekswn4IN%2BSSNzrJz1Jls9fE0xvkZvwu3XZWmP%2BETtNEvSwApN3JSEfUvq2oSPNUkFzB1uG3HwpNHZI1ipfybqbAPOI34QBZk9h9xWe5AwkGYHkTtR0hJaAlJgat3mTfQTO%2BDiZv4V3xMlOZasjvwcvlP7Uz5q15DilCBJAMm4nTT%2F100KNZHiFQ1jQNg5TrckGv4AniqzgwePqWH4gn%2BYKXmyMAOcsjh2h60w4Bm%2FrmWf%2Fn%2FKf4bZkZ%2B5pWObtzg%2FZPmAmGtfqZFcDWqN6qsOQ1V4hroLNcpRsM%2BtmJCJ4iqmm40PyUpGiFkLqtjFvdsKWVuA6POWeF%2BvKiV5qUiUQqQljNvb%2FQaCPeBzQqDnsJ7BtNBBCcJLq%2F9zHYZYiLvo%2Bxn%2BUTymlH9mg9VU5tZjSwq0tMf03YOFdtaiamLX0JpgVT9uQHKIMAzwNdjzKyEdBYsT%2FGA6B4zHSHIjeNi4V7lSyYqxyDtT1lNDB%2FGDw7g7%2BLp%2B%2B7gbwpaGhVJT7sGGfmmCWdOW%2BZMd0kh3w413ZkzqPEyYj0w9t7wwQY6pgHQPI%2BT415MM%2FPXei%2Fh3%2BjslKWzNHWG8p8Me%2FYl9g5OcladrURwtVZI%2F%2BdF6l9WOcdikn%2BwCQYNA3mmj5z4DEsalod50yZm7%2FVoMB%2BGtRcVF14FTNWPBxm1GFUtLyQn6miQ8CnJcQBFm2%2BYFsFG%2B8Y8RM5nEdciC4jvgKHvxIisaneYndN5XaO9lshbK%2ByJJbfmUN1BpVnHfSOoOwdOurOEY16Dbx1L&X-Amz-Signature=a1938a4ea9dabec42d04d28dbc3be7fd8889a6b295ab48685cfb984bc0afaf1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E7T5RL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHb15uNdhxDphM7RysGwylMsSTatVhIpHQCDwGy0XjxmAiAw%2Bem5VtLYPlycDzUyijZD3J7r5CnHTwKLbw2ijkWKviqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3vwzlp8Tli0vP92KtwDwFGKwJYM246cWlVcdFJqwJ%2FOLzqndQbwFjG8pT2FjHphNYr6NXILiyMxrJB3bBzN0aU4wB71jVqmpQH%2FmKDy4Jq63El3ekswn4IN%2BSSNzrJz1Jls9fE0xvkZvwu3XZWmP%2BETtNEvSwApN3JSEfUvq2oSPNUkFzB1uG3HwpNHZI1ipfybqbAPOI34QBZk9h9xWe5AwkGYHkTtR0hJaAlJgat3mTfQTO%2BDiZv4V3xMlOZasjvwcvlP7Uz5q15DilCBJAMm4nTT%2F100KNZHiFQ1jQNg5TrckGv4AniqzgwePqWH4gn%2BYKXmyMAOcsjh2h60w4Bm%2FrmWf%2Fn%2FKf4bZkZ%2B5pWObtzg%2FZPmAmGtfqZFcDWqN6qsOQ1V4hroLNcpRsM%2BtmJCJ4iqmm40PyUpGiFkLqtjFvdsKWVuA6POWeF%2BvKiV5qUiUQqQljNvb%2FQaCPeBzQqDnsJ7BtNBBCcJLq%2F9zHYZYiLvo%2Bxn%2BUTymlH9mg9VU5tZjSwq0tMf03YOFdtaiamLX0JpgVT9uQHKIMAzwNdjzKyEdBYsT%2FGA6B4zHSHIjeNi4V7lSyYqxyDtT1lNDB%2FGDw7g7%2BLp%2B%2B7gbwpaGhVJT7sGGfmmCWdOW%2BZMd0kh3w413ZkzqPEyYj0w9t7wwQY6pgHQPI%2BT415MM%2FPXei%2Fh3%2BjslKWzNHWG8p8Me%2FYl9g5OcladrURwtVZI%2F%2BdF6l9WOcdikn%2BwCQYNA3mmj5z4DEsalod50yZm7%2FVoMB%2BGtRcVF14FTNWPBxm1GFUtLyQn6miQ8CnJcQBFm2%2BYFsFG%2B8Y8RM5nEdciC4jvgKHvxIisaneYndN5XaO9lshbK%2ByJJbfmUN1BpVnHfSOoOwdOurOEY16Dbx1L&X-Amz-Signature=b7a3eb1419abdab9fbbfe660cb56ec6cb87cd1b94b7851f500dc3350c0cc6c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E7T5RL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHb15uNdhxDphM7RysGwylMsSTatVhIpHQCDwGy0XjxmAiAw%2Bem5VtLYPlycDzUyijZD3J7r5CnHTwKLbw2ijkWKviqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3vwzlp8Tli0vP92KtwDwFGKwJYM246cWlVcdFJqwJ%2FOLzqndQbwFjG8pT2FjHphNYr6NXILiyMxrJB3bBzN0aU4wB71jVqmpQH%2FmKDy4Jq63El3ekswn4IN%2BSSNzrJz1Jls9fE0xvkZvwu3XZWmP%2BETtNEvSwApN3JSEfUvq2oSPNUkFzB1uG3HwpNHZI1ipfybqbAPOI34QBZk9h9xWe5AwkGYHkTtR0hJaAlJgat3mTfQTO%2BDiZv4V3xMlOZasjvwcvlP7Uz5q15DilCBJAMm4nTT%2F100KNZHiFQ1jQNg5TrckGv4AniqzgwePqWH4gn%2BYKXmyMAOcsjh2h60w4Bm%2FrmWf%2Fn%2FKf4bZkZ%2B5pWObtzg%2FZPmAmGtfqZFcDWqN6qsOQ1V4hroLNcpRsM%2BtmJCJ4iqmm40PyUpGiFkLqtjFvdsKWVuA6POWeF%2BvKiV5qUiUQqQljNvb%2FQaCPeBzQqDnsJ7BtNBBCcJLq%2F9zHYZYiLvo%2Bxn%2BUTymlH9mg9VU5tZjSwq0tMf03YOFdtaiamLX0JpgVT9uQHKIMAzwNdjzKyEdBYsT%2FGA6B4zHSHIjeNi4V7lSyYqxyDtT1lNDB%2FGDw7g7%2BLp%2B%2B7gbwpaGhVJT7sGGfmmCWdOW%2BZMd0kh3w413ZkzqPEyYj0w9t7wwQY6pgHQPI%2BT415MM%2FPXei%2Fh3%2BjslKWzNHWG8p8Me%2FYl9g5OcladrURwtVZI%2F%2BdF6l9WOcdikn%2BwCQYNA3mmj5z4DEsalod50yZm7%2FVoMB%2BGtRcVF14FTNWPBxm1GFUtLyQn6miQ8CnJcQBFm2%2BYFsFG%2B8Y8RM5nEdciC4jvgKHvxIisaneYndN5XaO9lshbK%2ByJJbfmUN1BpVnHfSOoOwdOurOEY16Dbx1L&X-Amz-Signature=003f2d2c8fd95762e93f38729a47abd3e3e61aff9fe95fde48dac6086a1c268f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7E7T5RL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHb15uNdhxDphM7RysGwylMsSTatVhIpHQCDwGy0XjxmAiAw%2Bem5VtLYPlycDzUyijZD3J7r5CnHTwKLbw2ijkWKviqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3vwzlp8Tli0vP92KtwDwFGKwJYM246cWlVcdFJqwJ%2FOLzqndQbwFjG8pT2FjHphNYr6NXILiyMxrJB3bBzN0aU4wB71jVqmpQH%2FmKDy4Jq63El3ekswn4IN%2BSSNzrJz1Jls9fE0xvkZvwu3XZWmP%2BETtNEvSwApN3JSEfUvq2oSPNUkFzB1uG3HwpNHZI1ipfybqbAPOI34QBZk9h9xWe5AwkGYHkTtR0hJaAlJgat3mTfQTO%2BDiZv4V3xMlOZasjvwcvlP7Uz5q15DilCBJAMm4nTT%2F100KNZHiFQ1jQNg5TrckGv4AniqzgwePqWH4gn%2BYKXmyMAOcsjh2h60w4Bm%2FrmWf%2Fn%2FKf4bZkZ%2B5pWObtzg%2FZPmAmGtfqZFcDWqN6qsOQ1V4hroLNcpRsM%2BtmJCJ4iqmm40PyUpGiFkLqtjFvdsKWVuA6POWeF%2BvKiV5qUiUQqQljNvb%2FQaCPeBzQqDnsJ7BtNBBCcJLq%2F9zHYZYiLvo%2Bxn%2BUTymlH9mg9VU5tZjSwq0tMf03YOFdtaiamLX0JpgVT9uQHKIMAzwNdjzKyEdBYsT%2FGA6B4zHSHIjeNi4V7lSyYqxyDtT1lNDB%2FGDw7g7%2BLp%2B%2B7gbwpaGhVJT7sGGfmmCWdOW%2BZMd0kh3w413ZkzqPEyYj0w9t7wwQY6pgHQPI%2BT415MM%2FPXei%2Fh3%2BjslKWzNHWG8p8Me%2FYl9g5OcladrURwtVZI%2F%2BdF6l9WOcdikn%2BwCQYNA3mmj5z4DEsalod50yZm7%2FVoMB%2BGtRcVF14FTNWPBxm1GFUtLyQn6miQ8CnJcQBFm2%2BYFsFG%2B8Y8RM5nEdciC4jvgKHvxIisaneYndN5XaO9lshbK%2ByJJbfmUN1BpVnHfSOoOwdOurOEY16Dbx1L&X-Amz-Signature=e2be993d246fe1260a3a80ecb0f80e6a9bf6feb1d2f27e7322fbfa0e411c0949&X-Amz-SignedHeaders=host&x-id=GetObject)
