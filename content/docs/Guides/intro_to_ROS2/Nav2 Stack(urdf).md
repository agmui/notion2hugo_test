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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VMWYUZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY3JT4u3%2FgSoKv4vvCpAMGSyoWsOf89SKmp4usWdgM7AiEAwHViLcd2sl4vJw6XwOSvTwQ4aP0g%2FNw%2B92X2Wl9xkwEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9UT4sQ3TYriAqXnCrcA6MTA61YcomJrN0Y%2B51SFYquvd%2FfZBmNz8%2Fo%2BEq2Qnmf1LssKav7KJAsi7tzruToSBIxslZFscAf%2B6Rpi2zW8hEHoXpRTzyVh4zBf1Ub267dDqugmO2zbWnVKPHGsMj6tR8G50u19WGyRlBha%2FEIkTdDEoPlyGOC9slO44tqrfo7%2FXCJW6CZrTA%2Fa%2BlYXP9UlLArwkHBt7jNCb7nFInU6DqRE9t2U4sjUyapk2E1dbNOdyNVp%2BV4xIxk%2FwqlHWD%2BuBUqzgyuD1mtULdXT92QMvBiMx9YmBSbXLKXj8bszAel1Ao%2BgMYcPgNHmakQUH4igm%2B0N%2FDCqOPvl5ARBx1iFPieV4dQXgkH0TrDMR07rC%2BKuczrIof5Qnjm9E45X9WlUwKAEwxoryOEKRuCqSXw0pXIDbz7FfHH12T2G%2Fr8XnNO%2BSm3TVXl3bgA4FRepElylRPDsg5lcFlpxjSZ678EAOgGz0rnx3zdPRzY%2Fql5v1B52gEdlpggV2gchsCj8VRmfwjYdk0ZC6grp5ZMWEvjnh%2F9nq%2B%2F5VFmW%2BAxJsMh0TxJ9i58sx0rpZ2u8BzYL1FFgkSxgpFChsdZsWWV6tYSHJkF6I%2BQW%2BzMWHtRA0FekJ0BopQIkEe6LC9GPuASMJS%2FjsMGOqUB1fmYmB3oli3%2FjnduB%2BpIJQ7xp2WeQn0K5nu2lse2v0iC%2FVJzK3GpSCDrzj8drTTbzAq9Li5UrmIQ1sgCBrrKaOlKBZXYdrHja1Sgry2jFeQsInBJ%2BOrQcdLwARf7s%2B9OhoYWxihzUS3szPPbUwrCqr2pRv58T3Ybn3lvRDORdp20EjVsfn7LLKVWeplTzLmeokxQihGspzST6Q0y9jbmBbWQW0ai&X-Amz-Signature=45508e7d24f60a9ccc451817be39f68985b3c555fc7fd371bba0def2d80e593d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VMWYUZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY3JT4u3%2FgSoKv4vvCpAMGSyoWsOf89SKmp4usWdgM7AiEAwHViLcd2sl4vJw6XwOSvTwQ4aP0g%2FNw%2B92X2Wl9xkwEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9UT4sQ3TYriAqXnCrcA6MTA61YcomJrN0Y%2B51SFYquvd%2FfZBmNz8%2Fo%2BEq2Qnmf1LssKav7KJAsi7tzruToSBIxslZFscAf%2B6Rpi2zW8hEHoXpRTzyVh4zBf1Ub267dDqugmO2zbWnVKPHGsMj6tR8G50u19WGyRlBha%2FEIkTdDEoPlyGOC9slO44tqrfo7%2FXCJW6CZrTA%2Fa%2BlYXP9UlLArwkHBt7jNCb7nFInU6DqRE9t2U4sjUyapk2E1dbNOdyNVp%2BV4xIxk%2FwqlHWD%2BuBUqzgyuD1mtULdXT92QMvBiMx9YmBSbXLKXj8bszAel1Ao%2BgMYcPgNHmakQUH4igm%2B0N%2FDCqOPvl5ARBx1iFPieV4dQXgkH0TrDMR07rC%2BKuczrIof5Qnjm9E45X9WlUwKAEwxoryOEKRuCqSXw0pXIDbz7FfHH12T2G%2Fr8XnNO%2BSm3TVXl3bgA4FRepElylRPDsg5lcFlpxjSZ678EAOgGz0rnx3zdPRzY%2Fql5v1B52gEdlpggV2gchsCj8VRmfwjYdk0ZC6grp5ZMWEvjnh%2F9nq%2B%2F5VFmW%2BAxJsMh0TxJ9i58sx0rpZ2u8BzYL1FFgkSxgpFChsdZsWWV6tYSHJkF6I%2BQW%2BzMWHtRA0FekJ0BopQIkEe6LC9GPuASMJS%2FjsMGOqUB1fmYmB3oli3%2FjnduB%2BpIJQ7xp2WeQn0K5nu2lse2v0iC%2FVJzK3GpSCDrzj8drTTbzAq9Li5UrmIQ1sgCBrrKaOlKBZXYdrHja1Sgry2jFeQsInBJ%2BOrQcdLwARf7s%2B9OhoYWxihzUS3szPPbUwrCqr2pRv58T3Ybn3lvRDORdp20EjVsfn7LLKVWeplTzLmeokxQihGspzST6Q0y9jbmBbWQW0ai&X-Amz-Signature=2aca55d334532e90e5eea87dba943b4d492e12f1174b1d95980efef8f388d9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VMWYUZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY3JT4u3%2FgSoKv4vvCpAMGSyoWsOf89SKmp4usWdgM7AiEAwHViLcd2sl4vJw6XwOSvTwQ4aP0g%2FNw%2B92X2Wl9xkwEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9UT4sQ3TYriAqXnCrcA6MTA61YcomJrN0Y%2B51SFYquvd%2FfZBmNz8%2Fo%2BEq2Qnmf1LssKav7KJAsi7tzruToSBIxslZFscAf%2B6Rpi2zW8hEHoXpRTzyVh4zBf1Ub267dDqugmO2zbWnVKPHGsMj6tR8G50u19WGyRlBha%2FEIkTdDEoPlyGOC9slO44tqrfo7%2FXCJW6CZrTA%2Fa%2BlYXP9UlLArwkHBt7jNCb7nFInU6DqRE9t2U4sjUyapk2E1dbNOdyNVp%2BV4xIxk%2FwqlHWD%2BuBUqzgyuD1mtULdXT92QMvBiMx9YmBSbXLKXj8bszAel1Ao%2BgMYcPgNHmakQUH4igm%2B0N%2FDCqOPvl5ARBx1iFPieV4dQXgkH0TrDMR07rC%2BKuczrIof5Qnjm9E45X9WlUwKAEwxoryOEKRuCqSXw0pXIDbz7FfHH12T2G%2Fr8XnNO%2BSm3TVXl3bgA4FRepElylRPDsg5lcFlpxjSZ678EAOgGz0rnx3zdPRzY%2Fql5v1B52gEdlpggV2gchsCj8VRmfwjYdk0ZC6grp5ZMWEvjnh%2F9nq%2B%2F5VFmW%2BAxJsMh0TxJ9i58sx0rpZ2u8BzYL1FFgkSxgpFChsdZsWWV6tYSHJkF6I%2BQW%2BzMWHtRA0FekJ0BopQIkEe6LC9GPuASMJS%2FjsMGOqUB1fmYmB3oli3%2FjnduB%2BpIJQ7xp2WeQn0K5nu2lse2v0iC%2FVJzK3GpSCDrzj8drTTbzAq9Li5UrmIQ1sgCBrrKaOlKBZXYdrHja1Sgry2jFeQsInBJ%2BOrQcdLwARf7s%2B9OhoYWxihzUS3szPPbUwrCqr2pRv58T3Ybn3lvRDORdp20EjVsfn7LLKVWeplTzLmeokxQihGspzST6Q0y9jbmBbWQW0ai&X-Amz-Signature=6c6a2d73232842247fa9462a2abe8d1882687fc489e003b62223a29f8cc2de16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VMWYUZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY3JT4u3%2FgSoKv4vvCpAMGSyoWsOf89SKmp4usWdgM7AiEAwHViLcd2sl4vJw6XwOSvTwQ4aP0g%2FNw%2B92X2Wl9xkwEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9UT4sQ3TYriAqXnCrcA6MTA61YcomJrN0Y%2B51SFYquvd%2FfZBmNz8%2Fo%2BEq2Qnmf1LssKav7KJAsi7tzruToSBIxslZFscAf%2B6Rpi2zW8hEHoXpRTzyVh4zBf1Ub267dDqugmO2zbWnVKPHGsMj6tR8G50u19WGyRlBha%2FEIkTdDEoPlyGOC9slO44tqrfo7%2FXCJW6CZrTA%2Fa%2BlYXP9UlLArwkHBt7jNCb7nFInU6DqRE9t2U4sjUyapk2E1dbNOdyNVp%2BV4xIxk%2FwqlHWD%2BuBUqzgyuD1mtULdXT92QMvBiMx9YmBSbXLKXj8bszAel1Ao%2BgMYcPgNHmakQUH4igm%2B0N%2FDCqOPvl5ARBx1iFPieV4dQXgkH0TrDMR07rC%2BKuczrIof5Qnjm9E45X9WlUwKAEwxoryOEKRuCqSXw0pXIDbz7FfHH12T2G%2Fr8XnNO%2BSm3TVXl3bgA4FRepElylRPDsg5lcFlpxjSZ678EAOgGz0rnx3zdPRzY%2Fql5v1B52gEdlpggV2gchsCj8VRmfwjYdk0ZC6grp5ZMWEvjnh%2F9nq%2B%2F5VFmW%2BAxJsMh0TxJ9i58sx0rpZ2u8BzYL1FFgkSxgpFChsdZsWWV6tYSHJkF6I%2BQW%2BzMWHtRA0FekJ0BopQIkEe6LC9GPuASMJS%2FjsMGOqUB1fmYmB3oli3%2FjnduB%2BpIJQ7xp2WeQn0K5nu2lse2v0iC%2FVJzK3GpSCDrzj8drTTbzAq9Li5UrmIQ1sgCBrrKaOlKBZXYdrHja1Sgry2jFeQsInBJ%2BOrQcdLwARf7s%2B9OhoYWxihzUS3szPPbUwrCqr2pRv58T3Ybn3lvRDORdp20EjVsfn7LLKVWeplTzLmeokxQihGspzST6Q0y9jbmBbWQW0ai&X-Amz-Signature=d5eaf3857e3d6080e821f3086667487983db829a9f7196b1b6ffce0082a83a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VMWYUZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY3JT4u3%2FgSoKv4vvCpAMGSyoWsOf89SKmp4usWdgM7AiEAwHViLcd2sl4vJw6XwOSvTwQ4aP0g%2FNw%2B92X2Wl9xkwEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9UT4sQ3TYriAqXnCrcA6MTA61YcomJrN0Y%2B51SFYquvd%2FfZBmNz8%2Fo%2BEq2Qnmf1LssKav7KJAsi7tzruToSBIxslZFscAf%2B6Rpi2zW8hEHoXpRTzyVh4zBf1Ub267dDqugmO2zbWnVKPHGsMj6tR8G50u19WGyRlBha%2FEIkTdDEoPlyGOC9slO44tqrfo7%2FXCJW6CZrTA%2Fa%2BlYXP9UlLArwkHBt7jNCb7nFInU6DqRE9t2U4sjUyapk2E1dbNOdyNVp%2BV4xIxk%2FwqlHWD%2BuBUqzgyuD1mtULdXT92QMvBiMx9YmBSbXLKXj8bszAel1Ao%2BgMYcPgNHmakQUH4igm%2B0N%2FDCqOPvl5ARBx1iFPieV4dQXgkH0TrDMR07rC%2BKuczrIof5Qnjm9E45X9WlUwKAEwxoryOEKRuCqSXw0pXIDbz7FfHH12T2G%2Fr8XnNO%2BSm3TVXl3bgA4FRepElylRPDsg5lcFlpxjSZ678EAOgGz0rnx3zdPRzY%2Fql5v1B52gEdlpggV2gchsCj8VRmfwjYdk0ZC6grp5ZMWEvjnh%2F9nq%2B%2F5VFmW%2BAxJsMh0TxJ9i58sx0rpZ2u8BzYL1FFgkSxgpFChsdZsWWV6tYSHJkF6I%2BQW%2BzMWHtRA0FekJ0BopQIkEe6LC9GPuASMJS%2FjsMGOqUB1fmYmB3oli3%2FjnduB%2BpIJQ7xp2WeQn0K5nu2lse2v0iC%2FVJzK3GpSCDrzj8drTTbzAq9Li5UrmIQ1sgCBrrKaOlKBZXYdrHja1Sgry2jFeQsInBJ%2BOrQcdLwARf7s%2B9OhoYWxihzUS3szPPbUwrCqr2pRv58T3Ybn3lvRDORdp20EjVsfn7LLKVWeplTzLmeokxQihGspzST6Q0y9jbmBbWQW0ai&X-Amz-Signature=b9a1032a632741f5d9367ab082a1277aba5be082cf03ca7e5dcfe23fa2403959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VMWYUZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY3JT4u3%2FgSoKv4vvCpAMGSyoWsOf89SKmp4usWdgM7AiEAwHViLcd2sl4vJw6XwOSvTwQ4aP0g%2FNw%2B92X2Wl9xkwEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9UT4sQ3TYriAqXnCrcA6MTA61YcomJrN0Y%2B51SFYquvd%2FfZBmNz8%2Fo%2BEq2Qnmf1LssKav7KJAsi7tzruToSBIxslZFscAf%2B6Rpi2zW8hEHoXpRTzyVh4zBf1Ub267dDqugmO2zbWnVKPHGsMj6tR8G50u19WGyRlBha%2FEIkTdDEoPlyGOC9slO44tqrfo7%2FXCJW6CZrTA%2Fa%2BlYXP9UlLArwkHBt7jNCb7nFInU6DqRE9t2U4sjUyapk2E1dbNOdyNVp%2BV4xIxk%2FwqlHWD%2BuBUqzgyuD1mtULdXT92QMvBiMx9YmBSbXLKXj8bszAel1Ao%2BgMYcPgNHmakQUH4igm%2B0N%2FDCqOPvl5ARBx1iFPieV4dQXgkH0TrDMR07rC%2BKuczrIof5Qnjm9E45X9WlUwKAEwxoryOEKRuCqSXw0pXIDbz7FfHH12T2G%2Fr8XnNO%2BSm3TVXl3bgA4FRepElylRPDsg5lcFlpxjSZ678EAOgGz0rnx3zdPRzY%2Fql5v1B52gEdlpggV2gchsCj8VRmfwjYdk0ZC6grp5ZMWEvjnh%2F9nq%2B%2F5VFmW%2BAxJsMh0TxJ9i58sx0rpZ2u8BzYL1FFgkSxgpFChsdZsWWV6tYSHJkF6I%2BQW%2BzMWHtRA0FekJ0BopQIkEe6LC9GPuASMJS%2FjsMGOqUB1fmYmB3oli3%2FjnduB%2BpIJQ7xp2WeQn0K5nu2lse2v0iC%2FVJzK3GpSCDrzj8drTTbzAq9Li5UrmIQ1sgCBrrKaOlKBZXYdrHja1Sgry2jFeQsInBJ%2BOrQcdLwARf7s%2B9OhoYWxihzUS3szPPbUwrCqr2pRv58T3Ybn3lvRDORdp20EjVsfn7LLKVWeplTzLmeokxQihGspzST6Q0y9jbmBbWQW0ai&X-Amz-Signature=566abc76e1a1e589e31c4b6a059c592cc722e445bfd058e9e1d4ddb471a01451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
