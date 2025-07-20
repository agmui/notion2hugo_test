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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRK4KK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fd%2F1CRM%2BiR0MccYtnNzLpXiQh9zjmZq%2BXWa%2FSvNXKvAiBNLhsi347uLswxf5AWrRYGAi7qeCneQy7bmAMp6rbdGyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgLUxZ87Oad3mCqQKtwDB0oGUCPaJP7%2Bn0gmycooKy2b2IOUJpYDEKULJEQJcWZfNgGxag0TM0E9i0%2BhdRxEyjl%2FPCl4oU07gkp%2Bj0y4xswblwtjYEvi4O3ARYKu2rR433VGvKRTkaxi4XSGMr1eZUGRnE3L8myhLr5C9itBsD0qBTNwuzN9RqVvXGb3hktYXMOMehs6qHL0o5mUfrRjjJMPjaKbtSdp372%2F7UNQ4%2BPjiDjqmjRMcZy1oVWNSC7hEDaoRdgfGJLPZMYOLHMWmLNYh6KW8wklgej67krpp41G7FTr%2BWJu%2FLYRD4Jm0UgrKyJ1BMpPtzyK6KaW7POrryzVt2PavMpeKkoums2wBfPHKnWHBfd22xHbt2Bh6fNOLjK3aBYsw3f0EeG2ipmgW2JYkzjTwGgapfRGO1OrG%2FcKs08yQWgM%2Fweh0nLiKWQ4MqHbgSiozVEQFz%2Fla3x7U6t0ycHNxU88s5RmjI%2B%2FsPmcVmGZOOtJmhTumgMfmc0n5F%2FxBkzoepKlArAgwy815fkFl%2Blv8oyALgJtSJuKRKdAy0%2Fll4VW90Sa%2BLaSQrMHx7QSa4vCEQD0fS84H9uH5rNxJtc8JJmdq300gChBgqqPkyPTzOvNAixCN5lg4vAx%2FPUMtkG5jZj0e4Qwnf%2F0wwY6pgGBTf7w9jrdaSzzVwC8h%2FRMlJ6RpLDRq2yMgtIf2PpUFLaHKVTV8%2Fx%2FW1k%2FRJ%2F8mpmDrVDXoJw9HCfOBphm2jR1vMjvNMLcirgIXkvHz6UVX6AUz%2F7sUKhUAJ9FjHQtfXOQN4pNfsX%2F7l6PBVnGNpo2ynENVfIM4Tcqzv8sjS3xyRzZWNIIHMarEdjGBhp5vxrTxNcvf6WW6ChaDrl22P9%2BHK2Ey6pX&X-Amz-Signature=7fe8c5fa41358e0a1131a7357b7f1599a0130c4138b0b24a12ca5f4863c45b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRK4KK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fd%2F1CRM%2BiR0MccYtnNzLpXiQh9zjmZq%2BXWa%2FSvNXKvAiBNLhsi347uLswxf5AWrRYGAi7qeCneQy7bmAMp6rbdGyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgLUxZ87Oad3mCqQKtwDB0oGUCPaJP7%2Bn0gmycooKy2b2IOUJpYDEKULJEQJcWZfNgGxag0TM0E9i0%2BhdRxEyjl%2FPCl4oU07gkp%2Bj0y4xswblwtjYEvi4O3ARYKu2rR433VGvKRTkaxi4XSGMr1eZUGRnE3L8myhLr5C9itBsD0qBTNwuzN9RqVvXGb3hktYXMOMehs6qHL0o5mUfrRjjJMPjaKbtSdp372%2F7UNQ4%2BPjiDjqmjRMcZy1oVWNSC7hEDaoRdgfGJLPZMYOLHMWmLNYh6KW8wklgej67krpp41G7FTr%2BWJu%2FLYRD4Jm0UgrKyJ1BMpPtzyK6KaW7POrryzVt2PavMpeKkoums2wBfPHKnWHBfd22xHbt2Bh6fNOLjK3aBYsw3f0EeG2ipmgW2JYkzjTwGgapfRGO1OrG%2FcKs08yQWgM%2Fweh0nLiKWQ4MqHbgSiozVEQFz%2Fla3x7U6t0ycHNxU88s5RmjI%2B%2FsPmcVmGZOOtJmhTumgMfmc0n5F%2FxBkzoepKlArAgwy815fkFl%2Blv8oyALgJtSJuKRKdAy0%2Fll4VW90Sa%2BLaSQrMHx7QSa4vCEQD0fS84H9uH5rNxJtc8JJmdq300gChBgqqPkyPTzOvNAixCN5lg4vAx%2FPUMtkG5jZj0e4Qwnf%2F0wwY6pgGBTf7w9jrdaSzzVwC8h%2FRMlJ6RpLDRq2yMgtIf2PpUFLaHKVTV8%2Fx%2FW1k%2FRJ%2F8mpmDrVDXoJw9HCfOBphm2jR1vMjvNMLcirgIXkvHz6UVX6AUz%2F7sUKhUAJ9FjHQtfXOQN4pNfsX%2F7l6PBVnGNpo2ynENVfIM4Tcqzv8sjS3xyRzZWNIIHMarEdjGBhp5vxrTxNcvf6WW6ChaDrl22P9%2BHK2Ey6pX&X-Amz-Signature=8c8d8c10ea0628c79b937110dafee71a061dcdd7e2cc17eef5347789a1b38e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRK4KK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fd%2F1CRM%2BiR0MccYtnNzLpXiQh9zjmZq%2BXWa%2FSvNXKvAiBNLhsi347uLswxf5AWrRYGAi7qeCneQy7bmAMp6rbdGyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgLUxZ87Oad3mCqQKtwDB0oGUCPaJP7%2Bn0gmycooKy2b2IOUJpYDEKULJEQJcWZfNgGxag0TM0E9i0%2BhdRxEyjl%2FPCl4oU07gkp%2Bj0y4xswblwtjYEvi4O3ARYKu2rR433VGvKRTkaxi4XSGMr1eZUGRnE3L8myhLr5C9itBsD0qBTNwuzN9RqVvXGb3hktYXMOMehs6qHL0o5mUfrRjjJMPjaKbtSdp372%2F7UNQ4%2BPjiDjqmjRMcZy1oVWNSC7hEDaoRdgfGJLPZMYOLHMWmLNYh6KW8wklgej67krpp41G7FTr%2BWJu%2FLYRD4Jm0UgrKyJ1BMpPtzyK6KaW7POrryzVt2PavMpeKkoums2wBfPHKnWHBfd22xHbt2Bh6fNOLjK3aBYsw3f0EeG2ipmgW2JYkzjTwGgapfRGO1OrG%2FcKs08yQWgM%2Fweh0nLiKWQ4MqHbgSiozVEQFz%2Fla3x7U6t0ycHNxU88s5RmjI%2B%2FsPmcVmGZOOtJmhTumgMfmc0n5F%2FxBkzoepKlArAgwy815fkFl%2Blv8oyALgJtSJuKRKdAy0%2Fll4VW90Sa%2BLaSQrMHx7QSa4vCEQD0fS84H9uH5rNxJtc8JJmdq300gChBgqqPkyPTzOvNAixCN5lg4vAx%2FPUMtkG5jZj0e4Qwnf%2F0wwY6pgGBTf7w9jrdaSzzVwC8h%2FRMlJ6RpLDRq2yMgtIf2PpUFLaHKVTV8%2Fx%2FW1k%2FRJ%2F8mpmDrVDXoJw9HCfOBphm2jR1vMjvNMLcirgIXkvHz6UVX6AUz%2F7sUKhUAJ9FjHQtfXOQN4pNfsX%2F7l6PBVnGNpo2ynENVfIM4Tcqzv8sjS3xyRzZWNIIHMarEdjGBhp5vxrTxNcvf6WW6ChaDrl22P9%2BHK2Ey6pX&X-Amz-Signature=226e9495c164c45e42b3a269f1a0705bc7fc0f9fc293f05671d07ffdb7300ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRK4KK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fd%2F1CRM%2BiR0MccYtnNzLpXiQh9zjmZq%2BXWa%2FSvNXKvAiBNLhsi347uLswxf5AWrRYGAi7qeCneQy7bmAMp6rbdGyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgLUxZ87Oad3mCqQKtwDB0oGUCPaJP7%2Bn0gmycooKy2b2IOUJpYDEKULJEQJcWZfNgGxag0TM0E9i0%2BhdRxEyjl%2FPCl4oU07gkp%2Bj0y4xswblwtjYEvi4O3ARYKu2rR433VGvKRTkaxi4XSGMr1eZUGRnE3L8myhLr5C9itBsD0qBTNwuzN9RqVvXGb3hktYXMOMehs6qHL0o5mUfrRjjJMPjaKbtSdp372%2F7UNQ4%2BPjiDjqmjRMcZy1oVWNSC7hEDaoRdgfGJLPZMYOLHMWmLNYh6KW8wklgej67krpp41G7FTr%2BWJu%2FLYRD4Jm0UgrKyJ1BMpPtzyK6KaW7POrryzVt2PavMpeKkoums2wBfPHKnWHBfd22xHbt2Bh6fNOLjK3aBYsw3f0EeG2ipmgW2JYkzjTwGgapfRGO1OrG%2FcKs08yQWgM%2Fweh0nLiKWQ4MqHbgSiozVEQFz%2Fla3x7U6t0ycHNxU88s5RmjI%2B%2FsPmcVmGZOOtJmhTumgMfmc0n5F%2FxBkzoepKlArAgwy815fkFl%2Blv8oyALgJtSJuKRKdAy0%2Fll4VW90Sa%2BLaSQrMHx7QSa4vCEQD0fS84H9uH5rNxJtc8JJmdq300gChBgqqPkyPTzOvNAixCN5lg4vAx%2FPUMtkG5jZj0e4Qwnf%2F0wwY6pgGBTf7w9jrdaSzzVwC8h%2FRMlJ6RpLDRq2yMgtIf2PpUFLaHKVTV8%2Fx%2FW1k%2FRJ%2F8mpmDrVDXoJw9HCfOBphm2jR1vMjvNMLcirgIXkvHz6UVX6AUz%2F7sUKhUAJ9FjHQtfXOQN4pNfsX%2F7l6PBVnGNpo2ynENVfIM4Tcqzv8sjS3xyRzZWNIIHMarEdjGBhp5vxrTxNcvf6WW6ChaDrl22P9%2BHK2Ey6pX&X-Amz-Signature=a42d0a46b2da9f3cd2949a563285aa77fce2522f17361fed7b6d643b1482b3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRK4KK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fd%2F1CRM%2BiR0MccYtnNzLpXiQh9zjmZq%2BXWa%2FSvNXKvAiBNLhsi347uLswxf5AWrRYGAi7qeCneQy7bmAMp6rbdGyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgLUxZ87Oad3mCqQKtwDB0oGUCPaJP7%2Bn0gmycooKy2b2IOUJpYDEKULJEQJcWZfNgGxag0TM0E9i0%2BhdRxEyjl%2FPCl4oU07gkp%2Bj0y4xswblwtjYEvi4O3ARYKu2rR433VGvKRTkaxi4XSGMr1eZUGRnE3L8myhLr5C9itBsD0qBTNwuzN9RqVvXGb3hktYXMOMehs6qHL0o5mUfrRjjJMPjaKbtSdp372%2F7UNQ4%2BPjiDjqmjRMcZy1oVWNSC7hEDaoRdgfGJLPZMYOLHMWmLNYh6KW8wklgej67krpp41G7FTr%2BWJu%2FLYRD4Jm0UgrKyJ1BMpPtzyK6KaW7POrryzVt2PavMpeKkoums2wBfPHKnWHBfd22xHbt2Bh6fNOLjK3aBYsw3f0EeG2ipmgW2JYkzjTwGgapfRGO1OrG%2FcKs08yQWgM%2Fweh0nLiKWQ4MqHbgSiozVEQFz%2Fla3x7U6t0ycHNxU88s5RmjI%2B%2FsPmcVmGZOOtJmhTumgMfmc0n5F%2FxBkzoepKlArAgwy815fkFl%2Blv8oyALgJtSJuKRKdAy0%2Fll4VW90Sa%2BLaSQrMHx7QSa4vCEQD0fS84H9uH5rNxJtc8JJmdq300gChBgqqPkyPTzOvNAixCN5lg4vAx%2FPUMtkG5jZj0e4Qwnf%2F0wwY6pgGBTf7w9jrdaSzzVwC8h%2FRMlJ6RpLDRq2yMgtIf2PpUFLaHKVTV8%2Fx%2FW1k%2FRJ%2F8mpmDrVDXoJw9HCfOBphm2jR1vMjvNMLcirgIXkvHz6UVX6AUz%2F7sUKhUAJ9FjHQtfXOQN4pNfsX%2F7l6PBVnGNpo2ynENVfIM4Tcqzv8sjS3xyRzZWNIIHMarEdjGBhp5vxrTxNcvf6WW6ChaDrl22P9%2BHK2Ey6pX&X-Amz-Signature=508102c56f2e875300d4ef6fcef439b54d30608dca562e1ab78175e424250014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRK4KK5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2Fd%2F1CRM%2BiR0MccYtnNzLpXiQh9zjmZq%2BXWa%2FSvNXKvAiBNLhsi347uLswxf5AWrRYGAi7qeCneQy7bmAMp6rbdGyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FgLUxZ87Oad3mCqQKtwDB0oGUCPaJP7%2Bn0gmycooKy2b2IOUJpYDEKULJEQJcWZfNgGxag0TM0E9i0%2BhdRxEyjl%2FPCl4oU07gkp%2Bj0y4xswblwtjYEvi4O3ARYKu2rR433VGvKRTkaxi4XSGMr1eZUGRnE3L8myhLr5C9itBsD0qBTNwuzN9RqVvXGb3hktYXMOMehs6qHL0o5mUfrRjjJMPjaKbtSdp372%2F7UNQ4%2BPjiDjqmjRMcZy1oVWNSC7hEDaoRdgfGJLPZMYOLHMWmLNYh6KW8wklgej67krpp41G7FTr%2BWJu%2FLYRD4Jm0UgrKyJ1BMpPtzyK6KaW7POrryzVt2PavMpeKkoums2wBfPHKnWHBfd22xHbt2Bh6fNOLjK3aBYsw3f0EeG2ipmgW2JYkzjTwGgapfRGO1OrG%2FcKs08yQWgM%2Fweh0nLiKWQ4MqHbgSiozVEQFz%2Fla3x7U6t0ycHNxU88s5RmjI%2B%2FsPmcVmGZOOtJmhTumgMfmc0n5F%2FxBkzoepKlArAgwy815fkFl%2Blv8oyALgJtSJuKRKdAy0%2Fll4VW90Sa%2BLaSQrMHx7QSa4vCEQD0fS84H9uH5rNxJtc8JJmdq300gChBgqqPkyPTzOvNAixCN5lg4vAx%2FPUMtkG5jZj0e4Qwnf%2F0wwY6pgGBTf7w9jrdaSzzVwC8h%2FRMlJ6RpLDRq2yMgtIf2PpUFLaHKVTV8%2Fx%2FW1k%2FRJ%2F8mpmDrVDXoJw9HCfOBphm2jR1vMjvNMLcirgIXkvHz6UVX6AUz%2F7sUKhUAJ9FjHQtfXOQN4pNfsX%2F7l6PBVnGNpo2ynENVfIM4Tcqzv8sjS3xyRzZWNIIHMarEdjGBhp5vxrTxNcvf6WW6ChaDrl22P9%2BHK2Ey6pX&X-Amz-Signature=b6c3ecd5ef9e51b5df40fe4927deec6a27f29caeef228802c19256f7ca84df3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
