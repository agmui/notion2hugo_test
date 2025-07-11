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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJ6Z6SI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4PYgDIfdfl9KmRjR%2Frt1eTHbYze8hQisFUz5X4kHiyAiBcmKhHSNBdDkBcehyUETTI7OiGf%2FTV0Kj8ojY2GCphYiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JOVbiXMhc%2FuJf3PKtwDkFmQzxbwLXOycewA%2BrvSuESiFMhS%2BNgwaKg7JWMYQ%2FJcsremX9lvSqgLBQV7o%2BTXfxf9mjzGqrdpc2r1BJ7zkcxxv3wvhsPzkA9jZibVqAf2ABK7RHtEmsYAK6s5Wa5potbKNIEhzNnDWZT87L8gPLT%2Fk6BsSsPAxbHQz1FgZLb4uz3pOENP14cSpsVUFFu6mP%2Fthz%2BSP9l8i8uo9DZxeZ5U3pDVOSIkY1zzNmSGLFaH3Ztb2Mq5vVHVAf9Tab4wPLoG%2BgENfPqSa1MDNk%2F6OsR%2FkZFsk1zLTFTJ4WsqVfTYVqmM0D0S6A%2FKcr5I7PwxY0W5QERqkGjFOyWtye%2FQuKxKuBCuqmpmZ2QTYsBrKbQZK%2ByVpJIJCa3I0w6FxkePr27LFzpERzKMz%2B%2BzyrUFU6wDHKfY%2BEq9uVnMXGwKXO6Csv%2Fr2M%2FpEnfF0ePwrsNtSkywJNraz2SXo3V%2B2yxtZwrTECQlY%2FiQAcDYWUJg7sSSM%2FvcHXyjuWaiF6LdAHgi5fKYgFiejuURkuBpRrbsEGmyj4kicmB55Ybm9AditIsQGr0v7%2F%2FSmOcmXI6GnFrFP0v1C2UKlSe4MK5uYNP4i7QqZTKcF0yxy5m4Q6sOwPjJhjJuXlQFa7TlUlMwpdLCwwY6pgHY4RueG4WjjnxABq8A%2FVJkk8oYrNW7XILJV3gFu6W1RS1SzzOqpomDy042M9ULlfBctU3YZz4wP1%2BYir74RQTkldeoq05rFyizP3EK36dWFFkDHSkTC7m40sMGgfJDhlw%2Bw%2Fzd6beXGxvE7rVyqsTWEbtta9r1D8y1%2FBJL0KqwDxgg%2F2JOjwTZWSMI5GBJ5y5u3vYR1NVV22ZuNL64Sq5Ak9Fzrin%2B&X-Amz-Signature=5b9189c1713a17e1888e5518129a91c3da67cbd69c43d35d7348a66f4c53504f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJ6Z6SI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4PYgDIfdfl9KmRjR%2Frt1eTHbYze8hQisFUz5X4kHiyAiBcmKhHSNBdDkBcehyUETTI7OiGf%2FTV0Kj8ojY2GCphYiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JOVbiXMhc%2FuJf3PKtwDkFmQzxbwLXOycewA%2BrvSuESiFMhS%2BNgwaKg7JWMYQ%2FJcsremX9lvSqgLBQV7o%2BTXfxf9mjzGqrdpc2r1BJ7zkcxxv3wvhsPzkA9jZibVqAf2ABK7RHtEmsYAK6s5Wa5potbKNIEhzNnDWZT87L8gPLT%2Fk6BsSsPAxbHQz1FgZLb4uz3pOENP14cSpsVUFFu6mP%2Fthz%2BSP9l8i8uo9DZxeZ5U3pDVOSIkY1zzNmSGLFaH3Ztb2Mq5vVHVAf9Tab4wPLoG%2BgENfPqSa1MDNk%2F6OsR%2FkZFsk1zLTFTJ4WsqVfTYVqmM0D0S6A%2FKcr5I7PwxY0W5QERqkGjFOyWtye%2FQuKxKuBCuqmpmZ2QTYsBrKbQZK%2ByVpJIJCa3I0w6FxkePr27LFzpERzKMz%2B%2BzyrUFU6wDHKfY%2BEq9uVnMXGwKXO6Csv%2Fr2M%2FpEnfF0ePwrsNtSkywJNraz2SXo3V%2B2yxtZwrTECQlY%2FiQAcDYWUJg7sSSM%2FvcHXyjuWaiF6LdAHgi5fKYgFiejuURkuBpRrbsEGmyj4kicmB55Ybm9AditIsQGr0v7%2F%2FSmOcmXI6GnFrFP0v1C2UKlSe4MK5uYNP4i7QqZTKcF0yxy5m4Q6sOwPjJhjJuXlQFa7TlUlMwpdLCwwY6pgHY4RueG4WjjnxABq8A%2FVJkk8oYrNW7XILJV3gFu6W1RS1SzzOqpomDy042M9ULlfBctU3YZz4wP1%2BYir74RQTkldeoq05rFyizP3EK36dWFFkDHSkTC7m40sMGgfJDhlw%2Bw%2Fzd6beXGxvE7rVyqsTWEbtta9r1D8y1%2FBJL0KqwDxgg%2F2JOjwTZWSMI5GBJ5y5u3vYR1NVV22ZuNL64Sq5Ak9Fzrin%2B&X-Amz-Signature=46382b8a0d89fe3df23731757438cd4295af0ae9286ef753f78ba3168a136daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJ6Z6SI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4PYgDIfdfl9KmRjR%2Frt1eTHbYze8hQisFUz5X4kHiyAiBcmKhHSNBdDkBcehyUETTI7OiGf%2FTV0Kj8ojY2GCphYiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JOVbiXMhc%2FuJf3PKtwDkFmQzxbwLXOycewA%2BrvSuESiFMhS%2BNgwaKg7JWMYQ%2FJcsremX9lvSqgLBQV7o%2BTXfxf9mjzGqrdpc2r1BJ7zkcxxv3wvhsPzkA9jZibVqAf2ABK7RHtEmsYAK6s5Wa5potbKNIEhzNnDWZT87L8gPLT%2Fk6BsSsPAxbHQz1FgZLb4uz3pOENP14cSpsVUFFu6mP%2Fthz%2BSP9l8i8uo9DZxeZ5U3pDVOSIkY1zzNmSGLFaH3Ztb2Mq5vVHVAf9Tab4wPLoG%2BgENfPqSa1MDNk%2F6OsR%2FkZFsk1zLTFTJ4WsqVfTYVqmM0D0S6A%2FKcr5I7PwxY0W5QERqkGjFOyWtye%2FQuKxKuBCuqmpmZ2QTYsBrKbQZK%2ByVpJIJCa3I0w6FxkePr27LFzpERzKMz%2B%2BzyrUFU6wDHKfY%2BEq9uVnMXGwKXO6Csv%2Fr2M%2FpEnfF0ePwrsNtSkywJNraz2SXo3V%2B2yxtZwrTECQlY%2FiQAcDYWUJg7sSSM%2FvcHXyjuWaiF6LdAHgi5fKYgFiejuURkuBpRrbsEGmyj4kicmB55Ybm9AditIsQGr0v7%2F%2FSmOcmXI6GnFrFP0v1C2UKlSe4MK5uYNP4i7QqZTKcF0yxy5m4Q6sOwPjJhjJuXlQFa7TlUlMwpdLCwwY6pgHY4RueG4WjjnxABq8A%2FVJkk8oYrNW7XILJV3gFu6W1RS1SzzOqpomDy042M9ULlfBctU3YZz4wP1%2BYir74RQTkldeoq05rFyizP3EK36dWFFkDHSkTC7m40sMGgfJDhlw%2Bw%2Fzd6beXGxvE7rVyqsTWEbtta9r1D8y1%2FBJL0KqwDxgg%2F2JOjwTZWSMI5GBJ5y5u3vYR1NVV22ZuNL64Sq5Ak9Fzrin%2B&X-Amz-Signature=b4c07ac5b63c1569d7a87dbc8ab0b7b9f0027a0913f8853359fe1181fdd0d6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJ6Z6SI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4PYgDIfdfl9KmRjR%2Frt1eTHbYze8hQisFUz5X4kHiyAiBcmKhHSNBdDkBcehyUETTI7OiGf%2FTV0Kj8ojY2GCphYiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JOVbiXMhc%2FuJf3PKtwDkFmQzxbwLXOycewA%2BrvSuESiFMhS%2BNgwaKg7JWMYQ%2FJcsremX9lvSqgLBQV7o%2BTXfxf9mjzGqrdpc2r1BJ7zkcxxv3wvhsPzkA9jZibVqAf2ABK7RHtEmsYAK6s5Wa5potbKNIEhzNnDWZT87L8gPLT%2Fk6BsSsPAxbHQz1FgZLb4uz3pOENP14cSpsVUFFu6mP%2Fthz%2BSP9l8i8uo9DZxeZ5U3pDVOSIkY1zzNmSGLFaH3Ztb2Mq5vVHVAf9Tab4wPLoG%2BgENfPqSa1MDNk%2F6OsR%2FkZFsk1zLTFTJ4WsqVfTYVqmM0D0S6A%2FKcr5I7PwxY0W5QERqkGjFOyWtye%2FQuKxKuBCuqmpmZ2QTYsBrKbQZK%2ByVpJIJCa3I0w6FxkePr27LFzpERzKMz%2B%2BzyrUFU6wDHKfY%2BEq9uVnMXGwKXO6Csv%2Fr2M%2FpEnfF0ePwrsNtSkywJNraz2SXo3V%2B2yxtZwrTECQlY%2FiQAcDYWUJg7sSSM%2FvcHXyjuWaiF6LdAHgi5fKYgFiejuURkuBpRrbsEGmyj4kicmB55Ybm9AditIsQGr0v7%2F%2FSmOcmXI6GnFrFP0v1C2UKlSe4MK5uYNP4i7QqZTKcF0yxy5m4Q6sOwPjJhjJuXlQFa7TlUlMwpdLCwwY6pgHY4RueG4WjjnxABq8A%2FVJkk8oYrNW7XILJV3gFu6W1RS1SzzOqpomDy042M9ULlfBctU3YZz4wP1%2BYir74RQTkldeoq05rFyizP3EK36dWFFkDHSkTC7m40sMGgfJDhlw%2Bw%2Fzd6beXGxvE7rVyqsTWEbtta9r1D8y1%2FBJL0KqwDxgg%2F2JOjwTZWSMI5GBJ5y5u3vYR1NVV22ZuNL64Sq5Ak9Fzrin%2B&X-Amz-Signature=5baef7fccece33ee29d93f2db21bd1b3ca023bf6896777cd8ea96bfbc727a861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJ6Z6SI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4PYgDIfdfl9KmRjR%2Frt1eTHbYze8hQisFUz5X4kHiyAiBcmKhHSNBdDkBcehyUETTI7OiGf%2FTV0Kj8ojY2GCphYiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JOVbiXMhc%2FuJf3PKtwDkFmQzxbwLXOycewA%2BrvSuESiFMhS%2BNgwaKg7JWMYQ%2FJcsremX9lvSqgLBQV7o%2BTXfxf9mjzGqrdpc2r1BJ7zkcxxv3wvhsPzkA9jZibVqAf2ABK7RHtEmsYAK6s5Wa5potbKNIEhzNnDWZT87L8gPLT%2Fk6BsSsPAxbHQz1FgZLb4uz3pOENP14cSpsVUFFu6mP%2Fthz%2BSP9l8i8uo9DZxeZ5U3pDVOSIkY1zzNmSGLFaH3Ztb2Mq5vVHVAf9Tab4wPLoG%2BgENfPqSa1MDNk%2F6OsR%2FkZFsk1zLTFTJ4WsqVfTYVqmM0D0S6A%2FKcr5I7PwxY0W5QERqkGjFOyWtye%2FQuKxKuBCuqmpmZ2QTYsBrKbQZK%2ByVpJIJCa3I0w6FxkePr27LFzpERzKMz%2B%2BzyrUFU6wDHKfY%2BEq9uVnMXGwKXO6Csv%2Fr2M%2FpEnfF0ePwrsNtSkywJNraz2SXo3V%2B2yxtZwrTECQlY%2FiQAcDYWUJg7sSSM%2FvcHXyjuWaiF6LdAHgi5fKYgFiejuURkuBpRrbsEGmyj4kicmB55Ybm9AditIsQGr0v7%2F%2FSmOcmXI6GnFrFP0v1C2UKlSe4MK5uYNP4i7QqZTKcF0yxy5m4Q6sOwPjJhjJuXlQFa7TlUlMwpdLCwwY6pgHY4RueG4WjjnxABq8A%2FVJkk8oYrNW7XILJV3gFu6W1RS1SzzOqpomDy042M9ULlfBctU3YZz4wP1%2BYir74RQTkldeoq05rFyizP3EK36dWFFkDHSkTC7m40sMGgfJDhlw%2Bw%2Fzd6beXGxvE7rVyqsTWEbtta9r1D8y1%2FBJL0KqwDxgg%2F2JOjwTZWSMI5GBJ5y5u3vYR1NVV22ZuNL64Sq5Ak9Fzrin%2B&X-Amz-Signature=e3b38b7e71420e6d3a6054eff6a6778c2b22522146df2a75cdadc508b937756c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJ6Z6SI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4PYgDIfdfl9KmRjR%2Frt1eTHbYze8hQisFUz5X4kHiyAiBcmKhHSNBdDkBcehyUETTI7OiGf%2FTV0Kj8ojY2GCphYiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JOVbiXMhc%2FuJf3PKtwDkFmQzxbwLXOycewA%2BrvSuESiFMhS%2BNgwaKg7JWMYQ%2FJcsremX9lvSqgLBQV7o%2BTXfxf9mjzGqrdpc2r1BJ7zkcxxv3wvhsPzkA9jZibVqAf2ABK7RHtEmsYAK6s5Wa5potbKNIEhzNnDWZT87L8gPLT%2Fk6BsSsPAxbHQz1FgZLb4uz3pOENP14cSpsVUFFu6mP%2Fthz%2BSP9l8i8uo9DZxeZ5U3pDVOSIkY1zzNmSGLFaH3Ztb2Mq5vVHVAf9Tab4wPLoG%2BgENfPqSa1MDNk%2F6OsR%2FkZFsk1zLTFTJ4WsqVfTYVqmM0D0S6A%2FKcr5I7PwxY0W5QERqkGjFOyWtye%2FQuKxKuBCuqmpmZ2QTYsBrKbQZK%2ByVpJIJCa3I0w6FxkePr27LFzpERzKMz%2B%2BzyrUFU6wDHKfY%2BEq9uVnMXGwKXO6Csv%2Fr2M%2FpEnfF0ePwrsNtSkywJNraz2SXo3V%2B2yxtZwrTECQlY%2FiQAcDYWUJg7sSSM%2FvcHXyjuWaiF6LdAHgi5fKYgFiejuURkuBpRrbsEGmyj4kicmB55Ybm9AditIsQGr0v7%2F%2FSmOcmXI6GnFrFP0v1C2UKlSe4MK5uYNP4i7QqZTKcF0yxy5m4Q6sOwPjJhjJuXlQFa7TlUlMwpdLCwwY6pgHY4RueG4WjjnxABq8A%2FVJkk8oYrNW7XILJV3gFu6W1RS1SzzOqpomDy042M9ULlfBctU3YZz4wP1%2BYir74RQTkldeoq05rFyizP3EK36dWFFkDHSkTC7m40sMGgfJDhlw%2Bw%2Fzd6beXGxvE7rVyqsTWEbtta9r1D8y1%2FBJL0KqwDxgg%2F2JOjwTZWSMI5GBJ5y5u3vYR1NVV22ZuNL64Sq5Ak9Fzrin%2B&X-Amz-Signature=5c1b3259d7534adb0f529ffb757f4e6d1d08abc7d0c21ed86b29c6f59f56977e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
