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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=e1738889195178a35d47cab068659ac3c0ad3123dde8ea61cf9e31923a358d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=9f3fb0317975a3bcf215c08f32ead1a3c4919c3a53136f69b42bb963baf80f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=b9a72fa1b763dbeb2b6aa5266206f0fd9e848caceab1687f2221147d6a749f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=77fbc5f506d4326b465edf6c129551b6a7f0244b845406cf0a63009c3bbd9cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=1299d0c05a5deca68f0a6346cc8cd2918d9b127b66b7c6f6fe024c9ac158a1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJI65O%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDLsPfN5thjj6IS0Jjh7TVixZE%2BiqFzLDWNGieU7jKsRQIgULUgPGOJJaZY68v%2FNrxoXPxVsHU%2FMCRVcd5P3o4k25kq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHUe5%2FVVvvvBAoiK%2BCrcAz8UkuAxadgXkOegj7N2G9e9%2BkeAlHltybl4I4h0BV3MWg1jYwAnKMd%2B%2BG3d97%2B8AK8zF4jgFj7WaR4jpTk%2FFCXT1zEUG%2Fo%2BEepAzhPPT%2BLrhAWFk%2Fc6AR1UqqFWu6Ok1VambR6PxSe4UTi1riViQ8GxRtLHgqP0t48qpvFTw3fQlgON6at42JYeKW2hkwwVjDpGPqmsnEXrH3mdToWLoofzmVqjijk2FQEmoMgITVGGdCfN%2FeQYEJenwI02Y2fqUDo%2B0JP5M%2FTYZpprCSAxfcRzSKD%2B7XNInKfuwugUwBb1oL42W5WEjn3ObOfCK667hNaKINhRqF6zit%2BG1xjIvWZKjKK08I6Ia8%2B2aQ0Qg05fr93Uh9N6uKt4fiUciB4J7P23Q4QK4oh9WfRWHjmmEgog0wo6m7zPV6TwrYTVE2BKKKlpFy8XSJTiXVROin5kJ2wVudSZsbwW0VPhcM5u6VWAuIcnvp2VKoplneon4fG%2Fkcit4uL9hZjnh3M%2BwXNbsrVoL3nAMuxUNhsc%2FipCqEl%2FMsc5poX8ZLaTJWaxhcpEQhLP%2F5f4BXs9P0KAi98tSTlEm6bRYScpNLKo3y2LfezWtnTUUrMH6jDnesLEcmfMDvhREdMwMghL36C3MKek1cMGOqUBJFF0MPXI5FiKV2%2FFqlkrjOt9tluBjot7ZOpQJNGDddl7Qa7XbqVfuwiNHvRLsgcjs7eH6JKV6MUDCcAQmXDueWmoaa1M%2BNGxXbRTIyUZLiezgSw9o6tfgqmgdwvg68YSrIPLH5w5r2PedXmu6JlgwJWG%2FM7HA0hyOtP39Tt9z%2BVm7xHZs8Yc%2Bl5Z9NyRnLxnmvH%2Bxa3j2Mj73ihXZeVUeZ4PAzE9&X-Amz-Signature=210bad621af66da23582cafaebb52af9721e0d90fdb9434454b4d2c35acc5069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
