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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWH4T4W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2F%2BYH24wGWsg7oCyE3sELqm2O%2FOQdGc2oiW1%2FbTRm%2BAIhAICPBY8zYaLPQlqs%2FdislwfVLVsOBrtKYSM2iIaIuVYcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQMejyj3KOIjlzAxkq3AObqW390iNuMZu5ULbH485%2BDrhl6BYa%2B7vVTNistNNabu4O%2F3cIy6A8DvUcXeRguJn727LG4NRQB4QwN%2Fj4UVWGxfo6rDI7nCF5%2BByDIYHvPrVEscqFc3vzHeuXfJnhJ%2F1rdxvIfYz0EBt4zGaTKmXo2tWLhzb6dx9vqfDWQkqt6DCg3sZvlXd7scBBE1jLyOsBAiyl4%2BPy9IO5OAW64qb8pC93JFCtsuHqmUu%2BsqKTIfvFIuShpSTSTkJun2uUAhGeZassJ%2FUla8tg3sxrwIk9AoyB2R9XuwVvrByhbU5rLMzET2HXVacyJndajCU8aJEgtULz3YNSUMIssIwlIedqNoq2S1urRQdcBRGk%2BQWChwlAkC0%2F5l2tYzDwyYg9cP16uzaXM%2FZOW0mMgky%2BP4a%2FJRU%2BfiZVpZpZ89Ef2zYmK1MAxm49sEDs0Wsc%2FAcVPOi%2BIBFWFqpw4bVqbdgw3M52%2BcHSl%2Fo8XNOX2XVrJd1sl1lltm%2BQ0pYUpXFAOpQQEFhGWIK2IsIDqp%2Fyty71VFMT5tPh361TaSK2xYR7ojE8g4xTx%2BM%2BlundVv%2BFECHjHoghYsvTn9vpntzC7i9Ic2AhyqMD5TJ38XFz0TX4IHgKGfXQZF5b88mGl7iiSTD6lrm%2FBjqkAZF08ciFhpvq7BlrH2Pj7w2rJltHTBprK1kCYnH0hXW3wyCzP%2Fqa%2BOKu6mkP7XbX0lbuMlYJT3nlilaRdKOYDFE9XLKwO3JdUl0tSG%2BdwOTiQjNrzcXkO5hJD8aR928H2oP1dcHtfM1LCR1mRWjRnwIAgvrLncF%2FKAd%2FtbpYLxhxIoYubXzOzpjwX28lor7%2B3QU61CyGIyFvmufXNzGrOtTR5LPD&X-Amz-Signature=4089c8f2990c73445cae7c04f606c4f347b74570733af31314933733103dfa5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWH4T4W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2F%2BYH24wGWsg7oCyE3sELqm2O%2FOQdGc2oiW1%2FbTRm%2BAIhAICPBY8zYaLPQlqs%2FdislwfVLVsOBrtKYSM2iIaIuVYcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQMejyj3KOIjlzAxkq3AObqW390iNuMZu5ULbH485%2BDrhl6BYa%2B7vVTNistNNabu4O%2F3cIy6A8DvUcXeRguJn727LG4NRQB4QwN%2Fj4UVWGxfo6rDI7nCF5%2BByDIYHvPrVEscqFc3vzHeuXfJnhJ%2F1rdxvIfYz0EBt4zGaTKmXo2tWLhzb6dx9vqfDWQkqt6DCg3sZvlXd7scBBE1jLyOsBAiyl4%2BPy9IO5OAW64qb8pC93JFCtsuHqmUu%2BsqKTIfvFIuShpSTSTkJun2uUAhGeZassJ%2FUla8tg3sxrwIk9AoyB2R9XuwVvrByhbU5rLMzET2HXVacyJndajCU8aJEgtULz3YNSUMIssIwlIedqNoq2S1urRQdcBRGk%2BQWChwlAkC0%2F5l2tYzDwyYg9cP16uzaXM%2FZOW0mMgky%2BP4a%2FJRU%2BfiZVpZpZ89Ef2zYmK1MAxm49sEDs0Wsc%2FAcVPOi%2BIBFWFqpw4bVqbdgw3M52%2BcHSl%2Fo8XNOX2XVrJd1sl1lltm%2BQ0pYUpXFAOpQQEFhGWIK2IsIDqp%2Fyty71VFMT5tPh361TaSK2xYR7ojE8g4xTx%2BM%2BlundVv%2BFECHjHoghYsvTn9vpntzC7i9Ic2AhyqMD5TJ38XFz0TX4IHgKGfXQZF5b88mGl7iiSTD6lrm%2FBjqkAZF08ciFhpvq7BlrH2Pj7w2rJltHTBprK1kCYnH0hXW3wyCzP%2Fqa%2BOKu6mkP7XbX0lbuMlYJT3nlilaRdKOYDFE9XLKwO3JdUl0tSG%2BdwOTiQjNrzcXkO5hJD8aR928H2oP1dcHtfM1LCR1mRWjRnwIAgvrLncF%2FKAd%2FtbpYLxhxIoYubXzOzpjwX28lor7%2B3QU61CyGIyFvmufXNzGrOtTR5LPD&X-Amz-Signature=e4d7bc56ced6fb3b79bcf8f71f6c740e6509c65b909765604336463e56b15e96&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWH4T4W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2F%2BYH24wGWsg7oCyE3sELqm2O%2FOQdGc2oiW1%2FbTRm%2BAIhAICPBY8zYaLPQlqs%2FdislwfVLVsOBrtKYSM2iIaIuVYcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQMejyj3KOIjlzAxkq3AObqW390iNuMZu5ULbH485%2BDrhl6BYa%2B7vVTNistNNabu4O%2F3cIy6A8DvUcXeRguJn727LG4NRQB4QwN%2Fj4UVWGxfo6rDI7nCF5%2BByDIYHvPrVEscqFc3vzHeuXfJnhJ%2F1rdxvIfYz0EBt4zGaTKmXo2tWLhzb6dx9vqfDWQkqt6DCg3sZvlXd7scBBE1jLyOsBAiyl4%2BPy9IO5OAW64qb8pC93JFCtsuHqmUu%2BsqKTIfvFIuShpSTSTkJun2uUAhGeZassJ%2FUla8tg3sxrwIk9AoyB2R9XuwVvrByhbU5rLMzET2HXVacyJndajCU8aJEgtULz3YNSUMIssIwlIedqNoq2S1urRQdcBRGk%2BQWChwlAkC0%2F5l2tYzDwyYg9cP16uzaXM%2FZOW0mMgky%2BP4a%2FJRU%2BfiZVpZpZ89Ef2zYmK1MAxm49sEDs0Wsc%2FAcVPOi%2BIBFWFqpw4bVqbdgw3M52%2BcHSl%2Fo8XNOX2XVrJd1sl1lltm%2BQ0pYUpXFAOpQQEFhGWIK2IsIDqp%2Fyty71VFMT5tPh361TaSK2xYR7ojE8g4xTx%2BM%2BlundVv%2BFECHjHoghYsvTn9vpntzC7i9Ic2AhyqMD5TJ38XFz0TX4IHgKGfXQZF5b88mGl7iiSTD6lrm%2FBjqkAZF08ciFhpvq7BlrH2Pj7w2rJltHTBprK1kCYnH0hXW3wyCzP%2Fqa%2BOKu6mkP7XbX0lbuMlYJT3nlilaRdKOYDFE9XLKwO3JdUl0tSG%2BdwOTiQjNrzcXkO5hJD8aR928H2oP1dcHtfM1LCR1mRWjRnwIAgvrLncF%2FKAd%2FtbpYLxhxIoYubXzOzpjwX28lor7%2B3QU61CyGIyFvmufXNzGrOtTR5LPD&X-Amz-Signature=c0dea54b880346b229834e1fd7618f1015b1013940f5b66ec0e344605b322313&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWH4T4W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2F%2BYH24wGWsg7oCyE3sELqm2O%2FOQdGc2oiW1%2FbTRm%2BAIhAICPBY8zYaLPQlqs%2FdislwfVLVsOBrtKYSM2iIaIuVYcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQMejyj3KOIjlzAxkq3AObqW390iNuMZu5ULbH485%2BDrhl6BYa%2B7vVTNistNNabu4O%2F3cIy6A8DvUcXeRguJn727LG4NRQB4QwN%2Fj4UVWGxfo6rDI7nCF5%2BByDIYHvPrVEscqFc3vzHeuXfJnhJ%2F1rdxvIfYz0EBt4zGaTKmXo2tWLhzb6dx9vqfDWQkqt6DCg3sZvlXd7scBBE1jLyOsBAiyl4%2BPy9IO5OAW64qb8pC93JFCtsuHqmUu%2BsqKTIfvFIuShpSTSTkJun2uUAhGeZassJ%2FUla8tg3sxrwIk9AoyB2R9XuwVvrByhbU5rLMzET2HXVacyJndajCU8aJEgtULz3YNSUMIssIwlIedqNoq2S1urRQdcBRGk%2BQWChwlAkC0%2F5l2tYzDwyYg9cP16uzaXM%2FZOW0mMgky%2BP4a%2FJRU%2BfiZVpZpZ89Ef2zYmK1MAxm49sEDs0Wsc%2FAcVPOi%2BIBFWFqpw4bVqbdgw3M52%2BcHSl%2Fo8XNOX2XVrJd1sl1lltm%2BQ0pYUpXFAOpQQEFhGWIK2IsIDqp%2Fyty71VFMT5tPh361TaSK2xYR7ojE8g4xTx%2BM%2BlundVv%2BFECHjHoghYsvTn9vpntzC7i9Ic2AhyqMD5TJ38XFz0TX4IHgKGfXQZF5b88mGl7iiSTD6lrm%2FBjqkAZF08ciFhpvq7BlrH2Pj7w2rJltHTBprK1kCYnH0hXW3wyCzP%2Fqa%2BOKu6mkP7XbX0lbuMlYJT3nlilaRdKOYDFE9XLKwO3JdUl0tSG%2BdwOTiQjNrzcXkO5hJD8aR928H2oP1dcHtfM1LCR1mRWjRnwIAgvrLncF%2FKAd%2FtbpYLxhxIoYubXzOzpjwX28lor7%2B3QU61CyGIyFvmufXNzGrOtTR5LPD&X-Amz-Signature=e9ddb00a1f5df517a6e58e5b0801c7d6e0ab5ed518c592b080a96cf40bb3b3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWH4T4W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2F%2BYH24wGWsg7oCyE3sELqm2O%2FOQdGc2oiW1%2FbTRm%2BAIhAICPBY8zYaLPQlqs%2FdislwfVLVsOBrtKYSM2iIaIuVYcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQMejyj3KOIjlzAxkq3AObqW390iNuMZu5ULbH485%2BDrhl6BYa%2B7vVTNistNNabu4O%2F3cIy6A8DvUcXeRguJn727LG4NRQB4QwN%2Fj4UVWGxfo6rDI7nCF5%2BByDIYHvPrVEscqFc3vzHeuXfJnhJ%2F1rdxvIfYz0EBt4zGaTKmXo2tWLhzb6dx9vqfDWQkqt6DCg3sZvlXd7scBBE1jLyOsBAiyl4%2BPy9IO5OAW64qb8pC93JFCtsuHqmUu%2BsqKTIfvFIuShpSTSTkJun2uUAhGeZassJ%2FUla8tg3sxrwIk9AoyB2R9XuwVvrByhbU5rLMzET2HXVacyJndajCU8aJEgtULz3YNSUMIssIwlIedqNoq2S1urRQdcBRGk%2BQWChwlAkC0%2F5l2tYzDwyYg9cP16uzaXM%2FZOW0mMgky%2BP4a%2FJRU%2BfiZVpZpZ89Ef2zYmK1MAxm49sEDs0Wsc%2FAcVPOi%2BIBFWFqpw4bVqbdgw3M52%2BcHSl%2Fo8XNOX2XVrJd1sl1lltm%2BQ0pYUpXFAOpQQEFhGWIK2IsIDqp%2Fyty71VFMT5tPh361TaSK2xYR7ojE8g4xTx%2BM%2BlundVv%2BFECHjHoghYsvTn9vpntzC7i9Ic2AhyqMD5TJ38XFz0TX4IHgKGfXQZF5b88mGl7iiSTD6lrm%2FBjqkAZF08ciFhpvq7BlrH2Pj7w2rJltHTBprK1kCYnH0hXW3wyCzP%2Fqa%2BOKu6mkP7XbX0lbuMlYJT3nlilaRdKOYDFE9XLKwO3JdUl0tSG%2BdwOTiQjNrzcXkO5hJD8aR928H2oP1dcHtfM1LCR1mRWjRnwIAgvrLncF%2FKAd%2FtbpYLxhxIoYubXzOzpjwX28lor7%2B3QU61CyGIyFvmufXNzGrOtTR5LPD&X-Amz-Signature=c8cfa225b188f1c0dd1b090fb006fdce8de5946505edc775e683c84fa4da6266&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWH4T4W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2F%2BYH24wGWsg7oCyE3sELqm2O%2FOQdGc2oiW1%2FbTRm%2BAIhAICPBY8zYaLPQlqs%2FdislwfVLVsOBrtKYSM2iIaIuVYcKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQMejyj3KOIjlzAxkq3AObqW390iNuMZu5ULbH485%2BDrhl6BYa%2B7vVTNistNNabu4O%2F3cIy6A8DvUcXeRguJn727LG4NRQB4QwN%2Fj4UVWGxfo6rDI7nCF5%2BByDIYHvPrVEscqFc3vzHeuXfJnhJ%2F1rdxvIfYz0EBt4zGaTKmXo2tWLhzb6dx9vqfDWQkqt6DCg3sZvlXd7scBBE1jLyOsBAiyl4%2BPy9IO5OAW64qb8pC93JFCtsuHqmUu%2BsqKTIfvFIuShpSTSTkJun2uUAhGeZassJ%2FUla8tg3sxrwIk9AoyB2R9XuwVvrByhbU5rLMzET2HXVacyJndajCU8aJEgtULz3YNSUMIssIwlIedqNoq2S1urRQdcBRGk%2BQWChwlAkC0%2F5l2tYzDwyYg9cP16uzaXM%2FZOW0mMgky%2BP4a%2FJRU%2BfiZVpZpZ89Ef2zYmK1MAxm49sEDs0Wsc%2FAcVPOi%2BIBFWFqpw4bVqbdgw3M52%2BcHSl%2Fo8XNOX2XVrJd1sl1lltm%2BQ0pYUpXFAOpQQEFhGWIK2IsIDqp%2Fyty71VFMT5tPh361TaSK2xYR7ojE8g4xTx%2BM%2BlundVv%2BFECHjHoghYsvTn9vpntzC7i9Ic2AhyqMD5TJ38XFz0TX4IHgKGfXQZF5b88mGl7iiSTD6lrm%2FBjqkAZF08ciFhpvq7BlrH2Pj7w2rJltHTBprK1kCYnH0hXW3wyCzP%2Fqa%2BOKu6mkP7XbX0lbuMlYJT3nlilaRdKOYDFE9XLKwO3JdUl0tSG%2BdwOTiQjNrzcXkO5hJD8aR928H2oP1dcHtfM1LCR1mRWjRnwIAgvrLncF%2FKAd%2FtbpYLxhxIoYubXzOzpjwX28lor7%2B3QU61CyGIyFvmufXNzGrOtTR5LPD&X-Amz-Signature=dbbda1120b6e56ed0ff2fc263599d0c3e8a007dbe8e4aa60fd562a72a90fca78&X-Amz-SignedHeaders=host&x-id=GetObject)
