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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZER5GV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0o8mGs3cXT5Oo7D%2FCVDhlshmp7iB8KxTPwFSyHspUAIhAJCvhtkOe%2FFQG7IYzIW9ObFWU6jvPnhdS%2BZ0nZXUMHVrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLDa9EXAcTzyg0KtEq3APF8HV5jOYvMtZCArVTkzrLayJ5po4VKwjzWGopN5ZqJHkR%2FSuZvlL%2BhIyroL169tOEwSbjmVqqj4np8NKTVYRE7y5grrPBHzg%2FCpJ2AyfnEJGUU3NiH%2BdUSR38w1PsUvqz8uBNBjaR1gkPDem9MK5AOtVoOPwuty%2B1q5QzKpe8hHrSF6qd63mxDQXHMAeYYydDcFmt9nooqqqMcsol7hdEg%2F52T%2FiBITKpZ6DtpZzrYYQmMQeOwSjTdkK348pZxLt5EAKQbeuZDZ2Dk3B0mpU05VtrnsdT7H9qMG0MjTpyVWASEiEXx3SgL%2BLSW9h2PeKLTT45Qgv66IBM9jd%2FAKy0JTPkf0Jqo5GymRLcQmDeVuc%2FFDDjyjWPcwX%2BRs1UHRO3aLiOLsx6Af4IA5WMgGY4JPeFQ%2Bqka0HihkCdmyhJuXWSuIPbfGp7ciyvemxGLvV7zafTZtmZq%2FlL%2BCQ2ADB99NtzAm%2F6mhmrIzGeEZjapvGHnnVaA8ZZElCkjYn%2F0wPB6gxmHSEohkNNyVVnwCC05e98mppUCLYCUqLJVddZMutZPIawbs6ZV4O8jPFpBZmlmyf7907pZgkNKqrbiowAAl6uYfMkrnlItaKzPwn3Fr3cE5d%2B9FGNLWefDTDIqcXDBjqkAfHUM8hrKTnKZk7SA%2B1aYMW3CcVhxY%2F2o%2BGnOqJdXo4Xw0W4NbY6u7Ik3QkTocHsxS82738G6CZ6AXO9fxfHNPXVRndNeFa0pzojX5XGWso370Je2FpuF8woLPPJUGqYn1j4msVchWhN2nplmlUzHAYjGg5dGEnm7G3JpPY88YqLkokSGW6qEd0uvBCt7NpIWztq4scm7xlGr%2FK3tSSOXAM68s8H&X-Amz-Signature=55df7cd9343b2857f787b7d60e6cfd3a5f76c63f21c6642a9da4eec4ff373218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZER5GV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0o8mGs3cXT5Oo7D%2FCVDhlshmp7iB8KxTPwFSyHspUAIhAJCvhtkOe%2FFQG7IYzIW9ObFWU6jvPnhdS%2BZ0nZXUMHVrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLDa9EXAcTzyg0KtEq3APF8HV5jOYvMtZCArVTkzrLayJ5po4VKwjzWGopN5ZqJHkR%2FSuZvlL%2BhIyroL169tOEwSbjmVqqj4np8NKTVYRE7y5grrPBHzg%2FCpJ2AyfnEJGUU3NiH%2BdUSR38w1PsUvqz8uBNBjaR1gkPDem9MK5AOtVoOPwuty%2B1q5QzKpe8hHrSF6qd63mxDQXHMAeYYydDcFmt9nooqqqMcsol7hdEg%2F52T%2FiBITKpZ6DtpZzrYYQmMQeOwSjTdkK348pZxLt5EAKQbeuZDZ2Dk3B0mpU05VtrnsdT7H9qMG0MjTpyVWASEiEXx3SgL%2BLSW9h2PeKLTT45Qgv66IBM9jd%2FAKy0JTPkf0Jqo5GymRLcQmDeVuc%2FFDDjyjWPcwX%2BRs1UHRO3aLiOLsx6Af4IA5WMgGY4JPeFQ%2Bqka0HihkCdmyhJuXWSuIPbfGp7ciyvemxGLvV7zafTZtmZq%2FlL%2BCQ2ADB99NtzAm%2F6mhmrIzGeEZjapvGHnnVaA8ZZElCkjYn%2F0wPB6gxmHSEohkNNyVVnwCC05e98mppUCLYCUqLJVddZMutZPIawbs6ZV4O8jPFpBZmlmyf7907pZgkNKqrbiowAAl6uYfMkrnlItaKzPwn3Fr3cE5d%2B9FGNLWefDTDIqcXDBjqkAfHUM8hrKTnKZk7SA%2B1aYMW3CcVhxY%2F2o%2BGnOqJdXo4Xw0W4NbY6u7Ik3QkTocHsxS82738G6CZ6AXO9fxfHNPXVRndNeFa0pzojX5XGWso370Je2FpuF8woLPPJUGqYn1j4msVchWhN2nplmlUzHAYjGg5dGEnm7G3JpPY88YqLkokSGW6qEd0uvBCt7NpIWztq4scm7xlGr%2FK3tSSOXAM68s8H&X-Amz-Signature=95a3639a387805153fea08dd815c25c9da64248f6282bffb54b112259ec9e4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZER5GV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0o8mGs3cXT5Oo7D%2FCVDhlshmp7iB8KxTPwFSyHspUAIhAJCvhtkOe%2FFQG7IYzIW9ObFWU6jvPnhdS%2BZ0nZXUMHVrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLDa9EXAcTzyg0KtEq3APF8HV5jOYvMtZCArVTkzrLayJ5po4VKwjzWGopN5ZqJHkR%2FSuZvlL%2BhIyroL169tOEwSbjmVqqj4np8NKTVYRE7y5grrPBHzg%2FCpJ2AyfnEJGUU3NiH%2BdUSR38w1PsUvqz8uBNBjaR1gkPDem9MK5AOtVoOPwuty%2B1q5QzKpe8hHrSF6qd63mxDQXHMAeYYydDcFmt9nooqqqMcsol7hdEg%2F52T%2FiBITKpZ6DtpZzrYYQmMQeOwSjTdkK348pZxLt5EAKQbeuZDZ2Dk3B0mpU05VtrnsdT7H9qMG0MjTpyVWASEiEXx3SgL%2BLSW9h2PeKLTT45Qgv66IBM9jd%2FAKy0JTPkf0Jqo5GymRLcQmDeVuc%2FFDDjyjWPcwX%2BRs1UHRO3aLiOLsx6Af4IA5WMgGY4JPeFQ%2Bqka0HihkCdmyhJuXWSuIPbfGp7ciyvemxGLvV7zafTZtmZq%2FlL%2BCQ2ADB99NtzAm%2F6mhmrIzGeEZjapvGHnnVaA8ZZElCkjYn%2F0wPB6gxmHSEohkNNyVVnwCC05e98mppUCLYCUqLJVddZMutZPIawbs6ZV4O8jPFpBZmlmyf7907pZgkNKqrbiowAAl6uYfMkrnlItaKzPwn3Fr3cE5d%2B9FGNLWefDTDIqcXDBjqkAfHUM8hrKTnKZk7SA%2B1aYMW3CcVhxY%2F2o%2BGnOqJdXo4Xw0W4NbY6u7Ik3QkTocHsxS82738G6CZ6AXO9fxfHNPXVRndNeFa0pzojX5XGWso370Je2FpuF8woLPPJUGqYn1j4msVchWhN2nplmlUzHAYjGg5dGEnm7G3JpPY88YqLkokSGW6qEd0uvBCt7NpIWztq4scm7xlGr%2FK3tSSOXAM68s8H&X-Amz-Signature=0917afeabbcd46af51e4438bf4d84fb943d25c0365a916028d97aa5e8bc64c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZER5GV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0o8mGs3cXT5Oo7D%2FCVDhlshmp7iB8KxTPwFSyHspUAIhAJCvhtkOe%2FFQG7IYzIW9ObFWU6jvPnhdS%2BZ0nZXUMHVrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLDa9EXAcTzyg0KtEq3APF8HV5jOYvMtZCArVTkzrLayJ5po4VKwjzWGopN5ZqJHkR%2FSuZvlL%2BhIyroL169tOEwSbjmVqqj4np8NKTVYRE7y5grrPBHzg%2FCpJ2AyfnEJGUU3NiH%2BdUSR38w1PsUvqz8uBNBjaR1gkPDem9MK5AOtVoOPwuty%2B1q5QzKpe8hHrSF6qd63mxDQXHMAeYYydDcFmt9nooqqqMcsol7hdEg%2F52T%2FiBITKpZ6DtpZzrYYQmMQeOwSjTdkK348pZxLt5EAKQbeuZDZ2Dk3B0mpU05VtrnsdT7H9qMG0MjTpyVWASEiEXx3SgL%2BLSW9h2PeKLTT45Qgv66IBM9jd%2FAKy0JTPkf0Jqo5GymRLcQmDeVuc%2FFDDjyjWPcwX%2BRs1UHRO3aLiOLsx6Af4IA5WMgGY4JPeFQ%2Bqka0HihkCdmyhJuXWSuIPbfGp7ciyvemxGLvV7zafTZtmZq%2FlL%2BCQ2ADB99NtzAm%2F6mhmrIzGeEZjapvGHnnVaA8ZZElCkjYn%2F0wPB6gxmHSEohkNNyVVnwCC05e98mppUCLYCUqLJVddZMutZPIawbs6ZV4O8jPFpBZmlmyf7907pZgkNKqrbiowAAl6uYfMkrnlItaKzPwn3Fr3cE5d%2B9FGNLWefDTDIqcXDBjqkAfHUM8hrKTnKZk7SA%2B1aYMW3CcVhxY%2F2o%2BGnOqJdXo4Xw0W4NbY6u7Ik3QkTocHsxS82738G6CZ6AXO9fxfHNPXVRndNeFa0pzojX5XGWso370Je2FpuF8woLPPJUGqYn1j4msVchWhN2nplmlUzHAYjGg5dGEnm7G3JpPY88YqLkokSGW6qEd0uvBCt7NpIWztq4scm7xlGr%2FK3tSSOXAM68s8H&X-Amz-Signature=db7f2bc3de3415138fc1e01c5c572327a9b91620523995e8d69d6c7703bb59b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZER5GV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0o8mGs3cXT5Oo7D%2FCVDhlshmp7iB8KxTPwFSyHspUAIhAJCvhtkOe%2FFQG7IYzIW9ObFWU6jvPnhdS%2BZ0nZXUMHVrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLDa9EXAcTzyg0KtEq3APF8HV5jOYvMtZCArVTkzrLayJ5po4VKwjzWGopN5ZqJHkR%2FSuZvlL%2BhIyroL169tOEwSbjmVqqj4np8NKTVYRE7y5grrPBHzg%2FCpJ2AyfnEJGUU3NiH%2BdUSR38w1PsUvqz8uBNBjaR1gkPDem9MK5AOtVoOPwuty%2B1q5QzKpe8hHrSF6qd63mxDQXHMAeYYydDcFmt9nooqqqMcsol7hdEg%2F52T%2FiBITKpZ6DtpZzrYYQmMQeOwSjTdkK348pZxLt5EAKQbeuZDZ2Dk3B0mpU05VtrnsdT7H9qMG0MjTpyVWASEiEXx3SgL%2BLSW9h2PeKLTT45Qgv66IBM9jd%2FAKy0JTPkf0Jqo5GymRLcQmDeVuc%2FFDDjyjWPcwX%2BRs1UHRO3aLiOLsx6Af4IA5WMgGY4JPeFQ%2Bqka0HihkCdmyhJuXWSuIPbfGp7ciyvemxGLvV7zafTZtmZq%2FlL%2BCQ2ADB99NtzAm%2F6mhmrIzGeEZjapvGHnnVaA8ZZElCkjYn%2F0wPB6gxmHSEohkNNyVVnwCC05e98mppUCLYCUqLJVddZMutZPIawbs6ZV4O8jPFpBZmlmyf7907pZgkNKqrbiowAAl6uYfMkrnlItaKzPwn3Fr3cE5d%2B9FGNLWefDTDIqcXDBjqkAfHUM8hrKTnKZk7SA%2B1aYMW3CcVhxY%2F2o%2BGnOqJdXo4Xw0W4NbY6u7Ik3QkTocHsxS82738G6CZ6AXO9fxfHNPXVRndNeFa0pzojX5XGWso370Je2FpuF8woLPPJUGqYn1j4msVchWhN2nplmlUzHAYjGg5dGEnm7G3JpPY88YqLkokSGW6qEd0uvBCt7NpIWztq4scm7xlGr%2FK3tSSOXAM68s8H&X-Amz-Signature=5d8a5478f667a3287e10b66ff7e753d3153396eb927f8d50224332f85b9e9812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZER5GV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0o8mGs3cXT5Oo7D%2FCVDhlshmp7iB8KxTPwFSyHspUAIhAJCvhtkOe%2FFQG7IYzIW9ObFWU6jvPnhdS%2BZ0nZXUMHVrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLDa9EXAcTzyg0KtEq3APF8HV5jOYvMtZCArVTkzrLayJ5po4VKwjzWGopN5ZqJHkR%2FSuZvlL%2BhIyroL169tOEwSbjmVqqj4np8NKTVYRE7y5grrPBHzg%2FCpJ2AyfnEJGUU3NiH%2BdUSR38w1PsUvqz8uBNBjaR1gkPDem9MK5AOtVoOPwuty%2B1q5QzKpe8hHrSF6qd63mxDQXHMAeYYydDcFmt9nooqqqMcsol7hdEg%2F52T%2FiBITKpZ6DtpZzrYYQmMQeOwSjTdkK348pZxLt5EAKQbeuZDZ2Dk3B0mpU05VtrnsdT7H9qMG0MjTpyVWASEiEXx3SgL%2BLSW9h2PeKLTT45Qgv66IBM9jd%2FAKy0JTPkf0Jqo5GymRLcQmDeVuc%2FFDDjyjWPcwX%2BRs1UHRO3aLiOLsx6Af4IA5WMgGY4JPeFQ%2Bqka0HihkCdmyhJuXWSuIPbfGp7ciyvemxGLvV7zafTZtmZq%2FlL%2BCQ2ADB99NtzAm%2F6mhmrIzGeEZjapvGHnnVaA8ZZElCkjYn%2F0wPB6gxmHSEohkNNyVVnwCC05e98mppUCLYCUqLJVddZMutZPIawbs6ZV4O8jPFpBZmlmyf7907pZgkNKqrbiowAAl6uYfMkrnlItaKzPwn3Fr3cE5d%2B9FGNLWefDTDIqcXDBjqkAfHUM8hrKTnKZk7SA%2B1aYMW3CcVhxY%2F2o%2BGnOqJdXo4Xw0W4NbY6u7Ik3QkTocHsxS82738G6CZ6AXO9fxfHNPXVRndNeFa0pzojX5XGWso370Je2FpuF8woLPPJUGqYn1j4msVchWhN2nplmlUzHAYjGg5dGEnm7G3JpPY88YqLkokSGW6qEd0uvBCt7NpIWztq4scm7xlGr%2FK3tSSOXAM68s8H&X-Amz-Signature=123d89ca2d6206c4e7e17b7484c1533f3ed6b1a2a213fa7431a99c7f0046eabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
