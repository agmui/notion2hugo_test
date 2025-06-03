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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZROG2I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1RU215R1QYEM%2BHcj6DRSFyOzHyvc3%2BE85A5muFuumzwIgNXAXwuW9KBM%2BWHVzedPswORjsx57lwHeuDhwAofRJX8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq3lxGMh15qVf%2FVNyrcAyx8yKDSpY%2FWv3aYKc8ENNG1Nu%2Fir8EKipimC5PXpbKSw4Wwid7KZrWuuGWO32%2BVgv2JWwG8nxigvlDQfnfSTUW3JevgSSKweCxJEcR6RQ2K7E9%2BHF1QhRjPJlfVrJayJAPNEOp9oXAMPJksSAEFTeSru4AkDTvbTappW9o2bEqh5zEG7X%2F0q7YIysaE3hFpqiQp42AmzW4jiuUF%2BXPeWgmpt4iWKGNSWBqf7cunCzjpzTGR%2FlAV6Odsq1fixnAfzPF4%2B%2B8AcwBtXUj2xXVrqIp%2FkSo%2BT%2FxQz19dTC%2FfHawbOUfSiaVzWUwewDDEEF56%2FUd2xt4NKhhA0lHp%2B0skrpBtN35GO4%2BT1WLIbjkzdJgXI0CRKUj8%2B8X6d4lcmXmWKB%2BUIAZn7rw7Ww07mfE8qx5ObpOqNKhGnbCxDZPoqeS9BYadZxV00X76xTucJmGwSJvCmXnNxSJW9QbWS40F1SAFrsxelCnMDje9vIB5HVetTmJMdtkGg5MV4%2Bn7Ygojza36HRGSbBlQMtkVRYZugyjOHiMyXBSYFwOsmkUPXmjROHXP8lzTdB2hd4dJsv2kaK6Sr%2BIIrtz0H%2BTgIdy3LT1n2eHwtFsp7%2FzaOUy1YV5T1qf2jPUcrnQMxIc0MLSM%2BcEGOqUB2n1MKMPJWy9jZ%2FhW35oj7IY2SdZzWD11U2g8iHXlGeFi4t%2FR3PuqmQUbQxSHE1SBJJEtoAWXa3s%2FYQ0hr1F7gAlGTk7hbGTmU39vOPFhruD53rZwKwhaayHjbOIFFcFaHdPdDYJx38K2WXh%2BaOoIROhWoa8ES3RLz8tsv8PF4MebARrCT0GW%2FjfLWW23OopZUl%2FXDZC%2BS15e3ZIewhECHChXLUiL&X-Amz-Signature=c7fbb0e675f9c3e301f483c72a4d5aa8b39c97be27b6b23b7ba644c1b2df880b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZROG2I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1RU215R1QYEM%2BHcj6DRSFyOzHyvc3%2BE85A5muFuumzwIgNXAXwuW9KBM%2BWHVzedPswORjsx57lwHeuDhwAofRJX8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq3lxGMh15qVf%2FVNyrcAyx8yKDSpY%2FWv3aYKc8ENNG1Nu%2Fir8EKipimC5PXpbKSw4Wwid7KZrWuuGWO32%2BVgv2JWwG8nxigvlDQfnfSTUW3JevgSSKweCxJEcR6RQ2K7E9%2BHF1QhRjPJlfVrJayJAPNEOp9oXAMPJksSAEFTeSru4AkDTvbTappW9o2bEqh5zEG7X%2F0q7YIysaE3hFpqiQp42AmzW4jiuUF%2BXPeWgmpt4iWKGNSWBqf7cunCzjpzTGR%2FlAV6Odsq1fixnAfzPF4%2B%2B8AcwBtXUj2xXVrqIp%2FkSo%2BT%2FxQz19dTC%2FfHawbOUfSiaVzWUwewDDEEF56%2FUd2xt4NKhhA0lHp%2B0skrpBtN35GO4%2BT1WLIbjkzdJgXI0CRKUj8%2B8X6d4lcmXmWKB%2BUIAZn7rw7Ww07mfE8qx5ObpOqNKhGnbCxDZPoqeS9BYadZxV00X76xTucJmGwSJvCmXnNxSJW9QbWS40F1SAFrsxelCnMDje9vIB5HVetTmJMdtkGg5MV4%2Bn7Ygojza36HRGSbBlQMtkVRYZugyjOHiMyXBSYFwOsmkUPXmjROHXP8lzTdB2hd4dJsv2kaK6Sr%2BIIrtz0H%2BTgIdy3LT1n2eHwtFsp7%2FzaOUy1YV5T1qf2jPUcrnQMxIc0MLSM%2BcEGOqUB2n1MKMPJWy9jZ%2FhW35oj7IY2SdZzWD11U2g8iHXlGeFi4t%2FR3PuqmQUbQxSHE1SBJJEtoAWXa3s%2FYQ0hr1F7gAlGTk7hbGTmU39vOPFhruD53rZwKwhaayHjbOIFFcFaHdPdDYJx38K2WXh%2BaOoIROhWoa8ES3RLz8tsv8PF4MebARrCT0GW%2FjfLWW23OopZUl%2FXDZC%2BS15e3ZIewhECHChXLUiL&X-Amz-Signature=7b53be99c0a429c23b71185fec15c9e1fbc0243097b043f58ef13e2daab83577&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZROG2I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1RU215R1QYEM%2BHcj6DRSFyOzHyvc3%2BE85A5muFuumzwIgNXAXwuW9KBM%2BWHVzedPswORjsx57lwHeuDhwAofRJX8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq3lxGMh15qVf%2FVNyrcAyx8yKDSpY%2FWv3aYKc8ENNG1Nu%2Fir8EKipimC5PXpbKSw4Wwid7KZrWuuGWO32%2BVgv2JWwG8nxigvlDQfnfSTUW3JevgSSKweCxJEcR6RQ2K7E9%2BHF1QhRjPJlfVrJayJAPNEOp9oXAMPJksSAEFTeSru4AkDTvbTappW9o2bEqh5zEG7X%2F0q7YIysaE3hFpqiQp42AmzW4jiuUF%2BXPeWgmpt4iWKGNSWBqf7cunCzjpzTGR%2FlAV6Odsq1fixnAfzPF4%2B%2B8AcwBtXUj2xXVrqIp%2FkSo%2BT%2FxQz19dTC%2FfHawbOUfSiaVzWUwewDDEEF56%2FUd2xt4NKhhA0lHp%2B0skrpBtN35GO4%2BT1WLIbjkzdJgXI0CRKUj8%2B8X6d4lcmXmWKB%2BUIAZn7rw7Ww07mfE8qx5ObpOqNKhGnbCxDZPoqeS9BYadZxV00X76xTucJmGwSJvCmXnNxSJW9QbWS40F1SAFrsxelCnMDje9vIB5HVetTmJMdtkGg5MV4%2Bn7Ygojza36HRGSbBlQMtkVRYZugyjOHiMyXBSYFwOsmkUPXmjROHXP8lzTdB2hd4dJsv2kaK6Sr%2BIIrtz0H%2BTgIdy3LT1n2eHwtFsp7%2FzaOUy1YV5T1qf2jPUcrnQMxIc0MLSM%2BcEGOqUB2n1MKMPJWy9jZ%2FhW35oj7IY2SdZzWD11U2g8iHXlGeFi4t%2FR3PuqmQUbQxSHE1SBJJEtoAWXa3s%2FYQ0hr1F7gAlGTk7hbGTmU39vOPFhruD53rZwKwhaayHjbOIFFcFaHdPdDYJx38K2WXh%2BaOoIROhWoa8ES3RLz8tsv8PF4MebARrCT0GW%2FjfLWW23OopZUl%2FXDZC%2BS15e3ZIewhECHChXLUiL&X-Amz-Signature=93bda5f987b87f73d6a200642b9c1816410dfbedd6d79565f70ce3bd7e3ffd91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZROG2I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1RU215R1QYEM%2BHcj6DRSFyOzHyvc3%2BE85A5muFuumzwIgNXAXwuW9KBM%2BWHVzedPswORjsx57lwHeuDhwAofRJX8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq3lxGMh15qVf%2FVNyrcAyx8yKDSpY%2FWv3aYKc8ENNG1Nu%2Fir8EKipimC5PXpbKSw4Wwid7KZrWuuGWO32%2BVgv2JWwG8nxigvlDQfnfSTUW3JevgSSKweCxJEcR6RQ2K7E9%2BHF1QhRjPJlfVrJayJAPNEOp9oXAMPJksSAEFTeSru4AkDTvbTappW9o2bEqh5zEG7X%2F0q7YIysaE3hFpqiQp42AmzW4jiuUF%2BXPeWgmpt4iWKGNSWBqf7cunCzjpzTGR%2FlAV6Odsq1fixnAfzPF4%2B%2B8AcwBtXUj2xXVrqIp%2FkSo%2BT%2FxQz19dTC%2FfHawbOUfSiaVzWUwewDDEEF56%2FUd2xt4NKhhA0lHp%2B0skrpBtN35GO4%2BT1WLIbjkzdJgXI0CRKUj8%2B8X6d4lcmXmWKB%2BUIAZn7rw7Ww07mfE8qx5ObpOqNKhGnbCxDZPoqeS9BYadZxV00X76xTucJmGwSJvCmXnNxSJW9QbWS40F1SAFrsxelCnMDje9vIB5HVetTmJMdtkGg5MV4%2Bn7Ygojza36HRGSbBlQMtkVRYZugyjOHiMyXBSYFwOsmkUPXmjROHXP8lzTdB2hd4dJsv2kaK6Sr%2BIIrtz0H%2BTgIdy3LT1n2eHwtFsp7%2FzaOUy1YV5T1qf2jPUcrnQMxIc0MLSM%2BcEGOqUB2n1MKMPJWy9jZ%2FhW35oj7IY2SdZzWD11U2g8iHXlGeFi4t%2FR3PuqmQUbQxSHE1SBJJEtoAWXa3s%2FYQ0hr1F7gAlGTk7hbGTmU39vOPFhruD53rZwKwhaayHjbOIFFcFaHdPdDYJx38K2WXh%2BaOoIROhWoa8ES3RLz8tsv8PF4MebARrCT0GW%2FjfLWW23OopZUl%2FXDZC%2BS15e3ZIewhECHChXLUiL&X-Amz-Signature=65ae76d0df0673cb38622a51e0749ac8fe8e2d78de845e7da806a8a4d1d1574c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZROG2I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1RU215R1QYEM%2BHcj6DRSFyOzHyvc3%2BE85A5muFuumzwIgNXAXwuW9KBM%2BWHVzedPswORjsx57lwHeuDhwAofRJX8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq3lxGMh15qVf%2FVNyrcAyx8yKDSpY%2FWv3aYKc8ENNG1Nu%2Fir8EKipimC5PXpbKSw4Wwid7KZrWuuGWO32%2BVgv2JWwG8nxigvlDQfnfSTUW3JevgSSKweCxJEcR6RQ2K7E9%2BHF1QhRjPJlfVrJayJAPNEOp9oXAMPJksSAEFTeSru4AkDTvbTappW9o2bEqh5zEG7X%2F0q7YIysaE3hFpqiQp42AmzW4jiuUF%2BXPeWgmpt4iWKGNSWBqf7cunCzjpzTGR%2FlAV6Odsq1fixnAfzPF4%2B%2B8AcwBtXUj2xXVrqIp%2FkSo%2BT%2FxQz19dTC%2FfHawbOUfSiaVzWUwewDDEEF56%2FUd2xt4NKhhA0lHp%2B0skrpBtN35GO4%2BT1WLIbjkzdJgXI0CRKUj8%2B8X6d4lcmXmWKB%2BUIAZn7rw7Ww07mfE8qx5ObpOqNKhGnbCxDZPoqeS9BYadZxV00X76xTucJmGwSJvCmXnNxSJW9QbWS40F1SAFrsxelCnMDje9vIB5HVetTmJMdtkGg5MV4%2Bn7Ygojza36HRGSbBlQMtkVRYZugyjOHiMyXBSYFwOsmkUPXmjROHXP8lzTdB2hd4dJsv2kaK6Sr%2BIIrtz0H%2BTgIdy3LT1n2eHwtFsp7%2FzaOUy1YV5T1qf2jPUcrnQMxIc0MLSM%2BcEGOqUB2n1MKMPJWy9jZ%2FhW35oj7IY2SdZzWD11U2g8iHXlGeFi4t%2FR3PuqmQUbQxSHE1SBJJEtoAWXa3s%2FYQ0hr1F7gAlGTk7hbGTmU39vOPFhruD53rZwKwhaayHjbOIFFcFaHdPdDYJx38K2WXh%2BaOoIROhWoa8ES3RLz8tsv8PF4MebARrCT0GW%2FjfLWW23OopZUl%2FXDZC%2BS15e3ZIewhECHChXLUiL&X-Amz-Signature=a85e36a9a955735e5b69dd4868a8cd7b059baafe9bfa1d178520c1c62a8c622a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZROG2I%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC1RU215R1QYEM%2BHcj6DRSFyOzHyvc3%2BE85A5muFuumzwIgNXAXwuW9KBM%2BWHVzedPswORjsx57lwHeuDhwAofRJX8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLq3lxGMh15qVf%2FVNyrcAyx8yKDSpY%2FWv3aYKc8ENNG1Nu%2Fir8EKipimC5PXpbKSw4Wwid7KZrWuuGWO32%2BVgv2JWwG8nxigvlDQfnfSTUW3JevgSSKweCxJEcR6RQ2K7E9%2BHF1QhRjPJlfVrJayJAPNEOp9oXAMPJksSAEFTeSru4AkDTvbTappW9o2bEqh5zEG7X%2F0q7YIysaE3hFpqiQp42AmzW4jiuUF%2BXPeWgmpt4iWKGNSWBqf7cunCzjpzTGR%2FlAV6Odsq1fixnAfzPF4%2B%2B8AcwBtXUj2xXVrqIp%2FkSo%2BT%2FxQz19dTC%2FfHawbOUfSiaVzWUwewDDEEF56%2FUd2xt4NKhhA0lHp%2B0skrpBtN35GO4%2BT1WLIbjkzdJgXI0CRKUj8%2B8X6d4lcmXmWKB%2BUIAZn7rw7Ww07mfE8qx5ObpOqNKhGnbCxDZPoqeS9BYadZxV00X76xTucJmGwSJvCmXnNxSJW9QbWS40F1SAFrsxelCnMDje9vIB5HVetTmJMdtkGg5MV4%2Bn7Ygojza36HRGSbBlQMtkVRYZugyjOHiMyXBSYFwOsmkUPXmjROHXP8lzTdB2hd4dJsv2kaK6Sr%2BIIrtz0H%2BTgIdy3LT1n2eHwtFsp7%2FzaOUy1YV5T1qf2jPUcrnQMxIc0MLSM%2BcEGOqUB2n1MKMPJWy9jZ%2FhW35oj7IY2SdZzWD11U2g8iHXlGeFi4t%2FR3PuqmQUbQxSHE1SBJJEtoAWXa3s%2FYQ0hr1F7gAlGTk7hbGTmU39vOPFhruD53rZwKwhaayHjbOIFFcFaHdPdDYJx38K2WXh%2BaOoIROhWoa8ES3RLz8tsv8PF4MebARrCT0GW%2FjfLWW23OopZUl%2FXDZC%2BS15e3ZIewhECHChXLUiL&X-Amz-Signature=3163395a957d15816d8496f96c9f25135c25137e8418cd852c1d5de31c8156a8&X-Amz-SignedHeaders=host&x-id=GetObject)
