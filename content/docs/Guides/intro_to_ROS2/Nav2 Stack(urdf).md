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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SV5Q4Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICDSoIn2LHh4sg%2Ble19SpbGBbeBtQnEJtbNE7j4FdkYZAiB0B1%2FmROFEyaPkcNIswSbfsp0RBYzgJJN3p%2BZ3Hw4wUCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNiW7LsQipBXzpw5%2BKtwDcy8ecN1B09rYWcyBUEXD3qGo7jUyjKgwYnuzLv8OWc6BBuBfEJdoBcvWRcJuZYq0ATiyKKPmgqZ%2FvNuH0s3ESxkO06vlZi8MpKLOUqtjxZtdh1%2F4MENuaL6h83LsdrLLI7MjcKwcm7%2B3%2F%2FykSuJon6%2Baqjpaa7b818LSmUGPMaBQXJqYvJLVe%2FORAT6lzEcu%2BsSyhhwkmtyDd8EHmku1RHv2JyC9gnLho7zMaE%2BBiuZt6PpKc9A2%2BApdbkx%2FbcZPfBnJT5EEAZ5iAtx5kPfKgjaval3jBZV1krYXaJq7e091Jd1ZBdyok3chSvwY27M5Utv6L6UMWROgsWfIwYQRKY4c6koPdOOvjGHOOq%2BgDww1Uv6wHfucJEcnjQVYfdt6zFl9ePoCXYtocWOc4mf8hYUvY7rmFwEHU%2B9Vl76boRdWopETCSb2HKZUnoX8BKEzKAaCruwqbRm%2F%2Bmd7r7WsCdetsI5B0S0m2PyYUrlNpP4betY5dKa4U%2FDW231OW0KXokjxKexfr0DsLzPcdd%2Bascudk7q7c3TK3Ou%2Bv5rgwVkQyASJaasGMMo0bUvDgG1JZff66LC1zkR1J47lkpjDHoVpUzgIz2HsY%2Fta%2FUrh9Yk8oGYhfGou77UhzJYwsrDYwwY6pgGChnV9ZcbHA4AuQ4d2HoUkmhKx4yubA%2FUiaOqFlvyk0dZZ3jyeX%2FTmshv00MsjyjfemSdjCTPyKwwRZfEFCpFXbxlNUSORXvqQF5XPW0Qm9hElFQMq1rkX4kBxYVv2xq3JsznSBgk1t5y10NCqMPJ9oQ4ePnMd%2BT2y0NpwISsj5gAHanBTytz4eNNDTrfUN3Vj%2BlLdsc3PRmmkhlY6HQGuXAiCoTap&X-Amz-Signature=d10f9fa0b582942020cb8817decb35b26f829d9f55b92ce1ee9f84cbf12ac9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SV5Q4Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICDSoIn2LHh4sg%2Ble19SpbGBbeBtQnEJtbNE7j4FdkYZAiB0B1%2FmROFEyaPkcNIswSbfsp0RBYzgJJN3p%2BZ3Hw4wUCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNiW7LsQipBXzpw5%2BKtwDcy8ecN1B09rYWcyBUEXD3qGo7jUyjKgwYnuzLv8OWc6BBuBfEJdoBcvWRcJuZYq0ATiyKKPmgqZ%2FvNuH0s3ESxkO06vlZi8MpKLOUqtjxZtdh1%2F4MENuaL6h83LsdrLLI7MjcKwcm7%2B3%2F%2FykSuJon6%2Baqjpaa7b818LSmUGPMaBQXJqYvJLVe%2FORAT6lzEcu%2BsSyhhwkmtyDd8EHmku1RHv2JyC9gnLho7zMaE%2BBiuZt6PpKc9A2%2BApdbkx%2FbcZPfBnJT5EEAZ5iAtx5kPfKgjaval3jBZV1krYXaJq7e091Jd1ZBdyok3chSvwY27M5Utv6L6UMWROgsWfIwYQRKY4c6koPdOOvjGHOOq%2BgDww1Uv6wHfucJEcnjQVYfdt6zFl9ePoCXYtocWOc4mf8hYUvY7rmFwEHU%2B9Vl76boRdWopETCSb2HKZUnoX8BKEzKAaCruwqbRm%2F%2Bmd7r7WsCdetsI5B0S0m2PyYUrlNpP4betY5dKa4U%2FDW231OW0KXokjxKexfr0DsLzPcdd%2Bascudk7q7c3TK3Ou%2Bv5rgwVkQyASJaasGMMo0bUvDgG1JZff66LC1zkR1J47lkpjDHoVpUzgIz2HsY%2Fta%2FUrh9Yk8oGYhfGou77UhzJYwsrDYwwY6pgGChnV9ZcbHA4AuQ4d2HoUkmhKx4yubA%2FUiaOqFlvyk0dZZ3jyeX%2FTmshv00MsjyjfemSdjCTPyKwwRZfEFCpFXbxlNUSORXvqQF5XPW0Qm9hElFQMq1rkX4kBxYVv2xq3JsznSBgk1t5y10NCqMPJ9oQ4ePnMd%2BT2y0NpwISsj5gAHanBTytz4eNNDTrfUN3Vj%2BlLdsc3PRmmkhlY6HQGuXAiCoTap&X-Amz-Signature=d769f730dad5832ad891c065b5bcf1e64c215ec412eb4914e5b2fe9f000c820f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SV5Q4Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICDSoIn2LHh4sg%2Ble19SpbGBbeBtQnEJtbNE7j4FdkYZAiB0B1%2FmROFEyaPkcNIswSbfsp0RBYzgJJN3p%2BZ3Hw4wUCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNiW7LsQipBXzpw5%2BKtwDcy8ecN1B09rYWcyBUEXD3qGo7jUyjKgwYnuzLv8OWc6BBuBfEJdoBcvWRcJuZYq0ATiyKKPmgqZ%2FvNuH0s3ESxkO06vlZi8MpKLOUqtjxZtdh1%2F4MENuaL6h83LsdrLLI7MjcKwcm7%2B3%2F%2FykSuJon6%2Baqjpaa7b818LSmUGPMaBQXJqYvJLVe%2FORAT6lzEcu%2BsSyhhwkmtyDd8EHmku1RHv2JyC9gnLho7zMaE%2BBiuZt6PpKc9A2%2BApdbkx%2FbcZPfBnJT5EEAZ5iAtx5kPfKgjaval3jBZV1krYXaJq7e091Jd1ZBdyok3chSvwY27M5Utv6L6UMWROgsWfIwYQRKY4c6koPdOOvjGHOOq%2BgDww1Uv6wHfucJEcnjQVYfdt6zFl9ePoCXYtocWOc4mf8hYUvY7rmFwEHU%2B9Vl76boRdWopETCSb2HKZUnoX8BKEzKAaCruwqbRm%2F%2Bmd7r7WsCdetsI5B0S0m2PyYUrlNpP4betY5dKa4U%2FDW231OW0KXokjxKexfr0DsLzPcdd%2Bascudk7q7c3TK3Ou%2Bv5rgwVkQyASJaasGMMo0bUvDgG1JZff66LC1zkR1J47lkpjDHoVpUzgIz2HsY%2Fta%2FUrh9Yk8oGYhfGou77UhzJYwsrDYwwY6pgGChnV9ZcbHA4AuQ4d2HoUkmhKx4yubA%2FUiaOqFlvyk0dZZ3jyeX%2FTmshv00MsjyjfemSdjCTPyKwwRZfEFCpFXbxlNUSORXvqQF5XPW0Qm9hElFQMq1rkX4kBxYVv2xq3JsznSBgk1t5y10NCqMPJ9oQ4ePnMd%2BT2y0NpwISsj5gAHanBTytz4eNNDTrfUN3Vj%2BlLdsc3PRmmkhlY6HQGuXAiCoTap&X-Amz-Signature=b42646a97a2c00a7da3448b8a3efa8cdca5138ed694f1e1951f5c82f19069ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SV5Q4Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICDSoIn2LHh4sg%2Ble19SpbGBbeBtQnEJtbNE7j4FdkYZAiB0B1%2FmROFEyaPkcNIswSbfsp0RBYzgJJN3p%2BZ3Hw4wUCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNiW7LsQipBXzpw5%2BKtwDcy8ecN1B09rYWcyBUEXD3qGo7jUyjKgwYnuzLv8OWc6BBuBfEJdoBcvWRcJuZYq0ATiyKKPmgqZ%2FvNuH0s3ESxkO06vlZi8MpKLOUqtjxZtdh1%2F4MENuaL6h83LsdrLLI7MjcKwcm7%2B3%2F%2FykSuJon6%2Baqjpaa7b818LSmUGPMaBQXJqYvJLVe%2FORAT6lzEcu%2BsSyhhwkmtyDd8EHmku1RHv2JyC9gnLho7zMaE%2BBiuZt6PpKc9A2%2BApdbkx%2FbcZPfBnJT5EEAZ5iAtx5kPfKgjaval3jBZV1krYXaJq7e091Jd1ZBdyok3chSvwY27M5Utv6L6UMWROgsWfIwYQRKY4c6koPdOOvjGHOOq%2BgDww1Uv6wHfucJEcnjQVYfdt6zFl9ePoCXYtocWOc4mf8hYUvY7rmFwEHU%2B9Vl76boRdWopETCSb2HKZUnoX8BKEzKAaCruwqbRm%2F%2Bmd7r7WsCdetsI5B0S0m2PyYUrlNpP4betY5dKa4U%2FDW231OW0KXokjxKexfr0DsLzPcdd%2Bascudk7q7c3TK3Ou%2Bv5rgwVkQyASJaasGMMo0bUvDgG1JZff66LC1zkR1J47lkpjDHoVpUzgIz2HsY%2Fta%2FUrh9Yk8oGYhfGou77UhzJYwsrDYwwY6pgGChnV9ZcbHA4AuQ4d2HoUkmhKx4yubA%2FUiaOqFlvyk0dZZ3jyeX%2FTmshv00MsjyjfemSdjCTPyKwwRZfEFCpFXbxlNUSORXvqQF5XPW0Qm9hElFQMq1rkX4kBxYVv2xq3JsznSBgk1t5y10NCqMPJ9oQ4ePnMd%2BT2y0NpwISsj5gAHanBTytz4eNNDTrfUN3Vj%2BlLdsc3PRmmkhlY6HQGuXAiCoTap&X-Amz-Signature=a6996dabbd1a1e5f3232b742129ff10af300c565522b9a8980cb42fe438d05ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SV5Q4Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICDSoIn2LHh4sg%2Ble19SpbGBbeBtQnEJtbNE7j4FdkYZAiB0B1%2FmROFEyaPkcNIswSbfsp0RBYzgJJN3p%2BZ3Hw4wUCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNiW7LsQipBXzpw5%2BKtwDcy8ecN1B09rYWcyBUEXD3qGo7jUyjKgwYnuzLv8OWc6BBuBfEJdoBcvWRcJuZYq0ATiyKKPmgqZ%2FvNuH0s3ESxkO06vlZi8MpKLOUqtjxZtdh1%2F4MENuaL6h83LsdrLLI7MjcKwcm7%2B3%2F%2FykSuJon6%2Baqjpaa7b818LSmUGPMaBQXJqYvJLVe%2FORAT6lzEcu%2BsSyhhwkmtyDd8EHmku1RHv2JyC9gnLho7zMaE%2BBiuZt6PpKc9A2%2BApdbkx%2FbcZPfBnJT5EEAZ5iAtx5kPfKgjaval3jBZV1krYXaJq7e091Jd1ZBdyok3chSvwY27M5Utv6L6UMWROgsWfIwYQRKY4c6koPdOOvjGHOOq%2BgDww1Uv6wHfucJEcnjQVYfdt6zFl9ePoCXYtocWOc4mf8hYUvY7rmFwEHU%2B9Vl76boRdWopETCSb2HKZUnoX8BKEzKAaCruwqbRm%2F%2Bmd7r7WsCdetsI5B0S0m2PyYUrlNpP4betY5dKa4U%2FDW231OW0KXokjxKexfr0DsLzPcdd%2Bascudk7q7c3TK3Ou%2Bv5rgwVkQyASJaasGMMo0bUvDgG1JZff66LC1zkR1J47lkpjDHoVpUzgIz2HsY%2Fta%2FUrh9Yk8oGYhfGou77UhzJYwsrDYwwY6pgGChnV9ZcbHA4AuQ4d2HoUkmhKx4yubA%2FUiaOqFlvyk0dZZ3jyeX%2FTmshv00MsjyjfemSdjCTPyKwwRZfEFCpFXbxlNUSORXvqQF5XPW0Qm9hElFQMq1rkX4kBxYVv2xq3JsznSBgk1t5y10NCqMPJ9oQ4ePnMd%2BT2y0NpwISsj5gAHanBTytz4eNNDTrfUN3Vj%2BlLdsc3PRmmkhlY6HQGuXAiCoTap&X-Amz-Signature=879a4c5c0d5bd7e3c6006610a36efdaf44b2d2cae10f1c5c25c6cf14264ca785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3SV5Q4Q%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICDSoIn2LHh4sg%2Ble19SpbGBbeBtQnEJtbNE7j4FdkYZAiB0B1%2FmROFEyaPkcNIswSbfsp0RBYzgJJN3p%2BZ3Hw4wUCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNiW7LsQipBXzpw5%2BKtwDcy8ecN1B09rYWcyBUEXD3qGo7jUyjKgwYnuzLv8OWc6BBuBfEJdoBcvWRcJuZYq0ATiyKKPmgqZ%2FvNuH0s3ESxkO06vlZi8MpKLOUqtjxZtdh1%2F4MENuaL6h83LsdrLLI7MjcKwcm7%2B3%2F%2FykSuJon6%2Baqjpaa7b818LSmUGPMaBQXJqYvJLVe%2FORAT6lzEcu%2BsSyhhwkmtyDd8EHmku1RHv2JyC9gnLho7zMaE%2BBiuZt6PpKc9A2%2BApdbkx%2FbcZPfBnJT5EEAZ5iAtx5kPfKgjaval3jBZV1krYXaJq7e091Jd1ZBdyok3chSvwY27M5Utv6L6UMWROgsWfIwYQRKY4c6koPdOOvjGHOOq%2BgDww1Uv6wHfucJEcnjQVYfdt6zFl9ePoCXYtocWOc4mf8hYUvY7rmFwEHU%2B9Vl76boRdWopETCSb2HKZUnoX8BKEzKAaCruwqbRm%2F%2Bmd7r7WsCdetsI5B0S0m2PyYUrlNpP4betY5dKa4U%2FDW231OW0KXokjxKexfr0DsLzPcdd%2Bascudk7q7c3TK3Ou%2Bv5rgwVkQyASJaasGMMo0bUvDgG1JZff66LC1zkR1J47lkpjDHoVpUzgIz2HsY%2Fta%2FUrh9Yk8oGYhfGou77UhzJYwsrDYwwY6pgGChnV9ZcbHA4AuQ4d2HoUkmhKx4yubA%2FUiaOqFlvyk0dZZ3jyeX%2FTmshv00MsjyjfemSdjCTPyKwwRZfEFCpFXbxlNUSORXvqQF5XPW0Qm9hElFQMq1rkX4kBxYVv2xq3JsznSBgk1t5y10NCqMPJ9oQ4ePnMd%2BT2y0NpwISsj5gAHanBTytz4eNNDTrfUN3Vj%2BlLdsc3PRmmkhlY6HQGuXAiCoTap&X-Amz-Signature=732685375f1c53e5b0a126d108ea50de352934719c7a01d7c6a2932a0c7e1d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
