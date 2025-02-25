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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTNLRUU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD89cRVT0G1BZeFk1evRUYgL9HqndweFVgQpASHYQBVSAIgIh13VWvzP1h4PuMJK3d21rLSGAadIYa%2BfAjosK0BgAQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZlejcsA%2F3z5GZE2yrcA7lK8ZyMr1quDVqNW7JXG%2BXG9%2BemKxGt%2BnNl%2FjHDmCjIBpt99DwBl9BnFrPp3qI3S6KAcmGzRQ2Qik1XFD10Z2lhrGBT7q8rfplDvPY6WZTCV17nkd2n6jIed2iGpdwVJY95wSvhEJ1pU7AnNPzKRgDJBywRRlM93LLQcX1FwZTJvjmiK1UdDsYhY07BfhsEGQlRUo6fLDHSs%2BxDf9xx4YvPqWkv%2BFpCUBgVGhN%2F%2Bn6iQ1dNP0e8mf8FLs7nJoJN3WAuvtqG2Qp9R5Rz6gqAJ3%2Ft5d61UnMRyghdEDoW7Jw%2B6K1M2rhdE5j6m2yQBCdb2NTI5PCUwJoA49tPQYfzRIR8KroowbCU5IydMwKP0av7kX6tTj1RWkcvTZdOT4dvsyTTKC5%2FZv%2BV6jYxpW80YIXtxLG7hbyp3pl6FAfXTQuG8wGhB9o0bltENau0%2FrIiOe1hMA0v%2F0YIuTlk82wSM%2BL823UxfbLvqfl8Mh4wgprB9w98ChYgKhsaBqtzONUHbMZInKFmufV46hxRLj5AGr4Tk6fcuIfVWfd7d6ZQaSk%2BYT4caXAo5Sb9CdMNwOWiK0NO7%2BnDPTcogbJEXr44i3Jt0w0RM6amu1yI8HYiVOdU9TY9rYROfBzzALi1MOaC9L0GOqUBhUb%2FtcXMl1XKv%2Bm7j%2FLTdU8KVwrp%2BrJIUaZcLhQU4JNGqYsFHSEoHqpSjXD8JBGZ9mLK6uS432rdDVGzkNw3MfU8RHqjBi%2FJJV573lZNVEZJymtD%2BJE35d7rjszHKHoPQO58iLe0OZkPsp9T82hrvQ1EXGBLpKJvpt3SoBmBMCwtzmpMTw%2F1Y%2Bjo%2BbmRwUCteU%2FA4WsqGqd2FbbDrroOG3TPXPvm&X-Amz-Signature=a918f1c6f7e46bc7dc3a545ff9cb40b04bda271f1c7cea356248d258c95107b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTNLRUU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD89cRVT0G1BZeFk1evRUYgL9HqndweFVgQpASHYQBVSAIgIh13VWvzP1h4PuMJK3d21rLSGAadIYa%2BfAjosK0BgAQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZlejcsA%2F3z5GZE2yrcA7lK8ZyMr1quDVqNW7JXG%2BXG9%2BemKxGt%2BnNl%2FjHDmCjIBpt99DwBl9BnFrPp3qI3S6KAcmGzRQ2Qik1XFD10Z2lhrGBT7q8rfplDvPY6WZTCV17nkd2n6jIed2iGpdwVJY95wSvhEJ1pU7AnNPzKRgDJBywRRlM93LLQcX1FwZTJvjmiK1UdDsYhY07BfhsEGQlRUo6fLDHSs%2BxDf9xx4YvPqWkv%2BFpCUBgVGhN%2F%2Bn6iQ1dNP0e8mf8FLs7nJoJN3WAuvtqG2Qp9R5Rz6gqAJ3%2Ft5d61UnMRyghdEDoW7Jw%2B6K1M2rhdE5j6m2yQBCdb2NTI5PCUwJoA49tPQYfzRIR8KroowbCU5IydMwKP0av7kX6tTj1RWkcvTZdOT4dvsyTTKC5%2FZv%2BV6jYxpW80YIXtxLG7hbyp3pl6FAfXTQuG8wGhB9o0bltENau0%2FrIiOe1hMA0v%2F0YIuTlk82wSM%2BL823UxfbLvqfl8Mh4wgprB9w98ChYgKhsaBqtzONUHbMZInKFmufV46hxRLj5AGr4Tk6fcuIfVWfd7d6ZQaSk%2BYT4caXAo5Sb9CdMNwOWiK0NO7%2BnDPTcogbJEXr44i3Jt0w0RM6amu1yI8HYiVOdU9TY9rYROfBzzALi1MOaC9L0GOqUBhUb%2FtcXMl1XKv%2Bm7j%2FLTdU8KVwrp%2BrJIUaZcLhQU4JNGqYsFHSEoHqpSjXD8JBGZ9mLK6uS432rdDVGzkNw3MfU8RHqjBi%2FJJV573lZNVEZJymtD%2BJE35d7rjszHKHoPQO58iLe0OZkPsp9T82hrvQ1EXGBLpKJvpt3SoBmBMCwtzmpMTw%2F1Y%2Bjo%2BbmRwUCteU%2FA4WsqGqd2FbbDrroOG3TPXPvm&X-Amz-Signature=d7f23212e8ff9d92323e75af7b5e22393b501e02016eff965e0fbcd76f52a470&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTNLRUU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD89cRVT0G1BZeFk1evRUYgL9HqndweFVgQpASHYQBVSAIgIh13VWvzP1h4PuMJK3d21rLSGAadIYa%2BfAjosK0BgAQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZlejcsA%2F3z5GZE2yrcA7lK8ZyMr1quDVqNW7JXG%2BXG9%2BemKxGt%2BnNl%2FjHDmCjIBpt99DwBl9BnFrPp3qI3S6KAcmGzRQ2Qik1XFD10Z2lhrGBT7q8rfplDvPY6WZTCV17nkd2n6jIed2iGpdwVJY95wSvhEJ1pU7AnNPzKRgDJBywRRlM93LLQcX1FwZTJvjmiK1UdDsYhY07BfhsEGQlRUo6fLDHSs%2BxDf9xx4YvPqWkv%2BFpCUBgVGhN%2F%2Bn6iQ1dNP0e8mf8FLs7nJoJN3WAuvtqG2Qp9R5Rz6gqAJ3%2Ft5d61UnMRyghdEDoW7Jw%2B6K1M2rhdE5j6m2yQBCdb2NTI5PCUwJoA49tPQYfzRIR8KroowbCU5IydMwKP0av7kX6tTj1RWkcvTZdOT4dvsyTTKC5%2FZv%2BV6jYxpW80YIXtxLG7hbyp3pl6FAfXTQuG8wGhB9o0bltENau0%2FrIiOe1hMA0v%2F0YIuTlk82wSM%2BL823UxfbLvqfl8Mh4wgprB9w98ChYgKhsaBqtzONUHbMZInKFmufV46hxRLj5AGr4Tk6fcuIfVWfd7d6ZQaSk%2BYT4caXAo5Sb9CdMNwOWiK0NO7%2BnDPTcogbJEXr44i3Jt0w0RM6amu1yI8HYiVOdU9TY9rYROfBzzALi1MOaC9L0GOqUBhUb%2FtcXMl1XKv%2Bm7j%2FLTdU8KVwrp%2BrJIUaZcLhQU4JNGqYsFHSEoHqpSjXD8JBGZ9mLK6uS432rdDVGzkNw3MfU8RHqjBi%2FJJV573lZNVEZJymtD%2BJE35d7rjszHKHoPQO58iLe0OZkPsp9T82hrvQ1EXGBLpKJvpt3SoBmBMCwtzmpMTw%2F1Y%2Bjo%2BbmRwUCteU%2FA4WsqGqd2FbbDrroOG3TPXPvm&X-Amz-Signature=5f1e8b36b62a207c35db0f9be1cfb77f334c9b7e9c050278e10affbd3cbfccd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTNLRUU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD89cRVT0G1BZeFk1evRUYgL9HqndweFVgQpASHYQBVSAIgIh13VWvzP1h4PuMJK3d21rLSGAadIYa%2BfAjosK0BgAQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZlejcsA%2F3z5GZE2yrcA7lK8ZyMr1quDVqNW7JXG%2BXG9%2BemKxGt%2BnNl%2FjHDmCjIBpt99DwBl9BnFrPp3qI3S6KAcmGzRQ2Qik1XFD10Z2lhrGBT7q8rfplDvPY6WZTCV17nkd2n6jIed2iGpdwVJY95wSvhEJ1pU7AnNPzKRgDJBywRRlM93LLQcX1FwZTJvjmiK1UdDsYhY07BfhsEGQlRUo6fLDHSs%2BxDf9xx4YvPqWkv%2BFpCUBgVGhN%2F%2Bn6iQ1dNP0e8mf8FLs7nJoJN3WAuvtqG2Qp9R5Rz6gqAJ3%2Ft5d61UnMRyghdEDoW7Jw%2B6K1M2rhdE5j6m2yQBCdb2NTI5PCUwJoA49tPQYfzRIR8KroowbCU5IydMwKP0av7kX6tTj1RWkcvTZdOT4dvsyTTKC5%2FZv%2BV6jYxpW80YIXtxLG7hbyp3pl6FAfXTQuG8wGhB9o0bltENau0%2FrIiOe1hMA0v%2F0YIuTlk82wSM%2BL823UxfbLvqfl8Mh4wgprB9w98ChYgKhsaBqtzONUHbMZInKFmufV46hxRLj5AGr4Tk6fcuIfVWfd7d6ZQaSk%2BYT4caXAo5Sb9CdMNwOWiK0NO7%2BnDPTcogbJEXr44i3Jt0w0RM6amu1yI8HYiVOdU9TY9rYROfBzzALi1MOaC9L0GOqUBhUb%2FtcXMl1XKv%2Bm7j%2FLTdU8KVwrp%2BrJIUaZcLhQU4JNGqYsFHSEoHqpSjXD8JBGZ9mLK6uS432rdDVGzkNw3MfU8RHqjBi%2FJJV573lZNVEZJymtD%2BJE35d7rjszHKHoPQO58iLe0OZkPsp9T82hrvQ1EXGBLpKJvpt3SoBmBMCwtzmpMTw%2F1Y%2Bjo%2BbmRwUCteU%2FA4WsqGqd2FbbDrroOG3TPXPvm&X-Amz-Signature=eb7609aa4f9f99a467d5a1688a7bc415974c31d20e080bfa06df08972f70c98d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTNLRUU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD89cRVT0G1BZeFk1evRUYgL9HqndweFVgQpASHYQBVSAIgIh13VWvzP1h4PuMJK3d21rLSGAadIYa%2BfAjosK0BgAQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZlejcsA%2F3z5GZE2yrcA7lK8ZyMr1quDVqNW7JXG%2BXG9%2BemKxGt%2BnNl%2FjHDmCjIBpt99DwBl9BnFrPp3qI3S6KAcmGzRQ2Qik1XFD10Z2lhrGBT7q8rfplDvPY6WZTCV17nkd2n6jIed2iGpdwVJY95wSvhEJ1pU7AnNPzKRgDJBywRRlM93LLQcX1FwZTJvjmiK1UdDsYhY07BfhsEGQlRUo6fLDHSs%2BxDf9xx4YvPqWkv%2BFpCUBgVGhN%2F%2Bn6iQ1dNP0e8mf8FLs7nJoJN3WAuvtqG2Qp9R5Rz6gqAJ3%2Ft5d61UnMRyghdEDoW7Jw%2B6K1M2rhdE5j6m2yQBCdb2NTI5PCUwJoA49tPQYfzRIR8KroowbCU5IydMwKP0av7kX6tTj1RWkcvTZdOT4dvsyTTKC5%2FZv%2BV6jYxpW80YIXtxLG7hbyp3pl6FAfXTQuG8wGhB9o0bltENau0%2FrIiOe1hMA0v%2F0YIuTlk82wSM%2BL823UxfbLvqfl8Mh4wgprB9w98ChYgKhsaBqtzONUHbMZInKFmufV46hxRLj5AGr4Tk6fcuIfVWfd7d6ZQaSk%2BYT4caXAo5Sb9CdMNwOWiK0NO7%2BnDPTcogbJEXr44i3Jt0w0RM6amu1yI8HYiVOdU9TY9rYROfBzzALi1MOaC9L0GOqUBhUb%2FtcXMl1XKv%2Bm7j%2FLTdU8KVwrp%2BrJIUaZcLhQU4JNGqYsFHSEoHqpSjXD8JBGZ9mLK6uS432rdDVGzkNw3MfU8RHqjBi%2FJJV573lZNVEZJymtD%2BJE35d7rjszHKHoPQO58iLe0OZkPsp9T82hrvQ1EXGBLpKJvpt3SoBmBMCwtzmpMTw%2F1Y%2Bjo%2BbmRwUCteU%2FA4WsqGqd2FbbDrroOG3TPXPvm&X-Amz-Signature=245d054b1563a8df0e08acda6d0db77a832e260a2507b3da25ab16922fede93a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYTNLRUU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD89cRVT0G1BZeFk1evRUYgL9HqndweFVgQpASHYQBVSAIgIh13VWvzP1h4PuMJK3d21rLSGAadIYa%2BfAjosK0BgAQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOZlejcsA%2F3z5GZE2yrcA7lK8ZyMr1quDVqNW7JXG%2BXG9%2BemKxGt%2BnNl%2FjHDmCjIBpt99DwBl9BnFrPp3qI3S6KAcmGzRQ2Qik1XFD10Z2lhrGBT7q8rfplDvPY6WZTCV17nkd2n6jIed2iGpdwVJY95wSvhEJ1pU7AnNPzKRgDJBywRRlM93LLQcX1FwZTJvjmiK1UdDsYhY07BfhsEGQlRUo6fLDHSs%2BxDf9xx4YvPqWkv%2BFpCUBgVGhN%2F%2Bn6iQ1dNP0e8mf8FLs7nJoJN3WAuvtqG2Qp9R5Rz6gqAJ3%2Ft5d61UnMRyghdEDoW7Jw%2B6K1M2rhdE5j6m2yQBCdb2NTI5PCUwJoA49tPQYfzRIR8KroowbCU5IydMwKP0av7kX6tTj1RWkcvTZdOT4dvsyTTKC5%2FZv%2BV6jYxpW80YIXtxLG7hbyp3pl6FAfXTQuG8wGhB9o0bltENau0%2FrIiOe1hMA0v%2F0YIuTlk82wSM%2BL823UxfbLvqfl8Mh4wgprB9w98ChYgKhsaBqtzONUHbMZInKFmufV46hxRLj5AGr4Tk6fcuIfVWfd7d6ZQaSk%2BYT4caXAo5Sb9CdMNwOWiK0NO7%2BnDPTcogbJEXr44i3Jt0w0RM6amu1yI8HYiVOdU9TY9rYROfBzzALi1MOaC9L0GOqUBhUb%2FtcXMl1XKv%2Bm7j%2FLTdU8KVwrp%2BrJIUaZcLhQU4JNGqYsFHSEoHqpSjXD8JBGZ9mLK6uS432rdDVGzkNw3MfU8RHqjBi%2FJJV573lZNVEZJymtD%2BJE35d7rjszHKHoPQO58iLe0OZkPsp9T82hrvQ1EXGBLpKJvpt3SoBmBMCwtzmpMTw%2F1Y%2Bjo%2BbmRwUCteU%2FA4WsqGqd2FbbDrroOG3TPXPvm&X-Amz-Signature=9cf53764b55e8ffa7bb38e629b47c8415427235f76f01b899f029e086ab3ea42&X-Amz-SignedHeaders=host&x-id=GetObject)
