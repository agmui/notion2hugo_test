---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7GQAED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICt8By5MrzKxjlX%2Fp%2BL7gg4vwUgp6KaktAk9Ju1LKrCIAiBJnFV7KHZmhJYfuAy0jSck%2BCETdqu%2BCqGk2Tl8VFwECir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM5WI0EiHx5E0iy1xGKtwD2sG7JpAg9KxdUuiuup0n4w5XC6I7bX0baKNHrnqEpW5sHNFokGsQRa%2BdD%2FEg1Y0SL4l5Zq58fgO3YZxutHxZ0zrOhVg7nYg7kals4p%2BUNsPCyA9pyVjyb%2FGjJtzkJwDloeDL6P9p0UsGGfX9%2FFzWBAdsvAXZPkx9LrmbQkUEsXeJYp5M25H2pJ4C9LF2tUw%2BOro2l4TmRRFgJitkXfGinT2MyzHr2VlXbGaEniJUG8rERx3hMDSQYko7uoLzqDNPbxokJ2JDelm1xmLOCB3JVcql85KAQJGQWoUpbz9B8eR0nRpq4kkTw1jinLhbu1jcUzURh9Jx%2BHu9GMjQmjMbuxV03i1r%2Bz4wolyRDtSvBb5%2FQS60kbNKwwcowyrW9ulkvqwpCz60vcBWVjMH%2Byxv%2FA4AWu1%2BkYadDtM%2BXWeR5p3q2INFDE%2FW4MygSemEaMnpU8YMFbVkp0hTkWj0EAPwNpCtHO4ORp37B%2BxzZ%2Fy6CTopSz1RkJ%2B01eGSyOTIvOnmUUdA5eSmE3BX7dTB6U6dg%2FLOAhCqkr5oPdhfboskBKGdp3fngvUqBCzravlEUMx%2FkxsVmyK6uC86aZylfnLqdRPzw5REgtXLjruVQpxr%2F11hum6PWBPfvQHojtcw%2BdCMvQY6pgFSmrsDAxB43n9v97rRPmcKdh5vhgpYwaIXQqlR1bFJ0L5%2Bj5UIcsYPW8GM4r0%2FOLNoiLyvDFtkMlI8RuPc1LzuQjbpz%2FfZLMnKF0x%2Bo0nyq22%2BbXqhESLEwwWO059f0LbUwGB0H0O7mardkvSslX%2FQad9EHnzexpPZItDJu%2BfXtmnc5Ulot9Ifeowh9WTHJgMXxBAGDpqzS1SJf%2B%2FQP2okXXLilNHG&X-Amz-Signature=9cfb783b80e6ea8e0fd1705bc96ac9f794e8cf8886ac08af105f11e3ef2cc44a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7GQAED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICt8By5MrzKxjlX%2Fp%2BL7gg4vwUgp6KaktAk9Ju1LKrCIAiBJnFV7KHZmhJYfuAy0jSck%2BCETdqu%2BCqGk2Tl8VFwECir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM5WI0EiHx5E0iy1xGKtwD2sG7JpAg9KxdUuiuup0n4w5XC6I7bX0baKNHrnqEpW5sHNFokGsQRa%2BdD%2FEg1Y0SL4l5Zq58fgO3YZxutHxZ0zrOhVg7nYg7kals4p%2BUNsPCyA9pyVjyb%2FGjJtzkJwDloeDL6P9p0UsGGfX9%2FFzWBAdsvAXZPkx9LrmbQkUEsXeJYp5M25H2pJ4C9LF2tUw%2BOro2l4TmRRFgJitkXfGinT2MyzHr2VlXbGaEniJUG8rERx3hMDSQYko7uoLzqDNPbxokJ2JDelm1xmLOCB3JVcql85KAQJGQWoUpbz9B8eR0nRpq4kkTw1jinLhbu1jcUzURh9Jx%2BHu9GMjQmjMbuxV03i1r%2Bz4wolyRDtSvBb5%2FQS60kbNKwwcowyrW9ulkvqwpCz60vcBWVjMH%2Byxv%2FA4AWu1%2BkYadDtM%2BXWeR5p3q2INFDE%2FW4MygSemEaMnpU8YMFbVkp0hTkWj0EAPwNpCtHO4ORp37B%2BxzZ%2Fy6CTopSz1RkJ%2B01eGSyOTIvOnmUUdA5eSmE3BX7dTB6U6dg%2FLOAhCqkr5oPdhfboskBKGdp3fngvUqBCzravlEUMx%2FkxsVmyK6uC86aZylfnLqdRPzw5REgtXLjruVQpxr%2F11hum6PWBPfvQHojtcw%2BdCMvQY6pgFSmrsDAxB43n9v97rRPmcKdh5vhgpYwaIXQqlR1bFJ0L5%2Bj5UIcsYPW8GM4r0%2FOLNoiLyvDFtkMlI8RuPc1LzuQjbpz%2FfZLMnKF0x%2Bo0nyq22%2BbXqhESLEwwWO059f0LbUwGB0H0O7mardkvSslX%2FQad9EHnzexpPZItDJu%2BfXtmnc5Ulot9Ifeowh9WTHJgMXxBAGDpqzS1SJf%2B%2FQP2okXXLilNHG&X-Amz-Signature=d578bdb26824d1625afbde470533e1e0275e29eec3f0d657014e84e8aaa517f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7GQAED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICt8By5MrzKxjlX%2Fp%2BL7gg4vwUgp6KaktAk9Ju1LKrCIAiBJnFV7KHZmhJYfuAy0jSck%2BCETdqu%2BCqGk2Tl8VFwECir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM5WI0EiHx5E0iy1xGKtwD2sG7JpAg9KxdUuiuup0n4w5XC6I7bX0baKNHrnqEpW5sHNFokGsQRa%2BdD%2FEg1Y0SL4l5Zq58fgO3YZxutHxZ0zrOhVg7nYg7kals4p%2BUNsPCyA9pyVjyb%2FGjJtzkJwDloeDL6P9p0UsGGfX9%2FFzWBAdsvAXZPkx9LrmbQkUEsXeJYp5M25H2pJ4C9LF2tUw%2BOro2l4TmRRFgJitkXfGinT2MyzHr2VlXbGaEniJUG8rERx3hMDSQYko7uoLzqDNPbxokJ2JDelm1xmLOCB3JVcql85KAQJGQWoUpbz9B8eR0nRpq4kkTw1jinLhbu1jcUzURh9Jx%2BHu9GMjQmjMbuxV03i1r%2Bz4wolyRDtSvBb5%2FQS60kbNKwwcowyrW9ulkvqwpCz60vcBWVjMH%2Byxv%2FA4AWu1%2BkYadDtM%2BXWeR5p3q2INFDE%2FW4MygSemEaMnpU8YMFbVkp0hTkWj0EAPwNpCtHO4ORp37B%2BxzZ%2Fy6CTopSz1RkJ%2B01eGSyOTIvOnmUUdA5eSmE3BX7dTB6U6dg%2FLOAhCqkr5oPdhfboskBKGdp3fngvUqBCzravlEUMx%2FkxsVmyK6uC86aZylfnLqdRPzw5REgtXLjruVQpxr%2F11hum6PWBPfvQHojtcw%2BdCMvQY6pgFSmrsDAxB43n9v97rRPmcKdh5vhgpYwaIXQqlR1bFJ0L5%2Bj5UIcsYPW8GM4r0%2FOLNoiLyvDFtkMlI8RuPc1LzuQjbpz%2FfZLMnKF0x%2Bo0nyq22%2BbXqhESLEwwWO059f0LbUwGB0H0O7mardkvSslX%2FQad9EHnzexpPZItDJu%2BfXtmnc5Ulot9Ifeowh9WTHJgMXxBAGDpqzS1SJf%2B%2FQP2okXXLilNHG&X-Amz-Signature=1de0d0bf3ef3942228c337655beea10513ac7bfa2e837feb729c503feec9d83a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7GQAED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICt8By5MrzKxjlX%2Fp%2BL7gg4vwUgp6KaktAk9Ju1LKrCIAiBJnFV7KHZmhJYfuAy0jSck%2BCETdqu%2BCqGk2Tl8VFwECir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM5WI0EiHx5E0iy1xGKtwD2sG7JpAg9KxdUuiuup0n4w5XC6I7bX0baKNHrnqEpW5sHNFokGsQRa%2BdD%2FEg1Y0SL4l5Zq58fgO3YZxutHxZ0zrOhVg7nYg7kals4p%2BUNsPCyA9pyVjyb%2FGjJtzkJwDloeDL6P9p0UsGGfX9%2FFzWBAdsvAXZPkx9LrmbQkUEsXeJYp5M25H2pJ4C9LF2tUw%2BOro2l4TmRRFgJitkXfGinT2MyzHr2VlXbGaEniJUG8rERx3hMDSQYko7uoLzqDNPbxokJ2JDelm1xmLOCB3JVcql85KAQJGQWoUpbz9B8eR0nRpq4kkTw1jinLhbu1jcUzURh9Jx%2BHu9GMjQmjMbuxV03i1r%2Bz4wolyRDtSvBb5%2FQS60kbNKwwcowyrW9ulkvqwpCz60vcBWVjMH%2Byxv%2FA4AWu1%2BkYadDtM%2BXWeR5p3q2INFDE%2FW4MygSemEaMnpU8YMFbVkp0hTkWj0EAPwNpCtHO4ORp37B%2BxzZ%2Fy6CTopSz1RkJ%2B01eGSyOTIvOnmUUdA5eSmE3BX7dTB6U6dg%2FLOAhCqkr5oPdhfboskBKGdp3fngvUqBCzravlEUMx%2FkxsVmyK6uC86aZylfnLqdRPzw5REgtXLjruVQpxr%2F11hum6PWBPfvQHojtcw%2BdCMvQY6pgFSmrsDAxB43n9v97rRPmcKdh5vhgpYwaIXQqlR1bFJ0L5%2Bj5UIcsYPW8GM4r0%2FOLNoiLyvDFtkMlI8RuPc1LzuQjbpz%2FfZLMnKF0x%2Bo0nyq22%2BbXqhESLEwwWO059f0LbUwGB0H0O7mardkvSslX%2FQad9EHnzexpPZItDJu%2BfXtmnc5Ulot9Ifeowh9WTHJgMXxBAGDpqzS1SJf%2B%2FQP2okXXLilNHG&X-Amz-Signature=6d6bd8fb553d36170194a544f51faeb92be8044e81e666118cd95bd7a206893c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7GQAED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICt8By5MrzKxjlX%2Fp%2BL7gg4vwUgp6KaktAk9Ju1LKrCIAiBJnFV7KHZmhJYfuAy0jSck%2BCETdqu%2BCqGk2Tl8VFwECir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM5WI0EiHx5E0iy1xGKtwD2sG7JpAg9KxdUuiuup0n4w5XC6I7bX0baKNHrnqEpW5sHNFokGsQRa%2BdD%2FEg1Y0SL4l5Zq58fgO3YZxutHxZ0zrOhVg7nYg7kals4p%2BUNsPCyA9pyVjyb%2FGjJtzkJwDloeDL6P9p0UsGGfX9%2FFzWBAdsvAXZPkx9LrmbQkUEsXeJYp5M25H2pJ4C9LF2tUw%2BOro2l4TmRRFgJitkXfGinT2MyzHr2VlXbGaEniJUG8rERx3hMDSQYko7uoLzqDNPbxokJ2JDelm1xmLOCB3JVcql85KAQJGQWoUpbz9B8eR0nRpq4kkTw1jinLhbu1jcUzURh9Jx%2BHu9GMjQmjMbuxV03i1r%2Bz4wolyRDtSvBb5%2FQS60kbNKwwcowyrW9ulkvqwpCz60vcBWVjMH%2Byxv%2FA4AWu1%2BkYadDtM%2BXWeR5p3q2INFDE%2FW4MygSemEaMnpU8YMFbVkp0hTkWj0EAPwNpCtHO4ORp37B%2BxzZ%2Fy6CTopSz1RkJ%2B01eGSyOTIvOnmUUdA5eSmE3BX7dTB6U6dg%2FLOAhCqkr5oPdhfboskBKGdp3fngvUqBCzravlEUMx%2FkxsVmyK6uC86aZylfnLqdRPzw5REgtXLjruVQpxr%2F11hum6PWBPfvQHojtcw%2BdCMvQY6pgFSmrsDAxB43n9v97rRPmcKdh5vhgpYwaIXQqlR1bFJ0L5%2Bj5UIcsYPW8GM4r0%2FOLNoiLyvDFtkMlI8RuPc1LzuQjbpz%2FfZLMnKF0x%2Bo0nyq22%2BbXqhESLEwwWO059f0LbUwGB0H0O7mardkvSslX%2FQad9EHnzexpPZItDJu%2BfXtmnc5Ulot9Ifeowh9WTHJgMXxBAGDpqzS1SJf%2B%2FQP2okXXLilNHG&X-Amz-Signature=7441bdb7f605b8c008abdc82b3c633838bc484c871b0695c9f39c432cfe7332e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7GQAED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCICt8By5MrzKxjlX%2Fp%2BL7gg4vwUgp6KaktAk9Ju1LKrCIAiBJnFV7KHZmhJYfuAy0jSck%2BCETdqu%2BCqGk2Tl8VFwECir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM5WI0EiHx5E0iy1xGKtwD2sG7JpAg9KxdUuiuup0n4w5XC6I7bX0baKNHrnqEpW5sHNFokGsQRa%2BdD%2FEg1Y0SL4l5Zq58fgO3YZxutHxZ0zrOhVg7nYg7kals4p%2BUNsPCyA9pyVjyb%2FGjJtzkJwDloeDL6P9p0UsGGfX9%2FFzWBAdsvAXZPkx9LrmbQkUEsXeJYp5M25H2pJ4C9LF2tUw%2BOro2l4TmRRFgJitkXfGinT2MyzHr2VlXbGaEniJUG8rERx3hMDSQYko7uoLzqDNPbxokJ2JDelm1xmLOCB3JVcql85KAQJGQWoUpbz9B8eR0nRpq4kkTw1jinLhbu1jcUzURh9Jx%2BHu9GMjQmjMbuxV03i1r%2Bz4wolyRDtSvBb5%2FQS60kbNKwwcowyrW9ulkvqwpCz60vcBWVjMH%2Byxv%2FA4AWu1%2BkYadDtM%2BXWeR5p3q2INFDE%2FW4MygSemEaMnpU8YMFbVkp0hTkWj0EAPwNpCtHO4ORp37B%2BxzZ%2Fy6CTopSz1RkJ%2B01eGSyOTIvOnmUUdA5eSmE3BX7dTB6U6dg%2FLOAhCqkr5oPdhfboskBKGdp3fngvUqBCzravlEUMx%2FkxsVmyK6uC86aZylfnLqdRPzw5REgtXLjruVQpxr%2F11hum6PWBPfvQHojtcw%2BdCMvQY6pgFSmrsDAxB43n9v97rRPmcKdh5vhgpYwaIXQqlR1bFJ0L5%2Bj5UIcsYPW8GM4r0%2FOLNoiLyvDFtkMlI8RuPc1LzuQjbpz%2FfZLMnKF0x%2Bo0nyq22%2BbXqhESLEwwWO059f0LbUwGB0H0O7mardkvSslX%2FQad9EHnzexpPZItDJu%2BfXtmnc5Ulot9Ifeowh9WTHJgMXxBAGDpqzS1SJf%2B%2FQP2okXXLilNHG&X-Amz-Signature=fb2a62edf1cae8f2aabf0f3cf5b817ee107c8ed05a108fc1c4232a99d5596f18&X-Amz-SignedHeaders=host&x-id=GetObject)
