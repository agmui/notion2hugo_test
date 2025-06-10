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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNUN3AF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbaxuS3ckf2%2FsOu%2FQSRK3NbBfnl3gwu5oOi2%2BP457%2FgIgNUS1%2Fs0%2Fl1wyyRSXJGh7d4oZB1caaINXzWeWDSFpms4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLDnZ%2FUB1TpQtmuCrcA%2BZq%2BkYwY7uv%2BYLG5ME%2FfvUarLRJ9%2Bh7rXIYGBg0euUwCxXyuJ5XqHYlNP9tBzTtcxgK%2BtDvzDDvvk9XiChOzDeP28KcTVrAWugRS8LXY7Qmjsehka2iFAOqljFqVCnjzok4KzTvjENKqgLZtUe2jtbvxLUcTrqsm3hT6cUoJBZ93rn53yq8tpzX7fnpFkAnr1z6HWwc4qO2XEpOJ6fbh4AFGgVM%2FDoEmz9IqU4Q5Umg%2BkUcr0lmSpM0f759K5MdpvCezMaGncbbNjhjyBqR%2FIxCEpGTnSua9AzXVM3kj4ntGGWY%2BXkvSzzNSZDoupJCWMNHzHb3VXHbdauqSODDHn3CSMQomgeu9aYRbtf8tJUp22vUoXbfGJfVHrfnWnkEWsVTl7pdsAK0O52%2B1W9A39HUYBLydQl0JktzGNsEcWqRk1nyXdZqx4RgtxR03bTpZFBAE3XVRvd0g5IKnzbgRfrTW0561fPXyhtd%2FPIcVbznt3ivzfLnIgr8wztdgu%2FPe%2Bj90BCT3AIObM6FG5IH%2BWJcawbrtUSjwZpib0aeoX257QQbiwozNzMCRvdgI8JRPwOf1lnHK29fUM9AxBBswhmqPNPcwnYZ%2BZQfEduPOmFLI82qSD3zYRLt5xGnMM2%2BoMIGOqUBdEECMOWHkMGe9bKBsKdNj2FkiqocVptOL6P6hYTUzyTHLRFVAgHMkcZJPhfOKY34SV9oopBj9dm7KnPAnKoT7DQFyzovLBtviEH%2BKLekavwLUGdY6pBdsmxrRwnsu0fih0VzVu9ip6%2BxksW6LPc1elCxGsagyffMxxiV29ZylTBqEAf%2BexouAF4GvuETfIjCNDcw4JkjhSYap15qFrlUId%2BgpYxl&X-Amz-Signature=061212b74b0db37d932d803dad3cf76c13f36454ad81192349c28c7ec994c254&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNUN3AF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbaxuS3ckf2%2FsOu%2FQSRK3NbBfnl3gwu5oOi2%2BP457%2FgIgNUS1%2Fs0%2Fl1wyyRSXJGh7d4oZB1caaINXzWeWDSFpms4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLDnZ%2FUB1TpQtmuCrcA%2BZq%2BkYwY7uv%2BYLG5ME%2FfvUarLRJ9%2Bh7rXIYGBg0euUwCxXyuJ5XqHYlNP9tBzTtcxgK%2BtDvzDDvvk9XiChOzDeP28KcTVrAWugRS8LXY7Qmjsehka2iFAOqljFqVCnjzok4KzTvjENKqgLZtUe2jtbvxLUcTrqsm3hT6cUoJBZ93rn53yq8tpzX7fnpFkAnr1z6HWwc4qO2XEpOJ6fbh4AFGgVM%2FDoEmz9IqU4Q5Umg%2BkUcr0lmSpM0f759K5MdpvCezMaGncbbNjhjyBqR%2FIxCEpGTnSua9AzXVM3kj4ntGGWY%2BXkvSzzNSZDoupJCWMNHzHb3VXHbdauqSODDHn3CSMQomgeu9aYRbtf8tJUp22vUoXbfGJfVHrfnWnkEWsVTl7pdsAK0O52%2B1W9A39HUYBLydQl0JktzGNsEcWqRk1nyXdZqx4RgtxR03bTpZFBAE3XVRvd0g5IKnzbgRfrTW0561fPXyhtd%2FPIcVbznt3ivzfLnIgr8wztdgu%2FPe%2Bj90BCT3AIObM6FG5IH%2BWJcawbrtUSjwZpib0aeoX257QQbiwozNzMCRvdgI8JRPwOf1lnHK29fUM9AxBBswhmqPNPcwnYZ%2BZQfEduPOmFLI82qSD3zYRLt5xGnMM2%2BoMIGOqUBdEECMOWHkMGe9bKBsKdNj2FkiqocVptOL6P6hYTUzyTHLRFVAgHMkcZJPhfOKY34SV9oopBj9dm7KnPAnKoT7DQFyzovLBtviEH%2BKLekavwLUGdY6pBdsmxrRwnsu0fih0VzVu9ip6%2BxksW6LPc1elCxGsagyffMxxiV29ZylTBqEAf%2BexouAF4GvuETfIjCNDcw4JkjhSYap15qFrlUId%2BgpYxl&X-Amz-Signature=f0136ee8b61c4477f2deab00c4be511c6ee470008d74824c1ef5ca3f190b479f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNUN3AF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbaxuS3ckf2%2FsOu%2FQSRK3NbBfnl3gwu5oOi2%2BP457%2FgIgNUS1%2Fs0%2Fl1wyyRSXJGh7d4oZB1caaINXzWeWDSFpms4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLDnZ%2FUB1TpQtmuCrcA%2BZq%2BkYwY7uv%2BYLG5ME%2FfvUarLRJ9%2Bh7rXIYGBg0euUwCxXyuJ5XqHYlNP9tBzTtcxgK%2BtDvzDDvvk9XiChOzDeP28KcTVrAWugRS8LXY7Qmjsehka2iFAOqljFqVCnjzok4KzTvjENKqgLZtUe2jtbvxLUcTrqsm3hT6cUoJBZ93rn53yq8tpzX7fnpFkAnr1z6HWwc4qO2XEpOJ6fbh4AFGgVM%2FDoEmz9IqU4Q5Umg%2BkUcr0lmSpM0f759K5MdpvCezMaGncbbNjhjyBqR%2FIxCEpGTnSua9AzXVM3kj4ntGGWY%2BXkvSzzNSZDoupJCWMNHzHb3VXHbdauqSODDHn3CSMQomgeu9aYRbtf8tJUp22vUoXbfGJfVHrfnWnkEWsVTl7pdsAK0O52%2B1W9A39HUYBLydQl0JktzGNsEcWqRk1nyXdZqx4RgtxR03bTpZFBAE3XVRvd0g5IKnzbgRfrTW0561fPXyhtd%2FPIcVbznt3ivzfLnIgr8wztdgu%2FPe%2Bj90BCT3AIObM6FG5IH%2BWJcawbrtUSjwZpib0aeoX257QQbiwozNzMCRvdgI8JRPwOf1lnHK29fUM9AxBBswhmqPNPcwnYZ%2BZQfEduPOmFLI82qSD3zYRLt5xGnMM2%2BoMIGOqUBdEECMOWHkMGe9bKBsKdNj2FkiqocVptOL6P6hYTUzyTHLRFVAgHMkcZJPhfOKY34SV9oopBj9dm7KnPAnKoT7DQFyzovLBtviEH%2BKLekavwLUGdY6pBdsmxrRwnsu0fih0VzVu9ip6%2BxksW6LPc1elCxGsagyffMxxiV29ZylTBqEAf%2BexouAF4GvuETfIjCNDcw4JkjhSYap15qFrlUId%2BgpYxl&X-Amz-Signature=58bdb8eb4cf9e49a4cf0eec1728fbf68cb167ea14917224e84e7cdcd208d30b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNUN3AF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbaxuS3ckf2%2FsOu%2FQSRK3NbBfnl3gwu5oOi2%2BP457%2FgIgNUS1%2Fs0%2Fl1wyyRSXJGh7d4oZB1caaINXzWeWDSFpms4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLDnZ%2FUB1TpQtmuCrcA%2BZq%2BkYwY7uv%2BYLG5ME%2FfvUarLRJ9%2Bh7rXIYGBg0euUwCxXyuJ5XqHYlNP9tBzTtcxgK%2BtDvzDDvvk9XiChOzDeP28KcTVrAWugRS8LXY7Qmjsehka2iFAOqljFqVCnjzok4KzTvjENKqgLZtUe2jtbvxLUcTrqsm3hT6cUoJBZ93rn53yq8tpzX7fnpFkAnr1z6HWwc4qO2XEpOJ6fbh4AFGgVM%2FDoEmz9IqU4Q5Umg%2BkUcr0lmSpM0f759K5MdpvCezMaGncbbNjhjyBqR%2FIxCEpGTnSua9AzXVM3kj4ntGGWY%2BXkvSzzNSZDoupJCWMNHzHb3VXHbdauqSODDHn3CSMQomgeu9aYRbtf8tJUp22vUoXbfGJfVHrfnWnkEWsVTl7pdsAK0O52%2B1W9A39HUYBLydQl0JktzGNsEcWqRk1nyXdZqx4RgtxR03bTpZFBAE3XVRvd0g5IKnzbgRfrTW0561fPXyhtd%2FPIcVbznt3ivzfLnIgr8wztdgu%2FPe%2Bj90BCT3AIObM6FG5IH%2BWJcawbrtUSjwZpib0aeoX257QQbiwozNzMCRvdgI8JRPwOf1lnHK29fUM9AxBBswhmqPNPcwnYZ%2BZQfEduPOmFLI82qSD3zYRLt5xGnMM2%2BoMIGOqUBdEECMOWHkMGe9bKBsKdNj2FkiqocVptOL6P6hYTUzyTHLRFVAgHMkcZJPhfOKY34SV9oopBj9dm7KnPAnKoT7DQFyzovLBtviEH%2BKLekavwLUGdY6pBdsmxrRwnsu0fih0VzVu9ip6%2BxksW6LPc1elCxGsagyffMxxiV29ZylTBqEAf%2BexouAF4GvuETfIjCNDcw4JkjhSYap15qFrlUId%2BgpYxl&X-Amz-Signature=798ee538e2e5f4f51f83e99de2046574ec6c973b264b336fe40717c888d3e0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNUN3AF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbaxuS3ckf2%2FsOu%2FQSRK3NbBfnl3gwu5oOi2%2BP457%2FgIgNUS1%2Fs0%2Fl1wyyRSXJGh7d4oZB1caaINXzWeWDSFpms4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLDnZ%2FUB1TpQtmuCrcA%2BZq%2BkYwY7uv%2BYLG5ME%2FfvUarLRJ9%2Bh7rXIYGBg0euUwCxXyuJ5XqHYlNP9tBzTtcxgK%2BtDvzDDvvk9XiChOzDeP28KcTVrAWugRS8LXY7Qmjsehka2iFAOqljFqVCnjzok4KzTvjENKqgLZtUe2jtbvxLUcTrqsm3hT6cUoJBZ93rn53yq8tpzX7fnpFkAnr1z6HWwc4qO2XEpOJ6fbh4AFGgVM%2FDoEmz9IqU4Q5Umg%2BkUcr0lmSpM0f759K5MdpvCezMaGncbbNjhjyBqR%2FIxCEpGTnSua9AzXVM3kj4ntGGWY%2BXkvSzzNSZDoupJCWMNHzHb3VXHbdauqSODDHn3CSMQomgeu9aYRbtf8tJUp22vUoXbfGJfVHrfnWnkEWsVTl7pdsAK0O52%2B1W9A39HUYBLydQl0JktzGNsEcWqRk1nyXdZqx4RgtxR03bTpZFBAE3XVRvd0g5IKnzbgRfrTW0561fPXyhtd%2FPIcVbznt3ivzfLnIgr8wztdgu%2FPe%2Bj90BCT3AIObM6FG5IH%2BWJcawbrtUSjwZpib0aeoX257QQbiwozNzMCRvdgI8JRPwOf1lnHK29fUM9AxBBswhmqPNPcwnYZ%2BZQfEduPOmFLI82qSD3zYRLt5xGnMM2%2BoMIGOqUBdEECMOWHkMGe9bKBsKdNj2FkiqocVptOL6P6hYTUzyTHLRFVAgHMkcZJPhfOKY34SV9oopBj9dm7KnPAnKoT7DQFyzovLBtviEH%2BKLekavwLUGdY6pBdsmxrRwnsu0fih0VzVu9ip6%2BxksW6LPc1elCxGsagyffMxxiV29ZylTBqEAf%2BexouAF4GvuETfIjCNDcw4JkjhSYap15qFrlUId%2BgpYxl&X-Amz-Signature=cc972eccf80da67701e58a10beb94902228457d7e19c8a1ab06259cf89dd13cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNUN3AF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbaxuS3ckf2%2FsOu%2FQSRK3NbBfnl3gwu5oOi2%2BP457%2FgIgNUS1%2Fs0%2Fl1wyyRSXJGh7d4oZB1caaINXzWeWDSFpms4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdLDnZ%2FUB1TpQtmuCrcA%2BZq%2BkYwY7uv%2BYLG5ME%2FfvUarLRJ9%2Bh7rXIYGBg0euUwCxXyuJ5XqHYlNP9tBzTtcxgK%2BtDvzDDvvk9XiChOzDeP28KcTVrAWugRS8LXY7Qmjsehka2iFAOqljFqVCnjzok4KzTvjENKqgLZtUe2jtbvxLUcTrqsm3hT6cUoJBZ93rn53yq8tpzX7fnpFkAnr1z6HWwc4qO2XEpOJ6fbh4AFGgVM%2FDoEmz9IqU4Q5Umg%2BkUcr0lmSpM0f759K5MdpvCezMaGncbbNjhjyBqR%2FIxCEpGTnSua9AzXVM3kj4ntGGWY%2BXkvSzzNSZDoupJCWMNHzHb3VXHbdauqSODDHn3CSMQomgeu9aYRbtf8tJUp22vUoXbfGJfVHrfnWnkEWsVTl7pdsAK0O52%2B1W9A39HUYBLydQl0JktzGNsEcWqRk1nyXdZqx4RgtxR03bTpZFBAE3XVRvd0g5IKnzbgRfrTW0561fPXyhtd%2FPIcVbznt3ivzfLnIgr8wztdgu%2FPe%2Bj90BCT3AIObM6FG5IH%2BWJcawbrtUSjwZpib0aeoX257QQbiwozNzMCRvdgI8JRPwOf1lnHK29fUM9AxBBswhmqPNPcwnYZ%2BZQfEduPOmFLI82qSD3zYRLt5xGnMM2%2BoMIGOqUBdEECMOWHkMGe9bKBsKdNj2FkiqocVptOL6P6hYTUzyTHLRFVAgHMkcZJPhfOKY34SV9oopBj9dm7KnPAnKoT7DQFyzovLBtviEH%2BKLekavwLUGdY6pBdsmxrRwnsu0fih0VzVu9ip6%2BxksW6LPc1elCxGsagyffMxxiV29ZylTBqEAf%2BexouAF4GvuETfIjCNDcw4JkjhSYap15qFrlUId%2BgpYxl&X-Amz-Signature=5ef6f908955bf2bf8763051153c819bfe7347d4a7a2f70111ea4846967deeac6&X-Amz-SignedHeaders=host&x-id=GetObject)
