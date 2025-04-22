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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I75ICSD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDQ91XcY9CivAwSjopknSIJkq2WqMjnG%2BwjhemIVjzFogIhAJq%2B6chLkkQt0JsY6zdNXALzCVnEcrkQ8wfVPhVi97UkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdE0mU3UIkfzLA660q3ANMVjcQxzMoveES1ZT4n4v4SwQO7kvKiniafigWinAoNoTVP641wnDvL65TxlJeLOuBzNpo9dBNWK6pzeJwRI%2FxRjosmSxPRlZ5wTHQRn9oVRXydP%2Bt8AFRrCLj1GIXlrMu%2BNUv8U%2B5VLHkgjCKvCRC4f%2FmgVYgVwRgq0KL3TmuSxGg7QiPRqssISFd4NsYwveGPNoCLXdVUASUt2f5ZOAkJghl%2BVGF49tXRiduLyNGPq%2B%2BGv%2Bx2%2Bbz3Wy4Tkn5j%2BUD7v2hqJYEBHg71NhgvfHmxhqSS1YECqjrv%2FecXDdvKiQw8xwxCTuC5ThE%2FkAWFGznv%2Fzy6j%2BE5e0vmOD7hJFbZuqU7QbTo6l%2FzbBOUAK%2FnRR3yv1ydrDZTzwAQOFzh4IKB9uE1bQpDIbBjF%2Fv1ihmMOeEM4lODemD0gHSSM4WNACreehQODduOLo3B4FHXt4Aczr76w9kthbbZvzv6k6QjPmcPHvWAZyVRh7gmMWKklVEz4Usua0xvGs7jUAhCFBjlhSd2e8ESujKnADoOG2DvF95pUV5Zcj6ndy8bcIXC%2BilxCBdyPrDQ6wdZ0UQe3OrpC%2F6EeKoSG0%2BkRWbfeffR3h2ZeDl3QFaYbeIyMSZZF9Miu1%2B%2F8GA1F57CTCni53ABjqkAX4y5VWXo28H28y2PsxsGRmgYfHnhzAdCg5U8WQkdTcYWuVLE0slwSNE6qsmMP2TqLDnErpUG4IRZAH1cxkNssRhgRuk2cVeJ0Il6kPvEe%2FShrcb0e%2BskOm9J4fbPnA%2FEcL9Kyr%2FeSh%2FScZPZj%2F3JNo4hhdbL0QEjphITqNNFnRSawuPxzepXnxOCvBql9S7%2Fu9nviMOX4kNpvFGQJ%2FKqnUUGo1X&X-Amz-Signature=5989f3d981056eb0c512a70cc3c58e59c53a5db1e8bfcc97fb4da71da382ac80&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I75ICSD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDQ91XcY9CivAwSjopknSIJkq2WqMjnG%2BwjhemIVjzFogIhAJq%2B6chLkkQt0JsY6zdNXALzCVnEcrkQ8wfVPhVi97UkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdE0mU3UIkfzLA660q3ANMVjcQxzMoveES1ZT4n4v4SwQO7kvKiniafigWinAoNoTVP641wnDvL65TxlJeLOuBzNpo9dBNWK6pzeJwRI%2FxRjosmSxPRlZ5wTHQRn9oVRXydP%2Bt8AFRrCLj1GIXlrMu%2BNUv8U%2B5VLHkgjCKvCRC4f%2FmgVYgVwRgq0KL3TmuSxGg7QiPRqssISFd4NsYwveGPNoCLXdVUASUt2f5ZOAkJghl%2BVGF49tXRiduLyNGPq%2B%2BGv%2Bx2%2Bbz3Wy4Tkn5j%2BUD7v2hqJYEBHg71NhgvfHmxhqSS1YECqjrv%2FecXDdvKiQw8xwxCTuC5ThE%2FkAWFGznv%2Fzy6j%2BE5e0vmOD7hJFbZuqU7QbTo6l%2FzbBOUAK%2FnRR3yv1ydrDZTzwAQOFzh4IKB9uE1bQpDIbBjF%2Fv1ihmMOeEM4lODemD0gHSSM4WNACreehQODduOLo3B4FHXt4Aczr76w9kthbbZvzv6k6QjPmcPHvWAZyVRh7gmMWKklVEz4Usua0xvGs7jUAhCFBjlhSd2e8ESujKnADoOG2DvF95pUV5Zcj6ndy8bcIXC%2BilxCBdyPrDQ6wdZ0UQe3OrpC%2F6EeKoSG0%2BkRWbfeffR3h2ZeDl3QFaYbeIyMSZZF9Miu1%2B%2F8GA1F57CTCni53ABjqkAX4y5VWXo28H28y2PsxsGRmgYfHnhzAdCg5U8WQkdTcYWuVLE0slwSNE6qsmMP2TqLDnErpUG4IRZAH1cxkNssRhgRuk2cVeJ0Il6kPvEe%2FShrcb0e%2BskOm9J4fbPnA%2FEcL9Kyr%2FeSh%2FScZPZj%2F3JNo4hhdbL0QEjphITqNNFnRSawuPxzepXnxOCvBql9S7%2Fu9nviMOX4kNpvFGQJ%2FKqnUUGo1X&X-Amz-Signature=71aad0b81de87ca2bf6d567d97514c740e4433ae00eb04a4596dc575dae6edc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I75ICSD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDQ91XcY9CivAwSjopknSIJkq2WqMjnG%2BwjhemIVjzFogIhAJq%2B6chLkkQt0JsY6zdNXALzCVnEcrkQ8wfVPhVi97UkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdE0mU3UIkfzLA660q3ANMVjcQxzMoveES1ZT4n4v4SwQO7kvKiniafigWinAoNoTVP641wnDvL65TxlJeLOuBzNpo9dBNWK6pzeJwRI%2FxRjosmSxPRlZ5wTHQRn9oVRXydP%2Bt8AFRrCLj1GIXlrMu%2BNUv8U%2B5VLHkgjCKvCRC4f%2FmgVYgVwRgq0KL3TmuSxGg7QiPRqssISFd4NsYwveGPNoCLXdVUASUt2f5ZOAkJghl%2BVGF49tXRiduLyNGPq%2B%2BGv%2Bx2%2Bbz3Wy4Tkn5j%2BUD7v2hqJYEBHg71NhgvfHmxhqSS1YECqjrv%2FecXDdvKiQw8xwxCTuC5ThE%2FkAWFGznv%2Fzy6j%2BE5e0vmOD7hJFbZuqU7QbTo6l%2FzbBOUAK%2FnRR3yv1ydrDZTzwAQOFzh4IKB9uE1bQpDIbBjF%2Fv1ihmMOeEM4lODemD0gHSSM4WNACreehQODduOLo3B4FHXt4Aczr76w9kthbbZvzv6k6QjPmcPHvWAZyVRh7gmMWKklVEz4Usua0xvGs7jUAhCFBjlhSd2e8ESujKnADoOG2DvF95pUV5Zcj6ndy8bcIXC%2BilxCBdyPrDQ6wdZ0UQe3OrpC%2F6EeKoSG0%2BkRWbfeffR3h2ZeDl3QFaYbeIyMSZZF9Miu1%2B%2F8GA1F57CTCni53ABjqkAX4y5VWXo28H28y2PsxsGRmgYfHnhzAdCg5U8WQkdTcYWuVLE0slwSNE6qsmMP2TqLDnErpUG4IRZAH1cxkNssRhgRuk2cVeJ0Il6kPvEe%2FShrcb0e%2BskOm9J4fbPnA%2FEcL9Kyr%2FeSh%2FScZPZj%2F3JNo4hhdbL0QEjphITqNNFnRSawuPxzepXnxOCvBql9S7%2Fu9nviMOX4kNpvFGQJ%2FKqnUUGo1X&X-Amz-Signature=3c2b1aec5077429ffc65a48861e6a6a556e0a20e61e384746aee4e9d27c74bca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I75ICSD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDQ91XcY9CivAwSjopknSIJkq2WqMjnG%2BwjhemIVjzFogIhAJq%2B6chLkkQt0JsY6zdNXALzCVnEcrkQ8wfVPhVi97UkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdE0mU3UIkfzLA660q3ANMVjcQxzMoveES1ZT4n4v4SwQO7kvKiniafigWinAoNoTVP641wnDvL65TxlJeLOuBzNpo9dBNWK6pzeJwRI%2FxRjosmSxPRlZ5wTHQRn9oVRXydP%2Bt8AFRrCLj1GIXlrMu%2BNUv8U%2B5VLHkgjCKvCRC4f%2FmgVYgVwRgq0KL3TmuSxGg7QiPRqssISFd4NsYwveGPNoCLXdVUASUt2f5ZOAkJghl%2BVGF49tXRiduLyNGPq%2B%2BGv%2Bx2%2Bbz3Wy4Tkn5j%2BUD7v2hqJYEBHg71NhgvfHmxhqSS1YECqjrv%2FecXDdvKiQw8xwxCTuC5ThE%2FkAWFGznv%2Fzy6j%2BE5e0vmOD7hJFbZuqU7QbTo6l%2FzbBOUAK%2FnRR3yv1ydrDZTzwAQOFzh4IKB9uE1bQpDIbBjF%2Fv1ihmMOeEM4lODemD0gHSSM4WNACreehQODduOLo3B4FHXt4Aczr76w9kthbbZvzv6k6QjPmcPHvWAZyVRh7gmMWKklVEz4Usua0xvGs7jUAhCFBjlhSd2e8ESujKnADoOG2DvF95pUV5Zcj6ndy8bcIXC%2BilxCBdyPrDQ6wdZ0UQe3OrpC%2F6EeKoSG0%2BkRWbfeffR3h2ZeDl3QFaYbeIyMSZZF9Miu1%2B%2F8GA1F57CTCni53ABjqkAX4y5VWXo28H28y2PsxsGRmgYfHnhzAdCg5U8WQkdTcYWuVLE0slwSNE6qsmMP2TqLDnErpUG4IRZAH1cxkNssRhgRuk2cVeJ0Il6kPvEe%2FShrcb0e%2BskOm9J4fbPnA%2FEcL9Kyr%2FeSh%2FScZPZj%2F3JNo4hhdbL0QEjphITqNNFnRSawuPxzepXnxOCvBql9S7%2Fu9nviMOX4kNpvFGQJ%2FKqnUUGo1X&X-Amz-Signature=8d0755188bd978dacf02cf9c73de18250015dd90ba51ad01d49eb4e1dff58ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I75ICSD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDQ91XcY9CivAwSjopknSIJkq2WqMjnG%2BwjhemIVjzFogIhAJq%2B6chLkkQt0JsY6zdNXALzCVnEcrkQ8wfVPhVi97UkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdE0mU3UIkfzLA660q3ANMVjcQxzMoveES1ZT4n4v4SwQO7kvKiniafigWinAoNoTVP641wnDvL65TxlJeLOuBzNpo9dBNWK6pzeJwRI%2FxRjosmSxPRlZ5wTHQRn9oVRXydP%2Bt8AFRrCLj1GIXlrMu%2BNUv8U%2B5VLHkgjCKvCRC4f%2FmgVYgVwRgq0KL3TmuSxGg7QiPRqssISFd4NsYwveGPNoCLXdVUASUt2f5ZOAkJghl%2BVGF49tXRiduLyNGPq%2B%2BGv%2Bx2%2Bbz3Wy4Tkn5j%2BUD7v2hqJYEBHg71NhgvfHmxhqSS1YECqjrv%2FecXDdvKiQw8xwxCTuC5ThE%2FkAWFGznv%2Fzy6j%2BE5e0vmOD7hJFbZuqU7QbTo6l%2FzbBOUAK%2FnRR3yv1ydrDZTzwAQOFzh4IKB9uE1bQpDIbBjF%2Fv1ihmMOeEM4lODemD0gHSSM4WNACreehQODduOLo3B4FHXt4Aczr76w9kthbbZvzv6k6QjPmcPHvWAZyVRh7gmMWKklVEz4Usua0xvGs7jUAhCFBjlhSd2e8ESujKnADoOG2DvF95pUV5Zcj6ndy8bcIXC%2BilxCBdyPrDQ6wdZ0UQe3OrpC%2F6EeKoSG0%2BkRWbfeffR3h2ZeDl3QFaYbeIyMSZZF9Miu1%2B%2F8GA1F57CTCni53ABjqkAX4y5VWXo28H28y2PsxsGRmgYfHnhzAdCg5U8WQkdTcYWuVLE0slwSNE6qsmMP2TqLDnErpUG4IRZAH1cxkNssRhgRuk2cVeJ0Il6kPvEe%2FShrcb0e%2BskOm9J4fbPnA%2FEcL9Kyr%2FeSh%2FScZPZj%2F3JNo4hhdbL0QEjphITqNNFnRSawuPxzepXnxOCvBql9S7%2Fu9nviMOX4kNpvFGQJ%2FKqnUUGo1X&X-Amz-Signature=4a875b6984e18b6a47d506117db17731768ebeae8c43a3638d29b287c16e52ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I75ICSD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDQ91XcY9CivAwSjopknSIJkq2WqMjnG%2BwjhemIVjzFogIhAJq%2B6chLkkQt0JsY6zdNXALzCVnEcrkQ8wfVPhVi97UkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdE0mU3UIkfzLA660q3ANMVjcQxzMoveES1ZT4n4v4SwQO7kvKiniafigWinAoNoTVP641wnDvL65TxlJeLOuBzNpo9dBNWK6pzeJwRI%2FxRjosmSxPRlZ5wTHQRn9oVRXydP%2Bt8AFRrCLj1GIXlrMu%2BNUv8U%2B5VLHkgjCKvCRC4f%2FmgVYgVwRgq0KL3TmuSxGg7QiPRqssISFd4NsYwveGPNoCLXdVUASUt2f5ZOAkJghl%2BVGF49tXRiduLyNGPq%2B%2BGv%2Bx2%2Bbz3Wy4Tkn5j%2BUD7v2hqJYEBHg71NhgvfHmxhqSS1YECqjrv%2FecXDdvKiQw8xwxCTuC5ThE%2FkAWFGznv%2Fzy6j%2BE5e0vmOD7hJFbZuqU7QbTo6l%2FzbBOUAK%2FnRR3yv1ydrDZTzwAQOFzh4IKB9uE1bQpDIbBjF%2Fv1ihmMOeEM4lODemD0gHSSM4WNACreehQODduOLo3B4FHXt4Aczr76w9kthbbZvzv6k6QjPmcPHvWAZyVRh7gmMWKklVEz4Usua0xvGs7jUAhCFBjlhSd2e8ESujKnADoOG2DvF95pUV5Zcj6ndy8bcIXC%2BilxCBdyPrDQ6wdZ0UQe3OrpC%2F6EeKoSG0%2BkRWbfeffR3h2ZeDl3QFaYbeIyMSZZF9Miu1%2B%2F8GA1F57CTCni53ABjqkAX4y5VWXo28H28y2PsxsGRmgYfHnhzAdCg5U8WQkdTcYWuVLE0slwSNE6qsmMP2TqLDnErpUG4IRZAH1cxkNssRhgRuk2cVeJ0Il6kPvEe%2FShrcb0e%2BskOm9J4fbPnA%2FEcL9Kyr%2FeSh%2FScZPZj%2F3JNo4hhdbL0QEjphITqNNFnRSawuPxzepXnxOCvBql9S7%2Fu9nviMOX4kNpvFGQJ%2FKqnUUGo1X&X-Amz-Signature=80bde687f49ac2a96c3da345f52eda2497244a595c2ceb53680c8bfc4fe08971&X-Amz-SignedHeaders=host&x-id=GetObject)
