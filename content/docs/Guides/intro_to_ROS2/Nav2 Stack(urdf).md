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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZRO43V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHx9UQsCuzhkbftcPYqYWNiQAQKGT1I23R2%2Bm2zOkN0AIgLvXnn35cUKUZuImvX7VyemlzKWRAHnGDFhHR6u7GuRcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcxH7Et2kdpWh94CyrcA2PyfFdVf3FQJ1P1BE73ouUzYr%2BDj6ucUZcfSJenFLX%2Bo8RRbvs%2FtaIriZNfxVFyJqI%2FkhO56ynWrLe%2BoozjpTxm8HiBkj16rilaKDPw%2FvFt%2BmDlvto%2FaBZXHAgDtrHdVRcnHfy7k3nb54eyBaQVLZpU%2B52hkjE65uFJJTRKgFVneY21dzJ0od2H%2BCAPn9ycDD6FDS26mfjUVxhfDkodFIs9mSzK4G40lCjw92wq1VJxa8C8vT5SuRTto2qOrSd7Dgz2qDKr1Aa6fZTIcFRkSa9z4rbZwmijeyHsiOtnlX2dOXq2RulyMY6%2B4FpKPbcao25XCTATBlR549dCfL2E2wbtwxzsH837EaYMZViUie3pYLXZ%2BXFNiJuurS6gs8is2z0AptF06u0DcLdC4V1wKmmrtheAYRbASZIhnfsBrRaZ9GC%2FsnoEBNeiq8ZxJPfJ7og%2FqCA0%2FRoprQzsyOfL0zWPFz4pxpo9yW5LQ97AE%2BQ%2F6ULv5ZvOIybcTyowBwxdppu5TbivrwLxwfE3r8y6ViZqz5HodiAsgyN1ozezsh%2FdNW7wZlNjaD8MX%2BXBKmIE6MSMxkySsbsTaRJSIihaMSIb%2FGKkuy%2FHKusrJyxLwbT1ji6A98JcDt%2F3cnD%2FMOiGnb0GOqUBwkdKokUCvRAeqny68DKak5exG8MNBQxvnOkhjVTVTSK2ZbyY2QXzDJ3qEvBSPvX3cChlR8Nko67b3cir4VwLyKFEuwvYMbs0%2Bs8XePvjPRrdDHGpJhZ497Cb19PfQvfAkS9eqDUQT%2FVCZXjwyrk1xT0HBASM7AgFQtSiDV1CaYtjkCZBx2T5WWcQRwqti0KDVocTtOkOLpJaM1cKED35gaddKnxm&X-Amz-Signature=b9c0749a82da39f760e8ab2fcc5fa8c38be5e4b450a97170948bb617a2a3ba6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZRO43V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHx9UQsCuzhkbftcPYqYWNiQAQKGT1I23R2%2Bm2zOkN0AIgLvXnn35cUKUZuImvX7VyemlzKWRAHnGDFhHR6u7GuRcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcxH7Et2kdpWh94CyrcA2PyfFdVf3FQJ1P1BE73ouUzYr%2BDj6ucUZcfSJenFLX%2Bo8RRbvs%2FtaIriZNfxVFyJqI%2FkhO56ynWrLe%2BoozjpTxm8HiBkj16rilaKDPw%2FvFt%2BmDlvto%2FaBZXHAgDtrHdVRcnHfy7k3nb54eyBaQVLZpU%2B52hkjE65uFJJTRKgFVneY21dzJ0od2H%2BCAPn9ycDD6FDS26mfjUVxhfDkodFIs9mSzK4G40lCjw92wq1VJxa8C8vT5SuRTto2qOrSd7Dgz2qDKr1Aa6fZTIcFRkSa9z4rbZwmijeyHsiOtnlX2dOXq2RulyMY6%2B4FpKPbcao25XCTATBlR549dCfL2E2wbtwxzsH837EaYMZViUie3pYLXZ%2BXFNiJuurS6gs8is2z0AptF06u0DcLdC4V1wKmmrtheAYRbASZIhnfsBrRaZ9GC%2FsnoEBNeiq8ZxJPfJ7og%2FqCA0%2FRoprQzsyOfL0zWPFz4pxpo9yW5LQ97AE%2BQ%2F6ULv5ZvOIybcTyowBwxdppu5TbivrwLxwfE3r8y6ViZqz5HodiAsgyN1ozezsh%2FdNW7wZlNjaD8MX%2BXBKmIE6MSMxkySsbsTaRJSIihaMSIb%2FGKkuy%2FHKusrJyxLwbT1ji6A98JcDt%2F3cnD%2FMOiGnb0GOqUBwkdKokUCvRAeqny68DKak5exG8MNBQxvnOkhjVTVTSK2ZbyY2QXzDJ3qEvBSPvX3cChlR8Nko67b3cir4VwLyKFEuwvYMbs0%2Bs8XePvjPRrdDHGpJhZ497Cb19PfQvfAkS9eqDUQT%2FVCZXjwyrk1xT0HBASM7AgFQtSiDV1CaYtjkCZBx2T5WWcQRwqti0KDVocTtOkOLpJaM1cKED35gaddKnxm&X-Amz-Signature=7718afc2352da8b172e3a73edfad35bf4e920fe006004ebc24b70ad2d84ac60a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZRO43V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHx9UQsCuzhkbftcPYqYWNiQAQKGT1I23R2%2Bm2zOkN0AIgLvXnn35cUKUZuImvX7VyemlzKWRAHnGDFhHR6u7GuRcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcxH7Et2kdpWh94CyrcA2PyfFdVf3FQJ1P1BE73ouUzYr%2BDj6ucUZcfSJenFLX%2Bo8RRbvs%2FtaIriZNfxVFyJqI%2FkhO56ynWrLe%2BoozjpTxm8HiBkj16rilaKDPw%2FvFt%2BmDlvto%2FaBZXHAgDtrHdVRcnHfy7k3nb54eyBaQVLZpU%2B52hkjE65uFJJTRKgFVneY21dzJ0od2H%2BCAPn9ycDD6FDS26mfjUVxhfDkodFIs9mSzK4G40lCjw92wq1VJxa8C8vT5SuRTto2qOrSd7Dgz2qDKr1Aa6fZTIcFRkSa9z4rbZwmijeyHsiOtnlX2dOXq2RulyMY6%2B4FpKPbcao25XCTATBlR549dCfL2E2wbtwxzsH837EaYMZViUie3pYLXZ%2BXFNiJuurS6gs8is2z0AptF06u0DcLdC4V1wKmmrtheAYRbASZIhnfsBrRaZ9GC%2FsnoEBNeiq8ZxJPfJ7og%2FqCA0%2FRoprQzsyOfL0zWPFz4pxpo9yW5LQ97AE%2BQ%2F6ULv5ZvOIybcTyowBwxdppu5TbivrwLxwfE3r8y6ViZqz5HodiAsgyN1ozezsh%2FdNW7wZlNjaD8MX%2BXBKmIE6MSMxkySsbsTaRJSIihaMSIb%2FGKkuy%2FHKusrJyxLwbT1ji6A98JcDt%2F3cnD%2FMOiGnb0GOqUBwkdKokUCvRAeqny68DKak5exG8MNBQxvnOkhjVTVTSK2ZbyY2QXzDJ3qEvBSPvX3cChlR8Nko67b3cir4VwLyKFEuwvYMbs0%2Bs8XePvjPRrdDHGpJhZ497Cb19PfQvfAkS9eqDUQT%2FVCZXjwyrk1xT0HBASM7AgFQtSiDV1CaYtjkCZBx2T5WWcQRwqti0KDVocTtOkOLpJaM1cKED35gaddKnxm&X-Amz-Signature=a8891c88d79e21d3017562a9f615c30fff91437d34f10a6f56c9c9a4d6ac2fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZRO43V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHx9UQsCuzhkbftcPYqYWNiQAQKGT1I23R2%2Bm2zOkN0AIgLvXnn35cUKUZuImvX7VyemlzKWRAHnGDFhHR6u7GuRcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcxH7Et2kdpWh94CyrcA2PyfFdVf3FQJ1P1BE73ouUzYr%2BDj6ucUZcfSJenFLX%2Bo8RRbvs%2FtaIriZNfxVFyJqI%2FkhO56ynWrLe%2BoozjpTxm8HiBkj16rilaKDPw%2FvFt%2BmDlvto%2FaBZXHAgDtrHdVRcnHfy7k3nb54eyBaQVLZpU%2B52hkjE65uFJJTRKgFVneY21dzJ0od2H%2BCAPn9ycDD6FDS26mfjUVxhfDkodFIs9mSzK4G40lCjw92wq1VJxa8C8vT5SuRTto2qOrSd7Dgz2qDKr1Aa6fZTIcFRkSa9z4rbZwmijeyHsiOtnlX2dOXq2RulyMY6%2B4FpKPbcao25XCTATBlR549dCfL2E2wbtwxzsH837EaYMZViUie3pYLXZ%2BXFNiJuurS6gs8is2z0AptF06u0DcLdC4V1wKmmrtheAYRbASZIhnfsBrRaZ9GC%2FsnoEBNeiq8ZxJPfJ7og%2FqCA0%2FRoprQzsyOfL0zWPFz4pxpo9yW5LQ97AE%2BQ%2F6ULv5ZvOIybcTyowBwxdppu5TbivrwLxwfE3r8y6ViZqz5HodiAsgyN1ozezsh%2FdNW7wZlNjaD8MX%2BXBKmIE6MSMxkySsbsTaRJSIihaMSIb%2FGKkuy%2FHKusrJyxLwbT1ji6A98JcDt%2F3cnD%2FMOiGnb0GOqUBwkdKokUCvRAeqny68DKak5exG8MNBQxvnOkhjVTVTSK2ZbyY2QXzDJ3qEvBSPvX3cChlR8Nko67b3cir4VwLyKFEuwvYMbs0%2Bs8XePvjPRrdDHGpJhZ497Cb19PfQvfAkS9eqDUQT%2FVCZXjwyrk1xT0HBASM7AgFQtSiDV1CaYtjkCZBx2T5WWcQRwqti0KDVocTtOkOLpJaM1cKED35gaddKnxm&X-Amz-Signature=82444761fa374d78d8acc00de0f678867ba1b98e87bce8712507bd7fa6e09aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZRO43V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHx9UQsCuzhkbftcPYqYWNiQAQKGT1I23R2%2Bm2zOkN0AIgLvXnn35cUKUZuImvX7VyemlzKWRAHnGDFhHR6u7GuRcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcxH7Et2kdpWh94CyrcA2PyfFdVf3FQJ1P1BE73ouUzYr%2BDj6ucUZcfSJenFLX%2Bo8RRbvs%2FtaIriZNfxVFyJqI%2FkhO56ynWrLe%2BoozjpTxm8HiBkj16rilaKDPw%2FvFt%2BmDlvto%2FaBZXHAgDtrHdVRcnHfy7k3nb54eyBaQVLZpU%2B52hkjE65uFJJTRKgFVneY21dzJ0od2H%2BCAPn9ycDD6FDS26mfjUVxhfDkodFIs9mSzK4G40lCjw92wq1VJxa8C8vT5SuRTto2qOrSd7Dgz2qDKr1Aa6fZTIcFRkSa9z4rbZwmijeyHsiOtnlX2dOXq2RulyMY6%2B4FpKPbcao25XCTATBlR549dCfL2E2wbtwxzsH837EaYMZViUie3pYLXZ%2BXFNiJuurS6gs8is2z0AptF06u0DcLdC4V1wKmmrtheAYRbASZIhnfsBrRaZ9GC%2FsnoEBNeiq8ZxJPfJ7og%2FqCA0%2FRoprQzsyOfL0zWPFz4pxpo9yW5LQ97AE%2BQ%2F6ULv5ZvOIybcTyowBwxdppu5TbivrwLxwfE3r8y6ViZqz5HodiAsgyN1ozezsh%2FdNW7wZlNjaD8MX%2BXBKmIE6MSMxkySsbsTaRJSIihaMSIb%2FGKkuy%2FHKusrJyxLwbT1ji6A98JcDt%2F3cnD%2FMOiGnb0GOqUBwkdKokUCvRAeqny68DKak5exG8MNBQxvnOkhjVTVTSK2ZbyY2QXzDJ3qEvBSPvX3cChlR8Nko67b3cir4VwLyKFEuwvYMbs0%2Bs8XePvjPRrdDHGpJhZ497Cb19PfQvfAkS9eqDUQT%2FVCZXjwyrk1xT0HBASM7AgFQtSiDV1CaYtjkCZBx2T5WWcQRwqti0KDVocTtOkOLpJaM1cKED35gaddKnxm&X-Amz-Signature=d62380316eb3a608aab1c7ee1bd2fa1ef8aca87ad13870e5aa523afcedc1d3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZRO43V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDHx9UQsCuzhkbftcPYqYWNiQAQKGT1I23R2%2Bm2zOkN0AIgLvXnn35cUKUZuImvX7VyemlzKWRAHnGDFhHR6u7GuRcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcxH7Et2kdpWh94CyrcA2PyfFdVf3FQJ1P1BE73ouUzYr%2BDj6ucUZcfSJenFLX%2Bo8RRbvs%2FtaIriZNfxVFyJqI%2FkhO56ynWrLe%2BoozjpTxm8HiBkj16rilaKDPw%2FvFt%2BmDlvto%2FaBZXHAgDtrHdVRcnHfy7k3nb54eyBaQVLZpU%2B52hkjE65uFJJTRKgFVneY21dzJ0od2H%2BCAPn9ycDD6FDS26mfjUVxhfDkodFIs9mSzK4G40lCjw92wq1VJxa8C8vT5SuRTto2qOrSd7Dgz2qDKr1Aa6fZTIcFRkSa9z4rbZwmijeyHsiOtnlX2dOXq2RulyMY6%2B4FpKPbcao25XCTATBlR549dCfL2E2wbtwxzsH837EaYMZViUie3pYLXZ%2BXFNiJuurS6gs8is2z0AptF06u0DcLdC4V1wKmmrtheAYRbASZIhnfsBrRaZ9GC%2FsnoEBNeiq8ZxJPfJ7og%2FqCA0%2FRoprQzsyOfL0zWPFz4pxpo9yW5LQ97AE%2BQ%2F6ULv5ZvOIybcTyowBwxdppu5TbivrwLxwfE3r8y6ViZqz5HodiAsgyN1ozezsh%2FdNW7wZlNjaD8MX%2BXBKmIE6MSMxkySsbsTaRJSIihaMSIb%2FGKkuy%2FHKusrJyxLwbT1ji6A98JcDt%2F3cnD%2FMOiGnb0GOqUBwkdKokUCvRAeqny68DKak5exG8MNBQxvnOkhjVTVTSK2ZbyY2QXzDJ3qEvBSPvX3cChlR8Nko67b3cir4VwLyKFEuwvYMbs0%2Bs8XePvjPRrdDHGpJhZ497Cb19PfQvfAkS9eqDUQT%2FVCZXjwyrk1xT0HBASM7AgFQtSiDV1CaYtjkCZBx2T5WWcQRwqti0KDVocTtOkOLpJaM1cKED35gaddKnxm&X-Amz-Signature=10a2ff1ecde8e52490c790fc3ae4d16aa6ede2556ea6c414c58f67f012760ff4&X-Amz-SignedHeaders=host&x-id=GetObject)
