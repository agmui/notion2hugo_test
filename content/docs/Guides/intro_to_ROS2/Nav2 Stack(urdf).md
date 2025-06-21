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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4AETXJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5Rw%2FUtGvRXmU066q%2FXxwOWT%2BrVHIHjrnOyFbBDyOWAiEA6V5gs3we1FXXMcNzIRUI5CPxYu83rjr677fZ2EeIH8EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hwboYf5hG%2BG50KCrcA%2BQjbMvsJo9kt963aABUgfzkL8V01fcpxF993C%2FI%2FGqQD5Ng1JiLOBTdb%2BvLcxx%2BM6saRn2ujvBxsvlBHte7oK7DD9t4i5llJacwCX6TZBHeaT2OSnU6sIEUXVyuXdetNprBsL%2BMbKo6xpIrV4cUjPWRqxT7wq75n2c8cBIdrDbnfiJC3NlSHLSPE7Ei1Vd5zAs60oOXVFRr6c0xIIfxgVRYYQsdGYTZ8Zn5ZYbrQPwYnfEKnisK8TQW9ojoRezRxr%2BhWIpCfzaTvAUk74JJ3qOxZRhD7CPCo019A6Fpvx3DHJdeSMvMwUc9JwMSaWzM1lKm1F8HwTQlBgxGRuCnbiqDcZXEbvc%2FqSG4ZNDDYJk5GkuD0FSnR7i%2FSP2BidMxi6JsdaKhYQUE%2FdG7ZfLYYTleypD41JDy%2Bfzl7LdHlWrbaeb7uz0bkc%2Bd02FMH2VsgNe303W46FP4oHzQvhS3GaDIAXoUq34jQO40yVf6IjWVJgdN0LLXHx%2ByJWWL%2B7LGvjl9hSTkAYkDOpP%2BjZjEIxixNkaDgCh2vHp7eoj2F%2F%2BH9pa78SxQaSmzIaA%2FpJ6kEGt7nT5OtKcF1la4ediVPoenskYIucUS3NkBRxt0xKyKRTzRdEPsxuLwfQZUMOPV2cIGOqUBTuMSnBgHPaPhH8DabuEyzEvUWHr9fhuwLxwMHQ%2FHRoZUDeyMZ7NYl5uh8w3W9aj5ztrtQ3BdZcaBceex7MI1FvmEpOr1PnhRh0nQqcYnRPxgrj8rsHNAvs8gQH%2B3kejnJYzxfS5jL%2BTywwo3%2BjXkGywY1Tnc%2FtbwnJVgqskuVg%2Bbh9XLSXm0iU7yZwpJeV3Dm86BtHUUbGS76J8CMBpDQjYrhsSU&X-Amz-Signature=83706cfa8262d7b2813fb05b06e87724461806257c0bab8db2819bb9f261cb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4AETXJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5Rw%2FUtGvRXmU066q%2FXxwOWT%2BrVHIHjrnOyFbBDyOWAiEA6V5gs3we1FXXMcNzIRUI5CPxYu83rjr677fZ2EeIH8EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hwboYf5hG%2BG50KCrcA%2BQjbMvsJo9kt963aABUgfzkL8V01fcpxF993C%2FI%2FGqQD5Ng1JiLOBTdb%2BvLcxx%2BM6saRn2ujvBxsvlBHte7oK7DD9t4i5llJacwCX6TZBHeaT2OSnU6sIEUXVyuXdetNprBsL%2BMbKo6xpIrV4cUjPWRqxT7wq75n2c8cBIdrDbnfiJC3NlSHLSPE7Ei1Vd5zAs60oOXVFRr6c0xIIfxgVRYYQsdGYTZ8Zn5ZYbrQPwYnfEKnisK8TQW9ojoRezRxr%2BhWIpCfzaTvAUk74JJ3qOxZRhD7CPCo019A6Fpvx3DHJdeSMvMwUc9JwMSaWzM1lKm1F8HwTQlBgxGRuCnbiqDcZXEbvc%2FqSG4ZNDDYJk5GkuD0FSnR7i%2FSP2BidMxi6JsdaKhYQUE%2FdG7ZfLYYTleypD41JDy%2Bfzl7LdHlWrbaeb7uz0bkc%2Bd02FMH2VsgNe303W46FP4oHzQvhS3GaDIAXoUq34jQO40yVf6IjWVJgdN0LLXHx%2ByJWWL%2B7LGvjl9hSTkAYkDOpP%2BjZjEIxixNkaDgCh2vHp7eoj2F%2F%2BH9pa78SxQaSmzIaA%2FpJ6kEGt7nT5OtKcF1la4ediVPoenskYIucUS3NkBRxt0xKyKRTzRdEPsxuLwfQZUMOPV2cIGOqUBTuMSnBgHPaPhH8DabuEyzEvUWHr9fhuwLxwMHQ%2FHRoZUDeyMZ7NYl5uh8w3W9aj5ztrtQ3BdZcaBceex7MI1FvmEpOr1PnhRh0nQqcYnRPxgrj8rsHNAvs8gQH%2B3kejnJYzxfS5jL%2BTywwo3%2BjXkGywY1Tnc%2FtbwnJVgqskuVg%2Bbh9XLSXm0iU7yZwpJeV3Dm86BtHUUbGS76J8CMBpDQjYrhsSU&X-Amz-Signature=9da14689d6d25fefbcc8d90a38f908c26669474492c9e65aba1480b0ff034559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4AETXJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5Rw%2FUtGvRXmU066q%2FXxwOWT%2BrVHIHjrnOyFbBDyOWAiEA6V5gs3we1FXXMcNzIRUI5CPxYu83rjr677fZ2EeIH8EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hwboYf5hG%2BG50KCrcA%2BQjbMvsJo9kt963aABUgfzkL8V01fcpxF993C%2FI%2FGqQD5Ng1JiLOBTdb%2BvLcxx%2BM6saRn2ujvBxsvlBHte7oK7DD9t4i5llJacwCX6TZBHeaT2OSnU6sIEUXVyuXdetNprBsL%2BMbKo6xpIrV4cUjPWRqxT7wq75n2c8cBIdrDbnfiJC3NlSHLSPE7Ei1Vd5zAs60oOXVFRr6c0xIIfxgVRYYQsdGYTZ8Zn5ZYbrQPwYnfEKnisK8TQW9ojoRezRxr%2BhWIpCfzaTvAUk74JJ3qOxZRhD7CPCo019A6Fpvx3DHJdeSMvMwUc9JwMSaWzM1lKm1F8HwTQlBgxGRuCnbiqDcZXEbvc%2FqSG4ZNDDYJk5GkuD0FSnR7i%2FSP2BidMxi6JsdaKhYQUE%2FdG7ZfLYYTleypD41JDy%2Bfzl7LdHlWrbaeb7uz0bkc%2Bd02FMH2VsgNe303W46FP4oHzQvhS3GaDIAXoUq34jQO40yVf6IjWVJgdN0LLXHx%2ByJWWL%2B7LGvjl9hSTkAYkDOpP%2BjZjEIxixNkaDgCh2vHp7eoj2F%2F%2BH9pa78SxQaSmzIaA%2FpJ6kEGt7nT5OtKcF1la4ediVPoenskYIucUS3NkBRxt0xKyKRTzRdEPsxuLwfQZUMOPV2cIGOqUBTuMSnBgHPaPhH8DabuEyzEvUWHr9fhuwLxwMHQ%2FHRoZUDeyMZ7NYl5uh8w3W9aj5ztrtQ3BdZcaBceex7MI1FvmEpOr1PnhRh0nQqcYnRPxgrj8rsHNAvs8gQH%2B3kejnJYzxfS5jL%2BTywwo3%2BjXkGywY1Tnc%2FtbwnJVgqskuVg%2Bbh9XLSXm0iU7yZwpJeV3Dm86BtHUUbGS76J8CMBpDQjYrhsSU&X-Amz-Signature=bc438a44f365a5a72eccfcbe17b938234762d9126177b3a6a9b410f0e660bfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4AETXJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5Rw%2FUtGvRXmU066q%2FXxwOWT%2BrVHIHjrnOyFbBDyOWAiEA6V5gs3we1FXXMcNzIRUI5CPxYu83rjr677fZ2EeIH8EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hwboYf5hG%2BG50KCrcA%2BQjbMvsJo9kt963aABUgfzkL8V01fcpxF993C%2FI%2FGqQD5Ng1JiLOBTdb%2BvLcxx%2BM6saRn2ujvBxsvlBHte7oK7DD9t4i5llJacwCX6TZBHeaT2OSnU6sIEUXVyuXdetNprBsL%2BMbKo6xpIrV4cUjPWRqxT7wq75n2c8cBIdrDbnfiJC3NlSHLSPE7Ei1Vd5zAs60oOXVFRr6c0xIIfxgVRYYQsdGYTZ8Zn5ZYbrQPwYnfEKnisK8TQW9ojoRezRxr%2BhWIpCfzaTvAUk74JJ3qOxZRhD7CPCo019A6Fpvx3DHJdeSMvMwUc9JwMSaWzM1lKm1F8HwTQlBgxGRuCnbiqDcZXEbvc%2FqSG4ZNDDYJk5GkuD0FSnR7i%2FSP2BidMxi6JsdaKhYQUE%2FdG7ZfLYYTleypD41JDy%2Bfzl7LdHlWrbaeb7uz0bkc%2Bd02FMH2VsgNe303W46FP4oHzQvhS3GaDIAXoUq34jQO40yVf6IjWVJgdN0LLXHx%2ByJWWL%2B7LGvjl9hSTkAYkDOpP%2BjZjEIxixNkaDgCh2vHp7eoj2F%2F%2BH9pa78SxQaSmzIaA%2FpJ6kEGt7nT5OtKcF1la4ediVPoenskYIucUS3NkBRxt0xKyKRTzRdEPsxuLwfQZUMOPV2cIGOqUBTuMSnBgHPaPhH8DabuEyzEvUWHr9fhuwLxwMHQ%2FHRoZUDeyMZ7NYl5uh8w3W9aj5ztrtQ3BdZcaBceex7MI1FvmEpOr1PnhRh0nQqcYnRPxgrj8rsHNAvs8gQH%2B3kejnJYzxfS5jL%2BTywwo3%2BjXkGywY1Tnc%2FtbwnJVgqskuVg%2Bbh9XLSXm0iU7yZwpJeV3Dm86BtHUUbGS76J8CMBpDQjYrhsSU&X-Amz-Signature=708f9cec3a5cbb091fac759b61cdbeeb2605c59fe28585a05ccf65690680cf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4AETXJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5Rw%2FUtGvRXmU066q%2FXxwOWT%2BrVHIHjrnOyFbBDyOWAiEA6V5gs3we1FXXMcNzIRUI5CPxYu83rjr677fZ2EeIH8EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hwboYf5hG%2BG50KCrcA%2BQjbMvsJo9kt963aABUgfzkL8V01fcpxF993C%2FI%2FGqQD5Ng1JiLOBTdb%2BvLcxx%2BM6saRn2ujvBxsvlBHte7oK7DD9t4i5llJacwCX6TZBHeaT2OSnU6sIEUXVyuXdetNprBsL%2BMbKo6xpIrV4cUjPWRqxT7wq75n2c8cBIdrDbnfiJC3NlSHLSPE7Ei1Vd5zAs60oOXVFRr6c0xIIfxgVRYYQsdGYTZ8Zn5ZYbrQPwYnfEKnisK8TQW9ojoRezRxr%2BhWIpCfzaTvAUk74JJ3qOxZRhD7CPCo019A6Fpvx3DHJdeSMvMwUc9JwMSaWzM1lKm1F8HwTQlBgxGRuCnbiqDcZXEbvc%2FqSG4ZNDDYJk5GkuD0FSnR7i%2FSP2BidMxi6JsdaKhYQUE%2FdG7ZfLYYTleypD41JDy%2Bfzl7LdHlWrbaeb7uz0bkc%2Bd02FMH2VsgNe303W46FP4oHzQvhS3GaDIAXoUq34jQO40yVf6IjWVJgdN0LLXHx%2ByJWWL%2B7LGvjl9hSTkAYkDOpP%2BjZjEIxixNkaDgCh2vHp7eoj2F%2F%2BH9pa78SxQaSmzIaA%2FpJ6kEGt7nT5OtKcF1la4ediVPoenskYIucUS3NkBRxt0xKyKRTzRdEPsxuLwfQZUMOPV2cIGOqUBTuMSnBgHPaPhH8DabuEyzEvUWHr9fhuwLxwMHQ%2FHRoZUDeyMZ7NYl5uh8w3W9aj5ztrtQ3BdZcaBceex7MI1FvmEpOr1PnhRh0nQqcYnRPxgrj8rsHNAvs8gQH%2B3kejnJYzxfS5jL%2BTywwo3%2BjXkGywY1Tnc%2FtbwnJVgqskuVg%2Bbh9XLSXm0iU7yZwpJeV3Dm86BtHUUbGS76J8CMBpDQjYrhsSU&X-Amz-Signature=760c552dcbfabfb1e11f9f87519d5a2a63dd41ad0cda4cc62401089f4e393c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4AETXJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf5Rw%2FUtGvRXmU066q%2FXxwOWT%2BrVHIHjrnOyFbBDyOWAiEA6V5gs3we1FXXMcNzIRUI5CPxYu83rjr677fZ2EeIH8EqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3hwboYf5hG%2BG50KCrcA%2BQjbMvsJo9kt963aABUgfzkL8V01fcpxF993C%2FI%2FGqQD5Ng1JiLOBTdb%2BvLcxx%2BM6saRn2ujvBxsvlBHte7oK7DD9t4i5llJacwCX6TZBHeaT2OSnU6sIEUXVyuXdetNprBsL%2BMbKo6xpIrV4cUjPWRqxT7wq75n2c8cBIdrDbnfiJC3NlSHLSPE7Ei1Vd5zAs60oOXVFRr6c0xIIfxgVRYYQsdGYTZ8Zn5ZYbrQPwYnfEKnisK8TQW9ojoRezRxr%2BhWIpCfzaTvAUk74JJ3qOxZRhD7CPCo019A6Fpvx3DHJdeSMvMwUc9JwMSaWzM1lKm1F8HwTQlBgxGRuCnbiqDcZXEbvc%2FqSG4ZNDDYJk5GkuD0FSnR7i%2FSP2BidMxi6JsdaKhYQUE%2FdG7ZfLYYTleypD41JDy%2Bfzl7LdHlWrbaeb7uz0bkc%2Bd02FMH2VsgNe303W46FP4oHzQvhS3GaDIAXoUq34jQO40yVf6IjWVJgdN0LLXHx%2ByJWWL%2B7LGvjl9hSTkAYkDOpP%2BjZjEIxixNkaDgCh2vHp7eoj2F%2F%2BH9pa78SxQaSmzIaA%2FpJ6kEGt7nT5OtKcF1la4ediVPoenskYIucUS3NkBRxt0xKyKRTzRdEPsxuLwfQZUMOPV2cIGOqUBTuMSnBgHPaPhH8DabuEyzEvUWHr9fhuwLxwMHQ%2FHRoZUDeyMZ7NYl5uh8w3W9aj5ztrtQ3BdZcaBceex7MI1FvmEpOr1PnhRh0nQqcYnRPxgrj8rsHNAvs8gQH%2B3kejnJYzxfS5jL%2BTywwo3%2BjXkGywY1Tnc%2FtbwnJVgqskuVg%2Bbh9XLSXm0iU7yZwpJeV3Dm86BtHUUbGS76J8CMBpDQjYrhsSU&X-Amz-Signature=8ac7cbc9feb94b5c52f6bf072ae306cbbc5f098ec41e7f5da6a1c2e781a6fd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
