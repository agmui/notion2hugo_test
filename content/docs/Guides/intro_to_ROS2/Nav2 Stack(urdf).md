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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXGZQB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEF9JR1H%2B4MLR17yojdCeW3B9utZUdBpotgF4WE6v%2BKcAiEA1ub4dQn4vyqlEAZqrhUzr6lJJnE81m1UnJwHj%2BUjMJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGjjEP5xmVjhIBq%2BpSrcAyUpKO2qTXrKMPVPDBwIJyzAhx6zA0aVSDT%2FeYgUf7zjNGq8xRxcnidosVhj7KoLY762Cexbt7iHgInBvicaTKfhRXvcfjZcDa04h4lriueftnBkHDnkik0wC6cjjC%2FA0hkIeBE6em7BAXsG9dWcKZ1yN%2BHk0%2BBX42aqTqoyxI9mcwTaQF%2FADcfe02jWGQvXOkATrmi71Qe%2Bb%2Bb583ke1kEdfGR6hs61J5PyQmgd%2BTFBkLT61hUXMpzNzWmE36Tpz%2FS6JSvIzys8Act2x4I2TmBEOAemCQLPq0cDRoaSswYktV26wIBnvAmKLcam4sAyIlvfcLoYcbzs3pOOVYhZTYv1aUWCfLzhdmLu25byhDD54ZvlWfLV6rMKjQ990uZU5BB7AvumCN5Tc6%2BqkfiHybH0Orgxj9BAB4%2B3QczodTTsFS%2F7bV5wcPnmasIj32%2FxwVhfnBTcqLivWaSYEit0%2BxwTJKr4dqN00j1W7CHDYBZxFQ9KJedOoBB7LbMv2xg6%2BBhqSWbGhvB4a%2BKxUZSfZ83jykkEgC5Bhlj%2BbZWj%2F6ciY6WNOJ%2BgqaQf9J41o3TE9GTZXgoVZK%2BTpOArwBcsgDabYLcvkF1VuDb%2Fof9HM6UsWf5ne%2BLYoyWo5tA3MJ%2Fpy70GOqUBtcP0SubROw%2FZOydfBt5TFUmWJ08%2FzjRRqOACaWRhCZsAD5L7i5uKIapq2DDnMWIKWrECORW0s2dBHKdV92BC2a5ZK%2BPJW4KoSxXcG9gmwd0ue8uMlUcSzbJcustSizSUug%2BKMEAwFKG%2F9BEcQrtoXXDnQKF1m7ABG9LxhnpNqj4rVUbd9v6DZDd9Y4F7bQasCVoKDPHZZS63CGtMZo7DYSC%2BpyyL&X-Amz-Signature=523a0aa4328f43248347de9644f4aa62b1850f34400c5a9e2d4b760dc63fb08d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXGZQB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEF9JR1H%2B4MLR17yojdCeW3B9utZUdBpotgF4WE6v%2BKcAiEA1ub4dQn4vyqlEAZqrhUzr6lJJnE81m1UnJwHj%2BUjMJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGjjEP5xmVjhIBq%2BpSrcAyUpKO2qTXrKMPVPDBwIJyzAhx6zA0aVSDT%2FeYgUf7zjNGq8xRxcnidosVhj7KoLY762Cexbt7iHgInBvicaTKfhRXvcfjZcDa04h4lriueftnBkHDnkik0wC6cjjC%2FA0hkIeBE6em7BAXsG9dWcKZ1yN%2BHk0%2BBX42aqTqoyxI9mcwTaQF%2FADcfe02jWGQvXOkATrmi71Qe%2Bb%2Bb583ke1kEdfGR6hs61J5PyQmgd%2BTFBkLT61hUXMpzNzWmE36Tpz%2FS6JSvIzys8Act2x4I2TmBEOAemCQLPq0cDRoaSswYktV26wIBnvAmKLcam4sAyIlvfcLoYcbzs3pOOVYhZTYv1aUWCfLzhdmLu25byhDD54ZvlWfLV6rMKjQ990uZU5BB7AvumCN5Tc6%2BqkfiHybH0Orgxj9BAB4%2B3QczodTTsFS%2F7bV5wcPnmasIj32%2FxwVhfnBTcqLivWaSYEit0%2BxwTJKr4dqN00j1W7CHDYBZxFQ9KJedOoBB7LbMv2xg6%2BBhqSWbGhvB4a%2BKxUZSfZ83jykkEgC5Bhlj%2BbZWj%2F6ciY6WNOJ%2BgqaQf9J41o3TE9GTZXgoVZK%2BTpOArwBcsgDabYLcvkF1VuDb%2Fof9HM6UsWf5ne%2BLYoyWo5tA3MJ%2Fpy70GOqUBtcP0SubROw%2FZOydfBt5TFUmWJ08%2FzjRRqOACaWRhCZsAD5L7i5uKIapq2DDnMWIKWrECORW0s2dBHKdV92BC2a5ZK%2BPJW4KoSxXcG9gmwd0ue8uMlUcSzbJcustSizSUug%2BKMEAwFKG%2F9BEcQrtoXXDnQKF1m7ABG9LxhnpNqj4rVUbd9v6DZDd9Y4F7bQasCVoKDPHZZS63CGtMZo7DYSC%2BpyyL&X-Amz-Signature=ca3a992e97e5fdc0654d660328d2c296c57efcd0cf525cb903853f2fc7ddd933&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXGZQB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEF9JR1H%2B4MLR17yojdCeW3B9utZUdBpotgF4WE6v%2BKcAiEA1ub4dQn4vyqlEAZqrhUzr6lJJnE81m1UnJwHj%2BUjMJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGjjEP5xmVjhIBq%2BpSrcAyUpKO2qTXrKMPVPDBwIJyzAhx6zA0aVSDT%2FeYgUf7zjNGq8xRxcnidosVhj7KoLY762Cexbt7iHgInBvicaTKfhRXvcfjZcDa04h4lriueftnBkHDnkik0wC6cjjC%2FA0hkIeBE6em7BAXsG9dWcKZ1yN%2BHk0%2BBX42aqTqoyxI9mcwTaQF%2FADcfe02jWGQvXOkATrmi71Qe%2Bb%2Bb583ke1kEdfGR6hs61J5PyQmgd%2BTFBkLT61hUXMpzNzWmE36Tpz%2FS6JSvIzys8Act2x4I2TmBEOAemCQLPq0cDRoaSswYktV26wIBnvAmKLcam4sAyIlvfcLoYcbzs3pOOVYhZTYv1aUWCfLzhdmLu25byhDD54ZvlWfLV6rMKjQ990uZU5BB7AvumCN5Tc6%2BqkfiHybH0Orgxj9BAB4%2B3QczodTTsFS%2F7bV5wcPnmasIj32%2FxwVhfnBTcqLivWaSYEit0%2BxwTJKr4dqN00j1W7CHDYBZxFQ9KJedOoBB7LbMv2xg6%2BBhqSWbGhvB4a%2BKxUZSfZ83jykkEgC5Bhlj%2BbZWj%2F6ciY6WNOJ%2BgqaQf9J41o3TE9GTZXgoVZK%2BTpOArwBcsgDabYLcvkF1VuDb%2Fof9HM6UsWf5ne%2BLYoyWo5tA3MJ%2Fpy70GOqUBtcP0SubROw%2FZOydfBt5TFUmWJ08%2FzjRRqOACaWRhCZsAD5L7i5uKIapq2DDnMWIKWrECORW0s2dBHKdV92BC2a5ZK%2BPJW4KoSxXcG9gmwd0ue8uMlUcSzbJcustSizSUug%2BKMEAwFKG%2F9BEcQrtoXXDnQKF1m7ABG9LxhnpNqj4rVUbd9v6DZDd9Y4F7bQasCVoKDPHZZS63CGtMZo7DYSC%2BpyyL&X-Amz-Signature=f066b1be55295fb4bbcb33d2a20cf2d3c2687ab0b57c6e00e38f12e55994672a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXGZQB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEF9JR1H%2B4MLR17yojdCeW3B9utZUdBpotgF4WE6v%2BKcAiEA1ub4dQn4vyqlEAZqrhUzr6lJJnE81m1UnJwHj%2BUjMJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGjjEP5xmVjhIBq%2BpSrcAyUpKO2qTXrKMPVPDBwIJyzAhx6zA0aVSDT%2FeYgUf7zjNGq8xRxcnidosVhj7KoLY762Cexbt7iHgInBvicaTKfhRXvcfjZcDa04h4lriueftnBkHDnkik0wC6cjjC%2FA0hkIeBE6em7BAXsG9dWcKZ1yN%2BHk0%2BBX42aqTqoyxI9mcwTaQF%2FADcfe02jWGQvXOkATrmi71Qe%2Bb%2Bb583ke1kEdfGR6hs61J5PyQmgd%2BTFBkLT61hUXMpzNzWmE36Tpz%2FS6JSvIzys8Act2x4I2TmBEOAemCQLPq0cDRoaSswYktV26wIBnvAmKLcam4sAyIlvfcLoYcbzs3pOOVYhZTYv1aUWCfLzhdmLu25byhDD54ZvlWfLV6rMKjQ990uZU5BB7AvumCN5Tc6%2BqkfiHybH0Orgxj9BAB4%2B3QczodTTsFS%2F7bV5wcPnmasIj32%2FxwVhfnBTcqLivWaSYEit0%2BxwTJKr4dqN00j1W7CHDYBZxFQ9KJedOoBB7LbMv2xg6%2BBhqSWbGhvB4a%2BKxUZSfZ83jykkEgC5Bhlj%2BbZWj%2F6ciY6WNOJ%2BgqaQf9J41o3TE9GTZXgoVZK%2BTpOArwBcsgDabYLcvkF1VuDb%2Fof9HM6UsWf5ne%2BLYoyWo5tA3MJ%2Fpy70GOqUBtcP0SubROw%2FZOydfBt5TFUmWJ08%2FzjRRqOACaWRhCZsAD5L7i5uKIapq2DDnMWIKWrECORW0s2dBHKdV92BC2a5ZK%2BPJW4KoSxXcG9gmwd0ue8uMlUcSzbJcustSizSUug%2BKMEAwFKG%2F9BEcQrtoXXDnQKF1m7ABG9LxhnpNqj4rVUbd9v6DZDd9Y4F7bQasCVoKDPHZZS63CGtMZo7DYSC%2BpyyL&X-Amz-Signature=1514fe5cfde9bc9e7465ee19d6022a2be9b62cd13daf14f745db9e9606b31af9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXGZQB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEF9JR1H%2B4MLR17yojdCeW3B9utZUdBpotgF4WE6v%2BKcAiEA1ub4dQn4vyqlEAZqrhUzr6lJJnE81m1UnJwHj%2BUjMJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGjjEP5xmVjhIBq%2BpSrcAyUpKO2qTXrKMPVPDBwIJyzAhx6zA0aVSDT%2FeYgUf7zjNGq8xRxcnidosVhj7KoLY762Cexbt7iHgInBvicaTKfhRXvcfjZcDa04h4lriueftnBkHDnkik0wC6cjjC%2FA0hkIeBE6em7BAXsG9dWcKZ1yN%2BHk0%2BBX42aqTqoyxI9mcwTaQF%2FADcfe02jWGQvXOkATrmi71Qe%2Bb%2Bb583ke1kEdfGR6hs61J5PyQmgd%2BTFBkLT61hUXMpzNzWmE36Tpz%2FS6JSvIzys8Act2x4I2TmBEOAemCQLPq0cDRoaSswYktV26wIBnvAmKLcam4sAyIlvfcLoYcbzs3pOOVYhZTYv1aUWCfLzhdmLu25byhDD54ZvlWfLV6rMKjQ990uZU5BB7AvumCN5Tc6%2BqkfiHybH0Orgxj9BAB4%2B3QczodTTsFS%2F7bV5wcPnmasIj32%2FxwVhfnBTcqLivWaSYEit0%2BxwTJKr4dqN00j1W7CHDYBZxFQ9KJedOoBB7LbMv2xg6%2BBhqSWbGhvB4a%2BKxUZSfZ83jykkEgC5Bhlj%2BbZWj%2F6ciY6WNOJ%2BgqaQf9J41o3TE9GTZXgoVZK%2BTpOArwBcsgDabYLcvkF1VuDb%2Fof9HM6UsWf5ne%2BLYoyWo5tA3MJ%2Fpy70GOqUBtcP0SubROw%2FZOydfBt5TFUmWJ08%2FzjRRqOACaWRhCZsAD5L7i5uKIapq2DDnMWIKWrECORW0s2dBHKdV92BC2a5ZK%2BPJW4KoSxXcG9gmwd0ue8uMlUcSzbJcustSizSUug%2BKMEAwFKG%2F9BEcQrtoXXDnQKF1m7ABG9LxhnpNqj4rVUbd9v6DZDd9Y4F7bQasCVoKDPHZZS63CGtMZo7DYSC%2BpyyL&X-Amz-Signature=fbc964e746480f705b8b0104a9d7f073525a7a4aa7a9dad0fb32bb078cf166a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUXGZQB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIEF9JR1H%2B4MLR17yojdCeW3B9utZUdBpotgF4WE6v%2BKcAiEA1ub4dQn4vyqlEAZqrhUzr6lJJnE81m1UnJwHj%2BUjMJQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGjjEP5xmVjhIBq%2BpSrcAyUpKO2qTXrKMPVPDBwIJyzAhx6zA0aVSDT%2FeYgUf7zjNGq8xRxcnidosVhj7KoLY762Cexbt7iHgInBvicaTKfhRXvcfjZcDa04h4lriueftnBkHDnkik0wC6cjjC%2FA0hkIeBE6em7BAXsG9dWcKZ1yN%2BHk0%2BBX42aqTqoyxI9mcwTaQF%2FADcfe02jWGQvXOkATrmi71Qe%2Bb%2Bb583ke1kEdfGR6hs61J5PyQmgd%2BTFBkLT61hUXMpzNzWmE36Tpz%2FS6JSvIzys8Act2x4I2TmBEOAemCQLPq0cDRoaSswYktV26wIBnvAmKLcam4sAyIlvfcLoYcbzs3pOOVYhZTYv1aUWCfLzhdmLu25byhDD54ZvlWfLV6rMKjQ990uZU5BB7AvumCN5Tc6%2BqkfiHybH0Orgxj9BAB4%2B3QczodTTsFS%2F7bV5wcPnmasIj32%2FxwVhfnBTcqLivWaSYEit0%2BxwTJKr4dqN00j1W7CHDYBZxFQ9KJedOoBB7LbMv2xg6%2BBhqSWbGhvB4a%2BKxUZSfZ83jykkEgC5Bhlj%2BbZWj%2F6ciY6WNOJ%2BgqaQf9J41o3TE9GTZXgoVZK%2BTpOArwBcsgDabYLcvkF1VuDb%2Fof9HM6UsWf5ne%2BLYoyWo5tA3MJ%2Fpy70GOqUBtcP0SubROw%2FZOydfBt5TFUmWJ08%2FzjRRqOACaWRhCZsAD5L7i5uKIapq2DDnMWIKWrECORW0s2dBHKdV92BC2a5ZK%2BPJW4KoSxXcG9gmwd0ue8uMlUcSzbJcustSizSUug%2BKMEAwFKG%2F9BEcQrtoXXDnQKF1m7ABG9LxhnpNqj4rVUbd9v6DZDd9Y4F7bQasCVoKDPHZZS63CGtMZo7DYSC%2BpyyL&X-Amz-Signature=a200b5beb792f3eef04a2f665fe49bc4535f4c3b205723c35f0d2759855150e3&X-Amz-SignedHeaders=host&x-id=GetObject)
