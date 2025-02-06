---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQHGDSO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCNux7egiNy9hSzZTWgAKijFF9rAh7etUj1ziQ1%2F%2FGARAIgBf7Y7Boan4lIbMAtN%2BTlj4Eg5asJHCqiWTLKZqozhjYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL5tqN4KAGgAr4d%2FrircA2slLjLEGARs3yG2KAgeM9QOYzDKx5YPap8fw3yrijyi700xlyiAHPp%2BrArrb%2FAkXyz%2B3b2GD480T%2BYk8kDDgvJVLQW0n7gG%2BIdcSelm7NNP8zApl7eyRMxhG2VXTB8mnIPIYxUxCREQercduUENxqBJpXPTn0Fd9B5Ac82fQQ%2BfJBCIqx0G1qbr2wQuJuGpwfs%2FaviSL6SxalJDq0qRGQaGRkC0qmg4H2CkaNhgEWMjeeyfCn3oJ1E7H9XF3iQ7iEccOBKgsIXLBjzA9ZTzNnHnng%2Bm6OhKCLLO7isvJfWwneiApLqchyBUMMWPu6OuR%2BrGL6VklOH24uKB1dT6j1EwaBuPI2ALcEl6g5diS8Bz1C%2BN4NTKz7YAup4Ij0JuSjyP9QVUXzvvNUXMleSO8RBMKCxaMEVlWq6gOPeq0AFWfBJqr2DxZ4hxRZnXcZozHInn%2FIvcqksFGLNvSOaS19g7dVIHTgC0J8ClaNHgekLFzpWp8EyFcn%2FUwF9HMFVNAtatSei70QqEYN51%2FrWIDc1%2BbRnfAU0YB8jYw8nreXNOay9WsC0TrIudLDaHbaDpwGv5hAW3oWD3VjRQDH0z%2FSjXBjhfaXDJ%2Fi1yHewY71gMSDYoJ0pNZMaBcx7DMOnSk70GOqUBRaMr%2B2pOkrdUQLzXUm0wT0goc2fODxSRLFZlWb5vF2s2mEU32i1%2F2MunWDRFWktTdmnsWgfWzMxJ50hfu2nyRQvGE9pJriCKOSlmhWh8XQMUR%2F6VjxJ%2B%2FtodTPPHJvvzy%2Fown0trSZONyXJR3kjnT2FIEnx3kUC%2BwZWEvvoROh%2Bfo3JbJQrtCUxlwNg%2FpnoGCVWTY8VTePZa6cbxENM3a2KiNer0&X-Amz-Signature=d30ec2cfba82e974bfda001e7de823c48a827663117b6a1a960aa31cdf1f60a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQHGDSO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCNux7egiNy9hSzZTWgAKijFF9rAh7etUj1ziQ1%2F%2FGARAIgBf7Y7Boan4lIbMAtN%2BTlj4Eg5asJHCqiWTLKZqozhjYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL5tqN4KAGgAr4d%2FrircA2slLjLEGARs3yG2KAgeM9QOYzDKx5YPap8fw3yrijyi700xlyiAHPp%2BrArrb%2FAkXyz%2B3b2GD480T%2BYk8kDDgvJVLQW0n7gG%2BIdcSelm7NNP8zApl7eyRMxhG2VXTB8mnIPIYxUxCREQercduUENxqBJpXPTn0Fd9B5Ac82fQQ%2BfJBCIqx0G1qbr2wQuJuGpwfs%2FaviSL6SxalJDq0qRGQaGRkC0qmg4H2CkaNhgEWMjeeyfCn3oJ1E7H9XF3iQ7iEccOBKgsIXLBjzA9ZTzNnHnng%2Bm6OhKCLLO7isvJfWwneiApLqchyBUMMWPu6OuR%2BrGL6VklOH24uKB1dT6j1EwaBuPI2ALcEl6g5diS8Bz1C%2BN4NTKz7YAup4Ij0JuSjyP9QVUXzvvNUXMleSO8RBMKCxaMEVlWq6gOPeq0AFWfBJqr2DxZ4hxRZnXcZozHInn%2FIvcqksFGLNvSOaS19g7dVIHTgC0J8ClaNHgekLFzpWp8EyFcn%2FUwF9HMFVNAtatSei70QqEYN51%2FrWIDc1%2BbRnfAU0YB8jYw8nreXNOay9WsC0TrIudLDaHbaDpwGv5hAW3oWD3VjRQDH0z%2FSjXBjhfaXDJ%2Fi1yHewY71gMSDYoJ0pNZMaBcx7DMOnSk70GOqUBRaMr%2B2pOkrdUQLzXUm0wT0goc2fODxSRLFZlWb5vF2s2mEU32i1%2F2MunWDRFWktTdmnsWgfWzMxJ50hfu2nyRQvGE9pJriCKOSlmhWh8XQMUR%2F6VjxJ%2B%2FtodTPPHJvvzy%2Fown0trSZONyXJR3kjnT2FIEnx3kUC%2BwZWEvvoROh%2Bfo3JbJQrtCUxlwNg%2FpnoGCVWTY8VTePZa6cbxENM3a2KiNer0&X-Amz-Signature=0d2cb535c1dbce4ada43ce585e132d1177c870c3594344e51be5824db9439f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQHGDSO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCNux7egiNy9hSzZTWgAKijFF9rAh7etUj1ziQ1%2F%2FGARAIgBf7Y7Boan4lIbMAtN%2BTlj4Eg5asJHCqiWTLKZqozhjYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL5tqN4KAGgAr4d%2FrircA2slLjLEGARs3yG2KAgeM9QOYzDKx5YPap8fw3yrijyi700xlyiAHPp%2BrArrb%2FAkXyz%2B3b2GD480T%2BYk8kDDgvJVLQW0n7gG%2BIdcSelm7NNP8zApl7eyRMxhG2VXTB8mnIPIYxUxCREQercduUENxqBJpXPTn0Fd9B5Ac82fQQ%2BfJBCIqx0G1qbr2wQuJuGpwfs%2FaviSL6SxalJDq0qRGQaGRkC0qmg4H2CkaNhgEWMjeeyfCn3oJ1E7H9XF3iQ7iEccOBKgsIXLBjzA9ZTzNnHnng%2Bm6OhKCLLO7isvJfWwneiApLqchyBUMMWPu6OuR%2BrGL6VklOH24uKB1dT6j1EwaBuPI2ALcEl6g5diS8Bz1C%2BN4NTKz7YAup4Ij0JuSjyP9QVUXzvvNUXMleSO8RBMKCxaMEVlWq6gOPeq0AFWfBJqr2DxZ4hxRZnXcZozHInn%2FIvcqksFGLNvSOaS19g7dVIHTgC0J8ClaNHgekLFzpWp8EyFcn%2FUwF9HMFVNAtatSei70QqEYN51%2FrWIDc1%2BbRnfAU0YB8jYw8nreXNOay9WsC0TrIudLDaHbaDpwGv5hAW3oWD3VjRQDH0z%2FSjXBjhfaXDJ%2Fi1yHewY71gMSDYoJ0pNZMaBcx7DMOnSk70GOqUBRaMr%2B2pOkrdUQLzXUm0wT0goc2fODxSRLFZlWb5vF2s2mEU32i1%2F2MunWDRFWktTdmnsWgfWzMxJ50hfu2nyRQvGE9pJriCKOSlmhWh8XQMUR%2F6VjxJ%2B%2FtodTPPHJvvzy%2Fown0trSZONyXJR3kjnT2FIEnx3kUC%2BwZWEvvoROh%2Bfo3JbJQrtCUxlwNg%2FpnoGCVWTY8VTePZa6cbxENM3a2KiNer0&X-Amz-Signature=4deb1f769168ba6c0b9b4a7115d4409eabba566a211ef0b440f0cd9ef7fd7095&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQHGDSO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCNux7egiNy9hSzZTWgAKijFF9rAh7etUj1ziQ1%2F%2FGARAIgBf7Y7Boan4lIbMAtN%2BTlj4Eg5asJHCqiWTLKZqozhjYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL5tqN4KAGgAr4d%2FrircA2slLjLEGARs3yG2KAgeM9QOYzDKx5YPap8fw3yrijyi700xlyiAHPp%2BrArrb%2FAkXyz%2B3b2GD480T%2BYk8kDDgvJVLQW0n7gG%2BIdcSelm7NNP8zApl7eyRMxhG2VXTB8mnIPIYxUxCREQercduUENxqBJpXPTn0Fd9B5Ac82fQQ%2BfJBCIqx0G1qbr2wQuJuGpwfs%2FaviSL6SxalJDq0qRGQaGRkC0qmg4H2CkaNhgEWMjeeyfCn3oJ1E7H9XF3iQ7iEccOBKgsIXLBjzA9ZTzNnHnng%2Bm6OhKCLLO7isvJfWwneiApLqchyBUMMWPu6OuR%2BrGL6VklOH24uKB1dT6j1EwaBuPI2ALcEl6g5diS8Bz1C%2BN4NTKz7YAup4Ij0JuSjyP9QVUXzvvNUXMleSO8RBMKCxaMEVlWq6gOPeq0AFWfBJqr2DxZ4hxRZnXcZozHInn%2FIvcqksFGLNvSOaS19g7dVIHTgC0J8ClaNHgekLFzpWp8EyFcn%2FUwF9HMFVNAtatSei70QqEYN51%2FrWIDc1%2BbRnfAU0YB8jYw8nreXNOay9WsC0TrIudLDaHbaDpwGv5hAW3oWD3VjRQDH0z%2FSjXBjhfaXDJ%2Fi1yHewY71gMSDYoJ0pNZMaBcx7DMOnSk70GOqUBRaMr%2B2pOkrdUQLzXUm0wT0goc2fODxSRLFZlWb5vF2s2mEU32i1%2F2MunWDRFWktTdmnsWgfWzMxJ50hfu2nyRQvGE9pJriCKOSlmhWh8XQMUR%2F6VjxJ%2B%2FtodTPPHJvvzy%2Fown0trSZONyXJR3kjnT2FIEnx3kUC%2BwZWEvvoROh%2Bfo3JbJQrtCUxlwNg%2FpnoGCVWTY8VTePZa6cbxENM3a2KiNer0&X-Amz-Signature=0b28fe644da080c16f65fcac1d8176f4e5d22772eb8903167a82ec3b2334b822&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQHGDSO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCNux7egiNy9hSzZTWgAKijFF9rAh7etUj1ziQ1%2F%2FGARAIgBf7Y7Boan4lIbMAtN%2BTlj4Eg5asJHCqiWTLKZqozhjYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL5tqN4KAGgAr4d%2FrircA2slLjLEGARs3yG2KAgeM9QOYzDKx5YPap8fw3yrijyi700xlyiAHPp%2BrArrb%2FAkXyz%2B3b2GD480T%2BYk8kDDgvJVLQW0n7gG%2BIdcSelm7NNP8zApl7eyRMxhG2VXTB8mnIPIYxUxCREQercduUENxqBJpXPTn0Fd9B5Ac82fQQ%2BfJBCIqx0G1qbr2wQuJuGpwfs%2FaviSL6SxalJDq0qRGQaGRkC0qmg4H2CkaNhgEWMjeeyfCn3oJ1E7H9XF3iQ7iEccOBKgsIXLBjzA9ZTzNnHnng%2Bm6OhKCLLO7isvJfWwneiApLqchyBUMMWPu6OuR%2BrGL6VklOH24uKB1dT6j1EwaBuPI2ALcEl6g5diS8Bz1C%2BN4NTKz7YAup4Ij0JuSjyP9QVUXzvvNUXMleSO8RBMKCxaMEVlWq6gOPeq0AFWfBJqr2DxZ4hxRZnXcZozHInn%2FIvcqksFGLNvSOaS19g7dVIHTgC0J8ClaNHgekLFzpWp8EyFcn%2FUwF9HMFVNAtatSei70QqEYN51%2FrWIDc1%2BbRnfAU0YB8jYw8nreXNOay9WsC0TrIudLDaHbaDpwGv5hAW3oWD3VjRQDH0z%2FSjXBjhfaXDJ%2Fi1yHewY71gMSDYoJ0pNZMaBcx7DMOnSk70GOqUBRaMr%2B2pOkrdUQLzXUm0wT0goc2fODxSRLFZlWb5vF2s2mEU32i1%2F2MunWDRFWktTdmnsWgfWzMxJ50hfu2nyRQvGE9pJriCKOSlmhWh8XQMUR%2F6VjxJ%2B%2FtodTPPHJvvzy%2Fown0trSZONyXJR3kjnT2FIEnx3kUC%2BwZWEvvoROh%2Bfo3JbJQrtCUxlwNg%2FpnoGCVWTY8VTePZa6cbxENM3a2KiNer0&X-Amz-Signature=172a50e371b542810472ab3dc1b914391fb33462bfeada68fe64cdc2d5bb7d70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQHGDSO%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCNux7egiNy9hSzZTWgAKijFF9rAh7etUj1ziQ1%2F%2FGARAIgBf7Y7Boan4lIbMAtN%2BTlj4Eg5asJHCqiWTLKZqozhjYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDL5tqN4KAGgAr4d%2FrircA2slLjLEGARs3yG2KAgeM9QOYzDKx5YPap8fw3yrijyi700xlyiAHPp%2BrArrb%2FAkXyz%2B3b2GD480T%2BYk8kDDgvJVLQW0n7gG%2BIdcSelm7NNP8zApl7eyRMxhG2VXTB8mnIPIYxUxCREQercduUENxqBJpXPTn0Fd9B5Ac82fQQ%2BfJBCIqx0G1qbr2wQuJuGpwfs%2FaviSL6SxalJDq0qRGQaGRkC0qmg4H2CkaNhgEWMjeeyfCn3oJ1E7H9XF3iQ7iEccOBKgsIXLBjzA9ZTzNnHnng%2Bm6OhKCLLO7isvJfWwneiApLqchyBUMMWPu6OuR%2BrGL6VklOH24uKB1dT6j1EwaBuPI2ALcEl6g5diS8Bz1C%2BN4NTKz7YAup4Ij0JuSjyP9QVUXzvvNUXMleSO8RBMKCxaMEVlWq6gOPeq0AFWfBJqr2DxZ4hxRZnXcZozHInn%2FIvcqksFGLNvSOaS19g7dVIHTgC0J8ClaNHgekLFzpWp8EyFcn%2FUwF9HMFVNAtatSei70QqEYN51%2FrWIDc1%2BbRnfAU0YB8jYw8nreXNOay9WsC0TrIudLDaHbaDpwGv5hAW3oWD3VjRQDH0z%2FSjXBjhfaXDJ%2Fi1yHewY71gMSDYoJ0pNZMaBcx7DMOnSk70GOqUBRaMr%2B2pOkrdUQLzXUm0wT0goc2fODxSRLFZlWb5vF2s2mEU32i1%2F2MunWDRFWktTdmnsWgfWzMxJ50hfu2nyRQvGE9pJriCKOSlmhWh8XQMUR%2F6VjxJ%2B%2FtodTPPHJvvzy%2Fown0trSZONyXJR3kjnT2FIEnx3kUC%2BwZWEvvoROh%2Bfo3JbJQrtCUxlwNg%2FpnoGCVWTY8VTePZa6cbxENM3a2KiNer0&X-Amz-Signature=00a8bfa7cb6f8a1d05bdf2a043410199ce3fdfffc26edb1a5eb5a047eba7c06d&X-Amz-SignedHeaders=host&x-id=GetObject)
