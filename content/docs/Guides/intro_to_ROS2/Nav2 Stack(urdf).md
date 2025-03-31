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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LD6MYRZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDkCV%2FcjIq%2BKYNdsoopPjzd8l1ajtU4iTRtlNNpk2bc%2BAiEA9dqyhrbREkA0V9mN0bq%2BjB9maB4vRldqfadgBEsqZ98qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3vpmIa4tWKWOxyCrcA4Xc9pRknXRq26rMIqMTjImXmbdLgwbrQsVVU%2Bn44%2F15DqaQwlEuOUPJiQ0oBQVW89CJLh5Mu9HgLilwP7uxov4EUohUkPpEjVUeuY%2BUYB8cVX1CMA7xreIWIAB2ytUGa5IrWLrMH77A3LTKqHTXlaLO%2BXnJhLNXpoC4Xj0%2FjUfLt3J5%2B2qftjJVUnMHg7V1T4lzFnAIGZjNwLkReHtfsK3SICRLBc6sXLXWnRuAlHDX0MzrIgL2B3GBFbQoCgKR4fqgaumizyvkI7B0I1eKO0CnfRGoG1ebnUJuB%2Br59tVR%2FmMOU74l%2FLvUZ8ZrtTGL712TKrgOIotYh9vVQrj%2Fwah22z4gLCqBKRU5HKwlLiJcXNDifMtvxglNofMqlEDn5Eq1vYI99i3CRgaQpCVREZ9Qt6B76VDR7XTNgWfQW%2FdFQijWOaPzJ8taSR7G%2F5R3FuVhBCmKTkJbWaU256cSiK0FJv7rOzdM0PH4u5wH56oJ0HSbhaGKLnQTQxaBN07zIat1YGAaEoGgO9JTdTIhMJTXQXzP0pM69%2FmphiQapkzuaOaqmFD0E8t1iQ2GqfIE1v%2BJMLUoxp00w9v%2FlPMpZw3Ur6PaKGYyzc3F15dBtrQa1%2B4TctA8BEni02saMJGiqr8GOqUBTkR8BgvCYhc5EZupUdPewAQolfv%2FNQmGLQbwYwDTo%2B8scZMIw5GMQwYhNILug955BCAxVt5sj3qBfd8Nf04yjqpni8XgCKi0V3Q6wC1buNxXSZDigDjpa0uEq8pQufDjtmA7r3vhPlBpEIMKws63pXiLTKtsiDRAHHjpFDve2aNkl6s1wDde7VQGgo5055zS9cPw3IhppATeU4slAFtPs2UYlIbG&X-Amz-Signature=73c298f2fd67351efb4cceee20abd330a43c9afa663517f33f73754c3fe4c3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LD6MYRZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDkCV%2FcjIq%2BKYNdsoopPjzd8l1ajtU4iTRtlNNpk2bc%2BAiEA9dqyhrbREkA0V9mN0bq%2BjB9maB4vRldqfadgBEsqZ98qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3vpmIa4tWKWOxyCrcA4Xc9pRknXRq26rMIqMTjImXmbdLgwbrQsVVU%2Bn44%2F15DqaQwlEuOUPJiQ0oBQVW89CJLh5Mu9HgLilwP7uxov4EUohUkPpEjVUeuY%2BUYB8cVX1CMA7xreIWIAB2ytUGa5IrWLrMH77A3LTKqHTXlaLO%2BXnJhLNXpoC4Xj0%2FjUfLt3J5%2B2qftjJVUnMHg7V1T4lzFnAIGZjNwLkReHtfsK3SICRLBc6sXLXWnRuAlHDX0MzrIgL2B3GBFbQoCgKR4fqgaumizyvkI7B0I1eKO0CnfRGoG1ebnUJuB%2Br59tVR%2FmMOU74l%2FLvUZ8ZrtTGL712TKrgOIotYh9vVQrj%2Fwah22z4gLCqBKRU5HKwlLiJcXNDifMtvxglNofMqlEDn5Eq1vYI99i3CRgaQpCVREZ9Qt6B76VDR7XTNgWfQW%2FdFQijWOaPzJ8taSR7G%2F5R3FuVhBCmKTkJbWaU256cSiK0FJv7rOzdM0PH4u5wH56oJ0HSbhaGKLnQTQxaBN07zIat1YGAaEoGgO9JTdTIhMJTXQXzP0pM69%2FmphiQapkzuaOaqmFD0E8t1iQ2GqfIE1v%2BJMLUoxp00w9v%2FlPMpZw3Ur6PaKGYyzc3F15dBtrQa1%2B4TctA8BEni02saMJGiqr8GOqUBTkR8BgvCYhc5EZupUdPewAQolfv%2FNQmGLQbwYwDTo%2B8scZMIw5GMQwYhNILug955BCAxVt5sj3qBfd8Nf04yjqpni8XgCKi0V3Q6wC1buNxXSZDigDjpa0uEq8pQufDjtmA7r3vhPlBpEIMKws63pXiLTKtsiDRAHHjpFDve2aNkl6s1wDde7VQGgo5055zS9cPw3IhppATeU4slAFtPs2UYlIbG&X-Amz-Signature=5ced4856f2a80e16c2f23e030c61953d3713b3571384d307ab6415f8101bad88&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LD6MYRZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDkCV%2FcjIq%2BKYNdsoopPjzd8l1ajtU4iTRtlNNpk2bc%2BAiEA9dqyhrbREkA0V9mN0bq%2BjB9maB4vRldqfadgBEsqZ98qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3vpmIa4tWKWOxyCrcA4Xc9pRknXRq26rMIqMTjImXmbdLgwbrQsVVU%2Bn44%2F15DqaQwlEuOUPJiQ0oBQVW89CJLh5Mu9HgLilwP7uxov4EUohUkPpEjVUeuY%2BUYB8cVX1CMA7xreIWIAB2ytUGa5IrWLrMH77A3LTKqHTXlaLO%2BXnJhLNXpoC4Xj0%2FjUfLt3J5%2B2qftjJVUnMHg7V1T4lzFnAIGZjNwLkReHtfsK3SICRLBc6sXLXWnRuAlHDX0MzrIgL2B3GBFbQoCgKR4fqgaumizyvkI7B0I1eKO0CnfRGoG1ebnUJuB%2Br59tVR%2FmMOU74l%2FLvUZ8ZrtTGL712TKrgOIotYh9vVQrj%2Fwah22z4gLCqBKRU5HKwlLiJcXNDifMtvxglNofMqlEDn5Eq1vYI99i3CRgaQpCVREZ9Qt6B76VDR7XTNgWfQW%2FdFQijWOaPzJ8taSR7G%2F5R3FuVhBCmKTkJbWaU256cSiK0FJv7rOzdM0PH4u5wH56oJ0HSbhaGKLnQTQxaBN07zIat1YGAaEoGgO9JTdTIhMJTXQXzP0pM69%2FmphiQapkzuaOaqmFD0E8t1iQ2GqfIE1v%2BJMLUoxp00w9v%2FlPMpZw3Ur6PaKGYyzc3F15dBtrQa1%2B4TctA8BEni02saMJGiqr8GOqUBTkR8BgvCYhc5EZupUdPewAQolfv%2FNQmGLQbwYwDTo%2B8scZMIw5GMQwYhNILug955BCAxVt5sj3qBfd8Nf04yjqpni8XgCKi0V3Q6wC1buNxXSZDigDjpa0uEq8pQufDjtmA7r3vhPlBpEIMKws63pXiLTKtsiDRAHHjpFDve2aNkl6s1wDde7VQGgo5055zS9cPw3IhppATeU4slAFtPs2UYlIbG&X-Amz-Signature=b0a7f0f5bc978cdab2630ead6d22098b984b5bb23a7feed5734d5c369d184dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LD6MYRZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDkCV%2FcjIq%2BKYNdsoopPjzd8l1ajtU4iTRtlNNpk2bc%2BAiEA9dqyhrbREkA0V9mN0bq%2BjB9maB4vRldqfadgBEsqZ98qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3vpmIa4tWKWOxyCrcA4Xc9pRknXRq26rMIqMTjImXmbdLgwbrQsVVU%2Bn44%2F15DqaQwlEuOUPJiQ0oBQVW89CJLh5Mu9HgLilwP7uxov4EUohUkPpEjVUeuY%2BUYB8cVX1CMA7xreIWIAB2ytUGa5IrWLrMH77A3LTKqHTXlaLO%2BXnJhLNXpoC4Xj0%2FjUfLt3J5%2B2qftjJVUnMHg7V1T4lzFnAIGZjNwLkReHtfsK3SICRLBc6sXLXWnRuAlHDX0MzrIgL2B3GBFbQoCgKR4fqgaumizyvkI7B0I1eKO0CnfRGoG1ebnUJuB%2Br59tVR%2FmMOU74l%2FLvUZ8ZrtTGL712TKrgOIotYh9vVQrj%2Fwah22z4gLCqBKRU5HKwlLiJcXNDifMtvxglNofMqlEDn5Eq1vYI99i3CRgaQpCVREZ9Qt6B76VDR7XTNgWfQW%2FdFQijWOaPzJ8taSR7G%2F5R3FuVhBCmKTkJbWaU256cSiK0FJv7rOzdM0PH4u5wH56oJ0HSbhaGKLnQTQxaBN07zIat1YGAaEoGgO9JTdTIhMJTXQXzP0pM69%2FmphiQapkzuaOaqmFD0E8t1iQ2GqfIE1v%2BJMLUoxp00w9v%2FlPMpZw3Ur6PaKGYyzc3F15dBtrQa1%2B4TctA8BEni02saMJGiqr8GOqUBTkR8BgvCYhc5EZupUdPewAQolfv%2FNQmGLQbwYwDTo%2B8scZMIw5GMQwYhNILug955BCAxVt5sj3qBfd8Nf04yjqpni8XgCKi0V3Q6wC1buNxXSZDigDjpa0uEq8pQufDjtmA7r3vhPlBpEIMKws63pXiLTKtsiDRAHHjpFDve2aNkl6s1wDde7VQGgo5055zS9cPw3IhppATeU4slAFtPs2UYlIbG&X-Amz-Signature=8e69358d3f79c274734132d6c458f2aadf9f280eff4eced73242d7fc3669db9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LD6MYRZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDkCV%2FcjIq%2BKYNdsoopPjzd8l1ajtU4iTRtlNNpk2bc%2BAiEA9dqyhrbREkA0V9mN0bq%2BjB9maB4vRldqfadgBEsqZ98qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3vpmIa4tWKWOxyCrcA4Xc9pRknXRq26rMIqMTjImXmbdLgwbrQsVVU%2Bn44%2F15DqaQwlEuOUPJiQ0oBQVW89CJLh5Mu9HgLilwP7uxov4EUohUkPpEjVUeuY%2BUYB8cVX1CMA7xreIWIAB2ytUGa5IrWLrMH77A3LTKqHTXlaLO%2BXnJhLNXpoC4Xj0%2FjUfLt3J5%2B2qftjJVUnMHg7V1T4lzFnAIGZjNwLkReHtfsK3SICRLBc6sXLXWnRuAlHDX0MzrIgL2B3GBFbQoCgKR4fqgaumizyvkI7B0I1eKO0CnfRGoG1ebnUJuB%2Br59tVR%2FmMOU74l%2FLvUZ8ZrtTGL712TKrgOIotYh9vVQrj%2Fwah22z4gLCqBKRU5HKwlLiJcXNDifMtvxglNofMqlEDn5Eq1vYI99i3CRgaQpCVREZ9Qt6B76VDR7XTNgWfQW%2FdFQijWOaPzJ8taSR7G%2F5R3FuVhBCmKTkJbWaU256cSiK0FJv7rOzdM0PH4u5wH56oJ0HSbhaGKLnQTQxaBN07zIat1YGAaEoGgO9JTdTIhMJTXQXzP0pM69%2FmphiQapkzuaOaqmFD0E8t1iQ2GqfIE1v%2BJMLUoxp00w9v%2FlPMpZw3Ur6PaKGYyzc3F15dBtrQa1%2B4TctA8BEni02saMJGiqr8GOqUBTkR8BgvCYhc5EZupUdPewAQolfv%2FNQmGLQbwYwDTo%2B8scZMIw5GMQwYhNILug955BCAxVt5sj3qBfd8Nf04yjqpni8XgCKi0V3Q6wC1buNxXSZDigDjpa0uEq8pQufDjtmA7r3vhPlBpEIMKws63pXiLTKtsiDRAHHjpFDve2aNkl6s1wDde7VQGgo5055zS9cPw3IhppATeU4slAFtPs2UYlIbG&X-Amz-Signature=709d209a2a956ef510966ed9b89d92bc34ca263ccb54f94af0a33178b833095e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LD6MYRZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDkCV%2FcjIq%2BKYNdsoopPjzd8l1ajtU4iTRtlNNpk2bc%2BAiEA9dqyhrbREkA0V9mN0bq%2BjB9maB4vRldqfadgBEsqZ98qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3vpmIa4tWKWOxyCrcA4Xc9pRknXRq26rMIqMTjImXmbdLgwbrQsVVU%2Bn44%2F15DqaQwlEuOUPJiQ0oBQVW89CJLh5Mu9HgLilwP7uxov4EUohUkPpEjVUeuY%2BUYB8cVX1CMA7xreIWIAB2ytUGa5IrWLrMH77A3LTKqHTXlaLO%2BXnJhLNXpoC4Xj0%2FjUfLt3J5%2B2qftjJVUnMHg7V1T4lzFnAIGZjNwLkReHtfsK3SICRLBc6sXLXWnRuAlHDX0MzrIgL2B3GBFbQoCgKR4fqgaumizyvkI7B0I1eKO0CnfRGoG1ebnUJuB%2Br59tVR%2FmMOU74l%2FLvUZ8ZrtTGL712TKrgOIotYh9vVQrj%2Fwah22z4gLCqBKRU5HKwlLiJcXNDifMtvxglNofMqlEDn5Eq1vYI99i3CRgaQpCVREZ9Qt6B76VDR7XTNgWfQW%2FdFQijWOaPzJ8taSR7G%2F5R3FuVhBCmKTkJbWaU256cSiK0FJv7rOzdM0PH4u5wH56oJ0HSbhaGKLnQTQxaBN07zIat1YGAaEoGgO9JTdTIhMJTXQXzP0pM69%2FmphiQapkzuaOaqmFD0E8t1iQ2GqfIE1v%2BJMLUoxp00w9v%2FlPMpZw3Ur6PaKGYyzc3F15dBtrQa1%2B4TctA8BEni02saMJGiqr8GOqUBTkR8BgvCYhc5EZupUdPewAQolfv%2FNQmGLQbwYwDTo%2B8scZMIw5GMQwYhNILug955BCAxVt5sj3qBfd8Nf04yjqpni8XgCKi0V3Q6wC1buNxXSZDigDjpa0uEq8pQufDjtmA7r3vhPlBpEIMKws63pXiLTKtsiDRAHHjpFDve2aNkl6s1wDde7VQGgo5055zS9cPw3IhppATeU4slAFtPs2UYlIbG&X-Amz-Signature=aa33ce7699703913d8738e90d4dcdc94ce093715180c1ddd4e63c5fbadfe9963&X-Amz-SignedHeaders=host&x-id=GetObject)
