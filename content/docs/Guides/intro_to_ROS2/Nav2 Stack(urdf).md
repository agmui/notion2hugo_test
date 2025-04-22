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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFTEROB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEsSe0k5j5hWOWU62T4m7q%2BscxqQ6%2Fmssq4PyHkbhV0MAiAeNlh8oM%2B6dRR39TtKOT55kx0mIamaKYzGT5iI9yBaICqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbn7eJ1MscyRHupiKtwDHq9FDboJ4UU%2F%2FbsaNPDnolUAT8ec%2Bx9gfoYxJEABU9uDlrBVUgAjB5SasmLgK9y6VwJoT23cQ8H44hP1q3R0fOrQILfD7yC3RBJdeEMQH5jdJ8yllWv8%2BXaPAdCZtNch4T8qOBTuJlzdJZHhUhQboc4oW1F9e7bjc2QFrLU7BcZighMYpgrm%2FhuSwb8MUB5H96TIAjQKudU%2Bk%2FMA5nS%2BYaTOJPNBSk1xC7XyKHtttrnu2raTazlGTnv4hVkfnYkWvpeCAVylIHX0r19MmgWBKVM2tfwGiawkUAkQshzZwiwqgM02ajnv3uh5sOIuUhkuBN8GSnDaj64OpHbPZW8BDpoSPY%2FR0dWZ7wmGbLsds%2F%2Fs4qC8NbP59zTxAdVCUFNlAsNNW7dozPQ9boFoJrNi%2BcV5MH5pDQo7ni5KRqZOtIFoyYz0PSfds3WEURgh3%2Fv9PumjMC4Kn58%2FDKUuDsMF9JL7Rj3OXOtj8Y9HeoCWtmIoh2xJ89POy%2BOqYA9ohdFRQUt7YA6GXF2%2BmB6qT8Ai60e%2BCyfQNsh6dzf48%2FmUDqnh1DjmzVc%2BnyVJK9CTr1KD7Zli2uIWVXrOmS3siPvANG9apuLJ5OlMGAd8xPYKN4VQexOycY64%2FxNyNn0wuomgwAY6pgH5VYaU8%2BZ%2FPwk3W29PABTJXjd7RtbW66sUw8OCgXONa11uLR8KROx4rcYoIf0ceuEt3XJud5LbB%2B2Wk8ou0e0Iny%2B15hZcrHoOhmegYhCAUAciR1TZt5lpZ9E8ZTBqoL0ypfNdNAUDkOxlh41f0ygvAtRlhjt3iw6B5t8ii7V8ZY2TOSQKo3%2BZ8r6UwqAIScUYrFPt45Wk%2F4DzL%2FF7%2BGj06Nr%2Bo98L&X-Amz-Signature=95566992c70ddba6e27a650a063795b7035a85e033dfca65cf6710802627f668&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFTEROB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEsSe0k5j5hWOWU62T4m7q%2BscxqQ6%2Fmssq4PyHkbhV0MAiAeNlh8oM%2B6dRR39TtKOT55kx0mIamaKYzGT5iI9yBaICqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbn7eJ1MscyRHupiKtwDHq9FDboJ4UU%2F%2FbsaNPDnolUAT8ec%2Bx9gfoYxJEABU9uDlrBVUgAjB5SasmLgK9y6VwJoT23cQ8H44hP1q3R0fOrQILfD7yC3RBJdeEMQH5jdJ8yllWv8%2BXaPAdCZtNch4T8qOBTuJlzdJZHhUhQboc4oW1F9e7bjc2QFrLU7BcZighMYpgrm%2FhuSwb8MUB5H96TIAjQKudU%2Bk%2FMA5nS%2BYaTOJPNBSk1xC7XyKHtttrnu2raTazlGTnv4hVkfnYkWvpeCAVylIHX0r19MmgWBKVM2tfwGiawkUAkQshzZwiwqgM02ajnv3uh5sOIuUhkuBN8GSnDaj64OpHbPZW8BDpoSPY%2FR0dWZ7wmGbLsds%2F%2Fs4qC8NbP59zTxAdVCUFNlAsNNW7dozPQ9boFoJrNi%2BcV5MH5pDQo7ni5KRqZOtIFoyYz0PSfds3WEURgh3%2Fv9PumjMC4Kn58%2FDKUuDsMF9JL7Rj3OXOtj8Y9HeoCWtmIoh2xJ89POy%2BOqYA9ohdFRQUt7YA6GXF2%2BmB6qT8Ai60e%2BCyfQNsh6dzf48%2FmUDqnh1DjmzVc%2BnyVJK9CTr1KD7Zli2uIWVXrOmS3siPvANG9apuLJ5OlMGAd8xPYKN4VQexOycY64%2FxNyNn0wuomgwAY6pgH5VYaU8%2BZ%2FPwk3W29PABTJXjd7RtbW66sUw8OCgXONa11uLR8KROx4rcYoIf0ceuEt3XJud5LbB%2B2Wk8ou0e0Iny%2B15hZcrHoOhmegYhCAUAciR1TZt5lpZ9E8ZTBqoL0ypfNdNAUDkOxlh41f0ygvAtRlhjt3iw6B5t8ii7V8ZY2TOSQKo3%2BZ8r6UwqAIScUYrFPt45Wk%2F4DzL%2FF7%2BGj06Nr%2Bo98L&X-Amz-Signature=bf929f46bc80291e331526227a7225f7a32ed03dfd3c1492ca89f4a9e4f86b10&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFTEROB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEsSe0k5j5hWOWU62T4m7q%2BscxqQ6%2Fmssq4PyHkbhV0MAiAeNlh8oM%2B6dRR39TtKOT55kx0mIamaKYzGT5iI9yBaICqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbn7eJ1MscyRHupiKtwDHq9FDboJ4UU%2F%2FbsaNPDnolUAT8ec%2Bx9gfoYxJEABU9uDlrBVUgAjB5SasmLgK9y6VwJoT23cQ8H44hP1q3R0fOrQILfD7yC3RBJdeEMQH5jdJ8yllWv8%2BXaPAdCZtNch4T8qOBTuJlzdJZHhUhQboc4oW1F9e7bjc2QFrLU7BcZighMYpgrm%2FhuSwb8MUB5H96TIAjQKudU%2Bk%2FMA5nS%2BYaTOJPNBSk1xC7XyKHtttrnu2raTazlGTnv4hVkfnYkWvpeCAVylIHX0r19MmgWBKVM2tfwGiawkUAkQshzZwiwqgM02ajnv3uh5sOIuUhkuBN8GSnDaj64OpHbPZW8BDpoSPY%2FR0dWZ7wmGbLsds%2F%2Fs4qC8NbP59zTxAdVCUFNlAsNNW7dozPQ9boFoJrNi%2BcV5MH5pDQo7ni5KRqZOtIFoyYz0PSfds3WEURgh3%2Fv9PumjMC4Kn58%2FDKUuDsMF9JL7Rj3OXOtj8Y9HeoCWtmIoh2xJ89POy%2BOqYA9ohdFRQUt7YA6GXF2%2BmB6qT8Ai60e%2BCyfQNsh6dzf48%2FmUDqnh1DjmzVc%2BnyVJK9CTr1KD7Zli2uIWVXrOmS3siPvANG9apuLJ5OlMGAd8xPYKN4VQexOycY64%2FxNyNn0wuomgwAY6pgH5VYaU8%2BZ%2FPwk3W29PABTJXjd7RtbW66sUw8OCgXONa11uLR8KROx4rcYoIf0ceuEt3XJud5LbB%2B2Wk8ou0e0Iny%2B15hZcrHoOhmegYhCAUAciR1TZt5lpZ9E8ZTBqoL0ypfNdNAUDkOxlh41f0ygvAtRlhjt3iw6B5t8ii7V8ZY2TOSQKo3%2BZ8r6UwqAIScUYrFPt45Wk%2F4DzL%2FF7%2BGj06Nr%2Bo98L&X-Amz-Signature=9659172c0dd8ea753688e85f7e021196f62588599346939442d0ab47b7ba9046&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFTEROB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEsSe0k5j5hWOWU62T4m7q%2BscxqQ6%2Fmssq4PyHkbhV0MAiAeNlh8oM%2B6dRR39TtKOT55kx0mIamaKYzGT5iI9yBaICqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbn7eJ1MscyRHupiKtwDHq9FDboJ4UU%2F%2FbsaNPDnolUAT8ec%2Bx9gfoYxJEABU9uDlrBVUgAjB5SasmLgK9y6VwJoT23cQ8H44hP1q3R0fOrQILfD7yC3RBJdeEMQH5jdJ8yllWv8%2BXaPAdCZtNch4T8qOBTuJlzdJZHhUhQboc4oW1F9e7bjc2QFrLU7BcZighMYpgrm%2FhuSwb8MUB5H96TIAjQKudU%2Bk%2FMA5nS%2BYaTOJPNBSk1xC7XyKHtttrnu2raTazlGTnv4hVkfnYkWvpeCAVylIHX0r19MmgWBKVM2tfwGiawkUAkQshzZwiwqgM02ajnv3uh5sOIuUhkuBN8GSnDaj64OpHbPZW8BDpoSPY%2FR0dWZ7wmGbLsds%2F%2Fs4qC8NbP59zTxAdVCUFNlAsNNW7dozPQ9boFoJrNi%2BcV5MH5pDQo7ni5KRqZOtIFoyYz0PSfds3WEURgh3%2Fv9PumjMC4Kn58%2FDKUuDsMF9JL7Rj3OXOtj8Y9HeoCWtmIoh2xJ89POy%2BOqYA9ohdFRQUt7YA6GXF2%2BmB6qT8Ai60e%2BCyfQNsh6dzf48%2FmUDqnh1DjmzVc%2BnyVJK9CTr1KD7Zli2uIWVXrOmS3siPvANG9apuLJ5OlMGAd8xPYKN4VQexOycY64%2FxNyNn0wuomgwAY6pgH5VYaU8%2BZ%2FPwk3W29PABTJXjd7RtbW66sUw8OCgXONa11uLR8KROx4rcYoIf0ceuEt3XJud5LbB%2B2Wk8ou0e0Iny%2B15hZcrHoOhmegYhCAUAciR1TZt5lpZ9E8ZTBqoL0ypfNdNAUDkOxlh41f0ygvAtRlhjt3iw6B5t8ii7V8ZY2TOSQKo3%2BZ8r6UwqAIScUYrFPt45Wk%2F4DzL%2FF7%2BGj06Nr%2Bo98L&X-Amz-Signature=36dcf3d8d9175945c32dbd56ceb9c5c3f2362cc632ecfdc4601c85a610f14ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFTEROB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEsSe0k5j5hWOWU62T4m7q%2BscxqQ6%2Fmssq4PyHkbhV0MAiAeNlh8oM%2B6dRR39TtKOT55kx0mIamaKYzGT5iI9yBaICqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbn7eJ1MscyRHupiKtwDHq9FDboJ4UU%2F%2FbsaNPDnolUAT8ec%2Bx9gfoYxJEABU9uDlrBVUgAjB5SasmLgK9y6VwJoT23cQ8H44hP1q3R0fOrQILfD7yC3RBJdeEMQH5jdJ8yllWv8%2BXaPAdCZtNch4T8qOBTuJlzdJZHhUhQboc4oW1F9e7bjc2QFrLU7BcZighMYpgrm%2FhuSwb8MUB5H96TIAjQKudU%2Bk%2FMA5nS%2BYaTOJPNBSk1xC7XyKHtttrnu2raTazlGTnv4hVkfnYkWvpeCAVylIHX0r19MmgWBKVM2tfwGiawkUAkQshzZwiwqgM02ajnv3uh5sOIuUhkuBN8GSnDaj64OpHbPZW8BDpoSPY%2FR0dWZ7wmGbLsds%2F%2Fs4qC8NbP59zTxAdVCUFNlAsNNW7dozPQ9boFoJrNi%2BcV5MH5pDQo7ni5KRqZOtIFoyYz0PSfds3WEURgh3%2Fv9PumjMC4Kn58%2FDKUuDsMF9JL7Rj3OXOtj8Y9HeoCWtmIoh2xJ89POy%2BOqYA9ohdFRQUt7YA6GXF2%2BmB6qT8Ai60e%2BCyfQNsh6dzf48%2FmUDqnh1DjmzVc%2BnyVJK9CTr1KD7Zli2uIWVXrOmS3siPvANG9apuLJ5OlMGAd8xPYKN4VQexOycY64%2FxNyNn0wuomgwAY6pgH5VYaU8%2BZ%2FPwk3W29PABTJXjd7RtbW66sUw8OCgXONa11uLR8KROx4rcYoIf0ceuEt3XJud5LbB%2B2Wk8ou0e0Iny%2B15hZcrHoOhmegYhCAUAciR1TZt5lpZ9E8ZTBqoL0ypfNdNAUDkOxlh41f0ygvAtRlhjt3iw6B5t8ii7V8ZY2TOSQKo3%2BZ8r6UwqAIScUYrFPt45Wk%2F4DzL%2FF7%2BGj06Nr%2Bo98L&X-Amz-Signature=81a9e43f505716011476e35e489202a8630ac7646ad8c10a71996f1b942f3f85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFTEROB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEsSe0k5j5hWOWU62T4m7q%2BscxqQ6%2Fmssq4PyHkbhV0MAiAeNlh8oM%2B6dRR39TtKOT55kx0mIamaKYzGT5iI9yBaICqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsbn7eJ1MscyRHupiKtwDHq9FDboJ4UU%2F%2FbsaNPDnolUAT8ec%2Bx9gfoYxJEABU9uDlrBVUgAjB5SasmLgK9y6VwJoT23cQ8H44hP1q3R0fOrQILfD7yC3RBJdeEMQH5jdJ8yllWv8%2BXaPAdCZtNch4T8qOBTuJlzdJZHhUhQboc4oW1F9e7bjc2QFrLU7BcZighMYpgrm%2FhuSwb8MUB5H96TIAjQKudU%2Bk%2FMA5nS%2BYaTOJPNBSk1xC7XyKHtttrnu2raTazlGTnv4hVkfnYkWvpeCAVylIHX0r19MmgWBKVM2tfwGiawkUAkQshzZwiwqgM02ajnv3uh5sOIuUhkuBN8GSnDaj64OpHbPZW8BDpoSPY%2FR0dWZ7wmGbLsds%2F%2Fs4qC8NbP59zTxAdVCUFNlAsNNW7dozPQ9boFoJrNi%2BcV5MH5pDQo7ni5KRqZOtIFoyYz0PSfds3WEURgh3%2Fv9PumjMC4Kn58%2FDKUuDsMF9JL7Rj3OXOtj8Y9HeoCWtmIoh2xJ89POy%2BOqYA9ohdFRQUt7YA6GXF2%2BmB6qT8Ai60e%2BCyfQNsh6dzf48%2FmUDqnh1DjmzVc%2BnyVJK9CTr1KD7Zli2uIWVXrOmS3siPvANG9apuLJ5OlMGAd8xPYKN4VQexOycY64%2FxNyNn0wuomgwAY6pgH5VYaU8%2BZ%2FPwk3W29PABTJXjd7RtbW66sUw8OCgXONa11uLR8KROx4rcYoIf0ceuEt3XJud5LbB%2B2Wk8ou0e0Iny%2B15hZcrHoOhmegYhCAUAciR1TZt5lpZ9E8ZTBqoL0ypfNdNAUDkOxlh41f0ygvAtRlhjt3iw6B5t8ii7V8ZY2TOSQKo3%2BZ8r6UwqAIScUYrFPt45Wk%2F4DzL%2FF7%2BGj06Nr%2Bo98L&X-Amz-Signature=f7550e3ca6d9f9297e59f8b0383876fe1a0742339434599f38cf34609893d05e&X-Amz-SignedHeaders=host&x-id=GetObject)
