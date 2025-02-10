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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWEG7II%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0niRNNqwwgMpiSCIEGe1SlK9QpLAo740EAkK5qTR9%2BAiEA3V5MJtczZsuySoXJeeYplTzbXEuCcbqVM5vaVW0aQ4UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BW6KH%2BhOeOevvhXyrcA5Z6LKsxesX3FnMWaXjezG9BHs9Tq1H3pr0ypTazTWsJtnxb7w8TVcsVh5VtygLMHSfJJvTWWbq7QJXZY9%2FpV3BZKzZvku7jDNJZXN5IMWQTlVzBa4fYE%2BbPJTiJmULiiRFTtjAWkj3UUQJd3nN8K7stoed%2BR0XfyTMBFKxtdQyvmDeA9d6tzDkoaiiKIZ9duD9%2Fl%2BDkzYQURoIg4vevTYsijhq8%2Fh2zMUg2BzkqgIAZ64qJql%2BwkgWxBsEvx96imzXaEXjj9e8YImBUWinUDlaVhFECxzHBuci2ep1j5Eh92UnZFB%2Fw%2BozZkrgcrZHaq8g1z3SZQRS5wIBojuHSAjGeAPLiEGWVQbrP%2FnjvccQ5hILB3gRSk4alhJCay7RkJ4kIB2VN0SvOdAQSACfU%2Bl7QFwjfgbnau3t1wUS2M1dA63dLJAG%2Bq4Om8e7pVGRzO1OhyyqcGmC8IKdEMsSJ6YT3coHQ1US%2BZzQo4iJheNqwx1jyyl7aKFV9P9KncHEXr43HaJWEUJDRO3ccwKdrRpwY3RjAkxitG7V2o5HNZRNNbCw31zxLnKS86R7%2FEXt0Sb%2FPo1T13EJX1zdmIwq9kxfEapf5Q457wuTQ1nF%2BnXdmsAEhbN9%2FSSjDuXwZMIPNqb0GOqUB09e6aYZ1VyLPKvdj1L3fOw1AP%2BztlUGMeQdHjqLAFUPe5k3PKlh5Yf9QAWKg%2B%2F%2Fv7FqWcVY8yp5GYm4fNuU9O9%2Fg5jOh7Burh7gsz3gW4BX1%2FAf5XtYfe72k9RKsKrwO4jsh%2FoX%2FovyJIEOWF19GZ0OgvLRHspiW6TppHlP%2B9Da58RqzTUut%2F2kuMTHCv1ThoLDDUx4gxzAIT4juKBU8ol%2BzBNdj&X-Amz-Signature=28c2a73657cc64d1ede08a178d360e850d82d5824691044ba59040f673e41f08&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWEG7II%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0niRNNqwwgMpiSCIEGe1SlK9QpLAo740EAkK5qTR9%2BAiEA3V5MJtczZsuySoXJeeYplTzbXEuCcbqVM5vaVW0aQ4UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BW6KH%2BhOeOevvhXyrcA5Z6LKsxesX3FnMWaXjezG9BHs9Tq1H3pr0ypTazTWsJtnxb7w8TVcsVh5VtygLMHSfJJvTWWbq7QJXZY9%2FpV3BZKzZvku7jDNJZXN5IMWQTlVzBa4fYE%2BbPJTiJmULiiRFTtjAWkj3UUQJd3nN8K7stoed%2BR0XfyTMBFKxtdQyvmDeA9d6tzDkoaiiKIZ9duD9%2Fl%2BDkzYQURoIg4vevTYsijhq8%2Fh2zMUg2BzkqgIAZ64qJql%2BwkgWxBsEvx96imzXaEXjj9e8YImBUWinUDlaVhFECxzHBuci2ep1j5Eh92UnZFB%2Fw%2BozZkrgcrZHaq8g1z3SZQRS5wIBojuHSAjGeAPLiEGWVQbrP%2FnjvccQ5hILB3gRSk4alhJCay7RkJ4kIB2VN0SvOdAQSACfU%2Bl7QFwjfgbnau3t1wUS2M1dA63dLJAG%2Bq4Om8e7pVGRzO1OhyyqcGmC8IKdEMsSJ6YT3coHQ1US%2BZzQo4iJheNqwx1jyyl7aKFV9P9KncHEXr43HaJWEUJDRO3ccwKdrRpwY3RjAkxitG7V2o5HNZRNNbCw31zxLnKS86R7%2FEXt0Sb%2FPo1T13EJX1zdmIwq9kxfEapf5Q457wuTQ1nF%2BnXdmsAEhbN9%2FSSjDuXwZMIPNqb0GOqUB09e6aYZ1VyLPKvdj1L3fOw1AP%2BztlUGMeQdHjqLAFUPe5k3PKlh5Yf9QAWKg%2B%2F%2Fv7FqWcVY8yp5GYm4fNuU9O9%2Fg5jOh7Burh7gsz3gW4BX1%2FAf5XtYfe72k9RKsKrwO4jsh%2FoX%2FovyJIEOWF19GZ0OgvLRHspiW6TppHlP%2B9Da58RqzTUut%2F2kuMTHCv1ThoLDDUx4gxzAIT4juKBU8ol%2BzBNdj&X-Amz-Signature=6511cc9805cc49d3146a4a714b7a561b76f67e9d7e1906acb0ec0ff635efdf80&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWEG7II%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0niRNNqwwgMpiSCIEGe1SlK9QpLAo740EAkK5qTR9%2BAiEA3V5MJtczZsuySoXJeeYplTzbXEuCcbqVM5vaVW0aQ4UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BW6KH%2BhOeOevvhXyrcA5Z6LKsxesX3FnMWaXjezG9BHs9Tq1H3pr0ypTazTWsJtnxb7w8TVcsVh5VtygLMHSfJJvTWWbq7QJXZY9%2FpV3BZKzZvku7jDNJZXN5IMWQTlVzBa4fYE%2BbPJTiJmULiiRFTtjAWkj3UUQJd3nN8K7stoed%2BR0XfyTMBFKxtdQyvmDeA9d6tzDkoaiiKIZ9duD9%2Fl%2BDkzYQURoIg4vevTYsijhq8%2Fh2zMUg2BzkqgIAZ64qJql%2BwkgWxBsEvx96imzXaEXjj9e8YImBUWinUDlaVhFECxzHBuci2ep1j5Eh92UnZFB%2Fw%2BozZkrgcrZHaq8g1z3SZQRS5wIBojuHSAjGeAPLiEGWVQbrP%2FnjvccQ5hILB3gRSk4alhJCay7RkJ4kIB2VN0SvOdAQSACfU%2Bl7QFwjfgbnau3t1wUS2M1dA63dLJAG%2Bq4Om8e7pVGRzO1OhyyqcGmC8IKdEMsSJ6YT3coHQ1US%2BZzQo4iJheNqwx1jyyl7aKFV9P9KncHEXr43HaJWEUJDRO3ccwKdrRpwY3RjAkxitG7V2o5HNZRNNbCw31zxLnKS86R7%2FEXt0Sb%2FPo1T13EJX1zdmIwq9kxfEapf5Q457wuTQ1nF%2BnXdmsAEhbN9%2FSSjDuXwZMIPNqb0GOqUB09e6aYZ1VyLPKvdj1L3fOw1AP%2BztlUGMeQdHjqLAFUPe5k3PKlh5Yf9QAWKg%2B%2F%2Fv7FqWcVY8yp5GYm4fNuU9O9%2Fg5jOh7Burh7gsz3gW4BX1%2FAf5XtYfe72k9RKsKrwO4jsh%2FoX%2FovyJIEOWF19GZ0OgvLRHspiW6TppHlP%2B9Da58RqzTUut%2F2kuMTHCv1ThoLDDUx4gxzAIT4juKBU8ol%2BzBNdj&X-Amz-Signature=bae3a583aa6c39cd88121d076a05118ac036afa03747aba9bcb7b7d9b6a0ca2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWEG7II%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0niRNNqwwgMpiSCIEGe1SlK9QpLAo740EAkK5qTR9%2BAiEA3V5MJtczZsuySoXJeeYplTzbXEuCcbqVM5vaVW0aQ4UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BW6KH%2BhOeOevvhXyrcA5Z6LKsxesX3FnMWaXjezG9BHs9Tq1H3pr0ypTazTWsJtnxb7w8TVcsVh5VtygLMHSfJJvTWWbq7QJXZY9%2FpV3BZKzZvku7jDNJZXN5IMWQTlVzBa4fYE%2BbPJTiJmULiiRFTtjAWkj3UUQJd3nN8K7stoed%2BR0XfyTMBFKxtdQyvmDeA9d6tzDkoaiiKIZ9duD9%2Fl%2BDkzYQURoIg4vevTYsijhq8%2Fh2zMUg2BzkqgIAZ64qJql%2BwkgWxBsEvx96imzXaEXjj9e8YImBUWinUDlaVhFECxzHBuci2ep1j5Eh92UnZFB%2Fw%2BozZkrgcrZHaq8g1z3SZQRS5wIBojuHSAjGeAPLiEGWVQbrP%2FnjvccQ5hILB3gRSk4alhJCay7RkJ4kIB2VN0SvOdAQSACfU%2Bl7QFwjfgbnau3t1wUS2M1dA63dLJAG%2Bq4Om8e7pVGRzO1OhyyqcGmC8IKdEMsSJ6YT3coHQ1US%2BZzQo4iJheNqwx1jyyl7aKFV9P9KncHEXr43HaJWEUJDRO3ccwKdrRpwY3RjAkxitG7V2o5HNZRNNbCw31zxLnKS86R7%2FEXt0Sb%2FPo1T13EJX1zdmIwq9kxfEapf5Q457wuTQ1nF%2BnXdmsAEhbN9%2FSSjDuXwZMIPNqb0GOqUB09e6aYZ1VyLPKvdj1L3fOw1AP%2BztlUGMeQdHjqLAFUPe5k3PKlh5Yf9QAWKg%2B%2F%2Fv7FqWcVY8yp5GYm4fNuU9O9%2Fg5jOh7Burh7gsz3gW4BX1%2FAf5XtYfe72k9RKsKrwO4jsh%2FoX%2FovyJIEOWF19GZ0OgvLRHspiW6TppHlP%2B9Da58RqzTUut%2F2kuMTHCv1ThoLDDUx4gxzAIT4juKBU8ol%2BzBNdj&X-Amz-Signature=7329882a9311e491f172d3dc3ee22e99bed9fa39d612b5626b05a3e42a5c1cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWEG7II%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0niRNNqwwgMpiSCIEGe1SlK9QpLAo740EAkK5qTR9%2BAiEA3V5MJtczZsuySoXJeeYplTzbXEuCcbqVM5vaVW0aQ4UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BW6KH%2BhOeOevvhXyrcA5Z6LKsxesX3FnMWaXjezG9BHs9Tq1H3pr0ypTazTWsJtnxb7w8TVcsVh5VtygLMHSfJJvTWWbq7QJXZY9%2FpV3BZKzZvku7jDNJZXN5IMWQTlVzBa4fYE%2BbPJTiJmULiiRFTtjAWkj3UUQJd3nN8K7stoed%2BR0XfyTMBFKxtdQyvmDeA9d6tzDkoaiiKIZ9duD9%2Fl%2BDkzYQURoIg4vevTYsijhq8%2Fh2zMUg2BzkqgIAZ64qJql%2BwkgWxBsEvx96imzXaEXjj9e8YImBUWinUDlaVhFECxzHBuci2ep1j5Eh92UnZFB%2Fw%2BozZkrgcrZHaq8g1z3SZQRS5wIBojuHSAjGeAPLiEGWVQbrP%2FnjvccQ5hILB3gRSk4alhJCay7RkJ4kIB2VN0SvOdAQSACfU%2Bl7QFwjfgbnau3t1wUS2M1dA63dLJAG%2Bq4Om8e7pVGRzO1OhyyqcGmC8IKdEMsSJ6YT3coHQ1US%2BZzQo4iJheNqwx1jyyl7aKFV9P9KncHEXr43HaJWEUJDRO3ccwKdrRpwY3RjAkxitG7V2o5HNZRNNbCw31zxLnKS86R7%2FEXt0Sb%2FPo1T13EJX1zdmIwq9kxfEapf5Q457wuTQ1nF%2BnXdmsAEhbN9%2FSSjDuXwZMIPNqb0GOqUB09e6aYZ1VyLPKvdj1L3fOw1AP%2BztlUGMeQdHjqLAFUPe5k3PKlh5Yf9QAWKg%2B%2F%2Fv7FqWcVY8yp5GYm4fNuU9O9%2Fg5jOh7Burh7gsz3gW4BX1%2FAf5XtYfe72k9RKsKrwO4jsh%2FoX%2FovyJIEOWF19GZ0OgvLRHspiW6TppHlP%2B9Da58RqzTUut%2F2kuMTHCv1ThoLDDUx4gxzAIT4juKBU8ol%2BzBNdj&X-Amz-Signature=d90bb9cab6dadac5bd0ecefe008b387a8a86594c05a57e67ee3512103c66df01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWEG7II%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0niRNNqwwgMpiSCIEGe1SlK9QpLAo740EAkK5qTR9%2BAiEA3V5MJtczZsuySoXJeeYplTzbXEuCcbqVM5vaVW0aQ4UqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BW6KH%2BhOeOevvhXyrcA5Z6LKsxesX3FnMWaXjezG9BHs9Tq1H3pr0ypTazTWsJtnxb7w8TVcsVh5VtygLMHSfJJvTWWbq7QJXZY9%2FpV3BZKzZvku7jDNJZXN5IMWQTlVzBa4fYE%2BbPJTiJmULiiRFTtjAWkj3UUQJd3nN8K7stoed%2BR0XfyTMBFKxtdQyvmDeA9d6tzDkoaiiKIZ9duD9%2Fl%2BDkzYQURoIg4vevTYsijhq8%2Fh2zMUg2BzkqgIAZ64qJql%2BwkgWxBsEvx96imzXaEXjj9e8YImBUWinUDlaVhFECxzHBuci2ep1j5Eh92UnZFB%2Fw%2BozZkrgcrZHaq8g1z3SZQRS5wIBojuHSAjGeAPLiEGWVQbrP%2FnjvccQ5hILB3gRSk4alhJCay7RkJ4kIB2VN0SvOdAQSACfU%2Bl7QFwjfgbnau3t1wUS2M1dA63dLJAG%2Bq4Om8e7pVGRzO1OhyyqcGmC8IKdEMsSJ6YT3coHQ1US%2BZzQo4iJheNqwx1jyyl7aKFV9P9KncHEXr43HaJWEUJDRO3ccwKdrRpwY3RjAkxitG7V2o5HNZRNNbCw31zxLnKS86R7%2FEXt0Sb%2FPo1T13EJX1zdmIwq9kxfEapf5Q457wuTQ1nF%2BnXdmsAEhbN9%2FSSjDuXwZMIPNqb0GOqUB09e6aYZ1VyLPKvdj1L3fOw1AP%2BztlUGMeQdHjqLAFUPe5k3PKlh5Yf9QAWKg%2B%2F%2Fv7FqWcVY8yp5GYm4fNuU9O9%2Fg5jOh7Burh7gsz3gW4BX1%2FAf5XtYfe72k9RKsKrwO4jsh%2FoX%2FovyJIEOWF19GZ0OgvLRHspiW6TppHlP%2B9Da58RqzTUut%2F2kuMTHCv1ThoLDDUx4gxzAIT4juKBU8ol%2BzBNdj&X-Amz-Signature=d11e5d0107e556f2b26d2d4bec031cd11c0a1926a9f1dd7594c6e5a0c72eb93a&X-Amz-SignedHeaders=host&x-id=GetObject)
