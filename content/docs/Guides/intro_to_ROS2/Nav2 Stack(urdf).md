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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZOW32F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeU7eVtbSs%2BStSUWxAtXmx5ytE4xZVolSP9e63vCMvcgIhALVWn8Xv6UBLcq2xsc8VRzOpAtqLCCb%2Bxh5ql2tYtqAfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8S55P5DtQpCAX3Soq3AN%2BFYcJS59VVaJOE3lhqJSL8pk1fzoiGu8oF05vTxV30SQah3ItOxtBKJm0h1arudPmPB7MG69evU5jJd0Z5vYjMT%2BlKNE7F%2B1%2BXDLUUpne%2BGuk2JN2X9irM5F9Ln2X9nOJXtRWDflQwquL3G%2BXCPvlD9sl3p7eZydJX4JFgso7dIPGtrhbORvJvXZKt45isAXwZDRMip6AEyxNsou5RpfzmDq00u6AgKu0G7ngjHq7aMs%2BwqwwGZl87V%2BBRHDx4TF3aEiu3JuLs8c%2Bx57l%2FD9GYupCXeBa%2B27ilrVmpqqOjFyzBvFnKJMDw8BNJAHjy3E5upXUZfF8QzF2P0YkYW631GSk0JIkA07ONz9qV1kejdTKqZLiU6YX%2FMZ55vwwrFCCzF%2F9Yh9q5awPPrRBj4kgip8MDJkWA07NYpH2NQ5kPgQtWRw5FjG2txLzC56dBmbaLAq3v3IsQIORlol%2BeW8XVWfwenfK20t7Lc0Y0YlqTV3wBtgXeZrw8wwlCYbDSoMwGogyabwUbc%2BhUngOnFZkHcU%2FoZmsZInNKVcq1916Fa5fW150ZKuhDaZPvr9EMrEo53tEEMkFxXCiOGCVlhNGt3YLP70TooYTkA1VQYQrmyiQqYSAJ4rDt0Yb5zD61JjABjqkAaxK3NHzBsTjgqGb9MbA0F83VmTedmMqcpveaMkJXNXG9lne4mDbwIqGsRTw4uH1CYTjcoq5CLDF%2BEaA6weOaGZBT46sRSqFgxJuOEsmv8vSGjE5uSKxKkTiZNrCZG2GIZeACAq3WUd6fKSjVLtz2kU5h5SLr8zvUygHcyoVhmBxrzkMqnEnPNWLhoOhW0xEDtzunlYzD37WpuAmtvL5gkDTF%2F4e&X-Amz-Signature=fd01f2a247bccfcea3c4aec030fc8187a061be6f69d91b95fb17dff2f7df1fe0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZOW32F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeU7eVtbSs%2BStSUWxAtXmx5ytE4xZVolSP9e63vCMvcgIhALVWn8Xv6UBLcq2xsc8VRzOpAtqLCCb%2Bxh5ql2tYtqAfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8S55P5DtQpCAX3Soq3AN%2BFYcJS59VVaJOE3lhqJSL8pk1fzoiGu8oF05vTxV30SQah3ItOxtBKJm0h1arudPmPB7MG69evU5jJd0Z5vYjMT%2BlKNE7F%2B1%2BXDLUUpne%2BGuk2JN2X9irM5F9Ln2X9nOJXtRWDflQwquL3G%2BXCPvlD9sl3p7eZydJX4JFgso7dIPGtrhbORvJvXZKt45isAXwZDRMip6AEyxNsou5RpfzmDq00u6AgKu0G7ngjHq7aMs%2BwqwwGZl87V%2BBRHDx4TF3aEiu3JuLs8c%2Bx57l%2FD9GYupCXeBa%2B27ilrVmpqqOjFyzBvFnKJMDw8BNJAHjy3E5upXUZfF8QzF2P0YkYW631GSk0JIkA07ONz9qV1kejdTKqZLiU6YX%2FMZ55vwwrFCCzF%2F9Yh9q5awPPrRBj4kgip8MDJkWA07NYpH2NQ5kPgQtWRw5FjG2txLzC56dBmbaLAq3v3IsQIORlol%2BeW8XVWfwenfK20t7Lc0Y0YlqTV3wBtgXeZrw8wwlCYbDSoMwGogyabwUbc%2BhUngOnFZkHcU%2FoZmsZInNKVcq1916Fa5fW150ZKuhDaZPvr9EMrEo53tEEMkFxXCiOGCVlhNGt3YLP70TooYTkA1VQYQrmyiQqYSAJ4rDt0Yb5zD61JjABjqkAaxK3NHzBsTjgqGb9MbA0F83VmTedmMqcpveaMkJXNXG9lne4mDbwIqGsRTw4uH1CYTjcoq5CLDF%2BEaA6weOaGZBT46sRSqFgxJuOEsmv8vSGjE5uSKxKkTiZNrCZG2GIZeACAq3WUd6fKSjVLtz2kU5h5SLr8zvUygHcyoVhmBxrzkMqnEnPNWLhoOhW0xEDtzunlYzD37WpuAmtvL5gkDTF%2F4e&X-Amz-Signature=499408ec270b151238571ab5a70192873e1104538e4ceceee9cc94f6a6625bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZOW32F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeU7eVtbSs%2BStSUWxAtXmx5ytE4xZVolSP9e63vCMvcgIhALVWn8Xv6UBLcq2xsc8VRzOpAtqLCCb%2Bxh5ql2tYtqAfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8S55P5DtQpCAX3Soq3AN%2BFYcJS59VVaJOE3lhqJSL8pk1fzoiGu8oF05vTxV30SQah3ItOxtBKJm0h1arudPmPB7MG69evU5jJd0Z5vYjMT%2BlKNE7F%2B1%2BXDLUUpne%2BGuk2JN2X9irM5F9Ln2X9nOJXtRWDflQwquL3G%2BXCPvlD9sl3p7eZydJX4JFgso7dIPGtrhbORvJvXZKt45isAXwZDRMip6AEyxNsou5RpfzmDq00u6AgKu0G7ngjHq7aMs%2BwqwwGZl87V%2BBRHDx4TF3aEiu3JuLs8c%2Bx57l%2FD9GYupCXeBa%2B27ilrVmpqqOjFyzBvFnKJMDw8BNJAHjy3E5upXUZfF8QzF2P0YkYW631GSk0JIkA07ONz9qV1kejdTKqZLiU6YX%2FMZ55vwwrFCCzF%2F9Yh9q5awPPrRBj4kgip8MDJkWA07NYpH2NQ5kPgQtWRw5FjG2txLzC56dBmbaLAq3v3IsQIORlol%2BeW8XVWfwenfK20t7Lc0Y0YlqTV3wBtgXeZrw8wwlCYbDSoMwGogyabwUbc%2BhUngOnFZkHcU%2FoZmsZInNKVcq1916Fa5fW150ZKuhDaZPvr9EMrEo53tEEMkFxXCiOGCVlhNGt3YLP70TooYTkA1VQYQrmyiQqYSAJ4rDt0Yb5zD61JjABjqkAaxK3NHzBsTjgqGb9MbA0F83VmTedmMqcpveaMkJXNXG9lne4mDbwIqGsRTw4uH1CYTjcoq5CLDF%2BEaA6weOaGZBT46sRSqFgxJuOEsmv8vSGjE5uSKxKkTiZNrCZG2GIZeACAq3WUd6fKSjVLtz2kU5h5SLr8zvUygHcyoVhmBxrzkMqnEnPNWLhoOhW0xEDtzunlYzD37WpuAmtvL5gkDTF%2F4e&X-Amz-Signature=33c92348f05f987ebde776fad6e0043e6ea2170727cf84030a3d9d99aaccbcc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZOW32F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeU7eVtbSs%2BStSUWxAtXmx5ytE4xZVolSP9e63vCMvcgIhALVWn8Xv6UBLcq2xsc8VRzOpAtqLCCb%2Bxh5ql2tYtqAfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8S55P5DtQpCAX3Soq3AN%2BFYcJS59VVaJOE3lhqJSL8pk1fzoiGu8oF05vTxV30SQah3ItOxtBKJm0h1arudPmPB7MG69evU5jJd0Z5vYjMT%2BlKNE7F%2B1%2BXDLUUpne%2BGuk2JN2X9irM5F9Ln2X9nOJXtRWDflQwquL3G%2BXCPvlD9sl3p7eZydJX4JFgso7dIPGtrhbORvJvXZKt45isAXwZDRMip6AEyxNsou5RpfzmDq00u6AgKu0G7ngjHq7aMs%2BwqwwGZl87V%2BBRHDx4TF3aEiu3JuLs8c%2Bx57l%2FD9GYupCXeBa%2B27ilrVmpqqOjFyzBvFnKJMDw8BNJAHjy3E5upXUZfF8QzF2P0YkYW631GSk0JIkA07ONz9qV1kejdTKqZLiU6YX%2FMZ55vwwrFCCzF%2F9Yh9q5awPPrRBj4kgip8MDJkWA07NYpH2NQ5kPgQtWRw5FjG2txLzC56dBmbaLAq3v3IsQIORlol%2BeW8XVWfwenfK20t7Lc0Y0YlqTV3wBtgXeZrw8wwlCYbDSoMwGogyabwUbc%2BhUngOnFZkHcU%2FoZmsZInNKVcq1916Fa5fW150ZKuhDaZPvr9EMrEo53tEEMkFxXCiOGCVlhNGt3YLP70TooYTkA1VQYQrmyiQqYSAJ4rDt0Yb5zD61JjABjqkAaxK3NHzBsTjgqGb9MbA0F83VmTedmMqcpveaMkJXNXG9lne4mDbwIqGsRTw4uH1CYTjcoq5CLDF%2BEaA6weOaGZBT46sRSqFgxJuOEsmv8vSGjE5uSKxKkTiZNrCZG2GIZeACAq3WUd6fKSjVLtz2kU5h5SLr8zvUygHcyoVhmBxrzkMqnEnPNWLhoOhW0xEDtzunlYzD37WpuAmtvL5gkDTF%2F4e&X-Amz-Signature=17279e39d71ea19e88dcb9b4d2832cde0889160f2d41e6d74ee2eb7c2b025760&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZOW32F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeU7eVtbSs%2BStSUWxAtXmx5ytE4xZVolSP9e63vCMvcgIhALVWn8Xv6UBLcq2xsc8VRzOpAtqLCCb%2Bxh5ql2tYtqAfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8S55P5DtQpCAX3Soq3AN%2BFYcJS59VVaJOE3lhqJSL8pk1fzoiGu8oF05vTxV30SQah3ItOxtBKJm0h1arudPmPB7MG69evU5jJd0Z5vYjMT%2BlKNE7F%2B1%2BXDLUUpne%2BGuk2JN2X9irM5F9Ln2X9nOJXtRWDflQwquL3G%2BXCPvlD9sl3p7eZydJX4JFgso7dIPGtrhbORvJvXZKt45isAXwZDRMip6AEyxNsou5RpfzmDq00u6AgKu0G7ngjHq7aMs%2BwqwwGZl87V%2BBRHDx4TF3aEiu3JuLs8c%2Bx57l%2FD9GYupCXeBa%2B27ilrVmpqqOjFyzBvFnKJMDw8BNJAHjy3E5upXUZfF8QzF2P0YkYW631GSk0JIkA07ONz9qV1kejdTKqZLiU6YX%2FMZ55vwwrFCCzF%2F9Yh9q5awPPrRBj4kgip8MDJkWA07NYpH2NQ5kPgQtWRw5FjG2txLzC56dBmbaLAq3v3IsQIORlol%2BeW8XVWfwenfK20t7Lc0Y0YlqTV3wBtgXeZrw8wwlCYbDSoMwGogyabwUbc%2BhUngOnFZkHcU%2FoZmsZInNKVcq1916Fa5fW150ZKuhDaZPvr9EMrEo53tEEMkFxXCiOGCVlhNGt3YLP70TooYTkA1VQYQrmyiQqYSAJ4rDt0Yb5zD61JjABjqkAaxK3NHzBsTjgqGb9MbA0F83VmTedmMqcpveaMkJXNXG9lne4mDbwIqGsRTw4uH1CYTjcoq5CLDF%2BEaA6weOaGZBT46sRSqFgxJuOEsmv8vSGjE5uSKxKkTiZNrCZG2GIZeACAq3WUd6fKSjVLtz2kU5h5SLr8zvUygHcyoVhmBxrzkMqnEnPNWLhoOhW0xEDtzunlYzD37WpuAmtvL5gkDTF%2F4e&X-Amz-Signature=cb4a3874b0839d595ebec1d88efb6bfc133b93d461d8612a31984490d8773abc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ZOW32F%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeU7eVtbSs%2BStSUWxAtXmx5ytE4xZVolSP9e63vCMvcgIhALVWn8Xv6UBLcq2xsc8VRzOpAtqLCCb%2Bxh5ql2tYtqAfKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8S55P5DtQpCAX3Soq3AN%2BFYcJS59VVaJOE3lhqJSL8pk1fzoiGu8oF05vTxV30SQah3ItOxtBKJm0h1arudPmPB7MG69evU5jJd0Z5vYjMT%2BlKNE7F%2B1%2BXDLUUpne%2BGuk2JN2X9irM5F9Ln2X9nOJXtRWDflQwquL3G%2BXCPvlD9sl3p7eZydJX4JFgso7dIPGtrhbORvJvXZKt45isAXwZDRMip6AEyxNsou5RpfzmDq00u6AgKu0G7ngjHq7aMs%2BwqwwGZl87V%2BBRHDx4TF3aEiu3JuLs8c%2Bx57l%2FD9GYupCXeBa%2B27ilrVmpqqOjFyzBvFnKJMDw8BNJAHjy3E5upXUZfF8QzF2P0YkYW631GSk0JIkA07ONz9qV1kejdTKqZLiU6YX%2FMZ55vwwrFCCzF%2F9Yh9q5awPPrRBj4kgip8MDJkWA07NYpH2NQ5kPgQtWRw5FjG2txLzC56dBmbaLAq3v3IsQIORlol%2BeW8XVWfwenfK20t7Lc0Y0YlqTV3wBtgXeZrw8wwlCYbDSoMwGogyabwUbc%2BhUngOnFZkHcU%2FoZmsZInNKVcq1916Fa5fW150ZKuhDaZPvr9EMrEo53tEEMkFxXCiOGCVlhNGt3YLP70TooYTkA1VQYQrmyiQqYSAJ4rDt0Yb5zD61JjABjqkAaxK3NHzBsTjgqGb9MbA0F83VmTedmMqcpveaMkJXNXG9lne4mDbwIqGsRTw4uH1CYTjcoq5CLDF%2BEaA6weOaGZBT46sRSqFgxJuOEsmv8vSGjE5uSKxKkTiZNrCZG2GIZeACAq3WUd6fKSjVLtz2kU5h5SLr8zvUygHcyoVhmBxrzkMqnEnPNWLhoOhW0xEDtzunlYzD37WpuAmtvL5gkDTF%2F4e&X-Amz-Signature=55f56475c8813be51a6fdd8de92a89ad5b8a448959eed44ddfff2dbdd2126af1&X-Amz-SignedHeaders=host&x-id=GetObject)
