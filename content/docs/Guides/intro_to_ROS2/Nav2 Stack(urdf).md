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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTC5KJG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDfL%2BCWmADZ4WFkGGyCVl6%2FdkR1Cu0olKXthewJq3X%2BRwIgQhMfAC6Nj0GLczbJF%2FoVzAK7EcH%2FkTr0LS3VjqJo87oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNSIoVJD5mjAHBhdMyrcA25ypQWTrhSPoe2cxfA%2F7uVdyJHsWs7Yrlyxmug541Hd6X%2F8Ah8YEO6nD3rm%2Bn3%2FvmaXMXLO%2BY4ZRrELXLhNddheWclnP3R6REGGd8aGQdULJ3v%2BnpyV57ZWI%2Fbq0Ka5NUdTSzasqgLu4E1pqAUweS1k5ugQPIVYLBdFpnIi%2BbTlMBgq1ap46lAJkWIiEaxJPLEJJpPEJ94iCdTZT%2BDw3wAnP1bRg%2BZIMVHdftvE4OqVjhJwXJsMyMVAZenpqFBMoD5Thv97wlsI%2FPqWbiLaMmWXbhl%2BCV9MBXWdHAtzzJwx29fNKaKsAO0bEbyuXsTiwXpYRcZBE0cjxTRyKoi1oPNCshTR%2B7hGtLYqZxzbpRxqNqJFI3o6GQ6vyABfq5dIn5PV9nZqE2hsvAzhF95C9kzU7Ks5Tf6E9UL%2F%2Fpu%2Fd32paBG%2BRTKcWJYQc6JvD%2FrAygQ7Q4RQRLdlqt%2B43HTAXykm7cDv3UGDSRKJjSbEhvvgLnvg4MSzEHnwezXEFrtE4CUk0tS%2BGRYmRjJWNm%2FNbTE3yDl461Nnmsl7%2B%2F02EANE9S%2BslhgOLZSWIZ%2FKL%2FTZzL8%2BB1EtjVGRGBXSVHVZWxsxk30GQBwllGf0UaVBRG7QnelPAnMK3%2BmwWHm%2BMKmF1MMGOqUBRqRmIW9oVpxNrozQ6s9OqcoGSkzPSgbyjgh7MF1bgyeHZowZYrhnoaqqo%2FxuZNpUEC9JfGm4e8onALB5nBTL5fSNsKqw7KDZ%2FzSDh00ZnRjtzwGcKVcC3yOKHmHb4VJK%2FfeRRlVUPx%2BHX%2BNvCjCV5b9jMOdFu6S3Kap87ZvqMLP5NnFnyD1kCe9k668PAwxGcpSuA9SId7sJcwPqPz1QoHt8mAm4&X-Amz-Signature=1fa8629baa6ee98adee5513c5fe049086204baa2a2051c08cf953aa1b0fb26e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTC5KJG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDfL%2BCWmADZ4WFkGGyCVl6%2FdkR1Cu0olKXthewJq3X%2BRwIgQhMfAC6Nj0GLczbJF%2FoVzAK7EcH%2FkTr0LS3VjqJo87oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNSIoVJD5mjAHBhdMyrcA25ypQWTrhSPoe2cxfA%2F7uVdyJHsWs7Yrlyxmug541Hd6X%2F8Ah8YEO6nD3rm%2Bn3%2FvmaXMXLO%2BY4ZRrELXLhNddheWclnP3R6REGGd8aGQdULJ3v%2BnpyV57ZWI%2Fbq0Ka5NUdTSzasqgLu4E1pqAUweS1k5ugQPIVYLBdFpnIi%2BbTlMBgq1ap46lAJkWIiEaxJPLEJJpPEJ94iCdTZT%2BDw3wAnP1bRg%2BZIMVHdftvE4OqVjhJwXJsMyMVAZenpqFBMoD5Thv97wlsI%2FPqWbiLaMmWXbhl%2BCV9MBXWdHAtzzJwx29fNKaKsAO0bEbyuXsTiwXpYRcZBE0cjxTRyKoi1oPNCshTR%2B7hGtLYqZxzbpRxqNqJFI3o6GQ6vyABfq5dIn5PV9nZqE2hsvAzhF95C9kzU7Ks5Tf6E9UL%2F%2Fpu%2Fd32paBG%2BRTKcWJYQc6JvD%2FrAygQ7Q4RQRLdlqt%2B43HTAXykm7cDv3UGDSRKJjSbEhvvgLnvg4MSzEHnwezXEFrtE4CUk0tS%2BGRYmRjJWNm%2FNbTE3yDl461Nnmsl7%2B%2F02EANE9S%2BslhgOLZSWIZ%2FKL%2FTZzL8%2BB1EtjVGRGBXSVHVZWxsxk30GQBwllGf0UaVBRG7QnelPAnMK3%2BmwWHm%2BMKmF1MMGOqUBRqRmIW9oVpxNrozQ6s9OqcoGSkzPSgbyjgh7MF1bgyeHZowZYrhnoaqqo%2FxuZNpUEC9JfGm4e8onALB5nBTL5fSNsKqw7KDZ%2FzSDh00ZnRjtzwGcKVcC3yOKHmHb4VJK%2FfeRRlVUPx%2BHX%2BNvCjCV5b9jMOdFu6S3Kap87ZvqMLP5NnFnyD1kCe9k668PAwxGcpSuA9SId7sJcwPqPz1QoHt8mAm4&X-Amz-Signature=6057696980c4fda82d74d818e552db1be38251e48b30f86a452ece494e2542a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTC5KJG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDfL%2BCWmADZ4WFkGGyCVl6%2FdkR1Cu0olKXthewJq3X%2BRwIgQhMfAC6Nj0GLczbJF%2FoVzAK7EcH%2FkTr0LS3VjqJo87oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNSIoVJD5mjAHBhdMyrcA25ypQWTrhSPoe2cxfA%2F7uVdyJHsWs7Yrlyxmug541Hd6X%2F8Ah8YEO6nD3rm%2Bn3%2FvmaXMXLO%2BY4ZRrELXLhNddheWclnP3R6REGGd8aGQdULJ3v%2BnpyV57ZWI%2Fbq0Ka5NUdTSzasqgLu4E1pqAUweS1k5ugQPIVYLBdFpnIi%2BbTlMBgq1ap46lAJkWIiEaxJPLEJJpPEJ94iCdTZT%2BDw3wAnP1bRg%2BZIMVHdftvE4OqVjhJwXJsMyMVAZenpqFBMoD5Thv97wlsI%2FPqWbiLaMmWXbhl%2BCV9MBXWdHAtzzJwx29fNKaKsAO0bEbyuXsTiwXpYRcZBE0cjxTRyKoi1oPNCshTR%2B7hGtLYqZxzbpRxqNqJFI3o6GQ6vyABfq5dIn5PV9nZqE2hsvAzhF95C9kzU7Ks5Tf6E9UL%2F%2Fpu%2Fd32paBG%2BRTKcWJYQc6JvD%2FrAygQ7Q4RQRLdlqt%2B43HTAXykm7cDv3UGDSRKJjSbEhvvgLnvg4MSzEHnwezXEFrtE4CUk0tS%2BGRYmRjJWNm%2FNbTE3yDl461Nnmsl7%2B%2F02EANE9S%2BslhgOLZSWIZ%2FKL%2FTZzL8%2BB1EtjVGRGBXSVHVZWxsxk30GQBwllGf0UaVBRG7QnelPAnMK3%2BmwWHm%2BMKmF1MMGOqUBRqRmIW9oVpxNrozQ6s9OqcoGSkzPSgbyjgh7MF1bgyeHZowZYrhnoaqqo%2FxuZNpUEC9JfGm4e8onALB5nBTL5fSNsKqw7KDZ%2FzSDh00ZnRjtzwGcKVcC3yOKHmHb4VJK%2FfeRRlVUPx%2BHX%2BNvCjCV5b9jMOdFu6S3Kap87ZvqMLP5NnFnyD1kCe9k668PAwxGcpSuA9SId7sJcwPqPz1QoHt8mAm4&X-Amz-Signature=30a6962de04b80b63d42cf57ff00f037037de32f676e0dfd6ae8907611aa5f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTC5KJG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDfL%2BCWmADZ4WFkGGyCVl6%2FdkR1Cu0olKXthewJq3X%2BRwIgQhMfAC6Nj0GLczbJF%2FoVzAK7EcH%2FkTr0LS3VjqJo87oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNSIoVJD5mjAHBhdMyrcA25ypQWTrhSPoe2cxfA%2F7uVdyJHsWs7Yrlyxmug541Hd6X%2F8Ah8YEO6nD3rm%2Bn3%2FvmaXMXLO%2BY4ZRrELXLhNddheWclnP3R6REGGd8aGQdULJ3v%2BnpyV57ZWI%2Fbq0Ka5NUdTSzasqgLu4E1pqAUweS1k5ugQPIVYLBdFpnIi%2BbTlMBgq1ap46lAJkWIiEaxJPLEJJpPEJ94iCdTZT%2BDw3wAnP1bRg%2BZIMVHdftvE4OqVjhJwXJsMyMVAZenpqFBMoD5Thv97wlsI%2FPqWbiLaMmWXbhl%2BCV9MBXWdHAtzzJwx29fNKaKsAO0bEbyuXsTiwXpYRcZBE0cjxTRyKoi1oPNCshTR%2B7hGtLYqZxzbpRxqNqJFI3o6GQ6vyABfq5dIn5PV9nZqE2hsvAzhF95C9kzU7Ks5Tf6E9UL%2F%2Fpu%2Fd32paBG%2BRTKcWJYQc6JvD%2FrAygQ7Q4RQRLdlqt%2B43HTAXykm7cDv3UGDSRKJjSbEhvvgLnvg4MSzEHnwezXEFrtE4CUk0tS%2BGRYmRjJWNm%2FNbTE3yDl461Nnmsl7%2B%2F02EANE9S%2BslhgOLZSWIZ%2FKL%2FTZzL8%2BB1EtjVGRGBXSVHVZWxsxk30GQBwllGf0UaVBRG7QnelPAnMK3%2BmwWHm%2BMKmF1MMGOqUBRqRmIW9oVpxNrozQ6s9OqcoGSkzPSgbyjgh7MF1bgyeHZowZYrhnoaqqo%2FxuZNpUEC9JfGm4e8onALB5nBTL5fSNsKqw7KDZ%2FzSDh00ZnRjtzwGcKVcC3yOKHmHb4VJK%2FfeRRlVUPx%2BHX%2BNvCjCV5b9jMOdFu6S3Kap87ZvqMLP5NnFnyD1kCe9k668PAwxGcpSuA9SId7sJcwPqPz1QoHt8mAm4&X-Amz-Signature=65ca6f4b6740eaa7d20c8b55fd2b41340ef5676013e738016a6f35149f62ec1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTC5KJG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDfL%2BCWmADZ4WFkGGyCVl6%2FdkR1Cu0olKXthewJq3X%2BRwIgQhMfAC6Nj0GLczbJF%2FoVzAK7EcH%2FkTr0LS3VjqJo87oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNSIoVJD5mjAHBhdMyrcA25ypQWTrhSPoe2cxfA%2F7uVdyJHsWs7Yrlyxmug541Hd6X%2F8Ah8YEO6nD3rm%2Bn3%2FvmaXMXLO%2BY4ZRrELXLhNddheWclnP3R6REGGd8aGQdULJ3v%2BnpyV57ZWI%2Fbq0Ka5NUdTSzasqgLu4E1pqAUweS1k5ugQPIVYLBdFpnIi%2BbTlMBgq1ap46lAJkWIiEaxJPLEJJpPEJ94iCdTZT%2BDw3wAnP1bRg%2BZIMVHdftvE4OqVjhJwXJsMyMVAZenpqFBMoD5Thv97wlsI%2FPqWbiLaMmWXbhl%2BCV9MBXWdHAtzzJwx29fNKaKsAO0bEbyuXsTiwXpYRcZBE0cjxTRyKoi1oPNCshTR%2B7hGtLYqZxzbpRxqNqJFI3o6GQ6vyABfq5dIn5PV9nZqE2hsvAzhF95C9kzU7Ks5Tf6E9UL%2F%2Fpu%2Fd32paBG%2BRTKcWJYQc6JvD%2FrAygQ7Q4RQRLdlqt%2B43HTAXykm7cDv3UGDSRKJjSbEhvvgLnvg4MSzEHnwezXEFrtE4CUk0tS%2BGRYmRjJWNm%2FNbTE3yDl461Nnmsl7%2B%2F02EANE9S%2BslhgOLZSWIZ%2FKL%2FTZzL8%2BB1EtjVGRGBXSVHVZWxsxk30GQBwllGf0UaVBRG7QnelPAnMK3%2BmwWHm%2BMKmF1MMGOqUBRqRmIW9oVpxNrozQ6s9OqcoGSkzPSgbyjgh7MF1bgyeHZowZYrhnoaqqo%2FxuZNpUEC9JfGm4e8onALB5nBTL5fSNsKqw7KDZ%2FzSDh00ZnRjtzwGcKVcC3yOKHmHb4VJK%2FfeRRlVUPx%2BHX%2BNvCjCV5b9jMOdFu6S3Kap87ZvqMLP5NnFnyD1kCe9k668PAwxGcpSuA9SId7sJcwPqPz1QoHt8mAm4&X-Amz-Signature=0d7e298d09668abf2535fea995c8ec17df7fa9db283db7ff86d1e3ae56e2396b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTC5KJG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDfL%2BCWmADZ4WFkGGyCVl6%2FdkR1Cu0olKXthewJq3X%2BRwIgQhMfAC6Nj0GLczbJF%2FoVzAK7EcH%2FkTr0LS3VjqJo87oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNSIoVJD5mjAHBhdMyrcA25ypQWTrhSPoe2cxfA%2F7uVdyJHsWs7Yrlyxmug541Hd6X%2F8Ah8YEO6nD3rm%2Bn3%2FvmaXMXLO%2BY4ZRrELXLhNddheWclnP3R6REGGd8aGQdULJ3v%2BnpyV57ZWI%2Fbq0Ka5NUdTSzasqgLu4E1pqAUweS1k5ugQPIVYLBdFpnIi%2BbTlMBgq1ap46lAJkWIiEaxJPLEJJpPEJ94iCdTZT%2BDw3wAnP1bRg%2BZIMVHdftvE4OqVjhJwXJsMyMVAZenpqFBMoD5Thv97wlsI%2FPqWbiLaMmWXbhl%2BCV9MBXWdHAtzzJwx29fNKaKsAO0bEbyuXsTiwXpYRcZBE0cjxTRyKoi1oPNCshTR%2B7hGtLYqZxzbpRxqNqJFI3o6GQ6vyABfq5dIn5PV9nZqE2hsvAzhF95C9kzU7Ks5Tf6E9UL%2F%2Fpu%2Fd32paBG%2BRTKcWJYQc6JvD%2FrAygQ7Q4RQRLdlqt%2B43HTAXykm7cDv3UGDSRKJjSbEhvvgLnvg4MSzEHnwezXEFrtE4CUk0tS%2BGRYmRjJWNm%2FNbTE3yDl461Nnmsl7%2B%2F02EANE9S%2BslhgOLZSWIZ%2FKL%2FTZzL8%2BB1EtjVGRGBXSVHVZWxsxk30GQBwllGf0UaVBRG7QnelPAnMK3%2BmwWHm%2BMKmF1MMGOqUBRqRmIW9oVpxNrozQ6s9OqcoGSkzPSgbyjgh7MF1bgyeHZowZYrhnoaqqo%2FxuZNpUEC9JfGm4e8onALB5nBTL5fSNsKqw7KDZ%2FzSDh00ZnRjtzwGcKVcC3yOKHmHb4VJK%2FfeRRlVUPx%2BHX%2BNvCjCV5b9jMOdFu6S3Kap87ZvqMLP5NnFnyD1kCe9k668PAwxGcpSuA9SId7sJcwPqPz1QoHt8mAm4&X-Amz-Signature=a397124c12674ef6363bb49e5ca10a5df98f0a2f3ebd94e387bb6a62ea333fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
