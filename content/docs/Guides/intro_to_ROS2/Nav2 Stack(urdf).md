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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWWBVAK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx4ZYOLT%2F2B7gzg%2FAeLR3w4oMqf2LHvby8WjQ4KmACNAiBr%2BvVWlQHhzShOxwmWb19FJJLMSWfxgMOia8EKhhzmRiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZb3iVnOa3zBRlPVKtwD33jU4M7%2BCLyqpOe%2B9crzozNhbjOlkEh%2B%2BWJMHRZPEgG33bWArzusAdOWEsrYwTkuad5omH97kRo8VSU583z9RqSLFe98vHLmhMIVPc%2FPVFYz84lH1yp6BIirV7Ea%2F2tixfNLzfTvRkjKYjVBcwmMFDlAgFwkRnbl10rZFxZn%2F%2BRGQJpbrV9pOrcvYVA%2BdiQOLC7ow9WxrOXkSSaI%2BhrPOIAI0QWw9Ld6EM6bgxjsL6ddtAxHmhBW7rIkEhsJDIJy%2BlfNEof7zQQLkmLocO7E3tG%2BKRmwsvJNnnEIRcq%2BA7xIt0XGNmKarbrSVxf5hAeQbmyLcYqNv9%2FOo6L%2Fn%2FvT3%2BXuNCI6a0CwCfoybpDtO8JDC5piHe3q42vVKfggyxPz3MuOpV%2FVQd8RgQo7yIIrEtR62AR2VJLk5bWgGSl%2BDbLhAiWh39qdNYwFj908Svu6C9A7OZ94MtoPocuR5nl0lchltHPQnGUcK2CFhWklBOwqfWd1jqyrne3cQLA8QD0xc5AxmojiSQ%2FgPaS56xJUUr22ZO5MJLB4JZ%2FBOwyFFytx7felxbuv6dpQE27O%2BUcy9S9afb0E8vFO7F6nXL5%2FL6Q3PnvmbrACnKrBSUFuEUh3qUBHCQEq0phUYocw9P6FvwY6pgGnSF7sxpZEqiETUV3QRcTiFymxIkb1D5h8Ow1k0xGmpwwc4IZTQ3%2FlQxaERLWIwSjSy5fEfVt4WhgZsXqUdT%2FTLqYBYS8yFo41Wp3nxle9gnRlXoE2p5wJNB1RjQ%2FC6sK9DJfWyxkhWlDEjDDiFsWTshBHXQjJNcWRnzyLiM3A2QciPYGnwMR3MKcu8NmT117J02qxp2HIUW7xnjT0hek6O0Y0iL1m&X-Amz-Signature=e4c58ea532944cb6c2743862eee3fffe424a72cdb1e82942bc8bd3a7f7eeb8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWWBVAK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx4ZYOLT%2F2B7gzg%2FAeLR3w4oMqf2LHvby8WjQ4KmACNAiBr%2BvVWlQHhzShOxwmWb19FJJLMSWfxgMOia8EKhhzmRiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZb3iVnOa3zBRlPVKtwD33jU4M7%2BCLyqpOe%2B9crzozNhbjOlkEh%2B%2BWJMHRZPEgG33bWArzusAdOWEsrYwTkuad5omH97kRo8VSU583z9RqSLFe98vHLmhMIVPc%2FPVFYz84lH1yp6BIirV7Ea%2F2tixfNLzfTvRkjKYjVBcwmMFDlAgFwkRnbl10rZFxZn%2F%2BRGQJpbrV9pOrcvYVA%2BdiQOLC7ow9WxrOXkSSaI%2BhrPOIAI0QWw9Ld6EM6bgxjsL6ddtAxHmhBW7rIkEhsJDIJy%2BlfNEof7zQQLkmLocO7E3tG%2BKRmwsvJNnnEIRcq%2BA7xIt0XGNmKarbrSVxf5hAeQbmyLcYqNv9%2FOo6L%2Fn%2FvT3%2BXuNCI6a0CwCfoybpDtO8JDC5piHe3q42vVKfggyxPz3MuOpV%2FVQd8RgQo7yIIrEtR62AR2VJLk5bWgGSl%2BDbLhAiWh39qdNYwFj908Svu6C9A7OZ94MtoPocuR5nl0lchltHPQnGUcK2CFhWklBOwqfWd1jqyrne3cQLA8QD0xc5AxmojiSQ%2FgPaS56xJUUr22ZO5MJLB4JZ%2FBOwyFFytx7felxbuv6dpQE27O%2BUcy9S9afb0E8vFO7F6nXL5%2FL6Q3PnvmbrACnKrBSUFuEUh3qUBHCQEq0phUYocw9P6FvwY6pgGnSF7sxpZEqiETUV3QRcTiFymxIkb1D5h8Ow1k0xGmpwwc4IZTQ3%2FlQxaERLWIwSjSy5fEfVt4WhgZsXqUdT%2FTLqYBYS8yFo41Wp3nxle9gnRlXoE2p5wJNB1RjQ%2FC6sK9DJfWyxkhWlDEjDDiFsWTshBHXQjJNcWRnzyLiM3A2QciPYGnwMR3MKcu8NmT117J02qxp2HIUW7xnjT0hek6O0Y0iL1m&X-Amz-Signature=abb3514aa99ec38108ed1748796a9bfd4971475ba49df0623f05c8bc251c5934&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWWBVAK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx4ZYOLT%2F2B7gzg%2FAeLR3w4oMqf2LHvby8WjQ4KmACNAiBr%2BvVWlQHhzShOxwmWb19FJJLMSWfxgMOia8EKhhzmRiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZb3iVnOa3zBRlPVKtwD33jU4M7%2BCLyqpOe%2B9crzozNhbjOlkEh%2B%2BWJMHRZPEgG33bWArzusAdOWEsrYwTkuad5omH97kRo8VSU583z9RqSLFe98vHLmhMIVPc%2FPVFYz84lH1yp6BIirV7Ea%2F2tixfNLzfTvRkjKYjVBcwmMFDlAgFwkRnbl10rZFxZn%2F%2BRGQJpbrV9pOrcvYVA%2BdiQOLC7ow9WxrOXkSSaI%2BhrPOIAI0QWw9Ld6EM6bgxjsL6ddtAxHmhBW7rIkEhsJDIJy%2BlfNEof7zQQLkmLocO7E3tG%2BKRmwsvJNnnEIRcq%2BA7xIt0XGNmKarbrSVxf5hAeQbmyLcYqNv9%2FOo6L%2Fn%2FvT3%2BXuNCI6a0CwCfoybpDtO8JDC5piHe3q42vVKfggyxPz3MuOpV%2FVQd8RgQo7yIIrEtR62AR2VJLk5bWgGSl%2BDbLhAiWh39qdNYwFj908Svu6C9A7OZ94MtoPocuR5nl0lchltHPQnGUcK2CFhWklBOwqfWd1jqyrne3cQLA8QD0xc5AxmojiSQ%2FgPaS56xJUUr22ZO5MJLB4JZ%2FBOwyFFytx7felxbuv6dpQE27O%2BUcy9S9afb0E8vFO7F6nXL5%2FL6Q3PnvmbrACnKrBSUFuEUh3qUBHCQEq0phUYocw9P6FvwY6pgGnSF7sxpZEqiETUV3QRcTiFymxIkb1D5h8Ow1k0xGmpwwc4IZTQ3%2FlQxaERLWIwSjSy5fEfVt4WhgZsXqUdT%2FTLqYBYS8yFo41Wp3nxle9gnRlXoE2p5wJNB1RjQ%2FC6sK9DJfWyxkhWlDEjDDiFsWTshBHXQjJNcWRnzyLiM3A2QciPYGnwMR3MKcu8NmT117J02qxp2HIUW7xnjT0hek6O0Y0iL1m&X-Amz-Signature=cee5a5fa86d76feac3fa5253d5db0e41208ff4b4fdc332849159d4f7587851a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWWBVAK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx4ZYOLT%2F2B7gzg%2FAeLR3w4oMqf2LHvby8WjQ4KmACNAiBr%2BvVWlQHhzShOxwmWb19FJJLMSWfxgMOia8EKhhzmRiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZb3iVnOa3zBRlPVKtwD33jU4M7%2BCLyqpOe%2B9crzozNhbjOlkEh%2B%2BWJMHRZPEgG33bWArzusAdOWEsrYwTkuad5omH97kRo8VSU583z9RqSLFe98vHLmhMIVPc%2FPVFYz84lH1yp6BIirV7Ea%2F2tixfNLzfTvRkjKYjVBcwmMFDlAgFwkRnbl10rZFxZn%2F%2BRGQJpbrV9pOrcvYVA%2BdiQOLC7ow9WxrOXkSSaI%2BhrPOIAI0QWw9Ld6EM6bgxjsL6ddtAxHmhBW7rIkEhsJDIJy%2BlfNEof7zQQLkmLocO7E3tG%2BKRmwsvJNnnEIRcq%2BA7xIt0XGNmKarbrSVxf5hAeQbmyLcYqNv9%2FOo6L%2Fn%2FvT3%2BXuNCI6a0CwCfoybpDtO8JDC5piHe3q42vVKfggyxPz3MuOpV%2FVQd8RgQo7yIIrEtR62AR2VJLk5bWgGSl%2BDbLhAiWh39qdNYwFj908Svu6C9A7OZ94MtoPocuR5nl0lchltHPQnGUcK2CFhWklBOwqfWd1jqyrne3cQLA8QD0xc5AxmojiSQ%2FgPaS56xJUUr22ZO5MJLB4JZ%2FBOwyFFytx7felxbuv6dpQE27O%2BUcy9S9afb0E8vFO7F6nXL5%2FL6Q3PnvmbrACnKrBSUFuEUh3qUBHCQEq0phUYocw9P6FvwY6pgGnSF7sxpZEqiETUV3QRcTiFymxIkb1D5h8Ow1k0xGmpwwc4IZTQ3%2FlQxaERLWIwSjSy5fEfVt4WhgZsXqUdT%2FTLqYBYS8yFo41Wp3nxle9gnRlXoE2p5wJNB1RjQ%2FC6sK9DJfWyxkhWlDEjDDiFsWTshBHXQjJNcWRnzyLiM3A2QciPYGnwMR3MKcu8NmT117J02qxp2HIUW7xnjT0hek6O0Y0iL1m&X-Amz-Signature=d598981ac42910e84a1cc7d5897ff291e77eac2d8f3a24f99c7f3489e112fe6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWWBVAK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx4ZYOLT%2F2B7gzg%2FAeLR3w4oMqf2LHvby8WjQ4KmACNAiBr%2BvVWlQHhzShOxwmWb19FJJLMSWfxgMOia8EKhhzmRiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZb3iVnOa3zBRlPVKtwD33jU4M7%2BCLyqpOe%2B9crzozNhbjOlkEh%2B%2BWJMHRZPEgG33bWArzusAdOWEsrYwTkuad5omH97kRo8VSU583z9RqSLFe98vHLmhMIVPc%2FPVFYz84lH1yp6BIirV7Ea%2F2tixfNLzfTvRkjKYjVBcwmMFDlAgFwkRnbl10rZFxZn%2F%2BRGQJpbrV9pOrcvYVA%2BdiQOLC7ow9WxrOXkSSaI%2BhrPOIAI0QWw9Ld6EM6bgxjsL6ddtAxHmhBW7rIkEhsJDIJy%2BlfNEof7zQQLkmLocO7E3tG%2BKRmwsvJNnnEIRcq%2BA7xIt0XGNmKarbrSVxf5hAeQbmyLcYqNv9%2FOo6L%2Fn%2FvT3%2BXuNCI6a0CwCfoybpDtO8JDC5piHe3q42vVKfggyxPz3MuOpV%2FVQd8RgQo7yIIrEtR62AR2VJLk5bWgGSl%2BDbLhAiWh39qdNYwFj908Svu6C9A7OZ94MtoPocuR5nl0lchltHPQnGUcK2CFhWklBOwqfWd1jqyrne3cQLA8QD0xc5AxmojiSQ%2FgPaS56xJUUr22ZO5MJLB4JZ%2FBOwyFFytx7felxbuv6dpQE27O%2BUcy9S9afb0E8vFO7F6nXL5%2FL6Q3PnvmbrACnKrBSUFuEUh3qUBHCQEq0phUYocw9P6FvwY6pgGnSF7sxpZEqiETUV3QRcTiFymxIkb1D5h8Ow1k0xGmpwwc4IZTQ3%2FlQxaERLWIwSjSy5fEfVt4WhgZsXqUdT%2FTLqYBYS8yFo41Wp3nxle9gnRlXoE2p5wJNB1RjQ%2FC6sK9DJfWyxkhWlDEjDDiFsWTshBHXQjJNcWRnzyLiM3A2QciPYGnwMR3MKcu8NmT117J02qxp2HIUW7xnjT0hek6O0Y0iL1m&X-Amz-Signature=728529260341c8056472101a22af72d2592be6d349cfe64a027a066087ff3f33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSWWBVAK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx4ZYOLT%2F2B7gzg%2FAeLR3w4oMqf2LHvby8WjQ4KmACNAiBr%2BvVWlQHhzShOxwmWb19FJJLMSWfxgMOia8EKhhzmRiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUZb3iVnOa3zBRlPVKtwD33jU4M7%2BCLyqpOe%2B9crzozNhbjOlkEh%2B%2BWJMHRZPEgG33bWArzusAdOWEsrYwTkuad5omH97kRo8VSU583z9RqSLFe98vHLmhMIVPc%2FPVFYz84lH1yp6BIirV7Ea%2F2tixfNLzfTvRkjKYjVBcwmMFDlAgFwkRnbl10rZFxZn%2F%2BRGQJpbrV9pOrcvYVA%2BdiQOLC7ow9WxrOXkSSaI%2BhrPOIAI0QWw9Ld6EM6bgxjsL6ddtAxHmhBW7rIkEhsJDIJy%2BlfNEof7zQQLkmLocO7E3tG%2BKRmwsvJNnnEIRcq%2BA7xIt0XGNmKarbrSVxf5hAeQbmyLcYqNv9%2FOo6L%2Fn%2FvT3%2BXuNCI6a0CwCfoybpDtO8JDC5piHe3q42vVKfggyxPz3MuOpV%2FVQd8RgQo7yIIrEtR62AR2VJLk5bWgGSl%2BDbLhAiWh39qdNYwFj908Svu6C9A7OZ94MtoPocuR5nl0lchltHPQnGUcK2CFhWklBOwqfWd1jqyrne3cQLA8QD0xc5AxmojiSQ%2FgPaS56xJUUr22ZO5MJLB4JZ%2FBOwyFFytx7felxbuv6dpQE27O%2BUcy9S9afb0E8vFO7F6nXL5%2FL6Q3PnvmbrACnKrBSUFuEUh3qUBHCQEq0phUYocw9P6FvwY6pgGnSF7sxpZEqiETUV3QRcTiFymxIkb1D5h8Ow1k0xGmpwwc4IZTQ3%2FlQxaERLWIwSjSy5fEfVt4WhgZsXqUdT%2FTLqYBYS8yFo41Wp3nxle9gnRlXoE2p5wJNB1RjQ%2FC6sK9DJfWyxkhWlDEjDDiFsWTshBHXQjJNcWRnzyLiM3A2QciPYGnwMR3MKcu8NmT117J02qxp2HIUW7xnjT0hek6O0Y0iL1m&X-Amz-Signature=b17579926ebed29397851b45d97e12af517f3b1cafb74a1664415e04dfe02e15&X-Amz-SignedHeaders=host&x-id=GetObject)
