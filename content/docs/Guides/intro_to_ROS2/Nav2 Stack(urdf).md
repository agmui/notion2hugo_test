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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHSXSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOi5inBbizmVlcKdBClXAVwrGRx8YJbr%2FonQOkTyzRFQIgaDMjRJxN%2BtSb7CnAtm8d1y3Y0RFkuhZJMOJM0WU2oC8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqrXYVuUxWmQVBFEircAzopcY6oIe8OAZJWsviKocMEvvBousnd29fqjTFTKRQYpcCWPRHuDkrccNNOdA3fEhLJb4h7uSGxCOYVbectMDFuqC75h%2Buh7FlrZt8jCD6PPwW5E7MsVu5MBQ92iLhY%2FjcUvHPGboWoqK0NeqKT2ypQB%2BpOxWWnsa7Ev%2Fb%2F6XA2EGMa2WD2wsxHaNkkkCziJkQdXKLqBjpbveh370WudldAjMRzvEKBYBd8onzZyRPx1Aks7Be5WGmMvKbmGRTolaT2CvYPWHyzzvWyxqZ2%2FZnEG6KKP7zvFy9mKOw3FKsbvblF%2FvSZolepfBllmsBRXAsjr6kMF08DBjvO5Muv1calUhQvbH%2BiAR18DXbzrpi5DJk38QUxS%2FWFRGFHDDFBxPOEYstBQ9psUr%2FwnGnjuN1p05fBVfEHVS2tVOhbWdPRn8Hg2A0SIo5RaVD5NeDlAmzvEIScG5ikk1I6utTb4hV93sEz01mq00IJPwiZyhHEmqJsY4Jbr2Id5Rhi5qFC%2BaparZTtnWCetI875JquzpcbZck2AiJEeLv3XX%2FpMtYsQjDn4c8jz7xyTrIgwsQZcWQfEl7tLj4V0MR2IHeZuTavjuzApJBYgyb8ZBJCXAxm7cWTTKvomFhR4vaTMP%2B3h8EGOqUB1o3YLmuu0JdpzNxgEKEnRLvWhDlSBigQ3NLcm%2F1McorzYuTrM9doQFL2Kj1p%2F7MAX%2BxUNAdubIGriwMxsBEvV2adZTOOwPnrtPSPeUhtun529xg%2BXL6oYkwQxBjt%2B71kS3BNKUe5yWkRsHQmEQIuLG4y1Ia0LXOgkGnXzXz326GY2eYxlJJrEnJGpHNq0pQLWjHHmWwoOogYo6G0j2%2FKe67uQsrZ&X-Amz-Signature=d2380c36967711e8da015db7edf1243c53ecedaf8c36ee04aee70508db1695f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHSXSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOi5inBbizmVlcKdBClXAVwrGRx8YJbr%2FonQOkTyzRFQIgaDMjRJxN%2BtSb7CnAtm8d1y3Y0RFkuhZJMOJM0WU2oC8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqrXYVuUxWmQVBFEircAzopcY6oIe8OAZJWsviKocMEvvBousnd29fqjTFTKRQYpcCWPRHuDkrccNNOdA3fEhLJb4h7uSGxCOYVbectMDFuqC75h%2Buh7FlrZt8jCD6PPwW5E7MsVu5MBQ92iLhY%2FjcUvHPGboWoqK0NeqKT2ypQB%2BpOxWWnsa7Ev%2Fb%2F6XA2EGMa2WD2wsxHaNkkkCziJkQdXKLqBjpbveh370WudldAjMRzvEKBYBd8onzZyRPx1Aks7Be5WGmMvKbmGRTolaT2CvYPWHyzzvWyxqZ2%2FZnEG6KKP7zvFy9mKOw3FKsbvblF%2FvSZolepfBllmsBRXAsjr6kMF08DBjvO5Muv1calUhQvbH%2BiAR18DXbzrpi5DJk38QUxS%2FWFRGFHDDFBxPOEYstBQ9psUr%2FwnGnjuN1p05fBVfEHVS2tVOhbWdPRn8Hg2A0SIo5RaVD5NeDlAmzvEIScG5ikk1I6utTb4hV93sEz01mq00IJPwiZyhHEmqJsY4Jbr2Id5Rhi5qFC%2BaparZTtnWCetI875JquzpcbZck2AiJEeLv3XX%2FpMtYsQjDn4c8jz7xyTrIgwsQZcWQfEl7tLj4V0MR2IHeZuTavjuzApJBYgyb8ZBJCXAxm7cWTTKvomFhR4vaTMP%2B3h8EGOqUB1o3YLmuu0JdpzNxgEKEnRLvWhDlSBigQ3NLcm%2F1McorzYuTrM9doQFL2Kj1p%2F7MAX%2BxUNAdubIGriwMxsBEvV2adZTOOwPnrtPSPeUhtun529xg%2BXL6oYkwQxBjt%2B71kS3BNKUe5yWkRsHQmEQIuLG4y1Ia0LXOgkGnXzXz326GY2eYxlJJrEnJGpHNq0pQLWjHHmWwoOogYo6G0j2%2FKe67uQsrZ&X-Amz-Signature=cd219b10eac267623ed28aca56c8a8cf11d8db22a93f2418a6b3dba03b509d64&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHSXSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOi5inBbizmVlcKdBClXAVwrGRx8YJbr%2FonQOkTyzRFQIgaDMjRJxN%2BtSb7CnAtm8d1y3Y0RFkuhZJMOJM0WU2oC8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqrXYVuUxWmQVBFEircAzopcY6oIe8OAZJWsviKocMEvvBousnd29fqjTFTKRQYpcCWPRHuDkrccNNOdA3fEhLJb4h7uSGxCOYVbectMDFuqC75h%2Buh7FlrZt8jCD6PPwW5E7MsVu5MBQ92iLhY%2FjcUvHPGboWoqK0NeqKT2ypQB%2BpOxWWnsa7Ev%2Fb%2F6XA2EGMa2WD2wsxHaNkkkCziJkQdXKLqBjpbveh370WudldAjMRzvEKBYBd8onzZyRPx1Aks7Be5WGmMvKbmGRTolaT2CvYPWHyzzvWyxqZ2%2FZnEG6KKP7zvFy9mKOw3FKsbvblF%2FvSZolepfBllmsBRXAsjr6kMF08DBjvO5Muv1calUhQvbH%2BiAR18DXbzrpi5DJk38QUxS%2FWFRGFHDDFBxPOEYstBQ9psUr%2FwnGnjuN1p05fBVfEHVS2tVOhbWdPRn8Hg2A0SIo5RaVD5NeDlAmzvEIScG5ikk1I6utTb4hV93sEz01mq00IJPwiZyhHEmqJsY4Jbr2Id5Rhi5qFC%2BaparZTtnWCetI875JquzpcbZck2AiJEeLv3XX%2FpMtYsQjDn4c8jz7xyTrIgwsQZcWQfEl7tLj4V0MR2IHeZuTavjuzApJBYgyb8ZBJCXAxm7cWTTKvomFhR4vaTMP%2B3h8EGOqUB1o3YLmuu0JdpzNxgEKEnRLvWhDlSBigQ3NLcm%2F1McorzYuTrM9doQFL2Kj1p%2F7MAX%2BxUNAdubIGriwMxsBEvV2adZTOOwPnrtPSPeUhtun529xg%2BXL6oYkwQxBjt%2B71kS3BNKUe5yWkRsHQmEQIuLG4y1Ia0LXOgkGnXzXz326GY2eYxlJJrEnJGpHNq0pQLWjHHmWwoOogYo6G0j2%2FKe67uQsrZ&X-Amz-Signature=a3e2c36cd89ebe1b2ac862f3cf48dd2e7a3297032f99d23419b2b3c9470a7417&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHSXSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOi5inBbizmVlcKdBClXAVwrGRx8YJbr%2FonQOkTyzRFQIgaDMjRJxN%2BtSb7CnAtm8d1y3Y0RFkuhZJMOJM0WU2oC8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqrXYVuUxWmQVBFEircAzopcY6oIe8OAZJWsviKocMEvvBousnd29fqjTFTKRQYpcCWPRHuDkrccNNOdA3fEhLJb4h7uSGxCOYVbectMDFuqC75h%2Buh7FlrZt8jCD6PPwW5E7MsVu5MBQ92iLhY%2FjcUvHPGboWoqK0NeqKT2ypQB%2BpOxWWnsa7Ev%2Fb%2F6XA2EGMa2WD2wsxHaNkkkCziJkQdXKLqBjpbveh370WudldAjMRzvEKBYBd8onzZyRPx1Aks7Be5WGmMvKbmGRTolaT2CvYPWHyzzvWyxqZ2%2FZnEG6KKP7zvFy9mKOw3FKsbvblF%2FvSZolepfBllmsBRXAsjr6kMF08DBjvO5Muv1calUhQvbH%2BiAR18DXbzrpi5DJk38QUxS%2FWFRGFHDDFBxPOEYstBQ9psUr%2FwnGnjuN1p05fBVfEHVS2tVOhbWdPRn8Hg2A0SIo5RaVD5NeDlAmzvEIScG5ikk1I6utTb4hV93sEz01mq00IJPwiZyhHEmqJsY4Jbr2Id5Rhi5qFC%2BaparZTtnWCetI875JquzpcbZck2AiJEeLv3XX%2FpMtYsQjDn4c8jz7xyTrIgwsQZcWQfEl7tLj4V0MR2IHeZuTavjuzApJBYgyb8ZBJCXAxm7cWTTKvomFhR4vaTMP%2B3h8EGOqUB1o3YLmuu0JdpzNxgEKEnRLvWhDlSBigQ3NLcm%2F1McorzYuTrM9doQFL2Kj1p%2F7MAX%2BxUNAdubIGriwMxsBEvV2adZTOOwPnrtPSPeUhtun529xg%2BXL6oYkwQxBjt%2B71kS3BNKUe5yWkRsHQmEQIuLG4y1Ia0LXOgkGnXzXz326GY2eYxlJJrEnJGpHNq0pQLWjHHmWwoOogYo6G0j2%2FKe67uQsrZ&X-Amz-Signature=2a434a7eae5e3530f1e86947292745f6d70460ffee8e83dc03d055b8b8d65679&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHSXSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOi5inBbizmVlcKdBClXAVwrGRx8YJbr%2FonQOkTyzRFQIgaDMjRJxN%2BtSb7CnAtm8d1y3Y0RFkuhZJMOJM0WU2oC8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqrXYVuUxWmQVBFEircAzopcY6oIe8OAZJWsviKocMEvvBousnd29fqjTFTKRQYpcCWPRHuDkrccNNOdA3fEhLJb4h7uSGxCOYVbectMDFuqC75h%2Buh7FlrZt8jCD6PPwW5E7MsVu5MBQ92iLhY%2FjcUvHPGboWoqK0NeqKT2ypQB%2BpOxWWnsa7Ev%2Fb%2F6XA2EGMa2WD2wsxHaNkkkCziJkQdXKLqBjpbveh370WudldAjMRzvEKBYBd8onzZyRPx1Aks7Be5WGmMvKbmGRTolaT2CvYPWHyzzvWyxqZ2%2FZnEG6KKP7zvFy9mKOw3FKsbvblF%2FvSZolepfBllmsBRXAsjr6kMF08DBjvO5Muv1calUhQvbH%2BiAR18DXbzrpi5DJk38QUxS%2FWFRGFHDDFBxPOEYstBQ9psUr%2FwnGnjuN1p05fBVfEHVS2tVOhbWdPRn8Hg2A0SIo5RaVD5NeDlAmzvEIScG5ikk1I6utTb4hV93sEz01mq00IJPwiZyhHEmqJsY4Jbr2Id5Rhi5qFC%2BaparZTtnWCetI875JquzpcbZck2AiJEeLv3XX%2FpMtYsQjDn4c8jz7xyTrIgwsQZcWQfEl7tLj4V0MR2IHeZuTavjuzApJBYgyb8ZBJCXAxm7cWTTKvomFhR4vaTMP%2B3h8EGOqUB1o3YLmuu0JdpzNxgEKEnRLvWhDlSBigQ3NLcm%2F1McorzYuTrM9doQFL2Kj1p%2F7MAX%2BxUNAdubIGriwMxsBEvV2adZTOOwPnrtPSPeUhtun529xg%2BXL6oYkwQxBjt%2B71kS3BNKUe5yWkRsHQmEQIuLG4y1Ia0LXOgkGnXzXz326GY2eYxlJJrEnJGpHNq0pQLWjHHmWwoOogYo6G0j2%2FKe67uQsrZ&X-Amz-Signature=2f1d5e1896c210a9a704b03b2d533bd2f448bf797877cb206de936c703082257&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHSXSRA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOi5inBbizmVlcKdBClXAVwrGRx8YJbr%2FonQOkTyzRFQIgaDMjRJxN%2BtSb7CnAtm8d1y3Y0RFkuhZJMOJM0WU2oC8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqrXYVuUxWmQVBFEircAzopcY6oIe8OAZJWsviKocMEvvBousnd29fqjTFTKRQYpcCWPRHuDkrccNNOdA3fEhLJb4h7uSGxCOYVbectMDFuqC75h%2Buh7FlrZt8jCD6PPwW5E7MsVu5MBQ92iLhY%2FjcUvHPGboWoqK0NeqKT2ypQB%2BpOxWWnsa7Ev%2Fb%2F6XA2EGMa2WD2wsxHaNkkkCziJkQdXKLqBjpbveh370WudldAjMRzvEKBYBd8onzZyRPx1Aks7Be5WGmMvKbmGRTolaT2CvYPWHyzzvWyxqZ2%2FZnEG6KKP7zvFy9mKOw3FKsbvblF%2FvSZolepfBllmsBRXAsjr6kMF08DBjvO5Muv1calUhQvbH%2BiAR18DXbzrpi5DJk38QUxS%2FWFRGFHDDFBxPOEYstBQ9psUr%2FwnGnjuN1p05fBVfEHVS2tVOhbWdPRn8Hg2A0SIo5RaVD5NeDlAmzvEIScG5ikk1I6utTb4hV93sEz01mq00IJPwiZyhHEmqJsY4Jbr2Id5Rhi5qFC%2BaparZTtnWCetI875JquzpcbZck2AiJEeLv3XX%2FpMtYsQjDn4c8jz7xyTrIgwsQZcWQfEl7tLj4V0MR2IHeZuTavjuzApJBYgyb8ZBJCXAxm7cWTTKvomFhR4vaTMP%2B3h8EGOqUB1o3YLmuu0JdpzNxgEKEnRLvWhDlSBigQ3NLcm%2F1McorzYuTrM9doQFL2Kj1p%2F7MAX%2BxUNAdubIGriwMxsBEvV2adZTOOwPnrtPSPeUhtun529xg%2BXL6oYkwQxBjt%2B71kS3BNKUe5yWkRsHQmEQIuLG4y1Ia0LXOgkGnXzXz326GY2eYxlJJrEnJGpHNq0pQLWjHHmWwoOogYo6G0j2%2FKe67uQsrZ&X-Amz-Signature=0487d38aa41599017b474ca3d057d7001a28c4164578059c44aa05ed5477f033&X-Amz-SignedHeaders=host&x-id=GetObject)
