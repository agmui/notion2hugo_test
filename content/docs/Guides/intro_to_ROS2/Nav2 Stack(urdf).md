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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDGEJIF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQ9t1EBva6zsYt0cvn3C0fUt2o5Wa2tugcWifVd1g9lwIgBMPxI5p3ptnVz6vTBByJALuYLc2JM9YZSFLCbtvEYuUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDx%2B%2BHkOsRyb0AkR6SrcA%2FkvlsKHrqAssC3sOENMJh709ioNcgy9%2Bdon6QoLJ6vgZSc%2B71NJBDtftQIqrEulEHCskzZL%2BI058%2BKXKlxRnv8%2BnFy%2Be2BXOdPkhN1KOm11qSspQNUj2x7RdfiIeS0AmcZzKgN4hWnY6lznf4YITPwTcAFBRnHFFHeZR%2B8dx2%2FpmbIOxKnjHyUtTLdnDPMbVQ%2FtQizceC4MsTwd7yCIpnnCup%2B5m%2Fq0MKMLA38Cyh6wiy%2F7htMeMqkqieVcBGEZC8NZGSRFblA4kwT2Y4hr9drSHTj1Fpi5U%2BhMG%2FQPN8hrK7p9%2FL8HsI8E01vjDkGfJ9jdRy1ZObvFUGZGLkQvlfMv2ii7wnFwGUvxDJdZc7f3IsZXw9wLRTeROoa3hfC2XQot3MRSDfJkYpjmen2NKro5sLWtTEYsWbh84fT6omV2kEOXUfzC6pFq1HyETdeRxTPOiO8lNlXm2%2FSGMv5cqhwJecG9wnwYDCMtMhONPSAIlWdQDGYr%2BIJMVKFwt6PsJPPXHCP1ovuMr04Orar3m5XwyoYM5xlGSjd735NOR7DvcX%2FY3ZxRdcZBxBTFI6Upa2UhfjGrmueHxqVgicS2oVdXs2HOMqh%2BTCEjPHvqRlowjDXPW7S88bS8sWUeMKrnhsIGOqUBNsJ1J3Wh9AwKG40Jgvmen5RiY5WsMAnKVuTo6Uml6UmYN7CIv0%2B6iSUDq6xjLP3GxTWqJdPAnSqS%2BEuvMkpqKIllkTwZvj6v%2Ft9a5nMRcw0L2Wl2JYTFEd7FjfAEjMHpQv2ZBzu23dHCYxHy8tRkaURUySfnZdlqOuv3d%2FN1JASd8xXs6AvltTarRO9J%2BoPtgFwSHYob%2Bio7WyByRlywzSgulb55&X-Amz-Signature=583a8e179041f4a8b283aeb88dab444b141382d1b91fe81c593533ef4a352347&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDGEJIF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQ9t1EBva6zsYt0cvn3C0fUt2o5Wa2tugcWifVd1g9lwIgBMPxI5p3ptnVz6vTBByJALuYLc2JM9YZSFLCbtvEYuUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDx%2B%2BHkOsRyb0AkR6SrcA%2FkvlsKHrqAssC3sOENMJh709ioNcgy9%2Bdon6QoLJ6vgZSc%2B71NJBDtftQIqrEulEHCskzZL%2BI058%2BKXKlxRnv8%2BnFy%2Be2BXOdPkhN1KOm11qSspQNUj2x7RdfiIeS0AmcZzKgN4hWnY6lznf4YITPwTcAFBRnHFFHeZR%2B8dx2%2FpmbIOxKnjHyUtTLdnDPMbVQ%2FtQizceC4MsTwd7yCIpnnCup%2B5m%2Fq0MKMLA38Cyh6wiy%2F7htMeMqkqieVcBGEZC8NZGSRFblA4kwT2Y4hr9drSHTj1Fpi5U%2BhMG%2FQPN8hrK7p9%2FL8HsI8E01vjDkGfJ9jdRy1ZObvFUGZGLkQvlfMv2ii7wnFwGUvxDJdZc7f3IsZXw9wLRTeROoa3hfC2XQot3MRSDfJkYpjmen2NKro5sLWtTEYsWbh84fT6omV2kEOXUfzC6pFq1HyETdeRxTPOiO8lNlXm2%2FSGMv5cqhwJecG9wnwYDCMtMhONPSAIlWdQDGYr%2BIJMVKFwt6PsJPPXHCP1ovuMr04Orar3m5XwyoYM5xlGSjd735NOR7DvcX%2FY3ZxRdcZBxBTFI6Upa2UhfjGrmueHxqVgicS2oVdXs2HOMqh%2BTCEjPHvqRlowjDXPW7S88bS8sWUeMKrnhsIGOqUBNsJ1J3Wh9AwKG40Jgvmen5RiY5WsMAnKVuTo6Uml6UmYN7CIv0%2B6iSUDq6xjLP3GxTWqJdPAnSqS%2BEuvMkpqKIllkTwZvj6v%2Ft9a5nMRcw0L2Wl2JYTFEd7FjfAEjMHpQv2ZBzu23dHCYxHy8tRkaURUySfnZdlqOuv3d%2FN1JASd8xXs6AvltTarRO9J%2BoPtgFwSHYob%2Bio7WyByRlywzSgulb55&X-Amz-Signature=fee46782c5964aea95b0f7770762ea6b3d56168fffeec4de1ea2378115a8a859&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDGEJIF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQ9t1EBva6zsYt0cvn3C0fUt2o5Wa2tugcWifVd1g9lwIgBMPxI5p3ptnVz6vTBByJALuYLc2JM9YZSFLCbtvEYuUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDx%2B%2BHkOsRyb0AkR6SrcA%2FkvlsKHrqAssC3sOENMJh709ioNcgy9%2Bdon6QoLJ6vgZSc%2B71NJBDtftQIqrEulEHCskzZL%2BI058%2BKXKlxRnv8%2BnFy%2Be2BXOdPkhN1KOm11qSspQNUj2x7RdfiIeS0AmcZzKgN4hWnY6lznf4YITPwTcAFBRnHFFHeZR%2B8dx2%2FpmbIOxKnjHyUtTLdnDPMbVQ%2FtQizceC4MsTwd7yCIpnnCup%2B5m%2Fq0MKMLA38Cyh6wiy%2F7htMeMqkqieVcBGEZC8NZGSRFblA4kwT2Y4hr9drSHTj1Fpi5U%2BhMG%2FQPN8hrK7p9%2FL8HsI8E01vjDkGfJ9jdRy1ZObvFUGZGLkQvlfMv2ii7wnFwGUvxDJdZc7f3IsZXw9wLRTeROoa3hfC2XQot3MRSDfJkYpjmen2NKro5sLWtTEYsWbh84fT6omV2kEOXUfzC6pFq1HyETdeRxTPOiO8lNlXm2%2FSGMv5cqhwJecG9wnwYDCMtMhONPSAIlWdQDGYr%2BIJMVKFwt6PsJPPXHCP1ovuMr04Orar3m5XwyoYM5xlGSjd735NOR7DvcX%2FY3ZxRdcZBxBTFI6Upa2UhfjGrmueHxqVgicS2oVdXs2HOMqh%2BTCEjPHvqRlowjDXPW7S88bS8sWUeMKrnhsIGOqUBNsJ1J3Wh9AwKG40Jgvmen5RiY5WsMAnKVuTo6Uml6UmYN7CIv0%2B6iSUDq6xjLP3GxTWqJdPAnSqS%2BEuvMkpqKIllkTwZvj6v%2Ft9a5nMRcw0L2Wl2JYTFEd7FjfAEjMHpQv2ZBzu23dHCYxHy8tRkaURUySfnZdlqOuv3d%2FN1JASd8xXs6AvltTarRO9J%2BoPtgFwSHYob%2Bio7WyByRlywzSgulb55&X-Amz-Signature=17546125096fcc0be47825fb45f11d1a5078e150a502108082e4ef687ed1dfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDGEJIF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQ9t1EBva6zsYt0cvn3C0fUt2o5Wa2tugcWifVd1g9lwIgBMPxI5p3ptnVz6vTBByJALuYLc2JM9YZSFLCbtvEYuUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDx%2B%2BHkOsRyb0AkR6SrcA%2FkvlsKHrqAssC3sOENMJh709ioNcgy9%2Bdon6QoLJ6vgZSc%2B71NJBDtftQIqrEulEHCskzZL%2BI058%2BKXKlxRnv8%2BnFy%2Be2BXOdPkhN1KOm11qSspQNUj2x7RdfiIeS0AmcZzKgN4hWnY6lznf4YITPwTcAFBRnHFFHeZR%2B8dx2%2FpmbIOxKnjHyUtTLdnDPMbVQ%2FtQizceC4MsTwd7yCIpnnCup%2B5m%2Fq0MKMLA38Cyh6wiy%2F7htMeMqkqieVcBGEZC8NZGSRFblA4kwT2Y4hr9drSHTj1Fpi5U%2BhMG%2FQPN8hrK7p9%2FL8HsI8E01vjDkGfJ9jdRy1ZObvFUGZGLkQvlfMv2ii7wnFwGUvxDJdZc7f3IsZXw9wLRTeROoa3hfC2XQot3MRSDfJkYpjmen2NKro5sLWtTEYsWbh84fT6omV2kEOXUfzC6pFq1HyETdeRxTPOiO8lNlXm2%2FSGMv5cqhwJecG9wnwYDCMtMhONPSAIlWdQDGYr%2BIJMVKFwt6PsJPPXHCP1ovuMr04Orar3m5XwyoYM5xlGSjd735NOR7DvcX%2FY3ZxRdcZBxBTFI6Upa2UhfjGrmueHxqVgicS2oVdXs2HOMqh%2BTCEjPHvqRlowjDXPW7S88bS8sWUeMKrnhsIGOqUBNsJ1J3Wh9AwKG40Jgvmen5RiY5WsMAnKVuTo6Uml6UmYN7CIv0%2B6iSUDq6xjLP3GxTWqJdPAnSqS%2BEuvMkpqKIllkTwZvj6v%2Ft9a5nMRcw0L2Wl2JYTFEd7FjfAEjMHpQv2ZBzu23dHCYxHy8tRkaURUySfnZdlqOuv3d%2FN1JASd8xXs6AvltTarRO9J%2BoPtgFwSHYob%2Bio7WyByRlywzSgulb55&X-Amz-Signature=77375deb28f2950a18d056bb3fa029e9f45f2a1c70a158d422286bd753d5d7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDGEJIF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQ9t1EBva6zsYt0cvn3C0fUt2o5Wa2tugcWifVd1g9lwIgBMPxI5p3ptnVz6vTBByJALuYLc2JM9YZSFLCbtvEYuUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDx%2B%2BHkOsRyb0AkR6SrcA%2FkvlsKHrqAssC3sOENMJh709ioNcgy9%2Bdon6QoLJ6vgZSc%2B71NJBDtftQIqrEulEHCskzZL%2BI058%2BKXKlxRnv8%2BnFy%2Be2BXOdPkhN1KOm11qSspQNUj2x7RdfiIeS0AmcZzKgN4hWnY6lznf4YITPwTcAFBRnHFFHeZR%2B8dx2%2FpmbIOxKnjHyUtTLdnDPMbVQ%2FtQizceC4MsTwd7yCIpnnCup%2B5m%2Fq0MKMLA38Cyh6wiy%2F7htMeMqkqieVcBGEZC8NZGSRFblA4kwT2Y4hr9drSHTj1Fpi5U%2BhMG%2FQPN8hrK7p9%2FL8HsI8E01vjDkGfJ9jdRy1ZObvFUGZGLkQvlfMv2ii7wnFwGUvxDJdZc7f3IsZXw9wLRTeROoa3hfC2XQot3MRSDfJkYpjmen2NKro5sLWtTEYsWbh84fT6omV2kEOXUfzC6pFq1HyETdeRxTPOiO8lNlXm2%2FSGMv5cqhwJecG9wnwYDCMtMhONPSAIlWdQDGYr%2BIJMVKFwt6PsJPPXHCP1ovuMr04Orar3m5XwyoYM5xlGSjd735NOR7DvcX%2FY3ZxRdcZBxBTFI6Upa2UhfjGrmueHxqVgicS2oVdXs2HOMqh%2BTCEjPHvqRlowjDXPW7S88bS8sWUeMKrnhsIGOqUBNsJ1J3Wh9AwKG40Jgvmen5RiY5WsMAnKVuTo6Uml6UmYN7CIv0%2B6iSUDq6xjLP3GxTWqJdPAnSqS%2BEuvMkpqKIllkTwZvj6v%2Ft9a5nMRcw0L2Wl2JYTFEd7FjfAEjMHpQv2ZBzu23dHCYxHy8tRkaURUySfnZdlqOuv3d%2FN1JASd8xXs6AvltTarRO9J%2BoPtgFwSHYob%2Bio7WyByRlywzSgulb55&X-Amz-Signature=e86dbcd68b1f2e724024d9c0c26dea4cd849bf7aecd60643aa3c8d54b6003f36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDGEJIF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDQ9t1EBva6zsYt0cvn3C0fUt2o5Wa2tugcWifVd1g9lwIgBMPxI5p3ptnVz6vTBByJALuYLc2JM9YZSFLCbtvEYuUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDx%2B%2BHkOsRyb0AkR6SrcA%2FkvlsKHrqAssC3sOENMJh709ioNcgy9%2Bdon6QoLJ6vgZSc%2B71NJBDtftQIqrEulEHCskzZL%2BI058%2BKXKlxRnv8%2BnFy%2Be2BXOdPkhN1KOm11qSspQNUj2x7RdfiIeS0AmcZzKgN4hWnY6lznf4YITPwTcAFBRnHFFHeZR%2B8dx2%2FpmbIOxKnjHyUtTLdnDPMbVQ%2FtQizceC4MsTwd7yCIpnnCup%2B5m%2Fq0MKMLA38Cyh6wiy%2F7htMeMqkqieVcBGEZC8NZGSRFblA4kwT2Y4hr9drSHTj1Fpi5U%2BhMG%2FQPN8hrK7p9%2FL8HsI8E01vjDkGfJ9jdRy1ZObvFUGZGLkQvlfMv2ii7wnFwGUvxDJdZc7f3IsZXw9wLRTeROoa3hfC2XQot3MRSDfJkYpjmen2NKro5sLWtTEYsWbh84fT6omV2kEOXUfzC6pFq1HyETdeRxTPOiO8lNlXm2%2FSGMv5cqhwJecG9wnwYDCMtMhONPSAIlWdQDGYr%2BIJMVKFwt6PsJPPXHCP1ovuMr04Orar3m5XwyoYM5xlGSjd735NOR7DvcX%2FY3ZxRdcZBxBTFI6Upa2UhfjGrmueHxqVgicS2oVdXs2HOMqh%2BTCEjPHvqRlowjDXPW7S88bS8sWUeMKrnhsIGOqUBNsJ1J3Wh9AwKG40Jgvmen5RiY5WsMAnKVuTo6Uml6UmYN7CIv0%2B6iSUDq6xjLP3GxTWqJdPAnSqS%2BEuvMkpqKIllkTwZvj6v%2Ft9a5nMRcw0L2Wl2JYTFEd7FjfAEjMHpQv2ZBzu23dHCYxHy8tRkaURUySfnZdlqOuv3d%2FN1JASd8xXs6AvltTarRO9J%2BoPtgFwSHYob%2Bio7WyByRlywzSgulb55&X-Amz-Signature=1a6a734bff0577c827fa3f1663f3b1130da748dee1df9955560ded30754246e9&X-Amz-SignedHeaders=host&x-id=GetObject)
