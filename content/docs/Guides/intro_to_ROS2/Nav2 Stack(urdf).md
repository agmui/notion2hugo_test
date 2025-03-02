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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCT52PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGtKQvNF15yEbQyhG%2FYoqmDDtwF8OB%2Fo11OhHJbvNQM%2BAiAixCoEnSZ%2B3EsLDYx%2Fe8qyqqnT7jUU%2FM9WOXvra2UPKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKf7cpC5mvLnoUAUKtwDQ1sZhjDoNxskKZAkjZg3SNqOX%2FFrwIf86g8FIzRHejEzmszlYDUvwI5DUQT20nhxqQQyeheHh3xrHKL81xEZRsFwEa6LnoCSuJZwgZqiYAghcH7AVC%2FbPPNbDdELektu6mmyBMEgRLFbPfYNeKH8pnNT%2B%2FDqaWcJ6zbtmpB2ZtAGz944NIBhfE2Jj3KnXFfSIZ5x7fwsl2YhUa6akb75uSDYLYE4daWV%2FQiyFjTxZVjQNEVYXR9CibBY525A7S3ZzHWku%2F83a3nNsoCp6gv3uQBjYXLDeiLEiGBRReKcoMCJKUV475mMgJPObsCgkAWTt1xL6%2FjMFlxS8cC9mRazLl%2BjNbvf7uyLWs%2BBzDRwhCDbpsh46I33xO2g5YnMG%2BeHBG%2F4TH2U7RwH5%2BItTrOiVvrv2jbr5J8z%2BgGAOBIGAf%2FZUtzD7oBDfg8pC6MY3Xz07ykzw%2FtOCd4LZW814fZLFirHivzeW5hDDiLGVdRtaPbHFXzX4hJbmwN4zE2EHa4o1FQio%2FIlOV2LHlt8fDcPVeAq1RN%2FazwJvLvR%2FOji9kh82DCiS1vH5AhDjOTX33DLSaTFkWpioUJfjT8%2B1OxdAwhBqYIPxssNcJWkAmdAYpgH64DbIDYPgtxy%2Bigw4biOvgY6pgFlsc9WUozdXMwpP7Z%2BZ3VP0zvm%2BnksNYJkB0idr8IFRqZudl5ogPM1ORD7FeSe%2FaXXvyJgpX%2BPlVN8b7KQREIaQg50nKcn4sKw8C4tJpbvWD5ATtcrc3ONpQyzRSSNAGUyEfmABC%2FBFtLQDrm9hZhWmaP%2BzwhMpzvadYMykI28LzthsLJ9BfNRmEokyOMHLS1euMLHCimxd9eIFqNPVVv%2F9AbFIX52&X-Amz-Signature=18f2b866f2db4bf650a28364c8cacf414b4212365aa9538338ded0485227aaa1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCT52PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGtKQvNF15yEbQyhG%2FYoqmDDtwF8OB%2Fo11OhHJbvNQM%2BAiAixCoEnSZ%2B3EsLDYx%2Fe8qyqqnT7jUU%2FM9WOXvra2UPKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKf7cpC5mvLnoUAUKtwDQ1sZhjDoNxskKZAkjZg3SNqOX%2FFrwIf86g8FIzRHejEzmszlYDUvwI5DUQT20nhxqQQyeheHh3xrHKL81xEZRsFwEa6LnoCSuJZwgZqiYAghcH7AVC%2FbPPNbDdELektu6mmyBMEgRLFbPfYNeKH8pnNT%2B%2FDqaWcJ6zbtmpB2ZtAGz944NIBhfE2Jj3KnXFfSIZ5x7fwsl2YhUa6akb75uSDYLYE4daWV%2FQiyFjTxZVjQNEVYXR9CibBY525A7S3ZzHWku%2F83a3nNsoCp6gv3uQBjYXLDeiLEiGBRReKcoMCJKUV475mMgJPObsCgkAWTt1xL6%2FjMFlxS8cC9mRazLl%2BjNbvf7uyLWs%2BBzDRwhCDbpsh46I33xO2g5YnMG%2BeHBG%2F4TH2U7RwH5%2BItTrOiVvrv2jbr5J8z%2BgGAOBIGAf%2FZUtzD7oBDfg8pC6MY3Xz07ykzw%2FtOCd4LZW814fZLFirHivzeW5hDDiLGVdRtaPbHFXzX4hJbmwN4zE2EHa4o1FQio%2FIlOV2LHlt8fDcPVeAq1RN%2FazwJvLvR%2FOji9kh82DCiS1vH5AhDjOTX33DLSaTFkWpioUJfjT8%2B1OxdAwhBqYIPxssNcJWkAmdAYpgH64DbIDYPgtxy%2Bigw4biOvgY6pgFlsc9WUozdXMwpP7Z%2BZ3VP0zvm%2BnksNYJkB0idr8IFRqZudl5ogPM1ORD7FeSe%2FaXXvyJgpX%2BPlVN8b7KQREIaQg50nKcn4sKw8C4tJpbvWD5ATtcrc3ONpQyzRSSNAGUyEfmABC%2FBFtLQDrm9hZhWmaP%2BzwhMpzvadYMykI28LzthsLJ9BfNRmEokyOMHLS1euMLHCimxd9eIFqNPVVv%2F9AbFIX52&X-Amz-Signature=c86d998586595395099e0d30804dccad254a6e70ea25f0f02d340966489e75b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCT52PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGtKQvNF15yEbQyhG%2FYoqmDDtwF8OB%2Fo11OhHJbvNQM%2BAiAixCoEnSZ%2B3EsLDYx%2Fe8qyqqnT7jUU%2FM9WOXvra2UPKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKf7cpC5mvLnoUAUKtwDQ1sZhjDoNxskKZAkjZg3SNqOX%2FFrwIf86g8FIzRHejEzmszlYDUvwI5DUQT20nhxqQQyeheHh3xrHKL81xEZRsFwEa6LnoCSuJZwgZqiYAghcH7AVC%2FbPPNbDdELektu6mmyBMEgRLFbPfYNeKH8pnNT%2B%2FDqaWcJ6zbtmpB2ZtAGz944NIBhfE2Jj3KnXFfSIZ5x7fwsl2YhUa6akb75uSDYLYE4daWV%2FQiyFjTxZVjQNEVYXR9CibBY525A7S3ZzHWku%2F83a3nNsoCp6gv3uQBjYXLDeiLEiGBRReKcoMCJKUV475mMgJPObsCgkAWTt1xL6%2FjMFlxS8cC9mRazLl%2BjNbvf7uyLWs%2BBzDRwhCDbpsh46I33xO2g5YnMG%2BeHBG%2F4TH2U7RwH5%2BItTrOiVvrv2jbr5J8z%2BgGAOBIGAf%2FZUtzD7oBDfg8pC6MY3Xz07ykzw%2FtOCd4LZW814fZLFirHivzeW5hDDiLGVdRtaPbHFXzX4hJbmwN4zE2EHa4o1FQio%2FIlOV2LHlt8fDcPVeAq1RN%2FazwJvLvR%2FOji9kh82DCiS1vH5AhDjOTX33DLSaTFkWpioUJfjT8%2B1OxdAwhBqYIPxssNcJWkAmdAYpgH64DbIDYPgtxy%2Bigw4biOvgY6pgFlsc9WUozdXMwpP7Z%2BZ3VP0zvm%2BnksNYJkB0idr8IFRqZudl5ogPM1ORD7FeSe%2FaXXvyJgpX%2BPlVN8b7KQREIaQg50nKcn4sKw8C4tJpbvWD5ATtcrc3ONpQyzRSSNAGUyEfmABC%2FBFtLQDrm9hZhWmaP%2BzwhMpzvadYMykI28LzthsLJ9BfNRmEokyOMHLS1euMLHCimxd9eIFqNPVVv%2F9AbFIX52&X-Amz-Signature=0894def04ad92a2347ae86098a72ad44c60a2e71b84135b2e1db4ef50dd9898a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCT52PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGtKQvNF15yEbQyhG%2FYoqmDDtwF8OB%2Fo11OhHJbvNQM%2BAiAixCoEnSZ%2B3EsLDYx%2Fe8qyqqnT7jUU%2FM9WOXvra2UPKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKf7cpC5mvLnoUAUKtwDQ1sZhjDoNxskKZAkjZg3SNqOX%2FFrwIf86g8FIzRHejEzmszlYDUvwI5DUQT20nhxqQQyeheHh3xrHKL81xEZRsFwEa6LnoCSuJZwgZqiYAghcH7AVC%2FbPPNbDdELektu6mmyBMEgRLFbPfYNeKH8pnNT%2B%2FDqaWcJ6zbtmpB2ZtAGz944NIBhfE2Jj3KnXFfSIZ5x7fwsl2YhUa6akb75uSDYLYE4daWV%2FQiyFjTxZVjQNEVYXR9CibBY525A7S3ZzHWku%2F83a3nNsoCp6gv3uQBjYXLDeiLEiGBRReKcoMCJKUV475mMgJPObsCgkAWTt1xL6%2FjMFlxS8cC9mRazLl%2BjNbvf7uyLWs%2BBzDRwhCDbpsh46I33xO2g5YnMG%2BeHBG%2F4TH2U7RwH5%2BItTrOiVvrv2jbr5J8z%2BgGAOBIGAf%2FZUtzD7oBDfg8pC6MY3Xz07ykzw%2FtOCd4LZW814fZLFirHivzeW5hDDiLGVdRtaPbHFXzX4hJbmwN4zE2EHa4o1FQio%2FIlOV2LHlt8fDcPVeAq1RN%2FazwJvLvR%2FOji9kh82DCiS1vH5AhDjOTX33DLSaTFkWpioUJfjT8%2B1OxdAwhBqYIPxssNcJWkAmdAYpgH64DbIDYPgtxy%2Bigw4biOvgY6pgFlsc9WUozdXMwpP7Z%2BZ3VP0zvm%2BnksNYJkB0idr8IFRqZudl5ogPM1ORD7FeSe%2FaXXvyJgpX%2BPlVN8b7KQREIaQg50nKcn4sKw8C4tJpbvWD5ATtcrc3ONpQyzRSSNAGUyEfmABC%2FBFtLQDrm9hZhWmaP%2BzwhMpzvadYMykI28LzthsLJ9BfNRmEokyOMHLS1euMLHCimxd9eIFqNPVVv%2F9AbFIX52&X-Amz-Signature=29ee3cd771e61f1db351a24affa79c6795a1c38fa3c498435a43d8f2169eae1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCT52PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGtKQvNF15yEbQyhG%2FYoqmDDtwF8OB%2Fo11OhHJbvNQM%2BAiAixCoEnSZ%2B3EsLDYx%2Fe8qyqqnT7jUU%2FM9WOXvra2UPKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKf7cpC5mvLnoUAUKtwDQ1sZhjDoNxskKZAkjZg3SNqOX%2FFrwIf86g8FIzRHejEzmszlYDUvwI5DUQT20nhxqQQyeheHh3xrHKL81xEZRsFwEa6LnoCSuJZwgZqiYAghcH7AVC%2FbPPNbDdELektu6mmyBMEgRLFbPfYNeKH8pnNT%2B%2FDqaWcJ6zbtmpB2ZtAGz944NIBhfE2Jj3KnXFfSIZ5x7fwsl2YhUa6akb75uSDYLYE4daWV%2FQiyFjTxZVjQNEVYXR9CibBY525A7S3ZzHWku%2F83a3nNsoCp6gv3uQBjYXLDeiLEiGBRReKcoMCJKUV475mMgJPObsCgkAWTt1xL6%2FjMFlxS8cC9mRazLl%2BjNbvf7uyLWs%2BBzDRwhCDbpsh46I33xO2g5YnMG%2BeHBG%2F4TH2U7RwH5%2BItTrOiVvrv2jbr5J8z%2BgGAOBIGAf%2FZUtzD7oBDfg8pC6MY3Xz07ykzw%2FtOCd4LZW814fZLFirHivzeW5hDDiLGVdRtaPbHFXzX4hJbmwN4zE2EHa4o1FQio%2FIlOV2LHlt8fDcPVeAq1RN%2FazwJvLvR%2FOji9kh82DCiS1vH5AhDjOTX33DLSaTFkWpioUJfjT8%2B1OxdAwhBqYIPxssNcJWkAmdAYpgH64DbIDYPgtxy%2Bigw4biOvgY6pgFlsc9WUozdXMwpP7Z%2BZ3VP0zvm%2BnksNYJkB0idr8IFRqZudl5ogPM1ORD7FeSe%2FaXXvyJgpX%2BPlVN8b7KQREIaQg50nKcn4sKw8C4tJpbvWD5ATtcrc3ONpQyzRSSNAGUyEfmABC%2FBFtLQDrm9hZhWmaP%2BzwhMpzvadYMykI28LzthsLJ9BfNRmEokyOMHLS1euMLHCimxd9eIFqNPVVv%2F9AbFIX52&X-Amz-Signature=0326a018257a6cb5e5956a3778c7c86022d325a3c25521e646bbe3c65589f8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMCT52PC%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIGtKQvNF15yEbQyhG%2FYoqmDDtwF8OB%2Fo11OhHJbvNQM%2BAiAixCoEnSZ%2B3EsLDYx%2Fe8qyqqnT7jUU%2FM9WOXvra2UPKyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVKf7cpC5mvLnoUAUKtwDQ1sZhjDoNxskKZAkjZg3SNqOX%2FFrwIf86g8FIzRHejEzmszlYDUvwI5DUQT20nhxqQQyeheHh3xrHKL81xEZRsFwEa6LnoCSuJZwgZqiYAghcH7AVC%2FbPPNbDdELektu6mmyBMEgRLFbPfYNeKH8pnNT%2B%2FDqaWcJ6zbtmpB2ZtAGz944NIBhfE2Jj3KnXFfSIZ5x7fwsl2YhUa6akb75uSDYLYE4daWV%2FQiyFjTxZVjQNEVYXR9CibBY525A7S3ZzHWku%2F83a3nNsoCp6gv3uQBjYXLDeiLEiGBRReKcoMCJKUV475mMgJPObsCgkAWTt1xL6%2FjMFlxS8cC9mRazLl%2BjNbvf7uyLWs%2BBzDRwhCDbpsh46I33xO2g5YnMG%2BeHBG%2F4TH2U7RwH5%2BItTrOiVvrv2jbr5J8z%2BgGAOBIGAf%2FZUtzD7oBDfg8pC6MY3Xz07ykzw%2FtOCd4LZW814fZLFirHivzeW5hDDiLGVdRtaPbHFXzX4hJbmwN4zE2EHa4o1FQio%2FIlOV2LHlt8fDcPVeAq1RN%2FazwJvLvR%2FOji9kh82DCiS1vH5AhDjOTX33DLSaTFkWpioUJfjT8%2B1OxdAwhBqYIPxssNcJWkAmdAYpgH64DbIDYPgtxy%2Bigw4biOvgY6pgFlsc9WUozdXMwpP7Z%2BZ3VP0zvm%2BnksNYJkB0idr8IFRqZudl5ogPM1ORD7FeSe%2FaXXvyJgpX%2BPlVN8b7KQREIaQg50nKcn4sKw8C4tJpbvWD5ATtcrc3ONpQyzRSSNAGUyEfmABC%2FBFtLQDrm9hZhWmaP%2BzwhMpzvadYMykI28LzthsLJ9BfNRmEokyOMHLS1euMLHCimxd9eIFqNPVVv%2F9AbFIX52&X-Amz-Signature=6038d48bf4a9e09f1ad9a1d7d17d5a9bd9d492cb0a586feb24ee448a6eb52d79&X-Amz-SignedHeaders=host&x-id=GetObject)
