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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KE3ENT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCecFnCp6TCi5g1NwE2rgVWMyZt9TgPNS44TYwz%2F7hJogIgdqy2FcPos%2FRrh6e7vZ1UhSWRKxlIiiugBUH8MCSy0oMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoFBFOiydZTCLW1CrcAz1yjscssW7LdQAX%2BNArSRDw%2FxGQGg%2FI9mlQLHaPHW60UBe5W1h00XISAxbX268ZQ0bI5j5UFvBq6XPW0PeDP4smFcuqFWmiYOqDGpM5EzT4y6LBVwJMfWf60OWB6u%2BQRjdx%2BLxUuygOvLY3CALummFqD1KX1bKPCbeWCe7MCj7rJdzzU7EXI9mzGZVNQ3N1ZkFmvZuGT6qCDBflSI7ksfc2juQXRcn9iTuHligkUrBTHbtxQvUyD5edHRCekQBW%2BaF2d9U%2B7wzrDv%2BegH0HBJUhgv1CnaZvWufi11pBvZ0w4bUUW0etaLDbK4i6%2BqNQi878dCpXXvjmmqYkFHeyWCYUE%2BdHiL7wyxgkGi2pisjypNwll0ptRzVIgfq8f%2BS23qJn8NZUdUCpnemGKWzwiB3BB2Bn0LdE4nBtW%2FVuiW9gQwLYTE1TCPyQ0ADzzP0XZawavQM1KeVy%2F76uA4UQ16gKIfUsh8mlXjan2dsKEGuZ7qu%2Bg1OsJmins%2BlFuyD7E476WxnLQ68t%2FeQ0M0xj5OiUEE%2B4rGBBQc2VXvtx6X36VN%2FL9iecO2Cz%2Bk1jYPfkHZ6s1wIFdF1f2xk9JdeRh1MZg5Gj5uu420s3wMFD3reK5Nny4O8o04nrJ190MIf2%2Br4GOqUBCNetCxDz7cl4IKTlMPloio05xeiqSJLQJJ0Bj9GHce3cYNNsGgX1TPyPv%2FRoRTidJISJaQ12cfDjRGJVk4H1TIaKWg8KYhOlLkoCWC4poUfe85M1%2Fb0rqz1E7QrQR5zJJ421EiVQcwWmyIbAXB12XzauiNuZP54fomRJZk5LBsfS2KaEsunkYPkxYr5RUe%2B2mhEYjcwivgYcV6Rn5OmPifpFkgnj&X-Amz-Signature=5c1c984e193769f3325790045fa3713ac9ea602b0500ce45d8662a60cfe7e57f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KE3ENT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCecFnCp6TCi5g1NwE2rgVWMyZt9TgPNS44TYwz%2F7hJogIgdqy2FcPos%2FRrh6e7vZ1UhSWRKxlIiiugBUH8MCSy0oMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoFBFOiydZTCLW1CrcAz1yjscssW7LdQAX%2BNArSRDw%2FxGQGg%2FI9mlQLHaPHW60UBe5W1h00XISAxbX268ZQ0bI5j5UFvBq6XPW0PeDP4smFcuqFWmiYOqDGpM5EzT4y6LBVwJMfWf60OWB6u%2BQRjdx%2BLxUuygOvLY3CALummFqD1KX1bKPCbeWCe7MCj7rJdzzU7EXI9mzGZVNQ3N1ZkFmvZuGT6qCDBflSI7ksfc2juQXRcn9iTuHligkUrBTHbtxQvUyD5edHRCekQBW%2BaF2d9U%2B7wzrDv%2BegH0HBJUhgv1CnaZvWufi11pBvZ0w4bUUW0etaLDbK4i6%2BqNQi878dCpXXvjmmqYkFHeyWCYUE%2BdHiL7wyxgkGi2pisjypNwll0ptRzVIgfq8f%2BS23qJn8NZUdUCpnemGKWzwiB3BB2Bn0LdE4nBtW%2FVuiW9gQwLYTE1TCPyQ0ADzzP0XZawavQM1KeVy%2F76uA4UQ16gKIfUsh8mlXjan2dsKEGuZ7qu%2Bg1OsJmins%2BlFuyD7E476WxnLQ68t%2FeQ0M0xj5OiUEE%2B4rGBBQc2VXvtx6X36VN%2FL9iecO2Cz%2Bk1jYPfkHZ6s1wIFdF1f2xk9JdeRh1MZg5Gj5uu420s3wMFD3reK5Nny4O8o04nrJ190MIf2%2Br4GOqUBCNetCxDz7cl4IKTlMPloio05xeiqSJLQJJ0Bj9GHce3cYNNsGgX1TPyPv%2FRoRTidJISJaQ12cfDjRGJVk4H1TIaKWg8KYhOlLkoCWC4poUfe85M1%2Fb0rqz1E7QrQR5zJJ421EiVQcwWmyIbAXB12XzauiNuZP54fomRJZk5LBsfS2KaEsunkYPkxYr5RUe%2B2mhEYjcwivgYcV6Rn5OmPifpFkgnj&X-Amz-Signature=1eaf2b9ac5a104e61adce9d2d5c6d33f51bf6fc72e175e06f2213b2e015d407d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KE3ENT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCecFnCp6TCi5g1NwE2rgVWMyZt9TgPNS44TYwz%2F7hJogIgdqy2FcPos%2FRrh6e7vZ1UhSWRKxlIiiugBUH8MCSy0oMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoFBFOiydZTCLW1CrcAz1yjscssW7LdQAX%2BNArSRDw%2FxGQGg%2FI9mlQLHaPHW60UBe5W1h00XISAxbX268ZQ0bI5j5UFvBq6XPW0PeDP4smFcuqFWmiYOqDGpM5EzT4y6LBVwJMfWf60OWB6u%2BQRjdx%2BLxUuygOvLY3CALummFqD1KX1bKPCbeWCe7MCj7rJdzzU7EXI9mzGZVNQ3N1ZkFmvZuGT6qCDBflSI7ksfc2juQXRcn9iTuHligkUrBTHbtxQvUyD5edHRCekQBW%2BaF2d9U%2B7wzrDv%2BegH0HBJUhgv1CnaZvWufi11pBvZ0w4bUUW0etaLDbK4i6%2BqNQi878dCpXXvjmmqYkFHeyWCYUE%2BdHiL7wyxgkGi2pisjypNwll0ptRzVIgfq8f%2BS23qJn8NZUdUCpnemGKWzwiB3BB2Bn0LdE4nBtW%2FVuiW9gQwLYTE1TCPyQ0ADzzP0XZawavQM1KeVy%2F76uA4UQ16gKIfUsh8mlXjan2dsKEGuZ7qu%2Bg1OsJmins%2BlFuyD7E476WxnLQ68t%2FeQ0M0xj5OiUEE%2B4rGBBQc2VXvtx6X36VN%2FL9iecO2Cz%2Bk1jYPfkHZ6s1wIFdF1f2xk9JdeRh1MZg5Gj5uu420s3wMFD3reK5Nny4O8o04nrJ190MIf2%2Br4GOqUBCNetCxDz7cl4IKTlMPloio05xeiqSJLQJJ0Bj9GHce3cYNNsGgX1TPyPv%2FRoRTidJISJaQ12cfDjRGJVk4H1TIaKWg8KYhOlLkoCWC4poUfe85M1%2Fb0rqz1E7QrQR5zJJ421EiVQcwWmyIbAXB12XzauiNuZP54fomRJZk5LBsfS2KaEsunkYPkxYr5RUe%2B2mhEYjcwivgYcV6Rn5OmPifpFkgnj&X-Amz-Signature=3f4fa4b7329b54918bacc7f85b79e3dd822521fd0bb2d564d56d1b8b173d649a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KE3ENT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCecFnCp6TCi5g1NwE2rgVWMyZt9TgPNS44TYwz%2F7hJogIgdqy2FcPos%2FRrh6e7vZ1UhSWRKxlIiiugBUH8MCSy0oMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoFBFOiydZTCLW1CrcAz1yjscssW7LdQAX%2BNArSRDw%2FxGQGg%2FI9mlQLHaPHW60UBe5W1h00XISAxbX268ZQ0bI5j5UFvBq6XPW0PeDP4smFcuqFWmiYOqDGpM5EzT4y6LBVwJMfWf60OWB6u%2BQRjdx%2BLxUuygOvLY3CALummFqD1KX1bKPCbeWCe7MCj7rJdzzU7EXI9mzGZVNQ3N1ZkFmvZuGT6qCDBflSI7ksfc2juQXRcn9iTuHligkUrBTHbtxQvUyD5edHRCekQBW%2BaF2d9U%2B7wzrDv%2BegH0HBJUhgv1CnaZvWufi11pBvZ0w4bUUW0etaLDbK4i6%2BqNQi878dCpXXvjmmqYkFHeyWCYUE%2BdHiL7wyxgkGi2pisjypNwll0ptRzVIgfq8f%2BS23qJn8NZUdUCpnemGKWzwiB3BB2Bn0LdE4nBtW%2FVuiW9gQwLYTE1TCPyQ0ADzzP0XZawavQM1KeVy%2F76uA4UQ16gKIfUsh8mlXjan2dsKEGuZ7qu%2Bg1OsJmins%2BlFuyD7E476WxnLQ68t%2FeQ0M0xj5OiUEE%2B4rGBBQc2VXvtx6X36VN%2FL9iecO2Cz%2Bk1jYPfkHZ6s1wIFdF1f2xk9JdeRh1MZg5Gj5uu420s3wMFD3reK5Nny4O8o04nrJ190MIf2%2Br4GOqUBCNetCxDz7cl4IKTlMPloio05xeiqSJLQJJ0Bj9GHce3cYNNsGgX1TPyPv%2FRoRTidJISJaQ12cfDjRGJVk4H1TIaKWg8KYhOlLkoCWC4poUfe85M1%2Fb0rqz1E7QrQR5zJJ421EiVQcwWmyIbAXB12XzauiNuZP54fomRJZk5LBsfS2KaEsunkYPkxYr5RUe%2B2mhEYjcwivgYcV6Rn5OmPifpFkgnj&X-Amz-Signature=2f89321782420ed1a5fde9867441d1afa98514497df0c37dcc23aeba5e34d130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KE3ENT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCecFnCp6TCi5g1NwE2rgVWMyZt9TgPNS44TYwz%2F7hJogIgdqy2FcPos%2FRrh6e7vZ1UhSWRKxlIiiugBUH8MCSy0oMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoFBFOiydZTCLW1CrcAz1yjscssW7LdQAX%2BNArSRDw%2FxGQGg%2FI9mlQLHaPHW60UBe5W1h00XISAxbX268ZQ0bI5j5UFvBq6XPW0PeDP4smFcuqFWmiYOqDGpM5EzT4y6LBVwJMfWf60OWB6u%2BQRjdx%2BLxUuygOvLY3CALummFqD1KX1bKPCbeWCe7MCj7rJdzzU7EXI9mzGZVNQ3N1ZkFmvZuGT6qCDBflSI7ksfc2juQXRcn9iTuHligkUrBTHbtxQvUyD5edHRCekQBW%2BaF2d9U%2B7wzrDv%2BegH0HBJUhgv1CnaZvWufi11pBvZ0w4bUUW0etaLDbK4i6%2BqNQi878dCpXXvjmmqYkFHeyWCYUE%2BdHiL7wyxgkGi2pisjypNwll0ptRzVIgfq8f%2BS23qJn8NZUdUCpnemGKWzwiB3BB2Bn0LdE4nBtW%2FVuiW9gQwLYTE1TCPyQ0ADzzP0XZawavQM1KeVy%2F76uA4UQ16gKIfUsh8mlXjan2dsKEGuZ7qu%2Bg1OsJmins%2BlFuyD7E476WxnLQ68t%2FeQ0M0xj5OiUEE%2B4rGBBQc2VXvtx6X36VN%2FL9iecO2Cz%2Bk1jYPfkHZ6s1wIFdF1f2xk9JdeRh1MZg5Gj5uu420s3wMFD3reK5Nny4O8o04nrJ190MIf2%2Br4GOqUBCNetCxDz7cl4IKTlMPloio05xeiqSJLQJJ0Bj9GHce3cYNNsGgX1TPyPv%2FRoRTidJISJaQ12cfDjRGJVk4H1TIaKWg8KYhOlLkoCWC4poUfe85M1%2Fb0rqz1E7QrQR5zJJ421EiVQcwWmyIbAXB12XzauiNuZP54fomRJZk5LBsfS2KaEsunkYPkxYr5RUe%2B2mhEYjcwivgYcV6Rn5OmPifpFkgnj&X-Amz-Signature=76f123dac9cefa4938f512b0298fc559b251569be154e75b5005fa9ebdbf1fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KE3ENT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCecFnCp6TCi5g1NwE2rgVWMyZt9TgPNS44TYwz%2F7hJogIgdqy2FcPos%2FRrh6e7vZ1UhSWRKxlIiiugBUH8MCSy0oMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWoFBFOiydZTCLW1CrcAz1yjscssW7LdQAX%2BNArSRDw%2FxGQGg%2FI9mlQLHaPHW60UBe5W1h00XISAxbX268ZQ0bI5j5UFvBq6XPW0PeDP4smFcuqFWmiYOqDGpM5EzT4y6LBVwJMfWf60OWB6u%2BQRjdx%2BLxUuygOvLY3CALummFqD1KX1bKPCbeWCe7MCj7rJdzzU7EXI9mzGZVNQ3N1ZkFmvZuGT6qCDBflSI7ksfc2juQXRcn9iTuHligkUrBTHbtxQvUyD5edHRCekQBW%2BaF2d9U%2B7wzrDv%2BegH0HBJUhgv1CnaZvWufi11pBvZ0w4bUUW0etaLDbK4i6%2BqNQi878dCpXXvjmmqYkFHeyWCYUE%2BdHiL7wyxgkGi2pisjypNwll0ptRzVIgfq8f%2BS23qJn8NZUdUCpnemGKWzwiB3BB2Bn0LdE4nBtW%2FVuiW9gQwLYTE1TCPyQ0ADzzP0XZawavQM1KeVy%2F76uA4UQ16gKIfUsh8mlXjan2dsKEGuZ7qu%2Bg1OsJmins%2BlFuyD7E476WxnLQ68t%2FeQ0M0xj5OiUEE%2B4rGBBQc2VXvtx6X36VN%2FL9iecO2Cz%2Bk1jYPfkHZ6s1wIFdF1f2xk9JdeRh1MZg5Gj5uu420s3wMFD3reK5Nny4O8o04nrJ190MIf2%2Br4GOqUBCNetCxDz7cl4IKTlMPloio05xeiqSJLQJJ0Bj9GHce3cYNNsGgX1TPyPv%2FRoRTidJISJaQ12cfDjRGJVk4H1TIaKWg8KYhOlLkoCWC4poUfe85M1%2Fb0rqz1E7QrQR5zJJ421EiVQcwWmyIbAXB12XzauiNuZP54fomRJZk5LBsfS2KaEsunkYPkxYr5RUe%2B2mhEYjcwivgYcV6Rn5OmPifpFkgnj&X-Amz-Signature=32b6e553caeaf2c09c7657138f5e7be53b6289529715ddd55a26825446ea37fd&X-Amz-SignedHeaders=host&x-id=GetObject)
