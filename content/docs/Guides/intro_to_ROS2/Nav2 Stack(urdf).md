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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4WZGPP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQgG5fyVwMNMt3i3lWmGnSqHY3nTwwCbVTkdnCT1uMZgIhAPZb2KcjyXQ3YBoiDBI7%2FlzxpsaTewVxj0BEAYCiv5P5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbKkvh59O2uH6c%2Foq3AO26rBBJfWPBosAMT3H0Zs%2Blcr513Y7KV4fJ6oWeahDu5BJLvh4TwIB4sXFFFzXzeUhiykimZNszVYZXqGPYpiL7cyT%2B4AvzUm4UXFYt%2BOPEW6iO%2FE7v9iQQIlLDPVo5LTF9Ir9YqswqmFRVhFHycVdhi%2FU8M1Z0K3BgzQ6j9CEJjkKGv9IGqjJd5%2BIajq5O20bc1Jz4qg5XdAjx2Qwq2FnhCHnE3QdydblNZDqLjmr%2BtlLEsQtAvufMCnnZP5JcqpMmoYCPP1n2QndkmWE%2FeiLaV97QFayiDjE2Kib522xXP9ohFFS%2BhakFGUtgRSg5rcnSTSwje1vTpJxDkomlyZv7cY7wOCVrWjMD0kXpTucKUhXBzEogLESdEW0cgMDIL9yA2ynIRdbk2i3oNTSDkLdJQRv%2BE%2FOF4rn6x5aXsEFVLf6eUg2yfFD6CVLTlGsGw%2BC3ieZJznnF1TtOd99JF3wzcj%2BBh9bqvqJWt%2FvDaT9DqP4Z1Xh%2FJhg17YOQehaN2oZC%2BjB91yGqEyEhwlJPCkBPwfLnM1E3L9Tlv%2Bm%2FpfSCnfMkFdRP08ZX29UlcZuK2zR0aktoRaH4R1I6V37ESL%2Firs084l4GMZBknyeygTd35ya03Xn7zH4P8wDLzDfvOa8BjqkARNClfTtAFmgUDnAuD2zqpCXGNjeviNdjrMsnESQMU0t3FYa0mvjVXVRpnhw4ixR6dS0h3luomM8yAlONrit75Advmjaz7GYDHQYnlgAQ2TmdwKPYfldn%2BiJx85m4StgBf2%2BGr8M9ksxXZMOvT%2Fnc0ACBlWJn%2BU1XmXy%2BiuJK7qkkkczmDJFwLUXhnhu77gtME2m6GAp6gU7Xg5xYVRuZ1KCE1eQ&X-Amz-Signature=f5b42f1a08092b61623eb38985db97fee9306b5274018cdfc1abb5f14dfd86b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4WZGPP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQgG5fyVwMNMt3i3lWmGnSqHY3nTwwCbVTkdnCT1uMZgIhAPZb2KcjyXQ3YBoiDBI7%2FlzxpsaTewVxj0BEAYCiv5P5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbKkvh59O2uH6c%2Foq3AO26rBBJfWPBosAMT3H0Zs%2Blcr513Y7KV4fJ6oWeahDu5BJLvh4TwIB4sXFFFzXzeUhiykimZNszVYZXqGPYpiL7cyT%2B4AvzUm4UXFYt%2BOPEW6iO%2FE7v9iQQIlLDPVo5LTF9Ir9YqswqmFRVhFHycVdhi%2FU8M1Z0K3BgzQ6j9CEJjkKGv9IGqjJd5%2BIajq5O20bc1Jz4qg5XdAjx2Qwq2FnhCHnE3QdydblNZDqLjmr%2BtlLEsQtAvufMCnnZP5JcqpMmoYCPP1n2QndkmWE%2FeiLaV97QFayiDjE2Kib522xXP9ohFFS%2BhakFGUtgRSg5rcnSTSwje1vTpJxDkomlyZv7cY7wOCVrWjMD0kXpTucKUhXBzEogLESdEW0cgMDIL9yA2ynIRdbk2i3oNTSDkLdJQRv%2BE%2FOF4rn6x5aXsEFVLf6eUg2yfFD6CVLTlGsGw%2BC3ieZJznnF1TtOd99JF3wzcj%2BBh9bqvqJWt%2FvDaT9DqP4Z1Xh%2FJhg17YOQehaN2oZC%2BjB91yGqEyEhwlJPCkBPwfLnM1E3L9Tlv%2Bm%2FpfSCnfMkFdRP08ZX29UlcZuK2zR0aktoRaH4R1I6V37ESL%2Firs084l4GMZBknyeygTd35ya03Xn7zH4P8wDLzDfvOa8BjqkARNClfTtAFmgUDnAuD2zqpCXGNjeviNdjrMsnESQMU0t3FYa0mvjVXVRpnhw4ixR6dS0h3luomM8yAlONrit75Advmjaz7GYDHQYnlgAQ2TmdwKPYfldn%2BiJx85m4StgBf2%2BGr8M9ksxXZMOvT%2Fnc0ACBlWJn%2BU1XmXy%2BiuJK7qkkkczmDJFwLUXhnhu77gtME2m6GAp6gU7Xg5xYVRuZ1KCE1eQ&X-Amz-Signature=294fc166154845c29cea9c0530185afe164d7ef7435a4b574709119d7bb35581&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4WZGPP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQgG5fyVwMNMt3i3lWmGnSqHY3nTwwCbVTkdnCT1uMZgIhAPZb2KcjyXQ3YBoiDBI7%2FlzxpsaTewVxj0BEAYCiv5P5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbKkvh59O2uH6c%2Foq3AO26rBBJfWPBosAMT3H0Zs%2Blcr513Y7KV4fJ6oWeahDu5BJLvh4TwIB4sXFFFzXzeUhiykimZNszVYZXqGPYpiL7cyT%2B4AvzUm4UXFYt%2BOPEW6iO%2FE7v9iQQIlLDPVo5LTF9Ir9YqswqmFRVhFHycVdhi%2FU8M1Z0K3BgzQ6j9CEJjkKGv9IGqjJd5%2BIajq5O20bc1Jz4qg5XdAjx2Qwq2FnhCHnE3QdydblNZDqLjmr%2BtlLEsQtAvufMCnnZP5JcqpMmoYCPP1n2QndkmWE%2FeiLaV97QFayiDjE2Kib522xXP9ohFFS%2BhakFGUtgRSg5rcnSTSwje1vTpJxDkomlyZv7cY7wOCVrWjMD0kXpTucKUhXBzEogLESdEW0cgMDIL9yA2ynIRdbk2i3oNTSDkLdJQRv%2BE%2FOF4rn6x5aXsEFVLf6eUg2yfFD6CVLTlGsGw%2BC3ieZJznnF1TtOd99JF3wzcj%2BBh9bqvqJWt%2FvDaT9DqP4Z1Xh%2FJhg17YOQehaN2oZC%2BjB91yGqEyEhwlJPCkBPwfLnM1E3L9Tlv%2Bm%2FpfSCnfMkFdRP08ZX29UlcZuK2zR0aktoRaH4R1I6V37ESL%2Firs084l4GMZBknyeygTd35ya03Xn7zH4P8wDLzDfvOa8BjqkARNClfTtAFmgUDnAuD2zqpCXGNjeviNdjrMsnESQMU0t3FYa0mvjVXVRpnhw4ixR6dS0h3luomM8yAlONrit75Advmjaz7GYDHQYnlgAQ2TmdwKPYfldn%2BiJx85m4StgBf2%2BGr8M9ksxXZMOvT%2Fnc0ACBlWJn%2BU1XmXy%2BiuJK7qkkkczmDJFwLUXhnhu77gtME2m6GAp6gU7Xg5xYVRuZ1KCE1eQ&X-Amz-Signature=55035b4c7bc370a740f1aacfc483c4e469be7a13e078677e22d02a84a5a11bab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4WZGPP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQgG5fyVwMNMt3i3lWmGnSqHY3nTwwCbVTkdnCT1uMZgIhAPZb2KcjyXQ3YBoiDBI7%2FlzxpsaTewVxj0BEAYCiv5P5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbKkvh59O2uH6c%2Foq3AO26rBBJfWPBosAMT3H0Zs%2Blcr513Y7KV4fJ6oWeahDu5BJLvh4TwIB4sXFFFzXzeUhiykimZNszVYZXqGPYpiL7cyT%2B4AvzUm4UXFYt%2BOPEW6iO%2FE7v9iQQIlLDPVo5LTF9Ir9YqswqmFRVhFHycVdhi%2FU8M1Z0K3BgzQ6j9CEJjkKGv9IGqjJd5%2BIajq5O20bc1Jz4qg5XdAjx2Qwq2FnhCHnE3QdydblNZDqLjmr%2BtlLEsQtAvufMCnnZP5JcqpMmoYCPP1n2QndkmWE%2FeiLaV97QFayiDjE2Kib522xXP9ohFFS%2BhakFGUtgRSg5rcnSTSwje1vTpJxDkomlyZv7cY7wOCVrWjMD0kXpTucKUhXBzEogLESdEW0cgMDIL9yA2ynIRdbk2i3oNTSDkLdJQRv%2BE%2FOF4rn6x5aXsEFVLf6eUg2yfFD6CVLTlGsGw%2BC3ieZJznnF1TtOd99JF3wzcj%2BBh9bqvqJWt%2FvDaT9DqP4Z1Xh%2FJhg17YOQehaN2oZC%2BjB91yGqEyEhwlJPCkBPwfLnM1E3L9Tlv%2Bm%2FpfSCnfMkFdRP08ZX29UlcZuK2zR0aktoRaH4R1I6V37ESL%2Firs084l4GMZBknyeygTd35ya03Xn7zH4P8wDLzDfvOa8BjqkARNClfTtAFmgUDnAuD2zqpCXGNjeviNdjrMsnESQMU0t3FYa0mvjVXVRpnhw4ixR6dS0h3luomM8yAlONrit75Advmjaz7GYDHQYnlgAQ2TmdwKPYfldn%2BiJx85m4StgBf2%2BGr8M9ksxXZMOvT%2Fnc0ACBlWJn%2BU1XmXy%2BiuJK7qkkkczmDJFwLUXhnhu77gtME2m6GAp6gU7Xg5xYVRuZ1KCE1eQ&X-Amz-Signature=6aaca372557068c1d18addbb924fd97b53bb90bfe80d4f1b8b8c4340d98eff15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4WZGPP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQgG5fyVwMNMt3i3lWmGnSqHY3nTwwCbVTkdnCT1uMZgIhAPZb2KcjyXQ3YBoiDBI7%2FlzxpsaTewVxj0BEAYCiv5P5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbKkvh59O2uH6c%2Foq3AO26rBBJfWPBosAMT3H0Zs%2Blcr513Y7KV4fJ6oWeahDu5BJLvh4TwIB4sXFFFzXzeUhiykimZNszVYZXqGPYpiL7cyT%2B4AvzUm4UXFYt%2BOPEW6iO%2FE7v9iQQIlLDPVo5LTF9Ir9YqswqmFRVhFHycVdhi%2FU8M1Z0K3BgzQ6j9CEJjkKGv9IGqjJd5%2BIajq5O20bc1Jz4qg5XdAjx2Qwq2FnhCHnE3QdydblNZDqLjmr%2BtlLEsQtAvufMCnnZP5JcqpMmoYCPP1n2QndkmWE%2FeiLaV97QFayiDjE2Kib522xXP9ohFFS%2BhakFGUtgRSg5rcnSTSwje1vTpJxDkomlyZv7cY7wOCVrWjMD0kXpTucKUhXBzEogLESdEW0cgMDIL9yA2ynIRdbk2i3oNTSDkLdJQRv%2BE%2FOF4rn6x5aXsEFVLf6eUg2yfFD6CVLTlGsGw%2BC3ieZJznnF1TtOd99JF3wzcj%2BBh9bqvqJWt%2FvDaT9DqP4Z1Xh%2FJhg17YOQehaN2oZC%2BjB91yGqEyEhwlJPCkBPwfLnM1E3L9Tlv%2Bm%2FpfSCnfMkFdRP08ZX29UlcZuK2zR0aktoRaH4R1I6V37ESL%2Firs084l4GMZBknyeygTd35ya03Xn7zH4P8wDLzDfvOa8BjqkARNClfTtAFmgUDnAuD2zqpCXGNjeviNdjrMsnESQMU0t3FYa0mvjVXVRpnhw4ixR6dS0h3luomM8yAlONrit75Advmjaz7GYDHQYnlgAQ2TmdwKPYfldn%2BiJx85m4StgBf2%2BGr8M9ksxXZMOvT%2Fnc0ACBlWJn%2BU1XmXy%2BiuJK7qkkkczmDJFwLUXhnhu77gtME2m6GAp6gU7Xg5xYVRuZ1KCE1eQ&X-Amz-Signature=771b97dca48b4cfff4f19004cc0c7a1ceb555ebe4ac559a6fc6fe742eba3cd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4WZGPP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCQgG5fyVwMNMt3i3lWmGnSqHY3nTwwCbVTkdnCT1uMZgIhAPZb2KcjyXQ3YBoiDBI7%2FlzxpsaTewVxj0BEAYCiv5P5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwbKkvh59O2uH6c%2Foq3AO26rBBJfWPBosAMT3H0Zs%2Blcr513Y7KV4fJ6oWeahDu5BJLvh4TwIB4sXFFFzXzeUhiykimZNszVYZXqGPYpiL7cyT%2B4AvzUm4UXFYt%2BOPEW6iO%2FE7v9iQQIlLDPVo5LTF9Ir9YqswqmFRVhFHycVdhi%2FU8M1Z0K3BgzQ6j9CEJjkKGv9IGqjJd5%2BIajq5O20bc1Jz4qg5XdAjx2Qwq2FnhCHnE3QdydblNZDqLjmr%2BtlLEsQtAvufMCnnZP5JcqpMmoYCPP1n2QndkmWE%2FeiLaV97QFayiDjE2Kib522xXP9ohFFS%2BhakFGUtgRSg5rcnSTSwje1vTpJxDkomlyZv7cY7wOCVrWjMD0kXpTucKUhXBzEogLESdEW0cgMDIL9yA2ynIRdbk2i3oNTSDkLdJQRv%2BE%2FOF4rn6x5aXsEFVLf6eUg2yfFD6CVLTlGsGw%2BC3ieZJznnF1TtOd99JF3wzcj%2BBh9bqvqJWt%2FvDaT9DqP4Z1Xh%2FJhg17YOQehaN2oZC%2BjB91yGqEyEhwlJPCkBPwfLnM1E3L9Tlv%2Bm%2FpfSCnfMkFdRP08ZX29UlcZuK2zR0aktoRaH4R1I6V37ESL%2Firs084l4GMZBknyeygTd35ya03Xn7zH4P8wDLzDfvOa8BjqkARNClfTtAFmgUDnAuD2zqpCXGNjeviNdjrMsnESQMU0t3FYa0mvjVXVRpnhw4ixR6dS0h3luomM8yAlONrit75Advmjaz7GYDHQYnlgAQ2TmdwKPYfldn%2BiJx85m4StgBf2%2BGr8M9ksxXZMOvT%2Fnc0ACBlWJn%2BU1XmXy%2BiuJK7qkkkczmDJFwLUXhnhu77gtME2m6GAp6gU7Xg5xYVRuZ1KCE1eQ&X-Amz-Signature=a410b9c6c49fbf817fc2855cd5ba881e04c8a575d9ef81a17d170fe2654542ea&X-Amz-SignedHeaders=host&x-id=GetObject)
