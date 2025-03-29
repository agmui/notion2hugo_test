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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXJ6TZ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCKKRFA4GPicpjevvxfHzHqAaUl1MZcQSXG%2FBIE%2Fc3WXQIhANhWA6nZxJ3N2JVl24jxU2oCVHhX17OYTdNxu2ImNde6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwVEh2P8zLowH6yUm4q3AOiYu0u1oJ6R%2Bnxvd6IrwEl0wW6F%2F8YLmQt5nWRyrNCFEbHxCIS%2B6md1gocOvZBpfGaDhx9CxXOKLVa0trpflmdalcLUK3tKXOk0NNLJhbCO9j2CLrzqLsxs%2BhQT%2BmbDZn7t6F6NS94uz52RBLQ5ukdWNBna6m51Mc3%2BK8snKpzWVFcdR4irTNYwFhRHrMSIyM0zFKm2XvAV7h6YRsjgOg7hp09lR8GtpoMTRRfC2CNMWvxqQNUXGwntMFLtS7kKHpcxySVwxO6UrCaSqDJ5ugnwExdqg%2Bq9fOpo6tDnUwl71kRWmqJu0qsTvSlDCMDW6EmPwadOFzYMerG0yt9auumYRNxrM6ZiseSWGwFEnr3LmVW5fYVOCdBmpvZW9liFPuXrhicFB77ovOH%2F3IIcMzHRZ9f26D4Q4ZWw8%2BmDe4g1zin6Ux%2B7yEp04r6TObSpPYW3fQdcQ16OSjlkBmPZcM4USabR0AMQnDqKjUkoZYcGikmUQneodh5Kia5frtNoSgW3CP8%2F6vbfCumOyFDnLzWydDH8C%2FxzmBkmkmhBi4ifrYm6WUEWlckVFDj3teT2IUdmaPMjoPJ2CkVW8ItM9xWeQKY%2F%2Fl8DFu4QH8PDbvDwdWIwTlFeVSDolGzlTCsiqG%2FBjqkAfjo6nOUdNBHLMT8ozttYzzQXAyS924i6xw%2FTK99CbxJ2fkD4OR%2BrAFt8OP2yj%2FCmrctZcVBL%2BT0GNJkD2qsFAE0b4AqagoRZQy1vNjZT0bSDreu7pOl%2BVs%2BXzEtQgOwgTwjFmNY%2BFvxbofLJKKcAv0%2FLDsEjJd2rAgjpH9Q1fDei0i984zUtjWJO0K4IIHBbH%2Fsm60KazWBLPf1gSGjRZq%2Bujf4&X-Amz-Signature=9bbd7599ab0c2dcfe36ada0a3eab4d5040e7cd0697337829ebe21ab36fdc3747&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXJ6TZ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCKKRFA4GPicpjevvxfHzHqAaUl1MZcQSXG%2FBIE%2Fc3WXQIhANhWA6nZxJ3N2JVl24jxU2oCVHhX17OYTdNxu2ImNde6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwVEh2P8zLowH6yUm4q3AOiYu0u1oJ6R%2Bnxvd6IrwEl0wW6F%2F8YLmQt5nWRyrNCFEbHxCIS%2B6md1gocOvZBpfGaDhx9CxXOKLVa0trpflmdalcLUK3tKXOk0NNLJhbCO9j2CLrzqLsxs%2BhQT%2BmbDZn7t6F6NS94uz52RBLQ5ukdWNBna6m51Mc3%2BK8snKpzWVFcdR4irTNYwFhRHrMSIyM0zFKm2XvAV7h6YRsjgOg7hp09lR8GtpoMTRRfC2CNMWvxqQNUXGwntMFLtS7kKHpcxySVwxO6UrCaSqDJ5ugnwExdqg%2Bq9fOpo6tDnUwl71kRWmqJu0qsTvSlDCMDW6EmPwadOFzYMerG0yt9auumYRNxrM6ZiseSWGwFEnr3LmVW5fYVOCdBmpvZW9liFPuXrhicFB77ovOH%2F3IIcMzHRZ9f26D4Q4ZWw8%2BmDe4g1zin6Ux%2B7yEp04r6TObSpPYW3fQdcQ16OSjlkBmPZcM4USabR0AMQnDqKjUkoZYcGikmUQneodh5Kia5frtNoSgW3CP8%2F6vbfCumOyFDnLzWydDH8C%2FxzmBkmkmhBi4ifrYm6WUEWlckVFDj3teT2IUdmaPMjoPJ2CkVW8ItM9xWeQKY%2F%2Fl8DFu4QH8PDbvDwdWIwTlFeVSDolGzlTCsiqG%2FBjqkAfjo6nOUdNBHLMT8ozttYzzQXAyS924i6xw%2FTK99CbxJ2fkD4OR%2BrAFt8OP2yj%2FCmrctZcVBL%2BT0GNJkD2qsFAE0b4AqagoRZQy1vNjZT0bSDreu7pOl%2BVs%2BXzEtQgOwgTwjFmNY%2BFvxbofLJKKcAv0%2FLDsEjJd2rAgjpH9Q1fDei0i984zUtjWJO0K4IIHBbH%2Fsm60KazWBLPf1gSGjRZq%2Bujf4&X-Amz-Signature=db4175821176feb1e12db7b5703e9894cbaa1e8309ee883584172c2f8cc73bae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXJ6TZ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCKKRFA4GPicpjevvxfHzHqAaUl1MZcQSXG%2FBIE%2Fc3WXQIhANhWA6nZxJ3N2JVl24jxU2oCVHhX17OYTdNxu2ImNde6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwVEh2P8zLowH6yUm4q3AOiYu0u1oJ6R%2Bnxvd6IrwEl0wW6F%2F8YLmQt5nWRyrNCFEbHxCIS%2B6md1gocOvZBpfGaDhx9CxXOKLVa0trpflmdalcLUK3tKXOk0NNLJhbCO9j2CLrzqLsxs%2BhQT%2BmbDZn7t6F6NS94uz52RBLQ5ukdWNBna6m51Mc3%2BK8snKpzWVFcdR4irTNYwFhRHrMSIyM0zFKm2XvAV7h6YRsjgOg7hp09lR8GtpoMTRRfC2CNMWvxqQNUXGwntMFLtS7kKHpcxySVwxO6UrCaSqDJ5ugnwExdqg%2Bq9fOpo6tDnUwl71kRWmqJu0qsTvSlDCMDW6EmPwadOFzYMerG0yt9auumYRNxrM6ZiseSWGwFEnr3LmVW5fYVOCdBmpvZW9liFPuXrhicFB77ovOH%2F3IIcMzHRZ9f26D4Q4ZWw8%2BmDe4g1zin6Ux%2B7yEp04r6TObSpPYW3fQdcQ16OSjlkBmPZcM4USabR0AMQnDqKjUkoZYcGikmUQneodh5Kia5frtNoSgW3CP8%2F6vbfCumOyFDnLzWydDH8C%2FxzmBkmkmhBi4ifrYm6WUEWlckVFDj3teT2IUdmaPMjoPJ2CkVW8ItM9xWeQKY%2F%2Fl8DFu4QH8PDbvDwdWIwTlFeVSDolGzlTCsiqG%2FBjqkAfjo6nOUdNBHLMT8ozttYzzQXAyS924i6xw%2FTK99CbxJ2fkD4OR%2BrAFt8OP2yj%2FCmrctZcVBL%2BT0GNJkD2qsFAE0b4AqagoRZQy1vNjZT0bSDreu7pOl%2BVs%2BXzEtQgOwgTwjFmNY%2BFvxbofLJKKcAv0%2FLDsEjJd2rAgjpH9Q1fDei0i984zUtjWJO0K4IIHBbH%2Fsm60KazWBLPf1gSGjRZq%2Bujf4&X-Amz-Signature=ad1ff8e64e764a9afc04ea168890ce879d932353df7089206881893c2d285e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXJ6TZ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCKKRFA4GPicpjevvxfHzHqAaUl1MZcQSXG%2FBIE%2Fc3WXQIhANhWA6nZxJ3N2JVl24jxU2oCVHhX17OYTdNxu2ImNde6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwVEh2P8zLowH6yUm4q3AOiYu0u1oJ6R%2Bnxvd6IrwEl0wW6F%2F8YLmQt5nWRyrNCFEbHxCIS%2B6md1gocOvZBpfGaDhx9CxXOKLVa0trpflmdalcLUK3tKXOk0NNLJhbCO9j2CLrzqLsxs%2BhQT%2BmbDZn7t6F6NS94uz52RBLQ5ukdWNBna6m51Mc3%2BK8snKpzWVFcdR4irTNYwFhRHrMSIyM0zFKm2XvAV7h6YRsjgOg7hp09lR8GtpoMTRRfC2CNMWvxqQNUXGwntMFLtS7kKHpcxySVwxO6UrCaSqDJ5ugnwExdqg%2Bq9fOpo6tDnUwl71kRWmqJu0qsTvSlDCMDW6EmPwadOFzYMerG0yt9auumYRNxrM6ZiseSWGwFEnr3LmVW5fYVOCdBmpvZW9liFPuXrhicFB77ovOH%2F3IIcMzHRZ9f26D4Q4ZWw8%2BmDe4g1zin6Ux%2B7yEp04r6TObSpPYW3fQdcQ16OSjlkBmPZcM4USabR0AMQnDqKjUkoZYcGikmUQneodh5Kia5frtNoSgW3CP8%2F6vbfCumOyFDnLzWydDH8C%2FxzmBkmkmhBi4ifrYm6WUEWlckVFDj3teT2IUdmaPMjoPJ2CkVW8ItM9xWeQKY%2F%2Fl8DFu4QH8PDbvDwdWIwTlFeVSDolGzlTCsiqG%2FBjqkAfjo6nOUdNBHLMT8ozttYzzQXAyS924i6xw%2FTK99CbxJ2fkD4OR%2BrAFt8OP2yj%2FCmrctZcVBL%2BT0GNJkD2qsFAE0b4AqagoRZQy1vNjZT0bSDreu7pOl%2BVs%2BXzEtQgOwgTwjFmNY%2BFvxbofLJKKcAv0%2FLDsEjJd2rAgjpH9Q1fDei0i984zUtjWJO0K4IIHBbH%2Fsm60KazWBLPf1gSGjRZq%2Bujf4&X-Amz-Signature=0013d410860ccec7370a13562c9c835db6e887892238a0b7f377e49ce1d05c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXJ6TZ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCKKRFA4GPicpjevvxfHzHqAaUl1MZcQSXG%2FBIE%2Fc3WXQIhANhWA6nZxJ3N2JVl24jxU2oCVHhX17OYTdNxu2ImNde6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwVEh2P8zLowH6yUm4q3AOiYu0u1oJ6R%2Bnxvd6IrwEl0wW6F%2F8YLmQt5nWRyrNCFEbHxCIS%2B6md1gocOvZBpfGaDhx9CxXOKLVa0trpflmdalcLUK3tKXOk0NNLJhbCO9j2CLrzqLsxs%2BhQT%2BmbDZn7t6F6NS94uz52RBLQ5ukdWNBna6m51Mc3%2BK8snKpzWVFcdR4irTNYwFhRHrMSIyM0zFKm2XvAV7h6YRsjgOg7hp09lR8GtpoMTRRfC2CNMWvxqQNUXGwntMFLtS7kKHpcxySVwxO6UrCaSqDJ5ugnwExdqg%2Bq9fOpo6tDnUwl71kRWmqJu0qsTvSlDCMDW6EmPwadOFzYMerG0yt9auumYRNxrM6ZiseSWGwFEnr3LmVW5fYVOCdBmpvZW9liFPuXrhicFB77ovOH%2F3IIcMzHRZ9f26D4Q4ZWw8%2BmDe4g1zin6Ux%2B7yEp04r6TObSpPYW3fQdcQ16OSjlkBmPZcM4USabR0AMQnDqKjUkoZYcGikmUQneodh5Kia5frtNoSgW3CP8%2F6vbfCumOyFDnLzWydDH8C%2FxzmBkmkmhBi4ifrYm6WUEWlckVFDj3teT2IUdmaPMjoPJ2CkVW8ItM9xWeQKY%2F%2Fl8DFu4QH8PDbvDwdWIwTlFeVSDolGzlTCsiqG%2FBjqkAfjo6nOUdNBHLMT8ozttYzzQXAyS924i6xw%2FTK99CbxJ2fkD4OR%2BrAFt8OP2yj%2FCmrctZcVBL%2BT0GNJkD2qsFAE0b4AqagoRZQy1vNjZT0bSDreu7pOl%2BVs%2BXzEtQgOwgTwjFmNY%2BFvxbofLJKKcAv0%2FLDsEjJd2rAgjpH9Q1fDei0i984zUtjWJO0K4IIHBbH%2Fsm60KazWBLPf1gSGjRZq%2Bujf4&X-Amz-Signature=9015fb37fbb6080655d7753eaef1d722f34c2d4548c0351bf2690799c0d408d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXJ6TZ6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCKKRFA4GPicpjevvxfHzHqAaUl1MZcQSXG%2FBIE%2Fc3WXQIhANhWA6nZxJ3N2JVl24jxU2oCVHhX17OYTdNxu2ImNde6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwVEh2P8zLowH6yUm4q3AOiYu0u1oJ6R%2Bnxvd6IrwEl0wW6F%2F8YLmQt5nWRyrNCFEbHxCIS%2B6md1gocOvZBpfGaDhx9CxXOKLVa0trpflmdalcLUK3tKXOk0NNLJhbCO9j2CLrzqLsxs%2BhQT%2BmbDZn7t6F6NS94uz52RBLQ5ukdWNBna6m51Mc3%2BK8snKpzWVFcdR4irTNYwFhRHrMSIyM0zFKm2XvAV7h6YRsjgOg7hp09lR8GtpoMTRRfC2CNMWvxqQNUXGwntMFLtS7kKHpcxySVwxO6UrCaSqDJ5ugnwExdqg%2Bq9fOpo6tDnUwl71kRWmqJu0qsTvSlDCMDW6EmPwadOFzYMerG0yt9auumYRNxrM6ZiseSWGwFEnr3LmVW5fYVOCdBmpvZW9liFPuXrhicFB77ovOH%2F3IIcMzHRZ9f26D4Q4ZWw8%2BmDe4g1zin6Ux%2B7yEp04r6TObSpPYW3fQdcQ16OSjlkBmPZcM4USabR0AMQnDqKjUkoZYcGikmUQneodh5Kia5frtNoSgW3CP8%2F6vbfCumOyFDnLzWydDH8C%2FxzmBkmkmhBi4ifrYm6WUEWlckVFDj3teT2IUdmaPMjoPJ2CkVW8ItM9xWeQKY%2F%2Fl8DFu4QH8PDbvDwdWIwTlFeVSDolGzlTCsiqG%2FBjqkAfjo6nOUdNBHLMT8ozttYzzQXAyS924i6xw%2FTK99CbxJ2fkD4OR%2BrAFt8OP2yj%2FCmrctZcVBL%2BT0GNJkD2qsFAE0b4AqagoRZQy1vNjZT0bSDreu7pOl%2BVs%2BXzEtQgOwgTwjFmNY%2BFvxbofLJKKcAv0%2FLDsEjJd2rAgjpH9Q1fDei0i984zUtjWJO0K4IIHBbH%2Fsm60KazWBLPf1gSGjRZq%2Bujf4&X-Amz-Signature=dfdbdd0bb8c4540241fb7fcb709652f04a29e55f43f48fa046c8a3828768fce2&X-Amz-SignedHeaders=host&x-id=GetObject)
