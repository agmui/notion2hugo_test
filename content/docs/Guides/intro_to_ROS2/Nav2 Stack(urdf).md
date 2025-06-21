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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQQC2JC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdMzA2acNndtEq%2B6yrsY5%2FMJqjL4d7DNPncBRLF3ZDAiEAhcQHKDXzRSP1f2YS1G7%2FRzhSwU8Nn6mP9aTpWKlqGLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ04o0r7B2MNtLyICrcA1YIa5WTXYcrkPoI7qtnR%2FnRPNJkl6olf4SV8zTJ1gyHZGRt79209fXx218p2BRnxO7haYH5CzQ4s4e%2B%2B59w%2F0qv2C0m5RzbTyCRnmzdn48nnL5LyKDEAHFdo4yZytE%2BV6AN9RQ9OxwoI1rfp6Bt%2Fotf7zxsyl%2BwNUbLol%2FPjMHjuLr0fFZe%2BcS3DdiDcNbXaz5SAQMVQlb22jlHI2MTl5ODfKD88Zx7SjGnkcQAaTh%2FzzU3Ft%2FCD0X1GTk9b7VF01SkhvS6d0kvKIAz6YFvs%2BdrQVsOLC99XLY7SwVl6O9DxKZzv%2BXktWpViIxC2%2BY0dZnCD93hUO40vA4iEtjvBjRaBzKX69Ax5StCsI0BHFuysNon72C4qnzUzL9jMEpXjTtLTX%2BWgU3DIUzo5jGXfqUDuM%2BST%2B6p93GTzm8MYae7FyGJ2pB%2FlRWtzCxoPY3TpfB9Cplu8CmzoySRgJOC908sKSgnsZM62Z5hhoLoOisxuwEpKab0WgVx8F%2BrDNFig%2F7%2BUNk6YtVZ9r0YI%2BRDOarmx0EZa%2BbOaPpcdOtSNFyiDOIARDffnoDFhjyHtQ%2Bn3xcBXVKLyTzVImTzpiuUBKvmFguOcIUQTRU6IZkR6EKmoUJqQuj2DjECCy4TMMiP28IGOqUBg62IPLVNyKR9Ktd8Tgx7XOnbrSFoe346YQWoh%2BFGCfz1wEVDUsEC7kRR%2BC83iBvm%2Ft5vHxfvswEd%2FvGIuZSmNkqcpxQtpoupHBF13%2Ff9SIH2T9YGLKeR6buDaKF1JGtbyUOoTcQrmZck0SldAXvOekchQ8SfhrrzY79trUQdoJGDRteuzkrgfJnwCjXYX8KZ3AH8TIGgDyfYYYk33Mh8YPMiu4KE&X-Amz-Signature=497ac7155ffee7867f5b2b927132e5ad350988bac084ef0ac2f91fd4e01b9eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQQC2JC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdMzA2acNndtEq%2B6yrsY5%2FMJqjL4d7DNPncBRLF3ZDAiEAhcQHKDXzRSP1f2YS1G7%2FRzhSwU8Nn6mP9aTpWKlqGLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ04o0r7B2MNtLyICrcA1YIa5WTXYcrkPoI7qtnR%2FnRPNJkl6olf4SV8zTJ1gyHZGRt79209fXx218p2BRnxO7haYH5CzQ4s4e%2B%2B59w%2F0qv2C0m5RzbTyCRnmzdn48nnL5LyKDEAHFdo4yZytE%2BV6AN9RQ9OxwoI1rfp6Bt%2Fotf7zxsyl%2BwNUbLol%2FPjMHjuLr0fFZe%2BcS3DdiDcNbXaz5SAQMVQlb22jlHI2MTl5ODfKD88Zx7SjGnkcQAaTh%2FzzU3Ft%2FCD0X1GTk9b7VF01SkhvS6d0kvKIAz6YFvs%2BdrQVsOLC99XLY7SwVl6O9DxKZzv%2BXktWpViIxC2%2BY0dZnCD93hUO40vA4iEtjvBjRaBzKX69Ax5StCsI0BHFuysNon72C4qnzUzL9jMEpXjTtLTX%2BWgU3DIUzo5jGXfqUDuM%2BST%2B6p93GTzm8MYae7FyGJ2pB%2FlRWtzCxoPY3TpfB9Cplu8CmzoySRgJOC908sKSgnsZM62Z5hhoLoOisxuwEpKab0WgVx8F%2BrDNFig%2F7%2BUNk6YtVZ9r0YI%2BRDOarmx0EZa%2BbOaPpcdOtSNFyiDOIARDffnoDFhjyHtQ%2Bn3xcBXVKLyTzVImTzpiuUBKvmFguOcIUQTRU6IZkR6EKmoUJqQuj2DjECCy4TMMiP28IGOqUBg62IPLVNyKR9Ktd8Tgx7XOnbrSFoe346YQWoh%2BFGCfz1wEVDUsEC7kRR%2BC83iBvm%2Ft5vHxfvswEd%2FvGIuZSmNkqcpxQtpoupHBF13%2Ff9SIH2T9YGLKeR6buDaKF1JGtbyUOoTcQrmZck0SldAXvOekchQ8SfhrrzY79trUQdoJGDRteuzkrgfJnwCjXYX8KZ3AH8TIGgDyfYYYk33Mh8YPMiu4KE&X-Amz-Signature=7e1ec3cf0c7f81d539b2dd4a1227537ef0fc8ca65037da25ce71990d43c1ce55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQQC2JC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdMzA2acNndtEq%2B6yrsY5%2FMJqjL4d7DNPncBRLF3ZDAiEAhcQHKDXzRSP1f2YS1G7%2FRzhSwU8Nn6mP9aTpWKlqGLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ04o0r7B2MNtLyICrcA1YIa5WTXYcrkPoI7qtnR%2FnRPNJkl6olf4SV8zTJ1gyHZGRt79209fXx218p2BRnxO7haYH5CzQ4s4e%2B%2B59w%2F0qv2C0m5RzbTyCRnmzdn48nnL5LyKDEAHFdo4yZytE%2BV6AN9RQ9OxwoI1rfp6Bt%2Fotf7zxsyl%2BwNUbLol%2FPjMHjuLr0fFZe%2BcS3DdiDcNbXaz5SAQMVQlb22jlHI2MTl5ODfKD88Zx7SjGnkcQAaTh%2FzzU3Ft%2FCD0X1GTk9b7VF01SkhvS6d0kvKIAz6YFvs%2BdrQVsOLC99XLY7SwVl6O9DxKZzv%2BXktWpViIxC2%2BY0dZnCD93hUO40vA4iEtjvBjRaBzKX69Ax5StCsI0BHFuysNon72C4qnzUzL9jMEpXjTtLTX%2BWgU3DIUzo5jGXfqUDuM%2BST%2B6p93GTzm8MYae7FyGJ2pB%2FlRWtzCxoPY3TpfB9Cplu8CmzoySRgJOC908sKSgnsZM62Z5hhoLoOisxuwEpKab0WgVx8F%2BrDNFig%2F7%2BUNk6YtVZ9r0YI%2BRDOarmx0EZa%2BbOaPpcdOtSNFyiDOIARDffnoDFhjyHtQ%2Bn3xcBXVKLyTzVImTzpiuUBKvmFguOcIUQTRU6IZkR6EKmoUJqQuj2DjECCy4TMMiP28IGOqUBg62IPLVNyKR9Ktd8Tgx7XOnbrSFoe346YQWoh%2BFGCfz1wEVDUsEC7kRR%2BC83iBvm%2Ft5vHxfvswEd%2FvGIuZSmNkqcpxQtpoupHBF13%2Ff9SIH2T9YGLKeR6buDaKF1JGtbyUOoTcQrmZck0SldAXvOekchQ8SfhrrzY79trUQdoJGDRteuzkrgfJnwCjXYX8KZ3AH8TIGgDyfYYYk33Mh8YPMiu4KE&X-Amz-Signature=1d92f4e710948829d395f355b8519fcf994bbb2bd590fd5a47715c36ea8cc463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQQC2JC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdMzA2acNndtEq%2B6yrsY5%2FMJqjL4d7DNPncBRLF3ZDAiEAhcQHKDXzRSP1f2YS1G7%2FRzhSwU8Nn6mP9aTpWKlqGLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ04o0r7B2MNtLyICrcA1YIa5WTXYcrkPoI7qtnR%2FnRPNJkl6olf4SV8zTJ1gyHZGRt79209fXx218p2BRnxO7haYH5CzQ4s4e%2B%2B59w%2F0qv2C0m5RzbTyCRnmzdn48nnL5LyKDEAHFdo4yZytE%2BV6AN9RQ9OxwoI1rfp6Bt%2Fotf7zxsyl%2BwNUbLol%2FPjMHjuLr0fFZe%2BcS3DdiDcNbXaz5SAQMVQlb22jlHI2MTl5ODfKD88Zx7SjGnkcQAaTh%2FzzU3Ft%2FCD0X1GTk9b7VF01SkhvS6d0kvKIAz6YFvs%2BdrQVsOLC99XLY7SwVl6O9DxKZzv%2BXktWpViIxC2%2BY0dZnCD93hUO40vA4iEtjvBjRaBzKX69Ax5StCsI0BHFuysNon72C4qnzUzL9jMEpXjTtLTX%2BWgU3DIUzo5jGXfqUDuM%2BST%2B6p93GTzm8MYae7FyGJ2pB%2FlRWtzCxoPY3TpfB9Cplu8CmzoySRgJOC908sKSgnsZM62Z5hhoLoOisxuwEpKab0WgVx8F%2BrDNFig%2F7%2BUNk6YtVZ9r0YI%2BRDOarmx0EZa%2BbOaPpcdOtSNFyiDOIARDffnoDFhjyHtQ%2Bn3xcBXVKLyTzVImTzpiuUBKvmFguOcIUQTRU6IZkR6EKmoUJqQuj2DjECCy4TMMiP28IGOqUBg62IPLVNyKR9Ktd8Tgx7XOnbrSFoe346YQWoh%2BFGCfz1wEVDUsEC7kRR%2BC83iBvm%2Ft5vHxfvswEd%2FvGIuZSmNkqcpxQtpoupHBF13%2Ff9SIH2T9YGLKeR6buDaKF1JGtbyUOoTcQrmZck0SldAXvOekchQ8SfhrrzY79trUQdoJGDRteuzkrgfJnwCjXYX8KZ3AH8TIGgDyfYYYk33Mh8YPMiu4KE&X-Amz-Signature=6b607a9a3aee5273b59cc2d2d13e37cdcaa8e4e541d899a43a5548d463fcd3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQQC2JC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdMzA2acNndtEq%2B6yrsY5%2FMJqjL4d7DNPncBRLF3ZDAiEAhcQHKDXzRSP1f2YS1G7%2FRzhSwU8Nn6mP9aTpWKlqGLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ04o0r7B2MNtLyICrcA1YIa5WTXYcrkPoI7qtnR%2FnRPNJkl6olf4SV8zTJ1gyHZGRt79209fXx218p2BRnxO7haYH5CzQ4s4e%2B%2B59w%2F0qv2C0m5RzbTyCRnmzdn48nnL5LyKDEAHFdo4yZytE%2BV6AN9RQ9OxwoI1rfp6Bt%2Fotf7zxsyl%2BwNUbLol%2FPjMHjuLr0fFZe%2BcS3DdiDcNbXaz5SAQMVQlb22jlHI2MTl5ODfKD88Zx7SjGnkcQAaTh%2FzzU3Ft%2FCD0X1GTk9b7VF01SkhvS6d0kvKIAz6YFvs%2BdrQVsOLC99XLY7SwVl6O9DxKZzv%2BXktWpViIxC2%2BY0dZnCD93hUO40vA4iEtjvBjRaBzKX69Ax5StCsI0BHFuysNon72C4qnzUzL9jMEpXjTtLTX%2BWgU3DIUzo5jGXfqUDuM%2BST%2B6p93GTzm8MYae7FyGJ2pB%2FlRWtzCxoPY3TpfB9Cplu8CmzoySRgJOC908sKSgnsZM62Z5hhoLoOisxuwEpKab0WgVx8F%2BrDNFig%2F7%2BUNk6YtVZ9r0YI%2BRDOarmx0EZa%2BbOaPpcdOtSNFyiDOIARDffnoDFhjyHtQ%2Bn3xcBXVKLyTzVImTzpiuUBKvmFguOcIUQTRU6IZkR6EKmoUJqQuj2DjECCy4TMMiP28IGOqUBg62IPLVNyKR9Ktd8Tgx7XOnbrSFoe346YQWoh%2BFGCfz1wEVDUsEC7kRR%2BC83iBvm%2Ft5vHxfvswEd%2FvGIuZSmNkqcpxQtpoupHBF13%2Ff9SIH2T9YGLKeR6buDaKF1JGtbyUOoTcQrmZck0SldAXvOekchQ8SfhrrzY79trUQdoJGDRteuzkrgfJnwCjXYX8KZ3AH8TIGgDyfYYYk33Mh8YPMiu4KE&X-Amz-Signature=f0e375080cf0b8adec230d451f721699fdf225adf5fc0c74cc19646d2b35ec19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQQC2JC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUdMzA2acNndtEq%2B6yrsY5%2FMJqjL4d7DNPncBRLF3ZDAiEAhcQHKDXzRSP1f2YS1G7%2FRzhSwU8Nn6mP9aTpWKlqGLgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJ04o0r7B2MNtLyICrcA1YIa5WTXYcrkPoI7qtnR%2FnRPNJkl6olf4SV8zTJ1gyHZGRt79209fXx218p2BRnxO7haYH5CzQ4s4e%2B%2B59w%2F0qv2C0m5RzbTyCRnmzdn48nnL5LyKDEAHFdo4yZytE%2BV6AN9RQ9OxwoI1rfp6Bt%2Fotf7zxsyl%2BwNUbLol%2FPjMHjuLr0fFZe%2BcS3DdiDcNbXaz5SAQMVQlb22jlHI2MTl5ODfKD88Zx7SjGnkcQAaTh%2FzzU3Ft%2FCD0X1GTk9b7VF01SkhvS6d0kvKIAz6YFvs%2BdrQVsOLC99XLY7SwVl6O9DxKZzv%2BXktWpViIxC2%2BY0dZnCD93hUO40vA4iEtjvBjRaBzKX69Ax5StCsI0BHFuysNon72C4qnzUzL9jMEpXjTtLTX%2BWgU3DIUzo5jGXfqUDuM%2BST%2B6p93GTzm8MYae7FyGJ2pB%2FlRWtzCxoPY3TpfB9Cplu8CmzoySRgJOC908sKSgnsZM62Z5hhoLoOisxuwEpKab0WgVx8F%2BrDNFig%2F7%2BUNk6YtVZ9r0YI%2BRDOarmx0EZa%2BbOaPpcdOtSNFyiDOIARDffnoDFhjyHtQ%2Bn3xcBXVKLyTzVImTzpiuUBKvmFguOcIUQTRU6IZkR6EKmoUJqQuj2DjECCy4TMMiP28IGOqUBg62IPLVNyKR9Ktd8Tgx7XOnbrSFoe346YQWoh%2BFGCfz1wEVDUsEC7kRR%2BC83iBvm%2Ft5vHxfvswEd%2FvGIuZSmNkqcpxQtpoupHBF13%2Ff9SIH2T9YGLKeR6buDaKF1JGtbyUOoTcQrmZck0SldAXvOekchQ8SfhrrzY79trUQdoJGDRteuzkrgfJnwCjXYX8KZ3AH8TIGgDyfYYYk33Mh8YPMiu4KE&X-Amz-Signature=d5daa384d342c6477bf0231a78e918721029e8304171a5ad331d01485df86d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
