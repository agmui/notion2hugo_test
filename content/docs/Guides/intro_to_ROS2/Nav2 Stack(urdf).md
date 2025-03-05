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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HINLDF3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3zerRoEJkRa0Xjj7uPdDPhD8oJP%2BaFF5TKCSiPVAiwIhAMLwRa651F3VRe%2BOVOcs%2BmLZ0Xk%2FeKfwvJZAr4g8Q12uKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZtpvlmmNjF7%2BsWdYq3AM%2Bfb8godbCB7efytEtyYj7Z6RRGeusogB34mPYb9E6JpglPnf8mcoZgurd1i8yH%2F1U6DOJFWy%2FxkBe5f5ePxmYA5pt3HwxQh1VPDVJKr2nRNPXyvUJjm4Rx3WnpJWIu7bvK0PE3nDCSgXdp8hoi4c5w1%2BNaWeC01jP6JYohN7emcSfm4ZTkCgMPzOf32KZNEiijiaHU9OXeuvkrl8fjtAkf6NA8D3X7NQFMmqpy1NtthTRmhuajW8SE5ukYwUS7N%2F7QF0khnacE%2B%2FkNNj3MKsJE%2FSh76yNnPG0h3XD7xH4HTZubFyOAIwFB7ATQYv6ZDxkxxc4ynKIqMcI2ETlrKUpLWqbYQSZaBrBuzrxIL%2BptQL%2FTE7KY2QCNhV2KorunN2yUS37VFrVATDyTP5Tf1gUk1MXaUO3MNoQXwL387L4iRGjVTYXA2h2gDnFbM4i9O2aztdreKdNX1vUmlFW%2B04Vn0UEjsVrv5dNJtO51mxYENVExYmQ7A%2F45zpih9JtkEKHp2nHIoP08wDeSNH%2BE0%2F%2F4MZANBy%2FbpmEfqvpYk1f8B4C40bezlnQ2ct7qDEvD6gZM5C0zcZDSp6MjMv9ctr%2FRyoLLvAmn08FDvxAH%2BkU%2FStCi%2BazJ%2Bb8jbGQgjDLyZ%2B%2BBjqkAVmo74mLUkWyv67MDzIpLqd4PKHsb0327PdeuBX5z25GG%2BCPB8H3Z3NaRVVFpZ%2BNUWtHTwp%2Fyh49LI4GpVlFgChMB2flZXX9bTC1hVhZRvQvjDymsonSmdkaGeNIaDhohW%2BeHb5ZUPo6WM4QRwGP0Kv1PNSeKWe1RkvmWl%2FPjvx8j12nTwgC5LK03jOZdbfBK7vhzjOLXIRPPSjYnj6LYcDnzddQ&X-Amz-Signature=7037a7d8bde5fa648bd4107ebfb09ad0986bc21e90b903466cb6ce576246db52&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HINLDF3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3zerRoEJkRa0Xjj7uPdDPhD8oJP%2BaFF5TKCSiPVAiwIhAMLwRa651F3VRe%2BOVOcs%2BmLZ0Xk%2FeKfwvJZAr4g8Q12uKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZtpvlmmNjF7%2BsWdYq3AM%2Bfb8godbCB7efytEtyYj7Z6RRGeusogB34mPYb9E6JpglPnf8mcoZgurd1i8yH%2F1U6DOJFWy%2FxkBe5f5ePxmYA5pt3HwxQh1VPDVJKr2nRNPXyvUJjm4Rx3WnpJWIu7bvK0PE3nDCSgXdp8hoi4c5w1%2BNaWeC01jP6JYohN7emcSfm4ZTkCgMPzOf32KZNEiijiaHU9OXeuvkrl8fjtAkf6NA8D3X7NQFMmqpy1NtthTRmhuajW8SE5ukYwUS7N%2F7QF0khnacE%2B%2FkNNj3MKsJE%2FSh76yNnPG0h3XD7xH4HTZubFyOAIwFB7ATQYv6ZDxkxxc4ynKIqMcI2ETlrKUpLWqbYQSZaBrBuzrxIL%2BptQL%2FTE7KY2QCNhV2KorunN2yUS37VFrVATDyTP5Tf1gUk1MXaUO3MNoQXwL387L4iRGjVTYXA2h2gDnFbM4i9O2aztdreKdNX1vUmlFW%2B04Vn0UEjsVrv5dNJtO51mxYENVExYmQ7A%2F45zpih9JtkEKHp2nHIoP08wDeSNH%2BE0%2F%2F4MZANBy%2FbpmEfqvpYk1f8B4C40bezlnQ2ct7qDEvD6gZM5C0zcZDSp6MjMv9ctr%2FRyoLLvAmn08FDvxAH%2BkU%2FStCi%2BazJ%2Bb8jbGQgjDLyZ%2B%2BBjqkAVmo74mLUkWyv67MDzIpLqd4PKHsb0327PdeuBX5z25GG%2BCPB8H3Z3NaRVVFpZ%2BNUWtHTwp%2Fyh49LI4GpVlFgChMB2flZXX9bTC1hVhZRvQvjDymsonSmdkaGeNIaDhohW%2BeHb5ZUPo6WM4QRwGP0Kv1PNSeKWe1RkvmWl%2FPjvx8j12nTwgC5LK03jOZdbfBK7vhzjOLXIRPPSjYnj6LYcDnzddQ&X-Amz-Signature=971c95e34559ff58712b52bbf42b5726df54308aaf0de7062b71f1900bc9bf17&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HINLDF3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3zerRoEJkRa0Xjj7uPdDPhD8oJP%2BaFF5TKCSiPVAiwIhAMLwRa651F3VRe%2BOVOcs%2BmLZ0Xk%2FeKfwvJZAr4g8Q12uKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZtpvlmmNjF7%2BsWdYq3AM%2Bfb8godbCB7efytEtyYj7Z6RRGeusogB34mPYb9E6JpglPnf8mcoZgurd1i8yH%2F1U6DOJFWy%2FxkBe5f5ePxmYA5pt3HwxQh1VPDVJKr2nRNPXyvUJjm4Rx3WnpJWIu7bvK0PE3nDCSgXdp8hoi4c5w1%2BNaWeC01jP6JYohN7emcSfm4ZTkCgMPzOf32KZNEiijiaHU9OXeuvkrl8fjtAkf6NA8D3X7NQFMmqpy1NtthTRmhuajW8SE5ukYwUS7N%2F7QF0khnacE%2B%2FkNNj3MKsJE%2FSh76yNnPG0h3XD7xH4HTZubFyOAIwFB7ATQYv6ZDxkxxc4ynKIqMcI2ETlrKUpLWqbYQSZaBrBuzrxIL%2BptQL%2FTE7KY2QCNhV2KorunN2yUS37VFrVATDyTP5Tf1gUk1MXaUO3MNoQXwL387L4iRGjVTYXA2h2gDnFbM4i9O2aztdreKdNX1vUmlFW%2B04Vn0UEjsVrv5dNJtO51mxYENVExYmQ7A%2F45zpih9JtkEKHp2nHIoP08wDeSNH%2BE0%2F%2F4MZANBy%2FbpmEfqvpYk1f8B4C40bezlnQ2ct7qDEvD6gZM5C0zcZDSp6MjMv9ctr%2FRyoLLvAmn08FDvxAH%2BkU%2FStCi%2BazJ%2Bb8jbGQgjDLyZ%2B%2BBjqkAVmo74mLUkWyv67MDzIpLqd4PKHsb0327PdeuBX5z25GG%2BCPB8H3Z3NaRVVFpZ%2BNUWtHTwp%2Fyh49LI4GpVlFgChMB2flZXX9bTC1hVhZRvQvjDymsonSmdkaGeNIaDhohW%2BeHb5ZUPo6WM4QRwGP0Kv1PNSeKWe1RkvmWl%2FPjvx8j12nTwgC5LK03jOZdbfBK7vhzjOLXIRPPSjYnj6LYcDnzddQ&X-Amz-Signature=3377c25c22f1d537eca4ac3985ec41ceca399d405b637e224502567710c6520c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HINLDF3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3zerRoEJkRa0Xjj7uPdDPhD8oJP%2BaFF5TKCSiPVAiwIhAMLwRa651F3VRe%2BOVOcs%2BmLZ0Xk%2FeKfwvJZAr4g8Q12uKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZtpvlmmNjF7%2BsWdYq3AM%2Bfb8godbCB7efytEtyYj7Z6RRGeusogB34mPYb9E6JpglPnf8mcoZgurd1i8yH%2F1U6DOJFWy%2FxkBe5f5ePxmYA5pt3HwxQh1VPDVJKr2nRNPXyvUJjm4Rx3WnpJWIu7bvK0PE3nDCSgXdp8hoi4c5w1%2BNaWeC01jP6JYohN7emcSfm4ZTkCgMPzOf32KZNEiijiaHU9OXeuvkrl8fjtAkf6NA8D3X7NQFMmqpy1NtthTRmhuajW8SE5ukYwUS7N%2F7QF0khnacE%2B%2FkNNj3MKsJE%2FSh76yNnPG0h3XD7xH4HTZubFyOAIwFB7ATQYv6ZDxkxxc4ynKIqMcI2ETlrKUpLWqbYQSZaBrBuzrxIL%2BptQL%2FTE7KY2QCNhV2KorunN2yUS37VFrVATDyTP5Tf1gUk1MXaUO3MNoQXwL387L4iRGjVTYXA2h2gDnFbM4i9O2aztdreKdNX1vUmlFW%2B04Vn0UEjsVrv5dNJtO51mxYENVExYmQ7A%2F45zpih9JtkEKHp2nHIoP08wDeSNH%2BE0%2F%2F4MZANBy%2FbpmEfqvpYk1f8B4C40bezlnQ2ct7qDEvD6gZM5C0zcZDSp6MjMv9ctr%2FRyoLLvAmn08FDvxAH%2BkU%2FStCi%2BazJ%2Bb8jbGQgjDLyZ%2B%2BBjqkAVmo74mLUkWyv67MDzIpLqd4PKHsb0327PdeuBX5z25GG%2BCPB8H3Z3NaRVVFpZ%2BNUWtHTwp%2Fyh49LI4GpVlFgChMB2flZXX9bTC1hVhZRvQvjDymsonSmdkaGeNIaDhohW%2BeHb5ZUPo6WM4QRwGP0Kv1PNSeKWe1RkvmWl%2FPjvx8j12nTwgC5LK03jOZdbfBK7vhzjOLXIRPPSjYnj6LYcDnzddQ&X-Amz-Signature=7899283694ac165094a4c7b0c02567dfc428b1336dae425c1186085a71c767d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HINLDF3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3zerRoEJkRa0Xjj7uPdDPhD8oJP%2BaFF5TKCSiPVAiwIhAMLwRa651F3VRe%2BOVOcs%2BmLZ0Xk%2FeKfwvJZAr4g8Q12uKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZtpvlmmNjF7%2BsWdYq3AM%2Bfb8godbCB7efytEtyYj7Z6RRGeusogB34mPYb9E6JpglPnf8mcoZgurd1i8yH%2F1U6DOJFWy%2FxkBe5f5ePxmYA5pt3HwxQh1VPDVJKr2nRNPXyvUJjm4Rx3WnpJWIu7bvK0PE3nDCSgXdp8hoi4c5w1%2BNaWeC01jP6JYohN7emcSfm4ZTkCgMPzOf32KZNEiijiaHU9OXeuvkrl8fjtAkf6NA8D3X7NQFMmqpy1NtthTRmhuajW8SE5ukYwUS7N%2F7QF0khnacE%2B%2FkNNj3MKsJE%2FSh76yNnPG0h3XD7xH4HTZubFyOAIwFB7ATQYv6ZDxkxxc4ynKIqMcI2ETlrKUpLWqbYQSZaBrBuzrxIL%2BptQL%2FTE7KY2QCNhV2KorunN2yUS37VFrVATDyTP5Tf1gUk1MXaUO3MNoQXwL387L4iRGjVTYXA2h2gDnFbM4i9O2aztdreKdNX1vUmlFW%2B04Vn0UEjsVrv5dNJtO51mxYENVExYmQ7A%2F45zpih9JtkEKHp2nHIoP08wDeSNH%2BE0%2F%2F4MZANBy%2FbpmEfqvpYk1f8B4C40bezlnQ2ct7qDEvD6gZM5C0zcZDSp6MjMv9ctr%2FRyoLLvAmn08FDvxAH%2BkU%2FStCi%2BazJ%2Bb8jbGQgjDLyZ%2B%2BBjqkAVmo74mLUkWyv67MDzIpLqd4PKHsb0327PdeuBX5z25GG%2BCPB8H3Z3NaRVVFpZ%2BNUWtHTwp%2Fyh49LI4GpVlFgChMB2flZXX9bTC1hVhZRvQvjDymsonSmdkaGeNIaDhohW%2BeHb5ZUPo6WM4QRwGP0Kv1PNSeKWe1RkvmWl%2FPjvx8j12nTwgC5LK03jOZdbfBK7vhzjOLXIRPPSjYnj6LYcDnzddQ&X-Amz-Signature=9fa6712b69b52e74aa92d683745f8e279779514264076462af281690d0b16fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HINLDF3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw3zerRoEJkRa0Xjj7uPdDPhD8oJP%2BaFF5TKCSiPVAiwIhAMLwRa651F3VRe%2BOVOcs%2BmLZ0Xk%2FeKfwvJZAr4g8Q12uKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZtpvlmmNjF7%2BsWdYq3AM%2Bfb8godbCB7efytEtyYj7Z6RRGeusogB34mPYb9E6JpglPnf8mcoZgurd1i8yH%2F1U6DOJFWy%2FxkBe5f5ePxmYA5pt3HwxQh1VPDVJKr2nRNPXyvUJjm4Rx3WnpJWIu7bvK0PE3nDCSgXdp8hoi4c5w1%2BNaWeC01jP6JYohN7emcSfm4ZTkCgMPzOf32KZNEiijiaHU9OXeuvkrl8fjtAkf6NA8D3X7NQFMmqpy1NtthTRmhuajW8SE5ukYwUS7N%2F7QF0khnacE%2B%2FkNNj3MKsJE%2FSh76yNnPG0h3XD7xH4HTZubFyOAIwFB7ATQYv6ZDxkxxc4ynKIqMcI2ETlrKUpLWqbYQSZaBrBuzrxIL%2BptQL%2FTE7KY2QCNhV2KorunN2yUS37VFrVATDyTP5Tf1gUk1MXaUO3MNoQXwL387L4iRGjVTYXA2h2gDnFbM4i9O2aztdreKdNX1vUmlFW%2B04Vn0UEjsVrv5dNJtO51mxYENVExYmQ7A%2F45zpih9JtkEKHp2nHIoP08wDeSNH%2BE0%2F%2F4MZANBy%2FbpmEfqvpYk1f8B4C40bezlnQ2ct7qDEvD6gZM5C0zcZDSp6MjMv9ctr%2FRyoLLvAmn08FDvxAH%2BkU%2FStCi%2BazJ%2Bb8jbGQgjDLyZ%2B%2BBjqkAVmo74mLUkWyv67MDzIpLqd4PKHsb0327PdeuBX5z25GG%2BCPB8H3Z3NaRVVFpZ%2BNUWtHTwp%2Fyh49LI4GpVlFgChMB2flZXX9bTC1hVhZRvQvjDymsonSmdkaGeNIaDhohW%2BeHb5ZUPo6WM4QRwGP0Kv1PNSeKWe1RkvmWl%2FPjvx8j12nTwgC5LK03jOZdbfBK7vhzjOLXIRPPSjYnj6LYcDnzddQ&X-Amz-Signature=83c308a68238d0b2202af0b58879a95ae2949a8a17ac8de341c26f5278936898&X-Amz-SignedHeaders=host&x-id=GetObject)
