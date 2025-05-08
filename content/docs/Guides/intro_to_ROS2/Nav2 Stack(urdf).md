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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5IKKCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYS4BBHdC6KRSv1g43Z%2BywmeSnrdwmsJr0J1kwVb4VLAiEA9c2CuEVojW1ueIA%2FBULVtOwC7WlEsbYE2426Fx4%2FDlYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGW3mU4%2BjQQKncOLfyrcA091kNjrvls0Yr%2BSut6nFVZ0THm3nfMNPOn7HfLKG7qQ6Cb3YvQuiYAOkCfFkRI4LvOzSQLq%2BYPrbNlnil3v2H8P%2FD2HHyYq4dnEQST75oFmWkHlWqEPMLXBdzMrCJ1htfE5w5v2NKx6X9K%2FG5O9tVg5jXjQe8xifKbbTL15nnOhKVqrSZ0hYeOlmt1gyvgZoXrYRrRVhvudjAFut2iY6tBNYU0laLAXH%2FiZhvZ1QP4u%2FH3bIf3eSZjxDR%2BUye%2BYggrMXI%2FfFhYoUlBFUc9a96JwJiQRo2TE80oil%2B%2BbSiEEjvmE7Lvr9k1UWhOWXaruQbMZzKHM9MODsk6o1XqqNele1QYgukdOFlR1Z9hm8T2rvh0hDxqXB6WeOA5TFHXX99U%2FjXhbHV46A%2FHFmwOAhqd%2BCUU3FoPe2CreXgksdFjE2rUTk7Tsw3HG2H4G%2FLHaM2cvmehchWrTfjfLVyuHG97rrv3%2B8Vwm6hJyvourmIzo4mhM8QbdnMkTMvALLylM7306IJkv5J4ASSQSWAYOSscrNOwN4y7DDkVI87SQ7oRUcK46Gg2uP2k8l%2FfV4SpQVxpv%2FMgDye08c0ES1bYZHFfuV3EQuqwUYR%2B3Qqlx33SZjXssP65dTjBAeWvjMO%2Br8cAGOqUBoTSlRfjxH06Vl1bbiW7qzhtXLIuSsJ5niJT4leYvhJijYW1gn6v21MDJtpJ%2B0R3edq4qyThQNa6Six0FMnPetPJ146EsViCyx43PyFDBamBCUefpt9FlNS8WWSHBKmTMR4cX416BwqQ%2B%2BnlYW%2FXDLb%2B2WTt32l%2F819bYjek9%2FzApJtVaEnOaAdAAqvBbmAY%2FI6HCg23OR1NJAyGcqkCDqj91YQCl&X-Amz-Signature=b39b168d5fc157e0850806d52dffd297ec08b1525efd0f54163c4048528b7a15&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5IKKCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYS4BBHdC6KRSv1g43Z%2BywmeSnrdwmsJr0J1kwVb4VLAiEA9c2CuEVojW1ueIA%2FBULVtOwC7WlEsbYE2426Fx4%2FDlYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGW3mU4%2BjQQKncOLfyrcA091kNjrvls0Yr%2BSut6nFVZ0THm3nfMNPOn7HfLKG7qQ6Cb3YvQuiYAOkCfFkRI4LvOzSQLq%2BYPrbNlnil3v2H8P%2FD2HHyYq4dnEQST75oFmWkHlWqEPMLXBdzMrCJ1htfE5w5v2NKx6X9K%2FG5O9tVg5jXjQe8xifKbbTL15nnOhKVqrSZ0hYeOlmt1gyvgZoXrYRrRVhvudjAFut2iY6tBNYU0laLAXH%2FiZhvZ1QP4u%2FH3bIf3eSZjxDR%2BUye%2BYggrMXI%2FfFhYoUlBFUc9a96JwJiQRo2TE80oil%2B%2BbSiEEjvmE7Lvr9k1UWhOWXaruQbMZzKHM9MODsk6o1XqqNele1QYgukdOFlR1Z9hm8T2rvh0hDxqXB6WeOA5TFHXX99U%2FjXhbHV46A%2FHFmwOAhqd%2BCUU3FoPe2CreXgksdFjE2rUTk7Tsw3HG2H4G%2FLHaM2cvmehchWrTfjfLVyuHG97rrv3%2B8Vwm6hJyvourmIzo4mhM8QbdnMkTMvALLylM7306IJkv5J4ASSQSWAYOSscrNOwN4y7DDkVI87SQ7oRUcK46Gg2uP2k8l%2FfV4SpQVxpv%2FMgDye08c0ES1bYZHFfuV3EQuqwUYR%2B3Qqlx33SZjXssP65dTjBAeWvjMO%2Br8cAGOqUBoTSlRfjxH06Vl1bbiW7qzhtXLIuSsJ5niJT4leYvhJijYW1gn6v21MDJtpJ%2B0R3edq4qyThQNa6Six0FMnPetPJ146EsViCyx43PyFDBamBCUefpt9FlNS8WWSHBKmTMR4cX416BwqQ%2B%2BnlYW%2FXDLb%2B2WTt32l%2F819bYjek9%2FzApJtVaEnOaAdAAqvBbmAY%2FI6HCg23OR1NJAyGcqkCDqj91YQCl&X-Amz-Signature=7924487f035179a461318a0a330c1451411d7b578f5b7d51c502d493de39c49c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5IKKCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYS4BBHdC6KRSv1g43Z%2BywmeSnrdwmsJr0J1kwVb4VLAiEA9c2CuEVojW1ueIA%2FBULVtOwC7WlEsbYE2426Fx4%2FDlYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGW3mU4%2BjQQKncOLfyrcA091kNjrvls0Yr%2BSut6nFVZ0THm3nfMNPOn7HfLKG7qQ6Cb3YvQuiYAOkCfFkRI4LvOzSQLq%2BYPrbNlnil3v2H8P%2FD2HHyYq4dnEQST75oFmWkHlWqEPMLXBdzMrCJ1htfE5w5v2NKx6X9K%2FG5O9tVg5jXjQe8xifKbbTL15nnOhKVqrSZ0hYeOlmt1gyvgZoXrYRrRVhvudjAFut2iY6tBNYU0laLAXH%2FiZhvZ1QP4u%2FH3bIf3eSZjxDR%2BUye%2BYggrMXI%2FfFhYoUlBFUc9a96JwJiQRo2TE80oil%2B%2BbSiEEjvmE7Lvr9k1UWhOWXaruQbMZzKHM9MODsk6o1XqqNele1QYgukdOFlR1Z9hm8T2rvh0hDxqXB6WeOA5TFHXX99U%2FjXhbHV46A%2FHFmwOAhqd%2BCUU3FoPe2CreXgksdFjE2rUTk7Tsw3HG2H4G%2FLHaM2cvmehchWrTfjfLVyuHG97rrv3%2B8Vwm6hJyvourmIzo4mhM8QbdnMkTMvALLylM7306IJkv5J4ASSQSWAYOSscrNOwN4y7DDkVI87SQ7oRUcK46Gg2uP2k8l%2FfV4SpQVxpv%2FMgDye08c0ES1bYZHFfuV3EQuqwUYR%2B3Qqlx33SZjXssP65dTjBAeWvjMO%2Br8cAGOqUBoTSlRfjxH06Vl1bbiW7qzhtXLIuSsJ5niJT4leYvhJijYW1gn6v21MDJtpJ%2B0R3edq4qyThQNa6Six0FMnPetPJ146EsViCyx43PyFDBamBCUefpt9FlNS8WWSHBKmTMR4cX416BwqQ%2B%2BnlYW%2FXDLb%2B2WTt32l%2F819bYjek9%2FzApJtVaEnOaAdAAqvBbmAY%2FI6HCg23OR1NJAyGcqkCDqj91YQCl&X-Amz-Signature=950093f4f2e2837da3b61372ffad3b6470928e1c95321570a004ee1f94719839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5IKKCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYS4BBHdC6KRSv1g43Z%2BywmeSnrdwmsJr0J1kwVb4VLAiEA9c2CuEVojW1ueIA%2FBULVtOwC7WlEsbYE2426Fx4%2FDlYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGW3mU4%2BjQQKncOLfyrcA091kNjrvls0Yr%2BSut6nFVZ0THm3nfMNPOn7HfLKG7qQ6Cb3YvQuiYAOkCfFkRI4LvOzSQLq%2BYPrbNlnil3v2H8P%2FD2HHyYq4dnEQST75oFmWkHlWqEPMLXBdzMrCJ1htfE5w5v2NKx6X9K%2FG5O9tVg5jXjQe8xifKbbTL15nnOhKVqrSZ0hYeOlmt1gyvgZoXrYRrRVhvudjAFut2iY6tBNYU0laLAXH%2FiZhvZ1QP4u%2FH3bIf3eSZjxDR%2BUye%2BYggrMXI%2FfFhYoUlBFUc9a96JwJiQRo2TE80oil%2B%2BbSiEEjvmE7Lvr9k1UWhOWXaruQbMZzKHM9MODsk6o1XqqNele1QYgukdOFlR1Z9hm8T2rvh0hDxqXB6WeOA5TFHXX99U%2FjXhbHV46A%2FHFmwOAhqd%2BCUU3FoPe2CreXgksdFjE2rUTk7Tsw3HG2H4G%2FLHaM2cvmehchWrTfjfLVyuHG97rrv3%2B8Vwm6hJyvourmIzo4mhM8QbdnMkTMvALLylM7306IJkv5J4ASSQSWAYOSscrNOwN4y7DDkVI87SQ7oRUcK46Gg2uP2k8l%2FfV4SpQVxpv%2FMgDye08c0ES1bYZHFfuV3EQuqwUYR%2B3Qqlx33SZjXssP65dTjBAeWvjMO%2Br8cAGOqUBoTSlRfjxH06Vl1bbiW7qzhtXLIuSsJ5niJT4leYvhJijYW1gn6v21MDJtpJ%2B0R3edq4qyThQNa6Six0FMnPetPJ146EsViCyx43PyFDBamBCUefpt9FlNS8WWSHBKmTMR4cX416BwqQ%2B%2BnlYW%2FXDLb%2B2WTt32l%2F819bYjek9%2FzApJtVaEnOaAdAAqvBbmAY%2FI6HCg23OR1NJAyGcqkCDqj91YQCl&X-Amz-Signature=9dda29f9755b71f2f50d9a2fdeb406714e3e16533f9c76e5c0cc352add3abac1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5IKKCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYS4BBHdC6KRSv1g43Z%2BywmeSnrdwmsJr0J1kwVb4VLAiEA9c2CuEVojW1ueIA%2FBULVtOwC7WlEsbYE2426Fx4%2FDlYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGW3mU4%2BjQQKncOLfyrcA091kNjrvls0Yr%2BSut6nFVZ0THm3nfMNPOn7HfLKG7qQ6Cb3YvQuiYAOkCfFkRI4LvOzSQLq%2BYPrbNlnil3v2H8P%2FD2HHyYq4dnEQST75oFmWkHlWqEPMLXBdzMrCJ1htfE5w5v2NKx6X9K%2FG5O9tVg5jXjQe8xifKbbTL15nnOhKVqrSZ0hYeOlmt1gyvgZoXrYRrRVhvudjAFut2iY6tBNYU0laLAXH%2FiZhvZ1QP4u%2FH3bIf3eSZjxDR%2BUye%2BYggrMXI%2FfFhYoUlBFUc9a96JwJiQRo2TE80oil%2B%2BbSiEEjvmE7Lvr9k1UWhOWXaruQbMZzKHM9MODsk6o1XqqNele1QYgukdOFlR1Z9hm8T2rvh0hDxqXB6WeOA5TFHXX99U%2FjXhbHV46A%2FHFmwOAhqd%2BCUU3FoPe2CreXgksdFjE2rUTk7Tsw3HG2H4G%2FLHaM2cvmehchWrTfjfLVyuHG97rrv3%2B8Vwm6hJyvourmIzo4mhM8QbdnMkTMvALLylM7306IJkv5J4ASSQSWAYOSscrNOwN4y7DDkVI87SQ7oRUcK46Gg2uP2k8l%2FfV4SpQVxpv%2FMgDye08c0ES1bYZHFfuV3EQuqwUYR%2B3Qqlx33SZjXssP65dTjBAeWvjMO%2Br8cAGOqUBoTSlRfjxH06Vl1bbiW7qzhtXLIuSsJ5niJT4leYvhJijYW1gn6v21MDJtpJ%2B0R3edq4qyThQNa6Six0FMnPetPJ146EsViCyx43PyFDBamBCUefpt9FlNS8WWSHBKmTMR4cX416BwqQ%2B%2BnlYW%2FXDLb%2B2WTt32l%2F819bYjek9%2FzApJtVaEnOaAdAAqvBbmAY%2FI6HCg23OR1NJAyGcqkCDqj91YQCl&X-Amz-Signature=847d333dca4febc0229b0bb27dafa08bd9bc0f7de05a97e164c8f9cdae327cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5IKKCP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYS4BBHdC6KRSv1g43Z%2BywmeSnrdwmsJr0J1kwVb4VLAiEA9c2CuEVojW1ueIA%2FBULVtOwC7WlEsbYE2426Fx4%2FDlYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGW3mU4%2BjQQKncOLfyrcA091kNjrvls0Yr%2BSut6nFVZ0THm3nfMNPOn7HfLKG7qQ6Cb3YvQuiYAOkCfFkRI4LvOzSQLq%2BYPrbNlnil3v2H8P%2FD2HHyYq4dnEQST75oFmWkHlWqEPMLXBdzMrCJ1htfE5w5v2NKx6X9K%2FG5O9tVg5jXjQe8xifKbbTL15nnOhKVqrSZ0hYeOlmt1gyvgZoXrYRrRVhvudjAFut2iY6tBNYU0laLAXH%2FiZhvZ1QP4u%2FH3bIf3eSZjxDR%2BUye%2BYggrMXI%2FfFhYoUlBFUc9a96JwJiQRo2TE80oil%2B%2BbSiEEjvmE7Lvr9k1UWhOWXaruQbMZzKHM9MODsk6o1XqqNele1QYgukdOFlR1Z9hm8T2rvh0hDxqXB6WeOA5TFHXX99U%2FjXhbHV46A%2FHFmwOAhqd%2BCUU3FoPe2CreXgksdFjE2rUTk7Tsw3HG2H4G%2FLHaM2cvmehchWrTfjfLVyuHG97rrv3%2B8Vwm6hJyvourmIzo4mhM8QbdnMkTMvALLylM7306IJkv5J4ASSQSWAYOSscrNOwN4y7DDkVI87SQ7oRUcK46Gg2uP2k8l%2FfV4SpQVxpv%2FMgDye08c0ES1bYZHFfuV3EQuqwUYR%2B3Qqlx33SZjXssP65dTjBAeWvjMO%2Br8cAGOqUBoTSlRfjxH06Vl1bbiW7qzhtXLIuSsJ5niJT4leYvhJijYW1gn6v21MDJtpJ%2B0R3edq4qyThQNa6Six0FMnPetPJ146EsViCyx43PyFDBamBCUefpt9FlNS8WWSHBKmTMR4cX416BwqQ%2B%2BnlYW%2FXDLb%2B2WTt32l%2F819bYjek9%2FzApJtVaEnOaAdAAqvBbmAY%2FI6HCg23OR1NJAyGcqkCDqj91YQCl&X-Amz-Signature=1e6a7cb32eacb8c86b1a26c8b681315e70624cc1f946d505a354cad614903bd2&X-Amz-SignedHeaders=host&x-id=GetObject)
