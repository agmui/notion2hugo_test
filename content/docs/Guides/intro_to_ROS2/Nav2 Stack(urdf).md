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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDVXX6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVkngX7aMjw1ZsxOunT1gRVEujRWz1W44uc2l%2FJ7weAIgFOLTyqMu15G%2BqsjN4RyAoXp872aEISM%2BG%2BXBMzyoZHAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGQVZG21Ea04VBr2yrcA0tTaOb1DSSAr1n6XMdSiiZBJ0rAglqOjxhVcjEn%2BrZQizM9TN4KB1LgdfybaqInPbNr4Ffs99Yv7sv50JMg2ce1RUrdYe2ed0FnTczqiBcP0%2Be2w6uJywQO9nxneafPirRpG8TsTmOaGLN%2BkRjv%2FxycluHmndB5dSdYnBVFRVYp%2BAPx8W8FMnVOJcgU1o5qDe2QqW4b1pAZIxP%2FEvRot88YMPkBZ8GJMDdkSQAm4mfSJm9yDwY4T1ejfKaj5UcaHR33kseYBVzugRW%2BlsN2CChhD3knR0eAVofN1qt9mdkZEP4rMk7bOHbhNDSnRbyl4Vby70bJw4iVTcUMQPPd78IcCCjwkOF7qXhlI5N4a2iLNJ1iRk%2FKFdatMy5BET16DVxk8Gbo5IOXSNT8%2Ba%2FjGwkUhxwGfBsfaeNOBbEw0ufuIX9pjIQ5oJ8Mi6ojmIanV9U0eok9L49P856gzk6dMTKMyvUzj9oMc1r0mbugMCkvCBHyfjj9BmLiumHIly3xnenOS%2FCiWYFqxxlwNe0qy0ItLx2s2mh0jEG7WirgQbmu%2BcPBeZ77Ib0izT%2F9A2Y%2BOqIyIkHh19udzlt4FJkY3x%2FaLJuKDkVQ6Ona11KjGancBwfZ4IUsJv5cyvjhMJ%2F9lb4GOqUBqQVExzy09oSOtsShIqTiE1k%2BahYZvPajwe%2BvzL6z5JYZj30taYLrhRGg8%2FALTUUDZjeCnDcvIMv1DxN%2BVQDslbbnKQqRCxYHZkHh23EwT9IENbjtVEoFGS6m2exNN3V1Zzc53IEMII%2FdL9yU1hq9ZFJsk2uvtk81QHLW2OMGPHddPpd4sK7%2FnyJVgw5fUHW2iX6%2BglpFDQliobjBoatLKhMDWwCl&X-Amz-Signature=788445c1f15735f43818d4528c546b25c87ab1a172dfbaed07cc02e705662788&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDVXX6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVkngX7aMjw1ZsxOunT1gRVEujRWz1W44uc2l%2FJ7weAIgFOLTyqMu15G%2BqsjN4RyAoXp872aEISM%2BG%2BXBMzyoZHAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGQVZG21Ea04VBr2yrcA0tTaOb1DSSAr1n6XMdSiiZBJ0rAglqOjxhVcjEn%2BrZQizM9TN4KB1LgdfybaqInPbNr4Ffs99Yv7sv50JMg2ce1RUrdYe2ed0FnTczqiBcP0%2Be2w6uJywQO9nxneafPirRpG8TsTmOaGLN%2BkRjv%2FxycluHmndB5dSdYnBVFRVYp%2BAPx8W8FMnVOJcgU1o5qDe2QqW4b1pAZIxP%2FEvRot88YMPkBZ8GJMDdkSQAm4mfSJm9yDwY4T1ejfKaj5UcaHR33kseYBVzugRW%2BlsN2CChhD3knR0eAVofN1qt9mdkZEP4rMk7bOHbhNDSnRbyl4Vby70bJw4iVTcUMQPPd78IcCCjwkOF7qXhlI5N4a2iLNJ1iRk%2FKFdatMy5BET16DVxk8Gbo5IOXSNT8%2Ba%2FjGwkUhxwGfBsfaeNOBbEw0ufuIX9pjIQ5oJ8Mi6ojmIanV9U0eok9L49P856gzk6dMTKMyvUzj9oMc1r0mbugMCkvCBHyfjj9BmLiumHIly3xnenOS%2FCiWYFqxxlwNe0qy0ItLx2s2mh0jEG7WirgQbmu%2BcPBeZ77Ib0izT%2F9A2Y%2BOqIyIkHh19udzlt4FJkY3x%2FaLJuKDkVQ6Ona11KjGancBwfZ4IUsJv5cyvjhMJ%2F9lb4GOqUBqQVExzy09oSOtsShIqTiE1k%2BahYZvPajwe%2BvzL6z5JYZj30taYLrhRGg8%2FALTUUDZjeCnDcvIMv1DxN%2BVQDslbbnKQqRCxYHZkHh23EwT9IENbjtVEoFGS6m2exNN3V1Zzc53IEMII%2FdL9yU1hq9ZFJsk2uvtk81QHLW2OMGPHddPpd4sK7%2FnyJVgw5fUHW2iX6%2BglpFDQliobjBoatLKhMDWwCl&X-Amz-Signature=c95a82696f8f69662a96bb9987f29e0ae21ef80058e4342de39a21d03143c97e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDVXX6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVkngX7aMjw1ZsxOunT1gRVEujRWz1W44uc2l%2FJ7weAIgFOLTyqMu15G%2BqsjN4RyAoXp872aEISM%2BG%2BXBMzyoZHAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGQVZG21Ea04VBr2yrcA0tTaOb1DSSAr1n6XMdSiiZBJ0rAglqOjxhVcjEn%2BrZQizM9TN4KB1LgdfybaqInPbNr4Ffs99Yv7sv50JMg2ce1RUrdYe2ed0FnTczqiBcP0%2Be2w6uJywQO9nxneafPirRpG8TsTmOaGLN%2BkRjv%2FxycluHmndB5dSdYnBVFRVYp%2BAPx8W8FMnVOJcgU1o5qDe2QqW4b1pAZIxP%2FEvRot88YMPkBZ8GJMDdkSQAm4mfSJm9yDwY4T1ejfKaj5UcaHR33kseYBVzugRW%2BlsN2CChhD3knR0eAVofN1qt9mdkZEP4rMk7bOHbhNDSnRbyl4Vby70bJw4iVTcUMQPPd78IcCCjwkOF7qXhlI5N4a2iLNJ1iRk%2FKFdatMy5BET16DVxk8Gbo5IOXSNT8%2Ba%2FjGwkUhxwGfBsfaeNOBbEw0ufuIX9pjIQ5oJ8Mi6ojmIanV9U0eok9L49P856gzk6dMTKMyvUzj9oMc1r0mbugMCkvCBHyfjj9BmLiumHIly3xnenOS%2FCiWYFqxxlwNe0qy0ItLx2s2mh0jEG7WirgQbmu%2BcPBeZ77Ib0izT%2F9A2Y%2BOqIyIkHh19udzlt4FJkY3x%2FaLJuKDkVQ6Ona11KjGancBwfZ4IUsJv5cyvjhMJ%2F9lb4GOqUBqQVExzy09oSOtsShIqTiE1k%2BahYZvPajwe%2BvzL6z5JYZj30taYLrhRGg8%2FALTUUDZjeCnDcvIMv1DxN%2BVQDslbbnKQqRCxYHZkHh23EwT9IENbjtVEoFGS6m2exNN3V1Zzc53IEMII%2FdL9yU1hq9ZFJsk2uvtk81QHLW2OMGPHddPpd4sK7%2FnyJVgw5fUHW2iX6%2BglpFDQliobjBoatLKhMDWwCl&X-Amz-Signature=9aa3e96e04750bd9570a2181abf2229fb8fedc4d15468bddef172ef491a42345&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDVXX6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVkngX7aMjw1ZsxOunT1gRVEujRWz1W44uc2l%2FJ7weAIgFOLTyqMu15G%2BqsjN4RyAoXp872aEISM%2BG%2BXBMzyoZHAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGQVZG21Ea04VBr2yrcA0tTaOb1DSSAr1n6XMdSiiZBJ0rAglqOjxhVcjEn%2BrZQizM9TN4KB1LgdfybaqInPbNr4Ffs99Yv7sv50JMg2ce1RUrdYe2ed0FnTczqiBcP0%2Be2w6uJywQO9nxneafPirRpG8TsTmOaGLN%2BkRjv%2FxycluHmndB5dSdYnBVFRVYp%2BAPx8W8FMnVOJcgU1o5qDe2QqW4b1pAZIxP%2FEvRot88YMPkBZ8GJMDdkSQAm4mfSJm9yDwY4T1ejfKaj5UcaHR33kseYBVzugRW%2BlsN2CChhD3knR0eAVofN1qt9mdkZEP4rMk7bOHbhNDSnRbyl4Vby70bJw4iVTcUMQPPd78IcCCjwkOF7qXhlI5N4a2iLNJ1iRk%2FKFdatMy5BET16DVxk8Gbo5IOXSNT8%2Ba%2FjGwkUhxwGfBsfaeNOBbEw0ufuIX9pjIQ5oJ8Mi6ojmIanV9U0eok9L49P856gzk6dMTKMyvUzj9oMc1r0mbugMCkvCBHyfjj9BmLiumHIly3xnenOS%2FCiWYFqxxlwNe0qy0ItLx2s2mh0jEG7WirgQbmu%2BcPBeZ77Ib0izT%2F9A2Y%2BOqIyIkHh19udzlt4FJkY3x%2FaLJuKDkVQ6Ona11KjGancBwfZ4IUsJv5cyvjhMJ%2F9lb4GOqUBqQVExzy09oSOtsShIqTiE1k%2BahYZvPajwe%2BvzL6z5JYZj30taYLrhRGg8%2FALTUUDZjeCnDcvIMv1DxN%2BVQDslbbnKQqRCxYHZkHh23EwT9IENbjtVEoFGS6m2exNN3V1Zzc53IEMII%2FdL9yU1hq9ZFJsk2uvtk81QHLW2OMGPHddPpd4sK7%2FnyJVgw5fUHW2iX6%2BglpFDQliobjBoatLKhMDWwCl&X-Amz-Signature=3aaccf08b608c56bd048c4446ac155701c70d6af48889de4dacbcd87402d92ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDVXX6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVkngX7aMjw1ZsxOunT1gRVEujRWz1W44uc2l%2FJ7weAIgFOLTyqMu15G%2BqsjN4RyAoXp872aEISM%2BG%2BXBMzyoZHAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGQVZG21Ea04VBr2yrcA0tTaOb1DSSAr1n6XMdSiiZBJ0rAglqOjxhVcjEn%2BrZQizM9TN4KB1LgdfybaqInPbNr4Ffs99Yv7sv50JMg2ce1RUrdYe2ed0FnTczqiBcP0%2Be2w6uJywQO9nxneafPirRpG8TsTmOaGLN%2BkRjv%2FxycluHmndB5dSdYnBVFRVYp%2BAPx8W8FMnVOJcgU1o5qDe2QqW4b1pAZIxP%2FEvRot88YMPkBZ8GJMDdkSQAm4mfSJm9yDwY4T1ejfKaj5UcaHR33kseYBVzugRW%2BlsN2CChhD3knR0eAVofN1qt9mdkZEP4rMk7bOHbhNDSnRbyl4Vby70bJw4iVTcUMQPPd78IcCCjwkOF7qXhlI5N4a2iLNJ1iRk%2FKFdatMy5BET16DVxk8Gbo5IOXSNT8%2Ba%2FjGwkUhxwGfBsfaeNOBbEw0ufuIX9pjIQ5oJ8Mi6ojmIanV9U0eok9L49P856gzk6dMTKMyvUzj9oMc1r0mbugMCkvCBHyfjj9BmLiumHIly3xnenOS%2FCiWYFqxxlwNe0qy0ItLx2s2mh0jEG7WirgQbmu%2BcPBeZ77Ib0izT%2F9A2Y%2BOqIyIkHh19udzlt4FJkY3x%2FaLJuKDkVQ6Ona11KjGancBwfZ4IUsJv5cyvjhMJ%2F9lb4GOqUBqQVExzy09oSOtsShIqTiE1k%2BahYZvPajwe%2BvzL6z5JYZj30taYLrhRGg8%2FALTUUDZjeCnDcvIMv1DxN%2BVQDslbbnKQqRCxYHZkHh23EwT9IENbjtVEoFGS6m2exNN3V1Zzc53IEMII%2FdL9yU1hq9ZFJsk2uvtk81QHLW2OMGPHddPpd4sK7%2FnyJVgw5fUHW2iX6%2BglpFDQliobjBoatLKhMDWwCl&X-Amz-Signature=24d8cc48c82c2f34cf51d773b6221ceeb385c75935a263b1ad573d1ae100aaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZDVXX6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwVkngX7aMjw1ZsxOunT1gRVEujRWz1W44uc2l%2FJ7weAIgFOLTyqMu15G%2BqsjN4RyAoXp872aEISM%2BG%2BXBMzyoZHAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGQVZG21Ea04VBr2yrcA0tTaOb1DSSAr1n6XMdSiiZBJ0rAglqOjxhVcjEn%2BrZQizM9TN4KB1LgdfybaqInPbNr4Ffs99Yv7sv50JMg2ce1RUrdYe2ed0FnTczqiBcP0%2Be2w6uJywQO9nxneafPirRpG8TsTmOaGLN%2BkRjv%2FxycluHmndB5dSdYnBVFRVYp%2BAPx8W8FMnVOJcgU1o5qDe2QqW4b1pAZIxP%2FEvRot88YMPkBZ8GJMDdkSQAm4mfSJm9yDwY4T1ejfKaj5UcaHR33kseYBVzugRW%2BlsN2CChhD3knR0eAVofN1qt9mdkZEP4rMk7bOHbhNDSnRbyl4Vby70bJw4iVTcUMQPPd78IcCCjwkOF7qXhlI5N4a2iLNJ1iRk%2FKFdatMy5BET16DVxk8Gbo5IOXSNT8%2Ba%2FjGwkUhxwGfBsfaeNOBbEw0ufuIX9pjIQ5oJ8Mi6ojmIanV9U0eok9L49P856gzk6dMTKMyvUzj9oMc1r0mbugMCkvCBHyfjj9BmLiumHIly3xnenOS%2FCiWYFqxxlwNe0qy0ItLx2s2mh0jEG7WirgQbmu%2BcPBeZ77Ib0izT%2F9A2Y%2BOqIyIkHh19udzlt4FJkY3x%2FaLJuKDkVQ6Ona11KjGancBwfZ4IUsJv5cyvjhMJ%2F9lb4GOqUBqQVExzy09oSOtsShIqTiE1k%2BahYZvPajwe%2BvzL6z5JYZj30taYLrhRGg8%2FALTUUDZjeCnDcvIMv1DxN%2BVQDslbbnKQqRCxYHZkHh23EwT9IENbjtVEoFGS6m2exNN3V1Zzc53IEMII%2FdL9yU1hq9ZFJsk2uvtk81QHLW2OMGPHddPpd4sK7%2FnyJVgw5fUHW2iX6%2BglpFDQliobjBoatLKhMDWwCl&X-Amz-Signature=12174ebf98ae51d5e5b48e8664b36b88a8222a9d82adceecafad79cdf6e74d00&X-Amz-SignedHeaders=host&x-id=GetObject)
