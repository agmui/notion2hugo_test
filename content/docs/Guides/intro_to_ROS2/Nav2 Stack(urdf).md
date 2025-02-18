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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TRTSEB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRo9VjyjP5%2FVkTQgJlLA3mhD%2FYdTBzdY2QfKWJht1SYQIgUFZ%2FicUtP07vnVx58o1a5864txqYFV6Xn%2FuboXZq2m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQJDzz1A3zHuy9jjyrcA5byOhazz9pBEgg5b%2Fk2YqOM6zQHo32sIknD2EVW642qVTSBc5yyPUyHRc%2BmOm2p4SvKNTgrX%2F9Afj0UG9wbZ2gKgy2sWwSXICRP%2FjbKe%2FGr1WB11zTSxDgEtSQFyZ2BDVovOteOlIeuqi6KLpee57W4Nz7LQ%2Fal3nNHr4IRtPN6DrZCSjT3GWODibhFulxTMGaoDRKCZb0KUY5l%2FkxjoRAwsGdiQMyoTWcVNXGWgFHuwmEWbuL%2F4fRnPVT6DM%2Fa8Wvnpm2JspTi3u0sWmBjkUi%2BFd0e5uqL4aH%2FpjI%2FKjvCDib70DzPML%2BmP%2ByQj%2Bkz%2B%2FnLO2ezOR0jV%2F2kNqV5ECcqySzBJFZMIWVTkHFziMVXwK5gYhdbE%2FLjmFd1V9G9B8U6a3K0BEVOfC5cMdzeg4LCyHoOywEwr462DumTGEf8xO154ivW84DLWM9muA7HXzqHDxdJzrvHV0DLSvMDdQe1T3DGWvnZKA6weE4ZpvCfkqcITxmOcN7Yd34GFpxkjrNy7brEQW48VgX33Mt1MZPZI5%2FeQww2RjNPugjFW2w4HrAHGG%2BJMJ7NWdMJWgxXw8eJ7oGpy40raewxv8HoQmdsWhoktCmRXFPVD0E%2FO5fQYFj9tg1jiCoZYHeeMIr%2F0L0GOqUBJszNlMiE4ECcf4ik%2FiJKA8cYkqrmQclb59I6glfXkD5ZGW9K5KGU8tGmJR1sw7flg9EhZ7fqvuN0QJ6puw1Srfxp%2FR7KyPPyLppx7lKtz61L7kQ6RjZDIofaw25dxeEMpJ6A8jXqDpQCjFrla91ATQzNs%2F0mOKe8%2FQeZyqvXFMr%2Bi4itkmTpu2xaaLzVuHkrfaGaobf179AvN8eHnFqv4ZEHwKwS&X-Amz-Signature=cd8413c089ea102573ca3d8879ac576e79db8bd191dc9c8dde3c36764ff3ac66&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TRTSEB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRo9VjyjP5%2FVkTQgJlLA3mhD%2FYdTBzdY2QfKWJht1SYQIgUFZ%2FicUtP07vnVx58o1a5864txqYFV6Xn%2FuboXZq2m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQJDzz1A3zHuy9jjyrcA5byOhazz9pBEgg5b%2Fk2YqOM6zQHo32sIknD2EVW642qVTSBc5yyPUyHRc%2BmOm2p4SvKNTgrX%2F9Afj0UG9wbZ2gKgy2sWwSXICRP%2FjbKe%2FGr1WB11zTSxDgEtSQFyZ2BDVovOteOlIeuqi6KLpee57W4Nz7LQ%2Fal3nNHr4IRtPN6DrZCSjT3GWODibhFulxTMGaoDRKCZb0KUY5l%2FkxjoRAwsGdiQMyoTWcVNXGWgFHuwmEWbuL%2F4fRnPVT6DM%2Fa8Wvnpm2JspTi3u0sWmBjkUi%2BFd0e5uqL4aH%2FpjI%2FKjvCDib70DzPML%2BmP%2ByQj%2Bkz%2B%2FnLO2ezOR0jV%2F2kNqV5ECcqySzBJFZMIWVTkHFziMVXwK5gYhdbE%2FLjmFd1V9G9B8U6a3K0BEVOfC5cMdzeg4LCyHoOywEwr462DumTGEf8xO154ivW84DLWM9muA7HXzqHDxdJzrvHV0DLSvMDdQe1T3DGWvnZKA6weE4ZpvCfkqcITxmOcN7Yd34GFpxkjrNy7brEQW48VgX33Mt1MZPZI5%2FeQww2RjNPugjFW2w4HrAHGG%2BJMJ7NWdMJWgxXw8eJ7oGpy40raewxv8HoQmdsWhoktCmRXFPVD0E%2FO5fQYFj9tg1jiCoZYHeeMIr%2F0L0GOqUBJszNlMiE4ECcf4ik%2FiJKA8cYkqrmQclb59I6glfXkD5ZGW9K5KGU8tGmJR1sw7flg9EhZ7fqvuN0QJ6puw1Srfxp%2FR7KyPPyLppx7lKtz61L7kQ6RjZDIofaw25dxeEMpJ6A8jXqDpQCjFrla91ATQzNs%2F0mOKe8%2FQeZyqvXFMr%2Bi4itkmTpu2xaaLzVuHkrfaGaobf179AvN8eHnFqv4ZEHwKwS&X-Amz-Signature=7d03b45d021d4bbf9f0d63a432e9701c6b86400b1087a665cd2dfa756494264a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TRTSEB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRo9VjyjP5%2FVkTQgJlLA3mhD%2FYdTBzdY2QfKWJht1SYQIgUFZ%2FicUtP07vnVx58o1a5864txqYFV6Xn%2FuboXZq2m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQJDzz1A3zHuy9jjyrcA5byOhazz9pBEgg5b%2Fk2YqOM6zQHo32sIknD2EVW642qVTSBc5yyPUyHRc%2BmOm2p4SvKNTgrX%2F9Afj0UG9wbZ2gKgy2sWwSXICRP%2FjbKe%2FGr1WB11zTSxDgEtSQFyZ2BDVovOteOlIeuqi6KLpee57W4Nz7LQ%2Fal3nNHr4IRtPN6DrZCSjT3GWODibhFulxTMGaoDRKCZb0KUY5l%2FkxjoRAwsGdiQMyoTWcVNXGWgFHuwmEWbuL%2F4fRnPVT6DM%2Fa8Wvnpm2JspTi3u0sWmBjkUi%2BFd0e5uqL4aH%2FpjI%2FKjvCDib70DzPML%2BmP%2ByQj%2Bkz%2B%2FnLO2ezOR0jV%2F2kNqV5ECcqySzBJFZMIWVTkHFziMVXwK5gYhdbE%2FLjmFd1V9G9B8U6a3K0BEVOfC5cMdzeg4LCyHoOywEwr462DumTGEf8xO154ivW84DLWM9muA7HXzqHDxdJzrvHV0DLSvMDdQe1T3DGWvnZKA6weE4ZpvCfkqcITxmOcN7Yd34GFpxkjrNy7brEQW48VgX33Mt1MZPZI5%2FeQww2RjNPugjFW2w4HrAHGG%2BJMJ7NWdMJWgxXw8eJ7oGpy40raewxv8HoQmdsWhoktCmRXFPVD0E%2FO5fQYFj9tg1jiCoZYHeeMIr%2F0L0GOqUBJszNlMiE4ECcf4ik%2FiJKA8cYkqrmQclb59I6glfXkD5ZGW9K5KGU8tGmJR1sw7flg9EhZ7fqvuN0QJ6puw1Srfxp%2FR7KyPPyLppx7lKtz61L7kQ6RjZDIofaw25dxeEMpJ6A8jXqDpQCjFrla91ATQzNs%2F0mOKe8%2FQeZyqvXFMr%2Bi4itkmTpu2xaaLzVuHkrfaGaobf179AvN8eHnFqv4ZEHwKwS&X-Amz-Signature=617557b12a9efb21faa955367d4eec21d57921b9b60a7cdfede054664e2d8c24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TRTSEB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRo9VjyjP5%2FVkTQgJlLA3mhD%2FYdTBzdY2QfKWJht1SYQIgUFZ%2FicUtP07vnVx58o1a5864txqYFV6Xn%2FuboXZq2m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQJDzz1A3zHuy9jjyrcA5byOhazz9pBEgg5b%2Fk2YqOM6zQHo32sIknD2EVW642qVTSBc5yyPUyHRc%2BmOm2p4SvKNTgrX%2F9Afj0UG9wbZ2gKgy2sWwSXICRP%2FjbKe%2FGr1WB11zTSxDgEtSQFyZ2BDVovOteOlIeuqi6KLpee57W4Nz7LQ%2Fal3nNHr4IRtPN6DrZCSjT3GWODibhFulxTMGaoDRKCZb0KUY5l%2FkxjoRAwsGdiQMyoTWcVNXGWgFHuwmEWbuL%2F4fRnPVT6DM%2Fa8Wvnpm2JspTi3u0sWmBjkUi%2BFd0e5uqL4aH%2FpjI%2FKjvCDib70DzPML%2BmP%2ByQj%2Bkz%2B%2FnLO2ezOR0jV%2F2kNqV5ECcqySzBJFZMIWVTkHFziMVXwK5gYhdbE%2FLjmFd1V9G9B8U6a3K0BEVOfC5cMdzeg4LCyHoOywEwr462DumTGEf8xO154ivW84DLWM9muA7HXzqHDxdJzrvHV0DLSvMDdQe1T3DGWvnZKA6weE4ZpvCfkqcITxmOcN7Yd34GFpxkjrNy7brEQW48VgX33Mt1MZPZI5%2FeQww2RjNPugjFW2w4HrAHGG%2BJMJ7NWdMJWgxXw8eJ7oGpy40raewxv8HoQmdsWhoktCmRXFPVD0E%2FO5fQYFj9tg1jiCoZYHeeMIr%2F0L0GOqUBJszNlMiE4ECcf4ik%2FiJKA8cYkqrmQclb59I6glfXkD5ZGW9K5KGU8tGmJR1sw7flg9EhZ7fqvuN0QJ6puw1Srfxp%2FR7KyPPyLppx7lKtz61L7kQ6RjZDIofaw25dxeEMpJ6A8jXqDpQCjFrla91ATQzNs%2F0mOKe8%2FQeZyqvXFMr%2Bi4itkmTpu2xaaLzVuHkrfaGaobf179AvN8eHnFqv4ZEHwKwS&X-Amz-Signature=590f1edd579448ecefdcc8ca7c8a06b7329acbb20fd9f689f39d45aecaefceea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TRTSEB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRo9VjyjP5%2FVkTQgJlLA3mhD%2FYdTBzdY2QfKWJht1SYQIgUFZ%2FicUtP07vnVx58o1a5864txqYFV6Xn%2FuboXZq2m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQJDzz1A3zHuy9jjyrcA5byOhazz9pBEgg5b%2Fk2YqOM6zQHo32sIknD2EVW642qVTSBc5yyPUyHRc%2BmOm2p4SvKNTgrX%2F9Afj0UG9wbZ2gKgy2sWwSXICRP%2FjbKe%2FGr1WB11zTSxDgEtSQFyZ2BDVovOteOlIeuqi6KLpee57W4Nz7LQ%2Fal3nNHr4IRtPN6DrZCSjT3GWODibhFulxTMGaoDRKCZb0KUY5l%2FkxjoRAwsGdiQMyoTWcVNXGWgFHuwmEWbuL%2F4fRnPVT6DM%2Fa8Wvnpm2JspTi3u0sWmBjkUi%2BFd0e5uqL4aH%2FpjI%2FKjvCDib70DzPML%2BmP%2ByQj%2Bkz%2B%2FnLO2ezOR0jV%2F2kNqV5ECcqySzBJFZMIWVTkHFziMVXwK5gYhdbE%2FLjmFd1V9G9B8U6a3K0BEVOfC5cMdzeg4LCyHoOywEwr462DumTGEf8xO154ivW84DLWM9muA7HXzqHDxdJzrvHV0DLSvMDdQe1T3DGWvnZKA6weE4ZpvCfkqcITxmOcN7Yd34GFpxkjrNy7brEQW48VgX33Mt1MZPZI5%2FeQww2RjNPugjFW2w4HrAHGG%2BJMJ7NWdMJWgxXw8eJ7oGpy40raewxv8HoQmdsWhoktCmRXFPVD0E%2FO5fQYFj9tg1jiCoZYHeeMIr%2F0L0GOqUBJszNlMiE4ECcf4ik%2FiJKA8cYkqrmQclb59I6glfXkD5ZGW9K5KGU8tGmJR1sw7flg9EhZ7fqvuN0QJ6puw1Srfxp%2FR7KyPPyLppx7lKtz61L7kQ6RjZDIofaw25dxeEMpJ6A8jXqDpQCjFrla91ATQzNs%2F0mOKe8%2FQeZyqvXFMr%2Bi4itkmTpu2xaaLzVuHkrfaGaobf179AvN8eHnFqv4ZEHwKwS&X-Amz-Signature=f0ee27267e6e53024a8025e25af4ab0de1383cca22e18b22318ab3153596374e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TRTSEB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRo9VjyjP5%2FVkTQgJlLA3mhD%2FYdTBzdY2QfKWJht1SYQIgUFZ%2FicUtP07vnVx58o1a5864txqYFV6Xn%2FuboXZq2m8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQJDzz1A3zHuy9jjyrcA5byOhazz9pBEgg5b%2Fk2YqOM6zQHo32sIknD2EVW642qVTSBc5yyPUyHRc%2BmOm2p4SvKNTgrX%2F9Afj0UG9wbZ2gKgy2sWwSXICRP%2FjbKe%2FGr1WB11zTSxDgEtSQFyZ2BDVovOteOlIeuqi6KLpee57W4Nz7LQ%2Fal3nNHr4IRtPN6DrZCSjT3GWODibhFulxTMGaoDRKCZb0KUY5l%2FkxjoRAwsGdiQMyoTWcVNXGWgFHuwmEWbuL%2F4fRnPVT6DM%2Fa8Wvnpm2JspTi3u0sWmBjkUi%2BFd0e5uqL4aH%2FpjI%2FKjvCDib70DzPML%2BmP%2ByQj%2Bkz%2B%2FnLO2ezOR0jV%2F2kNqV5ECcqySzBJFZMIWVTkHFziMVXwK5gYhdbE%2FLjmFd1V9G9B8U6a3K0BEVOfC5cMdzeg4LCyHoOywEwr462DumTGEf8xO154ivW84DLWM9muA7HXzqHDxdJzrvHV0DLSvMDdQe1T3DGWvnZKA6weE4ZpvCfkqcITxmOcN7Yd34GFpxkjrNy7brEQW48VgX33Mt1MZPZI5%2FeQww2RjNPugjFW2w4HrAHGG%2BJMJ7NWdMJWgxXw8eJ7oGpy40raewxv8HoQmdsWhoktCmRXFPVD0E%2FO5fQYFj9tg1jiCoZYHeeMIr%2F0L0GOqUBJszNlMiE4ECcf4ik%2FiJKA8cYkqrmQclb59I6glfXkD5ZGW9K5KGU8tGmJR1sw7flg9EhZ7fqvuN0QJ6puw1Srfxp%2FR7KyPPyLppx7lKtz61L7kQ6RjZDIofaw25dxeEMpJ6A8jXqDpQCjFrla91ATQzNs%2F0mOKe8%2FQeZyqvXFMr%2Bi4itkmTpu2xaaLzVuHkrfaGaobf179AvN8eHnFqv4ZEHwKwS&X-Amz-Signature=6b2467461b371b4d8d5e9e64ab483dba6eef250a5e40d90ebb787165256fd42d&X-Amz-SignedHeaders=host&x-id=GetObject)
