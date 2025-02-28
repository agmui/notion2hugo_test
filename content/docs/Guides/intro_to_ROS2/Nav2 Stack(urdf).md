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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHF6YSQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDYwEMYAqJfsYZQC3LDF8qLvL4R3gtlHy2eUYqcrQi1RAIgLC4aRXJXsDDB2ztovOWqfTlTJSjGCKCvh1AC8oh1mM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvh3DORPIq0uPBk8ircA3aBDgmRNoPhrCJavTYpdVHZx1SdVrNvb1YrTmMSNzfir0dN%2BXavjpfjrWVz1LwVZOuK906RR%2BqTNmKf3dbpQl1lDe6TPqgUqJ8dChRtgrbaNgs7G3frnKGEp4BnHvB04RNOnZeZ9Q8zfKTtw%2B01r5OOHKG%2ByINfeu%2FS9WLB4DV%2FT8xZfF9VzzdeTpMRqDPakngmpTeJrM%2F5nGMdN%2FQf%2BdE%2FzcWqY9NDYRWSV72cc%2FgLH8fMq%2B2WtJ6KJg9ApdedqDXEd6pFcOsJcqyXiSqaKEBDfMEe06kFzyv1fKiv6VmRTpsKL%2FoGv6%2FB5vXlng3Mu8M4CyvfH%2BiOQOTPF%2BMrZJKxVpShzewRgZvlpXbQh9ViGMWo0ctTEXAeEeHPi%2F8ckrP7H4JO5qm9lffteFxAWmXvruzVs2371zlM1sYcN7qxf7i2aT%2FJa6GKjUaOHf8136Qm6FtAFMTCkOJ9uP31T2jvMxFqsDLNIKkT1wk3vd%2BdsFy5L5QEz4iBC56BT6Romi%2Fm9dxGRtoGev%2F7Msl1RklGcQrEJNjX36FTYLDmYcsuSQc7PUGMzOtf9S2yitog6AXfADdfasRbMu5r8ZGXX%2BAS3joQ46ynGSEWEmccC53NjwOsgUHvWQzWpM0iMPSThr4GOqUBh6rZm14QsEmvOkrqqeOHP1i1pWzxvpCVjBMghhae5t8kxYSORPwKB5jbuQhiQ4GFfMj5M7QvVD%2FucrZiAiisHaTX7PtcVyLqsodrjfmIUMJWoMuHqG8xVUdwEfuYx2TKReSOvnJ9TnQ8L%2BJEw0%2BXjTRIWeVhcxYqy7iflJIZ%2B9HUKVE79cxul6DERZMhPxCoG4ptOv1%2BOJfZOfWpVyUMIxzXw0YG&X-Amz-Signature=0565dfa6b5a45d4b69ac299c783806189f455d5ebd5e16e45e33480feb001ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHF6YSQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDYwEMYAqJfsYZQC3LDF8qLvL4R3gtlHy2eUYqcrQi1RAIgLC4aRXJXsDDB2ztovOWqfTlTJSjGCKCvh1AC8oh1mM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvh3DORPIq0uPBk8ircA3aBDgmRNoPhrCJavTYpdVHZx1SdVrNvb1YrTmMSNzfir0dN%2BXavjpfjrWVz1LwVZOuK906RR%2BqTNmKf3dbpQl1lDe6TPqgUqJ8dChRtgrbaNgs7G3frnKGEp4BnHvB04RNOnZeZ9Q8zfKTtw%2B01r5OOHKG%2ByINfeu%2FS9WLB4DV%2FT8xZfF9VzzdeTpMRqDPakngmpTeJrM%2F5nGMdN%2FQf%2BdE%2FzcWqY9NDYRWSV72cc%2FgLH8fMq%2B2WtJ6KJg9ApdedqDXEd6pFcOsJcqyXiSqaKEBDfMEe06kFzyv1fKiv6VmRTpsKL%2FoGv6%2FB5vXlng3Mu8M4CyvfH%2BiOQOTPF%2BMrZJKxVpShzewRgZvlpXbQh9ViGMWo0ctTEXAeEeHPi%2F8ckrP7H4JO5qm9lffteFxAWmXvruzVs2371zlM1sYcN7qxf7i2aT%2FJa6GKjUaOHf8136Qm6FtAFMTCkOJ9uP31T2jvMxFqsDLNIKkT1wk3vd%2BdsFy5L5QEz4iBC56BT6Romi%2Fm9dxGRtoGev%2F7Msl1RklGcQrEJNjX36FTYLDmYcsuSQc7PUGMzOtf9S2yitog6AXfADdfasRbMu5r8ZGXX%2BAS3joQ46ynGSEWEmccC53NjwOsgUHvWQzWpM0iMPSThr4GOqUBh6rZm14QsEmvOkrqqeOHP1i1pWzxvpCVjBMghhae5t8kxYSORPwKB5jbuQhiQ4GFfMj5M7QvVD%2FucrZiAiisHaTX7PtcVyLqsodrjfmIUMJWoMuHqG8xVUdwEfuYx2TKReSOvnJ9TnQ8L%2BJEw0%2BXjTRIWeVhcxYqy7iflJIZ%2B9HUKVE79cxul6DERZMhPxCoG4ptOv1%2BOJfZOfWpVyUMIxzXw0YG&X-Amz-Signature=6fff599c5ff477877250cdf1f7139498b6f0957df50a44584c624eedea7e86ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHF6YSQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDYwEMYAqJfsYZQC3LDF8qLvL4R3gtlHy2eUYqcrQi1RAIgLC4aRXJXsDDB2ztovOWqfTlTJSjGCKCvh1AC8oh1mM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvh3DORPIq0uPBk8ircA3aBDgmRNoPhrCJavTYpdVHZx1SdVrNvb1YrTmMSNzfir0dN%2BXavjpfjrWVz1LwVZOuK906RR%2BqTNmKf3dbpQl1lDe6TPqgUqJ8dChRtgrbaNgs7G3frnKGEp4BnHvB04RNOnZeZ9Q8zfKTtw%2B01r5OOHKG%2ByINfeu%2FS9WLB4DV%2FT8xZfF9VzzdeTpMRqDPakngmpTeJrM%2F5nGMdN%2FQf%2BdE%2FzcWqY9NDYRWSV72cc%2FgLH8fMq%2B2WtJ6KJg9ApdedqDXEd6pFcOsJcqyXiSqaKEBDfMEe06kFzyv1fKiv6VmRTpsKL%2FoGv6%2FB5vXlng3Mu8M4CyvfH%2BiOQOTPF%2BMrZJKxVpShzewRgZvlpXbQh9ViGMWo0ctTEXAeEeHPi%2F8ckrP7H4JO5qm9lffteFxAWmXvruzVs2371zlM1sYcN7qxf7i2aT%2FJa6GKjUaOHf8136Qm6FtAFMTCkOJ9uP31T2jvMxFqsDLNIKkT1wk3vd%2BdsFy5L5QEz4iBC56BT6Romi%2Fm9dxGRtoGev%2F7Msl1RklGcQrEJNjX36FTYLDmYcsuSQc7PUGMzOtf9S2yitog6AXfADdfasRbMu5r8ZGXX%2BAS3joQ46ynGSEWEmccC53NjwOsgUHvWQzWpM0iMPSThr4GOqUBh6rZm14QsEmvOkrqqeOHP1i1pWzxvpCVjBMghhae5t8kxYSORPwKB5jbuQhiQ4GFfMj5M7QvVD%2FucrZiAiisHaTX7PtcVyLqsodrjfmIUMJWoMuHqG8xVUdwEfuYx2TKReSOvnJ9TnQ8L%2BJEw0%2BXjTRIWeVhcxYqy7iflJIZ%2B9HUKVE79cxul6DERZMhPxCoG4ptOv1%2BOJfZOfWpVyUMIxzXw0YG&X-Amz-Signature=3b4d58ac80b41f63c11adf4ead6788408c0eede9255d9c93abae847ab8847504&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHF6YSQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDYwEMYAqJfsYZQC3LDF8qLvL4R3gtlHy2eUYqcrQi1RAIgLC4aRXJXsDDB2ztovOWqfTlTJSjGCKCvh1AC8oh1mM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvh3DORPIq0uPBk8ircA3aBDgmRNoPhrCJavTYpdVHZx1SdVrNvb1YrTmMSNzfir0dN%2BXavjpfjrWVz1LwVZOuK906RR%2BqTNmKf3dbpQl1lDe6TPqgUqJ8dChRtgrbaNgs7G3frnKGEp4BnHvB04RNOnZeZ9Q8zfKTtw%2B01r5OOHKG%2ByINfeu%2FS9WLB4DV%2FT8xZfF9VzzdeTpMRqDPakngmpTeJrM%2F5nGMdN%2FQf%2BdE%2FzcWqY9NDYRWSV72cc%2FgLH8fMq%2B2WtJ6KJg9ApdedqDXEd6pFcOsJcqyXiSqaKEBDfMEe06kFzyv1fKiv6VmRTpsKL%2FoGv6%2FB5vXlng3Mu8M4CyvfH%2BiOQOTPF%2BMrZJKxVpShzewRgZvlpXbQh9ViGMWo0ctTEXAeEeHPi%2F8ckrP7H4JO5qm9lffteFxAWmXvruzVs2371zlM1sYcN7qxf7i2aT%2FJa6GKjUaOHf8136Qm6FtAFMTCkOJ9uP31T2jvMxFqsDLNIKkT1wk3vd%2BdsFy5L5QEz4iBC56BT6Romi%2Fm9dxGRtoGev%2F7Msl1RklGcQrEJNjX36FTYLDmYcsuSQc7PUGMzOtf9S2yitog6AXfADdfasRbMu5r8ZGXX%2BAS3joQ46ynGSEWEmccC53NjwOsgUHvWQzWpM0iMPSThr4GOqUBh6rZm14QsEmvOkrqqeOHP1i1pWzxvpCVjBMghhae5t8kxYSORPwKB5jbuQhiQ4GFfMj5M7QvVD%2FucrZiAiisHaTX7PtcVyLqsodrjfmIUMJWoMuHqG8xVUdwEfuYx2TKReSOvnJ9TnQ8L%2BJEw0%2BXjTRIWeVhcxYqy7iflJIZ%2B9HUKVE79cxul6DERZMhPxCoG4ptOv1%2BOJfZOfWpVyUMIxzXw0YG&X-Amz-Signature=87bdbdc92ba47d01794fc91c0133319329c27d3c1e1e55da6ec5f9eea881693f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHF6YSQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDYwEMYAqJfsYZQC3LDF8qLvL4R3gtlHy2eUYqcrQi1RAIgLC4aRXJXsDDB2ztovOWqfTlTJSjGCKCvh1AC8oh1mM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvh3DORPIq0uPBk8ircA3aBDgmRNoPhrCJavTYpdVHZx1SdVrNvb1YrTmMSNzfir0dN%2BXavjpfjrWVz1LwVZOuK906RR%2BqTNmKf3dbpQl1lDe6TPqgUqJ8dChRtgrbaNgs7G3frnKGEp4BnHvB04RNOnZeZ9Q8zfKTtw%2B01r5OOHKG%2ByINfeu%2FS9WLB4DV%2FT8xZfF9VzzdeTpMRqDPakngmpTeJrM%2F5nGMdN%2FQf%2BdE%2FzcWqY9NDYRWSV72cc%2FgLH8fMq%2B2WtJ6KJg9ApdedqDXEd6pFcOsJcqyXiSqaKEBDfMEe06kFzyv1fKiv6VmRTpsKL%2FoGv6%2FB5vXlng3Mu8M4CyvfH%2BiOQOTPF%2BMrZJKxVpShzewRgZvlpXbQh9ViGMWo0ctTEXAeEeHPi%2F8ckrP7H4JO5qm9lffteFxAWmXvruzVs2371zlM1sYcN7qxf7i2aT%2FJa6GKjUaOHf8136Qm6FtAFMTCkOJ9uP31T2jvMxFqsDLNIKkT1wk3vd%2BdsFy5L5QEz4iBC56BT6Romi%2Fm9dxGRtoGev%2F7Msl1RklGcQrEJNjX36FTYLDmYcsuSQc7PUGMzOtf9S2yitog6AXfADdfasRbMu5r8ZGXX%2BAS3joQ46ynGSEWEmccC53NjwOsgUHvWQzWpM0iMPSThr4GOqUBh6rZm14QsEmvOkrqqeOHP1i1pWzxvpCVjBMghhae5t8kxYSORPwKB5jbuQhiQ4GFfMj5M7QvVD%2FucrZiAiisHaTX7PtcVyLqsodrjfmIUMJWoMuHqG8xVUdwEfuYx2TKReSOvnJ9TnQ8L%2BJEw0%2BXjTRIWeVhcxYqy7iflJIZ%2B9HUKVE79cxul6DERZMhPxCoG4ptOv1%2BOJfZOfWpVyUMIxzXw0YG&X-Amz-Signature=8b54a552e8c48dbd955d2cc7496de9f2b5159eee1d48aaf3bf6bbec4d45c9aed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHF6YSQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDYwEMYAqJfsYZQC3LDF8qLvL4R3gtlHy2eUYqcrQi1RAIgLC4aRXJXsDDB2ztovOWqfTlTJSjGCKCvh1AC8oh1mM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvh3DORPIq0uPBk8ircA3aBDgmRNoPhrCJavTYpdVHZx1SdVrNvb1YrTmMSNzfir0dN%2BXavjpfjrWVz1LwVZOuK906RR%2BqTNmKf3dbpQl1lDe6TPqgUqJ8dChRtgrbaNgs7G3frnKGEp4BnHvB04RNOnZeZ9Q8zfKTtw%2B01r5OOHKG%2ByINfeu%2FS9WLB4DV%2FT8xZfF9VzzdeTpMRqDPakngmpTeJrM%2F5nGMdN%2FQf%2BdE%2FzcWqY9NDYRWSV72cc%2FgLH8fMq%2B2WtJ6KJg9ApdedqDXEd6pFcOsJcqyXiSqaKEBDfMEe06kFzyv1fKiv6VmRTpsKL%2FoGv6%2FB5vXlng3Mu8M4CyvfH%2BiOQOTPF%2BMrZJKxVpShzewRgZvlpXbQh9ViGMWo0ctTEXAeEeHPi%2F8ckrP7H4JO5qm9lffteFxAWmXvruzVs2371zlM1sYcN7qxf7i2aT%2FJa6GKjUaOHf8136Qm6FtAFMTCkOJ9uP31T2jvMxFqsDLNIKkT1wk3vd%2BdsFy5L5QEz4iBC56BT6Romi%2Fm9dxGRtoGev%2F7Msl1RklGcQrEJNjX36FTYLDmYcsuSQc7PUGMzOtf9S2yitog6AXfADdfasRbMu5r8ZGXX%2BAS3joQ46ynGSEWEmccC53NjwOsgUHvWQzWpM0iMPSThr4GOqUBh6rZm14QsEmvOkrqqeOHP1i1pWzxvpCVjBMghhae5t8kxYSORPwKB5jbuQhiQ4GFfMj5M7QvVD%2FucrZiAiisHaTX7PtcVyLqsodrjfmIUMJWoMuHqG8xVUdwEfuYx2TKReSOvnJ9TnQ8L%2BJEw0%2BXjTRIWeVhcxYqy7iflJIZ%2B9HUKVE79cxul6DERZMhPxCoG4ptOv1%2BOJfZOfWpVyUMIxzXw0YG&X-Amz-Signature=1d2247cd14146fd58cb0ccbf8b1693460e1ef3241042e556cda4d4c6f98377bd&X-Amz-SignedHeaders=host&x-id=GetObject)
