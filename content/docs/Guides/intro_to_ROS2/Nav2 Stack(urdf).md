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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ7EA2U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxJs5YQK7%2Fusd%2BnkXCWNCEX22Dc0gJ%2F6sHQeIor42WTAiEA06hqT29ZbI%2BNP00Xs4%2BXjk4X6C88WwEtffhnHzX%2Fb0Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDN%2Fd5G2qCPhFmUxS7SrcAw%2FEgJeYJa%2F5HmdycvoDngFQjYKGdHpZ3tNr3%2BAY2JbEEb2zvqapkv8DoAs5U6%2FsbC6F3M20Y3wFvdfj9nwt6vwk1i44CMV3l0D9V4ssDFydDz%2BC8XAZJvx7mvpdo36QYvJIHw6zVeGZCA%2B3PRTLp1bDUKMzWDel8hJ7vQELJdjOcL8DuKdQoltIzJvnNUtRTprI8ns3LlnbPBcQfUquKkCQIaHu61KotsrBT7XBjf3pSVsTJuekGC3qlwP%2F6anctgZaPllQPj7SRv8EtT%2BxRpGPxMy6lSqdQeuB4V9NkqLoKl9xQzF%2BG0PZuPngLU5UEbfVynIEVkL1A2raJaV7%2BImais0c8nHTJd86jkd4K5iQv7kIGz4qHmxKImmdan3N4Da6ltWatxm40HVf7nv0c%2BZY%2FrzD%2F2qevUwDleF3MV5mt1PnVpx%2FbDoEKIY7IMc3SZpGBh9vwh9wWeCDmh6nZFrPwjUMwapADRMRQgw6Xj2PPwCdF7PpB0VkeocRIQUpWYXytmW4sLQR9vGhzKCovVZEMQc9rTgkO3xS4WkT%2BSUnnKv8vnR%2BE3IYcZjZzjJJy61QudgMJ6GHROiG1VyEuGW1YHjLp0I3PABJUZkfoQKtY3SVst0VOQP3VmmcMN3h1L4GOqUBJnT%2BN2FsZP%2BRpHldVUMevxG0HdeL%2FX85vn%2F92YehFgepUBC%2BGhC%2FfdJqZnRsM127SLZ31%2FieFmglcjPawsK4s9ymR8ALcdkvssjfi92NfuzOroIrxhDqRDNhxY4r6xOhuQIPk8ZuJndQoHpwkyuJWvStEE0xBPRlV0CKuJSoUkB%2B8Dfn8xT3GAlkNAnmJug%2FL%2Fp2KMHHmAAWu81Qa1p2GzMlsWNX&X-Amz-Signature=1dd1c79152b4b3e59e4ffc58f840f2aa559cd7fd46f6389d713f34b911efc74b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ7EA2U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxJs5YQK7%2Fusd%2BnkXCWNCEX22Dc0gJ%2F6sHQeIor42WTAiEA06hqT29ZbI%2BNP00Xs4%2BXjk4X6C88WwEtffhnHzX%2Fb0Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDN%2Fd5G2qCPhFmUxS7SrcAw%2FEgJeYJa%2F5HmdycvoDngFQjYKGdHpZ3tNr3%2BAY2JbEEb2zvqapkv8DoAs5U6%2FsbC6F3M20Y3wFvdfj9nwt6vwk1i44CMV3l0D9V4ssDFydDz%2BC8XAZJvx7mvpdo36QYvJIHw6zVeGZCA%2B3PRTLp1bDUKMzWDel8hJ7vQELJdjOcL8DuKdQoltIzJvnNUtRTprI8ns3LlnbPBcQfUquKkCQIaHu61KotsrBT7XBjf3pSVsTJuekGC3qlwP%2F6anctgZaPllQPj7SRv8EtT%2BxRpGPxMy6lSqdQeuB4V9NkqLoKl9xQzF%2BG0PZuPngLU5UEbfVynIEVkL1A2raJaV7%2BImais0c8nHTJd86jkd4K5iQv7kIGz4qHmxKImmdan3N4Da6ltWatxm40HVf7nv0c%2BZY%2FrzD%2F2qevUwDleF3MV5mt1PnVpx%2FbDoEKIY7IMc3SZpGBh9vwh9wWeCDmh6nZFrPwjUMwapADRMRQgw6Xj2PPwCdF7PpB0VkeocRIQUpWYXytmW4sLQR9vGhzKCovVZEMQc9rTgkO3xS4WkT%2BSUnnKv8vnR%2BE3IYcZjZzjJJy61QudgMJ6GHROiG1VyEuGW1YHjLp0I3PABJUZkfoQKtY3SVst0VOQP3VmmcMN3h1L4GOqUBJnT%2BN2FsZP%2BRpHldVUMevxG0HdeL%2FX85vn%2F92YehFgepUBC%2BGhC%2FfdJqZnRsM127SLZ31%2FieFmglcjPawsK4s9ymR8ALcdkvssjfi92NfuzOroIrxhDqRDNhxY4r6xOhuQIPk8ZuJndQoHpwkyuJWvStEE0xBPRlV0CKuJSoUkB%2B8Dfn8xT3GAlkNAnmJug%2FL%2Fp2KMHHmAAWu81Qa1p2GzMlsWNX&X-Amz-Signature=791db4ec4f1c7a92a5a4f9d620aeeaf4702eb5f39263b32be3cbace815cf28a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ7EA2U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxJs5YQK7%2Fusd%2BnkXCWNCEX22Dc0gJ%2F6sHQeIor42WTAiEA06hqT29ZbI%2BNP00Xs4%2BXjk4X6C88WwEtffhnHzX%2Fb0Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDN%2Fd5G2qCPhFmUxS7SrcAw%2FEgJeYJa%2F5HmdycvoDngFQjYKGdHpZ3tNr3%2BAY2JbEEb2zvqapkv8DoAs5U6%2FsbC6F3M20Y3wFvdfj9nwt6vwk1i44CMV3l0D9V4ssDFydDz%2BC8XAZJvx7mvpdo36QYvJIHw6zVeGZCA%2B3PRTLp1bDUKMzWDel8hJ7vQELJdjOcL8DuKdQoltIzJvnNUtRTprI8ns3LlnbPBcQfUquKkCQIaHu61KotsrBT7XBjf3pSVsTJuekGC3qlwP%2F6anctgZaPllQPj7SRv8EtT%2BxRpGPxMy6lSqdQeuB4V9NkqLoKl9xQzF%2BG0PZuPngLU5UEbfVynIEVkL1A2raJaV7%2BImais0c8nHTJd86jkd4K5iQv7kIGz4qHmxKImmdan3N4Da6ltWatxm40HVf7nv0c%2BZY%2FrzD%2F2qevUwDleF3MV5mt1PnVpx%2FbDoEKIY7IMc3SZpGBh9vwh9wWeCDmh6nZFrPwjUMwapADRMRQgw6Xj2PPwCdF7PpB0VkeocRIQUpWYXytmW4sLQR9vGhzKCovVZEMQc9rTgkO3xS4WkT%2BSUnnKv8vnR%2BE3IYcZjZzjJJy61QudgMJ6GHROiG1VyEuGW1YHjLp0I3PABJUZkfoQKtY3SVst0VOQP3VmmcMN3h1L4GOqUBJnT%2BN2FsZP%2BRpHldVUMevxG0HdeL%2FX85vn%2F92YehFgepUBC%2BGhC%2FfdJqZnRsM127SLZ31%2FieFmglcjPawsK4s9ymR8ALcdkvssjfi92NfuzOroIrxhDqRDNhxY4r6xOhuQIPk8ZuJndQoHpwkyuJWvStEE0xBPRlV0CKuJSoUkB%2B8Dfn8xT3GAlkNAnmJug%2FL%2Fp2KMHHmAAWu81Qa1p2GzMlsWNX&X-Amz-Signature=d7f5a8e86b16f60c9cd786bd86cce54379213abb76867419902e4d895268a9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ7EA2U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxJs5YQK7%2Fusd%2BnkXCWNCEX22Dc0gJ%2F6sHQeIor42WTAiEA06hqT29ZbI%2BNP00Xs4%2BXjk4X6C88WwEtffhnHzX%2Fb0Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDN%2Fd5G2qCPhFmUxS7SrcAw%2FEgJeYJa%2F5HmdycvoDngFQjYKGdHpZ3tNr3%2BAY2JbEEb2zvqapkv8DoAs5U6%2FsbC6F3M20Y3wFvdfj9nwt6vwk1i44CMV3l0D9V4ssDFydDz%2BC8XAZJvx7mvpdo36QYvJIHw6zVeGZCA%2B3PRTLp1bDUKMzWDel8hJ7vQELJdjOcL8DuKdQoltIzJvnNUtRTprI8ns3LlnbPBcQfUquKkCQIaHu61KotsrBT7XBjf3pSVsTJuekGC3qlwP%2F6anctgZaPllQPj7SRv8EtT%2BxRpGPxMy6lSqdQeuB4V9NkqLoKl9xQzF%2BG0PZuPngLU5UEbfVynIEVkL1A2raJaV7%2BImais0c8nHTJd86jkd4K5iQv7kIGz4qHmxKImmdan3N4Da6ltWatxm40HVf7nv0c%2BZY%2FrzD%2F2qevUwDleF3MV5mt1PnVpx%2FbDoEKIY7IMc3SZpGBh9vwh9wWeCDmh6nZFrPwjUMwapADRMRQgw6Xj2PPwCdF7PpB0VkeocRIQUpWYXytmW4sLQR9vGhzKCovVZEMQc9rTgkO3xS4WkT%2BSUnnKv8vnR%2BE3IYcZjZzjJJy61QudgMJ6GHROiG1VyEuGW1YHjLp0I3PABJUZkfoQKtY3SVst0VOQP3VmmcMN3h1L4GOqUBJnT%2BN2FsZP%2BRpHldVUMevxG0HdeL%2FX85vn%2F92YehFgepUBC%2BGhC%2FfdJqZnRsM127SLZ31%2FieFmglcjPawsK4s9ymR8ALcdkvssjfi92NfuzOroIrxhDqRDNhxY4r6xOhuQIPk8ZuJndQoHpwkyuJWvStEE0xBPRlV0CKuJSoUkB%2B8Dfn8xT3GAlkNAnmJug%2FL%2Fp2KMHHmAAWu81Qa1p2GzMlsWNX&X-Amz-Signature=8427009dc933588a953e4ccf7d3456d9f0057f0fd2d04b25810052617eb09b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ7EA2U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxJs5YQK7%2Fusd%2BnkXCWNCEX22Dc0gJ%2F6sHQeIor42WTAiEA06hqT29ZbI%2BNP00Xs4%2BXjk4X6C88WwEtffhnHzX%2Fb0Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDN%2Fd5G2qCPhFmUxS7SrcAw%2FEgJeYJa%2F5HmdycvoDngFQjYKGdHpZ3tNr3%2BAY2JbEEb2zvqapkv8DoAs5U6%2FsbC6F3M20Y3wFvdfj9nwt6vwk1i44CMV3l0D9V4ssDFydDz%2BC8XAZJvx7mvpdo36QYvJIHw6zVeGZCA%2B3PRTLp1bDUKMzWDel8hJ7vQELJdjOcL8DuKdQoltIzJvnNUtRTprI8ns3LlnbPBcQfUquKkCQIaHu61KotsrBT7XBjf3pSVsTJuekGC3qlwP%2F6anctgZaPllQPj7SRv8EtT%2BxRpGPxMy6lSqdQeuB4V9NkqLoKl9xQzF%2BG0PZuPngLU5UEbfVynIEVkL1A2raJaV7%2BImais0c8nHTJd86jkd4K5iQv7kIGz4qHmxKImmdan3N4Da6ltWatxm40HVf7nv0c%2BZY%2FrzD%2F2qevUwDleF3MV5mt1PnVpx%2FbDoEKIY7IMc3SZpGBh9vwh9wWeCDmh6nZFrPwjUMwapADRMRQgw6Xj2PPwCdF7PpB0VkeocRIQUpWYXytmW4sLQR9vGhzKCovVZEMQc9rTgkO3xS4WkT%2BSUnnKv8vnR%2BE3IYcZjZzjJJy61QudgMJ6GHROiG1VyEuGW1YHjLp0I3PABJUZkfoQKtY3SVst0VOQP3VmmcMN3h1L4GOqUBJnT%2BN2FsZP%2BRpHldVUMevxG0HdeL%2FX85vn%2F92YehFgepUBC%2BGhC%2FfdJqZnRsM127SLZ31%2FieFmglcjPawsK4s9ymR8ALcdkvssjfi92NfuzOroIrxhDqRDNhxY4r6xOhuQIPk8ZuJndQoHpwkyuJWvStEE0xBPRlV0CKuJSoUkB%2B8Dfn8xT3GAlkNAnmJug%2FL%2Fp2KMHHmAAWu81Qa1p2GzMlsWNX&X-Amz-Signature=2d41be241361885ee015a317bccd8df5d7fee45b3dda9feef8d3bb3d0251f717&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZ7EA2U%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxJs5YQK7%2Fusd%2BnkXCWNCEX22Dc0gJ%2F6sHQeIor42WTAiEA06hqT29ZbI%2BNP00Xs4%2BXjk4X6C88WwEtffhnHzX%2Fb0Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDN%2Fd5G2qCPhFmUxS7SrcAw%2FEgJeYJa%2F5HmdycvoDngFQjYKGdHpZ3tNr3%2BAY2JbEEb2zvqapkv8DoAs5U6%2FsbC6F3M20Y3wFvdfj9nwt6vwk1i44CMV3l0D9V4ssDFydDz%2BC8XAZJvx7mvpdo36QYvJIHw6zVeGZCA%2B3PRTLp1bDUKMzWDel8hJ7vQELJdjOcL8DuKdQoltIzJvnNUtRTprI8ns3LlnbPBcQfUquKkCQIaHu61KotsrBT7XBjf3pSVsTJuekGC3qlwP%2F6anctgZaPllQPj7SRv8EtT%2BxRpGPxMy6lSqdQeuB4V9NkqLoKl9xQzF%2BG0PZuPngLU5UEbfVynIEVkL1A2raJaV7%2BImais0c8nHTJd86jkd4K5iQv7kIGz4qHmxKImmdan3N4Da6ltWatxm40HVf7nv0c%2BZY%2FrzD%2F2qevUwDleF3MV5mt1PnVpx%2FbDoEKIY7IMc3SZpGBh9vwh9wWeCDmh6nZFrPwjUMwapADRMRQgw6Xj2PPwCdF7PpB0VkeocRIQUpWYXytmW4sLQR9vGhzKCovVZEMQc9rTgkO3xS4WkT%2BSUnnKv8vnR%2BE3IYcZjZzjJJy61QudgMJ6GHROiG1VyEuGW1YHjLp0I3PABJUZkfoQKtY3SVst0VOQP3VmmcMN3h1L4GOqUBJnT%2BN2FsZP%2BRpHldVUMevxG0HdeL%2FX85vn%2F92YehFgepUBC%2BGhC%2FfdJqZnRsM127SLZ31%2FieFmglcjPawsK4s9ymR8ALcdkvssjfi92NfuzOroIrxhDqRDNhxY4r6xOhuQIPk8ZuJndQoHpwkyuJWvStEE0xBPRlV0CKuJSoUkB%2B8Dfn8xT3GAlkNAnmJug%2FL%2Fp2KMHHmAAWu81Qa1p2GzMlsWNX&X-Amz-Signature=397b97a1eab0d37eaab0b4ab9dc3625687d6e9ea267327846b27802681f5515f&X-Amz-SignedHeaders=host&x-id=GetObject)
